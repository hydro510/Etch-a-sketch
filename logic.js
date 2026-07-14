let squares = '';

let infoObject = document.querySelector(".dimension");
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
    }
});

