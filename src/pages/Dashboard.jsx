import { useEffect, useState } from "react";
import { useAuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Statistic from "../components/tickets/Statistic";
import Footer from "../components/layout/Footer";
import QuickAction from "../components/tickets/QuickAction";
import Header from "../components/layout/Header";
import { useTicketsContext } from "../context/TicketsContext";

export default function Dashboard() {
    const { currentUser, logout, isAuthenticated } = useAuthContext();
    const navigate = useNavigate();
    const { getTickets, getAllTicketsByStatus } = useTicketsContext();
    const [ticketsData, setTicketsData] = useState({
        userTickets: [],
        openTickets: [],
        inProgressTickets: [],
        closedTickets: []
    });

    useEffect(() => {
        if (!isAuthenticated) {
            navigate('/auth');
        }
    }, [isAuthenticated, navigate]);

    useEffect(() => {
        if (currentUser) {
            const userTickets = getTickets(currentUser);
            const openTickets = getAllTicketsByStatus('open', currentUser.id);
            const inProgressTickets = getAllTicketsByStatus('in_progress', currentUser.id);
            const closedTickets = getAllTicketsByStatus('closed', currentUser.id);
            setTicketsData({
                userTickets,
                openTickets,
                inProgressTickets,
                closedTickets
            });
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
        <div className="min-h-screen bg-gray-50 flex flex-col">
            <Header currentUser={currentUser} handleLogout={handleLogout} />
            <section className="w-full mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-6 sm:py-8 md:py-12 flex flex-col gap-10 sm:gap-12 md:gap-16 lg:gap-20 flex-1">
                <div>
                    <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-2">Dashboard</h1>
                    <p className="text-gray-600 text-sm sm:text-base md:text-lg">
                        Welcome back, <span className="font-semibold">{currentUser.name}</span>! Here's an overview of your tickets.
                    </p>
                </div>

                <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <Statistic title="Total Tickets" number={ticketsData.userTickets.length} description="All tickets in system" />
                    <Statistic title="Open" number={ticketsData.openTickets.length} description="Awaiting action" />
                    <Statistic title="In Progress" number={ticketsData.inProgressTickets.length} description="Currently being worked on" />
                    <Statistic title="Closed" number={ticketsData.closedTickets.length} description="Completed tickets" />

                </section>

                <section className="flex flex-col gap-4 sm:gap-6">
                    <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2 sm:mb-4 md:mb-6">Quick Actions</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <QuickAction title="View All Tickets" description="Browse and manage all your tickets in one place" link="/tickets" />
                        <QuickAction title="Create New Ticket" description="Submit a new ticket to track your task" link="/tickets/new" />
                    </div>
                </section>
            </section>
            <Footer />
        </div>
    )
}