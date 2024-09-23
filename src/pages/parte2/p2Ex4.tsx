import {CardMedia, Checkbox, Container, CssBaseline, FormControl, InputLabel, MenuItem, Select} from "@mui/material";
import React, {useEffect, useState} from "react";

const P2Ex4 = () => {
    const [prato, setPrato] = React.useState({});
    const [listaPratos, setListaPratos] = React.useState([]);

    useEffect(() => {
        async function carregar() {
            let resul = await listarPratos();
            if (resul.erro) {
                alert("ERRO");
            } else {
                setListaPratos(resul);
            }
        }

        carregar();
    }, [])

    async function listarPratos() {
        let retorno = [];
        const url = `https://www.themealdb.com/api/json/v1/1/categories.php`;
        await fetch(url)
            .then((resposta) => resposta.json())
            .then((pratos) => {
                retorno = pratos.categories;
                console.log(retorno);
            })
            .catch((erro) => {
                retorno.erro = erro;
                console.log(erro);
            });
        return retorno;
    }

    const handleChange = (e) => {
        setPrato(e.target.value);
    };

    return (
        <div
            style={{
                marginTop: "7vh",
            }}
        >
            <CssBaseline/>
            <FormControl fullWidth={true}>
                <InputLabel id="pratosLabel">Categorias de pratos</InputLabel>
                <Select
                    labelId="pratosLabel"
                    id={"pratos"}
                    value={prato}
                    label="Categorias de pratos"
                    onChange={handleChange}
                >
                    {listaPratos.map((p) => (
                        <MenuItem value={p} key={p.idCategory}>{p.strCategory}</MenuItem>
                    ))}
                </Select>
            </FormControl>
            <br/>
            <br/>
            {!prato.idCategory ? "" : (<Container
                maxWidth="sm"
                sx={{
                    width: "70vw",
                    minWidth: "320px",
                    padding: "20px",
                    boxShadow: "7px 7px 21px",
                    borderRadius: "7px",
                }}
            >

                <div>
                    <h3>{prato.strCategory}</h3>
                    <p>{prato.strCategoryDescription}</p>
                    <CardMedia
                        sx={{height: 360}}
                        image={prato.strCategoryThumb}
                        title={prato.strCategoryDescription}
                    />
                </div>
            </Container>)}
        </div>
    );
};

export default P2Ex4;