import React from "react";

const Product = ({ item, product }) => {
    const foundItem =
    item === ""
    ? []
    : product.filter(a => (a.name).includes(item));

    return (
        <div className="productInfo">  
            <ul>
                {foundItem.map(item => (
                    <div key={item.id}>
                        <h3>{item.name}</h3>
                        <li>Owner: {item.owner}</li>
                        <li>Category: {item.category}</li>
                        <li>Updated date: {item.updated}</li>
                    </div>
                ))}
            </ul>
        </div>
    );
}

export default Product;