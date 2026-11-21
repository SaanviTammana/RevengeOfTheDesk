gdjs.Game_32Scene3Code = {};
gdjs.Game_32Scene3Code.localVariables = [];
gdjs.Game_32Scene3Code.idToCallbackMap = new Map();
gdjs.Game_32Scene3Code.forEachIndex2 = 0;

gdjs.Game_32Scene3Code.forEachObjects2 = [];

gdjs.Game_32Scene3Code.forEachTemporary2 = null;

gdjs.Game_32Scene3Code.forEachTotalCount2 = 0;

gdjs.Game_32Scene3Code.GDJumpButtonObjects1= [];
gdjs.Game_32Scene3Code.GDJumpButtonObjects2= [];
gdjs.Game_32Scene3Code.GDJumpButtonObjects3= [];
gdjs.Game_32Scene3Code.GDJumpButtonObjects4= [];
gdjs.Game_32Scene3Code.GDJoystickObjects1= [];
gdjs.Game_32Scene3Code.GDJoystickObjects2= [];
gdjs.Game_32Scene3Code.GDJoystickObjects3= [];
gdjs.Game_32Scene3Code.GDJoystickObjects4= [];
gdjs.Game_32Scene3Code.GDNewSprite3Objects1= [];
gdjs.Game_32Scene3Code.GDNewSprite3Objects2= [];
gdjs.Game_32Scene3Code.GDNewSprite3Objects3= [];
gdjs.Game_32Scene3Code.GDNewSprite3Objects4= [];
gdjs.Game_32Scene3Code.GDNewSprite2Objects1= [];
gdjs.Game_32Scene3Code.GDNewSprite2Objects2= [];
gdjs.Game_32Scene3Code.GDNewSprite2Objects3= [];
gdjs.Game_32Scene3Code.GDNewSprite2Objects4= [];
gdjs.Game_32Scene3Code.GDNewSprite4Objects1= [];
gdjs.Game_32Scene3Code.GDNewSprite4Objects2= [];
gdjs.Game_32Scene3Code.GDNewSprite4Objects3= [];
gdjs.Game_32Scene3Code.GDNewSprite4Objects4= [];
gdjs.Game_32Scene3Code.GDNewSprite5Objects1= [];
gdjs.Game_32Scene3Code.GDNewSprite5Objects2= [];
gdjs.Game_32Scene3Code.GDNewSprite5Objects3= [];
gdjs.Game_32Scene3Code.GDNewSprite5Objects4= [];
gdjs.Game_32Scene3Code.GDNewSprite6Objects1= [];
gdjs.Game_32Scene3Code.GDNewSprite6Objects2= [];
gdjs.Game_32Scene3Code.GDNewSprite6Objects3= [];
gdjs.Game_32Scene3Code.GDNewSprite6Objects4= [];
gdjs.Game_32Scene3Code.GDCoins2Objects1= [];
gdjs.Game_32Scene3Code.GDCoins2Objects2= [];
gdjs.Game_32Scene3Code.GDCoins2Objects3= [];
gdjs.Game_32Scene3Code.GDCoins2Objects4= [];
gdjs.Game_32Scene3Code.GDNewSprite7Objects1= [];
gdjs.Game_32Scene3Code.GDNewSprite7Objects2= [];
gdjs.Game_32Scene3Code.GDNewSprite7Objects3= [];
gdjs.Game_32Scene3Code.GDNewSprite7Objects4= [];
gdjs.Game_32Scene3Code.GDrightObjects1= [];
gdjs.Game_32Scene3Code.GDrightObjects2= [];
gdjs.Game_32Scene3Code.GDrightObjects3= [];
gdjs.Game_32Scene3Code.GDrightObjects4= [];
gdjs.Game_32Scene3Code.GDNewSprite9Objects1= [];
gdjs.Game_32Scene3Code.GDNewSprite9Objects2= [];
gdjs.Game_32Scene3Code.GDNewSprite9Objects3= [];
gdjs.Game_32Scene3Code.GDNewSprite9Objects4= [];
gdjs.Game_32Scene3Code.GDthwompObjects1= [];
gdjs.Game_32Scene3Code.GDthwompObjects2= [];
gdjs.Game_32Scene3Code.GDthwompObjects3= [];
gdjs.Game_32Scene3Code.GDthwompObjects4= [];
gdjs.Game_32Scene3Code.GDleftObjects1= [];
gdjs.Game_32Scene3Code.GDleftObjects2= [];
gdjs.Game_32Scene3Code.GDleftObjects3= [];
gdjs.Game_32Scene3Code.GDleftObjects4= [];
gdjs.Game_32Scene3Code.GDNewSpriteObjects1= [];
gdjs.Game_32Scene3Code.GDNewSpriteObjects2= [];
gdjs.Game_32Scene3Code.GDNewSpriteObjects3= [];
gdjs.Game_32Scene3Code.GDNewSpriteObjects4= [];
gdjs.Game_32Scene3Code.GDNewPanelSpriteObjects1= [];
gdjs.Game_32Scene3Code.GDNewPanelSpriteObjects2= [];
gdjs.Game_32Scene3Code.GDNewPanelSpriteObjects3= [];
gdjs.Game_32Scene3Code.GDNewPanelSpriteObjects4= [];
gdjs.Game_32Scene3Code.GDNewPanelSprite2Objects1= [];
gdjs.Game_32Scene3Code.GDNewPanelSprite2Objects2= [];
gdjs.Game_32Scene3Code.GDNewPanelSprite2Objects3= [];
gdjs.Game_32Scene3Code.GDNewPanelSprite2Objects4= [];
gdjs.Game_32Scene3Code.GDPlatformer_9595CharacterObjects1= [];
gdjs.Game_32Scene3Code.GDPlatformer_9595CharacterObjects2= [];
gdjs.Game_32Scene3Code.GDPlatformer_9595CharacterObjects3= [];
gdjs.Game_32Scene3Code.GDPlatformer_9595CharacterObjects4= [];
gdjs.Game_32Scene3Code.GDNewSprite10Objects1= [];
gdjs.Game_32Scene3Code.GDNewSprite10Objects2= [];
gdjs.Game_32Scene3Code.GDNewSprite10Objects3= [];
gdjs.Game_32Scene3Code.GDNewSprite10Objects4= [];
gdjs.Game_32Scene3Code.GDflagObjects1= [];
gdjs.Game_32Scene3Code.GDflagObjects2= [];
gdjs.Game_32Scene3Code.GDflagObjects3= [];
gdjs.Game_32Scene3Code.GDflagObjects4= [];
gdjs.Game_32Scene3Code.GDNewSprite8Objects1= [];
gdjs.Game_32Scene3Code.GDNewSprite8Objects2= [];
gdjs.Game_32Scene3Code.GDNewSprite8Objects3= [];
gdjs.Game_32Scene3Code.GDNewSprite8Objects4= [];
gdjs.Game_32Scene3Code.GDplayObjects1= [];
gdjs.Game_32Scene3Code.GDplayObjects2= [];
gdjs.Game_32Scene3Code.GDplayObjects3= [];
gdjs.Game_32Scene3Code.GDplayObjects4= [];
gdjs.Game_32Scene3Code.GDNewTextObjects1= [];
gdjs.Game_32Scene3Code.GDNewTextObjects2= [];
gdjs.Game_32Scene3Code.GDNewTextObjects3= [];
gdjs.Game_32Scene3Code.GDNewTextObjects4= [];


