import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useAuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function Dashboard() {
    const { currentUser, logout, isAuthenticated } = useAuthContext();
    const navigate = useNavigate();

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

    return (
        <div>
            <section>
                {/* open, in progress, closed, total */}
            </section>
            <Link to="/tickets">Tickets</Link>
            <Link to="/new-ticket">New Ticket</Link>
            <button onClick={handleLogout}>Logout</button>
        </div>
    )
}