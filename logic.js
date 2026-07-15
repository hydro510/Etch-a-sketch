let squares = '';
let isDrawing = false;
let infoObject = document.querySelector(".dimension");

document.addEventListener("mousedown",()=> isDrawing = true);
document.addEventListener("mouseup",()=> isDrawing = false);
infoObject.addEventListener("keydown",(event)=>{
    if(event.key==="Enter"){
       let dimension = Number(infoObject.value);
       

       let main = document.querySelector(".main-container");
       main.style.setProperty(`--grid-size`,`${dimension}`);


       for(let i = 0 ; i < (dimension*dimension) ; i++){
            squares+='<div class = "square"></div>';
        }

        document.querySelector(".main-container").innerHTML = squares;
        squares = '';

        getsClicked();
    }
});


function getsClicked(){
     document.querySelectorAll(".square").forEach((square)=>{
            let light = 100;
            function draw(){
                    square.classList.add("clicked");
                    if(light>0){
                        light-=10;
                        square.style.setProperty('--light',`${light}%`)
                    }
            }
            square.addEventListener("mousedown",(e)=>{
                e.preventDefault();
                draw();
            });

            square.addEventListener("mouseenter",()=>{
                if(isDrawing){
                    draw();
                }
            });

           

        });
}




