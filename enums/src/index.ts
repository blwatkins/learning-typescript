// Enum Notes

/* NOTES:
** - enum: a list of related constants
*/

const enum ShirtSize {
    ExtraSmall = 0,
    Small = 1,
    Medium = 2,
    Large = 3,
    ExtraLarge = 4,
    XXL = 5
}

let size: ShirtSize = ShirtSize.Small;
console.log(`size = ${size}`);

let sizeValue: number = size; // valid. will NOT cause a compiler error.
console.log(`sizeValue = ${sizeValue}`);

// let otherSizeValue: string = size; // will cause a compiler error

if (sizeValue === size) { // true
    console.log('sizeValue and size are equal');
} else {
    console.log('sizeValue and size are NOT equal');
}

const enum Color {
    Red = 0,
    Green = 1,
    Blue = 2
}

let color: Color = Color.Green;
console.log(`color = ${color}`);

let colorValue: number = color; // valid. will NOT cause a compiler error.
console.log(`colorValue = ${colorValue}`);

if (colorValue === color) { // true
    console.log('colorValue and color are equal');
} else {
    console.log('colorValue and color are NOT equal');
}

const enum Weather {
    Sunny = 'sunny',
    Cloudy = 'cloudy',
    Raining = 'raining'
}

let today: Weather = Weather.Cloudy;
console.log(`today = ${today}`);

let todayValue: string = today;
console.log(`todayValue = ${todayValue}`);

// let otherTodayValue: number = today; // will cause a compiler error

if (todayValue === today) { // true
    console.log('todayValue and today are equal');
} else {
    console.log('todayValue and today are NOT equal');
}

// let equal: boolean = size === today; // will cause a compiler error
// let equal: boolean = sizeValue === todayValue; // will cause a compiler error

// let equal: boolean = size === color; // will cause a compiler error
let equal: boolean = sizeValue === colorValue; // valid. will NOT cause a compiler error.

if (equal) { // true
    console.log('sizeValue and colorValue are equal');
} else {
    console.log('sizeValue and colorValue are NOT equal');
}
