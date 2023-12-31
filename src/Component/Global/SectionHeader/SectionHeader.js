import React from 'react'
import styles from './SectionHeader.module.css'
import img from './../../../assets/image/about.png'
export default function SectionHeader(props) {
    return (
        <>
            <section className={`${styles.common}`}>
                <div className={`${styles.shopImg}`}>
                    <img src={img} alt="" className={`${styles.bulr}`} />
                    <div className={`${styles.shop__body}`}>
                        <h1 className={`${styles.shop__title}`}>{props.title}</h1>
                    </div>
                </div>
            </section>

        </>
    )
}
