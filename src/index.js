import {DatePicker} from './datePicker/DatePicker';
import {utils} from './utils';

export const {getFormattedDate, getToday} = new utils({isGregorian: true});
export default DatePicker;
