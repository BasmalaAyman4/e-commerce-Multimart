import React, { useEffect, useState } from 'react'
import styles from './AddProduct.module.css'
import { Col, Container, FormGroup, Row } from 'react-bootstrap'
import Form from 'react-bootstrap/Form';
import { ToastContainer, toast } from 'react-toastify';
import { db, storage } from '../../firebase.config'
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage'
import { collection, addDoc } from 'firebase/firestore'
import { useNavigate } from 'react-router-dom';
export default function AddProduct() {
    const [title, setTitle] = useState('')
    const [shortDesc, setshortDesc] = useState('')
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState('')
    const [category, setCategory] = useState('')
    const [img, setImg] = useState(null)
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()
    const addProduct = async (e) => {
        e.preventDefault()
        setLoading(true)

        try {

            const docRef = await collection(db, 'products')
            const storeRef = ref(storage, `productImages/${Date.now() + img.name}`)
            const uploadTask = uploadBytesResumable(storeRef, img)
            uploadTask.on(() => {
                toast.error('images not uploades')
            }, () => {
                getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
                    await addDoc(docRef, {
                        Title: title,
                        ShortDesc: shortDesc,
                        Description: description,
                        Category: category,
                        Price: price,
                        imgUrl: downloadURL
                    })
                })

            })
            setLoading(false)
            toast.success('Product successfully added')
            navigate("/dashboard/all-product")
        } catch (err) {
            setLoading(false)
            toast.error('product not added')

        }

    }
    return (
        <>
            <section>
                <Container>
                    <Row>
                        <Col lg='12'>
                            {
                                loading ? <h4>loading....</h4>
                                    :
                                    <>
                                        <h4 className='mb-5'>Add Product</h4>
                                        <Form onSubmit={addProduct}>
                                            <Form.Group className={`${styles.form__group} mb-3`}>
                                                <Form.Label>Product Title</Form.Label>
                                                <Form.Control type='text' placeholder='Double sofa' value={title} onChange={e => setTitle(e.target.value)} />
                                            </Form.Group>
                                            <Form.Group className={`${styles.form__group} mb-3`}>
                                                <Form.Label>Short Description</Form.Label>
                                                <Form.Control type='text' placeholder='Double sofa' value={shortDesc} onChange={e => setshortDesc(e.target.value)} />
                                            </Form.Group>
                                            <Form.Group className={`${styles.form__group} mb-3`}>
                                                <Form.Label>Description</Form.Label>
                                                <Form.Control type='text' placeholder='Double sofa' value={description} onChange={e => setDescription(e.target.value)} />
                                            </Form.Group>
                                            <div className='d-flex align-items-center justify-content-between gap-5 mb-3'>
                                                <Form.Group className={`${styles.form__group} w-50`}>
                                                    <Form.Label>Price</Form.Label>
                                                    <Form.Control type='number' placeholder='Double sofa' value={price} onChange={e => setPrice(e.target.value)} />
                                                </Form.Group>
                                                <Form.Group className={`${styles.form__group} w-50`}>
                                                    <Form.Label>Category</Form.Label>
                                                    <select className='w-100 p-2' value={category} onChange={e => setCategory(e.target.value)}>
                                                        <option value='chair'>Chair</option>
                                                        <option value='sofa'>Sofa</option>
                                                        <option value='mobile'>Mobile</option>
                                                        <option value='watch'>Watch</option>
                                                        <option value='wireless'>Wireless</option>
                                                    </select>
                                                </Form.Group>
                                            </div>
                                            <div>
                                                <Form.Group className={`${styles.form__group}`}>
                                                    <Form.Label>Product image</Form.Label>
                                                    <Form.Control type='file' onChange={e => setImg(e.target.files[0])} />
                                                </Form.Group>
                                            </div>
                                            <button className='primary__btn mt-5' type='submit'>Add Product</button>
                                        </Form>
                                    </>
                            }

                        </Col>
                    </Row>
                </Container>
                <ToastContainer />
            </section>
        </>
    )
}
