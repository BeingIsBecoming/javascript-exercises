const leapYears = function(year) {
return ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0);
};

module.exports = leapYears;

// Leap years are years divisible by four
// However, years divisible by 100 are not 
// Unless they are divisible by 400 
