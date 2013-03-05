/**
 * Displays random blocks in a container.
 * Brian Fernalld
 * brianfernalld.com
 */

//Block class - Shows a block in the browser

var blocks = 30;

function Block(width, height, xaxis, yaxis, color, border, $parent){
  if (arguments.length < 5) {
    return false;
  }

  var _self = this,
      _open = true,
      $_element = $(document.createElement('div'));
  $_element.attr({
    "class":"block"
  });
  $_element.css({
    "width": width,
    "height": height,
    "top": yaxis + "%",
    "left": xaxis + "%",
    "margin-left" : -width/2,
    "margin-top" : -height/2,
    "background" : color,
    "border-radius" : border
  });

  if(typeof $parent == 'undefined') {
    $parent = $(document.documentElement);
  }
  else if($parent === '' || $parent === null) {
    return false;
  }

  $($_element).hide().appendTo($parent).fadeIn(300);

  this.isOpened = function() {
    return _open;
  };

  this.close = function() {
    if(!_open) {
      return false;
    } else {
      $_element.stop().fadeOut(300);
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
    }
  });
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
  var color = 'rgba(' + rgbRand() + ',' + rgbRand() + ',' + rgbRand() +', 0.5)';
  var border = Math.floor(Math.random()*100);
  new Block(width, height, xaxis, yaxis, color, border, $('#container'));
}


(function loop() {
  generatePanel();
  if (blocks) {
    setTimeout(loop, 500);
  }
  blocks--;
})()