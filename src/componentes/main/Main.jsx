

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
    <div className={styles.librosContainer}>
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
    </div>
  );
}

export default Main;