import React from 'react'
import style from "./Checkout.module.css"
import { Col, Container, Row } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import PhoneInput, { isValidPhoneNumber } from 'react-phone-number-input'
import 'react-phone-number-input/style.css'
import SectionHeader from '../Global/SectionHeader/SectionHeader';
import { useSelector } from 'react-redux'

export default function Checkout() {
    const totalQty = useSelector(state => state.cart.totalQuantity)
    const totalAmount = useSelector(state => state.cart.totalAmount)

    return (
        <>
            <section className={`${style.Checkout}`}>
                <SectionHeader title="Checkout" />
                <Container>
                    <h2>Billing Information</h2>
                    <Row className='mt-5'>
                        <Col lg="8">
                            <Form  >
                                <div className={style.userName}>

                                    <Form.Group className="mb-3" controlId="name" >
                                        <Form.Control name="name" className={`${style.input}`} placeholder="Enter your name" />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="email">
                                        <Form.Control name="email" autoComplete="off" className={`${style.input}`} placeholder="Enter your email" />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="phone">
                                        <div class={style.inputGroupp}>
                                            <PhoneInput
                                                defaultCountry="EG"
                                                international
                                                name="phone"
                                                className={` ${style.PhoneInputInput} ${style.PhoneInput}  ${style.input}`} />
                                        </div>
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="address" >
                                        <Form.Control name="address" className={`${style.input}`} placeholder="Street Address" />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="city">
                                        <Form.Control name="city" autoComplete="off" className={`${style.input}`} placeholder="City" />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="postal" >
                                        <Form.Control name="postal" className={`${style.input}`} placeholder="Postal Code" />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="country">
                                        <Form.Control name="country" autoComplete="off" className={`${style.input}`} placeholder="Country" />
                                    </Form.Group>
                                </div>
                                <Button type='submit'>Submit</Button>
                            </Form>
                        </Col>
                        <Col lg="4">
                            <div className={`${style.fatora}`}>
                                <div className={`${style.price}`}>
                                    <h5>Total Qty</h5>
                                    <h2>{totalQty}$</h2>
                                </div>
                                <div className={`${style.price}`}>
                                    <h5>Subtotal</h5>
                                    <h2>{totalAmount}$</h2>
                                </div>
                                <div className={`${style.price}`}>
                                    <h5>free shipping</h5>
                                    <h2>0$</h2>
                                </div>
                                <hr />
                                <div className={`${style.price}`}>
                                    <h5>Total Cost</h5>
                                    <h2>{totalAmount}$</h2>
                                </div>
                                <button className={`${style.btn}`}>Place An Order</button>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

        </>
    )
}
