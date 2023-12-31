import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Home from "./pages/home.tsx";
import Page404 from "./pages/404.tsx";
import Redirect from "./pages/redirect.tsx";
import Result from "./pages/result.tsx";

const App = () => {
        return (
        <BrowserRouter>
            <Routes>
                <Route path={"/"} element={<Home/>}/>
                <Route path={"/:id"} element={<Redirect/>}/>
                <Route path={"/error"} element={<Page404/>}/>
                <Route path={"*"} element={<Page404/>}/>
                <Route path={"/result/:id"} element={<Result/>}/>
            </Routes>
        </BrowserRouter>
    );
};

export default App;