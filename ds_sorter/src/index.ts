import {Sorter} from "./Sorter";
import {NumberCollection} from "./NumberCollection";
import {CharactersCollection} from "./CharactersCollection";
import {LinkedList} from "./LinkedList";

// const numbersCollection = new NumberCollection([10, 15, -5, 0]);
//
// const charactersCollection = new CharactersCollection("yaXios");
//
// const sorter = new Sorter(numbersCollection);
// sorter.sort();
// console.log(numbersCollection.data);
//
//
// const stringSorter = new Sorter(charactersCollection);
// stringSorter.sort();
// console.log(stringSorter);

const linkedList = new LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(-3);
linkedList.add(3);


const sorter = new Sorter(linkedList);
sorter.sort();
linkedList.print();