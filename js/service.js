
export const service = {
    createRecommends,
    createRecommendsVideo,
    getAllRecommends,
    getNumOfRecommends,
    getRecommends,
    changeRecommendsOrder,
    getAllRecommendsVideo

}

let gBanksNames;
let gBanksRange = 0
let gNumOfBanks = 6
let gNextId = 1

let gRecommends;
let gRecommendsVideo;
let gNumOfRecommends = 3;
let gRecommendsRange = 0

function createRecommends() {
    gRecommends = [
        {
            id: gNextId++,
            imgUrl: 'https://res.cloudinary.com/dnluclrao/image/upload/v1706466895/20220516_104705_kbh2s0.jpg'
        },
        {
            id: gNextId++,
            imgUrl: 'https://res.cloudinary.com/dnluclrao/image/upload/v1706466827/%D7%A2%D7%95%D7%A8%D7%9A_%D7%94%D7%AA%D7%9E%D7%95%D7%A0%D7%95%D7%AA_Y1Ywq8_c1i9qk.png'
        },
        {
            id: gNextId++,
            imgUrl: 'https://res.cloudinary.com/dnluclrao/image/upload/v1706466823/%D7%A2%D7%95%D7%A8%D7%9A_%D7%94%D7%AA%D7%9E%D7%95%D7%A0%D7%95%D7%AA_LcMOT9_eaqfck.png'
        },
        {
            id: gNextId++,
            imgUrl: 'https://res.cloudinary.com/dnluclrao/image/upload/v1706466823/%D7%A2%D7%95%D7%A8%D7%9A_%D7%94%D7%AA%D7%9E%D7%95%D7%A0%D7%95%D7%AA_zvaCCp_dyioof.png'
        },
        {
            id: gNextId++,
            imgUrl: 'https://res.cloudinary.com/dnluclrao/image/upload/v1706466822/%D7%A2%D7%95%D7%A8%D7%9A_%D7%94%D7%AA%D7%9E%D7%95%D7%A0%D7%95%D7%AA_tcEu9D_pikaii.png'
        },
        {
            id: gNextId++,
            imgUrl: 'https://res.cloudinary.com/dnluclrao/image/upload/v1706466821/%D7%A2%D7%95%D7%A8%D7%9A_%D7%94%D7%AA%D7%9E%D7%95%D7%A0%D7%95%D7%AA_XUXQFh_t3jglp.png'
        },
        {
            id: gNextId++,
            imgUrl: 'https://res.cloudinary.com/dnluclrao/image/upload/v1706466820/%D7%A2%D7%95%D7%A8%D7%9A_%D7%94%D7%AA%D7%9E%D7%95%D7%A0%D7%95%D7%AA_u31OU3_jmxtyw.png'
        },
        {
            id: gNextId++,
            imgUrl: 'https://res.cloudinary.com/dnluclrao/image/upload/v1706466816/%D7%A2%D7%95%D7%A8%D7%9A_%D7%94%D7%AA%D7%9E%D7%95%D7%A0%D7%95%D7%AA_ciiCWI_pmoodl.png'
        },
        {
            id: gNextId++,
            imgUrl: 'https://res.cloudinary.com/dnluclrao/image/upload/v1706466815/%D7%A2%D7%95%D7%A8%D7%9A_%D7%94%D7%AA%D7%9E%D7%95%D7%A0%D7%95%D7%AA_bJ5Kbu_t6uwyq.png'
        },
        {
            id: gNextId++,
            imgUrl: 'https://res.cloudinary.com/dnluclrao/image/upload/v1706466807/%D7%A2%D7%95%D7%A8%D7%9A_%D7%94%D7%AA%D7%9E%D7%95%D7%A0%D7%95%D7%AA_MX5S5o_zyzyfi.png'
        },
        {
            id: gNextId++,
            imgUrl: 'https://res.cloudinary.com/dnluclrao/image/upload/v1706466805/%D7%A2%D7%95%D7%A8%D7%9A_%D7%94%D7%AA%D7%9E%D7%95%D7%A0%D7%95%D7%AA_EbrAHj_v4y23y.png'
        },
        {
            id: gNextId++,
            imgUrl: 'https://res.cloudinary.com/dnluclrao/image/upload/v1706466803/%D7%A2%D7%95%D7%A8%D7%9A_%D7%94%D7%AA%D7%9E%D7%95%D7%A0%D7%95%D7%AA_sjxN8s_ckrm94.png'
        },
        {
            id: gNextId++,
            imgUrl: 'https://res.cloudinary.com/dnluclrao/image/upload/v1706466787/IMG-20231109-WA0071_ueyrmv.jpg'
        },
        {
            id: gNextId++,
            imgUrl: 'https://res.cloudinary.com/dnluclrao/image/upload/v1706466787/WhatsApp_Image_2024-01-28_at_20.21.11_bpxbup.jpg'
        },
        {
            id: gNextId++,
            imgUrl: 'https://res.cloudinary.com/dnluclrao/image/upload/v1706466787/IMG-20240122-WA0061_hasqwr.jpg'
        },
        {
            id: gNextId++,
            imgUrl: 'https://res.cloudinary.com/dnluclrao/image/upload/v1706466785/20231105_133918_f1pauw.jpg'
        },
        {
            id: gNextId++,
            imgUrl: 'https://res.cloudinary.com/dnluclrao/image/upload/v1706466785/IMG-20231226-WA0011_wd44vc.jpg'
        },
        {
            id: gNextId++,
            imgUrl: 'https://res.cloudinary.com/dnluclrao/image/upload/v1706466783/20230906_175021_vubaqj.jpg'
        },
        {
            id: gNextId++,
            imgUrl: 'https://res.cloudinary.com/dnluclrao/image/upload/v1706466782/20231127_142957_oym2rm.jpg'
        },
        {
            id: gNextId++,
            imgUrl: 'https://res.cloudinary.com/dnluclrao/image/upload/v1706466782/IMG-20230827-WA0016_tyv0zl.jpg'
        },
        {
            id: gNextId++,
            imgUrl: 'https://res.cloudinary.com/dnluclrao/image/upload/v1706466781/IMG-20220529-WA0053_qfwx8p.jpg'
        },
        {
            id: gNextId++,
            imgUrl: 'https://res.cloudinary.com/dnluclrao/image/upload/v1706466781/IMG-20230906-WA0088_npyd5d.jpg'
        },
        {
            id: gNextId++,
            imgUrl: 'https://res.cloudinary.com/dnluclrao/image/upload/v1706466777/IMG-20230607-WA0023_mkkfmh.jpg'
        },
        {
            id: gNextId++,
            imgUrl: 'https://res.cloudinary.com/dnluclrao/image/upload/v1706466773/20221027_111237_rlzgwe.jpg'
        },
        {
            id: gNextId++,
            imgUrl: 'https://res.cloudinary.com/dnluclrao/image/upload/v1706466770/20231214_145500_wuezzu.jpg'
        },
        {
            id: gNextId++,
            imgUrl: 'https://res.cloudinary.com/dnluclrao/image/upload/v1706466769/20221025_103628_yrbgwu.jpg'
        },
        {
            id: gNextId++,
            imgUrl: 'https://res.cloudinary.com/dnluclrao/image/upload/v1706466752/20230712_183300_egunjm.jpg'
        },
        {
            id: gNextId++,
            imgUrl: 'https://res.cloudinary.com/dnluclrao/image/upload/v1706466749/20230116_103648_rokkiq.jpg'
        },
        {
            id: gNextId++,
            imgUrl: 'https://res.cloudinary.com/dnluclrao/image/upload/v1706466746/20221012_112020_qdfdea.jpg'
        },
        {
            id: gNextId++,
            imgUrl: 'https://res.cloudinary.com/dnluclrao/image/upload/v1706466740/20221003_183910_m5k2be.jpg'
        },
        {
            id: gNextId++,
            imgUrl: 'https://res.cloudinary.com/dnluclrao/image/upload/v1706466739/20221117_094700_r7qwzk.jpg'
        },
        {
            id: gNextId++,
            imgUrl: 'https://res.cloudinary.com/dnluclrao/image/upload/v1706466738/20220531_100952_tnhzhj.jpg'
        },
        {
            id: gNextId++,
            imgUrl: 'https://res.cloudinary.com/dnluclrao/image/upload/v1706466736/20221110_125001_ls9msu.jpg'
        },
        {
            id: gNextId++,
            imgUrl: 'https://res.cloudinary.com/dnluclrao/image/upload/v1706466731/20220907_112350_kxidf9.jpg'
        },
        // {
        //     id: gNextId++,
        //     imgUrl: ''
        // },
    ]
    console.log('gRecommends:', gRecommends)


}

