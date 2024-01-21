import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const locatCondition = localStorage.getItem("data") ? JSON.parse(localStorage.getItem("data")) : [];

const initialState = {
    quantity: 1,
    cart: locatCondition,
    total: 0,
};

const cartSlice = createSlice({
    name: "Cart Slice",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const check = state.cart.findIndex(element => element.id === action.payload.id);
            if (check !== -1) {
                state.cart = state.cart.filter((value, index, self) => {
                    return self.indexOf(value) === index;
                });
                toast.info(`${action.payload.title} In Cart`, {position: "bottom-left"});
            } else {
                state.cart.push(action.payload);
                localStorage.setItem("data", state.cart);
                toast.success(`Add ${action.payload.title} To Cart`, {position: "bottom-left"});
            }
            localStorage.setItem("data", JSON.stringify(state.cart));
        },
        removeFromCart: (state, action) => {
            if (state.cart.length > 0) {
                state.cart = state.cart.filter( e => e.id !== action.payload.id );
                toast.info(`Remove ${action.payload.title} From Cart`, {position: "bottom-left"});
                if (state.cart.length === 0) { toast.error(`Cart Is Empty`, {position: "bottom-left"}); }
            }
        }
    },
});

export const { addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;