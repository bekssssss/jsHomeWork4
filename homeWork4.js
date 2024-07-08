//EXERCISE - 1 // ['lorem', 'ipsum', 'dolor', 'sit'] => [5,5,5,3]

// const words = ['lorem', 'ipsum', 'dolor', 'sit'];
// const lengths = words.map(word => word.length);
// console.log(lengths);


//EXERCISE - 2 // ['lorem', 'ipsum', 'dolor'] => [1,2,3]

// const words = ['lorem', 'ipsum', 'dolor']
// const indexes = words.map((_, index) => index + 1);
// console.log(indexes);


//EXERCISE - 3 // ['lorem', 'ipsum', 'dolor'] => ['Lorem', 'ipsum', 'Dolor']

// let words = ['lorem', 'ipsum', 'dolor'];
// const transformed = words.map((word, index) => {
//     if (index % 2 === 0) {
//         return word.charAt(0).toUpperCase() + word.slice(1);
//     } else {
//         return word;
//     }
// });
// console.log(transformed);


//EXERCISE - 4 // ['lorem', 'ipsum', 'dolor'] => ['LOREM', 'IPSUM', 'DOLOR']

// let words = ['lorem', 'ipsum', 'dolor']
// const uppercasedWords = words.map(word => word.toUpperCase())
// console.log(uppercasedWords)


//EXERCISE - 5 // ['lorem', 'ipsum', 'dolor', 'sit', 'amet'] => 'lorem-ipsum-dolor-sit-amet'

// let words = ['lorem', 'ipsum', 'dolor', 'sit', 'amet']
// const joinString = words.join('-')
// console.log(joinString)


//EXERCISE - 6 // ['lorem', 'ipsum', 'dolor', 'sit', 'amet'] => 'lorem/ipsum/dolor/sit/amet'

// let words = ['lorem', 'ipsum', 'dolor', 'sit', 'amet']
// const joinString = words.join('/')
// console.log(joinString)


//EXERCISE - 7 // ['lorem', 'ipsum', 'dolor', 'sit', 'amet'] => 'lorem ipsum dolor sit amet'

// let words = ['lorem', 'ipsum', 'dolor', 'sit', 'sit', 'amet']
// const joinString = words.join(' ')
// console.log(joinString)


//EXERCISE - 8 // ['lorem', 'ipsum', 'dolor', 'sit', 'amet'] => ['ipsum', 'sit']

// const words = ['lorem', 'ipsum', 'dolor', 'sit', 'amet'];
// const oddIndexedWords = words.filter((word, index) => index % 2 !== 0);
// console.log(oddIndexedWords);


//EXERCISE - 9 // ['lorem', 'ipsum', 'dolor', 'sit', 'amet'] => ['lorem', 'dolor', 'amet']

// const words = ['lorem', 'ipsum', 'dolor', 'sit', 'amet'];
// const oddIndexedWords = words.filter((word, index) => index % 2 !== 1);
// console.log(oddIndexedWords);


//EXERCISE - 10 // ['lorem', 'ipsum', 'dolor', 'sit', 'amet'] => ['lorem', 'ipsum', 'dolor', 'sit', 'amet', 'consectetur', 'adipiscing', 'elit']

// let words1 = ['lorem', 'ipsum', 'dolor', 'sit', 'amet'];
// let words2 = ['consectetur', 'adipiscing', 'elit'];
// const combinedWords = words1.concat(words2);
// const combinedString = combinedWords.join(' ');
// console.log(combinedString);


//EXERCISE - 11 // [123,33,444,'22',55,66,77,88,99] => [123,33,444,55,66,77,88,99]

// let num = [123,33,444,'22',55,66,77,88,99];
// const remove = '22';
// const index = num.indexOf(remove);
// if (index !== 1) {
//     num.splice(index, 1);
// }
// console.log(num);


//EXERCISE - 12 // [123,33,444,'22',55,66,77,88,99] => [123,33,444,55,66,77,88,99,22]

