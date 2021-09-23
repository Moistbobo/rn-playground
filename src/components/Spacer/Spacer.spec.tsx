import React from 'react';
import {View} from 'react-native';
import {render} from '@testing-library/react-native';
import Spacer from './index';

describe('Spacer component', () => {
  it('renders', () => {
    expect(render(<Spacer size={8} />)).toBeTruthy();
  });

  it('renders horizontal space', () => {
    const {UNSAFE_getByType} = render(
      <Spacer size={8} orientation="horizontal" />,
    );
    const spacer = UNSAFE_getByType(View);

    expect(spacer).toHaveStyle({width: 8});
  });

  it('renders vertical space', () => {
    const {UNSAFE_getByType} = render(
      <Spacer size={8} orientation="vertical" />,
    );
    const spacer = UNSAFE_getByType(View);

    expect(spacer).toHaveStyle({height: 8});
  });

  it('renders bi-directional space', () => {
    const {UNSAFE_getByType} = render(<Spacer size={8} orientation="both" />);
    const spacer = UNSAFE_getByType(View);

    expect(spacer).toHaveStyle({height: 8, width: 8});
  });
});
