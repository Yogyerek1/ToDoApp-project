import {useState} from 'react'
import './LoginRegister.css'

type PanelState = "login" | "register";
function LoginRegister () {
    const [panelState, setPanelState] = useState<PanelState>("login");

    const renderPanel = () => {
        if (panelState === "login") {
            return ( // login panel
                <>
                    <h1 className="mx-auto text-center w-full text-5xl m-5">Login</h1>
                    <div>
                        <label>Username:</label><br/>
                        <input 
                            type="text" 
                            placeholder="username" 
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-300"
                        />
                    </div>
                    <div>
                        <label>Password:</label><br/>
                        <input 
                            type="text" 
                            placeholder="password" 
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-300"
                        />
                    </div>
                    <button 
                        className="mx-auto w-full p-2 m-3 bg-blue-500 rounded-lg"
                    >
                        Login
                    </button>
                    <button 
                        className="mx-auto w-full p-2 m-0 text-blue-500 rounded-lg transition duration-500 hover:text-blue-700"
                    >
                        You dont have account?
                    </button>
                </>
            );
        } else if (panelState === "register") {
            return ( // register panel
                <div className="panel">
                    register
                </div>
            );
        }
    };
    return (
        <div className="flex justify-center items-center min-h-screen p-4 bg-gray-700">
            <div className="w-full bg-white max-w-md mx-auto shadow-lg border-b-blue-500 rounded-lg shadow-blue-500/100 p-5 transition duration-500 hover:shadow-xl hover:shadow-blue-500/100">
                {renderPanel()}
            </div>
        </div>
    );
}

export default LoginRegister;