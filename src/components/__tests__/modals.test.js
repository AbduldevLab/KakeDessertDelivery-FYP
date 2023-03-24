import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ClosedModal from '../modals/ClosedModal';
import Custom1Modal from '../modals/Custom1Modal';
import Custom2Modal from '../modals/Custom2Modal';
import CustomModal from '../Modals/CustomModal';
import UnavailableModal from '../Modals/UnavailableModal';

//closed modal
describe('ClosedModal', () => {
  it('renders with a message and a close button', () => {
    const message = 'This is a test message.';
    const closeModal = jest.fn();
    const { getByText } = render(
      <ClosedModal showModal={true} closeModal={closeModal} message={message} />
    );

    expect(getByText('Closed')).toBeInTheDocument();
    expect(getByText(message)).toBeInTheDocument();
    expect(getByText('Close')).toBeInTheDocument();

    fireEvent.click(getByText('Close'));
    expect(closeModal).toHaveBeenCalled();
  });
});

//custom1 modal
describe('Custom1Modal', () => {
    const addToCart = jest.fn();
    const closeModal = jest.fn();
    
    beforeEach(() => {
      addToCart.mockClear();
      closeModal.mockClear();
    });
  
    test('renders modal with correct title', () => {
      render(<Custom1Modal showModal={true} addToCart={addToCart} closeModal={closeModal} />);
      const title = screen.getByText('Select a Hot Drink');
      expect(title).toBeInTheDocument();
    });
  
    test('adds hot drink to cart when submitted with a selection', () => {
      render(<Custom1Modal showModal={true} addToCart={addToCart} closeModal={closeModal} />);
      const select = screen.getByLabelText('Hot Drink:');
      const addBtn = screen.getByText('Add');
      
      fireEvent.change(select, { target: { value: 'Latte' } });
      fireEvent.click(addBtn);
      
      expect(addToCart).toHaveBeenCalledWith({ drink: 'Latte' });
      expect(closeModal).toHaveBeenCalled();
    });
  
    test('does not add hot drink to cart or close modal when submitted without a selection', () => {
      render(<Custom1Modal showModal={true} addToCart={addToCart} closeModal={closeModal} />);
      const addBtn = screen.getByText('Add');
      
      fireEvent.click(addBtn);
      
      expect(addToCart).not.toHaveBeenCalled();
      expect(closeModal).not.toHaveBeenCalled();
    });
  
    test('displays error message when submitted without a selection', () => {
      render(<Custom1Modal showModal={true} addToCart={addToCart} closeModal={closeModal} />);
      const addBtn = screen.getByText('Add');
      
      fireEvent.click(addBtn);
      const errorMessage = screen.getByText('Please select an option!');
      expect(errorMessage).toBeInTheDocument();
    });
  });

  //custom2 modal
  describe('Custom2Modal', () => {
    const addToCart = jest.fn();
    const closeModal = jest.fn();
  
    beforeEach(() => {
      addToCart.mockClear();
      closeModal.mockClear();
    });
  
    it('renders the modal with the correct title', () => {
      render(<Custom2Modal showModal={true} closeModal={closeModal} addToCart={addToCart} />);
      expect(screen.getByText('Select a Cold Drink')).toBeInTheDocument();
    });
  
    it('disables the add button when no drink is selected', () => {
      render(<Custom2Modal showModal={true} closeModal={closeModal} addToCart={addToCart} />);
      const addBtn = screen.getByText('Add');
      expect(addBtn).toBeEnabled();
      fireEvent.click(addBtn);
      expect(addBtn).toBeDisabled();
    });
  
    it('enables the add button when a drink is selected', () => {
      render(<Custom2Modal showModal={true} closeModal={closeModal} addToCart={addToCart} />);
      const drinkSelect = screen.getByLabelText('Cold Drink:');
      const addButton = screen.getByText('Add');
      fireEvent.change(drinkSelect, { target: { value: 'coke' } });
      expect(addButton).toBeEnabled();
    });
  
    it('shows an error message when no drink is selected and the form is submitted', () => {
      render(<Custom2Modal showModal={true} closeModal={closeModal} addToCart={addToCart} />);
      const submitButton = screen.getByText('Add');
      fireEvent.click(submitButton);
      expect(screen.getByText('Please select a drink!')).toBeInTheDocument();
    });
  
    it('calls the addToCart and closeModal functions when a drink is selected and the form is submitted', () => {
      render(<Custom2Modal showModal={true} closeModal={closeModal} addToCart={addToCart} />);
      const drinkSelect = screen.getByLabelText('Cold Drink:');
      const submitButton = screen.getByText('Add');
      fireEvent.change(drinkSelect, { target: { value: 'coke' } });
      fireEvent.click(submitButton);
      expect(addToCart).toHaveBeenCalledTimes(1);
      expect(addToCart).toHaveBeenCalledWith({ drink: 'coke' });
      expect(closeModal).toHaveBeenCalledTimes(1);
    });
  
    it('calls the closeModal function when the cancel button is clicked', () => {
      render(<Custom2Modal showModal={true} closeModal={closeModal} addToCart={addToCart} />);
      const cancelButton = screen.getByText('Cancel');
      fireEvent.click(cancelButton);
      expect(closeModal).toHaveBeenCalledTimes(1);
    });
  });

//Custom modal
describe('CustomModal', () => {
  const props = {
    showModal: true,
    closeModal: jest.fn(),
    addToCart: jest.fn(),
  };

  it('should render the component without errors', () => {
    const { getByText } = render(<CustomModal {...props} />);
    expect(getByText('Select Toppings and Sauces')).toBeInTheDocument();
  });

  it('should not allow the user to submit without selecting a topping and sauce', () => {
    const { getByText, getByTestId } = render(<CustomModal {...props} />);
    const submitButton = getByTestId('submit-button');
    fireEvent.click(submitButton);
    expect(getByText('Please select a Topping!')).toBeInTheDocument();
    expect(getByText('Please select a Sauce!')).toBeInTheDocument();
  });

  it('should allow the user to select a topping and sauce', () => {
    const { getByTestId } = render(<CustomModal {...props} />);    
    const toppingsSelect = getByTestId('toppings');
    const saucesSelect = getByTestId('sauces');
    const submitButton = getByTestId('submit-button');
    const closeButton = getByTestId('close-button');

    fireEvent.change(toppingsSelect, { target: { value: 'Kinder' } });
    expect(toppingsSelect.value).toBe('Kinder');

    fireEvent.change(saucesSelect, { target: { value: 'Kinder' } });
    expect(saucesSelect.value).toBe('Kinder');

    fireEvent.click(submitButton);
    //expect(props.addToCart).toHaveBeenCalledWith({ Selection, toppings: 'Kinder', sauces: 'Kinder' });
    fireEvent.click(closeButton);
    expect(props.closeModal).toHaveBeenCalled();

  });
});

//Unavailable modal
describe("UnavailableModal", () => {
  const message = "Sorry, this item is currently unavailable.";

  it("should render the modal with the correct message", () => {
    const { getByText } = render(
      <UnavailableModal showModal={true} closeModal={() => {}} message={message} />
    );

    expect(getByText("Item Unavailable")).toBeInTheDocument();
    expect(getByText(message)).toBeInTheDocument();
    expect(getByText("Close")).toBeInTheDocument();
  });

  it("should call the closeModal function when the Close button is clicked", () => {
    const closeModalMock = jest.fn();
    const { getByText } = render(
      <UnavailableModal showModal={true} closeModal={closeModalMock} message={message} />
    );

    fireEvent.click(getByText("Close"));

    expect(closeModalMock).toHaveBeenCalled();
  });
});