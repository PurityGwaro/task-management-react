# Tickify - Ticket Management System

A modern, responsive ticket management web application built with React.

## Tech Stack

- **React** - UI framework
- **React Router** - Navigation and routing
- **React Hook Form** - Form validation
- **React Context API** - State management
- **Tailwind CSS** - Styling
- **React Toastify** - Toast notifications
- **Vite** - Build tool

## Setup & Installation

```bash
npm install

npm run dev

npm run build
```

## Test Credentials

Use any email and password to create an account. Authentication is simulated using localStorage.

## Features

- **Landing Page** - Hero section with wavy SVG background and decorative elements
- **Authentication** - Login/Signup with form validation
- **Dashboard** - Overview statistics (Total, Open, In Progress, Closed tickets)
- **Ticket Management** - Full CRUD operations with real-time validation
- **Responsive Design** - Mobile, tablet, and desktop optimized
- **Protected Routes** - Session-based authorization

## Project Structure

```
src/
├── components/       # Reusable UI components
├── context/          # React Context (Auth, Tickets)
├── pages/            # Page components
├── utils/            # Utility functions
└── App.jsx           # Main app component
```

## Status Values

- `open` - Green badge
- `in_progress` - Yellow badge
- `closed` - Gray badge

## Accessibility

- Semantic HTML elements
- Keyboard navigation support
- Sufficient color contrast
- Focus states on interactive elements

## State & Session Management

**State Management:**
- `AuthContext` - Manages user authentication state
- `TicketsContext` - Manages ticket data and CRUD operations

**Session Storage:**
- Users: `Tickify_users` (localStorage)
- Current User: `Tickify_current_user` (localStorage)
- Tickets: `tickets` (localStorage)

Logout clears the session and redirects to the landing page.
