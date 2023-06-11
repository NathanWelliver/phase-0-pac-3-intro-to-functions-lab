function shout(string) {
    return string.toUpperCase();
}

function whisper(string) {
    return string.toLowerCase();
}

function logShout(string) {
    let temp = string.toUpperCase();
    console.log(temp);
}

function logWhisper(string) {
    let temp2 = string.toLowerCase();
    console.log(temp2);
}

function sayHiToHeadphonedRoommate(string) {
    let input = string;
    if (input === input.toLowerCase()) {
        return "I can't hear you!";
    } 
    if (input === input.toUpperCase()) {
        return "YES INDEED!";
    }
    if (input === "Let's have dinner together!") {
        return "I would love to!";
    }
}