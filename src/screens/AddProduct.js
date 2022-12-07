import React,{ useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { addProduct } from '../actions/productActions';

import Error from '../components/Error';
import Loader from '../components/Loader';
import Success from '../components/Success'


const AddProduct = () => {

    const [name, setname] = useState("");
    const [price, setprice] = useState();
    const [countinstock, setcountinstock] = useState();
    const [imageurl, setimageurl] = useState("");
    const [category, setcategory] = useState("");
    const [description, setdescription] = useState("");

    const dispatch = useDispatch()

    const addproductstate = useSelector(state => state.addProductReducer)
    const {success , error , loading} = addproductstate

    const addproduct = (e) => {
        e.preventDefault()

        const product ={
            name : name,
            price : price,
            countInStock : countinstock,
            image : imageurl,
            description : description,
            category : category,
        }
        console.log(product)
        dispatch(addProduct(product))
    }

    return (
        <div>
            <div className="row justify-content-center ">
                <div className="col-md-8 shadow-sm p-3 mb-5 bg-white rounded">

                    {success && (<Success success='Product added sucessfully'/>)}
                    {loading && (<Loader/>)}
                    {error && (<Error error='Something went wrong'/>)}

                    <h2>Add Product</h2>
                    <form onSubmit={addproduct}>
                        <input 
                            type="text"
                            className="form-control mb-2 mr-sm-2"
                            placeholder="name"
                            required
                            value={name}
                            onChange={(e) => {setname(e.target.value)}}/>
                        <input 
                            type="text"
                            className="form-control mb-2 mr-sm-2"
                            placeholder="price"
                            required
                            value={price}
                            onChange={(e) => {setprice(e.target.value)}}/>
                        <input 
                            type="text"
                            className="form-control mb-2 mr-sm-2"
                            placeholder="description"
                            required
                            value={description}
                            onChange={(e) => {setdescription(e.target.value)}}/>
                        <input 
                            type="text"
                            className="form-control mb-2 mr-sm-2"
                            placeholder="imageurl"
                            required
                            value={imageurl}
                            onChange={(e) => {setimageurl(e.target.value)}}/>
                        <input 
                            type="text"
                            className="form-control mb-2 mr-sm-2"
                            placeholder="category"
                            required
                            value={category}
                            onChange={(e) => {setcategory(e.target.value)}}/>
                        <input 
                            type="text"
                            className="form-control mb-2 mr-sm-2"
                            placeholder="count in stock"
                            required
                            value={countinstock}
                            onChange={(e) => {setcountinstock(e.target.value)}}/>
                        <button 
                            className="btn mt-5"
                            type="submit"
                            style={{float : "left"}}> Add Product</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default AddProduct
