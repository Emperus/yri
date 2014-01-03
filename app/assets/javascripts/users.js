ratetypes= [
	"Books",
	"Movies",
	"Series",
	"Games",
	"Music",
	"Cars",
	"Japanese culture",
	"Actors",
	"Websites"
]

$(function(){
	btnText=$("#homepage_button_text")
	$(".btn").click(function(){
		hpcat=$(".homepage_category")
		rotation = hpcat.css("transform")
		hpcat.animate({
			top:btnText.offset().top-100,
			left:btnText.offset().left},1500,function(){
				hpcat.remove();
			});
		var angle = 0;
		setInterval(function(){
		      angle+=3;
		     hpcat.rotate(angle);
		},10);
	})
	randomnumbs = []
	do
	{	
		currentnum = Math.round(Math.random() * 8)

		while(randomnumbs.indexOf(currentnum)!=-1)
			currentnum = Math.round(Math.random() * 8)

		randomnumbs.push(currentnum)
	}
	while(randomnumbs.length<6)

	for (i = 0; i<6; i++)
	{
		x= 250+(i*366)
		y=150
		if(i>=3)
		{
			y=300
			x= 250+((i-3)*366)
		}
		if(i==1)
		{
			y-=150
		}
		if(i==4)
		{
			y+=150
		}
		randomtext= $("<img style='width:100px' class ='homepage_category' src='assets/cat_icons/Books.png'/>")
		randomtext.css("position","absolute").css("top",y+(Math.random()*120)).css("left",x+(Math.random()*150))
		randomtext.css("transform","rotate("+((Math.random()*40)-20)+"deg)")
		$("#homepage_body").append(randomtext)
	}
})
