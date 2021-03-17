window.__require=function t(e,c,i){function n(s,r){if(!c[s]){if(!e[s]){var a=s.split("/");if(a=a[a.length-1],!e[a]){var u="function"==typeof __require&&__require;if(!r&&u)return u(a,!0);if(o)return o(a,!0);throw new Error("Cannot find module '"+s+"'")}s=a}var h=c[s]={exports:{}};e[s][0].call(h.exports,function(t){return n(e[s][1][t]||t)},h,h.exports,t,e,c,i)}return c[s].exports}for(var o="function"==typeof __require&&__require,s=0;s<i.length;s++)n(i[s]);return n}({Game:[function(t,e){"use strict";cc._RF.push(e,"277bdyzslpEEZJuSYZC7Ruz","Game"),cc.Class({extends:cc.Component,properties:{starPrefab:cc.Prefab,player:cc.Node,scoreDisplay:cc.Label,scoreAudio:{type:cc.AudioClip,default:null}},onLoad:function(){this.starDuration=3,this.score=0,cc.director.getScheduler().schedule(this.spawnNewStar,this,this.starDuration)},spawnNewStar:function(){var t=cc.instantiate(this.starPrefab);this.node.addChild(t),t.setPosition(this.getNewStarPosition()),t.getComponent("Star").game=this},getNewStarPosition:function(){var t=this.node.height/2,e=this.getRandom(0,t)-60,c=this.node.width-60,i=this.getRandom(0,c)-450;return cc.v2(i,e)},getRandom:function(t,e){return Math.round(Math.random()*(e-t)+t)},gainScore:function(){this.score+=1,this.scoreDisplay.string="Scrong : "+this.score,cc.audioEngine.playEffect(this.scoreAudio,!1)}}),cc._RF.pop()},{}],Player:[function(t,e){"use strict";cc._RF.push(e,"3211fAVjkJHdadtwF4RtS0g","Player"),cc.Class({extends:cc.Component,properties:{jumpAudio:{type:cc.AudioClip,default:null}},onLoad:function(){this.accLeft=!1,this.accRight=!1,this.moveSpeed=0,cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN,this.onKeyDown,this),cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP,this.onKeyUp,this),this.doJumpAction()},onDestroy:function(){cc.systemEvent.off(cc.SystemEvent.EventType.KEY_DOWN,this.onKeyDown,this),cc.systemEvent.off(cc.SystemEvent.EventType.KEY_UP,this.onKeyUp,this)},doJumpAction:function(){var t=cc.moveBy(.4,cc.v2(0,300)),e=cc.moveBy(.4,cc.v2(0,-300)),c=cc.callFunc(this.playJumpSound,this),i=cc.repeatForever(cc.sequence(t,e,c));this.node.runAction(i)},playJumpSound:function(){cc.audioEngine.playEffect(this.jumpAudio,!1)},onKeyDown:function(t){switch(t.keyCode){case cc.macro.KEY.a:this.accLeft=!0;break;case cc.macro.KEY.d:this.accRight=!0}},onKeyUp:function(t){switch(t.keyCode){case cc.macro.KEY.a:this.accLeft=!1;break;case cc.macro.KEY.d:this.accRight=!1}},update:function(t){this.accLeft?this.moveSpeed=-150:this.accRight&&(this.moveSpeed=150),this.node.x+=this.moveSpeed*t,this.node.x<-480&&(this.node.x=-480),this.node.x>480&&(this.node.x=480)}}),cc._RF.pop()},{}],Star:[function(t,e){"use strict";cc._RF.push(e,"a49a8Vv+KpAuIonDneGH5c5","Star"),cc.Class({extends:cc.Component,properties:{},onLoad:function(){this.pickRadius=60,this.timer=0},getPlayerDistance:function(){var t=this.game.player.getPosition();return this.node.position.sub(t).mag()},onPicked:function(){this.game.gainScore(),this.node.destroy()},update:function(t){this.timer>this.game.starDuration?this.node.destroy():(this.timer+=t,this.node.getBoundingBox().intersects(this.game.player.getBoundingBox())&&this.onPicked())}}),cc._RF.pop()},{}]},{},["Game","Player","Star"]);