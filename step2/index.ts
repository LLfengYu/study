/*
 * @Author: amos 1037181164@qq.com
 * @Date: 2022-12-04 17:39:06
 * @LastEditors: amos 1037181164@qq.com
 * @LastEditTime: 2022-12-04 18:43:40
 * @FilePath: /study/test2.js
 * @Description: 版本号排序
 */
function formatVersionCode(versionList) {
  versionList.sort((a, b) => {
    let i = 0;
    
    const arr1 = a.split('.');
    const arr2 = b.split('.');

    while (true) {
        const s1 = parseInt(arr1[i]);
        const s2 = parseInt(arr2[i++]);

        if (s1 === undefined || s2 === undefined) {
            return arr1.length - arr2.length;
        }

        if (s1 === s2) continue;

        return s1 - s2;
    }
});

console.log(versionList)
}

const arr =['1.1', '1.21.1-dev', '0.1-dev','3.1.5','3.1.4-dev','3.1.4-pro'];

formatVersionCode(arr)