function createRecommendsVideo() {
    gRecommendsVideo = [
        {
            id: gNextId++,
            videoUrl: 'https://res.cloudinary.com/dnluclrao/video/upload/v1706468536/20230725_133456_oyysif.mp4'
        },
        {
            id: gNextId++,
            videoUrl: 'https://res.cloudinary.com/dnluclrao/video/upload/v1706468523/20221110_125137_bexh6r.mp4'
        },
        {
            id: gNextId++,
            videoUrl: 'https://res.cloudinary.com/dnluclrao/video/upload/v1706468490/20231105_134236_hqnvay.mp4'
        },
        {
            id: gNextId++,
            videoUrl: 'https://res.cloudinary.com/dnluclrao/video/upload/v1706468489/20230424_135224_tn3ovo.mp4'
        },
        {
            id: gNextId++,
            videoUrl: 'https://res.cloudinary.com/dnluclrao/video/upload/v1706468483/20221003_184325_m5cset.mp4'
        },
        {
            id: gNextId++,
            videoUrl: 'https://res.cloudinary.com/dnluclrao/video/upload/v1706468449/20230116_103832_h1pbjy.mp4'
        },
        {
            id: gNextId++,
            videoUrl: 'https://res.cloudinary.com/dnluclrao/video/upload/v1706468425/20230712_184413_fbs9l1.mp4'
        },
        {
            id: gNextId++,
            videoUrl: 'https://res.cloudinary.com/dnluclrao/video/upload/v1706468374/20220907_113506_adzffd.mp4'
        },
        {
            id: gNextId++,
            videoUrl: 'https://res.cloudinary.com/dnluclrao/video/upload/v1706468307/20230508_114716_ccas7i.mp4'
        },
        {
            id: gNextId++,
            videoUrl: 'https://res.cloudinary.com/dnluclrao/video/upload/v1706468301/20231211_101952_vdllfh.mp4'
        },
        {
            id: gNextId++,
            videoUrl: 'https://res.cloudinary.com/dnluclrao/video/upload/v1706468251/20231127_143214_luelge.mp4'
        },
    ]
}

