// Code your solution in this file!
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];
const returnFirstTwoDrivers = function (drivers) {
    return [drivers[0], drivers[1]];
}
const returnLastTwoDrivers = (drivers) => [drivers[2], drivers[3]]

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(fareMultiplier){
    return function(x){
        return fareMultiplier * x;
    }
}

const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(drivers,func){
    return func(drivers);
}   