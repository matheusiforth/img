import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import PageLogin from './modulos/login/';
import HomePage from './modulos/home';
import { AutenticacaoProvider, AutenticacaoContext } from "./context/autenticacao";
import React, {useContext} from "react";

 const AppRoutes = () => {
    const Private = ({ children }) => {
      const {autenticado} = useContext(AutenticacaoContext) ;
         console.log(autenticado) ;

        if (!autenticado){
            return <Navigate to="/login"/>;
        }
        return children;
    }

    return (
        <BrowserRouter>
            <AutenticacaoProvider>
            <Routes>
                <Route path='/login' element={<PageLogin/>} />  
                <Route path='/' element={ <Private> <HomePage/> </Private>} />              
            </Routes>
            </AutenticacaoProvider>
        </BrowserRouter>
    )
}

export default AppRoutes;