
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__qc_index__.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}
require('./assets/02. Script/Game');
require('./assets/02. Script/Player');
require('./assets/02. Script/Star');

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
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/02. Script/Game.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '277bdyzslpEEZJuSYZC7Ruz', 'Game');
// 02. Script/Game.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    starPrefab: cc.Prefab,
    player: cc.Node,
    scoreDisplay: cc.Label,
    scoreAudio: {
      type: cc.AudioClip,
      "default": null
    }
  },
  onLoad: function onLoad() {
    // 별의 지속시간 설정.
    this.starDuration = 3.0; // 득점 초기화.

    this.score = 0; // 새로운 별 계속 생성, 별의 지속 시간 참조.

    cc.director.getScheduler().schedule(this.spawnNewStar, this, this.starDuration);
  },
  spawnNewStar: function spawnNewStar() {
    // 프리팹을 사용하여 새 노드 생성.
    // instantiate = 객체 복사 함수.(프리팹을 넣어도 된다.)
    var newStar = cc.instantiate(this.starPrefab);
    this.node.addChild(newStar);
    newStar.setPosition(this.getNewStarPosition()); // 스타 프리팹을 만들고, 
    // 겟 컴포넌트를 통해 Star 를 구하고,
    // 해당 프리팹의 game 변수 안에 나 자신(Game.js)의 참조를 넣는다. 

    newStar.getComponent('Star').game = this;
  },
  getNewStarPosition: function getNewStarPosition() {
    // 지면보다는 높고, Canvas의 높이보단 아래로.
    var maxY = this.node.height / 2;
    var randY = this.getRandom(0, maxY) - 60; // 현재 캔버스 넓이는 960이다.
    // 960에 딱 맞게 Star 인스턴스가 끝 쪽에 생성이 되면 
    // 짤려 보일 수도 있다. 그래서 -60 을 한다. 

    var maxX = this.node.width - 60; // 또한 캐릭터는 -450 ~ +450 위치에 있으므로,
    // 최솟값 0, 최댓값 900의 결과값에서 -450 을 빼줘야,
    // -450 ~ +450 안에서 랜덤값을 얻을 수 있다.

    var randX = this.getRandom(0, maxX) - 450; // 랜덤 좌표 반환.

    return cc.v2(randX, randY);
  },
  getRandom: function getRandom(min, max) {
    return Math.round(Math.random() * (max - min) + min);
  },
  gainScore: function gainScore() {
    this.score += 1;
    this.scoreDisplay.string = "Score : " + this.score; // false = 자동재생 여부 = No.

    cc.audioEngine.playEffect(this.scoreAudio, false);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcMDIuIFNjcmlwdFxcR2FtZS5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsInN0YXJQcmVmYWIiLCJQcmVmYWIiLCJwbGF5ZXIiLCJOb2RlIiwic2NvcmVEaXNwbGF5IiwiTGFiZWwiLCJzY29yZUF1ZGlvIiwidHlwZSIsIkF1ZGlvQ2xpcCIsIm9uTG9hZCIsInN0YXJEdXJhdGlvbiIsInNjb3JlIiwiZGlyZWN0b3IiLCJnZXRTY2hlZHVsZXIiLCJzY2hlZHVsZSIsInNwYXduTmV3U3RhciIsIm5ld1N0YXIiLCJpbnN0YW50aWF0ZSIsIm5vZGUiLCJhZGRDaGlsZCIsInNldFBvc2l0aW9uIiwiZ2V0TmV3U3RhclBvc2l0aW9uIiwiZ2V0Q29tcG9uZW50IiwiZ2FtZSIsIm1heFkiLCJoZWlnaHQiLCJyYW5kWSIsImdldFJhbmRvbSIsIm1heFgiLCJ3aWR0aCIsInJhbmRYIiwidjIiLCJtaW4iLCJtYXgiLCJNYXRoIiwicm91bmQiLCJyYW5kb20iLCJnYWluU2NvcmUiLCJzdHJpbmciLCJhdWRpb0VuZ2luZSIsInBsYXlFZmZlY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0FBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FBR0xDLEVBQUFBLFVBQVUsRUFBRTtBQUNSQyxJQUFBQSxVQUFVLEVBQUVKLEVBQUUsQ0FBQ0ssTUFEUDtBQUVSQyxJQUFBQSxNQUFNLEVBQUVOLEVBQUUsQ0FBQ08sSUFGSDtBQUdSQyxJQUFBQSxZQUFZLEVBQUVSLEVBQUUsQ0FBQ1MsS0FIVDtBQUlSQyxJQUFBQSxVQUFVLEVBQUU7QUFDUkMsTUFBQUEsSUFBSSxFQUFFWCxFQUFFLENBQUNZLFNBREQ7QUFFUixpQkFBUTtBQUZBO0FBSkosR0FIUDtBQWNMQyxFQUFBQSxNQUFNLEVBQUUsa0JBQVk7QUFDaEI7QUFDQSxTQUFLQyxZQUFMLEdBQW9CLEdBQXBCLENBRmdCLENBR2hCOztBQUNBLFNBQUtDLEtBQUwsR0FBYSxDQUFiLENBSmdCLENBS2hCOztBQUNBZixJQUFBQSxFQUFFLENBQUNnQixRQUFILENBQVlDLFlBQVosR0FBMkJDLFFBQTNCLENBQW9DLEtBQUtDLFlBQXpDLEVBQXVELElBQXZELEVBQTZELEtBQUtMLFlBQWxFO0FBQ0gsR0FyQkk7QUF1QkxLLEVBQUFBLFlBQVksRUFBRSx3QkFBWTtBQUN0QjtBQUNBO0FBQ0EsUUFBTUMsT0FBTyxHQUFHcEIsRUFBRSxDQUFDcUIsV0FBSCxDQUFlLEtBQUtqQixVQUFwQixDQUFoQjtBQUNBLFNBQUtrQixJQUFMLENBQVVDLFFBQVYsQ0FBbUJILE9BQW5CO0FBQ0FBLElBQUFBLE9BQU8sQ0FBQ0ksV0FBUixDQUFvQixLQUFLQyxrQkFBTCxFQUFwQixFQUxzQixDQU10QjtBQUNBO0FBQ0E7O0FBQ0FMLElBQUFBLE9BQU8sQ0FBQ00sWUFBUixDQUFxQixNQUFyQixFQUE2QkMsSUFBN0IsR0FBb0MsSUFBcEM7QUFDSCxHQWpDSTtBQW1DTEYsRUFBQUEsa0JBQWtCLEVBQUUsOEJBQVk7QUFDNUI7QUFDQSxRQUFJRyxJQUFJLEdBQUcsS0FBS04sSUFBTCxDQUFVTyxNQUFWLEdBQW1CLENBQTlCO0FBQ0EsUUFBSUMsS0FBSyxHQUFHLEtBQUtDLFNBQUwsQ0FBZSxDQUFmLEVBQWtCSCxJQUFsQixJQUEwQixFQUF0QyxDQUg0QixDQUs1QjtBQUNBO0FBQ0E7O0FBQ0EsUUFBSUksSUFBSSxHQUFHLEtBQUtWLElBQUwsQ0FBVVcsS0FBVixHQUFrQixFQUE3QixDQVI0QixDQVM1QjtBQUNBO0FBQ0E7O0FBQ0EsUUFBSUMsS0FBSyxHQUFHLEtBQUtILFNBQUwsQ0FBZSxDQUFmLEVBQWtCQyxJQUFsQixJQUEwQixHQUF0QyxDQVo0QixDQWM1Qjs7QUFDQSxXQUFPaEMsRUFBRSxDQUFDbUMsRUFBSCxDQUFNRCxLQUFOLEVBQWFKLEtBQWIsQ0FBUDtBQUNILEdBbkRJO0FBcURMQyxFQUFBQSxTQUFTLEVBQUUsbUJBQVVLLEdBQVYsRUFBZUMsR0FBZixFQUFvQjtBQUMzQixXQUFPQyxJQUFJLENBQUNDLEtBQUwsQ0FBV0QsSUFBSSxDQUFDRSxNQUFMLE1BQWlCSCxHQUFHLEdBQUdELEdBQXZCLElBQThCQSxHQUF6QyxDQUFQO0FBQ0gsR0F2REk7QUF5RExLLEVBQUFBLFNBQVMsRUFBRSxxQkFBWTtBQUNuQixTQUFLMUIsS0FBTCxJQUFjLENBQWQ7QUFDQSxTQUFLUCxZQUFMLENBQWtCa0MsTUFBbEIsR0FBMkIsYUFBYSxLQUFLM0IsS0FBN0MsQ0FGbUIsQ0FHbkI7O0FBQ0FmLElBQUFBLEVBQUUsQ0FBQzJDLFdBQUgsQ0FBZUMsVUFBZixDQUEwQixLQUFLbEMsVUFBL0IsRUFBMkMsS0FBM0M7QUFDSDtBQTlESSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcclxuY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICBzdGFyUHJlZmFiOiBjYy5QcmVmYWIsXHJcbiAgICAgICAgcGxheWVyOiBjYy5Ob2RlLFxyXG4gICAgICAgIHNjb3JlRGlzcGxheTogY2MuTGFiZWwsXHJcbiAgICAgICAgc2NvcmVBdWRpbzoge1xyXG4gICAgICAgICAgICB0eXBlOiBjYy5BdWRpb0NsaXAsXHJcbiAgICAgICAgICAgIGRlZmF1bHQ6bnVsbCxcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuXHJcbiAgICBvbkxvYWQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAvLyDrs4TsnZgg7KeA7IaN7Iuc6rCEIOyEpOyglS5cclxuICAgICAgICB0aGlzLnN0YXJEdXJhdGlvbiA9IDMuMDtcclxuICAgICAgICAvLyDrk53soJAg7LSI6riw7ZmULlxyXG4gICAgICAgIHRoaXMuc2NvcmUgPSAwO1xyXG4gICAgICAgIC8vIOyDiOuhnOyatCDrs4Qg6rOE7IaNIOyDneyEsSwg67OE7J2YIOyngOyGjSDsi5zqsIQg7LC47KGwLlxyXG4gICAgICAgIGNjLmRpcmVjdG9yLmdldFNjaGVkdWxlcigpLnNjaGVkdWxlKHRoaXMuc3Bhd25OZXdTdGFyLCB0aGlzLCB0aGlzLnN0YXJEdXJhdGlvbik7XHJcbiAgICB9LFxyXG5cclxuICAgIHNwYXduTmV3U3RhcjogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIC8vIO2UhOumrO2MueydhCDsgqzsmqntlZjsl6wg7IOIIOuFuOuTnCDsg53shLEuXHJcbiAgICAgICAgLy8gaW5zdGFudGlhdGUgPSDqsJ3ssrQg67O17IKsIO2VqOyImC4o7ZSE66as7Yy57J2EIOuEo+yWtOuPhCDrkJzri6QuKVxyXG4gICAgICAgIGNvbnN0IG5ld1N0YXIgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnN0YXJQcmVmYWIpO1xyXG4gICAgICAgIHRoaXMubm9kZS5hZGRDaGlsZChuZXdTdGFyKTtcclxuICAgICAgICBuZXdTdGFyLnNldFBvc2l0aW9uKHRoaXMuZ2V0TmV3U3RhclBvc2l0aW9uKCkpO1xyXG4gICAgICAgIC8vIOyKpO2DgCDtlITrpqztjLnsnYQg66eM65Ok6rOgLCBcclxuICAgICAgICAvLyDqsp8g7Lu07Y+s64SM7Yq466W8IO2Gte2VtCBTdGFyIOulvCDqtaztlZjqs6AsXHJcbiAgICAgICAgLy8g7ZW064u5IO2UhOumrO2MueydmCBnYW1lIOuzgOyImCDslYjsl5Ag64KYIOyekOyLoChHYW1lLmpzKeydmCDssLjsobDrpbwg64Sj64qU64ukLiBcclxuICAgICAgICBuZXdTdGFyLmdldENvbXBvbmVudCgnU3RhcicpLmdhbWUgPSB0aGlzO1xyXG4gICAgfSxcclxuXHJcbiAgICBnZXROZXdTdGFyUG9zaXRpb246IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAvLyDsp4DrqbTrs7Tri6TripQg64aS6rOgLCBDYW52YXPsnZgg64aS7J2067O064uoIOyVhOuemOuhnC5cclxuICAgICAgICB2YXIgbWF4WSA9IHRoaXMubm9kZS5oZWlnaHQgLyAyO1xyXG4gICAgICAgIHZhciByYW5kWSA9IHRoaXMuZ2V0UmFuZG9tKDAsIG1heFkpIC0gNjA7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8g7ZiE7J6sIOy6lOuyhOyKpCDrhJPsnbTripQgOTYw7J2064ukLlxyXG4gICAgICAgIC8vIDk2MOyXkCDrlLEg66ee6rKMIFN0YXIg7J247Iqk7YS07Iqk6rCAIOuBnSDsqr3sl5Ag7IOd7ISx7J20IOuQmOuptCBcclxuICAgICAgICAvLyDsp6TroKQg67O07J28IOyImOuPhCDsnojri6QuIOq3uOuemOyEnCAtNjAg7J2EIO2VnOuLpC4gXHJcbiAgICAgICAgdmFyIG1heFggPSB0aGlzLm5vZGUud2lkdGggLSA2MDtcclxuICAgICAgICAvLyDrmJDtlZwg7LqQ66at7YSw64qUIC00NTAgfiArNDUwIOychOy5mOyXkCDsnojsnLzrr4DroZwsXHJcbiAgICAgICAgLy8g7LWc7Iaf6rCSIDAsIOy1nOuMk+qwkiA5MDDsnZgg6rKw6rO86rCS7JeQ7IScIC00NTAg7J2EIOu5vOykmOyVvCxcclxuICAgICAgICAvLyAtNDUwIH4gKzQ1MCDslYjsl5DshJwg656c642k6rCS7J2EIOyWu+ydhCDsiJgg7J6I64ukLlxyXG4gICAgICAgIHZhciByYW5kWCA9IHRoaXMuZ2V0UmFuZG9tKDAsIG1heFgpIC0gNDUwO1xyXG5cclxuICAgICAgICAvLyDrnpzrjaQg7KKM7ZGcIOuwmO2ZmC5cclxuICAgICAgICByZXR1cm4gY2MudjIocmFuZFgsIHJhbmRZKTtcclxuICAgIH0sXHJcblxyXG4gICAgZ2V0UmFuZG9tOiBmdW5jdGlvbiAobWluLCBtYXgpIHtcclxuICAgICAgICByZXR1cm4gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbikgKyBtaW4pO1xyXG4gICAgfSxcclxuICAgIFxyXG4gICAgZ2FpblNjb3JlOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5zY29yZSArPSAxO1xyXG4gICAgICAgIHRoaXMuc2NvcmVEaXNwbGF5LnN0cmluZyA9IFwiU2NvcmUgOiBcIiArIHRoaXMuc2NvcmU7XHJcbiAgICAgICAgLy8gZmFsc2UgPSDsnpDrj5nsnqzsg50g7Jes67aAID0gTm8uXHJcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLnNjb3JlQXVkaW8sIGZhbHNlKTtcclxuICAgIH1cclxufSk7XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/02. Script/Star.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'a49a8Vv+KpAuIonDneGH5c5', 'Star');
