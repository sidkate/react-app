import React, { FC } from 'react';
import ProductCard from '../product-card/product-card.component';
import { products } from '../../mocks/products.mock'
import './product-list.css';

const ProductList: FC = () => {
    return (
        <>
            <h1 className="content__h1">Каталог</h1>
            <ul className="product-list">
                {products.map(product => {
                    return (
                        <li>
                            <ProductCard
                                key={product.id}
                                title={product.title}
                                img={product.img}
                                price={product.price}
                            />
                        </li>
                    )
                })
                }
            </ul>
        </>
    )
}

export default ProductList