// import React, {  useState } from 'react';
// import styles from './main.module.css';
// import InfoCard from '../InfoCard/InfoCard';

// const Main = ({libros}) => {
//     //Recibo los libros que me manda el header

//     const [mostrarInfo,setMostrarInfo] = useState(false); //Si hacen click quiero mostrar info adicional del libro
//     const [libroSeleccionado,setLibroSeleccionado] = useState(null);
    

//     const handleDesplegarInfo = (libro) => {
//         setMostrarInfo(true);
//         setLibroSeleccionado(libro);
//     }
//     const handleCerrarInfo = () => {
//         setMostrarInfo(false);
//         setLibroSeleccionado(null);
//       }
    
   
 
//   return (
//    <>
//     {
//         libros === undefined ? <div className={styles.noResultados}><h2>No se encontraron resultados</h2></div>
//         :
        
//             libros.map((libro) => {
//                 // console.log(libro.id)
//                 let imagen=libro.volumeInfo.imageLinks && libro.volumeInfo.imageLinks.smallThumbnail;
//                 let precio=libro.saleInfo.listPrice && libro.saleInfo.listPrice.amount;
//                 if(imagen!== undefined && precio !== undefined) { //Para que si esas propiedas no existen en algun libro no me lo muestre
//                 return ( //importante aca, sino no funciona
                
//             <>
//               <div key={libro.volumeInfo.title} className={styles.cardLibro} onClick={() => handleDesplegarInfo(libro)} > {/**asi se envia el id del libro */}
//               {/*
//               Si le dan click a la card quiero mostrar la info adicional, por eso cambio el valor a 
//               true, y a setItemLibro le mando el libro que quiero mostrarInfo para saber que 
//               libro es --> Clave esto
//               */}
//                 <img src={imagen} alt='imagen libro' />
//                 <div className={styles.cardLibroInfo}>
//                     <h4>{libro.volumeInfo.title}</h4>
//                     <span>${precio}</span>
//                 </div>
//                 </div>
//                  {
//                    mostrarInfo && libroSeleccionado &&
//                    <InfoCard libro={libroSeleccionado} cerrarInfo={handleCerrarInfo} />
//                  }
                
              
//               </>
              
              
//                 )
//                 }
//                })
//                {mostrarInfo && libroSeleccionado && (
//                 <InfoCard libro={libroSeleccionado} cerrarInfo={handleCerrarInfo} />
//               )}
        
//                  }
//    </>
//     )
// }

// export default Main

import React, { useState } from 'react';
import styles from './main.module.css';
import InfoCard from '../InfoCard/InfoCard';

const Main = ({ libros }) => {
  const [mostrarInfo, setMostrarInfo] = useState(false);
  const [libroSeleccionado, setLibroSeleccionado] = useState(null);

  const handleDesplegarInfo = (libro) => {
    setLibroSeleccionado(libro);
    setMostrarInfo(true);
  }
  const cerrarInfo = (libro) => {
     setMostrarInfo(false);
  }
  return (
    <>
      {libros === undefined ? (
        <div className={styles.noResultados}><h2>No se encontraron resultados</h2></div>
      ) : (
        libros.map((libro) => {
          let imagen = libro.volumeInfo.imageLinks && libro.volumeInfo.imageLinks.smallThumbnail;
          let precio = libro.saleInfo.listPrice && libro.saleInfo.listPrice.amount;
          if (imagen !== undefined && precio !== undefined) {
            return (
              <div key={libro.volumeInfo.title} className={styles.cardLibro} onClick={() => handleDesplegarInfo(libro)}>
                {/*Quiero que al hacerle click al libro, se desplegue su libro en particular*/}
                <img src={imagen} alt='imagen libro' />
                <div className={styles.cardLibroInfo}>
                  <h4>{libro.volumeInfo.title}</h4>
                  <span>${precio}</span>
                </div>
              </div>
            );
          }
        })
      )}
      {/*Definir infoCard acá -> Fuera del map, si no causa muchos problemas*/}
       {
        mostrarInfo && 
        <InfoCard libro = {libroSeleccionado} mostrarInfo = {handleDesplegarInfo} cerrarInfo = {cerrarInfo} />
       }
    </>
  );
}

export default Main;