
//Applies Quick sort 
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
            swapItems(items, i, j); //sawpping two elements
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
//Assigning each color a weight to get the desired order.
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

function sortMarbles(items, left, right) {
    var index;
    //Quick sort for marbles
    if (items.length > 1) {
        index = partition(items, left, right); //index returned from partition
        if (left < index - 1) { //more elements on the left side of the pivot
            sortMarbles(items, left, index - 1);
        }
        if (index < right) { //more elements on the right side of the pivot
            sortMarbles(items, index, right);
        }
    }
    return items;
}

//call to sortMarbles
var sortedMarbles = sortMarbles(marblesSample, 0, items.length - 1);