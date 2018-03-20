(function () {

    //Tabs
    var tab = $('.tab'),
        all = document.getElementById('all'),
        sites = document.getElementById('sites'),
        projects = document.getElementById('projects'),
        hide = $('is-active-tab');

    $('.tab').on('click', function () {
        tab.removeClass('active');
        $(this).addClass('active');
    });

    $(projects).on('click', function () {
        $('.is-project').removeClass('is-inactive-tab');
        $('.is-site').addClass('is-inactive-tab');
    });
    $(sites).on('click', function () {
        $('.is-site').removeClass('is-inactive-tab');
        $('.is-project').addClass('is-inactive-tab');
    });
    $(all).on('click', function () {
        $('.is-project, .is-site').removeClass('is-inactive-tab');
    });

}());
