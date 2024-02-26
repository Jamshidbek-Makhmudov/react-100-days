import { produce } from "immer";


let book = { title: "Harry Potter" };

function publish(book) {
  return produce(book, draftBook => {
    draftBook.isPublished = true;
  });
}

let updated = publish(book);

console.log(book);
console.log(updated);
/**
 * produce is a function that take 2 parameters
  produce(initial state, mutation ni amalga oshiradigan function )
  2- parametrda function beriladi va function parametr qabul qilib bu parametr togridan torgi initila stateni copy sini ozida jamlaydi
 */