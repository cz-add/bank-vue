/**
 * 对后台请求的地址的封装，URL格式如下：
 * 模块名_实体名_操作
 */
export default {
	//服务器
	'SERVER': 'http://localhost:8080/bank-consumer',
  //树形
  'p2p_user_pmenu':'/getTree',//菜单
	//获得请求的完整地址，用于mockjs测试时使用
	'getFullPath': k => {
		return this.SERVER + this[k];
	}
}
