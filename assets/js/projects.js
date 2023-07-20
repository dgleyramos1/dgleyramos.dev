
const projects = [
  {
    class: "desktop",
    title: "Open Road",
    description: "Em resumo, O OpenRoad é uma ferramenta fundamental para qualquer estabelecimento que trabalhe com esse sistema de atendimento. Ele ajuda a melhorar a eficiência, reduzir erros e proporcionar uma experiência melhor aos clientes.",
    image: "./assets/img/projects/openroad-desktop.jpeg",
    tags: [
      {
        title: "Java"
      },
      {
        title: "css"
      },
      {
        title: "JavaFX"
      },
      {
        title: "Spring Boot"
      }
    ],
    link: "https://github.com/dgleyramos1/openroad-desktop"
  },
  {
    class: "mobile",
    title: "Open Road - mobile",
    description: "Aplicativo mobile para auxiliar aos atendentes do estabelecimento a abrir e fechar mesas como também fazer seus pedidos e ter o cálculo de tudo na palma de sua mão.",
    image: "./assets/img/projects/openroad-mobile.jpeg",
    tags: [
      {
        title: "React Native"
      },
      {
        title: "CSS Module"
      },
      {
        title: "Expo"
      }
    ],
    link: "https://github.com/dgleyramos1/openroad-mobile"
  }
]




const projectsContainer = document.getElementById('projects');

function adicionarContentAoContainer(content){
  projectsContainer.appendChild(content);
}

function criarContent(category){
  const content = document.createElement('div');
  content.classList.add('project__item');
  content.classList.add('grid');
  content.classList.add('mix');
  content.classList.add(category);
  return content;
}

function criarImagem(path){
  const image = document.createElement('img');
  image.src = path;
  image.alt = "Imagem do Projeto"
  image.classList.add('project__img');
  return image;
}

function criarDiv(classe){
  const content = document.createElement('div');
  content.classList.add(classe);
  return content;
}



function criarHeading(text, tag, {classes}){
  const title = document.createElement(tag);
  title.classList.add(classes);
  title.textContent = text;
  return title;
}

function description(description){
  const descricao = document.createElement('p');
  descricao.classList.add('project__description');
  descricao.textContent = description;
  return descricao;
}

function criarTags(tags){
  const list = document.createElement('ul');
  list.classList.add('tags');
  list.classList.add('text-sm');
  tags.forEach(tag => {
    let item = criarItemList(tag.title);
    list.appendChild(item);
  });

  return list
}


function criarItemList(tag){
  let itemList = document.createElement('li');
  itemList.textContent = tag;
  return itemList;
}

projects.forEach((project) => {
  let content = criarContent(project.class);
  let image = criarImagem(project.image);
  let projectData = criarDiv('project__data');
  let projectTitle = criarHeading(project.title, 'h3', 'project__title text-lg');
  let projectDescription = description(project.description);
  let projectStack = criarHeading('STACK USADA:', 'h4', 'project__stack text-xs');
  let tags = criarTags(project.tags);
  let linkDemo = criarDiv('project__link');
  let link = criarLink(project.link);


  linkDemo.appendChild(link);

  // div project data
  projectData.appendChild(projectTitle);
  projectData.appendChild(projectDescription);
  projectData.appendChild(projectStack);
  projectData.appendChild(tags);
  projectData.appendChild(linkDemo)
  
  
  content.appendChild(image);
  content.appendChild(projectData)
  adicionarContentAoContainer(content)
})


function criarLink(pathLink){
  console.log(pathLink)
  let link = document.createElement('a');
  link.href = pathLink;
  link.classList.add('project__link--item');
  link.classList.add('text-sm');
  link.textContent = "Github";
  link.setAttribute('target', '_blank');
  return link;
}


/**
 * <div class="project__item grid mix api">
            <img
              src="./assets/img/project-1.png"
              alt=""
              class="project__img"  
            />

            <div class="project__data">
              <h3 class="project__title text-lg">
                MOBILE AND DESKTOP APP FOR LONDON HOSTEL STORE
              </h3>
              <p class="project__description">
                Do answered bachelor occasion in of offended no concerns. Supply worthy warmth branch of no ye. Voice tried known to as my to. Though wished merits or be. Alone visit use these smart rooms ham.
              </p>
              <h4 class="project__stack text-xs">
                USED STACK:
              </h4>
              <ul class="tags text-sm">
                <li>html5</li>
                <li>css3</li>
                <li>JavaScript</li>
                <li>BEM</li>
                <li>bower</li>
                <li>grunt</li>
              </ul>

              <div class="project__link">
                <a href="" class="project__link--item text-sm">Demo</a>
              </div>
            </div>
          </div>
 */