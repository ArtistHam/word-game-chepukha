var timerId = setTimeout(function(){
  $('.preloader').fadeOut();
}, 1000);

// DATA
var data = [
    {
        questions: ["Что делала? (несколько слов)",
                    "Какая?",
                    "Какой?",
                    "Большой предмет (муж.р.)",
                    "Какой?",
                    "Предмет мебели (муж.р.)",
                    "Какой?",
                    "Крупное животное (муж. р.)",
                    "Какая?",
                    "Крупное животное (жен. р.)",
                    "Какой?",
                    "Хищник (муж. р.)"
        ],
        story: 'Жили-были старик со старухой у самого синего моря. Старуха <span class="fill"></span>, а старик ловил рыбу. Однажды забросил он невод в море, вытащил его, а в нем <span class="fill"></span> золотая рыбка.<br>'+ 
        '- Ну, что молчишь? - молвила рыбка. - Ты Герасим? Говори желание!<br>' +
        '- Эх, корыто у старухи развалилось! Давай стиральную машину, что ли...<br>' +
        '- Будет тебе стиральная машина! - сказала рыбка. - А что еще?<br>' +
        '- Давай еще <span class="fill"></span> <span class="fill"></span> и <span class="fill"></span> <span class="fill"></span>!<br>' +
        'Отпустил старик рыбку в море, пошел домой, и видит рядом со своей избушкой такую картину: стоит <span class="fill"></span> <span class="fill"></span>, на нём <span class="fill"></span> <span class="fill"></span>, еще выше <span class="fill"></span> <span class="fill"></span>, а на самой верхушке стоит его старуха и боится пошевельнуться.<br>' +
        '"Что-то перепутала рыбка, - подумал старик. - Но прикольно получилось! Цирк, да и только!"'
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

    for(var i = 0; i < elems.length; ++i){
      $(elems[i]).html(answers[i]);
    }

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

