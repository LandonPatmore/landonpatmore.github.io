/**
 * Created by landon on 3/20/17.
 */

$('.space').localScroll(2000);
$('.nav').localScroll(2000);

$(document).on('click','.navbar-collapse.in',function(e) {
    if( $(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle' ) {
        $(this).collapse('hide');
    }
});