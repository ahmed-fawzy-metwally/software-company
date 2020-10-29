$(document).ready(function () {
    /* about */
    const iconContentContainer = $('.icon-content-container'),
        aboutcontent = $('.about .about-content');

    iconContentContainer.on('click', function () {
        // reset all children
        $(this).parent().children().css('border-bottom', '2px solid rgb(73, 75, 87)');
        $(this).parent().find('i').css('color', 'rgb(73, 75, 87)');

        if (aboutcontent.children(`div.row:eq(${$(this).data('index') - 1})`).css('display') == 'none') {
            // diplay and hide elements
            aboutcontent.children().slideUp();
            aboutcontent.children(`div.row:eq(${$(this).data('index') - 1})`).slideDown().css('display', 'flex');
        }
        // assign new values
        $(this).css('border-bottom', '2px solid rgb(52, 200, 253)');
        $(this).find('i').css('color', 'rgb(52, 200, 253)');
    })

    /* App compatibility */
    const appCompatibilityCardBlock = $('.app-compatibility .card-block'),
        appCompatibilityCardBlockContent = $('.app-compatibility .card-block-content')
    console.log(appCompatibilityCardBlock);
    appCompatibilityCardBlock.on('click', function () {

        {
            // assign focus to current block & remove it from others
            appCompatibilityCardBlock.removeClass('card-block-focused');
            $(this).addClass('card-block-focused');

            // fadeout all card-block-content
            appCompatibilityCardBlockContent.hide();

            // fadeIn specific card-block-content
            appCompatibilityCardBlockContent.eq($(this).data('index') - 1).fadeIn();
            appCompatibilityCardBlockContent.eq($(this).data('index') - 1).css('display', 'flex');
            console.log(appCompatibilityCardBlockContent.eq($(this).data('index') - 1));

        }
    });

    /*  */
});