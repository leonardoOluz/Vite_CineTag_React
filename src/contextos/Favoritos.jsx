/* eslint-disable react/prop-types */
import { useState, createContext, useContext } from "react";

export const FavoritosContext = createContext()
FavoritosContext.displayName = 'Favoritos';

export default function FavoritosProvider({ children }) {
    const [favorito, setFavorito] = useState([])
    return (
        <FavoritosContext.Provider
            value={{ favorito, setFavorito }}>
            {children}
        </FavoritosContext.Provider>
    )
}

export function useFavoritoContext() {
    const { favorito, setFavorito } = useContext(FavoritosContext);

    function adicionarFavorito(novoFavorito) {
        /* Veirifcar a existência de um favorito na lista  */
        const favoritoRepetido = favorito.some((item) => item.id === novoFavorito.id);
        let novaLista = [...favorito];

        /* Se não existir o item na lista, adicionar a lista  */
        if (!favoritoRepetido) {
            novaLista.push(novoFavorito);
            return setFavorito(novaLista);
        }

        novaLista = novaLista.filter((favorito) => favorito.id !== novoFavorito.id);
        return setFavorito(novaLista);
    }

    return {
        favorito,
        adicionarFavorito
    }

}