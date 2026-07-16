let squares = '';
let isDrawing = false;
let infoObject = document.querySelector(".dimension");

document.addEventListener("mousedown",()=> isDrawing = true);
document.addEventListener("mouseup",()=> isDrawing = false);
infoObject.addEventListener("keydown",(event)=>{
    if(event.key==="Enter"){
       let remove = false;
       let dimension = Number(infoObject.value);
       if(dimension>0&& dimension<=100){
         let main = document.querySelector(".main-container");
         main.style.setProperty(`--grid-size`,`${dimension}`);


         for(let i = 0 ; i < (dimension*dimension) ; i++){
                squares+='<div class = "square"></div>';
          }

            document.querySelector(".main-container").innerHTML = squares;
            squares = '';
            getsClicked();


            //new
            document.querySelector(".remove").addEventListener("click",()=>{
                remove = !remove;
                document.querySelectorAll(".square").forEach((square)=>{
                    if(remove){
                        square.classList.add("border-less");  
                    }else{
                        square.classList.remove("border-less");
                    }
                   
                });
            });

        }
    }
});


function getsClicked(){
     document.querySelectorAll(".square").forEach((square)=>{
            let light = 90;
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




