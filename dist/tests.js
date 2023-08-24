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
// test 3: calling .set() without parameters should not make any change on .data:
cm.set();
if (cm.data.month === todaysDate.month &&
    cm.data.year === todaysDate.year &&
    cm.data.weekBeginsOn === 0) {
    console.log(`test 3 passed`);
}
else
    console.log(`test 3 FAILED`);
// test 4: calling .set() with an empty object as argument should not make any change on .data:
cm.set({});
if (cm.data.month === todaysDate.month &&
    cm.data.year === todaysDate.year &&
    cm.data.weekBeginsOn === 0) {
    console.log(`test 4 passed`);
}
else
    console.log(`test 4 FAILED`);
// test 5: instantiation with parameters should set .data to expected values:
cm = new CalendarMonth({
    month: 1, year: 2020, weekBeginsOn: 1
});
if (cm.data.month === 1 &&
    cm.data.year === 2020 &&
    cm.data.weekBeginsOn === 1) {
    console.log(`test 5 passed`);
}
else
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
}
else
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
}
else
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
}
else
    console.log(`test 6B FAILED`);
// test 7: calling .set() after instantiation should update expected values in .data:
cm.set({ weekBeginsOn: 0 });
if (cm.data.month === todaysDate.month &&
    cm.data.year === todaysDate.year &&
    cm.data.weekBeginsOn === 0) {
    console.log(`test 7 passed`);
}
else
    console.log(`test 7 FAILED`);
cm.set({ month: 1 });
if (cm.data.month === 1 &&
    cm.data.year === todaysDate.year &&
    cm.data.weekBeginsOn === 0) {
    console.log(`test 7A passed`);
}
else
    console.log(`test 7A FAILED`);
cm.set({ year: 1000 });
if (cm.data.month === 1 &&
    cm.data.year === 1000 &&
    cm.data.weekBeginsOn === 0) {
    console.log(`test 7B passed`);
}
else
    console.log(`test 7B FAILED`);
cm.set({ year: 2000, month: 2, weekBeginsOn: 2 });
if (cm.data.month === 2 &&
    cm.data.year === 2000 &&
    cm.data.weekBeginsOn === 2) {
    console.log(`test 7C passed`);
}
else
    console.log(`test 7C FAILED`);


// Test 8: should adjust month and year if passing month that isn't in range 1 - 12:
cm.set({month: cm.data.month + 12});
if (cm.data.month === 2 &&
      cm.data.year === 2001 &&
      cm.data.weekBeginsOn === 2) {
    console.log(`test 8A passed`);
} else
    console.log(`test 8A FAILED`);

cm.set({month: cm.data.month + 13});
if (cm.data.month === 3 &&
      cm.data.year === 2002 &&
      cm.data.weekBeginsOn === 2) {
    console.log(`test 8B passed`);
} else
    console.log(`test 8B FAILED`);

cm.set({month: cm.data.month + 24});
if (cm.data.month === 3 &&
      cm.data.year === 2004 &&
      cm.data.weekBeginsOn === 2) {
    console.log(`test 8C passed`);
} else
    console.log(`test 8C FAILED`);

cm.set({month: cm.data.month + 25});
if (cm.data.month === 4 &&
      cm.data.year === 2006 &&
      cm.data.weekBeginsOn === 2) {
    console.log(`test 8D passed`);
} else
    console.log(`test 8D FAILED`);

cm.set({month: 0, year: 2007});
if (cm.data.month === 12 &&
      cm.data.year === 2006 &&
      cm.data.weekBeginsOn === 2) {
    console.log(`test 8E passed`);
} else
    console.log(`test 8E FAILED`);

cm.set({month: -1, year: 2007});
if (cm.data.month === 11 &&
      cm.data.year === 2006 &&
      cm.data.weekBeginsOn === 2) {
    console.log(`test 8F passed`);
} else
    console.log(`test 8F FAILED`);

cm.set({month: 0});
if (cm.data.month === 12 &&
      cm.data.year === 2005 &&
      cm.data.weekBeginsOn === 2) {
    console.log(`test 8G passed`);
} else
    console.log(`test 8G FAILED`);

cm.set({month: -1});
if (cm.data.month === 11 &&
      cm.data.year === 2004 &&
      cm.data.weekBeginsOn === 2) {
    console.log(`test 8H passed`);
} else
    console.log(`test 8H FAILED`);

cm.set({month: cm.data.month - 12});
if (cm.data.month === 11 &&
      cm.data.year === 2003 &&
      cm.data.weekBeginsOn === 2) {
    console.log(`test 8I passed`);
} else
    console.log(`test 8I FAILED`);

cm.set({month: cm.data.month - 13});
if (cm.data.month === 10 &&
      cm.data.year === 2002 &&
      cm.data.weekBeginsOn === 2) {
    console.log(`test 8J passed`);
} else
    console.log(`test 8J FAILED`);

cm.set({month: cm.data.month - 24});
if (cm.data.month === 10 &&
      cm.data.year === 2000 &&
      cm.data.weekBeginsOn === 2) {
    console.log(`test 8K passed`);
} else
    console.log(`test 8K FAILED`);

cm.set({month: cm.data.month - 25});
if (cm.data.month === 9 &&
      cm.data.year === 1998 &&
      cm.data.weekBeginsOn === 2) {
    console.log(`test 8L passed`);
} else
    console.log(`test 8L FAILED`);
