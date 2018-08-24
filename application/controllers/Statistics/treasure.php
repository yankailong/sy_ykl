<?php
class Treasure extends MY_Controller
{
    public function __construct(){
        log_message('debug', '=====开始调用Statistics->Treasure->__construct接口=====');
        parent::__construct();
        $this->loadLanguageFile('application/controllers/Statistics/');
        log_message('debug', '=====调用Statistics->Treasure->__construct接口结束=====');
    }
  
    public function showView() {
        $this->load->view('module/Statistics/treasure.htm');
    }
  
    public function getListData() {
        log_message('debug', '=====开始调用Statistics->Treasure->getListData接口=====');
        $this->verifyPrivilege();
        
        try {
            $operatorId = $this->param->getParam('operatorId', array('method' => 'int', 'min' => 1, 'emptyErrorCode' => 201, 'invalidErrorCode' => 1));
            $gameAreaId = $this->param->getParam('gameAreaId',array('method'=> 'string','emptyErrorCode' => 201, 'invalidErrorCode' => 1));
            $startDate = $this->param->getParam('startDate', array('method' => 'string', 'emptyErrorCode' => '2040001', 'invalidErrorCode' => 1), 'post', true);
            $endDate = $this->param->getParam('endDate', array('method' => 'string', 'emptyErrorCode' => '2040001', 'invalidErrorCode' => 1), 'post', true);
            $page = $this->param->getParam('page', array('method' => 'int', 'min' => 1, 'emptyErrorCode' => 1, 'invalidErrorCode' => 1), 'post', true);
            $rows = $this->param->getParam('rows', array('method' => 'int', 'min' => 1, 'emptyErrorCode' => 1, 'invalidErrorCode' => 1), 'post', true);
            $this->initGameAreaInfo($operatorId,$gameAreaId);
                 // $sql="
                 //                select
                 //                        a.`param`,b.`item{$this->currLanguage}Name` as `itemName`,b.`price`
                 //                from
                 //                        `t_cfg_itemshop_param` a
                 //                left join
                 //                        `t_cfg_item` b
                 //                on
                 //                        a.`itemType` = b.`itemType`
                 //                        and
                 //                        a.`itemId` = b.`itemId`
                 //            ";

                 $sql="
                                select
                                        b.`item{$this->currLanguage}Name` as `itemName`,b.`itemId`
                                from
                                        
                                        `t_cfg_item` b
                                where
                                        b.`itemType` = 1
                                        
                                        
                            ";           
                $item = $this->gmDatabase->getArray($sql);
                
                foreach ($item as $key=>$val){
                    $itemName[$val['itemId']] = $val['itemName'];
                    // $itemId[$val['itemId']] = $val['itemName'];
                    
                }
          
               
                $sql = "
                    select 
                        <selectColumns>

                    from
                        `log_item_change`
                    where
                        `reason`=1414

                "; 
                     // unix_timestamp(`date`) >= unix_timestamp('{$startDate}')       
                if($startDate) { 
                    $sql .= "
                        and
                        
                        `time` >= unix_timestamp('{$startDate} 00:00:00')
                    ";
                }

                if($endDate) {
                    $sql .= "
                        and
                        `time` <= unix_timestamp('{$endDate} 23:59:59')
                    ";
                }


                // if($startDate) {
                //     $sql .= "
                //         and
                //         FROM_UNIXTIME(`time`) >= '{$startDate} 00:00:00'
                //     ";
                // }
                
                // if($endDate) {
                //     $sql .= "
                //         and
                //         FROM_UNIXTIME(`time`) <= '{$endDate} 23:59:59'
                //     ";
                // }




                            
                $sql.='group by `date`,`count`';

                $getDataSql =str_replace('<selectColumns>', "from_unixtime(`time`,'%y-%m-%d') as `date`,`id` as `itemName`,`count`,count(`count`) as `time`", $sql);

                $getTotalSql = "select count(*) from ({$getDataSql}) e";

                if($page && $rows) {
                    $startRow = ($page - 1) * $rows;
                    $getDataSql .= " limit {$startRow}, {$rows}";
                }
                            
                $this->returnData['data']['total'] = $this->gameDatabase->getColumn($getTotalSql);
                $this->returnData['data']['rows'] = $this->gameDatabase->getArray($getDataSql);

                foreach ($this->returnData['data']['rows'] as $key => $val) {

                    if(isset($itemName[$this->returnData['data']['rows'][$key]['itemName']])){
                       $this->returnData['data']['rows'][$key]['itemName'] = $itemName[$this->returnData['data']['rows'][$key]['itemName']];
                    }else{
                        $this->returnData['data']['rows'][$key]['itemName']=$this->returnData['data']['rows'][$key]['itemName'];
                }

            }
                                                                           
        }
        
        catch(MY_Param_Exception $e) {
          $this->setErrorCode($e->getCode());
        }
        
        catch(MY_Mysql_Exception $e) {
          $this->setErrorCode(1);
        }
        
        catch(Exception $e) {
          $this->setErrorCode($e->getCode());
        }
        
        $this->returnJson();
        log_message('debug', '=====调用Statistics->Treasure->getListData接口结束=====');
    }
    /*public function export() {
        log_message('debug', '=====开始调用Statistics->Treasure->export接口=====');
        $this->verifyPrivilege();
        @ini_set('memory_limit','1024M');
        try {
          $fileName = "treasure.txt";
          header("Content-type:application/octet-stream");
          header("Accept-Ranges:bytes");
          header('Content-type:txt/csv;charset=utf-8');
          header("Content-Disposition:attachment;filename={$fileName}");
          $operatorId = $this->param->getParam('operatorId', array('method' => 'int', 'min' => 1, 'emptyErrorCode' => 201, 'invalidErrorCode' => 1),'get');
                $gameAreaId = $this->param->getParam('gameAreaId',array('method'=> 'string','emptyErrorCode' => 201, 'invalidErrorCode' => 1),'get');
          $startDate = $this->param->getParam('startDate', array('method' => 'string', 'emptyErrorCode' => '2040001', 'invalidErrorCode' => 1),'get',true);
                $endDate = $this->param->getParam('endDate', array('method' => 'string', 'emptyErrorCode' => '2040001', 'invalidErrorCode' => 1),'get',true);
            $page = $this->param->getParam('page', array('method' => 'int', 'min' => 1, 'emptyErrorCode' => 1, 'invalidErrorCode' => 1), 'post', true);
            $rows = $this->param->getParam('rows', array('method' => 'int', 'min' => 1, 'emptyErrorCode' => 1, 'invalidErrorCode' => 1), 'post', true);
          $this->initGameAreaInfo($operatorId,$gameAreaId);


                $sql="
                        select
                                b.`item{$this->currLanguage}Name` as `itemName`,b.`itemId`
                        from
                                
                                `t_cfg_item` b
                        where
                                b.`itemType` = 1
                     
                ";           
                $item = $this->gmDatabase->getArray($sql);
                
                foreach ($item as $key=>$val){
                    $itemName[$val['itemId']] = $val['itemName'];
                    // $itemId[$val['itemId']] = $val['itemName'];                    
                }
          
               
                $sql = "
                    select 
                        <selectColumns>

                    from
                        `log_item_change`
                    where
                        `reason`=1414

                "; 
                     // unix_timestamp(`date`) >= unix_timestamp('{$startDate}')       
                if($startDate) { 
                    $sql .= "
                        and
                        `time` >= unix_timestamp('{$startDate}')
                    ";
                }

                if($endDate) {
                    $sql .= "
                        and
                        `time` <= unix_timestamp('{$endDate}')
                    ";
                }
                            
                $sql.='group by `date`,`count`';

                $getDataSql =str_replace('<selectColumns>', "from_unixtime(`time`,'%y-%m-%d') as `date`,`id` as `itemName`,`count`,count(`count`) as `time`", $sql);

                $getTotalSql = "select count(*) from ({$getDataSql}) e";

                if($page && $rows) {
                    $startRow = ($page - 1) * $rows;
                    $getDataSql .= " limit {$startRow}, {$rows}";
                }
                            
                $this->returnData['data']['total'] = $this->gameDatabase->getColumn($getTotalSql);
                $this->returnData['data']['rows'] = $this->gameDatabase->getArray($getDataSql);

                foreach ($this->returnData['data']['rows'] as $key => $val) {

                if(isset($itemName[$this->returnData['data']['rows'][$key]['itemName']])){
                   $this->returnData['data']['rows'][$key]['itemName'] = $itemName[$this->returnData['data']['rows'][$key]['itemName']];
                }else{
                    $this->returnData['data']['rows'][$key]['itemName']=$this->returnData['data']['rows'][$key]['itemName'];
                }






          
            // $this->returnData['data']['rows'] = $this->gameDatabase->getArray($getDataSql);
                            
            echo "日期\t物品名称\t数量\t购买次数\t"."\n";
            foreach ($this->returnData['data']['rows'] as $key => $value) {
                echo "{$value['date']}\t{$value['roleNum']}\t{$value['time']}\t{$value['amount']}\t\n";
            }
        }
        
        // catch(MY_Param_Exception $e) {
        //   $this->setErrorCode($e->getCode());
        // }
        
        catch(MY_Mysql_Exception $e) {
          $this->setErrorCode(1);
        }
        
        catch(Exception $e) {
          $this->setErrorCode($e->getCode());
        }
        
        log_message('debug', '=====调用Statistics->Treasure->export接口结束=====');
    }*/
    public function export()
        {
            log_message('debug', '=====Statistics->Treasure->export=====');
                    $this->verifyPrivilege();
            @ini_set('memory_limit','1024M');
            try {
                $fileName = "treasure..txt";
                header("Content-type:application/octet-stream");
                header("Accept-Ranges:bytes");
                header('Content-type:txt/csv;charset=utf-8');
                header("Content-Disposition:attachment;filename={$fileName}");

                $operatorId = $this->param->getParam('operatorId', array('method' => 'int', 'min' => 1, 'emptyErrorCode' => 201, 'invalidErrorCode' => 1),'get');
                $gameAreaId = $this->param->getParam('gameAreaId',array('method'=> 'string','emptyErrorCode' => 201, 'invalidErrorCode' => 1),'get');
                $startDate = $this->param->getParam('startDate', array('method' => 'string', 'emptyErrorCode' => 2040001, 'invalidErrorCode' => 1),'get');
                $endDate = $this->param->getParam('endDate', array('method' => 'string', 'emptyErrorCode' => 2040001, 'invalidErrorCode' => 1),'get');
                $page = $this->param->getParam('page', array('method' => 'int', 'min' => 1, 'emptyErrorCode' => 1, 'invalidErrorCode' => 1), 'post', true);
                $rows = $this->param->getParam('rows', array('method' => 'int', 'min' => 1, 'emptyErrorCode' => 1, 'invalidErrorCode' => 1), 'post', true);
                    
                $this->initGameAreaInfo($operatorId,$gameAreaId);
                $sql="
                    select
                            b.`item{$this->currLanguage}Name` as `itemName`,b.`itemId`
                    from
                            
                            `t_cfg_item` b
                    where
                            b.`itemType` = 1
                 
                ";           
                $item = $this->gmDatabase->getArray($sql);
                
                foreach ($item as $key=>$val){
                    $itemName[$val['itemId']] = $val['itemName'];
                    // $itemId[$val['itemId']] = $val['itemName'];                    
                }
                        
                $sql = "
                    select 
                        <selectColumns>

                    from
                        `log_item_change`
                    where
                        `reason`=1414
                "; 
                // unix_timestamp(`date`) >= unix_timestamp('{$startDate}')       

                if($startDate) { 
                    $sql .= "
                        and
                        
                        `time` >= unix_timestamp('{$startDate} 00:00:00')
                    ";
                }

                if($endDate) {
                    $sql .= "
                        and
                        `time` <= unix_timestamp('{$endDate} 23:59:59')
                    ";
                }
                            
                $sql.='group by `date`,`count`';

                

                $getDataSql =str_replace('<selectColumns>', "from_unixtime(`time`,'%y-%m-%d') as `date`,`id` as `itemName`,`count`,count(`count`) as `time`", $sql);

                // $getTotalSql = "select count(*) from ({$getDataSql}) e";

                // if($page && $rows) {
                //     $startRow = ($page - 1) * $rows;
                //     $getDataSql .= " limit {$startRow}, {$rows}";
                // }
                            
                // $this->returnData['data']['total'] = $this->gameDatabase->getColumn($getTotalSql);
                
                $this->returnData['data']['rows'] = $this->gameDatabase->getArray($getDataSql);

                foreach ($this->returnData['data']['rows'] as $key => $val) {

                    if(isset($itemName[$this->returnData['data']['rows'][$key]['itemName']])){
                       $this->returnData['data']['rows'][$key]['itemName'] = $itemName[$this->returnData['data']['rows'][$key]['itemName']];
                    }else{
                        $this->returnData['data']['rows'][$key]['itemName']=$this->returnData['data']['rows'][$key]['itemName'];
                    }

                }

                // $this->returnData['data']['rows'] = $this->gameDatabase->getArray($getDataSql);
                            
                echo "日期\t物品名称\t数量\t购买次数\t"."\n";
                foreach ($this->returnData['data']['rows'] as $key => $value) {
                    echo "{$value['date']}\t{$value['itemName']}\t{$value['count']}\t{$value['time']}\t\n";
                }

          
                
                // $getSumSql = str_replace('<selectColumns>', "abs(sum(c.`value`))", $sql);
                // $this->gameDatabase->getColumn($getSumSql);
                
            }
            
            catch(MY_Param_Exception $e) {
                $this->setErrorCode($e->getCode());
            }
            
            catch(MY_Mysql_Exception $e) {
                $this->setErrorCode(1);
            }
            
            catch(Exception $e) {
                $this->setErrorCode($e->getCode());
            }
            
            log_message('debug', '=====调用Statistics->Treasure->export接口结束=====');
        }
}