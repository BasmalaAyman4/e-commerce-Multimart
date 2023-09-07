import React, { useRef, useState } from 'react';
import styles from './HomeHeader.module.css'
import { Col, Container, Row } from 'react-bootstrap';
import hero from './../../../assets/images/hero-img.png'
import { NavLink } from 'react-router-dom';

export default function HomeHeader() {
    return (
        <>
            <section className={`${styles.sec}`}>
                <Container>
                    <Row className={`${styles.row}`}>
                        <Col>
                            <p className={`${styles.trend}`}>Trending product in 2022</p>
                            <h1 className={`${styles.title}`}>make your interior more minimalistic & modern</h1>
                            <p className={`${styles.para}`}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat nula repetiat quo eaque alias corporis sunt, facilis nesciunt rem fugit</p>
                            <NavLink to='/shop' className={`${styles.btn}`}>shop now</NavLink>
                        </Col>
                        <Col>
                            <img src={hero} alt='' />
                        </Col>
                    </Row>

                </Container>
            </section>

        </>
    )
}
