import React from 'react';
import { useStringCapitalize } from '.';

/**
 * Capitalizes the first character of a given string. Option to capitalize all words.
 */
export const StringCapitalize = ({ str, allWords }: StringCapitalizeProps) => (
  <span data-testid="str-cap">{useStringCapitalize(str, allWords)}</span>
);

/**
 * StringCapitalize props
 */
export interface StringCapitalizeProps {
  /**
   * String to transform
   */
  str: string;
  /**
   * Option to transform all words
   */
  allWords?: boolean;
}
