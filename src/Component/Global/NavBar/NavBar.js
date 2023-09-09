import React, { useRef, useState, useEffect } from 'react'
import Container from 'react-bootstrap/Container';
import styles from './NavBar.module.css'
import logo from "../../../assets/images/eco-logo.png"
import 'bootstrap/dist/css/bootstrap.min.css';
import userImg from './../../../assets/images/user-icon.png'
import { Link, NavLink, useLocation } from 'react-router-dom';
import { AiOutlineHeart, AiOutlineShoppingCart, AiOutlineMenu } from "react-icons/ai";
import { Row } from 'react-bootstrap';
import './NavBar.css'
import { useSelector } from 'react-redux';
export default function NavBar() {
    const [navBg, setNavBg] = useState(false);
    const quantity = useSelector(state => state.cart.totalQuantity)
    const menuref = useRef(null)
    const changeNavBg = () => {
        window.scrollY >= 200 ? setNavBg(true) : setNavBg(false);
    }
    useEffect(() => {
        window.addEventListener('scroll', changeNavBg);
        return () => {
            window.removeEventListener('scroll', changeNavBg);
        }
    }, [])
    const menuToggle = () => menuref.current.classList.toggle(`${styles.active__menu}`)
    return (
        <>
            <header className={`${styles.header}`}>
                <Container>
                    <Row>
                        <div onScroll={changeNavBg} className={`${styles.nav__wrapper}`}>
                            <div className={`${styles.logo}`}>
                                <img src={logo} alt='' />
                                <div>
                                    <h1>Multimart</h1>
                                </div>
                            </div>
                            <div className={`${styles.navigation}`} ref={menuref} onClick={menuToggle}>
                                <ul className={styles.menu}>
                                    <li className={styles.nav__item}>
                                        <NavLink to="/" className="nav-link" >Home </NavLink>
                                    </li>
                                    <li className={styles.nav__item}>
                                        <NavLink to="/shop" className="nav-link">Shop</NavLink>
                                    </li>
                                    <li className={styles.nav__item}>
                                        <NavLink to="/cart" className="nav-link" >Cart </NavLink>
                                    </li>
                                </ul>
                            </div>
                            <div className={`${styles.nav__icons}`}>
                                <span className={`${styles.fav__icon}`}>
                                    <AiOutlineHeart className={`${styles.i}`} />
                                    <span className={`${styles.badge}`}>2</span>
                                </span>
                                <span className={`${styles.cart__icon}`}>
                                    <AiOutlineShoppingCart className={`${styles.i}`} />
                                    <span className={`${styles.badge}`}>{quantity}</span>
                                </span>
                                <span>
                                    <img src={userImg} alt='' className={`${styles.userImg}`} />
                                </span>
                                <div className={styles.mobile__menu}>
                                    <span onClick={menuToggle}>
                                        <AiOutlineMenu className={`${styles.i}`} />
                                    </span>

                                </div>
                            </div>

                        </div>
                    </Row>
                </Container>
            </header>

        </>
    )
}
