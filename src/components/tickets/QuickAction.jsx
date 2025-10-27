import { Link } from "react-router-dom";

export default function QuickAction({title, description, link}) {
    return (
        <Link
            to={link}
            className="group bg-white p-8 rounded-xl shadow-md border border-gray-200 hover:shadow-xl hover:border-blue-300 transition-all duration-300"
        >
            <div className="flex items-center justify-between">
                <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition">
                        {title}
                    </h3>
                    <p className="text-gray-600">
                        {description}
                    </p>
                </div>
                <svg className="w-8 h-8 text-blue-600 transform group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
            </div>
        </Link>
    )
}