## JavaScript: The weird parts

This repository will contain JavaScript snippets and lessons learned through my studying hiatus.

**What is a key/value pair?**

```javascript
var name = 'leo';
```

**What is a object?**

```javascript
var person = {
    firstName: 'ed',
    superpowers:  ['eat', 'sleep', 'code']
};
```

### Vocabulary
```
Syntax Parser
```
> A program that reads your code and determines what it does and if its grammar is valid.

> *Gist - code written is not magic. Someone wrote software for the PC to understand.*

```
Lexical Environment
```
> Where something sits physically in the code you write.

```
Execution Context
```
> A wrapper to help manage the code that is running.

![execution](assets/executionContext.PNG "example image")

```
Global Object
```
> Anything that is not inside a function.

```
Hoisting
```
> When functions and variables get allocated to memory. Functions are set in there entirety while the variables value are set to 'undefined'.

```javascript
b(); // => 'Called b!'
console.log(a); // => 'undefined'
var a = 'Hello there';
function b() {
    console.log('Called b!');
}
```
![execution](assets/hoisting.png "example image")

```
Global Object
```
> Anything that is not inside a function.

> Pro Tip: Never set a variable to *undefined*, let javascript engine do its thing.

```
Single Threaded
```
> One command is executed at a time.

```
Synchronous
```
> One command is executed at a time and in order.

```
Invocation
```
> Running a function

```javascript
foo()
````

> Everything a function is called, a new execution context is created for that function.
![execution](assets/ecStack.png "example of execution context stack")
