import {Checkbox, Container, CssBaseline, TextField} from "@mui/material";
import {useState} from "react";

const P3Ex2 = () => {
    const [usuario, setUsuario] = useState({
        nome: null,
        telefone: null,
        email: null,

    })
    const [showJson, setShowJson] = useState(false);
    const [erros, setErros] = useState({
        nome: "Nome é obrigatorio",
        telefone: "Telefone deve ser numérico",
        email:"Email é obrigatorio",

    });
    function handleClick() {
        if (erros.nome || erros.telefone || erros.email) {
            alert(`Erro em nome: ${erros.nome?erros.nome:"Não há erros"}; \n Erro em telefone: ${erros.telefone?erros.telefone:"Não há erros"} ; \n Erro em email: ${erros.email?erros.email:"Não há erros"}`)
        } else {
            console.log(usuario);
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
                        value={usuario.nome}
                        onChange={(e) => {
                            setUsuario(usuario => ({...usuario, nome: e.target.value}));
                            !e.target.value ? setErros(erros => ({...erros, nome: "Nome é obrigatorio"}))
                                : setErros(erros => ({...erros, nome: ""}));
                        }
                        }
                        error={!!erros.nome}
                        helperText={erros.nome ? erros.nome : ""}
                    />
                    <TextField
                        sx={{
                            marginBottom: "7px",
                        }}
                        id="email"
                        label="email"
                        type="text"
                        value={usuario.email}
                        onChange={(e) => {
                            setUsuario(usuario => ({...usuario, email: e.target.value}));
                            !e.target.value ? setErros(erros => ({...erros, email: "Email é obrigatorio"}))
                                : setErros(erros => ({...erros, email: ""}));
                        }
                        }
                        error={!!erros.email}
                        helperText={erros.email ? erros.email : ""}
                    />
                    <TextField
                        sx={{
                            marginBottom: "7px",
                        }}
                        id="telefone"
                        label="telefone"
                        type="text"
                        value={usuario.telefone}
                        onChange={(e) => {
                            setUsuario(usuario => ({...usuario, telefone: e.target.value}));
                            !(/^\d+$/).test(e.target.value) ? setErros(erros => ({
                                    ...erros,
                                    telefone: "Telefone deve ser numérico"
                                }))
                                : setErros(erros => ({...erros, telefone: ""}));
                        }
                        }
                        error={!!erros.nome}
                        helperText={erros.telefone ? erros.telefone : ""}
                    />
                    <button type={"button"} onClick={handleClick}>Enviar</button>
                </form>
                {showJson ? "JSON impresso no console" : ""}
            </Container>
        </div>
    );
};
export default P3Ex2;