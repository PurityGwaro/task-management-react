import { useState } from "react";

export default function Tickets() {
    const [tickets, setTickets] = useState([{ id: 1, title: "Ticket 1", description: "Description 1", status: "Open" }, { id: 2, title: "Ticket 2", description: "Description 2", status: "Closed" }, { id: 3, title: "Ticket 3", description: "Description 3", status: "Open" }, { id: 4, title: "Ticket 4", description: "Description 4", status: "Closed" }, { id: 5, title: "Ticket 5", description: "Description 5", status: "Open" }, { id: 6, title: "Ticket 6", description: "Description 6", status: "Closed" }, { id: 7, title: "Ticket 7", description: "Description 7", status: "Open" }, { id: 8, title: "Ticket 8", description: "Description 8", status: "Closed" }, { id: 9, title: "Ticket 9", description: "Description 9", status: "Open" }, { id: 10, title: "Ticket 10", description: "Description 10", status: "Closed" }]);
    return (
        <div>
            <h1>Tickets</h1>

            <div>
                {
                    tickets.map(ticket => (
                        <div key={ticket.id}>
                            <h1>{ticket.title}</h1>
                            <p>{ticket.description}</p>
                            <p>{ticket.status}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}