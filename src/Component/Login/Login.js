import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import img from "../../assets/images/login-removebg-preview.png"
import Form from 'react-bootstrap/Form';
import styles from "./Login.module.css"
import { Link } from 'react-router-dom';
export default function Login() {
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
                                    <h2 className={`${styles.title}`}>Login</h2>
                                    <h3 className={`${styles.signup}`}>Don't have an account? <Link to="/signup">Sign-up</Link></h3>
                                    <hr />
                                    <div className={styles.userName}>
                                        <Form.Group className="mb-3" controlId="email">
                                            <Form.Label className={`${styles.label}`}>Enter Your Email</Form.Label>
                                            <Form.Control name="email" type='email' autoComplete="off" className={`${styles.input}`} placeholder="Enter Your Email" />
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="password">
                                            <Form.Label className={`${styles.label}`}>Enter Your Password</Form.Label>
                                            <Form.Control name="password" type="password" autoComplete="off" className={`${styles.input}`} placeholder="Enter Your Password" />
                                        </Form.Group>
                                        <div className={styles.log__btn}>
                                            <button type='button'>Login</button>
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
