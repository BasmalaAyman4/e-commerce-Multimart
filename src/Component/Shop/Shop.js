import React, { useEffect, useRef, useState } from 'react'
import SectionHeader from '../Global/SectionHeader/SectionHeader'
import { Container, Row } from 'react-bootstrap'
import styles from './Shop.module.css'
import products from "./../../assets/data/products"
import ProductCase from '../Global/ProductCase/ProductCase'
export default function Shop() {
    const [valueData, setValueData] = useState('');
    const [data, setData] = useState(products)
    const menuItems = ["sofa", "chair", "mobile", "watch", "wireless"];
    const filterItem = (e) => {
        const newProduct = data.filter((item) => {
            return e.target.value === item.category
        })
        setValueData(e.target.value)
        setData(newProduct)
    }
    return (
        <>
            <SectionHeader />
            <section>
                <Container>
                    <select className={`${styles.formSelect}`} onChange={filterItem}>
                        <option className={`${styles.option} pt-5`}>All Categories</option>
                        {menuItems.map((val, id) => {
                            return (
                                <option className={`${styles.option}`} key={id} value={val}>{val}</option>
                            )
                        })}
                    </select>
                    <Row>
                        <ProductCase product={data} />
                    </Row>
                </Container>
            </section>

        </>
    )
}
