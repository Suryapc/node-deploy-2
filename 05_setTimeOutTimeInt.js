// ---- setTimeout()---

// setTimeout(function(){
//                 console.log(`setTimeout is executing in just 1 sec`)
// },1000);

// -- setInterval()---

// setInterval(function(){
//          console.log(`setsetInterval  is executing for multiple times in  2 sec gap`)
// },2000);

//   var recursiveFunc =function(){
//                 console.log(`its a recursive function`);
//                 setInterval(recursiveFunc,1000);
//      }
//   recursiveFunc();

  //---setImmediate---

  var execFunc =function(){
     
    setTimeout(function(){
        console.log(`setTimeout executes`);
              },0);
   setImmediate(function(){
        console.log(`setImmediate executes`);
                });

  }
  execFunc();
// 


