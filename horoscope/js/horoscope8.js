var timerId = setTimeout(function(){
    $('.preloader').fadeOut();
  }, 1000);
  
  // DATA
  var data = [
      {
        questions: ["Какая?",	
                    "Какой? (с большой буквы)",	
                    "Мужское имя",	
                    "Женское имя",	
                    "Известный певец",	
                    "Что? или кто? (муж.р.)",	
                    "Животное (жен.р.)"
          ],
          story: 'Все вас опасаются, считают вредным созданием, и напрасно - вы очень добрый(ая), почти как <span class="fill"></span> <span class="fill"></span>.<br>' +
          'Летом на отдыхе у вас сложится отличная компания: вампир <span class="fill"></span>, ведьма <span class="fill"></span>, <span class="fill"></span> собственной персоной и вы. Вы даже организуете джаз-квартет "<span class="fill"></span> <span class="fill"></span>".<br>' +
          'В новом году никого не надо жалить в попу (и в другие части тела), и всё у вас будет чудесно.'
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
    $(elems[1]).html(answers[6]);
    $(elems[2]).html(answers[2]);
    $(elems[3]).html(answers[3]);
    $(elems[4]).html(answers[4]);
    $(elems[5]).html(answers[1]);
    $(elems[6]).html(answers[5]);
  
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