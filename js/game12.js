var timerId = setTimeout(function(){
    $('.preloader').fadeOut();
  }, 1000);
  
  // DATA
  var data = [
      {
        questions: ["Какой?",	
                    "Какой?",	
                    "Какой?",	
                    "Какой?",	
                    "Какая?",	
                    "Какой?",	
                    "Какая?",	
                    "Какой?",	
                    "Какой?",	
                    "Как?",	
                    "Что? или Кто?",	
                    "Любое число",	
                    "Что делать? (из неск. слов)",	
                    "Певец или политик (м.р.)",	
                    "Сказочный персонаж (м.р.)",	
                    "Животное или человек (жен.р.)",	
                    "Куда?",	
                    "Животное (жен.р.)",	
                    "Возглас досады"
          ],
          story: 'Вчера ходил в театр на модный спектакль "<span class="fill"></span> <span class="fill"></span>". Сначала на сцену выскочили <span class="fill"></span> человек в пижамах и начали <span class="fill"></span>. Потом прибежал <span class="fill"></span> <span class="fill"></span> <span class="fill"></span> и всех забросал удобрениями. Затем вышла главная героиня. Цвет кожи у неё был <span class="fill"></span>, в руках она держала вилку, а на вилку была надета <span class="fill"></span> <span class="fill"></span>. Она откусила кусочек и сказала: "<span class="fill"></span>! Где же, наконец, <span class="fill"></span> <span class="fill"></span>?" Потом на сцену вышел этот самый <span class="fill"></span> <span class="fill"></span> и выстрелил вверх из ружья. Сверху упала <span class="fill"></span> <span class="fill"></span>. Тут выбежал <span class="fill"></span> пожарный с брандспойтом и <span class="fill"></span> стал поливать зрителей водой. Я весь промок и пошёл <span class="fill"></span>. Больше я в этот <span class="fill"></span> театр не пойду!'
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
    $(elems[1]).html(answers[10]);
    $(elems[2]).html(answers[11]);
    $(elems[3]).html(answers[12]);
    $(elems[4]).html(answers[1]);
    $(elems[5]).html(answers[2]);
    $(elems[6]).html(answers[13]);
    $(elems[7]).html(answers[3]);
    $(elems[8]).html(answers[4]);
    $(elems[9]).html(answers[17]);
    $(elems[10]).html(answers[18]);
    $(elems[11]).html(answers[5]);
    $(elems[12]).html(answers[14]);
    $(elems[13]).html(answers[5]);
    $(elems[14]).html(answers[14]);
    $(elems[15]).html(answers[6]);
    $(elems[16]).html(answers[15]);
    $(elems[17]).html(answers[7]);
    $(elems[18]).html(answers[9]);
    $(elems[19]).html(answers[16]);
    $(elems[20]).html(answers[8]);
  
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