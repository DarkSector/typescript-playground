export class NumberCollection {
    constructor(public data: number[]) {
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