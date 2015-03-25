/*
TODO:
Min/max height requirements for picker
Disable for mobile devices
Position of picker
*/

(function($) {
  var emojis = {};
  var settings = {};

  $.fn.emojiPicker = function(options) {
    var self = this;

    // Defaults
    settings = $.extend({
      width: '200',
      height: '350',
      position: 'bottom',
      fadeTime: 100,
      iconColor: 'black',
      iconBackgroundColor: '#eee'
    }, options );

    setupEmojiPickerIcon(self);
  };

  function setupEmojiPickerIcon(inputField) {
    var iconHeight = $(inputField).outerHeight();
    var objectWidth = $(inputField).width();

    $(inputField)
      .wrap("<div class='emojiPickerIconWrap'></div>")
      .css('paddingRight', iconHeight + 10 + 'px')
      .width(objectWidth - iconHeight - 10);

    $('.emojiPickerIconWrap').append('<div class="emojiPickerIcon"></div><div id="emojiPickerWrap"></div>');
    
    $('#emojiPickerWrap')
      .width(settings.width)
      .height(settings.height);

    $('.emojiPickerIcon')
      .height(iconHeight)
      .width(iconHeight)
      .addClass(settings.iconColor)
      .css('backgroundColor', settings.iconBackgroundColor);

    setupPicker(inputField)

    $('.emojiPickerIcon').click(function(e) {
      $('.emojiPicker').toggle(settings.fadeTime, 'linear');
    });
  }

  function setupPicker(inputField) {
    // Get and populate Emoji table
    $.getJSON("emojis.json", function(json) {
      emojis = json;
    });

    // Show template
    var results = document.getElementById("emojiPickerWrap");
    results.innerHTML = tmpl("emojiPickerTemplate", {});

    // Picker height
    $('.emojiPicker section').height(parseInt(settings.height) - 40);// 40 is height of the tabs

    // Picker position
    switch(settings.position) {
      case 'top':
        var top = parseInt(settings.height) + 20;
        $('#emojiPickerWrap').css({'top': -top + 'px', 'right':'0'});
        break;
      case 'bottom':
        $('#emojiPickerWrap').css({'right':'0'});
        break;
      case 'left':
        var left = $('.emojiPickerIcon').width() + 10;
        $('#emojiPickerWrap').css({'top':'-10px', 'right': left + 'px'});
        break;
      case 'right':
        var right = parseInt(settings.width) + $('.emojiPickerIcon').width() - 30;
        $('#emojiPickerWrap').css({'top':'-10px', 'right': -right + 'px'});
        break;
    }

    // Click event for active tab
    $('.emojiPicker nav .tab').click(function (e) {
      var section = '';

      // Update tab
      $('.emojiPicker nav .tab').removeClass('active');
      if ($(e.target).parent().hasClass('tab')) {
        section = $(e.target).parent().attr('data-tab');
        $(e.target).parent('.tab').addClass('active');
      } else {
        section = $(e.target).attr('data-tab');
        $(e.target).addClass('active');
      }

      // Update section
      $('.emojiPicker section').hide();
      $('.emojiPicker section.' + section).show();
    });

    // Click event for emoji
    $('.emojiPicker section div').click(function(e) {
      var emojiShortcode = $(e.target).attr('class').split('emoji-')[1];
      var emojiUnicode = toUnicode(findEmoji(emojiShortcode).unicode);

      insertAtCaret(inputField, emojiUnicode);
    });

    // Show or hide picker if clicked off
    $('body').click(function(e) {
      $('.emojiPicker').hide();
    });
    $('.emojiPicker, .emojiPickerIcon').click(function(e) {
      e.stopPropagation();
    });

  }

  function findEmoji(emojiShortcode) {
    for (var i = 0; i < emojis.length; i++) {
      if (emojis[i].shortcode == emojiShortcode) {
        return emojis[i];
      }
    }
  }

  function insertAtCaret(inputField, myValue) {
    inputField = inputField[0];
    if (document.selection) {
      //For browsers like Internet Explorer
      inputField.focus();
      var sel = document.selection.createRange();
      sel.text = myValue;
      inputField.focus();
    }
    else if (inputField.selectionStart || inputField.selectionStart == '0') {
      //For browsers like Firefox and Webkit based
      var startPos = inputField.selectionStart;
      var endPos = inputField.selectionEnd;
      var scrollTop = inputField.scrollTop;
      inputField.value = inputField.value.substring(0, startPos)+myValue+inputField.value.substring(endPos,inputField.value.length);
      inputField.focus();
      inputField.selectionStart = startPos + myValue.length;
      inputField.selectionEnd = startPos + myValue.length;
      inputField.scrollTop = scrollTop;
    } else {
      inputField.focus();
      inputField.value += myValue;
    }
  }

  function toUnicode(code) {
    var codes = code.split('-').map(function(value, index) {
      return parseInt(value, 16);
    });
    return String.fromCodePoint.apply(null, codes);
  }

  if (!String.fromCodePoint) {
    // ES6 Unicode Shims 0.1 , © 2012 Steven Levithan http://slevithan.com/ , MIT License
    String.fromCodePoint = function fromCodePoint () {
        var chars = [], point, offset, units, i;
        for (i = 0; i < arguments.length; ++i) {
            point = arguments[i];
            offset = point - 0x10000;
            units = point > 0xFFFF ? [0xD800 + (offset >> 10), 0xDC00 + (offset & 0x3FF)] : [point];
            chars.push(String.fromCharCode.apply(null, units));
        }
        return chars.join("");
    }
  }

})(jQuery);


// Simple JavaScript Templating
// John Resig - http://ejohn.org/ - MIT Licensed
(function(){
  var cache = {};
 
  this.tmpl = function tmpl(str, data){
    //console.log(str);
    // Figure out if we're getting a template, or if we need to
    // load the template - and be sure to cache the result.
    var fn = !/\W/.test(str) ?
      cache[str] = cache[str] ||
        tmpl(document.getElementById(str).innerHTML) :
     
      // Generate a reusable function that will serve as a template
      // generator (and which will be cached).
      new Function("obj",
        "var p=[],print=function(){p.push.apply(p,arguments);};" +
       
        // Introduce the data as local variables using with(){}
        "with(obj){p.push('" +
       
        // Convert the template into pure JavaScript
        str
          .replace(/[\r\t\n]/g, " ")
          .split("<%").join("\t")
          .replace(/((^|%>)[^\t]*)'/g, "$1\r")
          .replace(/\t=(.*?)%>/g, "',$1,'")
          .split("\t").join("');")
          .split("%>").join("p.push('")
          .split("\r").join("\\'")
      + "');}return p.join('');");
   
    // Provide some basic currying to the user
    return data ? fn( data ) : fn;
  };
})();