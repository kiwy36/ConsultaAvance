import { useState, useEffect } from 'react';
import ItemList from '../ItemList/ItemList';
import MocksProducts from '../../mocks/mocksProducts';
import './ItemListContainer.css';

function ItemListContainer({ categoryId, isCategoryRoute }) {
    const [products, setProducts] = useState([]);
    const [categoryProducts, setCategoryProducts] = useState([]);

    useEffect(() => {
        const obtenerProductos = new Promise((resolve, reject) =>
        setTimeout(() => resolve(MocksProducts), 500)
        );

        obtenerProductos
        .then((response) => {
            if (isCategoryRoute) {
            const productosFiltrados = response.filter(
                (product) => product.category === categoryId
            );
            setCategoryProducts(productosFiltrados);
            } else {
            setProducts(response);
            }
        })
        .catch((err) => console.log(err));
    }, [ isCategoryRoute]);

    return (
        <div>
            <ItemList products={isCategoryRoute ? categoryProducts : products} />
        </div>
    );
}

export default ItemListContainer;
