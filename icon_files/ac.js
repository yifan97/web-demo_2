$(function (){"use strict";var lang=window.location.pathname.split("/")[1],debug=(window.location.toString().indexOf("?ac") > 0),RequestClass,InputClass,DropClass,ContainerClass,container;InputClass=go.Class(go.Ext.Events,{__construct:function (node){this.node=$(node);this.node.on("focus",this.onFocus);this.node.on("blur",this.onBlur);this.node.on("keydown",this.onKeypress);this.value=null;},onFocus:function (){this.fireEvent("focus");if (this.value===null){this.value=this.node.val();this.fireEvent("change",{value:this.value});}this.interval=setInterval(this.onInterval,300);},onBlur:function (){this.fireEvent("blur");if (this.interval){clearInterval(this.interval);this.interval=null;}},onKeypress:function (e){switch (e.keyCode){case 38:this.fireEvent("updown",{up:true,down:false});break;case 40:this.fireEvent("updown",{up:false,down:true});break;case 13:this.fireEvent("enter",{e:e});break;}},onInterval:function (){var val=this.node.val();if (val !==this.value){this.value=val;this.fireEvent("change",{value:this.value});}},setValue:function (val){this.value=val;this.node.val(val);}});DropClass=go.Class({__construct:function (node){this.node=$(node);this.opened=false;this.visible=false;this.nodes=null;this.len=0;this.cache={};this.current=null;},open:function (){if (!this.opened){this.opened=true;if (this.len > 0){this.show();}else{this.hide();}}},close:function (){if (this.opened){this.opened=false;this.hide();}},show:function (){if (!this.visible){this.visible=true;this.node.show();container.input.node.addClass("active");}},hide:function (){var n,node,self=this;if (this.visible){this.visible=false;node=this.node;setTimeout(function (){if (!self.visible){if (!debug){node.hide();container.input.node.removeClass("active");}}},100);if (this.current !==null){n=this.nodes[this.current];if (n){n.el.className="tooltip";}this.current=null;}}},resetCurrent:function (){var n;if (this.current !==null){n=this.nodes[this.current];if (n){n.el.className="tooltip";}this.current=null;}},upDown:function (up){var n;if (this.len===0){return null;}if (this.current===null){this.current=up ? (this.len - 1):0;}else{n=this.nodes[this.current];if (n){n.el.className="tooltip";}this.current +=(up ? -1:1);if ((this.current < 0) || (this.current >=this.len)){this.current=null;return null;}}n=this.nodes[this.current];if (!n){return null;}n.el.className="tooltip current"
return n.data[1];},draw:function (data){var chars=data.chars,len=chars.length,el,i,node;this.len=len;this.node.html("");if (len===0){this.hide();return;}this.show();el=this.node[0];this.nodes=[];for (i=0;i < len;i +=1){node=this.getNode(chars[i]);this.nodes.push(node);el.appendChild(node.el);}},getNode:function (data){var dec=parseInt(data[0],16),title=data[1],node,el,spanT,span;node=this.cache[dec];if (node){node.el.className="tooltip";return node;}el=document.createElement("a");el.href="/" + lang + "/" + data[0] + "/";el.className="tooltip";spanT=document.createElement("span");spanT.className="tooltip-info";spanT.appendChild(document.createTextNode(title));span=document.createElement("span");span.className="tooltip-symbol " + this.getDecClass(dec);span.innerHTML="&#" + dec + ";";el.appendChild(spanT);el.appendChild(span);node={data:data,el:el};this.cache[dec]=node;return node;},getDecClass:function (dec){var hex=(Math.floor(dec / 1024) * 4).toString(16);if (hex.length < 2){hex="0" + hex;}return "u" + hex + "00";},getCurrentCode:function (){var n;if (this.current !==null){n=this.nodes[this.current];if (n){return n.data[0];}}}});RequestClass=go.Class(go.Ext.Events,{__construct:function (){this.url="/" + lang + "/a-search/";this.cache={"":{value:"",total:0,chars:[]}};this.value=null;},query:function (value){var data,self=this;value=value.replace(/^\s+/,"").replace(/\s+$/,"");data=this.cache[value];this.value=value;if (data===true){return;}if (data){this.fireEvent("load",data);return;}function onLoad(r){var data;if (!r.result){return;}r=r.result;if (!r.c){return;}data={total:parseInt(r.t,10),chars:r.c,value:value};if (self.value===value){self.fireEvent("load",data);}self.cache[value]=data;}jQuery.post(this.url,{s:value},onLoad,"json");this.cache[value]=true;}});ContainerClass=go.Class({__construct:function (nodeInput,nodeDrop){this.input=new InputClass(nodeInput);this.drop=new DropClass(nodeDrop);this.request=new RequestClass();this.initEvents();this.inited=false;this.value="";},initEvents:function (){this.input.addEventListener("focus",this.onFocus);this.input.addEventListener("blur",this.onBlur);this.input.addEventListener("change",this.onChange);this.input.addEventListener("updown",this.onUpDown);this.input.addEventListener("enter",this.onEnter);this.request.addEventListener("load",this.onLoad);},onFocus:function (){this.drop.open();},onBlur:function (){setTimeout(function(){this.drop.close();},100);},onChange:function (e){this.value=e.data.value;this.request.query(this.value);this.drop.resetCurrent();},onUpDown:function (e){var value=this.drop.upDown(e.data.up);if (value===null){value=this.value;}this.input.setValue(value);},onEnter:function (e){var code=this.drop.getCurrentCode();if (code){e.data.e.preventDefault();window.location.assign("/" + lang + "/" + code + "/");}},onLoad:function (e){this.drop.draw(e.data);}});container=new ContainerClass("#search-query","#search-ac");});