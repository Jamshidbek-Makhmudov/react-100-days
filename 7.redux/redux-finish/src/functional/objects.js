const person = {
  name: "John",
  address: {
    country: "USA",
    city: "San Francisco"
  }
};
const updated = {
  ...person,
  address: {
    ...person.address,
    city: "New York"
  },
  name: "Bob"
};
console.log(person);
/** spread operatori shalow yuzaki copy qiladi nested bolganlarni qilmaydi personda ham updated ham adress propertylarni bor va ular memoryda 1ta joyda saqlanadi shuning uchun ularni 1tasini ozgartirsa refernec orqali ikkinchi ham ozgarib ketai shuning uchun ularni deeep copy qilish kerak, lekin bunaqa deep copy qilsak objectlar nestled bolishi kopygan sari codelarimiz hma complex bolib ketaveradi, shuning uchun update qilish  uchun bazi kutbxonlar bor masalan immer shularni ishlatish yaxshi */