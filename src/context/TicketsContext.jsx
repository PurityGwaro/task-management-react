import { createContext, useContext, useState, useEffect } from 'react';
import { v4 as uuid } from 'uuid';
import { useAuthContext } from './AuthContext';

const TicketsContext = createContext();

export const TicketsContextProvider = ({ children }) => {
  const { currentUser } = useAuthContext();
  const createTicket = (ticketData) => {
    if (!currentUser) {
      throw new Error('You must be logged in to create a ticket');
    }

    const newTicket = {
      id: uuid(),
      ...ticketData,
      userId: currentUser.id,
      status: ticketData.status || 'open',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    }

    const tickets = JSON.parse(localStorage.getItem('tickets')) || [];
    localStorage.setItem('tickets', JSON.stringify([...tickets, newTicket]));

    return newTicket;
  }

  const getTickets = (currentUser) => {
    const tickets = JSON.parse(localStorage.getItem('tickets')) || [];
    return tickets.filter(ticket => ticket.userId === currentUser.id);
  }

  const updateTicket = (ticketId, updatedData) => {
    const tickets = JSON.parse(localStorage.getItem('tickets')) || [];
    const updatedTickets = tickets.map(ticket =>
      ticket.id === ticketId ? { ...ticket, ...updatedData } : ticket
    );
    localStorage.setItem('tickets', JSON.stringify(updatedTickets));
    return updatedTickets.find(ticket => ticket.id === ticketId);
  };

  const deleteTicket = (ticketId) => {
    const tickets = JSON.parse(localStorage.getItem('tickets')) || [];
    const updatedTickets = tickets.filter(ticket => ticket.id !== ticketId);
    localStorage.setItem('tickets', JSON.stringify(updatedTickets));
    return updatedTickets;
  };

  const getTicketById = (ticketId) => {
    const tickets = JSON.parse(localStorage.getItem('tickets')) || [];
    return tickets.find(ticket => ticket.id === ticketId);
  };

  const getAllTicketsByStatus = (status, userId) => {
    const tickets = JSON.parse(localStorage.getItem('tickets')) || [];
    return tickets.filter(ticket => ticket.status === status && ticket.userId === userId);
  };

  return (
    <TicketsContext.Provider value={{ createTicket, getTickets, updateTicket, deleteTicket, getTicketById, getAllTicketsByStatus }}>
      {children}
    </TicketsContext.Provider>
  )
}

export function useTicketsContext() {
  const context = useContext(TicketsContext);
  if (!context) {
    throw new Error('useTicketsContext must be used within a TicketsContextProvider');
  }
  return context;
}