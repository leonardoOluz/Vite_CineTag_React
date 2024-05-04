// eslint-disable-next-line no-unused-vars
import styles from './Player.module.css';
import Banner from '../../components/Banner';
import Titulo from '../../components/Titulo';
import { useParams } from 'react-router-dom';
import NaoEncontrada from '../NaoEncontrada';
import { useEffect, useState } from 'react';

const Player = () => {
    const paramentros = useParams()
    const [video, setVideo] = useState();

    useEffect(() => {
        fetch(`https://my-json-server.typicode.com/leonardoOluz/cinetag_api/videos/?id=${paramentros.id}`)
            .then(res => res.json())
            .then(dado => {
                setVideo(...dado)
            })
    },[video, paramentros.id]);

    if (!video) return <NaoEncontrada />;

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
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy='strict-origin-when-cross-origin'
                    allowfullscreen
                >
                </iframe>
            </section>
        </>
    )
};

export default Player;