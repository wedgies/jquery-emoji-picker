# jQuery Emoji Picker #

## Description ##

The top 3 things your users love: 1) Animated GIFs, 2) Emojis, 3) 🍩's.  This JQuery Plugin allows you to add support for both Emojis and 🍩 to any text input on your web app.  With this plugin, your desktop users can enjoy the same great Emoji support your mobile users already have. All while eating a 🍩.

## Installation ##

Include jQuery in your `<head></head>`:

`<script type="text/javascript" src="js/jquery-1.11.2.min.js"></script>`

Add the following to `<head></head>`:

`<link rel="stylesheet" type="text/css" href="css/emojipicker.css">`
`<link rel="stylesheet" type="text/css" href="css/emojipicker-emojis.css">`
`<script type="text/javascript" src="js/jquery.emojipicker.js"></script>`

Initialize by calling `emojiPicker` on an input element with optional parameters:

$('.question').emojiPicker({
  height: '251px',
  width: '100px'
});

## Settings ##

* Picker width (int, between 200-600 px, defaults to 200)
* Picker height (int, between 75-350 px, defaults to 350)
* Picker position relative to icon (string, 'top', 'bottom', 'left', 'right', defaults to top)
* Picker fadeIn/fadeOut time (int, in ms, defaults to 100)
* Icon color (string, hex value, defaults to '#eee')
* Icon image color (string, 'black' or 'white', defaults to 'black')

Original source for CSS:
https://github.com/hassankhan/emojify.js/blob/master/dist/css/data-uri/emojify-emoticons.css

Original source for JSON:
https://raw.githubusercontent.com/iamcal/emoji-data/master/emoji.json
