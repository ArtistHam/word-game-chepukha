var timerId = setTimeout(function(){
    $('.preloader').fadeOut();
  }, 1000);
  
  // DATA
  var data = [
      {
        questions: ["Какая?",	
                    "Какая?",	
                    "Какой?",	
                    "Какой?",	
                    "Какая? (с бол. буквы)",	
                    "Какая?",	
                    "Какая?",	
                    "Какой?",	
                    "Любое число",	
                    "Известная певица",	
                    "Известный певец или артист",	
                    "Что? или Кто? (жен. р.)"
          ],
          story: 'Посадил дед репку. Выросла репка не простая, а <span class="fill"></span>. Весом <span class="fill"></span> кг. Дед ее тащит-тащит, а вытянуть не может. Дед крикнул: Кто здесь есть? Помогите! - Я здесь, <span class="fill"></span>! - отозвалась известная <span class="fill"></span> певица. Ухватилась <span class="fill"></span> за деда, тот за репку, тянут-потянут, вытянуть не могут. Позвонила <span class="fill"></span> по мобильнику, приехал <span class="fill"></span>, весь такой <span class="fill"></span> и слегка <span class="fill"></span>. Он за певицу, та за деда, тянут-потянут - ну, понятно. Свистнул <span class="fill"></span> - из машины прибежала его собака по кличке <span class="fill"></span> <span class="fill"></span>. Ухватилась за хозяина, тот - за певицу... Опять ничего не вышло. Гавкнула собачка - прибежала <span class="fill"></span> кошка. Не помогло. Позвала кошка мышку. Прибежала <span class="fill"></span> мышка, но как только <span class="fill"></span> ее увидела, завизжала и убежала. Позвонил тогда <span class="fill"></span> в Службу спасения. Приехал <span class="fill"></span> экскаватор и выкопал репку, а заодно и авиационную бомбу. В общем, репка никому не досталась...'
      }
  ];
  
  
  // Вопросы для пользователя.
  var prompts = data[0].questions;
  
  var answers=[];
  // Keep track of current prompt we're on
  var currentPrompt = 0;
  
  
  // A function that will call the next prompt
  var nextPrompt = function() {
    //if there's no answer in the form
    if (currentPrompt != 0){
      answers.push($('input').val());
    }
      // if there is a next prompt
      if (currentPrompt < prompts.length) {
          // put first prompt in all html elements with class 
          $('.prompt').html(currentPrompt + 1 + ". " + prompts[currentPrompt] +'<br><input type="text" autofocus>');
          // move the next prompt into variable currentPrompt 
          currentPrompt = currentPrompt + 1;
      }
      //or else if we're at the end of the array
      else {
          // put a new message into the html.
          showFinal();
      }
  };
  
  //puts user answers into HTML
  var showFinal = function() {
    $('.preloader').show();
    $('.prompt').html(data[0].story);
  
    var elems = $(".fill");
  
    $(elems[0]).html(answers[0]);
    $(elems[1]).html(answers[8]);
    $(elems[2]).html(answers[9]);
    $(elems[3]).html(answers[1]);
    $(elems[4]).html(answers[9]);
    $(elems[5]).html(answers[9]);
    $(elems[6]).html(answers[10]);
    $(elems[7]).html(answers[2]);
    $(elems[8]).html(answers[3]);
    $(elems[9]).html(answers[10]);
    $(elems[10]).html(answers[4]);
    $(elems[11]).html(answers[11]);
    $(elems[12]).html(answers[5]);
    $(elems[13]).html(answers[6]);
    $(elems[14]).html(answers[9]);
    $(elems[15]).html(answers[10]);
    $(elems[16]).html(answers[7]);
  
    $('button').hide();
    $('.prompt').css('margin', "100px");
    $('.prompt').css('margin-top', "20px");
    $('a').css('display', "block");
    $('.preloader').fadeOut();
  };
  // run nextPrompt function when button is clicked
  $('button').click(function() {
      nextPrompt();
  });
  
  // Show the first prompt as soon as js loads
  nextPrompt();