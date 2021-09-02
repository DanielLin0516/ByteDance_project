var app = new Vue({
    el: ".right_weather",
    data: {
        city: "北京",
        weatherList: [],
        isShow: false,
    },
    mounted() {
        this.searchWeather();
        // this.changeIcon();
    },
    methods: {
        searchWeather: function() {
            let that = this;
            axios.get("https://api.vvhan.com/api/weather?city=" + this.city + "&type=week").then(
                function(response) {
                    // console.log(response);
                    // console.log(response.data.data.forecast);
                    that.weatherList = response.data.data.forecast;
                    // 更改添加图片url
                    //循环改为Switch
                    for (var i = 0; i < that.weatherList.length; i++) {
                        switch (that.weatherList[i].type) {
                            case '晴':
                                that.weatherList[i]['url'] = "images/晴天.png";
                                break;
                            case '多云':
                                that.weatherList[i]['url'] = "images/cloudy.png";
                                break;
                            case '阴':
                                that.weatherList[i]['url'] = "images/阴天.png";
                                break;
                            case '小雨':
                                that.weatherList[i]['url'] = "images/小雨.png";
                                break;
                            case '中雨':
                                that.weatherList[i]['url'] = "images/中雨.png";
                                break;
                            case '大雨':
                                that.weatherList[i]['url'] = "images/大雨.png";
                                break;
                            case '暴雨':
                                that.weatherList[i]['url'] = "images/暴雨.png";
                                break;
                            default:
                                that.weatherList[i]['url'] = "images/天气.png";
                        }

                    }
                    // console.log(that.weatherList);
                },
                function(err) {

                }
            );
        },
        changeCity: function(city) {
            this.city = city;
            this.searchWeather();
        },
        showWeather: function() {
            var box = document.querySelector(".right");
            if (!this.isShow) {
                box.style.display = 'block';
                this.isShow = true;
                return;
            }
            box.style.display = 'none';
            this.isShow = false;
        },
        // changeIcon: function() {
        //     console.log(this.weatherList);
        // }
    },
});

// 点击显示天气模块
var weatherFun = document.querySelector(".right_weather");
var weather = document.querySelector(".seven");
weather.addEventListener("click", function() {
    // 将右侧天气模块显示
    weatherFun.style.display = 'block';
})

function closeSociety() {
    var Society = document.getElementById('new-society');
    Society.style.display = 'none';
}