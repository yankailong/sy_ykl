var GameArea = {
	Manage: {
		addWindowContainer: '',
		modifyWindowContainer: '',
		
		init: function() {
			Language.getCurrLanguage();
			Utils.loadJavascriptFile('/application/views/libraries/component/' + language + '.js');
			Utils.loadJavascriptFile('/application/views/libraries/utils/' + language + '.js');
			Utils.loadJavascriptFile('/application/views/module/GameArea/' + language + '.js');
			Utils.initAjax();
			
			GameArea.Manage.addWindowContainer = $('#addWindow');
			GameArea.Manage.AddWindow.init();
			GameArea.Manage.modifyWindowContainer = $('#modifyWindow');
			GameArea.Manage.ModifyWindow.init();
			GameArea.Manage.View.init();
		},
		
		View: {
			dataGridPanelContainer: '',
			
			init: function() {
				GameArea.Manage.View.dataGridPanelContainer = $('#dataGridPanel #dataGrid');
				GameArea.Manage.View.DataGrid.init();
			},
			
			DataGrid: {
				init: function() {
					GameArea.Manage.View.DataGrid.create();
				},
				
				create: function() {
					var width = $(document).width() - 40;
					var height = $(document).height() - 40;
					GameArea.Manage.View.dataGridPanelContainer.width(width);
					GameArea.Manage.View.dataGridPanelContainer.height(height);
					GameArea.Manage.View.dataGridPanelContainer.datagrid({
						url: '/index.php/GameArea/manage/getListData',
						idField: "gameAreaId",
						toolbar: [
							{
								iconCls: 'icon-add',
								text: gameAreaManageViewDataGridToolbarButtonText1,
								handler: GameArea.Manage.AddWindow.open
							},
							{
								iconCls: 'icon-edit',
								text: gameAreaManageViewDataGridToolbarButtonText2,
								handler: GameArea.Manage.ModifyWindow.open
								
							},
							{
								iconCls: 'icon-print',
								text: gameAreaManageViewDataGridToolbarButtonText3,
								handler: GameArea.Manage.View.DataGrid.doInstall,
							},
							{
								iconCls: 'icon-redo',
								text: gameAreaManageViewDataGridToolbarButtonText4,
								handler: GameArea.Manage.View.DataGrid.doClearData,
							},
						],
						columns: [[
							{
								checkbox: true
							},
							{
								field: 'operatorName',
								title: gameAreaManageViewDataGridColumnTitle1,
								width: 80,
							},
							{
								field: 'areaNum',
								title: gameAreaManageViewDataGridColumnTitle2,
								width: 40
							},
							{
								field: 'serverName',
								title: gameAreaManageViewDataGridColumnTitle3,
								width: 200
							},
							{
								field: 'databaseName',
								title: gameAreaManageViewDataGridColumnTitle7,
								width: 150
							},
							{
								field: 'status',
								title: gameAreaManageViewDataGridColumnTitle8,
								width: 60,
								formatter: function(value) {
									if(value === '1') {
										return gameAreaStatusValue1;
									}
									else if(value === '2') {
										return gameAreaStatusValue2;
									}
									else if(value === '3') {
										return gameAreaStatusValue3;
									}
									else if(value === '4') {
										return gameAreaStatusValue4;
									}
									else if(value === '5') {
										return gameAreaStatusValue5;
									}
									else if(value === '6') {
										return gameAreaStatusValue6;
									}
									else if(value === '7') {
										return gameAreaStatusValue7;
									}
								}
							},
							{
								field: 'openDatetime',
								title: gameAreaManageViewDataGridColumnTitle9,
								width: 150
							},
							{
								field: 'mergeDateTime',
								title: gameAreaManageViewDataGridColumnTitle10,
								width: 150
							},
							{
								field: 'mergeDestAreaNum',
								title: gameAreaManageViewDataGridColumnTitle11,
								width: 60
							},
							{
								field: 'closeDateTime',
								title: gameAreaManageViewDataGridColumnTitle12,
								width: 150
							}
						]],
						loadFilter: Utils.dataGridLoadFilter,
						pagination: true,
						pageSize: 50,
						pageList: [50, 100, 150, 200],
					})
				},
				
				load: function() {
					GameArea.Manage.View.dataGridPanelContainer.datagrid('reload');
				},
				
				getCheckedRows: function(allowMulti) {
					var allowMulti = arguments[0] ? arguments[0] : false;
					var checkedRow = GameArea.Manage.View.dataGridPanelContainer.datagrid('getChecked');
					
					if(Utils.dataGridValidateCheckedRow(checkedRow, allowMulti) === true) {
						return checkedRow;
					}
					else {
						return false;
					}
				},
				
				doInstall: function() {
					var checkedRow = GameArea.Manage.View.DataGrid.getCheckedRows();
					
					if( !(checkedRow === false) ) {
						$.messager.confirm(
							gameAreaManageConfirmInstallWindowTitle,
							gameAreaManageConfirmInstallWindowContent,
							function(r) {
								if(r === true) {
									$.ajax({
										url: '/index.php/GameArea/manage/install',
										data: {
											gameAreaId: checkedRow[0].gameAreaId
										},
									})
									.done(function(response) {
										if(response.errorCode === 0) {
											$.messager.alert(messageWindowTitle, gameAreaManageDoInstallSuccessInfo, 'info');
										}
									});
								}
							}
						);
					}
				},
				
				doClearData: function() {
					var checkedRow = GameArea.Manage.View.DataGrid.getCheckedRows();
					
					if( !(checkedRow === false) ) {
						$.messager.confirm(
							gameAreaManageConfirmClearDataWindowTitle,
							gameAreaManageConfirmClearDataWindowContent,
							function(r) {
								if(r === true) {
									$.ajax({
										url: '/index.php/GameArea/manage/clearData',
										data: {
											gameAreaId: checkedRow[0].gameAreaId
										},
									})
									.done(function(response) {
										if(response.errorCode === 0) {
											$.messager.alert(messageWindowTitle, gameAreaManageDoClearDataSuccessInfo, 'info');
										}
									});
								}
							}
						);
					}
				}
			},
		},
	
		AddWindow: {
			operatorComboboxLabelContainer: '',
			operatorComboboxInputContainer: '',
			areaNumValidateboxLabelContainer: '',
			areaNumValidateboxInputContainer: '',
			serverComboboxLabelContainer: '',
			serverComboboxInputContainer: '',
			databaseNameValidateboxLabelContainer: '',
			databaseNameValidateboxInputContainer: '',
			openDatetimeboxLabelContainer: '',
			openDatetimeboxInputContainer: '',
			submitButtonContainer: '',
			resetButtonContainer: '',
			
			init: function() {
				GameArea.Manage.AddWindow.operatorComboboxLabelContainer = $('#addWindow #operatorComboboxLabel');
				GameArea.Manage.AddWindow.operatorComboboxInputContainer = $('#addWindow #operatorComboboxInput');
				GameArea.Manage.AddWindow.areaNumValidateboxLabelContainer = $('#addWindow #areaNumValidateboxLabel');
				GameArea.Manage.AddWindow.areaNumValidateboxInputContainer = $('#addWindow #areaNumValidateboxInput');
				GameArea.Manage.AddWindow.serverComboboxLabelContainer = $('#addWindow #serverComboboxLabel');
				GameArea.Manage.AddWindow.serverComboboxInputContainer = $('#addWindow #serverComboboxInput');
				GameArea.Manage.AddWindow.databaseNameValidateboxLabelContainer = $('#addWindow #databaseNameValidateboxLabel');
				GameArea.Manage.AddWindow.databaseNameValidateboxInputContainer = $('#addWindow #databaseNameValidateboxInput');
				GameArea.Manage.AddWindow.openDatetimeboxLabelContainer = $('#addWindow #openDatetimeboxLabel');
				GameArea.Manage.AddWindow.openDatetimeboxInputContainer = $('#addWindow #openDatetimeboxInput');
				GameArea.Manage.AddWindow.submitButtonContainer = $('#addWindow #submitButton');
				GameArea.Manage.AddWindow.resetButtonContainer = $('#addWindow #resetButton');
				GameArea.Manage.AddWindow.create();
			},
			
			create: function() {
				GameArea.Manage.addWindowContainer.window({
					title: gameAreaManageAddWindowTitle,
					collapsible: false,
					minimizable: false,
					maximizable: false,
					closable: true,
					closed: true,
					modal: true,
				});
				Component.Combobox.Operator.create(
					GameArea.Manage.AddWindow.operatorComboboxLabelContainer,
					GameArea.Manage.AddWindow.operatorComboboxInputContainer
				);
				Component.Validatebox.AreaNum.create(
					GameArea.Manage.AddWindow.areaNumValidateboxLabelContainer,
					GameArea.Manage.AddWindow.areaNumValidateboxInputContainer
				);
				Component.Combobox.Server.create(
					GameArea.Manage.AddWindow.serverComboboxLabelContainer,
					GameArea.Manage.AddWindow.serverComboboxInputContainer
				);
				Component.Validatebox.DatabaseName.create(
					GameArea.Manage.AddWindow.databaseNameValidateboxLabelContainer,
					GameArea.Manage.AddWindow.databaseNameValidateboxInputContainer
				);
				Component.Datetimebox.GameAreaOpen.create(
					GameArea.Manage.AddWindow.openDatetimeboxLabelContainer,
					GameArea.Manage.AddWindow.openDatetimeboxInputContainer
				);
				GameArea.Manage.AddWindow.submitButtonContainer.linkbutton({
					iconCls: 'icon-ok',
					text: gameAreaManageAddWindowSubmitButtonText,
				});
				GameArea.Manage.AddWindow.submitButtonContainer.bind(
					'click',
					GameArea.Manage.AddWindow.doSubmit
				);
				GameArea.Manage.AddWindow.resetButtonContainer.linkbutton({
					iconCls: 'icon-undo',
					text: gameAreaManageAddWindowResetButtonText,
				});
				GameArea.Manage.AddWindow.resetButtonContainer.bind(
					'click',
					GameArea.Manage.AddWindow.doReset
				);
			},
			
			open: function() {
				GameArea.Manage.AddWindow.doReset();
				GameArea.Manage.addWindowContainer.window('open');
			},
			
			close: function() {
				GameArea.Manage.addWindowContainer.window('close');
			},
			
			doSubmit: function() {
				$.ajax({
					url: '/index.php/GameArea/manage/add',
					data: {
						operatorId: GameArea.Manage.AddWindow.operatorComboboxInputContainer.combobox('getValue'),
						areaNum: GameArea.Manage.AddWindow.areaNumValidateboxInputContainer[0].value,
						serverId: GameArea.Manage.AddWindow.serverComboboxInputContainer.combobox('getValue'),
						databaseName: GameArea.Manage.AddWindow.databaseNameValidateboxInputContainer[0].value,
						openDatetime: GameArea.Manage.AddWindow.openDatetimeboxInputContainer.datetimebox('getValue'),
					}
				})
				.done(function(response) {
					if(response.errorCode === 0) {
						$.messager.alert(messageWindowTitle, gameAreaManageAddWindowSubmitSuccessInfo, 'info');
						GameArea.Manage.View.DataGrid.load();
						GameArea.Manage.AddWindow.close();
					}
				})
			},
			
			doReset: function() {
				GameArea.Manage.AddWindow.operatorComboboxInputContainer.combobox('clear');
				GameArea.Manage.AddWindow.areaNumValidateboxInputContainer[0].value = '';
				GameArea.Manage.AddWindow.serverComboboxInputContainer.combobox('clear');
				GameArea.Manage.AddWindow.databaseNameValidateboxInputContainer[0].value = '';
				GameArea.Manage.AddWindow.openDatetimeboxInputContainer.datetimebox('clear');
			}
		},
		
		ModifyWindow: {
			operatorComboboxLabelContainer: '',
			operatorComboboxInputContainer: '',
			areaNumValidateboxLabelContainer: '',
			areaNumValidateboxInputContainer: '',
			serverComboboxLabelContainer: '',
			serverComboboxInputContainer: '',
			databaseNameValidateboxLabelContainer: '',
			databaseNameValidateboxInputContainer: '',
			gameAreaStatusComboboxLabelContainer: '',
			gameAreaStatusComboboxInputContainer: '',
			openDatetimeboxLabelContainer: '',
			openDatetimeboxInputContainer: '',
			submitButtonContainer: '',
			resetButtonContainer: '',
			
			init: function() {
				GameArea.Manage.ModifyWindow.operatorComboboxLabelContainer = $('#modifyWindow #operatorComboboxLabel');
				GameArea.Manage.ModifyWindow.operatorComboboxInputContainer = $('#modifyWindow #operatorComboboxInput');
				GameArea.Manage.ModifyWindow.areaNumValidateboxLabelContainer = $('#modifyWindow #areaNumValidateboxLabel');
				GameArea.Manage.ModifyWindow.areaNumValidateboxInputContainer = $('#modifyWindow #areaNumValidateboxInput');
				GameArea.Manage.ModifyWindow.serverComboboxLabelContainer = $('#modifyWindow #serverComboboxLabel');
				GameArea.Manage.ModifyWindow.serverComboboxInputContainer = $('#modifyWindow #serverComboboxInput');
				GameArea.Manage.ModifyWindow.databaseNameValidateboxLabelContainer = $('#modifyWindow #databaseNameValidateboxLabel');
				GameArea.Manage.ModifyWindow.databaseNameValidateboxInputContainer = $('#modifyWindow #databaseNameValidateboxInput');
				GameArea.Manage.ModifyWindow.gameAreaStatusComboboxLabelContainer = $('#modifyWindow #gameAreaStatusComboboxLabel');
				GameArea.Manage.ModifyWindow.gameAreaStatusComboboxInputContainer = $('#modifyWindow #gameAreaStatusComboboxInput');
				GameArea.Manage.ModifyWindow.openDatetimeboxLabelContainer = $('#modifyWindow #openDatetimeboxLabel');
				GameArea.Manage.ModifyWindow.openDatetimeboxInputContainer = $('#modifyWindow #openDatetimeboxInput');
				GameArea.Manage.ModifyWindow.submitButtonContainer = $('#modifyWindow #submitButton');
				GameArea.Manage.ModifyWindow.resetButtonContainer = $('#modifyWindow #resetButton');
				GameArea.Manage.ModifyWindow.create();
			},
			
			create: function() {
				GameArea.Manage.modifyWindowContainer.window({
					title: gameAreaManageModifyWindowTitle,
					collapsible: false,
					minimizable: false,
					maximizable: false,
					closable: true,
					closed: true,
					modal: true,
				});
				Component.Combobox.Operator.create(
					GameArea.Manage.ModifyWindow.operatorComboboxLabelContainer,
					GameArea.Manage.ModifyWindow.operatorComboboxInputContainer
				);
				Component.Validatebox.AreaNum.create(
					GameArea.Manage.ModifyWindow.areaNumValidateboxLabelContainer,
					GameArea.Manage.ModifyWindow.areaNumValidateboxInputContainer
				);
				Component.Combobox.Server.create(
					GameArea.Manage.ModifyWindow.serverComboboxLabelContainer,
					GameArea.Manage.ModifyWindow.serverComboboxInputContainer
				);
				Component.Validatebox.DatabaseName.create(
					GameArea.Manage.ModifyWindow.databaseNameValidateboxLabelContainer,
					GameArea.Manage.ModifyWindow.databaseNameValidateboxInputContainer
				);
				Component.Combobox.GameAreaStatus.create(
					GameArea.Manage.ModifyWindow.gameAreaStatusComboboxLabelContainer,
					GameArea.Manage.ModifyWindow.gameAreaStatusComboboxInputContainer
				);
				Component.Datetimebox.GameAreaOpen.create(
					GameArea.Manage.ModifyWindow.openDatetimeboxLabelContainer,
					GameArea.Manage.ModifyWindow.openDatetimeboxInputContainer
				);
				GameArea.Manage.ModifyWindow.submitButtonContainer.linkbutton({
					iconCls: 'icon-ok',
					text: gameAreaManageModifyWindowSubmitButtonText,
				});
				GameArea.Manage.ModifyWindow.submitButtonContainer.bind(
					'click',
					GameArea.Manage.ModifyWindow.doSubmit
				);
				GameArea.Manage.ModifyWindow.resetButtonContainer.linkbutton({
					iconCls: 'icon-undo',
					text: gameAreaManageModifyWindowResetButtonText,
				});
				GameArea.Manage.ModifyWindow.resetButtonContainer.bind(
					'click',
					GameArea.Manage.ModifyWindow.doReset
				);
			},			
			open: function() {
				var checkedRow = GameArea.Manage.View.DataGrid.getCheckedRows();
				
				if(checkedRow != false) {
					GameArea.Manage.ModifyWindow.reset(checkedRow[0]);
					
					if(checkedRow[0].status > 1) {
						GameArea.Manage.ModifyWindow.operatorComboboxInputContainer.combobox('disable');
						GameArea.Manage.ModifyWindow.areaNumValidateboxInputContainer[0].disabled = true;
						GameArea.Manage.ModifyWindow.serverComboboxInputContainer.combobox('disable');
						GameArea.Manage.ModifyWindow.databaseNameValidateboxInputContainer[0].disabled = true;
					}
					
					GameArea.Manage.modifyWindowContainer.window('open');
				}
			},
			
			close: function() {
				GameArea.Manage.modifyWindowContainer.window('close');
			},
			
			doSubmit: function() {
				var checkedRow = GameArea.Manage.View.DataGrid.getCheckedRows();
				
				$.ajax({
					url: '/index.php/GameArea/manage/modify',
					data: {
						gameAreaId: checkedRow[0].gameAreaId,
						operatorId: GameArea.Manage.ModifyWindow.operatorComboboxInputContainer.combobox('getValue'),
						areaNum: GameArea.Manage.ModifyWindow.areaNumValidateboxInputContainer[0].value,
						serverId: GameArea.Manage.ModifyWindow.serverComboboxInputContainer.combobox('getValue'),
						databaseName: GameArea.Manage.ModifyWindow.databaseNameValidateboxInputContainer[0].value,
						status: GameArea.Manage.ModifyWindow.gameAreaStatusComboboxInputContainer.combobox('getValue'),
						openDatetime: GameArea.Manage.ModifyWindow.openDatetimeboxInputContainer.datetimebox('getValue'),
					}
				})
				.done(function(response) {
					if(response.errorCode === 0) {
						$.messager.alert(messageWindowTitle, gameAreaManageModifyWindowSubmitSuccessInfo, 'info');
						GameArea.Manage.View.DataGrid.load();
						GameArea.Manage.ModifyWindow.close();
					}
				})
			},
			
			doReset: function() {
				var checkedRow = GameArea.Manage.View.DataGrid.getCheckedRows();
				GameArea.Manage.ModifyWindow.reset(checkedRow[0]);
			},
			
			reset: function(row) {
				GameArea.Manage.ModifyWindow.operatorComboboxInputContainer.combobox('setValue', row.operatorId);
				GameArea.Manage.ModifyWindow.areaNumValidateboxInputContainer[0].value = row.areaNum;
				GameArea.Manage.ModifyWindow.serverComboboxInputContainer.combobox('setValue', row.serverId);
				GameArea.Manage.ModifyWindow.databaseNameValidateboxInputContainer[0].value = row.databaseName;
				GameArea.Manage.ModifyWindow.gameAreaStatusComboboxInputContainer.combobox('setValue', row.status);
				GameArea.Manage.ModifyWindow.openDatetimeboxInputContainer.datetimebox('setValue', row.openDatetime);
				
				GameArea.Manage.ModifyWindow.operatorComboboxInputContainer.combobox('enable');
				GameArea.Manage.ModifyWindow.areaNumValidateboxInputContainer[0].disabled = false;
				GameArea.Manage.ModifyWindow.serverComboboxInputContainer.combobox('enable');
				GameArea.Manage.ModifyWindow.databaseNameValidateboxInputContainer[0].disabled = false;
			}
		},
	},
}