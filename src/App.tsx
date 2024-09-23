import './App.css'
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "./pages/Home.tsx";
import Layout from "./pages/Layout.tsx";
import Tela1 from "./pages/parte1/tela1.tsx";
import P1Ex1 from "./pages/parte1/p1Ex1.tsx";
import P1Ex2 from "./pages/parte1/p1Ex2.tsx";
import P1Ex3 from "./pages/parte1/p1Ex3.tsx";
import P1Ex4 from "./pages/parte1/p1Ex4.tsx";
import Tela2 from "./pages/parte2/tela2.tsx";
import P2Ex1 from "./pages/parte2/p2Ex1.tsx";
import P2Ex2 from "./pages/parte2/p2Ex2.tsx";
import P2Ex3 from "./pages/parte2/p2Ex3.tsx";
import P2Ex4 from "./pages/parte2/p2Ex4.tsx";
import Tela3 from "./pages/parte3/tela3.tsx";
import P3Ex1 from "./pages/parte3/p3Ex1.tsx";
import P3Ex2 from "./pages/parte3/p3Ex2.tsx";
import P3Ex3 from "./pages/parte3/p3Ex3.tsx";
import P3Ex4 from "./pages/parte3/p3Ex4.tsx";

function App() {
    return (
            <Router>
                <Routes>
                    <Route path="/" element={<Layout/>}>
                        <Route index element={<Home/>}/>

                        <Route path="tela1" element={<Tela1/>}/>
                        <Route path="p1Ex1" element={<P1Ex1/>}/>
                        <Route path="p1Ex2" element={<P1Ex2/>}/>
                        <Route path="p1Ex3" element={<P1Ex3/>}/>
                        <Route path="p1Ex4" element={<P1Ex4/>}/>

                        <Route path="tela2" element={<Tela2/>}/>
                        <Route path="p2Ex1/:isADM" element={<P2Ex1/>}/>
                        <Route path="p2Ex1" element={<P2Ex1/>}/>
                        <Route path="p2Ex2/:brasil" element={<P2Ex2/>}/>
                        <Route path="p2Ex2" element={<P2Ex2/>}/>
                        <Route path="p2Ex3" element={<P2Ex3/>}/>
                        <Route path="p2Ex4" element={<P2Ex4/>}/>

                        <Route path="tela3" element={<Tela3/>}/>
                        <Route path="p3Ex1/:isFilled" element={<P3Ex1/>}/>
                        <Route path="p3Ex1" element={<P3Ex1/>}/>
                        <Route path="p3Ex2" element={<P3Ex2/>}/>
                        <Route path="p3Ex3" element={<P3Ex3/>}/>
                        <Route path="p3Ex4" element={<P3Ex4/>}/>

                        {/*
                        <Route path="p4Ex1" element={<Login/>}/>
                        <Route path="p4Ex2" element={<Login/>}/>
                        <Route path="p4Ex3" element={<Login/>}/>
                        <Route path="p4Ex4" element={<Login/>}/>*/}
                    </Route>
                </Routes>
            </Router>

    )
}

export default App
