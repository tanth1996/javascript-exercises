const findTheOldest = function(people) {
    let maxAge = 0;
    let oldest;
    let currentYear = new Date().getFullYear()
    for (person of people) {
        let age = person.yearOfDeath 
        ? person.yearOfDeath - person.yearOfBirth
        : currentYear - person.yearOfBirth
        if (age > maxAge) {
            maxAge = age;
            oldest = person;
        }
    }
    return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
