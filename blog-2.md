JavaScript is a single-threaded language. Single-threaded means JavaScript can only execute one task at a time. And JavaScript executes the code sequentially. This is the Sync Code.

There is some code which takes time to execute like waiting for an http request or getting location etc. As JavaScript executes code sequentially, the time consuming code will restrict other codes from executing.

Here comes the async code concept. Async means that the code will be transferred to the browser for execution and codes after the async code will be executed sequentially. So, any time consuming code, we will make them asynchronous. Asynchronous codes will be transferred to browser and so those code will not block others code from being executed. Browser will handle the asynchronous code execution. There will be a callback function, when the code is executed the browser will call that callback function and when the call stack is empty the asynchronous code will be executed.

So we can handle asynchronous codes in different ways like Callback, Promise or async/await approach.

<b>Callback approach:</b> </br>
function errorHandler() {</br>
console.log(`data not found`)</br>
}</br>
</br>
function callbackAsynchronous(erroHandle:()=>void, inputData:string|null) {</br>
const data = inputData;</br>
if (data) {</br>
setTimeout(() => {</br>
console.log(data)</br>
}, 2000);</br>
} else {</br>
erroHandle();</br>
}</br>
}</br>
</br></br>
callbackAsynchronous(errorHandler, null);</br></br>

So here setTimeout() is an asynchronous function. We have handled the code with callback approach. Don't you think that the code is a little bit messy? It's just a small asynchronous code but handling the code looks a bit more complex.</br></br>

To handle this messy situation another approach of handling the async code is using Promise. A Promise is a nicer way to handle asynchronous code. They provide a cleaner and more manageable approach to working with asynchronous operations compared to traditional callback methods.</br></br>

<b>Handling async code with Promise:</b></br>
function callbackAsynchronous(inputData: string | null):Promise<string> {</br>
const promise = new Promise<string>((resolve, reject) => {</br>
const data = inputData;</br>
if (data) {</br>
setTimeout(() => {</br>
resolve(data);</br>
})</br>
} else {</br>
reject(data);</br>
}</br>
});</br>
return promise;</br>

}</br>
</br></br>
callbackAsynchronous(null).</br>
then((data) => {</br>
console.log(`Data Found ${data}`);</br>

    }).catch(() => {</br>
    console.log('Data not found')</br>

})</br></br>

Basically what we do is we wrap the asynchronous code inside a promise and then the promise executes the asynchronous code and returns the output of the async code. Promise is a built-in class in JavaScript by which we instantiate a new promise and we wrap our async codes inside that. While instantiating the promise the constructor function of the promise takes a function as argument which is responsible for executing the async code. That executing function takes two functions as arguments generally named by resolve and reject representing the success and failure of our asynchronous code. If resolve is executed then it means our async code has been run successfully and the data is passed through the resolve() and if reject is executed then it means that our async code has been failed and the error message is passed through the reject().</br></br>

Promise has handler functions, catch() and then(). 'then()' is executed if the resolve() is excecuted which means our async code worked fine and the data passed by resolve() is available in then() block. 'catch()' is executed if the reject() is executed which means our async code failed and the error message passed by reject() is available in catch() block. Now in then() block we can perform any task based on the successful async code execution and handle the exceptions in catch() block if any error ouccured executing asunc code.</br></br>

So using then() and catch() block it becomes more easier handling asynchronous codes and write more clean codes. Also we can reuse the promise function anywhere we need it. Isn't promise better than callback approach? what do you think?</br></br>

<b>async/await approach:</b></br>
async function callbackAsynchronous(inputData: string | null){</br>
const data = inputData;</br>
const outputData = await inputData===null?console.log('Data not found'): setTimeout(() => { console.log(`Data found ${data}`) }, 2000);</br>
return outputData;</br>

}</br>
callbackAsynchronous(null);</br></br>

Now comes the best way of handling asynchronous codes, handling async codes with async/await approach. Async/Await is a modern syntax in JavaScript for handling asynchronous code, built on top of promises. So, we can replace the then() and catch() block with Async/Await which will give a more like synchronous visualization.</br></br>

We can use Async/Await only in functions. Async keyword is always placed before the function. With the async keyword a function automatically returns a promise. Behind the scenes, all the code of the async function is passed in the initializing function that we pass in a promise constructor.</br></br>
We place the await keyword before any promise. So, async/await approach gives us a even more cleaner codes than Promise. It's more like regular codes and visually smoothing. As async function by default returns a promise, we can use cathc() and then() block also the async function. So, async/await is more flexible for handling the asynchronous codes.
