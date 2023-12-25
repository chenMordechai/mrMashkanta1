import { service } from './service.js'

window.onInit = onInit
window.onCloseContactModal = onCloseContactModal
window.onToggleScreen = onToggleScreen
window.sendMail = sendMail

let gBanksIntervel;
let gIsContactModalOpen = false;

const gElCarousel = document.querySelector('.carousel')
const gElcardsContainer = document.querySelector('.cards-container')
let gInitPos = null
let gIsMoving = false
let gTransform = 100


function onInit() {
    service.createRecommends()
    renderAllRecommends()
    addListeners()
    // renderRecommends()

    // setTimeout(openContactModal, 3000)
    openContactModal()

    // createBanksNames()
    // renderBanksImges()
    // gBanksIntervel = setInterval(moveBanks, 2500)

}

// -------------------------------------------------------------

function sendMail(ev) {
    ev.preventDefault()
    console.log('sendMail')

    emailjs.init("8H1JHaiQbVNsq23Hb")

    const params = {
        senderName: document.querySelector('#sender-name').value,
        senderPhone: document.querySelector('#sender-phone').value,
        senderEmail: document.querySelector('#sender-email').value,
        content: document.querySelector('#content').value,
    }
    console.log('params:', params)

    const serviceId = 'service_to07m1c'
    const templateId = 'template_e8za9ii'

    emailjs.send(serviceId, templateId, params)
        .then(res => {
            alert('Email Sent Successfully!')
            onCloseContactModal()
        })
        .catch(err => {
            console.log('err', err)
            onCloseContactModal()
        })
}



// -------------------------------------------------------------

function renderAllRecommends() {
    let strHtml = '';
    const recommends = service.getAllRecommends()
    for (var i = 0; i < recommends.length; i++) {
        strHtml += `<div class="card"  >
                        <div class="card-details">         
                        <img src="${recommends[i].imgUrl}" alt="" />         
                        </div>
                    </div>`
    }
    // <img src="img/recommends/${recommends[i].id}.jpg"/>
    document.querySelector('.cards-container').innerHTML = strHtml
}

// function renderRecommends() {
//     let strHtml = '';
//     const recommends = getRecommends()
//     const numOfRecommends = getNumOfRecommends();
//     for (var i = 0; i < numOfRecommends; i++) {
//         strHtml += `<div class="recommend-container" ><div class="recommend">${recommends[i].id} ${recommends[i].text}</div></div>`
//     }
//     document.querySelector('.recommends').innerHTML = strHtml

// }

// function renderMoreRecommends(diff) {
//     changeRecommendsOrder(diff)
//     renderRecommends()
// }

///////////////////////////////////////////////////////////////////////////////

function addListeners() {
    addMouseListeners()
    addTouchListeners()
}

function addMouseListeners() {
    gElCarousel.addEventListener('mousedown', onDown)
    gElCarousel.addEventListener('mousemove', onMove)
    gElCarousel.addEventListener('mouseup', onUp)
}

function addTouchListeners() {
    gElCarousel.addEventListener('pointerdown', onDown)
    gElCarousel.addEventListener('pointermove', onMove)
    gElCarousel.addEventListener('pointerup', onUp)
}

function onDown(ev) {
    gIsMoving = true
    gInitPos = ev.pageX

    const trans = gElcardsContainer.style.transform
    gTransform = +trans.substring(trans.indexOf('(') + 1, trans.indexOf('p'))
}

function onMove(ev) {
    if (!gIsMoving) return

    const currPos = ev.pageX
    var diff = currPos - gInitPos
    gElcardsContainer.style.transform = `translateX(${gTransform + diff}px)`
}

function onUp() {
    gIsMoving = false

}






///////////////////////////////////////////////////////////////////////////////
// ------------------------------------------------------------

function renderBanksImges() {
    let strHtml = '';
    const banksNames = getBanksNames()
    const numOfBanks = getNumOfBanks()
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

function onToggleScreen() {
    if (gIsContactModalOpen) {
        document.querySelector('.contact-modal').style.display = 'none';
        document.body.classList.toggle('open-contact-modal');
        gIsContactModalOpen = false
    } else {
        document.body.classList.toggle('open-menu');
        // if (document.querySelector('.menu-btn').innerText === "☰") {
        //     document.querySelector('.menu-btn').innerHTML = "X"
        // } else {
        //     document.querySelector('.menu-btn').innerHTML = "☰"
        // }
    }
}

function openContactModal() {
    document.querySelector('.contact-modal').style.display = 'block';
    document.body.classList.add('open-contact-modal');
    gIsContactModalOpen = true;
}

function onCloseContactModal() {
    document.querySelector('.contact-modal').style.display = 'none';
    document.body.classList.remove('open-contact-modal');
    gIsContactModalOpen = false;
}