
// type system is just concerned with types you send back
// doesn't care what you do within the function - obvious
const add = (a: number, b: number) : number => {
    return a + b;
}

// type inference doesn't work for function arguments
const subtract = (a: number, b: number) => {
    return a - b; // if we made a mistake but typescript didn't complain
}

// so it's important to add type annotation for reverse types

function divide(a: number, b: number): number {
    return a / b;
}

// works for anonymous functions
const multiply = function(a : number, b: number) : number {
    return a * b;
};

const logger = (message: string): void => {
    console.log(message);
};

// never only when we never ever expect it to actually run
const throwError = (message: string): never => {
    throw new Error(message);
};


const forecast = {
    date: new Date(),
    weather: 'sunny'
};

const logWeather = (forecast: {date: Date, weather: string}) => {
    console.log(forecast.date);
    console.log(forecast.weather);
};

// destructured

const destructedLogWeather = ({date, weather}: {date: Date, weather: string}): void => {
    console.log(date);
    console.log(weather);
}



