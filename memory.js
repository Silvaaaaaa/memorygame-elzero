let controlgame = document.querySelector(".control-game span");
let namee = document.querySelector(".name span");
let endgame = document.querySelector(".control-game");
let memorygame = document.querySelector(".memory-game"); 
let tries = document.querySelector(".tries span"); 



controlgame.onclick = function(){
    let yourname = prompt("what is your name ");
    if (yourname == null || yourname == "" ){
        namee.innerHTML =  "unknown"
    }else {
       namee.innerHTML = yourname
    }
   endgame.remove();
}
let duration  = 1000; // memorygame hava all image 
let arrayofimg = Array.from(memorygame.children)
// array of img == blocks with elzero 
// let orderrange = [...Array(arrayofimg.length).keys()]  another metheds
let orderrange = Array.from(Array(arrayofimg.length).keys())
 
shuffle(orderrange);

arrayofimg.forEach((img,index)=>{
     img.style.order = orderrange[index] ;
     img.addEventListener("click" , function () {
         flibback(img);
     }) 
})

function flibback(selected){
   selected.classList.add('is-click');
   let allflibedblocks = arrayofimg.filter(allflibedblock => allflibedblock.classList.contains("is-click"))
   if (allflibedblocks.length === 2){
     stopclicking();
     matchedblock(allflibedblocks[0] , allflibedblocks[1])
   }
   
}
function stopclicking(){
    memorygame.classList.add("no-clicking");
    setTimeout(() => {
    memorygame.classList.remove("no-clicking");
    }, duration);
}
function matchedblock(firstblock , secondblock){
     if (firstblock.dataset.technology === secondblock.dataset.technology){
   firstblock.classList.remove('is-click');
   secondblock.classList.remove('is-click');
   firstblock.classList.add('has-matched');
   secondblock.classList.add('has-matched');
         
     }else{
         tries.innerHTML = parseInt(tries.innerHTML) + 1 ;
         
    setTimeout(() => {
        firstblock.classList.remove("is-click");
        secondblock.classList.remove("is-click");
    }, duration);
     }
}
function shuffle(array){
   let current = array.length , temp , random ; 
   while(current > 0)
   {
      random = Math.floor(Math.random() * current);
      current-- ; 
      temp = array[current]
      array[current] = array[random]
      array[random ] = temp ; 
  }
  return array ;
}
