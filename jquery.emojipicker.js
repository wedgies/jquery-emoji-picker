/*
TODO: Min/max height requirements for picker
TODO: Disable for mobile devices

*/

(function($) {
  var settings = {};

  $.fn.emojiPicker = function(options) {
    var self = this;
    settings = $.extend({
      width: '200',
      height: '350',
      iconColor: 'black',
      iconBackgroundColor: '#eee'
    }, options );

    setupEmojiPickerIcon(self);
  };

  function setupEmojiPickerIcon(obj) {
    var iconHeight = $(obj).outerHeight();
    var objectWidth = $(obj).width();

    $(obj)
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
    
    showPicker();
    $('.emojiPickerIcon').click(function(e) {
      //showPicker();
    });
  }

  function showPicker() {
    // Get Emoji table
    var emojis = {};
    $.getJSON("emojis.json", function(json) {
      emojis = json;
    });

    // Show template
    var results = document.getElementById("emojiPickerWrap");
    results.innerHTML = tmpl("emojiPickerTemplate", {});

    // 
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