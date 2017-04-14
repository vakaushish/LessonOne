/**
 * Created by vakaushish on 4/14/17.
 */
var uniqueRandomArray = require('unique-random-array')
var starWarsNames  = require('./starwars-names.json');
module.exports = {
    all:starWarsNames,
    random:uniqueRandomArray(starWarsNames)
}
