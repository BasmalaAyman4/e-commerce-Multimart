import React, { useEffect } from 'react'
import styles from './HomeServices.module.css'
import { Col, Container, Row } from 'react-bootstrap'
import { AiOutlineReload } from "react-icons/ai";
import { MdOutlineLocalShipping } from "react-icons/md";
import { RiSecurePaymentLine } from "react-icons/ri";
import { TbCalendarDollar } from "react-icons/tb";
import Aos from 'aos'
import 'aos/dist/aos.css'
import img from '../../../assets/image/services.png'

export default function HomeService() {
    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, [])
    return (
        <>
            <section className='' data-aos="fade-down">
                <Container>
                    <Row>

                        <Col className={`${styles.col1}`} >
                            <div className={`${styles.col__body}`}>
                                <span><MdOutlineLocalShipping className={`${styles.col__icon}`} /></span>
                                <div>
                                    <h2 className={`${styles.col__title}`}>free shipping</h2>
                                    <p className={`${styles.col__para}`}>Lorem ipsum dolor sit amet</p>
                                </div>
                            </div>
                        </Col>
                        <Col className={`${styles.col2}`}>
                            <div className={`${styles.col__body}`}>
                                <span><AiOutlineReload className={`${styles.col__icon}`} /></span>
                                <div>
                                    <h2 className={`${styles.col__title}`}>easy returns</h2>
                                    <p className={`${styles.col__para}`}>Lorem ipsum dolor sit amet</p>
                                </div>
                            </div>
                        </Col>
                        <Col className={`${styles.col3}`} >
                            <div className={`${styles.col__body}`}>
                                <span><RiSecurePaymentLine className={`${styles.col__icon}`} /></span>
                                <div>
                                    <h2 className={`${styles.col__title}`}>secure payment</h2>
                                    <p className={`${styles.col__para}`}>Lorem ipsum dolor sit amet</p>
                                </div>
                            </div>
                        </Col>
                        <Col className={`${styles.col4}`} >
                            <div className={`${styles.col__body}`}>
                                <span><TbCalendarDollar className={`${styles.col__icon}`} /></span>
                                <div>
                                    <h2 className={`${styles.col__title}`}>back guarantee</h2>
                                    <p className={`${styles.col__para}`}>Lorem ipsum dolor sit amet</p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

        </>
    )
}
