import react from 'react';
import styles from './infocard.module.css';

import {AiFillCloseCircle} from 'react-icons/ai';
const InfoCard=({mostrarInfo,libro,cerrarInfo})=> {
    //Recibo las props que manda main
    if(!mostrarInfo)
    {
        return null;
    }
    let imagen = libro.volumeInfo.imageLinks && libro.volumeInfo.imageLinks.smallThumbnail;
    return(
        <>
            <div className={styles.overlay}>
                <div className={styles.overlayInner}>
                    <button className={styles.close} onClick={cerrarInfo}>{<AiFillCloseCircle />}</button>
                    <div className={styles.innerBox}>
                        <img src={imagen} alt="" />
                        <div className={styles.info}>
                            <h1>{libro.volumeInfo.title}</h1>
                            <h3>{libro.volumeInfo.authors}</h3>
                            <h4>{libro.volumeInfo.publisher}<span>{libro.volumeInfo.publishedDate}</span></h4><br/>
                            <a href ={libro.volumeInfo.previewLink} target='_blank'><button>Saber más</button></a>
                        </div>
                    </div>
                    <h4 className={styles.description}>{libro.volumeInfo.description}</h4>
                </div>
            </div>
        </>
    )
}
export default InfoCard;