var Utils = {
	loadJavascriptFile: function(url) {
		$.ajax({
			url: url,
			dataType: 'script',
			async: false
		});
	},
	
	initAjax: function() {
		$.ajaxSetup({
			type: 'post',
			dataType: 'json',
			cache: false,
			async: false,
			success: function(response) {
				if(response.errorCode === 101) {
					if(self == top) {
						Portal.LoginWindow.open();
					}
					else {
						window.parent.location = '/index.php/Portal/portal';
					}
				}
				else if(response.errorCode > 0) {
					$.messager.alert(messageWindowTitle, response.errorMessage, 'error');
				}
			},
			error: function() {
				$.messager.alert(messageWindowTitle, networkErrorMessage, 'error');
			}
		});
	},
	
	dataGridLoadFilter: function(response) {
		if(response.errorCode === 0) {
			return response.data;
		}
		else {
			$.messager.alert(messageWindowTitle, response.errorMessage, 'error');
		}
	},
	
	dataGridValidateCheckedRow: function(checkedRows, allowMulti) {
		if(checkedRows.length === 0) {
			$.messager.alert(messageWindowTitle, dataGridValidateCheckedRowErrorInfo1, 'error');
			return false;
		}
		
		if(allowMulti === false && checkedRows.length > 1) {
			$.messager.alert(messageWindowTitle, dataGridValidateCheckedRowErrorInfo2, 'error');
			return false;
		}
		
		return true;
	},
	
	dateFormatter: function(date) {
		var year = date.getFullYear();
		var month = date.getMonth() + 1;
		var day = date.getDate();
		
		if(month < 10) {
			month = '0' + month;
		}
		
		if(day < 10) {
			day = '0' + day;
		}
		
		return year + '-' + month + '-' + day;
	},
	
	datetimeFormatter: function(datetime) {
		var year = datetime.getFullYear();
		var month = datetime.getMonth() + 1;
		var day = datetime.getDate();
		var hour = datetime.getHours();
		var minute = datetime.getMinutes();
		var second = datetime.getSeconds();
		
		if(month < 10) {
			month = '0' + month;
		}
		
		if(day < 10) {
			day = '0' + day;
		}
		
		if(hour < 10) {
			hour = '0' + hour;
		}
		
		if(minute < 10) {
			minute = '0' + minute;
		}
		
		if(second < 10) {
			second = '0' + second;
		}
		
		return year + '-' + month + '-' + day + ' ' + hour + ':' + minute + ':' + second;
	},
}