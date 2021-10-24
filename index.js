
let music=new Audio('game-music.mp3')
music.play();
let turn='X';
let gameover=false;
const changeTurn=()=>{
    return turn ==='X'?"0":"X"
}
const checkWin=()=>{
    let wintext=document.getElementsByClassName('x');
const win=[
    [0,1,2],[3,4,5],[6,7,8],[0,4,8],[2,4,6],[1,4,7],[2,5,8],[0,3,6]
]
win.forEach(e=>{
    if(wintext[e[0]].innerText==wintext[e[1]].innerText && wintext[e[1]].innerText==wintext[e[2]].innerText && wintext[e[2]].innerText!="" ){
      document.querySelector('.turnof').innerText= "CONGRATS "+wintext[e[0]].innerText +" WON"
    gameover=true;
    }

})
}
var boxes=document.getElementsByClassName("box");

Array.from(boxes).forEach(element=>{
    let boxtext=element.querySelector('.x');
    element.addEventListener('click',()=>{
        if(boxtext.innerText===''){
            boxtext.innerText=turn;
            turn=changeTurn();
            checkWin();
            if(!gameover){
            document.getElementsByClassName("turnof")[0].innerText="Turn for "+turn
        
         } }
            
    })
})


button.addEventListener('click',(element)=>{
    let boxtext=document.querySelectorAll('.x');
Array.from(boxtext).forEach(element=>{ 

    element.innerText='';
    document.getElementsByClassName("turnof")[0].innerText="Turn: X/0 ";
});
    

})
    
