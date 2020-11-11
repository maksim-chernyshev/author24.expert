var critical = require('critical');
 
critical.generate({
  inline: false,
  base: 'initial/',
  src: 'index.html',
  dest: 'final/homepage.html',
  width: 1366,
  height: 768
});