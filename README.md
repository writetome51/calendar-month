# CalendarMonth

A Typescript class for generating calendar month data, especially for display

## API
<details>

```ts
export type CalendarMonthSettings = {
    /*****
     Defaults to most recent setting, or if never set, current year
     *****/
    year?: number;

    /*****
     1 - 12. Defaults to most recent setting, or if never set, current month.
     If month is not within 1 - 12, month and year will be adjusted. I.E., if set to 0,
     month will be reset to 12 and year will be reset to previous year.
     *****/
    month?: number;

    /*****
     0 - 6.  Defaults to most recent setting, or if never set, 0 (Sunday)
     *****/
    weekBeginsOn?: number;
};

export type CalendarMonthData = Required<CalendarMonthSettings> & {
    /*****
     * The numbers of each day in the set month, separated into the weeks of the month.
     * Includes for display the days of previous and next months.
     * I.E., This is a February whose first day is a Wednesday (and the week begins on Sunday):
     [
       [29,30,31,1,2,3,4],
       [5,6,7,8,9,10,11],
       [12,13,14,15,16,17,18],
       [19,20,21,22,23,24,25],
       [26,27,28,1,2,3,4]
     ]
     *****/
    weeks: number[][];
};

export declare class CalendarMonth {

    get data(): CalendarMonthData;

    constructor(settings?: CalendarMonthSettings);

    set(settings?: CalendarMonthSettings): void;
}
```
</details>


## Usage Examples
<details>

```ts
// Instantiate without parameters, letting it default to current month and year:
let cm = new CalendarMonth();

// Instantiate with a specified month, letting it default to current year:
cm = new CalendarMonth({month: 1});

// Change to August 2023:
cm.set({month: 8, year: 2023});
console.log(cm.data);
/*****
 {
   year: 2023,
   month: 8,
   weekBeginsOn: 0,
   weeks: [
     [30, 31, 1, 2, 3, 4, 5],
     [6, 7, 8, 9, 10, 11, 12],
     [13, 14, 15, 16, 17, 18, 19],
     [20, 21, 22, 23, 24, 25, 26],
     [27, 28, 29, 30, 31, 1, 2]
   ]
 }
 *****/

// Set the weeks to begin on Monday:
cm.set({weekBeginsOn: 1});
console.log(cm.data.weeks);
/*****
 [
   [31, 1, 2, 3, 4, 5, 6],
   [7, 8, 9, 10, 11, 12, 13],
   [14, 15, 16, 17, 18, 19, 20],
   [21, 22, 23, 24, 25, 26, 27],
   [28, 29, 30, 31, 1, 2, 3]
 ]
 *****/

// Go to the next month:
cm.set({month: cm.data.month + 1});
console.log(cm.data);
/*****
 {
   year: 2023,
   month: 9,
   weekBeginsOn: 1,
   weeks: [
     [28, 29, 30, 31, 1, 2, 3],
     [4, 5, 6, 7, 8, 9, 10],
     [11, 12, 13, 14, 15, 16, 17],
     [18, 19, 20, 21, 22, 23, 24],
     [25, 26, 27, 28, 29, 30, 1]
   ]
 }
 *****/

// Jump forward 4 months:
cm.set({month: cm.data.month + 4});
console.log(cm.data);
/*****
 {
   year: 2024,
   month: 1,
   weekBeginsOn: 1,
   weeks: [
     [1, 2, 3, 4, 5, 6, 7],
     [8, 9, 10, 11, 12, 13, 14],
     [15, 16, 17, 18, 19, 20, 21],
     [22, 23, 24, 25, 26, 27, 28],
     [29, 30, 31, 1, 2, 3, 4]
   ]
 }
 *****/

// Set the weeks to begin on Sunday:
cm.set({weekBeginsOn: 0});
console.log(cm.data.weeks);
/*****
 [
   [31, 1, 2, 3, 4, 5, 6],
   [7, 8, 9, 10, 11, 12, 13],
   [14, 15, 16, 17, 18, 19, 20],
   [21, 22, 23, 24, 25, 26, 27],
   [28, 29, 30, 31, 1, 2, 3]
 ]
 *****/
```
</details>



## Loading

```js
import {CalendarMonth} from '@writetome51/calendar-month';
```
