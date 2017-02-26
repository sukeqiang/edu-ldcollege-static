// 对Date的扩展，将 Date 转化为指定格式的String 
// 月(M)、日(d)、小时(h)、分(m)、秒(s)、季度(q) 可以用 1-2 个占位符， 
// 年(y)可以用 1-4 个占位符，毫秒(S)只能用 1 个占位符(是 1-3 位的数字) 
// 例子： 
// (new Date()).Format("yyyy-MM-dd hh:mm:ss.S") ==> 2006-07-02 08:09:04.423 
// (new Date()).Format("yyyy-M-d h:m:s.S")      ==> 2006-7-2 8:9:4.18 
Date.prototype.Format = function(fmt) 
{ //author: meizz 
  var o = { 
    "M+" : this.getMonth()+1,                 //月份 
    "d+" : this.getDate(),                    //日 
    "h+" : this.getHours(),                   //小时 
    "m+" : this.getMinutes(),                 //分 
    "s+" : this.getSeconds(),                 //秒 
    "q+" : Math.floor((this.getMonth()+3)/3), //季度 
    "S"  : this.getMilliseconds()             //毫秒 
  }; 
  if(/(y+)/.test(fmt)) 
    fmt=fmt.replace(RegExp.$1, (this.getFullYear()+"").substr(4 - RegExp.$1.length)); 
  for(var k in o) 
    if(new RegExp("("+ k +")").test(fmt)) 
  fmt = fmt.replace(RegExp.$1, (RegExp.$1.length==1) ? (o[k]) : (("00"+ o[k]).substr((""+ o[k]).length))); 
  return fmt; 
}

function initTable(classId,lessionId) {
	// 先销毁表格
	// $('#ldhomework-table').bootstrapTable('destroy');
	// 初始化表格,动态从服务器加载数据
	$("#ldhomework-table").bootstrapTable({
		method : "get", // 使用get请求到服务器获取数据
		url : "/ldHomeWorkList?classId=" + classId + "&lessionId=" + lessionId, // 获取数据的Servlet地址
		contentType : 'application/json;charset=UTF-8',// 这里我就加了个utf-8
		dataType : 'json',
		striped : true, // 表格显示条纹
		pagination : true, // 启动分页
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
		},
		onLoadError : function() { // 加载失败时执行
		}
	});
}

function starCountFormatter(value, row) {
	var icon = "<i class='fa fa-thumbs-o-up fa-lg' aria-hidden='true'></i>";
	return icon + "&nbsp;&nbsp;" + value;
}

function negativeCountFormatter(value, row) {
	var icon = "<i class='fa fa-thumbs-o-down fa-lg' aria-hidden='true'></i>";
	return icon + "&nbsp;&nbsp;" + value;
}

function homeworkFilenameFormatter(value, row) {
	var icon = "<i class='fa fa-file fa-lg' aria-hidden='true'></i>";
	if(value.lastIndexOf('.')>-1) {
		var suffix = value.substring(value.lastIndexOf('.') + 1).toLowerCase();
		if(suffix == "pdf") {
			icon = "<i class='fa fa-file-pdf-o fa-lg' aria-hidden='true'></i>";
		}else if(suffix == "ppt" || suffix == "pptx") {
			icon = "<i class='fa fa-file-powerpoint-o fa-lg' aria-hidden='true'></i>";
		}
	}
	return icon + "&nbsp;&nbsp;" + "<a href='/downloadFile?homeworkId="+ row.id +"'>" + value + "</a>";
}

function userIdFormatter(value,row) {
	return value;
}

function bestFlagFormatter(value, row) {
	if (value == 0) {
		return "否";
	} else if (value == 1) {
		return "是";
	} else {
		return "";
	}
}

function correctFlagFormatter(value, row) {
	if (value == 0) {
		return "否";
	} else if (value == 1) {
		return "是";
	} else {
		return "";
	}
}

function createDateFormatter(value, row) {
	return new Date(value).Format("yyyy年MM月dd日");
}

