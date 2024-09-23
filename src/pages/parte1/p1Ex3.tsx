import {Button} from "@mui/material";

const P1Ex3 = () => {
    const handleClick = () =>{
        alert("Botão clicado por uma função de tratamento de eventos");
    }
    return (
        <div>
            <h1>Exercise 01-03</h1>
            <Button variant={"contained"} onClick={handleClick}>Clica aqui</Button>
        </div>
    );
};

export default P1Ex3;