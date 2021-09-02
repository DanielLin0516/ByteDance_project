//点击事件

function returnHome() {
    var topWrite = document.getElementById('top');
    var newSociety = document.getElementById('new-society');
    topWrite.style.display = 'block';
    newSociety.style.display = 'none';
}

function returnNewsNav() {
    var newNav = document.getElementById('new-nav');
    var back = document.getElementById('returnNewsNav');
    newNav.style.display = 'block';
    back.style.display = 'none';
    var newsList = document.getElementsByClassName('news-list');
    for (var i = 0; i < newsList.length; i++) {
        newsList[i].style.display = 'none';
    }

}

function showSociety() {
    var topWrite = document.getElementById('top');
    var newSociety = document.getElementById('new-society');
    var newNav = document.getElementById('new-nav');
    var newsList = document.getElementsByClassName('news-list');
    var back = document.getElementById('returnNewsNav');
    back.style.display = 'none';
    var weather = document.querySelector('.right_weather');
    for (var i = 0; i < newsList.length; i++) {
        newsList[i].style.display = 'none';
    }
    topWrite.style.display = 'none';
    newSociety.style.display = 'block';
    newNav.style.display = 'block';
    weather.style.display = 'none';
}

function showNews(newsNum) {
    var newNav = document.getElementById('new-nav');
    var New = document.getElementById('new' + newsNum);
    var back = document.getElementById('returnNewsNav');
    newNav.style.display = 'none';
    New.style.display = 'block';
    back.style.display = 'block';
}