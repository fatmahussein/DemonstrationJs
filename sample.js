const projects = [
    {    
      name: 'Tonic',
      description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
      Mobimage: 'vectors/snap.png',
      Desktimage:'vectors/snap20.png',
      technologies: ['html', 'css', 'javascript'],
      live: 'https://fatmahussein.github.io/portfolio/',
      source: 'https://fatmahussein.github.io/portfolio/',
      company: 'CANOPY',
        },
    {
      name: 'Multi-Post Stories',
      description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
      Desktimage: 'vectors/snap4.png',
      Mobimage:"vectors/snap2.png",
      technologies: ['html', 'css', 'javascript'],
      live: '#',
      source: '#',
      company: 'FACEBOOK',
        },
    {
      name: 'Facebook 360',
      description: 'Exploring the future of media in Facebook first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR.',
      Desktimage: 'vectors/snap.png',
      technologies: ['html', 'css', 'javascript'],
      live: '#',
      source: '#',
      company: 'FACEBOOK',
       },
  {
  name: 'Uber Navigation',
  description: 'A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car.',
  Desktimage: 'vectors/snap2.png',
  technologies: ['html', 'css', 'javascript'],
  live: '#',
  source: '#',
  company: 'UBER',
  },
  {
  name: 'Tonic',
  description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
  Mobimage: 'vectors/snap3.png',
  technologies: ['html', 'css', 'javascript'],
  live: '#',
  source: '#',
  company: 'CANOPY'
  },
  ];
  const projectsContainer = document.querySelector('.grid-item');
  for (const project of projects) {
  // Create the card
  const card = document.createElement('div');
  card.classList.add('card');
  // Create the image
  const image = document.createElement('img');
  image.classList.add('card-img');
  if (window.innerWidth <= 768 ) {
    image.classList.add('card-img' ,'grid-item');
     image.src = project.Mobimage;
  } else if (window.innerWidth >= 769) {
    image.classList.add('card-img' ,'grid-items');
     image.src = project.Desktimage;
  }
  card.appendChild(image);
  // Create the left block
  
  const leftBlock = document.createElement('div');
  leftBlock.classList.add('left-block');
  card.appendChild(leftBlock);
  // Create the card body
  const cardBody = document.createElement('div');
  cardBody.classList.add('card-body');
  leftBlock.appendChild(cardBody);
  // Create the card title
  const cardTitle = document.createElement('h5');
  cardTitle.classList.add('card-title');
  cardTitle.textContent = project.name;
  cardBody.appendChild(cardTitle);
  // Create the card list
  const cardList = document.createElement('ul');
  cardList.classList.add('card-list');
  cardBody.appendChild(cardList);
  // Create the card text
  const cardText = document.createElement('li');
  cardText.classList.add('card-text');
  cardText.textContent = project.company;
  // technologies.join(', ');
  cardList.appendChild(cardText);
  // Create the dot
  const dot = document.createElement('li');
  dot.classList.add('dot');
  cardList.appendChild(dot);
  // Create the dev
  const dev = document.createElement('li');
  dev.classList.add('dev');
  if (project.name === 'Tonic') {
    dev.textContent = 'Back End Dev';
  } else if (project.name === 'Multi-Post Stories' || project.name === 'Facebook 360') {
    dev.textContent = 'Full Stack Dev';
  } else if (project.name === 'Uber Navigation') {
    dev.textContent = 'Lead Developer';
  }
  cardList.appendChild(dev);
  // Create the dot
  const dots = document.createElement('li');
  dots.classList.add('dot');
  cardList.appendChild(dots);
  // Create the year
  const year = document.createElement('li');
  year.classList.add('year');
  year.textContent = '2015';
  cardList.appendChild(year);
  //Create the card description
  const cardDescription = document.createElement('p');
  cardDescription.classList.add('text');
  cardDescription.textContent = project.description;
  cardBody.appendChild(cardDescription);
  //create tags list
  const ul = document.createElement('ul');
  ul.classList.add('tags');
  cardBody.appendChild(ul);
  //create li
  const btn1 = document.createElement('li');
  btn1.classList.add('button1');
  btn1.textContent=project.technologies[0];
  ul.appendChild(btn1);
  //create li
  const btn2 = document.createElement('li');
  btn2.classList.add('button2');
  btn2.textContent=project.technologies[1];
  ul.appendChild(btn2);
  //create li
  const btn3 = document.createElement('li');
  btn3.classList.add('button3');
  btn3.textContent=project.technologies[2];
  ul.appendChild(btn3);
  //create button
  const proj = document.createElement('div');
  proj.classList.add('project');
  cardBody.appendChild(proj);
  //create anchor tag
  const bt = document.createElement('a');
  bt.setAttribute('id','proj');
  proj.appendChild(bt);
  const proje = document.createElement('div');
  proje.classList.add('project-Desktop');
  cardBody.appendChild(proje);
    //create anchor tag
  const btd = document.createElement('a');
  btd.setAttribute('id','proj');
  proje.appendChild(btd);
    
  // Append the card to the container
  projectsContainer.appendChild(card);
  }
  
  
  //if windows.innerwidth <=768{}
  
  //otherwise desktop...