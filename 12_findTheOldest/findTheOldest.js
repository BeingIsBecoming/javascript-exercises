const findTheOldest = function(people) {
    const currentYear = new Date().getFullYear();
    return people.sort((a, b) => {
        a.yearOfDeath ??= currentYear;
        b.yearOfDeath ??= currentYear;
        const ageA = a.yearOfDeath - a.yearOfBirth;
        const ageB = b.yearOfDeath - b.yearOfBirth;
        return ageA > ageB ? -1 : 1;
    })[0];
};

// Do not edit below this line
module.exports = findTheOldest;