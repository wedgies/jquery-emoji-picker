;(function($) {

  var pluginName = "emojiPicker",
      defaults = {
        width: '200',
        height: '350',
        position: 'right',
        fadeTime: 100,
        iconColor: 'black',
        iconBackgroundColor: '#eee',
        recentCount: 36,
        container: 'body',
        button: true
      };

  var MIN_WIDTH = 300,
      MAX_WIDTH = 600,
      MIN_HEIGHT = 100,
      MAX_HEIGHT = 350,
      MAX_ICON_HEIGHT = 50;

  function Plugin( element, options ) {

    this.element = element;
    this.$el = $(element);

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

    var possiblePositions = [ 'left',
                              'right'
                              /*,'top',
                              'bottom'*/];
    if($.inArray(this.settings.position,possiblePositions) == -1) {
      this.settings.position = defaults.position; //current default
    }

    // Do not enable if on mobile device (emojis already present)
    if(!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
      this.init();
    }

  }

  $.extend(Plugin.prototype, {

    init: function() {
      this.active = false;
      this.addPickerIcon();
      this.createPicker();
      this.listen();
    },

    addPickerIcon: function() {
      // The wrapper is not needed if they have chosen to not use a button
      if (this.settings.button) {
        var elementHeight = this.$el.outerHeight();
        var iconHeight = elementHeight > MAX_ICON_HEIGHT ?
          MAX_ICON_HEIGHT :
          elementHeight;

        // This can cause issues if the element is not visible when it is initiated
        var objectWidth = this.$el.width();

        this.$el.width(objectWidth);

        this.$wrapper = this.$el
          .wrap("<div class='emojiPickerIconWrap'></div>")
          .parent();

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
      this.$picker.find('.sections')
        .height(parseInt(this.settings.height) - 40); // 40 is height of the tabs

      // Tab size based on width
      if (this.settings.width < 240) {
        this.$picker.find('.emoji').css({'width':'1em', 'height':'1em'});
      }

    },

    listen: function() {
      // If the button is being used, wrapper has not been set,
      //    and will not need a listener
      if (this.settings.button){
        // Clicking on the picker icon
        this.$wrapper.find('.emojiPickerIcon')
          .click( $.proxy(this.iconClicked, this) );
      }

      // Click event for emoji
      this.$picker.find('section em')
        .click( $.proxy(this.emojiClicked, this) );

      // Hover event for emoji
      this.$picker.find('section em')
        .mouseover( $.proxy(this.emojiMouseover, this) );
      this.$picker.find('section em')
        .mouseout( $.proxy(this.emojiMouseout, this) );

      // Click event for active tab
      this.$picker.find('nav .tab')
        .click( $.proxy(this.emojiCategoryClicked, this) );

      // Scroll event for active tab
      this.$picker.find('.sections')
        .scroll( $.proxy(this.emojiScroll, this) );

      // Click event for recent tab
      this.$picker.find('nav div[data-tab=recent]')
        .click( $.proxy(this.emojiRecentClicked, this) );

      this.$picker.click( $.proxy(this.pickerClicked, this) );

      // Key events for search
      this.$picker.find('section.search input')
        .keyup( $.proxy(this.searchCharEntered, this) );

      $(document.body).click( $.proxy(this.clickOutside, this) );

      // Resize events forces a reposition, which may or may not actually be required
      $(window).resize( $.proxy(this.updatePosition, this) );
    },

    updatePosition: function() {

      /*  Process:
          1. Find the nearest positioned element by crawling up the ancestors, record it's offset
          2. Find the bottom left or right of the input element, record this (Account for position setting of left or right)
          3. Find the difference between the two, as this will become our new position
          4. Magic.

          N.B. The removed code had a reference to top/bottom positioning, but I don't see the use case for this..
      */

      // Step 1
      // Luckily jquery already does this...
      var positionedParent = this.$picker.offsetParent();
      var parentOffset = positionedParent.offset(); // now have a top/left object

      // Step 2
      var elOffset = this.$el.offset();
      if(this.settings.position == 'right'){
        elOffset.left += this.$el.outerWidth() - this.settings.width;
      }
      elOffset.top += this.$el.outerHeight();

      // Step 3
      var diffOffset = {
        top: (elOffset.top - parentOffset.top),
        left: (elOffset.left - parentOffset.top)
      };

      this.$picker.css({
        top: diffOffset.top,
        left: diffOffset.left
      });

      return this;
    },

    hide: function() {
      this.$picker.hide(this.settings.fadeTime, 'linear', function() {
        this.active = false;
      }.bind(this));
    },

    show: function() {
      this.$el.focus();
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
        if( this.$picker.find('.search input').length > 0 ) {
          this.$picker.find('.search input').focus();
        }
      } else {
        this.hide();
      }
    },

    emojiClicked: function(e) {
      var emojiShortcode = $(e.target).parent().find('.emoji').attr('class').split('emoji-')[1];
      var emojiUnicode = toUnicode(findEmoji(emojiShortcode).unicode);

      insertAtCaret(this.element, emojiUnicode);
      addToLocalStorage(emojiShortcode);

      // trigger change event on input
      $(this.element).trigger("keyup");
    },

    emojiMouseover: function(e) {
      var emojiShortcode = $(e.target).parent().find('.emoji').attr('class').split('emoji-')[1];
      $(e.target).parents('.emojiPicker').find('.shortcode').html('<div class="emoji emoji-' + emojiShortcode + '"></div><em>' + emojiShortcode + '</em>');
    },

    emojiMouseout: function(e) {
      $(e.target).parents('.emojiPicker').find('.shortcode').empty();
    },

    emojiCategoryClicked: function(e) {
      var section = '';

      // Update tab
      this.$picker.find('nav .tab').removeClass('active');
      if ($(e.target).parent().hasClass('tab')) {
        section = $(e.target).parent().attr('data-tab');
        $(e.target).parent('.tab').addClass('active');
      }
      else {
        section = $(e.target).attr('data-tab');
        $(e.target).addClass('active');
      }

      var $section = this.$picker.find('section.' + section);

      var heightOfSectionsHidden = $section.parent().scrollTop();
      var heightOfSectionToPageTop = $section.offset().top;
      var heightOfSectionsToPageTop = $section.parent().offset().top;

      var scrollDistance = heightOfSectionsHidden
                           + heightOfSectionToPageTop
                           - heightOfSectionsToPageTop;

      // Disable scroll event
      $('.sections').off('scroll');

      $('.sections').animate({
        scrollTop: scrollDistance
      }, 250);

      // Enable scroll event
      $('.sections').off('scroll');
    },

    emojiScroll: function(e) {
      var sections = $('section');
      $.each(sections, function(key, value) {
        var section = sections[key];
        var offsetFromTop = $(section).position().top;

        if (section.className == 'search') {
          $(section).parents('.emojiPicker').find('nav tab.recent').addClass('active');
          return;
        }

        if (offsetFromTop < -8) {
          $(section).parents('.emojiPicker').find('nav .tab').removeClass('active');
          $(section).parents('.emojiPicker').find('nav .tab[data-tab=' + section.className + ']').addClass('active');
        }
      });
    },

    emojiRecentClicked: function(e) {
      var emojiWrap = $('section.recent .recentEmojis .wrap');
      emojiWrap.find('em').remove();

      var recentlyUsedEmojis = JSON.parse(localStorage.emojis);
      var emojiMarkup = [];
      for (var i = recentlyUsedEmojis.length-1; i > -1 ; i--) {
        emojiMarkup.push('<em><div class="emoji emoji-' + recentlyUsedEmojis[i] + '"></div></em>');
      }
      emojiWrap.append(emojiMarkup.join(''));
    },

    pickerClicked: function(e) {
      e.stopPropagation();
    },

    clickOutside: function(e) {
      if ( this.active ) {
        this.hide();
      }
    },

    searchCharEntered: function(e) {
      var searchTerm = $(e.target).val();
      var searchEmojis = $(e.target).parents('.sections').find('section.search');
      var searchEmojiWrap = searchEmojis.find('.wrap');
      var sections = $(e.target).parents('.sections').find('section');

      if (searchTerm.length > 0) {
        sections.hide();
        searchEmojis.show();
        searchEmojiWrap.show();

        var results = [];
        searchEmojiWrap.find('em').remove();

        $.each($.fn.emojiPicker.emojis, function(i, emoji) {
          var shortcode = emoji.shortcode;
          if ( shortcode.indexOf(searchTerm) > -1 ) {
            results.push('<em><div class="emoji emoji-' + shortcode + '"></div></em>');
          }
        });
        searchEmojiWrap.append(results.join(''));
      } else {
        sections.show();
        searchEmojiWrap.hide();
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

  function getPickerHTML() {
    var nodes = [];
    var categories = [
      { name: 'emotion' },
      { name: 'nature' },
      { name: 'food' },
      { name: 'sport' },
      { name: 'travel' },
      { name: 'object' },
      { name: 'symbol' },
      { name: 'flag' }
    ];
    var aliases = {
      'people':    'emotion',
      'undefined': 'thing'
    }
    var items = {};
    var localStorageSupport = (typeof(Storage) !== 'undefined') ? true : false;

    // Re-Sort Emoji table
    $.each($.fn.emojiPicker.emojis, function(i, emoji) {
      var category = aliases[ emoji.category ] || emoji.category;
      items[ category ] = items[ category ] || [];
      items[ category ].push( emoji );
    });

    nodes.push('<div class="emojiPicker">');
    nodes.push('<nav>');

    // Recent Tab, if localstorage support
    if (localStorageSupport) {
      nodes.push('<div class="tab active" data-tab="recent"><div class="emoji emoji-tab-recent"></div></div>');
    }

    // Emoji categories
    var categories_length = categories.length;
    for (var i = 0; i < categories_length; i++) {
      nodes.push('<div class="tab' +
      ( !localStorageSupport && i == 0 ? ' active' : '' ) +
      '" data-tab="' +
      categories[i].name +
      '"><div class="emoji emoji-tab-' +
      categories[i].name +
      '"></div></div>');
    }
    nodes.push('</nav>');
    nodes.push('<div class="sections">');

    // Search
    nodes.push('<section class="search">');
    nodes.push('<input type="text" placeholder="Search...">');
    nodes.push('<div class="wrap" style="display:none;"><h1>Search Results</h1></div>');
    nodes.push('</section>');

    // Recent Section, if localstorage support
    if (localStorageSupport && localStorage.emojis) {
      var recentlyUsedEmojis = JSON.parse(localStorage.emojis);
      nodes.push('<section class="recent">');
      nodes.push('<h1>Recently Used</h1><div class="wrap">');

      for (var i = recentlyUsedEmojis.length-1; i > -1 ; i--) {
        nodes.push('<em><div class="emoji emoji-' + recentlyUsedEmojis[i] + '"></div></em>');
      }
      nodes.push('</div>');
      nodes.push('</section>');
    }

    for (var i = 0; i < categories_length; i++) {
      nodes.push('<section class="' + categories[i].name + '">');
      nodes.push('<h1>' + categories[i].name + '</h1>');
      var category_length = items[ categories[i].name ].length;
      for (var j = 0; j < category_length; j++) {
        var emoji = items[ categories[i].name ][ j ];
        nodes.push('<em><div class="emoji emoji-' + emoji.shortcode + '"></div></em>');
      }
      nodes.push('</section>');
    }
    nodes.push('</div>');

    // Shortcode
    nodes.push('<div class="shortcode"></div>');

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

  function addToLocalStorage(emoji) {
    var recentlyUsedEmojis = [];
    if (localStorage.emojis) {
      recentlyUsedEmojis = JSON.parse(localStorage.emojis);
    }

    // If already in recently used, move to front
    var index = recentlyUsedEmojis.indexOf(emoji);
    if (index > -1) {
      recentlyUsedEmojis.splice(index, 1);
    }
    recentlyUsedEmojis.push(emoji);

    if (recentlyUsedEmojis.length > defaults.recentCount) {
      recentlyUsedEmojis.shift();
    }

    localStorage.emojis = JSON.stringify(recentlyUsedEmojis);
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
