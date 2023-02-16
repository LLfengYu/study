/*
 * @Author: amos 1037181164@qq.com
 * @Date: 2022-11-13 21:44:18
 * @LastEditors: amos 1037181164@qq.com
 * @LastEditTime: 2022-12-04 17:38:05
 * @FilePath: /study/test1.ts
 * @Description: 1
 */
var str = 'ssdjf12kdsjfa34ljsf56lksjd'

// 过滤出字符串中的数字

// 方法一  遍历过滤
 const number  =  [...str].filter(e=>{
  return !Number.isNaN(parseInt(e))
 }).join('')

//  可简写为 
const num = [...str].filter(e=>!Number.isNaN(parseInt(e))).join('')
 console.log(num)

//  方法二 正则

