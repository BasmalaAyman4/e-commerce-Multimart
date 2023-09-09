import React from 'react'
import { Col } from 'react-bootstrap'
import { BsFillPlusCircleFill } from "react-icons/bs";
import styles from './ProductCase.module.css'
import { Link } from 'react-router-dom';
export default function ProductCase({ product, title }) {
    return (
        <>
            <h1 className={`${styles.trend}`}>{title}</h1>

            {
                product.map((data) => (
                    <Col key={data.id} lg="3" className='mb-5'>
                        <Link to={`/shop/${data.id}`} className={`${styles.Link__data}`}>
                            <div className={`${styles.card}`}>
                                <div className={`${styles.image}`}>
                                    <img src={data.imgUrl} alt='' className={`${styles.prod__img}`} />
                                </div>
                                <div className={`${styles.cardbody}`}>
                                    <h1 className={`${styles.title}`}>{data.productName}</h1>
                                    <p className={`${styles.price}`}>{data.price} $</p>
                                </div>
                            </div>
                        </Link>
                    </Col>
                ))
            }
        </>
    )
}
