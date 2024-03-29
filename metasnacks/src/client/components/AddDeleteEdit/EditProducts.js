import React, {useState, useEffect, useContext} from 'react';
import {fetchProducts, changeProduct, fetchOneProduct} from '../../http/productAPI';
import ProductList from '../ProductList';
import { Context } from '../../..';
import { observer } from 'mobx-react-lite';
import { useParams} from "react-router-dom";
import EditFormProduct from "./EditFormProduct";

const EditProducts = observer(({setActive}) => {
    const {product} = useContext(Context);
    const [editingProduct, setEditingProduct] = useState(false);

    useEffect(() => {
        fetchProducts().then(data => product.setProduct(data.rows));
    }, []);

    const editProduct = () => {
        setEditingProduct(true);
    };

    return (
        <div>
            {editingProduct ? <EditFormProduct /> : (
                <div className="SelectionProduct">
                    <ul>
                        {product.product.map(prod => (
                            <div className="Fetch_product">
                                <li
                                    className={prod .product_id === product.selectedProduct.product_id ? "ListItem active" : "ListItem"}
                                    onClick={()=> product.setSelectedProduct(prod)}
                                    key={prod.product_id}
                                >
                                    <div className="headerProduct">
                                        <img src={process.env.REACT_APP_META_SNACKS + "/" + prod.image_path} alt={prod.Product_name} style={{ width: '13vw' }}/>
                                        <p>{prod.Product_name}</p>
                                    </div>
                                    <div className="footerProduct">
                                        <p>{prod.price}р</p>
                                    </div>
                                </li>
                            </div>
                        ))}
                    </ul>
                    <li onClick={editProduct}>Edit product</li>
                </div>
            )}
        </div>
    );
});

export default EditProducts;