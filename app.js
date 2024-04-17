let uscore=0;

let cscore=0;


let chooses=document.querySelectorAll('.choose');



# here mat.random()used to generate random number

let gen=()=>{
    let arr=['pen','pencil','notebook'];
    let c=Math.floor(Math.random()*3);
    return arr[c];
} 




#logic for draw match

let draw=()=>{
    console.log('draw');
}


#comparing input of user and computer

let game= (uid) => {
    console.log("clicked user",uid);
    let cid=gen();
    console.log("clicked computer",cid);
    if(uid==cid){
        draw();
    }
    
};




#Add the Event listner

chooses.forEach((choose)=>{
    console.log(choose);
    choose.addEventListener('click',()=>{
        let uid=choose.getAttribute('id');
        console.log("clicked",uid);
        game(uid);
    })
})

