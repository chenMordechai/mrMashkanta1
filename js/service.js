
export const service = {
    createRecommends,
    getAllRecommends,
    getNumOfRecommends,
    getRecommends,
    changeRecommendsOrder
}

let gBanksNames;
let gBanksRange = 0
let gNumOfBanks = 6
let gNextId = 1

let gRecommends;
let gNumOfRecommends = 3;
let gRecommendsRange = 0

function createRecommends() {
    gRecommends = [
        {
            id: gNextId++,
            imgUrl: 'https://res.cloudinary.com/dnluclrao/image/upload/v1703488436/10_ww1ppk.jpg'

        },
        {
            id: gNextId++,
            imgUrl: 'https://res.cloudinary.com/dnluclrao/image/upload/v1703488435/8_nsmooc.jpg'

        },
        {
            id: gNextId++,
            imgUrl: 'https://res.cloudinary.com/dnluclrao/image/upload/v1703488434/6_p59dji.jpg'

        },
        {
            id: gNextId++,
            imgUrl: 'https://res.cloudinary.com/dnluclrao/image/upload/v1703488432/5_hbnhqf.jpg'

        },
        {
            id: gNextId++,
            imgUrl: 'https://res.cloudinary.com/dnluclrao/image/upload/v1703488430/7_t5mtbz.jpg'

        },
        {
            id: gNextId++,
            imgUrl: 'https://res.cloudinary.com/dnluclrao/image/upload/v1703488428/9_e1vlrs.jpg'

        },
        {
            id: gNextId++,
            imgUrl: 'https://res.cloudinary.com/dnluclrao/image/upload/v1703488426/19_rmq73g.jpg'

        },
        {
            id: gNextId++,
            imgUrl: 'https://res.cloudinary.com/dnluclrao/image/upload/v1703488426/24_llx6mn.jpg'

        },
        {
            id: gNextId++,
            imgUrl: 'https://res.cloudinary.com/dnluclrao/image/upload/v1703488423/4_zi9taf.jpg'

        },
        {
            id: gNextId++,
            imgUrl: 'https://res.cloudinary.com/dnluclrao/image/upload/v1703488422/14_zmnyyc.jpg'

        },
        {
            id: gNextId++,
            imgUrl: 'https://res.cloudinary.com/dnluclrao/image/upload/v1703488422/18_ymm0ci.jpg'

        },
        {
            id: gNextId++,
            imgUrl: 'https://res.cloudinary.com/dnluclrao/image/upload/v1703488422/3_qy0c3f.jpg'

        },
        {
            id: gNextId++,
            imgUrl: 'https://res.cloudinary.com/dnluclrao/image/upload/v1703488421/17_sjgioy.jpg'

        },
        {
            id: gNextId++,
            imgUrl: 'https://res.cloudinary.com/dnluclrao/image/upload/v1703488421/2_r7sz85.jpg'

        },
        {
            id: gNextId++,
            imgUrl: 'https://res.cloudinary.com/dnluclrao/image/upload/v1703488420/1_fsw9om.jpg'

        },
        {
            id: gNextId++,
            imgUrl: 'https://res.cloudinary.com/dnluclrao/image/upload/v1703488419/22_a1nso6.jpg'

        },
        {
            id: gNextId++,
            imgUrl: 'https://res.cloudinary.com/dnluclrao/image/upload/v1703488416/16_uhd1gz.jpg'

        },
        {
            id: gNextId++,
            imgUrl: 'https://res.cloudinary.com/dnluclrao/image/upload/v1703488416/23_gihnq4.jpg'

        },
        {
            id: gNextId++,
            imgUrl: 'https://res.cloudinary.com/dnluclrao/image/upload/v1703488413/15_rrwrls.jpg'

        },
        {
            id: gNextId++,
            imgUrl: 'https://res.cloudinary.com/dnluclrao/image/upload/v1703488411/13_xrv0nz.jpg'

        },
        {
            id: gNextId++,
            imgUrl: 'https://res.cloudinary.com/dnluclrao/image/upload/v1703488411/11_ikqssz.jpg'

        },
        {
            id: gNextId++,
            imgUrl: 'https://res.cloudinary.com/dnluclrao/image/upload/v1703488411/21_iadv0l.jpg'

        },
        {
            id: gNextId++,
            imgUrl: 'https://res.cloudinary.com/dnluclrao/image/upload/v1703488411/12_owjjfs.jpg'

        },
        {
            id: gNextId++,
            imgUrl: 'https://res.cloudinary.com/dnluclrao/image/upload/v1703488409/20_wu7out.jpg'

        },
        // {
        //     id: gNextId++,
        //     imgUrl:''

        // },

    ]


}

function getAllRecommends() {
    return gRecommends
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
