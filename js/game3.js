var timerId = setTimeout(function(){
    $('.preloader').fadeOut();
  }, 1000);
  
  // DATA
  var data = [
      {
        questions: ["Какая?",
                    "Какая?",
                    "Какое?",
                    "Предмет мебели (муж.р.)",
                    "Круглый или овальный предмет (жен.р.)",
                    "Инструмент (муж.р.)",
                    "Какой?",
                    "Любое число"
          ],
          story: 'Жили-были <span class="fill"></span> дед да <span class="fill"></span> баба. И была у них <span class="fill"></span> Курочка Ряба. Снесла курочка яичко, да не простое, а <span class="fill"></span>. Присмотрелся дед - да это же <span class="fill"></span>! Причем весом <span class="fill"></span> кг! Дед взял <span class="fill"></span>, бил-бил - не разбил. Потом взял <span class="fill"></span>, бил-бил им - не разбил. А мышка бежала, хвостиком махнула, <span class="fill"></span> упала на пол... да как шарахнет!!!' +  
          'Вот и сказочке конец. Жаль, что такая короткая получилась. '
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
  
    $(elems[0]).html(answers[6]);
    $(elems[1]).html(answers[0]);
    $(elems[2]).html(answers[1]);
    $(elems[3]).html(answers[2]);
    $(elems[4]).html(answers[4]);
    $(elems[5]).html(answers[7]);
    $(elems[6]).html(answers[5]);
    $(elems[7]).html(answers[3]);
    $(elems[8]).html(answers[4]);
  
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