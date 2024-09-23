import {Link} from "react-router-dom";

const Tela1 = () => {
    return (
        <div>
            <h1>Parte 1</h1>
            <p>Click nos links para visualizar os exercícios</p>
            <ul>
                <li>
                    <Link to={`/p1Ex1`}>Ex1.01</Link>
                </li>
                <li>
                    <Link to={`/p1Ex2`}>Ex1.02</Link>
                </li>
                <li>
                    <Link to={`/p1Ex3`}>Ex1.03</Link>
                </li>
                <li>
                    <Link to={`/p1Ex4`}>Ex1.04</Link>
                </li>
            </ul>
        </div>
    );
};

export default Tela1;