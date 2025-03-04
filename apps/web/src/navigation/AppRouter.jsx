import React from "react";
import { Routes, Route, Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

import Login from "../screens/Login";
import NavBar from "../components/NavBar";
import Home from "../screens/inicio/Home";
import TableUsers from "../screens/TableUsers";
import UserInfo from "../screens/perfil/UserInfo";
import RequestList from "../screens/requests/RequestList";
import Register from "../screens/Register";
import RequestInfo from "../screens/requests/RequestInfo";


const PrivateRoute = ({ children }) => {
    const { user } = useAuth();
    return user ? children : <Navigate to="/login" replace />;
};

const PublicRoute = ({ children }) => {
    const { user, loading } = useAuth();
    if (loading) return null;
    if (!user) return children;
    return <Navigate to="/" replace />;
};


const AppRouter = () => {
    return (
        <>
            <Routes>
                <Route path="/login" element={<PublicRoute><Login/></PublicRoute>} />
                <Route path="/register" element={<PublicRoute><Register/></PublicRoute>} />

                <Route path="/" element={<PrivateRoute><NavBar/></PrivateRoute>}>
                    <Route index element={<Home />} /> 
                    <Route path="peticiones" element={<Outlet/>}>
                        <Route index element={<RequestList/>}/>
                        <Route path="requestinfo" element={<RequestInfo/>}/>
                    </Route>

                    <Route path="grupos" element={<Outlet/>} >
                        <Route index element={<TableUsers/>}/>
                    </Route>


                    <Route path="perfil" element={<UserInfo />} />
                </Route>

                {/*<Route path="*" element={<NotFound />} />*/}
            </Routes>
        </>
    );
};

export default AppRouter;
