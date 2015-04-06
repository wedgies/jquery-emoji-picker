;(function($) {

  var pluginName = "emojiPicker",
      defaults = {
        width: '200',
        height: '350',
        position: 'bottom',
        fadeTime: 100,
        iconColor: 'black',
        iconBackgroundColor: '#eee',
        container: 'body',
        button: true,
        richInput: true
      };

  var MIN_WIDTH = 200,
      MAX_WIDTH = 600,
      MIN_HEIGHT = 100,
      MAX_HEIGHT = 350,
      MAX_ICON_HEIGHT = 50;

  function Plugin( element, options ) {

    this.element = element;
    this.$el = $(element);

    // This will either be the element or the rich text area.
    this.$input = this.$el;

    this.settings = $.extend( {}, defaults, options );

    this.$container = $(this.settings.container);

    // (type) Safety first
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
      this.active = false;
      if (this.settings.richInput) {
        this.emojifyInput();
      }
      this.addPickerIcon();
      this.createPicker();
      this.listen();
    },

    // TODO : Placeholder http://stackoverflow.com/questions/20726174/placeholder-for-contenteditable-div

    emojifyInput: function() {
      this.$emojiArea = $('<div>', {
        class: 'emojiArea',
        contenteditable: 'true'
      })

      this.$emojiArea.width( this.$el.width() );
      this.$emojiArea.height( this.$el.height() );

      this.$emojiArea.copyCSS( this.$el, [
        /^(padding|font|color|background|border|margin)/
      ]);

      // TODO : remove visual debugging aid
      this.$emojiArea.css( 'background-color', '#c8fccf' );

      // Replace the textarea
      this.$el.hide()
        .after(this.$emojiArea);

      this.$input = this.$emojiArea;
    },

    addPickerIcon: function() {
      var elementHeight = this.$input.outerHeight();
      var iconHeight = elementHeight > MAX_ICON_HEIGHT ?
        MAX_ICON_HEIGHT :
        elementHeight;
      var objectWidth = this.$input.width();

      this.$input.width(objectWidth)

      this.$wrapper = this.$input
        .wrap("<div class='emojiPickerIconWrap'></div>")
        .parent()

      if (this.settings.button) {
        this.$icon = $('<div class="emojiPickerIcon"></div>')
          .height(iconHeight)
          .width(iconHeight)
          .addClass(this.settings.iconColor)
          .css('backgroundColor', this.settings.iconBackgroundColor);
          this.$wrapper.append( this.$icon );
      }

    },

    createPicker: function() {

      // Show template
      this.$picker = $( getPickerHTML() )
        .appendTo( this.$container )
        .width(this.settings.width)
        .height(this.settings.height)
        .css('z-index',10000);

      // Picker height
      this.$picker.find('section')
        .height(parseInt(this.settings.height) - 40); // 40 is height of the tabs

      // Tab size based on width
      if (this.settings.width < 240) {
        this.$picker.find('.emoji').css({'width':'1em', 'height':'1em'});
      }

    },

    listen: function() {

      // Clicking on the picker icon
      this.$wrapper.find('.emojiPickerIcon')
        .click( $.proxy(this.iconClicked, this) );

      // Click event for emoji
      this.$picker.find('section div')
        .click( $.proxy(this.emojiClicked, this) );

      // Click event for active tab
      this.$picker.find('nav .tab')
        .click( $.proxy(this.emojiCategoryClicked, this) );

      // Clicking inside and outside of the picker
      this.$picker
        .click( $.proxy(this.pickerClicked, this) );
      $(document.body)
        .click( $.proxy(this.clickOutside, this) );
    },

    updatePosition: function() {
      var top, left;
      if (this.settings.container === 'body') {
          top = this.$input.offset().top + this.$input.height();
          left = this.$input.offset().left;
      }
      else {
          top = this.$input.position().top + this.$input.height();
          left = this.$input.position().left;
      }

      // Picker position
      // switch(this.settings.position) {
      //   case 'top':
      //     var top = parseInt(this.settings.height) + 20;
      //     this.$pickerWrap.css({'top': -top + 'px', 'right':'0'});
      //     break;
      //   case 'bottom':
      //     this.$pickerWrap.css({'right':'0'});
      //     break;
      //   case 'left':
      //     var left = this.$icon.width() + 10;
      //     this.$pickerWrap.css({'top':'-10px', 'right': left + 'px'});
      //     break;
      //   case 'right':
      //     var right = parseInt(this.settings.width) + this.$icon.width() - 30;
      //     this.$pickerWrap.css({'top':'-10px', 'right': -right + 'px'});
      //     break;
      // }

      this.$picker.css({
          top: top + 15,
          left: left + this.$input.outerWidth() - this.settings.width
      });
      return this;
    },

    hide: function() {
      this.$picker.hide(this.settings.fadeTime, 'linear', function() {
        this.active = false;
      }.bind(this));
    },

    show: function() {
      this.$input.focus();
      this.updatePosition();
      this.$picker.show(this.settings.fadeTime, 'linear', function() {
        this.active = true;
      }.bind(this));
    },

    /************
     *  EVENTS  *
     ************/

    iconClicked : function(e) {
      if ( this.$picker.is(':hidden') ) {
        this.show();
      } else {
        this.hide();
      }
    },

    emojiClicked: function(e) {
      var emojiShortcode = $(e.target).attr('class').split('emoji-')[1];
      var emojiUnicode = toUnicode(findEmoji(emojiShortcode).unicode);

      if (this.settings.richInput) {

        var emoji = $(emojiHTML( emojiShortcode, emojiUnicode ));
        this.$input.focus();
        insertTextAtCursor( emojiUnicode );

      } else {
        insertAtCaret(this.element, emojiUnicode);
      }
    },

    emojiCategoryClicked: function(e) {
      var section = '';

      // Update tab
      this.$picker.find('nav .tab').removeClass('active');
      if ($(e.target).parent().hasClass('tab')) {
        section = $(e.target).parent().attr('data-tab');
        $(e.target).parent('.tab').addClass('active');
      } else {
        section = $(e.target).attr('data-tab');
        $(e.target).addClass('active');
      }

      // Update section
      this.$picker.find('section').hide();
      this.$picker.find('section.' + section).show();
    },

    pickerClicked: function(e) {
      e.stopPropagation();
    },

    clickOutside: function(e) {
      if ( this.active ) {
        this.hide();
      }
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

  /*
   * getStyleObject Plugin for jQuery JavaScript Library
   * From: http://upshots.org/?p=112
   */
  $.fn.getStyleObject = function(){
      var dom = this.get(0);
      var style;
      var returns = {};
      if(window.getComputedStyle){
          var camelize = function(a,b){
              return b.toUpperCase();
          };
          style = window.getComputedStyle(dom, null);
          for(var i = 0, l = style.length; i < l; i++){
              var prop = style[i];
              var camel = prop.replace(/\-([a-z])/g, camelize);
              var val = style.getPropertyValue(prop);
              returns[camel] = val;
          };
          return returns;
      };
      if(style = dom.currentStyle){
          for(var prop in style){
              returns[prop] = style[prop];
          };
          return returns;
      };
      return this.css();
  }

  $.fn.copyCSS = function(source, attributes){
    var styles = $(source).getStyleObject();
    var copiedStyles = {};
    for (var i in attributes) {
      var attr = attributes[i];
      if ( attr instanceof RegExp ) {
        for (prop in styles) {
          if (prop.match(attr))
            copiedStyles[ prop ] = styles[ prop ];
        }
      } else {
        if (attr in styles)
          copiedStyles[ attr ] = styles[ attr ];
      }
    };
    this.css(copiedStyles);
  }

  function emojiHTML(shortcode,unicode) {
    return '<span class="emoji emoji-' + shortcode + '">' + unicode + '</span>';
  }

  function getPickerHTML() {
    var nodes = [];
    var categories = [
      { name: 'emotion',  symbol: 'grinning' },
      { name: 'animal',   symbol: 'whale' },
      { name: 'food',     symbol: 'hamburger' },
      { name: 'folderol', symbol: 'sunny' },
      { name: 'thing',    symbol: 'kiss' },
      { name: 'travel',   symbol: 'rocket' }
    ];
    var aliases = {
      'people':    'emotion',
      'symbol':    'thing',
      'undefined': 'thing'
    }
    var items = {};

    // Re-Sort Emoji table
    $.each($.fn.emojiPicker.emojis, function(i, emoji) {
      var category = aliases[ emoji.category ] || emoji.category;
      items[ category ] = items[ category ] || [];
      items[ category ].push( emoji );
    });

    nodes.push('<div class="emojiPicker">');
    nodes.push('<nav>');
    for (var i in categories) {
      nodes.push('<div class="tab' +
      ( i == 0 ? ' active' : '' ) +
      '" data-tab="' +
      categories[i].name +
      '"><div class="emoji emoji-' +
      categories[i].symbol +
      '"></div></div>');
    }
    nodes.push('</nav>');
    for (var i in categories) {
      nodes.push('<section class="' +
        categories[i].name +
        ( i == 0 ? '' : ' hidden' ) +
        '">');
      for (var j in items[ categories[i].name ] ) {
        var emoji = items[ categories[i].name ][ j ];
        nodes.push('<div class="emoji emoji-' + emoji.shortcode + '"></div>');
      }
      nodes.push('</section>');
    }
    nodes.push('</div>');
    return nodes.join("\n");
  }

  function findEmoji(emojiShortcode) {
    var emojis = $.fn.emojiPicker.emojis;
    for (var i = 0; i < emojis.length; i++) {
      if (emojis[i].shortcode == emojiShortcode) {
        return emojis[i];
      }
    }
  }

  // For contenteditable
  function insertTextAtCursor(text) {
    var sel, range, html;
    if (window.getSelection) {
        sel = window.getSelection();
        if (sel.getRangeAt && sel.rangeCount) {
            range = sel.getRangeAt(0);
            range.deleteContents();
            range.insertNode( document.createTextNode(text) );
        }
    } else if (document.selection && document.selection.createRange) {
        document.selection.createRange().text = text;
    }
  }

  // For text area
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
