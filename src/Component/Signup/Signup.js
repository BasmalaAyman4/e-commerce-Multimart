import React, { useRef, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import img from "../../assets/images/login-removebg-preview.png"
import Form from 'react-bootstrap/Form';
import styles from "./Signup.module.css"
import { Link } from 'react-router-dom';
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from '../../firebase.config'
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage'
import { storage } from "../../firebase.config"
import { Toast, ToastContainer, toast } from 'react-toastify';
import { setDoc, doc } from 'firebase/firestore';
import { db } from '../../firebase.config';
export default function Signup() {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [file, setFile] = useState(null)
    const [loading, setLoading] = useState(false)
    const signup = async (e) => {
        e.preventDefault()
        setLoading(true)

        try {
            const userCredential = await createUserWithEmailAndPassword(
                auth,
                email,
                password
            )
            const user = userCredential.user;
            const storageRef = ref(storage, `images/${Date.now() + username}`)
            const uploadTask = uploadBytesResumable(storageRef, file)
            uploadTask.on((error) => {
                toast.error(error.message)
                console.log(error.message)
            }, () => {
                getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
                    await updateProfile(user, {
                        displayName: username,
                        photoURL: downloadURL
                    });
                    await setDoc(doc(db, 'users', user.uid), {
                        uid: user.uid,
                        displayName: username,
                        email,
                        photoURL: downloadURL,
                    })
                })
            })
            console.log(user)
        } catch (error) {
            toast.error("something went wrong")
            console.log(error)
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
                                    <h2 className={`${styles.title}`}>Sign-up</h2>
                                    <h3 className={`${styles.signup}`}>Already have an account? <Link to="/login">Login</Link></h3>
                                    <hr />
                                    <Form onSubmit={signup}>
                                        <div className={styles.userName}>
                                            <Form.Group className="mb-3" controlId="text">
                                                <Form.Label className={`${styles.label}`}>Enter Your Name</Form.Label>
                                                <Form.Control onChange={(e) => setUsername(e.target.value)} name="text" type='text' autoComplete="off" className={`${styles.input}`} placeholder="Enter Your Name" />
                                            </Form.Group>
                                            <Form.Group className="mb-3" controlId="email">
                                                <Form.Label className={`${styles.label}`}>Enter Your Email</Form.Label>
                                                <Form.Control onChange={(e) => setEmail(e.target.value)} name="email" type='email' autoComplete="off" className={`${styles.input}`} placeholder="Enter Your Email" />
                                            </Form.Group>
                                            <Form.Group className="mb-3" controlId="password">
                                                <Form.Label className={`${styles.label}`}>Enter Your Password</Form.Label>
                                                <Form.Control onChange={(e) => setPassword(e.target.value)} name="password" type="password" autoComplete="off" className={`${styles.input}`} placeholder="Enter Your Password" />
                                            </Form.Group>
                                            <Form.Group className="mb-3" controlId="file">
                                                <Form.Control onChange={(e) => setFile(e.target.files[0])} name="file" type="file" autoComplete="off" className={`${styles.input}`} />
                                            </Form.Group>
                                            <div className={styles.log__btn}>
                                                <button type='submit'>Signup</button>
                                            </div>
                                        </div>
                                    </Form>
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
