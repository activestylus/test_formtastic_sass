$(document).ready(function () {
  $('#style-switcher a').click(function(){ 
    $('#style-switcher a').removeClass('active');
    $(this).addClass('active'); 
    $('#form').removeClass('stack');
    $('#form').removeClass('float-left');
    $('#form').removeClass('float-right');
    $('#form').addClass($(this).attr('title'));
    return false;
  });
  $('#style-switcher a.sub').click(function(){ 
    $('#input-switcher').show('fast');
    $('#button-switcher').show('fast');
  });
  $('#style-switcher a.no-sub').click(function(){ 
    $('#input-switcher').hide('fast');
    $('#button-switcher').hide('fast');
  });
  $('#input-switcher').hide();
  $('#button-switcher').hide();
  $('#input-switcher a').click(function(){ 
    $('#input-switcher a').removeClass('active');
    $(this).addClass('active'); 
    $('#form').removeClass('input-grid');
    $('#form').removeClass('input-float');
    $('#form').removeClass('input-default');
    $('#form').addClass($(this).attr('title'));
    return false;
  });
  $('#button-switcher a').click(function(){ 
    $('#button-switcher a').removeClass('active');
    $(this).addClass('active'); 
    $('#form').removeClass('buttons-left');
    $('#form').removeClass('buttons-right');
    $('#form').addClass($(this).attr('title'));
    return false;
  });
});
