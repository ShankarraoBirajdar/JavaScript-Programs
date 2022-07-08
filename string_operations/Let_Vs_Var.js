var arr = [94, 343, 34343, 223123];
for (var i = 0; i < arr.length; i++) {
  setTimeout(function() {
    console.log('The index of this number is: ' + i);
  }, 0);
}

var arr = [94, 343, 34343, 223123];
for (let i = 0; i < arr.length; i++) {
  setTimeout(function() {
    console.log('The index of this number is: ' + i);
}, 0);

}