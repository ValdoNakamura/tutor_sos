const CardInfo = ({ title, students, sosCount }) => {
    return (
        <div className="bg-[#D9B778] p-4 rounded-2xl shadow-lg text-center">
        <h3 className="text-2xl font-bold">{title}</h3>
        <p className="text-lg">Alumnos: {students}</p>
        <p className="text-lg">SoS: {sosCount}</p>
        </div>
    );
};