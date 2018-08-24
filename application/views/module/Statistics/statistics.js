var Statistics = {
	Privilege: {
		init: function() {
			Language.getCurrLanguage();
			Utils.loadJavascriptFile('/application/views/libraries/component/' + language + '.js');
			Utils.loadJavascriptFile('/application/views/libraries/utils/' + language + '.js');
			Utils.loadJavascriptFile('/application/views/module/Statistics/' + language + '.js');
			Utils.initAjax();
			
			Statistics.Privilege.View.init();
		},
		
		View: {
			dataGridPanelContainer: '',
			
			init: function() {
				Statistics.Privilege.View.dataGridPanelContainer = $('#dataGridPanel #dataGrid');
				Statistics.Privilege.View.DataGrid.init();
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
					Statistics.Privilege.View.DataGrid.operatorIdComboboxLabelContainer = $('#dataGridPanel #toolbar #operatorIdComboboxLabel');
					Statistics.Privilege.View.DataGrid.operatorIdComboboxInputContainer = $('#dataGridPanel #toolbar #operatorIdComboboxInput');
                                        Statistics.Privilege.View.DataGrid.areaNumCombogridLabelContainer = $('#dataGridPanel #toolbar #areaNumCombogridLabel');
					Statistics.Privilege.View.DataGrid.areaNumCombogridInputContainer = $('#dataGridPanel #toolbar #areaNumCombogridInput');
                                        Statistics.Privilege.View.DataGrid.searchStartDateboxLabelContainer = $('#dataGridPanel #toolbar #searchStartDateboxLabel');
					Statistics.Privilege.View.DataGrid.searchStartDateboxInputContainer = $('#dataGridPanel #toolbar #searchStartDateboxInput');
					Statistics.Privilege.View.DataGrid.searchEndDateboxLabelContainer = $('#dataGridPanel #toolbar #searchEndDateboxLabel');
					Statistics.Privilege.View.DataGrid.searchEndDateboxInputContainer = $('#dataGridPanel #toolbar #searchEndDateboxInput');
					Statistics.Privilege.View.DataGrid.searchButtonContainer = $('#dataGridPanel #toolbar #searchButton');
                                        Statistics.Privilege.View.DataGrid.exportButtonContainer = $('#dataGridPanel #toolbar #exportButton');
					Statistics.Privilege.View.DataGrid.create();
                                        Statistics.Privilege.View.DataGrid.showCurrSelectInfo();
				},
				
				create: function() {
					var width = $(document).width() - 40;
					var height = $(document).height() - 40;
					Statistics.Privilege.View.dataGridPanelContainer.width(width);
					Statistics.Privilege.View.dataGridPanelContainer.height(height);
					Statistics.Privilege.View.dataGridPanelContainer.datagrid({
						toolbar: '#toolbar',
						columns: [[
							{
								field: 'date',
								title: statisticsPrivilegeViewDataGridColumnTitle1,
								width: 100,
							},
							{
								field: 'platinum',
								title: statisticsPrivilegeViewDataGridColumnTitle2,
								width: 100,
							},
							{
								field: 'diamond',
								title: statisticsPrivilegeViewDataGridColumnTitle3,
								width: 100,
							},
                                                        {
								field: 'star',
								title: statisticsPrivilegeViewDataGridColumnTitle4,
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
						Statistics.Privilege.View.DataGrid.operatorIdComboboxLabelContainer,
						Statistics.Privilege.View.DataGrid.operatorIdComboboxInputContainer
					);
                                        Component.Combogrid.AreaNum.create(
						Statistics.Privilege.View.DataGrid.areaNumCombogridLabelContainer,
						Statistics.Privilege.View.DataGrid.areaNumCombogridInputContainer
					);
					Component.Datebox.Start.create(
						Statistics.Privilege.View.DataGrid.searchStartDateboxLabelContainer,
						Statistics.Privilege.View.DataGrid.searchStartDateboxInputContainer
					);
                                        Component.Datebox.End.create(
						Statistics.Privilege.View.DataGrid.searchEndDateboxLabelContainer,
						Statistics.Privilege.View.DataGrid.searchEndDateboxInputContainer
					);
					Statistics.Privilege.View.DataGrid.searchButtonContainer.linkbutton({
						iconCls: 'icon-search',
						text: statisticsPrivilegeViewDataGridToolbarButtonText1,
					});
					Statistics.Privilege.View.DataGrid.searchButtonContainer.bind(
						'click',
						Statistics.Privilege.View.DataGrid.doSearch
					);
                                        Statistics.Privilege.View.DataGrid.exportButtonContainer.linkbutton({
						iconCls: 'icon-search',
						text: exportViewDataGridToolbarButtonText1,
					});
					Statistics.Privilege.View.DataGrid.exportButtonContainer.bind(
						'click',
						Statistics.Privilege.View.DataGrid.doExport
					);
				},
				
				doSearch: function() {
                                        var operatorId = Statistics.Privilege.View.DataGrid.operatorIdComboboxInputContainer.combobox('getValue');
                                        var gameAreaId = Statistics.Privilege.View.DataGrid.areaNumCombogridInputContainer.combogrid('getValue');
					var searchStartDate = Statistics.Privilege.View.DataGrid.searchStartDateboxInputContainer.datebox('getValue');
                                        var searchEndDate = Statistics.Privilege.View.DataGrid.searchEndDateboxInputContainer.datebox('getValue');
					
					Statistics.Privilege.View.dataGridPanelContainer.datagrid({
						url: '/index.php/Statistics/privilege/getListData',
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
                                                    Statistics.Privilege.View.DataGrid.operatorIdComboboxInputContainer.combobox('select',response.data.operatorId);
                                                    Statistics.Privilege.View.DataGrid.areaNumCombogridInputContainer.combogrid('setValue',response.data.gameAreaId);
                                                    Statistics.Privilege.View.DataGrid.searchStartDateboxInputContainer.datebox('setValue',response.data.startDate);
                                                    Statistics.Privilege.View.DataGrid.searchEndDateboxInputContainer.datebox('setValue',response.data.endDate);
                                                }
                                        })
                                }, 
                                doExport: function() {

                                        var operatorId = Statistics.Privilege.View.DataGrid.operatorIdComboboxInputContainer.combobox('getValue');
                                        var gameAreaId = Statistics.Privilege.View.DataGrid.areaNumCombogridInputContainer.combogrid('getValues').toString();
                                        var startDate = Statistics.Privilege.View.DataGrid.searchStartDateboxInputContainer.datebox('getValue');
                                        var endDate =  Statistics.Privilege.View.DataGrid.searchEndDateboxInputContainer.datebox('getValue');

                                                  var downUrl = "/index.php/Statistics/privilege/export?operatorId="+ operatorId +"&gameAreaId="+gameAreaId+"&startDate="+startDate+"&endDate="+endDate
                                                  window.location = downUrl;

				},

			},
		},
	},
    Artifact: {
		init: function() {
			Language.getCurrLanguage();
			Utils.loadJavascriptFile('/application/views/libraries/component/' + language + '.js');
			Utils.loadJavascriptFile('/application/views/libraries/utils/' + language + '.js');
			Utils.loadJavascriptFile('/application/views/module/Statistics/' + language + '.js');
			Utils.initAjax();
			
			Statistics.Artifact.View.init();
		},
		
		View: {
			dataGridPanelContainer: '',
			
			init: function() {
				Statistics.Artifact.View.dataGridPanelContainer = $('#dataGridPanel #dataGrid');
				Statistics.Artifact.View.DataGrid.init();
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
					Statistics.Artifact.View.DataGrid.operatorIdComboboxLabelContainer = $('#dataGridPanel #toolbar #operatorIdComboboxLabel');
					Statistics.Artifact.View.DataGrid.operatorIdComboboxInputContainer = $('#dataGridPanel #toolbar #operatorIdComboboxInput');
                                        Statistics.Artifact.View.DataGrid.areaNumCombogridLabelContainer = $('#dataGridPanel #toolbar #areaNumCombogridLabel');
					Statistics.Artifact.View.DataGrid.areaNumCombogridInputContainer = $('#dataGridPanel #toolbar #areaNumCombogridInput');
                                        Statistics.Artifact.View.DataGrid.searchStartDateboxLabelContainer = $('#dataGridPanel #toolbar #searchStartDateboxLabel');
					Statistics.Artifact.View.DataGrid.searchStartDateboxInputContainer = $('#dataGridPanel #toolbar #searchStartDateboxInput');
					Statistics.Artifact.View.DataGrid.searchEndDateboxLabelContainer = $('#dataGridPanel #toolbar #searchEndDateboxLabel');
					Statistics.Artifact.View.DataGrid.searchEndDateboxInputContainer = $('#dataGridPanel #toolbar #searchEndDateboxInput');
					Statistics.Artifact.View.DataGrid.searchButtonContainer = $('#dataGridPanel #toolbar #searchButton');
                                        Statistics.Artifact.View.DataGrid.exportButtonContainer = $('#dataGridPanel #toolbar #exportButton');
					Statistics.Artifact.View.DataGrid.create();
                                        Statistics.Artifact.View.DataGrid.showCurrSelectInfo();
				},
				
				create: function() {
					var width = $(document).width() - 40;
					var height = $(document).height() - 40;
					Statistics.Artifact.View.dataGridPanelContainer.width(width);
					Statistics.Artifact.View.dataGridPanelContainer.height(height);
					Statistics.Artifact.View.dataGridPanelContainer.datagrid({
						toolbar: '#toolbar',
						columns: [[
							{
								field: 'date',
								title: statisticsPrivilegeViewDataGridColumnTitle1,
								width: 100,
							},
							{
								field: 'god',
								title: statisticsArtifactViewDataGridColumnTitle2,
								width: 100,
							},
							{
								field: 'Acer',
								title: statisticsArtifactViewDataGridColumnTitle3,
								width: 100,
							},
                                                        {
								field: 'Handong',
								title: statisticsArtifactViewDataGridColumnTitle4,
								width: 100,
							},
                                                        {
								field: 'takeru',
								title: statisticsArtifactViewDataGridColumnTitle5,
								width: 100,
							},
							{
								field: 'demonPot',
								title: statisticsArtifactViewDataGridColumnTitle6,
								width: 100,
							},
                                                        {
								field: 'sword',
								title: statisticsArtifactViewDataGridColumnTitle7,
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
						Statistics.Artifact.View.DataGrid.operatorIdComboboxLabelContainer,
						Statistics.Artifact.View.DataGrid.operatorIdComboboxInputContainer
					);
                                        Component.Combogrid.AreaNum.create(
						Statistics.Artifact.View.DataGrid.areaNumCombogridLabelContainer,
						Statistics.Artifact.View.DataGrid.areaNumCombogridInputContainer
					);
					Component.Datebox.Start.create(
						Statistics.Artifact.View.DataGrid.searchStartDateboxLabelContainer,
						Statistics.Artifact.View.DataGrid.searchStartDateboxInputContainer
					);
                                        Component.Datebox.End.create(
						Statistics.Artifact.View.DataGrid.searchEndDateboxLabelContainer,
						Statistics.Artifact.View.DataGrid.searchEndDateboxInputContainer
					);
					Statistics.Artifact.View.DataGrid.searchButtonContainer.linkbutton({
						iconCls: 'icon-search',
						text: statisticsPrivilegeViewDataGridToolbarButtonText1,
					});
					Statistics.Artifact.View.DataGrid.searchButtonContainer.bind(
						'click',
						Statistics.Artifact.View.DataGrid.doSearch
					);
                                        Statistics.Artifact.View.DataGrid.exportButtonContainer.linkbutton({
						iconCls: 'icon-search',
						text: exportViewDataGridToolbarButtonText1,
					});
					Statistics.Artifact.View.DataGrid.exportButtonContainer.bind(
						'click',
						Statistics.Artifact.View.DataGrid.doExport
					);
				},
				
				doSearch: function() {
                                        var operatorId = Statistics.Artifact.View.DataGrid.operatorIdComboboxInputContainer.combobox('getValue');
                                        var gameAreaId = Statistics.Artifact.View.DataGrid.areaNumCombogridInputContainer.combogrid('getValue');
					var searchStartDate = Statistics.Artifact.View.DataGrid.searchStartDateboxInputContainer.datebox('getValue');
                                        var searchEndDate = Statistics.Artifact.View.DataGrid.searchEndDateboxInputContainer.datebox('getValue');
					
					Statistics.Artifact.View.dataGridPanelContainer.datagrid({
						url: '/index.php/Statistics/artifact/getListData',
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
                                                    Statistics.Artifact.View.DataGrid.operatorIdComboboxInputContainer.combobox('select',response.data.operatorId);
                                                    Statistics.Artifact.View.DataGrid.areaNumCombogridInputContainer.combogrid('setValue',response.data.gameAreaId);
                                                    Statistics.Artifact.View.DataGrid.searchStartDateboxInputContainer.datebox('setValue',response.data.startDate);
                                                    Statistics.Artifact.View.DataGrid.searchEndDateboxInputContainer.datebox('setValue',response.data.endDate);
                                                }
                                        })
                                }, 
                                doExport: function() {

                                        var operatorId = Statistics.Artifact.View.DataGrid.operatorIdComboboxInputContainer.combobox('getValue');
                                        var gameAreaId = Statistics.Artifact.View.DataGrid.areaNumCombogridInputContainer.combogrid('getValues').toString();
                                        var startDate = Statistics.Artifact.View.DataGrid.searchStartDateboxInputContainer.datebox('getValue');
                                        var endDate =  Statistics.Artifact.View.DataGrid.searchEndDateboxInputContainer.datebox('getValue');

                                                  var downUrl = "/index.php/Statistics/artifact/export?operatorId="+ operatorId +"&gameAreaId="+gameAreaId+"&startDate="+startDate+"&endDate="+endDate
                                                  window.location = downUrl;

				},

			},
		},
	},
	Pet: {
		init: function() {
			Language.getCurrLanguage();
			Utils.loadJavascriptFile('/application/views/libraries/component/' + language + '.js');
			Utils.loadJavascriptFile('/application/views/libraries/utils/' + language + '.js');
			Utils.loadJavascriptFile('/application/views/module/Statistics/' + language + '.js');
			Utils.initAjax();
			
			Statistics.Pet.View.init();
		},
		
		View: {
			dataGridPanelContainer: '',
			
			init: function() {
				Statistics.Pet.View.dataGridPanelContainer = $('#dataGridPanel #dataGrid');
				Statistics.Pet.View.DataGrid.init();
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
					Statistics.Pet.View.DataGrid.operatorIdComboboxLabelContainer = $('#dataGridPanel #toolbar #operatorIdComboboxLabel');
					Statistics.Pet.View.DataGrid.operatorIdComboboxInputContainer = $('#dataGridPanel #toolbar #operatorIdComboboxInput');
                                        Statistics.Pet.View.DataGrid.areaNumCombogridLabelContainer = $('#dataGridPanel #toolbar #areaNumCombogridLabel');
					Statistics.Pet.View.DataGrid.areaNumCombogridInputContainer = $('#dataGridPanel #toolbar #areaNumCombogridInput');
                                        Statistics.Pet.View.DataGrid.searchStartDateboxLabelContainer = $('#dataGridPanel #toolbar #searchStartDateboxLabel');
					Statistics.Pet.View.DataGrid.searchStartDateboxInputContainer = $('#dataGridPanel #toolbar #searchStartDateboxInput');
					Statistics.Pet.View.DataGrid.searchEndDateboxLabelContainer = $('#dataGridPanel #toolbar #searchEndDateboxLabel');
					Statistics.Pet.View.DataGrid.searchEndDateboxInputContainer = $('#dataGridPanel #toolbar #searchEndDateboxInput');
					Statistics.Pet.View.DataGrid.searchButtonContainer = $('#dataGridPanel #toolbar #searchButton');
                                        Statistics.Pet.View.DataGrid.exportButtonContainer = $('#dataGridPanel #toolbar #exportButton');
					Statistics.Pet.View.DataGrid.create();
                                        Statistics.Pet.View.DataGrid.showCurrSelectInfo();
				},
				
				create: function() {
					var width = $(document).width() - 40;
					var height = $(document).height() - 40;
					Statistics.Pet.View.dataGridPanelContainer.width(width);
					Statistics.Pet.View.dataGridPanelContainer.height(height);
					Statistics.Pet.View.dataGridPanelContainer.datagrid({
						toolbar: '#toolbar',
						columns: [[
							{
								field: 'date',
								title: statisticsPrivilegeViewDataGridColumnTitle1,
								width: 100,
							},
							{
								field: 'green',
								title: statisticsPetViewDataGridColumnTitle2,
								width: 100,
							},
							{
								field: 'blue',
								title: statisticsPetViewDataGridColumnTitle3,
								width: 100,
							},
                                                        {
								field: 'orange',
								title: statisticsPetViewDataGridColumnTitle4,
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
						Statistics.Pet.View.DataGrid.operatorIdComboboxLabelContainer,
						Statistics.Pet.View.DataGrid.operatorIdComboboxInputContainer
					);
                                        Component.Combogrid.AreaNum.create(
						Statistics.Pet.View.DataGrid.areaNumCombogridLabelContainer,
						Statistics.Pet.View.DataGrid.areaNumCombogridInputContainer
					);
					Component.Datebox.Start.create(
						Statistics.Pet.View.DataGrid.searchStartDateboxLabelContainer,
						Statistics.Pet.View.DataGrid.searchStartDateboxInputContainer
					);
                                        Component.Datebox.End.create(
						Statistics.Pet.View.DataGrid.searchEndDateboxLabelContainer,
						Statistics.Pet.View.DataGrid.searchEndDateboxInputContainer
					);
					Statistics.Pet.View.DataGrid.searchButtonContainer.linkbutton({
						iconCls: 'icon-search',
						text: statisticsPrivilegeViewDataGridToolbarButtonText1,
					});
					Statistics.Pet.View.DataGrid.searchButtonContainer.bind(
						'click',
						Statistics.Pet.View.DataGrid.doSearch
					);
                                        Statistics.Pet.View.DataGrid.exportButtonContainer.linkbutton({
						iconCls: 'icon-search',
						text: exportViewDataGridToolbarButtonText1,
					});
					Statistics.Pet.View.DataGrid.exportButtonContainer.bind(
						'click',
						Statistics.Pet.View.DataGrid.doExport
					);
				},
				
				doSearch: function() {
                                        var operatorId = Statistics.Pet.View.DataGrid.operatorIdComboboxInputContainer.combobox('getValue');
                                        var gameAreaId = Statistics.Pet.View.DataGrid.areaNumCombogridInputContainer.combogrid('getValue');
					var searchStartDate = Statistics.Pet.View.DataGrid.searchStartDateboxInputContainer.datebox('getValue');
                                        var searchEndDate = Statistics.Pet.View.DataGrid.searchEndDateboxInputContainer.datebox('getValue');
					
					Statistics.Pet.View.dataGridPanelContainer.datagrid({
						url: '/index.php/Statistics/pet/getListData',
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
                                                    Statistics.Pet.View.DataGrid.operatorIdComboboxInputContainer.combobox('select',response.data.operatorId);
                                                    Statistics.Pet.View.DataGrid.areaNumCombogridInputContainer.combogrid('setValue',response.data.gameAreaId);
                                                    Statistics.Pet.View.DataGrid.searchStartDateboxInputContainer.datebox('setValue',response.data.startDate);
                                                    Statistics.Pet.View.DataGrid.searchEndDateboxInputContainer.datebox('setValue',response.data.endDate);
                                                }
                                        })
                                }, 
                                doExport: function() {

                                        var operatorId = Statistics.Pet.View.DataGrid.operatorIdComboboxInputContainer.combobox('getValue');
                                        var gameAreaId = Statistics.Pet.View.DataGrid.areaNumCombogridInputContainer.combogrid('getValues').toString();
                                        var startDate = Statistics.Pet.View.DataGrid.searchStartDateboxInputContainer.datebox('getValue');
                                        var endDate =  Statistics.Pet.View.DataGrid.searchEndDateboxInputContainer.datebox('getValue');

                                                  var downUrl = "/index.php/Statistics/pet/export?operatorId="+ operatorId +"&gameAreaId="+gameAreaId+"&startDate="+startDate+"&endDate="+endDate
                                                  window.location = downUrl;

				},

			},
		},
	},
    Limit: {
		init: function() {
			Language.getCurrLanguage();
			Utils.loadJavascriptFile('/application/views/libraries/component/' + language + '.js');
			Utils.loadJavascriptFile('/application/views/libraries/utils/' + language + '.js');
			Utils.loadJavascriptFile('/application/views/module/Statistics/' + language + '.js');
			Utils.initAjax();
			
			Statistics.Limit.View.init();
		},
		
		View: {
			dataGridPanelContainer: '',
			
			init: function() {
				Statistics.Limit.View.dataGridPanelContainer = $('#dataGridPanel #dataGrid');
				Statistics.Limit.View.DataGrid.init();
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
				
				init: function() {
					Statistics.Limit.View.DataGrid.operatorIdComboboxLabelContainer = $('#dataGridPanel #toolbar #operatorIdComboboxLabel');
					Statistics.Limit.View.DataGrid.operatorIdComboboxInputContainer = $('#dataGridPanel #toolbar #operatorIdComboboxInput');
                                        Statistics.Limit.View.DataGrid.areaNumCombogridLabelContainer = $('#dataGridPanel #toolbar #areaNumCombogridLabel');
					Statistics.Limit.View.DataGrid.areaNumCombogridInputContainer = $('#dataGridPanel #toolbar #areaNumCombogridInput');
                                        Statistics.Limit.View.DataGrid.searchStartDateboxLabelContainer = $('#dataGridPanel #toolbar #searchStartDateboxLabel');
					Statistics.Limit.View.DataGrid.searchStartDateboxInputContainer = $('#dataGridPanel #toolbar #searchStartDateboxInput');
					Statistics.Limit.View.DataGrid.searchEndDateboxLabelContainer = $('#dataGridPanel #toolbar #searchEndDateboxLabel');
					Statistics.Limit.View.DataGrid.searchEndDateboxInputContainer = $('#dataGridPanel #toolbar #searchEndDateboxInput');
					Statistics.Limit.View.DataGrid.searchButtonContainer = $('#dataGridPanel #toolbar #searchButton');
					Statistics.Limit.View.DataGrid.create();
                                        Statistics.Limit.View.DataGrid.showCurrSelectInfo();
				},
				
				create: function() {
					var width = $(document).width() - 40;
					var height = $(document).height() - 40;
					Statistics.Limit.View.dataGridPanelContainer.width(width);
					Statistics.Limit.View.dataGridPanelContainer.height(height);
					Statistics.Limit.View.dataGridPanelContainer.datagrid({
						toolbar: '#toolbar',
						columns: [[
							{
								field: 'date',
								title: statisticsPrivilegeViewDataGridColumnTitle1,
								width: 100,
							},
							{
								field: 'gift',
								title: statisticsLimitViewDataGridColumnTitle2,
								width: 100,
                                                                formatter: function(value, row) {
									if(row.openTime - row.time == 0) {
										if(value == '-1588'){
                                                                                   return statisticsGiftValue0;
                                                                                }
                                                                                else if(value == '-8888'){
                                                                                    return statisticsGiftValue1;
                                                                                }
                                                                                else if(value == '-26888'){
                                                                                    return statisticsGiftValue2;
                                                                                }
									}
                                                                        else if(row.openTime - row.time == '86400'){
                                                                                if(value == '-1588'){
                                                                                   return statisticsGiftValue3;
                                                                                }
                                                                                else if(value == '-8888'){
                                                                                    return statisticsGiftValue4;
                                                                                }
                                                                                else if(value == '-26888'){
                                                                                    return statisticsGiftValue5;
                                                                                }
                                                                        }
                                                                        else if(row.openTime - row.time == 86400*2){
                                                                                if(value == '-1588'){
                                                                                   return statisticsGiftValue6;
                                                                                }
                                                                                else if(value == '-8888'){
                                                                                    return statisticsGiftValue7;
                                                                                }
                                                                                else if(value == '-26888'){
                                                                                    return statisticsGiftValue8;
                                                                                }
                                                                        }
                                                                        else if(row.openTime - row.time == 86400*3){
                                                                                if(value == '-1588'){
                                                                                   return statisticsGiftValue9;
                                                                                }
                                                                                else if(value == '-8888'){
                                                                                    return statisticsGiftValue10;
                                                                                }
                                                                                else if(value == '-26888'){
                                                                                    return statisticsGiftValue11;
                                                                                }
                                                                        }
                                                                        else if(row.openTime - row.time == 86400*4){
                                                                                if(value == '-1588'){
                                                                                   return statisticsGiftValue12;
                                                                                }
                                                                                else if(value == '-8888'){
                                                                                    return statisticsGiftValue13;
                                                                                }
                                                                                else if(value == '-26888'){
                                                                                    return statisticsGiftValue14;
                                                                                }
                                                                        }
                                                                        else if(row.openTime - row.time == 86400*5){
                                                                                if(value == '-1588'){
                                                                                   return statisticsGiftValue15;
                                                                                }
                                                                                else if(value == '-8888'){
                                                                                    return statisticsGiftValue16;
                                                                                }
                                                                                else if(value == '-26888'){
                                                                                    return statisticsGiftValue17;
                                                                                }
                                                                        }
                                                                        else if(row.openTime - row.time == 86400*6){
                                                                                if(value == '-1588'){
                                                                                   return statisticsGiftValue18;
                                                                                }
                                                                                else if(value == '-8888'){
                                                                                    return statisticsGiftValue119;
                                                                                }
                                                                                else if(value == '-26888'){
                                                                                    return statisticsGiftValue20;
                                                                                }
                                                                        }
								},
							},
							{
								field: 'count',
								title: statisticsLimitViewDataGridColumnTitle3,
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
						Statistics.Limit.View.DataGrid.operatorIdComboboxLabelContainer,
						Statistics.Limit.View.DataGrid.operatorIdComboboxInputContainer
					);
                                        Component.Combogrid.AreaNum.create(
						Statistics.Limit.View.DataGrid.areaNumCombogridLabelContainer,
						Statistics.Limit.View.DataGrid.areaNumCombogridInputContainer
					);
					Component.Datebox.Start.create(
						Statistics.Limit.View.DataGrid.searchStartDateboxLabelContainer,
						Statistics.Limit.View.DataGrid.searchStartDateboxInputContainer
					);
                                        Component.Datebox.End.create(
						Statistics.Limit.View.DataGrid.searchEndDateboxLabelContainer,
						Statistics.Limit.View.DataGrid.searchEndDateboxInputContainer
					);
					Statistics.Limit.View.DataGrid.searchButtonContainer.linkbutton({
						iconCls: 'icon-search',
						text: statisticsPrivilegeViewDataGridToolbarButtonText1,
					});
					Statistics.Limit.View.DataGrid.searchButtonContainer.bind(
						'click',
						Statistics.Limit.View.DataGrid.doSearch
					);
				},
				
				doSearch: function() {
                                        var operatorId = Statistics.Limit.View.DataGrid.operatorIdComboboxInputContainer.combobox('getValue');
                                        var gameAreaId = Statistics.Limit.View.DataGrid.areaNumCombogridInputContainer.combogrid('getValue');
					var searchStartDate = Statistics.Limit.View.DataGrid.searchStartDateboxInputContainer.datebox('getValue');
                                        var searchEndDate = Statistics.Limit.View.DataGrid.searchEndDateboxInputContainer.datebox('getValue');
					
					Statistics.Limit.View.dataGridPanelContainer.datagrid({
						url: '/index.php/Statistics/limit/getListData',
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
                                                    Statistics.Limit.View.DataGrid.operatorIdComboboxInputContainer.combobox('select',response.data.operatorId);
                                                    Statistics.Limit.View.DataGrid.areaNumCombogridInputContainer.combogrid('setValue',response.data.gameAreaId);
                                                    Statistics.Limit.View.DataGrid.searchStartDateboxInputContainer.datebox('setValue',response.data.startDate);
                                                    Statistics.Limit.View.DataGrid.searchEndDateboxInputContainer.datebox('setValue',response.data.endDate);
                                                }
                                        })
                                }, 
                                

			},
		},
	},
    Experience: {
		init: function() {
			Language.getCurrLanguage();
			Utils.loadJavascriptFile('/application/views/libraries/component/' + language + '.js');
			Utils.loadJavascriptFile('/application/views/libraries/utils/' + language + '.js');
			Utils.loadJavascriptFile('/application/views/module/Statistics/' + language + '.js');
			Utils.initAjax();
			
			Statistics.Experience.View.init();
		},
		
		View: {
			dataGridPanelContainer: '',
			
			init: function() {
				Statistics.Experience.View.dataGridPanelContainer = $('#dataGridPanel #dataGrid');
				Statistics.Experience.View.DataGrid.init();
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
					Statistics.Experience.View.DataGrid.operatorIdComboboxLabelContainer = $('#dataGridPanel #toolbar #operatorIdComboboxLabel');
					Statistics.Experience.View.DataGrid.operatorIdComboboxInputContainer = $('#dataGridPanel #toolbar #operatorIdComboboxInput');
                                        Statistics.Experience.View.DataGrid.areaNumCombogridLabelContainer = $('#dataGridPanel #toolbar #areaNumCombogridLabel');
					Statistics.Experience.View.DataGrid.areaNumCombogridInputContainer = $('#dataGridPanel #toolbar #areaNumCombogridInput');
                                        Statistics.Experience.View.DataGrid.searchStartDateboxLabelContainer = $('#dataGridPanel #toolbar #searchStartDateboxLabel');
					Statistics.Experience.View.DataGrid.searchStartDateboxInputContainer = $('#dataGridPanel #toolbar #searchStartDateboxInput');
					Statistics.Experience.View.DataGrid.searchEndDateboxLabelContainer = $('#dataGridPanel #toolbar #searchEndDateboxLabel');
					Statistics.Experience.View.DataGrid.searchEndDateboxInputContainer = $('#dataGridPanel #toolbar #searchEndDateboxInput');
					Statistics.Experience.View.DataGrid.searchButtonContainer = $('#dataGridPanel #toolbar #searchButton');
                                        Statistics.Experience.View.DataGrid.exportButtonContainer = $('#dataGridPanel #toolbar #exportButton');
					Statistics.Experience.View.DataGrid.create();
                                        Statistics.Experience.View.DataGrid.showCurrSelectInfo();
				},
				
				create: function() {
					var width = $(document).width() - 40;
					var height = $(document).height() - 40;
					Statistics.Experience.View.dataGridPanelContainer.width(width);
					Statistics.Experience.View.dataGridPanelContainer.height(height);
					Statistics.Experience.View.dataGridPanelContainer.datagrid({
						toolbar: '#toolbar',
						columns: [[
							{
								field: 'date',
								title: statisticsPrivilegeViewDataGridColumnTitle1,
								width: 100,
							},
							{
								field: 'one',
								title: statisticsExperienceViewDataGridColumnTitle2,
								width: 100,
							},
							{
								field: 'two',
								title: statisticsExperienceViewDataGridColumnTitle3,
								width: 100,
							},
                                                        {
								field: 'three',
								title: statisticsExperienceViewDataGridColumnTitle4,
								width: 100,
							},
                                                        {
								field: 'four',
								title: statisticsExperienceViewDataGridColumnTitle5,
								width: 100,
							},
                                                        {
								field: 'five',
								title: statisticsExperienceViewDataGridColumnTitle6,
								width: 100,
							},
                                                        {
								field: 'sum',
								title: statisticsExperienceViewDataGridColumnTitle7,
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
						Statistics.Experience.View.DataGrid.operatorIdComboboxLabelContainer,
						Statistics.Experience.View.DataGrid.operatorIdComboboxInputContainer
					);
                                        Component.Combogrid.AreaNum.create(
						Statistics.Experience.View.DataGrid.areaNumCombogridLabelContainer,
						Statistics.Experience.View.DataGrid.areaNumCombogridInputContainer
					);
					Component.Datebox.Start.create(
						Statistics.Experience.View.DataGrid.searchStartDateboxLabelContainer,
						Statistics.Experience.View.DataGrid.searchStartDateboxInputContainer
					);
                                        Component.Datebox.End.create(
						Statistics.Experience.View.DataGrid.searchEndDateboxLabelContainer,
						Statistics.Experience.View.DataGrid.searchEndDateboxInputContainer
					);
					Statistics.Experience.View.DataGrid.searchButtonContainer.linkbutton({
						iconCls: 'icon-search',
						text: statisticsPrivilegeViewDataGridToolbarButtonText1,
					});
					Statistics.Experience.View.DataGrid.searchButtonContainer.bind(
						'click',
						Statistics.Experience.View.DataGrid.doSearch
					);
                                        Statistics.Experience.View.DataGrid.exportButtonContainer.linkbutton({
						iconCls: 'icon-search',
						text: exportViewDataGridToolbarButtonText1,
					});
					Statistics.Experience.View.DataGrid.exportButtonContainer.bind(
						'click',
						Statistics.Experience.View.DataGrid.doExport
					);
				},
				
				doSearch: function() {
                                        var operatorId = Statistics.Experience.View.DataGrid.operatorIdComboboxInputContainer.combobox('getValue');
                                        var gameAreaId = Statistics.Experience.View.DataGrid.areaNumCombogridInputContainer.combogrid('getValue');
					var searchStartDate = Statistics.Experience.View.DataGrid.searchStartDateboxInputContainer.datebox('getValue');
                                        var searchEndDate = Statistics.Experience.View.DataGrid.searchEndDateboxInputContainer.datebox('getValue');
					
					Statistics.Experience.View.dataGridPanelContainer.datagrid({
						url: '/index.php/Statistics/experience/getListData',
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
                                                    Statistics.Experience.View.DataGrid.operatorIdComboboxInputContainer.combobox('select',response.data.operatorId);
                                                    Statistics.Experience.View.DataGrid.areaNumCombogridInputContainer.combogrid('setValue',response.data.gameAreaId);
                                                    Statistics.Experience.View.DataGrid.searchStartDateboxInputContainer.datebox('setValue',response.data.startDate);
                                                    Statistics.Experience.View.DataGrid.searchEndDateboxInputContainer.datebox('setValue',response.data.endDate);
                                                }
                                        })
                                }, 
                                doExport: function() {

                                        var operatorId = Statistics.Experience.View.DataGrid.operatorIdComboboxInputContainer.combobox('getValue');
                                        var gameAreaId = Statistics.Experience.View.DataGrid.areaNumCombogridInputContainer.combogrid('getValues').toString();
                                        var startDate = Statistics.Experience.View.DataGrid.searchStartDateboxInputContainer.datebox('getValue');
                                        var endDate =  Statistics.Experience.View.DataGrid.searchEndDateboxInputContainer.datebox('getValue');

                                                  var downUrl = "/index.php/Statistics/experience/export?operatorId="+ operatorId +"&gameAreaId="+gameAreaId+"&startDate="+startDate+"&endDate="+endDate
                                                  window.location = downUrl;

				},

			},
		},
	},

	Special: {
		init: function() {
			Language.getCurrLanguage();
			Utils.loadJavascriptFile('/application/views/libraries/component/' + language + '.js');
			Utils.loadJavascriptFile('/application/views/libraries/utils/' + language + '.js');
			Utils.loadJavascriptFile('/application/views/module/Statistics/' + language + '.js');
			Utils.initAjax();
			
			Statistics.Special.View.init();
		},
		
		View: {
			dataGridPanelContainer: '',
			
			init: function() {
				Statistics.Special.View.dataGridPanelContainer = $('#dataGridPanel #dataGrid');
				Statistics.Special.View.DataGrid.init();
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
					Statistics.Special.View.DataGrid.operatorIdComboboxLabelContainer = $('#dataGridPanel #toolbar #operatorIdComboboxLabel');
					Statistics.Special.View.DataGrid.operatorIdComboboxInputContainer = $('#dataGridPanel #toolbar #operatorIdComboboxInput');
                    Statistics.Special.View.DataGrid.areaNumCombogridLabelContainer = $('#dataGridPanel #toolbar #areaNumCombogridLabel');
					Statistics.Special.View.DataGrid.areaNumCombogridInputContainer = $('#dataGridPanel #toolbar #areaNumCombogridInput');

                    Statistics.Special.View.DataGrid.searchStartDateboxLabelContainer = $('#dataGridPanel #toolbar #searchStartDateboxLabel');
					Statistics.Special.View.DataGrid.searchStartDateboxInputContainer = $('#dataGridPanel #toolbar #searchStartDateboxInput');
					Statistics.Special.View.DataGrid.searchEndDateboxLabelContainer = $('#dataGridPanel #toolbar #searchEndDateboxLabel');
					Statistics.Special.View.DataGrid.searchEndDateboxInputContainer = $('#dataGridPanel #toolbar #searchEndDateboxInput');

					Statistics.Special.View.DataGrid.searchButtonContainer = $('#dataGridPanel #toolbar #searchButton');
                    Statistics.Special.View.DataGrid.exportButtonContainer = $('#dataGridPanel #toolbar #exportButton');
					Statistics.Special.View.DataGrid.create();
                    Statistics.Special.View.DataGrid.showCurrSelectInfo();
				},
				
				create: function() {
					var width = $(document).width() - 40;
					var height = $(document).height() - 40;
					Statistics.Special.View.dataGridPanelContainer.width(width);
					Statistics.Special.View.dataGridPanelContainer.height(height);
					Statistics.Special.View.dataGridPanelContainer.datagrid({
						toolbar: '#toolbar',
						columns: [[
							{
								field: 'date',
								title: statisticsPrivilegeViewDataGridColumnTitle1,
								width: 100,
							},
							{
								field: 'level',		//档位
								title: statisticsSpecialViewDataGridColumnTitle1,
								width: 100,
							},
							{
								field: 'time',
								title: statisticsSpecialViewDataGridColumnTitle2,
								width: 100,
							},
                            {
								field: 'amount',
								title: statisticsSpecialViewDataGridColumnTitle3,
								width: 100,
							},
                            
                            {
								field: 'sum',
								title: statisticsSpecialViewDataGridColumnTitle4,
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
						Statistics.Special.View.DataGrid.operatorIdComboboxLabelContainer,
						Statistics.Special.View.DataGrid.operatorIdComboboxInputContainer
					);
                    Component.Combogrid.AreaNum.create(
						Statistics.Special.View.DataGrid.areaNumCombogridLabelContainer,
						Statistics.Special.View.DataGrid.areaNumCombogridInputContainer
					);
					Component.Datebox.Start.create(
						Statistics.Special.View.DataGrid.searchStartDateboxLabelContainer,
						Statistics.Special.View.DataGrid.searchStartDateboxInputContainer
					);
                    Component.Datebox.End.create(
						Statistics.Special.View.DataGrid.searchEndDateboxLabelContainer,
						Statistics.Special.View.DataGrid.searchEndDateboxInputContainer
					);
					Statistics.Special.View.DataGrid.searchButtonContainer.linkbutton({
						iconCls: 'icon-search',
						text: statisticsPrivilegeViewDataGridToolbarButtonText1,
					});
					Statistics.Special.View.DataGrid.searchButtonContainer.bind(
						'click',
						Statistics.Special.View.DataGrid.doSearch
					);
					Statistics.Special.View.DataGrid.exportButtonContainer.linkbutton({
						iconCls: 'icon-search',
						text: exportViewDataGridToolbarButtonText1,
					});
					Statistics.Special.View.DataGrid.exportButtonContainer.bind(
						'click',
						Statistics.Special.View.DataGrid.doExport
					);
				},
				
				doSearch: function() {
                    var operatorId = Statistics.Special.View.DataGrid.operatorIdComboboxInputContainer.combobox('getValue');
                    var gameAreaId = Statistics.Special.View.DataGrid.areaNumCombogridInputContainer.combogrid('getValue');
					var searchStartDate = Statistics.Special.View.DataGrid.searchStartDateboxInputContainer.datebox('getValue');
                    var searchEndDate = Statistics.Special.View.DataGrid.searchEndDateboxInputContainer.datebox('getValue');
					
					Statistics.Special.View.dataGridPanelContainer.datagrid({
						url: '/index.php/Statistics/special/getListData',
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
                                    Statistics.Special.View.DataGrid.operatorIdComboboxInputContainer.combobox('select',response.data.operatorId);
                                    Statistics.Special.View.DataGrid.areaNumCombogridInputContainer.combogrid('setValue',response.data.gameAreaId);
                                    Statistics.Special.View.DataGrid.searchStartDateboxInputContainer.datebox('setValue',response.data.startDate);
                                    Statistics.Special.View.DataGrid.searchEndDateboxInputContainer.datebox('setValue',response.data.endDate);
                                }
                        })
                }, 
                doExport: function() {

                        var operatorId = Statistics.Special.View.DataGrid.operatorIdComboboxInputContainer.combobox('getValue');
                        var gameAreaId = Statistics.Special.View.DataGrid.areaNumCombogridInputContainer.combogrid('getValues').toString();
                        var startDate = Statistics.Special.View.DataGrid.searchStartDateboxInputContainer.datebox('getValue');
                        var endDate =  Statistics.Special.View.DataGrid.searchEndDateboxInputContainer.datebox('getValue');

                                  var downUrl = "/index.php/Statistics/special/export?operatorId="+ operatorId +"&gameAreaId="+gameAreaId+"&startDate="+startDate+"&endDate="+endDate
                                  window.location = downUrl;

				},

			},
		},
	},

	King: {
		init: function() {
			Language.getCurrLanguage();
			Utils.loadJavascriptFile('/application/views/libraries/component/' + language + '.js');
			Utils.loadJavascriptFile('/application/views/libraries/utils/' + language + '.js');
			Utils.loadJavascriptFile('/application/views/module/Statistics/' + language + '.js');
			Utils.initAjax();
			
			Statistics.King.View.init(); 
		},



		
		View: {
			dataGridPanelContainer: '',
			
			init: function() {
				Statistics.King.View.dataGridPanelContainer = $('#dataGridPanel #dataGrid');
				Statistics.King.View.DataGrid.init();
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
					Statistics.King.View.DataGrid.operatorIdComboboxLabelContainer = $('#dataGridPanel #toolbar #operatorIdComboboxLabel');
					Statistics.King.View.DataGrid.operatorIdComboboxInputContainer = $('#dataGridPanel #toolbar #operatorIdComboboxInput');
                    Statistics.King.View.DataGrid.areaNumCombogridLabelContainer = $('#dataGridPanel #toolbar #areaNumCombogridLabel');
					Statistics.King.View.DataGrid.areaNumCombogridInputContainer = $('#dataGridPanel #toolbar #areaNumCombogridInput');

                    Statistics.King.View.DataGrid.searchStartDateboxLabelContainer = $('#dataGridPanel #toolbar #searchStartDateboxLabel');
					Statistics.King.View.DataGrid.searchStartDateboxInputContainer = $('#dataGridPanel #toolbar #searchStartDateboxInput');
					Statistics.King.View.DataGrid.searchEndDateboxLabelContainer = $('#dataGridPanel #toolbar #searchEndDateboxLabel');
					Statistics.King.View.DataGrid.searchEndDateboxInputContainer = $('#dataGridPanel #toolbar #searchEndDateboxInput');
					Statistics.King.View.DataGrid.searchButtonContainer = $('#dataGridPanel #toolbar #searchButton');
                    Statistics.King.View.DataGrid.exportButtonContainer = $('#dataGridPanel #toolbar #exportButton');
					Statistics.King.View.DataGrid.create();
                    Statistics.King.View.DataGrid.showCurrSelectInfo();
				},
				
				create: function() {
					var width = $(document).width() - 40;
					var height = $(document).height() - 40;
					Statistics.King.View.dataGridPanelContainer.width(width);
					Statistics.King.View.dataGridPanelContainer.height(height);
					Statistics.King.View.dataGridPanelContainer.datagrid({
						toolbar: '#toolbar',
						columns: [[
							{
								field: 'areaNum',
								title: statisticsKingViewDataGridColumnTitle4,
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
						Statistics.King.View.DataGrid.operatorIdComboboxLabelContainer,
						Statistics.King.View.DataGrid.operatorIdComboboxInputContainer
					);
                    Component.Combogrid.AreaNum.create(
						Statistics.King.View.DataGrid.areaNumCombogridLabelContainer,
						Statistics.King.View.DataGrid.areaNumCombogridInputContainer
					);
					Component.Datebox.Start.create(
						Statistics.King.View.DataGrid.searchStartDateboxLabelContainer,
						Statistics.King.View.DataGrid.searchStartDateboxInputContainer
					);
                    Component.Datebox.End.create(
						Statistics.King.View.DataGrid.searchEndDateboxLabelContainer,
						Statistics.King.View.DataGrid.searchEndDateboxInputContainer
					);

					Statistics.King.View.DataGrid.searchButtonContainer.linkbutton({
						iconCls: 'icon-search',
						text: statisticsPrivilegeViewDataGridToolbarButtonText1,
					});
					Statistics.King.View.DataGrid.searchButtonContainer.bind(
						'click',
						Statistics.King.View.DataGrid.doSearch
					);
                    Statistics.King.View.DataGrid.exportButtonContainer.linkbutton({
						iconCls: 'icon-search',
						text: exportViewDataGridToolbarButtonText1,
					});
					Statistics.King.View.DataGrid.exportButtonContainer.bind(
						'click',
						Statistics.King.View.DataGrid.doExport
					);

				},
				
				doSearch: function() {
                    var operatorId = Statistics.King.View.DataGrid.operatorIdComboboxInputContainer.combobox('getValue');
                    var gameAreaId = Statistics.King.View.DataGrid.areaNumCombogridInputContainer.combogrid('getValue');
					var searchStartDate = Statistics.King.View.DataGrid.searchStartDateboxInputContainer.datebox('getValue');
                    var searchEndDate = Statistics.King.View.DataGrid.searchEndDateboxInputContainer.datebox('getValue');
					
					Statistics.King.View.dataGridPanelContainer.datagrid({
						url: '/index.php/Statistics/king/getListData',
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
                                    Statistics.King.View.DataGrid.operatorIdComboboxInputContainer.combobox('select',response.data.operatorId);
                                    Statistics.King.View.DataGrid.areaNumCombogridInputContainer.combogrid('setValue',response.data.gameAreaId);
                                    Statistics.King.View.DataGrid.searchStartDateboxInputContainer.datebox('setValue',response.data.startDate);
                                    Statistics.King.View.DataGrid.searchEndDateboxInputContainer.datebox('setValue',response.data.endDate);
                                }
                        })
                }, 
                doExport: function() {

                        var operatorId = Statistics.King.View.DataGrid.operatorIdComboboxInputContainer.combobox('getValue');
                        var gameAreaId = Statistics.King.View.DataGrid.areaNumCombogridInputContainer.combogrid('getValues').toString();
                        var startDate = Statistics.King.View.DataGrid.searchStartDateboxInputContainer.datebox('getValue');
                        var endDate =  Statistics.King.View.DataGrid.searchEndDateboxInputContainer.datebox('getValue');

                                  var downUrl = "/index.php/Statistics/king/export?operatorId="+ operatorId +"&gameAreaId="+gameAreaId+"&startDate="+startDate+"&endDate="+endDate
                                  window.location = downUrl;

				},

			},
		}, 
	},

	Treasure: {
		init: function() {
			Language.getCurrLanguage();
			Utils.loadJavascriptFile('/application/views/libraries/component/' + language + '.js');
			Utils.loadJavascriptFile('/application/views/libraries/utils/' + language + '.js');
			Utils.loadJavascriptFile('/application/views/module/Statistics/' + language + '.js');
			Utils.initAjax();
			
			Statistics.Treasure.View.init();
		},
		
		View: {
			dataGridPanelContainer: '',
			
			init: function() {
				Statistics.Treasure.View.dataGridPanelContainer = $('#dataGridPanel #dataGrid');
				Statistics.Treasure.View.DataGrid.init();
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
					Statistics.Treasure.View.DataGrid.operatorIdComboboxLabelContainer = $('#dataGridPanel #toolbar #operatorIdComboboxLabel');
					Statistics.Treasure.View.DataGrid.operatorIdComboboxInputContainer = $('#dataGridPanel #toolbar #operatorIdComboboxInput');
                    Statistics.Treasure.View.DataGrid.areaNumCombogridLabelContainer = $('#dataGridPanel #toolbar #areaNumCombogridLabel');
					Statistics.Treasure.View.DataGrid.areaNumCombogridInputContainer = $('#dataGridPanel #toolbar #areaNumCombogridInput');
                    Statistics.Treasure.View.DataGrid.searchStartDateboxLabelContainer = $('#dataGridPanel #toolbar #searchStartDateboxLabel');
					Statistics.Treasure.View.DataGrid.searchStartDateboxInputContainer = $('#dataGridPanel #toolbar #searchStartDateboxInput');
					Statistics.Treasure.View.DataGrid.searchEndDateboxLabelContainer = $('#dataGridPanel #toolbar #searchEndDateboxLabel');
					Statistics.Treasure.View.DataGrid.searchEndDateboxInputContainer = $('#dataGridPanel #toolbar #searchEndDateboxInput');
					Statistics.Treasure.View.DataGrid.searchButtonContainer = $('#dataGridPanel #toolbar #searchButton');
                    Statistics.Treasure.View.DataGrid.exportButtonContainer = $('#dataGridPanel #toolbar #exportButton');
					Statistics.Treasure.View.DataGrid.create();
                    Statistics.Treasure.View.DataGrid.showCurrSelectInfo();
				},
				
				create: function() {
					var width = $(document).width() - 40;
					var height = $(document).height() - 40;
					Statistics.Treasure.View.dataGridPanelContainer.width(width);
					Statistics.Treasure.View.dataGridPanelContainer.height(height);
					Statistics.Treasure.View.dataGridPanelContainer.datagrid({
						toolbar: '#toolbar',
						columns: [[
							{
								field: 'date',
								title: statisticsPrivilegeViewDataGridColumnTitle1, 
								width: 100,
							},
							{
								field: 'itemName',		//	物品名
								title: statisticsTreasureViewDataGridColumnTitle1,
								width: 100,
							},
							{
								field: 'count',		//购买数量
								title: statisticsTreasureViewDataGridColumnTitle2,
								width: 100,
							},
                            {
								field: 'time',		//购买次数
								title: statisticsTreasureViewDataGridColumnTitle3,
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
						Statistics.Treasure.View.DataGrid.operatorIdComboboxLabelContainer,
						Statistics.Treasure.View.DataGrid.operatorIdComboboxInputContainer
					);
                    Component.Combogrid.AreaNum.create(
						Statistics.Treasure.View.DataGrid.areaNumCombogridLabelContainer,
						Statistics.Treasure.View.DataGrid.areaNumCombogridInputContainer
					);
					Component.Datebox.Start.create(
						Statistics.Treasure.View.DataGrid.searchStartDateboxLabelContainer,
						Statistics.Treasure.View.DataGrid.searchStartDateboxInputContainer
					);
                    Component.Datebox.End.create(
						Statistics.Treasure.View.DataGrid.searchEndDateboxLabelContainer,
						Statistics.Treasure.View.DataGrid.searchEndDateboxInputContainer
					);
					Statistics.Treasure.View.DataGrid.searchButtonContainer.linkbutton({
						iconCls: 'icon-search',
						text: statisticsPrivilegeViewDataGridToolbarButtonText1,
					});
					Statistics.Treasure.View.DataGrid.searchButtonContainer.bind(
						'click',
						Statistics.Treasure.View.DataGrid.doSearch
					);
                    Statistics.Treasure.View.DataGrid.exportButtonContainer.linkbutton({
						iconCls: 'icon-search',
						text: exportViewDataGridToolbarButtonText1,
					});
					Statistics.Treasure.View.DataGrid.exportButtonContainer.bind(
						'click',
						Statistics.Treasure.View.DataGrid.doExport
					);
				},
				
				doSearch: function() {
                    var operatorId = Statistics.Treasure.View.DataGrid.operatorIdComboboxInputContainer.combobox('getValue');
                    var gameAreaId = Statistics.Treasure.View.DataGrid.areaNumCombogridInputContainer.combogrid('getValue');
					var searchStartDate = Statistics.Treasure.View.DataGrid.searchStartDateboxInputContainer.datebox('getValue');
                    var searchEndDate = Statistics.Treasure.View.DataGrid.searchEndDateboxInputContainer.datebox('getValue');
					
					Statistics.Treasure.View.dataGridPanelContainer.datagrid({
						url: '/index.php/Statistics/treasure/getListData',
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
                                    Statistics.Treasure.View.DataGrid.operatorIdComboboxInputContainer.combobox('select',response.data.operatorId);
                                    Statistics.Treasure.View.DataGrid.areaNumCombogridInputContainer.combogrid('setValue',response.data.gameAreaId);
                                    Statistics.Treasure.View.DataGrid.searchStartDateboxInputContainer.datebox('setValue',response.data.startDate);
                                    Statistics.Treasure.View.DataGrid.searchEndDateboxInputContainer.datebox('setValue',response.data.endDate);
                                }
                        })
                }, 
                doExport: function() {

                        var operatorId = Statistics.Treasure.View.DataGrid.operatorIdComboboxInputContainer.combobox('getValue');
                        var gameAreaId = Statistics.Treasure.View.DataGrid.areaNumCombogridInputContainer.combogrid('getValues').toString();
                        var startDate = Statistics.Treasure.View.DataGrid.searchStartDateboxInputContainer.datebox('getValue');
                        var endDate =  Statistics.Treasure.View.DataGrid.searchEndDateboxInputContainer.datebox('getValue');

                                  var downUrl = "/index.php/Statistics/treasure/export?operatorId="+ operatorId +"&gameAreaId="+gameAreaId+"&startDate="+startDate+"&endDate="+endDate
                                  window.location = downUrl;

				},

			},
		},
	}, 

	// 神秘商场/神秘商店
	Shop: {
		init: function() {
			Language.getCurrLanguage();
			Utils.loadJavascriptFile('/application/views/libraries/component/' + language + '.js');
			Utils.loadJavascriptFile('/application/views/libraries/utils/' + language + '.js');
			Utils.loadJavascriptFile('/application/views/module/Statistics/' + language + '.js');
			Utils.initAjax();
			
			Statistics.Shop.View.init(); 
		},



		
		View: {
			dataGridPanelContainer: '',
			
			init: function() {
				Statistics.Shop.View.dataGridPanelContainer = $('#dataGridPanel #dataGrid');
				Statistics.Shop.View.DataGrid.init();
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
					Statistics.Shop.View.DataGrid.operatorIdComboboxLabelContainer = $('#dataGridPanel #toolbar #operatorIdComboboxLabel');
					Statistics.Shop.View.DataGrid.operatorIdComboboxInputContainer = $('#dataGridPanel #toolbar #operatorIdComboboxInput');
                    Statistics.Shop.View.DataGrid.areaNumCombogridLabelContainer = $('#dataGridPanel #toolbar #areaNumCombogridLabel');
					Statistics.Shop.View.DataGrid.areaNumCombogridInputContainer = $('#dataGridPanel #toolbar #areaNumCombogridInput');

                    Statistics.Shop.View.DataGrid.searchStartDateboxLabelContainer = $('#dataGridPanel #toolbar #searchStartDateboxLabel');
					Statistics.Shop.View.DataGrid.searchStartDateboxInputContainer = $('#dataGridPanel #toolbar #searchStartDateboxInput');
					Statistics.Shop.View.DataGrid.searchEndDateboxLabelContainer = $('#dataGridPanel #toolbar #searchEndDateboxLabel');
					Statistics.Shop.View.DataGrid.searchEndDateboxInputContainer = $('#dataGridPanel #toolbar #searchEndDateboxInput');
					Statistics.Shop.View.DataGrid.searchButtonContainer = $('#dataGridPanel #toolbar #searchButton');
                    Statistics.Shop.View.DataGrid.exportButtonContainer = $('#dataGridPanel #toolbar #exportButton');
					Statistics.Shop.View.DataGrid.create();
                    Statistics.Shop.View.DataGrid.showCurrSelectInfo();
				},
				
				create: function() {
					var width = $(document).width() - 40;
					var height = $(document).height() - 40;
					Statistics.Shop.View.dataGridPanelContainer.width(width);
					Statistics.Shop.View.dataGridPanelContainer.height(height);
					Statistics.Shop.View.dataGridPanelContainer.datagrid({
						toolbar: '#toolbar',
						columns: [[
							// {
							// 	field: 'date',
							// 	title: statisticsPrivilegeViewDataGridColumnTitle1,
							// 	width: 100,
							// },
							{
								field: 'itemName',			//物品名称
								title: statisticsTreasureViewDataGridColumnTitle1, 
								width: 120,
							},
							{
								field: 'time',  		//购买次数
								title: statisticsSpecialViewDataGridColumnTitle2,
								width: 120,
							},
                            {
								field: 'amount',		//购买人数
								title: statisticsSpecialViewDataGridColumnTitle3,
								width: 120,
							},
							{
								field: 'gold',			//消耗钻石
								title: statisticsKingViewDataGridColumnTitle3,
								width: 120,
							},
							{
								field: 'rate',			//消耗钻石占比
								title: statisticsShopViewDataGridColumnTitle1,
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
						Statistics.Shop.View.DataGrid.operatorIdComboboxLabelContainer,
						Statistics.Shop.View.DataGrid.operatorIdComboboxInputContainer
					);
                    Component.Combogrid.AreaNum.create(
						Statistics.Shop.View.DataGrid.areaNumCombogridLabelContainer,
						Statistics.Shop.View.DataGrid.areaNumCombogridInputContainer
					);
					Component.Datebox.Start.create(
						Statistics.Shop.View.DataGrid.searchStartDateboxLabelContainer,
						Statistics.Shop.View.DataGrid.searchStartDateboxInputContainer
					);
                    Component.Datebox.End.create(
						Statistics.Shop.View.DataGrid.searchEndDateboxLabelContainer,
						Statistics.Shop.View.DataGrid.searchEndDateboxInputContainer
					);

					Statistics.Shop.View.DataGrid.searchButtonContainer.linkbutton({
						iconCls: 'icon-search',
						text: statisticsPrivilegeViewDataGridToolbarButtonText1,
					});
					Statistics.Shop.View.DataGrid.searchButtonContainer.bind(
						'click',
						Statistics.Shop.View.DataGrid.doSearch
					);
                    Statistics.Shop.View.DataGrid.exportButtonContainer.linkbutton({
						iconCls: 'icon-search',
						text: exportViewDataGridToolbarButtonText1,
					});
					Statistics.Shop.View.DataGrid.exportButtonContainer.bind(
						'click',
						Statistics.Shop.View.DataGrid.doExport 
					);

				},
				
				doSearch: function() {
                    var operatorId = Statistics.Shop.View.DataGrid.operatorIdComboboxInputContainer.combobox('getValue');
                    var gameAreaId = Statistics.Shop.View.DataGrid.areaNumCombogridInputContainer.combogrid('getValue');
					var searchStartDate = Statistics.Shop.View.DataGrid.searchStartDateboxInputContainer.datebox('getValue');
                    var searchEndDate = Statistics.Shop.View.DataGrid.searchEndDateboxInputContainer.datebox('getValue');
					
					Statistics.Shop.View.dataGridPanelContainer.datagrid({
						url: '/index.php/Statistics/shop/getListData',
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
                                    Statistics.Shop.View.DataGrid.operatorIdComboboxInputContainer.combobox('select',response.data.operatorId);
                                    Statistics.Shop.View.DataGrid.areaNumCombogridInputContainer.combogrid('setValue',response.data.gameAreaId);
                                    Statistics.Shop.View.DataGrid.searchStartDateboxInputContainer.datebox('setValue',response.data.startDate);
                                    Statistics.Shop.View.DataGrid.searchEndDateboxInputContainer.datebox('setValue',response.data.endDate);
                                }
                        })
                }, 
                doExport: function() {

                        var operatorId = Statistics.Shop.View.DataGrid.operatorIdComboboxInputContainer.combobox('getValue');
                        var gameAreaId = Statistics.Shop.View.DataGrid.areaNumCombogridInputContainer.combogrid('getValues').toString();
                        var startDate = Statistics.Shop.View.DataGrid.searchStartDateboxInputContainer.datebox('getValue');
                        var endDate =  Statistics.Shop.View.DataGrid.searchEndDateboxInputContainer.datebox('getValue');

                                  var downUrl = "/index.php/Statistics/shop/export?operatorId="+ operatorId +"&gameAreaId="+gameAreaId+"&startDate="+startDate+"&endDate="+endDate
                                  window.location = downUrl;

				},

			},
		}, 
	},

	//限时抢购
	FlashSale: {
		init: function() {
			Language.getCurrLanguage();
			Utils.loadJavascriptFile('/application/views/libraries/component/' + language + '.js');
			Utils.loadJavascriptFile('/application/views/libraries/utils/' + language + '.js');
			Utils.loadJavascriptFile('/application/views/module/Statistics/' + language + '.js');
			Utils.initAjax();
			
			Statistics.FlashSale.View.init(); 
		},



		
		View: {
			dataGridPanelContainer: '',
			
			init: function() {
				Statistics.FlashSale.View.dataGridPanelContainer = $('#dataGridPanel #dataGrid');
				Statistics.FlashSale.View.DataGrid.init();
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
					Statistics.FlashSale.View.DataGrid.operatorIdComboboxLabelContainer = $('#dataGridPanel #toolbar #operatorIdComboboxLabel');
					Statistics.FlashSale.View.DataGrid.operatorIdComboboxInputContainer = $('#dataGridPanel #toolbar #operatorIdComboboxInput');
                    Statistics.FlashSale.View.DataGrid.areaNumCombogridLabelContainer = $('#dataGridPanel #toolbar #areaNumCombogridLabel');
					Statistics.FlashSale.View.DataGrid.areaNumCombogridInputContainer = $('#dataGridPanel #toolbar #areaNumCombogridInput');

                    Statistics.FlashSale.View.DataGrid.searchStartDateboxLabelContainer = $('#dataGridPanel #toolbar #searchStartDateboxLabel');
					Statistics.FlashSale.View.DataGrid.searchStartDateboxInputContainer = $('#dataGridPanel #toolbar #searchStartDateboxInput');
					Statistics.FlashSale.View.DataGrid.searchEndDateboxLabelContainer = $('#dataGridPanel #toolbar #searchEndDateboxLabel');
					Statistics.FlashSale.View.DataGrid.searchEndDateboxInputContainer = $('#dataGridPanel #toolbar #searchEndDateboxInput');
					Statistics.FlashSale.View.DataGrid.searchButtonContainer = $('#dataGridPanel #toolbar #searchButton');
                    Statistics.FlashSale.View.DataGrid.exportButtonContainer = $('#dataGridPanel #toolbar #exportButton');
					Statistics.FlashSale.View.DataGrid.create();
                    Statistics.FlashSale.View.DataGrid.showCurrSelectInfo();
				},
				
				create: function() {
					var width = $(document).width() - 40;
					var height = $(document).height() - 40;
					Statistics.FlashSale.View.dataGridPanelContainer.width(width);
					Statistics.FlashSale.View.dataGridPanelContainer.height(height); 
					Statistics.FlashSale.View.dataGridPanelContainer.datagrid({
						toolbar: '#toolbar',
						columns: [[
							{
								field: 'date',
								title: statisticsPrivilegeViewDataGridColumnTitle1,
								width: 100,
							},							
							{
								field: 'type', 
								title: statisticsFlashSaleViewDataGridColumnTitle2,
								width: 100,
							},
							{
								field: 'time', 
								title: statisticsSpecialViewDataGridColumnTitle2,
								width: 100,
							},
                            {
								field: 'amount',
								title: statisticsSpecialViewDataGridColumnTitle3,
								width: 100,
							},
							{
								field: 'value', 
								title: statisticsFlashSaleViewDataGridColumnTitle1,
								width: 100,
							},
							{
								field: 'gold',
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
						Statistics.FlashSale.View.DataGrid.operatorIdComboboxLabelContainer,
						Statistics.FlashSale.View.DataGrid.operatorIdComboboxInputContainer
					);
                    Component.Combogrid.AreaNum.create(
						Statistics.FlashSale.View.DataGrid.areaNumCombogridLabelContainer,
						Statistics.FlashSale.View.DataGrid.areaNumCombogridInputContainer
					);
					Component.Datebox.Start.create(
						Statistics.FlashSale.View.DataGrid.searchStartDateboxLabelContainer,
						Statistics.FlashSale.View.DataGrid.searchStartDateboxInputContainer
					);
                    Component.Datebox.End.create(
						Statistics.FlashSale.View.DataGrid.searchEndDateboxLabelContainer,
						Statistics.FlashSale.View.DataGrid.searchEndDateboxInputContainer
					);

					Statistics.FlashSale.View.DataGrid.searchButtonContainer.linkbutton({
						iconCls: 'icon-search',
						text: statisticsPrivilegeViewDataGridToolbarButtonText1,
					});
					Statistics.FlashSale.View.DataGrid.searchButtonContainer.bind(
						'click',
						Statistics.FlashSale.View.DataGrid.doSearch
					);
                    Statistics.FlashSale.View.DataGrid.exportButtonContainer.linkbutton({
						iconCls: 'icon-search',
						text: exportViewDataGridToolbarButtonText1,
					});
					Statistics.FlashSale.View.DataGrid.exportButtonContainer.bind(
						'click',
						Statistics.FlashSale.View.DataGrid.doExport 
					);

				},
				
				doSearch: function() {
                    var operatorId = Statistics.FlashSale.View.DataGrid.operatorIdComboboxInputContainer.combobox('getValue');
                    var gameAreaId = Statistics.FlashSale.View.DataGrid.areaNumCombogridInputContainer.combogrid('getValue');
					var searchStartDate = Statistics.FlashSale.View.DataGrid.searchStartDateboxInputContainer.datebox('getValue');
                    var searchEndDate = Statistics.FlashSale.View.DataGrid.searchEndDateboxInputContainer.datebox('getValue');
					
					Statistics.FlashSale.View.dataGridPanelContainer.datagrid({
						url: '/index.php/Statistics/flashSale/getListData',
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
                                    Statistics.FlashSale.View.DataGrid.operatorIdComboboxInputContainer.combobox('select',response.data.operatorId);
                                    Statistics.FlashSale.View.DataGrid.areaNumCombogridInputContainer.combogrid('setValue',response.data.gameAreaId);
                                    Statistics.FlashSale.View.DataGrid.searchStartDateboxInputContainer.datebox('setValue',response.data.startDate);
                                    Statistics.FlashSale.View.DataGrid.searchEndDateboxInputContainer.datebox('setValue',response.data.endDate);
                                }
                        })
                }, 
                doExport: function() {

                        var operatorId = Statistics.FlashSale.View.DataGrid.operatorIdComboboxInputContainer.combobox('getValue');
                        var gameAreaId = Statistics.FlashSale.View.DataGrid.areaNumCombogridInputContainer.combogrid('getValues').toString();
                        var startDate = Statistics.FlashSale.View.DataGrid.searchStartDateboxInputContainer.datebox('getValue');
                        var endDate =  Statistics.FlashSale.View.DataGrid.searchEndDateboxInputContainer.datebox('getValue');

                                  var downUrl = "/index.php/Statistics/flashSale/export?operatorId="+ operatorId +"&gameAreaId="+gameAreaId+"&startDate="+startDate+"&endDate="+endDate
                                  window.location = downUrl;

				},

			},
		}, 
	},

}