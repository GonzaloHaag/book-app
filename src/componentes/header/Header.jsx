import React, {  useState } from 'react';
import styles from './header.module.css';

import {  Input } from '@nextui-org/react';
import Main from '../main/Main';

const Header = () => {

    
    const [libros,setLibros] = useState([]);
    const [search,setSearch] = useState('');

   /*
   Buscar como maximo 40 libros 
   'https://www.googleapis.com/books/v1/volumes?q='+search+'&key=AIzaSyA6SaT23KNiiA6DnUfUQTvFeyAcQEkwnSU'+'&maxResults=40')
   Le pasamos el search como query
   */

 
  const capturarValorInput =  (e) => {

    const valorInput = e.target.value;
    setSearch(valorInput);

  }
  const handleIniciarBusqueda = (e) => {
    e.preventDefault();
    // console.log(search); //Imprimo el valor del input

    //Hago el fetch con lo que tengo guardado en el search
    fetch('https://www.googleapis.com/books/v1/volumes?q='+search+'&key=AIzaSyA1GyAlzNsY6iyTljRmprl8FYyqGl4y9BA'+'&maxResults=40')
    //Le pasamos el search como query para encontrar los que coincidan con lo escrito en el input
    .then((data) => data.json())
    .then((data) => setLibros(data.items))
    .catch((error) => console.log(error))
    //El .item me da el arreglo con los libros dentro --> Clave
    //Lo guardo en mi arreglo de libros para mandarselo al main y que lo recorra y lo pinte en pantalla

     //setSearch(''); //Asi se resetea luego de la busqueda
  }



 
  return (
      /*Buscador de libros*/
      <>
        <header className={styles.headerContainer}>
        <img src='./images/bg2.png' alt='imagenHeader' />
        <form className={styles.formContainer} onSubmit={handleIniciarBusqueda} >
            
                <Input placeholder="Buscá tu libro" onChange={capturarValorInput} 
                style={{
                    width : '20em',
                    display:'flex',
                    alignItems: 'center'
                    

                }}
                value={search} //El value es lo que esta escrito en el input
                aria-label='Campo de busqueda'


                />;      {/*Ponerle el value que sea igual al search*/}
         
        </form>

      </header>
      <div className={styles.librosContainer} >
      <Main libros = {libros} /> {/*Le mando el array de libros que coincidan para que el main los pinte */}
      </div>
      </>
  )
}

export default Header