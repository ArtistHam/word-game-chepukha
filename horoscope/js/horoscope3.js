var timerId = setTimeout(function(){
    $('.preloader').fadeOut();
  }, 1000);
  
  // DATA
  var data = [
      {
        questions: ["Популярный персонаж книги или фильма",	
                    "Какие?",	
                    "Вид спорта",	
                    "Любое хобби",	
                    "Вредная привычка",	
                    "Сказочный персонаж"
          ],
          story: 'Весной вам вдруг покажется, что у вас раздвоение личности: что вы <span class="fill"></span> и в то же время <span class="fill"></span>. Временами они будут ругаться и этим очень утомлять вас. К счастью, вам поможет средство от глистов "Прощай навеки".<br>' + 
          'Осенью у вас могут появиться вредные привычки: <span class="fill"></span> ночью на крыше, <span class="fill"></span> на Красной площади, <span class="fill"></span> с криками "Класс!" на уроке (или на работе).<br>' +
          'В декабре президент вам вручат золотую медаль "Лучшие <span class="fill"></span> Близнецы страны".<br>' +
          'В новом году почаще советуйтесь со своим внутренним голосом, не дразните бешеных собак, и всё будет отлично. '
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
    $(elems[1]).html(answers[5]);
    $(elems[2]).html(answers[2]);
    $(elems[3]).html(answers[3]);
    $(elems[4]).html(answers[4]);
    $(elems[5]).html(answers[1]);
  
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