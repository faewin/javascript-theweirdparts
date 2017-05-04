/**
 * Created by edward on 5/3/2017.
 */

$('#login').click(function() {
    var loginGreetr = G$('edward', 'frias');

    $('#logindiv').hide();

    loginGreetr.setLang($('#lang').val()).HTMLgreeting('#greeting').log();
});
