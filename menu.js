const siteName = 'GLOXINIA Tools';
const menu = {
    '/unixtime.html': 'Unixtime',
};
const menuHtml = (link, text) => `<li><a href="${link}">${text}</a></li>`;
const menuListHtml = Object.entries(menu).map(([link, text]) => menuHtml(link, text)).join('');

document.getElementById('menu').innerHTML = /*html*/ `
<h1><a href="/">${siteName}</a></h1>
<h2 id="page-name"></h2>
<ul>${menuListHtml}</ul>
<hr>
`;

if (document.title == '') {
    document.title = siteName;
} else {
    const pageName = document.title
    document.title = `${siteName} - ${pageName}`;
    document.getElementById('page-name').innerHTML = pageName;
}