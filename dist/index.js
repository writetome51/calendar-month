import { GetWeeks } from './get-weeks/index.js';
import { getTodaysDate } from './get-todays-date.js';
import { inRange } from '@writetome51/in-range';
import { not } from '@writetome51/not';
import { getRoundedDown } from '@writetome51/get-rounded-up-down';
export class CalendarMonth {
    get data() {
        return Object.freeze(Object.assign({}, this.__data));
    }
    constructor(settings) {
        this.__data = {
            year: undefined,
            month: undefined,
            weekBeginsOn: undefined,
            weeks: undefined
        };
        this.set(settings);
    }
    set(settings = {}) {
        const { year, month, weekBeginsOn } = settings;
        const today = getTodaysDate();
        this.__data.year = year || this.__data.year || today.year;
        this.__data.month = Number.isInteger(month) ?
            month :
            this.__data.month || today.month;
        this.__data.weekBeginsOn = Number.isInteger(weekBeginsOn) ?
            weekBeginsOn :
            this.__data.weekBeginsOn || 1;
        if (not(inRange([1, 7], this.__data.weekBeginsOn))) {
            throw new Error(`'weekBeginsOn' must be integer from 1 to 7`);
        }
        if (not(inRange([1, 12], this.__data.month))) {
            // adjust month and year
            let numYears = getRoundedDown(this.__data.month / 12);
            if (numYears === 0)
                numYears = -1;
            const monthReference = (numYears < 0) ? 12 : 0;
            this.__data.month = monthReference + (this.__data.month % 12);
            this.__data.year += numYears;
        }
        this.__data.weeks = GetWeeks.go(this.__data);
    }
}
