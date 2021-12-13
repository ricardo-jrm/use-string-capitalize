import { renderHook } from '@testing-library/react-hooks';
import { useStringCapitalize } from '.';

describe('test useStringCapitalize hook', () => {
  it('should capitalize a string', () => {
    const { result } = renderHook(() =>
      useStringCapitalize('lorem ipsum dolor sit amet'),
    );
    expect(result.current).toBe('Lorem ipsum dolor sit amet');
  });
  it('should capitalize all words in a string', () => {
    const { result } = renderHook(() =>
      useStringCapitalize('lorem ipsum dolor sit amet', true),
    );
    expect(result.current).toBe('Lorem Ipsum Dolor Sit Amet');
  });
});
