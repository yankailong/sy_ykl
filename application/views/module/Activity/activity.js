var Activity = {
	Jxtz: {
		init: function() {
			Language.getCurrLanguage();
			Utils.loadJavascriptFile('/application/views/libraries/component/' + language + '.js');
			Utils.loadJavascriptFile('/application/views/libraries/utils/' + language + '.js');
			Utils.loadJavascriptFile('/application/views/module/Activity/' + language + '.js');
			Utils.initAjax();
			
			Activity.Jxtz.View.init();
		},
		
		View: {
			dataGridPanelContainer: '',
			
			init: function() {
				Activity.Jxtz.View.dataGridPanelContainer = $('#dataGridPanel #dataGrid');
				Activity.Jxtz.View.DataGrid.init();
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
					Activity.Jxtz.View.DataGrid.operatorIdComboboxLabelContainer = $('#dataGridPanel #toolbar #operatorIdComboboxLabel');
					Activity.Jxtz.View.DataGrid.operatorIdComboboxInputContainer = $('#dataGridPanel #toolbar #operatorIdComboboxInput');
                                        Activity.Jxtz.View.DataGrid.areaNumCombogridLabelContainer = $('#dataGridPanel #toolbar #areaNumCombogridLabel');
					Activity.Jxtz.View.DataGrid.areaNumCombogridInputContainer = $('#dataGridPanel #toolbar #areaNumCombogridInput');
                                        Activity.Jxtz.View.DataGrid.searchStartDateboxLabelContainer = $('#dataGridPanel #toolbar #searchStartDateboxLabel');
					Activity.Jxtz.View.DataGrid.searchStartDateboxInputContainer = $('#dataGridPanel #toolbar #searchStartDateboxInput');
					Activity.Jxtz.View.DataGrid.searchEndDateboxLabelContainer = $('#dataGridPanel #toolbar #searchEndDateboxLabel');
					Activity.Jxtz.View.DataGrid.searchEndDateboxInputContainer = $('#dataGridPanel #toolbar #searchEndDateboxInput');
					Activity.Jxtz.View.DataGrid.searchButtonContainer = $('#dataGridPanel #toolbar #searchButton');
                                        Activity.Jxtz.View.DataGrid.exportButtonContainer = $('#dataGridPanel #toolbar #exportButton');
					Activity.Jxtz.View.DataGrid.create();
                                        Activity.Jxtz.View.DataGrid.showCurrSelectInfo();
				},
				
				create: function() {
					var width = $(document).width() - 40;
					var height = $(document).height() - 40;
					Activity.Jxtz.View.dataGridPanelContainer.width(width);
					Activity.Jxtz.View.dataGridPanelContainer.height(height);
					Activity.Jxtz.View.dataGridPanelContainer.datagrid({
						toolbar: '#toolbar',
						columns: [[
							{
								field: 'date',
								title: activityViewDataGridColumnTitle1,
								width: 100,
							},
							{
								field: 'maxOnline1',
								title: activityViewDataGridColumnTitle2,
								width: 100,
							},
							{
								field: 'join1',
								title: activityViewDataGridColumnTitle3,
								width: 100,
							},
                                                        {
								field: 'rate1',
								title: activityViewDataGridColumnTitle4,
								width: 100,
							},
                                                        {
								field: 'maxOnline2',
								title: activityViewDataGridColumnTitle5,
								width: 100,
							},
                                                        {
								field: 'join2',
								title: activityViewDataGridColumnTitle6,
								width: 100,
							},
                                                        {
								field: 'rate2',
								title: activityViewDataGridColumnTitle7,
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
						Activity.Jxtz.View.DataGrid.operatorIdComboboxLabelContainer,
						Activity.Jxtz.View.DataGrid.operatorIdComboboxInputContainer
					);
                                        Component.Combogrid.AreaNum.create(
						Activity.Jxtz.View.DataGrid.areaNumCombogridLabelContainer,
						Activity.Jxtz.View.DataGrid.areaNumCombogridInputContainer
					);
					Component.Datebox.Start.create(
						Activity.Jxtz.View.DataGrid.searchStartDateboxLabelContainer,
						Activity.Jxtz.View.DataGrid.searchStartDateboxInputContainer
					);
                                        Component.Datebox.End.create(
						Activity.Jxtz.View.DataGrid.searchEndDateboxLabelContainer,
						Activity.Jxtz.View.DataGrid.searchEndDateboxInputContainer
					);
					Activity.Jxtz.View.DataGrid.searchButtonContainer.linkbutton({
						iconCls: 'icon-search',
						text: activityViewDataGridToolbarButtonText1,
					});
					Activity.Jxtz.View.DataGrid.searchButtonContainer.bind(
						'click',
						Activity.Jxtz.View.DataGrid.doSearch
					);
                                        Activity.Jxtz.View.DataGrid.exportButtonContainer.linkbutton({
						iconCls: 'icon-search',
						text: exportViewDataGridToolbarButtonText1,
					});
					Activity.Jxtz.View.DataGrid.exportButtonContainer.bind(
						'click',
						Activity.Jxtz.View.DataGrid.doExport
					);
				},
				
				doSearch: function() {
                                        var operatorId = Activity.Jxtz.View.DataGrid.operatorIdComboboxInputContainer.combobox('getValue');
                                        var gameAreaId = Activity.Jxtz.View.DataGrid.areaNumCombogridInputContainer.combogrid('getValue');
					var searchStartDate = Activity.Jxtz.View.DataGrid.searchStartDateboxInputContainer.datebox('getValue');
                                        var searchEndDate = Activity.Jxtz.View.DataGrid.searchEndDateboxInputContainer.datebox('getValue');
					
					Activity.Jxtz.View.dataGridPanelContainer.datagrid({
						url: '/index.php/Activity/jxtz/getListData',
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
                                                    Activity.Jxtz.View.DataGrid.operatorIdComboboxInputContainer.combobox('select',response.data.operatorId);
                                                    Activity.Jxtz.View.DataGrid.areaNumCombogridInputContainer.combogrid('setValue',response.data.gameAreaId);
                                                    Activity.Jxtz.View.DataGrid.searchStartDateboxInputContainer.datebox('setValue',response.data.startDate);
                                                    Activity.Jxtz.View.DataGrid.searchEndDateboxInputContainer.datebox('setValue',response.data.endDate);
                                                }
                                        })
                                }, 
                                doExport: function() {
//                                        var url = "/index.php/Currency/first/export";
                                        var operatorId = Activity.Jxtz.View.DataGrid.operatorIdComboboxInputContainer.combobox('getValue');
                                        var gameAreaId = Activity.Jxtz.View.DataGrid.areaNumCombogridInputContainer.combogrid('getValues').toString();
                                        var startDate = Activity.Jxtz.View.DataGrid.searchStartDateboxInputContainer.datebox('getValue');
                                        var endDate =  Activity.Jxtz.View.DataGrid.searchEndDateboxInputContainer.datebox('getValue');
//                                        $.ajax({
//                                              url: url,
//                                              data: {
//                                                    operatorId:operatorId,
//                                                    gameAreaId:gameAreaId,
//                                                    startDate:startDate,
//                                                    endDate:endDate,
//                                              },
//                                              success: function () {
                                                  var downUrl = "/index.php/Activity/jxtz/export?operatorId="+ operatorId +"&gameAreaId="+gameAreaId+"&startDate="+startDate+"&endDate="+endDate
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
			Utils.loadJavascriptFile('/application/views/module/Activity/' + language + '.js');
			Utils.initAjax();
			
			Activity.First.View.init();
		},
		
		View: {
			dataGridPanelContainer: '',
			
			init: function() {
				Activity.First.View.dataGridPanelContainer = $('#dataGridPanel #dataGrid');
				Activity.First.View.DataGrid.init();
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
					Activity.First.View.DataGrid.operatorIdComboboxLabelContainer = $('#dataGridPanel #toolbar #operatorIdComboboxLabel');
					Activity.First.View.DataGrid.operatorIdComboboxInputContainer = $('#dataGridPanel #toolbar #operatorIdComboboxInput');
                                        Activity.First.View.DataGrid.areaNumCombogridLabelContainer = $('#dataGridPanel #toolbar #areaNumCombogridLabel');
					Activity.First.View.DataGrid.areaNumCombogridInputContainer = $('#dataGridPanel #toolbar #areaNumCombogridInput');
                                        Activity.First.View.DataGrid.searchStartDateboxLabelContainer = $('#dataGridPanel #toolbar #searchStartDateboxLabel');
					Activity.First.View.DataGrid.searchStartDateboxInputContainer = $('#dataGridPanel #toolbar #searchStartDateboxInput');
					Activity.First.View.DataGrid.searchEndDateboxLabelContainer = $('#dataGridPanel #toolbar #searchEndDateboxLabel');
					Activity.First.View.DataGrid.searchEndDateboxInputContainer = $('#dataGridPanel #toolbar #searchEndDateboxInput');
					Activity.First.View.DataGrid.searchButtonContainer = $('#dataGridPanel #toolbar #searchButton');
                                        Activity.First.View.DataGrid.exportButtonContainer = $('#dataGridPanel #toolbar #exportButton');
					Activity.First.View.DataGrid.create();
                                        Activity.First.View.DataGrid.showCurrSelectInfo();
				},
				
				create: function() {
					var width = $(document).width() - 40;
					var height = $(document).height() - 40;
					Activity.First.View.dataGridPanelContainer.width(width);
					Activity.First.View.dataGridPanelContainer.height(height);
					Activity.First.View.dataGridPanelContainer.datagrid({
						toolbar: '#toolbar',
						columns: [[
							{
								field: 'date',
								title: activityViewDataGridColumnTitle1,
								width: 100,
							},
							{
								field: 'maxOnline1',
								title: activityViewDataGridColumnTitle2,
								width: 100,
							},
							{
								field: 'join1',
								title: activityViewDataGridColumnTitle3,
								width: 100,
							},
                                                        {
								field: 'rate1',
								title: activityViewDataGridColumnTitle4,
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
						Activity.First.View.DataGrid.operatorIdComboboxLabelContainer,
						Activity.First.View.DataGrid.operatorIdComboboxInputContainer
					);
                                        Component.Combogrid.AreaNum.create(
						Activity.First.View.DataGrid.areaNumCombogridLabelContainer,
						Activity.First.View.DataGrid.areaNumCombogridInputContainer
					);
					Component.Datebox.Start.create(
						Activity.First.View.DataGrid.searchStartDateboxLabelContainer,
						Activity.First.View.DataGrid.searchStartDateboxInputContainer
					);
                                        Component.Datebox.End.create(
						Activity.First.View.DataGrid.searchEndDateboxLabelContainer,
						Activity.First.View.DataGrid.searchEndDateboxInputContainer
					);
					Activity.First.View.DataGrid.searchButtonContainer.linkbutton({
						iconCls: 'icon-search',
						text: activityViewDataGridToolbarButtonText1,
					});
					Activity.First.View.DataGrid.searchButtonContainer.bind(
						'click',
						Activity.First.View.DataGrid.doSearch
					);
                                        Activity.First.View.DataGrid.exportButtonContainer.linkbutton({
						iconCls: 'icon-search',
						text: exportViewDataGridToolbarButtonText1,
					});
					Activity.First.View.DataGrid.exportButtonContainer.bind(
						'click',
						Activity.First.View.DataGrid.doExport
					);
				},
				
				doSearch: function() {
                                        var operatorId = Activity.First.View.DataGrid.operatorIdComboboxInputContainer.combobox('getValue');
                                        var gameAreaId = Activity.First.View.DataGrid.areaNumCombogridInputContainer.combogrid('getValue');
					var searchStartDate = Activity.First.View.DataGrid.searchStartDateboxInputContainer.datebox('getValue');
                                        var searchEndDate = Activity.First.View.DataGrid.searchEndDateboxInputContainer.datebox('getValue');
					
					Activity.First.View.dataGridPanelContainer.datagrid({
						url: '/index.php/Activity/first/getListData',
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
                                                    Activity.First.View.DataGrid.operatorIdComboboxInputContainer.combobox('select',response.data.operatorId);
                                                    Activity.First.View.DataGrid.areaNumCombogridInputContainer.combogrid('setValue',response.data.gameAreaId);
                                                    Activity.First.View.DataGrid.searchStartDateboxInputContainer.datebox('setValue',response.data.startDate);
                                                    Activity.First.View.DataGrid.searchEndDateboxInputContainer.datebox('setValue',response.data.endDate);
                                                }
                                        })
                                }, 
                                doExport: function() {
//                                        var url = "/index.php/Currency/first/export";
                                        var operatorId = Activity.First.View.DataGrid.operatorIdComboboxInputContainer.combobox('getValue');
                                        var gameAreaId = Activity.First.View.DataGrid.areaNumCombogridInputContainer.combogrid('getValues').toString();
                                        var startDate = Activity.First.View.DataGrid.searchStartDateboxInputContainer.datebox('getValue');
                                        var endDate =  Activity.First.View.DataGrid.searchEndDateboxInputContainer.datebox('getValue');
//                                        $.ajax({
//                                              url: url,
//                                              data: {
//                                                    operatorId:operatorId,
//                                                    gameAreaId:gameAreaId,
//                                                    startDate:startDate,
//                                                    endDate:endDate,
//                                              },
//                                              success: function () {
                                                  var downUrl = "/index.php/Activity/first/export?operatorId="+ operatorId +"&gameAreaId="+gameAreaId+"&startDate="+startDate+"&endDate="+endDate
                                                  window.location = downUrl;
//                                              }
//                                        });
				},

			},
		},
	},
	Jzfyb: {
		init: function() {
			Language.getCurrLanguage();
			Utils.loadJavascriptFile('/application/views/libraries/component/' + language + '.js');
			Utils.loadJavascriptFile('/application/views/libraries/utils/' + language + '.js');
			Utils.loadJavascriptFile('/application/views/module/Activity/' + language + '.js');
			Utils.initAjax();
			
			Activity.Jzfyb.View.init();
		},
		
		View: {
			dataGridPanelContainer: '',
			
			init: function() {
				Activity.Jzfyb.View.dataGridPanelContainer = $('#dataGridPanel #dataGrid');
				Activity.Jzfyb.View.DataGrid.init();
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
					Activity.Jzfyb.View.DataGrid.operatorIdComboboxLabelContainer = $('#dataGridPanel #toolbar #operatorIdComboboxLabel');
					Activity.Jzfyb.View.DataGrid.operatorIdComboboxInputContainer = $('#dataGridPanel #toolbar #operatorIdComboboxInput');
                                        Activity.Jzfyb.View.DataGrid.areaNumCombogridLabelContainer = $('#dataGridPanel #toolbar #areaNumCombogridLabel');
					Activity.Jzfyb.View.DataGrid.areaNumCombogridInputContainer = $('#dataGridPanel #toolbar #areaNumCombogridInput');
                                        Activity.Jzfyb.View.DataGrid.searchStartDateboxLabelContainer = $('#dataGridPanel #toolbar #searchStartDateboxLabel');
					Activity.Jzfyb.View.DataGrid.searchStartDateboxInputContainer = $('#dataGridPanel #toolbar #searchStartDateboxInput');
					Activity.Jzfyb.View.DataGrid.searchEndDateboxLabelContainer = $('#dataGridPanel #toolbar #searchEndDateboxLabel');
					Activity.Jzfyb.View.DataGrid.searchEndDateboxInputContainer = $('#dataGridPanel #toolbar #searchEndDateboxInput');
					Activity.Jzfyb.View.DataGrid.searchButtonContainer = $('#dataGridPanel #toolbar #searchButton');
                                        Activity.Jzfyb.View.DataGrid.exportButtonContainer = $('#dataGridPanel #toolbar #exportButton');
					Activity.Jzfyb.View.DataGrid.create();
                                        Activity.Jzfyb.View.DataGrid.showCurrSelectInfo();
				},
				
				create: function() {
					var width = $(document).width() - 40;
					var height = $(document).height() - 40;
					Activity.Jzfyb.View.dataGridPanelContainer.width(width);
					Activity.Jzfyb.View.dataGridPanelContainer.height(height);
					Activity.Jzfyb.View.dataGridPanelContainer.datagrid({
						toolbar: '#toolbar',
						columns: [[
							{
								field: 'date',
								title: activityViewDataGridColumnTitle1,
								width: 100,
							},
							{
								field: 'maxOnline1',
								title: activityViewDataGridColumnTitle2,
								width: 100,
							},
							{
								field: 'join1',
								title: activityViewDataGridColumnTitle3,
								width: 100,
							},
                                                        {
								field: 'rate1',
								title: activityViewDataGridColumnTitle4,
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
						Activity.Jzfyb.View.DataGrid.operatorIdComboboxLabelContainer,
						Activity.Jzfyb.View.DataGrid.operatorIdComboboxInputContainer
					);
                                        Component.Combogrid.AreaNum.create(
						Activity.Jzfyb.View.DataGrid.areaNumCombogridLabelContainer,
						Activity.Jzfyb.View.DataGrid.areaNumCombogridInputContainer
					);
					Component.Datebox.Start.create(
						Activity.Jzfyb.View.DataGrid.searchStartDateboxLabelContainer,
						Activity.Jzfyb.View.DataGrid.searchStartDateboxInputContainer
					);
                                        Component.Datebox.End.create(
						Activity.Jzfyb.View.DataGrid.searchEndDateboxLabelContainer,
						Activity.Jzfyb.View.DataGrid.searchEndDateboxInputContainer
					);
					Activity.Jzfyb.View.DataGrid.searchButtonContainer.linkbutton({
						iconCls: 'icon-search',
						text: activityViewDataGridToolbarButtonText1,
					});
					Activity.Jzfyb.View.DataGrid.searchButtonContainer.bind(
						'click',
						Activity.Jzfyb.View.DataGrid.doSearch
					);
                                        Activity.Jzfyb.View.DataGrid.exportButtonContainer.linkbutton({
						iconCls: 'icon-search',
						text: exportViewDataGridToolbarButtonText1,
					});
					Activity.Jzfyb.View.DataGrid.exportButtonContainer.bind(
						'click',
						Activity.Jzfyb.View.DataGrid.doExport
					);
				},
				
				doSearch: function() {
                                        var operatorId = Activity.Jzfyb.View.DataGrid.operatorIdComboboxInputContainer.combobox('getValue');
                                        var gameAreaId = Activity.Jzfyb.View.DataGrid.areaNumCombogridInputContainer.combogrid('getValue');
					var searchStartDate = Activity.Jzfyb.View.DataGrid.searchStartDateboxInputContainer.datebox('getValue');
                                        var searchEndDate = Activity.Jzfyb.View.DataGrid.searchEndDateboxInputContainer.datebox('getValue');
					
					Activity.Jzfyb.View.dataGridPanelContainer.datagrid({
						url: '/index.php/Activity/jzfyb/getListData',
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
                                                    Activity.Jzfyb.View.DataGrid.operatorIdComboboxInputContainer.combobox('select',response.data.operatorId);
                                                    Activity.Jzfyb.View.DataGrid.areaNumCombogridInputContainer.combogrid('setValue',response.data.gameAreaId);
                                                    Activity.Jzfyb.View.DataGrid.searchStartDateboxInputContainer.datebox('setValue',response.data.startDate);
                                                    Activity.Jzfyb.View.DataGrid.searchEndDateboxInputContainer.datebox('setValue',response.data.endDate);
                                                }
                                        })
                                }, 
                                doExport: function() {
//                                        var url = "/index.php/Currency/jzfyb/export";
                                        var operatorId = Activity.Jzfyb.View.DataGrid.operatorIdComboboxInputContainer.combobox('getValue');
                                        var gameAreaId = Activity.Jzfyb.View.DataGrid.areaNumCombogridInputContainer.combogrid('getValues').toString();
                                        var startDate = Activity.Jzfyb.View.DataGrid.searchStartDateboxInputContainer.datebox('getValue');
                                        var endDate =  Activity.Jzfyb.View.DataGrid.searchEndDateboxInputContainer.datebox('getValue');
//                                        $.ajax({
//                                              url: url,
//                                              data: {
//                                                    operatorId:operatorId,
//                                                    gameAreaId:gameAreaId,
//                                                    startDate:startDate,
//                                                    endDate:endDate,
//                                              },
//                                              success: function () {
                                                  var downUrl = "/index.php/Activity/jzfyb/export?operatorId="+ operatorId +"&gameAreaId="+gameAreaId+"&startDate="+startDate+"&endDate="+endDate
                                                  window.location = downUrl;
//                                              }
//                                        });
				},

			},
		},
	},
        Syzb: {
		init: function() {
			Language.getCurrLanguage();
			Utils.loadJavascriptFile('/application/views/libraries/component/' + language + '.js');
			Utils.loadJavascriptFile('/application/views/libraries/utils/' + language + '.js');
			Utils.loadJavascriptFile('/application/views/module/Activity/' + language + '.js');
			Utils.initAjax();
			
			Activity.Syzb.View.init();
		},
		
		View: {
			dataGridPanelContainer: '',
			
			init: function() {
				Activity.Syzb.View.dataGridPanelContainer = $('#dataGridPanel #dataGrid');
				Activity.Syzb.View.DataGrid.init();
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
					Activity.Syzb.View.DataGrid.operatorIdComboboxLabelContainer = $('#dataGridPanel #toolbar #operatorIdComboboxLabel');
					Activity.Syzb.View.DataGrid.operatorIdComboboxInputContainer = $('#dataGridPanel #toolbar #operatorIdComboboxInput');
                                        Activity.Syzb.View.DataGrid.areaNumCombogridLabelContainer = $('#dataGridPanel #toolbar #areaNumCombogridLabel');
					Activity.Syzb.View.DataGrid.areaNumCombogridInputContainer = $('#dataGridPanel #toolbar #areaNumCombogridInput');
                                        Activity.Syzb.View.DataGrid.searchStartDateboxLabelContainer = $('#dataGridPanel #toolbar #searchStartDateboxLabel');
					Activity.Syzb.View.DataGrid.searchStartDateboxInputContainer = $('#dataGridPanel #toolbar #searchStartDateboxInput');
					Activity.Syzb.View.DataGrid.searchEndDateboxLabelContainer = $('#dataGridPanel #toolbar #searchEndDateboxLabel');
					Activity.Syzb.View.DataGrid.searchEndDateboxInputContainer = $('#dataGridPanel #toolbar #searchEndDateboxInput');
					Activity.Syzb.View.DataGrid.searchButtonContainer = $('#dataGridPanel #toolbar #searchButton');
                                        Activity.Syzb.View.DataGrid.exportButtonContainer = $('#dataGridPanel #toolbar #exportButton');
					Activity.Syzb.View.DataGrid.create();
                                        Activity.Syzb.View.DataGrid.showCurrSelectInfo();
				},
				
				create: function() {
					var width = $(document).width() - 40;
					var height = $(document).height() - 40;
					Activity.Syzb.View.dataGridPanelContainer.width(width);
					Activity.Syzb.View.dataGridPanelContainer.height(height);
					Activity.Syzb.View.dataGridPanelContainer.datagrid({
						toolbar: '#toolbar',
						columns: [[
							{
								field: 'date',
								title: activityViewDataGridColumnTitle1,
								width: 100,
							},
							{
								field: 'maxOnline1',
								title: activityViewDataGridColumnTitle2,
								width: 100,
							},
							{
								field: 'join1',
								title: activityViewDataGridColumnTitle3,
								width: 100,
							},
                                                        {
								field: 'rate1',
								title: activityViewDataGridColumnTitle4,
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
						Activity.Syzb.View.DataGrid.operatorIdComboboxLabelContainer,
						Activity.Syzb.View.DataGrid.operatorIdComboboxInputContainer
					);
                                        Component.Combogrid.AreaNum.create(
						Activity.Syzb.View.DataGrid.areaNumCombogridLabelContainer,
						Activity.Syzb.View.DataGrid.areaNumCombogridInputContainer
					);
					Component.Datebox.Start.create(
						Activity.Syzb.View.DataGrid.searchStartDateboxLabelContainer,
						Activity.Syzb.View.DataGrid.searchStartDateboxInputContainer
					);
                                        Component.Datebox.End.create(
						Activity.Syzb.View.DataGrid.searchEndDateboxLabelContainer,
						Activity.Syzb.View.DataGrid.searchEndDateboxInputContainer
					);
					Activity.Syzb.View.DataGrid.searchButtonContainer.linkbutton({
						iconCls: 'icon-search',
						text: activityViewDataGridToolbarButtonText1,
					});
					Activity.Syzb.View.DataGrid.searchButtonContainer.bind(
						'click',
						Activity.Syzb.View.DataGrid.doSearch
					);
                                        Activity.Syzb.View.DataGrid.exportButtonContainer.linkbutton({
						iconCls: 'icon-search',
						text: exportViewDataGridToolbarButtonText1,
					});
					Activity.Syzb.View.DataGrid.exportButtonContainer.bind(
						'click',
						Activity.Syzb.View.DataGrid.doExport
					);
				},
				
				doSearch: function() {
                                        var operatorId = Activity.Syzb.View.DataGrid.operatorIdComboboxInputContainer.combobox('getValue');
                                        var gameAreaId = Activity.Syzb.View.DataGrid.areaNumCombogridInputContainer.combogrid('getValue');
					var searchStartDate = Activity.Syzb.View.DataGrid.searchStartDateboxInputContainer.datebox('getValue');
                                        var searchEndDate = Activity.Syzb.View.DataGrid.searchEndDateboxInputContainer.datebox('getValue');
					
					Activity.Syzb.View.dataGridPanelContainer.datagrid({
						url: '/index.php/Activity/syzb/getListData',
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
                                                    Activity.Syzb.View.DataGrid.operatorIdComboboxInputContainer.combobox('select',response.data.operatorId);
                                                    Activity.Syzb.View.DataGrid.areaNumCombogridInputContainer.combogrid('setValue',response.data.gameAreaId);
                                                    Activity.Syzb.View.DataGrid.searchStartDateboxInputContainer.datebox('setValue',response.data.startDate);
                                                    Activity.Syzb.View.DataGrid.searchEndDateboxInputContainer.datebox('setValue',response.data.endDate);
                                                }
                                        })
                                }, 
                                doExport: function() {
//                                        var url = "/index.php/Currency/syzb/export";
                                        var operatorId = Activity.Syzb.View.DataGrid.operatorIdComboboxInputContainer.combobox('getValue');
                                        var gameAreaId = Activity.Syzb.View.DataGrid.areaNumCombogridInputContainer.combogrid('getValues').toString();
                                        var startDate = Activity.Syzb.View.DataGrid.searchStartDateboxInputContainer.datebox('getValue');
                                        var endDate =  Activity.Syzb.View.DataGrid.searchEndDateboxInputContainer.datebox('getValue');
//                                        $.ajax({
//                                              url: url,
//                                              data: {
//                                                    operatorId:operatorId,
//                                                    gameAreaId:gameAreaId,
//                                                    startDate:startDate,
//                                                    endDate:endDate,
//                                              },
//                                              success: function () {
                                                  var downUrl = "/index.php/Activity/syzb/export?operatorId="+ operatorId +"&gameAreaId="+gameAreaId+"&startDate="+startDate+"&endDate="+endDate
                                                  window.location = downUrl;
//                                              }
//                                        });
				},

			},
		},
	},
}