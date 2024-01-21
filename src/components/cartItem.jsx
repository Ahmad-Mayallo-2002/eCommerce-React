import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../redux/cartSlice";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export const CartItem = () => {
    const selector = useSelector(state => state.one);
    const [quantities, setQuantities] = useState(selector?.cart.map(item => 1));

    const handleBuyMore = (index) => {
        const newQuantities = [...quantities];
        newQuantities[index] += 1;
        setQuantities(newQuantities);
    }
    
    const handleBuyLess = (index) => {
        const newQuantities = [...quantities];
        if (newQuantities[index] === 1) {
            dispatch(removeFromCart(selector?.cart[index]));
        } else {
            newQuantities[index] -= 1;
            setQuantities(newQuantities);
        }
    }

    const dispatch = useDispatch();

    return (
        <section className="cart d-flex flex-column row-gap-5">
            <Container>
                {
                    selector?.cart.map(
                        (element, index) => {
                            const {id, title,image, price} = element;
                            return (
                                <Row key={id} className="align-items-center bg-light p-5">
                                    <Col style={{textAlign: "center"}}>
                                        <img src={image} alt={title} style={{height: "200px"}} />
                                    </Col>
                                    <Col>
                                        <h3 className="fw-bold fs-2">{title}</h3>
                                        <div className="price">
                                            <p className="fw-bold fs-3">{quantities[index]} x ${price} = ${price * quantities[index]}</p>
                                        </div>
                                        <div className="buttons">
                                            <Button className="me-3" variant="outline-dark" onClick={() => handleBuyMore(index)}>
                                                <FontAwesomeIcon icon={faPlus} />
                                            </Button>
                                            <Button variant="outline-dark" onClick={() => handleBuyLess(index)}>
                                                <FontAwesomeIcon icon={faMinus} />
                                            </Button>
                                        </div>
                                    </Col>
                                </Row>
                            )
                        }
                    )
                }
            </Container>
            <ToastContainer />
        </section>
    );
}