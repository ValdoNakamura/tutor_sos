import { Link } from "react-router-dom"

const Card = ({navegacion}) => {
    return (
        <>
            <div className="max-w-sm p-6 bg-[#EAD196] border border-gray-200 rounded-lg shadow-sm ">
                <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">Cesar Uvaldo Rodriguez Cordova</h5>
                </a>
                <p className="mb-3 font-normal text-black text-left">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit
                    soluta cum nam non beatae. Exercitationem eveniet sint nobis 
                    ea labore dolore dignissimos repellendus? Voluptates sapiente 
                    consequuntur voluptatem dolore numquam odio. Lorem ipsum dolor 
                    sit amet consectetur adipisicing elit. Quae, eligendi aliquid 
                    doloremque ipsum quos corporis illum? Id autem, quisquam totam 
                    ullam repellat alias, ipsum voluptas aspernatur excepturi, rem 
                    incidunt aliquid!
                </p>
                <Link to={navegacion} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#561C24] rounded-lg focus:ring-4 focus:outline-none focus:ring-blue-300">
                    Read more
                </Link>
            </div>

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
        </>
    );
}

export default Card;