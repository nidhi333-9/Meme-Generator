import { useState } from "react";
import MemeData from "../MemeData";

function Main() {
    const [memeImage, setMemeImage] = useState("")
    function getMeme() {
        const memeArray = MemeData.data.memes
        const randomNumber = Math.floor(Math.random() * memeArray.length);
        const url = memeArray[randomNumber].url
        setMemeImage(url)
    }
    return (
        <>
            <div className="container border p-5">
                <div className="input  sm:flex sm:justify-between ">
                    <div className="">
                        <input className="border w-2/3 sm:w-auto p-2 my-3 rounded-md" type="text" placeholder="shup up" />
                    </div>
                    <div>
                        <input className="border w-2/3 sm:w-auto p-2 my-3 rounded-md" type="text" placeholder="and take the money" />
                    </div>
                </div>

                <button onClick={getMeme} className="bg-violet-800 w-3/4 my-5 sm:w-full p-2 text-white rounded-md font-semibold">Get A New Meme Image 🖼️</button>
                <div className="w-fit">
                    <img src={memeImage} alt="" />
                </div>
            </div>
        </>
    )
}

export default Main;