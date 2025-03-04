import { login } from "@shared/firebase";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Login = () => {
    const { loginUser } = useAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState("");

    const navigate = useNavigate();

    const handleLogin = async () => {
        try {
            const user = await login(email, password);
            loginUser(user);
            alert(`Inicio de sesión exitoso. Bienvenido ${user.email}`);
            navigate("/", { replace: true })
        } catch (error) {
            alert(`Error: ${error.message}`);
        }
    };

    return (
        <div className="flex h-screen bg-gray-100">
            <div className="w-1/2 bg-[#4B1E1E] flex items-center justify-center">
                <div className="w-60 h-60 bg-[#EAD196] flex items-center justify-center rounded-full shadow-lg">
                    <span className="text-black text-5xl font-extrabold">SoS</span>
                </div>
            </div>

            <div className="w-1/2 flex flex-col items-center justify-center bg-white p-10">
                <h2 className="text-4xl font-bold text-gray-800 mb-8">Inicio De Sesión</h2>
                
                <div className="bg-[#EAD196] p-10 rounded-xl shadow-lg w-96">
                    <label className="block text-sm font-semibold text-gray-700 mb-1">Correo Electrónico</label>
                    <input 
                        onChange={(event) => setEmail(event.target.value)} 
                        value={email} 
                        placeholder="example@test.com"  
                        type="email" 
                        className="w-full p-3 mb-4 border border-red-700 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-600" 
                    />
                    
                    <label className="block text-sm font-semibold text-gray-700 mb-1">Contraseña</label>
                    <input 
                        onChange={(event) => setPassword(event.target.value)}
                        value={password} 
                        placeholder="**********" 
                        type="password" 
                        className="w-full p-3 mb-4 border border-red-700 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-600" 
                    />
                    
                    <button 
                        onClick={handleLogin} 
                        className="w-full p-3 bg-white border border-gray-600 rounded-md hover:bg-gray-200 font-semibold transition duration-300">
                        Ingresar
                    </button>
                </div>

                <button className="w-50 rounded-md bg-[#4B1E1E] text-white p-1 mt-5 hover:bg-red-200 font-semibold transition duration-300">
                    <Link to="/register">
                        Crear Cuenta
                    </Link>
                </button>
            </div>
        </div>
    );
}


export default Login;