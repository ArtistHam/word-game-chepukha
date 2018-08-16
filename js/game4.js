var timerId = setTimeout(function(){
    $('.preloader').fadeOut();
  }, 1000);
  
  // DATA
  var data = [
      {
        questions: ["Любое число",	
                    "Любое число",
                    "Любое число",	
                    "Любое число",	
                    "Цвет",	
                    "Популярный певец",	
                    "Какой?",	
                    "Какая?",	
                    "Популярная певица",	
                    "Любое число"
          ],
          story: 'Ходил вчера на отечественный фильм Красавица и чудовище. Красавица там была такая: росточком <span class="fill"></span> см, весом <span class="fill"></span> кг, количество глаз: <span class="fill"></span>, количество рук: <span class="fill"></span>, количество ног: <span class="fill"></span>, цвет кожи <span class="fill"></span>. А чудовище играл <span class="fill"></span> - совсем без грима. Там по сюжету красавица должна была поцеловать чудовище - чтобы расколдовать, значит. Чудище не давалось, всё пыталось убежать... Но девушка всё-таки поймала монстра и... Он стал такой же как эта красавица, только <span class="fill"></span>! Она обрадовалась, а он не очень... Потом у них дочка родилась - вылитая <span class="fill"></span> <span class="fill"></span>. Интересное кино!'
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
    $(elems[2]).html(answers[2]);
    $(elems[3]).html(answers[3]);
    $(elems[4]).html(answers[9]);
    $(elems[5]).html(answers[4]);
    $(elems[6]).html(answers[5]);
    $(elems[7]).html(answers[6]);
    $(elems[8]).html(answers[7]);
    $(elems[9]).html(answers[8]);
  
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