import React, { useEffect, useState, useRef } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import products from '../../../assets/data/products'
import ProductCase from '../../Global/ProductCase/ProductCase'
import styles from './HomeProducts.module.css'
import imgOffer from "./../../../assets/images/counter-timer-img.png"
export default function HomeProducts() {
    const [trendproduct, setTrendProduct] = useState([])
    const [bestSales, setBestSales] = useState([])
    const [timerDays, setTimerDays] = useState('00');
    const [timerHours, setTimerHours] = useState('00');
    const [timerMinutes, setTimerMinutes] = useState('00');
    const [timerSeconds, setTimerSeconds] = useState('00');
    useEffect(() => {
        const prod = products.filter(product => product.category === "chair")
        setTrendProduct(prod)
        const sale = products.filter(product => product.category === "sofa")
        setBestSales(sale)
        startTimer()
    }, [])
    let interval = useRef();
    const startTimer = () => {
        const countdownDate = new Date('oct 10, 2023').getTime();
        interval = setInterval(() => {
            const now = new Date().getTime();
            const distance = countdownDate - now;
            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)));
            const minutes = Math.floor((distance % (1000 * 60 * 60) / (1000 * 60)));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            if (distance <= 0) {
                clearInterval(interval.current)
            } else {
                setTimerDays(days);
                setTimerHours(hours);
                setTimerMinutes(minutes);
                setTimerSeconds(seconds);
            }
        }, 1000);
    }

    return (
        <>
            <section>
                <Container>
                    <Row>
                        <ProductCase product={trendproduct} title="Trending Products " />
                    </Row>
                    <Row>
                        <h1 className={`${styles.trend}`}></h1>
                        <ProductCase product={bestSales} title="Best Sales " />
                    </Row>
                </Container>
            </section>
            <section className={`${styles.offer}`}>
                <Container >
                    <Row >
                        <Col className={`${styles.offer__body}`}>
                            <div className={`${styles.offer__body}`} >
                                <p className={`${styles.offer__para}`}>limited offers</p>
                                <h2 className={`${styles.offer__title}`}>quality armchair</h2>
                            </div>
                            <div className={`${styles.offer__date}`}>
                                <div className={`${styles.offer__time}`}>
                                    <p>{timerDays}</p>
                                    <span>Days</span>
                                </div>
                                <span className={`${styles.dot}`}>:</span>
                                <div className={`${styles.offer__time}`}>
                                    <p>{timerHours}</p>
                                    <span>Hours</span>
                                </div>
                                <span className={`${styles.dot}`}>:</span>
                                <div className={`${styles.offer__time}`}>
                                    <p>{timerMinutes}</p>
                                    <span>Minutes</span>
                                </div>
                                <span className={`${styles.dot}`}>:</span>
                                <div className={`${styles.offer__time}`}>
                                    <p>{timerSeconds}</p>
                                    <span>Seconds</span>
                                </div>
                            </div>
                        </Col>
                        <Col className={`${styles.imgoffer}`}>
                            <img src={imgOffer} alt="" />
                        </Col>
                    </Row>
                </Container>
            </section>


        </>
    )
}
