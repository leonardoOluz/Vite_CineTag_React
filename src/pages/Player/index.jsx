// eslint-disable-next-line no-unused-vars
import styles from './Player.module.css';
import Banner from '../../components/Banner';
import Titulo from '../../components/Titulo';
import { useParams } from 'react-router-dom';
import videos from '../../json/db.json';
import NaoEncontrada from '../NaoEncontrada';

const Player = () => {
    const paramentros = useParams()
    const video = videos.find((video) => video.id == Number(paramentros.id));

    if(!video) return <NaoEncontrada/>;

    return (
        <>
            <Banner imagem='player' />
            <Titulo>
                <h1>Player</h1>
            </Titulo>
            <section className={styles.container}>
                <iframe
                    width="100%"
                    height="100%"
                    src={video.link}
                    title={video.titulo}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture web-share"
                    allowfullscreen>
                </iframe>
            </section>
        </>
    )
};

export default Player;