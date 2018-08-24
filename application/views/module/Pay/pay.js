var Pay = {
	Detail: {
		init: function() {
			Language.getCurrLanguage();
			Utils.loadJavascriptFile('/application/views/libraries/component/' + language + '.js');
			Utils.loadJavascriptFile('/application/views/libraries/utils/' + language + '.js');
			Utils.loadJavascriptFile('/application/views/module/Pay/' + language + '.js');
			Utils.initAjax();
			
			Pay.Detail.View.init();
		},
		
		View: {
			dataGridPanelContainer: '',
			
			init: function() {
				Pay.Detail.View.dataGridPanelContainer = $('#dataGridPanel #dataGrid');
				Pay.Detail.View.DataGrid.init();
			},
			
			DataGrid: {
				operatorIdComboboxLabelContainer: '',
				operatorIdComboboxInputContainer: '',
                areaNumCombogridLabelContainer: '',
                areaNumCombogridInputContainer: '',
				accountValidateboxLabelContainer: '',
				accountValidateboxInputContainer: '',
				roleNameValidateboxLabelContainer: '',
				roleNameValidateboxInputContainer: '',
                orderIdValidateboxLabelContainer: '',
                orderIdValidateboxInputContainer: '',
				startDatetimeboxLabelContainer: '',
				startDatetimeboxInputContainer: '',
				endDatetimeboxLabelContainer: '',
				endDatetimeboxInputContainer: '',
				searchButtonContainer: '',
                exportButtonContainer:'',

				init: function() {
					Pay.Detail.View.DataGrid.operatorIdComboboxLabelContainer = $('#dataGridPanel #toolbar #operatorIdComboboxLabel');
					Pay.Detail.View.DataGrid.operatorIdComboboxInputContainer = $('#dataGridPanel #toolbar #operatorIdComboboxInput');
                                        Pay.Detail.View.DataGrid.areaNumCombogridLabelContainer = $('#dataGridPanel #toolbar #areaNumCombogridLabel');
					Pay.Detail.View.DataGrid.areaNumCombogridInputContainer = $('#dataGridPanel #toolbar #areaNumCombogridInput');
					Pay.Detail.View.DataGrid.accountValidateboxLabelContainer = $('#dataGridPanel #toolbar #accountValidateboxLabel');
					Pay.Detail.View.DataGrid.accountValidateboxInputContainer = $('#dataGridPanel #toolbar #accountValidateboxInput');
					Pay.Detail.View.DataGrid.roleNameValidateboxLabelContainer = $('#dataGridPanel #toolbar #roleNameValidateboxLabel');
					Pay.Detail.View.DataGrid.roleNameValidateboxInputContainer = $('#dataGridPanel #toolbar #roleNameValidateboxInput');
                                        Pay.Detail.View.DataGrid.orderIdValidateboxLabelContainer = $('#dataGridPanel #toolbar #orderIdValidateboxLabel');
					Pay.Detail.View.DataGrid.orderIdValidateboxInputContainer = $('#dataGridPanel #toolbar #orderIdValidateboxInput');
					Pay.Detail.View.DataGrid.startDatetimeboxLabelContainer = $('#dataGridPanel #toolbar #startDatetimeboxLabel');
					Pay.Detail.View.DataGrid.startDatetimeboxInputContainer = $('#dataGridPanel #toolbar #startDatetimeboxInput');
					Pay.Detail.View.DataGrid.endDatetimeboxLabelContainer = $('#dataGridPanel #toolbar #endDatetimeboxLabel');
					Pay.Detail.View.DataGrid.endDatetimeboxInputContainer = $('#dataGridPanel #toolbar #endDatetimeboxInput');
					Pay.Detail.View.DataGrid.searchButtonContainer = $('#dataGridPanel #toolbar #searchButton');
                                        Pay.Detail.View.DataGrid.exportButtonContainer = $('#dataGridPanel #toolbar #exportButton');
					Pay.Detail.View.DataGrid.create();
                                        Pay.Detail.View.DataGrid.showCurrSelectInfo();
				},
				
				create: function() {
					var width = $(document).width() - 40;
					var height = $(document).height() - 40;
					Pay.Detail.View.dataGridPanelContainer.width(width);
					Pay.Detail.View.dataGridPanelContainer.height(height);
					Pay.Detail.View.dataGridPanelContainer.datagrid({
						fitColumns: false,
						toolbar: '#toolbar',
						columns: [[
                                                        {
								field: 'cid',
								title: payDetailViewDataGridColumnTitle1,
								width: 300
							},
                                                        {
								field: 'name',
								title: payDetailViewDataGridColumnTitle2,
								width: 300
							},
							{
								field: 'orderId',
								title: payDetailViewDataGridColumnTitle3,
								width: 300
							},
							{
								field: 'gold',
								title: payDetailViewDataGridColumnTitle4,
								width: 100,
                                                                sortable: true,
							},
							{
								field: 'amount',
								title: payDetailViewDataGridColumnTitle5,
								width: 100,
                                                                sortable: true,
							},
                                                        {
								field: 'money',
								title: payDetailViewDataGridColumnTitle8,
								width: 100,
                                                                sortable: true,
							},
                                                        {
								field: 'pf',
								title: payDetailViewDataGridColumnTitle9,
								width: 100,
                                                                sortable: true,
							},
							{
								field: 'time',
								title: payDetailViewDataGridColumnTitle7,
								width: 150,
							},
						]],
						loadFilter: Utils.dataGridLoadFilter,
						pagination: true,
                                                showFooter:true,  
						pageSize: 50,
						pageList: [50, 100, 150, 200],
					});
					Component.Combobox.OperatorId.create(
						Pay.Detail.View.DataGrid.operatorIdComboboxLabelContainer,
						Pay.Detail.View.DataGrid.operatorIdComboboxInputContainer
					);
                                        Component.Combogrid.AreaNum.create(
						Pay.Detail.View.DataGrid.areaNumCombogridLabelContainer,
						Pay.Detail.View.DataGrid.areaNumCombogridInputContainer
					);
					Component.Validatebox.Account.create(
						Pay.Detail.View.DataGrid.accountValidateboxLabelContainer,
						Pay.Detail.View.DataGrid.accountValidateboxInputContainer 
					);
					Component.Validatebox.RoleName.create(
						Pay.Detail.View.DataGrid.roleNameValidateboxLabelContainer,
						Pay.Detail.View.DataGrid.roleNameValidateboxInputContainer
					);
                                        Component.Validatebox.OrderId.create(
						Pay.Detail.View.DataGrid.orderIdValidateboxLabelContainer,
						Pay.Detail.View.DataGrid.orderIdValidateboxInputContainer
					);
					Component.Datebox.Start.create(
						Pay.Detail.View.DataGrid.startDatetimeboxLabelContainer,
						Pay.Detail.View.DataGrid.startDatetimeboxInputContainer
					);
					Component.Datebox.End.create(
						Pay.Detail.View.DataGrid.endDatetimeboxLabelContainer,
						Pay.Detail.View.DataGrid.endDatetimeboxInputContainer
					);
					Pay.Detail.View.DataGrid.searchButtonContainer.linkbutton({
						iconCls: 'icon-search',
						text: payDetailViewDataGridToolbarButtonText1,
					});
					Pay.Detail.View.DataGrid.searchButtonContainer.bind(
						'click',
						Pay.Detail.View.DataGrid.doSearch
					);
                                        Pay.Detail.View.DataGrid.exportButtonContainer.linkbutton({
						iconCls: 'icon-search',
						text: exportViewDataGridToolbarButtonText1,
					});
					Pay.Detail.View.DataGrid.exportButtonContainer.bind(
						'click',
						Pay.Detail.View.DataGrid.doExport
					);
				},
				
				doSearch: function() {
					Pay.Detail.View.dataGridPanelContainer.datagrid({
						url: '/index.php/Pay/detail/getListData',
						queryParams: {
							operatorId:  Pay.Detail.View.DataGrid.operatorIdComboboxInputContainer.combobox('getValue'),
                                                        gameAreaId:  Pay.Detail.View.DataGrid.areaNumCombogridInputContainer.combogrid('getValue'),
							account: Pay.Detail.View.DataGrid.accountValidateboxInputContainer[0].value,
							roleName: Pay.Detail.View.DataGrid.roleNameValidateboxInputContainer[0].value,
                                                        orderId: Pay.Detail.View.DataGrid.orderIdValidateboxInputContainer[0].value,
							startDateTime: Pay.Detail.View.DataGrid.startDatetimeboxInputContainer.datetimebox('getValue'),
							endDateTime: Pay.Detail.View.DataGrid.endDatetimeboxInputContainer.datetimebox('getValue'),
						}
					});
				},
                                showCurrSelectInfo:function(){
                                        $.ajax({
                                                url: '/index.php/User/manage/getCurrSelectInfo',
                                        })
                                        .done(function(response) {
                                                if(response.data.operatorId!=false) {
                                                    Pay.Detail.View.DataGrid.operatorIdComboboxInputContainer.combobox('select',response.data.operatorId);
                                                    Pay.Detail.View.DataGrid.areaNumCombogridInputContainer.combogrid('setValue',response.data.gameAreaId);
                                                    Pay.Detail.View.DataGrid.startDatetimeboxInputContainer.datetimebox('setValue',response.data.startDate);
                                                    Pay.Detail.View.DataGrid.endDatetimeboxInputContainer.datetimebox('setValue',response.data.endDate);
                                                }
                                        })
                                }, 
                                doExport: function() {

                                        var operatorId = Pay.Detail.View.DataGrid.operatorIdComboboxInputContainer.combobox('getValue');
                                        var gameAreaId = Pay.Detail.View.DataGrid.areaNumCombogridInputContainer.combogrid('getValues').toString();
                                        var account = Pay.Detail.View.DataGrid.accountValidateboxInputContainer[0].value;
                                        var roleName = Pay.Detail.View.DataGrid.roleNameValidateboxInputContainer[0].value;
                                        var orderId = Pay.Detail.View.DataGrid.orderIdValidateboxInputContainer[0].value;
                                        var startDateTime = Pay.Detail.View.DataGrid.startDatetimeboxInputContainer.datebox('getValue');
                                        var endDateTime =  Pay.Detail.View.DataGrid.endDatetimeboxInputContainer.datebox('getValue');

                                                  var downUrl = "/index.php/Pay/detail/export?operatorId="+ operatorId +"&gameAreaId="+gameAreaId+"&account="+account+"&roleName="+roleName+"&orderId="+orderId+"&startDateTime="+startDateTime+"&endDateTime="+endDateTime
                                                  window.location = downUrl;

				},
			},
		},
	},
	
	Summary: {
		init: function() {
			Language.getCurrLanguage();
			Utils.loadJavascriptFile('/application/views/libraries/component/' + language + '.js');
			Utils.loadJavascriptFile('/application/views/libraries/utils/' + language + '.js');
			Utils.loadJavascriptFile('/application/views/module/Pay/' + language + '.js');
			Utils.initAjax();
			
			Pay.Summary.View.init();
		},
		
		View: {
			dataGridPanelContainer: '',
			
			init: function() {
				Pay.Summary.View.dataGridPanelContainer = $('#dataGridPanel #dataGrid');
				Pay.Summary.View.DataGrid.init();
			},
			
			DataGrid: {
				gameAreaCombogridLabelContainer: '',
				gameAreaCombogridInputContainer: '',
				startDateboxLabelContainer: '',
				startDateboxInputContainer: '',
				endDateboxLabelContainer: '',
				endDateboxInputContainer: '',
				paySummaryTypeLabelContainer: '',
				paySummaryTypeInputContainer: '',
				searchButtonContainer: '',

				init: function() {
					Pay.Summary.View.DataGrid.gameAreaCombogridLabelContainer = $('#dataGridPanel #toolbar #gameAreaCombogridLabel');
					Pay.Summary.View.DataGrid.gameAreaCombogridInputContainer = $('#dataGridPanel #toolbar #gameAreaCombogridInput');
					Pay.Summary.View.DataGrid.startDateboxLabelContainer = $('#dataGridPanel #toolbar #startDateboxLabel');
					Pay.Summary.View.DataGrid.startDateboxInputContainer = $('#dataGridPanel #toolbar #startDateboxInput');
					Pay.Summary.View.DataGrid.endDateboxLabelContainer = $('#dataGridPanel #toolbar #endDateboxLabel');
					Pay.Summary.View.DataGrid.endDateboxInputContainer = $('#dataGridPanel #toolbar #endDateboxInput');
					Pay.Summary.View.DataGrid.paySummaryTypeLabelContainer = $('#dataGridPanel #toolbar #paySummaryTypeLabel');
					Pay.Summary.View.DataGrid.paySummaryTypeInputContainer = $('#dataGridPanel #toolbar #paySummaryTypeInput');
					Pay.Summary.View.DataGrid.searchButtonContainer = $('#dataGridPanel #toolbar #searchButton');
					Pay.Summary.View.DataGrid.create();
				},
				
				create: function() {
					var width = $(document).width() - 40;
					var height = $(document).height() - 40;
					Pay.Summary.View.dataGridPanelContainer.width(width);
					Pay.Summary.View.dataGridPanelContainer.height(height);
					Pay.Summary.View.dataGridPanelContainer.datagrid({
						fitColumns: false,
						toolbar: '#toolbar',
						columns: [[
							{
								field: 'date',
								title: paySummaryViewDataGridColumnTitle1,
								width: 150,
							},
							{
								field: 'operatorName',
								title: paySummaryViewDataGridColumnTitle2,
								width: 80,
								hidden: true,
							},
							// {
							// 	field: 'areaNum',
							// 	title: paySummaryViewDataGridColumnTitle3,
							// 	width: 60,
							// },
							{
								field: 'money',
								title: paySummaryViewDataGridColumnTitle4,
								width: 80,
								formatter: function(value) {
									return value / 100;
								}
							},
						]],
						loadFilter: Utils.dataGridLoadFilter,
						onLoadSuccess: function() {
							var summaryTypeId = Pay.Summary.View.DataGrid.paySummaryTypeInputContainer.combobox('getValue');
							
							switch(summaryTypeId) {
								case '1':
									Pay.Summary.View.dataGridPanelContainer.datagrid('hideColumn', 'operatorName');
									Pay.Summary.View.dataGridPanelContainer.datagrid('showColumn', 'date');
									Pay.Summary.View.Chart.Line.create();
									break;
									
								case '2':
									Pay.Summary.View.dataGridPanelContainer.datagrid('showColumn', 'operatorName');
									Pay.Summary.View.dataGridPanelContainer.datagrid('hideColumn', 'date');
									Pay.Summary.View.Chart.Pie.create();
									break;
							}
						}
					});
					Component.Combogrid.GameArea.create(
						Pay.Summary.View.DataGrid.gameAreaCombogridLabelContainer,
						Pay.Summary.View.DataGrid.gameAreaCombogridInputContainer,
						true
					);
					Component.Datebox.Start.create(
						Pay.Summary.View.DataGrid.startDateboxLabelContainer,
						Pay.Summary.View.DataGrid.startDateboxInputContainer
					);
					Component.Datebox.End.create(
						Pay.Summary.View.DataGrid.endDateboxLabelContainer,
						Pay.Summary.View.DataGrid.endDateboxInputContainer
					);
					Component.Combobox.PaySummaryType.create(
						Pay.Summary.View.DataGrid.paySummaryTypeLabelContainer,
						Pay.Summary.View.DataGrid.paySummaryTypeInputContainer
					);
					Pay.Summary.View.DataGrid.searchButtonContainer.linkbutton({
						iconCls: 'icon-search',
						text: paySummaryViewDataGridToolbarButtonText1,
					});
					Pay.Summary.View.DataGrid.searchButtonContainer.bind(
						'click',
						Pay.Summary.View.DataGrid.doSearch
					);
				},
				
				doSearch: function() {
					Pay.Summary.View.dataGridPanelContainer.datagrid({
						url: '/index.php/Pay/summary/getListData',
						queryParams: {
							gameAreaIdString: Pay.Summary.View.DataGrid.gameAreaCombogridInputContainer.combogrid('getValues').toString(),
							startDate: Pay.Summary.View.DataGrid.startDateboxInputContainer.datetimebox('getValue'),
							endDate: Pay.Summary.View.DataGrid.endDateboxInputContainer.datetimebox('getValue'),
							paySummaryTypeId: Pay.Summary.View.DataGrid.paySummaryTypeInputContainer.combobox('getValue'),
						},
					})
				},
			},
			
			Chart: {
				Line: {
					create: function() {
						var data = Pay.Summary.View.dataGridPanelContainer.datagrid('getData');
						var chartData = [];
						
						for(index = 0; index < data.rows.length; index++) {
							tmp = [];
							tmp.push(data.rows[index].date);
							tmp.push(Number(data.rows[index].money) / 100);
							chartData.push(tmp);
						}
						
						var data = [chartData];
						var options = {
							axes: {
								xaxis: {
									numberTicks: chartData.length,
									renderer: $.jqplot.DateAxisRenderer,
								},
								yaxis: {
									min: 0
								}
							},
							highlighter: {
								show: true,
								lineWidthAdjust: 2.5,
								sizeAdjust: 5,
								showTooltip: true,
								tooltipLocation: 'nw',
								useAxesFormatters: false,
								tooltipAxes: 'y'
							}
						}
						
						var chart = $.jqplot('chart', data, options);
						chart.redraw();
					}
				},
				
				Pie: {
					create: function() {
						var data = Pay.Summary.View.dataGridPanelContainer.datagrid('getData');
						var chartData = [];
						
						for(index = 0; index < data.rows.length; index++) {
							tmp = [];
							tmp.push(data.rows[index].operatorName);
							tmp.push(Number(data.rows[index].money) / 100);
							chartData.push(tmp);
						}
						
						var data = [chartData];
						var options = {
							seriesDefaults: {
								renderer: jQuery.jqplot.PieRenderer,
								rendererOptions: {
									showDataLabels: true,
								},
								
							},
							legend: {
								show:true,
								location: 'e'
							}
						}
						
						var chart = $.jqplot('chart', data, options);
						chart.redraw();
					}
				}
			},
		},
	},
	
	Apply: {
		applyWindowContainer: '',
		
		init: function() {
			Language.getCurrLanguage();
			Utils.loadJavascriptFile('/application/views/libraries/component/' + language + '.js');
			Utils.loadJavascriptFile('/application/views/libraries/utils/' + language + '.js');
			Utils.loadJavascriptFile('/application/views/module/Pay/' + language + '.js');
			Utils.initAjax();
                        
			Pay.Apply.applyWindowContainer= $('#applyWindow');
			Pay.Apply.ApplyWindow.init();
			Pay.Apply.View.init();
		},
		
		View: {
			dataGridPanelContainer: '',
			
			init: function() {
				Pay.Apply.View.dataGridPanelContainer = $('#dataGridPanel #dataGrid');
				Pay.Apply.View.DataGrid.init();
			},
				
			DataGrid: {
                                operatorIdComboboxLabelContainer: '',
                                operatorIdComboboxInputContainer: '',
                                areaNumCombogridLabelContainer: '',
                                areaNumCombogridInputContainer: '',
                                searchButtonContainer: '',
                                applyButtonContainer: '',
                                approvalButtonContainer: '',
                                
                                
				init: function() {
                                        Pay.Apply.View.DataGrid.operatorIdComboboxLabelContainer = $('#dataGridPanel #toolbar #operatorIdComboboxLabel');
					Pay.Apply.View.DataGrid.operatorIdComboboxInputContainer = $('#dataGridPanel #toolbar #operatorIdComboboxInput');
                                        Pay.Apply.View.DataGrid.areaNumCombogridLabelContainer = $('#dataGridPanel #toolbar #areaNumCombogridLabel');
					Pay.Apply.View.DataGrid.areaNumCombogridInputContainer = $('#dataGridPanel #toolbar #areaNumCombogridInput');
                                        Pay.Apply.View.DataGrid.searchButtonContainer = $('#dataGridPanel #toolbar #searchButton');
                                        Pay.Apply.View.DataGrid.applyButtonContainer = $('#dataGridPanel #toolbar #applyButton');
					Pay.Apply.View.DataGrid.approvalButtonContainer = $('#dataGridPanel #toolbar #approvalButton');
					Pay.Apply.View.DataGrid.create();	
                                        Pay.Apply.View.DataGrid.showCurrSelectInfo();
				},
					
				create: function() {
					var width = $(document).width() - 40;
					var height = $(document).height() - 40;
					Pay.Apply.View.dataGridPanelContainer.width(width);
					Pay.Apply.View.dataGridPanelContainer.height(height);
					Pay.Apply.View.dataGridPanelContainer.datagrid({
						idField: "applyId",
						singleSelect: true,
						fitColumns: false,
						url: '/index.php/Pay/apply/getListData',
						toolbar: '#toolbar',
						columns: [[
							{
								checkbox: true,
							},
                                                        {
								field: 'applyId',
								title: payApplyViewDataGridColumnTitle1,
								width: 80,
							},
							{
								field: 'operatorName',
								title: payApplyViewDataGridColumnTitle2,
								width: 80,
							},
							{
								field: 'areaNum',
								title: payApplyViewDataGridColumnTitle3,
								width: 60,
							},
							{
								field: 'cid',
								title: payApplyViewDataGridColumnTitle4,
								width: 100,
							},
							{
								field: 'roleName',
								title: payApplyViewDataGridColumnTitle5,
								width: 100,
							},
							{
								field: 'money',
								title: payApplyViewDataGridColumnTitle6,
								width: 80,
							},
                                                        {
								field: 'days',
								title: payApplyViewDataGridColumnTitle7,
								width: 100,
							},
                                                        {
								field: 'applyDatetime',
								title: payApplyViewDataGridColumnTitle8,
								width: 150,
							},
							{
								field: 'applyUserName',
								title: payApplyViewDataGridColumnTitle9,
								width: 100,
							},
                                                        {
								field: 'approvalUserName',
								title: payApplyViewDataGridColumnTitle10,
								width: 100,
							},
							{
								field: 'status',
								title: payApplyViewDataGridColumnTitle12,
								width: 80,
								formatter: function(value) {
									switch(value) {
										case '1' :
											return payApplyStatus0;
											break;
											
										case '2' :
											return payApplyStatus1;
											break;
											
										case '3' :
											return payApplyStatus2;
											break;
											
										
										default:
											return value;
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
                                                Pay.Apply.View.DataGrid.operatorIdComboboxLabelContainer,
                                                Pay.Apply.View.DataGrid.operatorIdComboboxInputContainer
                                        );
                                        Component.Combogrid.AreaNum.create(
                                                Pay.Apply.View.DataGrid.areaNumCombogridLabelContainer,
                                                Pay.Apply.View.DataGrid.areaNumCombogridInputContainer
                                        );
                                        Pay.Apply.View.DataGrid.searchButtonContainer.linkbutton({
						iconCls: 'icon-search',
						text: paySummaryViewDataGridToolbarButtonText1,
					});
                                        Pay.Apply.View.DataGrid.searchButtonContainer.bind(
						'click',
						Pay.Apply.View.DataGrid.doSearch
					);
                                        Pay.Apply.View.DataGrid.applyButtonContainer.linkbutton({
						iconCls: 'icon-add',
						text: payApplyViewDataGridToolbarButtonText1,
					});
                                        Pay.Apply.View.DataGrid.applyButtonContainer.bind(
						'click',
						Pay.Apply.ApplyWindow.open
					);
                                        Pay.Apply.View.DataGrid.approvalButtonContainer.linkbutton({
						iconCls: 'icon-approval',
						text: payApplyViewDataGridToolbarButtonText2,
					});
                                        Pay.Apply.View.DataGrid.approvalButtonContainer.bind(
						'click',
						Pay.Apply.View.doApproval
					);
				},
				
				load: function() {
					Pay.Apply.View.dataGridPanelContainer.datagrid('reload');
				},
				doSearch: function() {
					Pay.Apply.View.dataGridPanelContainer.datagrid({
						url: '/index.php/Pay/apply/getListData',
						queryParams: {
							operatorId: Pay.Apply.View.DataGrid.operatorIdComboboxInputContainer.combobox('getValue'),
                                                        gameAreaId: Pay.Apply.View.DataGrid.areaNumCombogridInputContainer.combogrid('getValues').toString(),
						},
					});
				},
                                showCurrSelectInfo:function(){
                                        $.ajax({
                                                url: '/index.php/User/manage/getCurrSelectInfo',
                                        })
                                        .done(function(response) {
                                                if(response.data.operatorId!=false) {
                                                    Pay.Apply.View.DataGrid.operatorIdComboboxInputContainer.combobox('select',response.data.operatorId);
                                                    Pay.Apply.View.DataGrid.areaNumCombogridInputContainer.combogrid('setValue',response.data.gameAreaId);
                                                }
                                        })
                                }, 
				getCheckedRows: function(allowMulti) {
					var allowMulti = arguments[0] ? arguments[0] : false;
					var checkedRow = Pay.Apply.View.dataGridPanelContainer.datagrid('getChecked');
					
					if(Utils.dataGridValidateCheckedRow(checkedRow, allowMulti) === true) {
						return checkedRow;
					}
					else {
						return false;
					}
				},
			},
			
			doApproval: function() {
				var checkedRow = Pay.Apply.View.DataGrid.getCheckedRows();
				
				if(checkedRow != false) {
					$.messager.defaults = {ok: payApplyApprovalConfirmWindowOkMessage, cancel: payApplyApprovalConfirmWindowCancelMessage};
					$.messager.confirm(
						'Confirm',
						payApplyApprovalConfirmWindowMessage,
						function(r) {
							$.messager.defaults = {ok: 'Ok', cancel: 'Cancel'};
							
							if(r) {
								status = 2;
							}
							else {
								status = 1;
							}
							
							$.ajax({
								url: '/index.php/Pay/apply/approval',
								data: {
									applyId: checkedRow[0].applyId,
									status: status,
								}
							})
							.done(function(response) {
								if(response.errorCode === 0) {
									$.messager.alert(messageWindowTitle, payApplyApprovalSuccessInfo, 'info');
									Pay.Apply.View.DataGrid.load();
								}
							});
						}
					);
				}
			},
		},
		
		ApplyWindow: {
			operatorIdComboboxLabelContainer: '',
                        operatorIdComboboxInputContainer: '',
                        areaNumCombogridLabelContainer: '',
                        areaNumCombogridInputContainer: '',
			roleNameLabelContainer: '',
			roleNameInputContainer: '',
			moneyLabelContainer: '',
			moneyInputContainer: '',
			dayLabelContainer: '',
                        dayInputContainer: '',
			submitButtonContainer: '',
			resetButtonContainer: '',
			
			init: function() {
				Pay.Apply.ApplyWindow.operatorIdComboboxLabelContainer = $('#applyWindow #operatorIdComboboxLabel');
				Pay.Apply.ApplyWindow.operatorIdComboboxInputContainer = $('#applyWindow #operatorIdComboboxInput');
                                Pay.Apply.ApplyWindow.areaNumCombogridLabelContainer = $('#applyWindow #areaNumCombogridLabel');
				Pay.Apply.ApplyWindow.areaNumCombogridInputContainer = $('#applyWindow #areaNumCombogridInput');
				Pay.Apply.ApplyWindow.roleNameLabelContainer = $('#applyWindow #roleNameLabel');
				Pay.Apply.ApplyWindow.roleNameInputContainer = $('#applyWindow #roleNameInput');
				Pay.Apply.ApplyWindow.moneyLabelContainer = $('#applyWindow #moneyLabel');
				Pay.Apply.ApplyWindow.moneyInputContainer = $('#applyWindow #moneyInput');
				Pay.Apply.ApplyWindow.dayLabelContainer = $('#applyWindow #dayLabel');
				Pay.Apply.ApplyWindow.dayInputContainer = $('#applyWindow #dayInput');
				Pay.Apply.ApplyWindow.submitButtonContainer = $('#applyWindow #submitButton');
				Pay.Apply.ApplyWindow.resetButtonContainer = $('#applyWindow #resetButton');
				
				Pay.Apply.ApplyWindow.create();
			},
			
			create: function() {
				Pay.Apply.applyWindowContainer.window({
					title: payApplyApplyWindowTitle,
					collapsible: false,
					minimizable: false,
					maximizable: false,
					closable: true,
					closed: true,
					modal: true,
				});
				Component.Combobox.OperatorId.create(
					Pay.Apply.ApplyWindow.operatorIdComboboxLabelContainer,
					Pay.Apply.ApplyWindow.operatorIdComboboxInputContainer
				);
				Component.Combogrid.AreaNum.create(
					Pay.Apply.ApplyWindow.areaNumCombogridLabelContainer,
					Pay.Apply.ApplyWindow.areaNumCombogridInputContainer
				);
				Component.Validatebox.RoleName.create(
					Pay.Apply.ApplyWindow.roleNameLabelContainer,
					Pay.Apply.ApplyWindow.roleNameInputContainer
				);
				Component.Numberbox.Money.create(
					Pay.Apply.ApplyWindow.moneyLabelContainer,
					Pay.Apply.ApplyWindow.moneyInputContainer
				);
				Component.Numberbox.Day.create(
					Pay.Apply.ApplyWindow.dayLabelContainer,
					Pay.Apply.ApplyWindow.dayInputContainer
				);
				
				Pay.Apply.ApplyWindow.submitButtonContainer.linkbutton({
					iconCls: 'icon-ok',
					text: payApplyApplyWindowSubmitButtonText,
				});
				Pay.Apply.ApplyWindow.submitButtonContainer.bind(
					'click',
					Pay.Apply.ApplyWindow.doSubmit
				);
				Pay.Apply.ApplyWindow.resetButtonContainer.linkbutton({
					iconCls: 'icon-undo',
					text: payApplyApplyWindowResetButtonText,
				});
				Pay.Apply.ApplyWindow.resetButtonContainer.bind(
					'click',
					Pay.Apply.ApplyWindow.doReset
				);
			},
			
			open: function() {
				Pay.Apply.ApplyWindow.doReset();
				Pay.Apply.applyWindowContainer.window('open');
			},
			
			close: function() {
				Pay.Apply.applyWindowContainer.window('close');
			},
			
			doSubmit: function() {
				$.ajax({
					url: '/index.php/Pay/apply/add',
					data: {
						operatorId: Pay.Apply.ApplyWindow.operatorIdComboboxInputContainer.combobox('getValue'),
                                                gameAreaId: Pay.Apply.ApplyWindow.areaNumCombogridInputContainer.combogrid('getValue'),
						roleName: Pay.Apply.ApplyWindow.roleNameInputContainer[0].value,
						money: Pay.Apply.ApplyWindow.moneyInputContainer[0].value,
						day: Pay.Apply.ApplyWindow.dayInputContainer[0].value
					}
				})
				.done(function(response) {
					if(response.errorCode === 0) {
						$.messager.alert(messageWindowTitle, payApplyApplyWindowSubmitSuccessInfo, 'info');
						Pay.Apply.ApplyWindow.close();
						Pay.Apply.View.DataGrid.load();
					}
				});
			},
			
			doReset: function() {
				Pay.Apply.ApplyWindow.operatorIdComboboxInputContainer.combobox('reset');
                                Pay.Apply.ApplyWindow.areaNumCombogridInputContainer.combogrid('reset');
				Pay.Apply.ApplyWindow.roleNameInputContainer[0].value = '';
				Pay.Apply.ApplyWindow.moneyInputContainer[0].value = '';
				Pay.Apply.ApplyWindow.dayInputContainer[0].value = '';
			},
		},
	},

	DayPay: {
		init: function() {
			Language.getCurrLanguage();
			Utils.loadJavascriptFile('/application/views/libraries/component/' + language + '.js');
			Utils.loadJavascriptFile('/application/views/libraries/utils/' + language + '.js');
			Utils.loadJavascriptFile('/application/views/module/Pay/' + language + '.js');
			Utils.initAjax();
			
			Pay.DayPay.View.init();
		},
		
		View: {
			dataGridPanelContainer: '',
			
			init: function() {
				Pay.DayPay.View.dataGridPanelContainer = $('#dataGridPanel #dataGrid');
				Pay.DayPay.View.DataGrid.init();
			},
			
			DataGrid: {
				operatorIdComboboxLabelContainer: '',
				operatorIdComboboxInputContainer: '',
                    areaNumCombogridLabelContainer: '',
                    areaNumCombogridInputContainer: '',
				// accountValidateboxLabelContainer: '',
				// accountValidateboxInputContainer: '',
				// roleNameValidateboxLabelContainer: '',
				// roleNameValidateboxInputContainer: '',
                // orderIdValidateboxLabelContainer: '',
                // orderIdValidateboxInputContainer: '',
				startDatetimeboxLabelContainer: '',
				startDatetimeboxInputContainer: '',
				endDatetimeboxLabelContainer: '',
				endDatetimeboxInputContainer: '',
				searchButtonContainer: '',
                exportButtonContainer:'',

				init: function() {
					Pay.DayPay.View.DataGrid.operatorIdComboboxLabelContainer = $('#dataGridPanel #toolbar #operatorIdComboboxLabel');
					Pay.DayPay.View.DataGrid.operatorIdComboboxInputContainer = $('#dataGridPanel #toolbar #operatorIdComboboxInput');
                    Pay.DayPay.View.DataGrid.areaNumCombogridLabelContainer = $('#dataGridPanel #toolbar #areaNumCombogridLabel');
					Pay.DayPay.View.DataGrid.areaNumCombogridInputContainer = $('#dataGridPanel #toolbar #areaNumCombogridInput');

					Pay.DayPay.View.DataGrid.startDatetimeboxLabelContainer = $('#dataGridPanel #toolbar #startDatetimeboxLabel');
					Pay.DayPay.View.DataGrid.startDatetimeboxInputContainer = $('#dataGridPanel #toolbar #startDatetimeboxInput');
					Pay.DayPay.View.DataGrid.endDatetimeboxLabelContainer = $('#dataGridPanel #toolbar #endDatetimeboxLabel');
					Pay.DayPay.View.DataGrid.endDatetimeboxInputContainer = $('#dataGridPanel #toolbar #endDatetimeboxInput');
					Pay.DayPay.View.DataGrid.searchButtonContainer = $('#dataGridPanel #toolbar #searchButton');
                                        Pay.DayPay.View.DataGrid.exportButtonContainer = $('#dataGridPanel #toolbar #exportButton');
					Pay.DayPay.View.DataGrid.create();
                                        Pay.DayPay.View.DataGrid.showCurrSelectInfo();
				},
				
				create: function() {
					var width = $(document).width() - 40;
					var height = $(document).height() - 40;
					Pay.DayPay.View.dataGridPanelContainer.width(width);
					Pay.DayPay.View.dataGridPanelContainer.height(height);
					Pay.DayPay.View.dataGridPanelContainer.datagrid({
						fitColumns: false,
						toolbar: '#toolbar',
						columns: [[
                            {
								field: 'date',
								title: paySummaryViewDataGridColumnTitle1,
								width: 100
							},
                            
							{
								field: 'one',
								title: payDayPayViewDataGridColumnTitle1,
								width: 150,
                                    sortable: true,
							},
                            {
								field: 'two',
								title: payDayPayViewDataGridColumnTitle2,
								width: 150,
                                    sortable: true,
							},
                            {
								field: 'three',
								title: payDayPayViewDataGridColumnTitle3,
								width: 150,
                                    sortable: true,
							},
							{
								field: 'four',
								title: payDayPayViewDataGridColumnTitle4,
								width: 150,
							},
							{
								field: 'five',
								title: payDayPayViewDataGridColumnTitle5,
								width: 150,
							},
							{
								field: 'six',
								title: payDayPayViewDataGridColumnTitle6,
								width: 150,
							},
							{
								field: 'seven',
								title: payDayPayViewDataGridColumnTitle7,
								width: 150,
							},
							{
								field: 'eight',
								title: payDayPayViewDataGridColumnTitle8,
								width: 150,
							},
							{
								field: 'amount',
								title: payDayPayViewDataGridColumnTitle9,
								width: 100,
							},
							{
								field: 'money',
								title: payDayPayViewDataGridColumnTitle10,
								width: 100,
							},
						]],
						loadFilter: Utils.dataGridLoadFilter,
						pagination: true,
                        showFooter:true,  
						pageSize: 50,
						pageList: [50, 100, 150, 200],
					});
					Component.Combobox.OperatorId.create(
						Pay.DayPay.View.DataGrid.operatorIdComboboxLabelContainer,
						Pay.DayPay.View.DataGrid.operatorIdComboboxInputContainer
					);
                    Component.Combogrid.AreaNum.create(
						Pay.DayPay.View.DataGrid.areaNumCombogridLabelContainer,
						Pay.DayPay.View.DataGrid.areaNumCombogridInputContainer
					);
					
					Component.Datebox.Start.create(
						Pay.DayPay.View.DataGrid.startDatetimeboxLabelContainer,
						Pay.DayPay.View.DataGrid.startDatetimeboxInputContainer
					);
					Component.Datebox.End.create(
						Pay.DayPay.View.DataGrid.endDatetimeboxLabelContainer,
						Pay.DayPay.View.DataGrid.endDatetimeboxInputContainer
					);

					// Component.Datebox.Start.create(
					// 	Pay.Summary.View.DataGrid.startDateboxLabelContainer,
					// 	Pay.Summary.View.DataGrid.startDateboxInputContainer
					// );
					// Component.Datebox.End.create(
					// 	Pay.Summary.View.DataGrid.endDateboxLabelContainer,
					// 	Pay.Summary.View.DataGrid.endDateboxInputContainer
					// );

					Pay.DayPay.View.DataGrid.searchButtonContainer.linkbutton({
						iconCls: 'icon-search',
						text: payDetailViewDataGridToolbarButtonText1,
					});
					Pay.DayPay.View.DataGrid.searchButtonContainer.bind(
						'click',
						Pay.DayPay.View.DataGrid.doSearch
					);
                    Pay.DayPay.View.DataGrid.exportButtonContainer.linkbutton({
						iconCls: 'icon-search',
						text: exportViewDataGridToolbarButtonText1,
					});
					Pay.DayPay.View.DataGrid.exportButtonContainer.bind(
						'click',
						Pay.DayPay.View.DataGrid.doExport
					);
				},
				
				doSearch: function() {
					Pay.DayPay.View.dataGridPanelContainer.datagrid({
						url: '/index.php/Pay/DayPay/getListData',
						queryParams: {
							operatorId:  Pay.DayPay.View.DataGrid.operatorIdComboboxInputContainer.combobox('getValue'),
                            gameAreaId:  Pay.DayPay.View.DataGrid.areaNumCombogridInputContainer.combogrid('getValue'),
							// account: Pay.DayPay.View.DataGrid.accountValidateboxInputContainer[0].value,
							// roleName: Pay.DayPay.View.DataGrid.roleNameValidateboxInputContainer[0].value,
       						//  orderId: Pay.DayPay.View.DataGrid.orderIdValidateboxInputContainer[0].value,
							startDateTime: Pay.DayPay.View.DataGrid.startDatetimeboxInputContainer.datetimebox('getValue'),
							endDateTime: Pay.DayPay.View.DataGrid.endDatetimeboxInputContainer.datetimebox('getValue'),
						}
					});
				},
                                showCurrSelectInfo:function(){
                                        $.ajax({
                                                url: '/index.php/User/manage/getCurrSelectInfo',
                                        })
                                        .done(function(response) {
                                                if(response.data.operatorId!=false) {
                                                    Pay.DayPay.View.DataGrid.operatorIdComboboxInputContainer.combobox('select',response.data.operatorId);
                                                    Pay.DayPay.View.DataGrid.areaNumCombogridInputContainer.combogrid('setValue',response.data.gameAreaId);
                                                    Pay.DayPay.View.DataGrid.startDatetimeboxInputContainer.datetimebox('setValue',response.data.startDate);
                                                    Pay.DayPay.View.DataGrid.endDatetimeboxInputContainer.datetimebox('setValue',response.data.endDate);
                                                }
                                        })
                                }, 
                                doExport: function() {

                                        var operatorId = Pay.DayPay.View.DataGrid.operatorIdComboboxInputContainer.combobox('getValue');
                                        var gameAreaId = Pay.DayPay.View.DataGrid.areaNumCombogridInputContainer.combogrid('getValues').toString();
                                        // var account = Pay.DayPay.View.DataGrid.accountValidateboxInputContainer[0].value;
                                        // var roleName = Pay.DayPay.View.DataGrid.roleNameValidateboxInputContainer[0].value;
                                        // var orderId = Pay.DayPay.View.DataGrid.orderIdValidateboxInputContainer[0].value;
                                        var startDateTime = Pay.DayPay.View.DataGrid.startDatetimeboxInputContainer.datebox('getValue');
                                        var endDateTime =  Pay.DayPay.View.DataGrid.endDatetimeboxInputContainer.datebox('getValue');

                                        var downUrl = "/index.php/Pay/DayPay/export?operatorId="+ operatorId +"&gameAreaId="+gameAreaId+"&startDateTime="+startDateTime+"&endDateTime="+endDateTime
                                                  window.location = downUrl;

				},
			},
		},
	},

	PayRank: {
		init: function() {
			Language.getCurrLanguage(); 
			Utils.loadJavascriptFile('/application/views/libraries/component/' + language + '.js');
			Utils.loadJavascriptFile('/application/views/libraries/utils/' + language + '.js');
			Utils.loadJavascriptFile('/application/views/module/Pay/' + language + '.js'); 
			Utils.initAjax();
			
			Pay.PayRank.View.init(); 
		},



		
		View: {
			dataGridPanelContainer: '',
			
			init: function() {
				Pay.PayRank.View.dataGridPanelContainer = $('#dataGridPanel #dataGrid');
				Pay.PayRank.View.DataGrid.init();
			},
			
			DataGrid: {
				operatorIdComboboxLabelContainer: '',
				operatorIdComboboxInputContainer: '',
                areaNumCombogridLabelContainer: '',
                areaNumCombogridInputContainer: '',

				searchStartDateboxLabelContainer: '',
				searchStartDateboxInputContainer: '',
                searchEndDateboxLabelContainer: '',
				searchEndDateboxInputContainer: '',

				searchButtonContainer: '',
                exportButtonContainer: '',
				
				init: function() {
					Pay.PayRank.View.DataGrid.operatorIdComboboxLabelContainer = $('#dataGridPanel #toolbar #operatorIdComboboxLabel');
					Pay.PayRank.View.DataGrid.operatorIdComboboxInputContainer = $('#dataGridPanel #toolbar #operatorIdComboboxInput');
                    Pay.PayRank.View.DataGrid.areaNumCombogridLabelContainer = $('#dataGridPanel #toolbar #areaNumCombogridLabel');
					Pay.PayRank.View.DataGrid.areaNumCombogridInputContainer = $('#dataGridPanel #toolbar #areaNumCombogridInput');

                    Pay.PayRank.View.DataGrid.searchStartDateboxLabelContainer = $('#dataGridPanel #toolbar #searchStartDateboxLabel');
					Pay.PayRank.View.DataGrid.searchStartDateboxInputContainer = $('#dataGridPanel #toolbar #searchStartDateboxInput');
					Pay.PayRank.View.DataGrid.searchEndDateboxLabelContainer = $('#dataGridPanel #toolbar #searchEndDateboxLabel');
					Pay.PayRank.View.DataGrid.searchEndDateboxInputContainer = $('#dataGridPanel #toolbar #searchEndDateboxInput');
					Pay.PayRank.View.DataGrid.searchButtonContainer = $('#dataGridPanel #toolbar #searchButton');
                    Pay.PayRank.View.DataGrid.exportButtonContainer = $('#dataGridPanel #toolbar #exportButton');
					Pay.PayRank.View.DataGrid.create();
                    Pay.PayRank.View.DataGrid.showCurrSelectInfo();
				},
				
				create: function() {
					var width = $(document).width() - 40;
					var height = $(document).height() - 40;
					Pay.PayRank.View.dataGridPanelContainer.width(width);
					Pay.PayRank.View.dataGridPanelContainer.height(height); 					
					Pay.PayRank.View.dataGridPanelContainer.datagrid({
						toolbar: '#toolbar',
						columns: [[
							{
								field: 'rank',
								title: payPayRankViewDataGridColumnTitle1,
								width: 100,
							},
							{
								field: 'name',			//物品名称
								title: payPayRankViewDataGridColumnTitle2, 
								width: 120,
							},
							// {
							// 	field: 'time',  		//购买次数
							// 	title: statisticsSpecialViewDataGridColumnTitle2,
							// 	width: 120,
							// },
       //                      {
							// 	field: 'amount',		//购买人数
							// 	title: statisticsSpecialViewDataGridColumnTitle3,
							// 	width: 120,
							// },
							{
								field: 'gold',			//消耗钻石
								title: payPayRankViewDataGridColumnTitle3,
								width: 120,
							},
							{
								field: 'level',			//消耗钻石占比
								title: payPayRankViewDataGridColumnTitle4,
								width: 150,
							},
                            
						]],
						
						loadFilter: Utils.dataGridLoadFilter,
						pagination: true,
                        showFooter:true,
						pageSize: 50,
						pageList: [50, 100, 150, 200],
					});
					Component.Combobox.OperatorId.create(
						Pay.PayRank.View.DataGrid.operatorIdComboboxLabelContainer,
						Pay.PayRank.View.DataGrid.operatorIdComboboxInputContainer
					);
                    Component.Combogrid.AreaNum.create(
						Pay.PayRank.View.DataGrid.areaNumCombogridLabelContainer,
						Pay.PayRank.View.DataGrid.areaNumCombogridInputContainer
					);
					Component.Datebox.Start.create(
						Pay.PayRank.View.DataGrid.searchStartDateboxLabelContainer,
						Pay.PayRank.View.DataGrid.searchStartDateboxInputContainer
					);
                    Component.Datebox.End.create(
						Pay.PayRank.View.DataGrid.searchEndDateboxLabelContainer,
						Pay.PayRank.View.DataGrid.searchEndDateboxInputContainer
					);

					Pay.PayRank.View.DataGrid.searchButtonContainer.linkbutton({
						iconCls: 'icon-search',
						text: paySummaryViewDataGridToolbarButtonText1,
					});
					Pay.PayRank.View.DataGrid.searchButtonContainer.bind(
						'click',
						Pay.PayRank.View.DataGrid.doSearch
					);
                    Pay.PayRank.View.DataGrid.exportButtonContainer.linkbutton({
						iconCls: 'icon-search',
						text: exportViewDataGridToolbarButtonText1,
					});
					Pay.PayRank.View.DataGrid.exportButtonContainer.bind(
						'click',
						Pay.PayRank.View.DataGrid.doExport
					);

				},
				
				doSearch: function() {
                    var operatorId = Pay.PayRank.View.DataGrid.operatorIdComboboxInputContainer.combobox('getValue');
                    var gameAreaId = Pay.PayRank.View.DataGrid.areaNumCombogridInputContainer.combogrid('getValue');
					var searchStartDate = Pay.PayRank.View.DataGrid.searchStartDateboxInputContainer.datebox('getValue');
                    var searchEndDate = Pay.PayRank.View.DataGrid.searchEndDateboxInputContainer.datebox('getValue');
					
					Pay.PayRank.View.dataGridPanelContainer.datagrid({
						url: '/index.php/Pay/payRank/getListData',
						queryParams: {
                            operatorId: operatorId,
							gameAreaId: gameAreaId,
							startDate: searchStartDate,
                            endDate: searchEndDate
						}
					});
				},
                showCurrSelectInfo:function(){
                        $.ajax({
                                url: '/index.php/User/manage/getCurrSelectInfo',
                        })
                        .done(function(response) {
                                if(response.data.operatorId!=false) {
                                    Pay.PayRank.View.DataGrid.operatorIdComboboxInputContainer.combobox('select',response.data.operatorId);
                                    Pay.PayRank.View.DataGrid.areaNumCombogridInputContainer.combogrid('setValue',response.data.gameAreaId);
                                    Pay.PayRank.View.DataGrid.searchStartDateboxInputContainer.datebox('setValue',response.data.startDate);
                                    Pay.PayRank.View.DataGrid.searchEndDateboxInputContainer.datebox('setValue',response.data.endDate);
                                }
                        })
                }, 
                doExport: function() {

                        var operatorId = Pay.PayRank.View.DataGrid.operatorIdComboboxInputContainer.combobox('getValue');
                        var gameAreaId = Pay.PayRank.View.DataGrid.areaNumCombogridInputContainer.combogrid('getValues').toString();
                        var startDate = Pay.PayRank.View.DataGrid.searchStartDateboxInputContainer.datebox('getValue');
                        var endDate =  Pay.PayRank.View.DataGrid.searchEndDateboxInputContainer.datebox('getValue');

                      	var downUrl = "/index.php/Pay/payRank/export?operatorId="+ operatorId +"&gameAreaId="+gameAreaId+"&startDate="+startDate+"&endDate="+endDate
                      	window.location = downUrl;

				},

			},
		}, 
	},
}