import { useLocalization } from '../../localization';
import { dateTimeFormatter } from '../../localization/formatters/useDateTimeFormatter';
import { numberFormatter } from '../../localization/formatters/useNumberFormatter';

export function DebugFormatters(props: { show: boolean }) {
  const { currentLocale } = useLocalization();
  const dateTimeFormatterUse: any = (dateStyle = 'long', timeStyle = '') => {
    return dateTimeFormatter(currentLocale).dateTime(dateStyle, timeStyle);
  };
  const dayNames = () => {
    return dateTimeFormatter(currentLocale)
      .dayNames()
      .map(o => o.name)
      .join(', ');
  };
  const monthNames = () => {
    return dateTimeFormatter(currentLocale)
      .monthNames()
      .map(o => o.name)
      .join(', ');
  };

  const wholeNumberFormatter = () => {
    return numberFormatter(currentLocale).whole();
  };
  const decimalNumberFormatter = () => {
    return numberFormatter(currentLocale).decimal();
  };
  const currencyNumberFormatter = (currency = 'USD') => {
    return numberFormatter(currentLocale).currency(currency);
  };
  const percentNumberFormatter = () => {
    return numberFormatter(currentLocale).percent();
  };

  if (props.show) {
    return (
      <div>
        <h3>Debugging formatters:</h3>
        <div>Whole: { wholeNumberFormatter().format(123456789.321654) }</div>
        <div>Decimal: { decimalNumberFormatter().format(123456789.321654) }</div>
        <div>percent: { percentNumberFormatter().format(1254.987654) }</div>
        <div>currency (USD): { currencyNumberFormatter().format(123456789.321654) }</div>
        <div>currency (CAD): { currencyNumberFormatter('CAD').format(123456789.321654) }</div>
        <div>currency (EUR): { currencyNumberFormatter('EUR').format(123456789.321654) }</div>
        <div>currency (CNY): { currencyNumberFormatter('CNY').format(123456789.321654) }</div>
        <div>currency (JPY): { currencyNumberFormatter('JPY').format(123456789.321654) }</div>
        <div>currency (INR): { currencyNumberFormatter('INR').format(123456789.321654) }</div>
        <div>currency (CHF): { currencyNumberFormatter('CHF').format(123456789.321654) }</div>
        <div>date-time (default): { dateTimeFormatterUse().format(new Date()) }</div>
        <div>date-time (full): { dateTimeFormatterUse('full').format(new Date()) }</div>
        <div>date-time (full + long time): { dateTimeFormatterUse('full', 'long').format(new Date()) }</div>
        <div>day names: { dayNames() }</div>
        <div>month names: { monthNames() }</div>
      </div>
    );
  } else {
    return null;
  }
}
