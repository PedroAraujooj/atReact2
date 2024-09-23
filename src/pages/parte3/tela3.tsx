import {Link} from "react-router-dom";

const Tela3 = () => {
    return (
        <div>
            <h1>Parte 3</h1>
            <p>Click nos links para visualizar os exercícios</p>
            <ul>
                <li>
                    <Link to={`/p3Ex1`}>Ex3.01</Link>
                </li>
                <li>
                    <Link to={`/p3Ex2`}>Ex3.02</Link>
                </li>
                <li>
                    <Link to={`/p3Ex3`}>Ex3.03</Link>
                </li>
                <li>
                    <Link to={`/p3Ex4`}>Ex3.04</Link>
                </li>
            </ul>
        </div>
    );
};

export default Tela3;