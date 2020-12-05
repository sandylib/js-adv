var obj = {
    a:2,
    b:3,
    c:4
  }
  
  obj.a = obj.b + obj.c;//7
  obj.c = obj.b - obj.a;//-4
  
  //with don't allow in strict mode
  with(obj) { // with will create globle scope if not inside obj
    a = b+c; 
    c = b-a;
    d = 3; // this will go to globe scope
  }
  
  obj.d; //undefined
  d; //3 
  
  