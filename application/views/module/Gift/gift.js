var Gift = {
	Send: {
        applyWindowContainer:'',
		addItemWindowContainer: '',
		// infoWindowContainer: '',
		
		init: function() {
			Language.getCurrLanguage();
			Utils.loadJavascriptFile('/application/views/libraries/component/' + language + '.js');
			Utils.loadJavascriptFile('/application/views/libraries/utils/' + language + '.js');
			Utils.loadJavascriptFile('/application/views/module/Gift/' + language + '.js');
			Utils.initAjax();
                        
            Gift.Send.applyWindowContainer = $('#applyWindow');
			Gift.Send.ApplyWindow.init();
			Gift.Send.addItemWindowContainer = $('#addItemWindow');
			Gift.Send.AddItemWindow.init();
			// Gift.Send.infoWindowContainer = $('#infoWindow');
			// Gift.Send.InfoWindow.init();
			Gift.Send.View.init();
		},
		
		View: {
			dataGridPanelContainer: '',
			
			init: function() {
				Gift.Send.View.dataGridPanelContainer = $('#dataGridPanel #dataGrid');
				Gift.Send.View.DataGrid.init();
			},
			
			DataGrid: {
                                
				init: function() {
					Gift.Send.View.DataGrid.create();
				},
				
				create: function() {
					var width = $(document).width() - 40;
					var height = $(document).height() - 40;
					Gift.Send.View.dataGridPanelContainer.width(width);
					Gift.Send.View.dataGridPanelContainer.height(height);
					Gift.Send.View.dataGridPanelContainer.datagrid({
                                                url: '/index.php/Gift/send/getListData',
                                                idField: "giftId",
                                                toolbar: [
                                                        {
                                                                iconCls: 'icon-add',
                                                                text: giftSendApplyWindowSubmitButtonText,
                                                                handler: Gift.Send.ApplyWindow.open,
                                                        },
                                                        {
                                                                iconCls: 'icon-remove',
                                                                text: giftActivationWindowDeleteButtonText,
                                                                handler: Gift.Send.View.DataGrid.del,
                                                        },
                                                ],
						columns: [[
							{
								checkbox: true,
							},
                                                        {
								field: 'giftId',
								title: giftSendViewDataGridColumnTitle1,
								width: 60,
							},
                                                        {
								field: 'title',
								title: giftSendViewDataGridColumnTitle12,
								width: 200,
							},
                                                        {
								field: 'item',
								title: giftSendViewDataGridColumnTitle6,
								width: 100,
							},
							{
								field: 'createTime',
								title: giftSendViewDataGridColumnTitle8,
								width: 200,
							},
							{
								field: 'operator',
								title: giftSendViewDataGridColumnTitle9,
								width: 80,
							},
                                                        {
								field: 'status',
								title: giftSendViewDataGridColumnTitle10,
								width: 80,
                                                                formatter: function(value) {
									if(value === '1') {
										return giftSendOperationValue1;
									}
                                                                        else if(value === '2') {
										return giftSendOperationValue2;
									}
								}
							},
						]],
						singleSelect: true,
						loadFilter: Utils.dataGridLoadFilter,
						pagination: true,
						pageSize: 50,
						pageList: [50, 100, 150, 200],
					});
				},
				
				load: function() {
					Gift.Send.View.dataGridPanelContainer.datagrid('reload');
				},
				
				getCheckedRows: function(allowMulti) {
					var allowMulti = arguments[0] ? arguments[0] : false;
					var checkedRow = Gift.Send.View.dataGridPanelContainer.datagrid('getChecked');
					
					if(Utils.dataGridValidateCheckedRow(checkedRow, allowMulti) === true) {
						return checkedRow;
					}
					else {
						return false;
					}
				},
                                
                                del: function() {
					var checkedRow = Gift.Send.View.DataGrid.getCheckedRows();
					
					if( !(checkedRow === false) ) {
						$.messager.confirm(
							giftSendConfirmDelWindowTitle,
							giftSendConfirmDelWindowContent,
							function(r) {
								if(r === true) {
									$.ajax({
										url: '/index.php/Gift/send/del',
										data: {
											giftId: checkedRow[0].giftId
										},
									})
									.done(function(response) {
										if(response.errorCode === 0) {
											$.messager.alert(messageWindowTitle, giftSendDelSuccessInfo, 'info');
										}
									});
								}
							}
						);
					}
				}
			},
			
			
		},
		
		ApplyWindow: {
                        titleValidateboxLabelContainer: '',
                        titleValidateboxInputContainer: '',
			submitButtonContainer: '',
			resetButtonContainer: '',
			itemDataGridContainer: '',
			
			init: function() {
                                Gift.Send.ApplyWindow.titleValidateboxLabelContainer = $('#applyWindow #titleValidateboxLabel');
				Gift.Send.ApplyWindow.titleValidateboxInputContainer = $('#applyWindow #titleValidateboxInput');
				Gift.Send.ApplyWindow.itemDataGridContainer = $('#applyWindow #itemDataGrid');
				Gift.Send.ApplyWindow.submitButtonContainer = $('#applyWindow #submitButton');
				Gift.Send.ApplyWindow.resetButtonContainer = $('#applyWindow #resetButton');
				Gift.Send.ApplyWindow.create();
				Gift.Send.ApplyWindow.ItemDataGrid.create();
			},
			
			ItemDataGrid: {
				create: function() {
					Gift.Send.ApplyWindow.itemDataGridContainer.datagrid({
						width: 248,
						height: 403,
						fitColumns: false,
						border: false,
						toolbar: [
							{
								iconCls: 'icon-add',
								text: giftSendApplyWindowItemDataGridToolbarButtonText1,
								handler: Gift.Send.AddItemWindow.open,
							},
							{
								iconCls: 'icon-remove',
								text: giftSendApplyWindowItemDataGridToolbarButtonText2,
								handler: Gift.Send.ApplyWindow.ItemDataGrid.deleteRow,
							},
						],
						columns: [[
							{
								checkbox: true
							},
							{
								field: 'itemName',
								title: giftSendApplyWindowItemDataGridColumnTitle1,
								width: 100
							},
							{
								field: 'count',
								title: giftSendApplyWindowItemDataGridColumnTitle2,
								width: 100
							},
						]],
					})
				},
				
				appendRow: function(id, itemName, count) {
					Gift.Send.ApplyWindow.itemDataGridContainer.datagrid(
						'appendRow',
						{
							id: id,
							itemName: itemName,
							count: count
						}
					);
				},
				
				deleteRow: function() {
					var checkedRow = Gift.Send.ApplyWindow.ItemDataGrid.getCheckedRows(true);
					
					$.each(
							checkedRow,
						function(idx, val) {
							var index = Gift.Send.ApplyWindow.itemDataGridContainer.datagrid('getRowIndex', val);
							Gift.Send.ApplyWindow.itemDataGridContainer.datagrid('deleteRow', index);
						}
					);
				},
				
				getCheckedRows: function(allowMulti) {
					var allowMulti = arguments[0] ? arguments[0] : false;
					var checkedRow = Gift.Send.ApplyWindow.itemDataGridContainer.datagrid('getChecked');
					
					if(Utils.dataGridValidateCheckedRow(checkedRow, allowMulti) === true) {
						return checkedRow;
					}
					else {
						return false;
					}
				},
				
				reset: function() {
					Gift.Send.ApplyWindow.itemDataGridContainer.datagrid(
						'loadData',
						[]
					);
				}
			},
			
			create: function() {
				Gift.Send.applyWindowContainer.window({
					title: giftSendApplyWindowTitle,
					width: 300,
					height: 500,
					collapsible: false,
					minimizable: false,
					maximizable: false,
					closable: true,
					closed: true,
					modal: true,
				});
                                Component.Validatebox.Title.create(
					Gift.Send.ApplyWindow.titleValidateboxLabelContainer,
					Gift.Send.ApplyWindow.titleValidateboxInputContainer
				);
				Gift.Send.ApplyWindow.submitButtonContainer.linkbutton({
					iconCls: 'icon-ok',
					text: giftSendApplyWindowSubmitButtonText,
				});
				Gift.Send.ApplyWindow.submitButtonContainer.bind(
					'click',
					Gift.Send.ApplyWindow.doSubmit
				);
				Gift.Send.ApplyWindow.resetButtonContainer.linkbutton({
					iconCls: 'icon-undo',
					text: giftSendApplyWindowResetButtonText,
				})
				Gift.Send.ApplyWindow.resetButtonContainer.bind(
					'click',
					Gift.Send.ApplyWindow.doReset
				);
			},
			
			open: function() {
				Gift.Send.ApplyWindow.reset();
				Gift.Send.applyWindowContainer.window('open');
			},
			
			close: function() {
				Gift.Send.applyWindowContainer.window('close');
			},
			
			doSubmit: function() {
                                var title = Gift.Send.ApplyWindow.titleValidateboxInputContainer[0].value;
				var itemArray = Gift.Send.ApplyWindow.itemDataGridContainer.datagrid('getRows');
				
				
				
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
					url: '/index.php/Gift/send/applyAll',
					data: {
                                                
						title: title,
						itemString: itemString,
					}
				})
				.done(function(response) {
					if(response.errorCode === 0) {
						$.messager.alert(messageWindowTitle, giftSendApplyWindowSubmitSuccessInfo1, 'info');
						Gift.Send.ApplyWindow.close();
						Gift.Send.View.DataGrid.load();
					}
				})
			},
			
			doReset: function() {
				Gift.Send.ApplyWindow.reset();
			},
			
			reset: function() {
				Gift.Send.ApplyWindow.titleValidateboxInputContainer[0].value = '';
				Gift.Send.ApplyWindow.ItemDataGrid.reset();
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
				Gift.Send.AddItemWindow.itemComboboxLabelContainer = $('#addItemWindow #itemComboboxLabel');
				Gift.Send.AddItemWindow.itemComboboxInputContainer = $('#addItemWindow #itemComboboxInput');
				Gift.Send.AddItemWindow.countNumberboxLabelContainer = $('#addItemWindow #countNumberboxLabel');
				Gift.Send.AddItemWindow.countNumberboxInputContainer = $('#addItemWindow #countNumberboxInput');
				Gift.Send.AddItemWindow.submitButtonContainer = $('#addItemWindow #submitButton');
				Gift.Send.AddItemWindow.resetButtonContainer = $('#addItemWindow #resetButton');
				Gift.Send.AddItemWindow.create();
			},
			
			create: function() {
				Gift.Send.addItemWindowContainer.window({
					title: giftSendAddItemWindowTitle,
					collapsible: false,
					minimizable: false,
					maximizable: false,
					closable: true,
					closed: true,
					modal: true,
				});
				Component.Combobox.Item.create(
					Gift.Send.AddItemWindow.itemComboboxLabelContainer,
					Gift.Send.AddItemWindow.itemComboboxInputContainer
				);
				Component.Numberbox.Count.create(
					Gift.Send.AddItemWindow.countNumberboxLabelContainer,
					Gift.Send.AddItemWindow.countNumberboxInputContainer
				);
				Gift.Send.AddItemWindow.submitButtonContainer.linkbutton({
					iconCls: 'icon-ok',
					text: giftSendAddItemWindowSubmitButtonText,
				});
				Gift.Send.AddItemWindow.submitButtonContainer.bind(
					'click',
					Gift.Send.AddItemWindow.doSubmit
				);
				Gift.Send.AddItemWindow.resetButtonContainer.linkbutton({
					iconCls: 'icon-undo',
					text: giftSendAddItemWindowResetButtonText,
				})
				Gift.Send.AddItemWindow.resetButtonContainer.bind(
					'click',
					Gift.Send.AddItemWindow.doReset
				);
			},
			
			open: function() {
				Gift.Send.AddItemWindow.reset();
				Gift.Send.addItemWindowContainer.window('open');
			},
			
			close: function() {
				Gift.Send.addItemWindowContainer.window('close');
			},
			
			doSubmit: function() {
				var id = Gift.Send.AddItemWindow.itemComboboxInputContainer.combobox('getValue');
				var itemName = Gift.Send.AddItemWindow.itemComboboxInputContainer.combobox('getText');
				var itemCount = Gift.Send.AddItemWindow.countNumberboxInputContainer.numberbox('getValue');
				
				if(id <= 0) {
					$.messager.alert(messageWindowTitle, giftSendApplyWindowSubmitErrorInfo1, 'info');
				}
				else if(itemCount <= 0) {
					$.messager.alert(messageWindowTitle, giftSendApplyWindowSubmitErrorInfo2, 'info');
				}
				else {
					Gift.Send.ApplyWindow.ItemDataGrid.appendRow(id, itemName, itemCount);
					Gift.Send.AddItemWindow.close();
				}
			},
			
			doReset: function() {
				Gift.Send.AddItemWindow.reset();
			},
			
			reset: function() {
				Gift.Send.AddItemWindow.itemComboboxInputContainer.combobox('reset');
				Gift.Send.AddItemWindow.countNumberboxInputContainer.numberbox('clear');
			},
		},
	
	},
    Activation: {
		addWindowContainer: '',
		
		init: function() {
			Language.getCurrLanguage();
			Utils.loadJavascriptFile('/application/views/libraries/component/' + language + '.js');
			Utils.loadJavascriptFile('/application/views/libraries/utils/' + language + '.js');
			Utils.loadJavascriptFile('/application/views/module/Gift/' + language + '.js');
			Utils.initAjax();
			
			Gift.Activation.addWindowContainer = $('#addWindow');
			Gift.Activation.AddWindow.init();
			Gift.Activation.View.init();
		},
		
		View: {
			dataGridPanelContainer: '',
			
			init: function() {
				Gift.Activation.View.dataGridPanelContainer = $('#dataGridPanel #dataGrid');
				Gift.Activation.View.DataGrid.init();
			},
			
			DataGrid: {
				init: function() {
					Gift.Activation.View.DataGrid.create();
				},
				
				create: function() {
					var width = $(document).width() - 40;
					var height = $(document).height() - 40;
					Gift.Activation.View.dataGridPanelContainer.width(width);
					Gift.Activation.View.dataGridPanelContainer.height(height);
					Gift.Activation.View.dataGridPanelContainer.datagrid({
						url: '/index.php/Gift/activation/getListData',
						idField: "applyId",
						toolbar: [
							{
								iconCls: 'icon-add',
								text: giftSendApplyWindowSubmitButtonText,
								handler: Gift.Activation.AddWindow.open,
							},
                                                        {
								iconCls: 'icon-remove',
								text: giftActivationWindowDeleteButtonText,
								handler: Gift.Activation.View.DataGrid.del,
							},
						],
						columns: [[
							{
								checkbox: true
							},
							{
								field: 'applyId',
								title: giftActivationViewDataGridColumnTitle1,
								width: 100,
							},
                                                        {
								field: 'useLimit',
								title: giftActivationViewDataGridColumnTitle7,
								width: 100,
                                                                formatter: function(value) {
									if(value === '1') {
										return giftTypeValue1;
									}
									else if(value === '2') {
										return giftTypeValue2;
									}
                                                                        else if(value === '3') {
										return giftTypeValue3;
									}
                                                                        else if(value === '4') {
										return giftTypeValue4;
									}
								}
							},
							{
								field: 'cardName',
								title: giftActivationViewDataGridColumnTitle3,
								width: 200,
							},
							{
								field: 'operatorName',
								title: giftActivationViewDataGridColumnTitle10,
								width: 100,
							},
							{
								field: 'count',
								title: giftActivationViewDataGridColumnTitle4,
								width: 80,
							},
                                                        {
								field: 'usedCount',
								title: giftActivationViewDataGridColumnTitle9,
								width: 100,
							},
							{
								field: 'applyUserName',
								title: giftActivationViewDataGridColumnTitle5,
								width: 80,
							},
							{
								field: 'applyDatetime',
								title: giftActivationViewDataGridColumnTitle6,
								width: 150,
							},
                                                        {
								field: 'status',
								title: giftActivationViewDataGridColumnTitle8,
								width: 150,
                                                                formatter: function(value) {
									if(value === '1') {
										return giftUseValue1;
									}
									else if(value === '2') {
										return giftUseValue2;
									}
								}
							},
							{
								field: 'operatorParam',
								width: 80,
								formatter: function(value, row) {
									if(row.status === '2') {
										return '<a target="_blank" href="/index.php/Gift/activation/export?applyId=' + row.applyId + '&cardName=' + row.cardName + '">导出</a>';
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
					Gift.Activation.View.dataGridPanelContainer.datagrid('load');
				},
				
				getCheckedRows: function(allowMulti) {
					var allowMulti = arguments[0] ? arguments[0] : false;
					var checkedRow = Gift.Activation.View.dataGridPanelContainer.datagrid('getChecked');
					
					if(Utils.dataGridValidateCheckedRow(checkedRow, allowMulti) === true) {
						return checkedRow;
					}
					else {
						return false;
					}
				},
                del: function() {
					var checkedRow = Gift.Activation.View.DataGrid.getCheckedRows();
					
					if( !(checkedRow === false) ) {
						$.messager.confirm(
							giftSendConfirmDelWindowTitle,
							giftSendConfirmDelWindowContent,
							function(r) {
								if(r === true) {
									$.ajax({
										url: '/index.php/Gift/activation/del',
										data: {
											applyId: checkedRow[0].applyId
										},
									})
									.done(function(response) {
										if(response.errorCode === 0) {
											$.messager.alert(messageWindowTitle, giftSendDelSuccessInfo, 'info');
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
                        operatorIdComboboxLabelContainer: '',
                        operatorIdComboboxInputContainer: '',
			giftTypeComboboxLabelContainer: '',
			giftTypeComboboxInputContainer: '',
                        giftComboboxLabelContainer: '',
                        giftComboboxInputContainer: '',
			countNumberboxLabelContainer: '',
			countNumberboxInputContainer: '',
                        bitNumberboxLabelContainer: '',
                        bitNumberboxInputContainer: '',
			submitButtonContainer: '',
			resetButtonContainer: '',
			
			init: function() {
                                Gift.Activation.AddWindow.operatorIdComboboxLabelContainer = $('#addWindow #operatorIdComboboxLabel');
				Gift.Activation.AddWindow.operatorIdComboboxInputContainer = $('#addWindow #operatorIdComboboxInput');
				Gift.Activation.AddWindow.giftTypeComboboxLabelContainer = $('#addWindow #giftTypeComboboxLabel');
				Gift.Activation.AddWindow.giftTypeComboboxInputContainer = $('#addWindow #giftTypeComboboxInput');
                                Gift.Activation.AddWindow.giftComboboxLabelContainer = $('#addWindow #giftComboboxLabel');
				Gift.Activation.AddWindow.giftComboboxInputContainer = $('#addWindow #giftComboboxInput');
				Gift.Activation.AddWindow.countNumberboxLabelContainer = $('#addWindow #countNumberboxLabel');
				Gift.Activation.AddWindow.countNumberboxInputContainer = $('#addWindow #countNumberboxInput');
                                Gift.Activation.AddWindow.bitNumberboxLabelContainer = $('#addWindow #bitNumberboxLabel');
				Gift.Activation.AddWindow.bitNumberboxInputContainer = $('#addWindow #bitNumberboxInput');
				Gift.Activation.AddWindow.submitButtonContainer = $('#addWindow #submitButton');
				Gift.Activation.AddWindow.resetButtonContainer = $('#addWindow #resetButton');
				Gift.Activation.AddWindow.create();
			},
			
			create: function() {
				Gift.Activation.addWindowContainer.window({
					title: giftSendApplyWindowSubmitButtonText,
					collapsible: false,
					minimizable: false,
					maximizable: false,
					closable: true,
					closed: true,
					modal: true,
				});
                                Component.Combobox.OperatorId.create(
					Gift.Activation.AddWindow.operatorIdComboboxLabelContainer,
					Gift.Activation.AddWindow.operatorIdComboboxInputContainer
				);
				Component.Combobox.GiftType.create(
					Gift.Activation.AddWindow.giftTypeComboboxLabelContainer,
					Gift.Activation.AddWindow.giftTypeComboboxInputContainer
				);
                                Component.Combobox.Gift.create(
					Gift.Activation.AddWindow.giftComboboxLabelContainer,
					Gift.Activation.AddWindow.giftComboboxInputContainer
				);
				Component.Numberbox.Count.create(
					Gift.Activation.AddWindow.countNumberboxLabelContainer,
					Gift.Activation.AddWindow.countNumberboxInputContainer
				);
                                Component.Numberbox.Bit.create(
					Gift.Activation.AddWindow.bitNumberboxLabelContainer,
					Gift.Activation.AddWindow.bitNumberboxInputContainer
				);
				Gift.Activation.AddWindow.submitButtonContainer.linkbutton({
					iconCls: 'icon-ok',
					text: giftSendApplyWindowSubmitButtonText,
				});
				Gift.Activation.AddWindow.submitButtonContainer.bind(
					'click',
					Gift.Activation.AddWindow.doSubmit
				);
				Gift.Activation.AddWindow.resetButtonContainer.linkbutton({
					iconCls: 'icon-undo',
					text: giftSendApplyWindowResetButtonText,
				});
				Gift.Activation.AddWindow.resetButtonContainer.bind(
					'click',
					Gift.Activation.AddWindow.doReset
				);
			},
			
			open: function() {
				Gift.Activation.AddWindow.doReset();
				Gift.Activation.addWindowContainer.window('open');
			},
			
			close: function() {
				Gift.Activation.addWindowContainer.window('close');
			},
			
			doSubmit: function() {
				$.ajax({
					url: '/index.php/Gift/activation/create',
					data: {
                                                operatorId:Gift.Activation.AddWindow.operatorIdComboboxInputContainer.combobox('getValue'),
						giftType: Gift.Activation.AddWindow.giftTypeComboboxInputContainer.combobox('getValue'),
                                                giftId: Gift.Activation.AddWindow.giftComboboxInputContainer.combobox('getValue'),
						codeCount: Gift.Activation.AddWindow.countNumberboxInputContainer.numberbox('getValue'),
                                                bit: Gift.Activation.AddWindow.bitNumberboxInputContainer.numberbox('getValue')
					}
				})
				.done(function(response) {
					if(response.errorCode === 0) {
						$.messager.alert(messageWindowTitle, giftActivationAddWindowSubmitSuccessInfo, 'info');
						Gift.Activation.View.DataGrid.load();
						Gift.Activation.AddWindow.close();
					}
				})
			},
			
			doReset: function() {
                                Gift.Activation.AddWindow.operatorIdComboboxInputContainer.combobox('clear');
				Gift.Activation.AddWindow.giftTypeComboboxInputContainer.combobox('clear');
                                Gift.Activation.AddWindow.giftComboboxInputContainer.combobox('clear');
				Gift.Activation.AddWindow.countNumberboxInputContainer.numberbox('clear');
                                Gift.Activation.AddWindow.bitNumberboxInputContainer.numberbox('clear');
			},
		},
	},
	Query: {
		
		init: function() {
			Language.getCurrLanguage();
			Utils.loadJavascriptFile('/application/views/libraries/component/' + language + '.js');
			Utils.loadJavascriptFile('/application/views/libraries/utils/' + language + '.js');
			Utils.loadJavascriptFile('/application/views/module/Gift/' + language + '.js');
			Utils.initAjax();
			
			Gift.Query.View.init();
		},
		
		View: {
			dataGridPanelContainer: '',
			
			init: function() {
				Gift.Query.View.dataGridPanelContainer = $('#dataGridPanel #dataGrid');
				Gift.Query.View.DataGrid.init();
			},
			
			DataGrid: {
				operatorIdComboboxLabelContainer: '',
				operatorIdComboboxInputContainer: '',
                				
                cardNameValidateboxLabelContainer: '',
                cardNameValidateboxInputContainer: '',

				startDatetimeboxLabelContainer: '',
				startDatetimeboxInputContainer: '',
				endDatetimeboxLabelContainer: '',
				endDatetimeboxInputContainer: '',
				searchButtonContainer: '',
                exportButtonContainer:'',

				init: function() {
					Gift.Query.View.DataGrid.operatorIdComboboxLabelContainer = $('#dataGridPanel #toolbar #operatorIdComboboxLabel');
					Gift.Query.View.DataGrid.operatorIdComboboxInputContainer = $('#dataGridPanel #toolbar #operatorIdComboboxInput');

                    Gift.Query.View.DataGrid.cardNameValidateboxLabelContainer = $('#dataGridPanel #toolbar #cardNameValidateboxLabel');
					Gift.Query.View.DataGrid.cardNameValidateboxInputContainer = $('#dataGridPanel #toolbar #cardNameValidateboxInput');

					Gift.Query.View.DataGrid.startDatetimeboxLabelContainer = $('#dataGridPanel #toolbar #startDatetimeboxLabel');
					Gift.Query.View.DataGrid.startDatetimeboxInputContainer = $('#dataGridPanel #toolbar #startDatetimeboxInput');
					Gift.Query.View.DataGrid.endDatetimeboxLabelContainer = $('#dataGridPanel #toolbar #endDatetimeboxLabel');
					Gift.Query.View.DataGrid.endDatetimeboxInputContainer = $('#dataGridPanel #toolbar #endDatetimeboxInput');
					Gift.Query.View.DataGrid.searchButtonContainer = $('#dataGridPanel #toolbar #searchButton');
                    Gift.Query.View.DataGrid.exportButtonContainer = $('#dataGridPanel #toolbar #exportButton');
					Gift.Query.View.DataGrid.create();
				},
				
				create: function() {
					var width = $(document).width() - 40;
					var height = $(document).height() - 40;
					Gift.Query.View.dataGridPanelContainer.width(width);
					Gift.Query.View.dataGridPanelContainer.height(height);
					Gift.Query.View.dataGridPanelContainer.datagrid({
						fitColumns: false,
						toolbar: '#toolbar',						
						columns: [[
							{
								checkbox: true
							},
							{
								field: 'applyId',
								title: giftActivationViewDataGridColumnTitle1,
								width: 100,
							},
                                                        {
								field: 'useLimit',
								title: giftActivationViewDataGridColumnTitle7,
								width: 100,
                                                                formatter: function(value) {
									if(value === '1') {
										return giftTypeValue1;
									}
									else if(value === '2') {
										return giftTypeValue2;
									}
                                                                        else if(value === '3') {
										return giftTypeValue3;
									}
                                                                        else if(value === '4') {
										return giftTypeValue4;
									}
								}
							},
							{
								field: 'cardName',
								title: giftActivationViewDataGridColumnTitle3,
								width: 200,
							},
							{
								field: 'operatorName',
								title: giftActivationViewDataGridColumnTitle10,
								width: 100,
							},
							{
								field: 'count',
								title: giftActivationViewDataGridColumnTitle4,
								width: 80,
							},
                                                        {
								field: 'usedCount',
								title: giftActivationViewDataGridColumnTitle9,
								width: 100,
							},
							{
								field: 'applyUserName',
								title: giftActivationViewDataGridColumnTitle5,
								width: 80,
							},
							{
								field: 'applyDatetime',
								title: giftActivationViewDataGridColumnTitle6,
								width: 150,
							},
                                                        {
								field: 'status',
								title: giftActivationViewDataGridColumnTitle8,
								width: 150,
                                                                formatter: function(value) {
									if(value === '1') {
										return giftUseValue1;
									}
									else if(value === '2') {
										return giftUseValue2;
									}
								}
							},
							{
								field: 'operatorParam',
								width: 80,
								formatter: function(value, row) {
									if(row.status === '2') {
										return '<a target="_blank" href="/index.php/Gift/activation/export?applyId=' + row.applyId + '&cardName=' + row.cardName + '">导出</a>';
									}
								},
							},
						]],
						loadFilter: Utils.dataGridLoadFilter,
						pagination: true,
						pageSize: 50,
						pageList: [50, 100, 150, 200],
					});
					Component.Combobox.OperatorId.create(
						Gift.Query.View.DataGrid.operatorIdComboboxLabelContainer,
						Gift.Query.View.DataGrid.operatorIdComboboxInputContainer
					);
                    
                    Component.Validatebox.CardName.create(
						Gift.Query.View.DataGrid.cardNameValidateboxLabelContainer,
						Gift.Query.View.DataGrid.cardNameValidateboxInputContainer
					);
					Component.Datebox.Start.create(
						Gift.Query.View.DataGrid.startDatetimeboxLabelContainer,
						Gift.Query.View.DataGrid.startDatetimeboxInputContainer
					);
					Component.Datebox.End.create(
						Gift.Query.View.DataGrid.endDatetimeboxLabelContainer,
						Gift.Query.View.DataGrid.endDatetimeboxInputContainer
					);
					Gift.Query.View.DataGrid.searchButtonContainer.linkbutton({
						iconCls: 'icon-search',
						text: giftSendViewDataGridToolbarButtonText4,
					});
					Gift.Query.View.DataGrid.searchButtonContainer.bind(
						'click',
						Gift.Query.View.DataGrid.doSearch
					);
                    Gift.Query.View.DataGrid.exportButtonContainer.linkbutton({
						iconCls: 'icon-search',
						text: giftActivationViewDataGridToolbarButtonText2,
					});
					Gift.Query.View.DataGrid.exportButtonContainer.bind(
						'click',
						Gift.Query.View.DataGrid.doExport
					);
				},
				doSearch: function() {
					Gift.Query.View.dataGridPanelContainer.datagrid({
						url: '/index.php/Gift/query/getListData',
						queryParams: {
							operatorId:  Gift.Query.View.DataGrid.operatorIdComboboxInputContainer.combobox('getValue'),
                            
                            cardName: Gift.Query.View.DataGrid.cardNameValidateboxInputContainer[0].value,
							startDateTime: Gift.Query.View.DataGrid.startDatetimeboxInputContainer.datetimebox('getValue'),
							endDateTime: Gift.Query.View.DataGrid.endDatetimeboxInputContainer.datetimebox('getValue'),
						}
					});
				},
				doExport: function() {

                    var operatorId = Gift.Query.View.DataGrid.operatorIdComboboxInputContainer.combobox('getValue');
                    
                    var cardName = Gift.Query.View.DataGrid.cardNameValidateboxInputContainer[0].value;
                    var startDateTime = Gift.Query.View.DataGrid.startDatetimeboxInputContainer.datebox('getValue');
                    var endDateTime =  Gift.Query.View.DataGrid.endDatetimeboxInputContainer.datebox('getValue');

                  	var downUrl = "/index.php/Gift/query/export?operatorId="+ operatorId +"&gameAreaId="+gameAreaId+"&cardName="+cardName+"&startDateTime="+startDateTime+"&endDateTime="+endDateTime
                              window.location = downUrl;

				},
				
				// load: function() {
				// 	Gift.Query.View.dataGridPanelContainer.datagrid('load');
				// },
				
				getCheckedRows: function(allowMulti) {
					var allowMulti = arguments[0] ? arguments[0] : false;
					var checkedRow = Gift.Query.View.dataGridPanelContainer.datagrid('getChecked');
					
					if(Utils.dataGridValidateCheckedRow(checkedRow, allowMulti) === true) {
						return checkedRow;
					}
					else {
						return false;
					}
				},
    //             del: function() {
				// 	var checkedRow = Gift.Query.View.DataGrid.getCheckedRows();
					
				// 	if( !(checkedRow === false) ) {
				// 		$.messager.confirm(
				// 			giftSendConfirmDelWindowTitle,
				// 			giftSendConfirmDelWindowContent,
				// 			function(r) {
				// 				if(r === true) {
				// 					$.ajax({
				// 						url: '/index.php/Gift/Query/del',
				// 						data: {
				// 							applyId: checkedRow[0].applyId
				// 						},
				// 					})
				// 					.done(function(response) {
				// 						if(response.errorCode === 0) {
				// 							$.messager.alert(messageWindowTitle, giftSendDelSuccessInfo, 'info');
				// 						}
				// 					});
				// 				}
				// 			}
				// 		);
				// 	}
				// }
			},
			
		},

	},
}