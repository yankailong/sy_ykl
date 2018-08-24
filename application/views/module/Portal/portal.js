   var Portal = {
	init: function() {
		Language.getCurrLanguage();
		Utils.loadJavascriptFile('/application/views/libraries/component/' + language + '.js');
		Utils.loadJavascriptFile('/application/views/libraries/utils/' + language + '.js');
		Utils.loadJavascriptFile('/application/views/module/Portal/' + language + '.js');
		Utils.initAjax();
		this.LoginWindow.init();
		this.ModifyPasswordWindow.init();
                this.LockSelectWindow.init();
		this.View.init();
	},
	
	View: {
		languageComboLabelContainer: '',
		languageComboInputContainer: '',
		
		init: function() {
			this.languageComboLabelContainer = $('#northPanel #languageComboboxLabel');
			this.languageComboInputContainer = $('#northPanel #languageComboboxInput');
			
			this.showCurrUserInfo();
			this.checkPassword();
			this.CenterPanel.init();
			this.MenuPanel.init();
			Component.Combobox.Language.create(this.languageComboLabelContainer, this.languageComboInputContainer);
		},
		
		CenterPanel: {
			tabPanelContainer: '',
			
			init: function() {
				this.tabPanelContainer = $('#centerPanel #tabPanel');
				this.create();
			},
			
			create: function() {
				var height = this.tabPanelContainer.parent().height();
				this.tabPanelContainer.tabs({
					height: height,
					border: false,
				});
			},
		},
		
		MenuPanel: {
			tabPanelContainer: '',
			menuPanelContainer: '',
			
			init: function() {
				this.tabPanelContainer = $('#centerPanel #tabPanel');
				this.menuPanelContainer = $('#westPanel  #menuPanel');
				this.create();
			},
			
			create: function() {
				var menuData = [];
				$.ajax({
					url: '/index.php/Menu/manage/getMenu',
				})
				.done(function(response) {
					if(response.errorCode === 0) {
						menuData = response.data;
					}
				})
				this.menuPanelContainer.tree({
					data: menuData,
					onClick: function(node) {
						if(node.url) {
							if($('#centerPanel #tabPanel').tabs('exists', node.text)) {
								$('#centerPanel #tabPanel').tabs('select', node.text);
							}
							else {
								iframeHeight = $('#centerPanel #tabPanel').height() - 33;
								var content = '<iframe scrolling="none" frameborder="0" src="' + node.url +'" style="width:100%; height: ' + iframeHeight +'px"></iframe>';
								$('#centerPanel #tabPanel').tabs(
									'add',
									{
										id: node.id,
										title: node.text,
										content: content,
										closable: true,
									}
								);
							}
						}
					}
				});
                                
                                
			}
		},
		
		showCurrUserInfo: function() {
			$.ajax({
				url: '/index.php/User/manage/getCurrUserInfo',
				context: Portal.LoginWindow,
			})
			.done(function(response) {
				if(response.errorCode === 0){
					var html = '&nbsp;&nbsp;您好：' + response.data.name;
					html = html + '&nbsp;&nbsp;&nbsp;&nbsp;';
					html = html + '<input type="button" value="' + portalViewModifyPasswordText + '" onclick="Portal.ModifyPasswordWindow.open()" /> ';
					html = html + '&nbsp;&nbsp;&nbsp;&nbsp;';
					html = html + '<input type="button" value="'+ portalViewLogoutText + '"onclick="Portal.View.doLogout()"/>';
                                        html = html + '&nbsp;&nbsp;&nbsp;&nbsp;';
					html = html + '<input type="button" value="'+ portalViewLockSelectText + '"onclick="Portal.LockSelectWindow.open()"/>';
					$('#northPanel #userInfo')[0].innerHTML = html;
				}
			}) 
		},
		
		checkPassword: function() {
			$.ajax({
				url: '/index.php/User/manage/checkPassword',
				context: Portal.ModifyPasswordWindow,
			})
			.done(function(response) {
				if(response.errorCode === 0 && response.data.defaultPassword === true) {
					this.modifyPasswordWindowContainer.window({
						closable: false
					});
					this.open();
				}
			})
		},
		
		doLogout: function() {
			$.ajax({
				url: '/index.php/User/manage/logout'
			})
			.done(function(response) {
				if(response.errorCode === 0) {
					window.location = '/index.php/Portal/portal';
				}
			})
		},
	},
	
	LoginWindow: {
		loginWindowContainer: '',
		usernameLabelContainer: '',
		usernameInputContainer: '',
		passwordLabelContainer: '',
		passwordInputContainer: '',
		languageComboboxLabelContainer: '',
		languageComboboxInputContainer: '',
		submitButtonContainer: '',
		resetButtonContainer: '',
		
		init: function() {
			this.loginWindowContainer = $('#loginWindow');
			this.usernameLabelContainer = $('#loginWindow #usernameValidateboxLabel');
			this.usernameInputContainer = $('#loginWindow #usernameValidateboxInput');
			this.passwordLabelContainer = $('#loginWindow #passwordValidateboxLabel');
			this.passwordInputContainer = $('#loginWindow #passwordValidateboxInput');
			this.languageComboboxLabelContainer = $('#loginWindow #languageComboboxLabel');
			this.languageComboboxInputContainer = $('#loginWindow #languageComboboxInput');
			this.submitButtonContainer = $('#loginWindow #submitButton');
			this.resetButtonContainer = $('#loginWindow #resetButton');
			
			this.create();
		},
		
		create: function() {
			this.loginWindowContainer.window({
				title: portalLoginWindowTitle,
				collapsible: false,
				minimizable: false,
				maximizable: false,
				closable: false,
				closed: true,
				modal: true,
			});
			
			Component.Validatebox.Username.create(this.usernameLabelContainer, this.usernameInputContainer);
			Component.Validatebox.Password.create(this.passwordLabelContainer, this.passwordInputContainer);
			Component.Combobox.Language.create(this.languageComboboxLabelContainer, this.languageComboboxInputContainer);
			this.submitButtonContainer.linkbutton({
				iconCls: 'icon-ok',
				text: portalLoginWindowSubmitButtonText,
			});
			this.submitButtonContainer.bind('click', this.doSubmit.bind(this));
			this.resetButtonContainer.linkbutton({
				iconCls: 'icon-undo',
				text: portalLoginWindowResetButtonText,
			});
			this.resetButtonContainer.bind('click', this.doReset.bind(this));
		},
		
		open: function() {
			this.loginWindowContainer.window('open');
		},
		
		doSubmit: function() {
			var username = this.usernameInputContainer[0].value;
			var password = this.passwordInputContainer[0].value;
			
			$.ajax({
				url: '/index.php/User/manage/login',
				data: {
					username: username,
					password: password
				}
			})
			.done(function(response) {
				if(response.errorCode === 0) {
					window.location = '/index.php/Portal/portal';
				}
			})
		},
		
		doReset: function() {
			this.usernameInputContainer[0].value = '';
			this.passwordInputContainer[0].value = '';
		},
	},
	
	
	ModifyPasswordWindow: {
		modifyPasswordWindowContainer: '',
		passwordValidateLabelContainer: '',
		passwordValidateInputContainer: '',
		newPasswordValidateLabelContainer: '',
		newPasswordValidateInputContainer: '',
		confirmPasswordValidateLabelContainer: '',
		confirmPasswordValidateInputContainer: '',
		submitButtonContainer: '',
		resetButtonContainer: '',
		
		init: function() {
			this.modifyPasswordWindowContainer = $('#modifyPasswordWindow');
			this.passwordValidateLabelContainer = $('#modifyPasswordWindow #passwordValidateboxLabel');
			this.passwordValidateInputContainer = $('#modifyPasswordWindow #passwordValidateboxInput');
			this.newPasswordValidateLabelContainer = $('#modifyPasswordWindow #newPasswordValidateboxLabel');
			this.newPasswordValidateInputContainer = $('#modifyPasswordWindow #newPasswordValidateboxInput');
			this.confirmPasswordValidateLabelContainer = $('#modifyPasswordWindow #confirmPasswordValidateboxLabel');
			this.confirmPasswordValidateInputContainer = $('#modifyPasswordWindow #confirmPasswordValidateboxInput');
			this.submitButtonContainer = $('#modifyPasswordWindow #submitButton');
			this.resetButtonContainer = $('#modifyPasswordWindow #resetButton');
			
			this.create();
		},
		
		create: function() {
			this.modifyPasswordWindowContainer.window({
				title: portalModifyPasswordWindowTitle,
				collapsible: false,
				minimizable: false,
				maximizable: false,
				closable: true,
				closed: true,
				modal: true,
			});
			Component.Validatebox.Password.create(this.passwordValidateLabelContainer, this.passwordValidateInputContainer);
			Component.Validatebox.NewPassword.create(this.newPasswordValidateLabelContainer, this.newPasswordValidateInputContainer);
			Component.Validatebox.ConfirmPassword.create(this.confirmPasswordValidateLabelContainer, this.confirmPasswordValidateInputContainer);
			this.submitButtonContainer.linkbutton({
				iconCls: 'icon-ok',
				text: portalModifyPasswordWindowSubmitButtonText,
			});
			this.submitButtonContainer.bind('click', this.doSubmit.bind(this));
			this.resetButtonContainer.linkbutton({
				iconCls: 'icon-undo',
				text: portalModifyPasswordWindowResetButtonText,
			});
			this.resetButtonContainer.bind('click', this.doReset.bind(this));
		},
		
		open: function() {
			this.doReset();
			this.modifyPasswordWindowContainer.window('open');
		},
		
		doSubmit: function() {
			var password = this.passwordValidateInputContainer[0].value;
			var newPassword = this.newPasswordValidateInputContainer[0].value;
			var confirmPassword = this.confirmPasswordValidateInputContainer[0].value;
			
			$.ajax({
				url: '/index.php/User/manage/modifyPassword',
				data: {
					password: password,
					newPassword: newPassword,
					confirmPassword: confirmPassword
				}
			})
			.done(function(response) {
				if(response.errorCode === 0) {
					window.location = '/index.php/Portal/portal';
				}
			})
		},
		
		doReset: function() {
			this.passwordValidateInputContainer[0].value = '';
			this.newPasswordValidateInputContainer[0].value = '';
			this.confirmPasswordValidateInputContainer[0].value = '';
		}
	},
        LockSelectWindow: {
		lockSelectWindowContainer: '',
		operatorIdComboboxLabelContainer: '',
		operatorIdComboboxInputContainer: '',
		areaNumCombogridLabelContainer: '',
		areaNumCombogridInputContainer: '',
		startDateboxLabelContainer: '',
		startDateboxInputContainer: '',
                endDateboxLabelContainer: '',
		endDateboxInputContainer: '',
		submitButtonContainer: '',
		resetButtonContainer: '',
		
		init: function() {
			Portal.LockSelectWindow.lockSelectWindowContainer = $('#lockSelectWindow');
			Portal.LockSelectWindow.operatorIdComboboxLabelContainer = $('#lockSelectWindow #operatorIdComboboxLabel');
			Portal.LockSelectWindow.operatorIdComboboxInputContainer = $('#lockSelectWindow #operatorIdComboboxInput');
			Portal.LockSelectWindow.areaNumCombogridLabelContainer = $('#lockSelectWindow #areaNumCombogridLabel');
			Portal.LockSelectWindow.areaNumCombogridInputContainer = $('#lockSelectWindow #areaNumCombogridInput');
			Portal.LockSelectWindow.startDateboxLabelContainer = $('#lockSelectWindow #startDateboxLabel');
			Portal.LockSelectWindow.startDateboxInputContainer = $('#lockSelectWindow #startDateboxInput');
                        Portal.LockSelectWindow.endDateboxLabelContainer = $('#lockSelectWindow #endDateboxLabel');
			Portal.LockSelectWindow.endDateboxInputContainer = $('#lockSelectWindow #endDateboxInput');
			Portal.LockSelectWindow.submitButtonContainer = $('#lockSelectWindow #submitButton');
			Portal.LockSelectWindow.resetButtonContainer = $('#lockSelectWindow #resetButton');
			
			this.create();
		},
		
		create: function() {
			Portal.LockSelectWindow.lockSelectWindowContainer.window({
				title: portalLockSelectWindowTitle,
				collapsible: false,
				minimizable: false,
				maximizable: false,
				closable: true,
				closed: true,
				modal: true,
			});
			Component.Combobox.OperatorId.create(Portal.LockSelectWindow.operatorIdComboboxLabelContainer, Portal.LockSelectWindow.operatorIdComboboxInputContainer);
			Component.Combogrid.AreaNum.create(Portal.LockSelectWindow.areaNumCombogridLabelContainer, Portal.LockSelectWindow.areaNumCombogridInputContainer);
			Component.Datebox.Start.create(Portal.LockSelectWindow.startDateboxLabelContainer, Portal.LockSelectWindow.startDateboxInputContainer);
                        Component.Datebox.End.create(Portal.LockSelectWindow.endDateboxLabelContainer, Portal.LockSelectWindow.endDateboxInputContainer);
			Portal.LockSelectWindow.submitButtonContainer.linkbutton({
				iconCls: 'icon-ok',
				text: portalLockSelectWindowSubmitButtonText,
			});
			Portal.LockSelectWindow.submitButtonContainer.bind('click', Portal.LockSelectWindow.doSubmit);
			Portal.LockSelectWindow.resetButtonContainer.linkbutton({
				iconCls: 'icon-undo',
				text: portalLockSelectWindowResetButtonText,
			});
			Portal.LockSelectWindow.resetButtonContainer.bind('click', Portal.LockSelectWindow.doReset);
		},
		
		open: function() {
			Portal.LockSelectWindow.lockSelectWindowContainer.window('open');
                          $.ajax({
                                  url: '/index.php/User/manage/getCurrSelectInfo',
                          })
                          .done(function(response) {
                                  if(response.data.operatorId!=false) {
                                      Portal.LockSelectWindow.operatorIdComboboxInputContainer.combobox('select',response.data.operatorId);
                                      Portal.LockSelectWindow.areaNumCombogridInputContainer.combogrid('setValue',response.data.gameAreaId);
                                      Portal.LockSelectWindow.startDateboxInputContainer.datebox('setValue',response.data.startDate);
                                      Portal.LockSelectWindow.endDateboxInputContainer.datebox('setValue',response.data.endDate);
                                  }
                          })
		},
		close:function() {
                        Portal.LockSelectWindow.lockSelectWindowContainer.window('close');
                },
		doSubmit: function() {
			var operatorId = Portal.LockSelectWindow.operatorIdComboboxInputContainer.combobox('getValue');
			var gameAreaId = Portal.LockSelectWindow.areaNumCombogridInputContainer.combogrid('getValues').toString();
			var startDate = Portal.LockSelectWindow.startDateboxInputContainer.datebox('getValue');
                        var endDate = Portal.LockSelectWindow.endDateboxInputContainer.datebox('getValue');
//                        document.cookie="operatorId="+escape(operatorId);
//                        document.cookie="gameAreaId="+escape(gameAreaId);
//                        document.cookie="startDate="+escape(startDate);
//                        document.cookie="endDate="+escape(endDate);
                        $.ajax({
				url: '/index.php/User/manage/select',
				data: {
					operatorId: operatorId,
					gameAreaId: gameAreaId,
					startDate: startDate,
                                        endDate: endDate
				}
			})
			.done(function(response) {
				if(response.errorCode === 0) {
					Portal.LockSelectWindow.close();
				}
			})
                        
		},
		
		doReset: function() {
			Portal.LockSelectWindow.operatorIdComboboxInputContainer.combobox('reset');
			Portal.LockSelectWindow.areaNumCombogridInputContainer.combogrid('reset');
			Portal.LockSelectWindow.startDateboxInputContainer.datebox('reset');
                        Portal.LockSelectWindow.endDateboxInputContainer.datebox('reset');
		}
	},
}