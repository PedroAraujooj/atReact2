import {Checkbox, Container, CssBaseline, TextField} from "@mui/material";
import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";

const P3Ex1 = () => {
    const [usuario, setUsuario] = useState({
        nome: "",
        telefone: "",
        email: "",

    })
    const { isFilled } = useParams();
    const [showJson, setShowJson] = useState(false);

    useEffect(()=>{
        let b = isFilled == "true";
        if(b){
            setUsuario({
                nome: "Machado de Assis",
                telefone: "21123456789",
                email: "machado.assis@abl.com.br",
            });
        }else {
            setUsuario({
                nome: "",
                telefone: "",
                email: "",
            });
        }
    }, [isFilled])
    function handleClick() {
        console.log(usuario);
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
                        value={usuario.nome}
                        onChange={(e) => {
                            setUsuario(usuario => ({...usuario, nome: e.target.value}));
                        }
                        }
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
                        }
                        }
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
                        }
                        }
                    />
                    <button type={"button"} onClick={handleClick}>Enviar</button>
                </form>
                {showJson ? "JSON impresso no console" : ""}
            </Container>
        </div>
    );
};

export default P3Ex1;