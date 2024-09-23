import { createRef } from "react";

export default function Perguntar({ pergunta, resposta }) {
    const divResp = createRef();

    function revelar() {
        if (divResp.current) {
            if (divResp.current.style.display == "block") {
                divResp.current.style.display = "none";
            } else {
                divResp.current.style.display = "block";
            }
        }
    }
    return (
        <div
            style={{
                display: "inline-block",
                border: "1px solid black",
                borderRadius: "7px",
                padding: "7px",
                margin: "7px",
                backgroundColor: "steelblue",
            }}
        >
            <div style={{}}>
                <h4>{pergunta}</h4>
            </div>
            <button onClick={revelar}>Revelar resposta</button>
            <br />
            <br />
            <div
                ref={divResp}
                style={{
                    display: "none",
                }}
            >
                {resposta}
            </div>
        </div>
    );
}
