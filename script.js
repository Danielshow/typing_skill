window.addEventListener('load', start)
const arrayList = ['clip','hover','representative','explode','awful','acrid',
'unpack','laborer','fuzzy','release','announce','heal','disastrous','uninterested','alert','name','macho','tranquil',
'lake','caption','finger','vague','bizarre','ashamed','nail','open','weary','obscene','toes','repulsive','songs','yam','internal','request','smile','drop','bow','thin','surround','earthquake',
'cow','flagrant','accessible','crack','early','trick','knit',
  'hurry','top','challenge','plough','compare','object','juggle',
  'awake','blood','puncture','hang','faint','yarn','hook','fence',
  'zealous','perform','tall','envious','tooth','coherent','boundless',
  'pizzas','seashore','futuristic','invent','soggy','dazzling',
  'wary','drown','door','island','toe','grumpy','tickle','haircut',
  'naive','drawer','test','board','coordinated','claim','retire',
  'tank','inject','wealth','evasive','spurious','memory','abnormal',
  'plant','marry','fragile','collect','faint','heat','company','minute',
  'ruddy','walk','weigh','bore','delight','abashed','scissors','curl',
  'tense','shiny','godly','labored','average','shop','dirt','position',
  'psychotic','mate','low','head','program','thinkable','vessel',
  'play','push','hands','twist','wet','afraid','haircut','rustic',
  'glossy','steam','head','scale','rule','cycle','unarmed','kneel',
  'part','smell','spade','squealing','town','cherry','brass','worthless',
  'puffy','act','boot','chubby','women','encouraging','pass',
  'kick','dysfunctional','club','handsome','unhealthy','impartial',
  'touch','even','cows','piquant','charge','afterthought','check',
  'mind','wistful','raise','apologise','snail','society','milk',
  'sink','zoohaunt',' sleet','cool','picayune','bed','pastoral','long',
  'classy','man','kettle','unequaled','acoustic','soak','sisters',
  'wrench','confuse','jazzy','conscious','mailbox','enchanted','spell',
  'hysterical','clear','sidewalk','pull','cushion','cow','hop',
  'wacky','popcorn','smiling','tail','income','mug','quiver','interrupt',
  'tangible','linen','argue','knotty','courageous','sister','magic',
  'hair','whistle','optimal','scary','relax','abundant','increase',
  'red','bad','reply','coil','farflung','pocket','cough','saw','late','left',
  'cave','steady','tour','obsequious','tranquil','pot','husky',
  'agonizing','regret','drink','knot','team','damage','unite','ski','dock',
  'rule','abnormal','help','juice','desert','soda','soup','ablaze','outrageous','sign','drain','book','steel','imported',
  'camera','rigid','three','royal','succinct','slippery',
  'cactus','produce','touch','befitting','square','possible','alluring','remarkable','spy','lip','six','bulb','trousers',
  'lock','torpid','appliance','holistic','separate','market','fold','misty','tax','tidy']

//DOM
text_input = document.getElementById('text_input');
main_word = document.getElementById('main_word');
timer = document.getElementById('time');
scoreAdd = document.getElementById('score');
message = document.getElementById('message');
easy= document.getElementById('easy');
medium= document.getElementById('medium');
hard= document.getElementById('hard');
lev = document.getElementById('levels');
newlev = document.getElementById('newlevels')


easy.addEventListener('click', easyClick);
hard.addEventListener('click', hardClick);
medium.addEventListener('click', mediumClick);




levels ={
  easy: 8,
  medium: 5,
  hard:3
}
let score = 0;
let difficulty = 'easy';
let time=levels.easy;
let isPlaying = true;

lev.innerText = levels.easy;
newlev.innerText = levels.easy;

function easyClick(e){
  difficulty = "easy";
  lev.innerText = levels.easy;
  newlev.innerText = levels.easy;
}

function hardClick(e){
  difficulty = "hard";
  lev.innerText = levels.hard;
  newlev.innerText = levels.hard;
}

function mediumClick(e){
  difficulty="medium";
  lev.innerText = levels.medium;
  newlev.innerText = levels.medium;
}
function start(){
  //From the list
  displayWords(arrayList);

  text_input.addEventListener('input', matchWords);
  //Decrement timeout
  setInterval(countDown, 1000);
  //Check game status
  setInterval(checkStatus, 50);
}

function matchWords(){
  if (isMatch()){
    if (difficulty == 'easy'){
      time = levels.easy + 1;
    }else if (difficulty == "medium"){
      time = levels.medium + 1;
    }else if (difficulty == "hard"){
      time = levels.hard + 1;
    }
    score ++;
    displayWords(arrayList);
    text_input.value = "";
    isPlaying=true;
  }
  if (score != -1){
    scoreAdd.innerText = score;
  }
}

function isMatch(){
  if (text_input.value.toLowerCase() == main_word.innerText.toLowerCase()){
    message.innerText = "Correct!!!!!!!!!!!"
    return true;
  }else{
    message.innerText=""
    return false;
  }
}

function displayWords(arrayList){
  let randomInt = Math.floor(Math.random() * arrayList.length)
  main_word.innerText = arrayList[randomInt]
}

function countDown(){
  if (time > 0){
    time--
  }else if(time===0){
    isPlaying = false;
  }
  timer.innerText = time;
}

function checkStatus(){
  if (!isPlaying && time === 0){
    message.innerText = "Game Over!!!!!!!!!!!";
    score = -1;
  }
}
