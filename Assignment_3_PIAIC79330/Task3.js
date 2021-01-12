
document.write("List of Colors");
document.write("<br>" );
var colors= ["Green", "Red", "Orange", "Pink"];
    for(i=0; i<colors.length; i++){
        document.write(colors[i]);
        document.write("<br>" );
    }
    document.write("<br>" );
    // Green, Red, Orange, Pink
    
var input= prompt("Enter color to be added in the begining");
colors.splice(0,0, input);
document.write("Updated List <br>");
for(i=0; i<colors.length; i++){

    document.write(colors[i]);
    document.write("<br>");
}
document.write("<br>" );
// Yellow, Green, Red, Orange, Pink
var input= prompt("Enter color to be added in the end");
colors.push(input);
document.write("Updated List <br>");
for(i=0; i<colors.length; i++){

    document.write(colors[i]);
    document.write("<br>");
}
document.write("<br>" );
// Green, Red, Orange, Pink, Blue
colors.unshift("Purple", "Black");
document.write("Updated List <br>");
for(i=0; i<colors.length; i++){
    document.write(colors[i]);
    document.write("<br>");
}
document.write("<br>" );
// Purple, Black, Yellow, Green, Red, Orange, Pink,Blue
colors.shift();
document.write("Updated List <br>");
for(i=0; i<colors.length; i++){
    document.write(colors[i]);
    document.write("<br>");
}
document.write("<br>" );
// Black, Yellow, Green, Red, Orange, Pink,Blue
colors.pop();
document.write("Updated List <br>");
for(i=0; i<colors.length; i++){
    document.write(colors[i]);
    document.write("<br>");
}
document.write("<br>" );
// Black, Yellow, Green, Red, Orange, Pink
var desired_index=parseInt(prompt("Enter index number where you want addition"));
var desired_color_addition= prompt("Enter the desired color name");
colors.splice(desired_index,0,desired_color_addition);
document.write("Updated List <br>");
for(i=0; i<colors.length; i++){
    document.write(colors[i]);
    document.write("<br>");
}
// Black, Yellow, Green, Red, White, Orange, Pink
document.write("<br>" );
var deleted_index_number=parseInt(prompt("Enter index number where you want deletion"));
var last_deletion= parseInt(prompt("Enter last index number till where you want deletion"));
var col= colors.slice(deleted_index_number, last_deletion);

document.write("Updated List <br>");
for(i=0; i<col.length; i++){
    document.write(col[i]);
    document.write("<br>");
}
document.write("<br>" );