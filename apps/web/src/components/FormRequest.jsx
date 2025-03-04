const SosForm = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-[#E5C78A] p-6 rounded-lg shadow-lg w-80">
            <h2 className="text-center text-lg font-semibold text-gray-800 mb-4">
                ¿Quieres Hacer un SoS?
            </h2>
            <div className="bg-[#5D1F1E] p-2 rounded-md text-white text-center mb-3">
                Nombre Del Tutor
            </div>
            <label className="block text-gray-800">Descripción</label>
            <textarea className="w-full p-2 rounded-md bg-[#5D1F1E] text-white mb-3" rows="3"></textarea>
            
            <div className="flex justify-between items-center mb-3">
                <div className="flex flex-col items-center">
                <div className="bg-[#5D1F1E] p-3 rounded-full">
                    <span className="text-white text-xl">🎓</span>
                </div>
                <span className="text-gray-800 text-sm">Categoría</span>
                </div>
                <div className="w-20 h-14 bg-[#5D1F1E] rounded-md"></div>
            </div>
            
            <div className="flex justify-between">
                <button className="bg-[#5D1F1E] text-white px-10 py-2 rounded-md">Enviar</button>
                <button className="bg-[#5D1F1E] text-white px-10 py-2 rounded-md">Cancelar</button>
            </div>
            </div>
        </div>
    );
}  

export default SosForm;