function initTable() {
	// 先销毁表格
	//$('#ldhomework-table').bootstrapTable('destroy');
	// 初始化表格,动态从服务器加载数据
	$("#ldhomework-table").bootstrapTable({
		method : "post", // 使用get请求到服务器获取数据
		url : "/ldHomeWorkList", // 获取数据的Servlet地址
		contentType: 'application/json;charset=UTF-8',//这里我就加了个utf-8
		dataType: 'json',
		striped : true, // 表格显示条纹
		pagination : false, // 启动分页
		pageSize : 5, // 每页显示的记录数
		pageNumber : 1, // 当前第几页
		pageList : [ 5, 10, 15, 20, 25 ], // 记录数可选列表
		search : false, // 是否启用查询
		showColumns : true, // 显示下拉框勾选要显示的列
		showRefresh : true, // 显示刷新按钮
		sidePagination : "server", // 表示服务端请求
		// 设置为undefined可以获取pageNumber，pageSize，searchText，sortName，sortOrder
		// 设置为limit可以获取limit, offset, search, sort, order
		queryParamsType : "undefined",
		queryParams : function queryParams(params) { // 设置查询参数
			var param = {
				pageNumber : params.pageNumber,
				pageSize : params.pageSize
			};
			return param;
		},
		onLoadSuccess : function(data) { // 加载成功时执行
//			layer.msg("加载成功");
			console.log(data[0]);
		},
		onLoadError : function() { // 加载失败时执行
//			layer.msg("加载数据失败", {
//				time : 1500,
//				icon : 2
//			});
		}
	});
}

$(document).ready(function() {
	// 调用函数，初始化表格
	initTable();
});