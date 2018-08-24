var Language = {
	getCurrLanguage: function() {
		language = '';
		
		$.ajax({
			url: '/index.php/Language/manage/getCurrLanguage',
			type: 'post',
			dataType: 'json',
			async: false
		})
		.done(function(response){
			if(response.errorCode === 0) {
				language = response.data.languageFlag;
			}
		});
		
		if(language === '') {
			language = 'chinese';
		}
	}
}