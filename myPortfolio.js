let mybutton = document.getElementById("myBtn");
window.onscroll = function () { scrollFunction() };

document.addEventListener("DOMContentLoaded", function () {
  skillsBtn();
});

function scrollFunction() {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// const changeThemeColor = () => {
//   if (!document.getElementById("modeChanger").classList.contains("darkMode")) {
//     document.getElementById("modeChanger").classList.add("darkMode");
//     document.documentElement.style.setProperty("--themeColor", "black");

//     document.getElementById("descriptionDiv").classList.remove("bg-black");
//     document.getElementById("descriptionDiv").classList.add("lighWhite");

//   } else {
//     document.getElementById("modeChanger").classList.remove("darkMode");
//     document.documentElement.style.setProperty("--themeColor", "rgb(209 208 208 / 20%)");

//     document.getElementById("descriptionDiv").classList.add("bg-black");
//     document.getElementById("descriptionDiv").classList.remove("lighWhite");

//   }
// }

const technicalSkills = [
  {
    name: 'HTML',
    img: './images/html.webp'
  },
  {
    name: 'CSS',
    img: './images/css.webp'
  },
  {
    name: 'Bootstrap',
    img: './images/bootstrap.webp'
  },
  {
    name: 'Javascript',
    img: './images/js.webp'
  },
  {
    name: 'Jquery',
    img: './images/jquery.webp'
  },
  {
    name: 'React',
    img: './images/react.webp'
  },
  {
    name: 'Tailwind',
    img: './images/tailwind.webp'
  },
  {
    name: 'Github',
    img: './images/github.webp'
  }
]

const ide = [
  {
    name: 'Postman',
    img: './images/postman.png'
  },
  {
    name: 'docker',
    img: './images/docker.webp'
  },
  {
    name: 'VS code',
    img: './images/Vs-code.png'
  },
  {
    name: 'intellij',
    img: './images/intellij.png'
  },
  {
    name: 'pgAdmin',
    img: './images/pgAdmin.png'
  }
]

const portfolio = [
  {
    name: 'HTML',
    img: './images/html.webp'
  },
  {
    name: 'CSS',
    img: './images/css.webp'
  },
  {
    name: 'Javascript',
    img: './images/js.webp'
  },
  {
    name: 'Tailwind',
    img: './images/tailwind.webp'
  },
  {
    name: 'Github',
    img: './images/github.webp'
  }
]

const connectBtn = [
  {
    name: 'akhiljawali18@gmail.com',
    img: './images/mail.webp'
  },
  {
    name: 'LinkedIn',
    img: './images/linkedIn.webp'
  },
  {
    name: '+91 7338125215',
    img: './images/whatsApp.webp'
  },
]

const websiteSection = [
  {
    name: 'Parent Maestro',
    projectDesign: './images/projectsDesignsImg-1.svg',
    projectLogo: './images/projectLogo-1.svg',
    link: 'https://parentmaestro.com',
    bgColor: 'webOne',
    techo: [
      {
        name: 'HTML',
        img: './images/html.webp'
      },
      {
        name: 'CSS',
        img: './images/css.webp'
      },
      {
        name: 'Javascript',
        img: './images/js.webp'
      },
      {
        name: 'Bootstrap',
        img: './images/bootstrap.webp'
      },
      {
        name: 'Github',
        img: './images/github.webp'
      }
    ]
  },
  {
    name: 'Ditos',
    projectDesign: './images/projectsDesignsImg-5.svg',
    projectLogo: './images/projectLogo-5.svg',
    link: '',
    bgColor: 'webTwo',
    techo: [
      {
        name: 'HTML',
        img: './images/html.webp'
      },
      {
        name: 'CSS',
        img: './images/css.webp'
      },
      {
        name: 'Javascript',
        img: './images/js.webp'
      },
      {
        name: 'Jquery',
        img: './images/jquery.webp'
      },
      {
        name: 'Tailwind',
        img: './images/tailwind.webp'
      },
      {
        name: 'Github',
        img: './images/github.webp'
      }
    ]
  },
  {
    name: 'Remo Homes',
    projectDesign: './images/projectsDesignsImg-7.svg',
    projectLogo: './images/projectLogo-7.svg',
    link: 'https://remo.homes/',
    bgColor: 'webThree',
    techo: [
      {
        name: 'HTML',
        img: './images/html.webp'
      },
      {
        name: 'CSS',
        img: './images/css.webp'
      },
      {
        name: 'Javascript',
        img: './images/js.webp'
      },
      {
        name: 'Bootstrap',
        img: './images/bootstrap.webp'
      },
      {
        name: 'Github',
        img: './images/github.webp'
      }
    ]
  },

]

var skillsBtn = () => {
  let html = '';
  technicalSkills.forEach(element => {
    html += `<div class='pl-3 pr-5 py-1 border rounded-full w-auto text-lg font-medium flex items-center gap-3 shadow-md bg-white'>
    <img src='${element.img}' alt='s' class='md:w-6 w-5' />
    <span class='capitalize md:text-base text-sm'>${element.name}</span>
  </div>`
  });
  document.getElementById("technologies").innerHTML = html;

  let html2 = '';
  ide.forEach(element => {
    html2 += `<div class='pl-3 pr-5 py-1 border rounded-full w-auto text-lg font-medium flex items-center gap-3 shadow-md bg-white'>
    <img src='${element.img}' alt='s' class='md:w-6 w-5' />
    <span class='capitalize md:text-base text-sm'>${element.name}</span>
  </div>`
  });
  document.getElementById("ide").innerHTML = html2;

  let html3 = '';
  portfolio.forEach(element => {
    html3 += `<div class='pl-3 pr-5 py-1 border rounded-full w-auto text-lg font-medium flex items-center gap-3 shadow-md bg-white'>
    <img src='${element.img}' alt='s' class='md:w-6 w-5' />
    <span class='capitalize md:text-base text-sm'>${element.name}</span>
  </div>`
  });
  document.getElementById("portfolio").innerHTML = html3;

  let html4 = '';
  connectBtn.forEach(element => {
    html4 += `<div class='pl-3 pr-5 py-1 border rounded-full w-auto text-lg font-medium flex items-center gap-3 shadow-md bg-white'>
    <img src='${element.img}' alt='s' class='md:w-6 w-5' />
    <span class='md:text-base text-sm'>${element.name}</span>
  </div>`
  });
  document.getElementById("connectBtn").innerHTML = html4;

  let projectsHtml = '';
  for (let i = 0; i < websiteSection.length; i++) {
    projectsHtml += ` <div class="grid md:grid-cols-2 grid-col flex items-strat p-3 rounded-xl ${websiteSection[i].bgColor}">
    <div class="flex items-center justify-center">
        <img src="${websiteSection[i].projectDesign}" class="px-5 w-full">
    </div>
    <div class="">
        <div class="flex flex-col items-start py-md-0 pt-5 pb-3">
            <div class="flex items-center gap-5 pb-3">
                <p class="${websiteSection[i].name == 'Remo Homes' ? 'text-black' : 'text-white'} md:text-xl text-base font-bold">${websiteSection[i].name}</p>
                <img src="${websiteSection[i].projectLogo}" class="md:w-36 w-20">
            </div>
            <div class="flex flex-col items-start gap-2 pb-3">
                <p class="${websiteSection[i].name == 'Remo Homes' ? 'text-black' : 'text-white'} font-medium ">Worked on :</p>
                <div class="" >
                  ${websiteSection[i].name != 'Ditos' ? '<span class="capitalize py-1 px-3 md:text-base text-sm border rounded-full w-auto font-medium shadow-md bg-white">Website</span>' : '<span class="capitalize py-1 px-3 md:text-base text-sm border rounded-full w-auto font-medium shadow-md bg-white">Admin Page</span>'}
                </div>
            </div>
            <div class="flex flex-col items-start gap-2 pb-3">
                <p class="${websiteSection[i].name == 'Remo Homes' ? 'text-black' : 'text-white'} font-medium text-sm">Technologies i have worked on for this project
                    :</p>
                <div class="flex flex-wrap items-center gap-3">`
    for (let j = 0; j < websiteSection[i].techo.length; j++) {
      projectsHtml += ` <div class='pl-3 pr-5 py-1 border rounded-full w-auto text-lg font-medium flex items-center gap-3 shadow-md bg-white'>
        <img src='${ websiteSection[i].techo[j].img}' alt='s' class='md:w-6 w-5' />
        <span class='capitalize md:text-base text-sm'>${ websiteSection[i].techo[j].name}</span>
        </div>`
    }
    projectsHtml += `</div>
            </div >
  <a href="${websiteSection[i].link}" target="_blank" class="">
    <div
      class='pl-3 pr-5 py-2 shadow-md rounded-full w-auto text-lg font-medium flex items-center gap-3 shadow-md ${websiteSection[i].name == 'Remo Homes' ? 'bg-black' : 'lighWhite'}'>
    <i class="fa-solid fa-link text-white"></i>
    <span class='md:text-base text-sm text-white'>Go to ${websiteSection[i].name}</span>
  </div>
            </a >
        </div >
    </div >
</div > `
  }
  document.getElementById("allWebsites").innerHTML = projectsHtml;

}


