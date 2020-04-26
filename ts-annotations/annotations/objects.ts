const profile = {
    name: 'alex',
    age: 20,
    coords: {
        lat: 0,
        lng: 15
    },
    // es2015
    setAge(age: number): void {
        this.age = age;
    }
};

// for destructure have to define it for every one of the elements
const {age} : {age : number } = profile;
const { coords: {lat, lng}} : {coords: {lat: number, lng: number}} = profile;

