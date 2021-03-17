
cc.Class({
    extends: cc.Component,

    properties: {
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad: function () {
        // 별과 주인공 사이의 거리가 이 값보다 작으면 수집(충돌)이 완료.
        // 별과 주인공의 크기를 이용하여 적당한 값을 판단한다.
        this.pickRadius = 60;
        // 타이머 초기화.
        this.timer = 0;
    },

    onPicked: function () {
        this.game.gainScore();
        this.node.destroy();
    },

    update(dt) {
        // this.game 은 Game.js 로부터 참조를 가져왔다.
        if (this.timer > this.game.starDuration) {
            this.node.destroy();
            return;
        }
        this.timer += dt;

        // 플레이어, 별 충돌 체크.
        if (this.node.getBoundingBox().intersects(this.game.player.getBoundingBox())) {
            this.onPicked();
        }
    },
});
