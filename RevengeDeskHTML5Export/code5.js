gdjs.win_32sceneCode = {};
gdjs.win_32sceneCode.localVariables = [];
gdjs.win_32sceneCode.idToCallbackMap = new Map();
gdjs.win_32sceneCode.GDNewPanelSpriteObjects1= [];
gdjs.win_32sceneCode.GDNewPanelSpriteObjects2= [];
gdjs.win_32sceneCode.GDPlatformer_9595CharacterObjects1= [];
gdjs.win_32sceneCode.GDPlatformer_9595CharacterObjects2= [];
gdjs.win_32sceneCode.GDNewSprite10Objects1= [];
gdjs.win_32sceneCode.GDNewSprite10Objects2= [];
gdjs.win_32sceneCode.GDflagObjects1= [];
gdjs.win_32sceneCode.GDflagObjects2= [];
gdjs.win_32sceneCode.GDNewSprite8Objects1= [];
gdjs.win_32sceneCode.GDNewSprite8Objects2= [];
gdjs.win_32sceneCode.GDplayObjects1= [];
gdjs.win_32sceneCode.GDplayObjects2= [];
gdjs.win_32sceneCode.GDNewTextObjects1= [];
gdjs.win_32sceneCode.GDNewTextObjects2= [];


gdjs.win_32sceneCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("play"), gdjs.win_32sceneCode.GDplayObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.win_32sceneCode.GDplayObjects1.length;i<l;++i) {
    if ( gdjs.win_32sceneCode.GDplayObjects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.win_32sceneCode.GDplayObjects1[k] = gdjs.win_32sceneCode.GDplayObjects1[i];
        ++k;
    }
}
gdjs.win_32sceneCode.GDplayObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "play game", false);
}
}

}


};

gdjs.win_32sceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.win_32sceneCode.GDNewPanelSpriteObjects1.length = 0;
gdjs.win_32sceneCode.GDNewPanelSpriteObjects2.length = 0;
gdjs.win_32sceneCode.GDPlatformer_9595CharacterObjects1.length = 0;
gdjs.win_32sceneCode.GDPlatformer_9595CharacterObjects2.length = 0;
gdjs.win_32sceneCode.GDNewSprite10Objects1.length = 0;
gdjs.win_32sceneCode.GDNewSprite10Objects2.length = 0;
gdjs.win_32sceneCode.GDflagObjects1.length = 0;
gdjs.win_32sceneCode.GDflagObjects2.length = 0;
gdjs.win_32sceneCode.GDNewSprite8Objects1.length = 0;
gdjs.win_32sceneCode.GDNewSprite8Objects2.length = 0;
gdjs.win_32sceneCode.GDplayObjects1.length = 0;
gdjs.win_32sceneCode.GDplayObjects2.length = 0;
gdjs.win_32sceneCode.GDNewTextObjects1.length = 0;
gdjs.win_32sceneCode.GDNewTextObjects2.length = 0;

gdjs.win_32sceneCode.eventsList0(runtimeScene);
gdjs.win_32sceneCode.GDNewPanelSpriteObjects1.length = 0;
gdjs.win_32sceneCode.GDNewPanelSpriteObjects2.length = 0;
gdjs.win_32sceneCode.GDPlatformer_9595CharacterObjects1.length = 0;
gdjs.win_32sceneCode.GDPlatformer_9595CharacterObjects2.length = 0;
gdjs.win_32sceneCode.GDNewSprite10Objects1.length = 0;
gdjs.win_32sceneCode.GDNewSprite10Objects2.length = 0;
gdjs.win_32sceneCode.GDflagObjects1.length = 0;
gdjs.win_32sceneCode.GDflagObjects2.length = 0;
gdjs.win_32sceneCode.GDNewSprite8Objects1.length = 0;
gdjs.win_32sceneCode.GDNewSprite8Objects2.length = 0;
gdjs.win_32sceneCode.GDplayObjects1.length = 0;
gdjs.win_32sceneCode.GDplayObjects2.length = 0;
gdjs.win_32sceneCode.GDNewTextObjects1.length = 0;
gdjs.win_32sceneCode.GDNewTextObjects2.length = 0;


return;

}

gdjs['win_32sceneCode'] = gdjs.win_32sceneCode;
