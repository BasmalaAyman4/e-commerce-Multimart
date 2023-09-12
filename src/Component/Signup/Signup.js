import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import img from "../../assets/images/login-removebg-preview.png"
import Form from 'react-bootstrap/Form';
import styles from "./Signup.module.css"
import { Link } from 'react-router-dom';
export default function Signup() {
    return (
        <>
            <section className={`${styles.login}`}>
                <Container>
                    <Row>
                        <Col>
                            <img alt="" src={img} />
                        </Col>
                        <Col>
                            <div className={`${styles.form}`}>
                                <div >
                                    <h2 className={`${styles.title}`}>Sign-up</h2>
                                    <h3 className={`${styles.signup}`}>Already have an account? <Link to="/login">Login</Link></h3>
                                    <hr />
                                    <div className={styles.userName}>
                                        <Form.Group className="mb-3" controlId="text">
                                            <Form.Label className={`${styles.label}`}>Enter Your Name</Form.Label>
                                            <Form.Control name="text" type='text' autoComplete="off" className={`${styles.input}`} placeholder="Enter Your Name" />
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="email">
                                            <Form.Label className={`${styles.label}`}>Enter Your Email</Form.Label>
                                            <Form.Control name="email" type='email' autoComplete="off" className={`${styles.input}`} placeholder="Enter Your Email" />
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="password">
                                            <Form.Label className={`${styles.label}`}>Enter Your Password</Form.Label>
                                            <Form.Control name="password" type="password" autoComplete="off" className={`${styles.input}`} placeholder="Enter Your Password" />
                                        </Form.Group>
                                        <div className={styles.log__btn}>
                                            <button type='button'>Signup</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}
