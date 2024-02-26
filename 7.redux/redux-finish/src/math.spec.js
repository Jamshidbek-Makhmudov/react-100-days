import { isEven } from "./math";

describe("isEven", () => {
  it("should return true if given an even number", () => {
    // Function under test (SUT) -Systerm Under Test
    const result = isEven(2); //function run qilamzi
    /**pasdagi code result rosdan togrmi yoqmi tekshirish uchun
     */
    expect(result).toEqual(true);
  });

  it("should return false if given an odd number", () => {
    // Function under test (SUT)
    const result = isEven(1);
    expect(result).toEqual(false);
  });
});
/**
 testlar 3ga bolinadi:
    unit tests
    integration tests
    end-to-end-test
     
    unit testlar: tashqi bog'liqliklarsiz test qiliandi ya'ni haqiqiy db ishlatilmaydi moch api ishlatilinadi, va ular juda tez ishlidi
    integration testlar db bilan integratsiay qiliandi shuning ular sekin roq ishlaydi biz ularni kamroq ishlatishimiz kerak masalan comment yozayotganda yoki productionga tayyorlayotganda
    end-to-end-testlar undan ham sekiroq ishlaydi

    unit tests:
    npm i jest @types/jest @babel/core @babel/preset-env babel-jest @babel/plugin-transform-runtime -D
jest bu facebook tomonidan ishlab chiqilgan
jetsni type vscode ishlatish uchun kreak boladi
babel/core esa modern javascript codeni most browserlar chunadigan code ozgartirb beradi
bable/preset-env esa modern javascriptdagi bazi kodlarni qoshimcha plugon ornatmasdan ishlata olishimiz uhcun kerak masaln modern javasciptda import, sprean, default operatorlari bor
bable da esa bular alohida plug inda joylashgan



 */



/**
 test ni run qilsh uchun terminalda 
 jest deb yozish kerak 
  jest --watch  yozsak code mizda qandaydir ozgartirish qilsak jest ozi run boladi auto
  jest --coverage projectimizda coverage papkasini yasab testimiz haqida toliq malumot beradi 

      it function jest keladi va test qilish uchun ishlatamiz
  it function 2ta argument qabul qiladi 1- testni nomi, 2- test function.
       expect jestdan keladi va u kutuvchu function hisoblanadi bizga unga agrument beramiz va shu agrent nma return qaytarishini berib qoyamiz
      
       .toEqual() matcher deyiladi yani taqqoslash masalan katta, kichik, teng, defined, undefined, null, NaN, va boshqa lar

       describe() bu it() functionlarni gruppalash uchun kerak u ham 2ta argument qabul qialdi 1- nomi, 2-  test qilish uchun function

 */