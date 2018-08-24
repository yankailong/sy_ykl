var Mail = {
	Send: {
        applyWindowContainer:'',
		applySysWindowContainer: '',
		addItemWindowContainer: '',
		// infoWindowContainer: '',
		
		init: function() {
			Language.getCurrLanguage();
			Utils.loadJavascriptFile('/application/views/libraries/component/' + language + '.js');
			Utils.loadJavascriptFile('/application/views/libraries/utils/' + language + '.js');
			Utils.loadJavascriptFile('/application/views/module/Mail/' + language + '.js');
			Utils.initAjax();
                        
                        Mail.Send.applyWindowContainer = $('#applyWindow');
			Mail.Send.ApplyWindow.init();
			Mail.Send.applySysWindowContainer = $('#applySysWindow');
			Mail.Send.ApplySysWindow.init();
			Mail.Send.addItemWindowContainer = $('#addItemWindow');
			Mail.Send.AddItemWindow.init();
			// Mail.Send.infoWindowContainer = $('#infoWindow');
			// Mail.Send.InfoWindow.init(); 
			Mail.Send.View.init();
		},
		
		View: {
			dataGridPanelContainer: '',
			
			init: function() {
				Mail.Send.View.dataGridPanelContainer = $('#dataGridPanel #dataGrid');
				Mail.Send.View.DataGrid.init();
			},
			
			DataGrid: {
                                operatorIdComboboxLabelContainer: '',
				operatorIdComboboxInputContainer: '',
                                areaNumCombogridLabelContainer: '',
                                areaNumCombogridInputContainer: '',
                                searchButtonContainer: '',
                                sysMailButtonContainer:'',
                                allSendButtonContainer:'',
                                delButtonContainer:'',
                                
				init: function() {
                                        Mail.Send.View.DataGrid.operatorIdComboboxLabelContainer = $('#dataGridPanel #toolbar #operatorIdComboboxLabel');
					Mail.Send.View.DataGrid.operatorIdComboboxInputContainer = $('#dataGridPanel #toolbar #operatorIdComboboxInput');
                                        Mail.Send.View.DataGrid.areaNumCombogridLabelContainer = $('#dataGridPanel #toolbar #areaNumCombogridLabel');
					Mail.Send.View.DataGrid.areaNumCombogridInputContainer = $('#dataGridPanel #toolbar #areaNumCombogridInput');
                                        Mail.Send.View.DataGrid.searchButtonContainer = $('#dataGridPanel #toolbar #searchButton');
                                        Mail.Send.View.DataGrid.sysMailButtonContainer = $('#dataGridPanel #toolbar #sysMailButton');
                                        Mail.Send.View.DataGrid.allSendButtonContainer = $('#dataGridPanel #toolbar #allSendButton');
                                        Mail.Send.View.DataGrid.delButtonContainer = $('#dataGridPanel #toolbar #delButton');
					Mail.Send.View.DataGrid.create();
                                        Mail.Send.View.DataGrid.showCurrSelectInfo();
				},
				
				create: function() {
					var width = $(document).width() - 40;
					var height = $(document).height() - 40;
					Mail.Send.View.dataGridPanelContainer.width(width);
					Mail.Send.View.dataGridPanelContainer.height(height);
					Mail.Send.View.dataGridPanelContainer.datagrid({
						idField: "applyId",
						toolbar: '#toolbar',
						columns: [[
							{
								checkbox: true,
							},
                                                        {
								field: 'applyId',
								title: mailSendViewDataGridColumnTitle1,
								width: 60,
							},
							{
								field: 'operatorId',
								title: mailSendViewDataGridColumnTitle2,
								width: 60,
							},
							{
								field: 'areaNum',
								title: mailSendViewDataGridColumnTitle3,
								width: 100,
							},
							{
								field: 'title',
								title: mailSendViewDataGridColumnTitle4,
								width: 100,
							},
							{
								field: 'content',
								title: mailSendViewDataGridColumnTitle5,
								width: 100,
							},
                                                        {
								field: 'item',
								title: mailSendViewDataGridColumnTitle6,
								width: 100,
							},
							{
								field: 'roleName',
								title: mailSendViewDataGridColumnTitle7,
								width: 80,
							},
							{
								field: 'sendTime',
								title: mailSendViewDataGridColumnTitle8,
								width: 200,
							},
							{
								field: 'operator',
								title: mailSendViewDataGridColumnTitle9,
								width: 80,
							},
                                                        {
								field: 'status',
								title: mailSendViewDataGridColumnTitle10,
								width: 80,
                                                                formatter: function(value) {
									if(value === '0') {
										return mailSendOperationValue0;
									}
									else if(value === '1') {
										return mailSendOperationValue1;
									}
                                                                        else if(value === '2') {
										return mailSendOperationValue2;
									}
								}
							},
						]],
						singleSelect: true,
                                                rownumbers:true,
						loadFilter: Utils.dataGridLoadFilter,
						pagination: true,
						pageSize: 50,
						pageList: [50, 100, 150, 200],
					});
                                        Component.Combobox.OperatorId.create(
						Mail.Send.View.DataGrid.operatorIdComboboxLabelContainer,
						Mail.Send.View.DataGrid.operatorIdComboboxInputContainer
					);
                                        Component.Combogrid.AreaNum.create(
						Mail.Send.View.DataGrid.areaNumCombogridLabelContainer,
						Mail.Send.View.DataGrid.areaNumCombogridInputContainer
					);
                                        Mail.Send.View.DataGrid.searchButtonContainer.linkbutton({
						iconCls: 'icon-search',
						text: mailSendViewDataGridToolbarButtonText4,
					});
                                        Mail.Send.View.DataGrid.searchButtonContainer.bind(
						'click',
						Mail.Send.View.DataGrid.doSearch
					);
                                        Mail.Send.View.DataGrid.sysMailButtonContainer.linkbutton({
						iconCls: 'icon-add',
						text: mailSendViewDataGridToolbarButtonText1,
					});
                                        Mail.Send.View.DataGrid.sysMailButtonContainer.bind(
						'click',
						Mail.Send.ApplySysWindow.open
					);
                                        Mail.Send.View.DataGrid.allSendButtonContainer.linkbutton({
						iconCls: 'icon-edit',
						text: mailSendViewDataGridToolbarButtonText2,
					});
                                        Mail.Send.View.DataGrid.allSendButtonContainer.bind(
						'click',
						Mail.Send.ApplyWindow.open
					);
                                        Mail.Send.View.DataGrid.delButtonContainer.linkbutton({
						iconCls: 'icon-del',
						text: mailSendViewDataGridToolbarButtonText3,
					});
                                        Mail.Send.View.DataGrid.delButtonContainer.bind(
						'click',
						Mail.Send.View.DataGrid.del
					);
				},
				showCurrSelectInfo:function(){
                                        $.ajax({
                                                url: '/index.php/User/manage/getCurrSelectInfo',
                                        })
                                        .done(function(response) {
                                                if(response.data.operatorId!=false) {
                                                    Mail.Send.View.DataGrid.operatorIdComboboxInputContainer.combobox('select',response.data.operatorId);
                                                    Mail.Send.View.DataGrid.areaNumCombogridInputContainer.combogrid('setValue',response.data.gameAreaId);
                                                }
                                        })
                                }, 
				load: function() {
					Mail.Send.View.dataGridPanelContainer.datagrid('reload');
				},
				
				getCheckedRows: function(allowMulti) {
					var allowMulti = arguments[0] ? arguments[0] : false;
					var checkedRow = Mail.Send.View.dataGridPanelContainer.datagrid('getChecked');
					
					if(Utils.dataGridValidateCheckedRow(checkedRow, allowMulti) === true) {
						return checkedRow;
					}
					else {
						return false;
					}
				},
                                doSearch: function() {
					Mail.Send.View.dataGridPanelContainer.datagrid({
						url: '/index.php/Mail/send/getListData',
						queryParams: {
							operatorId: Mail.Send.View.DataGrid.operatorIdComboboxInputContainer.combobox('getValue'),
                                                        gameAreaId: Mail.Send.View.DataGrid.areaNumCombogridInputContainer.combogrid('getValues').toString(),
						},
					});
				},
                                del: function() {
					var checkedRow = Mail.Send.View.DataGrid.getCheckedRows();
					
					if( !(checkedRow === false) ) {
						$.messager.confirm(
							mailSendConfirmDelWindowTitle,
							mailSendConfirmDelWindowContent,
							function(r) {
								if(r === true) {
									$.ajax({
										url: '/index.php/Mail/send/del',
										data: {
											applyId: checkedRow[0].applyId
										},
									})
									.done(function(response) {
										if(response.errorCode === 0) {
											$.messager.alert(messageWindowTitle, mailSendDelSuccessInfo, 'info');
										}
									});
								}
							}
						);
					}
				}
			},
			
			// doApproval: function() {
			// 	var checkedRow = Mail.Send.View.DataGrid.getCheckedRows();
				
			// 	if(checkedRow != false) {
			// 		$.messager.defaults = {ok: mailSendApprovalConfirmWindowOkMessage, cancel: mailSendApprovalConfirmWindowCancelMessage};
			// 		$.messager.confirm(
			// 			'Confirm',
			// 			mailSendApprovalConfirmWindowMessage,
			// 			function(r){
			// 				$.messager.defaults = {ok: 'Ok', cancel: 'Cancel'};
							
			// 				if(r) {
			// 					status = 2;
			// 				}
			// 				else {
			// 					status = 3;
			// 				}
							
			// 				$.ajax({
			// 					url: '/index.php/Mail/send/approval',
			// 					data: {
			// 						applyId: checkedRow[0].applyId,
			// 						status: status,
			// 					}
			// 				})
			// 				.done(function(response) {
			// 					if(response.errorCode === 0) {
			// 						$.messager.alert(messageWindowTitle, mailSendApprovalSuccessInfo, 'info');
			// 						Mail.Send.View.DataGrid.load();
			// 					}
			// 				})
			// 			}
			// 		)				
			// 	}
			// },
		},
		ApplySysWindow: {
			operatorIdComboboxLabelContainer: '',
			operatorIdComboboxInputContainer: '',
			areaNumCombogridLabelContainer: '',
			areaNumCombogridInputContainer: '',
			senderNameValidateboxLabelContainer: '',
			senderNameValidateboxInputContainer: '',
			titleValidateboxLabelContainer: '',
			titleValidateboxInputContainer: '',
                        roleNameTextboxLabelContainer:'',
                        roleNameTextboxInputContainer:'',
			contentTextboxLabelContainer: '',
			contentTextboxInputContainer: '',
			sendDatetimeboxLabelContainer: '',
			sendDatetimeboxInputContainer: '',
			submitButtonContainer: '',
			resetButtonContainer: '',
			itemDataGridContainer: '',
			
			init: function() {
				Mail.Send.ApplySysWindow.operatorIdComboboxLabelContainer = $('#applySysWindow #operatorIdComboboxLabel');
				Mail.Send.ApplySysWindow.operatorIdComboboxInputContainer = $('#applySysWindow #operatorIdComboboxInput');
				Mail.Send.ApplySysWindow.areaNumCombogridLabelContainer = $('#applySysWindow #areaNumCombogridLabel');
				Mail.Send.ApplySysWindow.areaNumCombogridInputContainer = $('#applySysWindow #areaNumCombogridInput');
				Mail.Send.ApplySysWindow.senderNameValidateboxLabelContainer = $('#applySysWindow #senderNameValidateboxLabel');
				Mail.Send.ApplySysWindow.senderNameValidateboxInputContainer = $('#applySysWindow #senderNameValidateboxInput');
				Mail.Send.ApplySysWindow.titleValidateboxLabelContainer = $('#applySysWindow #titleValidateboxLabel');
				Mail.Send.ApplySysWindow.titleValidateboxInputContainer = $('#applySysWindow #titleValidateboxInput');
                                Mail.Send.ApplySysWindow.roleNameTextboxLabelContainer = $('#applySysWindow #roleNameTextboxLabel');
				Mail.Send.ApplySysWindow.roleNameTextboxInputContainer = $('#applySysWindow #roleNameTextboxInput');
				Mail.Send.ApplySysWindow.contentTextboxLabelContainer = $('#applySysWindow #contentTextboxLabel');
				Mail.Send.ApplySysWindow.contentTextboxInputContainer = $('#applySysWindow #contentTextboxInput');
				Mail.Send.ApplySysWindow.sendDatetimeboxLabelContainer = $('#applySysWindow #sendDatetimeboxLabel');
				Mail.Send.ApplySysWindow.sendDatetimeboxInputContainer = $('#applySysWindow #sendDatetimeboxInput');
				Mail.Send.ApplySysWindow.itemDataGridContainer = $('#applySysWindow #itemDataGrid');
				Mail.Send.ApplySysWindow.submitButtonContainer = $('#applySysWindow #submitButton');
				Mail.Send.ApplySysWindow.resetButtonContainer = $('#applySysWindow #resetButton');
				Mail.Send.ApplySysWindow.create();
				Mail.Send.ApplySysWindow.ItemDataGrid.create();
			},
			
			ItemDataGrid: {
				create: function() {
					Mail.Send.ApplySysWindow.itemDataGridContainer.datagrid({
						// width: 248,
						width: 318,
						height: 403,
						fitColumns: false,
						border: false,
						toolbar: [
							{
								iconCls: 'icon-add',
								text: mailSendApplyWindowItemDataGridToolbarButtonText1,
								handler: Mail.Send.AddItemWindow.open,
							},
							{
								iconCls: 'icon-remove',
								text: mailSendApplyWindowItemDataGridToolbarButtonText2,
								handler: Mail.Send.ApplySysWindow.ItemDataGrid.deleteRow,
							},
						],
						columns: [[
							{
								checkbox: true
							},
							{
								field: 'itemName',
								title: mailSendApplyWindowItemDataGridColumnTitle1,
								width: 100
							},
							{
								field: 'count',
								title: mailSendApplyWindowItemDataGridColumnTitle2,
								width: 80
							},
							{
								field: 'type',
								title: mailSendApplyWindowItemDataGridColumnTitle3,
								width: 100,
								formatter: function(value) {
									if(value === '0') {
										return typeValue1;
									}
									else if(value === '1') {
										return typeValue2; 
									}                                
                           		}
                           		// formatter: function(value,row,index)
                           		// function formatterType(value, row, index){
                           		
                           		// formatter: function(value,row,index){  
								//     if(row.typeId==0){  
								//         return "currencyTypeValue1";  
								//     }else if(row.typeId==1){  
								//         return "currencyTypeValue2";  
								//     }  
								// } 
							},
						]],
					})
				},

				
				
				appendRow: function(id, itemName, count, type) {
					Mail.Send.ApplySysWindow.itemDataGridContainer.datagrid(
						'appendRow',
						{
							id: id,
							itemName: itemName,
							count: count,
							type: type
						}
					);
				},
				
				deleteRow: function() {
					var checkedRow = Mail.Send.ApplySysWindow.ItemDataGrid.getCheckedRows(true);
					
					$.each(
							checkedRow,
						function(idx, val) {
							var index = Mail.Send.ApplySysWindow.itemDataGridContainer.datagrid('getRowIndex', val);
							Mail.Send.ApplySysWindow.itemDataGridContainer.datagrid('deleteRow', index);
						}
					);
				},
				
				getCheckedRows: function(allowMulti) {
					var allowMulti = arguments[0] ? arguments[0] : false;
					var checkedRow = Mail.Send.ApplySysWindow.itemDataGridContainer.datagrid('getChecked');
					
					if(Utils.dataGridValidateCheckedRow(checkedRow, allowMulti) === true) {
						return checkedRow;
					}
					else {
						return false;
					}
				},
				
				reset: function() {
					Mail.Send.ApplySysWindow.itemDataGridContainer.datagrid(
						'loadData',
						[]
					);
				}
			},
			
			create: function() {
				Mail.Send.applySysWindowContainer.window({
					title: mailSendApplyWindowTitle,
					width: 613,
					height: 500,
					collapsible: false, 
					minimizable: false,
					maximizable: false,
					closable: true,
					closed: true,
					modal: true,
				});
				Component.Combobox.OperatorId.create(
					Mail.Send.ApplySysWindow.operatorIdComboboxLabelContainer,
					Mail.Send.ApplySysWindow.operatorIdComboboxInputContainer
				);
				Component.Combogrid.AreaNum.create(
					Mail.Send.ApplySysWindow.areaNumCombogridLabelContainer,
					Mail.Send.ApplySysWindow.areaNumCombogridInputContainer
				);
				Component.Validatebox.SenderName.create(
					Mail.Send.ApplySysWindow.senderNameValidateboxLabelContainer,
					Mail.Send.ApplySysWindow.senderNameValidateboxInputContainer
				);
				Component.Validatebox.Title.create(
					Mail.Send.ApplySysWindow.titleValidateboxLabelContainer,
					Mail.Send.ApplySysWindow.titleValidateboxInputContainer
				);
                                Component.Textbox.RoleName.create(
					Mail.Send.ApplySysWindow.roleNameTextboxLabelContainer
				);
				Component.Textbox.Content.create(
					Mail.Send.ApplySysWindow.contentTextboxLabelContainer
				);
				Component.Datetimebox.Send.create(
					Mail.Send.ApplySysWindow.sendDatetimeboxLabelContainer,
					Mail.Send.ApplySysWindow.sendDatetimeboxInputContainer
				);
				Mail.Send.ApplySysWindow.submitButtonContainer.linkbutton({
					iconCls: 'icon-ok',
					text: mailSendApplyWindowSubmitButtonText,
				});
				Mail.Send.ApplySysWindow.submitButtonContainer.bind(
					'click',
					Mail.Send.ApplySysWindow.doSubmit
				);
				Mail.Send.ApplySysWindow.resetButtonContainer.linkbutton({
					iconCls: 'icon-undo',
					text: mailSendApplyWindowResetButtonText,
				})
				Mail.Send.ApplySysWindow.resetButtonContainer.bind(
					'click',
					Mail.Send.ApplySysWindow.doReset
				);
			},
			
			open: function() {
				Mail.Send.ApplySysWindow.reset();
				Mail.Send.applySysWindowContainer.window('open');
			},
			
			close: function() {
				Mail.Send.applySysWindowContainer.window('close');
			},
			
			doSubmit: function() {
                var operatorId = Mail.Send.ApplySysWindow.operatorIdComboboxInputContainer.combobox('getValue');
				var gameAreaId = Mail.Send.ApplySysWindow.areaNumCombogridInputContainer.combogrid('getValue');
				var senderName = Mail.Send.ApplySysWindow.senderNameValidateboxInputContainer[0].value;
				var title = Mail.Send.ApplySysWindow.titleValidateboxInputContainer[0].value;
                var roleName = Mail.Send.ApplySysWindow.roleNameTextboxInputContainer[0].value;
				var content = Mail.Send.ApplySysWindow.contentTextboxInputContainer[0].value;
				var sendDatetime = Mail.Send.ApplySysWindow.sendDatetimeboxInputContainer.datetimebox('getValue');
				var itemArray = Mail.Send.ApplySysWindow.itemDataGridContainer.datagrid('getRows');
				
				
				var itemString
				
				if(itemArray.length > 0) {
					var itemString = '[';
					
					$.each(
						itemArray,
						function(idx, val) {
							itemString = itemString + '{"id":' + val['id'] + ', "count":' + val['count'] +', "type":' + val['type'] +'},'
						}
					);
					
					itemString = itemString.substring(0, itemString.length-1) + ']';
				}
				
				$.ajax({
					url: '/index.php/Mail/send/applySys',
					data: {
                                                operatorId: operatorId,
						gameAreaId: gameAreaId,
						senderName: senderName,
						title: title,
                                                roleName:roleName,
						content: content,
						sendDatetime: sendDatetime,
						itemString: itemString,
					}
				})
				.done(function(response) {
					if(response.errorCode === 0) {
						$.messager.alert(messageWindowTitle, mailSendApplyWindowSubmitSuccessInfo1, 'info');
						Mail.Send.ApplySysWindow.close();
						Mail.Send.View.DataGrid.load();
					}
				})
			},
			
			doReset: function() {
				Mail.Send.ApplySysWindow.reset();
			},
			
			reset: function() {
                                Mail.Send.ApplySysWindow.operatorIdComboboxInputContainer.combobox('reset');
				Mail.Send.ApplySysWindow.areaNumCombogridInputContainer.combogrid('reset');
				Mail.Send.ApplySysWindow.senderNameValidateboxInputContainer[0].value = '';
				Mail.Send.ApplySysWindow.titleValidateboxInputContainer[0].value = '';
                                Mail.Send.ApplySysWindow.roleNameTextboxInputContainer[0].value = '';
				Mail.Send.ApplySysWindow.contentTextboxInputContainer[0].value = '';
				Mail.Send.ApplySysWindow.sendDatetimeboxInputContainer.datetimebox('reset');
				Mail.Send.ApplySysWindow.ItemDataGrid.reset();
			},
		},
		ApplyWindow: {
			operatorIdComboboxLabelContainer: '',
			operatorIdComboboxInputContainer: '',
			areaNumCombogridLabelContainer: '',
			areaNumCombogridInputContainer: '',
			senderNameValidateboxLabelContainer: '',
			senderNameValidateboxInputContainer: '',
			titleValidateboxLabelContainer: '',
			titleValidateboxInputContainer: '',
			contentTextboxLabelContainer: '',
			contentTextboxInputContainer: '',
			sendDatetimeboxLabelContainer: '',
			sendDatetimeboxInputContainer: '',
			submitButtonContainer: '',
			resetButtonContainer: '',
			itemDataGridContainer: '',
			
			init: function() {
				Mail.Send.ApplyWindow.operatorIdComboboxLabelContainer = $('#applyWindow #operatorIdComboboxLabel');
				Mail.Send.ApplyWindow.operatorIdComboboxInputContainer = $('#applyWindow #operatorIdComboboxInput');
				Mail.Send.ApplyWindow.areaNumCombogridLabelContainer = $('#applyWindow #areaNumCombogridLabel');
				Mail.Send.ApplyWindow.areaNumCombogridInputContainer = $('#applyWindow #areaNumCombogridInput');
				Mail.Send.ApplyWindow.senderNameValidateboxLabelContainer = $('#applyWindow #senderNameValidateboxLabel');
				Mail.Send.ApplyWindow.senderNameValidateboxInputContainer = $('#applyWindow #senderNameValidateboxInput');
				Mail.Send.ApplyWindow.titleValidateboxLabelContainer = $('#applyWindow #titleValidateboxLabel');
				Mail.Send.ApplyWindow.titleValidateboxInputContainer = $('#applyWindow #titleValidateboxInput');
				Mail.Send.ApplyWindow.contentTextboxLabelContainer = $('#applyWindow #contentTextboxLabel');
				Mail.Send.ApplyWindow.contentTextboxInputContainer = $('#applyWindow #contentTextboxInput');
				Mail.Send.ApplyWindow.sendDatetimeboxLabelContainer = $('#applyWindow #sendDatetimeboxLabel');
				Mail.Send.ApplyWindow.sendDatetimeboxInputContainer = $('#applyWindow #sendDatetimeboxInput');
				Mail.Send.ApplyWindow.itemDataGridContainer = $('#applyWindow #itemDataGrid');
				Mail.Send.ApplyWindow.submitButtonContainer = $('#applyWindow #submitButton');
				Mail.Send.ApplyWindow.resetButtonContainer = $('#applyWindow #resetButton');
				Mail.Send.ApplyWindow.create();
				Mail.Send.ApplyWindow.ItemDataGrid.create();
			},
			
			ItemDataGrid: {
				create: function() {
					Mail.Send.ApplyWindow.itemDataGridContainer.datagrid({
						width: 318,
						height: 403,
						fitColumns: false,
						border: false,
						toolbar: [
							{
								iconCls: 'icon-add',
								text: mailSendApplyWindowItemDataGridToolbarButtonText1,
								handler: Mail.Send.AddItemWindow.open,
							},
							{
								iconCls: 'icon-remove',
								text: mailSendApplyWindowItemDataGridToolbarButtonText2,
								handler: Mail.Send.ApplyWindow.ItemDataGrid.deleteRow,
							},
						],
						columns: [[
							{
								checkbox: true
							},
							{
								field: 'itemName',
								title: mailSendApplyWindowItemDataGridColumnTitle1,
								width: 100
							},
							{
								field: 'count',
								title: mailSendApplyWindowItemDataGridColumnTitle2,
								width: 80,
							},
							{
								field: 'type',
								title: mailSendApplyWindowItemDataGridColumnTitle3,
								width: 100,
								formatter: function(value) {
									if(value === '0') {
										return typeValue1;
									}
									else if(value === '1') {
										return typeValue2; 
									}                                
                           		}
							},
						]],
					})
				},
				
				appendRow: function(id, itemName, count, type) {
					Mail.Send.ApplyWindow.itemDataGridContainer.datagrid(
						'appendRow',
						{
							id: id,
							itemName: itemName,
							count: count,
							type: type
						}
					);
				},
				
				deleteRow: function() {
					var checkedRow = Mail.Send.ApplyWindow.ItemDataGrid.getCheckedRows(true);
					
					$.each(
							checkedRow,
						function(idx, val) {
							var index = Mail.Send.ApplyWindow.itemDataGridContainer.datagrid('getRowIndex', val);
							Mail.Send.ApplyWindow.itemDataGridContainer.datagrid('deleteRow', index);
						}
					);
				},
				
				getCheckedRows: function(allowMulti) {
					var allowMulti = arguments[0] ? arguments[0] : false;
					var checkedRow = Mail.Send.ApplyWindow.itemDataGridContainer.datagrid('getChecked');
					
					if(Utils.dataGridValidateCheckedRow(checkedRow, allowMulti) === true) {
						return checkedRow;
					}
					else {
						return false;
					}
				},
				
				reset: function() {
					Mail.Send.ApplyWindow.itemDataGridContainer.datagrid(
						'loadData',
						[]
					);
				}
			},
			
			create: function() {
				Mail.Send.applyWindowContainer.window({
					title: mailSendApplyWindowTitle,
					width: 613,
					height: 500,
					collapsible: false,
					minimizable: false,
					maximizable: false,
					closable: true,
					closed: true,
					modal: true,
				});
				Component.Combobox.OperatorId.create(
					Mail.Send.ApplyWindow.operatorIdComboboxLabelContainer,
					Mail.Send.ApplyWindow.operatorIdComboboxInputContainer
				);
				Component.Combogrid.AreaNum.create(
					Mail.Send.ApplyWindow.areaNumCombogridLabelContainer,
					Mail.Send.ApplyWindow.areaNumCombogridInputContainer
				);
				Component.Validatebox.SenderName.create(
					Mail.Send.ApplyWindow.senderNameValidateboxLabelContainer,
					Mail.Send.ApplyWindow.senderNameValidateboxInputContainer
				);
				Component.Validatebox.Title.create(
					Mail.Send.ApplyWindow.titleValidateboxLabelContainer,
					Mail.Send.ApplyWindow.titleValidateboxInputContainer
				);
				Component.Textbox.Content.create(
					Mail.Send.ApplyWindow.contentTextboxLabelContainer
				);
				Component.Datetimebox.Send.create(
					Mail.Send.ApplyWindow.sendDatetimeboxLabelContainer,
					Mail.Send.ApplyWindow.sendDatetimeboxInputContainer
				);
				Mail.Send.ApplyWindow.submitButtonContainer.linkbutton({
					iconCls: 'icon-ok',
					text: mailSendApplyWindowSubmitButtonText,
				});
				Mail.Send.ApplyWindow.submitButtonContainer.bind(
					'click',
					Mail.Send.ApplyWindow.doSubmit
				);
				Mail.Send.ApplyWindow.resetButtonContainer.linkbutton({
					iconCls: 'icon-undo',
					text: mailSendApplyWindowResetButtonText,
				})
				Mail.Send.ApplyWindow.resetButtonContainer.bind(
					'click',
					Mail.Send.ApplyWindow.doReset
				);
			},
			
			open: function() {
				Mail.Send.ApplyWindow.reset();
				Mail.Send.applyWindowContainer.window('open');
			},
			
			close: function() {
				Mail.Send.applyWindowContainer.window('close');
			},
			
			doSubmit: function() {
                                var operatorId = Mail.Send.ApplyWindow.operatorIdComboboxInputContainer.combobox('getValue');
				var gameAreaIdArray = Mail.Send.ApplyWindow.areaNumCombogridInputContainer.combogrid('getValues');
				var senderName = Mail.Send.ApplyWindow.senderNameValidateboxInputContainer[0].value;
				var title = Mail.Send.ApplyWindow.titleValidateboxInputContainer[0].value;
				var content = Mail.Send.ApplyWindow.contentTextboxInputContainer[0].value;
				var sendDatetime = Mail.Send.ApplyWindow.sendDatetimeboxInputContainer.datetimebox('getValue');
				var itemArray = Mail.Send.ApplyWindow.itemDataGridContainer.datagrid('getRows');
				
				var gameAreaIdString
				
				if(gameAreaIdArray.length > 0) {
					gameAreaIdString = gameAreaIdArray.toString();
				}
				
				var itemString
				
				if(itemArray.length > 0) {
					var itemString = '[';
					
					$.each(
						itemArray,
						function(idx, val) {
							itemString = itemString + '{"id":' + val['id'] + ', "count":' + val['count'] +',"type":' + val['type'] +'},'
						}
					);
					
					itemString = itemString.substring(0, itemString.length-1) + ']';
				}
				
				$.ajax({
					url: '/index.php/Mail/send/applyAll',
					data: {
                                                operatorId: operatorId,
						gameAreaIdString: gameAreaIdString,
						senderName: senderName,
						title: title,
						content: content,
						sendDatetime: sendDatetime,
						itemString: itemString,
					}
				})
				.done(function(response) {
					if(response.errorCode === 0) {
						$.messager.alert(messageWindowTitle, mailSendApplyWindowSubmitSuccessInfo1, 'info');
						Mail.Send.ApplyWindow.close();
						Mail.Send.View.DataGrid.load();
					}
				})
			},
			
			doReset: function() {
				Mail.Send.ApplyWindow.reset();
			},
			
			reset: function() {
                                Mail.Send.ApplyWindow.operatorIdComboboxInputContainer.combobox('reset');
				Mail.Send.ApplyWindow.areaNumCombogridInputContainer.combogrid('reset');
				Mail.Send.ApplyWindow.senderNameValidateboxInputContainer[0].value = '';
				Mail.Send.ApplyWindow.titleValidateboxInputContainer[0].value = '';
				Mail.Send.ApplyWindow.contentTextboxInputContainer[0].value = '';
				Mail.Send.ApplyWindow.sendDatetimeboxInputContainer.datetimebox('reset');
				Mail.Send.ApplyWindow.ItemDataGrid.reset();
			},
		},
		
		AddItemWindow: {
			itemComboboxLabelContainer: '',
			itemComboboxInputContainer: '',
			countNumberboxLabelContainer: '',
			countNumberboxInputContainer: '',
			typeComboboxLabelContainer: '',
			typeComboboxInputContainer: '',
			submitButtonContainer: '',
			resetButtonContainer: '',
			
			init: function() {
				Mail.Send.AddItemWindow.itemComboboxLabelContainer = $('#addItemWindow #itemComboboxLabel');
				Mail.Send.AddItemWindow.itemComboboxInputContainer = $('#addItemWindow #itemComboboxInput');
				Mail.Send.AddItemWindow.countNumberboxLabelContainer = $('#addItemWindow #countNumberboxLabel');
				Mail.Send.AddItemWindow.countNumberboxInputContainer = $('#addItemWindow #countNumberboxInput');
				Mail.Send.AddItemWindow.typeComboboxLabelContainer = $('#addItemWindow #typeComboboxLabel');
				Mail.Send.AddItemWindow.typeComboboxInputContainer = $('#addItemWindow #typeComboboxInput');
				Mail.Send.AddItemWindow.submitButtonContainer = $('#addItemWindow #submitButton');
				Mail.Send.AddItemWindow.resetButtonContainer = $('#addItemWindow #resetButton');
				Mail.Send.AddItemWindow.create();
			},
			
			create: function() {
				Mail.Send.addItemWindowContainer.window({
					title: mailSendAddItemWindowTitle,
					collapsible: false,
					minimizable: false,
					maximizable: false,
					closable: true,
					closed: true,
					modal: true,
				});
				Component.Combobox.Item.create(
					Mail.Send.AddItemWindow.itemComboboxLabelContainer,
					Mail.Send.AddItemWindow.itemComboboxInputContainer
				);
				Component.Numberbox.Count.create(
					Mail.Send.AddItemWindow.countNumberboxLabelContainer,
					Mail.Send.AddItemWindow.countNumberboxInputContainer
				);
				Component.Combobox.Type.create(
					Mail.Send.AddItemWindow.typeComboboxLabelContainer,
					Mail.Send.AddItemWindow.typeComboboxInputContainer,true
				);
				Mail.Send.AddItemWindow.submitButtonContainer.linkbutton({
					iconCls: 'icon-ok',
					text: mailSendAddItemWindowSubmitButtonText,
				});
				Mail.Send.AddItemWindow.submitButtonContainer.bind(
					'click',
					Mail.Send.AddItemWindow.doSubmit
				);
				Mail.Send.AddItemWindow.resetButtonContainer.linkbutton({
					iconCls: 'icon-undo',
					text: mailSendAddItemWindowResetButtonText,
				})
				Mail.Send.AddItemWindow.resetButtonContainer.bind(
					'click',
					Mail.Send.AddItemWindow.doReset
				);
			},
			
			open: function() {
				Mail.Send.AddItemWindow.reset();
				Mail.Send.addItemWindowContainer.window('open');
			},
			
			close: function() {
				Mail.Send.addItemWindowContainer.window('close');
			},
			
			doSubmit: function() {
				var id = Mail.Send.AddItemWindow.itemComboboxInputContainer.combobox('getValue');
				var itemName = Mail.Send.AddItemWindow.itemComboboxInputContainer.combobox('getText');
				var itemCount = Mail.Send.AddItemWindow.countNumberboxInputContainer.numberbox('getValue');
				var type = Mail.Send.AddItemWindow.typeComboboxInputContainer.combobox('getValue');
				
				if(id <= 0) {
					$.messager.alert(messageWindowTitle, mailSendApplyWindowSubmitErrorInfo1, 'info');
				}
				else if(itemCount <= 0) {
					$.messager.alert(messageWindowTitle, mailSendApplyWindowSubmitErrorInfo2, 'info');
				}
				else {
					Mail.Send.ApplyWindow.ItemDataGrid.appendRow(id, itemName, itemCount, type);
                    Mail.Send.ApplySysWindow.ItemDataGrid.appendRow(id, itemName, itemCount, type);
					Mail.Send.AddItemWindow.close();
				}
			},
			
			doReset: function() {
				Mail.Send.AddItemWindow.reset();
			},
			
			reset: function() {
				Mail.Send.AddItemWindow.itemComboboxInputContainer.combobox('reset');
				Mail.Send.AddItemWindow.countNumberboxInputContainer.numberbox('clear');
				Mail.Send.AddItemWindow.typeComboboxInputContainer.combobox('reset');
			},
		},
		
		// InfoWindow: {
		// 	dataGridContainer: '',
			
		// 	init: function() {
		// 		Mail.Send.InfoWindow.dataGridContainer = $('#infoWindow #dataGrid');
		// 		Mail.Send.InfoWindow.DataGrid.init();
		// 		Mail.Send.InfoWindow.create();
		// 	},
			
		// 	DataGrid: {
		// 		init: function() {
		// 			Mail.Send.InfoWindow.DataGrid.create();
		// 		},
				
		// 		create: function() {
		// 			Mail.Send.InfoWindow.dataGridContainer.datagrid({
		// 				width: 547,
		// 				height: 392,
		// 				fitColumns: true,
		// 				border: false,
		// 				columns: [[
		// 					{
		// 						field: 'operatorName',
		// 						title: MailSendInfoWindowDataGridColumnTitle1,
		// 						width: 100,
		// 					},
		// 					{
		// 						field: 'areaNum',
		// 						title: MailSendInfoWindowDataGridColumnTitle2,
		// 						width: 80,
		// 					},
		// 					{
		// 						field: 'status',
		// 						title: MailSendInfoWindowDataGridColumnTitle3,
		// 						width: 100,
		// 						formatter: function(value) {
		// 							if(value === '1') {
		// 								return mailSendInfoWindowSendStatus1;
		// 							}
		// 							else if(value === '2') {
		// 								return mailSendInfoWindowSendStatus2;
		// 							}
		// 							else {
		// 								return value;
		// 							}
		// 						}
		// 					},
		// 				]],
		// 				loadFilter: Utils.dataGridLoadFilter,
		// 				pagination: true,
		// 				pageSize: 50,
		// 				pageList: [50, 100, 150, 200],
		// 			})
		// 		},
		// 	},
			
		// 	create: function() {
		// 		Mail.Send.infoWindowContainer.window({
		// 			width: 600,
		// 			height: 450,
		// 			title: mailSendInfoWindowTitle,
		// 			collapsible: false,
		// 			minimizable: false,
		// 			maximizable: false,
		// 			closable: true,
		// 			closed: true,
		// 			modal: true,
		// 		});
		// 	},
			
		// 	open: function() {
		// 		var checkedRow = Mail.Send.View.DataGrid.getCheckedRows();
				
		// 		if(checkedRow != false) {
		// 			Mail.Send.InfoWindow.dataGridContainer.datagrid({
		// 				url: '/index.php/Mail/send/getInfoData',
		// 				queryParams: {
		// 					applyId: checkedRow[0].applyId,
		// 				}
		// 			})
		// 			Mail.Send.infoWindowContainer.window('open');
		// 		}
		// 	},
		// },
	},
    Question: {
        rewardWindowContainer:'',
		addItemWindowContainer: '',
		
		init: function() {
			Language.getCurrLanguage();
			Utils.loadJavascriptFile('/application/views/libraries/component/' + language + '.js');
			Utils.loadJavascriptFile('/application/views/libraries/utils/' + language + '.js');
			Utils.loadJavascriptFile('/application/views/module/Mail/' + language + '.js');
			Utils.initAjax();
                        
                        Mail.Question.rewardWindowContainer = $('#rewardWindow');
			Mail.Question.RewardWindow.init();
			Mail.Question.View.init();
		},
		
		View: {
			dataGridPanelContainer: '',
			
			init: function() {
				Mail.Question.View.dataGridPanelContainer = $('#dataGridPanel #dataGrid');
				Mail.Question.View.DataGrid.init();
			},
			
			DataGrid: {
                                operatorIdComboboxLabelContainer: '',
				operatorIdComboboxInputContainer: '',
                                areaNumCombogridLabelContainer: '',
                                areaNumCombogridInputContainer: '',
                                stateComboboxLabelContainer: '',
                                stateComboboxInputContainer: '',
                                questionTypeComboboxLabelContainer: '',
                                questionTypeComboboxInputContainer: '',
                                accountValidateboxLabelContainer: '',
                                accountValidateboxInputContainer: '',
                                roleNameValidateboxLabelContainer: '',
                                roleNameValidateboxInputContainer: '',
                                searchButtonContainer: '',
                                startDatetimeboxLabelContainer: '',
				startDatetimeboxInputContainer: '',
				endDatetimeboxLabelContainer: '',
				endDatetimeboxInputContainer: '',
                                rewardButtonContainer:'',
                                approvalButtonContainer:'',
                                delButtonContainer:'',
                                exportButtonContainer: '',
                                
				init: function() {
                                        Mail.Question.View.DataGrid.operatorIdComboboxLabelContainer = $('#dataGridPanel #toolbar #operatorIdComboboxLabel');
					Mail.Question.View.DataGrid.operatorIdComboboxInputContainer = $('#dataGridPanel #toolbar #operatorIdComboboxInput');
                                        Mail.Question.View.DataGrid.areaNumCombogridLabelContainer = $('#dataGridPanel #toolbar #areaNumCombogridLabel');
					Mail.Question.View.DataGrid.areaNumCombogridInputContainer = $('#dataGridPanel #toolbar #areaNumCombogridInput');
                                        Mail.Question.View.DataGrid.stateComboboxLabelContainer = $('#dataGridPanel #toolbar #stateComboboxLabel');
					Mail.Question.View.DataGrid.stateComboboxInputContainer = $('#dataGridPanel #toolbar #stateComboboxInput');
                                        Mail.Question.View.DataGrid.questionTypeComboboxLabelContainer = $('#dataGridPanel #toolbar #questionTypeComboboxLabel');
					Mail.Question.View.DataGrid.questionTypeComboboxInputContainer = $('#dataGridPanel #toolbar #questionTypeComboboxInput');
                                        Mail.Question.View.DataGrid.accountValidateboxLabelContainer = $('#dataGridPanel #toolbar #accountValidateboxLabel');
					Mail.Question.View.DataGrid.accountValidateboxInputContainer = $('#dataGridPanel #toolbar #accountValidateboxInput');
                                        Mail.Question.View.DataGrid.roleNameValidateboxLabelContainer = $('#dataGridPanel #toolbar #roleNameValidateboxLabel');
					Mail.Question.View.DataGrid.roleNameValidateboxInputContainer = $('#dataGridPanel #toolbar #roleNameValidateboxInput');
                                        Mail.Question.View.DataGrid.startDatetimeboxLabelContainer = $('#dataGridPanel #toolbar #startDatetimeboxLabel');
					Mail.Question.View.DataGrid.startDatetimeboxInputContainer = $('#dataGridPanel #toolbar #startDatetimeboxInput');
					Mail.Question.View.DataGrid.endDatetimeboxLabelContainer = $('#dataGridPanel #toolbar #endDatetimeboxLabel');
					Mail.Question.View.DataGrid.endDatetimeboxInputContainer = $('#dataGridPanel #toolbar #endDatetimeboxInput');
                                        Mail.Question.View.DataGrid.searchButtonContainer = $('#dataGridPanel #toolbar #searchButton');
                                        Mail.Question.View.DataGrid.rewardButtonContainer = $('#dataGridPanel #toolbar #rewardButton');
                                        Mail.Question.View.DataGrid.approvalButtonContainer = $('#dataGridPanel #toolbar #approvalButton');
                                        Mail.Question.View.DataGrid.delButtonContainer = $('#dataGridPanel #toolbar #delButton');
                                        Mail.Question.View.DataGrid.exportButtonContainer = $('#dataGridPanel #toolbar #exportButton');
					Mail.Question.View.DataGrid.create();
                                        Mail.Question.View.DataGrid.showCurrSelectInfo();
				},
				
				create: function() {
					var width = $(document).width() - 40;
					var height = $(document).height() - 40;
					Mail.Question.View.dataGridPanelContainer.width(width);
					Mail.Question.View.dataGridPanelContainer.height(height);
					Mail.Question.View.dataGridPanelContainer.datagrid({
						idField: "id",
						toolbar: '#toolbar',
						columns: [[
							{
								checkbox: true,
							},
                                                        {
								field: 'id',
								title: mailQuestionViewDataGridColumnTitle1,
								width: 60,
							},
							{
								field: 'operatorId',
								title: mailQuestionViewDataGridColumnTitle2,
								width: 60,
							},
							{
								field: 'areaNum',
								title: mailQuestionViewDataGridColumnTitle3,
								width: 100,
							},
							{
								field: 'cid',
								title: mailQuestionViewDataGridColumnTitle4,
								width: 100,
							},
							{
								field: 'name',
								title: mailQuestionViewDataGridColumnTitle5,
								width: 100,
							},
                                                        {
								field: 'level',
								title: mailQuestionViewDataGridColumnTitle6,
								width: 100,
							},
							{
								field: 'amount',
								title: mailQuestionViewDataGridColumnTitle7,
								width: 80,
							},
                                                        {
								field: 'title',
								title: mailQuestionViewDataGridColumnTitle8,
								width: 100,
							},
							{
								field: 'desc',
								title: mailQuestionViewDataGridColumnTitle9,
								width: 80,
							},
							{
								field: 'sendTime',
								title: mailQuestionViewDataGridColumnTitle10,
								width: 200,
                                                                sortable: true,
							},
							{
								field: 'operator',
								title: mailQuestionViewDataGridColumnTitle11,
								width: 80,
							},
                                                        {
								field: 'status',
								title: mailQuestionViewDataGridColumnTitle12,
								width: 80,
                                                                formatter: function(value) {
									if(value === '1') {
										return mailQuestionOperationValue1;
									}
									else if(value === '2') {
										return mailQuestionOperationValue2;
									}
                                                                        else if(value === '3') {
										return mailQuestionOperationValue3;
									}
									else if(value === '4') {
										return mailQuestionOperationValue4;
									}
								}
							},
                                                        {
								field: 'reward',
								title: mailQuestionViewDataGridColumnTitle13,
								width: 80,
							},
                                                        {
								field: 'approvalUserId',
								title: mailQuestionViewDataGridColumnTitle14,
								width: 80,
							},
						]],
						singleSelect: true,
                                                rownumbers:true,
						loadFilter: Utils.dataGridLoadFilter,
						pagination: true,
						pageSize: 50,
						pageList: [50, 100, 150, 200],
					});
                                        Component.Combobox.OperatorId.create(
						Mail.Question.View.DataGrid.operatorIdComboboxLabelContainer,
						Mail.Question.View.DataGrid.operatorIdComboboxInputContainer
					);
                                        Component.Combogrid.AreaNum.create(
						Mail.Question.View.DataGrid.areaNumCombogridLabelContainer,
						Mail.Question.View.DataGrid.areaNumCombogridInputContainer
					);
                                        Component.Combobox.State.create(
						Mail.Question.View.DataGrid.stateComboboxLabelContainer,
						Mail.Question.View.DataGrid.stateComboboxInputContainer
					);
                                        Component.Combobox.QuestionType.create(
						Mail.Question.View.DataGrid.questionTypeComboboxLabelContainer,
						Mail.Question.View.DataGrid.questionTypeComboboxInputContainer
					);
                                        Component.Validatebox.AreaNum.create(
						Mail.Question.View.DataGrid.accountValidateboxLabelContainer,
						Mail.Question.View.DataGrid.accountValidateboxInputContainer
					);
                                        Component.Validatebox.RoleName.create(
						Mail.Question.View.DataGrid.roleNameValidateboxLabelContainer,
						Mail.Question.View.DataGrid.roleNameValidateboxInputContainer
					);
                                        Component.Datetimebox.Start.create(
						Mail.Question.View.DataGrid.startDatetimeboxLabelContainer,
						Mail.Question.View.DataGrid.startDatetimeboxInputContainer
					);
					Component.Datetimebox.End.create(
						Mail.Question.View.DataGrid.endDatetimeboxLabelContainer,
						Mail.Question.View.DataGrid.endDatetimeboxInputContainer
					);
                                        Mail.Question.View.DataGrid.searchButtonContainer.linkbutton({
						iconCls: 'icon-search',
						text: mailSendViewDataGridToolbarButtonText4,
					});
                                        Mail.Question.View.DataGrid.searchButtonContainer.bind(
						'click',
						Mail.Question.View.DataGrid.doSearch
					);
                                        Mail.Question.View.DataGrid.rewardButtonContainer.linkbutton({
						iconCls: 'icon-add',
						text: mailQuestionViewDataGridToolbarButtonText1,
					});
                                        Mail.Question.View.DataGrid.rewardButtonContainer.bind(
						'click',
						Mail.Question.RewardWindow.open
					);
                                        Mail.Question.View.DataGrid.approvalButtonContainer.linkbutton({
						iconCls: 'icon-edit',
						text: mailQuestionViewDataGridToolbarButtonText2,
					});
                                        Mail.Question.View.DataGrid.approvalButtonContainer.bind(
						'click',
						Mail.Question.View.DataGrid.doApproval
					);
                                        Mail.Question.View.DataGrid.delButtonContainer.linkbutton({
						iconCls: 'icon-del',
						text: mailQuestionViewDataGridToolbarButtonText3,
					});
                                        Mail.Question.View.DataGrid.delButtonContainer.bind(
						'click',
						Mail.Question.View.DataGrid.del
					);
                                        Mail.Question.View.DataGrid.exportButtonContainer.linkbutton({
						iconCls: 'icon-search',
						text: exportViewDataGridToolbarButtonText1,
					});
					Mail.Question.View.DataGrid.exportButtonContainer.bind(
						'click',
						Mail.Question.View.DataGrid.doExport
					);
				},
                                
				showCurrSelectInfo:function(){
                                        $.ajax({
                                                url: '/index.php/User/manage/getCurrSelectInfo',
                                        })
                                        .done(function(response) {
                                                if(response.data.operatorId!=false) {
                                                    Mail.Question.View.DataGrid.operatorIdComboboxInputContainer.combobox('select',response.data.operatorId);
                                                    Mail.Question.View.DataGrid.areaNumCombogridInputContainer.combogrid('setValue',response.data.gameAreaId);
                                                    Mail.Question.View.DataGrid.startDatetimeboxInputContainer.datetimebox('setValue',response.data.startDate);
                                                    Mail.Question.View.DataGrid.endDatetimeboxInputContainer.datetimebox('setValue',response.data.endDate);
                                                }
                                        })
                                }, 
                                
				load: function() {
					Mail.Question.View.dataGridPanelContainer.datagrid('reload');
				},
				
				getCheckedRows: function(allowMulti) {
					var allowMulti = arguments[0] ? arguments[0] : false;
					var checkedRow = Mail.Question.View.dataGridPanelContainer.datagrid('getChecked');
					
					if(Utils.dataGridValidateCheckedRow(checkedRow, allowMulti) === true) {
						return checkedRow;
					}
					else {
						return false;
					}
				},
                                doSearch: function() {
					Mail.Question.View.dataGridPanelContainer.datagrid({
						url: '/index.php/Mail/question/getListData',
						queryParams: {
							operatorId: Mail.Question.View.DataGrid.operatorIdComboboxInputContainer.combobox('getValue'),
                                                        gameAreaId: Mail.Question.View.DataGrid.areaNumCombogridInputContainer.combogrid('getValues').toString(),
                                                        state: Mail.Question.View.DataGrid.stateComboboxInputContainer.combobox('getValue'),
                                                        questionType: Mail.Question.View.DataGrid.questionTypeComboboxInputContainer.combobox('getValue'),
							account: Mail.Question.View.DataGrid.accountValidateboxInputContainer[0].value,
							roleName: Mail.Question.View.DataGrid.roleNameValidateboxInputContainer[0].value,
                                                        startDateTime: Mail.Question.View.DataGrid.startDatetimeboxInputContainer.datetimebox('getValue'),
							endDateTime: Mail.Question.View.DataGrid.endDatetimeboxInputContainer.datetimebox('getValue'),
						},
					});
				},
                                doExport: function() {
                                       // var url = "/index.php/Currency/first/export";
                                        var operatorId = Mail.Question.View.DataGrid.operatorIdComboboxInputContainer.combobox('getValue');
                                        var gameAreaId = Mail.Question.View.DataGrid.areaNumCombogridInputContainer.combogrid('getValues').toString();
                                        var state = Mail.Question.View.DataGrid.stateComboboxInputContainer.combobox('getValue');
                                        var questionType = Mail.Question.View.DataGrid.questionTypeComboboxInputContainer.combobox('getValue');
                                        var account = Mail.Question.View.DataGrid.accountValidateboxInputContainer[0].value;
                                        var roleName = Mail.Question.View.DataGrid.roleNameValidateboxInputContainer[0].value;
                                        var startDateTime = Mail.Question.View.DataGrid.startDatetimeboxInputContainer.datetimebox('getValue');
                                        var endDateTime =  Mail.Question.View.DataGrid.endDatetimeboxInputContainer.datetimebox('getValue');
                                       // $.ajax({
                                       //       url: url,
                                       //       data: {
                                       //             operatorId:operatorId,
                                       //             gameAreaId:gameAreaId,
                                       //             startDate:startDate,
                                       //             endDate:endDate,
                                       //       },
                                       //       success: function () {
                                                  var downUrl = "/index.php/Mail/question/export?operatorId="+ operatorId +"&gameAreaId="+gameAreaId+"&startDateTime="+startDateTime+"&endDateTime="+endDateTime+"&state="+state+"&questionType="+questionType+"&account="+account+"&roleName="+roleName
                                                  window.location = downUrl;
                                       //       }
                                       // });
				},

                                del: function() {
					var checkedRow = Mail.Question.View.DataGrid.getCheckedRows();
					
					if( !(checkedRow === false) ) {
						$.messager.confirm(
							mailSendConfirmDelWindowTitle,
							mailSendConfirmDelWindowContent,
							function(r) {
								if(r === true) {
									$.ajax({
										url: '/index.php/Mail/question/close',
										data: {
											id: checkedRow[0].id
										},
									})
									.done(function(response) {
										if(response.errorCode === 0) {
											$.messager.alert(messageWindowTitle, mailSendDelSuccessInfo, 'info');
										}
									});
								}
							}
						);
					}
				},
                                doApproval: function() {
                                        var checkedRow = Mail.Question.View.DataGrid.getCheckedRows();
                                        if(checkedRow != false) {
                                                $.messager.defaults = {ok: mailSendApprovalConfirmWindowOkMessage, cancel: mailSendApprovalConfirmWindowCancelMessage};
                                                $.messager.confirm(
                                                        'Confirm',
                                                        mailSendApprovalConfirmWindowMessage,
                                                        function(r){
                                                                $.messager.defaults = {ok: 'Ok', cancel: 'Cancel'};
                                                                
                                                                if(r === true) {
                                                                        $.ajax({
                                                                        url: '/index.php/Mail/question/approval',
                                                                        data: {
                                                                                id: checkedRow[0].id,
                                                                                state:checkedRow[0].state,
                                                                        }
                                                                        })
                                                                        .done(function(response) {
                                                                                if(response.errorCode === 0) {
                                                                                        $.messager.alert(messageWindowTitle, mailSendApprovalSuccessInfo, 'info');
                                                                                        Mail.Question.View.DataGrid.load();
                                                                                }
                                                                        })
                                                                }
                                                                
                                                                
                                                        }
                                                )				
                                        }
                                },
                        },
			
		},
		RewardWindow: {
			operatorIdComboboxLabelContainer: '',
			operatorIdComboboxInputContainer: '',
			areaNumCombogridLabelContainer: '',
			areaNumCombogridInputContainer: '',
			senderNameValidateboxLabelContainer: '',
			senderNameValidateboxInputContainer: '',
                        rewardComboboxLabelContainer: '',
                        rewardComboboxInputContainer: '',
			titleValidateboxLabelContainer: '',
			titleValidateboxInputContainer: '',
			contentTextboxLabelContainer: '',
			contentTextboxInputContainer: '',
			sendDatetimeboxLabelContainer: '',
			sendDatetimeboxInputContainer: '',
			submitButtonContainer: '',
			resetButtonContainer: '',
			
			init: function() {
				Mail.Question.RewardWindow.operatorIdComboboxLabelContainer = $('#rewardWindow #operatorIdComboboxLabel');
				Mail.Question.RewardWindow.operatorIdComboboxInputContainer = $('#rewardWindow #operatorIdComboboxInput');
				Mail.Question.RewardWindow.areaNumCombogridLabelContainer = $('#rewardWindow #areaNumCombogridLabel');
				Mail.Question.RewardWindow.areaNumCombogridInputContainer = $('#rewardWindow #areaNumCombogridInput');
				Mail.Question.RewardWindow.senderNameValidateboxLabelContainer = $('#rewardWindow #senderNameValidateboxLabel');
				Mail.Question.RewardWindow.senderNameValidateboxInputContainer = $('#rewardWindow #senderNameValidateboxInput');
                                Mail.Question.RewardWindow.rewardComboboxLabelContainer = $('#rewardWindow #rewardComboboxLabel');
				Mail.Question.RewardWindow.rewardComboboxInputContainer = $('#rewardWindow #rewardComboboxInput');
				Mail.Question.RewardWindow.titleValidateboxLabelContainer = $('#rewardWindow #titleValidateboxLabel');
				Mail.Question.RewardWindow.titleValidateboxInputContainer = $('#rewardWindow #titleValidateboxInput');
				Mail.Question.RewardWindow.contentTextboxLabelContainer = $('#rewardWindow #contentTextboxLabel');
				Mail.Question.RewardWindow.contentTextboxInputContainer = $('#rewardWindow #contentTextboxInput');
				Mail.Question.RewardWindow.sendDatetimeboxLabelContainer = $('#rewardWindow #sendDatetimeboxLabel');
				Mail.Question.RewardWindow.sendDatetimeboxInputContainer = $('#rewardWindow #sendDatetimeboxInput');
				Mail.Question.RewardWindow.submitButtonContainer = $('#rewardWindow #submitButton');
				Mail.Question.RewardWindow.resetButtonContainer = $('#rewardWindow #resetButton');
				Mail.Question.RewardWindow.create();
			},
			
				getCheckedRows: function(allowMulti) {
					var allowMulti = arguments[0] ? arguments[0] : false;
					var checkedRow = Mail.Question.RewardWindow.itemDataGridContainer.datagrid('getChecked');
					
					if(Utils.dataGridValidateCheckedRow(checkedRow, allowMulti) === true) {
						return checkedRow;
					}
					else {
						return false;
					}
				},
				
				reset: function() {
					Mail.Question.RewardWindow.itemDataGridContainer.datagrid(
						'loadData',
						[]
					);
				},
			
			
			create: function() {
				Mail.Question.rewardWindowContainer.window({
					title: mailSendApplyWindowTitle,
					width: 533,
					height: 500,
					collapsible: false,
					minimizable: false,
					maximizable: false,
					closable: true,
					closed: true,
					modal: true,
				});
				Component.Combobox.OperatorId.create(
					Mail.Question.RewardWindow.operatorIdComboboxLabelContainer,
					Mail.Question.RewardWindow.operatorIdComboboxInputContainer
				);
				Component.Combogrid.AreaNum.create(
					Mail.Question.RewardWindow.areaNumCombogridLabelContainer,
					Mail.Question.RewardWindow.areaNumCombogridInputContainer
				);
				Component.Validatebox.SenderName.create(
					Mail.Question.RewardWindow.senderNameValidateboxLabelContainer,
					Mail.Question.RewardWindow.senderNameValidateboxInputContainer
				);
                                Component.Combobox.Reward.create(
					Mail.Question.RewardWindow.rewardComboboxLabelContainer,
					Mail.Question.RewardWindow.rewardComboboxInputContainer
				);
				Component.Validatebox.Title.create(
					Mail.Question.RewardWindow.titleValidateboxLabelContainer,
					Mail.Question.RewardWindow.titleValidateboxInputContainer
				);
				Component.Textbox.Content.create(
					Mail.Question.RewardWindow.contentTextboxLabelContainer
				);
				Component.Datetimebox.Send.create(
					Mail.Question.RewardWindow.sendDatetimeboxLabelContainer,
					Mail.Question.RewardWindow.sendDatetimeboxInputContainer
				);
				Mail.Question.RewardWindow.submitButtonContainer.linkbutton({
					iconCls: 'icon-ok',
					text: mailSendApplyWindowSubmitButtonText,
				});
				Mail.Question.RewardWindow.submitButtonContainer.bind(
					'click',
					Mail.Question.RewardWindow.doSubmit
				);
				Mail.Question.RewardWindow.resetButtonContainer.linkbutton({
					iconCls: 'icon-undo',
					text: mailSendApplyWindowResetButtonText,
				})
				Mail.Question.RewardWindow.resetButtonContainer.bind(
					'click',
					Mail.Question.RewardWindow.doReset
				);
			},
			
			open: function() {
                                var checkedRow = Mail.Question.View.DataGrid.getCheckedRows();
				
				if( checkedRow != false ) {
					Mail.Question.RewardWindow.reset();
					Mail.Question.rewardWindowContainer.window('open');
                                        Mail.Question.RewardWindow.contentTextboxInputContainer[0].value='您好，你的问题我们已经知晓，请您耐心等待回复';
                                        Mail.Question.RewardWindow.titleValidateboxInputContainer[0].value='尊敬的玩家：';
				}
			},
			
			close: function() {
				Mail.Question.rewardWindowContainer.window('close');
			},
			
			doSubmit: function() {
                                var checkedRow = Mail.Question.View.DataGrid.getCheckedRows();
                                var operatorId = Mail.Question.RewardWindow.operatorIdComboboxInputContainer.combobox('getValue');
				var gameAreaId = Mail.Question.RewardWindow.areaNumCombogridInputContainer.combogrid('getValue');
				var senderName = Mail.Question.RewardWindow.senderNameValidateboxInputContainer[0].value;
				var title = Mail.Question.RewardWindow.titleValidateboxInputContainer[0].value;
				var content = Mail.Question.RewardWindow.contentTextboxInputContainer[0].value;
				var sendDatetime = Mail.Question.RewardWindow.sendDatetimeboxInputContainer.datetimebox('getValue');
				var reward = Mail.Question.RewardWindow.rewardComboboxInputContainer.combobox('getValue');
				
				
				
				$.ajax({
					url: '/index.php/Mail/question/reward',
					data: {
                                                operatorId: operatorId,
						gameAreaId: gameAreaId,
						senderName: senderName,
						title: title,
                                                id:checkedRow[0].id,
                                                roleName:checkedRow[0].name,
						content: content,
						sendDatetime: sendDatetime,
						reward: reward,
					}
				})
				.done(function(response) {
					if(response.errorCode === 0) {
						$.messager.alert(messageRewardWindowTitle, mailSendApplyWindowSubmitSuccessInfo1, 'info');
						Mail.Question.RewardWindow.close();
						Mail.Question.View.DataGrid.load();
					}
				})
			},
			
			doReset: function() {
				Mail.Question.RewardWindow.reset();
			},
			
			reset: function() {
                Mail.Question.RewardWindow.operatorIdComboboxInputContainer.combobox('reset');
				Mail.Question.RewardWindow.areaNumCombogridInputContainer.combogrid('reset');
				Mail.Question.RewardWindow.senderNameValidateboxInputContainer[0].value = '';
				Mail.Question.RewardWindow.titleValidateboxInputContainer[0].value = '';
				Mail.Question.RewardWindow.contentTextboxInputContainer[0].value = '';
				Mail.Question.RewardWindow.sendDatetimeboxInputContainer.datetimebox('reset');
                Mail.Question.RewardWindow.rewardComboboxInputContainer.combobox('reset');
			},
		},
    }
}