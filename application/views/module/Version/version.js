var Version = {
	Manage: {
		addWindowContainer: '',
		modifyWindowContainer: '',
		
		init: function() {
			Language.getCurrLanguage();
			Utils.loadJavascriptFile('/application/views/libraries/component/' + language + '.js');
			Utils.loadJavascriptFile('/application/views/libraries/utils/' + language + '.js');
			Utils.loadJavascriptFile('/application/views/module/Version/' + language + '.js');
			Utils.initAjax();
			
			Version.Manage.AddWindow.init();
			Version.Manage.ModifyWindow.init();
			Version.Manage.View.init();
		},
		
		View: {
			dataGridPanelContainer: '',
			
			init: function() {
				Version.Manage.View.dataGridPanelContainer = $('#dataGridPanel #dataGrid');
				Version.Manage.View.DataGrid.init();
			},
			
			DataGrid: {
				init: function() {
					Version.Manage.View.DataGrid.create();
				},
				
				create: function() {
					var width = $(document).width() - 40;
					var height = $(document).height() - 40;
					Version.Manage.View.dataGridPanelContainer.width(width);
					Version.Manage.View.dataGridPanelContainer.height(height);
					Version.Manage.View.dataGridPanelContainer.datagrid({
						url: '/index.php/Version/manage/getListData',
						idField: "id",
						fitColumns: false,
						toolbar: [
							{
								iconCls: 'icon-add',
								text: versionManageViewDataGridToolbarButtonText1,
								handler: Version.Manage.AddWindow.open,
							},
							{
								iconCls: 'icon-edit',
								text: versionManageViewDataGridToolbarButtonText2,
								handler: Version.Manage.ModifyWindow.open,
							},
							{
								iconCls: 'icon-edit',
								text: versionManageViewDataGridToolbarButtonText3,
								handler: Version.Manage.View.DataGrid.doMergeInstall,
							}
						],
						columns: [[
							{
								checkbox: true
							},
							{
								field: 'version',
								title: versionManageViewDataGridColumnTitle1,
								width: 100,
							},
							{
								field: 'haveClient',
								title: versionManageViewDataGridColumnTitle2,
								width: 100,
								formatter: function(value) {
									switch(value) {
										case '0':
											return boolStatusFalse;
											break;
											
										case '1':
											return boolStatusTrue;
											break;
											
										default:
											return value;
									}
								},
							},
							{
								field: 'haveInterface',
								title: versionManageViewDataGridColumnTitle3,
								width: 100,
								formatter: function(value) {
									switch(value) {
										case '0':
											return boolStatusFalse;
											break;
											
										case '1':
											return boolStatusTrue;
											break;
											
										default:
											return value;
									}
								},
							},
							{
								field: 'haveServer',
								title: versionManageViewDataGridColumnTitle4,
								width: 100,
								formatter: function(value) {
									switch(value) {
										case '0':
											return boolStatusFalse;
											break;
											
										case '1':
											return boolStatusTrue;
											break;
											
										default:
											return value;
									}
								},
							},
							{
								field: 'status',
								title: versionManageViewDataGridColumnTitle5,
								width: 100,
								formatter: function(value) {
									switch(value) {
										case '1':
											return versionStatus1;
											break;
											
										case '2':
											return versionStatus2;
											break;
											
										case '3':
											return versionStatus3;
											break;
											
										case '4':
											return versionStatus4;
											break;
											
										case '5':
											return versionStatus5;
											break;
											
										case '6':
											return versionStatus6;
											break;
											
										case '7':
											return versionStatus7;
											break;
											
										case '8':
											return versionStatus8;
											break;
											
										case '9':
											return versionStatus9;
											break;
											
										default:
											return value;
									}
								}
							},
						]],
						loadFilter: Utils.dataGridLoadFilter,
						pagination: true,
						pageSize: 50,
						pageList: [50, 100, 150, 200],
					});
				},
				
				load: function() {
					Version.Manage.View.dataGridPanelContainer.datagrid('reload');
				},
				
				getCheckedRows: function(allowMulti) {
					var allowMulti = arguments[0] ? arguments[0] : false;
					var checkedRow = Version.Manage.View.dataGridPanelContainer.datagrid('getChecked');
					
					if(Utils.dataGridValidateCheckedRow(checkedRow, allowMulti) === true) {
						return checkedRow;
					}
					else {
						return false;
					}
				},
				
				doMergeInstall: function() {
					var checkedRow = Version.Manage.View.DataGrid.getCheckedRows();
					
					if( ! checkedRow === false ) {
						$.messager.confirm(
							versionManageMergeToInstallConfirmWindowTitle,
							versionManageMergeToInstallConfirmWindowContent.replace('%s', checkedRow[0].version),
							function(r) {
								if(r === true) {
									$.ajax({
										url: '/index.php/Version/manage/mergeToInstall',
										data: {
											id: checkedRow[0].id,
										}
									})
									.done(function(response) {
										if(response.errorCode === 0) {
											$.messager.alert(messageWindowTitle, versionManageMergeToInstallSuccessInfo, 'info');
											Version.Manage.View.DataGrid.load();
										}
									})
								}
							}
						);
					}
				},
			},
		},
		
		AddWindow: {
			versionLabelContainer: '',
			versionInputContainer: '',
			submitButtonContainer: '',
			resetButtonContainer: '',
			
			init: function() {
				Version.Manage.addWindowContainer = $('#addWindow');
				
				Version.Manage.AddWindow.versionLabelContainer = $('#addWindow #versionLabel');
				Version.Manage.AddWindow.versionInputContainer = $('#addWindow #versionInput');
				Version.Manage.AddWindow.submitButtonContainer = $('#addWindow #submitButton');
				Version.Manage.AddWindow.resetButtonContainer = $('#addWindow #resetButton');
				
				Version.Manage.AddWindow.create();
			},
			
			create: function() {
				Version.Manage.addWindowContainer.window({
					title: versionManageAddWindowTitle,
					collapsible: false,
					minimizable: false,
					maximizable: false,
					closable: true,
					closed: true,
					modal: true,
				});
				Component.Validatebox.Version.create(
					Version.Manage.AddWindow.versionLabelContainer,
					Version.Manage.AddWindow.versionInputContainer
				);
				Version.Manage.AddWindow.submitButtonContainer.linkbutton({
					iconCls: 'icon-ok',
					text: versionManageAddWindowSubmitButtonText,
				});
				Version.Manage.AddWindow.submitButtonContainer.bind(
					'click',
					Version.Manage.AddWindow.doSubmit
				);
				Version.Manage.AddWindow.resetButtonContainer.linkbutton({
					iconCls: 'icon-undo',
					text: versionManageAddWindowResetButtonText,
				})
				Version.Manage.AddWindow.resetButtonContainer.bind(
					'click',
					Version.Manage.AddWindow.doReset
				);
			},
			
			open: function() {
				Version.Manage.AddWindow.reset();
				Version.Manage.addWindowContainer.window('open');
			},
			
			close: function() {
				Version.Manage.addWindowContainer.window('close');
			},
			
			doSubmit: function() {
				$.ajax({
					url: '/index.php/Version/manage/add',
					data: {
						version: Version.Manage.AddWindow.versionInputContainer[0].value,
					}
				})
				.done(function(response) {
					if(response.errorCode === 0) {
						$.messager.alert(messageWindowTitle, versionManageAddWindowSubmitSuccessInfo, 'info');
						Version.Manage.AddWindow.close();
						Version.Manage.View.DataGrid.load();
					}
				});
			},
			
			doReset: function() {
				Version.Manage.AddWindow.reset();
			},
			
			reset: function() {
				Version.Manage.AddWindow.versionInputContainer[0].value = '';
			},
		},
		
		ModifyWindow: {
			versionLabelContainer: '',
			versionInputContainer: '',
			submitButtonContainer: '',
			resetButtonContainer: '',
			
			init: function() {
				Version.Manage.modifyWindowContainer = $('#modifyWindow');
				Version.Manage.ModifyWindow.versionLabelContainer = $('#modifyWindow #versionLabel');
				Version.Manage.ModifyWindow.versionInputContainer = $('#modifyWindow #versionInput');
				Version.Manage.ModifyWindow.submitButtonContainer = $('#modifyWindow #submitButton');
				Version.Manage.ModifyWindow.resetButtonContainer = $('#modifyWindow #resetButton');
				
				Version.Manage.ModifyWindow.create();
			},
		
			create: function() {
				Version.Manage.modifyWindowContainer.window({
					title: versionManageModifyWindowTitle,
					collapsible: false,
					minimizable: false,
					maximizable: false,
					closable: true,
					closed: true,
					modal: true,
				});
				Component.Validatebox.Version.create(
					Version.Manage.ModifyWindow.versionLabelContainer,
					Version.Manage.ModifyWindow.versionInputContainer
				);
				Version.Manage.ModifyWindow.submitButtonContainer.linkbutton({
					iconCls: 'icon-ok',
					text: versionManageModifyWindowSubmitButtonText,
				});
				Version.Manage.ModifyWindow.submitButtonContainer.bind(
					'click',
					Version.Manage.ModifyWindow.doSubmit
				);
				Version.Manage.ModifyWindow.resetButtonContainer.linkbutton({
					iconCls: 'icon-undo',
					text: versionManageModifyWindowResetButtonText,
					})
				Version.Manage.ModifyWindow.resetButtonContainer.bind(
					'click',
					Version.Manage.ModifyWindow.doReset
				);
			},
			
			open: function() {
				var checkedRow = Version.Manage.View.DataGrid.getCheckedRows();
				
				if(checkedRow != false) {
					Version.Manage.ModifyWindow.reset(checkedRow);
					Version.Manage.modifyWindowContainer.window('open');
				}
			},
			
			close: function() {
				Version.Manage.modifyWindowContainer.window('close');
			},
			
			doSubmit: function() {
				var checkedRow = Version.Manage.View.DataGrid.getCheckedRows();
				
				$.ajax({
					url: '/index.php/Version/manage/modify',
					data: {
						id: checkedRow[0].id,
						version: Version.Manage.ModifyWindow.versionInputContainer[0].value,
					},
				})
				.done(function(response) {
					if(response.errorCode === 0) {
						$.messager.alert(messageWindowTitle, versionManageModifyWindowSubmitSuccessInfo, 'info');
						Version.Manage.ModifyWindow.close();
						Version.Manage.View.DataGrid.load();
					}
				})
			},
			
			doReset: function() {
				var checkedRow = Version.Manage.View.DataGrid.getCheckedRows();
				Version.Manage.ModifyWindow.reset(checkedRow);
			},
			
			reset: function(checkedRow) {
				Version.Manage.ModifyWindow.versionInputContainer[0].value = checkedRow[0].version;
			},
		},
	},
}