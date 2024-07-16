import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchProducts = createAsyncThunk('products/fetchProducts',
    async () => {
        const response = await fetch(`/api/products?organization_id=
            ${process.env.REACT_APP_ORGS_ID}&Appid=${process.env.REACT_APP_ID}&Apikey=
            ${process.env.REACT_APP_API_KEY}`);

            if (!response.ok) {
                throw new Error('Network response was not ok');
            } 
            const data = await response.json();
            return data;
    }

)

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cartItems: [],
        totalQuantity: 0,
        total: 0.00
    },
    reducers: {
        addToCart(state, action) {
            // check if a copy of the item already exist
            console.log('now in addToCart');
            const existingItem = state.cartItems.find(item => item.id === action.payload.id );
            state.totalQuantity++;
            
            if(!existingItem){
                state.cartItems.push({
                    id: action.payload.id,
                    key: action.payload.id,
                    name: action.payload.name,
                    quantity: 1,
                    price: action.payload.current_price[0]?.NGN[0],
                    total: action.payload.current_price[0]?.NGN[0],
                    image: action.payload.photos[0]?.url
                })
                state.total += action.payload.price * state.quantity;
                
                console.log(state.cartItems);
                console.log( '........testingState..........');
            } else {
                existingItem.quantity++;
                existingItem.total = existingItem.price * existingItem.quantity;
                state.total += existingItem.price; 
            }

        },
        incrementQuantity(state, action) {
            const existingItem = state.cartItems.find(item => item.id === action.payload.id );
            existingItem.quantity++;
            state.totalQuantity++;
            existingItem.total = existingItem.price * existingItem.quantity;
            state.total += existingItem.price; 
        },
        decrementQuantity(state, action) {
            const existingItem = state.cartItems.find(item => item.id === action.payload.id );
            if(existingItem.quantity === 1) {
                // find the index of item you want to remove
                let indexToRemove = state.cartItems.indexOf(existingItem);
                state.cartItems.splice(indexToRemove, 1);
                return;
            }
            existingItem.quantity--;
            state.totalQuantity--;
        },

        removeFromCart(state, action) {
            const newId = action.payload;
            const existingItem = state.cartItems.find(item => item.id === newId);
            state.quantity--;

            if(existingItem && existingItem.quantity === 1) {
                state.cartItems = state.cartItems.filter(product => product.id !== newId)
                state.total -= existingItem.price; 
            } else{
                existingItem.quantity--;
                state.total -= existingItem.total;
            }

        },

        clearCart(state) {
            state.cartItems = [];
            state.quantity = 0;
            state.total = 0;
        },
    },
    extraReducers: (builder) => {
        builder
        .addCase(fetchProducts.pending, (state) => {
            state.status = 'loading';
        })
        .addCase(fetchProducts.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.products = action.payload;
        })
        .addCase(fetchProducts.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
        })
    }
});

// export const {addToCart, removeFromCart, clearCart} = cartSlice.actions;
export const cartActions = cartSlice.actions;
export const selectProducts = (state) => state.products.products;
 export const selectCartItems = (state) => state.products.cartItems;

export default cartSlice;