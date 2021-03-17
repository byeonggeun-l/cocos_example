
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