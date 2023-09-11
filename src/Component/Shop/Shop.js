import React, { useEffect, useRef, useState } from 'react'
import SectionHeader from '../Global/SectionHeader/SectionHeader'
import { Container, Row } from 'react-bootstrap'
import styles from './Shop.module.css'
import products from "./../../assets/data/products"
import ProductCase from '../Global/ProductCase/ProductCase'
export default function Shop() {
    const [data, setData] = useState(products)
    const menuItems = [...new Set(products.map((val) => val.category))];
    const filterItem = (category) => {
        if (category === "All Categories") {
            setData(products)
            return;
        }
        const filteredProducts = products.filter(product =>
            product.category === category);
        setData(filteredProducts)
    }
    const searchItem = (e) => {
        const filterSearch = products.filter((item) =>
            item.productName.toLowerCase().includes(e.target.value.toLowerCase())
        )
        setData(filterSearch)
    }
    return (
        <>
            <SectionHeader title="All Products" />
            <section>
                <Container>
                    <div className={`${styles.filterAll}`}>
                        <select className={`${styles.formSelect}`} onChange={(e) => filterItem(e.target.value)}>
                            <option className={`${styles.option} pt-5`}>All Categories</option>
                            {menuItems.map((val) =>
                            (
                                <option className={`${styles.option}`} key={val.toString} value={val}>{val}</option>
                            )
                            )}
                        </select>
                        <div className={`${styles.form}`}>
                            <input className={`${styles.input}`} placeholder="search about products" type="text" onChange={searchItem} />
                            <span className={`${styles.input__border}`}></span>
                        </div>
                    </div>
                    <Row>
                        <ProductCase product={data} />
                    </Row>
                </Container>
            </section>

        </>
    )
}
