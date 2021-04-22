import React from 'react';
import './Home.css';
import Product from './Product';

function Home() {
    return (
        <div className="home">
            <div className="home_container">
                <img
                    className="home_image"
                    src="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonVideo/2021/X-site/Multititle/Feb/EN/3000x1200_Hero-Tall_NP._CB657360537_.jpg"
                    alt="join amazon prime"
                />
                <div className="home_row">
                    <Product
                        id={1}
                        title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses"
                        price={66.99}
                        image="https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg"
                        rating={4}
                    />
                    <Product
                        id={2}
                        title="ASUS ZenBook Flip S OLED, Intel Evo Core i7-1165G7 11th Gen, 13.3-inch UHD Touch Thin and Light 2-in-1 Laptop (16GB/1TB SSD/Windows 10/Office 2019"
                        price={987}
                        image="https://m.media-amazon.com/images/I/7172hE7jSJL._AC_UY327_FMwebp_QL65_.jpg"
                        rating={4}
                    />
                </div>
                <div className="home_row">
                    <Product
                        id={3}
                        title="Casual Sneakers Shoes for Men Black Made in India"
                        price={10}
                        image="https://m.media-amazon.com/images/I/41Pvg9eOOTL._AC_UL480_FMwebp_QL65_.jpg"
                        rating={3}
                    />
                    <Product
                        id={4}
                        title="Lenovo IdeaPad Slim 3 Intel Celeron N4020 15.6-inch HD Thin and Light Laptop... "
                        price={600}
                        image="https://m.media-amazon.com/images/I/61Dw5Z8LzJL._AC_UY327_FMwebp_QL65_.jpg"
                        rating={5}
                    />
                    <Product
                        id={5}
                        title="Lenovo Ideapad S145 10th Gen Intel Core i3 15.6 inch FHD Thin and Light Laptop..."
                        price={855}
                        image="https://m.media-amazon.com/images/I/41B9mP1wFwL._AC_UY327_FMwebp_QL65_.jpg"
                        rating={5}
                    />
                </div>
                <div className="home_row">
                    <Product
                        id={6}
                        title="HP 15 Intel Pentium Gold 6405U Processor Entry Level 15.6-inch FHD Laptop..."
                        price={700}
                        image="https://m.media-amazon.com/images/I/71FB8qoB78L._AC_UY327_FMwebp_QL65_.jpg"
                        rating={4}
                    />
                </div>
            </div>
        </div>
    );
}

export default Home;