// let num = [123,33,444,'22',55,66,77,88,99];
// const indexToMove = 3;
// if (indexToMove >=0 && indexToMove < num.length) {
//     const numToMove = num.splice(indexToMove,1)[0];
//     num.push(numToMove);
// }
// console.log(num);


//EXERCISE - 13 // ['null', undefined, 0, false, true, ''] => [0, false, true]

// const values = ['null', undefined, 0, false, true, ''];
// const filteredValues = values.filter(value => {
//     return value !== 'null' && value !== undefined && value !== '';
// });
// console.log(filteredValues);


//EXERCISE - 14 // ['null', undefined, 0, false, true, ''] => [true, 'null']

// const values = ['null', undefined, 0, false, true, ''];
// const filteredValues = values.filter(value => {
//     return value !== undefined && value !== '' && value !== 0 && value !== '' && value !== false
// })
// console.log(values);
// console.log(filteredValues);


//EXERCISE - 15  [1123, 'qwe'] => [1123, 'qwe', 1123, 'qwe']

// const lalala = [1123, 'qwe'];
// const duplicatedLalala = lalala.concat(lalala);
//
// console.log(duplicatedLalala);


//EXERCISE - 16 [null, undefined] => [null, undefined, null, undefined]

// const words = [null, undefined]
// const dublicatedWords = words.concat(words)
//
// console.log(dublicatedWords)


//EXERCISE - 17 // 'lorem ipsum dolor sit amet' => ['lorem dolor', 'amet'] => 'lorem dolor amet'

// const inputString = 'lorem ipsum dolor sit amet';
// const words = inputString.split(' ');
// const extractedWords = [words[0], words[2], words[words.length - 1]];
// const resultString = extractedWords.join(' ');
//
// console.log(resultString);


//EXERCISE - 18 Даны два массива: [1, 2, 3] и [4, 5, 6]. Объедините их вместе.

// let num1 = [1,2,3]
// let num2 = [4,5,6]
// const numbers = num1.concat(num2)
// console.log(numbers)


//EXERCISE - 19 Дан массив [1, 2, 3]. Сделайте из него массив [3, 2, 1].

// let num = [1,2,3]
// const reverse = num.reverse()
// console.log(reverse)


//EXERCISE - 20 Дан массив [1, 2, 3]. Добавьте ему в конец элементы 4, 5, 6.

// let num = [1,2,3]
// num.push(4,5,6)
// console.log(num)


//EXERCISE - 21 Дан массив [1, 2, 3]. Добавьте ему в начало элементы 4, 5, 6.

// let num = [1,2,3]
// num.unshift(4,5,6)
// console.log(num)


//EXERCISE - 22 Дан массив ['js', 'css', 'jq']. Выведите в консоли  первый элемент.

// let str = ['js', 'css', 'jq']
// console.log(str[0])


//EXERCISE - 23 Дан массив ['js', 'css', 'jq']. Выведите а консоли последний элемент.

// let str = ['js', 'css', 'jq']
// console.log(str[2])


//EXERCISE - 24 Дан массив [1, 2, 3, 4, 5]. С помощью метода slice запишите в новый элементы [1, 2, 3].

// let num = [1,2,3,4,5]
// let numBers = num.slice(0, 3)
// console.log(numBers)


//EXERCISE - 25 Дан массив [1, 2, 3, 4, 5]. С помощью метода slice запишите в новый элементы [4, 5].

// let num = [1,2,3,4,5]
// const newNum =num.slice(3)
// console.log(newNum)


//EXERCISE - 26 Дан массив [1, 2, 3, 4, 5]. С помощью метода splice преобразуйте массив в [1, 4, 5].

// let num = [1, 2, 3, 4, 5]
// num.splice(1, 2)
// console.log(num)


//EXERCISE - 27 Дан массив [1, 2, 3, 4, 5]. С помощью метода splice запишите в новый массив элементы [2, 3, 4].

// const array = [1, 2, 3, 4, 5];
//
// const extracted = array.splice(1, 3);
//
// console.log(extracted);


