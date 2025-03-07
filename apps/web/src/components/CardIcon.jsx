
const CardIcon = () =>{
    return (
        <div className="max-w-xl mx-auto  bg-[#E5C78A] p-4 shadow-lg rounded-xl border border-gray-300">
            <div className="flex justify-end">
                <h1>Icono</h1>
            </div>
            <div className="flex items-center gap-2 mb-4">
                <div className="text-lg font-semibold">De: Cesar Uvaldo Rodriguez Cordova</div>
            </div>
            <div className="text-sm text-gray-700">
                <span className="font-semibold">Para:</span> David Rey Garcia Cedillo
            </div>
            <p className="mt-4 text-gray-800">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Quo exercitationem, rerum fugit temporibus, eligendi cumque
                voluptatum numquam, praesentium est repudiandae tempora autem
                nostrum. Maxime ut voluptates, dolor facere culpa nobis.
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repellat amet velit iste ex nulla quas eum, tempora eligendi,
                odit totam eos quo doloremque quis fuga a blanditiis explicabo
                asperiores laudantium!
            </p>
            <div className="mt-4 border rounded-lg p-2 bg-yellow-100 flex flex-col">
                <span className="text-gray-700 text-sm">Evidencia medica.pdf</span>
                <button className="mt-2 bg-gray-300 text-gray-800 px-4 py-1 rounded-md hover:bg-gray-400">
                Abrir
                </button>
            </div>
        </div>
    ); 
}

export default CardIcon;