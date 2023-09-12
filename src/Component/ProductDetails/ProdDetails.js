import React, { useRef, useState } from 'react'
import styles from "./ProdDetails.module.css"
import { Col, Container, Row } from 'react-bootstrap'
import SectionHeader from '../Global/SectionHeader/SectionHeader'
import { useParams } from 'react-router-dom'
import Products from "./../../assets/data/products"
import StarIcon from '@mui/icons-material/Star';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import "./productDetails.css"
import { cartActions } from "./../../redux/slices/cartSlice"
import { useDispatch } from 'react-redux'
import { ToastContainer, toast } from 'react-toastify';
import Form from 'react-bootstrap/Form';
export default function ProdDetails() {
    const dispatch = useDispatch()
    const { id } = useParams()
    const [active, setActive] = useState('description')
    const [rating, setRating] = useState(null)
    const product = Products.filter(prod => prod.id === id)
    const Id = product.map(item => item.id)
    const productName = product.map(item => item.productName)
    const price = product.map(item => item.price)
    const imgUrl = product.map(item => item.imgUrl)
    //console.log(product.map(item => item.reviews[0].rating))
    const user = useRef('')
    const msgReview = useRef('')
    const addToCart = () => {
        dispatch(
            cartActions.addItem({
                id: Id,
                productName: productName,
                price: price,
                imgUrl: imgUrl,
            })
        )
        toast.success('product added success')
    }
    console.log(Id, "knk")
    const submitHandler = (e) => {
        e.preventDefault();
        const reviewUser = user.current.value
        const reviewmsg = msgReview.current.value
        const reviews = {
            userName: reviewUser,
            desc: reviewmsg,
            rating
        }
        console.log(reviews)
        toast.success('review added success')
    }
    return (
        <section className={`${styles.details}`}>
            <SectionHeader title={productName} />
            {
                product.map(item => (
                    <>
                        <Container>
                            <Row >
                                <Col>
                                    <img src={item.imgUrl} className={`${styles.img}`} />
                                </Col>
                                <Col key={Id}>
                                    <div className={`${styles.body}`}>
                                        <h2 className={`${styles.title}`}>{item.productName}</h2>
                                        <div className={`${styles.rate}`}>
                                            <div>
                                                <span>
                                                    <StarIcon />
                                                </span>
                                                <span>
                                                    <StarIcon />
                                                </span>
                                                <span>
                                                    <StarIcon />
                                                </span>
                                                <span>
                                                    <StarIcon />
                                                </span>
                                                <span>
                                                    <StarHalfIcon />
                                                </span>
                                            </div>
                                            <div className={`${styles.rate__para}`}>
                                                {item.reviews.map(rate => (
                                                    <p>({rate?.rating} ratings)</p>

                                                ))}
                                            </div>
                                        </div>
                                        <div className={`${styles.category__price}`}>
                                            <p className={`${styles.price}`}>${item.price}</p>
                                            <p>Category: {item.category}</p>
                                        </div>
                                        <p>{item.shortDesc}</p>
                                    </div>
                                    <button className={`${styles.btn}`} onClick={addToCart}>Add to cart</button>
                                </Col>
                            </Row>
                            <div className={`${styles.desc}`}>
                                <p onClick={() => { setActive("description") }}>Description</p>
                                <p onClick={() => { setActive("reviews") }}>Reviews ({item.reviews.length})</p>
                            </div>
                            <div className={`${active === "description" ? styles.style : styles.none}`}>
                                <p>{item.description}</p>
                            </div>
                            <div className={`${active === "reviews" ? styles.style : styles.none}`}>

                                {item.reviews.map(rate => (
                                    <>
                                        <p>Hhon Doe</p>
                                        <p>({rate?.rating} ratings)</p>
                                        <p>{rate.text}</p>
                                    </>
                                ))}

                                <h2>Leave your experience </h2>
                                <Form.Group className="mb-3" controlId="text">
                                    <Form.Control name="text" type='text' autoComplete="off" placeholder="Enter name" ref={user} />
                                </Form.Group>
                                <div className='d-flex rev'>
                                    <span onClick={() => { setRating(1) }}>
                                        <p>1 <StarIcon /></p>
                                    </span>
                                    <span onClick={() => { setRating(2) }}>
                                        <p>2 <StarIcon /></p>
                                    </span>
                                    <span onClick={() => { setRating(3) }}>
                                        <p>3 <StarIcon /></p>
                                    </span>
                                    <span onClick={() => { setRating(4) }}>
                                        <p>4 <StarIcon /></p>
                                    </span>
                                    <span onClick={() => { setRating(5) }}>
                                        <p>5 <StarIcon /></p>
                                    </span>
                                </div>
                                <Form.Group className="mb-3" controlId="text">
                                    <Form.Control name="text" type="text" autoComplete="off" placeholder="Review Message" ref={msgReview} />
                                </Form.Group>
                                <button className={`${styles.btn}`} onClick={(e) => { submitHandler(e) }}>Add Review</button>
                            </div>
                        </Container>

                    </>
                ))
            }
            <ToastContainer />

        </section>
    )
}
