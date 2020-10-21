
function increase_font() {
    var currentFontSize = parseInt($('html').css('font-size'));
    console.log(currentFontSize);
    if (currentFontSize < 46) { // maximum font size of 46
        var newFontSize = currentFontSize + 5;
        $('html').css('font-size', newFontSize);
    }
    console.log(currentFontSize);
}

function reset_font() {
    $('html').css('font-size', 15);
}

function change_font() {
    if ($('body').css('font-family') === 'Nunito')
        $('body').css('font-family', 'Comic Sans MS');
    else
        $('body').css('font-family', 'Nunito');
}

function poof() {
    $('.phonesContainer').hide();
}

function reduce_image_size() {
    var width = parseInt($('.imageContainer').css('width'));
    var height = parseInt($('.imageContainer').css('height'));
    if (width < 300) { // reset if image is too small
        $('.imageContainer').css('width', '80%');
        $('.imageContainer').css('height', '100%')
    }
    else {
        $('.imageContainer').css('width', (width/2.0).toString());
        $('.imageContainer').css('height', (height/2.0).toString());
    }   
}