const findTheOldest = function(people) {
    people.sort((a, b) => {
        if (a.yearOfDeath == undefined) {
            yearOfDeathA = 2024;
        } else {
            yearOfDeathA = a.yearOfDeath;
        }
        const ageOfA = yearOfDeathA - a.yearOfBirth;

        if (b.yearOfDeath == undefined) {
            yearOfDeathB = 2024;
        } else {
            yearOfDeathB = b.yearOfDeath;
        }
        const ageOfB = yearOfDeathB - b.yearOfBirth;

        if (ageOfA > ageOfB) return -1;
        if (ageOfA < ageOfB) return 1;
        return 0;
    })
    console.log(people);
    return people[0];

    // Alternative solution:
    // return people.sort((a, b) => {
    //     const lastPerson = (a.yearOfDeath || new Date().getFullYear()) - a.yearOfBirth;
    //     const nextPerson = (b.yearOfDeath || new Date().getFullYear()) - b.yearOfBirth;
    //     return lastPerson > nextPerson ? -1 : 1;
    // })[0];
};

// Do not edit below this line
module.exports = findTheOldest;
