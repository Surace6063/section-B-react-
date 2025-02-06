import { useState } from "react"

const Form = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        const formData = {
            user_email: email,
            user_password: password
        }

        console.log(formData);
    }
    return (
        <form onSubmit={handleSubmit} className="border p-4 rounded-md m-2 space-y-4">
            <div>
                <label htmlFor="email">Email</label>
                <input
                    type="text"
                    id="email"
                    name="email"
                    placeholder="Enter your email"
                    className="block border p-2 rounded-md"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input
                    type="text"
                    id="password"
                    name="password"
                    placeholder="Enter your password"
                    className="block border p-2 rounded-md"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />
            </div>
            <button>Submit</button>
        </form>
    )
}
export default Form