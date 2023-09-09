import React from 'react'
import styles from './Footer.module.css'
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import { ImLocation } from "react-icons/im";
import { MdOutlineMailOutline, MdPhone } from "react-icons/md";
import { Container } from 'react-bootstrap';
export default function Footer() {
    return (
        <MDBFooter className={` text-center text-lg-start text-muted`}>

            <section className={`${styles.footer}`}>
                <MDBContainer className='text-center text-md-start mt-5'>
                    <MDBRow className={`mt-3 ${styles.foot}`}>
                        <MDBCol md='3' lg='4' xl='3' className='mx-auto mb-4'>
                            <h2 className=' fw-bold mb-4'>
                                Multimart
                            </h2>
                            <p>
                                the perfect place for every contemporary furnival store and manufacture. this is furnival
                            </p>
                        </MDBCol>

                        <MDBCol md='2' lg='2' xl='2' className='mx-auto mb-4'>
                            <h5 className={`fw-bold mb-4 ${styles.link}`}>quick links</h5>
                            <p>
                                <a href='#!' className={`text-reset ${styles.a}`}>
                                    <li className={`text-reset ${styles.li}`}>about us</li>
                                </a>
                            </p>
                            <p>
                                <a href='#!' className={`text-reset ${styles.a}`}>
                                    <li className={`text-reset ${styles.li}`}>blogs & articles</li>

                                </a>
                            </p>
                            <p>
                                <a href='#!' className={`text-reset ${styles.a}`}>
                                    <li className={`text-reset ${styles.li}`}>terms & conditions</li>

                                </a>
                            </p>
                            <p>
                                <a href='#!' className={`text-reset ${styles.a}`}>
                                    <li className={`text-reset ${styles.li}`}>privacy policy</li>
                                </a>
                            </p>
                        </MDBCol>

                        <MDBCol md='3' lg='2' xl='2' className='mx-auto mb-4'>
                            <h5 className={`fw-bold mb-4 ${styles.link}`}>categories</h5>
                            <p>
                                <a href='#!' className={`text-reset ${styles.a}`}>
                                    <li className={`text-reset ${styles.li}`}>sofa</li>
                                </a>
                            </p>
                            <p>
                                <a href='#!' className={`text-reset ${styles.a}`}>
                                    <li className={`text-reset ${styles.li}`}>chairs</li>
                                </a>
                            </p>
                            <p>
                                <a href='#!' className={`text-reset ${styles.a}`}>
                                    <li className={`text-reset ${styles.li}`}>tables</li>
                                </a>
                            </p>
                            <p>
                                <a href='#!' className={`text-reset ${styles.a}`}>
                                    <li className={`text-reset ${styles.li}`}>doors</li>
                                </a>
                            </p>
                        </MDBCol>

                        <MDBCol md='4' lg='3' xl='3' className='mx-auto mb-md-0 mb-4'>
                            <h5 className={`fw-bold mb-4 ${styles.link}`}>Contact</h5>
                            <p>
                                <ImLocation /> New York, NY 10012, US
                            </p>
                            <p>
                                <MdOutlineMailOutline /> furnival@example.com
                            </p>
                            <p>
                                <MdPhone /> + 01 234 567 88
                            </p>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </section>

            <div className={`${styles.copy}`}>
                <Container>
                    <div className={`${styles.all}`}>
                        <div className={`${styles.copyRule}`}>
                            <p>terms of use</p>
                            <p>privacy policy</p>
                        </div>
                        <p>2023 © furnival. all rights are reserved</p>
                    </div>
                </Container>
            </div>
        </MDBFooter>
    )
}
