var counting=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
document.write("Counting:"  + counting + "<br>");
var reverse_counting;
document.write("Reverse Counting:");
for(var i=14; i>=0; i--){
document.write(counting[i] +","  );
}
document.write("<br>" + "Even: ");

for(i=0; i<counting.length; i++){
    if(counting[i]%2===0){
        document.write(counting[i] + ",");
    
        
    }
}
document.write("<br>" + "Odd: ");

for(i=0; i<counting.length; i++){
    if(counting[i]%2!==0){
        document.write(counting[i] + ",");
    
        
    }
}
document.write("<br>" + "Series: ");

for(i=0; i<counting.length; i++){
    if(counting[i]%2===0){
        document.write(counting[i] + "k,");
    
        
    }
}