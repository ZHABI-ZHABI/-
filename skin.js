// Garden Gnome Software - Skin
// Pano2VR 6.1.10/18007
// Filename: skin_1.ggsk
// Generated 2026-01-22T16:54:25

function pano2vrSkin(player,base) {
	var me=this;
	var skin=this;
	var flag=false;
	var skinKeyPressed = 0;
	this.player=player;
	this.player.skinObj=this;
	this.divSkin=player.divSkin;
	this.ggUserdata=player.userdata;
	this.lastSize={ w: -1,h: -1 };
	var basePath="";
	// auto detect base path
	if (base=='?') {
		var scripts = document.getElementsByTagName('script');
		for(var i=0;i<scripts.length;i++) {
			var src=scripts[i].src;
			if (src.indexOf('skin.js')>=0) {
				var p=src.lastIndexOf('/');
				if (p>=0) {
					basePath=src.substr(0,p+1);
				}
			}
		}
	} else
	if (base) {
		basePath=base;
	}
	this.elementMouseDown=[];
	this.elementMouseOver=[];
	var cssPrefix='';
	var domTransition='transition';
	var domTransform='transform';
	var prefixes='Webkit,Moz,O,ms,Ms'.split(',');
	var i;
	var hs,el,els,elo,ela,elHorScrollFg,elHorScrollBg,elVertScrollFg,elVertScrollBg,elCornerBg;
	if (typeof document.body.style['transform'] == 'undefined') {
		for(var i=0;i<prefixes.length;i++) {
			if (typeof document.body.style[prefixes[i] + 'Transform'] !== 'undefined') {
				cssPrefix='-' + prefixes[i].toLowerCase() + '-';
				domTransition=prefixes[i] + 'Transition';
				domTransform=prefixes[i] + 'Transform';
			}
		}
	}
	
	player.setMargins(0,0,0,0);
	
	this.updateSize=function(startElement) {
		var stack=[];
		stack.push(startElement);
		while(stack.length>0) {
			var e=stack.pop();
			if (e.ggUpdatePosition) {
				e.ggUpdatePosition();
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	
	this.callNodeChange=function(startElement) {
		var stack=[];
		stack.push(startElement);
		while(stack.length>0) {
			var e=stack.pop();
			if (e.ggNodeChange) {
				e.ggNodeChange();
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	player.addListener('changenode', function() { me.ggUserdata=player.userdata; me.callNodeChange(me.divSkin); });
	
	var parameterToTransform=function(p) {
		var hs='translate(' + p.rx + 'px,' + p.ry + 'px) rotate(' + p.a + 'deg) scale(' + p.sx + ',' + p.sy + ')';
		return hs;
	}
	
	this.findElements=function(id,regex) {
		var r=[];
		var stack=[];
		var pat=new RegExp(id,'');
		stack.push(me.divSkin);
		while(stack.length>0) {
			var e=stack.pop();
			if (regex) {
				if (pat.test(e.ggId)) r.push(e);
			} else {
				if (e.ggId==id) r.push(e);
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
		return r;
	}
	
	this.addSkin=function() {
		var hs='';
		this.ggCurrentTime=new Date().getTime();
		el=me._nav_buttons=document.createElement('div');
		el.ggId="nav_buttons";
		el.ggDx=1;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : 18px;';
		hs+='height : 32px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 347px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._nav_buttons.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._nav_buttons.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		el=me._pan_left=document.createElement('div');
		els=me._pan_left__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0naXNvLTg4NTktMSc/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiIGhlaWdodD0iNTEycHgiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAzODQuOTcgMzg0Ljk3OyIgaWQ9IkNhcGFfMSIgdmlld0JveD0iMCAwIDM4NC45NyAzODQuOT'+
			'ciIHdpZHRoPSI1MTJweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeT0iMHB4IiB4PSIwcHgiPgogPGc+CiAgPGcgaWQ9IkNoZXZyb25fTGVmdF9DaXJjbGUiPgogICA8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNMTkyLjQ4NSwwQzg2LjE4NSwwLDAsODYuMTg1LDAsMTkyLjQ4NUMwLDI5OC43OTcsODYuMTczLDM4NC45NywxOTIuNDg1LDM4NC45N1MzODQuOTcsMjk4Ljc5NywzODQuOTcsMTkyLjQ4NSAgICBDMzg0Ljk3LDg2LjE4NSwyOTguNzk3LDAsMTkyLjQ4NSwweiBNMTkyLjQ4NSwzNjEuMjgyYy05Mi44NzQsMC0xNjguNDI0LTc1LjkyMy0xNjguNDI0LTE2OC43OTdTOTkuNjExLDI0LjA2MSwx'+
			'OTIuNDg1LDI0LjA2MSAgICBzMTY4LjQyNCw3NS41NSwxNjguNDI0LDE2OC40MjRTMjg1LjM1OSwzNjEuMjgyLDE5Mi40ODUsMzYxLjI4MnoiLz4KICAgPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTTIzNS44NzgsOTkuODc2Yy00LjcwNC00Ljc0LTEyLjMxOS00Ljc0LTE3LjAxMSwwbC04My4wMDksODQuMmMtNC41NzIsNC42Mi00LjU4NCwxMi41NiwwLDE3LjE5MWw4Mi45OTcsODQuMiAgICBjNC43MDQsNC43NCwxMi4zMTksNC43NCwxNy4wMTEsMGM0LjcwNC00Ljc1Miw0LjcwNC0xMi40MzksMC0xNy4xOTFsLTc0LjUyOC03NS42MWw3NC41NC03NS42MSAgICBDMjQwLjU3LDExMi4zMTUsMjQwLj'+
			'U3LDEwNC42MjgsMjM1Ljg3OCw5OS44NzZ6Ii8+CiAgPC9nPgogIDxnLz4KICA8Zy8+CiAgPGcvPgogIDxnLz4KICA8Zy8+CiAgPGcvPgogPC9nPgogPGcvPgogPGcvPgogPGcvPgogPGcvPgogPGcvPgogPGcvPgogPGcvPgogPGcvPgogPGcvPgogPGcvPgogPGcvPgogPGcvPgogPGcvPgogPGcvPgogPGcvPgo8L3N2Zz4K';
		me._pan_left__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="pan_left";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 15px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._pan_left.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._pan_left.onmouseout=function (e) {
			me.elementMouseDown['pan_left']=false;
		}
		me._pan_left.onmousedown=function (e) {
			me.elementMouseDown['pan_left']=true;
		}
		me._pan_left.onmouseup=function (e) {
			me.elementMouseDown['pan_left']=false;
		}
		me._pan_left.ontouchend=function (e) {
			me.elementMouseDown['pan_left']=false;
		}
		me._pan_left.ggUpdatePosition=function (useTransition) {
		}
		me._nav_buttons.appendChild(me._pan_left);
		el=me._pan_right=document.createElement('div');
		els=me._pan_right__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0naXNvLTg4NTktMSc/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiIGhlaWdodD0iNTEycHgiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAzODQuOTcgMzg0Ljk3OyIgaWQ9IkNhcGFfMSIgdmlld0JveD0iMCAwIDM4NC45NyAzODQuOT'+
			'ciIHdpZHRoPSI1MTJweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeT0iMHB4IiB4PSIwcHgiPgogPGc+CiAgPGcgaWQ9IkNoZXZyb25fUmlnaHRfQ2lyY2xlIj4KICAgPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTTE5Mi40ODUsMEM4Ni4xNzMsMCwwLDg2LjE3MywwLDE5Mi40ODVjMCwxMDYuMyw4Ni4xNzMsMTkyLjQ4NSwxOTIuNDg1LDE5Mi40ODVjMTA2LjMsMCwxOTIuNDg1LTg2LjE4NSwxOTIuNDg1LTE5Mi40ODUgICAgQzM4NC45Nyw4Ni4xNzMsMjk4Ljc4NSwwLDE5Mi40ODUsMHogTTE5Mi40ODUsMzYwLjkwOWMtOTIuODc0LDAtMTY4LjQyNC03NS41NS0xNjguNDI0LTE2OC40MjRTOTkuNjEx'+
			'LDIzLjY4OCwxOTIuNDg1LDIzLjY4OCAgICBzMTY4LjQyNCw3NS45MjMsMTY4LjQyNCwxNjguNzk3UzI4NS4zNTksMzYwLjkwOSwxOTIuNDg1LDM2MC45MDl6Ii8+CiAgIDxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik0xNjYuMTE0LDk5LjUwM2MtNC43MDQtNC43NC0xMi4zMTktNC43NC0xNy4wMTEsMGMtNC43MDQsNC43NTItNC43MDQsMTIuNDM5LDAsMTcuMTkxbDc0LjUyOCw3NS42MWwtNzQuNTQsNzUuNjEgICAgYy00LjcwNCw0Ljc0LTQuNzA0LDEyLjQzOSwwLDE3LjE5MWM0LjcwNCw0Ljc0LDEyLjMxOSw0Ljc0LDE3LjAxMSwwbDgzLjAwOS04NC4yYzQuNTcyLTQuNjMyLDQuNTg0LTEyLjU2LD'+
			'AtMTcuMTkxICAgIEwxNjYuMTE0LDk5LjUwM3oiLz4KICA8L2c+CiAgPGcvPgogIDxnLz4KICA8Zy8+CiAgPGcvPgogIDxnLz4KICA8Zy8+CiA8L2c+CiA8Zy8+CiA8Zy8+CiA8Zy8+CiA8Zy8+CiA8Zy8+CiA8Zy8+CiA8Zy8+CiA8Zy8+CiA8Zy8+CiA8Zy8+CiA8Zy8+CiA8Zy8+CiA8Zy8+CiA8Zy8+CiA8Zy8+Cjwvc3ZnPgo=';
		me._pan_right__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="pan_right";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 50px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._pan_right.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._pan_right.onmouseout=function (e) {
			me.elementMouseDown['pan_right']=false;
		}
		me._pan_right.onmousedown=function (e) {
			me.elementMouseDown['pan_right']=true;
		}
		me._pan_right.onmouseup=function (e) {
			me.elementMouseDown['pan_right']=false;
		}
		me._pan_right.ontouchend=function (e) {
			me.elementMouseDown['pan_right']=false;
		}
		me._pan_right.ggUpdatePosition=function (useTransition) {
		}
		me._nav_buttons.appendChild(me._pan_right);
		el=me._tilt_down=document.createElement('div');
		els=me._tilt_down__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0naXNvLTg4NTktMSc/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiIGhlaWdodD0iNTEycHgiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAzODQuOTcgMzg0Ljk3OyIgaWQ9IkNhcGFfMSIgdmlld0JveD0iMCAwIDM4NC45NyAzODQuOT'+
			'ciIHdpZHRoPSI1MTJweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeT0iMHB4IiB4PSIwcHgiPgogPGc+CiAgPGcgaWQ9IkNoZXZyb25fRG93bl9DaXJjbGUiPgogICA8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNMTkyLjQ4NSwwQzg2LjE4NSwwLDAsODYuMTczLDAsMTkyLjQ4NWMwLDEwNi4zLDg2LjE4NSwxOTIuNDg1LDE5Mi40ODUsMTkyLjQ4NSAgICBjMTA2LjMxMiwwLDE5Mi40ODUtODYuMTg1LDE5Mi40ODUtMTkyLjQ4NUMzODQuOTcsODYuMTczLDI5OC43OTcsMCwxOTIuNDg1LDB6IE0xOTIuNDg1LDM2MC45MDkgICAgYy05Mi44NzQsMC0xNjguNDI0LTc1LjU1LTE2OC40MjQtMTY4LjQyNFM5'+
			'OS42MTEsMjQuMDYxLDE5Mi40ODUsMjQuMDYxczE2OC43OTcsNzUuNTUsMTY4Ljc5NywxNjguNDI0ICAgIFMyODUuMzU5LDM2MC45MDksMTkyLjQ4NSwzNjAuOTA5eiIvPgogICA8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNMjY4LjI3NiwxNDkuMDkybC03NS42MSw3NC41MjhsLTc1LjYxLTc0LjU0Yy00Ljc0LTQuNzA0LTEyLjQzOS00LjcwNC0xNy4xOTEsMGMtNC43NCw0LjcwNC00Ljc0LDEyLjMxOSwwLDE3LjAxMSAgICBsODQuMiw4My4wMDljNC42Miw0LjU3MiwxMi41Niw0LjU4NCwxNy4xOTEsMGw4NC4yLTgyLjk5N2M0Ljc0LTQuNzA0LDQuNzQtMTIuMzE5LDAtMTcuMDExICAgIEMyODAuNz'+
			'E1LDE0NC40LDI3My4wMjgsMTQ0LjQsMjY4LjI3NiwxNDkuMDkyeiIvPgogIDwvZz4KICA8Zy8+CiAgPGcvPgogIDxnLz4KICA8Zy8+CiAgPGcvPgogIDxnLz4KIDwvZz4KIDxnLz4KIDxnLz4KIDxnLz4KIDxnLz4KIDxnLz4KIDxnLz4KIDxnLz4KIDxnLz4KIDxnLz4KIDxnLz4KIDxnLz4KIDxnLz4KIDxnLz4KIDxnLz4KIDxnLz4KPC9zdmc+Cg==';
		me._tilt_down__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="tilt_down";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 85px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._tilt_down.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._tilt_down.onmouseout=function (e) {
			me.elementMouseDown['tilt_down']=false;
		}
		me._tilt_down.onmousedown=function (e) {
			me.elementMouseDown['tilt_down']=true;
		}
		me._tilt_down.onmouseup=function (e) {
			me.elementMouseDown['tilt_down']=false;
		}
		me._tilt_down.ontouchend=function (e) {
			me.elementMouseDown['tilt_down']=false;
		}
		me._tilt_down.ggUpdatePosition=function (useTransition) {
		}
		me._nav_buttons.appendChild(me._tilt_down);
		el=me._tilt_up=document.createElement('div');
		els=me._tilt_up__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0naXNvLTg4NTktMSc/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiIGhlaWdodD0iNTEycHgiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAzODQuOTcgMzg0Ljk3OyIgaWQ9IkNhcGFfMSIgdmlld0JveD0iMCAwIDM4NC45NyAzODQuOT'+
			'ciIHdpZHRoPSI1MTJweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeT0iMHB4IiB4PSIwcHgiPgogPGc+CiAgPGcgaWQ9IkNoZXZyb25fVXBfQ2lyY2xlIj4KICAgPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTTE5Mi40ODUsMEM4Ni4xNzMsMCwwLDg2LjE4NSwwLDE5Mi40ODVDMCwyOTguNzk3LDg2LjE3MywzODQuOTcsMTkyLjQ4NSwzODQuOTdjMTA2LjMsMCwxOTIuNDg1LTg2LjE3MywxOTIuNDg1LTE5Mi40ODUgICAgQzM4NC45Nyw4Ni4xODUsMjk4Ljc4NSwwLDE5Mi40ODUsMHogTTE5Mi40ODUsMzYwLjkwOWMtOTIuODc0LDAtMTY4Ljc5Ny03NS41NS0xNjguNzk3LTE2OC40MjRTOTkuNjExLDI0'+
			'LjA2MSwxOTIuNDg1LDI0LjA2MSAgICBzMTY4LjQyNCw3NS41NSwxNjguNDI0LDE2OC40MjRTMjg1LjM1OSwzNjAuOTA5LDE5Mi40ODUsMzYwLjkwOXoiLz4KICAgPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTTIwMC44OTQsMTM1Ljg1OGMtNC42Mi00LjU3Mi0xMi41Ni00LjU4NC0xNy4xOTEsMGwtODQuMiw4Mi45OTdjLTQuNzQsNC43MDQtNC43NCwxMi4zMTksMCwxNy4wMTEgICAgYzQuNzUyLDQuNzA0LDEyLjQzOSw0LjcwNCwxNy4xOTEsMGw3NS42MS03NC41MjhsNzUuNjEsNzQuNTRjNC43NCw0LjcwNCwxMi40MzksNC43MDQsMTcuMTkxLDBjNC43NC00LjcwNCw0Ljc0LTEyLjMxOSwwLTE3Lj'+
			'AxMSAgICBMMjAwLjg5NCwxMzUuODU4eiIvPgogIDwvZz4KICA8Zy8+CiAgPGcvPgogIDxnLz4KICA8Zy8+CiAgPGcvPgogIDxnLz4KIDwvZz4KIDxnLz4KIDxnLz4KIDxnLz4KIDxnLz4KIDxnLz4KIDxnLz4KIDxnLz4KIDxnLz4KIDxnLz4KIDxnLz4KIDxnLz4KIDxnLz4KIDxnLz4KIDxnLz4KIDxnLz4KPC9zdmc+Cg==';
		me._tilt_up__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="tilt_up";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 120px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._tilt_up.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._tilt_up.onmouseout=function (e) {
			me.elementMouseDown['tilt_up']=false;
		}
		me._tilt_up.onmousedown=function (e) {
			me.elementMouseDown['tilt_up']=true;
		}
		me._tilt_up.onmouseup=function (e) {
			me.elementMouseDown['tilt_up']=false;
		}
		me._tilt_up.ontouchend=function (e) {
			me.elementMouseDown['tilt_up']=false;
		}
		me._tilt_up.ggUpdatePosition=function (useTransition) {
		}
		me._nav_buttons.appendChild(me._tilt_up);
		el=me._zoom_in=document.createElement('div');
		els=me._zoom_in__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0naXNvLTg4NTktMSc/Pgo8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmVyc2lvbj0iMS4xIiBoZWlnaHQ9IjUxMnB4IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmlld0JveD0iMCAwIDI0NC40ODcgMjQ0LjQ4NyIgd2lkdGg9IjUxMnB4IiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAyNDQuNDg3IDI0NC40ODciPgogPGc+CiAgPGc+CiAgIDxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Im0yNDEuODc3LDIzMC4xMzFsLTcyLjkyOS03Mi45MjljMTMuOTczLTE2LjY3IDIyLjQ2NS0zOC'+
			'4wMDQgMjIuNDY1LTYxLjA2MSAwLTUyLjIwNC00My41MDMtOTUuNzA3LTk1LjcwNy05NS43MDdzLTk1LjcwNiw0My41MDQtOTUuNzA2LDk1LjcwOCA0My41MDMsOTUuNzA3IDk1LjcwNyw5NS43MDdjMjIuNjIxLDAgNDMuNTczLTguMTc5IDYwLjEwNC0yMS42ODJsNzIuMTQ1LDcyLjE0NWMxLjc0LDEuNzQgMy40OCwxLjc0IDYuOTYsMS43NHM1LjIyLDAgNi45Ni0xLjc0YzMuNDgyLTMuNDggMy40ODItOC43IDAuMDAxLTEyLjE4MXptLTE0Ni4xNy01NS42ODNjLTQzLjUwMywwLTc4LjMwNS0zNC44MDItNzguMzA1LTc4LjMwNXMzNC44MDItNzguMzA1IDc4LjMwNS03OC4zMDUgNzguMzA1LDM0Ljgw'+
			'MiA3OC4zMDUsNzguMzA1LTM0LjgwMiw3OC4zMDUtNzguMzA1LDc4LjMwNXoiLz4KICAgPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0ibTEyMS44MDksODcuNDQyaC0xNy40MDF2LTE3LjQwMWMwLTUuMjItMy40OC04LjcwMS04LjcwMS04LjcwMS01LjIyLDAtOC43MDEsMy40OC04LjcwMSw4LjcwMXYxNy40MDFoLTE3LjQwMWMtNS4yMiwwLTguNzAxLDMuNDgtOC43MDEsOC43MDFzMy40OCw4LjcwMSA4LjcwMSw4LjcwMWgxNy40MDF2MTcuNDAxYzAsNS4yMiAzLjQ4LDguNzAxIDguNzAxLDguNzAxIDUuMjIsMCA4LjcwMS0zLjQ4IDguNzAxLTguNzAxdi0xNy40MDFoMTcuNDAxYzUuMjIsMCA4LjcwMS'+
			'0zLjQ4IDguNzAxLTguNzAxIDAtNS4yMjEtMy40ODEtOC43MDEtOC43MDEtOC43MDF6Ii8+CiAgPC9nPgogPC9nPgo8L3N2Zz4K';
		me._zoom_in__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="zoom_in";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 155px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._zoom_in.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._zoom_in.onmouseout=function (e) {
			me.elementMouseDown['zoom_in']=false;
		}
		me._zoom_in.onmousedown=function (e) {
			me.elementMouseDown['zoom_in']=true;
		}
		me._zoom_in.onmouseup=function (e) {
			me.elementMouseDown['zoom_in']=false;
		}
		me._zoom_in.ontouchend=function (e) {
			me.elementMouseDown['zoom_in']=false;
		}
		me._zoom_in.ggUpdatePosition=function (useTransition) {
		}
		me._nav_buttons.appendChild(me._zoom_in);
		el=me._zoom_out=document.createElement('div');
		els=me._zoom_out__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0naXNvLTg4NTktMSc/Pgo8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmVyc2lvbj0iMS4xIiBoZWlnaHQ9IjUxMnB4IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmlld0JveD0iMCAwIDI0NC40ODcgMjQ0LjQ4NyIgd2lkdGg9IjUxMnB4IiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAyNDQuNDg3IDI0NC40ODciPgogPGc+CiAgPGc+CiAgIDxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Im0yNDEuODc3LDIzMC4xMzFsLTcyLjkyOS03Mi45MjljMTMuOTczLTE2LjY3IDIyLjQ2NS0zOC'+
			'4wMDQgMjIuNDY1LTYxLjA2MSAwLTUyLjIwNC00My41MDMtOTUuNzA3LTk1LjcwNy05NS43MDdzLTk1LjcwNiw0My41MDQtOTUuNzA2LDk1LjcwOCA0My41MDMsOTUuNzA3IDk1LjcwNyw5NS43MDdjMjIuNjIxLDAgNDMuNTczLTguMTc5IDYwLjEwNC0yMS42ODJsNzIuMTQ1LDcyLjE0NWMxLjc0LDEuNzQgMy40OCwxLjc0IDYuOTYsMS43NHM1LjIyLDAgNi45Ni0xLjc0YzMuNDgyLTMuNDggMy40ODItOC43IDAuMDAxLTEyLjE4MXptLTE0Ni4xNy01NS42ODNjLTQzLjUwMywwLTc4LjMwNS0zNC44MDItNzguMzA1LTc4LjMwNXMzNC44MDItNzguMzA1IDc4LjMwNS03OC4zMDUgNzguMzA1LDM0Ljgw'+
			'MiA3OC4zMDUsNzguMzA1LTM0LjgwMiw3OC4zMDUtNzguMzA1LDc4LjMwNXoiLz4KICAgPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0ibTEyMS44MDksODcuNDQyaC01Mi4yMDRjLTUuMjIsMC04LjcwMSwzLjQ4LTguNzAxLDguNzAxczMuNDgsOC43MDEgOC43MDEsOC43MDFoNTIuMjA0YzUuMjIsMCA4LjcwMS0zLjQ4IDguNzAxLTguNzAxIDAtNS4yMjEtMy40ODEtOC43MDEtOC43MDEtOC43MDF6Ii8+CiAgPC9nPgogPC9nPgo8L3N2Zz4K';
		me._zoom_out__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="zoom_out";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 190px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._zoom_out.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._zoom_out.onmouseout=function (e) {
			me.elementMouseDown['zoom_out']=false;
		}
		me._zoom_out.onmousedown=function (e) {
			me.elementMouseDown['zoom_out']=true;
		}
		me._zoom_out.onmouseup=function (e) {
			me.elementMouseDown['zoom_out']=false;
		}
		me._zoom_out.ontouchend=function (e) {
			me.elementMouseDown['zoom_out']=false;
		}
		me._zoom_out.ggUpdatePosition=function (useTransition) {
		}
		me._nav_buttons.appendChild(me._zoom_out);
		el=me._sound_off=document.createElement('div');
		els=me._sound_off__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0naXNvLTg4NTktMSc/Pgo8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmVyc2lvbj0iMS4xIiBoZWlnaHQ9IjUxMnB4IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmlld0JveD0iMCAwIDI2MS4wMTggMjYxLjAxOCIgd2lkdGg9IjUxMnB4IiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAyNjEuMDE4IDI2MS4wMTgiPgogPGc+CiAgPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0ibTI1OC40MDgsMjQ2LjY2MmwtNTIuMjA0LTUyLjIwNHYtMzYuNTQzaDguNzAxYzEzLjkyMSwwIDI2LjEwMi'+
			'0xMi4xODEgMjYuMTAyLTI2LjEwMnYtNS4yMmMwLTEzLjkyMS0xMi4xODEtMjYuMTAyLTI2LjEwMi0yNi4xMDJoLTguNzAxdi03MS4zNDRjMC0xMy45MjEtMTIuMTgxLTI2LjEwMi0yNi4xMDItMjYuMTAyLTUuMjIsMC0xMC40NDEsMS43NC0xNS42NjEsNS4yMmwtNzkuNTIzLDY0LjkwNy03MC4xMjctNzAuMTI3Yy0zLjQ4LTMuNDgtOC43MDEtMy40OC0xMi4xODEtMS43NzYzNmUtMTVzLTMuNDgsOC43MDEgMCwxMi4xODFsNjAuOTA0LDYwLjkwNGgtMzMuMDYyYy01LjIyLDAtOC43MDEsMy40OC04LjcwMSw4LjcwMXY5Mi4yMjZjMCw1LjIyIDMuNDgsOC43MDEgOC43MDEsOC43MDFoNTAuODQ2bDgz'+
			'LjE0Myw2Ny44NjVjMy40OCwzLjQ4IDEwLjQ0MSw1LjIyIDE1LjY2MSw1LjIyIDEzLjkyMSwwIDI2LjEwMi0xMi4xODEgMjYuMTAyLTI0LjM2MnYtMTUuNjYxbDQwLjAyMyw0MC4wMjNjMS43NCwxLjc0IDUuMjIsMS43NCA2Ljk2LDEuNzQgMS43NCwwIDUuMjIsMCA1LjIyLTEuNzQgMy40ODEtMy40OCAzLjQ4MS04LjcgMC4wMDEtMTIuMTgxem0tNDMuNTAzLTEyOC43NjhjNS4yMiwwIDguNzAxLDMuNDggOC43MDEsOC43MDF2NS4yMmMwLDUuMjItMy40OCw4LjcwMS04LjcwMSw4LjcwMWgtOC43MDF2LTIyLjYyMWg4LjcwMXptLTQxLjc2My05Ny40NDhjNS4yMi0zLjQ4IDEzLjkyMS0xLjc0IDEzLj'+
			'kyMSw2Ljk2djE0Ny45MWwtOTAuOTU2LTkwLjk1NiA3Ny4wMzUtNjMuOTE0em0tOTkuMTg3LDE0Ny45MWgtMzQuODAydi03NC44MjVoMzQuODAydjc0LjgyNXptMTEzLjEwOCw2NC4zODVjMCw4LjcwMS04LjcwMSwxMC40NDEtMTMuOTIxLDYuOTZsLTgxLjc4Ni02Ny44NjV2LTY3Ljg2NWw5NS43MDcsOTUuNzA3djMzLjA2M3oiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._sound_off__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="sound_off";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 280px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._sound_off.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._sound_off.onclick=function (e) {
				player.playSound("_main","0");
			me._sound_off.style[domTransition]='none';
			me._sound_off.style.visibility='hidden';
			me._sound_off.ggVisible=false;
		}
		me._sound_off.ggUpdatePosition=function (useTransition) {
		}
		me._nav_buttons.appendChild(me._sound_off);
		el=me._rotate=document.createElement('div');
		els=me._rotate__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0naXNvLTg4NTktMSc/Pgo8IURPQ1RZUEUgc3ZnIFBVQkxJQyAnLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4nICdodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQnPgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTYuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiIGhlaWdodD0iNTEycHgiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy'+
			'8xOTk5L3hsaW5rIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA2MTIgNjEyOyIgaWQ9IkNhcGFfMSIgdmlld0JveD0iMCAwIDYxMiA2MTIiIHdpZHRoPSI1MTJweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeT0iMHB4IiB4PSIwcHgiPgogPGc+CiAgPGcgaWQ9Il94MzJfXzMxXyI+CiAgIDxnPgogICAgPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTTQ1NC4wMjcsMzguMjVoMTM4Ljg0OGMxMC41NTcsMCwxOS4xMjUtOC41NjgsMTkuMTI1LTE5LjEyNVM2MDMuNDMyLDAsNTkyLjg3NSwwaC0xOTEuMjUgICAgIEMzOTkuMzExLDAsMzgyLjUsMCwzODIuNSwxOS4xMjV2MTkxLjI1YzAsMTAu'+
			'NTU3LDguNTY4LDE5LjEyNSwxOS4xMjUsMTkuMTI1czE5LjEyNS04LjU2OCwxOS4xMjUtMTkuMTI1VjY0LjI0MSAgICAgYzkwLjQyMyw0Mi45NTUsMTUzLDEzNC45ODQsMTUzLDI0MS43NTljMCwxNDcuODc1LTExOS44NzUsMjY3Ljc1LTI2Ny43NSwyNjcuNzVDMTU4LjEyNSw1NzMuNzUsMzguMjUsNDUzLjg3NSwzOC4yNSwzMDYgICAgIGMwLTEzNC44NTEsOTkuNzk0LTI0Ni4xMDEsMjI5LjUtMjY0LjcwOVYyLjYzOUMxMTYuODU0LDIxLjQ5NywwLDE0OS45NzksMCwzMDZjMCwxNjkuMDA4LDEzNi45OTIsMzA2LDMwNiwzMDYgICAgIHMzMDYtMTM2Ljk5MiwzMDYtMzA2QzYxMiwxOTAuNzE0LDU0OC'+
			'4xOTksOTAuNDIzLDQ1NC4wMjcsMzguMjV6Ii8+CiAgIDwvZz4KICA8L2c+CiA8L2c+CiA8Zy8+CiA8Zy8+CiA8Zy8+CiA8Zy8+CiA8Zy8+CiA8Zy8+CiA8Zy8+CiA8Zy8+CiA8Zy8+CiA8Zy8+CiA8Zy8+CiA8Zy8+CiA8Zy8+CiA8Zy8+CiA8Zy8+Cjwvc3ZnPgo=';
		me._rotate__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="rotate";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 225px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._rotate.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rotate.onclick=function (e) {
			player.toggleAutorotate();
		}
		me._rotate.ggUpdatePosition=function (useTransition) {
		}
		me._nav_buttons.appendChild(me._rotate);
		el=me._fullscreen_exit=document.createElement('div');
		els=me._fullscreen_exit__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0naXNvLTg4NTktMSc/Pgo8IURPQ1RZUEUgc3ZnIFBVQkxJQyAnLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4nICdodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQnPgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTYuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiIGhlaWdodD0iNTEycHgiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy'+
			'8xOTk5L3hsaW5rIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA2MTIgNjEyOyIgaWQ9IkNhcGFfMSIgdmlld0JveD0iMCAwIDYxMiA2MTIiIHdpZHRoPSI1MTJweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeT0iMHB4IiB4PSIwcHgiPgogPGc+CiAgPGcgaWQ9Il94MzZfIj4KICAgPGc+CiAgICA8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNMjQ4LjU0MiwzNDMuOTI5SDc4Ljg3OWMtMTAuNDUyLDAtMTguOTE3LDguNDI4LTE4LjkxNywxOC44NDJjMCwxMC4zOTUsOC40NjUsMTguODQsMTguOTE3LDE4Ljg0aDEyNS4zNTFMMCw1ODQuOTc5ICAgICBsMjYuNzUxLDI2LjYzOWwyMDQuMDE5'+
			'LTIwMy4xOGwtMC41OTIsMTIzLjgyMmMwLDEwLjM5NSw4LjQ2NSwxOC44NCwxOC45MTcsMTguODRjMTAuNDUyLDAsMTguOTE3LTguNDI2LDE4LjkxNy0xOC44NHYtMTY5LjUxICAgICBjMC01LjU4LTIuMzEyLTEwLjA5LTUuOTgxLTEzLjE4NkMyNTguNTczLDM0Ni4xMjYsMjUzLjgxNSwzNDMuOTI5LDI0OC41NDIsMzQzLjkyOXogTTUzMy4xNDEsMjMwLjM4OEg0MDcuNzlMNjEyLDI3LjAxOSAgICAgTDU4NS4yNDgsMC4zODJsLTIwNCwyMDMuMTc4bDAuNTkzLTEyMy44MjJjMC0xMC4zOTUtOC40NjUtMTguODQxLTE4LjkxNy0xOC44NDFzLTE4LjkxNyw4LjQyNy0xOC45MTcsMTguODQxdjE2OS41MS'+
			'AgICAgYzAsNS41OCwyLjMxMiwxMC4wODksNS45NjEsMTMuMTY2YzMuNDM5LDMuNDc4LDguMTc5LDUuNjc1LDEzLjQ3Miw1LjY3NWgxNjkuNjYyYzEwLjQ1MiwwLDE4LjkxOC04LjQyNywxOC45MTgtMTguODQxICAgICBDNTUyLjAzOCwyMzguODM0LDU0My41NzMsMjMwLjM4OCw1MzMuMTQxLDIzMC4zODh6Ii8+CiAgIDwvZz4KICA8L2c+CiA8L2c+CiA8Zy8+CiA8Zy8+CiA8Zy8+CiA8Zy8+CiA8Zy8+CiA8Zy8+CiA8Zy8+CiA8Zy8+CiA8Zy8+CiA8Zy8+CiA8Zy8+CiA8Zy8+CiA8Zy8+CiA8Zy8+CiA8Zy8+Cjwvc3ZnPgo=';
		me._fullscreen_exit__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="fullscreen_exit";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 265px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._fullscreen_exit.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._fullscreen_exit.onclick=function (e) {
			player.exitFullscreen();
			me._fullscreen_enter.style[domTransition]='none';
			me._fullscreen_enter.style.visibility=(Number(me._fullscreen_enter.style.opacity)>0||!me._fullscreen_enter.style.opacity)?'inherit':'hidden';
			me._fullscreen_enter.ggVisible=true;
			me._fullscreen_exit.style[domTransition]='none';
			me._fullscreen_exit.style.visibility='hidden';
			me._fullscreen_exit.ggVisible=false;
		}
		me._fullscreen_exit.ggUpdatePosition=function (useTransition) {
		}
		me._nav_buttons.appendChild(me._fullscreen_exit);
		el=me._fullscreen_enter=document.createElement('div');
		els=me._fullscreen_enter__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0naXNvLTg4NTktMSc/Pgo8IURPQ1RZUEUgc3ZnIFBVQkxJQyAnLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4nICdodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQnPgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTYuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiIGhlaWdodD0iNTEycHgiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy'+
			'8xOTk5L3hsaW5rIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA2MTIgNjEyOyIgaWQ9IkNhcGFfMSIgdmlld0JveD0iMCAwIDYxMiA2MTIiIHdpZHRoPSI1MTJweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeT0iMHB4IiB4PSIwcHgiPgogPGc+CiAgPGcgaWQ9Il94MzVfIj4KICAgPGc+CiAgICA8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNMjQzLjk1OCwzNDAuMTc3TDM3LjY1Nyw1NDYuNDk3TDM4LjI1LDQyMC43NWMwLTEwLjU1Ny04LjU2OC0xOS4xMjUtMTkuMTI1LTE5LjEyNVMwLDQxMC4xOTMsMCw0MjAuNzV2MTcyLjEyNSAgICAgYzAsNS42NjEsMi4zMzMsMTAuMjMyLDYuMDQz'+
			'LDEzLjM2OEM5LjUwNSw2MDkuNzgxLDE0LjMyNSw2MTIsMTkuNjgsNjEyaDE3MS41N2MxMC41NTcsMCwxOS4xMjUtOC41NjcsMTkuMTI1LTE5LjEyNSAgICAgYzAtMTAuNTU3LTguNTY4LTE5LjEyNS0xOS4xMjUtMTkuMTI1SDY0LjQ3bDIwNi41MzEtMjA2LjUxMkwyNDMuOTU4LDM0MC4xNzd6IE02MDUuOTU2LDUuNzU3QzYwMi40OTUsMi4yMTksNTk3LjY3NiwwLDU5Mi4zNCwwICAgICBINDIwLjc1Yy0xMC41NTcsMC0xOS4xMjUsOC41NjgtMTkuMTI1LDE5LjEyNWMwLDEwLjU1Nyw4LjU2OCwxOS4xMjUsMTkuMTI1LDE5LjEyNWgxMjYuNzYxTDM0MC45OTksMjQ0Ljc4MWwyNy4wNDIsMjcuMDQyIC'+
			'AgICBsMjA2LjMyMS0yMDYuMzJMNTczLjc1LDE5MS4yNWMwLDEwLjU1Nyw4LjU2OCwxOS4xMjUsMTkuMTI1LDE5LjEyNVM2MTIsMjAxLjgwNyw2MTIsMTkxLjI1VjE5LjEyNSAgICAgQzYxMiwxMy40NjQsNjA5LjY2Nyw4Ljg5NCw2MDUuOTU2LDUuNzU3eiIvPgogICA8L2c+CiAgPC9nPgogPC9nPgogPGcvPgogPGcvPgogPGcvPgogPGcvPgogPGcvPgogPGcvPgogPGcvPgogPGcvPgogPGcvPgogPGcvPgogPGcvPgogPGcvPgogPGcvPgogPGcvPgogPGcvPgo8L3N2Zz4K';
		me._fullscreen_enter__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="fullscreen_enter";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 265px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._fullscreen_enter.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._fullscreen_enter.onclick=function (e) {
			player.enterFullscreen();
			me._fullscreen_exit.style[domTransition]='none';
			me._fullscreen_exit.style.visibility=(Number(me._fullscreen_exit.style.opacity)>0||!me._fullscreen_exit.style.opacity)?'inherit':'hidden';
			me._fullscreen_exit.ggVisible=true;
			me._fullscreen_enter.style[domTransition]='none';
			me._fullscreen_enter.style.visibility='hidden';
			me._fullscreen_enter.ggVisible=false;
		}
		me._fullscreen_enter.ggUpdatePosition=function (useTransition) {
		}
		me._nav_buttons.appendChild(me._fullscreen_enter);
		el=me._home=document.createElement('div');
		els=me._home__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0naXNvLTg4NTktMSc/Pgo8IURPQ1RZUEUgc3ZnIFBVQkxJQyAnLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4nICdodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQnPgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTYuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiIGhlaWdodD0iNTEycHgiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy'+
			'8xOTk5L3hsaW5rIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA2MTIuMjUgNjEyLjI1OyIgaWQ9IkNhcGFfMSIgdmlld0JveD0iMCAwIDYxMi4yNSA2MTIuMjUiIHdpZHRoPSI1MTJweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeT0iMHB4IiB4PSIwcHgiPgogPGc+CiAgPGc+CiAgIDxwb2x5Z29uIHBvaW50cz0iMC4xMjUsMjM2LjcwNSAwLjEyNSwyNzguNDMyIDMwNi4xMjUsNDEuNzI3IDYxMi4xMjUsMjc4LjQzMiA2MTIuMTI1LDIzNi43MDUgMzA2LjEyNSwwICAgIiBmaWxsPSIjRkZGRkZGIi8+CiAgIDxwb2x5Z29uIHBvaW50cz0iNTU2LjQ4OCwxNjMuMTgxIDU1Ni40ODgsMTQu'+
			'MTU5IDQ3My4wMzQsMTQuMTU5IDQ3My4wMzQsOTcuNjE0IDUwMC44NTMsMTIxLjg3MSA1MDAuODUzLDQxLjk3OCA1MjguNjcxLDQxLjk3OCAgICAgNTI4LjY3MSwxMzkuMzQxICAgIiBmaWxsPSIjRkZGRkZGIi8+CiAgIDxwb2x5Z29uIHBvaW50cz0iNDE4LjIwNCw1ODQuNDMyIDQxOC4yMDQsNjEyLjI1IDU1Ni42ODQsNjEyLjI1IDU1Ni42ODQsMjc0Ljg0MyA1MjguODY1LDI1Mi42MTcgNTI4Ljg2NSw1ODQuNDMyICAgIiBmaWxsPSIjRkZGRkZGIi8+CiAgIDxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik0yMjIuNjcsNjEyaDE2Ni45MDlWMzMzLjgxOEgyMjIuNjdWNjEyeiBNMjUwLjQ4OSwzNjEuNj'+
			'M2aDExMS4yNzN2MjIyLjU0NkgyNTAuNDg5VjM2MS42MzZ6Ii8+CiAgIDxwb2x5Z29uIHBvaW50cz0iNTUuNzYxLDI3NS45IDU1Ljc2MSw2MTIuMjUgMTk0LjI5Niw2MTIuMjUgMTk0LjI5Niw1ODQuNDMyIDgzLjU4LDU4NC40MzIgODMuNTgsMjUzLjM2OCAgICIgZmlsbD0iI0ZGRkZGRiIvPgogIDwvZz4KIDwvZz4KIDxnLz4KIDxnLz4KIDxnLz4KIDxnLz4KIDxnLz4KIDxnLz4KIDxnLz4KIDxnLz4KIDxnLz4KIDxnLz4KIDxnLz4KIDxnLz4KIDxnLz4KIDxnLz4KIDxnLz4KPC9zdmc+Cg==';
		me._home__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="home";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 306px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._home.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._home.onclick=function (e) {
			player.moveToDefaultViewEx(0,0);
		}
		me._home.ggUpdatePosition=function (useTransition) {
		}
		me._nav_buttons.appendChild(me._home);
		me.divSkin.appendChild(me._nav_buttons);
		el=me._dropdown_menu0=document.createElement('div');
		el.ggId="Dropdown Menu";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 142px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 190px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._dropdown_menu0.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._dropdown_menu0.ggUpdatePosition=function (useTransition) {
		}
		el=me._dropdown_background0=document.createElement('div');
		el.ggId="Dropdown Background";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(190,190,190,0.784314);';
		hs+='border : 0px solid #ffffff;';
		hs+='cursor : default;';
		hs+='height : 119px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 23px;';
		hs+='visibility : hidden;';
		hs+='width : 190px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._dropdown_background0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._dropdown_background0.ggUpdatePosition=function (useTransition) {
		}
		el=me._dropdown_scrollarea0=document.createElement('div');
		els=me._dropdown_scrollarea0__content=document.createElement('div');
		els.className='ggskin ggskin_subelement ggskin_scrollarea';
		el.ggContent=els;
		el.appendChild(els);
		el.ggHorScrollVisible = false;
		el.ggVertScrollVisible = false;
		el.ggContentLeftOffset = 0;
		el.ggContentTopOffset = 0;
		el.ggDragInertiaX = 0;
		el.ggDragInertiaY = 0;
		el.ggVPercentVisible = 1.0;
		el.ggHPercentVisible = 1.0;
		hs ='';
		hs+='height : 23px;';
		hs+='left : 0px;';
		hs+='overflow : visible;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='width : 183px;';
		hs+="";
		els.setAttribute('style',hs);
		me._dropdown_scrollarea0.ggScrollByX = function(diffX) {
			if(!me._dropdown_scrollarea0.ggHorScrollVisible || diffX == 0 || me._dropdown_scrollarea0.ggHPercentVisible >= 1.0) return;
			me._dropdown_scrollarea0.ggScrollPosX = (me._dropdown_scrollarea0__horScrollFg.offsetLeft + diffX);
			me._dropdown_scrollarea0.ggScrollPosX = Math.max(me._dropdown_scrollarea0.ggScrollPosX, 0);
			me._dropdown_scrollarea0.ggScrollPosX = Math.min(me._dropdown_scrollarea0.ggScrollPosX, me._dropdown_scrollarea0__horScrollBg.offsetWidth - me._dropdown_scrollarea0__horScrollFg.offsetWidth);
			me._dropdown_scrollarea0__horScrollFg.style.left = me._dropdown_scrollarea0.ggScrollPosX + 'px';
			me._dropdown_scrollarea0__content.style.left = -(Math.round(me._dropdown_scrollarea0.ggScrollPosX / me._dropdown_scrollarea0.ggHPercentVisible)) + me._dropdown_scrollarea0.ggContentLeftOffset + 'px';
			me._dropdown_scrollarea0.ggScrollPosXPercent = (me._dropdown_scrollarea0__horScrollFg.offsetLeft / me._dropdown_scrollarea0__horScrollBg.offsetWidth);
		}
		me._dropdown_scrollarea0.ggScrollByXSmooth = function(diffX) {
			if(!me._dropdown_scrollarea0.ggHorScrollVisible || diffX == 0 || me._dropdown_scrollarea0.ggHPercentVisible >= 1.0) return;
			var scrollPerInterval = diffX / 25;
			var scrollCurrX = 0;
			var id = setInterval(function() {
				scrollCurrX += scrollPerInterval;
				me._dropdown_scrollarea0.ggScrollPosX += scrollPerInterval;
				if (diffX > 0 && (scrollCurrX >= diffX || me._dropdown_scrollarea0.ggScrollPosX >= me._dropdown_scrollarea0__horScrollBg.offsetWidth - me._dropdown_scrollarea0__horScrollFg.offsetWidth)) {
					me._dropdown_scrollarea0.ggScrollPosX = Math.min(me._dropdown_scrollarea0.ggScrollPosX, me._dropdown_scrollarea0__horScrollBg.offsetWidth - me._dropdown_scrollarea0__horScrollFg.offsetWidth);
					clearInterval(id);
				}
				if (diffX < 0 && (scrollCurrX <= diffX || me._dropdown_scrollarea0.ggScrollPosX <= 0)) {
					me._dropdown_scrollarea0.ggScrollPosX = Math.max(me._dropdown_scrollarea0.ggScrollPosX, 0);
					clearInterval(id);
				}
			me._dropdown_scrollarea0__horScrollFg.style.left = me._dropdown_scrollarea0.ggScrollPosX + 'px';
			me._dropdown_scrollarea0__content.style.left = -(Math.round(me._dropdown_scrollarea0.ggScrollPosX / me._dropdown_scrollarea0.ggHPercentVisible)) + me._dropdown_scrollarea0.ggContentLeftOffset + 'px';
			me._dropdown_scrollarea0.ggScrollPosXPercent = (me._dropdown_scrollarea0__horScrollFg.offsetLeft / me._dropdown_scrollarea0__horScrollBg.offsetWidth);
			}, 10);
		}
		me._dropdown_scrollarea0.ggScrollByY = function(diffY) {
			if(!me._dropdown_scrollarea0.ggVertScrollVisible || diffY == 0 || me._dropdown_scrollarea0.ggVPercentVisible >= 1.0) return;
			me._dropdown_scrollarea0.ggScrollPosY = (me._dropdown_scrollarea0__vertScrollFg.offsetTop + diffY);
			me._dropdown_scrollarea0.ggScrollPosY = Math.max(me._dropdown_scrollarea0.ggScrollPosY, 0);
			me._dropdown_scrollarea0.ggScrollPosY = Math.min(me._dropdown_scrollarea0.ggScrollPosY, me._dropdown_scrollarea0__vertScrollBg.offsetHeight - me._dropdown_scrollarea0__vertScrollFg.offsetHeight);
			me._dropdown_scrollarea0__vertScrollFg.style.top = me._dropdown_scrollarea0.ggScrollPosY + 'px';
			me._dropdown_scrollarea0__content.style.top = -(Math.round(me._dropdown_scrollarea0.ggScrollPosY / me._dropdown_scrollarea0.ggVPercentVisible)) + me._dropdown_scrollarea0.ggContentTopOffset + 'px';
			me._dropdown_scrollarea0.ggScrollPosYPercent = (me._dropdown_scrollarea0__vertScrollFg.offsetTop / me._dropdown_scrollarea0__vertScrollBg.offsetHeight);
		}
		me._dropdown_scrollarea0.ggScrollByYSmooth = function(diffY) {
			if(!me._dropdown_scrollarea0.ggVertScrollVisible || diffY == 0 || me._dropdown_scrollarea0.ggVPercentVisible >= 1.0) return;
			var scrollPerInterval = diffY / 25;
			var scrollCurrY = 0;
			var id = setInterval(function() {
				scrollCurrY += scrollPerInterval;
				me._dropdown_scrollarea0.ggScrollPosY += scrollPerInterval;
				if (diffY > 0 && (scrollCurrY >= diffY || me._dropdown_scrollarea0.ggScrollPosY >= me._dropdown_scrollarea0__vertScrollBg.offsetHeight - me._dropdown_scrollarea0__vertScrollFg.offsetHeight)) {
					me._dropdown_scrollarea0.ggScrollPosY = Math.min(me._dropdown_scrollarea0.ggScrollPosY, me._dropdown_scrollarea0__vertScrollBg.offsetHeight - me._dropdown_scrollarea0__vertScrollFg.offsetHeight);
					clearInterval(id);
				}
				if (diffY < 0 && (scrollCurrY <= diffY || me._dropdown_scrollarea0.ggScrollPosY <= 0)) {
					me._dropdown_scrollarea0.ggScrollPosY = Math.max(me._dropdown_scrollarea0.ggScrollPosY, 0);
					clearInterval(id);
				}
			me._dropdown_scrollarea0__vertScrollFg.style.top = me._dropdown_scrollarea0.ggScrollPosY + 'px';
			me._dropdown_scrollarea0__content.style.top = -(Math.round(me._dropdown_scrollarea0.ggScrollPosY / me._dropdown_scrollarea0.ggVPercentVisible)) + me._dropdown_scrollarea0.ggContentTopOffset + 'px';
			me._dropdown_scrollarea0.ggScrollPosYPercent = (me._dropdown_scrollarea0__vertScrollFg.offsetTop / me._dropdown_scrollarea0__vertScrollBg.offsetHeight);
			}, 10);
		}
		me._dropdown_scrollarea0.ggScrollIntoView = function(posX, posY, width, height) {
			if (me._dropdown_scrollarea0.ggHorScrollVisible) {
				if (posX < 0) {
					var diffX = Math.floor(posX * me._dropdown_scrollarea0.ggHPercentVisible);
					me._dropdown_scrollarea0.ggScrollByXSmooth(diffX);
				} else if (posX + width > me._dropdown_scrollarea0.offsetWidth - (me._dropdown_scrollarea0.ggVertScrollVisible ? 15 : 0)) {
					var diffX = Math.ceil(((posX + width) - (me._dropdown_scrollarea0.offsetWidth - (me._dropdown_scrollarea0.ggVertScrollVisible ? 15 : 0))) * me._dropdown_scrollarea0.ggHPercentVisible);
					me._dropdown_scrollarea0.ggScrollByXSmooth(diffX);
				}
			}
			if (me._dropdown_scrollarea0.ggVertScrollVisible) {
				if (posY < 0) {
					var diffY = Math.floor(posY * me._dropdown_scrollarea0.ggVPercentVisible);
					me._dropdown_scrollarea0.ggScrollByYSmooth(diffY);
				} else if (posY + height > me._dropdown_scrollarea0.offsetHeight - (me._dropdown_scrollarea0.ggHorScrollVisible ? 15 : 0)) {
					var diffY = Math.ceil(((posY + height) - (me._dropdown_scrollarea0.offsetHeight - (me._dropdown_scrollarea0.ggHorScrollVisible ? 15 : 0))) * me._dropdown_scrollarea0.ggVPercentVisible);
					me._dropdown_scrollarea0.ggScrollByYSmooth(diffY);
				}
			}
		}
		els.ontouchstart = function(e) {
			e = e || window.event;
			var t = e.touches;
			me._dropdown_scrollarea0.ggDragLastX = t ? t[0].clientX : e.clientX;
			me._dropdown_scrollarea0.ggDragLastY = t ? t[0].clientY : e.clientY;
			me._dropdown_scrollarea0__content.ontouchend = function() {
				let inertiaInterval = setInterval(function() {
					me._dropdown_scrollarea0.ggDragInertiaX *= 0.65;
					me._dropdown_scrollarea0.ggDragInertiaY *= 0.65;
					me._dropdown_scrollarea0.ggScrollByX(me._dropdown_scrollarea0.ggDragInertiaX);
					me._dropdown_scrollarea0.ggScrollByY(me._dropdown_scrollarea0.ggDragInertiaY);
					if (Math.abs(me._dropdown_scrollarea0.ggDragInertiaX) < 1.0 && Math.abs(me._dropdown_scrollarea0.ggDragInertiaY) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 50);
				me._dropdown_scrollarea0__content.ontouchend = null;
				me._dropdown_scrollarea0__content.ontouchmove = null;
				me._dropdown_scrollarea0__content.onpointerup = null;
				me._dropdown_scrollarea0__content.onpointermove = null;
			}
		if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
			me._dropdown_scrollarea0__content.onpointerup = me._dropdown_scrollarea0__content.ontouchend;
		}
			me._dropdown_scrollarea0__content.ontouchmove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var t = e.touches;
				var diffX = ((t ? t[0].clientX : e.clientX) - me._dropdown_scrollarea0.ggDragLastX) * me._dropdown_scrollarea0.ggHPercentVisible;
				var diffY = ((t ? t[0].clientY : e.clientY) - me._dropdown_scrollarea0.ggDragLastY) * me._dropdown_scrollarea0.ggVPercentVisible;
				me._dropdown_scrollarea0.ggDragInertiaX = -diffX;
				me._dropdown_scrollarea0.ggDragInertiaY = -diffY;
				me._dropdown_scrollarea0.ggDragLastX = t ? t[0].clientX : e.clientX;
				me._dropdown_scrollarea0.ggDragLastY = t ? t[0].clientY : e.clientY;
				me._dropdown_scrollarea0.ggScrollByX(-diffX);
				me._dropdown_scrollarea0.ggScrollByY(-diffY);
			}
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				me._dropdown_scrollarea0__content.onpointermove = me._dropdown_scrollarea0__content.ontouchmove;
			}
		}
		if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
			els.onpointerdown = els.ontouchstart;
		}
		elVertScrollBg = me._dropdown_scrollarea0__vertScrollBg = document.createElement('div');
		el.appendChild(elVertScrollBg);
		elVertScrollBg.setAttribute('style', 'position: absolute; right: 0px; top: 0px; visibility: hidden; width: 15px; height: 115px; background-color: rgba(128,128,128,0); pointer-events: auto;');
		elVertScrollBg.className='ggskin ggskin_scrollarea_vscrollbg';
		elVertScrollFg = me._dropdown_scrollarea0__vertScrollFg = document.createElement('div');
		elVertScrollBg.appendChild(elVertScrollFg);
		elVertScrollFg.setAttribute('style', 'position: absolute; left: 0px; top: 0px; visibility: hidden; width: 15px; height: 115px; background-color: rgba(255,255,255,1); pointer-events: auto;');
		elVertScrollFg.className='ggskin ggskin_scrollarea_vscrollfg';
		me._dropdown_scrollarea0.ggScrollPosY = 0;
		me._dropdown_scrollarea0.ggScrollPosYPercent = 0.0;
		elVertScrollFg.onmousedown = function(e) {
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) return;
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			me._dropdown_scrollarea0.ggDragLastY = e.clientY;
			document.onmouseup = function() {
				let inertiaInterval = setInterval(function() {
					me._dropdown_scrollarea0.ggDragInertiaY *= 0.65;
					me._dropdown_scrollarea0.ggScrollByY(me._dropdown_scrollarea0.ggDragInertiaY);
					if (Math.abs(me._dropdown_scrollarea0.ggDragInertiaY) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 50);
				document.onmouseup = null;
				document.onmousemove = null;
			}
			document.onmousemove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var diffY = e.clientY - me._dropdown_scrollarea0.ggDragLastY;
				me._dropdown_scrollarea0.ggDragInertiaY = diffY;
				me._dropdown_scrollarea0.ggDragLastY = e.clientY;
				me._dropdown_scrollarea0.ggScrollByY(diffY);
			}
		}
		elVertScrollFg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			me._dropdown_scrollarea0.ggDragLastY = t ? t[0].clientY : e.clientY;
			document.ontouchend = function() {
				let inertiaInterval = setInterval(function() {
					me._dropdown_scrollarea0.ggDragInertiaY *= 0.65;
					me._dropdown_scrollarea0.ggScrollByY(me._dropdown_scrollarea0.ggDragInertiaY);
					if (Math.abs(me._dropdown_scrollarea0.ggDragInertiaY) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 50);
				document.ontouchend = null;
				document.ontouchmove = null;
				document.onpointerup = null;
				document.onpointermove = null;
			}
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				document.onpointerup = document.ontouchend;
			}
			document.ontouchmove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var t = e.touches;
				var diffY = (t ? t[0].clientY : e.clientY) - me._dropdown_scrollarea0.ggDragLastY;
				me._dropdown_scrollarea0.ggDragInertiaY = diffY;
				me._dropdown_scrollarea0.ggDragLastY = t ? t[0].clientY : e.clientY;
				me._dropdown_scrollarea0.ggScrollByY(diffY);
			}
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				document.onpointermove = document.ontouchmove;
			}
		}
		if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
			elVertScrollFg.onpointerdown = elVertScrollFg.ontouchstart;
		}
		elVertScrollBg.onmousedown = function(e) {
			e = e || window.event;
			e.preventDefault();
			var diffY = me._dropdown_scrollarea0.ggScrollHeight;
			if (e.offsetY < me._dropdown_scrollarea0.ggScrollPosY) {
				diffY = diffY * -1;
			}
			me._dropdown_scrollarea0.ggScrollByYSmooth(diffY);
		}
		elVertScrollBg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			var rect = me._dropdown_scrollarea0__vertScrollBg.getBoundingClientRect();
			var diffY = me._dropdown_scrollarea0.ggScrollHeight;
			if ((t[0].clientY - rect.top) < me._dropdown_scrollarea0.ggScrollPosY) {
				diffY = diffY * -1;
			}
			me._dropdown_scrollarea0.ggScrollByYSmooth(diffY);
		}
		el.addEventListener('wheel', function(e) {
			e.preventDefault();
			var wheelDelta = Math.sign(e.deltaY);
			me._dropdown_scrollarea0.ggScrollByYSmooth(20 * wheelDelta);
		});
		elCornerBg = me._dropdown_scrollarea0__cornerBg = document.createElement('div');
		el.appendChild(elCornerBg);
		elCornerBg.setAttribute('style', 'position: absolute; right: 0px; bottom: 0px; visibility: hidden; width: 15px; height: 15px; background-color: rgba(255,255,255,1);');
		elCornerBg.className='ggskin ggskin_scrollarea_scrollcorner';
		el.ggId="Dropdown Scrollarea";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_scrollarea ";
		el.ggType='scrollarea';
		hs ='';
		hs+='border : 1px solid rgba(0, 0, 0, 0);';
		hs+='cursor : pointer;';
		hs+='height : 115px;';
		hs+='left : 0px;';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 187px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._dropdown_scrollarea0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._dropdown_scrollarea0.ggUpdatePosition=function (useTransition) {
			{
				var horScrollWasVisible = this.ggHorScrollVisible;
				var vertScrollWasVisible = this.ggVertScrollVisible;
				this.ggContent.style.left = '0px';
				this.ggContent.style.top = '0px';
				this.ggContentLeftOffset = 0;
				this.ggContentTopOffset = 0;
				var offsetWidthWithScale = this.getBoundingClientRect().width;
				var offsetHeightWithScale = this.getBoundingClientRect().height;
				var domRectContent = this.ggContent.getBoundingClientRect();
				var minX = 0;
				var minY = 0;
				var maxX = 0;
				var maxY = 0;
				var stack=[];
				stack.push(this.ggContent);
				while(stack.length>0) {
					var e=stack.pop();
					if (e!=this.ggContent && e.getBoundingClientRect && e.style['display']!='none') {
						var domRectChild = e.getBoundingClientRect();
						var diffX = domRectChild.left - domRectContent.left;
						minX = Math.min(minX, diffX);
						maxX = Math.max(maxX, diffX + domRectChild.width);
						var diffY = domRectChild.top - domRectContent.top;
						minY = Math.min(minY, diffY);
						maxY = Math.max(maxY, diffY + domRectChild.height);
					}
					if (e.hasChildNodes() && e.style['display']!='none') {
						for(var i=0;i<e.childNodes.length;i++) {
							stack.push(e.childNodes[i]);
						}
					}
				}
				if (minX < 0) this.ggContentLeftOffset = -minX;
				if (minY < 0) this.ggContentTopOffset = -minY;
				var contentWidth = maxX - minX;
				var contentHeight = maxY - minY;
				this.ggContent.style.left = this.ggContentLeftOffset + 'px';
				this.ggContent.style.top = this.ggContentTopOffset + 'px';
				this.ggContent.style.width = contentWidth + 'px';
				this.ggContent.style.height = contentHeight + 'px';
				this.ggContent.style.left = this.ggContentLeftOffset + 'px';
				this.ggContent.style.marginLeft = '0px';
				this.ggContent.style.top = -(Math.round(me._dropdown_scrollarea0.ggScrollPosY / me._dropdown_scrollarea0.ggVPercentVisible)) + this.ggContentTopOffset + 'px';
				this.ggContent.style.marginTop = '0px';
				if ((me._dropdown_scrollarea0.ggHorScrollVisible && contentHeight > this.offsetHeight - 15) || (!me._dropdown_scrollarea0.ggHorScrollVisible && contentHeight > this.offsetHeight)) {
					me._dropdown_scrollarea0__vertScrollBg.style.visibility = 'inherit';
					me._dropdown_scrollarea0__vertScrollFg.style.visibility = 'inherit';
					me._dropdown_scrollarea0.ggVertScrollVisible = true;
				} else {
					me._dropdown_scrollarea0__vertScrollBg.style.visibility = 'hidden';
					me._dropdown_scrollarea0__vertScrollFg.style.visibility = 'hidden';
					me._dropdown_scrollarea0.ggVertScrollVisible = false;
				}
				if(me._dropdown_scrollarea0.ggVertScrollVisible) {
					me._dropdown_scrollarea0.ggAvailableWidth = me._dropdown_scrollarea0.offsetWidth - 15;
					if (me._dropdown_scrollarea0.ggHorScrollVisible) {
						me._dropdown_scrollarea0.ggAvailableHeight = me._dropdown_scrollarea0.offsetHeight - 15;
						me._dropdown_scrollarea0.ggAvailableHeightWithScale = me._dropdown_scrollarea0.getBoundingClientRect().height - me._dropdown_scrollarea0__vertScrollBg.getBoundingClientRect().width;
						me._dropdown_scrollarea0__cornerBg.style.visibility = 'inherit';
					} else {
						me._dropdown_scrollarea0.ggAvailableHeight = me._dropdown_scrollarea0.offsetHeight;
						me._dropdown_scrollarea0.ggAvailableHeightWithScale = me._dropdown_scrollarea0.getBoundingClientRect().height;
						me._dropdown_scrollarea0__cornerBg.style.visibility = 'hidden';
					}
					me._dropdown_scrollarea0__vertScrollBg.style.height = me._dropdown_scrollarea0.ggAvailableHeight + 'px';
					me._dropdown_scrollarea0.ggVPercentVisible = contentHeight != 0 ? me._dropdown_scrollarea0.ggAvailableHeightWithScale / contentHeight : 0.0;
					if (me._dropdown_scrollarea0.ggVPercentVisible > 1.0) me._dropdown_scrollarea0.ggVPercentVisible = 1.0;
					me._dropdown_scrollarea0.ggScrollHeight =  Math.round(me._dropdown_scrollarea0__vertScrollBg.offsetHeight * me._dropdown_scrollarea0.ggVPercentVisible);
					me._dropdown_scrollarea0__vertScrollFg.style.height = me._dropdown_scrollarea0.ggScrollHeight + 'px';
					me._dropdown_scrollarea0.ggScrollPosY = me._dropdown_scrollarea0.ggScrollPosYPercent * me._dropdown_scrollarea0.ggAvailableHeight;
					me._dropdown_scrollarea0.ggScrollPosY = Math.min(me._dropdown_scrollarea0.ggScrollPosY, me._dropdown_scrollarea0__vertScrollBg.offsetHeight - me._dropdown_scrollarea0__vertScrollFg.offsetHeight);
					me._dropdown_scrollarea0__vertScrollFg.style.top = me._dropdown_scrollarea0.ggScrollPosY + 'px';
					if (me._dropdown_scrollarea0.ggVPercentVisible < 1.0) {
						me._dropdown_scrollarea0__content.style.top = -(Math.round(me._dropdown_scrollarea0.ggScrollPosY / me._dropdown_scrollarea0.ggVPercentVisible)) + this.ggContentTopOffset + 'px';
					}
				} else {
					me._dropdown_scrollarea0.ggAvailableWidth = me._dropdown_scrollarea0.offsetWidth;
					me._dropdown_scrollarea0.ggScrollPosY = 0;
					me._dropdown_scrollarea0.ggScrollPosYPercent = 0.0;
					me._dropdown_scrollarea0__content.style.top = this.ggContentTopOffset + 'px';
					me._dropdown_scrollarea0__cornerBg.style.visibility = 'hidden';
				}
				if(horScrollWasVisible != me._dropdown_scrollarea0.ggHorScrollVisible || vertScrollWasVisible != me._dropdown_scrollarea0.ggVertScrollVisible) {
					me.updateSize(me._dropdown_scrollarea0);
					me._dropdown_scrollarea0.ggUpdatePosition();
				}
			}
		}
		el=me._dropdown_cloner0=document.createElement('div');
		el.ggNumRepeat = 1;
		el.ggNumRows = 0;
		el.ggNumCols = 0;
		el.ggWidth = 184;
		el.ggHeight = 23;
		el.ggUpdating = false;
		el.ggFilter = [];
		el.ggInstances = [];
		me._dropdown_cloner0.callChildLogicBlocks_mouseover = function(){
			if(me._dropdown_cloner0.ggInstances) {
				var i;
				for(i = 0; i < me._dropdown_cloner0.ggInstances.length; i++) {
					if (me._dropdown_cloner0.ggInstances[i]._dropdown_menu_text0 && me._dropdown_cloner0.ggInstances[i]._dropdown_menu_text0.logicBlock_backgroundcolor) {
						me._dropdown_cloner0.ggInstances[i]._dropdown_menu_text0.logicBlock_backgroundcolor();
					}
				}
			}
		}
		me._dropdown_cloner0.callChildLogicBlocks_active = function(){
			if(me._dropdown_cloner0.ggInstances) {
				var i;
				for(i = 0; i < me._dropdown_cloner0.ggInstances.length; i++) {
					if (me._dropdown_cloner0.ggInstances[i]._dropdown_menu_text0 && me._dropdown_cloner0.ggInstances[i]._dropdown_menu_text0.logicBlock_backgroundcolor) {
						me._dropdown_cloner0.ggInstances[i]._dropdown_menu_text0.logicBlock_backgroundcolor();
					}
				}
			}
		}
		el.ggUpdate = function(filter) {
			if(me._dropdown_cloner0.ggUpdating == true) return;
			me._dropdown_cloner0.ggUpdating = true;
			var el=me._dropdown_cloner0;
			var curNumCols = 0;
			curNumCols = me._dropdown_cloner0.ggNumRepeat;
			if (curNumCols < 1) curNumCols = 1;
			if (typeof filter=='object') {
				el.ggFilter = filter;
			} else {
				filter = el.ggFilter;
			};
			if (me.ggTag) filter.push(me.ggTag);
			filter=filter.sort();
			if ((el.ggNumCols == curNumCols) && (el.ggInstances.length > 0) && (filter.length === el.ggCurrentFilter.length) && (filter.every(function(value, index) { return value === el.ggCurrentFilter[index] }) )) {
				me._dropdown_cloner0.ggUpdating = false;
				return;
			} else {
				el.ggNumRows = 1;
				el.ggNumCols = curNumCols;
			}
			el.ggCurrentFilter = filter;
			el.ggInstances = [];
			if (el.hasChildNodes() == true) {
				while (el.firstChild) {
					el.removeChild(el.firstChild);
				}
			}
			var tourNodes = player.getNodeIds();
			var row = 0;
			var column = 0;
			var currentIndex = 0;
			for (var i=0; i < tourNodes.length; i++) {
				var nodeId = tourNodes[i];
				var passed = true;
				var nodeData = player.getNodeUserdata(nodeId);
				if (filter.length > 0) {
					for (var j=0; j < filter.length; j++) {
						if (nodeData['tags'].indexOf(filter[j]) == -1) passed = false;
					}
				}
				if (passed) {
				var parameter={};
				parameter.top=(row * me._dropdown_cloner0.ggHeight) + 'px';
				parameter.left=(column * me._dropdown_cloner0.ggWidth) + 'px';
				parameter.width=me._dropdown_cloner0.ggWidth + 'px';
				parameter.height=me._dropdown_cloner0.ggHeight + 'px';
				parameter.index=currentIndex;
				parameter.title=nodeData['title'];
				var inst = new SkinCloner_dropdown_cloner0_Class(nodeId, me, el, parameter);
				currentIndex++;
				el.ggInstances.push(inst);
				el.appendChild(inst.__div);
				inst.__div.ggObj=inst;
				skin.updateSize(inst.__div);
				column++;
				if (column >= el.ggNumCols) {
					column = 0;
					row++;
					el.ggNumRows++;
				}
				}
			}
			me._dropdown_cloner0.callChildLogicBlocks_mouseover();
			me._dropdown_cloner0.callChildLogicBlocks_active();
			me._dropdown_cloner0.ggUpdating = false;
			player.triggerEvent('clonerchanged');
			if (me._dropdown_cloner0.parentNode.classList.contains('ggskin_subelement') && me._dropdown_cloner0.parentNode.parentNode.classList.contains('ggskin_scrollarea')) me._dropdown_cloner0.parentNode.parentNode.ggUpdatePosition();
		}
		el.ggFilter = [];
		el.ggId="Dropdown Cloner";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_cloner ";
		el.ggType='cloner';
		hs ='';
		hs+='height : 23px;';
		hs+='left : 0px;';
		hs+='overflow : visible;';
		hs+='position : absolute;';
		hs+='top : 1px;';
		hs+='visibility : inherit;';
		hs+='width : 184px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._dropdown_cloner0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._dropdown_cloner0.ggUpdateConditionNodeChange=function () {
			var cnode=player.getCurrentNode();
			for(var i=0; i<me._dropdown_cloner0.childNodes.length; i++) {
				var child=me._dropdown_cloner0.childNodes[i];
				if (child.ggObj && child.ggObj.ggNodeId==cnode) {
			        var childOffX = child.offsetLeft;
			        var childOffY = child.offsetTop;
					var p = child.parentElement;
			        while (p != null && p!==this.divSkin) {
						if (p.ggType && p.ggType == 'scrollarea') {
							p.ggScrollIntoView(childOffX, childOffY, child.clientWidth, child.clientHeight);
						}
						childOffX += p.offsetLeft;
						childOffY += p.offsetTop;
						p = p.parentElement;
					}
				}
			}
		}
		me._dropdown_cloner0.ggUpdatePosition=function (useTransition) {
				me._dropdown_cloner0.ggUpdate();
		}
		me._dropdown_cloner0.ggNodeChange=function () {
			me._dropdown_cloner0.ggUpdateConditionNodeChange();
		}
		me._dropdown_scrollarea0__content.appendChild(me._dropdown_cloner0);
		me._dropdown_background0.appendChild(me._dropdown_scrollarea0);
		me._dropdown_menu0.appendChild(me._dropdown_background0);
		el=me._dropdown_menu_title_background0=document.createElement('div');
		el.ggId="Dropdown Menu Title Background";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #bebebe;';
		hs+='border : 0px solid #ffffff;';
		hs+='cursor : pointer;';
		hs+='height : 20px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 190px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._dropdown_menu_title_background0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._dropdown_menu_title_background0.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((me.elementMouseOver['dropdown_menu_title_background0'] == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._dropdown_menu_title_background0.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._dropdown_menu_title_background0.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._dropdown_menu_title_background0.style[domTransition]='background-color 0s';
				if (me._dropdown_menu_title_background0.ggCurrentLogicStateBackgroundColor == 0) {
					me._dropdown_menu_title_background0.style.backgroundColor="rgba(239,239,239,1)";
				}
				else {
					me._dropdown_menu_title_background0.style.backgroundColor="rgba(190,190,190,1)";
				}
			}
		}
		me._dropdown_menu_title_background0.onclick=function (e) {
			me._dropdown_background0.ggVisible = !me._dropdown_background0.ggVisible;
			var flag=me._dropdown_background0.ggVisible;
			me._dropdown_background0.style[domTransition]='none';
			me._dropdown_background0.style.visibility=((flag)&&(Number(me._dropdown_background0.style.opacity)>0||!me._dropdown_background0.style.opacity))?'inherit':'hidden';
			me._dropdown_open0.ggVisible = !me._dropdown_open0.ggVisible;
			var flag=me._dropdown_open0.ggVisible;
			me._dropdown_open0.style[domTransition]='none';
			me._dropdown_open0.style.visibility=((flag)&&(Number(me._dropdown_open0.style.opacity)>0||!me._dropdown_open0.style.opacity))?'inherit':'hidden';
			me._dropdown_close0.ggVisible = !me._dropdown_close0.ggVisible;
			var flag=me._dropdown_close0.ggVisible;
			me._dropdown_close0.style[domTransition]='none';
			me._dropdown_close0.style.visibility=((flag)&&(Number(me._dropdown_close0.style.opacity)>0||!me._dropdown_close0.style.opacity))?'inherit':'hidden';
		}
		me._dropdown_menu_title_background0.onmouseover=function (e) {
			me.elementMouseOver['dropdown_menu_title_background0']=true;
			me._dropdown_menu_title_background0.logicBlock_backgroundcolor();
		}
		me._dropdown_menu_title_background0.onmouseout=function (e) {
			me.elementMouseOver['dropdown_menu_title_background0']=false;
			me._dropdown_menu_title_background0.logicBlock_backgroundcolor();
		}
		me._dropdown_menu_title_background0.ontouchend=function (e) {
			me.elementMouseOver['dropdown_menu_title_background0']=false;
			me._dropdown_menu_title_background0.logicBlock_backgroundcolor();
		}
		me._dropdown_menu_title_background0.ggUpdatePosition=function (useTransition) {
		}
		el=me._dropdown_menu_title0=document.createElement('div');
		els=me._dropdown_menu_title0__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Dropdown Menu Title";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 20px;';
		hs+='left : 2px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 166px;';
		hs+='pointer-events:none;';
		hs+='font-weight: bold;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 166px;';
		hs+='height: 20px;';
		hs+='pointer-events: none;';
		hs+='background: #bebebe;';
		hs+='border: 0px solid #000000;';
		hs+='border-radius: 5px;';
		hs+=cssPrefix + 'border-radius: 5px;';
		hs+='color: rgba(0,0,0,1);';
		hs+='font-size: 12px;';
		hs+='font-weight: bold;';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 1px 4px 1px 4px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="\u041f\u043e\u043c\u0435\u0449\u0435\u043d\u0438\u044f";
		el.appendChild(els);
		me._dropdown_menu_title0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._dropdown_menu_title0.ggUpdatePosition=function (useTransition) {
		}
		me._dropdown_menu_title_background0.appendChild(me._dropdown_menu_title0);
		el=me._dropdown_open0=document.createElement('div');
		els=me._dropdown_open0__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE1LjAuMiwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmVyc2lvbj0iMS4xIiBoZWlnaHQ9IjIwcHgiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3'+
			'hsaW5rIiBpZD0iTGF5ZXJfMSIgdmlld0JveD0iMCAwIDIwIDIwIiB3aWR0aD0iMjBweCIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMjAgMjAiIHhtbDpzcGFjZT0icHJlc2VydmUiIHk9IjBweCIgeD0iMHB4Ij4KIDxwb2x5Z29uIGZpbGwtb3BhY2l0eT0iMSIgZmlsbD0iIzAwMDAwMCIgcG9pbnRzPSIwLDAgMTAsMjAgMjAsMCAiLz4KPC9zdmc+Cg==';
		me._dropdown_open0__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Dropdown Open";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 10px;';
		hs+='left : 175px;';
		hs+='position : absolute;';
		hs+='top : 5px;';
		hs+='visibility : inherit;';
		hs+='width : 10px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._dropdown_open0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._dropdown_open0.ggUpdatePosition=function (useTransition) {
		}
		me._dropdown_menu_title_background0.appendChild(me._dropdown_open0);
		el=me._dropdown_close0=document.createElement('div');
		els=me._dropdown_close0__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE1LjAuMiwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmVyc2lvbj0iMS4xIiBoZWlnaHQ9IjIwcHgiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3'+
			'hsaW5rIiBpZD0iTGF5ZXJfMSIgdmlld0JveD0iMCAwIDIwIDIwIiB3aWR0aD0iMjBweCIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMjAgMjAiIHhtbDpzcGFjZT0icHJlc2VydmUiIHk9IjBweCIgeD0iMHB4Ij4KIDxwb2x5Z29uIGZpbGwtb3BhY2l0eT0iMSIgZmlsbD0iIzAwMDAwMCIgcG9pbnRzPSIyMCwyMCAxMCwwIDAsMjAgIi8+Cjwvc3ZnPgo=';
		me._dropdown_close0__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Dropdown Close";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 10px;';
		hs+='left : 175px;';
		hs+='position : absolute;';
		hs+='top : 5px;';
		hs+='visibility : hidden;';
		hs+='width : 10px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._dropdown_close0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._dropdown_close0.ggUpdatePosition=function (useTransition) {
		}
		me._dropdown_menu_title_background0.appendChild(me._dropdown_close0);
		me._dropdown_menu0.appendChild(me._dropdown_menu_title_background0);
		me.divSkin.appendChild(me._dropdown_menu0);
		el=me._dropdown_menu=document.createElement('div');
		el.ggId="Dropdown Menu";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 142px;';
		hs+='left : 231px;';
		hs+='position : absolute;';
		hs+='top : 49px;';
		hs+='visibility : inherit;';
		hs+='width : 190px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._dropdown_menu.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._dropdown_menu.ggUpdatePosition=function (useTransition) {
		}
		el=me._dropdown_background=document.createElement('div');
		el.ggId="Dropdown Background";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(68,68,68,0.784314);';
		hs+='border : 0px solid #ffffff;';
		hs+='cursor : default;';
		hs+='height : 119px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 23px;';
		hs+='visibility : hidden;';
		hs+='width : 190px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._dropdown_background.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._dropdown_background.ggUpdatePosition=function (useTransition) {
		}
		el=me._dropdown_scrollarea=document.createElement('div');
		els=me._dropdown_scrollarea__content=document.createElement('div');
		els.className='ggskin ggskin_subelement ggskin_scrollarea';
		el.ggContent=els;
		el.appendChild(els);
		el.ggHorScrollVisible = false;
		el.ggVertScrollVisible = false;
		el.ggContentLeftOffset = 0;
		el.ggContentTopOffset = 0;
		el.ggDragInertiaX = 0;
		el.ggDragInertiaY = 0;
		el.ggVPercentVisible = 1.0;
		el.ggHPercentVisible = 1.0;
		hs ='';
		hs+='height : 23px;';
		hs+='left : 0px;';
		hs+='overflow : visible;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='width : 170px;';
		hs+="";
		els.setAttribute('style',hs);
		me._dropdown_scrollarea.ggScrollByX = function(diffX) {
			if(!me._dropdown_scrollarea.ggHorScrollVisible || diffX == 0 || me._dropdown_scrollarea.ggHPercentVisible >= 1.0) return;
			me._dropdown_scrollarea.ggScrollPosX = (me._dropdown_scrollarea__horScrollFg.offsetLeft + diffX);
			me._dropdown_scrollarea.ggScrollPosX = Math.max(me._dropdown_scrollarea.ggScrollPosX, 0);
			me._dropdown_scrollarea.ggScrollPosX = Math.min(me._dropdown_scrollarea.ggScrollPosX, me._dropdown_scrollarea__horScrollBg.offsetWidth - me._dropdown_scrollarea__horScrollFg.offsetWidth);
			me._dropdown_scrollarea__horScrollFg.style.left = me._dropdown_scrollarea.ggScrollPosX + 'px';
			me._dropdown_scrollarea__content.style.left = -(Math.round(me._dropdown_scrollarea.ggScrollPosX / me._dropdown_scrollarea.ggHPercentVisible)) + me._dropdown_scrollarea.ggContentLeftOffset + 'px';
			me._dropdown_scrollarea.ggScrollPosXPercent = (me._dropdown_scrollarea__horScrollFg.offsetLeft / me._dropdown_scrollarea__horScrollBg.offsetWidth);
		}
		me._dropdown_scrollarea.ggScrollByXSmooth = function(diffX) {
			if(!me._dropdown_scrollarea.ggHorScrollVisible || diffX == 0 || me._dropdown_scrollarea.ggHPercentVisible >= 1.0) return;
			var scrollPerInterval = diffX / 25;
			var scrollCurrX = 0;
			var id = setInterval(function() {
				scrollCurrX += scrollPerInterval;
				me._dropdown_scrollarea.ggScrollPosX += scrollPerInterval;
				if (diffX > 0 && (scrollCurrX >= diffX || me._dropdown_scrollarea.ggScrollPosX >= me._dropdown_scrollarea__horScrollBg.offsetWidth - me._dropdown_scrollarea__horScrollFg.offsetWidth)) {
					me._dropdown_scrollarea.ggScrollPosX = Math.min(me._dropdown_scrollarea.ggScrollPosX, me._dropdown_scrollarea__horScrollBg.offsetWidth - me._dropdown_scrollarea__horScrollFg.offsetWidth);
					clearInterval(id);
				}
				if (diffX < 0 && (scrollCurrX <= diffX || me._dropdown_scrollarea.ggScrollPosX <= 0)) {
					me._dropdown_scrollarea.ggScrollPosX = Math.max(me._dropdown_scrollarea.ggScrollPosX, 0);
					clearInterval(id);
				}
			me._dropdown_scrollarea__horScrollFg.style.left = me._dropdown_scrollarea.ggScrollPosX + 'px';
			me._dropdown_scrollarea__content.style.left = -(Math.round(me._dropdown_scrollarea.ggScrollPosX / me._dropdown_scrollarea.ggHPercentVisible)) + me._dropdown_scrollarea.ggContentLeftOffset + 'px';
			me._dropdown_scrollarea.ggScrollPosXPercent = (me._dropdown_scrollarea__horScrollFg.offsetLeft / me._dropdown_scrollarea__horScrollBg.offsetWidth);
			}, 10);
		}
		me._dropdown_scrollarea.ggScrollByY = function(diffY) {
			if(!me._dropdown_scrollarea.ggVertScrollVisible || diffY == 0 || me._dropdown_scrollarea.ggVPercentVisible >= 1.0) return;
			me._dropdown_scrollarea.ggScrollPosY = (me._dropdown_scrollarea__vertScrollFg.offsetTop + diffY);
			me._dropdown_scrollarea.ggScrollPosY = Math.max(me._dropdown_scrollarea.ggScrollPosY, 0);
			me._dropdown_scrollarea.ggScrollPosY = Math.min(me._dropdown_scrollarea.ggScrollPosY, me._dropdown_scrollarea__vertScrollBg.offsetHeight - me._dropdown_scrollarea__vertScrollFg.offsetHeight);
			me._dropdown_scrollarea__vertScrollFg.style.top = me._dropdown_scrollarea.ggScrollPosY + 'px';
			me._dropdown_scrollarea__content.style.top = -(Math.round(me._dropdown_scrollarea.ggScrollPosY / me._dropdown_scrollarea.ggVPercentVisible)) + me._dropdown_scrollarea.ggContentTopOffset + 'px';
			me._dropdown_scrollarea.ggScrollPosYPercent = (me._dropdown_scrollarea__vertScrollFg.offsetTop / me._dropdown_scrollarea__vertScrollBg.offsetHeight);
		}
		me._dropdown_scrollarea.ggScrollByYSmooth = function(diffY) {
			if(!me._dropdown_scrollarea.ggVertScrollVisible || diffY == 0 || me._dropdown_scrollarea.ggVPercentVisible >= 1.0) return;
			var scrollPerInterval = diffY / 25;
			var scrollCurrY = 0;
			var id = setInterval(function() {
				scrollCurrY += scrollPerInterval;
				me._dropdown_scrollarea.ggScrollPosY += scrollPerInterval;
				if (diffY > 0 && (scrollCurrY >= diffY || me._dropdown_scrollarea.ggScrollPosY >= me._dropdown_scrollarea__vertScrollBg.offsetHeight - me._dropdown_scrollarea__vertScrollFg.offsetHeight)) {
					me._dropdown_scrollarea.ggScrollPosY = Math.min(me._dropdown_scrollarea.ggScrollPosY, me._dropdown_scrollarea__vertScrollBg.offsetHeight - me._dropdown_scrollarea__vertScrollFg.offsetHeight);
					clearInterval(id);
				}
				if (diffY < 0 && (scrollCurrY <= diffY || me._dropdown_scrollarea.ggScrollPosY <= 0)) {
					me._dropdown_scrollarea.ggScrollPosY = Math.max(me._dropdown_scrollarea.ggScrollPosY, 0);
					clearInterval(id);
				}
			me._dropdown_scrollarea__vertScrollFg.style.top = me._dropdown_scrollarea.ggScrollPosY + 'px';
			me._dropdown_scrollarea__content.style.top = -(Math.round(me._dropdown_scrollarea.ggScrollPosY / me._dropdown_scrollarea.ggVPercentVisible)) + me._dropdown_scrollarea.ggContentTopOffset + 'px';
			me._dropdown_scrollarea.ggScrollPosYPercent = (me._dropdown_scrollarea__vertScrollFg.offsetTop / me._dropdown_scrollarea__vertScrollBg.offsetHeight);
			}, 10);
		}
		me._dropdown_scrollarea.ggScrollIntoView = function(posX, posY, width, height) {
			if (me._dropdown_scrollarea.ggHorScrollVisible) {
				if (posX < 0) {
					var diffX = Math.floor(posX * me._dropdown_scrollarea.ggHPercentVisible);
					me._dropdown_scrollarea.ggScrollByXSmooth(diffX);
				} else if (posX + width > me._dropdown_scrollarea.offsetWidth - (me._dropdown_scrollarea.ggVertScrollVisible ? 15 : 0)) {
					var diffX = Math.ceil(((posX + width) - (me._dropdown_scrollarea.offsetWidth - (me._dropdown_scrollarea.ggVertScrollVisible ? 15 : 0))) * me._dropdown_scrollarea.ggHPercentVisible);
					me._dropdown_scrollarea.ggScrollByXSmooth(diffX);
				}
			}
			if (me._dropdown_scrollarea.ggVertScrollVisible) {
				if (posY < 0) {
					var diffY = Math.floor(posY * me._dropdown_scrollarea.ggVPercentVisible);
					me._dropdown_scrollarea.ggScrollByYSmooth(diffY);
				} else if (posY + height > me._dropdown_scrollarea.offsetHeight - (me._dropdown_scrollarea.ggHorScrollVisible ? 15 : 0)) {
					var diffY = Math.ceil(((posY + height) - (me._dropdown_scrollarea.offsetHeight - (me._dropdown_scrollarea.ggHorScrollVisible ? 15 : 0))) * me._dropdown_scrollarea.ggVPercentVisible);
					me._dropdown_scrollarea.ggScrollByYSmooth(diffY);
				}
			}
		}
		els.ontouchstart = function(e) {
			e = e || window.event;
			var t = e.touches;
			me._dropdown_scrollarea.ggDragLastX = t ? t[0].clientX : e.clientX;
			me._dropdown_scrollarea.ggDragLastY = t ? t[0].clientY : e.clientY;
			me._dropdown_scrollarea__content.ontouchend = function() {
				let inertiaInterval = setInterval(function() {
					me._dropdown_scrollarea.ggDragInertiaX *= 0.65;
					me._dropdown_scrollarea.ggDragInertiaY *= 0.65;
					me._dropdown_scrollarea.ggScrollByX(me._dropdown_scrollarea.ggDragInertiaX);
					me._dropdown_scrollarea.ggScrollByY(me._dropdown_scrollarea.ggDragInertiaY);
					if (Math.abs(me._dropdown_scrollarea.ggDragInertiaX) < 1.0 && Math.abs(me._dropdown_scrollarea.ggDragInertiaY) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 50);
				me._dropdown_scrollarea__content.ontouchend = null;
				me._dropdown_scrollarea__content.ontouchmove = null;
				me._dropdown_scrollarea__content.onpointerup = null;
				me._dropdown_scrollarea__content.onpointermove = null;
			}
		if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
			me._dropdown_scrollarea__content.onpointerup = me._dropdown_scrollarea__content.ontouchend;
		}
			me._dropdown_scrollarea__content.ontouchmove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var t = e.touches;
				var diffX = ((t ? t[0].clientX : e.clientX) - me._dropdown_scrollarea.ggDragLastX) * me._dropdown_scrollarea.ggHPercentVisible;
				var diffY = ((t ? t[0].clientY : e.clientY) - me._dropdown_scrollarea.ggDragLastY) * me._dropdown_scrollarea.ggVPercentVisible;
				me._dropdown_scrollarea.ggDragInertiaX = -diffX;
				me._dropdown_scrollarea.ggDragInertiaY = -diffY;
				me._dropdown_scrollarea.ggDragLastX = t ? t[0].clientX : e.clientX;
				me._dropdown_scrollarea.ggDragLastY = t ? t[0].clientY : e.clientY;
				me._dropdown_scrollarea.ggScrollByX(-diffX);
				me._dropdown_scrollarea.ggScrollByY(-diffY);
			}
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				me._dropdown_scrollarea__content.onpointermove = me._dropdown_scrollarea__content.ontouchmove;
			}
		}
		if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
			els.onpointerdown = els.ontouchstart;
		}
		elVertScrollBg = me._dropdown_scrollarea__vertScrollBg = document.createElement('div');
		el.appendChild(elVertScrollBg);
		elVertScrollBg.setAttribute('style', 'position: absolute; right: 0px; top: 0px; visibility: hidden; width: 15px; height: 115px; background-color: rgba(128,128,128,0); pointer-events: auto;');
		elVertScrollBg.className='ggskin ggskin_scrollarea_vscrollbg';
		elVertScrollFg = me._dropdown_scrollarea__vertScrollFg = document.createElement('div');
		elVertScrollBg.appendChild(elVertScrollFg);
		elVertScrollFg.setAttribute('style', 'position: absolute; left: 0px; top: 0px; visibility: hidden; width: 15px; height: 115px; background-color: rgba(0,0,0,1); pointer-events: auto;');
		elVertScrollFg.className='ggskin ggskin_scrollarea_vscrollfg';
		me._dropdown_scrollarea.ggScrollPosY = 0;
		me._dropdown_scrollarea.ggScrollPosYPercent = 0.0;
		elVertScrollFg.onmousedown = function(e) {
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) return;
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			me._dropdown_scrollarea.ggDragLastY = e.clientY;
			document.onmouseup = function() {
				let inertiaInterval = setInterval(function() {
					me._dropdown_scrollarea.ggDragInertiaY *= 0.65;
					me._dropdown_scrollarea.ggScrollByY(me._dropdown_scrollarea.ggDragInertiaY);
					if (Math.abs(me._dropdown_scrollarea.ggDragInertiaY) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 50);
				document.onmouseup = null;
				document.onmousemove = null;
			}
			document.onmousemove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var diffY = e.clientY - me._dropdown_scrollarea.ggDragLastY;
				me._dropdown_scrollarea.ggDragInertiaY = diffY;
				me._dropdown_scrollarea.ggDragLastY = e.clientY;
				me._dropdown_scrollarea.ggScrollByY(diffY);
			}
		}
		elVertScrollFg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			me._dropdown_scrollarea.ggDragLastY = t ? t[0].clientY : e.clientY;
			document.ontouchend = function() {
				let inertiaInterval = setInterval(function() {
					me._dropdown_scrollarea.ggDragInertiaY *= 0.65;
					me._dropdown_scrollarea.ggScrollByY(me._dropdown_scrollarea.ggDragInertiaY);
					if (Math.abs(me._dropdown_scrollarea.ggDragInertiaY) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 50);
				document.ontouchend = null;
				document.ontouchmove = null;
				document.onpointerup = null;
				document.onpointermove = null;
			}
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				document.onpointerup = document.ontouchend;
			}
			document.ontouchmove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var t = e.touches;
				var diffY = (t ? t[0].clientY : e.clientY) - me._dropdown_scrollarea.ggDragLastY;
				me._dropdown_scrollarea.ggDragInertiaY = diffY;
				me._dropdown_scrollarea.ggDragLastY = t ? t[0].clientY : e.clientY;
				me._dropdown_scrollarea.ggScrollByY(diffY);
			}
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				document.onpointermove = document.ontouchmove;
			}
		}
		if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
			elVertScrollFg.onpointerdown = elVertScrollFg.ontouchstart;
		}
		elVertScrollBg.onmousedown = function(e) {
			e = e || window.event;
			e.preventDefault();
			var diffY = me._dropdown_scrollarea.ggScrollHeight;
			if (e.offsetY < me._dropdown_scrollarea.ggScrollPosY) {
				diffY = diffY * -1;
			}
			me._dropdown_scrollarea.ggScrollByYSmooth(diffY);
		}
		elVertScrollBg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			var rect = me._dropdown_scrollarea__vertScrollBg.getBoundingClientRect();
			var diffY = me._dropdown_scrollarea.ggScrollHeight;
			if ((t[0].clientY - rect.top) < me._dropdown_scrollarea.ggScrollPosY) {
				diffY = diffY * -1;
			}
			me._dropdown_scrollarea.ggScrollByYSmooth(diffY);
		}
		el.addEventListener('wheel', function(e) {
			e.preventDefault();
			var wheelDelta = Math.sign(e.deltaY);
			me._dropdown_scrollarea.ggScrollByYSmooth(20 * wheelDelta);
		});
		elCornerBg = me._dropdown_scrollarea__cornerBg = document.createElement('div');
		el.appendChild(elCornerBg);
		elCornerBg.setAttribute('style', 'position: absolute; right: 0px; bottom: 0px; visibility: hidden; width: 15px; height: 15px; background-color: rgba(255,255,255,1);');
		elCornerBg.className='ggskin ggskin_scrollarea_scrollcorner';
		el.ggId="Dropdown Scrollarea";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_scrollarea ";
		el.ggType='scrollarea';
		hs ='';
		hs+='border : 1px solid rgba(0, 0, 0, 0);';
		hs+='cursor : pointer;';
		hs+='height : 115px;';
		hs+='left : 0px;';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 187px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._dropdown_scrollarea.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._dropdown_scrollarea.ggUpdatePosition=function (useTransition) {
			{
				var horScrollWasVisible = this.ggHorScrollVisible;
				var vertScrollWasVisible = this.ggVertScrollVisible;
				this.ggContent.style.left = '0px';
				this.ggContent.style.top = '0px';
				this.ggContentLeftOffset = 0;
				this.ggContentTopOffset = 0;
				var offsetWidthWithScale = this.getBoundingClientRect().width;
				var offsetHeightWithScale = this.getBoundingClientRect().height;
				var domRectContent = this.ggContent.getBoundingClientRect();
				var minX = 0;
				var minY = 0;
				var maxX = 0;
				var maxY = 0;
				var stack=[];
				stack.push(this.ggContent);
				while(stack.length>0) {
					var e=stack.pop();
					if (e!=this.ggContent && e.getBoundingClientRect && e.style['display']!='none') {
						var domRectChild = e.getBoundingClientRect();
						var diffX = domRectChild.left - domRectContent.left;
						minX = Math.min(minX, diffX);
						maxX = Math.max(maxX, diffX + domRectChild.width);
						var diffY = domRectChild.top - domRectContent.top;
						minY = Math.min(minY, diffY);
						maxY = Math.max(maxY, diffY + domRectChild.height);
					}
					if (e.hasChildNodes() && e.style['display']!='none') {
						for(var i=0;i<e.childNodes.length;i++) {
							stack.push(e.childNodes[i]);
						}
					}
				}
				if (minX < 0) this.ggContentLeftOffset = -minX;
				if (minY < 0) this.ggContentTopOffset = -minY;
				var contentWidth = maxX - minX;
				var contentHeight = maxY - minY;
				this.ggContent.style.left = this.ggContentLeftOffset + 'px';
				this.ggContent.style.top = this.ggContentTopOffset + 'px';
				this.ggContent.style.width = contentWidth + 'px';
				this.ggContent.style.height = contentHeight + 'px';
				this.ggContent.style.left = this.ggContentLeftOffset + 'px';
				this.ggContent.style.marginLeft = '0px';
				this.ggContent.style.top = -(Math.round(me._dropdown_scrollarea.ggScrollPosY / me._dropdown_scrollarea.ggVPercentVisible)) + this.ggContentTopOffset + 'px';
				this.ggContent.style.marginTop = '0px';
				if ((me._dropdown_scrollarea.ggHorScrollVisible && contentHeight > this.offsetHeight - 15) || (!me._dropdown_scrollarea.ggHorScrollVisible && contentHeight > this.offsetHeight)) {
					me._dropdown_scrollarea__vertScrollBg.style.visibility = 'inherit';
					me._dropdown_scrollarea__vertScrollFg.style.visibility = 'inherit';
					me._dropdown_scrollarea.ggVertScrollVisible = true;
				} else {
					me._dropdown_scrollarea__vertScrollBg.style.visibility = 'hidden';
					me._dropdown_scrollarea__vertScrollFg.style.visibility = 'hidden';
					me._dropdown_scrollarea.ggVertScrollVisible = false;
				}
				if(me._dropdown_scrollarea.ggVertScrollVisible) {
					me._dropdown_scrollarea.ggAvailableWidth = me._dropdown_scrollarea.offsetWidth - 15;
					if (me._dropdown_scrollarea.ggHorScrollVisible) {
						me._dropdown_scrollarea.ggAvailableHeight = me._dropdown_scrollarea.offsetHeight - 15;
						me._dropdown_scrollarea.ggAvailableHeightWithScale = me._dropdown_scrollarea.getBoundingClientRect().height - me._dropdown_scrollarea__vertScrollBg.getBoundingClientRect().width;
						me._dropdown_scrollarea__cornerBg.style.visibility = 'inherit';
					} else {
						me._dropdown_scrollarea.ggAvailableHeight = me._dropdown_scrollarea.offsetHeight;
						me._dropdown_scrollarea.ggAvailableHeightWithScale = me._dropdown_scrollarea.getBoundingClientRect().height;
						me._dropdown_scrollarea__cornerBg.style.visibility = 'hidden';
					}
					me._dropdown_scrollarea__vertScrollBg.style.height = me._dropdown_scrollarea.ggAvailableHeight + 'px';
					me._dropdown_scrollarea.ggVPercentVisible = contentHeight != 0 ? me._dropdown_scrollarea.ggAvailableHeightWithScale / contentHeight : 0.0;
					if (me._dropdown_scrollarea.ggVPercentVisible > 1.0) me._dropdown_scrollarea.ggVPercentVisible = 1.0;
					me._dropdown_scrollarea.ggScrollHeight =  Math.round(me._dropdown_scrollarea__vertScrollBg.offsetHeight * me._dropdown_scrollarea.ggVPercentVisible);
					me._dropdown_scrollarea__vertScrollFg.style.height = me._dropdown_scrollarea.ggScrollHeight + 'px';
					me._dropdown_scrollarea.ggScrollPosY = me._dropdown_scrollarea.ggScrollPosYPercent * me._dropdown_scrollarea.ggAvailableHeight;
					me._dropdown_scrollarea.ggScrollPosY = Math.min(me._dropdown_scrollarea.ggScrollPosY, me._dropdown_scrollarea__vertScrollBg.offsetHeight - me._dropdown_scrollarea__vertScrollFg.offsetHeight);
					me._dropdown_scrollarea__vertScrollFg.style.top = me._dropdown_scrollarea.ggScrollPosY + 'px';
					if (me._dropdown_scrollarea.ggVPercentVisible < 1.0) {
						me._dropdown_scrollarea__content.style.top = -(Math.round(me._dropdown_scrollarea.ggScrollPosY / me._dropdown_scrollarea.ggVPercentVisible)) + this.ggContentTopOffset + 'px';
					}
				} else {
					me._dropdown_scrollarea.ggAvailableWidth = me._dropdown_scrollarea.offsetWidth;
					me._dropdown_scrollarea.ggScrollPosY = 0;
					me._dropdown_scrollarea.ggScrollPosYPercent = 0.0;
					me._dropdown_scrollarea__content.style.top = this.ggContentTopOffset + 'px';
					me._dropdown_scrollarea__cornerBg.style.visibility = 'hidden';
				}
				if(horScrollWasVisible != me._dropdown_scrollarea.ggHorScrollVisible || vertScrollWasVisible != me._dropdown_scrollarea.ggVertScrollVisible) {
					me.updateSize(me._dropdown_scrollarea);
					me._dropdown_scrollarea.ggUpdatePosition();
				}
			}
		}
		el=me._dropdown_cloner=document.createElement('div');
		el.ggNumRepeat = 1;
		el.ggNumRows = 0;
		el.ggNumCols = 0;
		el.ggWidth = 169;
		el.ggHeight = 24;
		el.ggUpdating = false;
		el.ggFilter = [];
		el.ggInstances = [];
		me._dropdown_cloner.callChildLogicBlocks_mouseover = function(){
			if(me._dropdown_cloner.ggInstances) {
				var i;
				for(i = 0; i < me._dropdown_cloner.ggInstances.length; i++) {
					if (me._dropdown_cloner.ggInstances[i]._dropdown_menu_text && me._dropdown_cloner.ggInstances[i]._dropdown_menu_text.logicBlock_backgroundcolor) {
						me._dropdown_cloner.ggInstances[i]._dropdown_menu_text.logicBlock_backgroundcolor();
					}
				}
			}
		}
		me._dropdown_cloner.callChildLogicBlocks_active = function(){
			if(me._dropdown_cloner.ggInstances) {
				var i;
				for(i = 0; i < me._dropdown_cloner.ggInstances.length; i++) {
					if (me._dropdown_cloner.ggInstances[i]._dropdown_menu_text && me._dropdown_cloner.ggInstances[i]._dropdown_menu_text.logicBlock_backgroundcolor) {
						me._dropdown_cloner.ggInstances[i]._dropdown_menu_text.logicBlock_backgroundcolor();
					}
					if (me._dropdown_cloner.ggInstances[i]._dropdown_checkmark && me._dropdown_cloner.ggInstances[i]._dropdown_checkmark.logicBlock_alpha) {
						me._dropdown_cloner.ggInstances[i]._dropdown_checkmark.logicBlock_alpha();
					}
				}
			}
		}
		me._dropdown_cloner.callChildLogicBlocks_changevisitednodes = function(){
			if(me._dropdown_cloner.ggInstances) {
				var i;
				for(i = 0; i < me._dropdown_cloner.ggInstances.length; i++) {
					if (me._dropdown_cloner.ggInstances[i]._dropdown_checkmark && me._dropdown_cloner.ggInstances[i]._dropdown_checkmark.logicBlock_alpha) {
						me._dropdown_cloner.ggInstances[i]._dropdown_checkmark.logicBlock_alpha();
					}
				}
			}
		}
		el.ggUpdate = function(filter) {
			if(me._dropdown_cloner.ggUpdating == true) return;
			me._dropdown_cloner.ggUpdating = true;
			var el=me._dropdown_cloner;
			var curNumCols = 0;
			curNumCols = me._dropdown_cloner.ggNumRepeat;
			if (curNumCols < 1) curNumCols = 1;
			if (typeof filter=='object') {
				el.ggFilter = filter;
			} else {
				filter = el.ggFilter;
			};
			if (me.ggTag) filter.push(me.ggTag);
			filter=filter.sort();
			if ((el.ggNumCols == curNumCols) && (el.ggInstances.length > 0) && (filter.length === el.ggCurrentFilter.length) && (filter.every(function(value, index) { return value === el.ggCurrentFilter[index] }) )) {
				me._dropdown_cloner.ggUpdating = false;
				return;
			} else {
				el.ggNumRows = 1;
				el.ggNumCols = curNumCols;
			}
			el.ggCurrentFilter = filter;
			el.ggInstances = [];
			if (el.hasChildNodes() == true) {
				while (el.firstChild) {
					el.removeChild(el.firstChild);
				}
			}
			var tourNodes = player.getNodeIds();
			var row = 0;
			var column = 0;
			var currentIndex = 0;
			for (var i=0; i < tourNodes.length; i++) {
				var nodeId = tourNodes[i];
				var passed = true;
				var nodeData = player.getNodeUserdata(nodeId);
				if (filter.length > 0) {
					for (var j=0; j < filter.length; j++) {
						if (nodeData['tags'].indexOf(filter[j]) == -1) passed = false;
					}
				}
				if (passed) {
				var parameter={};
				parameter.top=(row * me._dropdown_cloner.ggHeight) + 'px';
				parameter.left=(column * me._dropdown_cloner.ggWidth) + 'px';
				parameter.width=me._dropdown_cloner.ggWidth + 'px';
				parameter.height=me._dropdown_cloner.ggHeight + 'px';
				parameter.index=currentIndex;
				parameter.title=nodeData['title'];
				var inst = new SkinCloner_dropdown_cloner_Class(nodeId, me, el, parameter);
				currentIndex++;
				el.ggInstances.push(inst);
				el.appendChild(inst.__div);
				inst.__div.ggObj=inst;
				skin.updateSize(inst.__div);
				column++;
				if (column >= el.ggNumCols) {
					column = 0;
					row++;
					el.ggNumRows++;
				}
				}
			}
			me._dropdown_cloner.callChildLogicBlocks_mouseover();
			me._dropdown_cloner.callChildLogicBlocks_active();
			me._dropdown_cloner.callChildLogicBlocks_changevisitednodes();
			me._dropdown_cloner.ggUpdating = false;
			player.triggerEvent('clonerchanged');
			if (me._dropdown_cloner.parentNode.classList.contains('ggskin_subelement') && me._dropdown_cloner.parentNode.parentNode.classList.contains('ggskin_scrollarea')) me._dropdown_cloner.parentNode.parentNode.ggUpdatePosition();
		}
		el.ggFilter = [];
		el.ggId="Dropdown Cloner";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_cloner ";
		el.ggType='cloner';
		hs ='';
		hs+='height : 24px;';
		hs+='left : 0px;';
		hs+='overflow : visible;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 169px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._dropdown_cloner.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._dropdown_cloner.ggUpdateConditionNodeChange=function () {
			var cnode=player.getCurrentNode();
			for(var i=0; i<me._dropdown_cloner.childNodes.length; i++) {
				var child=me._dropdown_cloner.childNodes[i];
				if (child.ggObj && child.ggObj.ggNodeId==cnode) {
			        var childOffX = child.offsetLeft;
			        var childOffY = child.offsetTop;
					var p = child.parentElement;
			        while (p != null && p!==this.divSkin) {
						if (p.ggType && p.ggType == 'scrollarea') {
							p.ggScrollIntoView(childOffX, childOffY, child.clientWidth, child.clientHeight);
						}
						childOffX += p.offsetLeft;
						childOffY += p.offsetTop;
						p = p.parentElement;
					}
				}
			}
		}
		me._dropdown_cloner.ggUpdatePosition=function (useTransition) {
				me._dropdown_cloner.ggUpdate();
		}
		me._dropdown_cloner.ggNodeChange=function () {
			me._dropdown_cloner.ggUpdateConditionNodeChange();
		}
		me._dropdown_scrollarea__content.appendChild(me._dropdown_cloner);
		me._dropdown_background.appendChild(me._dropdown_scrollarea);
		me._dropdown_menu.appendChild(me._dropdown_background);
		el=me._dropdown_menu_title_background=document.createElement('div');
		el.ggId="Dropdown Menu Title Background";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #000000;';
		hs+='border : 0px solid #ffffff;';
		hs+='cursor : pointer;';
		hs+='height : 20px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 190px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._dropdown_menu_title_background.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._dropdown_menu_title_background.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((me.elementMouseOver['dropdown_menu_title_background'] == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._dropdown_menu_title_background.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._dropdown_menu_title_background.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._dropdown_menu_title_background.style[domTransition]='background-color 0s';
				if (me._dropdown_menu_title_background.ggCurrentLogicStateBackgroundColor == 0) {
					me._dropdown_menu_title_background.style.backgroundColor="rgba(68,68,68,1)";
				}
				else {
					me._dropdown_menu_title_background.style.backgroundColor="rgba(0,0,0,1)";
				}
			}
		}
		me._dropdown_menu_title_background.onclick=function (e) {
			me._dropdown_background.ggVisible = !me._dropdown_background.ggVisible;
			var flag=me._dropdown_background.ggVisible;
			me._dropdown_background.style[domTransition]='none';
			me._dropdown_background.style.visibility=((flag)&&(Number(me._dropdown_background.style.opacity)>0||!me._dropdown_background.style.opacity))?'inherit':'hidden';
			me._dropdown_open.ggVisible = !me._dropdown_open.ggVisible;
			var flag=me._dropdown_open.ggVisible;
			me._dropdown_open.style[domTransition]='none';
			me._dropdown_open.style.visibility=((flag)&&(Number(me._dropdown_open.style.opacity)>0||!me._dropdown_open.style.opacity))?'inherit':'hidden';
			me._dropdown_close.ggVisible = !me._dropdown_close.ggVisible;
			var flag=me._dropdown_close.ggVisible;
			me._dropdown_close.style[domTransition]='none';
			me._dropdown_close.style.visibility=((flag)&&(Number(me._dropdown_close.style.opacity)>0||!me._dropdown_close.style.opacity))?'inherit':'hidden';
		}
		me._dropdown_menu_title_background.onmouseover=function (e) {
			me.elementMouseOver['dropdown_menu_title_background']=true;
			me._dropdown_menu_title_background.logicBlock_backgroundcolor();
		}
		me._dropdown_menu_title_background.onmouseout=function (e) {
			me.elementMouseOver['dropdown_menu_title_background']=false;
			me._dropdown_menu_title_background.logicBlock_backgroundcolor();
		}
		me._dropdown_menu_title_background.ontouchend=function (e) {
			me.elementMouseOver['dropdown_menu_title_background']=false;
			me._dropdown_menu_title_background.logicBlock_backgroundcolor();
		}
		me._dropdown_menu_title_background.ggUpdatePosition=function (useTransition) {
		}
		el=me._dropdown_menu_title=document.createElement('div');
		els=me._dropdown_menu_title__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Dropdown Menu Title";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 20px;';
		hs+='left : 2px;';
		hs+='position : absolute;';
		hs+='top : 1px;';
		hs+='visibility : inherit;';
		hs+='width : 166px;';
		hs+='pointer-events:none;';
		hs+='font-weight: bold;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 166px;';
		hs+='height: 20px;';
		hs+='pointer-events: none;';
		hs+='border: 0px solid #000000;';
		hs+='border-radius: 5px;';
		hs+=cssPrefix + 'border-radius: 5px;';
		hs+='color: rgba(255,255,255,1);';
		hs+='font-size: 12px;';
		hs+='font-weight: bold;';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 1px 4px 1px 4px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._dropdown_menu_title.ggUpdateText=function() {
			var hs=me.ggUserdata.title;
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._dropdown_menu_title.ggUpdateText();
		player.addListener('changenode', function() {
			me._dropdown_menu_title.ggUpdateText();
		});
		el.appendChild(els);
		me._dropdown_menu_title.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._dropdown_menu_title.ggUpdatePosition=function (useTransition) {
		}
		me._dropdown_menu_title_background.appendChild(me._dropdown_menu_title);
		el=me._dropdown_open=document.createElement('div');
		els=me._dropdown_open__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE1LjAuMiwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmVyc2lvbj0iMS4xIiBoZWlnaHQ9IjIwcHgiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3'+
			'hsaW5rIiBpZD0iTGF5ZXJfMSIgdmlld0JveD0iMCAwIDIwIDIwIiB3aWR0aD0iMjBweCIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMjAgMjAiIHhtbDpzcGFjZT0icHJlc2VydmUiIHk9IjBweCIgeD0iMHB4Ij4KIDxwb2x5Z29uIGZpbGwtb3BhY2l0eT0iMSIgZmlsbD0iI2ZmZmZmZiIgcG9pbnRzPSIwLDAgMTAsMjAgMjAsMCAiLz4KPC9zdmc+Cg==';
		me._dropdown_open__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Dropdown Open";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 10px;';
		hs+='left : 175px;';
		hs+='position : absolute;';
		hs+='top : 5px;';
		hs+='visibility : inherit;';
		hs+='width : 10px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._dropdown_open.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._dropdown_open.ggUpdatePosition=function (useTransition) {
		}
		me._dropdown_menu_title_background.appendChild(me._dropdown_open);
		el=me._dropdown_close=document.createElement('div');
		els=me._dropdown_close__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE1LjAuMiwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmVyc2lvbj0iMS4xIiBoZWlnaHQ9IjIwcHgiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3'+
			'hsaW5rIiBpZD0iTGF5ZXJfMSIgdmlld0JveD0iMCAwIDIwIDIwIiB3aWR0aD0iMjBweCIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMjAgMjAiIHhtbDpzcGFjZT0icHJlc2VydmUiIHk9IjBweCIgeD0iMHB4Ij4KIDxwb2x5Z29uIGZpbGwtb3BhY2l0eT0iMSIgZmlsbD0iI2ZmZmZmZiIgcG9pbnRzPSIyMCwyMCAxMCwwIDAsMjAgIi8+Cjwvc3ZnPgo=';
		me._dropdown_close__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Dropdown Close";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 10px;';
		hs+='left : 175px;';
		hs+='position : absolute;';
		hs+='top : 5px;';
		hs+='visibility : hidden;';
		hs+='width : 10px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._dropdown_close.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._dropdown_close.ggUpdatePosition=function (useTransition) {
		}
		me._dropdown_menu_title_background.appendChild(me._dropdown_close);
		me._dropdown_menu.appendChild(me._dropdown_menu_title_background);
		me.divSkin.appendChild(me._dropdown_menu);
		player.addListener('sizechanged', function() {
			me.updateSize(me.divSkin);
		});
		player.addListener('configloaded', function() {
			me._dropdown_cloner0.ggUpdate();
			me._dropdown_cloner.ggUpdate();
		});
		player.addListener('imagesready', function() {
			me._dropdown_scrollarea0.ggUpdatePosition();
			me._dropdown_scrollarea.ggUpdatePosition();
		});
		player.addListener('fullscreenenter', function() {
			me._fullscreen_exit.style[domTransition]='none';
			me._fullscreen_exit.style.visibility=(Number(me._fullscreen_exit.style.opacity)>0||!me._fullscreen_exit.style.opacity)?'inherit':'hidden';
			me._fullscreen_exit.ggVisible=true;
			me._fullscreen_enter.style[domTransition]='none';
			me._fullscreen_enter.style.visibility='hidden';
			me._fullscreen_enter.ggVisible=false;
		});
		player.addListener('fullscreenexit', function() {
			me._fullscreen_enter.style[domTransition]='none';
			me._fullscreen_enter.style.visibility=(Number(me._fullscreen_enter.style.opacity)>0||!me._fullscreen_enter.style.opacity)?'inherit':'hidden';
			me._fullscreen_enter.ggVisible=true;
			me._fullscreen_exit.style[domTransition]='none';
			me._fullscreen_exit.style.visibility='hidden';
			me._fullscreen_exit.ggVisible=false;
		});
	};
	this.hotspotProxyClick=function(id, url) {
	}
	this.hotspotProxyDoubleClick=function(id, url) {
	}
	me.hotspotProxyOver=function(id, url) {
	}
	me.hotspotProxyOut=function(id, url) {
	}
	player.addListener('changenode', function() {
		me.ggUserdata=player.userdata;
	});
	me.skinTimerEvent=function() {
		me.ggCurrentTime=new Date().getTime();
		if (me.elementMouseDown['pan_left']) {
			player.changePanLog(3,true);
		}
		if (me.elementMouseDown['pan_right']) {
			player.changePanLog(-3,true);
		}
		if (me.elementMouseDown['tilt_down']) {
			player.changeTiltLog(-3,true);
		}
		if (me.elementMouseDown['tilt_up']) {
			player.changeTiltLog(1,true);
		}
		if (me.elementMouseDown['zoom_in']) {
			player.changeFovLog(-1,true);
		}
		if (me.elementMouseDown['zoom_out']) {
			player.changeFovLog(1,true);
		}
	};
	player.addListener('timer', me.skinTimerEvent);
	function SkinCloner_dropdown_cloner0_Class(nodeId, parentScope,ggParent,parameter) {
		var me=this;
		var hs='';
		me.parentScope=parentScope;
		me.ggParent=ggParent;
		me.findElements=skin.findElements;
		me.ggIndex=parameter.index;
		me.ggNodeId=nodeId;
		me.ggTitle=parameter.title;
		me.ggUserdata=skin.player.getNodeUserdata(me.ggNodeId);
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.__div=document.createElement('div');
		me.__div.setAttribute('style','position: absolute;width: 184px; height: 23px; visibility: inherit; overflow: visible;');
		me.__div.style.left=parameter.left;
		me.__div.style.top=parameter.top;
		me.__div.style.width=parameter.width;
		me.__div.style.height=parameter.height;
		me.__div.ggIsActive = function() {
			return player.getCurrentNode()==me.ggNodeId;
		}
		me.__div.ggElementNodeId=function() {
			return me.ggNodeId;
		}
		el=me._dropdown_menu_text0=document.createElement('div');
		els=me._dropdown_menu_text0__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Dropdown Menu Text";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 20px;';
		hs+='left : 9px;';
		hs+='position : absolute;';
		hs+='top : 3px;';
		hs+='visibility : inherit;';
		hs+='width : 150px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 150px;';
		hs+='height: 20px;';
		hs+='background: #efefef;';
		hs+='background: rgba(239,239,239,0.784314);';
		hs+='border: 0px solid #848484;';
		hs+='color: rgba(0,0,0,1);';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 2px 3px 2px 3px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._dropdown_menu_text0.ggUpdateText=function() {
			var hs=me.ggUserdata.title+""+me.ggUserdata.customnodeid+""+player.getCurrentNode();
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._dropdown_menu_text0.ggUpdateText();
		player.addListener('changenode', function() {
			me._dropdown_menu_text0.ggUpdateText();
		});
		el.appendChild(els);
		me._dropdown_menu_text0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._dropdown_menu_text0.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((me.elementMouseOver['dropdown_menu_text0'] == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else if (
				((me._dropdown_menu_text0.ggIsActive() == true))
			)
			{
				newLogicStateBackgroundColor = 1;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._dropdown_menu_text0.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._dropdown_menu_text0.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._dropdown_menu_text0__text.style[domTransition]='background-color 0s';
				if (me._dropdown_menu_text0.ggCurrentLogicStateBackgroundColor == 0) {
					me._dropdown_menu_text0__text.style.backgroundColor="rgba(255,255,255,1)";
				}
				else if (me._dropdown_menu_text0.ggCurrentLogicStateBackgroundColor == 1) {
					me._dropdown_menu_text0__text.style.backgroundColor="rgba(255,255,255,1)";
				}
				else {
					me._dropdown_menu_text0__text.style.backgroundColor="rgba(239,239,239,0.784314)";
				}
			}
		}
		me._dropdown_menu_text0.onclick=function (e) {
			if (
				(
					((me._dropdown_menu_text0.ggIsActive() == false))
				)
			) {
				player.openNext("{"+me.ggNodeId+"}",player.hotspot.target);
			}
			skin._dropdown_menu_title_background0.onclick.call(skin._dropdown_menu_title_background0);
		}
		me._dropdown_menu_text0.onmouseover=function (e) {
			me.elementMouseOver['dropdown_menu_text0']=true;
			me._dropdown_menu_text0.logicBlock_backgroundcolor();
		}
		me._dropdown_menu_text0.onmouseout=function (e) {
			if (e && e.toElement) {
				var current = e.toElement;
				while (current = current.parentNode) {
				if (current == me._dropdown_menu_text0__text)
					return;
				}
			}
			me.elementMouseOver['dropdown_menu_text0']=false;
			me._dropdown_menu_text0.logicBlock_backgroundcolor();
		}
		me._dropdown_menu_text0.ontouchend=function (e) {
			me.elementMouseOver['dropdown_menu_text0']=false;
			me._dropdown_menu_text0.logicBlock_backgroundcolor();
		}
		me._dropdown_menu_text0.ggUpdatePosition=function (useTransition) {
		}
		me.__div.appendChild(me._dropdown_menu_text0);
	};
	function SkinCloner_dropdown_cloner_Class(nodeId, parentScope,ggParent,parameter) {
		var me=this;
		var hs='';
		me.parentScope=parentScope;
		me.ggParent=ggParent;
		me.findElements=skin.findElements;
		me.ggIndex=parameter.index;
		me.ggNodeId=nodeId;
		me.ggTitle=parameter.title;
		me.ggUserdata=skin.player.getNodeUserdata(me.ggNodeId);
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.__div=document.createElement('div');
		me.__div.setAttribute('style','position: absolute;width: 169px; height: 24px; visibility: inherit; overflow: visible;');
		me.__div.style.left=parameter.left;
		me.__div.style.top=parameter.top;
		me.__div.style.width=parameter.width;
		me.__div.style.height=parameter.height;
		me.__div.ggIsActive = function() {
			return player.getCurrentNode()==me.ggNodeId;
		}
		me.__div.ggElementNodeId=function() {
			return me.ggNodeId;
		}
		el=me._dropdown_menu_text=document.createElement('div');
		els=me._dropdown_menu_text__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Dropdown Menu Text";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 20px;';
		hs+='left : 21px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 150px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 150px;';
		hs+='height: 20px;';
		hs+='background: #444444;';
		hs+='background: rgba(68,68,68,0.784314);';
		hs+='border: 0px solid #848484;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 2px 3px 2px 3px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML=me.ggUserdata.customnodeid;
		el.appendChild(els);
		me._dropdown_menu_text.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._dropdown_menu_text.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((me.elementMouseOver['dropdown_menu_text'] == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else if (
				((me._dropdown_menu_text.ggIsActive() == true))
			)
			{
				newLogicStateBackgroundColor = 1;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._dropdown_menu_text.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._dropdown_menu_text.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._dropdown_menu_text__text.style[domTransition]='background-color 0s';
				if (me._dropdown_menu_text.ggCurrentLogicStateBackgroundColor == 0) {
					me._dropdown_menu_text__text.style.backgroundColor="rgba(0,0,0,1)";
				}
				else if (me._dropdown_menu_text.ggCurrentLogicStateBackgroundColor == 1) {
					me._dropdown_menu_text__text.style.backgroundColor="rgba(0,0,0,1)";
				}
				else {
					me._dropdown_menu_text__text.style.backgroundColor="rgba(68,68,68,0.784314)";
				}
			}
		}
		me._dropdown_menu_text.onclick=function (e) {
			if (
				(
					((me._dropdown_menu_text.ggIsActive() == false))
				)
			) {
				player.openNext("{"+me.ggNodeId+"}",player.hotspot.target);
			}
			skin._dropdown_menu_title_background0.onclick.call(skin._dropdown_menu_title_background0);
		}
		me._dropdown_menu_text.onmouseover=function (e) {
			me.elementMouseOver['dropdown_menu_text']=true;
			me._dropdown_menu_text.logicBlock_backgroundcolor();
		}
		me._dropdown_menu_text.onmouseout=function (e) {
			if (e && e.toElement) {
				var current = e.toElement;
				while (current = current.parentNode) {
				if (current == me._dropdown_menu_text__text)
					return;
				}
			}
			me.elementMouseOver['dropdown_menu_text']=false;
			me._dropdown_menu_text.logicBlock_backgroundcolor();
		}
		me._dropdown_menu_text.ontouchend=function (e) {
			me.elementMouseOver['dropdown_menu_text']=false;
			me._dropdown_menu_text.logicBlock_backgroundcolor();
		}
		me._dropdown_menu_text.ggUpdatePosition=function (useTransition) {
		}
		me.__div.appendChild(me._dropdown_menu_text);
		el=me._dropdown_checkmark=document.createElement('div');
		els=me._dropdown_checkmark__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmVyc2lvbj0iMS4xIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAtMjQwIDMzMiAxMzAgMTMwOyIgaWQ9IkxheWVyXzEiIHZpZXdCb3g9Ii0yNDAgMzMyIDEzMCAxMzAiIHhtbDpzcGFjZT0icHJlc2Vydm'+
			'UiIHk9IjBweCIgeD0iMHB4Ij4KIDxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+JiN4ZDsKCS5zdDB7ZmlsbDojMDAwMDAwO30mI3hkOwoJLnN0MXtmaWxsOiNGRkZGRkY7fSYjeGQ7Cjwvc3R5bGU+CiA8ZyBpZD0iTGF5ZXJfMV8xXyIvPgogPGcgaWQ9IkxheWVyXzIiPgogIDxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0tMTIyLjEsMzQxLjVoLTEwNS44Yy0xLjQsMC0yLjYsMS4xLTIuNiwyLjZ2MTA1LjhjMCwxLjQsMS4xLDIuNiwyLjYsMi42aDEwNS44YzEuNCwwLDIuNi0xLjEsMi42LTIuNlYzNDQuMSYjeGQ7JiN4YTsmI3g5OyYjeDk7Qy0xMTkuNiwzNDIuNy0xMjAuNywzNDEuNS0xMjIuMSwzNDEuNXog'+
			'TS0xMzIuOCwzODEuN2wtNTAuOCw1MC44Yy0wLjMsMC4zLTAuOCwwLjUtMS4yLDAuNWMtMC41LDAtMC45LTAuMS0xLjMtMC41bC0zMS43LTMxLjgmI3hkOyYjeGE7JiN4OTsmI3g5O2MtMC43LTAuNy0wLjctMS43LDAtMi40bDEyLjUtMTIuNWMwLjctMC43LDEuNy0wLjcsMi40LDBsMTgsMThsMzcuMS0zNy4xYzAuNy0wLjcsMS43LTAuNywyLjQsMGwxMi41LDEyLjUmI3hkOyYjeGE7JiN4OTsmI3g5O0MtMTMyLjEsMzc5LjktMTMyLjEsMzgxLTEzMi44LDM4MS43eiIvPgogIDxwYXRoIGNsYXNzPSJzdDEiIGQ9Ik0tMTQ3LjcsMzY2LjhsLTM3LjEsMzcuMWwtMTgtMThjLTAuNy0wLjctMS43LTAuNy'+
			'0yLjQsMGwtMTIuNSwxMi41Yy0wLjcsMC43LTAuNywxLjcsMCwyLjRsMzEuNywzMS44JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC4zLDAuMywwLjgsMC41LDEuMywwLjVjMC40LDAsMC45LTAuMiwxLjItMC41bDUwLjgtNTAuOWMwLjctMC43LDAuNy0xLjcsMC0yLjRsLTEyLjUtMTIuNUMtMTQ1LjksMzY2LjEtMTQ3LDM2Ni4xLTE0Ny43LDM2Ni44eiIvPgogPC9nPgo8L3N2Zz4K';
		me._dropdown_checkmark__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Dropdown Checkmark";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 20px;';
		hs+='left : 1px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 20px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._dropdown_checkmark.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._dropdown_checkmark.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.nodeVisited(me._dropdown_checkmark.ggElementNodeId()) == true)) || 
				((me._dropdown_checkmark.ggIsActive() == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._dropdown_checkmark.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._dropdown_checkmark.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._dropdown_checkmark.style[domTransition]='opacity 0s';
				if (me._dropdown_checkmark.ggCurrentLogicStateAlpha == 0) {
					me._dropdown_checkmark.style.visibility=me._dropdown_checkmark.ggVisible?'inherit':'hidden';
					me._dropdown_checkmark.style.opacity=1;
				}
				else {
					me._dropdown_checkmark.style.visibility="hidden";
					me._dropdown_checkmark.style.opacity=0;
				}
			}
		}
		me._dropdown_checkmark.ggUpdatePosition=function (useTransition) {
		}
		me.__div.appendChild(me._dropdown_checkmark);
	};
	me.addSkin();
	var style = document.createElement('style');
	style.type = 'text/css';
	style.appendChild(document.createTextNode('.ggskin { font-family: Verdana, Arial, Helvetica, sans-serif; font-size: 14px;}'));
	document.head.appendChild(style);
	player.addListener('mouseover', function(args) { me._dropdown_cloner0.callChildLogicBlocks_mouseover();me._dropdown_cloner.callChildLogicBlocks_mouseover(); });
	player.addListener('changenode', function(args) { me._dropdown_cloner0.callChildLogicBlocks_active();me._dropdown_cloner.callChildLogicBlocks_active(); });
	player.addListener('changevisitednodes', function(args) { me._dropdown_cloner.callChildLogicBlocks_changevisitednodes(); });
	me.skinTimerEvent();
};