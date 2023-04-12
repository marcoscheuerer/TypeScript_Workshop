var sports = ["Golf", "Cricket", "Tennis", "Swimming"];
for (var i = 0; i < sports.length; i++) {
    console.log(sports[i]);
}
console.log();
// Simplified For-Loop (Foreach-Loop)
for (var _i = 0, sports_1 = sports; _i < sports_1.length; _i++) {
    var tmpSport = sports_1[_i];
    if (tmpSport == "Cricket") {
        console.log(tmpSport + " << My Favourite");
    }
    else {
        console.log(tmpSport);
    }
}
console.log();
// Growable Array (push(), pop())
sports.push("Baseball");
sports.push("Futbol");
for (var _a = 0, sports_2 = sports; _a < sports_2.length; _a++) {
    var tmpSport = sports_2[_a];
    console.log(tmpSport);
}
console.log();
console.log("Removed item from Array: " + sports.pop());
console.log("Removed item from Array: " + sports.pop());
for (var _b = 0, sports_3 = sports; _b < sports_3.length; _b++) {
    var tmpSport = sports_3[_b];
    console.log(tmpSport);
}