gdjs.Game_32Scene3Code.mapOfGDgdjs_9546Game_959532Scene3Code_9546GDPlatformer_95959595CharacterObjects1Objects = Hashtable.newFrom({"Platformer_Character": gdjs.Game_32Scene3Code.GDPlatformer_9595CharacterObjects1});
gdjs.Game_32Scene3Code.mapOfGDgdjs_9546Game_959532Scene3Code_9546GDCoins2Objects1Objects = Hashtable.newFrom({"Coins2": gdjs.Game_32Scene3Code.GDCoins2Objects1});
gdjs.Game_32Scene3Code.eventsList0 = function(runtimeScene) {

};gdjs.Game_32Scene3Code.eventsList1 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("thwomp"), gdjs.Game_32Scene3Code.GDthwompObjects1);

for (gdjs.Game_32Scene3Code.forEachIndex2 = 0;gdjs.Game_32Scene3Code.forEachIndex2 < gdjs.Game_32Scene3Code.GDthwompObjects1.length;++gdjs.Game_32Scene3Code.forEachIndex2) {
gdjs.Game_32Scene3Code.GDthwompObjects2.length = 0;


gdjs.Game_32Scene3Code.forEachTemporary2 = gdjs.Game_32Scene3Code.GDthwompObjects1[gdjs.Game_32Scene3Code.forEachIndex2];
gdjs.Game_32Scene3Code.GDthwompObjects2.push(gdjs.Game_32Scene3Code.forEachTemporary2);
let isConditionTrue_0 = false;
if (true) {
{for(var i = 0, len = gdjs.Game_32Scene3Code.GDthwompObjects2.length ;i < len;++i) {
    gdjs.Game_32Scene3Code.GDthwompObjects2[i].returnVariable(gdjs.Game_32Scene3Code.GDthwompObjects2[i].getVariables().getFromIndex(0)).setString("idle");
}
}
{for(var i = 0, len = gdjs.Game_32Scene3Code.GDthwompObjects2.length ;i < len;++i) {
    gdjs.Game_32Scene3Code.GDthwompObjects2[i].returnVariable(gdjs.Game_32Scene3Code.GDthwompObjects2[i].getVariables().getFromIndex(1)).setNumber((gdjs.Game_32Scene3Code.GDthwompObjects2[i].getPointY("")));
}
}
}
}

}


};gdjs.Game_32Scene3Code.mapOfGDgdjs_9546Game_959532Scene3Code_9546GDPlatformer_95959595CharacterObjects1Objects = Hashtable.newFrom({"Platformer_Character": gdjs.Game_32Scene3Code.GDPlatformer_9595CharacterObjects1});
gdjs.Game_32Scene3Code.mapOfGDgdjs_9546Game_959532Scene3Code_9546GDNewSprite6Objects1Objects = Hashtable.newFrom({"NewSprite6": gdjs.Game_32Scene3Code.GDNewSprite6Objects1});
gdjs.Game_32Scene3Code.asyncCallback18077316 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Game_32Scene3Code.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("NewSprite6"), gdjs.Game_32Scene3Code.GDNewSprite6Objects2);

{for(var i = 0, len = gdjs.Game_32Scene3Code.GDNewSprite6Objects2.length ;i < len;++i) {
    gdjs.Game_32Scene3Code.GDNewSprite6Objects2[i].deleteFromScene(runtimeScene);
}
}
gdjs.Game_32Scene3Code.localVariables.length = 0;
}
gdjs.Game_32Scene3Code.idToCallbackMap.set(18077316, gdjs.Game_32Scene3Code.asyncCallback18077316);
gdjs.Game_32Scene3Code.eventsList2 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Game_32Scene3Code.localVariables);
for (const obj of gdjs.Game_32Scene3Code.GDNewSprite6Objects1) asyncObjectsList.addObject("NewSprite6", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.Game_32Scene3Code.asyncCallback18077316(runtimeScene, asyncObjectsList)), 18077316, asyncObjectsList);
}
}

}


};gdjs.Game_32Scene3Code.mapOfGDgdjs_9546Game_959532Scene3Code_9546GDPlatformer_95959595CharacterObjects1Objects = Hashtable.newFrom({"Platformer_Character": gdjs.Game_32Scene3Code.GDPlatformer_9595CharacterObjects1});
gdjs.Game_32Scene3Code.mapOfGDgdjs_9546Game_959532Scene3Code_9546GDNewSprite7Objects1Objects = Hashtable.newFrom({"NewSprite7": gdjs.Game_32Scene3Code.GDNewSprite7Objects1});
gdjs.Game_32Scene3Code.eventsList3 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.Game_32Scene3Code.GDPlatformer_9595CharacterObjects1, gdjs.Game_32Scene3Code.GDPlatformer_9595CharacterObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32Scene3Code.GDPlatformer_9595CharacterObjects2.length;i<l;++i) {
    if ( gdjs.Game_32Scene3Code.GDPlatformer_9595CharacterObjects2[i].getBehavior("PlatformerObject").isFalling() ) {
        isConditionTrue_0 = true;
        gdjs.Game_32Scene3Code.GDPlatformer_9595CharacterObjects2[k] = gdjs.Game_32Scene3Code.GDPlatformer_9595CharacterObjects2[i];
        ++k;
    }
}
gdjs.Game_32Scene3Code.GDPlatformer_9595CharacterObjects2.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.Game_32Scene3Code.GDNewSprite7Objects1, gdjs.Game_32Scene3Code.GDNewSprite7Objects2);

/* Reuse gdjs.Game_32Scene3Code.GDPlatformer_9595CharacterObjects2 */
{for(var i = 0, len = gdjs.Game_32Scene3Code.GDPlatformer_9595CharacterObjects2.length ;i < len;++i) {
    gdjs.Game_32Scene3Code.GDPlatformer_9595CharacterObjects2[i].getBehavior("PlatformerObject").simulateJumpKey();
}
}
{for(var i = 0, len = gdjs.Game_32Scene3Code.GDNewSprite7Objects2.length ;i < len;++i) {
    gdjs.Game_32Scene3Code.GDNewSprite7Objects2[i].deleteFromScene(runtimeScene);
}
}
}

}


