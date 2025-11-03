// 等待页面 DOM 完全加载后执行
document.addEventListener('DOMContentLoaded', () => {
  // 获取所有标题和内容元素
  const tabTitles = document.querySelectorAll('.tab-title');
  const tabContents = document.querySelectorAll('.tab-content');

  // 给每个标题添加点击事件
  tabTitles.forEach(title => {
    title.addEventListener('click', () => {
      // 1. 移除所有标题的激活状态
      tabTitles.forEach(t => t.classList.remove('active'));
      // 2. 给当前点击的标题添加激活状态
      title.classList.add('active');

      // 3. 获取当前标题对应的内容 ID（通过 data-tab 属性）
      const tabId = title.getAttribute('data-tab');
      // 4. 隐藏所有内容
      tabContents.forEach(content => content.classList.remove('active'));
      // 5. 显示当前标题对应的内容
      document.getElementById(tabId).classList.add('active');
    });
  });
});