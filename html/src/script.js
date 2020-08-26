// TOC

const toc = document.querySelector('#toc');
const titles = document.querySelectorAll('.sectiontitle');

const links = [];

titles.forEach(element => {
    const text = element.innerText;
    const encodedText = encodeURIComponent(text);

    element.id = encodedText;

    const a = document.createElement('a');
    a.href = '#'+encodedText;
    a.innerText = text;
    a.classList.add('is-'+element.classList.item(0));

    links.push(a);

} )


links.forEach(element => {
    const item = document.createElement('li');
    item.appendChild(element)
    toc.appendChild(item);
})
