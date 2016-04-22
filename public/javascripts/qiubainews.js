/**
 * Created by sunny on 16-4-19.
 */

var jsdom = require("jsdom");
var fs = require("fs");
var jquery = fs.readFileSync("./jquery-2.2.3.min.js", "utf-8");

function get(url,callback){
    jsdom.env({
        url: url,
        src: [jquery],
        done: function (err, window) {
            callback(window.$);
        }
    });
};



get("http://www.qiushibaike.com/",function($){
    console.info("================================================ 糗百 新闻 ========================================================");
    console.info("\n");
    var contents =  $(".content").toArray();
    var contentAll = '';
    $(contents).each(function(i,data){
        contentAll += '帖子'+ (i+1) +':\n'+ $(data).text().replace(/[\r\n]/g,'') +'\n\n';
    });
    console.info(contentAll);
    console.info("================================================ 糗百 新闻 ========================================================");
});
