import { Link } from "react-router-dom";

export default function Header({currentUser, handleLogout}) {
    return (
        <header className="bg-white border-b border-gray-200 shadow-xs">
            <div className="w-full mx-auto py-3 sm:py-4 px-4 sm:px-6 md:px-8 lg:px-12">
                <div className="flex justify-between items-center">
                    <Link to="/" className="text-xl sm:text-2xl md:text-3xl font-bold text-blue-600 hover:text-blue-700 transition">
                        Tickify
                    </Link>
                    <div className="flex gap-3 sm:gap-4 md:gap-6 items-center">
                        <div className="text-right hidden md:block">
                            <p className="text-xs text-gray-500">Logged in as</p>
                            <p className="font-semibold text-gray-800 text-sm">{currentUser.email}</p>
                        </div>
                        <button
                            onClick={handleLogout}
                            className="bg-red-500 hover:bg-red-600 text-white font-semibold px-3 sm:px-4 md:px-6 py-1.5 sm:py-2 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg cursor-pointer text-sm sm:text-base"
                        >
                            Logout
                        </button>
                    </div>
                </div>
            </div>
        </header>
    )
}