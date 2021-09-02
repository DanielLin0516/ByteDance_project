var sportsFun = document.querySelector(".right_sports");
var sports = document.querySelector(".sport_model");
var fcCon = document.querySelector(".fcCon");
var fcClick = document.querySelector(".fc");
var fcCon1 = document.querySelector(".fc001Con");
var fcClick1 = document.querySelector(".fc001");
var fcCon2 = document.querySelector(".fc002Con");
var fcClick2 = document.querySelector(".fc002");
var fcCon3 = document.querySelector(".fc003Con");
var fcClick3 = document.querySelector(".fc003");
var NBACon = document.querySelector(".NBACon");
var NBAClick = document.querySelector(".NBA");
var NBACon1 = document.querySelector(".NBA001Con");
var NBAClick1 = document.querySelector(".NBA001");
var NBACon2 = document.querySelector(".NBA002Con");
var NBAClick2 = document.querySelector(".NBA002");
var NBACon3 = document.querySelector(".NBA003Con");
var NBAClick3 = document.querySelector(".NBA003");
var naCon = document.querySelector(".naCon");
var naClick = document.querySelector(".na");
var naCon1 = document.querySelector(".na001Con");
var naClick1 = document.querySelector(".na001");
var naCon2 = document.querySelector(".na002Con");
var naClick2 = document.querySelector(".na002");
var naCon3 = document.querySelector(".na003Con");
var naClick3 = document.querySelector(".na003");

// �����ʾ����ģ��
sports.addEventListener("click", function() {
    // ���Ҳ�����ģ����ʾ
    sportsFun.style.display = 'block';
    fcCon.style.display = 'none';
    fcCon1.style.display = 'none';
    fcCon2.style.display = 'none';
    fcCon3.style.display = 'none';
    NBACon.style.display = 'none';
    NBACon1.style.display = 'none';
    NBACon2.style.display = 'none';
    NBACon3.style.display = 'none';
    naCon.style.display = 'none';
    naCon1.style.display = 'none';
    naCon2.style.display = 'none';
    naCon3.style.display = 'none';
})

// �����ʾ����
fcClick.addEventListener("click", function() {
    sportsFun.style.display = 'none';
    fcCon.style.display = 'block';
})

fcClick1.addEventListener("click", function() {
    sportsFun.style.display = 'none';
    fcCon1.style.display = 'block';
})

fcClick2.addEventListener("click", function() {
    sportsFun.style.display = 'none';
    fcCon2.style.display = 'block';
})

fcClick3.addEventListener("click", function() {
    sportsFun.style.display = 'none';
    fcCon3.style.display = 'block';
})

NBAClick.addEventListener("click", function() {
    sportsFun.style.display = 'none';
    NBACon.style.display = 'block';
})

NBAClick1.addEventListener("click", function() {
    sportsFun.style.display = 'none';
    NBACon1.style.display = 'block';
})

NBAClick2.addEventListener("click", function() {
    sportsFun.style.display = 'none';
    NBACon2.style.display = 'block';
})

NBAClick3.addEventListener("click", function() {
    sportsFun.style.display = 'none';
    NBACon3.style.display = 'block';
})

naClick.addEventListener("click", function() {
    sportsFun.style.display = 'none';
    naCon.style.display = 'block';
})

naClick1.addEventListener("click", function() {
    sportsFun.style.display = 'none';
    naCon1.style.display = 'block';
})

naClick2.addEventListener("click", function() {
    sportsFun.style.display = 'none';
    naCon2.style.display = 'block';
})

naClick3.addEventListener("click", function() {
    sportsFun.style.display = 'none';
    naCon3.style.display = 'block';
})

function back() {
    sportsFun.style.display = 'block';
    fcCon.style.display = 'none';
    fcCon1.style.display = 'none';
    fcCon2.style.display = 'none';
    fcCon3.style.display = 'none';
    NBACon.style.display = 'none';
    NBACon1.style.display = 'none';
    NBACon2.style.display = 'none';
    NBACon3.style.display = 'none';
    naCon.style.display = 'none';
    naCon1.style.display = 'none';
    naCon2.style.display = 'none';
    naCon3.style.display = 'none';
}

function index_back() {
    sportsFun.style.display = 'none';
    fcCon.style.display = 'none';
    fcCon1.style.display = 'none';
    fcCon2.style.display = 'none';
    fcCon3.style.display = 'none';
    NBACon.style.display = 'none';
    NBACon1.style.display = 'none';
    NBACon2.style.display = 'none';
    NBACon3.style.display = 'none';
    naCon.style.display = 'none';
    naCon1.style.display = 'none';
    naCon2.style.display = 'none';
    naCon3.style.display = 'none';
}