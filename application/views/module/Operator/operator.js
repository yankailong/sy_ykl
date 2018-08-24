var Operator = {
	Manage: {
		addWindowContainer: '',
		modifyWindowContainer: '',
		
		init: function() {
			Language.getCurrLanguage();
			Utils.loadJavascriptFile('/application/views/libraries/component/' + language + '.js');
			Utils.loadJavascriptFile('/application/views/libraries/utils/' + language + '.js');
			Utils.loadJavascriptFile('/application/views/module/Operator/' + language + '.js');
			Utils.initAjax();
			
			Operator.Manage.View.init();
			Operator.Manage.addWindowContainer = $('#addWindow');
			Operator.Manage.AddWindow.init();
			Operator.Manage.modifyWindowContainer = $('#modifyWindow');
			Operator.Manage.ModifyWindow.init();
		},
		
		View: {
			dataGridPanelContainer: '',
			
			init: function() {
				Operator.Manage.View.dataGridPanelContainer = $('#dataGridPanel #dataGrid');
				Operator.Manage.View.DataGrid.init();
			},
			
			DataGrid: {
				init: function() {
					Operator.Manage.View.DataGrid.create();
				},
				
				create: function() {
					var width = $(document).width() - 40;
					var height = $(document).height() - 40;
					Operator.Manage.View.dataGridPanelContainer.width(width);
					Operator.Manage.View.dataGridPanelContainer.height(height);
					Operator.Manage.View.dataGridPanelContainer.datagrid({
						url: '/index.php/Operator/manage/getListData',
						idField: "operatorId",
						toolbar: [
							{
								iconCls: 'icon-add',
								text: operatorManageViewDataGridToolbarButtonText1,
								handler: Operator.Manage.AddWindow.open
							},
							{
								iconCls: 'icon-edit',
								text: operatorManageViewDataGridToolbarButtonText2,
								handler: Operator.Manage.ModifyWindow.open
							},
						],
						columns: [[
							{
								checkbox: true
							},
							{
								field: 'operatorName',
								title: operatorManageViewDataGridColumnTitle1,
								width: 100
							},
							{
								field: 'operatorFlag',
								title: operatorManageViewDataGridColumnTitle2,
								width: 100
							},
							{
								field: 'status',
								title: operatorManageViewDataGridColumnTitle3,
								width: 100,
								formatter: function(value) {
									if(value === '1') {
										return operatorStatusValue1;
									}
									else if(value === '2') {
										return operatorStatusValue2;
									}
									else {
										return value;
									}
								}
							}
						]],
						loadFilter: Utils.dataGridLoadFilter,
						pagination: true,
						pageSize: 50,
						pageList: [50, 100, 150, 200],
					})
				},
				
				load: function() {
					Operator.Manage.View.dataGridPanelContainer.datagrid('reload');
				},
				
				getCheckedRows: function(allowMulti) {
					var allowMulti = arguments[0] ? arguments[0] : false;
					var checkedRow = Operator.Manage.View.dataGridPanelContainer.datagrid('getChecked');
					
					if(Utils.dataGridValidateCheckedRow(checkedRow, allowMulti) === true) {
						return checkedRow;
					}
					else {
						return false;
					}
				},
			},
		},
		
		AddWindow: {
			operatorNameValidateboxLabelContainer: '',
			operatorNameValidateboxInputContainer: '',
			operatorFlagValidateboxLabelContainer: '',
			operatorFlagValidateboxInputContainer: '',
			submitButtonContainer: '',
			resetButtonContainer: '',
			
			init: function() {
				Operator.Manage.AddWindow.operatorNameValidateboxLabelContainer = $('#addWindow #operatorNameValidateboxLabel');
				Operator.Manage.AddWindow.operatorNameValidateboxInputContainer = $('#addWindow #operatorNameValidateboxInput');
				Operator.Manage.AddWindow.operatorFlagValidateboxLabelContainer = $('#addWindow #operatorFlagValidateboxLabel');
				Operator.Manage.AddWindow.operatorFlagValidateboxInputContainer = $('#addWindow #operatorFlagValidateboxInput');
				Operator.Manage.AddWindow.submitButtonContainer = $('#addWindow #submitButton');
				Operator.Manage.AddWindow.resetButtonContainer = $('#addWindow #resetButton');
				Operator.Manage.AddWindow.create();
			},
			
			create: function() {
				Operator.Manage.addWindowContainer.window({
					title: operatorManageAddWindowTitle,
					collapsible: false,
					minimizable: false,
					maximizable: false,
					closable: true,
					closed: true,
					modal: true,
				});
				Component.Validatebox.OperatorName.create(
					Operator.Manage.AddWindow.operatorNameValidateboxLabelContainer,
					Operator.Manage.AddWindow.operatorNameValidateboxInputContainer
				);
				Component.Validatebox.OperatorFlag.create(
					Operator.Manage.AddWindow.operatorFlagValidateboxLabelContainer,
					Operator.Manage.AddWindow.operatorFlagValidateboxInputContainer
				);
				Operator.Manage.AddWindow.submitButtonContainer.linkbutton({
					iconCls: 'icon-ok',
					text: operatorManageAddWindowSubmitButtonText,
				});
				Operator.Manage.AddWindow.submitButtonContainer.bind(
					'click',
					Operator.Manage.AddWindow.doSubmit
				);
				Operator.Manage.AddWindow.resetButtonContainer.linkbutton({
					iconCls: 'icon-undo',
					text: operatorManageAddWindowResetButtonText,
				})
				Operator.Manage.AddWindow.resetButtonContainer.bind(
					'click',
					Operator.Manage.AddWindow.doReset
				);
			},
			
			open: function() {
				Operator.Manage.AddWindow.doReset();
				Operator.Manage.addWindowContainer.window('open');
			},
			
			close: function() {
				Operator.Manage.addWindowContainer.window('close');
			},
			
			doSubmit: function() {
				$.ajax({
					url: '/index.php/Operator/manage/add',
					data: {
						operatorName: Operator.Manage.AddWindow.operatorNameValidateboxInputContainer[0].value,
						operatorFlag: Operator.Manage.AddWindow.operatorFlagValidateboxInputContainer[0].value,
					}
				})
				.done(function(response) {
					if(response.errorCode === 0) {
						$.messager.alert(messageWindowTitle, operatorManageAddWindowSubmitSuccessInfo, 'info');
						Operator.Manage.AddWindow.close();
						Operator.Manage.View.DataGrid.load();
					}
				})
			},
			
			doReset: function() {
				Operator.Manage.AddWindow.operatorNameValidateboxInputContainer[0].value = '';
				Operator.Manage.AddWindow.operatorFlagValidateboxInputContainer[0].value = '';
			},
		},
		
		ModifyWindow: {
			operatorNameValidateboxLabelContainer: '',
			operatorNameValidateboxInputContainer: '',
			operatorFlagValidateboxLabelContainer: '',
			operatorFlagValidateboxInputContainer: '',
			operatorStatusComboboxLabelContainer: '',
			operatorStatusComboboxInputContainer: '',
			submitButtonContainer: '',
			resetButtonContainer: '',
			
			init: function() {
				Operator.Manage.ModifyWindow.operatorNameValidateboxLabelContainer = $('#modifyWindow #operatorNameValidateboxLabel');
				Operator.Manage.ModifyWindow.operatorNameValidateboxInputContainer = $('#modifyWindow #operatorNameValidateboxInput');
				Operator.Manage.ModifyWindow.operatorFlagValidateboxLabelContainer = $('#modifyWindow #operatorFlagValidateboxLabel');
				Operator.Manage.ModifyWindow.operatorFlagValidateboxInputContainer = $('#modifyWindow #operatorFlagValidateboxInput');
				Operator.Manage.ModifyWindow.operatorStatusComboboxLabelContainer = $('#modifyWindow #operatorStatusComboboxLabel');
				Operator.Manage.ModifyWindow.operatorStatusComboboxInputContainer = $('#modifyWindow #operatorStatusComboboxInput');
				Operator.Manage.ModifyWindow.submitButtonContainer = $('#modifyWindow #submitButton');
				Operator.Manage.ModifyWindow.resetButtonContainer = $('#modifyWindow #resetButton');
				Operator.Manage.ModifyWindow.create();
			},
			
			create: function() {
				Operator.Manage.modifyWindowContainer.window({
					title: operatorManageModifyWindowTitle,
					collapsible: false,
					minimizable: false,
					maximizable: false,
					closable: true,
					closed: true,
					modal: true,
				});
				Component.Validatebox.OperatorName.create(
					Operator.Manage.ModifyWindow.operatorNameValidateboxLabelContainer,
					Operator.Manage.ModifyWindow.operatorNameValidateboxInputContainer
				);
				Component.Validatebox.OperatorFlag.create(
					Operator.Manage.ModifyWindow.operatorFlagValidateboxLabelContainer,
					Operator.Manage.ModifyWindow.operatorFlagValidateboxInputContainer
				);
				Component.Combobox.OperatorStatus.create(
					Operator.Manage.ModifyWindow.operatorStatusComboboxLabelContainer,
					Operator.Manage.ModifyWindow.operatorStatusComboboxInputContainer
				);
				Operator.Manage.ModifyWindow.submitButtonContainer.linkbutton({
					iconCls: 'icon-ok',
					text: operatorManageModifyWindowSubmitButtonText,
				});
				Operator.Manage.ModifyWindow.submitButtonContainer.bind(
					'click',
					Operator.Manage.ModifyWindow.doSubmit
				);
				Operator.Manage.ModifyWindow.resetButtonContainer.linkbutton({
					iconCls: 'icon-undo',
					text: operatorManageModifyWindowResetButtonText,
				})
				Operator.Manage.ModifyWindow.resetButtonContainer.bind(
					'click',
					Operator.Manage.ModifyWindow.doReset
				);
			},
			
			open: function() {
				var checkedRow = Operator.Manage.View.DataGrid.getCheckedRows();
				
				if(checkedRow != false) {
					Operator.Manage.ModifyWindow.operatorNameValidateboxInputContainer[0].value = checkedRow[0].operatorName;
					Operator.Manage.ModifyWindow.operatorFlagValidateboxInputContainer[0].value = checkedRow[0].operatorFlag;
					Operator.Manage.ModifyWindow.operatorStatusComboboxInputContainer.combobox('setValue', checkedRow[0].status);
					Operator.Manage.modifyWindowContainer.window('open');
				}
			},
			
			close: function() {
				Operator.Manage.modifyWindowContainer.window('close');
			},
			
			doSubmit: function() {
				var checkedRow = Operator.Manage.View.DataGrid.getCheckedRows();
				
				$.ajax({
					url: '/index.php/Operator/manage/modify',
					data: {
						operatorId: checkedRow[0].operatorId,
						operatorName: Operator.Manage.ModifyWindow.operatorNameValidateboxInputContainer[0].value,
						operatorFlag: Operator.Manage.ModifyWindow.operatorFlagValidateboxInputContainer[0].value,
						status: Operator.Manage.ModifyWindow.operatorStatusComboboxInputContainer.combobox('getValue'),
					}
				})
				.done(function(response) {
					if( response.errorCode ===0 ) {
						$.messager.alert(messageWindowTitle, operatorManageModifyWindowSubmitSuccessInfo, 'info');
						Operator.Manage.ModifyWindow.close();
						Operator.Manage.View.DataGrid.load();
					}
				})
			},
			
			doReset: function() {
				var checkedRow = Operator.Manage.View.DataGrid.getCheckedRows();
				Operator.Manage.ModifyWindow.operatorNameValidateboxInputContainer[0].value = checkedRow[0].operatorName;
				Operator.Manage.ModifyWindow.operatorFlagValidateboxInputContainer[0].value = checkedRow[0].operatorFlag;
				Operator.Manage.ModifyWindow.operatorStatusComboboxInputContainer.combobox('setValue', checkedRow[0].status);
			},
		}
	}
}