var timerId = setTimeout(function(){
    $('.preloader').fadeOut();
  }, 1000);
  
  // DATA
  var data = [
      {
        questions: ["Какая?",	
                    "Какая?",	
                    "Какая?",	
                    "Какая?",	
                    "Любое число",	
                    "Любое число",	
                    "Предмет (м.р. или ж.р.)",	
                    "Предмет (м.р. или ж.р.)",	
                    "Любое число",	
                    "Любое число",	
                    "Часть тела (жен.р.)",	
                    "Любое число"
          ],
          story: 'Заболела <span class="fill"></span>, и пошел я в поликлинику. Сначала меня направили сдать кровь. Там у меня откачали <span class="fill"></span> литров, и я, пошатываясь, отправился на рентген. Рентгенолог просветил меня и сказал: "У вас в желудке два инородных предмета - <span class="fill"></span> и <span class="fill"></span>". Я сказал: "Я знаю. Это не инородные, это мои. Они мне не мешают". И пошел к терапевту. Та меня послушала, обстукала и сказала: "У вас <span class="fill"></span> жаба. Болезнь такая." Насчет жабы я не согласился и пошел к стоматологу. Тот сказал: "Очень редкий случай! У вас <span class="fill"></span> зубов. Давайте вырвем <span class="fill"></span> из них - будет гораздо лучше!" Я не согласился и пошел к хирургу. Хирург посмотрел на меня и сказал: "У вас <span class="fill"></span> косолапость и <span class="fill"></span> кривоногость. Давайте что-нибудь отрежем! А то у меня скальпель уже заржавел." Я не согласился и пошел к диетологу - тут уж ничего резать не будут! Диетолог сказал: "Вам нужно очиститься, то есть поставить клизму - хотя бы <span class="fill"></span> ведер." Я не согласился и пошел к психиатру. Тот почесался, хрюкнул, подмигнул мне и сказал: "У вас <span class="fill"></span> шизофрения. Сейчас сделаем <span class="fill"></span> укольчиков". Я не согласился и пошел домой. Уже ничего и не болит.'
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
  
    $(elems[0]).html(answers[10]);
    $(elems[1]).html(answers[5]);
    $(elems[2]).html(answers[6]);
    $(elems[3]).html(answers[7]);
    $(elems[4]).html(answers[0]);
    $(elems[5]).html(answers[8]);
    $(elems[6]).html(answers[9]);
    $(elems[7]).html(answers[1]);
    $(elems[8]).html(answers[2]);
    $(elems[9]).html(answers[4]);
    $(elems[10]).html(answers[3]);
    $(elems[11]).html(answers[11]);
  
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