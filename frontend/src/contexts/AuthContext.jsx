import React, { createContext, useContext, useState, useEffect } from 'react';
import { account, ID } from '../config/appwrite';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Simple allowlist for senior access (edit this array to control who is a senior)
  const seniorEmails = [
    // Add or change authorized senior emails here
    'senior@edvora.com',
    'senior1@edvora.com',
    'senior2@edvora.com',
    'senior3@edvora.com',
    'senior4@edvora.com',
    'senior5@edvora.com',
    'senior6@edvora.com',
    'senior7@edvora.com',
    'senior8@edvora.com'
  ];

  const seniorEmailsLower = seniorEmails.map((e) => e.toLowerCase());

  useEffect(() => {
    // Auto-login: Check for existing session on app load
    checkExistingSession();
  }, []);

  const checkExistingSession = async () => {
    try {
      setLoading(true);
      // Check if there's an existing session
      const userData = await account.get();
      if (userData) {
        setUser(userData);
        console.log('Auto-login successful:', userData.email);
      }
    } catch (error) {
      // No existing session or session expired
      console.log('No existing session found');
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  const login = async (email, password) => {
    try {
      setLoading(true);
      await account.createEmailPasswordSession(email, password);
      const userData = await account.get();
      setUser(userData);
      return { success: true };
    } catch (error) {
      return { success: false, error: error.message };
    } finally {
      setLoading(false);
    }
  };

  const signup = async (name, email, password) => {
    try {
      setLoading(true);
      await account.create(ID.unique(), email, password, name);
      await account.createEmailPasswordSession(email, password);
      const userData = await account.get();
      setUser(userData);
      return { success: true };
    } catch (error) {
      return { success: false, error: error.message };
    } finally {
      setLoading(false);
    }
  };

  const logout = async () => {
    try {
      setLoading(true);
      await account.deleteSession('current');
      setUser(null);
      console.log('Logout successful');
    } catch (error) {
      console.error('Logout error:', error);
    } finally {
      setLoading(false);
    }
  };

  const value = {
    user,
    loading,
    login,
    signup,
    logout,
    isAuthenticated: !!user,
    checkExistingSession,
    isSeniorUser: !!(
      user &&
      user.email &&
      seniorEmailsLower.includes(user.email.toLowerCase())
    )
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};
