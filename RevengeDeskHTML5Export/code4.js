gdjs.Game_32overCode = {};
gdjs.Game_32overCode.localVariables = [];
gdjs.Game_32overCode.idToCallbackMap = new Map();
gdjs.Game_32overCode.GDNewPanelSpriteObjects1= [];
gdjs.Game_32overCode.GDNewPanelSpriteObjects2= [];
gdjs.Game_32overCode.GDPlatformer_9595CharacterObjects1= [];
gdjs.Game_32overCode.GDPlatformer_9595CharacterObjects2= [];
gdjs.Game_32overCode.GDNewSprite10Objects1= [];
gdjs.Game_32overCode.GDNewSprite10Objects2= [];
gdjs.Game_32overCode.GDflagObjects1= [];
gdjs.Game_32overCode.GDflagObjects2= [];
gdjs.Game_32overCode.GDNewSprite8Objects1= [];
gdjs.Game_32overCode.GDNewSprite8Objects2= [];
gdjs.Game_32overCode.GDplayObjects1= [];
gdjs.Game_32overCode.GDplayObjects2= [];
gdjs.Game_32overCode.GDNewTextObjects1= [];
gdjs.Game_32overCode.GDNewTextObjects2= [];


gdjs.Game_32overCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("play"), gdjs.Game_32overCode.GDplayObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32overCode.GDplayObjects1.length;i<l;++i) {
    if ( gdjs.Game_32overCode.GDplayObjects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.Game_32overCode.GDplayObjects1[k] = gdjs.Game_32overCode.GDplayObjects1[i];
        ++k;
    }
}
gdjs.Game_32overCode.GDplayObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "play game", false);
}
}

}


};

gdjs.Game_32overCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Game_32overCode.GDNewPanelSpriteObjects1.length = 0;
gdjs.Game_32overCode.GDNewPanelSpriteObjects2.length = 0;
gdjs.Game_32overCode.GDPlatformer_9595CharacterObjects1.length = 0;
gdjs.Game_32overCode.GDPlatformer_9595CharacterObjects2.length = 0;
gdjs.Game_32overCode.GDNewSprite10Objects1.length = 0;
gdjs.Game_32overCode.GDNewSprite10Objects2.length = 0;
gdjs.Game_32overCode.GDflagObjects1.length = 0;
gdjs.Game_32overCode.GDflagObjects2.length = 0;
gdjs.Game_32overCode.GDNewSprite8Objects1.length = 0;
gdjs.Game_32overCode.GDNewSprite8Objects2.length = 0;
gdjs.Game_32overCode.GDplayObjects1.length = 0;
gdjs.Game_32overCode.GDplayObjects2.length = 0;
gdjs.Game_32overCode.GDNewTextObjects1.length = 0;
gdjs.Game_32overCode.GDNewTextObjects2.length = 0;

gdjs.Game_32overCode.eventsList0(runtimeScene);
gdjs.Game_32overCode.GDNewPanelSpriteObjects1.length = 0;
gdjs.Game_32overCode.GDNewPanelSpriteObjects2.length = 0;
gdjs.Game_32overCode.GDPlatformer_9595CharacterObjects1.length = 0;
gdjs.Game_32overCode.GDPlatformer_9595CharacterObjects2.length = 0;
gdjs.Game_32overCode.GDNewSprite10Objects1.length = 0;
gdjs.Game_32overCode.GDNewSprite10Objects2.length = 0;
gdjs.Game_32overCode.GDflagObjects1.length = 0;
gdjs.Game_32overCode.GDflagObjects2.length = 0;
gdjs.Game_32overCode.GDNewSprite8Objects1.length = 0;
gdjs.Game_32overCode.GDNewSprite8Objects2.length = 0;
gdjs.Game_32overCode.GDplayObjects1.length = 0;
gdjs.Game_32overCode.GDplayObjects2.length = 0;
gdjs.Game_32overCode.GDNewTextObjects1.length = 0;
gdjs.Game_32overCode.GDNewTextObjects2.length = 0;


return;

}

gdjs['Game_32overCode'] = gdjs.Game_32overCode;
