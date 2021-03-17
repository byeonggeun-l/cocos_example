
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