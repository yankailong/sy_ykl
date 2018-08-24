var Role = {
	Manage: {
		bannedRoleWindowContainer: '',
		unbannedRoleWindowContainer: '',
		bannedChatWindowContainer: '',
		unbannedChatWindowContainer: '',
		
		init: function() {
			Language.getCurrLanguage();
			Utils.loadJavascriptFile('/application/views/libraries/component/' + language + '.js');
			Utils.loadJavascriptFile('/application/views/libraries/utils/' + language + '.js');
			Utils.loadJavascriptFile('/application/views/module/Role/' + language + '.js');
			Utils.initAjax();
			
			Role.Manage.bannedRoleWindowContainer = $('#bannedRoleWindow');
			Role.Manage.unbannedRoleWindowContainer = $('#unbannedRoleWindow');
			Role.Manage.bannedChatWindowContainer = $('#bannedChatWindow');
			Role.Manage.unbannedChatWindowContainer = $('#unbannedChatWindow');
			Role.Manage.BannedRoleWindow.init();
			Role.Manage.UnbannedRoleWindow.init();
			Role.Manage.BannedChatWindow.init();
			Role.Manage.UnbannedChatWindow.init();
			Role.Manage.View.init();
		},
		
		View: {
			dataGridPanelContainer: '',
			
			init: function() {
				Role.Manage.View.dataGridPanelContainer = $('#dataGridPanel #dataGrid');
				Role.Manage.View.DataGrid.init();
			},
			
			DataGrid: {
				operatorIdComboboxLabelContainer: '',
				operatorIdComboboxInputContainer: '',
                                areaNumCombogridLabelContainer: '',
                                areaNumCombogridInputContainer: '',
                                onlineComboboxLabelContainer: '',
                                onlineComboboxInputContainer: '',
                                vipComboboxLabelContainer: '',
                                vipComboboxInputContainer: '',
				accountValidateboxLabelContainer: '',
				accountValidateboxInputContainer: '',
                                roleNameValidateboxLabelContainer: '',
				roleNameValidateboxInputContainer: '',
				passportValidateboxLabelContainer: '',
				passportValidateboxInputContainer: '',
                                playerlevelComboboxLabelContainer: '',
                                playerlevelComboboxInputContainer: '',
                                familyComboboxLabelContainer: '',
                                familyComboboxInputContainer: '',
				searchButtonContainer: '',
                                exportButtonContainer: '',
				kickButtonContainer: '',
				bannedRoleButtonContainer: '',
				unbannedRoleButtonContainer: '',
				bannedChatButtonContainer: '',
				unbannedChatButtonContainer: '',
				
				init: function() {
					Role.Manage.View.DataGrid.operatorIdComboboxLabelContainer = $('#dataGridPanel #toolbar #operatorIdComboboxLabel');
					Role.Manage.View.DataGrid.operatorIdComboboxInputContainer = $('#dataGridPanel #toolbar #operatorIdComboboxInput');
                                        Role.Manage.View.DataGrid.areaNumCombogridLabelContainer = $('#dataGridPanel #toolbar #areaNumCombogridLabel');
					Role.Manage.View.DataGrid.areaNumCombogridInputContainer = $('#dataGridPanel #toolbar #areaNumCombogridInput');
                                        Role.Manage.View.DataGrid.onlineComboboxLabelContainer = $('#dataGridPanel #toolbar #onlineComboboxLabel');
					Role.Manage.View.DataGrid.onlineComboboxInputContainer = $('#dataGridPanel #toolbar #onlineComboboxInput');
                                        Role.Manage.View.DataGrid.playerlevelComboboxLabelContainer = $('#dataGridPanel #toolbar #playerlevelComboboxLabel');
					Role.Manage.View.DataGrid.playerlevelComboboxInputContainer = $('#dataGridPanel #toolbar #playerlevelComboboxInput');
                                        Role.Manage.View.DataGrid.familyComboboxLabelContainer = $('#dataGridPanel #toolbar #familyComboboxLabel');
					Role.Manage.View.DataGrid.familyComboboxInputContainer = $('#dataGridPanel #toolbar #familyComboboxInput');
                                        Role.Manage.View.DataGrid.vipComboboxLabelContainer = $('#dataGridPanel #toolbar #vipComboboxLabel');
					Role.Manage.View.DataGrid.vipComboboxInputContainer = $('#dataGridPanel #toolbar #vipComboboxInput');
					Role.Manage.View.DataGrid.accountValidateboxLabelContainer = $('#dataGridPanel #toolbar #accountValidateboxLabel');
					Role.Manage.View.DataGrid.accountValidateboxInputContainer = $('#dataGridPanel #toolbar #accountValidateboxInput');
					Role.Manage.View.DataGrid.roleNameValidateboxLabelContainer = $('#dataGridPanel #toolbar #roleNameValidateboxLabel');
					Role.Manage.View.DataGrid.roleNameValidateboxInputContainer = $('#dataGridPanel #toolbar #roleNameValidateboxInput');
                                        Role.Manage.View.DataGrid.passportValidateboxLabelContainer = $('#dataGridPanel #toolbar #passportValidateboxLabel');
					Role.Manage.View.DataGrid.passportValidateboxInputContainer = $('#dataGridPanel #toolbar #passportValidateboxInput');
					Role.Manage.View.DataGrid.searchButtonContainer = $('#dataGridPanel #toolbar #searchButton');
                                        Role.Manage.View.DataGrid.exportButtonContainer = $('#dataGridPanel #toolbar #exportButton');
					Role.Manage.View.DataGrid.kickButtonContainer = $('#dataGridPanel #toolbar #kickButton');
					Role.Manage.View.DataGrid.bannedRoleButtonContainer = $('#dataGridPanel #toolbar #bannedRoleButton');
					Role.Manage.View.DataGrid.unbannedRoleButtonContainer = $('#dataGridPanel #toolbar #unbannedRoleButton');
					Role.Manage.View.DataGrid.bannedChatButtonContainer = $('#dataGridPanel #toolbar #bannedChatButton');
					Role.Manage.View.DataGrid.unbannedChatButtonContainer = $('#dataGridPanel #toolbar #unbannedChatButton');
                                        
					Role.Manage.View.DataGrid.create();
                                        Role.Manage.View.DataGrid.showCurrSelectInfo();
				},
				create: function() {
					var width = $(document).width() - 40;
					var height = $(document).height() - 40;
					Role.Manage.View.dataGridPanelContainer.width(width);
					Role.Manage.View.dataGridPanelContainer.height(height);
					Role.Manage.View.dataGridPanelContainer.datagrid({
                                                view: detailview,
						toolbar: '#toolbar',
						columns: [[
							{
								checkbox: true,
							},
                                                        {
								field: 'passport',
								title: roleManageViewDataGridColumnTitle34,
								width: 50,
							},
							{
								field: 'cid',
								title: roleManageViewDataGridColumnTitle1,
								width: 50,
							},
							{
								field: 'sid',
								title: roleManageViewDataGridColumnTitle2,
								width: 50,
							},
							{
								field: 'roleName',
								title: roleManageViewDataGridColumnTitle3,
								width: 100,
							},
                                                        {
								field: 'job',
								title: roleManageViewDataGridColumnTitle5,
								width: 60,
                                                                sortable: true,
                                                               
							},
							{
								field: 'level',
								title: roleManageViewDataGridColumnTitle6,
								width: 80,
								sortable: true,
							},
                                                        {
								field: 'vip_level',
								title: roleManageViewDataGridColumnTitle18,
								width: 100,
                                                                sortable: true,
							},
                                                        {
								field: 'battle',
								title: roleManageViewDataGridColumnTitle19,
								width: 100,
								sortable: true,
							},
                                                        {
								field: 'gold',
								title: roleManageViewDataGridColumnTitle23,
								width: 100,
                                                                sortable: true,
							},
                                                        {
								field: 'time',
								title: roleManageViewDataGridColumnTitle20,
								width: 100,
                                                                sortable: true,
							},
                                                        {
								field: 'amount',
								title: roleManageViewDataGridColumnTitle21,
								width: 100,
                                                                sortable: true,
							},
                                                        {
								field: 'money',
								title: roleManageViewDataGridColumnTitle22,
								width: 100,
                                                                sortable: true,
							},
                                                        {
								field: 'cash',
								title: roleManageViewDataGridColumnTitle24,
								width: 100,
                                                                sortable: true,
							},
                                                        {
								field: 'vigour',
								title: roleManageViewDataGridColumnTitle25,
								width: 100,
                                                                sortable: true,
							},
                                                        {
								field: 'draw_score',
								title: roleManageViewDataGridColumnTitle26,
								width: 100,
                                                                sortable: true,
							},
                                                        {
								field: 'boss_score',
								title: roleManageViewDataGridColumnTitle27,
								width: 100,
                                                                sortable: true,
							},
                                                        {
								field: 'bind_money',
								title: roleManageViewDataGridColumnTitle28,
								width: 100,
                                                                sortable: true,
							},
                                                        {
								field: 'honor',
								title: roleManageViewDataGridColumnTitle29,
								width: 100,
                                                                sortable: true,
							},
                                                        {
								field: 'ac_score',
								title: roleManageViewDataGridColumnTitle30,
								width: 100,
                                                                sortable: true,
							},
                                                        {
								field: 'contribution',
								title: roleManageViewDataGridColumnTitle31,
								width: 100,
                                                                sortable: true,
							},
                                                        {
								field: 'blood',
								title: roleManageViewDataGridColumnTitle33,
								width: 100,
                                                                sortable: true,
							},
                                                        {
								field: 'dust',
								title: roleManageViewDataGridColumnTitle32,
								width: 100,
                                                                sortable: true,
							},
							{
								field: 'sex',
								title: roleManageViewDataGridColumnTitle4,
								width: 60,
								sortable: true,
							},
							{
								field: 'family',
								title: roleManageViewDataGridColumnTitle7,
								width: 80,
							},
							{
								field: 'online',
								title: roleManageViewDataGridColumnTitle8,
								width: 100,
							},
							{
								field: 'mapid',
								title: roleManageViewDataGridColumnTitle9,
								width: 100,
							},
                                                        {
								field: 'x',
								title: roleManageViewDataGridColumnTitle10,
								width: 50,
							},
                                                        {
								field: 'y',
								title: roleManageViewDataGridColumnTitle11,
								width: 50,
							},
                                                        {
								field: 'total_online_time',
								title: roleManageViewDataGridColumnTitle12,
								width: 100,
							},
                                                        {
								field: 'vipEndTime',
								title: roleManageViewDataGridColumnTitle13,
								width: 100,
							},
                                                        {
								field: 'create_time',
								title: roleManageViewDataGridColumnTitle14,
								width: 100,
							},
                                                        {
								field: 'last_login_time',
								title: roleManageViewDataGridColumnTitle15,
								width: 100,
							},
                                                        {
								field: 'last_logout_time',
								title: roleManageViewDataGridColumnTitle16,
								width: 100,
							},
                                                        {
								field: 'last_login_ip',
								title: roleManageViewDataGridColumnTitle17,
								width: 100,
							},
                                                        
                                                        
                                                        
						]],
                                                detailFormatter:function(index,row){
                                                 return '<table><tr>' +
                                                        '<td style="border:1">' +
                                                        '<p>角色id: ' + row.cid + '</p>' +
                                                        '<p>服务器id: ' + row.sid + '</p>' +
                                                        '<p>角色名: ' + row.roleName + '</p>' +
                                                        '<p>职业: ' + row.job + '</p>' +
                                                        '<p>等级: ' + row.level + '</p>' +
                                                        '<p>VIP等级: ' + row.vip_level + '</p>' +
                                                        '<p>战斗力: ' + row.battle + '</p>' +
                                                        '<p>元宝: ' + row.gold + '</p>' +
                                                        '<p>充值次数: ' + row.time + '</p>' +
                                                        '<p>充值总元宝: ' + row.amount + '</p>' +
                                                        '<p>铜钱: ' + row.money + '</p>' +
                                                        '<p>绑元: ' + row.cash + '</p>' +
                                                        '<p>元气: ' + row.vigour + '</p>' +
                                                        '<p>血钻碎片: ' + row.draw_score + '</p>' +
                                                        '<p>BOSS积分: ' + row.boss_score + '</p>' +
                                                        '<p>绑定金币: ' + row.bind_money + '</p>' +
                                                        '<p>血岩碎片: ' + row.blood + '</p>' +
                                                        '</td><td style="border:1">' +
                                                        '<p>荣誉: ' + row.honor + '</p>' +
                                                        '<p>积分: ' + row.ac_score + '</p>' +
                                                        '<p>军团贡献: ' + row.contribution + '</p>' +
                                                        '<p>涅法雷姆经验: ' + row.dust + '</p>' +
                                                        '<p>魔能: ' + row.magic + '</p>' +
                                                        '<p>钻石抵扣券: ' + row.pay + '</p>' +
                                                        '<p>性别: ' + row.sex + '</p>' +
                                                        '<p>军团: ' + row.family + '</p>' +
                                                        '<p>是否在线: ' + row.online + '</p>' +
                                                        '<p>所在地图: ' + row.mapid + '</p>' +
                                                        '<p>坐标x: ' + row.x + '</p>' +
                                                        '<p>坐标y: ' + row.y + '</p>' +
                                                        '<p>在线时间: ' + row.total_online_time + '</p>' +
                                                        '<p>vip到期: ' + row.vipEndTime + '</p>' +
                                                        '<p>创建时间: ' + row.create_time + '</p>' +
                                                        '<p>最近登录: ' + row.last_login_time + '</p>' +
                                                        '<p>最近登出: ' + row.last_logout_time + '</p>' +
                                                        '<p>最近登录ip: ' + row.last_login_ip + '</p>' +
                                                         
                                                        '</td>' +
                                                        '</tr></table>';
                                                },
//                                               
						singleSelect: true,
						loadFilter: Utils.dataGridLoadFilter,
						pagination: true,
						pageSize: 50,
						pageList: [50, 100, 150, 200],
					});
					Component.Combobox.OperatorId.create(
						Role.Manage.View.DataGrid.operatorIdComboboxLabelContainer,
						Role.Manage.View.DataGrid.operatorIdComboboxInputContainer
					);
                                        Component.Combogrid.AreaNum.create(
						Role.Manage.View.DataGrid.areaNumCombogridLabelContainer,
						Role.Manage.View.DataGrid.areaNumCombogridInputContainer
					);
                                        Component.Combobox.Online.create(
						Role.Manage.View.DataGrid.onlineComboboxLabelContainer,
						Role.Manage.View.DataGrid.onlineComboboxInputContainer
					);
                                        Component.Combobox.Playerlevel.create(
						Role.Manage.View.DataGrid.playerlevelComboboxLabelContainer,
						Role.Manage.View.DataGrid.playerlevelComboboxInputContainer
					);
                                        Component.Combobox.Vip.create(
						Role.Manage.View.DataGrid.vipComboboxLabelContainer,
						Role.Manage.View.DataGrid.vipComboboxInputContainer
					);
					Component.Validatebox.Account.create(
						Role.Manage.View.DataGrid.accountValidateboxLabelContainer,
						Role.Manage.View.DataGrid.accountValidateboxInputContainer
					);
					Component.Validatebox.RoleName.create(
						Role.Manage.View.DataGrid.roleNameValidateboxLabelContainer,
						Role.Manage.View.DataGrid.roleNameValidateboxInputContainer
					);
                                        Component.Validatebox.Passport.create(
						Role.Manage.View.DataGrid.passportValidateboxLabelContainer,
						Role.Manage.View.DataGrid.passportValidateboxInputContainer
					);
					Role.Manage.View.DataGrid.searchButtonContainer.linkbutton({
						iconCls: 'icon-search',
						text: roleManageViewDataGridToolbarButtonText1,
					});
					Role.Manage.View.DataGrid.searchButtonContainer.bind(
						'click',
						Role.Manage.View.DataGrid.doSearch
					);
                                        Role.Manage.View.DataGrid.exportButtonContainer.linkbutton({
						iconCls: 'icon-search',
						text: roleManageViewDataGridToolbarButtonText7,
					});
					Role.Manage.View.DataGrid.exportButtonContainer.bind(
						'click',
						Role.Manage.View.DataGrid.doExport
					);
					Role.Manage.View.DataGrid.kickButtonContainer.linkbutton({
						text: roleManageViewDataGridToolbarButtonText4,
					});
					Role.Manage.View.DataGrid.kickButtonContainer.bind(
						'click',
						Role.Manage.View.DataGrid.doKick
					);
					Role.Manage.View.DataGrid.bannedRoleButtonContainer.linkbutton({
						text: roleManageViewDataGridToolbarButtonText2,
					});
					Role.Manage.View.DataGrid.bannedRoleButtonContainer.bind(
						'click',
						Role.Manage.BannedRoleWindow.open
					);
					Role.Manage.View.DataGrid.unbannedRoleButtonContainer.linkbutton({
						text: roleManageViewDataGridToolbarButtonText3,
					});
					Role.Manage.View.DataGrid.unbannedRoleButtonContainer.bind(
						'click',
						Role.Manage.UnbannedRoleWindow.open
					);
					Role.Manage.View.DataGrid.bannedChatButtonContainer.linkbutton({
						text: roleManageViewDataGridToolbarButtonText5,
					});
					Role.Manage.View.DataGrid.bannedChatButtonContainer.bind(
						'click',
						Role.Manage.BannedChatWindow.open
					);
					Role.Manage.View.DataGrid.unbannedChatButtonContainer.linkbutton({
						text: roleManageViewDataGridToolbarButtonText6,
					});
					Role.Manage.View.DataGrid.unbannedChatButtonContainer.bind(
						'click',
						Role.Manage.UnbannedChatWindow.open
					);
				},
				
				showCurrSelectInfo:function(){
//                                      var strCookie=parent.document.cookie;
//                                      var arrCookie=strCookie.split(";");
//
//                                      for(var i=0;i<arrCookie.length;i++){
//                                          var c=arrCookie[i].split("=");
//                                          if(c[0]=='operatorId'){
//                                               Role.Manage.View.DataGrid.operatorIdComboboxInputContainer.combobox('select',c[1]);
//                                          }else if(c[0] == ' gameAreaId'){
//                                               Role.Manage.View.DataGrid.areaNumCombogridInputContainer.combogrid('setValue',c[1]);
//                                          }
//                                      }
                                        $.ajax({
                                                url: '/index.php/User/manage/getCurrSelectInfo',
                                        })
                                        .done(function(response) {
                                                if(response.data.operatorId!=false) {
                                                    Role.Manage.View.DataGrid.operatorIdComboboxInputContainer.combobox('select',response.data.operatorId);
                                                    Role.Manage.View.DataGrid.areaNumCombogridInputContainer.combogrid('setValue',response.data.gameAreaId);
                                                }
                                        })
                                }, 
				load: function() {
					Role.Manage.View.dataGridPanelContainer.datagrid('reload');
				},
				
				getCheckedRows: function(allowMulti) {
					var allowMulti = arguments[0] ? arguments[0] : false;
					var checkedRow = Role.Manage.View.dataGridPanelContainer.datagrid('getChecked');
					
					if(Utils.dataGridValidateCheckedRow(checkedRow, allowMulti) === true) {
						return checkedRow;
					}
					else {
						return false;
					}
				},
				
				doSearch: function() {
					Role.Manage.View.dataGridPanelContainer.datagrid({
						url: '/index.php/Role/manage/getListData',
						queryParams: {
							operatorId: Role.Manage.View.DataGrid.operatorIdComboboxInputContainer.combobox('getValue'),
                                                        gameAreaId: Role.Manage.View.DataGrid.areaNumCombogridInputContainer.combogrid('getValues').toString(),
                                                        onlineId: Role.Manage.View.DataGrid.onlineComboboxInputContainer.combobox('getValue'),
                                                        playerlevel:Role.Manage.View.DataGrid.playerlevelComboboxInputContainer.combobox('getValue'),
                                                        vipId: Role.Manage.View.DataGrid.vipComboboxInputContainer.combobox('getValue'),
							account: Role.Manage.View.DataGrid.accountValidateboxInputContainer[0].value,
							roleName: Role.Manage.View.DataGrid.roleNameValidateboxInputContainer[0].value,
                                                        passport: Role.Manage.View.DataGrid.passportValidateboxInputContainer[0].value
						},
					});
				},
				doExport: function() {
//                                        var url = "/index.php/Currency/first/export";
                                        var operatorId = Role.Manage.View.DataGrid.operatorIdComboboxInputContainer.combobox('getValue');
                                        var gameAreaId = Role.Manage.View.DataGrid.areaNumCombogridInputContainer.combogrid('getValues').toString();
                                        var onlineId = Role.Manage.View.DataGrid.onlineComboboxInputContainer.combobox('getValue');
                                        var playerlevel = Role.Manage.View.DataGrid.playerlevelComboboxInputContainer.combobox('getValue');
                                        var vipId =  Role.Manage.View.DataGrid.vipComboboxInputContainer.combobox('getValue');
                                        var account = Role.Manage.View.DataGrid.accountValidateboxInputContainer[0].value;
                                        var roleName =  Role.Manage.View.DataGrid.roleNameValidateboxInputContainer[0].value;
                                        var passport = Role.Manage.View.DataGrid.passportValidateboxInputContainer[0].value;
//                                        $.ajax({
//                                              url: url,
//                                              data: {
//                                                    operatorId:operatorId,
//                                                    gameAreaId:gameAreaId,
//                                                    startDate:startDate,
//                                                    endDate:endDate,
//                                              },
//                                              success: function () {
                                                  var downUrl = "/index.php/Role/manage/export?operatorId="+ operatorId +"&gameAreaId="+gameAreaId+"&onlineId="+onlineId+"&vipId="+vipId+"&account="+account+"&roleName="+roleName+"&playerlevel="+playerlevel+"&passport="+passport
                                                  window.location = downUrl;
//                                              }
//                                        });
				},
				doKick: function() {
					var checkedRow = Role.Manage.View.DataGrid.getCheckedRows();
					
					if( checkedRow != false ) {
						$.ajax({
							url: '/index.php/Role/manage/kick',
							data: {
								operatorId: Role.Manage.View.DataGrid.operatorIdComboboxInputContainer.combobox('getValue'),
                                                                gameAreaId: Role.Manage.View.DataGrid.areaNumCombogridInputContainer.combogrid('getValues').toString(),
								userId: checkedRow[0].cid,
							}
						})
						.done(function(response) {
							if(response.errorCode === 0) {
								$.messager.alert(messageWindowTitle, roleManageViewDataGridKickSuccessInfo, 'info');
							}
						});
					}
				},
			},
		},
		
		BannedRoleWindow: {
			timeCycleTypeComboboxLabelContainer: '',
			timeCycleTypeComboboxInputContainer: '',
			timeCycleValidateboxLabelContainer: '',
			timeCycleValidateboxInputContainer: '',
			reasonValidateboxLabelContainer: '',
			reasonValidateboxInputContainer: '',
			submitButtonContainer: '',
			resetButtonContainer: '',
			
			init: function() {
				Role.Manage.BannedRoleWindow.timeCycleTypeComboboxLabelContainer = $('#bannedRoleWindow #timeCycleTypeComboboxLabel');
				Role.Manage.BannedRoleWindow.timeCycleTypeComboboxInputContainer = $('#bannedRoleWindow #timeCycleTypeComboboxInput');
				Role.Manage.BannedRoleWindow.timeCycleValidateboxLabelContainer = $('#bannedRoleWindow #timeCycleValidateboxLabel');
				Role.Manage.BannedRoleWindow.timeCycleValidateboxInputContainer = $('#bannedRoleWindow #timeCycleValidateboxInput');
				Role.Manage.BannedRoleWindow.reasonValidateboxLabelContainer = $('#bannedRoleWindow #reasonValidateboxLabel');
				Role.Manage.BannedRoleWindow.reasonValidateboxInputContainer = $('#bannedRoleWindow #reasonValidateboxInput');
				Role.Manage.BannedRoleWindow.submitButtonContainer = $('#bannedRoleWindow #submitButton');
				Role.Manage.BannedRoleWindow.resetButtonContainer = $('#bannedRoleWindow #resetButton');
				Role.Manage.BannedRoleWindow.create();
			},
			
			create: function() {
				Role.Manage.bannedRoleWindowContainer.window({
					title: roleManageBannedRoleWindowTitle,
					collapsible: false,
					minimizable: false,
					maximizable: false,
					closable: true,
					closed: true,
					modal: true,
				});
				Component.Combobox.TimeCycleType.create(
					Role.Manage.BannedRoleWindow.timeCycleTypeComboboxLabelContainer,
					Role.Manage.BannedRoleWindow.timeCycleTypeComboboxInputContainer
				);
				Component.Validatebox.TimeCycle.create(
					Role.Manage.BannedRoleWindow.timeCycleValidateboxLabelContainer,
					Role.Manage.BannedRoleWindow.timeCycleValidateboxInputContainer
				);
				Component.Validatebox.Reason.create(
					Role.Manage.BannedRoleWindow.reasonValidateboxLabelContainer,
					Role.Manage.BannedRoleWindow.reasonValidateboxInputContainer
				);
				Role.Manage.BannedRoleWindow.submitButtonContainer.linkbutton({
					iconCls: 'icon-ok',
					text: roleManageBannedRoleWindowSubmitButtonText,
				});
				Role.Manage.BannedRoleWindow.submitButtonContainer.bind(
					'click',
					Role.Manage.BannedRoleWindow.doSubmit
				);
				Role.Manage.BannedRoleWindow.resetButtonContainer.linkbutton({
					iconCls: 'icon-undo',
					text: roleManageBannedRoleWindowResetButtonText,
				});
				Role.Manage.BannedRoleWindow.resetButtonContainer.bind(
					'click',
					Role.Manage.BannedRoleWindow.doReset
				);
			},
			
			open: function() {
				var checkedRow = Role.Manage.View.DataGrid.getCheckedRows();
				
				if( checkedRow != false ) {
					Role.Manage.BannedRoleWindow.doReset();
					Role.Manage.bannedRoleWindowContainer.window('open');
				}
			},
			
			close: function() {
				Role.Manage.bannedRoleWindowContainer.window('close');
			},
			
			doSubmit: function() {
				var checkedRow = Role.Manage.View.DataGrid.getCheckedRows();
				
				$.ajax({
					url: '/index.php/Role/manage/bannedRole',
					data: {
						operatorId: Role.Manage.View.DataGrid.operatorIdComboboxInputContainer.combobox('getValue'),
                                                gameAreaId: Role.Manage.View.DataGrid.areaNumCombogridInputContainer.combogrid('getValue'),
						userId: checkedRow[0].cid,
						bannedCycleValue: Role.Manage.BannedRoleWindow.timeCycleValidateboxInputContainer[0].value,
						bannedCycleType: Role.Manage.BannedRoleWindow.timeCycleTypeComboboxInputContainer.combobox('getValue'),
						reason: Role.Manage.BannedRoleWindow.reasonValidateboxInputContainer[0].value,
					}
				})
				.done(function(response) {
					if(response.errorCode === 0) {
						$.messager.alert(messageWindowTitle, roleManageBannedRoleWindowSubmitSuccessInfo, 'info');
						Role.Manage.BannedRoleWindow.close();
						Role.Manage.View.DataGrid.load();
					}
				});
			},
			
			doReset: function() {
				Role.Manage.BannedRoleWindow.timeCycleValidateboxInputContainer[0].value = '';
				Role.Manage.BannedRoleWindow.timeCycleTypeComboboxInputContainer.combobox('reset');
				Role.Manage.BannedRoleWindow.reasonValidateboxInputContainer[0].value = '';
			},
		},
		
		UnbannedRoleWindow: {
			reasonValidateboxLabelContainer: '',
			reasonValidateboxInputContainer: '',
			submitButtonContainer: '',
			resetButtonContainer: '',
			
			init: function() {
				Role.Manage.UnbannedRoleWindow.reasonValidateboxLabelContainer = $('#unbannedRoleWindow #reasonValidateboxLabel');
				Role.Manage.UnbannedRoleWindow.reasonValidateboxInputContainer = $('#unbannedRoleWindow #reasonValidateboxInput');
				Role.Manage.UnbannedRoleWindow.submitButtonContainer = $('#unbannedRoleWindow #submitButton');
				Role.Manage.UnbannedRoleWindow.resetButtonContainer = $('#unbannedRoleWindow #resetButton');
				Role.Manage.UnbannedRoleWindow.create();
			},
			
			create: function() {
				Role.Manage.unbannedRoleWindowContainer.window({
					title: roleManageUnbannedRoleWindowTitle,
					collapsible: false,
					minimizable: false,
					maximizable: false,
					closable: true,
					closed: true,
					modal: true,
				});
				Component.Validatebox.Reason.create(
					Role.Manage.UnbannedRoleWindow.reasonValidateboxLabelContainer,
					Role.Manage.UnbannedRoleWindow.reasonValidateboxInputContainer
				);
				Role.Manage.UnbannedRoleWindow.submitButtonContainer.linkbutton({
					iconCls: 'icon-ok',
					text: roleManageunbannedRoleWindowSubmitButtonText,
				});
				Role.Manage.UnbannedRoleWindow.submitButtonContainer.bind(
					'click',
					Role.Manage.UnbannedRoleWindow.doSubmit
				);
				Role.Manage.UnbannedRoleWindow.resetButtonContainer.linkbutton({
					iconCls: 'icon-undo',
					text: roleManageunbannedRoleWindowResetButtonText,
				});
				Role.Manage.UnbannedRoleWindow.resetButtonContainer.bind(
					'click',
					Role.Manage.UnbannedRoleWindow.doReset
				);
			},
			
			open: function() {
				var checkedRow = Role.Manage.View.DataGrid.getCheckedRows();
				
				if( checkedRow != false ) {
					Role.Manage.UnbannedRoleWindow.doReset();
					Role.Manage.unbannedRoleWindowContainer.window('open');
				}
			},
			
			close: function() {
				Role.Manage.unbannedRoleWindowContainer.window('close');
			},
			
			doSubmit: function() {
				var checkedRow = Role.Manage.View.DataGrid.getCheckedRows();
				
				$.ajax({
					url: '/index.php/Role/manage/unbannedRole',
					data: {
						operatorId: Role.Manage.View.DataGrid.operatorIdComboboxInputContainer.combobox('getValue'),
                                                gameAreaId: Role.Manage.View.DataGrid.areaNumCombogridInputContainer.combogrid('getValue'),
						userId: checkedRow[0].cid,
						reason: Role.Manage.UnbannedRoleWindow.reasonValidateboxInputContainer[0].value,
					}
				})
				.done(function(response) {
					if(response.errorCode === 0) {
						$.messager.alert(messageWindowTitle, roleManageUnbannedRoleWindowSubmitSuccessInfo, 'info');
						Role.Manage.UnbannedRoleWindow.close();
						Role.Manage.View.DataGrid.load();
					}
				});
			},
			
			doReset: function() {
				Role.Manage.UnbannedRoleWindow.reasonValidateboxInputContainer[0].value = '';
			},
		},
		
		BannedChatWindow: {
			timeCycleTypeComboboxLabelContainer: '',
			timeCycleTypeComboboxInputContainer: '',
			timeCycleValidateboxLabelContainer: '',
			timeCycleValidateboxInputContainer: '',
			reasonValidateboxLabelContainer: '',
			reasonValidateboxInputContainer: '',
			submitButtonContainer: '',
			resetButtonContainer: '',
			
			init: function() {
				Role.Manage.BannedChatWindow.timeCycleTypeComboboxLabelContainer = $('#bannedChatWindow #timeCycleTypeComboboxLabel');
				Role.Manage.BannedChatWindow.timeCycleTypeComboboxInputContainer = $('#bannedChatWindow #timeCycleTypeComboboxInput');
				Role.Manage.BannedChatWindow.timeCycleValidateboxLabelContainer = $('#bannedChatWindow #timeCycleValidateboxLabel');
				Role.Manage.BannedChatWindow.timeCycleValidateboxInputContainer = $('#bannedChatWindow #timeCycleValidateboxInput');
				Role.Manage.BannedChatWindow.reasonValidateboxLabelContainer = $('#bannedChatWindow #reasonValidateboxLabel');
				Role.Manage.BannedChatWindow.reasonValidateboxInputContainer = $('#bannedChatWindow #reasonValidateboxInput');
				Role.Manage.BannedChatWindow.submitButtonContainer = $('#bannedChatWindow #submitButton');
				Role.Manage.BannedChatWindow.resetButtonContainer = $('#bannedChatWindow #resetButton');
				Role.Manage.BannedChatWindow.create();
			},
			
			create: function() {
				Role.Manage.bannedChatWindowContainer.window({
					title: roleManageBannedChatWindowTitle,
					collapsible: false,
					minimizable: false,
					maximizable: false,
					closable: true,
					closed: true,
					modal: true,
				});
				Component.Combobox.TimeCycleType.create(
					Role.Manage.BannedChatWindow.timeCycleTypeComboboxLabelContainer,
					Role.Manage.BannedChatWindow.timeCycleTypeComboboxInputContainer
				);
				Component.Validatebox.TimeCycle.create(
					Role.Manage.BannedChatWindow.timeCycleValidateboxLabelContainer,
					Role.Manage.BannedChatWindow.timeCycleValidateboxInputContainer
				);
				Component.Validatebox.Reason.create(
					Role.Manage.BannedChatWindow.reasonValidateboxLabelContainer,
					Role.Manage.BannedChatWindow.reasonValidateboxInputContainer
				);
				Role.Manage.BannedChatWindow.submitButtonContainer.linkbutton({
					iconCls: 'icon-ok',
					text: roleManageBannedChatWindowSubmitButtonText,
				});
				Role.Manage.BannedChatWindow.submitButtonContainer.bind(
					'click',
					Role.Manage.BannedChatWindow.doSubmit
				);
				Role.Manage.BannedChatWindow.resetButtonContainer.linkbutton({
					iconCls: 'icon-undo',
					text: roleManageBannedChatWindowResetButtonText,
				});
				Role.Manage.BannedChatWindow.resetButtonContainer.bind(
					'click',
					Role.Manage.BannedChatWindow.doReset
				);
			},
			
			open: function() {
				var checkedRow = Role.Manage.View.DataGrid.getCheckedRows();
				
				if( checkedRow != false ) {
					Role.Manage.BannedChatWindow.doReset();
					Role.Manage.bannedChatWindowContainer.window('open');
				}
			},
			
			close: function() {
				Role.Manage.bannedChatWindowContainer.window('close');
			},
			
			doSubmit: function() {
				var checkedRow = Role.Manage.View.DataGrid.getCheckedRows();
				
				$.ajax({
					url: '/index.php/Role/manage/bannedChat',
					data: {
						operatorId: Role.Manage.View.DataGrid.operatorIdComboboxInputContainer.combobox('getValue'),
                                                gameAreaId: Role.Manage.View.DataGrid.areaNumCombogridInputContainer.combogrid('getValue'),
						userId: checkedRow[0].cid,
						bannedCycleValue: Role.Manage.BannedChatWindow.timeCycleValidateboxInputContainer[0].value,
						bannedCycleType: Role.Manage.BannedChatWindow.timeCycleTypeComboboxInputContainer.combobox('getValue'),
						reason: Role.Manage.BannedChatWindow.reasonValidateboxInputContainer[0].value,
					}
				})
				.done(function(response) {
					if(response.errorCode === 0) {
						$.messager.alert(messageWindowTitle, roleManageBannedChatWindowSubmitSuccessInfo, 'info');
						Role.Manage.BannedChatWindow.close();
						Role.Manage.View.DataGrid.load();
					}
				});
			},
			
			doReset: function() {
				Role.Manage.BannedChatWindow.timeCycleValidateboxInputContainer[0].value = '';
				Role.Manage.BannedChatWindow.timeCycleTypeComboboxInputContainer.combobox('reset');
				Role.Manage.BannedChatWindow.reasonValidateboxInputContainer[0].value = '';
			},
		},
		
		UnbannedChatWindow: {
			reasonValidateboxLabelContainer: '',
			reasonValidateboxInputContainer: '',
			submitButtonContainer: '',
			resetButtonContainer: '',
			
			init: function() {
				Role.Manage.UnbannedChatWindow.reasonValidateboxLabelContainer = $('#unbannedChatWindow #reasonValidateboxLabel');
				Role.Manage.UnbannedChatWindow.reasonValidateboxInputContainer = $('#unbannedChatWindow #reasonValidateboxInput');
				Role.Manage.UnbannedChatWindow.submitButtonContainer = $('#unbannedChatWindow #submitButton');
				Role.Manage.UnbannedChatWindow.resetButtonContainer = $('#unbannedChatWindow #resetButton');
				Role.Manage.UnbannedChatWindow.create();
			},
			
			create: function() {
				Role.Manage.unbannedChatWindowContainer.window({
					title: roleManageUnbannedChatWindowTitle,
					collapsible: false,
					minimizable: false,
					maximizable: false,
					closable: true,
					closed: true,
					modal: true,
				});
				Component.Validatebox.Reason.create(
					Role.Manage.UnbannedChatWindow.reasonValidateboxLabelContainer,
					Role.Manage.UnbannedChatWindow.reasonValidateboxInputContainer
				);
				Role.Manage.UnbannedChatWindow.submitButtonContainer.linkbutton({
					iconCls: 'icon-ok',
					text: roleManageunbannedChatWindowSubmitButtonText,
				});
				Role.Manage.UnbannedChatWindow.submitButtonContainer.bind(
					'click',
					Role.Manage.UnbannedChatWindow.doSubmit
				);
				Role.Manage.UnbannedChatWindow.resetButtonContainer.linkbutton({
					iconCls: 'icon-undo',
					text: roleManageunbannedChatWindowResetButtonText,
				});
				Role.Manage.UnbannedChatWindow.resetButtonContainer.bind(
					'click',
					Role.Manage.UnbannedChatWindow.doReset
				);
			},
			
			open: function() {
				var checkedRow = Role.Manage.View.DataGrid.getCheckedRows();
				
				if( checkedRow != false ) {
					Role.Manage.UnbannedChatWindow.doReset();
					Role.Manage.unbannedChatWindowContainer.window('open');
				}
			},
			
			close: function() {
				Role.Manage.unbannedChatWindowContainer.window('close');
			},
			
			doSubmit: function() {
				var checkedRow = Role.Manage.View.DataGrid.getCheckedRows();
				
				$.ajax({
					url: '/index.php/Role/manage/unbannedChat',
					data: {
						operatorId: Role.Manage.View.DataGrid.operatorIdComboboxInputContainer.combobox('getValue'),
                                                gameAreaId: Role.Manage.View.DataGrid.areaNumCombogridInputContainer.combogrid('getValue'),
						userId: checkedRow[0].cid,
						reason: Role.Manage.UnbannedChatWindow.reasonValidateboxInputContainer[0].value,
					}
				})
				.done(function(response) {
					if(response.errorCode === 0) {
						$.messager.alert(messageWindowTitle, roleManageUnbannedChatWindowSubmitSuccessInfo, 'info');
						Role.Manage.UnbannedChatWindow.close();
						Role.Manage.View.DataGrid.load();
					}
				});
			},
			
			doReset: function() {
				Role.Manage.UnbannedChatWindow.reasonValidateboxInputContainer[0].value = '';
			},
		},
	},

	Login: {
		init: function() {
			Language.getCurrLanguage();
			Utils.loadJavascriptFile('/application/views/libraries/component/' + language + '.js');
			Utils.loadJavascriptFile('/application/views/libraries/utils/' + language + '.js');
			Utils.loadJavascriptFile('/application/views/module/Role/' + language + '.js');
			Utils.initAjax();
			
			Role.Login.View.init();
		},
		
		View: {
			dataGridPanelContainer: '',
			
			init: function() {
				Role.Login.View.dataGridPanelContainer = $('#dataGridPanel #dataGrid');
				Role.Login.View.DataGrid.init();
			},
			
			DataGrid: {
				gameAreaComboboxLabelContainer: '',
				gameAreaComboboxInputContainer: '',
				accountValidateboxLabelContainer: '',
				accountValidateboxInputContainer: '',
				roleNameValidateboxLabelContainer: '',
				roleNameValidateboxInputContainer: '',
				startDatetimeboxLabelContainer: '',
				startDatetimeboxInputContainer: '',
				endDatetimeboxLabelContainer: '',
				endDatetimeboxInputContainer: '',
				searchButtonContainer: '',
				
				init: function() {
					Role.Login.View.DataGrid.gameAreaComboboxLabelContainer = $('#dataGridPanel #toolbar #gameAreaComboboxLabel');
					Role.Login.View.DataGrid.gameAreaComboboxInputContainer = $('#dataGridPanel #toolbar #gameAreaComboboxInput');
					Role.Login.View.DataGrid.accountValidateboxLabelContainer = $('#dataGridPanel #toolbar #accountValidateboxLabel');
					Role.Login.View.DataGrid.accountValidateboxInputContainer = $('#dataGridPanel #toolbar #accountValidateboxInput');
					Role.Login.View.DataGrid.roleNameValidateboxLabelContainer = $('#dataGridPanel #toolbar #roleNameValidateboxLabel');
					Role.Login.View.DataGrid.roleNameValidateboxInputContainer = $('#dataGridPanel #toolbar #roleNameValidateboxInput');
					Role.Login.View.DataGrid.startDatetimeboxLabelContainer = $('#dataGridPanel #toolbar #startDatetimeboxLabel');
					Role.Login.View.DataGrid.startDatetimeboxInputContainer = $('#dataGridPanel #toolbar #startDatetimeboxInput');
					Role.Login.View.DataGrid.endDatetimeboxLabelContainer = $('#dataGridPanel #toolbar #endDatetimeboxLabel');
					Role.Login.View.DataGrid.endDatetimeboxInputContainer = $('#dataGridPanel #toolbar #endDatetimeboxInput');
					Role.Login.View.DataGrid.searchButtonContainer = $('#dataGridPanel #toolbar #searchButton');
					Role.Login.View.DataGrid.create();
				},
				
				create: function() {
					var width = $(document).width() - 40;
					var height = $(document).height() - 40;
					Role.Login.View.dataGridPanelContainer.width(width);
					Role.Login.View.dataGridPanelContainer.height(height);
					Role.Login.View.dataGridPanelContainer.datagrid({
						fitColumns: false,
						toolbar: '#toolbar',
						columns: [[
							{
								field: 'account',
								title: roleLoginViewDataGridColumnTitle1,
								width: 100,
							},
							{
								field: 'roleName',
								title: roleLoginViewDataGridColumnTitle2,
								width: 100,
							},
							{
								field: 'loginDatetime',
								title: roleLoginViewDataGridColumnTitle3,
								width: 150,
							},
							{
								field: 'loginIpAddress',
								title: roleLoginViewDataGridColumnTitle4,
								width: 100,
							},
						]],
						loadFilter: Utils.dataGridLoadFilter,
						pagination: true,
						pageSize: 50,
						pageList: [50, 100, 150, 200],
					});
					Component.Combobox.GameArea.create(
						Role.Login.View.DataGrid.gameAreaComboboxLabelContainer,
						Role.Login.View.DataGrid.gameAreaComboboxInputContainer
					);
					Component.Validatebox.Account.create(
						Role.Login.View.DataGrid.accountValidateboxLabelContainer,
						Role.Login.View.DataGrid.accountValidateboxInputContainer
					);
					Component.Validatebox.RoleName.create(
						Role.Login.View.DataGrid.roleNameValidateboxLabelContainer,
						Role.Login.View.DataGrid.roleNameValidateboxInputContainer
					);
					Component.Datetimebox.Start.create(
						Role.Login.View.DataGrid.startDatetimeboxLabelContainer,
						Role.Login.View.DataGrid.startDatetimeboxInputContainer
					);
					Component.Datetimebox.End.create(
						Role.Login.View.DataGrid.endDatetimeboxLabelContainer,
						Role.Login.View.DataGrid.endDatetimeboxInputContainer
					);
					Role.Login.View.DataGrid.searchButtonContainer.linkbutton({
						iconCls: 'icon-search',
						text: roleLoginViewDataGridToolbarButtonText1,
					});
					Role.Login.View.DataGrid.searchButtonContainer.bind(
						'click',
						Role.Login.View.DataGrid.doSearch
					);
				},
				
				doSearch: function() {
					Role.Login.View.dataGridPanelContainer.datagrid({
						url: '/index.php/Role/login/getListData',
						queryParams: {
							gameAreaId: Role.Login.View.DataGrid.gameAreaComboboxInputContainer.combobox('getValue'),
							account: Role.Login.View.DataGrid.accountValidateboxInputContainer[0].value,
							roleName: Role.Login.View.DataGrid.roleNameValidateboxInputContainer[0].value,
							startDateTime: Role.Login.View.DataGrid.startDatetimeboxInputContainer.datetimebox('getValue'),
							endDateTime: Role.Login.View.DataGrid.endDatetimeboxInputContainer.datetimebox('getValue'),
						}
					});
				},
			},
		},
	},
        Player: {
		
		init: function() {
			Language.getCurrLanguage();
			Utils.loadJavascriptFile('/application/views/libraries/component/' + language + '.js');
			Utils.loadJavascriptFile('/application/views/libraries/utils/' + language + '.js');
			Utils.loadJavascriptFile('/application/views/module/Role/' + language + '.js');
			Utils.initAjax();
			
			Role.Player.View.init();
		},
		
		View: {
			dataGridPanelContainer: '',
			
			init: function() {
				Role.Player.View.dataGridPanelContainer = $('#dataGridPanel #dataGrid');
				Role.Player.View.DataGrid.init();
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
				searchButtonContainer: '',
				
				
				init: function() {
					Role.Player.View.DataGrid.operatorIdComboboxLabelContainer = $('#dataGridPanel #toolbar #operatorIdComboboxLabel');
					Role.Player.View.DataGrid.operatorIdComboboxInputContainer = $('#dataGridPanel #toolbar #operatorIdComboboxInput');
                                        Role.Player.View.DataGrid.areaNumCombogridLabelContainer = $('#dataGridPanel #toolbar #areaNumCombogridLabel');
					Role.Player.View.DataGrid.areaNumCombogridInputContainer = $('#dataGridPanel #toolbar #areaNumCombogridInput');
					Role.Player.View.DataGrid.accountValidateboxLabelContainer = $('#dataGridPanel #toolbar #accountValidateboxLabel');
					Role.Player.View.DataGrid.accountValidateboxInputContainer = $('#dataGridPanel #toolbar #accountValidateboxInput');
					Role.Player.View.DataGrid.roleNameValidateboxLabelContainer = $('#dataGridPanel #toolbar #roleNameValidateboxLabel');
					Role.Player.View.DataGrid.roleNameValidateboxInputContainer = $('#dataGridPanel #toolbar #roleNameValidateboxInput');
					Role.Player.View.DataGrid.searchButtonContainer = $('#dataGridPanel #toolbar #searchButton');
                                        
					Role.Player.View.DataGrid.create();
                                        Role.Player.View.DataGrid.showCurrSelectInfo();
				},
				 
				create: function() {
					var width = $(document).width() - 40;
					var height = $(document).height() - 40;
					Role.Player.View.dataGridPanelContainer.width(width);
					Role.Player.View.dataGridPanelContainer.height(height);
					Role.Player.View.dataGridPanelContainer.datagrid({
                                                view:cardview,
						toolbar: '#toolbar',
                                                columns: [[
//							{
//								field: 'cid',
//								title: roleManageViewDataGridColumnTitle1,
//								width: 80,
//							},
//							{
//								field: 'sid',
//								title: roleManageViewDataGridColumnTitle2,
//                                                                width: 80,
//							},
//							{
//								field: 'roleName',
//								title: roleManageViewDataGridColumnTitle3,
//                                                                width: 80,
//							},
//                                                        {
//								field: 'job',
//								title: roleManageViewDataGridColumnTitle5,
//								width: 60,
//                                                               
//							},
//							{
//								field: 'level',
//								title: roleManageViewDataGridColumnTitle6,
//								width: 80,
//							},
//                                                        {
//								field: 'vip_level',
//								title: roleManageViewDataGridColumnTitle18,
//								width: 100,
//							},
//                                                        {
//								field: 'battle',
//								title: roleManageViewDataGridColumnTitle19,
//								width: 100,
//							},
//                                                        {
//								field: 'gold',
//								title: roleManageViewDataGridColumnTitle23,
//								width: 100,
//							},
//                                                        {
//								field: 'time',
//								title: roleManageViewDataGridColumnTitle20,
//								width: 100,
//							},
//                                                        {
//								field: 'amount',
//								title: roleManageViewDataGridColumnTitle21,
//								width: 100,
//							},
//                                                        {
//								field: 'money',
//								title: roleManageViewDataGridColumnTitle22,
//								width: 100,
//							},
//                                                        {
//								field: 'cash',
//								title: roleManageViewDataGridColumnTitle24,
//								width: 100,
//							},
//                                                        {
//								field: 'vigour',
//								title: roleManageViewDataGridColumnTitle25,
//								width: 100,
//							},
//                                                        {
//								field: 'draw_score',
//								title: roleManageViewDataGridColumnTitle26,
//								width: 100,
//							},
//                                                        {
//								field: 'boss_score',
//								title: roleManageViewDataGridColumnTitle27,
//								width: 100,
//							},
//                                                        {
//								field: 'bind_money',
//								title: roleManageViewDataGridColumnTitle28,
//								width: 100,
//							},
//                                                        {
//								field: 'honor',
//								title: roleManageViewDataGridColumnTitle29,
//								width: 100,
//							},
//                                                        {
//								field: 'ac_score',
//								title: roleManageViewDataGridColumnTitle30,
//								width: 100,
//							},
//                                                        {
//								field: 'contribution',
//								title: roleManageViewDataGridColumnTitle31,
//								width: 100,
//							},
//                                                        {
//								field: 'dust',
//								title: roleManageViewDataGridColumnTitle32,
//								width: 100,
//							},
//							{
//								field: 'sex',
//								title: roleManageViewDataGridColumnTitle4,
//								width: 60,
//							},
//							{
//								field: 'family',
//								title: roleManageViewDataGridColumnTitle7,
//								width: 80,
//							},
//							{
//								field: 'online',
//								title: roleManageViewDataGridColumnTitle8,
//								width: 100,
//							},
//							{
//								field: 'mapid',
//								title: roleManageViewDataGridColumnTitle9,
//								width: 100,
//							},
//                                                        {
//								field: 'x',
//								title: roleManageViewDataGridColumnTitle10,
//								width: 50,
//							},
//                                                        {
//								field: 'y',
//								title: roleManageViewDataGridColumnTitle11,
//								width: 50,
//							},
//                                                        {
//								field: 'total_online_time',
//								title: roleManageViewDataGridColumnTitle12,
//								width: 100,
//							},
//                                                        {
//								field: 'vipEndTime',
//								title: roleManageViewDataGridColumnTitle13,
//								width: 100,
//							},
//                                                        {
//								field: 'create_time',
//								title: roleManageViewDataGridColumnTitle14,
//								width: 100,
//							},
//                                                        {
//								field: 'last_login_time',
//								title: roleManageViewDataGridColumnTitle15,
//								width: 100,
//							},
//                                                        {
//								field: 'last_logout_time',
//								title: roleManageViewDataGridColumnTitle16,
//								width: 100,
//							},
//                                                        {
//								field: 'last_login_ip',
//								title: roleManageViewDataGridColumnTitle17,
//								width: 100,
//							},
//                                                        
						]],
//                                              singleSelect: true,
						loadFilter: Utils.dataGridLoadFilter,
//						pagination: true,
//						pageSize: 10,
//						pageList: [10,20,30,40,50],
						
					});
					Component.Combobox.OperatorId.create(
						Role.Player.View.DataGrid.operatorIdComboboxLabelContainer,
						Role.Player.View.DataGrid.operatorIdComboboxInputContainer
					);
                                        Component.Combogrid.AreaNum.create(
						Role.Player.View.DataGrid.areaNumCombogridLabelContainer,
						Role.Player.View.DataGrid.areaNumCombogridInputContainer
					);
					Component.Validatebox.Account.create(
						Role.Player.View.DataGrid.accountValidateboxLabelContainer,
						Role.Player.View.DataGrid.accountValidateboxInputContainer
					);
					Component.Validatebox.RoleName.create(
						Role.Player.View.DataGrid.roleNameValidateboxLabelContainer,
						Role.Player.View.DataGrid.roleNameValidateboxInputContainer
					);
					Role.Player.View.DataGrid.searchButtonContainer.linkbutton({
						iconCls: 'icon-search',
						text: roleManageViewDataGridToolbarButtonText1,
					});
					Role.Player.View.DataGrid.searchButtonContainer.bind(
						'click',
						Role.Player.View.DataGrid.doSearch
					);
				},
				
				load: function() {
					Role.Player.View.dataGridPanelContainer.datagrid('reload');
				},
				
				showCurrSelectInfo:function(){
                                        $.ajax({
                                                url: '/index.php/User/manage/getCurrSelectInfo',
                                        })
                                        .done(function(response) {
                                                if(response.data.operatorId!=false) {
                                                    Role.Player.View.DataGrid.operatorIdComboboxInputContainer.combobox('select',response.data.operatorId);
                                                    Role.Player.View.DataGrid.areaNumCombogridInputContainer.combogrid('setValue',response.data.gameAreaId);
                                                }
                                        })
                                }, 
				
				doSearch: function() {
					Role.Player.View.dataGridPanelContainer.datagrid({
						url: '/index.php/Role/player/getListData',
						queryParams: {
							operatorId: Role.Player.View.DataGrid.operatorIdComboboxInputContainer.combobox('getValue'),
                                                        gameAreaId: Role.Player.View.DataGrid.areaNumCombogridInputContainer.combogrid('getValues').toString(),
							account: Role.Player.View.DataGrid.accountValidateboxInputContainer[0].value,
							roleName: Role.Player.View.DataGrid.roleNameValidateboxInputContainer[0].value
						},
					});
				},
			},
		},
            },
        Banned: {
		init: function() {
			Language.getCurrLanguage();
			Utils.loadJavascriptFile('/application/views/libraries/component/' + language + '.js');
			Utils.loadJavascriptFile('/application/views/libraries/utils/' + language + '.js');
			Utils.loadJavascriptFile('/application/views/module/Role/' + language + '.js');
			Utils.initAjax();
			
			Role.Banned.View.init();
		},
		
		View: {
			dataGridPanelContainer: '',
			
			init: function() {
				Role.Banned.View.dataGridPanelContainer = $('#dataGridPanel #dataGrid');
				Role.Banned.View.DataGrid.init();
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
				searchButtonContainer: '',
				
				init: function() {
					Role.Banned.View.DataGrid.operatorIdComboboxLabelContainer = $('#dataGridPanel #toolbar #operatorIdComboboxLabel');
					Role.Banned.View.DataGrid.operatorIdComboboxInputContainer = $('#dataGridPanel #toolbar #operatorIdComboboxInput');
                                        Role.Banned.View.DataGrid.areaNumCombogridLabelContainer = $('#dataGridPanel #toolbar #areaNumCombogridLabel');
					Role.Banned.View.DataGrid.areaNumCombogridInputContainer = $('#dataGridPanel #toolbar #areaNumCombogridInput');
					Role.Banned.View.DataGrid.accountValidateboxLabelContainer = $('#dataGridPanel #toolbar #accountValidateboxLabel');
					Role.Banned.View.DataGrid.accountValidateboxInputContainer = $('#dataGridPanel #toolbar #accountValidateboxInput');
					Role.Banned.View.DataGrid.roleNameValidateboxLabelContainer = $('#dataGridPanel #toolbar #roleNameValidateboxLabel');
					Role.Banned.View.DataGrid.roleNameValidateboxInputContainer = $('#dataGridPanel #toolbar #roleNameValidateboxInput');
					Role.Banned.View.DataGrid.searchButtonContainer = $('#dataGridPanel #toolbar #searchButton');
					Role.Banned.View.DataGrid.create();
                                        
                                        Role.Banned.View.DataGrid.showCurrSelectInfo();
				},
				
				create: function() {
					var width = $(document).width() - 40;
					var height = $(document).height() - 40;
					Role.Banned.View.dataGridPanelContainer.width(width);
					Role.Banned.View.dataGridPanelContainer.height(height);
					Role.Banned.View.dataGridPanelContainer.datagrid({
						idField: "cid",
						toolbar: '#toolbar',
						columns: [[
							{
								field: 'cid',
								title: roleBannedViewDataGridColumnTitle1,
								width: 100,
							},
							{
								field: 'operatorId',
								title: roleBannedViewDataGridColumnTitle2,
								width: 100,
							},
							{
								field: 'roleName',
								title: roleBannedViewDataGridColumnTitle3,
								width: 150,
							},
							{
								field: 'bannedtype',
								title: roleBannedViewDataGridColumnTitle4,
								width: 100,
                                                                formatter: function(value) {
									if(value === '1') {
										return roleBannedTypeValue1;
									}
									else if(value === '2') {
										return roleBannedTypeValue2;
									}
								}
							},
                                                        {
								field: 'unbannedDateTime',
								title: roleBannedViewDataGridColumnTitle5,
								width: 100,
							},
                                                        {
								field: 'reason',
								title: roleBannedViewDataGridColumnTitle6,
								width: 100,
							},
                                                        {
								field: 'operatorDateTime',
								title: roleBannedViewDataGridColumnTitle7,
								width: 100,
							},
                                                        {
								field: 'status',
								title: roleBannedViewDataGridColumnTitle8,
								width: 100,
                                                                formatter: function(value) {
									if(value === '1') {
										return roleBannedStatusValue1;
									}
									else if(value === '2') {
										return roleBannedStatusValue1;
									}
								}
							},
                                                        {
								field: 'operator',
								title: roleBannedViewDataGridColumnTitle9,
								width: 100,
							},
						]],
						loadFilter: Utils.dataGridLoadFilter,
						pagination: true,
						pageSize: 50,
						pageList: [50, 100, 150, 200],
					});
					Component.Combobox.OperatorId.create(
						Role.Banned.View.DataGrid.operatorIdComboboxLabelContainer,
						Role.Banned.View.DataGrid.operatorIdComboboxInputContainer
					);
                                        Component.Combogrid.AreaNum.create(
						Role.Banned.View.DataGrid.areaNumCombogridLabelContainer,
						Role.Banned.View.DataGrid.areaNumCombogridInputContainer
					);
					Component.Validatebox.Account.create(
						Role.Banned.View.DataGrid.accountValidateboxLabelContainer,
						Role.Banned.View.DataGrid.accountValidateboxInputContainer
					);
					Component.Validatebox.RoleName.create(
						Role.Banned.View.DataGrid.roleNameValidateboxLabelContainer,
						Role.Banned.View.DataGrid.roleNameValidateboxInputContainer
					);
					Role.Banned.View.DataGrid.searchButtonContainer.linkbutton({
						iconCls: 'icon-search',
						text: roleLoginViewDataGridToolbarButtonText1,
					});
					Role.Banned.View.DataGrid.searchButtonContainer.bind(
						'click',
						Role.Banned.View.DataGrid.doSearch
					);
				},
				showCurrSelectInfo:function(){
                                        $.ajax({
                                                url: '/index.php/User/manage/getCurrSelectInfo',
                                        })
                                        .done(function(response) {
                                                if(response.data.operatorId!=false) {
                                                    Role.Banned.View.DataGrid.operatorIdComboboxInputContainer.combobox('select',response.data.operatorId);
                                                    Role.Banned.View.DataGrid.areaNumCombogridInputContainer.combogrid('setValue',response.data.gameAreaId);
                                                }
                                        })
                                }, 
				doSearch: function() {
					Role.Banned.View.dataGridPanelContainer.datagrid({
						url: '/index.php/Role/banned/getListData',
						queryParams: {
							operatorId: Role.Banned.View.DataGrid.operatorIdComboboxInputContainer.combobox('getValue'),
                                                        gameAreaId: Role.Banned.View.DataGrid.areaNumCombogridInputContainer.combogrid('getValues').toString(),
							account: Role.Banned.View.DataGrid.accountValidateboxInputContainer[0].value,
							roleName: Role.Banned.View.DataGrid.roleNameValidateboxInputContainer[0].value,
						}
					});
				},
			},
		},
	},
}