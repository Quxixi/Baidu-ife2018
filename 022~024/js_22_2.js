
/*
实现一个字符串头尾去除空格的函数
注意需要去除的空格，包括全角、半角空格
暂时不需要学习和使用正则表达式的方式
*/
function diyTrim(str) {
    var result = "";

    // 不使用正则的情况下:
    // 需要知道全角的样子 => 不知道 => 先使用charCodeAt获得全角的Unicode值 => 
    // 再用String.fromCharCode获得其字符串样子 => 最后用indexOf判断起是否存在
    let cade = String.fromCharCode(12288)
    // do something
    while (str.indexOf(' ') != -1  || str.indexOf(`${cade}`) != -1) {
        str = str.replace(' ','')
        str = str.replace(`${cade}`,'')
    }
    result = str
    return str
}

// 测试用例
console.log(diyTrim(' a f b    ')); // ->a f b
console.log(diyTrim('    ffdaf    ')); // ->ffdaf
console.log(diyTrim('1    ')); // ->1
console.log(diyTrim('　　f')); // ->f
console.log(diyTrim('  　  a f b 　　 ')); // ->a f b
console.log(diyTrim(' ')); // ->
console.log(diyTrim('　')); // ->
console.log(diyTrim('')); // ->

/*
去掉字符串str中，连续重复的地方
*/
function removeRepetition(str) {
    var result = "";

  
    
    // result = str.replace(/(.).*\1/g,"$1") 

      //第二想法:错误,只需替换连续重复的地方
    // for (let i = 0; i < str.length; i++) {
    //         if (result.indexOf(str[i])==-1) {
    //             result = result + str[i]
    //         }    
        //第一想法:错误
        // if (str.charAt(i) == str.charAt(j)){
        //     str = str.replace(`${str.charAt(j)}`,'')
        //     result = str
        // }
           
    return result;
}

// 测试用例
console.log(removeRepetition("aaa")); // ->a
console.log(removeRepetition("abbba")); // ->aba
console.log(removeRepetition("aabbaabb")); // ->abab
console.log(removeRepetition("")); // ->
console.log(removeRepetition("abc")); // ->abc