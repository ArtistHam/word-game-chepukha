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
                    "Любое число",	
                    "Любое число",	
                    "Что делать? (из неск. слов)",	
                    "Что делать? (из неск. слов)",	
                    "Что сделала? (из неск. слов)",	
                    "Любое число",	
                    "Что сделал? (из неск. слов)",	
                    "Что сделал? (из неск. слов)"
          ],
          story: 'Однажды Золушка отправилась на <span class="fill"></span> бал и там повстречала принца. Это был у неё <span class="fill"></span>-й знакомый принц. Он выглядел так: <span class="fill"></span> <span class="fill"></span> парень ростом <span class="fill"></span> см и весом <span class="fill"></span> кг. Они мечтали, как вместе будут <span class="fill"></span> и <span class="fill"></span>. Но наступила полночь, и Золушка <span class="fill"></span> и убежала с бала, потеряв туфельку <span class="fill"></span>-го размера. Принц с горя <span class="fill"></span> и <span class="fill"></span>.'
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
    $(elems[2]).html(answers[1]);
    $(elems[3]).html(answers[2]);
    $(elems[4]).html(answers[3]);
    $(elems[5]).html(answers[4]);
    $(elems[6]).html(answers[6]);
    $(elems[7]).html(answers[7]);
    $(elems[8]).html(answers[8]);
    $(elems[9]).html(answers[9]);
    $(elems[10]).html(answers[10]);
    $(elems[11]).html(answers[11]);
  
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