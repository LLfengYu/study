/*
 * @Author: amos 1037181164@qq.com
 * @Date: 2023-02-16 21:45:53
 * @LastEditors: amos 1037181164@qq.com
 * @LastEditTime: 2023-02-17 09:15:43
 * @FilePath: /study/step34/index.js
 * @Description: tree 2 array
 */

const tree = [
  {
    id: "1000",
    name: "深圳",
    children: [
      {
        id: "1001",
        name: "宝安",
        children: [],
      },
      {
        id: "1002",
        name: "南山",
        children: [
          {
            id: "1012",
            name: "粤海街道",
            children: [
              {
                id: "1112",
                name: "阿里中心",
                children: [],
              },
              {
                id: "1212",
                name: "深圳湾人才公园",
                children: [],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "2000",
    name: "广州",
    children: [
      {
        id: "2001",
        name: "越秀区",
        children: [
          {
            id: "2011",
            name: "人民公园",
          },
        ],
      },
      {
        id: "2002",
        name: "天河区",
        children: [],
      },
    ],
  },
];

console.log();
