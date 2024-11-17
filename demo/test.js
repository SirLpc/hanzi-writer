var writer;
var isCharVisible;
var isOutlineVisible;

var currentCharacter = 0;
var currentLevel = 0;

var allCharacters = [
  ["口","耳","一","张","笑","脸","眼","鼻","变","绿","黄","红","蓝","紫"
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
  ,"热","夏","清","凉","池","水","戴","帽","圈","乐"],
  ["今","开","石","漂","泡","串","身","绕","坑","踩","纸","非","常","喜","管","时","把","味","道","兴","谁","样","苹","果","牙","刷","金","鱼","羽","自","为","呢","井","底","之","蛙","青","呱","说","话","厉","害","伟","别","外","朋","友","格","找","颗","排","队","单","线","成","功","镜","客","厅","吗","卧","室","没","浴","那","厨","阳","台","马","人","乘","餐","顾","院","观","众","园","学","校","生","读","者","数","字","让","告","诉","买","东","西","带","整","齐","否","病","日","年","夜","饭","桌","美","全","烧","坡","肉","龙","虾","仁","狮","停","流","次","够","做","筝","竹","扎","骨","刀","裁","状","当","尾","巴","系","试","放","慢","得","报","气","北","京","太","安","阴","拉","萨","吹","亚","雾","蒙","春","雪","可","以","养","每","喂","经","给","洗","澡","散","步","直","陪","伴","嗯","然","送","收","捧","枝","杏","叶","藏","瓶","用","和","橙","船","载","落","莓","记","种","睡","觉","土","冒","芽","又","茸","苞","第","越","始","熟","甜","七","点","钟","早","八","午","玩","戏","定","饱","意","思","声","静","动","物","总","员","农","夫","着","牛","破","鸡","蛋","猪","羊","翻","醒","顿","教","踢","足","向","滚","感","疼","力","同","轻","些","如","光","空","阻","挡","滑","倒","容","易","呛","掉","烫","具","乱","扔","摔","跤","栏","杆","楼","夹","重","住","超","级","无","敌","蔬","王","番","茄","冠","军","椒","勇","士","敢","洋","葱","苦","瓜","才","骑","主","被","抓","救","阁","请","求","您","先","借","剑","丽","女","谢","荣","幸"],
  ["秋","因","迷","孤","担","参","秩","序","拥","挤","礼","貌","摇","鸟","溜","折","粘","翅","膀","贴","遇","作","战","转","黑","啊","怕","狼","但","办","脏","怦","追","冲","大","很","久","换","千","二","十","币","九","中","国","信","卡","维","码","现","未","鹅","姐","像","虎","壮","锋","利","哼","河","臭","悄","漱","蜂","蜜","巧","克","糕","酱","加","糖","膏","冻","剂","甘","蔗","提","炼","植","根","各","助","吸","分","营","丛","胡","须","茎","乎","所","埋","泥","或","娲","造","传","世","本","捏","刚","于","更","与","活","藤","洒","万","此","称","祖","弟","绳","完","轮","等","既","嘴","舌","规","则","丫","呵","失","需","新","抚","漠","连","绵","湿","精","灵","跟","川","森","林","息","原","仰","望","亲","吻","扰","决","荷","塘","广","场","孩","正","板","渴","售","货","忙","终","啪","吵","龟","工","阿","丰","部","卖","厂","将","装","市","设","计","医","诊","师","演","准","备","器","复","杂","纳","米","类","探","索","宇","宙","轴","械","臂","代","展","伙","标","识","注","斑","减","速","禁","止","攀","染","辐","射","拍","摄","倚","靠","严","烟","施","触","电","族","庞","油","防","巾","擦","泪","砂","粗","糙","磨","木","写","印","钞","伪","票","奖","励","支","硬","核","桃","碎","胳","膊","抬","肌","缩","举","碗","筷","块","基","德","杠","撬","秘","密","兄","冰","法","位","椅","引","灾","援","哇","泉","少","焰","达","母","节","巨","已","及","透","露","怒","冬","离","违","叫","唤","枯","哭","泣","伸","纯","推","围","墙","刻","尔","满","洲","库","内","布","斯","由","兰","娜","紧","仓","郎","已","坚","强","盼","奋","南","极","豪","稻","惊","蛰","犁","耕","谷","立","插","秧","除","抗","旱","麻","雀","处","暑","抽","穗","渐","寒","脱","粒","粮"],
  ["界","肤","语","言","服","饰","庭","式","相","歌","压","扁","眠","霸","占","半","甩","滴","梦","偷","渡","峰","嗨","哟","蚂","蚁","建","荫","闪","劳","留","份","其","组","照","湖","泊","藻","弯","腰","鸣","蝉","汁","螳","螂","捕","捉","腊","馋","粥","喝","哩","豆","腐","割","宰","蒸","晚","熬","宿","初","街","接","许","实","篮","芒","柔","软","栗","刺","盔","甲","独","豌","而","弹","远","吉","陶","艺","歪","扭","杯","弃","嘣","拨","弦","音","猜","持","琴","指","茧","驴","古","玉","嫦","娥","号","距","近","晰","登","背","陆","派","程","仍","继","续","限","纪","切","蹬","踏","入","必","度","链","菱","充","胎","刹","改","叠","曾","依","巷","屋","往","融","化","淡","补","桶","锅","凝","结","填","盒","拎","昨","尖","扣","氢","聚","释","晒","移","源","煤","炭","站","城","洁","顶","宅","尚","卫","歌","何","煮","汤","浆","卤","素","婆","酵","榨","炒","墨","剩","粕","浪","费","科","技","粉","塑","料","途","纵","横","约","岸","粟","启","文","禹","治","证","英","雄","奔","沉","积","堂","诗","典","篇","念","首","晴","表","情","绪","蹭","挨","训","郁","闷","课","受","扬","掀","卷","阵","委","屈","肚","彩","虹","微","昼","零","居","嘘","划","皮","艇","驾","橇","猎","退","齿","针","肠","制","暖","塔","淇","淋","纽","特","体","纹","血","淌","液","汇","左","胸","替","扩","遍","网","脉","鲜","氧","碳","废","暗","肺","获","捂","贪","命","呜","角","喷","瞧","抵","闭","运","饿","药","唉","腿","胀","袋","保","吞","蘑","菇","毒","该","笔","侧","崖","勒","缰","竖","蓄","势","弓","弩","钩","跃","蹲","鞭","撤","燕","掠","檐","啄","食","捺","舒","永","盛","李","胖","娃","兜","镇","免","件","赤","福","脑","威","鞋","护","锁","银","富","贵","朝","祈","艾","梳","愿","岁","禄","财","奥","匹","升","炬","圣","喊","休","示","争","元","赛","项","目","归","雅","断","统","延","预","秒","俄","罗","伊","撑","跨","朗","挺","斤","铃","隔","递","环"]
];


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
      // var audio = new Audio('BiaoYangNi.mp3');
      // audio.play();

      // delay for 0.5 second and show the next character
      setTimeout(function () {
        nextCharacter();
      }, 500);
    },
  });
}

