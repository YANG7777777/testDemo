const compareWidth = (el) => {
    // 如果没有超出宽度，即子<父 则移除tooltip
    if (el.querySelector('.ellipse-text') && el.querySelector('.ellipse-text').offsetWidth < el.offsetWidth) {
      const copyEl = el.parentNode; // 获取到目标节点的父节点
      const copySpan = el.querySelector('.ellipse-text'); // 获取到目标节点的子节点，即纯粹的span标签文案
      el.parentNode.removeChild(el); // 移除带有el-tooltip组件的节点
      copyEl.appendChild(copySpan); // 将纯粹的span标签文案整体追加到目标节点的父节点
    }
  };
  export default {
    // 注册一个全局自定义指令 `showtip`
    // Vue.directive('showtip', {
        // 只调用一次，指令第一次绑定到元素时调用。在这里可以进行一次性的初始化设置。
      bind: (el, binding) => {
      // bind的时候无法获取到已经带有ajax数据的DOM元素，宽度为0
      },
      // 被绑定元素插入父节点时调用 (仅保证父节点存在，但不一定已被插入文档中)。
      inserted: (el) => {
        compareWidth(el); // 可以获取到ajax数据的DOM元素，即真实的宽度
      },
      // 所在组件的 VNode 更新时调用，但是可能发生在其子 VNode 更新之前。指令的值可能发生了改变，也可能没有。但是你可以通过比较更新前后的值来忽略不必要的模板更新
      update: (el) => {
        compareWidth(el); // 可以获取到ajax数据的DOM元素，即真实的宽度
      },
    // });
  };
  
  