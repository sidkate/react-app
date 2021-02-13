import { FC } from 'react';

interface ProductCardProps {
    title: string,
    img: string,
    price: number
}

const ProductCard: FC<ProductCardProps> = ({ title, img, price }) => {
    return (
        <>
            <a><img src={img} width="195" height="280" /><br />
                {title} </a><br />
            {price} р.
            <button className="product-list__button">
                В корзину
            </button>
        </>
    )
}

export default ProductCard