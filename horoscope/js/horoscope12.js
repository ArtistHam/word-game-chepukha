var timerId = setTimeout(function(){
    $('.preloader').fadeOut();
  }, 1000);
  
  // DATA
  var data = [
      {
        questions: ["какой?",	
                    "какой?",	
                    "где?",	
                    "любой предмет (вещь), муж.р.",	
                    "предмет мебели",	
                    "животное (муж.р.)"
          ],
          story: 'Всем известны рыба-молот, рыба-меч, а также рыба-пила. Но вы совсем другой тип - рыба-<span class="fill"></span>. Такие рыбки стараются лечь на дно и ничего не делать.<br>' +
          'Избегайте тех, кто мелко плавает и никому не позволяйте хватать себя за жабры!<br>' +
          'В ноябре вам повезёт в лотерее - вы выиграете <span class="fill"></span> <span class="fill"></span>. Очень полезная вещь, помогает от насморка, особенно на карусели <span class="fill"></span>!<br>' +
          'По гороскопу вы Рыбы, а фактически <span class="fill"></span> <span class="fill"></span>, но это неважно.<br>' +
          'Певческая карьера в новом году - это не для вас. Не ищите удачу в мутной воде, и всё будет хорошо.'
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
  
    $(elems[0]).html(answers[4]);
    $(elems[1]).html(answers[0]);
    $(elems[2]).html(answers[3]);
    $(elems[3]).html(answers[2]);
    $(elems[4]).html(answers[1]);
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