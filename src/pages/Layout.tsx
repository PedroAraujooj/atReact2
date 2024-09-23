import {makeStyles} from "@mui/styles";
import {Link, Outlet} from "react-router-dom";
import {CssBaseline} from "@mui/material";

const useStyles = makeStyles({
    liStyle: {
        color: "white",
        textDecoration: "none",
        marginRight: "35px",
        transition: "all 0.4s ease-in-out",
        "&:hover": {
            color: "#c8cfe0",
        },
    },
    MenuItemStyle: {
        color: "Black",
        textDecoration: "none",
    }
});

export default function Layout(/*props*/) {
    // @ts-ignore
    const classes = useStyles();
    //const navigate = useNavigate();
    return (
        <div
            style={{
                height: "100%",
            }}
        >
            <CssBaseline/>
            <nav
                style={{
                    width: "100vw",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    backgroundColor: "#ba13ed",
                    height: "70px",
                }}
            >
                <Link to={"/"}>
                <h1
                    style={{
                        color: "white",
                        fontSize: "42px",
                        margin: "auto 0 auto 14px",
                    }}
                >
                    AT React
                </h1></Link>

                <ul
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        listStyle: "none",
                        backgroundColor: "#ba13ed",
                        textDecoration: "none",
                    }}
                >
                    <li>
                        <Link to={"/tela1"} className={classes.liStyle}>
                            Parte 1
                        </Link>
                    </li>
                    <li>
                        <Link to={"/tela2"} className={classes.liStyle}>
                            Parte 2
                        </Link>
                    </li>
                    <li>
                        <Link to={"/tela3"} className={classes.liStyle}>
                            Parte 3
                        </Link>
                    </li>
                    <li>
                        <Link to={`/p2Ex1/${true}`} className={classes.liStyle}>
                            Administrador Ligado
                        </Link>
                    </li>
                    <li>
                        <Link to={`/p2Ex1/${false}`} className={classes.liStyle}>
                            Administrador Desligado
                        </Link>
                    </li>
                    <li>
                        <Link to={`/p2Ex2/${true}`} className={classes.liStyle}>
                            2.2 com o BR selecionado
                        </Link>
                    </li>
                    <li>
                        <Link to={`/p3Ex1/${true}`} className={classes.liStyle}>
                            3.1 preenchido
                        </Link>
                    </li>
                    {/*<li>
                        <p
                            style={{textDecoration: "underline"}}
                            className={classes.liStyle}
                            onClick={logout}
                        >
                            LOGOUT
                        </p>
                    </li>*/}
                </ul>

            </nav>
            <Outlet/>
        </div>
    );
}