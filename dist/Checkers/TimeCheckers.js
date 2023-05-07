"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isAfterToday = exports.CheckIfDateValid = void 0;
// Importing the Moment library to work with dates and times
var moment_1 = require("moment");
/* let moment = require("moment"); */
// This function receives a string representing a date and checks if it is valid
// according to the "YYYY-MM-DD" format. It returns a boolean indicating if the date is valid.
var CheckIfDateValid = function (dateString) {
    // Moment's `parse` method is used to parse the input string into a moment object.
    // The second argument specifies the expected format of the input string.
    // The third argument is set to true to enable strict parsing, which requires all parts of the date to be valid.
    var parsedDate = (0, moment_1.default)(dateString, "YYYY-MM-DD", true);
    // Moment's `isValid` method is used to check if the parsed date is valid.
    // If it is valid, this method returns `true`, otherwise it returns `false`.
    return parsedDate.isValid();
};
exports.CheckIfDateValid = CheckIfDateValid;
// This function receives a string representing a date and checks if it is after today.
// It returns a boolean indicating if the date is after today.
var isAfterToday = function (date) {
    // If the input date is not valid, this function returns `false`.
    if (!(0, exports.CheckIfDateValid)(date)) {
        return false;
    }
    // Moment's `startOf` method is used to set the time to the beginning of the day (i.e. 00:00:00).
    // This is done for both the current date and the input date to ensure that only the date is compared.
    var today = (0, moment_1.default)().startOf("day");
    var inputDate = (0, moment_1.default)(date).startOf("day");
    // Moment's `isAfter` method is used to check if the input date is after today.
    // If it is, this method returns `true`, otherwise it returns `false`.
    return inputDate.isAfter(today);
};
exports.isAfterToday = isAfterToday;
//# sourceMappingURL=TimeCheckers.js.map