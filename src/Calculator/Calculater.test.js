import { render, screen, fireEvent } from '@testing-library/react';
import Calculator from './Calculator';

test('performs calculation 1 + 2 = 3', () => {
  render(<Calculator />);
  fireEvent.click(screen.getByText('1'))
  fireEvent.click(screen.getByText('+'))
  fireEvent.click(screen.getByText('2'))
  fireEvent.click(screen.getByText('='))
  expect(screen.getByDisplayValue('3')).toBeVisible()
});
