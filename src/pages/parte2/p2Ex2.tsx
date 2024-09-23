import { Container, CssBaseline, FormControl, InputLabel, MenuItem, Select} from "@mui/material";
import React, {useEffect} from "react";
import {useParams} from "react-router-dom";

const P2Ex2 = () => {
    const [pais, setPais] = React.useState("");
    const [listaPaises, setListaPaises] = React.useState([]);
    const { brasil } = useParams();

    useEffect(()=>{
        let b = brasil == "true";
        if(b){
            setPais("BRA");
        }else {
            setPais("");
        }
    }, [brasil])

    useEffect(() =>{
        async function carregar(){
            let resul = await listarPaises();
            if(resul.erro){
                alert("ERRO");
            }
            else{
                setListaPaises(resul);
            }
        }

        carregar();
    }, [])

    const ordenarPaises = (ls) =>{
        return ls.sort((a,b) =>{
            if (a.name.official < b.name.official) {
                return -1;
            }
            if (a.name.official > b.name.official) {
                return 1;
            }
            return 0;
        });
    }
    async function listarPaises() {
        let retorno = [];
        const url = `https://restcountries.com/v3.1/all?fields=name,cca3`;
        await fetch(url)
            .then((resposta) => resposta.json())
            .then((paises) => {
                retorno = paises;
                retorno = ordenarPaises(paises);
                console.log(paises);
            })
            .catch((erro) => {
                retorno.erro = erro;
                console.log(erro);
            });
        return retorno;
    }
    const handleChange = (e) => {
        setPais(e.target.value);
    };

    return (
        <div
            style={{
                marginTop: "20vh",
            }}
        >
            <CssBaseline/>
            <Container>
                <FormControl fullWidth={true}>
                    <InputLabel id="paisesLabel">País</InputLabel>
                    <Select
                        labelId="paisesLabel"
                        id={"paises"}
                        value={pais}
                        label="Países"
                        onChange={handleChange}
                    >
                        {listaPaises.map((p) => (
                            <MenuItem value={p.cca3} key={p.cca3}>{p.name.official}</MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </Container>
        </div>
    );
};

export default P2Ex2;