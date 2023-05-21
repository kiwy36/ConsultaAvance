import ItemListContainer from '../components/ItemListContainer/ItemListContainer';
import { useParams } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';


function Root() {
  const params = useParams();
  const isCategoryRoute = Boolean(params.id);
  const ContextValue = useContext(CartContext);

  return (
      <ItemListContainer isCategoryRoute={isCategoryRoute} categoryId={params.id}/>
  )
}

export default Root

/* codigo antiguo
import CustomNavbar from '../components/Navbar/CustomNavbar';
import ItemListContainer from '../components/ItemListContainer/ItemListContainer';
import { useParams } from 'react-router-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function Root() {
  const params = useParams()
  const isCategoryRoute = Boolean(params.id)

  return (
    <>
      <CustomNavbar/>
      <ItemListContainer isCategoryRoute={isCategoryRoute} categoryId={params.id}/>
    </>
  )
}

export default Root
*/