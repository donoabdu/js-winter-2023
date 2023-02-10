
console.log('types of data');

console.log('string boolean number');

//F->C
//T(°C) = (T(°F) - 32) / 1.8
let fTemp=70;

let cTemp=(fTemp-32) /1.8
console.log(`\n${fTemp}f is equals to${cTemp}c`);

   //F->K
   //T(K) = (T(°F) + 459.67)*5/9
   let kTemp=(fTemp+459.67)*5/9;
   console.log(`\n${fTemp}f is equal to{kTemp}K`);

   // C-F
   // T(F) = T(C) * 9/5 + 32
   let ftemp= cTemp*9/5+32
   console.log(`\n${cTemp}c is equals to${fTemp}f`);

   // C-K
   // let temp=21;
   // T(F) = T(K) *9/5 - 459.67
   let kTepm=cTemp*9/5-459.67
   console.log(`\n${cTemp}c is equals to${kTemp}k`);

   // K-C
   // T(C) = T(K) - 273.15
   cTemp=kTemp-273.15
   console.log(`\n${kTemp}k is equals to{cTemp}c`);

let num1 = 6;
console.log(num1); //6
console.log(num1++); //6
console.log(num1); //7
console.log(++num1); //8
console.log(num1); //8
console.log(num1--); //8
console.log(num1); //7


let sentence= 'hello dear,how are you Doing? Today is Friday';
let sentenceUppercase=sentence.toUpperCase();
console.log('\nsentence ${sentence}');
console.log('sentenceUppercase {sentenceUppercase}');
 
 
 let sentance1 = "New York City";
 let sentance2 = "new York City";
 console.log(`\nsentance1 -> ${sentance1}`);
 console.log(`sentance2 ->${sentance2}`) ;
 let isEqual=sentance1.localeCompare(sentance2);
 console.log(`\nis sentance1 equal to sentance2 ->${isEqual}`);

 sentance1= "New York City";
 sentance2= "new york City";

  /**
   * find if two string are equal to each other(ignoring cases)
   */
 let sentance1Lowercase = sentance1.toLowerCase();
 let senance2Lowercase = sentance2.toLowerCase();
 let isEqual1= sentance1Lowercase.localeCompare('sentance2LowerCase');
 console.log(`is sentance1 equal to sentance2 (ignoring cases) -> ${isEqual1}`);
 
