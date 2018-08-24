var User = {
	Manage: {
		addWindowContainer: '',
		modifyWindowContainer: '',
		menuPrivilegeWindowContainer: '',
		operatorPrivilegeWindowContainer: '',
		
		init: function() {
			Language.getCurrLanguage();
			Utils.loadJavascriptFile('/application/views/libraries/component/' + language + '.js');
			Utils.loadJavascriptFile('/application/views/libraries/utils/' + language + '.js');
			Utils.loadJavascriptFile('/application/views/module/User/' + language + '.js');
			Utils.initAjax();
			
			User.Manage.View.init();
			User.Manage.addWindowContainer = $('#addWindow');
			User.Manage.AddWindow.init();
			User.Manage.modifyWindowContainer = $('#modifyWindow');
			User.Manage.ModifyWindow.init();
			User.Manage.menuPrivilegeWindowContainer = $('#menuPrivilegeWindow');
			User.Manage.MenuPrivilegeWindow.init();
			User.Manage.operatorPrivilegeWindowContainer = $('#operatorPrivilegeWindow');
			User.Manage.OperatorPrivilegeWindow.init();
		},
		
		View: {
			dataGridPanelContainer: '',
			
			init: function() {
				User.Manage.View.dataGridPanelContainer = $('#dataGridPanel #dataGrid');
				User.Manage.View.DataGrid.init();
			},
			
			DataGrid: {
				init: function() {
					User.Manage.View.DataGrid.create();
				},
				
				create: function() {
					var width = $(document).width() - 40;
					var height = $(document).height() - 40;
					User.Manage.View.dataGridPanelContainer.width(width);
					User.Manage.View.dataGridPanelContainer.height(height);
					User.Manage.View.dataGridPanelContainer.datagrid({
						url: '/index.php/User/manage/getListData',
						idField: "userId",
						toolbar: [
							{
								iconCls: 'icon-add',
								text: userManageViewDataGridToolbarButtonText1,
								handler: User.Manage.AddWindow.open,
							},
							{
								iconCls: 'icon-edit',
								text: userManageViewDataGridToolbarButtonText2,
								handler: User.Manage.ModifyWindow.open,
								
							},
							{
								iconCls: 'icon-edit',
								text: userManageViewDataGridToolbarButtonText3,
								handler: User.Manage.View.doResetPassword,
							},
							{
								iconCls: 'icon-edit',
								text: userManageViewDataGridToolbarButtonText4,
								handler: User.Manage.MenuPrivilegeWindow.open,
							},
							{
								iconCls: 'icon-edit',
								text: userManageViewDataGridToolbarButtonText5,
								handler: User.Manage.OperatorPrivilegeWindow.open,
							},
						],
						columns: [[
							{
								checkbox: true
							},
							{
								field: 'username',
								title: userManageViewDataGridColumnTitle1,
								width: 100
							},
							{
								field: 'name',
								title: userManageViewDataGridColumnTitle2,
								width: 100
							},
							{
								field: 'status',
								title: userManageViewDataGridColumnTitle3,
								width: 60,
								formatter: function(value) {
									if(value === '1') {
										return userStatusValue1;
									}
									else if(value === '2') {
										return userStatusValue2;
									}
									else {
										return value;
									}
								}
							},
						]],
						loadFilter: Utils.dataGridLoadFilter,
						pagination: true,
						pageSize: 50,
						pageList: [50, 100, 150, 200],
					})
				},
				
				load: function() {
					User.Manage.View.dataGridPanelContainer.datagrid('reload');
				},
				
				getCheckedRows: function(allowMulti) {
					var allowMulti = arguments[0] ? arguments[0] : false;
					var checkedRow = User.Manage.View.dataGridPanelContainer.datagrid('getChecked');
					
					if(Utils.dataGridValidateCheckedRow(checkedRow, allowMulti) === true) {
						return checkedRow;
					}
					else {
						return false;
					}
				},
			},
			
			doResetPassword: function() {
				var checkedRow = User.Manage.View.DataGrid.getCheckedRows();
				
				if(checkedRow != false) {
					$.ajax({
						url: '/index.php/User/manage/resetPassword',
						data: {
							userId: checkedRow[0].userId,
						}
					})
					.done(function(response){
						if(response.errorCode === 0) {
							$.messager.alert(messageWindowTitle, userManageViewDoResetPasswordSuccessInfo, 'info');
						}
					})
				}
			},
		},
		
		AddWindow: {
			usernameValidateboxLabelContainer: '',
			usernameValidateboxInputContainer: '',
			nameValidateboxLabelContainer: '',
			nameValidateboxInputContainer: '',
			submitButtonContainer: '',
			resetButtonContainer: '',
			
			init: function() {
				User.Manage.AddWindow.usernameValidateboxLabelContainer = $('#addWindow #usernameValidateboxLabel');
				User.Manage.AddWindow.usernameValidateboxInputContainer = $('#addWindow #usernameValidateboxInput');
				User.Manage.AddWindow.nameValidateboxLabelContainer = $('#addWindow #nameValidateboxLabel');
				User.Manage.AddWindow.nameValidateboxInputContainer = $('#addWindow #nameValidateboxInput');
				User.Manage.AddWindow.submitButtonContainer = $('#addWindow #submitButton');
				User.Manage.AddWindow.resetButtonContainer = $('#addWindow #resetButton');
				User.Manage.AddWindow.create();
			},
			
			create: function() {
				User.Manage.addWindowContainer.window({
					title: userManageAddWindowTitle,
					collapsible: false,
					minimizable: false,
					maximizable: false,
					closable: true,
					closed: true,
					modal: true,
				});
				Component.Validatebox.Username.create(
					User.Manage.AddWindow.usernameValidateboxLabelContainer,
					User.Manage.AddWindow.usernameValidateboxInputContainer
				);
				Component.Validatebox.Name.create(
					User.Manage.AddWindow.nameValidateboxLabelContainer,
					User.Manage.AddWindow.nameValidateboxInputContainer
				);
				User.Manage.AddWindow.submitButtonContainer.linkbutton({
					iconCls: 'icon-ok',
					text: userManageAddWindowSubmitButtonText,
				});
				User.Manage.AddWindow.submitButtonContainer.bind(
					'click',
					User.Manage.AddWindow.doSubmit
				);
				User.Manage.AddWindow.resetButtonContainer.linkbutton({
					iconCls: 'icon-undo',
					text: userManageAddWindowResetButtonText,
				})
				User.Manage.AddWindow.resetButtonContainer.bind(
					'click',
					User.Manage.AddWindow.doReset
				);
			},
			
			open: function() {
				User.Manage.addWindowContainer.window('open');
			},
			
			doSubmit: function() {
				username = User.Manage.AddWindow.usernameValidateboxInputContainer[0].value;
				name = User.Manage.AddWindow.nameValidateboxInputContainer[0].value;
				
				$.ajax({
					url: '/index.php/User/manage/add',
					data: {
						username: username,
						name: name
					}
				})
				.done(function(response) {
					if(response.errorCode === 0) {
						$.messager.alert(messageWindowTitle, userManageAddWindowSubmitSuccessInfo, 'info');
						User.Manage.AddWindow.doReset();
						User.Manage.View.DataGrid.load();
					}
				})
			},
			
			doReset: function() {
				User.Manage.AddWindow.usernameValidateboxInputContainer[0].value = '';
				User.Manage.AddWindow.nameValidateboxInputContainer[0].value = '';
			},
		},
		
		
		ModifyWindow: {
			usernameValidateboxLabelContainer: '',
			usernameValidateboxInputContainer: '',
			nameValidateboxLabelContainer: '',
			nameValidateboxInputContainer: '',
			userStatusComboboxLabelContainer: '',
			userStatusComboboxInputContainer: '',
			submitButtonContainer: '',
			resetButtonContainer: '',
			
			init: function() {
				User.Manage.ModifyWindow.usernameValidateboxLabelContainer = $('#modifyWindow #usernameValidateboxLabel');
				User.Manage.ModifyWindow.usernameValidateboxInputContainer = $('#modifyWindow #usernameValidateboxInput');
				User.Manage.ModifyWindow.nameValidateboxLabelContainer = $('#modifyWindow #nameValidateboxLabel');
				User.Manage.ModifyWindow.nameValidateboxInputContainer = $('#modifyWindow #nameValidateboxInput');
				User.Manage.ModifyWindow.userStatusComboboxLabelContainer = $('#modifyWindow #userStatusComboboxLabel');
				User.Manage.ModifyWindow.userStatusComboboxInputContainer = $('#modifyWindow #userStatusComboboxInput');
				User.Manage.ModifyWindow.submitButtonContainer = $('#modifyWindow #submitButton');
				User.Manage.ModifyWindow.resetButtonContainer = $('#modifyWindow #resetButton');
				User.Manage.ModifyWindow.create();
			},
			
			create: function() {
				User.Manage.modifyWindowContainer.window({
					title: userManageModifyWindowTitle,
					collapsible: false,
					minimizable: false,
					maximizable: false,
					closable: true,
					closed: true,
					modal: true,
				});
				Component.Validatebox.Username.create(
					User.Manage.ModifyWindow.usernameValidateboxLabelContainer,
					User.Manage.ModifyWindow.usernameValidateboxInputContainer
				);
				Component.Validatebox.Name.create(
					User.Manage.ModifyWindow.nameValidateboxLabelContainer,
					User.Manage.ModifyWindow.nameValidateboxInputContainer
				);
				Component.Combobox.UserStatus.create(
					User.Manage.ModifyWindow.userStatusComboboxLabelContainer,
					User.Manage.ModifyWindow.userStatusComboboxInputContainer
				);
				User.Manage.ModifyWindow.submitButtonContainer.linkbutton({
					iconCls: 'icon-ok',
					text: userManageModifyWindowSubmitButtonText,
				});
				User.Manage.ModifyWindow.submitButtonContainer.bind(
					'click',
					User.Manage.ModifyWindow.doSubmit
				);
				User.Manage.ModifyWindow.resetButtonContainer.linkbutton({
					iconCls: 'icon-undo',
					text: userManageModifyWindowResetButtonText,
				})
				User.Manage.ModifyWindow.resetButtonContainer.bind(
					'click',
					User.Manage.ModifyWindow.doReset
				);
				
			},
			
			open: function() {
				var checkedRow = User.Manage.View.DataGrid.getCheckedRows();
				
				if( checkedRow != false) {
					User.Manage.ModifyWindow.usernameValidateboxInputContainer[0].value = checkedRow[0].username;
					User.Manage.ModifyWindow.nameValidateboxInputContainer[0].value = checkedRow[0].name;
					User.Manage.ModifyWindow.userStatusComboboxInputContainer.combobox('setValue', checkedRow[0].status);
					User.Manage.modifyWindowContainer.window('open');
				}
			},
			
			close: function() {
				User.Manage.modifyWindowContainer.window('close');
			},
			
			doSubmit: function() {
				var checkedRow = User.Manage.View.DataGrid.getCheckedRows();
			
				$.ajax({
					url: '/index.php/User/manage/modify',
					data: {
						userId: checkedRow[0].userId,
						username: User.Manage.ModifyWindow.usernameValidateboxInputContainer[0].value,
						name: User.Manage.ModifyWindow.nameValidateboxInputContainer[0].value,
						status: User.Manage.ModifyWindow.userStatusComboboxInputContainer.combobox('getValue'),
					}
				})
				.done(function(response){
					if(response.errorCode === 0) {
						$.messager.alert(messageWindowTitle, userManageModifyWindowSubmitSuccessInfo, 'info');
						User.Manage.ModifyWindow.close();
						User.Manage.View.DataGrid.load();
					}
				})
			},
			
			doReset: function() {
				var checkedRow = User.Manage.View.DataGrid.getCheckedRows();
				User.Manage.ModifyWindow.usernameValidateboxInputContainer[0].value = checkedRow[0].username;
				User.Manage.ModifyWindow.nameValidateboxInputContainer[0].value = checkedRow[0].name;
				User.Manage.ModifyWindow.userStatusComboboxInputContainer.combobox('setValue', checkedRow[0].status);
			},
		},
		
		MenuPrivilegeWindow: {
			menuPrivilegeTreeContainer: '',
			submitButtonContainer: '',
			resetButtonContainer: '',
			
			init: function() {
				User.Manage.MenuPrivilegeWindow.menuPrivilegeTreeContainer = $('#menuPrivilegeWindow #menuPrivilegeTree');
				User.Manage.MenuPrivilegeWindow.submitButtonContainer = $('#menuPrivilegeWindow #submitButton');
				User.Manage.MenuPrivilegeWindow.resetButtonContainer = $('#menuPrivilegeWindow #resetButton');
				User.Manage.MenuPrivilegeWindow.create();
			},
			
			create: function() {
				User.Manage.menuPrivilegeWindowContainer.window({
					title: userManageMenuPrivilegeWindowTitle,
					width: 250,
					height: 500,
					collapsible: false,
					minimizable: false,
					maximizable: false,
					closable: true,
					closed: true,
					modal: true,
				});
				User.Manage.MenuPrivilegeWindow.submitButtonContainer.linkbutton({
					iconCls: 'icon-ok',
					text: userManageMenuPrivilegeWindowSubmitButtonText,
				});
				User.Manage.MenuPrivilegeWindow.submitButtonContainer.bind(
					'click',
					User.Manage.MenuPrivilegeWindow.doSubmit
				);
				User.Manage.MenuPrivilegeWindow.resetButtonContainer.linkbutton({
					iconCls: 'icon-undo',
					text: userManageMenuPrivilegeWindowResetButtonText,
				})
				User.Manage.MenuPrivilegeWindow.resetButtonContainer.bind(
					'click',
					User.Manage.MenuPrivilegeWindow.doReset
				);
			},
			
			
			open: function() {
				var checkedRow = User.Manage.View.DataGrid.getCheckedRows();
				
				if(checkedRow != false) {
					User.Manage.MenuPrivilegeWindow.menuPrivilegeTreeContainer.tree({
						height: 200,
						checkbox: true,
						loader: function(param, success, error) {
							$.ajax({
								url: '/index.php/Menu/manage/getUserPrivilege',
								data: {
									userId: checkedRow[0].userId
								},
							})
							.done(function(response) {
								if(response.errorCode === 0) {
									success(response.data);
								}
							})
						}
					});
					User.Manage.menuPrivilegeWindowContainer.window('open');
				}
			},
			
			
			close: function() {
				User.Manage.menuPrivilegeWindowContainer.window('close');
			},
			
			
			doSubmit: function() {
				var checkedRow = User.Manage.View.DataGrid.getCheckedRows();
				var userId = checkedRow[0].userId;
				
				if(checkedRow != false) {
					var checkedRow = User.Manage.MenuPrivilegeWindow.menuPrivilegeTreeContainer.tree('getChecked', ['checked','indeterminate']);
					var checkedPrivilegeIdArray = [];
					
					for(index = 0; index < checkedRow.length; index++) {
						checkedPrivilegeIdArray.push(checkedRow[index].id);
					}
					
					$.ajax({
						url: '/index.php/Menu/manage/setUserPrivilege',
						data: {
							userId: userId,
							menuIdString: checkedPrivilegeIdArray.toString()
						}
					})
					.done(function(response) {
						if(response.errorCode === 0) {
							$.messager.alert(messageWindowTitle, userManageMenuPrivilegeWindowSubmitSuccessInfo, 'info');
							User.Manage.MenuPrivilegeWindow.close();
						}
					})
				}
			},
			
			
			doReset: function() {
				User.Manage.MenuPrivilegeWindow.menuPrivilegeTreeContainer.tree('reload');
			}
		},
		
		OperatorPrivilegeWindow: {
			dataGridPanelContainer: '',
			submitButtonContainer: '',
			resetButtonContainer: '',
			
			init: function() {
				User.Manage.OperatorPrivilegeWindow.dataGridPanelContainer = $('#operatorPrivilegeWindow #dataGrid');
				User.Manage.OperatorPrivilegeWindow.DataGrid.create();
				User.Manage.OperatorPrivilegeWindow.submitButtonContainer = $('#operatorPrivilegeWindow #submitButton');
				User.Manage.OperatorPrivilegeWindow.resetButtonContainer = $('#operatorPrivilegeWindow #resetButton');
				User.Manage.OperatorPrivilegeWindow.create();
			},
			
			DataGrid: {
				create: function() {
					User.Manage.OperatorPrivilegeWindow.dataGridPanelContainer.height(423);
					User.Manage.OperatorPrivilegeWindow.dataGridPanelContainer.datagrid({
						idField: "operatorId",
						fitColumns: true,
						columns: [[
							{
								checkbox: true
							},
							{
								field: 'operatorName',
								title: userManageOperatorPrivilegeWindowDataGridColumnTitle1,
								width: 100,
							}
						]],
						loadFilter: Utils.dataGridLoadFilter,
						onLoadSuccess: function(data) {
							var rowData = data.rows;
							$.each(rowData, function(idx, val) {
								if(val.privilegeValue === '1') {
									User.Manage.OperatorPrivilegeWindow.dataGridPanelContainer.datagrid("selectRow", idx);
								}
							}); 
						}
					})
				},
				
				load: function() {
					User.Manage.OperatorPrivilegeWindow.dataGridPanelContainer.datagrid('unselectAll');
					User.Manage.OperatorPrivilegeWindow.dataGridPanelContainer.datagrid('reload');
				},
				
				getCheckedRows: function() {
					return User.Manage.OperatorPrivilegeWindow.dataGridPanelContainer.datagrid('getChecked');
				},
			},
			
			create: function() {
				User.Manage.operatorPrivilegeWindowContainer.window({
					title: userManageOperatorPrivilegeWindowTitle,
					width: 300,
					height: 500,
					collapsible: false,
					minimizable: false,
					maximizable: false,
					closable: true,
					closed: true,
					modal: true,
				});
				User.Manage.OperatorPrivilegeWindow.submitButtonContainer.linkbutton({
					iconCls: 'icon-ok',
					text: userManageOperatorPrivilegeWindowSubmitButtonText,
				});
				User.Manage.OperatorPrivilegeWindow.submitButtonContainer.bind(
					'click',
					User.Manage.OperatorPrivilegeWindow.doSubmit
				);
				User.Manage.OperatorPrivilegeWindow.resetButtonContainer.linkbutton({
					iconCls: 'icon-undo',
					text: userManageOperatorPrivilegeWindowResetButtonText,
				})
				User.Manage.OperatorPrivilegeWindow.resetButtonContainer.bind(
					'click',
					User.Manage.OperatorPrivilegeWindow.doReset
				);
			},
			
			open: function() {
				var checkedRow = User.Manage.View.DataGrid.getCheckedRows();
				
				if(checkedRow != false) {
					User.Manage.OperatorPrivilegeWindow.dataGridPanelContainer.datagrid({
						url: '/index.php/Operator/manage/getUserPrivilege',
						queryParams: {
							userId: checkedRow[0].userId
						}
					});
					User.Manage.OperatorPrivilegeWindow.doReset();
					User.Manage.operatorPrivilegeWindowContainer.window('open');
				}
			},
			
			close: function() {
				User.Manage.operatorPrivilegeWindowContainer.window('close');
			},
			
			doSubmit: function() {
				var checkedRow = User.Manage.View.DataGrid.getCheckedRows();
				var userId = checkedRow[0].userId;
				checkedRow = User.Manage.OperatorPrivilegeWindow.DataGrid.getCheckedRows();
				var checkedOperatorIdArray = [];
				
				for(index = 0; index < checkedRow.length; index++) {
					checkedOperatorIdArray.push(checkedRow[index].operatorId);
				}
				
				$.ajax({
					url: '/index.php/Operator/manage/setUserPrivilege',
					data: {
						userId: userId,
						operatorIdString: checkedOperatorIdArray.toString()
					}
				})
				.done(function(response){
					if(response.errorCode === 0) {
						$.messager.alert(messageWindowTitle, userManageOperatorPrivilegeWindowSubmitSuccessInfo, 'info');
						User.Manage.OperatorPrivilegeWindow.close();
					}
				})
			},
			
			doReset: function() {
				User.Manage.OperatorPrivilegeWindow.DataGrid.load();
			},
		},
	},
}