var timerId = setTimeout(function(){
    $('.preloader').fadeOut();
  }, 1000);
  
  // DATA
  var data = [
      {
        questions: ["Какая?",	
                    "Что делает? (из неск. слов)",	
                    "Какие?",	
                    "Какие?",	
                    "Какой?",	
                    "Животное (жен.р.)",	
                    "Известный артист или политик",	
                    "Съедобные предметы (мн.ч.)",	
                    "Съедобные предметы (мн.ч.)",	
                    "Любое число",	
                    "Возглас после удара молотком по пальцу",	
                    "Какая?"
          ],
          story: 'Катится Колобок по лесу, а навстречу ему <span class="fill"></span> Красная Шапка. Идёт себе и <span class="fill"></span>. А в корзинке у Шапки были: <span class="fill"></span> <span class="fill"></span> и <span class="fill"></span> <span class="fill"></span>. И подумала Красная Шапка: "Положу-ка я и Колобка в корзинку!" Тут из-за кустов выскочил <span class="fill"></span> <span class="fill"></span> и закричал нечеловеческим голосом: "Стой, <span class="fill"></span> <span class="fill"></span>"! Но в него тут же полетели <span class="fill"></span> <span class="fill"></span>! А <span class="fill"></span> <span class="fill"></span> Красная Шапка приберегла для бабушки. Этот <span class="fill"></span> <span class="fill"></span> испугался и убежал, а Колобок под шумок тоже смылся. И катался по лесу пока не зачерствел, и Лиса, когда пыталась его съесть, сломала <span class="fill"></span> зубов и сказала "<span class="fill"></span>!!!"'
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
    $(elems[2]).html(answers[2]);
    $(elems[3]).html(answers[7]);
    $(elems[4]).html(answers[3]);
    $(elems[5]).html(answers[8]);
    $(elems[6]).html(answers[4]);
    $(elems[7]).html(answers[6]);
    $(elems[8]).html(answers[11]);
    $(elems[9]).html(answers[5]);
    $(elems[10]).html(answers[2]);
    $(elems[11]).html(answers[7]);
    $(elems[12]).html(answers[6]);
    $(elems[13]).html(answers[3]);
    $(elems[14]).html(answers[8]);
    $(elems[15]).html(answers[4]);
    $(elems[16]).html(answers[6]);
    $(elems[17]).html(answers[9]);
    $(elems[18]).html(answers[10]);
  
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