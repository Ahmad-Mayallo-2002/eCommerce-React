import { Container, Card } from "react-bootstrap"
export const Home = () => {
    return (
        <section className="home d-flex align-items-center">
            <Container>
                <article className="content text-white text-uppercase">
                    <h1>new season arrivals</h1>
                    <p>check out all the trends</p>
                </article>
            </Container>
        </section>
    )
}