import React from 'react'
import styles from "./ProdDetails.module.css"
import { Col, Container, Row } from 'react-bootstrap'
import SectionHeader from '../Global/SectionHeader/SectionHeader'
import { useParams } from 'react-router-dom'
import Products from "./../../assets/data/products"
export default function ProdDetails() {
    const { id } = useParams()
    const product = Products.filter(prod => prod.id === id)
    const { imgUrl, productName, price, reviews, avgRating, description } = product
    const name = product.map(item => item.productName)
    return (
        <section className={`${styles.details}`}>
            <SectionHeader title={name} />
            {
                product && product.map(item => (
                    <>
                        <Container>
                            <Row>
                                <Col>
                                    <img src={item.imgUrl} />
                                </Col>
                                <Col>
                                </Col>
                            </Row>

                        </Container>
                    </>
                ))
            }

        </section>
    )
}