{

/* Reuse gdjs.Game_32Scene3Code.GDPlatformer_9595CharacterObjects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32Scene3Code.GDPlatformer_9595CharacterObjects1.length;i<l;++i) {
    if ( !(gdjs.Game_32Scene3Code.GDPlatformer_9595CharacterObjects1[i].getBehavior("PlatformerObject").isFalling()) ) {
        isConditionTrue_0 = true;
        gdjs.Game_32Scene3Code.GDPlatformer_9595CharacterObjects1[k] = gdjs.Game_32Scene3Code.GDPlatformer_9595CharacterObjects1[i];
        ++k;
    }
}
gdjs.Game_32Scene3Code.GDPlatformer_9595CharacterObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(18082036);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32Scene3Code.GDPlatformer_9595CharacterObjects1 */
{for(var i = 0, len = gdjs.Game_32Scene3Code.GDPlatformer_9595CharacterObjects1.length ;i < len;++i) {
    gdjs.Game_32Scene3Code.GDPlatformer_9595CharacterObjects1[i].getBehavior("Health").Hit(4, true, true, null);
}
}
}

}


};gdjs.Game_32Scene3Code.mapOfGDgdjs_9546Game_959532Scene3Code_9546GDPlatformer_95959595CharacterObjects1Objects = Hashtable.newFrom({"Platformer_Character": gdjs.Game_32Scene3Code.GDPlatformer_9595CharacterObjects1});
gdjs.Game_32Scene3Code.mapOfGDgdjs_9546Game_959532Scene3Code_9546GDNewSprite2Objects1Objects = Hashtable.newFrom({"NewSprite2": gdjs.Game_32Scene3Code.GDNewSprite2Objects1});
gdjs.Game_32Scene3Code.mapOfGDgdjs_9546Game_959532Scene3Code_9546GDPlatformer_95959595CharacterObjects1Objects = Hashtable.newFrom({"Platformer_Character": gdjs.Game_32Scene3Code.GDPlatformer_9595CharacterObjects1});
gdjs.Game_32Scene3Code.mapOfGDgdjs_9546Game_959532Scene3Code_9546GDthwompObjects1Objects = Hashtable.newFrom({"thwomp": gdjs.Game_32Scene3Code.GDthwompObjects1});
gdjs.Game_32Scene3Code.mapOfGDgdjs_9546Game_959532Scene3Code_9546GDNewSprite7Objects1Objects = Hashtable.newFrom({"NewSprite7": gdjs.Game_32Scene3Code.GDNewSprite7Objects1});
gdjs.Game_32Scene3Code.mapOfGDgdjs_9546Game_959532Scene3Code_9546GDrightObjects1Objects = Hashtable.newFrom({"right": gdjs.Game_32Scene3Code.GDrightObjects1});
gdjs.Game_32Scene3Code.mapOfGDgdjs_9546Game_959532Scene3Code_9546GDNewSprite7Objects1Objects = Hashtable.newFrom({"NewSprite7": gdjs.Game_32Scene3Code.GDNewSprite7Objects1});
gdjs.Game_32Scene3Code.mapOfGDgdjs_9546Game_959532Scene3Code_9546GDleftObjects1Objects = Hashtable.newFrom({"left": gdjs.Game_32Scene3Code.GDleftObjects1});
gdjs.Game_32Scene3Code.asyncCallback18093660 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Game_32Scene3Code.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("thwomp"), gdjs.Game_32Scene3Code.GDthwompObjects4);

