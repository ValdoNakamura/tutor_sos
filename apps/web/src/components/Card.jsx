import { Link } from "react-router-dom"
import { IoSchoolOutline } from "react-icons/io5";

const Card = () => {
    return (
        <>
            <div className="max-w-162 p-5 bg-[#EAD196] border border-gray-200 rounded-lg shadow-sm ">
                <div className="flex relative justify-between pt-7">
                    <h1 className="absolute top-0 right-0">07/03/2025</h1>
                    <h2 className=" text-2xl font-bold tracking-tight text-gray-900"> De: Cesar Uvaldo Rodriguez Cordova</h2>
                    <div className="w-20 h-20 flex justify-center items-center bg-[#5D1F1E] rounded-full">
                        <IoSchoolOutline className="" style={{fontSize: 50, color: "white"}}/>
                    </div>
                </div>
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
                <a className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#561C24] rounded-lg focus:ring-4 focus:outline-none focus:ring-blue-300">
                    Read more
                </a>
            </div>
        </>
    );
}

export default Card;