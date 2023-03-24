import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import { useNavigate } from 'react-router-dom';
import Dashboard from '../../pages/AdminDash/Dashboard';
import Inventory from '../../pages/AdminDash/Inventory';
import Orders from '../../pages/AdminDash/Orders';
import Users from '../../pages/AdminDash/Users';

//This tests the authorisation of the admin panel pages

jest.mock('react-router-dom', () => ({
  useNavigate: jest.fn(),
}));

describe('Admin panel authorisation', () => {

//Dashboard page authorisation
  it('should navigate to admin page (sign in page) when user is not authenticated', () => {
    localStorage.removeItem('isAuthenticated');
    const navigate = jest.fn();
    useNavigate.mockReturnValue(navigate);
    render(<Dashboard />);
    expect(navigate).toHaveBeenCalledWith('/admin');
  });

  it('should not navigate to admin page when user is authenticated', () => {
    localStorage.setItem('isAuthenticated', 'true');
    const navigate = jest.fn();
    useNavigate.mockReturnValue(navigate);
    render(<Dashboard />);
    expect(navigate).not.toHaveBeenCalled();
  });

//Inventory page authorisation
it('should navigate to admin page (sign in page) when user is not authenticated', () => {
    localStorage.removeItem('isAuthenticated');
    const navigate = jest.fn();
    useNavigate.mockReturnValue(navigate);
    render(<Inventory />);
    expect(navigate).toHaveBeenCalledWith('/admin');
  });

  it('should not navigate to admin page when user is authenticated', () => {
    localStorage.setItem('isAuthenticated', 'true');
    const navigate = jest.fn();
    useNavigate.mockReturnValue(navigate);
    render(<Inventory />);
    expect(navigate).not.toHaveBeenCalled();
  });

//Orders page authorisation
it('should navigate to admin page (sign in page) when user is not authenticated', () => {
    localStorage.removeItem('isAuthenticated');
    const navigate = jest.fn();
    useNavigate.mockReturnValue(navigate);
    render(<Orders />);
    expect(navigate).toHaveBeenCalledWith('/admin');
  });

  it('should not navigate to admin page when user is authenticated', () => {
    localStorage.setItem('isAuthenticated', 'true');
    const navigate = jest.fn();
    useNavigate.mockReturnValue(navigate);
    render(<Orders />);
    expect(navigate).not.toHaveBeenCalled();
  });

//Users page authorisation
it('should navigate to admin page (sign in page) when user is not authenticated', () => {
    localStorage.removeItem('isAuthenticated');
    const navigate = jest.fn();
    useNavigate.mockReturnValue(navigate);
    render(<Users />);
    expect(navigate).toHaveBeenCalledWith('/admin');
  });

  it('should not navigate to admin page when user is authenticated', () => {
    localStorage.setItem('isAuthenticated', 'true');
    const navigate = jest.fn();
    useNavigate.mockReturnValue(navigate);
    render(<Users />);
    expect(navigate).not.toHaveBeenCalled();
  });
  
});
