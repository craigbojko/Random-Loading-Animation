function runProgress ($container, options) {
  var co = options.cutout
  var cl = options._class
  delete options.cutout
  delete options._class

  doughnutWidget.options = {
    container: $container,
    width: 200,
    height: 200,
    class: cl,
    cutout: co
  }
  doughnutWidget.render(options);
}

setTimeout(function() {
  var renders = [{
    cutout: Math.floor(Math.random(50, 100) * 100),
    _class: 'spin spin1',
    Complete_1: {
      val: Math.floor(Math.random(0, 100) * 100),
      color: '#000',
      link: 'http://www.google.com',
      click: function(e) {
        console.log('hi');
      }
    }
  },{
    cutout: Math.floor(Math.random(50, 100) * 100),
    _class: 'spin spin2',
    Complete_2: {
      val: Math.floor(Math.random(0, 100) * 100),
      color: '#000',
      link: 'http://www.google.com',
      click: function(e) {
        console.log('hi');
      }
    }
  },{
    cutout: Math.floor(Math.random(50, 100) * 100),
    _class: 'spin spin3',
    Complete_3: {
      val: Math.floor(Math.random(0, 100) * 100),
      color: '#000',
      link: 'http://www.google.com',
      click: function(e) {
        console.log('hi');
      }
    }
  },{
    cutout: Math.floor(Math.random(50, 100) * 100),
    _class: 'spin spin4',
    Complete_4: {
      val: Math.floor(Math.random(0, 100) * 100),
      color: '#000',
      link: 'http://www.google.com',
      click: function(e) {
        console.log('hi');
      }
    }
  },{
    cutout: Math.floor(Math.random(0, 10) * 100),
    _class: 'spin spin5',
    Complete_5: {
      val: Math.floor(Math.random(0, 100) * 100),
      color: '#000',
      link: 'http://www.google.com',
      click: function(e) {
        console.log('hi');
      }
    }
  }]

  var css = [
    '.spin1 { animation: spin_1 30s cubic-bezier(1.000, -0.530, 0.405, 1.425) infinite; transition-delay: 0s; }',
    '.spin2 { animation: spin_2 30s cubic-bezier(1.000, -0.530, 0.405, 1.425) infinite; transition-delay: 1.2s; }',
    '.spin3 { animation: spin_3 30s cubic-bezier(1.000, -0.530, 0.405, 1.425) infinite; transition-delay: 2.4s; }',
    '.spin4 { animation: spin_4 30s cubic-bezier(1.000, -0.530, 0.405, 1.425) infinite; transition-delay: 3.5s; }',
    '.spin5 { animation: spin_5 30s cubic-bezier(1.000, -0.530, 0.405, 1.425) infinite; transition-delay: 4.7s; }',
    '@keyframes spin_1 {',
      'from { transform: rotate(0deg); }',
      'to { transform: rotate(' + (Math.random(100, 1000000) * 10000) + 'deg); }',
    '}',
    '@-webkit-keyframes spin_1 {',
      'from { transform: rotate(0deg); }',
      'to { -webkit-transform: rotate(' + (Math.random(100, 1000000) * 10000) + 'deg); }',
    '}',
    '@keyframes spin_2 {',
      'from { transform: rotate(0deg); }',
      'to { transform: rotate(' + (Math.random(100, 1000000) * 10000) + 'deg); }',
    '}',
    '@-webkit-keyframes spin_2 {',
      'from { transform: rotate(0deg); }',
      'to { -webkit-transform: rotate(' + (Math.random(100, 1000000) * 10000) + 'deg); }',
    '}',
    '@keyframes spin_3 {',
      'from { transform: rotate(0deg); }',
      'to { transform: rotate(' + (Math.random(100, 1000000) * 10000) + 'deg); }',
    '}',
    '@-webkit-keyframes spin_3 {',
      'from { transform: rotate(0deg); }',
      'to { -webkit-transform: rotate(' + (Math.random(100, 1000000) * 10000) + 'deg); }',
    '}',
    '@keyframes spin_4 {',
      'from { transform: rotate(0deg); }',
      'to { transform: rotate(-' + (Math.random(100, 1000000) * 10000) + 'deg); }',
    '}',
    '@-webkit-keyframes spin_4 {',
      'from { transform: rotate(0deg); }',
      'to { -webkit-transform: rotate(' + (Math.random(100, 1000000) * 10000) + 'deg); }',
    '}',
    '@keyframes spin_5 {',
      'from { transform: rotate(0deg); }',
      'to { transform: rotate(-' + (Math.random(100, 1000000) * 10000) + 'deg); }',
    '}',
    '@-webkit-keyframes spin_5 {',
      'from { transform: rotate(0deg); }',
      'to { -webkit-transform: rotate(' + (Math.random(100, 1000000) * 10000) + 'deg); }',
    '}'
  ].join('')

  for (var i = 0; i < 5; i++) {
    var $cont = $('<div class="cont cont-' + i + '"><div class="progress" style="transform: rotate(' + (Math.random(0, 100) * 100) + 'deg);"></div></div>')
    $cont.appendTo($('#container'))
    runProgress($cont.find('.progress'), renders[i])
  }

  var s = document.createElement('style')
  s.type = 'text/css'
  s.innerText = css
  document.getElementsByTagName('head')[0].appendChild(s)
}, 500)