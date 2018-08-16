var timerId = setTimeout(function(){
    $('.preloader').fadeOut();
  }, 1000);
  
  // DATA
  var data = [
      {
        questions: ["Любое число",
                    "Какой? (с большой буквы)",
                    "Какая?",
                    "Знаменитость (имя, фамилия)",
                    "Любая жидкость",
                    "Любое число",
                    "Любое число",
                    "Животное (муж. р.)",
                    "Любое число"
          ],
          story: 'Катался на лыжах, сломал руку, ногу, нос, ухо и угодил в больницу.<br>' +
          'В больнице мне понравилось. В нашей палате было <span class="fill"></span> человек. Некоторые играли в шахматы, другие в волейбол, третьи просто бегали по стенам - в общем, было не скучно.<br>' +
          '- Кто это там бежит по потолку? - поинтересовался я.<br>' + 
          '- Это наш любимчик - таракан по прозвищу <span class="fill"></span> <span class="fill"></span>, - ответил старший по палате, которого звали <span class="fill"></span>.<br>' + 
          'С утра там процедуры: на выбор - либо капельница <span class="fill"></span> литров, либо клизма <span class="fill"></span> л. Выжившие идут на завтрак.<br>'  + 
          'Во дворе флигель патологоанатома с вывеской над дверью: "Добро пожаловать!" <br>' + 
          '- Эй, новенький! Заходи! - закричал он мне, приветливо размахивая топором.<br>' + 
          '- Потом! - сказал я и поковылял в процедурную делать уколы. <br>' + 
          '- Сделайте мне <span class="fill"></span> каких-нибудь уколов! - попросил я медсестру. - С детства их обожаю!<br>' + 
          '- А какой у вас диагноз?<br>' + 
          '- <span class="fill"></span>свинка, - сказал я.<br>' +
          '- Тогда <span class="fill"></span> подойдёт, - сказала сестра, наполнила шприц и сделала первый укол. Стало хорошо.<br>'
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
    $(elems[2]).html(answers[7]);
    $(elems[3]).html(answers[3]);
    $(elems[4]).html(answers[5]);
    $(elems[5]).html(answers[6]);
    $(elems[6]).html(answers[8]);
    $(elems[7]).html(answers[2]);
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