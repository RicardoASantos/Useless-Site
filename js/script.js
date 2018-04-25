$(document).ready(function() {


	var n = Math.floor(Math.random() * 2)+1

	$('#ani1 video').attr('src','vids/ani' + n + '.mp4');	


	$('#txt h2').click(function(){
		
		$('#txt h2').animate({opacity:'0'},200, function(){
			
			$('#txt h2').css({display:'none'});
				
		});
		
		setTimeout(function() {
			  	
				$('#txt h1').text("I'M USELES");	
		
		  }, 100);
		  
		setTimeout(function() {
			  
				$('#txt h1').text("I'M USELE");	
		
		  }, 200);		  

		setTimeout(function() {
			  
				$('#txt h1').text("I'M USEL");	
		
		  }, 300);
		  
		setTimeout(function() {
			  
				$('#txt h1').text("I'M USE");	
		
		  }, 400);
		  
		setTimeout(function() {
			  
				$('#txt h1').text("I'M US");	
		
		  }, 500);
		  
		setTimeout(function() {
			  
				$('#txt h1').text("I'M U");	
		
		  }, 600);		  

		setTimeout(function() {
			  
				$('#txt h1').text("I'M ");	
		
		  }, 700);
		  
		setTimeout(function() {
			  
				$('#txt h1').text("I'M");	
		
		  }, 800);
		  
		setTimeout(function() {
			  
				$('#txt h1').text("I'");	
		
		  }, 900);
		  
		setTimeout(function() {
			  
				$('#txt h1').text("I");	
		
		  }, 1000);	
		  
		setTimeout(function() {
			  
				$('#txt h1').text("Y");	
		
		  }, 1100);	
		  
		setTimeout(function() {
			  
				$('#txt h1').text("YE");	
		
		  }, 1200);
		  
		setTimeout(function() {
			  
				$('#txt h1').text("YES");	
		
		  }, 1300);
		  
		setTimeout(function() {
			  
				$('#txt h1').text("YES I");	
		
		  }, 1400);
		  
		setTimeout(function() {
			  
				$('#txt h1').text("YES I ");	
		
		  }, 1500);
		  
		setTimeout(function() {
			  
				$('#txt h1').text("YES I A");	
		
		  }, 1600);	
		  
		setTimeout(function() {
			  
				$('#txt h1').text("YES I AM");	
		
		  }, 1700);	
		  
		 setTimeout(function() {
			  
				$('#txt h1').text("YES I A");	
		
		  }, 4000);
		  
		setTimeout(function() {
			  
				$('#txt h1').text("YES I ");	
		
		  }, 4050);	
		  
		setTimeout(function() {
			  
				$('#txt h1').text("YES I");	
		
		  }, 4100);
		  
		setTimeout(function() {
			  
				$('#txt h1').text("YES ");	
		
		  }, 4150);
		  
		setTimeout(function() {
			  
				$('#txt h1').text("YES");	
		
		  }, 4200);
		  
		setTimeout(function() {
			  
				$('#txt h1').text("YE");	
		
		  }, 4250);
		  
		setTimeout(function() {
			  
				$('#txt h1').text("Y");	
		
		  }, 4300);	
		  
		setTimeout(function() {
			  
				$('#txt h1').text("I");	
		
		  }, 4350);
		  
		setTimeout(function() {
			  
				$('#txt h1').text("I'");	
		
		  }, 4400);		  
		  
		setTimeout(function() {
			  
				$('#txt h1').text("I'M");	
		
		  }, 4450);		  

		setTimeout(function() {
			  
				$('#txt h1').text("I'M ");	
		
		  }, 4500);

		setTimeout(function() {
			  
				$('#txt h1').text("I'M U");	
		
		  }, 4550);

		setTimeout(function() {
			  
				$('#txt h1').text("I'M US");	
		
		  }, 4600);
		 
		setTimeout(function() {
			  
				$('#txt h1').text("I'M USE");	
		
		  }, 4650);		 
		 
		setTimeout(function() {
			  
				$('#txt h1').text("I'M USEL");	
		
		  }, 4700);		 
		 
		setTimeout(function() {
			  
				$('#txt h1').text("I'M USELE");	
		
		  }, 4750);		 

		setTimeout(function() {
			  
				$('#txt h1').text("I'M USELES");	
		
		  }, 4800);

		setTimeout(function() {
			  
				$('#txt h1').text("I'M USELESS");	
		
		  }, 4850);
		  		   	
		setTimeout(function() {
			
			$('#txt h2').css({opacity:'0'});
			$('#txt h2').css({display:'block'});
			$('#txt h2').animate({opacity:'1'},200);
			
		  }, 5200);					
						    	  			
	});
	
	var video = document.getElementById('video');
	video.play();
	
});