import { Link, useNavigate, useParams } from "react-router-dom";
import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";
import { useAuthContext } from "../context/AuthContext";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useTicketsContext } from "../context/TicketsContext";
import { useForm } from "react-hook-form";
import TicketForm from "../components/tickets/TicketForm";

export default function Ticket() {
    const navigate = useNavigate();
    const { currentUser, logout, isAuthenticated } = useAuthContext();
    const { id } = useParams();
    const { getTicketById, updateTicket, deleteTicket } = useTicketsContext();
    const [ticket, setTicket] = useState(null);
    const [loading, setLoading] = useState(true);
    const [isEditMode, setIsEditMode] = useState(false);
    const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm();

    useEffect(() => {
        if (!isAuthenticated) {
            navigate('/auth');
        }
    }, [isAuthenticated, navigate]);

    useEffect(() => {
        if (currentUser && id) {
            const foundTicket = getTicketById(id);
            if (foundTicket) {
                setTicket(foundTicket);
                reset(foundTicket);
            } else {
                toast.error('Ticket not found');
                navigate('/tickets');
            }
            setLoading(false);
        }
    }, [currentUser, id, getTicketById, navigate, reset]);

    const handleEdit = () => {
        setIsEditMode(true);
    };

    const handleCancelEdit = () => {
        setIsEditMode(false);
        reset(ticket);
    };

    const handleDelete = () => {
        if (window.confirm('Are you sure you want to delete this ticket?')) {
            deleteTicket(id);
            toast.success('Ticket deleted successfully');
            navigate('/tickets');
        }
    };

    const onSubmit = async (data) => {
        try {
            const updatedTicket = updateTicket(id, data);
            setTicket(updatedTicket);
            setIsEditMode(false);
            toast.success('Ticket updated successfully');
        } catch (error) {
            toast.error(error.message || 'Failed to update ticket');
        }
    };

    const handleLogout = () => {
        logout();
        toast.success('Logged out successfully');
        navigate('/');
    }

    if (!currentUser || loading) {
        return null;
    }

    if (!ticket) {
        return (
            <div className="h-screen bg-gray-50 flex items-center justify-center">
                <div className="text-center">
                    <h2 className="text-2xl font-semibold text-gray-700 mb-2">Ticket not found</h2>
                    <button
                        onClick={() => navigate('/tickets')}
                        className="text-blue-500 hover:text-blue-600 font-medium"
                    >
                        Back to Tickets
                    </button>
                </div>
            </div>
        );
    }

    const getStatusColor = (status) => {
        switch (status?.toLowerCase()) {
            case 'open': return 'bg-blue-100 text-blue-800';
            case 'in-progress': return 'bg-yellow-100 text-yellow-800';
            case 'resolved': return 'bg-green-100 text-green-800';
            default: return 'bg-gray-100 text-gray-800';
        }
    };

    const getPriorityColor = (priority) => {
        switch (priority?.toLowerCase()) {
            case 'high': return 'bg-red-100 text-red-800';
            case 'medium': return 'bg-orange-100 text-orange-800';
            case 'low': return 'bg-green-100 text-green-800';
            default: return 'bg-gray-100 text-gray-800';
        }
    };

    return (
        <div className="h-screen bg-gray-50 flex flex-col">
            <Header currentUser={currentUser} handleLogout={handleLogout} />

            <section className="flex-1 overflow-y-auto px-4 sm:px-6 md:px-8 lg:px-12 py-6 sm:py-8 md:py-10">
                <div className="max-w-5xl mx-auto">
                    <button 
                        onClick={() => navigate('/tickets')} 
                        className="flex items-center gap-2 text-gray-600 hover:text-gray-800 mb-4 sm:mb-6 transition-colors"
                    >
                        <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                        <span className="font-medium text-sm sm:text-base">Back to Tickets</span>
                    </button>

                    <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 px-8 py-6 border-b border-gray-200">
                            <h1 className="text-3xl font-bold text-gray-800 mb-4">{ticket.title}</h1>
                            <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                                <span className={`px-3 sm:px-4 py-1 sm:py-1.5 rounded-full text-xs sm:text-sm font-medium ${getStatusColor(ticket.status)}`}>
                                    {ticket.status}
                                </span>
                                <span className={`px-3 sm:px-4 py-1 sm:py-1.5 rounded-full text-xs sm:text-sm font-medium ${getPriorityColor(ticket.priority)}`}>
                                    {ticket.priority} priority
                                </span>
                            </div>
                        </div>

                        <div className="p-4 sm:p-6 md:p-8">
                            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4 mb-4 sm:mb-6">
                                <h2 className="text-lg sm:text-xl font-semibold text-gray-800">Ticket Details</h2>
                                <div className="flex items-center gap-2 sm:gap-3 w-full sm:w-auto">
                                    <button
                                        onClick={handleEdit}
                                        className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-3 sm:px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors cursor-pointer text-sm sm:text-base"
                                    >
                                        Edit
                                    </button>
                                    <button
                                        onClick={handleDelete}
                                        className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-3 sm:px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg transition-colors cursor-pointer text-sm sm:text-base"
                                    >
                                        Delete
                                    </button>
                                </div>
                            </div>

                            <div className="mb-6 sm:mb-8">
                                <h3 className="text-base sm:text-lg font-semibold text-gray-700 mb-2">Description</h3>
                                <p className="text-gray-700 leading-relaxed text-sm sm:text-base">{ticket.description}</p>
                            </div>

                            <div className="border-t border-gray-200 pt-4 sm:pt-6">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                                    <div className="flex flex-col items-start gap-2">
                                        <p className="text-xs sm:text-sm text-gray-500 mb-1">Ticket ID</p>
                                        <p className="text-gray-800 font-mono text-xs sm:text-sm break-all">{ticket.id}</p>
                                    </div>
                                    <div className="flex flex-col items-start gap-2">
                                        <p className="text-xs sm:text-sm text-gray-500 mb-1">Created At</p>
                                        <p className="text-gray-800 text-xs sm:text-sm">{new Date(ticket.createdAt).toLocaleString('en-US', {
                                            year: 'numeric',
                                            month: 'long',
                                            day: 'numeric',
                                            hour: '2-digit',
                                            minute: '2-digit'
                                        })}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {isEditMode && (
                <>
                    <div 
                        className="fixed inset-0 bg-opacity-50 z-40 transition-opacity"
                        onClick={handleCancelEdit}
                    />
                    
                    <div className="fixed inset-y-0 right-0 w-full sm:w-3/4 md:w-2/3 lg:w-1/2 bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out overflow-y-auto">
                        <div className="sticky top-0 bg-white border-b border-gray-200 px-4 sm:px-6 md:px-8 py-4 sm:py-5 md:py-6 flex items-center justify-between z-10">
                            <h2 className="text-xl sm:text-2xl font-bold text-gray-800">Edit Ticket</h2>
                            <button
                                onClick={handleCancelEdit}
                                className="text-gray-500 hover:text-gray-700 transition-colors cursor-pointer"
                            >
                                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                        
                        <div className="px-4 sm:px-6 md:px-8 py-4 sm:py-6">
                            <TicketForm
                                onSubmit={onSubmit}
                                register={register}
                                errors={errors}
                                isSubmitting={isSubmitting}
                                handleSubmit={handleSubmit}
                                onCancel={handleCancelEdit}
                                mode="edit"
                            />
                        </div>
                    </div>
                </>
            )}

            <Footer />
        </div>
    )
}
