/*$(window).click(function(){
	
	$.post('/api/register',{
		username: 'kosmas',
		password: '31248234'
	}).success(function(response){
		
		$('body').append(response);
		
	});
	
});*/

$(window).click(function(){
	
	$.post('/api/login',{
		username: 'kosmas',
		password: '31248234'
	}).success(function(response){
		
		$('body').append(response);
		
	});
	
});