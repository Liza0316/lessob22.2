let year = 1900;
const endYear = 2100;
while (year <= endYear) {
    if (year % 4 === 0) {
        if (year % 100 === 0) {
            if (year % 400 === 0) {
                console.log(year + " є високосним роком");
            } else {
                console.log(year + " не є високосним роком");
            }
        } else {
            console.log(year + " є високосним роком");
        }
    } else {
        console.log(year + " не є високосним роком");
    }
    year++;
}
console.log(year)