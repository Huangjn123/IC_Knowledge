document.addEventListener('DOMContentLoaded', () => {
  const navButtons = document.querySelectorAll('.nav button');
  const contents = document.querySelectorAll('.content');

  // 初始化：根据 URL 参数显示对应内容（可选）
  const urlParams = new URLSearchParams(window.location.search);
  const initialTab = urlParams.get('tab') || 'home';
  showContent(initialTab);

  navButtons.forEach(button => {
    button.addEventListener('click', () => {
      const target = button.dataset.target;
      showContent(target);
      
      // 更新 URL 参数（可选）
      history.pushState({}, '', `?tab=${target}`);
    });
  });

  function showContent(target) {
    contents.forEach(content => {
      content.classList.remove('active');
    });
    document.getElementById(target).classList.add('active');
  }
});

//动态内容扩展
// async function loadContent(url, target) {
//   const response = await fetch(url);
//   const html = await response.text();
//   document.getElementById(target).innerHTML = html;
//   showContent(target);
// }

// 使用示例：
// button.addEventListener('click', () => {
//   loadContent(`/${target}.html`, target);
// });