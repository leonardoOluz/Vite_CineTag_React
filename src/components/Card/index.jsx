/* eslint-disable react/prop-types */
import { useFavoritoContext } from '../../contextos/Favoritos';
import styles from './Card.module.css';
import iconeFavoritar from './favoritar.png';
import iconeDesfavoritar from './desfavoritar.png';
import { Link } from 'react-router-dom';


const Card = ({ id, titulo, capa }) => {
    const { favorito, adicionarFavorito } = useFavoritoContext();
    const wasFavorite = favorito.some((fav) => fav.id === id);
    const icone = wasFavorite ? iconeDesfavoritar : iconeFavoritar;

    return (
        <div className={styles.container}>
            <Link className={styles.link} to={`/${id}`}> 
                <img src={capa} alt={titulo} className={styles.capa} />
                <h2>{titulo}</h2>
            </Link>
            <img src={icone}
                alt='Favoritar filme'
                className={styles.favoritar}
                onClick={() => {
                    adicionarFavorito({ id, titulo, capa })
                }}
            />
        </div>
    )

};

export default Card;