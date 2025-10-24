import { Link } from "react-router-dom";

export default function LoginForm() {
    return (
        <form className="space-y-5">
            <div>
                <label htmlFor="login-email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                </label>
                <input
                    type="email"
                    id="login-email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition"
                    placeholder="you@example.com"
                />
            </div>

            <div>
                <label htmlFor="login-password" className="block text-sm font-medium text-gray-700 mb-2">
                    Password
                </label>
                <input
                    type="password"
                    id="login-password"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition"
                    placeholder="••••••••"
                />
            </div>

            <div className="flex items-center justify-between">
                <label className="flex items-center">
                    <input
                        type="checkbox"
                        className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                    />
                    <span className="ml-2 text-sm text-gray-600">Remember me</span>
                </label>
                <a href="#" className="text-sm text-indigo-600 hover:text-indigo-700 font-medium">
                    Forgot password?
                </a>
            </div>

            <button
                type="submit"
                className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors shadow-lg hover:shadow-xl"
            >
                <Link to="/dashboard">Sign In</Link>
            </button>


            <div className="text-center text-sm text-gray-600">
                Demo: Use <span className="font-semibold">demo@test.com</span> / <span className="font-semibold">password123</span>
            </div>
        </form>

    );
}