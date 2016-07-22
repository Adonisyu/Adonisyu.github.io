$(function(){
	var timer2 = null;
	$("#nav-main").hover(function(){
		clearTimeout(timer2);
		timer2 = setTimeout(function(){
			$("#menu").animate({"top" : "-169px"});
		},300);
		
	},function(){
		clearTimeout(timer2);
		timer2 = setTimeout(function(){
			$("#menu").animate({"top" : "50px"});
		},300);
	});
	var downloadImg = ["img/浪漫樱花季.jpg","img/全新时装内衣.jpg","img/人人来做大富翁.jpg",
	"img/全新装扮系统.jpg","img/性感与时尚.jpg","img/艾尔库鲁斯的翅膀.jpg"];
	$("#download-imgs").css("width",(downloadImg.length)*652+"px");
	$("#download-btn li").click(function(){
		$(this).css("background","#c1522b").siblings().css("background","#fff");
		var index = $(this).index();
		$("#download-imgs").animate({
			"left" : -index*652+"px"
		});
	});
	$(".news-menu ul li").mouseover(function(){
		$(this).css("background","#c85e1a").css("color","#d9d9d9")
		.siblings().css("background","#4a240c").css("color","#c85e1a");
		var index = $(this).index();	   
		$("#news-list ul:eq("+index+")").show().siblings().hide();
	});
	$("#every-right ul li:lt(3)").clone().appendTo("#every-right ul");
	$("#every-right ul").css("width","1872px");
	$("#next").click(function(){
		if($("#every-right ul").css("left") == "-1170px"){
			$("#every-right ul").css("left","0px");
		}
		if( !$("#every-right ul").is(":animated") ){
			$("#every-right ul").animate({"left" : "-=234px"});
		}
	});
	$("#last").click(function(){
		if($("#every-right ul").css("left") == "0px"){
			$("#every-right ul").css("left","-1170px");
		}
		if( !$("#every-right ul").is(":animated") ){
			$("#every-right ul").animate({"left" : "+=234px"});
		}
	});
	var everyTimer = setInterval(function(){
		$("#next").click();
	},2000);
	$("#every-right").hover(function(){
		clearInterval(everyTimer);
	},function(){
		everyTimer = setInterval(function(){
			$("#next").click();
		},2000);
	});
	$("#player-nav li").mouseover(function(){
		$(this).css("background","#c85e1a").css("color","#d9d9d9")
		.siblings().css("background","#4a240c").css("color","#c85e1a");
		var index = $(this).index();	
		$("#player-main ul:eq("+index+")").show().siblings().hide();
	});
	$("#video-left-nav li").mouseover(function(){
		$(this).css("background","#c85e1a").css("color","#d9d9d9")
		.siblings().css("background","#4a240c").css("color","#c85e1a");
		var index = $(this).index();
		$("#video-left-main div:eq("+index+")").show().siblings().hide();
	});
	$("#video-right-main div ul li:lt(2)").clone().appendTo("#video-right-main div ul");
	$("#video-right-main div ul").css("width","920px");
	$("#btn-right").click(function(){
		if($("#video-right-main ul").css("left") == "-552px"){
			$("#video-right-main ul").css("left","0px");
		}
		if( !$("#video-right-main div ul").is(":animated") ){
			$("#video-right-main div ul").animate({"left" : "-=184px"});
		}
	});
	$("#btn-left").click(function(){
		if($("#video-right-main ul").css("left") == "0px"){
			$("#video-right-main ul").css("left","-552px");
		}
		if( !$("#video-right-main div ul").is(":animated") ){
			$("#video-right-main div ul").animate({"left" : "+=184px"});
		}
	});
	var videoTimer = setInterval(function(){
		$("#btn-right").click();
	},2000);
	$("#video-right-main").hover(function(){
		clearInterval(videoTimer);
	},function(){
		videoTimer = setInterval(function(){
			$("#btn-right").click();
		},2000);
	});
	$("#games-btn li").click(function(){
		$(this).css("background","#c1522b").siblings().css("background","#fff");
		var index = $(this).index();
		$("#games div ul").animate({"left" : -index*233+"px"});
	});
	$("#sever-main div ul li:lt(2)").clone().appendTo($("#sever-main div ul"));
	$("#sever-main div ul").css("width","992px");
	var speed = 0;
	var timer = null;
	function go(){	
		timer = setInterval(function(){
			speed--;
			if(speed < -744){
				speed = 0;
			}
			$("#sever-main div ul").css("left",speed+"px");
		},20);
	}
	function stop(){
		clearInterval(timer);
	}
	go();
	$("#sever-main div").hover(function(){
		stop();
	},function(){	
		go();
	});
	// var $old = $("#hero li:eq(0) div");
	// $("#hero ul li div").click(function(){
	// 	if( !$old.is($(this)) ){
	// 		$old.next().stop().animate({
	// 			width : 0
	// 		});
	// 		$(this).next().stop().animate({
	// 			width : 398
	// 		});
	// 		$old = $(this);
	// 	}
	// });
	$("#hero ul li div").hover(function(){
		$(this).children("a").css("backgroundPosition","right");
	},function(){
		$(this).children("a").css("backgroundPosition","left");
	});

	// $("#hero li").each(function(index){
	// 	$(this).css("left",52*index+"px").css("zIndex",index*2+1);
	// });
	// $("#hero li").on("click",function(){
	// 	var index = $(this).index();
	// 	for(var i=0; i<=index; i++){
	// 		$("#hero li:eq("+i+")").css("left",52*i+"px");
	// 	}
	// 	for(var i=index+1; i<$("#hero li").size(); i++){
	// 		$("#hero li:eq("+i+")").css("left",52*i+$("#hero img").width()+"px");
	// 	}
	// });
	var $old = $("#hero li:eq(0)");
	$("#hero li").on("click",function(){
		if( !$old.is($(this)) ){
			$(this).children("img").css("width","398px");
			$old.children("img").css("width","0px");
			$old = $(this);
		}
	});
});