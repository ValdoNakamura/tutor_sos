import { Route, Outlet, Routes } from "react-router-dom";

import RequestList from "../../screens/requests/RequestList"
import RequestInfo from "../../screens/requests/RequestInfo"


const NavigationApp = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Outlet/>}>
                    <Route index element={<RequestList/>}/>
                    <Route path="requestinfo" element={<RequestInfo/>}/>
                </Route>
            </Routes>
        </>
    );
}

export default NavigationApp