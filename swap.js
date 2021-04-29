function myfunc() {
    var x = document.getElementById("N1").value;
    var y = document.getElementById("N2").value;
    document.getElementById("demo").innerHTML="before calling pass by value,N1="+x+" , N2="+y;
    passbyvalue(x,y);
    document.getElementById("demo1").innerHTML="\n after calling pass by value,N1="+x+" , N2="+y;
  }
  function passbyvalue(x,y)
  {
      let temp=x;
      x=y;
      y=temp;
      document.getElementById("demo2").innerHTML="\n inside pass by value function N1="+x+" , N2="+y;
  }



  function myfunction()
  {
      var obj = { 
          a : document.getElementById("N3").value ,
          b : document.getElementById("N4").value
      }
      document.getElementById("2demo").innerHTML="before calling pass by reference,N3="+obj.a+" , N4="+obj.b;
      passbyreference(obj);
      document.getElementById("2demo1").innerHTML="after calling pass by reference,N3="+obj.a+" , N4="+obj.b;
  }
  function passbyreference(obj)
  {
      obj.c=obj.a;
      obj.a=obj.b;
      obj.b=obj.c;
      document.getElementById("2demo2").innerHTML="inside pass by reference function N3="+obj.a+" , N4="+obj.b;
  }
  