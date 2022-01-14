/* eslint-disable import/no-anonymous-default-export */
import react, { useState } from "react";

export default (props) => {
    const [nome, setNome] = useState('Tonico')
    return (
        <>
            <h3>{nome}</h3>
            <input type="text" value={nome} 
                onChange={e => setNome(e.target.value)}/>
        </>
    );
};