import Header from "../components/layout/Header";
import { useAuthContext } from "../context/AuthContext";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useTicketsContext } from "../context/TicketsContext";
import Footer from "../components/layout/Footer";
import TicketForm from "../components/tickets/TicketForm";

export default function NewTicket() {
    const { currentUser, logout, isAuthenticated } = useAuthContext();
    const { createTicket } = useTicketsContext();
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm();

    useEffect(() => {
        if (!isAuthenticated) {
            navigate('/auth');
        }
    }, [isAuthenticated, navigate]);

    const handleLogout = () => {
        logout();
        toast.success('Logged out successfully');
        navigate('/');
    }

    if (!currentUser) {
        return null;
    }

    const onSubmit = async (data) => {
        try {
            await createTicket(data, currentUser);
            navigate('/tickets');
            toast.success('Ticket created successfully');
        } catch (error) {
            toast.error(error.message || 'Failed to create ticket');
        }
    };

    const handleCancel = () => {
        navigate('/tickets');
    };
    return (
        <div className="h-screen bg-gray-50 flex flex-col">
            <Header currentUser={currentUser} handleLogout={handleLogout} />
            <section className="flex-1 overflow-y-auto px-4 sm:px-6 md:px-8 lg:px-12 py-6 sm:py-8 md:py-12 flex flex-col gap-6 sm:gap-8 md:gap-12 items-center">
                <div className="w-full max-w-2xl">
                    <button 
                        onClick={() => navigate('/tickets')} 
                        className="flex items-center gap-2 text-gray-600 hover:text-gray-800 mb-4 sm:mb-6 transition-colors hover:underline cursor-pointer"
                    >
                        <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                        <span className="font-medium text-sm sm:text-base hover:text-blue-600">Go to Tickets</span>
                    </button>
                </div>
                
                <div className="text-center px-4">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-2">Create A New Ticket</h1>
                    <p className="text-sm sm:text-base text-gray-600">Fill out the form below to submit a new ticket</p>
                </div>
                
                <div className="bg-white border border-gray-200 p-4 sm:p-6 md:p-8 rounded-2xl shadow-xl w-full max-w-2xl">
                    <TicketForm
                        onSubmit={onSubmit}
                        register={register}
                        errors={errors}
                        isSubmitting={isSubmitting}
                        handleSubmit={handleSubmit}
                        onCancel={handleCancel}
                        mode="create"
                    />
                </div>
            </section>
            <Footer />
        </div>
    )
}