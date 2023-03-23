
import '../../setupTests.js'
import {render, cleanup} from '@testing-library/react';
import '@testing-library/jest-dom'

// Importing pages
import Home from "../../pages/Home";
import Menu from "../../pages/Menu";
import Cart from "../../pages/Cart";
import Checkout from "../../pages/Checkout";
import Contact from "../../pages/Contact";
import Register from "../../pages/Register";
import Faqs from "../../pages/Faqs";
import Tc from '../../pages/T&C';
import App from "../../pages/App";
import AdminDashSignIn from "../../pages/AdminDash/Signin";
import AdminDashForgot from "../../pages/AdminDash/ForgotPassword";
import AdminDash from "../../pages/AdminDash/Dashboard";
import AdminOrders from "../../pages/AdminDash/Orders";
import AdminUsers from "../../pages/AdminDash/Users";
import Inventory from "../../pages/AdminDash/Inventory";

afterEach(() => {
    cleanup();
});


describe('Home component', () => {
  it('renders without crashing', () => {
    render(<Home />);
  });
});

describe('Menu component', () => {
  it('renders without crashing', () => {
    render(<Menu />);
  });
});

describe('Cart component', () => {
  it('renders without crashing', () => {
    render(<Cart />);
  });
});

describe('Checkout component', () => {
  it('renders without crashing', () => {
    render(<Checkout />);
  });
});

describe('Contact component', () => {
  it('renders without crashing', () => {
    render(<Contact />);
  });
});

describe('Register component', () => {
  it('renders without crashing', () => {
    render(<Register />);
  });
});

describe('Faqs component', () => {
  it('renders without crashing', () => {
    render(<Faqs />);
  });
});

describe('Tc component', () => {
  it('renders without crashing', () => {
    render(<Tc />);
  });
});

describe('App component', () => {
  it('renders without crashing', () => {
    render(<App />);
  });
});

describe('AdminDashSignIn component', () => {
  it('renders without crashing', () => {
    render(<AdminDashSignIn />);
  });
});

describe('AdminDashForgot component', () => {
  it('renders without crashing', () => {
    render(<AdminDashForgot />);
  });
});

describe('AdminDash component', () => {
  it('renders without crashing', () => {
    render(<AdminDash />);
  });
});

describe('AdminOrders component', () => {
  it('renders without crashing', () => {
    render(<AdminOrders />);
  });
});

describe('AdminUsers component', () => {
  it('renders without crashing', () => {
    render(<AdminUsers />);
  });
});

describe('Inventory component', () => {
  it('renders without crashing', () => {
    render(<Inventory />);
  });
});