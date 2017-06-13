const parseTreeData = (data) => {
  let treeData;
  try {
    if (type.isString(data)) {
        data = JSON.parse(data);
    }
    if (type.isArray(data)) {
      treeData = data;
    } else {
      treeData = [];
      console.warn('你传入的数据格式不符合 Array, 已默认转换成空数组!');
    }
  } catch (error) {
    treeData = [];
    console.log(error.message);
  }

  //根节点
  let rootNode = {},
      hasRootNode = false;
  treeData.forEach((ele, i) => {
    if (!type.isObject(ele)) return console.error('你传入的数据中不符合 Object', ele);

    if (ele.parent === '#') {
      rootNode = ele;
      treeData.splice(i, 1);
      hasRootNode = true;
      return;
    }
  });
  if (!hasRootNode) return console.error('你传入的数据没有跟节点');
  treeData.forEach((node, index) => {
    isEqualParentWithId(node, rootNode, treeData, index);
  });
  return rootNode;
}

//判断一个节点的parent是否与某个节点的 id相等, 包括嵌套对象的parent
const isEqualParentWithId =(node, rootNode)=> {
  if (rootNode.id === node.parent) {

    if (rootNode.childs && Array.isArray(rootNode.childs)) return rootNode.childs.push(node);

    rootNode.childs = [node];

  } else if (rootNode.childs && Array.isArray(rootNode.childs)) {

    rootNode.childs.forEach((child) => {

      isEqualParentWithId(node, child);
    });
  }
}

//Object.prototype.toString可以得到一个实例对象的构造函数
const type = function (o){
  var s = Object.prototype.toString.call(o);
  return s.match(/\[object (.*?)\]/)[1].toLowerCase();
};

//判断基本类型
['Null',
 'Undefined',
 'Object',
 'Array',
 'String',
 'Number',
 'Boolean',
 'Function',
 'RegExp',
 'NaN',
 'Infinite'
].forEach(function (t) {
  type['is' + t] = function (o) {
    return type(o) === t.toLowerCase();
  };
});

export default parseTreeData;
