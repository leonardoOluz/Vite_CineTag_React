import Banner from "../../components/Banner";
import Cabecalho from "../../components/Cabecalho";
import Card from "../../components/Card";
import Rodape from '../../components/Rodape';
import Titulo from "../../components/Titulo";

const Inicio = () => {
    return (
        <>
            <Cabecalho />
            <Banner imagem='home'/>
            <Titulo>
                <h1>Um lugar para guardar seus videos e filmes!</h1>
            </Titulo>
            <Card id='1' titulo='Eu sou a Lenda' capa='https://github.com/leonardoOluz.png' />
            <Rodape />
        </>
    )
};

export default Inicio;