# r.js
A class for JavaScript to generate a lot of random stuff..

See working Demo here: https://bennetgallein.github.io/projects/r.js/index.html

## Functions
There will be comming more functions soon, but for a fun project that was everything that came into my mind.
___
#### rjs.randomInt(min, max)
Generates a random Integer between the maximum and minimum number given.
```javascript
console.log(rjs.randomInt(0, 20)); // 12
```
___
#### rjs.randomDec(min, max, decimals)
Generates a random Decimal Number between the maximum and minimum number given with the amount of decimals given.
```javascript
console.log(rjs.randomDec(0, 50, 4); // 3,1415
```
___
#### rjs.randomList(list)
Picks a random Entry of the List.
```javascript
console.log(rjs.randomList(['rndm1', 'rndm2', 'rndm3'])); // rndm3
```
___
#### rjs.randomPercent(decimals)
Generates a random number between 0 and 100 with the amount of decimals given.
```javascript
console.log(rjs.randomPercent(2); // 56,21
```
___
#### rjs.randomString(lenght)
Generates a random String out of all Letters and Number with the lenght given. Pretty good for ID's.
```javascript
console.log(rjs.randomString(5); // a5DR7
```
___
#### rjs.randomBoolean()
Generates wether true or false.
```javascript
console.log(rjs.randomBoolean); // true
```
___
#### rjs.randomUpLetter()
Generates a random Uppercased letter.
```javascript
console.log(rjs.randomUpLetter()); // A
```
___
#### rjs.randomLowLetter()
Generate a random Lowcased letter.
```javascript
console.log(rjs.randomLowLetter()); // h
```
___
There will follow more, but I'm not very creative so give me some time :)
