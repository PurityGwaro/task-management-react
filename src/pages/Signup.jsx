export default function SignupForm() {
  return (
    <form className="space-y-5">
      <div>
        <label htmlFor="signup-name" className="block text-sm font-medium text-gray-700 mb-2">
          Full Name
        </label>
        <input
          type="text"
          id="signup-name"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition"
          placeholder="John Doe"
        />
      </div>

      <div>
        <label htmlFor="signup-email" className="block text-sm font-medium text-gray-700 mb-2">
          Email Address
        </label>
        <input
          type="email"
          id="signup-email"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition"
          placeholder="you@example.com"
        />
      </div>

      <div>
        <label htmlFor="signup-password" className="block text-sm font-medium text-gray-700 mb-2">
          Password
        </label>
        <input
          type="password"
          id="signup-password"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition"
          placeholder="••••••••"
        />
      </div>

      <div>
        <label htmlFor="signup-confirm" className="block text-sm font-medium text-gray-700 mb-2">
          Confirm Password
        </label>
        <input
          type="password"
          id="signup-confirm"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition"
          placeholder="••••••••"
        />
      </div>

      <label className="flex items-start">
        <input
          type="checkbox"
          className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500 mt-1"
        />
        <span className="ml-2 text-sm text-gray-600">
          I agree to the <a href="#" className="text-indigo-600 hover:text-indigo-700 font-medium">Terms of Service</a> and <a href="#" className="text-indigo-600 hover:text-indigo-700 font-medium">Privacy Policy</a>
        </span>
      </label>

      <button
        type="submit"
        className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors shadow-lg hover:shadow-xl"
      >
        Create Account
      </button>
    </form>
  );
}