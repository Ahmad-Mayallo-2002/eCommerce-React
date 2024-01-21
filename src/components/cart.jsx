import { Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { CartItem } from "./cartItem";

export const Cart = () => {
    const selector = useSelector(state => state.one.cart);
    const dispatch = useDispatch();
    return (
        <section className="cart my-5">
            <Container>
                <h1 className="fw-bold text-center mt-5">Cart</h1>
                <hr className="my-5" />
                <CartItem />
                <hr className="my-5" />
            </Container>
        </section>
    )
};