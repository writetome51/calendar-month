import {CalendarMonth} from "./index";
import {getTodaysDate} from "./get-todays-date";

const todaysDate = getTodaysDate();
// test 1: Instantiation without parameters should set instance to current month and year,
// and weekBeginsOn should be 0:
let cm = new CalendarMonth();
if (cm.data.month === todaysDate.month &&
    cm.data.year === todaysDate.year &&
    cm.data.weekBeginsOn === 0) {
    console.log(`test 1 passed`);
} else
    console.log(`test 1 FAILED`);

// test 2: Instantiation with empty object should have same result as passing no argument:
cm = new CalendarMonth({});
if (cm.data.month === todaysDate.month &&
    cm.data.year === todaysDate.year &&
    cm.data.weekBeginsOn === 0) {
    console.log(`test 2 passed`);
} else
    console.log(`test 2 FAILED`);

// test 3: calling .set() without parameters should not make any change on .data:
cm.set();
if (cm.data.month === todaysDate.month &&
    cm.data.year === todaysDate.year &&
    cm.data.weekBeginsOn === 0) {
    console.log(`test 3 passed`)
} else console.log(`test 3 FAILED`);

// test 4: calling .set() with an empty object as argument should not make any change on .data:
cm.set({});
if (cm.data.month === todaysDate.month &&
    cm.data.year === todaysDate.year &&
    cm.data.weekBeginsOn === 0) {
    console.log(`test 4 passed`)
} else console.log(`test 4 FAILED`);

// test 5: instantiation with parameters should set .data to expected values:
cm = new CalendarMonth({
    month: 1, year: 2020, weekBeginsOn: 1
});
if (cm.data.month === 1 &&
    cm.data.year === 2020 &&
    cm.data.weekBeginsOn === 1) {
    console.log(`test 5 passed`);
} else
    console.log(`test 5 FAILED`);

// test 6: instantiation with some, but not all parameters, should set .data to expected values:
cm = new CalendarMonth({
    month: 1
});
if (cm.data.month === 1 &&
    // year should be set to default (the current year)
    cm.data.year === todaysDate.year &&
    // weekBeginsOn should be set to default (0, Sunday)
    cm.data.weekBeginsOn === 0) {
    console.log(`test 6 passed`);
} else
    console.log(`test 6 FAILED`);

cm = new CalendarMonth({
    year: 2020
});
// month should be set to default (the current month)
if (cm.data.month === todaysDate.month &&
    cm.data.year === 2020 &&
    // weekBeginsOn should be set to default (0, Sunday)
    cm.data.weekBeginsOn === 0) {
    console.log(`test 6A passed`);
} else
    console.log(`test 6A FAILED`);

cm = new CalendarMonth({
    weekBeginsOn: 6
});
// month should be set to default (the current month)
if (cm.data.month === todaysDate.month &&
    // year should be set to default (the current year)
    cm.data.year === todaysDate.year &&
    cm.data.weekBeginsOn === 6) {
    console.log(`test 6B passed`);
} else
    console.log(`test 6B FAILED`);
