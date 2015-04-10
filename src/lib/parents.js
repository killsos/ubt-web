// 遍历祖先级元素
export var parents = function(element, callback) {
  for(var target = element; target && target.nodeType === 1; target = target.parentNode) {
    if(callback(target) === false) break;
  }
};
