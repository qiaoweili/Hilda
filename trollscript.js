console.log("troll script working");
vid=document.getElementById("vid");
// var listener = new window.keypress.Listener();
// counting_combo(keys, on_count_callback);
// listener.counting_combo("shift s", function(e, count) {
// console.log("You've pressed this " + count + " times.");});
// document.write("<script type='text/javascript' src='keyp/keypress.js'></script>");
// function a(){
//     keypress();
//     var listener = new window.keypress.Listener();
//     counting_combo(keys, on_count_callback);
//     listener.counting_combo("shift s", function(e, count) {
//     console.log("You've pressed this " + count + " times.");});
//
//
// }
// let counter=0;
// // function {
// //  if (event.keyCode==32)  //回车键的键值为13
// //    counter+=1; //调用登录按钮的登录事件
// // }
//
// // document.addEventListener('keypress', try(event));
// function startrun(){
//   document.addEventListener('keypress',whichkey);
//   console.log("startrun");
//   vid.play();
//   vid.pause();
// }
//
// function whichkey(event){
//   var key = event.key;
//   console.log(" KEY : " + key);
//   let prevkey="k";
//   // if (prevkey=="k") {
//   //   console.log("prev:",prevkey);
//   //
//   //
//   if (key=="l" && prevkey=="k") {
//       prevkey="l";
//       vid.play();
//
//       console.log("prev:",prevkey,";key",key);
//         counter+=1;
//           console.log("counter",counter);
//           console.log("prev:",prevkey);
//
//
//
//
//   }else if (key=="k" && prevkey=="l") {
//     // console.log("prev:",prevkey);
//     // if (key=="k" && prevkey=="l") {
//       prevkey="k";
//       counter+=1;
//         console.log("counter",counter);
//         console.log("prev:",prevkey,";key",key);
//     }
// else{
//   console.log("wrong");
//   console.log("prev:",prevkey,";key",key);
//
//
// }
// //  }
//
// }//function whichkey
//
//
//
//
// setTimeout(function(){
//
// },1000);
console.log("troll script working");

// var listener = new window.keypress.Listener();
// counting_combo(keys, on_count_callback);
// listener.counting_combo("shift s", function(e, count) {
// console.log("You've pressed this " + count + " times.");});
// document.write("<script type='text/javascript' src='keyp/keypress.js'></script>");
// function a(){
//     keypress();
//     var listener = new window.keypress.Listener();
//     counting_combo(keys, on_count_callback);
//     listener.counting_combo("shift s", function(e, count) {
//     console.log("You've pressed this " + count + " times.");});
//
//
// }
let counter=0;
// function {
//  if (event.keyCode==32)  //回车键的键值为13
//    counter+=1; //调用登录按钮的登录事件
// }

// document.addEventListener('keypress', try(event));
function startrun(){
  document.addEventListener('keypress',whichkey);
  console.log("startrun");
  document.addEventListener('keyup',function(){
    vid.pause();
  });

  setTimeout(function(){
    if (vid.currentTime<=15) {
      vid.src="video/eaten.mp4"
    }else {
      vid.src="video/gohome.mp4"
    }

  },15000)
}

let prevkey = []
function whichkey(event){
  var key = event.key;
  console.log(" KEY : " + key);
  // let prevkey="k";
  // if (prevkey=="k") {
  //   console.log("prev:",prevkey);
  //
  //
  prevkey[0] = prevkey[1]
  prevkey[1] = key
  console.log(prevkey)
  if(prevkey[0] == 'k' && prevkey[1] == 'l'){
    counter += 1;
    vid.play();
    vid.playbackRate=5;

    console.log(counter)
    console.log(vid.currentTime);
  }


  }
