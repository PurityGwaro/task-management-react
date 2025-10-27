export default function TicketForm({ onSubmit, register, errors, isSubmitting, handleSubmit, onCancel, mode = 'create' }) {
    const isEditMode = mode === 'edit';
    
    return (
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6 w-full">
            <div className="flex flex-col gap-2">
                <label htmlFor="title" className="text-sm font-semibold text-gray-700">
                    Title <span className="text-red-500">*</span>
                </label>
                <input
                    type="text"
                    id="title"
                    placeholder="Enter ticket title"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition hover:border-gray-400"
                    {...register('title', { required: 'Title is required' })}
                />
                {errors.title && <p className="text-red-500 text-sm mt-1">{errors.title.message}</p>}
            </div>

            <div className="flex flex-col gap-2">
                <label htmlFor="description" className="text-sm font-semibold text-gray-700">
                    Description <span className="text-red-500">*</span>
                </label>
                <textarea
                    id="description"
                    rows="10"
                    placeholder="Describe the ticket in detail"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition hover:border-gray-400 resize-none"
                    {...register('description', { required: 'Description is required' })}
                ></textarea>
                {errors.description && <p className="text-red-500 text-sm mt-1">{errors.description.message}</p>}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                    <label htmlFor="priority" className="text-sm font-semibold text-gray-700">
                        Priority <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                        <select
                            id="priority"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition hover:border-gray-400 cursor-pointer appearance-none bg-white pr-10"
                            {...register('priority', { required: 'Priority is required' })}
                        >
                            <option value="" disabled selected>Select priority</option>
                            <option value="low">Low</option>
                            <option value="medium">Medium</option>
                            <option value="high">High</option>
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-500">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </div>
                    </div>
                    {errors.priority && <p className="text-red-500 text-sm mt-1">{errors.priority.message}</p>}
                </div>

                <div className="flex flex-col gap-2">
                    <label htmlFor="status" className="text-sm font-semibold text-gray-700">
                        Status <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                        <select
                            id="status"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition hover:border-gray-400 cursor-pointer appearance-none bg-white pr-10"
                            {...register('status', { required: 'Status is required' })}
                        >
                            <option value="" disabled selected>Select status</option>
                            <option value="open">Open</option>
                            <option value="in_progress">In Progress</option>
                            <option value="closed">closed</option>
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-500">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </div>
                    </div>
                    {errors.status && <p className="text-red-500 text-sm mt-1">{errors.status.message}</p>}
                </div>
            </div>

            <div className="flex gap-4 mt-4">
                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold md:py-3 md:px-6 rounded-lg hover:scale-105 shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none cursor-pointer py-2 px-4"
                >
                    {isSubmitting ? (isEditMode ? 'Updating...' : 'Creating...') : (isEditMode ? 'Update Ticket' : 'Create Ticket')}
                </button>
                <button
                    type="button"
                    onClick={onCancel}
                    className="md:py-3 md:px-6 border-2 border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 hover:border-gray-400 transition-colors cursor-pointer py-2 px-4"
                >
                    Cancel
                </button>
            </div>
        </form>
    )
}