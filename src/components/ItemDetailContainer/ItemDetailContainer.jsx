import ItemDetail from "../ItemDetail/ItemDetail";
import React,{useState, useEffect,} from "react";
import { useParams } from "react-router-dom";
import MocksProducts from "../../mocks/mocksProducts";

export const ItemDetailContainer = ()=>{
    const {id} = useParams();
    const [product, setProduct] = useState({})
    const getProduct = (id) => {
        return new Promise((resolve) => {
            const productoFiltrado  = MocksProducts.find(p => p.id === parseInt(id))
            setTimeout(() => {resolve(productoFiltrado)}, 1000)
        })
    }
    useEffect(()=>{
        getProduct(id)
        .then(res => setProduct(res))
        .catch((err)=>console.log(err));
    },[]);
    return(
            <>
                {product?<ItemDetail product={product}/>:<h1>Cargando...</h1>}
            </>
    );
}


export default ItemDetailContainer