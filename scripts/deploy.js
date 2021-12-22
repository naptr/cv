const ghpages = require('gh-pages');

const src = 'docs';

ghpages.publish(src, {
  repo: 'https://github.com/ziunadev/cv.git',
  remote: 'github-page',
  message: 'deploy',
  user: {
    name: 'Putra Krishna',
    email: 'krishna.putra332@gmail.com'
  }
}, err => console.log(err)) 