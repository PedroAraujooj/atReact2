import {Checkbox, Container, CssBaseline} from "@mui/material";
import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";

const P2Ex1 = () => {
    const [checked, setChecked] = useState(false);
    const { isADM } = useParams();

    useEffect(()=>{
        let b = isADM == "true";
        if(b){
            setChecked(true);
        }else {
            setChecked(false);
        }
    }, [isADM])
    const handleChange = (e) => {
        setChecked(e.target.checked);
    };

    return (
        <div
            style={{
                marginTop: "20vh",
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
                    <label>Administrador</label>
                    <Checkbox  checked={checked}
                               onChange={handleChange}/>
                </form>
                <p>{checked?"O usuário atual é Administrador":"O usuário atual é Colaborador"}</p>
            </Container>
        </div>
    );
};

export default P2Ex1;