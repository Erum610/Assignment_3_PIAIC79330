var students_names=["Michael", "John", "Tony"];

var scores= ["320", "230", "480"];

for( i=0; i<students_names.length; i++){
    document.write("Score of  " + students_names[i] + "  is " + scores[i] + ".  Percentage: " + (scores[i] /500 *100 ) +  "%");
    document.write("<br>");

}
