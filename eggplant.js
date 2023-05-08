let price=150;
let count=0;    
let total;
 


document.getElementById("decreaseBtn").onclick = function(){
    count-=1;
    total = price * count;

    document.getElementById("countLabel").innerHTML = count;
    
}
document.getElementById("resetBtn").onclick = function(){
    count=0;
    document.getElementById("countLabel").innerHTML = count;
}
document.getElementById("increaseBtn").onclick = function(){
    count+=1;
    document.getElementById("countLabel").innerHTML = count;
    
    total = price * count;
}

document.getElementById("submitbtn").onclick = function(){
    
    document.getElementById("Total").innerHTML = "Total: " + total;
}