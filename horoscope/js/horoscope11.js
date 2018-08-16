var timerId = setTimeout(function(){
    $('.preloader').fadeOut();
  }, 1000);
  
  // DATA
  var data = [
      {
        questions: ["Какой? (с большой буквы)",	
                    "Какой?",	
                    "Любое животное",	
                    "Еще одно животное",	
                    "Что? или кто? (муж.р.)"
          ],
          story: 'Водолей - покровитель фонтанов, водопадов, газировки, пожарных и депутатов. Весной вы придумаете новый сорт пива - <span class="fill"></span> <span class="fill"></span>, но его почему-то никто не захочет производить.<br>' +
          'На основе летнего отдыха вы сделаете вывод: лучше <span class="fill"></span> в небе, чем <span class="fill"></span> в вашей квартире.<br>' +
          'Осенью вас наградят медалью "Самый <span class="fill"></span> Водолей мира".<br>' +
          'В Год Свиньи у вас появится друг-не-разлей-вода, и вообще всё будет замечательно.'
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
    $(elems[1]).html(answers[4]);
    $(elems[2]).html(answers[2]);
    $(elems[3]).html(answers[3]);
    $(elems[4]).html(answers[1]);
  
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