Clazz.declarePackage("J.quantum.mo");
Clazz.load(["J.quantum.mo.DataAdder"], "J.quantum.mo.DataAdderG", null, function(){
var c$ = Clazz.declareType(J.quantum.mo, "DataAdderG", null, J.quantum.mo.DataAdder);
/*LV!1824 unnec constructor*/Clazz.overrideMethod(c$, "addData", 
function(calc, havePoints){
switch (calc.normType) {
case 0:
default:
return false;
case 3:
return false;
case 1:
return false;
case 2:
return false;
}
}, "J.quantum.MOCalculation,~B");
});
;//5.0.1-v4 Wed Sep 18 20:00:22 CDT 2024
