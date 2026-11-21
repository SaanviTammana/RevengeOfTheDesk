gdjs.play_32gameCode = {};
gdjs.play_32gameCode.localVariables = [];
gdjs.play_32gameCode.idToCallbackMap = new Map();
gdjs.play_32gameCode.GDNewPanelSpriteObjects1= [];
gdjs.play_32gameCode.GDNewPanelSpriteObjects2= [];
gdjs.play_32gameCode.GDNewSprite2Objects1= [];
gdjs.play_32gameCode.GDNewSprite2Objects2= [];
gdjs.play_32gameCode.GDPlatformer_9595CharacterObjects1= [];
gdjs.play_32gameCode.GDPlatformer_9595CharacterObjects2= [];
gdjs.play_32gameCode.GDNewSprite10Objects1= [];
gdjs.play_32gameCode.GDNewSprite10Objects2= [];
gdjs.play_32gameCode.GDflagObjects1= [];
gdjs.play_32gameCode.GDflagObjects2= [];
gdjs.play_32gameCode.GDNewSprite8Objects1= [];
gdjs.play_32gameCode.GDNewSprite8Objects2= [];
gdjs.play_32gameCode.GDplayObjects1= [];
gdjs.play_32gameCode.GDplayObjects2= [];
gdjs.play_32gameCode.GDNewTextObjects1= [];
gdjs.play_32gameCode.GDNewTextObjects2= [];


gdjs.play_32gameCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("play"), gdjs.play_32gameCode.GDplayObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.play_32gameCode.GDplayObjects1.length;i<l;++i) {
    if ( gdjs.play_32gameCode.GDplayObjects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.play_32gameCode.GDplayObjects1[k] = gdjs.play_32gameCode.GDplayObjects1[i];
        ++k;
    }
}
gdjs.play_32gameCode.GDplayObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game Scene", false);
}
}

}


};

gdjs.play_32gameCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.play_32gameCode.GDNewPanelSpriteObjects1.length = 0;
gdjs.play_32gameCode.GDNewPanelSpriteObjects2.length = 0;
gdjs.play_32gameCode.GDNewSprite2Objects1.length = 0;
gdjs.play_32gameCode.GDNewSprite2Objects2.length = 0;
gdjs.play_32gameCode.GDPlatformer_9595CharacterObjects1.length = 0;
gdjs.play_32gameCode.GDPlatformer_9595CharacterObjects2.length = 0;
gdjs.play_32gameCode.GDNewSprite10Objects1.length = 0;
gdjs.play_32gameCode.GDNewSprite10Objects2.length = 0;
gdjs.play_32gameCode.GDflagObjects1.length = 0;
gdjs.play_32gameCode.GDflagObjects2.length = 0;
gdjs.play_32gameCode.GDNewSprite8Objects1.length = 0;
gdjs.play_32gameCode.GDNewSprite8Objects2.length = 0;
gdjs.play_32gameCode.GDplayObjects1.length = 0;
gdjs.play_32gameCode.GDplayObjects2.length = 0;
gdjs.play_32gameCode.GDNewTextObjects1.length = 0;
gdjs.play_32gameCode.GDNewTextObjects2.length = 0;

gdjs.play_32gameCode.eventsList0(runtimeScene);
gdjs.play_32gameCode.GDNewPanelSpriteObjects1.length = 0;
gdjs.play_32gameCode.GDNewPanelSpriteObjects2.length = 0;
gdjs.play_32gameCode.GDNewSprite2Objects1.length = 0;
gdjs.play_32gameCode.GDNewSprite2Objects2.length = 0;
gdjs.play_32gameCode.GDPlatformer_9595CharacterObjects1.length = 0;
gdjs.play_32gameCode.GDPlatformer_9595CharacterObjects2.length = 0;
gdjs.play_32gameCode.GDNewSprite10Objects1.length = 0;
gdjs.play_32gameCode.GDNewSprite10Objects2.length = 0;
gdjs.play_32gameCode.GDflagObjects1.length = 0;
gdjs.play_32gameCode.GDflagObjects2.length = 0;
gdjs.play_32gameCode.GDNewSprite8Objects1.length = 0;
gdjs.play_32gameCode.GDNewSprite8Objects2.length = 0;
gdjs.play_32gameCode.GDplayObjects1.length = 0;
gdjs.play_32gameCode.GDplayObjects2.length = 0;
gdjs.play_32gameCode.GDNewTextObjects1.length = 0;
gdjs.play_32gameCode.GDNewTextObjects2.length = 0;


return;

}

gdjs['play_32gameCode'] = gdjs.play_32gameCode;
