let dayNumber = prompt("Please enter date number 0-6");
dayNumber = parseInt(dayNumber);

if (dayNumber === 0) {
    console.log('this is day is Sunday');
} else if (dayNumber === 1) {
    console.log('this is day is Monday');
} else if (dayNumber === 2) {
    console.log('this is day is Tuesday');
} else if (dayNumber === 3) {
    console.log('this is day is Wednesday');
} else if (dayNumber === 4) {
    console.log('this is day is Thursday');
} else if (dayNumber === 5) {
    console.log('this is day is Friday');
} else if (dayNumber === 6) {
    console.log('this is day is Saturday');
} else {
    console.log('Invalid day number');
};
