function menu ()
{
    var element=document.getElementsByClassName('navegacion_menu');
    if(element[0].style.display != 'block') {
        element[0].style.display = 'block';
    } else {
        element[0].style.display = 'none';
    }
}
