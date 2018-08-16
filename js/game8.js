var timerId = setTimeout(function(){
    $('.preloader').fadeOut();
  }, 1000);
  
  // DATA
  var data = [
      {
        questions: ["Какая? (с бол. буквы)",	
                    "Какой?",	
                    "Какой?",	
                    "Какой?",	
                    "Какой?",	
                    "Какой?",	
                    "Какой?",	
                    "Какой?",	
                    "Любое число",	
                    "Что? (жен. р.)",	
                    "Известный политик или артист",	
                    "Известный политик или артист",	
                    "Что делали? (из неск. слов)",	
                    "Предмет (муж.р.)",	
                    "Предмет (муж.р.)"
          ],
          story: 'Вчера я ходил в цирк. Билет стоил <span class="fill"></span> рублей, а представление называлось <span class="fill"></span> <span class="fill"></span>. Сначала на арену выскочил <span class="fill"></span> <span class="fill"></span>. За ним выполз <span class="fill"></span> <span class="fill"></span>. И они <span class="fill"></span> целый час! Потом вышел <span class="fill"></span> клоун, и в руках у него был <span class="fill"></span> <span class="fill"></span>. Клоун бросил этот <span class="fill"></span> в зрителей, и попал прямо в меня! Я обиделся, достал из кармана <span class="fill"></span> <span class="fill"></span>, кинул в клоуна и попал прямо в его <span class="fill"></span> лоб! Мне понравился этот <span class="fill"></span> цирк!'
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
  
    $(elems[0]).html(answers[8]);
    $(elems[1]).html(answers[0]);
    $(elems[2]).html(answers[9]);
    $(elems[3]).html(answers[1]);
    $(elems[4]).html(answers[10]);
    $(elems[5]).html(answers[2]);
    $(elems[6]).html(answers[11]);
    $(elems[7]).html(answers[12]);
    $(elems[8]).html(answers[3]);
    $(elems[9]).html(answers[4]);
    $(elems[10]).html(answers[13]);
    $(elems[11]).html(answers[13]);
    $(elems[12]).html(answers[5]);
    $(elems[13]).html(answers[14]);
    $(elems[14]).html(answers[6]);
    $(elems[15]).html(answers[7]);
  
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