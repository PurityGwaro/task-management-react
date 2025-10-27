import { useState } from "react";
import Header from "../components/layout/Header";
import { useAuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { toast } from "react-toastify";
import { useTicketsContext } from "../context/TicketsContext";
import TicketCard from "../components/tickets/TicketCard";
import Footer from "../components/layout/Footer";

export default function Tickets() {
    const { currentUser, logout, isAuthenticated } = useAuthContext();
    const navigate = useNavigate();
    const { getTickets } = useTicketsContext();
    const [tickets, setTickets] = useState([]);

    useEffect(() => {
        if (!isAuthenticated) {
            navigate('/auth');
        }
    }, [isAuthenticated, navigate]);

    useEffect(() => {
        if (currentUser) {
            const userTickets = getTickets(currentUser);
            setTickets(userTickets);
        }
    }, [currentUser, getTickets]);

    const handleLogout = () => {
        logout();
        toast.success('Logged out successfully');
        navigate('/');
    }

    if (!currentUser) {
        return null;
    }

    return (
        <div className="h-screen bg-gray-50 flex flex-col">
            <Header currentUser={currentUser} handleLogout={handleLogout} />
            <div className="px-4 sm:px-6 md:px-8 lg:px-12 pt-4 sm:pt-6">
                <button 
                    onClick={() => navigate('/dashboard')} 
                    className="flex items-center gap-2 text-gray-600 hover:text-gray-800 transition-colors hover:underline cursor-pointer"
                >
                    <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                    <span className="font-medium text-sm sm:text-base hover:text-blue-600">Go to Dashboard</span>
                </button>
            </div>
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 px-4 sm:px-6 md:px-8 lg:px-12 pt-2 sm:pt-4 pb-4 sm:pb-6">
                <div className="flex flex-col gap-1 sm:gap-2">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-1 sm:mb-2">All Tickets</h1>
                    <p className="text-sm sm:text-base text-gray-600">Here are all the tickets created by you</p>
                </div>
                <div className="w-full sm:w-auto">
                    <button onClick={() => navigate('/tickets/new')} className="w-full sm:w-auto bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg transition duration-200 ease-in-out transform hover:scale-105 cursor-pointer text-sm sm:text-base">
                        Create New Ticket
                    </button>
                </div>
            </div>
            <section className="flex-1 overflow-y-auto px-4 sm:px-6 md:px-8 lg:px-12 pb-6">
                {tickets.length === 0 ? (
                    <div className="flex flex-col items-center justify-center h-full text-center px-4">
                        <svg className="w-12 h-12 sm:w-16 sm:h-16 text-gray-300 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        <h3 className="text-lg sm:text-xl font-semibold text-gray-600 mb-2">No tickets yet</h3>
                        <p className="text-sm sm:text-base text-gray-500 mb-6">Create your first ticket to get started</p>
                        <button 
                            onClick={() => navigate('/tickets/new')} 
                            className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 rounded-lg transition duration-200 hover:scale-105 cursor-pointer"
                        >
                            Create Ticket
                        </button>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 pb-6">
                        {
                            tickets.map(ticket => (
                                <TicketCard key={ticket.id} ticket={ticket} />
                            ))
                        }
                    </div>
                )}
            </section>

            <Footer />
        </div>
    )
}