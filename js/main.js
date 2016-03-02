($(document).ready(function() {
  $('span').click(function() {
    if($(this).text() === 'C') {
      $('#screen').text('');
    }else if($(this).text() === '=') {
      var $equation = $('#screen').text();
      $('#screen').text('' + eval($equation).toString());
    }else if($(this).text() === 'x') {
    $('#screen').append('*');
    }else if($(this).text() === '&divide;') {
    $('#screen').append('\/');
    }else{
      $('#screen').append($(this).text());
    }
  });
}));
