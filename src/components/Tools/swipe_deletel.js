let swipe = function createSwipe_deletel(){
  var initX; //触摸位置
  var moveX; //滑动时的位置
  var X = 0; //移动距离
  var objX = 0; //目标对象位置
  var maxWidth = 48;

  let list = document.querySelectorAll('.carLi');
  for (let i in list){
    if (list.length == 0)
      return;
    list[i].addEventListener('touchstart', tStart);
    list[i].addEventListener('touchmove', tMove);
    list[i].addEventListener('touchend', tEnd);
    if (list.length - 1 == i)
      break;
  }


	function tStart(event){
    if (event.target.className == "del_btn")
        return;
		let obj = this;
		initX = event.targetTouches[0].pageX;
        objX = (obj.style.WebkitTransform.replace(/translateX\(/g, "").replace(/px\)/g, "")) * 1;
	}

	function tMove(event){
    if (event.target.className == "del_btn")
        return;
		let obj = this;
		if (objX == 0){
      moveX = event.targetTouches[0].pageX;
      X = moveX - initX;
      if (X >= 0) {
        obj.style.WebkitTransform = "translateX(" + 0 + "px)";
      } else if (X < 0) {
        event.preventDefault();
        var l = Math.abs(X);
        obj.style.WebkitTransform = "translateX(" + -l + "px)";
        if (l > maxWidth) {
          l = maxWidth;
          obj.style.WebkitTransform = "translateX(" + -l + "px)";
        }
      }
		}
		else if (objX < 0) {
        moveX = event.targetTouches[0].pageX;
        X = moveX - initX;
        if (X >= 0) {
          event.preventDefault();
          var r = -maxWidth + Math.abs(X);
          obj.style.WebkitTransform = "translateX(" + r + "px)";
          if (r > 0) {
            r = 0;
            obj.style.WebkitTransform = "translateX(" + r + "px)";
          }
        } else { //向左滑动
          event.preventDefault();
          obj.style.WebkitTransform = "translateX(" + -maxWidth + "px)";
        }
      }
	}

	function tEnd(event){
    if (event.target.className == "delete_btn")
      return;
    var obj = this;
    objX = (obj.style.WebkitTransform.replace(/translateX\(/g, "").replace(/px\)/g, "")) * 1;
    if (objX > -25) {
      obj.style.WebkitTransform = "translateX(" + 0 + "px)";
      objX = 0;
    } else {
      obj.style.WebkitTransform = "translateX(" + -maxWidth + "px)";
      objX = -maxWidth;
    }
	}
}

export default swipe;