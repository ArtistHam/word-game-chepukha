var timerId = setTimeout(function(){
    $('.preloader').fadeOut();
  }, 1000);
  
  // DATA
  var data = [
      {
        questions: ["Какой?",
                    "Какой? (с бол. буквы)",	
                    "Какая? (с бол. буквы)",	
                    "Любое число",	
                    "Какие?",	
                    "Какой?",	
                    "Еда (неск. слов)",	
                    "Другая еда (неск. слов)",	
                    "Что? или кто? (муж. р.)",	
                    "Что? или кто? (жен. р.)",	
                    "Животные (мн.ч.)",	
                    "Что? или кто? (муж. р.)",	
                    "Возглас возмущения"
          ],
          story: 'Я вчера ходил в <span class="fill"></span> театр с гордым названием <span class="fill"></span> <span class="fill"></span>. Показывали пьесу "<span class="fill"></span> <span class="fill"></span>". Уселся в партере. Сосед справа сразу достал еду - <span class="fill"></span>, а сосед слева достал своё - <span class="fill"></span>. Чавкали как <span class="fill"></span> <span class="fill"></span>. А потом с балкона на меня упал <span class="fill"></span> <span class="fill"></span>. Я закричал: "<span class="fill"></span>! Дайте нормально посмотреть спектакль! Я <span class="fill"></span> лет не был в театре!" Я пошел в 1-й ряд, сел к кому-то на колени и досмотрел всё до конца. "<span class="fill"></span> <span class="fill"></span>" - отличная пьеса!'
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
    $(elems[2]).html(answers[8]);
    $(elems[3]).html(answers[2]);
    $(elems[4]).html(answers[9]);
    $(elems[5]).html(answers[6]);
    $(elems[6]).html(answers[7]);
    $(elems[7]).html(answers[4]);
    $(elems[8]).html(answers[10]);
    $(elems[9]).html(answers[5]);
    $(elems[10]).html(answers[11]);
    $(elems[11]).html(answers[12]);
    $(elems[12]).html(answers[3]);
    $(elems[13]).html(answers[2]);
    $(elems[14]).html(answers[9]);
  
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