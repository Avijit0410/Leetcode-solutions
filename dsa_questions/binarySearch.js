//Asked to Implement Binary Search
//Asked to Implement Doubly LinkedList method
//What language works best for an ios app
//ReactJs, Js related questions. Like defer, debouncer, chunking, webpack etc.
// included basic OOP's , basic DSA, java and kotlin concepts and android fundamentals
//DSA based questions, mutiple DBMS and OS based questions.
//Program on Reverse a string
// Longest increasing subsequence
//What is No SQL? What is threading and how is it useful?
//Check if BT is BST
//Check if graph is bipartite
//Design a logger
//How will you design a login system?
//Explain the TLS handshake protocol?
//Question on anagrams
//One feature that should be added to bookmyshow app and how will you implement it
//Compare LAMP and MEAN?
//How do you Store data in mongoDb ? (format)
//What's sql index and where is it stored? what is the data structure of sql index?
//Design a survey site's database.
//What is the difference between http and https?
//What are the new features provided by html5?
//How to write, export and use a module in node.js?
//How to resolve conflicts in GITHUB?















// BookMyShow
/**
1. Introduction Call with Hiring Manager ( 20 mins ) 
2. Tech Interview - 1 ( 30 mins) [ Asked about work experience, basic OOPS) 
3. Tech Interview - 2 ( 1 hr) Asked Binary Search Implementation Doubly LinkedList Implementation 
4. Tech Interview - 3 (1Hr) Asked about Work Experience and cross questions System Design to implement adding a new theatre and movie in bookmyshow site
*/


//Binary search tree implementation 

function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        if (arr[mid] === target) {
            return mid;
        } else if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return -1; // target not found
}

// Example usage:
const nums = [1, 3, 5, 7, 9, 11];
const result = binarySearch(nums, 7);
console.log(result);  // Output: 3
