var Item = {
	Detail: {
		init: function() {
			Language.getCurrLanguage();
			Utils.loadJavascriptFile('/application/views/libraries/component/' + language + '.js');
			Utils.loadJavascriptFile('/application/views/libraries/utils/' + language + '.js');
			Utils.loadJavascriptFile('/application/views/module/Item/' + language + '.js');
			Utils.initAjax();
			
			Item.Detail.View.init();
		},
		
		View: {
			dataGridPanelContainer: '',
			
			init: function() {
				Item.Detail.View.dataGridPanelContainer = $('#dataGridPanel #dataGrid');
				Item.Detail.View.DataGrid.init();
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
				itemComboboxLabelContainer: '',
				itemComboboxInputContainer: '',
                                itemIdCombogridLabelContainer: '',
				itemIdCombogridInputContainer: '',
                                itemTypeComboboxLabelContainer: '',
				itemTypeComboboxInputContainer: '',
                                getTypeComboboxLabelContainer:'',
                                getTypeComboboxInputContainer:'',
				startDatetimeboxLabelContainer: '',
				startDatetimeboxInputContainer: '',
				endDatetimeboxLabelContainer: '',
				endDatetimeboxInputContainer: '',
				searchButtonContainer: '',
                                exportButtonContainer: '',
				
				init: function() {
					Item.Detail.View.DataGrid.operatorIdComboboxLabelContainer = $('#dataGridPanel #toolbar #operatorIdComboboxLabel');
					Item.Detail.View.DataGrid.operatorIdComboboxInputContainer = $('#dataGridPanel #toolbar #operatorIdComboboxInput');
                                        Item.Detail.View.DataGrid.areaNumCombogridLabelContainer = $('#dataGridPanel #toolbar #areaNumCombogridLabel');
					Item.Detail.View.DataGrid.areaNumCombogridInputContainer = $('#dataGridPanel #toolbar #areaNumCombogridInput');
					Item.Detail.View.DataGrid.accountValidateboxLabelContainer = $('#dataGridPanel #toolbar #accountValidateboxLabel');
					Item.Detail.View.DataGrid.accountValidateboxInputContainer = $('#dataGridPanel #toolbar #accountValidateboxInput');
					Item.Detail.View.DataGrid.roleNameValidateboxLabelContainer = $('#dataGridPanel #toolbar #roleNameValidateboxLabel');
					Item.Detail.View.DataGrid.roleNameValidateboxInputContainer = $('#dataGridPanel #toolbar #roleNameValidateboxInput');
					Item.Detail.View.DataGrid.itemComboboxLabelContainer = $('#dataGridPanel #toolbar #itemComboboxLabel');
					Item.Detail.View.DataGrid.itemComboboxInputContainer = $('#dataGridPanel #toolbar #itemComboboxInput');
                                        Item.Detail.View.DataGrid.itemIdCombogridLabelContainer = $('#dataGridPanel #toolbar #itemIdCombogridLabel');
					Item.Detail.View.DataGrid.itemIdCombogridInputContainer = $('#dataGridPanel #toolbar #itemIdCombogridInput');
                                        Item.Detail.View.DataGrid.itemTypeComboboxLabelContainer = $('#dataGridPanel #toolbar #itemTypeComboboxLabel');
					Item.Detail.View.DataGrid.itemTypeComboboxInputContainer = $('#dataGridPanel #toolbar #itemTypeComboboxInput');
                                        Item.Detail.View.DataGrid.getTypeComboboxLabelContainer = $('#dataGridPanel #toolbar #getTypeComboboxLabel');
					Item.Detail.View.DataGrid.getTypeComboboxInputContainer = $('#dataGridPanel #toolbar #getTypeComboboxInput');
					Item.Detail.View.DataGrid.startDatetimeboxLabelContainer = $('#dataGridPanel #toolbar #startDatetimeboxLabel');
					Item.Detail.View.DataGrid.startDatetimeboxInputContainer = $('#dataGridPanel #toolbar #startDatetimeboxInput');
					Item.Detail.View.DataGrid.endDatetimeboxLabelContainer = $('#dataGridPanel #toolbar #endDatetimeboxLabel');
					Item.Detail.View.DataGrid.endDatetimeboxInputContainer = $('#dataGridPanel #toolbar #endDatetimeboxInput');
					Item.Detail.View.DataGrid.searchButtonContainer = $('#dataGridPanel #toolbar #searchButton');
                                        Item.Detail.View.DataGrid.exportButtonContainer = $('#dataGridPanel #toolbar #exportButton');
					Item.Detail.View.DataGrid.create();
                                        Item.Detail.View.DataGrid.showCurrSelectInfo();
				},
				
				create: function() {
					var width = $(document).width() - 40;
					var height = $(document).height() - 40;
					Item.Detail.View.dataGridPanelContainer.width(width);
					Item.Detail.View.dataGridPanelContainer.height(height);
					Item.Detail.View.dataGridPanelContainer.datagrid({
						fitColumns: false,
						toolbar: '#toolbar',
						columns: [[
							{
								field: 'cid',
								title: itemDetailViewDataGridColumnTitle1,
								width: 100
							},
							{
								field: 'name',
								title: itemDetailViewDataGridColumnTitle2,
								width: 100
							},
							{
								field: 'itemName',
								title: itemDetailViewDataGridColumnTitle3,
								width: 200,
							},
							{
								field: 'itemType',
								title: itemDetailViewDataGridColumnTitle4,
								width: 80,
                                                                formatter: function(value) {
									if(value === '1') {
										return itemTypeValue1;
									}
									else if(value === '2') {
										return itemTypeValue2;
									}
                                                                        else if(value === '3') {
										return itemTypeValue3;
									}
                                                                        else if(value === '4') {
										return itemTypeValue4;
									}
                                                                        else if(value === '5') {
										return itemTypeValue5;
									}
                                                                        else if(value === '6') {
										return itemTypeValue6;
									}
                                                                        else if(value === '7') {
										return itemTypeValue7;
									}
                                                                        else if(value === '8') {
										return itemTypeValue8;
									}
                                                                }
							},
							{
								field: 'flag',
								title: itemDetailViewDataGridColumnTitle5,
								width: 150,
                                                                formatter: function(value) {
									if(value === '1') {
										return flagValue1;
									}
									else if(value === '2') {
										return flagValue2;
									}
                                                                }
							},
                                                        {
								field: 'count',
								title: itemDetailViewDataGridColumnTitle6,
								width: 150,
							},
                                                        {
								field: 'reason',
								title: itemDetailViewDataGridColumnTitle7,
								width: 150,
							},
                                                        {
								field: 'srcid',
								title: itemDetailViewDataGridColumnTitle9,
								width: 150,
							},
                                                        {
								field: 'time',
								title: itemDetailViewDataGridColumnTitle8,
								width: 150,
							},
                                                        
						]],
						loadFilter: Utils.dataGridLoadFilter,
						pagination: true,
						pageSize: 50,
						pageList: [50, 100, 150, 200],
					});
					Component.Combobox.OperatorId.create(
						Item.Detail.View.DataGrid.operatorIdComboboxLabelContainer,
						Item.Detail.View.DataGrid.operatorIdComboboxInputContainer
					);
                                        Component.Combogrid.AreaNum.create(
						Item.Detail.View.DataGrid.areaNumCombogridLabelContainer,
						Item.Detail.View.DataGrid.areaNumCombogridInputContainer
					);
					Component.Validatebox.Account.create(
						Item.Detail.View.DataGrid.accountValidateboxLabelContainer,
						Item.Detail.View.DataGrid.accountValidateboxInputContainer
					);
					Component.Validatebox.RoleName.create(
						Item.Detail.View.DataGrid.roleNameValidateboxLabelContainer,
						Item.Detail.View.DataGrid.roleNameValidateboxInputContainer
					);
					Component.Combobox.Item.create(
						Item.Detail.View.DataGrid.itemComboboxLabelContainer,
						Item.Detail.View.DataGrid.itemComboboxInputContainer
					);
                                        Component.Combogrid.ItemId.create(
						Item.Detail.View.DataGrid.itemIdCombogridLabelContainer,
						Item.Detail.View.DataGrid.itemIdCombogridInputContainer
					);
                                        Component.Combobox.ItemType.create(
						Item.Detail.View.DataGrid.itemTypeComboboxLabelContainer,
						Item.Detail.View.DataGrid.itemTypeComboboxInputContainer
					);
                                        Component.Combobox.GetType.create(
						Item.Detail.View.DataGrid.getTypeComboboxLabelContainer,
						Item.Detail.View.DataGrid.getTypeComboboxInputContainer
					);
					Component.Datetimebox.Start.create(
						Item.Detail.View.DataGrid.startDatetimeboxLabelContainer,
						Item.Detail.View.DataGrid.startDatetimeboxInputContainer
					);
					Component.Datetimebox.End.create(
						Item.Detail.View.DataGrid.endDatetimeboxLabelContainer,
						Item.Detail.View.DataGrid.endDatetimeboxInputContainer
					);
					Item.Detail.View.DataGrid.searchButtonContainer.linkbutton({
						iconCls: 'icon-search',
						text: itemDetailViewDataGridToolbarButtonText1,
					});
					Item.Detail.View.DataGrid.searchButtonContainer.bind(
						'click',
						Item.Detail.View.DataGrid.doSearch
					);
                                        Item.Detail.View.DataGrid.exportButtonContainer.linkbutton({
						iconCls: 'icon-search',
						text: exportViewDataGridToolbarButtonText1,
					});
					Item.Detail.View.DataGrid.exportButtonContainer.bind(
						'click',
						Item.Detail.View.DataGrid.doExport
					);
				},
				showCurrSelectInfo:function(){
                                        $.ajax({
                                                url: '/index.php/User/manage/getCurrSelectInfo',
                                        })
                                        .done(function(response) {
                                                if(response.data.operatorId!=false) {
                                                    Item.Detail.View.DataGrid.operatorIdComboboxInputContainer.combobox('select',response.data.operatorId);
                                                    Item.Detail.View.DataGrid.areaNumCombogridInputContainer.combogrid('setValue',response.data.gameAreaId);
                                                    Item.Detail.View.DataGrid.startDatetimeboxInputContainer.datetimebox('setValue',response.data.startDate);
                                                    Item.Detail.View.DataGrid.endDatetimeboxInputContainer.datetimebox('setValue',response.data.endDate);
                                                }
                                        })
                                }, 
				doSearch: function() {
					Item.Detail.View.dataGridPanelContainer.datagrid({
						url: '/index.php/Item/detail/getListData',
						queryParams: {
							operatorId: Item.Detail.View.DataGrid.operatorIdComboboxInputContainer.combobox('getValue'),
                                                        gameAreaId: Item.Detail.View.DataGrid.areaNumCombogridInputContainer.combogrid('getValues').toString(),
							account: Item.Detail.View.DataGrid.accountValidateboxInputContainer[0].value,
							roleName: Item.Detail.View.DataGrid.roleNameValidateboxInputContainer[0].value,
                                                        itemType: Item.Detail.View.DataGrid.itemTypeComboboxInputContainer.combobox('getValue'),
                                                        itemId: Item.Detail.View.DataGrid.itemIdCombogridInputContainer.combogrid('getValue'),
                                                        getTypeId: Item.Detail.View.DataGrid.getTypeComboboxInputContainer.combobox('getValue'),
							startDateTime: Item.Detail.View.DataGrid.startDatetimeboxInputContainer.datetimebox('getValue'),
							endDateTime: Item.Detail.View.DataGrid.endDatetimeboxInputContainer.datetimebox('getValue'),
							id: Item.Detail.View.DataGrid.itemComboboxInputContainer.combobox('getValue'),
						}
					});
				},
                                doExport: function() {
//                                        var url = "/index.php/Currency/first/export";
                                        var operatorId = Item.Detail.View.DataGrid.operatorIdComboboxInputContainer.combobox('getValue');
                                        var gameAreaId = Item.Detail.View.DataGrid.areaNumCombogridInputContainer.combogrid('getValues').toString();
                                        var account = Item.Detail.View.DataGrid.accountValidateboxInputContainer[0].value;
                                        var roleName =  Item.Detail.View.DataGrid.roleNameValidateboxInputContainer[0].value;
                                        var itemType = Item.Detail.View.DataGrid.itemTypeComboboxInputContainer.combobox('getValue');
                                        var itemId = Item.Detail.View.DataGrid.itemIdCombogridInputContainer.combogrid('getValue');
                                        var getTypeId = Item.Detail.View.DataGrid.getTypeComboboxInputContainer.combobox('getValue');
                                        var startDateTime = Item.Detail.View.DataGrid.startDatetimeboxInputContainer.datetimebox('getValue');
                                        var endDateTime = Item.Detail.View.DataGrid.endDatetimeboxInputContainer.datetimebox('getValue');
                                        var id =  Item.Detail.View.DataGrid.itemComboboxInputContainer.combobox('getValue');
                                        if(itemId == undefined){
                                           itemId = '';
                                        }
//                                        $.ajax({
//                                              url: url,
//                                              data: {
//                                                    operatorId:operatorId,
//                                                    gameAreaId:gameAreaId,
//                                                    startDate:startDate,
//                                                    endDate:endDate,
//                                              },
//                                              success: function () {
                                                  var downUrl = "/index.php/Item/detail/export?operatorId="+ operatorId +"&gameAreaId="+gameAreaId+"&account="+account+"&roleName="+roleName+"&itemType="+itemType+"&itemId="+itemId+"&getTypeId="+getTypeId+"&startDateTime="+startDateTime+"&endDateTime="+endDateTime+"&id="+id
                                                  window.location = downUrl;
//                                              }
//                                        });
				},
			},
		},
	}
}