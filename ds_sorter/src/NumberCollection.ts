import {Sorter} from "./Sorter";

export class NumberCollection extends Sorter {
    constructor(public data: number[]) {
        super();
    }

    compare(leftIndex: number, rightIndex: number): boolean {
        return this.data[leftIndex] > this.data[rightIndex];
    }

    // this is a getter

    get length() : number {
        return this.data.length;
    }

    swap(leftIndex: number, rightIndex: number): void {
        const temp = this.data[leftIndex];
        this.data[leftIndex] = this.data[rightIndex];
        this.data[rightIndex] = temp;
    }
}