function getAllRecommends() {
    return gRecommends
}

function getAllRecommendsVideo() {
    return gRecommendsVideo
}

function getNumOfRecommends() {
    return gNumOfRecommends
}

function getRecommends() {
    return gRecommends.slice(0, gNumOfRecommends)
}

function changeRecommendsOrder(diff) {
    if (diff < 0) {
        gRecommends.unshift(gRecommends.pop())
    } else {
        gRecommends.push(gRecommends.shift())

    }
}

//////////////////////////////////////////////////////////////

function createBanksNames() {
    gBanksNames = ['hapoalim', 'jerusalem', 'discont', 'leumi', 'tefahot', 'massad']
}

function getNumOfBanks() {
    return gNumOfBanks
}

function getBanksNames() {
    if (gBanksRange === gBanksNames.length) gBanksRange = 0
    const banksNames = gBanksNames.slice(gBanksRange, gNumOfBanks + gBanksRange)
    if (banksNames.length === gNumOfBanks) return banksNames
    else {
        if (gBanksRange > 0) {
            let moreBanksNames = gBanksNames.slice(0, gBanksRange)
            banksNames.push(...moreBanksNames);
            return banksNames
        }
    }

}

function changeBanksRange(diff) {

    gBanksRange += diff
}






// function rotate(arr, n) {
//     var x = arr[n - 1], i;
//     for (i = n - 1; i > 0; i--)
//         arr[i] = arr[i - 1];
//     arr[0] = x;
// }

// var arr = [1, 2, 3, 4, 5];
// var n = arr.length;

// document.write("Given array is <br>");
// for (var i = 0; i < n; i++)
//     document.write(arr[i] + " ");

// rotate(arr, n);

// document.write("<br>Rotated array is <br>");
// for (var i = 0; i < n; i++)
//     document.write(arr[i] + " ");
