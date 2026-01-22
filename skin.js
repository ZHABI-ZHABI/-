// Garden Gnome Software - Skin
// Pano2VR 6.1.10/18007
// Filename: skin_1.ggsk
// Generated 2026-01-22T18:41:06

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
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0naXNvLTg4NTktMSc/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgdmVyc2lvbj0iMS4xIiB3aWR0aD0iNTEycHgiIGhlaWdodD0iNTEycHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeD0iMHB4IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeT0iMHB4IiBpZD0iQ2FwYV8xIiB4bWw6c3BhY2U9InByZXNlcnZlIiB2aWV3Qm94PSIwIDAgMzg0Ljk3IDM4NC'+
			'45NyIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMzg0Ljk3IDM4NC45NzsiPgogPGc+CiAgPGcgaWQ9IkNoZXZyb25fTGVmdF9DaXJjbGUiPgogICA8cGF0aCBkPSJNMTkyLjQ4NSwwQzg2LjE4NSwwLDAsODYuMTg1LDAsMTkyLjQ4NUMwLDI5OC43OTcsODYuMTczLDM4NC45NywxOTIuNDg1LDM4NC45N1MzODQuOTcsMjk4Ljc5NywzODQuOTcsMTkyLjQ4NSAgICBDMzg0Ljk3LDg2LjE4NSwyOTguNzk3LDAsMTkyLjQ4NSwweiBNMTkyLjQ4NSwzNjEuMjgyYy05Mi44NzQsMC0xNjguNDI0LTc1LjkyMy0xNjguNDI0LTE2OC43OTdTOTkuNjExLDI0LjA2MSwxOTIuNDg1LDI0LjA2MSAg'+
			'ICBzMTY4LjQyNCw3NS41NSwxNjguNDI0LDE2OC40MjRTMjg1LjM1OSwzNjEuMjgyLDE5Mi40ODUsMzYxLjI4MnoiIGZpbGw9IiNGRkZGRkYiLz4KICAgPHBhdGggZD0iTTIzNS44NzgsOTkuODc2Yy00LjcwNC00Ljc0LTEyLjMxOS00Ljc0LTE3LjAxMSwwbC04My4wMDksODQuMmMtNC41NzIsNC42Mi00LjU4NCwxMi41NiwwLDE3LjE5MWw4Mi45OTcsODQuMiAgICBjNC43MDQsNC43NCwxMi4zMTksNC43NCwxNy4wMTEsMGM0LjcwNC00Ljc1Miw0LjcwNC0xMi40MzksMC0xNy4xOTFsLTc0LjUyOC03NS42MWw3NC41NC03NS42MSAgICBDMjQwLjU3LDExMi4zMTUsMjQwLjU3LDEwNC42MjgsMjM1Lj'+
			'g3OCw5OS44NzZ6IiBmaWxsPSIjRkZGRkZGIi8+CiAgPC9nPgogIDxnLz4KICA8Zy8+CiAgPGcvPgogIDxnLz4KICA8Zy8+CiAgPGcvPgogPC9nPgogPGcvPgogPGcvPgogPGcvPgogPGcvPgogPGcvPgogPGcvPgogPGcvPgogPGcvPgogPGcvPgogPGcvPgogPGcvPgogPGcvPgogPGcvPgogPGcvPgogPGcvPgo8L3N2Zz4K';
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
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0naXNvLTg4NTktMSc/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgdmVyc2lvbj0iMS4xIiB3aWR0aD0iNTEycHgiIGhlaWdodD0iNTEycHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeD0iMHB4IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeT0iMHB4IiBpZD0iQ2FwYV8xIiB4bWw6c3BhY2U9InByZXNlcnZlIiB2aWV3Qm94PSIwIDAgMzg0Ljk3IDM4NC'+
			'45NyIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMzg0Ljk3IDM4NC45NzsiPgogPGc+CiAgPGcgaWQ9IkNoZXZyb25fUmlnaHRfQ2lyY2xlIj4KICAgPHBhdGggZD0iTTE5Mi40ODUsMEM4Ni4xNzMsMCwwLDg2LjE3MywwLDE5Mi40ODVjMCwxMDYuMyw4Ni4xNzMsMTkyLjQ4NSwxOTIuNDg1LDE5Mi40ODVjMTA2LjMsMCwxOTIuNDg1LTg2LjE4NSwxOTIuNDg1LTE5Mi40ODUgICAgQzM4NC45Nyw4Ni4xNzMsMjk4Ljc4NSwwLDE5Mi40ODUsMHogTTE5Mi40ODUsMzYwLjkwOWMtOTIuODc0LDAtMTY4LjQyNC03NS41NS0xNjguNDI0LTE2OC40MjRTOTkuNjExLDIzLjY4OCwxOTIuNDg1'+
			'LDIzLjY4OCAgICBzMTY4LjQyNCw3NS45MjMsMTY4LjQyNCwxNjguNzk3UzI4NS4zNTksMzYwLjkwOSwxOTIuNDg1LDM2MC45MDl6IiBmaWxsPSIjRkZGRkZGIi8+CiAgIDxwYXRoIGQ9Ik0xNjYuMTE0LDk5LjUwM2MtNC43MDQtNC43NC0xMi4zMTktNC43NC0xNy4wMTEsMGMtNC43MDQsNC43NTItNC43MDQsMTIuNDM5LDAsMTcuMTkxbDc0LjUyOCw3NS42MWwtNzQuNTQsNzUuNjEgICAgYy00LjcwNCw0Ljc0LTQuNzA0LDEyLjQzOSwwLDE3LjE5MWM0LjcwNCw0Ljc0LDEyLjMxOSw0Ljc0LDE3LjAxMSwwbDgzLjAwOS04NC4yYzQuNTcyLTQuNjMyLDQuNTg0LTEyLjU2LDAtMTcuMTkxICAgIEwxNj'+
			'YuMTE0LDk5LjUwM3oiIGZpbGw9IiNGRkZGRkYiLz4KICA8L2c+CiAgPGcvPgogIDxnLz4KICA8Zy8+CiAgPGcvPgogIDxnLz4KICA8Zy8+CiA8L2c+CiA8Zy8+CiA8Zy8+CiA8Zy8+CiA8Zy8+CiA8Zy8+CiA8Zy8+CiA8Zy8+CiA8Zy8+CiA8Zy8+CiA8Zy8+CiA8Zy8+CiA8Zy8+CiA8Zy8+CiA8Zy8+CiA8Zy8+Cjwvc3ZnPgo=';
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
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0naXNvLTg4NTktMSc/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgdmVyc2lvbj0iMS4xIiB3aWR0aD0iNTEycHgiIGhlaWdodD0iNTEycHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeD0iMHB4IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeT0iMHB4IiBpZD0iQ2FwYV8xIiB4bWw6c3BhY2U9InByZXNlcnZlIiB2aWV3Qm94PSIwIDAgMzg0Ljk3IDM4NC'+
			'45NyIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMzg0Ljk3IDM4NC45NzsiPgogPGc+CiAgPGcgaWQ9IkNoZXZyb25fRG93bl9DaXJjbGUiPgogICA8cGF0aCBkPSJNMTkyLjQ4NSwwQzg2LjE4NSwwLDAsODYuMTczLDAsMTkyLjQ4NWMwLDEwNi4zLDg2LjE4NSwxOTIuNDg1LDE5Mi40ODUsMTkyLjQ4NSAgICBjMTA2LjMxMiwwLDE5Mi40ODUtODYuMTg1LDE5Mi40ODUtMTkyLjQ4NUMzODQuOTcsODYuMTczLDI5OC43OTcsMCwxOTIuNDg1LDB6IE0xOTIuNDg1LDM2MC45MDkgICAgYy05Mi44NzQsMC0xNjguNDI0LTc1LjU1LTE2OC40MjQtMTY4LjQyNFM5OS42MTEsMjQuMDYxLDE5'+
			'Mi40ODUsMjQuMDYxczE2OC43OTcsNzUuNTUsMTY4Ljc5NywxNjguNDI0ICAgIFMyODUuMzU5LDM2MC45MDksMTkyLjQ4NSwzNjAuOTA5eiIgZmlsbD0iI0ZGRkZGRiIvPgogICA8cGF0aCBkPSJNMjY4LjI3NiwxNDkuMDkybC03NS42MSw3NC41MjhsLTc1LjYxLTc0LjU0Yy00Ljc0LTQuNzA0LTEyLjQzOS00LjcwNC0xNy4xOTEsMGMtNC43NCw0LjcwNC00Ljc0LDEyLjMxOSwwLDE3LjAxMSAgICBsODQuMiw4My4wMDljNC42Miw0LjU3MiwxMi41Niw0LjU4NCwxNy4xOTEsMGw4NC4yLTgyLjk5N2M0Ljc0LTQuNzA0LDQuNzQtMTIuMzE5LDAtMTcuMDExICAgIEMyODAuNzE1LDE0NC40LDI3My4wMj'+
			'gsMTQ0LjQsMjY4LjI3NiwxNDkuMDkyeiIgZmlsbD0iI0ZGRkZGRiIvPgogIDwvZz4KICA8Zy8+CiAgPGcvPgogIDxnLz4KICA8Zy8+CiAgPGcvPgogIDxnLz4KIDwvZz4KIDxnLz4KIDxnLz4KIDxnLz4KIDxnLz4KIDxnLz4KIDxnLz4KIDxnLz4KIDxnLz4KIDxnLz4KIDxnLz4KIDxnLz4KIDxnLz4KIDxnLz4KIDxnLz4KIDxnLz4KPC9zdmc+Cg==';
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
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0naXNvLTg4NTktMSc/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgdmVyc2lvbj0iMS4xIiB3aWR0aD0iNTEycHgiIGhlaWdodD0iNTEycHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeD0iMHB4IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeT0iMHB4IiBpZD0iQ2FwYV8xIiB4bWw6c3BhY2U9InByZXNlcnZlIiB2aWV3Qm94PSIwIDAgMzg0Ljk3IDM4NC'+
			'45NyIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMzg0Ljk3IDM4NC45NzsiPgogPGc+CiAgPGcgaWQ9IkNoZXZyb25fVXBfQ2lyY2xlIj4KICAgPHBhdGggZD0iTTE5Mi40ODUsMEM4Ni4xNzMsMCwwLDg2LjE4NSwwLDE5Mi40ODVDMCwyOTguNzk3LDg2LjE3MywzODQuOTcsMTkyLjQ4NSwzODQuOTdjMTA2LjMsMCwxOTIuNDg1LTg2LjE3MywxOTIuNDg1LTE5Mi40ODUgICAgQzM4NC45Nyw4Ni4xODUsMjk4Ljc4NSwwLDE5Mi40ODUsMHogTTE5Mi40ODUsMzYwLjkwOWMtOTIuODc0LDAtMTY4Ljc5Ny03NS41NS0xNjguNzk3LTE2OC40MjRTOTkuNjExLDI0LjA2MSwxOTIuNDg1LDI0'+
			'LjA2MSAgICBzMTY4LjQyNCw3NS41NSwxNjguNDI0LDE2OC40MjRTMjg1LjM1OSwzNjAuOTA5LDE5Mi40ODUsMzYwLjkwOXoiIGZpbGw9IiNGRkZGRkYiLz4KICAgPHBhdGggZD0iTTIwMC44OTQsMTM1Ljg1OGMtNC42Mi00LjU3Mi0xMi41Ni00LjU4NC0xNy4xOTEsMGwtODQuMiw4Mi45OTdjLTQuNzQsNC43MDQtNC43NCwxMi4zMTksMCwxNy4wMTEgICAgYzQuNzUyLDQuNzA0LDEyLjQzOSw0LjcwNCwxNy4xOTEsMGw3NS42MS03NC41MjhsNzUuNjEsNzQuNTRjNC43NCw0LjcwNCwxMi40MzksNC43MDQsMTcuMTkxLDBjNC43NC00LjcwNCw0Ljc0LTEyLjMxOSwwLTE3LjAxMSAgICBMMjAwLjg5NC'+
			'wxMzUuODU4eiIgZmlsbD0iI0ZGRkZGRiIvPgogIDwvZz4KICA8Zy8+CiAgPGcvPgogIDxnLz4KICA8Zy8+CiAgPGcvPgogIDxnLz4KIDwvZz4KIDxnLz4KIDxnLz4KIDxnLz4KIDxnLz4KIDxnLz4KIDxnLz4KIDxnLz4KIDxnLz4KIDxnLz4KIDxnLz4KIDxnLz4KIDxnLz4KIDxnLz4KIDxnLz4KIDxnLz4KPC9zdmc+Cg==';
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
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0naXNvLTg4NTktMSc/Pgo8c3ZnIHZlcnNpb249IjEuMSIgd2lkdGg9IjUxMnB4IiBoZWlnaHQ9IjUxMnB4IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSIwIDAgMjQ0LjQ4NyAyNDQuNDg3IiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAyNDQuNDg3IDI0NC40ODciPgogPGc+CiAgPGc+CiAgIDxwYXRoIGQ9Im0yNDEuODc3LDIzMC4xMzFsLTcyLjkyOS03Mi45MjljMTMuOTczLTE2LjY3IDIyLjQ2NS0zOC4wMDQgMjIuNDY1LTYxLj'+
			'A2MSAwLTUyLjIwNC00My41MDMtOTUuNzA3LTk1LjcwNy05NS43MDdzLTk1LjcwNiw0My41MDQtOTUuNzA2LDk1LjcwOCA0My41MDMsOTUuNzA3IDk1LjcwNyw5NS43MDdjMjIuNjIxLDAgNDMuNTczLTguMTc5IDYwLjEwNC0yMS42ODJsNzIuMTQ1LDcyLjE0NWMxLjc0LDEuNzQgMy40OCwxLjc0IDYuOTYsMS43NHM1LjIyLDAgNi45Ni0xLjc0YzMuNDgyLTMuNDggMy40ODItOC43IDAuMDAxLTEyLjE4MXptLTE0Ni4xNy01NS42ODNjLTQzLjUwMywwLTc4LjMwNS0zNC44MDItNzguMzA1LTc4LjMwNXMzNC44MDItNzguMzA1IDc4LjMwNS03OC4zMDUgNzguMzA1LDM0LjgwMiA3OC4zMDUsNzguMzA1'+
			'LTM0LjgwMiw3OC4zMDUtNzguMzA1LDc4LjMwNXoiIGZpbGw9IiNGRkZGRkYiLz4KICAgPHBhdGggZD0ibTEyMS44MDksODcuNDQyaC0xNy40MDF2LTE3LjQwMWMwLTUuMjItMy40OC04LjcwMS04LjcwMS04LjcwMS01LjIyLDAtOC43MDEsMy40OC04LjcwMSw4LjcwMXYxNy40MDFoLTE3LjQwMWMtNS4yMiwwLTguNzAxLDMuNDgtOC43MDEsOC43MDFzMy40OCw4LjcwMSA4LjcwMSw4LjcwMWgxNy40MDF2MTcuNDAxYzAsNS4yMiAzLjQ4LDguNzAxIDguNzAxLDguNzAxIDUuMjIsMCA4LjcwMS0zLjQ4IDguNzAxLTguNzAxdi0xNy40MDFoMTcuNDAxYzUuMjIsMCA4LjcwMS0zLjQ4IDguNzAxLTguNz'+
			'AxIDAtNS4yMjEtMy40ODEtOC43MDEtOC43MDEtOC43MDF6IiBmaWxsPSIjRkZGRkZGIi8+CiAgPC9nPgogPC9nPgo8L3N2Zz4K';
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
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0naXNvLTg4NTktMSc/Pgo8c3ZnIHZlcnNpb249IjEuMSIgd2lkdGg9IjUxMnB4IiBoZWlnaHQ9IjUxMnB4IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSIwIDAgMjQ0LjQ4NyAyNDQuNDg3IiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAyNDQuNDg3IDI0NC40ODciPgogPGc+CiAgPGc+CiAgIDxwYXRoIGQ9Im0yNDEuODc3LDIzMC4xMzFsLTcyLjkyOS03Mi45MjljMTMuOTczLTE2LjY3IDIyLjQ2NS0zOC4wMDQgMjIuNDY1LTYxLj'+
			'A2MSAwLTUyLjIwNC00My41MDMtOTUuNzA3LTk1LjcwNy05NS43MDdzLTk1LjcwNiw0My41MDQtOTUuNzA2LDk1LjcwOCA0My41MDMsOTUuNzA3IDk1LjcwNyw5NS43MDdjMjIuNjIxLDAgNDMuNTczLTguMTc5IDYwLjEwNC0yMS42ODJsNzIuMTQ1LDcyLjE0NWMxLjc0LDEuNzQgMy40OCwxLjc0IDYuOTYsMS43NHM1LjIyLDAgNi45Ni0xLjc0YzMuNDgyLTMuNDggMy40ODItOC43IDAuMDAxLTEyLjE4MXptLTE0Ni4xNy01NS42ODNjLTQzLjUwMywwLTc4LjMwNS0zNC44MDItNzguMzA1LTc4LjMwNXMzNC44MDItNzguMzA1IDc4LjMwNS03OC4zMDUgNzguMzA1LDM0LjgwMiA3OC4zMDUsNzguMzA1'+
			'LTM0LjgwMiw3OC4zMDUtNzguMzA1LDc4LjMwNXoiIGZpbGw9IiNGRkZGRkYiLz4KICAgPHBhdGggZD0ibTEyMS44MDksODcuNDQyaC01Mi4yMDRjLTUuMjIsMC04LjcwMSwzLjQ4LTguNzAxLDguNzAxczMuNDgsOC43MDEgOC43MDEsOC43MDFoNTIuMjA0YzUuMjIsMCA4LjcwMS0zLjQ4IDguNzAxLTguNzAxIDAtNS4yMjEtMy40ODEtOC43MDEtOC43MDEtOC43MDF6IiBmaWxsPSIjRkZGRkZGIi8+CiAgPC9nPgogPC9nPgo8L3N2Zz4K';
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
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0naXNvLTg4NTktMSc/Pgo8c3ZnIHZlcnNpb249IjEuMSIgd2lkdGg9IjUxMnB4IiBoZWlnaHQ9IjUxMnB4IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSIwIDAgMjYxLjAxOCAyNjEuMDE4IiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAyNjEuMDE4IDI2MS4wMTgiPgogPGc+CiAgPHBhdGggZD0ibTI1OC40MDgsMjQ2LjY2MmwtNTIuMjA0LTUyLjIwNHYtMzYuNTQzaDguNzAxYzEzLjkyMSwwIDI2LjEwMi0xMi4xODEgMjYuMTAyLT'+
			'I2LjEwMnYtNS4yMmMwLTEzLjkyMS0xMi4xODEtMjYuMTAyLTI2LjEwMi0yNi4xMDJoLTguNzAxdi03MS4zNDRjMC0xMy45MjEtMTIuMTgxLTI2LjEwMi0yNi4xMDItMjYuMTAyLTUuMjIsMC0xMC40NDEsMS43NC0xNS42NjEsNS4yMmwtNzkuNTIzLDY0LjkwNy03MC4xMjctNzAuMTI3Yy0zLjQ4LTMuNDgtOC43MDEtMy40OC0xMi4xODEtMS43NzYzNmUtMTVzLTMuNDgsOC43MDEgMCwxMi4xODFsNjAuOTA0LDYwLjkwNGgtMzMuMDYyYy01LjIyLDAtOC43MDEsMy40OC04LjcwMSw4LjcwMXY5Mi4yMjZjMCw1LjIyIDMuNDgsOC43MDEgOC43MDEsOC43MDFoNTAuODQ2bDgzLjE0Myw2Ny44NjVjMy40'+
			'OCwzLjQ4IDEwLjQ0MSw1LjIyIDE1LjY2MSw1LjIyIDEzLjkyMSwwIDI2LjEwMi0xMi4xODEgMjYuMTAyLTI0LjM2MnYtMTUuNjYxbDQwLjAyMyw0MC4wMjNjMS43NCwxLjc0IDUuMjIsMS43NCA2Ljk2LDEuNzQgMS43NCwwIDUuMjIsMCA1LjIyLTEuNzQgMy40ODEtMy40OCAzLjQ4MS04LjcgMC4wMDEtMTIuMTgxem0tNDMuNTAzLTEyOC43NjhjNS4yMiwwIDguNzAxLDMuNDggOC43MDEsOC43MDF2NS4yMmMwLDUuMjItMy40OCw4LjcwMS04LjcwMSw4LjcwMWgtOC43MDF2LTIyLjYyMWg4LjcwMXptLTQxLjc2My05Ny40NDhjNS4yMi0zLjQ4IDEzLjkyMS0xLjc0IDEzLjkyMSw2Ljk2djE0Ny45MW'+
			'wtOTAuOTU2LTkwLjk1NiA3Ny4wMzUtNjMuOTE0em0tOTkuMTg3LDE0Ny45MWgtMzQuODAydi03NC44MjVoMzQuODAydjc0LjgyNXptMTEzLjEwOCw2NC4zODVjMCw4LjcwMS04LjcwMSwxMC40NDEtMTMuOTIxLDYuOTZsLTgxLjc4Ni02Ny44NjV2LTY3Ljg2NWw5NS43MDcsOTUuNzA3djMzLjA2M3oiIGZpbGw9IiNGRkZGRkYiLz4KIDwvZz4KPC9zdmc+Cg==';
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
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0naXNvLTg4NTktMSc/Pgo8IURPQ1RZUEUgc3ZnIFBVQkxJQyAnLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4nICdodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQnPgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTYuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgdmVyc2lvbj0iMS4xIiB3aWR0aD0iNTEycHgiIGhlaWdodD0iNTEycHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeD0iMHB4IiB4bWxuczp4bG'+
			'luaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeT0iMHB4IiBpZD0iQ2FwYV8xIiB4bWw6c3BhY2U9InByZXNlcnZlIiB2aWV3Qm94PSIwIDAgNjEyIDYxMiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNjEyIDYxMjsiPgogPGc+CiAgPGcgaWQ9Il94MzJfXzMxXyI+CiAgIDxnPgogICAgPHBhdGggZD0iTTQ1NC4wMjcsMzguMjVoMTM4Ljg0OGMxMC41NTcsMCwxOS4xMjUtOC41NjgsMTkuMTI1LTE5LjEyNVM2MDMuNDMyLDAsNTkyLjg3NSwwaC0xOTEuMjUgICAgIEMzOTkuMzExLDAsMzgyLjUsMCwzODIuNSwxOS4xMjV2MTkxLjI1YzAsMTAuNTU3LDguNTY4LDE5LjEy'+
			'NSwxOS4xMjUsMTkuMTI1czE5LjEyNS04LjU2OCwxOS4xMjUtMTkuMTI1VjY0LjI0MSAgICAgYzkwLjQyMyw0Mi45NTUsMTUzLDEzNC45ODQsMTUzLDI0MS43NTljMCwxNDcuODc1LTExOS44NzUsMjY3Ljc1LTI2Ny43NSwyNjcuNzVDMTU4LjEyNSw1NzMuNzUsMzguMjUsNDUzLjg3NSwzOC4yNSwzMDYgICAgIGMwLTEzNC44NTEsOTkuNzk0LTI0Ni4xMDEsMjI5LjUtMjY0LjcwOVYyLjYzOUMxMTYuODU0LDIxLjQ5NywwLDE0OS45NzksMCwzMDZjMCwxNjkuMDA4LDEzNi45OTIsMzA2LDMwNiwzMDYgICAgIHMzMDYtMTM2Ljk5MiwzMDYtMzA2QzYxMiwxOTAuNzE0LDU0OC4xOTksOTAuNDIzLDQ1NC'+
			'4wMjcsMzguMjV6IiBmaWxsPSIjRkZGRkZGIi8+CiAgIDwvZz4KICA8L2c+CiA8L2c+CiA8Zy8+CiA8Zy8+CiA8Zy8+CiA8Zy8+CiA8Zy8+CiA8Zy8+CiA8Zy8+CiA8Zy8+CiA8Zy8+CiA8Zy8+CiA8Zy8+CiA8Zy8+CiA8Zy8+CiA8Zy8+CiA8Zy8+Cjwvc3ZnPgo=';
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
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0naXNvLTg4NTktMSc/Pgo8IURPQ1RZUEUgc3ZnIFBVQkxJQyAnLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4nICdodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQnPgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTYuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgdmVyc2lvbj0iMS4xIiB3aWR0aD0iNTEycHgiIGhlaWdodD0iNTEycHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeD0iMHB4IiB4bWxuczp4bG'+
			'luaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeT0iMHB4IiBpZD0iQ2FwYV8xIiB4bWw6c3BhY2U9InByZXNlcnZlIiB2aWV3Qm94PSIwIDAgNjEyIDYxMiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNjEyIDYxMjsiPgogPGc+CiAgPGcgaWQ9Il94MzZfIj4KICAgPGc+CiAgICA8cGF0aCBkPSJNMjQ4LjU0MiwzNDMuOTI5SDc4Ljg3OWMtMTAuNDUyLDAtMTguOTE3LDguNDI4LTE4LjkxNywxOC44NDJjMCwxMC4zOTUsOC40NjUsMTguODQsMTguOTE3LDE4Ljg0aDEyNS4zNTFMMCw1ODQuOTc5ICAgICBsMjYuNzUxLDI2LjYzOWwyMDQuMDE5LTIwMy4xOGwtMC41OTIs'+
			'MTIzLjgyMmMwLDEwLjM5NSw4LjQ2NSwxOC44NCwxOC45MTcsMTguODRjMTAuNDUyLDAsMTguOTE3LTguNDI2LDE4LjkxNy0xOC44NHYtMTY5LjUxICAgICBjMC01LjU4LTIuMzEyLTEwLjA5LTUuOTgxLTEzLjE4NkMyNTguNTczLDM0Ni4xMjYsMjUzLjgxNSwzNDMuOTI5LDI0OC41NDIsMzQzLjkyOXogTTUzMy4xNDEsMjMwLjM4OEg0MDcuNzlMNjEyLDI3LjAxOSAgICAgTDU4NS4yNDgsMC4zODJsLTIwNCwyMDMuMTc4bDAuNTkzLTEyMy44MjJjMC0xMC4zOTUtOC40NjUtMTguODQxLTE4LjkxNy0xOC44NDFzLTE4LjkxNyw4LjQyNy0xOC45MTcsMTguODQxdjE2OS41MSAgICAgYzAsNS41OCwyLj'+
			'MxMiwxMC4wODksNS45NjEsMTMuMTY2YzMuNDM5LDMuNDc4LDguMTc5LDUuNjc1LDEzLjQ3Miw1LjY3NWgxNjkuNjYyYzEwLjQ1MiwwLDE4LjkxOC04LjQyNywxOC45MTgtMTguODQxICAgICBDNTUyLjAzOCwyMzguODM0LDU0My41NzMsMjMwLjM4OCw1MzMuMTQxLDIzMC4zODh6IiBmaWxsPSIjRkZGRkZGIi8+CiAgIDwvZz4KICA8L2c+CiA8L2c+CiA8Zy8+CiA8Zy8+CiA8Zy8+CiA8Zy8+CiA8Zy8+CiA8Zy8+CiA8Zy8+CiA8Zy8+CiA8Zy8+CiA8Zy8+CiA8Zy8+CiA8Zy8+CiA8Zy8+CiA8Zy8+CiA8Zy8+Cjwvc3ZnPgo=';
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
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0naXNvLTg4NTktMSc/Pgo8IURPQ1RZUEUgc3ZnIFBVQkxJQyAnLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4nICdodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQnPgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTYuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgdmVyc2lvbj0iMS4xIiB3aWR0aD0iNTEycHgiIGhlaWdodD0iNTEycHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeD0iMHB4IiB4bWxuczp4bG'+
			'luaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeT0iMHB4IiBpZD0iQ2FwYV8xIiB4bWw6c3BhY2U9InByZXNlcnZlIiB2aWV3Qm94PSIwIDAgNjEyIDYxMiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNjEyIDYxMjsiPgogPGc+CiAgPGcgaWQ9Il94MzVfIj4KICAgPGc+CiAgICA8cGF0aCBkPSJNMjQzLjk1OCwzNDAuMTc3TDM3LjY1Nyw1NDYuNDk3TDM4LjI1LDQyMC43NWMwLTEwLjU1Ny04LjU2OC0xOS4xMjUtMTkuMTI1LTE5LjEyNVMwLDQxMC4xOTMsMCw0MjAuNzV2MTcyLjEyNSAgICAgYzAsNS42NjEsMi4zMzMsMTAuMjMyLDYuMDQzLDEzLjM2OEM5LjUwNSw2'+
			'MDkuNzgxLDE0LjMyNSw2MTIsMTkuNjgsNjEyaDE3MS41N2MxMC41NTcsMCwxOS4xMjUtOC41NjcsMTkuMTI1LTE5LjEyNSAgICAgYzAtMTAuNTU3LTguNTY4LTE5LjEyNS0xOS4xMjUtMTkuMTI1SDY0LjQ3bDIwNi41MzEtMjA2LjUxMkwyNDMuOTU4LDM0MC4xNzd6IE02MDUuOTU2LDUuNzU3QzYwMi40OTUsMi4yMTksNTk3LjY3NiwwLDU5Mi4zNCwwICAgICBINDIwLjc1Yy0xMC41NTcsMC0xOS4xMjUsOC41NjgtMTkuMTI1LDE5LjEyNWMwLDEwLjU1Nyw4LjU2OCwxOS4xMjUsMTkuMTI1LDE5LjEyNWgxMjYuNzYxTDM0MC45OTksMjQ0Ljc4MWwyNy4wNDIsMjcuMDQyICAgICBsMjA2LjMyMS0yMD'+
			'YuMzJMNTczLjc1LDE5MS4yNWMwLDEwLjU1Nyw4LjU2OCwxOS4xMjUsMTkuMTI1LDE5LjEyNVM2MTIsMjAxLjgwNyw2MTIsMTkxLjI1VjE5LjEyNSAgICAgQzYxMiwxMy40NjQsNjA5LjY2Nyw4Ljg5NCw2MDUuOTU2LDUuNzU3eiIgZmlsbD0iI0ZGRkZGRiIvPgogICA8L2c+CiAgPC9nPgogPC9nPgogPGcvPgogPGcvPgogPGcvPgogPGcvPgogPGcvPgogPGcvPgogPGcvPgogPGcvPgogPGcvPgogPGcvPgogPGcvPgogPGcvPgogPGcvPgogPGcvPgogPGcvPgo8L3N2Zz4K';
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
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0naXNvLTg4NTktMSc/Pgo8IURPQ1RZUEUgc3ZnIFBVQkxJQyAnLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4nICdodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQnPgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTYuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgdmVyc2lvbj0iMS4xIiB3aWR0aD0iNTEycHgiIGhlaWdodD0iNTEycHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeD0iMHB4IiB4bWxuczp4bG'+
			'luaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeT0iMHB4IiBpZD0iQ2FwYV8xIiB4bWw6c3BhY2U9InByZXNlcnZlIiB2aWV3Qm94PSIwIDAgNjEyLjI1IDYxMi4yNSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNjEyLjI1IDYxMi4yNTsiPgogPGc+CiAgPGc+CiAgIDxwb2x5Z29uIHBvaW50cz0iMC4xMjUsMjM2LjcwNSAwLjEyNSwyNzguNDMyIDMwNi4xMjUsNDEuNzI3IDYxMi4xMjUsMjc4LjQzMiA2MTIuMTI1LDIzNi43MDUgMzA2LjEyNSwwICAgIiBmaWxsPSIjRkZGRkZGIi8+CiAgIDxwb2x5Z29uIHBvaW50cz0iNTU2LjQ4OCwxNjMuMTgxIDU1Ni40ODgsMTQu'+
			'MTU5IDQ3My4wMzQsMTQuMTU5IDQ3My4wMzQsOTcuNjE0IDUwMC44NTMsMTIxLjg3MSA1MDAuODUzLDQxLjk3OCA1MjguNjcxLDQxLjk3OCAgICAgNTI4LjY3MSwxMzkuMzQxICAgIiBmaWxsPSIjRkZGRkZGIi8+CiAgIDxwb2x5Z29uIHBvaW50cz0iNDE4LjIwNCw1ODQuNDMyIDQxOC4yMDQsNjEyLjI1IDU1Ni42ODQsNjEyLjI1IDU1Ni42ODQsMjc0Ljg0MyA1MjguODY1LDI1Mi42MTcgNTI4Ljg2NSw1ODQuNDMyICAgIiBmaWxsPSIjRkZGRkZGIi8+CiAgIDxwYXRoIGQ9Ik0yMjIuNjcsNjEyaDE2Ni45MDlWMzMzLjgxOEgyMjIuNjdWNjEyeiBNMjUwLjQ4OSwzNjEuNjM2aDExMS4yNzN2MjIyLj'+
			'U0NkgyNTAuNDg5VjM2MS42MzZ6IiBmaWxsPSIjRkZGRkZGIi8+CiAgIDxwb2x5Z29uIHBvaW50cz0iNTUuNzYxLDI3NS45IDU1Ljc2MSw2MTIuMjUgMTk0LjI5Niw2MTIuMjUgMTk0LjI5Niw1ODQuNDMyIDgzLjU4LDU4NC40MzIgODMuNTgsMjUzLjM2OCAgICIgZmlsbD0iI0ZGRkZGRiIvPgogIDwvZz4KIDwvZz4KIDxnLz4KIDxnLz4KIDxnLz4KIDxnLz4KIDxnLz4KIDxnLz4KIDxnLz4KIDxnLz4KIDxnLz4KIDxnLz4KIDxnLz4KIDxnLz4KIDxnLz4KIDxnLz4KIDxnLz4KPC9zdmc+Cg==';
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
		player.addListener('sizechanged', function() {
			me.updateSize(me.divSkin);
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
	me.addSkin();
	var style = document.createElement('style');
	style.type = 'text/css';
	style.appendChild(document.createTextNode('.ggskin { font-family: Verdana, Arial, Helvetica, sans-serif; font-size: 14px;}'));
	document.head.appendChild(style);
	me.skinTimerEvent();
};