function commentBox(homeworkId,userId) {
    bootbox.dialog({ 
    	title: "评论",
    	message: htmlComment,
    	buttons:             
        {
            success : {
                label : "<i class='icon-ok'></i> 提交",
                className : "btn-success",
                callback: function() {
                	$("#userId").attr("value",userId);
                	$("#homeworkId").attr("value",homeworkId);
                	$("#myId").attr("value",myId);
                    var params = $("#comment_form").serialize();
                    $.ajax({
                        type: "post",
                        dataType: "json",
                        url: "/ldHomeWorkComment",
                        data: params,
                        success: function(data) {
                            if (data.result == '1') {
                            	bootbox.alert("提交成功!",function(){ 
                            			location.reload();
                            		});
                            } else if(data.result == '0') {
                            	bootbox.alert(data.desc,function(){ 
                        			location.reload();
                        		});
                            } else {
                            	bootbox.alert("未知错误!",function(){ 
                        			location.reload();
                        		});
                            }
                        }
                    });
                }
            },
            cancel: {
                label: '取消',
                className: 'btn-danger'
            }
        }
    })
}

function actionFormatter(value, row) {
	var str = "<a class='btn btn-default' onclick='commentBox(" + row.id +"," + row.userId + ")' aria-label='Settings'>" +
			"<i class='fa fa-commenting' aria-hidden='true'></i> 评论</a>&nbsp;&nbsp;"
		str+="<a class='btn btn-default' href='#' aria-label='Settings'><i class='fa fa-comments' aria-hidden='true'></i> 查看全部</a>"
	return str;
}

(function($){
	$.getUrlParam = function(name) {
		var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
		var r = window.location.search.substr(1).match(reg);
		if (r!=null) return unescape(r[2]); return null;
	}
})(jQuery);

var myId;
$(document).ready(function() {
	myId= $.getUrlParam('myId');
	// 调用函数，初始化表格
	initTable($.getUrlParam('classId'),$.getUrlParam('lessionId'));
});

var htmlComment = "<form class='form-horizontal' id='comment_form'>                                                           "+
"<fieldset>                                                                               "+
"<div class='form-group'>                                                                 "+
"  <label class='col-md-4 control-label' for='levelFlag'>作业等级</label>                 "+
"  <div class='col-md-4'>                                                                 "+
"    <label class='radio-inline' for='levelFlag-0'>                                       "+
"      <input name='levelFlag' id='levelFlag-0' value='A' checked='checked' type='radio'> "+
"      A                                                                                  "+
"    </label>                                                                             "+
"    <label class='radio-inline' for='levelFlag-1'>                                       "+
"      <input name='levelFlag' id='levelFlag-1' value='B' type='radio'>                   "+
"      B                                                                                  "+
"    </label>                                                                             "+
"    <label class='radio-inline' for='levelFlag-2'>                                       "+
"      <input name='levelFlag' id='levelFlag-2' value='C' type='radio'>                   "+
"      C                                                                                  "+
"    </label>                                                                             "+
"    <label class='radio-inline' for='levelFlag-3'>                                       "+
"      <input name='levelFlag' id='levelFlag-3' value='D' type='radio'>                   "+
"      D                                                                                  "+
"    </label>                                                                             "+
"  </div>                                                                                 "+
"</div>                                                                                   "+
"<div class='form-group'>                                                                 "+
"  <label class='col-md-4 control-label' for='evaluate'>评价</label>                      "+
"  <div class='col-md-4'>                                                                 "+
"  <div class='radio'>                                                                    "+
"    <label for='evaluate-0'>                                                             "+
"      <input name='evaluate' id='evaluate-0' value='1' type='radio'>   "+
"      点赞                                                                               "+
"    </label>                                                                             "+
"	</div>                                                                                "+
"  <div class='radio'>                                                                    "+
"    <label for='evaluate-1'>                                                             "+
"      <input name='evaluate' id='evaluate-1' value='0' type='radio'>                     "+
"      差评                                                                               "+
"    </label>                                                                             "+
"	</div>                                                                                "+
"  </div>                                                                                 "+
"</div>                                                                                   "+
"<div class='form-group'>                                                                 "+
"  <label class='col-md-4 control-label' for='mark'>我对同学有话说</label>                "+
"  <div class='col-md-4'>                                                                 "+
"    <textarea class='form-control' id='mark' name='mark' rows='5'></textarea>            "+
"  </div>                                                                                 "+
"</div>                                                                                   "+
"</fieldset>                                                                              "+
"<input type='hidden' name='homeworkId' id='homeworkId' />"+
"<input type='hidden' name='myId' id='myId' />"+
"<input type='hidden' name='userId' id='userId' />"+
"</form>                                                                                  ";