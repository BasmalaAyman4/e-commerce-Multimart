import React, { useEffect, useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import products from '../../../assets/data/products'
import ProductCase from '../../Global/ProductCase/ProductCase'
import styles from './HomeProducts.module.css'
import imgOffer from "./../../../assets/images/counter-timer-img.png"
export default function HomeProducts() {
    const [trendproduct, setTrendProduct] = useState([])
    const [bestSales, setBestSales] = useState([])
    useEffect(() => {
        const prod = products.filter(product => product.category === "chair")
        setTrendProduct(prod)
        const sale = products.filter(product => product.category === "sofa")
        setBestSales(sale)
    }, [])
    return (
        <>
            <section>
                <Container>
                    <Row>
                        <ProductCase product={trendproduct} title="Trending Products " />
                    </Row>
                    <Row>
                        <h1 className={`${styles.trend}`}></h1>
                        <ProductCase product={bestSales} title="Best Sales " />
                    </Row>
                </Container>
            </section>
            <section className={`${styles.offer}`}>
                <Container >
                    <Row >
                        <Col>
                            <div>
                                <h2>limited offers</h2>
                                <p>quality armchair</p>
                            </div>
                        </Col>
                        <Col>

                            'kjoij'                    </Col>
                    </Row>
                </Container>
            </section>


        </>
    )
}
