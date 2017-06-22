const ghpages = require('gh-pages');
const path = require('path');

ghpages.publish('build', err => {
  if (err) console.log(err);
})