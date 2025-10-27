import { useForm } from "react-hook-form";
import { useAuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function SignupForm() {
  const { register, handleSubmit, watch, formState: { errors, isSubmitting } } = useForm();

  const { signup } = useAuthContext();
  const navigate = useNavigate();
  const password = watch('password');

  const onSubmit = async (data) => {
    try {
      await signup(data.email, data.password, data.name);
      navigate('/dashboard');
      toast.success('Signup successful! Welcome!');
    } catch (error) {
      toast.error(error.message || 'Signup failed. Please try again.')
    }
  }

  return (
    <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="signup-name" className="block text-sm font-medium text-gray-700 mb-2">
          Full Name <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="signup-name"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition"
          placeholder="John Doe"
          {...register('name', { required: 'Name is required' })}
        />
        {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
      </div>

      <div>
        <label htmlFor="signup-email" className="block text-sm font-medium text-gray-700 mb-2">
          Email Address <span className="text-red-500">*</span>
        </label>
        <input
          type="email"
          id="signup-email"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition"
          placeholder="you@example.com"
          {...register('email', {
            required: 'Email is required', pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: 'Invalid email address'
            }
          })}
        />
        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
      </div>

      <div>
        <label htmlFor="signup-password" className="block text-sm font-medium text-gray-700 mb-2">
          Password <span className="text-red-500">*</span>
        </label>
        <input
          type="password"
          id="signup-password"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition"
          placeholder="••••••••"
          {...register('password', { required: 'Password is required' })}
        />
        {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>}
      </div>

      <div>
        <label htmlFor="signup-confirm" className="block text-sm font-medium text-gray-700 mb-2">
          Confirm Password <span className="text-red-500">*</span>
        </label>
        <input
          type="password"
          id="signup-confirm"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition"
          placeholder="••••••••"
          {...register('confirmPassword', { required: 'Confirm Password is required', validate: (value) => value === password || 'Passwords do not match' })}
        />
        {errors.confirmPassword && <p className="text-red-500 text-sm mt-1">{errors.confirmPassword.message}</p>}
      </div>

      <label className="flex items-start">
        <input
          type="checkbox"
          className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500 mt-1"
          {...register('terms', { required: 'You must agree to the terms and conditions' })}
        />

        <span className="ml-2 text-sm text-gray-600">
          I agree to the <a href="#" className="text-indigo-600 hover:text-indigo-700 font-medium">Terms of Service</a> and <a href="#" className="text-indigo-600 hover:text-indigo-700 font-medium">Privacy Policy</a>
        </span>
      </label>
        {errors.terms && <p className="text-red-500 text-sm mt-1">{errors.terms.message}</p>}

      <button
        type="submit"
        className="cursor-pointer w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
        disabled={isSubmitting}
      >
        {isSubmitting ? 'Creating Account...' : 'Create Account'}
      </button>
    </form>
  );
}