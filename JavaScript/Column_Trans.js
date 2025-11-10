document.addEventListener('DOMContentLoaded', () => {
  const navButtons = document.querySelectorAll('.tab-nav button');
  const contents = document.querySelectorAll('.tab-content');

  // 关键：刷新时强制激活默认栏目（basic），避免无active类导致内容消失
  const defaultTab = 'basic';
  showContent(defaultTab);

  // 栏目点击事件
  navButtons.forEach(button => {
    button.addEventListener('click', () => {
      const target = button.dataset.target;
      showContent(target);
      // 可选：保留URL参数（如果需要），不需要可删除
      // history.pushState({}, '', `?tab=${target}`);
    });
  });

  // 显示目标内容的核心函数
  function showContent(target) {
    // 移除所有active类
    contents.forEach(content => content.classList.remove('active'));
    navButtons.forEach(btn => btn.classList.remove('active'));
    // 给目标内容添加active类
    const targetContent = document.getElementById(target);
    if (targetContent) {
      targetContent.classList.add('active');
    }
    // 给当前点击的按钮添加active样式（可选，提升体验）
    const activeBtn = Array.from(navButtons).find(btn => btn.dataset.target === target);
    if (activeBtn) {
      activeBtn.classList.add('active');
    }
  }
});