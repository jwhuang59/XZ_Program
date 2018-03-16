/**
 * 小程序配置文件
 */
var host = "www.jwhuang.site"

var config = {

  // 下面的地址配合云端 Server 工作
  host,
  domain: `https://${host}`,
  //设置图片地址
  pic: `https://${host}/admin/img-list/`,
  //个人简历
  resume: `https://${host}/view/resume/`,
  //头像地址
  head_pic_url: `https://${host}/static/images/head_pic.jpg`,
  //文章数据
  all_article_url: `https://${host}/wechat/all_article/`,
  //分类列表
  article_list_url: `https://${host}/wechat/categorys/`,
  //留言列表
  feedback_list_url: `https://${host}/wechat/feedback_list/`,
  //文章详情
  article_detail_url: `https://${host}/wechat/article_detail/`,
  //留言添加
  feedback_add_url: `https://${host}/wechat/feedback_add/`,
};

module.exports = config
