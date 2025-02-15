window.addEventListener("load",function (){
  console.log("load");
});

window.addEventListener("unload",function (){
    console.log("unload");
  });

  window.addEventListener("scroll",function (){
    console.log("scroll");
  });

//   window.addEventListener("resize",function (){
//     console.log("resize");
//   });

window.addEventListener("resize",function (){
    const width = window.outerWidth;
    const height = window.outerHeight;
    console.log(`height: ${height},width: ${width}`);
  });

  details.addEventListener("toggle",function(){
    console.log("toggle");
  });