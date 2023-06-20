import { dateTimeFormatter } from './useDateTimeFormatter';
import { numberFormatter } from './useNumberFormatter';

export const useFormatter = () => {
  return {
    useDateTimeFormatter: dateTimeFormatter,
    useNumberFormatter: numberFormatter
  };
};