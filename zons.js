nw= screen.width - 70;
nh= screen.height - 300;

if(screen.width < 768)
{
    document.getElementById("abc").width=nw;
    document.getElementById("abc").height=nh;
    document.body.style.overflow="hidden";
}






var omgcanvas= document.getElementById("abc");
var omg= omgcanvas.getContext("2d");
Ox = ""; Oy = "";


omgcanvas.addEventListener("touchstart" , my_touchstart)

function my_touchstart (e)
{ 
    ox=e.touches[0].clientX-omgcanvas.offsetLeft;
    oy=e.touches[0].clientY-omgcanvas.offsetTop;
}


omgcanvas.addEventListener("touchmove" , my_touchmove)

function my_touchmove (e)
{
    mx=e.touches[0].clientX-omgcanvas.offsetLeft;
    my=e.touches[0].clientY-omgcanvas.offsetTop;
omg.beginPath();
omg.strokeStyle="green";
omg.lineWidth=10;
omg.moveTo(Ox , Oy);
omg.lineTo(mx , my);
omg.stroke();
Ox=mx;
Oy=my;}

