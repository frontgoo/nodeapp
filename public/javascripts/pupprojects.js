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

//get("http://www.infoq.com/cn/",function($){
//    var news = $(".grid.news_type .news div h3 a")
//    news.each(function(i,data){
//        var href = $(data).attr("href");
//        var text = $(data).text();
//        console.info(text + href);
//    });
//});

get("http://www.qiushibaike.com/hot/",function($){
   var content =  $(".content").text();
    console.info(content);
});
