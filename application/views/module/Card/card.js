var Card = {
	Manage: {
		addWindowContainer: '',
		modifyWindowContainer: '',
		assignItemWindowContainer: '',
		addItemWindowContainer: '',
		
		init: function() {
			Language.getCurrLanguage();
			Utils.loadJavascriptFile('/application/views/libraries/component/' + language + '.js');
			Utils.loadJavascriptFile('/application/views/libraries/utils/' + language + '.js');
			Utils.loadJavascriptFile('/application/views/module/Card/' + language + '.js');
			Utils.initAjax();
			
			Card.Manage.addWindowContainer = $('#addWindow');
			Card.Manage.AddWindow.init();
			Card.Manage.modifyWindowContainer = $('#modifyWindow');
			Card.Manage.ModifyWindow.init();
			Card.Manage.assignItemWindowContainer = $('#assignItemWindow');
			Card.Manage.AssignItemWindow.init();
			Card.Manage.addItemWindowContainer = $('#addItemWindow');
			Card.Manage.AddItemWindow.init();
			Card.Manage.View.init();
		},
		
		View: {
			dataGridPanelContainer: '',
			
			init: function() {
				Card.Manage.View.dataGridPanelContainer = $('#dataGridPanel #dataGrid');
				Card.Manage.View.DataGrid.init();
			},
			
			DataGrid: {
				init: function() {
					Card.Manage.View.DataGrid.create();
				},
				
				create: function() {
					var width = $(document).width() - 40;
					var height = $(document).height() - 40;
					Card.Manage.View.dataGridPanelContainer.width(width);
					Card.Manage.View.dataGridPanelContainer.height(height);
					Card.Manage.View.dataGridPanelContainer.datagrid({
						url: '/index.php/Card/manage/getListData',
						idField: "cardId",
						toolbar: [
							{
								iconCls: 'icon-add',
								text: cardManageViewDataGridToolbarButtonText1,
								handler: Card.Manage.AddWindow.open
							},
							{
								iconCls: 'icon-edit',
								text: cardManageViewDataGridToolbarButtonText2,
								handler: Card.Manage.ModifyWindow.open
								
							},
							{
								iconCls: 'icon-edit',
								text: cardManageViewDataGridToolbarButtonText3,
								handler: Card.Manage.AssignItemWindow.open,
							}
						],
						columns: [[
							{
								checkbox: true
							},
							{
								field: 'cardName',
								title: cardManageViewDataGridColumnTitle1,
								width: 100
							},
							{
								field: 'useLimit',
								title: cardManageViewDataGridColumnTitle2,
								width: 200,
								formatter: function(value) {
									if(value === '1') {
										return useLimitValue1;
									}
									else if(value === '2') {
										return useLimitValue2;
									}
									else if(value === '3') {
										return useLimitValue3;
									}
								}
							},
							{
								field: 'cardContent',
								title: cardManageViewDataGridColumnTitle3,
								width: 200,
								formatter: function(value) {
									var itemsObject = eval('(' + value + ')');
									var returnValue = '';
									
									for(index in itemsObject) {
										returnValue = returnValue + itemsObject[index].itemName + ' * ' + itemsObject[index].count + '</br>';
									}
									
									return returnValue;
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
					Card.Manage.View.dataGridPanelContainer.datagrid('reload');
				},
				
				getCheckedRows: function(allowMulti) {
					var allowMulti = arguments[0] ? arguments[0] : false;
					var checkedRow = Card.Manage.View.dataGridPanelContainer.datagrid('getChecked');
					
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
			cardNameValidateboxLabelContainer: '',
			cardNameValidateboxInputContainer: '',
			useLimitComboboxLabelContainer: '',
			useLimitComboboxInputContainer: '',
			submitButtonContainer: '',
			resetButtonContainer: '',
			
			init: function() {
				Card.Manage.AddWindow.cardNameValidateboxLabelContainer = $('#addWindow #cardNameValidateboxLabel');
				Card.Manage.AddWindow.cardNameValidateboxInputContainer = $('#addWindow #cardNameValidateboxInput');
				Card.Manage.AddWindow.useLimitComboboxLabelContainer = $('#addWindow #useLimitComboboxLabel');
				Card.Manage.AddWindow.useLimitComboboxInputContainer = $('#addWindow #useLimitComboboxInput');
				Card.Manage.AddWindow.submitButtonContainer = $('#addWindow #submitButton');
				Card.Manage.AddWindow.resetButtonContainer = $('#addWindow #resetButton');
				Card.Manage.AddWindow.create();
			},
			
			create: function() {
				Card.Manage.addWindowContainer.window({
					title: cardManageAddWindowTitle,
					collapsible: false,
					minimizable: false,
					maximizable: false,
					closable: true,
					closed: true,
					modal: true,
				});
				Component.Validatebox.CardName.create(
					Card.Manage.AddWindow.cardNameValidateboxLabelContainer,
					Card.Manage.AddWindow.cardNameValidateboxInputContainer
				);
				Component.Combobox.UseLimit.create(
					Card.Manage.AddWindow.useLimitComboboxLabelContainer,
					Card.Manage.AddWindow.useLimitComboboxInputContainer
				);
				Card.Manage.AddWindow.submitButtonContainer.linkbutton({
					iconCls: 'icon-ok',
					text: cardManageAddWindowSubmitButtonText,
				});
				Card.Manage.AddWindow.submitButtonContainer.bind(
					'click',
					Card.Manage.AddWindow.doSubmit
				);
				Card.Manage.AddWindow.resetButtonContainer.linkbutton({
					iconCls: 'icon-undo',
					text: cardManageAddWindowResetButtonText,
				})
				Card.Manage.AddWindow.resetButtonContainer.bind(
					'click',
					Card.Manage.AddWindow.doReset
				);
			},
			
			open: function() {
				Card.Manage.AddWindow.reset();
				Card.Manage.addWindowContainer.window('open');
			},
			
			close: function() {
				Card.Manage.addWindowContainer.window('close');
			},
			
			doSubmit: function() {
				$.ajax({
					url: '/index.php/Card/manage/add',
					data: {
						cardName: Card.Manage.AddWindow.cardNameValidateboxInputContainer[0].value,
						useLimit: Card.Manage.AddWindow.useLimitComboboxInputContainer.combobox('getValue')
					}
				})
				.done(function(response) {
					if(response.errorCode === 0) {
						$.messager.alert(messageWindowTitle, cardManageAddWindowSubmitSuccessInfo, 'info');
						Card.Manage.AddWindow.close();
						Card.Manage.View.DataGrid.load();
					}
				})
			},
			
			doReset: function() {
				Card.Manage.AddWindow.reset();
			},
			
			reset: function() {
				Card.Manage.AddWindow.cardNameValidateboxInputContainer[0].value = '';
				Card.Manage.AddWindow.useLimitComboboxInputContainer.combobox('reset');
			},
		},
		
		ModifyWindow: {
			cardNameValidateboxLabelContainer: '',
			cardNameValidateboxInputContainer: '',
			useLimitComboboxLabelContainer: '',
			useLimitComboboxInputContainer: '',
			submitButtonContainer: '',
			resetButtonContainer: '',
			
			init: function() {
				Card.Manage.ModifyWindow.cardNameValidateboxLabelContainer = $('#modifyWindow #cardNameValidateboxLabel');
				Card.Manage.ModifyWindow.cardNameValidateboxInputContainer = $('#modifyWindow #cardNameValidateboxInput');
				Card.Manage.ModifyWindow.useLimitComboboxLabelContainer = $('#modifyWindow #useLimitComboboxLabel');
				Card.Manage.ModifyWindow.useLimitComboboxInputContainer = $('#modifyWindow #useLimitComboboxInput');
				Card.Manage.ModifyWindow.submitButtonContainer = $('#modifyWindow #submitButton');
				Card.Manage.ModifyWindow.resetButtonContainer = $('#modifyWindow #resetButton');
				Card.Manage.ModifyWindow.create();
			},
			
			create: function() {
				Card.Manage.modifyWindowContainer.window({
					title: cardManageModifyWindowTitle,
					collapsible: false,
					minimizable: false,
					maximizable: false,
					closable: true,
					closed: true,
					modal: true,
				});
				Component.Validatebox.CardName.create(
					Card.Manage.ModifyWindow.cardNameValidateboxLabelContainer,
					Card.Manage.ModifyWindow.cardNameValidateboxInputContainer
				);
				Component.Combobox.UseLimit.create(
					Card.Manage.ModifyWindow.useLimitComboboxLabelContainer,
					Card.Manage.ModifyWindow.useLimitComboboxInputContainer
				);
				Card.Manage.ModifyWindow.submitButtonContainer.linkbutton({
					iconCls: 'icon-ok',
					text: cardManageModifyWindowSubmitButtonText,
				});
				Card.Manage.ModifyWindow.submitButtonContainer.bind(
					'click',
					Card.Manage.ModifyWindow.doSubmit
				);
				Card.Manage.ModifyWindow.resetButtonContainer.linkbutton({
					iconCls: 'icon-undo',
					text: cardManageModifyWindowResetButtonText,
				})
				Card.Manage.ModifyWindow.resetButtonContainer.bind(
					'click',
					Card.Manage.ModifyWindow.doReset
				);
			},
			
			open: function() {
				var checkedRow = Card.Manage.View.DataGrid.getCheckedRows();
				
				if(checkedRow != false) {
					Card.Manage.ModifyWindow.reset(checkedRow);
					Card.Manage.modifyWindowContainer.window('open');
				}
			},
			
			close: function() {
				Card.Manage.modifyWindowContainer.window('close');
			},
			
			doSubmit: function() {
				var checkedRow = Card.Manage.View.DataGrid.getCheckedRows();
				
				$.ajax({
					url: '/index.php/Card/manage/modify',
					data: {
						cardId: checkedRow[0].cardId,
						cardName: Card.Manage.ModifyWindow.cardNameValidateboxInputContainer[0].value,
						useLimit: Card.Manage.ModifyWindow.useLimitComboboxInputContainer.combobox('getValue')
					}
				})
				.done(function(response) {
					if(response.errorCode === 0) {
						$.messager.alert(messageWindowTitle, cardManageModifyWindowSubmitSuccessInfo, 'info');
						Card.Manage.ModifyWindow.close();
						Card.Manage.View.DataGrid.load();
					}
				})
			},
			
			doReset: function() {
				var checkedRow = Card.Manage.View.DataGrid.getCheckedRows();
				Card.Manage.ModifyWindow.reset(checkedRow);
			},
			
			reset: function(checkedRow) {
				Card.Manage.ModifyWindow.cardNameValidateboxInputContainer[0].value = checkedRow[0].cardName;
				Card.Manage.ModifyWindow.useLimitComboboxInputContainer.combobox('setValue', checkedRow[0].useLimit);
			},
		},
		
		AssignItemWindow: {
			dataGridContainer: '',
			submitButtonContainer: '',
			resetButtonContainer: '',
			
			init: function() {
				Card.Manage.AssignItemWindow.dataGridContainer = $('#assignItemWindow #dataGrid');
				Card.Manage.AssignItemWindow.submitButtonContainer = $('#assignItemWindow #submitButton');
				Card.Manage.AssignItemWindow.resetButtonContainer = $('#assignItemWindow #resetButton');
				Card.Manage.AssignItemWindow.DataGrid.create();
				Card.Manage.AssignItemWindow.create();
			},
		
			create: function() {
				Card.Manage.assignItemWindowContainer.window({
					title: cardManageAssignWindowTitle,
					width: 300,
					height: 478,
					collapsible: false,
					minimizable: false,
					maximizable: false,
					closable: true,
					closed: true,
					modal: true,
				});
				Card.Manage.AssignItemWindow.submitButtonContainer.linkbutton({
					iconCls: 'icon-ok',
					text: cardManageAssignItemWindowSubmitButtonText,
				});
				Card.Manage.AssignItemWindow.submitButtonContainer.bind(
					'click',
					Card.Manage.AssignItemWindow.doSubmit
				);
				Card.Manage.AssignItemWindow.resetButtonContainer.linkbutton({
					iconCls: 'icon-undo',
					text: cardManageAssignItemWindowResetButtonText,
				})
				Card.Manage.AssignItemWindow.resetButtonContainer.bind(
					'click',
					Card.Manage.AssignItemWindow.doReset
				);
			},
			
			open: function() {
				var checkedRow = Card.Manage.View.DataGrid.getCheckedRows();
				
				if(checkedRow != false) {
					Card.Manage.AssignItemWindow.doReset();
					Card.Manage.assignItemWindowContainer.window('open');
				}
			},
			
			close: function() {
				Card.Manage.assignItemWindowContainer.window('close');
			},
			
			doSubmit: function() {
				var checkedRow = Card.Manage.View.DataGrid.getCheckedRows();
				var itemArray = Card.Manage.AssignItemWindow.dataGridContainer.datagrid('getRows');
				var itemString
				
				if(itemArray.length > 0) {
					var itemString = '[';
					
					$.each(
						itemArray,
						function(idx, val) {
							itemString = itemString + '{"id":' + val['id'] + ', "count":' + val['count'] +'},'
						}
					);
					
					itemString = itemString.substring(0, itemString.length-1) + ']';
				}
				
				$.ajax({
					url: '/index.php/Card/manage/assignItem',
					data: {
						cardId: checkedRow[0].cardId,
						itemString: itemString
					}
				})
				.done(function(response) {
					if(response.errorCode === 0) {
						$.messager.alert(messageWindowTitle, cardManageAssignItemWindowSubmitSuccessInfo, 'info');
						Card.Manage.AssignItemWindow.close();
						Card.Manage.View.DataGrid.load();
					}
				})
			},
			
			doReset: function() {
				var checkedRow = Card.Manage.View.DataGrid.getCheckedRows();
				var itemsObject = eval('(' + checkedRow[0].cardContent + ')');
				
				for(index in itemsObject) {
					Card.Manage.AssignItemWindow.DataGrid.appendRow(itemsObject[index].itemId, itemsObject[index].itemName, itemsObject[index].count);
				}
				
//				Card.Manage.AssignItemWindow.DataGrid.loadData([]);
			},
		
			DataGrid: {
				create: function() {
					Card.Manage.AssignItemWindow.dataGridContainer.datagrid({
						height: 400,
						fitColumns: true,
						border: false,
						toolbar: [
							{
								iconCls: 'icon-add',
								text: cardManageAssignWindowItemDataGridToolbarButtonText1,
								handler: Card.Manage.AddItemWindow.open,
							},
							{
								iconCls: 'icon-remove',
								text: cardManageAssignWindowItemDataGridToolbarButtonText2,
								handler: Card.Manage.AssignItemWindow.DataGrid.deleteRow,
							},
						],
						columns: [[
							{
								checkbox: true
							},
							{
								field: 'itemName',
								title: cardManageAssignWindowItemDataGridColumnTitle1,
								width: 100
							},
							{
								field: 'count',
								title: cardManageAssignWindowItemDataGridColumnTitle2,
								width: 100
							},
						]],
					})
				},
				
				appendRow: function(id, itemName, count) {
					Card.Manage.AssignItemWindow.dataGridContainer.datagrid(
						'appendRow',
						{
							id: id,
							itemName: itemName,
							count: count
						}
					);
				},
				
				deleteRow: function() {
					var checkedRow = Card.Manage.AssignItemWindow.DataGrid.getCheckedRows(true);
					
					$.each(
							checkedRow,
						function(idx, val) {
							var index = Card.Manage.AssignItemWindow.dataGridContainer.datagrid('getRowIndex', val);
							Card.Manage.AssignItemWindow.dataGridContainer.datagrid('deleteRow', index);
						}
					);
				},
				
				getCheckedRows: function(allowMulti) {
					var allowMulti = arguments[0] ? arguments[0] : false;
					var checkedRow = Card.Manage.AssignItemWindow.dataGridContainer.datagrid('getChecked');
					
					if(Utils.dataGridValidateCheckedRow(checkedRow, allowMulti) === true) {
						return checkedRow;
					}
					else {
						return false;
					}
				},
				
				loadData: function(data) {
					Card.Manage.AssignItemWindow.dataGridContainer.datagrid(
						'loadData',
						data
					);
				},
			},
		},
		
		AddItemWindow: {
			itemComboboxLabelContainer: '',
			itemComboboxInputContainer: '',
			countNumberboxLabelContainer: '',
			countNumberboxInputContainer: '',
			submitButtonContainer: '',
			resetButtonContainer: '',
			
			init: function() {
				Card.Manage.AddItemWindow.itemComboboxLabelContainer = $('#addItemWindow #itemComboboxLabel');
				Card.Manage.AddItemWindow.itemComboboxInputContainer = $('#addItemWindow #itemComboboxInput');
				Card.Manage.AddItemWindow.countNumberboxLabelContainer = $('#addItemWindow #countNumberboxLabel');
				Card.Manage.AddItemWindow.countNumberboxInputContainer = $('#addItemWindow #countNumberboxInput');
				Card.Manage.AddItemWindow.submitButtonContainer = $('#addItemWindow #submitButton');
				Card.Manage.AddItemWindow.resetButtonContainer = $('#addItemWindow #resetButton');
				Card.Manage.AddItemWindow.create();
			},
			
			create: function() {
				Card.Manage.addItemWindowContainer.window({
					title: cardManageAddItemWindowTitle,
					collapsible: false,
					minimizable: false,
					maximizable: false,
					closable: true,
					closed: true,
					modal: true,
				});
				Component.Combobox.Item.create(
					Card.Manage.AddItemWindow.itemComboboxLabelContainer,
					Card.Manage.AddItemWindow.itemComboboxInputContainer
				);
				Component.Numberbox.Count.create(
					Card.Manage.AddItemWindow.countNumberboxLabelContainer,
					Card.Manage.AddItemWindow.countNumberboxInputContainer
				);
				Card.Manage.AddItemWindow.submitButtonContainer.linkbutton({
					iconCls: 'icon-ok',
					text: cardManageAddItemWindowSubmitButtonText,
				});
				Card.Manage.AddItemWindow.submitButtonContainer.bind(
					'click',
					Card.Manage.AddItemWindow.doSubmit
				);
				Card.Manage.AddItemWindow.resetButtonContainer.linkbutton({
					iconCls: 'icon-undo',
					text: cardManageAddItemWindowResetButtonText,
				})
				Card.Manage.AddItemWindow.resetButtonContainer.bind(
					'click',
					Card.Manage.AddItemWindow.doReset
				);
			},
			
			open: function() {
				Card.Manage.AddItemWindow.reset();
				Card.Manage.addItemWindowContainer.window('open');
			},
			
			close: function() {
				Card.Manage.addItemWindowContainer.window('close');
			},
			
			doSubmit: function() {
				var id = Card.Manage.AddItemWindow.itemComboboxInputContainer.combobox('getValue');
				var itemName = Card.Manage.AddItemWindow.itemComboboxInputContainer.combobox('getText');
				var itemCount = Card.Manage.AddItemWindow.countNumberboxInputContainer.numberbox('getValue');
				
				if(id <= 0) {
					$.messager.alert(messageWindowTitle, cardManageAddItemWindowSubmitErrorInfo1, 'info');
				}
				else if(itemCount <= 0) {
					$.messager.alert(messageWindowTitle, cardManageAddItemWindowSubmitErrorInfo2, 'info');
				}
				else {
					Card.Manage.AssignItemWindow.DataGrid.appendRow(id, itemName, itemCount);
					Card.Manage.AddItemWindow.close();
				}
			},
			
			doReset: function() {
				Card.Manage.AddItemWindow.reset();
			},
			
			reset: function() {
				Card.Manage.AddItemWindow.itemComboboxInputContainer.combobox('reset');
				Card.Manage.AddItemWindow.countNumberboxInputContainer.numberbox('clear');
			},
		},
	},
	
	Apply: {
		addWindowContainer: '',
		
		init: function() {
			Language.getCurrLanguage();
			Utils.loadJavascriptFile('/application/views/libraries/component/' + language + '.js');
			Utils.loadJavascriptFile('/application/views/libraries/utils/' + language + '.js');
			Utils.loadJavascriptFile('/application/views/module/Card/' + language + '.js');
			Utils.initAjax();
			
			Card.Apply.addWindowContainer = $('#addWindow');
			Card.Apply.AddWindow.init();
			Card.Apply.View.init();
		},
		
		View: {
			dataGridPanelContainer: '',
			
			init: function() {
				Card.Apply.View.dataGridPanelContainer = $('#dataGridPanel #dataGrid');
				Card.Apply.View.DataGrid.init();
			},
			
			DataGrid: {
				init: function() {
					Card.Apply.View.DataGrid.create();
				},
				
				create: function() {
					var width = $(document).width() - 40;
					var height = $(document).height() - 40;
					Card.Apply.View.dataGridPanelContainer.width(width);
					Card.Apply.View.dataGridPanelContainer.height(height);
					Card.Apply.View.dataGridPanelContainer.datagrid({
						url: '/index.php/Card/apply/getListData',
						idField: "applyId",
						toolbar: [
							{
								iconCls: 'icon-add',
								text: cardApplyViewDataGridToolbarButtonText1,
								handler: Card.Apply.AddWindow.open,
							},
							{
								iconCls: 'icon-edit',
								text: cardApplyViewDataGridToolbarButtonText2,
								handler: Card.Apply.View.doApproval,
								
							},
						],
						columns: [[
							{
								checkbox: true
							},
							{
								field: 'applyId',
								title: cardApplyViewDataGridColumnTitle1,
								width: 100,
							},
							{
								field: 'operatorName',
								title: cardApplyViewDataGridColumnTitle2,
								width: 100,
							},
							{
								field: 'cardName',
								title: cardApplyViewDataGridColumnTitle3,
								width: 100,
							},
							{
								field: 'count',
								title: cardApplyViewDataGridColumnTitle4,
								width: 80,
							},
							{
								field: 'applyUserName',
								title: cardApplyViewDataGridColumnTitle5,
								width: 80,
							},
							{
								field: 'applyDatetime',
								title: cardApplyViewDataGridColumnTitle6,
								width: 150,
							},
							{
								field: 'approvalUserName',
								title: cardApplyViewDataGridColumnTitle7,
								width: 80,
							},
							{
								field: 'approvalDatetime',
								title: cardApplyViewDataGridColumnTitle8,
								width: 150,
							},
							{
								field: 'status',
								title: cardApplyViewDataGridColumnTitle9,
								formatter: function(value) {
									if(value === '1') {
										return cardApplyStatusValue1;
									}
									else if(value === '2') {
										return cardApplyStatusValue2;
									}
									else if(value === '3') {
										return cardApplyStatusValue3;
									}
									else if(value === '4') {
										return cardApplyStatusValue4;
									}
									else if(value === '5') {
										return cardApplyStatusValue5;
									}
								},
								width: 80,
							},
							{
								field: 'operatorParam',
								width: 80,
								formatter: function(value, row) {
									if(row.status === '4') {
										return '<a target="_blank" href="/index.php/Card/apply/export?applyId=' + row.applyId + '">导出</a>';
									}
								},
							},
						]],
						loadFilter: Utils.dataGridLoadFilter,
						pagination: true,
						pageSize: 50,
						pageList: [50, 100, 150, 200],
					})
				},
				
				load: function() {
					Card.Apply.View.dataGridPanelContainer.datagrid('load');
				},
				
				getCheckedRows: function(allowMulti) {
					var allowMulti = arguments[0] ? arguments[0] : false;
					var checkedRow = Card.Apply.View.dataGridPanelContainer.datagrid('getChecked');
					
					if(Utils.dataGridValidateCheckedRow(checkedRow, allowMulti) === true) {
						return checkedRow;
					}
					else {
						return false;
					}
				},
			},
			
			doApproval: function() {
				var checkedRow = Card.Apply.View.DataGrid.getCheckedRows();
				
				if(checkedRow != false) {
					$.messager.defaults = {ok: cardApplyApprovalConfirmWindowOkMessage, cancel: cardApplyApprovalConfirmWindowCancelMessage};
					$.messager.confirm(
						'Confirm',
						cardApplyApprovalConfirmWindowMessage,
						function(r){
							$.messager.defaults = {ok: 'Ok', cancel: 'Cancel'};
							
							if(r) {
								status = 2;
							}
							else {
								status = 3;
							}
							
							$.ajax({
								url: '/index.php/Card/apply/approval',
								data: {
									applyId: checkedRow[0].applyId,
									status: status,
								}
							})
							.done(function(response) {
								if(response.errorCode === 0) {
									$.messager.alert(messageWindowTitle, cardApplyApprovalSuccessInfo, 'info');
									Card.Apply.View.DataGrid.load();
								}
							})
						}
					);				
				}
			},
		},
		
		AddWindow: {
			operatorComboboxLabelContainer: '',
			operatorComboboxInputContainer: '',
			cardComboboxLabelContainer: '',
			cardComboboxInputContainer: '',
			countNumberboxLabelContainer: '',
			countNumberboxInputContainer: '',
			submitButtonContainer: '',
			resetButtonContainer: '',
			
			init: function() {
				Card.Apply.AddWindow.operatorComboboxLabelContainer = $('#addWindow #operatorComboboxLabel');
				Card.Apply.AddWindow.operatorComboboxInputContainer = $('#addWindow #operatorComboboxInput');
				Card.Apply.AddWindow.cardComboboxLabelContainer = $('#addWindow #cardComboboxLabel');
				Card.Apply.AddWindow.cardComboboxInputContainer = $('#addWindow #cardComboboxInput');
				Card.Apply.AddWindow.countNumberboxLabelContainer = $('#addWindow #countNumberboxLabel');
				Card.Apply.AddWindow.countNumberboxInputContainer = $('#addWindow #countNumberboxInput');
				Card.Apply.AddWindow.submitButtonContainer = $('#addWindow #submitButton');
				Card.Apply.AddWindow.resetButtonContainer = $('#addWindow #resetButton');
				Card.Apply.AddWindow.create();
			},
			
			create: function() {
				Card.Apply.addWindowContainer.window({
					title: cardApplyAddWindowTitle,
					collapsible: false,
					minimizable: false,
					maximizable: false,
					closable: true,
					closed: true,
					modal: true,
				});
				Component.Combobox.Operator.create(
					Card.Apply.AddWindow.operatorComboboxLabelContainer,
					Card.Apply.AddWindow.operatorComboboxInputContainer
				);
				Component.Combobox.Card.create(
					Card.Apply.AddWindow.cardComboboxLabelContainer,
					Card.Apply.AddWindow.cardComboboxInputContainer
				);
				Component.Numberbox.Count.create(
					Card.Apply.AddWindow.countNumberboxLabelContainer,
					Card.Apply.AddWindow.countNumberboxInputContainer
				);
				Card.Apply.AddWindow.submitButtonContainer.linkbutton({
					iconCls: 'icon-ok',
					text: cardApplyAddWindowSubmitButtonText,
				});
				Card.Apply.AddWindow.submitButtonContainer.bind(
					'click',
					Card.Apply.AddWindow.doSubmit
				);
				Card.Apply.AddWindow.resetButtonContainer.linkbutton({
					iconCls: 'icon-undo',
					text: cardApplyAddWindowResetButtonText,
				});
				Card.Apply.AddWindow.resetButtonContainer.bind(
					'click',
					Card.Apply.AddWindow.doReset
				);
			},
			
			open: function() {
				Card.Apply.AddWindow.doReset();
				Card.Apply.addWindowContainer.window('open');
			},
			
			close: function() {
				Card.Apply.addWindowContainer.window('close');
			},
			
			doSubmit: function() {
				$.ajax({
					url: '/index.php/Card/apply/add',
					data: {
						operatorId: Card.Apply.AddWindow.operatorComboboxInputContainer.combobox('getValue'),
						cardId: Card.Apply.AddWindow.cardComboboxInputContainer.combobox('getValue'),
						count: Card.Apply.AddWindow.countNumberboxInputContainer.numberbox('getValue')
					}
				})
				.done(function(response) {
					if(response.errorCode === 0) {
						$.messager.alert(messageWindowTitle, cardApplyAddWindowSubmitSuccessInfo, 'info');
						Card.Apply.View.DataGrid.load();
						Card.Apply.AddWindow.close();
					}
				})
			},
			
			doReset: function() {
				Card.Apply.AddWindow.operatorComboboxInputContainer.combobox('clear');
				Card.Apply.AddWindow.cardComboboxInputContainer.combobox('clear');
				Card.Apply.AddWindow.countNumberboxInputContainer.numberbox('clear');
			},
		},
	},
}