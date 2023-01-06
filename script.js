const projects = [
  {
    nameMobile: 'Project Art Printing Data',
    nameDesk: 'Project Art Printing Data',
    description: "PPA daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    technologies: ['html', 'bootstrap', 'Ruby'],
      DesktopItem: 'item8',
    live: '#',
    source: '#',
  },
  {
    nameMobile: 'Project Art Printing Data',
    nameDesk: 'Data Dashboard Healthcare',
    description: "PPA daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    technologies: ['html', 'bootstrap', 'Ruby'],
    DesktopItem: 'item9',
    live: '#',
    source: '#',
  },
  {
    nameMobile: 'Project Art Printing Data',
    nameDesk: 'Website Portfolio',
    description: "PPA daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    technologies: ['html', 'bootstrap', 'Ruby'],
    DesktopItem: 'item10',
    live: '#',
    source: '#',
  },
  {
    nameMobile: 'Project Art Printing Data',
    nameDesk: 'Project Art Printing Data',
    description: "PPA daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    technologies: ['html', 'bootstrap', 'Ruby'],
    DesktopItem: 'item11',
    live: '#',
    source: '#',
  },
  {
    nameMobile: 'Project Art Printing Data',
    nameDesk: 'Data Dashboard Healthcare',
    description: "PPA daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    technologies: ['html', 'bootstrap', 'Ruby'],
    DesktopItem: 'item12',
    live: '#',
    source: '#',
  },
  {
    nameMobile: 'Project Art Printing Data',
    nameDesk: 'Website Portfolio',
    description: "PPA daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    technologies: ['html', 'bootstrap', 'Ruby'],
     DesktopItem: 'item13',
     live: '#',
    source: '#',
  },
];

// Project Cards Display
const container = document.querySelector('.grid-item');

for (let i = 0; i < projects.length; i += 1) {
  const div = document.createElement('div');
  container.appendChild(div);
  const h2 = document.createElement('h2');
  if (window.innerWidth <= 768) {
    div.classList.add('grid', 'mobile');
    h2.textContent = projects[i].nameMobile;
  } else {
    div.classList.add('grid', 'desktop', projects[i].DesktopItem);
    h2.textContent = projects[i].nameDesk;
  }
  div.appendChild(h2);
}

let count = 0;

const arr = [...container.children];

for (let i = 2; i < arr.length; i += 1) {
  const span = document.createElement('span');
  span.innerHTML = `
    <p>${projects[count].description}</p>
    <div class="lang">
    <ul>
      <li><button>${projects[count].technologies[0]}</button></li>
      <li><button>${projects[count].technologies[1]}</button></li>
      <li><button>${projects[count].technologies[2]}</button></li>
    </ul>

  </div>
  <button class="see-project btn">See Project</button>
`; arr[i].appendChild(span);
  count += 1;
}