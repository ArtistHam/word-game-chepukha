var timerId = setTimeout(function(){
    $('.preloader').fadeOut();
  }, 1000);
  
  // DATA
  var data = [
      {
        questions: ["Какая?",	
                    "Какой?",	
                    "Какой? (с бол. буквы)",	
                    "Какой?",	
                    "Какой?",	
                    "Какая?",	
                    "Какой?",	
                    "Какая?",	
                    "Какой?",	
                    "Любое число",	
                    "Любое число",	
                    "Что? или кто? (муж. р.)",	
                    "Что? (муж. р.)",	
                    "Животное (муж.р.)",	
                    "Животное (жен.р.)",	
                    "Часть тела",	
                    "Любое число",	
                    "Известный певец или политик"
          ],
          story: 'Как-то раз <span class="fill"></span> Красная Шапочка отправилась к бабушке. В руках она несла корзинку, в которой лежали: <span class="fill"></span> бутербродов, <span class="fill"></span> бутылок кока-колы и торт под названием <span class="fill"></span> <span class="fill"></span>. И, конечно, она встретила Волка по кличке <span class="fill"></span> <span class="fill"></span>. - <span class="fill"></span> волчище! - ласково сказала Красная Шапочка. - Хочешь <span class="fill"></span> бутерброд? "Я лучше тебя съем, <span class="fill"></span> Шапка!" - закричал Волк и набросился на девочку. Но тут на помощь Красной Шапочке подоспели <span class="fill"></span> <span class="fill"></span> и <span class="fill"></span> <span class="fill"></span>. Они откусили волку хвост и часть тела, которая называется <span class="fill"></span>. Волк не на шутку разозлился и побежал к бабушке Красной Шапки. А там его уже поджидали <span class="fill"></span> охотников и <span class="fill"></span> <span class="fill"></span> с рогаткой.'
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
    $(elems[1]).html(answers[9]);
    $(elems[2]).html(answers[10]);
    $(elems[3]).html(answers[1]);
    $(elems[4]).html(answers[11]);
    $(elems[5]).html(answers[2]);
    $(elems[6]).html(answers[12]);
    $(elems[7]).html(answers[3]);
    $(elems[8]).html(answers[4]);
    $(elems[9]).html(answers[5]);
    $(elems[10]).html(answers[6]);
    $(elems[11]).html(answers[13]);
    $(elems[12]).html(answers[7]);
    $(elems[13]).html(answers[14]);
    $(elems[14]).html(answers[15]);
    $(elems[15]).html(answers[16]);
    $(elems[16]).html(answers[8]);
    $(elems[17]).html(answers[17]);
  
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