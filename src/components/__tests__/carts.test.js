import { addItem, removeItem } from '../../store/shopping-cart/cartSlice';

describe('Cart Slice', () => {
  const initialCartItems = [
    {
      id: 1,
      title: 'Pizza',
      selection: { toppings: ['cheese'], sauces: ['tomato'], drink: null },
      image01: 'pizza.jpg',
      price: 10,
      quantity: 2,
      totalPrice: 20
    },
    {
      id: 2,
      title: 'Burger',
      selection: null,
      image01: 'burger.jpg',
      price: 5,
      quantity: 1,
      totalPrice: 5
    }
  ];

  const initialState = {
    cartItems: initialCartItems,
    totalQuantity: 3,
    totalAmount: 25
  };

  it('should add a new item to the cart', () => {
    const newItem = {
      id: 3,
      title: 'Drink',
      selection: null,
      image01: 'drink.jpg',
      price: 2,
      quantity: 1,
      totalPrice: 2
    };

    const expectedState = {
      cartItems: [
        ...initialCartItems,
        newItem
      ],
      totalQuantity: 4,
      totalAmount: 27
    };

    const action = addItem(newItem);

    const newState = cartSlice(initialState, action);

    expect(newState).toEqual(expectedState);
  });

  it('should update an existing item in the cart', () => {
    const newItem = {
      id: 1,
      title: 'Pizza',
      selection: { toppings: ['cheese', 'pepperoni'], sauces: ['tomato'], drink: null },
      image01: 'pizza.jpg',
      price: 10,
      quantity: 3,
      totalPrice: 30
    };

    const expectedState = {
      cartItems: [
        newItem,
        {
          id: 2,
          title: 'Burger',
          selection: null,
          image01: 'burger.jpg',
          price: 5,
          quantity: 1,
          totalPrice: 5
        }
      ],
      totalQuantity: 4,
      totalAmount: 35
    };

    const action = addItem(newItem);

    const newState = cartSlice(initialState, action);

    expect(newState).toEqual(expectedState);
  });

  it('should remove an item from the cart', () => {
    const itemToRemove = {
      id: 1,
      title: 'Pizza',
      selection: { toppings: ['cheese'], sauces: ['tomato'], drink: null },
      image01: 'pizza.jpg',
      price: 10,
      quantity: 2,
      totalPrice: 20
    };

    const expectedState = {
      cartItems: [
        {
          id: 2,
          title: 'Burger',
          selection: null,
          image01: 'burger.jpg',
          price: 5,
          quantity: 1,
          totalPrice: 5
        }
      ],
      totalQuantity: 1,
      totalAmount: 5
    };

    const action = removeItem(itemToRemove);

    const newState = cartSlice(initialState, action);

    expect(newState).toEqual(expectedState);
  });
});
