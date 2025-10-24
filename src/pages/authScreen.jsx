import { useState } from "react";
import LoginForm from "./Login";
import SignupForm from "./Signup";
import { Link } from "react-router-dom";

export default function AuthScreen() {
    const [activeTab, setActiveTab] = useState('login');

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
            <div className="w-full max-w-md">
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                    <div className="bg-gradient-to-r from-indigo-600 to-blue-600 p-8 text-center">
                        <Link to="/">
                            <h1 className="text-3xl font-bold text-white mb-2 hover:text-indigo-100">TicketFlow</h1>
                        </Link>
                        <p className="text-indigo-100">Manage your tickets with ease</p>
                    </div>

                    <div className="flex border-b border-gray-200">
                        <button
                            onClick={() => setActiveTab('login')}
                            className={`flex-1 py-4 text-center font-semibold transition-colors cursor-pointer ${activeTab === 'login'
                                ? 'text-indigo-600 border-b-2 border-indigo-600'
                                : 'text-gray-500 hover:text-gray-700'
                                }`}
                        >
                            Login
                        </button>
                        <button
                            onClick={() => setActiveTab('signup')}
                            className={`flex-1 py-4 text-center font-semibold transition-colors cursor-pointer ${activeTab === 'signup'
                                ? 'text-indigo-600 border-b-2 border-indigo-600'
                                : 'text-gray-500 hover:text-gray-700'
                                }`}
                        >
                            Sign Up
                        </button>
                    </div>

                    <div className="p-8">
                        {activeTab === 'login' ? <LoginForm /> : <SignupForm />}
                    </div>
                </div>
            </div>
        </div>
    )
}