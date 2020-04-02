function myFunction() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName("li");
    var initscore;
    var currscore;
    initscore = (li[0].getElementsByTagName("a")[0]).innerText.toUpperCase().indexOf(filter);
    console.log(initscore);
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.innerText || a.textContent;
    currscore = txtValue.toUpperCase().indexOf(filter);
    
        if (txtValue.toUpperCase().indexOf(filter) > -1) {  
            li[i].style.display = ""; //do nothing or display the element
            if (currscore == 0) {
                if (filter !="") {
                $(li[i]).parent().prepend($(li[i])); //move it to top if it has the first letter
                }
            }
        }       
        else {
            li[i].style.display = "none"; //hide the element
        }
    }
}