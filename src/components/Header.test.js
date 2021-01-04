import { render, screen } from '@testing-library/react';
import {Header} from '../components/Header';

test('check h3 --I am a--', () => {
  render(<Header />);
  const linkElement = screen.getByText(/I am a/i);
  expect(linkElement).toBeInTheDocument();
});

test('check link --Home--', () => {
    render(<Header />);
    const linkElement = screen.getByText(/Home/i);
    expect(linkElement).toBeInTheDocument();
  });
