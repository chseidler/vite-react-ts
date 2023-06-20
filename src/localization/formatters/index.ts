import { useDateTimeFormatter } from './useDateTimeFormatter';
import { useNumberFormatter } from './useNumberFormatter';

export const useFormatter = () => {
  return {
    useDateTimeFormatter,
    useNumberFormatter
  };
};