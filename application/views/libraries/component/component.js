var Component = {
	Combobox: {
		Language: {
			create: function(labelContainer, inputContainer) {
				labelContainer[0].innerHTML = componentLanguageComboboxLabel;
				inputContainer.combobox({
					valueField: 'languageFlag',
					textField: 'languageName',
					data: [
						{languageFlag: 'chinese', languageName: '中文'},
						{languageFlag: 'vietnamese', languageName: '越南文'},
					],
					value: language,
					onSelect: function(record) {
						$.ajax({
							url: '/index.php/Language/manage/setCurrLanguage',
							data: {'languageFlag': record.languageFlag}
						})
						.done(function(response) {
							if(response.errorCode === 0) {
								window.location = '/index.php/Portal/portal'; 
							}
							else {
								inputContainer.combobox('setValue', language);
							}
						});
					}
				});
			},
		},
		
		UserStatus: {
			create: function(labelContainer, inputContainer) {
				labelContainer[0].innerHTML = componentUserStatusComboboxLabel;
				inputContainer.combobox({
					valueField: 'userStatusId',
					textField: 'userStatusValue',
					data: [
						{userStatusId: '1', userStatusValue: userStatusValue1},
						{userStatusId: '2', userStatusValue: userStatusValue2},
					],
				});
			},
		},
		
		
		OperatorStatus: {
			create: function(labelContainer, inputContainer) {
				labelContainer[0].innerHTML = componentOperatorStatusComboboxLabel;
				inputContainer.combobox({
					valueField: 'operatorStatusId',
					textField: 'operatorStatusValue',
					data: [
						{operatorStatusId: '1', operatorStatusValue: operatorStatusValue1},
						{operatorStatusId: '2', operatorStatusValue: operatorStatusValue2},
					],
				});
			},
		},
		
		IpType: {
			create: function(labelContainer, inputContainer) {
				labelContainer[0].innerHTML = componentIpTypeComboboxLabel;
				inputContainer.combobox({
					valueField: 'ipTypeId',
					textField: 'ipTypeName',
					loader: function(param, success, error) {
						$.ajax({
							url: '/index.php/Ip/type/getListData',
						})
						.done(function(response) {
							if(response.errorCode === 0) {
								success(response.data);
							}
						})
					}
				});
			}
		},
		
		ServerType: {
			create: function(labelContainer, inputContainer) {
				labelContainer[0].innerHTML = componentServerTypeComboboxLabel;
				inputContainer.combobox({
					valueField: 'serverTypeId',
					textField: 'serverTypeName',
					loader: function(param, success, error) {
						$.ajax({
							url: '/index.php/Server/type/getListData',
						})
						.done(function(response) {
							if(response.errorCode === 0) {
								success(response.data);
							}
						})
					}
				});
			},
		},
		
		ServerStatus: {
			create: function(labelContainer, inputContainer) {
				labelContainer[0].innerHTML = componentServerStatusComboboxLabel;
				inputContainer.combobox({
					valueField: 'serverStatusId',
					textField: 'serverStatusValue',
					data: [
						{serverStatusId: '1', serverStatusValue: serverStatusValue1},
						{serverStatusId: '2', serverStatusValue: serverStatusValue2},
					]
				});
			},
		},
		
		Operator: {
			create: function(labelContainer, inputContainer) {
				labelContainer[0].innerHTML = componentOperatorComboboxLabel;
				inputContainer.combobox({
					valueField: 'operatorId',
					textField: 'operatorName',
					loader: function(param, success, error) {
						$.ajax({
							url: '/index.php/Operator/manage/getListData', 
						})
						.done(function(response) {
							if(response.errorCode === 0) {
								success(response.data.rows);
							}
						})
					},
				});
			},
		},
		
		Server: {
			create: function(labelContainer, inputContainer, serverTypeId) {
				var serverTypeId = arguments[2] === true ? arguments[2] : 3;
				labelContainer[0].innerHTML = componentServerComboboxLabel;
				inputContainer.combobox({
					valueField: 'serverId',
					textField: 'serverName',
					loader: function(param, success, error) {
						$.ajax({
							url: '/index.php/Server/manage/getListData',
							data: {
								serverTypeId: serverTypeId,
							}
						})
						.done(function(response) {
							if(response.errorCode === 0) {
								success(response.data.rows);
							}
						})
					}
				});
			},
		},
		
		GameAreaStatus: {
			create: function(labelContainer, inputContainer) {
				labelContainer[0].innerHTML = componentGameAreaStatusComboboxLabel;
				inputContainer.combobox({
					valueField: 'gameAreaStatusId',
					textField: 'gameAreaStatusValue',
					data: [
						{gameAreaStatusId: '1', gameAreaStatusValue: gameAreaStatusValue1},
						{gameAreaStatusId: '2', gameAreaStatusValue: gameAreaStatusValue2},
						{gameAreaStatusId: '3', gameAreaStatusValue: gameAreaStatusValue3},
						{gameAreaStatusId: '4', gameAreaStatusValue: gameAreaStatusValue4},
						{gameAreaStatusId: '5', gameAreaStatusValue: gameAreaStatusValue5},
						{gameAreaStatusId: '6', gameAreaStatusValue: gameAreaStatusValue6},
						{gameAreaStatusId: '7', gameAreaStatusValue: gameAreaStatusValue7},
					],
				});
			},
		},
		
		TimeCycleType: {
			create: function(labelContainer, inputContainer) {
				labelContainer[0].innerHTML = componentTimeCycleTypeComboboxLabel;
				inputContainer.combobox({
					valueField: 'timeCycleTypeId',
					textField: 'timeCycleTypeValue',
					data: [
						{timeCycleTypeId: '1', timeCycleTypeValue: timeCycleTypeValue1},
						{timeCycleTypeId: '2', timeCycleTypeValue: timeCycleTypeValue2},
						{timeCycleTypeId: '3', timeCycleTypeValue: timeCycleTypeValue3},
						{timeCycleTypeId: '4', timeCycleTypeValue: timeCycleTypeValue4},
						{timeCycleTypeId: '5', timeCycleTypeValue: timeCycleTypeValue5},
						{timeCycleTypeId: '6', timeCycleTypeValue: timeCycleTypeValue6},
					],
				});
			},
		},
		
		LogType: {
			create: function(labelContainer, inputContainer) {
				labelContainer[0].innerHTML = componentLogTypeComboboxLabel;
				inputContainer.combobox({
					valueField: 'logTypeId',
					textField: 'logTypeValue',
					data: [
						{logTypeId: '1', logTypeValue: logTypeValue1},
						{logTypeId: '2', logTypeValue: logTypeValue2},
					],
				});
			},
		},
                
                Use: {
			create: function(labelContainer, inputContainer) {
				labelContainer[0].innerHTML = componentUseComboboxLabel;
				inputContainer.combobox({
					valueField: 'useId',
					textField: 'useValue',
					data: [
						{useId: '1', useValue: useValue1},
						{useId: '2', useValue: useValue2},
					],
				});
			},
		},
		Gift: {
			create: function(labelContainer, inputContainer) {
				labelContainer[0].innerHTML = componentGiftComboboxLabel;
				inputContainer.combobox({
					valueField: 'giftId',
					textField: 'giftName',
					loader: function(param, success, error) {
						$.ajax({
							url: '/index.php/Gift/send/getList',
						})
						.done(function(response) {
							if(response.errorCode === 0) {
								success(response.data.rows);
							}
						})
					},
				});
			},
		},
                GiftType: {
			create: function(labelContainer, inputContainer) {
				labelContainer[0].innerHTML = componentGiftTypeComboboxLabel;
				inputContainer.combobox({
					valueField: 'giftTypeId',
					textField: 'giftTypeValue',
					data: [
						{giftTypeId: '1', giftTypeValue: giftTypeValue1},
						{giftTypeId: '2', giftTypeValue: giftTypeValue2},
                                                {giftTypeId: '3', giftTypeValue: giftTypeValue3},
                                                {giftTypeId: '4', giftTypeValue: giftTypeValue4},
					],
				});
			},
		},
		CurrencyType: {
			create: function(labelContainer, inputContainer) {
				labelContainer[0].innerHTML = componentCurrencyTypeComboboxLabel;
				inputContainer.combobox({
                                        width: 100,
					valueField: 'currencyTypeId',
					textField: 'currencyTypeValue',
					loader: function(param, success, error) {
						$.ajax({
							url: '/index.php/Currency/type/getListData',
						})
						.done(function(response) {
							if(response.errorCode === 0) {
								success(response.data.rows);
							}
						})
					},
                                       
					value: 1,
				});
	            $(' #dataGridPanelAll #toolbar #currencyTypeComboboxInput').combobox({  
	                    valueField: 'currencyTypeId',
						textField: 'currencyTypeValue',
	                    loadFilter:function(){
	                        var o = [
	                            {'currencyTypeId':'1','currencyTypeValue':'全部'},
	                            {'currencyTypeId':'2','currencyTypeValue':'元宝'},
	                            {'currencyTypeId':'3','currencyTypeValue':'绑元'},
	                        ];
	                        $('#dataGridPanelAll #toolbar #currencyTypeComboboxInput').combobox("select",1);
	                        return o;
	                    }
	            });   
			},
		},
		// 发送邮件装备是否解绑
		Type: {
			create: function(labelContainer, inputContainer) {
				labelContainer[0].innerHTML = componentTypeComboboxLabel;
				inputContainer.combobox({
					// width: 100, 
					valueField: 'type',
					textField: 'value',
					data: [
						{type: '0', value: typeValue1},	//不绑定
						{type: '1', value: typeValue2},  	//绑定
					],
					value: 1,
				});
			},
		},
		
		Item: {
			create: function(labelContainer, inputContainer) {
				labelContainer[0].innerHTML = componentItemComboboxLabel;
				inputContainer.combobox({
					valueField: 'id',
					textField: 'itemName',
					loader: function(param, success, error) {
						$.ajax({
							url: '/index.php/Item/manage/getListData',
						})
						.done(function(response) {
							if(response.errorCode === 0) {
								success(response.data.rows);
							}
						})
					},
				})
			},
		},
                
                ItemType: {
			create: function(labelContainer, inputContainer) {
				labelContainer[0].innerHTML = componentItemTypeComboboxLabel;
				inputContainer.combobox({
					valueField: 'ItemTypeId',
					textField: 'ItemTypeValue',
					data: [
						{ItemTypeId: '1', ItemTypeValue: '1'},
						{ItemTypeId: '2', ItemTypeValue: '2'},
					],
                                        onSelect:function(row){
                                                $('#itemIdCombogridInput').combogrid({
                                                    url: '/index.php/Item/manage/getListData',
                                                    queryParams: {
                                                            ItemTypeId: row.ItemTypeId,
                                                    },
                                                });
                                                
                                        }
				})
			},
		},
                
		Card: {
			create: function(labelContainer, inputContainer) {
				labelContainer[0].innerHTML = componentCardComboboxLabel;
				inputContainer.combobox({
					valueField: 'cardId',
					textField: 'cardName',
					loader: function(param, success, error) {
						$.ajax({
							url: '/index.php/Card/manage/getListData',
						})
						.done(function(response) {
							if(response.errorCode === 0) {
								success(response.data.rows);
							}
						})
					},
				})
			},
		},
		
		ReportType: {
			create: function(labelContainer, inputContainer) {
				labelContainer[0].innerHTML = componentReportTypeComboboxLabel;
				inputContainer.combobox({
					valueField: 'reportTypeId',
					textField: 'reportTypeValue',
					data: [
						{reportTypeId: '1', reportTypeValue: reportTypeValue1},
						{reportTypeId: '2', reportTypeValue: reportTypeValue2},
                                                {reportTypeId: '3', reportTypeValue: reportTypeValue3},
					],
					value: 2,
				});
			}
		},
		
		UseLimit: {
			create: function(labelContainer, inputContainer) {
				labelContainer[0].innerHTML = componentUseLimitComboboxLabel;
				inputContainer.combobox({
					valueField: 'useLimitId',
					textField: 'useLimitValue',
					data: [
						{useLimitId: '1', useLimitValue: useLimitValue1},
						{useLimitId: '2', useLimitValue: useLimitValue2},
						{useLimitId: '3', useLimitValue: useLimitValue3},
					],
				});
			},
		},
		
		PaySummaryType: {
			create: function(labelContainer, inputContainer) {
				labelContainer[0].innerHTML = componentPaySummaryComboboxLabel;
				inputContainer.combobox({
					valueField: 'paySummaryTypeId',
					textField: 'paySummaryTypeValue',
					data: [
						{paySummaryTypeId: '1', paySummaryTypeValue: paySummaryTypeValue1},
						{paySummaryTypeId: '2', paySummaryTypeValue: paySummaryTypeValue2},
					],
					value: 1,
				});
			},
		},
		
		Version: {
			create: function(labelContainer, inputContainer) {
				labelContainer[0].innerHTML = componentVersionLabel;
				inputContainer.combobox({
					valueField: 'id',
					textField: 'version',
					loader: function(param, success, error) {
						$.ajax({
							url: '/index.php/Version/manage/getListData',
						})
						.done(function(response) {
							if(response.errorCode === 0) {
								success(response.data.rows);
							}
						});
					},
				});
			},
		},
		
		BattleServerStatus: {
			create: function(labelContainer, inputContainer) {
				labelContainer[0].innerHTML = componentBattleServerStatusLabel;
				inputContainer.combobox({
					valueField: 'id',
					textField: 'value',
					data: [
						{id: '1', value: battleServerStatusValue1},
						{id: '2', value: battleServerStatusValue2},
						{id: '3', value: battleServerStatusValue3},
						{id: '4', value: battleServerStatusValue4},
					],
				});
			},
		},
        AnnouncementType: {
			create: function(labelContainer, inputContainer) {
				labelContainer[0].innerHTML = componentAnnouncementTypeLabel;
				inputContainer.combobox({
					valueField: 'id',
					textField: 'value',
					data: [
						{id: '1', value: announcementValue1},
						{id: '2', value: announcementValue2},
						{id: '3', value: announcementValue3},
						{id: '4', value: announcementValue4},
                                                {id: '5', value: announcementValue5},
						{id: '6', value: announcementValue6},
						{id: '7', value: announcementValue7},
						{id: '8', value: announcementValue8},
                                                {id: '9', value: announcementValue9},
					],
				});
			},
		},
        GetType: {
			create: function(labelContainer, inputContainer) {
				labelContainer[0].innerHTML = componentGetTypeLabel;
				inputContainer.combobox({
                                        width: 100,
					valueField: 'id',
					textField: 'value',
					data: [
						{id: '1', value: getValue1},
						{id: '2', value: getValue2},
					],
				});
			},
		},
        Flag:{
            create:function(labelContainer, inputContainer) {
                 labelContainer[0].innerHTML = componentFlagLabel;
                 inputContainer.combobox({
					valueField: 'id',
					textField: 'value',
					data: [
						{id: '0', value: flagStatusValue1},
						{id: '1', value: flagStatusValue2},
					],
				});
            },
        },
        Online:{
            create:function(labelContainer, inputContainer) {
                 labelContainer[0].innerHTML = componentOnlineLabel;
                 inputContainer.combobox({
                                        width: 100,
					valueField: 'onlineId',
					textField: 'value',
					data: [
						{onlineId: '1', value: onlineStatusValue1},
						{onlineId: '2', value: onlineStatusValue2},
                                                {onlineId: '3', value: onlineStatusValue3},
					],
                                        value: 1,
				});
            },
        },       
        Playerlevel:{
            create:function(labelContainer, inputContainer) {
                 labelContainer[0].innerHTML = componentPlayerlevelLabel;
                 inputContainer.combobox({
                                        width: 100,
					valueField: 'playerlevel',
					textField: 'value',
					data: [
						{playerlevel: '1', value: '1'},
					],
				});
            },
        },       
        Vip:{
            create:function(labelContainer, inputContainer) {
                 labelContainer[0].innerHTML = componentVipComboboxLabel;
                 inputContainer.combobox({
                                        width: 100,
					valueField: 'vipId',
					textField: 'value',
					data: [
						{vipId: '1', value: vipStatusValue1},
						{vipId: '2', value: vipStatusValue2},
                                                {vipId: '3', value: vipStatusValue3},
					],
                                        value: 1,
				});
            },
        }, 
        LogTypeReport:{
                create:function(labelContainer, inputContainer) {
                labelContainer[0].innerHTML = componentLogTypeLabel;
                inputContainer.combobox({
                                       width: 100,
                                       valueField: 'typeId',
                                       textField: 'value',
                                       data: [
                                               {typeId: '1', value: logTypeReportValue1},
                                               {typeId: '2', value: logTypeReportValue2},
                                               {typeId: '3', value: logTypeReportValue3},
                                       ],
                               });
                },
        },
        Pf:{
                create:function(labelContainer, inputContainer) {
                labelContainer[0].innerHTML = componentPfLabel;
                inputContainer.combobox({
                                       width: 100,
                                       valueField: 'pfId',
                                       textField: 'value',
                                       data: [
                                               {pfId: '1', value: pfValue1},
                                               {pfId: '2', value: pfValue2},
                                       ],
                               });
                },
        },
        Level:{
            create:function(labelContainer, inputContainer) {
                 labelContainer[0].innerHTML = componentLevelLabel;
                 inputContainer.combobox({
                                        width: 100,
					valueField: 'levelId',
					textField: 'value',
					data: [
						{levelId: '1', value: levelStatusValue1},
						{levelId: '2', value: levelStatusValue2},
                                                {levelId: '3', value: levelStatusValue3},
                                                {levelId: '0', value: levelStatusValue4},
					],
				});
            },
        },    
        Reward:{
            create:function(labelContainer, inputContainer) {
                 labelContainer[0].innerHTML = componentRewardLabel;
                 inputContainer.combobox({
                                        width: 100,
					valueField: 'State',
					textField: 'value',
					data: [
						{State: '1', value: rewardStatusValue1},
						{State: '2', value: rewardStatusValue2},
                                                {State: '3', value: rewardStatusValue3},
                                                {State: '4', value: rewardStatusValue4},
					],
				});
            },
        }, 
        State:{
            create:function(labelContainer, inputContainer) {
                 labelContainer[0].innerHTML = componentStateLabel;
                 inputContainer.combobox({
                                        width: 100,
					valueField: 'State',
					textField: 'value',
					data: [
						{State: '1', value: stateStatusValue1},
						{State: '2', value: stateStatusValue2},
                                                {State: '3', value: stateStatusValue3},
                                                {State: '4', value: stateStatusValue4},
					],
				});
            },
        },     
        QuestionType:{
            create:function(labelContainer, inputContainer) {
                 labelContainer[0].innerHTML = componentQuestionTypeLabel;
                 inputContainer.combobox({
                                        width: 100,
					valueField: 'QuestionType',
					textField: 'value',
					data: [
						{QuestionType: '1', value: questionTypeStatusValue1},
						{QuestionType: '2', value: questionTypeStatusValue2},
                                                {QuestionType: '3', value: questionTypeStatusValue3},
                                                {QuestionType: '4', value: questionTypeStatusValue4},
					],
				});
            },
        },     
       // AreaNum: {
		// 	create: function(labelContainer, inputContainer) {
		// 		labelContainer[0].innerHTML = componentAreaNumComboboxLabel;
		// 		inputContainer.combobox({
		// 			valueField: 'gameAreaId',
		// 			textField: 'areaNum'
		// 		});
		// 	},
		// },
        OperatorId: {
			create: function(labelContainer, inputContainer) {
				labelContainer[0].innerHTML = componentOperatorIdComboboxLabel;
				inputContainer.combobox({
                                        width: 100,
					valueField: 'operatorId',
					textField: 'operatorName',
					loader: function(param, success, error) {
						$.ajax({
							url: '/index.php/Operator/manage/getListData',
						})
						.done(function(response) {
							if(response.errorCode === 0) {
                                                            success(response.data.rows);
							}
						});
					},
                                        onChange:function(newValue,oldValue){
                                                $('#areaNumCombogridInput').combogrid({
                                                    url: '/index.php/GameArea/manage/getListData',
                                                    queryParams: {
                                                            operatorId: newValue,
                                                            checkPrivilege: 1,
                                                    },
                                                });
                                                $('#rewardWindow #areaNumCombogridInput').combogrid({
                                                    url: '/index.php/GameArea/manage/getListData',
                                                    queryParams: {
                                                            operatorId: newValue,
                                                            checkPrivilege: 1,
                                                    },
                                                });
                                                $('#addWindow #areaNumCombogridInput').combogrid({
                                                    url: '/index.php/GameArea/manage/getListData',
                                                    queryParams: {
                                                            operatorId: newValue,
                                                            checkPrivilege: 1,
                                                    },
                                                });
                                                $('#applySysWindow #areaNumCombogridInput').combogrid({
                                                    url: '/index.php/GameArea/manage/getListData',
                                                    multiple: false,
                                                    queryParams: {
                                                            operatorId: newValue,
                                                            checkPrivilege: 1,
                                                    },
                                                });
                                                $('#applyWindow #areaNumCombogridInput').combogrid({
                                                    url: '/index.php/GameArea/manage/getListData',
                                                    queryParams: {
                                                            operatorId: newValue,
                                                            checkPrivilege: 1,
                                                    },
                                                });
                                           // }
                                            
                                        }
				});
			},
		},
	},
	
	Combogrid: {
		AreaNum: {
			create: function(labelContainer, inputContainer, multiple) {
				var multiple = arguments[2] === true ? arguments[2] : false;
				labelContainer[0].innerHTML = componentAreaNumCombogridLabel;
				inputContainer.combogrid({
					width: 100,
					multiple: true,
//                                        url: '/index.php/GameArea/manage/getListData',
					idField: 'gameAreaId',
					textField: 'areaNum',
					queryParams: {
//                                            operatorId:$('#operatorIdComboboxInput').combobox('getValue'),
                                            checkPrivilege: 1,
                                        },
                                        columns:[[
                                        {
                                                checkbox: true,
                                        },
                                        {
                                                field: 'areaNum',
                                                title: gameAreaCombogridColumnTitle2,
                                                width: 60
                                        }
                                        ]],
                                     loadFilter: Utils.dataGridLoadFilter,
                                     onShowPanel:function(){
                                        
                                     },
				});
			},
		},
		ItemId: {
			create: function(labelContainer, inputContainer, multiple) {
				var multiple = arguments[2] === true ? arguments[2] : false;
				labelContainer[0].innerHTML = componentItemIdCombogridLabel;
				inputContainer.combogrid({
					width: 100,
					multiple: true,
					idField: 'itemId',
					textField: 'itemId',
					queryParams: {
                                            checkPrivilege: 1,
                                        },
                                        columns:[[
                                        {
                                                checkbox: true,
                                        },
                                        {
                                                field: 'itemId',
                                                title: itemIdCombogridColumnTitle1,
                                                width: 100
                                        }
                                        ]],
                                     loadFilter: Utils.dataGridLoadFilter,
				});
			},
		},
		BattleServer: {
			create: function(labelContainer, inputContainer, multiple) {
				var multiple = arguments[2] === true ? arguments[2] : false;
				labelContainer[0].innerHTML = componentBattleServerCombogridLabel;
				inputContainer.combogrid({
					panelWidth: 200,
					multiple: multiple,
					idField: 'battleServerId',
					textField: 'battleServerName',
					url: '/index.php/BattleServer/manage/getListData',
					columns:[[
						{
							checkbox: true,
						},
						{
							field: 'operatorName',
							title: gameAreaCombogridColumnTitle1,
							width: 100
						},
						{
							field: 'areaNum',
							title: gameAreaCombogridColumnTitle2,
							width: 60
						}
					]],
					loadFilter: Utils.dataGridLoadFilter,
				});
			},
		},
	},
	
	Validatebox: {
		Username: {
			create: function(labelContainer, inputContainer) {
				labelContainer[0].innerHTML = componentUsernameValidateboxLabel;
				inputContainer.validatebox();
			},
		},
		
		Password: {
			create: function(labelContainer, inputContainer) {
				labelContainer[0].innerHTML = componentPasswordValidateboxLabel;
				inputContainer.validatebox();
			},
		},
		
		NewPassword: {
			create: function(labelContainer, inputContainer) {
				labelContainer[0].innerHTML = componentNewPasswordValidateboxLabel;
				inputContainer.validatebox();
			},
		},
		
		ConfirmPassword: {
			create: function(labelContainer, inputContainer) {
				labelContainer[0].innerHTML = componentConfirmPasswordValidateboxLabel;
				inputContainer.validatebox();
			},
		},
		
		Name: {
			create: function(labelContainer, inputContainer) {
				labelContainer[0].innerHTML = componentNameValidateboxLabel;
				inputContainer.validatebox();
			},
		},
		
		OperatorName: {
			create: function(labelContainer, inputContainer) {
				labelContainer[0].innerHTML = componentOperatorNameValidateboxLabel;
				inputContainer.validatebox();
			},
		},
		
		OperatorFlag: {
			create: function(labelContainer, inputContainer) {
				labelContainer[0].innerHTML = componentOperatorFlagValidateboxLabel;
				inputContainer.validatebox();
			},
		},
		
		IpAddress: {
			create: function(labelContainer, inputContainer) {
				labelContainer[0].innerHTML = componentIpAddressValidateboxLabel;
				inputContainer.validatebox();
			},
		},
		
		ServerName: {
			create: function(labelContainer, inputContainer) {
				labelContainer[0].innerHTML = componentServerNameValidateboxLabel;
				inputContainer.validatebox();
			},
		},
		
		Memo: {
			create: function(labelContainer, inputContainer) {
				labelContainer[0].innerHTML = componentMemoValidateboxLabel;
				inputContainer.validatebox();
			},
		},
		
		AreaNum: {
			create: function(labelContainer, inputContainer) {
				labelContainer[0].innerHTML = componentAreaNumValidateboxLabel;
				inputContainer.validatebox();
			},
		},
		
		PortGroup: {
			create: function(labelContainer, inputContainer) {
				labelContainer[0].innerHTML = componentPortGroupValidateboxLabel;
				inputContainer.validatebox();
			},
		},
		
		Domain: {
			create: function(labelContainer, inputContainer) {
				labelContainer[0].innerHTML = componentDomainValidateboxLabel;
				inputContainer.validatebox();
			},
		},
		
		GameDir: {
			create: function(labelContainer, inputContainer) {
				labelContainer[0].innerHTML = componentGameDirValidateboxLabel;
				inputContainer.validatebox();
			},
		},
		
		DatabaseName: {
			create: function(labelContainer, inputContainer) {
				labelContainer[0].innerHTML = componentDatabaseNameValidateboxLabel;
				inputContainer.validatebox();
			},
		},
		
		Account: {
			create: function(labelContainer, inputContainer) {
				labelContainer[0].innerHTML = componentAccountValidateboxLabel;
				inputContainer.validatebox();
			},
		},
		
		RoleName: {
			create: function(labelContainer, inputContainer) {
				labelContainer[0].innerHTML = componentRoleNameValidateboxLabel;
				inputContainer.validatebox();
			},
		},
		
                Passport: {
			create: function(labelContainer, inputContainer) {
				labelContainer[0].innerHTML = componentPassportValidateboxLabel;
				inputContainer.validatebox();
			},
		},
                
		TimeCycle: {
			create: function(labelContainer, inputContainer) {
				labelContainer[0].innerHTML = componentTimeCycleValidateboxLabel;
				inputContainer.validatebox();
			},
		},
		
		Reason: {
			create: function(labelContainer, inputContainer) {
				labelContainer[0].innerHTML = componentReasonValidateboxLabel;
				inputContainer.validatebox();
			},
		},
		
		SenderName: {
			create: function(labelContainer, inputContainer) {
				labelContainer[0].innerHTML = componentSenderNameValidateboxLabel;
				inputContainer.validatebox();
			},
		},
		
		Title: {
			create: function(labelContainer, inputContainer) {
				labelContainer[0].innerHTML = componentTitleValidateboxLabel;
				inputContainer.validatebox();
			},
		},
		
		CardName: {
			create: function(labelContainer, inputContainer) {
				labelContainer[0].innerHTML = componentCardNameValidateboxLabel;
				inputContainer.validatebox();
			},
		},
		
		Version: {
			create: function(labelContainer, inputContainer) {
				labelContainer[0].innerHTML = componentVersionLabel;
				inputContainer.validatebox();
			},
		},
		
		DirectoryName: {
			create: function(labelContainer, inputContainer) {
				labelContainer[0].innerHTML = componentDirectoryNameLabel;
				inputContainer.validatebox();
			},
		},
		
		LineNum: {
			create: function(labelContainer, inputContainer) {
				labelContainer[0].innerHTML = componentLineNumLabel;
				inputContainer.validatebox();
			},
		},
                Level: {
			create: function(labelContainer, inputContainer) {
				labelContainer[0].innerHTML = componentLevelLabel;
				inputContainer.validatebox();
			},
		},
                Vip: {
			create: function(labelContainer, inputContainer) {
				labelContainer[0].innerHTML = componentVipLabel;
				inputContainer.validatebox();
			},
		},
                Gold: {
			create: function(labelContainer, inputContainer) {
				labelContainer[0].innerHTML = componentGoldLabel;
				inputContainer.validatebox();
			},
		},
                Cost: {
			create: function(labelContainer, inputContainer) {
				labelContainer[0].innerHTML = componentCostLabel;
				inputContainer.validatebox();
			},
		},
                OrderId: {
			create: function(labelContainer, inputContainer) {
				labelContainer[0].innerHTML = componentOrderIdLabel;
				inputContainer.validatebox();
			},
		}
	},
	
	Numberbox: {
		Count: {
			create: function(labelContainer, inputContainer) {
				labelContainer[0].innerHTML = componentCountNumberboxLabel;
				inputContainer.numberbox({
					min: 1,
				});
			},
		},
		Bit: {
			create: function(labelContainer, inputContainer) {
				labelContainer[0].innerHTML = componentBitNumberboxLabel;
				inputContainer.numberbox({
					min: 1,
				});
			},
		},
                ItemCount: {
			create: function(labelContainer, inputContainer) {
				labelContainer[0].innerHTML = componentItemCountNumberboxLabel;
				inputContainer.numberbox({
					min: 1,
				});
			},
		},
                
		TimeInterval: {
			create: function(labelContainer, inputContainer) {
				labelContainer[0].innerHTML = componentTimeIntervalNumberboxLabel;
				inputContainer.numberbox({
					min: 1,
				});
			},
		},
		
		MaxGameAreaNum: {
			create: function(labelContainer, inputContainer) {
				labelContainer[0].innerHTML = componentMaxGameAreaNumLabel;
				inputContainer.numberbox({
					min: 0,
				});
			},
		},
		
		Money: {
			create: function(labelContainer, inputContainer) {
				labelContainer[0].innerHTML = componentMoneyLabel;
				inputContainer.numberbox({
					min: 1,
				});
			}
		},
                Day: {
			create: function(labelContainer, inputContainer) {
				labelContainer[0].innerHTML = componentDayLabel;
				inputContainer.numberbox({
					min: 1,
				});
			}
		},
	},
	
	Textbox: {
		Content: {
			create: function(labelContainer, inputContainer) {
				labelContainer[0].innerHTML = componentContentTextboxLabel;
			},
		},
                RoleName: {
			create: function(labelContainer, inputContainer) {
				labelContainer[0].innerHTML = componentRoleNameTextboxLabel;
			},
		},
	},
	
	Datebox: {
		Search: {
			create: function(labelContainer, inputContainer) {
				labelContainer[0].innerHTML = componentSearchDateboxLabel;
				inputContainer.datebox({
					formatter: Utils.dateFormatter
				});
			},
		},
		
		Start: {
			create: function(labelContainer, inputContainer) {
				labelContainer[0].innerHTML = componentStartDateboxLabel;
				inputContainer.datebox({
					formatter: Utils.dateFormatter
				});
			},
		},
		
		End: {
			create: function(labelContainer, inputContainer) {
				labelContainer[0].innerHTML = componentEndDateboxLabel;
				inputContainer.datebox({
					formatter: Utils.dateFormatter
				});
			},
		},
	},

	Datetimebox: {
		GameAreaOpen: {
			create: function(labelContainer, inputContainer) {
				labelContainer[0].innerHTML = componentGameAreaOpenDatetimeboxLabel;
				inputContainer.datetimebox({
					formatter: Utils.datetimeFormatter
				});
			},
		},
		
		Start: {
			create: function(labelContainer, inputContainer) {
				labelContainer[0].innerHTML = componentStartDatetimeboxLabel;
				inputContainer.datetimebox({
					formatter: Utils.datetimeFormatter,
				});
			},
		},
		
		End: {
			create: function(labelContainer, inputContainer) {
				labelContainer[0].innerHTML = componentEndDatetimeboxLabel;
				inputContainer.datetimebox({
					formatter: Utils.datetimeFormatter,
				});
			},
		},
		
		Send: {
			create: function(labelContainer, inputContainer) {
				labelContainer[0].innerHTML = componentSendDatetimeboxLabel;
				inputContainer.datetimebox({
					formatter: Utils.datetimeFormatter,
				});
			},
		},
	},
	
	Range: {
		RoleLevel: {
			create: function(labelContainer, minInputContainer, maxInputContainer) {
				labelContainer[0].innerHTML = componentRoleLevelRangeLabel;
				minInputContainer.validatebox();
				maxInputContainer.validatebox();
			},
		},
		
		VipLevel: {
			create: function(labelContainer, minInputContainer, maxInputContainer) {
				labelContainer[0].innerHTML = componentVipLevelRangeLabel;
				minInputContainer.validatebox();
				maxInputContainer.validatebox();
			},
		},
	},
}