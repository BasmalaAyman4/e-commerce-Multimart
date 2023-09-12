import React from 'react'
import styles from "./Cart.module.css"
import SectionHeader from '../Global/SectionHeader/SectionHeader'
import { Col, Container, Row } from 'react-bootstrap'
import Table from 'react-bootstrap/Table';
import { useSelector } from 'react-redux'
import CartTable from '../Global/CartTable/CartTable';
import { Link } from 'react-router-dom';

export default function Cart() {
    const CartItems = useSelector(state => state.cart.cartItems)
    const totalPrice = useSelector(state => state.cart.totalAmount)
    return (
        <>
            <section className={`${styles.sec}`}>
                <SectionHeader title="Shopping Cart" />
                <Container>
                    <Row className='mt-5'>
                        <Col lg="9">
                            {
                                CartItems.length === 0 ?
                                    <h2>No items added to the cart</h2>
                                    :
                                    <Table responsive="sm">
                                        <thead thead >
                                            <tr>
                                                <th>Image</th>
                                                <th>Title</th>
                                                <th>Price</th>
                                                <th>Qty</th>
                                                <th>Delete</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                CartItems.map((item, index) => (
                                                    <CartTable item={item} key={index} />
                                                ))
                                            }
                                        </tbody>
                                    </Table>
                            }
                        </Col>
                        <Col lg="3" >
                            <div className={`${styles.fatora}`}>
                                <div className={`${styles.price}`}>
                                    <h5>Subtotal</h5>
                                    <h2>{totalPrice}$</h2>
                                </div>
                                <p>taxes and shipping will calculate in checkout</p>
                                <Link to="/checkout" className={`${styles.btn}`}>Checkout</Link>
                                <Link to="/shop" className={`${styles.btn}`}>Continue Shopping</Link>
                            </div>

                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}
