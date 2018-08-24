var Server = {
	Manage: {
		addWindowContainer: '',
		modifyWindowContainer: '',
		assignIpWindowContainer: '',
		portGroupWindowContainer: '',
		
		init: function() {
			Language.getCurrLanguage();
			Utils.loadJavascriptFile('/application/views/libraries/component/' + language + '.js');
			Utils.loadJavascriptFile('/application/views/libraries/utils/' + language + '.js');
			Utils.loadJavascriptFile('/application/views/module/Server/' + language + '.js');
			Utils.initAjax();
			
			Server.Manage.View.init();
			Server.Manage.addWindowContainer = $('#addWindow');
			Server.Manage.AddWindow.init();
			Server.Manage.modifyWindowContainer = $('#modifyWindow');
			Server.Manage.ModifyWindow.init();
			Server.Manage.assignIpWindowContainer = $('#assignIpWindow');
			Server.Manage.AssignIpWindow.init();
			Server.Manage.portGroupWindowContainer = $('#portGroupWindow');
			Server.Manage.PortGroupWindow.init();
		},
		
		View: {
			dataGridPanelContainer: '',
			
			init: function() {
				Server.Manage.View.dataGridPanelContainer = $('#dataGridPanel #dataGrid');
				Server.Manage.View.DataGrid.init();
			},
			
			DataGrid: {
				init: function() {
					Server.Manage.View.DataGrid.create();
					Server.Manage.View.DataGrid.load();
				},
			
				create: function() {
					var width = $(document).width() - 40;
					var height = $(document).height() - 40;
					Server.Manage.View.dataGridPanelContainer.width(width);
					Server.Manage.View.dataGridPanelContainer.height(height);
					Server.Manage.View.dataGridPanelContainer.datagrid({
						idField: "serverId",
						toolbar: [
							{
								iconCls: 'icon-add',
								text: ServerManageViewDataGridToolbarButtonText1,
								handler: Server.Manage.AddWindow.open
							},
							{
								iconCls: 'icon-edit',
								text: ServerManageViewDataGridToolbarButtonText2,
								handler: Server.Manage.ModifyWindow.open
							},
							{
								iconCls: 'icon-edit',
								text: ServerManageViewDataGridToolbarButtonText3,
								handler: Server.Manage.AssignIpWindow.open
							},
							{
								iconCls: 'icon-edit',
								text: ServerManageViewDataGridToolbarButtonText4,
								handler: Server.Manage.PortGroupWindow.open
							}
						],
						loadFilter: Utils.dataGridLoadFilter,
						pagination: true,
						pageSize: 50,
						pageList: [50, 100, 150, 200],
					});
				},
				
				load: function() {
					$.ajax({
						url: '/index.php/Server/manage/getMaxGameAreaNum',
					})
					.done(function(response) {
						if(response.errorCode === 0) {
							var baseColumns = [
								{
									checkbox: true
								},
								{
									field: 'serverName',
									title: ServerManageViewDataGridColumnTitle1,
									width: 150
								},
								{
									field: 'serverTypeName',
									title: ServerManageViewDataGridColumnTitle2,
										width: 100
								},
								{
									field: 'ipAddress',
									title: ServerManageViewDataGridColumnTitle3,
									width: 150
									},
								{
									field: 'status',
									title: ServerManageViewDataGridColumnTitle5,
									width: 60,
									formatter: function(value) {
										if(value === '1') {
											return serverStatusValue1;
											}
										else if(value === '2') {
											return serverStatusValue2;
										}
										else {
											return value;
										}
									}
								},
								{
									field: 'maxGameAreaNum',
									title: ServerManageViewDataGridColumnTitle7,
									width: 80,
								},
								{
									field: 'memo',
									title: ServerManageViewDataGridColumnTitle6,
									width: 100
								}
							];
								
							
							
							Server.Manage.View.dataGridPanelContainer.datagrid({
								url: '/index.php/Server/manage/getListData',
								columns: [baseColumns]
							});	
						}
					});
				},
				
				getCheckedRows: function(allowMulti) {
					var allowMulti = arguments[0] ? arguments[0] : false;
					var checkedRow = Server.Manage.View.dataGridPanelContainer.datagrid('getChecked');
					
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
			serverNameValidateboxLabelContainer: '',
			serverNameValidateboxInputContainer: '',
			serverTypeComboboxLabelContainer: '',
			serverTypeComboboxInputContainer: '',
			maxGameAreaNumLabelContainer: '',
			maxGameAreaNumInputContainer: '',
			memoValidateboxLabelContainer: '',
			memoValidateboxInputContainer: '',
			submitButtonContainer: '',
			resetButtonContainer: '',
			
			init: function() {
				Server.Manage.AddWindow.serverNameValidateboxLabelContainer = $('#addWindow #serverNameValidateboxLabel');
				Server.Manage.AddWindow.serverNameValidateboxInputContainer = $('#addWindow #serverNameValidateboxInput');
				Server.Manage.AddWindow.serverTypeComboboxLabelContainer = $('#addWindow #serverTypeComboboxLabel');
				Server.Manage.AddWindow.serverTypeComboboxInputContainer = $('#addWindow #serverTypeComboboxInput');
				Server.Manage.AddWindow.maxGameAreaNumLabelContainer = $('#addWindow #maxGameAreaNumLabel');
				Server.Manage.AddWindow.maxGameAreaNumInputContainer = $('#addWindow #maxGameAreaNumInput');
				Server.Manage.AddWindow.memoValidateboxLabelContainer = $('#addWindow #memoValidateboxLabel');
				Server.Manage.AddWindow.memoValidateboxInputContainer = $('#addWindow #memoValidateboxInput');
				Server.Manage.AddWindow.submitButtonContainer = $('#addWindow #submitButton');
				Server.Manage.AddWindow.resetButtonContainer = $('#addWindow #resetButton');
				Server.Manage.AddWindow.create();
			},
			
			create: function() {
				Server.Manage.addWindowContainer.window({
					title: serverManageAddWindowTitle,
					collapsible: false,
					minimizable: false,
					maximizable: false,
					closable: true,
					closed: true,
					modal: true,
				});
				Component.Validatebox.ServerName.create(
					Server.Manage.AddWindow.serverNameValidateboxLabelContainer,
					Server.Manage.AddWindow.serverNameValidateboxInputContainer
				);
				Component.Combobox.ServerType.create(
					Server.Manage.AddWindow.serverTypeComboboxLabelContainer,
					Server.Manage.AddWindow.serverTypeComboboxInputContainer
				);
				Component.Numberbox.MaxGameAreaNum.create(
					Server.Manage.AddWindow.maxGameAreaNumLabelContainer,
					Server.Manage.AddWindow.maxGameAreaNumInputContainer
				);
				Component.Validatebox.Memo.create(
					Server.Manage.AddWindow.memoValidateboxLabelContainer,
					Server.Manage.AddWindow.memoValidateboxInputContainer
				);
				Server.Manage.AddWindow.submitButtonContainer.linkbutton({
					iconCls: 'icon-ok',
					text: serverManageAddWindowSubmitButtonText,
				});
				Server.Manage.AddWindow.submitButtonContainer.bind(
					'click',
					Server.Manage.AddWindow.doSubmit
				);
				Server.Manage.AddWindow.resetButtonContainer.linkbutton({
					iconCls: 'icon-undo',
					text: serverManageAddWindowResetButtonText,
				});
				Server.Manage.AddWindow.resetButtonContainer.bind(
					'click',
					Server.Manage.AddWindow.doReset
				);
			},
			
			open: function() {
				Server.Manage.AddWindow.doReset();
				Server.Manage.addWindowContainer.window('open');
			},
			
			close: function() {
				Server.Manage.addWindowContainer.window('close');
			},
			
			doSubmit: function() {
				$.ajax({
					url: '/index.php/Server/manage/add',
					data: {
						serverName: Server.Manage.AddWindow.serverNameValidateboxInputContainer[0].value,
						serverTypeId: Server.Manage.AddWindow.serverTypeComboboxInputContainer.combobox('getValue'),
						maxGameAreaNum: Server.Manage.AddWindow.maxGameAreaNumInputContainer.numberbox('getValue'),
						memo: Server.Manage.AddWindow.memoValidateboxInputContainer[0].value,
					}
				})
				.done(function(response) {
					if(response.errorCode === 0) {
						$.messager.alert(messageWindowTitle, serverManageAddWindowSubmitSuccessInfo, 'info');
						Server.Manage.AddWindow.close();
						Server.Manage.View.DataGrid.load();
					}
				});
			},
			
			doReset: function() {
				Server.Manage.AddWindow.serverNameValidateboxInputContainer[0].value = '';
				Server.Manage.AddWindow.serverTypeComboboxInputContainer.combobox('setValue', '');
				Server.Manage.AddWindow.maxGameAreaNumInputContainer.numberbox('clear');
				Server.Manage.AddWindow.memoValidateboxInputContainer[0].value = '';
			},
		},
		
		
		ModifyWindow: {
			serverNameValidateboxLabelContainer: '',
			serverNameValidateboxInputContainer: '',
			serverTypeComboboxLabelContainer: '',
			serverTypeComboboxInputContainer: '',
			maxGameAreaNumLabelContainer: '',
			maxGameAreaNumInputContainer: '',
			serverStatusComboboxLabelContainer: '',
			ServerStatusComboboxInputContainer: '',
			memoValidateboxLabelContainer: '',
			memoValidateboxInputContainer: '',
			submitButtonContainer: '',
			resetButtonContainer: '',
			
			init: function() {
				Server.Manage.ModifyWindow.serverNameValidateboxLabelContainer = $('#modifyWindow #serverNameValidateboxLabel');
				Server.Manage.ModifyWindow.serverNameValidateboxInputContainer = $('#modifyWindow #serverNameValidateboxInput');
				Server.Manage.ModifyWindow.serverTypeComboboxLabelContainer = $('#modifyWindow #serverTypeComboboxLabel');
				Server.Manage.ModifyWindow.serverTypeComboboxInputContainer = $('#modifyWindow #serverTypeComboboxInput');
				Server.Manage.ModifyWindow.maxGameAreaNumLabelContainer = $('#modifyWindow #maxGameAreaNumLabel');
				Server.Manage.ModifyWindow.maxGameAreaNumInputContainer = $('#modifyWindow #maxGameAreaNumInput');
				Server.Manage.ModifyWindow.serverStatusComboboxLabelContainer = $('#modifyWindow #serverStatusComboboxLabel');
				Server.Manage.ModifyWindow.ServerStatusComboboxInputContainer = $('#modifyWindow #serverStatusComboboxInput');
				Server.Manage.ModifyWindow.memoValidateboxLabelContainer = $('#modifyWindow #memoValidateboxLabel');
				Server.Manage.ModifyWindow.memoValidateboxInputContainer = $('#modifyWindow #memoValidateboxInput');
				Server.Manage.ModifyWindow.submitButtonContainer = $('#modifyWindow #submitButton');
				Server.Manage.ModifyWindow.resetButtonContainer = $('#modifyWindow #resetButton');
				Server.Manage.ModifyWindow.create();
			},
			
			create: function() {
				Server.Manage.modifyWindowContainer.window({
					title: serverManageModifyWindowTitle,
					collapsible: false,
					minimizable: false,
					maximizable: false,
					closable: true,
					closed: true,
					modal: true,
				});
				Component.Validatebox.ServerName.create(
					Server.Manage.ModifyWindow.serverNameValidateboxLabelContainer,
					Server.Manage.ModifyWindow.serverNameValidateboxInputContainer
				);
				Component.Combobox.ServerType.create(
					Server.Manage.ModifyWindow.serverTypeComboboxLabelContainer,
					Server.Manage.ModifyWindow.serverTypeComboboxInputContainer
				);
				Component.Numberbox.MaxGameAreaNum.create(
					Server.Manage.ModifyWindow.maxGameAreaNumLabelContainer,
					Server.Manage.ModifyWindow.maxGameAreaNumInputContainer
				);
				Component.Combobox.ServerStatus.create(
					Server.Manage.ModifyWindow.serverStatusComboboxLabelContainer,
					Server.Manage.ModifyWindow.ServerStatusComboboxInputContainer
				);
				Component.Validatebox.Memo.create(
					Server.Manage.ModifyWindow.memoValidateboxLabelContainer,
					Server.Manage.ModifyWindow.memoValidateboxInputContainer
				);
				Server.Manage.ModifyWindow.submitButtonContainer.linkbutton({
					iconCls: 'icon-ok',
					text: serverManageModifyWindowSubmitButtonText,
				});
				Server.Manage.ModifyWindow.submitButtonContainer.bind(
					'click',
					Server.Manage.ModifyWindow.doSubmit
				);
				Server.Manage.ModifyWindow.resetButtonContainer.linkbutton({
					iconCls: 'icon-undo',
					text: serverManageModifyWindowResetButtonText,
				});
				Server.Manage.ModifyWindow.resetButtonContainer.bind(
					'click',
					Server.Manage.ModifyWindow.doReset
				);
			},

			open: function() {
				var checkedRow = Server.Manage.View.DataGrid.getCheckedRows();
				
				if(checkedRow != false) {
					Server.Manage.ModifyWindow.serverNameValidateboxInputContainer[0].value = checkedRow[0].serverName;
					Server.Manage.ModifyWindow.serverTypeComboboxInputContainer.combobox('setValue', checkedRow[0].serverTypeId);
					Server.Manage.ModifyWindow.maxGameAreaNumInputContainer.numberbox('setValue', checkedRow[0].maxGameAreaNum);
					Server.Manage.ModifyWindow.ServerStatusComboboxInputContainer.combobox('setValue', checkedRow[0].status);
					Server.Manage.ModifyWindow.memoValidateboxInputContainer[0].value = checkedRow[0].memo;
					Server.Manage.modifyWindowContainer.window('open');
				}
			},
			
			close: function() {
				Server.Manage.modifyWindowContainer.window('close');
			},
			
			doSubmit: function() {
				var checkedRow = Server.Manage.View.DataGrid.getCheckedRows();
				
				$.ajax({
					url: '/index.php/Server/manage/modify',
					data: {
						serverId: checkedRow[0].serverId,
						serverName: Server.Manage.ModifyWindow.serverNameValidateboxInputContainer[0].value,
						serverTypeId: Server.Manage.ModifyWindow.serverTypeComboboxInputContainer.combobox('getValue'),
						maxGameAreaNum: Server.Manage.ModifyWindow.maxGameAreaNumInputContainer.numberbox('getValue'),
						status: Server.Manage.ModifyWindow.ServerStatusComboboxInputContainer.combobox('getValue'),
						memo: Server.Manage.ModifyWindow.memoValidateboxInputContainer[0].value,
					}
				})
				.done(function(response) {
					if(response.errorCode ===0) {
						$.messager.alert(messageWindowTitle, serverManageModifyWindowSubmitSuccessInfo, 'info');
						Server.Manage.ModifyWindow.close();
						Server.Manage.View.DataGrid.load();
					}
				});
			},
			
			doReset: function() {
				var checkedRow = Server.Manage.View.DataGrid.getCheckedRows();
				Server.Manage.ModifyWindow.serverNameValidateboxInputContainer[0].value = checkedRow[0].serverName;
				Server.Manage.ModifyWindow.serverTypeComboboxInputContainer.combobox('setValue', checkedRow[0].serverTypeId);
				Server.Manage.ModifyWindow.serverMaxGameAreaNumInputContainer.numberbox('setValue', checkedRow[0].maxGameAreaNum);
				Server.Manage.ModifyWindow.ServerStatusComboboxInputContainer.combobox('setValue', checkedRow[0].status);
				Server.Manage.ModifyWindow.memoValidateboxInputContainer[0].value = checkedRow[0].memo;
			},
		},
		
		AssignIpWindow: {
			dataGridPanelContainer: '',
			submitButtonContainer: '',
			resetButtonContainer: '',
			
			init: function() {
				Server.Manage.AssignIpWindow.dataGridPanelContainer = $('#assignIpWindow #dataGrid');
				Server.Manage.AssignIpWindow.submitButtonContainer = $('#assignIpWindow #submitButton');
				Server.Manage.AssignIpWindow.resetButtonContainer = $('#assignIpWindow #resetButton');
				Server.Manage.AssignIpWindow.create();
			},
			
			DataGrid: {
				create: function() {
					Server.Manage.AssignIpWindow.dataGridPanelContainer.height(423);
					Server.Manage.AssignIpWindow.dataGridPanelContainer.datagrid({
						idField: "ipId",
						fitColumns: true,
						columns: [[
							{
								checkbox: true
							},
							{
								field: 'ipTypeName',
								title: serverManageAssignWindowDataGridColumnTitle2,
								width: 60
							},
							{
								field: 'ipAddress',
								title: serverManageAssignWindowDataGridColumnTitle1,
								width: 100
							},
						]],
						loadFilter: Utils.dataGridLoadFilter,
						onLoadSuccess: function(data) {
							var rowData = data.rows;
							$.each(rowData, function(idx, val) {
								if(val.serverId > 0) {
									Server.Manage.AssignIpWindow.dataGridPanelContainer.datagrid("selectRow", idx);
								}
							}); 
						},
					});
				},
				
				load: function() {
					Server.Manage.AssignIpWindow.dataGridPanelContainer.datagrid('unselectAll');
					Server.Manage.AssignIpWindow.dataGridPanelContainer.datagrid('reload');
				},
				
				getCheckedRows: function() {
					return Server.Manage.AssignIpWindow.dataGridPanelContainer.datagrid('getChecked');
				},
			},
			
			create: function() {
				Server.Manage.assignIpWindowContainer.window({
					title: serverManageAssignWindowTitle,
					width: 300,
					height: 500,
					collapsible: false,
					minimizable: false,
					maximizable: false,
					closable: true,
					closed: true,
					modal: true,
				});
				Server.Manage.AssignIpWindow.DataGrid.create();
				Server.Manage.AssignIpWindow.submitButtonContainer.linkbutton({
					iconCls: 'icon-ok',
					text: serverManageAssignWindowSubmitButtonText,
				});
				Server.Manage.AssignIpWindow.submitButtonContainer.bind(
					'click',
					Server.Manage.AssignIpWindow.doSubmit
				);
				Server.Manage.AssignIpWindow.resetButtonContainer.linkbutton({
					iconCls: 'icon-undo',
					text: serverManageAssignWindowResetButtonText,
				});
				Server.Manage.AssignIpWindow.resetButtonContainer.bind(
					'click',
					Server.Manage.AssignIpWindow.doReset
				);
			},
			
			open: function() {
				var checkedRow = Server.Manage.View.DataGrid.getCheckedRows();
				Server.Manage.AssignIpWindow.dataGridPanelContainer.datagrid('unselectAll');
				
				if(checkedRow != false) {
					Server.Manage.AssignIpWindow.dataGridPanelContainer.datagrid({
						url: '/index.php/Server/manage/getServerIp',
						queryParams: {
							serverId: checkedRow[0].serverId
						}
					});
				
					Server.Manage.assignIpWindowContainer.window('open');
				}
			},
			
			close: function() {
				Server.Manage.assignIpWindowContainer.window('close');
			},
			
			doSubmit: function() {
				var checkedRow = Server.Manage.View.DataGrid.getCheckedRows();
				var serverId = checkedRow[0].serverId;
				checkedRows = Server.Manage.AssignIpWindow.DataGrid.getCheckedRows();
				var ipIdArray = [];
				
				for(index = 0; index < checkedRows.length; index++) {
					ipIdArray.push(checkedRows[index].ipId);
				}
				
				$.ajax({
					url: '/index.php/Server/manage/setServerIp',
					data: {
						serverId: serverId,
						ipIdString: ipIdArray.toString()
					}
				})
				.done(function(response) {
					if(response.errorCode === 0) {
						$.messager.alert(messageWindowTitle, serverManageAssignWindowSubmitSuccessInfo, 'info');
						Server.Manage.AssignIpWindow.close();
						Server.Manage.View.DataGrid.load();
					}
				});
			},
			
			doReset: function() {
				Server.Manage.AssignIpWindow.DataGrid.load();
			},
		},
		
		PortGroupWindow: {
			dataGridPanelContainer: '',
			submitButtonContainer: '',
			resetButtonContainer: '',
			
			init: function() {
				Server.Manage.PortGroupWindow.dataGridPanelContainer = $('#portGroupWindow #dataGrid');
				Server.Manage.PortGroupWindow.submitButtonContainer = $('#portGroupWindow #submitButton');
				Server.Manage.PortGroupWindow.resetButtonContainer = $('#portGroupWindow #resetButton');
				Server.Manage.PortGroupWindow.create();
			},
			
			DataGrid: {
				create: function() {
					Server.Manage.PortGroupWindow.dataGridPanelContainer.height(423);
					Server.Manage.PortGroupWindow.dataGridPanelContainer.datagrid({
						fitColumns: true,
						selectOnCheck: false,
						checkOnSelect: false,
						columns: [[
							{
								field: 'portGroup',
								title: serverManagePortGroupWindowDataGridColumnTitle1,
								width: 60
							},
							{
								field: 'status',
								title: serverManagePortGroupWindowDataGridColumnTitle2,
								width: 100,
								formatter: function(value) {
									if(value === 1) {
										return portGroupStatus1;
									}
									else if(value === 2){
										return portGroupStatus2;
									}
									else {
										return value;
									}
								},
								styler: function(value) {
									if(value === 2) {
										return 'background-color:#ffee00;color:red;';
									}
								},
							},
						]],
						onDblClickCell: function(index, field, value) {
							if(field === 'status') {
								var status = (value + 1) % 2
								
								if(status === 0) {
									status = 2;
								}
								
								Server.Manage.PortGroupWindow.dataGridPanelContainer.datagrid(
									'updateRow',
									{
										index: index,
										row: {
											status: status,
										},
									}
								);
							}
						},
					});
				},
			},
			
			create: function() {
				Server.Manage.portGroupWindowContainer.window({
					title: serverManagePortGroupWindowTitle,
					width: 300,
					height: 500,
					collapsible: false,
					minimizable: false,
					maximizable: false,
					closable: true,
					closed: true,
					modal: true,
				});
				Server.Manage.PortGroupWindow.DataGrid.create();
				Server.Manage.PortGroupWindow.submitButtonContainer.linkbutton({
					iconCls: 'icon-ok',
					text: serverManagePortGroupWindowSubmitButtonText,
				});
				Server.Manage.PortGroupWindow.submitButtonContainer.bind(
					'click',
					Server.Manage.PortGroupWindow.doSubmit
				);
				Server.Manage.PortGroupWindow.resetButtonContainer.linkbutton({
					iconCls: 'icon-undo',
					text: serverManagePortGroupWindowResetButtonText,
				});
				Server.Manage.PortGroupWindow.resetButtonContainer.bind(
					'click',
					Server.Manage.PortGroupWindow.doReset
				);
			},
			
			open: function() {
				var checkedRow = Server.Manage.View.DataGrid.getCheckedRows();
				
				if(checkedRow != false) {
					Server.Manage.PortGroupWindow.reset(checkedRow);
					Server.Manage.portGroupWindowContainer.window('open');
				}
			},
			
			close: function() {
				Server.Manage.portGroupWindowContainer.window('close');
			},
			
			doSubmit: function() {
				var checkedRow = Server.Manage.View.DataGrid.getCheckedRows();
				var data = Server.Manage.PortGroupWindow.dataGridPanelContainer.datagrid('getRows')
				
				$.ajax({
					url: '/index.php/Server/manage/setPortGroupStatus',
					data: {
						serverId: checkedRow[0].serverId,
						data: JSON.stringify(data),
					}
				})
				.done(function(response) {
					if(response.errorCode === 0) {
						$.messager.alert(messageWindowTitle, serverManagePortGroupWindowSubmitSuccessInfo, 'info');
						Server.Manage.PortGroupWindow.close();
						Server.Manage.View.DataGrid.load();
					}
				})
			},
			
			doReset: function() {
				var checkedRow = Server.Manage.View.DataGrid.getCheckedRows();
				Server.Manage.PortGroupWindow.reset(checkedRow);
			},
			
			reset: function(checkedRow) {
				var data = [];
				var status
				

				for(j = 1; j <= checkedRow[0].maxGameAreaNum; j++) {
					if(typeof checkedRow[0]['portGroup' + j]) {
						if(checkedRow[0]['portGroup' + j] === '0') {
							status = 2;
						}
						else {
							status = 1;
						}
					}
					
					data.push({portGroup: j, status: status});
				}
				
				Server.Manage.PortGroupWindow.dataGridPanelContainer.datagrid({
					data: data,
				});
			}
		},
	},
}