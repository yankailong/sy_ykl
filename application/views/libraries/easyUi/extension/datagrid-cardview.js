var cardview = $.extend({}, $.fn.datagrid.defaults.view, {
			renderRow: function(target, fields, frozen, rowIndex, rowData){  
				var cc = [];
                                cc.push('<div style ="marign:0 auto;">')
                                cc.push('<table style="width: 50%;border-width:1px;border-color:black;border-style:solid;font-size:16px;text-align:left;rules:all;">')
				if (!frozen){
                                   
                                    
					for(var key in rowData){
                                                
                                                cc.push('<tr colspan=' + key.length + 'style="padding:50px 20px;border-color:black;border-style:solid;">')
                                                cc.push('<td style="padding-left:20px;border-color:black;border-style:solid;">');
                                                cc.push( key+':' );
                                                cc.push('</td><td style="border-color:black;border-color:black;border-style:solid;">');
                                                cc.push( rowData[key]);
                                                cc.push('</td>');
                                                cc.push('</tr>');
                                               
                                        }
                                       
                                }
                                cc.push('</table>');
                                cc.push('</div>');
				return cc.join('');
			}
});
       
