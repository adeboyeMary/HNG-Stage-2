import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name: 'Cart',
    initialState:{
        cartItems: [],
        total: 0.00,
        quantity: 0,
        totalQuantity: 0,
        error: false
    },
    reducers: {
        addToCart (state, action) {
            console.log('now in addToCart');
            const existingItem = state.cartItems.find(item => item.id === action.payload.id );
            state.totalQuantity++;
            
            if(!existingItem){
                state.cartItems.push({
                    id: action.payload.id,
                    key: action.payload.id,
                    title: action.payload.title,
                    quantity: 1,
                    price: action.payload.price,
                    total: action.payload.price,
                    image: action.payload.image
                })
                state.total += action.payload.price * state.quantity;
                
                console.log(state.cartItems);
                console.log( '........testingState..........');
            } else {
                // existingItem.quantity++;
                // existingItem.total = existingItem.price * existingItem.quantity;
                // state.total += existingItem.price; 
                state.total += action.payload.price; // Update total price of all items
                state.totalQuantity++;
            }
        },
        removeFromCart (state, action) {
            const newId = action.payload;
            const existingItem = state.cartItems.find(item => item.id === newId);
            state.quantity--;
            state.totalQuantity--;

            if(existingItem && existingItem.quantity === 1) {
                state.cartItems = state.cartItems.filter(product => product.id !== newId)
                state.total -= existingItem.price; 
                state.totalQuantity--;
            } else{
                existingItem.quantity--;
                existingItem.totalQuantity--;
                state.total -= existingItem.total;
            }
        },
        incrementQuantity (state, action) {
            const existingItem = state.cartItems.find(item => item.id === action.payload.id );
            existingItem.quantity++;
            state.totalQuantity++;
            existingItem.total = existingItem.price * existingItem.quantity;
            state.total += existingItem.price; 
        },
        decrementQuantity (state, action) {
            const existingItem = state.cartItems.find(item => item.id === action.payload.id );
            if(existingItem.quantity === 1) {
                // find the index of item you want to remove
                let indexToRemove = state.cartItems.indexOf(existingItem);
                state.cartItems.splice(indexToRemove, 1);
                return;
            }
            existingItem.quantity--;
            existingItem.total -= existingItem.price;
            state.totalQuantity--;
        },
        clearCart (state) {
            state.cartItems = [];
            state.totalQuantity = 0;
            state.total = 0;
        },
    }
});

// export const { addToCart, removeFromCart, incrementQuantity, decrementQuantity, clearCart } = cartSlice.actions;
export const cartActions = cartSlice.actions;
export default cartSlice;