import { useState } from "react";

function Form() {
    const [formData, setFormData] = useState(
        {
            firstName: "",
            lastName: "",
            email: "",
            comment: "",
            isFriendly: true,
            employment: "",
            favColor: ""
        }
    )


    function handleChange(event) {
        setFormData(prevFormData => {
            const { name, value, type, checked } = event.target
            return {
                ...prevFormData,
                [name]: type === "checkbox" ? checked : value
            }
        })
    }

    function handleSubmit(event) {
        event.preventDefault()
        console.log(formData)
    }
    return (

        <form className="text-start flex flex-col p-5" onSubmit={handleSubmit}>
            <input className="my-6 p-2 border" type="text"
                placeholder="First Name"
                onChange={handleChange}
                name="firstName"
                value={formData.firstName} />
            <input className="my-6 p-2 border"
                type="text"
                placeholder="Last Name"
                onChange={handleChange}
                name="lastName"
                value={formData.lastName} />
            <input className="my-6 p-2 border"
                type="email"
                placeholder="abc@gmail.com"
                onChange={handleChange}
                name="email"
                value={formData.email} />
            <textarea className="border p-2"
                type="text"
                onChange={handleChange}
                name="comment"
                value={formData.comment}
                placeholder="comments goes here"
                cols="30" rows="10" />
            <div className="py-6">
                <input
                    type="checkbox"
                    id="isFriendly"
                    checked={formData.isFriendly}
                    onChange={handleChange}
                    name="isFriendly" />
                <label htmlFor="isFriendly">Are You Friendly? </label>
            </div>
            <br />
            <legend>Current Employment Status</legend>
            <div className="border p-3 flex-col">

                <input type="radio"
                    id="unemployment"
                    name="employment"
                    onChange={handleChange}
                    value="unemployment"
                    checked={formData.employment === "unemployment"}
                />
                <label htmlFor="unemployment">Unemployment</label>
                <br />
                <input type="radio"
                    id="part-time"
                    name="employment"
                    onChange={handleChange}
                    value="part-time"
                    checked={formData.employment === "part-time"}
                />
                <label htmlFor="part-time">Part-time</label>
                <br />
                <input type="radio"
                    id="full-time"
                    name="employment"
                    onChange={handleChange}
                    value="full-time"
                    checked={formData.employment === "full-time"}
                />
                <label htmlFor="full-time">Full-time</label>
            </div>
            <br />
            <select
                name="favColor"
                id="favColor"
                value={formData.favColor}
                onChange={handleChange}>
                <option value="">-- Choose --</option>
                <option value="red">Red</option>
                <option value="orange">Orange</option>
                <option value="yellow">Yellow</option>
                <option value="green">Green</option>
                <option value="blue">Blue</option>
                <option value="indigo">Indigo</option>
                <option value="violet">Violet</option>
            </select>
            <br />
            <button className="border bg-blue-600 text-slate-50" type="submit">Submit</button>
        </form>

    )
}

export default Form;