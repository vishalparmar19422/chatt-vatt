import { useState } from "react"
import axios from "axios"

const Auth = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    async function handleLogin() {


        const response = await fetch("http://localhost:3000/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ username, password }),
        });

        const data = await response.json();


        console.log("Login successful:", data);
        localStorage.setItem("token", data.token);
    }

    return (
        <div className="bg-blue-50 h-screen flex items-center">
            <form className="w-64 mx-auto mb-12" >
                <input
                    placeholder="Username"
                    value={username}
                    onChange={(e) => {
                        setUsername(e.target.value)
                    }}
                    className="block w-full rounded-sm p-2 mb-2 border" />
                <input
                    value={password}
                    onChange={(e) => {
                        setPassword(e.target.value)
                    }}
                    type="password"
                    placeholder="password"
                    className="block w-full rounded-sm p-2 mb-2 border" />
                <button className="bg-blue-500 text-white block w-full rounded-sm p-2" onClick={(e) => {
                    e.preventDefault()
                    handleLogin()
                }}>
                    Register
                </button>

            </form>
        </div>
    )
}
export default Auth