﻿$(document).ready(function(){
	//이벤트 썸네일이미지 마우스오버
	$("#event> div> div").hover(
		function(){
			$(this).addClass("ho");			
		} , 
		function(){
			$(this).removeClass("ho");
		}
	);
	//이벤트 썸네일이미지 클릭
	$("#event> div> div").click(function(){
		const x = $(this).children("img").attr("src");		
		const y = x.substr(-4);// ".jpg" 또는 ".png"...	
		const z = x.slice(0,-4);//예_ "images/event-1"부분
		const zz = z + "_big" + y;
		$("#popup img").attr("src" , zz);
		const txt = $(this).children("img").attr("alt");				
		$("#popup img").attr("alt", txt);  //alt속성값 부여
		$("#popup h3").text( txt ); //h3안 콘텐츠 텍스트 부여
		$("#popup").delay(100).fadeIn();
		$("body").css("overflow","hidden");		
	});
	//팝업 큰이미지 닫기
	$("#popup img").click(function(){
		$("#popup").fadeOut();
		$("body").css("overflow","auto");
	});
	
	//상단 메뉴 부드럽게 이동
	$("nav a, #top a").click(function(){
		//큰화면에서만, 부드럽게 스크롤이동
		if( $(window).width() > 768 ){
			$("html,body").stop().animate({scrollTop : $(this.hash).offset().top });
		}
		//상단 메뉴 - 활성화 유지 (색변경)
		if( $("nav a") ){
			$(this).addClass("active").siblings().removeClass("active");
		}
	});
	
	//상단 한글자씩 나오는 기능 (타자치는 효과)
	const typing = "Hi ~ I'm EunBin. \n This is my portfolio :)"
	console.log(typing);
	//$("h1").html( typing[4]  );  "요"
	let i = 0; 
	let txt = "";
	function type(){
		if( i < typing.length ){			
			txt += typing[i];
			document.getElementById("typing").innerText = txt;
			i++;
			setTimeout( type, 150 );
		}
	}
	type();
	
	//휴대폰에서는 상단 배경색 보임
	if( $(window).width()<= 600 ){
		$("nav").addClass("act");
	} else{	//휴대폰 아닐때
		//화면 스크롤시 상단 배경색 생김
		$(window).scroll(function(){
			if( $(window).scrollTop() > 100 ){
				$("nav").addClass("act");
			} else {
				$("nav").removeClass("act");
			}
		});
	}
	
	//((모바일이 아닌 화면))스크롤을 내릴때마다 작품이 하나씩 보임
	if( $(window).width()> 600 ){
		$(window).scroll(function(){
			if( $(window).scrollTop()>1600 ){
				$("#portfolio> section").eq(0).addClass("act");
			}
			if( $(window).scrollTop()>2500 ){
				$("#portfolio> section").eq(1).addClass("act");
			}
			if( $(window).scrollTop()>3400 ){
				$("#portfolio> section").eq(2).addClass("act");
			}
			if( $(window).scrollTop()>4300 ){
				$("#portfolio> section").eq(3).addClass("act");
			}
			if( $(window).scrollTop()>5200 ){
				$("#portfolio> section").eq(4).addClass("act");
			}
			if( $(window).scrollTop()>6100 ){
				$("#portfolio> section").eq(5).addClass("act");
			}
			if( $(window).scrollTop()>7000 ){
				$("#portfolio> section").eq(6).addClass("act");
			}
			if( $(window).scrollTop()>7900 ){
				$("#portfolio> section").eq(7).addClass("act");
			}
			if( $(window).scrollTop()>8800 ){
				$("#portfolio> section").eq(8).addClass("act");
			}
			if( $(window).scrollTop()>9700 ){
				$("#portfolio> section").eq(9).addClass("act");
			}
			if( $(window).scrollTop()>10600 ){
				$("#portfolio> section").eq(10).addClass("act");
			}
			if( $(window).scrollTop()>11500 ){
				$("#portfolio> section").eq(11).addClass("act");
			}
		});		
	}
	
});//끝









