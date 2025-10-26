import { createContext, useContext, useState, useEffect } from 'react';
import { v4 as uuid } from 'uuid';

const AuthContext = createContext();

const DEMO_USER = {
  email: 'demo@test.com',
  password: 'password123',
  name: 'Demo User'
};

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedUsers = localStorage.getItem('Tickify_users');
    const storedCurrentUser = localStorage.getItem('Tickify_current_user');

    if (storedUsers) {
      setUsers(JSON.parse(storedUsers));
    }
    if (storedCurrentUser) {
      setCurrentUser(JSON.parse(storedCurrentUser));
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    if (users.length > 0) {
      localStorage.setItem('Tickify_users', JSON.stringify(users));
    }
  }, [users]);

  useEffect(() => {
    if (currentUser) {
      localStorage.setItem('Tickify_current_user', JSON.stringify(currentUser));
    } else {
      localStorage.removeItem('Tickify_current_user');
    }
  }, [currentUser]);

  const signup = (email, password, name) => {
    const userExists = users.some(user => user.email === email);

    if (userExists) {
      throw new Error('User with this email already exists');
    }

    const newUser = {
      id: uuid(),
      email,
      password,
      name,
      createdAt: new Date().toISOString(),
    }

    setUsers(prev => [...prev, newUser]);

    const userWithoutPassword = { ...newUser };
    delete userWithoutPassword.password;
    setCurrentUser(userWithoutPassword);

    return userWithoutPassword;
  }

  const login = async (email, password) => {
    await new Promise(resolve => setTimeout(resolve, 500));
    if (email === DEMO_USER.email && password === DEMO_USER.password) {
      const demoUserData = {
        id: 'demo',
        email: DEMO_USER.email,
        name: DEMO_USER.name,
        isDemo: true
      };
      setCurrentUser(demoUserData);
      return demoUserData;
    }

    const user = users.find(u => u.email === email && u.password === password);

    if (!user) {
      throw new Error('No user found with this email or password');
    }

    const userWithoutPassword = { ...user };
    delete userWithoutPassword.password;
    setCurrentUser(userWithoutPassword);

    return userWithoutPassword;
  }

  const logout = () => {
    setCurrentUser(null);
    localStorage.removeItem('Tickify_current_user');
  }

  const value = {
    currentUser,
    signup,
    login,
    logout,
    loading,
    isAuthenticated: !!currentUser
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export function useAuthContext() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuthContext must be used within an AuthContextProvider');
  }
  return context;
}
