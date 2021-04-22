import React from 'react';
import './Product.css';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import { useStateValue } from './StateProvider';

function Product({ id, title, price, image, rating }) {
    let star = [];
    for (let i = 0; i < rating; i++) {
        star.push(<p>⭐</p>);
    }

    const [{ basket }, dispatch] = useStateValue();

    const addToBasket = () => {
        //dispatch the item into datalayer
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id: id,
                title: title,
                price: price,
                image: image,
                rating: rating
            }
        });
    };
    return (
        <div className="product">
            <div className="product_info">
                <p>{title}</p>
                <p className="product_price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="product_rating">{star}</div>
            </div>

            <img className="product_image" src={image} alt="" />
            <button className="product_button" onClick={addToBasket}>
                Add to Basket
            </button>
        </div>
    );
}

export default Product;
