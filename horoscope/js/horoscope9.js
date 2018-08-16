var timerId = setTimeout(function(){
    $('.preloader').fadeOut();
  }, 1000);
  
  // DATA
  var data = [
      {
        questions: ["Какой?",	
                    "Какой?",	
                    "Какой?",	
                    "Любое число",	
                    "Предмет, вещь (муж.р.)",	
                    "Животное (муж.р.)"
          ],
          story: 'Весной вы захотите срочно избавиться от вредных привычек, потому что у одного вашего знакомого кожа вдруг приобрела <span class="fill"></span> цвет, а голова стала похожа на <span class="fill"></span> <span class="fill"></span>.<br>' +
          'Стрельцы - прирождённые гипнотизёры. В случае конфликта с начальником (или учителем) вы легко сможете внушить оппоненту, что он(а) - раненый <span class="fill"></span> <span class="fill"></span>, и без вас пропадёт.<br>' +
          'К декабрю ваши сбережения достигнут <span class="fill"></span> рублей, и это не предел!<br>' +
          'В новом году правильно выбирайте цели, и всё будет здорово.'
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
    $(elems[1]).html(answers[2]);
    $(elems[2]).html(answers[4]);
    $(elems[3]).html(answers[1]);
    $(elems[4]).html(answers[5]);
    $(elems[5]).html(answers[3]);
  
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