Vue.component('skill', {
  props: ['title', 'logo', 'level'],
  template: '#skills_template'
})

Vue.component('porfolio', {
  props: ['title', 'image', 'url'],
  template: '#portfolio_template'
})

const vm = new Vue({
  el: '#app',
  data: {
    skills: [
      {
        title: 'HTML5',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/120px-HTML5_logo_and_wordmark.svg.png',
        level: 90
      },
      {
        title: 'CSS',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/CSS.3.svg/1000px-CSS.3.svg.png',
        level: 85
      },
      {
        title: 'SASS',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Sass_Logo_Color.svg/220px-Sass_Logo_Color.svg.png',
        level: 80
      },
      {
        title: 'JavaScript',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/250px-Unofficial_JavaScript_logo_2.svg.png',
        level: 80
      },
      {
        title: 'Vue',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg',
        level: 70
      },
      {
        title: 'React',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/4/47/React.svg',
        level: 70
      },
      {
        title: 'Firebase',
        logo: 'https://seeklogo.com/images/F/firebase-logo-402F407EE0-seeklogo.com.png',
        level: 60
      },
      {
        title: 'Webpack',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Webpack.png/100px-Webpack.png',
        level: 60
      },
      {
        title: 'Python',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/200px-Python-logo-notext.svg.png',
        level: 80
      },
      {
        title: 'Django',
        logo: 'https://cdn-images-1.medium.com/max/1200/1*1OBwwxzJksMv0YDD-XmyBw.png',
        level: 60
      },
      {
        title: 'GO',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/2/23/Go_Logo_Aqua.svg',
        level: 70 },
      {
        title: 'PostgreSQL',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/1200px-Postgresql_elephant.svg.png',
        level: 60
      }
    ],
    projects: [
      { title: 'Proyecto 1', image: 'http://placekitten.com/300/400', url: '#' },
      { title: 'Proyecto 2', image: 'http://placekitten.com/300/400', url: '#' },
      { title: 'Proyecto 3', image: 'http://placekitten.com/300/400', url: '#' },
      { title: 'Proyecto 4', image: 'http://placekitten.com/300/400', url: '#' },
      { title: 'Proyecto 5', image: 'http://placekitten.com/300/400', url: '#' },
      { title: 'Proyecto 6', image: 'http://placekitten.com/300/400', url: '#' }
    ]
  }
})
