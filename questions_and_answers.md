<div align="center">
  <img height="60" src="https://edurev.gumlet.io/AllImages/original/ApplicationImages/CourseImages/944e5d47-8c55-4a89-91e5-22ab5f2798fc_CI.png">
  <h1>MCQ TEST</h1>
</div>

###### 1. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let greeting;
greetign = {};
console.log(greetign);
```

- A: `{}`
- B: `ReferenceError: greetign is not defined`
- C: `undefined`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: A

<i> greeting, but there is a typo when assigning an empty object to greetign. Despite the typo, JavaScript will implicitly create a global variable named greetign and assign an empty object to it. As a result, when you  </i>


</p>
</details>

###### 2. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sum(a, b) {
  return a + b;
}

sum(1, "2");
```

- A: `NaN`
- B: `TypeError`
- C: `"12"`
- D: `3`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: C

<i> When you add two numbers together in a function, and one of the numbers is a string, the number of characters in that string is the total number of characters in the resulting string. So, if you have "12" as a string, the result would be the string "12". </i>

</p>
</details>

###### 3. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
const food = ["🍕", "🍫", "🥑", "🍔"];
const info = { favoriteFood: food[0] };

info.favoriteFood = "🍝";

console.log(food);
```

- A: `['🍕', '🍫', '🥑', '🍔']`
- B: `['🍝', '🍫', '🥑', '🍔']`
- C: `['🍝', '🍕', '🍫', '🥑', '🍔']`
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: A

<i> food is an array containing info is an object with a property favoriteFood that is initially set to food[0], which is the first element of the food array, i.e his change does not affect the food array in any way. The food array remains unchanged So, the correct answer is A, </i>

</p>
</details>

###### 4. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sayHi(name) {
  return `Hi there, ${name}`;
}

console.log(sayHi());
```

- A: `Hi there,`
- B: `Hi there, undefined`
- C: `Hi there, null`
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: B 

<i> the code, the sayHi function expects an argument name. When you call sayHi() providing an argument, the name parameter remains undefined. As a result, the template string includes the text "Hi there," followed by the value of the name parameter, which is undefined in this case, resulting in "Hi there, undefined."</i>

</p>
</details>

###### 5. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let count = 0;
const nums = [0, 1, 2, 3];

nums.forEach((num) => {
  if (num) count += 1;
});

console.log(count);
```

- A: 1
- B: 2
- C: 3
- D: 4

<details><summary><b>Answer</b></summary>
<p>

#### Answer: B

<i>The code defines an array nums containing four numbers [0, 1, 2, 3]. It then uses the forEach method to iterate over each element in the array. For each element , it checks if num is a truthy value (since 0 is considered falsy in JavaScript, it will not increment the count in that case). The numbers 1, 2, and 3 are all truthy values, so the count variable is incremented for each of these values.</i>

</p>
</details>
