<?php
/**
 * Created by PhpStorm.
 * User: huawei
 * Date: 2018/12/4
 * Time: 10:41
 */

namespace Home\Controller;


class BaseController
{
        public $config;
        public function __construct()
        {
            //parent::__construct();
            $this->config->module =  MODULE_NAME ;
            $this->config->controller = CONTROLLER_NAME;
            $this->config->action     = ACTION_NAME;
            $this->assign("config",$this->config);
        }

    protected function buildparams($searchfields = null, $relationSearch = null)
    {

        $filter = htmlspecialchars_decode(I("get.filter"));
        $op = htmlspecialchars_decode(I("get.op"));
        $filter = json_decode($filter, TRUE);
        $op = json_decode($op, TRUE);
        $filter = $filter ? $filter : [];
        $where = [];
        foreach ($filter as $k => $v)
        {
            $sym = isset($op[$k]) ? $op[$k] : '=';
            $sym = strtoupper(isset($op[$k]) ? $op[$k] : $sym);
            switch ($sym)
            {
                case '=':
                    $where[$k] = ["eq",$v];
                    break;
                case '!=':
                    $where[$k] = ["neq",$v];
                    break;
                case 'LIKE':
                    $where[$k] = ["like",$v];
                    break;
                case 'NOT LIKE':
                    $where[$k] = ["not like",$v];
                    break;
                case '>':
                    $where[$k] = ["gt",$v];
                    break;
                case '>=':
                    $where[$k] = ["egt",$v];
                    break;
                case '<':
                    $where[$k] = ["lt",$v];
                    break;
                case '<=':
                    $where[$k] = ["elt",$v];
                    break;
                case 'IN':
                    $where[$k] = ["in",$v];
                    break;
                case 'NOT IN':
                    $where[$k] = ["not in",$v];
                    break;
            }
        }

        return $where;
    }
}