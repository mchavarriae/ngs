function theOneFunction(delay){
  console.log("Hello world after " + delay + " seconds");
}
setTimeout(theOneFunction, 4*1000, 4);

setTimeout(theOneFunction, 8*1000, 4);