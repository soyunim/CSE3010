if(typeof window!="undefined"&&window.nhn===undefined){window.nhn={}
}if(typeof window!="undefined"){if(window.jindo===undefined){window.jindo={}
}}else{if(!jindo){jindo={}
}}var _j_ag=navigator.userAgent;
var _JINDO_IS_IE=_j_ag.indexOf("MSIE")>-1;
var _JINDO_IS_FF=_j_ag.indexOf("Firefox")>-1;
var _JINDO_IS_OP=_j_ag.indexOf("Opera")>-1;
var _JINDO_IS_SP=_j_ag.indexOf("Safari")>-1;
var _JINDO_IS_SF=_j_ag.indexOf("Apple")>-1;
var _JINDO_IS_CH=_j_ag.indexOf("Chrome")>-1;
var _JINDO_IS_WK=_j_ag.indexOf("WebKit")>-1;
var _JINDO_IS_MO=/(iPad|Mobile|Android|Nokia|webOS|BlackBerry|Opera Mini)/.test(_j_ag);
jindo.$Jindo=function(){var cl=arguments.callee;
var cc=cl._cached;
if(cc){return cc
}if(!(this instanceof cl)){return new cl()
}if(!cc){cl._cached=this
}this.version="2.1.0"
};
jindo.$Jindo.compatible=function(){return false
};
var _objToString=Object.prototype.toString;
var _slice=Array.prototype.slice;
jindo.$Error=function(sMessage,sMethod){this.message="\tmethod : "+sMethod+"\n\tmessage : "+sMessage;
this.type="Jindo Custom Error";
this.toString=function(){return this.message+"\n\t"+this.type
}
};
jindo.$Except={CANNOT_USE_OPTION:"해당 옵션은 사용할 수 없습니다.",CANNOT_USE_HEADER:"type이 jsonp일때 header메서드는 사용할 수 없습니다.",PARSE_ERROR:"파싱중 에러가 발생했습니다.",NOT_FOUND_ARGUMENT:"파라메터가 없습니다.",NOT_STANDARD_QUERY:"css셀렉터가 정상적이지 않습니다.",INVALID_DATE:"날짜 포멧이 아닙니다.",REQUIRE_AJAX:"가 없습니다.",NOT_FOUND_ELEMENT:"엘리먼트가 없습니다.",HAS_FUNCTION_FOR_GROUP:"그룹으로 지우지 않는 경우 detach할 함수가 있어야 합니다.",NONE_ELEMENT:"에 해당하는 엘리먼트가 없습니다.",NOT_SUPPORT_SELECTOR:"는 지원하지 않는 selector입니다.",NOT_SUPPORT_METHOD:"desktop에서 지원하지 않는 메서드 입니다.",JSON_MUST_HAVE_ARRAY_HASH:"get메서드는 json타입이 hash나 array타입만 가능합니다.",MUST_APPEND_DOM:"document에 붙지 않은 엘리먼트를 기준 엘리먼트로 사용할 수 없습니다.",NOT_USE_CSS:"는 css를 사용 할수 없습니다.",NOT_WORK_DOMREADY:"domready이벤트는 iframe안에서 사용할 수 없습니다."};
function _toArray(aArray){return _slice.apply(aArray)
}try{_slice.apply(document.documentElement.childNodes)
}catch(e){_toArray=function(aArray){var returnArray=[];
var leng=aArray.length;
for(var i=0;
i<leng;
i++){returnArray.push(aArray[i])
}return returnArray
}
}jindo.$Jindo.isNumeric=function(nNum){return !isNaN(parseFloat(nNum))&&!jindo.$Jindo.isArray(nNum)&&isFinite(nNum)
};
(function(){var oType={Element:1,Document:9};
for(var i in oType){jindo.$Jindo["is"+i]=(function(sType,nNodeNumber){return function(oObj){if(new RegExp(sType).test(_objToString.call(oObj))){return true
}else{if(_objToString.call(oObj)=="[object Object]"&&oObj!==null&&oObj!==undefined&&oObj.nodeType==nNodeNumber){return true
}}return false
}
})(i,oType[i])
}var _$type=["Function","Array","String","Boolean","Date","RegExp"];
for(var i=0,l=_$type.length;
i<l;
i++){jindo.$Jindo["is"+_$type[i]]=(function(type){return function(oObj){return _objToString.call(oObj)=="[object "+type+"]"
}
})(_$type[i])
}})();
jindo.$Jindo.isNode=function(eEle){try{return !!(eEle&&eEle.nodeType)
}catch(e){return false
}};
jindo.$Jindo.isHash=function(oObj){return _objToString.call(oObj)=="[object Object]"&&oObj!==null&&oObj!==undefined&&!!!oObj.nodeType&&!jindo.$Jindo.isWindow(oObj)
};
jindo.$Jindo.isNull=function(oObj){return oObj===null
};
jindo.$Jindo.isUndefined=function(oObj){return oObj===undefined
};
jindo.$Jindo.isWindow=function(oObj){return oObj==window||oObj==window.top
};
jindo.$Jindo.Break=function(){if(!(this instanceof arguments.callee)){throw new arguments.callee
}};
jindo.$Jindo.Continue=function(){if(!(this instanceof arguments.callee)){throw new arguments.callee
}};
jindo.$Jindo._F=function(sKeyType){return sKeyType
};
jindo.$Jindo._warn=function(sMessage){window.console&&((console.warn&&console.warn(sMessage),true)||(console.log&&console.log(sMessage),true))
};
jindo.$Jindo._maxWarn=function(nCurrentLength,nMaxLength,sMessage){if(nCurrentLength>nMaxLength){jindo.$Jindo._warn("추가적인 파라메터가 있습니다. : "+sMessage)
}};
jindo.$Jindo.checkVarType=function(aArgs,oRules,sFuncName){var sFuncName=sFuncName||aArgs.callee.name||"anonymous";
var $Jindo=jindo.$Jindo;
var bCompat=$Jindo.compatible();
var fpChecker=aArgs.callee["_checkVarType_"+bCompat];
if(fpChecker){return fpChecker(aArgs,oRules,sFuncName)
}var aPrependCode=[];
aPrependCode.push("var nArgsLen = aArgs.length;");
aPrependCode.push("var $Jindo = jindo.$Jindo;");
if(bCompat){aPrependCode.push("var nMatchScore;");
aPrependCode.push("var nMaxMatchScore = -1;");
aPrependCode.push("var oFinalRet = null;")
}var aBodyCode=[];
var nMaxRuleLen=0;
for(var sType in oRules){if(oRules.hasOwnProperty(sType)){nMaxRuleLen=Math.max(oRules[sType].length,nMaxRuleLen)
}}for(var sType in oRules){if(oRules.hasOwnProperty(sType)){var aRule=oRules[sType];
var nRuleLen=aRule.length;
var aBodyPrependCode=[];
var aBodyIfCode=[];
var aBodyThenCode=[];
if(!bCompat){if(nRuleLen<nMaxRuleLen){aBodyIfCode.push("nArgsLen === "+nRuleLen)
}else{aBodyIfCode.push("nArgsLen >= "+nRuleLen)
}}aBodyThenCode.push("var oRet = new $Jindo._varTypeRetObj();");
var nTypeCount=nRuleLen;
for(var i=0;
i<nRuleLen;
++i){/^([^:]+):([^\+]*)(\+?)$/.test(aRule[i]);
var sVarName=RegExp.$1;
var sVarType=RegExp.$2;
var bAutoCast=RegExp.$3?true:false;
if(sVarType==="Variant"){if(bCompat){aBodyIfCode.push(i+" in aArgs")
}aBodyThenCode.push('oRet["'+sVarName+'"] = aArgs['+i+"];");
nTypeCount--
}else{if($Jindo._varTypeList[sVarType]){var vVar="tmp"+sVarType+"_"+i;
aBodyPrependCode.push("var "+vVar+" = $Jindo._varTypeList."+sVarType+"(aArgs["+i+"], "+bAutoCast+");");
aBodyIfCode.push(vVar+" !== jindo.$Jindo.VARTYPE_NOT_MATCHED");
aBodyThenCode.push('oRet["'+sVarName+'"] = '+vVar+";")
}else{if(/^\$/.test(sVarType)&&jindo[sVarType]){var sOR="";
var sNativeVarType;
if(bAutoCast){sNativeVarType=({$Fn:"Function",$S:"String",$A:"Array",$H:"Hash",$ElementList:"Array"})[sVarType]||sVarType.replace(/^\$/,"");
if(jindo.$Jindo["is"+sNativeVarType]){sOR=" || $Jindo.is"+sNativeVarType+"(vNativeArg_"+i+")"
}}aBodyIfCode.push("(aArgs["+i+"] instanceof jindo."+sVarType+sOR+")");
aBodyThenCode.push('oRet["'+sVarName+'"] = jindo.'+sVarType+"(aArgs["+i+"]);")
}else{if(jindo.$Jindo["is"+sVarType]){var sOR="";
var sWrapedVarType;
if(bAutoCast){sWrapedVarType=({Function:"$Fn",String:"$S",Array:"$A",Hash:"$H"})[sVarType]||"$"+sVarType;
if(jindo[sWrapedVarType]){sOR=" || aArgs["+i+"] instanceof jindo."+sWrapedVarType
}}aBodyIfCode.push("($Jindo.is"+sVarType+"(aArgs["+i+"])"+sOR+")");
aBodyThenCode.push('oRet["'+sVarName+'"] = vNativeArg_'+i+";")
}else{throw new Error("VarType("+sVarType+") Not Found")
}}}}}aBodyThenCode.push('oRet.__type = "'+sType+'";');
if(bCompat){aBodyThenCode.push("nMatchScore = "+(nRuleLen*1000+nTypeCount*10)+" + (nArgsLen === "+nRuleLen+" ? 1 : 0);");
aBodyThenCode.push("if (nMatchScore > nMaxMatchScore) {");
aBodyThenCode.push("	nMaxMatchScore = nMatchScore;");
aBodyThenCode.push("	oFinalRet = oRet;");
aBodyThenCode.push("}")
}else{aBodyThenCode.push("return oRet;")
}aBodyCode.push(aBodyPrependCode.join("\n"));
if(aBodyIfCode.length){aBodyCode.push("if ("+aBodyIfCode.join(" && ")+") {")
}aBodyCode.push(aBodyThenCode.join("\n"));
if(aBodyIfCode.length){aBodyCode.push("}")
}}}aPrependCode.push("	$Jindo._maxWarn(nArgsLen,"+nMaxRuleLen+',"'+sFuncName+'");');
for(var i=0;
i<nMaxRuleLen;
++i){var sArg="aArgs["+i+"]";
aPrependCode.push(["var vNativeArg_",i," = ",sArg," && ",sArg,".$value ? ",sArg,".$value() : ",sArg+";"].join(""))
}if(!bCompat){aBodyCode.push("$Jindo.checkVarType._throwException(aArgs, oRules, sFuncName);")
}aBodyCode.push("return oFinalRet;");
aArgs.callee["_checkVarType_"+bCompat]=fpChecker=new Function("aArgs,oRules,sFuncName",aPrependCode.join("\n")+aBodyCode.join("\n"));
return fpChecker(aArgs,oRules,sFuncName)
};
jindo.$Jindo._varTypeRetObj=function(){};
jindo.$Jindo._varTypeRetObj.prototype.toString=function(){return this.__type
};
jindo.$Jindo.checkVarType._throwException=function(aArgs,oRules,sFuncName){var fpGetType=function(vArg){for(var sKey in jindo){if(jindo.hasOwnProperty(sKey)){var oConstructor=jindo[sKey];
if(typeof oConstructor!=="function"){continue
}if(vArg instanceof oConstructor){return sKey
}}}var $Jindo=jindo.$Jindo;
for(var sKey in $Jindo){if($Jindo.hasOwnProperty(sKey)){if(!/^is(.+)$/.test(sKey)){continue
}var sType=RegExp.$1;
var fpMethod=$Jindo[sKey];
if(fpMethod(vArg)){return sType
}}}return"Unknown"
};
var fpErrorMessage=function(sUsed,aSuggs,sURL){var aMsg=["잘못된 파라미터입니다.",""];
if(sUsed){aMsg.push("호출한 형태 :");
aMsg.push("\t"+sUsed);
aMsg.push("")
}if(aSuggs.length){aMsg.push("사용 가능한 형태 :");
for(var i=0,nLen=aSuggs.length;
i<nLen;
i++){aMsg.push("\t"+aSuggs[i])
}aMsg.push("")
}if(sURL){aMsg.push("매뉴얼 페이지 :");
aMsg.push("\t"+sURL);
aMsg.push("")
}aMsg.unshift();
return aMsg.join("\n")
};
var aArgName=[];
for(var i=0,ic=aArgs.length;
i<ic;
++i){try{aArgName.push(fpGetType(aArgs[i]))
}catch(e){aArgName.push("Unknown")
}}var sUsed=sFuncName+"("+aArgName.join(", ")+")";
var aSuggs=[];
for(var sKey in oRules){if(oRules.hasOwnProperty(sKey)){var aRule=oRules[sKey];
aSuggs.push(""+sFuncName+"("+aRule.join(", ").replace(/(^|,\s)[^:]+:/g,"$1")+")")
}}var sURL;
if(/(\$\w+)(#\w+)?/.test(sFuncName)){sURL="http://jindo.nhncorp.com/docs/jindo/archive/Jindo2-2.1.0/desktop/ko/symbols/"+encodeURIComponent(RegExp.$1)+".html"+RegExp.$2
}throw new TypeError(fpErrorMessage(sUsed,aSuggs,sURL))
};
jindo.$Jindo.varType=function(){var oArgs=this.checkVarType(arguments,{s4str:["sTypeName:String+","fpFunc:Function+"],s4obj:["oTypeLists:Hash+"],g:["sTypeName:String+"]});
var sDenyTypeListComma=jindo.$Jindo._denyTypeListComma;
switch(oArgs+""){case"s4str":var sTypeNameComma=","+oArgs.sTypeName.replace(/\+$/,"")+",";
if(sDenyTypeListComma.indexOf(sTypeNameComma)>-1){throw new Error("Not allowed Variable Type")
}this._varTypeList[oArgs.sTypeName]=oArgs.fpFunc;
return this;
case"s4obj":var oTypeLists=oArgs.oTypeLists;
for(var sTypeName in oTypeLists){if(oTypeLists.hasOwnProperty(sTypeName)){fpFunc=oTypeLists[sTypeName];
arguments.callee.call(this,sTypeName,fpFunc)
}}return this;
case"g":return this._varTypeList[oArgs.sTypeName]
}};
jindo.$Jindo.VARTYPE_NOT_MATCHED={};
(function(){var oVarTypeList=jindo.$Jindo._varTypeList={};
var ___jindo=jindo.$Jindo;
var ___notMatched=___jindo.VARTYPE_NOT_MATCHED;
oVarTypeList.Numeric=function(v){if(___jindo.isNumeric(v)){return v*1
}return ___notMatched
};
oVarTypeList.Hash=function(val,bAutoCast){if(bAutoCast&&jindo.$H&&val instanceof jindo.$H){return val.$value()
}else{if(___jindo.isHash(val)){return val
}}return ___notMatched
};
oVarTypeList["$Class"]=function(val,bAutoCast){if((!___jindo.isFunction(val))||!val.extend){return ___notMatched
}return val
};
var aDenyTypeList=[];
for(var sTypeName in ___jindo){if(___jindo.hasOwnProperty(sTypeName)){if(/^is(.+)$/.test(sTypeName)){aDenyTypeList.push(RegExp.$1)
}}}___jindo._denyTypeListComma=aDenyTypeList.join(",");
___jindo.varType("ArrayStyle",function(val,bAutoCast){if(!val){return ___notMatched
}if(/(Arguments|NodeList|HTMLCollection|global|Window)/.test(_objToString.call(val))||/Object/.test(_objToString.call(val))&&___jindo.isNumeric(val.length)){return _toArray(val)
}return ___notMatched
});
___jindo.varType("Form",function(val,bAutoCast){if(!val){return ___notMatched
}if(bAutoCast&&val.$value){val=val.$value()
}if(val.tagName&&val.tagName.toUpperCase()=="FORM"){return val
}return ___notMatched
})
})();
jindo.$=function(sID){if(!arguments.length){throw new jindo.$Error(jindo.$Except.NOT_FOUND_ARGUMENT,"$")
}var ret=[],arg=arguments,nArgLeng=arg.length,lastArgument=arg[nArgLeng-1],doc=document,el=null;
var reg=/^<([a-z]+|h[1-5])>$/i;
var reg2=/^<([a-z]+|h[1-5])(\s+[^>]+)?>/i;
if(nArgLeng>1&&typeof lastArgument!="string"&&lastArgument.body){arg=Array.prototype.slice.apply(arg,[0,nArgLeng-1]);
doc=lastArgument
}for(var i=0;
i<nArgLeng;
i++){el=arg[i]&&arg[i].$value?arg[i].$value():arg[i];
if(jindo.$Jindo.isString(el)||jindo.$Jindo.isNumeric(el)){el+="";
el=el.replace(/^\s+|\s+$/g,"");
if(el.indexOf("<")>-1){if(reg.test(el)){el=doc.createElement(RegExp.$1)
}else{if(reg2.test(el)){var p={thead:"table",tbody:"table",tr:"tbody",td:"tr",dt:"dl",dd:"dl",li:"ul",legend:"fieldset",option:"select"};
var tag=RegExp.$1.toLowerCase();
var ele=jindo._createEle(p[tag],el,doc);
for(var i=0,leng=ele.length;
i<leng;
i++){ret.push(ele[i])
}el=null
}}}else{el=jindo._getElementById(doc,el)
}}if(el&&el.nodeType){ret[ret.length]=el
}}return ret.length>1?ret:(ret[0]||null)
};
jindo._getElementById=function(doc,id){docEle=doc.documentElement;
var sCheckId="jindo"+(new Date()).getTime();
var eDiv=doc.createElement("div");
eDiv.style.display="none";
eDiv.innerHTML="<input title='jindoCheck' type='input' name='"+sCheckId+"'/>";
docEle.insertBefore(eDiv,docEle.firstChild);
if(doc.getElementById(sCheckId)){jindo._getElementById=function(doc,id){var eId=doc.getElementById(id);
if(eId==null){return eId
}if(eId.attributes.id&&eId.attributes.id.value==id){return eId
}var aEl=doc.all[id];
for(var i=1;
i<aEl.length;
i++){if(aEl[i].attributes.id&&aEl[i].attributes.id.value==id){return aEl[i]
}}}
}else{jindo._getElementById=function(doc,id){return doc.getElementById(id)
}
}return jindo._getElementById(doc,id)
};
jindo._createEle=function(sParentTag,sHTML,oDoc,bWantParent){var sId="R"+new Date().getTime()+parseInt(Math.random()*100000,10);
var oDummy=oDoc.createElement("div");
switch(sParentTag){case"select":case"table":case"dl":case"ul":case"fieldset":oDummy.innerHTML="<"+sParentTag+' class="'+sId+'">'+sHTML+"</"+sParentTag+">";
break;
case"thead":case"tbody":case"col":oDummy.innerHTML="<table><"+sParentTag+' class="'+sId+'">'+sHTML+"</"+sParentTag+"></table>";
break;
case"tr":oDummy.innerHTML='<table><tbody><tr class="'+sId+'">'+sHTML+"</tr></tbody></table>";
break;
default:oDummy.innerHTML='<div class="'+sId+'">'+sHTML+"</div>"
}var oFound;
for(oFound=oDummy.firstChild;
oFound;
oFound=oFound.firstChild){if(oFound.className==sId){break
}}return bWantParent?oFound:oFound.childNodes
};
jindo.$Class=function(oDef){var oArgs=jindo.$Jindo.checkVarType(arguments,{"4obj":["oDef:Hash+"]},"$Class");
function typeClass(){var t=this;
var a=[];
var superFunc=function(m,superClass,func){if(m!="constructor"&&func.toString().indexOf("$super")>-1){var funcArg=func.toString().replace(/function\s*\(([^\)]*)[\w\W]*/g,"$1").split(",");
var funcStr=func.toString().replace(/function[^{]*{/,"").replace(/(\w|\.?)(this\.\$super|this)/g,function(m,m2,m3){if(!m2){return m3+".$super"
}return m
});
funcStr=funcStr.substr(0,funcStr.length-1);
func=superClass[m]=eval("false||function("+funcArg.join(",")+"){"+funcStr+"}")
}return function(){var f=this.$this[m];
var t=this.$this;
var r=(t[m]=func).apply(t,arguments);
t[m]=f;
return r
}
};
while(t._$superClass!==undefined){t.$super=new Object;
t.$super.$this=this;
for(var x in t._$superClass.prototype){if(t._$superClass.prototype.hasOwnProperty(x)){if(this[x]===undefined&&x!="$init"){this[x]=t._$superClass.prototype[x]
}if(x!="constructor"&&x!="_$superClass"&&typeof t._$superClass.prototype[x]=="function"){t.$super[x]=superFunc(x,t._$superClass,t._$superClass.prototype[x])
}else{t.$super[x]=t._$superClass.prototype[x]
}}}if(typeof t.$super.$init=="function"){a[a.length]=t
}t=t.$super
}for(var i=a.length-1;
i>-1;
i--){a[i].$super.$init.apply(a[i].$super,arguments)
}if(typeof this.$init=="function"){this.$init.apply(this,arguments)
}}if(oDef.$static!==undefined){var i=0,x;
for(x in oDef){if(oDef.hasOwnProperty(x)){x=="$static"||i++
}}for(x in oDef.$static){if(oDef.$static.hasOwnProperty(x)){typeClass[x]=oDef.$static[x]
}}if(!i){return oDef.$static
}delete oDef.$static
}typeClass.prototype=oDef;
typeClass.prototype.constructor=typeClass;
typeClass.prototype.kindOf=function(oClass){return _kindOf(this.constructor.prototype,oClass.prototype)
};
typeClass.extend=jindo.$Class.extend;
return typeClass
};
function _kindOf(oThis,oClass){if(oThis!=oClass){if(oThis._$superClass){return _kindOf(oThis._$superClass.prototype,oClass)
}else{return false
}}else{return true
}}jindo.$Class.extend=function(superClass){var oArgs=jindo.$Jindo.checkVarType(arguments,{"4obj":["oDef:$Class"]},"<static> $Class#extend");
this.prototype._$superClass=superClass;
for(var x in superClass){if(superClass.hasOwnProperty(x)){if(x=="prototype"){continue
}this[x]=superClass[x]
}}return this
};
jindo.$$=jindo.cssquery=(function(){var sVersion="3.0";
var debugOption={repeat:1};
var UID=1;
var cost=0;
var validUID={};
var bSupportByClassName=document.getElementsByClassName?true:false;
var safeHTML=false;
var getUID4HTML=function(oEl){var nUID=safeHTML?(oEl._cssquery_UID&&oEl._cssquery_UID[0]):oEl._cssquery_UID;
if(nUID&&validUID[nUID]==oEl){return nUID
}nUID=UID++;
oEl._cssquery_UID=safeHTML?[nUID]:nUID;
validUID[nUID]=oEl;
return nUID
};
function GEBID(oBase,sId,oDoc){if(oBase.nodeType===9||oBase.parentNode&&oBase.parentNode.tagName){return jindo._getElementById(oDoc,sId)
}else{var aEle=oBase.getElementsByTagName("*");
for(var i=0,l=aEle.length;
i<l;
i++){if(aEle[i].id===sId){return aEle[i]
}}}}var getUID4XML=function(oEl){var oAttr=oEl.getAttribute("_cssquery_UID");
var nUID=safeHTML?(oAttr&&oAttr[0]):oAttr;
if(!nUID){nUID=UID++;
oEl.setAttribute("_cssquery_UID",safeHTML?[nUID]:nUID)
}return nUID
};
var getUID=getUID4HTML;
var uniqid=function(sPrefix){return(sPrefix||"")+new Date().getTime()+parseInt(Math.random()*100000000,10)
};
function getElementsByClass(searchClass,node,tag){var classElements=new Array();
if(node==null){node=document
}if(tag==null){tag="*"
}var els=node.getElementsByTagName(tag);
var elsLen=els.length;
var pattern=new RegExp("(^|\\s)"+searchClass+"(\\s|$)");
for(i=0,j=0;
i<elsLen;
i++){if(pattern.test(els[i].className)){classElements[j]=els[i];
j++
}}return classElements
}var getChilds_dontShrink=function(oEl,sTagName,sClassName){if(bSupportByClassName&&sClassName){if(oEl.getElementsByClassName){return oEl.getElementsByClassName(sClassName)
}if(oEl.querySelectorAll){return oEl.querySelectorAll(sClassName)
}return getElementsByClass(sClassName,oEl,sTagName)
}else{if(sTagName=="*"){return oEl.all||oEl.getElementsByTagName(sTagName)
}}return oEl.getElementsByTagName(sTagName)
};
var clearKeys=function(){backupKeys._keys={}
};
var oDocument_dontShrink=document;
var bXMLDocument=false;
var backupKeys=function(sQuery){var oKeys=backupKeys._keys;
sQuery=sQuery.replace(/'(\\'|[^'])*'/g,function(sAll){var uid=uniqid("QUOT");
oKeys[uid]=sAll;
return uid
});
sQuery=sQuery.replace(/"(\\"|[^"])*"/g,function(sAll){var uid=uniqid("QUOT");
oKeys[uid]=sAll;
return uid
});
sQuery=sQuery.replace(/\[(.*?)\]/g,function(sAll,sBody){if(sBody.indexOf("ATTR")==0){return sAll
}var uid="["+uniqid("ATTR")+"]";
oKeys[uid]=sAll;
return uid
});
var bChanged;
do{bChanged=false;
sQuery=sQuery.replace(/\(((\\\)|[^)|^(])*)\)/g,function(sAll,sBody){if(sBody.indexOf("BRCE")==0){return sAll
}var uid="_"+uniqid("BRCE");
oKeys[uid]=sAll;
bChanged=true;
return uid
})
}while(bChanged);
return sQuery
};
var restoreKeys=function(sQuery,bOnlyAttrBrace){var oKeys=backupKeys._keys;
var bChanged;
var rRegex=bOnlyAttrBrace?/(\[ATTR[0-9]+\])/g:/(QUOT[0-9]+|\[ATTR[0-9]+\])/g;
do{bChanged=false;
sQuery=sQuery.replace(rRegex,function(sKey){if(oKeys[sKey]){bChanged=true;
return oKeys[sKey]
}return sKey
})
}while(bChanged);
sQuery=sQuery.replace(/_BRCE[0-9]+/g,function(sKey){return oKeys[sKey]?oKeys[sKey]:sKey
});
return sQuery
};
var restoreString=function(sKey){var oKeys=backupKeys._keys;
var sOrg=oKeys[sKey];
if(!sOrg){return sKey
}return eval(sOrg)
};
var wrapQuot=function(sStr){return'"'+sStr.replace(/"/g,'\\"')+'"'
};
var getStyleKey=function(sKey){if(/^@/.test(sKey)){return sKey.substr(1)
}return null
};
var getCSS=function(oEl,sKey){if(oEl.currentStyle){if(sKey=="float"){sKey="styleFloat"
}return oEl.currentStyle[sKey]||oEl.style[sKey]
}else{if(window.getComputedStyle){return oDocument_dontShrink.defaultView.getComputedStyle(oEl,null).getPropertyValue(sKey.replace(/([A-Z])/g,"-$1").toLowerCase())||oEl.style[sKey]
}}if(sKey=="float"&&_JINDO_IS_IE){sKey="styleFloat"
}return oEl.style[sKey]
};
var oCamels={accesskey:"accessKey",cellspacing:"cellSpacing",cellpadding:"cellPadding","class":"className",colspan:"colSpan","for":"htmlFor",maxlength:"maxLength",readonly:"readOnly",rowspan:"rowSpan",tabindex:"tabIndex",valign:"vAlign"};
var getDefineCode=function(sKey){var sVal;
var sStyleKey;
if(bXMLDocument){sVal='oEl.getAttribute("'+sKey+'",2)'
}else{if(sStyleKey=getStyleKey(sKey)){sKey="$$"+sStyleKey;
sVal='getCSS(oEl, "'+sStyleKey+'")'
}else{switch(sKey){case"checked":sVal='oEl.checked + ""';
break;
case"disabled":sVal='oEl.disabled + ""';
break;
case"enabled":sVal='!oEl.disabled + ""';
break;
case"readonly":sVal='oEl.readOnly + ""';
break;
case"selected":sVal='oEl.selected + ""';
break;
default:if(oCamels[sKey]){sVal="oEl."+oCamels[sKey]
}else{sVal='oEl.getAttribute("'+sKey+'",2)'
}}}}return"_"+sKey.replace(/\-/g,"_")+" = "+sVal
};
var getReturnCode=function(oExpr){var sStyleKey=getStyleKey(oExpr.key);
var sVar="_"+(sStyleKey?"$$"+sStyleKey:oExpr.key);
sVar=sVar.replace(/\-/g,"_");
var sVal=oExpr.val?wrapQuot(oExpr.val):"";
switch(oExpr.op){case"~=":return"("+sVar+' && (" " + '+sVar+' + " ").indexOf(" " + '+sVal+' + " ") > -1)';
case"^=":return"("+sVar+" && "+sVar+".indexOf("+sVal+") == 0)";
case"$=":return"("+sVar+" && "+sVar+".substr("+sVar+".length - "+oExpr.val.length+") == "+sVal+")";
case"*=":return"("+sVar+" && "+sVar+".indexOf("+sVal+") > -1)";
case"!=":return"("+sVar+" != "+sVal+")";
case"=":return"("+sVar+" == "+sVal+")"
}return"("+sVar+")"
};
var getNodeIndex=function(oEl){var nUID=getUID(oEl);
var nIndex=oNodeIndexes[nUID]||0;
if(nIndex==0){for(var oSib=(oEl.parentNode||oEl._IE5_parentNode).firstChild;
oSib;
oSib=oSib.nextSibling){if(oSib.nodeType!=1){continue
}nIndex++;
setNodeIndex(oSib,nIndex)
}nIndex=oNodeIndexes[nUID]
}return nIndex
};
var oNodeIndexes={};
var setNodeIndex=function(oEl,nIndex){var nUID=getUID(oEl);
oNodeIndexes[nUID]=nIndex
};
var unsetNodeIndexes=function(){setTimeout(function(){oNodeIndexes={}
},0)
};
var oPseudoes_dontShrink={contains:function(oEl,sOption){return(oEl.innerText||oEl.textContent||"").indexOf(sOption)>-1
},"last-child":function(oEl,sOption){for(oEl=oEl.nextSibling;
oEl;
oEl=oEl.nextSibling){if(oEl.nodeType==1){return false
}}return true
},"first-child":function(oEl,sOption){for(oEl=oEl.previousSibling;
oEl;
oEl=oEl.previousSibling){if(oEl.nodeType==1){return false
}}return true
},"only-child":function(oEl,sOption){var nChild=0;
for(var oChild=(oEl.parentNode||oEl._IE5_parentNode).firstChild;
oChild;
oChild=oChild.nextSibling){if(oChild.nodeType==1){nChild++
}if(nChild>1){return false
}}return nChild?true:false
},empty:function(oEl,_){return oEl.firstChild?false:true
},"nth-child":function(oEl,nMul,nAdd){var nIndex=getNodeIndex(oEl);
return nIndex%nMul==nAdd
},"nth-last-child":function(oEl,nMul,nAdd){var oLast=(oEl.parentNode||oEl._IE5_parentNode).lastChild;
for(;
oLast;
oLast=oLast.previousSibling){if(oLast.nodeType==1){break
}}var nTotal=getNodeIndex(oLast);
var nIndex=getNodeIndex(oEl);
var nLastIndex=nTotal-nIndex+1;
return nLastIndex%nMul==nAdd
},checked:function(oEl){return !!oEl.checked
},selected:function(oEl){return !!oEl.selected
},enabled:function(oEl){return !oEl.disabled
},disabled:function(oEl){return !!oEl.disabled
}};
var getExpression=function(sBody){var oRet={defines:"",returns:"true"};
var sBody=restoreKeys(sBody,true);
var aExprs=[];
var aDefineCode=[],aReturnCode=[];
var sId,sTagName;
var sBody=sBody.replace(/:([\w-]+)(\(([^)]*)\))?/g,function(_1,sType,_2,sOption){switch(sType){case"not":var oInner=getExpression(sOption);
var sFuncDefines=oInner.defines;
var sFuncReturns=oInner.returnsID+oInner.returnsTAG+oInner.returns;
aReturnCode.push("!(function() { "+sFuncDefines+" return "+sFuncReturns+" })()");
break;
case"nth-child":case"nth-last-child":sOption=restoreString(sOption);
if(sOption=="even"){sOption="2n"
}else{if(sOption=="odd"){sOption="2n+1"
}}var nMul,nAdd;
var matchstr=sOption.match(/([0-9]*)n([+-][0-9]+)*/);
if(matchstr){nMul=matchstr[1]||1;
nAdd=matchstr[2]||0
}else{nMul=Infinity;
nAdd=parseInt(sOption,10)
}aReturnCode.push("oPseudoes_dontShrink["+wrapQuot(sType)+"](oEl, "+nMul+", "+nAdd+")");
break;
case"first-of-type":case"last-of-type":sType=(sType=="first-of-type"?"nth-of-type":"nth-last-of-type");
sOption=1;
case"nth-of-type":case"nth-last-of-type":sOption=restoreString(sOption);
if(sOption=="even"){sOption="2n"
}else{if(sOption=="odd"){sOption="2n+1"
}}var nMul,nAdd;
if(/([0-9]*)n([+-][0-9]+)*/.test(sOption)){nMul=parseInt(RegExp.$1,10)||1;
nAdd=parseInt(RegExp.$2,20)||0
}else{nMul=Infinity;
nAdd=parseInt(sOption,10)
}oRet.nth=[nMul,nAdd,sType];
break;
default:sOption=sOption?restoreString(sOption):"";
aReturnCode.push("oPseudoes_dontShrink["+wrapQuot(sType)+"](oEl, "+wrapQuot(sOption)+")")
}return""
});
var sBody=sBody.replace(/\[(@?[\w-]+)(([!^~$*]?=)([^\]]*))?\]/g,function(_1,sKey,_2,sOp,sVal){sKey=restoreString(sKey);
sVal=restoreString(sVal);
if(sKey=="checked"||sKey=="disabled"||sKey=="enabled"||sKey=="readonly"||sKey=="selected"){if(!sVal){sOp="=";
sVal="true"
}}aExprs.push({key:sKey,op:sOp,val:sVal});
return""
});
var sClassName=null;
var sBody=sBody.replace(/\.([\w-]+)/g,function(_,sClass){aExprs.push({key:"class",op:"~=",val:sClass});
if(!sClassName){sClassName=sClass
}return""
});
var sBody=sBody.replace(/#([\w-]+)/g,function(_,sIdValue){if(bXMLDocument){aExprs.push({key:"id",op:"=",val:sIdValue})
}else{sId=sIdValue
}return""
});
sTagName=sBody=="*"?"":sBody;
var oVars={};
for(var i=0,oExpr;
oExpr=aExprs[i];
i++){var sKey=oExpr.key;
if(!oVars[sKey]){aDefineCode.push(getDefineCode(sKey))
}aReturnCode.unshift(getReturnCode(oExpr));
oVars[sKey]=true
}if(aDefineCode.length){oRet.defines="var "+aDefineCode.join(",")+";"
}if(aReturnCode.length){oRet.returns=aReturnCode.join("&&")
}oRet.quotID=sId?wrapQuot(sId):"";
oRet.quotTAG=sTagName?wrapQuot(bXMLDocument?sTagName:sTagName.toUpperCase()):"";
if(bSupportByClassName){oRet.quotCLASS=sClassName?wrapQuot(sClassName):""
}oRet.returnsID=sId?"oEl.id == "+oRet.quotID+" && ":"";
oRet.returnsTAG=sTagName&&sTagName!="*"?"oEl.tagName == "+oRet.quotTAG+" && ":"";
return oRet
};
var splitToParts=function(sQuery){var aParts=[];
var sRel=" ";
var sBody=sQuery.replace(/(.*?)\s*(!?[+>~ ]|!)\s*/g,function(_,sBody,sRelative){if(sBody){aParts.push({rel:sRel,body:sBody})
}sRel=sRelative.replace(/\s+$/g,"")||" ";
return""
});
if(sBody){aParts.push({rel:sRel,body:sBody})
}return aParts
};
var isNth_dontShrink=function(oEl,sTagName,nMul,nAdd,sDirection){var nIndex=0;
for(var oSib=oEl;
oSib;
oSib=oSib[sDirection]){if(oSib.nodeType==1&&(!sTagName||sTagName==oSib.tagName)){nIndex++
}}return nIndex%nMul==nAdd
};
var compileParts=function(aParts){var aPartExprs=[];
for(var i=0,oPart;
oPart=aParts[i];
i++){aPartExprs.push(getExpression(oPart.body))
}var sFunc="";
var sPushCode="aRet.push(oEl); if (oOptions.single) { bStop = true; }";
for(var i=aParts.length-1,oPart;
oPart=aParts[i];
i--){var oExpr=aPartExprs[i];
var sPush=(debugOption.callback?"cost++;":"")+oExpr.defines;
var sReturn="if (bStop) {"+(i==0?"return aRet;":"return;")+"}";
if(oExpr.returns=="true"){sPush+=(sFunc?sFunc+"(oEl);":sPushCode)+sReturn
}else{sPush+="if ("+oExpr.returns+") {"+(sFunc?sFunc+"(oEl);":sPushCode)+sReturn+"}"
}var sCheckTag="oEl.nodeType != 1";
if(oExpr.quotTAG){sCheckTag="oEl.tagName != "+oExpr.quotTAG
}var sTmpFunc="(function(oBase"+(i==0?", oOptions) { var bStop = false; var aRet = [];":") {");
if(oExpr.nth){sPush="if (isNth_dontShrink(oEl, "+(oExpr.quotTAG?oExpr.quotTAG:"false")+","+oExpr.nth[0]+","+oExpr.nth[1]+',"'+(oExpr.nth[2]=="nth-of-type"?"previousSibling":"nextSibling")+'")) {'+sPush+"}"
}switch(oPart.rel){case" ":if(oExpr.quotID){sTmpFunc+="var oEl = GEBID(oBase,"+oExpr.quotID+",oDocument_dontShrink);var oCandi = oEl;for (; oCandi; oCandi = (oCandi.parentNode || oCandi._IE5_parentNode)) {if (oCandi == oBase) break;}if (!oCandi || "+sCheckTag+") return aRet;"+sPush
}else{sTmpFunc+="var aCandi = getChilds_dontShrink(oBase, "+(oExpr.quotTAG||'"*"')+", "+(oExpr.quotCLASS||"null")+");for (var i = 0, oEl; oEl = aCandi[i]; i++) {"+(oExpr.quotCLASS?"if ("+sCheckTag+") continue;":"")+sPush+"}"
}break;
case">":if(oExpr.quotID){sTmpFunc+="var oEl = GEBID(oBase,"+oExpr.quotID+",oDocument_dontShrink);if ((oEl.parentNode || oEl._IE5_parentNode) != oBase || "+sCheckTag+") return aRet;"+sPush
}else{sTmpFunc+="for (var oEl = oBase.firstChild; oEl; oEl = oEl.nextSibling) {if ("+sCheckTag+") { continue; }"+sPush+"}"
}break;
case"+":if(oExpr.quotID){sTmpFunc+="var oEl = GEBID(oBase,"+oExpr.quotID+",oDocument_dontShrink);var oPrev;for (oPrev = oEl.previousSibling; oPrev; oPrev = oPrev.previousSibling) { if (oPrev.nodeType == 1) break; }if (!oPrev || oPrev != oBase || "+sCheckTag+") return aRet;"+sPush
}else{sTmpFunc+="for (var oEl = oBase.nextSibling; oEl; oEl = oEl.nextSibling) { if (oEl.nodeType == 1) break; }if (!oEl || "+sCheckTag+") { return aRet; }"+sPush
}break;
case"~":if(oExpr.quotID){sTmpFunc+="var oEl = GEBID(oBase,"+oExpr.quotID+",oDocument_dontShrink);var oCandi = oEl;for (; oCandi; oCandi = oCandi.previousSibling) { if (oCandi == oBase) break; }if (!oCandi || "+sCheckTag+") return aRet;"+sPush
}else{sTmpFunc+="for (var oEl = oBase.nextSibling; oEl; oEl = oEl.nextSibling) {if ("+sCheckTag+") { continue; }if (!markElement_dontShrink(oEl, "+i+")) { break; }"+sPush+"}"
}break;
case"!":if(oExpr.quotID){sTmpFunc+="var oEl = GEBID(oBase,"+oExpr.quotID+",oDocument_dontShrink);for (; oBase; oBase = (oBase.parentNode || oBase._IE5_parentNode)) { if (oBase == oEl) break; }if (!oBase || "+sCheckTag+") return aRet;"+sPush
}else{sTmpFunc+="for (var oEl = (oBase.parentNode || oBase._IE5_parentNode); oEl; oEl = (oEl.parentNode || oEl._IE5_parentNode)) {if ("+sCheckTag+") { continue; }"+sPush+"}"
}break;
case"!>":if(oExpr.quotID){sTmpFunc+="var oEl = GEBID(oBase,"+oExpr.quotID+",oDocument_dontShrink);var oRel = (oBase.parentNode || oBase._IE5_parentNode);if (!oRel || oEl != oRel || ("+sCheckTag+")) return aRet;"+sPush
}else{sTmpFunc+="var oEl = (oBase.parentNode || oBase._IE5_parentNode);if (!oEl || "+sCheckTag+") { return aRet; }"+sPush
}break;
case"!+":if(oExpr.quotID){sTmpFunc+="var oEl = GEBID(oBase,"+oExpr.quotID+",oDocument_dontShrink);var oRel;for (oRel = oBase.previousSibling; oRel; oRel = oRel.previousSibling) { if (oRel.nodeType == 1) break; }if (!oRel || oEl != oRel || ("+sCheckTag+")) return aRet;"+sPush
}else{sTmpFunc+="for (oEl = oBase.previousSibling; oEl; oEl = oEl.previousSibling) { if (oEl.nodeType == 1) break; }if (!oEl || "+sCheckTag+") { return aRet; }"+sPush
}break;
case"!~":if(oExpr.quotID){sTmpFunc+="var oEl = GEBID(oBase,"+oExpr.quotID+",oDocument_dontShrink);var oRel;for (oRel = oBase.previousSibling; oRel; oRel = oRel.previousSibling) { if (oRel.nodeType != 1) { continue; }if (oRel == oEl) { break; }}if (!oRel || ("+sCheckTag+")) return aRet;"+sPush
}else{sTmpFunc+="for (oEl = oBase.previousSibling; oEl; oEl = oEl.previousSibling) {if ("+sCheckTag+") { continue; }if (!markElement_dontShrink(oEl, "+i+")) { break; }"+sPush+"}"
}}sTmpFunc+=(i==0?"return aRet;":"")+"})";
sFunc=sTmpFunc
}eval("var fpCompiled = "+sFunc+";");
return fpCompiled
};
var parseQuery=function(sQuery){var sCacheKey=sQuery;
var fpSelf=arguments.callee;
var fpFunction=fpSelf._cache[sCacheKey];
if(!fpFunction){sQuery=backupKeys(sQuery);
var aParts=splitToParts(sQuery);
fpFunction=fpSelf._cache[sCacheKey]=compileParts(aParts);
fpFunction.depth=aParts.length
}return fpFunction
};
parseQuery._cache={};
var parseTestQuery=function(sQuery){var fpSelf=arguments.callee;
var aSplitQuery=backupKeys(sQuery).split(/\s*,\s*/);
var aResult=[];
var nLen=aSplitQuery.length;
var aFunc=[];
for(var i=0;
i<nLen;
i++){aFunc.push((function(sQuery){var sCacheKey=sQuery;
var fpFunction=fpSelf._cache[sCacheKey];
if(!fpFunction){sQuery=backupKeys(sQuery);
var oExpr=getExpression(sQuery);
eval("fpFunction = function(oEl) { "+oExpr.defines+"return ("+oExpr.returnsID+oExpr.returnsTAG+oExpr.returns+"); };")
}return fpFunction
})(restoreKeys(aSplitQuery[i])))
}return aFunc
};
parseTestQuery._cache={};
var distinct=function(aList){var aDistinct=[];
var oDummy={};
for(var i=0,oEl;
oEl=aList[i];
i++){var nUID=getUID(oEl);
if(oDummy[nUID]){continue
}aDistinct.push(oEl);
oDummy[nUID]=true
}return aDistinct
};
var markElement_dontShrink=function(oEl,nDepth){var nUID=getUID(oEl);
if(cssquery._marked[nDepth][nUID]){return false
}cssquery._marked[nDepth][nUID]=true;
return true
};
var oResultCache=null;
var bUseResultCache=false;
var bExtremeMode=false;
var old_cssquery=function(sQuery,oParent,oOptions){var oArgs=jindo.$Jindo.checkVarType(arguments,{"4str":["sQuery:String+"],"4var":["sQuery:String+","oParent:Variant"],"4var2":["sQuery:String+","oParent:Variant","oOptions:Variant"]},"cssquery");
oParent=oParent&&oParent.$value?oParent.$value():oParent;
oOptions=oOptions&&oOptions.$value?oOptions.$value():oOptions;
if(jindo.$Jindo.isString(oParent)){try{oParent=document.getElementById(oParent)
}catch(e){oParent=document
}}if(!oParent){oParent=document
}oParent=oParent||oParent.ownerDocument||oParent.document;
if(typeof sQuery=="object"){var oResult={};
for(var k in sQuery){if(sQuery.hasOwnProperty(k)){oResult[k]=arguments.callee(sQuery[k],oParent,oOptions)
}}return oResult
}cost=0;
var executeTime=new Date().getTime();
var aRet;
for(var r=0,rp=debugOption.repeat;
r<rp;
r++){aRet=(function(sQuery,oParent,oOptions){if(oOptions){if(!oOptions.oneTimeOffCache){oOptions.oneTimeOffCache=false
}}else{oOptions={oneTimeOffCache:false}
}cssquery.safeHTML(oOptions.oneTimeOffCache);
if(!oParent){oParent=document
}oDocument_dontShrink=oParent.ownerDocument||oParent.document||oParent;
if(/\bMSIE\s([0-9]+(\.[0-9]+)*);/.test(_j_ag)&&parseFloat(RegExp.$1,10)<6){try{oDocument_dontShrink.location
}catch(e){oDocument_dontShrink=document
}oDocument_dontShrink.firstChild=oDocument_dontShrink.getElementsByTagName("html")[0];
oDocument_dontShrink.firstChild._IE5_parentNode=oDocument_dontShrink
}bXMLDocument=(typeof XMLDocument!=="undefined")?(oDocument_dontShrink.constructor===XMLDocument):(!oDocument_dontShrink.location);
getUID=bXMLDocument?getUID4XML:getUID4HTML;
clearKeys();
var aSplitQuery=backupKeys(sQuery).split(/\s*,\s*/);
var aResult=[];
var nLen=aSplitQuery.length;
for(var i=0;
i<nLen;
i++){aSplitQuery[i]=restoreKeys(aSplitQuery[i])
}for(var i=0;
i<nLen;
i++){var sSingleQuery=aSplitQuery[i];
var aSingleQueryResult=null;
var sResultCacheKey=sSingleQuery+(oOptions.single?"_single":"");
var aCache=bUseResultCache?oResultCache[sResultCacheKey]:null;
if(aCache){for(var j=0,oCache;
oCache=aCache[j];
j++){if(oCache.parent==oParent){aSingleQueryResult=oCache.result;
break
}}}if(!aSingleQueryResult){var fpFunction=parseQuery(sSingleQuery);
cssquery._marked=[];
for(var j=0,nDepth=fpFunction.depth;
j<nDepth;
j++){cssquery._marked.push({})
}aSingleQueryResult=distinct(fpFunction(oParent,oOptions));
if(bUseResultCache&&!oOptions.oneTimeOffCache){if(!(oResultCache[sResultCacheKey] instanceof Array)){oResultCache[sResultCacheKey]=[]
}oResultCache[sResultCacheKey].push({parent:oParent,result:aSingleQueryResult})
}}aResult=aResult.concat(aSingleQueryResult)
}unsetNodeIndexes();
return aResult
})(sQuery,oParent,oOptions)
}executeTime=new Date().getTime()-executeTime;
if(debugOption.callback){debugOption.callback(sQuery,cost,executeTime)
}return aRet
};
var cssquery;
if(document.querySelectorAll){function _isNonStandardQueryButNotException(sQuery){return/\[\s*(?:checked|selected|disabled)/.test(sQuery)
}function _commaRevise(sQuery,sChange){return sQuery.replace(/\,/gi,sChange)
}function _startCombinator(sQuery){return/^[~>+]/.test(sQuery)
}var _div=document.createElement("div");
cssquery=function(sQuery,oParent,oOptions){var oArgs=jindo.$Jindo.checkVarType(arguments,{"4str":["sQuery:String+"],"4var":["sQuery:String+","oParent:Variant"],"4var2":["sQuery:String+","oParent:Variant","oOptions:Variant"]},"cssquery");
oParent=oParent&&oParent.$value?oParent.$value():oParent;
oOptions=oOptions&&oOptions.$value?oOptions.$value():oOptions;
if(jindo.$Jindo.isString(oParent)){oParent=document.getElementById(oParent)
}var sTempId,aRet;
if(!oParent){oParent=document
}oParent=oParent||oParent.ownerDocument||oParent.document;
var nNodeType=oParent.nodeType;
var oldID,oOldParent,id,_clone;
try{if(_isNonStandardQueryButNotException(sQuery)){return old_cssquery(sQuery,oParent,oOptions)
}var sTagName=(oParent.tagName||"").toUpperCase();
if(nNodeType!==9&&sTagName!="HTML"){if(nNodeType===11){oParent=oParent.cloneNode(true);
_clone=_div.cloneNode(true);
_clone.appendChild(oParent);
oParent=_clone;
_clone=null
}if(oParent.id){oldID=oParent.id
}oParent.setAttribute("id",("C"+new Date().getTime()+Math.floor(Math.random()*1000000)));
if(sTagName==="BODY"||jindo.$Element._contain((oParent.ownerDocument||oParent.document).body,oParent)){id=oParent.id;
var _parent=oParent.parentNode;
oOldParent=oParent;
oParent=_parent
}else{_clone=_div.cloneNode(true);
id=oParent.id;
oOldParent=oParent;
_clone.appendChild(oOldParent);
oParent=_clone
}sQuery=_commaRevise("#"+id+" "+sQuery,", #"+id)
}else{oParent=(oParent.ownerDocument||oParent.document||oParent);
if(_startCombinator(sQuery)){return[]
}}if(oOptions&&oOptions.single){aRet=[oParent.querySelector(sQuery)]
}else{aRet=_toArray(oParent.querySelectorAll(sQuery))
}}catch(e){aRet=old_cssquery(sQuery,oParent,oOptions)
}if(oOldParent){if(oldID){oOldParent.id=oldID
}else{oOldParent.removeAttribute("id")
}_clone=null
}return aRet
}
}else{cssquery=old_cssquery
}cssquery.test=function(oEl,sQuery){clearKeys();
try{var oArgs=jindo.$Jindo.checkVarType(arguments,{"4ele":["oEl:Element+","sQuery:String+"],"4doc":["oEl:Document+","sQuery:String+"]},"<static> cssquery#test");
eEl=oArgs.oEl;
sQuery=oArgs.sQuery
}catch(e){return false
}var aFunc=parseTestQuery(sQuery);
for(var i=0,nLen=aFunc.length;
i<nLen;
i++){if(aFunc[i](oEl)){return true
}}return false
};
cssquery.useCache=function(bFlag){if(bFlag!==undefined){bUseResultCache=bFlag;
cssquery.clearCache()
}return bUseResultCache
};
cssquery.clearCache=function(){oResultCache={}
};
cssquery.getSingle=function(sQuery,oParent,oOptions){oOptions=oOptions&&oOptions.$value?oOptions.$value():oOptions;
return cssquery(sQuery,oParent,{single:true,oneTimeOffCache:oOptions?(!!oOptions.oneTimeOffCache):false})[0]||null
};
cssquery.xpath=function(sXPath,oParent){sXPath=sXPath&&sXPath.$value?sXPath.$value():sXPath;
sXPath=sXPath.replace(/\/(\w+)(\[([0-9]+)\])?/g,function(_1,sTag,_2,sTh){sTh=sTh||"1";
return">"+sTag+":nth-of-type("+sTh+")"
});
return old_cssquery(sXPath,oParent)
};
cssquery.debug=function(fpCallback,nRepeat){var oArgs=jindo.$Jindo.checkVarType(arguments,{"4fun":["fpCallback:Function+"],"4fun2":["fpCallback:Function+","nRepeat:Numeric"]},"<static> cssquery#debug");
debugOption.callback=oArgs.fpCallback;
debugOption.repeat=oArgs.nRepeat||1
};
cssquery.safeHTML=function(bFlag){if(arguments.length>0){safeHTML=bFlag&&_JINDO_IS_IE
}return safeHTML||!_JINDO_IS_IE
};
cssquery.version=sVersion;
cssquery.release=function(){if(_JINDO_IS_IE){delete validUID;
validUID={};
if(bUseResultCache){cssquery.clearCache()
}}};
cssquery._getCacheInfo=function(){return{uidCache:validUID,eleCache:oResultCache}
};
cssquery._resetUID=function(){UID=0
};
cssquery.extreme=function(bExtreme){if(arguments.length==0){bExtreme=true
}bExtremeMode=bExtreme
};
return cssquery
})();
jindo.$Agent=function(){var cl=arguments.callee;
var cc=cl._cached;
if(cc){return cc
}if(!(this instanceof cl)){return new cl
}if(!cc){cl._cached=this
}this._navigator=navigator;
this._dm=document.documentMode
};
jindo.$Agent.prototype.navigator=function(){var info={},ver=-1,nativeVersion=-1,u=this._navigator.userAgent,v=this._navigator.vendor||"",dm=this._dm;
function f(s,h){return((h||"").indexOf(s)>-1)
}info.getName=function(){var name="";
for(var x in info){if(typeof info[x]=="boolean"&&info[x]&&info.hasOwnProperty(x)){name=x
}}return name
};
info.webkit=f("WebKit",u);
info.opera=(window.opera!==undefined)||f("Opera",u);
info.ie=!info.opera&&(f("MSIE",u)||f("Trident",u));
info.chrome=info.webkit&&f("Chrome",u);
info.safari=info.webkit&&!info.chrome&&f("Apple",v);
info.firefox=f("Firefox",u);
info.mozilla=f("Gecko",u)&&!info.safari&&!info.chrome&&!info.firefox&&!info.ie;
info.camino=f("Camino",v);
info.netscape=f("Netscape",u);
info.omniweb=f("OmniWeb",u);
info.icab=f("iCab",v);
info.konqueror=f("KDE",v);
info.mobile=(f("Mobile",u)||f("Android",u)||f("Nokia",u)||f("webOS",u)||f("Opera Mini",u)||f("BlackBerry",u)||(f("Windows",u)&&f("PPC",u))||f("Smartphone",u)||f("IEMobile",u))&&!f("iPad",u);
info.msafari=(!f("IEMobile",u)&&f("Mobile",u))||(f("iPad",u)&&f("Safari",u));
info.mopera=f("Opera Mini",u);
info.mie=f("PPC",u)||f("Smartphone",u)||f("IEMobile",u);
try{if(info.ie){if(dm>0){ver=dm;
if(u.match(/(?:Trident)\/([0-9.]+)/)){var nTridentNum=parseFloat(RegExp.$1,10);
if(nTridentNum>3){nativeVersion=nTridentNum+4
}}else{nativeVersion=ver
}}else{nativeVersion=ver=u.match(/(?:MSIE) ([0-9.]+)/)[1]
}}else{if(info.safari||info.msafari){ver=parseFloat(u.match(/Safari\/([0-9.]+)/)[1]);
if(ver==100){ver=1.1
}else{if(u.match(/Version\/([0-9.]+)/)){ver=RegExp.$1
}else{ver=[1,1.2,-1,1.3,2,3][Math.floor(ver/100)]
}}}else{if(info.mopera){ver=u.match(/(?:Opera\sMini)\/([0-9.]+)/)[1]
}else{if(info.firefox||info.opera||info.omniweb){ver=u.match(/(?:Firefox|Opera|OmniWeb)\/([0-9.]+)/)[1]
}else{if(info.mozilla){ver=u.match(/rv:([0-9.]+)/)[1]
}else{if(info.icab){ver=u.match(/iCab[ \/]([0-9.]+)/)[1]
}else{if(info.chrome){ver=u.match(/Chrome[ \/]([0-9.]+)/)[1]
}}}}}}}info.version=parseFloat(ver);
info.nativeVersion=parseFloat(nativeVersion);
if(isNaN(info.version)){info.version=-1
}}catch(e){info.version=-1
}this.navigator=function(){return info
};
return info
};
jindo.$Agent.prototype.os=function(){var info={};
var u=this._navigator.userAgent;
var p=this._navigator.platform;
var f=function(s,h){return(h.indexOf(s)>-1)
};
info.getName=function(){var name="";
for(x in info){if(info[x]===true&&info.hasOwnProperty(x)){name=x
}}return name
};
info.win=f("Win",p);
info.mac=f("Mac",p);
info.linux=f("Linux",p);
info.win2000=info.win&&(f("NT 5.0",u)||f("2000",u));
info.winxp=info.win&&f("NT 5.1",u);
info.xpsp2=info.winxp&&f("SV1",u);
info.vista=info.win&&f("NT 6.0",u);
info.win7=info.win&&f("NT 6.1",u);
info.ipad=f("iPad",u);
info.iphone=f("iPhone",u)&&!info.ipad;
info.android=f("Android",u);
info.nokia=f("Nokia",u);
info.webos=f("webOS",u);
info.blackberry=f("BlackBerry",u);
info.mwin=f("PPC",u)||f("Smartphone",u)||f("IEMobile",u);
this.os=function(){return info
};
return info
};
jindo.$Agent.prototype.flash=function(){var info={};
var p=this._navigator.plugins;
var m=this._navigator.mimeTypes;
var f=null;
info.installed=false;
info.version=-1;
if(!jindo.$Jindo.isUndefined(p)&&p.length){f=p["Shockwave Flash"];
if(f){info.installed=true;
if(f.description){info.version=parseFloat(f.description.match(/[0-9.]+/)[0],10)
}}if(p["Shockwave Flash 2.0"]){info.installed=true;
info.version=2
}}else{if(!jindo.$Jindo.isUndefined(m)&&m.length){f=m["application/x-shockwave-flash"];
info.installed=(f&&f.enabledPlugin)
}else{try{info.version=parseFloat(new ActiveXObject("ShockwaveFlash.ShockwaveFlash").GetVariable("$version").match(/(.\d?),/)[1],10);
info.installed=true
}catch(e){}}}this.flash=function(){return info
};
this.info=this.flash;
return info
};
jindo.$Agent.prototype.silverlight=function(){var info=new Object;
var p=this._navigator.plugins;
var s=null;
info.installed=false;
info.version=-1;
if(!jindo.$Jindo.isUndefined(p)&&p.length){s=p["Silverlight Plug-In"];
if(s){info.installed=true;
info.version=parseInt(s.description.split(".")[0],10);
if(s.description=="1.0.30226.2"){info.version=2
}}}else{try{s=new ActiveXObject("AgControl.AgControl");
info.installed=true;
if(s.isVersionSupported("3.0")){info.version=3
}else{if(s.isVersionSupported("2.0")){info.version=2
}else{if(s.isVersionSupported("1.0")){info.version=1
}}}}catch(e){}}this.silverlight=function(){return info
};
return info
};
jindo.$A=function(array){var cl=arguments.callee;
if(array instanceof cl){return array
}if(!(this instanceof cl)){try{jindo.$Jindo._maxWarn(arguments.length,1,"$A");
return new cl(array)
}catch(e){if(e instanceof TypeError){return null
}throw e
}}var oArgs=jindo.$Jindo.checkVarType(arguments,{"4voi":[],"4arr":["aPram:Array+"],"4nul":["oNull:Null"],"4und":["oUndefined:Undefined"],arrt:["aPram:ArrayStyle"]},"$A");
if(oArgs==null){array=[]
}switch(oArgs+""){case"arrt":case"4arr":array=oArgs.aPram;
break;
case"4nul":case"4und":case"4voi":array=[]
}this._array=[];
for(var i=0;
i<array.length;
i++){this._array[this._array.length]=array[i]
}};
jindo.$A.checkVarTypeObj={"4fun":["fCallback:Function+"],"4thi":["fCallback:Function+","oThis:Variant"]};
jindo.$A.prototype.toString=function(){return this._array.toString()
};
jindo.$A.prototype.get=function(nIndex){jindo.$Jindo.checkVarType(arguments,{"4num":["nIndex:Numeric"]},"$A#get");
return this._array[nIndex]
};
jindo.$A.prototype.set=function(nIndex,vValue){jindo.$Jindo.checkVarType(arguments,{"4num":["nIndex:Numeric","vValue:Variant"]},"$A#set");
this._array[nIndex]=vValue;
return this
};
jindo.$A.prototype.length=function(nLen,oValue){var oArgs=jindo.$Jindo.checkVarType(arguments,{"4num":[jindo.$Jindo._F("nLen:Numeric")],sv:["nLen:Numeric","vValue:Variant"],"4voi":[]},"$A#length");
switch(oArgs+""){case"4num":this._array.length=oArgs.nLen;
return this;
case"sv":var l=this._array.length;
this._array.length=oArgs.nLen;
for(var i=l;
i<nLen;
i++){this._array[i]=oArgs.vValue
}return this;
case"4voi":return this._array.length
}};
jindo.$A.prototype.has=function(oValue){return(this.indexOf(oValue)>-1)
};
jindo.$A.prototype.indexOf=function(oValue){if(this._array.indexOf){jindo.$A.prototype.indexOf=function(oValue){return this._array.indexOf(oValue)
}
}else{jindo.$A.prototype.indexOf=function(oValue){for(var i=0;
i<this._array.length;
i++){if(this._array[i]==oValue){return i
}}return -1
}
}return this.indexOf(oValue)
};
jindo.$A.prototype.$value=function(){return this._array
};
jindo.$A.prototype.push=function(oValue1){return this._array.push.apply(this._array,_toArray(arguments))
};
jindo.$A.prototype.pop=function(){return this._array.pop()
};
jindo.$A.prototype.shift=function(){return this._array.shift()
};
jindo.$A.prototype.unshift=function(oValue1){this._array.unshift.apply(this._array,_toArray(arguments));
return this._array.length
};
jindo.$A.prototype.forEach=function(fCallback,oThis){function forEachBody(fpEach){return function(fCallback,oThis){var oArgs=jindo.$Jindo.checkVarType(arguments,jindo.$A.checkVarTypeObj,"$A#forEach");
var that=this;
function f(v,i,a){try{fCallback.apply(oThis||that,_slice.call(arguments))
}catch(e){if(!(e instanceof that.constructor.Continue)){throw e
}}}fpEach(this,f);
return this
}
}if(this._array.forEach){jindo.$A.prototype.forEach=forEachBody(function(scope,fp){try{scope._array.forEach(fp)
}catch(e){if(!(e instanceof scope.constructor.Break)){throw e
}}})
}else{jindo.$A.prototype.forEach=forEachBody(function(scope,fp){var arr=scope._array;
for(var i=0,l=arr.length;
i<l;
i++){try{fp(arr[i],i,arr)
}catch(e){if(e instanceof scope.constructor.Break){break
}throw e
}}})
}return this.forEach.apply(this,_slice.call(arguments))
};
jindo.$A.prototype.slice=function(nStart,nEnd){var a=this._array.slice.call(this._array,nStart,nEnd);
return jindo.$A(a)
};
jindo.$A.prototype.splice=function(nIndex,nHowMany){var a=this._array.splice.apply(this._array,_toArray(arguments));
return jindo.$A(a)
};
jindo.$A.prototype.shuffle=function(){this._array.sort(function(a,b){return Math.random()>Math.random()?1:-1
});
return this
};
jindo.$A.prototype.reverse=function(){this._array.reverse();
return this
};
jindo.$A.prototype.empty=function(){this._array.length=0;
return this
};
jindo.$A.Break=jindo.$Jindo.Break;
jindo.$A.Continue=jindo.$Jindo.Continue;
jindo.$A.prototype.map=function(fCallback,oThis){function mapBody(fpEach){return function(fCallback,oThis){var oArgs=jindo.$Jindo.checkVarType(arguments,jindo.$A.checkVarTypeObj,"$A#map");
if(oArgs==null){return this
}var returnArr=[];
var that=this;
function f(v,i,a){try{returnArr.push(fCallback.apply(oThis||that,_toArray(arguments)))
}catch(e){if(e instanceof that.constructor.Continue){returnArr.push(v)
}else{throw e
}}}fpEach(this,f);
return jindo.$A(returnArr)
}
}if(this._array.map){jindo.$A.prototype.map=mapBody(function(scope,fp){scope.forEach(fp)
})
}else{jindo.$A.prototype.map=mapBody(function(scope,fp){var arr=scope._array;
for(var i=0,l=scope._array.length;
i<l;
i++){try{fp(arr[i],i,arr)
}catch(e){if(e instanceof scope.constructor.Break){break
}else{throw e
}}}})
}return this.map.apply(this,_toArray(arguments))
};
jindo.$A.prototype.filter=function(fCallback,oThis){function filterBody(fpEach){return function(fCallback,oThis){var oArgs=jindo.$Jindo.checkVarType(arguments,jindo.$A.checkVarTypeObj,"$A#filter");
if(oArgs==null){return this
}var returnArr=[];
var that=this;
function f(v,i,a){try{if(fCallback.apply(oThis||that,_toArray(arguments))){returnArr.push(v)
}}catch(e){if(!(e instanceof that.constructor.Continue)){throw e
}}}fpEach(this,f);
return jindo.$A(returnArr)
}
}if(this._array.filter){jindo.$A.prototype.filter=filterBody(function(scope,fp){try{scope.forEach(fp)
}catch(e){if(!(e instanceof scope.constructor.Break)){throw e
}}})
}else{jindo.$A.prototype.filter=filterBody(function(scope,fp){var arr=scope._array;
for(var i=0,l=scope._array.length;
i<l;
i++){try{fp(arr[i],i,arr)
}catch(e){if(e instanceof scope.constructor.Break){break
}else{throw e
}}}})
}return this.filter.apply(this,_toArray(arguments))
};
jindo.$A.prototype.every=function(fCallback,oThis){var ___checkVarType=jindo.$Jindo.checkVarType;
var ___checkObj=jindo.$A.checkVarTypeObj;
if(this._array.every){jindo.$A.prototype.every=function(fCallback,oThis){___checkVarType(arguments,___checkObj,"$A#every");
return this._array.every(fCallback,oThis||this)
}
}else{jindo.$A.prototype.every=function(fCallback,oThis){___checkVarType(arguments,___checkObj,"$A#every");
var result=true;
var arr=this._array;
for(var i=0,l=arr.length;
i<l;
i++){if(fCallback.call(oThis||this,arr[i],i,arr)===false){result=false;
break
}}return result
}
}return this.every.apply(this,_toArray(arguments))
};
jindo.$A.prototype.some=function(fCallback,oThis){var ___checkVarType=jindo.$Jindo.checkVarType;
var ___checkObj=jindo.$A.checkVarTypeObj;
if(this._array.some){jindo.$A.prototype.some=function(fCallback,oThis){___checkVarType(arguments,___checkObj,"$A#some");
return this._array.some(fCallback,oThis||this)
}
}else{jindo.$A.prototype.some=function(fCallback,oThis){___checkVarType(arguments,___checkObj,"$A#some");
var result=false;
var arr=this._array;
for(var i=0,l=arr.length;
i<l;
i++){if(fCallback.call(oThis||this,arr[i],i,arr)===true){result=true;
break
}}return result
}
}return this.some.apply(this,_toArray(arguments))
};
jindo.$A.prototype.refuse=function(oValue1){var a=jindo.$A(_slice.apply(arguments));
return this.filter(function(v,i){return !(a.indexOf(v)>-1)
})
};
jindo.$A.prototype.unique=function(){var a=this._array,b=[],l=a.length;
var i,j;
for(i=0;
i<l;
i++){for(j=0;
j<b.length;
j++){if(a[i]==b[j]){break
}}if(j>=b.length){b[j]=a[i]
}}this._array=b;
return this
};
jindo.$Ajax=function(url,option){var cl=arguments.callee;
if(!(this instanceof cl)){try{jindo.$Jindo._maxWarn(arguments.length,2,"$Ajax");
return new cl(url,option||{})
}catch(e){if(e instanceof TypeError){return null
}throw e
}}var ___ajax=jindo.$Ajax;
var ___error=jindo.$Error;
var ___except=jindo.$Except;
var oArgs=jindo.$Jindo.checkVarType(arguments,{"4str":["sURL:String+"],"4obj":["sURL:String+","oOption:Hash+"]},"$Ajax");
if(oArgs+""=="for_string"){oArgs.oOption={}
}function _getXHR(){if(window.XMLHttpRequest){return new XMLHttpRequest()
}else{if(ActiveXObject){try{return new ActiveXObject("MSXML2.XMLHTTP")
}catch(e){return new ActiveXObject("Microsoft.XMLHTTP")
}return null
}}}var loc=location.toString();
var domain="";
try{domain=loc.match(/^https?:\/\/([a-z0-9_\-\.]+)/i)[1]
}catch(e){}this._status=0;
this._url=oArgs.sURL;
this._headers={};
this._options={type:"xhr",method:"post",proxy:"",timeout:0,onload:function(req){},onerror:null,ontimeout:function(req){},jsonp_charset:"utf-8",callbackid:"",callbackname:"",sendheader:true,async:true,decode:true,postBody:false};
this._options=___ajax._setProperties(oArgs.oOption,this);
___ajax._validationOption(this._options,"$Ajax");
if(___ajax.CONFIG){this.option(___ajax.CONFIG)
}var _opt=this._options;
_opt.type=_opt.type.toLowerCase();
_opt.method=_opt.method.toLowerCase();
if(window.__jindo2_callback===undefined){window.__jindo2_callback=[]
}var t=this;
switch(_opt.type){case"put":case"delete":case"get":case"post":_opt.method=_opt.type;
case"xhr":this._request=_getXHR();
break;
case"flash":if(!___ajax.SWFRequest){throw new ___error("jindo.$Ajax.SWFRequest"+___except.REQUIRE_AJAX,"$Ajax")
}this._request=new ___ajax.SWFRequest(function(name,value){return t.option.apply(t,arguments)
});
break;
case"jsonp":if(!___ajax.JSONPRequest){throw new ___error("jindo.$Ajax.JSONPRequest"+___except.REQUIRE_AJAX,"$Ajax")
}this._request=new ___ajax.JSONPRequest(function(name,value){return t.option.apply(t,arguments)
});
break;
case"iframe":if(!___ajax.FrameRequest){throw new ___error("jindo.$Ajax.FrameRequest"+___except.REQUIRE_AJAX,"$Ajax")
}this._request=new ___ajax.FrameRequest(function(name,value){return t.option.apply(t,arguments)
})
}};
jindo.$Ajax._setProperties=function(option,context){option=option||{};
var type;
type=option.type=option.type||"xhr";
option.onload=jindo.$Fn(option.onload||function(){},context).bind();
option.method=option.method||"post";
if(type!="iframe"){option.timeout=option.timeout||0;
option.ontimeout=jindo.$Fn(option.ontimeout||function(){},context).bind();
option.onerror=jindo.$Fn(option.onerror||function(){},context).bind()
}if(type=="xhr"){option.async=option.async===undefined?true:option.async;
option.postBody=option.postBody===undefined?false:option.postBody
}else{if(type=="jsonp"){option.method="get";
option.jsonp_charset=option.jsonp_charset||"utf-8";
option.callbackid=option.callbackid||"";
option.callbackname=option.callbackname||""
}else{if(type=="flash"){option.sendheader=option.sendheader===undefined?true:option.sendheader;
option.decode=option.decode===undefined?true:option.decode
}else{if(type=="iframe"){option.proxy=option.proxy||""
}}}}return option
};
jindo.$Ajax._validationOption=function(oOption,sMethod){var ___except=jindo.$Except;
var sType=oOption.type;
if(sType==="jsonp"){if(oOption.method!=="get"){jindo.$Jindo._warn(___except.CANNOT_USE_OPTION+"\n\t"+sMethod+"-method="+oOption.method)
}}else{if(sType==="flash"){if(!(oOption.method==="get"||oOption.method==="post")){jindo.$Jindo._warn(___except.CANNOT_USE_OPTION+"\n\t"+sMethod+"-method="+oOption.method)
}}}if(oOption.postBody){if(!(sType==="xhr"&&(oOption.method!=="get"))){jindo.$Jindo._warn(___except.CANNOT_USE_OPTION+"\n\t"+oOption.method+"-postBody="+oOption.postBody)
}}var oTypeProperty={xhr:"onload|timeout|ontimeout|onerror|async|method|postBody|type",jsonp:"onload|timeout|ontimeout|onerror|jsonp_charset|callbackid|callbackname|method|type",flash:"onload|timeout|ontimeout|onerror|sendheader|decode|method|type",iframe:"onload|proxy|method|type"};
var aName=[];
var i=0;
for(aName[i++] in oOption){}var sProperty=oTypeProperty[sType];
for(var i=0,l=aName.length;
i<l;
i++){if(sProperty.indexOf(aName[i])==-1){jindo.$Jindo._warn(___except.CANNOT_USE_OPTION+"\n\t"+sType+"-"+aName[i])
}}};
jindo.$Ajax.prototype._onload=(function(isIE){var ___ajax=jindo.$Ajax;
var ___jindo=jindo.$Jindo;
if(isIE){return function(){var status=this._request.status;
var bSuccess=this._request.readyState==4&&(status==200||status==0);
var oResult;
if(this._request.readyState==4){try{if((!bSuccess)&&___jindo.isFunction(this._options.onerror)){this._options.onerror(new ___ajax.Response(this._request))
}else{if(!this._is_abort){oResult=this._options.onload(new ___ajax.Response(this._request))
}}}finally{if(___jindo.isFunction(this._oncompleted)){this._oncompleted(bSuccess,oResult)
}if(this._options.type=="xhr"){this.abort();
try{delete this._request.onload
}catch(e){this._request.onload=undefined
}}delete this._request.onreadystatechange
}}}
}else{return function(){var status=this._request.status;
var bSuccess=this._request.readyState==4&&(status==200||status==0);
var oResult;
if(this._request.readyState==4){try{if((!bSuccess)&&___jindo.isFunction(this._options.onerror)){this._options.onerror(new ___ajax.Response(this._request))
}else{oResult=this._options.onload(new ___ajax.Response(this._request))
}}finally{this._status--;
if(___jindo.isFunction(this._oncompleted)){this._oncompleted(bSuccess,oResult)
}}}}
}})(_JINDO_IS_IE);
jindo.$Ajax.prototype.request=function(oData){var ___jindo=jindo.$Jindo;
var oArgs=___jindo.checkVarType(arguments,{"4voi":[],"4obj":[___jindo._F("oData:Hash+")],"4str":["sData:String+"]},"$Ajax#request");
this._status++;
var t=this;
var req=this._request;
var opt=this._options;
var data,v,a=[],data="";
var _timer=null;
var url=this._url;
this._is_abort=false;
var sUpType=opt.type.toUpperCase();
var sUpMethod=opt.method.toUpperCase();
if(opt.postBody&&sUpType=="XHR"&&sUpMethod!="GET"){if(oArgs+""=="4str"){data=oArgs.sData
}else{if(oArgs+""=="4obj"){data=jindo.$Json(oArgs.oData).toString()
}else{data=null
}}}else{switch(oArgs+""){case"4voi":data=null;
break;
case"4obj":var oData=oArgs.oData;
for(var k in oData){if(oData.hasOwnProperty(k)){v=oData[k];
if(___jindo.isFunction(v)){v=v()
}if(___jindo.isArray(v)||(jindo.$A&&v instanceof jindo.$A)){if(v instanceof jindo.$A){v=v._array
}for(var i=0;
i<v.length;
i++){a[a.length]=k+"="+encodeURIComponent(v[i])
}}else{a[a.length]=k+"="+encodeURIComponent(v)
}}}data=a.join("&")
}}if(data&&sUpType=="XHR"&&sUpMethod=="GET"){if(url.indexOf("?")==-1){url+="?"
}else{url+="&"
}url+=data;
data=null
}if(sUpType=="XHR"&&opt.async){req.open(sUpMethod,url,opt.async)
}else{if(sUpType=="XHR"){req.open(sUpMethod,url,false)
}else{req.open(sUpMethod,url)
}}if(sUpType=="XHR"&&sUpMethod=="GET"&&_JINDO_IS_IE){req.setRequestHeader("If-Modified-Since","Thu, 1 Jan 1970 00:00:00 GMT")
}if(sUpType=="XHR"||sUpType=="IFRAME"||(sUpType=="FLASH"&&opt.sendheader)){if(!this._headers["Content-Type"]){req.setRequestHeader("Content-Type","application/x-www-form-urlencoded; charset=utf-8")
}req.setRequestHeader("charset","utf-8");
if(!this._headers["X-Requested-With"]){req.setRequestHeader("X-Requested-With","XMLHttpRequest")
}for(var x in this._headers){if(this._headers.hasOwnProperty(x)){if(typeof this._headers[x]=="function"){continue
}req.setRequestHeader(x,String(this._headers[x]))
}}}if(req.addEventListener&&!_JINDO_IS_OP&&!_JINDO_IS_IE){if(this._loadFunc){req.removeEventListener("load",this._loadFunc,false)
}this._loadFunc=function(rq){clearTimeout(_timer);
_timer=undefined;
t._onload(rq)
};
req.addEventListener("load",this._loadFunc,false)
}else{if(req.onload!==undefined){req.onload=function(rq){if(req.readyState==4&&!t._is_abort){clearTimeout(_timer);
_timer=undefined;
t._onload(rq)
}}
}else{if(_j_ag.match(/(?:MSIE) ([0-9.]+)/)[1]==6&&opt.async){var onreadystatechange=function(rq){if(req.readyState==4&&!t._is_abort){if(_timer){clearTimeout(_timer);
_timer=undefined
}t._onload(rq);
clearInterval(t._interval);
t._interval=undefined
}};
this._interval=setInterval(onreadystatechange,300)
}else{req.onreadystatechange=function(rq){if(req.readyState==4){clearTimeout(_timer);
_timer=undefined;
t._onload(rq)
}}
}}}if(opt.timeout>0){if(this._timer){clearTimeout(this._timer)
}_timer=setTimeout(function(){t._is_abort=true;
if(t._interval){clearInterval(t._interval);
t._interval=undefined
}try{req.abort()
}catch(e){}opt.ontimeout(req);
if(___jindo.isFunction(t._oncompleted)){t._oncompleted(false)
}},opt.timeout*1000);
this._timer=_timer
}this._test_url=url;
req.send(data);
return this
};
jindo.$Ajax.prototype.isIdle=function(){return this._status==0
};
jindo.$Ajax.prototype.abort=function(){try{if(this._interval){clearInterval(this._interval)
}if(this._timer){clearTimeout(this._timer)
}this._interval=undefined;
this._timer=undefined;
this._is_abort=true;
this._request.abort()
}finally{this._status--
}return this
};
jindo.$Ajax.prototype.url=function(sURL){var oArgs=jindo.$Jindo.checkVarType(arguments,{g:[],s:["sURL:String+"]},"$Ajax#url");
switch(oArgs+""){case"g":return this._url;
case"s":this._url=oArgs.sURL;
return this
}};
jindo.$Ajax.prototype.option=function(name,value){var oArgs=jindo.$Jindo.checkVarType(arguments,{s4var:["sKey:String+","vValue:Variant"],s4obj:["oOption:Hash+"],g:["sKey:String+"]},"$Ajax#option");
switch(oArgs+""){case"s4var":oArgs.oOption={};
oArgs.oOption[oArgs.sKey]=oArgs.vValue;
case"s4obj":var oOption=oArgs.oOption;
try{for(var x in oOption){if(oOption.hasOwnProperty(x)){if(x==="onload"||x==="ontimeout"||x==="onerror"){this._options[x]=jindo.$Fn(oOption[x],this).bind()
}else{this._options[x]=oOption[x]
}}}}catch(e){}break;
case"g":return this._options[oArgs.sKey]
}jindo.$Ajax._validationOption(this._options,"$Ajax#option");
return this
};
jindo.$Ajax.prototype.header=function(name,value){if(this._options.type==="jsonp"){jindo.$Jindo._warn("")
}var oArgs=jindo.$Jindo.checkVarType(arguments,{s4str:["sKey:String+","sValue:String+"],s4obj:["oOption:Hash+"],g:["sKey:String+"]},"$Ajax#option");
switch(oArgs+""){case"s4str":this._headers[oArgs.sKey]=oArgs.sValue;
break;
case"s4obj":var oOption=oArgs.oOption;
try{for(var x in oOption){if(oOption.hasOwnProperty(x)){this._headers[x]=oOption[x]
}}}catch(e){}break;
case"g":return this._headers[oArgs.sKey]
}return this
};
jindo.$Ajax.Response=function(req){this._response=req;
this._regSheild=/^for\(;;\);/
};
jindo.$Ajax.Response.prototype.xml=function(){return this._response.responseXML
};
jindo.$Ajax.Response.prototype.text=function(){return this._response.responseText.replace(this._regSheild,"")
};
jindo.$Ajax.Response.prototype.status=function(){var status=this._response.status;
return status==0?200:status
};
jindo.$Ajax.Response.prototype.readyState=function(){return this._response.readyState
};
jindo.$Ajax.Response.prototype.json=function(){if(this._response.responseJSON){return this._response.responseJSON
}else{if(this._response.responseText){try{return eval("("+this.text()+")")
}catch(e){throw new jindo.$Error(jindo.$Except.PARSE_ERROR,"$Ajax#json")
}}}return{}
};
jindo.$Ajax.Response.prototype.header=function(name){var oArgs=jindo.$Jindo.checkVarType(arguments,{"4str":["name:String+"],"4voi":[]},"$Ajax.Response#header");
switch(oArgs+""){case"4str":return this._response.getResponseHeader(name);
case"4voi":return this._response.getAllResponseHeaders()
}};
jindo.$Ajax.RequestBase=jindo.$Class({_respHeaderString:"",callbackid:"",callbackname:"",responseXML:null,responseJSON:null,responseText:"",status:404,readyState:0,$init:function(fpOption){},onload:function(){},abort:function(){},open:function(){},send:function(){},setRequestHeader:function(sName,sValue){jindo.$Jindo.checkVarType(arguments,{"4str":["sName:String+","sValue:String+"]},"$Ajax.RequestBase#setRequestHeader");
this._headers[sName]=sValue
},getResponseHeader:function(sName){jindo.$Jindo.checkVarType(arguments,{"4str":["sName:String+"]},"$Ajax.RequestBase#getResponseHeader");
return this._respHeaders[sName]||""
},getAllResponseHeaders:function(){return this._respHeaderString
},_getCallbackInfo:function(){var id="";
if(this.option("callbackid")!=""){var idx=0;
do{id="_"+this.option("callbackid")+"_"+idx;
idx++
}while(window.__jindo2_callback[id])
}else{do{id="_"+Math.floor(Math.random()*10000)
}while(window.__jindo2_callback[id])
}if(this.option("callbackname")==""){this.option("callbackname","_callback")
}return{callbackname:this.option("callbackname"),id:id,name:"window.__jindo2_callback."+id}
}});
jindo.$Ajax.JSONPRequest=jindo.$Class({_headers:{},_respHeaders:{},_script:null,_onerror:null,$init:function(fpOption){this.option=fpOption
},_callback:function(data){if(this._onerror){clearTimeout(this._onerror);
this._onerror=null
}var self=this;
this.responseJSON=data;
this.onload(this);
setTimeout(function(){self.abort()
},10)
},abort:function(){if(this._script){try{this._script.parentNode.removeChild(this._script)
}catch(e){}}},open:function(method,url){jindo.$Jindo.checkVarType(arguments,{"4str":["method:String+","url:String+"]},"$Ajax.JSONPRequest#open");
this.responseJSON=null;
this._url=url
},send:function(data){var oArgs=jindo.$Jindo.checkVarType(arguments,{"4voi":[],"4nul":["data:Null"],"4str":["data:String+"]},"$Ajax.JSONPRequest#send");
var t=this;
var info=this._getCallbackInfo();
var head=document.getElementsByTagName("head")[0];
this._script=document.createElement("script");
this._script.type="text/javascript";
this._script.charset=this.option("jsonp_charset");
if(head){head.appendChild(this._script)
}else{if(document.body){document.body.appendChild(this._script)
}}window.__jindo2_callback[info.id]=function(data){try{t.readyState=4;
t.status=200;
t._callback(data)
}finally{delete window.__jindo2_callback[info.id]
}};
var agent=jindo.$Agent(navigator);
var _loadCallback=function(){if(!t.responseJSON){t.readyState=4;
t.status=404;
t._onerror=setTimeout(function(){t._callback(null)
},200)
}};
if(agent.navigator().ie||agent.navigator().opera){this._script.onreadystatechange=function(){if(this.readyState=="loaded"){_loadCallback();
this.onreadystatechange=null
}}
}else{this._script.onload=this._script.onerror=function(){_loadCallback();
this.onerror=null;
this.onload=null
}
}var delimiter="&";
if(this._url.indexOf("?")==-1){delimiter="?"
}switch(oArgs+""){case"4voi":case"4nul":data="";
break;
case"4str":data="&"+data
}this._test_url=this._script.src=this._url+delimiter+info.callbackname+"="+info.name+data
}}).extend(jindo.$Ajax.RequestBase);
jindo.$Ajax.SWFRequest=jindo.$Class({$init:function(fpOption){this.option=fpOption
},_headers:{},_respHeaders:{},_getFlashObj:function(){var _tmpId=jindo.$Ajax.SWFRequest._tmpId;
var navi=jindo.$Agent(window.navigator).navigator();
var obj;
if(navi.ie&&navi.version==9){obj=jindo._getElementById(document,_tmpId)
}else{obj=window.document[_tmpId]
}return(this._getFlashObj=function(){return obj
})()
},_callback:function(status,data,headers){this.readyState=4;
if(jindo.$Jindo.isNumeric(status)){this.status=status
}else{if(status==true){this.status=200
}}if(this.status==200){if(jindo.$Jindo.isString(data)){try{this.responseText=this.option("decode")?decodeURIComponent(data):data;
if(!this.responseText||this.responseText==""){this.responseText=data
}}catch(e){if(e.name=="URIError"){this.responseText=data;
if(!this.responseText||this.responseText==""){this.responseText=data
}}}}if(jindo.$Jindo.isHash(headers)){this._respHeaders=headers
}}this.onload(this)
},open:function(method,url){jindo.$Jindo.checkVarType(arguments,{"4str":["method:String+","url:String+"]},"$Ajax.SWFRequest#open");
var re=/https?:\/\/([a-z0-9_\-\.]+)/i;
this._url=url;
this._method=method
},send:function(data){var _jjindo=jindo.$Jindo;
var oArgs=_jjindo.checkVarType(arguments,{"4voi":[],"4nul":["data:Null"],"4str":["data:String+"]},"$Ajax.SWFRequest#send");
this.responseXML=false;
this.responseText="";
var t=this;
var dat={};
var info=this._getCallbackInfo();
var swf=this._getFlashObj();
function f(arg){switch(typeof arg){case"string":return'"'+arg.replace(/\"/g,'\\"')+'"';
case"number":return arg;
case"object":var ret="",arr=[];
if(_jjindo.isArray(arg)){for(var i=0;
i<arg.length;
i++){arr[i]=f(arg[i])
}ret="["+arr.join(",")+"]"
}else{for(var x in arg){if(arg.hasOwnProperty(x)){arr[arr.length]=f(x)+":"+f(arg[x])
}}ret="{"+arr.join(",")+"}"
}return ret;
default:return'""'
}}data=(data||"").split("&");
var oEach;
for(var i=0;
i<data.length;
i++){oEach=data[i];
pos=oEach.indexOf("=");
key=oEach.substring(0,pos);
val=oEach.substring(pos+1);
dat[key]=decodeURIComponent(val)
}this._current_callback_id=info.id;
window.__jindo2_callback[info.id]=function(success,data){try{t._callback(success,data)
}finally{delete window.__jindo2_callback[info.id]
}};
var oData={url:this._url,type:this._method,data:dat,charset:"UTF-8",callback:info.name,header_json:this._headers};
swf.requestViaFlash(f(oData))
},abort:function(){if(this._current_callback_id){window.__jindo2_callback[this._current_callback_id]=function(){delete window.__jindo2_callback[info.id]
}
}}}).extend(jindo.$Ajax.RequestBase);
jindo.$Ajax.SWFRequest.write=function(swf_path){var oArgs=jindo.$Jindo.checkVarType(arguments,{"4voi":[],"4str":["data:String+"]},"<static> $Ajax.SWFRequest#write");
switch(oArgs+""){case"4voi":swf_path="./ajax.swf"
}var ajax=jindo.$Ajax;
ajax.SWFRequest._tmpId="tmpSwf"+(new Date()).getMilliseconds()+Math.floor(Math.random()*100000);
var activeCallback="jindo.$Ajax.SWFRequest.loaded";
var protocol=(location.protocol=="https:")?"https:":"http:";
ajax._checkFlashLoad();
document.write('<div style="position:absolute;top:-1000px;left:-1000px"><object id="'+ajax.SWFRequest._tmpId+'" width="1" height="1" classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" codebase="'+protocol+'//download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,0,0"><param name="movie" value="'+swf_path+'"><param name = "FlashVars" value = "activeCallback='+activeCallback+'" /><param name = "allowScriptAccess" value = "always" /><embed name="'+ajax.SWFRequest._tmpId+'" src="'+swf_path+'" type="application/x-shockwave-flash" pluginspage="'+protocol+'://www.macromedia.com/go/getflashplayer" width="1" height="1" allowScriptAccess="always" swLiveConnect="true" FlashVars="activeCallback='+activeCallback+'"></embed></object></div>')
};
jindo.$Ajax._checkFlashLoad=function(){jindo.$Ajax._checkFlashKey=setTimeout(function(){jindo.$Ajax.SWFRequest.onerror()
},5000);
jindo.$Ajax._checkFlashLoad=function(){}
};
jindo.$Ajax.SWFRequest.activeFlash=false;
jindo.$Ajax.SWFRequest.onload=function(){};
jindo.$Ajax.SWFRequest.onerror=function(){};
jindo.$Ajax.SWFRequest.loaded=function(){clearTimeout(jindo.$Ajax._checkFlashKey);
jindo.$Ajax.SWFRequest.activeFlash=true;
jindo.$Ajax.SWFRequest.onload()
};
jindo.$Ajax.FrameRequest=jindo.$Class({_headers:{},_respHeaders:{},_frame:null,_domain:"",$init:function(fpOption){this.option=fpOption
},_callback:function(id,data,header){var self=this;
this.readyState=4;
this.status=200;
this.responseText=data;
this._respHeaderString=header;
header.replace(/^([\w\-]+)\s*:\s*(.+)$/m,function($0,$1,$2){self._respHeaders[$1]=$2
});
this.onload(this);
setTimeout(function(){self.abort()
},10)
},abort:function(){if(this._frame){try{this._frame.parentNode.removeChild(this._frame)
}catch(e){}}},open:function(method,url){jindo.$Jindo.checkVarType(arguments,{"4str":["method:String+","url:String+"]},"$Ajax.FrameRequest#open");
var re=/https?:\/\/([a-z0-9_\-\.]+)/i;
var dom=document.location.toString().match(re);
this._method=method;
this._url=url;
this._remote=String(url).match(/(https?:\/\/[a-z0-9_\-\.]+)(:[0-9]+)?/i)[0];
this._frame=null;
this._domain=(dom[1]!=document.domain)?document.domain:""
},send:function(data){var oArgs=jindo.$Jindo.checkVarType(arguments,{"4voi":[],"4nul":["data:Null"],"4str":["data:String+"]},"$Ajax.FrameRequest#send");
this.responseXML="";
this.responseText="";
var t=this;
var re=/https?:\/\/([a-z0-9_\-\.]+)/i;
var info=this._getCallbackInfo();
var url;
var _aStr=[];
_aStr.push(this._remote+"/ajax_remote_callback.html?method="+this._method);
var header=[];
window.__jindo2_callback[info.id]=function(id,data,header){try{t._callback(id,data,header)
}finally{delete window.__jindo2_callback[info.id]
}};
for(var x in this._headers){if(this._headers.hasOwnProperty(x)){header[header.length]="'"+x+"':'"+this._headers[x]+"'"
}}header="{"+header.join(",")+"}";
_aStr.push("&id="+info.id);
_aStr.push("&header="+encodeURIComponent(header));
_aStr.push("&proxy="+encodeURIComponent(this.option("proxy")));
_aStr.push("&domain="+this._domain);
_aStr.push("&url="+encodeURIComponent(this._url.replace(re,"")));
_aStr.push("#"+encodeURIComponent(data));
var fr=this._frame=document.createElement("iframe");
var style=fr.style;
style.position="absolute";
style.visibility="hidden";
style.width="1px";
style.height="1px";
var body=document.body||document.documentElement;
if(body.firstChild){body.insertBefore(fr,body.firstChild)
}else{body.appendChild(fr)
}fr.src=_aStr.join("")
}}).extend(jindo.$Ajax.RequestBase);
jindo.$Ajax.Queue=function(option){var cl=arguments.callee;
if(!(this instanceof cl)){return new cl(option||{})
}var oArgs=jindo.$Jindo.checkVarType(arguments,{"4voi":[],"4obj":["option:Hash+"]},"$Ajax.Queue");
option=oArgs.option;
this._options={async:false,useResultAsParam:false,stopOnFailure:false};
this.option(option);
this._queue=[]
};
jindo.$Ajax.Queue.prototype.option=function(name,value){var oArgs=jindo.$Jindo.checkVarType(arguments,{s4str:["sKey:String+","sValue:Variant"],s4obj:["oOption:Hash+"],g:["sKey:String+"]},"$Ajax.Queue#option");
switch(oArgs+""){case"s4str":this._options[oArgs.sKey]=oArgs.sValue;
break;
case"s4obj":var oOption=oArgs.oOption;
try{for(var x in oOption){if(oOption.hasOwnProperty(x)){this._options[x]=oOption[x]
}}}catch(e){}break;
case"g":return this._options[oArgs.sKey]
}return this
};
jindo.$Ajax.Queue.prototype.add=function(oAjax,oParam){var oArgs=jindo.$Jindo.checkVarType(arguments,{"4obj":["oAjax:Hash+"],"4obj2":["oAjax:Hash+","oPram:Hash+"]},"$Ajax.Queue");
switch(oArgs+""){case"4obj2":oParam=oArgs.oPram
}this._queue.push({obj:oAjax,param:oParam});
return this
};
jindo.$Ajax.Queue.prototype.request=function(){this._requestAsync.apply(this,this.option("async")?[]:[0]);
return this
};
jindo.$Ajax.Queue.prototype._requestSync=function(nIdx,oParam){var t=this;
var queue=this._queue;
if(queue.length>nIdx+1){queue[nIdx].obj._oncompleted=function(bSuccess,oResult){if(!t.option("stopOnFailure")||bSuccess){t._requestSync(nIdx+1,oResult)
}}
}var _oParam=queue[nIdx].param||{};
if(this.option("useResultAsParam")&&oParam){try{for(var x in oParam){if(_oParam[x]===undefined&&oParam.hasOwnProperty(x)){_oParam[x]=oParam[x]
}}}catch(e){}}queue[nIdx].obj.request(_oParam)
};
jindo.$Ajax.Queue.prototype._requestAsync=function(){for(var i=0;
i<this._queue.length;
i++){this._queue[i].obj.request(this._queue[i].param||{})
}};
jindo.$H=function(hashObject){var cl=arguments.callee;
if(hashObject instanceof cl){return hashObject
}if(!(this instanceof cl)){try{jindo.$Jindo._maxWarn(arguments.length,1,"$H");
return new cl(hashObject||{})
}catch(e){if(e instanceof TypeError){return null
}throw e
}}var oArgs=jindo.$Jindo.checkVarType(arguments,{"4obj":["oObj:Hash+"],"4vod":[]},"$H");
this._table={};
for(var k in hashObject){if(hashObject.hasOwnProperty(k)){this._table[k]=hashObject[k]
}}};
jindo.$H.prototype.$value=function(){return this._table
};
jindo.$H.prototype.$=function(key,value){var oArgs=jindo.$Jindo.checkVarType(arguments,{s4var:[jindo.$Jindo._F("key:String+"),"value:Variant"],s4var2:["key:Numeric","value:Variant"],g4str:["key:String+"],s4obj:["oObj:Hash+"],g4num:["key:Numeric"]},"$H#$");
switch(oArgs+""){case"s4var":case"s4var2":this._table[key]=value;
return this;
case"s4obj":var obj=oArgs.oObj;
for(var i in obj){this._table[i]=obj[i]
}return this;
default:return this._table[key]
}};
jindo.$H.prototype.length=function(){var i=0;
for(var k in this._table){if(this._table.hasOwnProperty(k)){if(Object.prototype[k]!==undefined&&Object.prototype[k]===this._table[k]){continue
}i++
}}return i
};
jindo.$H.prototype.forEach=function(callback,thisObject){var oArgs=jindo.$Jindo.checkVarType(arguments,{"4fun":["callback:Function+"],"4obj":["callback:Function+","thisObject:Variant"]},"$H#forEach");
var t=this._table;
var h=this.constructor;
for(var k in t){if(t.hasOwnProperty(k)){if(!t.propertyIsEnumerable(k)){continue
}try{callback.call(thisObject||this,t[k],k,t)
}catch(e){if(e instanceof h.Break){break
}if(e instanceof h.Continue){continue
}throw e
}}}return this
};
jindo.$H.prototype.filter=function(callback,thisObject){var oArgs=jindo.$Jindo.checkVarType(arguments,{"4fun":["callback:Function+"],"4obj":["callback:Function+","thisObject:Variant"]},"$H#filter");
var h=jindo.$H();
var t=this._table;
var hCon=this.constructor;
for(var k in t){if(t.hasOwnProperty(k)){if(!t.propertyIsEnumerable(k)){continue
}try{if(callback.call(thisObject||this,t[k],k,t)){h.add(k,t[k])
}}catch(e){if(e instanceof hCon.Break){break
}if(e instanceof hCon.Continue){continue
}throw e
}}}return h
};
jindo.$H.prototype.map=function(callback,thisObject){var oArgs=jindo.$Jindo.checkVarType(arguments,{"4fun":["callback:Function+"],"4obj":["callback:Function+","thisObject:Variant"]},"$H#map");
var h=jindo.$H();
var t=this._table;
var hCon=this.constructor;
for(var k in t){if(t.hasOwnProperty(k)){if(!t.propertyIsEnumerable(k)){continue
}try{h.add(k,callback.call(thisObject||this,t[k],k,t))
}catch(e){if(e instanceof hCon.Break){break
}if(e instanceof hCon.Continue){h.add(k,t[k])
}else{throw e
}}}}return h
};
jindo.$H.prototype.add=function(key,value){var oArgs=jindo.$Jindo.checkVarType(arguments,{"4str":["key:String+","value:Variant"],"4num":["key:Numeric","value:Variant"]},"$H#add");
this._table[key]=value;
return this
};
jindo.$H.prototype.remove=function(key){var oArgs=jindo.$Jindo.checkVarType(arguments,{"4str":["key:String+"],"4num":["key:Numeric"]},"$H#remove");
if(this._table[key]===undefined){return null
}var val=this._table[key];
delete this._table[key];
return val
};
jindo.$H.prototype.search=function(value){var oArgs=jindo.$Jindo.checkVarType(arguments,{"4str":["value:Variant"]},"$H#search");
var result=false;
var t=this._table;
for(var k in t){if(t.hasOwnProperty(k)){if(!t.propertyIsEnumerable(k)){continue
}var v=t[k];
if(v===value){result=k;
break
}}}return result
};
jindo.$H.prototype.hasKey=function(key){var oArgs=jindo.$Jindo.checkVarType(arguments,{"4str":["key:String+"],"4num":["key:Numeric"]},"$H#hasKey");
return this._table[key]!==undefined
};
jindo.$H.prototype.hasValue=function(value){var oArgs=jindo.$Jindo.checkVarType(arguments,{"4str":["value:Variant"]},"$H#hasValue");
return(this.search(value)!==false)
};
jindo.$H.prototype.sort=function(){var o=new Object;
var a=[];
for(var k in this._table){if(this._table.hasOwnProperty(k)){a[a.length]=this._table[k]
}}var k=false;
a.sort();
for(var i=0;
i<a.length;
i++){k=this.search(a[i]);
o[k]=a[i];
delete this._table[k]
}this._table=o;
return this
};
jindo.$H.prototype.ksort=function(){var o=new Object;
var a=this.keys();
a.sort();
for(var i=0;
i<a.length;
i++){o[a[i]]=this._table[a[i]]
}this._table=o;
return this
};
jindo.$H.prototype.keys=function(){var keys=new Array;
for(var k in this._table){if(this._table.hasOwnProperty(k)){keys.push(k)
}}return keys
};
jindo.$H.prototype.values=function(){var values=[];
for(var k in this._table){if(this._table.hasOwnProperty(k)){values[values.length]=this._table[k]
}}return values
};
jindo.$H.prototype.toQueryString=function(){var buf=[],val=null,idx=0;
for(var k in this._table){if(this._table.hasOwnProperty(k)){val=this._table[k];
if(jindo.$Jindo.isArray(val)){for(i=0;
i<val.length;
i++){buf[buf.length]=encodeURIComponent(k)+"[]="+encodeURIComponent(val[i]+"")
}}else{buf[buf.length]=encodeURIComponent(k)+"="+encodeURIComponent(this._table[k]+"")
}}}return buf.join("&")
};
jindo.$H.prototype.empty=function(){this._table={};
return this
};
jindo.$H.Break=jindo.$Jindo.Break;
jindo.$H.Continue=jindo.$Jindo.Continue;
jindo.$Json=function(sObject){var cl=arguments.callee;
if(sObject instanceof cl){return sObject
}if(!(this instanceof cl)){try{jindo.$Jindo._maxWarn(arguments.length,1,"$Json");
return new cl(arguments.length?sObject:{})
}catch(e){if(e instanceof TypeError){return null
}throw e
}}jindo.$Jindo.checkVarType(arguments,{"4var":["oObject:Variant"]},"$Json");
this._object=sObject
};
jindo.$Json._oldMakeJSON=function(sObject,sType){try{if(jindo.$Jindo.isString(sObject)&&/^(?:\s*)[\{\[]/.test(sObject)){sObject=eval("("+sObject+")")
}else{return sObject
}}catch(e){throw new jindo.$Error(jindo.$Except.PARSE_ERROR,sType)
}return sObject
};
jindo.$Json.fromXML=function(sXML){var ___jindo=jindo.$Jindo;
var oArgs=___jindo.checkVarType(arguments,{"4str":["sXML:String+"]},"<static> $Json#fromXML");
var o={};
var re=/\s*<(\/?[\w:\-]+)((?:\s+[\w:\-]+\s*=\s*(?:"(?:\\"|[^"])*"|'(?:\\'|[^'])*'))*)\s*((?:\/>)|(?:><\/\1>|\s*))|\s*<!\[CDATA\[([\w\W]*?)\]\]>\s*|\s*>?([^<]*)/ig;
var re2=/^[0-9]+(?:\.[0-9]+)?$/;
var ec={"&amp;":"&","&nbsp;":" ","&quot;":'"',"&lt;":"<","&gt;":">"};
var fg={tags:["/"],stack:[o]};
var es=function(s){if(___jindo.isUndefined(s)){return""
}return s.replace(/&[a-z]+;/g,function(m){return(___jindo.isString(ec[m]))?ec[m]:m
})
};
var at=function(s,c){s.replace(/([\w\:\-]+)\s*=\s*(?:"((?:\\"|[^"])*)"|'((?:\\'|[^'])*)')/g,function($0,$1,$2,$3){c[$1]=es(($2?$2.replace(/\\"/g,'"'):undefined)||($3?$3.replace(/\\'/g,"'"):undefined))
})
};
var em=function(o){for(var x in o){if(o.hasOwnProperty(x)){if(Object.prototype[x]){continue
}return false
}}return true
};
var cb=function($0,$1,$2,$3,$4,$5){var cur,cdata="";
var idx=fg.stack.length-1;
if(___jindo.isString($1)&&$1){if($1.substr(0,1)!="/"){var has_attr=(typeof $2=="string"&&$2);
var closed=(typeof $3=="string"&&$3);
var newobj=(!has_attr&&closed)?"":{};
cur=fg.stack[idx];
if(___jindo.isUndefined(cur[$1])){cur[$1]=newobj;
cur=fg.stack[idx+1]=cur[$1]
}else{if(cur[$1] instanceof Array){var len=cur[$1].length;
cur[$1][len]=newobj;
cur=fg.stack[idx+1]=cur[$1][len]
}else{cur[$1]=[cur[$1],newobj];
cur=fg.stack[idx+1]=cur[$1][1]
}}if(has_attr){at($2,cur)
}fg.tags[idx+1]=$1;
if(closed){fg.tags.length--;
fg.stack.length--
}}else{fg.tags.length--;
fg.stack.length--
}}else{if(___jindo.isString($4)&&$4){cdata=$4
}else{if(___jindo.isString($5)&&$5){cdata=es($5)
}}}if(cdata.replace(/^\s+/g,"").length>0){var par=fg.stack[idx-1];
var tag=fg.tags[idx];
if(re2.test(cdata)){cdata=parseFloat(cdata,10)
}else{if(cdata=="true"){cdata=true
}else{if(cdata=="false"){cdata=false
}}}if(___jindo.isUndefined(par)){return
}if(par[tag] instanceof Array){var o=par[tag];
if(___jindo.isHash(o[o.length-1])&&!em(o[o.length-1])){o[o.length-1].$cdata=cdata;
o[o.length-1].toString=function(){return cdata
}
}else{o[o.length-1]=cdata
}}else{if(___jindo.isHash(par[tag])&&!em(par[tag])){par[tag].$cdata=cdata;
par[tag].toString=function(){return cdata
}
}else{par[tag]=cdata
}}}};
sXML=sXML.replace(/<(\?|\!-)[^>]*>/g,"");
sXML.replace(re,cb);
return jindo.$Json(o)
};
jindo.$Json.prototype.get=function(sPath){var ___jindo=jindo.$Jindo;
var oArgs=___jindo.checkVarType(arguments,{"4str":["sPath:String+"]},"$Json#get");
var o=jindo.$Json._oldMakeJSON(this._object,"$Json#get");
if(!(___jindo.isHash(o)||___jindo.isArray(o))){throw new jindo.$Error(jindo.$Except.JSON_MUST_HAVE_ARRAY_HASH,"$Json#get")
}var p=sPath.split("/");
var re=/^([\w:\-]+)\[([0-9]+)\]$/;
var stack=[[o]],cur=stack[0];
var len=p.length,c_len,idx,buf,j,e;
for(var i=0;
i<len;
i++){if(p[i]=="."||p[i]==""){continue
}if(p[i]==".."){stack.length--
}else{buf=[];
idx=-1;
c_len=cur.length;
if(c_len==0){return[]
}if(re.test(p[i])){idx=+RegExp.$2
}for(j=0;
j<c_len;
j++){e=cur[j][p[i]];
if(___jindo.isUndefined(e)){continue
}if(___jindo.isArray(e)){if(idx>-1){if(idx<e.length){buf[buf.length]=e[idx]
}}else{buf=buf.concat(e)
}}else{if(idx==-1){buf[buf.length]=e
}}}stack[stack.length]=buf
}cur=stack[stack.length-1]
}return cur
};
jindo.$Json.prototype.toString=function(){jindo.$Json.prototype.toString=function(){return jindo.$Json._oldToString(this._object)
};
return this.toString()
};
jindo.$Json._oldToString=function(oObj){var ___jindo=jindo.$Jindo;
var func={$:function($){if(___jindo.isNull($)||$==Infinity){return"null"
}if(___jindo.isFunction($)){return undefined
}if(___jindo.isUndefined($)){return undefined
}if(___jindo.isBoolean($)){return $?"true":"false"
}if(___jindo.isString($)){return this.s($)
}if(___jindo.isNumeric($)){return $
}if(___jindo.isArray($)){return this.a($)
}if(___jindo.isHash($)){return this.o($)
}if(typeof $=="object"||___jindo.isRegExp($)){return"{}"
}if(isNaN($)){return"null"
}},s:function(s){var e={'"':'\\"',"\\":"\\\\","\n":"\\n","\r":"\\r","\t":"\\t"};
var c=function(m){return(e[m]!==undefined)?e[m]:m
};
return'"'+s.replace(/[\\"'\n\r\t]/g,c)+'"'
},a:function(a){var s="[",c="",n=a.length;
for(var i=0;
i<n;
i++){if(___jindo.isFunction(a[i])){continue
}s+=c+this.$(a[i]);
if(!c){c=","
}}return s+"]"
},o:function(o){o=jindo.$H(o).ksort().$value();
var s="{",c="";
for(var x in o){if(o.hasOwnProperty(x)){if(___jindo.isUndefined(o[x])||___jindo.isFunction(o[x])){continue
}s+=c+this.s(x)+":"+this.$(o[x]);
if(!c){c=","
}}}return s+"}"
}};
return func.$(oObj)
};
jindo.$Json.prototype.toXML=function(){var f=function($,tag){var t=function(s,at){return"<"+tag+(at||"")+">"+s+"</"+tag+">"
};
switch(typeof $){case"undefined":case"null":return t("");
case"number":return t($);
case"string":if($.indexOf("<")<0){return t($.replace(/&/g,"&amp;"))
}else{return t("<![CDATA["+$+"]]>")
}case"boolean":return t(String($));
case"object":var ret="";
if($ instanceof Array){var len=$.length;
for(var i=0;
i<len;
i++){ret+=f($[i],tag)
}}else{var at="";
for(var x in $){if($.hasOwnProperty(x)){if(x=="$cdata"||typeof $[x]=="function"){continue
}ret+=f($[x],x)
}}if(tag){ret=t(ret,at)
}}return ret
}};
return f(jindo.$Json._oldMakeJSON(this._object,"$Json#toXML"),"")
};
jindo.$Json.prototype.toObject=function(){return jindo.$Json._oldMakeJSON(this._object,"$Json#toObject")
};
jindo.$Json.prototype.compare=function(oObj){var ___jindo=jindo.$Jindo;
var oArgs=___jindo.checkVarType(arguments,{"4obj":["oData:Hash+"],"4arr":["oData:Array+"]},"$Json#compare");
function compare(vSrc,vTar){if(___jindo.isArray(vSrc)){if(vSrc.length!==vTar.length){return false
}for(var i=0,nLen=vSrc.length;
i<nLen;
i++){if(!arguments.callee(vSrc[i],vTar[i])){return false
}}return true
}else{if(___jindo.isRegExp(vSrc)||___jindo.isFunction(vSrc)||___jindo.isDate(vSrc)){return String(vSrc)===String(vTar)
}else{if(typeof vSrc==="number"&&isNaN(vSrc)){return isNaN(vTar)
}else{if(___jindo.isHash(vSrc)){var nLen=0;
for(var k in vSrc){nLen++
}for(var k in vTar){nLen--
}if(nLen!==0){return false
}for(var k in vSrc){if(k in vTar===false||!arguments.callee(vSrc[k],vTar[k])){return false
}}return true
}}}}return vSrc===vTar
}try{return compare(jindo.$Json._oldMakeJSON(this._object,"$Json#compare"),oObj)
}catch(e){return false
}};
jindo.$Json.prototype.$value=jindo.$Json.prototype.toObject;
jindo.$Cookie=function(){var cl=arguments.callee;
var cached=cl._cached;
if(cl._cached){return cl._cached
}if(!(this instanceof cl)){return new cl
}if(typeof jindo.$Jindo.isUndefined(cl._cached)){cl._cached=this
}};
jindo.$Cookie.prototype.keys=function(){var ca=document.cookie.split(";");
var re=/^\s+|\s+$/g;
var a=new Array;
for(var i=0;
i<ca.length;
i++){a[a.length]=ca[i].substr(0,ca[i].indexOf("=")).replace(re,"")
}return a
};
jindo.$Cookie.prototype.get=function(sName){var oArgs=jindo.$Jindo.checkVarType(arguments,{"4str":["sName:String+"]},"$Cookie#get");
var ca=document.cookie.split(/\s*;\s*/);
var re=new RegExp("^(\\s*"+sName+"\\s*=)");
for(var i=0;
i<ca.length;
i++){if(re.test(ca[i])){return unescape(ca[i].substr(RegExp.$1.length))
}}return null
};
jindo.$Cookie.prototype.set=function(sName,sValue,nDays,sDomain,sPath){var ___jindo=jindo.$Jindo;
var oArgs=___jindo.checkVarType(arguments,{"4str":["sName:String+","sValue:String+"],day_for_string:["sName:String+","sValue:String+","nDays:Numeric"],domain_for_string:["sName:String+","sValue:String+","nDays:Numeric","sDomain:String+"],path_for_string:["sName:String+","sValue:String+","nDays:Numeric","sDomain:String+","sPath:String+"]},"$Cookie#set");
var sExpire="";
nDays=parseInt(nDays,10);
if(!isNaN(nDays)&&___jindo.isNumeric(nDays)){sExpire=";expires="+(new Date((new Date()).getTime()+nDays*1000*60*60*24)).toGMTString()
}if(___jindo.isUndefined(sDomain)){sDomain=""
}if(___jindo.isUndefined(sPath)){sPath="/"
}document.cookie=sName+"="+escape(sValue)+sExpire+"; path="+sPath+(sDomain?"; domain="+sDomain:"");
return this
};
jindo.$Cookie.prototype.remove=function(sName,sDomain,sPath){var ___jindo=jindo.$Jindo;
var oArgs=___jindo.checkVarType(arguments,{"4str":["sName:String+"],domain_for_string:["sName:String+","sDomain:String+"],path_for_string:["sName:String+","sDomain:String+","sPath:String+"]},"$Cookie#remove");
var aArg=_toArray(arguments);
var aPram=[];
for(var i=0,l=aArg.length;
i<l;
i++){aPram.push(aArg[i]);
if(i==0){aPram.push("");
aPram.push(-1)
}}if(!___jindo.isNull(this.get(sName))){this.set.apply(this,aPram)
}return this
};
jindo.$Element=function(el){var cl=arguments.callee;
if(el&&el instanceof cl){return el
}if(!(this instanceof cl)){try{jindo.$Jindo._maxWarn(arguments.length,1,"$Element");
return new cl(el)
}catch(e){if(e instanceof TypeError){return null
}throw e
}}var ___jindo=jindo.$Jindo;
var oArgs=___jindo.checkVarType(arguments,{"4str":["sID:String+"],"4nod":["oEle:Node"],"4doc":["oEle:Document+"],"4win":["oEle:Window+"]},"$Element");
switch(oArgs+""){case"4str":el=jindo.$(el);
break;
default:el=oArgs.oEle
}this._element=el;
if(this._element!=null){if(this._element.__jindo__id){this._key=this._element.__jindo__id
}else{this._element.__jindo__id=this._key=_makeRandom()
}var tag=this._element.tagName;
this.tag=tag!==undefined?tag.toLowerCase():""
}else{throw new TypeError("{not_found_element}")
}};
function _makeRandom(){return"e"+new Date().getTime()+parseInt(Math.random()*100000000,10)
}jindo.$Element._eventBind=function(oEle,sEvent,fAroundFunc,bUseCapture){if(oEle.addEventListener){if(document.documentMode==9){jindo.$Element._eventBind=function(oEle,sEvent,fAroundFunc){if(/resize/.test(sEvent)){oEle.attachEvent("on"+sEvent,fAroundFunc)
}else{oEle.addEventListener(sEvent,fAroundFunc,!!bUseCapture)
}}
}else{jindo.$Element._eventBind=function(oEle,sEvent,fAroundFunc,bUseCapture){oEle.addEventListener(sEvent,fAroundFunc,!!bUseCapture)
}
}}else{jindo.$Element._eventBind=function(oEle,sEvent,fAroundFunc){oEle.attachEvent("on"+sEvent,fAroundFunc)
}
}jindo.$Element._eventBind(oEle,sEvent,fAroundFunc,bUseCapture)
};
jindo.$Element._unEventBind=function(oEle,sEvent,fAroundFunc){if(oEle.removeEventListener){if(document.documentMode==9){jindo.$Element._unEventBind=function(oEle,sEvent,fAroundFunc){if(/resize/.test(sEvent)){oEle.detachEvent("on"+sEvent,fAroundFunc)
}else{oEle.removeEventListener(sEvent,fAroundFunc,false)
}}
}else{jindo.$Element._unEventBind=function(oEle,sEvent,fAroundFunc){oEle.removeEventListener(sEvent,fAroundFunc,false)
}
}}else{jindo.$Element._unEventBind=function(oEle,sEvent,fAroundFunc){oEle.detachEvent("on"+sEvent,fAroundFunc)
}
}jindo.$Element._unEventBind(oEle,sEvent,fAroundFunc)
};
jindo.$Element.prototype.$value=function(){return this._element
};
jindo.$Element.prototype.visible=function(bVisible,sDisplay){var oArgs=jindo.$Jindo.checkVarType(arguments,{g:[],s4bln:[jindo.$Jindo._F("bVisible:Boolean")],s4str:["bVisible:Boolean","sDisplay:String+"]},"$Element#visible");
switch(oArgs+""){case"g":return(this._getCss(this._element,"display")!="none");
case"s4bln":this[bVisible?"show":"hide"]();
return this;
case"s4str":this[bVisible?"show":"hide"](sDisplay);
return this
}};
jindo.$Element.prototype.show=function(sDisplay){var oArgs=jindo.$Jindo.checkVarType(arguments,{"4voi":[],"4str":["sDisplay:String+"]},"$Element#show");
var s=this._element.style;
var b="block";
var c={p:b,div:b,form:b,h1:b,h2:b,h3:b,h4:b,ol:b,ul:b,fieldset:b,td:"table-cell",th:"table-cell",li:"list-item",table:"table",thead:"table-header-group",tbody:"table-row-group",tfoot:"table-footer-group",tr:"table-row",col:"table-column",colgroup:"table-column-group",caption:"table-caption",dl:b,dt:b,dd:b};
try{switch(oArgs+""){case"4voi":var type=c[this.tag];
s.display=type||"inline";
break;
case"4str":s.display=sDisplay
}}catch(e){s.display="block"
}return this
};
jindo.$Element.prototype.hide=function(){this._element.style.display="none";
return this
};
jindo.$Element.prototype.toggle=function(sDisplay){var oArgs=jindo.$Jindo.checkVarType(arguments,{"4voi":[],"4str":["sDisplay:String+"]},"$Element#toggle");
this[this._getCss(this._element,"display")=="none"?"show":"hide"].apply(this,arguments);
return this
};
jindo.$Element.prototype.opacity=function(value){var oArgs=jindo.$Jindo.checkVarType(arguments,{g:[],s:["nOpacity:Numeric"]},"$Element#opacity");
var v,e=this._element,b;
switch(oArgs+""){case"g":b=(this._getCss(e,"display")!="none");
if(typeof e.filters!="undefined"){v=typeof e.filters.alpha=="undefined"?(b?100:0):e.filters.alpha.opacity;
v=v/100
}else{v=parseFloat(e.style.opacity,10);
if(isNaN(v)){v=b?1:0
}}return v;
case"s":b=(this._getCss(e,"display")!="none");
value=oArgs.nOpacity;
e.style.zoom=1;
value=Math.max(Math.min(value,1),0);
if(typeof e.filters!="undefined"){value=Math.ceil(value*100);
if(typeof e.filters!="unknown"&&typeof e.filters.alpha!="undefined"){e.filters.alpha.opacity=value
}else{e.style.filter=(e.style.filter+" alpha(opacity="+value+")")
}}else{e.style.opacity=value
}return this
}};
jindo.$Element.prototype.css=function(sName,sValue){var oArgs=jindo.$Jindo.checkVarType(arguments,{g:["sName:String+"],s4str:[jindo.$Jindo._F("sName:String+"),jindo.$Jindo._F("vValue:String+")],s4num:["sName:String+","vValue:Numeric"],s4obj:["oObj:Hash+"]},"$Element#css");
var e=this._element;
switch(oArgs+""){case"s4str":case"s4num":var obj={};
obj[sName]=sValue;
sName=obj;
break;
case"s4obj":sName=oArgs.oObj;
break;
case"g":var _getCss=this._getCss;
if(sName=="opacity"){return this.opacity()
}if((_JINDO_IS_FF||_JINDO_IS_OP)&&(sName=="backgroundPositionX"||sName=="backgroundPositionY")){var bp=_getCss(e,"backgroundPosition").split(/\s+/);
return(sName=="backgroundPositionX")?bp[0]:bp[1]
}if(_JINDO_IS_IE&&sName=="backgroundPosition"){return _getCss(e,"backgroundPositionX")+" "+_getCss(e,"backgroundPositionY")
}if((_JINDO_IS_FF||_JINDO_IS_SF||_JINDO_IS_CH)&&(sName=="padding"||sName=="margin")){var top=_getCss(e,sName+"Top");
var right=_getCss(e,sName+"Right");
var bottom=_getCss(e,sName+"Bottom");
var left=_getCss(e,sName+"Left");
if((top==right)&&(bottom==left)){return top
}else{if(top==bottom){if(right==left){return top+" "+right
}else{return top+" "+right+" "+bottom+" "+left
}}else{return top+" "+right+" "+bottom+" "+left
}}}return _getCss(e,sName)
}var v,type;
for(var k in sName){if(sName.hasOwnProperty(k)){v=sName[k];
if(!(jindo.$Jindo.isString(v)||jindo.$Jindo.isNumeric(v))){continue
}if(k=="opacity"){this.opacity(v);
continue
}if(k=="cssFloat"&&_JINDO_IS_IE){k="styleFloat"
}if((_JINDO_IS_FF||_JINDO_IS_OP)&&(k=="backgroundPositionX"||k=="backgroundPositionY")){var bp=this.css("backgroundPosition").split(/\s+/);
v=k=="backgroundPositionX"?v+" "+bp[1]:bp[0]+" "+v;
this._setCss(e,"backgroundPosition",v)
}else{this._setCss(e,k,v)
}}}return this
};
jindo.$Element.prototype._getCss=function(e,sName){var fpGetCss;
if(e.currentStyle){fpGetCss=function(e,sName){try{if(sName=="cssFloat"){sName="styleFloat"
}var sStyle=e.style[sName];
if(sStyle){return sStyle
}else{var oCurrentStyle=e.currentStyle;
if(oCurrentStyle){return oCurrentStyle[sName]
}}return sStyle
}catch(ex){throw new jindo.$Error((e.tagName||"document")+jindo.$Except.NOT_USE_CSS,"$Element#css")
}}
}else{if(window.getComputedStyle){fpGetCss=function(e,sName){try{if(sName=="cssFloat"){sName="float"
}var d=e.ownerDocument||e.document||document;
var sVal=(e.style[sName]||d.defaultView.getComputedStyle(e,null).getPropertyValue(sName.replace(/([A-Z])/g,"-$1").toLowerCase()));
if(sName=="textDecoration"){sVal=sVal.replace(",","")
}return sVal
}catch(ex){throw new jindo.$Error((e.tagName||"document")+jindo.$Except.NOT_USE_CSS,"$Element#css")
}}
}else{fpGetCss=function(e,sName){try{if(sName=="cssFloat"&&_JINDO_IS_IE){sName="styleFloat"
}return e.style[sName]
}catch(ex){throw new jindo.$Error((e.tagName||"document")+jindo.$Except.NOT_USE_CSS,"$Element#css")
}}
}}jindo.$Element.prototype._getCss=fpGetCss;
return fpGetCss(e,sName)
};
jindo.$Element.prototype._setCss=function(e,k,v){if(("#top#left#right#bottom#").indexOf(k+"#")>0&&(typeof v=="number"||(/\d$/.test(v)))){e.style[k]=parseInt(v,10)+"px"
}else{e.style[k]=v
}};
jindo.$Element.prototype.attr=function(sName,sValue){var oArgs=jindo.$Jindo.checkVarType(arguments,{g:["sName:String+"],s4str:["sName:String+","vValue:String+"],s4num:["sName:String+","vValue:Numeric"],s4nul:["sName:String+","vValue:Null"],s4bln:["sName:String+","vValue:Boolean"],s4obj:[jindo.$Jindo._F("oObj:Hash+")]},"$Element#attr");
var e=this._element;
switch(oArgs+""){case"s4str":case"s4nul":case"s4num":case"s4bln":var obj={};
obj[sName]=sValue;
sName=obj;
break;
case"s4obj":sName=oArgs.oObj;
break;
case"g":if(sName=="class"||sName=="className"){return e.className
}else{if(sName=="style"){return e.style.cssText
}else{if(sName=="checked"||sName=="disabled"){return !!e[sName]
}else{if(sName=="value"){if(this.tag=="button"){return e.getAttributeNode("value").value
}else{return e.value
}}else{if(sName=="href"){return e.getAttribute(sName,2)
}}}}}return e.getAttribute(sName)
}for(var k in sName){if(sName.hasOwnProperty(k)){var v=sName[k];
if(jindo.$Jindo.isNull(v)){e.removeAttribute(k)
}else{if(k=="class"||k=="className"){e.className=v
}else{if(k=="style"){e.style.cssText=v
}else{if(k=="checked"||k=="disabled"){e[k]=v
}else{if(k=="value"){e.value=v
}else{e.setAttribute(k,v)
}}}}}}}return this
};
jindo.$Element.prototype.width=function(width){var oArgs=jindo.$Jindo.checkVarType(arguments,{g:[],s:["nWidth:Numeric"]},"$Element#width");
switch(oArgs+""){case"g":return this._element.offsetWidth;
case"s":width=oArgs.nWidth;
var e=this._element;
e.style.width=width+"px";
var off=e.offsetWidth;
if(off!=width&&off!==0){var w=(width*2-off);
if(w>0){e.style.width=w+"px"
}}return this
}};
jindo.$Element.prototype.height=function(height){var oArgs=jindo.$Jindo.checkVarType(arguments,{g:[],s:["nHeight:Numeric"]},"$Element#height");
switch(oArgs+""){case"g":return this._element.offsetHeight;
case"s":height=oArgs.nHeight;
var e=this._element;
e.style.height=height+"px";
var off=e.offsetHeight;
if(off!=height&&off!==0){var height=(height*2-off);
if(height>0){e.style.height=height+"px"
}}return this
}};
jindo.$Element.prototype.className=function(sClass){var oArgs=jindo.$Jindo.checkVarType(arguments,{g:[],s:[jindo.$Jindo._F("sClass:String+")]},"$Element#className");
var e=this._element;
switch(oArgs+""){case"g":return e.className;
case"s":e.className=sClass;
return this
}};
jindo.$Element.prototype.hasClass=function(sClass){var ___checkVarType=jindo.$Jindo.checkVarType;
if(this._element.classList){jindo.$Element.prototype.hasClass=function(sClass){var oArgs=___checkVarType(arguments,{"4str":["sClass:String+"]},"$Element#hasClass");
return this._element.classList.contains(sClass)
}
}else{jindo.$Element.prototype.hasClass=function(sClass){var oArgs=___checkVarType(arguments,{"4str":["sClass:String+"]},"$Element#hasClass");
return(" "+this._element.className+" ").indexOf(" "+sClass+" ")>-1
}
}return this.hasClass.apply(this,arguments)
};
jindo.$Element.prototype.addClass=function(sClass){var oArgs=jindo.$Jindo.checkVarType(arguments,{"4str":["sClass:String+"]},"$Element#addClass");
var e=this._element;
var sClassName=e.className;
var aClass=(sClass+"").split(" ");
var sEachClass;
for(var i=aClass.length-1;
i>=0;
i--){sEachClass=aClass[i];
if((" "+sClassName+" ").indexOf(" "+sEachClass+" ")==-1){sClassName=sClassName+" "+sEachClass
}}e.className=sClassName.replace(/\s+$/,"").replace(/^\s+/,"");
return this
};
jindo.$Element.prototype.removeClass=function(sClass){var oArgs=jindo.$Jindo.checkVarType(arguments,{"4str":["sClass:String+"]},"$Element#removeClass");
var e=this._element;
var sClassName=e.className;
var aClass=(sClass+"").split(" ");
var sEachClass;
for(var i=aClass.length-1;
i>=0;
i--){sClassName=(" "+sClassName+" ").replace(new RegExp("\\b"+aClass[i]+"\\s+","g")," ")
}e.className=sClassName.replace(/\s+$/,"").replace(/^\s+/,"");
return this
};
jindo.$Element.prototype.toggleClass=function(sClass,sClass2){var ___checkVarType=jindo.$Jindo.checkVarType;
if(this._element.classList){jindo.$Element.prototype.toggleClass=function(sClass,sClass2){var oArgs=___checkVarType(arguments,{"4str":["sClass:String+"],"4str2":["sClass:String+","sClass2:String+"]},"$Element#toggleClass");
switch(oArgs+""){case"4str":this._element.classList.toggle(sClass+"");
break;
case"4str2":sClass=sClass+"";
sClass2=sClass2+"";
if(this.hasClass(sClass)){this.removeClass(sClass);
this.addClass(sClass2)
}else{this.addClass(sClass);
this.removeClass(sClass2)
}}return this
}
}else{jindo.$Element.prototype.toggleClass=function(sClass,sClass2){var oArgs=___checkVarType(arguments,{"4str":["sClass:String+"],"4str2":["sClass:String+","sClass2:String+"]},"$Element#toggleClass");
sClass2=sClass2||"";
if(this.hasClass(sClass)){this.removeClass(sClass);
if(sClass2){this.addClass(sClass2)
}}else{this.addClass(sClass);
if(sClass2){this.removeClass(sClass2)
}}return this
}
}return this.toggleClass.apply(this,arguments)
};
jindo.$Element.prototype.cssClass=function(vClass,bCondition){var oArgs=jindo.$Jindo.checkVarType(arguments,{g:["sClass:String+"],s4bln:["sClass:String+","bCondition:Boolean"],s4obj:["oObj:Hash+"]},"$Element#cssClass");
switch(oArgs+""){case"g":return this.hasClass(oArgs.sClass);
case"s4bln":if(oArgs.bCondition){this.addClass(oArgs.sClass)
}else{this.removeClass(oArgs.sClass)
}return this;
case"s4obj":var e=this._element;
vClass=oArgs.oObj;
var sClassName=e.className;
for(var sEachClass in vClass){if(vClass.hasOwnProperty(sEachClass)){if(vClass[sEachClass]){if((" "+sClassName+" ").indexOf(" "+sEachClass+" ")==-1){sClassName=(sClassName+" "+sEachClass).replace(/^\s+/,"")
}}else{if((" "+sClassName+" ").indexOf(" "+sEachClass+" ")>-1){sClassName=(" "+sClassName+" ").replace(" "+sEachClass+" "," ").replace(/\s+$/,"").replace(/^\s+/,"")
}}}}e.className=sClassName;
return this
}};
jindo.$Element.prototype.text=function(sText){var oArgs=jindo.$Jindo.checkVarType(arguments,{g:[],s4str:["sText:String+"],s4num:[jindo.$Jindo._F("sText:Numeric")],s4bln:["sText:Boolean"]},"$Element#text");
var ele=this._element;
var tag=this.tag;
switch(oArgs+""){case"g":var prop=(ele.innerText!==undefined)?"innerText":"textContent";
if(tag=="textarea"||tag=="input"){prop="value"
}return ele[prop];
case"s4str":case"s4num":case"s4bln":var prop=(ele.innerText!==undefined)?"innerText":"textContent";
if(tag=="textarea"||tag=="input"){prop="value"
}sText+="";
try{if(prop!="value"){prop=(ele.textContent!==undefined)?"textContent":"innerText"
}ele[prop]=sText+""
}catch(e){return ele.innerHTML=(sText+"").replace(/&/g,"&amp;").replace(/</g,"&lt;")
}return this
}};
jindo.$Element.prototype.html=function(sHTML){var isIe=_JINDO_IS_IE;
var isFF=_JINDO_IS_FF;
var _param={g:[],s4str:[jindo.$Jindo._F("sText:String+")],s4num:["sText:Numeric"],s4bln:["sText:Boolean"]};
var ___checkVarType=jindo.$Jindo.checkVarType;
if(isIe){jindo.$Element.prototype.html=function(sHTML){var oArgs=___checkVarType(arguments,_param,"$Element#html");
switch(oArgs+""){case"g":return this._element.innerHTML;
case"s4str":case"s4num":case"s4bln":sHTML+="";
if(jindo.cssquery){jindo.cssquery.release()
}var oEl=this._element;
while(oEl.firstChild){oEl.removeChild(oEl.firstChild)
}var sId="R"+new Date().getTime()+parseInt(Math.random()*100000,10);
var oDoc=oEl.ownerDocument||oEl.document||document;
var oDummy;
var sTag=oEl.tagName.toLowerCase();
switch(sTag){case"select":case"table":oDummy=oDoc.createElement("div");
oDummy.innerHTML="<"+sTag+' class="'+sId+'">'+sHTML+"</"+sTag+">";
break;
case"tr":case"thead":case"tbody":case"colgroup":oDummy=oDoc.createElement("div");
oDummy.innerHTML="<table><"+sTag+' class="'+sId+'">'+sHTML+"</"+sTag+"></table>";
break;
default:oEl.innerHTML=sHTML
}if(oDummy){var oFound;
for(oFound=oDummy.firstChild;
oFound;
oFound=oFound.firstChild){if(oFound.className==sId){break
}}if(oFound){var notYetSelected=true;
for(var oChild;
oChild=oEl.firstChild;
){oChild.removeNode(true)
}for(var oChild=oFound.firstChild;
oChild;
oChild=oFound.firstChild){if(sTag=="select"){var cloneNode=oChild.cloneNode(true);
if(oChild.selected&&notYetSelected){notYetSelected=false;
cloneNode.selected=true
}oEl.appendChild(cloneNode);
oChild.removeNode(true)
}else{oEl.appendChild(oChild)
}}oDummy.removeNode&&oDummy.removeNode(true)
}oDummy=null
}return this
}}
}else{if(isFF){jindo.$Element.prototype.html=function(sHTML){var oArgs=___checkVarType(arguments,_param,"$Element#html");
switch(oArgs+""){case"g":return this._element.innerHTML;
case"s4str":case"s4num":case"s4bln":sHTML+="";
var oEl=this._element;
if(!oEl.parentNode){var sId="R"+new Date().getTime()+parseInt(Math.random()*100000,10);
var oDoc=oEl.ownerDocument||oEl.document||document;
var oDummy;
var sTag=oEl.tagName.toLowerCase();
switch(sTag){case"select":case"table":oDummy=oDoc.createElement("div");
oDummy.innerHTML="<"+sTag+' class="'+sId+'">'+sHTML+"</"+sTag+">";
break;
case"tr":case"thead":case"tbody":case"colgroup":oDummy=oDoc.createElement("div");
oDummy.innerHTML="<table><"+sTag+' class="'+sId+'">'+sHTML+"</"+sTag+"></table>";
break;
default:oEl.innerHTML=sHTML
}if(oDummy){var oFound;
for(oFound=oDummy.firstChild;
oFound;
oFound=oFound.firstChild){if(oFound.className==sId){break
}}if(oFound){for(var oChild;
oChild=oEl.firstChild;
){oChild.removeNode(true)
}for(var oChild=oFound.firstChild;
oChild;
oChild=oFound.firstChild){oEl.appendChild(oChild)
}oDummy.removeNode&&oDummy.removeNode(true)
}oDummy=null
}}else{oEl.innerHTML=sHTML
}return this
}}
}else{jindo.$Element.prototype.html=function(sHTML){var oArgs=___checkVarType(arguments,_param,"$Element#html");
switch(oArgs+""){case"g":return this._element.innerHTML;
case"s4str":case"s4num":case"s4bln":sHTML+="";
var oEl=this._element;
oEl.innerHTML=sHTML;
return this
}}
}}return this.html.apply(this,arguments)
};
jindo.$Element.prototype.outerHTML=function(){var e=this._element;
if(e.outerHTML!==undefined){return e.outerHTML
}var oDoc=e.ownerDocument||e.document||document;
var div=oDoc.createElement("div");
var par=e.parentNode;
if(!par){return e.innerHTML
}par.insertBefore(div,e);
div.style.display="none";
div.appendChild(e);
var s=div.innerHTML;
par.insertBefore(e,div);
par.removeChild(div);
return s
};
jindo.$Element.prototype.toString=jindo.$Element.prototype.outerHTML;
jindo.$Element.prototype.attach=function(sEvent,fpCallback){var oArgs=jindo.$Jindo.checkVarType(arguments,{"4str":["sEvent:String+","fpCallback:Function+"]},"$Element#attach");
return this._add("normal",sEvent.toLowerCase(),null,fpCallback)
};
jindo.$Element.prototype.detach=function(sEvent,fpCallback){var oArgs=jindo.$Jindo.checkVarType(arguments,{group_for_string:["sEvent:String+"],"4fun":["sEvent:String+","fpCallback:Function+"]},"$Element#detach");
return this._del("normal",sEvent.toLowerCase(),null,fpCallback)
};
jindo.$Element.prototype.delegate=function(sEvent,vFilter,fpCallback){var oArgs=jindo.$Jindo.checkVarType(arguments,{"4str":["sEvent:String+","vFilter:String+","fpCallback:Function+"],"4fun":["sEvent:String+","vFilter:Function+","fpCallback:Function+"]},"$Element#delegate");
return this._add("delegate",sEvent.toLowerCase(),vFilter,fpCallback)
};
jindo.$Element.prototype.undelegate=function(sEvent,vFilter,fpCallback){var oArgs=jindo.$Jindo.checkVarType(arguments,{"4str":["sEvent:String+","vFilter:String+","fpCallback:Function+"],"4fun":["sEvent:String+","vFilter:Function+","fpCallback:Function+"],group_for_string:["sEvent:String+","vFilter:String+"],group_for_function:["sEvent:String+","vFilter:Function+"]},"$Element#undelegate");
return this._del("delegate",sEvent.toLowerCase(),vFilter,fpCallback)
};
jindo.$Element.prototype._add=function(sType,sEvent,vFilter,fpCallback){var oManager=jindo.$Element.eventManager;
var oEvent=oManager.splitGroup(sEvent);
sEvent=oEvent.event;
var sGroup=oEvent.group;
if((!document.addEventListener)&&("domready"==sEvent)){if(window.top!=window){throw jindo.$Error(jindo.$Except.NOT_WORK_DOMREADY,"$Element#attach")
}jindo.$Element._domready(this._element,fpCallback);
return this
}fpCallback=oManager.revisionCallback(sType,sEvent,fpCallback);
sEvent=oManager.revisionEvent(sType,sEvent);
if(!oManager.isInit(this._key)){oManager.init(this._key,this._element)
}if(!oManager.hasEvent(this._key,sEvent)){oManager.initEvent(this,sEvent,sGroup)
}if(!oManager.hasGroup(this._key,sEvent,sGroup)){oManager.initGroup(this._key,sEvent,sGroup)
}oManager.addEventListener(this._key,sEvent,sGroup,sType,vFilter,fpCallback);
return this
};
jindo.$Element.prototype._del=function(sType,sEvent,vFilter,fpCallback){var oManager=jindo.$Element.eventManager;
var oEvent=oManager.splitGroup(sEvent);
sEvent=oEvent.event;
var sGroup=oEvent.group;
sEvent=oManager.revisionEvent(sType,sEvent);
if((!document.addEventListener)&&("domready"==sEvent)){var aNewDomReady=[];
var list=jindo.$Element._domready.list;
for(var i=0,l=list.length;
i<l;
i++){if(list[i]!=fpCallback){aNewDomReady.push(list[i])
}}jindo.$Element._domready.list=aNewDomReady;
return this
}var NONE_GROUP="_jindo_event_none";
if(sGroup===NONE_GROUP&&!jindo.$Jindo.isFunction(fpCallback)){throw new jindo.$Error(jindo.$Except.HAS_FUNCTION_FOR_GROUP,"$Element#"+(sType=="normal"?"detach":"delegate"))
}oManager.removeEventListener(this._key,sEvent,sGroup,sType,vFilter,fpCallback);
return this
};
jindo.$Element.eventManager=(function(){var eventStore={};
var NONE_GROUP="_jindo_event_none";
function bind(fpFunc,oScope,aPram){return function(){var args=_slice.call(arguments,0);
if(aPram.length){args=aPram.concat(args)
}return fpFunc.apply(oScope,args)
}
}var touch;
if(_JINDO_IS_MO){touch={mousedown:"touchstart",mousemove:"touchmove",mouseup:"touchend"}
}else{touch={mousedown:"mousedown",mousemove:"mousemove",mouseup:"mouseup"}
}return{revisionCallback:function(sType,sEvent,fpCallback){if((document.addEventListener!==undefined&&(sEvent=="mouseenter"||sEvent=="mouseleave"))||(_JINDO_IS_IE&&(sType=="delegate")&&(sEvent=="mouseenter"||sEvent=="mouseleave"))){var fpWrapCallback=jindo.$Element.eventManager._fireWhenElementBoundary(sType,fpCallback);
fpWrapCallback._origin_=fpCallback;
fpCallback=fpWrapCallback
}return fpCallback
},_fireWhenElementBoundary:function(sType,fpCallback){return function(oEvent){var woRelatedElement=oEvent.relatedElement?jindo.$Element(oEvent.relatedElement):null;
var eElement=oEvent.currentElement;
if(sType=="delegate"){eElement=oEvent.element
}if(woRelatedElement&&(woRelatedElement.isEqual(eElement)||woRelatedElement.isChildOf(eElement))){return
}fpCallback(oEvent)
}
},revisionEvent:function(sType,sEvent){if(document.addEventListener!==undefined){this.revisionEvent=function(sType,sEvent){sEvent=sEvent.toLowerCase();
if(sEvent=="domready"){sEvent="DOMContentLoaded"
}else{if(sEvent=="mousewheel"&&!_JINDO_IS_WK&&!_JINDO_IS_OP&&!_JINDO_IS_IE){sEvent="DOMMouseScroll"
}else{if(sEvent=="mouseenter"&&(!_JINDO_IS_IE||sType=="delegate")){sEvent="mouseover"
}else{if(sEvent=="mouseleave"&&(!_JINDO_IS_IE||sType=="delegate")){sEvent="mouseout"
}else{if(sEvent=="transitionend"||sEvent=="transitionstart"){var sPrefix,sPostfix=sEvent.replace("transition","");
sPostfix=sPostfix.substr(0,1).toUpperCase()+sPostfix.substr(1);
if(document.body.style.WebkitTransition!==undefined){sPrefix="webkit"
}else{if(document.body.style.OTransition!==undefined){sPrefix="o"
}else{if(document.body.style.MsTransition!==undefined){sPrefix="ms"
}}}sEvent=(sPrefix?sPrefix+"Transition":"transition")+sPostfix
}else{if(sEvent=="animationstart"||sEvent=="animationend"||sEvent=="animationiteration"){var sPrefix,sPostfix=sEvent.replace("animation","");
sPostfix=sPostfix.substr(0,1).toUpperCase()+sPostfix.substr(1);
if(document.body.style.WebkitAnimationName!==undefined){sPrefix="webkit"
}else{if(document.body.style.OAnimationName!==undefined){sPrefix="o"
}else{if(document.body.style.MsTransitionName!==undefined){sPrefix="ms"
}}}sEvent=(sPrefix?sPrefix+"Animation":"animation")+sPostfix
}else{if("mousedown|mousemove|mouseup".indexOf(sEvent)>-1){sEvent=touch[sEvent]
}}}}}}}return sEvent
}
}else{this.revisionEvent=function(sType,sEvent){if(sType=="delegate"&&sEvent=="mouseenter"){sEvent="mouseover"
}else{if(sType=="delegate"&&sEvent=="mouseleave"){sEvent="mouseout"
}else{if("mousedown|mousemove|mouseup".indexOf(sEvent)>-1){sEvent=touch[sEvent]
}}}return sEvent
}
}return this.revisionEvent(sType,sEvent)
},test:function(){return eventStore
},isInit:function(sKey){return !!eventStore[sKey]
},init:function(sKey,eEle){eventStore[sKey]={ele:eEle,event:{}}
},getEventConfig:function(sKey){return eventStore[sKey]
},hasEvent:function(sKey,sEvent){try{return !!eventStore[sKey]["event"][sEvent]
}catch(e){return false
}},hasGroup:function(sKey,sEvent,sGroup){return !!eventStore[sKey]["event"][sEvent]["type"][sGroup]
},initEvent:function(oThis,sEvent,sGroup){var sKey=oThis._key;
var oEvent=eventStore[sKey]["event"];
var fAroundFunc=bind(function(sEvent,wEvent){wEvent=wEvent||window.event;
if(wEvent.currentTarget===undefined){wEvent.currentTarget=this._element
}var weEvent=jindo.$Event(wEvent);
if(!weEvent.currentElement){weEvent.currentElement=this._element
}var oEle=weEvent.element;
var oManager=jindo.$Element.eventManager;
var oConfig=oManager.getEventConfig(weEvent.currentElement.__jindo__id);
var oType=oConfig.event[sEvent].type;
for(var i in oType){if(oType.hasOwnProperty(i)){var aNormal=oType[i].normal;
for(var j=0,l=aNormal.length;
j<l;
j++){aNormal[j].call(this,weEvent)
}var oDelegate=oType[i].delegate;
var aResultFilter;
var afpFilterCallback;
for(var k in oDelegate){if(oDelegate.hasOwnProperty(k)){aResultFilter=oDelegate[k].checker(oEle);
if(aResultFilter[0]){afpFilterCallback=oDelegate[k].callback;
weEvent.element=aResultFilter[1];
for(var m=0,leng=afpFilterCallback.length;
m<leng;
m++){afpFilterCallback[m].call(this,weEvent)
}}}}}}},oThis,[sEvent]);
oEvent[sEvent]={listener:fAroundFunc,type:{}};
jindo.$Element._eventBind(oThis._element,sEvent,fAroundFunc,false)
},initGroup:function(sKey,sEvent,sGroup){var oType=eventStore[sKey]["event"][sEvent]["type"];
oType[sGroup]={normal:[],delegate:{}}
},addEventListener:function(sKey,sEvent,sGroup,sType,vFilter,fpCallback){var oEventInfo=eventStore[sKey]["event"][sEvent]["type"][sGroup];
if(sType==="normal"){oEventInfo.normal.push(fpCallback)
}else{if(sType==="delegate"){if(!this.hasDelegate(oEventInfo,vFilter)){this.initDelegate(eventStore[sKey].ele,oEventInfo,vFilter)
}this.addDelegate(oEventInfo,vFilter,fpCallback)
}}},hasDelegate:function(oEventInfo,vFilter){return !!oEventInfo.delegate[vFilter]
},initDelegate:function(eOwnEle,oEventInfo,vFilter){var fpCheck;
if(jindo.$Jindo.isString(vFilter)){fpCheck=bind(function(eOwnEle,sCssquery,oEle){var eIncludeEle=oEle;
var ___query=jindo.cssquery;
var isIncludeEle=___query.test(oEle,sCssquery);
if(!isIncludeEle){var aPropagationElements=this._getParent(eOwnEle,oEle);
for(var i=0,leng=aPropagationElements.length;
i<leng;
i++){eIncludeEle=aPropagationElements[i];
if(___query.test(eIncludeEle,sCssquery)){isIncludeEle=true;
break
}}}return[isIncludeEle,eIncludeEle]
},this,[eOwnEle,vFilter])
}else{fpCheck=bind(function(eOwnEle,fpFilter,oEle){var eIncludeEle=oEle;
var isIncludeEle=fpFilter(eOwnEle,oEle);
if(!isIncludeEle){var aPropagationElements=this._getParent(eOwnEle,oEle);
for(var i=0,leng=aPropagationElements.length;
i<leng;
i++){eIncludeEle=aPropagationElements[i];
if(fpFilter(eOwnEle,eIncludeEle)){isIncludeEle=true;
break
}}}return[isIncludeEle,eIncludeEle]
},this,[eOwnEle,vFilter])
}oEventInfo.delegate[vFilter]={checker:fpCheck,callback:[]}
},addDelegate:function(oEventInfo,vFilter,fpCallback){oEventInfo.delegate[vFilter].callback.push(fpCallback)
},removeEventListener:function(sKey,sEvent,sGroup,sType,vFilter,fpCallback){var oEventInfo;
try{oEventInfo=eventStore[sKey]["event"][sEvent]["type"][sGroup]
}catch(e){return
}var aNewCallback=[];
var aOldCallback;
if(sType==="normal"){aOldCallback=oEventInfo.normal
}else{aOldCallback=oEventInfo.delegate[vFilter].callback
}if(sEvent==NONE_GROUP||jindo.$Jindo.isFunction(fpCallback)){for(var i=0,l=aOldCallback.length;
i<l;
i++){if((aOldCallback[i]._origin_||aOldCallback[i])!=fpCallback){aNewCallback.push(aOldCallback[i])
}}}if(sType==="normal"){delete oEventInfo.normal;
oEventInfo.normal=aNewCallback
}else{if(sType==="delegate"){delete oEventInfo.delegate[vFilter].callback;
oEventInfo.delegate[vFilter].callback=aNewCallback
}}this.cleanUp(sKey,sEvent)
},cleanUpAll:function(){var oEvent;
for(var sKey in eventStore){if(eventStore.hasOwnProperty(sKey)){this.cleanUpUsingKey(sKey,true)
}}},cleanUpUsingKey:function(sKey,bForce){var oEvent;
try{oEvent=eventStore[sKey].event
}catch(e){return
}for(var sEvent in oEvent){if(oEvent.hasOwnProperty(sEvent)){this.cleanUp(sKey,sEvent,bForce)
}}},cleanUp:function(sKey,sEvent,bForce){var oTypeInfo;
try{oTypeInfo=eventStore[sKey]["event"][sEvent]["type"]
}catch(e){return
}var oEventInfo;
var bHasEvent=false;
if(!bForce){for(var i in oTypeInfo){if(oTypeInfo.hasOwnProperty(i)){oEventInfo=oTypeInfo[i];
if(oEventInfo.normal.length){bHasEvent=true;
break
}var oDele=oEventInfo.delegate;
for(var j in oDele){if(oDele.hasOwnProperty(j)){if(oDele[j].callback.length){bHasEvent=true;
break
}}}if(bHasEvent){break
}}}}if(!bHasEvent){jindo.$Element._unEventBind(eventStore[sKey].ele,sEvent,eventStore[sKey]["event"][sEvent]["listener"]);
delete eventStore[sKey]["event"][sEvent];
var bAllDetach=true;
var oEvent=eventStore[sKey]["event"];
for(var k in oEvent){if(oEvent.hasOwnProperty(k)){bAllDetach=false;
break
}}if(bAllDetach){delete eventStore[sKey]
}}},splitGroup:function(sEvent){var aMatch=/\s*(.+?)\s*\(\s*(.*?)\s*\)/.exec(sEvent);
if(aMatch){return{event:aMatch[1].toLowerCase(),group:aMatch[2].toLowerCase()}
}else{return{event:sEvent.toLowerCase(),group:NONE_GROUP}
}},_getParent:function(oOwnEle,oEle){var e=oOwnEle;
var a=[],p=null;
var oDoc=oEle.ownerDocument||oEle.document||document;
while(oEle.parentNode&&p!=e){p=oEle.parentNode;
if(p==oDoc.documentElement){break
}a[a.length]=p;
oEle=p
}return a
}}
})();
jindo.$Element._domready=function(doc,func){if(jindo.$Element._domready.list===undefined){var f=null,l=jindo.$Element._domready.list=[func];
var done=false,execFuncs=function(){if(!done){done=true;
var evt={type:"domready",target:doc,currentTarget:doc};
while(f=l.shift()){f(evt)
}}};
(function(){try{doc.documentElement.doScroll("left")
}catch(e){setTimeout(arguments.callee,50);
return
}execFuncs()
})();
doc.onreadystatechange=function(){if(doc.readyState=="complete"){doc.onreadystatechange=null;
execFuncs()
}}
}else{jindo.$Element._domready.list.push(func)
}};
if(!jindo.$Jindo.isUndefined(window)&&!(_j_ag.indexOf("IEMobile")==-1&&_j_ag.indexOf("Mobile")>-1&&_JINDO_IS_SP)){(new jindo.$Element(window)).attach("unload",function(e){jindo.$Element.eventManager.cleanUpAll()
})
}jindo.$Element._getTransition=function(){var hasTransition=false,sTransitionName="";
if(document.body.style.trasition){hasTransition=true;
sTransitionName="trasition"
}else{if(document.body.style.webkitTransition!==undefined){hasTransition=true;
sTransitionName="webkitTransition"
}else{if(document.body.style.OTransition!==undefined){hasTransition=true;
sTransitionName="OTransition"
}}}return(jindo.$Element._getTransition=function(){return{hasTransition:hasTransition,name:sTransitionName}
})()
};
jindo.$Element.prototype.appear=function(duration,callback){var oTransition=jindo.$Element._getTransition();
function appear(){var oArgs=jindo.$Jindo.checkVarType(arguments,{"4voi":[],"4num":["nDuration:Numeric"],"4fun":["nDuration:Numeric","fpCallback:Function+"]},"$Element#appear");
switch(oArgs+""){case"4voi":duration=0.3;
callback=function(){};
break;
case"4num":duration=oArgs.nDuration;
callback=function(){};
break;
case"4fun":duration=oArgs.nDuration;
callback=oArgs.fpCallback
}return[duration,callback]
}if(oTransition.hasTransition){jindo.$Element.prototype.appear=function(duration,callback){var aOption=appear.apply(this,_toArray(arguments));
duration=aOption[0];
callback=aOption[1];
var self=this;
var ele=this._element;
var name=oTransition.name;
var bindFunc=function(){self.show();
ele.style[name+"Property"]="";
ele.style[name+"Duration"]="";
ele.style[name+"TimingFunction"]="";
ele.style.opacity="";
callback.call(self,self);
ele.removeEventListener(name+"End",arguments.callee,false)
};
if(!this.visible()){ele.style.opacity=ele.style.opacity||0;
self.show()
}ele.addEventListener(name+"End",bindFunc,false);
ele.style[name+"Property"]="opacity";
ele.style[name+"Duration"]=duration+"s";
ele.style[name+"TimingFunction"]="linear";
setTimeout(function(){ele.style.opacity="1"
},1);
return this
}
}else{jindo.$Element.prototype.appear=function(duration,callback){var aOption=appear.apply(this,_toArray(arguments));
duration=aOption[0];
callback=aOption[1];
var self=this;
var op=this.opacity();
if(this._getCss(this._element,"display")=="none"){op=0
}if(op==1){return this
}try{clearTimeout(this._fade_timer)
}catch(e){}var step=(1-op)/((duration||0.3)*100);
var func=function(){op+=step;
self.opacity(op);
if(op>=1){self._element.style.filter="";
callback.call(self,self)
}else{self._fade_timer=setTimeout(func,10)
}};
this.show();
func();
return this
}
}return this.appear.apply(this,arguments)
};
jindo.$Element.prototype.disappear=function(duration,callback){var oTransition=jindo.$Element._getTransition();
function disappear(){var oArgs=jindo.$Jindo.checkVarType(arguments,{"4voi":[],"4num":["nDuration:Numeric"],"4fun":["nDuration:Numeric","fpCallback:Function+"]},"$Element#disappear");
switch(oArgs+""){case"4voi":duration=0.3;
callback=function(){};
break;
case"4num":duration=oArgs.nDuration;
callback=function(){};
break;
case"4fun":duration=oArgs.nDuration;
callback=oArgs.fpCallback
}return[duration,callback]
}if(oTransition.hasTransition){jindo.$Element.prototype.disappear=function(duration,callback){var aOption=disappear.apply(this,_toArray(arguments));
duration=aOption[0];
callback=aOption[1];
var self=this;
var name=oTransition.name;
var bindFunc=function(){self.hide();
ele.style[name+"Property"]="";
ele.style[name+"Duration"]="";
ele.style[name+"TimingFunction"]="";
ele.style.opacity="";
callback.call(self,self);
this.removeEventListener(name+"End",arguments.callee,false)
};
var ele=this._element;
ele.addEventListener(name+"End",bindFunc,false);
ele.style[name+"Property"]="opacity";
ele.style[name+"Duration"]=duration+"s";
ele.style[name+"TimingFunction"]="linear";
setTimeout(function(){ele.style.opacity="0"
},1);
return this
}
}else{jindo.$Element.prototype.disappear=function(duration,callback){var aOption=disappear.apply(this,_toArray(arguments));
duration=aOption[0];
callback=aOption[1];
var self=this;
var op=this.opacity();
if(op==0){return this
}try{clearTimeout(this._fade_timer)
}catch(e){}var step=op/((duration||0.3)*100);
var func=function(){op-=step;
self.opacity(op);
if(op<=0){self._element.style.display="none";
self.opacity(1);
callback.call(self,self)
}else{self._fade_timer=setTimeout(func,10)
}};
func();
return this
}
}return this.disappear.apply(this,arguments)
};
jindo.$Element.prototype.offset=function(nTop,nLeft){var oArgs=jindo.$Jindo.checkVarType(arguments,{g:[],s:["nTop:Numeric","nLeft:Numeric"]},"$Element#offset");
switch(oArgs+""){case"g":return this.offset_get();
case"s":return this.offset_set(oArgs.nTop,oArgs.nLeft)
}};
jindo.$Element.prototype.offset_set=function(nTop,nLeft){var oEl=this._element;
var oPhantom=null;
if(isNaN(parseFloat(this._getCss(oEl,"top"),10))){oEl.style.top="0px"
}if(isNaN(parseFloat(this._getCss(oEl,"left"),10))){oEl.style.left="0px"
}var oPos=this.offset_get();
var oGap={top:nTop-oPos.top,left:nLeft-oPos.left};
oEl.style.top=parseFloat(this._getCss(oEl,"top"),10)+oGap.top+"px";
oEl.style.left=parseFloat(this._getCss(oEl,"left"),10)+oGap.left+"px";
return this
};
jindo.$Element.prototype.offset_get=function(nTop,nLeft){var oEl=this._element;
var oPhantom=null;
var bSafari=_JINDO_IS_SP;
var bIE=_JINDO_IS_IE;
var nVer=0;
if(bIE){if(document.documentMode){nVer=document.documentMode
}else{nVer=navigator.userAgent.match(/(?:MSIE) ([0-9.]+)/)[1]
}}var fpSafari=function(oEl){var oPos={left:0,top:0};
for(var oParent=oEl,oOffsetParent=oParent.offsetParent;
oParent=oParent.parentNode;
){if(oParent.offsetParent){oPos.left-=oParent.scrollLeft;
oPos.top-=oParent.scrollTop
}if(oParent==oOffsetParent){oPos.left+=oEl.offsetLeft+oParent.clientLeft;
oPos.top+=oEl.offsetTop+oParent.clientTop;
if(!oParent.offsetParent){oPos.left+=oParent.offsetLeft;
oPos.top+=oParent.offsetTop
}oOffsetParent=oParent.offsetParent;
oEl=oParent
}}return oPos
};
var fpOthers=function(oEl){var oPos={left:0,top:0};
var oDoc=oEl.ownerDocument||oEl.document||document;
var oHtml=oDoc.documentElement;
var oBody=oDoc.body;
if(oEl.getBoundingClientRect){if(!oPhantom){var bHasFrameBorder=(window==top);
if(!bHasFrameBorder){try{bHasFrameBorder=(window.frameElement&&window.frameElement.frameBorder==1)
}catch(e){}}if((bIE&&nVer<8&&window.external)&&bHasFrameBorder){oPhantom={left:2,top:2};
oBase=null
}else{oPhantom={left:0,top:0}
}}var box=oEl.getBoundingClientRect();
if(oEl!==oHtml&&oEl!==oBody){oPos.left=box.left-oPhantom.left;
oPos.top=box.top-oPhantom.top;
oPos.left+=oHtml.scrollLeft||oBody.scrollLeft;
oPos.top+=oHtml.scrollTop||oBody.scrollTop
}}else{if(oDoc.getBoxObjectFor){var box=oDoc.getBoxObjectFor(oEl);
var vpBox=oDoc.getBoxObjectFor(oHtml||oBody);
oPos.left=box.screenX-vpBox.screenX;
oPos.top=box.screenY-vpBox.screenY
}else{for(var o=oEl;
o;
o=o.offsetParent){oPos.left+=o.offsetLeft;
oPos.top+=o.offsetTop
}for(var o=oEl.parentNode;
o;
o=o.parentNode){if(o.tagName=="BODY"){break
}if(o.tagName=="TR"){oPos.top+=2
}oPos.left-=o.scrollLeft;
oPos.top-=o.scrollTop
}}}return oPos
};
return(bSafari?fpSafari:fpOthers)(oEl)
};
jindo.$Element.prototype.evalScripts=function(sHTML){var oArgs=jindo.$Jindo.checkVarType(arguments,{"4str":["sHTML:String+"]},"$Element#evalScripts");
var aJS=[];
sHTML=sHTML.replace(new RegExp("<script(\\s[^>]+)*>(.*?)<\/script>","gi"),function(_1,_2,sPart){aJS.push(sPart);
return""
});
eval(aJS.join("\n"));
return this
};
jindo.$Element._common=function(oElement,sMethod){try{return jindo.$Element(oElement)._element
}catch(e){throw TypeError(e.message.replace(/\$Element/g,"$Element#"+sMethod).replace(/Element\.html/g,"Element.html#"+sMethod))
}};
jindo.$Element._prepend=function(oParent,oChild){var nodes=oParent.childNodes;
if(nodes.length>0){oParent.insertBefore(oChild,nodes[0])
}else{oParent.appendChild(oChild)
}};
jindo.$Element.prototype.append=function(oElement){this._element.appendChild(jindo.$Element._common(oElement,"append"));
return this
};
jindo.$Element.prototype.prepend=function(oElement){jindo.$Element._prepend(this._element,jindo.$Element._common(oElement,"prepend"));
return this
};
jindo.$Element.prototype.replace=function(oElement){oElement=jindo.$Element._common(oElement,"replace");
if(jindo.cssquery){jindo.cssquery.release()
}var e=this._element;
var oParentNode=e.parentNode;
if(oParentNode&&oParentNode.replaceChild){oParentNode.replaceChild(oElement,e);
return this
}var _o=oElement;
oParentNode.insertBefore(_o,e);
oParentNode.removeChild(e);
return this
};
jindo.$Element.prototype.appendTo=function(oElement){jindo.$Element._common(oElement,"appendTo").appendChild(this._element);
return this
};
jindo.$Element.prototype.prependTo=function(oElement){jindo.$Element._prepend(jindo.$Element._common(oElement,"prependTo"),this._element);
return this
};
jindo.$Element.prototype.before=function(oElement){var o=jindo.$Element._common(oElement,"before");
this._element.parentNode.insertBefore(o,this._element);
return this
};
jindo.$Element.prototype.after=function(oElement){oElement=jindo.$Element._common(oElement,"after");
this.before(oElement);
jindo.$Element(oElement).before(this);
return this
};
jindo.$Element.prototype.parent=function(pFunc,limit){var oArgs=jindo.$Jindo.checkVarType(arguments,{"4voi":[],"4fun":["fpFunc:Function+"],"4nul":["fpFunc:Null"],for_function_number:["fpFunc:Function+","nLimit:Numeric"],for_null_number:["fpFunc:Null","nLimit:Numeric"]},"$Element#parent");
var e=this._element;
switch(oArgs+""){case"4voi":return e.parentNode?jindo.$Element(e.parentNode):null;
case"4fun":case"4nul":limit=-1;
break;
case"for_function_number":case"for_null_number":if(oArgs.nLimit==0){limit=-1
}}var a=[],p=null;
while(e.parentNode&&limit--!=0){try{p=jindo.$Element(e.parentNode)
}catch(e){p=null
}if(e.parentNode==document.documentElement){break
}if(!pFunc||(pFunc&&pFunc.call(this,p))){a[a.length]=p
}e=e.parentNode
}return a
};
jindo.$Element.prototype.child=function(pFunc,limit){var oArgs=jindo.$Jindo.checkVarType(arguments,{"4voi":[],"4fun":["fpFunc:Function+"],"4nul":["fpFunc:Null"],for_function_number:["fpFunc:Function+","nLimit:Numeric"],for_null_number:["fpFunc:Null","nLimit:Numeric"]},"$Element#child");
var e=this._element;
var a=[],c=null,f=null;
switch(oArgs+""){case"4voi":var child=e.childNodes;
var filtered=[];
for(var i=0,l=child.length;
i<l;
i++){if(child[i].nodeType==1){try{filtered.push(jindo.$Element(child[i]))
}catch(e){filtered.push(null)
}}}return filtered;
case"4fun":case"4nul":limit=-1;
break;
case"for_function_number":case"for_null_number":if(oArgs.nLimit==0){limit=-1
}}(f=function(el,lim,context){var ch=null,o=null;
for(var i=0;
i<el.childNodes.length;
i++){ch=el.childNodes[i];
if(ch.nodeType!=1){continue
}try{o=jindo.$Element(el.childNodes[i])
}catch(e){o=null
}if(!pFunc||(pFunc&&pFunc.call(context,o))){a[a.length]=o
}if(lim!=0){f(el.childNodes[i],lim-1)
}}})(e,limit-1,this);
return a
};
jindo.$Element.prototype.prev=function(pFunc){var oArgs=jindo.$Jindo.checkVarType(arguments,{"4voi":[],"4fun":["fpFunc:Function+"],"4nul":["fpFunc:Null"]},"$Element#prev");
var e=this._element;
var a=[];
switch(oArgs+""){case"4voi":if(!e){return null
}do{e=e.previousSibling;
if(!e||e.nodeType!=1){continue
}try{if(e==null){return null
}return jindo.$Element(e)
}catch(e){return null
}}while(e);
try{if(e==null){return null
}return jindo.$Element(e)
}catch(e){return null
}case"4fun":case"4nul":if(!e){return a
}do{e=e.previousSibling;
if(!e||e.nodeType!=1){continue
}if(!pFunc||pFunc.call(this,e)){try{if(e==null){a[a.length]=null
}else{a[a.length]=jindo.$Element(e)
}}catch(e){a[a.length]=null
}}}while(e);
try{return a
}catch(e){return null
}}};
jindo.$Element.prototype.next=function(pFunc){var oArgs=jindo.$Jindo.checkVarType(arguments,{"4voi":[],"4fun":["fpFunc:Function+"],"4nul":["fpFunc:Null"]},"$Element#next");
var e=this._element;
var a=[];
switch(oArgs+""){case"4voi":if(!e){return null
}do{e=e.nextSibling;
if(!e||e.nodeType!=1){continue
}try{if(e==null){return null
}return jindo.$Element(e)
}catch(e){return null
}}while(e);
try{if(e==null){return null
}return jindo.$Element(e)
}catch(e){return null
}case"4fun":case"4nul":if(!e){return a
}do{e=e.nextSibling;
if(!e||e.nodeType!=1){continue
}if(!pFunc||pFunc.call(this,e)){try{if(e==null){a[a.length]=null
}else{a[a.length]=jindo.$Element(e)
}}catch(e){a[a.length]=null
}}}while(e);
try{return a
}catch(e){return null
}}};
jindo.$Element.prototype.first=function(){var el=this._element.firstElementChild||this._element.firstChild;
if(!el){return null
}while(el&&el.nodeType!=1){el=el.nextSibling
}try{return el?jindo.$Element(el):null
}catch(e){return null
}};
jindo.$Element.prototype.last=function(){var el=this._element.lastElementChild||this._element.lastChild;
if(!el){return null
}while(el&&el.nodeType!=1){el=el.previousSibling
}try{return el?jindo.$Element(el):null
}catch(e){return null
}};
jindo.$Element._contain=function(eParent,eChild){if(document.compareDocumentPosition){return !!(eParent.compareDocumentPosition(eChild)&16)
}else{if(eParent.contains){return(eParent!==eChild)&&(eParent.contains?eParent.contains(eChild):true)
}else{if(document.body.contains){if(eParent===(eChild.ownerDocument||eChild.document)&&eChild.tagName&&eChild.tagName.toUpperCase()==="BODY"){return true
}if(eParent.nodeType===9&&eParent!==eChild){eParent=eParent.body
}try{return(eParent!==eChild)&&(eParent.contains?eParent.contains(eChild):true)
}catch(e){return false
}}else{var e=eParent;
var el=eChild;
while(e&&e.parentNode){e=e.parentNode;
if(e==el){return true
}}return false
}}}};
jindo.$Element.prototype.isChildOf=function(element){try{return jindo.$Element._contain(jindo.$Element(element)._element,this._element)
}catch(e){return false
}};
jindo.$Element.prototype.isParentOf=function(element){try{return jindo.$Element._contain(this._element,jindo.$Element(element)._element)
}catch(e){return false
}};
jindo.$Element.prototype.isEqual=function(element){try{return(this._element===jindo.$Element(element)._element)
}catch(e){return false
}};
jindo.$Element.prototype.fireEvent=function(sEvent,oProps){var _oParam={"4str":[jindo.$Jindo._F("sEvent:String+")],"4obj":["sEvent:String+","oProps:Hash+"]};
function IE(sEvent,oProps){var oArgs=jindo.$Jindo.checkVarType(arguments,_oParam,"$Element#fireEvent");
sEvent=(sEvent+"").toLowerCase();
var oEvent=document.createEventObject();
switch(oArgs+""){case"4obj":oProps=oArgs.oProps;
for(k in oProps){if(oProps.hasOwnProperty(k)){oEvent[k]=oProps[k]
}}oEvent.button=(oProps.left?1:0)+(oProps.middle?4:0)+(oProps.right?2:0);
oEvent.relatedTarget=oProps.relatedElement||null
}var ele=this._element;
if(this.tag=="input"&&sEvent=="click"){if(ele.type=="checkbox"){ele.checked=(!ele.checked)
}else{if(ele.type=="radio"){ele.checked=true
}}}this._element.fireEvent("on"+sEvent,oEvent);
return this
}function DOM2(sEvent,oProps){var oArgs=jindo.$Jindo.checkVarType(arguments,_oParam,"$Element#fireEvent");
var sType="HTMLEvents";
sEvent=(sEvent+"").toLowerCase();
if(sEvent=="click"||sEvent.indexOf("mouse")==0){sType="MouseEvent";
if(sEvent=="mousewheel"){sEvent="dommousescroll"
}}else{if(sEvent.indexOf("key")==0){sType="KeyboardEvent"
}}var evt;
switch(oArgs+""){case"4obj":oProps=oArgs.oProps;
oProps.button=0+(oProps.middle?1:0)+(oProps.right?2:0);
oProps.ctrl=oProps.ctrl||false;
oProps.alt=oProps.alt||false;
oProps.shift=oProps.shift||false;
oProps.meta=oProps.meta||false;
switch(sType){case"MouseEvent":evt=document.createEvent(sType);
evt.initMouseEvent(sEvent,true,true,null,oProps.detail||0,oProps.screenX||0,oProps.screenY||0,oProps.clientX||0,oProps.clientY||0,oProps.ctrl,oProps.alt,oProps.shift,oProps.meta,oProps.button,oProps.relatedElement||null);
break;
case"KeyboardEvent":if(window.KeyEvent){evt=document.createEvent("KeyEvents");
evt.initKeyEvent(sEvent,true,true,window,oProps.ctrl,oProps.alt,oProps.shift,oProps.meta,oProps.keyCode,oProps.keyCode)
}else{try{evt=document.createEvent("Events")
}catch(e){evt=document.createEvent("UIEvents")
}finally{evt.initEvent(sEvent,true,true);
evt.ctrlKey=oProps.ctrl;
evt.altKey=oProps.alt;
evt.shiftKey=oProps.shift;
evt.metaKey=oProps.meta;
evt.keyCode=oProps.keyCode;
evt.which=oProps.keyCode
}}break;
default:evt=document.createEvent(sType);
evt.initEvent(sEvent,true,true)
}break;
case"4str":evt=document.createEvent(sType);
evt.initEvent(sEvent,true,true)
}this._element.dispatchEvent(evt);
return this
}jindo.$Element.prototype.fireEvent=(document.dispatchEvent!==undefined)?DOM2:IE;
return this.fireEvent.apply(this,_toArray(arguments))
};
jindo.$Element.prototype.empty=function(){if(jindo.cssquery){jindo.cssquery.release()
}this.html("");
return this
};
jindo.$Element.prototype.remove=function(oChild){if(jindo.cssquery){jindo.cssquery.release()
}var ___element=jindo.$Element;
___element(___element._common(oChild,"remove")).leave();
return this
};
jindo.$Element.prototype.leave=function(){var e=this._element;
if(e.parentNode){if(jindo.cssquery){jindo.cssquery.release()
}e.parentNode.removeChild(e)
}if(this._element.__jindo__id){jindo.$Element.eventManager.cleanUpUsingKey(this._element.__jindo__id,true)
}return this
};
jindo.$Element.prototype.wrap=function(wrapper){var e=this._element;
wrapper=jindo.$Element._common(wrapper,"wrap");
if(e.parentNode){e.parentNode.insertBefore(wrapper,e)
}wrapper.appendChild(e);
return this
};
jindo.$Element.prototype.ellipsis=function(stringTail){var oArgs=jindo.$Jindo.checkVarType(arguments,{"4voi":[],"4str":["stringTail:String+"]},"$Element#ellipsis");
stringTail=stringTail||"...";
var txt=this.text();
var len=txt.length;
var padding=parseInt(this._getCss(this._element,"paddingTop"),10)+parseInt(this._getCss(this._element,"paddingBottom"),10);
var cur_h=this._element.offsetHeight-padding;
var i=0;
var h=this.text("A")._element.offsetHeight-padding;
if(cur_h<h*1.5){this.text(txt);
return this
}cur_h=h;
while(cur_h<h*1.5){i+=Math.max(Math.ceil((len-i)/2),1);
cur_h=this.text(txt.substring(0,i)+stringTail)._element.offsetHeight-padding
}while(cur_h>h*1.5){i--;
cur_h=this.text(txt.substring(0,i)+stringTail)._element.offsetHeight-padding
}return this
};
jindo.$Element.prototype.indexOf=function(element){try{var e=jindo.$Element(element)._element;
var n=this._element.childNodes;
var c=0;
var l=n.length;
for(var i=0;
i<l;
i++){if(n[i].nodeType!=1){continue
}if(n[i]===e){return c
}c++
}}catch(e){}return -1
};
jindo.$Element.prototype.queryAll=function(sSelector){var oArgs=jindo.$Jindo.checkVarType(arguments,{"4str":["sSelector:String+"]},"$Element#queryAll");
var arrEle=jindo.cssquery(sSelector,this._element);
var returnArr=[];
for(var i=0,l=arrEle.length;
i<l;
i++){returnArr.push(jindo.$Element(arrEle[i]))
}return returnArr
};
jindo.$Element.prototype.query=function(sSelector){var oArgs=jindo.$Jindo.checkVarType(arguments,{"4str":["sSelector:String+"]},"$Element#query");
var ele=jindo.cssquery.getSingle(sSelector,this._element);
return ele===null?ele:jindo.$Element(ele)
};
jindo.$Element.prototype.test=function(sSelector){var oArgs=jindo.$Jindo.checkVarType(arguments,{"4str":["sSelector:String+"]},"$Element#test");
return jindo.cssquery.test(this._element,sSelector)
};
jindo.$Element.prototype.xpathAll=function(sXPath){var oArgs=jindo.$Jindo.checkVarType(arguments,{"4str":["sXPath:String+"]},"$Element#xpathAll");
var arrEle=jindo.cssquery.xpath(sXPath,this._element);
var returnArr=[];
for(var i=0,l=arrEle.length;
i<l;
i++){returnArr.push(jindo.$Element(arrEle[i]))
}return returnArr
};
jindo.$Element.insertAdjacentHTML=function(ins,html,insertType,type,fn,sType){var aArg=[html];
aArg.callee=arguments.callee;
var oArgs=jindo.$Jindo.checkVarType(aArg,{"4str":["sHTML:String+"]},"$Element#"+sType);
var _ele=ins._element;
html=html+"";
if(_ele.insertAdjacentHTML&&!(/^<(option|tr|td|th|col)(?:.*?)>/.test(html.replace(/^(\s|　)+|(\s|　)+$/g,"").toLowerCase()))){_ele.insertAdjacentHTML(insertType,html)
}else{var oDoc=_ele.ownerDocument||_ele.document||document;
var fragment=oDoc.createDocumentFragment();
var defaultElement;
var sTag=html.replace(/^(\s|　)+|(\s|　)+$/g,"");
var oParentTag={option:"select",tr:"tbody",thead:"table",tbody:"table",col:"table",td:"tr",th:"tr",div:"div"};
var aMatch=/^\<(option|tr|thead|tbody|td|th|col)(?:.*?)\>/i.exec(sTag);
var sChild=aMatch===null?"div":aMatch[1].toLowerCase();
var sParent=oParentTag[sChild];
defaultElement=jindo._createEle(sParent,sTag,oDoc,true);
var scripts=defaultElement.getElementsByTagName("script");
for(var i=0,l=scripts.length;
i<l;
i++){scripts[i].parentNode.removeChild(scripts[i])
}while(defaultElement[type]){fragment.appendChild(defaultElement[type])
}fn(fragment.cloneNode(true))
}return ins
};
jindo.$Element.prototype.appendHTML=function(sHTML){return jindo.$Element.insertAdjacentHTML(this,sHTML,"beforeEnd","firstChild",jindo.$Fn(function(oEle){var ele=this._element;
if(ele.tagName.toLowerCase()==="table"){var nodes=ele.childNodes;
for(var i=0,l=nodes.length;
i<l;
i++){if(nodes[i].nodeType==1){ele=nodes[i];
break
}}}ele.appendChild(oEle)
},this).bind(),"appendHTML")
};
jindo.$Element.prototype.prependHTML=function(sHTML){var ___element=jindo.$Element;
return ___element.insertAdjacentHTML(this,sHTML,"afterBegin","firstChild",jindo.$Fn(function(oEle){var ele=this._element;
if(ele.tagName.toLowerCase()==="table"){var nodes=ele.childNodes;
for(var i=0,l=nodes.length;
i<l;
i++){if(nodes[i].nodeType==1){ele=nodes[i];
break
}}}___element._prepend(ele,oEle)
},this).bind(),"prependHTML")
};
jindo.$Element.prototype.beforeHTML=function(sHTML){return jindo.$Element.insertAdjacentHTML(this,sHTML,"beforeBegin","firstChild",jindo.$Fn(function(oEle){this._element.parentNode.insertBefore(oEle,this._element)
},this).bind(),"beforeHTML")
};
jindo.$Element.prototype.afterHTML=function(sHTML){return jindo.$Element.insertAdjacentHTML(this,sHTML,"afterEnd","firstChild",jindo.$Fn(function(oEle){this._element.parentNode.insertBefore(oEle,this._element.nextSibling)
},this).bind(),"afterHTML")
};
jindo.$Element.prototype.hasEventListener=function(sEvent){var oArgs=jindo.$Jindo.checkVarType(arguments,{"4str":["sEvent:String+"]},"$Element#hasEventListener");
if(this._key){return !!jindo.$Element.eventManager.hasEvent(this._key,oArgs.sEvent)
}return false
};
jindo.$Element.prototype.preventTapHighlight=function(bFlag){if(_JINDO_IS_MO){var sClassName="no_tap_highlight"+new Date().getTime();
var elStyleTag=document.createElement("style");
var elHTML=document.getElementsByTagName("html")[0];
elStyleTag.type="text/css";
elHTML.insertBefore(elStyleTag,elHTML.firstChild);
var oSheet=elStyleTag.sheet||elStyleTag.styleSheet;
oSheet.insertRule("."+sClassName+" { -webkit-tap-highlight-color: rgba(0,0,0,0); }",0);
oSheet.insertRule("."+sClassName+" * { -webkit-tap-highlight-color: rgba(0,0,0,.25); }",0);
jindo.$Element.prototype.preventTapHighlight=function(bFlag){return this[bFlag?"addClass":"removeClass"](sClassName)
}
}else{jindo.$Element.prototype.preventTapHighlight=function(bFlag){return this
}
}return this.preventTapHighlight.apply(this,_toArray(arguments))
};
jindo.$Element.prototype.data=function(sKey,vValue){var oType={g:["sKey:String+"],s4var:["sKey:String+","vValue:Variant"],s4obj:["oObj:Hash+"]};
if(document.body.dataset){jindo.$Element.prototype.data=function(sKey,vValue){var sToStr,oArgs=jindo.$Jindo.checkVarType(arguments,oType,"$Element#data");
var isNull=jindo.$Jindo.isNull;
switch(oArgs+""){case"g":var sDateSet=this._element.dataset[sKey];
return sDateSet?window.JSON.parse(sDateSet):null;
case"s4var":var oData;
if(isNull(vValue)){delete this._element.dataset[sKey];
return this
}else{oData={};
oData[sKey]=vValue;
sKey=oData
}case"s4obj":for(var i in sKey){if(isNull(sKey[i])){delete this._element.dataset[i]
}else{sToStr=jindo.$Json._oldToString(sKey[i]);
if(sToStr){this._element.dataset[i]=sToStr
}}}return this
}}
}else{jindo.$Element.prototype.data=function(sKey,vValue){var sToStr,oArgs=jindo.$Jindo.checkVarType(arguments,oType,"$Element#data");
var isNull=jindo.$Jindo.isNull;
switch(oArgs+""){case"g":var sVal=this._element.getAttribute("data-"+sKey);
return sVal?eval("("+this._element.getAttribute("data-"+sKey)+")"):null;
case"s4var":var oData;
if(isNull(vValue)){this._element.removeAttribute("data-"+sKey);
return this
}else{oData={};
oData[sKey]=vValue;
sKey=oData
}case"s4obj":for(var i in sKey){if(isNull(sKey[i])){this._element.removeAttribute("data-"+sKey)
}else{sToStr=jindo.$Json._oldToString(sKey[i]);
if(sToStr){this._element.setAttribute("data-"+i,sToStr)
}}}return this
}}
}return this.data.apply(this,_toArray(arguments))
};
jindo.$Fn=function(func,thisObject){var cl=arguments.callee;
if(func instanceof cl){return func
}if(!(this instanceof cl)){try{jindo.$Jindo._maxWarn(arguments.length,2,"$Fn");
return new cl(func,thisObject)
}catch(e){if(e instanceof TypeError){return null
}throw e
}}var oArgs=jindo.$Jindo.checkVarType(arguments,{"4fun":["func:Function+"],"4fun2":["func:Function+","thisObject:Variant"],"4str":["func:String+","thisObject:String+"]},"$Fn");
this._tmpElm=null;
this._key=null;
switch(oArgs+""){case"4str":this._func=eval("false||function("+func+"){"+thisObject+"}");
break;
case"4fun":case"4fun2":this._func=func;
this._this=thisObject
}};
jindo.$Fn._commonPram=function(oPram,sMethod){return jindo.$Jindo.checkVarType(oPram,{"4ele":["eElement:Element+","sEvent:String+"],"4ele2":["eElement:Element+","sEvent:String+","bUseCapture:Boolean"],"4str":["eElement:String+","sEvent:String+"],"4str2":["eElement:String+","sEvent:String+","bUseCapture:Boolean"],"4arr":["aElement:Array+","sEvent:String+"],"4arr2":["aElement:Array+","sEvent:String+","bUseCapture:Boolean"],"4doc":["eElement:Document+","sEvent:String+"],"4win":["eElement:Window+","sEvent:String+"],"4doc2":["eElement:Document+","sEvent:String+","bUseCapture:Boolean"],"4win2":["eElement:Window+","sEvent:String+","bUseCapture:Boolean"]},sMethod)
};
jindo.$Fn.prototype.$value=function(){return this._func
};
jindo.$Fn.prototype.bind=function(){var a=_slice.call(arguments,0);
var f=this._func;
var t=this._this||this;
var b=function(){var args=_slice.call(arguments,0);
if(a.length){args=a.concat(args)
}return f.apply(t,args)
};
return b
};
jindo.$Fn.prototype.attach=function(oElement,sEvent,bUseCapture){var oArgs=jindo.$Fn._commonPram(arguments,"$Fn#attach");
var fn=null,l,ev=sEvent,el=oElement,ua=_j_ag;
if(bUseCapture!==true){bUseCapture=false
}this._bUseCapture=bUseCapture;
switch(oArgs+""){case"4arr":case"4arr2":var el=oArgs.aElement;
var ev=oArgs.sEvent;
for(var i=0,l=el.length;
i<l;
i++){this.attach(el[i],ev,!!bUseCapture)
}return this
}fn=this._bind=this._bind?this._bind:this.bind();
jindo.$Element(el).attach(ev,fn);
return this
};
jindo.$Fn.prototype.detach=function(oElement,sEvent,bUseCapture){var oArgs=jindo.$Fn._commonPram(arguments,"$Fn#detach");
var fn=null,l,el=oElement,ev=sEvent,ua=_j_ag;
switch(oArgs+""){case"4arr":case"4arr2":var el=oArgs.aElement;
var ev=oArgs.sEvent;
for(var i=0,l=el.length;
i<l;
i++){this.detach(el[i],ev,!!bUseCapture)
}return this
}fn=this._bind=this._bind?this._bind:this.bind();
jindo.$Element(oArgs.eElement).detach(oArgs.sEvent,fn);
return this
};
jindo.$Fn.prototype.delay=function(nSec,args){var oArgs=jindo.$Jindo.checkVarType(arguments,{"4num":["nSec:Numeric"],"4arr":["nSec:Numeric","args:Array+"]},"$Fn#delay");
switch(oArgs+""){case"4num":args=args||[];
break;
case"4arr":args=oArgs.args
}this._delayKey=setTimeout(this.bind.apply(this,args),nSec*1000);
return this
};
jindo.$Fn.prototype.setInterval=function(nSec,args){var oArgs=jindo.$Jindo.checkVarType(arguments,{"4num":["nSec:Numeric"],"4arr":["nSec:Numeric","args:Array+"]},"$Fn#setInterval");
switch(oArgs+""){case"4num":args=args||[];
break;
case"4arr":args=oArgs.args
}this._repeatKey=setInterval(this.bind.apply(this,args),nSec*1000);
return this
};
jindo.$Fn.prototype.repeat=jindo.$Fn.prototype.setInterval;
jindo.$Fn.prototype.stopDelay=function(){if(this._delayKey!==undefined){window.clearTimeout(this._delayKey);
delete this._delayKey
}return this
};
jindo.$Fn.prototype.stopRepeat=function(){if(this._repeatKey!==undefined){window.clearInterval(this._repeatKey);
delete this._repeatKey
}return this
};
jindo.$Event=(function(isMobile){if(isMobile){return function(e){var cl=arguments.callee;
if(e instanceof cl){return e
}if(!(this instanceof cl)){return new cl(e)
}this._event=this._posEvent=e;
this._globalEvent=window.event;
this.type=e.type.toLowerCase();
if(this.type=="dommousescroll"){this.type="mousewheel"
}else{if(this.type=="domcontentloaded"){this.type="domready"
}}this.isTouch=false;
if(this.type.indexOf("touch")>-1){this._posEvent=e.changedTouches[0];
this.isTouch=true
}this.canceled=false;
this.element=e.target||e.srcElement;
this.currentElement=e.currentTarget;
this.relatedElement=null;
if(!jindo.$Jindo.isUndefined(e.relatedTarget)){this.relatedElement=e.relatedTarget
}else{if(e.fromElement&&e.toElement){this.relatedElement=e[(this.type=="mouseout")?"toElement":"fromElement"]
}}}
}else{return function(e){var cl=arguments.callee;
if(e instanceof cl){return e
}if(!(this instanceof cl)){return new cl(e)
}if(e===undefined){e=window.event
}if(e===window.event&&document.createEventObject){e=document.createEventObject(e)
}this.isTouch=false;
this._event=this._posEvent=e;
this._globalEvent=window.event;
this.type=e.type.toLowerCase();
if(this.type=="dommousescroll"){this.type="mousewheel"
}else{if(this.type=="domcontentloaded"){this.type="domready"
}}this.canceled=false;
this.element=e.target||e.srcElement;
this.currentElement=e.currentTarget;
this.relatedElement=null;
if(e.relatedTarget!==undefined){this.relatedElement=e.relatedTarget
}else{if(e.fromElement&&e.toElement){this.relatedElement=e[(this.type=="mouseout")?"toElement":"fromElement"]
}}}
}})(_JINDO_IS_MO);
jindo.$Event.prototype.mouse=function(bIsScrollbar){jindo.$Jindo.checkVarType(arguments,{voi:[],bol:["bIsScrollbar:Boolean"]});
var e=this._event;
var ele=this.element;
var delta=0;
var left=false,mid=false,right=false;
var left=e.which?e.button==0:!!(e.button&1);
var mid=e.which?e.button==1:!!(e.button&4);
var right=e.which?e.button==2:!!(e.button&2);
var ret={};
if(e.wheelDelta){delta=e.wheelDelta/120
}else{if(e.detail){delta=-e.detail/3
}}var scrollbar;
if(bIsScrollbar){scrollbar=_event_isScroll(ele,e)
}ret={delta:delta,left:left,middle:mid,right:right,scrollbar:scrollbar};
this.mouse=function(bIsScrollbar){if(bIsScrollbar){ret.scrollbar=_event_isScroll(this.element,this._event);
this.mouse=function(){return ret
}
}return ret
};
return ret
};
function _event_getScrollbarSize(){var oScrollbarSize={x:0,y:0};
var elDummy=jindo.$(['<div style="',["overflow:scroll","width:100px","height:100px","position:absolute","left:-1000px","border:0","margin:0","padding:0"].join(" !important;"),' !important;">'].join(""));
document.body.insertBefore(elDummy,document.body.firstChild);
oScrollbarSize={x:elDummy.offsetWidth-elDummy.scrollWidth,y:elDummy.offsetHeight-elDummy.scrollHeight};
document.body.removeChild(elDummy);
elDummy=null;
_event_getScrollbarSize=function(){return oScrollbarSize
};
return oScrollbarSize
}function _event_isScroll(ele,e){if(ele.componentFromPoint){return/(scrollbar|outside)/.test(ele.componentFromPoint(e.clientX,e.clientY))
}if(_JINDO_IS_FF){try{var name=e.originalTarget.localName;
return(name==="thumb"||name==="slider"||name==="scrollcorner"||name==="scrollbarbutton")
}catch(ex){return true
}}var sDisplay=jindo.$Element(ele).css("display");
if(sDisplay==="inline"){return false
}var oPos={x:e.offsetX||e.layerX||0,y:e.offsetY||e.layerY||0};
if(_JINDO_IS_WK){oPos.x-=ele.clientLeft;
oPos.y-=ele.clientTop
}var oScrollbarSize=_event_getScrollbarSize();
var oScrollPos={x:[ele.clientWidth,ele.clientWidth+oScrollbarSize.x],y:[ele.clientHeight,ele.clientHeight+oScrollbarSize.y]};
return((oScrollPos.x[0]<=oPos.x&&oPos.x<=oScrollPos.x[1])||(oScrollPos.y[0]<=oPos.y&&oPos.y<=oScrollPos.y[1]))
}jindo.$Event.prototype.key=function(){var e=this._event;
var k=e.keyCode||e.charCode;
var ret={keyCode:k,alt:e.altKey,ctrl:e.ctrlKey,meta:e.metaKey,shift:e.shiftKey,up:(k==38),down:(k==40),left:(k==37),right:(k==39),enter:(k==13),esc:(k==27)};
this.key=function(){return ret
};
return ret
};
jindo.$Event.prototype.pos=function(bGetOffset){jindo.$Jindo.checkVarType(arguments,{voi:[],bol:["bGetOffset:Boolean"]});
var e=this._posEvent;
var doc=(this.element.ownerDocument||document);
var b=doc.body;
var de=doc.documentElement;
var pos=[b.scrollLeft||de.scrollLeft,b.scrollTop||de.scrollTop];
var ret={clientX:e.clientX,clientY:e.clientY,pageX:"pageX" in e?e.pageX:e.clientX+pos[0]-b.clientLeft,pageY:"pageY" in e?e.pageY:e.clientY+pos[1]-b.clientTop,layerX:"offsetX" in e?e.offsetX:e.layerX-1,layerY:"offsetY" in e?e.offsetY:e.layerY-1};
if(bGetOffset&&jindo.$Element){var offset=jindo.$Element(this.element).offset();
ret.offsetX=ret.pageX-offset.left;
ret.offsetY=ret.pageY-offset.top
}return ret
};
jindo.$Event.prototype.stop=function(nCancel){jindo.$Jindo.checkVarType(arguments,{voi:[],num:["nCancel:Numeric"]});
nCancel=nCancel||jindo.$Event.CANCEL_ALL;
var e=(window.event&&window.event==this._globalEvent)?this._globalEvent:this._event;
var b=!!(nCancel&jindo.$Event.CANCEL_BUBBLE);
var d=!!(nCancel&jindo.$Event.CANCEL_DEFAULT);
this.canceled=true;
if(e.preventDefault!==undefined&&d){e.preventDefault()
}if(e.stopPropagation!==undefined&&b){e.stopPropagation()
}if(d){e.returnValue=false
}if(b){e.cancelBubble=true
}return this
};
jindo.$Event.prototype.stopDefault=function(){return this.stop(jindo.$Event.CANCEL_DEFAULT)
};
jindo.$Event.prototype.stopBubble=function(){return this.stop(jindo.$Event.CANCEL_BUBBLE)
};
jindo.$Event.CANCEL_BUBBLE=1;
jindo.$Event.CANCEL_DEFAULT=2;
jindo.$Event.CANCEL_ALL=3;
jindo.$Event.prototype.$value=function(){return this._event
};
(function(aType){var sTouches="Touch";
for(var i=0,l=aType.length;
i<l;
i++){jindo.$Event.prototype[aType[i]+sTouches]=(function(sType){return function(nIndex){if(this.isTouch){var oRet=[];
var ev=this._event[sType+"es"];
var l=ev.length;
var e;
for(var i=0;
i<l;
i++){e=ev[i];
oRet.push({id:e.identifier,event:this,element:e.target,_posEvent:e,pos:jindo.$Event.prototype.pos})
}this[sType]=function(nIndex){var oArgs=jindo.$Jindo.checkVarType(arguments,{"void":[],"4num":["nIndex:Numeric"]},"$Event#"+sType);
if(oArgs+""=="void"){return oRet
}return oRet[nIndex]
}
}else{this[sType]=function(nIndex){throw new jindo.$Error(jindo.$Except.NOT_SUPPORT_METHOD,"$Event#"+sType)
}
}return this[sType].apply(this,_toArray(arguments))
}
})(aType[0]+sTouches)
}})(["changed","target"]);
jindo.$ElementList=function(els){var cl=arguments.callee;
if(els instanceof cl){return els
}if(!(this instanceof cl)){try{return new cl(els)
}catch(e){if(e instanceof TypeError){return null
}throw e
}}var oArgs=jindo.$Jindo.checkVarType(arguments,{"4arr":["aEle:Array+"],"4str":["sCssQuery:String+"],"4nul":["oEle:Null"],"4und":["oEle:Undefined"]},"$ElementList");
switch(oArgs+""){case"4arr":els=oArgs.aEle;
break;
case"4str":els=jindo.cssquery(oArgs.sCssQuery);
break;
case"4nul":case"4und":els=[]
}this._elements=[];
for(var i=0,l=els.length;
i<l;
i++){this._elements.push(jindo.$Element(els[i]))
}};
(function(proto){var setters=["show","hide","toggle","addClass","removeClass","toggleClass","fireEvent","leave","empty","className","width","height","text","html","css","attr"];
for(var i=0,l=setters.length;
i<l;
i++){var name=setters[i];
if(jindo.$Element.prototype[name]){proto[setters[i]]=(function(name){return function(){try{var args=[];
for(var j=0,m=arguments.length;
j<m;
j++){args.push(arguments[j])
}for(var k=0,n=this._elements.length;
k<n;
k++){this._elements[k][name].apply(this._elements[k],args)
}return this
}catch(e){throw TypeError(e.message.replace(/\$Element/g,"$Elementlist#"+name).replace(/Element\.html/g,"Elementlist.html#"+name))
}}
})(setters[i])
}}var setters2=["appear","disappear"];
for(var i=0,l=setters2.length;
i<l;
i++){if(jindo.$Element.prototype[name]){proto[setters2[i]]=(function(name){return function(duration,callback){try{var self=this;
for(var j=0,m=this._elements.length;
j<m;
j++){if(j==m-1){this._elements[j][name](duration,function(){callback(self)
})
}else{this._elements[j][name](duration)
}}return this
}catch(e){throw TypeError(e.message.replace(/\$Element/g,"$Elementlist#"+name).replace(/Element\.html/g,"Elementlist.html#"+name))
}}
})(setters2[i])
}}})(jindo.$ElementList.prototype);
jindo.$ElementList.prototype.get=function(idx){var oArgs=jindo.$Jindo.checkVarType(arguments,{"4num":["nIdx:Numeric"]},"$ElementList#get");
return this._elements[idx]
};
jindo.$ElementList.prototype.getFirst=function(){return this._elements[0]
};
jindo.$ElementList.prototype.getLast=function(){return this._elements[Math.max(this._elements.length-1,0)]
};
jindo.$ElementList.prototype.length=function(nLen,oValue){var oArgs=jindo.$Jindo.checkVarType(arguments,{"4voi":[],"4num":[jindo.$Jindo._F("nLen:Numeric")],"4var":["nLen:Numeric","oValue:Variant"]},"$ElementList#length");
var waEle=jindo.$A(this._elements);
try{return waEle.length.apply(waEle,_toArray(arguments))
}catch(e){throw TypeError(e.message.replace(/\$A/g,"$Elementlist#length").replace(/A\.html/g,"Elementlist.html#length"))
}};
jindo.$ElementList.prototype.$value=function(){return this._elements
};
jindo.$S=function(str){var cl=arguments.callee;
if(str instanceof cl){return str
}if(!(this instanceof cl)){try{jindo.$Jindo._maxWarn(arguments.length,1,"$Json");
return new cl(str||"")
}catch(e){if(e instanceof TypeError){return null
}throw e
}}var oArgs=jindo.$Jindo.checkVarType(arguments,{"4str":["str:String+"]},"$S");
this._str=str+""
};
jindo.$S.prototype.$value=function(){return this._str
};
jindo.$S.prototype.toString=jindo.$S.prototype.$value;
jindo.$S.prototype.trim=function(){if("".trim){jindo.$S.prototype.trim=function(){return jindo.$S(this._str.trim())
}
}else{jindo.$S.prototype.trim=function(){return jindo.$S(this._str.replace(/^(\s|　)+/g,"").replace(/(\s|　)+$/g,""))
}
}return jindo.$S(this.trim())
};
jindo.$S.prototype.escapeHTML=function(){var entities={'"':"quot","&":"amp","<":"lt",">":"gt","'":"#39"};
var s=this._str.replace(/[<>&"']/g,function(m0){return entities[m0]?"&"+entities[m0]+";":m0
});
return jindo.$S(s)
};
jindo.$S.prototype.stripTags=function(){return jindo.$S(this._str.replace(/<\/?(?:h[1-5]|[a-z]+(?:\:[a-z]+)?)[^>]*>/ig,""))
};
jindo.$S.prototype.times=function(nTimes){var oArgs=jindo.$Jindo.checkVarType(arguments,{"4str":["nTimes:Numeric"]},"$S#times");
if(!oArgs){return this
}return jindo.$S(Array(oArgs.nTimes+1).join(this._str))
};
jindo.$S.prototype.unescapeHTML=function(){var entities={quot:'"',amp:"&",lt:"<",gt:">","#39":"'"};
var s=this._str.replace(/&([a-z]+|#[0-9]+);/g,function(m0,m1){return entities[m1]?entities[m1]:m0
});
return jindo.$S(s)
};
jindo.$S.prototype.escape=function(){var s=this._str.replace(/([\u0080-\uFFFF]+)|[\n\r\t"'\\]/g,function(m0,m1,_){if(m1){return escape(m1).replace(/%/g,"\\")
}return(_={"\n":"\\n","\r":"\\r","\t":"\\t"})[m0]?_[m0]:"\\"+m0
});
return jindo.$S(s)
};
jindo.$S.prototype.bytes=function(vConfig){var oArgs=jindo.$Jindo.checkVarType(arguments,{"4voi":[],"4num":["nConfig:Numeric"],"4obj":["nConfig:Hash+"]},"$S#bytes");
var code=0,bytes=0,i=0,len=this._str.length;
var charset=((document.charset||document.characterSet||document.defaultCharset)+"");
var cut,nBytes;
switch(oArgs+""){case"4voi":cut=false;
break;
case"4num":cut=true;
nBytes=vConfig;
break;
case"4obj":charset=vConfig.charset||charset;
nBytes=vConfig.size||false;
cut=!!nBytes;
break
}if(charset.toLowerCase()=="utf-8"){for(i=0;
i<len;
i++){code=this._str.charCodeAt(i);
if(code<128){bytes+=1
}else{if(code<2048){bytes+=2
}else{if(code<65536){bytes+=3
}else{bytes+=4
}}}if(cut&&bytes>nBytes){this._str=this._str.substr(0,i);
break
}}}else{for(i=0;
i<len;
i++){bytes+=(this._str.charCodeAt(i)>128)?2:1;
if(cut&&bytes>nBytes){this._str=this._str.substr(0,i);
break
}}}return cut?this:bytes
};
jindo.$S.prototype.parseString=function(){if(this._str==""){return{}
}var str=this._str.split(/&/g),pos,key,val,buf={},isescape=false;
for(var i=0;
i<str.length;
i++){key=str[i].substring(0,pos=str[i].indexOf("=")),isescape=false;
try{val=decodeURIComponent(str[i].substring(pos+1))
}catch(e){isescape=true;
val=decodeURIComponent(unescape(str[i].substring(pos+1)))
}if(key.substr(key.length-2,2)=="[]"){key=key.substring(0,key.length-2);
if(jindo.$Jindo.isUndefined(buf[key])){buf[key]=[]
}buf[key][buf[key].length]=isescape?escape(val):val
}else{buf[key]=isescape?escape(val):val
}}return buf
};
jindo.$S.prototype.escapeRegex=function(){var s=this._str;
var r=/([\?\.\*\+\-\/\(\)\{\}\[\]\:\!\^\$\\\|])/g;
return jindo.$S(s.replace(r,"\\$1"))
};
jindo.$S.prototype.format=function(){var args=arguments;
var idx=0;
var s=this._str.replace(/%([ 0])?(-)?([1-9][0-9]*)?([bcdsoxX])/g,function(m0,m1,m2,m3,m4){var a=args[idx++];
var ret="",pad="";
m3=m3?+m3:0;
if(m4=="s"){ret=a+""
}else{if(" bcdoxX".indexOf(m4)>0){if(!jindo.$Jindo.isNumeric(a)){return""
}ret=(m4=="c")?String.fromCharCode(a):a.toString(({b:2,d:10,o:8,x:16,X:16})[m4]);
if(" X".indexOf(m4)>0){ret=ret.toUpperCase()
}}}if(ret.length<m3){pad=jindo.$S(m1||" ").times(m3-ret.length)._str
}(m2=="-")?(ret+=pad):(ret=pad+ret);
return ret
});
return jindo.$S(s)
};
jindo.$Document=function(el){var cl=arguments.callee;
if(el instanceof cl){return el
}if(!(this instanceof cl)){try{jindo.$Jindo._maxWarn(arguments.length,1,"$Document");
return new cl(el||document)
}catch(e){if(e instanceof TypeError){return null
}throw e
}}var oArgs=jindo.$Jindo.checkVarType(arguments,{"4doc":["oDocument:Document+"]},"$Document");
if(oArgs==null){this._doc=document
}else{this._doc=el
}this._docKey=this.renderingMode()=="Standards"?"documentElement":"body"
};
(function(){var qu=jindo.cssquery;
var type={query:qu.getSingle,queryAll:qu,xpathAll:qu.xpath};
for(var i in type){jindo.$Document.prototype[i]=(function(sMethod,fp){return function(sQuery){var oArgs=jindo.$Jindo.checkVarType(arguments,{"4str":["sQuery:String+"]},"$Document#"+sMethod);
return fp(sQuery,this._doc)
}
})(i,type[i])
}})();
jindo.$Document.prototype.$value=function(){return this._doc
};
jindo.$Document.prototype.scrollSize=function(){var oDoc=this._doc[_JINDO_IS_WK?"body":this._docKey];
return{width:Math.max(oDoc.scrollWidth,oDoc.clientWidth),height:Math.max(oDoc.scrollHeight,oDoc.clientHeight)}
};
jindo.$Document.prototype.scrollPosition=function(){var oDoc=this._doc[_JINDO_IS_WK?"body":this._docKey];
return{left:oDoc.scrollLeft||window.pageXOffset||window.scrollX||0,top:oDoc.scrollTop||window.pageYOffset||window.scrollY||0}
};
jindo.$Document.prototype.clientSize=function(){var oDoc=this._doc[this._docKey];
var isSafari=_JINDO_IS_SP&&!_JINDO_IS_CH;
return(isSafari)?{width:window.innerWidth,height:window.innerHeight}:{width:oDoc.clientWidth,height:oDoc.clientHeight}
};
jindo.$Document.prototype.renderingMode=function(){var agent=navigator.userAgent;
var isIe=_JINDO_IS_IE;
var isSafari=(_JINDO_IS_WK&&!_JINDO_IS_CH&&navigator.vendor.indexOf("Apple")>-1);
var sRet;
if("compatMode" in this._doc){sRet=this._doc.compatMode=="CSS1Compat"?"Standards":(isIe?"Quirks":"Almost")
}else{sRet=isSafari?"Standards":"Quirks"
}return sRet
};
jindo.$Form=function(el){var cl=arguments.callee;
if(el instanceof cl){return el
}if(!(this instanceof cl)){try{jindo.$Jindo._maxWarn(arguments.length,1,"$Form");
return new cl(el)
}catch(e){if(e instanceof TypeError){return null
}throw e
}}var oArgs=jindo.$Jindo.checkVarType(arguments,{"4str":["oForm:String+"],"4ele":["oForm:Element+"]},"$Form");
switch(oArgs+""){case"4str":el=jindo.$(el);
break
}if(!(el.tagName&&el.tagName.toUpperCase()=="FORM")){throw TypeError("only form")
}this._form=el
};
jindo.$Form.prototype.$value=function(){return this._form
};
jindo.$Form.prototype.serialize=function(){var self=this;
var oRet={};
var nLen=arguments.length;
var fpInsert=function(eEle,sKey){if(!eEle.disabled){var sVal=self.value(sKey);
if(sVal!==undefined){oRet[sKey]=sVal
}}};
if(nLen==0){var len=this._form.elements.length;
for(var i=0;
i<len;
i++){var o=this._form.elements[i];
if(o.name){fpInsert(o,o.name)
}}}else{for(var i=0;
i<nLen;
i++){fpInsert(this.element(arguments[i]),arguments[i])
}}return jindo.$H(oRet).toQueryString()
};
jindo.$Form.prototype.element=function(sKey){var oArgs=jindo.$Jindo.checkVarType(arguments,{"4voi":[],"4str":[jindo.$Jindo._F("sKey:String+")]},"$Form#element");
switch(oArgs+""){case"4voi":return _toArray(this._form.elements);
case"4str":return this._form.elements[sKey+""]
}};
jindo.$Form.prototype.enable=function(sKey){var oArgs=jindo.$Jindo.checkVarType(arguments,{s4bln:["sName:String+","bEnable:Boolean"],s4obj:["oObj:Hash+"],g:[jindo.$Jindo._F("sName:String+")]},"$Form#enable");
switch(oArgs+""){case"s4bln":var aEls=this._form[sKey];
if(!aEls){return this
}aEls=aEls.nodeType==1?[aEls]:aEls;
var sFlag=oArgs.bEnable;
for(var i=0;
i<aEls.length;
i++){aEls[i].disabled=!sFlag
}return this;
case"s4obj":sKey=oArgs.oObj;
var self=this;
for(var k in sKey){if(sKey.hasOwnProperty(k)){self.enable(k,sKey[k])
}}return this;
case"g":var aEls=this._form[sKey];
if(!aEls){return this
}aEls=aEls.nodeType==1?[aEls]:aEls;
var bEnabled=true;
for(var i=0;
i<aEls.length;
i++){if(aEls[i].disabled){bEnabled=false;
break
}}return bEnabled
}};
jindo.$Form.prototype.value=function(sKey){var oArgs=jindo.$Jindo.checkVarType(arguments,{s4str:["sKey:String+","vValue:Variant"],s4obj:[jindo.$Jindo._F("oObj:Hash+")],g:["sKey:String+"]},"$Form#value");
if(oArgs+""=="s4obj"){var self=this;
sKey=oArgs.oObj;
for(var k in sKey){if(sKey.hasOwnProperty(k)){self.value(k,sKey[k])
}}return this
}var aEls=this._form[sKey];
if(!aEls){throw new jindo.$Error(sKey+jindo.$Except.NONE_ELEMENT,"$Form#value")
}aEls=aEls.nodeType==1?[aEls]:aEls;
switch(oArgs+""){case"s4str":var sVal=oArgs.vValue;
var nLen=aEls.length;
for(var i=0;
i<nLen;
i++){var o=aEls[i];
switch(o.type){case"radio":o.checked=(o.value==sVal);
break;
case"checkbox":if(sVal.constructor==Array){o.checked=jindo.$A(sVal).has(o.value)
}else{o.checked=(o.value==sVal)
}break;
case"select-one":var nIndex=-1;
for(var i=0,len=o.options.length;
i<len;
i++){if(o.options[i].value==sVal){nIndex=i
}}o.selectedIndex=nIndex;
break;
case"select-multiple":var nIndex=-1;
if(sVal.constructor==Array){var waVal=jindo.$A(sVal);
for(var i=0,len=o.options.length;
i<len;
i++){o.options[i].selected=waVal.has(o.options[i].value)
}}else{for(var i=0,len=o.options.length;
i<len;
i++){if(o.options[i].value==sVal){nIndex=i
}}o.selectedIndex=nIndex
}break;
default:o.value=sVal
}}return this;
case"g":var aRet=[];
var nLen=aEls.length;
for(var i=0;
i<nLen;
i++){var o=aEls[i];
switch(o.type){case"radio":case"checkbox":if(o.checked){aRet.push(o.value)
}break;
case"select-one":if(o.selectedIndex!=-1){aRet.push(o.options[o.selectedIndex].value)
}break;
case"select-multiple":if(o.selectedIndex!=-1){for(var i=0,len=o.options.length;
i<len;
i++){if(o.options[i].selected){aRet.push(o.options[i].value)
}}}break;
default:aRet.push(o.value)
}}return aRet.length>1?aRet:aRet[0]
}};
jindo.$Form.prototype.submit=function(sTargetName,fValidation){var oArgs=jindo.$Jindo.checkVarType(arguments,{voi:[],"4str":["sTargetName:String+"],"4fun":["fValidation:Function+"],"4fun2":["sTargetName:String+","fValidation:Function+"]},"$Form#submit");
var sOrgTarget=null;
switch(oArgs+""){case"4str":sOrgTarget=this._form.target;
this._form.target=oArgs.sTargetName;
break;
case"4fun":case"4fun2":if(!oArgs.fValidation.call(this,this._form)){return this
}if(oArgs+""=="4fun2"){sOrgTarget=this._form.target;
this._form.target=oArgs.sTargetName
}}this._form.submit();
if(!jindo.$Jindo.isNull(sOrgTarget)){this._form.target=sOrgTarget
}return this
};
jindo.$Form.prototype.reset=function(fValidation){var oArgs=jindo.$Jindo.checkVarType(arguments,{"4voi":[],"4fun":["fValidation:Function+"]},"$Form#reset");
if(oArgs+""=="4fun"){if(!fValidation.call(this,this._form)){return this
}}this._form.reset();
return this
};
jindo.$Template=function(str){var obj=null,tag="";
var cl=arguments.callee;
if(str instanceof cl){return str
}if(!(this instanceof cl)){try{jindo.$Jindo._maxWarn(arguments.length,1,"$Template");
return new cl(str||"")
}catch(e){if(e instanceof TypeError){return null
}throw e
}}jindo.$Jindo.checkVarType(arguments,{"4str":["str:String+"],"4ele":["ele:Element+"]},"$Template");
if((obj=jindo._getElementById(document,str)||str)&&obj.tagName&&(tag=obj.tagName.toUpperCase())&&(tag=="TEXTAREA"||(tag=="SCRIPT"&&obj.getAttribute("type")=="text/template"))){str=(obj.value||obj.innerHTML).replace(/^\s+|\s+$/g,"")
}this._str=str+""
};
jindo.$Template.splitter=/(?!\\)[\{\}]/g;
jindo.$Template.pattern=/^(?:if (.+)|elseif (.+)|for (?:(.+)\:)?(.+) in (.+)|(else)|\/(if|for)|=(.+)|js (.+)|set (.+)|gset (.+))$/;
jindo.$Template.prototype.process=function(data){var oArgs=jindo.$Jindo.checkVarType(arguments,{"4obj":["data:Hash+"],"4voi":[]},"$Template#process");
var key="\x01";
var leftBrace="\x02";
var rightBrace="\x03";
var tpl=(" "+this._str+" ").replace(/\\{/g,leftBrace).replace(/\\}/g,rightBrace).replace(/(?!\\)\}\{/g,"}"+key+"{").split(jindo.$Template.splitter),i=tpl.length;
var map={'"':'\\"',"\\":"\\\\","\n":"\\n","\r":"\\r","\t":"\\t","\f":"\\f"};
var reg=[/(["'](?:(?:\\.)+|[^\\["']+)*["']|[a-zA-Z_](?:[\w\.]|\[(?:.*?)\])*)/g,/[\n\r\t\f"\\]/g,/^\s+/,/\s+$/,/#/g];
var cb=[function(m){return(m.substring(0,1)=='"'||m.substring(0,1)=="'"||m=="null"||m=="false"||m=="true")?m:"d."+m
},function(m){return map[m]||m
},"",""];
var stm=[];
var lev=0;
tpl[0]=tpl[0].substr(1);
tpl[i-1]=tpl[i-1].substr(0,tpl[i-1].length-1);
if(i<2){return tpl[0]
}tpl=tpl.reverse();
var delete_info;
while(i--){if(i%2){tpl[i]=tpl[i].replace(jindo.$Template.pattern,function(){var m=arguments;
if(m[11]){return m[11].replace(/(\w+)(?:\s*)=(?:\s*)(?:([a-zA-Z0-9_]+)|(.+))$/g,function(){var mm=arguments;
var str="var "+mm[1]+"=";
if(mm[2]){str+=mm[2]
}else{str+=mm[3].replace(/(=(?:[a-zA-Z_][\w\.]*)+)/g,function(m){return(m.substring(0,1)=="=")?"d."+m.replace("=",""):m
})
}return str
})+";"
}if(m[10]){var a=m[10].replace(/(\w+)(?:\s*)=(?:\s*)(?:([a-zA-Z0-9_]+)|(.+))$/g,function(){var mm=arguments;
var str="d."+mm[1]+"=";
if(mm[2]){str+="d."+mm[2]
}else{str+=mm[3].replace(/((?:[a-zA-Z_](?:[\w\.]|\[(?:.*?)\])*)+)/g,function(m){return"d."+m
})
}return str
})+";";
return a
}if(m[9]){return"s[i++]="+m[9].replace(/(=(?:[a-zA-Z_][\w\.]*)+)/g,function(m){return(m.substring(0,1)=="=")?"d."+m.replace("=",""):m
})+";"
}if(m[8]){return"s[i++]= d."+m[8]+";"
}if(m[1]){return"if("+m[1].replace(reg[0],cb[0]).replace(/d\.(typeof) /,"$1 ").replace(/ d\.(instanceof) d\./," $1 ")+"){"
}if(m[2]){return"}else if("+m[2].replace(reg[0],cb[0]).replace(/d\.(typeof) /,"$1 ").replace(/ d\.(instanceof) d\./," $1 ")+"){"
}if(m[5]){delete_info=m[4];
var _aStr=[];
_aStr.push("var t#=d."+m[5]+"||{},p#=jindo.$Jindo.isArray(t#),i#=0;");
_aStr.push("for(var x# in t#){");
_aStr.push("if(!t#.hasOwnProperty(x#)){continue;}");
_aStr.push("	if( (p# && isNaN(i#=parseInt(x#,10))) || (!p# && !t#.propertyIsEnumerable(x#)) ) continue;");
_aStr.push("	d."+m[4]+"=t#[x#];");
_aStr.push(m[3]?"d."+m[3]+"=p#?i#:x#;":"");
return _aStr.join("").replace(reg[4],lev++)
}if(m[6]){return"}else{"
}if(m[7]){if(m[7]=="for"){return"delete d."+delete_info+"; };"
}else{return"};"
}}return m[0]
})
}else{if(tpl[i]==key){tpl[i]=""
}else{if(tpl[i]){tpl[i]='s[i++]="'+tpl[i].replace(reg[1],cb[1])+'";'
}}}}tpl=tpl.reverse().join("").replace(new RegExp(leftBrace,"g"),"{").replace(new RegExp(rightBrace,"g"),"}");
var _aStr=[];
_aStr.push("d = d||{};");
_aStr.push("var s=[],i=0;");
_aStr.push(tpl);
_aStr.push('return s.join("");');
tpl=new Function("d",""+_aStr.join(""));
tpl=tpl(oArgs+""=="for_void"?"":oArgs.data);
return tpl
};
jindo.$Date=function(src){var a=arguments,t="";
var cl=arguments.callee;
if(src&&src instanceof cl){return src
}if(!(this instanceof cl)){var str="";
for(var i=0,l=a.length;
i<l;
i++){str+="a["+i+"],"
}var init=new Function("cl","a","return new cl("+str.replace(/,$/,"")+");");
try{jindo.$Jindo._maxWarn(arguments.length,7,"$Date");
return init(cl,a)
}catch(e){if(e instanceof TypeError){return null
}throw e
}}var oArgs=jindo.$Jindo.checkVarType(arguments,{"4voi":[],"4str":["src:String+"],"4num":["src:Numeric"],"4dat":["src:Date+"],"4num2":["src:Numeric","src:Numeric"],"4num3":["src:Numeric","src:Numeric","src:Numeric"],"4num4":["src:Numeric","src:Numeric","src:Numeric","src:Numeric"],"4num5":["src:Numeric","src:Numeric","src:Numeric","src:Numeric","src:Numeric"],"4num6":["src:Numeric","src:Numeric","src:Numeric","src:Numeric","src:Numeric","src:Numeric"],"4num7":["src:Numeric","src:Numeric","src:Numeric","src:Numeric","src:Numeric","src:Numeric","src:Numeric"]},"$Date");
switch(oArgs+""){case"4voi":this._date=new Date;
break;
case"4num":this._date=new Date(src*1);
break;
case"4str":if(/(\d\d\d\d)(?:-?(\d\d)(?:-?(\d\d)))/.test(src)){this._date=jindo.$Date._makeISO(src)
}else{this._date=cl.parse(src)
}break;
case"4dat":(this._date=new Date).setTime(src.getTime());
this._date.setMilliseconds(src.getMilliseconds());
break;
case"4num2":case"4num3":case"4num4":case"4num5":case"4num6":case"4num7":for(var i=0;
i<7;
i++){if(!jindo.$Jindo.isNumeric(a[i])){a[i]=1
}}this._date=new Date(a[0],a[1],a[2],a[3],a[4],a[5],a[6])
}this._names={};
for(var i in jindo.$Date.names){if(jindo.$Date.names.hasOwnProperty(i)){this._names[i]=jindo.$Date.names[i]
}}};
jindo.$Date._makeISO=function(src){var match=src.match(/(\d\d\d\d)(?:-?(\d\d)(?:-?(\d\d)(?:[T ](\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|(?:([-+])(\d\d)(?::?(\d\d))?)?)?)?)?)?/);
var hour=parseInt(match[4]||0,10);
var min=parseInt(match[5]||0,10);
if(match[8]=="Z"){hour+=jindo.$Date.utc
}else{if(match[9]=="+"||match[9]=="-"){hour+=(jindo.$Date.utc-parseInt(match[9]+match[10],10));
min+=parseInt(match[9]+match[11],10)
}}return new Date(match[1]||0,parseInt(match[2]||0,10)-1,match[3]||0,hour,min,match[6]||0,match[7]||0)
};
jindo.$Date._paramCheck=function(aPram,sType){return jindo.$Jindo.checkVarType(aPram,{s:["nParm:Numeric"],g:[]},"$Date#"+sType)
};
jindo.$Date.names={month:["January","Febrary","March","April","May","June","July","August","September","October","Novermber","December"],s_month:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],day:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],s_day:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],ampm:["AM","PM"]};
jindo.$Date.utc=9;
jindo.$Date.now=function(){if(Date.now){this.now=function(){return Date.now()
}
}else{this.now=function(){return +new Date()
}
}return this.now()
};
jindo.$Date.prototype.name=function(vName,aValue){var oArgs=jindo.$Jindo.checkVarType(arguments,{s4str:["sKey:String+","aValue:Array+"],s4obj:["oObject:Hash+"],g:["sKey:String+"]},"$Date#name");
switch(oArgs+""){case"s4str":this._names[vName]=aValue;
break;
case"s4obj":vName=oArgs.oObject;
for(var i in vName){if(vName.hasOwnProperty(i)){this._names[i]=vName[i]
}}break;
case"g":return this._names[vName]
}return this
};
jindo.$Date.parse=function(strDate){var oArgs=jindo.$Jindo.checkVarType(arguments,{"4str":["sKey:String+"]},"$Date#parse");
var date=new Date(Date.parse(strDate));
if(isNaN(date)||date=="Invalid Date"){throw new jindo.$Error(jindo.$Except.INVALID_DATE,"$Date#parse")
}return date
};
jindo.$Date.prototype.$value=function(){return this._date
};
jindo.$Date.prototype.format=function(strFormat){var oArgs=jindo.$Jindo.checkVarType(arguments,{"4str":["sFormat:String+"]},"$Date#format");
strFormat=oArgs.sFormat;
var o={};
var d=this._date;
var name=this._names;
var self=this;
return(strFormat||"").replace(/[a-z]/ig,function callback(m){if(o[m]!==undefined){return o[m]
}switch(m){case"d":case"j":o.j=d.getDate();
o.d=(o.j>9?"":"0")+o.j;
return o[m];
case"l":case"D":case"w":case"N":o.w=d.getDay();
o.N=o.w?o.w:7;
o.D=name.s_day[o.w];
o.l=name.day[o.w];
return o[m];
case"S":return(!!(o.S=["st","nd","rd"][d.getDate()]))?o.S:(o.S="th");
case"z":o.z=Math.floor((d.getTime()-(new Date(d.getFullYear(),0,1)).getTime())/(3600*24*1000));
return o.z;
case"m":case"n":o.n=d.getMonth()+1;
o.m=(o.n>9?"":"0")+o.n;
return o[m];
case"L":o.L=self.isLeapYear();
return o.L;
case"o":case"Y":case"y":o.o=o.Y=d.getFullYear();
o.y=(o.o+"").substr(2);
return o[m];
case"a":case"A":case"g":case"G":case"h":case"H":o.G=d.getHours();
o.g=(o.g=o.G%12)?o.g:12;
o.A=o.G<12?name.ampm[0]:name.ampm[1];
o.a=o.A.toLowerCase();
o.H=(o.G>9?"":"0")+o.G;
o.h=(o.g>9?"":"0")+o.g;
return o[m];
case"i":o.i=(((o.i=d.getMinutes())>9)?"":"0")+o.i;
return o.i;
case"s":o.s=(((o.s=d.getSeconds())>9)?"":"0")+o.s;
return o.s;
case"u":o.u=d.getMilliseconds();
return o.u;
case"U":o.U=self.time();
return o.U;
default:return m
}})
};
jindo.$Date.prototype.time=function(nTime){var oArgs=jindo.$Date._paramCheck(arguments,"time");
nTime=oArgs.nParm;
switch(oArgs+""){case"s":this._date.setTime(nTime);
return this;
case"g":return this._date.getTime()
}};
jindo.$Date.prototype.year=function(nYear){var oArgs=jindo.$Date._paramCheck(arguments,"year");
nYear=oArgs.nParm;
switch(oArgs+""){case"s":this._date.setFullYear(nYear);
return this;
case"g":return this._date.getFullYear()
}};
jindo.$Date.prototype.month=function(nMon){var oArgs=jindo.$Date._paramCheck(arguments,"month");
nMon=oArgs.nParm;
switch(oArgs+""){case"s":this._date.setMonth(nMon);
return this;
case"g":return this._date.getMonth()
}};
jindo.$Date.prototype.date=function(nDate){var oArgs=jindo.$Date._paramCheck(arguments,"date");
nDate=oArgs.nParm;
switch(oArgs+""){case"s":this._date.setDate(nDate);
return this;
case"g":return this._date.getDate()
}};
jindo.$Date.prototype.day=function(){return this._date.getDay()
};
jindo.$Date.prototype.hours=function(nHour){var oArgs=jindo.$Date._paramCheck(arguments,"hours");
nHour=oArgs.nParm;
switch(oArgs+""){case"s":this._date.setHours(nHour);
return this;
case"g":return this._date.getHours()
}};
jindo.$Date.prototype.minutes=function(nMin){var oArgs=jindo.$Date._paramCheck(arguments,"minutes");
nMin=oArgs.nParm;
switch(oArgs+""){case"s":this._date.setMinutes(nMin);
return this;
case"g":return this._date.getMinutes()
}};
jindo.$Date.prototype.seconds=function(nSec){var oArgs=jindo.$Date._paramCheck(arguments,"seconds");
nSec=oArgs.nParm;
switch(oArgs+""){case"s":this._date.setSeconds(nSec);
return this;
case"g":return this._date.getSeconds()
}};
jindo.$Date.prototype.isLeapYear=function(){var y=this._date.getFullYear();
return !(y%4)&&!!(y%100)||!(y%400)
};
jindo.$Date.prototype.compare=function(oDate,sType){var oArgs=jindo.$Jindo.checkVarType(arguments,{"4dat":["oDate:Date+"],"4str":["oDate:Date+","sType:String+"]},"$Date#compare");
oDate=oArgs.oDate;
sType=oArgs.sType;
if(!sType){return oDate-this._date
}else{if(sType==="s"){return Math.floor(oDate/1000)-Math.floor(this._date/1000)
}else{if(sType==="i"){return Math.floor(Math.floor(oDate/1000)/60)-Math.floor(Math.floor(this._date/1000)/60)
}else{if(sType==="h"){return Math.floor(Math.floor(Math.floor(oDate/1000)/60)/60)-Math.floor(Math.floor(Math.floor(this._date/1000)/60)/60)
}else{if(sType==="d"){return Math.floor(Math.floor(Math.floor(Math.floor(oDate/1000)/60)/60)/24)-Math.floor(Math.floor(Math.floor(Math.floor(this._date/1000)/60)/60)/24)
}else{if(sType==="m"){return oDate.getMonth()-this._date.getMonth()
}else{if(sType==="y"){return oDate.getFullYear()-this._date.getFullYear()
}}}}}}}};
jindo.$Window=function(el){var cl=arguments.callee;
if(el instanceof cl){return el
}if(!(this instanceof cl)){try{jindo.$Jindo._maxWarn(arguments.length,1,"$Window");
return new cl(el||window)
}catch(e){if(e instanceof TypeError){return null
}throw e
}}var oArgs=jindo.$Jindo.checkVarType(arguments,{"4win":["el:Window+"]},"$Window");
this._win=el
};
jindo.$Window.prototype.$value=function(){return this._win
};
jindo.$Window.prototype.resizeTo=function(nWidth,nHeight){var oArgs=jindo.$Jindo.checkVarType(arguments,{"4num":["nWidth:Numeric","nHeight:Numeric"]},"$Window#resizeTo");
this._win.resizeTo(nWidth,nHeight);
return this
};
jindo.$Window.prototype.resizeBy=function(nWidth,nHeight){var oArgs=jindo.$Jindo.checkVarType(arguments,{"4num":["nWidth:Numeric","nHeight:Numeric"]},"$Window#resizeBy");
this._win.resizeBy(nWidth,nHeight);
return this
};
jindo.$Window.prototype.moveTo=function(nLeft,nTop){var oArgs=jindo.$Jindo.checkVarType(arguments,{"4num":["nLeft:Numeric","nTop:Numeric"]},"$Window#moveTo");
this._win.moveTo(nLeft,nTop);
return this
};
jindo.$Window.prototype.moveBy=function(nLeft,nTop){var oArgs=jindo.$Jindo.checkVarType(arguments,{"4num":["nLeft:Numeric","nTop:Numeric"]},"$Window#moveBy");
this._win.moveBy(nLeft,nTop);
return this
};
jindo.$Window.prototype.sizeToContent=function(nWidth,nHeight){var oArgs=jindo.$Jindo.checkVarType(arguments,{"4num":["nWidth:Numeric","nHeight:Numeric"]},"$Window#sizeToContent");
if(this._win.sizeToContent){this._win.sizeToContent()
}else{if(arguments.length!=2){var innerX,innerY;
var self=this._win;
var doc=this._win.document;
if(self.innerHeight){innerX=self.innerWidth;
innerY=self.innerHeight
}else{if(doc.documentElement&&doc.documentElement.clientHeight){innerX=doc.documentElement.clientWidth;
innerY=doc.documentElement.clientHeight
}else{if(doc.body){innerX=doc.body.clientWidth;
innerY=doc.body.clientHeight
}}}var pageX,pageY;
var test1=doc.body.scrollHeight;
var test2=doc.body.offsetHeight;
if(test1>test2){pageX=doc.body.scrollWidth;
pageY=doc.body.scrollHeight
}else{pageX=doc.body.offsetWidth;
pageY=doc.body.offsetHeight
}nWidth=pageX-innerX;
nHeight=pageY-innerY
}this._win.resizeBy(nWidth,nHeight)
}return this
};jindo.Component=jindo.$Class({_htEventHandler:null,_htOption:null,$init:function(){var aInstance=this.constructor.getInstance();
aInstance.push(this);
this._htEventHandler={};
this._htOption={};
this._htOption._htSetter={}
},option:function(sName,vValue){switch(typeof sName){case"undefined":return this._htOption;
case"string":if(typeof vValue!="undefined"){if(sName=="htCustomEventHandler"){if(typeof this._htOption[sName]=="undefined"){this.attach(vValue)
}else{return this
}}this._htOption[sName]=vValue;
if(typeof this._htOption._htSetter[sName]=="function"){this._htOption._htSetter[sName](vValue)
}}else{return this._htOption[sName]
}break;
case"object":for(var sKey in sName){if(sKey=="htCustomEventHandler"){if(typeof this._htOption[sKey]=="undefined"){this.attach(sName[sKey])
}else{continue
}}this._htOption[sKey]=sName[sKey];
if(typeof this._htOption._htSetter[sKey]=="function"){this._htOption._htSetter[sKey](sName[sKey])
}}break
}return this
},optionSetter:function(sName,fSetter){switch(typeof sName){case"undefined":return this._htOption._htSetter;
case"string":if(typeof fSetter!="undefined"){this._htOption._htSetter[sName]=jindo.$Fn(fSetter,this).bind()
}else{return this._htOption._htSetter[sName]
}break;
case"object":for(var sKey in sName){this._htOption._htSetter[sKey]=jindo.$Fn(sName[sKey],this).bind()
}break
}return this
},fireEvent:function(sEvent,oEvent){oEvent=oEvent||{};
var fInlineHandler=this["on"+sEvent],aHandlerList=this._htEventHandler[sEvent]||[],bHasInlineHandler=typeof fInlineHandler=="function",bHasHandlerList=aHandlerList.length>0;
if(!bHasInlineHandler&&!bHasHandlerList){return true
}aHandlerList=aHandlerList.concat();
oEvent.sType=sEvent;
if(typeof oEvent._aExtend=="undefined"){oEvent._aExtend=[];
oEvent.stop=function(){if(oEvent._aExtend.length>0){oEvent._aExtend[oEvent._aExtend.length-1].bCanceled=true
}}
}oEvent._aExtend.push({sType:sEvent,bCanceled:false});
var aArg=[oEvent],i,nLen;
for(i=2,nLen=arguments.length;
i<nLen;
i++){aArg.push(arguments[i])
}if(bHasInlineHandler){fInlineHandler.apply(this,aArg)
}if(bHasHandlerList){var fHandler;
for(i=0,fHandler;
(fHandler=aHandlerList[i]);
i++){fHandler.apply(this,aArg)
}}return !oEvent._aExtend.pop().bCanceled
},attach:function(sEvent,fHandlerToAttach){if(arguments.length==1){jindo.$H(arguments[0]).forEach(jindo.$Fn(function(fHandler,sEvent){this.attach(sEvent,fHandler)
},this).bind());
return this
}var aHandler=this._htEventHandler[sEvent];
if(typeof aHandler=="undefined"){aHandler=this._htEventHandler[sEvent]=[]
}aHandler.push(fHandlerToAttach);
return this
},detach:function(sEvent,fHandlerToDetach){if(arguments.length==1){jindo.$H(arguments[0]).forEach(jindo.$Fn(function(fHandler,sEvent){this.detach(sEvent,fHandler)
},this).bind());
return this
}var aHandler=this._htEventHandler[sEvent];
if(aHandler){for(var i=0,fHandler;
(fHandler=aHandler[i]);
i++){if(fHandler===fHandlerToDetach){aHandler=aHandler.splice(i,1);
break
}}}return this
},detachAll:function(sEvent){var aHandler=this._htEventHandler;
if(arguments.length){if(typeof aHandler[sEvent]=="undefined"){return this
}delete aHandler[sEvent];
return this
}for(var o in aHandler){delete aHandler[o]
}return this
}});
jindo.Component.factory=function(aObject,htOption){var aReturn=[],oInstance;
if(typeof htOption=="undefined"){htOption={}
}for(var i=0,el;
(el=aObject[i]);
i++){oInstance=new this(el,htOption);
aReturn[aReturn.length]=oInstance
}return aReturn
};
jindo.Component.getInstance=function(){if(typeof this._aInstance=="undefined"){this._aInstance=[]
}return this._aInstance
};
if(typeof jindo.m=="undefined"&&typeof Node!="undefined"){var ___Old__addEventListener___=Node.prototype.addEventListener;
Node.prototype.addEventListener=function(type,listener,useCapture){var callee=arguments.callee;
if(callee&&type==="click"&&this.tagName==="A"){(this.___listeners___||(this.___listeners___=[])).push({listener:listener,useCapture:useCapture})
}return ___Old__addEventListener___.apply(this,arguments)
};
var ___Old__removeEventListener___=Node.prototype.removeEventListener;
Node.prototype.removeEventListener=function(type,listener,useCapture){var callee=arguments.callee;
if(callee&&type==="click"&&this.tagName==="A"){if(this.___listeners___){this.___listeners___.pop()
}}return ___Old__removeEventListener___.apply(this,arguments)
}
}jindo.m=(function(){var __M__=jindo.$Class({$init:function(){this._initVar();
this._initDeviceInfo();
this._attachEvent()
},_initVar:function(){this.MOVETYPE={0:"hScroll",1:"vScroll",2:"dScroll",3:"tap",4:"longTap",5:"doubleTap",6:"pinch",7:"rotate",8:"pinch-rotate"};
this.sVersion="1.3.1";
this._isVertical=null;
this._nPreWidth=-1;
this._nRotateTimer=null;
this._htHandler={};
this._htDeviceInfo={}
},_getOrientationChangeEvt:function(){var bEvtName="onorientationchange" in window?"orientationchange":"resize";
var htInfo=this.getDeviceInfo();
if((htInfo.android&&htInfo.version==="2.1")){bEvtName="resize"
}return bEvtName
},_getVertical:function(){var bVertical=null,sEventType=this._getOrientationChangeEvt();
if(sEventType==="resize"){var screenWidth=document.documentElement.clientWidth;
if(screenWidth<this._nPreWidth){bVertical=true
}else{if(screenWidth==this._nPreWidth){bVertical=this._isVertical
}else{bVertical=false
}}this._nPreWidth=screenWidth
}else{var windowOrientation=window.orientation;
if(windowOrientation===0||windowOrientation==180){bVertical=true
}else{if(windowOrientation==90||windowOrientation==-90){bVertical=false
}}}return bVertical
},_attachEvent:function(){this._rotateEvent=jindo.$Fn(this._onOrientationChange,this).attach(window,this._getOrientationChangeEvt()).attach(window,"load");
this._pageShowEvent=jindo.$Fn(this._onPageshow,this).attach(window,"pageshow")
},_initDeviceInfo:function(){var sName=navigator.userAgent;
var ar=null;
function f(s,h){return((h||"").indexOf(s)>-1)
}this._htDeviceInfo.iphone=f("iPhone",sName);
this._htDeviceInfo.ipad=f("iPad",sName);
this._htDeviceInfo.android=f("Android",sName);
this._htDeviceInfo.galaxyTab=f("SHW-M180",sName);
this._htDeviceInfo.galaxyTab2=f("SHW-M380",sName);
this._htDeviceInfo.galaxyK=f("SHW-M130K",sName);
this._htDeviceInfo.galaxyU=f("SHW-M130L",sName);
this._htDeviceInfo.galaxyS=f("SHW-M110",sName);
this._htDeviceInfo.galaxyS2=f("SHW-M250",sName);
this._htDeviceInfo.galaxyS2LTE=f("SHV-E110",sName);
this._htDeviceInfo.galaxyS3=f("SHV-E210",sName);
this._htDeviceInfo.galaxyNote=f("SHV-E160",sName);
this._htDeviceInfo.galaxyNexus=f("Galaxy Nexus",sName);
this._htDeviceInfo.version="";
this._htDeviceInfo.bChrome=this._htDeviceInfo.android&&(f("CrMo",sName)||f("Chrome",sName));
this._htDeviceInfo.bInapp=false;
if(this._htDeviceInfo.iphone||this._htDeviceInfo.ipad){ar=sName.match(/OS\s([\d|\_]+\s)/i);
if(ar!==null&&ar.length>1){this._htDeviceInfo.version=ar[1]
}}else{if(this._htDeviceInfo.android){ar=sName.match(/Android\s([^\;]*)/i);
if(ar!==null&&ar.length>1){this._htDeviceInfo.version=ar[1]
}}}this._htDeviceInfo.version=this._htDeviceInfo.version.replace(/\_/g,".");
for(var x in this._htDeviceInfo){if(typeof this._htDeviceInfo[x]=="boolean"&&this._htDeviceInfo[x]&&this._htDeviceInfo.hasOwnProperty(x)){this._htDeviceInfo.name=x
}}if(this._htDeviceInfo.iphone||this._htDeviceInfo.ipad){if(!f("Safari",sName)){this._htDeviceInfo.bInapp=true
}}else{if(this._htDeviceInfo.android){sName=sName.toLowerCase();
if(f("inapp",sName)||f("app",sName.replace("applewebkit",""))){this._htDeviceInfo.bInapp=true
}}}},_onOrientationChange:function(we){var self=this;
if(we.type==="load"){this._nPreWidth=document.documentElement.clientWidth;
if(!this._htDeviceInfo.bInapp&&(this._htDeviceInfo.iphone||this._htDeviceInfo.ipad||this._getOrientationChangeEvt()!=="resize")){this._isVertical=this._getVertical()
}else{if(this._nPreWidth>document.documentElement.clientHeight){this._isVertical=false
}else{this._isVertical=true
}}return
}if(this._getOrientationChangeEvt()==="resize"){setTimeout(function(){self._orientationChange(we)
},0)
}else{var nTime=200;
if(this.getDeviceInfo().android){nTime=500
}clearTimeout(this._nRotateTimer);
this._nRotateTimer=setTimeout(function(){self._orientationChange(we)
},nTime)
}},_orientationChange:function(we){var nPreVertical=this._isVertical;
this._isVertical=this._getVertical();
if(jindo.$Agent().navigator().mobile||jindo.$Agent().os().ipad){if(nPreVertical!==this._isVertical){this.fireEvent("mobilerotate",{isVertical:this._isVertical})
}}else{this.fireEvent("mobilerotate",{isVertical:this._isVertical})
}},bindRotate:function(fHandlerToBind){var aHandler=this._htHandler.mobilerotate;
if(typeof aHandler=="undefined"){aHandler=this._htHandler.mobilerotate=[]
}aHandler.push(fHandlerToBind);
this.attach("mobilerotate",fHandlerToBind)
},unbindRotate:function(fHandlerToUnbind){var aHandler=this._htHandler.mobilerotate;
if(aHandler){for(var i=0,fHandler;
(fHandler=aHandler[i]);
i++){if(fHandler===fHandlerToUnbind){aHandler.splice(i,1);
this.detach("mobilerotate",fHandlerToUnbind);
break
}}}},_onPageshow:function(we){this._isVertical=this._getVertical();
var self=this;
setTimeout(function(){self.fireEvent("mobilePageshow",{})
},300)
},bindPageshow:function(fHandlerToBind){var aHandler=this._htHandler.mobilePageshow;
if(typeof aHandler=="undefined"){aHandler=this._htHandler.mobilePageshow=[]
}aHandler.push(fHandlerToBind);
this.attach("mobilePageshow",fHandlerToBind)
},unbindPageshow:function(fHandlerToUnbind){var aHandler=this._htHandler.mobilePageshow;
if(aHandler){for(var i=0,fHandler;
(fHandler=aHandler[i]);
i++){if(fHandler===fHandlerToUnbind){aHandler.splice(i,1);
this.detach("mobilePageshow",fHandlerToUnbind);
break
}}}},getDeviceInfo:function(){return this._htDeviceInfo
},isVertical:function(){if(this._isVertical===null){return this._getVertical()
}else{return this._isVertical
}},getNodeElement:function(el){while(el.nodeType!=1){el=el.parentNode
}return el
},getCssOffset:function(element){var htOffset;
if(jindo.m.getDeviceInfo().android&&parseInt(jindo.m.getDeviceInfo().version,10)===3){htOffset=jindo.m._getCssOffsetFromStyle(element)
}else{if("WebKitCSSMatrix" in window&&"m11" in new WebKitCSSMatrix()){htOffset=jindo.m._getCssOffsetFromCSSMatrix(element)
}else{htOffset=jindo.m._getCssOffsetFromStyle(element)
}}return htOffset
},_getCssOffsetFromStyle:function(element){var nTop=nLeft=0,s=element.style[jindo.m.getCssPrefix()+"Transform"];
if(!!s&&s.length>0){aTemp=s.match(/translate.{0,2}\((.*)\)/);
if(!!aTemp&&aTemp.length>1){var a=aTemp[1].split(",");
if(!!a&&a.length>1){nTop=parseInt(a[1],10);
nLeft=parseInt(a[0],10)
}}}return{top:nTop,left:nLeft}
},_getCssOffsetFromCSSMatrix:function(element){var curTransform=new WebKitCSSMatrix(window.getComputedStyle(element).webkitTransform);
return{top:curTransform.m42,left:curTransform.m41}
},attachTransitionEnd:function(element,fHandlerToBind){var nVersion=+jindo.$Jindo().version.replace(/[a-z.]/gi,"");
if(nVersion>=151){element._jindo_fn_=jindo.$Fn(fHandlerToBind,this).attach(element,"transitionend")
}else{element.addEventListener("webkitTransitionEnd",fHandlerToBind,false)
}},detachTransitionEnd:function(element,fHandlerToUnbind){var nVersion=+jindo.$Jindo().version.replace(/[a-z.]/gi,"");
if(nVersion>=151){if(element._jindo_fn_){element._jindo_fn_.detach(element,"transitionend");
delete element._jindo_fn_
}}else{element.removeEventListener("webkitTransitionEnd",fHandlerToUnbind,false)
}},getCssPrefix:function(){var sCssPrefix="";
if(typeof document.body.style.MozTransition!=="undefined"){sCssPrefix="Moz"
}else{if(typeof document.body.style.webkitTransition!=="undefined"){sCssPrefix="webkit"
}else{if(typeof document.body.style.OTransition!=="undefined"){sCssPrefix="O"
}}}return sCssPrefix
},getClosest:function(sSelector,elBaseElement){var elClosest;
var welBaseElement=jindo.$Element(elBaseElement);
var reg=/<\/?(?:h[1-5]|[a-z]+(?:\:[a-z]+)?)[^>]*>/ig;
if(reg.test(sSelector)){if("<"+elBaseElement.tagName.toUpperCase()+">"==sSelector.toUpperCase()){elClosest=elBaseElement
}else{elClosest=welBaseElement.parent(function(v){if("<"+v.$value().tagName.toUpperCase()+">"==sSelector.toUpperCase()){return v
}});
elClosest=elClosest.length?elClosest[0].$value():false
}}else{if(sSelector.indexOf(".")==0){sSelector=sSelector.substring(1,sSelector.length)
}if(welBaseElement.hasClass(sSelector)){elClosest=elBaseElement
}else{elClosest=welBaseElement.parent(function(v){if(v.hasClass(sSelector)){return v
}});
elClosest=elClosest.length?elClosest[0].$value():false
}}return elClosest
},_isUseCss3d:function(){var bRet=false;
if(this._htDeviceInfo.iphone||this._htDeviceInfo.ipad){bRet=true
}else{if(this._htDeviceInfo.android){var s=navigator.userAgent.match(/\(.*\)/)[0];
function f(s,h){return((h||"").indexOf(s)>-1)
}var isSamsung=f("SHW-",s)||f("SHV-",s)||f("GT-",s)||f("SCH-",s)||f("SGH-",s)||f("SPH-",s);
var isLg=f("LG-F160")||f("LG-F100");
var isEtc=f("SHW-M250",s)||f("SHW-M420")||f("SHW-M200",s)||f("SHV-E110",s)||f("SHV-E160",s);
if(this._htDeviceInfo.version>="4.0.3"&&(isSamsung||isLg)&&!isEtc){bRet=true
}}}return bRet
},_isUseFixed:function(){var isFixed=false;
if(this._htDeviceInfo.bChrome||(this._htDeviceInfo.android&&parseInt(this._htDeviceInfo.version,10)>=3)||((this._htDeviceInfo.iphone||this._htDeviceInfo.ipad)&&(parseInt(this._htDeviceInfo.version,10)>=5))){isFixed=true
}return isFixed
},_isUseTimingFunction:function(){var bUse=this._isUseCss3d();
if(this._htDeviceInfo.android){bUse=false
}return bUse
},_clientSize:function(){var oSize={};
var oRet=jindo.$Document().clientSize();
var nVersion=parseInt(this._htDeviceInfo.version,10);
if((this._htDeviceInfo.ipad||this._htDeviceInfo.iphone)||this._htDeviceInfo.bChrome){return oRet
}switch(this._htDeviceInfo.name){case"galaxyTab":oSize={portrait:400,landscape:683};
oSize.landscape-=92;
oSize.portrait-=66;
break;
case"galaxyTab2":oSize={portrait:1280,landscape:800};
oSize.landscape-=152;
oSize.portrait-=152;
break;
case"galaxyS":oSize={portrait:320,landscape:533};
oSize.landscape-=81;
oSize.portrait-=81;
break;
case"galaxyS2LTE":case"galaxyS2":oSize={portrait:320,landscape:533};
if(nVersion==4){oSize.landscape-=77;
oSize.portrait-=77
}else{oSize.landscape-=83;
oSize.portrait-=83
}break;
case"galaxyS3":oSize={portrait:360,landscape:640};
oSize.landscape-=73;
oSize.portrait-=73;
break;
case"galaxyNote":oSize={portrait:400,landscape:640};
if(nVersion==4){oSize.landscape-=77;
oSize.portrait-=77
}else{oSize.landscape-=103;
oSize.portrait-=103
}break;
case"galaxyNexus":oSize={portrait:360,landscape:598};
oSize.landscape-=83;
oSize.portrait-=83;
break
}if(this.isVertical()){if(oSize.landscape&&oSize.landscape>oRet.height){oRet.height=oSize.landscape
}}else{if(oSize.portrait&&oSize.portrait>oRet.height){oRet.height=oSize.portrait
}}return oRet
}}).extend(jindo.Component);
return new __M__()
})();
jindo.UIComponent=jindo.$Class({$init:function(){this._bIsActivating=false
},isActivating:function(){return this._bIsActivating
},activate:function(){if(this.isActivating()){return this
}this._bIsActivating=true;
if(arguments.length>0){this._onActivate.apply(this,arguments)
}else{this._onActivate()
}return this
},deactivate:function(){if(!this.isActivating()){return this
}this._bIsActivating=false;
if(arguments.length>0){this._onDeactivate.apply(this,arguments)
}else{this._onDeactivate()
}return this
}}).extend(jindo.Component);
jindo.m.Touch=jindo.$Class({$init:function(sId,htUserOption){this._el=jindo.$(sId);
var htDefaultOption={nMomentumDuration:350,nMoveThreshold:7,nSlopeThreshold:25,nLongTapDuration:1000,nDoubleTapDuration:400,nTapThreshold:6,nPinchThreshold:0.1,nRotateThreshold:5,bActivateOnload:true};
this.option(htDefaultOption);
this.option(htUserOption||{});
this._initVariable();
this._setSlope();
if(this.option("bActivateOnload")){this.activate()
}},_initVariable:function(){this._hasTouchEvent="ontouchstart" in window;
this._radianToDegree=180/Math.PI;
this._htMoveInfo={nStartX:0,nStartY:0,nBeforeX:0,nBeforeY:0,nStartTime:0,nBeforeTime:0,nStartDistance:0,nBeforeDistance:0,nStartAngle:0,nLastAngle:0};
this.bStart=false;
this.bMove=false;
this.nMoveType=-1;
this.htEndInfo={};
this._nVSlope=0;
this._nHSlope=0;
this.bSetSlope=false
},_attachEvents:function(){this._htEvent={};
var bTouch=this._hasTouchEvent;
this._htEvent[bTouch?"touchstart":"mousedown"]={ref:jindo.$Fn(this._onStart,this).attach(this._el,(bTouch?"touchstart":"mousedown")),el:this._el};
this._htEvent[bTouch?"touchmove":"mousemove"]={ref:jindo.$Fn(this._onMove,this).attach(this._el,(bTouch?"touchmove":"mousemove")),el:this._el};
this._htEvent[bTouch?"touchend":"mouseup"]={ref:jindo.$Fn(this._onEnd,this).attach(this._el,(bTouch?"touchend":"mouseup")),el:this._el};
this._htEvent.rotate=jindo.$Fn(this._onResize,this).bind();
jindo.m.bindRotate(this._htEvent.rotate);
if(bTouch){this._htEvent.touchcancel={ref:jindo.$Fn(this._onCancel,this).attach(this._el,"touchcancel"),el:this._el}
}},_detachEvents:function(){for(var p in this._htEvent){var htTargetEvent=this._htEvent[p];
if(htTargetEvent.ref){htTargetEvent.ref.detach(htTargetEvent.el,p)
}}jindo.m.unbindRotate(this._htEvent.rotate);
this._htEvent=null
},_onCancel:function(oEvent){this._onEnd(oEvent)
},_onStart:function(oEvent){this._resetTouchInfo();
var htInfo=this._getTouchInfo(oEvent);
var htParam={element:htInfo[0].el,nX:htInfo[0].nX,nY:htInfo[0].nY,oEvent:oEvent};
if(!this._fireCustomEvent("touchStart",htParam)){return
}this.bStart=true;
this._htMoveInfo.nStartX=htInfo[0].nX;
this._htMoveInfo.nBeforeX=htInfo[0].nX;
this._htMoveInfo.nStartY=htInfo[0].nY;
this._htMoveInfo.nBeforeY=htInfo[0].nY;
this._htMoveInfo.nStartTime=htInfo[0].nTime;
this._htMoveInfo.aStartInfo=htInfo;
this._startLongTapTimer(htInfo,oEvent)
},_onMove:function(oEvent){if(!this.bStart){return
}this.bMove=true;
var htInfo=this._getTouchInfo(oEvent);
var htParam=this._getCustomEventParam(htInfo,false);
if(htInfo.length===1){if(this.nMoveType<0||this.nMoveType==3||this.nMoveType==4){this.nMoveType=this._getMoveType(htInfo)
}}else{if(this.nMoveType!==8){this.nMoveType=this._getMoveType(htInfo)
}}htParam=this._getCustomEventParam(htInfo,false);
if((typeof this._nLongTapTimer!="undefined")&&this.nMoveType!=3){this._deleteLongTapTimer()
}htParam.oEvent=oEvent;
var nDis=0;
if(this.nMoveType==0){nDis=Math.abs(htParam.nVectorX)
}else{if(this.nMoveType==1){nDis=Math.abs(htParam.nVectorY)
}else{nDis=Math.abs(htParam.nVectorX)+Math.abs(htParam.nVectorY)
}}if(nDis<this.option("nMoveThreshold")){return
}if(!this.fireEvent("touchMove",htParam)){this.bStart=false;
return
}this._htMoveInfo.nBeforeX=htInfo[0].nX;
this._htMoveInfo.nBeforeY=htInfo[0].nY;
this._htMoveInfo.nBeforeTime=htInfo[0].nTime
},_onEnd:function(oEvent){if(!this.bStart){return
}this._deleteLongTapTimer();
if(!this.bMove&&(this.nMoveType!=4)){this.nMoveType=3
}if(this.nMoveType<0){return
}var htInfo=this._getTouchInfo(oEvent);
if(this._isDblTap(htInfo[0].nX,htInfo[0].nY,htInfo[0].nTime)){clearTimeout(this._nTapTimer);
delete this._nTapTimer;
this.nMoveType=5
}var htParam=this._getCustomEventParam(htInfo,true);
htParam.oEvent=oEvent;
var sMoveType=htParam.sMoveType;
if((typeof this._htEventHandler[jindo.m.MOVETYPE[5]]!="undefined"&&(this._htEventHandler[jindo.m.MOVETYPE[5]].length>0))&&(this.nMoveType==3)){var self=this;
this._nTapTimer=setTimeout(function(){self.fireEvent("touchEnd",htParam);
self._fireCustomEvent(sMoveType,htParam);
delete self._nTapTimer
},this.option("nDoubleTapDuration"))
}else{this.fireEvent("touchEnd",htParam);
if(this.nMoveType!=4){if(this.nMoveType===8){htParam.sMoveType=jindo.m.MOVETYPE[6];
this._fireCustomEvent(jindo.m.MOVETYPE[6],htParam);
htParam.sMoveType=jindo.m.MOVETYPE[7];
this._fireCustomEvent(jindo.m.MOVETYPE[7],htParam)
}else{this._fireCustomEvent(sMoveType,htParam)
}}}this._updateTouchEndInfo(htInfo);
this._resetTouchInfo()
},_fireCustomEvent:function(sEvent,htOption){return this.fireEvent(sEvent,htOption)
},_getCustomEventParam:function(htTouchInfo,bTouchEnd){var sMoveType=jindo.m.MOVETYPE[this.nMoveType];
var nDuration=htTouchInfo[0].nTime-this._htMoveInfo.nStartTime;
var nVectorX=nVectorY=nMomentumX=nMomentumY=nSpeedX=nSpeedY=nDisX=nDisY=0;
nDisX=(this.nMoveType===1)?0:htTouchInfo[0].nX-this._htMoveInfo.nStartX;
nDisY=(this.nMoveType===0)?0:htTouchInfo[0].nY-this._htMoveInfo.nStartY;
nVectorX=htTouchInfo[0].nX-this._htMoveInfo.nBeforeX;
nVectorY=htTouchInfo[0].nY-this._htMoveInfo.nBeforeY;
if(bTouchEnd&&(this.nMoveType==0||this.nMoveType==1||this.nMoveType==2)){if(nDuration<=this.option("nMomentumDuration")){nSpeedX=Math.abs(nDisX)/nDuration;
nMomentumX=(nSpeedX*nSpeedX)/2;
nSpeedY=Math.abs(nDisY)/nDuration;
nMomentumY=(nSpeedY*nSpeedY)/2
}}var htParam={element:htTouchInfo[0].el,nX:htTouchInfo[0].nX,nY:htTouchInfo[0].nY,nVectorX:nVectorX,nVectorY:nVectorY,nDistanceX:nDisX,nDistanceY:nDisY,sMoveType:sMoveType,nStartX:this._htMoveInfo.nStartX,nStartY:this._htMoveInfo.nStartY,nStartTimeStamp:this._htMoveInfo.nStartTime};
if((htTouchInfo.length)>1||(this.nMoveType>=6)){htParam.nScale=this._getScale(htTouchInfo);
htParam.nRotation=this._getRotation(htTouchInfo);
if(htParam.nScale===null){htParam.nScale=this._htMoveInfo.nBeforeScale
}if(htParam.nRotation===null){htParam.nRotation=this._htMoveInfo.nBeforeRotation
}}if(htTouchInfo.length>=1){var aX=[];
var aY=[];
var aElement=[];
for(var i=0,nLen=htTouchInfo.length;
i<nLen;
i++){aX.push(htTouchInfo[i].nX);
aY.push(htTouchInfo[i].nY);
aElement.push(htTouchInfo[i].el)
}htParam.aX=aX;
htParam.aY=aY;
htParam.aElement=aElement
}if(bTouchEnd){htParam.nMomentumX=nMomentumX;
htParam.nMomentumY=nMomentumY;
htParam.nSpeedX=nSpeedX;
htParam.nSpeedY=nSpeedY;
htParam.nDuration=nDuration
}return htParam
},_updateTouchEndInfo:function(htInfo){this.htEndInfo={element:htInfo[0].el,time:htInfo[0].nTime,movetype:this.nMoveType,nX:htInfo[0].nX,nY:htInfo[0].nY}
},_deleteLongTapTimer:function(){if(typeof this._nLongTapTimer!="undefined"){clearTimeout(this._nLongTapTimer);
delete this._nLongTapTimer
}},_startLongTapTimer:function(htInfo,oEvent){var self=this;
if((typeof this._htEventHandler[jindo.m.MOVETYPE[4]]!="undefined")&&(this._htEventHandler[jindo.m.MOVETYPE[4]].length>0)){self._nLongTapTimer=setTimeout(function(){self.fireEvent("longTap",{element:htInfo[0].el,oEvent:oEvent,nX:htInfo[0].nX,nY:htInfo[0].nY});
delete self._nLongTapTimer;
self.nMoveType=4
},self.option("nLongTapDuration"))
}},_onResize:function(){this._setSlope()
},_isDblTap:function(nX,nY,nTime){if((typeof this._nTapTimer!="undefined")&&this.nMoveType==3){var nGap=this.option("nTapThreshold");
if((Math.abs(this.htEndInfo.nX-nX)<=nGap)&&(Math.abs(this.htEndInfo.nY-nY)<=nGap)){return true
}}return false
},_setSlope:function(){if(!this.bSetSlope){this._nHSlope=((window.innerHeight/2)/window.innerWidth).toFixed(2)*1;
this._nVSlope=(window.innerHeight/(window.innerWidth/2)).toFixed(2)*1
}},setSlope:function(nVSlope,nHSlope){this._nHSlope=nHSlope;
this._nVSlope=nVSlope;
this.bSetSlope=true
},getSlope:function(){return{nVSlope:this._nVSlope,nHSlope:this._nHSlope}
},_resetTouchInfo:function(){for(var x in this._htMoveInfo){this._htMoveInfo[x]=0
}this._deleteLongTapTimer();
this.bStart=false;
this.bMove=false;
this.nMoveType=-1
},_getMoveTypeBySingle:function(x,y){var nType=this.nMoveType;
var nX=Math.abs(this._htMoveInfo.nStartX-x);
var nY=Math.abs(this._htMoveInfo.nStartY-y);
var nDis=nX+nY;
var nGap=this.option("nTapThreshold");
if((nX<=nGap)&&(nY<=nGap)){nType=3
}else{nType=-1
}if(this.option("nSlopeThreshold")<=nDis){var nSlope=parseFloat((nY/nX).toFixed(2),10);
if((this._nHSlope===-1)&&(this._nVSlope===-1)){nType=2
}else{if(nSlope<=this._nHSlope){nType=0
}else{if(nSlope>=this._nVSlope){nType=1
}else{nType=2
}}}}return nType
},_getMoveTypeByMulti:function(aPos){var nType=-1;
if((this.nMoveType===6)||Math.abs(1-this._htMoveInfo.nBeforeScale)>=this.option("nPinchThreshold")){nType=6
}if((this.nMoveType===7)||Math.abs(0-this._htMoveInfo.nBeforeRotation)>=this.option("nRotateThreshold")){if(nType===6){nType=8
}else{nType=7
}}if(nType===-1){return this.nMoveType
}return nType
},_getScale:function(aPos){var nScale=-1;
var nDistance=this._getDistance(aPos);
if(nDistance<=0){return null
}if(this._htMoveInfo.nStartDistance===0){nScale=1;
this._htMoveInfo.nStartDistance=nDistance
}else{nScale=nDistance/this._htMoveInfo.nStartDistance
}this._htMoveInfo.nBeforeScale=nScale;
return nScale
},_getRotation:function(aPos){var nRotation=-1;
var nAngle=this._getAngle(aPos);
if(nAngle===null){return null
}if(this._htMoveInfo.nStartAngle===0){this._htMoveInfo.nStartAngle=nAngle;
nRotation=0
}else{nRotation=nAngle-this._htMoveInfo.nStartAngle
}this._htMoveInfo.nLastAngle=nAngle;
this._htMoveInfo.nBeforeRotation=nRotation;
return nRotation
},_getMoveType:function(aPos){var nType=this.nMoveType;
if(aPos.length===1){nType=this._getMoveTypeBySingle(aPos[0].nX,aPos[0].nY)
}else{if(aPos.length===2){nType=this._getMoveTypeByMulti(aPos)
}}return nType
},_getDistance:function(aPos){if(aPos.length===1){return -1
}return Math.sqrt(Math.pow(Math.abs(aPos[0].nX-aPos[1].nX),2)+Math.pow(Math.abs(aPos[0].nY-aPos[1].nY),2))
},_getAngle:function(aPos){if(aPos.length===1){return null
}var deltaX=aPos[0].nX-aPos[1].nX,deltaY=aPos[0].nY-aPos[1].nY;
var nAngle=Math.atan2(deltaY,deltaX)*this._radianToDegree;
if(this._htMoveInfo.nLastAngle!==null){var nDiff=Math.abs(this._htMoveInfo.nLastAngle-nAngle);
var nNext=nAngle+360;
var nPrev=nAngle-360;
if(Math.abs(nNext-this._htMoveInfo.nLastAngle)<nDiff){nAngle=nNext
}else{if(Math.abs(nPrev-this._htMoveInfo.nLastAngle)<nDiff){nAngle=nPrev
}}}return nAngle
},_getTouchInfo:function(oEvent){var aReturn=[];
var nTime=oEvent.$value().timeStamp;
if(this._hasTouchEvent){var oTouch=oEvent.$value().changedTouches;
for(var i=0,nLen=oTouch.length;
i<nLen;
i++){aReturn.push({el:jindo.m.getNodeElement(oTouch[i].target),nX:oTouch[i].pageX,nY:oTouch[i].pageY,nTime:nTime})
}}else{aReturn.push({el:oEvent.element,nX:oEvent.pos().pageX,nY:oEvent.pos().pageY,nTime:nTime})
}return aReturn
},getBaseElement:function(el){return this._el
},_onDeactivate:function(){this._detachEvents()
},_onActivate:function(){this._attachEvents()
},destroy:function(){this.deactivate();
this._el=null;
for(var p in this._htMoveInfo){this._htMoveInfo[p]=null
}this._htMoveInfo=null;
for(var p in this.htEndInfo){this.htEndInfo[p]=null
}this.htEndInfo=null;
this.bStart=null;
this.bMove=null;
this.nMoveType=null;
this._nVSlope=null;
this._nHSlope=null;
this.bSetSlope=null
}}).extend(jindo.UIComponent);
jindo.m.CircularFlicking=jindo.$Class({$init:function(sId,htUserOption){this.option({bHorizontal:true,sClassPrefix:"flick-",nFlickThreshold:40,nDuration:100,nTotalContents:3,nBounceDuration:100,bActivateOnload:true,bUseCss3d:jindo.m._isUseCss3d(),bUseTimingFunction:jindo.m._isUseTimingFunction(),bUseTranslate:true});
this.option(htUserOption||{});
this._initVar();
this._setWrapperElement(sId);
this._setElementSize();
this._updatePanelPosition();
this._initTouch();
if(this.option("bActivateOnload")){this.activate()
}},_initVar:function(){this._oTouch=null;
this._bFlickLeft=null;
this._elTransition=null;
this._htIndexInfo={nPanelIndex:0,nContentIndex:0,nNextPanelIndex:0,nNextContentIndex:0};
var htInfo=jindo.m.getDeviceInfo();
this.sTransformStart="translate(";
this.sTransformEnd=")";
this._bAndroid=htInfo.android&&(!htInfo.bChrome);
this._nVersion=htInfo.version;
this._isIos=(htInfo.iphone||htInfo.ipad);
this._bUseCss3=this.option("bUseCss3d");
if(this._bUseCss3){this.sTransformStart="translate3d(";
this.sTransformEnd=",0px)"
}this._sCssPrefix=jindo.m.getCssPrefix();
this._wfTransitionEnd=jindo.$Fn(this._onTransitionEnd,this).bind();
this._aAnchor=null;
this._fnDummyFnc=function(){return false
};
this._bBlocked=false;
this._isFlicking=false;
this._bTouchStart=false
},_initTouch:function(){this._oTouch=new jindo.m.Touch(this._htWElement.base.$value(),{nSlopeThreshold:4,nMoveThreshold:0,bActivateOnload:false})
},_setWrapperElement:function(el){this._htWElement={};
el=jindo.$(el);
var sClass="."+this.option("sClassPrefix");
this._htWElement.base=jindo.$Element(el);
this._htWElement.container=jindo.$Element(jindo.$$.getSingle(sClass+"container",el));
this._htWElement.container.css("position","relative").css("width","100%").css("height","100%");
var aPanel=jindo.$$(sClass+"panel",el);
this._htWElement.aPanel=jindo.$A(aPanel).forEach(function(value,index,array){var wel=jindo.$Element(value);
array[index]=wel;
wel.css("position","absolute").css("width","100%").css("height","100%")
}).$value();
if(this._isAndroid&&(this._nVersion<"3")){this._htWElement.aDummyTag=[];
for(var i=0,nLen=this._htWElement.aPanel.length;
i<nLen;
i++){var wel=this._htWElement.aPanel[i];
var elDummyTag=jindo.$$.getSingle("._cflick_dummy_atag_",wel.$value());
if(!elDummyTag){elDummyTag=jindo.$("<a href='javascript:void(0);' class='_cflick_dummy_atag_'></a>");
elDummyTag.style.position="absolute";
elDummyTag.style.left="-1000px";
elDummyTag.style.top="-1000px";
elDummyTag.style.width=0;
elDummyTag.style.height=0;
wel.append(elDummyTag)
}this._htWElement.aDummyTag.push(elDummyTag)
}}},_prepareTransition:function(){var sTransfrom=this.option("bUseTranslate")?"-webkit-transform":(this.option("bUseTranslate")?"left":"top");
for(var i=0,nLen=this._htWElement.aPanel.length;
i<nLen;
i++){this._htWElement.aPanel[i].css(this._sCssPrefix+"Transform",this.sTransformStart+"0px,0px"+this.sTransformEnd);
this._htWElement.aPanel[i].css(this._sCssPrefix+"TransitionProperty",sTransfrom)
}},_setElementSize:function(){if(this.option("bHorizontal")){this._htWElement.container.height(this._htWElement.base.height())
}else{this._htWElement.container.width(this._htWElement.base.width())
}},_setAnchorElement:function(el){if(this._isIos){this._aAnchor=jindo.$$("A",this._htWElement.container.$value())
}},_updatePanelPosition:function(){this._aCtPosition=[];
var el=this._htWElement.base.$value();
var nW=this.option("bHorizontal")?el.clientWidth:el.clientHeight;
this._htPositionInfo={left:0,center:100,right:200};
this._htContainerInfo={left:nW*-1,center:0,right:nW};
this._nDefaultSize=nW
},_onResize:function(){this._isFlicking=false;
this.refresh(this.getPanelIndex(),true)
},getPanelIndex:function(){return this._htIndexInfo.nPanelIndex
},getPanelElement:function(){return this._htWElement.aPanel[this.getPanelIndex()]
},getRightPanelIndex:function(){var n=this.getPanelIndex()+1;
n=(n>2)?0:n;
return n
},getRightPanelElement:function(){return this._htWElement.aPanel[this.getRightPanelIndex()]
},getLeftPanelIndex:function(){var n=this.getPanelIndex()-1;
n=(n<0)?2:n;
return n
},getLeftPanelElement:function(){return this._htWElement.aPanel[this.getLeftPanelIndex()]
},setContentIndex:function(n,bRefresh){if(!this.isActivating()){return
}if(typeof bRefresh==="undefined"){bRefresh=true
}n=parseInt(n,10);
if(n<0||n>(this.option("nTotalContents")-1)){return
}if(bRefresh){if(!this._fireCustomEvent("beforeMove",{nPanelIndex:this.getPanelIndex(),nContentIndex:this.getContentIndex(),nNextPanelIndex:n%3,nNextContentIndex:n})){return
}}this._htIndexInfo.nContentIndex=n;
this._htIndexInfo.nPanelIndex=n%3;
this._htIndexInfo.nNextContentIndex=n;
this._htIndexInfo.nNextPanelIndex=n%3;
if(bRefresh){this.refresh(this._htIndexInfo.nPanelIndex,false,true)
}},getContentIndex:function(){return this._htIndexInfo.nContentIndex
},getRightContentIndex:function(){var n=this.getContentIndex()+1;
n=((n+1)>this.option("nTotalContents"))?0:n;
return n
},getLeftContentIndex:function(){var n=this.getContentIndex()-1;
n=(n<0)?(this.option("nTotalContents")-1):n;
return n
},_attachTouchEvt:function(){this._oTouch.attach({touchMove:this._htEvent.touchMove,touchEnd:this._htEvent.touchEnd,longTap:this._htEvent.longTap})
},_detachTouchEvt:function(){this._oTouch.detach({touchMove:this._htEvent.touchMove,touchEnd:this._htEvent.touchEnd,longTap:this._htEvent.longTap})
},_onStart:function(oCustomEvt){this._detachTouchEvt();
if(this._isFlicking){return
}if(!this.fireEvent("touchStart",oCustomEvt)){return
}this._bTouchStart=true;
this._clearAnchor();
this._attachTouchEvt()
},_onMove:function(oCustomEvt){var bH=this.option("bHorizontal");
var weParent=oCustomEvt.oEvent;
if(oCustomEvt.sMoveType===jindo.m.MOVETYPE[0]){if(bH){weParent.stop(jindo.$Event.CANCEL_ALL)
}else{return
}}else{if(oCustomEvt.sMoveType===jindo.m.MOVETYPE[1]){if(!bH){weParent.stop(jindo.$Event.CANCEL_ALL)
}else{return
}}else{if(oCustomEvt.sMoveType===jindo.m.MOVETYPE[2]){weParent.stop(jindo.$Event.CANCEL_ALL)
}}}if(this._isFlicking){return
}if(!this._bTouchStart){return
}this.fireEvent("touchMove",oCustomEvt);
var nDis=bH?oCustomEvt.nDistanceX:oCustomEvt.nDistanceY;
this._movePanels(nDis,nDis)
},_onEnd:function(oCustomEvt,nTime){this._detachTouchEvt();
if(this._isFlicking){return
}if(!this._bTouchStart){return
}this._isFlicking=true;
var htInfo=this._getSnap(oCustomEvt.nDistanceX,oCustomEvt.nDistanceY,nTime);
if(oCustomEvt.sMoveType===jindo.m.MOVETYPE[0]||oCustomEvt.sMoveType===jindo.m.MOVETYPE[1]||oCustomEvt.sMoveType===jindo.m.MOVETYPE[2]){oCustomEvt.oEvent.stop(jindo.$Event.CANCEL_ALL)
}if(oCustomEvt.sMoveType===jindo.m.MOVETYPE[3]||oCustomEvt.sMoveType===jindo.m.MOVETYPE[4]){this._restoreAnchor()
}var nPanelIndex=this.getPanelIndex();
var nPos=this.option("bHorizontal")?htInfo.nX:htInfo.nY;
var nDis=this.option("bHorizontal")?oCustomEvt.nDistanceX:oCustomEvt.nDistanceY;
if(nPanelIndex==htInfo.nPanelIndex){if(nPos===0){this._onTransitionEnd()
}else{this._movePanels(nPos,nDis,this.option("nBounceDuration"),false)
}return
}var htParam={nPanelIndex:nPanelIndex,nContentIndex:this.getContentIndex(),nNextPanelIndex:htInfo.nPanelIndex,nNextContentIndex:htInfo.nContentIndex};
if(this._bFlickLeft!==null){if(this.option("bHorizontal")){htParam.bLeft=this._bFlickLeft
}else{htParam.bTop=this._bFlickLeft
}}if(!this._fireCustomEvent("beforeFlicking",htParam)){return
}this._htIndexInfo.nNextPanelIndex=htInfo.nPanelIndex;
this._htIndexInfo.nNextContentIndex=htInfo.nContentIndex;
if(htInfo.nTime>0){this._movePanels(nPos,nDis,htInfo.nTime,false)
}else{this._onTransitionEnd()
}this.fireEvent("touchEnd",oCustomEvt)
},_movePanels:function(nPos,nDis,nTime,bMove){var self=this;
if(typeof nTime==="undefined"){nTime=0
}if(typeof bMove==="undefined"){bMove=true
}var welWrapper=this._htWElement.container;
if(bMove||(this._htOption.bUseTimingFunction)||(nTime===0)){this._setPosition(welWrapper,nPos,nTime,!bMove)
}else{var nDuration=nTime;
var startTime=(new Date()).getTime(),nStartDis=nDis,nTotalDis=this._nDefaultSize;
if(nPos<0){nTotalDis=nTotalDis*-1
}(function animate(){var now=(new Date()).getTime(),nEaseOut;
if(now>=startTime+nDuration){clearTimeout(self._nTimerAnimate);
delete self._nTimerAnimate;
setTimeout(function(){self._onTransitionEnd()
},10);
return
}now=(now-startTime)/nDuration-1;
nEaseOut=Math.sqrt(1-Math.pow(now,2));
var nDis=(nTotalDis-nStartDis)*nEaseOut+nStartDis;
self._setPosition(welWrapper,nDis,0,false);
self._nTimerAnimate=setTimeout(animate,1)
})()
}},_focusFixedBug:function(){if(typeof this._htWElement.aDummyTag==="undefined"){return
}for(var i=0,nLen=this._htWElement.aDummyTag.length;
i<nLen;
i++){this._htWElement.aDummyTag[i].focus()
}},_getSnap:function(nDistanceX,nDistanceY,nDuration){var nFinalDis=this.option("bHorizontal")?nDistanceX:nDistanceY;
var nNewPos=this._htContainerInfo.center;
var nTime=(typeof nDuration!="undefined")?nDuration:this.option("nDuration");
var nPanelIndex=this.getPanelIndex();
var nContentIndex=this.getContentIndex();
if(Math.abs(nFinalDis)>this.option("nFlickThreshold")){if(nFinalDis<0){nNewPos=this.option("bUseTranslate")?this._htContainerInfo.left:-200;
nPanelIndex=this.getRightPanelIndex();
nContentIndex=this.getRightContentIndex();
this._bFlickLeft=true
}else{nNewPos=this.option("bUseTranslate")?this._htContainerInfo.right:0;
nPanelIndex=this.getLeftPanelIndex();
nContentIndex=this.getLeftContentIndex();
this._bFlickLeft=false
}}return{nX:nNewPos,nY:nNewPos,nTime:nTime,nPanelIndex:nPanelIndex,nContentIndex:nContentIndex}
},_setPosition:function(wel,nDis,nDuration,bEnd){if(typeof nDuration==="undefined"){nDuration=0
}if(!this._htOption.bUseTranslate){this._setPositionForStyle(wel,nDis,nDuration,bEnd)
}else{this._setPositionTransform(wel,nDis,nDuration,bEnd)
}},_setPositionTransform:function(wel,nDis,nDuration,bEnd){var bH=this.option("bHorizontal");
var nX=bH?nDis:0;
var nY=bH?0:nDis;
var htCss={};
htCss[this._sCssPrefix+"TransitionDuration"]=(nDuration===0)?"0":nDuration+"ms";
htCss[this._sCssPrefix+"Transform"]=this.sTransformStart+nX+"px,"+nY+"px"+this.sTransformEnd;
if(bEnd){var htCssOffset=jindo.m.getCssOffset(wel.$value());
if((htCssOffset.left===nX)&&(htCssOffset.top===nY)){nDuration=0
}this._attachTransitionEnd(wel.$value(),nDuration)
}wel.css(htCss)
},_setPositionForStyle:function(wel,nDis,nDuration,bEnd){var sName=this.option("bHorizontal")?"left":"top";
var n=((nDis/this._nDefaultSize)*100)-100;
var nPos=bEnd?nDis:n;
var htCss={};
htCss[this._sCssPrefix+"TransitionDuration"]=(nDuration===0)?"0":nDuration+"ms";
htCss[sName]=nPos+"%";
if(bEnd){if(nPos===parseFloat(wel.css(sName).replace("px",""),10)){nDuration=0
}this._attachTransitionEnd(wel.$value(),nDuration)
}wel.css(htCss)
},_clearAnchor:function(){if(this._aAnchor&&!this._bBlocked){var aClickAddEvent=null;
for(var i=0,nILength=this._aAnchor.length;
i<nILength;
i++){if(this._fnDummyFnc!==this._aAnchor[i].onclick){this._aAnchor[i]._onclick=this._aAnchor[i].onclick
}this._aAnchor[i].onclick=this._fnDummyFnc;
aClickAddEvent=this._aAnchor[i].___listeners___||[];
for(var j=0,nJLength=aClickAddEvent.length;
j<nJLength;
j++){___Old__removeEventListener___.call(this._aAnchor[i],"click",aClickAddEvent[j].listener,aClickAddEvent[j].useCapture)
}}this._bBlocked=true
}},_restoreAnchor:function(){if(this._aAnchor&&this._bBlocked){var aClickAddEvent=null;
for(var i=0,nILength=this._aAnchor.length;
i<nILength;
i++){if(this._fnDummyFnc!==this._aAnchor[i]._onclick){this._aAnchor[i].onclick=this._aAnchor[i]._onclick
}else{this._aAnchor[i].onclick=null
}aClickAddEvent=this._aAnchor[i].___listeners___||[];
for(var j=0,nJLength=aClickAddEvent.length;
j<nJLength;
j++){___Old__addEventListener___.call(this._aAnchor[i],"click",aClickAddEvent[j].listener,aClickAddEvent[j].useCapture)
}}this._bBlocked=false
}},moveNext:function(nDuration){if(!this.isActivating()){return
}this._bTouchStart=true;
var n=this.option("nFlickThreshold")*-1;
this._onEnd({nDistanceX:n-10,nDistanceY:n-10},nDuration)
},movePrev:function(nDuration){if(!this.isActivating()){return
}var n=this.option("nFlickThreshold");
this._bTouchStart=true;
this._onEnd({nDistanceX:n+10,nDistanceY:n+10},nDuration)
},refresh:function(n,bResize,bFireEvent){if(!this.isActivating()){return
}if(typeof bResize==="undefined"){bResize=false
}if(typeof bFireEvent==="undefined"){bFireEvent=false
}if(bResize){this._setElementSize();
this._updatePanelPosition()
}if(typeof n==="undefined"){n=this.getPanelIndex()
}if(this._htIndexInfo.nPanelIndex!=n){this._htIndexInfo.nPanelIndex=n
}var nCenter=this.getPanelIndex();
var nLeft=this.getLeftPanelIndex();
var nRight=this.getRightPanelIndex();
var sPosition=this.option("bHorizontal")?"left":"top";
this._htWElement.aPanel[nCenter].css(sPosition,this._htPositionInfo.center+"%").css("zIndex",10);
this._htWElement.aPanel[nLeft].css(sPosition,this._htPositionInfo.left+"%").css("zIndex",1);
this._htWElement.aPanel[nRight].css(sPosition,this._htPositionInfo.right+"%").css("zIndex",1);
this._htWElement.container.css(this._sCssPrefix+"TransitionDuration","0ms");
if(this.option("bUseTranslate")){this._htWElement.container.css(this._sCssPrefix+"Transform",this.sTransformStart+"0,0px"+this.sTransformEnd)
}this._htWElement.container.css(sPosition,"-100%");
this._restoreAnchor();
this._setAnchorElement();
if(bFireEvent){this._fireCustomEvent("move")
}},_onTransitionEnd:function(evt){this._detachTransitionEnd();
var bFireEvent=false;
if(this._htIndexInfo.nPanelIndex!=this._htIndexInfo.nNextPanelIndex){bFireEvent=true
}this._htIndexInfo.nContentIndex=this._htIndexInfo.nNextContentIndex;
this.refresh(this._htIndexInfo.nNextPanelIndex);
this._focusFixedBug();
if(bFireEvent){this._fireCustomEvent("afterFlicking")
}this._bFlickLeft=null;
this._isFlicking=false;
this._bTouchStart=false
},_fireCustomEvent:function(sEventName,htParam){if(typeof htParam==="undefined"){htParam={nPanelIndex:this.getPanelIndex(),nContentIndex:this.getContentIndex(),nContentLeftIndex:this.getLeftContentIndex(),nContentRightIndex:this.getRightContentIndex(),nPanelLeftIndex:this.getLeftPanelIndex(),nPanelRightIndex:this.getRightPanelIndex()};
if(this.option("bHorizontal")){htParam.bLeft=this._bFlickLeft
}else{htParam.bTop=this._bFlickLeft
}}return this.fireEvent(sEventName,htParam)
},_attachTransitionEnd:function(el,nDuration){if(el===this._htWElement.container.$value()){this._elTransition=el;
if(nDuration===0){var self=this;
setTimeout(function(){self._onTransitionEnd()
},10)
}else{jindo.m.attachTransitionEnd(this._elTransition,this._wfTransitionEnd)
}}},_detachTransitionEnd:function(){if(this._elTransition){jindo.m.detachTransitionEnd(this._elTransition,this._wfTransitionEnd)
}},_onActivate:function(){this._attachEvent();
this._oTouch.activate();
this._prepareTransition();
this.refresh()
},_onDeactivate:function(){this._detachEvent();
this._oTouch.deactivate()
},_attachEvent:function(){this._htEvent={};
this._htEvent.rotate=jindo.$Fn(this._onResize,this).bind();
jindo.m.bindRotate(this._htEvent.rotate);
this._htEvent.touchMove=jindo.$Fn(this._onMove,this).bind();
this._htEvent.touchEnd=jindo.$Fn(this._onEnd,this).bind();
this._htEvent.touchStart=jindo.$Fn(this._onStart,this).bind();
this._oTouch.attach("touchStart",this._htEvent.touchStart);
this._htEvent.pageshow=jindo.$Fn(this._onPageShow,this).bind();
jindo.m.bindPageshow(this._htEvent.pageshow)
},_onPageShow:function(){this._onResize()
},_detachEvent:function(){jindo.m.unbindRotate(this._htEvent.rotate);
jindo.m.unbindPageshow(this._htEvent.pageshow);
this._oTouch.detachAll();
this._htEvent=null
},destroy:function(){this.deactivate();
for(var p in this._htWElement){this._htWElement[p]=null
}for(p in this._htIndexInfo){this._htIndexInfo[p]=null
}this._oTouch.destroy();
this._elTransition=null;
this._oTouch=null;
this._bFlickLeft=null;
this._isAndroid=null;
this._aCurrentPosition=null;
this.sTransformStart=null;
this.sTransformEnd=null;
this._isIos=null;
this._bUseCss3=null;
this._aAnchor=null;
this._fnDummyFnc=null;
this._sCssPrefix=null;
this._bBlocked=null;
this._isFlicking=null;
this._bTouchStart=null;
for(p in this._htAnimationStep){this._htAnimationStep[p]=null
}this._htAnimationStep=null
}}).extend(jindo.UIComponent);jindo.Component=jindo.$Class({_htEventHandler:null,_htOption:null,$init:function(){var aInstance=this.constructor.getInstance();
aInstance.push(this);
this._htEventHandler={};
this._htOption={};
this._htOption._htSetter={}
},option:function(sName,vValue){switch(typeof sName){case"undefined":return this._htOption;
case"string":if(typeof vValue!="undefined"){if(sName=="htCustomEventHandler"){if(typeof this._htOption[sName]=="undefined"){this.attach(vValue)
}else{return this
}}this._htOption[sName]=vValue;
if(typeof this._htOption._htSetter[sName]=="function"){this._htOption._htSetter[sName](vValue)
}}else{return this._htOption[sName]
}break;
case"object":for(var sKey in sName){if(sKey=="htCustomEventHandler"){if(typeof this._htOption[sKey]=="undefined"){this.attach(sName[sKey])
}else{continue
}}this._htOption[sKey]=sName[sKey];
if(typeof this._htOption._htSetter[sKey]=="function"){this._htOption._htSetter[sKey](sName[sKey])
}}break
}return this
},optionSetter:function(sName,fSetter){switch(typeof sName){case"undefined":return this._htOption._htSetter;
case"string":if(typeof fSetter!="undefined"){this._htOption._htSetter[sName]=jindo.$Fn(fSetter,this).bind()
}else{return this._htOption._htSetter[sName]
}break;
case"object":for(var sKey in sName){this._htOption._htSetter[sKey]=jindo.$Fn(sName[sKey],this).bind()
}break
}return this
},fireEvent:function(sEvent,oEvent){oEvent=oEvent||{};
var fInlineHandler=this["on"+sEvent],aHandlerList=this._htEventHandler[sEvent]||[],bHasInlineHandler=typeof fInlineHandler=="function",bHasHandlerList=aHandlerList.length>0;
if(!bHasInlineHandler&&!bHasHandlerList){return true
}aHandlerList=aHandlerList.concat();
oEvent.sType=sEvent;
if(typeof oEvent._aExtend=="undefined"){oEvent._aExtend=[];
oEvent.stop=function(){if(oEvent._aExtend.length>0){oEvent._aExtend[oEvent._aExtend.length-1].bCanceled=true
}}
}oEvent._aExtend.push({sType:sEvent,bCanceled:false});
var aArg=[oEvent],i,nLen;
for(i=2,nLen=arguments.length;
i<nLen;
i++){aArg.push(arguments[i])
}if(bHasInlineHandler){fInlineHandler.apply(this,aArg)
}if(bHasHandlerList){var fHandler;
for(i=0,fHandler;
(fHandler=aHandlerList[i]);
i++){fHandler.apply(this,aArg)
}}return !oEvent._aExtend.pop().bCanceled
},attach:function(sEvent,fHandlerToAttach){if(arguments.length==1){jindo.$H(arguments[0]).forEach(jindo.$Fn(function(fHandler,sEvent){this.attach(sEvent,fHandler)
},this).bind());
return this
}var aHandler=this._htEventHandler[sEvent];
if(typeof aHandler=="undefined"){aHandler=this._htEventHandler[sEvent]=[]
}aHandler.push(fHandlerToAttach);
return this
},detach:function(sEvent,fHandlerToDetach){if(arguments.length==1){jindo.$H(arguments[0]).forEach(jindo.$Fn(function(fHandler,sEvent){this.detach(sEvent,fHandler)
},this).bind());
return this
}var aHandler=this._htEventHandler[sEvent];
if(aHandler){for(var i=0,fHandler;
(fHandler=aHandler[i]);
i++){if(fHandler===fHandlerToDetach){aHandler=aHandler.splice(i,1);
break
}}}return this
},detachAll:function(sEvent){var aHandler=this._htEventHandler;
if(arguments.length){if(typeof aHandler[sEvent]=="undefined"){return this
}delete aHandler[sEvent];
return this
}for(var o in aHandler){delete aHandler[o]
}return this
}});
jindo.Component.factory=function(aObject,htOption){var aReturn=[],oInstance;
if(typeof htOption=="undefined"){htOption={}
}for(var i=0,el;
(el=aObject[i]);
i++){oInstance=new this(el,htOption);
aReturn[aReturn.length]=oInstance
}return aReturn
};
jindo.Component.getInstance=function(){if(typeof this._aInstance=="undefined"){this._aInstance=[]
}return this._aInstance
};
jindo.UIComponent=jindo.$Class({$init:function(){this._bIsActivating=false
},isActivating:function(){return this._bIsActivating
},activate:function(){if(this.isActivating()){return this
}this._bIsActivating=true;
if(arguments.length>0){this._onActivate.apply(this,arguments)
}else{this._onActivate()
}return this
},deactivate:function(){if(!this.isActivating()){return this
}this._bIsActivating=false;
if(arguments.length>0){this._onDeactivate.apply(this,arguments)
}else{this._onDeactivate()
}return this
}}).extend(jindo.Component);
jindo.ScrollBar=new jindo.$Class({_bMouseEnter:false,_bIsEventAttachedForCommon:false,_bIsEventAttachedForVertical:false,_bIsEventAttachedForHorizontal:false,$init:function(el,oOption){this.option({sClassPrefix:"scrollbar-",nDelta:16,sClassNameForRollover:"rollover",bActivateOnload:true});
this.option(oOption||{});
this._el=jindo.$(el);
this._oTimer=new jindo.Timer();
this._oTransition=new jindo.Transition().fps(30);
this._wfOnMouseEnter=jindo.$Fn(this._onMouseEnter,this);
this._wfOnMouseLeave=jindo.$Fn(this._onMouseLeave,this);
this._wfOnWheel=jindo.$Fn(this._onWheel,this);
this._wfOnMouseUp=jindo.$Fn(this._onMouseUp,this);
this._assignHTMLElements();
this._initialize4Tablet();
if(this.option("bActivateOnload")){this.activate()
}},_assignHTMLElements:function(){var el=this._el,sClassPrefix=this.option("sClassPrefix");
this._elBox=jindo.$$.getSingle("."+sClassPrefix+"box",el);
this._elContent=jindo.$$.getSingle("."+sClassPrefix+"content",el);
var welBox=jindo.$Element(this._elBox),welContent=jindo.$Element(this._elContent);
this._oBoxSize={nWidth:welBox.width(),nHeight:welBox.height()};
this._oContentSize={nWidth:welContent.width(),nHeight:welContent.height()};
this._oHorizontal={elScrollBar:jindo.$$.getSingle("."+sClassPrefix+"h",el)};
var oH=this._oHorizontal;
if(oH.elScrollBar){oH.elTrack=jindo.$$.getSingle("."+sClassPrefix+"track",oH.elScrollBar);
oH.elThumb=jindo.$$.getSingle("."+sClassPrefix+"thumb",oH.elTrack);
oH.elThumbHead=jindo.$$.getSingle("."+sClassPrefix+"thumb-head",oH.elThumb);
oH.elThumbBody=jindo.$$.getSingle("."+sClassPrefix+"thumb-body",oH.elThumb);
oH.elThumbFoot=jindo.$$.getSingle("."+sClassPrefix+"thumb-foot",oH.elThumb);
oH.elButtonLeft=jindo.$$.getSingle("."+sClassPrefix+"button-left",oH.elScrollBar);
oH.elButtonRight=jindo.$$.getSingle("."+sClassPrefix+"button-right",oH.elScrollBar)
}this._oVertical={elScrollBar:jindo.$$.getSingle("."+sClassPrefix+"v",el)};
var oV=this._oVertical;
if(oV.elScrollBar){oV.elTrack=jindo.$$.getSingle("."+sClassPrefix+"track",oV.elScrollBar);
oV.elThumb=jindo.$$.getSingle("."+sClassPrefix+"thumb",oV.elTrack);
oV.elThumbHead=jindo.$$.getSingle("."+sClassPrefix+"thumb-head",oV.elThumb);
oV.elThumbBody=jindo.$$.getSingle("."+sClassPrefix+"thumb-body",oV.elThumb);
oV.elThumbFoot=jindo.$$.getSingle("."+sClassPrefix+"thumb-foot",oV.elThumb);
oV.elButtonUp=jindo.$$.getSingle("."+sClassPrefix+"button-up",oV.elScrollBar);
oV.elButtonDown=jindo.$$.getSingle("."+sClassPrefix+"button-down",oV.elScrollBar)
}},getBox:function(){return this._elBox
},getContent:function(){return this._elContent
},getDefaultBoxSize:function(){return this._oBoxSize
},getDefaultContentSize:function(){return this._oContentSize
},getScrollBarHorizontal:function(){return this._oHorizontal
},getScrollBarVertical:function(){return this._oVertical
},getSliderHorizontal:function(){return this._oSliderHorizontal||null
},getSliderVertical:function(){return this._oSliderVertical||null
},getRolloverArea:function(){return this._oRolloverArea
},_attachEvent:function(sDirection){var sClassPrefix=this.option("sClassPrefix"),self=this,oH=this.getScrollBarHorizontal(),oV=this.getScrollBarVertical();
function attach(o){if(o.elScrollBar){var sClassNameForRollover=self.option("sClassNameForRollover");
jindo.$Element(o.elTrack).addClass(sClassNameForRollover);
jindo.$Element(o.elThumb).addClass(sClassNameForRollover);
if(o.elButtonLeft){jindo.$Element(o.elButtonLeft).addClass(sClassNameForRollover)
}if(o.elButtonRight){jindo.$Element(o.elButtonRight).addClass(sClassNameForRollover)
}if(o.elButtonUp){jindo.$Element(o.elButtonUp).addClass(sClassNameForRollover)
}if(o.elButtonDown){jindo.$Element(o.elButtonDown).addClass(sClassNameForRollover)
}}}function attachH(){if(!self._bIsEventAttachedForHorizontal){attach(oH)
}self._bIsEventAttachedForHorizontal=true
}function attachV(){if(!self._bIsEventAttachedForVertical){attach(oV)
}self._bIsEventAttachedForVertical=true
}if(!this._bIsEventAttachedForCommon){this._initSliders();
this._initRolloverArea();
this._wfOnMouseEnter.attach(this._el,"mouseenter");
this._wfOnMouseLeave.attach(this._el,"mouseleave");
this._wfOnWheel.attach(document,"mousewheel");
this._wfOnMouseUp.attach(document,"mouseup");
this._bIsEventAttachedForCommon=true;
jindo.$Element(this._el).removeClass(sClassPrefix+"noscript")
}if(!sDirection){attachH();
attachV()
}if(sDirection=="horizontal"){attachH()
}if(sDirection=="vertical"){attachV()
}},_detachEvent:function(sDirection){var sClassPrefix=this.option("sClassPrefix"),self=this,oH=this.getScrollBarHorizontal(),oV=this.getScrollBarVertical();
function detach(o){if(o.elScrollBar){var sClassNameForRollover=self.option("sClassNameForRollover");
jindo.$Element(o.elTrack).removeClass(sClassNameForRollover);
jindo.$Element(o.elThumb).removeClass(sClassNameForRollover);
if(o.elButtonLeft){jindo.$Element(o.elButtonLeft).removeClass(sClassNameForRollover)
}if(o.elButtonRight){jindo.$Element(o.elButtonRight).removeClass(sClassNameForRollover)
}if(o.elButtonUp){jindo.$Element(o.elButtonUp).removeClass(sClassNameForRollover)
}if(o.elButtonDown){jindo.$Element(o.elButtonDown).removeClass(sClassNameForRollover)
}}}function detachH(){if(self._bIsEventAttachedForHorizontal){detach(oH)
}self._bIsEventAttachedForHorizontal=false
}function detachV(){if(self._bIsEventAttachedForVertical){detach(oV)
}self._bIsEventAttachedForVertical=false
}if(!sDirection){detachH();
detachV()
}else{if(sDirection=="horizontal"){detachH()
}else{if(sDirection=="vertical"){detachV()
}}}if(this._bIsEventAttachedForCommon&&!this._bIsEventAttachedForHorizontal&&!this._bIsEventAttachedForVertical){this._wfOnMouseEnter.detach(this._el,"mouseenter");
this._wfOnMouseLeave.detach(this._el,"mouseleave");
this._wfOnWheel.detach(document,"mousewheel");
this._wfOnMouseUp.detach(document,"mouseup");
this._bMouseEnter=false;
this._bIsEventAttachedForCommon=false;
this.getRolloverArea().deactivate();
jindo.$Element(this._el).addClass(sClassPrefix+"noscript")
}},_activateH:function(){var oSliderH=this.getSliderHorizontal();
if(oSliderH){oSliderH.activate();
this.getBox().scrollLeft=0;
this.setScrollLeft(0)
}},_activateV:function(){var oSliderV=this.getSliderVertical();
if(oSliderV){oSliderV.activate();
this.getBox().scrollTop=0;
this.setScrollTop(0)
}},_onActivate:function(sDirection){this._attachEvent(sDirection||null);
this._activate4Tablet();
if(!sDirection){this._activateH();
this._activateV();
jindo.$Element(this._el).removeClass(this.option("sClassPrefix")+"noscript");
return
}if(sDirection=="horizontal"){this._activateH();
return
}if(sDirection=="vertical"){this._activateV();
return
}},_deactivateH:function(){var oSliderH=this.getSliderHorizontal();
if(oSliderH){oSliderH.deactivate();
this.getContent().style.left="0px";
this.getBox().scrollLeft=0
}},_deactivateV:function(){var oSliderV=this.getSliderVertical();
if(oSliderV){oSliderV.deactivate();
this.getContent().style.top="0px";
this.getBox().scrollTop=0
}},_onDeactivate:function(sDirection){this._detachEvent(sDirection||null);
this._deactivate4Tablet();
if(!sDirection){this._deactivateH();
this._deactivateV();
jindo.$Element(this._el).addClass(this.option("sClassPrefix")+"noscript");
return
}if(sDirection=="horizontal"){this._deactivateH();
return
}if(sDirection=="vertical"){this._deactivateV();
return
}},_initSliders:function(){var self=this,sClassPrefix=this.option("sClassPrefix"),oH=this.getScrollBarHorizontal(),oV=this.getScrollBarVertical();
if(oH.elScrollBar){this._nScrollWidth=jindo.$Element(this._elContent).width()-jindo.$Element(this._elBox).width();
this._oSliderHorizontal=new jindo.Slider(oH.elTrack,{sClassPrefix:sClassPrefix,bVertical:false,nMinValue:0,nMaxValue:this._nScrollWidth});
this._oSliderHorizontal._oTransition=new jindo.Transition().fps(30);
this._oSliderHorizontal.attach({beforeChange:function(oCustomEvent){var nTrackWidth=jindo.$Element(this.getTrack()).width(),nThumbWidth=jindo.$Element(this.getThumb(oCustomEvent.nIndex)).width(),nAvailWidth=nTrackWidth-nThumbWidth;
oCustomEvent.nPos=Math.min(oCustomEvent.nPos,nAvailWidth);
oCustomEvent.nPos=Math.max(oCustomEvent.nPos,0);
if(oCustomEvent.bJump){oCustomEvent.stop();
this._oTransition.abort().start(200,this.getThumb(oCustomEvent.nIndex),{"@left":jindo.Effect.easeOut(oCustomEvent.nPos+"px")}).attach({playing:function(oCustomEvent2){self.setScrollLeft(self._oSliderHorizontal._getValue(0,parseInt(oCustomEvent2.sValue,10)))
}})
}else{self.setScrollLeft(this._getValue(0,oCustomEvent.nPos))
}}})
}if(oV.elScrollBar){this._nScrollHeight=jindo.$Element(this._elContent).height()-jindo.$Element(this._elBox).height();
this._oSliderVertical=new jindo.Slider(oV.elTrack,{sClassPrefix:sClassPrefix,bVertical:true,nMinValue:0,nMaxValue:this._nScrollHeight});
this._oSliderVertical._oTransition=new jindo.Transition().fps(30);
this._oSliderVertical.attach({beforeChange:function(oCustomEvent){var nTrackHeight=jindo.$Element(this.getTrack()).height(),nThumbHeight=jindo.$Element(this.getThumb(oCustomEvent.nIndex)).height(),nAvailHeight=nTrackHeight-nThumbHeight;
oCustomEvent.nPos=Math.min(oCustomEvent.nPos,nAvailHeight);
oCustomEvent.nPos=Math.max(oCustomEvent.nPos,0);
if(oCustomEvent.bJump){oCustomEvent.stop();
this._oTransition.abort().start(200,this.getThumb(oCustomEvent.nIndex),{"@top":jindo.Effect.easeOut(oCustomEvent.nPos+"px")}).attach({playing:function(oCustomEvent2){self.setScrollTop(self._oSliderVertical.values(0))
}})
}else{self.setScrollTop(this._getValue(0,oCustomEvent.nPos))
}}})
}},_initRolloverArea:function(){var self=this,sClassPrefix=this.option("sClassPrefix"),sClassNameForRollover=this.option("sClassNameForRollover");
this._oRolloverArea=new jindo.RolloverArea(this._el,{sClassName:sClassNameForRollover,sClassPrefix:sClassPrefix}).attach({over:function(oCustomEvent){oCustomEvent.stop();
self._onRollover("over",oCustomEvent.element)
},down:function(oCustomEvent){oCustomEvent.stop();
self._onMouseDown(oCustomEvent.element);
self._onRollover("down",oCustomEvent.element)
},up:function(oCustomEvent){oCustomEvent.stop();
self._onMouseUp(oCustomEvent.element);
self._onRollover("up",oCustomEvent.element)
},out:function(oCustomEvent){oCustomEvent.stop();
self._onRollover("out",oCustomEvent.element)
}})
},reset:function(){var oSliderH=this.getSliderHorizontal(),oSliderV=this.getSliderVertical();
if(oSliderH){this._nScrollWidth=jindo.$Element(this._elContent).width()-jindo.$Element(this._elBox).width();
oSliderH.option("nMaxValue",this._nScrollWidth);
this.setScrollLeft(0)
}if(oSliderV){this._nScrollHeight=jindo.$Element(this._elContent).height()-jindo.$Element(this._elBox).height();
oSliderV.option("nMaxValue",this._nScrollHeight);
this.setScrollTop(0)
}this._elBox.scrollLeft=0;
this._elBox.scrollTop=0
},hasScrollBarHorizontal:function(){var sClassPrefix=this.option("sClassPrefix"),o=this.getScrollBarHorizontal();
if(o.elScrollBar){var welScrollBar=jindo.$Element(o.elScrollBar);
return welScrollBar.visible()||welScrollBar.hasClass(sClassPrefix+"show")
}return false
},hasScrollBarVertical:function(){var sClassPrefix=this.option("sClassPrefix"),o=this.getScrollBarVertical();
if(o.elScrollBar){var welScrollBar=jindo.$Element(o.elScrollBar);
return welScrollBar.visible()||welScrollBar.hasClass(sClassPrefix+"show")
}return false
},setScrollTop:function(n){n=Math.min(n,this._nScrollHeight);
n=Math.max(n,0);
n=Math.round(n);
var htParam={sDirection:"top",nPosition:n};
jindo.$Element(this._elContent).css("top",(htParam.nPosition*-1)+"px");
var oSliderV=this.getSliderVertical();
if(oSliderV){oSliderV.values(0,htParam.nPosition,false)
}this._fireScrollEvent(htParam)
},setScrollLeft:function(n){n=Math.min(n,this._nScrollWidth);
n=Math.max(n,0);
n=Math.round(n);
var htParam={sDirection:"left",nPosition:n};
jindo.$Element(this._elContent).css("left",(htParam.nPosition*-1)+"px");
var oSliderH=this.getSliderHorizontal();
if(oSliderH){oSliderH.values(0,htParam.nPosition,false)
}this._fireScrollEvent(htParam)
},setScrollTopBy:function(n){this.setScrollTop(this.getScrollTop()+n)
},setScrollLeftBy:function(n){this.setScrollLeft(this.getScrollLeft()+n)
},getScrollTop:function(n){return parseInt(jindo.$Element(this._elContent).css("top"),10)*-1
},getScrollLeft:function(n){return parseInt(jindo.$Element(this._elContent).css("left"),10)*-1
},_getElementType:function(wel){var sClassPrefix=this.option("sClassPrefix");
if(wel.hasClass(sClassPrefix+"track")){return"track"
}else{if(wel.hasClass(sClassPrefix+"thumb")){return"thumb"
}else{if(wel.hasClass(sClassPrefix+"button-up")){return"button-up"
}else{if(wel.hasClass(sClassPrefix+"button-up")){return"button-up"
}else{if(wel.hasClass(sClassPrefix+"button-down")){return"button-down"
}else{if(wel.hasClass(sClassPrefix+"button-left")){return"button-left"
}else{if(wel.hasClass(sClassPrefix+"button-right")){return"button-right"
}else{return false
}}}}}}}},_fireScrollEvent:function(htParam){this.fireEvent("scroll",htParam)
},_onWheel:function(we){if(!this._bMouseEnter){return
}we.stop(jindo.$Event.CANCEL_DEFAULT);
var nDelta=we.mouse().delta,nDirection=nDelta/Math.abs(nDelta)*-1,n=Math.ceil(Math.abs(nDelta))*nDirection*this.option("nDelta"),bH=this.hasScrollBarHorizontal(),bV=this.hasScrollBarVertical();
if(!bH&&!bV){return
}if(this.hasScrollBarVertical()&&this._bIsEventAttachedForVertical){this.setScrollTop(this.getScrollTop()+n);
return
}this.setScrollLeft(this.getScrollLeft()+n)
},_onMouseDown:function(el){var wel=jindo.$Element(el),self=this,setScrollBy,sElementType=this._getElementType(wel);
switch(sElementType){case"button-up":setScrollBy=function(n){self.setScrollTopBy(~~(n*-1))
};
break;
case"button-down":setScrollBy=function(n){self.setScrollTopBy(n)
};
break;
case"button-left":setScrollBy=function(n){self.setScrollLeftBy(~~(n*-1))
};
break;
case"button-right":setScrollBy=function(n){self.setScrollLeftBy(n)
};
break;
default:return
}this._oTimer.start(function(){setScrollBy(16);
return true
},100)
},_onMouseUp:function(el){this._oTimer.abort()
},_onMouseEnter:function(we){this._bMouseEnter=true
},_onMouseLeave:function(we){this._bMouseEnter=false
},_onRollover:function(sType,el){var wel=jindo.$Element(el),sClassPrefix=this.option("sClassPrefix"),sElementType=this._getElementType(wel);
switch(sType){case"over":wel.addClass(sClassPrefix+sElementType+"-over");
break;
case"down":wel.addClass(sClassPrefix+sElementType+"-hold");
break;
case"up":wel.removeClass(sClassPrefix+sElementType+"-hold");
break;
case"out":wel.removeClass(sClassPrefix+sElementType+"-over");
break
}},_initialize4Tablet:function(){this._fpOnTouchDragStart=jindo.$Fn(function(oEvent){this._oPos4Tablet=oEvent.pos()
},this);
this._fpOnTouchDragMove=jindo.$Fn(function(oEvent){if(!this._oPos4Tablet){return
}var oOldPos=this._oPos4Tablet;
var oNewPos=oEvent.pos();
this.setScrollLeftBy(oOldPos.pageX-oNewPos.pageX);
this.setScrollTopBy(oOldPos.pageY-oNewPos.pageY);
this._oPos4Tablet=oNewPos;
oEvent.stopDefault()
},this);
this._fpOnTouchDragEnd=jindo.$Fn(function(oEvent){this._oPos4Tablet=null
},this)
},_activate4Tablet:function(){var elEl=this._elContent;
jindo.$Element.prototype.preventTapHighlight&&jindo.$Element(this._el).preventTapHighlight(true);
this._fpOnTouchDragStart.attach(elEl,"touchstart");
this._fpOnTouchDragMove.attach(elEl,"touchmove");
this._fpOnTouchDragEnd.attach(elEl,"touchend")
},_deactivate4Tablet:function(){var elEl=this._elContent;
jindo.$Element.prototype.preventTapHighlight&&jindo.$Element(this._el).preventTapHighlight(false);
this._fpOnTouchDragStart.detach(elEl,"touchstart");
this._fpOnTouchDragMove.detach(elEl,"touchmove");
this._fpOnTouchDragEnd.detach(elEl,"touchend")
}}).extend(jindo.UIComponent);
jindo.Effect=function(fEffect){if(this instanceof arguments.callee){throw new Error("You can't create a instance of this")
}var rxNumber=/^(\-?[0-9\.]+)(%|px|pt|em)?$/,rxRGB=/^rgb\(([0-9]+)\s?,\s?([0-9]+)\s?,\s?([0-9]+)\)$/i,rxHex=/^#([0-9A-F]{2})([0-9A-F]{2})([0-9A-F]{2})$/i,rx3to6=/^#([0-9A-F])([0-9A-F])([0-9A-F])$/i;
var getUnitAndValue=function(v){var nValue=v,sUnit;
if(rxNumber.test(v)){nValue=parseFloat(v);
sUnit=RegExp.$2||""
}else{if(rxRGB.test(v)){nValue=[parseInt(RegExp.$1,10),parseInt(RegExp.$2,10),parseInt(RegExp.$3,10)];
sUnit="color"
}else{if(rxHex.test(v=v.replace(rx3to6,"#$1$1$2$2$3$3"))){nValue=[parseInt(RegExp.$1,16),parseInt(RegExp.$2,16),parseInt(RegExp.$3,16)];
sUnit="color"
}}}return{nValue:nValue,sUnit:sUnit}
};
return function(nStart,nEnd){var sUnit;
if(arguments.length>1){nStart=getUnitAndValue(nStart);
nEnd=getUnitAndValue(nEnd);
sUnit=nEnd.sUnit
}else{nEnd=getUnitAndValue(nStart);
nStart=null;
sUnit=nEnd.sUnit
}if(nStart&&nEnd&&nStart.sUnit!=nEnd.sUnit){throw new Error("unit error")
}nStart=nStart&&nStart.nValue;
nEnd=nEnd&&nEnd.nValue;
var fReturn=function(p){var nValue=fEffect(p),getResult=function(s,d){return(d-s)*nValue+s+sUnit
};
if(sUnit=="color"){var r=Math.max(0,Math.min(255,parseInt(getResult(nStart[0],nEnd[0]),10)))<<16;
r|=Math.max(0,Math.min(255,parseInt(getResult(nStart[1],nEnd[1]),10)))<<8;
r|=Math.max(0,Math.min(255,parseInt(getResult(nStart[2],nEnd[2]),10)));
r=r.toString(16).toUpperCase();
for(var i=0;
6-r.length;
i++){r="0"+r
}return"#"+r
}return getResult(nStart,nEnd)
};
if(nStart===null){fReturn.setStart=function(s){s=getUnitAndValue(s);
if(s.sUnit!=sUnit){throw new Error("unit eror")
}nStart=s.nValue
}
}return fReturn
}
};
jindo.Effect.linear=jindo.Effect(function(s){return s
});
jindo.Effect.easeInSine=jindo.Effect(function(s){return(s==1)?1:-Math.cos(s*(Math.PI/2))+1
});
jindo.Effect.easeOutSine=jindo.Effect(function(s){return Math.sin(s*(Math.PI/2))
});
jindo.Effect.easeInOutSine=jindo.Effect(function(s){return(s<0.5)?jindo.Effect.easeInSine(0,1)(2*s)*0.5:jindo.Effect.easeOutSine(0,1)((2*s)-1)*0.5+0.5
});
jindo.Effect.easeOutInSine=jindo.Effect(function(s){return(s<0.5)?jindo.Effect.easeOutSine(0,1)(2*s)*0.5:jindo.Effect.easeInSine(0,1)((2*s)-1)*0.5+0.5
});
jindo.Effect.easeInQuad=jindo.Effect(function(s){return s*s
});
jindo.Effect.easeOutQuad=jindo.Effect(function(s){return -(s*(s-2))
});
jindo.Effect.easeInOutQuad=jindo.Effect(function(s){return(s<0.5)?jindo.Effect.easeInQuad(0,1)(2*s)*0.5:jindo.Effect.easeOutQuad(0,1)((2*s)-1)*0.5+0.5
});
jindo.Effect.easeOutInQuad=jindo.Effect(function(s){return(s<0.5)?jindo.Effect.easeOutQuad(0,1)(2*s)*0.5:jindo.Effect.easeInQuad(0,1)((2*s)-1)*0.5+0.5
});
jindo.Effect.easeInCubic=jindo.Effect(function(s){return Math.pow(s,3)
});
jindo.Effect.easeOutCubic=jindo.Effect(function(s){return Math.pow((s-1),3)+1
});
jindo.Effect.easeInOutCubic=jindo.Effect(function(s){return(s<0.5)?jindo.Effect.easeIn(0,1)(2*s)*0.5:jindo.Effect.easeOut(0,1)((2*s)-1)*0.5+0.5
});
jindo.Effect.easeOutInCubic=jindo.Effect(function(s){return(s<0.5)?jindo.Effect.easeOut(0,1)(2*s)*0.5:jindo.Effect.easeIn(0,1)((2*s)-1)*0.5+0.5
});
jindo.Effect.easeInQuart=jindo.Effect(function(s){return Math.pow(s,4)
});
jindo.Effect.easeOutQuart=jindo.Effect(function(s){return -(Math.pow(s-1,4)-1)
});
jindo.Effect.easeInOutQuart=jindo.Effect(function(s){return(s<0.5)?jindo.Effect.easeInQuart(0,1)(2*s)*0.5:jindo.Effect.easeOutQuart(0,1)((2*s)-1)*0.5+0.5
});
jindo.Effect.easeOutInQuart=jindo.Effect(function(s){return(s<0.5)?jindo.Effect.easeOutQuart(0,1)(2*s)*0.5:jindo.Effect.easeInQuart(0,1)((2*s)-1)*0.5+0.5
});
jindo.Effect.easeInQuint=jindo.Effect(function(s){return Math.pow(s,5)
});
jindo.Effect.easeOutQuint=jindo.Effect(function(s){return Math.pow(s-1,5)+1
});
jindo.Effect.easeInOutQuint=jindo.Effect(function(s){return(s<0.5)?jindo.Effect.easeInQuint(0,1)(2*s)*0.5:jindo.Effect.easeOutQuint(0,1)((2*s)-1)*0.5+0.5
});
jindo.Effect.easeOutInQuint=jindo.Effect(function(s){return(s<0.5)?jindo.Effect.easeOutQuint(0,1)(2*s)*0.5:jindo.Effect.easeInQuint(0,1)((2*s)-1)*0.5+0.5
});
jindo.Effect.easeInCircle=jindo.Effect(function(s){return -(Math.sqrt(1-(s*s))-1)
});
jindo.Effect.easeOutCircle=jindo.Effect(function(s){return Math.sqrt(1-(s-1)*(s-1))
});
jindo.Effect.easeInOutCircle=jindo.Effect(function(s){return(s<0.5)?jindo.Effect.easeInCircle(0,1)(2*s)*0.5:jindo.Effect.easeOutCircle(0,1)((2*s)-1)*0.5+0.5
});
jindo.Effect.easeOutInCircle=jindo.Effect(function(s){return(s<0.5)?jindo.Effect.easeOutCircle(0,1)(2*s)*0.5:jindo.Effect.easeInCircle(0,1)((2*s)-1)*0.5+0.5
});
jindo.Effect.easeInBack=jindo.Effect(function(s){var n=1.70158;
return(s==1)?1:(s/1)*(s/1)*((1+n)*s-n)
});
jindo.Effect.easeOutBack=jindo.Effect(function(s){var n=1.70158;
return(s===0)?0:(s=s/1-1)*s*((n+1)*s+n)+1
});
jindo.Effect.easeInOutBack=jindo.Effect(function(s){return(s<0.5)?jindo.Effect.easeInBack(0,1)(2*s)*0.5:jindo.Effect.easeOutBack(0,1)((2*s)-1)*0.5+0.5
});
jindo.Effect.easeInElastic=jindo.Effect(function(s){var p=0,a=0,n;
if(s===0){return 0
}if((s/=1)==1){return 1
}if(!p){p=0.3
}if(!a||a<1){a=1;
n=p/4
}else{n=p/(2*Math.PI)*Math.asin(1/a)
}return -(a*Math.pow(2,10*(s-=1))*Math.sin((s-1)*(2*Math.PI)/p))
});
jindo.Effect.easeOutElastic=jindo.Effect(function(s){var p=0,a=0,n;
if(s===0){return 0
}if((s/=1)==1){return 1
}if(!p){p=0.3
}if(!a||a<1){a=1;
n=p/4
}else{n=p/(2*Math.PI)*Math.asin(1/a)
}return(a*Math.pow(2,-10*s)*Math.sin((s-n)*(2*Math.PI)/p)+1)
});
jindo.Effect.easeInOutElastic=jindo.Effect(function(s){var p=0,a=0,n;
if(s===0){return 0
}if((s/=1/2)==2){return 1
}if(!p){p=(0.3*1.5)
}if(!a||a<1){a=1;
n=p/4
}else{n=p/(2*Math.PI)*Math.asin(1/a)
}if(s<1){return -0.5*(a*Math.pow(2,10*(s-=1))*Math.sin((s-n)*(2*Math.PI)/p))
}return a*Math.pow(2,-10*(s-=1))*Math.sin((s-n)*(2*Math.PI)/p)*0.5+1
});
jindo.Effect.easeOutBounce=jindo.Effect(function(s){if(s<(1/2.75)){return(7.5625*s*s)
}else{if(s<(2/2.75)){return(7.5625*(s-=(1.5/2.75))*s+0.75)
}else{if(s<(2.5/2.75)){return(7.5625*(s-=(2.25/2.75))*s+0.9375)
}else{return(7.5625*(s-=(2.625/2.75))*s+0.984375)
}}}});
jindo.Effect.easeInBounce=jindo.Effect(function(s){return 1-jindo.Effect.easeOutBounce(0,1)(1-s)
});
jindo.Effect.easeInOutBounce=jindo.Effect(function(s){return(s<0.5)?jindo.Effect.easeInBounce(0,1)(2*s)*0.5:jindo.Effect.easeOutBounce(0,1)((2*s)-1)*0.5+0.5
});
jindo.Effect.easeInExpo=jindo.Effect(function(s){return(s===0)?0:Math.pow(2,10*(s-1))
});
jindo.Effect.easeOutExpo=jindo.Effect(function(s){return(s==1)?1:-Math.pow(2,-10*s/1)+1
});
jindo.Effect.easeInOutExpo=jindo.Effect(function(s){return(s<0.5)?jindo.Effect.easeInExpo(0,1)(2*s)*0.5:jindo.Effect.easeOutExpo(0,1)((2*s)-1)*0.5+0.5
});
jindo.Effect.easeOutInExpo=jindo.Effect(function(s){return(s<0.5)?jindo.Effect.easeOutExpo(0,1)(2*s)*0.5:jindo.Effect.easeInExpo(0,1)((2*s)-1)*0.5+0.5
});
jindo.Effect._cubicBezier=function(x1,y1,x2,y2){return function(t){var cx=3*x1,bx=3*(x2-x1)-cx,ax=1-cx-bx,cy=3*y1,by=3*(y2-y1)-cy,ay=1-cy-by;
function sampleCurveX(t){return((ax*t+bx)*t+cx)*t
}function sampleCurveY(t){return((ay*t+by)*t+cy)*t
}function sampleCurveDerivativeX(t){return(3*ax*t+2*bx)*t+cx
}function solveCurveX(x,epsilon){var t0,t1,t2,x2,d2,i;
for(t2=x,i=0;
i<8;
i++){x2=sampleCurveX(t2)-x;
if(Math.abs(x2)<epsilon){return t2
}d2=sampleCurveDerivativeX(t2);
if(Math.abs(d2)<0.000001){break
}t2=t2-x2/d2
}t0=0;
t1=1;
t2=x;
if(t2<t0){return t0
}if(t2>t1){return t1
}while(t0<t1){x2=sampleCurveX(t2);
if(Math.abs(x2-x)<epsilon){return t2
}if(x>x2){t0=t2
}else{t1=t2
}t2=(t1-t0)*0.5+t0
}return t2
}return sampleCurveY(solveCurveX(t,1/200))
}
};
jindo.Effect.cubicBezier=function(x1,y1,x2,y2){return jindo.Effect(jindo.Effect._cubicBezier(x1,y1,x2,y2))
};
jindo.Effect.cubicEase=jindo.Effect.cubicBezier(0.25,0.1,0.25,1);
jindo.Effect.cubicEaseIn=jindo.Effect.cubicBezier(0.42,0,1,1);
jindo.Effect.cubicEaseOut=jindo.Effect.cubicBezier(0,0,0.58,1);
jindo.Effect.cubicEaseInOut=jindo.Effect.cubicBezier(0.42,0,0.58,1);
jindo.Effect.cubicEaseOutIn=jindo.Effect.cubicBezier(0,0.42,1,0.58);
jindo.Effect.overphase=jindo.Effect(function(s){s/=0.652785;
return(Math.sqrt((2-s)*s)+(0.1*s)).toFixed(5)
});
jindo.Effect.sinusoidal=jindo.Effect(function(s){return(-Math.cos(s*Math.PI)/2)+0.5
});
jindo.Effect.mirror=jindo.Effect(function(s){return(s<0.5)?jindo.Effect.sinusoidal(0,1)(s*2):jindo.Effect.sinusoidal(0,1)(1-(s-0.5)*2)
});
jindo.Effect.pulse=function(nPulse){return jindo.Effect(function(s){return(-Math.cos((s*(nPulse-0.5)*2)*Math.PI)/2)+0.5
})
};
jindo.Effect.wave=function(nPeriod,nHeight){return jindo.Effect(function(s){return(nHeight||1)*(Math.sin(nPeriod*(s*360)*Math.PI/180)).toFixed(5)
})
};
jindo.Effect.easeIn=jindo.Effect.easeInCubic;
jindo.Effect.easeOut=jindo.Effect.easeOutCubic;
jindo.Effect.easeInOut=jindo.Effect.easeInOutCubic;
jindo.Effect.easeOutIn=jindo.Effect.easeOutInCubic;
jindo.Effect.bounce=jindo.Effect.easeOutBounce;
jindo.Effect.elastic=jindo.Effect.easeInElastic;
jindo.Timer=jindo.$Class({$init:function(){this._nTimer=null;
this._nLatest=null;
this._nRemained=0;
this._nDelay=null;
this._fRun=null;
this._bIsRunning=false
},start:function(fRun,nDelay){this.abort();
this._nRemained=0;
this._nDelay=nDelay;
this._fRun=fRun;
this._bIsRunning=true;
this._nLatest=this._getTime();
this.fireEvent("wait");
this._excute(this._nDelay,false);
return true
},isRunning:function(){return this._bIsRunning
},_getTime:function(){return new Date().getTime()
},_clearTimer:function(){var bFlag=false;
if(this._nTimer){clearInterval(this._nTimer);
this._bIsRunning=false;
bFlag=true
}this._nTimer=null;
return bFlag
},abort:function(){var bReturn=this._clearTimer();
if(bReturn){this.fireEvent("abort");
this._fRun=null
}return bReturn
},pause:function(){var nPassed=this._getTime()-this._nLatest;
this._nRemained=Math.max(this._nDelay-nPassed,0);
return this._clearTimer()
},_excute:function(nDelay,bResetDelay){var self=this;
this._clearTimer();
this._bIsRunning=true;
this._nTimer=setInterval(function(){if(self._nTimer){self.fireEvent("run");
var r=self._fRun();
self._nLatest=self._getTime();
if(!r){clearInterval(self._nTimer);
self._nTimer=null;
self._bIsRunning=false;
self.fireEvent("end");
return
}self.fireEvent("wait");
if(bResetDelay){self._excute(self._nDelay,false)
}}},nDelay)
},resume:function(){if(!this._fRun||this.isRunning()){return false
}this._bIsRunning=true;
this.fireEvent("wait");
this._excute(this._nRemained,true);
this._nRemained=0;
return true
}}).extend(jindo.Component);
jindo.Transition=jindo.$Class({_nFPS:30,_aTaskQueue:null,_oTimer:null,_bIsWaiting:true,_bIsPlaying:false,$init:function(htOption){this._aTaskQueue=[];
this._oTimer=new jindo.Timer();
this._oSleepTimer=new jindo.Timer();
this.option({fEffect:jindo.Effect.linear,bCorrection:false});
this.option(htOption||{})
},fps:function(nFPS){if(arguments.length>0){this._nFPS=nFPS;
return this
}return this._nFPS
},isPlaying:function(){return this._bIsPlaying
},abort:function(){this._aTaskQueue=[];
this._oTimer.abort();
this._oSleepTimer.abort();
if(this._bIsPlaying){this.fireEvent("abort")
}this._bIsWaiting=true;
this._bIsPlaying=false;
this._htTaskToDo=null;
return this
},start:function(nDuration,elTarget,htInfo){if(arguments.length>0){this.queue.apply(this,arguments)
}this._prepareNextTask();
return this
},queue:function(nDuration,aCommand){var htTask;
if(typeof arguments[0]=="function"){htTask={sType:"function",fTask:arguments[0]}
}else{var a=[];
if(arguments[1] instanceof Array){a=arguments[1]
}else{var aInner=[];
jindo.$A(arguments).forEach(function(v,i){if(i>0){aInner.push(v);
if(i%2===0){a.push(aInner.concat());
aInner=[]
}}})
}htTask={sType:"task",nDuration:nDuration,aList:[]};
for(var i=0,nLen=a.length;
i<nLen;
i++){var aValue=[],htArg=a[i][1],sEnd;
for(var sKey in htArg){sEnd=htArg[sKey];
if(/^(@|style\.)(\w+)/i.test(sKey)){aValue.push(["style",RegExp.$2,sEnd])
}else{aValue.push(["attr",sKey,sEnd])
}}htTask.aList.push({elTarget:a[i][0],aValue:aValue})
}}this._queueTask(htTask);
return this
},pause:function(){if(this._oTimer.abort()){this.fireEvent("pause")
}return this
},resume:function(){if(this._htTaskToDo){if(this._bIsWaiting===false&&this._bIsPlaying===true){this.fireEvent("resume")
}this._doTask();
this._bIsWaiting=false;
this._bIsPlaying=true;
var self=this;
this._oTimer.start(function(){var bEnd=!self._doTask();
if(bEnd){self._bIsWaiting=true;
setTimeout(function(){self._prepareNextTask()
},0)
}return !bEnd
},this._htTaskToDo.nInterval)
}return this
},precede:function(nDuration,elTarget,htInfo){this.start.apply(this,arguments);
return this
},sleep:function(nDuration,fCallback){if(typeof fCallback=="undefined"){fCallback=function(){}
}this._queueTask({sType:"sleep",nDuration:nDuration,fCallback:fCallback});
this._prepareNextTask();
return this
},_queueTask:function(v){this._aTaskQueue.push(v)
},_dequeueTask:function(){var htTask=this._aTaskQueue.shift();
if(htTask){if(htTask.sType=="task"){var aList=htTask.aList;
for(var i=0,nLength=aList.length;
i<nLength;
i++){var elTarget=aList[i].elTarget,welTarget=null;
for(var j=0,aValue=aList[i].aValue,nJLen=aValue.length;
j<nJLen;
j++){var sType=aValue[j][0],sKey=aValue[j][1],fFunc=aValue[j][2];
if(typeof fFunc!="function"){var fEffect=this.option("fEffect");
if(fFunc instanceof Array){fFunc=fEffect(fFunc[0],fFunc[1])
}else{fFunc=fEffect(fFunc)
}aValue[j][2]=fFunc
}if(fFunc.setStart){if(this._isHTMLElement(elTarget)){welTarget=welTarget||jindo.$Element(elTarget);
switch(sType){case"style":fFunc.setStart(welTarget.css(sKey));
break;
case"attr":fFunc.setStart(welTarget.$value()[sKey]);
break
}}else{fFunc.setStart(elTarget.getter(sKey))
}}}}}return htTask
}else{return null
}},_prepareNextTask:function(){if(this._bIsWaiting){var htTask=this._dequeueTask();
if(htTask){switch(htTask.sType){case"task":if(!this._bIsPlaying){this.fireEvent("start")
}var nInterval=1000/this._nFPS,nGap=nInterval/htTask.nDuration;
this._htTaskToDo={aList:htTask.aList,nRatio:0,nInterval:nInterval,nGap:nGap,nStep:0,nTotalStep:Math.ceil(htTask.nDuration/nInterval)};
this.resume();
break;
case"function":if(!this._bIsPlaying){this.fireEvent("start")
}htTask.fTask();
this._prepareNextTask();
break;
case"sleep":if(this._bIsPlaying){this.fireEvent("sleep",{nDuration:htTask.nDuration});
htTask.fCallback()
}var self=this;
this._oSleepTimer.start(function(){self.fireEvent("awake");
self._prepareNextTask()
},htTask.nDuration);
break
}}else{if(this._bIsPlaying){this._bIsPlaying=false;
this.abort();
this.fireEvent("end")
}}}},_isHTMLElement:function(el){return("tagName" in el)
},_doTask:function(){var htTaskToDo=this._htTaskToDo,nRatio=parseFloat(htTaskToDo.nRatio.toFixed(5),1),nStep=htTaskToDo.nStep,nTotalStep=htTaskToDo.nTotalStep,aList=htTaskToDo.aList,htCorrection={},bCorrection=this.option("bCorrection");
for(var i=0,nLength=aList.length;
i<nLength;
i++){var elTarget=aList[i].elTarget,welTarget=null;
for(var j=0,aValue=aList[i].aValue,nJLen=aValue.length;
j<nJLen;
j++){var sType=aValue[j][0],sKey=aValue[j][1],sValue=aValue[j][2](nRatio);
if(this._isHTMLElement(elTarget)){if(bCorrection){var sUnit=/^\-?[0-9\.]+(%|px|pt|em)?$/.test(sValue)&&RegExp.$1||"";
if(sUnit){var nValue=parseFloat(sValue);
nValue+=htCorrection[sKey]||0;
nValue=parseFloat(nValue.toFixed(5));
if(i==nLength-1){sValue=Math.round(nValue)+sUnit
}else{htCorrection[sKey]=nValue-Math.floor(nValue);
sValue=parseInt(nValue,10)+sUnit
}}}welTarget=welTarget||jindo.$Element(elTarget);
switch(sType){case"style":welTarget.css(sKey,sValue);
break;
case"attr":welTarget.$value()[sKey]=sValue;
break
}}else{elTarget.setter(sKey,sValue)
}if(this._bIsPlaying){this.fireEvent("playing",{element:elTarget,sKey:sKey,sValue:sValue,nStep:nStep,nTotalStep:nTotalStep})
}}}htTaskToDo.nRatio=Math.min(htTaskToDo.nRatio+htTaskToDo.nGap,1);
htTaskToDo.nStep+=1;
return nRatio!=1
}}).extend(jindo.Component);
(function(){var b=jindo.$Element.prototype.css;
jindo.$Element.prototype.css=function(k,v){if(k=="opacity"){return typeof v!="undefined"?this.opacity(parseFloat(v)):this.opacity()
}else{return typeof v!="undefined"?b.call(this,k,v):b.call(this,k)
}}
})();
jindo.Slider=jindo.$Class({_elTrack:null,_aThumbs:null,_aPoses:null,_htSwap:null,$init:function(el,oOptions){this.option({sClassPrefix:"slider-",bVertical:false,bJump:true,bDragOnTrack:true,fAdjustValue:null,nMinValue:0,nMaxValue:1,bActivateOnload:true});
this.option(oOptions||{});
if(!this.option("bVertical")){this._htSwap={y:"nY",x:"nX",clientX:"clientX",pageX:"pageX",offsetWidth:"offsetWidth",left:"left"}
}else{this._htSwap={y:"nX",x:"nY",clientX:"clientY",pageX:"pageY",offsetWidth:"offsetHeight",left:"top"}
}this._elTrack=jindo.$(el);
this._aThumbs=jindo.$$("."+this.option("sClassPrefix")+"thumb",this._elTrack);
this._sRand="S"+parseInt(Math.random()*100000000,10);
jindo.$ElementList(this._aThumbs).addClass(this._sRand);
this._aPoses=this.positions();
this._onTrackMouseDownFn=jindo.$Fn(this._onTrackMouseDown,this);
this._initDragArea();
if(this.option("bActivateOnload")){this.activate()
}},getTrack:function(){return this._elTrack
},getThumb:function(nIndex){return this._aThumbs[nIndex]
},_initDragArea:function(){var self=this;
var htSwap=this._htSwap;
this._oDragArea=new jindo.DragArea(this._elTrack,{sClassName:this._sRand,bFlowOut:false}).attach({beforeDrag:function(oCustomEvent){var nIndex=self._getThumbIndex(oCustomEvent.elHandle);
var htParam={nIndex:nIndex,nPos:oCustomEvent[htSwap.x],bJump:false};
if(!self.fireEvent("beforeChange",htParam)){oCustomEvent.stop();
return false
}oCustomEvent[htSwap.x]=self._getAdjustedPos(nIndex,htParam.nPos);
oCustomEvent[htSwap.y]=null
},drag:function(oCustomEvent){var nIndex=self._getThumbIndex(oCustomEvent.elHandle);
var nPos=oCustomEvent[htSwap.x];
if(nPos!=self._aPoses[nIndex]){self._aPoses[nIndex]=nPos;
self._fireChangeEvent(nIndex)
}}})
},getDragArea:function(){return this._oDragArea
},_fireChangeEvent:function(nIndex){var nPos=this._getPosition(nIndex);
this.fireEvent("change",{nIndex:nIndex,nPos:nPos,nValue:this._getValue(nIndex,nPos)})
},_onActivate:function(){this.getDragArea().activate();
jindo.$Element.prototype.preventTapHighlight&&jindo.$Element(this._elTrack).preventTapHighlight(true);
this._onTrackMouseDownFn.attach(this._elTrack,"mousedown")
},_onDeactivate:function(){this.getDragArea().deactivate();
jindo.$Element.prototype.preventTapHighlight&&jindo.$Element(this._elTrack).preventTapHighlight(false);
this._onTrackMouseDownFn.detach(this._elTrack,"mousedown")
},_onTrackMouseDown:function(we){if(!this.option("bJump")){return
}we.stop(jindo.$Event.CANCEL_DEFAULT);
var nIndex=0;
var htSwap=this._htSwap;
var el=we.element;
var sClass="."+this.option("sClassPrefix")+"thumb";
var bThumb=jindo.$$.test(el,sClass)||jindo.$$.getSingle("! "+sClass,el);
if(bThumb){return
}var nPos=we.pos()[htSwap.pageX];
nPos-=jindo.$Element(this._elTrack).offset()[htSwap.left];
var nMaxDistance=9999999;
for(var i=0,oThumb;
(oThumb=this._aThumbs[i]);
i++){var nThumbPos=parseInt(jindo.$Element(oThumb).css(htSwap.left),10)||0;
nThumbPos+=parseInt(oThumb[htSwap.offsetWidth]/2,10);
var nDistance=Math.abs(nPos-nThumbPos);
if(nDistance<nMaxDistance){nMaxDistance=nDistance;
nIndex=i
}}nPos-=parseInt(this._aThumbs[nIndex][htSwap.offsetWidth]/2,10);
this.positions(nIndex,nPos);
if(this.option("bDragOnTrack")){this.getDragArea().startDragging(this._aThumbs[nIndex])
}},_getTrackInfo:function(nIndex){var htSwap=this._htSwap;
var oThumb=this._aThumbs[nIndex];
var nThumbSize=oThumb[htSwap.offsetWidth];
var nTrackSize=this._elTrack[htSwap.offsetWidth];
var nMaxPos=nTrackSize-nThumbSize;
var nMax=this.option("nMaxValue");
var nMin=this.option("nMinValue");
return{maxPos:nMaxPos,max:nMax,min:nMin}
},_getValue:function(nIndex,nPos){if(typeof nPos=="undefined"){nPos=this._getPosition(nIndex)
}var oInfo=this._getTrackInfo(nIndex);
var nValue=Math.min(Math.max(nPos*(oInfo.max-oInfo.min)/oInfo.maxPos+oInfo.min,oInfo.min),oInfo.max);
var fAdjust=this.option("fAdjustValue");
if(fAdjust){nValue=fAdjust.call(this,nValue)
}return nValue
},_getAdjustedPos:function(nIndex,nPos){var nAdjustedPos=nPos;
var oInfo=this._getTrackInfo(nIndex);
var fAdjust=this.option("fAdjustValue");
if(fAdjust){var nValue=Math.min(Math.max(nAdjustedPos*(oInfo.max-oInfo.min)/oInfo.maxPos+oInfo.min,oInfo.min),oInfo.max);
var nAfterValue=fAdjust.call(this,nValue);
if(nValue!=nAfterValue){nAdjustedPos=oInfo.maxPos*(nAfterValue-oInfo.min)/(oInfo.max-oInfo.min)
}}nAdjustedPos=Math.max(nAdjustedPos,0);
nAdjustedPos=Math.min(nAdjustedPos,oInfo.maxPos);
return nAdjustedPos
},_getThumbIndex:function(oThumb){for(var i=0,len=this._aThumbs.length;
i<len;
i++){if(this._aThumbs[i]==oThumb){return i
}}return -1
},_getPosition:function(nIndex){var sPos=jindo.$Element(this._aThumbs[nIndex]).css(this._htSwap.left);
return(sPos=="auto")?0:parseInt(sPos,10)
},_setPosition:function(nIndex,nPos){this._aPoses[nIndex]=nPos;
jindo.$Element(this._aThumbs[nIndex]).css(this._htSwap.left,nPos+"px")
},positions:function(nIndex,nPos,bFireEvent){if(typeof bFireEvent=="undefined"){bFireEvent=true
}switch(arguments.length){case 0:var aPoses=[];
jindo.$A(this._aThumbs).forEach(function(el,i){aPoses[i]=this._getPosition(i)
},this);
return aPoses;
case 1:return this._getPosition(nIndex);
default:if(bFireEvent){var htParam={nIndex:nIndex,nPos:nPos,bJump:true};
if(this.fireEvent("beforeChange",htParam)){var nAfterPos=this._getAdjustedPos(nIndex,htParam.nPos);
var bChanged=(nAfterPos!=this._aPoses[nIndex]);
this._setPosition(nIndex,nAfterPos);
if(bChanged){this._fireChangeEvent(nIndex)
}}return this
}this._setPosition(nIndex,this._getAdjustedPos(nIndex,nPos));
return this
}},values:function(nIndex,nValue,bFireEvent){if(typeof bFireEvent=="undefined"){bFireEvent=true
}switch(arguments.length){case 0:var aValues=[];
for(var i=0,len=this._aThumbs.length;
i<len;
i++){aValues[i]=this._getValue(i)
}return aValues;
case 1:return this._getValue(nIndex,this.positions(nIndex));
default:var oInfo=this._getTrackInfo(nIndex);
this.positions(nIndex,((nValue-oInfo.min)*oInfo.maxPos/(oInfo.max-oInfo.min))||0,bFireEvent);
return this
}}}).extend(jindo.UIComponent);
jindo.RolloverArea=jindo.$Class({$init:function(el,htOption){this.option({sClassName:"rollover",sClassPrefix:"rollover-",bCheckMouseDown:true,bActivateOnload:true,htStatus:{sOver:"over",sDown:"down"}});
this.option(htOption||{});
this._elArea=jindo.$(el);
this._aOveredElements=[];
this._aDownedElements=[];
this._wfMouseOver=jindo.$Fn(this._onMouseOver,this);
this._wfMouseOut=jindo.$Fn(this._onMouseOut,this);
this._wfMouseDown=jindo.$Fn(this._onMouseDown,this);
this._wfMouseUp=jindo.$Fn(this._onMouseUp,this);
if(this.option("bActivateOnload")){this.activate()
}},_addOvered:function(el){this._aOveredElements.push(el)
},_removeOvered:function(el){this._aOveredElements.splice(jindo.$A(this._aOveredElements).indexOf(el),1)
},_addStatus:function(el,sStatus){jindo.$Element(el).addClass(this.option("sClassPrefix")+sStatus)
},_removeStatus:function(el,sStatus){jindo.$Element(el).removeClass(this.option("sClassPrefix")+sStatus)
},_isInnerElement:function(elParent,elChild){return elParent===elChild?true:jindo.$Element(elParent).isParentOf(elChild)
},_onActivate:function(){jindo.$Element.prototype.preventTapHighlight&&jindo.$Element(this._elArea).preventTapHighlight(true);
this._wfMouseOver.attach(this._elArea,"mouseover");
this._wfMouseOut.attach(this._elArea,"mouseout");
if(this.option("bCheckMouseDown")){this._wfMouseDown.attach(this._elArea,"mousedown");
this._wfMouseUp.attach(document,"mouseup")
}},_onDeactivate:function(){jindo.$Element.prototype.preventTapHighlight&&jindo.$Element(this._elArea).preventTapHighlight(false);
this._wfMouseOver.detach(this._elArea,"mouseover");
this._wfMouseOut.detach(this._elArea,"mouseout");
this._wfMouseDown.detach(this._elArea,"mousedown");
this._wfMouseUp.detach(document,"mouseup");
this._aOveredElements.length=0;
this._aDownedElements.length=0
},_findRollover:function(el){var sClassName=this.option("sClassName");
return jindo.$$.test(el,"."+sClassName)?el:jindo.$$.getSingle("! ."+sClassName,el)
},_onMouseOver:function(we){var el=we.element,elRelated=we.relatedElement,htParam;
for(;
(el=this._findRollover(el));
el=el.parentNode){if(elRelated&&this._isInnerElement(el,elRelated)){continue
}this._addOvered(el);
htParam={element:el,htStatus:this.option("htStatus"),weEvent:we};
if(this.fireEvent("over",htParam)){this._addStatus(htParam.element,htParam.htStatus.sOver)
}}},_onMouseOut:function(we){var el=we.element,elRelated=we.relatedElement,htParam;
for(;
(el=this._findRollover(el));
el=el.parentNode){if(elRelated&&this._isInnerElement(el,elRelated)){continue
}this._removeOvered(el);
htParam={element:el,htStatus:this.option("htStatus"),weEvent:we};
if(this.fireEvent("out",htParam)){this._removeStatus(htParam.element,htParam.htStatus.sOver)
}}},_onMouseDown:function(we){var el=we.element,htParam;
while((el=this._findRollover(el))){htParam={element:el,htStatus:this.option("htStatus"),weEvent:we};
this._aDownedElements.push(el);
if(this.fireEvent("down",htParam)){this._addStatus(htParam.element,htParam.htStatus.sDown)
}el=el.parentNode
}},_onMouseUp:function(we){var el=we.element,aTargetElementDatas=[],aDownedElements=this._aDownedElements,htParam,elMouseDown,i;
for(i=0;
(elMouseDown=aDownedElements[i]);
i++){aTargetElementDatas.push({element:elMouseDown,htStatus:this.option("htStatus"),weEvent:we})
}for(;
(el=this._findRollover(el));
el=el.parentNode){if(jindo.$A(aDownedElements).indexOf(el)>-1){continue
}aTargetElementDatas.push({element:el,htStatus:this.option("htStatus"),weEvent:we})
}for(i=0;
(htParam=aTargetElementDatas[i]);
i++){if(this.fireEvent("up",htParam)){this._removeStatus(htParam.element,htParam.htStatus.sDown)
}}this._aDownedElements=[]
}}).extend(jindo.UIComponent);
jindo.DragArea=jindo.$Class({$init:function(el,htOption){this.option({sClassName:"draggable",bFlowOut:true,bSetCapture:true,nThreshold:0});
this.option(htOption||{});
this._el=el;
this._bIE=jindo.$Agent().navigator().ie;
this._htDragInfo={bIsDragging:false,bPrepared:false,bHandleDown:false,bForceDrag:false};
this._wfOnMouseDown=jindo.$Fn(this._onMouseDown,this);
this._wfOnMouseMove=jindo.$Fn(this._onMouseMove,this);
this._wfOnMouseUp=jindo.$Fn(this._onMouseUp,this);
this._wfOnDragStart=jindo.$Fn(this._onDragStart,this);
this._wfOnSelectStart=jindo.$Fn(this._onSelectStart,this);
this.activate()
},_findDraggableElement:function(el){if(el.nodeType===1&&jindo.$$.test(el,"input[type=text], textarea, select")){return null
}var self=this;
var sClass="."+this.option("sClassName");
var isChildOfDragArea=function(el){if(el===null){return false
}if(self._el===document||self._el===el){return true
}return jindo.$Element(self._el).isParentOf(el)
};
var elReturn=jindo.$$.test(el,sClass)?el:jindo.$$.getSingle("! "+sClass,el);
if(!isChildOfDragArea(elReturn)){elReturn=null
}return elReturn
},isDragging:function(){var htDragInfo=this._htDragInfo;
return htDragInfo.bIsDragging&&!htDragInfo.bPrepared
},stopDragging:function(){this._stopDragging(true);
return this
},_stopDragging:function(bInterupted){this._wfOnMouseMove.detach(document,"mousemove");
this._wfOnMouseUp.detach(document,"mouseup");
if(this.isDragging()){var htDragInfo=this._htDragInfo,welDrag=jindo.$Element(htDragInfo.elDrag);
htDragInfo.bIsDragging=false;
htDragInfo.bForceDrag=false;
htDragInfo.bPrepared=false;
if(this._bIE&&this._elSetCapture){this._elSetCapture.releaseCapture();
this._elSetCapture=null
}this.fireEvent("dragEnd",{elArea:this._el,elHandle:htDragInfo.elHandle,elDrag:htDragInfo.elDrag,nX:parseInt(welDrag.css("left"),10)||0,nY:parseInt(welDrag.css("top"),10)||0,bInterupted:bInterupted})
}},_onActivate:function(){this._wfOnMouseDown.attach(this._el,"mousedown");
this._wfOnDragStart.attach(this._el,"dragstart");
this._wfOnSelectStart.attach(this._el,"selectstart")
},_onDeactivate:function(){this._wfOnMouseDown.detach(this._el,"mousedown");
this._wfOnDragStart.detach(this._el,"dragstart");
this._wfOnSelectStart.detach(this._el,"selectstart")
},attachEvent:function(){this.activate()
},detachEvent:function(){this.deactivate()
},isEventAttached:function(){return this.isActivating()
},startDragging:function(el){var elDrag=this._findDraggableElement(el);
if(elDrag){this._htDragInfo.bForceDrag=true;
this._htDragInfo.bPrepared=true;
this._htDragInfo.elHandle=elDrag;
this._htDragInfo.elDrag=elDrag;
this._wfOnMouseMove.attach(document,"mousemove");
this._wfOnMouseUp.attach(document,"mouseup");
return true
}return false
},_onMouseDown:function(we){var mouse=we.mouse(true);
if(!mouse.left||mouse.right||mouse.scrollbar){this._stopDragging(true);
return
}var el=this._findDraggableElement(we.element);
if(el){var oPos=we.pos(),htDragInfo=this._htDragInfo;
htDragInfo.bHandleDown=true;
htDragInfo.bPrepared=true;
htDragInfo.nButton=we._event.button;
htDragInfo.elHandle=el;
htDragInfo.elDrag=el;
htDragInfo.nPageX=oPos.pageX;
htDragInfo.nPageY=oPos.pageY;
if(this.fireEvent("handleDown",{elHandle:el,elDrag:el,weEvent:we})){this._wfOnMouseMove.attach(document,"mousemove")
}this._wfOnMouseUp.attach(document,"mouseup");
we.stop(jindo.$Event.CANCEL_DEFAULT)
}},_onMouseMove:function(we){var htDragInfo=this._htDragInfo,htParam,htRect,oPos=we.pos(),htGap={nX:oPos.pageX-htDragInfo.nPageX,nY:oPos.pageY-htDragInfo.nPageY};
if(htDragInfo.bPrepared){var nThreshold=this.option("nThreshold"),htDiff={};
if(!htDragInfo.bForceDrag&&nThreshold){htDiff.nPageX=oPos.pageX-htDragInfo.nPageX;
htDiff.nPageY=oPos.pageY-htDragInfo.nPageY;
var nDistance=Math.sqrt(htDiff.nPageX*htDiff.nPageX+htDiff.nPageY*htDiff.nPageY);
if(nThreshold>nDistance){return
}}if(this._bIE&&this.option("bSetCapture")){this._elSetCapture=(this._el===document)?document.body:this._findDraggableElement(we.element);
if(this._elSetCapture){this._elSetCapture.setCapture(false)
}}htParam={elArea:this._el,elHandle:htDragInfo.elHandle,elDrag:htDragInfo.elDrag,htDiff:htDiff,weEvent:we};
htDragInfo.bIsDragging=true;
htDragInfo.bPrepared=false;
if(this.fireEvent("dragStart",htParam)){var welDrag=jindo.$Element(htParam.elDrag),htOffset=welDrag.offset();
htDragInfo.elHandle=htParam.elHandle;
htDragInfo.elDrag=htParam.elDrag;
htDragInfo.nX=parseInt(welDrag.css("left"),10)||0;
htDragInfo.nY=parseInt(welDrag.css("top"),10)||0;
htDragInfo.nClientX=htOffset.left+welDrag.width()/2;
htDragInfo.nClientY=htOffset.top+welDrag.height()/2
}else{htDragInfo.bPrepared=true;
return
}}if(htDragInfo.bForceDrag){htGap.nX=oPos.clientX-htDragInfo.nClientX;
htGap.nY=oPos.clientY-htDragInfo.nClientY
}htParam={elArea:this._el,elFlowOut:htDragInfo.elDrag.parentNode,elHandle:htDragInfo.elHandle,elDrag:htDragInfo.elDrag,weEvent:we,nX:htDragInfo.nX+htGap.nX,nY:htDragInfo.nY+htGap.nY,nGapX:htGap.nX,nGapY:htGap.nY};
if(this.fireEvent("beforeDrag",htParam)){var elDrag=htDragInfo.elDrag;
if(this.option("bFlowOut")===false){var elParent=htParam.elFlowOut,aSize=[elDrag.offsetWidth,elDrag.offsetHeight],nScrollLeft=0,nScrollTop=0;
if(elParent==document.body){elParent=null
}if(elParent&&aSize[0]<=elParent.scrollWidth&&aSize[1]<=elParent.scrollHeight){htRect={nWidth:elParent.clientWidth,nHeight:elParent.clientHeight};
nScrollLeft=elParent.scrollLeft;
nScrollTop=elParent.scrollTop
}else{var htClientSize=jindo.$Document().clientSize();
htRect={nWidth:htClientSize.width,nHeight:htClientSize.height}
}if(htParam.nX!==null){htParam.nX=Math.max(htParam.nX,nScrollLeft);
htParam.nX=Math.min(htParam.nX,htRect.nWidth-aSize[0]+nScrollLeft)
}if(htParam.nY!==null){htParam.nY=Math.max(htParam.nY,nScrollTop);
htParam.nY=Math.min(htParam.nY,htRect.nHeight-aSize[1]+nScrollTop)
}}if(htParam.nX!==null){elDrag.style.left=htParam.nX+"px"
}if(htParam.nY!==null){elDrag.style.top=htParam.nY+"px"
}this.fireEvent("drag",htParam)
}else{htDragInfo.bIsDragging=false
}},_onMouseUp:function(we){this._stopDragging(false);
var htDragInfo=this._htDragInfo;
htDragInfo.bHandleDown=false;
this.fireEvent("handleUp",{weEvent:we,elHandle:htDragInfo.elHandle,elDrag:htDragInfo.elDrag})
},_onDragStart:function(we){if(this._findDraggableElement(we.element)){we.stop(jindo.$Event.CANCEL_DEFAULT)
}},_onSelectStart:function(we){if(this.isDragging()||this._findDraggableElement(we.element)){we.stop(jindo.$Event.CANCEL_DEFAULT)
}}}).extend(jindo.UIComponent);
jindo.FloatingLayer=jindo.$Class({$init:function(el,htOption){this._el=jindo.$(el);
this._wel=jindo.$Element(el);
this.option({nDelay:0,nDuration:500,fEffect:jindo.Effect.easeOut,bActivateOnload:true});
this.option(htOption||{});
this._htPos=this._getPosition();
this._oTransition=new jindo.Transition().fps(60);
this._oTimer=new jindo.Timer();
this._wfScroll=jindo.$Fn(this._onScroll,this);
if(this.option("bActivateOnload")){this.activate()
}},getTransition:function(){return this._oTransition
},getTimer:function(){return this._oTimer
},_onActivate:function(){var self=this;
setTimeout(function(){self._onScroll()
},0);
this._wfScroll.attach(window,"scroll").attach(window,"resize")
},_onDeactivate:function(){this._wfScroll.detach(window,"scroll").detach(window,"resize")
},_getPosition:function(){var el=this._el,wel=this._wel,sLeft=el.style.left,sRight=el.style.right,sTop=el.style.top,sBottom=el.style.bottom,htPos={sAlignX:sLeft?"left":(sRight?"right":null),sAlignY:sTop?"top":(sBottom?"bottom":null)},htOffset=wel.offset(),htClientSize=jindo.$Document().clientSize();
switch(htPos.sAlignX){case"left":htPos.nX=htOffset.left;
break;
case"right":htPos.nX=Math.max(htClientSize.width-htOffset.left-wel.width(),parseFloat(sRight));
break
}switch(htPos.sAlignY){case"top":htPos.nY=htOffset.top;
break;
case"bottom":htPos.nY=Math.max(htClientSize.height-htOffset.top-wel.height(),parseFloat(sBottom));
break
}return htPos
},_onScroll:function(){var self=this;
this._oTimer.start(function(){self._paint()
},this.option("nDelay"))
},_paint:function(){var oDoc=document.documentElement||document,elBody=document.body,el=this._el,wel=this._wel,htPos=this._htPos,htScrollPos={},htOffset=jindo.$Element(el).offset(),nPosX,nPosY,htParam={nX:null,nY:null};
if(htPos.sAlignX){switch(htPos.sAlignX){case"left":htScrollPos.x=oDoc.scrollLeft||elBody.scrollLeft;
nPosX=htOffset.left-htScrollPos.x;
break;
case"right":htScrollPos.x=(oDoc.scrollLeft||elBody.scrollLeft)+jindo.$Document().clientSize().width;
nPosX=htScrollPos.x-(htOffset.left+wel.width());
break
}htParam.nX=parseFloat(wel.css(htPos.sAlignX))+(htPos.nX-nPosX)
}if(htPos.sAlignY){switch(htPos.sAlignY){case"top":htScrollPos.y=oDoc.scrollTop||elBody.scrollTop;
nPosY=htOffset.top-htScrollPos.y;
break;
case"bottom":htScrollPos.y=(oDoc.scrollTop||elBody.scrollTop)+jindo.$Document().clientSize().height;
nPosY=htScrollPos.y-(htOffset.top+wel.height());
break
}htParam.nY=parseFloat(wel.css(htPos.sAlignY))+(htPos.nY-nPosY)
}if(this.fireEvent("beforeMove",htParam)){var htTransition={},fEffect=this.option("fEffect");
if(htParam.nX!==null){htTransition["@"+htPos.sAlignX]=fEffect(htParam.nX+"px")
}if(htParam.nY!==null){htTransition["@"+htPos.sAlignY]=fEffect(htParam.nY+"px")
}var self=this;
this._oTransition.abort().start(this.option("nDuration"),el,htTransition).start(function(){self.fireEvent("move")
})
}}}).extend(jindo.UIComponent);
jindo.DefaultTextValue=jindo.$Class({$init:function(el,htOption){this.option({sValue:"",bActivateOnload:true});
this.option(htOption||{});
this._elBaseTarget=jindo.$(el);
this._wfOnFocusAndBlur=jindo.$Fn(this._onFocusAndBlur,this);
if(this.option("bActivateOnload")){this.activate()
}},getBaseElement:function(){return this._elBaseTarget
},setDefault:function(){this.getBaseElement().value=this.option("sValue");
return this
},setDefaultValue:function(sValue){var sOldValue=this.option("sValue");
this.option("sValue",sValue);
if(this.getBaseElement().value==sOldValue){this.setDefault()
}return this
},getDefaultValue:function(){return this.option("sValue")
},paint:function(){return this
},_onActivate:function(){var elInput=this.getBaseElement();
if(elInput.value==""){this.setDefault()
}this._wfOnFocusAndBlur.attach(elInput,"focus").attach(elInput,"blur")
},_onDeactivate:function(){var elInput=this.getBaseElement();
this._wfOnFocusAndBlur.detach(elInput,"focus").detach(elInput,"blur")
},_onFocusAndBlur:function(we){var el=this._elBaseTarget;
var sValue=el.value;
switch(we.type){case"focus":if(sValue.replace(/\r\n/g,"\n")==this.getDefaultValue()){el.value="";
el.select()
}break;
case"blur":if(jindo.$S(sValue).trim().$value()==""){this.setDefault()
}break
}}}).extend(jindo.UIComponent);
jindo.LayerManager=jindo.$Class({_bIsActivating:false,_bIsHiding:false,_bIsShowing:false,_aLink:null,$init:function(el,htOption){this.option({sCheckEvent:"click",nCheckDelay:100,nShowDelay:0,nHideDelay:100});
this.option(htOption||{});
this.setLayer(el);
this._aLink=[];
this._oShowTimer=new jindo.Timer();
this._oHideTimer=new jindo.Timer();
this._oEventTimer=new jindo.Timer();
this._wfOnEvent=jindo.$Fn(this._onEvent,this);
this.getVisible();
this.activate()
},_onActivate:function(){this._wfOnEvent.attach(document,this.option("sCheckEvent"))
},_onDeactivate:function(){this._wfOnEvent.detach(document,this.option("sCheckEvent"))
},getVisible:function(){return this._wel.visible()
},_check:function(el){var wel=jindo.$Element(el);
for(var i=0,elLink,welLink;
(elLink=this._aLink[i]);
i++){welLink=jindo.$Element(elLink);
if(welLink){elLink=welLink.$value();
if(elLink&&(el==elLink||wel.isChildOf(elLink))){return true
}}}return false
},_find:function(el){for(var i=0,elLink;
(elLink=this._aLink[i]);
i++){if(elLink==el){return i
}}return -1
},getLayer:function(){return this._el
},setLayer:function(el){this._el=jindo.$(el);
this._wel=jindo.$Element(el);
return this
},getLinks:function(){return this._aLink
},setLinks:function(a){this._aLink=jindo.$A(a).unique().$value();
return this
},link:function(vElement){if(arguments.length>1){for(var i=0,len=arguments.length;
i<len;
i++){this.link(arguments[i])
}return this
}if(this._find(vElement)!=-1){return this
}this._aLink.push(vElement);
return this
},unlink:function(vElement){if(arguments.length>1){for(var i=0,len=arguments.length;
i<len;
i++){this.unlink(arguments[i])
}return this
}var nIndex=this._find(vElement);
if(nIndex>-1){this._aLink.splice(nIndex,1)
}return this
},_fireEventBeforeShow:function(){return this.fireEvent("beforeShow",{elLayer:this.getLayer(),aLinkedElement:this.getLinks()})
},_fireEventShow:function(){this._bIsShowing=false;
this.fireEvent("show",{elLayer:this.getLayer(),aLinkedElement:this.getLinks()})
},_fireEventBeforeHide:function(){var bRet=this.fireEvent("beforeHide",{elLayer:this.getLayer(),aLinkedElement:this.getLinks()});
if(!bRet){this._bIsHiding=false
}return bRet
},_fireEventHide:function(){this._bIsHiding=false;
this.fireEvent("hide",{elLayer:this.getLayer(),aLinkedElement:this.getLinks()})
},_show:function(fShow,nDelay){this._oEventTimer.abort();
this._bIsShowing=true;
this._bIsHiding=false;
if(nDelay>0){this._oShowTimer.start(fShow,nDelay)
}else{this._oHideTimer.abort();
fShow()
}},_hide:function(fHide,nDelay){this._bIsShowing=false;
this._bIsHiding=true;
if(nDelay>0){this._oHideTimer.start(fHide,nDelay)
}else{this._oShowTimer.abort();
fHide()
}},show:function(nDelay){if(typeof nDelay=="undefined"){nDelay=this.option("nShowDelay")
}var self=this;
this._show(function(){if(!self.getVisible()){if(self._fireEventBeforeShow()){self._wel.show();
self._fireEventShow()
}}},nDelay);
return this
},hide:function(nDelay){if(typeof nDelay=="undefined"){nDelay=this.option("nHideDelay")
}var self=this;
this._hide(function(){if(self.getVisible()){if(self._fireEventBeforeHide()){self._wel.hide();
self._fireEventHide()
}}},nDelay);
return this
},toggle:function(nDelay){if(!this.getVisible()||this._bIsHiding){this.show(nDelay||this.option("nShowDelay"))
}else{this.hide(nDelay||this.option("nHideDelay"))
}return this
},_onEvent:function(we){var el=we.element,self=this;
this._oEventTimer.start(function(){if(!self._bIsHiding&&self.getVisible()){if(self._check(el)){if(!self._bIsShowing){self.fireEvent("ignore",{sCheckEvent:self.option("sCheckEvent")});
self._oHideTimer.abort();
self._bIsHiding=false
}}else{if(typeof el.tagName!="undefined"){self.hide()
}}}},this.option("nCheckDelay"))
}}).extend(jindo.UIComponent);
jindo.ScrollBox=new jindo.$Class({$init:function(el,htOption){this.option({sClassPrefix:"scrollbar-",bActivateOnload:true,sOverflowX:"auto",sOverflowY:"auto",bAdjustThumbSize:true,nMinThumbSize:50,nDelta:16});
this.option(htOption||{});
this._el=jindo.$(el);
if(this.option("bActivateOnload")){this.activate();
this.reset()
}},reset:function(){this._autoToggleScrollBar();
var oStatusH=this.hasScrollBarHorizontal();
var oStatusV=this.hasScrollBarVertical();
this._adjustBoxSize();
this._adjustContentSize();
this._autoToggleScrollBar();
if(oStatusH!=this.hasScrollBarHorizontal()||oStatusV!=this.hasScrollBarVertical()){this._adjustBoxSize();
this._adjustContentSize()
}this._autoToggleAvailability();
this._adjustTrackSize();
this._adjustThumbSize();
this.$super.reset()
},_onActivate:function(){this.$super._onActivate();
this.reset()
},_onDeactivate:function(){this.$super._onDeactivate();
this._adjustBoxSize()
},setSize:function(nWidth,nHeight){if(nWidth){jindo.$Element(this._el).css("width",nWidth+"px")
}if(nHeight){jindo.$Element(this._el).css("height",nHeight+"px")
}this.setBoxSize(nWidth,nHeight);
this._oBoxSize={nWidth:jindo.$Element(this._elBox).width(),nHeight:jindo.$Element(this._elBox).height()};
this.reset()
},getContentSize:function(){var welContent=jindo.$Element(this._elContent);
return{nWidth:parseInt(welContent.width(),10),nHeight:parseInt(welContent.height(),10)}
},setContentSize:function(nWidth,nHeight){var welContent=jindo.$Element(this._elContent);
if(nWidth){if(nWidth==Infinity){welContent.css("width","")
}else{welContent.css("width",nWidth+"px")
}}if(nHeight){if(nHeight==Infinity){welContent.css("height","auto")
}else{welContent.css("height",nHeight+"px")
}}this.$super.reset()
},getBoxSize:function(){var welBox=jindo.$Element(this._elBox);
return{nWidth:parseInt(welBox.width(),10),nHeight:parseInt(welBox.height(),10)}
},setBoxSize:function(nWidth,nHeight){var welBox=jindo.$Element(this._elBox);
if(nWidth){welBox.css("width",nWidth+"px")
}if(nHeight){welBox.css("height",nHeight+"px")
}this.$super.reset()
},getTrackSize:function(ht){if(!ht.elScrollBar){return{nWidth:0,nHeight:0}
}var welTrack=jindo.$Element(ht.elTrack);
return{nWidth:parseInt(welTrack.width(),10),nHeight:parseInt(welTrack.height(),10)}
},setTrackSize:function(o,nWidth,nHeight){var welTrack=jindo.$Element(o.elTrack);
if(nWidth){welTrack.css("width",nWidth+"px")
}if(nHeight){welTrack.css("height",nHeight+"px")
}},isNeededScrollBarHorizontal:function(){if(this.option("sOverflowX")=="scroll"){return true
}var oContentSize=this.getContentSize();
var oBoxSize=this.getDefaultBoxSize();
if(this.getScrollBarHorizontal().elScrollBar&&this.option("sOverflowX")!="hidden"){if(this.hasScrollBarVertical()){if(oContentSize.nWidth>oBoxSize.nWidth-jindo.$Element(this.getScrollBarVertical().elScrollBar).width()){return true
}}if(oContentSize.nWidth>oBoxSize.nWidth){return true
}}return false
},isNeededScrollBarVertical:function(){if(this.option("sOverflowY")=="scroll"){return true
}var oContentSize=this.getContentSize();
var oBoxSize=this.getDefaultBoxSize();
if(this.getScrollBarVertical().elScrollBar&&this.option("sOverflowY")!="hidden"){if(this.hasScrollBarHorizontal()){if(oContentSize.nHeight>oBoxSize.nHeight-jindo.$Element(this.getScrollBarHorizontal().elScrollBar).height()){return true
}}if(oContentSize.nHeight>oBoxSize.nHeight){return true
}}return false
},_autoToggleScrollBar:function(){if(!this.isActivating()){return
}var sClassPrefix=this.option("sClassPrefix");
var oH=this.getScrollBarHorizontal();
var oV=this.getScrollBarVertical();
var welScrollBar;
var bAjustThumbSize=this.option("bAdjustThumbSize");
var bV=this.isNeededScrollBarVertical();
if(oV.elScrollBar){welScrollBar=jindo.$Element(oV.elScrollBar);
if(bV){welScrollBar.addClass(sClassPrefix+"show")
}else{welScrollBar.removeClass(sClassPrefix+"show")
}if(oV.elThumb&&bAjustThumbSize){jindo.$Element(oV.elThumb).css("height","0px")
}}var bH=this.isNeededScrollBarHorizontal();
if(oH.elScrollBar){welScrollBar=jindo.$Element(oH.elScrollBar);
if(bH){welScrollBar.addClass(sClassPrefix+"show")
}else{welScrollBar.removeClass(sClassPrefix+"show")
}if(oH.elThumb&&bAjustThumbSize){jindo.$Element(oH.elThumb).css("width","0px")
}}if(oV.elScrollBar){welScrollBar=jindo.$Element(oV.elScrollBar);
if(this.isNeededScrollBarVertical()){welScrollBar.addClass(sClassPrefix+"show")
}else{welScrollBar.removeClass(sClassPrefix+"show")
}if(oV.elThumb&&bAjustThumbSize){jindo.$Element(oV.elThumb).css("height","0px")
}}},_adjustTrackSize:function(){if(!this.isActivating()){return
}var oBoxSize=this.getDefaultBoxSize();
var oH=this.getScrollBarHorizontal();
var oV=this.getScrollBarVertical();
var bH=this.isNeededScrollBarHorizontal();
if(bH&&oH.elScrollBar){var nTrackWidth=oBoxSize.nWidth;
var wel=jindo.$Element(oH.elScrollBar);
wel.css("top",oBoxSize.nHeight-wel.height()+"px");
var nVerticalWidth=0;
if(this.hasScrollBarVertical()&&oV.elScrollBar){nVerticalWidth=parseInt(jindo.$Element(oV.elScrollBar).width(),10);
nTrackWidth-=nVerticalWidth
}wel.width(nTrackWidth);
var nButtonLeftWidth=0;
if(oH.elButtonLeft){nButtonLeftWidth=parseInt(jindo.$Element(oH.elButtonLeft).width(),10);
nTrackWidth-=nButtonLeftWidth
}if(oH.elButtonRight){nTrackWidth-=parseInt(jindo.$Element(oH.elButtonRight).width(),10)
}jindo.$Element(oH.elTrack).css("left",nButtonLeftWidth+"px");
this.setTrackSize(oH,nTrackWidth,null)
}var bV=this.isNeededScrollBarVertical();
if(bV&&oV.elScrollBar){var nTrackHeight=oBoxSize.nHeight;
var nHorizontalHeight=0;
if(this.hasScrollBarHorizontal()&&oH.elScrollBar){nHorizontalHeight=parseInt(jindo.$Element(oH.elScrollBar).height(),10);
nTrackHeight-=nHorizontalHeight
}if(oV.elButtonUp){nTrackHeight-=parseInt(jindo.$Element(oV.elButtonUp).height(),10)
}if(oV.elButtonDown){nTrackHeight-=parseInt(jindo.$Element(oV.elButtonDown).height(),10)
}this.setTrackSize(oV,null,nTrackHeight)
}},_adjustBoxSize:function(){var oBoxSize=this.getDefaultBoxSize();
var oH=this.getScrollBarHorizontal();
var oV=this.getScrollBarVertical();
var bV=this.hasScrollBarVertical();
var bH=this.hasScrollBarHorizontal();
this.setBoxSize(oBoxSize.nWidth,oBoxSize.nHeight);
if(this.isActivating()){if(bH&&oH.elScrollBar){var nHeight=oBoxSize.nHeight;
nHeight-=parseInt(jindo.$Element(oH.elScrollBar).height(),10);
this.setBoxSize(null,nHeight)
}if(bV&&oV.elScrollBar){var nWidth=oBoxSize.nWidth;
nWidth-=parseInt(jindo.$Element(oV.elScrollBar).width(),10);
this.setBoxSize(nWidth,null)
}}},_adjustContentSize:function(){if(!this.isActivating()){return
}var oBoxSize=this.getBoxSize();
var bV=this.option("sOverflowY")!="hidden";
var bH=this.option("sOverflowX")!="hidden";
var nWidth,nHeight;
if(bV&&!bH){nWidth=oBoxSize.nWidth
}if(bH&&!bV){nHeight=oBoxSize.nHeight
}this.setContentSize(nWidth||Infinity,nHeight||Infinity)
},_adjustThumbSize:function(){if(!this.isActivating()){return
}if(!this.option("bAdjustThumbSize")){return
}var nMinThumbSize=this.option("nMinThumbSize");
var oContentSize=this.getContentSize();
var oBoxSize=this.getBoxSize();
var nGap;
var oH=this.getScrollBarHorizontal();
var oV=this.getScrollBarVertical();
if(oV.elScrollBar){var oTrackSizeV=this.getTrackSize(oV);
var nThumbHeight=Math.floor(parseInt(oTrackSizeV.nHeight*oBoxSize.nHeight/oContentSize.nHeight,10));
if(nThumbHeight<nMinThumbSize){nThumbHeight=nMinThumbSize
}if(nThumbHeight>=oTrackSizeV.nHeight){nThumbHeight=oTrackSizeV.nHeight
}jindo.$Element(oV.elThumb).height(nThumbHeight);
nGap=0;
if(oV.elThumbHead){nGap+=jindo.$Element(oV.elThumbHead).height()
}if(oV.elThumbFoot){nGap+=jindo.$Element(oV.elThumbFoot).height()
}if(oV.elThumbBody){jindo.$Element(oV.elThumbBody).height(nThumbHeight-nGap)
}}if(oH.elScrollBar){var oTrackSizeH=this.getTrackSize(oH);
var nThumbWidth=Math.floor(parseInt(oTrackSizeH.nWidth*oBoxSize.nWidth/oContentSize.nWidth,10));
if(nThumbWidth<nMinThumbSize){nThumbWidth=nMinThumbSize
}if(nThumbWidth>=oTrackSizeH.nWidth){nThumbWidth=oTrackSizeH.nWidth
}jindo.$Element(oH.elThumb).width(nThumbWidth);
nGap=0;
if(oH.elThumbHead){nGap+=jindo.$Element(oH.elThumbHead).width()
}if(oH.elThumbFoot){nGap+=jindo.$Element(oH.elThumbFoot).width()
}if(oH.elThumbBody){jindo.$Element(oH.elThumbBody).width(nThumbWidth-nGap)
}}},_autoToggleAvailability:function(){var sClassPrefix=this.option("sClassPrefix");
var oContentSize=this.getContentSize();
var oBoxSize=this.getBoxSize();
var oH=this.getScrollBarHorizontal();
var oV=this.getScrollBarVertical();
if(oH.elScrollBar){if(this.option("sOverflowX")=="scroll"&&oBoxSize.nWidth>=oContentSize.nWidth){jindo.$Element(oH.elScrollBar).addClass(sClassPrefix+"disabled");
this.$super._onDeactivate("horizontal");
if(this.isActivating()){jindo.$Element(this._el).removeClass(sClassPrefix+"noscript")
}}else{jindo.$Element(oH.elScrollBar).removeClass(sClassPrefix+"disabled");
if(this.isActivating()){this.$super._onActivate("horizontal")
}}}if(oV.elScrollBar){if(this.option("sOverflowY")=="scroll"&&oBoxSize.nHeight>=oContentSize.nHeight){jindo.$Element(oV.elScrollBar).addClass(sClassPrefix+"disabled");
this.$super._onDeactivate("vertical");
if(this.isActivating()){jindo.$Element(this._el).removeClass(sClassPrefix+"noscript")
}}else{jindo.$Element(oV.elScrollBar).removeClass(sClassPrefix+"disabled");
if(this.isActivating()){this.$super._onActivate("vertical")
}}}}}).extend(jindo.ScrollBar);
jindo.Clipboard=jindo.$Class({_aElement:null,_aData:null,_elOvered:null,_bFailed:true,$init:function(sFlashURL){this._sFlashURL=sFlashURL;
var oStatic=jindo.Clipboard;
var sFlashUID=this._sUnique="S"+new Date().getTime()+parseInt(Math.random()*1000000000,10);
if(typeof oStatic._callbacks=="undefined"){oStatic._callbacks={}
}oStatic._callbacks[this._sUnique]={click:jindo.$Fn(this._onFlashClick,this).bind(),mouseover:jindo.$Fn(this._onFlashMouseOver,this).bind(),mouseout:jindo.$Fn(this._onFlashMouseOut,this).bind(),mousedown:jindo.$Fn(this._onFlashMouseDown,this).bind(),mouseup:jindo.$Fn(this._onFlashMouseUp,this).bind(),load:jindo.$Fn(this._onFlashLoad,this).bind()};
this._aElement=[];
this._aData=[];
this._initFlash();
this._wfHandler=jindo.$Fn(function(we){this._initFlash();
var el=we.element;
var htPosition=jindo.$Element(el).offset();
this._setFlashPosSize(htPosition.left,htPosition.top,el.offsetWidth,el.offsetHeight);
this._setClipboard(el,this._getData(el));
this._elOvered=el
},this)
},_initFlash:function(){if(this._elDummy){return
}var elDummy=this._elDummy=jindo.$("<div>");
var sFlashUID=this._sUnique;
elDummy.style.cssText="position:absolute !important; border:0 !important; padding:0 !important; margin:0 !important; overflow:visible !important; z-index:32000 !important;";
document.body.insertBefore(elDummy,document.body.firstChild);
var sFlashHtml=nhn.FlashObject.generateTag(this._sFlashURL,"CLIPBOARD"+sFlashUID,1,1,{flashVars:{sUniq:sFlashUID},wmode:"transparent"});
sFlashHtml=sFlashHtml.replace(/style="position:relative !important;"/gi,'style="position:absolute !important; left:0 !important; top:0 !important; border:0 !important; padding:0 !important; margin:0 !important; overflow:visible !important;"');
elDummy.innerHTML=sFlashHtml;
jindo.$Fn(this._checkFailed,this).attach(elDummy,"click")
},_getFlash:function(){return nhn.FlashObject.find("CLIPBOARD"+this._sUnique)
},_setFlashPosSize:function(nLeft,nTop,nWidth,nHeight){var elDummy=this._elDummy;
elDummy.style.left=nLeft+"px";
elDummy.style.top=nTop+"px";
var oFlash=this._getFlash();
oFlash.width=nWidth;
oFlash.height=nHeight;
oFlash.style.width=nWidth+"px";
oFlash.style.height=nHeight+"px"
},setData:function(el,sData){el=jindo.$(el);
var nIndex=jindo.$A(this._aElement).indexOf(el),bExist=nIndex!=-1;
if(bExist&&(!sData||typeof sData=="undefined")){this._wfHandler.detach(el,"mousemove");
this._aElement.splice(nIndex,1);
this._aData.splice(nIndex,1);
this._setFlashPosSize(0,0,1,1);
return
}if(!bExist){this._wfHandler.attach(el,"mousemove");
this._aElement.push(el);
this._aData.push(sData)
}else{this._aData[nIndex]=sData
}this._setClipboard(el,sData)
},_getData:function(el){var nIndex=jindo.$A(this._aElement).indexOf(el);
return this._aData[nIndex]
},_setClipboard:function(el,sData){var oFlash=this._getFlash();
var sCursor=(jindo.$Element(el).css("cursor")||"").toUpperCase();
var bHandCursor=sCursor=="POINTER"||sCursor=="HAND";
try{oFlash.setClipboardData(sData);
oFlash.setClipboardOptions({cursor:bHandCursor?"pointer":"default"});
this._sAppliedData=sData;
this._bFailed=false
}catch(e){this._bFailed=true
}},_checkFailed:function(){if(this._bFailed){this.fireEvent("failure",{element:this._elOvered,data:this._lastestData})
}},_onFlashClick:function(sData){this.fireEvent("copy",{element:this._elOvered,data:sData})
},_onFlashMouseOver:function(){this.fireEvent("over",{element:this._elOvered})
},_onFlashMouseOut:function(){this.fireEvent("out",{element:this._elOvered})
},_onFlashMouseDown:function(){this.fireEvent("down",{element:this._elOvered})
},_onFlashMouseUp:function(){this.fireEvent("up",{element:this._elOvered})
},_onFlashLoad:function(){this.fireEvent("load")
}}).extend(jindo.Component);jindo.WatchInput=jindo.$Class({_bTimerRunning:false,_bFocused:false,_sPrevValue:"",$init:function(sInputId,htOption){var htDefaultOption={nInterval:100,bUseTimerOnIE:false,sKeyEvent:"keyup",bPermanent:false,bActivateOnload:true};
this.option(htDefaultOption);
this.option(htOption||{});
this._elInput=jindo.$(sInputId);
this._oTimer=new jindo.Timer();
this._bIE=jindo.$Agent().navigator().ie;
this._wfFocus=jindo.$Fn(this._onFocus,this);
this._wfBlur=jindo.$Fn(this._onBlur,this);
this._wfKeyEvent=jindo.$Fn(this._onKeyEvent,this);
this._wfStartTimer=jindo.$Fn(this._startTimer,this);
this._wfStopTimer=jindo.$Fn(this._stopTimer,this);
if(this.option("bActivateOnload")){this.activate(true)
}},getInput:function(){return this._elInput
},setInputValue:function(s){this.getInput().value=s;
this.setCompareValue(s);
return this
},getCompareValue:function(){return this._sPrevValue
},setCompareValue:function(s){this._sPrevValue=s;
return this
},fireChangeEvent:function(){var elInput=this.getInput(),sValue=elInput.value;
this.setCompareValue(sValue);
this.fireEvent("change",{elInput:elInput,sText:sValue});
return this
},start:function(bCompareOnce){return this.activate(bCompareOnce||false)
},stop:function(){return this.deactivate()
},_onActivate:function(bCompareOnce){this.setCompareValue("");
var elInput=this.getInput();
this._wfFocus.attach(elInput,"focus");
if(this._bIE&&!this.option("bUseTimerOnIE")){this.fireEvent("start");
this._wfKeyEvent.attach(elInput,this.option("sKeyEvent"))
}else{if(this._isTimerRunning()){return
}this.fireEvent("start");
if(this.option("bPermanent")){this._startTimer()
}else{this._wfStartTimer.attach(elInput,"focus");
this._wfStopTimer.attach(elInput,"blur")
}}this._wfBlur.attach(elInput,"blur");
if(bCompareOnce||false){this.compare()
}},_onDeactivate:function(){var elInput=this.getInput();
this._wfFocus.detach(elInput,"focus");
this._wfKeyEvent.detach(elInput,this.option("sKeyEvent"));
this._stopTimer();
this._wfStartTimer.detach(elInput,"focus");
this._wfStopTimer.detach(elInput,"blur");
this._wfBlur.detach(elInput,"blur");
this.fireEvent("stop")
},getInterval:function(){return this.option("nInterval")
},setInterval:function(n){this.option("nInterval",n);
return this
},_isTimerRunning:function(){return this._bTimerRunning
},_startTimer:function(){if(this._isTimerRunning()){return
}this._bTimerRunning=true;
this.fireEvent("timerStart");
this.compare();
var self=this;
this._oTimer.start(function(){self.compare();
return true
},this.getInterval())
},_stopTimer:function(){if(this._isTimerRunning()){this._oTimer.abort();
this._bTimerRunning=false;
this.compare();
this.fireEvent("timerStop")
}},_onKeyEvent:function(){this.compare()
},_onFocus:function(){this._bFocused=true;
this.fireEvent("focus")
},_onBlur:function(){this._bFocused=false;
this.fireEvent("blur")
},compare:function(){if(this.getInput().value!=this.getCompareValue()){this.fireChangeEvent()
}return this
}}).extend(jindo.UIComponent);(function(exportTarget){var lcs_options={nnb:true};
var lcs_version="v0.6.0";
var lcs_add={};
var lcs_bc={};
var lcs_perf={};
var lcs_do_count=0;
function lcs_do(etc){if(!window.lcs_SerName){window.lcs_SerName="lcs.naver.com"
}var rs="";
var index;
var itarVal;
var doc=document;
var wlt=window.location;
var lcsServerAddr;
try{lcsServerAddr=(wlt.protocol?wlt.protocol:"http:")+"//"+window.lcs_SerName+"/m?"
}catch(e){return
}try{rs=lcsServerAddr+"u="+encodeURIComponent(wlt.href)+"&e="+(doc.referrer?encodeURIComponent(doc.referrer):"")
}catch(e){}try{if(typeof lcs_add.i=="undefined"){lcs_add.i=""
}if(lcs_do_count<1){lcs_setBrowserCapa();
if(lcs_options.nnb){lcs_setNNB()
}lcs_add.ct=lcs_getConnectType();
lcs_setNavigationTiming();
lcs_setPaintTiming();
lcs_setNavigationType()
}for(index in lcs_bc){if(typeof lcs_bc[index]!=="function"){rs+="&"+index+"="+encodeURIComponent(lcs_bc[index])
}}for(index in lcs_add){itarVal=lcs_add[index];
if(itarVal!==undefined&&typeof itarVal!=="function"){rs+="&"+index+"="+encodeURIComponent(itarVal)
}}if(lcs_do_count<1){for(index in lcs_perf){itarVal=lcs_perf[index];
if(itarVal){rs+="&"+index+"="+encodeURIComponent(itarVal)
}}}for(index in etc){if((index.length>=3&&typeof etc[index]!=="function")||index==="qy"){rs+="&"+index+"="+encodeURIComponent(etc[index])
}}if(!!etc===false||!!etc.pid===false){var pidFallback;
if(window.g_pid){pidFallback=g_pid
}else{pidFallback=lcs_get_lpid()
}rs+="&pid="+encodeURIComponent(pidFallback)
}var timeStr=new Date().getTime();
rs+="&ts="+timeStr;
rs+="&EOU";
var obj=document.createElement("img");
obj.src=rs;
obj.onload=function(){obj.onload=null;
return
};
lcs_do_count++
}catch(e){return
}}function lcs_do_gdid(gdid,etc){try{if(gdid){lcs_add.i=gdid;
if(etc){lcs_do(etc)
}else{lcs_do()
}}}catch(e){}}function lcs_setNNB(){try{var lsg=localStorage;
if(lsg){if(lsg.ls){var lc=lsg.ls;
if(lc.length==13){lcs_add.ls=lc;
return
}}var nnb=lcs_getNNBfromCookie();
if(nnb!=null&&nnb!=""){lsg.ls=nnb;
lcs_add.ls=nnb
}}}catch(e){}}function lcs_setBrowserCapa(){lcs_bc.os=lcs_getOS();
lcs_bc.ln=lcs_getlanguage();
lcs_bc.sr=lcs_getScreen();
lcs_bc.pr=window.devicePixelRatio||1;
var windowSize=lcs_getWindowSize();
lcs_bc.bw=windowSize.bw;
lcs_bc.bh=windowSize.bh;
lcs_bc.c=lcs_getColorDepth();
lcs_bc.j=lcs_getJavaEnabled();
lcs_bc.k=lcs_getCookieEnabled()
}function lcs_getOS(){var lcs_os="";
try{navigator.platform?(lcs_os=navigator.platform):""
}catch(e){}return lcs_os
}function lcs_getlanguage(){var lcs_ln="";
try{navigator.userLanguage?(lcs_ln=navigator.userLanguage):navigator.language?(lcs_ln=navigator.language):""
}catch(e){}return lcs_ln
}function lcs_getScreen(){var lcs_sr="";
try{if(window.screen&&screen.width&&screen.height){lcs_sr=screen.width+"x"+screen.height
}else{if(window.java||self.java){var sr=java.awt.Toolkit.getDefaultToolkit().getScreenSize();
lcs_sr=sr.width+"x"+sr.height
}}}catch(e){lcs_sr=""
}return lcs_sr
}function lcs_getWindowSize(){var doc=document;
var size={bw:"",bh:""};
try{size.bw=doc.documentElement.clientWidth?doc.documentElement.clientWidth:doc.body.clientWidth;
size.bh=doc.documentElement.clientHeight?doc.documentElement.clientHeight:doc.body.clientHeight
}catch(e){}return size
}function lcs_getColorDepth(){var colorDepth="";
try{if(window.screen){colorDepth=screen.colorDepth?screen.colorDepth:screen.pixelDepth
}else{if(window.java||self.java){var c=java.awt.Toolkit.getDefaultToolkit().getColorModel().getPixelSize();
colorDepth=c
}}}catch(e){colorDepth=""
}return colorDepth
}function lcs_getJavaEnabled(){var jsEnable="";
try{jsEnable=navigator.javaEnabled()?"Y":"N"
}catch(e){}return jsEnable
}function lcs_getCookieEnabled(){var cookieEnable="";
try{cookieEnable=navigator.cookieEnabled?"Y":"N"
}catch(e){}return cookieEnable
}function lcs_getNNBfromCookie(){try{var ck=document.cookie;
var k,v,i,ArrCookies=ck.split(";");
for(i=0;
i<ArrCookies.length;
i++){k=ArrCookies[i].substr(0,ArrCookies[i].indexOf("="));
v=ArrCookies[i].substr(ArrCookies[i].indexOf("=")+1);
k=k.replace(/^\s+|\s+$/g,"");
if(k=="NNB"){return unescape(v)
}}}catch(e){}}function lcs_getConnectType(){var ct="";
try{var conn=navigator.connection||navigator.mozConnection||navigator.webkitConnection;
if(conn&&typeof conn.type!="undefined"){switch(conn.type){case conn.CELL_2G:ct="2g";
break;
case conn.CELL_3G:ct="3g";
break;
case conn.CELL_4G:ct="4g";
break;
case conn.WIFI:ct="wifi";
break;
case conn.ETHERNET:ct="eth";
break;
case conn.UNKNOWN:ct="unknown";
break;
case conn.NONE:ct="none";
break;
default:ct=""
}}else{if(typeof blackberry!="undefined"&&typeof blackberry.network!="undefined"){var bnet=blackberry.network;
if(bnet=="Wi-Fi"){ct="wifi"
}else{if(bnet=="3G"){ct="3g"
}else{ct=bnet
}}}else{var lcs_isie=navigator.appName=="Microsoft Internet Explorer";
var lcs_ismac=navigator.userAgent.indexOf("MAC")>=0;
if(lcs_isie&&!lcs_ismac&&bd&&bd.addBehavior){var bd=document.body;
var lcs_ct="";
var obj=bd.addBehavior("#default#clientCaps");
ct=bd.connectionType;
bd.removeBehavior(obj)
}}}}catch(e){console.warn(e)
}return ct
}function lcs_setNavigationTiming(){var performance=window.performance||{};
if(performance.timing){var pt=performance.timing;
for(var key in pt){var value=pt[key];
if(typeof value==="number"){lcs_perf[key]=value
}}}}function lcs_setPaintTiming(){var performance=window.performance||{};
try{if(performance.getEntriesByType){var performanceEntries=performance.getEntriesByType("paint");
performanceEntries.forEach(function(performanceEntry,i,entries){var name=performanceEntry.name;
switch(name){case"first-paint":case"first-contentful-paint":lcs_perf[name]=performanceEntry.startTime;
break;
default:break
}})
}else{}}catch(e){console.warn(e)
}}function lcs_setNavigationType(){var ngt=getNavigationType();
if(ngt!==undefined){lcs_perf.ngt=ngt
}}function getNavigationType(){var performance=window.performance||{};
if(performance.navigation){return performance.navigation.type
}return
}var lpid=null;
function lcs_create_lpid(){var uaID;
var nnb=localStorage.ls;
if(nnb){uaID=nnb
}else{var nnbFallback;
nnbFallback=navigator.userAgent+Math.random();
uaID=nnbFallback
}var performance=window.performance||{};
var pageURL=location.href;
var currentTime;
if(performance.now){currentTime=performance.now()
}else{currentTime=new Date().getTime()
}lpid=hashFunction.md5(uaID+pageURL+currentTime);
return lpid
}function lcs_get_lpid(){if(lpid===null){lpid=lcs_create_lpid()
}return lpid
}function lcs_update_lpid(){lpid=lcs_create_lpid();
return lpid
}var hashFunction={};
(function(exportTarget){function safeAdd(x,y){var lsw=(x&65535)+(y&65535);
var msw=(x>>16)+(y>>16)+(lsw>>16);
return(msw<<16)|(lsw&65535)
}function bitRotateLeft(num,cnt){return(num<<cnt)|(num>>>(32-cnt))
}function md5cmn(q,a,b,x,s,t){return safeAdd(bitRotateLeft(safeAdd(safeAdd(a,q),safeAdd(x,t)),s),b)
}function md5ff(a,b,c,d,x,s,t){return md5cmn((b&c)|(~b&d),a,b,x,s,t)
}function md5gg(a,b,c,d,x,s,t){return md5cmn((b&d)|(c&~d),a,b,x,s,t)
}function md5hh(a,b,c,d,x,s,t){return md5cmn(b^c^d,a,b,x,s,t)
}function md5ii(a,b,c,d,x,s,t){return md5cmn(c^(b|~d),a,b,x,s,t)
}function binlMD5(x,len){x[len>>5]|=128<<len%32;
x[(((len+64)>>>9)<<4)+14]=len;
var i;
var olda;
var oldb;
var oldc;
var oldd;
var a=1732584193;
var b=-271733879;
var c=-1732584194;
var d=271733878;
for(i=0;
i<x.length;
i+=16){olda=a;
oldb=b;
oldc=c;
oldd=d;
a=md5ff(a,b,c,d,x[i],7,-680876936);
d=md5ff(d,a,b,c,x[i+1],12,-389564586);
c=md5ff(c,d,a,b,x[i+2],17,606105819);
b=md5ff(b,c,d,a,x[i+3],22,-1044525330);
a=md5ff(a,b,c,d,x[i+4],7,-176418897);
d=md5ff(d,a,b,c,x[i+5],12,1200080426);
c=md5ff(c,d,a,b,x[i+6],17,-1473231341);
b=md5ff(b,c,d,a,x[i+7],22,-45705983);
a=md5ff(a,b,c,d,x[i+8],7,1770035416);
d=md5ff(d,a,b,c,x[i+9],12,-1958414417);
c=md5ff(c,d,a,b,x[i+10],17,-42063);
b=md5ff(b,c,d,a,x[i+11],22,-1990404162);
a=md5ff(a,b,c,d,x[i+12],7,1804603682);
d=md5ff(d,a,b,c,x[i+13],12,-40341101);
c=md5ff(c,d,a,b,x[i+14],17,-1502002290);
b=md5ff(b,c,d,a,x[i+15],22,1236535329);
a=md5gg(a,b,c,d,x[i+1],5,-165796510);
d=md5gg(d,a,b,c,x[i+6],9,-1069501632);
c=md5gg(c,d,a,b,x[i+11],14,643717713);
b=md5gg(b,c,d,a,x[i],20,-373897302);
a=md5gg(a,b,c,d,x[i+5],5,-701558691);
d=md5gg(d,a,b,c,x[i+10],9,38016083);
c=md5gg(c,d,a,b,x[i+15],14,-660478335);
b=md5gg(b,c,d,a,x[i+4],20,-405537848);
a=md5gg(a,b,c,d,x[i+9],5,568446438);
d=md5gg(d,a,b,c,x[i+14],9,-1019803690);
c=md5gg(c,d,a,b,x[i+3],14,-187363961);
b=md5gg(b,c,d,a,x[i+8],20,1163531501);
a=md5gg(a,b,c,d,x[i+13],5,-1444681467);
d=md5gg(d,a,b,c,x[i+2],9,-51403784);
c=md5gg(c,d,a,b,x[i+7],14,1735328473);
b=md5gg(b,c,d,a,x[i+12],20,-1926607734);
a=md5hh(a,b,c,d,x[i+5],4,-378558);
d=md5hh(d,a,b,c,x[i+8],11,-2022574463);
c=md5hh(c,d,a,b,x[i+11],16,1839030562);
b=md5hh(b,c,d,a,x[i+14],23,-35309556);
a=md5hh(a,b,c,d,x[i+1],4,-1530992060);
d=md5hh(d,a,b,c,x[i+4],11,1272893353);
c=md5hh(c,d,a,b,x[i+7],16,-155497632);
b=md5hh(b,c,d,a,x[i+10],23,-1094730640);
a=md5hh(a,b,c,d,x[i+13],4,681279174);
d=md5hh(d,a,b,c,x[i],11,-358537222);
c=md5hh(c,d,a,b,x[i+3],16,-722521979);
b=md5hh(b,c,d,a,x[i+6],23,76029189);
a=md5hh(a,b,c,d,x[i+9],4,-640364487);
d=md5hh(d,a,b,c,x[i+12],11,-421815835);
c=md5hh(c,d,a,b,x[i+15],16,530742520);
b=md5hh(b,c,d,a,x[i+2],23,-995338651);
a=md5ii(a,b,c,d,x[i],6,-198630844);
d=md5ii(d,a,b,c,x[i+7],10,1126891415);
c=md5ii(c,d,a,b,x[i+14],15,-1416354905);
b=md5ii(b,c,d,a,x[i+5],21,-57434055);
a=md5ii(a,b,c,d,x[i+12],6,1700485571);
d=md5ii(d,a,b,c,x[i+3],10,-1894986606);
c=md5ii(c,d,a,b,x[i+10],15,-1051523);
b=md5ii(b,c,d,a,x[i+1],21,-2054922799);
a=md5ii(a,b,c,d,x[i+8],6,1873313359);
d=md5ii(d,a,b,c,x[i+15],10,-30611744);
c=md5ii(c,d,a,b,x[i+6],15,-1560198380);
b=md5ii(b,c,d,a,x[i+13],21,1309151649);
a=md5ii(a,b,c,d,x[i+4],6,-145523070);
d=md5ii(d,a,b,c,x[i+11],10,-1120210379);
c=md5ii(c,d,a,b,x[i+2],15,718787259);
b=md5ii(b,c,d,a,x[i+9],21,-343485551);
a=safeAdd(a,olda);
b=safeAdd(b,oldb);
c=safeAdd(c,oldc);
d=safeAdd(d,oldd)
}return[a,b,c,d]
}function binl2rstr(input){var i;
var output="";
var length32=input.length*32;
for(i=0;
i<length32;
i+=8){output+=String.fromCharCode((input[i>>5]>>>i%32)&255)
}return output
}function rstr2binl(input){var i;
var output=[];
output[(input.length>>2)-1]=undefined;
for(i=0;
i<output.length;
i+=1){output[i]=0
}var length8=input.length*8;
for(i=0;
i<length8;
i+=8){output[i>>5]|=(input.charCodeAt(i/8)&255)<<i%32
}return output
}function rstrMD5(s){return binl2rstr(binlMD5(rstr2binl(s),s.length*8))
}function rstrHMACMD5(key,data){var i;
var bkey=rstr2binl(key);
var ipad=[];
var opad=[];
var hash;
ipad[15]=opad[15]=undefined;
if(bkey.length>16){bkey=binlMD5(bkey,key.length*8)
}for(i=0;
i<16;
i+=1){ipad[i]=bkey[i]^909522486;
opad[i]=bkey[i]^1549556828
}hash=binlMD5(ipad.concat(rstr2binl(data)),512+data.length*8);
return binl2rstr(binlMD5(opad.concat(hash),512+128))
}function rstr2hex(input){var hexTab="0123456789abcdef";
var output="";
var x;
var i;
for(i=0;
i<input.length;
i+=1){x=input.charCodeAt(i);
output+=hexTab.charAt((x>>>4)&15)+hexTab.charAt(x&15)
}return output
}function str2rstrUTF8(input){return unescape(encodeURIComponent(input))
}function rawMD5(s){return rstrMD5(str2rstrUTF8(s))
}function hexMD5(s){return rstr2hex(rawMD5(s))
}function rawHMACMD5(k,d){return rstrHMACMD5(str2rstrUTF8(k),str2rstrUTF8(d))
}function hexHMACMD5(k,d){return rstr2hex(rawHMACMD5(k,d))
}function md5(string,key,raw){if(!key){if(!raw){return hexMD5(string)
}return rawMD5(string)
}if(!raw){return hexHMACMD5(key,string)
}return rawHMACMD5(key,string)
}exportTarget.md5=md5
})(hashFunction);
exportTarget.lcs_do=lcs_do;
exportTarget.lcs_do_gdid=lcs_do_gdid;
exportTarget.lcs_get_lpid=lcs_get_lpid;
exportTarget.lcs_update_lpid=lcs_update_lpid;
exportTarget.lcs_version=lcs_version
})(window);if(typeof nclk=="undefined"){nclk={}
}if(typeof nclkMaxDepth=="undefined"){var nclkMaxDepth=8
}if(typeof ccsrv=="undefined"){var ccsrv="cc.naver.com"
}if(typeof nclkModule=="undefined"){var nclkModule="cc"
}if(typeof nsc=="undefined"){var nsc="decide.me"
}if(typeof g_pid=="undefined"){var g_pid=""
}if(typeof g_sid=="undefined"){var g_sid=""
}var nclkImg=[];
if(typeof nclkMaxEvtTarget=="undefined"){var nclkMaxEvtTarget=4
}if(typeof nclk_evt=="undefined"){var nclk_evt=0
}nclk.nclktagVersion="1.0.10";
nclk.addEvent=function(e,b,a){if(e.addEventListener){e.addEventListener(b,a,false)
}else{if(e.attachEvent){e["e"+b+a]=a;
e[b+a]=function(){e["e"+b+a](window.event)
};
e.attachEvent("on"+b,e[b+a])
}}};
nclk.generateCC=function(l){var r=l||window.event;
if(!r){return false
}var f=r.target||r.srcElement;
var o=f.nodeName;
var m,p;
var q;
var b="",t="",k="",g="";
var a=0,n=0;
var h,s;
var i;
var j=-1;
if(r.button==2){return
}if(f.nodeType==3){f=f.parentNode
}if(f.parentNode&&f.parentNode.nodeName=="A"){f=f.parentNode
}p=f;
while(j<=nclkMaxEvtTarget){if(j>=nclkMaxEvtTarget){if(nclk_evt==2||nclk_evt==4){h=0;
m=p;
break
}else{return
}}else{i=nclk.getTag(f);
h=i[0];
s=i[1];
if(h==0){if(f.parentNode){f=f.parentNode;
j++
}else{h=0;
m=p;
break
}}else{m=f;
break
}}}switch(h){case 0:case 1:case 2:case 3:if(nclk_evt==2||nclk_evt==4){b="ncs.blank"
}else{return
}break;
case 4:b=nclk.findArea(m,1);
if(b==undefined){b=""
}q=nclk.parseNCStr(h,s);
b=b+"."+q[0];
break;
case 5:b=nclk.findArea(m,2);
if(b==undefined){b=""
}q=nclk.parseNCStr(h,s);
break;
case 6:q=nclk.parseNCStr(h,s);
b=q[0];
break;
default:return
}if(h==4||h==5||h==6){k=q[1];
t=q[2];
g=q[3];
n=q[4]
}if(n=="2"){return
}else{a=n
}if(g){clickcr(m,b,t,k,r,a,g)
}else{clickcr(m,b,t,k,r,a)
}};
nclk.searchNextObj=function(a){var b=a.nextSibling;
if(b&&b.nodeType==3){b=b.nextSibling
}return b
};
nclk.getTag=function(g){var b=0;
if(!g){return 0
}var i;
var f;
var h;
var a="";
if(nclk_evt==1||nclk_evt==2){var e=nclk.searchNextObj(g);
if(e){if(e!=null&&e.nodeType==8&&e.data.indexOf("=")>0){a=nclk.trim(e.data)
}else{return[0,""]
}}else{return[0,""]
}}else{if(nclk_evt==3||nclk_evt==4){if(g.className){a=nclk.getClassTag(g.className);
if(!a){return[0,""]
}}else{return[0,""]
}}}a=nclk.trim(a);
i=a.split("=");
f=i[0].charAt(0);
h=i[0].substring(1);
if(f!="N"){return[0,""]
}if(h=="E"){b=1
}else{if(h=="I"){b=2
}else{if(h=="EI"||h=="IE"){b=3
}else{if(h=="IP"||h=="PI"){b=4
}else{if(h=="P"){b=5
}else{if(i[0].length==1){b=6
}else{b=0
}}}}}}return[b,a]
};
nclk.findArea=function(b,h){var j=0;
var g;
var k;
var m,f;
var e="";
var a=0;
var l;
var i;
if(!b){return
}if(h==1){a=1
}else{if(h==2){a=0
}}while(b=b.parentNode){g=b;
while(1){if(nclk_evt==1||nclk_evt==2){g=g.previousSibling;
if(g){if(g.nodeType==8){k=nclk.trim(g.data)
}else{continue
}}else{break
}}else{if(nclk_evt==3||nclk_evt==4){k=b.className;
if(k){k=nclk.getClassTag(k)
}else{break
}}}if(k.indexOf("=")>0){m=k.split("=");
if(m[0].charAt(0)!="N"){continue
}i=m[0].substring(1);
if(i=="I"&&a==0){f=m[1].split(":");
if(f[0]=="a"){if(f[1]!=""&&f[1]!=undefined){e=f[1]
}}a++;
break
}else{if(i=="E"&&a==1){if(a==1){f=m[1].split(":");
if(f[0]=="a"){if(e==""){e=f[1]
}else{e=((f[1]==undefined)?"":f[1])+"."+e
}}}a++;
break
}else{if((i=="EI"||i=="IE")&&a==0){f=m[1].split(":");
if(f[0]=="a"){e=f[1]
}a+=2;
break
}}}}if(nclk_evt==3||nclk_evt==4){break
}}j++;
if(a>=2){l=e;
break
}if(j>=nclkMaxDepth){l="";
break
}}return l
};
nclk.getServiceType=function(){var a;
if(typeof g_ssc!="undefined"&&typeof g_query!="undefined"){a=1
}else{a=0
}return a
};
nclk.parseNCStr=function(h,o){var a;
var m;
var l;
var e;
var b="",k="",p="",f="",n=0;
var g=2;
o=nclk.trim(o);
switch(h){case 4:g=4;
break;
case 5:g=3;
break;
case 6:g=2;
break;
case 1:case 2:case 3:default:return
}m=o.substring(g);
l=m.split(",");
for(var j=0;
j<l.length;
j++){e=l[j].split(":");
if(e[0]=="a"){b=e[1]
}else{if(e[0]=="r"){k=e[1]
}else{if(e[0]=="i"){p=e[1]
}else{if(e[0]=="g"){f=e[1]
}else{if(e[0]=="t"){n=e[1]
}}}}}}return[b,k,p,f,n]
};
nclk.trim=function(a){return a.replace(/^\s\s*/,"").replace(/\s\s*$/,"")
};
nclk.getClassTag=function(g){var f="";
if(typeof(g)=="string"){f=g
}else{if(g.baseVal){f=g.baseVal
}else{f=""+g
}}var b=new RegExp("N[^=]*=([^ $]*)");
var e=f.match(b);
var a="";
if(e){a=e[0]
}return a
};
function nclk_do(){if(nclk_evt==1||nclk_evt==2||nclk_evt==3||nclk_evt==4){nclk.addEvent(document,"click",nclk.generateCC)
}}nclk.getScrollBarWidth=function(){var e=document.createElement("p");
e.style.width="200px";
e.style.height="200px";
var f=document.createElement("div");
f.style.position="absolute";
f.style.top="0px";
f.style.left="0px";
f.style.visibility="hidden";
f.style.width="200px";
f.style.height="150px";
f.style.overflow="hidden";
f.appendChild(e);
document.body.appendChild(f);
var b=e.offsetWidth;
f.style.overflow="scroll";
var a=e.offsetWidth;
if(b==a){a=f.clientWidth
}document.body.removeChild(f);
return(b-a)
};
nclk.findPos=function(b){var f=curtop=0;
try{if(b.offsetParent){do{f+=b.offsetLeft;
curtop+=b.offsetTop
}while(b=b.offsetParent)
}else{if(b.x||b.y){if(b.x){f+=b.x
}if(b.y){curtop+=b.y
}}}}catch(a){}return[f,curtop]
};
nclk.windowSize=function(e){if(!e){e=window
}var a=0;
if(e.innerWidth){a=e.innerWidth;
if(typeof(e.innerWidth)=="number"){var b=nclk.getScrollBarWidth();
a=e.innerWidth-b
}}else{if(document.documentElement&&document.documentElement.clientWidth){a=document.documentElement.clientWidth
}else{if(document.body&&(document.body.clientWidth||document.body.clientHeight)){a=document.body.clientWidth
}}}return a
};
nclk.checkIframe=function(i){var f=document.URL;
var h=i.parentNode;
var a;
var b;
if(h==null||h==undefined){return false
}while(1){if(h.nodeName.toLowerCase()=="#document"){if(h.parentWindow){a=h.parentWindow
}else{a=h.defaultView
}try{if(a.frameElement!=null&&a.frameElement!=undefined){if(a.frameElement.nodeName.toLowerCase()=="iframe"){b=a.frameElement.id;
if(!b){return false
}return b
}else{return false
}}else{return false
}}catch(g){return false
}}else{h=h.parentNode;
if(h==null||h==undefined){return false
}}}};
nclk.absPath=function(a){var e=window.location;
var f=e.href;
var b=e.protocol+"//"+e.host;
if(a.charAt(0)=="/"){if(a.charAt(1)=="/"){return e.protocol+a
}else{return b+a
}}if(/^\.\//.test(a)){a=a.substring(2)
}while(/^\.\./.test(a)){if(b!=f){f=f.substring(0,f.lastIndexOf("/"))
}a=a.substring(3)
}if(b!=f){if(a.charAt(0)!="?"&&a.charAt(0)!="#"){f=f.substring(0,f.lastIndexOf("/"))
}}if(a.charAt(0)=="/"){return f+a
}else{if(a.charAt(0)=="?"){f=f.split("?")[0];
return f+a
}else{if(a.charAt(0)=="#"){f=f.split("#")[0];
return f+a
}else{return f+"/"+a
}}}};
function clickcr(g,H,u,D,E,A,P){if(arguments.length==1){if(typeof nclk.generateCC!="undefined"){nclk.generateCC(arguments[0])
}return
}var F=navigator.userAgent.toLowerCase();
var k=(F.indexOf("safari")!=-1?true:false);
var C=/msie/.test(F)&&!/opera/.test(F);
var l=(window.location.protocol=="https:")?"https:":"http:";
var a=ccsrv.substring(ccsrv.indexOf(".")+1);
var t=window.event?window.event:E;
var s=-1;
var q=-1;
var p=-1;
var n=-1;
var S,f,i;
var r,j,m;
var M,J,I,L,z,B,w;
var O;
var G=0;
if(!A){A="0"
}else{A=String(A)
}if(!P){P=""
}if(A.indexOf("n")==0){G=0
}else{if(window.g_ssc!=undefined&&window.g_query!=undefined){G=1
}else{G=0
}}try{L=nclk.windowSize(window);
i=nclk.checkIframe(g);
if(i){var v=nclk.findPos(document.getElementById(i));
if(t.clientX&&t.clientX!=undefined){S=document.body;
if(S.clientLeft&&S.clientTop){ifrSx=t.clientX-S.clientLeft;
ifrSy=t.clientY-S.clientTop
}else{ifrSx=t.clientX;
ifrSy=t.clientY
}}p=v[0]+ifrSx;
n=v[1]+ifrSy;
if(document.body&&(document.body.scrollTop||document.body.scrollLeft)){S=document.body;
s=p-S.scrollLeft;
q=n-S.scrollTop
}else{if(document.documentElement&&(document.documentElement.scrollTop||document.documentElement.scrollLeft)){f=document.documentElement;
s=p-f.scrollLeft;
q=n-f.scrollTop
}else{s=p;
q=n
}}}else{if(t.clientX&&t.clientX!=undefined){S=document.body;
if(S.clientLeft&&S.clientTop){s=t.clientX-S.clientLeft;
q=t.clientY-S.clientTop
}else{s=t.clientX;
q=t.clientY
}}if(document.body&&(document.body.scrollTop||document.body.scrollLeft)){p=document.body.scrollLeft+(s<0?0:s);
n=document.body.scrollTop+(q<0?0:q)
}else{if(document.documentElement&&(document.documentElement.scrollTop||document.documentElement.scrollLeft)){f=document.documentElement;
if(f.scrollLeft!=undefined){p=f.scrollLeft+(s<0?0:s)
}if(f.scrollTop!=undefined){n=f.scrollTop+(q<0?0:q)
}}else{p=(s<0?0:s);
n=(q<0?0:q)
}}if(t.pageX){p=t.pageX
}if(t.pageY){n=t.pageY
}}}catch(Q){}if(H==""||typeof H=="undefined"){return
}if(A.indexOf("1")!=-1){r=0
}else{if(g.href){z=g.nodeName.toLowerCase();
B=g.href.toLowerCase();
if((g.target&&g.target!="_self"&&g.target!="_top"&&g.target!="_parent")||(B.indexOf("javascript:")!=-1)||(g.getAttribute("href",2)&&g.getAttribute("href",2).charAt(0)=="#")||(B.indexOf("#")!=-1&&(B.substr(0,B.indexOf("#"))==document.URL))||z.toLowerCase()=="img"||C&&window.location.host.indexOf(a)==-1){r=0
}else{r=1
}}else{r=0
}}if(g.href&&g.href.indexOf(l+"//"+ccsrv)==0){j=g.href
}else{j=l+"//"+ccsrv+"/"+nclkModule+"?a="+H+"&r="+D+"&i="+u;
j+="&bw="+L+"&px="+p+"&py="+n+"&sx="+s+"&sy="+q+"&m="+r;
if(G==0){j+="&nsc="+nsc
}else{if(G==1){j+="&ssc="+g_ssc+"&q="+encodeURIComponent(g_query)+"&s="+g_sid+"&p="+g_pid
}}if(P){j+="&g="+encodeURIComponent(P)
}if(B&&B.indexOf(l+"//"+ccsrv)!=0&&z.toLowerCase()!="img"){var N=g.href;
if(g.outerHTML&&!window.XMLHttpRequest){N=(/\shref=\"([^\"]+)\"/i.test(g.outerHTML)&&RegExp.$1).replace(/\\/g,"\\\\").replace(/%([A-Z0-9]{2})/ig,"\\$1");
(d=document.createElement("div")).innerHTML=N;
N=d.innerText.replace(/\\([A-Z0-9]{2})/gi,"%$1").replace(/\\\\/g,"\\")
}B=N.toLowerCase();
if(B.indexOf("http:")==0||B.indexOf("https:")==0||B.indexOf("javascript:")==0){j+="&u="+encodeURIComponent(N)
}else{w=nclk.absPath(N);
j+="&u="+encodeURIComponent(w)
}}else{if(g.href){if(g.href.length>0){j+="&u="+encodeURIComponent(g.href)
}else{j+="&u=about%3Ablank"
}}else{j+="&u=about%3Ablank"
}}}if(r==1){O=g.innerHTML;
g.href=j;
if(g.innerHTML!=O){g.innerHTML=O
}}else{if(document.images){var K=new Date().getTime();
j+="&time="+K;
if(k&&!g.href){var R=c=new Date();
while((R.getTime()-c.getTime())<100){R=new Date()
}var M=new Image();
nclkImg.push(M);
M.src=j
}else{var M=new Image();
nclkImg.push(M);
M.src=j
}}}return true
};nhn.movie=nhn.movie||{};
nhn.movie.end=nhn.movie.end||{};
nhn.movie.end.movie=nhn.movie.end.movie||{};
nhn.movie.end.people=nhn.movie.end.people||{};
nhn.movie.Core={};(function(jindo){var htDefaultOptions={sMenuScrollBoxId:"scrollbar",sHeaderId:"header",nMinWidthForHorizontalMiddle:1280};
var oNavigator=jindo.$Agent().navigator();
nhn.movie.LNB=jindo.$Class({$init:function(htOptions){this.option(htDefaultOptions);
this.option(htOptions||{});
this._oDocument=jindo.$Document();
this._welMenuScrollBox=jindo.$Element(this.option("sMenuScrollBoxId"));
try{if(!oNavigator.ie||(oNavigator.ie&&oNavigator.version>7&&this._oDocument.clientSize().width>1095)){this._oMenuScrollBox=new jindo.ScrollBox(this._welMenuScrollBox.$value(),{nDelta:32,sOverflowX:"hidden",sOverflowY:"auto"})
}else{jindo.$Element(this.option("sHeaderId")).css("position","absolute")
}}catch(e){this._oMenuScrollBox=undefined
}this._nMenuWidth=this._welMenuScrollBox.$value().offsetWidth;
this._nMenuOffsetTop=47;
this._wfWindowResize=jindo.$Fn(this._onWindowResize,this);
this._wfWindowScroll=jindo.$Fn(this._onWindowScroll,this);
this.update();
this._wfWindowResize.attach(window,"resize");
this._wfWindowScroll.attach(window,"scroll")
},_onWindowResize:function(we){this._nResizeTimer&&clearTimeout(this._nResizeTimer);
this._nResizeTimer=setTimeout(jindo.$Fn(function(){this.update()
},this).bind(),100)
},_onWindowScroll:function(we){clearTimeout(this._nTimer);
this._nTimer=null;
this._nTimer=setTimeout(jindo.$Fn(function(){},this).bind(),0)
},update:function(){if(this._oMenuScrollBox!=undefined){var htDocSize=this._oDocument.clientSize(),oBoxSize=this._oMenuScrollBox.getBoxSize(),oSize={nWidth:this._nMenuWidth,nHeight:htDocSize.height-this._nMenuOffsetTop};
if(oBoxSize.nWidth!=oSize.nWidth||oBoxSize.nHeight!=oSize.nHeight){this._nPrevMenuScrollTop=this._oMenuScrollBox.getScrollTop();
this._oMenuScrollBox.setSize(oSize.nWidth,oSize.nHeight);
this._oMenuScrollBox.setScrollTop(this._nPrevMenuScrollTop)
}}jindo.$Element("header").attr({style:"bottom: 0;"})
}}).extend(jindo.Component)
})(jindo);var searchDefaultImage=function(source,type){var sDefaultImage="";
switch(type){case 0:sDefaultImage="https://ssl.pstatic.net/static/movie/2012/06/dft_img30x43.png";
break;
case 1:sDefaultImage="https://ssl.pstatic.net/static/movie/2012/06/dft_img30x48.png";
break
}source.src=sDefaultImage
};
(function(jindo){var options=null;
var elAuto=null;
var bDirectClick=false;
var bOpenAuto=false;
var oFlag={bMovie:false,bPeople:false};
var template={area:'<div id="jAutoComplate" class="auto_tx_area"><div class="auto_tx_foorer"><a href="#" class="all_result">전체 검색 결과보기</a><p class="auto_tx_etc"><a href="http://help.naver.com/ops/step1/faq.nhn" target="_blank" class="helper">도움말</a><a href="#" class="clse">기능끄기</a></p><img src="https://ssl.pstatic.net/sstatic/search/images11/img_atcmp15.gif" alt="" width="218" height="23" class="help" id="help_tooltip2" style="position:absolute;bottom: 37px; right: 1px; display: none; "></div></div>',auto_mv:'<div id="jAutoMV" class="auto_mv"><strong class="h_auto_mv">영화</strong><ul></ul></div>',auto_mv_contents:'<li data-title="{{title}}"><a href="{{link}}"><p class="auto_thumb"><img src="{{thumbnail}}" width="30" height="43" alt="{{title}}" onerror="searchDefaultImage(this,0);"/></p><div class="thumb_spec"><p class="auto_tx_tit">{{title_match}} <span class="auto_since">{{time}}</span></p><p class="etc_spec">{{people}}</p></div></a><!-- N=a:GNB.sug --></li>',auto_people:'<div id="jAutoPP" class="auto_people"><strong class="h_auto_people">영화인</strong><ul></ul></div>',auto_people_contents:'<li data-title="{{title}}"><a href="{{link}}"><p class="auto_thumb"><img src="{{thumbnail}}" width="30" height="38" alt="{{title}}" onerror="searchDefaultImage(this,1);"/></p><div class="thumb_spec"><p class="auto_tx_tit">{{title_match}} <span class="auto_since">{{time}}</span></p><dl>{{movie}}</dl></div></a><!-- N=a:GNB.sug --></li>'};
nhn.movie.Search=jindo.$Class({options:{},$init:function(oOptions){var _self=this;
this.options=oOptions;
options=this.options;
var elArea=jindo.$Element(options.area);
var bAutoClose=true;
this._oCookie=jindo.$Cookie();
this._auto=this._oCookie.get("NM_AUTOCOMPLETE")||"ON";
try{jindo.$Element("jSearchArea").remove("jAutoComplate");
elAuto=null;
oFlag={bMovie:false,bPeople:false};
jindo.$Element("ipt_tx_srch").$value().value=""
}catch(e){}if(elArea){var closeSearch=function(event){var parent=jindo.$Element(event.element).parent(function(v){return v.hasClass("_view")
});
if(parent.length>0){return
}if(event.type=="mousemove"&&bAutoClose==false){return
}if(bDirectClick){bDirectClick=false;
return
}try{jindo.$Element("jAutoComplate").hide()
}catch(e){}if(jindo.$Element("ipt_tx_srch").$value().value==""){jindo.$Element(jindo.$Element("jSearchArea").query(".ipt_srch label")).show()
}if(elArea.query(".auto_tx img")){if(_self._auto=="ON"){_self.autoBtn("hide")
}}bAutoClose=true;
jindo.$Fn(closeSearch,this).detach(document,"mousedown")
};
jindo.$Fn(function(event){jindo.$Fn(closeSearch,this).attach(document,"mousedown");
var parent=jindo.$Element(event.element).parent(function(v){return v.hasClass("auto_tx_area")
});
if(parent.length>0){bDirectClick=true;
return
}},this).attach(elArea,"mousedown");
jindo.$Fn(function(event){try{if(_self._auto=="ON"){if(jindo.$Element("ipt_tx_srch").$value().value!=""){if(bOpenAuto&&jindo.$Element("jAutoComplate")&&jindo.$Element("jAutoComplate").css("display")=="none"){bOpenAuto=false
}else{if(!bOpenAuto&&jindo.$Element("jAutoComplate")&&jindo.$Element("jAutoComplate").css("display")!="none"){bOpenAuto=true
}}if(bOpenAuto==false){_self.autoBtn("show");
jindo.$Element("jAutoComplate").show();
bOpenAuto=true
}else{_self.autoBtn("hide");
jindo.$Element("jAutoComplate").hide();
bOpenAuto=false
}}}}catch(e){}bDirectClick=false;
jindo.$Element(jindo.$Element("jSearchArea").query(".ipt_srch label")).hide()
},this).attach(jindo.$("ipt_tx_srch"),"click");
jindo.$Fn(function(event){if(jindo.$Element("ipt_tx_srch").$value().value.length<=0){return
}var elSearchForm=jindo.$Form("jSearchForm");
if(elSearchForm){elSearchForm.value("query",(sTemp!="")?sTemp:jindo.$Element("ipt_tx_srch").$value().value);
elSearchForm.submit()
}},this).attach(jindo.$Element(elArea.query(".btn_srch")),"click");
jindo.$Fn(function(event){if(_self._auto=="ON"){if(elAuto==null){_self.autoBtn("show");
makeAuto(null)
}else{if(elAuto.css("display")!="none"){elAuto.hide();
_self.autoBtn("hide")
}else{_self.autoBtn("show");
elAuto.show();
if(jindo.$Element("ipt_tx_srch").$value().value!=""){oWatchInput.fireChangeEvent()
}}}}else{_self._setCookie("NM_AUTOCOMPLETE","ON");
_self._auto="ON";
if(elAuto==null){makeAuto(null)
}else{elAuto.show()
}if(jindo.$Element("ipt_tx_srch").$value().value!=""){oWatchInput.fireChangeEvent()
}}},this).attach(jindo.$(elArea.query(".auto_tx")),"click")
}var oWatchInput=new jindo.WatchInput(jindo.$("ipt_tx_srch"));
elAuto=null;
var bSelecting=false;
var _self=this;
var makeAuto=function(response){try{elArea.remove(jindo.$Element(elArea.query(".auto_tx_area")))
}catch(e){}jindo.$Element(elArea.query("._view")).append(jindo.$(_self.makeTemplate()));
setTimeout(function(){try{_self.autoBtn("show")
}catch(e){}elAuto=jindo.$Element("jAutoComplate");
try{elAuto.show();
jindo.$Fn(function(event){var elSearchForm=jindo.$Form("jSearchForm");
if(elSearchForm){elSearchForm.value("query",(sTemp!="")?sTemp:jindo.$Element("ipt_tx_srch").$value().value);
elSearchForm.submit()
}},this).attach(jindo.$(elAuto.query(".all_result")),"click");
jindo.$Fn(function(event){try{jindo.$Element(jindo.$Element("jAutoComplate").query("#help_tooltip2")).show()
}catch(e){}},this).attach(jindo.$(elAuto.query(".clse")),"mouseover");
jindo.$Fn(function(event){try{jindo.$Element(jindo.$Element("jAutoComplate").query("#help_tooltip2")).hide()
}catch(e){}},this).attach(jindo.$(elAuto.query(".clse")),"mouseout");
if(_self._auto=="ON"){jindo.$Fn(function(event){_self._setCookie("NM_AUTOCOMPLETE","OFF");
_self._auto="OFF";
try{_self.autoBtn("off");
elArea.remove("jAutoComplate");
elAuto=null;
oFlag={bMovie:false,bPeople:false}
}catch(e){}},this).attach(jindo.$(elAuto.query(".clse")),"click")
}else{jindo.$Fn(function(event){_self._setCookie("NM_AUTOCOMPLETE","ON");
_self._auto="ON"
},this).attach(jindo.$(elAuto.query(".clse")),"click")
}if(response!=null){try{jindo.$Element("jAutoComplate").remove("jInfomation")
}catch(e){}_self.makeContents(response,oFlag)
}else{jindo.$Element("jAutoComplate").prepend(jindo.$('<p id="jInfomation" class="at_alert">자동완성 기능이 활성화되었습니다.</p>'))
}}catch(e){}},0)
};
oWatchInput.attach("change",function(oCustomEvent){if(_self._auto!="ON"){return
}if(bSelecting){return
}var query=oCustomEvent.sText.replace(/\#/g,"%23");
if(query.length>0){var oAjax=new jindo.$Ajax(options.autosearch+encodeURI(query),{type:"jsonp",onload:function(res){var response=res.json();
if(elAuto==null){makeAuto(response)
}else{_self.makeContents(response,oFlag)
}}});
oAjax.request()
}else{if(elArea&&jindo.$("jAutoComplate")){try{elArea.remove("jAutoComplate");
_self.autoBtn("hide");
jindo.$Element("ipt_tx_srch").$value().value=""
}catch(e){}}elAuto=null;
oFlag={bMovie:false,bPeople:false}
}});
var aSelectingList=[];
var iIndex=0;
var sTemp="";
var elTempBefore=null;
jindo.$Fn(function(event){switch(event._event.keyCode){case 38:bSelecting=true;
if(iIndex>0){iIndex--
}break;
case 40:if(bSelecting&&iIndex<aSelectingList.length){iIndex++
}bSelecting=true;
break;
case 13:if(bSelecting){event.stop(jindo.$Event.CANCEL_ALL);
document.location.href=jindo.$Element(jindo.$Element(aSelectingList[iIndex]).query("a")).attr("href")
}else{var elSearchForm=jindo.$Form("jSearchForm");
if(elSearchForm){elSearchForm.value("query",jindo.$Element("ipt_tx_srch").$value().value);
elSearchForm.submit()
}event.stopDefault()
}break;
default:bSelecting=false;
break
}if(bSelecting){if(aSelectingList.length==0){aSelectingList=elArea.queryAll("li");
sTemp=jindo.$Element(event.element).$value().value
}if(elTempBefore!=null){jindo.$Element(elTempBefore.query("a")).removeClass("m_over");
jindo.$Element(elTempBefore.query("a")).removeClass("p_over")
}if(iIndex==aSelectingList.length){iIndex=0;
jindo.$Element(event.element).$value().value=sTemp;
setTimeout(function(){bSelecting=false
},600);
elTempBefore=null
}else{jindo.$Element(event.element).$value().value=jindo.$Element(aSelectingList[iIndex]).attr("data-title");
jindo.$Element(jindo.$Element(aSelectingList[iIndex]).query("a")).addClass("m_over");
elTempBefore=jindo.$Element(aSelectingList[iIndex])
}}else{aSelectingList=[];
iIndex=0;
sTemp=""
}},this).attach(jindo.$("ipt_tx_srch"),"keydown")
},makeAutoText:function(query,value){var sTempValue=value.replace(/\s/g,"");
var sQuery=new RegExp("("+jindo.$S(query).escapeRegex()+")+","gi");
var aMatch=sTempValue.match(sQuery);
if(aMatch!=null){var tempMatch=value.match(/\s/g);
var iEIndex=0;
var iSIndex=0;
var iLastIndex=value.lastIndexOf(" ");
var iLength=value.length;
var iSpaceCount=0;
var rSpacePosition=[];
var sTempValueMatch="";
if(tempMatch!=null){for(var i=0;
i<=tempMatch.length;
i++){if(iEIndex==iLastIndex){iEIndex=iLength
}else{iEIndex=value.indexOf(" ",iSIndex)
}iSpaceCount++;
rSpacePosition.push(iEIndex);
iSIndex=iEIndex+1
}sTempResult="";
jindo.$A(aMatch).forEach(function(v,i,a){if(i==0){sTempResult=sTempValue.replace(v,"<em>"+v+"</em>")
}});
var sFinalResult="";
if(iSIndex>0){var iTempStart=0;
var iSpacePositionLen=rSpacePosition.length;
var iPlusTag=0;
var iOldV=0;
jindo.$A(rSpacePosition).forEach(function(v,i,a){var iFindTag=sTempResult.indexOf("<",iTempStart);
var iTagEnd=(v+iPlusTag-i);
if(iFindTag>=0&&iFindTag<=iTagEnd){iPlusTag+=sTempResult.indexOf(">",iTempStart)-sTempResult.indexOf("<",iTempStart)+1;
var iTempNextTag=sTempResult.indexOf("</",iTagEnd);
if(iTempNextTag>-1&&iTempNextTag<v+iPlusTag-i){var iCloseTagEnd=sTempResult.indexOf(">",iTempNextTag);
sFinalResult+=sTempResult.slice(iTempStart,iCloseTagEnd+1);
iTempStart=iCloseTagEnd+1;
if(iCloseTagEnd+1==v+iPlusTag-i){sFinalResult+=" "
}else{iPlusTag+=iCloseTagEnd-iTempNextTag+1;
sFinalResult+=sTempResult.slice(iTempStart,v+iPlusTag-i)+" ";
iTempStart=v+iPlusTag-i
}}else{sFinalResult+=sTempResult.slice(iTempStart,v+iPlusTag-i)+" ";
iTempStart=v+iPlusTag-i
}}else{sFinalResult+=sTempResult.slice(iTempStart,v+iPlusTag-i)+" ";
iTempStart=v+iPlusTag-i
}});
return sFinalResult
}else{return value.replace(sQuery,"<em>$1</em>")
}}else{return value.replace(new RegExp("("+jindo.$S(query).escapeRegex()+")","i"),"<em>$1</em>")
}}else{return value
}},makeLists:function(value,query){var self=this;
var sHTML="";
switch(value[6][0]){case"movie":sHTML=template.auto_mv_contents.replace(/{{title}}/g,value[0][0]).replace("{{title_match}}",self.makeAutoText(query,value[0][0])).replace("{{time}}",value[1][0].slice(0,4)).replace("{{people}}",value[2][0]).replace("{{thumbnail}}",(value[3][0])?value[3][0].replace("http://movie.phinf.naver.net","https://movie-phinf.pstatic.net")+"?type=n30_43_2":"https://ssl.pstatic.net/static/movie/2012/06/dft_img30x43.png").replace("{{link}}",options.movelink+value[5][0]);
break;
case"people":var escapedImageSrc=encodeURIComponent(value[3][0]);
sHTML=template.auto_people_contents.replace(/{{title}}/g,value[0][0]).replace("{{title_match}}",self.makeAutoText(query,value[0][0])).replace("{{time}}",(value[1][0]!=0)?value[1][0]:"").replace("{{movie}}",(value[2][0])?"<dd>"+value[2][0]+"</dd>":"").replace("{{thumbnail}}",(value[3][0])?"https://search.pstatic.net/common/?src="+escapedImageSrc+"&type=u120_150&quality=95":"https://ssl.pstatic.net/static/movie/2012/06/dft_img30x48.png").replace("{{link}}",options.peoplelink+value[5][0]);
break
}return sHTML
},makeContents:function(aItems,oFlag){var bPeople=false;
var bMoive=false;
var _self=this;
elAuto=jindo.$Element("jAutoComplate");
try{jindo.$Element("jAutoComplate").remove("jInfomation")
}catch(e){}try{jindo.$Element(jindo.$Element("jAutoPP").query("ul")).html("")
}catch(e){}try{jindo.$Element(jindo.$Element("jAutoMV").query("ul")).html("")
}catch(e){}if(aItems.items.length>0){if(aItems.items[0].length>0){try{jindo.$Element("jAutoComplate").show();
elAuto.show()
}catch(e){}}jindo.$A(aItems.items[0]).forEach(function(v,i,a){if(typeof v[6]=="undefined"){return
}switch(v[6][0]){case"movie":bMoive=true;
if(!oFlag.bMovie){if(oFlag.bPeople){try{jindo.$Element("jAutoPP").before(jindo.$(template.auto_mv))
}catch(e){}}else{try{elAuto.prepend(jindo.$(template.auto_mv))
}catch(e){}}oFlag.bMovie=true;
try{jindo.$Element(jindo.$Element("jAutoMV").query("ul")).html(_self.makeLists(v,aItems.query[0]))
}catch(e){}}else{try{jindo.$Element(jindo.$Element("jAutoMV").query("ul")).append(jindo.$(_self.makeLists(v,aItems.query[0])))
}catch(e){}}break;
case"people":bPeople=true;
if(!oFlag.bPeople){if(oFlag.bMovie){try{jindo.$Element("jAutoMV").after(jindo.$(template.auto_people))
}catch(e){}}else{try{elAuto.prepend(jindo.$(template.auto_people))
}catch(e){}}oFlag.bPeople=true;
try{jindo.$Element(jindo.$Element("jAutoPP").query("ul")).html(_self.makeLists(v,aItems.query[0]))
}catch(e){}}else{try{jindo.$Element(jindo.$Element("jAutoPP").query("ul")).append(jindo.$(_self.makeLists(v,aItems.query[0])))
}catch(e){}}break
}});
if(!bPeople){try{elAuto.remove("jAutoPP")
}catch(e){}oFlag.bPeople=false
}if(!bMoive){try{elAuto.remove("jAutoMV")
}catch(e){}oFlag.bMovie=false
}if(!bPeople&&!bMoive){try{elAuto.hide()
}catch(e){}}else{try{elAuto.show()
}catch(e){}}}else{jindo.$Element(options.area).remove(jindo.$Element("jAutoComplate"));
elAuto=null;
oFlag={bMovie:false,bPeople:false}
}},makeTemplate:function(){return template.area
},autoBtn:function(sStat){var options=this.options;
var img="";
var title="";
switch(sStat){case"show":img="https://ssl.pstatic.net/static/movie/2012/06/srch_arrow_up.gif";
title="자동완성 접기";
break;
case"hide":img="https://ssl.pstatic.net/static/movie/2012/06/srch_arrow_down.gif";
title="자동완성 펼치기";
break;
case"off":img="https://ssl.pstatic.net/static/movie/2012/06/srch_arrow_down2.gif";
title="자동완성 켜기";
break
}jindo.$Element(jindo.$Element(options.area).query(".auto_tx img")).attr("src",img).attr("title",title).attr("alt",title);
jindo.$Element(jindo.$Element(options.area).query(".auto_tx a")).attr("title",title)
},_setCookie:function(sName,sValue){document.cookie=sName+"="+sValue+"; path=/; domain=.movie.naver.com"
}}).extend(jindo.Component)
})(jindo);