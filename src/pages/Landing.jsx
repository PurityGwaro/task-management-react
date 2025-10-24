import { Link } from "react-router-dom";

export default function Landing() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex flex-col items-center justify-center p-4">
            <div className="text-center">
                <h1 className="text-3xl font-bold text-gray-800 mb-2">TicketFlow</h1>
                <p className="text-gray-600">Manage your tickets with ease</p>
            </div>
            <div className="flex justify-center">
                <button className="bg-indigo-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-indigo-700 transition-colors">
                    <Link to="/auth">Get Started</Link>
                </button>
            </div>
        </div>
    );
}


