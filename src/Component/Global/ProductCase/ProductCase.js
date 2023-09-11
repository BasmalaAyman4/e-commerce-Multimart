import React from 'react'
import { Col } from 'react-bootstrap'
import { BsFillPlusCircleFill } from "react-icons/bs";
import styles from './ProductCase.module.css'
import { Link } from 'react-router-dom';
import { useDispatch } from "react-redux"
import { cartActions } from "../../../redux/slices/cartSlice"
import { ToastContainer, toast } from 'react-toastify';
export default function ProductCase({ product, title }) {
    const dispatch = useDispatch();
    const addToCart = () => {
        dispatch(
            cartActions.addItem({
                id: product.id,
                productName: product.productName,
                price: product.price,
                image: product.imgUrl,
            })
        )
        toast.success('product added success')
    }
    return (
        <>
            <h1 className={`${styles.trend}`}>{title}</h1>
            {
                product.map((data) => (
                    <Col key={data.id} lg="3" className='mb-5'>
                        <div className={`${styles.card}`} >
                            <div className={`${styles.image}`}>
                                <Link to={`/shop-details/${data.id}`} className={`${styles.Link__data}`}>
                                    <img src={data.imgUrl} alt='' className={`${styles.prod__img}`} />
                                </Link>
                            </div>
                            <div className={`${styles.cardbody}`} >
                                <h1 className={`${styles.title}`}>{data.productName}</h1>
                                <p className={`${styles.price}`}>{data.price} $</p>
                            </div>
                            <button className={`${styles.btn}`} onClick={addToCart}>Add to cart</button>
                        </div>
                    </Col>
                ))
            }
            <ToastContainer />
        </>
    )
}