{for(var i = 0, len = gdjs.Game_32Scene3Code.GDthwompObjects4.length ;i < len;++i) {
    gdjs.Game_32Scene3Code.GDthwompObjects4[i].getBehavior("Tween").addObjectPositionYTween2("fall", (gdjs.Game_32Scene3Code.GDthwompObjects4[i].getPointY("")) + 100, runtimeScene.getGame().getNamedEasingsManager().resolve("easeInQuad", ""), 0.2, false);
}
}
{for(var i = 0, len = gdjs.Game_32Scene3Code.GDthwompObjects4.length ;i < len;++i) {
    gdjs.Game_32Scene3Code.GDthwompObjects4[i].returnVariable(gdjs.Game_32Scene3Code.GDthwompObjects4[i].getVariables().getFromIndex(0)).setString("falling");
}
}
gdjs.Game_32Scene3Code.localVariables.length = 0;
}
gdjs.Game_32Scene3Code.idToCallbackMap.set(18093660, gdjs.Game_32Scene3Code.asyncCallback18093660);
gdjs.Game_32Scene3Code.eventsList4 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Game_32Scene3Code.localVariables);
for (const obj of gdjs.Game_32Scene3Code.GDthwompObjects2) asyncObjectsList.addObject("thwomp", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.3), (runtimeScene) => (gdjs.Game_32Scene3Code.asyncCallback18093660(runtimeScene, asyncObjectsList)), 18093660, asyncObjectsList);
}
}

}


};gdjs.Game_32Scene3Code.eventsList5 = function(runtimeScene) {

};gdjs.Game_32Scene3Code.eventsList6 = function(runtimeScene) {

};gdjs.Game_32Scene3Code.mapOfGDgdjs_9546Game_959532Scene3Code_9546GDPlatformer_95959595CharacterObjects1Objects = Hashtable.newFrom({"Platformer_Character": gdjs.Game_32Scene3Code.GDPlatformer_9595CharacterObjects1});
gdjs.Game_32Scene3Code.mapOfGDgdjs_9546Game_959532Scene3Code_9546GDNewSprite4Objects1Objects = Hashtable.newFrom({"NewSprite4": gdjs.Game_32Scene3Code.GDNewSprite4Objects1});
gdjs.Game_32Scene3Code.mapOfGDgdjs_9546Game_959532Scene3Code_9546GDNewSprite8Objects1Objects = Hashtable.newFrom({"NewSprite8": gdjs.Game_32Scene3Code.GDNewSprite8Objects1});
gdjs.Game_32Scene3Code.mapOfGDgdjs_9546Game_959532Scene3Code_9546GDPlatformer_95959595CharacterObjects1Objects = Hashtable.newFrom({"Platformer_Character": gdjs.Game_32Scene3Code.GDPlatformer_9595CharacterObjects1});
gdjs.Game_32Scene3Code.eventsList7 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Coins2"), gdjs.Game_32Scene3Code.GDCoins2Objects1);
gdjs.copyArray(runtimeScene.getObjects("Platformer_Character"), gdjs.Game_32Scene3Code.GDPlatformer_9595CharacterObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Game_32Scene3Code.mapOfGDgdjs_9546Game_959532Scene3Code_9546GDPlatformer_95959595CharacterObjects1Objects, gdjs.Game_32Scene3Code.mapOfGDgdjs_9546Game_959532Scene3Code_9546GDCoins2Objects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32Scene3Code.GDCoins2Objects1 */
gdjs.copyArray(runtimeScene.getObjects("NewText"), gdjs.Game_32Scene3Code.GDNewTextObjects1);
{for(var i = 0, len = gdjs.Game_32Scene3Code.GDCoins2Objects1.length ;i < len;++i) {
    gdjs.Game_32Scene3Code.GDCoins2Objects1[i].deleteFromScene(runtimeScene);
}
}
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}
{for(var i = 0, len = gdjs.Game_32Scene3Code.GDNewTextObjects1.length ;i < len;++i) {
    gdjs.Game_32Scene3Code.GDNewTextObjects1[i].getBehavior("Text").setText("Score " + runtimeScene.getScene().getVariables().getFromIndex(0).getAsString());
}
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Platformer_Character"), gdjs.Game_32Scene3Code.GDPlatformer_9595CharacterObjects1);
{gdjs.evtTools.camera.setCameraX(runtimeScene, (( gdjs.Game_32Scene3Code.GDPlatformer_9595CharacterObjects1.length === 0 ) ? 0 :gdjs.Game_32Scene3Code.GDPlatformer_9595CharacterObjects1[0].getPointX("")), "", 0);
}
{gdjs.evtTools.camera.setCameraY(runtimeScene, (( gdjs.Game_32Scene3Code.GDPlatformer_9595CharacterObjects1.length === 0 ) ? 0 :gdjs.Game_32Scene3Code.GDPlatformer_9595CharacterObjects1[0].getPointY("")), "", 0);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.createObjectsFromExternalLayout(runtimeScene, "Untitled external layout3", 0, 0, 0);
}

{ //Subevents
gdjs.Game_32Scene3Code.eventsList1(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("left"), gdjs.Game_32Scene3Code.GDleftObjects1);
gdjs.copyArray(runtimeScene.getObjects("right"), gdjs.Game_32Scene3Code.GDrightObjects1);
{for(var i = 0, len = gdjs.Game_32Scene3Code.GDrightObjects1.length ;i < len;++i) {
    gdjs.Game_32Scene3Code.GDrightObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Game_32Scene3Code.GDleftObjects1.length ;i < len;++i) {
    gdjs.Game_32Scene3Code.GDleftObjects1[i].hide();
}
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("NewSprite9"), gdjs.Game_32Scene3Code.GDNewSprite9Objects1);
gdjs.copyArray(runtimeScene.getObjects("Platformer_Character"), gdjs.Game_32Scene3Code.GDPlatformer_9595CharacterObjects1);
{for(var i = 0, len = gdjs.Game_32Scene3Code.GDNewSprite9Objects1.length ;i < len;++i) {
    gdjs.Game_32Scene3Code.GDNewSprite9Objects1[i].getBehavior("Scale").setScaleX((( gdjs.Game_32Scene3Code.GDPlatformer_9595CharacterObjects1.length === 0 ) ? 0 :gdjs.Game_32Scene3Code.GDPlatformer_9595CharacterObjects1[0].getBehavior("Health").Health(null)) / 20);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Platformer_Character"), gdjs.Game_32Scene3Code.GDPlatformer_9595CharacterObjects1);
{for(var i = 0, len = gdjs.Game_32Scene3Code.GDPlatformer_9595CharacterObjects1.length ;i < len;++i) {
    gdjs.Game_32Scene3Code.GDPlatformer_9595CharacterObjects1[i].getBehavior("Animation").setAnimationIndex(0);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Platformer_Character"), gdjs.Game_32Scene3Code.GDPlatformer_9595CharacterObjects1);
{for(var i = 0, len = gdjs.Game_32Scene3Code.GDPlatformer_9595CharacterObjects1.length ;i < len;++i) {
    gdjs.Game_32Scene3Code.GDPlatformer_9595CharacterObjects1[i].getBehavior("Animation").setAnimationIndex(2);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.input.anyKeyPressed(runtimeScene));
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Platformer_Character"), gdjs.Game_32Scene3Code.GDPlatformer_9595CharacterObjects1);
{for(var i = 0, len = gdjs.Game_32Scene3Code.GDPlatformer_9595CharacterObjects1.length ;i < len;++i) {
    gdjs.Game_32Scene3Code.GDPlatformer_9595CharacterObjects1[i].getBehavior("Animation").setAnimationIndex(1);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite4"), gdjs.Game_32Scene3Code.GDNewSprite4Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite7"), gdjs.Game_32Scene3Code.GDNewSprite7Objects1);
gdjs.copyArray(runtimeScene.getObjects("Platformer_Character"), gdjs.Game_32Scene3Code.GDPlatformer_9595CharacterObjects1);
{for(var i = 0, len = gdjs.Game_32Scene3Code.GDNewSprite4Objects1.length ;i < len;++i) {
    gdjs.Game_32Scene3Code.GDNewSprite4Objects1[i].getBehavior("Animation").setAnimationName("NewSprite4");
}
}
{for(var i = 0, len = gdjs.Game_32Scene3Code.GDNewSprite7Objects1.length ;i < len;++i) {
    gdjs.Game_32Scene3Code.GDNewSprite7Objects1[i].getBehavior("Animation").setAnimationIndex(2);
}
}
{for(var i = 0, len = gdjs.Game_32Scene3Code.GDPlatformer_9595CharacterObjects1.length ;i < len;++i) {
    gdjs.Game_32Scene3Code.GDPlatformer_9595CharacterObjects1[i].getBehavior("Animation").setAnimationIndex(0);
}
}
}

}


{


let isConditionTrue_0 = false;
{
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite6"), gdjs.Game_32Scene3Code.GDNewSprite6Objects1);
gdjs.copyArray(runtimeScene.getObjects("Platformer_Character"), gdjs.Game_32Scene3Code.GDPlatformer_9595CharacterObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Game_32Scene3Code.mapOfGDgdjs_9546Game_959532Scene3Code_9546GDPlatformer_95959595CharacterObjects1Objects, gdjs.Game_32Scene3Code.mapOfGDgdjs_9546Game_959532Scene3Code_9546GDNewSprite6Objects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {

{ //Subevents
gdjs.Game_32Scene3Code.eventsList2(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite7"), gdjs.Game_32Scene3Code.GDNewSprite7Objects1);
gdjs.copyArray(runtimeScene.getObjects("Platformer_Character"), gdjs.Game_32Scene3Code.GDPlatformer_9595CharacterObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Game_32Scene3Code.mapOfGDgdjs_9546Game_959532Scene3Code_9546GDPlatformer_95959595CharacterObjects1Objects, gdjs.Game_32Scene3Code.mapOfGDgdjs_9546Game_959532Scene3Code_9546GDNewSprite7Objects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {

{ //Subevents
gdjs.Game_32Scene3Code.eventsList3(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.Game_32Scene3Code.GDNewSprite2Objects1);
gdjs.copyArray(runtimeScene.getObjects("Platformer_Character"), gdjs.Game_32Scene3Code.GDPlatformer_9595CharacterObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Game_32Scene3Code.mapOfGDgdjs_9546Game_959532Scene3Code_9546GDPlatformer_95959595CharacterObjects1Objects, gdjs.Game_32Scene3Code.mapOfGDgdjs_9546Game_959532Scene3Code_9546GDNewSprite2Objects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(18083892);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32Scene3Code.GDPlatformer_9595CharacterObjects1 */
{for(var i = 0, len = gdjs.Game_32Scene3Code.GDPlatformer_9595CharacterObjects1.length ;i < len;++i) {
    gdjs.Game_32Scene3Code.GDPlatformer_9595CharacterObjects1[i].getBehavior("Health").Hit(4, true, true, null);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Platformer_Character"), gdjs.Game_32Scene3Code.GDPlatformer_9595CharacterObjects1);
gdjs.copyArray(runtimeScene.getObjects("thwomp"), gdjs.Game_32Scene3Code.GDthwompObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Game_32Scene3Code.mapOfGDgdjs_9546Game_959532Scene3Code_9546GDPlatformer_95959595CharacterObjects1Objects, gdjs.Game_32Scene3Code.mapOfGDgdjs_9546Game_959532Scene3Code_9546GDthwompObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(18085796);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32Scene3Code.GDPlatformer_9595CharacterObjects1 */
{for(var i = 0, len = gdjs.Game_32Scene3Code.GDPlatformer_9595CharacterObjects1.length ;i < len;++i) {
    gdjs.Game_32Scene3Code.GDPlatformer_9595CharacterObjects1[i].getBehavior("Health").Hit(4, true, true, null);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite7"), gdjs.Game_32Scene3Code.GDNewSprite7Objects1);
gdjs.copyArray(runtimeScene.getObjects("right"), gdjs.Game_32Scene3Code.GDrightObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Game_32Scene3Code.mapOfGDgdjs_9546Game_959532Scene3Code_9546GDNewSprite7Objects1Objects, gdjs.Game_32Scene3Code.mapOfGDgdjs_9546Game_959532Scene3Code_9546GDrightObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32Scene3Code.GDNewSprite7Objects1 */
{for(var i = 0, len = gdjs.Game_32Scene3Code.GDNewSprite7Objects1.length ;i < len;++i) {
    gdjs.Game_32Scene3Code.GDNewSprite7Objects1[i].returnVariable(gdjs.Game_32Scene3Code.GDNewSprite7Objects1[i].getVariables().getFromIndex(0)).setNumber(1);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite7"), gdjs.Game_32Scene3Code.GDNewSprite7Objects1);
gdjs.copyArray(runtimeScene.getObjects("left"), gdjs.Game_32Scene3Code.GDleftObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Game_32Scene3Code.mapOfGDgdjs_9546Game_959532Scene3Code_9546GDNewSprite7Objects1Objects, gdjs.Game_32Scene3Code.mapOfGDgdjs_9546Game_959532Scene3Code_9546GDleftObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32Scene3Code.GDNewSprite7Objects1 */
{for(var i = 0, len = gdjs.Game_32Scene3Code.GDNewSprite7Objects1.length ;i < len;++i) {
    gdjs.Game_32Scene3Code.GDNewSprite7Objects1[i].returnVariable(gdjs.Game_32Scene3Code.GDNewSprite7Objects1[i].getVariables().getFromIndex(0)).setNumber(-1);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite7"), gdjs.Game_32Scene3Code.GDNewSprite7Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32Scene3Code.GDNewSprite7Objects1.length;i<l;++i) {
    if ( gdjs.Game_32Scene3Code.GDNewSprite7Objects1[i].getVariableNumber(gdjs.Game_32Scene3Code.GDNewSprite7Objects1[i].getVariables().getFromIndex(0)) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.Game_32Scene3Code.GDNewSprite7Objects1[k] = gdjs.Game_32Scene3Code.GDNewSprite7Objects1[i];
        ++k;
    }
}
gdjs.Game_32Scene3Code.GDNewSprite7Objects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32Scene3Code.GDNewSprite7Objects1 */
{for(var i = 0, len = gdjs.Game_32Scene3Code.GDNewSprite7Objects1.length ;i < len;++i) {
    gdjs.Game_32Scene3Code.GDNewSprite7Objects1[i].addPolarForce(0, 100, 0);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite7"), gdjs.Game_32Scene3Code.GDNewSprite7Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32Scene3Code.GDNewSprite7Objects1.length;i<l;++i) {
    if ( gdjs.Game_32Scene3Code.GDNewSprite7Objects1[i].getVariableNumber(gdjs.Game_32Scene3Code.GDNewSprite7Objects1[i].getVariables().getFromIndex(0)) == -1 ) {
        isConditionTrue_0 = true;
        gdjs.Game_32Scene3Code.GDNewSprite7Objects1[k] = gdjs.Game_32Scene3Code.GDNewSprite7Objects1[i];
        ++k;
    }
}
gdjs.Game_32Scene3Code.GDNewSprite7Objects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32Scene3Code.GDNewSprite7Objects1 */
{for(var i = 0, len = gdjs.Game_32Scene3Code.GDNewSprite7Objects1.length ;i < len;++i) {
    gdjs.Game_32Scene3Code.GDNewSprite7Objects1[i].addPolarForce(180, 100, 0);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("thwomp"), gdjs.Game_32Scene3Code.GDthwompObjects1);

for (gdjs.Game_32Scene3Code.forEachIndex2 = 0;gdjs.Game_32Scene3Code.forEachIndex2 < gdjs.Game_32Scene3Code.GDthwompObjects1.length;++gdjs.Game_32Scene3Code.forEachIndex2) {
gdjs.copyArray(runtimeScene.getObjects("Platformer_Character"), gdjs.Game_32Scene3Code.GDPlatformer_9595CharacterObjects2);
gdjs.Game_32Scene3Code.GDthwompObjects2.length = 0;


gdjs.Game_32Scene3Code.forEachTemporary2 = gdjs.Game_32Scene3Code.GDthwompObjects1[gdjs.Game_32Scene3Code.forEachIndex2];
gdjs.Game_32Scene3Code.GDthwompObjects2.push(gdjs.Game_32Scene3Code.forEachTemporary2);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32Scene3Code.GDthwompObjects2.length;i<l;++i) {
    if ( gdjs.Game_32Scene3Code.GDthwompObjects2[i].getVariableString(gdjs.Game_32Scene3Code.GDthwompObjects2[i].getVariables().getFromIndex(0)) == "idle" ) {
        isConditionTrue_0 = true;
        gdjs.Game_32Scene3Code.GDthwompObjects2[k] = gdjs.Game_32Scene3Code.GDthwompObjects2[i];
        ++k;
    }
}
gdjs.Game_32Scene3Code.GDthwompObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32Scene3Code.GDPlatformer_9595CharacterObjects2.length;i<l;++i) {
    if ( gdjs.Game_32Scene3Code.GDPlatformer_9595CharacterObjects2[i].getY() > (( gdjs.Game_32Scene3Code.GDthwompObjects2.length === 0 ) ? 0 :gdjs.Game_32Scene3Code.GDthwompObjects2[0].getPointY("")) ) {
        isConditionTrue_0 = true;
        gdjs.Game_32Scene3Code.GDPlatformer_9595CharacterObjects2[k] = gdjs.Game_32Scene3Code.GDPlatformer_9595CharacterObjects2[i];
        ++k;
    }
}
gdjs.Game_32Scene3Code.GDPlatformer_9595CharacterObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.Game_32Scene3Code.GDPlatformer_9595CharacterObjects2.length === 0 ) ? 0 :gdjs.Game_32Scene3Code.GDPlatformer_9595CharacterObjects2[0].getPointX("")) < (( gdjs.Game_32Scene3Code.GDthwompObjects2.length === 0 ) ? 0 :gdjs.Game_32Scene3Code.GDthwompObjects2[0].getPointX("")) + (( gdjs.Game_32Scene3Code.GDthwompObjects2.length === 0 ) ? 0 :gdjs.Game_32Scene3Code.GDthwompObjects2[0].getWidth()));
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.Game_32Scene3Code.GDPlatformer_9595CharacterObjects2.length === 0 ) ? 0 :gdjs.Game_32Scene3Code.GDPlatformer_9595CharacterObjects2[0].getPointX("")) + (( gdjs.Game_32Scene3Code.GDPlatformer_9595CharacterObjects2.length === 0 ) ? 0 :gdjs.Game_32Scene3Code.GDPlatformer_9595CharacterObjects2[0].getWidth()) > (( gdjs.Game_32Scene3Code.GDthwompObjects2.length === 0 ) ? 0 :gdjs.Game_32Scene3Code.GDthwompObjects2[0].getPointX("")));
}
}
}
}
if (isConditionTrue_0) {

{ //Subevents: 
gdjs.Game_32Scene3Code.eventsList4(runtimeScene);} //Subevents end.
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("thwomp"), gdjs.Game_32Scene3Code.GDthwompObjects1);

for (gdjs.Game_32Scene3Code.forEachIndex2 = 0;gdjs.Game_32Scene3Code.forEachIndex2 < gdjs.Game_32Scene3Code.GDthwompObjects1.length;++gdjs.Game_32Scene3Code.forEachIndex2) {
gdjs.Game_32Scene3Code.GDthwompObjects2.length = 0;


gdjs.Game_32Scene3Code.forEachTemporary2 = gdjs.Game_32Scene3Code.GDthwompObjects1[gdjs.Game_32Scene3Code.forEachIndex2];
gdjs.Game_32Scene3Code.GDthwompObjects2.push(gdjs.Game_32Scene3Code.forEachTemporary2);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32Scene3Code.GDthwompObjects2.length;i<l;++i) {
    if ( gdjs.Game_32Scene3Code.GDthwompObjects2[i].getVariableString(gdjs.Game_32Scene3Code.GDthwompObjects2[i].getVariables().getFromIndex(0)) == "falling" ) {
        isConditionTrue_0 = true;
        gdjs.Game_32Scene3Code.GDthwompObjects2[k] = gdjs.Game_32Scene3Code.GDthwompObjects2[i];
        ++k;
    }
}
gdjs.Game_32Scene3Code.GDthwompObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32Scene3Code.GDthwompObjects2.length;i<l;++i) {
    if ( gdjs.Game_32Scene3Code.GDthwompObjects2[i].getBehavior("Tween").hasFinished("fall") ) {
        isConditionTrue_0 = true;
        gdjs.Game_32Scene3Code.GDthwompObjects2[k] = gdjs.Game_32Scene3Code.GDthwompObjects2[i];
        ++k;
    }
}
gdjs.Game_32Scene3Code.GDthwompObjects2.length = k;
}
if (isConditionTrue_0) {
{for(var i = 0, len = gdjs.Game_32Scene3Code.GDthwompObjects2.length ;i < len;++i) {
    gdjs.Game_32Scene3Code.GDthwompObjects2[i].returnVariable(gdjs.Game_32Scene3Code.GDthwompObjects2[i].getVariables().getFromIndex(0)).setString("waiting");
}
}
{for(var i = 0, len = gdjs.Game_32Scene3Code.GDthwompObjects2.length ;i < len;++i) {
    gdjs.Game_32Scene3Code.GDthwompObjects2[i].resetTimer("ThwompWaitTimer");
}
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("thwomp"), gdjs.Game_32Scene3Code.GDthwompObjects1);

for (gdjs.Game_32Scene3Code.forEachIndex2 = 0;gdjs.Game_32Scene3Code.forEachIndex2 < gdjs.Game_32Scene3Code.GDthwompObjects1.length;++gdjs.Game_32Scene3Code.forEachIndex2) {
gdjs.Game_32Scene3Code.GDthwompObjects2.length = 0;


gdjs.Game_32Scene3Code.forEachTemporary2 = gdjs.Game_32Scene3Code.GDthwompObjects1[gdjs.Game_32Scene3Code.forEachIndex2];
gdjs.Game_32Scene3Code.GDthwompObjects2.push(gdjs.Game_32Scene3Code.forEachTemporary2);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32Scene3Code.GDthwompObjects2.length;i<l;++i) {
    if ( gdjs.Game_32Scene3Code.GDthwompObjects2[i].getVariableString(gdjs.Game_32Scene3Code.GDthwompObjects2[i].getVariables().getFromIndex(0)) == "waiting" ) {
        isConditionTrue_0 = true;
        gdjs.Game_32Scene3Code.GDthwompObjects2[k] = gdjs.Game_32Scene3Code.GDthwompObjects2[i];
        ++k;
    }
}
gdjs.Game_32Scene3Code.GDthwompObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32Scene3Code.GDthwompObjects2.length;i<l;++i) {
    if ( gdjs.Game_32Scene3Code.GDthwompObjects2[i].getTimerElapsedTimeInSecondsOrNaN("ThwompWaitTimer") > 1.5 ) {
        isConditionTrue_0 = true;
        gdjs.Game_32Scene3Code.GDthwompObjects2[k] = gdjs.Game_32Scene3Code.GDthwompObjects2[i];
        ++k;
    }
}
gdjs.Game_32Scene3Code.GDthwompObjects2.length = k;
}
if (isConditionTrue_0) {
{for(var i = 0, len = gdjs.Game_32Scene3Code.GDthwompObjects2.length ;i < len;++i) {
    gdjs.Game_32Scene3Code.GDthwompObjects2[i].getBehavior("Tween").addObjectPositionYTween2("rise", gdjs.Game_32Scene3Code.GDthwompObjects2[i].getVariables().getFromIndex(1).getAsNumber(), runtimeScene.getGame().getNamedEasingsManager().resolve("easeOutQuad", ""), 0.5, false);
}
}
{for(var i = 0, len = gdjs.Game_32Scene3Code.GDthwompObjects2.length ;i < len;++i) {
    gdjs.Game_32Scene3Code.GDthwompObjects2[i].resetTimer("ThwompWaitTimer");
}
}
{for(var i = 0, len = gdjs.Game_32Scene3Code.GDthwompObjects2.length ;i < len;++i) {
    gdjs.Game_32Scene3Code.GDthwompObjects2[i].returnVariable(gdjs.Game_32Scene3Code.GDthwompObjects2[i].getVariables().getFromIndex(0)).setString("done");
}
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite4"), gdjs.Game_32Scene3Code.GDNewSprite4Objects1);
gdjs.copyArray(runtimeScene.getObjects("Platformer_Character"), gdjs.Game_32Scene3Code.GDPlatformer_9595CharacterObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Game_32Scene3Code.mapOfGDgdjs_9546Game_959532Scene3Code_9546GDPlatformer_95959595CharacterObjects1Objects, gdjs.Game_32Scene3Code.mapOfGDgdjs_9546Game_959532Scene3Code_9546GDNewSprite4Objects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(17779388);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32Scene3Code.GDPlatformer_9595CharacterObjects1 */
{for(var i = 0, len = gdjs.Game_32Scene3Code.GDPlatformer_9595CharacterObjects1.length ;i < len;++i) {
    gdjs.Game_32Scene3Code.GDPlatformer_9595CharacterObjects1[i].getBehavior("Health").Hit(2, true, true, null);
}
}
}

}


{


let isConditionTrue_0 = false;
{
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite9"), gdjs.Game_32Scene3Code.GDNewSprite9Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32Scene3Code.GDNewSprite9Objects1.length;i<l;++i) {
    if ( gdjs.Game_32Scene3Code.GDNewSprite9Objects1[i].getBehavior("Resizable").getWidth() == 0 ) {
        isConditionTrue_0 = true;
        gdjs.Game_32Scene3Code.GDNewSprite9Objects1[k] = gdjs.Game_32Scene3Code.GDNewSprite9Objects1[i];
        ++k;
    }
}
gdjs.Game_32Scene3Code.GDNewSprite9Objects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game over", false);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite8"), gdjs.Game_32Scene3Code.GDNewSprite8Objects1);
gdjs.copyArray(runtimeScene.getObjects("Platformer_Character"), gdjs.Game_32Scene3Code.GDPlatformer_9595CharacterObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Game_32Scene3Code.mapOfGDgdjs_9546Game_959532Scene3Code_9546GDNewSprite8Objects1Objects, gdjs.Game_32Scene3Code.mapOfGDgdjs_9546Game_959532Scene3Code_9546GDPlatformer_95959595CharacterObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() >= 20);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "win scene", false);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Platformer_Character"), gdjs.Game_32Scene3Code.GDPlatformer_9595CharacterObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32Scene3Code.GDPlatformer_9595CharacterObjects1.length;i<l;++i) {
    if ( gdjs.Game_32Scene3Code.GDPlatformer_9595CharacterObjects1[i].getY() >= 3030 ) {
        isConditionTrue_0 = true;
        gdjs.Game_32Scene3Code.GDPlatformer_9595CharacterObjects1[k] = gdjs.Game_32Scene3Code.GDPlatformer_9595CharacterObjects1[i];
        ++k;
    }
}
gdjs.Game_32Scene3Code.GDPlatformer_9595CharacterObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game over", false);
}
}

}


};

gdjs.Game_32Scene3Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Game_32Scene3Code.GDJumpButtonObjects1.length = 0;
gdjs.Game_32Scene3Code.GDJumpButtonObjects2.length = 0;
gdjs.Game_32Scene3Code.GDJumpButtonObjects3.length = 0;
gdjs.Game_32Scene3Code.GDJumpButtonObjects4.length = 0;
gdjs.Game_32Scene3Code.GDJoystickObjects1.length = 0;
gdjs.Game_32Scene3Code.GDJoystickObjects2.length = 0;
gdjs.Game_32Scene3Code.GDJoystickObjects3.length = 0;
gdjs.Game_32Scene3Code.GDJoystickObjects4.length = 0;
gdjs.Game_32Scene3Code.GDNewSprite3Objects1.length = 0;
gdjs.Game_32Scene3Code.GDNewSprite3Objects2.length = 0;
gdjs.Game_32Scene3Code.GDNewSprite3Objects3.length = 0;
gdjs.Game_32Scene3Code.GDNewSprite3Objects4.length = 0;
gdjs.Game_32Scene3Code.GDNewSprite2Objects1.length = 0;
gdjs.Game_32Scene3Code.GDNewSprite2Objects2.length = 0;
gdjs.Game_32Scene3Code.GDNewSprite2Objects3.length = 0;
gdjs.Game_32Scene3Code.GDNewSprite2Objects4.length = 0;
gdjs.Game_32Scene3Code.GDNewSprite4Objects1.length = 0;
gdjs.Game_32Scene3Code.GDNewSprite4Objects2.length = 0;
gdjs.Game_32Scene3Code.GDNewSprite4Objects3.length = 0;
gdjs.Game_32Scene3Code.GDNewSprite4Objects4.length = 0;
gdjs.Game_32Scene3Code.GDNewSprite5Objects1.length = 0;
gdjs.Game_32Scene3Code.GDNewSprite5Objects2.length = 0;
gdjs.Game_32Scene3Code.GDNewSprite5Objects3.length = 0;
gdjs.Game_32Scene3Code.GDNewSprite5Objects4.length = 0;
gdjs.Game_32Scene3Code.GDNewSprite6Objects1.length = 0;
gdjs.Game_32Scene3Code.GDNewSprite6Objects2.length = 0;
gdjs.Game_32Scene3Code.GDNewSprite6Objects3.length = 0;
gdjs.Game_32Scene3Code.GDNewSprite6Objects4.length = 0;
gdjs.Game_32Scene3Code.GDCoins2Objects1.length = 0;
gdjs.Game_32Scene3Code.GDCoins2Objects2.length = 0;
gdjs.Game_32Scene3Code.GDCoins2Objects3.length = 0;
gdjs.Game_32Scene3Code.GDCoins2Objects4.length = 0;
gdjs.Game_32Scene3Code.GDNewSprite7Objects1.length = 0;
gdjs.Game_32Scene3Code.GDNewSprite7Objects2.length = 0;
gdjs.Game_32Scene3Code.GDNewSprite7Objects3.length = 0;
gdjs.Game_32Scene3Code.GDNewSprite7Objects4.length = 0;
gdjs.Game_32Scene3Code.GDrightObjects1.length = 0;
gdjs.Game_32Scene3Code.GDrightObjects2.length = 0;
gdjs.Game_32Scene3Code.GDrightObjects3.length = 0;
gdjs.Game_32Scene3Code.GDrightObjects4.length = 0;
gdjs.Game_32Scene3Code.GDNewSprite9Objects1.length = 0;
gdjs.Game_32Scene3Code.GDNewSprite9Objects2.length = 0;
gdjs.Game_32Scene3Code.GDNewSprite9Objects3.length = 0;
gdjs.Game_32Scene3Code.GDNewSprite9Objects4.length = 0;
gdjs.Game_32Scene3Code.GDthwompObjects1.length = 0;
gdjs.Game_32Scene3Code.GDthwompObjects2.length = 0;
gdjs.Game_32Scene3Code.GDthwompObjects3.length = 0;
gdjs.Game_32Scene3Code.GDthwompObjects4.length = 0;
gdjs.Game_32Scene3Code.GDleftObjects1.length = 0;
gdjs.Game_32Scene3Code.GDleftObjects2.length = 0;
gdjs.Game_32Scene3Code.GDleftObjects3.length = 0;
gdjs.Game_32Scene3Code.GDleftObjects4.length = 0;
gdjs.Game_32Scene3Code.GDNewSpriteObjects1.length = 0;
gdjs.Game_32Scene3Code.GDNewSpriteObjects2.length = 0;
gdjs.Game_32Scene3Code.GDNewSpriteObjects3.length = 0;
gdjs.Game_32Scene3Code.GDNewSpriteObjects4.length = 0;
gdjs.Game_32Scene3Code.GDNewPanelSpriteObjects1.length = 0;
gdjs.Game_32Scene3Code.GDNewPanelSpriteObjects2.length = 0;
gdjs.Game_32Scene3Code.GDNewPanelSpriteObjects3.length = 0;
gdjs.Game_32Scene3Code.GDNewPanelSpriteObjects4.length = 0;
gdjs.Game_32Scene3Code.GDNewPanelSprite2Objects1.length = 0;
gdjs.Game_32Scene3Code.GDNewPanelSprite2Objects2.length = 0;
gdjs.Game_32Scene3Code.GDNewPanelSprite2Objects3.length = 0;
gdjs.Game_32Scene3Code.GDNewPanelSprite2Objects4.length = 0;
gdjs.Game_32Scene3Code.GDPlatformer_9595CharacterObjects1.length = 0;
gdjs.Game_32Scene3Code.GDPlatformer_9595CharacterObjects2.length = 0;
gdjs.Game_32Scene3Code.GDPlatformer_9595CharacterObjects3.length = 0;
gdjs.Game_32Scene3Code.GDPlatformer_9595CharacterObjects4.length = 0;
gdjs.Game_32Scene3Code.GDNewSprite10Objects1.length = 0;
gdjs.Game_32Scene3Code.GDNewSprite10Objects2.length = 0;
gdjs.Game_32Scene3Code.GDNewSprite10Objects3.length = 0;
gdjs.Game_32Scene3Code.GDNewSprite10Objects4.length = 0;
gdjs.Game_32Scene3Code.GDflagObjects1.length = 0;
gdjs.Game_32Scene3Code.GDflagObjects2.length = 0;
gdjs.Game_32Scene3Code.GDflagObjects3.length = 0;
gdjs.Game_32Scene3Code.GDflagObjects4.length = 0;
gdjs.Game_32Scene3Code.GDNewSprite8Objects1.length = 0;
gdjs.Game_32Scene3Code.GDNewSprite8Objects2.length = 0;
gdjs.Game_32Scene3Code.GDNewSprite8Objects3.length = 0;
gdjs.Game_32Scene3Code.GDNewSprite8Objects4.length = 0;
gdjs.Game_32Scene3Code.GDplayObjects1.length = 0;
gdjs.Game_32Scene3Code.GDplayObjects2.length = 0;
gdjs.Game_32Scene3Code.GDplayObjects3.length = 0;
gdjs.Game_32Scene3Code.GDplayObjects4.length = 0;
gdjs.Game_32Scene3Code.GDNewTextObjects1.length = 0;
gdjs.Game_32Scene3Code.GDNewTextObjects2.length = 0;
gdjs.Game_32Scene3Code.GDNewTextObjects3.length = 0;
gdjs.Game_32Scene3Code.GDNewTextObjects4.length = 0;

gdjs.Game_32Scene3Code.eventsList7(runtimeScene);
gdjs.Game_32Scene3Code.GDJumpButtonObjects1.length = 0;
gdjs.Game_32Scene3Code.GDJumpButtonObjects2.length = 0;
gdjs.Game_32Scene3Code.GDJumpButtonObjects3.length = 0;
gdjs.Game_32Scene3Code.GDJumpButtonObjects4.length = 0;
gdjs.Game_32Scene3Code.GDJoystickObjects1.length = 0;
gdjs.Game_32Scene3Code.GDJoystickObjects2.length = 0;
gdjs.Game_32Scene3Code.GDJoystickObjects3.length = 0;
gdjs.Game_32Scene3Code.GDJoystickObjects4.length = 0;
gdjs.Game_32Scene3Code.GDNewSprite3Objects1.length = 0;
gdjs.Game_32Scene3Code.GDNewSprite3Objects2.length = 0;
gdjs.Game_32Scene3Code.GDNewSprite3Objects3.length = 0;
gdjs.Game_32Scene3Code.GDNewSprite3Objects4.length = 0;
gdjs.Game_32Scene3Code.GDNewSprite2Objects1.length = 0;
gdjs.Game_32Scene3Code.GDNewSprite2Objects2.length = 0;
gdjs.Game_32Scene3Code.GDNewSprite2Objects3.length = 0;
gdjs.Game_32Scene3Code.GDNewSprite2Objects4.length = 0;
gdjs.Game_32Scene3Code.GDNewSprite4Objects1.length = 0;
gdjs.Game_32Scene3Code.GDNewSprite4Objects2.length = 0;
gdjs.Game_32Scene3Code.GDNewSprite4Objects3.length = 0;
gdjs.Game_32Scene3Code.GDNewSprite4Objects4.length = 0;
gdjs.Game_32Scene3Code.GDNewSprite5Objects1.length = 0;
gdjs.Game_32Scene3Code.GDNewSprite5Objects2.length = 0;
gdjs.Game_32Scene3Code.GDNewSprite5Objects3.length = 0;
gdjs.Game_32Scene3Code.GDNewSprite5Objects4.length = 0;
gdjs.Game_32Scene3Code.GDNewSprite6Objects1.length = 0;
gdjs.Game_32Scene3Code.GDNewSprite6Objects2.length = 0;
gdjs.Game_32Scene3Code.GDNewSprite6Objects3.length = 0;
gdjs.Game_32Scene3Code.GDNewSprite6Objects4.length = 0;
gdjs.Game_32Scene3Code.GDCoins2Objects1.length = 0;
gdjs.Game_32Scene3Code.GDCoins2Objects2.length = 0;
gdjs.Game_32Scene3Code.GDCoins2Objects3.length = 0;
gdjs.Game_32Scene3Code.GDCoins2Objects4.length = 0;
gdjs.Game_32Scene3Code.GDNewSprite7Objects1.length = 0;
gdjs.Game_32Scene3Code.GDNewSprite7Objects2.length = 0;
gdjs.Game_32Scene3Code.GDNewSprite7Objects3.length = 0;
gdjs.Game_32Scene3Code.GDNewSprite7Objects4.length = 0;
gdjs.Game_32Scene3Code.GDrightObjects1.length = 0;
gdjs.Game_32Scene3Code.GDrightObjects2.length = 0;
gdjs.Game_32Scene3Code.GDrightObjects3.length = 0;
gdjs.Game_32Scene3Code.GDrightObjects4.length = 0;
gdjs.Game_32Scene3Code.GDNewSprite9Objects1.length = 0;
gdjs.Game_32Scene3Code.GDNewSprite9Objects2.length = 0;
gdjs.Game_32Scene3Code.GDNewSprite9Objects3.length = 0;
gdjs.Game_32Scene3Code.GDNewSprite9Objects4.length = 0;
gdjs.Game_32Scene3Code.GDthwompObjects1.length = 0;
gdjs.Game_32Scene3Code.GDthwompObjects2.length = 0;
gdjs.Game_32Scene3Code.GDthwompObjects3.length = 0;
gdjs.Game_32Scene3Code.GDthwompObjects4.length = 0;
gdjs.Game_32Scene3Code.GDleftObjects1.length = 0;
gdjs.Game_32Scene3Code.GDleftObjects2.length = 0;
gdjs.Game_32Scene3Code.GDleftObjects3.length = 0;
gdjs.Game_32Scene3Code.GDleftObjects4.length = 0;
gdjs.Game_32Scene3Code.GDNewSpriteObjects1.length = 0;
gdjs.Game_32Scene3Code.GDNewSpriteObjects2.length = 0;
gdjs.Game_32Scene3Code.GDNewSpriteObjects3.length = 0;
gdjs.Game_32Scene3Code.GDNewSpriteObjects4.length = 0;
gdjs.Game_32Scene3Code.GDNewPanelSpriteObjects1.length = 0;
gdjs.Game_32Scene3Code.GDNewPanelSpriteObjects2.length = 0;
gdjs.Game_32Scene3Code.GDNewPanelSpriteObjects3.length = 0;
gdjs.Game_32Scene3Code.GDNewPanelSpriteObjects4.length = 0;
gdjs.Game_32Scene3Code.GDNewPanelSprite2Objects1.length = 0;
gdjs.Game_32Scene3Code.GDNewPanelSprite2Objects2.length = 0;
gdjs.Game_32Scene3Code.GDNewPanelSprite2Objects3.length = 0;
gdjs.Game_32Scene3Code.GDNewPanelSprite2Objects4.length = 0;
gdjs.Game_32Scene3Code.GDPlatformer_9595CharacterObjects1.length = 0;
gdjs.Game_32Scene3Code.GDPlatformer_9595CharacterObjects2.length = 0;
gdjs.Game_32Scene3Code.GDPlatformer_9595CharacterObjects3.length = 0;
gdjs.Game_32Scene3Code.GDPlatformer_9595CharacterObjects4.length = 0;
gdjs.Game_32Scene3Code.GDNewSprite10Objects1.length = 0;
gdjs.Game_32Scene3Code.GDNewSprite10Objects2.length = 0;
gdjs.Game_32Scene3Code.GDNewSprite10Objects3.length = 0;
gdjs.Game_32Scene3Code.GDNewSprite10Objects4.length = 0;
gdjs.Game_32Scene3Code.GDflagObjects1.length = 0;
gdjs.Game_32Scene3Code.GDflagObjects2.length = 0;
gdjs.Game_32Scene3Code.GDflagObjects3.length = 0;
gdjs.Game_32Scene3Code.GDflagObjects4.length = 0;
gdjs.Game_32Scene3Code.GDNewSprite8Objects1.length = 0;
gdjs.Game_32Scene3Code.GDNewSprite8Objects2.length = 0;
gdjs.Game_32Scene3Code.GDNewSprite8Objects3.length = 0;
gdjs.Game_32Scene3Code.GDNewSprite8Objects4.length = 0;
gdjs.Game_32Scene3Code.GDplayObjects1.length = 0;
gdjs.Game_32Scene3Code.GDplayObjects2.length = 0;
gdjs.Game_32Scene3Code.GDplayObjects3.length = 0;
gdjs.Game_32Scene3Code.GDplayObjects4.length = 0;
gdjs.Game_32Scene3Code.GDNewTextObjects1.length = 0;
gdjs.Game_32Scene3Code.GDNewTextObjects2.length = 0;
gdjs.Game_32Scene3Code.GDNewTextObjects3.length = 0;
gdjs.Game_32Scene3Code.GDNewTextObjects4.length = 0;


return;

}

gdjs['Game_32Scene3Code'] = gdjs.Game_32Scene3Code;
