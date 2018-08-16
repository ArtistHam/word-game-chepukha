var timerId = setTimeout(function(){
    $('.preloader').fadeOut();
  }, 1000);
  
  // DATA
  var data = [
      {
        questions: ["Какой?",	
                    "Какой? (с большой буквы)",	
                    "Какой?",	
                    "Какая?",	
                    "Любое число",	
                    "Любое число",	
                    "Любое число",	
                    "Любое число",	
                    "Животное (жен.р.)",	
                    "Популярный певец или артист"
          ],
          story: 'Наш <span class="fill"></span> дедушка Мороз <span class="fill"></span> нос!<br>' +
          'По моему внутреннему ощущению, мне всего <span class="fill"></span> лет, поэтому очень хочется подарков! Не знаю, где ты их берёшь, но запоминай, ничего не забудь:<br>' +
          '<span class="fill"></span> <span class="fill"></span> - из шоколада, в натуральную величину,<br>' +
          '<span class="fill"></span> кг конфет "Красная Шапочка на Севере",<br>' +
          '<span class="fill"></span>-й айфон из чистого золота, <br>' +
          '<span class="fill"></span> руб. наличными.<br>' +
          'А ещё из мешка пусть вылезет Снегурка и споёт мою любимую новогоднюю песенку "<span class="fill"></span> <span class="fill"></span> сидел под ёлочкой"!<br>' +
          'Жду, дедуля Мороз, поторопись!'
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
    $(elems[3]).html(answers[3]);
    $(elems[4]).html(answers[8]);
    $(elems[5]).html(answers[5]);
    $(elems[6]).html(answers[6]);
    $(elems[7]).html(answers[7]);
    $(elems[8]).html(answers[1]);
    $(elems[9]).html(answers[9]);
  
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