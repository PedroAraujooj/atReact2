import Perguntar from "../../components/Perguntar.tsx";

const P1Ex4 = () => {
    return (
        <div>
            <h1>Exercise 01-04</h1>
            <Perguntar
                pergunta={`Quais são as desvantagens de se colocar funções de seta inline para o tratamento de eventos?`}
                resposta={`Não há desvantagens em questão de performance. Mas pode atrapalhar a legibilidade do código pelos desenvolvedores. `}
            />
        </div>
    );
};

export default P1Ex4;