//EXERCISE - 28 Дан массив [1, 2, 3, 4, 5]. С помощью метода splice сделайте из него массив [1, 2, 3, 'a', 'b', 'c', 4, 5].

// const array = [1, 2, 3, 4, 5];
//
// array.splice(3, 0, 'a', 'b', 'c');
//
// console.log(array);


//EXERCISE - 29 Дан массив [1, 2, 3, 4, 5]. С помощью метода splice сделайте из него массив [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e'].

// const array = [1, 2, 3, 4, 5];
//
// array.splice(1, 0, 'a', 'b', ) + array.splice(6, 0, 'c') + array.splice(8, 0, 'e')
//
// console.log(array);


//EXERCISE - 30  Заполните массив следующим образом: в первый элемент запишите 'x', во второй 'xx', в третий 'xxx' и так далее.

// const n = 6;
// let array = [];
//
// for (let i = 1; i <= n; i++) {
//     array.push('x'.repeat(i));
// }
//
// console.log(array);


//EXERCISE - 31  Заполните массив следующим образом: в первый элемент запишите '1', во второй '22', в третий '333' и так далее.

// const n = 6
// let array = []
//
// for (let i = 1; i <= n; i++) {
//     array.push(String(i). repeat(i))
// }
// console.log(array)


//EXERCISE - 32  Сделайте функцию arrayFill, которая будет заполнять массив заданными значениями. Первым параметром функция принимает значение, которым заполнять массив, а вторым - сколько элементов должно быть в массиве. Пример: arrayFill('x', 5) сделает массив ['x', 'x', 'x', 'x', 'x']

// function arrayFill(value, length) {
//     let array = [];
//     for (let i = 0; i < length; i++) {
//         array.push(value);
//     }
//     return array;
// }
//
// console.log(arrayFill('x', 5));
// console.log(arrayFill(0, 3));
// console.log(arrayFill('Bek', 2));


//EXERCISE - 33  Дан массив с числами. Узнайте сколько элементов с начала массива надо сложить, чтобы в сумме получилось больше 10-ти.

// const numbers = [2, 4, 1, 3, 6];
// function elementsToSumToTen(array) {
//     let sum = 0;
//     let count = 0;
//
//     for (let i = 0; i < array.length; i++) {
//         sum += array[i];
//         count++;
//         if (sum > 10) {
//             return count;
//         }
//     }
//
//     return count;
// }
//
// console.log(elementsToSumToTen(numbers));


//EXERCISE - 34 Дан массив с числами. Не используя метода reverse переверните его элементы в обратном порядке.

// const numbers = [1, 2, 3, 4, 5];
// function reverseArray(array) {
//     let reversedArray = [];
//     for (let i = array.length - 1; i >= 0; i--) {
//         reversedArray.push(array[i]);
//     }
//     return reversedArray;
// }
//
// console.log(reverseArray(numbers));


//EXERCISE - 35 Дан массив с числами. Найти самое большое число в этом массиве и вывести в консоли.

// const numbers = [3.14, 149.8, 149.9, 149, 148];
// function findMaxNumber(array) {
//     let max = array[0];
//
//     for (let i = 1; i < array.length; i++) {
//         if (array[i] > max) {
//             max = array[i];
//         }
//     }
//     return max;
// }
// console.log(findMaxNumber(numbers));


//EXERCISE - 36 Создайте массив arr с элементами 2, 5, 3, 9. Умножьте первый элемент массива на второй, а третий элемент на четвертый. Результаты сложите, присвойте переменной result. Выведите на экран значение этой переменной.

// let arr = [2, 5, 3, 9];
//
// let result = arr[0] * arr[1] + arr[2] * arr[3];
//
// console.log(result);


//EXERCISE - 38 Дан массив из имен например ['john', 'jane', 'kate', 'peter']. Вывести новый массив в котором каждая первая буква элемента будет с большой буквы.

// let names = ['john', 'jane', 'kate', 'peter'];
//
// let capitalizedNames = names.map(name => {
//     return name.charAt(0).toUpperCase() + name.slice(1);
// });
//
// console.log(capitalizedNames);

