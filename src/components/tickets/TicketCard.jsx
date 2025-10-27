import { Link } from "react-router-dom";

export default function TicketCard({ticket}) {
    const truncateText = (text, maxLength = 100) => {
        if (text.length <= maxLength) return text;
        return text.substring(0, maxLength) + '...';
    };

    const getStatusColor = (status) => {
        switch(status?.toLowerCase()) {
            case 'open': return 'bg-blue-100 text-blue-800';
            case 'in-progress': return 'bg-yellow-100 text-yellow-800';
            case 'resolved': return 'bg-green-100 text-green-800';
            default: return 'bg-gray-100 text-gray-800';
        }
    };

    const getPriorityColor = (priority) => {
        switch(priority?.toLowerCase()) {
            case 'high': return 'bg-red-100 text-red-800';
            case 'medium': return 'bg-orange-100 text-orange-800';
            case 'low': return 'bg-green-100 text-green-800';
            default: return 'bg-gray-100 text-gray-800';
        }
    };

    return (
        <div className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200 p-4 sm:p-5 md:p-6 flex flex-col gap-3 sm:gap-4">
            <div className="flex items-start justify-between gap-2 sm:gap-3">
                <h3 className="text-base sm:text-lg font-semibold text-gray-800 line-clamp-2 flex-1">{ticket.title}</h3>
                <Link 
                    to={`/ticket/${ticket.id}`} 
                    className="flex-shrink-0 w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center rounded-full bg-blue-500 hover:bg-blue-600 text-white transition-colors duration-200"
                >
                    <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </Link>
            </div>

            <p className="text-xs sm:text-sm text-gray-600 line-clamp-3">
                {truncateText(ticket.description, 120)}
            </p>

            <div className="flex items-center gap-1.5 sm:gap-2 flex-wrap">
                <span className={`px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-xs font-medium ${getStatusColor(ticket.status)}`}>
                    {ticket.status}
                </span>
                <span className={`px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-xs font-medium ${getPriorityColor(ticket.priority)}`}>
                    {ticket.priority}
                </span>
            </div>

            <div className="pt-2 sm:pt-3 border-t border-gray-100">
                <p className="text-xs text-gray-500 truncate">ID: {ticket.id}</p>
            </div>
        </div>
    )
}