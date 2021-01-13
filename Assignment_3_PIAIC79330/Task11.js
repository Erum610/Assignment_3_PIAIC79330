var a=["cake", "apple pie", "cookie", "chips", "patties"];

var b=prompt("Welcome to ABC Bakery. What do you want to order Sir/Madam?");

var found=false;

for(var i=0; i<a.length; i++){ 
   
    if(a[i]===b){
document.write( b + " is available at index " + i + " in our bakery" );
found=true;
   break; }

}
if(!found){
    document.write("We are sorry." + b + "is not available in our bakery");
}