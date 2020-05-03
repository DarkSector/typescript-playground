import {Sorter} from "./Sorter";
import {NumberCollection} from "./NumberCollection";

const numbersCollection = new NumberCollection([10, 15, -5, 0]);

const sorter = new Sorter(numbersCollection);
sorter.sort();
console.log(numbersCollection.data);