const findTheOldest = function(people) {
    let oldest, age = 0, oldestAge = 0;
    const d = new Date();
    for (let i = 0; i < people.length; i++) {
        if (!people[i].yearOfDeath) {
            age = d.getFullYear() - people[i].yearOfBirth;
        }else {
            age = people[i].yearOfDeath - people[i].yearOfBirth;
        }

        if (age > oldestAge) {
            oldestAge = age;
            oldest = people[i];
        }
    }
    return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
