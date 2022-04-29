import { useMemo } from 'react';
import { stringCapitalize } from '@ricardojrmcom/string-capitalize';

/**
 * Capitalizes the first character of a given string. Option to capitalize all words.
 */
export const useStringCapitalize = (str: string, allWords?: boolean): string =>
  useMemo(() => stringCapitalize(str, allWords), [str, allWords]);
