import {Button} from "@mui/material";

const P1Ex2 = () => {
    return (
        <div>
            <h1>Exercise 01-02</h1>
            <Button variant={"contained"} onClick={() => alert("Botão clicado por um inline event")}>Clica aqui</Button>
        </div>
    );
};

export default P1Ex2;