import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { Col, Container, Row, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/cartSlice";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";

export const Product = () => {
    const [data, getData] = useState(null);
    const {id} = useParams();
    const selector = useSelector(state => state.one.cart);
    const dispatch = useDispatch();

    const handleAddCart = () => {
        dispatch(addToCart(data));
    }

    useEffect(
        () => {
            const fetchProduct = async () => {
                try {
                    const request = await fetch(`https://fakestoreapi.com/products/${id}`);
                    const response = await request.json();
                    getData(response);
                } catch(error) {
                    console.log(error);
                }
            }
            fetchProduct();
        }, [id]);
    return (
        <>
            <section className="product my-5">
                <Container>
                    {
                        !data ? 
                        <p className="product-loading"></p> :
                        <Row className="flex-wrap justify-content-center row-gap-5">
                            <Col className="text-center" sm="auto">
                                <img style={{maxWidth: "100%", height: "400px"}} src={data.image} alt={data.category} />
                            </Col>
                            <Col sm="auto">
                                <h3 className="text-uppercase text-secondary">{data.category}</h3>
                                <h3 className="text-uppercase fs-1">{data.title}</h3>
                                <h3 className="fw-bold">Rating {data.rating.rate} <FontAwesomeIcon icon={faStar} /></h3>
                                <h3 className="fw-bold fs-1">${data.price}</h3>
                                <p className="lh-lg">{data.description}</p>
                                <div className="buttons">
                                    <Button onClick={handleAddCart} className="me-3" variant="outline-dark">Add To Cart</Button>
                                    <Link className="btn btn-dark" to="/cart">Go To Cart</Link>
                                </div>
                            </Col>
                        </Row>
                    }
                </Container>
            </section>
            <ToastContainer />
        </>
    )
}