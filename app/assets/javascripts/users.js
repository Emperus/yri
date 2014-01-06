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
	btnText=$("#animation_center")
	$(".btn").click(function(){
		hpcat=$(".homepage_category")
		hpcat.each(function(){
			$(this).css("top",$(this).offset().top-120)
			$(this).css("left",$(this).offset().left)
		});
		hpcat.css("position","absolute")
		hpcat.animate({
			top:btnText.offset().top-100,
			left:btnText.offset().left-hpcat.width()/2,
			opacity:0},1000,function(){
				hpcat.remove();

			});
		var angle = 0;
		setInterval(function(){
		      angle+=6;
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
	while(randomnumbs.length<8)

	for (i = 0; i<8; i++)
	{
		randomtext= $("<img class ='homepage_category' src='assets/cat_icons/"+ratetypes[randomnumbs[i]]+".png'/>")
		//randomtext.css("transform","rotate("+((Math.random()*40)-20)+"deg)")
		if(i<4)
			$($("table.fixmypage tr td")[i]).append(randomtext)
		else
			$($("table.fixmypage tr td")[i+1]).append(randomtext)
	}
})
