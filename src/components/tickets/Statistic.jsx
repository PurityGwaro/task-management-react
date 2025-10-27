export default function Statistic({title, number, description}) {
    return (
        <div className="bg-white flex flex-col items-center justify-start gap-2 border rounded-xl p-6 border-gray-200 shadow-md hover:shadow-lg transition-shadow">
            <h1 className="text-lg font-semibold text-gray-700">{title}</h1>
            <p className="text-4xl font-bold text-blue-600">{number}</p>
            <p className="text-sm text-gray-500 text-center">{description}</p>
        </div>
    )
}
    