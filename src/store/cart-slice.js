import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name: 'Cart',
    initialState:{
        cartItems: [],
        totalPrice: 0,
        totalQuantity: 0,
        error: false
    },
    reducers: {
        addToCart (state, action) {
            console.log('now in addToCart');
            const existingItem = state.cartItems.find(item => item.id === action.payload.id ); // check if a copy of the item already exist.
            state.totalQuantity++;       //if yes, increase total quantity only, no need of adding the item again.
            
            if(!existingItem){      //if the item does not exist, push the new item inside the cart.
                state.cartItems.push({
                    id: action.payload.id,
                    key: action.payload.id,
                    title: action.payload.title,
                    quantity: 1,
                    price: action.payload.price,
                    total: action.payload.price,
                    image: action.payload.image
                })
                state.totalPrice += action.payload.price;  //for new item, we multiply the totalPrice * quantity
                console.log(state.totalPrice, '.........testing1 new item......');
            } else {
                existingItem.quantity++;  //if its not a new item, increase the quantity of the item too.
                existingItem.total = existingItem.price * existingItem.quantity;  //calculate the total factoring the increased quantity
                state.totalPrice += existingItem.price; 
            }
        },
        removeFromCart (state, action) {
            const newId = action.payload;   //new item id
            const existingItem = state.cartItems.find(item => item.id === newId); //check if the item already exists in cart
            state.totalQuantity--;  //if yes, reduce the total quantity, not remove the whole item

            if(existingItem && existingItem.quantity === 1) {  //if the item exist and its just one
                state.cartItems = state.cartItems.filter(product => product.id !== newId) //remove the whole item including title, price,etc
                state.totalPrice -= existingItem.price;  //calculate the total by removing the price of the removed item
            } else{
                existingItem.quantity--;   //else, if it is not the last item, reduce quantity
                state.totalPrice = existingItem.total - existingItem.price;   //then calculate total
            }
        },
        incrementQuantity (state, action) {
            const existingItem = state.cartItems.find(item => item.id === action.payload.id );
            existingItem.quantity++;
            state.totalQuantity++;
            existingItem.total = existingItem.price * existingItem.quantity;
            state.totalPrice += existingItem.price; 
        },
        decrementQuantity (state, action) {
            const existingItem = state.cartItems.find(item => item.id === action.payload.id );
            if(existingItem.quantity === 1) {
                // find the index of item you want to remove
                let indexToRemove = state.cartItems.indexOf(existingItem);
                state.totalPrice -= existingItem.price;
                state.cartItems.splice(indexToRemove, 1);
                state.totalQuantity--;
                return;
            }
            existingItem.quantity--;
            existingItem.total -= existingItem.price;
            state.totalPrice -= existingItem.price;
            state.totalQuantity--;
        },
        clearCart (state) {
            state.cartItems = [];
            state.totalQuantity = 0;
            state.totalPrice = 0;
        },
    }
});

export const cartActions = cartSlice.actions;
export default cartSlice;