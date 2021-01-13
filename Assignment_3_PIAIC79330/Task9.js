var a = [24,53,78,91,12];

document.write("Array items: " + a +"<br>");
var largest_number=0;
for(var i=0; i<a.length; i++){
if(a[i]>largest_number){
    largest_number=a[i];
}
}
document.write("The largest number is " + largest_number);