
const projects = [
  {
    class: "desafio",
    title: "Blogr",
    description: "Esta é uma solução para o desafio da página de destino do Blogr no Frontend Mentor. Os desafios do Frontend Mentor ajudam você a melhorar suas habilidades de codificação criando projetos realistas.",
    image: "./assets/img/projects/blogr.png",
    tags: [
      {
        title: "html5"
      },
      {
        title: "csss3"
      },
      {
        title: "Javascript"
      }
    ],
    link: "https://dgleyramos1.github.io/blogr/"
  },
  {
    class: "api",
    title: "Cloud Parking",
    description: "REST API para controle de estacionamento de carros.",
    image: "./assets/img/projects/parking.png",
    tags: [
      {
        title: "Maven"
      },
      {
        title: "JDK 11"
      },
      {
        title: "Java"
      },
      {
        title: "Spring Boot"
      }
    ],
    link: "https://github.com/dgleyramos1/cloud-parking"
  },
  {
    class: "desafio",
    title: "Alura Store",
    description: "Aplicação desenvolvida para aprimorar o uso de CSS Grid Layout.",
    image: "./assets/img/projects/alurastore.png",
    tags: [
      {
        title: "Html5"
      },
      {
        title: "Css3"
      },
      {
        title: "Grid Layout"
      }
    ],
    link: "https://dgleyramos1.github.io/alura-store/"
  },
  {
    class: "desafio",
    title: "Github Interface",
    description: "Aplicação desenvolvida para aprimorar o uso de React e também de requisições de apis",
    image: "./assets/img/projects/githubinterface.png",
    tags: [
      {
        title: "React"
      },
      {
        title: "React Tabs"
      },
      {
        title: "Styled Components"
      },
      {
        title: "React Dom"
      }
    ],
    link: "https://github-interface.netlify.app/"
  },
  {
    class: "jogo",
    title: "Mata Mosquito",
    description: "Aplicação desenvolvida para aprimorar a lógica de programação no desenvolvimento de jogos",
    image: "./assets/img/projects/matamosquito.png",
    tags: [
      {
        title: "Html"
      },
      {
        title: "Css"
      },
      {
        title: "Javascript"
      }
    ],
    link: "https://dgleyramos1.github.io/mata-mosquito/"
  },
  {
    class: "landing",
    title: "Finans",
    description: "Aplicação desenvolvida para aprimorar o uso do bootstrap",
    image: "./assets/img/projects/finans.png",
    tags: [
      {
        title: "Html"
      },
      {
        title: "Css"
      },
      {
        title: "bootstrap"
      }
    ],
    link: "https://dgleyramos1.github.io/finans/"
  },
  {
    class: "api",
    title: "Task List",
    description: "REST API para gerenciamento de tarefas",
    image: "./assets/img/projects/task.png",
    tags: [
      {
        title: "Maven"
      },
      {
        title: "JDK 11"
      },
      {
        title: "Java"
      },
      {
        title: "Spring Boot"
      }
    ],
    link: "https://github.com/dgleyramos1/Task-List"
  },
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
  link.textContent = "Demostração";
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