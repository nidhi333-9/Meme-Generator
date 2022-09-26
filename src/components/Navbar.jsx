import logo from "../images/logo.png"

function Navbar() {
    return (
        <>
            <div className="nav bg-violet-800">
                <div className="logo m-auto flex align-middle">
                    <img src={logo} alt="" />
                    <p className=" px-4 text-white text-xl font-semibold md:text-3xl md:font-bold">Meme Generator</p>
                </div>
            </div>
        </>
    )
}

export default Navbar;