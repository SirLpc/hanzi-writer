var writer;
var isCharVisible;
var isOutlineVisible;

var allCharacters = ["我","口","耳","一","张","笑","脸","眼","鼻","变","绿","黄","红","蓝","紫"
  ,"五","六","比","我","你","高","快","大","长","亮","就","是","图","书","馆","门","架","沙","发"
  ,"故","事","爱","跳","舞","兔","只","两","三","四","在","子","家","影","短","不","见","了","去"
  ,"哪","儿","脚","下","回","来","小","猫","钓","老","鼠","看","听","闻","咬","跑","好","啦","的"
  ,"房","画","棵","树","几","间","剪","平","铺","涂","候","季","问","打","赶","呼","花","路","闹"
  ,"熊","雁","知","爸","妈","到","欢","她","麦","他","它","迎","这","量","多","有","宝","从","想"
  ,"后","么","前","手","天","头","怎","要","过","山","走","爬","上","座","菜","地","能","桥","雨"
  ,"片","草","朵","乌","云","风","飞","伞","毛","虫","躲","对","野","坐","车","火","旅","球","行"
  ,"月","机","箭","喔","铁","公","交","海","边","白","细","们","星","贝","壳","螃","蟹","明","再"
  ,"吧","面","饺","团","香","圆","百","包","饼","吃","还","馒","什","条","最","会","摸","招","帮"
  ,"穿","干","浇","拿","难","扫","伤","勺","双","心","衣","拔","萝","卜","个","爷","奶","狗","都"
  ,"真","里","也","出","神","奇","形","狐","狸","哈","方","象","进","梯","哎","呀","起","游","泳"
  ,"热","夏","清","凉","池","水","戴","帽","圈","乐"];
var currentCharacter = 0;

function printStrokePoints(data) {
  var pointStrs = data.drawnPath.points.map((point) => `{x: ${point.x}, y: ${point.y}}`);
  console.log(`[${pointStrs.join(', ')}]`);
}

function updateCharacter() {
  document.querySelector('#target').innerHTML = '';

  var character = document.querySelector('.js-char').value;
  window.location.hash = character;
  writer = HanziWriter.create('target', character, {
    width: 400,
    height: 400,
    renderer: 'svg',
    radicalColor: '#166E16',
    onCorrectStroke: printStrokePoints,
    onMistake: printStrokePoints,
    showCharacter: false,
  });
  isCharVisible = true;
  isOutlineVisible = true;
  window.writer = writer;
}

function quizWithComplete() {
  writer.quiz({
    showOutline: true,
    onComplete: function () {
      // do something when quiz is complete
      console.log('Quiz complete!');
      // play a congrates audio
      var audio = new Audio('BiaoYangNi.mp3');
      audio.play();
    },
  });
}

function updateCharacterAndQuize() {
  updateCharacter();
  quizWithComplete();
}

function nextCharacter() {
  currentCharacter = (currentCharacter + 1) % allCharacters.length;
  document.querySelector('.js-char').value = allCharacters[currentCharacter];
  updateCharacterAndQuize();
}

function prevCharacter() {
  currentCharacter = (currentCharacter - 1 + allCharacters.length) % allCharacters.length;
  document.querySelector('.js-char').value = allCharacters[currentCharacter];
  updateCharacterAndQuize();
}

function randomCharacter() {
  document.querySelector('.js-char').value = allCharacters[Math.floor(Math.random() * allCharacters.length)];
  updateCharacterAndQuize();
}

window.onload = function () {
  var char = decodeURIComponent(window.location.hash.slice(1));
  if (char) {
    document.querySelector('.js-char').value = char;
  }

  updateCharacter();
  quizWithComplete();

  document.querySelector('.js-char-form').addEventListener('submit', function (evt) {
    evt.preventDefault();
    updateCharacter();
  });

  document.querySelector('.js-toggle').addEventListener('click', function () {
    isCharVisible ? writer.hideCharacter() : writer.showCharacter();
    isCharVisible = !isCharVisible;
  });
  document.querySelector('.js-toggle-hint').addEventListener('click', function () {
    isOutlineVisible ? writer.hideOutline() : writer.showOutline();
    isOutlineVisible = !isOutlineVisible;
  });
  document.querySelector('.js-animate').addEventListener('click', function () {
    writer.animateCharacter();
  });
  document.querySelector('.js-quiz').addEventListener('click', quizWithComplete);
  document.querySelector('.js-next').addEventListener('click', nextCharacter);
  document.querySelector('.js-prev').addEventListener('click', prevCharacter);
  document.querySelector('.js-random').addEventListener('click', randomCharacter);
};
