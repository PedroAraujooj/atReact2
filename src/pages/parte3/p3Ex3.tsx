import {Checkbox, Container, CssBaseline, TextField} from "@mui/material";
import {useState} from "react";
import {useForm} from "react-hook-form";

const P3Ex3 = () => {
    const [showJson, setShowJson] = useState(false);

    const {
        register,
        handleSubmit,
        formState: {errors, isSubmitted},
        reset,
        setValue,
    } = useForm();

    function handleClick(dados) {
            alert(`SUCESSO \n Nome: ${dados.nome}; telefone: ${dados.telefone}; email: ${dados.email}`);
            console.log(dados);
            setShowJson(true);

    }

    return (
        <div
            style={{
                marginTop: "7vh",
            }}
        >
            <CssBaseline/>
            <Container
                maxWidth="sm"
                sx={{
                    width: "25vw",
                    minWidth: "320px",
                    padding: "20px",
                    boxShadow: "7px 7px 21px",
                    borderRadius: "7px",
                }}
            >
                <form>
                    <TextField
                        sx={{
                            marginBottom: "7px",
                        }}
                        id="nome"
                        label="nome"
                        type="text"
                        {...register("nome", {
                        })}
                    />
                    <br/>
                    <TextField
                        sx={{
                            marginBottom: "7px",
                        }}
                        id="email"
                        label="email"
                        type="text"
                        {...register("email", {
                        })}
                    />
                    <br/>
                    <TextField
                        sx={{
                            marginBottom: "7px",
                        }}
                        id="telefone"
                        label="telefone"
                        type="text"
                        {...register("telefone", {
                        })}
                    />
                    <br/>
                    <button type={"button"} onClick={handleSubmit(handleClick)}>Enviar</button>
                </form>
                {showJson ? "JSON impresso no console" : ""}
            </Container>
        </div>
    );
};

export default P3Ex3;