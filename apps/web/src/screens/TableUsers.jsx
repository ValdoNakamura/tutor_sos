import React from "react";



    const StudentRow = ({ name, petitions, id }) => {
    return (
        <tr className="border-b border-gray-300">
        <td className="p-2">{name}</td>
        <td className="p-2 text-center">{petitions}</td>
        <td className="p-2 text-center">{id}</td>
        </tr>
    );
    };

const TableUsers = () => {
    const students = [
        { name: "Cesar Uvaldo Rodríguez Cordova", petitions: 10, id: "22057" },
        { name: "Sergio Panfilo Flomenza Suarez", petitions: 2, id: "20581" },
        { name: "Kecia Kasumi Rodríguez Cordova", petitions: 8, id: "81881" },
        { name: "Francisco Gabriel Suarez Hernandez", petitions: 2, id: "20581" },
    ];

    return (
        <div className="p-6 bg-[#F5F5F5] min-h-screen">
            <div className="mt-6 bg-white p-4 rounded-lg shadow-md">
                <h2 className="text-xl font-bold">Total de SoS: 10</h2>
                <table className="w-full mt-4 border-collapse border border-gray-300">
                <thead>
                    <tr className="bg-[#D9B778]">
                    <th className="p-2">Nombre del Alumno</th>
                    <th className="p-2">Peticiones Hoy</th>
                    <th className="p-2">Matrícula</th>
                    </tr>
                </thead>
                <tbody>
                    {students.map((student, index) => (
                    <StudentRow key={index} {...student} />
                    ))}
                </tbody>
                </table>
            </div>
        </div>
    );
};

export default TableUsers;
