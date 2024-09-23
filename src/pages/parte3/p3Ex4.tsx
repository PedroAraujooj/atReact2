import {Checkbox, Container, CssBaseline, TextField} from "@mui/material";
import {useState} from "react";
import {useForm} from "react-hook-form";

const P3Ex4 = () => {
    const [showJson, setShowJson] = useState(false);
    const regexEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const regexNumerico = /^\d+$/;

    const {
        register,
        handleSubmit,
        formState: {errors, isSubmitted},
        reset,
        setValue,
    } = useForm();

    function handleClick(dados) {
        if (errors.nome || errors.telefone || errors.email ) {
            alert(`Erro em nome: ${errors.nome ? errors.nome.message : "Não há erros"}; \n Erro em telefone: ${errors.telefone ? errors.telefone.message : "Não há erros"} \n
            Erro em email: ${errors.email ? errors.email.message : "Não há erros"}`)
        } else {
            alert(`SUCESSO \n Nome: ${dados.nome}; telefone: ${dados.telefone}; email: ${dados.email}`);
            console.log(dados);
            setShowJson(true);
        }
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
                            required: "Nome é obrigatório",
                        })}
                        error={!!errors.nome}
                        helperText={errors.nome ? errors.nome.message : ""}
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
                            required: "Email é obrigatório",
                            validate: {
                                matchPatter: (value) =>
                                    regexEmail.test(value) || "O email não é válido."
                            },
                        })}
                        error={!!errors.email}
                        helperText={errors.email ? errors.email.message : ""}
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
                            required: "O número de telefone é obrigatório",
                            validate: {
                                matchPatter: (value) =>
                                    (/^\d+$/).test(value) || "O número de telefone deve ser numérico"
                            },
                        })}
                        error={!!errors.telefone}
                        helperText={errors.telefone ? errors.telefone.message : ""}
                    />
                    <br/>
                    <button type={"button"} onClick={handleSubmit(handleClick)}>Enviar</button>
                </form>
                {showJson ? "JSON impresso no console" : ""}
            </Container>
        </div>
    );
};

export default P3Ex4;