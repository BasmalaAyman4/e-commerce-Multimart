import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { BsFillPlusCircleFill } from "react-icons/bs";
import styles from './ProductCase.module.css'
import { Link } from 'react-router-dom';
import { useDispatch } from "react-redux"
import { cartActions } from "../../../redux/slices/cartSlice"
import { ToastContainer, toast } from 'react-toastify';
export default function ProductCase({ product }) {
    const dispatch = useDispatch();
    const addToCart = () => {
        dispatch(
            cartActions.addItem({
                id: product.id,
                productName: product.productName,
                price: product.price,
                imgUrl: product.imgUrl,
            })
        )
        toast.success('product added success')
    }
    return (
        <>
            <Col lg="3" className='mb-5' key={product.id}>
                <div className={`${styles.card}`}>
                    <div className={`${styles.image}`}>
                        <Link to={`/shop-details/${product.id}`} className={`${styles.Link__data}`}>
                            <img src={product.imgUrl} alt='' className={`${styles.prod__img}`} />
                        </Link>
                    </div>
                    <div className={`${styles.cardbody}`} >
                        <h1 className={`${styles.title}`}>{product.productName}</h1>
                        <p className={`${styles.price}`}>{product.price} $</p>
                    </div>
                    <button className={`${styles.btn}`} onClick={addToCart}>Add to cart</button>
                </div>
            </Col>

        </>
    )
}
