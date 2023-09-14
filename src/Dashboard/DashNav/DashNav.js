import React, { useRef, useState, useEffect } from 'react'
import styles from './DashNav.module.css'
import { Row, Container } from 'react-bootstrap';
import logo from "../../assets/images/eco-logo.png"
import userImg from '../../assets/images/user-icon.png'
import useAuth from '../../Custom-hooks/useAuth';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SettingsIcon from '@mui/icons-material/Settings';
import { Link, NavLink, useLocation } from 'react-router-dom';
export default function DashNav() {
    const { currentUser } = useAuth()
    const admin__nav = [
        {
            display: 'Dashboard',
            path: '/dashboard'
        },
        {
            display: 'All-Products',
            path: '/dashboard/all-product'
        },
        {
            display: 'Orders',
            path: '/dashboard/orders'
        },
        {
            display: 'Users',
            path: '/dashboard/users'
        },
    ]
    return (
        <>
            <header className={`${styles.header}`}>
                <Container>
                    <Row>
                        <div className={`${styles.nav__wrapper}`}>
                            <div className={`${styles.logo}`}>
                                <img src={logo} alt='' />
                                <div>
                                    <h1>Multimart</h1>
                                </div>
                            </div>
                            <div  >
                                <input placeholder="Searth the product..." type="text" name="text" className={`${styles.input}`} />
                            </div>
                            <div className={`${styles.nav__icons}`}>
                                <span className={`${styles.fav__icon}`}>
                                    <NotificationsIcon className={`${styles.i}`} />
                                    <span className={`${styles.badge}`}>2</span>
                                </span>
                                <span className={`${styles.cart__icon}`}>
                                    <SettingsIcon className={`${styles.i}`} />
                                    <span className={`${styles.badge}`}>2</span>
                                </span>
                                <span>
                                    <img src={currentUser ? currentUser.photoURL : userImg} alt='' className={`${styles.userImg}`} />
                                </span>
                            </div>
                        </div>
                    </Row>
                </Container>
            </header>
            <section className={`${styles.admin__menu}`}>
                <Container>
                    <Row>
                        <div className={`${styles.admin__navigation}`}>
                            <ul className={`${styles.admin__list}`}>
                                {
                                    admin__nav.map((item, index) => (
                                        <li key={index} className={`${styles.admin__item}`}>
                                            <NavLink to={item.path}>{item.display}</NavLink>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    </Row>
                </Container>
            </section>

        </>
    )
}
