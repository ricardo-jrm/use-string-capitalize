import React from 'react';
import { render, screen } from '@testing-library/react';
import { StringCapitalize } from './component';

describe('test component', () => {
  it('renders component', () => {
    render(<StringCapitalize str="lorem ipsum dolor sit amet" />);
    const myEl = screen.getByTestId('str-cap');
    expect(myEl).toBeInTheDocument();
  });
  it('capitalizes first char', () => {
    render(<StringCapitalize str="lorem ipsum dolor sit amet" />);
    const myEl = screen.getByTestId('str-cap');
    expect(myEl.textContent).toBe('Lorem ipsum dolor sit amet');
  });
  it('capitalizes all words', () => {
    render(<StringCapitalize str="lorem ipsum dolor sit amet" allWords />);
    const myEl = screen.getByTestId('str-cap');
    expect(myEl.textContent).toBe('Lorem Ipsum Dolor Sit Amet');
  });
});
