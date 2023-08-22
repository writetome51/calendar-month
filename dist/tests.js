import { CalendarMonth } from "./index.js";
import { getTodaysDate } from "./get-todays-date.js";
const todaysDate = getTodaysDate();
// test 1: Instantiation without parameters should set instance to current month and year,
// and weekBeginsOn should be 0:
let cm = new CalendarMonth();
if (cm.data.month === todaysDate.month &&
    cm.data.year === todaysDate.year &&
    cm.data.weekBeginsOn === 0) {
    console.log(`test 1 passed`);
}
else
    console.log(`test 1 FAILED`);
// test 2: Instantiation with empty object should have same result as passing no argument:
cm = new CalendarMonth({});
if (cm.data.month === todaysDate.month &&
    cm.data.year === todaysDate.year &&
    cm.data.weekBeginsOn === 0) {
    console.log(`test 2 passed`);
}
else
    console.log(`test 2 FAILED`);
