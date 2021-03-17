"use strict";
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