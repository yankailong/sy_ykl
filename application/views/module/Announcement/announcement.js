var Announcement = {
	Manage: {
		addWindowContainer: '',
		
		init: function() {
			Language.getCurrLanguage();
			Utils.loadJavascriptFile('/application/views/libraries/component/' + language + '.js');
			Utils.loadJavascriptFile('/application/views/libraries/utils/' + language + '.js');
			Utils.loadJavascriptFile('/application/views/module/Announcement/' + language + '.js');
			Utils.initAjax();
			
			Announcement.Manage.addWindowContainer = $('#addWindow');
			Announcement.Manage.AddWindow.init();
			Announcement.Manage.View.init();
		},
		
		View: {
			dataGridPanelContainer: '',
			
			init: function() {
				Announcement.Manage.View.dataGridPanelContainer = $('#dataGridPanel #dataGrid');
				Announcement.Manage.View.DataGrid.init();
			},
			
			DataGrid: {
				init: function() {
					Announcement.Manage.View.DataGrid.create();
				},
				
				create: function() {
					var width = $(document).width() - 40;
					var height = $(document).height() - 40;
					Announcement.Manage.View.dataGridPanelContainer.width(width);
					Announcement.Manage.View.dataGridPanelContainer.height(height);
					Announcement.Manage.View.dataGridPanelContainer.datagrid({
						url: '/index.php/Announcement/manage/getListData',
						idField: "id",
						toolbar: [
							{
								iconCls: 'icon-add',
								text: announcementManageViewDataGridToolbarButtonText1,
								handler: Announcement.Manage.AddWindow.open
							},
						],
						columns: [[
							{
								field: 'content',
								title: announcementManageViewDataGridColumnTitle1,
								width: 600,
							},
							{
								field: 'startDatetime',
								title: announcementManageViewDataGridColumnTitle2,
								width: 150,
							},
							{
								field: 'endDatetime',
								title: announcementManageViewDataGridColumnTitle3,
								width: 150,
							},
							{
								field: 'timeInterval',
								title: announcementManageViewDataGridColumnTitle4,
								width: 80,
							},
							{
								field: 'operatorUserName',
								title: announcementManageViewDataGridColumnTitle5,
								width: 100,
							},
							{
								field: 'operatorDatetime',
								title: announcementManageViewDataGridColumnTitle6,
								width: 150,
							},
                                                        {
								field: 'typeName',
								title: announcementManageViewDataGridColumnTitle7,
								width: 150,
                                                                formatter: function(value) {
									if(value === '1') {
										return announcementValue1;
									}
									else if(value === '2') {
										return announcementValue2;
									}
                                                                        else if(value === '3') {
										return announcementValue3;
									}
                                                                        else if(value === '4') {
										return announcementValue4;
									}
                                                                        else if(value === '5') {
										return announcementValue5;
									}
                                                                        else if(value === '6') {
										return announcementValue6;
									}
                                                                        else if(value === '7') {
										return announcementValue7;
									}
                                                                        else if(value === '8') {
										return announcementValue8;
									}
                                                                        else if(value === '9') {
										return announcementValue9;
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
					Announcement.Manage.View.dataGridPanelContainer.datagrid('reload');
				},
			},
		},
		
		AddWindow: {
			operatorIdComboboxLabelContainer: '',
                        operatorIdComboboxInputContainer: '',
                        areaNumCombogridLabelContainer: '',
                        areaNumCombogridInputContainer: '',
                        announcementTypeComboboxLabelContainer:'',
                        announcementTypeComboboxInputContainer:'',
			startDatetimeLabelContainer: '',
			startDateTimeInputContainer: '',
			endDatetimeLabelContainer: '',
			endDatetimeInputContainer: '',
			timeIntervalLabelContainer: '',
			timeIntervalInputContainer: '',
			contentLabelContainer: '',
			contentInputContainer: '',
			submitButtonContainer: '',
			resetButtonContainer: '',
			
			init: function() {
				Announcement.Manage.AddWindow.operatorIdComboboxLabelContainer = $('#addWindow #operatorIdComboboxLabel');
				Announcement.Manage.AddWindow.operatorIdComboboxInputContainer = $('#addWindow #operatorIdComboboxInput');
                                Announcement.Manage.AddWindow.areaNumCombogridLabelContainer = $('#addWindow #areaNumCombogridLabel');
				Announcement.Manage.AddWindow.areaNumCombogridInputContainer = $('#addWindow #areaNumCombogridInput');
                                Announcement.Manage.AddWindow.announcementTypeComboboxLabelContainer = $('#addWindow #announcementTypeComboboxLabel');
				Announcement.Manage.AddWindow.announcementTypeComboboxInputContainer = $('#addWindow #announcementTypeComboboxInput');
				Announcement.Manage.AddWindow.startDatetimeLabelContainer = $('#addWindow #startDatetimeLabel');
				Announcement.Manage.AddWindow.startDateTimeInputContainer = $('#addWindow #startDatetimeInput');
				Announcement.Manage.AddWindow.endDatetimeLabelContainer = $('#addWindow #endDatetimeLabel');
				Announcement.Manage.AddWindow.endDatetimeInputContainer = $('#addWindow #endDatetimeInput');
				Announcement.Manage.AddWindow.timeIntervalLabelContainer = $('#addWindow #timeIntervalLabel');
				Announcement.Manage.AddWindow.timeIntervalInputContainer = $('#addWindow #timeIntervalInput');
				Announcement.Manage.AddWindow.contentLabelContainer = $('#addWindow #contentLabel');
				Announcement.Manage.AddWindow.contentInputContainer = $('#addWindow #contentInput');
				Announcement.Manage.AddWindow.submitButtonContainer = $('#addWindow #submitButton');
				Announcement.Manage.AddWindow.resetButtonContainer = $('#addWindow #resetButton');
				
				Announcement.Manage.AddWindow.create();
			},
			
			create: function() {
				Announcement.Manage.addWindowContainer.window({
					title: announcementManageAddWindowTitle,
					collapsible: false,
					minimizable: false,
					maximizable: false,
					closable: true,
					closed: true,
					modal: true,
				})
				Component.Combobox.OperatorId.create(
                                        Announcement.Manage.AddWindow.operatorIdComboboxLabelContainer,
                                        Announcement.Manage.AddWindow.operatorIdComboboxInputContainer
				);
                                Component.Combogrid.AreaNum.create(
                                        Announcement.Manage.AddWindow.areaNumCombogridLabelContainer,
                                        Announcement.Manage.AddWindow.areaNumCombogridInputContainer
				);
				Component.Combobox.AnnouncementType.create(
					Announcement.Manage.AddWindow.announcementTypeComboboxLabelContainer,
					Announcement.Manage.AddWindow.announcementTypeComboboxInputContainer,
					true
				);
				Component.Datetimebox.Start.create(
					Announcement.Manage.AddWindow.startDatetimeLabelContainer,
					Announcement.Manage.AddWindow.startDateTimeInputContainer
				);
				Component.Datetimebox.End.create(
					Announcement.Manage.AddWindow.endDatetimeLabelContainer,
					Announcement.Manage.AddWindow.endDatetimeInputContainer
				);
				Component.Numberbox.TimeInterval.create(
					Announcement.Manage.AddWindow.timeIntervalLabelContainer,
					Announcement.Manage.AddWindow.timeIntervalInputContainer
				);
				Component.Textbox.Content.create(
					Announcement.Manage.AddWindow.contentLabelContainer
				);
				Announcement.Manage.AddWindow.submitButtonContainer.linkbutton({
					iconCls: 'icon-ok',
					text: announcementManageAddWindowSubmitButtonText,
				});
				Announcement.Manage.AddWindow.submitButtonContainer.bind(
					'click',
					Announcement.Manage.AddWindow.doSubmit
				);
				Announcement.Manage.AddWindow.resetButtonContainer.linkbutton({
					iconCls: 'icon-undo',
					text: announcementManageAddWindowResetButtonText,
				})
				Announcement.Manage.AddWindow.resetButtonContainer.bind(
					'click',
					Announcement.Manage.AddWindow.doReset
				);
			},
			
			open: function() {
				Announcement.Manage.AddWindow.reset();
				Announcement.Manage.addWindowContainer.window('open');
			},
			
			close: function() {
				Announcement.Manage.addWindowContainer.window('close');
			},
			
			doSubmit: function() {
				$.ajax({
					url: '/index.php/Announcement/manage/add',
					data: {
						operatorId: Announcement.Manage.AddWindow.operatorIdComboboxInputContainer.combobox('getValue'),
                                                gameAreaId: Announcement.Manage.AddWindow.areaNumCombogridInputContainer.combogrid('getValues').toString(),
                                                typeId: Announcement.Manage.AddWindow.announcementTypeComboboxInputContainer.combobox('getValue'),
						startDatetime: Announcement.Manage.AddWindow.startDateTimeInputContainer.datetimebox('getValue'),
						endDatetime: Announcement.Manage.AddWindow.endDatetimeInputContainer.datetimebox('getValue'),
						timeInterval: Announcement.Manage.AddWindow.timeIntervalInputContainer.numberbox('getValue'),
						content: Announcement.Manage.AddWindow.contentInputContainer[0].value
					}
				})
				.done(function(response) {
					if(response.errorCode === 0) {
						$.messager.alert(messageWindowTitle, announcementManageAddWindowSubmitSuccessInfo, 'info');
						Announcement.Manage.AddWindow.close();
						Announcement.Manage.View.DataGrid.load();
					}
				})
			},
			
			doReset: function() {
				Announcement.Manage.AddWindow.reset();
			},
			
			reset: function() {
				Announcement.Manage.AddWindow.operatorIdComboboxInputContainer.combobox('setValue','');
                                Announcement.Manage.AddWindow.areaNumCombogridInputContainer.combogrid('setValue','');
                                Announcement.Manage.AddWindow.announcementTypeComboboxInputContainer.combobox('setValue', '');
				Announcement.Manage.AddWindow.startDateTimeInputContainer.datetimebox('clear');
				Announcement.Manage.AddWindow.endDatetimeInputContainer.datetimebox('clear');
				Announcement.Manage.AddWindow.timeIntervalInputContainer.numberbox('clear');
				Announcement.Manage.AddWindow.contentInputContainer[0].value = '';
			},
		},
	},
        
        Gm: {
		addWindowContainer: '',
		modifyWindowContainer: '',
		
		init: function() {
			Language.getCurrLanguage();
			Utils.loadJavascriptFile('/application/views/libraries/component/' + language + '.js');
			Utils.loadJavascriptFile('/application/views/libraries/utils/' + language + '.js');
			Utils.loadJavascriptFile('/application/views/module/Announcement/' + language + '.js');
			Utils.initAjax();
			
			Announcement.Gm.addWindowContainer = $('#addWindow');
			Announcement.Gm.AddWindow.init();
			Announcement.Gm.modifyWindowContainer = $('#modifyWindow');
			Announcement.Gm.ModifyWindow.init();
			Announcement.Gm.View.init();
		},
		
		View: {
			dataGridPanelContainer: '',
			
			init: function() {
				Announcement.Gm.View.dataGridPanelContainer = $('#dataGridPanel #dataGrid');
				Announcement.Gm.View.DataGrid.init();
			},
			
			DataGrid: {
                            
                                operatorIdComboboxLabelContainer: '',
				operatorIdComboboxInputContainer: '',
                                areaNumCombogridLabelContainer: '',
                                areaNumCombogridInputContainer: '',
                                searchButtonContainer: '',
                                addButtonContainer: '',
                                modifyButtonContainer: '',
                                
				init: function() {
                                        Announcement.Gm.View.DataGrid.operatorIdComboboxLabelContainer = $('#dataGridPanel #toolbar #operatorIdComboboxLabel');
					Announcement.Gm.View.DataGrid.operatorIdComboboxInputContainer = $('#dataGridPanel #toolbar #operatorIdComboboxInput');
                                        Announcement.Gm.View.DataGrid.areaNumCombogridLabelContainer = $('#dataGridPanel #toolbar #areaNumCombogridLabel');
					Announcement.Gm.View.DataGrid.areaNumCombogridInputContainer = $('#dataGridPanel #toolbar #areaNumCombogridInput');
                                        Announcement.Gm.View.DataGrid.searchButtonContainer = $('#dataGridPanel #toolbar #searchButton');
					Announcement.Gm.View.DataGrid.addButtonContainer = $('#dataGridPanel #toolbar #addButton');
					Announcement.Gm.View.DataGrid.modifyButtonContainer = $('#dataGridPanel #toolbar #modifyButton');
					Announcement.Gm.View.DataGrid.create();
                                        Announcement.Gm.View.DataGrid.showCurrSelectInfo();
				},
				
				create: function() {
					var width = $(document).width() - 40;
					var height = $(document).height() - 40;
					Announcement.Gm.View.dataGridPanelContainer.width(width);
					Announcement.Gm.View.dataGridPanelContainer.height(height);
					Announcement.Gm.View.dataGridPanelContainer.datagrid({
						idField: "uid",
						toolbar: '#toolbar',
						columns: [[
							{
								checkbox: true
							},
							{
								field: 'cid',
								title: announcementGmViewDataGridColumnTitle1,
								width: 100
							},
							{
								field: 'operatorId',
								title: announcementGmViewDataGridColumnTitle2,
								width: 100,
							},
							{
								field: 'roleName',
								title: announcementGmViewDataGridColumnTitle3,
								width: 100,
							},
                                                        {
								field: 'roleLevel',
								title: announcementGmViewDataGridColumnTitle4,
								width: 100,
							},
                                                        {
								field: 'gmLevel',
								title: announcementGmViewDataGridColumnTitle5,
								width: 100,
                                                                formatter: function(value) {
									if(value === '1') {
										return announcementGmValue1;
									}
									else if(value === '2') {
										return announcementGmValue2;
									}
                                                                        else if(value === '3') {
										return announcementGmValue3;
									}
                                                                }
							},
						]],
						loadFilter: Utils.dataGridLoadFilter,
						pagination: true,
						pageSize: 50,
						pageList: [50, 100, 150, 200],
					})
                                        Component.Combobox.OperatorId.create(
						Announcement.Gm.View.DataGrid.operatorIdComboboxLabelContainer,
						Announcement.Gm.View.DataGrid.operatorIdComboboxInputContainer
					);
                                        Component.Combogrid.AreaNum.create(
						Announcement.Gm.View.DataGrid.areaNumCombogridLabelContainer,
						Announcement.Gm.View.DataGrid.areaNumCombogridInputContainer
					);
                                        Announcement.Gm.View.DataGrid.searchButtonContainer.linkbutton({
						iconCls: 'icon-search',
						text: announcementGmViewDataGridToolbarButtonText1,
					});
					Announcement.Gm.View.DataGrid.searchButtonContainer.bind(
						'click',
						Announcement.Gm.View.DataGrid.doSearch
					);
					Announcement.Gm.View.DataGrid.addButtonContainer.linkbutton({
						text: announcementGmViewDataGridToolbarButtonText4,
					});
					Announcement.Gm.View.DataGrid.addButtonContainer.bind(
						'click',
						Announcement.Gm.AddWindow.open
					);
					Announcement.Gm.View.DataGrid.modifyButtonContainer.linkbutton({
						text: announcementGmViewDataGridToolbarButtonText2,
					});
					Announcement.Gm.View.DataGrid.modifyButtonContainer.bind(
						'click',
						Announcement.Gm.ModifyWindow.open
					);
				},
				
				load: function() {
					Announcement.Gm.View.dataGridPanelContainer.datagrid('reload');
				},
				showCurrSelectInfo:function(){
                                        $.ajax({
                                                url: '/index.php/User/manage/getCurrSelectInfo',
                                        })
                                        .done(function(response) {
                                                if(response.data.operatorId!=false) {
                                                    Announcement.Gm.View.DataGrid.operatorIdComboboxInputContainer.combobox('select',response.data.operatorId);
                                                    Announcement.Gm.View.DataGrid.areaNumCombogridInputContainer.combogrid('setValue',response.data.gameAreaId);
                                                }
                                        })
                                }, 
				getCheckedRows: function(allowMulti) {
					var allowMulti = arguments[0] ? arguments[0] : false;
					var checkedRow = Announcement.Gm.View.dataGridPanelContainer.datagrid('getChecked');
					
					if(Utils.dataGridValidateCheckedRow(checkedRow, allowMulti) === true) {
						return checkedRow;
					}
					else {
						return false;
					}
				},
                                doSearch: function() {
					Announcement.Gm.View.dataGridPanelContainer.datagrid({
						url: '/index.php/Announcement/gm/getListData',
						queryParams: {
							operatorId: Announcement.Gm.View.DataGrid.operatorIdComboboxInputContainer.combobox('getValue'),
                                                        gameAreaId: Announcement.Gm.View.DataGrid.areaNumCombogridInputContainer.combogrid('getValue'),
						},
					});
				},
			},
		},
		
		AddWindow: {
                        operatorIdComboboxLabelContainer: '',
                        operatorIdComboboxInputContainer: '',
                        areaNumCombogridLabelContainer: '',
                        areaNumCombogridInputContainer: '',
			roleNameValidateboxLabelContainer: '',
			roleNameValidateboxInputContainer: '',
			levelComboboxLabelContainer: '',
			levelComboboxInputContainer: '',
			submitButtonContainer: '',
			resetButtonContainer: '',
			
			init: function() {
                                Announcement.Gm.AddWindow.operatorIdComboboxLabelContainer = $('#addWindow #operatorIdComboboxLabel');
				Announcement.Gm.AddWindow.operatorIdComboboxInputContainer = $('#addWindow #operatorIdComboboxInput');
				Announcement.Gm.AddWindow.areaNumCombogridLabelContainer = $('#addWindow #areaNumCombogridLabel');
				Announcement.Gm.AddWindow.areaNumCombogridInputContainer = $('#addWindow #areaNumCombogridInput');
				Announcement.Gm.AddWindow.roleNameValidateboxLabelContainer = $('#addWindow #roleNameValidateboxLabel');
				Announcement.Gm.AddWindow.roleNameValidateboxInputContainer = $('#addWindow #roleNameValidateboxInput');
				Announcement.Gm.AddWindow.levelComboboxLabelContainer = $('#addWindow #levelComboboxLabel');
				Announcement.Gm.AddWindow.levelComboboxInputContainer = $('#addWindow #levelComboboxInput');
				Announcement.Gm.AddWindow.submitButtonContainer = $('#addWindow #submitButton');
				Announcement.Gm.AddWindow.resetButtonContainer = $('#addWindow #resetButton');
				Announcement.Gm.AddWindow.create();
			},
			
			create: function() {
				Announcement.Gm.addWindowContainer.window({
					title: announcementGmAddWindowTitle,
					collapsible: false,
					minimizable: false,
					maximizable: false,
					closable: true,
					closed: true,
					modal: true,
				});
                                Component.Combobox.OperatorId.create(
                                        Announcement.Gm.AddWindow.operatorIdComboboxLabelContainer,
                                        Announcement.Gm.AddWindow.operatorIdComboboxInputContainer
                                );
                                Component.Combogrid.AreaNum.create(
                                        Announcement.Gm.AddWindow.areaNumCombogridLabelContainer,
                                        Announcement.Gm.AddWindow.areaNumCombogridInputContainer
                                );
				Component.Validatebox.RoleName.create(
					Announcement.Gm.AddWindow.roleNameValidateboxLabelContainer,
					Announcement.Gm.AddWindow.roleNameValidateboxInputContainer
				);
				Component.Combobox.Level.create(
					Announcement.Gm.AddWindow.levelComboboxLabelContainer,
					Announcement.Gm.AddWindow.levelComboboxInputContainer
				);
				Announcement.Gm.AddWindow.submitButtonContainer.linkbutton({
					iconCls: 'icon-ok',
					text: announcementGmAddWindowSubmitButtonText,
				});
				Announcement.Gm.AddWindow.submitButtonContainer.bind(
					'click',
					Announcement.Gm.AddWindow.doSubmit
				);
				Announcement.Gm.AddWindow.resetButtonContainer.linkbutton({
					iconCls: 'icon-undo',
					text: announcementGmAddWindowResetButtonText,
				})
				Announcement.Gm.AddWindow.resetButtonContainer.bind(
					'click',
					Announcement.Gm.AddWindow.doReset
				);
			},
			
			open: function() {
				Announcement.Gm.AddWindow.reset();
				Announcement.Gm.addWindowContainer.window('open');
			},
			
			close: function() {
				Announcement.Gm.addWindowContainer.window('close');
			},
			
			doSubmit: function() {
                                var operatorId = Announcement.Gm.AddWindow.operatorIdComboboxInputContainer.combobox('getValue');
				var gameAreaId = Announcement.Gm.AddWindow.areaNumCombogridInputContainer.combogrid('getValue');
                                var roleName = Announcement.Gm.AddWindow.roleNameValidateboxInputContainer[0].value;
				var level = Announcement.Gm.AddWindow.levelComboboxInputContainer.combobox('getValue');
				$.ajax({
					url: '/index.php/Announcement/gm/add',
					data: {
                                                operatorId: operatorId,
                                                gameAreaId: gameAreaId,
						roleName: roleName,
						level: level,
					}
				})
				.done(function(response) {
					if(response.errorCode === 0) {
						$.messager.alert(messageWindowTitle, announcementGmAddWindowSubmitSuccessInfo, 'info');
						Announcement.Gm.AddWindow.close();
						Announcement.Gm.View.DataGrid.load();
					}
				})
			},
			
			doReset: function() {
				Announcement.Gm.AddWindow.reset();
			},
			
			reset: function() {
				Announcement.Gm.AddWindow.operatorIdComboboxInputContainer.combobox('reset');
                                Announcement.Gm.AddWindow.areaNumCombogridInputContainer.combogrid('reset');
                                Announcement.Gm.AddWindow.levelComboboxInputContainer.combobox('reset');
				Announcement.Gm.AddWindow.roleNameValidateboxInputContainer[0].value = '';
			},
		},
		
		ModifyWindow: {
			roleNameValidateboxLabelContainer: '',
			roleNameValidateboxInputContainer: '',
			levelComboboxLabelContainer: '',
			levelComboboxInputContainer: '',
			submitButtonContainer: '',
			resetButtonContainer: '',
			
			init: function() {
				Announcement.Gm.ModifyWindow.roleNameValidateboxLabelContainer = $('#modifyWindow #roleNameValidateboxLabel');
				Announcement.Gm.ModifyWindow.roleNameValidateboxInputContainer = $('#modifyWindow #roleNameValidateboxInput');
				Announcement.Gm.ModifyWindow.levelComboboxLabelContainer = $('#modifyWindow #levelComboboxLabel');
				Announcement.Gm.ModifyWindow.levelComboboxInputContainer = $('#modifyWindow #levelComboboxInput');
				Announcement.Gm.ModifyWindow.submitButtonContainer = $('#modifyWindow #submitButton');
				Announcement.Gm.ModifyWindow.resetButtonContainer = $('#modifyWindow #resetButton');
				Announcement.Gm.ModifyWindow.create();
			},
			
			create: function() {
				Announcement.Gm.modifyWindowContainer.window({
					title: announcementGmModifyWindowTitle,
					collapsible: false,
					minimizable: false,
					maximizable: false,
					closable: true,
					closed: true,
					modal: true,
				});
				Component.Validatebox.RoleName.create(
					Announcement.Gm.ModifyWindow.roleNameValidateboxLabelContainer,
					Announcement.Gm.ModifyWindow.roleNameValidateboxInputContainer
				);
				Component.Combobox.Level.create(
					Announcement.Gm.ModifyWindow.levelComboboxLabelContainer,
					Announcement.Gm.ModifyWindow.levelComboboxInputContainer
				);
				Announcement.Gm.ModifyWindow.submitButtonContainer.linkbutton({
					iconCls: 'icon-ok',
					text: announcementGmModifyWindowSubmitButtonText,
				});
				Announcement.Gm.ModifyWindow.submitButtonContainer.bind(
					'click',
					Announcement.Gm.ModifyWindow.doSubmit
				);
				Announcement.Gm.ModifyWindow.resetButtonContainer.linkbutton({
					iconCls: 'icon-undo',
					text: announcementGmModifyWindowResetButtonText,
				})
				Announcement.Gm.ModifyWindow.resetButtonContainer.bind(
					'click',
					Announcement.Gm.ModifyWindow.doReset
				);
			},
			
			open: function() {
				var checkedRow = Announcement.Gm.View.DataGrid.getCheckedRows();
				
				if(checkedRow != false) {
					Announcement.Gm.ModifyWindow.reset(checkedRow);
					Announcement.Gm.modifyWindowContainer.window('open');
				}
			},
			
			close: function() {
				Announcement.Gm.modifyWindowContainer.window('close');
			},
			
			doSubmit: function() {
				var checkedRow = Announcement.Gm.View.DataGrid.getCheckedRows();
				
				$.ajax({
					url: '/index.php/Announcement/gm/modify',
					data: {
						uid: checkedRow[0].uid,
                                                operatorId: Announcement.Gm.View.DataGrid.operatorIdComboboxInputContainer.combobox('getValue'),
                                                gameAreaId: Announcement.Gm.View.DataGrid.areaNumCombogridInputContainer.combogrid('getValue'),
						roleName: Announcement.Gm.ModifyWindow.roleNameValidateboxInputContainer[0].value,
						levelId: Announcement.Gm.ModifyWindow.levelComboboxInputContainer.combobox('getValue')
					}
				})
				.done(function(response) {
					if(response.errorCode === 0) {
						$.messager.alert(messageWindowTitle, announcementGmModifyWindowSubmitSuccessInfo, 'info');
						Announcement.Gm.ModifyWindow.close();
						Announcement.Gm.View.DataGrid.load();
					}
				})
			},
			
			doReset: function() {
				var checkedRow = Announcement.Gm.View.DataGrid.getCheckedRows();
				Announcement.Gm.ModifyWindow.reset(checkedRow);
			},
			
			reset: function(checkedRow) {
				Announcement.Gm.ModifyWindow.roleNameValidateboxInputContainer[0].value = checkedRow[0].roleName;
				Announcement.Gm.ModifyWindow.levelComboboxInputContainer.combobox('setValue', checkedRow[0].gmLevel);
			},
		},
    }
}