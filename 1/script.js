let ekran = document.getElementById("ekran")
    let metn = document.getElementById("metn")
    let sait = ['a','ı','o','u','e','ə','i','ö','ü']
    

function count(){
     let reqem = 1
     let count=0

    for(let x = 0; x<metn.value.length; x++ ){
        if(metn.value[x] == " " && metn.value[x+1] !== " " ){
            reqem++;
        }
    }
    for(let y= 0; y<metn.value.length; y++){
        for(let j = 0; j<sait.length;j++){
         if(metn.value[y].toLowerCase() == sait[j]){
            
             count++
         }
        }
     }
    ekran.innerHTML = reqem  +`<p>soz</p>`+count+`<p>sait</p>`
}