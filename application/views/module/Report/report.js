var Report = {
	Detail: {
		init: function() {
			Language.getCurrLanguage();
			Utils.loadJavascriptFile('/application/views/libraries/component/' + language + '.js');
			Utils.loadJavascriptFile('/application/views/libraries/utils/' + language + '.js');
			Utils.loadJavascriptFile('/application/views/module/Report/' + language + '.js');
			Utils.initAjax();
			
			Report.Detail.View.init();
		},
		
		View: {
			dataGridPanelContainer: '',
			
			init: function() {
				Report.Detail.View.dataGridPanelContainer = $('#dataGridPanel #dataGrid');
				Report.Detail.View.DataGrid.init();
			},
			
			DataGrid: {
				operatorIdComboboxLabelContainer: '',
				operatorIdComboboxInputContainer: '',
                                areaNumCombogridLabelContainer: '',
                                areaNumCombogridInputContainer: '',
				startDateboxLabelContainer: '',
				startDateboxInputContainer: '',
				endDateboxLabelContainer: '',
				endDateboxInputContainer: '',
				reportTypeComboboxLabelContainer: '',
				reportTypeComboboxInputContainer: '',
				searchButtonContainer: '',
				
				init: function() {
					Report.Detail.View.DataGrid.operatorIdComboboxLabelContainer = $('#dataGridPanel #toolbar #operatorIdComboboxLabel');
					Report.Detail.View.DataGrid.operatorIdComboboxInputContainer = $('#dataGridPanel #toolbar #operatorIdComboboxInput');
                                        Report.Detail.View.DataGrid.areaNumCombogridLabelContainer = $('#dataGridPanel #toolbar #areaNumCombogridLabel');
					Report.Detail.View.DataGrid.areaNumCombogridInputContainer = $('#dataGridPanel #toolbar #areaNumCombogridInput');
					Report.Detail.View.DataGrid.startDateboxLabelContainer = $('#dataGridPanel #toolbar #startDateboxLabel');
					Report.Detail.View.DataGrid.startDateboxInputContainer = $('#dataGridPanel #toolbar #startDateboxInput');
					Report.Detail.View.DataGrid.endDateboxLabelContainer = $('#dataGridPanel #toolbar #endDateboxLabel');
					Report.Detail.View.DataGrid.endDateboxInputContainer = $('#dataGridPanel #toolbar #endDateboxInput');
					Report.Detail.View.DataGrid.reportTypeComboboxLabelContainer = $('#dataGridPanel #toolbar #reportTypeComboboxLabel');
					Report.Detail.View.DataGrid.reportTypeComboboxInputContainer = $('#dataGridPanel #toolbar #reportTypeComboboxInput');
					Report.Detail.View.DataGrid.searchButtonContainer = $('#dataGridPanel #toolbar #searchButton');
					Report.Detail.View.DataGrid.create();
                                        Report.Detail.View.DataGrid.showCurrSelectInfo();
				},
				
				create: function() {
					var width = $(document).width() - 40;
					var height = $(document).height() - 40;
					Report.Detail.View.dataGridPanelContainer.width(width);
					Report.Detail.View.dataGridPanelContainer.height(height);
					Report.Detail.View.dataGridPanelContainer.datagrid({
						toolbar: '#toolbar',
						columns: [[
							{
								field: 'time',
								title: reportDetailViewDataGridColumnTitle1,
								width: 150,
							},
							{
								field: 'register',
								title: reportDetailViewDataGridColumnTitle2,
								width: 80,
							},
							{
								field: 'create',
								title: reportDetailViewDataGridColumnTitle3,
								width: 60,
							},
							{
								field: 'create_rate',
								title: reportDetailViewDataGridColumnTitle4,
								width: 80,
                                                                formatter: function(value, rowData) {
									if(rowData.register === '0') {
										var create_rate = 0;
									}
									else {
										var create_rate = rowData.create / rowData.register * 100;
									}
									
									return create_rate.toFixed(2) + '%';
								}
							},
							{
								field: 'login',
								title: reportDetailViewDataGridColumnTitle5,
								width: 80,
							},
							{
								field: 'loginP',
								title: reportDetailViewDataGridColumnTitle6,
								width: 80,
							},
							{
								field: 'online_max',
								title: reportDetailViewDataGridColumnTitle7,
								width: 80,
							},
							{
								field: 'online_min',
								title: reportDetailViewDataGridColumnTitle8,
								width: 80,
							},
							{
								field: 'online_avg',
								title: reportDetailViewDataGridColumnTitle9,
								width: 80,
							},
							{
								field: 'click_avg',
								title: reportDetailViewDataGridColumnTitle11,
								width: 80,
							},
							{
								field: 'money',
								title: reportDetailViewDataGridColumnTitle12,
								width: 80,
							},
							{
								field: 'money_people',
								title: reportDetailViewDataGridColumnTitle10,
								width: 80,
								
							},
							{
								field: 'arpu',
								title: reportDetailViewDataGridColumnTitle13,
								width: 80,
								
							},
							{
								field: 'pay_rate',
								title: reportDetailViewDataGridColumnTitle14,
								width: 80,
							},
						]],
						loadFilter: Utils.dataGridLoadFilter,
						pagination: true,
						pageSize: 50,
						pageList: [50, 100, 150, 200],
					});
					Component.Combobox.OperatorId.create(
						Report.Detail.View.DataGrid.operatorIdComboboxLabelContainer,
						Report.Detail.View.DataGrid.operatorIdComboboxInputContainer
					);
                                        Component.Combogrid.AreaNum.create(
						Report.Detail.View.DataGrid.areaNumCombogridLabelContainer,
						Report.Detail.View.DataGrid.areaNumCombogridInputContainer
					);
					Component.Datebox.Start.create(
						Report.Detail.View.DataGrid.startDateboxLabelContainer,
						Report.Detail.View.DataGrid.startDateboxInputContainer
					);
					Component.Datebox.End.create(
						Report.Detail.View.DataGrid.endDateboxLabelContainer,
						Report.Detail.View.DataGrid.endDateboxInputContainer
					);
					Component.Combobox.ReportType.create(
						Report.Detail.View.DataGrid.reportTypeComboboxLabelContainer,
						Report.Detail.View.DataGrid.reportTypeComboboxInputContainer
					);
					Report.Detail.View.DataGrid.searchButtonContainer.linkbutton({
						iconCls: 'icon-search',
						text: reportDetailViewDataGridToolbarButtonText1,
					});
					Report.Detail.View.DataGrid.searchButtonContainer.bind(
						'click',
						Report.Detail.View.DataGrid.doSearch
					);
				},
				showCurrSelectInfo:function(){
                                        $.ajax({
                                                url: '/index.php/User/manage/getCurrSelectInfo',
                                        })
                                        .done(function(response) {
                                                if(response.data.operatorId!=false) {
                                                    Report.Detail.View.DataGrid.operatorIdComboboxInputContainer.combobox('select',response.data.operatorId);
                                                    Report.Detail.View.DataGrid.areaNumCombogridInputContainer.combogrid('setValue',response.data.gameAreaId);
                                                    Report.Detail.View.DataGrid.startDateboxInputContainer.datebox('setValue',response.data.startDate);
                                                    Report.Detail.View.DataGrid.endDateboxInputContainer.datebox('setValue',response.data.endDate);
                                                }
                                        })
                                }, 
				doSearch: function() {
                                        var operatorId = Report.Detail.View.DataGrid.operatorIdComboboxInputContainer.combobox('getValue');
					var gameAreaIdArray = Report.Detail.View.DataGrid.areaNumCombogridInputContainer.combogrid('getValues');
					var startDate = Report.Detail.View.DataGrid.startDateboxInputContainer.datebox('getValue');
					var endDate = Report.Detail.View.DataGrid.endDateboxInputContainer.datebox('getValue');
					var reportTypeId = Report.Detail.View.DataGrid.reportTypeComboboxInputContainer.combobox('getValue');
					
					Report.Detail.View.dataGridPanelContainer.datagrid({
						url: '/index.php/Report/detail/getListData',
						queryParams: {
                                                        operatorId:operatorId,
							gameAreaIdString: gameAreaIdArray.toString(),
							startDate: startDate,
							endDate: endDate,
							reportTypeId: reportTypeId,
						}
					});
				},
			},
		},
	},

	Level: {
		init: function() {
			Language.getCurrLanguage();
			Utils.loadJavascriptFile('/application/views/libraries/component/' + language + '.js');
			Utils.loadJavascriptFile('/application/views/libraries/utils/' + language + '.js');
			Utils.loadJavascriptFile('/application/views/module/Report/' + language + '.js');
			Utils.initAjax();
			
			Report.Level.View.init();
		},
		
		View: {
			dataGridPanelContainer: '',
			
			init: function() {
				Report.Level.View.dataGridPanelContainer = $('#dataGridPanel #dataGrid');
				Report.Level.View.DataGrid.init();
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
					Report.Level.View.DataGrid.operatorIdComboboxLabelContainer = $('#dataGridPanel #toolbar #operatorIdComboboxLabel');
					Report.Level.View.DataGrid.operatorIdComboboxInputContainer = $('#dataGridPanel #toolbar #operatorIdComboboxInput');
                                        Report.Level.View.DataGrid.areaNumCombogridLabelContainer = $('#dataGridPanel #toolbar #areaNumCombogridLabel');
					Report.Level.View.DataGrid.areaNumCombogridInputContainer = $('#dataGridPanel #toolbar #areaNumCombogridInput');
                                        Report.Level.View.DataGrid.searchStartDateboxLabelContainer = $('#dataGridPanel #toolbar #searchStartDateboxLabel');
					Report.Level.View.DataGrid.searchStartDateboxInputContainer = $('#dataGridPanel #toolbar #searchStartDateboxInput');
					Report.Level.View.DataGrid.searchEndDateboxLabelContainer = $('#dataGridPanel #toolbar #searchEndDateboxLabel');
					Report.Level.View.DataGrid.searchEndDateboxInputContainer = $('#dataGridPanel #toolbar #searchEndDateboxInput');
					Report.Level.View.DataGrid.searchButtonContainer = $('#dataGridPanel #toolbar #searchButton');
                                        Report.Level.View.DataGrid.exportButtonContainer = $('#dataGridPanel #toolbar #exportButton');
					Report.Level.View.DataGrid.create();
                                        Report.Level.View.DataGrid.showCurrSelectInfo();
				},
				
				create: function() {
					var width = $(document).width() - 40;
					var height = $(document).height() - 40;
					Report.Level.View.dataGridPanelContainer.width(width);
					Report.Level.View.dataGridPanelContainer.height(height);
					Report.Level.View.dataGridPanelContainer.datagrid({
						toolbar: '#toolbar',
						columns: [[
							{
								field: 'level',
								title: reportLevelViewDataGridColumnTitle1,
								width: 100,
							},
							{
								field: 'roleNum',
								title: reportLevelViewDataGridColumnTitle2,
								width: 100,
							},
							{
								field: 'rate',
								title: reportLevelViewDataGridColumnTitle3,
								width: 100,
                                                                sortable: true,
							},
						]],
						loadFilter: Utils.dataGridLoadFilter,
						pagination: true,
						pageSize: 50,
						pageList: [50, 100, 150, 200],
					});
					Component.Combobox.OperatorId.create(
						Report.Level.View.DataGrid.operatorIdComboboxLabelContainer,
						Report.Level.View.DataGrid.operatorIdComboboxInputContainer
					);
                                        Component.Combogrid.AreaNum.create(
						Report.Level.View.DataGrid.areaNumCombogridLabelContainer,
						Report.Level.View.DataGrid.areaNumCombogridInputContainer
					);
					Component.Datebox.Start.create(
						Report.Level.View.DataGrid.searchStartDateboxLabelContainer,
						Report.Level.View.DataGrid.searchStartDateboxInputContainer
					);
                                        Component.Datebox.End.create(
						Report.Level.View.DataGrid.searchEndDateboxLabelContainer,
						Report.Level.View.DataGrid.searchEndDateboxInputContainer
					);
					Report.Level.View.DataGrid.searchButtonContainer.linkbutton({
						iconCls: 'icon-search',
						text: reportLevelViewDataGridToolbarButtonText1,
					});
					Report.Level.View.DataGrid.searchButtonContainer.bind(
						'click',
						Report.Level.View.DataGrid.doSearch
					);
                                        Report.Level.View.DataGrid.exportButtonContainer.linkbutton({
						iconCls: 'icon-search',
						text: exportViewDataGridToolbarButtonText1,
					});
					Report.Level.View.DataGrid.exportButtonContainer.bind(
						'click',
						Report.Level.View.DataGrid.doExport
					);
				},
				
				doSearch: function() {
                                        var operatorId = Report.Level.View.DataGrid.operatorIdComboboxInputContainer.combobox('getValue');
                                        var gameAreaId = Report.Level.View.DataGrid.areaNumCombogridInputContainer.combogrid('getValue');
					var searchStartDate = Report.Level.View.DataGrid.searchStartDateboxInputContainer.datebox('getValue');
                                        var searchEndDate = Report.Level.View.DataGrid.searchEndDateboxInputContainer.datebox('getValue');
					
					Report.Level.View.dataGridPanelContainer.datagrid({
						url: '/index.php/Report/level/getListData',
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
                                                    Report.Level.View.DataGrid.operatorIdComboboxInputContainer.combobox('select',response.data.operatorId);
                                                    Report.Level.View.DataGrid.areaNumCombogridInputContainer.combogrid('setValue',response.data.gameAreaId);
                                                    Report.Level.View.DataGrid.searchStartDateboxInputContainer.datebox('setValue',response.data.startDate);
                                                    Report.Level.View.DataGrid.searchEndDateboxInputContainer.datebox('setValue',response.data.endDate);
                                                }
                                        })
                                }, 
                                doExport: function() {
//                                        var url = "/index.php/Currency/first/export";
                                        var operatorId = Report.Level.View.DataGrid.operatorIdComboboxInputContainer.combobox('getValue');
                                        var gameAreaId = Report.Level.View.DataGrid.areaNumCombogridInputContainer.combogrid('getValues').toString();
                                        var startDate = Report.Level.View.DataGrid.searchStartDateboxInputContainer.datebox('getValue');
                                        var endDate =  Report.Level.View.DataGrid.searchEndDateboxInputContainer.datebox('getValue');
//                                        $.ajax({
//                                              url: url,
//                                              data: {
//                                                    operatorId:operatorId,
//                                                    gameAreaId:gameAreaId,
//                                                    startDate:startDate,
//                                                    endDate:endDate,
//                                              },
//                                              success: function () {
                                                  var downUrl = "/index.php/Report/level/export?operatorId="+ operatorId +"&gameAreaId="+gameAreaId+"&startDate="+startDate+"&endDate="+endDate
                                                  window.location = downUrl;
//                                              }
//                                        });
				},

			},
		},
	},
	Activity: {
		init: function() {
			Language.getCurrLanguage();
			Utils.loadJavascriptFile('/application/views/libraries/component/' + language + '.js');
			Utils.loadJavascriptFile('/application/views/libraries/utils/' + language + '.js');
			Utils.loadJavascriptFile('/application/views/module/Report/' + language + '.js');
			Utils.initAjax();
			
			Report.Activity.View.init();
		},
		
		View: {
			dataGridPanelContainer: '',
			
			init: function() {
				Report.Activity.View.dataGridPanelContainer = $('#dataGridPanel #dataGrid');
				Report.Activity.View.DataGrid.init();
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
					Report.Activity.View.DataGrid.operatorIdComboboxLabelContainer = $('#dataGridPanel #toolbar #operatorIdComboboxLabel');
					Report.Activity.View.DataGrid.operatorIdComboboxInputContainer = $('#dataGridPanel #toolbar #operatorIdComboboxInput');
                                        Report.Activity.View.DataGrid.areaNumCombogridLabelContainer = $('#dataGridPanel #toolbar #areaNumCombogridLabel');
					Report.Activity.View.DataGrid.areaNumCombogridInputContainer = $('#dataGridPanel #toolbar #areaNumCombogridInput');
                                        Report.Activity.View.DataGrid.searchStartDateboxLabelContainer = $('#dataGridPanel #toolbar #searchStartDateboxLabel');
					Report.Activity.View.DataGrid.searchStartDateboxInputContainer = $('#dataGridPanel #toolbar #searchStartDateboxInput');
					Report.Activity.View.DataGrid.searchEndDateboxLabelContainer = $('#dataGridPanel #toolbar #searchEndDateboxLabel');
					Report.Activity.View.DataGrid.searchEndDateboxInputContainer = $('#dataGridPanel #toolbar #searchEndDateboxInput');
					Report.Activity.View.DataGrid.searchButtonContainer = $('#dataGridPanel #toolbar #searchButton');
                                        Report.Activity.View.DataGrid.exportButtonContainer = $('#dataGridPanel #toolbar #exportButton');
					Report.Activity.View.DataGrid.create();
                                        Report.Activity.View.DataGrid.showCurrSelectInfo();
				},
				
				create: function() {
					var width = $(document).width() - 40;
					var height = $(document).height() - 40;
					Report.Activity.View.dataGridPanelContainer.width(width);
					Report.Activity.View.dataGridPanelContainer.height(height);
					Report.Activity.View.dataGridPanelContainer.datagrid({
						toolbar: '#toolbar',
						columns: [[
							{
								field: 'date',
								title: reportActivityViewDataGridColumnTitle1,
								width: 100,
							},
                                                        {
								field: 'pig_one',
								title: reportActivityViewDataGridColumnTitle4,
								width: 100,
							},
							{
								field: 'jxtz_one',
								title: reportActivityViewDataGridColumnTitle5,
								width: 100,
							},
							{
								field: 'first',
								title: reportActivityViewDataGridColumnTitle6,
								width: 100,
							},
                                                        {
								field: 'pig_two',
								title: reportActivityViewDataGridColumnTitle7,
								width: 100,
							},
							{
								field: 'jzfyb',
								title: reportActivityViewDataGridColumnTitle8,
								width: 100,
							},
							{
								field: 'pig_three',
								title: reportActivityViewDataGridColumnTitle9,
								width: 100,
							},
                                                        {
								field: 'syzb',
								title: reportActivityViewDataGridColumnTitle10,
								width: 100,
							},
							{
								field: 'jxtz_two',
								title: reportActivityViewDataGridColumnTitle11,
								width: 100,
							},
							{
								field: 'double_one',
								title: reportActivityViewDataGridColumnTitle12,
								width: 100,
							},
                                                        {
								field: 'double_two',
								title: reportActivityViewDataGridColumnTitle13,
								width: 100,
							},
							{
								field: 'double_three',
								title: reportActivityViewDataGridColumnTitle14,
								width: 100,
							},
						]],
						loadFilter: Utils.dataGridLoadFilter,
						pagination: true,
						pageSize: 50,
						pageList: [50, 100, 150, 200],
					});
					Component.Combobox.OperatorId.create(
						Report.Activity.View.DataGrid.operatorIdComboboxLabelContainer,
						Report.Activity.View.DataGrid.operatorIdComboboxInputContainer
					);
                                        Component.Combogrid.AreaNum.create(
						Report.Activity.View.DataGrid.areaNumCombogridLabelContainer,
						Report.Activity.View.DataGrid.areaNumCombogridInputContainer
					);
					Component.Datebox.Start.create(
						Report.Activity.View.DataGrid.searchStartDateboxLabelContainer,
						Report.Activity.View.DataGrid.searchStartDateboxInputContainer
					);
                                        Component.Datebox.End.create(
						Report.Activity.View.DataGrid.searchEndDateboxLabelContainer,
						Report.Activity.View.DataGrid.searchEndDateboxInputContainer
					);
					Report.Activity.View.DataGrid.searchButtonContainer.linkbutton({
						iconCls: 'icon-search',
						text: reportActivityViewDataGridToolbarButtonText1,
					});
					Report.Activity.View.DataGrid.searchButtonContainer.bind(
						'click',
						Report.Activity.View.DataGrid.doSearch
					);
                                        Report.Activity.View.DataGrid.exportButtonContainer.linkbutton({
						iconCls: 'icon-search',
						text: exportViewDataGridToolbarButtonText1,
					});
					Report.Activity.View.DataGrid.exportButtonContainer.bind(
						'click',
						Report.Activity.View.DataGrid.doExport
					);
				},
				
				doSearch: function() {
                                        var operatorId = Report.Activity.View.DataGrid.operatorIdComboboxInputContainer.combobox('getValue');
                                        var gameAreaId = Report.Activity.View.DataGrid.areaNumCombogridInputContainer.combogrid('getValue');
					var searchStartDate = Report.Activity.View.DataGrid.searchStartDateboxInputContainer.datebox('getValue');
                                        var searchEndDate = Report.Activity.View.DataGrid.searchEndDateboxInputContainer.datebox('getValue');
					
					Report.Activity.View.dataGridPanelContainer.datagrid({
						url: '/index.php/Report/activity/getListData',
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
                                                    Report.Activity.View.DataGrid.operatorIdComboboxInputContainer.combobox('select',response.data.operatorId);
                                                    Report.Activity.View.DataGrid.areaNumCombogridInputContainer.combogrid('setValue',response.data.gameAreaId);
                                                    Report.Activity.View.DataGrid.searchStartDateboxInputContainer.datebox('setValue',response.data.startDate);
                                                    Report.Activity.View.DataGrid.searchEndDateboxInputContainer.datebox('setValue',response.data.endDate);
                                                }
                                        })
                                }, 
                                doExport: function() {
//                                        var url = "/index.php/Currency/first/export";
                                        var operatorId = Report.Activity.View.DataGrid.operatorIdComboboxInputContainer.combobox('getValue');
                                        var gameAreaId = Report.Activity.View.DataGrid.areaNumCombogridInputContainer.combogrid('getValues').toString();
                                        var startDate = Report.Activity.View.DataGrid.searchStartDateboxInputContainer.datebox('getValue');
                                        var endDate =  Report.Activity.View.DataGrid.searchEndDateboxInputContainer.datebox('getValue');
//                                        $.ajax({
//                                              url: url,
//                                              data: {
//                                                    operatorId:operatorId,
//                                                    gameAreaId:gameAreaId,
//                                                    startDate:startDate,
//                                                    endDate:endDate,
//                                              },
//                                              success: function () {
                                                  var downUrl = "/index.php/Report/activity/export?operatorId="+ operatorId +"&gameAreaId="+gameAreaId+"&startDate="+startDate+"&endDate="+endDate
                                                  window.location = downUrl;
//                                              }
//                                        });
				},

			},
		},
	},
	Remain: {
		init: function() {
			Language.getCurrLanguage();
			Utils.loadJavascriptFile('/application/views/libraries/component/' + language + '.js');
			Utils.loadJavascriptFile('/application/views/libraries/utils/' + language + '.js');
			Utils.loadJavascriptFile('/application/views/module/Report/' + language + '.js');
			Utils.initAjax();
			
			Report.Remain.View.init();
		},
		
		View: {
			dataGridPanelContainer: '',
			
			init: function() {
				Report.Remain.View.dataGridPanelContainer = $('#dataGridPanel #dataGrid');
				Report.Remain.View.DataGrid.init();
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
					Report.Remain.View.DataGrid.operatorIdComboboxLabelContainer = $('#dataGridPanel #toolbar #operatorIdComboboxLabel');
					Report.Remain.View.DataGrid.operatorIdComboboxInputContainer = $('#dataGridPanel #toolbar #operatorIdComboboxInput');
                                        Report.Remain.View.DataGrid.areaNumCombogridLabelContainer = $('#dataGridPanel #toolbar #areaNumCombogridLabel');
					Report.Remain.View.DataGrid.areaNumCombogridInputContainer = $('#dataGridPanel #toolbar #areaNumCombogridInput');
                                        Report.Remain.View.DataGrid.searchStartDateboxLabelContainer = $('#dataGridPanel #toolbar #searchStartDateboxLabel');
					Report.Remain.View.DataGrid.searchStartDateboxInputContainer = $('#dataGridPanel #toolbar #searchStartDateboxInput');
					Report.Remain.View.DataGrid.searchEndDateboxLabelContainer = $('#dataGridPanel #toolbar #searchEndDateboxLabel');
					Report.Remain.View.DataGrid.searchEndDateboxInputContainer = $('#dataGridPanel #toolbar #searchEndDateboxInput');
					Report.Remain.View.DataGrid.searchButtonContainer = $('#dataGridPanel #toolbar #searchButton');
                                        Report.Remain.View.DataGrid.exportButtonContainer = $('#dataGridPanel #toolbar #exportButton');
					Report.Remain.View.DataGrid.create();
                                        Report.Remain.View.DataGrid.showCurrSelectInfo();
				},
				
				create: function() {
					var width = $(document).width() - 40;
					var height = $(document).height() - 40;
					Report.Remain.View.dataGridPanelContainer.width(width);
					Report.Remain.View.dataGridPanelContainer.height(height);
					Report.Remain.View.dataGridPanelContainer.datagrid({
						toolbar: '#toolbar',
						columns: [[
							{
								field: 'time',
								title: reportRemainViewDataGridColumnTitle1,
								width: 80,
							},
							{
								field: '5min',
								title: reportRemainViewDataGridColumnTitle2,
								width: 60,
							},
							{
								field: '10min',
								title: reportRemainViewDataGridColumnTitle3,
								width: 100,
							},
							{
								field: '30min',
								title: reportRemainViewDataGridColumnTitle4,
								width: 100,
							},
							{
								field: '1h',
								title: reportRemainViewDataGridColumnTitle5,
								width: 100,
							},
							{
								field: '2h',
								title: reportRemainViewDataGridColumnTitle6,
								width: 100,
							},
							{
								field: '4h',
								title: reportRemainViewDataGridColumnTitle7,
								width: 100,
							},
							{
								field: '6h',
								title: reportRemainViewDataGridColumnTitle8,
								width: 100,
							},
							{
								field: '8h',
								title: reportRemainViewDataGridColumnTitle9,
								width: 100,
							},
							{
								field: 'over8h',
								title: reportRemainViewDataGridColumnTitle10,
								width: 100,
							},
						]],
						loadFilter: Utils.dataGridLoadFilter,
						pagination: true,
						pageSize: 50,
						pageList: [50, 100, 150, 200],
					});
					Component.Combobox.OperatorId.create(
						Report.Remain.View.DataGrid.operatorIdComboboxLabelContainer,
						Report.Remain.View.DataGrid.operatorIdComboboxInputContainer
					);
                                        Component.Combogrid.AreaNum.create(
						Report.Remain.View.DataGrid.areaNumCombogridLabelContainer,
						Report.Remain.View.DataGrid.areaNumCombogridInputContainer
					);
					Component.Datebox.Start.create(
						Report.Remain.View.DataGrid.searchStartDateboxLabelContainer,
						Report.Remain.View.DataGrid.searchStartDateboxInputContainer
					);
                                        Component.Datebox.End.create(
						Report.Remain.View.DataGrid.searchEndDateboxLabelContainer,
						Report.Remain.View.DataGrid.searchEndDateboxInputContainer
					);
					Report.Remain.View.DataGrid.searchButtonContainer.linkbutton({
						iconCls: 'icon-search',
						text: reportLevelViewDataGridToolbarButtonText1,
					});
					Report.Remain.View.DataGrid.searchButtonContainer.bind(
						'click',
						Report.Remain.View.DataGrid.doSearch
					);
                                        Report.Remain.View.DataGrid.exportButtonContainer.linkbutton({
						iconCls: 'icon-search',
						text: exportViewDataGridToolbarButtonText1,
					});
					Report.Remain.View.DataGrid.exportButtonContainer.bind(
						'click',
						Report.Remain.View.DataGrid.doExport
					);
				},
				
				doSearch: function() {
					Report.Remain.View.dataGridPanelContainer.datagrid({
						url: '/index.php/Report/remain/getListData',
						queryParams: {
							operatorId: Report.Remain.View.DataGrid.operatorIdComboboxInputContainer.combobox('getValue'),
                                                        gameAreaId: Report.Remain.View.DataGrid.areaNumCombogridInputContainer.combogrid('getValue'),
                                                        startDate: Report.Remain.View.DataGrid.searchStartDateboxInputContainer.datebox('getValue'),
                                                        endDate:  Report.Remain.View.DataGrid.searchEndDateboxInputContainer.datebox('getValue'),
						}
					});
				},
                                showCurrSelectInfo:function(){
                                        $.ajax({
                                                url: '/index.php/User/manage/getCurrSelectInfo',
                                        })
                                        .done(function(response) {
                                                if(response.data.operatorId!=false) {
                                                    Report.Remain.View.DataGrid.operatorIdComboboxInputContainer.combobox('select',response.data.operatorId);
                                                    Report.Remain.View.DataGrid.areaNumCombogridInputContainer.combogrid('setValue',response.data.gameAreaId);
                                                    Report.Remain.View.DataGrid.searchStartDateboxInputContainer.datebox('setValue',response.data.startDate);
                                                    Report.Remain.View.DataGrid.searchEndDateboxInputContainer.datebox('setValue',response.data.endDate);
                                                }
                                        })
                                }, 
                                doExport: function() {
//                                        var url = "/index.php/Currency/first/export";
                                        var operatorId = Report.Remain.View.DataGrid.operatorIdComboboxInputContainer.combobox('getValue');
                                        var gameAreaId = Report.Remain.View.DataGrid.areaNumCombogridInputContainer.combogrid('getValues').toString();
                                        var startDate = Report.Remain.View.DataGrid.searchStartDateboxInputContainer.datebox('getValue');
                                        var endDate =  Report.Remain.View.DataGrid.searchEndDateboxInputContainer.datebox('getValue');
//                                        $.ajax({
//                                              url: url,
//                                              data: {
//                                                    operatorId:operatorId,
//                                                    gameAreaId:gameAreaId,
//                                                    startDate:startDate,
//                                                    endDate:endDate,
//                                              },
//                                              success: function () {
                                                  var downUrl = "/index.php/Report/remain/export?operatorId="+ operatorId +"&gameAreaId="+gameAreaId+"&startDate="+startDate+"&endDate="+endDate
                                                  window.location = downUrl;
//                                              }
//                                        });
				},
			},
		},
	},
        Task: {
		init: function() {
			Language.getCurrLanguage();
			Utils.loadJavascriptFile('/application/views/libraries/component/' + language + '.js');
			Utils.loadJavascriptFile('/application/views/libraries/utils/' + language + '.js');
			Utils.loadJavascriptFile('/application/views/module/Report/' + language + '.js');
			Utils.initAjax();
			
			Report.Task.View.init();
		},
		
		View: {
			dataGridPanelContainer: '',
			
			init: function() {
				Report.Task.View.dataGridPanelContainer = $('#dataGridPanel #dataGrid');
				Report.Task.View.DataGrid.init();
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
					Report.Task.View.DataGrid.operatorIdComboboxLabelContainer = $('#dataGridPanel #toolbar #operatorIdComboboxLabel');
					Report.Task.View.DataGrid.operatorIdComboboxInputContainer = $('#dataGridPanel #toolbar #operatorIdComboboxInput');
                                        Report.Task.View.DataGrid.areaNumCombogridLabelContainer = $('#dataGridPanel #toolbar #areaNumCombogridLabel');
					Report.Task.View.DataGrid.areaNumCombogridInputContainer = $('#dataGridPanel #toolbar #areaNumCombogridInput');
                                        Report.Task.View.DataGrid.searchStartDateboxLabelContainer = $('#dataGridPanel #toolbar #searchStartDateboxLabel');
					Report.Task.View.DataGrid.searchStartDateboxInputContainer = $('#dataGridPanel #toolbar #searchStartDateboxInput');
					Report.Task.View.DataGrid.searchEndDateboxLabelContainer = $('#dataGridPanel #toolbar #searchEndDateboxLabel');
					Report.Task.View.DataGrid.searchEndDateboxInputContainer = $('#dataGridPanel #toolbar #searchEndDateboxInput');
					Report.Task.View.DataGrid.searchButtonContainer = $('#dataGridPanel #toolbar #searchButton');
                                        Report.Task.View.DataGrid.exportButtonContainer = $('#dataGridPanel #toolbar #exportButton');
					Report.Task.View.DataGrid.create();
                                        Report.Task.View.DataGrid.showCurrSelectInfo();
				},
				
				create: function() {
					var width = $(document).width() - 40;
					var height = $(document).height() - 40;
					Report.Task.View.dataGridPanelContainer.width(width);
					Report.Task.View.dataGridPanelContainer.height(height);
					Report.Task.View.dataGridPanelContainer.datagrid({
						toolbar: '#toolbar',
						columns: [[
							{
								field: 'tid',
								title: reportTaskViewDataGridColumnTitle1,
								width: 100,
							},
							{
								field: 'roleNum',
								title: reportTaskViewDataGridColumnTitle2,
								width: 100,
							},
							{
								field: 'rate',
								title: reportTaskViewDataGridColumnTitle3,
								width: 100,
                                                                sortable: true,
							},
                                                        {
								field: 'taskName',
								title: reportTaskViewDataGridColumnTitle4,
								width: 100,
							},
                                                        {
								field: 'level',
								title: reportTaskViewDataGridColumnTitle5,
								width: 100,
                                                                sortable: true,
							},
                                                        {
								field: 'target',
								title: reportTaskViewDataGridColumnTitle6,
								width: 100,
							},
						]],
						loadFilter: Utils.dataGridLoadFilter,
						pagination: true,
						pageSize: 50,
						pageList: [50, 100, 150, 200],
                                                
					});
					Component.Combobox.OperatorId.create(
						Report.Task.View.DataGrid.operatorIdComboboxLabelContainer,
						Report.Task.View.DataGrid.operatorIdComboboxInputContainer
					);
                                        Component.Combogrid.AreaNum.create(
						Report.Task.View.DataGrid.areaNumCombogridLabelContainer,
						Report.Task.View.DataGrid.areaNumCombogridInputContainer
					);
					Component.Datebox.Start.create(
						Report.Task.View.DataGrid.searchStartDateboxLabelContainer,
						Report.Task.View.DataGrid.searchStartDateboxInputContainer
					);
                                        Component.Datebox.End.create(
						Report.Task.View.DataGrid.searchEndDateboxLabelContainer,
						Report.Task.View.DataGrid.searchEndDateboxInputContainer
					);
					Report.Task.View.DataGrid.searchButtonContainer.linkbutton({
						iconCls: 'icon-search',
						text: reportLevelViewDataGridToolbarButtonText1,
					});
					Report.Task.View.DataGrid.searchButtonContainer.bind(
						'click',
						Report.Task.View.DataGrid.doSearch
					);
                                        Report.Task.View.DataGrid.exportButtonContainer.linkbutton({
						iconCls: 'icon-search',
						text: exportViewDataGridToolbarButtonText1,
					});
					Report.Task.View.DataGrid.exportButtonContainer.bind(
						'click',
						Report.Task.View.DataGrid.doExport
					);

				},
				
				doSearch: function() {
                                        var operatorId = Report.Task.View.DataGrid.operatorIdComboboxInputContainer.combobox('getValue');
                                        var gameAreaId = Report.Task.View.DataGrid.areaNumCombogridInputContainer.combogrid('getValue');
					var searchStartDate = Report.Task.View.DataGrid.searchStartDateboxInputContainer.datebox('getValue');
                                        var searchEndDate = Report.Task.View.DataGrid.searchEndDateboxInputContainer.datebox('getValue');
					
					Report.Task.View.dataGridPanelContainer.datagrid({
						url: '/index.php/Report/task/getListData',
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
                                                    Report.Task.View.DataGrid.operatorIdComboboxInputContainer.combobox('select',response.data.operatorId);
                                                    Report.Task.View.DataGrid.areaNumCombogridInputContainer.combogrid('setValue',response.data.gameAreaId);
                                                    Report.Task.View.DataGrid.searchStartDateboxInputContainer.datebox('setValue',response.data.startDate);
                                                    Report.Task.View.DataGrid.searchEndDateboxInputContainer.datebox('setValue',response.data.endDate);
                                                }
                                        })
                                }, 
                                doExport: function() {
//                                        var url = "/index.php/Currency/first/export";
                                        var operatorId = Report.Task.View.DataGrid.operatorIdComboboxInputContainer.combobox('getValue');
                                        var gameAreaId = Report.Task.View.DataGrid.areaNumCombogridInputContainer.combogrid('getValues').toString();
                                        var startDate = Report.Task.View.DataGrid.searchStartDateboxInputContainer.datebox('getValue');
                                        var endDate =  Report.Task.View.DataGrid.searchEndDateboxInputContainer.datebox('getValue');
//                                        $.ajax({
//                                              url: url,
//                                              data: {
//                                                    operatorId:operatorId,
//                                                    gameAreaId:gameAreaId,
//                                                    startDate:startDate,
//                                                    endDate:endDate,
//                                              },
//                                              success: function () {
                                                  var downUrl = "/index.php/Report/task/export?operatorId="+ operatorId +"&gameAreaId="+gameAreaId+"&startDate="+startDate+"&endDate="+endDate
                                                  window.location = downUrl;
//                                              }
//                                        });
				},
			},	
		},
	},
        Register: {
		init: function() {
			Language.getCurrLanguage();
			Utils.loadJavascriptFile('/application/views/libraries/component/' + language + '.js');
			Utils.loadJavascriptFile('/application/views/libraries/utils/' + language + '.js');
			Utils.loadJavascriptFile('/application/views/module/Report/' + language + '.js');
			Utils.initAjax();
			
			Report.Register.View.init();
		},
		
		View: {
			dataGridPanelContainer: '',
			
			init: function() {
				Report.Register.View.dataGridPanelContainer = $('#dataGridPanel #dataGrid');
				Report.Register.View.DataGrid.init();
			},
			
			DataGrid: {
				operatorIdComboboxLabelContainer: '',
				operatorIdComboboxInputContainer: '',
                                areaNumCombogridLabelContainer: '',
                                areaNumCombogridInputContainer: '',
				startDateboxLabelContainer: '',
				startDateboxInputContainer: '',
				endDateboxLabelContainer: '',
				endDateboxInputContainer: '',
				reportTypeComboboxLabelContainer: '',
				reportTypeComboboxInputContainer: '',
				searchButtonContainer: '',
                                exportButtonContainer: '',
				
				init: function() {
					Report.Register.View.DataGrid.operatorIdComboboxLabelContainer = $('#dataGridPanel #toolbar #operatorIdComboboxLabel');
					Report.Register.View.DataGrid.operatorIdComboboxInputContainer = $('#dataGridPanel #toolbar #operatorIdComboboxInput');
                                        Report.Register.View.DataGrid.areaNumCombogridLabelContainer = $('#dataGridPanel #toolbar #areaNumCombogridLabel');
					Report.Register.View.DataGrid.areaNumCombogridInputContainer = $('#dataGridPanel #toolbar #areaNumCombogridInput');
					Report.Register.View.DataGrid.startDateboxLabelContainer = $('#dataGridPanel #toolbar #startDateboxLabel');
					Report.Register.View.DataGrid.startDateboxInputContainer = $('#dataGridPanel #toolbar #startDateboxInput');
					Report.Register.View.DataGrid.endDateboxLabelContainer = $('#dataGridPanel #toolbar #endDateboxLabel');
					Report.Register.View.DataGrid.endDateboxInputContainer = $('#dataGridPanel #toolbar #endDateboxInput');
					Report.Register.View.DataGrid.reportTypeComboboxLabelContainer = $('#dataGridPanel #toolbar #reportTypeComboboxLabel');
					Report.Register.View.DataGrid.reportTypeComboboxInputContainer = $('#dataGridPanel #toolbar #reportTypeComboboxInput');
					Report.Register.View.DataGrid.searchButtonContainer = $('#dataGridPanel #toolbar #searchButton');
                                        Report.Register.View.DataGrid.exportButtonContainer = $('#dataGridPanel #toolbar #exportButton');
					Report.Register.View.DataGrid.create();
                                        Report.Register.View.DataGrid.showCurrSelectInfo();
				},
				
				create: function() {
					var width = $(document).width() - 40;
					var height = $(document).height() - 40;
					Report.Register.View.dataGridPanelContainer.width(width);
					Report.Register.View.dataGridPanelContainer.height(height);
					Report.Register.View.dataGridPanelContainer.datagrid({
						toolbar: '#toolbar',
						columns: [[
							{
								field: 'time',
								title: reportDetailViewDataGridColumnTitle1,
								width: 150,
							},
							{
								field: 'regist_new',
								title: reportDetailViewDataGridColumnTitle2,
								width: 80,
							},
                                                        {
								field: 'login_new',
								title: reportDetailViewDataGridColumnTitle5,
								width: 80,
							},
							{
								field: 'create_new',
								title: reportRegisterViewDataGridColumnTitle3,
								width: 60,
							},
							{
								field: 'enter_new',
								title: reportRegisterViewDataGridColumnTitle1,
								width: 80,
							},
                                                        {
								field: 'rate',
								title: reportRegisterViewDataGridColumnTitle2,
								width: 80,
							},
						]],
                                                onLoadSuccess: function() {
                                                    Report.Register.View.Chart.Line.create();
						},
						loadFilter: Utils.dataGridLoadFilter,
						pagination: true,
						pageSize: 15,
						pageList: [15, 30, 45, 60, 75, 90, 105],
					});
					Component.Combobox.OperatorId.create(
						Report.Register.View.DataGrid.operatorIdComboboxLabelContainer,
						Report.Register.View.DataGrid.operatorIdComboboxInputContainer
					);
                                        Component.Combogrid.AreaNum.create(
						Report.Register.View.DataGrid.areaNumCombogridLabelContainer,
						Report.Register.View.DataGrid.areaNumCombogridInputContainer
					);
					Component.Datebox.Start.create(
						Report.Register.View.DataGrid.startDateboxLabelContainer,
						Report.Register.View.DataGrid.startDateboxInputContainer
					);
					Component.Datebox.End.create(
						Report.Register.View.DataGrid.endDateboxLabelContainer,
						Report.Register.View.DataGrid.endDateboxInputContainer
					);
					Component.Combobox.ReportType.create(
						Report.Register.View.DataGrid.reportTypeComboboxLabelContainer,
						Report.Register.View.DataGrid.reportTypeComboboxInputContainer
					);
					Report.Register.View.DataGrid.searchButtonContainer.linkbutton({
						iconCls: 'icon-search',
						text: reportDetailViewDataGridToolbarButtonText1,
					});
					Report.Register.View.DataGrid.searchButtonContainer.bind(
						'click',
						Report.Register.View.DataGrid.doSearch
					);
                                        Report.Register.View.DataGrid.exportButtonContainer.linkbutton({
						iconCls: 'icon-search',
						text: exportViewDataGridToolbarButtonText1,
					});
					Report.Register.View.DataGrid.exportButtonContainer.bind(
						'click',
						Report.Register.View.DataGrid.doExport
					);
				},
				
				doSearch: function() {
                                        var operatorId = Report.Register.View.DataGrid.operatorIdComboboxInputContainer.combobox('getValue');
					var gameAreaIdArray = Report.Register.View.DataGrid.areaNumCombogridInputContainer.combogrid('getValues');
					var startDate = Report.Register.View.DataGrid.startDateboxInputContainer.datebox('getValue');
					var endDate = Report.Register.View.DataGrid.endDateboxInputContainer.datebox('getValue');
					var reportTypeId = Report.Register.View.DataGrid.reportTypeComboboxInputContainer.combobox('getValue');
					
					Report.Register.View.dataGridPanelContainer.datagrid({
						url: '/index.php/Report/register/getListData',
						queryParams: {
                                                        operatorId:operatorId,
							gameAreaIdString: gameAreaIdArray.toString(),
							startDate: startDate,
							endDate: endDate,
							reportTypeId: reportTypeId,
						}
					});
				},
                                showCurrSelectInfo:function(){
                                        $.ajax({
                                                url: '/index.php/User/manage/getCurrSelectInfo',
                                        })
                                        .done(function(response) {
                                                if(response.data.operatorId!=false) {
                                                    Report.Register.View.DataGrid.operatorIdComboboxInputContainer.combobox('select',response.data.operatorId);
                                                    Report.Register.View.DataGrid.areaNumCombogridInputContainer.combogrid('setValue',response.data.gameAreaId);
                                                    Report.Register.View.DataGrid.startDateboxInputContainer.datebox('setValue',response.data.startDate);
                                                    Report.Register.View.DataGrid.endDateboxInputContainer.datebox('setValue',response.data.endDate);
                                                }
                                        })
                                }, 
                                doExport: function() {
//                                        var url = "/index.php/Currency/first/export";
                                        var operatorId = Report.Register.View.DataGrid.operatorIdComboboxInputContainer.combobox('getValue');
                                        var gameAreaId = Report.Register.View.DataGrid.areaNumCombogridInputContainer.combogrid('getValues').toString();
                                        var startDate = Report.Register.View.DataGrid.startDateboxInputContainer.datebox('getValue');
                                        var endDate =  Report.Register.View.DataGrid.endDateboxInputContainer.datebox('getValue');
                                        var reportTypeId = Report.Register.View.DataGrid.reportTypeComboboxInputContainer.combobox('getValue');
                                        
//                                        $.ajax({
//                                              url: url,
//                                              data: {
//                                                    operatorId:operatorId,
//                                                    gameAreaId:gameAreaId,
//                                                    startDate:startDate,
//                                                    endDate:endDate,
//                                              },
//                                              success: function () {
                                                  var downUrl = "/index.php/Report/register/export?operatorId="+ operatorId +"&gameAreaId="+gameAreaId+"&startDate="+startDate+"&endDate="+endDate+"&reportTypeId="+reportTypeId
                                                  window.location = downUrl;
//                                              }
//                                        });
				},
			},
                        Chart: {
                                    Line: {
                                            create: function() {
                                                    var data = Report.Register.View.dataGridPanelContainer.datagrid('getData');
                                                    var chartData = [];
                                                    for(index = 0; index < data.rows.length; index++) {
                                                            tmp = [];
                                                            tmp.push(data.rows[index].time);
                                                            tmp.push(data.rows[index].enter_new);
                                                            chartData.push(tmp);
                                                    }

                                                    var data = [chartData];
//                                                    var xrows= [] ;
//                                                    for(i = 0; i< chartData.length; i++){
//                                                        xrows.push(chartData[i][0]);
//                                                    }
                                                    var options = {
                                                            axes:{  
                                                                xaxis:{  
                                                                    numberTicks: chartData.length,
								    renderer: $.jqplot.DateAxisRenderer,
                                                                    tickOptions:{ 
                                                                            fontSize:'8px', 
                                                                            formatString: '%y/%m/%d %H:%M', 
                                                                            showMark: false, 
                                                                            fontFamily:'Helvetica' 
                                                                    } 
                                                                },  
                                                                yaxis: {  
                                                                    min: 0, 
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
                                },
		},
	},
        Stay: {
		init: function() {
			Language.getCurrLanguage();
			Utils.loadJavascriptFile('/application/views/libraries/component/' + language + '.js');
			Utils.loadJavascriptFile('/application/views/libraries/utils/' + language + '.js');
			Utils.loadJavascriptFile('/application/views/module/Report/' + language + '.js');
			Utils.initAjax();
			
			Report.Stay.View.init();
		},
		
		View: {
			dataGridPanelContainer: '',
			
			init: function() {
				Report.Stay.View.dataGridPanelContainer = $('#dataGridPanel #dataGrid');
				Report.Stay.View.DataGrid.init();
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
					Report.Stay.View.DataGrid.operatorIdComboboxLabelContainer = $('#dataGridPanel #toolbar #operatorIdComboboxLabel');
					Report.Stay.View.DataGrid.operatorIdComboboxInputContainer = $('#dataGridPanel #toolbar #operatorIdComboboxInput');
                                        Report.Stay.View.DataGrid.areaNumCombogridLabelContainer = $('#dataGridPanel #toolbar #areaNumCombogridLabel');
					Report.Stay.View.DataGrid.areaNumCombogridInputContainer = $('#dataGridPanel #toolbar #areaNumCombogridInput');
                                        Report.Stay.View.DataGrid.searchStartDateboxLabelContainer = $('#dataGridPanel #toolbar #searchStartDateboxLabel');
					Report.Stay.View.DataGrid.searchStartDateboxInputContainer = $('#dataGridPanel #toolbar #searchStartDateboxInput');
					Report.Stay.View.DataGrid.searchEndDateboxLabelContainer = $('#dataGridPanel #toolbar #searchEndDateboxLabel');
					Report.Stay.View.DataGrid.searchEndDateboxInputContainer = $('#dataGridPanel #toolbar #searchEndDateboxInput');
					Report.Stay.View.DataGrid.searchButtonContainer = $('#dataGridPanel #toolbar #searchButton');
                                        Report.Stay.View.DataGrid.exportButtonContainer = $('#dataGridPanel #toolbar #exportButton');
					Report.Stay.View.DataGrid.create();
                                        Report.Stay.View.DataGrid.showCurrSelectInfo();
				},
				
				create: function() {
					var width = $(document).width() - 40;
					var height = $(document).height() - 40;
					Report.Stay.View.dataGridPanelContainer.width(width);
					Report.Stay.View.dataGridPanelContainer.height(height);
					Report.Stay.View.dataGridPanelContainer.datagrid({
						toolbar: '#toolbar',
						columns: [[
							{
								field: 'time',
								title: reportStayViewDataGridColumnTitle1,
								width: 80,
							},
							{
								field: 'regist_new',
								title: reportStayViewDataGridColumnTitle2,
								width: 60,
							},
                                                        {
								field: 'day1',
								title: reportStayViewDataGridColumnTitle17,
								width: 100,
							},
							{
								field: 'day2',
								title: reportStayViewDataGridColumnTitle3,
								width: 100,
							},
							{
								field: 'day3',
								title: reportStayViewDataGridColumnTitle4,
								width: 100,
							},
							{
								field: 'day4',
								title: reportStayViewDataGridColumnTitle5,
								width: 100,
							},
							{
								field: 'day5',
								title: reportStayViewDataGridColumnTitle6,
								width: 100,
							},
							{
								field: 'day6',
								title: reportStayViewDataGridColumnTitle7,
								width: 100,
							},
							{
								field: 'day7',
								title: reportStayViewDataGridColumnTitle8,
								width: 100,
							},
							{
								field: 'day8',
								title: reportStayViewDataGridColumnTitle9,
								width: 100,
							},
							{
								field: 'day9',
								title: reportStayViewDataGridColumnTitle10,
								width: 100,
							},
                                                        {
								field: 'day10',
								title: reportStayViewDataGridColumnTitle11,
								width: 100,
							},
							{
								field: 'day11',
								title: reportStayViewDataGridColumnTitle12,
								width: 100,
							},
							{
								field: 'day12',
								title: reportStayViewDataGridColumnTitle13,
								width: 100,
							},
                                                        {
								field: 'day13',
								title: reportStayViewDataGridColumnTitle14,
								width: 100,
							},
							{
								field: 'day14',
								title: reportStayViewDataGridColumnTitle15,
								width: 100,
							},
							{
								field: 'day30',
								title: reportStayViewDataGridColumnTitle16,
								width: 100,
							},
						]],
						loadFilter: Utils.dataGridLoadFilter,
						pagination: true,
						pageSize: 50,
						pageList: [50, 100, 150, 200],
					});
					Component.Combobox.OperatorId.create(
						Report.Stay.View.DataGrid.operatorIdComboboxLabelContainer,
						Report.Stay.View.DataGrid.operatorIdComboboxInputContainer
					);
                                        Component.Combogrid.AreaNum.create(
						Report.Stay.View.DataGrid.areaNumCombogridLabelContainer,
						Report.Stay.View.DataGrid.areaNumCombogridInputContainer
					);
					Component.Datebox.Start.create(
						Report.Stay.View.DataGrid.searchStartDateboxLabelContainer,
						Report.Stay.View.DataGrid.searchStartDateboxInputContainer
					);
                                        Component.Datebox.End.create(
						Report.Stay.View.DataGrid.searchEndDateboxLabelContainer,
						Report.Stay.View.DataGrid.searchEndDateboxInputContainer
					);
					Report.Stay.View.DataGrid.searchButtonContainer.linkbutton({
						iconCls: 'icon-search',
						text: reportLevelViewDataGridToolbarButtonText1,
					});
					Report.Stay.View.DataGrid.searchButtonContainer.bind(
						'click',
						Report.Stay.View.DataGrid.doSearch
					);
                                        Report.Stay.View.DataGrid.exportButtonContainer.linkbutton({
						iconCls: 'icon-search',
						text: exportViewDataGridToolbarButtonText1,
					});
					Report.Stay.View.DataGrid.exportButtonContainer.bind(
						'click',
						Report.Stay.View.DataGrid.doExport
					);

				},
				showCurrSelectInfo:function(){
                                        $.ajax({
                                                url: '/index.php/User/manage/getCurrSelectInfo',
                                        })
                                        .done(function(response) {
                                                if(response.data.operatorId!=false) {
                                                    Report.Stay.View.DataGrid.operatorIdComboboxInputContainer.combobox('select',response.data.operatorId);
                                                    Report.Stay.View.DataGrid.areaNumCombogridInputContainer.combogrid('setValue',response.data.gameAreaId);
                                                    Report.Stay.View.DataGrid.searchStartDateboxInputContainer.datebox('setValue',response.data.startDate);
                                                    Report.Stay.View.DataGrid.searchEndDateboxInputContainer.datebox('setValue',response.data.endDate);
                                                }
                                        })
                                }, 
				doSearch: function() {
					Report.Stay.View.dataGridPanelContainer.datagrid({
						url: '/index.php/Report/stay/getListData',
						queryParams: {
							operatorId: Report.Stay.View.DataGrid.operatorIdComboboxInputContainer.combobox('getValue'),
                                                        gameAreaId: Report.Stay.View.DataGrid.areaNumCombogridInputContainer.combogrid('getValue'),
                                                        startDate: Report.Stay.View.DataGrid.searchStartDateboxInputContainer.datebox('getValue'),
                                                        endDate:  Report.Stay.View.DataGrid.searchEndDateboxInputContainer.datebox('getValue'),
						}
					});
				},
                                doExport: function() {
//                                        var url = "/index.php/Currency/first/export";
                                        var operatorId = Report.Stay.View.DataGrid.operatorIdComboboxInputContainer.combobox('getValue');
                                        var gameAreaId = Report.Stay.View.DataGrid.areaNumCombogridInputContainer.combogrid('getValues').toString();
                                        var startDate = Report.Stay.View.DataGrid.searchStartDateboxInputContainer.datebox('getValue');
                                        var endDate =  Report.Stay.View.DataGrid.searchEndDateboxInputContainer.datebox('getValue');
//                                        $.ajax({
//                                              url: url,
//                                              data: {
//                                                    operatorId:operatorId,
//                                                    gameAreaId:gameAreaId,
//                                                    startDate:startDate,
//                                                    endDate:endDate,
//                                              },
//                                              success: function () {
                                                  var downUrl = "/index.php/Report/stay/export?operatorId="+ operatorId +"&gameAreaId="+gameAreaId+"&startDate="+startDate+"&endDate="+endDate
                                                  window.location = downUrl;
//                                              }
//                                        });
				},

			},
		},
	},
        Fblog: {
		init: function() {
			Language.getCurrLanguage();
			Utils.loadJavascriptFile('/application/views/libraries/component/' + language + '.js');
			Utils.loadJavascriptFile('/application/views/libraries/utils/' + language + '.js');
			Utils.loadJavascriptFile('/application/views/module/Report/' + language + '.js');
			Utils.initAjax();
			
			Report.Fblog.View.init();
		},
		
		View: {
			dataGridPanelContainer: '',
			
			init: function() {
				Report.Fblog.View.dataGridPanelContainer = $('#dataGridPanel #dataGrid');
				Report.Fblog.View.DataGrid.init();
			},
			
			DataGrid: {
				operatorIdComboboxLabelContainer: '',
				operatorIdComboboxInputContainer: '',
                                areaNumCombogridLabelContainer: '',
                                areaNumCombogridInputContainer: '',
				searchButtonContainer: '',
				
				init: function() {
					Report.Fblog.View.DataGrid.operatorIdComboboxLabelContainer = $('#dataGridPanel #toolbar #operatorIdComboboxLabel');
					Report.Fblog.View.DataGrid.operatorIdComboboxInputContainer = $('#dataGridPanel #toolbar #operatorIdComboboxInput');
                                        Report.Fblog.View.DataGrid.areaNumCombogridLabelContainer = $('#dataGridPanel #toolbar #areaNumCombogridLabel');
					Report.Fblog.View.DataGrid.areaNumCombogridInputContainer = $('#dataGridPanel #toolbar #areaNumCombogridInput');
					Report.Fblog.View.DataGrid.searchButtonContainer = $('#dataGridPanel #toolbar #searchButton');
					Report.Fblog.View.DataGrid.create();
                                        Report.Fblog.View.DataGrid.showCurrSelectInfo();
				},
				
				create: function() {
					var width = $(document).width() - 40;
					var height = $(document).height() - 40;
					Report.Fblog.View.dataGridPanelContainer.width(width);
					Report.Fblog.View.dataGridPanelContainer.height(height);
					Report.Fblog.View.dataGridPanelContainer.datagrid({
						idField: "id",
						toolbar: '#toolbar',
						columns: [[
							{
								field: 'id',
								title: reportFblogViewDataGridColumnTitle1,
								width: 100,
							},
							{
								field: 'name',
								title: reportFblogViewDataGridColumnTitle2,
								width: 100,
							},
							{
								field: 'did',
								title: reportFblogViewDataGridColumnTitle3,
								width: 150,
							},
							{
								field: 'type',
								title: reportFblogViewDataGridColumnTitle4,
								width: 100,
							},
                                                        {
								field: 'level',
								title: reportFblogViewDataGridColumnTitle5,
								width: 100,
							},
                                                        {
								field: 'state',
								title: reportFblogViewDataGridColumnTitle6,
								width: 100,
                                                                formatter: function(value) {
									if(value === '0') {
										return fbStateValue1;
									}
									else if(value === '1') {
										return fbStateValue2;
									}
                                                                        else if(value === '2') {
										return fbStateValue3;
									}
                                                                }
							},
                                                        {
								field: 'start_time',
								title: reportFblogViewDataGridColumnTitle7,
								width: 100,
							},
                                                        {
								field: 'finish_time',
								title: reportFblogViewDataGridColumnTitle8,
								width: 100,
							},
						]],
						loadFilter: Utils.dataGridLoadFilter,
                                                singleSelect: true,
						pagination: true,
						pageSize: 50,
						pageList: [50, 100, 150, 200],
					});
					Component.Combobox.OperatorId.create(
						Report.Fblog.View.DataGrid.operatorIdComboboxLabelContainer,
						Report.Fblog.View.DataGrid.operatorIdComboboxInputContainer
					);
                                        Component.Combogrid.AreaNum.create(
						Report.Fblog.View.DataGrid.areaNumCombogridLabelContainer,
						Report.Fblog.View.DataGrid.areaNumCombogridInputContainer
					);
					Report.Fblog.View.DataGrid.searchButtonContainer.linkbutton({
						iconCls: 'icon-search',
						text: reportActivityViewDataGridToolbarButtonText1,
					});
					Report.Fblog.View.DataGrid.searchButtonContainer.bind(
						'click',
						Report.Fblog.View.DataGrid.doSearch
					);
				},
				showCurrSelectInfo:function(){
                                        $.ajax({
                                                url: '/index.php/User/manage/getCurrSelectInfo',
                                        })
                                        .done(function(response) {
                                                if(response.data.operatorId!=false) {
                                                    Report.Fblog.View.DataGrid.operatorIdComboboxInputContainer.combobox('select',response.data.operatorId);
                                                    Report.Fblog.View.DataGrid.areaNumCombogridInputContainer.combogrid('setValue',response.data.gameAreaId);
                                                }
                                        })
                                }, 
				doSearch: function() {
					Report.Fblog.View.dataGridPanelContainer.datagrid({
						url: '/index.php/Report/fblog/getListData',
						queryParams: {
							operatorId: Report.Fblog.View.DataGrid.operatorIdComboboxInputContainer.combobox('getValue'),
                                                        gameAreaId: Report.Fblog.View.DataGrid.areaNumCombogridInputContainer.combogrid('getValues').toString(),
						}
					});
				},
                                
			},
		},
	},
        LogReport:{
                init: function() {
			Language.getCurrLanguage();
			Utils.loadJavascriptFile('/application/views/libraries/component/' + language + '.js');
			Utils.loadJavascriptFile('/application/views/libraries/utils/' + language + '.js');
			Utils.loadJavascriptFile('/application/views/module/Report/' + language + '.js');
			Utils.initAjax();
			
			Report.LogReport.View.init();
		},
		
		View: {
			dataGridPanelContainer: '',
			
			init: function() {
				Report.LogReport.View.dataGridPanelContainer = $('#dataGridPanel #dataGrid');
				Report.LogReport.View.DataGrid.init();
			},
			
			DataGrid: {
				operatorIdComboboxLabelContainer: '',
				operatorIdComboboxInputContainer: '',
                                areaNumCombogridLabelContainer: '',
                                areaNumCombogridInputContainer: '',
				startDateboxLabelContainer: '',
				startDateboxInputContainer: '',
				endDateboxLabelContainer: '',
				endDateboxInputContainer: '',
                                pfComboboxLabelContainer: '',
                                pfComboboxInputContainer: '',
				searchButtonContainer: '',
                                exportButtonContainer: '',
				
				init: function() {
					Report.LogReport.View.DataGrid.operatorIdComboboxLabelContainer = $('#dataGridPanel #toolbar #operatorIdComboboxLabel');
					Report.LogReport.View.DataGrid.operatorIdComboboxInputContainer = $('#dataGridPanel #toolbar #operatorIdComboboxInput');
                                        Report.LogReport.View.DataGrid.areaNumCombogridLabelContainer = $('#dataGridPanel #toolbar #areaNumCombogridLabel');
					Report.LogReport.View.DataGrid.areaNumCombogridInputContainer = $('#dataGridPanel #toolbar #areaNumCombogridInput');
					Report.LogReport.View.DataGrid.startDateboxLabelContainer = $('#dataGridPanel #toolbar #startDateboxLabel');
					Report.LogReport.View.DataGrid.startDateboxInputContainer = $('#dataGridPanel #toolbar #startDateboxInput');
					Report.LogReport.View.DataGrid.endDateboxLabelContainer = $('#dataGridPanel #toolbar #endDateboxLabel');
					Report.LogReport.View.DataGrid.endDateboxInputContainer = $('#dataGridPanel #toolbar #endDateboxInput');
                                        Report.LogReport.View.DataGrid.pfComboboxLabelContainer = $('#dataGridPanel #toolbar #pfComboboxLabel');
					Report.LogReport.View.DataGrid.pfComboboxInputContainer = $('#dataGridPanel #toolbar #pfComboboxInput');
					Report.LogReport.View.DataGrid.searchButtonContainer = $('#dataGridPanel #toolbar #searchButton');
                                        Report.LogReport.View.DataGrid.exportButtonContainer = $('#dataGridPanel #toolbar #exportButton');
					Report.LogReport.View.DataGrid.create();
                                        Report.LogReport.View.DataGrid.showCurrSelectInfo();
				},
				
				create: function() {
					var width = $(document).width() - 40;
					var height = $(document).height() - 40;
					Report.LogReport.View.dataGridPanelContainer.width(width);
					Report.LogReport.View.dataGridPanelContainer.height(height);
					Report.LogReport.View.dataGridPanelContainer.datagrid({
						toolbar: '#toolbar',
						columns: [[
							{
								field: 'time',
								title: reportLogReportViewDataGridColumnTitle1,
								width: 150,
							},
							{
								field: 'pf',
								title: reportLogReportViewDataGridColumnTitle2,
								width: 80,
							},
                                                        {
								field: 'sid',
								title: reportLogReportViewDataGridColumnTitle3,
								width: 80,
							},
							{
								field: 'regist_new',
								title: reportLogReportViewDataGridColumnTitle4,
								width: 60,
							},
							{
								field: 'login_new',
								title: reportLogReportViewDataGridColumnTitle5,
								width: 80,
							},
                                                        {
								field: 'create_new',
								title: reportLogReportViewDataGridColumnTitle6,
								width: 80,
							},
                                                        {
								field: 'pay_count',
								title: reportLogReportViewDataGridColumnTitle7,
								width: 80,
							},
                                                        {
								field: 'pay_amount',
								title: reportLogReportViewDataGridColumnTitle8,
								width: 80,
							},
						]],
						loadFilter: Utils.dataGridLoadFilter,
						pagination: true,
						pageSize: 50,
						pageList: [50, 100, 150, 200],
					});
					Component.Combobox.OperatorId.create(
						Report.LogReport.View.DataGrid.operatorIdComboboxLabelContainer,
						Report.LogReport.View.DataGrid.operatorIdComboboxInputContainer
					);
                                        Component.Combogrid.AreaNum.create(
						Report.LogReport.View.DataGrid.areaNumCombogridLabelContainer,
						Report.LogReport.View.DataGrid.areaNumCombogridInputContainer
					);
					Component.Datebox.Start.create(
						Report.LogReport.View.DataGrid.startDateboxLabelContainer,
						Report.LogReport.View.DataGrid.startDateboxInputContainer
					);
					Component.Datebox.End.create(
						Report.LogReport.View.DataGrid.endDateboxLabelContainer,
						Report.LogReport.View.DataGrid.endDateboxInputContainer
					);
                                        Component.Combobox.Pf.create(
						Report.LogReport.View.DataGrid.pfComboboxLabelContainer,
						Report.LogReport.View.DataGrid.pfComboboxInputContainer
					);
					Report.LogReport.View.DataGrid.searchButtonContainer.linkbutton({
						iconCls: 'icon-search',
						text: reportDetailViewDataGridToolbarButtonText1,
					});
					Report.LogReport.View.DataGrid.searchButtonContainer.bind(
						'click',
						Report.LogReport.View.DataGrid.doSearch
					);
                                        Report.LogReport.View.DataGrid.exportButtonContainer.linkbutton({
						iconCls: 'icon-search',
						text: exportViewDataGridToolbarButtonText1,
					});
					Report.LogReport.View.DataGrid.exportButtonContainer.bind(
						'click',
						Report.LogReport.View.DataGrid.doExport
					);
				},
				
				doSearch: function() {
                                        var operatorId = Report.LogReport.View.DataGrid.operatorIdComboboxInputContainer.combobox('getValue');
					var gameAreaId = Report.LogReport.View.DataGrid.areaNumCombogridInputContainer.combogrid('getValue');
					var startDate = Report.LogReport.View.DataGrid.startDateboxInputContainer.datebox('getValue');
					var endDate = Report.LogReport.View.DataGrid.endDateboxInputContainer.datebox('getValue');
                                        var pfId = Report.LogReport.View.DataGrid.pfComboboxInputContainer.combobox('getValue');
					
					Report.LogReport.View.dataGridPanelContainer.datagrid({
						url: '/index.php/Report/logReport/getListData',
						queryParams: {
                                                        operatorId:operatorId,
							gameAreaId: gameAreaId,
							startDate: startDate,
							endDate: endDate,
                                                        pfId:pfId
						}
					});
				},
                                showCurrSelectInfo:function(){
                                        $.ajax({
                                                url: '/index.php/User/manage/getCurrSelectInfo',
                                        })
                                        .done(function(response) {
                                                if(response.data.operatorId!=false) {
                                                    Report.LogReport.View.DataGrid.operatorIdComboboxInputContainer.combobox('select',response.data.operatorId);
                                                    Report.LogReport.View.DataGrid.areaNumCombogridInputContainer.combogrid('setValue',response.data.gameAreaId);
                                                    Report.LogReport.View.DataGrid.startDateboxInputContainer.datebox('setValue',response.data.startDate);
                                                    Report.LogReport.View.DataGrid.endDateboxInputContainer.datebox('setValue',response.data.endDate);
                                                }
                                        })
                                }, 
                                doExport: function() {
//                                        var url = "/index.php/Currency/first/export";
                                        var operatorId = Report.LogReport.View.DataGrid.operatorIdComboboxInputContainer.combobox('getValue');
                                        var gameAreaId = Report.LogReport.View.DataGrid.areaNumCombogridInputContainer.combogrid('getValues').toString();
                                        var startDate = Report.LogReport.View.DataGrid.startDateboxInputContainer.datebox('getValue');
                                        var endDate =  Report.LogReport.View.DataGrid.endDateboxInputContainer.datebox('getValue');
                                        var pfId = Report.LogReport.View.DataGrid.pfComboboxInputContainer.combobox('getValue');
                                        
//                                        $.ajax({
//                                              url: url,
//                                              data: {
//                                                    operatorId:operatorId,
//                                                    gameAreaId:gameAreaId,
//                                                    startDate:startDate,
//                                                    endDate:endDate,
//                                              },
//                                              success: function () {
                                                  var downUrl = "/index.php/Report/logReport/export?operatorId="+ operatorId +"&gameAreaId="+gameAreaId+"&startDate="+startDate+"&endDate="+endDate+"&pfId="+pfId
                                                  window.location = downUrl;
//                                              }
//                                        });
				},
			},
                       
		},
        },
}