import { register } from "../../../../shared/firebase/index";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Register = () => {
    const { loginUser } = useAuth();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [tipo, setTipo] = useState("")
    const [error, setError] = useState("");

    const navigate = useNavigate();

    const handleRegister = async () => {
        try {
            const user = await register(email, password, tipo);
            loginUser(user);
            alert(`Registro exitoso. Bienvenido ${user.email}`);
            navigate("/", { replace: true });
        } catch (error) {
            setError(error.message);
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
                <h2 className="text-4xl font-bold text-gray-800 mb-8">Registrarse</h2>
                
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

                    
                    <label className="block mb-2 text-sm font-medium text-gray-900 ">Selecciona una opcion</label>
                    <select value={tipo} onChange={(event) => setTipo(event.target.value)} id="countries" className="m-3 w-50 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5">
                        <option value="">Selecciona un tipo</option>
                        <option value="maestro">Maestro</option>
                        <option value="alumno">Alumno</option>
                    </select>


                    <button 
                        onClick={handleRegister} 
                        className="w-full p-3 bg-white border border-gray-600 rounded-md hover:bg-gray-200 font-semibold transition duration-300">
                        Registrarse
                    </button>

                    {error && <p className="text-red-600 text-sm mt-2">{error}</p>}
                </div>

                <button className="w-50 rounded-md bg-[#4B1E1E] text-white p-1 mt-5 hover:bg-red-200 font-semibold transition duration-300">
                    <Link to="/login">
                        Ya Tengo Cuenta
                    </Link>
                </button>
            </div>
        </div>
    );
};

export default Register;