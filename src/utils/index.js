const truncateText = (text, maxLength = 100) => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + '...';
};

const getStatusColor = (status) => {
    const normalizedStatus = status?.toLowerCase().replace(/[_\s-]/g, '_');
    switch (normalizedStatus) {
        case 'open': return 'bg-green-100 text-green-800';
        case 'in_progress': return 'bg-yellow-100 text-yellow-800';
        case 'closed': return 'bg-gray-100 text-gray-800';
        default: return 'bg-gray-100 text-gray-800';
    }
};

const getPriorityColor = (priority) => {
    const normalizedPriority = priority?.toLowerCase().replace(/[_\s-]/g, '_');
    switch (normalizedPriority) {
        case 'high': return 'bg-red-100 text-red-800';
        case 'medium': return 'bg-orange-100 text-orange-800';
        case 'low': return 'bg-green-100 text-green-800';
        default: return 'bg-gray-100 text-gray-800';
    }
};

const formatStatus = (status) => {
    if (!status) return '';
    return status
        .split('_')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        .join(' ');
};

export { truncateText, getStatusColor, getPriorityColor, formatStatus };
