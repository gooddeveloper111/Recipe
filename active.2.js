function showmenu(elmnt)
{
document.getElementById(elmnt).style.visibility="visible"
}
function hidemenu(elmnt)
{
document.getElementById(elmnt).style.visibility="hidden"
}


function formerrors()
{
for(x=1; x<7; x++)
{
if(document.getElementById(x).value.length ==0)
{
alert("Please fill out all parts");
return false;
}
}
return true;
}