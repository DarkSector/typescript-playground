class Sorter {
    constructor(public collection: number[] | string) {
    }

    sort(): void {
        const {length} = this.collection;

        // If collection is an array of numbers
        for (let i = 0; i < length; i++) {
            for (let j = 0; j < length -i -1; j++) {
                if (this.collection[j] > this.collection[j+1]) {
                    const temp = this.collection[j];
                    this.collection[j] = this.collection[j+1];
                    this.collection[j+1] = temp;
                }
            }
        }

        // If collection is a string
        // String are immutable in JS
        // Strings have chartCodeAt that is used to compare

    }
}

const sorter = new Sorter([10, 3, -5, 0]);
sorter.sort();
console.log(sorter.collection);