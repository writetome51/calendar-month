import {CalendarMonth} from "./index";

const cm = new CalendarMonth();
console.log('current month:')
console.log(cm);
console.log(cm.data.weeks);
console.log('--------------');

cm.set({weekBeginsOn: 6})
console.log('current month:')
console.log(cm);
console.log(cm.data.weeks);
console.log('--------------');

cm.set({month: cm.data.month - 1})
console.log('previous month:')
console.log(cm);
console.log(cm.data.weeks);
console.log('--------------');

cm.set();
console.log('previous month:')
console.log(cm);
console.log(cm.data.weeks);
console.log('--------------');

//reset to current date:
cm.set({...(new CalendarMonth()).data})
console.log('current month');
console.log(cm);

cm.set({month: cm.data.month - 1})
console.log('previous month:')
console.log(cm);
console.log(cm.data.weeks);
console.log('--------------');

cm.set({month: cm.data.month - 1})
console.log('previous month:')
console.log(cm);
console.log(cm.data.weeks);
console.log('--------------');

cm.set({month: cm.data.month - 1})
console.log('previous month:')
console.log(cm);
console.log(cm.data.weeks);
console.log('--------------');

cm.set({month: cm.data.month - 1})
console.log('previous month:')
console.log(cm);
console.log(cm.data.weeks);
console.log('--------------');

cm.set({month: cm.data.month - 1})
console.log('previous month:')
console.log(cm);
console.log(cm.data.weeks);
console.log('--------------');

cm.set({month: cm.data.month - 1})
console.log('previous month:')
console.log(cm);
console.log(cm.data.weeks);
console.log('--------------');

