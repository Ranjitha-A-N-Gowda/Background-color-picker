buttons=document.querySelectorAll(".button");
body=document.querySelector("body");
buttons.forEach(function (button){
    button.addEventListener('click',function (e)
{
    if(e.target.id=="grey")
    {
        body.style.backgroundColor=e.target.id;
    }
    if(e.target.id=="red")
    {
        body.style.backgroundColor=e.target.id;
    }
    if(e.target.id=="pink")
    {
        body.style.backgroundColor=e.target.id;
    }
    if(e.target.id=="purple")
    {
        body.style.backgroundColor=e.target.id;
    }
    if(e.target.id=="black")
    {
        body.style.backgroundColor=e.target.id;
        body.style.color="white";
    }

});

});