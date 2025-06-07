const menu = {
    '/unixtime/': 'Unixtime',
};
const menuHtml = (link, text) => `<li><a href="${link}">${text}</a></li>`;
const menuListHtml = Object.entries(menu).map(([link, text]) => menuHtml(link, text)).join('');

document.getElementById('menu').innerHTML = /*html*/ `
<h1>
    <a href="/">GLOXINIA Toolbox</a>
    <span id="subtitle">
</h1>
<ul id="menu">${menuListHtml}</ul>
<hr>
`;
