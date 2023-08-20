import {isLeapYear} from '@writetome51/is-leap-year';


export class GetNumDaysInMonth {

   private static __dayCountsForEachMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
   private static __checkedYear = 0;


   static go({
      month, // 1 - 12
      year
   }): number {
      // If month 1 above or below range limit, year must be incremented or decremented.
      if (month === 13) {
         ++year;
         month = 1;
      } else if (month === 0) {
         --year;
         month = 12;
      } else if (month === 2) this.__checkIfLeapYear(year);

      return this.__dayCountsForEachMonth[month - 1];
   }


   private static __checkIfLeapYear(year: number) {
      if (year === this.__checkedYear) return;

      if (isLeapYear(year)) this.__dayCountsForEachMonth[1] = 29;
      else this.__dayCountsForEachMonth[1] = 28;

      this.__checkedYear = year;
   }

}
