import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import img from "../../assets/images/login-removebg-preview.png"
import Form from 'react-bootstrap/Form';
import styles from "./LoginDash.module.css"
import { Link, useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from "../../firebase.config"
import { ToastContainer, toast } from 'react-toastify';

export default function LoginDash() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()
    const signIn = async (e) => {
        e.preventDefault()
        setLoading(true)
        try {
            const userCredential = await signInWithEmailAndPassword(
                auth,
                email,
                password
            )
            const user = userCredential.user;
            console.log(user)
            setLoading(false)
            toast.success('Successfully logged in')
            navigate('/dashboard')

        } catch (error) {
            setLoading(false)
            toast.error(error.message)
        }
    }
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
                                    <h2 className={`${styles.title}`}>Login Dashboard</h2>

                                    <hr />
                                    {
                                        loading ?
                                            <h2>LOADING...</h2> :
                                            <>
                                                <Form onSubmit={signIn}>
                                                    <div className={styles.userName}>
                                                        <Form.Group className="mb-3" controlId="email">
                                                            <Form.Label className={`${styles.label}`}>Enter Your Email</Form.Label>
                                                            <Form.Control onChange={(e) => setEmail(e.target.value)} name="email" type='email' autoComplete="off" className={`${styles.input}`} placeholder="Enter Your Email" />
                                                        </Form.Group>
                                                        <Form.Group className="mb-3" controlId="password">
                                                            <Form.Label className={`${styles.label}`}>Enter Your Password</Form.Label>
                                                            <Form.Control onChange={(e) => setPassword(e.target.value)} name="password" type="password" autoComplete="off" className={`${styles.input}`} placeholder="Enter Your Password" />
                                                        </Form.Group>
                                                        <div className={styles.log__btn}>
                                                            <button type='submit'>Login</button>
                                                        </div>
                                                    </div>
                                                </Form>
                                            </>
                                    }


                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
                <ToastContainer />
            </section>


        </>
    )
}
