;(function($) {

  var pluginName = "emojiPicker",
      defaults = {
        width: '200',
        height: '350',
        position: 'bottom',
        fadeTime: 100,
        iconColor: 'black',
        iconBackgroundColor: '#eee',
        container: 'body'
      };

  var MIN_WIDTH = 200,
      MAX_WIDTH = 600,
      MIN_HEIGHT = 100,
      MAX_HEIGHT = 350,
      MAX_ICON_HEIGHT = 50;

  function Plugin( element, options ) {

    this.element = element;
    this.$el = $(element);

    this.settings = $.extend( {}, defaults, options );

    // Safety first
    this.settings.width = parseInt(this.settings.width);
    this.settings.height = parseInt(this.settings.height);

    // Check for valid width/height
    if(this.settings.width >= MAX_WIDTH) {
      this.settings.width = MAX_WIDTH;
    } else if (this.settings.width < MIN_WIDTH) {
      this.settings.width = MIN_WIDTH;
    }
    if (this.settings.height >= MAX_HEIGHT) {
      this.settings.height = MAX_HEIGHT;
    } else if (this.settings.height < MIN_HEIGHT) {
      this.settings.height = MIN_HEIGHT;
    }

    // Do not enable if on mobile device (emojis already present)
    if(!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
      this.init();
    }

  }

  $.extend(Plugin.prototype, {

    init: function() {
      this.addPickerIcon();
      this.createPicker();
      this.listen();
    },

    addPickerIcon: function() {
      var elementHeight = this.$el.outerHeight();
      var iconHeight = elementHeight > MAX_ICON_HEIGHT ?
        MAX_ICON_HEIGHT :
        elementHeight;
      var objectWidth = this.$el.width();

      this.$el
        .css('paddingRight', iconHeight + 10 + 'px')
        .width(objectWidth - iconHeight - 10)

      this.$wrapper = this.$el
        .wrap("<div class='emojiPickerIconWrap'></div>")
        .parent()

      this.$icon = $('<div class="emojiPickerIcon"></div>')
        .height(iconHeight)
        .width(iconHeight)
        .addClass(this.settings.iconColor)
        .css('backgroundColor', this.settings.iconBackgroundColor);

      this.$pickerWrap = $('<div id="emojiPickerWrap"></div>')
        .width(this.settings.width)
        .height(this.settings.height);

      this.$wrapper
        .append( this.$icon, this.$pickerWrap );
    },

    createPicker: function() {

      // Show template
      this.$pickerWrap.html( getPickerHTML() );

      // zIndex Hack
      this.$pickerWrap.find('.emojiPicker').css('z-index',10000);

      // Picker height
      this.$pickerWrap.find('.emojiPicker section')
        .height(parseInt(this.settings.height) - 40); // 40 is height of the tabs

      // Picker position
      switch(this.settings.position) {
        case 'top':
          var top = parseInt(this.settings.height) + 20;
          this.$pickerWrap.css({'top': -top + 'px', 'right':'0'});
          break;
        case 'bottom':
          this.$pickerWrap.css({'right':'0'});
          break;
        case 'left':
          var left = this.$icon.width() + 10;
          this.$pickerWrap.css({'top':'-10px', 'right': left + 'px'});
          break;
        case 'right':
          var right = parseInt(this.settings.width) + this.$icon.width() - 30;
          this.$pickerWrap.css({'top':'-10px', 'right': -right + 'px'});
          break;
      }

      // Populate Emoji table
      $.each($.fn.emojiPicker.emojis, function(i, emoji) {
        var tab = emoji.category;
        this.$pickerWrap.find('.emojiPicker .' + tab)
          .append('<div class="emoji emoji-' + emoji.shortcode + '"></div>');
      }.bind(this));

      // Tab size based on width
      if (this.settings.width < 240) {
        this.$pickerWrap.find('.emoji').css({'width':'1em', 'height':'1em'});
      }

    },

    listen: function() {

      this.$wrapper.find('.emojiPickerIcon')
        .click( $.proxy(this.iconClicked, this) );

      // Click event for emoji
      this.$wrapper.find('.emojiPicker section div')
        .click( $.proxy(this.emojiClicked, this) );

      // TODO Show or hide picker if clicked off
      // $('body').click(function(e) {
      //   $('.emojiPicker').hide();
      // });

      // TODO $('.emojiPicker, .emojiPickerIcon').click(function(e) {
      //   e.stopPropagation();
      // });

      // Click event for active tab
      this.$wrapper.find('.emojiPicker nav .tab')
        .click( $.proxy(this.emojiCategoryClicked, this) );

    },

    /************
     *  EVENTS  *
     ************/

    iconClicked : function(e) {
      this.$wrapper.find('.emojiPicker').toggle(this.settings.fadeTime, 'linear');
    },

    emojiClicked: function(e) {
      var emojiShortcode = $(e.target).attr('class').split('emoji-')[1];
      var emojiUnicode = toUnicode(findEmoji(emojiShortcode).unicode);

      insertAtCaret(this.element, emojiUnicode);
    },

    emojiCategoryClicked: function(e) {
      var section = '';

      // Update tab
      this.$wrapper.find('.emojiPicker nav .tab').removeClass('active');
      if ($(e.target).parent().hasClass('tab')) {
        section = $(e.target).parent().attr('data-tab');
        $(e.target).parent('.tab').addClass('active');
      } else {
        section = $(e.target).attr('data-tab');
        $(e.target).addClass('active');
      }

      // Update section
      this.$wrapper.find('.emojiPicker section').hide();
      this.$wrapper.find('.emojiPicker section.' + section).show();
    }

  });

  $.fn[ pluginName ] = function ( options ) {

    // Calling a function
    if (typeof options === 'string') {
      this.each(function() {
        var plugin = $.data( this, pluginName );
        switch(options) {
          case 'toggle':
            plugin.iconClicked();
          break;
        }
      });
      return this;
    }

    this.each(function() {
      // Don't attach to the same element twice
      if ( !$.data( this, pluginName ) ) {
        $.data( this, pluginName, new Plugin( this, options ) );
      }
    });
    return this;
  };

  /* ---------------------------------------------------------------------- */

  // TODO : Generate in a nicer way.
  function getPickerHTML() {
    return '<div class="emojiPicker">' +
      '<nav>' +
      '<div class="tab active" data-tab="emotion"><div class="emoji emoji-grinning"></div></div>' +
      '<div class="tab" data-tab="travel"><div class="emoji emoji-whale"></div></div>' +
      '<div class="tab" data-tab="people"><div class="emoji emoji-hamburger"></div></div>' +
      '<div class="tab" data-tab="thing"><div class="emoji emoji-sunny"></div></div>' +
      '<div class="tab" data-tab="folderol"><div class="emoji emoji-kiss"></div></div>' +
      '<div class="tab" data-tab="symbol"><div class="emoji emoji-rocket"></div></div>' +
      '</nav>' +
      '<section class="emotion"></section>' +
      '<section class="travel hidden"></section>' +
      '<section class="people hidden"></section>' +
      '<section class="thing hidden"></section>' +
      '<section class="folderol hidden"></section>' +
      '<section class="symbol hidden"></section>' +
      '</div>';
  }

  function findEmoji(emojiShortcode) {
    var emojis = $.fn.emojiPicker.emojis;
    for (var i = 0; i < emojis.length; i++) {
      if (emojis[i].shortcode == emojiShortcode) {
        return emojis[i];
      }
    }
  }

  function insertAtCaret(inputField, myValue) {
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