function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(';').shift();
}

function setCookie(name, value, days) {
  let expires = "";
  if (days) {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    expires = "; expires=" + date.toUTCString();
    console.log(expires);
  }
  document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

function updateCharacterAndQuize() {
  updateCharacter();
  quizWithComplete();

  // save currentLevel and currentCharacter to cookie
  setCookie('currentLevel', currentLevel, null);
  setCookie('currentCharacter', currentCharacter, null);
}

function nextCharacter() {
  let curLevelAllChars = allCharacters[currentLevel];
  currentCharacter = (currentCharacter + 1) % curLevelAllChars.length;
  document.querySelector('.js-char').value = curLevelAllChars[currentCharacter];
  updateCharacterAndQuize();
}

function prevCharacter() {
  let curLevelAllChars = allCharacters[currentLevel];
  currentCharacter = (currentCharacter - 1 + curLevelAllChars.length) % curLevelAllChars.length;
  document.querySelector('.js-char').value = curLevelAllChars[currentCharacter];
  updateCharacterAndQuize();
}

function changeCharacter(index) {
  let curLevelAllChars = allCharacters[currentLevel];
  currentCharacter = index;
  document.querySelector('.js-char').value = curLevelAllChars[currentCharacter];
  updateCharacterAndQuize();
}

function randomCharacter() {
  let curLevelAllChars = allCharacters[currentLevel];
  document.querySelector('.js-char').value = curLevelAllChars[Math.floor(Math.random() * curLevelAllChars.length)];
  updateCharacterAndQuize();
}

function changeLevel(level, characterIndex) {
  currentLevel = level;
  currentCharacter = characterIndex;
  let curLevelAllChars = allCharacters[currentLevel];
  document.querySelector('.js-char').value = curLevelAllChars[currentCharacter];
  updateCharacterAndQuize();

  let htmlStr = "";
  for (let i = 0; i < curLevelAllChars.length; i++) {
    htmlStr += "<button onclick='changeCharacter(" + i + ")'>" + curLevelAllChars[i] + "</button>";
  }

  document.querySelector('#allCharactersCurrentLevel').innerHTML = htmlStr;
}

window.onload = function () {
  // var char = decodeURIComponent(window.location.hash.slice(1));
  // if (char) {
  //   document.querySelector('.js-char').value = char;
  // }
  // updateCharacter();
  // quizWithComplete();

  // load currentLevel and currentCharacter to cookie
  currentLevel = getCookie('currentLevel') || 0;
  currentCharacter = getCookie('currentCharacter') || 0;

  changeLevel(currentLevel, currentCharacter);

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
  document.querySelector('.js-level1').addEventListener('click', function () {
    changeLevel(0, 0);
  })
  document.querySelector('.js-level2').addEventListener('click', function () {
    changeLevel(1, 0);
  })
  document.querySelector('.js-level3').addEventListener('click', function () {
    changeLevel(2, 0);
  })
  document.querySelector('.js-level4').addEventListener('click', function () {
    changeLevel(3, 0);
  })
};
