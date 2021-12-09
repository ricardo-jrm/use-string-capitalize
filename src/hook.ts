import { useMemo } from 'react';
import { stringCapitalize } from '@ricardo-jrm/string-capitalize';

/**
 * Capitalizes the first character of a given string. Option to capitalize all words.
 */
export const useStringCapitalize = (str: string, allWords?: boolean) =>
  useMemo(() => stringCapitalize(str, allWords), [str, allWords]);
