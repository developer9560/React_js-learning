// this file suppose it is module file we will export this file in index.js

let sumData= (a , b)=>{
    return a+b;
}

//In JavaScript, export default is used to export a single value from a module, while export name (named exports) is used to export multiple values

export default sumData ;// it is use only for one function to export

//export {sumData} // it is use for to export many functions

//Use named export when you want to export multiple variables or functions from a file. Use default export when you want to export only one variable or function from a file. Use named export when you want to keep the same name for your variables or functions across different files.