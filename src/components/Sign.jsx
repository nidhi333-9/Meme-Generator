import { useState } from "react"

function Sign() {
    const [signData, setSignData] = useState({
        email: "",
        password: "",
        finalPassword: ""
    })
    console.log(signData)
    function handleData(event) {
        setSignData(prevSignData => {
            return {
                ...prevSignData,
                [event.target.name]: event.target.value
            }
        })
    }
    return (
        <form>
            <input className="border my-3 p-2"
                type="email"
                value={signData.email}
                name="email"
                placeholder="Email address"
                onChange={handleData}
            />
            <br />
            <input className="border my-3 p-2"
                type="text"
                value={signData.password}
                name="password"
                placeholder="Password"
                onChange={handleData}
            />
            <br />
            <input className="border my-3 p-2"
                type="text"
                value={signData.finalPassword}
                name="finalPassword"
                placeholder="Confirm password"
                onChange={handleData}
            />

        </form>
    )
}

export default Sign;