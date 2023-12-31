import React, { useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import styles from './AllProduct.module.css'
import useGetData from '../../Custom-hooks/useGetData'
import { db } from '../../firebase.config'
import { doc, deleteDoc } from 'firebase/firestore'
import { ToastContainer, toast } from 'react-toastify'
export default function AllProduct() {
    const { data: productData, loading } = useGetData('products')
    const deleteProduct = async (id) => {
        await deleteDoc(doc(db, 'products', id))
        toast.success('Deleted')
    }
    return (
        <>
            <section className={`${styles.all}`}>
                <Container>
                    <Row>
                        <Col>
                            <table class="table">
                                <thead>
                                    <tr>
                                        <th scope="col">Image</th>
                                        <th scope="col">Title</th>
                                        <th scope="col">Category</th>
                                        <th scope="col">Price</th>
                                        <th scope="col">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        loading ? <h3>loading....</h3>
                                            :
                                            productData.map((item) => (
                                                <tr key={item.id}>
                                                    <th scope="row"><img src={item.imgUrl} alt="" className={`${styles.img}`} /></th>
                                                    <td>{item.Title}</td>
                                                    <td>{item.Category}</td>
                                                    <td>{item.Price}</td>
                                                    <td><button className='btn btn-danger' onClick={() => { deleteProduct(item.id) }}>Delete</button></td>
                                                </tr>
                                            ))
                                    }

                                </tbody>
                            </table>
                        </Col>
                    </Row>
                </Container>
                <ToastContainer />
            </section>
        </>
    )
}
