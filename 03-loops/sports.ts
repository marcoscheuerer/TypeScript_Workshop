let sports: string[] = ["Golf", "Cricket", "Tennis", "Swimming"];

for (let i = 0; i < sports.length; i++) {
    console.log(sports[i]);
}

console.log();

// Simplified For-Loop (Foreach-Loop)
for (let tmpSport of sports) {
    if (tmpSport == "Cricket") {
        console.log(tmpSport + " << My Favourite");
    } else {
        console.log(tmpSport);
    }
}

console.log();

// Growable Array (push(), pop())
sports.push("Baseball");
sports.push("Futbol");

for (let tmpSport of sports) {
    console.log(tmpSport);
}

console.log();

console.log("Removed item from Array: " + sports.pop());
console.log("Removed item from Array: " + sports.pop());

for (let tmpSport of sports) {
    console.log(tmpSport);
}
