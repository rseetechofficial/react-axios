import axios from "axios";
import React, { useEffect, useState } from "react";

const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios
        .get("https://fakestoreapi.com/products")
        .then((res) => {
            setProducts(res.data);
        })
        .catch((error) => {
            console.log(error);
        })
    }, []);

    return (
        <div>
            <h1>Product App</h1>

            <table>
                <tr>
                    <th>id</th>
                    <th>Title</th>
                    <th>Image</th>
                </tr>
                {
                    products.map((product) => (
                        <tr>
                            <td>{product.id}</td>
                            <td>{product.title}</td>
                            <td><img src={product.image} height={50} width={50} /></td>
                        </tr>
                    ))
                }
            
            </table>

        </div>
    )
};

export default Products;