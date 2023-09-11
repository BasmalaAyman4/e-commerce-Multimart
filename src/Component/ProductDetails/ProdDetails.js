import React from 'react'
import styles from "./ProdDetails.module.css"
import { Col, Container, Row } from 'react-bootstrap'
import SectionHeader from '../Global/SectionHeader/SectionHeader'
import { useParams } from 'react-router-dom'
import Products from "./../../assets/data/products"
import StarIcon from '@mui/icons-material/Star';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import "./productDetails.css"
export default function ProdDetails() {
    const { id } = useParams()
    const product = Products.filter(prod => prod.id === id)
    const name = product.map(item => item.productName)
    return (
        <section className={`${styles.details}`}>
            <SectionHeader title={name} />
            {
                product && product.map(item => (
                    <>
                        <Container>
                            <Row key={item.id}>
                                <Col>
                                    <img src={item.imgUrl} />
                                </Col>
                                <Col>
                                    <div>
                                        <h2>{item.productName}</h2>
                                        <div>
                                            <div>
                                                <span>
                                                    <StarIcon />
                                                </span>
                                                <span>
                                                    <StarIcon />
                                                </span>
                                                <span>
                                                    <StarIcon />
                                                </span>
                                                <span>
                                                    <StarIcon />
                                                </span>
                                                <span>
                                                    <StarHalfIcon />
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                            </Row>

                        </Container>
                    </>
                ))
            }

        </section>
    )
}
