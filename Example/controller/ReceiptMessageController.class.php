<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2018/11/3
 * Time: 9:47
 */

namespace Home\Controller;

use Service\TenantExtra;


class ReceiptMessageController extends BaseController
{

      public function  gcc(){
          if(IS_AJAX){
//              $PanterExtraService = new TenantExtra();
//              $where = $this->buildparams();
//              $result = $PanterExtraService->getInfo($where,null);
                //你的查询结果 二位数组
              //$this->ajaxReturn($result);
          }else{
              $this->display();
          }
      }




}