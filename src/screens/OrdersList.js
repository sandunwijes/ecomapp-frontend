import React, {useState, useEffect} from 'react'
import {useDispatch , useSelector} from 'react-redux'
import { getAllOrders } from '../actions/orderActions'

import Loader from '../components/Loader'
import Error from '../components/Error'



const OrdersList = () => {

    const dispatch = useDispatch()

    const getallordersstate = useSelector(state => state.getAllOrdersReducer)
    const {orders, loading , error} = getallordersstate

    useEffect(() => {

        dispatch(getAllOrders())

    }, [])

    return (
        <div className='shadow-sm p-3 mb-5 bg-white rounded'>

            <h2>Orders List</h2>

            {loading && (<Loader/>)}
            {error && (<Error/>)}

            <table className='table table-bordered table-responsive-sm'>
                <thead>
                    <tr>
                        <th>Order Id</th>
                        <th>Email</th>
                        <th>User Id</th>
                        <th>Amount</th>
                        <th>Date</th>
                        <th>Transaction Id</th>
                    </tr>
                </thead>
                <tbody>
                        {orders && orders.map(order => {
                            return (
                                <tr onClick={()=>{window.location.href=`/orderinfo/${order._id}`}}>
                                    <td>{order._id}</td>
                                    <td>{order.email}</td>
                                    <td>{order.userId}</td>
                                    <td>{order.orderAmount}</td>
                                    <td>{order.updatedAt}</td>
                                    <td>{order.transactionId}</td>
                                </tr>
                            )
                        })}
                </tbody>
            </table>

        </div>
    )
}

export default OrdersList
