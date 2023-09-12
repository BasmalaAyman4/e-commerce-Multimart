import React from 'react'
import styles from "../../Cart/Cart.module.css"
import { cartActions } from "../../../redux/slices/cartSlice"
import { useDispatch, useSelector } from 'react-redux'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
export default function CartTable({ item }) {
    const dispatch = useDispatch()
    const deleteItm = () => {
        dispatch(cartActions.deleteItem(item.id))
    }
    return (
        <>
            <tr>
                <td><img alt="" src={item.imgUrl} className={`${styles.img}`} /></td>
                <td>{item.name}</td>
                <td>{item.totalPrice}</td>
                <td>{item.quantity}</td>
                <td onClick={deleteItm}><DeleteForeverIcon className={`${styles.del}`} /></td>
            </tr>
        </>
    )
}
