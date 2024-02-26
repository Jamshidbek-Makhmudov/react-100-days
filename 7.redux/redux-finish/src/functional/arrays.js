const numbers = [1, 2, 3];

// Adding
const index = numbers.indexOf(2);
const added = [...numbers.slice(0, index), 4, ...numbers.slice(index)];//slice yangi array qaytaradi  
//output is: // 1,4,2,3

// Removing
const removed = numbers.filter(n => n !== 2); //filter return new array

// Updating
const updated = numbers.map(n => (n === 2 ? 20 : n));// bu yerda 20ni ornida object bolsa biz shu objectni copy qilib olishimiz kerak spread opreatori bilan 
console.log(updated);
