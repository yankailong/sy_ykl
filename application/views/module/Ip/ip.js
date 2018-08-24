var Ip = {
	Manage: {
		addWindowContainer: '',
		modifyWindowContainer: '',
		
		init: function() {
			Language.getCurrLanguage();
			Utils.loadJavascriptFile('/application/views/libraries/component/' + language + '.js');
			Utils.loadJavascriptFile('/application/views/libraries/utils/' + language + '.js');
			Utils.loadJavascriptFile('/application/views/module/Ip/' + language + '.js');
			Utils.initAjax();
			
			Ip.Manage.View.init();
			Ip.Manage.addWindowContainer = $('#addWindow');
			Ip.Manage.AddWindow.init();
			Ip.Manage.modifyWindowContainer = $('#modifyWindow');
			Ip.Manage.ModifyWindow.init();
		},
		
		View: {
			dataGridPanelContainer: '',
			
			init: function() {
				Ip.Manage.View.dataGridPanelContainer = $('#dataGridPanel #dataGrid');
				Ip.Manage.View.DataGrid.init();
			},
			
			DataGrid: {
				init: function() {
					Ip.Manage.View.DataGrid.create();
				},
				
				create: function() {
					var width = $(document).width() - 40;
					var height = $(document).height() - 40;
					Ip.Manage.View.dataGridPanelContainer.width(width);
					Ip.Manage.View.dataGridPanelContainer.height(height);
					Ip.Manage.View.dataGridPanelContainer.datagrid({
						url: '/index.php/Ip/manage/getListData',
						idField: "ipId",
						toolbar: [
							{
								iconCls: 'icon-add',
								text: ipManageViewDataGridToolbarButtonText1,
								handler: Ip.Manage.AddWindow.open
							},
							{
								iconCls: 'icon-edit',
								text: ipManageViewDataGridToolbarButtonText2,
								handler: Ip.Manage.ModifyWindow.open
								
							}
						],
						columns: [[
							{
								checkbox: true
							},
							{
								field: 'ipAddress',
								title: ipManageViewDataGridColumnTitle1,
								width: 100
							},
							{
								field: 'ipTypeName',
								title: ipManageViewDataGridColumnTitle2,
								width: 100
							},
						]],
						loadFilter: Utils.dataGridLoadFilter,
						pagination: true,
						pageSize: 50,
						pageList: [50, 100, 150, 200],
					})
				},
				
				load: function() {
					Ip.Manage.View.dataGridPanelContainer.datagrid('reload');
				},
				
				getCheckedRows: function(allowMulti) {
					var allowMulti = arguments[0] ? arguments[0] : false;
					var checkedRow = Ip.Manage.View.dataGridPanelContainer.datagrid('getChecked');
					
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
			ipAddressValidateboxLabelContainer: '',
			ipAddressValidateboxInputContainer: '',
			ipTypeComboboxLabelContainer: '',
			ipTypeComboboxInputContainer: '',
			submitButtonContainer: '',
			resetButtonContainer: '',
			
			init: function() {
				Ip.Manage.AddWindow.ipAddressValidateboxLabelContainer = $('#addWindow #ipAddressValidateboxLabel');
				Ip.Manage.AddWindow.ipAddressValidateboxInputContainer = $('#addWindow #ipAddressValidateboxInput');
				Ip.Manage.AddWindow.ipTypeComboboxLabelContainer = $('#addWindow #ipTypeComboboxLabel');
				Ip.Manage.AddWindow.ipTypeComboboxInputContainer = $('#addWindow #ipTypeComboboxInput');
				Ip.Manage.AddWindow.submitButtonContainer = $('#addWindow #submitButton');
				Ip.Manage.AddWindow.resetButtonContainer = $('#addWindow #resetButton');
				Ip.Manage.AddWindow.create();
			},
			
			create: function() {
				Ip.Manage.addWindowContainer.window({
					title: ipManageAddWindowTitle,
					collapsible: false,
					minimizable: false,
					maximizable: false,
					closable: true,
					closed: true,
					modal: true,
				});
				Component.Validatebox.IpAddress.create(
					Ip.Manage.AddWindow.ipAddressValidateboxLabelContainer,
					Ip.Manage.AddWindow.ipAddressValidateboxInputContainer
				);
				Component.Combobox.IpType.create(
					Ip.Manage.AddWindow.ipTypeComboboxLabelContainer,
					Ip.Manage.AddWindow.ipTypeComboboxInputContainer
				);
				Ip.Manage.AddWindow.submitButtonContainer.linkbutton({
					iconCls: 'icon-ok',
					text: ipManageAddWindowSubmitButtonText,
				});
				Ip.Manage.AddWindow.submitButtonContainer.bind(
					'click',
					Ip.Manage.AddWindow.doSubmit
				);
				Ip.Manage.AddWindow.resetButtonContainer.linkbutton({
					iconCls: 'icon-undo',
					text: ipManageAddWindowResetButtonText,
				});
				Ip.Manage.AddWindow.resetButtonContainer.bind(
					'click',
					Ip.Manage.AddWindow.doReset
				);
			},
			
			open: function() {
				Ip.Manage.AddWindow.doReset();
				Ip.Manage.addWindowContainer.window('open');
			},
			
			doSubmit: function() {
				$.ajax({
					url: '/index.php/Ip/manage/add',
					data: {
						ipAddress: Ip.Manage.AddWindow.ipAddressValidateboxInputContainer[0].value,
						ipTypeId: Ip.Manage.AddWindow.ipTypeComboboxInputContainer.combobox('getValue')
					}
				})
				.done(function(response) {
					if(response.errorCode === 0) {
						$.messager.alert(messageWindowTitle, ipManageAddWindowSubmitSuccessInfo, 'info');
						Ip.Manage.View.DataGrid.load();
						Ip.Manage.AddWindow.doReset();
					}
				})
			},
			
			doReset: function() {
				Ip.Manage.AddWindow.ipAddressValidateboxInputContainer[0].value = '';
				Ip.Manage.AddWindow.ipTypeComboboxInputContainer.combobox('setValue', '');
			},
		},
		
		ModifyWindow: {
			ipAddressValidateboxLabelContainer: '',
			ipAddressValidateboxInputContainer: '',
			ipTypeComboboxLabelContainer: '',
			ipTypeComboboxInputContainer: '',
			submitButtonContainer: '',
			resetButtonContainer: '',
			
			init: function() {
				Ip.Manage.ModifyWindow.ipAddressValidateboxLabelContainer = $('#modifyWindow #ipAddressValidateboxLabel');
				Ip.Manage.ModifyWindow.ipAddressValidateboxInputContainer = $('#modifyWindow #ipAddressValidateboxInput');
				Ip.Manage.ModifyWindow.ipTypeComboboxLabelContainer = $('#modifyWindow #ipTypeComboboxLabel');
				Ip.Manage.ModifyWindow.ipTypeComboboxInputContainer = $('#modifyWindow #ipTypeComboboxInput');
				Ip.Manage.ModifyWindow.submitButtonContainer = $('#modifyWindow #submitButton');
				Ip.Manage.ModifyWindow.resetButtonContainer = $('#modifyWindow #resetButton');
				Ip.Manage.ModifyWindow.create();
			},
			
			create: function() {
				Ip.Manage.modifyWindowContainer.window({
					title: ipManageModifyWindowTitle,
					collapsible: false,
					minimizable: false,
					maximizable: false,
					closable: true,
					closed: true,
					modal: true,
				});
				Component.Validatebox.IpAddress.create(
					Ip.Manage.ModifyWindow.ipAddressValidateboxLabelContainer,
					Ip.Manage.ModifyWindow.ipAddressValidateboxInputContainer
				);
				Component.Combobox.IpType.create(
					Ip.Manage.ModifyWindow.ipTypeComboboxLabelContainer,
					Ip.Manage.ModifyWindow.ipTypeComboboxInputContainer
				);
				Ip.Manage.ModifyWindow.submitButtonContainer.linkbutton({
					iconCls: 'icon-ok',
					text: ipManageModifyWindowSubmitButtonText,
				});
				Ip.Manage.ModifyWindow.submitButtonContainer.bind(
					'click',
					Ip.Manage.ModifyWindow.doSubmit
				);
				Ip.Manage.ModifyWindow.resetButtonContainer.linkbutton({
					iconCls: 'icon-undo',
					text: ipManageModifyWindowResetButtonText,
				});
				Ip.Manage.ModifyWindow.resetButtonContainer.bind(
					'click',
					Ip.Manage.ModifyWindow.doReset
				);
			},
			
			open: function() {
				var checkedRow = Ip.Manage.View.DataGrid.getCheckedRows();
				
				if(checkedRow != false) {
					Ip.Manage.ModifyWindow.doReset();
					Ip.Manage.modifyWindowContainer.window('open');
				}
			},
			
			close: function() {
				Ip.Manage.modifyWindowContainer.window('close');
			},
			
			doSubmit: function() {
				var checkedRow = Ip.Manage.View.DataGrid.getCheckedRows();
				$.ajax({
					url: '/index.php/Ip/manage/modify',
					data: {
						ipId: checkedRow[0].ipId,
						ipAddress: Ip.Manage.ModifyWindow.ipAddressValidateboxInputContainer[0].value,
						ipTypeId: Ip.Manage.ModifyWindow.ipTypeComboboxInputContainer.combobox('getValue'),
					}
				})
				.done(function(response) {
					if(response.errorCode === 0) {
						$.messager.alert(messageWindowTitle, ipManageModifyWindowSubmitSuccessInfo, 'info');
						Ip.Manage.ModifyWindow.close();
						Ip.Manage.View.DataGrid.load();
					}
				})
			},
			
			doReset: function() {
				var checkedRow = Ip.Manage.View.DataGrid.getCheckedRows();
				Ip.Manage.ModifyWindow.ipAddressValidateboxInputContainer[0].value = checkedRow[0].ipAddress;
				Ip.Manage.ModifyWindow.ipTypeComboboxInputContainer.combobox('setValue', checkedRow[0].ipTypeId);
			}
		},
	},
}