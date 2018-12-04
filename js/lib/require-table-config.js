define(["jquery",'local',"commonsearch","bootstrap","bootstrap-Table","bootstrap-table-export","tableexport"],function ($, local, common) {
          var Table = {
              api:{
                 init:function () {
                     $.extend(true,$.fn.bootstrapTable.defaults,Table.defaults);
                     $.extend(true,$.fn.bootstrapTable.defaults,$.fn.bootstrapTable.locales['zh-CN']);
                     $.extend($.fn.bootstrapTable.locales[Table.defaults.locale], {
                         formatCommonSearch: function () {
                             return 'Common search';
                         },
                         formatCommonSubmitButton: function () {
                             return '提交';
                         },
                         formatCommonResetButton: function () {
                             return '重置';
                         },
                         formatCommonCloseButton: function () {
                             return 'Close';
                         },
                         formatCommonChoose: function () {
                             return 'Choose';
                         }
                     });
                 }
              },
              defaults:{
                  sidePagination: 'client',
                  method: 'get', //请求方法
                  toolbar: ".toolbar", //工具栏
                  search: false, //是否启用快速搜索
                  cache: false,
                  commonSearch: true, //是否启用通用搜索
                  searchFormVisible: false, //是否始终显示搜索表单
                  titleForm: '', //为空则不显示标题，不定义默认显示：普通搜索
                  idTable: 'commonTable',
                  showExport: true,
                  exportDataType: "all",
                  exportTypes: ['json', 'xml', 'csv', 'txt', 'doc', 'excel'],
                  pageSize: 10,
                  pageList: ['10','20','30','45','All'],
                  pagination: true,
                  clickToSelect: true, //是否启用点击选中
                  singleSelect: false, //是否启用单选
                  showRefresh: false,
                  locale: 'zh-CN',
                  showToggle: true,
                  showColumns: true,
                  pk: 'id',
                  sortName: 'id',
                  sortOrder: 'desc',
                  paginationFirstText: "首页",
                  paginationPreText: "上一页",
                  paginationNextText: "下一页",
                  paginationLastText: "最后一页",
                  cardView: false, //卡片视图
                  checkOnInit: true, //是否在初始化时判断
                  escape: true, //是否对内容进行转义
                  extend: {
                      index_url: '',
                      add_url: '',
                      edit_url: '',
                      del_url: ''
                  }
              }
          };

          return Table;
});