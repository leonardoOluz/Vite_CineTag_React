import styles from './Cabecalho.module.css';
import { Link } from 'react-router-dom';
import logo from './logo.png';
import CabecalhoLink from '../CabecalhoLink';

const Cabecalho = () => {
    return (
        <header className={styles.cabecalho}>
            <Link to="./">
                <img src={logo} alt='Logo da CineTag'/>
            </Link>
            <nav>
                <CabecalhoLink url='./'>
                    Home
                </CabecalhoLink>
                <CabecalhoLink url='./Favoritos'>
                    Favoritos
                </CabecalhoLink>
            </nav>

        </header>
    )
};

export default Cabecalho;