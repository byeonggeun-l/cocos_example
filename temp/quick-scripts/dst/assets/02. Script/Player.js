
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/02. Script/Player.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '3211fAVjkJHdadtwF4RtS0g', 'Player');
// 02. Script/Player.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    // Jump Sound.
    jumpAudio: {
      type: cc.AudioClip,
      "default": null
    }
  },
  onLoad: function onLoad() {
    this.accLeft = false;
    this.accRight = false;
    this.moveSpeed = 0; // // 키보드 입력 이벤트
    //이벤트 키워드, 콜백 함수, this 키워드 자기 자신 가리키기.

    cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
    cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this); // 시작과 동시에 주인공 점프 동작.

    this.doJumpAction();
  },
  onDestroy: function onDestroy() {
    // 키보드 입력 이벤트 삭제
    cc.systemEvent.off(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
    cc.systemEvent.off(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
  },
  doJumpAction: function doJumpAction() {
    // 0.4 4초동안 Y 축으로 300 올라간다.
    var jumpUp = cc.moveBy(0.4, cc.v2(0, 300)); // 0.4 4초동안 Y 축으로 300 내려간다.

    var jumpDown = cc.moveBy(0.4, cc.v2(0, -300));
    var callback = cc.callFunc(this.playJumpSound, this); // sequence 여러 개의 액션을 하나의 액션으로 묶는다.
    // 시퀀스를 무한히 반복한다.

    var rep = cc.repeatForever(cc.sequence(jumpUp, jumpDown, callback));
    this.node.runAction(rep);
  },
  playJumpSound: function playJumpSound() {
    // Play the sound.
    // repeat = false.
    cc.audioEngine.playEffect(this.jumpAudio, false);
  },
  onKeyDown: function onKeyDown(event) {
    // 키보드 이벤트 처리.
    switch (event.keyCode) {
      case cc.macro.KEY.a:
        this.accLeft = true;
        break;

      case cc.macro.KEY.d:
        this.accRight = true;
        break;
    }
  },
  onKeyUp: function onKeyUp(event) {
    // 키보드 이벤트 처리.
    switch (event.keyCode) {
      case cc.macro.KEY.a:
        this.accLeft = false;
        break;

      case cc.macro.KEY.d:
        this.accRight = false;
        break;
    }
  },
  update: function update(dt) {
    if (this.accLeft) {
      this.moveSpeed = -150;
    } else if (this.accRight) {
      this.moveSpeed = 150;
    } // 주인공의 위치 업데이트


    this.node.x += this.moveSpeed * dt;

    if (this.node.x < -480) {
      this.node.x = -480;
    }

    if (this.node.x > 480) {
      this.node.x = 480;
    }
  }
});

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcMDIuIFNjcmlwdFxcUGxheWVyLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwianVtcEF1ZGlvIiwidHlwZSIsIkF1ZGlvQ2xpcCIsIm9uTG9hZCIsImFjY0xlZnQiLCJhY2NSaWdodCIsIm1vdmVTcGVlZCIsInN5c3RlbUV2ZW50Iiwib24iLCJTeXN0ZW1FdmVudCIsIkV2ZW50VHlwZSIsIktFWV9ET1dOIiwib25LZXlEb3duIiwiS0VZX1VQIiwib25LZXlVcCIsImRvSnVtcEFjdGlvbiIsIm9uRGVzdHJveSIsIm9mZiIsImp1bXBVcCIsIm1vdmVCeSIsInYyIiwianVtcERvd24iLCJjYWxsYmFjayIsImNhbGxGdW5jIiwicGxheUp1bXBTb3VuZCIsInJlcCIsInJlcGVhdEZvcmV2ZXIiLCJzZXF1ZW5jZSIsIm5vZGUiLCJydW5BY3Rpb24iLCJhdWRpb0VuZ2luZSIsInBsYXlFZmZlY3QiLCJldmVudCIsImtleUNvZGUiLCJtYWNybyIsIktFWSIsImEiLCJkIiwidXBkYXRlIiwiZHQiLCJ4Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUNBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNMLGFBQVNELEVBQUUsQ0FBQ0UsU0FEUDtBQUdMQyxFQUFBQSxVQUFVLEVBQUU7QUFDUjtBQUNBQyxJQUFBQSxTQUFTLEVBQUU7QUFDUEMsTUFBQUEsSUFBSSxFQUFFTCxFQUFFLENBQUNNLFNBREY7QUFFUCxpQkFBUztBQUZGO0FBRkgsR0FIUDtBQVdMQyxFQUFBQSxNQUFNLEVBQUUsa0JBQVk7QUFDaEIsU0FBS0MsT0FBTCxHQUFlLEtBQWY7QUFDQSxTQUFLQyxRQUFMLEdBQWdCLEtBQWhCO0FBQ0EsU0FBS0MsU0FBTCxHQUFpQixDQUFqQixDQUhnQixDQUtoQjtBQUNBOztBQUNBVixJQUFBQSxFQUFFLENBQUNXLFdBQUgsQ0FBZUMsRUFBZixDQUFrQlosRUFBRSxDQUFDYSxXQUFILENBQWVD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QUwsR0FBaUIsR0FBakI7QUFDSCxLQUxNLENBTVA7OztBQUNBLFNBQUtzQixJQUFMLENBQVVZLENBQVYsSUFBZSxLQUFLbEMsU0FBTCxHQUFpQmlDLEVBQWhDOztBQUNBLFFBQUksS0FBS1gsSUFBTCxDQUFVWSxDQUFWLEdBQWMsQ0FBQyxHQUFuQixFQUF3QjtBQUNwQixXQUFLWixJQUFMLENBQVVZLENBQVYsR0FBYyxDQUFDLEdBQWY7QUFDSDs7QUFDRCxRQUFJLEtBQUtaLElBQUwsQ0FBVVksQ0FBVixHQUFjLEdBQWxCLEVBQXVCO0FBQ25CLFdBQUtaLElBQUwsQ0FBVVksQ0FBVixHQUFjLEdBQWQ7QUFDSDtBQUNKO0FBMUZJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5jYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIC8vIEp1bXAgU291bmQuXHJcbiAgICAgICAganVtcEF1ZGlvOiB7XHJcbiAgICAgICAgICAgIHR5cGU6IGNjLkF1ZGlvQ2xpcCxcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICB9LFxyXG5cclxuICAgIH0sXHJcbiAgICBvbkxvYWQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLmFjY0xlZnQgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmFjY1JpZ2h0ID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5tb3ZlU3BlZWQgPSAwO1xyXG5cclxuICAgICAgICAvLyAvLyDtgqTrs7Trk5wg7J6F66ClIOydtOuypO2KuFxyXG4gICAgICAgIC8v7J2067Kk7Yq4IO2CpOybjOuTnCwg7L2c67CxIO2VqOyImCwgdGhpcyDtgqTsm4zrk5wg7J6Q6riwIOyekOyLoCDqsIDrpqztgqTquLAuXHJcbiAgICAgICAgY2Muc3lzdGVtRXZlbnQub24oY2MuU3lzdGVtRXZlbnQuRXZlbnRUeXBlLktFWV9ET1dOLCB0aGlzLm9uS2V5RG93biwgdGhpcyk7XHJcbiAgICAgICAgY2Muc3lzdGVtRXZlbnQub24oY2MuU3lzdGVtRXZlbnQuRXZlbnRUeXBlLktFWV9VUCwgdGhpcy5vbktleVVwLCB0aGlzKTtcclxuXHJcbiAgICAgICAgLy8g7Iuc7J6R6rO8IOuPmeyLnOyXkCDso7zsnbjqs7Ug7KCQ7ZSEIOuPmeyekS5cclxuICAgICAgICB0aGlzLmRvSnVtcEFjdGlvbigpO1xyXG5cclxuICAgIH0sXHJcblxyXG4gICAgb25EZXN0cm95KCkge1xyXG4gICAgICAgIC8vIO2CpOuztOuTnCDsnoXroKUg7J2067Kk7Yq4IOyCreygnFxyXG4gICAgICAgIGNjLnN5c3RlbUV2ZW50Lm9mZihjYy5TeXN0ZW1FdmVudC5FdmVudFR5cGUuS0VZX0RPV04sIHRoaXMub25LZXlEb3duLCB0aGlzKTtcclxuICAgICAgICBjYy5zeXN0ZW1FdmVudC5vZmYoY2MuU3lzdGVtRXZlbnQuRXZlbnRUeXBlLktFWV9VUCwgdGhpcy5vbktleVVwLCB0aGlzKTtcclxuICAgIH0sXHJcblxyXG5cclxuICAgIGRvSnVtcEFjdGlvbjogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIC8vIDAuNCA07LSI64+Z7JWIIFkg7LaV7Jy866GcIDMwMCDsmKzrnbzqsITri6QuXHJcbiAgICAgICAgY29uc3QganVtcFVwID0gY2MubW92ZUJ5KDAuNCwgY2MudjIoMCwgMzAwKSk7XHJcbiAgICAgICAgLy8gMC40IDTstIjrj5nslYggWSDstpXsnLzroZwgMzAwIOuCtOugpOqwhOuLpC5cclxuICAgICAgICBjb25zdCBqdW1wRG93biA9IGNjLm1vdmVCeSgwLjQsIGNjLnYyKDAsIC0zMDApKTtcclxuICAgICAgICBjb25zdCBjYWxsYmFjayA9IGNjLmNhbGxGdW5jKHRoaXMucGxheUp1bXBTb3VuZCwgdGhpcyk7XHJcbiAgICAgICAgLy8gc2VxdWVuY2Ug7Jes65+sIOqwnOydmCDslaHshZjsnYQg7ZWY64KY7J2YIOyVoeyFmOycvOuhnCDrrLbripTri6QuXHJcbiAgICAgICAgLy8g7Iuc7YCA7Iqk66W8IOustO2VnO2eiCDrsJjrs7XtlZzri6QuXHJcbiAgICAgICAgY29uc3QgcmVwID0gY2MucmVwZWF0Rm9yZXZlcihjYy5zZXF1ZW5jZShqdW1wVXAsIGp1bXBEb3duLCBjYWxsYmFjaykpO1xyXG5cclxuICAgICAgICB0aGlzLm5vZGUucnVuQWN0aW9uKHJlcCk7ICAgICAgICBcclxuICAgIH0sXHJcblxyXG4gICAgcGxheUp1bXBTb3VuZDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIC8vIFBsYXkgdGhlIHNvdW5kLlxyXG4gICAgICAgIC8vIHJlcGVhdCA9IGZhbHNlLlxyXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy5qdW1wQXVkaW8sIGZhbHNlKTtcclxuICAgIH0sXHJcblxyXG4gICAgb25LZXlEb3duOiBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgICAvLyDtgqTrs7Trk5wg7J2067Kk7Yq4IOyymOumrC5cclxuICAgICAgICBzd2l0Y2ggKGV2ZW50LmtleUNvZGUpIHtcclxuICAgICAgICAgICAgY2FzZSBjYy5tYWNyby5LRVkuYTpcclxuICAgICAgICAgICAgICAgIHRoaXMuYWNjTGVmdCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBjYy5tYWNyby5LRVkuZDpcclxuICAgICAgICAgICAgICAgIHRoaXMuYWNjUmlnaHQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICBvbktleVVwOiBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgICAvLyDtgqTrs7Trk5wg7J2067Kk7Yq4IOyymOumrC5cclxuICAgICAgICBzd2l0Y2ggKGV2ZW50LmtleUNvZGUpIHtcclxuICAgICAgICAgICAgY2FzZSBjYy5tYWNyby5LRVkuYTpcclxuICAgICAgICAgICAgICAgIHRoaXMuYWNjTGVmdCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgY2MubWFjcm8uS0VZLmQ6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFjY1JpZ2h0ID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIHVwZGF0ZShkdCkge1xyXG4gICAgICAgIGlmICh0aGlzLmFjY0xlZnQpIHtcclxuICAgICAgICAgICAgdGhpcy5tb3ZlU3BlZWQgPSAtMTUwO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5hY2NSaWdodCkge1xyXG4gICAgICAgICAgICB0aGlzLm1vdmVTcGVlZCA9IDE1MDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8g7KO87J246rO17J2YIOychOy5mCDsl4XrjbDsnbTtirhcclxuICAgICAgICB0aGlzLm5vZGUueCArPSB0aGlzLm1vdmVTcGVlZCAqIGR0O1xyXG4gICAgICAgIGlmICh0aGlzLm5vZGUueCA8IC00ODApIHtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLnggPSAtNDgwO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5ub2RlLnggPiA0ODApIHtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLnggPSA0ODA7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxufSk7XHJcbiJdfQ==