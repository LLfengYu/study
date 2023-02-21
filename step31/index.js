/*
 * @Author: amos 1037181164@qq.com
 * @Date: 2023-02-16 11:08:20
 * @LastEditors: amos 1037181164@qq.com
 * @LastEditTime: 2023-02-16 22:37:19
 * @FilePath: /study/step31/index.js
 * @Description:
 */
// 树结构的遍历查找
// 实现一个 find 方法，根据 id 查找一颗树结构中的任意一项，可以有多种实现方式
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
// 测试用例
// find(tree, "1000"); // => '深圳'
// find(tree, "2001"); // => '越秀区'
// find(tree, "1012"); // => '粤海街道'
// find(tree, "1112"); // => '阿里中心'
// find(tree, "1222"); // => '未找到'

// 1. 递归
function find(tree, id) {
  for (let i of tree) {
    if (i.id === id) {
      return i.name;
    }
  }
  for (let o of tree) {
    if (o.children && o.children.length > 0) {
      const res = find(o.children, id);
      if (res) {
        return res;
      } else {
        return "未找到";
      }
    }
  }
}

// console.log(find(tree, "2001"));
