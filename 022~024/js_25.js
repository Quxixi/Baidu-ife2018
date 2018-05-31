// 编码任务1:

var arr = [43, 54, 4, -4, 84, 100, 58, 27, 140];
// 将上面数组分别按从大到小以及从小到大进行排序后在console中输出
// 大 => 小:
function diminishing(a, b) {
    return b - a
}
arr.sort(diminishing)
console.log(arr)

var arr = ['apple', 'dog', 'cat', 'car', 'zoo', 'orange', 'airplane'];
// 将上面数组分别按字母顺序a-z及z-a进行排序，在console中输出
arr.sort().reverse()
console.log(arr)

var arr = [[10, 14], [16, 60], [7, 44], [26, 35], [22, 63]];
// 将上面的二维数组，按照每个元素中第二个数从大到小的顺序进行排序输出，输出结果应该为：
// [[22, 63], [16, 60], [7, 44], [26, 35], [10, 14]]

arr.sort(function(x, y){
    return x[1] - y[1]
  });


var arr = [
    {
        id: 1,
        name: 'candy',
        value: 40
    }, {
        id: 2,
        name: 'Simon',
        value: 50
    }, {
        id: 3,
        name: 'Tony',
        value: 45
    }, {
        id: 4,
        name: 'Annie',
        value: 60
    }
];
// 将上面数组分别按元素对象的value值从小到大进行排序后输出
arr.sort(function(a, b){
    return b.value - a.value
  });


// 编码任务2：

// 学习通用的数据用不同的数据结构进行存储，以及相互的转换

// 对象转为数组：

var scoreObject = {
    "Tony": {
        "Math": 95,
        "English": 79,
        "Music": 68
    }, 
    "Simon": {
        "Math": 100,
        "English": 95,
        "Music": 98
    }, 
    "Annie": {
        "Math": 54,
        "English": 65,
        "Music": 88
    }
}
// 如上有一个用来存储学习成绩的对象，编写一个函数，将其转为如下的二维数组

// var scoreArray = [
//     ["Tony", 95, 79, 68]
//     ...
// ];

function toArray(params) {
    var scoreArray = []
    for(let i in params){
        var item = []
        item.push(i)
        for(var j in params[i] ) 
        
            item.push(params[i][j])
            scoreArray.push(item)
        
    }

    for(var e of scoreArray){
        console.log(e)
    }
}




// 数组转为对象：

var menuArr = [
    [1, "Area1", -1],
    [2, "Area2", -1],
    [3, "Area1-1", 1],
    [4, "Area1-2", 1],
    [5, "Area2-1", 2],
    [6, "Area2-2", 2],
    [7, "Area1-2-3", 4],
    [8, "Area2-2-1", 6],
];
// 如上有一个用来存储多级菜单数据的数组，编写一个函数，将其转为如下的对象

// var menuObject = {
//     "1": {
//         name: "Area1",
//         subMenu: {
//             "3": {
//                 name: "Area1-1"
//             },
//             "4": {
//                 name: "Area1-2",
//                 subMenu: {
//                     "7": {
//                         name: "Area1-2-3"
//                     }
//                 }
//             }
//         }
//     }

// }


//未完成
function toObject(params) {
    var scoreObject = {}
    for(let i of params){
        var item = []
        item.push(i)
        for(var j in params[i] ) 
        
            item.push(params[i][j])
            scoreArray.push(item)
        
    }
}