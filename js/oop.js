/**
 * @author Brian
 */

/**
 * Inheritance example
 */

//Panel class - Shows a panel in the browser
function Panel(width, height, xaxis, yaxis, color, $parent){
  if (arguments.length < 2) {
    return false;
  }

  var _self = this;
  var _open = true,
      $_element = $(document.createElement('div'));
  $_element.attr({
    "class":"panel"
  });
  $_element.css({
    "width": width,
    "height": height,
    "position": "absolute",
    "top": yaxis + "%",
    "left": xaxis + "%",
    "margin-left" : -width/2,
    "margin-top" : -height/2,
    "background" : color,
    "z-index" : 100
  });

  if(typeof $parent == 'undefined') {
    $parent = $(document.documentElement);
  }
  else if($parent === '' || $parent === null) {
    return false;
  }

  //$parent.hide().append($_element).fadeIn(500);
  $($_element).hide().appendTo($parent).fadeIn(500);


  this.isOpened = function() {
    return _open;
  };

  this.open = function() {
    if (_open) {
      return false;
    } else {
      $_element.stop().fadeIn(500);
      _open = true;
    }
  };

  this.close = function() {
    if(!_open) {
      return false;
    } else {
      $_element.stop().fadeOut(500);
      _open = false;
    }
  };

  this.add = function(content) {
    if (typeof content == 'string'){
      $_element.html($_element.html() + content);
    } else {
      $_element.append(content);
    }
  };

  this.clear = function(content) {
    $_element.html('');
    //$_element.children().remove();
  };

  $_element.click(function() {
    if (_self.isOpened) {
      _self.close();
    } else if (!_self.isOpened){
      _self.open();
    }
  });

  this.info = "Hello world!";
}

function rgbRand(){
  var number = Math.floor(Math.random()*256);
  return number;
}

function generatePanel(){
  var width = 100 + Math.floor(Math.random()*400);
  var height = 100 + Math.floor(Math.random()*400);
  var xaxis = Math.floor(Math.random()*90);
  var yaxis = Math.floor(Math.random()*90);
  var color = 'rgba(' + rgbRand() + ',' + rgbRand() + ',' + rgbRand() +', 0.7)';
  new Panel(width,height, xaxis, yaxis, color);
}

//setInterval(generatePanel, 1000, 3);

// var panel1 = new Panel(100,100);
// console.log(panel1.info);