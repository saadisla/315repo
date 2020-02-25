function initButtons() {

  $('#home').click(function() {

    $('#addNav div').removeClass('active');

    $('#home div').addClass('active');

    $('#editor').css('display', 'none');
    $('.ql-toolbar').css('display', 'none');


    $('#createMainNav').off();



    $('.text-wrapper').html(TREEFROG_SERVICE.getHomeContent());

    $('.btn-holder').html(TREEFROG_SERVICE.getHomeStartButton());

    addGetStartedListener();

  });



  $('.closeModal').click(function() {

    closeModal();

  });



  $('.getInput').click(function(){

    getInput();

  });

}



function addCreateMNListener() {

  $('#createMainNav').click(function(e) {

    $('.modal').css('display', 'flex');

  });

}



function closeModal() {

  $('.modal').css('display', 'none');

}



function getInput(){

  console.log("yeet");

    var str = $("#input").val();

    var res = str.toLowerCase();

    if(res === ''){

      alert("the input is empty, try again");

    }else{

      console.log(res);

      var array = ["home","add navigation"];

      

      for (let index = 0; index < array.length; index++) {

        console.log(array[index]);

        if(res === array[index]) {

          alert("this term already exists");
          break;
        }else{

          console.log("it works");

          appendNav(res);
          
          closeModal();
          break;
        }

      }

    }

}



function appendNav(res) {

  //console.log(res);
  alert("The nav name is "+ res);
  $('.text-wrapper').html(TREEFROG_SERVICE.getAddContent());

  $('.btn-holder').html(TREEFROG_SERVICE.getAddContentButton());

  $('.itemAppend').html(res);

  $('#editor').css('display', 'flex');
  $('.ql-toolbar').css('display', 'flex');

  // $('#editor').html(quill);



}



function addGetStartedListener() {

  $('.get-started').click(function(e) {

    //console.log('hello');

    $('#home div').removeClass('active');

    $('#addNav div').addClass('active');



    $('.text-wrapper').html(TREEFROG_SERVICE.getGetStartedContent());

    $('.btn-holder').html(TREEFROG_SERVICE.getCreateNavButtons());

    addCreateMNListener();

    $('.get-started').off('click');

  });

}



$(document).ready(function() {

  initButtons();

  addGetStartedListener();

});