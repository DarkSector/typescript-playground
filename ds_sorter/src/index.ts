import {Sorter} from "./Sorter";
import {NumberCollection} from "./NumberCollection";
import {CharactersCollection} from "./CharactersCollection";

const numbersCollection = new NumberCollection([10, 15, -5, 0]);

const charactersCollection = new CharactersCollection("yaXios");

const sorter = new Sorter(numbersCollection);
sorter.sort();
console.log(numbersCollection.data);


const stringSorter = new Sorter(charactersCollection);
stringSorter.sort();
console.log(stringSorter);