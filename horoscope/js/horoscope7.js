var timerId = setTimeout(function(){
    $('.preloader').fadeOut();
  }, 1000);
  
  // DATA
  var data = [
      {
        questions: ["Какой?",	
                    "Ваша нелюбимая еда",	
                    "Предмет (муж.р.)",	
                    "Овощ или фрукт (муж.р.)",	
                    "Предмет мебели или электроприбор",	
                    "Какой?"
          ],
          story: 'Тщательно взвешивайте все риски - а они всегда есть! В марте на голову может упасть <span class="fill"></span> <span class="fill"></span>, а это неприятно. Так что по улицам весной лучше не ходить.<br>' +
          'Уравновешенность - ваше главное достоинство. В спорах сохраняйте спокойствие и не кидайтесь чем попало, потому что <span class="fill"></span> <span class="fill"></span> и тем более гнилой <span class="fill"></span> - это не аргумент.<br>' +
          'Внимание, <span class="fill"></span> - вот что вам нужно есть три раза в день, это воспитывает волю и увеличивает попу (усидчивость и устойчивость всегда пригодятся).<br>' +
          'В новом году не дёргайте за уши бродячих собак и стражей порядка, и всё будет хорошо.'
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
    $(elems[1]).html(answers[4]);
    $(elems[2]).html(answers[5]);
    $(elems[3]).html(answers[2]);
    $(elems[4]).html(answers[3]);
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