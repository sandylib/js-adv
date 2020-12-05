function foo() {
    var bar = 'bar1';
    baz();
  }
  
  function baz() {
    console.log(this.bar); // bar will bind to the globle scope 
  }
  
  
  var bar = "bar2";
  
  foo() //undefined
  