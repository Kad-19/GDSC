const upButton = document.querySelector("#up");
const downButton = document.querySelector("#down");
const count = document.querySelector("#num");
let n = 0;
upButton.addEventListener("click",
    function(){
        n++;
        count.innerHTML = n;
    }
);
downButton.addEventListener("click",
    function(){
        if (n != 0){
            n--;
            count.innerHTML = n;
        }  
    }
);