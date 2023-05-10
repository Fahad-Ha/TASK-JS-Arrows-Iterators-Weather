/*************************************
 * logger(array)
 *
 * - Accepts an array
 * - Logs every element of the array
 ************************************/
const logger = function (array) {
     array.forEach(item => console.log(item)); 
};
logger(["test", "test2", "test3"]);
/*************************************
 * toCelsius(temperatures)
 *
 * - Accepts an array of temperatures
 *   in degrees Fahrenheit
 * - Returns an array of temperatures
 *   in degrees Celsius
 *
 * The conversion is:
 *   C = (F - 32) * (5/9)
 ************************************/
const toCelsius = function(temperatures) {
    let tempsArray = [];
        tempsArray = temperatures.map((temps) => {
        return ((temps - 32) * (5/9));
    }) 
    return tempsArray;
};
console.log(toCelsius([0, 45, 65]));

/**************************************
 * hottestDays(temperatures, threshhold)
 *
 * - Accepts an array of temperatures
 * - Accepts a threshhold temperature
 * - Returns an array of temperatures
 *   that exceed the threshhold 
 ***************************************/

//  [1, 2, [ '40', '60', '70' ], 3 ]
const hottestDays = function(temperatures, threshhold) {
    // let tempsThresArray; 
    // tempsThresArray = temperatures.map((item) => {
     
    //     if (item > threshhold) {
    //         return item;
     
    const result = temperatures.filter(item => item > threshhold)        
            
        // } else {
        //     return tempsThresArray;
        // }


    return result;

}
console.log(hottestDays([40, 60, 25, 70], 30));
/******************************************
 * logHottestDays(temperatures, threshhold)
 *
 * - Accepts an array of temperatures
 *   IN DEGREES FAHRENHEINT
 * - Accepts a threshhold temperature
 *   IN DEGREES FAHRENHEINT
 * - Logs temperatures that exceed the
 *   threshhold to the console
 *   IN DEGREES CELSIUS
 *
 * hint: you can combine
 *       all previous functions
 *******************************************/
const logHottestDays = function (temperatures, threshhold) {
    const res = hottestDays(temperatures, threshhold)
    const temps = toCelsius(res);
    logger(temps);
};

/* Uncomment the following lines to test your code... */

logger([1, 2, 3, 4, 5, 6, 7]);
console.log(toCelsius([212, 122])); // should be: [100, 50];
console.log(hottestDays([1, 2, 3, 4, 5, 6, 7, 8, 13, 156, 1765], 5)); // should be : [6, 7, 8, 13, 156, 1765]
logHottestDays([140, 68, 212, 45, 149, 122, 19], 80); // should log "60", "100", "65", and "50"

module.exports = { logger, toCelsius, hottestDays, logHottestDays };
