requirejs.config({
    baseUrl:'/Public/Js/',
    paths:{
        'app':'..',
        'jquery':["http://code.jquery.com/jquery-2.1.1.min"],
        'bootstrap':['https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/js/bootstrap.min'],
        "bootstrap-Table":["https://cdn.bootcss.com/bootstrap-table/1.12.2/bootstrap-table"],
        'bootstrap-table-export':['https://cdn.bootcss.com/bootstrap-table/1.12.2/extensions/export/bootstrap-table-export.min'],
        'tableexport':['lib/tableExport'],
        "table":['lib/require-table-config'],
        "local":["https://cdn.bootcss.com/bootstrap-table/1.12.2/locale/bootstrap-table-zh-CN"],
        'commonsearch':['lib/commonsearch']
    },
    map: {
        '*': {
            'css': 'lib/require-css/css.min'
        }
    },
    shim:{
        'jquery':{
              deps:["css!https://cdn.bootcss.com/jquery-ui-bootstrap/0.5pre/assets/css/font-awesome.min.css"],
              export:"$"
        },
        'bootstrap': [
             'jquery',
             'css!https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/css/bootstrap-theme.min.css',
             'css!https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/css/bootstrap.min.css'
        ],
        "local":{
            deps: ['bootstrap-Table']
        },
        "bootstrap-Table":{
            deps:["bootstrap",
                "css!https://cdn.bootcss.com/bootstrap-table/1.12.2/bootstrap-table.min.css"
            ],
            exports:"$.fn.bootstrapTable"
        },

        "bootstrap-table-export":{
            deps:["jquery","bootstrap-Table"],
            exports:"$.fn.bootstrapTable.defaults"
        },
        'tableexport': {
            deps: ['jquery'],
            exports: '$.fn.extend'
        },
        'commonsearch': {
            deps: ['bootstrap-Table'],
            exports: '$.fn.bootstrapTable.defaults'
        }
    }
});
require(['jquery',"table"], function ($,undefined) {
    //初始配置
    var Config = requirejs.s.contexts._.config.config;
    //将Config渲染到全局
    window.Config = Config;
    // 配置语言包的路径
    var paths = {};
    // 避免目录冲突
    paths['Home/'] = '/';
    require.config({paths: paths});
    // 初始化
    $(function () {
          var subjectJs = Config.module+"/"+Config.controller+"/"+Config.action;
                if (Config.action) {
                    require([subjectJs], function (Controller) {
                    });
                }

    });
});

