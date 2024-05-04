import styles from "./Inicio.module.css";
import Banner from "../../components/Banner";
import Card from "../../components/Card";
import Titulo from "../../components/Titulo";
import { useEffect, useState } from "react";

const Inicio = () => {
    const [ videos, setVideos] = useState([]);
    useEffect(() => {
        fetch('https://my-json-server.typicode.com/leonardoOluz/cinetag_api/videos')
        .then(res => res.json())
        .then(dados => {
            return setVideos(dados)
        })
    },[videos])

    return (
        <>
            <Banner imagem='home' />
            <Titulo>
                <h1>Um lugar para guardar seus videos e filmes!</h1>
            </Titulo>
            <section className={styles.container}>
                {videos.map((video) => (
                    < Card {...video} key={video.id} />
                ))}
            </section>
        </>
    )
};

export default Inicio;