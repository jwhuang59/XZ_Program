/**
 * 小程序配置文件
 */
var host = "www.jwhuang.site"

var config = {

  // 下面的地址配合云端 Server 工作
  host,
  domain: `http://${host}`,
  //设置图片地址
  pic: `http://${host}/admin/img-list/`,
  //个人简历
  resume: `http://${host}/view/resume/`,
  //头像地址
  head_pic_url: `http://${host}/static/images/head_pic.jpg`,
  //文章数据
  all_article_url: `http://${host}/wechat/all_article/`,
  //分类列表
  article_list_url: `http://${host}/wechat/categorys/`,
  //留言列表
  feedback_list_url: `http://${host}/wechat/feedback_list/`,
  //文章详情
  article_detail_url: `http://${host}/wechat/article_detail/`,
  //留言添加
  feedback_add_url: `http://${host}/wechat/feedback_add/`,
};

module.exports = config