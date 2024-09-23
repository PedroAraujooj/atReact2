import {Link} from "react-router-dom";

const Tela2 = () => {
    return (
        <div>
            <h1>Parte 2</h1>
            <p>Click nos links para visualizar os exercícios</p>
            <ul>
                <li>
                    <Link to={`/p2Ex1`}>Ex2.01</Link>
                </li>
                <li>
                    <Link to={`/p2Ex2`}>Ex2.02</Link>
                </li>
                <li>
                    <Link to={`/p2Ex3`}>Ex2.03</Link>
                </li>
                <li>
                    <Link to={`/p2Ex4`}>Ex2.04</Link>
                </li>
            </ul>
        </div>
    );
};

export default Tela2;