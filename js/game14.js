var timerId = setTimeout(function(){
    $('.preloader').fadeOut();
  }, 1000);
  
  // DATA
  var data = [
      {
        questions: ["Какой?",	
                    "Какая?",	
                    "Какой?",	
                    "Какой?",	
                    "Любое число",	
                    "Любое число",	
                    "Животное (муж.р.)",	
                    "Какой?",	
                    "Что делать? (из неск. слов)",	
                    "Что делать? (из неск. слов)",	
                    "Предмет (муж.р.)",	
                    "Кто? (муж.р.)",	
                    "Кто? (жен.р.)",	
                    "Куда?"
          ],
          story: 'Однажды <span class="fill"></span> <span class="fill"></span> и <span class="fill"></span> <span class="fill"></span> решили испечь <span class="fill"></span> колобок. Сказано - сделано. Получился Колобок диаметром <span class="fill"></span> см и весом <span class="fill"></span> кг. Покатился он по тропинке, и тут навстречу ему <span class="fill"></span> <span class="fill"></span>, и этот <span class="fill"></span> без лишних разговоров уже разинул пасть, но тут Колобок бросил в него <span class="fill"></span> <span class="fill"></span>, и <span class="fill"></span> отбросил копыта. Колобок на радостях принялся <span class="fill"></span> и <span class="fill"></span>, пока не устал, а потом покатился дальше, <span class="fill"></span>.'
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
  
    $(elems[0]).html(answers[1]);
    $(elems[1]).html(answers[12]);
    $(elems[2]).html(answers[0]);
    $(elems[3]).html(answers[11]);
    $(elems[4]).html(answers[3]);
    $(elems[5]).html(answers[4]);
    $(elems[6]).html(answers[5]);
    $(elems[7]).html(answers[2]);
    $(elems[8]).html(answers[6]);
    $(elems[9]).html(answers[6]);
    $(elems[10]).html(answers[7]);
    $(elems[11]).html(answers[10]);
    $(elems[12]).html(answers[6]);
    $(elems[13]).html(answers[8]);
    $(elems[14]).html(answers[9]);
    $(elems[15]).html(answers[13]);
  
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