//返回后隐藏详情模块
function backToEnt() {
    document.querySelector("#info-one").style.display = 'none';
    document.querySelector("#info-two").style.display = 'none';
    document.querySelector("#info-three").style.display = 'none';
    document.querySelector("#info-four").style.display = 'none';
    document.querySelector("#info-five").style.display = 'none';
    document.querySelector("#info-six").style.display = 'none';
    document.querySelector("#info-seven").style.display = 'none';
    document.querySelector("#info-eight").style.display = 'none';
    document.querySelector("#info-nine").style.display = 'none';
    document.querySelector("#container").style.display = 'flex';
}

//点击标题显示详情-1
var newsOne = document.querySelector("#newsOne");
newsOne.addEventListener("click", function() {
    //隐藏模块
    document.querySelector("#container").style.display = 'none';
    // 显示详情
    document.querySelector("#info-one").style.display = 'block';
})

//点击标题显示详情-2
var newsOne = document.querySelector("#newsTwo");
newsOne.addEventListener("click", function() {
    //隐藏模块
    document.querySelector("#container").style.display = 'none';
    // 显示详情
    document.querySelector("#info-two").style.display = 'block';
})

//点击标题显示详情-3
var newsOne = document.querySelector("#newsThree");
newsOne.addEventListener("click", function() {
    //隐藏模块
    document.querySelector("#container").style.display = 'none';
    // 显示详情
    document.querySelector("#info-three").style.display = 'block';
})

//点击标题显示详情-4
var newsOne = document.querySelector("#newsFour");
newsOne.addEventListener("click", function() {
    //隐藏模块
    document.querySelector("#container").style.display = 'none';
    // 显示详情
    document.querySelector("#info-four").style.display = 'block';
})

//点击标题显示详情-5
var newsOne = document.querySelector("#newsFive");
newsOne.addEventListener("click", function() {
    //隐藏模块
    document.querySelector("#container").style.display = 'none';
    // 显示详情
    document.querySelector("#info-five").style.display = 'block';
})

//点击标题显示详情-6
var newsOne = document.querySelector("#newsSix");
newsOne.addEventListener("click", function() {
    //隐藏模块
    document.querySelector("#container").style.display = 'none';
    // 显示详情
    document.querySelector("#info-six").style.display = 'block';
})

//点击标题显示详情-7
var newsOne = document.querySelector("#newsSeven");
newsOne.addEventListener("click", function() {
    //隐藏模块
    document.querySelector("#container").style.display = 'none';
    // 显示详情
    document.querySelector("#info-seven").style.display = 'block';
})

//点击标题显示详情-8
var newsOne = document.querySelector("#newsEight");
newsOne.addEventListener("click", function() {
    //隐藏模块
    document.querySelector("#container").style.display = 'none';
    // 显示详情
    document.querySelector("#info-eight").style.display = 'block';
})

//点击标题显示详情-2
var newsOne = document.querySelector("#newsNine");
newsOne.addEventListener("click", function() {
    //隐藏模块
    document.querySelector("#container").style.display = 'none';
    // 显示详情
    document.querySelector("#info-nine").style.display = 'block';
})