import {Container, CssBaseline} from "@mui/material";
import {useEffect, useState} from "react";
import { faker } from "@faker-js/faker";


const P2Ex3 = () => {
    const [nomes, SetNomes] = useState([]);
    const [filtro, SetFiltro] = useState("");

    useEffect(() => {
        SetNomes(
            new Array(100).fill().map(() => {
                return faker.person.fullName();
            }),
        );
    }, []);

    function filtrar() {
        if (filtro) {
            return nomes.filter((nome) => {
                nome = nome.toUpperCase();
                return nome.startsWith((filtro).toUpperCase());
            });
        }
        return nomes;
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
                <h1>Ex 02.03</h1>

                <input value={filtro} onChange={(e) => SetFiltro(e.target.value)} />
                {filtrar().map((nome, index) => (
                    <p key={index}>{nome}</p>
                ))}
            </Container>
        </div>
    );
};

export default P2Ex3;