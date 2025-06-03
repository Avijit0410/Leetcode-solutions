
//Why do we need setInterval and when to use it ?

//setInterval is a built-in JavaScript function that allows you to execute a function repeatedly at specified intervals. It is commonly used for tasks such as updating the UI, creating animations, or performing periodic checks.
//The main difference between setInterval and setTimeout is that setInterval will continue to execute the function at the specified interval until it is explicitly stopped, while setTimeout will only execute the function once after the specified delay.
//setInterval is useful when you want to perform a task repeatedly, such as updating a clock, fetching data from an API at regular intervals, or creating animations.



//Mistake
setInterval(() => {
    console.log('Runing task....')
}, 1000)


//Always clear intervals when they no longer needed
const intervalId = setInterval(() => {
    console.log('Running task....')
}, 1000)


setTimeout(() => {
    clearInterval(intervalId);
    console.log('Stopped the interval.')
}, 5000)