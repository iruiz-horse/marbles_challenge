/**
 * To Host this code, I’ll go with a AWS Lambda function and a serverless approach in general. To trigger that lambda function 
 * I would use an API Gateway endpoint or maybe an Event Bridge schedule to automate the process.
 * 
 * To deploy I’ll like to use GitHub Actions so the developers can create pull requests to merge their features branches 
 * into the develop branch. So, the Actions can deploy to staging when the develop branch is merged and to prod when 
 * the main branch is updated.
 * 
 * I’ll like to use the serverless framework to run and build it as a lambda function to make it provider-agnostic.
 * 
 * 
 *  */

/**
 * Main function Sorts and filters all marbles
 * @param {Array} marbles Bob's marbles
 * @returns Array of sorted and filtered marbles
 */

function processMarbles(marbles){
    /**
     * Using js native filter, Maybe using a custom function could optimize memory
     */
    let result = marbles.filter(filterMarbles);
    
    return quickSort(result, 0, result.length - 1);
}

function filterMarbles(marble) {
    return (marble.weight >= .5 && isPalindrome(marble.name));
}
/**
 * Using a Quick sort inspired function to check if a word it's a palindrome
 * @param {String} word The word to test
 * @returns True if the word it's a palindrome.
 */
function isPalindrome(word) {
    const stripPunctuation = word.replace(/[\p{P}\p{S} ]/gu, '').toLowerCase();
    let left = 0,
    right = stripPunctuation.length -1;
    while (left < right) {
        if (stripPunctuation[left] != stripPunctuation[right])
            return false;

        left++;
        right --;
    }
    return true;
}
/**
 * I'm implementing a quick sort algorithm to optimize time complexity.
 * It's worth mentioning that quick sort modifies the original Array.
* @param {Array} items Items to sort
 * @param {Number} left Left index
 * @param {Number} right Right index.
 * @returns The sorted Array
 */
function quickSort(items, left, right) {
    var index;
    //Quick sort for marbles
    if (items.length > 1) {
        index = partition(items, left, right); //index returned from partition
        if (left < index - 1) { //more elements on the left side of the pivot
            quickSort(items, left, index - 1);
        }
        if (index < right) { //more elements on the right side of the pivot
            quickSort(items, index, right);
        }
    }
    return items;
}

//Applies Quick sort partition
function partition(items, left, right) {
    var pivot   = MARBLE_ORDER[items[Math.floor((right + left) / 2)].color], //middle element value
        i       = left, //left pointer
        j       = right; //right pointer
    while (i <= j) {
        while (MARBLE_ORDER[items[i].color] < pivot) {
            i++;
        }
        while (MARBLE_ORDER[items[j].color] > pivot) {
            j--;
        }
        if (i <= j) {
            swapItems(items, i, j); //swapping two elements
            
            i++;
            j--;
        }
    }
    return i;
}
//Swaps two elements in an array
function swapItems(items, leftIndex, rightIndex){
    var temp = items[leftIndex];
    items[leftIndex] = items[rightIndex];
    items[rightIndex] = temp;
}

/**
 * Assigning each color a weight to get the desired order.
 * Using an object as an index it's faster than indexOf
 */
const MARBLE_ORDER  = {
    red: 1,
    orange: 2,
    yellow: 3,
    green: 4,
    blue: 5,
    indigo: 6,
    violet: 7
}

const marblesSample = [
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

//call to main function
var sortedMarbles = processMarbles(marblesSample);

console.log("🚀 ~ Sorted Marbles", sortedMarbles)
