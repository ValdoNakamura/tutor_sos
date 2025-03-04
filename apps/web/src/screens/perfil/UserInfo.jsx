import { logout } from "../../../../../shared/firebase/index";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const UserInfo = () => {
    const navigate = useNavigate();
    const { logoutUser } = useAuth();

    const handleLogout = async () => {
        try {
            await logout();
            logoutUser();
            navigate("/login");
        } catch (error) {
            console.error("Error al cerrar sesión:", error);
        }
    };

    return (
        <div className="flex w-full justify-center">
            <button
                onClick={handleLogout}
                className="w-100 h-50 rounded-md bg-[#4B1E1E] text-white p-1 mt-5 hover:bg-red-200 font-semibold transition duration-300"
            >
                Cerrar sesión
            </button>
        </div>
    );
};

export default UserInfo;
