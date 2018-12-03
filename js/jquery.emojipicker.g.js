$(function() {
$.fn.emojiPicker.emojis = [
  {
    "name": "copyright",
    "unicode": "00A9",
    "shortcode": "copyright",
    "description": "COPYRIGHT SIGN",
    "category": "folderol"
  },
  {
    "name": "registered",
    "unicode": "00AE",
    "shortcode": "registered",
    "description": "REGISTERED SIGN",
    "category": "folderol"
  },
  {
    "name": "bangbang",
    "unicode": "203C",
    "shortcode": "bangbang",
    "description": "DOUBLE EXCLAMATION MARK",
    "category": "symbol"
  },
  {
    "name": "interrobang",
    "unicode": "2049",
    "shortcode": "interrobang",
    "description": "EXCLAMATION QUESTION MARK",
    "category": "folderol"
  },
  {
    "name": "tm",
    "unicode": "2122",
    "shortcode": "tm",
    "description": "TRADE MARK SIGN",
    "category": "folderol"
  },
  {
    "name": "information_source",
    "unicode": "2139",
    "shortcode": "information_source",
    "description": "INFORMATION SOURCE",
    "category": "folderol"
  },
  {
    "name": "left_right_arrow",
    "unicode": "2194",
    "shortcode": "left_right_arrow",
    "description": "LEFT RIGHT ARROW",
    "category": "folderol"
  },
  {
    "name": "arrow_up_down",
    "unicode": "2195",
    "shortcode": "arrow_up_down",
    "description": "UP DOWN ARROW",
    "category": "folderol"
  },
  {
    "name": "arrow_upper_left",
    "unicode": "2196",
    "shortcode": "arrow_upper_left",
    "description": "NORTH WEST ARROW",
    "category": "folderol"
  },
  {
    "name": "arrow_upper_right",
    "unicode": "2197",
    "shortcode": "arrow_upper_right",
    "description": "NORTH EAST ARROW",
    "category": "folderol"
  },
  {
    "name": "arrow_lower_right",
    "unicode": "2198",
    "shortcode": "arrow_lower_right",
    "description": "SOUTH EAST ARROW",
    "category": "folderol"
  },
  {
    "name": "arrow_lower_left",
    "unicode": "2199",
    "shortcode": "arrow_lower_left",
    "description": "SOUTH WEST ARROW",
    "category": "folderol"
  },
  {
    "name": "leftwards_arrow_with_hook",
    "unicode": "21A9",
    "shortcode": "leftwards_arrow_with_hook",
    "description": "LEFTWARDS ARROW WITH HOOK",
    "category": "folderol"
  },
  {
    "name": "arrow_right_hook",
    "unicode": "21AA",
    "shortcode": "arrow_right_hook",
    "description": "RIGHTWARDS ARROW WITH HOOK",
    "category": "folderol"
  },
  {
    "name": "watch",
    "unicode": "231A",
    "shortcode": "watch",
    "description": "WATCH",
    "category": "thing"
  },
  {
    "name": "hourglass",
    "unicode": "231B",
    "shortcode": "hourglass",
    "description": "HOURGLASS",
    "category": "thing"
  },
  {
    "name": "fast_forward",
    "unicode": "23E9",
    "shortcode": "fast_forward",
    "description": "BLACK RIGHT-POINTING DOUBLE TRIANGLE"
  },
  {
    "name": "rewind",
    "unicode": "23EA",
    "shortcode": "rewind",
    "description": "BLACK LEFT-POINTING DOUBLE TRIANGLE",
    "category": "thing"
  },
  {
    "name": "arrow_double_up",
    "unicode": "23EB",
    "shortcode": "arrow_double_up",
    "description": "BLACK UP-POINTING DOUBLE TRIANGLE",
    "category": "folderol"
  },
  {
    "name": "arrow_double_down",
    "unicode": "23EC",
    "shortcode": "arrow_double_down",
    "description": "BLACK DOWN-POINTING DOUBLE TRIANGLE",
    "category": "folderol"
  },
  {
    "name": "alarm_clock",
    "unicode": "23F0",
    "shortcode": "alarm_clock",
    "description": "ALARM CLOCK",
    "category": "thing"
  },
  {
    "name": "hourglass_flowing_sand",
    "unicode": "23F3",
    "shortcode": "hourglass_flowing_sand",
    "description": "HOURGLASS WITH FLOWING SAND",
    "category": "thing"
  },
  {
    "name": "m",
    "unicode": "24C2",
    "shortcode": "m",
    "description": "CIRCLED LATIN CAPITAL LETTER M",
    "category": "folderol"
  },
  {
    "name": "black_small_square",
    "unicode": "25AA",
    "shortcode": "black_small_square",
    "description": "BLACK SMALL SQUARE",
    "category": "folderol"
  },
  {
    "name": "white_small_square",
    "unicode": "25AB",
    "shortcode": "white_small_square",
    "description": "WHITE SMALL SQUARE",
    "category": "folderol"
  },
  {
    "name": "arrow_forward",
    "unicode": "25B6",
    "shortcode": "arrow_forward",
    "description": "BLACK RIGHT-POINTING TRIANGLE",
    "category": "folderol"
  },
  {
    "name": "arrow_backward",
    "unicode": "25C0",
    "shortcode": "arrow_backward",
    "description": "BLACK LEFT-POINTING TRIANGLE",
    "category": "folderol"
  },
  {
    "name": "white_medium_square",
    "unicode": "25FB",
    "shortcode": "white_medium_square",
    "description": "WHITE MEDIUM SQUARE",
    "category": "folderol"
  },
  {
    "name": "black_medium_square",
    "unicode": "25FC",
    "shortcode": "black_medium_square",
    "description": "BLACK MEDIUM SQUARE",
    "category": "folderol"
  },
  {
    "name": "white_medium_small_square",
    "unicode": "25FD",
    "shortcode": "white_medium_small_square",
    "description": "WHITE MEDIUM SMALL SQUARE",
    "category": "folderol"
  },
  {
    "name": "black_medium_small_square",
    "unicode": "25FE",
    "shortcode": "black_medium_small_square",
    "description": "BLACK MEDIUM SMALL SQUARE",
    "category": "folderol"
  },
  {
    "name": "sunny",
    "unicode": "2600",
    "shortcode": "sunny",
    "description": "BLACK SUN WITH RAYS",
    "category": "thing"
  },
  {
    "name": "cloud",
    "unicode": "2601",
    "shortcode": "cloud",
    "description": "CLOUD",
    "category": "thing"
  },
  {
    "name": "phone",
    "unicode": "260E",
    "shortcode": "phone",
    "description": "BLACK TELEPHONE",
    "category": "thing"
  },
  {
    "name": "ballot_box_with_check",
    "unicode": "2611",
    "shortcode": "ballot_box_with_check",
    "description": "BALLOT BOX WITH CHECK",
    "category": "thing"
  },
  {
    "name": "umbrella",
    "unicode": "2614",
    "shortcode": "umbrella",
    "description": "UMBRELLA WITH RAIN DROPS",
    "category": "thing"
  },
  {
    "name": "coffee",
    "unicode": "2615",
    "shortcode": "coffee",
    "description": "HOT BEVERAGE",
    "category": "thing"
  },
  {
    "name": "point_up",
    "unicode": "261D",
    "shortcode": "point_up",
    "description": "WHITE UP POINTING INDEX",
    "category": "people"
  },
  {
    "name": "relaxed",
    "unicode": "263A",
    "shortcode": "relaxed",
    "description": "WHITE SMILING FACE",
    "category": "emotion"
  },
  {
    "name": "aries",
    "unicode": "2648",
    "shortcode": "aries",
    "description": "ARIES",
    "category": "folderol"
  },
  {
    "name": "taurus",
    "unicode": "2649",
    "shortcode": "taurus",
    "description": "TAURUS",
    "category": "folderol"
  },
  {
    "name": "gemini",
    "unicode": "264A",
    "shortcode": "gemini",
    "description": "GEMINI",
    "category": "folderol"
  },
  {
    "name": "cancer",
    "unicode": "264B",
    "shortcode": "cancer",
    "description": "CANCER",
    "category": "folderol"
  },
  {
    "name": "leo",
    "unicode": "264C",
    "shortcode": "leo",
    "description": "LEO",
    "category": "folderol"
  },
  {
    "name": "virgo",
    "unicode": "264D",
    "shortcode": "virgo",
    "description": "VIRGO",
    "category": "folderol"
  },
  {
    "name": "libra",
    "unicode": "264E",
    "shortcode": "libra",
    "description": "LIBRA",
    "category": "folderol"
  },
  {
    "name": "scorpius",
    "unicode": "264F",
    "shortcode": "scorpius",
    "description": "SCORPIUS",
    "category": "folderol"
  },
  {
    "name": "sagittarius",
    "unicode": "2650",
    "shortcode": "sagittarius",
    "description": "SAGITTARIUS",
    "category": "folderol"
  },
  {
    "name": "capricorn",
    "unicode": "2651",
    "shortcode": "capricorn",
    "description": "CAPRICORN",
    "category": "folderol"
  },
  {
    "name": "aquarius",
    "unicode": "2652",
    "shortcode": "aquarius",
    "description": "AQUARIUS",
    "category": "folderol"
  },
  {
    "name": "pisces",
    "unicode": "2653",
    "shortcode": "pisces",
    "description": "PISCES",
    "category": "folderol"
  },
  {
    "name": "spades",
    "unicode": "2660",
    "shortcode": "spades",
    "description": "BLACK SPADE SUIT",
    "category": "folderol"
  },
  {
    "name": "clubs",
    "unicode": "2663",
    "shortcode": "clubs",
    "description": "BLACK CLUB SUIT",
    "category": "folderol"
  },
  {
    "name": "hearts",
    "unicode": "2665",
    "shortcode": "hearts",
    "description": "BLACK HEART SUIT",
    "category": "folderol"
  },
  {
    "name": "diamonds",
    "unicode": "2666",
    "shortcode": "diamonds",
    "description": "BLACK DIAMOND SUIT",
    "category": "folderol"
  },
  {
    "name": "hotsprings",
    "unicode": "2668",
    "shortcode": "hotsprings",
    "description": "HOT SPRINGS",
    "category": "thing"
  },
  {
    "name": "recycle",
    "unicode": "267B",
    "shortcode": "recycle",
    "description": "BLACK UNIVERSAL RECYCLING SYMBOL",
    "category": "folderol"
  },
  {
    "name": "wheelchair",
    "unicode": "267F",
    "shortcode": "wheelchair",
    "description": "WHEELCHAIR SYMBOL",
    "category": "thing"
  },
  {
    "name": "anchor",
    "unicode": "2693",
    "shortcode": "anchor",
    "description": "ANCHOR",
    "category": "thing"
  },
  {
    "name": "warning",
    "unicode": "26A0",
    "shortcode": "warning",
    "description": "WARNING SIGN",
    "category": "thing"
  },
  {
    "name": "zap",
    "unicode": "26A1",
    "shortcode": "zap",
    "description": "HIGH VOLTAGE SIGN",
    "category": "thing"
  },
  {
    "name": "white_circle",
    "unicode": "26AA",
    "shortcode": "white_circle",
    "description": "MEDIUM WHITE CIRCLE",
    "category": "folderol"
  },
  {
    "name": "black_circle",
    "unicode": "26AB",
    "shortcode": "black_circle",
    "description": "MEDIUM BLACK CIRCLE",
    "category": "folderol"
  },
  {
    "name": "soccer",
    "unicode": "26BD",
    "shortcode": "soccer",
    "description": "SOCCER BALL",
    "category": "thing"
  },
  {
    "name": "baseball",
    "unicode": "26BE",
    "shortcode": "baseball",
    "description": "BASEBALL",
    "category": "thing"
  },
  {
    "name": "snowman",
    "unicode": "26C4",
    "shortcode": "snowman",
    "description": "SNOWMAN WITHOUT SNOW",
    "category": "thing"
  },
  {
    "name": "partly_sunny",
    "unicode": "26C5",
    "shortcode": "partly_sunny",
    "description": "SUN BEHIND CLOUD",
    "category": "thing"
  },
  {
    "name": "ophiuchus",
    "unicode": "26CE",
    "shortcode": "ophiuchus",
    "description": "OPHIUCHUS",
    "category": "folderol"
  },
  {
    "name": "no_entry",
    "unicode": "26D4",
    "shortcode": "no_entry",
    "description": "NO ENTRY",
    "category": "folderol"
  },
  {
    "name": "church",
    "unicode": "26EA",
    "shortcode": "church",
    "description": "CHURCH",
    "category": "travel"
  },
  {
    "name": "fountain",
    "unicode": "26F2",
    "shortcode": "fountain",
    "description": "FOUNTAIN",
    "category": "travel"
  },
  {
    "name": "golf",
    "unicode": "26F3",
    "shortcode": "golf",
    "description": "FLAG IN HOLE",
    "category": "travel"
  },
  {
    "name": "boat",
    "unicode": "26F5",
    "shortcode": "boat",
    "description": "SAILBOAT",
    "category": "travel"
  },
  {
    "name": "tent",
    "unicode": "26FA",
    "shortcode": "tent",
    "description": "TENT",
    "category": "travel"
  },
  {
    "name": "fuelpump",
    "unicode": "26FD",
    "shortcode": "fuelpump",
    "description": "FUEL PUMP",
    "category": "travel"
  },
  {
    "name": "scissors",
    "unicode": "2702",
    "shortcode": "scissors",
    "description": "BLACK SCISSORS",
    "category": "thing"
  },
  {
    "name": "white_check_mark",
    "unicode": "2705",
    "shortcode": "white_check_mark",
    "description": "WHITE HEAVY CHECK MARK",
    "category": "folderol"
  },
  {
    "name": "airplane",
    "unicode": "2708",
    "shortcode": "airplane",
    "description": "AIRPLANE",
    "category": "thing"
  },
  {
    "name": "email",
    "unicode": "2709",
    "shortcode": "email",
    "description": "ENVELOPE",
    "category": "thing"
  },
  {
    "name": "fist",
    "unicode": "270A",
    "shortcode": "fist",
    "description": "RAISED FIST",
    "category": "people"
  },
  {
    "name": "hand",
    "unicode": "270B",
    "shortcode": "hand",
    "description": "RAISED HAND",
    "category": "people"
  },
  {
    "name": "v",
    "unicode": "270C",
    "shortcode": "v",
    "description": "VICTORY HAND",
    "category": "folderol"
  },
  {
    "name": "pencil2",
    "unicode": "270F",
    "shortcode": "pencil2",
    "description": "PENCIL",
    "category": "thing"
  },
  {
    "name": "black_nib",
    "unicode": "2712",
    "shortcode": "black_nib",
    "description": "BLACK NIB",
    "category": "folderol"
  },
  {
    "name": "heavy_check_mark",
    "unicode": "2714",
    "shortcode": "heavy_check_mark",
    "description": "HEAVY CHECK MARK",
    "category": "folderol"
  },
  {
    "name": "heavy_multiplication_x",
    "unicode": "2716",
    "shortcode": "heavy_multiplication_x",
    "description": "HEAVY MULTIPLICATION X",
    "category": "folderol"
  },
  {
    "name": "sparkles",
    "unicode": "2728",
    "shortcode": "sparkles",
    "description": "SPARKLES",
    "category": "folderol"
  },
  {
    "name": "eight_spoked_asterisk",
    "unicode": "2733",
    "shortcode": "eight_spoked_asterisk",
    "description": "EIGHT SPOKED ASTERISK",
    "category": "folderol"
  },
  {
    "name": "eight_pointed_black_star",
    "unicode": "2734",
    "shortcode": "eight_pointed_black_star",
    "description": "EIGHT POINTED BLACK STAR",
    "category": "folderol"
  },
  {
    "name": "snowflake",
    "unicode": "2744",
    "shortcode": "snowflake",
    "description": "SNOWFLAKE",
    "category": "thing"
  },
  {
    "name": "sparkle",
    "unicode": "2747",
    "shortcode": "sparkle",
    "description": "SPARKLE",
    "category": "thing"
  },
  {
    "name": "x",
    "unicode": "274C",
    "shortcode": "x",
    "description": "CROSS MARK",
    "category": "folderol"
  },
  {
    "name": "negative_squared_cross_mark",
    "unicode": "274E",
    "shortcode": "negative_squared_cross_mark",
    "description": "NEGATIVE SQUARED CROSS MARK",
    "category": "folderol"
  },
  {
    "name": "question",
    "unicode": "2753",
    "shortcode": "question",
    "description": "BLACK QUESTION MARK ORNAMENT",
    "category": "folderol"
  },
  {
    "name": "grey_question",
    "unicode": "2754",
    "shortcode": "grey_question",
    "description": "WHITE QUESTION MARK ORNAMENT",
    "category": "folderol"
  },
  {
    "name": "grey_exclamation",
    "unicode": "2755",
    "shortcode": "grey_exclamation",
    "description": "WHITE EXCLAMATION MARK ORNAMENT",
    "category": "folderol"
  },
  {
    "name": "exclamation",
    "unicode": "2757",
    "shortcode": "exclamation",
    "description": "HEAVY EXCLAMATION MARK SYMBOL",
    "category": "folderol"
  },
  {
    "name": "heart",
    "unicode": "2764",
    "shortcode": "heart",
    "description": "HEAVY BLACK HEART",
    "category": "folderol"
  },
  {
    "name": "heavy_plus_sign",
    "unicode": "2795",
    "shortcode": "heavy_plus_sign",
    "description": "HEAVY PLUS SIGN",
    "category": "folderol"
  },
  {
    "name": "heavy_minus_sign",
    "unicode": "2796",
    "shortcode": "heavy_minus_sign",
    "description": "HEAVY MINUS SIGN",
    "category": "folderol"
  },
  {
    "name": "heavy_division_sign",
    "unicode": "2797",
    "shortcode": "heavy_division_sign",
    "description": "HEAVY DIVISION SIGN",
    "category": "folderol"
  },
  {
    "name": "arrow_right",
    "unicode": "27A1",
    "shortcode": "arrow_right",
    "description": "BLACK RIGHTWARDS ARROW",
    "category": "folderol"
  },
  {
    "name": "curly_loop",
    "unicode": "27B0",
    "shortcode": "curly_loop",
    "description": "CURLY LOOP",
    "category": "folderol"
  },
  {
    "name": "loop",
    "unicode": "27BF",
    "shortcode": "loop",
    "description": "DOUBLE CURLY LOOP",
    "category": "folderol"
  },
  {
    "name": "arrow_heading_up",
    "unicode": "2934",
    "shortcode": "arrow_heading_up",
    "description": "ARROW POINTING RIGHTWARDS THEN CURVING UPWARDS",
    "category": "folderol"
  },
  {
    "name": "arrow_heading_down",
    "unicode": "2935",
    "shortcode": "arrow_heading_down",
    "description": "ARROW POINTING RIGHTWARDS THEN CURVING DOWNWARDS",
    "category": "folderol"
  },
  {
    "name": "arrow_left",
    "unicode": "2B05",
    "shortcode": "arrow_left",
    "description": "LEFTWARDS BLACK ARROW",
    "category": "folderol"
  },
  {
    "name": "arrow_up",
    "unicode": "2B06",
    "shortcode": "arrow_up",
    "description": "UPWARDS BLACK ARROW",
    "category": "folderol"
  },
  {
    "name": "arrow_down",
    "unicode": "2B07",
    "shortcode": "arrow_down",
    "description": "DOWNWARDS BLACK ARROW",
    "category": "folderol"
  },
  {
    "name": "black_large_square",
    "unicode": "2B1B",
    "shortcode": "black_large_square",
    "description": "BLACK LARGE SQUARE",
    "category": "folderol"
  },
  {
    "name": "white_large_square",
    "unicode": "2B1C",
    "shortcode": "white_large_square",
    "description": "WHITE LARGE SQUARE",
    "category": "folderol"
  },
  {
    "name": "star",
    "unicode": "2B50",
    "shortcode": "star",
    "description": "WHITE MEDIUM STAR",
    "category": "thing"
  },
  {
    "name": "o",
    "unicode": "2B55",
    "shortcode": "o",
    "description": "HEAVY LARGE CIRCLE",
    "category": "folderol"
  },
  {
    "name": "wavy_dash",
    "unicode": "3030",
    "shortcode": "wavy_dash",
    "description": "WAVY DASH",
    "category": "folderol"
  },
  {
    "name": "part_alternation_mark",
    "unicode": "303D",
    "shortcode": "part_alternation_mark",
    "description": "PART ALTERNATION MARK",
    "category": "folderol"
  },
  {
    "name": "congratulations",
    "unicode": "3297",
    "shortcode": "congratulations",
    "description": "CIRCLED IDEOGRAPH CONGRATULATION",
    "category": "folderol"
  },
  {
    "name": "secret",
    "unicode": "3299",
    "shortcode": "secret",
    "description": "CIRCLED IDEOGRAPH SECRET",
    "category": "folderol"
  },
  {
    "name": "mahjong",
    "unicode": "1F004",
    "shortcode": "mahjong",
    "description": "MAHJONG TILE RED DRAGON",
    "category": "folderol"
  },
  {
    "name": "black_joker",
    "unicode": "1F0CF",
    "shortcode": "black_joker",
    "description": "PLAYING CARD BLACK JOKER",
    "category": "folderol"
  },
  {
    "name": "a",
    "unicode": "1F170",
    "shortcode": "a",
    "description": "NEGATIVE SQUARED LATIN CAPITAL LETTER A",
    "category": "folderol"
  },
  {
    "name": "b",
    "unicode": "1F171",
    "shortcode": "b",
    "description": "NEGATIVE SQUARED LATIN CAPITAL LETTER B",
    "category": "folderol"
  },
  {
    "name": "o2",
    "unicode": "1F17E",
    "shortcode": "o2",
    "description": "NEGATIVE SQUARED LATIN CAPITAL LETTER O",
    "category": "folderol"
  },
  {
    "name": "parking",
    "unicode": "1F17F",
    "shortcode": "parking",
    "description": "NEGATIVE SQUARED LATIN CAPITAL LETTER P",
    "category": "folderol"
  },
  {
    "name": "ab",
    "unicode": "1F18E",
    "shortcode": "ab",
    "description": "NEGATIVE SQUARED AB",
    "category": "folderol"
  },
  {
    "name": "cl",
    "unicode": "1F191",
    "shortcode": "cl",
    "description": "SQUARED CL",
    "category": "folderol"
  },
  {
    "name": "cool",
    "unicode": "1F192",
    "shortcode": "cool",
    "description": "SQUARED COOL",
    "category": "folderol"
  },
  {
    "name": "free",
    "unicode": "1F193",
    "shortcode": "free",
    "description": "SQUARED FREE",
    "category": "folderol"
  },
  {
    "name": "id",
    "unicode": "1F194",
    "shortcode": "id",
    "description": "SQUARED ID",
    "category": "folderol"
  },
  {
    "name": "new",
    "unicode": "1F195",
    "shortcode": "new",
    "description": "SQUARED NEW",
    "category": "folderol"
  },
  {
    "name": "ng",
    "unicode": "1F196",
    "shortcode": "ng",
    "description": "SQUARED NG",
    "category": "folderol"
  },
  {
    "name": "ok",
    "unicode": "1F197",
    "shortcode": "ok",
    "description": "SQUARED OK",
    "category": "folderol"
  },
  {
    "name": "sos",
    "unicode": "1F198",
    "shortcode": "sos",
    "description": "SQUARED SOS",
    "category": "folderol"
  },
  {
    "name": "up",
    "unicode": "1F199",
    "shortcode": "up",
    "description": "SQUARED UP WITH EXCLAMATION MARK",
    "category": "folderol"
  },
  {
    "name": "vs",
    "unicode": "1F19A",
    "shortcode": "vs",
    "description": "SQUARED VS",
    "category": "folderol"
  },
  {
    "name": "koko",
    "unicode": "1F201",
    "shortcode": "koko",
    "description": "SQUARED KATAKANA KOKO",
    "category": "folderol"
  },
  {
    "name": "sa",
    "unicode": "1F202",
    "shortcode": "sa",
    "description": "SQUARED KATAKANA SA",
    "category": "folderol"
  },
  {
    "name": "u7121",
    "unicode": "1F21A",
    "shortcode": "u7121",
    "description": "SQUARED CJK UNIFIED IDEOGRAPH-7121",
    "category": "folderol"
  },
  {
    "name": "u6307",
    "unicode": "1F22F",
    "shortcode": "u6307",
    "description": "SQUARED CJK UNIFIED IDEOGRAPH-6307",
    "category": "folderol"
  },
  {
    "name": "u7981",
    "unicode": "1F232",
    "shortcode": "u7981",
    "description": "SQUARED CJK UNIFIED IDEOGRAPH-7981",
    "category": "folderol"
  },
  {
    "name": "u7a7a",
    "unicode": "1F233",
    "shortcode": "u7a7a",
    "description": "SQUARED CJK UNIFIED IDEOGRAPH-7A7A",
    "category": "folderol"
  },
  {
    "name": "u5408",
    "unicode": "1F234",
    "shortcode": "u5408",
    "description": "SQUARED CJK UNIFIED IDEOGRAPH-5408",
    "category": "folderol"
  },
  {
    "name": "u6e80",
    "unicode": "1F235",
    "shortcode": "u6e80",
    "description": "SQUARED CJK UNIFIED IDEOGRAPH-6E80",
    "category": "folderol"
  },
  {
    "name": "u6709",
    "unicode": "1F236",
    "shortcode": "u6709",
    "description": "SQUARED CJK UNIFIED IDEOGRAPH-6709",
    "category": "folderol"
  },
  {
    "name": "u6708",
    "unicode": "1F237",
    "shortcode": "u6708",
    "description": "SQUARED CJK UNIFIED IDEOGRAPH-6708",
    "category": "folderol"
  },
  {
    "name": "u7533",
    "unicode": "1F238",
    "shortcode": "u7533",
    "description": "SQUARED CJK UNIFIED IDEOGRAPH-7533",
    "category": "folderol"
  },
  {
    "name": "u5272",
    "unicode": "1F239",
    "shortcode": "u5272",
    "description": "SQUARED CJK UNIFIED IDEOGRAPH-5272",
    "category": "folderol"
  },
  {
    "name": "u55b6",
    "unicode": "1F23A",
    "shortcode": "u55b6",
    "description": "SQUARED CJK UNIFIED IDEOGRAPH-55B6",
    "category": "folderol"
  },
  {
    "name": "ideograph_advantage",
    "unicode": "1F250",
    "shortcode": "ideograph_advantage",
    "description": "CIRCLED IDEOGRAPH ADVANTAGE",
    "category": "folderol"
  },
  {
    "name": "accept",
    "unicode": "1F251",
    "shortcode": "accept",
    "description": "CIRCLED IDEOGRAPH ACCEPT",
    "category": "folderol"
  },
  {
    "name": "cyclone",
    "unicode": "1F300",
    "shortcode": "cyclone",
    "description": "CYCLONE",
    "category": "thing"
  },
  {
    "name": "foggy",
    "unicode": "1F301",
    "shortcode": "foggy",
    "description": "FOGGY",
    "category": "thing"
  },
  {
    "name": "closed_umbrella",
    "unicode": "1F302",
    "shortcode": "closed_umbrella",
    "description": "CLOSED UMBRELLA",
    "category": "thing"
  },
  {
    "name": "night_with_stars",
    "unicode": "1F303",
    "shortcode": "night_with_stars",
    "description": "NIGHT WITH STARS",
    "category": "thing"
  },
  {
    "name": "sunrise_over_mountains",
    "unicode": "1F304",
    "shortcode": "sunrise_over_mountains",
    "description": "SUNRISE OVER MOUNTAINS",
    "category": "thing"
  },
  {
    "name": "sunrise",
    "unicode": "1F305",
    "shortcode": "sunrise",
    "description": "SUNRISE",
    "category": "thing"
  },
  {
    "name": "city_sunset",
    "unicode": "1F306",
    "shortcode": "city_sunset",
    "description": "CITYSCAPE AT DUSK",
    "category": "thing"
  },
  {
    "name": "city_sunrise",
    "unicode": "1F307",
    "shortcode": "city_sunrise",
    "description": "SUNSET OVER BUILDINGS",
    "category": "thing"
  },
  {
    "name": "rainbow",
    "unicode": "1F308",
    "shortcode": "rainbow",
    "description": "RAINBOW",
    "category": "thing"
  },
  {
    "name": "bridge_at_night",
    "unicode": "1F309",
    "shortcode": "bridge_at_night",
    "description": "BRIDGE AT NIGHT",
    "category": "thing"
  },
  {
    "name": "ocean",
    "unicode": "1F30A",
    "shortcode": "ocean",
    "description": "WATER WAVE",
    "category": "thing"
  },
  {
    "name": "volcano",
    "unicode": "1F30B",
    "shortcode": "volcano",
    "description": "VOLCANO",
    "category": "thing"
  },
  {
    "name": "milky_way",
    "unicode": "1F30C",
    "shortcode": "milky_way",
    "description": "MILKY WAY",
    "category": "thing"
  },
  {
    "name": "earth_africa",
    "unicode": "1F30D",
    "shortcode": "earth_africa",
    "description": "EARTH GLOBE EUROPE-AFRICA",
    "category": "thing"
  },
  {
    "name": "earth_americas",
    "unicode": "1F30E",
    "shortcode": "earth_americas",
    "description": "EARTH GLOBE AMERICAS",
    "category": "thing"
  },
  {
    "name": "earth_asia",
    "unicode": "1F30F",
    "shortcode": "earth_asia",
    "description": "EARTH GLOBE ASIA-AUSTRALIA",
    "category": "thing"
  },
  {
    "name": "globe_with_meridians",
    "unicode": "1F310",
    "shortcode": "globe_with_meridians",
    "description": "GLOBE WITH MERIDIANS",
    "category": "thing"
  },
  {
    "name": "new_moon",
    "unicode": "1F311",
    "shortcode": "new_moon",
    "description": "NEW MOON SYMBOL",
    "category": "thing"
  },
  {
    "name": "waxing_crescent_moon",
    "unicode": "1F312",
    "shortcode": "waxing_crescent_moon",
    "description": "WAXING CRESCENT MOON SYMBOL",
    "category": "thing"
  },
  {
    "name": "first_quarter_moon",
    "unicode": "1F313",
    "shortcode": "first_quarter_moon",
    "description": "FIRST QUARTER MOON SYMBOL",
    "category": "thing"
  },
  {
    "name": "moon",
    "unicode": "1F314",
    "shortcode": "moon",
    "description": "WAXING GIBBOUS MOON SYMBOL",
    "category": "thing"
  },
  {
    "name": "full_moon",
    "unicode": "1F315",
    "shortcode": "full_moon",
    "description": "FULL MOON SYMBOL",
    "category": "thing"
  },
  {
    "name": "waning_gibbous_moon",
    "unicode": "1F316",
    "shortcode": "waning_gibbous_moon",
    "description": "WANING GIBBOUS MOON SYMBOL",
    "category": "thing"
  },
  {
    "name": "last_quarter_moon",
    "unicode": "1F317",
    "shortcode": "last_quarter_moon",
    "description": "LAST QUARTER MOON SYMBOL",
    "category": "thing"
  },
  {
    "name": "waning_crescent_moon",
    "unicode": "1F318",
    "shortcode": "waning_crescent_moon",
    "description": "WANING CRESCENT MOON SYMBOL",
    "category": "thing"
  },
  {
    "name": "crescent_moon",
    "unicode": "1F319",
    "shortcode": "crescent_moon",
    "description": "CRESCENT MOON",
    "category": "thing"
  },
  {
    "name": "new_moon_with_face",
    "unicode": "1F31A",
    "shortcode": "new_moon_with_face",
    "description": "NEW MOON WITH FACE",
    "category": "thing"
  },
  {
    "name": "first_quarter_moon_with_face",
    "unicode": "1F31B",
    "shortcode": "first_quarter_moon_with_face",
    "description": "FIRST QUARTER MOON WITH FACE",
    "category": "thing"
  },
  {
    "name": "last_quarter_moon_with_face",
    "unicode": "1F31C",
    "shortcode": "last_quarter_moon_with_face",
    "description": "LAST QUARTER MOON WITH FACE",
    "category": "thing"
  },
  {
    "name": "full_moon_with_face",
    "unicode": "1F31D",
    "shortcode": "full_moon_with_face",
    "description": "FULL MOON WITH FACE",
    "category": "thing"
  },
  {
    "name": "sun_with_face",
    "unicode": "1F31E",
    "shortcode": "sun_with_face",
    "description": "SUN WITH FACE",
    "category": "thing"
  },
  {
    "name": "star2",
    "unicode": "1F31F",
    "shortcode": "star2",
    "description": "GLOWING STAR",
    "category": "thing"
  },
  {
    "name": "stars",
    "unicode": "1F320",
    "shortcode": "stars",
    "description": "SHOOTING STAR",
    "category": "thing"
  },
  {
    "name": "chestnut",
    "unicode": "1F330",
    "shortcode": "chestnut",
    "description": "CHESTNUT",
    "category": "thing"
  },
  {
    "name": "seedling",
    "unicode": "1F331",
    "shortcode": "seedling",
    "description": "SEEDLING",
    "category": "thing"
  },
  {
    "name": "evergreen_tree",
    "unicode": "1F332",
    "shortcode": "evergreen_tree",
    "description": "EVERGREEN TREE",
    "category": "thing"
  },
  {
    "name": "deciduous_tree",
    "unicode": "1F333",
    "shortcode": "deciduous_tree",
    "description": "DECIDUOUS TREE",
    "category": "thing"
  },
  {
    "name": "palm_tree",
    "unicode": "1F334",
    "shortcode": "palm_tree",
    "description": "PALM TREE",
    "category": "thing"
  },
  {
    "name": "cactus",
    "unicode": "1F335",
    "shortcode": "cactus",
    "description": "CACTUS",
    "category": "thing"
  },
  {
    "name": "tulip",
    "unicode": "1F337",
    "shortcode": "tulip",
    "description": "TULIP",
    "category": "thing"
  },
  {
    "name": "cherry_blossom",
    "unicode": "1F338",
    "shortcode": "cherry_blossom",
    "description": "CHERRY BLOSSOM",
    "category": "thing"
  },
  {
    "name": "rose",
    "unicode": "1F339",
    "shortcode": "rose",
    "description": "ROSE",
    "category": "thing"
  },
  {
    "name": "hibiscus",
    "unicode": "1F33A",
    "shortcode": "hibiscus",
    "description": "HIBISCUS",
    "category": "thing"
  },
  {
    "name": "sunflower",
    "unicode": "1F33B",
    "shortcode": "sunflower",
    "description": "SUNFLOWER",
    "category": "thing"
  },
  {
    "name": "blossom",
    "unicode": "1F33C",
    "shortcode": "blossom",
    "description": "BLOSSOM",
    "category": "thing"
  },
  {
    "name": "corn",
    "unicode": "1F33D",
    "shortcode": "corn",
    "description": "EAR OF MAIZE",
    "category": "thing"
  },
  {
    "name": "ear_of_rice",
    "unicode": "1F33E",
    "shortcode": "ear_of_rice",
    "description": "EAR OF RICE",
    "category": "thing"
  },
  {
    "name": "herb",
    "unicode": "1F33F",
    "shortcode": "herb",
    "description": "HERB",
    "category": "thing"
  },
  {
    "name": "four_leaf_clover",
    "unicode": "1F340",
    "shortcode": "four_leaf_clover",
    "description": "FOUR LEAF CLOVER",
    "category": "thing"
  },
  {
    "name": "maple_leaf",
    "unicode": "1F341",
    "shortcode": "maple_leaf",
    "description": "MAPLE LEAF",
    "category": "thing"
  },
  {
    "name": "fallen_leaf",
    "unicode": "1F342",
    "shortcode": "fallen_leaf",
    "description": "FALLEN LEAF",
    "category": "thing"
  },
  {
    "name": "leaves",
    "unicode": "1F343",
    "shortcode": "leaves",
    "description": "LEAF FLUTTERING IN WIND",
    "category": "thing"
  },
  {
    "name": "mushroom",
    "unicode": "1F344",
    "shortcode": "mushroom",
    "description": "MUSHROOM",
    "category": "food"
  },
  {
    "name": "tomato",
    "unicode": "1F345",
    "shortcode": "tomato",
    "description": "TOMATO",
    "category": "food"
  },
  {
    "name": "eggplant",
    "unicode": "1F346",
    "shortcode": "eggplant",
    "description": "AUBERGINE",
    "category": "food"
  },
  {
    "name": "grapes",
    "unicode": "1F347",
    "shortcode": "grapes",
    "description": "GRAPES",
    "category": "food"
  },
  {
    "name": "melon",
    "unicode": "1F348",
    "shortcode": "melon",
    "description": "MELON",
    "category": "food"
  },
  {
    "name": "watermelon",
    "unicode": "1F349",
    "shortcode": "watermelon",
    "description": "WATERMELON",
    "category": "food"
  },
  {
    "name": "tangerine",
    "unicode": "1F34A",
    "shortcode": "tangerine",
    "description": "TANGERINE",
    "category": "food"
  },
  {
    "name": "lemon",
    "unicode": "1F34B",
    "shortcode": "lemon",
    "description": "LEMON",
    "category": "food"
  },
  {
    "name": "banana",
    "unicode": "1F34C",
    "shortcode": "banana",
    "description": "BANANA",
    "category": "food"
  },
  {
    "name": "pineapple",
    "unicode": "1F34D",
    "shortcode": "pineapple",
    "description": "PINEAPPLE",
    "category": "food"
  },
  {
    "name": "apple",
    "unicode": "1F34E",
    "shortcode": "apple",
    "description": "RED APPLE",
    "category": "food"
  },
  {
    "name": "green_apple",
    "unicode": "1F34F",
    "shortcode": "green_apple",
    "description": "GREEN APPLE",
    "category": "food"
  },
  {
    "name": "pear",
    "unicode": "1F350",
    "shortcode": "pear",
    "description": "PEAR",
    "category": "food"
  },
  {
    "name": "peach",
    "unicode": "1F351",
    "shortcode": "peach",
    "description": "PEACH",
    "category": "food"
  },
  {
    "name": "cherries",
    "unicode": "1F352",
    "shortcode": "cherries",
    "description": "CHERRIES",
    "category": "food"
  },
  {
    "name": "strawberry",
    "unicode": "1F353",
    "shortcode": "strawberry",
    "description": "STRAWBERRY",
    "category": "food"
  },
  {
    "name": "hamburger",
    "unicode": "1F354",
    "shortcode": "hamburger",
    "description": "HAMBURGER",
    "category": "food"
  },
  {
    "name": "pizza",
    "unicode": "1F355",
    "shortcode": "pizza",
    "description": "SLICE OF PIZZA",
    "category": "food"
  },
  {
    "name": "meat_on_bone",
    "unicode": "1F356",
    "shortcode": "meat_on_bone",
    "description": "MEAT ON BONE",
    "category": "food"
  },
  {
    "name": "poultry_leg",
    "unicode": "1F357",
    "shortcode": "poultry_leg",
    "description": "POULTRY LEG",
    "category": "food"
  },
  {
    "name": "rice_cracker",
    "unicode": "1F358",
    "shortcode": "rice_cracker",
    "description": "RICE CRACKER",
    "category": "food"
  },
  {
    "name": "rice_ball",
    "unicode": "1F359",
    "shortcode": "rice_ball",
    "description": "RICE BALL",
    "category": "food"
  },
  {
    "name": "rice",
    "unicode": "1F35A",
    "shortcode": "rice",
    "description": "COOKED RICE",
    "category": "food"
  },
  {
    "name": "curry",
    "unicode": "1F35B",
    "shortcode": "curry",
    "description": "CURRY AND RICE",
    "category": "food"
  },
  {
    "name": "ramen",
    "unicode": "1F35C",
    "shortcode": "ramen",
    "description": "STEAMING BOWL",
    "category": "food"
  },
  {
    "name": "spaghetti",
    "unicode": "1F35D",
    "shortcode": "spaghetti",
    "description": "SPAGHETTI",
    "category": "food"
  },
  {
    "name": "bread",
    "unicode": "1F35E",
    "shortcode": "bread",
    "description": "BREAD",
    "category": "food"
  },
  {
    "name": "fries",
    "unicode": "1F35F",
    "shortcode": "fries",
    "description": "FRENCH FRIES",
    "category": "food"
  },
  {
    "name": "sweet_potato",
    "unicode": "1F360",
    "shortcode": "sweet_potato",
    "description": "ROASTED SWEET POTATO",
    "category": "food"
  },
  {
    "name": "dango",
    "unicode": "1F361",
    "shortcode": "dango",
    "description": "DANGO",
    "category": "food"
  },
  {
    "name": "oden",
    "unicode": "1F362",
    "shortcode": "oden",
    "description": "ODEN",
    "category": "food"
  },
  {
    "name": "sushi",
    "unicode": "1F363",
    "shortcode": "sushi",
    "description": "SUSHI",
    "category": "food"
  },
  {
    "name": "fried_shrimp",
    "unicode": "1F364",
    "shortcode": "fried_shrimp",
    "description": "FRIED SHRIMP",
    "category": "food"
  },
  {
    "name": "fish_cake",
    "unicode": "1F365",
    "shortcode": "fish_cake",
    "description": "FISH CAKE WITH SWIRL DESIGN",
    "category": "food"
  },
  {
    "name": "icecream",
    "unicode": "1F366",
    "shortcode": "icecream",
    "description": "SOFT ICE CREAM",
    "category": "food"
  },
  {
    "name": "shaved_ice",
    "unicode": "1F367",
    "shortcode": "shaved_ice",
    "description": "SHAVED ICE",
    "category": "food"
  },
  {
    "name": "ice_cream",
    "unicode": "1F368",
    "shortcode": "ice_cream",
    "description": "ICE CREAM",
    "category": "food"
  },
  {
    "name": "doughnut",
    "unicode": "1F369",
    "shortcode": "doughnut",
    "description": "DOUGHNUT",
    "category": "food"
  },
  {
    "name": "cookie",
    "unicode": "1F36A",
    "shortcode": "cookie",
    "description": "COOKIE",
    "category": "food"
  },
  {
    "name": "chocolate_bar",
    "unicode": "1F36B",
    "shortcode": "chocolate_bar",
    "description": "CHOCOLATE BAR",
    "category": "food"
  },
  {
    "name": "candy",
    "unicode": "1F36C",
    "shortcode": "candy",
    "description": "CANDY",
    "category": "food"
  },
  {
    "name": "lollipop",
    "unicode": "1F36D",
    "shortcode": "lollipop",
    "description": "LOLLIPOP",
    "category": "food"
  },
  {
    "name": "custard",
    "unicode": "1F36E",
    "shortcode": "custard",
    "description": "CUSTARD",
    "category": "food"
  },
  {
    "name": "honey_pot",
    "unicode": "1F36F",
    "shortcode": "honey_pot",
    "description": "HONEY POT",
    "category": "food"
  },
  {
    "name": "cake",
    "unicode": "1F370",
    "shortcode": "cake",
    "description": "SHORTCAKE",
    "category": "food"
  },
  {
    "name": "bento",
    "unicode": "1F371",
    "shortcode": "bento",
    "description": "BENTO BOX",
    "category": "food"
  },
  {
    "name": "stew",
    "unicode": "1F372",
    "shortcode": "stew",
    "description": "POT OF FOOD",
    "category": "food"
  },
  {
    "name": "egg",
    "unicode": "1F373",
    "shortcode": "egg",
    "description": "COOKING",
    "category": "food"
  },
  {
    "name": "fork_and_knife",
    "unicode": "1F374",
    "shortcode": "fork_and_knife",
    "description": "FORK AND KNIFE",
    "category": "food"
  },
  {
    "name": "tea",
    "unicode": "1F375",
    "shortcode": "tea",
    "description": "TEACUP WITHOUT HANDLE",
    "category": "food"
  },
  {
    "name": "sake",
    "unicode": "1F376",
    "shortcode": "sake",
    "description": "SAKE BOTTLE AND CUP",
    "category": "food"
  },
  {
    "name": "wine_glass",
    "unicode": "1F377",
    "shortcode": "wine_glass",
    "description": "WINE GLASS",
    "category": "food"
  },
  {
    "name": "cocktail",
    "unicode": "1F378",
    "shortcode": "cocktail",
    "description": "COCKTAIL GLASS",
    "category": "food"
  },
  {
    "name": "tropical_drink",
    "unicode": "1F379",
    "shortcode": "tropical_drink",
    "description": "TROPICAL DRINK",
    "category": "food"
  },
  {
    "name": "beer",
    "unicode": "1F37A",
    "shortcode": "beer",
    "description": "BEER MUG",
    "category": "food"
  },
  {
    "name": "beers",
    "unicode": "1F37B",
    "shortcode": "beers",
    "description": "CLINKING BEER MUGS",
    "category": "food"
  },
  {
    "name": "baby_bottle",
    "unicode": "1F37C",
    "shortcode": "baby_bottle",
    "description": "BABY BOTTLE",
    "category": "food"
  },
  {
    "name": "ribbon",
    "unicode": "1F380",
    "shortcode": "ribbon",
    "description": "RIBBON",
    "category": "thing"
  },
  {
    "name": "gift",
    "unicode": "1F381",
    "shortcode": "gift",
    "description": "WRAPPED PRESENT",
    "category": "thing"
  },
  {
    "name": "birthday",
    "unicode": "1F382",
    "shortcode": "birthday",
    "description": "BIRTHDAY CAKE",
    "category": "thing"
  },
  {
    "name": "jack_o_lantern",
    "unicode": "1F383",
    "shortcode": "jack_o_lantern",
    "description": "JACK-O-LANTERN",
    "category": "thing"
  },
  {
    "name": "christmas_tree",
    "unicode": "1F384",
    "shortcode": "christmas_tree",
    "description": "CHRISTMAS TREE",
    "category": "thing"
  },
  {
    "name": "santa",
    "unicode": "1F385",
    "shortcode": "santa",
    "description": "FATHER CHRISTMAS",
    "category": "thing"
  },
  {
    "name": "fireworks",
    "unicode": "1F386",
    "shortcode": "fireworks",
    "description": "FIREWORKS",
    "category": "thing"
  },
  {
    "name": "sparkler",
    "unicode": "1F387",
    "shortcode": "sparkler",
    "description": "FIREWORK SPARKLER",
    "category": "thing"
  },
  {
    "name": "balloon",
    "unicode": "1F388",
    "shortcode": "balloon",
    "description": "BALLOON",
    "category": "thing"
  },
  {
    "name": "tada",
    "unicode": "1F389",
    "shortcode": "tada",
    "description": "PARTY POPPER",
    "category": "thing"
  },
  {
    "name": "confetti_ball",
    "unicode": "1F38A",
    "shortcode": "confetti_ball",
    "description": "CONFETTI BALL",
    "category": "thing"
  },
  {
    "name": "tanabata_tree",
    "unicode": "1F38B",
    "shortcode": "tanabata_tree",
    "description": "TANABATA TREE",
    "category": "thing"
  },
  {
    "name": "crossed_flags",
    "unicode": "1F38C",
    "shortcode": "crossed_flags",
    "description": "CROSSED FLAGS",
    "category": "thing"
  },
  {
    "name": "bamboo",
    "unicode": "1F38D",
    "shortcode": "bamboo",
    "description": "PINE DECORATION",
    "category": "thing"
  },
  {
    "name": "dolls",
    "unicode": "1F38E",
    "shortcode": "dolls",
    "description": "JAPANESE DOLLS",
    "category": "thing"
  },
  {
    "name": "flags",
    "unicode": "1F38F",
    "shortcode": "flags",
    "description": "CARP STREAMER",
    "category": "thing"
  },
  {
    "name": "wind_chime",
    "unicode": "1F390",
    "shortcode": "wind_chime",
    "description": "WIND CHIME",
    "category": "thing"
  },
  {
    "name": "rice_scene",
    "unicode": "1F391",
    "shortcode": "rice_scene",
    "description": "MOON VIEWING CEREMONY",
    "category": "thing"
  },
  {
    "name": "school_satchel",
    "unicode": "1F392",
    "shortcode": "school_satchel",
    "description": "SCHOOL SATCHEL",
    "category": "thing"
  },
  {
    "name": "mortar_board",
    "unicode": "1F393",
    "shortcode": "mortar_board",
    "description": "GRADUATION CAP",
    "category": "thing"
  },
  {
    "name": "carousel_horse",
    "unicode": "1F3A0",
    "shortcode": "carousel_horse",
    "description": "CAROUSEL HORSE",
    "category": "thing"
  },
  {
    "name": "ferris_wheel",
    "unicode": "1F3A1",
    "shortcode": "ferris_wheel",
    "description": "FERRIS WHEEL",
    "category": "thing"
  },
  {
    "name": "roller_coaster",
    "unicode": "1F3A2",
    "shortcode": "roller_coaster",
    "description": "ROLLER COASTER",
    "category": "thing"
  },
  {
    "name": "fishing_pole_and_fish",
    "unicode": "1F3A3",
    "shortcode": "fishing_pole_and_fish",
    "description": "FISHING POLE AND FISH",
    "category": "thing"
  },
  {
    "name": "microphone",
    "unicode": "1F3A4",
    "shortcode": "microphone",
    "description": "MICROPHONE",
    "category": "thing"
  },
  {
    "name": "movie_camera",
    "unicode": "1F3A5",
    "shortcode": "movie_camera",
    "description": "MOVIE CAMERA",
    "category": "thing"
  },
  {
    "name": "cinema",
    "unicode": "1F3A6",
    "shortcode": "cinema",
    "description": "CINEMA",
    "category": "thing"
  },
  {
    "name": "headphones",
    "unicode": "1F3A7",
    "shortcode": "headphones",
    "description": "HEADPHONE",
    "category": "thing"
  },
  {
    "name": "art",
    "unicode": "1F3A8",
    "shortcode": "art",
    "description": "ARTIST PALETTE",
    "category": "thing"
  },
  {
    "name": "tophat",
    "unicode": "1F3A9",
    "shortcode": "tophat",
    "description": "TOP HAT",
    "category": "thing"
  },
  {
    "name": "circus_tent",
    "unicode": "1F3AA",
    "shortcode": "circus_tent",
    "description": "CIRCUS TENT",
    "category": "thing"
  },
  {
    "name": "ticket",
    "unicode": "1F3AB",
    "shortcode": "ticket",
    "description": "TICKET",
    "category": "thing"
  },
  {
    "name": "clapper",
    "unicode": "1F3AC",
    "shortcode": "clapper",
    "description": "CLAPPER BOARD",
    "category": "thing"
  },
  {
    "name": "performing_arts",
    "unicode": "1F3AD",
    "shortcode": "performing_arts",
    "description": "PERFORMING ARTS",
    "category": "thing"
  },
  {
    "name": "video_game",
    "unicode": "1F3AE",
    "shortcode": "video_game",
    "description": "VIDEO GAME",
    "category": "thing"
  },
  {
    "name": "dart",
    "unicode": "1F3AF",
    "shortcode": "dart",
    "description": "DIRECT HIT",
    "category": "thing"
  },
  {
    "name": "slot_machine",
    "unicode": "1F3B0",
    "shortcode": "slot_machine",
    "description": "SLOT MACHINE",
    "category": "thing"
  },
  {
    "name": "8ball",
    "unicode": "1F3B1",
    "shortcode": "8ball",
    "description": "BILLIARDS",
    "category": "thing"
  },
  {
    "name": "game_die",
    "unicode": "1F3B2",
    "shortcode": "game_die",
    "description": "GAME DIE",
    "category": "thing"
  },
  {
    "name": "bowling",
    "unicode": "1F3B3",
    "shortcode": "bowling",
    "description": "BOWLING",
    "category": "thing"
  },
  {
    "name": "flower_playing_cards",
    "unicode": "1F3B4",
    "shortcode": "flower_playing_cards",
    "description": "FLOWER PLAYING CARDS",
    "category": "thing"
  },
  {
    "name": "musical_note",
    "unicode": "1F3B5",
    "shortcode": "musical_note",
    "description": "MUSICAL NOTE",
    "category": "thing"
  },
  {
    "name": "notes",
    "unicode": "1F3B6",
    "shortcode": "notes",
    "description": "MULTIPLE MUSICAL NOTES",
    "category": "thing"
  },
  {
    "name": "saxophone",
    "unicode": "1F3B7",
    "shortcode": "saxophone",
    "description": "SAXOPHONE",
    "category": "thing"
  },
  {
    "name": "guitar",
    "unicode": "1F3B8",
    "shortcode": "guitar",
    "description": "GUITAR",
    "category": "thing"
  },
  {
    "name": "musical_keyboard",
    "unicode": "1F3B9",
    "shortcode": "musical_keyboard",
    "description": "MUSICAL KEYBOARD",
    "category": "thing"
  },
  {
    "name": "trumpet",
    "unicode": "1F3BA",
    "shortcode": "trumpet",
    "description": "TRUMPET",
    "category": "thing"
  },
  {
    "name": "violin",
    "unicode": "1F3BB",
    "shortcode": "violin",
    "description": "VIOLIN",
    "category": "thing"
  },
  {
    "name": "musical_score",
    "unicode": "1F3BC",
    "shortcode": "musical_score",
    "description": "MUSICAL SCORE",
    "category": "thing"
  },
  {
    "name": "running_shirt_with_sash",
    "unicode": "1F3BD",
    "shortcode": "running_shirt_with_sash",
    "description": "RUNNING SHIRT WITH SASH",
    "category": "thing"
  },
  {
    "name": "tennis",
    "unicode": "1F3BE",
    "shortcode": "tennis",
    "description": "TENNIS RACQUET AND BALL",
    "category": "thing"
  },
  {
    "name": "ski",
    "unicode": "1F3BF",
    "shortcode": "ski",
    "description": "SKI AND SKI BOOT",
    "category": "thing"
  },
  {
    "name": "basketball",
    "unicode": "1F3C0",
    "shortcode": "basketball",
    "description": "BASKETBALL AND HOOP",
    "category": "thing"
  },
  {
    "name": "checkered_flag",
    "unicode": "1F3C1",
    "shortcode": "checkered_flag",
    "description": "CHEQUERED FLAG",
    "category": "thing"
  },
  {
    "name": "snowboarder",
    "unicode": "1F3C2",
    "shortcode": "snowboarder",
    "description": "SNOWBOARDER",
    "category": "people"
  },
  {
    "name": "runner",
    "unicode": "1F3C3",
    "shortcode": "runner",
    "description": "RUNNER",
    "category": "people"
  },
  {
    "name": "surfer",
    "unicode": "1F3C4",
    "shortcode": "surfer",
    "description": "SURFER",
    "category": "people"
  },
  {
    "name": "trophy",
    "unicode": "1F3C6",
    "shortcode": "trophy",
    "description": "TROPHY",
    "category": "people"
  },
  {
    "name": "horse_racing",
    "unicode": "1F3C7",
    "shortcode": "horse_racing",
    "description": "HORSE RACING",
    "category": "people"
  },
  {
    "name": "football",
    "unicode": "1F3C8",
    "shortcode": "football",
    "description": "AMERICAN FOOTBALL",
    "category": "people"
  },
  {
    "name": "rugby_football",
    "unicode": "1F3C9",
    "shortcode": "rugby_football",
    "description": "RUGBY FOOTBALL",
    "category": "people"
  },
  {
    "name": "swimmer",
    "unicode": "1F3CA",
    "shortcode": "swimmer",
    "description": "SWIMMER",
    "category": "people"
  },
  {
    "name": "house",
    "unicode": "1F3E0",
    "shortcode": "house",
    "description": "HOUSE BUILDING",
    "category": "travel"
  },
  {
    "name": "house_with_garden",
    "unicode": "1F3E1",
    "shortcode": "house_with_garden",
    "description": "HOUSE WITH GARDEN",
    "category": "travel"
  },
  {
    "name": "office",
    "unicode": "1F3E2",
    "shortcode": "office",
    "description": "OFFICE BUILDING",
    "category": "travel"
  },
  {
    "name": "post_office",
    "unicode": "1F3E3",
    "shortcode": "post_office",
    "description": "JAPANESE POST OFFICE",
    "category": "travel"
  },
  {
    "name": "european_post_office",
    "unicode": "1F3E4",
    "shortcode": "european_post_office",
    "description": "EUROPEAN POST OFFICE",
    "category": "travel"
  },
  {
    "name": "hospital",
    "unicode": "1F3E5",
    "shortcode": "hospital",
    "description": "HOSPITAL",
    "category": "travel"
  },
  {
    "name": "bank",
    "unicode": "1F3E6",
    "shortcode": "bank",
    "description": "BANK",
    "category": "travel"
  },
  {
    "name": "atm",
    "unicode": "1F3E7",
    "shortcode": "atm",
    "description": "AUTOMATED TELLER MACHINE",
    "category": "travel"
  },
  {
    "name": "hotel",
    "unicode": "1F3E8",
    "shortcode": "hotel",
    "description": "HOTEL",
    "category": "travel"
  },
  {
    "name": "love_hotel",
    "unicode": "1F3E9",
    "shortcode": "love_hotel",
    "description": "LOVE HOTEL",
    "category": "travel"
  },
  {
    "name": "convenience_store",
    "unicode": "1F3EA",
    "shortcode": "convenience_store",
    "description": "CONVENIENCE STORE",
    "category": "travel"
  },
  {
    "name": "school",
    "unicode": "1F3EB",
    "shortcode": "school",
    "description": "SCHOOL",
    "category": "travel"
  },
  {
    "name": "department_store",
    "unicode": "1F3EC",
    "shortcode": "department_store",
    "description": "DEPARTMENT STORE",
    "category": "travel"
  },
  {
    "name": "factory",
    "unicode": "1F3ED",
    "shortcode": "factory",
    "description": "FACTORY",
    "category": "travel"
  },
  {
    "name": "izakaya_lantern",
    "unicode": "1F3EE",
    "shortcode": "izakaya_lantern",
    "description": "IZAKAYA LANTERN",
    "category": "travel"
  },
  {
    "name": "japanese_castle",
    "unicode": "1F3EF",
    "shortcode": "japanese_castle",
    "description": "JAPANESE CASTLE",
    "category": "travel"
  },
  {
    "name": "european_castle",
    "unicode": "1F3F0",
    "shortcode": "european_castle",
    "description": "EUROPEAN CASTLE",
    "category": "travel"
  },
  {
    "name": "rat",
    "unicode": "1F400",
    "shortcode": "rat",
    "description": "RAT",
    "category": "animal"
  },
  {
    "name": "mouse2",
    "unicode": "1F401",
    "shortcode": "mouse2",
    "description": "MOUSE",
    "category": "animal"
  },
  {
    "name": "ox",
    "unicode": "1F402",
    "shortcode": "ox",
    "description": "OX",
    "category": "animal"
  },
  {
    "name": "water_buffalo",
    "unicode": "1F403",
    "shortcode": "water_buffalo",
    "description": "WATER BUFFALO",
    "category": "animal"
  },
  {
    "name": "cow2",
    "unicode": "1F404",
    "shortcode": "cow2",
    "description": "COW",
    "category": "animal"
  },
  {
    "name": "tiger2",
    "unicode": "1F405",
    "shortcode": "tiger2",
    "description": "TIGER",
    "category": "animal"
  },
  {
    "name": "leopard",
    "unicode": "1F406",
    "shortcode": "leopard",
    "description": "LEOPARD",
    "category": "animal"
  },
  {
    "name": "rabbit2",
    "unicode": "1F407",
    "shortcode": "rabbit2",
    "description": "RABBIT",
    "category": "animal"
  },
  {
    "name": "cat2",
    "unicode": "1F408",
    "shortcode": "cat2",
    "description": "CAT",
    "category": "animal"
  },
  {
    "name": "dragon",
    "unicode": "1F409",
    "shortcode": "dragon",
    "description": "DRAGON",
    "category": "animal"
  },
  {
    "name": "crocodile",
    "unicode": "1F40A",
    "shortcode": "crocodile",
    "description": "CROCODILE",
    "category": "animal"
  },
  {
    "name": "whale2",
    "unicode": "1F40B",
    "shortcode": "whale2",
    "description": "WHALE",
    "category": "animal"
  },
  {
    "name": "snail",
    "unicode": "1F40C",
    "shortcode": "snail",
    "description": "SNAIL",
    "category": "animal"
  },
  {
    "name": "snake",
    "unicode": "1F40D",
    "shortcode": "snake",
    "description": "SNAKE",
    "category": "animal"
  },
  {
    "name": "racehorse",
    "unicode": "1F40E",
    "shortcode": "racehorse",
    "description": "HORSE",
    "category": "animal"
  },
  {
    "name": "ram",
    "unicode": "1F40F",
    "shortcode": "ram",
    "description": "RAM",
    "category": "animal"
  },
  {
    "name": "goat",
    "unicode": "1F410",
    "shortcode": "goat",
    "description": "GOAT",
    "category": "animal"
  },
  {
    "name": "sheep",
    "unicode": "1F411",
    "shortcode": "sheep",
    "description": "SHEEP",
    "category": "animal"
  },
  {
    "name": "monkey",
    "unicode": "1F412",
    "shortcode": "monkey",
    "description": "MONKEY",
    "category": "animal"
  },
  {
    "name": "rooster",
    "unicode": "1F413",
    "shortcode": "rooster",
    "description": "ROOSTER",
    "category": "animal"
  },
  {
    "name": "chicken",
    "unicode": "1F414",
    "shortcode": "chicken",
    "description": "CHICKEN",
    "category": "animal"
  },
  {
    "name": "dog2",
    "unicode": "1F415",
    "shortcode": "dog2",
    "description": "DOG",
    "category": "animal"
  },
  {
    "name": "pig2",
    "unicode": "1F416",
    "shortcode": "pig2",
    "description": "PIG",
    "category": "animal"
  },
  {
    "name": "boar",
    "unicode": "1F417",
    "shortcode": "boar",
    "description": "BOAR",
    "category": "animal"
  },
  {
    "name": "elephant",
    "unicode": "1F418",
    "shortcode": "elephant",
    "description": "ELEPHANT",
    "category": "animal"
  },
  {
    "name": "octopus",
    "unicode": "1F419",
    "shortcode": "octopus",
    "description": "OCTOPUS",
    "category": "animal"
  },
  {
    "name": "shell",
    "unicode": "1F41A",
    "shortcode": "shell",
    "description": "SPIRAL SHELL",
    "category": "animal"
  },
  {
    "name": "bug",
    "unicode": "1F41B",
    "shortcode": "bug",
    "description": "BUG",
    "category": "animal"
  },
  {
    "name": "ant",
    "unicode": "1F41C",
    "shortcode": "ant",
    "description": "ANT",
    "category": "animal"
  },
  {
    "name": "bee",
    "unicode": "1F41D",
    "shortcode": "bee",
    "description": "HONEYBEE",
    "category": "animal"
  },
  {
    "name": "beetle",
    "unicode": "1F41E",
    "shortcode": "beetle",
    "description": "LADY BEETLE",
    "category": "animal"
  },
  {
    "name": "fish",
    "unicode": "1F41F",
    "shortcode": "fish",
    "description": "FISH",
    "category": "animal"
  },
  {
    "name": "tropical_fish",
    "unicode": "1F420",
    "shortcode": "tropical_fish",
    "description": "TROPICAL FISH",
    "category": "animal"
  },
  {
    "name": "blowfish",
    "unicode": "1F421",
    "shortcode": "blowfish",
    "description": "BLOWFISH",
    "category": "animal"
  },
  {
    "name": "turtle",
    "unicode": "1F422",
    "shortcode": "turtle",
    "description": "TURTLE",
    "category": "animal"
  },
  {
    "name": "hatching_chick",
    "unicode": "1F423",
    "shortcode": "hatching_chick",
    "description": "HATCHING CHICK",
    "category": "animal"
  },
  {
    "name": "baby_chick",
    "unicode": "1F424",
    "shortcode": "baby_chick",
    "description": "BABY CHICK",
    "category": "animal"
  },
  {
    "name": "hatched_chick",
    "unicode": "1F425",
    "shortcode": "hatched_chick",
    "description": "FRONT-FACING BABY CHICK",
    "category": "animal"
  },
  {
    "name": "bird",
    "unicode": "1F426",
    "shortcode": "bird",
    "description": "BIRD",
    "category": "animal"
  },
  {
    "name": "penguin",
    "unicode": "1F427",
    "shortcode": "penguin",
    "description": "PENGUIN",
    "category": "animal"
  },
  {
    "name": "koala",
    "unicode": "1F428",
    "shortcode": "koala",
    "description": "KOALA",
    "category": "animal"
  },
  {
    "name": "poodle",
    "unicode": "1F429",
    "shortcode": "poodle",
    "description": "POODLE",
    "category": "animal"
  },
  {
    "name": "dromedary_camel",
    "unicode": "1F42A",
    "shortcode": "dromedary_camel",
    "description": "DROMEDARY CAMEL",
    "category": "animal"
  },
  {
    "name": "camel",
    "unicode": "1F42B",
    "shortcode": "camel",
    "description": "BACTRIAN CAMEL",
    "category": "animal"
  },
  {
    "name": "dolphin",
    "unicode": "1F42C",
    "shortcode": "dolphin",
    "description": "DOLPHIN",
    "category": "animal"
  },
  {
    "name": "mouse",
    "unicode": "1F42D",
    "shortcode": "mouse",
    "description": "MOUSE FACE",
    "category": "animal"
  },
  {
    "name": "cow",
    "unicode": "1F42E",
    "shortcode": "cow",
    "description": "COW FACE",
    "category": "animal"
  },
  {
    "name": "tiger",
    "unicode": "1F42F",
    "shortcode": "tiger",
    "description": "TIGER FACE",
    "category": "animal"
  },
  {
    "name": "rabbit",
    "unicode": "1F430",
    "shortcode": "rabbit",
    "description": "RABBIT FACE",
    "category": "animal"
  },
  {
    "name": "cat",
    "unicode": "1F431",
    "shortcode": "cat",
    "description": "CAT FACE",
    "category": "animal"
  },
  {
    "name": "dragon_face",
    "unicode": "1F432",
    "shortcode": "dragon_face",
    "description": "DRAGON FACE",
    "category": "animal"
  },
  {
    "name": "whale",
    "unicode": "1F433",
    "shortcode": "whale",
    "description": "SPOUTING WHALE",
    "category": "animal"
  },
  {
    "name": "horse",
    "unicode": "1F434",
    "shortcode": "horse",
    "description": "HORSE FACE",
    "category": "animal"
  },
  {
    "name": "monkey_face",
    "unicode": "1F435",
    "shortcode": "monkey_face",
    "description": "MONKEY FACE",
    "category": "animal"
  },
  {
    "name": "dog",
    "unicode": "1F436",
    "shortcode": "dog",
    "description": "DOG FACE",
    "category": "animal"
  },
  {
    "name": "pig",
    "unicode": "1F437",
    "shortcode": "pig",
    "description": "PIG FACE",
    "category": "animal"
  },
  {
    "name": "frog",
    "unicode": "1F438",
    "shortcode": "frog",
    "description": "FROG FACE",
    "category": "animal"
  },
  {
    "name": "hamster",
    "unicode": "1F439",
    "shortcode": "hamster",
    "description": "HAMSTER FACE",
    "category": "animal"
  },
  {
    "name": "wolf",
    "unicode": "1F43A",
    "shortcode": "wolf",
    "description": "WOLF FACE",
    "category": "animal"
  },
  {
    "name": "bear",
    "unicode": "1F43B",
    "shortcode": "bear",
    "description": "BEAR FACE",
    "category": "animal"
  },
  {
    "name": "panda_face",
    "unicode": "1F43C",
    "shortcode": "panda_face",
    "description": "PANDA FACE",
    "category": "animal"
  },
  {
    "name": "pig_nose",
    "unicode": "1F43D",
    "shortcode": "pig_nose",
    "description": "PIG NOSE",
    "category": "animal"
  },
  {
    "name": "feet",
    "unicode": "1F43E",
    "shortcode": "feet",
    "description": "PAW PRINTS",
    "category": "people"
  },
  {
    "name": "eyes",
    "unicode": "1F440",
    "shortcode": "eyes",
    "description": "EYES",
    "category": "people"
  },
  {
    "name": "ear",
    "unicode": "1F442",
    "shortcode": "ear",
    "description": "EAR",
    "category": "people"
  },
  {
    "name": "nose",
    "unicode": "1F443",
    "shortcode": "nose",
    "description": "NOSE",
    "category": "people"
  },
  {
    "name": "lips",
    "unicode": "1F444",
    "shortcode": "lips",
    "description": "MOUTH",
    "category": "people"
  },
  {
    "name": "tongue",
    "unicode": "1F445",
    "shortcode": "tongue",
    "description": "TONGUE",
    "category": "people"
  },
  {
    "name": "point_up_2",
    "unicode": "1F446",
    "shortcode": "point_up_2",
    "description": "WHITE UP POINTING BACKHAND INDEX",
    "category": "people"
  },
  {
    "name": "point_down",
    "unicode": "1F447",
    "shortcode": "point_down",
    "description": "WHITE DOWN POINTING BACKHAND INDEX",
    "category": "people"
  },
  {
    "name": "point_left",
    "unicode": "1F448",
    "shortcode": "point_left",
    "description": "WHITE LEFT POINTING BACKHAND INDEX",
    "category": "people"
  },
  {
    "name": "point_right",
    "unicode": "1F449",
    "shortcode": "point_right",
    "description": "WHITE RIGHT POINTING BACKHAND INDEX",
    "category": "people"
  },
  {
    "name": "facepunch",
    "unicode": "1F44A",
    "shortcode": "facepunch",
    "description": "FISTED HAND SIGN",
    "category": "people"
  },
  {
    "name": "wave",
    "unicode": "1F44B",
    "shortcode": "wave",
    "description": "WAVING HAND SIGN",
    "category": "people"
  },
  {
    "name": "ok_hand",
    "unicode": "1F44C",
    "shortcode": "ok_hand",
    "description": "OK HAND SIGN",
    "category": "people"
  },
  {
    "name": "+1",
    "unicode": "1F44D",
    "shortcode": "plus1",
    "description": "THUMBS UP SIGN",
    "category": "people"
  },
  {
    "name": "-1",
    "unicode": "1F44E",
    "shortcode": "-1",
    "description": "THUMBS DOWN SIGN",
    "category": "people"
  },
  {
    "name": "clap",
    "unicode": "1F44F",
    "shortcode": "clap",
    "description": "CLAPPING HANDS SIGN",
    "category": "people"
  },
  {
    "name": "open_hands",
    "unicode": "1F450",
    "shortcode": "open_hands",
    "description": "OPEN HANDS SIGN",
    "category": "people"
  },
  {
    "name": "crown",
    "unicode": "1F451",
    "shortcode": "crown",
    "description": "CROWN",
    "category": "people"
  },
  {
    "name": "womans_hat",
    "unicode": "1F452",
    "shortcode": "womans_hat",
    "description": "WOMANS HAT",
    "category": "people"
  },
  {
    "name": "eyeglasses",
    "unicode": "1F453",
    "shortcode": "eyeglasses",
    "description": "EYEGLASSES",
    "category": "people"
  },
  {
    "name": "necktie",
    "unicode": "1F454",
    "shortcode": "necktie",
    "description": "NECKTIE",
    "category": "people"
  },
  {
    "name": "shirt",
    "unicode": "1F455",
    "shortcode": "shirt",
    "description": "T-SHIRT",
    "category": "people"
  },
  {
    "name": "jeans",
    "unicode": "1F456",
    "shortcode": "jeans",
    "description": "JEANS",
    "category": "people"
  },
  {
    "name": "dress",
    "unicode": "1F457",
    "shortcode": "dress",
    "description": "DRESS",
    "category": "people"
  },
  {
    "name": "kimono",
    "unicode": "1F458",
    "shortcode": "kimono",
    "description": "KIMONO",
    "category": "people"
  },
  {
    "name": "bikini",
    "unicode": "1F459",
    "shortcode": "bikini",
    "description": "BIKINI",
    "category": "people"
  },
  {
    "name": "womans_clothes",
    "unicode": "1F45A",
    "shortcode": "womans_clothes",
    "description": "WOMANS CLOTHES",
    "category": "people"
  },
  {
    "name": "purse",
    "unicode": "1F45B",
    "shortcode": "purse",
    "description": "PURSE",
    "category": "people"
  },
  {
    "name": "handbag",
    "unicode": "1F45C",
    "shortcode": "handbag",
    "description": "HANDBAG",
    "category": "people"
  },
  {
    "name": "pouch",
    "unicode": "1F45D",
    "shortcode": "pouch",
    "description": "POUCH",
    "category": "people"
  },
  {
    "name": "mans_shoe",
    "unicode": "1F45E",
    "shortcode": "mans_shoe",
    "description": "MANS SHOE",
    "category": "people"
  },
  {
    "name": "athletic_shoe",
    "unicode": "1F45F",
    "shortcode": "athletic_shoe",
    "description": "ATHLETIC SHOE",
    "category": "people"
  },
  {
    "name": "high_heel",
    "unicode": "1F460",
    "shortcode": "high_heel",
    "description": "HIGH-HEELED SHOE",
    "category": "people"
  },
  {
    "name": "sandal",
    "unicode": "1F461",
    "shortcode": "sandal",
    "description": "WOMANS SANDAL",
    "category": "people"
  },
  {
    "name": "boot",
    "unicode": "1F462",
    "shortcode": "boot",
    "description": "WOMANS BOOTS",
    "category": "people"
  },
  {
    "name": "footprints",
    "unicode": "1F463",
    "shortcode": "footprints",
    "description": "FOOTPRINTS",
    "category": "people"
  },
  {
    "name": "bust_in_silhouette",
    "unicode": "1F464",
    "shortcode": "bust_in_silhouette",
    "description": "BUST IN SILHOUETTE",
    "category": "people"
  },
  {
    "name": "busts_in_silhouette",
    "unicode": "1F465",
    "shortcode": "busts_in_silhouette",
    "description": "BUSTS IN SILHOUETTE",
    "category": "people"
  },
  {
    "name": "boy",
    "unicode": "1F466",
    "shortcode": "boy",
    "description": "BOY",
    "category": "people"
  },
  {
    "name": "girl",
    "unicode": "1F467",
    "shortcode": "girl",
    "description": "GIRL",
    "category": "people"
  },
  {
    "name": "man",
    "unicode": "1F468",
    "shortcode": "man",
    "description": "MAN",
    "category": "people"
  },
  {
    "name": "woman",
    "unicode": "1F469",
    "shortcode": "woman",
    "description": "WOMAN",
    "category": "people"
  },
  {
    "name": "family",
    "unicode": "1F46A",
    "shortcode": "family",
    "description": "FAMILY",
    "category": "people"
  },
  {
    "name": "couple",
    "unicode": "1F46B",
    "shortcode": "couple",
    "description": "MAN AND WOMAN HOLDING HANDS",
    "category": "people"
  },
  {
    "name": "two_men_holding_hands",
    "unicode": "1F46C",
    "shortcode": "two_men_holding_hands",
    "description": "TWO MEN HOLDING HANDS",
    "category": "people"
  },
  {
    "name": "two_women_holding_hands",
    "unicode": "1F46D",
    "shortcode": "two_women_holding_hands",
    "description": "TWO WOMEN HOLDING HANDS",
    "category": "people"
  },
  {
    "name": "cop",
    "unicode": "1F46E",
    "shortcode": "cop",
    "description": "POLICE OFFICER",
    "category": "people"
  },
  {
    "name": "dancers",
    "unicode": "1F46F",
    "shortcode": "dancers",
    "description": "WOMAN WITH BUNNY EARS",
    "category": "people"
  },
  {
    "name": "bride_with_veil",
    "unicode": "1F470",
    "shortcode": "bride_with_veil",
    "description": "BRIDE WITH VEIL",
    "category": "people"
  },
  {
    "name": "person_with_blond_hair",
    "unicode": "1F471",
    "shortcode": "person_with_blond_hair",
    "description": "PERSON WITH BLOND HAIR",
    "category": "people"
  },
  {
    "name": "man_with_gua_pi_mao",
    "unicode": "1F472",
    "shortcode": "man_with_gua_pi_mao",
    "description": "MAN WITH GUA PI MAO",
    "category": "people"
  },
  {
    "name": "man_with_turban",
    "unicode": "1F473",
    "shortcode": "man_with_turban",
    "description": "MAN WITH TURBAN",
    "category": "people"
  },
  {
    "name": "older_man",
    "unicode": "1F474",
    "shortcode": "older_man",
    "description": "OLDER MAN",
    "category": "people"
  },
  {
    "name": "older_woman",
    "unicode": "1F475",
    "shortcode": "older_woman",
    "description": "OLDER WOMAN",
    "category": "people"
  },
  {
    "name": "baby",
    "unicode": "1F476",
    "shortcode": "baby",
    "description": "BABY",
    "category": "people"
  },
  {
    "name": "construction_worker",
    "unicode": "1F477",
    "shortcode": "construction_worker",
    "description": "CONSTRUCTION WORKER",
    "category": "people"
  },
  {
    "name": "princess",
    "unicode": "1F478",
    "shortcode": "princess",
    "description": "PRINCESS",
    "category": "people"
  },
  {
    "name": "japanese_ogre",
    "unicode": "1F479",
    "shortcode": "japanese_ogre",
    "description": "JAPANESE OGRE",
    "category": "people"
  },
  {
    "name": "japanese_goblin",
    "unicode": "1F47A",
    "shortcode": "japanese_goblin",
    "description": "JAPANESE GOBLIN",
    "category": "people"
  },
  {
    "name": "ghost",
    "unicode": "1F47B",
    "shortcode": "ghost",
    "description": "GHOST",
    "category": "people"
  },
  {
    "name": "angel",
    "unicode": "1F47C",
    "shortcode": "angel",
    "description": "BABY ANGEL",
    "category": "people"
  },
  {
    "name": "alien",
    "unicode": "1F47D",
    "shortcode": "alien",
    "description": "EXTRATERRESTRIAL ALIEN",
    "category": "people"
  },
  {
    "name": "space_invader",
    "unicode": "1F47E",
    "shortcode": "space_invader",
    "description": "ALIEN MONSTER",
    "category": "people"
  },
  {
    "name": "imp",
    "unicode": "1F47F",
    "shortcode": "imp",
    "description": "IMP",
    "category": "people"
  },
  {
    "name": "skull",
    "unicode": "1F480",
    "shortcode": "skull",
    "description": "SKULL",
    "category": "people"
  },
  {
    "name": "information_desk_person",
    "unicode": "1F481",
    "shortcode": "information_desk_person",
    "description": "INFORMATION DESK PERSON",
    "category": "people"
  },
  {
    "name": "guardsman",
    "unicode": "1F482",
    "shortcode": "guardsman",
    "description": "GUARDSMAN",
    "category": "people"
  },
  {
    "name": "dancer",
    "unicode": "1F483",
    "shortcode": "dancer",
    "description": "DANCER",
    "category": "people"
  },
  {
    "name": "lipstick",
    "unicode": "1F484",
    "shortcode": "lipstick",
    "description": "LIPSTICK",
    "category": "people"
  },
  {
    "name": "nail_care",
    "unicode": "1F485",
    "shortcode": "nail_care",
    "description": "NAIL POLISH",
    "category": "people"
  },
  {
    "name": "massage",
    "unicode": "1F486",
    "shortcode": "massage",
    "description": "FACE MASSAGE",
    "category": "people"
  },
  {
    "name": "haircut",
    "unicode": "1F487",
    "shortcode": "haircut",
    "description": "HAIRCUT",
    "category": "people"
  },
  {
    "name": "barber",
    "unicode": "1F488",
    "shortcode": "barber",
    "description": "BARBER POLE",
    "category": "people"
  },
  {
    "name": "syringe",
    "unicode": "1F489",
    "shortcode": "syringe",
    "description": "SYRINGE",
    "category": "emotion"
  },
  {
    "name": "pill",
    "unicode": "1F48A",
    "shortcode": "pill",
    "description": "PILL",
    "category": "emotion"
  },
  {
    "name": "kiss",
    "unicode": "1F48B",
    "shortcode": "kiss",
    "description": "KISS MARK",
    "category": "emotion"
  },
  {
    "name": "love_letter",
    "unicode": "1F48C",
    "shortcode": "love_letter",
    "description": "LOVE LETTER",
    "category": "emotion"
  },
  {
    "name": "ring",
    "unicode": "1F48D",
    "shortcode": "ring",
    "description": "RING",
    "category": "emotion"
  },
  {
    "name": "gem",
    "unicode": "1F48E",
    "shortcode": "gem",
    "description": "GEM STONE",
    "category": "emotion"
  },
  {
    "name": "couplekiss",
    "unicode": "1F48F",
    "shortcode": "couplekiss",
    "description": "KISS",
    "category": "emotion"
  },
  {
    "name": "bouquet",
    "unicode": "1F490",
    "shortcode": "bouquet",
    "description": "BOUQUET",
    "category": "emotion"
  },
  {
    "name": "couple_with_heart",
    "unicode": "1F491",
    "shortcode": "couple_with_heart",
    "description": "COUPLE WITH HEART",
    "category": "emotion"
  },
  {
    "name": "wedding",
    "unicode": "1F492",
    "shortcode": "wedding",
    "description": "WEDDING",
    "category": "emotion"
  },
  {
    "name": "heartbeat",
    "unicode": "1F493",
    "shortcode": "heartbeat",
    "description": "BEATING HEART",
    "category": "emotion"
  },
  {
    "name": "broken_heart",
    "unicode": "1F494",
    "shortcode": "broken_heart",
    "description": "BROKEN HEART",
    "category": "emotion"
  },
  {
    "name": "two_hearts",
    "unicode": "1F495",
    "shortcode": "two_hearts",
    "description": "TWO HEARTS",
    "category": "emotion"
  },
  {
    "name": "sparkling_heart",
    "unicode": "1F496",
    "shortcode": "sparkling_heart",
    "description": "SPARKLING HEART",
    "category": "emotion"
  },
  {
    "name": "heartpulse",
    "unicode": "1F497",
    "shortcode": "heartpulse",
    "description": "GROWING HEART",
    "category": "emotion"
  },
  {
    "name": "cupid",
    "unicode": "1F498",
    "shortcode": "cupid",
    "description": "HEART WITH ARROW",
    "category": "emotion"
  },
  {
    "name": "blue_heart",
    "unicode": "1F499",
    "shortcode": "blue_heart",
    "description": "BLUE HEART",
    "category": "emotion"
  },
  {
    "name": "green_heart",
    "unicode": "1F49A",
    "shortcode": "green_heart",
    "description": "GREEN HEART",
    "category": "emotion"
  },
  {
    "name": "yellow_heart",
    "unicode": "1F49B",
    "shortcode": "yellow_heart",
    "description": "YELLOW HEART",
    "category": "emotion"
  },
  {
    "name": "purple_heart",
    "unicode": "1F49C",
    "shortcode": "purple_heart",
    "description": "PURPLE HEART",
    "category": "emotion"
  },
  {
    "name": "gift_heart",
    "unicode": "1F49D",
    "shortcode": "gift_heart",
    "description": "HEART WITH RIBBON",
    "category": "emotion"
  },
  {
    "name": "revolving_hearts",
    "unicode": "1F49E",
    "shortcode": "revolving_hearts",
    "description": "REVOLVING HEARTS",
    "category": "emotion"
  },
  {
    "name": "heart_decoration",
    "unicode": "1F49F",
    "shortcode": "heart_decoration",
    "description": "HEART DECORATION",
    "category": "emotion"
  },
  {
    "name": "diamond_shape_with_a_dot_inside",
    "unicode": "1F4A0",
    "shortcode": "diamond_shape_with_a_dot_inside",
    "description": "DIAMOND SHAPE WITH A DOT INSIDE",
    "category": "emotion"
  },
  {
    "name": "bulb",
    "unicode": "1F4A1",
    "shortcode": "bulb",
    "description": "ELECTRIC LIGHT BULB",
    "category": "emotion"
  },
  {
    "name": "anger",
    "unicode": "1F4A2",
    "shortcode": "anger",
    "description": "ANGER SYMBOL",
    "category": "emotion"
  },
  {
    "name": "bomb",
    "unicode": "1F4A3",
    "shortcode": "bomb",
    "description": "BOMB",
    "category": "emotion"
  },
  {
    "name": "zzz",
    "unicode": "1F4A4",
    "shortcode": "zzz",
    "description": "SLEEPING SYMBOL",
    "category": "emotion"
  },
  {
    "name": "boom",
    "unicode": "1F4A5",
    "shortcode": "boom",
    "description": "COLLISION SYMBOL",
    "category": "emotion"
  },
  {
    "name": "sweat_drops",
    "unicode": "1F4A6",
    "shortcode": "sweat_drops",
    "description": "SPLASHING SWEAT SYMBOL",
    "category": "emotion"
  },
  {
    "name": "droplet",
    "unicode": "1F4A7",
    "shortcode": "droplet",
    "description": "DROPLET",
    "category": "emotion"
  },
  {
    "name": "dash",
    "unicode": "1F4A8",
    "shortcode": "dash",
    "description": "DASH SYMBOL",
    "category": "emotion"
  },
  {
    "name": "hankey",
    "unicode": "1F4A9",
    "shortcode": "hankey",
    "description": "PILE OF POO",
    "category": "emotion"
  },
  {
    "name": "muscle",
    "unicode": "1F4AA",
    "shortcode": "muscle",
    "description": "FLEXED BICEPS",
    "category": "emotion"
  },
  {
    "name": "dizzy",
    "unicode": "1F4AB",
    "shortcode": "dizzy",
    "description": "DIZZY SYMBOL",
    "category": "emotion"
  },
  {
    "name": "speech_balloon",
    "unicode": "1F4AC",
    "shortcode": "speech_balloon",
    "description": "SPEECH BALLOON",
    "category": "emotion"
  },
  {
    "name": "thought_balloon",
    "unicode": "1F4AD",
    "shortcode": "thought_balloon",
    "description": "THOUGHT BALLOON",
    "category": "emotion"
  },
  {
    "name": "white_flower",
    "unicode": "1F4AE",
    "shortcode": "white_flower",
    "description": "WHITE FLOWER",
    "category": "emotion"
  },
  {
    "name": "100",
    "unicode": "1F4AF",
    "shortcode": "100",
    "description": "HUNDRED POINTS SYMBOL",
    "category": "emotion"
  },
  {
    "name": "moneybag",
    "unicode": "1F4B0",
    "shortcode": "moneybag",
    "description": "MONEY BAG",
    "category": "emotion"
  },
  {
    "name": "currency_exchange",
    "unicode": "1F4B1",
    "shortcode": "currency_exchange",
    "description": "CURRENCY EXCHANGE",
    "category": "emotion"
  },
  {
    "name": "heavy_dollar_sign",
    "unicode": "1F4B2",
    "shortcode": "heavy_dollar_sign",
    "description": "HEAVY DOLLAR SIGN",
    "category": "emotion"
  },
  {
    "name": "credit_card",
    "unicode": "1F4B3",
    "shortcode": "credit_card",
    "description": "CREDIT CARD",
    "category": "emotion"
  },
  {
    "name": "yen",
    "unicode": "1F4B4",
    "shortcode": "yen",
    "description": "BANKNOTE WITH YEN SIGN",
    "category": "emotion"
  },
  {
    "name": "dollar",
    "unicode": "1F4B5",
    "shortcode": "dollar",
    "description": "BANKNOTE WITH DOLLAR SIGN",
    "category": "emotion"
  },
  {
    "name": "euro",
    "unicode": "1F4B6",
    "shortcode": "euro",
    "description": "BANKNOTE WITH EURO SIGN",
    "category": "emotion"
  },
  {
    "name": "pound",
    "unicode": "1F4B7",
    "shortcode": "pound",
    "description": "BANKNOTE WITH POUND SIGN",
    "category": "emotion"
  },
  {
    "name": "money_with_wings",
    "unicode": "1F4B8",
    "shortcode": "money_with_wings",
    "description": "MONEY WITH WINGS",
    "category": "emotion"
  },
  {
    "name": "chart",
    "unicode": "1F4B9",
    "shortcode": "chart",
    "description": "CHART WITH UPWARDS TREND AND YEN SIGN",
    "category": "thing"
  },
  {
    "name": "seat",
    "unicode": "1F4BA",
    "shortcode": "seat",
    "description": "SEAT",
    "category": "thing"
  },
  {
    "name": "computer",
    "unicode": "1F4BB",
    "shortcode": "computer",
    "description": "PERSONAL COMPUTER",
    "category": "thing"
  },
  {
    "name": "briefcase",
    "unicode": "1F4BC",
    "shortcode": "briefcase",
    "description": "BRIEFCASE",
    "category": "thing"
  },
  {
    "name": "minidisc",
    "unicode": "1F4BD",
    "shortcode": "minidisc",
    "description": "MINIDISC",
    "category": "thing"
  },
  {
    "name": "floppy_disk",
    "unicode": "1F4BE",
    "shortcode": "floppy_disk",
    "description": "FLOPPY DISK",
    "category": "thing"
  },
  {
    "name": "cd",
    "unicode": "1F4BF",
    "shortcode": "cd",
    "description": "OPTICAL DISC",
    "category": "thing"
  },
  {
    "name": "dvd",
    "unicode": "1F4C0",
    "shortcode": "dvd",
    "description": "DVD",
    "category": "thing"
  },
  {
    "name": "file_folder",
    "unicode": "1F4C1",
    "shortcode": "file_folder",
    "description": "FILE FOLDER",
    "category": "thing"
  },
  {
    "name": "open_file_folder",
    "unicode": "1F4C2",
    "shortcode": "open_file_folder",
    "description": "OPEN FILE FOLDER",
    "category": "thing"
  },
  {
    "name": "page_with_curl",
    "unicode": "1F4C3",
    "shortcode": "page_with_curl",
    "description": "PAGE WITH CURL",
    "category": "thing"
  },
  {
    "name": "page_facing_up",
    "unicode": "1F4C4",
    "shortcode": "page_facing_up",
    "description": "PAGE FACING UP",
    "category": "thing"
  },
  {
    "name": "date",
    "unicode": "1F4C5",
    "shortcode": "date",
    "description": "CALENDAR",
    "category": "thing"
  },
  {
    "name": "calendar",
    "unicode": "1F4C6",
    "shortcode": "calendar",
    "description": "TEAR-OFF CALENDAR",
    "category": "thing"
  },
  {
    "name": "card_index",
    "unicode": "1F4C7",
    "shortcode": "card_index",
    "description": "CARD INDEX",
    "category": "thing"
  },
  {
    "name": "chart_with_upwards_trend",
    "unicode": "1F4C8",
    "shortcode": "chart_with_upwards_trend",
    "description": "CHART WITH UPWARDS TREND",
    "category": "thing"
  },
  {
    "name": "chart_with_downwards_trend",
    "unicode": "1F4C9",
    "shortcode": "chart_with_downwards_trend",
    "description": "CHART WITH DOWNWARDS TREND",
    "category": "thing"
  },
  {
    "name": "bar_chart",
    "unicode": "1F4CA",
    "shortcode": "bar_chart",
    "description": "BAR CHART",
    "category": "thing"
  },
  {
    "name": "clipboard",
    "unicode": "1F4CB",
    "shortcode": "clipboard",
    "description": "CLIPBOARD",
    "category": "thing"
  },
  {
    "name": "pushpin",
    "unicode": "1F4CC",
    "shortcode": "pushpin",
    "description": "PUSHPIN",
    "category": "thing"
  },
  {
    "name": "round_pushpin",
    "unicode": "1F4CD",
    "shortcode": "round_pushpin",
    "description": "ROUND PUSHPIN",
    "category": "thing"
  },
  {
    "name": "paperclip",
    "unicode": "1F4CE",
    "shortcode": "paperclip",
    "description": "PAPERCLIP",
    "category": "thing"
  },
  {
    "name": "straight_ruler",
    "unicode": "1F4CF",
    "shortcode": "straight_ruler",
    "description": "STRAIGHT RULER",
    "category": "thing"
  },
  {
    "name": "triangular_ruler",
    "unicode": "1F4D0",
    "shortcode": "triangular_ruler",
    "description": "TRIANGULAR RULER",
    "category": "thing"
  },
  {
    "name": "bookmark_tabs",
    "unicode": "1F4D1",
    "shortcode": "bookmark_tabs",
    "description": "BOOKMARK TABS",
    "category": "thing"
  },
  {
    "name": "ledger",
    "unicode": "1F4D2",
    "shortcode": "ledger",
    "description": "LEDGER",
    "category": "thing"
  },
  {
    "name": "notebook",
    "unicode": "1F4D3",
    "shortcode": "notebook",
    "description": "NOTEBOOK",
    "category": "thing"
  },
  {
    "name": "notebook_with_decorative_cover",
    "unicode": "1F4D4",
    "shortcode": "notebook_with_decorative_cover",
    "description": "NOTEBOOK WITH DECORATIVE COVER",
    "category": "thing"
  },
  {
    "name": "closed_book",
    "unicode": "1F4D5",
    "shortcode": "closed_book",
    "description": "CLOSED BOOK",
    "category": "thing"
  },
  {
    "name": "book",
    "unicode": "1F4D6",
    "shortcode": "book",
    "description": "OPEN BOOK",
    "category": "thing"
  },
  {
    "name": "green_book",
    "unicode": "1F4D7",
    "shortcode": "green_book",
    "description": "GREEN BOOK",
    "category": "thing"
  },
  {
    "name": "blue_book",
    "unicode": "1F4D8",
    "shortcode": "blue_book",
    "description": "BLUE BOOK",
    "category": "thing"
  },
  {
    "name": "orange_book",
    "unicode": "1F4D9",
    "shortcode": "orange_book",
    "description": "ORANGE BOOK",
    "category": "thing"
  },
  {
    "name": "books",
    "unicode": "1F4DA",
    "shortcode": "books",
    "description": "BOOKS",
    "category": "thing"
  },
  {
    "name": "name_badge",
    "unicode": "1F4DB",
    "shortcode": "name_badge",
    "description": "NAME BADGE",
    "category": "thing"
  },
  {
    "name": "scroll",
    "unicode": "1F4DC",
    "shortcode": "scroll",
    "description": "SCROLL",
    "category": "thing"
  },
  {
    "name": "memo",
    "unicode": "1F4DD",
    "shortcode": "memo",
    "description": "MEMO",
    "category": "thing"
  },
  {
    "name": "telephone_receiver",
    "unicode": "1F4DE",
    "shortcode": "telephone_receiver",
    "description": "TELEPHONE RECEIVER",
    "category": "thing"
  },
  {
    "name": "pager",
    "unicode": "1F4DF",
    "shortcode": "pager",
    "description": "PAGER",
    "category": "thing"
  },
  {
    "name": "fax",
    "unicode": "1F4E0",
    "shortcode": "fax",
    "description": "FAX MACHINE",
    "category": "thing"
  },
  {
    "name": "satellite",
    "unicode": "1F4E1",
    "shortcode": "satellite",
    "description": "SATELLITE ANTENNA",
    "category": "thing"
  },
  {
    "name": "loudspeaker",
    "unicode": "1F4E2",
    "shortcode": "loudspeaker",
    "description": "PUBLIC ADDRESS LOUDSPEAKER",
    "category": "thing"
  },
  {
    "name": "mega",
    "unicode": "1F4E3",
    "shortcode": "mega",
    "description": "CHEERING MEGAPHONE",
    "category": "thing"
  },
  {
    "name": "outbox_tray",
    "unicode": "1F4E4",
    "shortcode": "outbox_tray",
    "description": "OUTBOX TRAY",
    "category": "thing"
  },
  {
    "name": "inbox_tray",
    "unicode": "1F4E5",
    "shortcode": "inbox_tray",
    "description": "INBOX TRAY",
    "category": "thing"
  },
  {
    "name": "package",
    "unicode": "1F4E6",
    "shortcode": "package",
    "description": "PACKAGE",
    "category": "thing"
  },
  {
    "name": "e-mail",
    "unicode": "1F4E7",
    "shortcode": "e-mail",
    "description": "E-MAIL SYMBOL",
    "category": "thing"
  },
  {
    "name": "incoming_envelope",
    "unicode": "1F4E8",
    "shortcode": "incoming_envelope",
    "description": "INCOMING ENVELOPE",
    "category": "thing"
  },
  {
    "name": "envelope_with_arrow",
    "unicode": "1F4E9",
    "shortcode": "envelope_with_arrow",
    "description": "ENVELOPE WITH DOWNWARDS ARROW ABOVE",
    "category": "thing"
  },
  {
    "name": "mailbox_closed",
    "unicode": "1F4EA",
    "shortcode": "mailbox_closed",
    "description": "CLOSED MAILBOX WITH LOWERED FLAG",
    "category": "thing"
  },
  {
    "name": "mailbox",
    "unicode": "1F4EB",
    "shortcode": "mailbox",
    "description": "CLOSED MAILBOX WITH RAISED FLAG",
    "category": "thing"
  },
  {
    "name": "mailbox_with_mail",
    "unicode": "1F4EC",
    "shortcode": "mailbox_with_mail",
    "description": "OPEN MAILBOX WITH RAISED FLAG",
    "category": "thing"
  },
  {
    "name": "mailbox_with_no_mail",
    "unicode": "1F4ED",
    "shortcode": "mailbox_with_no_mail",
    "description": "OPEN MAILBOX WITH LOWERED FLAG",
    "category": "thing"
  },
  {
    "name": "postbox",
    "unicode": "1F4EE",
    "shortcode": "postbox",
    "description": "POSTBOX",
    "category": "thing"
  },
  {
    "name": "postal_horn",
    "unicode": "1F4EF",
    "shortcode": "postal_horn",
    "description": "POSTAL HORN",
    "category": "thing"
  },
  {
    "name": "newspaper",
    "unicode": "1F4F0",
    "shortcode": "newspaper",
    "description": "NEWSPAPER",
    "category": "thing"
  },
  {
    "name": "iphone",
    "unicode": "1F4F1",
    "shortcode": "iphone",
    "description": "MOBILE PHONE",
    "category": "thing"
  },
  {
    "name": "calling",
    "unicode": "1F4F2",
    "shortcode": "calling",
    "description": "MOBILE PHONE WITH RIGHTWARDS ARROW AT LEFT",
    "category": "thing"
  },
  {
    "name": "vibration_mode",
    "unicode": "1F4F3",
    "shortcode": "vibration_mode",
    "description": "VIBRATION MODE",
    "category": "thing"
  },
  {
    "name": "mobile_phone_off",
    "unicode": "1F4F4",
    "shortcode": "mobile_phone_off",
    "description": "MOBILE PHONE OFF",
    "category": "thing"
  },
  {
    "name": "no_mobile_phones",
    "unicode": "1F4F5",
    "shortcode": "no_mobile_phones",
    "description": "NO MOBILE PHONES",
    "category": "thing"
  },
  {
    "name": "signal_strength",
    "unicode": "1F4F6",
    "shortcode": "signal_strength",
    "description": "ANTENNA WITH BARS",
    "category": "thing"
  },
  {
    "name": "camera",
    "unicode": "1F4F7",
    "shortcode": "camera",
    "description": "CAMERA",
    "category": "thing"
  },
  {
    "name": "video_camera",
    "unicode": "1F4F9",
    "shortcode": "video_camera",
    "description": "VIDEO CAMERA",
    "category": "thing"
  },
  {
    "name": "tv",
    "unicode": "1F4FA",
    "shortcode": "tv",
    "description": "TELEVISION",
    "category": "thing"
  },
  {
    "name": "radio",
    "unicode": "1F4FB",
    "shortcode": "radio",
    "description": "RADIO",
    "category": "thing"
  },
  {
    "name": "vhs",
    "unicode": "1F4FC",
    "shortcode": "vhs",
    "description": "VIDEOCASSETTE",
    "category": "thing"
  },
  {
    "name": "twisted_rightwards_arrows",
    "unicode": "1F500",
    "shortcode": "twisted_rightwards_arrows",
    "description": "TWISTED RIGHTWARDS ARROWS",
    "category": "thing"
  },
  {
    "name": "repeat",
    "unicode": "1F501",
    "shortcode": "repeat",
    "description": "CLOCKWISE RIGHTWARDS AND LEFTWARDS OPEN CIRCLE ARROWS",
    "category": "thing"
  },
  {
    "name": "repeat_one",
    "unicode": "1F502",
    "shortcode": "repeat_one",
    "description": "CLOCKWISE RIGHTWARDS AND LEFTWARDS OPEN CIRCLE ARROWS WITH CIRCLED ONE OVERLAY",
    "category": "thing"
  },
  {
    "name": "arrows_clockwise",
    "unicode": "1F503",
    "shortcode": "arrows_clockwise",
    "description": "CLOCKWISE DOWNWARDS AND UPWARDS OPEN CIRCLE ARROWS",
    "category": "thing"
  },
  {
    "name": "arrows_counterclockwise",
    "unicode": "1F504",
    "shortcode": "arrows_counterclockwise",
    "description": "ANTICLOCKWISE DOWNWARDS AND UPWARDS OPEN CIRCLE ARROWS",
    "category": "thing"
  },
  {
    "name": "low_brightness",
    "unicode": "1F505",
    "shortcode": "low_brightness",
    "description": "LOW BRIGHTNESS SYMBOL",
    "category": "thing"
  },
  {
    "name": "high_brightness",
    "unicode": "1F506",
    "shortcode": "high_brightness",
    "description": "HIGH BRIGHTNESS SYMBOL",
    "category": "thing"
  },
  {
    "name": "mute",
    "unicode": "1F507",
    "shortcode": "mute",
    "description": "SPEAKER WITH CANCELLATION STROKE",
    "category": "thing"
  },
  {
    "name": "speaker",
    "unicode": "1F508",
    "shortcode": "speaker",
    "description": "SPEAKER",
    "category": "thing"
  },
  {
    "name": "sound",
    "unicode": "1F509",
    "shortcode": "sound",
    "description": "SPEAKER WITH ONE SOUND WAVE",
    "category": "thing"
  },
  {
    "name": "loud_sound",
    "unicode": "1F50A",
    "shortcode": "loud_sound",
    "description": "SPEAKER WITH THREE SOUND WAVES",
    "category": "thing"
  },
  {
    "name": "battery",
    "unicode": "1F50B",
    "shortcode": "battery",
    "description": "BATTERY",
    "category": "thing"
  },
  {
    "name": "electric_plug",
    "unicode": "1F50C",
    "shortcode": "electric_plug",
    "description": "ELECTRIC PLUG",
    "category": "thing"
  },
  {
    "name": "mag",
    "unicode": "1F50D",
    "shortcode": "mag",
    "description": "LEFT-POINTING MAGNIFYING GLASS",
    "category": "thing"
  },
  {
    "name": "mag_right",
    "unicode": "1F50E",
    "shortcode": "mag_right",
    "description": "RIGHT-POINTING MAGNIFYING GLASS",
    "category": "thing"
  },
  {
    "name": "lock_with_ink_pen",
    "unicode": "1F50F",
    "shortcode": "lock_with_ink_pen",
    "description": "LOCK WITH INK PEN",
    "category": "thing"
  },
  {
    "name": "closed_lock_with_key",
    "unicode": "1F510",
    "shortcode": "closed_lock_with_key",
    "description": "CLOSED LOCK WITH KEY",
    "category": "thing"
  },
  {
    "name": "key",
    "unicode": "1F511",
    "shortcode": "key",
    "description": "KEY",
    "category": "thing"
  },
  {
    "name": "lock",
    "unicode": "1F512",
    "shortcode": "lock",
    "description": "LOCK",
    "category": "thing"
  },
  {
    "name": "unlock",
    "unicode": "1F513",
    "shortcode": "unlock",
    "description": "OPEN LOCK",
    "category": "thing"
  },
  {
    "name": "bell",
    "unicode": "1F514",
    "shortcode": "bell",
    "description": "BELL",
    "category": "thing"
  },
  {
    "name": "no_bell",
    "unicode": "1F515",
    "shortcode": "no_bell",
    "description": "BELL WITH CANCELLATION STROKE",
    "category": "thing"
  },
  {
    "name": "bookmark",
    "unicode": "1F516",
    "shortcode": "bookmark",
    "description": "BOOKMARK",
    "category": "folderol"
  },
  {
    "name": "link",
    "unicode": "1F517",
    "shortcode": "link",
    "description": "LINK SYMBOL",
    "category": "folderol"
  },
  {
    "name": "radio_button",
    "unicode": "1F518",
    "shortcode": "radio_button",
    "description": "RADIO BUTTON",
    "category": "folderol"
  },
  {
    "name": "back",
    "unicode": "1F519",
    "shortcode": "back",
    "description": "BACK WITH LEFTWARDS ARROW ABOVE",
    "category": "folderol"
  },
  {
    "name": "end",
    "unicode": "1F51A",
    "shortcode": "end",
    "description": "END WITH LEFTWARDS ARROW ABOVE",
    "category": "folderol"
  },
  {
    "name": "on",
    "unicode": "1F51B",
    "shortcode": "on",
    "description": "ON WITH EXCLAMATION MARK WITH LEFT RIGHT ARROW ABOVE",
    "category": "folderol"
  },
  {
    "name": "soon",
    "unicode": "1F51C",
    "shortcode": "soon",
    "description": "SOON WITH RIGHTWARDS ARROW ABOVE",
    "category": "folderol"
  },
  {
    "name": "top",
    "unicode": "1F51D",
    "shortcode": "top",
    "description": "TOP WITH UPWARDS ARROW ABOVE",
    "category": "folderol"
  },
  {
    "name": "underage",
    "unicode": "1F51E",
    "shortcode": "underage",
    "description": "NO ONE UNDER EIGHTEEN SYMBOL",
    "category": "folderol"
  },
  {
    "name": "keycap_ten",
    "unicode": "1F51F",
    "shortcode": "keycap_ten",
    "description": "KEYCAP TEN",
    "category": "folderol"
  },
  {
    "name": "capital_abcd",
    "unicode": "1F520",
    "shortcode": "capital_abcd",
    "description": "INPUT SYMBOL FOR LATIN CAPITAL LETTERS",
    "category": "folderol"
  },
  {
    "name": "abcd",
    "unicode": "1F521",
    "shortcode": "abcd",
    "description": "INPUT SYMBOL FOR LATIN SMALL LETTERS",
    "category": "folderol"
  },
  {
    "name": "1234",
    "unicode": "1F522",
    "shortcode": "1234",
    "description": "INPUT SYMBOL FOR NUMBERS",
    "category": "folderol"
  },
  {
    "name": "symbols",
    "unicode": "1F523",
    "shortcode": "symbols",
    "description": "INPUT SYMBOL FOR SYMBOLS",
    "category": "folderol"
  },
  {
    "name": "abc",
    "unicode": "1F524",
    "shortcode": "abc",
    "description": "INPUT SYMBOL FOR LATIN LETTERS",
    "category": "folderol"
  },
  {
    "name": "fire",
    "unicode": "1F525",
    "shortcode": "fire",
    "description": "FIRE",
    "category": "thing"
  },
  {
    "name": "flashlight",
    "unicode": "1F526",
    "shortcode": "flashlight",
    "description": "ELECTRIC TORCH",
    "category": "thing"
  },
  {
    "name": "wrench",
    "unicode": "1F527",
    "shortcode": "wrench",
    "description": "WRENCH",
    "category": "thing"
  },
  {
    "name": "hammer",
    "unicode": "1F528",
    "shortcode": "hammer",
    "description": "HAMMER",
    "category": "thing"
  },
  {
    "name": "nut_and_bolt",
    "unicode": "1F529",
    "shortcode": "nut_and_bolt",
    "description": "NUT AND BOLT",
    "category": "thing"
  },
  {
    "name": "hocho",
    "unicode": "1F52A",
    "shortcode": "hocho",
    "description": "HOCHO",
    "category": "thing"
  },
  {
    "name": "gun",
    "unicode": "1F52B",
    "shortcode": "gun",
    "description": "PISTOL",
    "category": "thing"
  },
  {
    "name": "microscope",
    "unicode": "1F52C",
    "shortcode": "microscope",
    "description": "MICROSCOPE",
    "category": "thing"
  },
  {
    "name": "telescope",
    "unicode": "1F52D",
    "shortcode": "telescope",
    "description": "TELESCOPE",
    "category": "thing"
  },
  {
    "name": "crystal_ball",
    "unicode": "1F52E",
    "shortcode": "crystal_ball",
    "description": "CRYSTAL BALL",
    "category": "thing"
  },
  {
    "name": "six_pointed_star",
    "unicode": "1F52F",
    "shortcode": "six_pointed_star",
    "description": "SIX POINTED STAR WITH MIDDLE DOT",
    "category": "thing"
  },
  {
    "name": "beginner",
    "unicode": "1F530",
    "shortcode": "beginner",
    "description": "JAPANESE SYMBOL FOR BEGINNER",
    "category": "thing"
  },
  {
    "name": "trident",
    "unicode": "1F531",
    "shortcode": "trident",
    "description": "TRIDENT EMBLEM",
    "category": "thing"
  },
  {
    "name": "black_square_button",
    "unicode": "1F532",
    "shortcode": "black_square_button",
    "description": "BLACK SQUARE BUTTON",
    "category": "folderol"
  },
  {
    "name": "white_square_button",
    "unicode": "1F533",
    "shortcode": "white_square_button",
    "description": "WHITE SQUARE BUTTON",
    "category": "folderol"
  },
  {
    "name": "red_circle",
    "unicode": "1F534",
    "shortcode": "red_circle",
    "description": "LARGE RED CIRCLE",
    "category": "folderol"
  },
  {
    "name": "large_blue_circle",
    "unicode": "1F535",
    "shortcode": "large_blue_circle",
    "description": "LARGE BLUE CIRCLE",
    "category": "folderol"
  },
  {
    "name": "large_orange_diamond",
    "unicode": "1F536",
    "shortcode": "large_orange_diamond",
    "description": "LARGE ORANGE DIAMOND",
    "category": "folderol"
  },
  {
    "name": "large_blue_diamond",
    "unicode": "1F537",
    "shortcode": "large_blue_diamond",
    "description": "LARGE BLUE DIAMOND",
    "category": "folderol"
  },
  {
    "name": "small_orange_diamond",
    "unicode": "1F538",
    "shortcode": "small_orange_diamond",
    "description": "SMALL ORANGE DIAMOND",
    "category": "folderol"
  },
  {
    "name": "small_blue_diamond",
    "unicode": "1F539",
    "shortcode": "small_blue_diamond",
    "description": "SMALL BLUE DIAMOND",
    "category": "folderol"
  },
  {
    "name": "small_red_triangle",
    "unicode": "1F53A",
    "shortcode": "small_red_triangle",
    "description": "UP-POINTING RED TRIANGLE",
    "category": "folderol"
  },
  {
    "name": "small_red_triangle_down",
    "unicode": "1F53B",
    "shortcode": "small_red_triangle_down",
    "description": "DOWN-POINTING RED TRIANGLE",
    "category": "folderol"
  },
  {
    "name": "arrow_up_small",
    "unicode": "1F53C",
    "shortcode": "arrow_up_small",
    "description": "UP-POINTING SMALL RED TRIANGLE",
    "category": "folderol"
  },
  {
    "name": "arrow_down_small",
    "unicode": "1F53D",
    "shortcode": "arrow_down_small",
    "description": "DOWN-POINTING SMALL RED TRIANGLE",
    "category": "folderol"
  },
  {
    "name": "clock1",
    "unicode": "1F550",
    "shortcode": "clock1",
    "description": "CLOCK FACE ONE OCLOCK",
    "category": "folderol"
  },
  {
    "name": "clock2",
    "unicode": "1F551",
    "shortcode": "clock2",
    "description": "CLOCK FACE TWO OCLOCK",
    "category": "folderol"
  },
  {
    "name": "clock3",
    "unicode": "1F552",
    "shortcode": "clock3",
    "description": "CLOCK FACE THREE OCLOCK",
    "category": "folderol"
  },
  {
    "name": "clock4",
    "unicode": "1F553",
    "shortcode": "clock4",
    "description": "CLOCK FACE FOUR OCLOCK",
    "category": "folderol"
  },
  {
    "name": "clock5",
    "unicode": "1F554",
    "shortcode": "clock5",
    "description": "CLOCK FACE FIVE OCLOCK",
    "category": "folderol"
  },
  {
    "name": "clock6",
    "unicode": "1F555",
    "shortcode": "clock6",
    "description": "CLOCK FACE SIX OCLOCK",
    "category": "folderol"
  },
  {
    "name": "clock7",
    "unicode": "1F556",
    "shortcode": "clock7",
    "description": "CLOCK FACE SEVEN OCLOCK",
    "category": "folderol"
  },
  {
    "name": "clock8",
    "unicode": "1F557",
    "shortcode": "clock8",
    "description": "CLOCK FACE EIGHT OCLOCK",
    "category": "folderol"
  },
  {
    "name": "clock9",
    "unicode": "1F558",
    "shortcode": "clock9",
    "description": "CLOCK FACE NINE OCLOCK",
    "category": "folderol"
  },
  {
    "name": "clock10",
    "unicode": "1F559",
    "shortcode": "clock10",
    "description": "CLOCK FACE TEN OCLOCK",
    "category": "folderol"
  },
  {
    "name": "clock11",
    "unicode": "1F55A",
    "shortcode": "clock11",
    "description": "CLOCK FACE ELEVEN OCLOCK",
    "category": "folderol"
  },
  {
    "name": "clock12",
    "unicode": "1F55B",
    "shortcode": "clock12",
    "description": "CLOCK FACE TWELVE OCLOCK",
    "category": "folderol"
  },
  {
    "name": "clock130",
    "unicode": "1F55C",
    "shortcode": "clock130",
    "description": "CLOCK FACE ONE-THIRTY",
    "category": "folderol"
  },
  {
    "name": "clock230",
    "unicode": "1F55D",
    "shortcode": "clock230",
    "description": "CLOCK FACE TWO-THIRTY",
    "category": "folderol"
  },
  {
    "name": "clock330",
    "unicode": "1F55E",
    "shortcode": "clock330",
    "description": "CLOCK FACE THREE-THIRTY",
    "category": "folderol"
  },
  {
    "name": "clock430",
    "unicode": "1F55F",
    "shortcode": "clock430",
    "description": "CLOCK FACE FOUR-THIRTY",
    "category": "folderol"
  },
  {
    "name": "clock530",
    "unicode": "1F560",
    "shortcode": "clock530",
    "description": "CLOCK FACE FIVE-THIRTY",
    "category": "folderol"
  },
  {
    "name": "clock630",
    "unicode": "1F561",
    "shortcode": "clock630",
    "description": "CLOCK FACE SIX-THIRTY",
    "category": "folderol"
  },
  {
    "name": "clock730",
    "unicode": "1F562",
    "shortcode": "clock730",
    "description": "CLOCK FACE SEVEN-THIRTY",
    "category": "folderol"
  },
  {
    "name": "clock830",
    "unicode": "1F563",
    "shortcode": "clock830",
    "description": "CLOCK FACE EIGHT-THIRTY",
    "category": "folderol"
  },
  {
    "name": "clock930",
    "unicode": "1F564",
    "shortcode": "clock930",
    "description": "CLOCK FACE NINE-THIRTY",
    "category": "folderol"
  },
  {
    "name": "clock1030",
    "unicode": "1F565",
    "shortcode": "clock1030",
    "description": "CLOCK FACE TEN-THIRTY",
    "category": "folderol"
  },
  {
    "name": "clock1130",
    "unicode": "1F566",
    "shortcode": "clock1130",
    "description": "CLOCK FACE ELEVEN-THIRTY",
    "category": "folderol"
  },
  {
    "name": "clock1230",
    "unicode": "1F567",
    "shortcode": "clock1230",
    "description": "CLOCK FACE TWELVE-THIRTY",
    "category": "folderol"
  },
  {
    "name": "mount_fuji",
    "unicode": "1F5FB",
    "shortcode": "mount_fuji",
    "description": "MOUNT FUJI",
    "category": "travel"
  },
  {
    "name": "tokyo_tower",
    "unicode": "1F5FC",
    "shortcode": "tokyo_tower",
    "description": "TOKYO TOWER",
    "category": "travel"
  },
  {
    "name": "statue_of_liberty",
    "unicode": "1F5FD",
    "shortcode": "statue_of_liberty",
    "description": "STATUE OF LIBERTY",
    "category": "travel"
  },
  {
    "name": "japan",
    "unicode": "1F5FE",
    "shortcode": "japan",
    "description": "SILHOUETTE OF JAPAN",
    "category": "travel"
  },
  {
    "name": "moyai",
    "unicode": "1F5FF",
    "shortcode": "moyai",
    "description": "MOYAI",
    "category": "travel"
  },
  {
    "name": "grinning",
    "unicode": "1F600",
    "shortcode": "grinning",
    "description": "GRINNING FACE",
    "category": "people"
  },
  {
    "name": "grin",
    "unicode": "1F601",
    "shortcode": "grin",
    "description": "GRINNING FACE WITH SMILING EYES",
    "category": "people"
  },
  {
    "name": "joy",
    "unicode": "1F602",
    "shortcode": "joy",
    "description": "FACE WITH TEARS OF JOY",
    "category": "people"
  },
  {
    "name": "smiley",
    "unicode": "1F603",
    "shortcode": "smiley",
    "description": "SMILING FACE WITH OPEN MOUTH",
    "category": "people"
  },
  {
    "name": "smile",
    "unicode": "1F604",
    "shortcode": "smile",
    "description": "SMILING FACE WITH OPEN MOUTH AND SMILING EYES",
    "category": "people"
  },
  {
    "name": "sweat_smile",
    "unicode": "1F605",
    "shortcode": "sweat_smile",
    "description": "SMILING FACE WITH OPEN MOUTH AND COLD SWEAT",
    "category": "people"
  },
  {
    "name": "laughing",
    "unicode": "1F606",
    "shortcode": "laughing",
    "description": "SMILING FACE WITH OPEN MOUTH AND TIGHTLY-CLOSED EYES",
    "category": "people"
  },
  {
    "name": "innocent",
    "unicode": "1F607",
    "shortcode": "innocent",
    "description": "SMILING FACE WITH HALO",
    "category": "people"
  },
  {
    "name": "smiling_imp",
    "unicode": "1F608",
    "shortcode": "smiling_imp",
    "description": "SMILING FACE WITH HORNS",
    "category": "people"
  },
  {
    "name": "wink",
    "unicode": "1F609",
    "shortcode": "wink",
    "description": "WINKING FACE",
    "category": "people"
  },
  {
    "name": "blush",
    "unicode": "1F60A",
    "shortcode": "blush",
    "description": "SMILING FACE WITH SMILING EYES",
    "category": "people"
  },
  {
    "name": "yum",
    "unicode": "1F60B",
    "shortcode": "yum",
    "description": "FACE SAVOURING DELICIOUS FOOD",
    "category": "people"
  },
  {
    "name": "relieved",
    "unicode": "1F60C",
    "shortcode": "relieved",
    "description": "RELIEVED FACE",
    "category": "people"
  },
  {
    "name": "heart_eyes",
    "unicode": "1F60D",
    "shortcode": "heart_eyes",
    "description": "SMILING FACE WITH HEART-SHAPED EYES",
    "category": "people"
  },
  {
    "name": "sunglasses",
    "unicode": "1F60E",
    "shortcode": "sunglasses",
    "description": "SMILING FACE WITH SUNGLASSES",
    "category": "people"
  },
  {
    "name": "smirk",
    "unicode": "1F60F",
    "shortcode": "smirk",
    "description": "SMIRKING FACE",
    "category": "people"
  },
  {
    "name": "neutral_face",
    "unicode": "1F610",
    "shortcode": "neutral_face",
    "description": "NEUTRAL FACE",
    "category": "people"
  },
  {
    "name": "expressionless",
    "unicode": "1F611",
    "shortcode": "expressionless",
    "description": "EXPRESSIONLESS FACE",
    "category": "people"
  },
  {
    "name": "unamused",
    "unicode": "1F612",
    "shortcode": "unamused",
    "description": "UNAMUSED FACE",
    "category": "people"
  },
  {
    "name": "sweat",
    "unicode": "1F613",
    "shortcode": "sweat",
    "description": "FACE WITH COLD SWEAT",
    "category": "people"
  },
  {
    "name": "pensive",
    "unicode": "1F614",
    "shortcode": "pensive",
    "description": "PENSIVE FACE",
    "category": "people"
  },
  {
    "name": "confused",
    "unicode": "1F615",
    "shortcode": "confused",
    "description": "CONFUSED FACE",
    "category": "people"
  },
  {
    "name": "confounded",
    "unicode": "1F616",
    "shortcode": "confounded",
    "description": "CONFOUNDED FACE",
    "category": "people"
  },
  {
    "name": "kissing",
    "unicode": "1F617",
    "shortcode": "kissing",
    "description": "KISSING FACE",
    "category": "people"
  },
  {
    "name": "kissing_heart",
    "unicode": "1F618",
    "shortcode": "kissing_heart",
    "description": "FACE THROWING A KISS",
    "category": "people"
  },
  {
    "name": "kissing_smiling_eyes",
    "unicode": "1F619",
    "shortcode": "kissing_smiling_eyes",
    "description": "KISSING FACE WITH SMILING EYES",
    "category": "people"
  },
  {
    "name": "kissing_closed_eyes",
    "unicode": "1F61A",
    "shortcode": "kissing_closed_eyes",
    "description": "KISSING FACE WITH CLOSED EYES",
    "category": "people"
  },
  {
    "name": "stuck_out_tongue",
    "unicode": "1F61B",
    "shortcode": "stuck_out_tongue",
    "description": "FACE WITH STUCK-OUT TONGUE",
    "category": "people"
  },
  {
    "name": "stuck_out_tongue_winking_eye",
    "unicode": "1F61C",
    "shortcode": "stuck_out_tongue_winking_eye",
    "description": "FACE WITH STUCK-OUT TONGUE AND WINKING EYE",
    "category": "people"
  },
  {
    "name": "stuck_out_tongue_closed_eyes",
    "unicode": "1F61D",
    "shortcode": "stuck_out_tongue_closed_eyes",
    "description": "FACE WITH STUCK-OUT TONGUE AND TIGHTLY-CLOSED EYES",
    "category": "people"
  },
  {
    "name": "disappointed",
    "unicode": "1F61E",
    "shortcode": "disappointed",
    "description": "DISAPPOINTED FACE",
    "category": "people"
  },
  {
    "name": "worried",
    "unicode": "1F61F",
    "shortcode": "worried",
    "description": "WORRIED FACE",
    "category": "people"
  },
  {
    "name": "angry",
    "unicode": "1F620",
    "shortcode": "angry",
    "description": "ANGRY FACE",
    "category": "people"
  },
  {
    "name": "rage",
    "unicode": "1F621",
    "shortcode": "rage",
    "description": "POUTING FACE",
    "category": "people"
  },
  {
    "name": "cry",
    "unicode": "1F622",
    "shortcode": "cry",
    "description": "CRYING FACE",
    "category": "people"
  },
  {
    "name": "persevere",
    "unicode": "1F623",
    "shortcode": "persevere",
    "description": "PERSEVERING FACE",
    "category": "people"
  },
  {
    "name": "triumph",
    "unicode": "1F624",
    "shortcode": "triumph",
    "description": "FACE WITH LOOK OF TRIUMPH",
    "category": "people"
  },
  {
    "name": "disappointed_relieved",
    "unicode": "1F625",
    "shortcode": "disappointed_relieved",
    "description": "DISAPPOINTED BUT RELIEVED FACE",
    "category": "people"
  },
  {
    "name": "frowning",
    "unicode": "1F626",
    "shortcode": "frowning",
    "description": "FROWNING FACE WITH OPEN MOUTH",
    "category": "people"
  },
  {
    "name": "anguished",
    "unicode": "1F627",
    "shortcode": "anguished",
    "description": "ANGUISHED FACE",
    "category": "people"
  },
  {
    "name": "fearful",
    "unicode": "1F628",
    "shortcode": "fearful",
    "description": "FEARFUL FACE",
    "category": "people"
  },
  {
    "name": "weary",
    "unicode": "1F629",
    "shortcode": "weary",
    "description": "WEARY FACE",
    "category": "people"
  },
  {
    "name": "sleepy",
    "unicode": "1F62A",
    "shortcode": "sleepy",
    "description": "SLEEPY FACE",
    "category": "people"
  },
  {
    "name": "tired_face",
    "unicode": "1F62B",
    "shortcode": "tired_face",
    "description": "TIRED FACE",
    "category": "people"
  },
  {
    "name": "grimacing",
    "unicode": "1F62C",
    "shortcode": "grimacing",
    "description": "GRIMACING FACE",
    "category": "people"
  },
  {
    "name": "sob",
    "unicode": "1F62D",
    "shortcode": "sob",
    "description": "LOUDLY CRYING FACE",
    "category": "people"
  },
  {
    "name": "open_mouth",
    "unicode": "1F62E",
    "shortcode": "open_mouth",
    "description": "FACE WITH OPEN MOUTH",
    "category": "people"
  },
  {
    "name": "hushed",
    "unicode": "1F62F",
    "shortcode": "hushed",
    "description": "HUSHED FACE",
    "category": "people"
  },
  {
    "name": "cold_sweat",
    "unicode": "1F630",
    "shortcode": "cold_sweat",
    "description": "FACE WITH OPEN MOUTH AND COLD SWEAT",
    "category": "people"
  },
  {
    "name": "scream",
    "unicode": "1F631",
    "shortcode": "scream",
    "description": "FACE SCREAMING IN FEAR",
    "category": "people"
  },
  {
    "name": "astonished",
    "unicode": "1F632",
    "shortcode": "astonished",
    "description": "ASTONISHED FACE",
    "category": "people"
  },
  {
    "name": "flushed",
    "unicode": "1F633",
    "shortcode": "flushed",
    "description": "FLUSHED FACE",
    "category": "people"
  },
  {
    "name": "sleeping",
    "unicode": "1F634",
    "shortcode": "sleeping",
    "description": "SLEEPING FACE",
    "category": "people"
  },
  {
    "name": "dizzy_face",
    "unicode": "1F635",
    "shortcode": "dizzy_face",
    "description": "DIZZY FACE",
    "category": "people"
  },
  {
    "name": "no_mouth",
    "unicode": "1F636",
    "shortcode": "no_mouth",
    "description": "FACE WITHOUT MOUTH",
    "category": "people"
  },
  {
    "name": "mask",
    "unicode": "1F637",
    "shortcode": "mask",
    "description": "FACE WITH MEDICAL MASK",
    "category": "people"
  },
  {
    "name": "smile_cat",
    "unicode": "1F638",
    "shortcode": "smile_cat",
    "description": "GRINNING CAT FACE WITH SMILING EYES",
    "category": "people"
  },
  {
    "name": "joy_cat",
    "unicode": "1F639",
    "shortcode": "joy_cat",
    "description": "CAT FACE WITH TEARS OF JOY",
    "category": "people"
  },
  {
    "name": "smiley_cat",
    "unicode": "1F63A",
    "shortcode": "smiley_cat",
    "description": "SMILING CAT FACE WITH OPEN MOUTH",
    "category": "people"
  },
  {
    "name": "heart_eyes_cat",
    "unicode": "1F63B",
    "shortcode": "heart_eyes_cat",
    "description": "SMILING CAT FACE WITH HEART-SHAPED EYES",
    "category": "people"
  },
  {
    "name": "smirk_cat",
    "unicode": "1F63C",
    "shortcode": "smirk_cat",
    "description": "CAT FACE WITH WRY SMILE",
    "category": "people"
  },
  {
    "name": "kissing_cat",
    "unicode": "1F63D",
    "shortcode": "kissing_cat",
    "description": "KISSING CAT FACE WITH CLOSED EYES",
    "category": "people"
  },
  {
    "name": "pouting_cat",
    "unicode": "1F63E",
    "shortcode": "pouting_cat",
    "description": "POUTING CAT FACE",
    "category": "people"
  },
  {
    "name": "crying_cat_face",
    "unicode": "1F63F",
    "shortcode": "crying_cat_face",
    "description": "CRYING CAT FACE",
    "category": "people"
  },
  {
    "name": "scream_cat",
    "unicode": "1F640",
    "shortcode": "scream_cat",
    "description": "WEARY CAT FACE",
    "category": "people"
  },
  {
    "name": "no_good",
    "unicode": "1F645",
    "shortcode": "no_good",
    "description": "FACE WITH NO GOOD GESTURE",
    "category": "people"
  },
  {
    "name": "ok_woman",
    "unicode": "1F646",
    "shortcode": "ok_woman",
    "description": "FACE WITH OK GESTURE",
    "category": "people"
  },
  {
    "name": "bow",
    "unicode": "1F647",
    "shortcode": "bow",
    "description": "PERSON BOWING DEEPLY",
    "category": "people"
  },
  {
    "name": "see_no_evil",
    "unicode": "1F648",
    "shortcode": "see_no_evil",
    "description": "SEE-NO-EVIL MONKEY",
    "category": "people"
  },
  {
    "name": "hear_no_evil",
    "unicode": "1F649",
    "shortcode": "hear_no_evil",
    "description": "HEAR-NO-EVIL MONKEY",
    "category": "people"
  },
  {
    "name": "speak_no_evil",
    "unicode": "1F64A",
    "shortcode": "speak_no_evil",
    "description": "SPEAK-NO-EVIL MONKEY",
    "category": "people"
  },
  {
    "name": "raising_hand",
    "unicode": "1F64B",
    "shortcode": "raising_hand",
    "description": "HAPPY PERSON RAISING ONE HAND",
    "category": "people"
  },
  {
    "name": "raised_hands",
    "unicode": "1F64C",
    "shortcode": "raised_hands",
    "description": "PERSON RAISING BOTH HANDS IN CELEBRATION",
    "category": "people"
  },
  {
    "name": "person_frowning",
    "unicode": "1F64D",
    "shortcode": "person_frowning",
    "description": "PERSON FROWNING",
    "category": "people"
  },
  {
    "name": "person_with_pouting_face",
    "unicode": "1F64E",
    "shortcode": "person_with_pouting_face",
    "description": "PERSON WITH POUTING FACE",
    "category": "people"
  },
  {
    "name": "pray",
    "unicode": "1F64F",
    "shortcode": "pray",
    "description": "PERSON WITH FOLDED HANDS",
    "category": "people"
  },
  {
    "name": "rocket",
    "unicode": "1F680",
    "shortcode": "rocket",
    "description": "ROCKET",
    "category": "travel"
  },
  {
    "name": "helicopter",
    "unicode": "1F681",
    "shortcode": "helicopter",
    "description": "HELICOPTER",
    "category": "travel"
  },
  {
    "name": "steam_locomotive",
    "unicode": "1F682",
    "shortcode": "steam_locomotive",
    "description": "STEAM LOCOMOTIVE",
    "category": "travel"
  },
  {
    "name": "railway_car",
    "unicode": "1F683",
    "shortcode": "railway_car",
    "description": "RAILWAY CAR",
    "category": "travel"
  },
  {
    "name": "bullettrain_side",
    "unicode": "1F684",
    "shortcode": "bullettrain_side",
    "description": "HIGH-SPEED TRAIN",
    "category": "travel"
  },
  {
    "name": "bullettrain_front",
    "unicode": "1F685",
    "shortcode": "bullettrain_front",
    "description": "HIGH-SPEED TRAIN WITH BULLET NOSE",
    "category": "travel"
  },
  {
    "name": "train2",
    "unicode": "1F686",
    "shortcode": "train2",
    "description": "TRAIN",
    "category": "travel"
  },
  {
    "name": "metro",
    "unicode": "1F687",
    "shortcode": "metro",
    "description": "METRO",
    "category": "travel"
  },
  {
    "name": "light_rail",
    "unicode": "1F688",
    "shortcode": "light_rail",
    "description": "LIGHT RAIL",
    "category": "travel"
  },
  {
    "name": "station",
    "unicode": "1F689",
    "shortcode": "station",
    "description": "STATION",
    "category": "travel"
  },
  {
    "name": "tram",
    "unicode": "1F68A",
    "shortcode": "tram",
    "description": "TRAM",
    "category": "travel"
  },
  {
    "name": "train",
    "unicode": "1F68B",
    "shortcode": "train",
    "description": "TRAM CAR",
    "category": "travel"
  },
  {
    "name": "bus",
    "unicode": "1F68C",
    "shortcode": "bus",
    "description": "BUS",
    "category": "travel"
  },
  {
    "name": "oncoming_bus",
    "unicode": "1F68D",
    "shortcode": "oncoming_bus",
    "description": "ONCOMING BUS",
    "category": "travel"
  },
  {
    "name": "trolleybus",
    "unicode": "1F68E",
    "shortcode": "trolleybus",
    "description": "TROLLEYBUS",
    "category": "travel"
  },
  {
    "name": "busstop",
    "unicode": "1F68F",
    "shortcode": "busstop",
    "description": "BUS STOP",
    "category": "travel"
  },
  {
    "name": "minibus",
    "unicode": "1F690",
    "shortcode": "minibus",
    "description": "MINIBUS",
    "category": "travel"
  },
  {
    "name": "ambulance",
    "unicode": "1F691",
    "shortcode": "ambulance",
    "description": "AMBULANCE",
    "category": "travel"
  },
  {
    "name": "fire_engine",
    "unicode": "1F692",
    "shortcode": "fire_engine",
    "description": "FIRE ENGINE",
    "category": "travel"
  },
  {
    "name": "police_car",
    "unicode": "1F693",
    "shortcode": "police_car",
    "description": "POLICE CAR",
    "category": "travel"
  },
  {
    "name": "oncoming_police_car",
    "unicode": "1F694",
    "shortcode": "oncoming_police_car",
    "description": "ONCOMING POLICE CAR",
    "category": "travel"
  },
  {
    "name": "taxi",
    "unicode": "1F695",
    "shortcode": "taxi",
    "description": "TAXI",
    "category": "travel"
  },
  {
    "name": "oncoming_taxi",
    "unicode": "1F696",
    "shortcode": "oncoming_taxi",
    "description": "ONCOMING TAXI",
    "category": "travel"
  },
  {
    "name": "car",
    "unicode": "1F697",
    "shortcode": "car",
    "description": "AUTOMOBILE",
    "category": "travel"
  },
  {
    "name": "oncoming_automobile",
    "unicode": "1F698",
    "shortcode": "oncoming_automobile",
    "description": "ONCOMING AUTOMOBILE",
    "category": "travel"
  },
  {
    "name": "blue_car",
    "unicode": "1F699",
    "shortcode": "blue_car",
    "description": "RECREATIONAL VEHICLE",
    "category": "travel"
  },
  {
    "name": "truck",
    "unicode": "1F69A",
    "shortcode": "truck",
    "description": "DELIVERY TRUCK",
    "category": "travel"
  },
  {
    "name": "articulated_lorry",
    "unicode": "1F69B",
    "shortcode": "articulated_lorry",
    "description": "ARTICULATED LORRY",
    "category": "travel"
  },
  {
    "name": "tractor",
    "unicode": "1F69C",
    "shortcode": "tractor",
    "description": "TRACTOR",
    "category": "travel"
  },
  {
    "name": "monorail",
    "unicode": "1F69D",
    "shortcode": "monorail",
    "description": "MONORAIL",
    "category": "travel"
  },
  {
    "name": "mountain_railway",
    "unicode": "1F69E",
    "shortcode": "mountain_railway",
    "description": "MOUNTAIN RAILWAY",
    "category": "travel"
  },
  {
    "name": "suspension_railway",
    "unicode": "1F69F",
    "shortcode": "suspension_railway",
    "description": "SUSPENSION RAILWAY",
    "category": "travel"
  },
  {
    "name": "mountain_cableway",
    "unicode": "1F6A0",
    "shortcode": "mountain_cableway",
    "description": "MOUNTAIN CABLEWAY",
    "category": "travel"
  },
  {
    "name": "aerial_tramway",
    "unicode": "1F6A1",
    "shortcode": "aerial_tramway",
    "description": "AERIAL TRAMWAY",
    "category": "travel"
  },
  {
    "name": "ship",
    "unicode": "1F6A2",
    "shortcode": "ship",
    "description": "SHIP",
    "category": "travel"
  },
  {
    "name": "rowboat",
    "unicode": "1F6A3",
    "shortcode": "rowboat",
    "description": "ROWBOAT",
    "category": "travel"
  },
  {
    "name": "speedboat",
    "unicode": "1F6A4",
    "shortcode": "speedboat",
    "description": "SPEEDBOAT",
    "category": "travel"
  },
  {
    "name": "traffic_light",
    "unicode": "1F6A5",
    "shortcode": "traffic_light",
    "description": "HORIZONTAL TRAFFIC LIGHT",
    "category": "travel"
  },
  {
    "name": "vertical_traffic_light",
    "unicode": "1F6A6",
    "shortcode": "vertical_traffic_light",
    "description": "VERTICAL TRAFFIC LIGHT",
    "category": "travel"
  },
  {
    "name": "construction",
    "unicode": "1F6A7",
    "shortcode": "construction",
    "description": "CONSTRUCTION SIGN",
    "category": "travel"
  },
  {
    "name": "rotating_light",
    "unicode": "1F6A8",
    "shortcode": "rotating_light",
    "description": "POLICE CARS REVOLVING LIGHT",
    "category": "travel"
  },
  {
    "name": "triangular_flag_on_post",
    "unicode": "1F6A9",
    "shortcode": "triangular_flag_on_post",
    "description": "TRIANGULAR FLAG ON POST",
    "category": "travel"
  },
  {
    "name": "door",
    "unicode": "1F6AA",
    "shortcode": "door",
    "description": "DOOR",
    "category": "travel"
  },
  {
    "name": "no_entry_sign",
    "unicode": "1F6AB",
    "shortcode": "no_entry_sign",
    "description": "NO ENTRY SIGN",
    "category": "travel"
  },
  {
    "name": "smoking",
    "unicode": "1F6AC",
    "shortcode": "smoking",
    "description": "SMOKING SYMBOL",
    "category": "travel"
  },
  {
    "name": "no_smoking",
    "unicode": "1F6AD",
    "shortcode": "no_smoking",
    "description": "NO SMOKING SYMBOL",
    "category": "travel"
  },
  {
    "name": "put_litter_in_its_place",
    "unicode": "1F6AE",
    "shortcode": "put_litter_in_its_place",
    "description": "PUT LITTER IN ITS PLACE SYMBOL",
    "category": "travel"
  },
  {
    "name": "do_not_litter",
    "unicode": "1F6AF",
    "shortcode": "do_not_litter",
    "description": "DO NOT LITTER SYMBOL",
    "category": "travel"
  },
  {
    "name": "potable_water",
    "unicode": "1F6B0",
    "shortcode": "potable_water",
    "description": "POTABLE WATER SYMBOL",
    "category": "travel"
  },
  {
    "name": "non-potable_water",
    "unicode": "1F6B1",
    "shortcode": "non-potable_water",
    "description": "NON-POTABLE WATER SYMBOL",
    "category": "travel"
  },
  {
    "name": "bike",
    "unicode": "1F6B2",
    "shortcode": "bike",
    "description": "BICYCLE",
    "category": "travel"
  },
  {
    "name": "no_bicycles",
    "unicode": "1F6B3",
    "shortcode": "no_bicycles",
    "description": "NO BICYCLES",
    "category": "travel"
  },
  {
    "name": "bicyclist",
    "unicode": "1F6B4",
    "shortcode": "bicyclist",
    "description": "BICYCLIST",
    "category": "travel"
  },
  {
    "name": "mountain_bicyclist",
    "unicode": "1F6B5",
    "shortcode": "mountain_bicyclist",
    "description": "MOUNTAIN BICYCLIST",
    "category": "travel"
  },
  {
    "name": "walking",
    "unicode": "1F6B6",
    "shortcode": "walking",
    "description": "PEDESTRIAN",
    "category": "travel"
  },
  {
    "name": "no_pedestrians",
    "unicode": "1F6B7",
    "shortcode": "no_pedestrians",
    "description": "NO PEDESTRIANS",
    "category": "travel"
  },
  {
    "name": "children_crossing",
    "unicode": "1F6B8",
    "shortcode": "children_crossing",
    "description": "CHILDREN CROSSING",
    "category": "travel"
  },
  {
    "name": "mens",
    "unicode": "1F6B9",
    "shortcode": "mens",
    "description": "MENS SYMBOL",
    "category": "travel"
  },
  {
    "name": "womens",
    "unicode": "1F6BA",
    "shortcode": "womens",
    "description": "WOMENS SYMBOL",
    "category": "travel"
  },
  {
    "name": "restroom",
    "unicode": "1F6BB",
    "shortcode": "restroom",
    "description": "RESTROOM",
    "category": "travel"
  },
  {
    "name": "baby_symbol",
    "unicode": "1F6BC",
    "shortcode": "baby_symbol",
    "description": "BABY SYMBOL",
    "category": "travel"
  },
  {
    "name": "toilet",
    "unicode": "1F6BD",
    "shortcode": "toilet",
    "description": "TOILET",
    "category": "travel"
  },
  {
    "name": "wc",
    "unicode": "1F6BE",
    "shortcode": "wc",
    "description": "WATER CLOSET",
    "category": "travel"
  },
  {
    "name": "shower",
    "unicode": "1F6BF",
    "shortcode": "shower",
    "description": "SHOWER",
    "category": "travel"
  },
  {
    "name": "bath",
    "unicode": "1F6C0",
    "shortcode": "bath",
    "description": "BATH",
    "category": "travel"
  },
  {
    "name": "bathtub",
    "unicode": "1F6C1",
    "shortcode": "bathtub",
    "description": "BATHTUB",
    "category": "travel"
  },
  {
    "name": "passport_control",
    "unicode": "1F6C2",
    "shortcode": "passport_control",
    "description": "PASSPORT CONTROL",
    "category": "travel"
  },
  {
    "name": "customs",
    "unicode": "1F6C3",
    "shortcode": "customs",
    "description": "CUSTOMS",
    "category": "travel"
  },
  {
    "name": "baggage_claim",
    "unicode": "1F6C4",
    "shortcode": "baggage_claim",
    "description": "BAGGAGE CLAIM",
    "category": "travel"
  },
  {
    "name": "left_luggage",
    "unicode": "1F6C5",
    "shortcode": "left_luggage",
    "description": "LEFT LUGGAGE",
    "category": "travel"
  },
  {
    "name": "hash",
    "unicode": "0023-20E3",
    "shortcode": "hash",
    "description": "HASH KEY",
    "category": "folderol"
  },
  {
    "name": "zero",
    "unicode": "0030-20E3",
    "shortcode": "zero",
    "description": "KEYCAP 0",
    "category": "folderol"
  },
  {
    "name": "one",
    "unicode": "0031-20E3",
    "shortcode": "one",
    "description": "KEYCAP 1",
    "category": "folderol"
  },
  {
    "name": "two",
    "unicode": "0032-20E3",
    "shortcode": "two",
    "description": "KEYCAP 2",
    "category": "folderol"
  },
  {
    "name": "three",
    "unicode": "0033-20E3",
    "shortcode": "three",
    "description": "KEYCAP 3",
    "category": "folderol"
  },
  {
    "name": "four",
    "unicode": "0034-20E3",
    "shortcode": "four",
    "description": "KEYCAP 4",
    "category": "folderol"
  },
  {
    "name": "five",
    "unicode": "0035-20E3",
    "shortcode": "five",
    "description": "KEYCAP 5",
    "category": "folderol"
  },
  {
    "name": "six",
    "unicode": "0036-20E3",
    "shortcode": "six",
    "description": "KEYCAP 6",
    "category": "folderol"
  },
  {
    "name": "seven",
    "unicode": "0037-20E3",
    "shortcode": "seven",
    "description": "KEYCAP 7",
    "category": "folderol"
  },
  {
    "name": "eight",
    "unicode": "0038-20E3",
    "shortcode": "eight",
    "description": "KEYCAP 8",
    "category": "folderol"
  },
  {
    "name": "nine",
    "unicode": "0039-20E3",
    "shortcode": "nine",
    "description": "KEYCAP 9",
    "category": "folderol"
  },
  {
    "name": "flag-ae",
    "unicode": "1F1E6-1F1EA",
    "shortcode": "flag-ae",
    "description": "REGIONAL INDICATOR SYMBOL LETTERS AE",
    "category": "folderol"
  },
  {
    "name": "flag-at",
    "unicode": "1F1E6-1F1F9",
    "shortcode": "flag-at",
    "description": "REGIONAL INDICATOR SYMBOL LETTERS AT",
    "category": "folderol"
  },
  {
    "name": "flag-au",
    "unicode": "1F1E6-1F1FA",
    "shortcode": "flag-au",
    "description": "REGIONAL INDICATOR SYMBOL LETTERS AU",
    "category": "folderol"
  },
  {
    "name": "flag-be",
    "unicode": "1F1E7-1F1EA",
    "shortcode": "flag-be",
    "description": "REGIONAL INDICATOR SYMBOL LETTERS BE",
    "category": "folderol"
  },
  {
    "name": "flag-br",
    "unicode": "1F1E7-1F1F7",
    "shortcode": "flag-br",
    "description": "REGIONAL INDICATOR SYMBOL LETTERS BR",
    "category": "folderol"
  },
  {
    "name": "flag-ca",
    "unicode": "1F1E8-1F1E6",
    "shortcode": "flag-ca",
    "description": "REGIONAL INDICATOR SYMBOL LETTERS CA",
    "category": "folderol"
  },
  {
    "name": "flag-ch",
    "unicode": "1F1E8-1F1ED",
    "shortcode": "flag-ch",
    "description": "REGIONAL INDICATOR SYMBOL LETTERS CH",
    "category": "folderol"
  },
  {
    "name": "flag-cl",
    "unicode": "1F1E8-1F1F1",
    "shortcode": "flag-cl",
    "description": "REGIONAL INDICATOR SYMBOL LETTERS CL",
    "category": "folderol"
  },
  {
    "name": "flag-cn",
    "unicode": "1F1E8-1F1F3",
    "shortcode": "flag-cn",
    "description": "REGIONAL INDICATOR SYMBOL LETTERS CN",
    "category": "folderol"
  },
  {
    "name": "flag-co",
    "unicode": "1F1E8-1F1F4",
    "shortcode": "flag-co",
    "description": "REGIONAL INDICATOR SYMBOL LETTERS CO",
    "category": "folderol"
  },
  {
    "name": "flag-de",
    "unicode": "1F1E9-1F1EA",
    "shortcode": "flag-de",
    "description": "REGIONAL INDICATOR SYMBOL LETTERS DE",
    "category": "folderol"
  },
  {
    "name": "flag-dk",
    "unicode": "1F1E9-1F1F0",
    "shortcode": "flag-dk",
    "description": "REGIONAL INDICATOR SYMBOL LETTERS DK",
    "category": "folderol"
  },
  {
    "name": "flag-es",
    "unicode": "1F1EA-1F1F8",
    "shortcode": "flag-es",
    "description": "REGIONAL INDICATOR SYMBOL LETTERS ES",
    "category": "folderol"
  },
  {
    "name": "flag-fi",
    "unicode": "1F1EB-1F1EE",
    "shortcode": "flag-fi",
    "description": "REGIONAL INDICATOR SYMBOL LETTERS FI",
    "category": "folderol"
  },
  {
    "name": "flag-fr",
    "unicode": "1F1EB-1F1F7",
    "shortcode": "flag-fr",
    "description": "REGIONAL INDICATOR SYMBOL LETTERS FR",
    "category": "folderol"
  },
  {
    "name": "flag-gb",
    "unicode": "1F1EC-1F1E7",
    "shortcode": "flag-gb",
    "description": "REGIONAL INDICATOR SYMBOL LETTERS GB",
    "category": "folderol"
  },
  {
    "name": "flag-hk",
    "unicode": "1F1ED-1F1F0",
    "shortcode": "flag-hk",
    "description": "REGIONAL INDICATOR SYMBOL LETTERS HK",
    "category": "folderol"
  },
  {
    "name": "flag-id",
    "unicode": "1F1EE-1F1E9",
    "shortcode": "flag-id",
    "description": "REGIONAL INDICATOR SYMBOL LETTERS ID",
    "category": "folderol"
  },
  {
    "name": "flag-ie",
    "unicode": "1F1EE-1F1EA",
    "shortcode": "flag-ie",
    "description": "REGIONAL INDICATOR SYMBOL LETTERS IE",
    "category": "folderol"
  },
  {
    "name": "flag-il",
    "unicode": "1F1EE-1F1F1",
    "shortcode": "flag-il",
    "description": "REGIONAL INDICATOR SYMBOL LETTERS IL",
    "category": "folderol"
  },
  {
    "name": "flag-in",
    "unicode": "1F1EE-1F1F3",
    "shortcode": "flag-in",
    "description": "REGIONAL INDICATOR SYMBOL LETTERS IN",
    "category": "folderol"
  },
  {
    "name": "flag-it",
    "unicode": "1F1EE-1F1F9",
    "shortcode": "flag-it",
    "description": "REGIONAL INDICATOR SYMBOL LETTERS IT",
    "category": "folderol"
  },
  {
    "name": "flag-jp",
    "unicode": "1F1EF-1F1F5",
    "shortcode": "flag-jp",
    "description": "REGIONAL INDICATOR SYMBOL LETTERS JP",
    "category": "folderol"
  },
  {
    "name": "flag-kr",
    "unicode": "1F1F0-1F1F7",
    "shortcode": "flag-kr",
    "description": "REGIONAL INDICATOR SYMBOL LETTERS KR",
    "category": "folderol"
  },
  {
    "name": "flag-mo",
    "unicode": "1F1F2-1F1F4",
    "shortcode": "flag-mo",
    "description": "REGIONAL INDICATOR SYMBOL LETTERS MO",
    "category": "folderol"
  },
  {
    "name": "flag-mx",
    "unicode": "1F1F2-1F1FD",
    "shortcode": "flag-mx",
    "description": "REGIONAL INDICATOR SYMBOL LETTERS MX",
    "category": "folderol"
  },
  {
    "name": "flag-my",
    "unicode": "1F1F2-1F1FE",
    "shortcode": "flag-my",
    "description": "REGIONAL INDICATOR SYMBOL LETTERS MY",
    "category": "folderol"
  },
  {
    "name": "flag-nl",
    "unicode": "1F1F3-1F1F1",
    "shortcode": "flag-nl",
    "description": "REGIONAL INDICATOR SYMBOL LETTERS NL",
    "category": "folderol"
  },
  {
    "name": "flag-no",
    "unicode": "1F1F3-1F1F4",
    "shortcode": "flag-no",
    "description": "REGIONAL INDICATOR SYMBOL LETTERS NO",
    "category": "folderol"
  },
  {
    "name": "flag-nz",
    "unicode": "1F1F3-1F1FF",
    "shortcode": "flag-nz",
    "description": "REGIONAL INDICATOR SYMBOL LETTERS NZ",
    "category": "folderol"
  },
  {
    "name": "flag-ph",
    "unicode": "1F1F5-1F1ED",
    "shortcode": "flag-ph",
    "description": "REGIONAL INDICATOR SYMBOL LETTERS PH",
    "category": "folderol"
  },
  {
    "name": "flag-pl",
    "unicode": "1F1F5-1F1F1",
    "shortcode": "flag-pl",
    "description": "REGIONAL INDICATOR SYMBOL LETTERS PL",
    "category": "folderol"
  },
  {
    "name": "flag-pr",
    "unicode": "1F1F5-1F1F7",
    "shortcode": "flag-pr",
    "description": "REGIONAL INDICATOR SYMBOL LETTERS PR",
    "category": "folderol"
  },
  {
    "name": "flag-pt",
    "unicode": "1F1F5-1F1F9",
    "shortcode": "flag-pt",
    "description": "REGIONAL INDICATOR SYMBOL LETTERS PT",
    "category": "folderol"
  },
  {
    "name": "flag-ru",
    "unicode": "1F1F7-1F1FA",
    "shortcode": "flag-ru",
    "description": "REGIONAL INDICATOR SYMBOL LETTERS RU",
    "category": "folderol"
  },
  {
    "name": "flag-sa",
    "unicode": "1F1F8-1F1E6",
    "shortcode": "flag-sa",
    "description": "REGIONAL INDICATOR SYMBOL LETTERS SA",
    "category": "folderol"
  },
  {
    "name": "flag-se",
    "unicode": "1F1F8-1F1EA",
    "shortcode": "flag-se",
    "description": "REGIONAL INDICATOR SYMBOL LETTERS SE",
    "category": "folderol"
  },
  {
    "name": "flag-sg",
    "unicode": "1F1F8-1F1EC",
    "shortcode": "flag-sg",
    "description": "REGIONAL INDICATOR SYMBOL LETTERS SG",
    "category": "folderol"
  },
  {
    "name": "flag-tr",
    "unicode": "1F1F9-1F1F7",
    "shortcode": "flag-tr",
    "description": "REGIONAL INDICATOR SYMBOL LETTERS TR",
    "category": "folderol"
  },
  {
    "name": "flag-us",
    "unicode": "1F1FA-1F1F8",
    "shortcode": "flag-us",
    "description": "REGIONAL INDICATOR SYMBOL LETTERS US",
    "category": "folderol"
  },
  {
    "name": "flag-vn",
    "unicode": "1F1FB-1F1F3",
    "shortcode": "flag-vn",
    "description": "REGIONAL INDICATOR SYMBOL LETTERS VN",
    "category": "folderol"
  },
  {
    "name": "flag-za",
    "unicode": "1F1FF-1F1E6",
    "shortcode": "flag-za",
    "description": "REGIONAL INDICATOR SYMBOL LETTERS ZA",
    "category": "folderol"
  }
]
});
