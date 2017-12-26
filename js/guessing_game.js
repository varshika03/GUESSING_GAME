var ans={r:50,g:50,b:50};
ans["r"]=Math.floor(Math.random()*255);
ans["g"]=Math.floor(Math.random()*255);
ans["b"]=Math.floor(Math.random()*255);

var ar=[{r:60,g:60,b:60},{r:60,g:60,b:60},{r:60,g:60,b:60},{r:60,g:60,b:60},{r:60,g:60,b:60},{r:60,g:60,b:60}];
for(var i=0;i<6;i=i+1)
{
	ar[i].r=Math.floor(Math.random()*255);
	ar[i].g=Math.floor(Math.random()*255);
	ar[i].b=Math.floor(Math.random()*255);
	var block=document.getElementById(String(i));
		block.style.background='rgb('+ar[i].r+','+ar[i].g+','+ar[i].b+')';
	
}

var index=Math.floor(Math.random()*5);
var block=document.getElementById(String(index));
		block.style.background='rgb('+ans.r+','+ans.g+','+ans.b+')';
var red=document.getElementById('red');
var green=document.getElementById('green');
var blue=document.getElementById('blue');
red.textContent=ans.r;
green.textContent=ans.g;
blue.textContent=ans.b;
for(var i=0;i<6;i=i+1)
{
	if(i!=index)
	{
	
		var restblock=document.getElementById(String(i));
		restblock.addEventListener("click",function()
		{
			this.style.background= "#C9D6FF";  /* fallback for old browsers */
this.style.background="-webkit-linear-gradient(to right, #E2E2E2, #C9D6FF)";  /* Chrome 10-25, Safari 5.1-6 */
this.style.background="linear-gradient(to right, #E2E2E2, #C9D6FF)"; /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
				var trying=document.getElementById("try");
				$(trying).fadeOut(function()
					{
						trying.textContent="Try Again";
						$(trying).fadeIn();
					});

        });
	}


	
}

var ansgrid=document.getElementById(String(index));
ansgrid.addEventListener("click",function()
{
    for(var i=0;i<6;i=i+1)
{
	var block=document.getElementById(String(i));
		block.style.background='rgb('+ans.r+','+ans.g+','+ans.b+')';
}
var head=document.getElementById("heading");
head.style.background='rgb('+ans.r+','+ans.g+','+ans.b+')';
var trying=document.getElementById("try");
trying.textContent="You won";

});


