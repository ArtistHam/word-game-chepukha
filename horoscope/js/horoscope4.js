var timerId = setTimeout(function(){
    $('.preloader').fadeOut();
  }, 1000);
  
  // DATA
  var data = [
      {
        questions: ["Какой?",	
                    "Какое? (с большой буквы)",	
                    "Предмет мебели (муж.р.)",	
                    "Популярный певец",	
                    "Любое слово (сред. род)",	
                    "Политик или артист"
          ],
          story: 'В год Свиньи у Раков возможны приступы лунатизма. Как-то раз в феврале вы будете во сне слоняться по дому, наткнётесь на <span class="fill"></span> и, не просыпаясь, выбросите его в окно! Как раз в это время мимо вашего дома будет возвращаться с вечеринки <span class="fill"></span> <span class="fill"></span>, и ему придётся отменить все концерты до конца года. ' +
          'Летом, чтобы организовать музыкальное трио "<span class="fill"></span> <span class="fill"></span>", вы будете искать в качестве напарников знаки Зодиака Лебедь и Щука, но не найдёте таких.' +
          'В сентябре к вам придёт вдохновение, и вы сочините песню "Лохматый <span class="fill"></span>, где твоя корова?"' +
          'В новом году не надо пятиться назад, а также цепляться за хвост собаки, и всё будет замечательно.'
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
  
    $(elems[0]).html(answers[2]);
    $(elems[1]).html(answers[0]);
    $(elems[2]).html(answers[3]);
    $(elems[3]).html(answers[1]);
    $(elems[4]).html(answers[4]);
    $(elems[5]).html(answers[5]);
  
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