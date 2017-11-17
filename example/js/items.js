// add items to the "Add Items" tab

$(document).ready(function() {
  var items = [
   {
      "name" : "M001",
      "image" : "models/thumbnails/model001.png",
      "model" : "models/js/obj2.js",
      "type" : "1"
    },
    {
      "name" : "M002",
      "image" : "models/thumbnails/model002.png",
      "model" : "models/js/open_door.js",
      "type" : "8"
    },
    {
      "name" : "M003",
      "image" : "models/thumbnails/model003.png",
      "model" : "models/js/whitewindow.js",
      "type" : "3"
    },
    {
      "name" : "M004",
      "image" : "models/thumbnails/model004.png",
      "model" : "models/js/ik-ekero-orange_baked.js",
      "type" : "2"
    }

   /*
   {
      "name" : "",
      "image" : "",
      "model" : "",
      "type" : "1"
    },
    */
  ]

  var elements = [
    {
       "name" : "E001",// Bottom",
       "image" : "models/thumbnails/E001.png",
       "model" : "models/js/E001_bottom.js",
       "type" : "1"
     },
     {
       "name" : "E002",// Fioka01",
       "image" : "models/thumbnails/Fioka001.png",
       "model" : "models/js/E002_Fioka01.js",
       "type" : "1"
     },
     {
       "name" : "E003",// Fioka02",
       "image" : "models/thumbnails/Fioka002.png",//E003.png",
       "model" : "models/js/E003_Fioka02.js",
       "type" : "1"
      }
     ,
     {
       "name" : "E004",// Fioka03",
       "image" : "models/thumbnails/Fioka003.png",//E004.png",
       "model" : "models/js/E004_Fioka03.js",
       "type" : "1"
     },
     {
       "name" : "E005",// Fioka04",
       "image" : "models/thumbnails/E004.png",
       "model" : "models/js/E005_Fioka04.js",
       "type" : "1"
     }
     ,
     {
       "name" : "E006",// Rafti01",
       "image" : "models/thumbnails/E004.png",
       "model" : "models/js/E006_Rafti01.js",
       "type" : "1"
     },





     {
        "name" : "IG0001",
        "image" : "models/thumbnails/IG0001_290x290__0_07m2.png",
        "model" : "models/js/E001_bottom.js",
        "type" : "1"
      },
      {
        "name" : "IG0002",
        "image" : "models/thumbnails/IG0002_380x380__0_11m2.png",
        "model" : "models/js/E002_Fioka01.js",
        "type" : "1"
      },
      {
        "name" : "IG0003",
        "image" : "models/thumbnails/IG0003_779.9x444.2__0_25m2.png",
        "model" : "models/js/E003_Fioka02.js",
        "type" : "1"
       }
      ,
      {
        "name" : "IG0004",
        "image" : "models/thumbnails/IG0004_762.6x449.0__0_27m2.png",
        "model" : "models/js/E004_Fioka03.js",
        "type" : "1"
      },
      {
        "name" : "IG0005",
        "image" : "models/thumbnails/IG0005_806.1x367.9__0_23m2.png",
        "model" : "models/js/E005_Fioka04.js",
        "type" : "1"
      }
      ,
      {
        "name" : "IG0006",
        "image" : "models/thumbnails/IG0006_912.3x592.3__0_27m2.png",
        "model" : "models/js/E007_Shtylla01.js",
        "type" : "1"
      }

  ]

  var curtains = [
    {
       "name" : "C001",// Bottom",
       "image" : "models/thumbnails/WPGS_Tex_01-01.png",
       "model" : "#",
       "type" : "1"
     },
     {
       "name" : "C002",// Fioka01",
       "image" : "models/thumbnails/WPGS_Tex_02-01.png",
       "model" : "#",
       "type" : "1"
     },
     {
       "name" : "C003",// Fioka02",
       "image" : "models/thumbnails/WPGS_Tex_03-01.png",
       "model" : "#",
       "type" : "1"
      }
     ,
     {
       "name" : "C004",// Fioka03",
       "image" : "models/thumbnails/WPGS_Tex_04-01.png",
       "model" : "#",
       "type" : "1"
     },
     {
       "name" : "C005",// Fioka04",
       "image" : "models/thumbnails/WPGS_Tex_05-01.png",
       "model" : "#",
       "type" : "1"
     }
     ,
     {
       "name" : "C006",// Rafti01",
       "image" : "models/thumbnails/WPGS_Tex_06-01.png",
       "model" : "#",
       "type" : "1"
     }
   ]


   var ttools = [
     {
        "name" : "T001",// Bottom",
        "image" : "models/thumbnails/tools.jpg",
        "model" : "#",
        "type" : "1"
      },
      {
        "name" : "T002",// Fioka01",
        "image" : "models/thumbnails/tools.jpg",
        "model" : "#",
        "type" : "1"
      },
      {
        "name" : "T003",// Fioka02",
        "image" : "models/thumbnails/tools.jpg",
        "model" : "#",
        "type" : "1"
       }
      ,
      {
        "name" : "T004",// Fioka03",
        "image" : "models/thumbnails/tools.jpg",
        "model" : "#",
        "type" : "1"
      },
      {
        "name" : "T005",// Fioka04",
        "image" : "models/thumbnails/tools.jpg",
        "model" : "#",
        "type" : "1"
      }
      ,
      {
        "name" : "T006",
        "image" : "models/thumbnails/tools.jpg",
        "model" : "#",
        "type" : "1"
      }
    ]
   var smedia = [
     {
        "name" : "Share on Facebook",
        "image" : "models/thumbnails/fb-art.png",
        "model" : "#",
        "type" : "1"
      },
      {
        "name" : "Share on Linkedin",
        "image" : "models/thumbnails/linkedin-art.png",
        "model" : "#",
        "type" : "1"
      },
      {
        "name" : "Share on twitter",
        "image" : "models/thumbnails/tw-art.png",
        "model" : "#",
        "type" : "1"
       }
    ]

  var itemsDiv = $("#items-wrapper")
  for (var i = 0; i < items.length; i++) {
    var item = items[i];
    var html = '<div class="col-sm-4">' +
                '<a class="thumbnail add-item" model-name="' +
                item.name +
                '" model-url="' +
                item.model +
                '" model-type="' +
                item.type +
                '"><img src="' +
                item.image +
                '" alt="Add Item"> '+
                item.name +
                '</a></div>';
    itemsDiv.append(html);
  }

  var itemsDiv = $("#elements-wrapper")
  for (var i = 0; i < elements.length; i++) {
    var element = elements[i];
    var html = '<div class="col-sm-4">' +
                '<a class="thumbnail add-item" model-name="' +
                element.name +
                '" model-url="' +
                element.model +
                '" model-type="' +
                element.type +
                '"><img src="' +
                element.image +
                '" alt="Add Element"> '+
                element.name +
                '</a></div>';
    itemsDiv.append(html);
  }

  var itemsDiv = $("#curtains-wrapper")
  for (var i = 0; i < curtains.length; i++) {
    var curtain = curtains[i];
    var html = '<div class="col-sm-4">' +
                '<a class="thumbnail add-item" model-name="' +
                curtain.name +
                '" model-url="' +
                curtain.model +
                '" model-type="' +
                curtain.type +
                '"><img src="' +
                curtain.image +
                '" alt="Add Element"> '+
                curtain.name +
                '</a></div>';
    itemsDiv.append(html);
  }

  var itemsDiv = $("#ttools-wrapper")
  for (var i = 0; i < ttools.length; i++) {
    var ttool = ttools[i];
    var html = '<div class="col-sm-4">' +
                '<a class="thumbnail add-item" model-name="' +
                ttool.name +
                '" model-url="' +
                ttool.model +
                '" model-type="' +
                ttool.type +
                '"><img src="' +
                ttool.image +
                '" alt="Add Element"> '+
                ttool.name +
                '</a></div>';
    itemsDiv.append(html);
  }

var itemsDiv = $("#osystem-wrapper").load("order.html");

var itemsDiv = $("#smedia-wrapper")
for (var i = 0; i < smedia.length; i++) {
  var smed = smedia[i];
  var html = '<div class="col-sm-4">' +
              '<a class="thumbnail add-item" model-name="' +
              smed.name +
              '" model-url="' +
              smed.model +
              '" model-type="' +
              smed.type +
              '"><img src="' +
              smed.image +
              '" alt="Add Element"> '+
              smed.name +
              '</a></div>';
  itemsDiv.append(html);
}

});
