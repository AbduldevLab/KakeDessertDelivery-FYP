// import React from 'react';
// import { render } from '@testing-library/react';
// import Layout from '../Layout/Layout';

// jest.mock('react-redux');
// jest.mock('react-router-dom');

// describe('Layout', () => {
//     test('renders Header component if current route is not an admin route', () => {
//         const mockLocation = { pathname: '/home' };
//         useLocation.mockReturnValue(mockLocation);
//         useSelector.mockReturnValue({ cartIsVisible: false });
//         const { getByTestId } = render(<Layout />);
//         expect(getByTestId('header')).toBeInTheDocument();
//       });

//   test('renders AdminHeader component if current route is an admin route', () => {
//     const useLocationMock = jest.fn().mockReturnValue({ pathname: '/admin/dashboard' });
//     const useSelectorMock = jest.fn().mockReturnValue({ cartIsVisible: false });
//     const { getByTestId } = render(<Layout useLocation={useLocationMock} useSelector={useSelectorMock} />);
//     expect(getByTestId('admin-header')).toBeInTheDocument();
//   });

//   test('renders Carts component if showCart is true', () => {
//     const useLocationMock = jest.fn().mockReturnValue({ pathname: '/home' });
//     const useSelectorMock = jest.fn().mockReturnValue({ cartIsVisible: true });
//     const { getByTestId } = render(<Layout useLocation={useLocationMock} useSelector={useSelectorMock} />);
//     expect(getByTestId('carts')).toBeInTheDocument();
//   });

//   test('renders Routes component', () => {
//     const useLocationMock = jest.fn().mockReturnValue({ pathname: '/home' });
//     const useSelectorMock = jest.fn().mockReturnValue({ cartIsVisible: false });
//     const { getByTestId } = render(<Layout useLocation={useLocationMock} useSelector={useSelectorMock} />);
//     expect(getByTestId('routes')).toBeInTheDocument();
//   });

//   test('renders Footer component if current route is not an admin route', () => {
//     const useLocationMock = jest.fn().mockReturnValue({ pathname: '/home' });
//     const useSelectorMock = jest.fn().mockReturnValue({ cartIsVisible: false });
//     const { getByTestId } = render(<Layout useLocation={useLocationMock} useSelector={useSelectorMock} />);
//     expect(getByTestId('footer')).toBeInTheDocument();
//   });

//   test('renders AdminSidebar component if current route is an admin route', () => {
//     const useLocationMock = jest.fn().mockReturnValue({ pathname: '/admin/dashboard' });
//     const useSelectorMock = jest.fn().mockReturnValue({ cartIsVisible: false });
//     const { getByTestId } = render(<Layout useLocation={useLocationMock} useSelector={useSelectorMock} />);
//     expect(getByTestId('admin-sidebar')).toBeInTheDocument();
//   });

//   test('renders NotFound component if current route is invalid', () => {
//     const useLocationMock = jest.fn().mockReturnValue({ pathname: '/invalid-route' });
//     const useSelectorMock = jest.fn().mockReturnValue({ cartIsVisible: false });
//     const { getByTestId } = render(<Layout useLocation={useLocationMock} useSelector={useSelectorMock} />);
//     expect(getByTestId('not-found')).toBeInTheDocument();
//   });
// });
