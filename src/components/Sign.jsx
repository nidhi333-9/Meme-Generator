import { useState } from "react"

function Sign() {
    const [signData, setSignData] = useState({
        email: "",
        password: "",
        finalPassword: "",
        newsletter: true
    })
    // console.log(signData)
    function handleData(event) {
        setSignData(prevSignData => {
            const { name, value, type, checked } = event.target

            return {
                ...prevSignData,
                [name]: type === "checkbox" ? checked : value

            }

        })
    }

    function handleSubmit(event) {
        event.preventDefault()
        if (signData.password != signData.finalPassword) {
            alert("Password doesn't match!")
        } else {
            alert("Successfully Signed Up!!")
        }
        console.log(signData)
    }
    return (
        <form onSubmit={handleSubmit}>
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
            <br />
            <input type="checkbox"
                id="newsletter"
                checked={signData.newsletter}
                onChange={handleData}
                name="newsletter" />
            <label htmlFor="newsletter">I want to join the newsletter</label>
            <br />
            <button className="border bg-blue-600 text-slate-50 px-3 rounded-md mt-3" type="submit">Sign Up</button>

        </form>
    )
}

export default Sign;