// 02. Script/Star.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {},
  // LIFE-CYCLE CALLBACKS:
  onLoad: function onLoad() {
    // 별과 주인공 사이의 거리가 이 값보다 작으면 수집(충돌)이 완료.
    // 별과 주인공의 크기를 이용하여 적당한 값을 판단한다.
    this.pickRadius = 60; // 타이머 초기화.

    this.timer = 0;
  },
  onPicked: function onPicked() {
    this.game.gainScore();
    this.node.destroy();
  },
  update: function update(dt) {
    // this.game 은 Game.js 로부터 참조를 가져왔다.
    if (this.timer > this.game.starDuration) {
      this.node.destroy();
      return;
    }

    this.timer += dt; // 플레이어, 별 충돌 체크.

    if (this.node.getBoundingBox().intersects(this.game.player.getBoundingBox())) {
      this.onPicked();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcMDIuIFNjcmlwdFxcU3Rhci5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsIm9uTG9hZCIsInBpY2tSYWRpdXMiLCJ0aW1lciIsIm9uUGlja2VkIiwiZ2FtZSIsImdhaW5TY29yZSIsIm5vZGUiLCJkZXN0cm95IiwidXBkYXRlIiwiZHQiLCJzdGFyRHVyYXRpb24iLCJnZXRCb3VuZGluZ0JveCIsImludGVyc2VjdHMiLCJwbGF5ZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0FBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FBR0xDLEVBQUFBLFVBQVUsRUFBRSxFQUhQO0FBTUw7QUFFQUMsRUFBQUEsTUFBTSxFQUFFLGtCQUFZO0FBQ2hCO0FBQ0E7QUFDQSxTQUFLQyxVQUFMLEdBQWtCLEVBQWxCLENBSGdCLENBSWhCOztBQUNBLFNBQUtDLEtBQUwsR0FBYSxDQUFiO0FBQ0gsR0FkSTtBQWdCTEMsRUFBQUEsUUFBUSxFQUFFLG9CQUFZO0FBQ2xCLFNBQUtDLElBQUwsQ0FBVUMsU0FBVjtBQUNBLFNBQUtDLElBQUwsQ0FBVUMsT0FBVjtBQUNILEdBbkJJO0FBcUJMQyxFQUFBQSxNQXJCSyxrQkFxQkVDLEVBckJGLEVBcUJNO0FBQ1A7QUFDQSxRQUFJLEtBQUtQLEtBQUwsR0FBYSxLQUFLRSxJQUFMLENBQVVNLFlBQTNCLEVBQXlDO0FBQ3JDLFdBQUtKLElBQUwsQ0FBVUMsT0FBVjtBQUNBO0FBQ0g7O0FBQ0QsU0FBS0wsS0FBTCxJQUFjTyxFQUFkLENBTk8sQ0FRUDs7QUFDQSxRQUFJLEtBQUtILElBQUwsQ0FBVUssY0FBVixHQUEyQkMsVUFBM0IsQ0FBc0MsS0FBS1IsSUFBTCxDQUFVUyxNQUFWLENBQWlCRixjQUFqQixFQUF0QyxDQUFKLEVBQThFO0FBQzFFLFdBQUtSLFFBQUw7QUFDSDtBQUNKO0FBakNJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5jYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgfSxcclxuXHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuXHJcbiAgICBvbkxvYWQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAvLyDrs4Tqs7wg7KO87J246rO1IOyCrOydtOydmCDqsbDrpqzqsIAg7J20IOqwkuuztOuLpCDsnpHsnLzrqbQg7IiY7KeRKOy2qeuPjCnsnbQg7JmE66OMLlxyXG4gICAgICAgIC8vIOuzhOqzvCDso7zsnbjqs7XsnZgg7YGs6riw66W8IOydtOyaqe2VmOyXrCDsoIHri7ntlZwg6rCS7J2EIO2MkOuLqO2VnOuLpC5cclxuICAgICAgICB0aGlzLnBpY2tSYWRpdXMgPSA2MDtcclxuICAgICAgICAvLyDtg4DsnbTrqLgg7LSI6riw7ZmULlxyXG4gICAgICAgIHRoaXMudGltZXIgPSAwO1xyXG4gICAgfSxcclxuXHJcbiAgICBvblBpY2tlZDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuZ2FtZS5nYWluU2NvcmUoKTtcclxuICAgICAgICB0aGlzLm5vZGUuZGVzdHJveSgpO1xyXG4gICAgfSxcclxuXHJcbiAgICB1cGRhdGUoZHQpIHtcclxuICAgICAgICAvLyB0aGlzLmdhbWUg7J2AIEdhbWUuanMg66Gc67aA7YSwIOywuOyhsOulvCDqsIDsoLjsmZTri6QuXHJcbiAgICAgICAgaWYgKHRoaXMudGltZXIgPiB0aGlzLmdhbWUuc3RhckR1cmF0aW9uKSB7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy50aW1lciArPSBkdDtcclxuXHJcbiAgICAgICAgLy8g7ZSM66CI7J207Ja0LCDrs4Qg7Lap64+MIOyytO2BrC5cclxuICAgICAgICBpZiAodGhpcy5ub2RlLmdldEJvdW5kaW5nQm94KCkuaW50ZXJzZWN0cyh0aGlzLmdhbWUucGxheWVyLmdldEJvdW5kaW5nQm94KCkpKSB7XHJcbiAgICAgICAgICAgIHRoaXMub25QaWNrZWQoKTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG59KTtcclxuIl19
//------QC-SOURCE-SPLIT------
