import React from 'react';
import {fireEvent, render, waitFor} from '@testing-library/react-native';
import AddToCart from 'features/MobileStore/pages/ItemDetail/AddToCart';
import {plus} from 'assets/images';

describe('AddToCart component', () => {
  it('renders', () => {
    expect(render(<AddToCart onPressAdd={jest.fn} />)).toBeTruthy();
  });

  it('increments when pressing the plus button', async () => {
    const {UNSAFE_getAllByProps, getByDisplayValue} = render(
      <AddToCart onPressAdd={jest.fn} />,
    );

    const props = {
      image: plus,
    };

    const buttons = UNSAFE_getAllByProps(props);

    const [_, plusButton] = buttons;

    fireEvent.press(plusButton); // 2

    fireEvent.press(plusButton); // 3

    await waitFor(() => {
      expect(getByDisplayValue('3')).toBeTruthy();
    });
  });

  it('decrements when pressing the minus button', async () => {
    const {UNSAFE_getAllByProps, getByDisplayValue} = render(
      <AddToCart onPressAdd={jest.fn} />,
    );

    const props = {
      image: plus,
    };

    const buttons = UNSAFE_getAllByProps(props);

    const [minusButton, plusButton] = buttons;

    fireEvent.press(plusButton); // 2

    fireEvent.press(plusButton); // 3

    fireEvent.press(minusButton); // 2

    await waitFor(() => {
      expect(getByDisplayValue('2')).toBeTruthy();
    });
  });

  it('maintains minimum 1 value', async () => {
    const {UNSAFE_getAllByProps, getByDisplayValue} = render(
      <AddToCart onPressAdd={jest.fn} />,
    );

    const props = {
      image: plus,
    };

    const buttons = UNSAFE_getAllByProps(props);

    const [minusButton] = buttons;

    fireEvent.press(minusButton); // 1

    fireEvent.press(minusButton); // 1

    fireEvent.press(minusButton); // 1

    await waitFor(() => {
      expect(getByDisplayValue('1')).toBeTruthy();
    });
  });

  it('calls onPressAdd function from props', async () => {
    const onPressAdd = jest.fn();

    const {getByText} = render(<AddToCart onPressAdd={onPressAdd} />);

    const addtoCartBtn = getByText('ADD TO CART');

    fireEvent.press(addtoCartBtn);

    expect(onPressAdd).toHaveBeenCalledWith(1);
  });
});
