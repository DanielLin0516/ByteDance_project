var app = new Vue({
    el: "#musicplay",
    data: {
        query: "张艺兴",
        musicList: [],
        musicUrl: "",
        //歌曲封面
        musicCover: "",

        //播放状态
        isPlaying: false,
        //遮罩层显示状态
        isShow: false,
        //mv地址
        mvUrl: "",
        // 当前歌曲索引
        currentIndex: null,
    },
    mounted() {
        this.searchMusic();
    },
    methods: {
        searchMusic: function() {
            var that = this;
            axios.get("https://autumnfish.cn/search?keywords=" + this.query).then(
                function(response) {

                    that.musicList = response.data.result.songs;

                },
                function(err) {}
            )
        },

        // 播放歌曲，获取歌曲url，同时获取当前音乐索引
        playMusic: function(musicId, index) {

            //调用接口
            this.currentIndex = index;
            var that = this;
            axios.get("https://autumnfish.cn/song/url?id=" + musicId).then(
                function(response) {

                    that.musicUrl = response.data.data[0].url;
                },
                function(err) {}
            )

            // 歌曲封面展示,更改img的src属性
            axios.get("https://autumnfish.cn/song/detail?ids=" + musicId).then(
                function(response) {

                    that.musicCover = response.data.songs[0].al.picUrl;
                },
                function(err) {}
            )




        },

        // 歌曲播放
        play: function() {
            this.isPlaying = true;
        },

        // 歌曲暂停
        pause: function() {
            this.isPlaying = false;
        },



        //上一曲
        before: function() {
            if (this.currentIndex === 0) {
                this.currentIndex = this.musicList.length - 1;
            } else {
                this.currentIndex--;
            }
            // console.log(this.currentIndex);
            this.playMusic(this.musicList[this.currentIndex].id);
        },

        //下一首
        next: function() {
            if (this.currentIndex === this.musicList.length - 1) {
                this.currentIndex = 0;
            } else {
                this.currentIndex++;
            }
            // console.log(this.currentIndex);
            this.playMusic(this.musicList[this.currentIndex].id);
        },
        //播放mv
        playMV: function(mvid) {
            this.pause();
            var that = this;
            axios.get("https://autumnfish.cn/mv/url?id=" + mvid).then(
                function(response) {
                    // console.log(response.data.data.url);
                    that.isShow = true;
                    that.mvUrl = response.data.data.url;
                },
                function(err) {}
            )
        },

        //隐藏遮罩层
        hide: function() {
            this.isShow = false;
        }
    }
})