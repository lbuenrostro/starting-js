function add(a, b) {}

function double(x) {}

function multThree(x, y, z) {}

// (int, int, int) -> int
// Returns the total earnings provided the number of A, B, and C class seats sold.
// important information:
//     Class A seats cost $15.
//     Class B seats cost $12.
//     Class C seats cost $9.
function earnings(a, b, c) {}

// return True iff both x and y are true
function both(x, y) {}

// (Int, Bool) -> String
// Returns 'walk' if the user should walk
// and 'drive' if the user should drive to their destination.
// The user should walk if it is nice weather
// and the distance is less than a quarter mile.
function walkOrDrive(miles, isNiceWeather) {}

// Return 'Densely Populated' if the land density is greater than 100,
// otherwise retuurn 'Sparsely Populated'.
function howPopulated(population, landArea) {}

// Int -> String
// Return the appropriate number of stars for the users score.
// 1 stars for scores less than 1000 points
// 2 stars for scores less than 5000 points
// 3 stars for scores less than 8000 points
// 4 stars for scores less than 10000 points
// 5 stars for anything 10000+
function goldStars(points) {}

// (String) -> Int
// Returns the number of points for the corresponding
// scoring action in American football.
// An extra point kick is worth 1 point.
// An extra point conversion is worth 2 points.
// A safety is worth 2 points.
// A field goal is worth 3 points.
// A touchdown is worth 6 points.
function howManyPoints(scoringAction) {}

exports.add = add;
exports.double = double;
exports.multThree = multThree;
exports.both = both;
exports.walkOrDrive = walkOrDrive;
exports.howPopulated = howPopulated;
exports.goldStars = goldStars;
exports.howManyPoints = howManyPoints;
exports.earnings = earnings;
