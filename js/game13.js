var timerId = setTimeout(function(){
    $('.preloader').fadeOut();
  }, 1000);
  
  // DATA
  var data = [
      {
        questions: ["Куда?",	
                    "Какой?",	
                    "Какая?",	
                    "Какой?",	
                    "Кто? (жен.р., животное или чел.)",	
                    "Кто? (муж.р., животное или чел.)",	
                    "Где?",	
                    "Животные (мн.ч.)",	
                    "Куда?",	
                    "Кто? (муж.р., животное или чел.)",	
                    "Какие?"
          ],
          story: 'Сегодня, когда я шел <span class="fill"></span>, на меня внезапно с дерева свалился <span class="fill"></span> <span class="fill"></span>. Я закричал как <span class="fill"></span> <span class="fill"></span> и потерял сознание. Очнулся я <span class="fill"></span> и сказал: Отвезите меня <span class="fill"></span>, мне очень надо. Но эти <span class="fill"></span> <span class="fill"></span> почему-то отвезли меня <span class="fill"></span>, и оттуда я шёл пешком, пока меня не подвёз <span class="fill"></span> <span class="fill"></span>. Вот почему я опоздал сегодня <span class="fill"></span>.'
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
    $(elems[1]).html(answers[1]);
    $(elems[2]).html(answers[5]);
    $(elems[3]).html(answers[2]);
    $(elems[4]).html(answers[4]);
    $(elems[5]).html(answers[6]);
    $(elems[6]).html(answers[0]);
    $(elems[7]).html(answers[10]);
    $(elems[8]).html(answers[7]);
    $(elems[9]).html(answers[8]);
    $(elems[10]).html(answers[3]);
    $(elems[11]).html(answers[9]);
    $(elems[12]).html(answers[0]);
  
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