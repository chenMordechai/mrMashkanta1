
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
            names: 'אבי ולבנה בוקובזה',
            text: 'תותח מושלם וכו וכו',

        },
        {
            id: gNextId++,
            names: 'שירה ואוראל חגי',
            text: 'מדהים מושלם וכו וכו',

        },
        {
            id: gNextId++,
            names: 'שירה ואוראל חגי',
            text: ' תותח מושלם וכו וכו',

        },
        {
            id: gNextId++,
            names: 'שירה ואוראל חגי',
            text: 'מדהים מושלם וכו וכו',

        },
        {
            id: gNextId++,
            names: 'שירה ואוראל חגי',
            text: 'תותח מושלם וכו וכו',

        },
        {
            id: gNextId++,
            names: 'שירה ואוראל חגי',
            text: 'מדהים מושלם וכו וכו',

        }
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
