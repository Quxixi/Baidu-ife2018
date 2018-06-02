// 函数封装:

function Go() {
    console.log("Go");
}


function GoSteps(n) {
    if(n == true || n == ''){
        return Go()
     
    }
    if(typeof(n) == Number && n > 0){
        console.log(n)
        let x = Math.floor(n)
        while (x--) {
            Go();
        }
    }
   
}


GoSteps('dt'); // Go 10次
