var Currency = {
	Detail: {
		init: function() {
			Language.getCurrLanguage();
			Utils.loadJavascriptFile('/application/views/libraries/component/' + language + '.js');
			Utils.loadJavascriptFile('/application/views/libraries/utils/' + language + '.js');
			Utils.loadJavascriptFile('/application/views/module/Currency/' + language + '.js');
			Utils.initAjax();
			
			Currency.Detail.View.init();
		},
		
		View: {
			dataGridPanelContainer: '',
			
			init: function() {
				Currency.Detail.View.dataGridPanelContainer = $('#dataGridPanel #dataGrid');
				Currency.Detail.View.DataGrid.init();
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
				currencyTypeComboboxLabelContainer: '',
				currencyTypeComboboxInputContainer: '',
                                getTypeComboboxLabelContainer:'',
                                getTypeComboboxInputContainer:'',
				startDatetimeboxLabelContainer: '',
				startDatetimeboxInputContainer: '',
				endDatetimeboxLabelContainer: '',
				endDatetimeboxInputContainer: '',
				searchButtonContainer: '',

				init: function() {
					Currency.Detail.View.DataGrid.operatorIdComboboxLabelContainer = $('#dataGridPanel #toolbar #operatorIdComboboxLabel');
					Currency.Detail.View.DataGrid.operatorIdComboboxInputContainer = $('#dataGridPanel #toolbar #operatorIdComboboxInput');
                                        Currency.Detail.View.DataGrid.areaNumCombogridLabelContainer = $('#dataGridPanel #toolbar #areaNumCombogridLabel');
					Currency.Detail.View.DataGrid.areaNumCombogridInputContainer = $('#dataGridPanel #toolbar #areaNumCombogridInput');
					Currency.Detail.View.DataGrid.accountValidateboxLabelContainer = $('#dataGridPanel #toolbar #accountValidateboxLabel');
					Currency.Detail.View.DataGrid.accountValidateboxInputContainer = $('#dataGridPanel #toolbar #accountValidateboxInput');
					Currency.Detail.View.DataGrid.roleNameValidateboxLabelContainer = $('#dataGridPanel #toolbar #roleNameValidateboxLabel');
					Currency.Detail.View.DataGrid.roleNameValidateboxInputContainer = $('#dataGridPanel #toolbar #roleNameValidateboxInput');
					Currency.Detail.View.DataGrid.currencyTypeComboboxLabelContainer = $('#dataGridPanel #toolbar #currencyTypeComboboxLabel');
					Currency.Detail.View.DataGrid.currencyTypeComboboxInputContainer = $('#dataGridPanel #toolbar #currencyTypeComboboxInput');
                                        Currency.Detail.View.DataGrid.getTypeComboboxLabelContainer = $('#dataGridPanel #toolbar #getTypeComboboxLabel');
					Currency.Detail.View.DataGrid.getTypeComboboxInputContainer = $('#dataGridPanel #toolbar #getTypeComboboxInput');
					Currency.Detail.View.DataGrid.startDatetimeboxLabelContainer = $('#dataGridPanel #toolbar #startDatetimeboxLabel');
					Currency.Detail.View.DataGrid.startDatetimeboxInputContainer = $('#dataGridPanel #toolbar #startDatetimeboxInput');
					Currency.Detail.View.DataGrid.endDatetimeboxLabelContainer = $('#dataGridPanel #toolbar #endDatetimeboxLabel');
					Currency.Detail.View.DataGrid.endDatetimeboxInputContainer = $('#dataGridPanel #toolbar #endDatetimeboxInput');
					Currency.Detail.View.DataGrid.searchButtonContainer = $('#dataGridPanel #toolbar #searchButton');
					Currency.Detail.View.DataGrid.create();
                                        Currency.Detail.View.DataGrid.showCurrSelectInfo();
				},
				
				create: function() {
					var width = $(document).width() - 40;
					var height = $(document).height() - 40;
					Currency.Detail.View.dataGridPanelContainer.width(width);
					Currency.Detail.View.dataGridPanelContainer.height(height);
					Currency.Detail.View.dataGridPanelContainer.datagrid({
						fitColumns: false,
						toolbar: '#toolbar',
						columns: [[
							{
								field: 'cid',
								title: currencyDetailViewDataGridColumnTitle1,
								width: 100,
							},
							{
								field: 'roleName',
								title: currencyDetailViewDataGridColumnTitle2,
								width: 100,
							},
							{
								field: 'currencyType',
								title: currencyDetailViewDataGridColumnTitle3,
								width: 100,
                                formatter: function(value) {
									if(value === '1') {
										return currencyTypeValue1;
									}
									else if(value === '2') {
										return currencyTypeValue2;
									}
                                    else if(value === '3') {
										return currencyTypeValue3;
									}
                                    else if(value === '4') {
										return currencyTypeValue4;
									}
                                    else if(value === '5') {
										return currencyTypeValue5;
									}
                                    else if(value === '6') {
										return currencyTypeValue6;
									}
                                    else if(value === '7') {
										return currencyTypeValue7;
									}
                                    else if(value === '0') {
										return currencyTypeValue0;
									}
                           		}
                            },
							{
								field: 'getType',
								title: currencyDetailViewDataGridColumnTitle4,
								width: 100,
							},
							{
								field: 'opway',
								title: currencyDetailViewDataGridColumnTitle5,
								width: 150,
                                                              
							},
                                                        {
								field: 'value',
								title: currencyDetailViewDataGridColumnTitle6,
								width: 100,
							},
							{
								field: 'left',
								title: currencyDetailViewDataGridColumnTitle7,
								width: 100,
							},
							{
								field: 'param',
								title: currencyDetailViewDataGridColumnTitle8,
								width: 100,
							},
							{
								field: 'time',
								title: currencyDetailViewDataGridColumnTitle9,
								width: 100,
							},
							{
								field: 'useroleName',
								title: currencyDetailViewDataGridColumnTitle10,
								width: 150,
							},
						]],
						loadFilter: Utils.dataGridLoadFilter,
                                                showFooter:true,
						pagination: true,
						pageSize: 50,
						pageList: [50, 100, 150, 200],
					});
					Component.Combobox.OperatorId.create(
						Currency.Detail.View.DataGrid.operatorIdComboboxLabelContainer,
						Currency.Detail.View.DataGrid.operatorIdComboboxInputContainer
					);
                                        Component.Combogrid.AreaNum.create(
						Currency.Detail.View.DataGrid.areaNumCombogridLabelContainer,
						Currency.Detail.View.DataGrid.areaNumCombogridInputContainer
					);
					Component.Validatebox.Account.create(
						Currency.Detail.View.DataGrid.accountValidateboxLabelContainer,
						Currency.Detail.View.DataGrid.accountValidateboxInputContainer
					);
					Component.Validatebox.RoleName.create(
						Currency.Detail.View.DataGrid.roleNameValidateboxLabelContainer,
						Currency.Detail.View.DataGrid.roleNameValidateboxInputContainer
					);
					Component.Combobox.CurrencyType.create(
						Currency.Detail.View.DataGrid.currencyTypeComboboxLabelContainer,
						Currency.Detail.View.DataGrid.currencyTypeComboboxInputContainer
					);
                                        Component.Combobox.GetType.create(
						Currency.Detail.View.DataGrid.getTypeComboboxLabelContainer,
						Currency.Detail.View.DataGrid.getTypeComboboxInputContainer
					);
					Component.Datetimebox.Start.create(
						Currency.Detail.View.DataGrid.startDatetimeboxLabelContainer,
						Currency.Detail.View.DataGrid.startDatetimeboxInputContainer
					);
					Component.Datetimebox.End.create(
						Currency.Detail.View.DataGrid.endDatetimeboxLabelContainer,
						Currency.Detail.View.DataGrid.endDatetimeboxInputContainer
					);
					Currency.Detail.View.DataGrid.searchButtonContainer.linkbutton({
						iconCls: 'icon-search',
						text: currencyDetailViewDataGridToolbarButtonText1,
					});
					Currency.Detail.View.DataGrid.searchButtonContainer.bind(
						'click',
						Currency.Detail.View.DataGrid.doSearch
					);
				},
				showCurrSelectInfo:function(){
                                        $.ajax({
                                                url: '/index.php/User/manage/getCurrSelectInfo',
                                        })
                                        .done(function(response) {
                                                if(response.data.operatorId!=false) {
                                                    Currency.Detail.View.DataGrid.operatorIdComboboxInputContainer.combobox('select',response.data.operatorId);
                                                    Currency.Detail.View.DataGrid.areaNumCombogridInputContainer.combogrid('setValue',response.data.gameAreaId);
                                                    Currency.Detail.View.DataGrid.startDatetimeboxInputContainer.datetimebox('setValue',response.data.startDate);
                                                    Currency.Detail.View.DataGrid.endDatetimeboxInputContainer.datetimebox('setValue',response.data.endDate);
                                                }
                                        })
                                }, 
				doSearch: function() {
					Currency.Detail.View.dataGridPanelContainer.datagrid({
						url: '/index.php/Currency/detail/getListData',
						queryParams: {
							operatorId: Currency.Detail.View.DataGrid.operatorIdComboboxInputContainer.combobox('getValue'),
                                                        gameAreaId: Currency.Detail.View.DataGrid.areaNumCombogridInputContainer.combogrid('getValues').toString(),
							account: Currency.Detail.View.DataGrid.accountValidateboxInputContainer[0].value,
							roleName: Currency.Detail.View.DataGrid.roleNameValidateboxInputContainer[0].value,
							startDateTime: Currency.Detail.View.DataGrid.startDatetimeboxInputContainer.datetimebox('getValue'),
							endDateTime: Currency.Detail.View.DataGrid.endDatetimeboxInputContainer.datetimebox('getValue'),
							currencyTypeId: Currency.Detail.View.DataGrid.currencyTypeComboboxInputContainer.combobox('getValue'),
                                                        getTypeId: Currency.Detail.View.DataGrid.getTypeComboboxInputContainer.combobox('getValue'),
						}
					});
				},
			},
		},
	},
	
	Summary: {
		init: function() {
			Language.getCurrLanguage();
			Utils.loadJavascriptFile('/application/views/libraries/component/' + language + '.js');
			Utils.loadJavascriptFile('/application/views/libraries/utils/' + language + '.js');
			Utils.loadJavascriptFile('/application/views/module/Currency/' + language + '.js');
			Utils.initAjax();
			
			Currency.Summary.View.init();
		},
		
		View: {
			dataGridPanelContainer: '',
			
			init: function() {
				Currency.Summary.View.dataGridPanelContainer = $('#dataGridPanelAll #dataGrid');
				Currency.Summary.View.DataGrid.init();
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
                                currencyTypeComboboxLabelContainer: '',
				currencyTypeComboboxInputContainer: '',
				searchButtonContainer: '',
                                exportButtonContainer: '',

				init: function() {
					Currency.Summary.View.DataGrid.operatorIdComboboxLabelContainer = $('#dataGridPanelAll #toolbar #operatorIdComboboxLabel');
					Currency.Summary.View.DataGrid.operatorIdComboboxInputContainer = $('#dataGridPanelAll #toolbar #operatorIdComboboxInput');
                                        Currency.Summary.View.DataGrid.areaNumCombogridLabelContainer = $('#dataGridPanelAll #toolbar #areaNumCombogridLabel');
					Currency.Summary.View.DataGrid.areaNumCombogridInputContainer = $('#dataGridPanelAll #toolbar #areaNumCombogridInput');
					Currency.Summary.View.DataGrid.currencyTypeComboboxLabelContainer = $('#dataGridPanelAll #toolbar #currencyTypeComboboxLabel');
					Currency.Summary.View.DataGrid.currencyTypeComboboxInputContainer = $('#dataGridPanelAll #toolbar #currencyTypeComboboxInput');
					Currency.Summary.View.DataGrid.searchStartDateboxLabelContainer = $('#dataGridPanelAll #toolbar #searchStartDateboxLabel');
					Currency.Summary.View.DataGrid.searchStartDateboxInputContainer = $('#dataGridPanelAll #toolbar #searchStartDateboxInput');
					Currency.Summary.View.DataGrid.searchEndDateboxLabelContainer = $('#dataGridPanelAll #toolbar #searchEndDateboxLabel');
					Currency.Summary.View.DataGrid.searchEndDateboxInputContainer = $('#dataGridPanelAll #toolbar #searchEndDateboxInput');
					Currency.Summary.View.DataGrid.searchButtonContainer = $('#dataGridPanelAll #toolbar #searchButton');
                                        Currency.Summary.View.DataGrid.exportButtonContainer = $('#dataGridPanelAll #toolbar #exportButton');
					Currency.Summary.View.DataGrid.create();
                                        Currency.Summary.View.DataGrid.showCurrSelectInfo();
				},
				
				create: function() {
					var width = $(document).width() - 40;
					var height = $(document).height() - 40;
					Currency.Summary.View.dataGridPanelContainer.width(width);
					Currency.Summary.View.dataGridPanelContainer.height(height);
					Currency.Summary.View.dataGridPanelContainer.datagrid({
						toolbar: '#toolbar',
						columns: [[
							{
								field: 'itemName',
								title: currencySummaryViewDataGridColumnTitle1,
								width: 80,
							},
							{
								field: 'price',
								title: currencySummaryViewDataGridColumnTitle2,
								width: 60,
							},
							{
								field: 'roleNum',
								title: currencySummaryViewDataGridColumnTitle3,
								width: 70,
							},
							{
								field: 'itemNum',
								title: currencySummaryViewDataGridColumnTitle4,
								width: 100,
							},
							{
								field: 'allPrice',
								title: currencySummaryViewDataGridColumnTitle5,
								width: 100,
							},
							{
								field: 'rate',
								title: currencySummaryViewDataGridColumnTitle6,
								width: 100,
                                                                sortable: true,
							},
							
						]],
						loadFilter: Utils.dataGridLoadFilter,
                                                rownumbers:true,
						pagination: true,
						pageSize: 50,
						pageList: [50, 100, 150, 200],
					});
                                        Component.Combobox.OperatorId.create(
						Currency.Summary.View.DataGrid.operatorIdComboboxLabelContainer,
						Currency.Summary.View.DataGrid.operatorIdComboboxInputContainer
					);
					 Component.Combogrid.AreaNum.create(
						Currency.Summary.View.DataGrid.areaNumCombogridLabelContainer,
						Currency.Summary.View.DataGrid.areaNumCombogridInputContainer
					);
					Component.Combobox.CurrencyType.create(
						Currency.Summary.View.DataGrid.currencyTypeComboboxLabelContainer,
						Currency.Summary.View.DataGrid.currencyTypeComboboxInputContainer
					);
					Component.Datebox.Start.create(
						Currency.Summary.View.DataGrid.searchStartDateboxLabelContainer,
						Currency.Summary.View.DataGrid.searchStartDateboxInputContainer
					);
					Component.Datebox.End.create(
						Currency.Summary.View.DataGrid.searchEndDateboxLabelContainer,
						Currency.Summary.View.DataGrid.searchEndDateboxInputContainer
					);
					Currency.Summary.View.DataGrid.searchButtonContainer.linkbutton({
						iconCls: 'icon-search',
						text: currencySummaryViewDataGridToolbarButtonText1,
					});
					Currency.Summary.View.DataGrid.searchButtonContainer.bind(
						'click',
						Currency.Summary.View.DataGrid.doSearch
					);
                                        Currency.Summary.View.DataGrid.exportButtonContainer.linkbutton({
						iconCls: 'icon-search',
						text: currencyFirstViewDataGridToolbarButtonText1,
					});
					Currency.Summary.View.DataGrid.exportButtonContainer.bind(
						'click',
						Currency.Summary.View.DataGrid.doExport
					);
				},
				
                                showCurrSelectInfo:function(){
                                        $.ajax({
                                                url: '/index.php/User/manage/getCurrSelectInfo',
                                        })
                                        .done(function(response) {
                                                if(response.data.operatorId!=false) {
                                                    Currency.Summary.View.DataGrid.operatorIdComboboxInputContainer.combobox('select',response.data.operatorId);
                                                    Currency.Summary.View.DataGrid.areaNumCombogridInputContainer.combogrid('setValue',response.data.gameAreaId);
                                                    Currency.Summary.View.DataGrid.searchStartDateboxInputContainer.datebox('setValue',response.data.startDate);
                                                    Currency.Summary.View.DataGrid.searchEndDateboxInputContainer.datebox('setValue',response.data.endDate);
                                                }
                                        })
                                }, 
                                
				doSearch: function() {
					Currency.Summary.View.dataGridPanelContainer.datagrid({
						url: '/index.php/Currency/summary/getListData',
						queryParams: {
							currencyTypeId: Currency.Summary.View.DataGrid.currencyTypeComboboxInputContainer.combobox('getValue'),
							operatorId: Currency.Summary.View.DataGrid.operatorIdComboboxInputContainer.combobox('getValue'),
                            gameAreaId: Currency.Summary.View.DataGrid.areaNumCombogridInputContainer.combogrid('getValues').toString(),
                            startDate: Currency.Summary.View.DataGrid.searchStartDateboxInputContainer.datebox('getValue'),
                            endDate:  Currency.Summary.View.DataGrid.searchEndDateboxInputContainer.datebox('getValue'),
						}
					});
				},
                                doExport: function() {
//                                        var url = "/index.php/Currency/first/export";
                                        var currencyTypeId = Currency.Summary.View.DataGrid.currencyTypeComboboxInputContainer.combobox('getValue');
                                        var operatorId = Currency.Summary.View.DataGrid.operatorIdComboboxInputContainer.combobox('getValue');
                                        var gameAreaId = Currency.Summary.View.DataGrid.areaNumCombogridInputContainer.combogrid('getValues').toString();
                                        var startDate = Currency.Summary.View.DataGrid.searchStartDateboxInputContainer.datebox('getValue');
                                        var endDate =  Currency.Summary.View.DataGrid.searchEndDateboxInputContainer.datebox('getValue');
//                                        $.ajax({
//                                              url: url,
//                                              data: {
//                                                    operatorId:operatorId,
//                                                    gameAreaId:gameAreaId,
//                                                    startDate:startDate,
//                                                    endDate:endDate,
//                                              },
//                                              success: function () {
                                                  var downUrl = "/index.php/Currency/summary/export?operatorId="+ operatorId +"&gameAreaId="+gameAreaId+"&startDate="+startDate+"&endDate="+endDate+"&currencyTypeId="+currencyTypeId
                                                  window.location = downUrl;
//                                              }
//                                        });
				},
			},
		},
	},
        First: {
		init: function() {
			Language.getCurrLanguage();
			Utils.loadJavascriptFile('/application/views/libraries/component/' + language + '.js');
			Utils.loadJavascriptFile('/application/views/libraries/utils/' + language + '.js');
			Utils.loadJavascriptFile('/application/views/module/Currency/' + language + '.js');
			Utils.initAjax();
			
			Currency.First.View.init();
		},
		
		View: {
			dataGridPanelContainer: '',
			
			init: function() {
				Currency.First.View.dataGridPanelContainer = $('#dataGridPanel #dataGrid');
				Currency.First.View.DataGrid.init();
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
                                currencyTypeComboboxLabelContainer: '',
				currencyTypeComboboxInputContainer: '',
				searchButtonContainer: '',
                                exportButtonContainer: '',

				init: function() {
					Currency.First.View.DataGrid.operatorIdComboboxLabelContainer = $('#dataGridPanel #toolbar #operatorIdComboboxLabel');
					Currency.First.View.DataGrid.operatorIdComboboxInputContainer = $('#dataGridPanel #toolbar #operatorIdComboboxInput');
                                        Currency.First.View.DataGrid.areaNumCombogridLabelContainer = $('#dataGridPanel #toolbar #areaNumCombogridLabel');
					Currency.First.View.DataGrid.areaNumCombogridInputContainer = $('#dataGridPanel #toolbar #areaNumCombogridInput');
					Currency.First.View.DataGrid.searchStartDateboxLabelContainer = $('#dataGridPanel #toolbar #searchStartDateboxLabel');
					Currency.First.View.DataGrid.searchStartDateboxInputContainer = $('#dataGridPanel #toolbar #searchStartDateboxInput');
					Currency.First.View.DataGrid.searchEndDateboxLabelContainer = $('#dataGridPanel #toolbar #searchEndDateboxLabel');
					Currency.First.View.DataGrid.searchEndDateboxInputContainer = $('#dataGridPanel #toolbar #searchEndDateboxInput');
					Currency.First.View.DataGrid.searchButtonContainer = $('#dataGridPanel #toolbar #searchButton');
                                        Currency.First.View.DataGrid.exportButtonContainer = $('#dataGridPanel #toolbar #exportButton');
					Currency.First.View.DataGrid.create();
                                        Currency.First.View.DataGrid.showCurrSelectInfo();
				},
				
				create: function() {
					var width = $(document).width() - 40;
					var height = $(document).height() - 40;
					Currency.First.View.dataGridPanelContainer.width(width);
					Currency.First.View.dataGridPanelContainer.height(height);
					Currency.First.View.dataGridPanelContainer.datagrid({
						toolbar: '#toolbar',
						columns: [[
							{
								field: 'itemName',
								title: currencySummaryViewDataGridColumnTitle1,
								width: 80,
							},
							{
								field: 'price',
								title: currencySummaryViewDataGridColumnTitle2,
								width: 60,
							},
							{
								field: 'roleNum',
								title: currencySummaryViewDataGridColumnTitle3,
								width: 70,
                                                                sortable: true,
							},
							{
								field: 'itemNum',
								title: currencySummaryViewDataGridColumnTitle4,
								width: 100,
							},
							{
								field: 'allPrice',
								title: currencySummaryViewDataGridColumnTitle5,
								width: 100,
							},
							{
								field: 'rate',
								title: currencySummaryViewDataGridColumnTitle6,
								width: 100,
                                                                sortable: true,
							},
							
						]],
						loadFilter: Utils.dataGridLoadFilter,
                                                rownumbers:true,
						pagination: true,
						pageSize: 50,
						pageList: [50, 100, 150, 200],
					});
                                        Component.Combobox.OperatorId.create(
						Currency.First.View.DataGrid.operatorIdComboboxLabelContainer,
						Currency.First.View.DataGrid.operatorIdComboboxInputContainer
					);
					 Component.Combogrid.AreaNum.create(
						Currency.First.View.DataGrid.areaNumCombogridLabelContainer,
						Currency.First.View.DataGrid.areaNumCombogridInputContainer
					);
					Component.Datebox.Start.create(
						Currency.First.View.DataGrid.searchStartDateboxLabelContainer,
						Currency.First.View.DataGrid.searchStartDateboxInputContainer
					);
					Component.Datebox.End.create(
						Currency.First.View.DataGrid.searchEndDateboxLabelContainer,
						Currency.First.View.DataGrid.searchEndDateboxInputContainer
					);
					Currency.First.View.DataGrid.searchButtonContainer.linkbutton({
						iconCls: 'icon-search',
						text: currencySummaryViewDataGridToolbarButtonText1,
					});
					Currency.First.View.DataGrid.searchButtonContainer.bind(
						'click',
						Currency.First.View.DataGrid.doSearch
					);
                                        Currency.First.View.DataGrid.exportButtonContainer.linkbutton({
						iconCls: 'icon-search',
						text: currencyFirstViewDataGridToolbarButtonText1,
					});
					Currency.First.View.DataGrid.exportButtonContainer.bind(
						'click',
						Currency.First.View.DataGrid.doExport
					);
				},
				
				doSearch: function() {
					Currency.First.View.dataGridPanelContainer.datagrid({
						url: '/index.php/Currency/first/getListData',
						queryParams: {
							operatorId: Currency.First.View.DataGrid.operatorIdComboboxInputContainer.combobox('getValue'),
                                                        gameAreaId: Currency.First.View.DataGrid.areaNumCombogridInputContainer.combogrid('getValues').toString(),
                                                        startDate: Currency.First.View.DataGrid.searchStartDateboxInputContainer.datebox('getValue'),
                                                        endDate:  Currency.First.View.DataGrid.searchEndDateboxInputContainer.datebox('getValue'),
						}
					});
				},
                                showCurrSelectInfo:function(){
                                        $.ajax({
                                                url: '/index.php/User/manage/getCurrSelectInfo',
                                        })
                                        .done(function(response) {
                                                if(response.data.operatorId!=false) {
                                                    Currency.First.View.DataGrid.operatorIdComboboxInputContainer.combobox('select',response.data.operatorId);
                                                    Currency.First.View.DataGrid.areaNumCombogridInputContainer.combogrid('setValue',response.data.gameAreaId);
                                                    Currency.First.View.DataGrid.searchStartDateboxInputContainer.datebox('setValue',response.data.startDate);
                                                    Currency.First.View.DataGrid.searchEndDateboxInputContainer.datebox('setValue',response.data.endDate);
                                                }
                                        })
                                }, 
                                doExport: function() {
//                                        var url = "/index.php/Currency/first/export";
                                        var operatorId = Currency.First.View.DataGrid.operatorIdComboboxInputContainer.combobox('getValue');
                                        var gameAreaId = Currency.First.View.DataGrid.areaNumCombogridInputContainer.combogrid('getValues').toString();
                                        var startDate = Currency.First.View.DataGrid.searchStartDateboxInputContainer.datebox('getValue');
                                        var endDate =  Currency.First.View.DataGrid.searchEndDateboxInputContainer.datebox('getValue');
//                                        $.ajax({
//                                              url: url,
//                                              data: {
//                                                    operatorId:operatorId,
//                                                    gameAreaId:gameAreaId,
//                                                    startDate:startDate,
//                                                    endDate:endDate,
//                                              },
//                                              success: function () {
                                                  var downUrl = "/index.php/Currency/first/export?operatorId="+ operatorId +"&gameAreaId="+gameAreaId+"&startDate="+startDate+"&endDate="+endDate
                                                  window.location = downUrl;
//                                              }
//                                        });
				},
			},
		},
	},
        Goldtype: {
		init: function() {
			Language.getCurrLanguage();
			Utils.loadJavascriptFile('/application/views/libraries/component/' + language + '.js');
			Utils.loadJavascriptFile('/application/views/libraries/utils/' + language + '.js');
			Utils.loadJavascriptFile('/application/views/module/Currency/' + language + '.js');
			Utils.initAjax();
			
			Currency.Goldtype.View.init();
		},
		
		View: {
			dataGridPanelContainer: '',
			
			init: function() {
				Currency.Goldtype.View.dataGridPanelContainer = $('#dataGridPanel #dataGrid');
				Currency.Goldtype.View.DataGrid.init();
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
                                currencyTypeComboboxLabelContainer: '',
				currencyTypeComboboxInputContainer: '',
				searchButtonContainer: '',
                                exportButtonContainer: '',

				init: function() {
					Currency.Goldtype.View.DataGrid.operatorIdComboboxLabelContainer = $('#dataGridPanel #toolbar #operatorIdComboboxLabel');
					Currency.Goldtype.View.DataGrid.operatorIdComboboxInputContainer = $('#dataGridPanel #toolbar #operatorIdComboboxInput');
                                        Currency.Goldtype.View.DataGrid.areaNumCombogridLabelContainer = $('#dataGridPanel #toolbar #areaNumCombogridLabel');
					Currency.Goldtype.View.DataGrid.areaNumCombogridInputContainer = $('#dataGridPanel #toolbar #areaNumCombogridInput');
					Currency.Goldtype.View.DataGrid.searchStartDateboxLabelContainer = $('#dataGridPanel #toolbar #searchStartDateboxLabel');
					Currency.Goldtype.View.DataGrid.searchStartDateboxInputContainer = $('#dataGridPanel #toolbar #searchStartDateboxInput');
					Currency.Goldtype.View.DataGrid.searchEndDateboxLabelContainer = $('#dataGridPanel #toolbar #searchEndDateboxLabel');
					Currency.Goldtype.View.DataGrid.searchEndDateboxInputContainer = $('#dataGridPanel #toolbar #searchEndDateboxInput');
					Currency.Goldtype.View.DataGrid.searchButtonContainer = $('#dataGridPanel #toolbar #searchButton');
                                        Currency.Goldtype.View.DataGrid.exportButtonContainer = $('#dataGridPanel #toolbar #exportButton');
					Currency.Goldtype.View.DataGrid.create();
                                        Currency.Goldtype.View.DataGrid.showCurrSelectInfo();
				},
				
				create: function() {
					var width = $(document).width() - 40;
					var height = $(document).height() - 40;
					Currency.Goldtype.View.dataGridPanelContainer.width(width);
					Currency.Goldtype.View.dataGridPanelContainer.height(height);
					Currency.Goldtype.View.dataGridPanelContainer.datagrid({
						toolbar: '#toolbar',
						columns: [[
							{
								field: 'opway',
								title: currencyGoldtypeViewDataGridColumnTitle1,
								width: 150,
							},
							{
								field: 'roleNum',
								title: currencyGoldtypeViewDataGridColumnTitle2,
								width: 70,
                                                                sortable: true,
							},
							{
								field: 'costNum',
								title: currencyGoldtypeViewDataGridColumnTitle3,
								width: 100,
							},
							{
								field: 'allPrice',
								title: currencyGoldtypeViewDataGridColumnTitle4,
								width: 100,
							},
							{
								field: 'rate',
								title: currencyGoldtypeViewDataGridColumnTitle5,
								width: 100,
                                                                sortable: true,
							},
							
						]],
						loadFilter: Utils.dataGridLoadFilter,
                                                rownumbers:true,
						pagination: true,
						pageSize: 50,
						pageList: [50, 100, 150, 200],
					});
                                        Component.Combobox.OperatorId.create(
						Currency.Goldtype.View.DataGrid.operatorIdComboboxLabelContainer,
						Currency.Goldtype.View.DataGrid.operatorIdComboboxInputContainer
					);
					 Component.Combogrid.AreaNum.create(
						Currency.Goldtype.View.DataGrid.areaNumCombogridLabelContainer,
						Currency.Goldtype.View.DataGrid.areaNumCombogridInputContainer
					);
					Component.Datebox.Start.create(
						Currency.Goldtype.View.DataGrid.searchStartDateboxLabelContainer,
						Currency.Goldtype.View.DataGrid.searchStartDateboxInputContainer
					);
					Component.Datebox.End.create(
						Currency.Goldtype.View.DataGrid.searchEndDateboxLabelContainer,
						Currency.Goldtype.View.DataGrid.searchEndDateboxInputContainer
					);
					Currency.Goldtype.View.DataGrid.searchButtonContainer.linkbutton({
						iconCls: 'icon-search',
						text: currencySummaryViewDataGridToolbarButtonText1,
					});
					Currency.Goldtype.View.DataGrid.searchButtonContainer.bind(
						'click',
						Currency.Goldtype.View.DataGrid.doSearch
					);
                                        Currency.Goldtype.View.DataGrid.exportButtonContainer.linkbutton({
						iconCls: 'icon-search',
						text: currencyFirstViewDataGridToolbarButtonText1,
					});
					Currency.Goldtype.View.DataGrid.exportButtonContainer.bind(
						'click',
						Currency.Goldtype.View.DataGrid.doExport
					);
				},
				
				doSearch: function() {
					Currency.Goldtype.View.dataGridPanelContainer.datagrid({
						url: '/index.php/Currency/goldtype/getListData',
						queryParams: {
							operatorId: Currency.Goldtype.View.DataGrid.operatorIdComboboxInputContainer.combobox('getValue'),
                                                        gameAreaId: Currency.Goldtype.View.DataGrid.areaNumCombogridInputContainer.combogrid('getValues').toString(),
                                                        startDate: Currency.Goldtype.View.DataGrid.searchStartDateboxInputContainer.datebox('getValue'),
                                                        endDate:  Currency.Goldtype.View.DataGrid.searchEndDateboxInputContainer.datebox('getValue'),
						}
					});
				},
                                showCurrSelectInfo:function(){
                                        $.ajax({
                                                url: '/index.php/User/manage/getCurrSelectInfo',
                                        })
                                        .done(function(response) {
                                                if(response.data.operatorId!=false) {
                                                    Currency.Goldtype.View.DataGrid.operatorIdComboboxInputContainer.combobox('select',response.data.operatorId);
                                                    Currency.Goldtype.View.DataGrid.areaNumCombogridInputContainer.combogrid('setValue',response.data.gameAreaId);
                                                    Currency.Goldtype.View.DataGrid.searchStartDateboxInputContainer.datebox('setValue',response.data.startDate);
                                                    Currency.Goldtype.View.DataGrid.searchEndDateboxInputContainer.datebox('setValue',response.data.endDate);
                                                }
                                        })
                                }, 
                                doExport: function() {
//                                        var url = "/index.php/Currency/first/export";
                                        var operatorId = Currency.Goldtype.View.DataGrid.operatorIdComboboxInputContainer.combobox('getValue');
                                        var gameAreaId = Currency.Goldtype.View.DataGrid.areaNumCombogridInputContainer.combogrid('getValues').toString();
                                        var startDate = Currency.Goldtype.View.DataGrid.searchStartDateboxInputContainer.datebox('getValue');
                                        var endDate =  Currency.Goldtype.View.DataGrid.searchEndDateboxInputContainer.datebox('getValue');
//                                        $.ajax({
//                                              url: url,
//                                              data: {
//                                                    operatorId:operatorId,
//                                                    gameAreaId:gameAreaId,
//                                                    startDate:startDate,
//                                                    endDate:endDate,
//                                              },
//                                              success: function () {
                                                  var downUrl = "/index.php/Currency/goldtype/export?operatorId="+ operatorId +"&gameAreaId="+gameAreaId+"&startDate="+startDate+"&endDate="+endDate
                                                  window.location = downUrl;
//                                              }
//                                        });
				},
			},
		},
	},
}