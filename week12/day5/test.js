function calculateDaysBetweenDates(begin, end) {
    var start = new Date(begin);
    var end = new Date(end);
    var millisecondsPerDay = 1000 * 60 * 60 * 24;
    return Math.ceil((end - start) / millisecondsPerDay);
}