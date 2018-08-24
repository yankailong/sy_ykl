var Task = {
	Reward: {
		init: function() {
			Language.getCurrLanguage();
			Utils.loadJavascriptFile('/application/views/libraries/component/' + language + '.js');
			Utils.loadJavascriptFile('/application/views/libraries/utils/' + language + '.js');
			Utils.loadJavascriptFile('/application/views/module/Task/' + language + '.js');
			Utils.initAjax();
			
			Task.Reward.View.init();
		},
		
		View: {
			dataGridPanelContainer: '',
			
			init: function() {
				Task.Reward.View.dataGridPanelContainer = $('#dataGridPanel #dataGrid');
				Task.Reward.View.DataGrid.init();
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
					Task.Reward.View.DataGrid.operatorIdComboboxLabelContainer = $('#dataGridPanel #toolbar #operatorIdComboboxLabel');
					Task.Reward.View.DataGrid.operatorIdComboboxInputContainer = $('#dataGridPanel #toolbar #operatorIdComboboxInput');
                                        Task.Reward.View.DataGrid.areaNumCombogridLabelContainer = $('#dataGridPanel #toolbar #areaNumCombogridLabel');
					Task.Reward.View.DataGrid.areaNumCombogridInputContainer = $('#dataGridPanel #toolbar #areaNumCombogridInput');
                                        Task.Reward.View.DataGrid.searchStartDateboxLabelContainer = $('#dataGridPanel #toolbar #searchStartDateboxLabel');
					Task.Reward.View.DataGrid.searchStartDateboxInputContainer = $('#dataGridPanel #toolbar #searchStartDateboxInput');
					Task.Reward.View.DataGrid.searchEndDateboxLabelContainer = $('#dataGridPanel #toolbar #searchEndDateboxLabel');
					Task.Reward.View.DataGrid.searchEndDateboxInputContainer = $('#dataGridPanel #toolbar #searchEndDateboxInput');
					Task.Reward.View.DataGrid.searchButtonContainer = $('#dataGridPanel #toolbar #searchButton');
                                        Task.Reward.View.DataGrid.exportButtonContainer = $('#dataGridPanel #toolbar #exportButton');
					Task.Reward.View.DataGrid.create();
                                        Task.Reward.View.DataGrid.showCurrSelectInfo();
				},
				
				create: function() {
					var width = $(document).width() - 40;
					var height = $(document).height() - 40;
					Task.Reward.View.dataGridPanelContainer.width(width);
					Task.Reward.View.dataGridPanelContainer.height(height);
					Task.Reward.View.dataGridPanelContainer.datagrid({
						toolbar: '#toolbar',
						columns: [[
							{
								field: 'date',
								title: taskViewDataGridColumnTitle1,
								width: 100,
							},
							{
								field: 'taskCount',
								title: taskViewDataGridColumnTitle2,
								width: 100,
							},
							{
								field: 'login',
								title: taskViewDataGridColumnTitle3,
								width: 100,
							},
                                                        {
								field: 'join',
								title: taskViewDataGridColumnTitle4,
								width: 100,
							},
                                                        {
								field: 'joinRate',
								title: taskViewDataGridColumnTitle5,
								width: 100,
							},
                                                        {
								field: 'finishCount',
								title: taskViewDataGridColumnTitle6,
								width: 100,
							},
                                                        {
								field: 'rate',
								title: taskViewDataGridColumnTitle7,
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
						Task.Reward.View.DataGrid.operatorIdComboboxLabelContainer,
						Task.Reward.View.DataGrid.operatorIdComboboxInputContainer
					);
                                        Component.Combogrid.AreaNum.create(
						Task.Reward.View.DataGrid.areaNumCombogridLabelContainer,
						Task.Reward.View.DataGrid.areaNumCombogridInputContainer
					);
					Component.Datebox.Start.create(
						Task.Reward.View.DataGrid.searchStartDateboxLabelContainer,
						Task.Reward.View.DataGrid.searchStartDateboxInputContainer
					);
                                        Component.Datebox.End.create(
						Task.Reward.View.DataGrid.searchEndDateboxLabelContainer,
						Task.Reward.View.DataGrid.searchEndDateboxInputContainer
					);
					Task.Reward.View.DataGrid.searchButtonContainer.linkbutton({
						iconCls: 'icon-search',
						text: taskViewDataGridToolbarButtonText1,
					});
					Task.Reward.View.DataGrid.searchButtonContainer.bind(
						'click',
						Task.Reward.View.DataGrid.doSearch
					);
                                        Task.Reward.View.DataGrid.exportButtonContainer.linkbutton({
						iconCls: 'icon-search',
						text: exportViewDataGridToolbarButtonText1,
					});
					Task.Reward.View.DataGrid.exportButtonContainer.bind(
						'click',
						Task.Reward.View.DataGrid.doExport
					);
				},
				
				doSearch: function() {
                                        var operatorId = Task.Reward.View.DataGrid.operatorIdComboboxInputContainer.combobox('getValue');
                                        var gameAreaId = Task.Reward.View.DataGrid.areaNumCombogridInputContainer.combogrid('getValue');
					var searchStartDate = Task.Reward.View.DataGrid.searchStartDateboxInputContainer.datebox('getValue');
                                        var searchEndDate = Task.Reward.View.DataGrid.searchEndDateboxInputContainer.datebox('getValue');
					
					Task.Reward.View.dataGridPanelContainer.datagrid({
						url: '/index.php/Task/reward/getListData',
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
                                                    Task.Reward.View.DataGrid.operatorIdComboboxInputContainer.combobox('select',response.data.operatorId);
                                                    Task.Reward.View.DataGrid.areaNumCombogridInputContainer.combogrid('setValue',response.data.gameAreaId);
                                                    Task.Reward.View.DataGrid.searchStartDateboxInputContainer.datebox('setValue',response.data.startDate);
                                                    Task.Reward.View.DataGrid.searchEndDateboxInputContainer.datebox('setValue',response.data.endDate);
                                                }
                                        })
                                }, 
                                doExport: function() {

                                        var operatorId = Task.Reward.View.DataGrid.operatorIdComboboxInputContainer.combobox('getValue');
                                        var gameAreaId = Task.Reward.View.DataGrid.areaNumCombogridInputContainer.combogrid('getValues').toString();
                                        var startDate = Task.Reward.View.DataGrid.searchStartDateboxInputContainer.datebox('getValue');
                                        var endDate =  Task.Reward.View.DataGrid.searchEndDateboxInputContainer.datebox('getValue');

                                                  var downUrl = "/index.php/Task/reward/export?operatorId="+ operatorId +"&gameAreaId="+gameAreaId+"&startDate="+startDate+"&endDate="+endDate
                                                  window.location = downUrl;

				},

			},
		},
	},
    Power: {
		init: function() {
			Language.getCurrLanguage();
			Utils.loadJavascriptFile('/application/views/libraries/component/' + language + '.js');
			Utils.loadJavascriptFile('/application/views/libraries/utils/' + language + '.js');
			Utils.loadJavascriptFile('/application/views/module/Task/' + language + '.js');
			Utils.initAjax();
			
			Task.Power.View.init();
		},
		
		View: {
			dataGridPanelContainer: '',
			
			init: function() {
				Task.Power.View.dataGridPanelContainer = $('#dataGridPanel #dataGrid');
				Task.Power.View.DataGrid.init();
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
					Task.Power.View.DataGrid.operatorIdComboboxLabelContainer = $('#dataGridPanel #toolbar #operatorIdComboboxLabel');
					Task.Power.View.DataGrid.operatorIdComboboxInputContainer = $('#dataGridPanel #toolbar #operatorIdComboboxInput');
                                        Task.Power.View.DataGrid.areaNumCombogridLabelContainer = $('#dataGridPanel #toolbar #areaNumCombogridLabel');
					Task.Power.View.DataGrid.areaNumCombogridInputContainer = $('#dataGridPanel #toolbar #areaNumCombogridInput');
                                        Task.Power.View.DataGrid.searchStartDateboxLabelContainer = $('#dataGridPanel #toolbar #searchStartDateboxLabel');
					Task.Power.View.DataGrid.searchStartDateboxInputContainer = $('#dataGridPanel #toolbar #searchStartDateboxInput');
					Task.Power.View.DataGrid.searchEndDateboxLabelContainer = $('#dataGridPanel #toolbar #searchEndDateboxLabel');
					Task.Power.View.DataGrid.searchEndDateboxInputContainer = $('#dataGridPanel #toolbar #searchEndDateboxInput');
					Task.Power.View.DataGrid.searchButtonContainer = $('#dataGridPanel #toolbar #searchButton');
                                        Task.Power.View.DataGrid.exportButtonContainer = $('#dataGridPanel #toolbar #exportButton');
					Task.Power.View.DataGrid.create();
                                        Task.Power.View.DataGrid.showCurrSelectInfo();
				},
				
				create: function() {
					var width = $(document).width() - 40;
					var height = $(document).height() - 40;
					Task.Power.View.dataGridPanelContainer.width(width);
					Task.Power.View.dataGridPanelContainer.height(height);
					Task.Power.View.dataGridPanelContainer.datagrid({
						toolbar: '#toolbar',
						columns: [[
							{
								field: 'date',
								title: taskViewDataGridColumnTitle1,
								width: 100,
							},
							{
								field: 'taskCount',
								title: taskViewDataGridColumnTitle2,
								width: 100,
							},
							{
								field: 'login',
								title: taskViewDataGridColumnTitle3,
								width: 100,
							},
                                                        {
								field: 'join',
								title: taskViewDataGridColumnTitle4,
								width: 100,
							},
                                                        {
								field: 'joinRate',
								title: taskViewDataGridColumnTitle5,
								width: 100,
							},
                                                        {
								field: 'finishCount',
								title: taskViewDataGridColumnTitle6,
								width: 100,
							},
                                                        {
								field: 'rate',
								title: taskViewDataGridColumnTitle7,
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
						Task.Power.View.DataGrid.operatorIdComboboxLabelContainer,
						Task.Power.View.DataGrid.operatorIdComboboxInputContainer
					);
                                        Component.Combogrid.AreaNum.create(
						Task.Power.View.DataGrid.areaNumCombogridLabelContainer,
						Task.Power.View.DataGrid.areaNumCombogridInputContainer
					);
					Component.Datebox.Start.create(
						Task.Power.View.DataGrid.searchStartDateboxLabelContainer,
						Task.Power.View.DataGrid.searchStartDateboxInputContainer
					);
                                        Component.Datebox.End.create(
						Task.Power.View.DataGrid.searchEndDateboxLabelContainer,
						Task.Power.View.DataGrid.searchEndDateboxInputContainer
					);
					Task.Power.View.DataGrid.searchButtonContainer.linkbutton({
						iconCls: 'icon-search',
						text: taskViewDataGridToolbarButtonText1,
					});
					Task.Power.View.DataGrid.searchButtonContainer.bind(
						'click',
						Task.Power.View.DataGrid.doSearch
					);
                                        Task.Power.View.DataGrid.exportButtonContainer.linkbutton({
						iconCls: 'icon-search',
						text: exportViewDataGridToolbarButtonText1,
					});
					Task.Power.View.DataGrid.exportButtonContainer.bind(
						'click',
						Task.Power.View.DataGrid.doExport
					);
				},
				
				doSearch: function() {
                                        var operatorId = Task.Power.View.DataGrid.operatorIdComboboxInputContainer.combobox('getValue');
                                        var gameAreaId = Task.Power.View.DataGrid.areaNumCombogridInputContainer.combogrid('getValue');
					var searchStartDate = Task.Power.View.DataGrid.searchStartDateboxInputContainer.datebox('getValue');
                                        var searchEndDate = Task.Power.View.DataGrid.searchEndDateboxInputContainer.datebox('getValue');
					
					Task.Power.View.dataGridPanelContainer.datagrid({
						url: '/index.php/Task/power/getListData',
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
                                                    Task.Power.View.DataGrid.operatorIdComboboxInputContainer.combobox('select',response.data.operatorId);
                                                    Task.Power.View.DataGrid.areaNumCombogridInputContainer.combogrid('setValue',response.data.gameAreaId);
                                                    Task.Power.View.DataGrid.searchStartDateboxInputContainer.datebox('setValue',response.data.startDate);
                                                    Task.Power.View.DataGrid.searchEndDateboxInputContainer.datebox('setValue',response.data.endDate);
                                                }
                                        })
                                }, 
                                doExport: function() {

                                        var operatorId = Task.Power.View.DataGrid.operatorIdComboboxInputContainer.combobox('getValue');
                                        var gameAreaId = Task.Power.View.DataGrid.areaNumCombogridInputContainer.combogrid('getValues').toString();
                                        var startDate = Task.Power.View.DataGrid.searchStartDateboxInputContainer.datebox('getValue');
                                        var endDate =  Task.Power.View.DataGrid.searchEndDateboxInputContainer.datebox('getValue');

                                                  var downUrl = "/index.php/Task/power/export?operatorId="+ operatorId +"&gameAreaId="+gameAreaId+"&startDate="+startDate+"&endDate="+endDate
                                                  window.location = downUrl;

				},

			},
		},
	},
	Demons: {
		init: function() {
			Language.getCurrLanguage();
			Utils.loadJavascriptFile('/application/views/libraries/component/' + language + '.js');
			Utils.loadJavascriptFile('/application/views/libraries/utils/' + language + '.js');
			Utils.loadJavascriptFile('/application/views/module/Task/' + language + '.js');
			Utils.initAjax();
			
			Task.Demons.View.init();
		},
		
		View: {
			dataGridPanelContainer: '',
			
			init: function() {
				Task.Demons.View.dataGridPanelContainer = $('#dataGridPanel #dataGrid');
				Task.Demons.View.DataGrid.init();
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
					Task.Demons.View.DataGrid.operatorIdComboboxLabelContainer = $('#dataGridPanel #toolbar #operatorIdComboboxLabel');
					Task.Demons.View.DataGrid.operatorIdComboboxInputContainer = $('#dataGridPanel #toolbar #operatorIdComboboxInput');
                                        Task.Demons.View.DataGrid.areaNumCombogridLabelContainer = $('#dataGridPanel #toolbar #areaNumCombogridLabel');
					Task.Demons.View.DataGrid.areaNumCombogridInputContainer = $('#dataGridPanel #toolbar #areaNumCombogridInput');
                                        Task.Demons.View.DataGrid.searchStartDateboxLabelContainer = $('#dataGridPanel #toolbar #searchStartDateboxLabel');
					Task.Demons.View.DataGrid.searchStartDateboxInputContainer = $('#dataGridPanel #toolbar #searchStartDateboxInput');
					Task.Demons.View.DataGrid.searchEndDateboxLabelContainer = $('#dataGridPanel #toolbar #searchEndDateboxLabel');
					Task.Demons.View.DataGrid.searchEndDateboxInputContainer = $('#dataGridPanel #toolbar #searchEndDateboxInput');
					Task.Demons.View.DataGrid.searchButtonContainer = $('#dataGridPanel #toolbar #searchButton');
                                        Task.Demons.View.DataGrid.exportButtonContainer = $('#dataGridPanel #toolbar #exportButton');
					Task.Demons.View.DataGrid.create();
                                        Task.Demons.View.DataGrid.showCurrSelectInfo();
				},
				
				create: function() {
					var width = $(document).width() - 40;
					var height = $(document).height() - 40;
					Task.Demons.View.dataGridPanelContainer.width(width);
					Task.Demons.View.dataGridPanelContainer.height(height);
					Task.Demons.View.dataGridPanelContainer.datagrid({
						toolbar: '#toolbar',
						columns: [[
							{
								field: 'date',
								title: taskViewDataGridColumnTitle1,
								width: 100,
							},
							{
								field: 'taskCount',
								title: taskViewDataGridColumnTitle2,
								width: 100,
							},
							{
								field: 'login',
								title: taskViewDataGridColumnTitle3,
								width: 100,
							},
                                                        {
								field: 'join',
								title: taskViewDataGridColumnTitle4,
								width: 100,
							},
                                                        {
								field: 'joinRate',
								title: taskViewDataGridColumnTitle5,
								width: 100,
							},
                                                        {
								field: 'finishCount',
								title: taskViewDataGridColumnTitle6,
								width: 100,
							},
                                                        {
								field: 'rate',
								title: taskViewDataGridColumnTitle7,
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
						Task.Demons.View.DataGrid.operatorIdComboboxLabelContainer,
						Task.Demons.View.DataGrid.operatorIdComboboxInputContainer
					);
                                        Component.Combogrid.AreaNum.create(
						Task.Demons.View.DataGrid.areaNumCombogridLabelContainer,
						Task.Demons.View.DataGrid.areaNumCombogridInputContainer
					);
					Component.Datebox.Start.create(
						Task.Demons.View.DataGrid.searchStartDateboxLabelContainer,
						Task.Demons.View.DataGrid.searchStartDateboxInputContainer
					);
                                        Component.Datebox.End.create(
						Task.Demons.View.DataGrid.searchEndDateboxLabelContainer,
						Task.Demons.View.DataGrid.searchEndDateboxInputContainer
					);
					Task.Demons.View.DataGrid.searchButtonContainer.linkbutton({
						iconCls: 'icon-search',
						text: taskViewDataGridToolbarButtonText1,
					});
					Task.Demons.View.DataGrid.searchButtonContainer.bind(
						'click',
						Task.Demons.View.DataGrid.doSearch
					);
                                        Task.Demons.View.DataGrid.exportButtonContainer.linkbutton({
						iconCls: 'icon-search',
						text: exportViewDataGridToolbarButtonText1,
					});
					Task.Demons.View.DataGrid.exportButtonContainer.bind(
						'click',
						Task.Demons.View.DataGrid.doExport
					);
				},
				
				doSearch: function() {
                                        var operatorId = Task.Demons.View.DataGrid.operatorIdComboboxInputContainer.combobox('getValue');
                                        var gameAreaId = Task.Demons.View.DataGrid.areaNumCombogridInputContainer.combogrid('getValue');
					var searchStartDate = Task.Demons.View.DataGrid.searchStartDateboxInputContainer.datebox('getValue');
                                        var searchEndDate = Task.Demons.View.DataGrid.searchEndDateboxInputContainer.datebox('getValue');
					
					Task.Demons.View.dataGridPanelContainer.datagrid({
						url: '/index.php/Task/demons/getListData',
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
                                                    Task.Demons.View.DataGrid.operatorIdComboboxInputContainer.combobox('select',response.data.operatorId);
                                                    Task.Demons.View.DataGrid.areaNumCombogridInputContainer.combogrid('setValue',response.data.gameAreaId);
                                                    Task.Demons.View.DataGrid.searchStartDateboxInputContainer.datebox('setValue',response.data.startDate);
                                                    Task.Demons.View.DataGrid.searchEndDateboxInputContainer.datebox('setValue',response.data.endDate);
                                                }
                                        })
                                }, 
                                doExport: function() {

                                        var operatorId = Task.Demons.View.DataGrid.operatorIdComboboxInputContainer.combobox('getValue');
                                        var gameAreaId = Task.Demons.View.DataGrid.areaNumCombogridInputContainer.combogrid('getValues').toString();
                                        var startDate = Task.Demons.View.DataGrid.searchStartDateboxInputContainer.datebox('getValue');
                                        var endDate =  Task.Demons.View.DataGrid.searchEndDateboxInputContainer.datebox('getValue');

                                                  var downUrl = "/index.php/Task/demons/export?operatorId="+ operatorId +"&gameAreaId="+gameAreaId+"&startDate="+startDate+"&endDate="+endDate
                                                  window.location = downUrl;

				},

			},
		},
	},
        Recovery: {
		init: function() {
			Language.getCurrLanguage();
			Utils.loadJavascriptFile('/application/views/libraries/component/' + language + '.js');
			Utils.loadJavascriptFile('/application/views/libraries/utils/' + language + '.js');
			Utils.loadJavascriptFile('/application/views/module/Task/' + language + '.js');
			Utils.initAjax();
			
			Task.Recovery.View.init();
		},
		
		View: {
			dataGridPanelContainer: '',
			
			init: function() {
				Task.Recovery.View.dataGridPanelContainer = $('#dataGridPanel #dataGrid');
				Task.Recovery.View.DataGrid.init();
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
					Task.Recovery.View.DataGrid.operatorIdComboboxLabelContainer = $('#dataGridPanel #toolbar #operatorIdComboboxLabel');
					Task.Recovery.View.DataGrid.operatorIdComboboxInputContainer = $('#dataGridPanel #toolbar #operatorIdComboboxInput');
                                        Task.Recovery.View.DataGrid.areaNumCombogridLabelContainer = $('#dataGridPanel #toolbar #areaNumCombogridLabel');
					Task.Recovery.View.DataGrid.areaNumCombogridInputContainer = $('#dataGridPanel #toolbar #areaNumCombogridInput');
                                        Task.Recovery.View.DataGrid.searchStartDateboxLabelContainer = $('#dataGridPanel #toolbar #searchStartDateboxLabel');
					Task.Recovery.View.DataGrid.searchStartDateboxInputContainer = $('#dataGridPanel #toolbar #searchStartDateboxInput');
					Task.Recovery.View.DataGrid.searchEndDateboxLabelContainer = $('#dataGridPanel #toolbar #searchEndDateboxLabel');
					Task.Recovery.View.DataGrid.searchEndDateboxInputContainer = $('#dataGridPanel #toolbar #searchEndDateboxInput');
					Task.Recovery.View.DataGrid.searchButtonContainer = $('#dataGridPanel #toolbar #searchButton');
                                        Task.Recovery.View.DataGrid.exportButtonContainer = $('#dataGridPanel #toolbar #exportButton');
					Task.Recovery.View.DataGrid.create();
                                        Task.Recovery.View.DataGrid.showCurrSelectInfo();
				},
				
				create: function() {
					var width = $(document).width() - 40;
					var height = $(document).height() - 40;
					Task.Recovery.View.dataGridPanelContainer.width(width);
					Task.Recovery.View.dataGridPanelContainer.height(height);
					Task.Recovery.View.dataGridPanelContainer.datagrid({
						toolbar: '#toolbar',
						columns: [[
							{
								field: 'date',
								title: taskViewDataGridColumnTitle1,
								width: 100,
							},
							{
								field: 'taskCount',
								title: taskViewDataGridColumnTitle2,
								width: 100,
							},
							{
								field: 'login',
								title: taskViewDataGridColumnTitle3,
								width: 100,
							},
                                                        {
								field: 'join',
								title: taskViewDataGridColumnTitle4,
								width: 100,
							},
                                                        {
								field: 'joinRate',
								title: taskViewDataGridColumnTitle5,
								width: 100,
							},
                                                        {
								field: 'finishCount',
								title: taskViewDataGridColumnTitle6,
								width: 100,
							},
                                                        {
								field: 'rate',
								title: taskViewDataGridColumnTitle7,
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
						Task.Recovery.View.DataGrid.operatorIdComboboxLabelContainer,
						Task.Recovery.View.DataGrid.operatorIdComboboxInputContainer
					);
                                        Component.Combogrid.AreaNum.create(
						Task.Recovery.View.DataGrid.areaNumCombogridLabelContainer,
						Task.Recovery.View.DataGrid.areaNumCombogridInputContainer
					);
					Component.Datebox.Start.create(
						Task.Recovery.View.DataGrid.searchStartDateboxLabelContainer,
						Task.Recovery.View.DataGrid.searchStartDateboxInputContainer
					);
                                        Component.Datebox.End.create(
						Task.Recovery.View.DataGrid.searchEndDateboxLabelContainer,
						Task.Recovery.View.DataGrid.searchEndDateboxInputContainer
					);
					Task.Recovery.View.DataGrid.searchButtonContainer.linkbutton({
						iconCls: 'icon-search',
						text: taskViewDataGridToolbarButtonText1,
					});
					Task.Recovery.View.DataGrid.searchButtonContainer.bind(
						'click',
						Task.Recovery.View.DataGrid.doSearch
					);
                                        Task.Recovery.View.DataGrid.exportButtonContainer.linkbutton({
						iconCls: 'icon-search',
						text: exportViewDataGridToolbarButtonText1,
					});
					Task.Recovery.View.DataGrid.exportButtonContainer.bind(
						'click',
						Task.Recovery.View.DataGrid.doExport
					);
				},
				
				doSearch: function() {
                                        var operatorId = Task.Recovery.View.DataGrid.operatorIdComboboxInputContainer.combobox('getValue');
                                        var gameAreaId = Task.Recovery.View.DataGrid.areaNumCombogridInputContainer.combogrid('getValue');
					var searchStartDate = Task.Recovery.View.DataGrid.searchStartDateboxInputContainer.datebox('getValue');
                                        var searchEndDate = Task.Recovery.View.DataGrid.searchEndDateboxInputContainer.datebox('getValue');
					
					Task.Recovery.View.dataGridPanelContainer.datagrid({
						url: '/index.php/Task/recovery/getListData',
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
                                                    Task.Recovery.View.DataGrid.operatorIdComboboxInputContainer.combobox('select',response.data.operatorId);
                                                    Task.Recovery.View.DataGrid.areaNumCombogridInputContainer.combogrid('setValue',response.data.gameAreaId);
                                                    Task.Recovery.View.DataGrid.searchStartDateboxInputContainer.datebox('setValue',response.data.startDate);
                                                    Task.Recovery.View.DataGrid.searchEndDateboxInputContainer.datebox('setValue',response.data.endDate);
                                                }
                                        })
                                }, 
                                doExport: function() {
//                                        var url = "/index.php/Currency/first/export";
                                        var operatorId = Task.Recovery.View.DataGrid.operatorIdComboboxInputContainer.combobox('getValue');
                                        var gameAreaId = Task.Recovery.View.DataGrid.areaNumCombogridInputContainer.combogrid('getValues').toString();
                                        var startDate = Task.Recovery.View.DataGrid.searchStartDateboxInputContainer.datebox('getValue');
                                        var endDate =  Task.Recovery.View.DataGrid.searchEndDateboxInputContainer.datebox('getValue');
//                                        $.ajax({
//                                              url: url,
//                                              data: {
//                                                    operatorId:operatorId,
//                                                    gameAreaId:gameAreaId,
//                                                    startDate:startDate,
//                                                    endDate:endDate,
//                                              },
//                                              success: function () {
                                                  var downUrl = "/index.php/Task/recovery/export?operatorId="+ operatorId +"&gameAreaId="+gameAreaId+"&startDate="+startDate+"&endDate="+endDate
                                                  window.location = downUrl;
//                                              }
//                                        });
				},

			},
		},
	},
        Transport: {
		init: function() {
			Language.getCurrLanguage();
			Utils.loadJavascriptFile('/application/views/libraries/component/' + language + '.js');
			Utils.loadJavascriptFile('/application/views/libraries/utils/' + language + '.js');
			Utils.loadJavascriptFile('/application/views/module/Task/' + language + '.js');
			Utils.initAjax();
			
			Task.Transport.View.init();
		},
		
		View: {
			dataGridPanelContainer: '',
			
			init: function() {
				Task.Transport.View.dataGridPanelContainer = $('#dataGridPanel #dataGrid');
				Task.Transport.View.DataGrid.init();
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
					Task.Transport.View.DataGrid.operatorIdComboboxLabelContainer = $('#dataGridPanel #toolbar #operatorIdComboboxLabel');
					Task.Transport.View.DataGrid.operatorIdComboboxInputContainer = $('#dataGridPanel #toolbar #operatorIdComboboxInput');
                                        Task.Transport.View.DataGrid.areaNumCombogridLabelContainer = $('#dataGridPanel #toolbar #areaNumCombogridLabel');
					Task.Transport.View.DataGrid.areaNumCombogridInputContainer = $('#dataGridPanel #toolbar #areaNumCombogridInput');
                                        Task.Transport.View.DataGrid.searchStartDateboxLabelContainer = $('#dataGridPanel #toolbar #searchStartDateboxLabel');
					Task.Transport.View.DataGrid.searchStartDateboxInputContainer = $('#dataGridPanel #toolbar #searchStartDateboxInput');
					Task.Transport.View.DataGrid.searchEndDateboxLabelContainer = $('#dataGridPanel #toolbar #searchEndDateboxLabel');
					Task.Transport.View.DataGrid.searchEndDateboxInputContainer = $('#dataGridPanel #toolbar #searchEndDateboxInput');
					Task.Transport.View.DataGrid.searchButtonContainer = $('#dataGridPanel #toolbar #searchButton');
                                        Task.Transport.View.DataGrid.exportButtonContainer = $('#dataGridPanel #toolbar #exportButton');
					Task.Transport.View.DataGrid.create();
                                        Task.Transport.View.DataGrid.showCurrSelectInfo();
				},
				
				create: function() {
					var width = $(document).width() - 40;
					var height = $(document).height() - 40;
					Task.Transport.View.dataGridPanelContainer.width(width);
					Task.Transport.View.dataGridPanelContainer.height(height);
					Task.Transport.View.dataGridPanelContainer.datagrid({
						toolbar: '#toolbar',
						columns: [[
							{
								field: 'date',
								title: taskViewDataGridColumnTitle1,
								width: 100,
							},
							{
								field: 'taskCount',
								title: taskViewDataGridColumnTitle2,
								width: 100,
							},
							{
								field: 'login',
								title: taskViewDataGridColumnTitle3,
								width: 100,
							},
                                                        {
								field: 'join',
								title: taskViewDataGridColumnTitle4,
								width: 100,
							},
                                                        {
								field: 'joinRate',
								title: taskViewDataGridColumnTitle5,
								width: 100,
							},
                                                        {
								field: 'finishCount',
								title: taskViewDataGridColumnTitle6,
								width: 100,
							},
                                                        {
								field: 'rate',
								title: taskViewDataGridColumnTitle7,
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
						Task.Transport.View.DataGrid.operatorIdComboboxLabelContainer,
						Task.Transport.View.DataGrid.operatorIdComboboxInputContainer
					);
                                        Component.Combogrid.AreaNum.create(
						Task.Transport.View.DataGrid.areaNumCombogridLabelContainer,
						Task.Transport.View.DataGrid.areaNumCombogridInputContainer
					);
					Component.Datebox.Start.create(
						Task.Transport.View.DataGrid.searchStartDateboxLabelContainer,
						Task.Transport.View.DataGrid.searchStartDateboxInputContainer
					);
                                        Component.Datebox.End.create(
						Task.Transport.View.DataGrid.searchEndDateboxLabelContainer,
						Task.Transport.View.DataGrid.searchEndDateboxInputContainer
					);
					Task.Transport.View.DataGrid.searchButtonContainer.linkbutton({
						iconCls: 'icon-search',
						text: taskViewDataGridToolbarButtonText1,
					});
					Task.Transport.View.DataGrid.searchButtonContainer.bind(
						'click',
						Task.Transport.View.DataGrid.doSearch
					);
                                        Task.Transport.View.DataGrid.exportButtonContainer.linkbutton({
						iconCls: 'icon-search',
						text: exportViewDataGridToolbarButtonText1,
					});
					Task.Transport.View.DataGrid.exportButtonContainer.bind(
						'click',
						Task.Transport.View.DataGrid.doExport
					);
				},
				
				doSearch: function() {
                                        var operatorId = Task.Transport.View.DataGrid.operatorIdComboboxInputContainer.combobox('getValue');
                                        var gameAreaId = Task.Transport.View.DataGrid.areaNumCombogridInputContainer.combogrid('getValue');
					var searchStartDate = Task.Transport.View.DataGrid.searchStartDateboxInputContainer.datebox('getValue');
                                        var searchEndDate = Task.Transport.View.DataGrid.searchEndDateboxInputContainer.datebox('getValue');
					
					Task.Transport.View.dataGridPanelContainer.datagrid({
						url: '/index.php/Task/transport/getListData',
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
                                                    Task.Transport.View.DataGrid.operatorIdComboboxInputContainer.combobox('select',response.data.operatorId);
                                                    Task.Transport.View.DataGrid.areaNumCombogridInputContainer.combogrid('setValue',response.data.gameAreaId);
                                                    Task.Transport.View.DataGrid.searchStartDateboxInputContainer.datebox('setValue',response.data.startDate);
                                                    Task.Transport.View.DataGrid.searchEndDateboxInputContainer.datebox('setValue',response.data.endDate);
                                                }
                                        })
                                }, 
                                doExport: function() {
//                                        var url = "/index.php/Currency/first/export";
                                        var operatorId = Task.Transport.View.DataGrid.operatorIdComboboxInputContainer.combobox('getValue');
                                        var gameAreaId = Task.Transport.View.DataGrid.areaNumCombogridInputContainer.combogrid('getValues').toString();
                                        var startDate = Task.Transport.View.DataGrid.searchStartDateboxInputContainer.datebox('getValue');
                                        var endDate =  Task.Transport.View.DataGrid.searchEndDateboxInputContainer.datebox('getValue');
//                                        $.ajax({
//                                              url: url,
//                                              data: {
//                                                    operatorId:operatorId,
//                                                    gameAreaId:gameAreaId,
//                                                    startDate:startDate,
//                                                    endDate:endDate,
//                                              },
//                                              success: function () {
                                                  var downUrl = "/index.php/Task/transport/export?operatorId="+ operatorId +"&gameAreaId="+gameAreaId+"&startDate="+startDate+"&endDate="+endDate
                                                  window.location = downUrl;
//                                              }
//                                        });
				},

			},
		},
	},
        SpaceTime: {
		init: function() {
			Language.getCurrLanguage();
			Utils.loadJavascriptFile('/application/views/libraries/component/' + language + '.js');
			Utils.loadJavascriptFile('/application/views/libraries/utils/' + language + '.js');
			Utils.loadJavascriptFile('/application/views/module/Task/' + language + '.js');
			Utils.initAjax();
			
			Task.SpaceTime.View.init();
		},
		
		View: {
			dataGridPanelContainer: '',
			
			init: function() {
				Task.SpaceTime.View.dataGridPanelContainer = $('#dataGridPanel #dataGrid');
				Task.SpaceTime.View.DataGrid.init();
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
					Task.SpaceTime.View.DataGrid.operatorIdComboboxLabelContainer = $('#dataGridPanel #toolbar #operatorIdComboboxLabel');
					Task.SpaceTime.View.DataGrid.operatorIdComboboxInputContainer = $('#dataGridPanel #toolbar #operatorIdComboboxInput');
                                        Task.SpaceTime.View.DataGrid.areaNumCombogridLabelContainer = $('#dataGridPanel #toolbar #areaNumCombogridLabel');
					Task.SpaceTime.View.DataGrid.areaNumCombogridInputContainer = $('#dataGridPanel #toolbar #areaNumCombogridInput');
                                        Task.SpaceTime.View.DataGrid.searchStartDateboxLabelContainer = $('#dataGridPanel #toolbar #searchStartDateboxLabel');
					Task.SpaceTime.View.DataGrid.searchStartDateboxInputContainer = $('#dataGridPanel #toolbar #searchStartDateboxInput');
					Task.SpaceTime.View.DataGrid.searchEndDateboxLabelContainer = $('#dataGridPanel #toolbar #searchEndDateboxLabel');
					Task.SpaceTime.View.DataGrid.searchEndDateboxInputContainer = $('#dataGridPanel #toolbar #searchEndDateboxInput');
					Task.SpaceTime.View.DataGrid.searchButtonContainer = $('#dataGridPanel #toolbar #searchButton');
                                        Task.SpaceTime.View.DataGrid.exportButtonContainer = $('#dataGridPanel #toolbar #exportButton');
					Task.SpaceTime.View.DataGrid.create();
                                        Task.SpaceTime.View.DataGrid.showCurrSelectInfo();
				},
				
				create: function() {
					var width = $(document).width() - 40;
					var height = $(document).height() - 40;
					Task.SpaceTime.View.dataGridPanelContainer.width(width);
					Task.SpaceTime.View.dataGridPanelContainer.height(height);
					Task.SpaceTime.View.dataGridPanelContainer.datagrid({
						toolbar: '#toolbar',
						columns: [[
							{
								field: 'date',
								title: taskViewDataGridColumnTitle1,
								width: 100,
							},
							{
								field: 'enter',
								title: taskSpaceTimeViewDataGridColumnTitle2,
								width: 100,
							},
							{
								field: 'clearance',
								title: taskSpaceTimeViewDataGridColumnTitle3,
								width: 100,
							},
                                                        {
								field: 'clearanceRate',
								title: taskSpaceTimeViewDataGridColumnTitle4,
								width: 100,
							},
                                                        {
								field: 'join',
								title: taskSpaceTimeViewDataGridColumnTitle5,
								width: 100,
							},
                                                        {
								field: 'allClearance',
								title: taskSpaceTimeViewDataGridColumnTitle6,
								width: 100,
							},
                                                        {
								field: 'allClearanceRate',
								title: taskSpaceTimeViewDataGridColumnTitle7,
								width: 100,
							},
                                                        {
								field: 'login',
								title: taskSpaceTimeViewDataGridColumnTitle8,
								width: 100,
							},
                                                        {
								field: 'rate',
								title: taskSpaceTimeViewDataGridColumnTitle9,
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
						Task.SpaceTime.View.DataGrid.operatorIdComboboxLabelContainer,
						Task.SpaceTime.View.DataGrid.operatorIdComboboxInputContainer
					);
                                        Component.Combogrid.AreaNum.create(
						Task.SpaceTime.View.DataGrid.areaNumCombogridLabelContainer,
						Task.SpaceTime.View.DataGrid.areaNumCombogridInputContainer
					);
					Component.Datebox.Start.create(
						Task.SpaceTime.View.DataGrid.searchStartDateboxLabelContainer,
						Task.SpaceTime.View.DataGrid.searchStartDateboxInputContainer
					);
                                        Component.Datebox.End.create(
						Task.SpaceTime.View.DataGrid.searchEndDateboxLabelContainer,
						Task.SpaceTime.View.DataGrid.searchEndDateboxInputContainer
					);
					Task.SpaceTime.View.DataGrid.searchButtonContainer.linkbutton({
						iconCls: 'icon-search',
						text: taskViewDataGridToolbarButtonText1,
					});
					Task.SpaceTime.View.DataGrid.searchButtonContainer.bind(
						'click',
						Task.SpaceTime.View.DataGrid.doSearch
					);
                                        Task.SpaceTime.View.DataGrid.exportButtonContainer.linkbutton({
						iconCls: 'icon-search',
						text: exportViewDataGridToolbarButtonText1,
					});
					Task.SpaceTime.View.DataGrid.exportButtonContainer.bind(
						'click',
						Task.SpaceTime.View.DataGrid.doExport
					);
				},
				
				doSearch: function() {
                                        var operatorId = Task.SpaceTime.View.DataGrid.operatorIdComboboxInputContainer.combobox('getValue');
                                        var gameAreaId = Task.SpaceTime.View.DataGrid.areaNumCombogridInputContainer.combogrid('getValue');
					var searchStartDate = Task.SpaceTime.View.DataGrid.searchStartDateboxInputContainer.datebox('getValue');
                                        var searchEndDate = Task.SpaceTime.View.DataGrid.searchEndDateboxInputContainer.datebox('getValue');
					
					Task.SpaceTime.View.dataGridPanelContainer.datagrid({
						url: '/index.php/Task/spaceTime/getListData',
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
                                                    Task.SpaceTime.View.DataGrid.operatorIdComboboxInputContainer.combobox('select',response.data.operatorId);
                                                    Task.SpaceTime.View.DataGrid.areaNumCombogridInputContainer.combogrid('setValue',response.data.gameAreaId);
                                                    Task.SpaceTime.View.DataGrid.searchStartDateboxInputContainer.datebox('setValue',response.data.startDate);
                                                    Task.SpaceTime.View.DataGrid.searchEndDateboxInputContainer.datebox('setValue',response.data.endDate);
                                                }
                                        })
                                }, 
                                doExport: function() {
//                                        var url = "/index.php/Currency/first/export";
                                        var operatorId = Task.SpaceTime.View.DataGrid.operatorIdComboboxInputContainer.combobox('getValue');
                                        var gameAreaId = Task.SpaceTime.View.DataGrid.areaNumCombogridInputContainer.combogrid('getValues').toString();
                                        var startDate = Task.SpaceTime.View.DataGrid.searchStartDateboxInputContainer.datebox('getValue');
                                        var endDate =  Task.SpaceTime.View.DataGrid.searchEndDateboxInputContainer.datebox('getValue');
//                                        $.ajax({
//                                              url: url,
//                                              data: {
//                                                    operatorId:operatorId,
//                                                    gameAreaId:gameAreaId,
//                                                    startDate:startDate,
//                                                    endDate:endDate,
//                                              },
//                                              success: function () {
                                                  var downUrl = "/index.php/Task/spaceTime/export?operatorId="+ operatorId +"&gameAreaId="+gameAreaId+"&startDate="+startDate+"&endDate="+endDate
                                                  window.location = downUrl;
//                                              }
//                                        });
				},

			},
		},
	},
        Map: {
		init: function() {
			Language.getCurrLanguage();
			Utils.loadJavascriptFile('/application/views/libraries/component/' + language + '.js');
			Utils.loadJavascriptFile('/application/views/libraries/utils/' + language + '.js');
			Utils.loadJavascriptFile('/application/views/module/Task/' + language + '.js');
			Utils.initAjax();
			
			Task.Map.View.init();
		},
		
		View: {
			dataGridPanelContainer: '',
			
			init: function() {
				Task.Map.View.dataGridPanelContainer = $('#dataGridPanel #dataGrid');
				Task.Map.View.DataGrid.init();
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
					Task.Map.View.DataGrid.operatorIdComboboxLabelContainer = $('#dataGridPanel #toolbar #operatorIdComboboxLabel');
					Task.Map.View.DataGrid.operatorIdComboboxInputContainer = $('#dataGridPanel #toolbar #operatorIdComboboxInput');
                                        Task.Map.View.DataGrid.areaNumCombogridLabelContainer = $('#dataGridPanel #toolbar #areaNumCombogridLabel');
					Task.Map.View.DataGrid.areaNumCombogridInputContainer = $('#dataGridPanel #toolbar #areaNumCombogridInput');
                                        Task.Map.View.DataGrid.searchStartDateboxLabelContainer = $('#dataGridPanel #toolbar #searchStartDateboxLabel');
					Task.Map.View.DataGrid.searchStartDateboxInputContainer = $('#dataGridPanel #toolbar #searchStartDateboxInput');
					Task.Map.View.DataGrid.searchEndDateboxLabelContainer = $('#dataGridPanel #toolbar #searchEndDateboxLabel');
					Task.Map.View.DataGrid.searchEndDateboxInputContainer = $('#dataGridPanel #toolbar #searchEndDateboxInput');
					Task.Map.View.DataGrid.searchButtonContainer = $('#dataGridPanel #toolbar #searchButton');
                                        Task.Map.View.DataGrid.exportButtonContainer = $('#dataGridPanel #toolbar #exportButton');
					Task.Map.View.DataGrid.create();
                                        Task.Map.View.DataGrid.showCurrSelectInfo();
				},
				
				create: function() {
					var width = $(document).width() - 40;
					var height = $(document).height() - 40;
					Task.Map.View.dataGridPanelContainer.width(width);
					Task.Map.View.dataGridPanelContainer.height(height);
					Task.Map.View.dataGridPanelContainer.datagrid({
						toolbar: '#toolbar',
						columns: [[
							{
								field: 'date',
								title: taskViewDataGridColumnTitle1,
								width: 100,
							},
							{
								field: 'primaryPlayer',
								title: taskMapViewDataGridColumnTitle2,
								width: 100,
							},
							{
								field: 'primaryCount',
								title: taskMapViewDataGridColumnTitle3,
								width: 100,
							},
                                                        {
								field: 'primaryAve',
								title: taskMapViewDataGridColumnTitle4,
								width: 100,
							},
                                                        {
								field: 'seniorPlayer',
								title: taskMapViewDataGridColumnTitle5,
								width: 100,
							},
                                                        {
								field: 'seniorCount',
								title: taskMapViewDataGridColumnTitle6,
								width: 100,
							},
                                                        {
								field: 'seniorAve',
								title: taskMapViewDataGridColumnTitle7,
								width: 100,
							},
                                                        {
								field: 'countryPlayer',
								title: taskMapViewDataGridColumnTitle8,
								width: 100,
							},
                                                        {
								field: 'countryCount',
								title: taskMapViewDataGridColumnTitle9,
								width: 100,
							},
                                                        {
								field: 'countryAve',
								title: taskMapViewDataGridColumnTitle10,
								width: 100,
							},
                                                        {
								field: 'allPlayer',
								title: taskMapViewDataGridColumnTitle11,
								width: 100,
							},
                                                        {
								field: 'allCount',
								title: taskMapViewDataGridColumnTitle12,
								width: 100,
							},
                                                        {
								field: 'allAve',
								title: taskMapViewDataGridColumnTitle13,
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
						Task.Map.View.DataGrid.operatorIdComboboxLabelContainer,
						Task.Map.View.DataGrid.operatorIdComboboxInputContainer
					);
                                        Component.Combogrid.AreaNum.create(
						Task.Map.View.DataGrid.areaNumCombogridLabelContainer,
						Task.Map.View.DataGrid.areaNumCombogridInputContainer
					);
					Component.Datebox.Start.create(
						Task.Map.View.DataGrid.searchStartDateboxLabelContainer,
						Task.Map.View.DataGrid.searchStartDateboxInputContainer
					);
                                        Component.Datebox.End.create(
						Task.Map.View.DataGrid.searchEndDateboxLabelContainer,
						Task.Map.View.DataGrid.searchEndDateboxInputContainer
					);
					Task.Map.View.DataGrid.searchButtonContainer.linkbutton({
						iconCls: 'icon-search',
						text: taskViewDataGridToolbarButtonText1,
					});
					Task.Map.View.DataGrid.searchButtonContainer.bind(
						'click',
						Task.Map.View.DataGrid.doSearch
					);
                                        Task.Map.View.DataGrid.exportButtonContainer.linkbutton({
						iconCls: 'icon-search',
						text: exportViewDataGridToolbarButtonText1,
					});
					Task.Map.View.DataGrid.exportButtonContainer.bind(
						'click',
						Task.Map.View.DataGrid.doExport
					);
				},
				
				doSearch: function() {
                                        var operatorId = Task.Map.View.DataGrid.operatorIdComboboxInputContainer.combobox('getValue');
                                        var gameAreaId = Task.Map.View.DataGrid.areaNumCombogridInputContainer.combogrid('getValue');
					var searchStartDate = Task.Map.View.DataGrid.searchStartDateboxInputContainer.datebox('getValue');
                                        var searchEndDate = Task.Map.View.DataGrid.searchEndDateboxInputContainer.datebox('getValue');
					
					Task.Map.View.dataGridPanelContainer.datagrid({
						url: '/index.php/Task/map/getListData',
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
                                                    Task.Map.View.DataGrid.operatorIdComboboxInputContainer.combobox('select',response.data.operatorId);
                                                    Task.Map.View.DataGrid.areaNumCombogridInputContainer.combogrid('setValue',response.data.gameAreaId);
                                                    Task.Map.View.DataGrid.searchStartDateboxInputContainer.datebox('setValue',response.data.startDate);
                                                    Task.Map.View.DataGrid.searchEndDateboxInputContainer.datebox('setValue',response.data.endDate);
                                                }
                                        })
                                }, 
                                doExport: function() {
//                                        var url = "/index.php/Currency/first/export";
                                        var operatorId = Task.Map.View.DataGrid.operatorIdComboboxInputContainer.combobox('getValue');
                                        var gameAreaId = Task.Map.View.DataGrid.areaNumCombogridInputContainer.combogrid('getValues').toString();
                                        var startDate = Task.Map.View.DataGrid.searchStartDateboxInputContainer.datebox('getValue');
                                        var endDate =  Task.Map.View.DataGrid.searchEndDateboxInputContainer.datebox('getValue');
//                                        $.ajax({
//                                              url: url,
//                                              data: {
//                                                    operatorId:operatorId,
//                                                    gameAreaId:gameAreaId,
//                                                    startDate:startDate,
//                                                    endDate:endDate,
//                                              },
//                                              success: function () {
                                                  var downUrl = "/index.php/Task/map/export?operatorId="+ operatorId +"&gameAreaId="+gameAreaId+"&startDate="+startDate+"&endDate="+endDate
                                                  window.location = downUrl;
//                                              }
//                                        });
				},

			},
		},
	},
}