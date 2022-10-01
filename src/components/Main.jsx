import { useEffect, useState } from "react";
import MemeData from "../MemeData";
import "../App.css"
function Main() {
    const [meme, setMeme] = useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    })

    const [allMemeImages, setAllMemeImages] = useState([])
    // const [memeImage, setMemeImage] = useState("")
    function getMeme() {

        const randomNumber = Math.floor(Math.random() * allMemeImages.length);
        const url = allMemeImages[randomNumber].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))
    }

    useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setAllMemeImages(data.data.memes))
    }, [])

    function handleChange(event) {
        const { name, value } = event.target
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
    }
    return (
        <>
            <div className="container border p-5">
                <div className="input  sm:flex sm:justify-between ">
                    <div className="">
                        <input
                            className="border w-2/3 sm:w-auto p-2 my-3 rounded-md"
                            type="text"
                            placeholder="shup up"
                            onChange={handleChange}
                            name="topText"
                            value={meme.topText} />
                    </div>
                    <div>
                        <input
                            className="border w-2/3 sm:w-auto p-2 my-3 rounded-md"
                            type="text"
                            placeholder="and take the money"
                            onChange={handleChange}
                            name="bottomText"
                            value={meme.bottomText} />
                    </div>
                </div>

                <button onClick={getMeme} className="bg-violet-800 w-3/4 my-5 sm:w-full p-2 text-white rounded-md font-semibold">Get A New Meme Image 🖼️</button>
                <div className="meme">
                    <img className="meme-image" src={meme.randomImage} alt="" />
                    <h2 className="meme--text top">{meme.topText}</h2>
                    <h2 className="meme--text bottom">{meme.bottomText}</h2>
                </div>
            </div>
        </>
    )
}

export default Main;