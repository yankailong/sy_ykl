var Resource = {
	Gold: {
		init: function() {
			Language.getCurrLanguage();
			Utils.loadJavascriptFile('/application/views/libraries/component/' + language + '.js');
			Utils.loadJavascriptFile('/application/views/libraries/utils/' + language + '.js');
			Utils.loadJavascriptFile('/application/views/module/Resource/' + language + '.js');
			Utils.initAjax();
			
			Resource.Gold.View.init();
		},
		
		View: {
			dataGridPanelContainer: '',
			
			init: function() {
				Resource.Gold.View.dataGridPanelContainer = $('#dataGridPanel #dataGrid');
				Resource.Gold.View.DataGrid.init();
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
					Resource.Gold.View.DataGrid.operatorIdComboboxLabelContainer = $('#dataGridPanel #toolbar #operatorIdComboboxLabel');
					Resource.Gold.View.DataGrid.operatorIdComboboxInputContainer = $('#dataGridPanel #toolbar #operatorIdComboboxInput');
                                        Resource.Gold.View.DataGrid.areaNumCombogridLabelContainer = $('#dataGridPanel #toolbar #areaNumCombogridLabel');
					Resource.Gold.View.DataGrid.areaNumCombogridInputContainer = $('#dataGridPanel #toolbar #areaNumCombogridInput');
                                        Resource.Gold.View.DataGrid.searchStartDateboxLabelContainer = $('#dataGridPanel #toolbar #searchStartDateboxLabel');
					Resource.Gold.View.DataGrid.searchStartDateboxInputContainer = $('#dataGridPanel #toolbar #searchStartDateboxInput');
					Resource.Gold.View.DataGrid.searchEndDateboxLabelContainer = $('#dataGridPanel #toolbar #searchEndDateboxLabel');
					Resource.Gold.View.DataGrid.searchEndDateboxInputContainer = $('#dataGridPanel #toolbar #searchEndDateboxInput');
					Resource.Gold.View.DataGrid.searchButtonContainer = $('#dataGridPanel #toolbar #searchButton');
                                        Resource.Gold.View.DataGrid.exportButtonContainer = $('#dataGridPanel #toolbar #exportButton');
					Resource.Gold.View.DataGrid.create();
                                        Resource.Gold.View.DataGrid.showCurrSelectInfo();
				},
				
				create: function() {
					var width = $(document).width() - 40;
					var height = $(document).height() - 40;
					Resource.Gold.View.dataGridPanelContainer.width(width);
					Resource.Gold.View.dataGridPanelContainer.height(height);
					Resource.Gold.View.dataGridPanelContainer.datagrid({
						toolbar: '#toolbar',
						columns: [[
							{
								field: 'date',
								title: resourceGoldViewDataGridColumnTitle1,
								width: 100,
							},
							{
								field: 'payGold',
								title: resourceGoldViewDataGridColumnTitle2,
								width: 100,
							},
							{
								field: 'payCount',
								title: resourceGoldViewDataGridColumnTitle3,
								width: 100,
							},
                                                        {
								field: 'goldGet',
								title: resourceGoldViewDataGridColumnTitle4,
								width: 100,
							},
                                                        {
								field: 'goldCost',
								title: resourceGoldViewDataGridColumnTitle5,
								width: 100,
							},
                                                        {
								field: 'profit',
								title: resourceGoldViewDataGridColumnTitle6,
								width: 100,
							},
                                                        {
								field: 'goldAll',
								title: resourceGoldViewDataGridColumnTitle7,
								width: 100,
							},
                                                        {
								field: 'login',
								title: resourceGoldViewDataGridColumnTitle8,
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
						Resource.Gold.View.DataGrid.operatorIdComboboxLabelContainer,
						Resource.Gold.View.DataGrid.operatorIdComboboxInputContainer
					);
                                        Component.Combogrid.AreaNum.create(
						Resource.Gold.View.DataGrid.areaNumCombogridLabelContainer,
						Resource.Gold.View.DataGrid.areaNumCombogridInputContainer
					);
					Component.Datebox.Start.create(
						Resource.Gold.View.DataGrid.searchStartDateboxLabelContainer,
						Resource.Gold.View.DataGrid.searchStartDateboxInputContainer
					);
                                        Component.Datebox.End.create(
						Resource.Gold.View.DataGrid.searchEndDateboxLabelContainer,
						Resource.Gold.View.DataGrid.searchEndDateboxInputContainer
					);
					Resource.Gold.View.DataGrid.searchButtonContainer.linkbutton({
						iconCls: 'icon-search',
						text: resourceViewDataGridToolbarButtonText1,
					});
					Resource.Gold.View.DataGrid.searchButtonContainer.bind(
						'click',
						Resource.Gold.View.DataGrid.doSearch
					);
                                        Resource.Gold.View.DataGrid.exportButtonContainer.linkbutton({
						iconCls: 'icon-search',
						text: exportViewDataGridToolbarButtonText1,
					});
					Resource.Gold.View.DataGrid.exportButtonContainer.bind(
						'click',
						Resource.Gold.View.DataGrid.doExport
					);
				},
				
				doSearch: function() {
                                        var operatorId = Resource.Gold.View.DataGrid.operatorIdComboboxInputContainer.combobox('getValue');
                                        var gameAreaId = Resource.Gold.View.DataGrid.areaNumCombogridInputContainer.combogrid('getValue');
					var searchStartDate = Resource.Gold.View.DataGrid.searchStartDateboxInputContainer.datebox('getValue');
                                        var searchEndDate = Resource.Gold.View.DataGrid.searchEndDateboxInputContainer.datebox('getValue');
					
					Resource.Gold.View.dataGridPanelContainer.datagrid({
						url: '/index.php/Resource/gold/getListData',
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
                                                    Resource.Gold.View.DataGrid.operatorIdComboboxInputContainer.combobox('select',response.data.operatorId);
                                                    Resource.Gold.View.DataGrid.areaNumCombogridInputContainer.combogrid('setValue',response.data.gameAreaId);
                                                    Resource.Gold.View.DataGrid.searchStartDateboxInputContainer.datebox('setValue',response.data.startDate);
                                                    Resource.Gold.View.DataGrid.searchEndDateboxInputContainer.datebox('setValue',response.data.endDate);
                                                }
                                        })
                                }, 
                                doExport: function() {

                                        var operatorId = Resource.Gold.View.DataGrid.operatorIdComboboxInputContainer.combobox('getValue');
                                        var gameAreaId = Resource.Gold.View.DataGrid.areaNumCombogridInputContainer.combogrid('getValues').toString();
                                        var startDate = Resource.Gold.View.DataGrid.searchStartDateboxInputContainer.datebox('getValue');
                                        var endDate =  Resource.Gold.View.DataGrid.searchEndDateboxInputContainer.datebox('getValue');

                                                  var downUrl = "/index.php/Resource/gold/export?operatorId="+ operatorId +"&gameAreaId="+gameAreaId+"&startDate="+startDate+"&endDate="+endDate
                                                  window.location = downUrl;

				},

			},
		},
	},
    Money: {
		init: function() {
			Language.getCurrLanguage();
			Utils.loadJavascriptFile('/application/views/libraries/component/' + language + '.js');
			Utils.loadJavascriptFile('/application/views/libraries/utils/' + language + '.js');
			Utils.loadJavascriptFile('/application/views/module/Resource/' + language + '.js');
			Utils.initAjax();
			
			Resource.Money.View.init();
		},
		
		View: {
			dataGridPanelContainer: '',
			
			init: function() {
				Resource.Money.View.dataGridPanelContainer = $('#dataGridPanel #dataGrid');
				Resource.Money.View.DataGrid.init();
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
					Resource.Money.View.DataGrid.operatorIdComboboxLabelContainer = $('#dataGridPanel #toolbar #operatorIdComboboxLabel');
					Resource.Money.View.DataGrid.operatorIdComboboxInputContainer = $('#dataGridPanel #toolbar #operatorIdComboboxInput');
                                        Resource.Money.View.DataGrid.areaNumCombogridLabelContainer = $('#dataGridPanel #toolbar #areaNumCombogridLabel');
					Resource.Money.View.DataGrid.areaNumCombogridInputContainer = $('#dataGridPanel #toolbar #areaNumCombogridInput');
                                        Resource.Money.View.DataGrid.searchStartDateboxLabelContainer = $('#dataGridPanel #toolbar #searchStartDateboxLabel');
					Resource.Money.View.DataGrid.searchStartDateboxInputContainer = $('#dataGridPanel #toolbar #searchStartDateboxInput');
					Resource.Money.View.DataGrid.searchEndDateboxLabelContainer = $('#dataGridPanel #toolbar #searchEndDateboxLabel');
					Resource.Money.View.DataGrid.searchEndDateboxInputContainer = $('#dataGridPanel #toolbar #searchEndDateboxInput');
					Resource.Money.View.DataGrid.searchButtonContainer = $('#dataGridPanel #toolbar #searchButton');
                                        Resource.Money.View.DataGrid.exportButtonContainer = $('#dataGridPanel #toolbar #exportButton');
					Resource.Money.View.DataGrid.create();
                                        Resource.Money.View.DataGrid.showCurrSelectInfo();
				},
				
				create: function() {
					var width = $(document).width() - 40;
					var height = $(document).height() - 40;
					Resource.Money.View.dataGridPanelContainer.width(width);
					Resource.Money.View.dataGridPanelContainer.height(height);
					Resource.Money.View.dataGridPanelContainer.datagrid({
						toolbar: '#toolbar',
						columns: [[
							{
								field: 'date',
								title: resourceGoldViewDataGridColumnTitle1,
								width: 100,
							},
							{
								field: 'moneyGet',
								title: resourceMoneyViewDataGridColumnTitle2,
								width: 100,
							},
							{
								field: 'bindMoneyGet',
								title: resourceMoneyViewDataGridColumnTitle3,
								width: 100,
							},
                                                        {
								field: 'moneyCost',
								title: resourceMoneyViewDataGridColumnTitle4,
								width: 100,
							},
                                                        {
								field: 'profit',
								title: resourceMoneyViewDataGridColumnTitle5,
								width: 100,
							},
                                                        {
								field: 'moneyAll',
								title: resourceMoneyViewDataGridColumnTitle6,
								width: 100,
							},
                                                        {
								field: 'bindMoneyAll',
								title: resourceMoneyViewDataGridColumnTitle7,
								width: 100,
							},
                                                        {
								field: 'all',
								title: resourceMoneyViewDataGridColumnTitle8,
								width: 100,
							},
                                                        {
								field: 'login',
								title: resourceGoldViewDataGridColumnTitle8,
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
						Resource.Money.View.DataGrid.operatorIdComboboxLabelContainer,
						Resource.Money.View.DataGrid.operatorIdComboboxInputContainer
					);
                                        Component.Combogrid.AreaNum.create(
						Resource.Money.View.DataGrid.areaNumCombogridLabelContainer,
						Resource.Money.View.DataGrid.areaNumCombogridInputContainer
					);
					Component.Datebox.Start.create(
						Resource.Money.View.DataGrid.searchStartDateboxLabelContainer,
						Resource.Money.View.DataGrid.searchStartDateboxInputContainer
					);
                                        Component.Datebox.End.create(
						Resource.Money.View.DataGrid.searchEndDateboxLabelContainer,
						Resource.Money.View.DataGrid.searchEndDateboxInputContainer
					);
					Resource.Money.View.DataGrid.searchButtonContainer.linkbutton({
						iconCls: 'icon-search',
						text: resourceViewDataGridToolbarButtonText1,
					});
					Resource.Money.View.DataGrid.searchButtonContainer.bind(
						'click',
						Resource.Money.View.DataGrid.doSearch
					);
                                        Resource.Money.View.DataGrid.exportButtonContainer.linkbutton({
						iconCls: 'icon-search',
						text: exportViewDataGridToolbarButtonText1,
					});
					Resource.Money.View.DataGrid.exportButtonContainer.bind(
						'click',
						Resource.Money.View.DataGrid.doExport
					);
				},
				
				doSearch: function() {
                                        var operatorId = Resource.Money.View.DataGrid.operatorIdComboboxInputContainer.combobox('getValue');
                                        var gameAreaId = Resource.Money.View.DataGrid.areaNumCombogridInputContainer.combogrid('getValue');
					var searchStartDate = Resource.Money.View.DataGrid.searchStartDateboxInputContainer.datebox('getValue');
                                        var searchEndDate = Resource.Money.View.DataGrid.searchEndDateboxInputContainer.datebox('getValue');
					
					Resource.Money.View.dataGridPanelContainer.datagrid({
						url: '/index.php/Resource/money/getListData',
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
                                                    Resource.Money.View.DataGrid.operatorIdComboboxInputContainer.combobox('select',response.data.operatorId);
                                                    Resource.Money.View.DataGrid.areaNumCombogridInputContainer.combogrid('setValue',response.data.gameAreaId);
                                                    Resource.Money.View.DataGrid.searchStartDateboxInputContainer.datebox('setValue',response.data.startDate);
                                                    Resource.Money.View.DataGrid.searchEndDateboxInputContainer.datebox('setValue',response.data.endDate);
                                                }
                                        })
                                }, 
                                doExport: function() {

                                        var operatorId = Resource.Money.View.DataGrid.operatorIdComboboxInputContainer.combobox('getValue');
                                        var gameAreaId = Resource.Money.View.DataGrid.areaNumCombogridInputContainer.combogrid('getValues').toString();
                                        var startDate = Resource.Money.View.DataGrid.searchStartDateboxInputContainer.datebox('getValue');
                                        var endDate =  Resource.Money.View.DataGrid.searchEndDateboxInputContainer.datebox('getValue');

                                                  var downUrl = "/index.php/Resource/money/export?operatorId="+ operatorId +"&gameAreaId="+gameAreaId+"&startDate="+startDate+"&endDate="+endDate
                                                  window.location = downUrl;

				},

			},
		},
	},
    Battle: {
        infoWindowContainer: '',
                
		init: function() {
			Language.getCurrLanguage();
			Utils.loadJavascriptFile('/application/views/libraries/component/' + language + '.js');
			Utils.loadJavascriptFile('/application/views/libraries/utils/' + language + '.js');
			Utils.loadJavascriptFile('/application/views/module/Resource/' + language + '.js');
			Utils.initAjax();
                        
			Resource.Battle.infoWindowContainer = $('#infoWindow');
			Resource.Battle.InfoWindow.init();
			Resource.Battle.View.init();
		},
		
		View: {
			dataGridPanelContainer: '',
			
			init: function() {
				Resource.Battle.View.dataGridPanelContainer = $('#dataGridPanel #dataGrid');
				Resource.Battle.View.DataGrid.init();
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
                                infoButtonContainer: '',
                                exportButtonContainer: '',
				
				init: function() {
					Resource.Battle.View.DataGrid.operatorIdComboboxLabelContainer = $('#dataGridPanel #toolbar #operatorIdComboboxLabel');
					Resource.Battle.View.DataGrid.operatorIdComboboxInputContainer = $('#dataGridPanel #toolbar #operatorIdComboboxInput');
                                        Resource.Battle.View.DataGrid.areaNumCombogridLabelContainer = $('#dataGridPanel #toolbar #areaNumCombogridLabel');
					Resource.Battle.View.DataGrid.areaNumCombogridInputContainer = $('#dataGridPanel #toolbar #areaNumCombogridInput');
                                        Resource.Battle.View.DataGrid.searchStartDateboxLabelContainer = $('#dataGridPanel #toolbar #searchStartDateboxLabel');
					Resource.Battle.View.DataGrid.searchStartDateboxInputContainer = $('#dataGridPanel #toolbar #searchStartDateboxInput');
					Resource.Battle.View.DataGrid.searchEndDateboxLabelContainer = $('#dataGridPanel #toolbar #searchEndDateboxLabel');
					Resource.Battle.View.DataGrid.searchEndDateboxInputContainer = $('#dataGridPanel #toolbar #searchEndDateboxInput');
					Resource.Battle.View.DataGrid.searchButtonContainer = $('#dataGridPanel #toolbar #searchButton');
                                        Resource.Battle.View.DataGrid.infoButtonContainer = $('#dataGridPanel #toolbar #infoButton');
                                        Resource.Battle.View.DataGrid.exportButtonContainer = $('#dataGridPanel #toolbar #exportButton');
					Resource.Battle.View.DataGrid.create();
                                        Resource.Battle.View.DataGrid.showCurrSelectInfo();
				},
				
				create: function() {
					var width = $(document).width() - 40;
					var height = $(document).height() - 40;
					Resource.Battle.View.dataGridPanelContainer.width(width);
					Resource.Battle.View.dataGridPanelContainer.height(height);
					Resource.Battle.View.dataGridPanelContainer.datagrid({
						toolbar: '#toolbar',
						columns: [[
                                                        {
                                                                checkbox: true,
                                                        },
							{
								field: 'date',
								title: resourceGoldViewDataGridColumnTitle1,
								width: 100,
							},
							{
								field: 'days',
								title: resourceBattleViewDataGridColumnTitle2,
								width: 100,
							},
							{
								field: 'ave',
								title: resourceBattleViewDataGridColumnTitle3,
								width: 150,
							},
							{
								field: 'grow',
								title: resourceBattleViewDataGridColumnTitle4,
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
						Resource.Battle.View.DataGrid.operatorIdComboboxLabelContainer,
						Resource.Battle.View.DataGrid.operatorIdComboboxInputContainer
					);
                                        Component.Combogrid.AreaNum.create(
						Resource.Battle.View.DataGrid.areaNumCombogridLabelContainer,
						Resource.Battle.View.DataGrid.areaNumCombogridInputContainer
					);
                                        Component.Datebox.Start.create(
						Resource.Battle.View.DataGrid.searchStartDateboxLabelContainer,
						Resource.Battle.View.DataGrid.searchStartDateboxInputContainer
					);
                                        Component.Datebox.End.create(
						Resource.Battle.View.DataGrid.searchEndDateboxLabelContainer,
						Resource.Battle.View.DataGrid.searchEndDateboxInputContainer
					);
					Resource.Battle.View.DataGrid.searchButtonContainer.linkbutton({
						iconCls: 'icon-search',
						text: resourceViewDataGridToolbarButtonText1,
					});
					Resource.Battle.View.DataGrid.searchButtonContainer.bind(
						'click',
						Resource.Battle.View.DataGrid.doSearch
					);
                                        Resource.Battle.View.DataGrid.infoButtonContainer.linkbutton({
						iconCls: 'icon-search',
						text: resourceViewDataGridToolbarButtonText2,
					});
					Resource.Battle.View.DataGrid.infoButtonContainer.bind(
						'click',
						Resource.Battle.InfoWindow.open
					);
                                        Resource.Battle.View.DataGrid.exportButtonContainer.linkbutton({
						iconCls: 'icon-search',
						text: exportViewDataGridToolbarButtonText1,
					});
					Resource.Battle.View.DataGrid.exportButtonContainer.bind(
						'click',
						Resource.Battle.View.DataGrid.doExport
					);
				},
				getCheckedRows: function(allowMulti) {
					var allowMulti = arguments[0] ? arguments[0] : false;
					var checkedRow = Resource.Battle.View.dataGridPanelContainer.datagrid('getChecked');
					
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
                                                    Resource.Battle.View.DataGrid.operatorIdComboboxInputContainer.combobox('select',response.data.operatorId);
                                                    Resource.Battle.View.DataGrid.areaNumCombogridInputContainer.combogrid('setValue',response.data.gameAreaId);
                                                    Resource.Battle.View.DataGrid.searchStartDateboxInputContainer.datebox('setValue',response.data.startDate);
                                                    Resource.Battle.View.DataGrid.searchEndDateboxInputContainer.datebox('setValue',response.data.endDate);
                                                }
                                        })
                                }, 
				doSearch: function() {
					Resource.Battle.View.dataGridPanelContainer.datagrid({
						url: '/index.php/Resource/battle/getListData',
						queryParams: {
							operatorId: Resource.Battle.View.DataGrid.operatorIdComboboxInputContainer.combobox('getValue'),
                                                        gameAreaId: Resource.Battle.View.DataGrid.areaNumCombogridInputContainer.combogrid('getValues').toString(),
                                                        searchStartDate: Resource.Battle.View.DataGrid.searchStartDateboxInputContainer.datebox('getValue'),
                                                        searchEndDate : Resource.Battle.View.DataGrid.searchEndDateboxInputContainer.datebox('getValue'),
						}
					});
				},
                                doExport: function() {

                                        var operatorId = Resource.Battle.View.DataGrid.operatorIdComboboxInputContainer.combobox('getValue');
                                        var gameAreaId = Resource.Battle.View.DataGrid.areaNumCombogridInputContainer.combogrid('getValues').toString();
                                        var startDate = Resource.Battle.View.DataGrid.searchStartDateboxInputContainer.datebox('getValue');
                                        var endDate =  Resource.Battle.View.DataGrid.searchEndDateboxInputContainer.datebox('getValue');

                                                  var downUrl = "/index.php/Resource/battle/export?operatorId="+ operatorId +"&gameAreaId="+gameAreaId+"&startDate="+startDate+"&endDate="+endDate
                                                  window.location = downUrl;

				},
			},
		},
                InfoWindow: {
			dataGridContainer: '',
			
			init: function() {
				Resource.Battle.InfoWindow.dataGridContainer = $('#infoWindow #dataGrid');
				Resource.Battle.InfoWindow.DataGrid.init();
				Resource.Battle.InfoWindow.create();
			},
			
			DataGrid: {
				init: function() {
					Resource.Battle.InfoWindow.DataGrid.create();
				},
				
				create: function() {
					Resource.Battle.InfoWindow.dataGridContainer.datagrid({
						width: 547,
						height: 392,
						fitColumns: true,
						border: false,
						columns: [[
							{
								field: 'days',
								title: resourceBattleViewDataGridColumnTitle2,
								width: 80,
							},
							{
								field: 'order',
								title: resourceBattleInfoWindowColumnTitle2,
								width: 100,
							},
                                                        {
								field: 'cid',
								title: resourceBattleInfoWindowColumnTitle3,
								width: 100,
								
							},
                                                        {
								field: 'name',
								title: resourceBattleInfoWindowColumnTitle4,
								width: 100,
								
							},
                                                        {
								field: 'battle',
								title: resourceBattleInfoWindowColumnTitle5,
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
				Resource.Battle.infoWindowContainer.window({
					width: 600,
					height: 450,
					title: resourceBattleInfoWindowTitle,
					collapsible: false,
					minimizable: false,
					maximizable: false,
					closable: true,
					closed: true,
					modal: true,
				});
			},
			
			open: function() {
				var checkedRow = Resource.Battle.View.DataGrid.getCheckedRows();
				
				if(checkedRow != false) {
					Resource.Battle.InfoWindow.dataGridContainer.datagrid({
						url: '/index.php/Resource/battle/player',
						queryParams: {
                                                        operatorId: Resource.Battle.View.DataGrid.operatorIdComboboxInputContainer.combobox('getValue'),
                                                        gameAreaId: Resource.Battle.View.DataGrid.areaNumCombogridInputContainer.combogrid('getValue'),
							time: checkedRow[0].date,
						}
					})
					Resource.Battle.infoWindowContainer.window('open');
				}
			},
		},
	},
    Level: {
        infoWindowContainer: '',
                
		init: function() {
			Language.getCurrLanguage();
			Utils.loadJavascriptFile('/application/views/libraries/component/' + language + '.js');
			Utils.loadJavascriptFile('/application/views/libraries/utils/' + language + '.js');
			Utils.loadJavascriptFile('/application/views/module/Resource/' + language + '.js');
			Utils.initAjax();
                        
			Resource.Level.infoWindowContainer = $('#infoWindow');
			Resource.Level.InfoWindow.init();
			Resource.Level.View.init();
		},
		
		View: {
			dataGridPanelContainer: '',
			
			init: function() {
				Resource.Level.View.dataGridPanelContainer = $('#dataGridPanel #dataGrid');
				Resource.Level.View.DataGrid.init();
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
                                infoButtonContainer: '',
                                exportButtonContainer: '',
				
				init: function() {
					Resource.Level.View.DataGrid.operatorIdComboboxLabelContainer = $('#dataGridPanel #toolbar #operatorIdComboboxLabel');
					Resource.Level.View.DataGrid.operatorIdComboboxInputContainer = $('#dataGridPanel #toolbar #operatorIdComboboxInput');
                                        Resource.Level.View.DataGrid.areaNumCombogridLabelContainer = $('#dataGridPanel #toolbar #areaNumCombogridLabel');
					Resource.Level.View.DataGrid.areaNumCombogridInputContainer = $('#dataGridPanel #toolbar #areaNumCombogridInput');
                                        Resource.Level.View.DataGrid.searchStartDateboxLabelContainer = $('#dataGridPanel #toolbar #searchStartDateboxLabel');
					Resource.Level.View.DataGrid.searchStartDateboxInputContainer = $('#dataGridPanel #toolbar #searchStartDateboxInput');
					Resource.Level.View.DataGrid.searchEndDateboxLabelContainer = $('#dataGridPanel #toolbar #searchEndDateboxLabel');
					Resource.Level.View.DataGrid.searchEndDateboxInputContainer = $('#dataGridPanel #toolbar #searchEndDateboxInput');
					Resource.Level.View.DataGrid.searchButtonContainer = $('#dataGridPanel #toolbar #searchButton');
                                        Resource.Level.View.DataGrid.infoButtonContainer = $('#dataGridPanel #toolbar #infoButton');
                                        Resource.Level.View.DataGrid.exportButtonContainer = $('#dataGridPanel #toolbar #exportButton');
					Resource.Level.View.DataGrid.create();
                                        Resource.Level.View.DataGrid.showCurrSelectInfo();
				},
				
				create: function() {
					var width = $(document).width() - 40;
					var height = $(document).height() - 40;
					Resource.Level.View.dataGridPanelContainer.width(width);
					Resource.Level.View.dataGridPanelContainer.height(height);
					Resource.Level.View.dataGridPanelContainer.datagrid({
						toolbar: '#toolbar',
						columns: [[
                                                        {
                                                                checkbox: true,
                                                        },
							{
								field: 'date',
								title: resourceGoldViewDataGridColumnTitle1,
								width: 100,
							},
							{
								field: 'days',
								title: resourceBattleViewDataGridColumnTitle2,
								width: 100,
							},
							{
								field: 'ave',
								title: resourceLevelViewDataGridColumnTitle3,
								width: 150,
							},
							{
								field: 'grow',
								title: resourceBattleViewDataGridColumnTitle4,
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
						Resource.Level.View.DataGrid.operatorIdComboboxLabelContainer,
						Resource.Level.View.DataGrid.operatorIdComboboxInputContainer
					);
                                        Component.Combogrid.AreaNum.create(
						Resource.Level.View.DataGrid.areaNumCombogridLabelContainer,
						Resource.Level.View.DataGrid.areaNumCombogridInputContainer
					);
                                        Component.Datebox.Start.create(
						Resource.Level.View.DataGrid.searchStartDateboxLabelContainer,
						Resource.Level.View.DataGrid.searchStartDateboxInputContainer
					);
                                        Component.Datebox.End.create(
						Resource.Level.View.DataGrid.searchEndDateboxLabelContainer,
						Resource.Level.View.DataGrid.searchEndDateboxInputContainer
					);
					Resource.Level.View.DataGrid.searchButtonContainer.linkbutton({
						iconCls: 'icon-search',
						text: resourceViewDataGridToolbarButtonText1,
					});
					Resource.Level.View.DataGrid.searchButtonContainer.bind(
						'click',
						Resource.Level.View.DataGrid.doSearch
					);
                                        Resource.Level.View.DataGrid.infoButtonContainer.linkbutton({
						iconCls: 'icon-search',
						text: resourceViewDataGridToolbarButtonText2,
					});
					Resource.Level.View.DataGrid.infoButtonContainer.bind(
						'click',
						Resource.Level.InfoWindow.open
					);
                                        Resource.Level.View.DataGrid.exportButtonContainer.linkbutton({
						iconCls: 'icon-search',
						text: exportViewDataGridToolbarButtonText1,
					});
					Resource.Level.View.DataGrid.exportButtonContainer.bind(
						'click',
						Resource.Level.View.DataGrid.doExport
					);
				},
				getCheckedRows: function(allowMulti) {
					var allowMulti = arguments[0] ? arguments[0] : false;
					var checkedRow = Resource.Level.View.dataGridPanelContainer.datagrid('getChecked');
					
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
                                                    Resource.Level.View.DataGrid.operatorIdComboboxInputContainer.combobox('select',response.data.operatorId);
                                                    Resource.Level.View.DataGrid.areaNumCombogridInputContainer.combogrid('setValue',response.data.gameAreaId);
                                                    Resource.Level.View.DataGrid.searchStartDateboxInputContainer.datebox('setValue',response.data.startDate);
                                                    Resource.Level.View.DataGrid.searchEndDateboxInputContainer.datebox('setValue',response.data.endDate);
                                                }
                                        })
                                }, 
				doSearch: function() {
					Resource.Level.View.dataGridPanelContainer.datagrid({
						url: '/index.php/Resource/level/getListData',
						queryParams: {
							operatorId: Resource.Level.View.DataGrid.operatorIdComboboxInputContainer.combobox('getValue'),
                                                        gameAreaId: Resource.Level.View.DataGrid.areaNumCombogridInputContainer.combogrid('getValues').toString(),
                                                        searchStartDate: Resource.Level.View.DataGrid.searchStartDateboxInputContainer.datebox('getValue'),
                                                        searchEndDate : Resource.Level.View.DataGrid.searchEndDateboxInputContainer.datebox('getValue'),
						}
					});
				},
                                doExport: function() {

                                        var operatorId = Resource.Level.View.DataGrid.operatorIdComboboxInputContainer.combobox('getValue');
                                        var gameAreaId = Resource.Level.View.DataGrid.areaNumCombogridInputContainer.combogrid('getValues').toString();
                                        var startDate = Resource.Level.View.DataGrid.searchStartDateboxInputContainer.datebox('getValue');
                                        var endDate =  Resource.Level.View.DataGrid.searchEndDateboxInputContainer.datebox('getValue');

                                                  var downUrl = "/index.php/Resource/level/export?operatorId="+ operatorId +"&gameAreaId="+gameAreaId+"&startDate="+startDate+"&endDate="+endDate
                                                  window.location = downUrl;
				},
			},
		},
                InfoWindow: {
			dataGridContainer: '',
			
			init: function() {
				Resource.Level.InfoWindow.dataGridContainer = $('#infoWindow #dataGrid');
				Resource.Level.InfoWindow.DataGrid.init();
				Resource.Level.InfoWindow.create();
			},
			
			DataGrid: {
				init: function() {
					Resource.Level.InfoWindow.DataGrid.create();
				},
				
				create: function() {
					Resource.Level.InfoWindow.dataGridContainer.datagrid({
						width: 547,
						height: 392,
						fitColumns: true,
						border: false,
						columns: [[
							{
								field: 'days',
								title: resourceBattleViewDataGridColumnTitle2,
								width: 80,
							},
							{
								field: 'order',
								title: resourceBattleInfoWindowColumnTitle2,
								width: 100,
								
							},
                                                        {
								field: 'cid',
								title: resourceBattleInfoWindowColumnTitle3,
								width: 100,
								
							},
                                                        {
								field: 'name',
								title: resourceBattleInfoWindowColumnTitle4,
								width: 100,
								
							},
                                                        {
								field: 'level',
								title: resourceLevelInfoWindowColumnTitle5,
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
				Resource.Level.infoWindowContainer.window({
					width: 600,
					height: 450,
					title: resourceBattleInfoWindowTitle,
					collapsible: false,
					minimizable: false,
					maximizable: false,
					closable: true,
					closed: true,
					modal: true,
				});
			},
			
			open: function() {
				var checkedRow = Resource.Level.View.DataGrid.getCheckedRows();
				
				if(checkedRow != false) {
					Resource.Level.InfoWindow.dataGridContainer.datagrid({
						url: '/index.php/Resource/level/player',
						queryParams: {
                                                        operatorId: Resource.Level.View.DataGrid.operatorIdComboboxInputContainer.combobox('getValue'),
                                                        gameAreaId: Resource.Level.View.DataGrid.areaNumCombogridInputContainer.combogrid('getValue'),
							time: checkedRow[0].date,
						}
					})
					Resource.Level.infoWindowContainer.window('open');
				}
			},
		},
	},
    Equip: {
        infoWindowContainer: '',
                
		init: function() {
			Language.getCurrLanguage();
			Utils.loadJavascriptFile('/application/views/libraries/component/' + language + '.js');
			Utils.loadJavascriptFile('/application/views/libraries/utils/' + language + '.js');
			Utils.loadJavascriptFile('/application/views/module/Resource/' + language + '.js');
			Utils.initAjax();
                        
			Resource.Equip.infoWindowContainer = $('#infoWindow');
			Resource.Equip.InfoWindow.init();
			Resource.Equip.View.init();
		},
		
		View: {
			dataGridPanelContainer: '',
			
			init: function() {
				Resource.Equip.View.dataGridPanelContainer = $('#dataGridPanel #dataGrid');
				Resource.Equip.View.DataGrid.init();
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
                                infoButtonContainer: '',
                                exportButtonContainer: '',
				
				init: function() {
					Resource.Equip.View.DataGrid.operatorIdComboboxLabelContainer = $('#dataGridPanel #toolbar #operatorIdComboboxLabel');
					Resource.Equip.View.DataGrid.operatorIdComboboxInputContainer = $('#dataGridPanel #toolbar #operatorIdComboboxInput');
                                        Resource.Equip.View.DataGrid.areaNumCombogridLabelContainer = $('#dataGridPanel #toolbar #areaNumCombogridLabel');
					Resource.Equip.View.DataGrid.areaNumCombogridInputContainer = $('#dataGridPanel #toolbar #areaNumCombogridInput');
                                        Resource.Equip.View.DataGrid.searchStartDateboxLabelContainer = $('#dataGridPanel #toolbar #searchStartDateboxLabel');
					Resource.Equip.View.DataGrid.searchStartDateboxInputContainer = $('#dataGridPanel #toolbar #searchStartDateboxInput');
					Resource.Equip.View.DataGrid.searchEndDateboxLabelContainer = $('#dataGridPanel #toolbar #searchEndDateboxLabel');
					Resource.Equip.View.DataGrid.searchEndDateboxInputContainer = $('#dataGridPanel #toolbar #searchEndDateboxInput');
					Resource.Equip.View.DataGrid.searchButtonContainer = $('#dataGridPanel #toolbar #searchButton');
                                        Resource.Equip.View.DataGrid.infoButtonContainer = $('#dataGridPanel #toolbar #infoButton');
                                        Resource.Equip.View.DataGrid.exportButtonContainer = $('#dataGridPanel #toolbar #exportButton');
					Resource.Equip.View.DataGrid.create();
                                        Resource.Equip.View.DataGrid.showCurrSelectInfo();
				},
				
				create: function() {
					var width = $(document).width() - 40;
					var height = $(document).height() - 40;
					Resource.Equip.View.dataGridPanelContainer.width(width);
					Resource.Equip.View.dataGridPanelContainer.height(height);
					Resource.Equip.View.dataGridPanelContainer.datagrid({
						toolbar: '#toolbar',
						columns: [[
                                                        {
                                                                checkbox: true,
                                                        },
							{
								field: 'date',
								title: resourceGoldViewDataGridColumnTitle1,
								width: 100,
							},
							{
								field: 'days',
								title: resourceBattleViewDataGridColumnTitle2,
								width: 100,
							},
							{
								field: 'ave',
								title: resourceEquipViewDataGridColumnTitle3,
								width: 150,
							},
						]],
						loadFilter: Utils.dataGridLoadFilter,
                                                singleSelect: true,
						pagination: true,
						pageSize: 50,
						pageList: [50, 100, 150, 200],
					});
					Component.Combobox.OperatorId.create(
						Resource.Equip.View.DataGrid.operatorIdComboboxLabelContainer,
						Resource.Equip.View.DataGrid.operatorIdComboboxInputContainer
					);
                                        Component.Combogrid.AreaNum.create(
						Resource.Equip.View.DataGrid.areaNumCombogridLabelContainer,
						Resource.Equip.View.DataGrid.areaNumCombogridInputContainer
					);
                                        Component.Datebox.Start.create(
						Resource.Equip.View.DataGrid.searchStartDateboxLabelContainer,
						Resource.Equip.View.DataGrid.searchStartDateboxInputContainer
					);
                                        Component.Datebox.End.create(
						Resource.Equip.View.DataGrid.searchEndDateboxLabelContainer,
						Resource.Equip.View.DataGrid.searchEndDateboxInputContainer
					);
					Resource.Equip.View.DataGrid.searchButtonContainer.linkbutton({
						iconCls: 'icon-search',
						text: resourceViewDataGridToolbarButtonText1,
					});
					Resource.Equip.View.DataGrid.searchButtonContainer.bind(
						'click',
						Resource.Equip.View.DataGrid.doSearch
					);
                                        Resource.Equip.View.DataGrid.infoButtonContainer.linkbutton({
						iconCls: 'icon-search',
						text: resourceViewDataGridToolbarButtonText2,
					});
					Resource.Equip.View.DataGrid.infoButtonContainer.bind(
						'click',
						Resource.Equip.InfoWindow.open
					);
                                        Resource.Equip.View.DataGrid.exportButtonContainer.linkbutton({
						iconCls: 'icon-search',
						text: exportViewDataGridToolbarButtonText1,
					});
					Resource.Equip.View.DataGrid.exportButtonContainer.bind(
						'click',
						Resource.Equip.View.DataGrid.doExport
					);
				},
				getCheckedRows: function(allowMulti) {
					var allowMulti = arguments[0] ? arguments[0] : false;
					var checkedRow = Resource.Equip.View.dataGridPanelContainer.datagrid('getChecked');
					
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
                                                    Resource.Equip.View.DataGrid.operatorIdComboboxInputContainer.combobox('select',response.data.operatorId);
                                                    Resource.Equip.View.DataGrid.areaNumCombogridInputContainer.combogrid('setValue',response.data.gameAreaId);
                                                    Resource.Equip.View.DataGrid.searchStartDateboxInputContainer.datebox('setValue',response.data.startDate);
                                                    Resource.Equip.View.DataGrid.searchEndDateboxInputContainer.datebox('setValue',response.data.endDate);
                                                }
                                        })
                                }, 
				doSearch: function() {
					Resource.Equip.View.dataGridPanelContainer.datagrid({
						url: '/index.php/Resource/equip/getListData',
						queryParams: {
							operatorId: Resource.Equip.View.DataGrid.operatorIdComboboxInputContainer.combobox('getValue'),
                                                        gameAreaId: Resource.Equip.View.DataGrid.areaNumCombogridInputContainer.combogrid('getValues').toString(),
                                                        searchStartDate: Resource.Equip.View.DataGrid.searchStartDateboxInputContainer.datebox('getValue'),
                                                        searchEndDate : Resource.Equip.View.DataGrid.searchEndDateboxInputContainer.datebox('getValue'),
						}
					});
				},
                                doExport: function() {

                                        var operatorId = Resource.Equip.View.DataGrid.operatorIdComboboxInputContainer.combobox('getValue');
                                        var gameAreaId = Resource.Equip.View.DataGrid.areaNumCombogridInputContainer.combogrid('getValues').toString();
                                        var startDate = Resource.Equip.View.DataGrid.searchStartDateboxInputContainer.datebox('getValue');
                                        var endDate =  Resource.Equip.View.DataGrid.searchEndDateboxInputContainer.datebox('getValue');

                                                  var downUrl = "/index.php/Resource/equip/export?operatorId="+ operatorId +"&gameAreaId="+gameAreaId+"&startDate="+startDate+"&endDate="+endDate
                                                  window.location = downUrl;

				},
			},
		},
        InfoWindow: {
			dataGridContainer: '',
			
			init: function() {
				Resource.Equip.InfoWindow.dataGridContainer = $('#infoWindow #dataGrid');
				Resource.Equip.InfoWindow.DataGrid.init();
				Resource.Equip.InfoWindow.create();
			},
			
			DataGrid: {
				init: function() {
					Resource.Equip.InfoWindow.DataGrid.create();
				},
				
				create: function() {
					Resource.Equip.InfoWindow.dataGridContainer.datagrid({
						width: 547,
						height: 392,
						fitColumns: true,
						border: false,
						columns: [[
							{
								field: 'days',
								title: resourceBattleViewDataGridColumnTitle2,
								width: 80,
							},
							{
								field: 'order',
								title: resourceBattleInfoWindowColumnTitle2,
								width: 100,
								
							},
                                                        {
								field: 'cid',
								title: resourceBattleInfoWindowColumnTitle3,
								width: 100,
								
							},
                                                        {
								field: 'name',
								title: resourceBattleInfoWindowColumnTitle4,
								width: 100,
								
							},
                                                        {
								field: 'equip',
								title: resourceEquipInfoWindowColumnTitle5,
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
				Resource.Equip.infoWindowContainer.window({
					width: 600,
					height: 450,
					title: resourceBattleInfoWindowTitle,
					collapsible: false,
					minimizable: false,
					maximizable: false,
					closable: true,
					closed: true,
					modal: true,
				});
			},
			
			open: function() {
				var checkedRow = Resource.Equip.View.DataGrid.getCheckedRows();
				
				if(checkedRow != false) {
					Resource.Equip.InfoWindow.dataGridContainer.datagrid({
						url: '/index.php/Resource/equip/player',
						queryParams: {
                                                        operatorId: Resource.Equip.View.DataGrid.operatorIdComboboxInputContainer.combobox('getValue'),
                                                        gameAreaId: Resource.Equip.View.DataGrid.areaNumCombogridInputContainer.combogrid('getValue'),
							time: checkedRow[0].date,
						}
					})
					Resource.Equip.infoWindowContainer.window('open');
				}
			},
		},
	},
    Demon: {
        infoWindowContainer: '',
                
		init: function() {
			Language.getCurrLanguage();
			Utils.loadJavascriptFile('/application/views/libraries/component/' + language + '.js');
			Utils.loadJavascriptFile('/application/views/libraries/utils/' + language + '.js');
			Utils.loadJavascriptFile('/application/views/module/Resource/' + language + '.js');
			Utils.initAjax();
                        
			Resource.Demon.infoWindowContainer = $('#infoWindow');
			Resource.Demon.InfoWindow.init();
			Resource.Demon.View.init();
		},
		
		View: {
			dataGridPanelContainer: '',
			
			init: function() {
				Resource.Demon.View.dataGridPanelContainer = $('#dataGridPanel #dataGrid');
				Resource.Demon.View.DataGrid.init();
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
                                infoButtonContainer: '',
                                exportButtonContainer: '',
				
				init: function() {
					Resource.Demon.View.DataGrid.operatorIdComboboxLabelContainer = $('#dataGridPanel #toolbar #operatorIdComboboxLabel');
					Resource.Demon.View.DataGrid.operatorIdComboboxInputContainer = $('#dataGridPanel #toolbar #operatorIdComboboxInput');
                                        Resource.Demon.View.DataGrid.areaNumCombogridLabelContainer = $('#dataGridPanel #toolbar #areaNumCombogridLabel');
					Resource.Demon.View.DataGrid.areaNumCombogridInputContainer = $('#dataGridPanel #toolbar #areaNumCombogridInput');
                                        Resource.Demon.View.DataGrid.searchStartDateboxLabelContainer = $('#dataGridPanel #toolbar #searchStartDateboxLabel');
					Resource.Demon.View.DataGrid.searchStartDateboxInputContainer = $('#dataGridPanel #toolbar #searchStartDateboxInput');
					Resource.Demon.View.DataGrid.searchEndDateboxLabelContainer = $('#dataGridPanel #toolbar #searchEndDateboxLabel');
					Resource.Demon.View.DataGrid.searchEndDateboxInputContainer = $('#dataGridPanel #toolbar #searchEndDateboxInput');
					Resource.Demon.View.DataGrid.searchButtonContainer = $('#dataGridPanel #toolbar #searchButton');
                                        Resource.Demon.View.DataGrid.infoButtonContainer = $('#dataGridPanel #toolbar #infoButton');
                                        Resource.Demon.View.DataGrid.exportButtonContainer = $('#dataGridPanel #toolbar #exportButton');
					Resource.Demon.View.DataGrid.create();
                                        Resource.Demon.View.DataGrid.showCurrSelectInfo();
				},
				
				create: function() {
					var width = $(document).width() - 40;
					var height = $(document).height() - 40;
					Resource.Demon.View.dataGridPanelContainer.width(width);
					Resource.Demon.View.dataGridPanelContainer.height(height);
					Resource.Demon.View.dataGridPanelContainer.datagrid({
						toolbar: '#toolbar',
						columns: [[
                                                        {
                                                                checkbox: true,
                                                        },
							{
								field: 'date',
								title: resourceGoldViewDataGridColumnTitle1,
								width: 100,
							},
							{
								field: 'days',
								title: resourceBattleViewDataGridColumnTitle2,
								width: 100,
							},
							{
								field: 'ave',
								title: resourceDemonViewDataGridColumnTitle3,
								width: 150,
							},
						]],
						loadFilter: Utils.dataGridLoadFilter,
                                                singleSelect: true,
						pagination: true,
						pageSize: 50,
						pageList: [50, 100, 150, 200],
					});
					Component.Combobox.OperatorId.create(
						Resource.Demon.View.DataGrid.operatorIdComboboxLabelContainer,
						Resource.Demon.View.DataGrid.operatorIdComboboxInputContainer
					);
                                        Component.Combogrid.AreaNum.create(
						Resource.Demon.View.DataGrid.areaNumCombogridLabelContainer,
						Resource.Demon.View.DataGrid.areaNumCombogridInputContainer
					);
                                        Component.Datebox.Start.create(
						Resource.Demon.View.DataGrid.searchStartDateboxLabelContainer,
						Resource.Demon.View.DataGrid.searchStartDateboxInputContainer
					);
                                        Component.Datebox.End.create(
						Resource.Demon.View.DataGrid.searchEndDateboxLabelContainer,
						Resource.Demon.View.DataGrid.searchEndDateboxInputContainer
					);
					Resource.Demon.View.DataGrid.searchButtonContainer.linkbutton({
						iconCls: 'icon-search',
						text: resourceViewDataGridToolbarButtonText1,
					});
					Resource.Demon.View.DataGrid.searchButtonContainer.bind(
						'click',
						Resource.Demon.View.DataGrid.doSearch
					);
                                        Resource.Demon.View.DataGrid.infoButtonContainer.linkbutton({
						iconCls: 'icon-search',
						text: resourceViewDataGridToolbarButtonText2,
					});
					Resource.Demon.View.DataGrid.infoButtonContainer.bind(
						'click',
						Resource.Demon.InfoWindow.open
					);
                                        Resource.Demon.View.DataGrid.exportButtonContainer.linkbutton({
						iconCls: 'icon-search',
						text: exportViewDataGridToolbarButtonText1,
					});
					Resource.Demon.View.DataGrid.exportButtonContainer.bind(
						'click',
						Resource.Demon.View.DataGrid.doExport
					);
				},
				getCheckedRows: function(allowMulti) {
					var allowMulti = arguments[0] ? arguments[0] : false;
					var checkedRow = Resource.Demon.View.dataGridPanelContainer.datagrid('getChecked');
					
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
                                                    Resource.Demon.View.DataGrid.operatorIdComboboxInputContainer.combobox('select',response.data.operatorId);
                                                    Resource.Demon.View.DataGrid.areaNumCombogridInputContainer.combogrid('setValue',response.data.gameAreaId);
                                                    Resource.Demon.View.DataGrid.searchStartDateboxInputContainer.datebox('setValue',response.data.startDate);
                                                    Resource.Demon.View.DataGrid.searchEndDateboxInputContainer.datebox('setValue',response.data.endDate);
                                                }
                                        })
                                }, 
				doSearch: function() {
					Resource.Demon.View.dataGridPanelContainer.datagrid({
						url: '/index.php/Resource/demon/getListData',
						queryParams: {
							operatorId: Resource.Demon.View.DataGrid.operatorIdComboboxInputContainer.combobox('getValue'),
                                                        gameAreaId: Resource.Demon.View.DataGrid.areaNumCombogridInputContainer.combogrid('getValues').toString(),
                                                        searchStartDate: Resource.Demon.View.DataGrid.searchStartDateboxInputContainer.datebox('getValue'),
                                                        searchEndDate : Resource.Demon.View.DataGrid.searchEndDateboxInputContainer.datebox('getValue'),
						}
					});
				},
                                doExport: function() {

                                        var operatorId = Resource.Demon.View.DataGrid.operatorIdComboboxInputContainer.combobox('getValue');
                                        var gameAreaId = Resource.Demon.View.DataGrid.areaNumCombogridInputContainer.combogrid('getValues').toString();
                                        var startDate = Resource.Demon.View.DataGrid.searchStartDateboxInputContainer.datebox('getValue');
                                        var endDate =  Resource.Demon.View.DataGrid.searchEndDateboxInputContainer.datebox('getValue');

                                                  var downUrl = "/index.php/Resource/demon/export?operatorId="+ operatorId +"&gameAreaId="+gameAreaId+"&startDate="+startDate+"&endDate="+endDate
                                                  window.location = downUrl;

				},
			},
		},
        InfoWindow: {
			dataGridContainer: '',
			
			init: function() {
				Resource.Demon.InfoWindow.dataGridContainer = $('#infoWindow #dataGrid');
				Resource.Demon.InfoWindow.DataGrid.init();
				Resource.Demon.InfoWindow.create();
			},
			
			DataGrid: {
				init: function() {
					Resource.Demon.InfoWindow.DataGrid.create();
				},
				
				create: function() {
					Resource.Demon.InfoWindow.dataGridContainer.datagrid({
						width: 547,
						height: 392,
						fitColumns: true,
						border: false,
						columns: [[
							{
								field: 'days',
								title: resourceBattleViewDataGridColumnTitle2,
								width: 80,
							},
							{
								field: 'order',
								title: resourceBattleInfoWindowColumnTitle2,
								width: 100,
								
							},
                                                        {
								field: 'cid',
								title: resourceBattleInfoWindowColumnTitle3,
								width: 100,
								
							},
                                                        {
								field: 'name',
								title: resourceBattleInfoWindowColumnTitle4,
								width: 100,
								
							},
                                                        {
								field: 'demon',
								title: resourceEquipInfoWindowColumnTitle5,
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
				Resource.Demon.infoWindowContainer.window({
					width: 600,
					height: 450,
					title: resourceBattleInfoWindowTitle,
					collapsible: false,
					minimizable: false,
					maximizable: false,
					closable: true,
					closed: true,
					modal: true,
				});
			},
			
			open: function() {
				var checkedRow = Resource.Demon.View.DataGrid.getCheckedRows();
				
				if(checkedRow != false) {
					Resource.Demon.InfoWindow.dataGridContainer.datagrid({
						url: '/index.php/Resource/demon/player',
						queryParams: {
                                                        operatorId: Resource.Demon.View.DataGrid.operatorIdComboboxInputContainer.combobox('getValue'),
                                                        gameAreaId: Resource.Demon.View.DataGrid.areaNumCombogridInputContainer.combogrid('getValue'),
							time: checkedRow[0].date,
						}
					})
					Resource.Demon.infoWindowContainer.window('open');
				}
			},
		},
	},
    Guard: {
        infoWindowContainer: '',
                
		init: function() {
			Language.getCurrLanguage();
			Utils.loadJavascriptFile('/application/views/libraries/component/' + language + '.js');
			Utils.loadJavascriptFile('/application/views/libraries/utils/' + language + '.js');
			Utils.loadJavascriptFile('/application/views/module/Resource/' + language + '.js');
			Utils.initAjax();
                        
			Resource.Guard.infoWindowContainer = $('#infoWindow');
			Resource.Guard.InfoWindow.init();
			Resource.Guard.View.init();
		},
		
		View: {
			dataGridPanelContainer: '',
			
			init: function() {
				Resource.Guard.View.dataGridPanelContainer = $('#dataGridPanel #dataGrid');
				Resource.Guard.View.DataGrid.init();
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
                                infoButtonContainer: '',
                                exportButtonContainer: '',
				
				init: function() {
					Resource.Guard.View.DataGrid.operatorIdComboboxLabelContainer = $('#dataGridPanel #toolbar #operatorIdComboboxLabel');
					Resource.Guard.View.DataGrid.operatorIdComboboxInputContainer = $('#dataGridPanel #toolbar #operatorIdComboboxInput');
                                        Resource.Guard.View.DataGrid.areaNumCombogridLabelContainer = $('#dataGridPanel #toolbar #areaNumCombogridLabel');
					Resource.Guard.View.DataGrid.areaNumCombogridInputContainer = $('#dataGridPanel #toolbar #areaNumCombogridInput');
                                        Resource.Guard.View.DataGrid.searchStartDateboxLabelContainer = $('#dataGridPanel #toolbar #searchStartDateboxLabel');
					Resource.Guard.View.DataGrid.searchStartDateboxInputContainer = $('#dataGridPanel #toolbar #searchStartDateboxInput');
					Resource.Guard.View.DataGrid.searchEndDateboxLabelContainer = $('#dataGridPanel #toolbar #searchEndDateboxLabel');
					Resource.Guard.View.DataGrid.searchEndDateboxInputContainer = $('#dataGridPanel #toolbar #searchEndDateboxInput');
					Resource.Guard.View.DataGrid.searchButtonContainer = $('#dataGridPanel #toolbar #searchButton');
                                        Resource.Guard.View.DataGrid.infoButtonContainer = $('#dataGridPanel #toolbar #infoButton');
                                        Resource.Guard.View.DataGrid.exportButtonContainer = $('#dataGridPanel #toolbar #exportButton');
					Resource.Guard.View.DataGrid.create();
                                        Resource.Guard.View.DataGrid.showCurrSelectInfo();
				},
				
				create: function() {
					var width = $(document).width() - 40;
					var height = $(document).height() - 40;
					Resource.Guard.View.dataGridPanelContainer.width(width);
					Resource.Guard.View.dataGridPanelContainer.height(height);
					Resource.Guard.View.dataGridPanelContainer.datagrid({
						toolbar: '#toolbar',
						columns: [[
                                                        {
                                                                checkbox: true,
                                                        },
							{
								field: 'date',
								title: resourceGoldViewDataGridColumnTitle1,
								width: 100,
							},
							{
								field: 'days',
								title: resourceBattleViewDataGridColumnTitle2,
								width: 100,
							},
							{
								field: 'ave',
								title: resourceGuardViewDataGridColumnTitle3,
								width: 150,
							},
						]],
						loadFilter: Utils.dataGridLoadFilter,
                                                singleSelect: true,
						pagination: true,
						pageSize: 50,
						pageList: [50, 100, 150, 200],
					});
					Component.Combobox.OperatorId.create(
						Resource.Guard.View.DataGrid.operatorIdComboboxLabelContainer,
						Resource.Guard.View.DataGrid.operatorIdComboboxInputContainer
					);
                                        Component.Combogrid.AreaNum.create(
						Resource.Guard.View.DataGrid.areaNumCombogridLabelContainer,
						Resource.Guard.View.DataGrid.areaNumCombogridInputContainer
					);
                                        Component.Datebox.Start.create(
						Resource.Guard.View.DataGrid.searchStartDateboxLabelContainer,
						Resource.Guard.View.DataGrid.searchStartDateboxInputContainer
					);
                                        Component.Datebox.End.create(
						Resource.Guard.View.DataGrid.searchEndDateboxLabelContainer,
						Resource.Guard.View.DataGrid.searchEndDateboxInputContainer
					);
					Resource.Guard.View.DataGrid.searchButtonContainer.linkbutton({
						iconCls: 'icon-search',
						text: resourceViewDataGridToolbarButtonText1,
					});
					Resource.Guard.View.DataGrid.searchButtonContainer.bind(
						'click',
						Resource.Guard.View.DataGrid.doSearch
					);
                                        Resource.Guard.View.DataGrid.infoButtonContainer.linkbutton({
						iconCls: 'icon-search',
						text: resourceViewDataGridToolbarButtonText2,
					});
					Resource.Guard.View.DataGrid.infoButtonContainer.bind(
						'click',
						Resource.Guard.InfoWindow.open
					);
                                        Resource.Guard.View.DataGrid.exportButtonContainer.linkbutton({
						iconCls: 'icon-search',
						text: exportViewDataGridToolbarButtonText1,
					});
					Resource.Guard.View.DataGrid.exportButtonContainer.bind(
						'click',
						Resource.Guard.View.DataGrid.doExport
					);
				},
				getCheckedRows: function(allowMulti) {
					var allowMulti = arguments[0] ? arguments[0] : false;
					var checkedRow = Resource.Guard.View.dataGridPanelContainer.datagrid('getChecked');
					
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
                                                    Resource.Guard.View.DataGrid.operatorIdComboboxInputContainer.combobox('select',response.data.operatorId);
                                                    Resource.Guard.View.DataGrid.areaNumCombogridInputContainer.combogrid('setValue',response.data.gameAreaId);
                                                    Resource.Guard.View.DataGrid.searchStartDateboxInputContainer.datebox('setValue',response.data.startDate);
                                                    Resource.Guard.View.DataGrid.searchEndDateboxInputContainer.datebox('setValue',response.data.endDate);
                                                }
                                        })
                                }, 
				doSearch: function() {
					Resource.Guard.View.dataGridPanelContainer.datagrid({
						url: '/index.php/Resource/guard/getListData',
						queryParams: {
							operatorId: Resource.Guard.View.DataGrid.operatorIdComboboxInputContainer.combobox('getValue'),
                                                        gameAreaId: Resource.Guard.View.DataGrid.areaNumCombogridInputContainer.combogrid('getValues').toString(),
                                                        searchStartDate: Resource.Guard.View.DataGrid.searchStartDateboxInputContainer.datebox('getValue'),
                                                        searchEndDate : Resource.Guard.View.DataGrid.searchEndDateboxInputContainer.datebox('getValue'),
						}
					});
				},
                                doExport: function() {

                                        var operatorId = Resource.Guard.View.DataGrid.operatorIdComboboxInputContainer.combobox('getValue');
                                        var gameAreaId = Resource.Guard.View.DataGrid.areaNumCombogridInputContainer.combogrid('getValues').toString();
                                        var startDate = Resource.Guard.View.DataGrid.searchStartDateboxInputContainer.datebox('getValue');
                                        var endDate =  Resource.Guard.View.DataGrid.searchEndDateboxInputContainer.datebox('getValue');

                                                  var downUrl = "/index.php/Resource/guard/export?operatorId="+ operatorId +"&gameAreaId="+gameAreaId+"&startDate="+startDate+"&endDate="+endDate
                                                  window.location = downUrl;

				},
			},
		},
                InfoWindow: {
			dataGridContainer: '',
			
			init: function() {
				Resource.Guard.InfoWindow.dataGridContainer = $('#infoWindow #dataGrid');
				Resource.Guard.InfoWindow.DataGrid.init();
				Resource.Guard.InfoWindow.create();
			},
			
			DataGrid: {
				init: function() {
					Resource.Guard.InfoWindow.DataGrid.create();
				},
				
				create: function() {
					Resource.Guard.InfoWindow.dataGridContainer.datagrid({
						width: 547,
						height: 392,
						fitColumns: true,
						border: false,
						columns: [[
							{
								field: 'days',
								title: resourceBattleViewDataGridColumnTitle2,
								width: 80,
							},
							{
								field: 'order',
								title: resourceBattleInfoWindowColumnTitle2,
								width: 100,
								
							},
                                                        {
								field: 'cid',
								title: resourceBattleInfoWindowColumnTitle3,
								width: 100,
								
							},
                                                        {
								field: 'name',
								title: resourceBattleInfoWindowColumnTitle4,
								width: 100,
								
							},
                                                        {
								field: 'guard',
								title: resourceEquipInfoWindowColumnTitle5,
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
				Resource.Guard.infoWindowContainer.window({
					width: 600,
					height: 450,
					title: resourceBattleInfoWindowTitle,
					collapsible: false,
					minimizable: false,
					maximizable: false,
					closable: true,
					closed: true,
					modal: true,
				});
			},
			
			open: function() {
				var checkedRow = Resource.Guard.View.DataGrid.getCheckedRows();
				
				if(checkedRow != false) {
					Resource.Guard.InfoWindow.dataGridContainer.datagrid({
						url: '/index.php/Resource/guard/player',
						queryParams: {
                                                        operatorId: Resource.Guard.View.DataGrid.operatorIdComboboxInputContainer.combobox('getValue'),
                                                        gameAreaId: Resource.Guard.View.DataGrid.areaNumCombogridInputContainer.combogrid('getValue'),
							time: checkedRow[0].date,
						}
					})
					Resource.Guard.infoWindowContainer.window('open');
				}
			},
		},
	},
    Sacred: {
        infoWindowContainer: '',
                
		init: function() {
			Language.getCurrLanguage();
			Utils.loadJavascriptFile('/application/views/libraries/component/' + language + '.js');
			Utils.loadJavascriptFile('/application/views/libraries/utils/' + language + '.js');
			Utils.loadJavascriptFile('/application/views/module/Resource/' + language + '.js');
			Utils.initAjax();
                        
			Resource.Sacred.infoWindowContainer = $('#infoWindow');
			Resource.Sacred.InfoWindow.init();
			Resource.Sacred.View.init();
		},
		
		View: {
			dataGridPanelContainer: '',
			
			init: function() {
				Resource.Sacred.View.dataGridPanelContainer = $('#dataGridPanel #dataGrid');
				Resource.Sacred.View.DataGrid.init();
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
                                infoButtonContainer: '',
                                exportButtonContainer: '',
				
				init: function() {
					Resource.Sacred.View.DataGrid.operatorIdComboboxLabelContainer = $('#dataGridPanel #toolbar #operatorIdComboboxLabel');
					Resource.Sacred.View.DataGrid.operatorIdComboboxInputContainer = $('#dataGridPanel #toolbar #operatorIdComboboxInput');
                                        Resource.Sacred.View.DataGrid.areaNumCombogridLabelContainer = $('#dataGridPanel #toolbar #areaNumCombogridLabel');
					Resource.Sacred.View.DataGrid.areaNumCombogridInputContainer = $('#dataGridPanel #toolbar #areaNumCombogridInput');
                                        Resource.Sacred.View.DataGrid.searchStartDateboxLabelContainer = $('#dataGridPanel #toolbar #searchStartDateboxLabel');
					Resource.Sacred.View.DataGrid.searchStartDateboxInputContainer = $('#dataGridPanel #toolbar #searchStartDateboxInput');
					Resource.Sacred.View.DataGrid.searchEndDateboxLabelContainer = $('#dataGridPanel #toolbar #searchEndDateboxLabel');
					Resource.Sacred.View.DataGrid.searchEndDateboxInputContainer = $('#dataGridPanel #toolbar #searchEndDateboxInput');
					Resource.Sacred.View.DataGrid.searchButtonContainer = $('#dataGridPanel #toolbar #searchButton');
                                        Resource.Sacred.View.DataGrid.infoButtonContainer = $('#dataGridPanel #toolbar #infoButton');
                                        Resource.Sacred.View.DataGrid.exportButtonContainer = $('#dataGridPanel #toolbar #exportButton');
					Resource.Sacred.View.DataGrid.create();
                                        Resource.Sacred.View.DataGrid.showCurrSelectInfo();
				},
				
				create: function() {
					var width = $(document).width() - 40;
					var height = $(document).height() - 40;
					Resource.Sacred.View.dataGridPanelContainer.width(width);
					Resource.Sacred.View.dataGridPanelContainer.height(height);
					Resource.Sacred.View.dataGridPanelContainer.datagrid({
						toolbar: '#toolbar',
						columns: [[
                                                        {
                                                                checkbox: true,
                                                        },
							{
								field: 'date',
								title: resourceGoldViewDataGridColumnTitle1,
								width: 100,
							},
							{
								field: 'days',
								title: resourceBattleViewDataGridColumnTitle2,
								width: 100,
							},
							{
								field: 'ave',
								title: resourceSacredViewDataGridColumnTitle3,
								width: 150,
							},
						]],
						loadFilter: Utils.dataGridLoadFilter,
                                                singleSelect: true,
						pagination: true,
						pageSize: 50,
						pageList: [50, 100, 150, 200],
					});
					Component.Combobox.OperatorId.create(
						Resource.Sacred.View.DataGrid.operatorIdComboboxLabelContainer,
						Resource.Sacred.View.DataGrid.operatorIdComboboxInputContainer
					);
                                        Component.Combogrid.AreaNum.create(
						Resource.Sacred.View.DataGrid.areaNumCombogridLabelContainer,
						Resource.Sacred.View.DataGrid.areaNumCombogridInputContainer
					);
                                        Component.Datebox.Start.create(
						Resource.Sacred.View.DataGrid.searchStartDateboxLabelContainer,
						Resource.Sacred.View.DataGrid.searchStartDateboxInputContainer
					);
                                        Component.Datebox.End.create(
						Resource.Sacred.View.DataGrid.searchEndDateboxLabelContainer,
						Resource.Sacred.View.DataGrid.searchEndDateboxInputContainer
					);
					Resource.Sacred.View.DataGrid.searchButtonContainer.linkbutton({
						iconCls: 'icon-search',
						text: resourceViewDataGridToolbarButtonText1,
					});
					Resource.Sacred.View.DataGrid.searchButtonContainer.bind(
						'click',
						Resource.Sacred.View.DataGrid.doSearch
					);
                                        Resource.Sacred.View.DataGrid.infoButtonContainer.linkbutton({
						iconCls: 'icon-search',
						text: resourceViewDataGridToolbarButtonText2,
					});
					Resource.Sacred.View.DataGrid.infoButtonContainer.bind(
						'click',
						Resource.Sacred.InfoWindow.open
					);
                                        Resource.Sacred.View.DataGrid.exportButtonContainer.linkbutton({
						iconCls: 'icon-search',
						text: exportViewDataGridToolbarButtonText1,
					});
					Resource.Sacred.View.DataGrid.exportButtonContainer.bind(
						'click',
						Resource.Sacred.View.DataGrid.doExport
					);
				},
				getCheckedRows: function(allowMulti) {
					var allowMulti = arguments[0] ? arguments[0] : false;
					var checkedRow = Resource.Sacred.View.dataGridPanelContainer.datagrid('getChecked');
					
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
                                                    Resource.Sacred.View.DataGrid.operatorIdComboboxInputContainer.combobox('select',response.data.operatorId);
                                                    Resource.Sacred.View.DataGrid.areaNumCombogridInputContainer.combogrid('setValue',response.data.gameAreaId);
                                                    Resource.Sacred.View.DataGrid.searchStartDateboxInputContainer.datebox('setValue',response.data.startDate);
                                                    Resource.Sacred.View.DataGrid.searchEndDateboxInputContainer.datebox('setValue',response.data.endDate);
                                                }
                                        })
                                }, 
				doSearch: function() {
					Resource.Sacred.View.dataGridPanelContainer.datagrid({
						url: '/index.php/Resource/sacred/getListData',
						queryParams: {
							operatorId: Resource.Sacred.View.DataGrid.operatorIdComboboxInputContainer.combobox('getValue'),
                                                        gameAreaId: Resource.Sacred.View.DataGrid.areaNumCombogridInputContainer.combogrid('getValues').toString(),
                                                        searchStartDate: Resource.Sacred.View.DataGrid.searchStartDateboxInputContainer.datebox('getValue'),
                                                        searchEndDate : Resource.Sacred.View.DataGrid.searchEndDateboxInputContainer.datebox('getValue'),
						}
					});
				},
                                doExport: function() {

                                        var operatorId = Resource.Sacred.View.DataGrid.operatorIdComboboxInputContainer.combobox('getValue');
                                        var gameAreaId = Resource.Sacred.View.DataGrid.areaNumCombogridInputContainer.combogrid('getValues').toString();
                                        var startDate = Resource.Sacred.View.DataGrid.searchStartDateboxInputContainer.datebox('getValue');
                                        var endDate =  Resource.Sacred.View.DataGrid.searchEndDateboxInputContainer.datebox('getValue');

                                                  var downUrl = "/index.php/Resource/sacred/export?operatorId="+ operatorId +"&gameAreaId="+gameAreaId+"&startDate="+startDate+"&endDate="+endDate
                                                  window.location = downUrl;

				},
			},
		},
        InfoWindow: {
			dataGridContainer: '',
			
			init: function() {
				Resource.Sacred.InfoWindow.dataGridContainer = $('#infoWindow #dataGrid');
				Resource.Sacred.InfoWindow.DataGrid.init();
				Resource.Sacred.InfoWindow.create();
			},
			
			DataGrid: {
				init: function() {
					Resource.Sacred.InfoWindow.DataGrid.create();
				},
				
				create: function() {
					Resource.Sacred.InfoWindow.dataGridContainer.datagrid({
						width: 547,
						height: 392,
						fitColumns: true,
						border: false,
						columns: [[
							{
								field: 'days',
								title: resourceBattleViewDataGridColumnTitle2,
								width: 80,
							},
							{
								field: 'order',
								title: resourceBattleInfoWindowColumnTitle2,
								width: 100,
								
							},
                                                        {
								field: 'cid',
								title: resourceBattleInfoWindowColumnTitle3,
								width: 100,
								
							},
                                                        {
								field: 'name',
								title: resourceBattleInfoWindowColumnTitle4,
								width: 100,
								
							},
                                                        {
								field: 'sacred',
								title: resourceEquipInfoWindowColumnTitle5,
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
				Resource.Sacred.infoWindowContainer.window({
					width: 600,
					height: 450,
					title: resourceBattleInfoWindowTitle,
					collapsible: false,
					minimizable: false,
					maximizable: false,
					closable: true,
					closed: true,
					modal: true,
				});
			},
			
			open: function() {
				var checkedRow = Resource.Sacred.View.DataGrid.getCheckedRows();
				
				if(checkedRow != false) {
					Resource.Sacred.InfoWindow.dataGridContainer.datagrid({
						url: '/index.php/Resource/sacred/player',
						queryParams: {
                                                        operatorId: Resource.Sacred.View.DataGrid.operatorIdComboboxInputContainer.combobox('getValue'),
                                                        gameAreaId: Resource.Sacred.View.DataGrid.areaNumCombogridInputContainer.combogrid('getValue'),
							time: checkedRow[0].date,
						}
					})
					Resource.Sacred.infoWindowContainer.window('open');
				}
			},
		},
	},
    JueWei: {
        infoWindowContainer: '',
                
		init: function() {
			Language.getCurrLanguage();
			Utils.loadJavascriptFile('/application/views/libraries/component/' + language + '.js');
			Utils.loadJavascriptFile('/application/views/libraries/utils/' + language + '.js');
			Utils.loadJavascriptFile('/application/views/module/Resource/' + language + '.js');
			Utils.initAjax();
                        
			Resource.JueWei.infoWindowContainer = $('#infoWindow');
			Resource.JueWei.InfoWindow.init();
			Resource.JueWei.View.init();
		},
		
		View: {
			dataGridPanelContainer: '',
			
			init: function() {
				Resource.JueWei.View.dataGridPanelContainer = $('#dataGridPanel #dataGrid');
				Resource.JueWei.View.DataGrid.init();
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
                                infoButtonContainer: '',
                                exportButtonContainer: '',
				
				init: function() {
					Resource.JueWei.View.DataGrid.operatorIdComboboxLabelContainer = $('#dataGridPanel #toolbar #operatorIdComboboxLabel');
					Resource.JueWei.View.DataGrid.operatorIdComboboxInputContainer = $('#dataGridPanel #toolbar #operatorIdComboboxInput');
                                        Resource.JueWei.View.DataGrid.areaNumCombogridLabelContainer = $('#dataGridPanel #toolbar #areaNumCombogridLabel');
					Resource.JueWei.View.DataGrid.areaNumCombogridInputContainer = $('#dataGridPanel #toolbar #areaNumCombogridInput');
                                        Resource.JueWei.View.DataGrid.searchStartDateboxLabelContainer = $('#dataGridPanel #toolbar #searchStartDateboxLabel');
					Resource.JueWei.View.DataGrid.searchStartDateboxInputContainer = $('#dataGridPanel #toolbar #searchStartDateboxInput');
					Resource.JueWei.View.DataGrid.searchEndDateboxLabelContainer = $('#dataGridPanel #toolbar #searchEndDateboxLabel');
					Resource.JueWei.View.DataGrid.searchEndDateboxInputContainer = $('#dataGridPanel #toolbar #searchEndDateboxInput');
					Resource.JueWei.View.DataGrid.searchButtonContainer = $('#dataGridPanel #toolbar #searchButton');
                                        Resource.JueWei.View.DataGrid.infoButtonContainer = $('#dataGridPanel #toolbar #infoButton');
                                        Resource.JueWei.View.DataGrid.exportButtonContainer = $('#dataGridPanel #toolbar #exportButton');
					Resource.JueWei.View.DataGrid.create();
                                        Resource.JueWei.View.DataGrid.showCurrSelectInfo();
				},
				
				create: function() {
					var width = $(document).width() - 40;
					var height = $(document).height() - 40;
					Resource.JueWei.View.dataGridPanelContainer.width(width);
					Resource.JueWei.View.dataGridPanelContainer.height(height);
					Resource.JueWei.View.dataGridPanelContainer.datagrid({
						toolbar: '#toolbar',
						columns: [[
                                                        {
                                                                checkbox: true,
                                                        },
							{
								field: 'date',
								title: resourceGoldViewDataGridColumnTitle1,
								width: 100,
							},
							{
								field: 'days',
								title: resourceBattleViewDataGridColumnTitle2,
								width: 100,
							},
							{
								field: 'ave',
								title: resourceJueWeiViewDataGridColumnTitle3,
								width: 150,
							},
						]],
						loadFilter: Utils.dataGridLoadFilter,
                                                singleSelect: true,
						pagination: true,
						pageSize: 50,
						pageList: [50, 100, 150, 200],
					});
					Component.Combobox.OperatorId.create(
						Resource.JueWei.View.DataGrid.operatorIdComboboxLabelContainer,
						Resource.JueWei.View.DataGrid.operatorIdComboboxInputContainer
					);
                                        Component.Combogrid.AreaNum.create(
						Resource.JueWei.View.DataGrid.areaNumCombogridLabelContainer,
						Resource.JueWei.View.DataGrid.areaNumCombogridInputContainer
					);
                                        Component.Datebox.Start.create(
						Resource.JueWei.View.DataGrid.searchStartDateboxLabelContainer,
						Resource.JueWei.View.DataGrid.searchStartDateboxInputContainer
					);
                                        Component.Datebox.End.create(
						Resource.JueWei.View.DataGrid.searchEndDateboxLabelContainer,
						Resource.JueWei.View.DataGrid.searchEndDateboxInputContainer
					);
					Resource.JueWei.View.DataGrid.searchButtonContainer.linkbutton({
						iconCls: 'icon-search',
						text: resourceViewDataGridToolbarButtonText1,
					});
					Resource.JueWei.View.DataGrid.searchButtonContainer.bind(
						'click',
						Resource.JueWei.View.DataGrid.doSearch
					);
                                        Resource.JueWei.View.DataGrid.infoButtonContainer.linkbutton({
						iconCls: 'icon-search',
						text: resourceViewDataGridToolbarButtonText2,
					});
					Resource.JueWei.View.DataGrid.infoButtonContainer.bind(
						'click',
						Resource.JueWei.InfoWindow.open
					);
                                        Resource.JueWei.View.DataGrid.exportButtonContainer.linkbutton({
						iconCls: 'icon-search',
						text: exportViewDataGridToolbarButtonText1,
					});
					Resource.JueWei.View.DataGrid.exportButtonContainer.bind(
						'click',
						Resource.JueWei.View.DataGrid.doExport
					);
				},
				getCheckedRows: function(allowMulti) {
					var allowMulti = arguments[0] ? arguments[0] : false;
					var checkedRow = Resource.JueWei.View.dataGridPanelContainer.datagrid('getChecked');
					
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
                                                    Resource.JueWei.View.DataGrid.operatorIdComboboxInputContainer.combobox('select',response.data.operatorId);
                                                    Resource.JueWei.View.DataGrid.areaNumCombogridInputContainer.combogrid('setValue',response.data.gameAreaId);
                                                    Resource.JueWei.View.DataGrid.searchStartDateboxInputContainer.datebox('setValue',response.data.startDate);
                                                    Resource.JueWei.View.DataGrid.searchEndDateboxInputContainer.datebox('setValue',response.data.endDate);
                                                }
                                        })
                                }, 
				doSearch: function() {
					Resource.JueWei.View.dataGridPanelContainer.datagrid({
						url: '/index.php/Resource/jueWei/getListData',
						queryParams: {
							operatorId: Resource.JueWei.View.DataGrid.operatorIdComboboxInputContainer.combobox('getValue'),
                                                        gameAreaId: Resource.JueWei.View.DataGrid.areaNumCombogridInputContainer.combogrid('getValues').toString(),
                                                        searchStartDate: Resource.JueWei.View.DataGrid.searchStartDateboxInputContainer.datebox('getValue'),
                                                        searchEndDate : Resource.JueWei.View.DataGrid.searchEndDateboxInputContainer.datebox('getValue'),
						}
					});
				},
                                doExport: function() {

                                        var operatorId = Resource.JueWei.View.DataGrid.operatorIdComboboxInputContainer.combobox('getValue');
                                        var gameAreaId = Resource.JueWei.View.DataGrid.areaNumCombogridInputContainer.combogrid('getValues').toString();
                                        var startDate = Resource.JueWei.View.DataGrid.searchStartDateboxInputContainer.datebox('getValue');
                                        var endDate =  Resource.JueWei.View.DataGrid.searchEndDateboxInputContainer.datebox('getValue');

                                                  var downUrl = "/index.php/Resource/jueWei/export?operatorId="+ operatorId +"&gameAreaId="+gameAreaId+"&startDate="+startDate+"&endDate="+endDate
                                                  window.location = downUrl;

				},
			},
		},
        InfoWindow: {
			dataGridContainer: '',
			
			init: function() {
				Resource.JueWei.InfoWindow.dataGridContainer = $('#infoWindow #dataGrid');
				Resource.JueWei.InfoWindow.DataGrid.init();
				Resource.JueWei.InfoWindow.create();
			},
			
			DataGrid: {
				init: function() {
					Resource.JueWei.InfoWindow.DataGrid.create();
				},
				
				create: function() {
					Resource.JueWei.InfoWindow.dataGridContainer.datagrid({
						width: 547,
						height: 392,
						fitColumns: true,
						border: false,
						columns: [[
							{
								field: 'days',
								title: resourceBattleViewDataGridColumnTitle2,
								width: 80,
							},
							{
								field: 'order',
								title: resourceBattleInfoWindowColumnTitle2,
								width: 100,
								
							},
                                                        {
								field: 'cid',
								title: resourceBattleInfoWindowColumnTitle3,
								width: 100,
								
							},
                                                        {
								field: 'name',
								title: resourceBattleInfoWindowColumnTitle4,
								width: 100,
								
							},
                                                        {
								field: 'jueWei',
								title: resourceLevelInfoWindowColumnTitle5,
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
				Resource.JueWei.infoWindowContainer.window({
					width: 600,
					height: 450,
					title: resourceBattleInfoWindowTitle,
					collapsible: false,
					minimizable: false,
					maximizable: false,
					closable: true,
					closed: true,
					modal: true,
				});
			},
			
			open: function() {
				var checkedRow = Resource.JueWei.View.DataGrid.getCheckedRows();
				
				if(checkedRow != false) {
					Resource.JueWei.InfoWindow.dataGridContainer.datagrid({
						url: '/index.php/Resource/jueWei/player',
						queryParams: {
                                                        operatorId: Resource.JueWei.View.DataGrid.operatorIdComboboxInputContainer.combobox('getValue'),
                                                        gameAreaId: Resource.JueWei.View.DataGrid.areaNumCombogridInputContainer.combogrid('getValue'),
							time: checkedRow[0].date,
						}
					})
					Resource.JueWei.infoWindowContainer.window('open');
				}
			},
		},
	},
    Star: {
        infoWindowContainer: '',
                
		init: function() {
			Language.getCurrLanguage();
			Utils.loadJavascriptFile('/application/views/libraries/component/' + language + '.js');
			Utils.loadJavascriptFile('/application/views/libraries/utils/' + language + '.js');
			Utils.loadJavascriptFile('/application/views/module/Resource/' + language + '.js');
			Utils.initAjax();
                        
			Resource.Star.infoWindowContainer = $('#infoWindow');
			Resource.Star.InfoWindow.init();
			Resource.Star.View.init();
		},
		
		View: {
			dataGridPanelContainer: '',
			
			init: function() {
				Resource.Star.View.dataGridPanelContainer = $('#dataGridPanel #dataGrid');
				Resource.Star.View.DataGrid.init();
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
                                infoButtonContainer: '',
                                exportButtonContainer: '',
				
				init: function() {
					Resource.Star.View.DataGrid.operatorIdComboboxLabelContainer = $('#dataGridPanel #toolbar #operatorIdComboboxLabel');
					Resource.Star.View.DataGrid.operatorIdComboboxInputContainer = $('#dataGridPanel #toolbar #operatorIdComboboxInput');
                                        Resource.Star.View.DataGrid.areaNumCombogridLabelContainer = $('#dataGridPanel #toolbar #areaNumCombogridLabel');
					Resource.Star.View.DataGrid.areaNumCombogridInputContainer = $('#dataGridPanel #toolbar #areaNumCombogridInput');
                                        Resource.Star.View.DataGrid.searchStartDateboxLabelContainer = $('#dataGridPanel #toolbar #searchStartDateboxLabel');
					Resource.Star.View.DataGrid.searchStartDateboxInputContainer = $('#dataGridPanel #toolbar #searchStartDateboxInput');
					Resource.Star.View.DataGrid.searchEndDateboxLabelContainer = $('#dataGridPanel #toolbar #searchEndDateboxLabel');
					Resource.Star.View.DataGrid.searchEndDateboxInputContainer = $('#dataGridPanel #toolbar #searchEndDateboxInput');
					Resource.Star.View.DataGrid.searchButtonContainer = $('#dataGridPanel #toolbar #searchButton');
                                        Resource.Star.View.DataGrid.infoButtonContainer = $('#dataGridPanel #toolbar #infoButton');
                                        Resource.Star.View.DataGrid.exportButtonContainer = $('#dataGridPanel #toolbar #exportButton');
					Resource.Star.View.DataGrid.create();
                                        Resource.Star.View.DataGrid.showCurrSelectInfo();
				},
				
				create: function() {
					var width = $(document).width() - 40;
					var height = $(document).height() - 40;
					Resource.Star.View.dataGridPanelContainer.width(width);
					Resource.Star.View.dataGridPanelContainer.height(height);
					Resource.Star.View.dataGridPanelContainer.datagrid({
						toolbar: '#toolbar',
						columns: [[
                                                        {
                                                                checkbox: true,
                                                        },
							{
								field: 'date',
								title: resourceGoldViewDataGridColumnTitle1,
								width: 100,
							},
							{
								field: 'days',
								title: resourceBattleViewDataGridColumnTitle2,
								width: 100,
							},
							{
								field: 'ave',
								title: resourceStarViewDataGridColumnTitle3,
								width: 150,
							},
						]],
						loadFilter: Utils.dataGridLoadFilter,
                                                singleSelect: true,
						pagination: true,
						pageSize: 50,
						pageList: [50, 100, 150, 200],
					});
					Component.Combobox.OperatorId.create(
						Resource.Star.View.DataGrid.operatorIdComboboxLabelContainer,
						Resource.Star.View.DataGrid.operatorIdComboboxInputContainer
					);
                                        Component.Combogrid.AreaNum.create(
						Resource.Star.View.DataGrid.areaNumCombogridLabelContainer,
						Resource.Star.View.DataGrid.areaNumCombogridInputContainer
					);
                                        Component.Datebox.Start.create(
						Resource.Star.View.DataGrid.searchStartDateboxLabelContainer,
						Resource.Star.View.DataGrid.searchStartDateboxInputContainer
					);
                                        Component.Datebox.End.create(
						Resource.Star.View.DataGrid.searchEndDateboxLabelContainer,
						Resource.Star.View.DataGrid.searchEndDateboxInputContainer
					);
					Resource.Star.View.DataGrid.searchButtonContainer.linkbutton({
						iconCls: 'icon-search',
						text: resourceViewDataGridToolbarButtonText1,
					});
					Resource.Star.View.DataGrid.searchButtonContainer.bind(
						'click',
						Resource.Star.View.DataGrid.doSearch
					);
                                        Resource.Star.View.DataGrid.infoButtonContainer.linkbutton({
						iconCls: 'icon-search',
						text: resourceViewDataGridToolbarButtonText2,
					});
					Resource.Star.View.DataGrid.infoButtonContainer.bind(
						'click',
						Resource.Star.InfoWindow.open
					);
                                        Resource.Star.View.DataGrid.exportButtonContainer.linkbutton({
						iconCls: 'icon-search',
						text: exportViewDataGridToolbarButtonText1,
					});
					Resource.Star.View.DataGrid.exportButtonContainer.bind(
						'click',
						Resource.Star.View.DataGrid.doExport
					);
				},
				getCheckedRows: function(allowMulti) {
					var allowMulti = arguments[0] ? arguments[0] : false;
					var checkedRow = Resource.Star.View.dataGridPanelContainer.datagrid('getChecked');
					
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
                                                    Resource.Star.View.DataGrid.operatorIdComboboxInputContainer.combobox('select',response.data.operatorId);
                                                    Resource.Star.View.DataGrid.areaNumCombogridInputContainer.combogrid('setValue',response.data.gameAreaId);
                                                    Resource.Star.View.DataGrid.searchStartDateboxInputContainer.datebox('setValue',response.data.startDate);
                                                    Resource.Star.View.DataGrid.searchEndDateboxInputContainer.datebox('setValue',response.data.endDate);
                                                }
                                        })
                                }, 
				doSearch: function() {
					Resource.Star.View.dataGridPanelContainer.datagrid({
						url: '/index.php/Resource/star/getListData',
						queryParams: {
							operatorId: Resource.Star.View.DataGrid.operatorIdComboboxInputContainer.combobox('getValue'),
                                                        gameAreaId: Resource.Star.View.DataGrid.areaNumCombogridInputContainer.combogrid('getValues').toString(),
                                                        searchStartDate: Resource.Star.View.DataGrid.searchStartDateboxInputContainer.datebox('getValue'),
                                                        searchEndDate : Resource.Star.View.DataGrid.searchEndDateboxInputContainer.datebox('getValue'),
						}
					});
				},
                                doExport: function() {
 
                                        var operatorId = Resource.Star.View.DataGrid.operatorIdComboboxInputContainer.combobox('getValue');
                                        var gameAreaId = Resource.Star.View.DataGrid.areaNumCombogridInputContainer.combogrid('getValues').toString();
                                        var startDate = Resource.Star.View.DataGrid.searchStartDateboxInputContainer.datebox('getValue');
                                        var endDate =  Resource.Star.View.DataGrid.searchEndDateboxInputContainer.datebox('getValue');

                                                  var downUrl = "/index.php/Resource/star/export?operatorId="+ operatorId +"&gameAreaId="+gameAreaId+"&startDate="+startDate+"&endDate="+endDate
                                                  window.location = downUrl;

				},
			},
		},
                InfoWindow: {
			dataGridContainer: '',
			
			init: function() {
				Resource.Star.InfoWindow.dataGridContainer = $('#infoWindow #dataGrid');
				Resource.Star.InfoWindow.DataGrid.init();
				Resource.Star.InfoWindow.create();
			},
			
			DataGrid: {
				init: function() {
					Resource.Star.InfoWindow.DataGrid.create();
				},
				
				create: function() {
					Resource.Star.InfoWindow.dataGridContainer.datagrid({
						width: 547,
						height: 392,
						fitColumns: true,
						border: false,
						columns: [[
							{
								field: 'days',
								title: resourceBattleViewDataGridColumnTitle2,
								width: 80,
							},
							{
								field: 'order',
								title: resourceBattleInfoWindowColumnTitle2,
								width: 100,
								
							},
                                                        {
								field: 'cid',
								title: resourceBattleInfoWindowColumnTitle3,
								width: 100,
								
							},
                                                        {
								field: 'name',
								title: resourceBattleInfoWindowColumnTitle4,
								width: 100,
								
							},
                                                        {
								field: 'star',
								title: resourceLevelInfoWindowColumnTitle5,
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
				Resource.Star.infoWindowContainer.window({
					width: 600,
					height: 450,
					title: resourceBattleInfoWindowTitle,
					collapsible: false,
					minimizable: false,
					maximizable: false,
					closable: true,
					closed: true,
					modal: true,
				});
			},
			
			open: function() {
				var checkedRow = Resource.Star.View.DataGrid.getCheckedRows();
				
				if(checkedRow != false) {
					Resource.Star.InfoWindow.dataGridContainer.datagrid({
						url: '/index.php/Resource/star/player',
						queryParams: {
                                                        operatorId: Resource.Star.View.DataGrid.operatorIdComboboxInputContainer.combobox('getValue'),
                                                        gameAreaId: Resource.Star.View.DataGrid.areaNumCombogridInputContainer.combogrid('getValue'),
							time: checkedRow[0].date,
						}
					})
					Resource.Star.infoWindowContainer.window('open');
				}
			},
		},
	},
    Sky: {
        infoWindowContainer: '',
                
		init: function() {
			Language.getCurrLanguage();
			Utils.loadJavascriptFile('/application/views/libraries/component/' + language + '.js');
			Utils.loadJavascriptFile('/application/views/libraries/utils/' + language + '.js');
			Utils.loadJavascriptFile('/application/views/module/Resource/' + language + '.js');
			Utils.initAjax();
                        
			Resource.Sky.infoWindowContainer = $('#infoWindow');
			Resource.Sky.InfoWindow.init();
			Resource.Sky.View.init();
		},
		
		View: {
			dataGridPanelContainer: '',
			
			init: function() {
				Resource.Sky.View.dataGridPanelContainer = $('#dataGridPanel #dataGrid');
				Resource.Sky.View.DataGrid.init();
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
                                infoButtonContainer: '',
                                exportButtonContainer: '',
				
				init: function() {
					Resource.Sky.View.DataGrid.operatorIdComboboxLabelContainer = $('#dataGridPanel #toolbar #operatorIdComboboxLabel');
					Resource.Sky.View.DataGrid.operatorIdComboboxInputContainer = $('#dataGridPanel #toolbar #operatorIdComboboxInput');
                                        Resource.Sky.View.DataGrid.areaNumCombogridLabelContainer = $('#dataGridPanel #toolbar #areaNumCombogridLabel');
					Resource.Sky.View.DataGrid.areaNumCombogridInputContainer = $('#dataGridPanel #toolbar #areaNumCombogridInput');
                                        Resource.Sky.View.DataGrid.searchStartDateboxLabelContainer = $('#dataGridPanel #toolbar #searchStartDateboxLabel');
					Resource.Sky.View.DataGrid.searchStartDateboxInputContainer = $('#dataGridPanel #toolbar #searchStartDateboxInput');
					Resource.Sky.View.DataGrid.searchEndDateboxLabelContainer = $('#dataGridPanel #toolbar #searchEndDateboxLabel');
					Resource.Sky.View.DataGrid.searchEndDateboxInputContainer = $('#dataGridPanel #toolbar #searchEndDateboxInput');
					Resource.Sky.View.DataGrid.searchButtonContainer = $('#dataGridPanel #toolbar #searchButton');
                                        Resource.Sky.View.DataGrid.infoButtonContainer = $('#dataGridPanel #toolbar #infoButton');
                                        Resource.Sky.View.DataGrid.exportButtonContainer = $('#dataGridPanel #toolbar #exportButton');
					Resource.Sky.View.DataGrid.create();
                                        Resource.Sky.View.DataGrid.showCurrSelectInfo();
				},
				
				create: function() {
					var width = $(document).width() - 40;
					var height = $(document).height() - 40;
					Resource.Sky.View.dataGridPanelContainer.width(width);
					Resource.Sky.View.dataGridPanelContainer.height(height);
					Resource.Sky.View.dataGridPanelContainer.datagrid({
						toolbar: '#toolbar',
						columns: [[
                                                        {
                                                                checkbox: true,
                                                        },
							{
								field: 'date',
								title: resourceGoldViewDataGridColumnTitle1,
								width: 100,
							},
							{
								field: 'days',
								title: resourceBattleViewDataGridColumnTitle2,
								width: 100,
							},
							{
								field: 'ave',
								title: resourceSkyViewDataGridColumnTitle3,
								width: 150,
							},
						]],
						loadFilter: Utils.dataGridLoadFilter,
                                                singleSelect: true,
						pagination: true,
						pageSize: 50,
						pageList: [50, 100, 150, 200],
					});
					Component.Combobox.OperatorId.create(
						Resource.Sky.View.DataGrid.operatorIdComboboxLabelContainer,
						Resource.Sky.View.DataGrid.operatorIdComboboxInputContainer
					);
                                        Component.Combogrid.AreaNum.create(
						Resource.Sky.View.DataGrid.areaNumCombogridLabelContainer,
						Resource.Sky.View.DataGrid.areaNumCombogridInputContainer
					);
                                        Component.Datebox.Start.create(
						Resource.Sky.View.DataGrid.searchStartDateboxLabelContainer,
						Resource.Sky.View.DataGrid.searchStartDateboxInputContainer
					);
                                        Component.Datebox.End.create(
						Resource.Sky.View.DataGrid.searchEndDateboxLabelContainer,
						Resource.Sky.View.DataGrid.searchEndDateboxInputContainer
					);
					Resource.Sky.View.DataGrid.searchButtonContainer.linkbutton({
						iconCls: 'icon-search',
						text: resourceViewDataGridToolbarButtonText1,
					});
					Resource.Sky.View.DataGrid.searchButtonContainer.bind(
						'click',
						Resource.Sky.View.DataGrid.doSearch
					);
                                        Resource.Sky.View.DataGrid.infoButtonContainer.linkbutton({
						iconCls: 'icon-search',
						text: resourceViewDataGridToolbarButtonText2,
					});
					Resource.Sky.View.DataGrid.infoButtonContainer.bind(
						'click',
						Resource.Sky.InfoWindow.open
					);
                                        Resource.Sky.View.DataGrid.exportButtonContainer.linkbutton({
						iconCls: 'icon-search',
						text: exportViewDataGridToolbarButtonText1,
					});
					Resource.Sky.View.DataGrid.exportButtonContainer.bind(
						'click',
						Resource.Sky.View.DataGrid.doExport
					);
				},
				getCheckedRows: function(allowMulti) {
					var allowMulti = arguments[0] ? arguments[0] : false;
					var checkedRow = Resource.Sky.View.dataGridPanelContainer.datagrid('getChecked');
					
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
                                                    Resource.Sky.View.DataGrid.operatorIdComboboxInputContainer.combobox('select',response.data.operatorId);
                                                    Resource.Sky.View.DataGrid.areaNumCombogridInputContainer.combogrid('setValue',response.data.gameAreaId);
                                                    Resource.Sky.View.DataGrid.searchStartDateboxInputContainer.datebox('setValue',response.data.startDate);
                                                    Resource.Sky.View.DataGrid.searchEndDateboxInputContainer.datebox('setValue',response.data.endDate);
                                                }
                                        })
                                }, 
				doSearch: function() {
					Resource.Sky.View.dataGridPanelContainer.datagrid({
						url: '/index.php/Resource/sky/getListData',
						queryParams: {
							operatorId: Resource.Sky.View.DataGrid.operatorIdComboboxInputContainer.combobox('getValue'),
                                                        gameAreaId: Resource.Sky.View.DataGrid.areaNumCombogridInputContainer.combogrid('getValues').toString(),
                                                        searchStartDate: Resource.Sky.View.DataGrid.searchStartDateboxInputContainer.datebox('getValue'),
                                                        searchEndDate : Resource.Sky.View.DataGrid.searchEndDateboxInputContainer.datebox('getValue'),
						}
					});
				},
                                doExport: function() {

                                        var operatorId = Resource.Sky.View.DataGrid.operatorIdComboboxInputContainer.combobox('getValue');
                                        var gameAreaId = Resource.Sky.View.DataGrid.areaNumCombogridInputContainer.combogrid('getValues').toString();
                                        var startDate = Resource.Sky.View.DataGrid.searchStartDateboxInputContainer.datebox('getValue');
                                        var endDate =  Resource.Sky.View.DataGrid.searchEndDateboxInputContainer.datebox('getValue');

                                                  var downUrl = "/index.php/Resource/sky/export?operatorId="+ operatorId +"&gameAreaId="+gameAreaId+"&startDate="+startDate+"&endDate="+endDate
                                                  window.location = downUrl;

				},
			},
		},
        InfoWindow: {
			dataGridContainer: '',
			
			init: function() {
				Resource.Sky.InfoWindow.dataGridContainer = $('#infoWindow #dataGrid');
				Resource.Sky.InfoWindow.DataGrid.init();
				Resource.Sky.InfoWindow.create();
			},
			
			DataGrid: {
				init: function() {
					Resource.Sky.InfoWindow.DataGrid.create();
				},
				
				create: function() {
					Resource.Sky.InfoWindow.dataGridContainer.datagrid({
						width: 547,
						height: 392,
						fitColumns: true,
						border: false,
						columns: [[
							{
								field: 'days',
								title: resourceBattleViewDataGridColumnTitle2,
								width: 80,
							},
							{
								field: 'order',
								title: resourceBattleInfoWindowColumnTitle2,
								width: 100,
								
							},
                                                        {
								field: 'cid',
								title: resourceBattleInfoWindowColumnTitle3,
								width: 100,
								
							},
                                                        {
								field: 'name',
								title: resourceBattleInfoWindowColumnTitle4,
								width: 100,
								
							},
                                                        {
								field: 'sky',
								title: resourceLevelInfoWindowColumnTitle5,
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
				Resource.Sky.infoWindowContainer.window({
					width: 600,
					height: 450,
					title: resourceBattleInfoWindowTitle,
					collapsible: false,
					minimizable: false,
					maximizable: false,
					closable: true,
					closed: true,
					modal: true,
				});
			},
			
			open: function() {
				var checkedRow = Resource.Sky.View.DataGrid.getCheckedRows();
				
				if(checkedRow != false) {
					Resource.Sky.InfoWindow.dataGridContainer.datagrid({
						url: '/index.php/Resource/sky/player',
						queryParams: {
                                                        operatorId: Resource.Sky.View.DataGrid.operatorIdComboboxInputContainer.combobox('getValue'),
                                                        gameAreaId: Resource.Sky.View.DataGrid.areaNumCombogridInputContainer.combogrid('getValue'),
							time: checkedRow[0].date,
						}
					})
					Resource.Sky.infoWindowContainer.window('open');
				}
			},
		},
	},
    Damnation: {
        infoWindowContainer: '',
                
		init: function() {
			Language.getCurrLanguage();
			Utils.loadJavascriptFile('/application/views/libraries/component/' + language + '.js');
			Utils.loadJavascriptFile('/application/views/libraries/utils/' + language + '.js');
			Utils.loadJavascriptFile('/application/views/module/Resource/' + language + '.js');
			Utils.initAjax();
                        
			Resource.Damnation.infoWindowContainer = $('#infoWindow');
			Resource.Damnation.InfoWindow.init();
			Resource.Damnation.View.init();
		},
		
		View: {
			dataGridPanelContainer: '',
			
			init: function() {
				Resource.Damnation.View.dataGridPanelContainer = $('#dataGridPanel #dataGrid');
				Resource.Damnation.View.DataGrid.init();
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
                                infoButtonContainer: '',
                                exportButtonContainer: '',
				
				init: function() {
					Resource.Damnation.View.DataGrid.operatorIdComboboxLabelContainer = $('#dataGridPanel #toolbar #operatorIdComboboxLabel');
					Resource.Damnation.View.DataGrid.operatorIdComboboxInputContainer = $('#dataGridPanel #toolbar #operatorIdComboboxInput');
                                        Resource.Damnation.View.DataGrid.areaNumCombogridLabelContainer = $('#dataGridPanel #toolbar #areaNumCombogridLabel');
					Resource.Damnation.View.DataGrid.areaNumCombogridInputContainer = $('#dataGridPanel #toolbar #areaNumCombogridInput');
                                        Resource.Damnation.View.DataGrid.searchStartDateboxLabelContainer = $('#dataGridPanel #toolbar #searchStartDateboxLabel');
					Resource.Damnation.View.DataGrid.searchStartDateboxInputContainer = $('#dataGridPanel #toolbar #searchStartDateboxInput');
					Resource.Damnation.View.DataGrid.searchEndDateboxLabelContainer = $('#dataGridPanel #toolbar #searchEndDateboxLabel');
					Resource.Damnation.View.DataGrid.searchEndDateboxInputContainer = $('#dataGridPanel #toolbar #searchEndDateboxInput');
					Resource.Damnation.View.DataGrid.searchButtonContainer = $('#dataGridPanel #toolbar #searchButton');
                                        Resource.Damnation.View.DataGrid.infoButtonContainer = $('#dataGridPanel #toolbar #infoButton');
                                        Resource.Damnation.View.DataGrid.exportButtonContainer = $('#dataGridPanel #toolbar #exportButton');
					Resource.Damnation.View.DataGrid.create();
                                        Resource.Damnation.View.DataGrid.showCurrSelectInfo();
				},
				
				create: function() {
					var width = $(document).width() - 40;
					var height = $(document).height() - 40;
					Resource.Damnation.View.dataGridPanelContainer.width(width);
					Resource.Damnation.View.dataGridPanelContainer.height(height);
					Resource.Damnation.View.dataGridPanelContainer.datagrid({
						toolbar: '#toolbar',
						columns: [[
                                                        {
                                                                checkbox: true,
                                                        },
							{
								field: 'date',
								title: resourceGoldViewDataGridColumnTitle1,
								width: 100,
							},
							{
								field: 'days',
								title: resourceBattleViewDataGridColumnTitle2,
								width: 100,
							},
							{
								field: 'ave',
								title: resourceDamnationViewDataGridColumnTitle3,
								width: 150,
							},
						]],
						loadFilter: Utils.dataGridLoadFilter,
                                                singleSelect: true,
						pagination: true,
						pageSize: 50,
						pageList: [50, 100, 150, 200],
					});
					Component.Combobox.OperatorId.create(
						Resource.Damnation.View.DataGrid.operatorIdComboboxLabelContainer,
						Resource.Damnation.View.DataGrid.operatorIdComboboxInputContainer
					);
                                        Component.Combogrid.AreaNum.create(
						Resource.Damnation.View.DataGrid.areaNumCombogridLabelContainer,
						Resource.Damnation.View.DataGrid.areaNumCombogridInputContainer
					);
                                        Component.Datebox.Start.create(
						Resource.Damnation.View.DataGrid.searchStartDateboxLabelContainer,
						Resource.Damnation.View.DataGrid.searchStartDateboxInputContainer
					);
                                        Component.Datebox.End.create(
						Resource.Damnation.View.DataGrid.searchEndDateboxLabelContainer,
						Resource.Damnation.View.DataGrid.searchEndDateboxInputContainer
					);
					Resource.Damnation.View.DataGrid.searchButtonContainer.linkbutton({
						iconCls: 'icon-search',
						text: resourceViewDataGridToolbarButtonText1,
					});
					Resource.Damnation.View.DataGrid.searchButtonContainer.bind(
						'click',
						Resource.Damnation.View.DataGrid.doSearch
					);
                                        Resource.Damnation.View.DataGrid.infoButtonContainer.linkbutton({
						iconCls: 'icon-search',
						text: resourceViewDataGridToolbarButtonText2,
					});
					Resource.Damnation.View.DataGrid.infoButtonContainer.bind(
						'click',
						Resource.Damnation.InfoWindow.open
					);
                                        Resource.Damnation.View.DataGrid.exportButtonContainer.linkbutton({
						iconCls: 'icon-search',
						text: exportViewDataGridToolbarButtonText1,
					});
					Resource.Damnation.View.DataGrid.exportButtonContainer.bind(
						'click',
						Resource.Damnation.View.DataGrid.doExport
					);
				},
				getCheckedRows: function(allowMulti) {
					var allowMulti = arguments[0] ? arguments[0] : false;
					var checkedRow = Resource.Damnation.View.dataGridPanelContainer.datagrid('getChecked');
					
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
                                                    Resource.Damnation.View.DataGrid.operatorIdComboboxInputContainer.combobox('select',response.data.operatorId);
                                                    Resource.Damnation.View.DataGrid.areaNumCombogridInputContainer.combogrid('setValue',response.data.gameAreaId);
                                                    Resource.Damnation.View.DataGrid.searchStartDateboxInputContainer.datebox('setValue',response.data.startDate);
                                                    Resource.Damnation.View.DataGrid.searchEndDateboxInputContainer.datebox('setValue',response.data.endDate);
                                                }
                                        })
                                }, 
				doSearch: function() {
					Resource.Damnation.View.dataGridPanelContainer.datagrid({
						url: '/index.php/Resource/damnation/getListData',
						queryParams: {
							operatorId: Resource.Damnation.View.DataGrid.operatorIdComboboxInputContainer.combobox('getValue'),
                                                        gameAreaId: Resource.Damnation.View.DataGrid.areaNumCombogridInputContainer.combogrid('getValues').toString(),
                                                        searchStartDate: Resource.Damnation.View.DataGrid.searchStartDateboxInputContainer.datebox('getValue'),
                                                        searchEndDate : Resource.Damnation.View.DataGrid.searchEndDateboxInputContainer.datebox('getValue'),
						}
					});
				},
                                doExport: function() {

                                        var operatorId = Resource.Damnation.View.DataGrid.operatorIdComboboxInputContainer.combobox('getValue');
                                        var gameAreaId = Resource.Damnation.View.DataGrid.areaNumCombogridInputContainer.combogrid('getValues').toString();
                                        var startDate = Resource.Damnation.View.DataGrid.searchStartDateboxInputContainer.datebox('getValue');
                                        var endDate =  Resource.Damnation.View.DataGrid.searchEndDateboxInputContainer.datebox('getValue');

                                                  var downUrl = "/index.php/Resource/damnation/export?operatorId="+ operatorId +"&gameAreaId="+gameAreaId+"&damnationtDate="+damnationtDate+"&endDate="+endDate
                                                  window.location = downUrl;

				},
			},
		},
        InfoWindow: {
			dataGridContainer: '',
			
			init: function() {
				Resource.Damnation.InfoWindow.dataGridContainer = $('#infoWindow #dataGrid');
				Resource.Damnation.InfoWindow.DataGrid.init();
				Resource.Damnation.InfoWindow.create();
			},
			
			DataGrid: {
				init: function() {
					Resource.Damnation.InfoWindow.DataGrid.create();
				},
				
				create: function() {
					Resource.Damnation.InfoWindow.dataGridContainer.datagrid({
						width: 547,
						height: 392,
						fitColumns: true,
						border: false,
						columns: [[
							{
								field: 'days',
								title: resourceBattleViewDataGridColumnTitle2,
								width: 80,
							},
							{
								field: 'order',
								title: resourceBattleInfoWindowColumnTitle2,
								width: 100,
								
							},
                                                        {
								field: 'cid',
								title: resourceBattleInfoWindowColumnTitle3,
								width: 100,
								
							},
                                                        {
								field: 'name',
								title: resourceBattleInfoWindowColumnTitle4,
								width: 100,
								
							},
                                                        {
								field: 'damnation',
								title: resourceLevelInfoWindowColumnTitle5,
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
				Resource.Damnation.infoWindowContainer.window({
					width: 600,
					height: 450,
					title: resourceBattleInfoWindowTitle,
					collapsible: false,
					minimizable: false,
					maximizable: false,
					closable: true,
					closed: true,
					modal: true,
				});
			},
			
			open: function() {
				var checkedRow = Resource.Damnation.View.DataGrid.getCheckedRows();
				
				if(checkedRow != false) {
					Resource.Damnation.InfoWindow.dataGridContainer.datagrid({
						url: '/index.php/Resource/damnation/player',
						queryParams: {
                                                        operatorId: Resource.Damnation.View.DataGrid.operatorIdComboboxInputContainer.combobox('getValue'),
                                                        gameAreaId: Resource.Damnation.View.DataGrid.areaNumCombogridInputContainer.combogrid('getValue'),
							time: checkedRow[0].date,
						}
					})
					Resource.Damnation.infoWindowContainer.window('open');
				}
			},
		},
	},
    Honor: {
        infoWindowContainer: '',
                
		init: function() {
			Language.getCurrLanguage();
			Utils.loadJavascriptFile('/application/views/libraries/component/' + language + '.js');
			Utils.loadJavascriptFile('/application/views/libraries/utils/' + language + '.js');
			Utils.loadJavascriptFile('/application/views/module/Resource/' + language + '.js');
			Utils.initAjax();
                        
			Resource.Honor.infoWindowContainer = $('#infoWindow');
			Resource.Honor.InfoWindow.init();
			Resource.Honor.View.init();
		},
		
		View: {
			dataGridPanelContainer: '',
			
			init: function() {
				Resource.Honor.View.dataGridPanelContainer = $('#dataGridPanel #dataGrid');
				Resource.Honor.View.DataGrid.init();
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
                                infoButtonContainer: '',
                                exportButtonContainer: '',
				
				init: function() {
					Resource.Honor.View.DataGrid.operatorIdComboboxLabelContainer = $('#dataGridPanel #toolbar #operatorIdComboboxLabel');
					Resource.Honor.View.DataGrid.operatorIdComboboxInputContainer = $('#dataGridPanel #toolbar #operatorIdComboboxInput');
                                        Resource.Honor.View.DataGrid.areaNumCombogridLabelContainer = $('#dataGridPanel #toolbar #areaNumCombogridLabel');
					Resource.Honor.View.DataGrid.areaNumCombogridInputContainer = $('#dataGridPanel #toolbar #areaNumCombogridInput');
                                        Resource.Honor.View.DataGrid.searchStartDateboxLabelContainer = $('#dataGridPanel #toolbar #searchStartDateboxLabel');
					Resource.Honor.View.DataGrid.searchStartDateboxInputContainer = $('#dataGridPanel #toolbar #searchStartDateboxInput');
					Resource.Honor.View.DataGrid.searchEndDateboxLabelContainer = $('#dataGridPanel #toolbar #searchEndDateboxLabel');
					Resource.Honor.View.DataGrid.searchEndDateboxInputContainer = $('#dataGridPanel #toolbar #searchEndDateboxInput');
					Resource.Honor.View.DataGrid.searchButtonContainer = $('#dataGridPanel #toolbar #searchButton');
                                        Resource.Honor.View.DataGrid.infoButtonContainer = $('#dataGridPanel #toolbar #infoButton');
                                        Resource.Honor.View.DataGrid.exportButtonContainer = $('#dataGridPanel #toolbar #exportButton');
					Resource.Honor.View.DataGrid.create();
                                        Resource.Honor.View.DataGrid.showCurrSelectInfo();
				},
				
				create: function() {
					var width = $(document).width() - 40;
					var height = $(document).height() - 40;
					Resource.Honor.View.dataGridPanelContainer.width(width);
					Resource.Honor.View.dataGridPanelContainer.height(height);
					Resource.Honor.View.dataGridPanelContainer.datagrid({
						toolbar: '#toolbar',
						columns: [[
                                                        {
                                                                checkbox: true,
                                                        },
							{
								field: 'date',
								title: resourceGoldViewDataGridColumnTitle1,
								width: 100,
							},
							{
								field: 'days',
								title: resourceBattleViewDataGridColumnTitle2,
								width: 100,
							},
							{
								field: 'ave',
								title: resourceHonorViewDataGridColumnTitle3,
								width: 150,
							},
						]],
						loadFilter: Utils.dataGridLoadFilter,
                                                singleSelect: true,
						pagination: true,
						pageSize: 50,
						pageList: [50, 100, 150, 200],
					});
					Component.Combobox.OperatorId.create(
						Resource.Honor.View.DataGrid.operatorIdComboboxLabelContainer,
						Resource.Honor.View.DataGrid.operatorIdComboboxInputContainer
					);
                                        Component.Combogrid.AreaNum.create(
						Resource.Honor.View.DataGrid.areaNumCombogridLabelContainer,
						Resource.Honor.View.DataGrid.areaNumCombogridInputContainer
					);
                                        Component.Datebox.Start.create(
						Resource.Honor.View.DataGrid.searchStartDateboxLabelContainer,
						Resource.Honor.View.DataGrid.searchStartDateboxInputContainer
					);
                                        Component.Datebox.End.create(
						Resource.Honor.View.DataGrid.searchEndDateboxLabelContainer,
						Resource.Honor.View.DataGrid.searchEndDateboxInputContainer
					);
					Resource.Honor.View.DataGrid.searchButtonContainer.linkbutton({
						iconCls: 'icon-search',
						text: resourceViewDataGridToolbarButtonText1,
					});
					Resource.Honor.View.DataGrid.searchButtonContainer.bind(
						'click',
						Resource.Honor.View.DataGrid.doSearch
					);
                                        Resource.Honor.View.DataGrid.infoButtonContainer.linkbutton({
						iconCls: 'icon-search',
						text: resourceViewDataGridToolbarButtonText2,
					});
					Resource.Honor.View.DataGrid.infoButtonContainer.bind(
						'click',
						Resource.Honor.InfoWindow.open
					);
                                        Resource.Honor.View.DataGrid.exportButtonContainer.linkbutton({
						iconCls: 'icon-search',
						text: exportViewDataGridToolbarButtonText1,
					});
					Resource.Honor.View.DataGrid.exportButtonContainer.bind(
						'click',
						Resource.Honor.View.DataGrid.doExport
					);
				},
				getCheckedRows: function(allowMulti) {
					var allowMulti = arguments[0] ? arguments[0] : false;
					var checkedRow = Resource.Honor.View.dataGridPanelContainer.datagrid('getChecked');
					
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
                                                    Resource.Honor.View.DataGrid.operatorIdComboboxInputContainer.combobox('select',response.data.operatorId);
                                                    Resource.Honor.View.DataGrid.areaNumCombogridInputContainer.combogrid('setValue',response.data.gameAreaId);
                                                    Resource.Honor.View.DataGrid.searchStartDateboxInputContainer.datebox('setValue',response.data.startDate);
                                                    Resource.Honor.View.DataGrid.searchEndDateboxInputContainer.datebox('setValue',response.data.endDate);
                                                }
                                        })
                                }, 
				doSearch: function() {
					Resource.Honor.View.dataGridPanelContainer.datagrid({
						url: '/index.php/Resource/honor/getListData',
						queryParams: {
							operatorId: Resource.Honor.View.DataGrid.operatorIdComboboxInputContainer.combobox('getValue'),
                                                        gameAreaId: Resource.Honor.View.DataGrid.areaNumCombogridInputContainer.combogrid('getValues').toString(),
                                                        searchStartDate: Resource.Honor.View.DataGrid.searchStartDateboxInputContainer.datebox('getValue'),
                                                        searchEndDate : Resource.Honor.View.DataGrid.searchEndDateboxInputContainer.datebox('getValue'),
						}
					});
				},
                                doExport: function() {

                                        var operatorId = Resource.Honor.View.DataGrid.operatorIdComboboxInputContainer.combobox('getValue');
                                        var gameAreaId = Resource.Honor.View.DataGrid.areaNumCombogridInputContainer.combogrid('getValues').toString();
                                        var startDate = Resource.Honor.View.DataGrid.searchStartDateboxInputContainer.datebox('getValue');
                                        var endDate =  Resource.Honor.View.DataGrid.searchEndDateboxInputContainer.datebox('getValue');

                                                  var downUrl = "/index.php/Resource/honor/export?operatorId="+ operatorId +"&gameAreaId="+gameAreaId+"&honortDate="+honortDate+"&endDate="+endDate
                                                  window.location = downUrl;

				},
			},
		},
        InfoWindow: {
			dataGridContainer: '',
			
			init: function() {
				Resource.Honor.InfoWindow.dataGridContainer = $('#infoWindow #dataGrid');
				Resource.Honor.InfoWindow.DataGrid.init();
				Resource.Honor.InfoWindow.create();
			},
			
			DataGrid: {
				init: function() {
					Resource.Honor.InfoWindow.DataGrid.create();
				},
				
				create: function() {
					Resource.Honor.InfoWindow.dataGridContainer.datagrid({
						width: 547,
						height: 392,
						fitColumns: true,
						border: false,
						columns: [[
							{
								field: 'days',
								title: resourceBattleViewDataGridColumnTitle2,
								width: 80,
							},
							{
								field: 'order',
								title: resourceBattleInfoWindowColumnTitle2,
								width: 100,
								
							},
                                                        {
								field: 'cid',
								title: resourceBattleInfoWindowColumnTitle3,
								width: 100,
								
							},
                                                        {
								field: 'name',
								title: resourceBattleInfoWindowColumnTitle4,
								width: 100,
								
							},
                                                        {
								field: 'honor',
								title: resourceLevelInfoWindowColumnTitle5,
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
				Resource.Honor.infoWindowContainer.window({
					width: 600,
					height: 450,
					title: resourceBattleInfoWindowTitle,
					collapsible: false,
					minimizable: false,
					maximizable: false,
					closable: true,
					closed: true,
					modal: true,
				});
			},
			
			open: function() {
				var checkedRow = Resource.Honor.View.DataGrid.getCheckedRows();
				
				if(checkedRow != false) {
					Resource.Honor.InfoWindow.dataGridContainer.datagrid({
						url: '/index.php/Resource/honor/player',
						queryParams: {
                                                        operatorId: Resource.Honor.View.DataGrid.operatorIdComboboxInputContainer.combobox('getValue'),
                                                        gameAreaId: Resource.Honor.View.DataGrid.areaNumCombogridInputContainer.combogrid('getValue'),
							time: checkedRow[0].date,
						}
					})
					Resource.Honor.infoWindowContainer.window('open');
				}
			},
		},
	},
    Wing: {
        infoWindowContainer: '',
                
		init: function() {
			Language.getCurrLanguage();
			Utils.loadJavascriptFile('/application/views/libraries/component/' + language + '.js');
			Utils.loadJavascriptFile('/application/views/libraries/utils/' + language + '.js');
			Utils.loadJavascriptFile('/application/views/module/Resource/' + language + '.js');
			Utils.initAjax();
                        
			Resource.Wing.infoWindowContainer = $('#infoWindow');
			Resource.Wing.InfoWindow.init();
			Resource.Wing.View.init();
		},
		
		View: {
			dataGridPanelContainer: '',
			
			init: function() {
				Resource.Wing.View.dataGridPanelContainer = $('#dataGridPanel #dataGrid');
				Resource.Wing.View.DataGrid.init();
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
                                infoButtonContainer: '',
                                exportButtonContainer: '',
				
				init: function() {
					Resource.Wing.View.DataGrid.operatorIdComboboxLabelContainer = $('#dataGridPanel #toolbar #operatorIdComboboxLabel');
					Resource.Wing.View.DataGrid.operatorIdComboboxInputContainer = $('#dataGridPanel #toolbar #operatorIdComboboxInput');
                                        Resource.Wing.View.DataGrid.areaNumCombogridLabelContainer = $('#dataGridPanel #toolbar #areaNumCombogridLabel');
					Resource.Wing.View.DataGrid.areaNumCombogridInputContainer = $('#dataGridPanel #toolbar #areaNumCombogridInput');
                                        Resource.Wing.View.DataGrid.searchStartDateboxLabelContainer = $('#dataGridPanel #toolbar #searchStartDateboxLabel');
					Resource.Wing.View.DataGrid.searchStartDateboxInputContainer = $('#dataGridPanel #toolbar #searchStartDateboxInput');
					Resource.Wing.View.DataGrid.searchEndDateboxLabelContainer = $('#dataGridPanel #toolbar #searchEndDateboxLabel');
					Resource.Wing.View.DataGrid.searchEndDateboxInputContainer = $('#dataGridPanel #toolbar #searchEndDateboxInput');
					Resource.Wing.View.DataGrid.searchButtonContainer = $('#dataGridPanel #toolbar #searchButton');
                                        Resource.Wing.View.DataGrid.infoButtonContainer = $('#dataGridPanel #toolbar #infoButton');
                                        Resource.Wing.View.DataGrid.exportButtonContainer = $('#dataGridPanel #toolbar #exportButton');
					Resource.Wing.View.DataGrid.create();
                                        Resource.Wing.View.DataGrid.showCurrSelectInfo();
				},
				
				create: function() {
					var width = $(document).width() - 40;
					var height = $(document).height() - 40;
					Resource.Wing.View.dataGridPanelContainer.width(width);
					Resource.Wing.View.dataGridPanelContainer.height(height);
					Resource.Wing.View.dataGridPanelContainer.datagrid({
						toolbar: '#toolbar',
						columns: [[
                                                        {
                                                                checkbox: true,
                                                        },
							{
								field: 'date',
								title: resourceGoldViewDataGridColumnTitle1,
								width: 100,
							},
							{
								field: 'days',
								title: resourceBattleViewDataGridColumnTitle2,
								width: 100,
							},
							{
								field: 'ave',
								title: resourceWingViewDataGridColumnTitle3,
								width: 150,
							},
						]],
						loadFilter: Utils.dataGridLoadFilter,
                                                singleSelect: true,
						pagination: true,
						pageSize: 50,
						pageList: [50, 100, 150, 200],
					});
					Component.Combobox.OperatorId.create(
						Resource.Wing.View.DataGrid.operatorIdComboboxLabelContainer,
						Resource.Wing.View.DataGrid.operatorIdComboboxInputContainer
					);
                                        Component.Combogrid.AreaNum.create(
						Resource.Wing.View.DataGrid.areaNumCombogridLabelContainer,
						Resource.Wing.View.DataGrid.areaNumCombogridInputContainer
					);
                                        Component.Datebox.Start.create(
						Resource.Wing.View.DataGrid.searchStartDateboxLabelContainer,
						Resource.Wing.View.DataGrid.searchStartDateboxInputContainer
					);
                                        Component.Datebox.End.create(
						Resource.Wing.View.DataGrid.searchEndDateboxLabelContainer,
						Resource.Wing.View.DataGrid.searchEndDateboxInputContainer
					);
					Resource.Wing.View.DataGrid.searchButtonContainer.linkbutton({
						iconCls: 'icon-search',
						text: resourceViewDataGridToolbarButtonText1,
					});
					Resource.Wing.View.DataGrid.searchButtonContainer.bind(
						'click',
						Resource.Wing.View.DataGrid.doSearch
					);
                                        Resource.Wing.View.DataGrid.infoButtonContainer.linkbutton({
						iconCls: 'icon-search',
						text: resourceViewDataGridToolbarButtonText2,
					});
					Resource.Wing.View.DataGrid.infoButtonContainer.bind(
						'click',
						Resource.Wing.InfoWindow.open
					);
                                        Resource.Wing.View.DataGrid.exportButtonContainer.linkbutton({
						iconCls: 'icon-search',
						text: exportViewDataGridToolbarButtonText1,
					});
					Resource.Wing.View.DataGrid.exportButtonContainer.bind(
						'click',
						Resource.Wing.View.DataGrid.doExport
					);
				},
				getCheckedRows: function(allowMulti) {
					var allowMulti = arguments[0] ? arguments[0] : false;
					var checkedRow = Resource.Wing.View.dataGridPanelContainer.datagrid('getChecked');
					
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
                                                    Resource.Wing.View.DataGrid.operatorIdComboboxInputContainer.combobox('select',response.data.operatorId);
                                                    Resource.Wing.View.DataGrid.areaNumCombogridInputContainer.combogrid('setValue',response.data.gameAreaId);
                                                    Resource.Wing.View.DataGrid.searchStartDateboxInputContainer.datebox('setValue',response.data.startDate);
                                                    Resource.Wing.View.DataGrid.searchEndDateboxInputContainer.datebox('setValue',response.data.endDate);
                                                }
                                        })
                                }, 
				doSearch: function() {
					Resource.Wing.View.dataGridPanelContainer.datagrid({
						url: '/index.php/Resource/wing/getListData',
						queryParams: {
							operatorId: Resource.Wing.View.DataGrid.operatorIdComboboxInputContainer.combobox('getValue'),
                                                        gameAreaId: Resource.Wing.View.DataGrid.areaNumCombogridInputContainer.combogrid('getValues').toString(),
                                                        searchStartDate: Resource.Wing.View.DataGrid.searchStartDateboxInputContainer.datebox('getValue'),
                                                        searchEndDate : Resource.Wing.View.DataGrid.searchEndDateboxInputContainer.datebox('getValue'),
						}
					});
				},
                                doExport: function() {
                                        var operatorId = Resource.Wing.View.DataGrid.operatorIdComboboxInputContainer.combobox('getValue');
                                        var gameAreaId = Resource.Wing.View.DataGrid.areaNumCombogridInputContainer.combogrid('getValues').toString();
                                        var startDate = Resource.Wing.View.DataGrid.searchStartDateboxInputContainer.datebox('getValue');
                                        var endDate =  Resource.Wing.View.DataGrid.searchEndDateboxInputContainer.datebox('getValue');

                                                  var downUrl = "/index.php/Resource/wing/export?operatorId="+ operatorId +"&gameAreaId="+gameAreaId+"&wingtDate="+wingtDate+"&endDate="+endDate
                                                  window.location = downUrl;

				},
			},
		},
        InfoWindow: {
			dataGridContainer: '',
			
			init: function() {
				Resource.Wing.InfoWindow.dataGridContainer = $('#infoWindow #dataGrid');
				Resource.Wing.InfoWindow.DataGrid.init();
				Resource.Wing.InfoWindow.create();
			},
			
			DataGrid: {
				init: function() {
					Resource.Wing.InfoWindow.DataGrid.create();
				},
				
				create: function() {
					Resource.Wing.InfoWindow.dataGridContainer.datagrid({
						width: 547,
						height: 392,
						fitColumns: true,
						border: false,
						columns: [[
							{
								field: 'days',
								title: resourceBattleViewDataGridColumnTitle2,
								width: 80,
							},
							{
								field: 'order',
								title: resourceBattleInfoWindowColumnTitle2,
								width: 100,
								
							},
                                                        {
								field: 'cid',
								title: resourceBattleInfoWindowColumnTitle3,
								width: 100,
								
							},
                                                        {
								field: 'name',
								title: resourceBattleInfoWindowColumnTitle4,
								width: 100,
								
							},
                                                        {
								field: 'wing',
								title: resourceLevelInfoWindowColumnTitle5,
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
				Resource.Wing.infoWindowContainer.window({
					width: 600,
					height: 450,
					title: resourceBattleInfoWindowTitle,
					collapsible: false,
					minimizable: false,
					maximizable: false,
					closable: true,
					closed: true,
					modal: true,
				});
			},
			
			open: function() {
				var checkedRow = Resource.Wing.View.DataGrid.getCheckedRows();
				
				if(checkedRow != false) {
					Resource.Wing.InfoWindow.dataGridContainer.datagrid({
						url: '/index.php/Resource/wing/player',
						queryParams: {
                                                        operatorId: Resource.Wing.View.DataGrid.operatorIdComboboxInputContainer.combobox('getValue'),
                                                        gameAreaId: Resource.Wing.View.DataGrid.areaNumCombogridInputContainer.combogrid('getValue'),
							time: checkedRow[0].date,
						}
					})
					Resource.Wing.infoWindowContainer.window('open');
				}
			},
		},
	},
    PosLevel: {
        infoWindowContainer: '',
                
		init: function() {
			Language.getCurrLanguage();
			Utils.loadJavascriptFile('/application/views/libraries/component/' + language + '.js');
			Utils.loadJavascriptFile('/application/views/libraries/utils/' + language + '.js');
			Utils.loadJavascriptFile('/application/views/module/Resource/' + language + '.js');
			Utils.initAjax();
                        
			Resource.PosLevel.infoWindowContainer = $('#infoWindow');
			Resource.PosLevel.InfoWindow.init();
			Resource.PosLevel.View.init();
		},
		
		View: {
			dataGridPanelContainer: '',
			
			init: function() {
				Resource.PosLevel.View.dataGridPanelContainer = $('#dataGridPanel #dataGrid');
				Resource.PosLevel.View.DataGrid.init();
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
                                infoButtonContainer: '',
                                exportButtonContainer: '',
				
				init: function() {
					Resource.PosLevel.View.DataGrid.operatorIdComboboxLabelContainer = $('#dataGridPanel #toolbar #operatorIdComboboxLabel');
					Resource.PosLevel.View.DataGrid.operatorIdComboboxInputContainer = $('#dataGridPanel #toolbar #operatorIdComboboxInput');
                                        Resource.PosLevel.View.DataGrid.areaNumCombogridLabelContainer = $('#dataGridPanel #toolbar #areaNumCombogridLabel');
					Resource.PosLevel.View.DataGrid.areaNumCombogridInputContainer = $('#dataGridPanel #toolbar #areaNumCombogridInput');
                                        Resource.PosLevel.View.DataGrid.searchStartDateboxLabelContainer = $('#dataGridPanel #toolbar #searchStartDateboxLabel');
					Resource.PosLevel.View.DataGrid.searchStartDateboxInputContainer = $('#dataGridPanel #toolbar #searchStartDateboxInput');
					Resource.PosLevel.View.DataGrid.searchEndDateboxLabelContainer = $('#dataGridPanel #toolbar #searchEndDateboxLabel');
					Resource.PosLevel.View.DataGrid.searchEndDateboxInputContainer = $('#dataGridPanel #toolbar #searchEndDateboxInput');
					Resource.PosLevel.View.DataGrid.searchButtonContainer = $('#dataGridPanel #toolbar #searchButton');
                                        Resource.PosLevel.View.DataGrid.infoButtonContainer = $('#dataGridPanel #toolbar #infoButton');
                                        Resource.PosLevel.View.DataGrid.exportButtonContainer = $('#dataGridPanel #toolbar #exportButton');
					Resource.PosLevel.View.DataGrid.create();
                                        Resource.PosLevel.View.DataGrid.showCurrSelectInfo();
				},
				
				create: function() {
					var width = $(document).width() - 40;
					var height = $(document).height() - 40;
					Resource.PosLevel.View.dataGridPanelContainer.width(width);
					Resource.PosLevel.View.dataGridPanelContainer.height(height);
					Resource.PosLevel.View.dataGridPanelContainer.datagrid({
						toolbar: '#toolbar',
						columns: [[
                                                        {
                                                                checkbox: true,
                                                        },
							{
								field: 'date',
								title: resourceGoldViewDataGridColumnTitle1,
								width: 100,
							},
							{
								field: 'days',
								title: resourceBattleViewDataGridColumnTitle2,
								width: 100,
							},
							{
								field: 'ave',
								title: resourcePosLevelViewDataGridColumnTitle3,
								width: 150,
							},
						]],
						loadFilter: Utils.dataGridLoadFilter,
                                                singleSelect: true,
						pagination: true,
						pageSize: 50,
						pageList: [50, 100, 150, 200],
					});
					Component.Combobox.OperatorId.create(
						Resource.PosLevel.View.DataGrid.operatorIdComboboxLabelContainer,
						Resource.PosLevel.View.DataGrid.operatorIdComboboxInputContainer
					);
                                        Component.Combogrid.AreaNum.create(
						Resource.PosLevel.View.DataGrid.areaNumCombogridLabelContainer,
						Resource.PosLevel.View.DataGrid.areaNumCombogridInputContainer
					);
                                        Component.Datebox.Start.create(
						Resource.PosLevel.View.DataGrid.searchStartDateboxLabelContainer,
						Resource.PosLevel.View.DataGrid.searchStartDateboxInputContainer
					);
                                        Component.Datebox.End.create(
						Resource.PosLevel.View.DataGrid.searchEndDateboxLabelContainer,
						Resource.PosLevel.View.DataGrid.searchEndDateboxInputContainer
					);
					Resource.PosLevel.View.DataGrid.searchButtonContainer.linkbutton({
						iconCls: 'icon-search',
						text: resourceViewDataGridToolbarButtonText1,
					});
					Resource.PosLevel.View.DataGrid.searchButtonContainer.bind(
						'click',
						Resource.PosLevel.View.DataGrid.doSearch
					);
                                        Resource.PosLevel.View.DataGrid.infoButtonContainer.linkbutton({
						iconCls: 'icon-search',
						text: resourceViewDataGridToolbarButtonText2,
					});
					Resource.PosLevel.View.DataGrid.infoButtonContainer.bind(
						'click',
						Resource.PosLevel.InfoWindow.open
					);
                                        Resource.PosLevel.View.DataGrid.exportButtonContainer.linkbutton({
						iconCls: 'icon-search',
						text: exportViewDataGridToolbarButtonText1,
					});
					Resource.PosLevel.View.DataGrid.exportButtonContainer.bind(
						'click',
						Resource.PosLevel.View.DataGrid.doExport
					);
				},
				getCheckedRows: function(allowMulti) {
					var allowMulti = arguments[0] ? arguments[0] : false;
					var checkedRow = Resource.PosLevel.View.dataGridPanelContainer.datagrid('getChecked');
					
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
                                                    Resource.PosLevel.View.DataGrid.operatorIdComboboxInputContainer.combobox('select',response.data.operatorId);
                                                    Resource.PosLevel.View.DataGrid.areaNumCombogridInputContainer.combogrid('setValue',response.data.gameAreaId);
                                                    Resource.PosLevel.View.DataGrid.searchStartDateboxInputContainer.datebox('setValue',response.data.startDate);
                                                    Resource.PosLevel.View.DataGrid.searchEndDateboxInputContainer.datebox('setValue',response.data.endDate);
                                                }
                                        })
                                }, 
				doSearch: function() {
					Resource.PosLevel.View.dataGridPanelContainer.datagrid({
						url: '/index.php/Resource/posLevel/getListData',
						queryParams: {
							operatorId: Resource.PosLevel.View.DataGrid.operatorIdComboboxInputContainer.combobox('getValue'),
                                                        gameAreaId: Resource.PosLevel.View.DataGrid.areaNumCombogridInputContainer.combogrid('getValues').toString(),
                                                        searchStartDate: Resource.PosLevel.View.DataGrid.searchStartDateboxInputContainer.datebox('getValue'),
                                                        searchEndDate : Resource.PosLevel.View.DataGrid.searchEndDateboxInputContainer.datebox('getValue'),
						}
					});
				},
                                doExport: function() {

                                        var operatorId = Resource.PosLevel.View.DataGrid.operatorIdComboboxInputContainer.combobox('getValue');
                                        var gameAreaId = Resource.PosLevel.View.DataGrid.areaNumCombogridInputContainer.combogrid('getValues').toString();
                                        var startDate = Resource.PosLevel.View.DataGrid.searchStartDateboxInputContainer.datebox('getValue');
                                        var endDate =  Resource.PosLevel.View.DataGrid.searchEndDateboxInputContainer.datebox('getValue');

                                                  var downUrl = "/index.php/Resource/posLevel/export?operatorId="+ operatorId +"&gameAreaId="+gameAreaId+"&posLeveltDate="+posLeveltDate+"&endDate="+endDate
                                                  window.location = downUrl;

				},
			},
		},
                InfoWindow: {
			dataGridContainer: '',
			
			init: function() {
				Resource.PosLevel.InfoWindow.dataGridContainer = $('#infoWindow #dataGrid');
				Resource.PosLevel.InfoWindow.DataGrid.init();
				Resource.PosLevel.InfoWindow.create();
			},
			
			DataGrid: {
				init: function() {
					Resource.PosLevel.InfoWindow.DataGrid.create();
				},
				
				create: function() {
					Resource.PosLevel.InfoWindow.dataGridContainer.datagrid({
						width: 547,
						height: 392,
						fitColumns: true,
						border: false,
						columns: [[
							{
								field: 'days',
								title: resourceBattleViewDataGridColumnTitle2,
								width: 80,
							},
							{
								field: 'order',
								title: resourceBattleInfoWindowColumnTitle2,
								width: 100,
								
							},
                                                        {
								field: 'cid',
								title: resourceBattleInfoWindowColumnTitle3,
								width: 100,
								
							},
                                                        {
								field: 'name',
								title: resourceBattleInfoWindowColumnTitle4,
								width: 100,
								
							},
                                                        {
								field: 'posLevel',
								title: resourceLevelInfoWindowColumnTitle5,
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
				Resource.PosLevel.infoWindowContainer.window({
					width: 600,
					height: 450,
					title: resourceBattleInfoWindowTitle,
					collapsible: false,
					minimizable: false,
					maximizable: false,
					closable: true,
					closed: true,
					modal: true,
				});
			},
			
			open: function() {
				var checkedRow = Resource.PosLevel.View.DataGrid.getCheckedRows();
				
				if(checkedRow != false) {
					Resource.PosLevel.InfoWindow.dataGridContainer.datagrid({
						url: '/index.php/Resource/posLevel/player',
						queryParams: {
                                                        operatorId: Resource.PosLevel.View.DataGrid.operatorIdComboboxInputContainer.combobox('getValue'),
                                                        gameAreaId: Resource.PosLevel.View.DataGrid.areaNumCombogridInputContainer.combogrid('getValue'),
							time: checkedRow[0].date,
						}
					})
					Resource.PosLevel.infoWindowContainer.window('open');
				}
			},
		},
	},
	Soul: {
		init: function() {
			Language.getCurrLanguage();
			Utils.loadJavascriptFile('/application/views/libraries/component/' + language + '.js');
			Utils.loadJavascriptFile('/application/views/libraries/utils/' + language + '.js');
			Utils.loadJavascriptFile('/application/views/module/Resource/' + language + '.js');
			Utils.initAjax();
			
			Resource.Soul.View.init(); 
		},



		
		View: {
			dataGridPanelContainer: '',
			
			init: function() {
				Resource.Soul.View.dataGridPanelContainer = $('#dataGridPanel #dataGrid');
				Resource.Soul.View.DataGrid.init();
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
					Resource.Soul.View.DataGrid.operatorIdComboboxLabelContainer = $('#dataGridPanel #toolbar #operatorIdComboboxLabel');
					Resource.Soul.View.DataGrid.operatorIdComboboxInputContainer = $('#dataGridPanel #toolbar #operatorIdComboboxInput');
                    Resource.Soul.View.DataGrid.areaNumCombogridLabelContainer = $('#dataGridPanel #toolbar #areaNumCombogridLabel');
					Resource.Soul.View.DataGrid.areaNumCombogridInputContainer = $('#dataGridPanel #toolbar #areaNumCombogridInput');
                    Resource.Soul.View.DataGrid.searchStartDateboxLabelContainer = $('#dataGridPanel #toolbar #searchStartDateboxLabel');
					Resource.Soul.View.DataGrid.searchStartDateboxInputContainer = $('#dataGridPanel #toolbar #searchStartDateboxInput');
					Resource.Soul.View.DataGrid.searchEndDateboxLabelContainer = $('#dataGridPanel #toolbar #searchEndDateboxLabel');
					Resource.Soul.View.DataGrid.searchEndDateboxInputContainer = $('#dataGridPanel #toolbar #searchEndDateboxInput');
					Resource.Soul.View.DataGrid.searchButtonContainer = $('#dataGridPanel #toolbar #searchButton');
                    Resource.Soul.View.DataGrid.exportButtonContainer = $('#dataGridPanel #toolbar #exportButton');
					Resource.Soul.View.DataGrid.create();
                    Resource.Soul.View.DataGrid.showCurrSelectInfo();
				},
				
				create: function() {
					var width = $(document).width() - 40;
					var height = $(document).height() - 40;
					Resource.Soul.View.dataGridPanelContainer.width(width);
					Resource.Soul.View.dataGridPanelContainer.height(height);
					Resource.Soul.View.dataGridPanelContainer.datagrid({
						toolbar: '#toolbar',
						columns: [[
							{
								field: 'date',
								title: statisticsPrivilegeViewDataGridColumnTitle1,
								width: 100,
							},
							{
								field: 'roleNum',
								title: statisticsKingViewDataGridColumnTitle1,
								width: 100,
							},
							{
								field: 'time', 
								title: statisticsKingViewDataGridColumnTitle2,
								width: 100,
							},
                            {
								field: 'amount',
								title: statisticsKingViewDataGridColumnTitle3,
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
						Resource.Soul.View.DataGrid.operatorIdComboboxLabelContainer,
						Resource.Soul.View.DataGrid.operatorIdComboboxInputContainer
					);
                    Component.Combogrid.AreaNum.create(
						Resource.Soul.View.DataGrid.areaNumCombogridLabelContainer,
						Resource.Soul.View.DataGrid.areaNumCombogridInputContainer
					);
					Component.Datebox.Start.create(
						Resource.Soul.View.DataGrid.searchStartDateboxLabelContainer,
						Resource.Soul.View.DataGrid.searchStartDateboxInputContainer
					);
                    Component.Datebox.End.create(
						Resource.Soul.View.DataGrid.searchEndDateboxLabelContainer,
						Resource.Soul.View.DataGrid.searchEndDateboxInputContainer
					);

					Resource.Soul.View.DataGrid.searchButtonContainer.linkbutton({
						iconCls: 'icon-search',
						text: resourceViewDataGridToolbarButtonText1,
					});
					Resource.Soul.View.DataGrid.searchButtonContainer.bind(
						'click',
						Resource.Soul.View.DataGrid.doSearch
					);
                    Resource.Soul.View.DataGrid.exportButtonContainer.linkbutton({
						iconCls: 'icon-search',
						text: exportViewDataGridToolbarButtonText1,
					});
					Resource.Soul.View.DataGrid.exportButtonContainer.bind(
						'click',
						Resource.Soul.View.DataGrid.doExport
					);

				},
				
				doSearch: function() {
                    var operatorId = Resource.Soul.View.DataGrid.operatorIdComboboxInputContainer.combobox('getValue');
                    var gameAreaId = Resource.Soul.View.DataGrid.areaNumCombogridInputContainer.combogrid('getValue');
					var searchStartDate = Resource.Soul.View.DataGrid.searchStartDateboxInputContainer.datebox('getValue');
                    var searchEndDate = Resource.Soul.View.DataGrid.searchEndDateboxInputContainer.datebox('getValue');
					
					Resource.Soul.View.dataGridPanelContainer.datagrid({
						url: '/index.php/Resource/soul/getListData',
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
                                    Resource.Soul.View.DataGrid.operatorIdComboboxInputContainer.combobox('select',response.data.operatorId);
                                    Resource.Soul.View.DataGrid.areaNumCombogridInputContainer.combogrid('setValue',response.data.gameAreaId);
                                    Resource.Soul.View.DataGrid.searchStartDateboxInputContainer.datebox('setValue',response.data.startDate);
                                    Resource.Soul.View.DataGrid.searchEndDateboxInputContainer.datebox('setValue',response.data.endDate);
                                }
                        })
                }, 
                doExport: function() {

                        var operatorId = Resource.Soul.View.DataGrid.operatorIdComboboxInputContainer.combobox('getValue');
                        var gameAreaId = Resource.Soul.View.DataGrid.areaNumCombogridInputContainer.combogrid('getValues').toString();
                        var startDate = Resource.Soul.View.DataGrid.searchStartDateboxInputContainer.datebox('getValue');
                        var endDate =  Resource.Soul.View.DataGrid.searchEndDateboxInputContainer.datebox('getValue');

                                  var downUrl = "/index.php/Resource/soul/export?operatorId="+ operatorId +"&gameAreaId="+gameAreaId+"&startDate="+startDate+"&endDate="+endDate
                                  window.location = downUrl;

				},

			},
		}, 
	},
}