
let gBanksIntervel;
let gIsContactModalOpen = false;

function init() {
    createRecommends()
    renderRecommends()
    // setTimeout(openContactModal, 1000)
    // openContactModal()

    // createBanksNames()
    // renderBanksImges()
    // gBanksIntervel = setInterval(moveBanks, 2500)
}

// -------------------------------------------------------------

function renderRecommends() {
    var strHtml = '';
    var recommends = getRecommends()
    var numOfRecommends = getNumOfRecommends();
    for (var i = 0; i < numOfRecommends; i++) {
        strHtml += `<div class="recommend">${recommends[i].id} ${recommends[i].text}</div>`
    }
    document.querySelector('.recommends').innerHTML = strHtml

}

function renderMoreRecommends(diff) {
    changeRecommendsOrder(diff)
    renderRecommends()
}

// ------------------------------------------------------------

function renderBanksImges() {
    var strHtml = '';
    var banksNames = getBanksNames()
    var numOfBanks = getNumOfBanks()
    for (var i = 0; i < numOfBanks; i++) {
        strHtml += `<div class="inner" style="animation: scroll-left 15s ${i * 2}s linear infinite;">
         <img class="bank-img" src="img/banks/${banksNames[i]}.png" />
         </div>`

    }
    document.querySelector('.banks-container').innerHTML = strHtml
}

function renderMoreBanks(diff) {
    changeBanksRange(diff)
    renderBanksImges()
}

function moveBanks() {
    renderMoreBanks(1)
}

// ------------------------------------------------------------------

function toggleScreen() {
    if (gIsContactModalOpen) {
        document.querySelector('.contact-modal').style.display = 'none';
        document.body.classList.toggle('open-contact-modal');
        gIsContactModalOpen = false
    } else {
        document.body.classList.toggle('open-menu');
        if (document.querySelector('.menu-btn').innerText === "☰") {
            document.querySelector('.menu-btn').innerHTML = "X"
        } else {
            document.querySelector('.menu-btn').innerHTML = "☰"
        }
    }
}
function openContactModal() {
    document.querySelector('.contact-modal').style.display = 'block';
    document.body.classList.toggle('open-contact-modal');
    gIsContactModalOpen = true;
}