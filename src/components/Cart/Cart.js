import React, { useContext } from 'react';
import styles from './Cart.module.css'
import { CartContext } from '../../store/cart-context';
import CartItem from './CartItem';
import { ModalContext } from '../UI/Modal';

function Cart(props) {
    const { items } = useContext(CartContext)
    const { close } = useContext(ModalContext)

    const totalAmount = items.reduce((acc, curr) => acc + (curr.price * curr.quantity), 0).toFixed(2)
    return (
        <>
            <ul className={styles['cart-items']}>
                {
                    items.map(i => {
                        return <CartItem item={i} key={i.id} />
                    })
                }
            </ul>
            <div className={styles['total']}>
                <span>Total Amount</span>
                <span>${totalAmount}</span>
            </div>
            <div className={styles['actions']}>
                <button onClick={close}>Close</button>
                <button className={styles['button']}>Order</button>
            </div>
        </>
    );
}

export default Cart;