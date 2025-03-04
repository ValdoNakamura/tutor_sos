import { Link, Outlet } from "react-router-dom";

const NavBar = () => {
    return (
        <>
            <header className="h-20 bg-[#5A1F1F] text-white p-5 flex justify-between">
                <h1 className="text-3xl font-bold">SoS</h1>
                <nav>
                    <ul className="flex space-x-10">
                        <li><Link to="/" className="hover:underline">Inicio</Link></li>
                        <li><Link to="/peticiones" className="hover:underline">Peticiones</Link></li>
                        <li><Link to="/grupos" className="hover:underline">Mis Grupos</Link></li>
                        <li><Link to="/perfil" className="hover:underline">Perfil</Link></li>
                    </ul>
                </nav>
            </header>
            <Outlet/>
        </>
    );
}

export default NavBar;
