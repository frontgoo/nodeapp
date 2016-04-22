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

get("http://www.infoq.com/cn/",function($){
    console.info("==================== IT NEWS ============================");
    var news = $(".grid.news_type .news div h3 a")
    news.each(function(i,data){
        var href = $(data).attr("href");
        var text = $(data).text();
        console.info('文章： '+ $.trim(text) +'  地址： http://www.infoq.com/' + $.trim(href));
    });
    console.info("==================== IT NEWS ============================");
});



