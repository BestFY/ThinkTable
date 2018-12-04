define(["jquery","table"],function ($,Table) {
            //初始化Table;
            Table.api.init();
            $("#table").bootstrapTable({
                url: 'gcc',
                columns: [
                    {field: 'tenantid', title: 'ID',sortable:true,operate:">"},
                    {field: 'pantername', title: '法人单位',sortable:true},
                    {field: 'company', title: '项目名称',sortable:true},
                    {field: 'orderno', title: '法人单位税号',sortable:true},
                    {field: 'bank', title: '发行',sortable:true},
                    {field: 'bankaccount', title: '发行账号',sortable:true},
                    {field: 'address', title: '地址',sortable:true},
                    {field: 'linktel', title: '电话',sortable:true}
                ],
                search:false,
                commonSearch: true,
                searchFormVisible: true
            });

});