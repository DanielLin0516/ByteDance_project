// 该模块主要负责各功能点击时的显示与隐藏
// 因模块负责较分散 采用直接dom获取


//首页(home)
var home = document.querySelector("#home");
//team
var team = document.querySelector(".right");
//娱乐
var entertain = document.querySelector(".news-ent");
//体育
var sport = document.querySelector(".right_sports");
//社会
var society = document.querySelector("#new-society");
//音乐
var music = document.querySelector("#musicplay");
//天气
var weather = document.querySelector(".right_weather");
// 抽奖
var lucky = document.querySelector(".right_choujiang");

//控制所有模块隐藏
function hide() {
    home.style.display = 'none';
    team.style.display = 'none';
    entertain.style.display = 'none';
    sport.style.display = 'none';
    society.style.display = 'none';
    music.style.display = 'none';
    weather.style.display = 'none';
    lucky.style.display = 'none';
}


//显示
//home模块
document.querySelector(".second").addEventListener('click', function() {
    hide();
    home.style.display = 'block';
})

//team模块
document.querySelector(".third").addEventListener('click', function() {
    hide();
    team.style.display = 'block';
})

//新闻-娱乐模块
document.querySelector(".entertain_model").addEventListener('click', function() {
    hide();
    entertain.style.display = 'block';
})

//新闻-体育模块
document.querySelector(".sport_model").addEventListener('click', function() {
    hide();
    sport.style.display = 'block';
})

//新闻-社会模块
document.querySelector(".society_model").addEventListener('click', function() {
    hide();
    society.style.display = 'block';
})

//音乐模块
document.querySelector(".six").addEventListener('click', function() {
    hide();
    music.style.display = 'block';
})

//天气模块
document.querySelector(".seven").addEventListener('click', function() {
    hide();
    weather.style.display = 'block';
})

//抽奖模块
document.querySelector(".eight").addEventListener('click', function() {
    hide();
    lucky.style.display = 'block';
})