import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import useGetData from '../../Custom-hooks/useGetData'
import styles from '../AllProduct/AllProduct.module.css'
import { db } from '../../firebase.config'
import { doc, deleteDoc } from 'firebase/firestore'
import { ToastContainer, toast } from 'react-toastify'
const Users = () => {
    const { data: userData, loading } = useGetData('users')
    const deleteProduct = async (id) => {
        await deleteDoc(doc(db, 'users', id))
        toast.success('Deleted')
    }
    return (
        <>
            <section>
                <Container>
                    <Row>
                        <Col>
                            <table class="table">
                                <thead>
                                    <tr>
                                        <th scope="col">Image</th>
                                        <th scope="col">Username</th>
                                        <th scope="col">Email</th>
                                        <th scope="col">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        loading ? <h3>loading....</h3>
                                            :
                                            userData.map((item) => (
                                                <tr key={item.uid}>
                                                    <th scope="row"><img src={item.photoURL} alt="" className={`${styles.img}`} /></th>
                                                    <td>{item.displayName}</td>
                                                    <td>{item.email}</td>
                                                    <td><button className='btn btn-danger' onClick={() => { deleteProduct(item.uid) }}>Delete</button></td>
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

export default Users
