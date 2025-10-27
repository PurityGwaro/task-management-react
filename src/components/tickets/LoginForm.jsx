import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useAuthContext } from "../../context/AuthContext";
import { toast } from "react-toastify";

export default function LoginForm() {
    const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm();
    const { login } = useAuthContext();
    const navigate = useNavigate()

    const onSubmit = async (data) => {
        try {
            await login(data.email, data.password);
            navigate('/dashboard');
            toast.success('Login successful! Welcome back!');
        } catch (error) {
            toast.error(error.message || 'Login failed. Please try again.')
        }
    }

    return (
        <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label htmlFor="login-email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address <span className="text-red-500">*</span>
                </label>
                <input
                    type="email"
                    id="login-email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition"
                    placeholder="you@example.com"
                    {...register('email', { required: 'Email is required', pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: 'Invalid email address'
                      } })}
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
            </div>

            <div>
                <label htmlFor="login-password" className="block text-sm font-medium text-gray-700 mb-2">
                    Password <span className="text-red-500">*</span>
                </label>
                <input
                    type="password"
                    id="login-password"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition"
                    placeholder="••••••••"
                    {...register('password', { required: 'Password is required' })}
                />
                {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>}
            </div>

            <button
                type="submit"
                disabled={isSubmitting}
                className="cursor-pointer w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
            >
                {isSubmitting ? 'Signing In...' : 'Sign In'}
            </button>


            <div className="text-center text-sm text-gray-600">
                Demo: Use <span className="font-semibold">demo@test.com</span> / <span className="font-semibold">password123</span>
            </div>
        </form>

    );
}