var Online = {
	Detail: {
		init: function() {
			Language.getCurrLanguage();
			Utils.loadJavascriptFile('/application/views/libraries/component/' + language + '.js');
			Utils.loadJavascriptFile('/application/views/libraries/utils/' + language + '.js');
			Utils.loadJavascriptFile('/application/views/module/Online/' + language + '.js');
			Utils.initAjax();
			
			Online.Detail.View.init();
		},
		
		View: {
			dataGridPanelContainer: '',
			
			init: function() {
				Online.Detail.View.dataGridPanelContainer = $('#dataGridPanel #dataGrid');
				Online.Detail.View.DataGrid.init();
			},
			
			DataGrid: {
				gameAreaCombogridLabelContainer: '',
				gameAreaCombogridInputContainer: '',
				searchDateboxLabelContainer: '',
				searchDateboxInputContainer: '',
				searchButtonContainer: '',
				
				init: function() {
					Online.Detail.View.DataGrid.gameAreaCombogridLabelContainer = $('#dataGridPanel #toolbar #gameAreaCombogridLabel');
					Online.Detail.View.DataGrid.gameAreaCombogridInputContainer = $('#dataGridPanel #toolbar #gameAreaCombogridInput');
					Online.Detail.View.DataGrid.searchDateboxLabelContainer = $('#dataGridPanel #toolbar #searchDateboxLabel');
					Online.Detail.View.DataGrid.searchDateboxInputContainer = $('#dataGridPanel #toolbar #searchDateboxInput');
					Online.Detail.View.DataGrid.searchButtonContainer = $('#dataGridPanel #toolbar #searchButton');
					Online.Detail.View.DataGrid.create();
				},
				
				create: function() {
					var width = $(document).width() - 40;
					var height = $(document).height() - 40;
					Online.Detail.View.dataGridPanelContainer.width(width);
					Online.Detail.View.dataGridPanelContainer.height(height);
					Online.Detail.View.dataGridPanelContainer.datagrid({
						fitColumns: false,
						toolbar: '#toolbar',
						columns: [[
							{
								field: 'dateTime',
								title: onlineDetailViewDataGridColumnTitle1,
								width: 150
							},
							{
								field: 'onlineRoleNum',
								title: onlineDetailViewDataGridColumnTitle2,
								width: 80,
							}
						]],
						loadFilter: Utils.dataGridLoadFilter,
						onLoadSuccess: function() {
							Online.Detail.View.Chart.create();
						}
					})
					Component.Combogrid.GameArea.create(
						Online.Detail.View.DataGrid.gameAreaCombogridLabelContainer,
						Online.Detail.View.DataGrid.gameAreaCombogridInputContainer
					);
					Component.Datebox.Search.create(
						Online.Detail.View.DataGrid.searchDateboxLabelContainer,
						Online.Detail.View.DataGrid.searchDateboxInputContainer
					);
					Online.Detail.View.DataGrid.searchButtonContainer.linkbutton({
						iconCls: 'icon-search',
						text: onlineDetailViewDataGridToolbarButtonText1,
					});
					Online.Detail.View.DataGrid.searchButtonContainer.bind(
						'click',
						Online.Detail.View.DataGrid.doSearch
					);
				},
				
				doSearch: function(){
					var gameAreaId = Online.Detail.View.DataGrid.gameAreaCombogridInputContainer.combogrid('getValue');
					var date = Online.Detail.View.DataGrid.searchDateboxInputContainer.datebox('getValue');
					
					Online.Detail.View.dataGridPanelContainer.datagrid({
						url: '/index.php/Online/detail/getListData',
						queryParams: {
							gameAreaId: gameAreaId,
							date: date
						}
					});
				},
			},
			
			Chart: {
				create: function() {
					var gameAreaId = Online.Detail.View.DataGrid.gameAreaCombogridInputContainer.combogrid('getValue');
					var date = Online.Detail.View.DataGrid.searchDateboxInputContainer.datebox('getValue');
					var data = Online.Detail.View.dataGridPanelContainer.datagrid('getData');
					var chartData = [];
					
					for(index = 0; index < data.rows.length; index++) {
						tmp = [];
						tmp.push(data.rows[index].dateTime);
						tmp.push(Number(data.rows[index].onlineRoleNum));
						chartData.push(tmp);
					}
					
					var data = [chartData];
					var startDateTime = date + ' 00:00:00';
					var endDateTime = date + ' 23:59:59';
					var options = {
						axes: {
							xaxis: {
								min: startDateTime,
								max: endDateTime,
								renderer: $.jqplot.DateAxisRenderer,
								tickOptions: {
									formatString: '%#H点'
								},
								tickInterval: 3600
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
		},
	},

	Summary: {
		init: function() {
			Language.getCurrLanguage();
			Utils.loadJavascriptFile('/application/views/libraries/component/' + language + '.js');
			Utils.loadJavascriptFile('/application/views/libraries/utils/' + language + '.js');
			Utils.loadJavascriptFile('/application/views/module/Online/' + language + '.js');
			Utils.initAjax();
			
			Online.Summary.View.init();
		},
		
		View: {
			dataGridPanelContainer: '',
			
			init: function() {
				Online.Summary.View.dataGridPanelContainer = $('#dataGridPanel #dataGrid');
				Online.Summary.View.DataGrid.init();
			},
			
			DataGrid: {
				freshButtonContainer: '',
				
				init: function() {
					Online.Summary.View.DataGrid.freshButtonContainer = $('#dataGridPanel #toolbar #freshButton');
					Online.Summary.View.DataGrid.create();
				},
				
				create: function() {
					var width = $(document).width() - 40;
					var height = $(document).height() - 40;
					Online.Summary.View.dataGridPanelContainer.width(width);
					Online.Summary.View.dataGridPanelContainer.height(height);
					Online.Summary.View.dataGridPanelContainer.datagrid({
						url: '/index.php/Online/summary/getListData',
						fitColumns: false,
						toolbar: '#toolbar',
						columns: [[
							{
								field: 'operatorName',
								title: onlineSummaryViewDataGridColumnTitle1,
								width: 100,
							},
							{
								field: 'areaNum',
								title: onlineSummaryViewDataGridColumnTitle2,
								width: 60,
							},
							{
								field: 'onlineRoleNum',
								title: onlineSummaryViewDataGridColumnTitle3,
								width: 80,
							},
						]],
						loadFilter: Utils.dataGridLoadFilter,
					}),
					Online.Summary.View.DataGrid.freshButtonContainer.linkbutton({
						iconCls: 'icon-reload',
						text: onlineSummaryViewDataGridToolbarButtonText1,
					});
					Online.Summary.View.DataGrid.freshButtonContainer.bind(
						'click',
						Online.Summary.View.DataGrid.load
					);
				},
				
				load: function() {
					Online.Summary.View.dataGridPanelContainer.datagrid('reload');
				},
			},
		},
	},
    Family: {
        infoWindowContainer: '',
            
		init: function() {
			Language.getCurrLanguage();
			Utils.loadJavascriptFile('/application/views/libraries/component/' + language + '.js');
			Utils.loadJavascriptFile('/application/views/libraries/utils/' + language + '.js');
			Utils.loadJavascriptFile('/application/views/module/Online/' + language + '.js');
			Utils.initAjax();
                        
			Online.Family.infoWindowContainer = $('#infoWindow');
			Online.Family.InfoWindow.init();
			Online.Family.View.init();
		},
		
		View: {
			dataGridPanelContainer: '',
			
			init: function() {
				Online.Family.View.dataGridPanelContainer = $('#dataGridPanel #dataGrid');
				Online.Family.View.DataGrid.init();
			},
			
			DataGrid: {
				operatorIdComboboxLabelContainer: '',
				operatorIdComboboxInputContainer: '',
                                areaNumCombogridLabelContainer: '',
                                areaNumCombogridInputContainer: '',
				searchButtonContainer: '',
                                infoButtonContainer: '',
                                exportButtonContainer: '',
				
				init: function() {
					Online.Family.View.DataGrid.operatorIdComboboxLabelContainer = $('#dataGridPanel #toolbar #operatorIdComboboxLabel');
					Online.Family.View.DataGrid.operatorIdComboboxInputContainer = $('#dataGridPanel #toolbar #operatorIdComboboxInput');
                                        Online.Family.View.DataGrid.areaNumCombogridLabelContainer = $('#dataGridPanel #toolbar #areaNumCombogridLabel');
					Online.Family.View.DataGrid.areaNumCombogridInputContainer = $('#dataGridPanel #toolbar #areaNumCombogridInput');
					Online.Family.View.DataGrid.searchButtonContainer = $('#dataGridPanel #toolbar #searchButton');
                                        Online.Family.View.DataGrid.infoButtonContainer = $('#dataGridPanel #toolbar #infoButton');
                                        Online.Family.View.DataGrid.exportButtonContainer = $('#dataGridPanel #toolbar #exportButton');
					Online.Family.View.DataGrid.create();
                                        Online.Family.View.DataGrid.showCurrSelectInfo();
				},
				
				create: function() {
					var width = $(document).width() - 40;
					var height = $(document).height() - 40;
					Online.Family.View.dataGridPanelContainer.width(width);
					Online.Family.View.dataGridPanelContainer.height(height);
					Online.Family.View.dataGridPanelContainer.datagrid({
						toolbar: '#toolbar',
						columns: [[
                                                        {
                                                                checkbox: true,
                                                        },
							{
								field: 'id',
								title: onlineFamilyViewDataGridColumnTitle1,
								width: 100,
							},
							{
								field: 'name',
								title: onlineFamilyViewDataGridColumnTitle2,
								width: 100,
							},
							{
								field: 'leader_cid',
								title: onlineFamilyViewDataGridColumnTitle3,
								width: 150,
							},
							{
								field: 'leaderName',
								title: onlineFamilyViewDataGridColumnTitle4,
								width: 100,
							},
                                                        {
								field: 'create_time',
								title: onlineFamilyViewDataGridColumnTitle5,
								width: 100,
							},
                                                        {
								field: 'count',
								title: onlineFamilyViewDataGridColumnTitle6,
								width: 100,
							},
                                                        {
								field: 'onlineNum',
								title: onlineFamilyViewDataGridColumnTitle7,
								width: 100,
							},
                                                        {
								field: 'sumBattle',
								title: onlineFamilyViewDataGridColumnTitle8,
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
						Online.Family.View.DataGrid.operatorIdComboboxLabelContainer,
						Online.Family.View.DataGrid.operatorIdComboboxInputContainer
					);
                                        Component.Combogrid.AreaNum.create(
						Online.Family.View.DataGrid.areaNumCombogridLabelContainer,
						Online.Family.View.DataGrid.areaNumCombogridInputContainer
					);
					Online.Family.View.DataGrid.searchButtonContainer.linkbutton({
						iconCls: 'icon-search',
						text: onlineDetailViewDataGridToolbarButtonText1,
					});
					Online.Family.View.DataGrid.searchButtonContainer.bind(
						'click',
						Online.Family.View.DataGrid.doSearch
					);
                                        Online.Family.View.DataGrid.infoButtonContainer.linkbutton({
						iconCls: 'icon-search',
						text: onlineDetailViewDataGridToolbarButtonText2,
					});
					Online.Family.View.DataGrid.infoButtonContainer.bind(
						'click',
						Online.Family.InfoWindow.open
					);
                                        Online.Family.View.DataGrid.exportButtonContainer.linkbutton({
						iconCls: 'icon-search',
						text: exportViewDataGridToolbarButtonText1,
					});
					Online.Family.View.DataGrid.exportButtonContainer.bind(
						'click',
						Online.Family.View.DataGrid.doExport
					);
				},
				getCheckedRows: function(allowMulti) {
					var allowMulti = arguments[0] ? arguments[0] : false;
					var checkedRow = Online.Family.View.dataGridPanelContainer.datagrid('getChecked');
					
					if(Utils.dataGridValidateCheckedRow(checkedRow, allowMulti) === true) {
						return checkedRow;
					}
					else {
						return false;
					}
				},
                                showCurrSelectInfo:function(){
                                        $.ajax({
                                                url: '/index.php/User/manage/getCurrSelectInfo',
                                        })
                                        .done(function(response) {
                                                if(response.data.operatorId!=false) {
                                                    Online.Family.View.DataGrid.operatorIdComboboxInputContainer.combobox('select',response.data.operatorId);
                                                    Online.Family.View.DataGrid.areaNumCombogridInputContainer.combogrid('setValue',response.data.gameAreaId);
                                                }
                                        })
                                }, 
				doSearch: function() {
					Online.Family.View.dataGridPanelContainer.datagrid({
						url: '/index.php/Online/family/getListData',
						queryParams: {
							operatorId: Online.Family.View.DataGrid.operatorIdComboboxInputContainer.combobox('getValue'),
                                                        gameAreaId: Online.Family.View.DataGrid.areaNumCombogridInputContainer.combogrid('getValues').toString(),
						}
					});
				},
                                doExport: function() {

                                        var operatorId = Online.Family.View.DataGrid.operatorIdComboboxInputContainer.combobox('getValue');
                                        var gameAreaId = Online.Family.View.DataGrid.areaNumCombogridInputContainer.combogrid('getValues').toString();

                                                  var downUrl = "/index.php/Online/family/export?operatorId="+ operatorId +"&gameAreaId="+gameAreaId
                                                  window.location = downUrl;

				},
			},
		},
                InfoWindow: {
			dataGridContainer: '',
			
			init: function() {
				Online.Family.InfoWindow.dataGridContainer = $('#infoWindow #dataGrid');
				Online.Family.InfoWindow.DataGrid.init();
				Online.Family.InfoWindow.create();
			},
			
			DataGrid: {
				init: function() {
					Online.Family.InfoWindow.DataGrid.create();
				},
				
				create: function() {
					Online.Family.InfoWindow.dataGridContainer.datagrid({
						width: 547,
						height: 392,
						fitColumns: true,
						border: false,
						columns: [[
							{
								field: 'cid',
								title: OnlineIpInfoWindowDataGridColumnTitle2,
								width: 80,
							},
							{
								field: 'name',
								title: OnlineIpInfoWindowDataGridColumnTitle3,
								width: 100,
								
							},
						]],
						loadFilter: Utils.dataGridLoadFilter,
						pagination: true,
						pageSize: 50,
						pageList: [50, 100, 150, 200],
					})
				},
			},
			
			create: function() {
				Online.Family.infoWindowContainer.window({
					width: 600,
					height: 450,
					title: onlineFamilyInfoWindowTitle,
					collapsible: false,
					minimizable: false,
					maximizable: false,
					closable: true,
					closed: true,
					modal: true,
				});
			},
			
			open: function() {
				var checkedRow = Online.Family.View.DataGrid.getCheckedRows();
				
				if(checkedRow != false) {
					Online.Family.InfoWindow.dataGridContainer.datagrid({
						url: '/index.php/Online/family/player',
						queryParams: {
                                                        operatorId: Online.Family.View.DataGrid.operatorIdComboboxInputContainer.combobox('getValue'),
                                                        gameAreaId: Online.Family.View.DataGrid.areaNumCombogridInputContainer.combogrid('getValue'),
							id: checkedRow[0].id,
						}
					})
					Online.Family.infoWindowContainer.window('open');
				}
			},
		},
	},
    Ip: {
        infoWindowContainer: '',
                
		init: function() {
			Language.getCurrLanguage();
			Utils.loadJavascriptFile('/application/views/libraries/component/' + language + '.js');
			Utils.loadJavascriptFile('/application/views/libraries/utils/' + language + '.js');
			Utils.loadJavascriptFile('/application/views/module/Online/' + language + '.js');
			Utils.initAjax();
                        
			Online.Ip.infoWindowContainer = $('#infoWindow');
			Online.Ip.InfoWindow.init();
			Online.Ip.View.init();
		},
		
		View: {
			dataGridPanelContainer: '',
			
			init: function() {
				Online.Ip.View.dataGridPanelContainer = $('#dataGridPanel #dataGrid');
				Online.Ip.View.DataGrid.init();
			},
			
			DataGrid: {
				operatorIdComboboxLabelContainer: '',
				operatorIdComboboxInputContainer: '',
                areaNumCombogridLabelContainer: '',
                areaNumCombogridInputContainer: '',
				searchButtonContainer: '',
                infoButtonContainer: '',
                exportButtonContainer: '',
				
				init: function() {
					Online.Ip.View.DataGrid.operatorIdComboboxLabelContainer = $('#dataGridPanel #toolbar #operatorIdComboboxLabel');
					Online.Ip.View.DataGrid.operatorIdComboboxInputContainer = $('#dataGridPanel #toolbar #operatorIdComboboxInput');
                    Online.Ip.View.DataGrid.areaNumCombogridLabelContainer = $('#dataGridPanel #toolbar #areaNumCombogridLabel');
					Online.Ip.View.DataGrid.areaNumCombogridInputContainer = $('#dataGridPanel #toolbar #areaNumCombogridInput');
					Online.Ip.View.DataGrid.searchButtonContainer = $('#dataGridPanel #toolbar #searchButton');
                    Online.Ip.View.DataGrid.infoButtonContainer = $('#dataGridPanel #toolbar #infoButton');
                    Online.Ip.View.DataGrid.exportButtonContainer = $('#dataGridPanel #toolbar #exportButton');
					Online.Ip.View.DataGrid.create();
                    Online.Ip.View.DataGrid.showCurrSelectInfo();
				},
				
				create: function() {
					var width = $(document).width() - 40;
					var height = $(document).height() - 40;
					Online.Ip.View.dataGridPanelContainer.width(width);
					Online.Ip.View.dataGridPanelContainer.height(height);
					Online.Ip.View.dataGridPanelContainer.datagrid({
						idField: "ip",
						toolbar: '#toolbar',
						columns: [[
                            {
                                    checkbox: true,
                            },
							{
								field: 'ip',
								title: onlineIpViewDataGridColumnTitle1,
								width: 150,
							},
							{
								field: 'cid',
								title: onlineIpViewDataGridColumnTitle2,
								width: 200,
							},
							{
								field: 'name',
								title: onlineIpViewDataGridColumnTitle3,
								width: 250,
							},
							{
								field: 'level',
								title: onlineIpViewDataGridColumnTitle4,
								width: 200,
							},
                                                        {
								field: 'count',
								title: onlineIpViewDataGridColumnTitle5,
								width: 100,
							},
                                                        
						]],
						loadFilter: Utils.dataGridLoadFilter,
						pagination: true,
						pageSize: 50,
						pageList: [50, 100, 150, 200],
					});
					Component.Combobox.OperatorId.create(
						Online.Ip.View.DataGrid.operatorIdComboboxLabelContainer,
						Online.Ip.View.DataGrid.operatorIdComboboxInputContainer
					);
                    Component.Combogrid.AreaNum.create(
						Online.Ip.View.DataGrid.areaNumCombogridLabelContainer,
						Online.Ip.View.DataGrid.areaNumCombogridInputContainer
					);
					Online.Ip.View.DataGrid.searchButtonContainer.linkbutton({
						iconCls: 'icon-search',
						text: onlineDetailViewDataGridToolbarButtonText1,
					});
					Online.Ip.View.DataGrid.searchButtonContainer.bind(
						'click',
						Online.Ip.View.DataGrid.doSearch
					);
                    Online.Ip.View.DataGrid.infoButtonContainer.linkbutton({
						iconCls: 'icon-search',
						text: onlineDetailViewDataGridToolbarButtonText2,
					});
					Online.Ip.View.DataGrid.infoButtonContainer.bind(
						'click',
						Online.Ip.InfoWindow.open
					);
                    Online.Ip.View.DataGrid.exportButtonContainer.linkbutton({
						iconCls: 'icon-search',
						text: exportViewDataGridToolbarButtonText1,
					});
					Online.Ip.View.DataGrid.exportButtonContainer.bind(
						'click',
						Online.Ip.View.DataGrid.doExport
					);
				},
				getCheckedRows: function(allowMulti) {
					var allowMulti = arguments[0] ? arguments[0] : false;
					var checkedRow = Online.Ip.View.dataGridPanelContainer.datagrid('getChecked');
					
					if(Utils.dataGridValidateCheckedRow(checkedRow, allowMulti) === true) {
						return checkedRow;
					}
					else {
						return false;
					}
				},
                showCurrSelectInfo:function(){
                        $.ajax({
                                url: '/index.php/User/manage/getCurrSelectInfo',
                        })
                        .done(function(response) {
                                if(response.data.operatorId!=false) {
                                    Online.Ip.View.DataGrid.operatorIdComboboxInputContainer.combobox('select',response.data.operatorId);
                                    Online.Ip.View.DataGrid.areaNumCombogridInputContainer.combogrid('setValue',response.data.gameAreaId);
                                }
                        })
                }, 
				doSearch: function() {
					Online.Ip.View.dataGridPanelContainer.datagrid({
						url: '/index.php/Online/ip/getListData',
						queryParams: {
							operatorId: Online.Ip.View.DataGrid.operatorIdComboboxInputContainer.combobox('getValue'),
                                                        gameAreaId: Online.Ip.View.DataGrid.areaNumCombogridInputContainer.combogrid('getValue'),
						}
					});
				},
                doExport: function() {
                       // var url = "/index.php/Currency/first/export";
                        var operatorId = Online.Ip.View.DataGrid.operatorIdComboboxInputContainer.combobox('getValue');
                        var gameAreaId = Online.Ip.View.DataGrid.areaNumCombogridInputContainer.combogrid('getValues');
                       // $.ajax({
                       //       url: url,
                       //       data: {
                       //             operatorId:operatorId,
                       //             gameAreaId:gameAreaId,
                       //             startDate:startDate,
                       //             endDate:endDate,
                       //       },
                       //       success: function () {
                                  var downUrl = "/index.php/Online/ip/export?operatorId="+ operatorId +"&gameAreaId="+gameAreaId
                                  window.location = downUrl;
                       //       }
                       // });
				},
			},
		},
        InfoWindow: {
			dataGridContainer: '',
			
			init: function() {
				Online.Ip.InfoWindow.dataGridContainer = $('#infoWindow #dataGrid');
				Online.Ip.InfoWindow.DataGrid.init();
				Online.Ip.InfoWindow.create();
			},
			
			DataGrid: {
				init: function() {
					Online.Ip.InfoWindow.DataGrid.create();
				},
				
				create: function() {
					Online.Ip.InfoWindow.dataGridContainer.datagrid({
						width: 547,
						height: 392,
						fitColumns: true,
						border: false,
						columns: [[
							{
								field: 'ip',
								title: OnlineIpInfoWindowDataGridColumnTitle1,
								width: 100,
							},
							{
								field: 'cid',
								title: OnlineIpInfoWindowDataGridColumnTitle2,
								width: 80,
							},
							{
								field: 'name',
								title: OnlineIpInfoWindowDataGridColumnTitle3,
								width: 100,
								
							},
                                                        {
								field: 'level',
								title: OnlineIpInfoWindowDataGridColumnTitle4,
								width: 100,
								
							},
						]],
						loadFilter: Utils.dataGridLoadFilter,
						pagination: true,
						pageSize: 50,
						pageList: [50, 100, 150, 200],
					})
				},
			},
			
			create: function() {
				Online.Ip.infoWindowContainer.window({
					width: 600,
					height: 450,
					title: onlineIpInfoWindowTitle,
					collapsible: false,
					minimizable: false,
					maximizable: false,
					closable: true,
					closed: true,
					modal: true,
				});
			},
			
			open: function() {
				var checkedRow = Online.Ip.View.DataGrid.getCheckedRows();
				
				if(checkedRow != false) {
					Online.Ip.InfoWindow.dataGridContainer.datagrid({
						url: '/index.php/Online/ip/getInfoData',
						queryParams: {
                                                        operatorId: Online.Ip.View.DataGrid.operatorIdComboboxInputContainer.combobox('getValue'),
                                                        gameAreaId: Online.Ip.View.DataGrid.areaNumCombogridInputContainer.combogrid('getValue'),
							ip: checkedRow[0].ip,
						}
					})
					Online.Ip.infoWindowContainer.window('open');
				}
			},
		},
	},
    Job: {
		init: function() {
			Language.getCurrLanguage();
			Utils.loadJavascriptFile('/application/views/libraries/component/' + language + '.js');
			Utils.loadJavascriptFile('/application/views/libraries/utils/' + language + '.js');
			Utils.loadJavascriptFile('/application/views/module/Online/' + language + '.js');
			Utils.initAjax();
			
			Online.Job.View.init();
		},
		
		View: {
			dataGridPanelContainer: '',
			
			init: function() {
				Online.Job.View.dataGridPanelContainer = $('#dataGridPanel #dataGrid');
				Online.Job.View.DataGrid.init();
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
					Online.Job.View.DataGrid.operatorIdComboboxLabelContainer = $('#dataGridPanel #toolbar #operatorIdComboboxLabel');
					Online.Job.View.DataGrid.operatorIdComboboxInputContainer = $('#dataGridPanel #toolbar #operatorIdComboboxInput');
                                        Online.Job.View.DataGrid.areaNumCombogridLabelContainer = $('#dataGridPanel #toolbar #areaNumCombogridLabel');
					Online.Job.View.DataGrid.areaNumCombogridInputContainer = $('#dataGridPanel #toolbar #areaNumCombogridInput');
					Online.Job.View.DataGrid.startDateboxLabelContainer = $('#dataGridPanel #toolbar #startDateboxLabel');
					Online.Job.View.DataGrid.startDateboxInputContainer = $('#dataGridPanel #toolbar #startDateboxInput');
					Online.Job.View.DataGrid.endDateboxLabelContainer = $('#dataGridPanel #toolbar #endDateboxLabel');
					Online.Job.View.DataGrid.endDateboxInputContainer = $('#dataGridPanel #toolbar #endDateboxInput');
					Online.Job.View.DataGrid.reportTypeComboboxLabelContainer = $('#dataGridPanel #toolbar #reportTypeComboboxLabel');
					Online.Job.View.DataGrid.reportTypeComboboxInputContainer = $('#dataGridPanel #toolbar #reportTypeComboboxInput');
					Online.Job.View.DataGrid.searchButtonContainer = $('#dataGridPanel #toolbar #searchButton');
                                        Online.Job.View.DataGrid.exportButtonContainer = $('#dataGridPanel #toolbar #exportButton');
					Online.Job.View.DataGrid.create();
                                        Online.Job.View.DataGrid.showCurrSelectInfo();
				},
				
				create: function() {
					var width = $(document).width() - 40;
					var height = $(document).height() - 40;
					Online.Job.View.dataGridPanelContainer.width(width);
					Online.Job.View.dataGridPanelContainer.height(height);
					Online.Job.View.dataGridPanelContainer.datagrid({
						toolbar: '#toolbar',
						columns: [[
							{
								field: 'time',
								title: onlineJobViewDataGridColumnTitle1,
								width: 150,
							},
							{
								field: 'job1',
								title: onlineJobViewDataGridColumnTitle2,
								width: 80,
							},
                                                        {
								field: 'job2',
								title: onlineJobViewDataGridColumnTitle3,
								width: 80,
							},
							{
								field: 'job3',
								title: onlineJobViewDataGridColumnTitle4,
								width: 60,
							},
							{
								field: 'total',
								title: onlineJobViewDataGridColumnTitle5,
								width: 80,
							},
                                                        
						]],
                        onLoadSuccess: function() {
                            Online.Job.View.Chart.Line.create();
						},
						loadFilter: Utils.dataGridLoadFilter,
						pagination: true,
						pageSize: 15,
						pageList: [15, 30, 45, 60, 75, 90, 105],
					});
					Component.Combobox.OperatorId.create(
						Online.Job.View.DataGrid.operatorIdComboboxLabelContainer,
						Online.Job.View.DataGrid.operatorIdComboboxInputContainer
					);
                                        Component.Combogrid.AreaNum.create(
						Online.Job.View.DataGrid.areaNumCombogridLabelContainer,
						Online.Job.View.DataGrid.areaNumCombogridInputContainer
					);
					Component.Datebox.Start.create(
						Online.Job.View.DataGrid.startDateboxLabelContainer,
						Online.Job.View.DataGrid.startDateboxInputContainer
					);
					Component.Datebox.End.create(
						Online.Job.View.DataGrid.endDateboxLabelContainer,
						Online.Job.View.DataGrid.endDateboxInputContainer
					);
					Component.Combobox.ReportType.create(
						Online.Job.View.DataGrid.reportTypeComboboxLabelContainer,
						Online.Job.View.DataGrid.reportTypeComboboxInputContainer
					);
					Online.Job.View.DataGrid.searchButtonContainer.linkbutton({
						iconCls: 'icon-search',
						text: onlineDetailViewDataGridToolbarButtonText1,
					});
					Online.Job.View.DataGrid.searchButtonContainer.bind(
						'click',
						Online.Job.View.DataGrid.doSearch
					);
                                        Online.Job.View.DataGrid.exportButtonContainer.linkbutton({
						iconCls: 'icon-search',
						text: exportViewDataGridToolbarButtonText1,
					});
					Online.Job.View.DataGrid.exportButtonContainer.bind(
						'click',
						Online.Job.View.DataGrid.doExport
					);
				},
				
				doSearch: function() {
                                        var operatorId = Online.Job.View.DataGrid.operatorIdComboboxInputContainer.combobox('getValue');
					var gameAreaIdArray = Online.Job.View.DataGrid.areaNumCombogridInputContainer.combogrid('getValues');
					var startDate = Online.Job.View.DataGrid.startDateboxInputContainer.datebox('getValue');
					var endDate = Online.Job.View.DataGrid.endDateboxInputContainer.datebox('getValue');
					var reportTypeId = Online.Job.View.DataGrid.reportTypeComboboxInputContainer.combobox('getValue');
					
					Online.Job.View.dataGridPanelContainer.datagrid({
						url: '/index.php/Online/job/getListData',
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
                                                    Online.Job.View.DataGrid.operatorIdComboboxInputContainer.combobox('select',response.data.operatorId);
                                                    Online.Job.View.DataGrid.areaNumCombogridInputContainer.combogrid('setValue',response.data.gameAreaId);
                                                    Online.Job.View.DataGrid.startDateboxInputContainer.datebox('setValue',response.data.startDate);
                                                    Online.Job.View.DataGrid.endDateboxInputContainer.datebox('setValue',response.data.endDate);
                                                }
                                        })
                                }, 
                                doExport: function() {
                                       // var url = "/index.php/Currency/first/export";
                                        var operatorId = Online.Job.View.DataGrid.operatorIdComboboxInputContainer.combobox('getValue');
                                        var gameAreaIdString = Online.Job.View.DataGrid.areaNumCombogridInputContainer.combogrid('getValues').toString();
                                        var startDate = Online.Job.View.DataGrid.startDateboxInputContainer.datebox('getValue');
                                        var endDate =  Online.Job.View.DataGrid.endDateboxInputContainer.datebox('getValue');
                                        var reportTypeId = Online.Job.View.DataGrid.reportTypeComboboxInputContainer.combobox('getValue');
                                       // $.ajax({
                                       //       url: url,
                                       //       data: {
                                       //             operatorId:operatorId,
                                       //             gameAreaId:gameAreaId,
                                       //             startDate:startDate,
                                       //             endDate:endDate,
                                       //       },
                                       //       success: function () {
                                                  var downUrl = "/index.php/Online/job/export?operatorId="+ operatorId +"&gameAreaIdString="+gameAreaIdString+"&startDate="+startDate+"&endDate="+endDate+"&reportTypeId="+reportTypeId
                                                  window.location = downUrl;
                                       //       }
                                       // });
				},
			},
                        Chart: {
                                    Line: {
                                            create: function() {
                                                    var data = Online.Job.View.dataGridPanelContainer.datagrid('getData');
                                                    var chartData = [];
                                                    for(index = 0; index < data.rows.length; index++) {
                                                            tmp = [];
                                                            tmp.push(data.rows[index].time);
                                                            tmp.push(data.rows[index].total);
                                                            chartData.push(tmp);
                                                    }

                                                    var data = [chartData];
                                                    var xrows= [] ;
                                                    for(i = 0; i< chartData.length; i++){
                                                        xrows.push(chartData[i][0]);
                                                    }
                                                    var options = {
                                                            axes:{  
                                                                xaxis:{  
                                                                    numberTicks: chartData.length,
								    renderer: $.jqplot.DateAxisRenderer,
                                                                    ticks:xrows,
                                                                    tickOptions:{ 
                                                                            angle:90,
                                                                            fontSize:'8px', 
                                                                            formatString: '%m/%d %H:%M', 
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
    Hourly: {
		init: function() {
			Language.getCurrLanguage();
			Utils.loadJavascriptFile('/application/views/libraries/component/' + language + '.js');
			Utils.loadJavascriptFile('/application/views/libraries/utils/' + language + '.js');
			Utils.loadJavascriptFile('/application/views/module/Online/' + language + '.js');
			Utils.initAjax();
			
			Online.Hourly.View.init();
		},
		
		View: {
			dataGridPanelContainer: '',
			
			init: function() {
				Online.Hourly.View.dataGridPanelContainer = $('#dataGridPanel #dataGrid');
				Online.Hourly.View.DataGrid.init();
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
					Online.Hourly.View.DataGrid.operatorIdComboboxLabelContainer = $('#dataGridPanel #toolbar #operatorIdComboboxLabel');
					Online.Hourly.View.DataGrid.operatorIdComboboxInputContainer = $('#dataGridPanel #toolbar #operatorIdComboboxInput');
                                        Online.Hourly.View.DataGrid.areaNumCombogridLabelContainer = $('#dataGridPanel #toolbar #areaNumCombogridLabel');
					Online.Hourly.View.DataGrid.areaNumCombogridInputContainer = $('#dataGridPanel #toolbar #areaNumCombogridInput');
					Online.Hourly.View.DataGrid.startDateboxLabelContainer = $('#dataGridPanel #toolbar #startDateboxLabel');
					Online.Hourly.View.DataGrid.startDateboxInputContainer = $('#dataGridPanel #toolbar #startDateboxInput');
					Online.Hourly.View.DataGrid.endDateboxLabelContainer = $('#dataGridPanel #toolbar #endDateboxLabel');
					Online.Hourly.View.DataGrid.endDateboxInputContainer = $('#dataGridPanel #toolbar #endDateboxInput');
					Online.Hourly.View.DataGrid.searchButtonContainer = $('#dataGridPanel #toolbar #searchButton');
                                        Online.Hourly.View.DataGrid.exportButtonContainer = $('#dataGridPanel #toolbar #exportButton');
					Online.Hourly.View.DataGrid.create();
                                        Online.Hourly.View.DataGrid.showCurrSelectInfo();
				},
				
				create: function() {
					var width = $(document).width() - 40;
					var height = $(document).height() - 40;
					Online.Hourly.View.dataGridPanelContainer.width(width);
					Online.Hourly.View.dataGridPanelContainer.height(height);
					Online.Hourly.View.dataGridPanelContainer.datagrid({
						toolbar: '#toolbar',
						columns: [[
							{
								field: 'time',
								title: onlineHourlyViewDataGridColumnTitle1,
								width: 150,
							},
							{
								field: 'regist_new',
								title: onlineHourlyViewDataGridColumnTitle2,
								width: 80,
							},
                                                        {
								field: 'enter_new',
								title: onlineHourlyViewDataGridColumnTitle3,
								width: 80,
							},
							{
								field: 'rate',
								title: onlineHourlyViewDataGridColumnTitle4,
								width: 60,
							},
							{
								field: 'login_count',
								title: onlineHourlyViewDataGridColumnTitle5,
								width: 80,
							},
                                                        {
								field: 'login_player',
								title: onlineHourlyViewDataGridColumnTitle6,
								width: 150,
							},
							{
								field: 'online_max',
								title: onlineHourlyViewDataGridColumnTitle7,
								width: 80,
							},
                                                        {
								field: 'online_min',
								title: onlineHourlyViewDataGridColumnTitle8,
								width: 80,
							},
							{
								field: 'online_avg',
								title: onlineHourlyViewDataGridColumnTitle9,
								width: 60,
							},
							{
								field: 'pay_count',
								title: onlineHourlyViewDataGridColumnTitle10,
								width: 80,
							},
                                                        {
								field: 'pay_player',
								title: onlineHourlyViewDataGridColumnTitle11,
								width: 80,
							},
                                                        {
								field: 'ARPU',
								title: onlineHourlyViewDataGridColumnTitle12,
								width: 80,
							},
                                                        {
								field: 'pay_rate',
								title: onlineHourlyViewDataGridColumnTitle13,
								width: 80,
							},
                                                        
						]],
                                                onLoadSuccess: function() {
                                                    Online.Hourly.View.Chart.Line.create();
						},
						loadFilter: Utils.dataGridLoadFilter,
						pagination: true,
						pageSize: 50,
						pageList: [50, 100, 150, 200],
					});
					Component.Combobox.OperatorId.create(
						Online.Hourly.View.DataGrid.operatorIdComboboxLabelContainer,
						Online.Hourly.View.DataGrid.operatorIdComboboxInputContainer
					);
                                        Component.Combogrid.AreaNum.create(
						Online.Hourly.View.DataGrid.areaNumCombogridLabelContainer,
						Online.Hourly.View.DataGrid.areaNumCombogridInputContainer
					);
					Component.Datebox.Start.create(
						Online.Hourly.View.DataGrid.startDateboxLabelContainer,
						Online.Hourly.View.DataGrid.startDateboxInputContainer
					);
					Component.Datebox.End.create(
						Online.Hourly.View.DataGrid.endDateboxLabelContainer,
						Online.Hourly.View.DataGrid.endDateboxInputContainer
					);
					Online.Hourly.View.DataGrid.searchButtonContainer.linkbutton({
						iconCls: 'icon-search',
						text: onlineDetailViewDataGridToolbarButtonText1,
					});
					Online.Hourly.View.DataGrid.searchButtonContainer.bind(
						'click',
						Online.Hourly.View.DataGrid.doSearch
					);
                                        Online.Hourly.View.DataGrid.exportButtonContainer.linkbutton({
						iconCls: 'icon-search',
						text: exportViewDataGridToolbarButtonText1,
					});
					Online.Hourly.View.DataGrid.exportButtonContainer.bind(
						'click',
						Online.Hourly.View.DataGrid.doExport
					);
				},
				
				doSearch: function() {
                                        var operatorId = Online.Hourly.View.DataGrid.operatorIdComboboxInputContainer.combobox('getValue');
					var gameAreaIdArray = Online.Hourly.View.DataGrid.areaNumCombogridInputContainer.combogrid('getValues');
					var startDate = Online.Hourly.View.DataGrid.startDateboxInputContainer.datebox('getValue');
					var endDate = Online.Hourly.View.DataGrid.endDateboxInputContainer.datebox('getValue');
					
					Online.Hourly.View.dataGridPanelContainer.datagrid({
						url: '/index.php/Online/hourly/getListData',
						queryParams: {
                                                        operatorId:operatorId,
							gameAreaIdString: gameAreaIdArray.toString(),
							startDate: startDate,
							endDate: endDate,
						}
					});
				},
                                showCurrSelectInfo:function(){
                                        $.ajax({
                                                url: '/index.php/User/manage/getCurrSelectInfo',
                                        })
                                        .done(function(response) {
                                                if(response.data.operatorId!=false) {
                                                    Online.Hourly.View.DataGrid.operatorIdComboboxInputContainer.combobox('select',response.data.operatorId);
                                                    Online.Hourly.View.DataGrid.areaNumCombogridInputContainer.combogrid('setValue',response.data.gameAreaId);
                                                    Online.Hourly.View.DataGrid.startDateboxInputContainer.datebox('setValue',response.data.startDate);
                                                    Online.Hourly.View.DataGrid.endDateboxInputContainer.datebox('setValue',response.data.endDate);
                                                }
                                        })
                                }, 
                                doExport: function() {

                                        var operatorId = Online.Hourly.View.DataGrid.operatorIdComboboxInputContainer.combobox('getValue');
                                        var gameAreaIdString = Online.Hourly.View.DataGrid.areaNumCombogridInputContainer.combogrid('getValues').toString();
                                        var startDate = Online.Hourly.View.DataGrid.startDateboxInputContainer.datebox('getValue');
                                        var endDate =  Online.Hourly.View.DataGrid.endDateboxInputContainer.datebox('getValue');

                                                  var downUrl = "/index.php/Online/hourly/export?operatorId="+ operatorId +"&gameAreaIdString="+gameAreaIdString+"&startDate="+startDate+"&endDate="+endDate
                                                  window.location = downUrl;

				},
			},
                        Chart: {
                                    Line: {
                                            create: function() {
                                                    var data = Online.Hourly.View.dataGridPanelContainer.datagrid('getData');
                                                    var chartData = [];
                                                    for(index = 0; index < data.rows.length; index++) {
                                                            tmp = [];
                                                            tmp.push(data.rows[index].time);
                                                            tmp.push(data.rows[index].online_max);
                                                            chartData.push(tmp);
                                                    }

                                                    var data = [chartData];
                                                    var xrows= [] ;
                                                    for(i = 0; i< chartData.length; i++){
                                                        xrows.push(chartData[i][0]);
                                                    }
                                                    var options = {
                                                            axes:{  
                                                                xaxis:{  
                                                                    numberTicks: chartData.length,
								    renderer: $.jqplot.DateAxisRenderer,
                                                                    ticks:xrows,
                                                                    tickOptions:{ 
                                                                            angle:90,
                                                                            fontSize:'8px', 
                                                                            formatString: '%m/%d %H:%M', 
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
    Day: {
		init: function() {
			Language.getCurrLanguage();
			Utils.loadJavascriptFile('/application/views/libraries/component/' + language + '.js');
			Utils.loadJavascriptFile('/application/views/libraries/utils/' + language + '.js');
			Utils.loadJavascriptFile('/application/views/module/Online/' + language + '.js');
			Utils.initAjax();
			
			Online.Day.View.init();
		},
		
		View: {
			dataGridPanelContainer: '',
			
			init: function() {
				Online.Day.View.dataGridPanelContainer = $('#dataGridPanel #dataGrid');
				Online.Day.View.DataGrid.init();
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
					Online.Day.View.DataGrid.operatorIdComboboxLabelContainer = $('#dataGridPanel #toolbar #operatorIdComboboxLabel');
					Online.Day.View.DataGrid.operatorIdComboboxInputContainer = $('#dataGridPanel #toolbar #operatorIdComboboxInput');
                                        Online.Day.View.DataGrid.areaNumCombogridLabelContainer = $('#dataGridPanel #toolbar #areaNumCombogridLabel');
					Online.Day.View.DataGrid.areaNumCombogridInputContainer = $('#dataGridPanel #toolbar #areaNumCombogridInput');
					Online.Day.View.DataGrid.startDateboxLabelContainer = $('#dataGridPanel #toolbar #startDateboxLabel');
					Online.Day.View.DataGrid.startDateboxInputContainer = $('#dataGridPanel #toolbar #startDateboxInput');
					Online.Day.View.DataGrid.endDateboxLabelContainer = $('#dataGridPanel #toolbar #endDateboxLabel');
					Online.Day.View.DataGrid.endDateboxInputContainer = $('#dataGridPanel #toolbar #endDateboxInput');
					Online.Day.View.DataGrid.searchButtonContainer = $('#dataGridPanel #toolbar #searchButton');
                                        Online.Day.View.DataGrid.exportButtonContainer = $('#dataGridPanel #toolbar #exportButton');
					Online.Day.View.DataGrid.create();
                                        Online.Day.View.DataGrid.showCurrSelectInfo();
				},
				
				create: function() {
					var width = $(document).width() - 40;
					var height = $(document).height() - 40;
					Online.Day.View.dataGridPanelContainer.width(width);
					Online.Day.View.dataGridPanelContainer.height(height);
					Online.Day.View.dataGridPanelContainer.datagrid({
						toolbar: '#toolbar',
						columns: [[
							{
								field: 'time',
								title: onlineHourlyViewDataGridColumnTitle1,
								width: 150,
							},
							{
								field: 'regist_new',
								title: onlineHourlyViewDataGridColumnTitle2,
								width: 80,
							},
                                                        {
								field: 'enter_new',
								title: onlineHourlyViewDataGridColumnTitle3,
								width: 80,
							},
							{
								field: 'rate', 
								title: onlineHourlyViewDataGridColumnTitle4,
								width: 60,
							},
							{
								field: 'login_count',
								title: onlineHourlyViewDataGridColumnTitle5,
								width: 80,
							},
                                                        {
								field: 'login_player',
								title: onlineHourlyViewDataGridColumnTitle6,
								width: 150,
							},
							{
								field: 'online_max',
								title: onlineHourlyViewDataGridColumnTitle7,
								width: 80,
							},
                                                        {
								field: 'online_min',
								title: onlineHourlyViewDataGridColumnTitle8,
								width: 80,
							},
							{
								field: 'online_avg',
								title: onlineHourlyViewDataGridColumnTitle9,
								width: 60,
							},
							{
								field: 'pay_count',		//除以100以后
								title: onlineHourlyViewDataGridColumnTitle10,
								width: 80,
							},
                                                        {
								field: 'pay_player',
								title: onlineHourlyViewDataGridColumnTitle11,
								width: 80,
							},
                                                        {
								field: 'ARPU',
								title: onlineHourlyViewDataGridColumnTitle12,
								width: 80,
							},
                                                        {
								field: 'pay_rate',
								title: onlineHourlyViewDataGridColumnTitle13,
								width: 80,
							},
                                                        
						]],
                                                onLoadSuccess: function() {
                                                    Online.Day.View.Chart.Line.create();
						},
						loadFilter: Utils.dataGridLoadFilter,
						pagination: true,
						pageSize: 50,
						pageList: [50, 100, 150, 200],
					});
					Component.Combobox.OperatorId.create(
						Online.Day.View.DataGrid.operatorIdComboboxLabelContainer,
						Online.Day.View.DataGrid.operatorIdComboboxInputContainer
					);
                                        Component.Combogrid.AreaNum.create(
						Online.Day.View.DataGrid.areaNumCombogridLabelContainer,
						Online.Day.View.DataGrid.areaNumCombogridInputContainer
					);
					Component.Datebox.Start.create(
						Online.Day.View.DataGrid.startDateboxLabelContainer,
						Online.Day.View.DataGrid.startDateboxInputContainer
					);
					Component.Datebox.End.create(
						Online.Day.View.DataGrid.endDateboxLabelContainer,
						Online.Day.View.DataGrid.endDateboxInputContainer
					);
					Online.Day.View.DataGrid.searchButtonContainer.linkbutton({
						iconCls: 'icon-search',
						text: onlineDetailViewDataGridToolbarButtonText1,
					});
					Online.Day.View.DataGrid.searchButtonContainer.bind(
						'click',
						Online.Day.View.DataGrid.doSearch
					);
                                        Online.Day.View.DataGrid.exportButtonContainer.linkbutton({
						iconCls: 'icon-search',
						text: exportViewDataGridToolbarButtonText1,
					});
					Online.Day.View.DataGrid.exportButtonContainer.bind(
						'click',
						Online.Day.View.DataGrid.doExport
					);
				},
				
				doSearch: function() {
                                        var operatorId = Online.Day.View.DataGrid.operatorIdComboboxInputContainer.combobox('getValue');
					var gameAreaIdArray = Online.Day.View.DataGrid.areaNumCombogridInputContainer.combogrid('getValues');
					var startDate = Online.Day.View.DataGrid.startDateboxInputContainer.datebox('getValue');
					var endDate = Online.Day.View.DataGrid.endDateboxInputContainer.datebox('getValue');
					
					Online.Day.View.dataGridPanelContainer.datagrid({
						url: '/index.php/Online/day/getListData',
						queryParams: {
                                                        operatorId:operatorId,
							gameAreaIdString: gameAreaIdArray.toString(),
							startDate: startDate,
							endDate: endDate,
						}
					});
				},
                                showCurrSelectInfo:function(){
                                        $.ajax({
                                                url: '/index.php/User/manage/getCurrSelectInfo',
                                        })
                                        .done(function(response) {
                                                if(response.data.operatorId!=false) {
                                                    Online.Day.View.DataGrid.operatorIdComboboxInputContainer.combobox('select',response.data.operatorId);
                                                    Online.Day.View.DataGrid.areaNumCombogridInputContainer.combogrid('setValue',response.data.gameAreaId);
                                                    Online.Day.View.DataGrid.startDateboxInputContainer.datebox('setValue',response.data.startDate);
                                                    Online.Day.View.DataGrid.endDateboxInputContainer.datebox('setValue',response.data.endDate);
                                                }
                                        })
                                }, 
                                doExport: function() {
                                       // var url = "/index.php/Currency/first/export";
                                        var operatorId = Online.Day.View.DataGrid.operatorIdComboboxInputContainer.combobox('getValue');
                                        var gameAreaIdString = Online.Day.View.DataGrid.areaNumCombogridInputContainer.combogrid('getValues').toString();
                                        var startDate = Online.Day.View.DataGrid.startDateboxInputContainer.datebox('getValue');
                                        var endDate =  Online.Day.View.DataGrid.endDateboxInputContainer.datebox('getValue');
                                       // $.ajax({
                                       //       url: url,
                                       //       data: {
                                       //             operatorId:operatorId,
                                       //             gameAreaId:gameAreaId,
                                       //             startDate:startDate,
                                       //             endDate:endDate,
                                       //       },
                                       //       success: function () {
                                                  var downUrl = "/index.php/Online/day/export?operatorId="+ operatorId +"&gameAreaIdString="+gameAreaIdString+"&startDate="+startDate+"&endDate="+endDate
                                                  window.location = downUrl;
                                       //       }
                                       // });
				},
			},
                        Chart: {
                                    Line: {
                                            create: function() {
                                                    var data = Online.Day.View.dataGridPanelContainer.datagrid('getData');
                                                    var chartData = [];
                                                    for(index = 0; index < data.rows.length; index++) {
                                                            tmp = [];
                                                            tmp.push(data.rows[index].time);
                                                            tmp.push(data.rows[index].online_max);
                                                            chartData.push(tmp);
                                                    }

                                                    var data = [chartData];
                                                    var xrows= [] ;
                                                    for(i = 0; i< chartData.length; i++){
                                                        xrows.push(chartData[i][0]);
                                                    }
                                                    var options = {
                                                            axes:{  
                                                                xaxis:{  
                                                                    numberTicks: chartData.length,
								    renderer: $.jqplot.DateAxisRenderer,
                                                                    ticks:xrows,
                                                                    tickOptions:{ 
                                                                            angle:90,
                                                                            fontSize:'8px', 
                                                                            formatString: '%m/%d', 
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
    Month: {
		init: function() {
			Language.getCurrLanguage();
			Utils.loadJavascriptFile('/application/views/libraries/component/' + language + '.js');
			Utils.loadJavascriptFile('/application/views/libraries/utils/' + language + '.js');
			Utils.loadJavascriptFile('/application/views/module/Online/' + language + '.js');
			Utils.initAjax();
			
			Online.Month.View.init();
		},
		
		View: {
			dataGridPanelContainer: '',
			
			init: function() {
				Online.Month.View.dataGridPanelContainer = $('#dataGridPanel #dataGrid');
				Online.Month.View.DataGrid.init();
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
					Online.Month.View.DataGrid.operatorIdComboboxLabelContainer = $('#dataGridPanel #toolbar #operatorIdComboboxLabel');
					Online.Month.View.DataGrid.operatorIdComboboxInputContainer = $('#dataGridPanel #toolbar #operatorIdComboboxInput');
                    Online.Month.View.DataGrid.areaNumCombogridLabelContainer = $('#dataGridPanel #toolbar #areaNumCombogridLabel');
					Online.Month.View.DataGrid.areaNumCombogridInputContainer = $('#dataGridPanel #toolbar #areaNumCombogridInput');
					Online.Month.View.DataGrid.startDateboxLabelContainer = $('#dataGridPanel #toolbar #startDateboxLabel');
					Online.Month.View.DataGrid.startDateboxInputContainer = $('#dataGridPanel #toolbar #startDateboxInput');
					Online.Month.View.DataGrid.endDateboxLabelContainer = $('#dataGridPanel #toolbar #endDateboxLabel');
					Online.Month.View.DataGrid.endDateboxInputContainer = $('#dataGridPanel #toolbar #endDateboxInput');
					Online.Month.View.DataGrid.searchButtonContainer = $('#dataGridPanel #toolbar #searchButton');
                    Online.Month.View.DataGrid.exportButtonContainer = $('#dataGridPanel #toolbar #exportButton');
					Online.Month.View.DataGrid.create();
                    Online.Month.View.DataGrid.showCurrSelectInfo();
				},
				
				create: function() {
					var width = $(document).width() - 40;
					var height = $(document).height() - 40;
					Online.Month.View.dataGridPanelContainer.width(width);
					Online.Month.View.dataGridPanelContainer.height(height);
					Online.Month.View.dataGridPanelContainer.datagrid({
						toolbar: '#toolbar',
						columns: [[
                            {
								field: 'sid',
								title: onlineHourlyViewDataGridColumnTitle15,
								width: 80,
							},
							{
								field: 'pay_count',
								title: onlineHourlyViewDataGridColumnTitle10,
								width: 80,
							},
                            {
								field: 'pay_player',
								title: onlineHourlyViewDataGridColumnTitle11,
								width: 80,
							},
                            {
								field: 'ARPU',
								title: onlineHourlyViewDataGridColumnTitle12,
								width: 80,
							},
                            {
								field: 'pay_times',
								title: onlineHourlyViewDataGridColumnTitle14,
								width: 80,
							},
                                                        
						]],
						loadFilter: Utils.dataGridLoadFilter,
						pagination: true,
						pageSize: 50,
                    	showFooter:true,  
						pageList: [50, 100, 150, 200],
					});
					Component.Combobox.OperatorId.create(
						Online.Month.View.DataGrid.operatorIdComboboxLabelContainer,
						Online.Month.View.DataGrid.operatorIdComboboxInputContainer
					);
                    Component.Combogrid.AreaNum.create(
						Online.Month.View.DataGrid.areaNumCombogridLabelContainer,
						Online.Month.View.DataGrid.areaNumCombogridInputContainer
					);
					Component.Datebox.Start.create(
						Online.Month.View.DataGrid.startDateboxLabelContainer,
						Online.Month.View.DataGrid.startDateboxInputContainer
					);
					Component.Datebox.End.create(
						Online.Month.View.DataGrid.endDateboxLabelContainer, 
						Online.Month.View.DataGrid.endDateboxInputContainer
					);
					Online.Month.View.DataGrid.searchButtonContainer.linkbutton({
						iconCls: 'icon-search',
						text: onlineDetailViewDataGridToolbarButtonText1,
					});
					Online.Month.View.DataGrid.searchButtonContainer.bind(
						'click',
						Online.Month.View.DataGrid.doSearch
					);
                    Online.Month.View.DataGrid.exportButtonContainer.linkbutton({
						iconCls: 'icon-search',
						text: exportViewDataGridToolbarButtonText1,
					});
					Online.Month.View.DataGrid.exportButtonContainer.bind(
						'click',
						Online.Month.View.DataGrid.doExport
					);
				},
				
				doSearch: function() {
                    var operatorId = Online.Month.View.DataGrid.operatorIdComboboxInputContainer.combobox('getValue');
					var gameAreaIdArray = Online.Month.View.DataGrid.areaNumCombogridInputContainer.combogrid('getValues');
					var startDate = Online.Month.View.DataGrid.startDateboxInputContainer.datebox('getValue');
					var endDate = Online.Month.View.DataGrid.endDateboxInputContainer.datebox('getValue');
					
					Online.Month.View.dataGridPanelContainer.datagrid({
						url: '/index.php/Online/month/getListData',
						queryParams: {
                            operatorId:operatorId,
							gameAreaIdString: gameAreaIdArray.toString(),
							startDate: startDate,
							endDate: endDate,
						}
					});
				},
                showCurrSelectInfo:function(){
                        $.ajax({
                                url: '/index.php/User/manage/getCurrSelectInfo',
                        })
                        .done(function(response) {
                                if(response.data.operatorId!=false) {
                                    Online.Month.View.DataGrid.operatorIdComboboxInputContainer.combobox('select',response.data.operatorId);
                                    Online.Month.View.DataGrid.areaNumCombogridInputContainer.combogrid('setValue',response.data.gameAreaId);
                                    Online.Month.View.DataGrid.startDateboxInputContainer.datebox('setValue',response.data.startDate);
                                    Online.Month.View.DataGrid.endDateboxInputContainer.datebox('setValue',response.data.endDate);
                                }
                        })
                }, 
                doExport: function() {
                       // var url = "/index.php/Currency/first/export";
                        var operatorId = Online.Month.View.DataGrid.operatorIdComboboxInputContainer.combobox('getValue');
                        var gameAreaId = Online.Month.View.DataGrid.areaNumCombogridInputContainer.combogrid('getValues');
                        var startDate = Online.Month.View.DataGrid.startDateboxInputContainer.datebox('getValue');
						var endDate = Online.Month.View.DataGrid.endDateboxInputContainer.datebox('getValue');
                       // $.ajax({
                       //       url: url,
                       //       data: {
                       //             operatorId:operatorId,
                       //             gameAreaId:gameAreaId,
                       //             startDate:startDate,
                       //             endDate:endDate,
                       //       },
                       //       success: function () {
                        var downUrl = "/index.php/Online/month/export?operatorId="+ operatorId +"&gameAreaId="+gameAreaId+"&startDate="+startDate+"&endDate="+endDate
                        window.location = downUrl;
                       //       }
                       // });
				},
			},
		},
	},
	AllPay: {
		init: function() {
			Language.getCurrLanguage();
			Utils.loadJavascriptFile('/application/views/libraries/component/' + language + '.js');
			Utils.loadJavascriptFile('/application/views/libraries/utils/' + language + '.js');
			Utils.loadJavascriptFile('/application/views/module/Online/' + language + '.js');
			Utils.initAjax();
			
			Online.AllPay.View.init();
		},
		
		View: {
			dataGridPanelContainer: '',
			
			init: function() {
				Online.AllPay.View.dataGridPanelContainer = $('#dataGridPanel #dataGrid');
				Online.AllPay.View.DataGrid.init();
			},
			
			DataGrid: {
				startDateboxLabelContainer: '',
				startDateboxInputContainer: '',
				endDateboxLabelContainer: '',
				endDateboxInputContainer: '',
				reportTypeComboboxLabelContainer: '',
				reportTypeComboboxInputContainer: '',
				searchButtonContainer: '',
                                exportButtonContainer: '',
				
				init: function() {
					Online.AllPay.View.DataGrid.startDateboxLabelContainer = $('#dataGridPanel #toolbar #startDateboxLabel');
					Online.AllPay.View.DataGrid.startDateboxInputContainer = $('#dataGridPanel #toolbar #startDateboxInput');
					Online.AllPay.View.DataGrid.endDateboxLabelContainer = $('#dataGridPanel #toolbar #endDateboxLabel');
					Online.AllPay.View.DataGrid.endDateboxInputContainer = $('#dataGridPanel #toolbar #endDateboxInput');
					Online.AllPay.View.DataGrid.searchButtonContainer = $('#dataGridPanel #toolbar #searchButton');
                                        Online.AllPay.View.DataGrid.exportButtonContainer = $('#dataGridPanel #toolbar #exportButton');
					Online.AllPay.View.DataGrid.create();
                                        Online.AllPay.View.DataGrid.showCurrSelectInfo();
				},
				
				create: function() {
					var width = $(document).width() - 40;
					var height = $(document).height() - 40;
					Online.AllPay.View.dataGridPanelContainer.width(width);
					Online.AllPay.View.dataGridPanelContainer.height(height);
					Online.AllPay.View.dataGridPanelContainer.datagrid({
						toolbar: '#toolbar',
						columns: [[
                                                        {
								field: 'operator',
								title: onlineHourlyViewDataGridColumnTitle18, 
								width: 80,
							},
							{
								field: 'pay_count',
								title: onlineHourlyViewDataGridColumnTitle10,
								width: 80,
							},
                                                        {
								field: 'pay_player',
								title: onlineHourlyViewDataGridColumnTitle11,
								width: 80,
							},
                                                        {
								field: 'ARPU',
								title: onlineHourlyViewDataGridColumnTitle12,
								width: 80,
							},
                                                        {
								field: 'money',
								title: onlineHourlyViewDataGridColumnTitle16,
								width: 80,
							},
                                                        {
								field: 'pay_times',
								title: onlineHourlyViewDataGridColumnTitle14,
								width: 80,
							},
                                                        
						]],
						loadFilter: Utils.dataGridLoadFilter,
						pagination: true,
						pageSize: 50,
                                                showFooter:true,  
						pageList: [50, 100, 150, 200],
					});
					Component.Datebox.Start.create(
						Online.AllPay.View.DataGrid.startDateboxLabelContainer,
						Online.AllPay.View.DataGrid.startDateboxInputContainer
					);
					Component.Datebox.End.create(
						Online.AllPay.View.DataGrid.endDateboxLabelContainer,
						Online.AllPay.View.DataGrid.endDateboxInputContainer
					);
					Online.AllPay.View.DataGrid.searchButtonContainer.linkbutton({
						iconCls: 'icon-search',
						text: onlineDetailViewDataGridToolbarButtonText1,
					});
					Online.AllPay.View.DataGrid.searchButtonContainer.bind(
						'click',
						Online.AllPay.View.DataGrid.doSearch
					);
                                        Online.AllPay.View.DataGrid.exportButtonContainer.linkbutton({
						iconCls: 'icon-search',
						text: exportViewDataGridToolbarButtonText1,
					});
					Online.AllPay.View.DataGrid.exportButtonContainer.bind(
						'click',
						Online.AllPay.View.DataGrid.doExport
					);
				},
				
				doSearch: function() {
					var startDate = Online.AllPay.View.DataGrid.startDateboxInputContainer.datebox('getValue');
					var endDate = Online.AllPay.View.DataGrid.endDateboxInputContainer.datebox('getValue');
					
					Online.AllPay.View.dataGridPanelContainer.datagrid({
						url: '/index.php/Online/allPay/getListData',
						queryParams: {
							startDate: startDate,
							endDate: endDate,
						}
					});
				},
                                showCurrSelectInfo:function(){
                                        $.ajax({
                                                url: '/index.php/User/manage/getCurrSelectInfo',
                                        })
                                        .done(function(response) {
                                                if(response.data.operatorId!=false) {
                                                    Online.AllPay.View.DataGrid.startDateboxInputContainer.datebox('setValue',response.data.startDate);
                                                    Online.AllPay.View.DataGrid.endDateboxInputContainer.datebox('setValue',response.data.endDate);
                                                }
                                        })
                                }, 
                                doExport: function() {
                                       // var url = "/index.php/Currency/first/export";
                                        var startDate = Online.AllPay.View.DataGrid.startDateboxInputContainer.datebox('getValue');
					var endDate = Online.AllPay.View.DataGrid.endDateboxInputContainer.datebox('getValue');
                                       // $.ajax({
                                       //       url: url,
                                       //       data: {
                                       //             operatorId:operatorId,
                                       //             gameAreaId:gameAreaId,
                                       //             startDate:startDate,
                                       //             endDate:endDate,
                                       //       },
                                       //       success: function () {
                                                  var downUrl = "/index.php/Online/allPay/export?startDate="+startDate+"&endDate="+endDate
                                                  window.location = downUrl;
                                       //       }
                                       // });
				},
			},
		},
	},
}