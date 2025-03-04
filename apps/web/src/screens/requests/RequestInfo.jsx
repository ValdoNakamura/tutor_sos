const messages = [
    {
        id: 1,
        name: "Cesar Uvaldo Rodriguez Cordova",
        date: "Hoy 05/02",
        message: "Hola buen día quiero que me informe sobre los pagos o donde puedo ir para que me atiendan",
        icon: "🎓",
        responses: [
            {
            id: 1,
            name: "David Rey Garcia Cedillo",
            message: "Hola Usted puede presentarse en cajas para realizar un pago o informes o comunicarse a este correo"
            }
        ]
        },
        {
        id: 2,
        name: "Cesar Uvaldo Rodriguez Cordova",
        date: "Hoy 05/02",
        message: "Maestro le informo que el día de hoy no puedo asistir por que me enfermé adjunto evidencia",
        icon: "🩺",
        responses: []
        }
    ];
    
    const RequestInfo = () => {
    return (
        <div className="p-6 max-w-md mx-auto">
            <h1 className="text-2xl font-bold text-red-900 mb-4">Mis SoS</h1>
            {messages.map((msg) => (
            <div key={msg.id} className="bg-yellow-100 p-4 mb-4 rounded-md shadow-md border border-yellow-300">
                <div className="flex justify-between items-center">
                <h2 className="font-semibold">{msg.name}</h2>
                <span className="text-sm text-gray-600">{msg.date}</span>
                </div>
                <div className="flex justify-between">
                <p className="mt-2 text-gray-700">{msg.message}</p>
                <div className="flex justify-end mt-2 text-3xl">{msg.icon}</div>
                </div>
                {msg.responses.length > 0 && (
                <div className="mt-3 bg-yellow-200 p-3 rounded-md">
                    {msg.responses.map((res) => (
                    <div key={res.id}>
                        <h3 className="font-semibold">{res.name}</h3>
                        <p className="text-gray-700">{res.message}</p>
                    </div>
                    ))}
                </div>
                )}
                <button className="text-sm text-gray-600 mt-2">{msg.responses.length} Respuesta{msg.responses.length !== 1 ? 's' : ''}</button>
            </div>
            ))}
        </div>
    );
}

export default RequestInfo;