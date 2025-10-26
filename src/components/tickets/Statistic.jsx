export default function Statistic({ticket}) {
    return (
        <div>
            <h1>{ticket.title}</h1>
            <p>{ticket.description}</p>
            <p>{ticket.status}</p>
        </div>
    )
}
    