import { Container, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export const Products = () => {
    const [data, handleData] = useState(null);
    const [filteredData, setFilteredData] = useState(data);

    const handleFilter = (cat) => {
        const updatedData = data.filter(x => x.category === cat);
        setFilteredData(updatedData);

    }

    useEffect(
        () => {
            const fetchData = async () => {
                const request = await fetch("https://fakestoreapi.com/products");
                const response = await request.json();
                handleData(response);
                setFilteredData(response);
            }
            fetchData();
    }, []);

    return (
        <section className="products py-5">
            <Container>
                <h3 className="text-center fw-bold fs-1 text-dark mb-5">Our Products</h3>
                <hr className="mb-0" />
                <section className="products-container">
                    <div className="buttons mt-5 d-flex flex-wrap justify-content-center align-items-center gap-3">
                            <Button variant="outline-dark" onClick={() => setFilteredData(data)}>All</Button>
                            <Button variant="outline-dark" onClick={() => handleFilter("men's clothing")}>Men's Clothing</Button>
                            <Button variant="outline-dark" onClick={() => handleFilter("women's clothing")}>Women's Clothing</Button>
                            <Button variant="outline-dark" onClick={() => handleFilter("jewelery")}>Jewelery</Button>
                            <Button variant="outline-dark" onClick={() => handleFilter("electronics")}>Electronic</Button>
                    </div>
                    {
                        filteredData ? 
                        filteredData.map(
                            (product, index) => {
                                const {id, title, price, image, rating } = product;
                                return (
                                    <Card key={id}>
                                        <Card.Img height={300} style={{objectFit: "contain", padding: "1rem"}} variant="top" src={image} />
                                        <Card.Body>
                                            <Card.Title className="text-center">{title}</Card.Title>
                                            <div className=" my-3 price-rate d-flex align-items-center justify-content-between text-secondary">
                                                <Card.Text className="mb-0">
                                                    {price}$
                                                </Card.Text>
                                                <Card.Text>
                                                    {rating.rate}
                                                </Card.Text>
                                            </div>
                                            <Link className="d-block mx-auto position-relative btn btn-outline-dark" to={`/products/${id}`}>Add To Cart</Link>
                                        </Card.Body>
                                    </Card>
                                )
                            }
                        ) : <p className="product-loading"></p>
                    }
                </section>
            </Container>
        </section>
    )
}