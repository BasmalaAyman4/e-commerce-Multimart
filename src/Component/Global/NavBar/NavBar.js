import React, { useRef, useState, useEffect } from 'react'
import Container from 'react-bootstrap/Container';
import styles from './NavBar.module.css'
import logo from "../../../assets/images/eco-logo.png"
import 'bootstrap/dist/css/bootstrap.min.css';
import userImg from './../../../assets/images/user-icon.png'
import { Link, NavLink, useLocation } from 'react-router-dom';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import { Row } from 'react-bootstrap';
import './NavBar.css'
import { useSelector } from 'react-redux';
import useAuth from '../../../Custom-hooks/useAuth';
import { signOut } from "firebase/auth"
import { auth } from '../../../firebase.config';
import { ToastContainer, toast } from 'react-toastify';
export default function NavBar() {
    const [navBg, setNavBg] = useState(false);
    const quantity = useSelector(state => state.cart.totalQuantity)
    const menuref = useRef(null)
    const { currentUser } = useAuth()
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
    const logout = () => {
        signOut(auth).then(() => {
            toast.success('Logged out')
        }).catch(err => {
            toast.error(err.message)
        })

    }
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
                                    {
                                        currentUser ?
                                            <li className={styles.nav__item}>
                                                <NavLink to="/" onClick={logout} className="nav-link"  >Logout</NavLink>
                                            </li>
                                            :
                                            <li className={styles.nav__item}>
                                                <NavLink to="/login" className="nav-link" >Login </NavLink>
                                            </li>
                                    }

                                </ul>
                            </div>
                            <div className={`${styles.nav__icons}`}>
                                <span className={`${styles.fav__icon}`}>
                                    <FavoriteBorderIcon className={`${styles.i}`} />
                                    <span className={`${styles.badge}`}>2</span>
                                </span>
                                <span className={`${styles.cart__icon}`}>
                                    <Link to="/cart"><ShoppingCartIcon className={`${styles.i}`} /></Link>
                                    <span className={`${styles.badge}`}>{quantity}</span>
                                </span>
                                <span>
                                    <img src={currentUser ? currentUser.photoURL : userImg} alt='' className={`${styles.userImg}`} />

                                </span>

                                <div className={styles.mobile__menu}>
                                    <span onClick={menuToggle}>
                                        <MenuOpenIcon className={`${styles.i}`} />
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
