var timerId = setTimeout(function(){
    $('.preloader').fadeOut();
  }, 1000);
  
  // DATA
  var data = [
      {
        questions: ["Какой?",	
                    "Какая?",	
                    "Любое число",	
                    "Предмет (муж.р.)",	
                    "Животное (жен.р.)"
          ],
          story: 'В феврале вы совершите героический поступок: на улице, заметив, что на девушку падает <span class="fill"></span> <span class="fill"></span>, вы успеете подставить свою голову. Причём этот <span class="fill"></span> разлетится на мелкие кусочки, а вам хоть бы хны, потому что вы - Козерог!<br>' + 
          'Летом вы вдруг скажете первому встречному: "Давай пободаемся!", а тот окажется колдуном и превратит вас в редкое насекомое "<span class="fill"></span> <span class="fill"></span>", но ненадолго.<br>' +
          'Осенью вы займётесь бизнесом и к новому году накопите <span class="fill"></span> рублей!<br>' +
          'В наступающем году не надо ни с кем бодаться, и всё у вас будет отлично!'
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
    $(elems[1]).html(answers[3]);
    $(elems[2]).html(answers[3]);
    $(elems[3]).html(answers[1]);
    $(elems[4]).html(answers[4]);
    $(elems[5]).html(answers[2]);
  
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