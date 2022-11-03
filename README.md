# Software Engineering Challenge
## Problem Statement:
John Smith has a 4 year old son named Bob. Bob has a marble collection and has named all of the marbles. Each marble has a weight of 1 oz. or less and is one of the following colors: Red, Orange, Yellow, Green, Blue, Indigo, Violet (ROYGBIV). 

John would like to line up the marbles in ROYGBIV order for Bob. John wants to keep all of the marbles that weigh at least 0.5 oz and have palindromes for a name, discarding the rest.

# Extra Information:
Write a solution that takes in a collection of Marbles and returns the filtered & ordered list of marbles back. The palindrome should ignore capitalization and punctuation so Bob o’Bob is a palindrome. Please include comments describing the time and space complexity of your algorithm. Additionally, please include comments that describe what your deployment strategy would be to host this workload in (any) cloud platform in a way that is accessible, repeatable, & modular (example: as a serverless function or REST service… etc).  Discuss any deployment technologies & automation strategies you would wrap around the solution.  What would you do if Bob has millions of marbles to process?  To submit, you can use https://ideone.com/ or send us a git link.

```js
// example subset of Bob’s marbles
marbles = [
	{ id: 1, color: "blue", name: "Bob", weight: 0.5 },
	{ id: 2, color: "red", name: "John Smith", weight: 0.25 },
	{ id: 3, color: "violet", name: "Bob O'Bob", weight: 0.5 },
	{ id: 4, color: "indigo", name: "Bob Dad-Bob", weight: 0.75 },
	{ id: 5, color: "yellow", name: "John", weight: 0.5 },
	{ id: 6, color: "orange", name: "Bob", weight: 0.25 },
	{ id: 7, color: "blue", name: "Smith", weight: 0.5 },
	{ id: 8, color: "blue", name: "Bob", weight: 0.25 },
	{ id: 9, color: "green", name: "Bobb Ob", weight: 0.75 },
	{ id: 10, color: "blue", name: "Bob", weight: 0.5 }
];
```