(function($) {
  var settings = {};


  $.fn.emojiPicker = function(options) {
    var self = this;
    settings = $.extend({
      width: '300px',
      height: '200px',
      iconColor: 'black',
      iconBackgroundColor: '#eee'
    }, options );

    setupEmojiPickerIcon(self);
  };

  function setupEmojiPickerIcon(obj) {
    var iconHeight = $(obj).outerHeight();
    var objectWidth = $(obj).width();

    $(obj).wrap("<div class='emojiPickerIconWrap'></div>").css('paddingRight', iconHeight + 10 + 'px').width(objectWidth - iconHeight - 10);
    $('.emojiPickerIconWrap').append('<div class="emojiPickerIcon"></div>');
    $('.emojiPickerIcon').height(iconHeight).width(iconHeight).addClass(settings.iconColor).css('backgroundColor', settings.iconBackgroundColor);
    
    $('.emojiPickerIcon').click(function(e) {
      showPicker();
    });
  }

  function showPicker() {
    console.log('what');
  }

})(jQuery);
