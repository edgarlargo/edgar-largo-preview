"use strict";(()=>{var vh=0,Lc=1,Mh=2;var Vl=1,Sh=2,Tn=3,pn=0,Me=1,Cn=2,dn=0,Yn=1,Dc=2,Uc=3,Nc=4,bh=5,ci=100,wh=101,Ah=102,Th=103,Eh=104,Ch=200,Rh=201,Ph=202,Ih=203,Da=204,Ua=205,Lh=206,Dh=207,Uh=208,Nh=209,Fh=210,Oh=211,Bh=212,zh=213,kh=214,Na=0,Fa=1,Oa=2,Hi=3,Ba=4,za=5,ka=6,Va=7,Gl=0,Vh=1,Gh=2,fn=0,Hh=1,Wh=2,Xh=3,qh=4,Yh=5,Zh=6,Jh=7;var Hl=300,Wi=301,Xi=302,Ga=303,Ha=304,Yr=306,Wa=1e3,hi=1001,Xa=1002,$e=1003,$h=1004;var Os=1005;var qe=1006,ta=1007;var ui=1008;var Ln=1009,Wl=1010,Xl=1011,Ss=1012,cc=1013,di=1014,Pn=1015,gi=1016,lc=1017,hc=1018,qi=1020,ql=35902,Yl=1021,Zl=1022,Ye=1023,Jl=1024,$l=1025,ki=1026,Yi=1027,Kl=1028,uc=1029,Ql=1030,dc=1031;var fc=1033,hr=33776,ur=33777,dr=33778,fr=33779,qa=35840,Ya=35841,Za=35842,Ja=35843,$a=36196,Ka=37492,Qa=37496,ja=37808,to=37809,eo=37810,no=37811,io=37812,so=37813,ro=37814,ao=37815,oo=37816,co=37817,lo=37818,ho=37819,uo=37820,fo=37821,pr=36492,po=36494,mo=36495,jl=36283,go=36284,_o=36285,xo=36286;var gr=2300,yo=2301,ea=2302,Fc=2400,Oc=2401,Bc=2402;var Kh=3200,Qh=3201;var th=0,jh=1,Xn="",Be="srgb",_n="srgb-linear",pc="display-p3",Zr="display-p3-linear",_r="linear",ae="srgb",xr="rec709",yr="p3";var bi=7680;var zc=519,tu=512,eu=513,nu=514,eh=515,iu=516,su=517,ru=518,au=519,kc=35044,nh=35048;var Vc="300 es",In=2e3,vr=2001,$n=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let s=this._listeners[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},Ee=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Gc=1234567,_s=Math.PI/180,bs=180/Math.PI;function _i(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ee[i&255]+Ee[i>>8&255]+Ee[i>>16&255]+Ee[i>>24&255]+"-"+Ee[t&255]+Ee[t>>8&255]+"-"+Ee[t>>16&15|64]+Ee[t>>24&255]+"-"+Ee[e&63|128]+Ee[e>>8&255]+"-"+Ee[e>>16&255]+Ee[e>>24&255]+Ee[n&255]+Ee[n>>8&255]+Ee[n>>16&255]+Ee[n>>24&255]).toLowerCase()}function ve(i,t,e){return Math.max(t,Math.min(e,i))}function mc(i,t){return(i%t+t)%t}function ou(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function cu(i,t,e){return i!==t?(e-i)/(t-i):0}function xs(i,t,e){return(1-e)*i+e*t}function lu(i,t,e,n){return xs(i,t,1-Math.exp(-e*n))}function hu(i,t=1){return t-Math.abs(mc(i,t*2)-t)}function uu(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function du(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function fu(i,t){return i+Math.floor(Math.random()*(t-i+1))}function pu(i,t){return i+Math.random()*(t-i)}function mu(i){return i*(.5-Math.random())}function gu(i){i!==void 0&&(Gc=i);let t=Gc+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function _u(i){return i*_s}function xu(i){return i*bs}function yu(i){return(i&i-1)===0&&i!==0}function vu(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Mu(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Su(i,t,e,n,s){let r=Math.cos,a=Math.sin,o=r(e/2),c=a(e/2),l=r((t+n)/2),h=a((t+n)/2),d=r((t-n)/2),f=a((t-n)/2),m=r((n-t)/2),y=a((n-t)/2);switch(s){case"XYX":i.set(o*h,c*d,c*f,o*l);break;case"YZY":i.set(c*f,o*h,c*d,o*l);break;case"ZXZ":i.set(c*d,c*f,o*h,o*l);break;case"XZX":i.set(o*h,c*y,c*m,o*l);break;case"YXY":i.set(c*m,o*h,c*y,o*l);break;case"ZYZ":i.set(c*y,c*m,o*h,o*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Oi(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Le(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var ih={DEG2RAD:_s,RAD2DEG:bs,generateUUID:_i,clamp:ve,euclideanModulo:mc,mapLinear:ou,inverseLerp:cu,lerp:xs,damp:lu,pingpong:hu,smoothstep:uu,smootherstep:du,randInt:fu,randFloat:pu,randFloatSpread:mu,seededRandom:gu,degToRad:_u,radToDeg:xu,isPowerOfTwo:yu,ceilPowerOfTwo:vu,floorPowerOfTwo:Mu,setQuaternionFromProperEuler:Su,normalize:Le,denormalize:Oi},ft=class i{constructor(t=0,e=0){i.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(ve(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Gt=class i{constructor(t,e,n,s,r,a,o,c,l){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,c,l)}set(t,e,n,s,r,a,o,c,l){let h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=c,h[6]=n,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],h=n[4],d=n[7],f=n[2],m=n[5],y=n[8],g=s[0],p=s[3],u=s[6],S=s[1],_=s[4],M=s[7],N=s[2],R=s[5],P=s[8];return r[0]=a*g+o*S+c*N,r[3]=a*p+o*_+c*R,r[6]=a*u+o*M+c*P,r[1]=l*g+h*S+d*N,r[4]=l*p+h*_+d*R,r[7]=l*u+h*M+d*P,r[2]=f*g+m*S+y*N,r[5]=f*p+m*_+y*R,r[8]=f*u+m*M+y*P,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8];return e*a*h-e*o*l-n*r*h+n*o*c+s*r*l-s*a*c}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8],d=h*a-o*l,f=o*c-h*r,m=l*r-a*c,y=e*d+n*f+s*m;if(y===0)return this.set(0,0,0,0,0,0,0,0,0);let g=1/y;return t[0]=d*g,t[1]=(s*l-h*n)*g,t[2]=(o*n-s*a)*g,t[3]=f*g,t[4]=(h*e-s*c)*g,t[5]=(s*r-o*e)*g,t[6]=m*g,t[7]=(n*c-l*e)*g,t[8]=(a*e-n*r)*g,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+t,-s*l,s*c,-s*(-l*a+c*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(na.makeScale(t,e)),this}rotate(t){return this.premultiply(na.makeRotation(-t)),this}translate(t,e){return this.premultiply(na.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},na=new Gt;function sh(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Mr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function bu(){let i=Mr("canvas");return i.style.display="block",i}var Hc={};function mr(i){i in Hc||(Hc[i]=!0,console.warn(i))}function wu(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function Au(i){let t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Tu(i){let t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var Wc=new Gt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Xc=new Gt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),us={[_n]:{transfer:_r,primaries:xr,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i,fromReference:i=>i},[Be]:{transfer:ae,primaries:xr,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[Zr]:{transfer:_r,primaries:yr,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.applyMatrix3(Xc),fromReference:i=>i.applyMatrix3(Wc)},[pc]:{transfer:ae,primaries:yr,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.convertSRGBToLinear().applyMatrix3(Xc),fromReference:i=>i.applyMatrix3(Wc).convertLinearToSRGB()}},Eu=new Set([_n,Zr]),se={enabled:!0,_workingColorSpace:_n,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!Eu.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,t,e){if(this.enabled===!1||t===e||!t||!e)return i;let n=us[t].toReference,s=us[e].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,t){return this.convert(i,this._workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this._workingColorSpace)},getPrimaries:function(i){return us[i].primaries},getTransfer:function(i){return i===Xn?_r:us[i].transfer},getLuminanceCoefficients:function(i,t=this._workingColorSpace){return i.fromArray(us[t].luminanceCoefficients)}};function Vi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ia(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var wi,vo=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{wi===void 0&&(wi=Mr("canvas")),wi.width=t.width,wi.height=t.height;let n=wi.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=wi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Mr("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Vi(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Vi(e[n]/255)*255):e[n]=Vi(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Cu=0,Sr=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Cu++}),this.uuid=_i(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(sa(s[a].image)):r.push(sa(s[a]))}else r=sa(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function sa(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?vo.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Ru=0,Ke=class i extends $n{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=hi,s=hi,r=qe,a=ui,o=Ye,c=Ln,l=i.DEFAULT_ANISOTROPY,h=Xn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ru++}),this.uuid=_i(),this.name="",this.source=new Sr(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new ft(0,0),this.repeat=new ft(1,1),this.center=new ft(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Gt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Hl)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Wa:t.x=t.x-Math.floor(t.x);break;case hi:t.x=t.x<0?0:1;break;case Xa:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Wa:t.y=t.y-Math.floor(t.y);break;case hi:t.y=t.y<0?0:1;break;case Xa:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Ke.DEFAULT_IMAGE=null;Ke.DEFAULT_MAPPING=Hl;Ke.DEFAULT_ANISOTROPY=1;var de=class i{constructor(t=0,e=0,n=0,s=1){i.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,c=t.elements,l=c[0],h=c[4],d=c[8],f=c[1],m=c[5],y=c[9],g=c[2],p=c[6],u=c[10];if(Math.abs(h-f)<.01&&Math.abs(d-g)<.01&&Math.abs(y-p)<.01){if(Math.abs(h+f)<.1&&Math.abs(d+g)<.1&&Math.abs(y+p)<.1&&Math.abs(l+m+u-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let _=(l+1)/2,M=(m+1)/2,N=(u+1)/2,R=(h+f)/4,P=(d+g)/4,F=(y+p)/4;return _>M&&_>N?_<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(_),s=R/n,r=P/n):M>N?M<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),n=R/s,r=F/s):N<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(N),n=P/r,s=F/r),this.set(n,s,r,e),this}let S=Math.sqrt((p-y)*(p-y)+(d-g)*(d-g)+(f-h)*(f-h));return Math.abs(S)<.001&&(S=1),this.x=(p-y)/S,this.y=(d-g)/S,this.z=(f-h)/S,this.w=Math.acos((l+m+u-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Mo=class extends $n{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new de(0,0,t,e),this.scissorTest=!1,this.viewport=new de(0,0,t,e);let s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:qe,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new Ke(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new Sr(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},an=class extends Mo{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},br=class extends Ke{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=$e,this.minFilter=$e,this.wrapR=hi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var So=class extends Ke{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=$e,this.minFilter=$e,this.wrapR=hi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var mn=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let c=n[s+0],l=n[s+1],h=n[s+2],d=n[s+3],f=r[a+0],m=r[a+1],y=r[a+2],g=r[a+3];if(o===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=d;return}if(o===1){t[e+0]=f,t[e+1]=m,t[e+2]=y,t[e+3]=g;return}if(d!==g||c!==f||l!==m||h!==y){let p=1-o,u=c*f+l*m+h*y+d*g,S=u>=0?1:-1,_=1-u*u;if(_>Number.EPSILON){let N=Math.sqrt(_),R=Math.atan2(N,u*S);p=Math.sin(p*R)/N,o=Math.sin(o*R)/N}let M=o*S;if(c=c*p+f*M,l=l*p+m*M,h=h*p+y*M,d=d*p+g*M,p===1-o){let N=1/Math.sqrt(c*c+l*l+h*h+d*d);c*=N,l*=N,h*=N,d*=N}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,s,r,a){let o=n[s],c=n[s+1],l=n[s+2],h=n[s+3],d=r[a],f=r[a+1],m=r[a+2],y=r[a+3];return t[e]=o*y+h*d+c*m-l*f,t[e+1]=c*y+h*f+l*d-o*m,t[e+2]=l*y+h*m+o*f-c*d,t[e+3]=h*y-o*d-c*f-l*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,c=Math.sin,l=o(n/2),h=o(s/2),d=o(r/2),f=c(n/2),m=c(s/2),y=c(r/2);switch(a){case"XYZ":this._x=f*h*d+l*m*y,this._y=l*m*d-f*h*y,this._z=l*h*y+f*m*d,this._w=l*h*d-f*m*y;break;case"YXZ":this._x=f*h*d+l*m*y,this._y=l*m*d-f*h*y,this._z=l*h*y-f*m*d,this._w=l*h*d+f*m*y;break;case"ZXY":this._x=f*h*d-l*m*y,this._y=l*m*d+f*h*y,this._z=l*h*y+f*m*d,this._w=l*h*d-f*m*y;break;case"ZYX":this._x=f*h*d-l*m*y,this._y=l*m*d+f*h*y,this._z=l*h*y-f*m*d,this._w=l*h*d+f*m*y;break;case"YZX":this._x=f*h*d+l*m*y,this._y=l*m*d+f*h*y,this._z=l*h*y-f*m*d,this._w=l*h*d-f*m*y;break;case"XZY":this._x=f*h*d-l*m*y,this._y=l*m*d-f*h*y,this._z=l*h*y+f*m*d,this._w=l*h*d+f*m*y;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],c=e[9],l=e[2],h=e[6],d=e[10],f=n+o+d;if(f>0){let m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(h-c)*m,this._y=(r-l)*m,this._z=(a-s)*m}else if(n>o&&n>d){let m=2*Math.sqrt(1+n-o-d);this._w=(h-c)/m,this._x=.25*m,this._y=(s+a)/m,this._z=(r+l)/m}else if(o>d){let m=2*Math.sqrt(1+o-n-d);this._w=(r-l)/m,this._x=(s+a)/m,this._y=.25*m,this._z=(c+h)/m}else{let m=2*Math.sqrt(1+d-n-o);this._w=(a-s)/m,this._x=(r+l)/m,this._y=(c+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ve(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+a*o+s*l-r*c,this._y=s*h+a*c+r*o-n*l,this._z=r*h+a*l+n*c-s*o,this._w=a*h-n*o-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,s=this._y,r=this._z,a=this._w,o=a*t._w+n*t._x+s*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;let c=1-o*o;if(c<=Number.EPSILON){let m=1-e;return this._w=m*a+e*this._w,this._x=m*n+e*this._x,this._y=m*s+e*this._y,this._z=m*r+e*this._z,this.normalize(),this}let l=Math.sqrt(c),h=Math.atan2(l,o),d=Math.sin((1-e)*h)/l,f=Math.sin(e*h)/l;return this._w=a*d+this._w*f,this._x=n*d+this._x*f,this._y=s*d+this._y*f,this._z=r*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},G=class i{constructor(t=0,e=0,n=0){i.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(qc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(qc.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,c=t.w,l=2*(a*s-o*n),h=2*(o*e-r*s),d=2*(r*n-a*e);return this.x=e+c*l+a*d-o*h,this.y=n+c*h+o*l-r*d,this.z=s+c*d+r*h-a*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,c=e.z;return this.x=s*c-r*o,this.y=r*a-n*c,this.z=n*o-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return ra.copy(this).projectOnVector(t),this.sub(ra)}reflect(t){return this.sub(ra.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(ve(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},ra=new G,qc=new mn,Dn=class{constructor(t=new G(1/0,1/0,1/0),e=new G(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(nn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(nn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=nn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,nn):nn.fromBufferAttribute(r,a),nn.applyMatrix4(t.matrixWorld),this.expandByPoint(nn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Bs.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Bs.copy(n.boundingBox)),Bs.applyMatrix4(t.matrixWorld),this.union(Bs)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,nn),nn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ds),zs.subVectors(this.max,ds),Ai.subVectors(t.a,ds),Ti.subVectors(t.b,ds),Ei.subVectors(t.c,ds),zn.subVectors(Ti,Ai),kn.subVectors(Ei,Ti),ei.subVectors(Ai,Ei);let e=[0,-zn.z,zn.y,0,-kn.z,kn.y,0,-ei.z,ei.y,zn.z,0,-zn.x,kn.z,0,-kn.x,ei.z,0,-ei.x,-zn.y,zn.x,0,-kn.y,kn.x,0,-ei.y,ei.x,0];return!aa(e,Ai,Ti,Ei,zs)||(e=[1,0,0,0,1,0,0,0,1],!aa(e,Ai,Ti,Ei,zs))?!1:(ks.crossVectors(zn,kn),e=[ks.x,ks.y,ks.z],aa(e,Ai,Ti,Ei,zs))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,nn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(nn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(vn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),vn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),vn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),vn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),vn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),vn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),vn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),vn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(vn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},vn=[new G,new G,new G,new G,new G,new G,new G,new G],nn=new G,Bs=new Dn,Ai=new G,Ti=new G,Ei=new G,zn=new G,kn=new G,ei=new G,ds=new G,zs=new G,ks=new G,ni=new G;function aa(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){ni.fromArray(i,r);let o=s.x*Math.abs(ni.x)+s.y*Math.abs(ni.y)+s.z*Math.abs(ni.z),c=t.dot(ni),l=e.dot(ni),h=n.dot(ni);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}var Pu=new Dn,fs=new G,oa=new G,Kn=class{constructor(t=new G,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Pu.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;fs.subVectors(t,this.center);let e=fs.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(fs,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(oa.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(fs.copy(t.center).add(oa)),this.expandByPoint(fs.copy(t.center).sub(oa))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},Mn=new G,ca=new G,Vs=new G,Vn=new G,la=new G,Gs=new G,ha=new G,ws=class{constructor(t=new G,e=new G(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Mn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Mn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Mn.copy(this.origin).addScaledVector(this.direction,e),Mn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){ca.copy(t).add(e).multiplyScalar(.5),Vs.copy(e).sub(t).normalize(),Vn.copy(this.origin).sub(ca);let r=t.distanceTo(e)*.5,a=-this.direction.dot(Vs),o=Vn.dot(this.direction),c=-Vn.dot(Vs),l=Vn.lengthSq(),h=Math.abs(1-a*a),d,f,m,y;if(h>0)if(d=a*c-o,f=a*o-c,y=r*h,d>=0)if(f>=-y)if(f<=y){let g=1/h;d*=g,f*=g,m=d*(d+a*f+2*o)+f*(a*d+f+2*c)+l}else f=r,d=Math.max(0,-(a*f+o)),m=-d*d+f*(f+2*c)+l;else f=-r,d=Math.max(0,-(a*f+o)),m=-d*d+f*(f+2*c)+l;else f<=-y?(d=Math.max(0,-(-a*r+o)),f=d>0?-r:Math.min(Math.max(-r,-c),r),m=-d*d+f*(f+2*c)+l):f<=y?(d=0,f=Math.min(Math.max(-r,-c),r),m=f*(f+2*c)+l):(d=Math.max(0,-(a*r+o)),f=d>0?r:Math.min(Math.max(-r,-c),r),m=-d*d+f*(f+2*c)+l);else f=a>0?-r:r,d=Math.max(0,-(a*f+o)),m=-d*d+f*(f+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(ca).addScaledVector(Vs,f),m}intersectSphere(t,e){Mn.subVectors(t.center,this.origin);let n=Mn.dot(this.direction),s=Mn.dot(Mn)-n*n,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,c,l=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,f=this.origin;return l>=0?(n=(t.min.x-f.x)*l,s=(t.max.x-f.x)*l):(n=(t.max.x-f.x)*l,s=(t.min.x-f.x)*l),h>=0?(r=(t.min.y-f.y)*h,a=(t.max.y-f.y)*h):(r=(t.max.y-f.y)*h,a=(t.min.y-f.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),d>=0?(o=(t.min.z-f.z)*d,c=(t.max.z-f.z)*d):(o=(t.max.z-f.z)*d,c=(t.min.z-f.z)*d),n>c||o>s)||((o>n||n!==n)&&(n=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Mn)!==null}intersectTriangle(t,e,n,s,r){la.subVectors(e,t),Gs.subVectors(n,t),ha.crossVectors(la,Gs);let a=this.direction.dot(ha),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Vn.subVectors(this.origin,t);let c=o*this.direction.dot(Gs.crossVectors(Vn,Gs));if(c<0)return null;let l=o*this.direction.dot(la.cross(Vn));if(l<0||c+l>a)return null;let h=-o*Vn.dot(ha);return h<0?null:this.at(h/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ce=class i{constructor(t,e,n,s,r,a,o,c,l,h,d,f,m,y,g,p){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,c,l,h,d,f,m,y,g,p)}set(t,e,n,s,r,a,o,c,l,h,d,f,m,y,g,p){let u=this.elements;return u[0]=t,u[4]=e,u[8]=n,u[12]=s,u[1]=r,u[5]=a,u[9]=o,u[13]=c,u[2]=l,u[6]=h,u[10]=d,u[14]=f,u[3]=m,u[7]=y,u[11]=g,u[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,s=1/Ci.setFromMatrixColumn(t,0).length(),r=1/Ci.setFromMatrixColumn(t,1).length(),a=1/Ci.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){let f=a*h,m=a*d,y=o*h,g=o*d;e[0]=c*h,e[4]=-c*d,e[8]=l,e[1]=m+y*l,e[5]=f-g*l,e[9]=-o*c,e[2]=g-f*l,e[6]=y+m*l,e[10]=a*c}else if(t.order==="YXZ"){let f=c*h,m=c*d,y=l*h,g=l*d;e[0]=f+g*o,e[4]=y*o-m,e[8]=a*l,e[1]=a*d,e[5]=a*h,e[9]=-o,e[2]=m*o-y,e[6]=g+f*o,e[10]=a*c}else if(t.order==="ZXY"){let f=c*h,m=c*d,y=l*h,g=l*d;e[0]=f-g*o,e[4]=-a*d,e[8]=y+m*o,e[1]=m+y*o,e[5]=a*h,e[9]=g-f*o,e[2]=-a*l,e[6]=o,e[10]=a*c}else if(t.order==="ZYX"){let f=a*h,m=a*d,y=o*h,g=o*d;e[0]=c*h,e[4]=y*l-m,e[8]=f*l+g,e[1]=c*d,e[5]=g*l+f,e[9]=m*l-y,e[2]=-l,e[6]=o*c,e[10]=a*c}else if(t.order==="YZX"){let f=a*c,m=a*l,y=o*c,g=o*l;e[0]=c*h,e[4]=g-f*d,e[8]=y*d+m,e[1]=d,e[5]=a*h,e[9]=-o*h,e[2]=-l*h,e[6]=m*d+y,e[10]=f-g*d}else if(t.order==="XZY"){let f=a*c,m=a*l,y=o*c,g=o*l;e[0]=c*h,e[4]=-d,e[8]=l*h,e[1]=f*d+g,e[5]=a*h,e[9]=m*d-y,e[2]=y*d-m,e[6]=o*h,e[10]=g*d+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Iu,t,Lu)}lookAt(t,e,n){let s=this.elements;return We.subVectors(t,e),We.lengthSq()===0&&(We.z=1),We.normalize(),Gn.crossVectors(n,We),Gn.lengthSq()===0&&(Math.abs(n.z)===1?We.x+=1e-4:We.z+=1e-4,We.normalize(),Gn.crossVectors(n,We)),Gn.normalize(),Hs.crossVectors(We,Gn),s[0]=Gn.x,s[4]=Hs.x,s[8]=We.x,s[1]=Gn.y,s[5]=Hs.y,s[9]=We.y,s[2]=Gn.z,s[6]=Hs.z,s[10]=We.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],h=n[1],d=n[5],f=n[9],m=n[13],y=n[2],g=n[6],p=n[10],u=n[14],S=n[3],_=n[7],M=n[11],N=n[15],R=s[0],P=s[4],F=s[8],K=s[12],x=s[1],w=s[5],k=s[9],$=s[13],Y=s[2],ct=s[6],q=s[10],it=s[14],U=s[3],pt=s[7],dt=s[11],_t=s[15];return r[0]=a*R+o*x+c*Y+l*U,r[4]=a*P+o*w+c*ct+l*pt,r[8]=a*F+o*k+c*q+l*dt,r[12]=a*K+o*$+c*it+l*_t,r[1]=h*R+d*x+f*Y+m*U,r[5]=h*P+d*w+f*ct+m*pt,r[9]=h*F+d*k+f*q+m*dt,r[13]=h*K+d*$+f*it+m*_t,r[2]=y*R+g*x+p*Y+u*U,r[6]=y*P+g*w+p*ct+u*pt,r[10]=y*F+g*k+p*q+u*dt,r[14]=y*K+g*$+p*it+u*_t,r[3]=S*R+_*x+M*Y+N*U,r[7]=S*P+_*w+M*ct+N*pt,r[11]=S*F+_*k+M*q+N*dt,r[15]=S*K+_*$+M*it+N*_t,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],c=t[9],l=t[13],h=t[2],d=t[6],f=t[10],m=t[14],y=t[3],g=t[7],p=t[11],u=t[15];return y*(+r*c*d-s*l*d-r*o*f+n*l*f+s*o*m-n*c*m)+g*(+e*c*m-e*l*f+r*a*f-s*a*m+s*l*h-r*c*h)+p*(+e*l*d-e*o*m-r*a*d+n*a*m+r*o*h-n*l*h)+u*(-s*o*h-e*c*d+e*o*f+s*a*d-n*a*f+n*c*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8],d=t[9],f=t[10],m=t[11],y=t[12],g=t[13],p=t[14],u=t[15],S=d*p*l-g*f*l+g*c*m-o*p*m-d*c*u+o*f*u,_=y*f*l-h*p*l-y*c*m+a*p*m+h*c*u-a*f*u,M=h*g*l-y*d*l+y*o*m-a*g*m-h*o*u+a*d*u,N=y*d*c-h*g*c-y*o*f+a*g*f+h*o*p-a*d*p,R=e*S+n*_+s*M+r*N;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let P=1/R;return t[0]=S*P,t[1]=(g*f*r-d*p*r-g*s*m+n*p*m+d*s*u-n*f*u)*P,t[2]=(o*p*r-g*c*r+g*s*l-n*p*l-o*s*u+n*c*u)*P,t[3]=(d*c*r-o*f*r-d*s*l+n*f*l+o*s*m-n*c*m)*P,t[4]=_*P,t[5]=(h*p*r-y*f*r+y*s*m-e*p*m-h*s*u+e*f*u)*P,t[6]=(y*c*r-a*p*r-y*s*l+e*p*l+a*s*u-e*c*u)*P,t[7]=(a*f*r-h*c*r+h*s*l-e*f*l-a*s*m+e*c*m)*P,t[8]=M*P,t[9]=(y*d*r-h*g*r-y*n*m+e*g*m+h*n*u-e*d*u)*P,t[10]=(a*g*r-y*o*r+y*n*l-e*g*l-a*n*u+e*o*u)*P,t[11]=(h*o*r-a*d*r-h*n*l+e*d*l+a*n*m-e*o*m)*P,t[12]=N*P,t[13]=(h*g*s-y*d*s+y*n*f-e*g*f-h*n*p+e*d*p)*P,t[14]=(y*o*s-a*g*s-y*n*c+e*g*c+a*n*p-e*o*p)*P,t[15]=(a*d*s-h*o*s+h*n*c-e*d*c-a*n*f+e*o*f)*P,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,c=t.z,l=r*a,h=r*o;return this.set(l*a+n,l*o-s*c,l*c+s*o,0,l*o+s*c,h*o+n,h*c-s*a,0,l*c-s*o,h*c+s*a,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,a=e._y,o=e._z,c=e._w,l=r+r,h=a+a,d=o+o,f=r*l,m=r*h,y=r*d,g=a*h,p=a*d,u=o*d,S=c*l,_=c*h,M=c*d,N=n.x,R=n.y,P=n.z;return s[0]=(1-(g+u))*N,s[1]=(m+M)*N,s[2]=(y-_)*N,s[3]=0,s[4]=(m-M)*R,s[5]=(1-(f+u))*R,s[6]=(p+S)*R,s[7]=0,s[8]=(y+_)*P,s[9]=(p-S)*P,s[10]=(1-(f+g))*P,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements,r=Ci.set(s[0],s[1],s[2]).length(),a=Ci.set(s[4],s[5],s[6]).length(),o=Ci.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],sn.copy(this);let l=1/r,h=1/a,d=1/o;return sn.elements[0]*=l,sn.elements[1]*=l,sn.elements[2]*=l,sn.elements[4]*=h,sn.elements[5]*=h,sn.elements[6]*=h,sn.elements[8]*=d,sn.elements[9]*=d,sn.elements[10]*=d,e.setFromRotationMatrix(sn),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,s,r,a,o=In){let c=this.elements,l=2*r/(e-t),h=2*r/(n-s),d=(e+t)/(e-t),f=(n+s)/(n-s),m,y;if(o===In)m=-(a+r)/(a-r),y=-2*a*r/(a-r);else if(o===vr)m=-a/(a-r),y=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=h,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=y,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=In){let c=this.elements,l=1/(e-t),h=1/(n-s),d=1/(a-r),f=(e+t)*l,m=(n+s)*h,y,g;if(o===In)y=(a+r)*d,g=-2*d;else if(o===vr)y=r*d,g=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-f,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-m,c[2]=0,c[6]=0,c[10]=g,c[14]=-y,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},Ci=new G,sn=new ce,Iu=new G(0,0,0),Lu=new G(1,1,1),Gn=new G,Hs=new G,We=new G,Yc=new ce,Zc=new mn,Qe=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],a=s[4],o=s[8],c=s[1],l=s[5],h=s[9],d=s[2],f=s[6],m=s[10];switch(e){case"XYZ":this._y=Math.asin(ve(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-ve(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(ve(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,m),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-ve(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(ve(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-ve(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Yc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Yc,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Zc.setFromEuler(this),this.setFromQuaternion(Zc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Qe.DEFAULT_ORDER="XYZ";var As=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Du=0,Jc=new G,Ri=new mn,Sn=new ce,Ws=new G,ps=new G,Uu=new G,Nu=new mn,$c=new G(1,0,0),Kc=new G(0,1,0),Qc=new G(0,0,1),jc={type:"added"},Fu={type:"removed"},Pi={type:"childadded",child:null},ua={type:"childremoved",child:null},Re=class i extends $n{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Du++}),this.uuid=_i(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new G,e=new Qe,n=new mn,s=new G(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ce},normalMatrix:{value:new Gt}}),this.matrix=new ce,this.matrixWorld=new ce,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new As,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ri.setFromAxisAngle(t,e),this.quaternion.multiply(Ri),this}rotateOnWorldAxis(t,e){return Ri.setFromAxisAngle(t,e),this.quaternion.premultiply(Ri),this}rotateX(t){return this.rotateOnAxis($c,t)}rotateY(t){return this.rotateOnAxis(Kc,t)}rotateZ(t){return this.rotateOnAxis(Qc,t)}translateOnAxis(t,e){return Jc.copy(t).applyQuaternion(this.quaternion),this.position.add(Jc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis($c,t)}translateY(t){return this.translateOnAxis(Kc,t)}translateZ(t){return this.translateOnAxis(Qc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Sn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Ws.copy(t):Ws.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),ps.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Sn.lookAt(ps,Ws,this.up):Sn.lookAt(Ws,ps,this.up),this.quaternion.setFromRotationMatrix(Sn),s&&(Sn.extractRotation(s.matrixWorld),Ri.setFromRotationMatrix(Sn),this.quaternion.premultiply(Ri.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(jc),Pi.child=t,this.dispatchEvent(Pi),Pi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Fu),ua.child=t,this.dispatchEvent(ua),ua.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Sn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Sn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Sn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(jc),Pi.child=t,this.dispatchEvent(Pi),Pi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ps,t,Uu),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ps,Nu,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let d=c[l];r(t.shapes,d)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(t.materials,this.material[c]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];s.animations.push(r(t.animations,c))}}if(e){let o=a(t.geometries),c=a(t.materials),l=a(t.textures),h=a(t.images),d=a(t.shapes),f=a(t.skeletons),m=a(t.animations),y=a(t.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),f.length>0&&(n.skeletons=f),m.length>0&&(n.animations=m),y.length>0&&(n.nodes=y)}return n.object=s,n;function a(o){let c=[];for(let l in o){let h=o[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}};Re.DEFAULT_UP=new G(0,1,0);Re.DEFAULT_MATRIX_AUTO_UPDATE=!0;Re.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var rn=new G,bn=new G,da=new G,wn=new G,Ii=new G,Li=new G,tl=new G,fa=new G,pa=new G,ma=new G,ga=new de,_a=new de,xa=new de,Rn=class i{constructor(t=new G,e=new G,n=new G){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),rn.subVectors(t,e),s.cross(rn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){rn.subVectors(s,e),bn.subVectors(n,e),da.subVectors(t,e);let a=rn.dot(rn),o=rn.dot(bn),c=rn.dot(da),l=bn.dot(bn),h=bn.dot(da),d=a*l-o*o;if(d===0)return r.set(0,0,0),null;let f=1/d,m=(l*c-o*h)*f,y=(a*h-o*c)*f;return r.set(1-m-y,y,m)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,wn)===null?!1:wn.x>=0&&wn.y>=0&&wn.x+wn.y<=1}static getInterpolation(t,e,n,s,r,a,o,c){return this.getBarycoord(t,e,n,s,wn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,wn.x),c.addScaledVector(a,wn.y),c.addScaledVector(o,wn.z),c)}static getInterpolatedAttribute(t,e,n,s,r,a){return ga.setScalar(0),_a.setScalar(0),xa.setScalar(0),ga.fromBufferAttribute(t,e),_a.fromBufferAttribute(t,n),xa.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(ga,r.x),a.addScaledVector(_a,r.y),a.addScaledVector(xa,r.z),a}static isFrontFacing(t,e,n,s){return rn.subVectors(n,e),bn.subVectors(t,e),rn.cross(bn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return rn.subVectors(this.c,this.b),bn.subVectors(this.a,this.b),rn.cross(bn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,a,o;Ii.subVectors(s,n),Li.subVectors(r,n),fa.subVectors(t,n);let c=Ii.dot(fa),l=Li.dot(fa);if(c<=0&&l<=0)return e.copy(n);pa.subVectors(t,s);let h=Ii.dot(pa),d=Li.dot(pa);if(h>=0&&d<=h)return e.copy(s);let f=c*d-h*l;if(f<=0&&c>=0&&h<=0)return a=c/(c-h),e.copy(n).addScaledVector(Ii,a);ma.subVectors(t,r);let m=Ii.dot(ma),y=Li.dot(ma);if(y>=0&&m<=y)return e.copy(r);let g=m*l-c*y;if(g<=0&&l>=0&&y<=0)return o=l/(l-y),e.copy(n).addScaledVector(Li,o);let p=h*y-m*d;if(p<=0&&d-h>=0&&m-y>=0)return tl.subVectors(r,s),o=(d-h)/(d-h+(m-y)),e.copy(s).addScaledVector(tl,o);let u=1/(p+g+f);return a=g*u,o=f*u,e.copy(n).addScaledVector(Ii,a).addScaledVector(Li,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},rh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Hn={h:0,s:0,l:0},Xs={h:0,s:0,l:0};function ya(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var Xt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Be){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,se.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=se.workingColorSpace){return this.r=t,this.g=e,this.b=n,se.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=se.workingColorSpace){if(t=mc(t,1),e=ve(e,0,1),n=ve(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=ya(a,r,t+1/3),this.g=ya(a,r,t),this.b=ya(a,r,t-1/3)}return se.toWorkingColorSpace(this,s),this}setStyle(t,e=Be){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Be){let n=rh[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Vi(t.r),this.g=Vi(t.g),this.b=Vi(t.b),this}copyLinearToSRGB(t){return this.r=ia(t.r),this.g=ia(t.g),this.b=ia(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Be){return se.fromWorkingColorSpace(Ce.copy(this),t),Math.round(ve(Ce.r*255,0,255))*65536+Math.round(ve(Ce.g*255,0,255))*256+Math.round(ve(Ce.b*255,0,255))}getHexString(t=Be){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=se.workingColorSpace){se.fromWorkingColorSpace(Ce.copy(this),e);let n=Ce.r,s=Ce.g,r=Ce.b,a=Math.max(n,s,r),o=Math.min(n,s,r),c,l,h=(o+a)/2;if(o===a)c=0,l=0;else{let d=a-o;switch(l=h<=.5?d/(a+o):d/(2-a-o),a){case n:c=(s-r)/d+(s<r?6:0);break;case s:c=(r-n)/d+2;break;case r:c=(n-s)/d+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=se.workingColorSpace){return se.fromWorkingColorSpace(Ce.copy(this),e),t.r=Ce.r,t.g=Ce.g,t.b=Ce.b,t}getStyle(t=Be){se.fromWorkingColorSpace(Ce.copy(this),t);let e=Ce.r,n=Ce.g,s=Ce.b;return t!==Be?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Hn),this.setHSL(Hn.h+t,Hn.s+e,Hn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Hn),t.getHSL(Xs);let n=xs(Hn.h,Xs.h,e),s=xs(Hn.s,Xs.s,e),r=xs(Hn.l,Xs.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Ce=new Xt;Xt.NAMES=rh;var Ou=0,Qn=class extends $n{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ou++}),this.uuid=_i(),this.name="",this.type="Material",this.blending=Yn,this.side=pn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Da,this.blendDst=Ua,this.blendEquation=ci,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Xt(0,0,0),this.blendAlpha=0,this.depthFunc=Hi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=zc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=bi,this.stencilZFail=bi,this.stencilZPass=bi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Yn&&(n.blending=this.blending),this.side!==pn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Da&&(n.blendSrc=this.blendSrc),this.blendDst!==Ua&&(n.blendDst=this.blendDst),this.blendEquation!==ci&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Hi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==zc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==bi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==bi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==bi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let c=r[o];delete c.metadata,a.push(c)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},wr=class extends Qn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Xt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Qe,this.combine=Gl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var pe=new G,qs=new ft,ze=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=kc,this.updateRanges=[],this.gpuType=Pn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)qs.fromBufferAttribute(this,e),qs.applyMatrix3(t),this.setXY(e,qs.x,qs.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)pe.fromBufferAttribute(this,e),pe.applyMatrix3(t),this.setXYZ(e,pe.x,pe.y,pe.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)pe.fromBufferAttribute(this,e),pe.applyMatrix4(t),this.setXYZ(e,pe.x,pe.y,pe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)pe.fromBufferAttribute(this,e),pe.applyNormalMatrix(t),this.setXYZ(e,pe.x,pe.y,pe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)pe.fromBufferAttribute(this,e),pe.transformDirection(t),this.setXYZ(e,pe.x,pe.y,pe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Oi(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Le(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Oi(e,this.array)),e}setX(t,e){return this.normalized&&(e=Le(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Oi(e,this.array)),e}setY(t,e){return this.normalized&&(e=Le(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Oi(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Le(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Oi(e,this.array)),e}setW(t,e){return this.normalized&&(e=Le(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Le(e,this.array),n=Le(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Le(e,this.array),n=Le(n,this.array),s=Le(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=Le(e,this.array),n=Le(n,this.array),s=Le(s,this.array),r=Le(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==kc&&(t.usage=this.usage),t}};var Ar=class extends ze{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Tr=class extends ze{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var ue=class extends ze{constructor(t,e,n){super(new Float32Array(t),e,n)}},Bu=0,Je=new ce,va=new Re,Di=new G,Xe=new Dn,ms=new Dn,ye=new G,Fe=class i extends $n{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Bu++}),this.uuid=_i(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(sh(t)?Tr:Ar)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Gt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Je.makeRotationFromQuaternion(t),this.applyMatrix4(Je),this}rotateX(t){return Je.makeRotationX(t),this.applyMatrix4(Je),this}rotateY(t){return Je.makeRotationY(t),this.applyMatrix4(Je),this}rotateZ(t){return Je.makeRotationZ(t),this.applyMatrix4(Je),this}translate(t,e,n){return Je.makeTranslation(t,e,n),this.applyMatrix4(Je),this}scale(t,e,n){return Je.makeScale(t,e,n),this.applyMatrix4(Je),this}lookAt(t){return va.lookAt(t),va.updateMatrix(),this.applyMatrix4(va.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Di).negate(),this.translate(Di.x,Di.y,Di.z),this}setFromPoints(t){let e=[];for(let n=0,s=t.length;n<s;n++){let r=t[n];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new ue(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Dn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new G(-1/0,-1/0,-1/0),new G(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];Xe.setFromBufferAttribute(r),this.morphTargetsRelative?(ye.addVectors(this.boundingBox.min,Xe.min),this.boundingBox.expandByPoint(ye),ye.addVectors(this.boundingBox.max,Xe.max),this.boundingBox.expandByPoint(ye)):(this.boundingBox.expandByPoint(Xe.min),this.boundingBox.expandByPoint(Xe.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Kn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new G,1/0);return}if(t){let n=this.boundingSphere.center;if(Xe.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];ms.setFromBufferAttribute(o),this.morphTargetsRelative?(ye.addVectors(Xe.min,ms.min),Xe.expandByPoint(ye),ye.addVectors(Xe.max,ms.max),Xe.expandByPoint(ye)):(Xe.expandByPoint(ms.min),Xe.expandByPoint(ms.max))}Xe.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)ye.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(ye));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)ye.fromBufferAttribute(o,l),c&&(Di.fromBufferAttribute(t,l),ye.add(Di)),s=Math.max(s,n.distanceToSquared(ye))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ze(new Float32Array(4*n.count),4));let a=this.getAttribute("tangent"),o=[],c=[];for(let F=0;F<n.count;F++)o[F]=new G,c[F]=new G;let l=new G,h=new G,d=new G,f=new ft,m=new ft,y=new ft,g=new G,p=new G;function u(F,K,x){l.fromBufferAttribute(n,F),h.fromBufferAttribute(n,K),d.fromBufferAttribute(n,x),f.fromBufferAttribute(r,F),m.fromBufferAttribute(r,K),y.fromBufferAttribute(r,x),h.sub(l),d.sub(l),m.sub(f),y.sub(f);let w=1/(m.x*y.y-y.x*m.y);isFinite(w)&&(g.copy(h).multiplyScalar(y.y).addScaledVector(d,-m.y).multiplyScalar(w),p.copy(d).multiplyScalar(m.x).addScaledVector(h,-y.x).multiplyScalar(w),o[F].add(g),o[K].add(g),o[x].add(g),c[F].add(p),c[K].add(p),c[x].add(p))}let S=this.groups;S.length===0&&(S=[{start:0,count:t.count}]);for(let F=0,K=S.length;F<K;++F){let x=S[F],w=x.start,k=x.count;for(let $=w,Y=w+k;$<Y;$+=3)u(t.getX($+0),t.getX($+1),t.getX($+2))}let _=new G,M=new G,N=new G,R=new G;function P(F){N.fromBufferAttribute(s,F),R.copy(N);let K=o[F];_.copy(K),_.sub(N.multiplyScalar(N.dot(K))).normalize(),M.crossVectors(R,K);let w=M.dot(c[F])<0?-1:1;a.setXYZW(F,_.x,_.y,_.z,w)}for(let F=0,K=S.length;F<K;++F){let x=S[F],w=x.start,k=x.count;for(let $=w,Y=w+k;$<Y;$+=3)P(t.getX($+0)),P(t.getX($+1)),P(t.getX($+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new ze(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,m=n.count;f<m;f++)n.setXYZ(f,0,0,0);let s=new G,r=new G,a=new G,o=new G,c=new G,l=new G,h=new G,d=new G;if(t)for(let f=0,m=t.count;f<m;f+=3){let y=t.getX(f+0),g=t.getX(f+1),p=t.getX(f+2);s.fromBufferAttribute(e,y),r.fromBufferAttribute(e,g),a.fromBufferAttribute(e,p),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),o.fromBufferAttribute(n,y),c.fromBufferAttribute(n,g),l.fromBufferAttribute(n,p),o.add(h),c.add(h),l.add(h),n.setXYZ(y,o.x,o.y,o.z),n.setXYZ(g,c.x,c.y,c.z),n.setXYZ(p,l.x,l.y,l.z)}else for(let f=0,m=e.count;f<m;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),a.fromBufferAttribute(e,f+2),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)ye.fromBufferAttribute(t,e),ye.normalize(),t.setXYZ(e,ye.x,ye.y,ye.z)}toNonIndexed(){function t(o,c){let l=o.array,h=o.itemSize,d=o.normalized,f=new l.constructor(c.length*h),m=0,y=0;for(let g=0,p=c.length;g<p;g++){o.isInterleavedBufferAttribute?m=c[g]*o.data.stride+o.offset:m=c[g]*h;for(let u=0;u<h;u++)f[y++]=l[m++]}return new ze(f,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let o in s){let c=s[o],l=t(c,n);e.setAttribute(o,l)}let r=this.morphAttributes;for(let o in r){let c=[],l=r[o];for(let h=0,d=l.length;h<d;h++){let f=l[h],m=t(f,n);c.push(m)}e.morphAttributes[o]=c}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,c=a.length;o<c;o++){let l=a[o];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let c in n){let l=n[c];t.data.attributes[c]=l.toJSON(t.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let d=0,f=l.length;d<f;d++){let m=l[d];h.push(m.toJSON(t.data))}h.length>0&&(s[c]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let s=t.attributes;for(let l in s){let h=s[l];this.setAttribute(l,h.clone(e))}let r=t.morphAttributes;for(let l in r){let h=[],d=r[l];for(let f=0,m=d.length;f<m;f++)h.push(d[f].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let l=0,h=a.length;l<h;l++){let d=a[l];this.addGroup(d.start,d.count,d.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},el=new ce,ii=new ws,Ys=new Kn,nl=new G,Zs=new G,Js=new G,$s=new G,Ma=new G,Ks=new G,il=new G,Qs=new G,Ne=class extends Re{constructor(t=new Fe,e=new wr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(r&&o){Ks.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=o[c],d=r[c];h!==0&&(Ma.fromBufferAttribute(d,t),a?Ks.addScaledVector(Ma,h):Ks.addScaledVector(Ma.sub(e),h))}e.add(Ks)}return e}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ys.copy(n.boundingSphere),Ys.applyMatrix4(r),ii.copy(t.ray).recast(t.near),!(Ys.containsPoint(ii.origin)===!1&&(ii.intersectSphere(Ys,nl)===null||ii.origin.distanceToSquared(nl)>(t.far-t.near)**2))&&(el.copy(r).invert(),ii.copy(t.ray).applyMatrix4(el),!(n.boundingBox!==null&&ii.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,ii)))}_computeIntersections(t,e,n){let s,r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,f=r.groups,m=r.drawRange;if(o!==null)if(Array.isArray(a))for(let y=0,g=f.length;y<g;y++){let p=f[y],u=a[p.materialIndex],S=Math.max(p.start,m.start),_=Math.min(o.count,Math.min(p.start+p.count,m.start+m.count));for(let M=S,N=_;M<N;M+=3){let R=o.getX(M),P=o.getX(M+1),F=o.getX(M+2);s=js(this,u,t,n,l,h,d,R,P,F),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{let y=Math.max(0,m.start),g=Math.min(o.count,m.start+m.count);for(let p=y,u=g;p<u;p+=3){let S=o.getX(p),_=o.getX(p+1),M=o.getX(p+2);s=js(this,a,t,n,l,h,d,S,_,M),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let y=0,g=f.length;y<g;y++){let p=f[y],u=a[p.materialIndex],S=Math.max(p.start,m.start),_=Math.min(c.count,Math.min(p.start+p.count,m.start+m.count));for(let M=S,N=_;M<N;M+=3){let R=M,P=M+1,F=M+2;s=js(this,u,t,n,l,h,d,R,P,F),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{let y=Math.max(0,m.start),g=Math.min(c.count,m.start+m.count);for(let p=y,u=g;p<u;p+=3){let S=p,_=p+1,M=p+2;s=js(this,a,t,n,l,h,d,S,_,M),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}}};function zu(i,t,e,n,s,r,a,o){let c;if(t.side===Me?c=n.intersectTriangle(a,r,s,!0,o):c=n.intersectTriangle(s,r,a,t.side===pn,o),c===null)return null;Qs.copy(o),Qs.applyMatrix4(i.matrixWorld);let l=e.ray.origin.distanceTo(Qs);return l<e.near||l>e.far?null:{distance:l,point:Qs.clone(),object:i}}function js(i,t,e,n,s,r,a,o,c,l){i.getVertexPosition(o,Zs),i.getVertexPosition(c,Js),i.getVertexPosition(l,$s);let h=zu(i,t,e,n,Zs,Js,$s,il);if(h){let d=new G;Rn.getBarycoord(il,Zs,Js,$s,d),s&&(h.uv=Rn.getInterpolatedAttribute(s,o,c,l,d,new ft)),r&&(h.uv1=Rn.getInterpolatedAttribute(r,o,c,l,d,new ft)),a&&(h.normal=Rn.getInterpolatedAttribute(a,o,c,l,d,new G),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let f={a:o,b:c,c:l,normal:new G,materialIndex:0};Rn.getNormal(Zs,Js,$s,f.normal),h.face=f,h.barycoord=d}return h}var Ts=class i extends Fe{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let c=[],l=[],h=[],d=[],f=0,m=0;y("z","y","x",-1,-1,n,e,t,a,r,0),y("z","y","x",1,-1,n,e,-t,a,r,1),y("x","z","y",1,1,t,n,e,s,a,2),y("x","z","y",1,-1,t,n,-e,s,a,3),y("x","y","z",1,-1,t,e,n,s,r,4),y("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new ue(l,3)),this.setAttribute("normal",new ue(h,3)),this.setAttribute("uv",new ue(d,2));function y(g,p,u,S,_,M,N,R,P,F,K){let x=M/P,w=N/F,k=M/2,$=N/2,Y=R/2,ct=P+1,q=F+1,it=0,U=0,pt=new G;for(let dt=0;dt<q;dt++){let _t=dt*w-$;for(let Pt=0;Pt<ct;Pt++){let Ot=Pt*x-k;pt[g]=Ot*S,pt[p]=_t*_,pt[u]=Y,l.push(pt.x,pt.y,pt.z),pt[g]=0,pt[p]=0,pt[u]=R>0?1:-1,h.push(pt.x,pt.y,pt.z),d.push(Pt/P),d.push(1-dt/F),it+=1}}for(let dt=0;dt<F;dt++)for(let _t=0;_t<P;_t++){let Pt=f+_t+ct*dt,Ot=f+_t+ct*(dt+1),D=f+(_t+1)+ct*(dt+1),L=f+(_t+1)+ct*dt;c.push(Pt,Ot,L),c.push(Ot,D,L),U+=6}o.addGroup(m,U,K),m+=U,f+=it}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function Zi(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function De(i){let t={};for(let e=0;e<i.length;e++){let n=Zi(i[e]);for(let s in n)t[s]=n[s]}return t}function ku(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function ah(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:se.workingColorSpace}var Vu={clone:Zi,merge:De},Gu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Hu=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,ke=class extends Qn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Gu,this.fragmentShader=Hu,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Zi(t.uniforms),this.uniformsGroups=ku(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},Ji=class extends Re{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ce,this.projectionMatrix=new ce,this.projectionMatrixInverse=new ce,this.coordinateSystem=In}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Wn=new G,sl=new ft,rl=new ft,Ue=class extends Ji{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=bs*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(_s*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return bs*2*Math.atan(Math.tan(_s*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Wn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Wn.x,Wn.y).multiplyScalar(-t/Wn.z),Wn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Wn.x,Wn.y).multiplyScalar(-t/Wn.z)}getViewSize(t,e){return this.getViewBounds(t,sl,rl),e.subVectors(rl,sl)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(_s*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*s/c,e-=a.offsetY*n/l,s*=a.width/c,n*=a.height/l}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},Ui=-90,Ni=1,bo=class extends Re{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Ue(Ui,Ni,t,e);s.layers=this.layers,this.add(s);let r=new Ue(Ui,Ni,t,e);r.layers=this.layers,this.add(r);let a=new Ue(Ui,Ni,t,e);a.layers=this.layers,this.add(a);let o=new Ue(Ui,Ni,t,e);o.layers=this.layers,this.add(o);let c=new Ue(Ui,Ni,t,e);c.layers=this.layers,this.add(c);let l=new Ue(Ui,Ni,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,c]=e;for(let l of e)this.remove(l);if(t===In)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===vr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,c,l,h]=this.children,d=t.getRenderTarget(),f=t.getActiveCubeFace(),m=t.getActiveMipmapLevel(),y=t.xr.enabled;t.xr.enabled=!1;let g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,a),t.setRenderTarget(n,2,s),t.render(e,o),t.setRenderTarget(n,3,s),t.render(e,c),t.setRenderTarget(n,4,s),t.render(e,l),n.texture.generateMipmaps=g,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(d,f,m),t.xr.enabled=y,n.texture.needsPMREMUpdate=!0}},Er=class extends Ke{constructor(t,e,n,s,r,a,o,c,l,h){t=t!==void 0?t:[],e=e!==void 0?e:Wi,super(t,e,n,s,r,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},wo=class extends an{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Er(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:qe}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Ts(5,5,5),r=new ke({name:"CubemapFromEquirect",uniforms:Zi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Me,blending:dn});r.uniforms.tEquirect.value=e;let a=new Ne(s,r),o=e.minFilter;return e.minFilter===ui&&(e.minFilter=qe),new bo(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,s){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}},Sa=new G,Wu=new G,Xu=new Gt,En=class{constructor(t=new G(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=Sa.subVectors(n,e).cross(Wu.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(Sa),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Xu.getNormalMatrix(t),s=this.coplanarPoint(Sa).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},si=new Kn,tr=new G,Es=class{constructor(t=new En,e=new En,n=new En,s=new En,r=new En,a=new En){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=In){let n=this.planes,s=t.elements,r=s[0],a=s[1],o=s[2],c=s[3],l=s[4],h=s[5],d=s[6],f=s[7],m=s[8],y=s[9],g=s[10],p=s[11],u=s[12],S=s[13],_=s[14],M=s[15];if(n[0].setComponents(c-r,f-l,p-m,M-u).normalize(),n[1].setComponents(c+r,f+l,p+m,M+u).normalize(),n[2].setComponents(c+a,f+h,p+y,M+S).normalize(),n[3].setComponents(c-a,f-h,p-y,M-S).normalize(),n[4].setComponents(c-o,f-d,p-g,M-_).normalize(),e===In)n[5].setComponents(c+o,f+d,p+g,M+_).normalize();else if(e===vr)n[5].setComponents(o,d,g,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),si.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),si.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(si)}intersectsSprite(t){return si.center.set(0,0,0),si.radius=.7071067811865476,si.applyMatrix4(t.matrixWorld),this.intersectsSphere(si)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(tr.x=s.normal.x>0?t.max.x:t.min.x,tr.y=s.normal.y>0?t.max.y:t.min.y,tr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(tr)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function oh(){let i=null,t=!1,e=null,n=null;function s(r,a){e(r,a),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function qu(i){let t=new WeakMap;function e(o,c){let l=o.array,h=o.usage,d=l.byteLength,f=i.createBuffer();i.bindBuffer(c,f),i.bufferData(c,l,h),o.onUploadCallback();let m;if(l instanceof Float32Array)m=i.FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?m=i.HALF_FLOAT:m=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)m=i.SHORT;else if(l instanceof Uint32Array)m=i.UNSIGNED_INT;else if(l instanceof Int32Array)m=i.INT;else if(l instanceof Int8Array)m=i.BYTE;else if(l instanceof Uint8Array)m=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)m=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:m,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,c,l){let h=c.array,d=c.updateRanges;if(i.bindBuffer(l,o),d.length===0)i.bufferSubData(l,0,h);else{d.sort((m,y)=>m.start-y.start);let f=0;for(let m=1;m<d.length;m++){let y=d[f],g=d[m];g.start<=y.start+y.count+1?y.count=Math.max(y.count,g.start+g.count-y.start):(++f,d[f]=g)}d.length=f+1;for(let m=0,y=d.length;m<y;m++){let g=d[m];i.bufferSubData(l,g.start*h.BYTES_PER_ELEMENT,h,g.start,g.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let c=t.get(o);c&&(i.deleteBuffer(c.buffer),t.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let l=t.get(o);if(l===void 0)t.set(o,e(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:s,remove:r,update:a}}var Cr=class i extends Fe{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,a=e/2,o=Math.floor(n),c=Math.floor(s),l=o+1,h=c+1,d=t/o,f=e/c,m=[],y=[],g=[],p=[];for(let u=0;u<h;u++){let S=u*f-a;for(let _=0;_<l;_++){let M=_*d-r;y.push(M,-S,0),g.push(0,0,1),p.push(_/o),p.push(1-u/c)}}for(let u=0;u<c;u++)for(let S=0;S<o;S++){let _=S+l*u,M=S+l*(u+1),N=S+1+l*(u+1),R=S+1+l*u;m.push(_,M,R),m.push(M,N,R)}this.setIndex(m),this.setAttribute("position",new ue(y,3)),this.setAttribute("normal",new ue(g,3)),this.setAttribute("uv",new ue(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},Yu=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Zu=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Ju=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,$u=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ku=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Qu=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ju=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,td=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ed=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,nd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,id=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,sd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,rd=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,ad=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,od=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,cd=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,ld=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,hd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ud=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,dd=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,fd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,pd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,md=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,gd=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,_d=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,xd=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,yd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,vd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Md=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Sd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,bd="gl_FragColor = linearToOutputTexel( gl_FragColor );",wd=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Ad=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Td=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Ed=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Cd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Rd=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Pd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Id=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ld=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Dd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Ud=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Nd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Fd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Od=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Bd=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,zd=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,kd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Vd=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Gd=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Hd=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Wd=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Xd=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,qd=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Yd=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Zd=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Jd=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,$d=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Kd=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Qd=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,jd=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,tf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ef=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,nf=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,sf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,rf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,af=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,of=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,cf=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,lf=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,hf=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,uf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,df=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,ff=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,pf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,mf=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,gf=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,_f=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,xf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,yf=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,vf=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Mf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Sf=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,bf=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,wf=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Af=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Tf=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ef=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Cf=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Rf=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Pf=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,If=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Lf=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Df=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Uf=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Nf=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Ff=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Of=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Bf=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,zf=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,kf=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Vf=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Gf=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Hf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Wf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Xf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,qf=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Yf=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Zf=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Jf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,$f=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Kf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Qf=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jf=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,tp=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,ep=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,np=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,ip=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,sp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,rp=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,ap=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,op=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,cp=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,lp=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,hp=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,up=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,dp=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,fp=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,pp=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,mp=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,gp=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_p=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,xp=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,yp=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,vp=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Mp=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Sp=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,bp=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,wp=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ap=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Tp=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,qt={alphahash_fragment:Yu,alphahash_pars_fragment:Zu,alphamap_fragment:Ju,alphamap_pars_fragment:$u,alphatest_fragment:Ku,alphatest_pars_fragment:Qu,aomap_fragment:ju,aomap_pars_fragment:td,batching_pars_vertex:ed,batching_vertex:nd,begin_vertex:id,beginnormal_vertex:sd,bsdfs:rd,iridescence_fragment:ad,bumpmap_pars_fragment:od,clipping_planes_fragment:cd,clipping_planes_pars_fragment:ld,clipping_planes_pars_vertex:hd,clipping_planes_vertex:ud,color_fragment:dd,color_pars_fragment:fd,color_pars_vertex:pd,color_vertex:md,common:gd,cube_uv_reflection_fragment:_d,defaultnormal_vertex:xd,displacementmap_pars_vertex:yd,displacementmap_vertex:vd,emissivemap_fragment:Md,emissivemap_pars_fragment:Sd,colorspace_fragment:bd,colorspace_pars_fragment:wd,envmap_fragment:Ad,envmap_common_pars_fragment:Td,envmap_pars_fragment:Ed,envmap_pars_vertex:Cd,envmap_physical_pars_fragment:zd,envmap_vertex:Rd,fog_vertex:Pd,fog_pars_vertex:Id,fog_fragment:Ld,fog_pars_fragment:Dd,gradientmap_pars_fragment:Ud,lightmap_pars_fragment:Nd,lights_lambert_fragment:Fd,lights_lambert_pars_fragment:Od,lights_pars_begin:Bd,lights_toon_fragment:kd,lights_toon_pars_fragment:Vd,lights_phong_fragment:Gd,lights_phong_pars_fragment:Hd,lights_physical_fragment:Wd,lights_physical_pars_fragment:Xd,lights_fragment_begin:qd,lights_fragment_maps:Yd,lights_fragment_end:Zd,logdepthbuf_fragment:Jd,logdepthbuf_pars_fragment:$d,logdepthbuf_pars_vertex:Kd,logdepthbuf_vertex:Qd,map_fragment:jd,map_pars_fragment:tf,map_particle_fragment:ef,map_particle_pars_fragment:nf,metalnessmap_fragment:sf,metalnessmap_pars_fragment:rf,morphinstance_vertex:af,morphcolor_vertex:of,morphnormal_vertex:cf,morphtarget_pars_vertex:lf,morphtarget_vertex:hf,normal_fragment_begin:uf,normal_fragment_maps:df,normal_pars_fragment:ff,normal_pars_vertex:pf,normal_vertex:mf,normalmap_pars_fragment:gf,clearcoat_normal_fragment_begin:_f,clearcoat_normal_fragment_maps:xf,clearcoat_pars_fragment:yf,iridescence_pars_fragment:vf,opaque_fragment:Mf,packing:Sf,premultiplied_alpha_fragment:bf,project_vertex:wf,dithering_fragment:Af,dithering_pars_fragment:Tf,roughnessmap_fragment:Ef,roughnessmap_pars_fragment:Cf,shadowmap_pars_fragment:Rf,shadowmap_pars_vertex:Pf,shadowmap_vertex:If,shadowmask_pars_fragment:Lf,skinbase_vertex:Df,skinning_pars_vertex:Uf,skinning_vertex:Nf,skinnormal_vertex:Ff,specularmap_fragment:Of,specularmap_pars_fragment:Bf,tonemapping_fragment:zf,tonemapping_pars_fragment:kf,transmission_fragment:Vf,transmission_pars_fragment:Gf,uv_pars_fragment:Hf,uv_pars_vertex:Wf,uv_vertex:Xf,worldpos_vertex:qf,background_vert:Yf,background_frag:Zf,backgroundCube_vert:Jf,backgroundCube_frag:$f,cube_vert:Kf,cube_frag:Qf,depth_vert:jf,depth_frag:tp,distanceRGBA_vert:ep,distanceRGBA_frag:np,equirect_vert:ip,equirect_frag:sp,linedashed_vert:rp,linedashed_frag:ap,meshbasic_vert:op,meshbasic_frag:cp,meshlambert_vert:lp,meshlambert_frag:hp,meshmatcap_vert:up,meshmatcap_frag:dp,meshnormal_vert:fp,meshnormal_frag:pp,meshphong_vert:mp,meshphong_frag:gp,meshphysical_vert:_p,meshphysical_frag:xp,meshtoon_vert:yp,meshtoon_frag:vp,points_vert:Mp,points_frag:Sp,shadow_vert:bp,shadow_frag:wp,sprite_vert:Ap,sprite_frag:Tp},St={common:{diffuse:{value:new Xt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Gt},alphaMap:{value:null},alphaMapTransform:{value:new Gt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Gt}},envmap:{envMap:{value:null},envMapRotation:{value:new Gt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Gt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Gt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Gt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Gt},normalScale:{value:new ft(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Gt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Gt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Gt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Gt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Xt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Xt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Gt},alphaTest:{value:0},uvTransform:{value:new Gt}},sprite:{diffuse:{value:new Xt(16777215)},opacity:{value:1},center:{value:new ft(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Gt},alphaMap:{value:null},alphaMapTransform:{value:new Gt},alphaTest:{value:0}}},un={basic:{uniforms:De([St.common,St.specularmap,St.envmap,St.aomap,St.lightmap,St.fog]),vertexShader:qt.meshbasic_vert,fragmentShader:qt.meshbasic_frag},lambert:{uniforms:De([St.common,St.specularmap,St.envmap,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.fog,St.lights,{emissive:{value:new Xt(0)}}]),vertexShader:qt.meshlambert_vert,fragmentShader:qt.meshlambert_frag},phong:{uniforms:De([St.common,St.specularmap,St.envmap,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.fog,St.lights,{emissive:{value:new Xt(0)},specular:{value:new Xt(1118481)},shininess:{value:30}}]),vertexShader:qt.meshphong_vert,fragmentShader:qt.meshphong_frag},standard:{uniforms:De([St.common,St.envmap,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.roughnessmap,St.metalnessmap,St.fog,St.lights,{emissive:{value:new Xt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:qt.meshphysical_vert,fragmentShader:qt.meshphysical_frag},toon:{uniforms:De([St.common,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.gradientmap,St.fog,St.lights,{emissive:{value:new Xt(0)}}]),vertexShader:qt.meshtoon_vert,fragmentShader:qt.meshtoon_frag},matcap:{uniforms:De([St.common,St.bumpmap,St.normalmap,St.displacementmap,St.fog,{matcap:{value:null}}]),vertexShader:qt.meshmatcap_vert,fragmentShader:qt.meshmatcap_frag},points:{uniforms:De([St.points,St.fog]),vertexShader:qt.points_vert,fragmentShader:qt.points_frag},dashed:{uniforms:De([St.common,St.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:qt.linedashed_vert,fragmentShader:qt.linedashed_frag},depth:{uniforms:De([St.common,St.displacementmap]),vertexShader:qt.depth_vert,fragmentShader:qt.depth_frag},normal:{uniforms:De([St.common,St.bumpmap,St.normalmap,St.displacementmap,{opacity:{value:1}}]),vertexShader:qt.meshnormal_vert,fragmentShader:qt.meshnormal_frag},sprite:{uniforms:De([St.sprite,St.fog]),vertexShader:qt.sprite_vert,fragmentShader:qt.sprite_frag},background:{uniforms:{uvTransform:{value:new Gt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:qt.background_vert,fragmentShader:qt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Gt}},vertexShader:qt.backgroundCube_vert,fragmentShader:qt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:qt.cube_vert,fragmentShader:qt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:qt.equirect_vert,fragmentShader:qt.equirect_frag},distanceRGBA:{uniforms:De([St.common,St.displacementmap,{referencePosition:{value:new G},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:qt.distanceRGBA_vert,fragmentShader:qt.distanceRGBA_frag},shadow:{uniforms:De([St.lights,St.fog,{color:{value:new Xt(0)},opacity:{value:1}}]),vertexShader:qt.shadow_vert,fragmentShader:qt.shadow_frag}};un.physical={uniforms:De([un.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Gt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Gt},clearcoatNormalScale:{value:new ft(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Gt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Gt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Gt},sheen:{value:0},sheenColor:{value:new Xt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Gt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Gt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Gt},transmissionSamplerSize:{value:new ft},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Gt},attenuationDistance:{value:0},attenuationColor:{value:new Xt(0)},specularColor:{value:new Xt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Gt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Gt},anisotropyVector:{value:new ft},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Gt}}]),vertexShader:qt.meshphysical_vert,fragmentShader:qt.meshphysical_frag};var er={r:0,b:0,g:0},ri=new Qe,Ep=new ce;function Cp(i,t,e,n,s,r,a){let o=new Xt(0),c=r===!0?0:1,l,h,d=null,f=0,m=null;function y(S){let _=S.isScene===!0?S.background:null;return _&&_.isTexture&&(_=(S.backgroundBlurriness>0?e:t).get(_)),_}function g(S){let _=!1,M=y(S);M===null?u(o,c):M&&M.isColor&&(u(M,1),_=!0);let N=i.xr.getEnvironmentBlendMode();N==="additive"?n.buffers.color.setClear(0,0,0,1,a):N==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||_)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function p(S,_){let M=y(_);M&&(M.isCubeTexture||M.mapping===Yr)?(h===void 0&&(h=new Ne(new Ts(1,1,1),new ke({name:"BackgroundCubeMaterial",uniforms:Zi(un.backgroundCube.uniforms),vertexShader:un.backgroundCube.vertexShader,fragmentShader:un.backgroundCube.fragmentShader,side:Me,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(N,R,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),ri.copy(_.backgroundRotation),ri.x*=-1,ri.y*=-1,ri.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(ri.y*=-1,ri.z*=-1),h.material.uniforms.envMap.value=M,h.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Ep.makeRotationFromEuler(ri)),h.material.toneMapped=se.getTransfer(M.colorSpace)!==ae,(d!==M||f!==M.version||m!==i.toneMapping)&&(h.material.needsUpdate=!0,d=M,f=M.version,m=i.toneMapping),h.layers.enableAll(),S.unshift(h,h.geometry,h.material,0,0,null)):M&&M.isTexture&&(l===void 0&&(l=new Ne(new Cr(2,2),new ke({name:"BackgroundMaterial",uniforms:Zi(un.background.uniforms),vertexShader:un.background.vertexShader,fragmentShader:un.background.fragmentShader,side:pn,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=M,l.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,l.material.toneMapped=se.getTransfer(M.colorSpace)!==ae,M.matrixAutoUpdate===!0&&M.updateMatrix(),l.material.uniforms.uvTransform.value.copy(M.matrix),(d!==M||f!==M.version||m!==i.toneMapping)&&(l.material.needsUpdate=!0,d=M,f=M.version,m=i.toneMapping),l.layers.enableAll(),S.unshift(l,l.geometry,l.material,0,0,null))}function u(S,_){S.getRGB(er,ah(i)),n.buffers.color.setClear(er.r,er.g,er.b,_,a)}return{getClearColor:function(){return o},setClearColor:function(S,_=1){o.set(S),c=_,u(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(S){c=S,u(o,c)},render:g,addToRenderList:p}}function Rp(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null),r=s,a=!1;function o(x,w,k,$,Y){let ct=!1,q=d($,k,w);r!==q&&(r=q,l(r.object)),ct=m(x,$,k,Y),ct&&y(x,$,k,Y),Y!==null&&t.update(Y,i.ELEMENT_ARRAY_BUFFER),(ct||a)&&(a=!1,M(x,w,k,$),Y!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(Y).buffer))}function c(){return i.createVertexArray()}function l(x){return i.bindVertexArray(x)}function h(x){return i.deleteVertexArray(x)}function d(x,w,k){let $=k.wireframe===!0,Y=n[x.id];Y===void 0&&(Y={},n[x.id]=Y);let ct=Y[w.id];ct===void 0&&(ct={},Y[w.id]=ct);let q=ct[$];return q===void 0&&(q=f(c()),ct[$]=q),q}function f(x){let w=[],k=[],$=[];for(let Y=0;Y<e;Y++)w[Y]=0,k[Y]=0,$[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:w,enabledAttributes:k,attributeDivisors:$,object:x,attributes:{},index:null}}function m(x,w,k,$){let Y=r.attributes,ct=w.attributes,q=0,it=k.getAttributes();for(let U in it)if(it[U].location>=0){let dt=Y[U],_t=ct[U];if(_t===void 0&&(U==="instanceMatrix"&&x.instanceMatrix&&(_t=x.instanceMatrix),U==="instanceColor"&&x.instanceColor&&(_t=x.instanceColor)),dt===void 0||dt.attribute!==_t||_t&&dt.data!==_t.data)return!0;q++}return r.attributesNum!==q||r.index!==$}function y(x,w,k,$){let Y={},ct=w.attributes,q=0,it=k.getAttributes();for(let U in it)if(it[U].location>=0){let dt=ct[U];dt===void 0&&(U==="instanceMatrix"&&x.instanceMatrix&&(dt=x.instanceMatrix),U==="instanceColor"&&x.instanceColor&&(dt=x.instanceColor));let _t={};_t.attribute=dt,dt&&dt.data&&(_t.data=dt.data),Y[U]=_t,q++}r.attributes=Y,r.attributesNum=q,r.index=$}function g(){let x=r.newAttributes;for(let w=0,k=x.length;w<k;w++)x[w]=0}function p(x){u(x,0)}function u(x,w){let k=r.newAttributes,$=r.enabledAttributes,Y=r.attributeDivisors;k[x]=1,$[x]===0&&(i.enableVertexAttribArray(x),$[x]=1),Y[x]!==w&&(i.vertexAttribDivisor(x,w),Y[x]=w)}function S(){let x=r.newAttributes,w=r.enabledAttributes;for(let k=0,$=w.length;k<$;k++)w[k]!==x[k]&&(i.disableVertexAttribArray(k),w[k]=0)}function _(x,w,k,$,Y,ct,q){q===!0?i.vertexAttribIPointer(x,w,k,Y,ct):i.vertexAttribPointer(x,w,k,$,Y,ct)}function M(x,w,k,$){g();let Y=$.attributes,ct=k.getAttributes(),q=w.defaultAttributeValues;for(let it in ct){let U=ct[it];if(U.location>=0){let pt=Y[it];if(pt===void 0&&(it==="instanceMatrix"&&x.instanceMatrix&&(pt=x.instanceMatrix),it==="instanceColor"&&x.instanceColor&&(pt=x.instanceColor)),pt!==void 0){let dt=pt.normalized,_t=pt.itemSize,Pt=t.get(pt);if(Pt===void 0)continue;let Ot=Pt.buffer,D=Pt.type,L=Pt.bytesPerElement,C=D===i.INT||D===i.UNSIGNED_INT||pt.gpuType===cc;if(pt.isInterleavedBufferAttribute){let b=pt.data,Q=b.stride,st=pt.offset;if(b.isInstancedInterleavedBuffer){for(let Z=0;Z<U.locationSize;Z++)u(U.location+Z,b.meshPerAttribute);x.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=b.meshPerAttribute*b.count)}else for(let Z=0;Z<U.locationSize;Z++)p(U.location+Z);i.bindBuffer(i.ARRAY_BUFFER,Ot);for(let Z=0;Z<U.locationSize;Z++)_(U.location+Z,_t/U.locationSize,D,dt,Q*L,(st+_t/U.locationSize*Z)*L,C)}else{if(pt.isInstancedBufferAttribute){for(let b=0;b<U.locationSize;b++)u(U.location+b,pt.meshPerAttribute);x.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=pt.meshPerAttribute*pt.count)}else for(let b=0;b<U.locationSize;b++)p(U.location+b);i.bindBuffer(i.ARRAY_BUFFER,Ot);for(let b=0;b<U.locationSize;b++)_(U.location+b,_t/U.locationSize,D,dt,_t*L,_t/U.locationSize*b*L,C)}}else if(q!==void 0){let dt=q[it];if(dt!==void 0)switch(dt.length){case 2:i.vertexAttrib2fv(U.location,dt);break;case 3:i.vertexAttrib3fv(U.location,dt);break;case 4:i.vertexAttrib4fv(U.location,dt);break;default:i.vertexAttrib1fv(U.location,dt)}}}}S()}function N(){F();for(let x in n){let w=n[x];for(let k in w){let $=w[k];for(let Y in $)h($[Y].object),delete $[Y];delete w[k]}delete n[x]}}function R(x){if(n[x.id]===void 0)return;let w=n[x.id];for(let k in w){let $=w[k];for(let Y in $)h($[Y].object),delete $[Y];delete w[k]}delete n[x.id]}function P(x){for(let w in n){let k=n[w];if(k[x.id]===void 0)continue;let $=k[x.id];for(let Y in $)h($[Y].object),delete $[Y];delete k[x.id]}}function F(){K(),a=!0,r!==s&&(r=s,l(r.object))}function K(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:F,resetDefaultState:K,dispose:N,releaseStatesOfGeometry:R,releaseStatesOfProgram:P,initAttributes:g,enableAttribute:p,disableUnusedAttributes:S}}function Pp(i,t,e){let n;function s(l){n=l}function r(l,h){i.drawArrays(n,l,h),e.update(h,n,1)}function a(l,h,d){d!==0&&(i.drawArraysInstanced(n,l,h,d),e.update(h,n,d))}function o(l,h,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,d);let m=0;for(let y=0;y<d;y++)m+=h[y];e.update(m,n,1)}function c(l,h,d,f){if(d===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let y=0;y<l.length;y++)a(l[y],h[y],f[y]);else{m.multiDrawArraysInstancedWEBGL(n,l,0,h,0,f,0,d);let y=0;for(let g=0;g<d;g++)y+=h[g];for(let g=0;g<f.length;g++)e.update(y,n,f[g])}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function Ip(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let P=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(P){return!(P!==Ye&&n.convert(P)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(P){let F=P===gi&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(P!==Ln&&n.convert(P)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==Pn&&!F)}function c(P){if(P==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp",h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let d=e.logarithmicDepthBuffer===!0,f=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control");if(f===!0){let P=t.get("EXT_clip_control");P.clipControlEXT(P.LOWER_LEFT_EXT,P.ZERO_TO_ONE_EXT)}let m=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),y=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),u=i.getParameter(i.MAX_VERTEX_ATTRIBS),S=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),_=i.getParameter(i.MAX_VARYING_VECTORS),M=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),N=y>0,R=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:d,reverseDepthBuffer:f,maxTextures:m,maxVertexTextures:y,maxTextureSize:g,maxCubemapSize:p,maxAttributes:u,maxVertexUniforms:S,maxVaryings:_,maxFragmentUniforms:M,vertexTextures:N,maxSamples:R}}function Lp(i){let t=this,e=null,n=0,s=!1,r=!1,a=new En,o=new Gt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){let m=d.length!==0||f||n!==0||s;return s=f,n=d.length,m},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,f){e=h(d,f,0)},this.setState=function(d,f,m){let y=d.clippingPlanes,g=d.clipIntersection,p=d.clipShadows,u=i.get(d);if(!s||y===null||y.length===0||r&&!p)r?h(null):l();else{let S=r?0:n,_=S*4,M=u.clippingState||null;c.value=M,M=h(y,f,_,m);for(let N=0;N!==_;++N)M[N]=e[N];u.clippingState=M,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=S}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(d,f,m,y){let g=d!==null?d.length:0,p=null;if(g!==0){if(p=c.value,y!==!0||p===null){let u=m+g*4,S=f.matrixWorldInverse;o.getNormalMatrix(S),(p===null||p.length<u)&&(p=new Float32Array(u));for(let _=0,M=m;_!==g;++_,M+=4)a.copy(d[_]).applyMatrix4(S,o),a.normal.toArray(p,M),p[M+3]=a.constant}c.value=p,c.needsUpdate=!0}return t.numPlanes=g,t.numIntersection=0,p}}function Dp(i){let t=new WeakMap;function e(a,o){return o===Ga?a.mapping=Wi:o===Ha&&(a.mapping=Xi),a}function n(a){if(a&&a.isTexture){let o=a.mapping;if(o===Ga||o===Ha)if(t.has(a)){let c=t.get(a).texture;return e(c,a.mapping)}else{let c=a.image;if(c&&c.height>0){let l=new wo(c.height);return l.fromEquirectangularTexture(i,a),t.set(a,l),a.addEventListener("dispose",s),e(l.texture,a.mapping)}else return null}}return a}function s(a){let o=a.target;o.removeEventListener("dispose",s);let c=t.get(o);c!==void 0&&(t.delete(o),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var Rr=class extends Ji{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,a=n+t,o=s+e,c=s-e;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Bi=4,al=[.125,.215,.35,.446,.526,.582],li=20,ba=new Rr,ol=new Xt,wa=null,Aa=0,Ta=0,Ea=!1,oi=(1+Math.sqrt(5))/2,Fi=1/oi,cl=[new G(-oi,Fi,0),new G(oi,Fi,0),new G(-Fi,0,oi),new G(Fi,0,oi),new G(0,oi,-Fi),new G(0,oi,Fi),new G(-1,1,-1),new G(1,1,-1),new G(-1,1,1),new G(1,1,1)],$i=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){wa=this._renderer.getRenderTarget(),Aa=this._renderer.getActiveCubeFace(),Ta=this._renderer.getActiveMipmapLevel(),Ea=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ul(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=hl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(wa,Aa,Ta),this._renderer.xr.enabled=Ea,t.scissorTest=!1,nr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Wi||t.mapping===Xi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),wa=this._renderer.getRenderTarget(),Aa=this._renderer.getActiveCubeFace(),Ta=this._renderer.getActiveMipmapLevel(),Ea=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:qe,minFilter:qe,generateMipmaps:!1,type:gi,format:Ye,colorSpace:_n,depthBuffer:!1},s=ll(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ll(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Up(r)),this._blurMaterial=Np(r,t,e)}return s}_compileMaterial(t){let e=new Ne(this._lodPlanes[0],t);this._renderer.compile(e,ba)}_sceneToCubeUV(t,e,n,s){let o=new Ue(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,f=h.toneMapping;h.getClearColor(ol),h.toneMapping=fn,h.autoClear=!1;let m=new wr({name:"PMREM.Background",side:Me,depthWrite:!1,depthTest:!1}),y=new Ne(new Ts,m),g=!1,p=t.background;p?p.isColor&&(m.color.copy(p),t.background=null,g=!0):(m.color.copy(ol),g=!0);for(let u=0;u<6;u++){let S=u%3;S===0?(o.up.set(0,c[u],0),o.lookAt(l[u],0,0)):S===1?(o.up.set(0,0,c[u]),o.lookAt(0,l[u],0)):(o.up.set(0,c[u],0),o.lookAt(0,0,l[u]));let _=this._cubeSize;nr(s,S*_,u>2?_:0,_,_),h.setRenderTarget(s),g&&h.render(y,o),h.render(t,o)}y.geometry.dispose(),y.material.dispose(),h.toneMapping=f,h.autoClear=d,t.background=p}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===Wi||t.mapping===Xi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=ul()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=hl());let r=s?this._cubemapMaterial:this._equirectMaterial,a=new Ne(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;let c=this._cubeSize;nr(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(a,ba)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=cl[(s-r-1)%cl.length];this._blur(t,r-1,r,a,o)}e.autoClear=n}_blur(t,e,n,s,r){let a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,s,"latitudinal",r),this._halfBlur(a,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,a,o){let c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,d=new Ne(this._lodPlanes[s],l),f=l.uniforms,m=this._sizeLods[n]-1,y=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*li-1),g=r/y,p=isFinite(r)?1+Math.floor(h*g):li;p>li&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${li}`);let u=[],S=0;for(let P=0;P<li;++P){let F=P/g,K=Math.exp(-F*F/2);u.push(K),P===0?S+=K:P<p&&(S+=2*K)}for(let P=0;P<u.length;P++)u[P]=u[P]/S;f.envMap.value=t.texture,f.samples.value=p,f.weights.value=u,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);let{_lodMax:_}=this;f.dTheta.value=y,f.mipInt.value=_-n;let M=this._sizeLods[s],N=3*M*(s>_-Bi?s-_+Bi:0),R=4*(this._cubeSize-M);nr(e,N,R,3*M,2*M),c.setRenderTarget(e),c.render(d,ba)}};function Up(i){let t=[],e=[],n=[],s=i,r=i-Bi+1+al.length;for(let a=0;a<r;a++){let o=Math.pow(2,s);e.push(o);let c=1/o;a>i-Bi?c=al[a-i+Bi-1]:a===0&&(c=0),n.push(c);let l=1/(o-2),h=-l,d=1+l,f=[h,h,d,h,d,d,h,h,d,d,h,d],m=6,y=6,g=3,p=2,u=1,S=new Float32Array(g*y*m),_=new Float32Array(p*y*m),M=new Float32Array(u*y*m);for(let R=0;R<m;R++){let P=R%3*2/3-1,F=R>2?0:-1,K=[P,F,0,P+2/3,F,0,P+2/3,F+1,0,P,F,0,P+2/3,F+1,0,P,F+1,0];S.set(K,g*y*R),_.set(f,p*y*R);let x=[R,R,R,R,R,R];M.set(x,u*y*R)}let N=new Fe;N.setAttribute("position",new ze(S,g)),N.setAttribute("uv",new ze(_,p)),N.setAttribute("faceIndex",new ze(M,u)),t.push(N),s>Bi&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function ll(i,t,e){let n=new an(i,t,e);return n.texture.mapping=Yr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function nr(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Np(i,t,e){let n=new Float32Array(li),s=new G(0,1,0);return new ke({name:"SphericalGaussianBlur",defines:{n:li,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:gc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:dn,depthTest:!1,depthWrite:!1})}function hl(){return new ke({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:gc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:dn,depthTest:!1,depthWrite:!1})}function ul(){return new ke({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:gc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:dn,depthTest:!1,depthWrite:!1})}function gc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Fp(i){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){let c=o.mapping,l=c===Ga||c===Ha,h=c===Wi||c===Xi;if(l||h){let d=t.get(o),f=d!==void 0?d.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return e===null&&(e=new $i(i)),d=l?e.fromEquirectangular(o,d):e.fromCubemap(o,d),d.texture.pmremVersion=o.pmremVersion,t.set(o,d),d.texture;if(d!==void 0)return d.texture;{let m=o.image;return l&&m&&m.height>0||h&&m&&s(m)?(e===null&&(e=new $i(i)),d=l?e.fromEquirectangular(o):e.fromCubemap(o),d.texture.pmremVersion=o.pmremVersion,t.set(o,d),o.addEventListener("dispose",r),d.texture):null}}}return o}function s(o){let c=0,l=6;for(let h=0;h<l;h++)o[h]!==void 0&&c++;return c===l}function r(o){let c=o.target;c.removeEventListener("dispose",r);let l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function Op(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&mr("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Bp(i,t,e,n){let s={},r=new WeakMap;function a(d){let f=d.target;f.index!==null&&t.remove(f.index);for(let y in f.attributes)t.remove(f.attributes[y]);for(let y in f.morphAttributes){let g=f.morphAttributes[y];for(let p=0,u=g.length;p<u;p++)t.remove(g[p])}f.removeEventListener("dispose",a),delete s[f.id];let m=r.get(f);m&&(t.remove(m),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function o(d,f){return s[f.id]===!0||(f.addEventListener("dispose",a),s[f.id]=!0,e.memory.geometries++),f}function c(d){let f=d.attributes;for(let y in f)t.update(f[y],i.ARRAY_BUFFER);let m=d.morphAttributes;for(let y in m){let g=m[y];for(let p=0,u=g.length;p<u;p++)t.update(g[p],i.ARRAY_BUFFER)}}function l(d){let f=[],m=d.index,y=d.attributes.position,g=0;if(m!==null){let S=m.array;g=m.version;for(let _=0,M=S.length;_<M;_+=3){let N=S[_+0],R=S[_+1],P=S[_+2];f.push(N,R,R,P,P,N)}}else if(y!==void 0){let S=y.array;g=y.version;for(let _=0,M=S.length/3-1;_<M;_+=3){let N=_+0,R=_+1,P=_+2;f.push(N,R,R,P,P,N)}}else return;let p=new(sh(f)?Tr:Ar)(f,1);p.version=g;let u=r.get(d);u&&t.remove(u),r.set(d,p)}function h(d){let f=r.get(d);if(f){let m=d.index;m!==null&&f.version<m.version&&l(d)}else l(d);return r.get(d)}return{get:o,update:c,getWireframeAttribute:h}}function zp(i,t,e){let n;function s(f){n=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function c(f,m){i.drawElements(n,m,r,f*a),e.update(m,n,1)}function l(f,m,y){y!==0&&(i.drawElementsInstanced(n,m,r,f*a,y),e.update(m,n,y))}function h(f,m,y){if(y===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,m,0,r,f,0,y);let p=0;for(let u=0;u<y;u++)p+=m[u];e.update(p,n,1)}function d(f,m,y,g){if(y===0)return;let p=t.get("WEBGL_multi_draw");if(p===null)for(let u=0;u<f.length;u++)l(f[u]/a,m[u],g[u]);else{p.multiDrawElementsInstancedWEBGL(n,m,0,r,f,0,g,0,y);let u=0;for(let S=0;S<y;S++)u+=m[S];for(let S=0;S<g.length;S++)e.update(u,n,g[S])}}this.setMode=s,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}function kp(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Vp(i,t,e){let n=new WeakMap,s=new de;function r(a,o,c){let l=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0,f=n.get(o);if(f===void 0||f.count!==d){let K=function(){P.dispose(),n.delete(o),o.removeEventListener("dispose",K)};f!==void 0&&f.texture.dispose();let m=o.morphAttributes.position!==void 0,y=o.morphAttributes.normal!==void 0,g=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],u=o.morphAttributes.normal||[],S=o.morphAttributes.color||[],_=0;m===!0&&(_=1),y===!0&&(_=2),g===!0&&(_=3);let M=o.attributes.position.count*_,N=1;M>t.maxTextureSize&&(N=Math.ceil(M/t.maxTextureSize),M=t.maxTextureSize);let R=new Float32Array(M*N*4*d),P=new br(R,M,N,d);P.type=Pn,P.needsUpdate=!0;let F=_*4;for(let x=0;x<d;x++){let w=p[x],k=u[x],$=S[x],Y=M*N*4*x;for(let ct=0;ct<w.count;ct++){let q=ct*F;m===!0&&(s.fromBufferAttribute(w,ct),R[Y+q+0]=s.x,R[Y+q+1]=s.y,R[Y+q+2]=s.z,R[Y+q+3]=0),y===!0&&(s.fromBufferAttribute(k,ct),R[Y+q+4]=s.x,R[Y+q+5]=s.y,R[Y+q+6]=s.z,R[Y+q+7]=0),g===!0&&(s.fromBufferAttribute($,ct),R[Y+q+8]=s.x,R[Y+q+9]=s.y,R[Y+q+10]=s.z,R[Y+q+11]=$.itemSize===4?s.w:1)}}f={count:d,texture:P,size:new ft(M,N)},n.set(o,f),o.addEventListener("dispose",K)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let m=0;for(let g=0;g<l.length;g++)m+=l[g];let y=o.morphTargetsRelative?1:1-m;c.getUniforms().setValue(i,"morphTargetBaseInfluence",y),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",f.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function Gp(i,t,e,n){let s=new WeakMap;function r(c){let l=n.render.frame,h=c.geometry,d=t.get(c,h);if(s.get(d)!==l&&(t.update(d),s.set(d,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),s.get(c)!==l&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){let f=c.skeleton;s.get(f)!==l&&(f.update(),s.set(f,l))}return d}function a(){s=new WeakMap}function o(c){let l=c.target;l.removeEventListener("dispose",o),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:a}}var Pr=class extends Ke{constructor(t,e,n,s,r,a,o,c,l,h=ki){if(h!==ki&&h!==Yi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===ki&&(n=di),n===void 0&&h===Yi&&(n=qi),super(null,s,r,a,o,c,h,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:$e,this.minFilter=c!==void 0?c:$e,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},ch=new Ke,dl=new Pr(1,1),lh=new br,hh=new So,uh=new Er,fl=[],pl=[],ml=new Float32Array(16),gl=new Float32Array(9),_l=new Float32Array(4);function es(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=fl[s];if(r===void 0&&(r=new Float32Array(s),fl[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function ge(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function _e(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Jr(i,t){let e=pl[t];e===void 0&&(e=new Int32Array(t),pl[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Hp(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Wp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ge(e,t))return;i.uniform2fv(this.addr,t),_e(e,t)}}function Xp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ge(e,t))return;i.uniform3fv(this.addr,t),_e(e,t)}}function qp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ge(e,t))return;i.uniform4fv(this.addr,t),_e(e,t)}}function Yp(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(ge(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),_e(e,t)}else{if(ge(e,n))return;_l.set(n),i.uniformMatrix2fv(this.addr,!1,_l),_e(e,n)}}function Zp(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(ge(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),_e(e,t)}else{if(ge(e,n))return;gl.set(n),i.uniformMatrix3fv(this.addr,!1,gl),_e(e,n)}}function Jp(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(ge(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),_e(e,t)}else{if(ge(e,n))return;ml.set(n),i.uniformMatrix4fv(this.addr,!1,ml),_e(e,n)}}function $p(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Kp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ge(e,t))return;i.uniform2iv(this.addr,t),_e(e,t)}}function Qp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ge(e,t))return;i.uniform3iv(this.addr,t),_e(e,t)}}function jp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ge(e,t))return;i.uniform4iv(this.addr,t),_e(e,t)}}function tm(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function em(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ge(e,t))return;i.uniform2uiv(this.addr,t),_e(e,t)}}function nm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ge(e,t))return;i.uniform3uiv(this.addr,t),_e(e,t)}}function im(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ge(e,t))return;i.uniform4uiv(this.addr,t),_e(e,t)}}function sm(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(dl.compareFunction=eh,r=dl):r=ch,e.setTexture2D(t||r,s)}function rm(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||hh,s)}function am(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||uh,s)}function om(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||lh,s)}function cm(i){switch(i){case 5126:return Hp;case 35664:return Wp;case 35665:return Xp;case 35666:return qp;case 35674:return Yp;case 35675:return Zp;case 35676:return Jp;case 5124:case 35670:return $p;case 35667:case 35671:return Kp;case 35668:case 35672:return Qp;case 35669:case 35673:return jp;case 5125:return tm;case 36294:return em;case 36295:return nm;case 36296:return im;case 35678:case 36198:case 36298:case 36306:case 35682:return sm;case 35679:case 36299:case 36307:return rm;case 35680:case 36300:case 36308:case 36293:return am;case 36289:case 36303:case 36311:case 36292:return om}}function lm(i,t){i.uniform1fv(this.addr,t)}function hm(i,t){let e=es(t,this.size,2);i.uniform2fv(this.addr,e)}function um(i,t){let e=es(t,this.size,3);i.uniform3fv(this.addr,e)}function dm(i,t){let e=es(t,this.size,4);i.uniform4fv(this.addr,e)}function fm(i,t){let e=es(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function pm(i,t){let e=es(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function mm(i,t){let e=es(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function gm(i,t){i.uniform1iv(this.addr,t)}function _m(i,t){i.uniform2iv(this.addr,t)}function xm(i,t){i.uniform3iv(this.addr,t)}function ym(i,t){i.uniform4iv(this.addr,t)}function vm(i,t){i.uniform1uiv(this.addr,t)}function Mm(i,t){i.uniform2uiv(this.addr,t)}function Sm(i,t){i.uniform3uiv(this.addr,t)}function bm(i,t){i.uniform4uiv(this.addr,t)}function wm(i,t,e){let n=this.cache,s=t.length,r=Jr(e,s);ge(n,r)||(i.uniform1iv(this.addr,r),_e(n,r));for(let a=0;a!==s;++a)e.setTexture2D(t[a]||ch,r[a])}function Am(i,t,e){let n=this.cache,s=t.length,r=Jr(e,s);ge(n,r)||(i.uniform1iv(this.addr,r),_e(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||hh,r[a])}function Tm(i,t,e){let n=this.cache,s=t.length,r=Jr(e,s);ge(n,r)||(i.uniform1iv(this.addr,r),_e(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||uh,r[a])}function Em(i,t,e){let n=this.cache,s=t.length,r=Jr(e,s);ge(n,r)||(i.uniform1iv(this.addr,r),_e(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||lh,r[a])}function Cm(i){switch(i){case 5126:return lm;case 35664:return hm;case 35665:return um;case 35666:return dm;case 35674:return fm;case 35675:return pm;case 35676:return mm;case 5124:case 35670:return gm;case 35667:case 35671:return _m;case 35668:case 35672:return xm;case 35669:case 35673:return ym;case 5125:return vm;case 36294:return Mm;case 36295:return Sm;case 36296:return bm;case 35678:case 36198:case 36298:case 36306:case 35682:return wm;case 35679:case 36299:case 36307:return Am;case 35680:case 36300:case 36308:case 36293:return Tm;case 36289:case 36303:case 36311:case 36292:return Em}}var Ao=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=cm(e.type)}},To=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Cm(e.type)}},Eo=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(t,e[o.id],n)}}},Ca=/(\w+)(\])?(\[|\.)?/g;function xl(i,t){i.seq.push(t),i.map[t.id]=t}function Rm(i,t,e){let n=i.name,s=n.length;for(Ca.lastIndex=0;;){let r=Ca.exec(n),a=Ca.lastIndex,o=r[1],c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===s){xl(e,l===void 0?new Ao(o,i,t):new To(o,i,t));break}else{let d=e.map[o];d===void 0&&(d=new Eo(o),xl(e,d)),e=d}}}var Gi=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=t.getActiveUniform(e,s),a=t.getUniformLocation(e,r.name);Rm(r,a,this)}}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){let o=e[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(t,c.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&n.push(a)}return n}};function yl(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var Pm=37297,Im=0;function Lm(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}function Dm(i){let t=se.getPrimaries(se.workingColorSpace),e=se.getPrimaries(i),n;switch(t===e?n="":t===yr&&e===xr?n="LinearDisplayP3ToLinearSRGB":t===xr&&e===yr&&(n="LinearSRGBToLinearDisplayP3"),i){case _n:case Zr:return[n,"LinearTransferOETF"];case Be:case pc:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function vl(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let a=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+Lm(i.getShaderSource(t),a)}else return s}function Um(i,t){let e=Dm(t);return`vec4 ${i}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function Nm(i,t){let e;switch(t){case Hh:e="Linear";break;case Wh:e="Reinhard";break;case Xh:e="Cineon";break;case qh:e="ACESFilmic";break;case Zh:e="AgX";break;case Jh:e="Neutral";break;case Yh:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var ir=new G;function Fm(){se.getLuminanceCoefficients(ir);let i=ir.x.toFixed(4),t=ir.y.toFixed(4),e=ir.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Om(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(gs).join(`
`)}function Bm(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function zm(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function gs(i){return i!==""}function Ml(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Sl(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var km=/^[ \t]*#include +<([\w\d./]+)>/gm;function Co(i){return i.replace(km,Gm)}var Vm=new Map;function Gm(i,t){let e=qt[t];if(e===void 0){let n=Vm.get(t);if(n!==void 0)e=qt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Co(e)}var Hm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function bl(i){return i.replace(Hm,Wm)}function Wm(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function wl(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Xm(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Vl?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Sh?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Tn&&(t="SHADOWMAP_TYPE_VSM"),t}function qm(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Wi:case Xi:t="ENVMAP_TYPE_CUBE";break;case Yr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Ym(i){let t="ENVMAP_MODE_REFLECTION";return i.envMap&&i.envMapMode===Xi&&(t="ENVMAP_MODE_REFRACTION"),t}function Zm(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Gl:t="ENVMAP_BLENDING_MULTIPLY";break;case Vh:t="ENVMAP_BLENDING_MIX";break;case Gh:t="ENVMAP_BLENDING_ADD";break}return t}function Jm(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function $m(i,t,e,n){let s=i.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,c=Xm(e),l=qm(e),h=Ym(e),d=Zm(e),f=Jm(e),m=Om(e),y=Bm(r),g=s.createProgram(),p,u,S=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,y].filter(gs).join(`
`),p.length>0&&(p+=`
`),u=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,y].filter(gs).join(`
`),u.length>0&&(u+=`
`)):(p=[wl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,y,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(gs).join(`
`),u=[wl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,y,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==fn?"#define TONE_MAPPING":"",e.toneMapping!==fn?qt.tonemapping_pars_fragment:"",e.toneMapping!==fn?Nm("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",qt.colorspace_pars_fragment,Um("linearToOutputTexel",e.outputColorSpace),Fm(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(gs).join(`
`)),a=Co(a),a=Ml(a,e),a=Sl(a,e),o=Co(o),o=Ml(o,e),o=Sl(o,e),a=bl(a),o=bl(o),e.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,p=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,u=["#define varying in",e.glslVersion===Vc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Vc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);let _=S+p+a,M=S+u+o,N=yl(s,s.VERTEX_SHADER,_),R=yl(s,s.FRAGMENT_SHADER,M);s.attachShader(g,N),s.attachShader(g,R),e.index0AttributeName!==void 0?s.bindAttribLocation(g,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(g,0,"position"),s.linkProgram(g);function P(w){if(i.debug.checkShaderErrors){let k=s.getProgramInfoLog(g).trim(),$=s.getShaderInfoLog(N).trim(),Y=s.getShaderInfoLog(R).trim(),ct=!0,q=!0;if(s.getProgramParameter(g,s.LINK_STATUS)===!1)if(ct=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,g,N,R);else{let it=vl(s,N,"vertex"),U=vl(s,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(g,s.VALIDATE_STATUS)+`

Material Name: `+w.name+`
Material Type: `+w.type+`

Program Info Log: `+k+`
`+it+`
`+U)}else k!==""?console.warn("THREE.WebGLProgram: Program Info Log:",k):($===""||Y==="")&&(q=!1);q&&(w.diagnostics={runnable:ct,programLog:k,vertexShader:{log:$,prefix:p},fragmentShader:{log:Y,prefix:u}})}s.deleteShader(N),s.deleteShader(R),F=new Gi(s,g),K=zm(s,g)}let F;this.getUniforms=function(){return F===void 0&&P(this),F};let K;this.getAttributes=function(){return K===void 0&&P(this),K};let x=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=s.getProgramParameter(g,Pm)),x},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(g),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Im++,this.cacheKey=t,this.usedTimes=1,this.program=g,this.vertexShader=N,this.fragmentShader=R,this}var Km=0,Ro=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Po(t),e.set(t,n)),n}},Po=class{constructor(t){this.id=Km++,this.code=t,this.usedTimes=0}};function Qm(i,t,e,n,s,r,a){let o=new As,c=new Ro,l=new Set,h=[],d=s.logarithmicDepthBuffer,f=s.reverseDepthBuffer,m=s.vertexTextures,y=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(x){return l.add(x),x===0?"uv":`uv${x}`}function u(x,w,k,$,Y){let ct=$.fog,q=Y.geometry,it=x.isMeshStandardMaterial?$.environment:null,U=(x.isMeshStandardMaterial?e:t).get(x.envMap||it),pt=U&&U.mapping===Yr?U.image.height:null,dt=g[x.type];x.precision!==null&&(y=s.getMaxPrecision(x.precision),y!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",y,"instead."));let _t=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,Pt=_t!==void 0?_t.length:0,Ot=0;q.morphAttributes.position!==void 0&&(Ot=1),q.morphAttributes.normal!==void 0&&(Ot=2),q.morphAttributes.color!==void 0&&(Ot=3);let D,L,C,b;if(dt){let xe=un[dt];D=xe.vertexShader,L=xe.fragmentShader}else D=x.vertexShader,L=x.fragmentShader,c.update(x),C=c.getVertexShaderID(x),b=c.getFragmentShaderID(x);let Q=i.getRenderTarget(),st=Y.isInstancedMesh===!0,Z=Y.isBatchedMesh===!0,lt=!!x.map,W=!!x.matcap,T=!!U,B=!!x.aoMap,J=!!x.lightMap,j=!!x.bumpMap,rt=!!x.normalMap,O=!!x.displacementMap,I=!!x.emissiveMap,A=!!x.metalnessMap,v=!!x.roughnessMap,X=x.anisotropy>0,at=x.clearcoat>0,ut=x.dispersion>0,ht=x.iridescence>0,It=x.sheen>0,vt=x.transmission>0,Mt=X&&!!x.anisotropyMap,Ht=at&&!!x.clearcoatMap,gt=at&&!!x.clearcoatNormalMap,bt=at&&!!x.clearcoatRoughnessMap,Dt=ht&&!!x.iridescenceMap,kt=ht&&!!x.iridescenceThicknessMap,wt=It&&!!x.sheenColorMap,Yt=It&&!!x.sheenRoughnessMap,Wt=!!x.specularMap,Qt=!!x.specularColorMap,z=!!x.specularIntensityMap,Et=vt&&!!x.transmissionMap,ot=vt&&!!x.thicknessMap,mt=!!x.gradientMap,Tt=!!x.alphaMap,Ct=x.alphaTest>0,Zt=!!x.alphaHash,ee=!!x.extensions,Se=fn;x.toneMapped&&(Q===null||Q.isXRRenderTarget===!0)&&(Se=i.toneMapping);let $t={shaderID:dt,shaderType:x.type,shaderName:x.name,vertexShader:D,fragmentShader:L,defines:x.defines,customVertexShaderID:C,customFragmentShaderID:b,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:y,batching:Z,batchingColor:Z&&Y._colorsTexture!==null,instancing:st,instancingColor:st&&Y.instanceColor!==null,instancingMorph:st&&Y.morphTexture!==null,supportsVertexTextures:m,outputColorSpace:Q===null?i.outputColorSpace:Q.isXRRenderTarget===!0?Q.texture.colorSpace:_n,alphaToCoverage:!!x.alphaToCoverage,map:lt,matcap:W,envMap:T,envMapMode:T&&U.mapping,envMapCubeUVHeight:pt,aoMap:B,lightMap:J,bumpMap:j,normalMap:rt,displacementMap:m&&O,emissiveMap:I,normalMapObjectSpace:rt&&x.normalMapType===jh,normalMapTangentSpace:rt&&x.normalMapType===th,metalnessMap:A,roughnessMap:v,anisotropy:X,anisotropyMap:Mt,clearcoat:at,clearcoatMap:Ht,clearcoatNormalMap:gt,clearcoatRoughnessMap:bt,dispersion:ut,iridescence:ht,iridescenceMap:Dt,iridescenceThicknessMap:kt,sheen:It,sheenColorMap:wt,sheenRoughnessMap:Yt,specularMap:Wt,specularColorMap:Qt,specularIntensityMap:z,transmission:vt,transmissionMap:Et,thicknessMap:ot,gradientMap:mt,opaque:x.transparent===!1&&x.blending===Yn&&x.alphaToCoverage===!1,alphaMap:Tt,alphaTest:Ct,alphaHash:Zt,combine:x.combine,mapUv:lt&&p(x.map.channel),aoMapUv:B&&p(x.aoMap.channel),lightMapUv:J&&p(x.lightMap.channel),bumpMapUv:j&&p(x.bumpMap.channel),normalMapUv:rt&&p(x.normalMap.channel),displacementMapUv:O&&p(x.displacementMap.channel),emissiveMapUv:I&&p(x.emissiveMap.channel),metalnessMapUv:A&&p(x.metalnessMap.channel),roughnessMapUv:v&&p(x.roughnessMap.channel),anisotropyMapUv:Mt&&p(x.anisotropyMap.channel),clearcoatMapUv:Ht&&p(x.clearcoatMap.channel),clearcoatNormalMapUv:gt&&p(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:bt&&p(x.clearcoatRoughnessMap.channel),iridescenceMapUv:Dt&&p(x.iridescenceMap.channel),iridescenceThicknessMapUv:kt&&p(x.iridescenceThicknessMap.channel),sheenColorMapUv:wt&&p(x.sheenColorMap.channel),sheenRoughnessMapUv:Yt&&p(x.sheenRoughnessMap.channel),specularMapUv:Wt&&p(x.specularMap.channel),specularColorMapUv:Qt&&p(x.specularColorMap.channel),specularIntensityMapUv:z&&p(x.specularIntensityMap.channel),transmissionMapUv:Et&&p(x.transmissionMap.channel),thicknessMapUv:ot&&p(x.thicknessMap.channel),alphaMapUv:Tt&&p(x.alphaMap.channel),vertexTangents:!!q.attributes.tangent&&(rt||X),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,pointsUvs:Y.isPoints===!0&&!!q.attributes.uv&&(lt||Tt),fog:!!ct,useFog:x.fog===!0,fogExp2:!!ct&&ct.isFogExp2,flatShading:x.flatShading===!0,sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:f,skinning:Y.isSkinnedMesh===!0,morphTargets:q.morphAttributes.position!==void 0,morphNormals:q.morphAttributes.normal!==void 0,morphColors:q.morphAttributes.color!==void 0,morphTargetsCount:Pt,morphTextureStride:Ot,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:x.dithering,shadowMapEnabled:i.shadowMap.enabled&&k.length>0,shadowMapType:i.shadowMap.type,toneMapping:Se,decodeVideoTexture:lt&&x.map.isVideoTexture===!0&&se.getTransfer(x.map.colorSpace)===ae,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Cn,flipSided:x.side===Me,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:ee&&x.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ee&&x.extensions.multiDraw===!0||Z)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return $t.vertexUv1s=l.has(1),$t.vertexUv2s=l.has(2),$t.vertexUv3s=l.has(3),l.clear(),$t}function S(x){let w=[];if(x.shaderID?w.push(x.shaderID):(w.push(x.customVertexShaderID),w.push(x.customFragmentShaderID)),x.defines!==void 0)for(let k in x.defines)w.push(k),w.push(x.defines[k]);return x.isRawShaderMaterial===!1&&(_(w,x),M(w,x),w.push(i.outputColorSpace)),w.push(x.customProgramCacheKey),w.join()}function _(x,w){x.push(w.precision),x.push(w.outputColorSpace),x.push(w.envMapMode),x.push(w.envMapCubeUVHeight),x.push(w.mapUv),x.push(w.alphaMapUv),x.push(w.lightMapUv),x.push(w.aoMapUv),x.push(w.bumpMapUv),x.push(w.normalMapUv),x.push(w.displacementMapUv),x.push(w.emissiveMapUv),x.push(w.metalnessMapUv),x.push(w.roughnessMapUv),x.push(w.anisotropyMapUv),x.push(w.clearcoatMapUv),x.push(w.clearcoatNormalMapUv),x.push(w.clearcoatRoughnessMapUv),x.push(w.iridescenceMapUv),x.push(w.iridescenceThicknessMapUv),x.push(w.sheenColorMapUv),x.push(w.sheenRoughnessMapUv),x.push(w.specularMapUv),x.push(w.specularColorMapUv),x.push(w.specularIntensityMapUv),x.push(w.transmissionMapUv),x.push(w.thicknessMapUv),x.push(w.combine),x.push(w.fogExp2),x.push(w.sizeAttenuation),x.push(w.morphTargetsCount),x.push(w.morphAttributeCount),x.push(w.numDirLights),x.push(w.numPointLights),x.push(w.numSpotLights),x.push(w.numSpotLightMaps),x.push(w.numHemiLights),x.push(w.numRectAreaLights),x.push(w.numDirLightShadows),x.push(w.numPointLightShadows),x.push(w.numSpotLightShadows),x.push(w.numSpotLightShadowsWithMaps),x.push(w.numLightProbes),x.push(w.shadowMapType),x.push(w.toneMapping),x.push(w.numClippingPlanes),x.push(w.numClipIntersection),x.push(w.depthPacking)}function M(x,w){o.disableAll(),w.supportsVertexTextures&&o.enable(0),w.instancing&&o.enable(1),w.instancingColor&&o.enable(2),w.instancingMorph&&o.enable(3),w.matcap&&o.enable(4),w.envMap&&o.enable(5),w.normalMapObjectSpace&&o.enable(6),w.normalMapTangentSpace&&o.enable(7),w.clearcoat&&o.enable(8),w.iridescence&&o.enable(9),w.alphaTest&&o.enable(10),w.vertexColors&&o.enable(11),w.vertexAlphas&&o.enable(12),w.vertexUv1s&&o.enable(13),w.vertexUv2s&&o.enable(14),w.vertexUv3s&&o.enable(15),w.vertexTangents&&o.enable(16),w.anisotropy&&o.enable(17),w.alphaHash&&o.enable(18),w.batching&&o.enable(19),w.dispersion&&o.enable(20),w.batchingColor&&o.enable(21),x.push(o.mask),o.disableAll(),w.fog&&o.enable(0),w.useFog&&o.enable(1),w.flatShading&&o.enable(2),w.logarithmicDepthBuffer&&o.enable(3),w.reverseDepthBuffer&&o.enable(4),w.skinning&&o.enable(5),w.morphTargets&&o.enable(6),w.morphNormals&&o.enable(7),w.morphColors&&o.enable(8),w.premultipliedAlpha&&o.enable(9),w.shadowMapEnabled&&o.enable(10),w.doubleSided&&o.enable(11),w.flipSided&&o.enable(12),w.useDepthPacking&&o.enable(13),w.dithering&&o.enable(14),w.transmission&&o.enable(15),w.sheen&&o.enable(16),w.opaque&&o.enable(17),w.pointsUvs&&o.enable(18),w.decodeVideoTexture&&o.enable(19),w.alphaToCoverage&&o.enable(20),x.push(o.mask)}function N(x){let w=g[x.type],k;if(w){let $=un[w];k=Vu.clone($.uniforms)}else k=x.uniforms;return k}function R(x,w){let k;for(let $=0,Y=h.length;$<Y;$++){let ct=h[$];if(ct.cacheKey===w){k=ct,++k.usedTimes;break}}return k===void 0&&(k=new $m(i,w,x,r),h.push(k)),k}function P(x){if(--x.usedTimes===0){let w=h.indexOf(x);h[w]=h[h.length-1],h.pop(),x.destroy()}}function F(x){c.remove(x)}function K(){c.dispose()}return{getParameters:u,getProgramCacheKey:S,getUniforms:N,acquireProgram:R,releaseProgram:P,releaseShaderCache:F,programs:h,dispose:K}}function jm(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,c){i.get(a)[o]=c}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function tg(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Al(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Tl(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(d,f,m,y,g,p){let u=i[t];return u===void 0?(u={id:d.id,object:d,geometry:f,material:m,groupOrder:y,renderOrder:d.renderOrder,z:g,group:p},i[t]=u):(u.id=d.id,u.object=d,u.geometry=f,u.material=m,u.groupOrder=y,u.renderOrder=d.renderOrder,u.z=g,u.group=p),t++,u}function o(d,f,m,y,g,p){let u=a(d,f,m,y,g,p);m.transmission>0?n.push(u):m.transparent===!0?s.push(u):e.push(u)}function c(d,f,m,y,g,p){let u=a(d,f,m,y,g,p);m.transmission>0?n.unshift(u):m.transparent===!0?s.unshift(u):e.unshift(u)}function l(d,f){e.length>1&&e.sort(d||tg),n.length>1&&n.sort(f||Al),s.length>1&&s.sort(f||Al)}function h(){for(let d=t,f=i.length;d<f;d++){let m=i[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:o,unshift:c,finish:h,sort:l}}function eg(){let i=new WeakMap;function t(n,s){let r=i.get(n),a;return r===void 0?(a=new Tl,i.set(n,[a])):s>=r.length?(a=new Tl,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function ng(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new G,color:new Xt};break;case"SpotLight":e={position:new G,direction:new G,color:new Xt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new G,color:new Xt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new G,skyColor:new Xt,groundColor:new Xt};break;case"RectAreaLight":e={color:new Xt,position:new G,halfWidth:new G,halfHeight:new G};break}return i[t.id]=e,e}}}function ig(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ft};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ft};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ft,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var sg=0;function rg(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function ag(i){let t=new ng,e=ig(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new G);let s=new G,r=new ce,a=new ce;function o(l){let h=0,d=0,f=0;for(let K=0;K<9;K++)n.probe[K].set(0,0,0);let m=0,y=0,g=0,p=0,u=0,S=0,_=0,M=0,N=0,R=0,P=0;l.sort(rg);for(let K=0,x=l.length;K<x;K++){let w=l[K],k=w.color,$=w.intensity,Y=w.distance,ct=w.shadow&&w.shadow.map?w.shadow.map.texture:null;if(w.isAmbientLight)h+=k.r*$,d+=k.g*$,f+=k.b*$;else if(w.isLightProbe){for(let q=0;q<9;q++)n.probe[q].addScaledVector(w.sh.coefficients[q],$);P++}else if(w.isDirectionalLight){let q=t.get(w);if(q.color.copy(w.color).multiplyScalar(w.intensity),w.castShadow){let it=w.shadow,U=e.get(w);U.shadowIntensity=it.intensity,U.shadowBias=it.bias,U.shadowNormalBias=it.normalBias,U.shadowRadius=it.radius,U.shadowMapSize=it.mapSize,n.directionalShadow[m]=U,n.directionalShadowMap[m]=ct,n.directionalShadowMatrix[m]=w.shadow.matrix,S++}n.directional[m]=q,m++}else if(w.isSpotLight){let q=t.get(w);q.position.setFromMatrixPosition(w.matrixWorld),q.color.copy(k).multiplyScalar($),q.distance=Y,q.coneCos=Math.cos(w.angle),q.penumbraCos=Math.cos(w.angle*(1-w.penumbra)),q.decay=w.decay,n.spot[g]=q;let it=w.shadow;if(w.map&&(n.spotLightMap[N]=w.map,N++,it.updateMatrices(w),w.castShadow&&R++),n.spotLightMatrix[g]=it.matrix,w.castShadow){let U=e.get(w);U.shadowIntensity=it.intensity,U.shadowBias=it.bias,U.shadowNormalBias=it.normalBias,U.shadowRadius=it.radius,U.shadowMapSize=it.mapSize,n.spotShadow[g]=U,n.spotShadowMap[g]=ct,M++}g++}else if(w.isRectAreaLight){let q=t.get(w);q.color.copy(k).multiplyScalar($),q.halfWidth.set(w.width*.5,0,0),q.halfHeight.set(0,w.height*.5,0),n.rectArea[p]=q,p++}else if(w.isPointLight){let q=t.get(w);if(q.color.copy(w.color).multiplyScalar(w.intensity),q.distance=w.distance,q.decay=w.decay,w.castShadow){let it=w.shadow,U=e.get(w);U.shadowIntensity=it.intensity,U.shadowBias=it.bias,U.shadowNormalBias=it.normalBias,U.shadowRadius=it.radius,U.shadowMapSize=it.mapSize,U.shadowCameraNear=it.camera.near,U.shadowCameraFar=it.camera.far,n.pointShadow[y]=U,n.pointShadowMap[y]=ct,n.pointShadowMatrix[y]=w.shadow.matrix,_++}n.point[y]=q,y++}else if(w.isHemisphereLight){let q=t.get(w);q.skyColor.copy(w.color).multiplyScalar($),q.groundColor.copy(w.groundColor).multiplyScalar($),n.hemi[u]=q,u++}}p>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=St.LTC_FLOAT_1,n.rectAreaLTC2=St.LTC_FLOAT_2):(n.rectAreaLTC1=St.LTC_HALF_1,n.rectAreaLTC2=St.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=f;let F=n.hash;(F.directionalLength!==m||F.pointLength!==y||F.spotLength!==g||F.rectAreaLength!==p||F.hemiLength!==u||F.numDirectionalShadows!==S||F.numPointShadows!==_||F.numSpotShadows!==M||F.numSpotMaps!==N||F.numLightProbes!==P)&&(n.directional.length=m,n.spot.length=g,n.rectArea.length=p,n.point.length=y,n.hemi.length=u,n.directionalShadow.length=S,n.directionalShadowMap.length=S,n.pointShadow.length=_,n.pointShadowMap.length=_,n.spotShadow.length=M,n.spotShadowMap.length=M,n.directionalShadowMatrix.length=S,n.pointShadowMatrix.length=_,n.spotLightMatrix.length=M+N-R,n.spotLightMap.length=N,n.numSpotLightShadowsWithMaps=R,n.numLightProbes=P,F.directionalLength=m,F.pointLength=y,F.spotLength=g,F.rectAreaLength=p,F.hemiLength=u,F.numDirectionalShadows=S,F.numPointShadows=_,F.numSpotShadows=M,F.numSpotMaps=N,F.numLightProbes=P,n.version=sg++)}function c(l,h){let d=0,f=0,m=0,y=0,g=0,p=h.matrixWorldInverse;for(let u=0,S=l.length;u<S;u++){let _=l[u];if(_.isDirectionalLight){let M=n.directional[d];M.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(p),d++}else if(_.isSpotLight){let M=n.spot[m];M.position.setFromMatrixPosition(_.matrixWorld),M.position.applyMatrix4(p),M.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(p),m++}else if(_.isRectAreaLight){let M=n.rectArea[y];M.position.setFromMatrixPosition(_.matrixWorld),M.position.applyMatrix4(p),a.identity(),r.copy(_.matrixWorld),r.premultiply(p),a.extractRotation(r),M.halfWidth.set(_.width*.5,0,0),M.halfHeight.set(0,_.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),y++}else if(_.isPointLight){let M=n.point[f];M.position.setFromMatrixPosition(_.matrixWorld),M.position.applyMatrix4(p),f++}else if(_.isHemisphereLight){let M=n.hemi[g];M.direction.setFromMatrixPosition(_.matrixWorld),M.direction.transformDirection(p),g++}}}return{setup:o,setupView:c,state:n}}function El(i){let t=new ag(i),e=[],n=[];function s(h){l.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function a(h){n.push(h)}function o(){t.setup(e)}function c(h){t.setupView(e,h)}let l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:o,setupLightsView:c,pushLight:r,pushShadow:a}}function og(i){let t=new WeakMap;function e(s,r=0){let a=t.get(s),o;return a===void 0?(o=new El(i),t.set(s,[o])):r>=a.length?(o=new El(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}var Io=class extends Qn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Kh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Lo=class extends Qn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},cg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,lg=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function hg(i,t,e){let n=new Es,s=new ft,r=new ft,a=new de,o=new Io({depthPacking:Qh}),c=new Lo,l={},h=e.maxTextureSize,d={[pn]:Me,[Me]:pn,[Cn]:Cn},f=new ke({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ft},radius:{value:4}},vertexShader:cg,fragmentShader:lg}),m=f.clone();m.defines.HORIZONTAL_PASS=1;let y=new Fe;y.setAttribute("position",new ze(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let g=new Ne(y,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Vl;let u=this.type;this.render=function(R,P,F){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||R.length===0)return;let K=i.getRenderTarget(),x=i.getActiveCubeFace(),w=i.getActiveMipmapLevel(),k=i.state;k.setBlending(dn),k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);let $=u!==Tn&&this.type===Tn,Y=u===Tn&&this.type!==Tn;for(let ct=0,q=R.length;ct<q;ct++){let it=R[ct],U=it.shadow;if(U===void 0){console.warn("THREE.WebGLShadowMap:",it,"has no shadow.");continue}if(U.autoUpdate===!1&&U.needsUpdate===!1)continue;s.copy(U.mapSize);let pt=U.getFrameExtents();if(s.multiply(pt),r.copy(U.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/pt.x),s.x=r.x*pt.x,U.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/pt.y),s.y=r.y*pt.y,U.mapSize.y=r.y)),U.map===null||$===!0||Y===!0){let _t=this.type!==Tn?{minFilter:$e,magFilter:$e}:{};U.map!==null&&U.map.dispose(),U.map=new an(s.x,s.y,_t),U.map.texture.name=it.name+".shadowMap",U.camera.updateProjectionMatrix()}i.setRenderTarget(U.map),i.clear();let dt=U.getViewportCount();for(let _t=0;_t<dt;_t++){let Pt=U.getViewport(_t);a.set(r.x*Pt.x,r.y*Pt.y,r.x*Pt.z,r.y*Pt.w),k.viewport(a),U.updateMatrices(it,_t),n=U.getFrustum(),M(P,F,U.camera,it,this.type)}U.isPointLightShadow!==!0&&this.type===Tn&&S(U,F),U.needsUpdate=!1}u=this.type,p.needsUpdate=!1,i.setRenderTarget(K,x,w)};function S(R,P){let F=t.update(g);f.defines.VSM_SAMPLES!==R.blurSamples&&(f.defines.VSM_SAMPLES=R.blurSamples,m.defines.VSM_SAMPLES=R.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new an(s.x,s.y)),f.uniforms.shadow_pass.value=R.map.texture,f.uniforms.resolution.value=R.mapSize,f.uniforms.radius.value=R.radius,i.setRenderTarget(R.mapPass),i.clear(),i.renderBufferDirect(P,null,F,f,g,null),m.uniforms.shadow_pass.value=R.mapPass.texture,m.uniforms.resolution.value=R.mapSize,m.uniforms.radius.value=R.radius,i.setRenderTarget(R.map),i.clear(),i.renderBufferDirect(P,null,F,m,g,null)}function _(R,P,F,K){let x=null,w=F.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(w!==void 0)x=w;else if(x=F.isPointLight===!0?c:o,i.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0){let k=x.uuid,$=P.uuid,Y=l[k];Y===void 0&&(Y={},l[k]=Y);let ct=Y[$];ct===void 0&&(ct=x.clone(),Y[$]=ct,P.addEventListener("dispose",N)),x=ct}if(x.visible=P.visible,x.wireframe=P.wireframe,K===Tn?x.side=P.shadowSide!==null?P.shadowSide:P.side:x.side=P.shadowSide!==null?P.shadowSide:d[P.side],x.alphaMap=P.alphaMap,x.alphaTest=P.alphaTest,x.map=P.map,x.clipShadows=P.clipShadows,x.clippingPlanes=P.clippingPlanes,x.clipIntersection=P.clipIntersection,x.displacementMap=P.displacementMap,x.displacementScale=P.displacementScale,x.displacementBias=P.displacementBias,x.wireframeLinewidth=P.wireframeLinewidth,x.linewidth=P.linewidth,F.isPointLight===!0&&x.isMeshDistanceMaterial===!0){let k=i.properties.get(x);k.light=F}return x}function M(R,P,F,K,x){if(R.visible===!1)return;if(R.layers.test(P.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&x===Tn)&&(!R.frustumCulled||n.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,R.matrixWorld);let $=t.update(R),Y=R.material;if(Array.isArray(Y)){let ct=$.groups;for(let q=0,it=ct.length;q<it;q++){let U=ct[q],pt=Y[U.materialIndex];if(pt&&pt.visible){let dt=_(R,pt,K,x);R.onBeforeShadow(i,R,P,F,$,dt,U),i.renderBufferDirect(F,null,$,dt,R,U),R.onAfterShadow(i,R,P,F,$,dt,U)}}}else if(Y.visible){let ct=_(R,Y,K,x);R.onBeforeShadow(i,R,P,F,$,ct,null),i.renderBufferDirect(F,null,$,ct,R,null),R.onAfterShadow(i,R,P,F,$,ct,null)}}let k=R.children;for(let $=0,Y=k.length;$<Y;$++)M(k[$],P,F,K,x)}function N(R){R.target.removeEventListener("dispose",N);for(let F in l){let K=l[F],x=R.target.uuid;x in K&&(K[x].dispose(),delete K[x])}}}var ug={[Na]:Fa,[Oa]:ka,[Ba]:Va,[Hi]:za,[Fa]:Na,[ka]:Oa,[Va]:Ba,[za]:Hi};function dg(i){function t(){let z=!1,Et=new de,ot=null,mt=new de(0,0,0,0);return{setMask:function(Tt){ot!==Tt&&!z&&(i.colorMask(Tt,Tt,Tt,Tt),ot=Tt)},setLocked:function(Tt){z=Tt},setClear:function(Tt,Ct,Zt,ee,Se){Se===!0&&(Tt*=ee,Ct*=ee,Zt*=ee),Et.set(Tt,Ct,Zt,ee),mt.equals(Et)===!1&&(i.clearColor(Tt,Ct,Zt,ee),mt.copy(Et))},reset:function(){z=!1,ot=null,mt.set(-1,0,0,0)}}}function e(){let z=!1,Et=!1,ot=null,mt=null,Tt=null;return{setReversed:function(Ct){Et=Ct},setTest:function(Ct){Ct?C(i.DEPTH_TEST):b(i.DEPTH_TEST)},setMask:function(Ct){ot!==Ct&&!z&&(i.depthMask(Ct),ot=Ct)},setFunc:function(Ct){if(Et&&(Ct=ug[Ct]),mt!==Ct){switch(Ct){case Na:i.depthFunc(i.NEVER);break;case Fa:i.depthFunc(i.ALWAYS);break;case Oa:i.depthFunc(i.LESS);break;case Hi:i.depthFunc(i.LEQUAL);break;case Ba:i.depthFunc(i.EQUAL);break;case za:i.depthFunc(i.GEQUAL);break;case ka:i.depthFunc(i.GREATER);break;case Va:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}mt=Ct}},setLocked:function(Ct){z=Ct},setClear:function(Ct){Tt!==Ct&&(i.clearDepth(Ct),Tt=Ct)},reset:function(){z=!1,ot=null,mt=null,Tt=null}}}function n(){let z=!1,Et=null,ot=null,mt=null,Tt=null,Ct=null,Zt=null,ee=null,Se=null;return{setTest:function($t){z||($t?C(i.STENCIL_TEST):b(i.STENCIL_TEST))},setMask:function($t){Et!==$t&&!z&&(i.stencilMask($t),Et=$t)},setFunc:function($t,xe,Ve){(ot!==$t||mt!==xe||Tt!==Ve)&&(i.stencilFunc($t,xe,Ve),ot=$t,mt=xe,Tt=Ve)},setOp:function($t,xe,Ve){(Ct!==$t||Zt!==xe||ee!==Ve)&&(i.stencilOp($t,xe,Ve),Ct=$t,Zt=xe,ee=Ve)},setLocked:function($t){z=$t},setClear:function($t){Se!==$t&&(i.clearStencil($t),Se=$t)},reset:function(){z=!1,Et=null,ot=null,mt=null,Tt=null,Ct=null,Zt=null,ee=null,Se=null}}}let s=new t,r=new e,a=new n,o=new WeakMap,c=new WeakMap,l={},h={},d=new WeakMap,f=[],m=null,y=!1,g=null,p=null,u=null,S=null,_=null,M=null,N=null,R=new Xt(0,0,0),P=0,F=!1,K=null,x=null,w=null,k=null,$=null,Y=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),ct=!1,q=0,it=i.getParameter(i.VERSION);it.indexOf("WebGL")!==-1?(q=parseFloat(/^WebGL (\d)/.exec(it)[1]),ct=q>=1):it.indexOf("OpenGL ES")!==-1&&(q=parseFloat(/^OpenGL ES (\d)/.exec(it)[1]),ct=q>=2);let U=null,pt={},dt=i.getParameter(i.SCISSOR_BOX),_t=i.getParameter(i.VIEWPORT),Pt=new de().fromArray(dt),Ot=new de().fromArray(_t);function D(z,Et,ot,mt){let Tt=new Uint8Array(4),Ct=i.createTexture();i.bindTexture(z,Ct),i.texParameteri(z,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(z,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Zt=0;Zt<ot;Zt++)z===i.TEXTURE_3D||z===i.TEXTURE_2D_ARRAY?i.texImage3D(Et,0,i.RGBA,1,1,mt,0,i.RGBA,i.UNSIGNED_BYTE,Tt):i.texImage2D(Et+Zt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Tt);return Ct}let L={};L[i.TEXTURE_2D]=D(i.TEXTURE_2D,i.TEXTURE_2D,1),L[i.TEXTURE_CUBE_MAP]=D(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),L[i.TEXTURE_2D_ARRAY]=D(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),L[i.TEXTURE_3D]=D(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),r.setClear(1),a.setClear(0),C(i.DEPTH_TEST),r.setFunc(Hi),J(!1),j(Lc),C(i.CULL_FACE),T(dn);function C(z){l[z]!==!0&&(i.enable(z),l[z]=!0)}function b(z){l[z]!==!1&&(i.disable(z),l[z]=!1)}function Q(z,Et){return h[z]!==Et?(i.bindFramebuffer(z,Et),h[z]=Et,z===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=Et),z===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=Et),!0):!1}function st(z,Et){let ot=f,mt=!1;if(z){ot=d.get(Et),ot===void 0&&(ot=[],d.set(Et,ot));let Tt=z.textures;if(ot.length!==Tt.length||ot[0]!==i.COLOR_ATTACHMENT0){for(let Ct=0,Zt=Tt.length;Ct<Zt;Ct++)ot[Ct]=i.COLOR_ATTACHMENT0+Ct;ot.length=Tt.length,mt=!0}}else ot[0]!==i.BACK&&(ot[0]=i.BACK,mt=!0);mt&&i.drawBuffers(ot)}function Z(z){return m!==z?(i.useProgram(z),m=z,!0):!1}let lt={[ci]:i.FUNC_ADD,[wh]:i.FUNC_SUBTRACT,[Ah]:i.FUNC_REVERSE_SUBTRACT};lt[Th]=i.MIN,lt[Eh]=i.MAX;let W={[Ch]:i.ZERO,[Rh]:i.ONE,[Ph]:i.SRC_COLOR,[Da]:i.SRC_ALPHA,[Fh]:i.SRC_ALPHA_SATURATE,[Uh]:i.DST_COLOR,[Lh]:i.DST_ALPHA,[Ih]:i.ONE_MINUS_SRC_COLOR,[Ua]:i.ONE_MINUS_SRC_ALPHA,[Nh]:i.ONE_MINUS_DST_COLOR,[Dh]:i.ONE_MINUS_DST_ALPHA,[Oh]:i.CONSTANT_COLOR,[Bh]:i.ONE_MINUS_CONSTANT_COLOR,[zh]:i.CONSTANT_ALPHA,[kh]:i.ONE_MINUS_CONSTANT_ALPHA};function T(z,Et,ot,mt,Tt,Ct,Zt,ee,Se,$t){if(z===dn){y===!0&&(b(i.BLEND),y=!1);return}if(y===!1&&(C(i.BLEND),y=!0),z!==bh){if(z!==g||$t!==F){if((p!==ci||_!==ci)&&(i.blendEquation(i.FUNC_ADD),p=ci,_=ci),$t)switch(z){case Yn:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Dc:i.blendFunc(i.ONE,i.ONE);break;case Uc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Nc:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}else switch(z){case Yn:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Dc:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Uc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Nc:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}u=null,S=null,M=null,N=null,R.set(0,0,0),P=0,g=z,F=$t}return}Tt=Tt||Et,Ct=Ct||ot,Zt=Zt||mt,(Et!==p||Tt!==_)&&(i.blendEquationSeparate(lt[Et],lt[Tt]),p=Et,_=Tt),(ot!==u||mt!==S||Ct!==M||Zt!==N)&&(i.blendFuncSeparate(W[ot],W[mt],W[Ct],W[Zt]),u=ot,S=mt,M=Ct,N=Zt),(ee.equals(R)===!1||Se!==P)&&(i.blendColor(ee.r,ee.g,ee.b,Se),R.copy(ee),P=Se),g=z,F=!1}function B(z,Et){z.side===Cn?b(i.CULL_FACE):C(i.CULL_FACE);let ot=z.side===Me;Et&&(ot=!ot),J(ot),z.blending===Yn&&z.transparent===!1?T(dn):T(z.blending,z.blendEquation,z.blendSrc,z.blendDst,z.blendEquationAlpha,z.blendSrcAlpha,z.blendDstAlpha,z.blendColor,z.blendAlpha,z.premultipliedAlpha),r.setFunc(z.depthFunc),r.setTest(z.depthTest),r.setMask(z.depthWrite),s.setMask(z.colorWrite);let mt=z.stencilWrite;a.setTest(mt),mt&&(a.setMask(z.stencilWriteMask),a.setFunc(z.stencilFunc,z.stencilRef,z.stencilFuncMask),a.setOp(z.stencilFail,z.stencilZFail,z.stencilZPass)),O(z.polygonOffset,z.polygonOffsetFactor,z.polygonOffsetUnits),z.alphaToCoverage===!0?C(i.SAMPLE_ALPHA_TO_COVERAGE):b(i.SAMPLE_ALPHA_TO_COVERAGE)}function J(z){K!==z&&(z?i.frontFace(i.CW):i.frontFace(i.CCW),K=z)}function j(z){z!==vh?(C(i.CULL_FACE),z!==x&&(z===Lc?i.cullFace(i.BACK):z===Mh?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):b(i.CULL_FACE),x=z}function rt(z){z!==w&&(ct&&i.lineWidth(z),w=z)}function O(z,Et,ot){z?(C(i.POLYGON_OFFSET_FILL),(k!==Et||$!==ot)&&(i.polygonOffset(Et,ot),k=Et,$=ot)):b(i.POLYGON_OFFSET_FILL)}function I(z){z?C(i.SCISSOR_TEST):b(i.SCISSOR_TEST)}function A(z){z===void 0&&(z=i.TEXTURE0+Y-1),U!==z&&(i.activeTexture(z),U=z)}function v(z,Et,ot){ot===void 0&&(U===null?ot=i.TEXTURE0+Y-1:ot=U);let mt=pt[ot];mt===void 0&&(mt={type:void 0,texture:void 0},pt[ot]=mt),(mt.type!==z||mt.texture!==Et)&&(U!==ot&&(i.activeTexture(ot),U=ot),i.bindTexture(z,Et||L[z]),mt.type=z,mt.texture=Et)}function X(){let z=pt[U];z!==void 0&&z.type!==void 0&&(i.bindTexture(z.type,null),z.type=void 0,z.texture=void 0)}function at(){try{i.compressedTexImage2D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function ut(){try{i.compressedTexImage3D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function ht(){try{i.texSubImage2D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function It(){try{i.texSubImage3D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function vt(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Mt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Ht(){try{i.texStorage2D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function gt(){try{i.texStorage3D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function bt(){try{i.texImage2D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Dt(){try{i.texImage3D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function kt(z){Pt.equals(z)===!1&&(i.scissor(z.x,z.y,z.z,z.w),Pt.copy(z))}function wt(z){Ot.equals(z)===!1&&(i.viewport(z.x,z.y,z.z,z.w),Ot.copy(z))}function Yt(z,Et){let ot=c.get(Et);ot===void 0&&(ot=new WeakMap,c.set(Et,ot));let mt=ot.get(z);mt===void 0&&(mt=i.getUniformBlockIndex(Et,z.name),ot.set(z,mt))}function Wt(z,Et){let mt=c.get(Et).get(z);o.get(Et)!==mt&&(i.uniformBlockBinding(Et,mt,z.__bindingPointIndex),o.set(Et,mt))}function Qt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),l={},U=null,pt={},h={},d=new WeakMap,f=[],m=null,y=!1,g=null,p=null,u=null,S=null,_=null,M=null,N=null,R=new Xt(0,0,0),P=0,F=!1,K=null,x=null,w=null,k=null,$=null,Pt.set(0,0,i.canvas.width,i.canvas.height),Ot.set(0,0,i.canvas.width,i.canvas.height),s.reset(),r.reset(),a.reset()}return{buffers:{color:s,depth:r,stencil:a},enable:C,disable:b,bindFramebuffer:Q,drawBuffers:st,useProgram:Z,setBlending:T,setMaterial:B,setFlipSided:J,setCullFace:j,setLineWidth:rt,setPolygonOffset:O,setScissorTest:I,activeTexture:A,bindTexture:v,unbindTexture:X,compressedTexImage2D:at,compressedTexImage3D:ut,texImage2D:bt,texImage3D:Dt,updateUBOMapping:Yt,uniformBlockBinding:Wt,texStorage2D:Ht,texStorage3D:gt,texSubImage2D:ht,texSubImage3D:It,compressedTexSubImage2D:vt,compressedTexSubImage3D:Mt,scissor:kt,viewport:wt,reset:Qt}}function Cl(i,t,e,n){let s=fg(n);switch(e){case Yl:return i*t;case Jl:return i*t;case $l:return i*t*2;case Kl:return i*t/s.components*s.byteLength;case uc:return i*t/s.components*s.byteLength;case Ql:return i*t*2/s.components*s.byteLength;case dc:return i*t*2/s.components*s.byteLength;case Zl:return i*t*3/s.components*s.byteLength;case Ye:return i*t*4/s.components*s.byteLength;case fc:return i*t*4/s.components*s.byteLength;case hr:case ur:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case dr:case fr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ya:case Ja:return Math.max(i,16)*Math.max(t,8)/4;case qa:case Za:return Math.max(i,8)*Math.max(t,8)/2;case $a:case Ka:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Qa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ja:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case to:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case eo:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case no:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case io:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case so:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case ro:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case ao:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case oo:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case co:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case lo:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case ho:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case uo:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case fo:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case pr:case po:case mo:return Math.ceil(i/4)*Math.ceil(t/4)*16;case jl:case go:return Math.ceil(i/4)*Math.ceil(t/4)*8;case _o:case xo:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function fg(i){switch(i){case Ln:case Wl:return{byteLength:1,components:1};case Ss:case Xl:case gi:return{byteLength:2,components:1};case lc:case hc:return{byteLength:2,components:4};case di:case cc:case Pn:return{byteLength:4,components:1};case ql:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function pg(i,t,e,n,s,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new ft,h=new WeakMap,d,f=new WeakMap,m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(A,v){return m?new OffscreenCanvas(A,v):Mr("canvas")}function g(A,v,X){let at=1,ut=I(A);if((ut.width>X||ut.height>X)&&(at=X/Math.max(ut.width,ut.height)),at<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){let ht=Math.floor(at*ut.width),It=Math.floor(at*ut.height);d===void 0&&(d=y(ht,It));let vt=v?y(ht,It):d;return vt.width=ht,vt.height=It,vt.getContext("2d").drawImage(A,0,0,ht,It),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ut.width+"x"+ut.height+") to ("+ht+"x"+It+")."),vt}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ut.width+"x"+ut.height+")."),A;return A}function p(A){return A.generateMipmaps&&A.minFilter!==$e&&A.minFilter!==qe}function u(A){i.generateMipmap(A)}function S(A,v,X,at,ut=!1){if(A!==null){if(i[A]!==void 0)return i[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let ht=v;if(v===i.RED&&(X===i.FLOAT&&(ht=i.R32F),X===i.HALF_FLOAT&&(ht=i.R16F),X===i.UNSIGNED_BYTE&&(ht=i.R8)),v===i.RED_INTEGER&&(X===i.UNSIGNED_BYTE&&(ht=i.R8UI),X===i.UNSIGNED_SHORT&&(ht=i.R16UI),X===i.UNSIGNED_INT&&(ht=i.R32UI),X===i.BYTE&&(ht=i.R8I),X===i.SHORT&&(ht=i.R16I),X===i.INT&&(ht=i.R32I)),v===i.RG&&(X===i.FLOAT&&(ht=i.RG32F),X===i.HALF_FLOAT&&(ht=i.RG16F),X===i.UNSIGNED_BYTE&&(ht=i.RG8)),v===i.RG_INTEGER&&(X===i.UNSIGNED_BYTE&&(ht=i.RG8UI),X===i.UNSIGNED_SHORT&&(ht=i.RG16UI),X===i.UNSIGNED_INT&&(ht=i.RG32UI),X===i.BYTE&&(ht=i.RG8I),X===i.SHORT&&(ht=i.RG16I),X===i.INT&&(ht=i.RG32I)),v===i.RGB_INTEGER&&(X===i.UNSIGNED_BYTE&&(ht=i.RGB8UI),X===i.UNSIGNED_SHORT&&(ht=i.RGB16UI),X===i.UNSIGNED_INT&&(ht=i.RGB32UI),X===i.BYTE&&(ht=i.RGB8I),X===i.SHORT&&(ht=i.RGB16I),X===i.INT&&(ht=i.RGB32I)),v===i.RGBA_INTEGER&&(X===i.UNSIGNED_BYTE&&(ht=i.RGBA8UI),X===i.UNSIGNED_SHORT&&(ht=i.RGBA16UI),X===i.UNSIGNED_INT&&(ht=i.RGBA32UI),X===i.BYTE&&(ht=i.RGBA8I),X===i.SHORT&&(ht=i.RGBA16I),X===i.INT&&(ht=i.RGBA32I)),v===i.RGB&&X===i.UNSIGNED_INT_5_9_9_9_REV&&(ht=i.RGB9_E5),v===i.RGBA){let It=ut?_r:se.getTransfer(at);X===i.FLOAT&&(ht=i.RGBA32F),X===i.HALF_FLOAT&&(ht=i.RGBA16F),X===i.UNSIGNED_BYTE&&(ht=It===ae?i.SRGB8_ALPHA8:i.RGBA8),X===i.UNSIGNED_SHORT_4_4_4_4&&(ht=i.RGBA4),X===i.UNSIGNED_SHORT_5_5_5_1&&(ht=i.RGB5_A1)}return(ht===i.R16F||ht===i.R32F||ht===i.RG16F||ht===i.RG32F||ht===i.RGBA16F||ht===i.RGBA32F)&&t.get("EXT_color_buffer_float"),ht}function _(A,v){let X;return A?v===null||v===di||v===qi?X=i.DEPTH24_STENCIL8:v===Pn?X=i.DEPTH32F_STENCIL8:v===Ss&&(X=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===di||v===qi?X=i.DEPTH_COMPONENT24:v===Pn?X=i.DEPTH_COMPONENT32F:v===Ss&&(X=i.DEPTH_COMPONENT16),X}function M(A,v){return p(A)===!0||A.isFramebufferTexture&&A.minFilter!==$e&&A.minFilter!==qe?Math.log2(Math.max(v.width,v.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?v.mipmaps.length:1}function N(A){let v=A.target;v.removeEventListener("dispose",N),P(v),v.isVideoTexture&&h.delete(v)}function R(A){let v=A.target;v.removeEventListener("dispose",R),K(v)}function P(A){let v=n.get(A);if(v.__webglInit===void 0)return;let X=A.source,at=f.get(X);if(at){let ut=at[v.__cacheKey];ut.usedTimes--,ut.usedTimes===0&&F(A),Object.keys(at).length===0&&f.delete(X)}n.remove(A)}function F(A){let v=n.get(A);i.deleteTexture(v.__webglTexture);let X=A.source,at=f.get(X);delete at[v.__cacheKey],a.memory.textures--}function K(A){let v=n.get(A);if(A.depthTexture&&A.depthTexture.dispose(),A.isWebGLCubeRenderTarget)for(let at=0;at<6;at++){if(Array.isArray(v.__webglFramebuffer[at]))for(let ut=0;ut<v.__webglFramebuffer[at].length;ut++)i.deleteFramebuffer(v.__webglFramebuffer[at][ut]);else i.deleteFramebuffer(v.__webglFramebuffer[at]);v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer[at])}else{if(Array.isArray(v.__webglFramebuffer))for(let at=0;at<v.__webglFramebuffer.length;at++)i.deleteFramebuffer(v.__webglFramebuffer[at]);else i.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&i.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let at=0;at<v.__webglColorRenderbuffer.length;at++)v.__webglColorRenderbuffer[at]&&i.deleteRenderbuffer(v.__webglColorRenderbuffer[at]);v.__webglDepthRenderbuffer&&i.deleteRenderbuffer(v.__webglDepthRenderbuffer)}let X=A.textures;for(let at=0,ut=X.length;at<ut;at++){let ht=n.get(X[at]);ht.__webglTexture&&(i.deleteTexture(ht.__webglTexture),a.memory.textures--),n.remove(X[at])}n.remove(A)}let x=0;function w(){x=0}function k(){let A=x;return A>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+s.maxTextures),x+=1,A}function $(A){let v=[];return v.push(A.wrapS),v.push(A.wrapT),v.push(A.wrapR||0),v.push(A.magFilter),v.push(A.minFilter),v.push(A.anisotropy),v.push(A.internalFormat),v.push(A.format),v.push(A.type),v.push(A.generateMipmaps),v.push(A.premultiplyAlpha),v.push(A.flipY),v.push(A.unpackAlignment),v.push(A.colorSpace),v.join()}function Y(A,v){let X=n.get(A);if(A.isVideoTexture&&rt(A),A.isRenderTargetTexture===!1&&A.version>0&&X.__version!==A.version){let at=A.image;if(at===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(at.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Ot(X,A,v);return}}e.bindTexture(i.TEXTURE_2D,X.__webglTexture,i.TEXTURE0+v)}function ct(A,v){let X=n.get(A);if(A.version>0&&X.__version!==A.version){Ot(X,A,v);return}e.bindTexture(i.TEXTURE_2D_ARRAY,X.__webglTexture,i.TEXTURE0+v)}function q(A,v){let X=n.get(A);if(A.version>0&&X.__version!==A.version){Ot(X,A,v);return}e.bindTexture(i.TEXTURE_3D,X.__webglTexture,i.TEXTURE0+v)}function it(A,v){let X=n.get(A);if(A.version>0&&X.__version!==A.version){D(X,A,v);return}e.bindTexture(i.TEXTURE_CUBE_MAP,X.__webglTexture,i.TEXTURE0+v)}let U={[Wa]:i.REPEAT,[hi]:i.CLAMP_TO_EDGE,[Xa]:i.MIRRORED_REPEAT},pt={[$e]:i.NEAREST,[$h]:i.NEAREST_MIPMAP_NEAREST,[Os]:i.NEAREST_MIPMAP_LINEAR,[qe]:i.LINEAR,[ta]:i.LINEAR_MIPMAP_NEAREST,[ui]:i.LINEAR_MIPMAP_LINEAR},dt={[tu]:i.NEVER,[au]:i.ALWAYS,[eu]:i.LESS,[eh]:i.LEQUAL,[nu]:i.EQUAL,[ru]:i.GEQUAL,[iu]:i.GREATER,[su]:i.NOTEQUAL};function _t(A,v){if(v.type===Pn&&t.has("OES_texture_float_linear")===!1&&(v.magFilter===qe||v.magFilter===ta||v.magFilter===Os||v.magFilter===ui||v.minFilter===qe||v.minFilter===ta||v.minFilter===Os||v.minFilter===ui)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(A,i.TEXTURE_WRAP_S,U[v.wrapS]),i.texParameteri(A,i.TEXTURE_WRAP_T,U[v.wrapT]),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,U[v.wrapR]),i.texParameteri(A,i.TEXTURE_MAG_FILTER,pt[v.magFilter]),i.texParameteri(A,i.TEXTURE_MIN_FILTER,pt[v.minFilter]),v.compareFunction&&(i.texParameteri(A,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(A,i.TEXTURE_COMPARE_FUNC,dt[v.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===$e||v.minFilter!==Os&&v.minFilter!==ui||v.type===Pn&&t.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||n.get(v).__currentAnisotropy){let X=t.get("EXT_texture_filter_anisotropic");i.texParameterf(A,X.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy}}}function Pt(A,v){let X=!1;A.__webglInit===void 0&&(A.__webglInit=!0,v.addEventListener("dispose",N));let at=v.source,ut=f.get(at);ut===void 0&&(ut={},f.set(at,ut));let ht=$(v);if(ht!==A.__cacheKey){ut[ht]===void 0&&(ut[ht]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,X=!0),ut[ht].usedTimes++;let It=ut[A.__cacheKey];It!==void 0&&(ut[A.__cacheKey].usedTimes--,It.usedTimes===0&&F(v)),A.__cacheKey=ht,A.__webglTexture=ut[ht].texture}return X}function Ot(A,v,X){let at=i.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(at=i.TEXTURE_2D_ARRAY),v.isData3DTexture&&(at=i.TEXTURE_3D);let ut=Pt(A,v),ht=v.source;e.bindTexture(at,A.__webglTexture,i.TEXTURE0+X);let It=n.get(ht);if(ht.version!==It.__version||ut===!0){e.activeTexture(i.TEXTURE0+X);let vt=se.getPrimaries(se.workingColorSpace),Mt=v.colorSpace===Xn?null:se.getPrimaries(v.colorSpace),Ht=v.colorSpace===Xn||vt===Mt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ht);let gt=g(v.image,!1,s.maxTextureSize);gt=O(v,gt);let bt=r.convert(v.format,v.colorSpace),Dt=r.convert(v.type),kt=S(v.internalFormat,bt,Dt,v.colorSpace,v.isVideoTexture);_t(at,v);let wt,Yt=v.mipmaps,Wt=v.isVideoTexture!==!0,Qt=It.__version===void 0||ut===!0,z=ht.dataReady,Et=M(v,gt);if(v.isDepthTexture)kt=_(v.format===Yi,v.type),Qt&&(Wt?e.texStorage2D(i.TEXTURE_2D,1,kt,gt.width,gt.height):e.texImage2D(i.TEXTURE_2D,0,kt,gt.width,gt.height,0,bt,Dt,null));else if(v.isDataTexture)if(Yt.length>0){Wt&&Qt&&e.texStorage2D(i.TEXTURE_2D,Et,kt,Yt[0].width,Yt[0].height);for(let ot=0,mt=Yt.length;ot<mt;ot++)wt=Yt[ot],Wt?z&&e.texSubImage2D(i.TEXTURE_2D,ot,0,0,wt.width,wt.height,bt,Dt,wt.data):e.texImage2D(i.TEXTURE_2D,ot,kt,wt.width,wt.height,0,bt,Dt,wt.data);v.generateMipmaps=!1}else Wt?(Qt&&e.texStorage2D(i.TEXTURE_2D,Et,kt,gt.width,gt.height),z&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,gt.width,gt.height,bt,Dt,gt.data)):e.texImage2D(i.TEXTURE_2D,0,kt,gt.width,gt.height,0,bt,Dt,gt.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){Wt&&Qt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Et,kt,Yt[0].width,Yt[0].height,gt.depth);for(let ot=0,mt=Yt.length;ot<mt;ot++)if(wt=Yt[ot],v.format!==Ye)if(bt!==null)if(Wt){if(z)if(v.layerUpdates.size>0){let Tt=Cl(wt.width,wt.height,v.format,v.type);for(let Ct of v.layerUpdates){let Zt=wt.data.subarray(Ct*Tt/wt.data.BYTES_PER_ELEMENT,(Ct+1)*Tt/wt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ot,0,0,Ct,wt.width,wt.height,1,bt,Zt,0,0)}v.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ot,0,0,0,wt.width,wt.height,gt.depth,bt,wt.data,0,0)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ot,kt,wt.width,wt.height,gt.depth,0,wt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Wt?z&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,ot,0,0,0,wt.width,wt.height,gt.depth,bt,Dt,wt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,ot,kt,wt.width,wt.height,gt.depth,0,bt,Dt,wt.data)}else{Wt&&Qt&&e.texStorage2D(i.TEXTURE_2D,Et,kt,Yt[0].width,Yt[0].height);for(let ot=0,mt=Yt.length;ot<mt;ot++)wt=Yt[ot],v.format!==Ye?bt!==null?Wt?z&&e.compressedTexSubImage2D(i.TEXTURE_2D,ot,0,0,wt.width,wt.height,bt,wt.data):e.compressedTexImage2D(i.TEXTURE_2D,ot,kt,wt.width,wt.height,0,wt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Wt?z&&e.texSubImage2D(i.TEXTURE_2D,ot,0,0,wt.width,wt.height,bt,Dt,wt.data):e.texImage2D(i.TEXTURE_2D,ot,kt,wt.width,wt.height,0,bt,Dt,wt.data)}else if(v.isDataArrayTexture)if(Wt){if(Qt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Et,kt,gt.width,gt.height,gt.depth),z)if(v.layerUpdates.size>0){let ot=Cl(gt.width,gt.height,v.format,v.type);for(let mt of v.layerUpdates){let Tt=gt.data.subarray(mt*ot/gt.data.BYTES_PER_ELEMENT,(mt+1)*ot/gt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,mt,gt.width,gt.height,1,bt,Dt,Tt)}v.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,gt.width,gt.height,gt.depth,bt,Dt,gt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,kt,gt.width,gt.height,gt.depth,0,bt,Dt,gt.data);else if(v.isData3DTexture)Wt?(Qt&&e.texStorage3D(i.TEXTURE_3D,Et,kt,gt.width,gt.height,gt.depth),z&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,gt.width,gt.height,gt.depth,bt,Dt,gt.data)):e.texImage3D(i.TEXTURE_3D,0,kt,gt.width,gt.height,gt.depth,0,bt,Dt,gt.data);else if(v.isFramebufferTexture){if(Qt)if(Wt)e.texStorage2D(i.TEXTURE_2D,Et,kt,gt.width,gt.height);else{let ot=gt.width,mt=gt.height;for(let Tt=0;Tt<Et;Tt++)e.texImage2D(i.TEXTURE_2D,Tt,kt,ot,mt,0,bt,Dt,null),ot>>=1,mt>>=1}}else if(Yt.length>0){if(Wt&&Qt){let ot=I(Yt[0]);e.texStorage2D(i.TEXTURE_2D,Et,kt,ot.width,ot.height)}for(let ot=0,mt=Yt.length;ot<mt;ot++)wt=Yt[ot],Wt?z&&e.texSubImage2D(i.TEXTURE_2D,ot,0,0,bt,Dt,wt):e.texImage2D(i.TEXTURE_2D,ot,kt,bt,Dt,wt);v.generateMipmaps=!1}else if(Wt){if(Qt){let ot=I(gt);e.texStorage2D(i.TEXTURE_2D,Et,kt,ot.width,ot.height)}z&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,bt,Dt,gt)}else e.texImage2D(i.TEXTURE_2D,0,kt,bt,Dt,gt);p(v)&&u(at),It.__version=ht.version,v.onUpdate&&v.onUpdate(v)}A.__version=v.version}function D(A,v,X){if(v.image.length!==6)return;let at=Pt(A,v),ut=v.source;e.bindTexture(i.TEXTURE_CUBE_MAP,A.__webglTexture,i.TEXTURE0+X);let ht=n.get(ut);if(ut.version!==ht.__version||at===!0){e.activeTexture(i.TEXTURE0+X);let It=se.getPrimaries(se.workingColorSpace),vt=v.colorSpace===Xn?null:se.getPrimaries(v.colorSpace),Mt=v.colorSpace===Xn||It===vt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Mt);let Ht=v.isCompressedTexture||v.image[0].isCompressedTexture,gt=v.image[0]&&v.image[0].isDataTexture,bt=[];for(let mt=0;mt<6;mt++)!Ht&&!gt?bt[mt]=g(v.image[mt],!0,s.maxCubemapSize):bt[mt]=gt?v.image[mt].image:v.image[mt],bt[mt]=O(v,bt[mt]);let Dt=bt[0],kt=r.convert(v.format,v.colorSpace),wt=r.convert(v.type),Yt=S(v.internalFormat,kt,wt,v.colorSpace),Wt=v.isVideoTexture!==!0,Qt=ht.__version===void 0||at===!0,z=ut.dataReady,Et=M(v,Dt);_t(i.TEXTURE_CUBE_MAP,v);let ot;if(Ht){Wt&&Qt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Et,Yt,Dt.width,Dt.height);for(let mt=0;mt<6;mt++){ot=bt[mt].mipmaps;for(let Tt=0;Tt<ot.length;Tt++){let Ct=ot[Tt];v.format!==Ye?kt!==null?Wt?z&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,Tt,0,0,Ct.width,Ct.height,kt,Ct.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,Tt,Yt,Ct.width,Ct.height,0,Ct.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Wt?z&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,Tt,0,0,Ct.width,Ct.height,kt,wt,Ct.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,Tt,Yt,Ct.width,Ct.height,0,kt,wt,Ct.data)}}}else{if(ot=v.mipmaps,Wt&&Qt){ot.length>0&&Et++;let mt=I(bt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,Et,Yt,mt.width,mt.height)}for(let mt=0;mt<6;mt++)if(gt){Wt?z&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0,0,0,bt[mt].width,bt[mt].height,kt,wt,bt[mt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0,Yt,bt[mt].width,bt[mt].height,0,kt,wt,bt[mt].data);for(let Tt=0;Tt<ot.length;Tt++){let Zt=ot[Tt].image[mt].image;Wt?z&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,Tt+1,0,0,Zt.width,Zt.height,kt,wt,Zt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,Tt+1,Yt,Zt.width,Zt.height,0,kt,wt,Zt.data)}}else{Wt?z&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0,0,0,kt,wt,bt[mt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0,Yt,kt,wt,bt[mt]);for(let Tt=0;Tt<ot.length;Tt++){let Ct=ot[Tt];Wt?z&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,Tt+1,0,0,kt,wt,Ct.image[mt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,Tt+1,Yt,kt,wt,Ct.image[mt])}}}p(v)&&u(i.TEXTURE_CUBE_MAP),ht.__version=ut.version,v.onUpdate&&v.onUpdate(v)}A.__version=v.version}function L(A,v,X,at,ut,ht){let It=r.convert(X.format,X.colorSpace),vt=r.convert(X.type),Mt=S(X.internalFormat,It,vt,X.colorSpace);if(!n.get(v).__hasExternalTextures){let gt=Math.max(1,v.width>>ht),bt=Math.max(1,v.height>>ht);ut===i.TEXTURE_3D||ut===i.TEXTURE_2D_ARRAY?e.texImage3D(ut,ht,Mt,gt,bt,v.depth,0,It,vt,null):e.texImage2D(ut,ht,Mt,gt,bt,0,It,vt,null)}e.bindFramebuffer(i.FRAMEBUFFER,A),j(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,at,ut,n.get(X).__webglTexture,0,J(v)):(ut===i.TEXTURE_2D||ut>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ut<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,at,ut,n.get(X).__webglTexture,ht),e.bindFramebuffer(i.FRAMEBUFFER,null)}function C(A,v,X){if(i.bindRenderbuffer(i.RENDERBUFFER,A),v.depthBuffer){let at=v.depthTexture,ut=at&&at.isDepthTexture?at.type:null,ht=_(v.stencilBuffer,ut),It=v.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,vt=J(v);j(v)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,vt,ht,v.width,v.height):X?i.renderbufferStorageMultisample(i.RENDERBUFFER,vt,ht,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,ht,v.width,v.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,It,i.RENDERBUFFER,A)}else{let at=v.textures;for(let ut=0;ut<at.length;ut++){let ht=at[ut],It=r.convert(ht.format,ht.colorSpace),vt=r.convert(ht.type),Mt=S(ht.internalFormat,It,vt,ht.colorSpace),Ht=J(v);X&&j(v)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ht,Mt,v.width,v.height):j(v)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ht,Mt,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,Mt,v.width,v.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function b(A,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,A),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(v.depthTexture).__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),Y(v.depthTexture,0);let at=n.get(v.depthTexture).__webglTexture,ut=J(v);if(v.depthTexture.format===ki)j(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,at,0,ut):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,at,0);else if(v.depthTexture.format===Yi)j(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,at,0,ut):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,at,0);else throw new Error("Unknown depthTexture format")}function Q(A){let v=n.get(A),X=A.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==A.depthTexture){let at=A.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),at){let ut=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,at.removeEventListener("dispose",ut)};at.addEventListener("dispose",ut),v.__depthDisposeCallback=ut}v.__boundDepthTexture=at}if(A.depthTexture&&!v.__autoAllocateDepthBuffer){if(X)throw new Error("target.depthTexture not supported in Cube render targets");b(v.__webglFramebuffer,A)}else if(X){v.__webglDepthbuffer=[];for(let at=0;at<6;at++)if(e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[at]),v.__webglDepthbuffer[at]===void 0)v.__webglDepthbuffer[at]=i.createRenderbuffer(),C(v.__webglDepthbuffer[at],A,!1);else{let ut=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ht=v.__webglDepthbuffer[at];i.bindRenderbuffer(i.RENDERBUFFER,ht),i.framebufferRenderbuffer(i.FRAMEBUFFER,ut,i.RENDERBUFFER,ht)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=i.createRenderbuffer(),C(v.__webglDepthbuffer,A,!1);else{let at=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ut=v.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ut),i.framebufferRenderbuffer(i.FRAMEBUFFER,at,i.RENDERBUFFER,ut)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function st(A,v,X){let at=n.get(A);v!==void 0&&L(at.__webglFramebuffer,A,A.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),X!==void 0&&Q(A)}function Z(A){let v=A.texture,X=n.get(A),at=n.get(v);A.addEventListener("dispose",R);let ut=A.textures,ht=A.isWebGLCubeRenderTarget===!0,It=ut.length>1;if(It||(at.__webglTexture===void 0&&(at.__webglTexture=i.createTexture()),at.__version=v.version,a.memory.textures++),ht){X.__webglFramebuffer=[];for(let vt=0;vt<6;vt++)if(v.mipmaps&&v.mipmaps.length>0){X.__webglFramebuffer[vt]=[];for(let Mt=0;Mt<v.mipmaps.length;Mt++)X.__webglFramebuffer[vt][Mt]=i.createFramebuffer()}else X.__webglFramebuffer[vt]=i.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){X.__webglFramebuffer=[];for(let vt=0;vt<v.mipmaps.length;vt++)X.__webglFramebuffer[vt]=i.createFramebuffer()}else X.__webglFramebuffer=i.createFramebuffer();if(It)for(let vt=0,Mt=ut.length;vt<Mt;vt++){let Ht=n.get(ut[vt]);Ht.__webglTexture===void 0&&(Ht.__webglTexture=i.createTexture(),a.memory.textures++)}if(A.samples>0&&j(A)===!1){X.__webglMultisampledFramebuffer=i.createFramebuffer(),X.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,X.__webglMultisampledFramebuffer);for(let vt=0;vt<ut.length;vt++){let Mt=ut[vt];X.__webglColorRenderbuffer[vt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,X.__webglColorRenderbuffer[vt]);let Ht=r.convert(Mt.format,Mt.colorSpace),gt=r.convert(Mt.type),bt=S(Mt.internalFormat,Ht,gt,Mt.colorSpace,A.isXRRenderTarget===!0),Dt=J(A);i.renderbufferStorageMultisample(i.RENDERBUFFER,Dt,bt,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+vt,i.RENDERBUFFER,X.__webglColorRenderbuffer[vt])}i.bindRenderbuffer(i.RENDERBUFFER,null),A.depthBuffer&&(X.__webglDepthRenderbuffer=i.createRenderbuffer(),C(X.__webglDepthRenderbuffer,A,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ht){e.bindTexture(i.TEXTURE_CUBE_MAP,at.__webglTexture),_t(i.TEXTURE_CUBE_MAP,v);for(let vt=0;vt<6;vt++)if(v.mipmaps&&v.mipmaps.length>0)for(let Mt=0;Mt<v.mipmaps.length;Mt++)L(X.__webglFramebuffer[vt][Mt],A,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Mt);else L(X.__webglFramebuffer[vt],A,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0);p(v)&&u(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(It){for(let vt=0,Mt=ut.length;vt<Mt;vt++){let Ht=ut[vt],gt=n.get(Ht);e.bindTexture(i.TEXTURE_2D,gt.__webglTexture),_t(i.TEXTURE_2D,Ht),L(X.__webglFramebuffer,A,Ht,i.COLOR_ATTACHMENT0+vt,i.TEXTURE_2D,0),p(Ht)&&u(i.TEXTURE_2D)}e.unbindTexture()}else{let vt=i.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(vt=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(vt,at.__webglTexture),_t(vt,v),v.mipmaps&&v.mipmaps.length>0)for(let Mt=0;Mt<v.mipmaps.length;Mt++)L(X.__webglFramebuffer[Mt],A,v,i.COLOR_ATTACHMENT0,vt,Mt);else L(X.__webglFramebuffer,A,v,i.COLOR_ATTACHMENT0,vt,0);p(v)&&u(vt),e.unbindTexture()}A.depthBuffer&&Q(A)}function lt(A){let v=A.textures;for(let X=0,at=v.length;X<at;X++){let ut=v[X];if(p(ut)){let ht=A.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,It=n.get(ut).__webglTexture;e.bindTexture(ht,It),u(ht),e.unbindTexture()}}}let W=[],T=[];function B(A){if(A.samples>0){if(j(A)===!1){let v=A.textures,X=A.width,at=A.height,ut=i.COLOR_BUFFER_BIT,ht=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,It=n.get(A),vt=v.length>1;if(vt)for(let Mt=0;Mt<v.length;Mt++)e.bindFramebuffer(i.FRAMEBUFFER,It.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Mt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,It.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Mt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,It.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,It.__webglFramebuffer);for(let Mt=0;Mt<v.length;Mt++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(ut|=i.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(ut|=i.STENCIL_BUFFER_BIT)),vt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,It.__webglColorRenderbuffer[Mt]);let Ht=n.get(v[Mt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Ht,0)}i.blitFramebuffer(0,0,X,at,0,0,X,at,ut,i.NEAREST),c===!0&&(W.length=0,T.length=0,W.push(i.COLOR_ATTACHMENT0+Mt),A.depthBuffer&&A.resolveDepthBuffer===!1&&(W.push(ht),T.push(ht),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,T)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,W))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),vt)for(let Mt=0;Mt<v.length;Mt++){e.bindFramebuffer(i.FRAMEBUFFER,It.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Mt,i.RENDERBUFFER,It.__webglColorRenderbuffer[Mt]);let Ht=n.get(v[Mt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,It.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Mt,i.TEXTURE_2D,Ht,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,It.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&c){let v=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[v])}}}function J(A){return Math.min(s.maxSamples,A.samples)}function j(A){let v=n.get(A);return A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function rt(A){let v=a.render.frame;h.get(A)!==v&&(h.set(A,v),A.update())}function O(A,v){let X=A.colorSpace,at=A.format,ut=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||X!==_n&&X!==Xn&&(se.getTransfer(X)===ae?(at!==Ye||ut!==Ln)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",X)),v}function I(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(l.width=A.naturalWidth||A.width,l.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(l.width=A.displayWidth,l.height=A.displayHeight):(l.width=A.width,l.height=A.height),l}this.allocateTextureUnit=k,this.resetTextureUnits=w,this.setTexture2D=Y,this.setTexture2DArray=ct,this.setTexture3D=q,this.setTextureCube=it,this.rebindTextures=st,this.setupRenderTarget=Z,this.updateRenderTargetMipmap=lt,this.updateMultisampleRenderTarget=B,this.setupDepthRenderbuffer=Q,this.setupFrameBufferTexture=L,this.useMultisampledRTT=j}function mg(i,t){function e(n,s=Xn){let r,a=se.getTransfer(s);if(n===Ln)return i.UNSIGNED_BYTE;if(n===lc)return i.UNSIGNED_SHORT_4_4_4_4;if(n===hc)return i.UNSIGNED_SHORT_5_5_5_1;if(n===ql)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Wl)return i.BYTE;if(n===Xl)return i.SHORT;if(n===Ss)return i.UNSIGNED_SHORT;if(n===cc)return i.INT;if(n===di)return i.UNSIGNED_INT;if(n===Pn)return i.FLOAT;if(n===gi)return i.HALF_FLOAT;if(n===Yl)return i.ALPHA;if(n===Zl)return i.RGB;if(n===Ye)return i.RGBA;if(n===Jl)return i.LUMINANCE;if(n===$l)return i.LUMINANCE_ALPHA;if(n===ki)return i.DEPTH_COMPONENT;if(n===Yi)return i.DEPTH_STENCIL;if(n===Kl)return i.RED;if(n===uc)return i.RED_INTEGER;if(n===Ql)return i.RG;if(n===dc)return i.RG_INTEGER;if(n===fc)return i.RGBA_INTEGER;if(n===hr||n===ur||n===dr||n===fr)if(a===ae)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===hr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ur)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===dr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===fr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===hr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ur)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===dr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===fr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===qa||n===Ya||n===Za||n===Ja)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===qa)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ya)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Za)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ja)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===$a||n===Ka||n===Qa)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===$a||n===Ka)return a===ae?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Qa)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===ja||n===to||n===eo||n===no||n===io||n===so||n===ro||n===ao||n===oo||n===co||n===lo||n===ho||n===uo||n===fo)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===ja)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===to)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===eo)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===no)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===io)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===so)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ro)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ao)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===oo)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===co)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===lo)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ho)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===uo)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===fo)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===pr||n===po||n===mo)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===pr)return a===ae?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===po)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===mo)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===jl||n===go||n===_o||n===xo)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===pr)return r.COMPRESSED_RED_RGTC1_EXT;if(n===go)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===_o)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===xo)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===qi?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var Do=class extends Ue{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},qn=class extends Re{constructor(){super(),this.isGroup=!0,this.type="Group"}},gg={type:"move"},ys=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new qn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new qn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new G,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new G),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new qn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new G,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new G),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null,o=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){a=!0;for(let g of t.hand.values()){let p=e.getJointPose(g,n),u=this._getHandJoint(l,g);p!==null&&(u.matrix.fromArray(p.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=p.radius),u.visible=p!==null}let h=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],f=h.position.distanceTo(d.position),m=.02,y=.005;l.inputState.pinching&&f>m+y?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&f<=m-y&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(gg)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new qn;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},_g=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,xg=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Uo=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){let s=new Ke,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new ke({vertexShader:_g,fragmentShader:xg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Ne(new Cr(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},No=class extends $n{constructor(t,e){super();let n=this,s=null,r=1,a=null,o="local-floor",c=1,l=null,h=null,d=null,f=null,m=null,y=null,g=new Uo,p=e.getContextAttributes(),u=null,S=null,_=[],M=[],N=new ft,R=null,P=new Ue;P.layers.enable(1),P.viewport=new de;let F=new Ue;F.layers.enable(2),F.viewport=new de;let K=[P,F],x=new Do;x.layers.enable(1),x.layers.enable(2);let w=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(D){let L=_[D];return L===void 0&&(L=new ys,_[D]=L),L.getTargetRaySpace()},this.getControllerGrip=function(D){let L=_[D];return L===void 0&&(L=new ys,_[D]=L),L.getGripSpace()},this.getHand=function(D){let L=_[D];return L===void 0&&(L=new ys,_[D]=L),L.getHandSpace()};function $(D){let L=M.indexOf(D.inputSource);if(L===-1)return;let C=_[L];C!==void 0&&(C.update(D.inputSource,D.frame,l||a),C.dispatchEvent({type:D.type,data:D.inputSource}))}function Y(){s.removeEventListener("select",$),s.removeEventListener("selectstart",$),s.removeEventListener("selectend",$),s.removeEventListener("squeeze",$),s.removeEventListener("squeezestart",$),s.removeEventListener("squeezeend",$),s.removeEventListener("end",Y),s.removeEventListener("inputsourceschange",ct);for(let D=0;D<_.length;D++){let L=M[D];L!==null&&(M[D]=null,_[D].disconnect(L))}w=null,k=null,g.reset(),t.setRenderTarget(u),m=null,f=null,d=null,s=null,S=null,Ot.stop(),n.isPresenting=!1,t.setPixelRatio(R),t.setSize(N.width,N.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(D){r=D,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(D){o=D,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(D){l=D},this.getBaseLayer=function(){return f!==null?f:m},this.getBinding=function(){return d},this.getFrame=function(){return y},this.getSession=function(){return s},this.setSession=async function(D){if(s=D,s!==null){if(u=t.getRenderTarget(),s.addEventListener("select",$),s.addEventListener("selectstart",$),s.addEventListener("selectend",$),s.addEventListener("squeeze",$),s.addEventListener("squeezestart",$),s.addEventListener("squeezeend",$),s.addEventListener("end",Y),s.addEventListener("inputsourceschange",ct),p.xrCompatible!==!0&&await e.makeXRCompatible(),R=t.getPixelRatio(),t.getSize(N),s.renderState.layers===void 0){let L={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(s,e,L),s.updateRenderState({baseLayer:m}),t.setPixelRatio(1),t.setSize(m.framebufferWidth,m.framebufferHeight,!1),S=new an(m.framebufferWidth,m.framebufferHeight,{format:Ye,type:Ln,colorSpace:t.outputColorSpace,stencilBuffer:p.stencil})}else{let L=null,C=null,b=null;p.depth&&(b=p.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,L=p.stencil?Yi:ki,C=p.stencil?qi:di);let Q={colorFormat:e.RGBA8,depthFormat:b,scaleFactor:r};d=new XRWebGLBinding(s,e),f=d.createProjectionLayer(Q),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),S=new an(f.textureWidth,f.textureHeight,{format:Ye,type:Ln,depthTexture:new Pr(f.textureWidth,f.textureHeight,C,void 0,void 0,void 0,void 0,void 0,void 0,L),stencilBuffer:p.stencil,colorSpace:t.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await s.requestReferenceSpace(o),Ot.setContext(s),Ot.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function ct(D){for(let L=0;L<D.removed.length;L++){let C=D.removed[L],b=M.indexOf(C);b>=0&&(M[b]=null,_[b].disconnect(C))}for(let L=0;L<D.added.length;L++){let C=D.added[L],b=M.indexOf(C);if(b===-1){for(let st=0;st<_.length;st++)if(st>=M.length){M.push(C),b=st;break}else if(M[st]===null){M[st]=C,b=st;break}if(b===-1)break}let Q=_[b];Q&&Q.connect(C)}}let q=new G,it=new G;function U(D,L,C){q.setFromMatrixPosition(L.matrixWorld),it.setFromMatrixPosition(C.matrixWorld);let b=q.distanceTo(it),Q=L.projectionMatrix.elements,st=C.projectionMatrix.elements,Z=Q[14]/(Q[10]-1),lt=Q[14]/(Q[10]+1),W=(Q[9]+1)/Q[5],T=(Q[9]-1)/Q[5],B=(Q[8]-1)/Q[0],J=(st[8]+1)/st[0],j=Z*B,rt=Z*J,O=b/(-B+J),I=O*-B;if(L.matrixWorld.decompose(D.position,D.quaternion,D.scale),D.translateX(I),D.translateZ(O),D.matrixWorld.compose(D.position,D.quaternion,D.scale),D.matrixWorldInverse.copy(D.matrixWorld).invert(),Q[10]===-1)D.projectionMatrix.copy(L.projectionMatrix),D.projectionMatrixInverse.copy(L.projectionMatrixInverse);else{let A=Z+O,v=lt+O,X=j-I,at=rt+(b-I),ut=W*lt/v*A,ht=T*lt/v*A;D.projectionMatrix.makePerspective(X,at,ut,ht,A,v),D.projectionMatrixInverse.copy(D.projectionMatrix).invert()}}function pt(D,L){L===null?D.matrixWorld.copy(D.matrix):D.matrixWorld.multiplyMatrices(L.matrixWorld,D.matrix),D.matrixWorldInverse.copy(D.matrixWorld).invert()}this.updateCamera=function(D){if(s===null)return;let L=D.near,C=D.far;g.texture!==null&&(g.depthNear>0&&(L=g.depthNear),g.depthFar>0&&(C=g.depthFar)),x.near=F.near=P.near=L,x.far=F.far=P.far=C,(w!==x.near||k!==x.far)&&(s.updateRenderState({depthNear:x.near,depthFar:x.far}),w=x.near,k=x.far);let b=D.parent,Q=x.cameras;pt(x,b);for(let st=0;st<Q.length;st++)pt(Q[st],b);Q.length===2?U(x,P,F):x.projectionMatrix.copy(P.projectionMatrix),dt(D,x,b)};function dt(D,L,C){C===null?D.matrix.copy(L.matrixWorld):(D.matrix.copy(C.matrixWorld),D.matrix.invert(),D.matrix.multiply(L.matrixWorld)),D.matrix.decompose(D.position,D.quaternion,D.scale),D.updateMatrixWorld(!0),D.projectionMatrix.copy(L.projectionMatrix),D.projectionMatrixInverse.copy(L.projectionMatrixInverse),D.isPerspectiveCamera&&(D.fov=bs*2*Math.atan(1/D.projectionMatrix.elements[5]),D.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(f===null&&m===null))return c},this.setFoveation=function(D){c=D,f!==null&&(f.fixedFoveation=D),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=D)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(x)};let _t=null;function Pt(D,L){if(h=L.getViewerPose(l||a),y=L,h!==null){let C=h.views;m!==null&&(t.setRenderTargetFramebuffer(S,m.framebuffer),t.setRenderTarget(S));let b=!1;C.length!==x.cameras.length&&(x.cameras.length=0,b=!0);for(let st=0;st<C.length;st++){let Z=C[st],lt=null;if(m!==null)lt=m.getViewport(Z);else{let T=d.getViewSubImage(f,Z);lt=T.viewport,st===0&&(t.setRenderTargetTextures(S,T.colorTexture,f.ignoreDepthValues?void 0:T.depthStencilTexture),t.setRenderTarget(S))}let W=K[st];W===void 0&&(W=new Ue,W.layers.enable(st),W.viewport=new de,K[st]=W),W.matrix.fromArray(Z.transform.matrix),W.matrix.decompose(W.position,W.quaternion,W.scale),W.projectionMatrix.fromArray(Z.projectionMatrix),W.projectionMatrixInverse.copy(W.projectionMatrix).invert(),W.viewport.set(lt.x,lt.y,lt.width,lt.height),st===0&&(x.matrix.copy(W.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),b===!0&&x.cameras.push(W)}let Q=s.enabledFeatures;if(Q&&Q.includes("depth-sensing")){let st=d.getDepthInformation(C[0]);st&&st.isValid&&st.texture&&g.init(t,st,s.renderState)}}for(let C=0;C<_.length;C++){let b=M[C],Q=_[C];b!==null&&Q!==void 0&&Q.update(b,L,l||a)}_t&&_t(D,L),L.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:L}),y=null}let Ot=new oh;Ot.setAnimationLoop(Pt),this.setAnimationLoop=function(D){_t=D},this.dispose=function(){}}},ai=new Qe,yg=new ce;function vg(i,t){function e(p,u){p.matrixAutoUpdate===!0&&p.updateMatrix(),u.value.copy(p.matrix)}function n(p,u){u.color.getRGB(p.fogColor.value,ah(i)),u.isFog?(p.fogNear.value=u.near,p.fogFar.value=u.far):u.isFogExp2&&(p.fogDensity.value=u.density)}function s(p,u,S,_,M){u.isMeshBasicMaterial||u.isMeshLambertMaterial?r(p,u):u.isMeshToonMaterial?(r(p,u),d(p,u)):u.isMeshPhongMaterial?(r(p,u),h(p,u)):u.isMeshStandardMaterial?(r(p,u),f(p,u),u.isMeshPhysicalMaterial&&m(p,u,M)):u.isMeshMatcapMaterial?(r(p,u),y(p,u)):u.isMeshDepthMaterial?r(p,u):u.isMeshDistanceMaterial?(r(p,u),g(p,u)):u.isMeshNormalMaterial?r(p,u):u.isLineBasicMaterial?(a(p,u),u.isLineDashedMaterial&&o(p,u)):u.isPointsMaterial?c(p,u,S,_):u.isSpriteMaterial?l(p,u):u.isShadowMaterial?(p.color.value.copy(u.color),p.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function r(p,u){p.opacity.value=u.opacity,u.color&&p.diffuse.value.copy(u.color),u.emissive&&p.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(p.map.value=u.map,e(u.map,p.mapTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,e(u.alphaMap,p.alphaMapTransform)),u.bumpMap&&(p.bumpMap.value=u.bumpMap,e(u.bumpMap,p.bumpMapTransform),p.bumpScale.value=u.bumpScale,u.side===Me&&(p.bumpScale.value*=-1)),u.normalMap&&(p.normalMap.value=u.normalMap,e(u.normalMap,p.normalMapTransform),p.normalScale.value.copy(u.normalScale),u.side===Me&&p.normalScale.value.negate()),u.displacementMap&&(p.displacementMap.value=u.displacementMap,e(u.displacementMap,p.displacementMapTransform),p.displacementScale.value=u.displacementScale,p.displacementBias.value=u.displacementBias),u.emissiveMap&&(p.emissiveMap.value=u.emissiveMap,e(u.emissiveMap,p.emissiveMapTransform)),u.specularMap&&(p.specularMap.value=u.specularMap,e(u.specularMap,p.specularMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest);let S=t.get(u),_=S.envMap,M=S.envMapRotation;_&&(p.envMap.value=_,ai.copy(M),ai.x*=-1,ai.y*=-1,ai.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(ai.y*=-1,ai.z*=-1),p.envMapRotation.value.setFromMatrix4(yg.makeRotationFromEuler(ai)),p.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=u.reflectivity,p.ior.value=u.ior,p.refractionRatio.value=u.refractionRatio),u.lightMap&&(p.lightMap.value=u.lightMap,p.lightMapIntensity.value=u.lightMapIntensity,e(u.lightMap,p.lightMapTransform)),u.aoMap&&(p.aoMap.value=u.aoMap,p.aoMapIntensity.value=u.aoMapIntensity,e(u.aoMap,p.aoMapTransform))}function a(p,u){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,u.map&&(p.map.value=u.map,e(u.map,p.mapTransform))}function o(p,u){p.dashSize.value=u.dashSize,p.totalSize.value=u.dashSize+u.gapSize,p.scale.value=u.scale}function c(p,u,S,_){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,p.size.value=u.size*S,p.scale.value=_*.5,u.map&&(p.map.value=u.map,e(u.map,p.uvTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,e(u.alphaMap,p.alphaMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest)}function l(p,u){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,p.rotation.value=u.rotation,u.map&&(p.map.value=u.map,e(u.map,p.mapTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,e(u.alphaMap,p.alphaMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest)}function h(p,u){p.specular.value.copy(u.specular),p.shininess.value=Math.max(u.shininess,1e-4)}function d(p,u){u.gradientMap&&(p.gradientMap.value=u.gradientMap)}function f(p,u){p.metalness.value=u.metalness,u.metalnessMap&&(p.metalnessMap.value=u.metalnessMap,e(u.metalnessMap,p.metalnessMapTransform)),p.roughness.value=u.roughness,u.roughnessMap&&(p.roughnessMap.value=u.roughnessMap,e(u.roughnessMap,p.roughnessMapTransform)),u.envMap&&(p.envMapIntensity.value=u.envMapIntensity)}function m(p,u,S){p.ior.value=u.ior,u.sheen>0&&(p.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),p.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(p.sheenColorMap.value=u.sheenColorMap,e(u.sheenColorMap,p.sheenColorMapTransform)),u.sheenRoughnessMap&&(p.sheenRoughnessMap.value=u.sheenRoughnessMap,e(u.sheenRoughnessMap,p.sheenRoughnessMapTransform))),u.clearcoat>0&&(p.clearcoat.value=u.clearcoat,p.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(p.clearcoatMap.value=u.clearcoatMap,e(u.clearcoatMap,p.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,e(u.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(p.clearcoatNormalMap.value=u.clearcoatNormalMap,e(u.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===Me&&p.clearcoatNormalScale.value.negate())),u.dispersion>0&&(p.dispersion.value=u.dispersion),u.iridescence>0&&(p.iridescence.value=u.iridescence,p.iridescenceIOR.value=u.iridescenceIOR,p.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(p.iridescenceMap.value=u.iridescenceMap,e(u.iridescenceMap,p.iridescenceMapTransform)),u.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=u.iridescenceThicknessMap,e(u.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),u.transmission>0&&(p.transmission.value=u.transmission,p.transmissionSamplerMap.value=S.texture,p.transmissionSamplerSize.value.set(S.width,S.height),u.transmissionMap&&(p.transmissionMap.value=u.transmissionMap,e(u.transmissionMap,p.transmissionMapTransform)),p.thickness.value=u.thickness,u.thicknessMap&&(p.thicknessMap.value=u.thicknessMap,e(u.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=u.attenuationDistance,p.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(p.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(p.anisotropyMap.value=u.anisotropyMap,e(u.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=u.specularIntensity,p.specularColor.value.copy(u.specularColor),u.specularColorMap&&(p.specularColorMap.value=u.specularColorMap,e(u.specularColorMap,p.specularColorMapTransform)),u.specularIntensityMap&&(p.specularIntensityMap.value=u.specularIntensityMap,e(u.specularIntensityMap,p.specularIntensityMapTransform))}function y(p,u){u.matcap&&(p.matcap.value=u.matcap)}function g(p,u){let S=t.get(u).light;p.referencePosition.value.setFromMatrixPosition(S.matrixWorld),p.nearDistance.value=S.shadow.camera.near,p.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Mg(i,t,e,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(S,_){let M=_.program;n.uniformBlockBinding(S,M)}function l(S,_){let M=s[S.id];M===void 0&&(y(S),M=h(S),s[S.id]=M,S.addEventListener("dispose",p));let N=_.program;n.updateUBOMapping(S,N);let R=t.render.frame;r[S.id]!==R&&(f(S),r[S.id]=R)}function h(S){let _=d();S.__bindingPointIndex=_;let M=i.createBuffer(),N=S.__size,R=S.usage;return i.bindBuffer(i.UNIFORM_BUFFER,M),i.bufferData(i.UNIFORM_BUFFER,N,R),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,_,M),M}function d(){for(let S=0;S<o;S++)if(a.indexOf(S)===-1)return a.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(S){let _=s[S.id],M=S.uniforms,N=S.__cache;i.bindBuffer(i.UNIFORM_BUFFER,_);for(let R=0,P=M.length;R<P;R++){let F=Array.isArray(M[R])?M[R]:[M[R]];for(let K=0,x=F.length;K<x;K++){let w=F[K];if(m(w,R,K,N)===!0){let k=w.__offset,$=Array.isArray(w.value)?w.value:[w.value],Y=0;for(let ct=0;ct<$.length;ct++){let q=$[ct],it=g(q);typeof q=="number"||typeof q=="boolean"?(w.__data[0]=q,i.bufferSubData(i.UNIFORM_BUFFER,k+Y,w.__data)):q.isMatrix3?(w.__data[0]=q.elements[0],w.__data[1]=q.elements[1],w.__data[2]=q.elements[2],w.__data[3]=0,w.__data[4]=q.elements[3],w.__data[5]=q.elements[4],w.__data[6]=q.elements[5],w.__data[7]=0,w.__data[8]=q.elements[6],w.__data[9]=q.elements[7],w.__data[10]=q.elements[8],w.__data[11]=0):(q.toArray(w.__data,Y),Y+=it.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,k,w.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(S,_,M,N){let R=S.value,P=_+"_"+M;if(N[P]===void 0)return typeof R=="number"||typeof R=="boolean"?N[P]=R:N[P]=R.clone(),!0;{let F=N[P];if(typeof R=="number"||typeof R=="boolean"){if(F!==R)return N[P]=R,!0}else if(F.equals(R)===!1)return F.copy(R),!0}return!1}function y(S){let _=S.uniforms,M=0,N=16;for(let P=0,F=_.length;P<F;P++){let K=Array.isArray(_[P])?_[P]:[_[P]];for(let x=0,w=K.length;x<w;x++){let k=K[x],$=Array.isArray(k.value)?k.value:[k.value];for(let Y=0,ct=$.length;Y<ct;Y++){let q=$[Y],it=g(q),U=M%N,pt=U%it.boundary,dt=U+pt;M+=pt,dt!==0&&N-dt<it.storage&&(M+=N-dt),k.__data=new Float32Array(it.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=M,M+=it.storage}}}let R=M%N;return R>0&&(M+=N-R),S.__size=M,S.__cache={},this}function g(S){let _={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(_.boundary=4,_.storage=4):S.isVector2?(_.boundary=8,_.storage=8):S.isVector3||S.isColor?(_.boundary=16,_.storage=12):S.isVector4?(_.boundary=16,_.storage=16):S.isMatrix3?(_.boundary=48,_.storage=48):S.isMatrix4?(_.boundary=64,_.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),_}function p(S){let _=S.target;_.removeEventListener("dispose",p);let M=a.indexOf(_.__bindingPointIndex);a.splice(M,1),i.deleteBuffer(s[_.id]),delete s[_.id],delete r[_.id]}function u(){for(let S in s)i.deleteBuffer(s[S]);a=[],s={},r={}}return{bind:c,update:l,dispose:u}}var Ir=class{constructor(t={}){let{canvas:e=bu(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1}=t;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=a;let m=new Uint32Array(4),y=new Int32Array(4),g=null,p=null,u=[],S=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Be,this.toneMapping=fn,this.toneMappingExposure=1;let _=this,M=!1,N=0,R=0,P=null,F=-1,K=null,x=new de,w=new de,k=null,$=new Xt(0),Y=0,ct=e.width,q=e.height,it=1,U=null,pt=null,dt=new de(0,0,ct,q),_t=new de(0,0,ct,q),Pt=!1,Ot=new Es,D=!1,L=!1,C=new ce,b=new ce,Q=new G,st=new de,Z={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},lt=!1;function W(){return P===null?it:1}let T=n;function B(E,V){return e.getContext(E,V)}try{let E={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine","three.js r169"),e.addEventListener("webglcontextlost",mt,!1),e.addEventListener("webglcontextrestored",Tt,!1),e.addEventListener("webglcontextcreationerror",Ct,!1),T===null){let V="webgl2";if(T=B(V,E),T===null)throw B(V)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let J,j,rt,O,I,A,v,X,at,ut,ht,It,vt,Mt,Ht,gt,bt,Dt,kt,wt,Yt,Wt,Qt,z;function Et(){J=new Op(T),J.init(),Wt=new mg(T,J),j=new Ip(T,J,t,Wt),rt=new dg(T),j.reverseDepthBuffer&&rt.buffers.depth.setReversed(!0),O=new kp(T),I=new jm,A=new pg(T,J,rt,I,j,Wt,O),v=new Dp(_),X=new Fp(_),at=new qu(T),Qt=new Rp(T,at),ut=new Bp(T,at,O,Qt),ht=new Gp(T,ut,at,O),kt=new Vp(T,j,A),gt=new Lp(I),It=new Qm(_,v,X,J,j,Qt,gt),vt=new vg(_,I),Mt=new eg,Ht=new og(J),Dt=new Cp(_,v,X,rt,ht,f,c),bt=new hg(_,ht,j),z=new Mg(T,O,j,rt),wt=new Pp(T,J,O),Yt=new zp(T,J,O),O.programs=It.programs,_.capabilities=j,_.extensions=J,_.properties=I,_.renderLists=Mt,_.shadowMap=bt,_.state=rt,_.info=O}Et();let ot=new No(_,T);this.xr=ot,this.getContext=function(){return T},this.getContextAttributes=function(){return T.getContextAttributes()},this.forceContextLoss=function(){let E=J.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){let E=J.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return it},this.setPixelRatio=function(E){E!==void 0&&(it=E,this.setSize(ct,q,!1))},this.getSize=function(E){return E.set(ct,q)},this.setSize=function(E,V,et=!0){if(ot.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}ct=E,q=V,e.width=Math.floor(E*it),e.height=Math.floor(V*it),et===!0&&(e.style.width=E+"px",e.style.height=V+"px"),this.setViewport(0,0,E,V)},this.getDrawingBufferSize=function(E){return E.set(ct*it,q*it).floor()},this.setDrawingBufferSize=function(E,V,et){ct=E,q=V,it=et,e.width=Math.floor(E*et),e.height=Math.floor(V*et),this.setViewport(0,0,E,V)},this.getCurrentViewport=function(E){return E.copy(x)},this.getViewport=function(E){return E.copy(dt)},this.setViewport=function(E,V,et,nt){E.isVector4?dt.set(E.x,E.y,E.z,E.w):dt.set(E,V,et,nt),rt.viewport(x.copy(dt).multiplyScalar(it).round())},this.getScissor=function(E){return E.copy(_t)},this.setScissor=function(E,V,et,nt){E.isVector4?_t.set(E.x,E.y,E.z,E.w):_t.set(E,V,et,nt),rt.scissor(w.copy(_t).multiplyScalar(it).round())},this.getScissorTest=function(){return Pt},this.setScissorTest=function(E){rt.setScissorTest(Pt=E)},this.setOpaqueSort=function(E){U=E},this.setTransparentSort=function(E){pt=E},this.getClearColor=function(E){return E.copy(Dt.getClearColor())},this.setClearColor=function(){Dt.setClearColor.apply(Dt,arguments)},this.getClearAlpha=function(){return Dt.getClearAlpha()},this.setClearAlpha=function(){Dt.setClearAlpha.apply(Dt,arguments)},this.clear=function(E=!0,V=!0,et=!0){let nt=0;if(E){let H=!1;if(P!==null){let xt=P.texture.format;H=xt===fc||xt===dc||xt===uc}if(H){let xt=P.texture.type,At=xt===Ln||xt===di||xt===Ss||xt===qi||xt===lc||xt===hc,Lt=Dt.getClearColor(),Ut=Dt.getClearAlpha(),Vt=Lt.r,zt=Lt.g,Nt=Lt.b;At?(m[0]=Vt,m[1]=zt,m[2]=Nt,m[3]=Ut,T.clearBufferuiv(T.COLOR,0,m)):(y[0]=Vt,y[1]=zt,y[2]=Nt,y[3]=Ut,T.clearBufferiv(T.COLOR,0,y))}else nt|=T.COLOR_BUFFER_BIT}V&&(nt|=T.DEPTH_BUFFER_BIT,T.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),et&&(nt|=T.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),T.clear(nt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",mt,!1),e.removeEventListener("webglcontextrestored",Tt,!1),e.removeEventListener("webglcontextcreationerror",Ct,!1),Mt.dispose(),Ht.dispose(),I.dispose(),v.dispose(),X.dispose(),ht.dispose(),Qt.dispose(),z.dispose(),It.dispose(),ot.dispose(),ot.removeEventListener("sessionstart",xi),ot.removeEventListener("sessionend",ns),Ge.stop()};function mt(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),M=!0}function Tt(){console.log("THREE.WebGLRenderer: Context Restored."),M=!1;let E=O.autoReset,V=bt.enabled,et=bt.autoUpdate,nt=bt.needsUpdate,H=bt.type;Et(),O.autoReset=E,bt.enabled=V,bt.autoUpdate=et,bt.needsUpdate=nt,bt.type=H}function Ct(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Zt(E){let V=E.target;V.removeEventListener("dispose",Zt),ee(V)}function ee(E){Se(E),I.remove(E)}function Se(E){let V=I.get(E).programs;V!==void 0&&(V.forEach(function(et){It.releaseProgram(et)}),E.isShaderMaterial&&It.releaseShaderCache(E))}this.renderBufferDirect=function(E,V,et,nt,H,xt){V===null&&(V=Z);let At=H.isMesh&&H.matrixWorld.determinant()<0,Lt=fe(E,V,et,nt,H);rt.setMaterial(nt,At);let Ut=et.index,Vt=1;if(nt.wireframe===!0){if(Ut=ut.getWireframeAttribute(et),Ut===void 0)return;Vt=2}let zt=et.drawRange,Nt=et.attributes.position,te=zt.start*Vt,ne=(zt.start+zt.count)*Vt;xt!==null&&(te=Math.max(te,xt.start*Vt),ne=Math.min(ne,(xt.start+xt.count)*Vt)),Ut!==null?(te=Math.max(te,0),ne=Math.min(ne,Ut.count)):Nt!=null&&(te=Math.max(te,0),ne=Math.min(ne,Nt.count));let re=ne-te;if(re<0||re===1/0)return;Qt.setup(H,nt,Lt,et,Ut);let Ae,Kt=wt;if(Ut!==null&&(Ae=at.get(Ut),Kt=Yt,Kt.setIndex(Ae)),H.isMesh)nt.wireframe===!0?(rt.setLineWidth(nt.wireframeLinewidth*W()),Kt.setMode(T.LINES)):Kt.setMode(T.TRIANGLES);else if(H.isLine){let Ft=nt.linewidth;Ft===void 0&&(Ft=1),rt.setLineWidth(Ft*W()),H.isLineSegments?Kt.setMode(T.LINES):H.isLineLoop?Kt.setMode(T.LINE_LOOP):Kt.setMode(T.LINE_STRIP)}else H.isPoints?Kt.setMode(T.POINTS):H.isSprite&&Kt.setMode(T.TRIANGLES);if(H.isBatchedMesh)if(H._multiDrawInstances!==null)Kt.renderMultiDrawInstances(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount,H._multiDrawInstances);else if(J.get("WEBGL_multi_draw"))Kt.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else{let Ft=H._multiDrawStarts,me=H._multiDrawCounts,Jt=H._multiDrawCount,Pe=Ut?at.get(Ut).bytesPerElement:1,xn=I.get(nt).currentProgram.getUniforms();for(let Te=0;Te<Jt;Te++)xn.setValue(T,"_gl_DrawID",Te),Kt.render(Ft[Te]/Pe,me[Te])}else if(H.isInstancedMesh)Kt.renderInstances(te,re,H.count);else if(et.isInstancedBufferGeometry){let Ft=et._maxInstanceCount!==void 0?et._maxInstanceCount:1/0,me=Math.min(et.instanceCount,Ft);Kt.renderInstances(te,re,me)}else Kt.render(te,re)};function $t(E,V,et){E.transparent===!0&&E.side===Cn&&E.forceSinglePass===!1?(E.side=Me,E.needsUpdate=!0,Nn(E,V,et),E.side=pn,E.needsUpdate=!0,Nn(E,V,et),E.side=Cn):Nn(E,V,et)}this.compile=function(E,V,et=null){et===null&&(et=E),p=Ht.get(et),p.init(V),S.push(p),et.traverseVisible(function(H){H.isLight&&H.layers.test(V.layers)&&(p.pushLight(H),H.castShadow&&p.pushShadow(H))}),E!==et&&E.traverseVisible(function(H){H.isLight&&H.layers.test(V.layers)&&(p.pushLight(H),H.castShadow&&p.pushShadow(H))}),p.setupLights();let nt=new Set;return E.traverse(function(H){if(!(H.isMesh||H.isPoints||H.isLine||H.isSprite))return;let xt=H.material;if(xt)if(Array.isArray(xt))for(let At=0;At<xt.length;At++){let Lt=xt[At];$t(Lt,et,H),nt.add(Lt)}else $t(xt,et,H),nt.add(xt)}),S.pop(),p=null,nt},this.compileAsync=function(E,V,et=null){let nt=this.compile(E,V,et);return new Promise(H=>{function xt(){if(nt.forEach(function(At){I.get(At).currentProgram.isReady()&&nt.delete(At)}),nt.size===0){H(E);return}setTimeout(xt,10)}J.get("KHR_parallel_shader_compile")!==null?xt():setTimeout(xt,10)})};let xe=null;function Ve(E){xe&&xe(E)}function xi(){Ge.stop()}function ns(){Ge.start()}let Ge=new oh;Ge.setAnimationLoop(Ve),typeof self<"u"&&Ge.setContext(self),this.setAnimationLoop=function(E){xe=E,ot.setAnimationLoop(E),E===null?Ge.stop():Ge.start()},ot.addEventListener("sessionstart",xi),ot.addEventListener("sessionend",ns),this.render=function(E,V){if(V!==void 0&&V.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),V.parent===null&&V.matrixWorldAutoUpdate===!0&&V.updateMatrixWorld(),ot.enabled===!0&&ot.isPresenting===!0&&(ot.cameraAutoUpdate===!0&&ot.updateCamera(V),V=ot.getCamera()),E.isScene===!0&&E.onBeforeRender(_,E,V,P),p=Ht.get(E,S.length),p.init(V),S.push(p),b.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),Ot.setFromProjectionMatrix(b),L=this.localClippingEnabled,D=gt.init(this.clippingPlanes,L),g=Mt.get(E,u.length),g.init(),u.push(g),ot.enabled===!0&&ot.isPresenting===!0){let xt=_.xr.getDepthSensingMesh();xt!==null&&is(xt,V,-1/0,_.sortObjects)}is(E,V,0,_.sortObjects),g.finish(),_.sortObjects===!0&&g.sort(U,pt),lt=ot.enabled===!1||ot.isPresenting===!1||ot.hasDepthSensing()===!1,lt&&Dt.addToRenderList(g,E),this.info.render.frame++,D===!0&&gt.beginShadows();let et=p.state.shadowsArray;bt.render(et,E,V),D===!0&&gt.endShadows(),this.info.autoReset===!0&&this.info.reset();let nt=g.opaque,H=g.transmissive;if(p.setupLights(),V.isArrayCamera){let xt=V.cameras;if(H.length>0)for(let At=0,Lt=xt.length;At<Lt;At++){let Ut=xt[At];yi(nt,H,E,Ut)}lt&&Dt.render(E);for(let At=0,Lt=xt.length;At<Lt;At++){let Ut=xt[At];Ls(g,E,Ut,Ut.viewport)}}else H.length>0&&yi(nt,H,E,V),lt&&Dt.render(E),Ls(g,E,V);P!==null&&(A.updateMultisampleRenderTarget(P),A.updateRenderTargetMipmap(P)),E.isScene===!0&&E.onAfterRender(_,E,V),Qt.resetDefaultState(),F=-1,K=null,S.pop(),S.length>0?(p=S[S.length-1],D===!0&&gt.setGlobalState(_.clippingPlanes,p.state.camera)):p=null,u.pop(),u.length>0?g=u[u.length-1]:g=null};function is(E,V,et,nt){if(E.visible===!1)return;if(E.layers.test(V.layers)){if(E.isGroup)et=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(V);else if(E.isLight)p.pushLight(E),E.castShadow&&p.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||Ot.intersectsSprite(E)){nt&&st.setFromMatrixPosition(E.matrixWorld).applyMatrix4(b);let At=ht.update(E),Lt=E.material;Lt.visible&&g.push(E,At,Lt,et,st.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||Ot.intersectsObject(E))){let At=ht.update(E),Lt=E.material;if(nt&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),st.copy(E.boundingSphere.center)):(At.boundingSphere===null&&At.computeBoundingSphere(),st.copy(At.boundingSphere.center)),st.applyMatrix4(E.matrixWorld).applyMatrix4(b)),Array.isArray(Lt)){let Ut=At.groups;for(let Vt=0,zt=Ut.length;Vt<zt;Vt++){let Nt=Ut[Vt],te=Lt[Nt.materialIndex];te&&te.visible&&g.push(E,At,te,et,st.z,Nt)}}else Lt.visible&&g.push(E,At,Lt,et,st.z,null)}}let xt=E.children;for(let At=0,Lt=xt.length;At<Lt;At++)is(xt[At],V,et,nt)}function Ls(E,V,et,nt){let H=E.opaque,xt=E.transmissive,At=E.transparent;p.setupLightsView(et),D===!0&&gt.setGlobalState(_.clippingPlanes,et),nt&&rt.viewport(x.copy(nt)),H.length>0&&jn(H,V,et),xt.length>0&&jn(xt,V,et),At.length>0&&jn(At,V,et),rt.buffers.depth.setTest(!0),rt.buffers.depth.setMask(!0),rt.buffers.color.setMask(!0),rt.setPolygonOffset(!1)}function yi(E,V,et,nt){if((et.isScene===!0?et.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[nt.id]===void 0&&(p.state.transmissionRenderTarget[nt.id]=new an(1,1,{generateMipmaps:!0,type:J.has("EXT_color_buffer_half_float")||J.has("EXT_color_buffer_float")?gi:Ln,minFilter:ui,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:se.workingColorSpace}));let xt=p.state.transmissionRenderTarget[nt.id],At=nt.viewport||x;xt.setSize(At.z,At.w);let Lt=_.getRenderTarget();_.setRenderTarget(xt),_.getClearColor($),Y=_.getClearAlpha(),Y<1&&_.setClearColor(16777215,.5),_.clear(),lt&&Dt.render(et);let Ut=_.toneMapping;_.toneMapping=fn;let Vt=nt.viewport;if(nt.viewport!==void 0&&(nt.viewport=void 0),p.setupLightsView(nt),D===!0&&gt.setGlobalState(_.clippingPlanes,nt),jn(E,et,nt),A.updateMultisampleRenderTarget(xt),A.updateRenderTargetMipmap(xt),J.has("WEBGL_multisampled_render_to_texture")===!1){let zt=!1;for(let Nt=0,te=V.length;Nt<te;Nt++){let ne=V[Nt],re=ne.object,Ae=ne.geometry,Kt=ne.material,Ft=ne.group;if(Kt.side===Cn&&re.layers.test(nt.layers)){let me=Kt.side;Kt.side=Me,Kt.needsUpdate=!0,ss(re,et,nt,Ae,Kt,Ft),Kt.side=me,Kt.needsUpdate=!0,zt=!0}}zt===!0&&(A.updateMultisampleRenderTarget(xt),A.updateRenderTargetMipmap(xt))}_.setRenderTarget(Lt),_.setClearColor($,Y),Vt!==void 0&&(nt.viewport=Vt),_.toneMapping=Ut}function jn(E,V,et){let nt=V.isScene===!0?V.overrideMaterial:null;for(let H=0,xt=E.length;H<xt;H++){let At=E[H],Lt=At.object,Ut=At.geometry,Vt=nt===null?At.material:nt,zt=At.group;Lt.layers.test(et.layers)&&ss(Lt,V,et,Ut,Vt,zt)}}function ss(E,V,et,nt,H,xt){E.onBeforeRender(_,V,et,nt,H,xt),E.modelViewMatrix.multiplyMatrices(et.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),H.onBeforeRender(_,V,et,nt,E,xt),H.transparent===!0&&H.side===Cn&&H.forceSinglePass===!1?(H.side=Me,H.needsUpdate=!0,_.renderBufferDirect(et,V,nt,H,E,xt),H.side=pn,H.needsUpdate=!0,_.renderBufferDirect(et,V,nt,H,E,xt),H.side=Cn):_.renderBufferDirect(et,V,nt,H,E,xt),E.onAfterRender(_,V,et,nt,H,xt)}function Nn(E,V,et){V.isScene!==!0&&(V=Z);let nt=I.get(E),H=p.state.lights,xt=p.state.shadowsArray,At=H.state.version,Lt=It.getParameters(E,H.state,xt,V,et),Ut=It.getProgramCacheKey(Lt),Vt=nt.programs;nt.environment=E.isMeshStandardMaterial?V.environment:null,nt.fog=V.fog,nt.envMap=(E.isMeshStandardMaterial?X:v).get(E.envMap||nt.environment),nt.envMapRotation=nt.environment!==null&&E.envMap===null?V.environmentRotation:E.envMapRotation,Vt===void 0&&(E.addEventListener("dispose",Zt),Vt=new Map,nt.programs=Vt);let zt=Vt.get(Ut);if(zt!==void 0){if(nt.currentProgram===zt&&nt.lightsStateVersion===At)return as(E,Lt),zt}else Lt.uniforms=It.getUniforms(E),E.onBeforeCompile(Lt,_),zt=It.acquireProgram(Lt,Ut),Vt.set(Ut,zt),nt.uniforms=Lt.uniforms;let Nt=nt.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Nt.clippingPlanes=gt.uniform),as(E,Lt),nt.needsLights=os(E),nt.lightsStateVersion=At,nt.needsLights&&(Nt.ambientLightColor.value=H.state.ambient,Nt.lightProbe.value=H.state.probe,Nt.directionalLights.value=H.state.directional,Nt.directionalLightShadows.value=H.state.directionalShadow,Nt.spotLights.value=H.state.spot,Nt.spotLightShadows.value=H.state.spotShadow,Nt.rectAreaLights.value=H.state.rectArea,Nt.ltc_1.value=H.state.rectAreaLTC1,Nt.ltc_2.value=H.state.rectAreaLTC2,Nt.pointLights.value=H.state.point,Nt.pointLightShadows.value=H.state.pointShadow,Nt.hemisphereLights.value=H.state.hemi,Nt.directionalShadowMap.value=H.state.directionalShadowMap,Nt.directionalShadowMatrix.value=H.state.directionalShadowMatrix,Nt.spotShadowMap.value=H.state.spotShadowMap,Nt.spotLightMatrix.value=H.state.spotLightMatrix,Nt.spotLightMap.value=H.state.spotLightMap,Nt.pointShadowMap.value=H.state.pointShadowMap,Nt.pointShadowMatrix.value=H.state.pointShadowMatrix),nt.currentProgram=zt,nt.uniformsList=null,zt}function rs(E){if(E.uniformsList===null){let V=E.currentProgram.getUniforms();E.uniformsList=Gi.seqWithValue(V.seq,E.uniforms)}return E.uniformsList}function as(E,V){let et=I.get(E);et.outputColorSpace=V.outputColorSpace,et.batching=V.batching,et.batchingColor=V.batchingColor,et.instancing=V.instancing,et.instancingColor=V.instancingColor,et.instancingMorph=V.instancingMorph,et.skinning=V.skinning,et.morphTargets=V.morphTargets,et.morphNormals=V.morphNormals,et.morphColors=V.morphColors,et.morphTargetsCount=V.morphTargetsCount,et.numClippingPlanes=V.numClippingPlanes,et.numIntersection=V.numClipIntersection,et.vertexAlphas=V.vertexAlphas,et.vertexTangents=V.vertexTangents,et.toneMapping=V.toneMapping}function fe(E,V,et,nt,H){V.isScene!==!0&&(V=Z),A.resetTextureUnits();let xt=V.fog,At=nt.isMeshStandardMaterial?V.environment:null,Lt=P===null?_.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:_n,Ut=(nt.isMeshStandardMaterial?X:v).get(nt.envMap||At),Vt=nt.vertexColors===!0&&!!et.attributes.color&&et.attributes.color.itemSize===4,zt=!!et.attributes.tangent&&(!!nt.normalMap||nt.anisotropy>0),Nt=!!et.morphAttributes.position,te=!!et.morphAttributes.normal,ne=!!et.morphAttributes.color,re=fn;nt.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(re=_.toneMapping);let Ae=et.morphAttributes.position||et.morphAttributes.normal||et.morphAttributes.color,Kt=Ae!==void 0?Ae.length:0,Ft=I.get(nt),me=p.state.lights;if(D===!0&&(L===!0||E!==K)){let be=E===K&&nt.id===F;gt.setState(nt,E,be)}let Jt=!1;nt.version===Ft.__version?(Ft.needsLights&&Ft.lightsStateVersion!==me.state.version||Ft.outputColorSpace!==Lt||H.isBatchedMesh&&Ft.batching===!1||!H.isBatchedMesh&&Ft.batching===!0||H.isBatchedMesh&&Ft.batchingColor===!0&&H.colorTexture===null||H.isBatchedMesh&&Ft.batchingColor===!1&&H.colorTexture!==null||H.isInstancedMesh&&Ft.instancing===!1||!H.isInstancedMesh&&Ft.instancing===!0||H.isSkinnedMesh&&Ft.skinning===!1||!H.isSkinnedMesh&&Ft.skinning===!0||H.isInstancedMesh&&Ft.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&Ft.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&Ft.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&Ft.instancingMorph===!1&&H.morphTexture!==null||Ft.envMap!==Ut||nt.fog===!0&&Ft.fog!==xt||Ft.numClippingPlanes!==void 0&&(Ft.numClippingPlanes!==gt.numPlanes||Ft.numIntersection!==gt.numIntersection)||Ft.vertexAlphas!==Vt||Ft.vertexTangents!==zt||Ft.morphTargets!==Nt||Ft.morphNormals!==te||Ft.morphColors!==ne||Ft.toneMapping!==re||Ft.morphTargetsCount!==Kt)&&(Jt=!0):(Jt=!0,Ft.__version=nt.version);let Pe=Ft.currentProgram;Jt===!0&&(Pe=Nn(nt,V,H));let xn=!1,Te=!1,On=!1,ie=Pe.getUniforms(),Ze=Ft.uniforms;if(rt.useProgram(Pe.program)&&(xn=!0,Te=!0,On=!0),nt.id!==F&&(F=nt.id,Te=!0),xn||K!==E){j.reverseDepthBuffer?(C.copy(E.projectionMatrix),Au(C),Tu(C),ie.setValue(T,"projectionMatrix",C)):ie.setValue(T,"projectionMatrix",E.projectionMatrix),ie.setValue(T,"viewMatrix",E.matrixWorldInverse);let be=ie.map.cameraPosition;be!==void 0&&be.setValue(T,Q.setFromMatrixPosition(E.matrixWorld)),j.logarithmicDepthBuffer&&ie.setValue(T,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(nt.isMeshPhongMaterial||nt.isMeshToonMaterial||nt.isMeshLambertMaterial||nt.isMeshBasicMaterial||nt.isMeshStandardMaterial||nt.isShaderMaterial)&&ie.setValue(T,"isOrthographic",E.isOrthographicCamera===!0),K!==E&&(K=E,Te=!0,On=!0)}if(H.isSkinnedMesh){ie.setOptional(T,H,"bindMatrix"),ie.setOptional(T,H,"bindMatrixInverse");let be=H.skeleton;be&&(be.boneTexture===null&&be.computeBoneTexture(),ie.setValue(T,"boneTexture",be.boneTexture,A))}H.isBatchedMesh&&(ie.setOptional(T,H,"batchingTexture"),ie.setValue(T,"batchingTexture",H._matricesTexture,A),ie.setOptional(T,H,"batchingIdTexture"),ie.setValue(T,"batchingIdTexture",H._indirectTexture,A),ie.setOptional(T,H,"batchingColorTexture"),H._colorsTexture!==null&&ie.setValue(T,"batchingColorTexture",H._colorsTexture,A));let ti=et.morphAttributes;if((ti.position!==void 0||ti.normal!==void 0||ti.color!==void 0)&&kt.update(H,et,Pe),(Te||Ft.receiveShadow!==H.receiveShadow)&&(Ft.receiveShadow=H.receiveShadow,ie.setValue(T,"receiveShadow",H.receiveShadow)),nt.isMeshGouraudMaterial&&nt.envMap!==null&&(Ze.envMap.value=Ut,Ze.flipEnvMap.value=Ut.isCubeTexture&&Ut.isRenderTargetTexture===!1?-1:1),nt.isMeshStandardMaterial&&nt.envMap===null&&V.environment!==null&&(Ze.envMapIntensity.value=V.environmentIntensity),Te&&(ie.setValue(T,"toneMappingExposure",_.toneMappingExposure),Ft.needsLights&&Fn(Ze,On),xt&&nt.fog===!0&&vt.refreshFogUniforms(Ze,xt),vt.refreshMaterialUniforms(Ze,nt,it,q,p.state.transmissionRenderTarget[E.id]),Gi.upload(T,rs(Ft),Ze,A)),nt.isShaderMaterial&&nt.uniformsNeedUpdate===!0&&(Gi.upload(T,rs(Ft),Ze,A),nt.uniformsNeedUpdate=!1),nt.isSpriteMaterial&&ie.setValue(T,"center",H.center),ie.setValue(T,"modelViewMatrix",H.modelViewMatrix),ie.setValue(T,"normalMatrix",H.normalMatrix),ie.setValue(T,"modelMatrix",H.matrixWorld),nt.isShaderMaterial||nt.isRawShaderMaterial){let be=nt.uniformsGroups;for(let He=0,tn=be.length;He<tn;He++){let Bn=be[He];z.update(Bn,Pe),z.bind(Bn,Pe)}}return Pe}function Fn(E,V){E.ambientLightColor.needsUpdate=V,E.lightProbe.needsUpdate=V,E.directionalLights.needsUpdate=V,E.directionalLightShadows.needsUpdate=V,E.pointLights.needsUpdate=V,E.pointLightShadows.needsUpdate=V,E.spotLights.needsUpdate=V,E.spotLightShadows.needsUpdate=V,E.rectAreaLights.needsUpdate=V,E.hemisphereLights.needsUpdate=V}function os(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return N},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(E,V,et){I.get(E.texture).__webglTexture=V,I.get(E.depthTexture).__webglTexture=et;let nt=I.get(E);nt.__hasExternalTextures=!0,nt.__autoAllocateDepthBuffer=et===void 0,nt.__autoAllocateDepthBuffer||J.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),nt.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(E,V){let et=I.get(E);et.__webglFramebuffer=V,et.__useDefaultFramebuffer=V===void 0},this.setRenderTarget=function(E,V=0,et=0){P=E,N=V,R=et;let nt=!0,H=null,xt=!1,At=!1;if(E){let Ut=I.get(E);if(Ut.__useDefaultFramebuffer!==void 0)rt.bindFramebuffer(T.FRAMEBUFFER,null),nt=!1;else if(Ut.__webglFramebuffer===void 0)A.setupRenderTarget(E);else if(Ut.__hasExternalTextures)A.rebindTextures(E,I.get(E.texture).__webglTexture,I.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){let Nt=E.depthTexture;if(Ut.__boundDepthTexture!==Nt){if(Nt!==null&&I.has(Nt)&&(E.width!==Nt.image.width||E.height!==Nt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");A.setupDepthRenderbuffer(E)}}let Vt=E.texture;(Vt.isData3DTexture||Vt.isDataArrayTexture||Vt.isCompressedArrayTexture)&&(At=!0);let zt=I.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(zt[V])?H=zt[V][et]:H=zt[V],xt=!0):E.samples>0&&A.useMultisampledRTT(E)===!1?H=I.get(E).__webglMultisampledFramebuffer:Array.isArray(zt)?H=zt[et]:H=zt,x.copy(E.viewport),w.copy(E.scissor),k=E.scissorTest}else x.copy(dt).multiplyScalar(it).floor(),w.copy(_t).multiplyScalar(it).floor(),k=Pt;if(rt.bindFramebuffer(T.FRAMEBUFFER,H)&&nt&&rt.drawBuffers(E,H),rt.viewport(x),rt.scissor(w),rt.setScissorTest(k),xt){let Ut=I.get(E.texture);T.framebufferTexture2D(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_CUBE_MAP_POSITIVE_X+V,Ut.__webglTexture,et)}else if(At){let Ut=I.get(E.texture),Vt=V||0;T.framebufferTextureLayer(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0,Ut.__webglTexture,et||0,Vt)}F=-1},this.readRenderTargetPixels=function(E,V,et,nt,H,xt,At){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Lt=I.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&At!==void 0&&(Lt=Lt[At]),Lt){rt.bindFramebuffer(T.FRAMEBUFFER,Lt);try{let Ut=E.texture,Vt=Ut.format,zt=Ut.type;if(!j.textureFormatReadable(Vt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!j.textureTypeReadable(zt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}V>=0&&V<=E.width-nt&&et>=0&&et<=E.height-H&&T.readPixels(V,et,nt,H,Wt.convert(Vt),Wt.convert(zt),xt)}finally{let Ut=P!==null?I.get(P).__webglFramebuffer:null;rt.bindFramebuffer(T.FRAMEBUFFER,Ut)}}},this.readRenderTargetPixelsAsync=async function(E,V,et,nt,H,xt,At){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Lt=I.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&At!==void 0&&(Lt=Lt[At]),Lt){let Ut=E.texture,Vt=Ut.format,zt=Ut.type;if(!j.textureFormatReadable(Vt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!j.textureTypeReadable(zt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(V>=0&&V<=E.width-nt&&et>=0&&et<=E.height-H){rt.bindFramebuffer(T.FRAMEBUFFER,Lt);let Nt=T.createBuffer();T.bindBuffer(T.PIXEL_PACK_BUFFER,Nt),T.bufferData(T.PIXEL_PACK_BUFFER,xt.byteLength,T.STREAM_READ),T.readPixels(V,et,nt,H,Wt.convert(Vt),Wt.convert(zt),0);let te=P!==null?I.get(P).__webglFramebuffer:null;rt.bindFramebuffer(T.FRAMEBUFFER,te);let ne=T.fenceSync(T.SYNC_GPU_COMMANDS_COMPLETE,0);return T.flush(),await wu(T,ne,4),T.bindBuffer(T.PIXEL_PACK_BUFFER,Nt),T.getBufferSubData(T.PIXEL_PACK_BUFFER,0,xt),T.deleteBuffer(Nt),T.deleteSync(ne),xt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(E,V=null,et=0){E.isTexture!==!0&&(mr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),V=arguments[0]||null,E=arguments[1]);let nt=Math.pow(2,-et),H=Math.floor(E.image.width*nt),xt=Math.floor(E.image.height*nt),At=V!==null?V.x:0,Lt=V!==null?V.y:0;A.setTexture2D(E,0),T.copyTexSubImage2D(T.TEXTURE_2D,et,0,0,At,Lt,H,xt),rt.unbindTexture()},this.copyTextureToTexture=function(E,V,et=null,nt=null,H=0){E.isTexture!==!0&&(mr("WebGLRenderer: copyTextureToTexture function signature has changed."),nt=arguments[0]||null,E=arguments[1],V=arguments[2],H=arguments[3]||0,et=null);let xt,At,Lt,Ut,Vt,zt;et!==null?(xt=et.max.x-et.min.x,At=et.max.y-et.min.y,Lt=et.min.x,Ut=et.min.y):(xt=E.image.width,At=E.image.height,Lt=0,Ut=0),nt!==null?(Vt=nt.x,zt=nt.y):(Vt=0,zt=0);let Nt=Wt.convert(V.format),te=Wt.convert(V.type);A.setTexture2D(V,0),T.pixelStorei(T.UNPACK_FLIP_Y_WEBGL,V.flipY),T.pixelStorei(T.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),T.pixelStorei(T.UNPACK_ALIGNMENT,V.unpackAlignment);let ne=T.getParameter(T.UNPACK_ROW_LENGTH),re=T.getParameter(T.UNPACK_IMAGE_HEIGHT),Ae=T.getParameter(T.UNPACK_SKIP_PIXELS),Kt=T.getParameter(T.UNPACK_SKIP_ROWS),Ft=T.getParameter(T.UNPACK_SKIP_IMAGES),me=E.isCompressedTexture?E.mipmaps[H]:E.image;T.pixelStorei(T.UNPACK_ROW_LENGTH,me.width),T.pixelStorei(T.UNPACK_IMAGE_HEIGHT,me.height),T.pixelStorei(T.UNPACK_SKIP_PIXELS,Lt),T.pixelStorei(T.UNPACK_SKIP_ROWS,Ut),E.isDataTexture?T.texSubImage2D(T.TEXTURE_2D,H,Vt,zt,xt,At,Nt,te,me.data):E.isCompressedTexture?T.compressedTexSubImage2D(T.TEXTURE_2D,H,Vt,zt,me.width,me.height,Nt,me.data):T.texSubImage2D(T.TEXTURE_2D,H,Vt,zt,xt,At,Nt,te,me),T.pixelStorei(T.UNPACK_ROW_LENGTH,ne),T.pixelStorei(T.UNPACK_IMAGE_HEIGHT,re),T.pixelStorei(T.UNPACK_SKIP_PIXELS,Ae),T.pixelStorei(T.UNPACK_SKIP_ROWS,Kt),T.pixelStorei(T.UNPACK_SKIP_IMAGES,Ft),H===0&&V.generateMipmaps&&T.generateMipmap(T.TEXTURE_2D),rt.unbindTexture()},this.copyTextureToTexture3D=function(E,V,et=null,nt=null,H=0){E.isTexture!==!0&&(mr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),et=arguments[0]||null,nt=arguments[1]||null,E=arguments[2],V=arguments[3],H=arguments[4]||0);let xt,At,Lt,Ut,Vt,zt,Nt,te,ne,re=E.isCompressedTexture?E.mipmaps[H]:E.image;et!==null?(xt=et.max.x-et.min.x,At=et.max.y-et.min.y,Lt=et.max.z-et.min.z,Ut=et.min.x,Vt=et.min.y,zt=et.min.z):(xt=re.width,At=re.height,Lt=re.depth,Ut=0,Vt=0,zt=0),nt!==null?(Nt=nt.x,te=nt.y,ne=nt.z):(Nt=0,te=0,ne=0);let Ae=Wt.convert(V.format),Kt=Wt.convert(V.type),Ft;if(V.isData3DTexture)A.setTexture3D(V,0),Ft=T.TEXTURE_3D;else if(V.isDataArrayTexture||V.isCompressedArrayTexture)A.setTexture2DArray(V,0),Ft=T.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}T.pixelStorei(T.UNPACK_FLIP_Y_WEBGL,V.flipY),T.pixelStorei(T.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),T.pixelStorei(T.UNPACK_ALIGNMENT,V.unpackAlignment);let me=T.getParameter(T.UNPACK_ROW_LENGTH),Jt=T.getParameter(T.UNPACK_IMAGE_HEIGHT),Pe=T.getParameter(T.UNPACK_SKIP_PIXELS),xn=T.getParameter(T.UNPACK_SKIP_ROWS),Te=T.getParameter(T.UNPACK_SKIP_IMAGES);T.pixelStorei(T.UNPACK_ROW_LENGTH,re.width),T.pixelStorei(T.UNPACK_IMAGE_HEIGHT,re.height),T.pixelStorei(T.UNPACK_SKIP_PIXELS,Ut),T.pixelStorei(T.UNPACK_SKIP_ROWS,Vt),T.pixelStorei(T.UNPACK_SKIP_IMAGES,zt),E.isDataTexture||E.isData3DTexture?T.texSubImage3D(Ft,H,Nt,te,ne,xt,At,Lt,Ae,Kt,re.data):V.isCompressedArrayTexture?T.compressedTexSubImage3D(Ft,H,Nt,te,ne,xt,At,Lt,Ae,re.data):T.texSubImage3D(Ft,H,Nt,te,ne,xt,At,Lt,Ae,Kt,re),T.pixelStorei(T.UNPACK_ROW_LENGTH,me),T.pixelStorei(T.UNPACK_IMAGE_HEIGHT,Jt),T.pixelStorei(T.UNPACK_SKIP_PIXELS,Pe),T.pixelStorei(T.UNPACK_SKIP_ROWS,xn),T.pixelStorei(T.UNPACK_SKIP_IMAGES,Te),H===0&&V.generateMipmaps&&T.generateMipmap(Ft),rt.unbindTexture()},this.initRenderTarget=function(E){I.get(E).__webglFramebuffer===void 0&&A.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?A.setTextureCube(E,0):E.isData3DTexture?A.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?A.setTexture2DArray(E,0):A.setTexture2D(E,0),rt.unbindTexture()},this.resetState=function(){N=0,R=0,P=null,rt.reset(),Qt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return In}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=t===pc?"display-p3":"srgb",e.unpackColorSpace=se.workingColorSpace===Zr?"display-p3":"srgb"}};var Ki=class extends Re{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Qe,this.environmentIntensity=1,this.environmentRotation=new Qe,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}};var Fo=class extends Qn{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Xt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Rl=new ce,Oo=new ws,sr=new Kn,rr=new G,Lr=class extends Re{constructor(t=new Fe,e=new Fo){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),sr.copy(n.boundingSphere),sr.applyMatrix4(s),sr.radius+=r,t.ray.intersectsSphere(sr)===!1)return;Rl.copy(s).invert(),Oo.copy(t.ray).applyMatrix4(Rl);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,d=n.attributes.position;if(l!==null){let f=Math.max(0,a.start),m=Math.min(l.count,a.start+a.count);for(let y=f,g=m;y<g;y++){let p=l.getX(y);rr.fromBufferAttribute(d,p),Pl(rr,p,c,s,t,e,this)}}else{let f=Math.max(0,a.start),m=Math.min(d.count,a.start+a.count);for(let y=f,g=m;y<g;y++)rr.fromBufferAttribute(d,y),Pl(rr,y,c,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Pl(i,t,e,n,s,r,a){let o=Oo.distanceSqToPoint(i);if(o<e){let c=new G;Oo.closestPointToPoint(i,c),c.applyMatrix4(n);let l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}var je=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){let n=this.getLengths(),s=0,r=n.length,a;e?a=e:a=t*n[r-1];let o=0,c=r-1,l;for(;o<=c;)if(s=Math.floor(o+(c-o)/2),l=n[s]-a,l<0)o=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===a)return s/(r-1);let h=n[s],f=n[s+1]-h,m=(a-h)/f;return(s+m)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),c=e||(a.isVector2?new ft:new G);return c.copy(o).sub(a).normalize(),c}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){let n=new G,s=[],r=[],a=[],o=new G,c=new ce;for(let m=0;m<=t;m++){let y=m/t;s[m]=this.getTangentAt(y,new G)}r[0]=new G,a[0]=new G;let l=Number.MAX_VALUE,h=Math.abs(s[0].x),d=Math.abs(s[0].y),f=Math.abs(s[0].z);h<=l&&(l=h,n.set(1,0,0)),d<=l&&(l=d,n.set(0,1,0)),f<=l&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let m=1;m<=t;m++){if(r[m]=r[m-1].clone(),a[m]=a[m-1].clone(),o.crossVectors(s[m-1],s[m]),o.length()>Number.EPSILON){o.normalize();let y=Math.acos(ve(s[m-1].dot(s[m]),-1,1));r[m].applyMatrix4(c.makeRotationAxis(o,y))}a[m].crossVectors(s[m],r[m])}if(e===!0){let m=Math.acos(ve(r[0].dot(r[t]),-1,1));m/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(m=-m);for(let y=1;y<=t;y++)r[y].applyMatrix4(c.makeRotationAxis(s[y],m*y)),a[y].crossVectors(s[y],r[y])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},Cs=class extends je{constructor(t=0,e=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=c}getPoint(t,e=new ft){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+t*r,c=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),f=c-this.aX,m=l-this.aY;c=f*h-m*d+this.aX,l=f*d+m*h+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},Bo=class extends Cs{constructor(t,e,n,s,r,a){super(t,e,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function _c(){let i=0,t=0,e=0,n=0;function s(r,a,o,c){i=r,t=o,e=-3*r+3*a-2*o-c,n=2*r-2*a+o+c}return{initCatmullRom:function(r,a,o,c,l){s(a,o,l*(o-r),l*(c-a))},initNonuniformCatmullRom:function(r,a,o,c,l,h,d){let f=(a-r)/l-(o-r)/(l+h)+(o-a)/h,m=(o-a)/h-(c-a)/(h+d)+(c-o)/d;f*=h,m*=h,s(a,o,f,m)},calc:function(r){let a=r*r,o=a*r;return i+t*r+e*a+n*o}}}var ar=new G,Ra=new _c,Pa=new _c,Ia=new _c,zo=class extends je{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new G){let n=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t,o=Math.floor(a),c=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:c===0&&o===r-1&&(o=r-2,c=1);let l,h;this.closed||o>0?l=s[(o-1)%r]:(ar.subVectors(s[0],s[1]).add(s[0]),l=ar);let d=s[o%r],f=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(ar.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=ar),this.curveType==="centripetal"||this.curveType==="chordal"){let m=this.curveType==="chordal"?.5:.25,y=Math.pow(l.distanceToSquared(d),m),g=Math.pow(d.distanceToSquared(f),m),p=Math.pow(f.distanceToSquared(h),m);g<1e-4&&(g=1),y<1e-4&&(y=g),p<1e-4&&(p=g),Ra.initNonuniformCatmullRom(l.x,d.x,f.x,h.x,y,g,p),Pa.initNonuniformCatmullRom(l.y,d.y,f.y,h.y,y,g,p),Ia.initNonuniformCatmullRom(l.z,d.z,f.z,h.z,y,g,p)}else this.curveType==="catmullrom"&&(Ra.initCatmullRom(l.x,d.x,f.x,h.x,this.tension),Pa.initCatmullRom(l.y,d.y,f.y,h.y,this.tension),Ia.initCatmullRom(l.z,d.z,f.z,h.z,this.tension));return n.set(Ra.calc(c),Pa.calc(c),Ia.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new G().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function Il(i,t,e,n,s){let r=(n-t)*.5,a=(s-e)*.5,o=i*i,c=i*o;return(2*e-2*n+r+a)*c+(-3*e+3*n-2*r-a)*o+r*i+e}function Sg(i,t){let e=1-i;return e*e*t}function bg(i,t){return 2*(1-i)*i*t}function wg(i,t){return i*i*t}function vs(i,t,e,n){return Sg(i,t)+bg(i,e)+wg(i,n)}function Ag(i,t){let e=1-i;return e*e*e*t}function Tg(i,t){let e=1-i;return 3*e*e*i*t}function Eg(i,t){return 3*(1-i)*i*i*t}function Cg(i,t){return i*i*i*t}function Ms(i,t,e,n,s){return Ag(i,t)+Tg(i,e)+Eg(i,n)+Cg(i,s)}var Dr=class extends je{constructor(t=new ft,e=new ft,n=new ft,s=new ft){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new ft){let n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Ms(t,s.x,r.x,a.x,o.x),Ms(t,s.y,r.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},ko=class extends je{constructor(t=new G,e=new G,n=new G,s=new G){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new G){let n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Ms(t,s.x,r.x,a.x,o.x),Ms(t,s.y,r.y,a.y,o.y),Ms(t,s.z,r.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Ur=class extends je{constructor(t=new ft,e=new ft){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new ft){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new ft){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Vo=class extends je{constructor(t=new G,e=new G){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new G){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new G){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Nr=class extends je{constructor(t=new ft,e=new ft,n=new ft){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new ft){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(vs(t,s.x,r.x,a.x),vs(t,s.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Go=class extends je{constructor(t=new G,e=new G,n=new G){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new G){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(vs(t,s.x,r.x,a.x),vs(t,s.y,r.y,a.y),vs(t,s.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Fr=class extends je{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new ft){let n=e,s=this.points,r=(s.length-1)*t,a=Math.floor(r),o=r-a,c=s[a===0?a:a-1],l=s[a],h=s[a>s.length-2?s.length-1:a+1],d=s[a>s.length-3?s.length-1:a+2];return n.set(Il(o,c.x,l.x,h.x,d.x),Il(o,c.y,l.y,h.y,d.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new ft().fromArray(s))}return this}},Ho=Object.freeze({__proto__:null,ArcCurve:Bo,CatmullRomCurve3:zo,CubicBezierCurve:Dr,CubicBezierCurve3:ko,EllipseCurve:Cs,LineCurve:Ur,LineCurve3:Vo,QuadraticBezierCurve:Nr,QuadraticBezierCurve3:Go,SplineCurve:Fr}),Wo=class extends je{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Ho[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let a=s[r]-n,o=this.curves[r],c=o.getLength(),l=c===0?0:1-a/c;return o.getPointAt(l,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,c=a.getPoints(o);for(let l=0;l<c.length;l++){let h=c[l];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(new Ho[s.type]().fromJSON(s))}return this}},Un=class extends Wo{constructor(t){super(),this.type="Path",this.currentPoint=new ft,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new Ur(this.currentPoint.clone(),new ft(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){let r=new Nr(this.currentPoint.clone(),new ft(t,e),new ft(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,a){let o=new Dr(this.currentPoint.clone(),new ft(t,e),new ft(n,s),new ft(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new Fr(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,a){let o=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+o,e+c,n,s,r,a),this}absarc(t,e,n,s,r,a){return this.absellipse(t,e,n,n,s,r,a),this}ellipse(t,e,n,s,r,a,o,c){let l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+l,e+h,n,s,r,a,o,c),this}absellipse(t,e,n,s,r,a,o,c){let l=new Cs(t,e,n,s,r,a,o,c);if(this.curves.length>0){let d=l.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(l);let h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}};var Xo=class i extends Fe{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};let r=[],a=[];o(s),l(n),h(),this.setAttribute("position",new ue(r,3)),this.setAttribute("normal",new ue(r.slice(),3)),this.setAttribute("uv",new ue(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(S){let _=new G,M=new G,N=new G;for(let R=0;R<e.length;R+=3)m(e[R+0],_),m(e[R+1],M),m(e[R+2],N),c(_,M,N,S)}function c(S,_,M,N){let R=N+1,P=[];for(let F=0;F<=R;F++){P[F]=[];let K=S.clone().lerp(M,F/R),x=_.clone().lerp(M,F/R),w=R-F;for(let k=0;k<=w;k++)k===0&&F===R?P[F][k]=K:P[F][k]=K.clone().lerp(x,k/w)}for(let F=0;F<R;F++)for(let K=0;K<2*(R-F)-1;K++){let x=Math.floor(K/2);K%2===0?(f(P[F][x+1]),f(P[F+1][x]),f(P[F][x])):(f(P[F][x+1]),f(P[F+1][x+1]),f(P[F+1][x]))}}function l(S){let _=new G;for(let M=0;M<r.length;M+=3)_.x=r[M+0],_.y=r[M+1],_.z=r[M+2],_.normalize().multiplyScalar(S),r[M+0]=_.x,r[M+1]=_.y,r[M+2]=_.z}function h(){let S=new G;for(let _=0;_<r.length;_+=3){S.x=r[_+0],S.y=r[_+1],S.z=r[_+2];let M=p(S)/2/Math.PI+.5,N=u(S)/Math.PI+.5;a.push(M,1-N)}y(),d()}function d(){for(let S=0;S<a.length;S+=6){let _=a[S+0],M=a[S+2],N=a[S+4],R=Math.max(_,M,N),P=Math.min(_,M,N);R>.9&&P<.1&&(_<.2&&(a[S+0]+=1),M<.2&&(a[S+2]+=1),N<.2&&(a[S+4]+=1))}}function f(S){r.push(S.x,S.y,S.z)}function m(S,_){let M=S*3;_.x=t[M+0],_.y=t[M+1],_.z=t[M+2]}function y(){let S=new G,_=new G,M=new G,N=new G,R=new ft,P=new ft,F=new ft;for(let K=0,x=0;K<r.length;K+=9,x+=6){S.set(r[K+0],r[K+1],r[K+2]),_.set(r[K+3],r[K+4],r[K+5]),M.set(r[K+6],r[K+7],r[K+8]),R.set(a[x+0],a[x+1]),P.set(a[x+2],a[x+3]),F.set(a[x+4],a[x+5]),N.copy(S).add(_).add(M).divideScalar(3);let w=p(N);g(R,x+0,S,w),g(P,x+2,_,w),g(F,x+4,M,w)}}function g(S,_,M,N){N<0&&S.x===1&&(a[_]=S.x-1),M.x===0&&M.z===0&&(a[_]=N/2/Math.PI+.5)}function p(S){return Math.atan2(S.z,-S.x)}function u(S){return Math.atan2(-S.y,Math.sqrt(S.x*S.x+S.z*S.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.vertices,t.indices,t.radius,t.details)}};var Zn=class extends Un{constructor(t){super(t),this.uuid=_i(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(new Un().fromJSON(s))}return this}},Rg={triangulate:function(i,t,e=2){let n=t&&t.length,s=n?t[0]*e:i.length,r=dh(i,0,s,e,!0),a=[];if(!r||r.next===r.prev)return a;let o,c,l,h,d,f,m;if(n&&(r=Ug(i,t,r,e)),i.length>80*e){o=l=i[0],c=h=i[1];for(let y=e;y<s;y+=e)d=i[y],f=i[y+1],d<o&&(o=d),f<c&&(c=f),d>l&&(l=d),f>h&&(h=f);m=Math.max(l-o,h-c),m=m!==0?32767/m:0}return Rs(r,a,e,o,c,m,0),a}};function dh(i,t,e,n,s){let r,a;if(s===Xg(i,t,e,n)>0)for(r=t;r<e;r+=n)a=Ll(r,i[r],i[r+1],a);else for(r=e-n;r>=t;r-=n)a=Ll(r,i[r],i[r+1],a);return a&&$r(a,a.next)&&(Is(a),a=a.next),a}function fi(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&($r(e,e.next)||he(e.prev,e,e.next)===0)){if(Is(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Rs(i,t,e,n,s,r,a){if(!i)return;!a&&r&&zg(i,n,s,r);let o=i,c,l;for(;i.prev!==i.next;){if(c=i.prev,l=i.next,r?Ig(i,n,s,r):Pg(i)){t.push(c.i/e|0),t.push(i.i/e|0),t.push(l.i/e|0),Is(i),i=l.next,o=l.next;continue}if(i=l,i===o){a?a===1?(i=Lg(fi(i),t,e),Rs(i,t,e,n,s,r,2)):a===2&&Dg(i,t,e,n,s,r):Rs(fi(i),t,e,n,s,r,1);break}}}function Pg(i){let t=i.prev,e=i,n=i.next;if(he(t,e,n)>=0)return!1;let s=t.x,r=e.x,a=n.x,o=t.y,c=e.y,l=n.y,h=s<r?s<a?s:a:r<a?r:a,d=o<c?o<l?o:l:c<l?c:l,f=s>r?s>a?s:a:r>a?r:a,m=o>c?o>l?o:l:c>l?c:l,y=n.next;for(;y!==t;){if(y.x>=h&&y.x<=f&&y.y>=d&&y.y<=m&&zi(s,o,r,c,a,l,y.x,y.y)&&he(y.prev,y,y.next)>=0)return!1;y=y.next}return!0}function Ig(i,t,e,n){let s=i.prev,r=i,a=i.next;if(he(s,r,a)>=0)return!1;let o=s.x,c=r.x,l=a.x,h=s.y,d=r.y,f=a.y,m=o<c?o<l?o:l:c<l?c:l,y=h<d?h<f?h:f:d<f?d:f,g=o>c?o>l?o:l:c>l?c:l,p=h>d?h>f?h:f:d>f?d:f,u=qo(m,y,t,e,n),S=qo(g,p,t,e,n),_=i.prevZ,M=i.nextZ;for(;_&&_.z>=u&&M&&M.z<=S;){if(_.x>=m&&_.x<=g&&_.y>=y&&_.y<=p&&_!==s&&_!==a&&zi(o,h,c,d,l,f,_.x,_.y)&&he(_.prev,_,_.next)>=0||(_=_.prevZ,M.x>=m&&M.x<=g&&M.y>=y&&M.y<=p&&M!==s&&M!==a&&zi(o,h,c,d,l,f,M.x,M.y)&&he(M.prev,M,M.next)>=0))return!1;M=M.nextZ}for(;_&&_.z>=u;){if(_.x>=m&&_.x<=g&&_.y>=y&&_.y<=p&&_!==s&&_!==a&&zi(o,h,c,d,l,f,_.x,_.y)&&he(_.prev,_,_.next)>=0)return!1;_=_.prevZ}for(;M&&M.z<=S;){if(M.x>=m&&M.x<=g&&M.y>=y&&M.y<=p&&M!==s&&M!==a&&zi(o,h,c,d,l,f,M.x,M.y)&&he(M.prev,M,M.next)>=0)return!1;M=M.nextZ}return!0}function Lg(i,t,e){let n=i;do{let s=n.prev,r=n.next.next;!$r(s,r)&&fh(s,n,n.next,r)&&Ps(s,r)&&Ps(r,s)&&(t.push(s.i/e|0),t.push(n.i/e|0),t.push(r.i/e|0),Is(n),Is(n.next),n=i=r),n=n.next}while(n!==i);return fi(n)}function Dg(i,t,e,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Gg(a,o)){let c=ph(a,o);a=fi(a,a.next),c=fi(c,c.next),Rs(a,t,e,n,s,r,0),Rs(c,t,e,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function Ug(i,t,e,n){let s=[],r,a,o,c,l;for(r=0,a=t.length;r<a;r++)o=t[r]*n,c=r<a-1?t[r+1]*n:i.length,l=dh(i,o,c,n,!1),l===l.next&&(l.steiner=!0),s.push(Vg(l));for(s.sort(Ng),r=0;r<s.length;r++)e=Fg(s[r],e);return e}function Ng(i,t){return i.x-t.x}function Fg(i,t){let e=Og(i,t);if(!e)return t;let n=ph(e,i);return fi(n,n.next),fi(e,e.next)}function Og(i,t){let e=t,n=-1/0,s,r=i.x,a=i.y;do{if(a<=e.y&&a>=e.next.y&&e.next.y!==e.y){let f=e.x+(a-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(f<=r&&f>n&&(n=f,s=e.x<e.next.x?e:e.next,f===r))return s}e=e.next}while(e!==t);if(!s)return null;let o=s,c=s.x,l=s.y,h=1/0,d;e=s;do r>=e.x&&e.x>=c&&r!==e.x&&zi(a<l?r:n,a,c,l,a<l?n:r,a,e.x,e.y)&&(d=Math.abs(a-e.y)/(r-e.x),Ps(e,i)&&(d<h||d===h&&(e.x>s.x||e.x===s.x&&Bg(s,e)))&&(s=e,h=d)),e=e.next;while(e!==o);return s}function Bg(i,t){return he(i.prev,i,t.prev)<0&&he(t.next,i,i.next)<0}function zg(i,t,e,n){let s=i;do s.z===0&&(s.z=qo(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,kg(s)}function kg(i){let t,e,n,s,r,a,o,c,l=1;do{for(e=i,i=null,r=null,a=0;e;){for(a++,n=e,o=0,t=0;t<l&&(o++,n=n.nextZ,!!n);t++);for(c=l;o>0||c>0&&n;)o!==0&&(c===0||!n||e.z<=n.z)?(s=e,e=e.nextZ,o--):(s=n,n=n.nextZ,c--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;e=n}r.nextZ=null,l*=2}while(a>1);return i}function qo(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function Vg(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function zi(i,t,e,n,s,r,a,o){return(s-a)*(t-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(e-a)*(t-o)&&(e-a)*(r-o)>=(s-a)*(n-o)}function Gg(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!Hg(i,t)&&(Ps(i,t)&&Ps(t,i)&&Wg(i,t)&&(he(i.prev,i,t.prev)||he(i,t.prev,t))||$r(i,t)&&he(i.prev,i,i.next)>0&&he(t.prev,t,t.next)>0)}function he(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function $r(i,t){return i.x===t.x&&i.y===t.y}function fh(i,t,e,n){let s=cr(he(i,t,e)),r=cr(he(i,t,n)),a=cr(he(e,n,i)),o=cr(he(e,n,t));return!!(s!==r&&a!==o||s===0&&or(i,e,t)||r===0&&or(i,n,t)||a===0&&or(e,i,n)||o===0&&or(e,t,n))}function or(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function cr(i){return i>0?1:i<0?-1:0}function Hg(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&fh(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function Ps(i,t){return he(i.prev,i,i.next)<0?he(i,t,i.next)>=0&&he(i,i.prev,t)>=0:he(i,t,i.prev)<0||he(i,i.next,t)<0}function Wg(i,t){let e=i,n=!1,s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function ph(i,t){let e=new Yo(i.i,i.x,i.y),n=new Yo(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function Ll(i,t,e,n){let s=new Yo(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Is(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Yo(i,t,e){this.i=i,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Xg(i,t,e,n){let s=0;for(let r=t,a=e-n;r<e;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}var Jn=class i{static area(t){let e=t.length,n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],s=[],r=[];Dl(t),Ul(n,t);let a=t.length;e.forEach(Dl);for(let c=0;c<e.length;c++)s.push(a),a+=e[c].length,Ul(n,e[c]);let o=Rg.triangulate(n,s);for(let c=0;c<o.length;c+=3)r.push(o.slice(c,c+3));return r}};function Dl(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function Ul(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var Or=class i extends Fe{constructor(t=new Zn([new ft(.5,.5),new ft(-.5,.5),new ft(-.5,-.5),new ft(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,s=[],r=[];for(let o=0,c=t.length;o<c;o++){let l=t[o];a(l)}this.setAttribute("position",new ue(s,3)),this.setAttribute("uv",new ue(r,2)),this.computeVertexNormals();function a(o){let c=[],l=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,d=e.depth!==void 0?e.depth:1,f=e.bevelEnabled!==void 0?e.bevelEnabled:!0,m=e.bevelThickness!==void 0?e.bevelThickness:.2,y=e.bevelSize!==void 0?e.bevelSize:m-.1,g=e.bevelOffset!==void 0?e.bevelOffset:0,p=e.bevelSegments!==void 0?e.bevelSegments:3,u=e.extrudePath,S=e.UVGenerator!==void 0?e.UVGenerator:qg,_,M=!1,N,R,P,F;u&&(_=u.getSpacedPoints(h),M=!0,f=!1,N=u.computeFrenetFrames(h,!1),R=new G,P=new G,F=new G),f||(p=0,m=0,y=0,g=0);let K=o.extractPoints(l),x=K.shape,w=K.holes;if(!Jn.isClockWise(x)){x=x.reverse();for(let W=0,T=w.length;W<T;W++){let B=w[W];Jn.isClockWise(B)&&(w[W]=B.reverse())}}let $=Jn.triangulateShape(x,w),Y=x;for(let W=0,T=w.length;W<T;W++){let B=w[W];x=x.concat(B)}function ct(W,T,B){return T||console.error("THREE.ExtrudeGeometry: vec does not exist"),W.clone().addScaledVector(T,B)}let q=x.length,it=$.length;function U(W,T,B){let J,j,rt,O=W.x-T.x,I=W.y-T.y,A=B.x-W.x,v=B.y-W.y,X=O*O+I*I,at=O*v-I*A;if(Math.abs(at)>Number.EPSILON){let ut=Math.sqrt(X),ht=Math.sqrt(A*A+v*v),It=T.x-I/ut,vt=T.y+O/ut,Mt=B.x-v/ht,Ht=B.y+A/ht,gt=((Mt-It)*v-(Ht-vt)*A)/(O*v-I*A);J=It+O*gt-W.x,j=vt+I*gt-W.y;let bt=J*J+j*j;if(bt<=2)return new ft(J,j);rt=Math.sqrt(bt/2)}else{let ut=!1;O>Number.EPSILON?A>Number.EPSILON&&(ut=!0):O<-Number.EPSILON?A<-Number.EPSILON&&(ut=!0):Math.sign(I)===Math.sign(v)&&(ut=!0),ut?(J=-I,j=O,rt=Math.sqrt(X)):(J=O,j=I,rt=Math.sqrt(X/2))}return new ft(J/rt,j/rt)}let pt=[];for(let W=0,T=Y.length,B=T-1,J=W+1;W<T;W++,B++,J++)B===T&&(B=0),J===T&&(J=0),pt[W]=U(Y[W],Y[B],Y[J]);let dt=[],_t,Pt=pt.concat();for(let W=0,T=w.length;W<T;W++){let B=w[W];_t=[];for(let J=0,j=B.length,rt=j-1,O=J+1;J<j;J++,rt++,O++)rt===j&&(rt=0),O===j&&(O=0),_t[J]=U(B[J],B[rt],B[O]);dt.push(_t),Pt=Pt.concat(_t)}for(let W=0;W<p;W++){let T=W/p,B=m*Math.cos(T*Math.PI/2),J=y*Math.sin(T*Math.PI/2)+g;for(let j=0,rt=Y.length;j<rt;j++){let O=ct(Y[j],pt[j],J);b(O.x,O.y,-B)}for(let j=0,rt=w.length;j<rt;j++){let O=w[j];_t=dt[j];for(let I=0,A=O.length;I<A;I++){let v=ct(O[I],_t[I],J);b(v.x,v.y,-B)}}}let Ot=y+g;for(let W=0;W<q;W++){let T=f?ct(x[W],Pt[W],Ot):x[W];M?(P.copy(N.normals[0]).multiplyScalar(T.x),R.copy(N.binormals[0]).multiplyScalar(T.y),F.copy(_[0]).add(P).add(R),b(F.x,F.y,F.z)):b(T.x,T.y,0)}for(let W=1;W<=h;W++)for(let T=0;T<q;T++){let B=f?ct(x[T],Pt[T],Ot):x[T];M?(P.copy(N.normals[W]).multiplyScalar(B.x),R.copy(N.binormals[W]).multiplyScalar(B.y),F.copy(_[W]).add(P).add(R),b(F.x,F.y,F.z)):b(B.x,B.y,d/h*W)}for(let W=p-1;W>=0;W--){let T=W/p,B=m*Math.cos(T*Math.PI/2),J=y*Math.sin(T*Math.PI/2)+g;for(let j=0,rt=Y.length;j<rt;j++){let O=ct(Y[j],pt[j],J);b(O.x,O.y,d+B)}for(let j=0,rt=w.length;j<rt;j++){let O=w[j];_t=dt[j];for(let I=0,A=O.length;I<A;I++){let v=ct(O[I],_t[I],J);M?b(v.x,v.y+_[h-1].y,_[h-1].x+B):b(v.x,v.y,d+B)}}}D(),L();function D(){let W=s.length/3;if(f){let T=0,B=q*T;for(let J=0;J<it;J++){let j=$[J];Q(j[2]+B,j[1]+B,j[0]+B)}T=h+p*2,B=q*T;for(let J=0;J<it;J++){let j=$[J];Q(j[0]+B,j[1]+B,j[2]+B)}}else{for(let T=0;T<it;T++){let B=$[T];Q(B[2],B[1],B[0])}for(let T=0;T<it;T++){let B=$[T];Q(B[0]+q*h,B[1]+q*h,B[2]+q*h)}}n.addGroup(W,s.length/3-W,0)}function L(){let W=s.length/3,T=0;C(Y,T),T+=Y.length;for(let B=0,J=w.length;B<J;B++){let j=w[B];C(j,T),T+=j.length}n.addGroup(W,s.length/3-W,1)}function C(W,T){let B=W.length;for(;--B>=0;){let J=B,j=B-1;j<0&&(j=W.length-1);for(let rt=0,O=h+p*2;rt<O;rt++){let I=q*rt,A=q*(rt+1),v=T+J+I,X=T+j+I,at=T+j+A,ut=T+J+A;st(v,X,at,ut)}}}function b(W,T,B){c.push(W),c.push(T),c.push(B)}function Q(W,T,B){Z(W),Z(T),Z(B);let J=s.length/3,j=S.generateTopUV(n,s,J-3,J-2,J-1);lt(j[0]),lt(j[1]),lt(j[2])}function st(W,T,B,J){Z(W),Z(T),Z(J),Z(T),Z(B),Z(J);let j=s.length/3,rt=S.generateSideWallUV(n,s,j-6,j-3,j-2,j-1);lt(rt[0]),lt(rt[1]),lt(rt[3]),lt(rt[1]),lt(rt[2]),lt(rt[3])}function Z(W){s.push(c[W*3+0]),s.push(c[W*3+1]),s.push(c[W*3+2])}function lt(W){r.push(W.x),r.push(W.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return Yg(e,n,t)}static fromJSON(t,e){let n=[];for(let r=0,a=t.shapes.length;r<a;r++){let o=e[t.shapes[r]];n.push(o)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new Ho[s.type]().fromJSON(s)),new i(n,t.options)}},qg={generateTopUV:function(i,t,e,n,s){let r=t[e*3],a=t[e*3+1],o=t[n*3],c=t[n*3+1],l=t[s*3],h=t[s*3+1];return[new ft(r,a),new ft(o,c),new ft(l,h)]},generateSideWallUV:function(i,t,e,n,s,r){let a=t[e*3],o=t[e*3+1],c=t[e*3+2],l=t[n*3],h=t[n*3+1],d=t[n*3+2],f=t[s*3],m=t[s*3+1],y=t[s*3+2],g=t[r*3],p=t[r*3+1],u=t[r*3+2];return Math.abs(o-h)<Math.abs(a-l)?[new ft(a,1-c),new ft(l,1-d),new ft(f,1-y),new ft(g,1-u)]:[new ft(o,1-c),new ft(h,1-d),new ft(m,1-y),new ft(p,1-u)]}};function Yg(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var Br=class i extends Xo{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}};var zr=class i extends Fe{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let c=Math.min(a+o,Math.PI),l=0,h=[],d=new G,f=new G,m=[],y=[],g=[],p=[];for(let u=0;u<=n;u++){let S=[],_=u/n,M=0;u===0&&a===0?M=.5/e:u===n&&c===Math.PI&&(M=-.5/e);for(let N=0;N<=e;N++){let R=N/e;d.x=-t*Math.cos(s+R*r)*Math.sin(a+_*o),d.y=t*Math.cos(a+_*o),d.z=t*Math.sin(s+R*r)*Math.sin(a+_*o),y.push(d.x,d.y,d.z),f.copy(d).normalize(),g.push(f.x,f.y,f.z),p.push(R+M,1-_),S.push(l++)}h.push(S)}for(let u=0;u<n;u++)for(let S=0;S<e;S++){let _=h[u][S+1],M=h[u][S],N=h[u+1][S],R=h[u+1][S+1];(u!==0||a>0)&&m.push(_,M,R),(u!==n-1||c<Math.PI)&&m.push(M,N,R)}this.setIndex(m),this.setAttribute("position",new ue(y,3)),this.setAttribute("normal",new ue(g,3)),this.setAttribute("uv",new ue(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var Zo=class extends Qn{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Xt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Xt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=th,this.normalScale=new ft(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Qe,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},kr=class extends Zo{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ft(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return ve(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Xt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Xt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Xt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}};function lr(i,t,e){return!i||!e&&i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function Zg(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var Qi=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let a;e:{i:if(!(t<s)){for(let o=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=e[++n],t<s)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(n=2,r=o);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=e[--n-1],t>=r)break t}a=n,n=0;break e}break n}for(;n<a;){let o=n+a>>>1;t<e[o]?a=o:n=o+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Jo=class extends Qi{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Fc,endingEnd:Fc}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,a=t+1,o=s[r],c=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Oc:r=t,o=2*e-n;break;case Bc:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Oc:a=t,c=2*n-e;break;case Bc:a=1,c=n+s[1]-s[0];break;default:a=t-1,c=e}let l=(n-e)*.5,h=this.valueSize;this._weightPrev=l/(e-o),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,l=c-o,h=this._offsetPrev,d=this._offsetNext,f=this._weightPrev,m=this._weightNext,y=(n-e)/(s-e),g=y*y,p=g*y,u=-f*p+2*f*g-f*y,S=(1+f)*p+(-1.5-2*f)*g+(-.5+f)*y+1,_=(-1-m)*p+(1.5+m)*g+.5*y,M=m*p-m*g;for(let N=0;N!==o;++N)r[N]=u*a[h+N]+S*a[l+N]+_*a[c+N]+M*a[d+N];return r}},$o=class extends Qi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,l=c-o,h=(n-e)/(s-e),d=1-h;for(let f=0;f!==o;++f)r[f]=a[l+f]*d+a[c+f]*h;return r}},Ko=class extends Qi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},on=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=lr(e,this.TimeBufferType),this.values=lr(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:lr(t.times,Array),values:lr(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Ko(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new $o(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Jo(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case gr:e=this.InterpolantFactoryMethodDiscrete;break;case yo:e=this.InterpolantFactoryMethodLinear;break;case ea:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return gr;case this.InterpolantFactoryMethodLinear:return yo;case this.InterpolantFactoryMethodSmooth:return ea}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t}return this}trim(t,e){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let c=n[o];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,c),t=!1;break}if(a!==null&&a>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,c,a),t=!1;break}a=c}if(s!==void 0&&Zg(s))for(let o=0,c=s.length;o!==c;++o){let l=s[o];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,l),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===ea,r=t.length-1,a=1;for(let o=1;o<r;++o){let c=!1,l=t[o],h=t[o+1];if(l!==h&&(o!==1||l!==t[0]))if(s)c=!0;else{let d=o*n,f=d-n,m=d+n;for(let y=0;y!==n;++y){let g=e[d+y];if(g!==e[f+y]||g!==e[m+y]){c=!0;break}}}if(c){if(o!==a){t[a]=t[o];let d=o*n,f=a*n;for(let m=0;m!==n;++m)e[f+m]=e[d+m]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,c=a*n,l=0;l!==n;++l)e[c+l]=e[o+l];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};on.prototype.TimeBufferType=Float32Array;on.prototype.ValueBufferType=Float32Array;on.prototype.DefaultInterpolation=yo;var pi=class extends on{constructor(t,e,n){super(t,e,n)}};pi.prototype.ValueTypeName="bool";pi.prototype.ValueBufferType=Array;pi.prototype.DefaultInterpolation=gr;pi.prototype.InterpolantFactoryMethodLinear=void 0;pi.prototype.InterpolantFactoryMethodSmooth=void 0;var Qo=class extends on{};Qo.prototype.ValueTypeName="color";var jo=class extends on{};jo.prototype.ValueTypeName="number";var tc=class extends Qi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-e)/(s-e),l=t*o;for(let h=l+o;l!==h;l+=4)mn.slerpFlat(r,0,a,l-o,a,l,c);return r}},Vr=class extends on{InterpolantFactoryMethodLinear(t){return new tc(this.times,this.values,this.getValueSize(),t)}};Vr.prototype.ValueTypeName="quaternion";Vr.prototype.InterpolantFactoryMethodSmooth=void 0;var mi=class extends on{constructor(t,e,n){super(t,e,n)}};mi.prototype.ValueTypeName="string";mi.prototype.ValueBufferType=Array;mi.prototype.DefaultInterpolation=gr;mi.prototype.InterpolantFactoryMethodLinear=void 0;mi.prototype.InterpolantFactoryMethodSmooth=void 0;var ec=class extends on{};ec.prototype.ValueTypeName="vector";var Nl={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(this.files[i]=t)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}},nc=class{constructor(t,e,n){let s=this,r=!1,a=0,o=0,c,l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,d){return l.push(h,d),this},this.removeHandler=function(h){let d=l.indexOf(h);return d!==-1&&l.splice(d,2),this},this.getHandler=function(h){for(let d=0,f=l.length;d<f;d+=2){let m=l[d],y=l[d+1];if(m.global&&(m.lastIndex=0),m.test(h))return y}return null}}},Jg=new nc,ji=class{constructor(t){this.manager=t!==void 0?t:Jg,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};ji.DEFAULT_MATERIAL_NAME="__DEFAULT";var An={},ic=class extends Error{constructor(t,e){super(t),this.response=e}},Gr=class extends ji{constructor(t){super(t)}load(t,e,n,s){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let r=Nl.get(t);if(r!==void 0)return this.manager.itemStart(t),setTimeout(()=>{e&&e(r),this.manager.itemEnd(t)},0),r;if(An[t]!==void 0){An[t].push({onLoad:e,onProgress:n,onError:s});return}An[t]=[],An[t].push({onLoad:e,onProgress:n,onError:s});let a=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,c=this.responseType;fetch(a).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;let h=An[t],d=l.body.getReader(),f=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),m=f?parseInt(f):0,y=m!==0,g=0,p=new ReadableStream({start(u){S();function S(){d.read().then(({done:_,value:M})=>{if(_)u.close();else{g+=M.byteLength;let N=new ProgressEvent("progress",{lengthComputable:y,loaded:g,total:m});for(let R=0,P=h.length;R<P;R++){let F=h[R];F.onProgress&&F.onProgress(N)}u.enqueue(M),S()}},_=>{u.error(_)})}}});return new Response(p)}else throw new ic(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return l.json();default:if(o===void 0)return l.text();{let d=/charset="?([^;"\s]*)"?/i.exec(o),f=d&&d[1]?d[1].toLowerCase():void 0,m=new TextDecoder(f);return l.arrayBuffer().then(y=>m.decode(y))}}}).then(l=>{Nl.add(t,l);let h=An[t];delete An[t];for(let d=0,f=h.length;d<f;d++){let m=h[d];m.onLoad&&m.onLoad(l)}}).catch(l=>{let h=An[t];if(h===void 0)throw this.manager.itemError(t),l;delete An[t];for(let d=0,f=h.length;d<f;d++){let m=h[d];m.onError&&m.onError(l)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}};var Hr=class extends Re{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Xt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},Wr=class extends Hr{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Re.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Xt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},La=new ce,Fl=new G,Ol=new G,sc=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ft(512,512),this.map=null,this.mapPass=null,this.matrix=new ce,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Es,this._frameExtents=new ft(1,1),this._viewportCount=1,this._viewports=[new de(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;Fl.setFromMatrixPosition(t.matrixWorld),e.position.copy(Fl),Ol.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Ol),e.updateMatrixWorld(),La.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(La),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(La)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var rc=class extends sc{constructor(){super(new Rr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Xr=class extends Hr{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Re.DEFAULT_UP),this.updateMatrix(),this.target=new Re,this.shadow=new rc}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var xc="\\[\\]\\.:\\/",$g=new RegExp("["+xc+"]","g"),yc="[^"+xc+"]",Kg="[^"+xc.replace("\\.","")+"]",Qg=/((?:WC+[\/:])*)/.source.replace("WC",yc),jg=/(WCOD+)?/.source.replace("WCOD",Kg),t0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",yc),e0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",yc),n0=new RegExp("^"+Qg+jg+t0+e0+"$"),i0=["material","materials","bones","map"],ac=class{constructor(t,e,n){let s=n||oe.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},oe=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace($g,"")}static parseTrackName(t){let e=n0.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);i0.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let c=n(o.children);if(c)return c}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===l){l=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(l!==void 0){if(t[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}let a=t[s];if(a===void 0){let l=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};oe.Composite=ac;oe.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};oe.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};oe.prototype.GetterByBindingType=[oe.prototype._getValue_direct,oe.prototype._getValue_array,oe.prototype._getValue_arrayElement,oe.prototype._getValue_toArray];oe.prototype.SetterByBindingTypeAndVersioning=[[oe.prototype._setValue_direct,oe.prototype._setValue_direct_setNeedsUpdate,oe.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[oe.prototype._setValue_array,oe.prototype._setValue_array_setNeedsUpdate,oe.prototype._setValue_array_setMatrixWorldNeedsUpdate],[oe.prototype._setValue_arrayElement,oe.prototype._setValue_arrayElement_setNeedsUpdate,oe.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[oe.prototype._setValue_fromArray,oe.prototype._setValue_fromArray_setNeedsUpdate,oe.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var a0=new Float32Array(1);var Bl=new ce,qr=class{constructor(t,e,n=0,s=1/0){this.ray=new ws(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new As,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Bl.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Bl),this}intersectObject(t,e=!0,n=[]){return oc(t,this,n,e),n.sort(zl),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)oc(t[s],this,n,e);return n.sort(zl),n}};function zl(i,t){return i.distance-t.distance}function oc(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let a=0,o=r.length;a<o;a++)oc(r[a],t,e,!0)}}var kl=new ft,ts=class{constructor(t=new ft(1/0,1/0),e=new ft(-1/0,-1/0)){this.isBox2=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=kl.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(t){return this.isEmpty()?t.set(0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,kl).distanceTo(t)}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}};var gn=class{constructor(){this.type="ShapePath",this.color=new Xt,this.subPaths=[],this.currentPath=null}moveTo(t,e){return this.currentPath=new Un,this.subPaths.push(this.currentPath),this.currentPath.moveTo(t,e),this}lineTo(t,e){return this.currentPath.lineTo(t,e),this}quadraticCurveTo(t,e,n,s){return this.currentPath.quadraticCurveTo(t,e,n,s),this}bezierCurveTo(t,e,n,s,r,a){return this.currentPath.bezierCurveTo(t,e,n,s,r,a),this}splineThru(t){return this.currentPath.splineThru(t),this}toShapes(t){function e(u){let S=[];for(let _=0,M=u.length;_<M;_++){let N=u[_],R=new Zn;R.curves=N.curves,S.push(R)}return S}function n(u,S){let _=S.length,M=!1;for(let N=_-1,R=0;R<_;N=R++){let P=S[N],F=S[R],K=F.x-P.x,x=F.y-P.y;if(Math.abs(x)>Number.EPSILON){if(x<0&&(P=S[R],K=-K,F=S[N],x=-x),u.y<P.y||u.y>F.y)continue;if(u.y===P.y){if(u.x===P.x)return!0}else{let w=x*(u.x-P.x)-K*(u.y-P.y);if(w===0)return!0;if(w<0)continue;M=!M}}else{if(u.y!==P.y)continue;if(F.x<=u.x&&u.x<=P.x||P.x<=u.x&&u.x<=F.x)return!0}}return M}let s=Jn.isClockWise,r=this.subPaths;if(r.length===0)return[];let a,o,c,l=[];if(r.length===1)return o=r[0],c=new Zn,c.curves=o.curves,l.push(c),l;let h=!s(r[0].getPoints());h=t?!h:h;let d=[],f=[],m=[],y=0,g;f[y]=void 0,m[y]=[];for(let u=0,S=r.length;u<S;u++)o=r[u],g=o.getPoints(),a=s(g),a=t?!a:a,a?(!h&&f[y]&&y++,f[y]={s:new Zn,p:g},f[y].s.curves=o.curves,h&&y++,m[y]=[]):m[y].push({h:o,p:g[0]});if(!f[0])return e(r);if(f.length>1){let u=!1,S=0;for(let _=0,M=f.length;_<M;_++)d[_]=[];for(let _=0,M=f.length;_<M;_++){let N=m[_];for(let R=0;R<N.length;R++){let P=N[R],F=!0;for(let K=0;K<f.length;K++)n(P.p,f[K].p)&&(_!==K&&S++,F?(F=!1,d[K].push(P)):u=!0);F&&d[_].push(P)}}S>0&&u===!1&&(m=d)}let p;for(let u=0,S=f.length;u<S;u++){c=f[u].s,l.push(c),p=m[u];for(let _=0,M=p.length;_<M;_++)c.holes.push(p[_].h)}return l}};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"169"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="169");var s0=Be,Kr=class i extends ji{constructor(t){super(t),this.defaultDPI=90,this.defaultUnit="px"}load(t,e,n,s){let r=this,a=new Gr(r.manager);a.setPath(r.path),a.setRequestHeader(r.requestHeader),a.setWithCredentials(r.withCredentials),a.load(t,function(o){try{e(r.parse(o))}catch(c){s?s(c):console.error(c),r.manager.itemError(t)}},n,s)}parse(t){let e=this;function n(D,L){if(D.nodeType!==1)return;let C=M(D),b=!1,Q=null;switch(D.nodeName){case"svg":L=y(D,L);break;case"style":r(D);break;case"g":L=y(D,L);break;case"path":L=y(D,L),D.hasAttribute("d")&&(Q=s(D));break;case"rect":L=y(D,L),Q=c(D);break;case"polygon":L=y(D,L),Q=l(D);break;case"polyline":L=y(D,L),Q=h(D);break;case"circle":L=y(D,L),Q=d(D);break;case"ellipse":L=y(D,L),Q=f(D);break;case"line":L=y(D,L),Q=m(D);break;case"defs":b=!0;break;case"use":L=y(D,L);let lt=(D.getAttributeNS("http://www.w3.org/1999/xlink","href")||"").substring(1),W=D.viewportElement.getElementById(lt);W?n(W,L):console.warn("SVGLoader: 'use node' references non-existent node id: "+lt);break;default:}Q&&(L.fill!==void 0&&L.fill!=="none"&&Q.color.setStyle(L.fill,s0),R(Q,_t),k.push(Q),Q.userData={node:D,style:L});let st=D.childNodes;for(let Z=0;Z<st.length;Z++){let lt=st[Z];b&&lt.nodeName!=="style"&&lt.nodeName!=="defs"||n(lt,L)}C&&(Y.pop(),Y.length>0?_t.copy(Y[Y.length-1]):_t.identity())}function s(D){let L=new gn,C=new ft,b=new ft,Q=new ft,st=!0,Z=!1,lt=D.getAttribute("d");if(lt===""||lt==="none")return null;let W=lt.match(/[a-df-z][^a-df-z]*/ig);for(let T=0,B=W.length;T<B;T++){let J=W[T],j=J.charAt(0),rt=J.slice(1).trim();st===!0&&(Z=!0,st=!1);let O;switch(j){case"M":O=p(rt);for(let I=0,A=O.length;I<A;I+=2)C.x=O[I+0],C.y=O[I+1],b.x=C.x,b.y=C.y,I===0?L.moveTo(C.x,C.y):L.lineTo(C.x,C.y),I===0&&Q.copy(C);break;case"H":O=p(rt);for(let I=0,A=O.length;I<A;I++)C.x=O[I],b.x=C.x,b.y=C.y,L.lineTo(C.x,C.y),I===0&&Z===!0&&Q.copy(C);break;case"V":O=p(rt);for(let I=0,A=O.length;I<A;I++)C.y=O[I],b.x=C.x,b.y=C.y,L.lineTo(C.x,C.y),I===0&&Z===!0&&Q.copy(C);break;case"L":O=p(rt);for(let I=0,A=O.length;I<A;I+=2)C.x=O[I+0],C.y=O[I+1],b.x=C.x,b.y=C.y,L.lineTo(C.x,C.y),I===0&&Z===!0&&Q.copy(C);break;case"C":O=p(rt);for(let I=0,A=O.length;I<A;I+=6)L.bezierCurveTo(O[I+0],O[I+1],O[I+2],O[I+3],O[I+4],O[I+5]),b.x=O[I+2],b.y=O[I+3],C.x=O[I+4],C.y=O[I+5],I===0&&Z===!0&&Q.copy(C);break;case"S":O=p(rt);for(let I=0,A=O.length;I<A;I+=4)L.bezierCurveTo(g(C.x,b.x),g(C.y,b.y),O[I+0],O[I+1],O[I+2],O[I+3]),b.x=O[I+0],b.y=O[I+1],C.x=O[I+2],C.y=O[I+3],I===0&&Z===!0&&Q.copy(C);break;case"Q":O=p(rt);for(let I=0,A=O.length;I<A;I+=4)L.quadraticCurveTo(O[I+0],O[I+1],O[I+2],O[I+3]),b.x=O[I+0],b.y=O[I+1],C.x=O[I+2],C.y=O[I+3],I===0&&Z===!0&&Q.copy(C);break;case"T":O=p(rt);for(let I=0,A=O.length;I<A;I+=2){let v=g(C.x,b.x),X=g(C.y,b.y);L.quadraticCurveTo(v,X,O[I+0],O[I+1]),b.x=v,b.y=X,C.x=O[I+0],C.y=O[I+1],I===0&&Z===!0&&Q.copy(C)}break;case"A":O=p(rt,[3,4],7);for(let I=0,A=O.length;I<A;I+=7){if(O[I+5]==C.x&&O[I+6]==C.y)continue;let v=C.clone();C.x=O[I+5],C.y=O[I+6],b.x=C.x,b.y=C.y,a(L,O[I],O[I+1],O[I+2],O[I+3],O[I+4],v,C),I===0&&Z===!0&&Q.copy(C)}break;case"m":O=p(rt);for(let I=0,A=O.length;I<A;I+=2)C.x+=O[I+0],C.y+=O[I+1],b.x=C.x,b.y=C.y,I===0?L.moveTo(C.x,C.y):L.lineTo(C.x,C.y),I===0&&Q.copy(C);break;case"h":O=p(rt);for(let I=0,A=O.length;I<A;I++)C.x+=O[I],b.x=C.x,b.y=C.y,L.lineTo(C.x,C.y),I===0&&Z===!0&&Q.copy(C);break;case"v":O=p(rt);for(let I=0,A=O.length;I<A;I++)C.y+=O[I],b.x=C.x,b.y=C.y,L.lineTo(C.x,C.y),I===0&&Z===!0&&Q.copy(C);break;case"l":O=p(rt);for(let I=0,A=O.length;I<A;I+=2)C.x+=O[I+0],C.y+=O[I+1],b.x=C.x,b.y=C.y,L.lineTo(C.x,C.y),I===0&&Z===!0&&Q.copy(C);break;case"c":O=p(rt);for(let I=0,A=O.length;I<A;I+=6)L.bezierCurveTo(C.x+O[I+0],C.y+O[I+1],C.x+O[I+2],C.y+O[I+3],C.x+O[I+4],C.y+O[I+5]),b.x=C.x+O[I+2],b.y=C.y+O[I+3],C.x+=O[I+4],C.y+=O[I+5],I===0&&Z===!0&&Q.copy(C);break;case"s":O=p(rt);for(let I=0,A=O.length;I<A;I+=4)L.bezierCurveTo(g(C.x,b.x),g(C.y,b.y),C.x+O[I+0],C.y+O[I+1],C.x+O[I+2],C.y+O[I+3]),b.x=C.x+O[I+0],b.y=C.y+O[I+1],C.x+=O[I+2],C.y+=O[I+3],I===0&&Z===!0&&Q.copy(C);break;case"q":O=p(rt);for(let I=0,A=O.length;I<A;I+=4)L.quadraticCurveTo(C.x+O[I+0],C.y+O[I+1],C.x+O[I+2],C.y+O[I+3]),b.x=C.x+O[I+0],b.y=C.y+O[I+1],C.x+=O[I+2],C.y+=O[I+3],I===0&&Z===!0&&Q.copy(C);break;case"t":O=p(rt);for(let I=0,A=O.length;I<A;I+=2){let v=g(C.x,b.x),X=g(C.y,b.y);L.quadraticCurveTo(v,X,C.x+O[I+0],C.y+O[I+1]),b.x=v,b.y=X,C.x=C.x+O[I+0],C.y=C.y+O[I+1],I===0&&Z===!0&&Q.copy(C)}break;case"a":O=p(rt,[3,4],7);for(let I=0,A=O.length;I<A;I+=7){if(O[I+5]==0&&O[I+6]==0)continue;let v=C.clone();C.x+=O[I+5],C.y+=O[I+6],b.x=C.x,b.y=C.y,a(L,O[I],O[I+1],O[I+2],O[I+3],O[I+4],v,C),I===0&&Z===!0&&Q.copy(C)}break;case"Z":case"z":L.currentPath.autoClose=!0,L.currentPath.curves.length>0&&(C.copy(Q),L.currentPath.currentPoint.copy(C),st=!0);break;default:console.warn(J)}Z=!1}return L}function r(D){if(!(!D.sheet||!D.sheet.cssRules||!D.sheet.cssRules.length))for(let L=0;L<D.sheet.cssRules.length;L++){let C=D.sheet.cssRules[L];if(C.type!==1)continue;let b=C.selectorText.split(/,/gm).filter(Boolean).map(Q=>Q.trim());for(let Q=0;Q<b.length;Q++){let st=Object.fromEntries(Object.entries(C.style).filter(([,Z])=>Z!==""));$[b[Q]]=Object.assign($[b[Q]]||{},st)}}}function a(D,L,C,b,Q,st,Z,lt){if(L==0||C==0){D.lineTo(lt.x,lt.y);return}b=b*Math.PI/180,L=Math.abs(L),C=Math.abs(C);let W=(Z.x-lt.x)/2,T=(Z.y-lt.y)/2,B=Math.cos(b)*W+Math.sin(b)*T,J=-Math.sin(b)*W+Math.cos(b)*T,j=L*L,rt=C*C,O=B*B,I=J*J,A=O/j+I/rt;if(A>1){let gt=Math.sqrt(A);L=gt*L,C=gt*C,j=L*L,rt=C*C}let v=j*I+rt*O,X=(j*rt-v)/v,at=Math.sqrt(Math.max(0,X));Q===st&&(at=-at);let ut=at*L*J/C,ht=-at*C*B/L,It=Math.cos(b)*ut-Math.sin(b)*ht+(Z.x+lt.x)/2,vt=Math.sin(b)*ut+Math.cos(b)*ht+(Z.y+lt.y)/2,Mt=o(1,0,(B-ut)/L,(J-ht)/C),Ht=o((B-ut)/L,(J-ht)/C,(-B-ut)/L,(-J-ht)/C)%(Math.PI*2);D.currentPath.absellipse(It,vt,L,C,Mt,Mt+Ht,st===0,b)}function o(D,L,C,b){let Q=D*C+L*b,st=Math.sqrt(D*D+L*L)*Math.sqrt(C*C+b*b),Z=Math.acos(Math.max(-1,Math.min(1,Q/st)));return D*b-L*C<0&&(Z=-Z),Z}function c(D){let L=_(D.getAttribute("x")||0),C=_(D.getAttribute("y")||0),b=_(D.getAttribute("rx")||D.getAttribute("ry")||0),Q=_(D.getAttribute("ry")||D.getAttribute("rx")||0),st=_(D.getAttribute("width")),Z=_(D.getAttribute("height")),lt=1-.551915024494,W=new gn;return W.moveTo(L+b,C),W.lineTo(L+st-b,C),(b!==0||Q!==0)&&W.bezierCurveTo(L+st-b*lt,C,L+st,C+Q*lt,L+st,C+Q),W.lineTo(L+st,C+Z-Q),(b!==0||Q!==0)&&W.bezierCurveTo(L+st,C+Z-Q*lt,L+st-b*lt,C+Z,L+st-b,C+Z),W.lineTo(L+b,C+Z),(b!==0||Q!==0)&&W.bezierCurveTo(L+b*lt,C+Z,L,C+Z-Q*lt,L,C+Z-Q),W.lineTo(L,C+Q),(b!==0||Q!==0)&&W.bezierCurveTo(L,C+Q*lt,L+b*lt,C,L+b,C),W}function l(D){function L(st,Z,lt){let W=_(Z),T=_(lt);Q===0?b.moveTo(W,T):b.lineTo(W,T),Q++}let C=/([+-]?\d*\.?\d+(?:e[+-]?\d+)?)(?:,|\s)([+-]?\d*\.?\d+(?:e[+-]?\d+)?)/g,b=new gn,Q=0;return D.getAttribute("points").replace(C,L),b.currentPath.autoClose=!0,b}function h(D){function L(st,Z,lt){let W=_(Z),T=_(lt);Q===0?b.moveTo(W,T):b.lineTo(W,T),Q++}let C=/([+-]?\d*\.?\d+(?:e[+-]?\d+)?)(?:,|\s)([+-]?\d*\.?\d+(?:e[+-]?\d+)?)/g,b=new gn,Q=0;return D.getAttribute("points").replace(C,L),b.currentPath.autoClose=!1,b}function d(D){let L=_(D.getAttribute("cx")||0),C=_(D.getAttribute("cy")||0),b=_(D.getAttribute("r")||0),Q=new Un;Q.absarc(L,C,b,0,Math.PI*2);let st=new gn;return st.subPaths.push(Q),st}function f(D){let L=_(D.getAttribute("cx")||0),C=_(D.getAttribute("cy")||0),b=_(D.getAttribute("rx")||0),Q=_(D.getAttribute("ry")||0),st=new Un;st.absellipse(L,C,b,Q,0,Math.PI*2);let Z=new gn;return Z.subPaths.push(st),Z}function m(D){let L=_(D.getAttribute("x1")||0),C=_(D.getAttribute("y1")||0),b=_(D.getAttribute("x2")||0),Q=_(D.getAttribute("y2")||0),st=new gn;return st.moveTo(L,C),st.lineTo(b,Q),st.currentPath.autoClose=!1,st}function y(D,L){L=Object.assign({},L);let C={};if(D.hasAttribute("class")){let Z=D.getAttribute("class").split(/\s/).filter(Boolean).map(lt=>lt.trim());for(let lt=0;lt<Z.length;lt++)C=Object.assign(C,$["."+Z[lt]])}D.hasAttribute("id")&&(C=Object.assign(C,$["#"+D.getAttribute("id")]));function b(Z,lt,W){W===void 0&&(W=function(B){return B.startsWith("url")&&console.warn("SVGLoader: url access in attributes is not implemented."),B}),D.hasAttribute(Z)&&(L[lt]=W(D.getAttribute(Z))),C[Z]&&(L[lt]=W(C[Z])),D.style&&D.style[Z]!==""&&(L[lt]=W(D.style[Z]))}function Q(Z){return Math.max(0,Math.min(1,_(Z)))}function st(Z){return Math.max(0,_(Z))}return b("fill","fill"),b("fill-opacity","fillOpacity",Q),b("fill-rule","fillRule"),b("opacity","opacity",Q),b("stroke","stroke"),b("stroke-opacity","strokeOpacity",Q),b("stroke-width","strokeWidth",st),b("stroke-linejoin","strokeLineJoin"),b("stroke-linecap","strokeLineCap"),b("stroke-miterlimit","strokeMiterLimit",st),b("visibility","visibility"),L}function g(D,L){return D-(L-D)}function p(D,L,C){if(typeof D!="string")throw new TypeError("Invalid input: "+typeof D);let b={SEPARATOR:/[ \t\r\n\,.\-+]/,WHITESPACE:/[ \t\r\n]/,DIGIT:/[\d]/,SIGN:/[-+]/,POINT:/\./,COMMA:/,/,EXP:/e/i,FLAGS:/[01]/},Q=0,st=1,Z=2,lt=3,W=Q,T=!0,B="",J="",j=[];function rt(v,X,at){let ut=new SyntaxError('Unexpected character "'+v+'" at index '+X+".");throw ut.partial=at,ut}function O(){B!==""&&(J===""?j.push(Number(B)):j.push(Number(B)*Math.pow(10,Number(J)))),B="",J=""}let I,A=D.length;for(let v=0;v<A;v++){if(I=D[v],Array.isArray(L)&&L.includes(j.length%C)&&b.FLAGS.test(I)){W=st,B=I,O();continue}if(W===Q){if(b.WHITESPACE.test(I))continue;if(b.DIGIT.test(I)||b.SIGN.test(I)){W=st,B=I;continue}if(b.POINT.test(I)){W=Z,B=I;continue}b.COMMA.test(I)&&(T&&rt(I,v,j),T=!0)}if(W===st){if(b.DIGIT.test(I)){B+=I;continue}if(b.POINT.test(I)){B+=I,W=Z;continue}if(b.EXP.test(I)){W=lt;continue}b.SIGN.test(I)&&B.length===1&&b.SIGN.test(B[0])&&rt(I,v,j)}if(W===Z){if(b.DIGIT.test(I)){B+=I;continue}if(b.EXP.test(I)){W=lt;continue}b.POINT.test(I)&&B[B.length-1]==="."&&rt(I,v,j)}if(W===lt){if(b.DIGIT.test(I)){J+=I;continue}if(b.SIGN.test(I)){if(J===""){J+=I;continue}J.length===1&&b.SIGN.test(J)&&rt(I,v,j)}}b.WHITESPACE.test(I)?(O(),W=Q,T=!1):b.COMMA.test(I)?(O(),W=Q,T=!0):b.SIGN.test(I)?(O(),W=st,B=I):b.POINT.test(I)?(O(),W=Z,B=I):rt(I,v,j)}return O(),j}let u=["mm","cm","in","pt","pc","px"],S={mm:{mm:1,cm:.1,in:1/25.4,pt:72/25.4,pc:6/25.4,px:-1},cm:{mm:10,cm:1,in:1/2.54,pt:72/2.54,pc:6/2.54,px:-1},in:{mm:25.4,cm:2.54,in:1,pt:72,pc:6,px:-1},pt:{mm:25.4/72,cm:2.54/72,in:1/72,pt:1,pc:6/72,px:-1},pc:{mm:25.4/6,cm:2.54/6,in:1/6,pt:72/6,pc:1,px:-1},px:{px:1}};function _(D){let L="px";if(typeof D=="string"||D instanceof String)for(let b=0,Q=u.length;b<Q;b++){let st=u[b];if(D.endsWith(st)){L=st,D=D.substring(0,D.length-st.length);break}}let C;return L==="px"&&e.defaultUnit!=="px"?C=S.in[e.defaultUnit]/e.defaultDPI:(C=S[L][e.defaultUnit],C<0&&(C=S[L].in*e.defaultDPI)),C*parseFloat(D)}function M(D){if(!(D.hasAttribute("transform")||D.nodeName==="use"&&(D.hasAttribute("x")||D.hasAttribute("y"))))return null;let L=N(D);return Y.length>0&&L.premultiply(Y[Y.length-1]),_t.copy(L),Y.push(L),L}function N(D){let L=new Gt,C=ct;if(D.nodeName==="use"&&(D.hasAttribute("x")||D.hasAttribute("y"))){let b=_(D.getAttribute("x")),Q=_(D.getAttribute("y"));L.translate(b,Q)}if(D.hasAttribute("transform")){let b=D.getAttribute("transform").split(")");for(let Q=b.length-1;Q>=0;Q--){let st=b[Q].trim();if(st==="")continue;let Z=st.indexOf("("),lt=st.length;if(Z>0&&Z<lt){let W=st.slice(0,Z),T=p(st.slice(Z+1));switch(C.identity(),W){case"translate":if(T.length>=1){let B=T[0],J=0;T.length>=2&&(J=T[1]),C.translate(B,J)}break;case"rotate":if(T.length>=1){let B=0,J=0,j=0;B=T[0]*Math.PI/180,T.length>=3&&(J=T[1],j=T[2]),q.makeTranslation(-J,-j),it.makeRotation(B),U.multiplyMatrices(it,q),q.makeTranslation(J,j),C.multiplyMatrices(q,U)}break;case"scale":if(T.length>=1){let B=T[0],J=B;T.length>=2&&(J=T[1]),C.scale(B,J)}break;case"skewX":T.length===1&&C.set(1,Math.tan(T[0]*Math.PI/180),0,0,1,0,0,0,1);break;case"skewY":T.length===1&&C.set(1,0,0,Math.tan(T[0]*Math.PI/180),1,0,0,0,1);break;case"matrix":T.length===6&&C.set(T[0],T[2],T[4],T[1],T[3],T[5],0,0,1);break}}L.premultiply(C)}}return L}function R(D,L){function C(Z){dt.set(Z.x,Z.y,1).applyMatrix3(L),Z.set(dt.x,dt.y)}function b(Z){let lt=Z.xRadius,W=Z.yRadius,T=Math.cos(Z.aRotation),B=Math.sin(Z.aRotation),J=new G(lt*T,lt*B,0),j=new G(-W*B,W*T,0),rt=J.applyMatrix3(L),O=j.applyMatrix3(L),I=ct.set(rt.x,O.x,0,rt.y,O.y,0,0,0,1),A=q.copy(I).invert(),at=it.copy(A).transpose().multiply(A).elements,ut=w(at[0],at[1],at[4]),ht=Math.sqrt(ut.rt1),It=Math.sqrt(ut.rt2);if(Z.xRadius=1/ht,Z.yRadius=1/It,Z.aRotation=Math.atan2(ut.sn,ut.cs),!((Z.aEndAngle-Z.aStartAngle)%(2*Math.PI)<Number.EPSILON)){let Mt=q.set(ht,0,0,0,It,0,0,0,1),Ht=it.set(ut.cs,ut.sn,0,-ut.sn,ut.cs,0,0,0,1),gt=Mt.multiply(Ht).multiply(I),bt=Dt=>{let{x:kt,y:wt}=new G(Math.cos(Dt),Math.sin(Dt),0).applyMatrix3(gt);return Math.atan2(wt,kt)};Z.aStartAngle=bt(Z.aStartAngle),Z.aEndAngle=bt(Z.aEndAngle),P(L)&&(Z.aClockwise=!Z.aClockwise)}}function Q(Z){let lt=K(L),W=x(L);Z.xRadius*=lt,Z.yRadius*=W;let T=lt>Number.EPSILON?Math.atan2(L.elements[1],L.elements[0]):Math.atan2(-L.elements[3],L.elements[4]);Z.aRotation+=T,P(L)&&(Z.aStartAngle*=-1,Z.aEndAngle*=-1,Z.aClockwise=!Z.aClockwise)}let st=D.subPaths;for(let Z=0,lt=st.length;Z<lt;Z++){let T=st[Z].curves;for(let B=0;B<T.length;B++){let J=T[B];J.isLineCurve?(C(J.v1),C(J.v2)):J.isCubicBezierCurve?(C(J.v0),C(J.v1),C(J.v2),C(J.v3)):J.isQuadraticBezierCurve?(C(J.v0),C(J.v1),C(J.v2)):J.isEllipseCurve&&(pt.set(J.aX,J.aY),C(pt),J.aX=pt.x,J.aY=pt.y,F(L)?b(J):Q(J))}}}function P(D){let L=D.elements;return L[0]*L[4]-L[1]*L[3]<0}function F(D){let L=D.elements,C=L[0]*L[3]+L[1]*L[4];if(C===0)return!1;let b=K(D),Q=x(D);return Math.abs(C/(b*Q))>Number.EPSILON}function K(D){let L=D.elements;return Math.sqrt(L[0]*L[0]+L[1]*L[1])}function x(D){let L=D.elements;return Math.sqrt(L[3]*L[3]+L[4]*L[4])}function w(D,L,C){let b,Q,st,Z,lt,W=D+C,T=D-C,B=Math.sqrt(T*T+4*L*L);return W>0?(b=.5*(W+B),lt=1/b,Q=D*lt*C-L*lt*L):W<0?Q=.5*(W-B):(b=.5*B,Q=-.5*B),T>0?st=T+B:st=T-B,Math.abs(st)>2*Math.abs(L)?(lt=-2*L/st,Z=1/Math.sqrt(1+lt*lt),st=lt*Z):Math.abs(L)===0?(st=1,Z=0):(lt=-.5*st/L,st=1/Math.sqrt(1+lt*lt),Z=lt*st),T>0&&(lt=st,st=-Z,Z=lt),{rt1:b,rt2:Q,cs:st,sn:Z}}let k=[],$={},Y=[],ct=new Gt,q=new Gt,it=new Gt,U=new Gt,pt=new ft,dt=new G,_t=new Gt,Pt=new DOMParser().parseFromString(t,"image/svg+xml");return n(Pt.documentElement,{fill:"#000",fillOpacity:1,strokeOpacity:1,strokeWidth:1,strokeLineJoin:"miter",strokeLineCap:"butt",strokeMiterLimit:4}),{paths:k,xml:Pt.documentElement}}static createShapes(t){let n={ORIGIN:0,DESTINATION:1,BETWEEN:2,LEFT:3,RIGHT:4,BEHIND:5,BEYOND:6},s={loc:n.ORIGIN,t:0};function r(g,p,u,S){let _=g.x,M=p.x,N=u.x,R=S.x,P=g.y,F=p.y,K=u.y,x=S.y,w=(R-N)*(P-K)-(x-K)*(_-N),k=(M-_)*(P-K)-(F-P)*(_-N),$=(x-K)*(M-_)-(R-N)*(F-P),Y=w/$,ct=k/$;if($===0&&w!==0||Y<=0||Y>=1||ct<0||ct>1)return null;if(w===0&&$===0){for(let q=0;q<2;q++)if(a(q===0?u:S,g,p),s.loc==n.ORIGIN){let it=q===0?u:S;return{x:it.x,y:it.y,t:s.t}}else if(s.loc==n.BETWEEN){let it=+(_+s.t*(M-_)).toPrecision(10),U=+(P+s.t*(F-P)).toPrecision(10);return{x:it,y:U,t:s.t}}return null}else{for(let U=0;U<2;U++)if(a(U===0?u:S,g,p),s.loc==n.ORIGIN){let pt=U===0?u:S;return{x:pt.x,y:pt.y,t:s.t}}let q=+(_+Y*(M-_)).toPrecision(10),it=+(P+Y*(F-P)).toPrecision(10);return{x:q,y:it,t:Y}}}function a(g,p,u){let S=u.x-p.x,_=u.y-p.y,M=g.x-p.x,N=g.y-p.y,R=S*N-M*_;if(g.x===p.x&&g.y===p.y){s.loc=n.ORIGIN,s.t=0;return}if(g.x===u.x&&g.y===u.y){s.loc=n.DESTINATION,s.t=1;return}if(R<-Number.EPSILON){s.loc=n.LEFT;return}if(R>Number.EPSILON){s.loc=n.RIGHT;return}if(S*M<0||_*N<0){s.loc=n.BEHIND;return}if(Math.sqrt(S*S+_*_)<Math.sqrt(M*M+N*N)){s.loc=n.BEYOND;return}let P;S!==0?P=M/S:P=N/_,s.loc=n.BETWEEN,s.t=P}function o(g,p){let u=[],S=[];for(let _=1;_<g.length;_++){let M=g[_-1],N=g[_];for(let R=1;R<p.length;R++){let P=p[R-1],F=p[R],K=r(M,N,P,F);K!==null&&u.find(x=>x.t<=K.t+Number.EPSILON&&x.t>=K.t-Number.EPSILON)===void 0&&(u.push(K),S.push(new ft(K.x,K.y)))}}return S}function c(g,p,u){let S=new ft;p.getCenter(S);let _=[];return u.forEach(M=>{M.boundingBox.containsPoint(S)&&o(g,M.points).forEach(R=>{_.push({identifier:M.identifier,isCW:M.isCW,point:R})})}),_.sort((M,N)=>M.point.x-N.point.x),_}function l(g,p,u,S,_){(_==null||_==="")&&(_="nonzero");let M=new ft;g.boundingBox.getCenter(M);let N=[new ft(u,M.y),new ft(S,M.y)],R=c(N,g.boundingBox,p);R.sort((k,$)=>k.point.x-$.point.x);let P=[],F=[];R.forEach(k=>{k.identifier===g.identifier?P.push(k):F.push(k)});let K=P[0].point.x,x=[],w=0;for(;w<F.length&&F[w].point.x<K;)x.length>0&&x[x.length-1]===F[w].identifier?x.pop():x.push(F[w].identifier),w++;if(x.push(g.identifier),_==="evenodd"){let k=x.length%2===0,$=x[x.length-2];return{identifier:g.identifier,isHole:k,for:$}}else if(_==="nonzero"){let k=!0,$=null,Y=null;for(let ct=0;ct<x.length;ct++){let q=x[ct];k?(Y=p[q].isCW,k=!1,$=q):Y!==p[q].isCW&&(Y=p[q].isCW,k=!0)}return{identifier:g.identifier,isHole:k,for:$}}else console.warn('fill-rule: "'+_+'" is currently not implemented.')}let h=999999999,d=-999999999,f=t.subPaths.map(g=>{let p=g.getPoints(),u=-999999999,S=999999999,_=-999999999,M=999999999;for(let N=0;N<p.length;N++){let R=p[N];R.y>u&&(u=R.y),R.y<S&&(S=R.y),R.x>_&&(_=R.x),R.x<M&&(M=R.x)}return d<=_&&(d=_+1),h>=M&&(h=M-1),{curves:g.curves,points:p,isCW:Jn.isClockWise(p),identifier:-1,boundingBox:new ts(new ft(M,S),new ft(_,u))}});f=f.filter(g=>g.points.length>1);for(let g=0;g<f.length;g++)f[g].identifier=g;let m=f.map(g=>l(g,f,h,d,t.userData?t.userData.style.fillRule:void 0)),y=[];return f.forEach(g=>{if(!m[g.identifier].isHole){let u=new Zn;u.curves=g.curves,m.filter(_=>_.isHole&&_.for===g.identifier).forEach(_=>{let M=f[_.identifier],N=new Un;N.curves=M.curves,u.holes.push(N)}),y.push(u)}}),y}static getStrokeStyle(t,e,n,s,r){return t=t!==void 0?t:1,e=e!==void 0?e:"#000",n=n!==void 0?n:"miter",s=s!==void 0?s:"butt",r=r!==void 0?r:4,{strokeColor:e,strokeWidth:t,strokeLineJoin:n,strokeLineCap:s,strokeMiterLimit:r}}static pointsToStroke(t,e,n,s){let r=[],a=[],o=[];if(i.pointsToStrokeWithBuffers(t,e,n,s,r,a,o)===0)return null;let c=new Fe;return c.setAttribute("position",new ue(r,3)),c.setAttribute("normal",new ue(a,3)),c.setAttribute("uv",new ue(o,2)),c}static pointsToStrokeWithBuffers(t,e,n,s,r,a,o,c){let l=new ft,h=new ft,d=new ft,f=new ft,m=new ft,y=new ft,g=new ft,p=new ft,u=new ft,S=new ft,_=new ft,M=new ft,N=new ft,R=new ft,P=new ft,F=new ft,K=new ft;n=n!==void 0?n:12,s=s!==void 0?s:.001,c=c!==void 0?c:0,t=T(t);let x=t.length;if(x<2)return 0;let w=t[0].equals(t[x-1]),k,$=t[0],Y,ct=e.strokeWidth/2,q=1/(x-1),it=0,U,pt,dt,_t,Pt=!1,Ot=0,D=c*3,L=c*2;C(t[0],t[1],l).multiplyScalar(ct),p.copy(t[0]).sub(l),u.copy(t[0]).add(l),S.copy(p),_.copy(u);for(let B=1;B<x;B++){k=t[B],B===x-1?w?Y=t[1]:Y=void 0:Y=t[B+1];let J=l;if(C($,k,J),d.copy(J).multiplyScalar(ct),M.copy(k).sub(d),N.copy(k).add(d),U=it+q,pt=!1,Y!==void 0){C(k,Y,h),d.copy(h).multiplyScalar(ct),R.copy(k).sub(d),P.copy(k).add(d),dt=!0,d.subVectors(Y,$),J.dot(d)<0&&(dt=!1),B===1&&(Pt=dt),d.subVectors(Y,k),d.normalize();let j=Math.abs(J.dot(d));if(j>Number.EPSILON){let rt=ct/j;d.multiplyScalar(-rt),f.subVectors(k,$),m.copy(f).setLength(rt).add(d),F.copy(m).negate();let O=m.length(),I=f.length();f.divideScalar(I),y.subVectors(Y,k);let A=y.length();switch(y.divideScalar(A),f.dot(F)<I&&y.dot(F)<A&&(pt=!0),K.copy(m).add(k),F.add(k),_t=!1,pt?dt?(P.copy(F),N.copy(F)):(R.copy(F),M.copy(F)):st(),e.strokeLineJoin){case"bevel":Z(dt,pt,U);break;case"round":lt(dt,pt),dt?Q(k,M,R,U,0):Q(k,P,N,U,1);break;default:let v=ct*e.strokeMiterLimit/O;if(v<1)if(e.strokeLineJoin!=="miter-clip"){Z(dt,pt,U);break}else lt(dt,pt),dt?(y.subVectors(K,M).multiplyScalar(v).add(M),g.subVectors(K,R).multiplyScalar(v).add(R),b(M,U,0),b(y,U,0),b(k,U,.5),b(k,U,.5),b(y,U,0),b(g,U,0),b(k,U,.5),b(g,U,0),b(R,U,0)):(y.subVectors(K,N).multiplyScalar(v).add(N),g.subVectors(K,P).multiplyScalar(v).add(P),b(N,U,1),b(y,U,1),b(k,U,.5),b(k,U,.5),b(y,U,1),b(g,U,1),b(k,U,.5),b(g,U,1),b(P,U,1));else pt?(dt?(b(u,it,1),b(p,it,0),b(K,U,0),b(u,it,1),b(K,U,0),b(F,U,1)):(b(u,it,1),b(p,it,0),b(K,U,1),b(p,it,0),b(F,U,0),b(K,U,1)),dt?R.copy(K):P.copy(K)):dt?(b(M,U,0),b(K,U,0),b(k,U,.5),b(k,U,.5),b(K,U,0),b(R,U,0)):(b(N,U,1),b(K,U,1),b(k,U,.5),b(k,U,.5),b(K,U,1),b(P,U,1)),_t=!0;break}}else st()}else st();!w&&B===x-1&&W(t[0],S,_,dt,!0,it),it=U,$=k,p.copy(R),u.copy(P)}if(!w)W(k,M,N,dt,!1,U);else if(pt&&r){let B=K,J=F;Pt!==dt&&(B=F,J=K),dt?(_t||Pt)&&(J.toArray(r,0),J.toArray(r,9),_t&&B.toArray(r,3)):(_t||!Pt)&&(J.toArray(r,3),J.toArray(r,9),_t&&B.toArray(r,0))}return Ot;function C(B,J,j){return j.subVectors(J,B),j.set(-j.y,j.x).normalize()}function b(B,J,j){r&&(r[D]=B.x,r[D+1]=B.y,r[D+2]=0,a&&(a[D]=0,a[D+1]=0,a[D+2]=1),D+=3,o&&(o[L]=J,o[L+1]=j,L+=2)),Ot+=3}function Q(B,J,j,rt,O){l.copy(J).sub(B).normalize(),h.copy(j).sub(B).normalize();let I=Math.PI,A=l.dot(h);Math.abs(A)<1&&(I=Math.abs(Math.acos(A))),I/=n,d.copy(J);for(let v=0,X=n-1;v<X;v++)f.copy(d).rotateAround(B,I),b(d,rt,O),b(f,rt,O),b(B,rt,.5),d.copy(f);b(f,rt,O),b(j,rt,O),b(B,rt,.5)}function st(){b(u,it,1),b(p,it,0),b(M,U,0),b(u,it,1),b(M,U,0),b(N,U,1)}function Z(B,J,j){J?B?(b(u,it,1),b(p,it,0),b(M,U,0),b(u,it,1),b(M,U,0),b(F,U,1),b(M,j,0),b(R,j,0),b(F,j,.5)):(b(u,it,1),b(p,it,0),b(N,U,1),b(p,it,0),b(F,U,0),b(N,U,1),b(N,j,1),b(F,j,0),b(P,j,1)):B?(b(M,j,0),b(R,j,0),b(k,j,.5)):(b(N,j,1),b(P,j,0),b(k,j,.5))}function lt(B,J){J&&(B?(b(u,it,1),b(p,it,0),b(M,U,0),b(u,it,1),b(M,U,0),b(F,U,1),b(M,it,0),b(k,U,.5),b(F,U,1),b(k,U,.5),b(R,it,0),b(F,U,1)):(b(u,it,1),b(p,it,0),b(N,U,1),b(p,it,0),b(F,U,0),b(N,U,1),b(N,it,1),b(F,U,0),b(k,U,.5),b(k,U,.5),b(F,U,0),b(P,it,1)))}function W(B,J,j,rt,O,I){switch(e.strokeLineCap){case"round":O?Q(B,j,J,I,.5):Q(B,J,j,I,.5);break;case"square":if(O)l.subVectors(J,B),h.set(l.y,-l.x),d.addVectors(l,h).add(B),f.subVectors(h,l).add(B),rt?(d.toArray(r,3),f.toArray(r,0),f.toArray(r,9)):(d.toArray(r,3),o[7]===1?f.toArray(r,9):d.toArray(r,9),f.toArray(r,0));else{l.subVectors(j,B),h.set(l.y,-l.x),d.addVectors(l,h).add(B),f.subVectors(h,l).add(B);let A=r.length;rt?(d.toArray(r,A-3),f.toArray(r,A-6),f.toArray(r,A-12)):(f.toArray(r,A-6),d.toArray(r,A-3),f.toArray(r,A-12))}break;default:break}}function T(B){let J=!1;for(let rt=1,O=B.length-1;rt<O;rt++)if(B[rt].distanceTo(B[rt+1])<s){J=!0;break}if(!J)return B;let j=[];j.push(B[0]);for(let rt=1,O=B.length-1;rt<O;rt++)B[rt].distanceTo(B[rt+1])>=s&&j.push(B[rt]);return j.push(B[B.length-1]),j}}};function vc(i){let t=new Ki,e=new zr(10,24,16),n=new ke({side:Me,toneMapped:!1,vertexShader:`
      varying vec3 vDirection;
      void main() {
        vDirection = position;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,fragmentShader:`
      varying vec3 vDirection;
      void main() {
        vec3 direction = normalize(vDirection);
        // A wide softbox meets a dark flag across the front faces. The
        // slightly slanted transition also reaches the outer letters.
        float height = direction.y + direction.x * 0.045;
        float front = smoothstep(0.35, 0.90, direction.z);
        float softbox = smoothstep(0.098, 0.132, height);
        float stripe = 1.0 - smoothstep(0.008, 0.034, abs(height - 0.151));
        vec3 face = mix(vec3(0.12, 0.15, 0.20), vec3(0.68, 0.75, 0.84), softbox);
        face += vec3(stripe * 0.26);
        vec3 fill = mix(vec3(0.12, 0.16, 0.22), vec3(0.77, 0.83, 0.92),
          smoothstep(-0.35, 0.64, direction.y));
        gl_FragColor = vec4(mix(fill, face, front), 1.0);
      }
    `});t.add(new Ne(e,n));let s=new $i(i);try{return s.fromScene(t,.012)}finally{s.dispose(),n.dispose(),e.dispose()}}var r0={BackSide:Me,Box2:ts,Box3:Dn,BufferAttribute:ze,BufferGeometry:Fe,Camera:Ji,Color:Xt,DirectionalLight:Xr,DynamicDrawUsage:nh,Euler:Qe,ExtrudeGeometry:Or,Float32BufferAttribute:ue,FrontSide:pn,Group:qn,HalfFloatType:gi,HemisphereLight:Wr,IcosahedronGeometry:Br,LinearFilter:qe,LinearSRGBColorSpace:_n,MathUtils:ih,Mesh:Ne,MeshPhysicalMaterial:kr,NoBlending:dn,NoToneMapping:fn,NormalBlending:Yn,PerspectiveCamera:Ue,Points:Lr,Quaternion:mn,RGBAFormat:Ye,Raycaster:qr,SRGBColorSpace:Be,Scene:Ki,ShaderMaterial:ke,Sphere:Kn,Triangle:Rn,Vector2:ft,Vector3:G,WebGLRenderTarget:an,WebGLRenderer:Ir};(()=>{"use strict";if(window.__largoWordPressV5)return;window.__largoWordPressV5=!0;let i=new Set,t=0;function e(){for(let r of i)r.isConnected||(r.dispatchEvent(new Event("largo:destroy")),i.delete(r));document.querySelectorAll(".largo-glass3d").forEach(r=>{let a=r.closest(".hero-slide")?.querySelector(".hero-actions a"),o=(document.documentElement.lang||"en").toLowerCase().split("-")[0];a&&["en","lv","ru"].includes(o)&&(a.setAttribute("href","/"+o+"/projects/"),a.setAttribute("data-wtw-full-navigation",""),a.setAttribute("data-wtw-no-transition","")),!i.has(r)&&(i.add(r),s(r,++t).catch(c=>{r.dataset.state="fallback",console.warn("LARGO: initialization failed.",c)}))})}function n(){e(),new MutationObserver(e).observe(document.body,{childList:!0,subtree:!0})}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",n,{once:!0}):n();async function s(r,a){r.dataset.state="loading",r.dataset.layout="container",r.innerHTML='<div class="largo-fallback" aria-hidden="true"></div><canvas class="largo-scene" tabindex="0" aria-label="LARGO. Drag horizontally to rotate. Arrow keys rotate, Home resets."></canvas>';let o=r.getBoundingClientRect();r.dataset.mobile=String(o.width<768||o.width/Math.max(o.height,1)<1);let c=r.querySelector(".largo-scene"),l=r.querySelector(".largo-fallback"),h=`<svg width="235" height="41" viewBox="0 0 235 41" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_144_309)">
<path fill-rule="evenodd" clip-rule="evenodd" d="M222.994 2.02701C225.395 3.14659 227.636 4.58605 229.397 6.34538C231.318 8.10472 232.759 10.3439 233.559 12.583C234.52 14.9821 235 17.5412 235 20.4201C235 23.1391 234.36 25.6981 233.399 28.0972C232.279 30.4963 230.838 32.7354 229.077 34.4948C227.156 36.2541 225.075 37.6936 222.514 38.8132C219.952 39.9327 217.231 40.4126 214.189 40.4126C211.308 40.4126 208.587 39.9327 206.025 38.8132C203.624 37.6936 201.383 36.2541 199.622 34.4948C197.861 32.7354 196.42 30.6562 195.46 28.2571C194.499 25.858 194.019 23.299 194.019 20.4201C194.019 17.7011 194.659 15.1421 195.62 12.743C196.74 10.3439 198.181 8.10472 199.942 6.34538C201.863 4.58605 203.944 3.14659 206.505 2.02701C209.067 0.907432 211.788 0.427612 214.83 0.427612C217.711 0.427612 220.433 0.907432 222.994 2.02701ZM226.356 25.5382C226.996 24.0987 227.316 22.3394 227.316 20.58C227.316 18.8207 226.8365 16.98135 226.196 15.302C225.5555 13.62265 224.755 12.2632 223.634 11.1436C222.514 9.86406 221.233 8.90442 219.632 8.26466C216.591 6.8252 212.589 6.98514 209.547 8.26466C207.946 9.06436 206.666 10.024 205.545 11.1436C204.424 12.4231 203.624 13.7026 202.984 15.302C202.343 16.9014 202.023 18.5008 202.023 20.4201C202.023 22.1794 202.343 23.7788 202.984 25.3782C203.464 26.9776 204.424 28.4171 205.545 29.5367C206.666 30.8162 208.106 31.7758 209.547 32.4156C211.148 33.2153 212.749 33.5351 214.67 33.5351C216.591 33.5351 218.191 33.2153 219.792 32.5755C221.393 31.7758 222.674 30.8162 223.794 29.6966C224.915 28.4171 225.715 26.9776 226.356 25.5382ZM35.218 40.0926L52.3467 1.22726H61.1512L78.2799 40.0926H69.9557L65.9536 30.8161H47.5442L43.5422 40.0926H35.218ZM56.829 10.0239L50.4257 24.4185H63.2323L56.829 10.0239ZM71.2365 1.22726L88.3653 40.0926H96.6895L79.5608 1.22726H71.2365ZM89.1654 1.22726L106.294 40.0926H114.618L97.4896 1.22726H89.1654ZM7.68392 32.8953L7.844 1.3872H0V39.9327H27.6941L27.534 32.8953H7.68392ZM166.965 17.5411V23.9387H178.811L178.651 24.7384C178.571 24.8983 178.531 25.0582 178.491 25.218L178.491 25.2182L178.491 25.2184C178.451 25.3783 178.411 25.5382 178.331 25.698C177.691 27.2974 176.89 28.5769 175.77 29.8565C174.649 30.976 173.368 31.9357 171.768 32.7354C168.726 34.1748 164.564 34.0149 161.682 32.7354C160.242 32.0956 158.801 31.136 157.68 29.8565C156.56 28.7369 155.599 27.2974 155.119 25.698C154.479 24.0986 154.159 22.4992 154.159 20.7399C154.159 18.8206 154.479 17.2212 155.119 15.6218C155.759 14.0224 156.56 12.7429 157.68 11.4634C158.801 10.3438 160.082 9.38418 161.682 8.58448C164.724 7.30496 168.726 7.14502 171.768 8.58448C173.368 9.22424 174.649 10.1839 175.77 11.4634L176.57 12.2631L183.293 8.42454C182.813 7.78478 182.173 7.14502 181.533 6.50526C179.772 4.74592 177.53 3.30647 175.129 2.18689C172.568 1.06731 169.847 0.587489 166.965 0.587489C163.924 0.587489 161.202 1.06731 158.641 2.18689C156.08 3.30647 153.998 4.74592 152.077 6.50526C150.317 8.2646 148.876 10.5038 147.755 12.9029C146.795 15.3019 146.154 17.861 146.154 20.58C146.154 23.4589 146.635 26.0179 147.595 28.417C148.556 30.8161 149.996 32.8953 151.757 34.6547C153.518 36.414 155.759 37.8535 158.161 38.973C160.722 40.0926 163.443 40.5724 166.325 40.5724C169.366 40.5724 172.088 40.0926 174.649 38.973C177.21 37.8535 179.291 36.414 181.212 34.6547C182.973 32.8953 184.414 30.6562 185.535 28.2571C185.855 27.6173 186.015 26.9776 186.175 26.3378C186.815 24.4185 186.975 22.4992 186.975 20.58C186.975 19.6203 186.975 18.6607 186.815 17.5411H166.965ZM131.107 2.1869C132.868 2.82666 134.309 3.7863 135.589 4.90587C136.87 6.02545 137.83 7.46491 138.471 8.90437C139.111 10.5038 139.431 12.2631 139.431 14.3423C139.431 16.4215 139.111 18.5008 138.311 20.1002C137.51 21.6995 136.55 23.139 135.109 24.2586C133.668 25.3782 132.067 26.1779 130.146 26.8176C129.506 26.9776 128.866 27.1375 127.905 27.2974L127.105 27.4574L132.548 39.9327H124.223L115.899 21.2197H124.223H124.544C126.785 21.0598 128.385 20.42 129.666 19.3005C131.107 18.0209 131.747 16.4215 131.747 14.5023C131.747 12.423 131.107 10.6637 129.666 9.54413C128.225 8.58449 126.465 7.94473 124.063 7.94473H109.976L107.095 1.22726H124.864C127.265 1.22726 129.346 1.54714 131.107 2.1869Z" fill="white"/>
</g>
<defs>
<clipPath id="clip0_144_309">
<rect width="235" height="41" fill="white"/>
</clipPath>
</defs>
</svg>`,d=Object.freeze({logoWidthDesktop:.86,logoWidthMobile:.94,cubeWidthDesktop:.29,cubeWidthMobile:.45,cubeHeight:.44,logoDepth:.21,logoBevel:.017,chromeRoughness:.075,chromatic:.5,maxPixelRatio:2,idleY:.0035,idleX:.0012});{let g=new DOMParser().parseFromString(h,"image/svg+xml").documentElement,p="http://www.w3.org/2000/svg",u=g.querySelector("defs");u||(u=document.createElementNS(p,"defs"),g.prepend(u));let S=document.createElementNS(p,"linearGradient");S.id="largo-fallback-chrome-"+a,S.setAttribute("x1","0"),S.setAttribute("y1","0"),S.setAttribute("x2","0"),S.setAttribute("y2","1"),[["0%","#d8dee5"],["18%","#fafcff"],["45%","#68717c"],["49%","#2b3037"],["55%","#eef3f8"],["100%","#818b97"]].forEach(function(_){let M=document.createElementNS(p,"stop");M.setAttribute("offset",_[0]),M.setAttribute("stop-color",_[1]),S.append(M)}),u.append(S),g.querySelectorAll("path").forEach(function(_){_.setAttribute("fill","url(#"+S.id+")")}),g.querySelectorAll("[clip-path]").forEach(_=>_.removeAttribute("clip-path")),g.querySelectorAll("clipPath").forEach(_=>_.remove()),g.setAttribute("aria-hidden","true"),l.replaceChildren(document.importNode(g,!0))}try{if(!r.isConnected)return;f(r0,Kr)}catch(g){r.dataset.state="fallback",console.warn("LARGO: 3D unavailable; the embedded SVG is displayed.",g)}function f(g,p){let u=new g.WebGLRenderer({canvas:c,antialias:!0,alpha:!0,premultipliedAlpha:!0,powerPreference:"high-performance"});u.setClearColor(0,0),u.outputColorSpace=g.SRGBColorSpace,u.toneMapping=g.NoToneMapping,u.autoClear=!1,u.setPixelRatio(Math.min(window.devicePixelRatio||1,d.maxPixelRatio)),u.debug.onShaderError=function(tt,yt,Rt,Bt){throw new Error("LARGO shader: "+tt.getProgramInfoLog(yt)+`
`+tt.getShaderInfoLog(Rt)+`
`+tt.getShaderInfoLog(Bt))};let S=new g.PerspectiveCamera(30,1,.1,100);S.position.set(0,0,10),S.lookAt(0,0,0),S.updateMatrixWorld(!0);let _=new g.Scene,M=new g.Scene;_.background=null,M.background=null;let N=vc(u);_.environment=N.texture;let R=y(g,p,h,N.texture,{width:7,depth:d.logoDepth,bevel:d.logoBevel,roughness:d.chromeRoughness,envMapIntensity:1,color:15791355});R.rotation.set(-.055,-.1,0),_.add(R);let P=R.children[0].geometry.boundingBox,F=P.getSize(new g.Vector3),K=[];for(let tt of[P.min.x,P.max.x])for(let yt of[P.min.y,P.max.y])for(let Rt of[P.min.z,P.max.z])K.push(new g.Vector3(tt,yt,Rt));let x=new g.Vector3;_.add(new g.HemisphereLight(16777215,6451333,.3));let w=new g.DirectionalLight(16777215,2.4);w.position.set(-4,5,7),_.add(w);let k=new g.DirectionalLight(13294079,1.1);k.position.set(5,-1,3),_.add(k);let $={type:g.HalfFloatType,format:g.RGBAFormat,minFilter:g.LinearFilter,magFilter:g.LinearFilter,depthBuffer:!0,stencilBuffer:!1,generateMipmaps:!1},Y=new g.WebGLRenderTarget(1,1,$),ct=new g.WebGLRenderTarget(1,1,$);Y.texture.name="LARGO linear background RGBA",ct.texture.name="LARGO linear background plus rear glass",Y.texture.colorSpace=g.LinearSRGBColorSpace,ct.texture.colorSpace=g.LinearSRGBColorSpace,Y.texture.generateMipmaps=!1,ct.texture.generateMipmaps=!1;let q=!0,it=new g.Scene,U=new g.Camera,pt=new g.BufferGeometry;pt.setAttribute("position",new g.Float32BufferAttribute([-1,-1,0,3,-1,0,-1,3,0],3));let dt=new g.ShaderMaterial({depthTest:!1,depthWrite:!1,blending:g.NoBlending,toneMapped:!1,uniforms:{uSource:{value:Y.texture}},vertexShader:"varying vec2 vUv;void main(){vUv=position.xy*.5+.5;gl_Position=vec4(position,1.0);}",fragmentShader:`uniform sampler2D uSource;varying vec2 vUv;void main(){gl_FragColor=texture2D(uSource,vUv);
#include <colorspace_fragment>
}`}),_t=new g.Mesh(pt,dt);_t.frustumCulled=!1,it.add(_t);let Pt=`varying vec3 vNormal;
    varying vec3 vEye;
    void main() {
      vec4 worldPos = modelMatrix * vec4(position, 1.0);
      vec4 mvPos = viewMatrix * worldPos;
      gl_Position = projectionMatrix * mvPos;
      vNormal = normalize(normalMatrix * normal);
      vEye = mvPos.xyz;
    }`,Ot=`uniform sampler2D uTexture;
    uniform vec2 uResolution;
    uniform float uIorR;
    uniform float uIorY;
    uniform float uIorG;
    uniform float uIorC;
    uniform float uIorB;
    uniform float uIorP;
    uniform float uRefractPower;
    uniform float uChromatic;
    uniform float uSaturation;
    uniform float uShininess;
    uniform float uDiffuseness;
    uniform float uFresnelPower;
    uniform vec3 uLight;
    uniform vec3 uTint;
    uniform float uBackside;
    varying vec3 vNormal;
    varying vec3 vEye;

    // Render targets store linear, premultiplied RGBA. Sampling outside the
    // viewport returns transparent space instead of smearing its edge pixels.
    vec4 readScene(vec2 uv) {
      if (uv.x < 0.0 || uv.y < 0.0 || uv.x > 1.0 || uv.y > 1.0) {
        return vec4(0.0);
      }
      return texture2D(uTexture, uv);
    }

    float highlight(vec3 light, float shininess, float diffuseness,
                    vec3 n, vec3 eye) {
      vec3 lightVec = normalize(-light);
      vec3 halfVec = normalize(lightVec - eye);
      return pow(max(dot(n, halfVec), 0.0), shininess)
        + max(0.0, dot(n, lightVec)) * diffuseness;
    }

    void main() {
      vec2 uv = gl_FragCoord.xy / uResolution;
      vec3 n = normalize(vNormal);
      // Exactly one normal flip. Do not use gl_FrontFacing: Three r169 changes
      // the winding convention for BackSide materials.
      if (uBackside > 0.5) n = -n;
      vec3 eye = normalize(vEye);

      vec3 refrR = refract(eye, n, 1.0 / uIorR);
      vec3 refrY = refract(eye, n, 1.0 / uIorY);
      vec3 refrG = refract(eye, n, 1.0 / uIorG);
      vec3 refrC = refract(eye, n, 1.0 / uIorC);
      vec3 refrB = refract(eye, n, 1.0 / uIorB);
      vec3 refrP = refract(eye, n, 1.0 / uIorP);
      vec3 color = vec3(0.0);
      vec3 coverage = vec3(0.0);
      const int LOOP = 16;
      for (int i = 0; i < LOOP; i++) {
        float slide = float(i) / float(LOOP) * 0.045;
        vec4 tr = readScene(uv + refrR.xy * (uRefractPower + slide) * uChromatic);
        vec4 ty = readScene(uv + refrY.xy * (uRefractPower + slide) * uChromatic);
        vec4 tg = readScene(uv + refrG.xy * (uRefractPower + slide * 2.0) * uChromatic);
        vec4 tc = readScene(uv + refrC.xy * (uRefractPower + slide * 2.5) * uChromatic);
        vec4 tb = readScene(uv + refrB.xy * (uRefractPower + slide * 3.0) * uChromatic);
        vec4 tp = readScene(uv + refrP.xy * (uRefractPower + slide) * uChromatic);
        float r = tr.r * 0.5;
        float y = (ty.r * 2.0 + ty.g * 2.0 - ty.b) / 6.0;
        float g = tg.g * 0.5;
        float c = (tc.g * 2.0 + tc.b * 2.0 - tc.r) / 6.0;
        float b = tb.b * 0.5;
        float p = (tp.b * 2.0 + tp.r * 2.0 - tp.g) / 6.0;
        color += vec3(
          r + (2.0 * p + 2.0 * y - c) / 3.0,
          g + (2.0 * y + 2.0 * c - p) / 3.0,
          b + (2.0 * c + 2.0 * p - y) / 3.0
        );
        // Positive, normalized coverage weights avoid dark transparent
        // fringes and prevent an isolated spectral band from blowing out.
        coverage += vec3(
          (3.0 * tr.a + 2.0 * tp.a + 2.0 * ty.a) / 7.0,
          (3.0 * tg.a + 2.0 * ty.a + 2.0 * tc.a) / 7.0,
          (3.0 * tb.a + 2.0 * tc.a + 2.0 * tp.a) / 7.0
        );
      }
      color = max(color / float(LOOP), vec3(0.0));
      coverage /= float(LOOP);
      float alpha = clamp(max(coverage.r, max(coverage.g, coverage.b)), 0.0, 1.0);
      float luma = dot(color, vec3(0.2125, 0.7154, 0.0721));
      color = max(mix(vec3(luma), color, uSaturation), vec3(0.0));

      float spec = highlight(uLight, uShininess, uDiffuseness, n, eye)
        + 0.6 * highlight(vec3(1.0, 1.0, -1.0),
                          uShininess * 0.6, uDiffuseness * 0.5, n, eye);
      bool back = uBackside > 0.5;
      spec *= back ? 0.35 : 1.0;
      float facing = clamp(1.0 + dot(eye, n), 0.0, 1.0);
      float fresnel = pow(facing, uFresnelPower) * (back ? 0.25 : 0.55);

      // A light, angle-dependent coating makes empty glass readable on both
      // light and dark host pages; no opaque black base is introduced.
      float thinFilm = pow(facing, 2.2) * (back ? 0.018 : 0.055);
      vec3 rainbow = 0.5 + 0.5 * cos(
        6.2831853 * (facing * 1.65 + dot(n.xy, vec2(0.16, 0.12)))
        + vec3(0.0, 2.0943951, 4.1887902)
      );
      float surface = clamp(
        fresnel + spec * 0.58 + thinFilm + (back ? 0.006 : 0.012),
        0.0, 0.98
      );
      vec3 reflected = vec3(fresnel + spec)
        + rainbow * thinFilm
        + vec3(0.004, 0.005, 0.007) * (back ? 0.2 : 0.45);
      vec3 transmittedTint = mix(vec3(1.0), uTint, 0.58);
      vec3 reflectionTint = mix(vec3(1.0), uTint, 0.42);
      vec3 premult = color * transmittedTint * (1.0 - surface)
        + reflected * reflectionTint;
      float outAlpha = surface + alpha * (1.0 - surface);

      // NoBlending replaces the un-refracted logo underneath the cube.
      // Unpremultiply BEFORE sRGB conversion, then premultiply exactly once.
      // For linear render targets colorspace_fragment is the identity.
      gl_FragColor = vec4(premult / max(outAlpha, 0.000001), outAlpha);
      #include <colorspace_fragment>
      gl_FragColor.rgb *= gl_FragColor.a;
    }`;function D(tt,yt){return new g.ShaderMaterial({name:tt?"LARGO glass back faces":"LARGO glass front faces",vertexShader:Pt,fragmentShader:Ot,side:tt?g.BackSide:g.FrontSide,transparent:!1,blending:g.NoBlending,depthTest:!0,depthWrite:!0,toneMapped:!1,uniforms:{uTexture:{value:yt},uResolution:{value:new g.Vector2(1,1)},uIorR:{value:1.15},uIorY:{value:1.16},uIorG:{value:1.18},uIorC:{value:1.22},uIorB:{value:1.22},uIorP:{value:1.22},uRefractPower:{value:tt?.22:.3},uChromatic:{value:d.chromatic},uSaturation:{value:1.08},uShininess:{value:90},uDiffuseness:{value:.02},uFresnelPower:{value:5},uLight:{value:new g.Vector3(-1,1,1)},uTint:{value:new g.Color(16777215)},uBackside:{value:tt?1:0}}})}let L=D(!0,Y.texture),C=D(!1,ct.texture),b=[{name:"clear",hex:16777215},{name:"ice-blue",hex:8571135},{name:"amethyst",hex:12228863},{name:"teal",hex:7987407},{name:"rose",hex:16753610},{name:"amber",hex:16763523}],Q=0,st=new g.Color(16777215);r.dataset.glassTint="clear";function Z(){Ut(),Q=(Q+1)%b.length,st.setHex(b[Q].hex),r.dataset.glassTint=b[Q].name,Yt=1,r.dataset.stars="visible",en()}let lt=new g.Group,W=new g.Group;M.add(lt),lt.add(W);let T=new g.Quaternion().setFromEuler(new g.Euler(-.42,.62,.18));W.quaternion.copy(T);let B=null,J=!1,j=!1,rt=0,O=1,I=1,A=!1,v=new g.Vector2,X=360,at=new Float32Array(X*3),ut=new Float32Array(X),ht=new Float32Array(X),It=new Float32Array(X),vt=new Float32Array(X),Mt=7351;function Ht(){return Mt=Math.imul(Mt,1664525)+1013904223>>>0,Mt/4294967296}let gt=new g.Vector3,bt=.43;for(let tt=0;tt<X;tt++){let yt=tt%5===0,Rt=(tt*113+37)%216;gt.set(((Rt%6+Ht())/6*2-1)*bt,((Math.floor(Rt/6)%6+Ht())/6*2-1)*bt,((Math.floor(Rt/36)+Ht())/6*2-1)*bt),at.set([gt.x,gt.y,gt.z],tt*3),ut[tt]=yt?22+Ht()*28:4.5+Math.pow(Ht(),2.5)*10.5,ht[tt]=Ht()*Math.PI*2,It[tt]=yt?1:0,vt[tt]=1-Math.min(1,gt.length()/(Math.sqrt(3)*bt))}let Dt=new g.BufferGeometry;Dt.setAttribute("position",new g.BufferAttribute(at,3)),Dt.setAttribute("aSize",new g.BufferAttribute(ut,1)),Dt.setAttribute("aPhase",new g.BufferAttribute(ht,1)),Dt.setAttribute("aKind",new g.BufferAttribute(It,1)),Dt.setAttribute("aCore",new g.BufferAttribute(vt,1)),Dt.computeBoundingSphere();let kt=new g.ShaderMaterial({name:"LARGO inner Milky Way",transparent:!0,premultipliedAlpha:!0,blending:g.NormalBlending,depthTest:!0,depthWrite:!1,toneMapped:!1,uniforms:{uTime:{value:0},uReveal:{value:0},uMotion:{value:1},uPixelRatio:{value:1},uTint:{value:new g.Color(16777215)}},vertexShader:`
          attribute float aSize;
          attribute float aPhase;
          attribute float aKind;
          attribute float aCore;
          uniform float uTime;
          uniform float uMotion;
          uniform float uPixelRatio;
          varying float vGlow;
          varying float vKind;
          varying float vCore;
          varying float vHue;
          void main() {
            vec4 mv = modelViewMatrix * vec4(position, 1.0);
            gl_Position = projectionMatrix * mv;
            gl_PointSize = clamp(aSize * uPixelRatio * (10.0 / max(-mv.z, 0.1)), 1.0, 112.0);
            float wave = 0.5 + 0.5 * sin(uTime * uMotion * (0.8 + aPhase * 0.11) + aPhase);
            vGlow = mix(0.48 + 0.52 * wave * wave, 0.85 + 0.15 * wave, aKind);
            vKind = aKind;
            vCore = aCore;
            vHue = 0.5 + 0.5 * sin(aPhase);
          }
        `,fragmentShader:`
          uniform float uReveal;
          uniform vec3 uTint;
          varying float vGlow;
          varying float vKind;
          varying float vCore;
          varying float vHue;
          void main() {
            vec2 p = gl_PointCoord * 2.0 - 1.0;
            float r2 = dot(p, p);
            float edge = 1.0 - smoothstep(0.65, 1.0, sqrt(r2));
            float core = exp(-12.0 * r2);
            float rays = max(exp(-80.0 * p.x * p.x - 3.5 * p.y * p.y),
                             exp(-80.0 * p.y * p.y - 3.5 * p.x * p.x)) * 0.48;
            float halo = exp(-3.5 * r2) * 0.22;
            float starLight = (core + rays + halo) * edge;
            float nebulaLight = exp(-4.0 * r2) * edge * 0.075;
            float alpha = clamp(mix(starLight, nebulaLight, vKind) * vGlow * uReveal, 0.0, 1.0);
            if (alpha < 0.001) discard;
            vec3 starColor = mix(vec3(0.82, 0.90, 1.0), vec3(1.0, 0.93, 0.80), pow(vCore, 3.0)) * 1.85;
            vec3 nebulaColor = mix(vec3(0.24, 0.40, 1.0), vec3(0.62, 0.28, 0.94), vHue);
            nebulaColor = mix(nebulaColor, vec3(0.86, 0.83, 1.0), pow(vCore, 2.0));
            vec3 color = mix(starColor, nebulaColor, vKind) * mix(vec3(1.0), uTint, 0.10);
            gl_FragColor = vec4(color, alpha);
            #include <colorspace_fragment>
            gl_FragColor.rgb *= gl_FragColor.a;
          }
        `}),wt=new g.Points(Dt,kt);wt.name="LARGO Milky Way inside glass",wt.layers.set(1),wt.visible=!1,W.add(wt);let Yt=0;r.dataset.stars="hidden";function Wt(tt,yt){let Rt=kt.uniforms;Rt.uReveal.value+=(Yt-Rt.uReveal.value)*(cn?1:1-Math.exp(-3.5*tt)),Rt.uTime.value=yt/1e3,Rt.uMotion.value=cn?0:1,Rt.uPixelRatio.value=u.getPixelRatio(),Rt.uTint.value.copy(C.uniforms.uTint.value),Dt.setDrawRange(0,A?216:X),wt.visible=Rt.uReveal.value>.002}let Qt=["cube","sphere","pyramid"],z=0;r.dataset.shape=Qt[0];let Et=at.slice(),ot=new Float64Array([1,0,0]),mt=new Float64Array([1,0,0]),Tt=900,Ct=0,Zt=!1,ee=.72,Se=.075,$t=[new g.Vector3(0,ee,0),new g.Vector3(-Math.sqrt(2/3)*ee,-ee/3,Math.sqrt(2)/3*ee),new g.Vector3(Math.sqrt(2/3)*ee,-ee/3,Math.sqrt(2)/3*ee),new g.Vector3(0,-ee/3,-2*Math.sqrt(2)/3*ee)],xe=[[0,1,2],[0,2,3],[0,3,1],[1,3,2]].map(tt=>{let yt=new g.Triangle(...tt.map(Bt=>$t[Bt])),Rt=yt.getNormal(new g.Vector3);return Rt.dot(yt.a)<0&&Rt.negate(),{triangle:yt,normal:Rt,offset:Rt.dot(yt.a)}}),Ve=new g.Vector3,xi=new g.Vector3,ns=new g.Vector3,Ge=new g.Vector3;function is(tt,yt){let Rt=-1/0,Bt=xe[0];for(let le of xe){let Ie=le.normal.dot(tt)-le.offset;Ie>Rt&&(Rt=Ie,Bt=le)}if(Rt<=0)return yt&&yt.copy(Bt.normal),Rt-Se;let jt=1/0;for(let le of xe){le.triangle.closestPointToPoint(tt,xi);let Ie=xi.distanceToSquared(tt);Ie<jt&&(jt=Ie,ns.copy(xi))}return yt&&yt.subVectors(tt,ns).normalize(),Math.sqrt(jt)-Se}function Ls(tt,yt){let Rt=Math.abs(tt.x)-.38,Bt=Math.abs(tt.y)-.38,jt=Math.abs(tt.z)-.38,le=Math.max(Rt,0),Ie=Math.max(Bt,0),ln=Math.max(jt,0);return yt&&yt.set(Math.sign(tt.x)*le,Math.sign(tt.y)*Ie,Math.sign(tt.z)*ln).normalize(),Math.hypot(le,Ie,ln)+Math.min(Math.max(Rt,Bt,jt),0)-.12}function yi(tt,yt,Rt){if(tt===1)return Rt&&Rt.copy(yt),.62;let Bt=tt===0?Ls:is,jt=0,le=1;for(let ln=0;ln<23;ln++){let Oe=(jt+le)/2;Ve.copy(yt).multiplyScalar(Oe),Bt(Ve)>0?le=Oe:jt=Oe}let Ie=(jt+le)/2;return Rt&&Bt(Ve.copy(yt).multiplyScalar(Ie),Rt),Ie}let jn=new g.IcosahedronGeometry(1,17),ss=jn.getAttribute("position"),Nn=[],rs=[],as=new Map,fe=new g.Vector3;for(let tt=0;tt<ss.count;tt++){fe.fromBufferAttribute(ss,tt).normalize();let yt=[fe.x,fe.y,fe.z].map(Bt=>Math.round(Bt*1e6)).join(","),Rt=as.get(yt);Rt===void 0&&(Rt=Nn.length/3,as.set(yt,Rt),Nn.push(fe.x,fe.y,fe.z)),rs.push(Rt)}jn.dispose();let Fn=new Float64Array(Nn),os=Fn.length/3,E=Array.from({length:3},()=>new Float64Array(os)),V=Array.from({length:3},()=>new Float64Array(Fn.length)),et=new Float32Array(Fn.length),nt=new Float32Array(Fn.length);for(let tt=0;tt<3;tt++)for(let yt=0;yt<os;yt++){let Rt=yt*3;fe.fromArray(Fn,Rt);let Bt=yi(tt,fe,Ge);E[tt][yt]=Bt;let jt=Bt/Math.max(1e-6,Ge.dot(fe));V[tt][Rt]=Ge.x*jt,V[tt][Rt+1]=Ge.y*jt,V[tt][Rt+2]=Ge.z*jt}let H=new g.BufferGeometry;H.setIndex(rs),H.setAttribute("position",new g.BufferAttribute(et,3).setUsage(g.DynamicDrawUsage)),H.setAttribute("normal",new g.BufferAttribute(nt,3).setUsage(g.DynamicDrawUsage)),H.boundingSphere=new g.Sphere(new g.Vector3,.9),H.boundingBox=new g.Box3(new g.Vector3(-.9,-.9,-.9),new g.Vector3(.9,.9,.9));let xt=[Et,new Float32Array(at.length),new Float32Array(at.length)];for(let tt=0;tt<X;tt++){let yt=tt*3;fe.fromArray(Et,yt);let Rt=fe.length();if(Rt<1e-10)continue;fe.multiplyScalar(1/Rt);let Bt=Rt/yi(0,fe);for(let jt=1;jt<3;jt++){let le=Bt*yi(jt,fe);xt[jt][yt]=fe.x*le,xt[jt][yt+1]=fe.y*le,xt[jt][yt+2]=fe.z*le}}Dt.getAttribute("position").setUsage(g.DynamicDrawUsage),Dt.boundingSphere=new g.Sphere(new g.Vector3,.9);function At(){let tt=ot[0],yt=ot[1],Rt=ot[2];for(let Bt=0;Bt<os;Bt++){let jt=Bt*3,le=tt*E[0][Bt]+yt*E[1][Bt]+Rt*E[2][Bt],Ie=0;for(let Oe=0;Oe<3;Oe++){let hn=jt+Oe;et[hn]=Fn[hn]*le;let Si=tt*V[0][hn]+yt*V[1][hn]+Rt*V[2][hn];nt[hn]=Si,Ie+=Si*Si}let ln=1/Math.sqrt(Ie);for(let Oe=0;Oe<3;Oe++)nt[jt+Oe]*=ln}for(let Bt=0;Bt<at.length;Bt++)at[Bt]=tt*xt[0][Bt]+yt*xt[1][Bt]+Rt*xt[2][Bt];H.getAttribute("position").needsUpdate=!0,H.getAttribute("normal").needsUpdate=!0,Dt.getAttribute("position").needsUpdate=!0}At();function Lt(tt){if(!Zt)return;let yt=cn?1:g.MathUtils.clamp((tt-Ct)/Tt,0,1),Rt=yt*yt*yt*(yt*(yt*6-15)+10);for(let Bt=0;Bt<3;Bt++)ot[Bt]=mt[Bt]*(1-Rt)+(Bt===z?Rt:0);At(),yt===1&&(Zt=!1,r.dataset.shape=Qt[z],r.dataset.shapeTransition="idle",r.dataset.model=z===0?"planar-rounded-box":z===1?"sphere":"rounded-pyramid",B.name="LARGO refractive "+Qt[z])}function Ut(){if(J)return;let tt=performance.now();Lt(tt),mt.set(ot),z=(z+1)%Qt.length,Ct=tt,Zt=!0,r.dataset.shapeTarget=Qt[z],r.dataset.shapeTransition="morphing",cn&&Lt(tt)}function Vt(tt,yt){if(J){tt.dispose();return}B?(B.geometry.dispose(),B.geometry=tt):(B=new g.Mesh(tt,C),B.name="LARGO rounded refractive cuboid",W.add(B)),r.dataset.model=yt,zt()}Vt(H,"planar-rounded-box");function zt(){if(J||j)return;let tt=r.getBoundingClientRect();O=Math.max(1,Math.round(tt.width)),I=Math.max(1,Math.round(tt.height)),A=O<768||O/I<1,r.dataset.mobile=String(A);let yt=Math.min(window.devicePixelRatio||1,d.maxPixelRatio);u.setPixelRatio(yt),u.setSize(O,I,!1),S.aspect=O/I,S.updateProjectionMatrix(),u.getDrawingBufferSize(v),q=!0,Y.setSize(v.x,v.y),ct.setSize(v.x,v.y),L.uniforms.uResolution.value.copy(v),C.uniforms.uResolution.value.copy(v);let Rt=2*Math.tan(g.MathUtils.degToRad(S.fov/2))*10,Bt=Rt*S.aspect,jt=A?.5:.517,le=A?.45:.488;lt.position.set((jt-.5)*Bt,(.5-le)*Rt,0);let ln=Math.min(I*d.cubeHeight,O*(A?d.cubeWidthMobile:d.cubeWidthDesktop))/I*Rt;lt.scale.setScalar(ln);let Oe=Math.max(1.8,ln*.9+.36),hn=(10+Oe)/10,Si=A?d.logoWidthMobile:d.logoWidthDesktop,Pc=A?.45:.5,_h=1-2*Pc;R.position.set(0,(.5-Pc)*Rt*hn,-Oe);let xh=Bt*hn*Si/F.x,yh=Rt*hn*.5/F.y,Us=Math.min(xh,yh),Ns=0;function Ic(Fs){R.scale.setScalar(Fs),R.updateMatrixWorld(!0);for(let hs of K)if(x.copy(hs).applyMatrix4(R.children[0].matrixWorld).project(S),!Number.isFinite(x.x)||!Number.isFinite(x.y)||Math.abs(x.x)>Si||Math.abs(x.y-_h)>.5||x.z<-1||x.z>1)return!1;return!0}if(Ic(Us))Ns=Us;else for(let Fs=0;Fs<16;Fs++){let hs=(Ns+Us)/2;Ic(hs)?Ns=hs:Us=hs}R.scale.setScalar(Ns),R.updateMatrixWorld(!0)}let Nt=new g.Vector3(1,0,0),te=new g.Vector3(0,1,0),ne=new g.Quaternion;function re(tt,yt){tt&&(ne.setFromAxisAngle(te,tt),W.quaternion.premultiply(ne)),yt&&(ne.setFromAxisAngle(Nt,yt),W.quaternion.premultiply(ne)),W.quaternion.normalize()}let Ae=new g.Raycaster,Kt=new g.Vector2;function Ft(tt){if(!B)return!1;let yt=c.getBoundingClientRect();return!yt.width||!yt.height?!1:(Kt.set((tt.clientX-yt.left)/yt.width*2-1,-(tt.clientY-yt.top)/yt.height*2+1),M.updateMatrixWorld(!0),S.updateMatrixWorld(!0),Ae.setFromCamera(Kt,S),Ae.intersectObject(B,!1).length>0)}function me(tt,yt){return tt.type==="pointerup"&&Te&&yt-xn<=500&&On<=64&&(tt.clientX-Jt)**2+(tt.clientY-Pe)**2<=64&&Ft(tt)}let Jt=0,Pe=0,xn=0,Te=!1,On=0,ie=null,Ze=0,ti=0,be=0,He=0,tn=0,Bn=performance.now()-1600,yn=0,Mc=new AbortController,we=function(tt,yt,Rt,Bt){tt.addEventListener(yt,Rt,Object.assign({},Bt,{signal:Mc.signal}))};we(c,"touchstart",function(tt){tt.stopPropagation()},{passive:!0}),we(c,"touchmove",function(tt){tt.stopPropagation()},{passive:!0});let Sc=window.matchMedia("(prefers-reduced-motion: reduce)"),cn=Sc.matches;we(Sc,"change",function(tt){cn=tt.matches,tn=He=0,en()}),we(c,"pointerdown",function(tt){ie!==null||tt.pointerType==="mouse"&&tt.button!==0||(ie=tt.pointerId,Jt=tt.clientX,Pe=tt.clientY,xn=performance.now(),Te=Ft(tt),On=0,Ze=tt.clientX,ti=tt.clientY,be=performance.now(),tn=He=0,yn=0,c.classList.add("dragging"),c.setPointerCapture(ie),tt.pointerType==="mouse"&&tt.preventDefault())}),we(c,"pointermove",function(tt){if(tt.pointerId!==ie)return;let yt=performance.now();On=Math.max(On,(tt.clientX-Jt)**2+(tt.clientY-Pe)**2);let Rt=Math.max(4,Math.min(80,yt-be)),Bt=(tt.clientX-Ze)*.008,jt=(tt.clientY-ti)*.008;re(Bt,jt),en();let le=16.6667/Rt;He=g.MathUtils.clamp(Bt*le,-.32,.32),tn=g.MathUtils.clamp(jt*le,-.32,.32),Ze=tt.clientX,ti=tt.clientY,be=yt,tt.preventDefault()});function Qr(tt){if(tt.pointerId!==ie)return;let yt=me(tt,performance.now()),Rt=ie;ie=null,c.classList.remove("dragging"),c.hasPointerCapture(Rt)&&c.releasePointerCapture(Rt),Bn=performance.now(),yt&&Z(),(Bn-be>90||tt.type==="pointercancel"||cn)&&(tn=He=0)}we(c,"pointerup",Qr),we(c,"pointercancel",Qr),we(c,"lostpointercapture",Qr),we(c,"keydown",function(tt){if(["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Home","Enter"," "].includes(tt.key)){if(tt.preventDefault(),tt.key==="Enter"||tt.key===" "){tt.repeat||Z();return}tn=He=0,Bn=performance.now(),tt.key==="ArrowLeft"&&(yn-=Math.PI/2),tt.key==="ArrowRight"&&(yn+=Math.PI/2),tt.key==="ArrowUp"&&re(0,-.24),tt.key==="ArrowDown"&&re(0,.24),tt.key==="Home"&&(yn=0,W.quaternion.copy(T)),en()}});let bc={en:"LARGO 3D. Drag to rotate. Tap the shape or press Enter: cube, sphere, triangular pyramid. Each tap changes the glass tint and reveals stars.",lv:"LARGO 3D. Velciet, lai pagrieztu. Pieskarieties fig\u016Brai vai nospiediet Enter: kubs, lode, tr\u012Bsst\u016Bra piram\u012Bda. Piesk\u0101riens maina stikla toni un atkl\u0101j zvaigznes.",ru:"LARGO 3D. \u041F\u0435\u0440\u0435\u0442\u0430\u0441\u043A\u0438\u0432\u0430\u0439\u0442\u0435 \u0434\u043B\u044F \u0432\u0440\u0430\u0449\u0435\u043D\u0438\u044F. \u041D\u0430\u0436\u043C\u0438\u0442\u0435 \u043D\u0430 \u0444\u0438\u0433\u0443\u0440\u0443 \u0438\u043B\u0438 Enter: \u043A\u0443\u0431, \u0448\u0430\u0440, \u0442\u0440\u0435\u0443\u0433\u043E\u043B\u044C\u043D\u0430\u044F \u043F\u0438\u0440\u0430\u043C\u0438\u0434\u0430. \u041A\u0430\u0436\u0434\u043E\u0435 \u043D\u0430\u0436\u0430\u0442\u0438\u0435 \u043C\u0435\u043D\u044F\u0435\u0442 \u043E\u0442\u0442\u0435\u043D\u043E\u043A \u0441\u0442\u0435\u043A\u043B\u0430 \u0438 \u043F\u0440\u043E\u044F\u0432\u043B\u044F\u0435\u0442 \u0437\u0432\u0451\u0437\u0434\u044B."},mh=(document.documentElement.lang||"en").toLowerCase().split("-")[0];c.setAttribute("aria-label",bc[mh]||bc.en);let vi=0,Mi=0,cs=!0,wc=!0,Ac=!0,Ds=!1;function gh(){if(q&&(u.setRenderTarget(Y),u.clear(!0,!0,!0),u.render(_,S),q=!1),u.setRenderTarget(ct),u.clear(!0,!0,!0),u.render(it,U),u.clearDepth(),B.material=L,u.render(M,S),wt.visible){let tt=S.layers.mask;S.layers.set(1);try{u.render(M,S)}finally{S.layers.mask=tt}}u.setRenderTarget(null),u.clear(!0,!0,!0),u.render(_,S),u.clearDepth(),B.material=C,u.render(M,S)}function Tc(tt){if(vi=0,J||j||!cs||document.hidden)return;let yt=Mi?Math.min((tt-Mi)/1e3,.05):1/60,Rt=cn?1:1-Math.exp(-9*yt);if(C.uniforms.uTint.value.lerp(st,Rt),L.uniforms.uTint.value.copy(C.uniforms.uTint.value),Mi=tt,Lt(tt),Wt(yt,tt),ie===null){if(Math.abs(yn)>5e-4){let Bt=cn?yn:yn*Math.min(1,.09*yt*60);re(Bt,0),yn-=Bt,Bn=tt}else if(yn=0,!cn){re(He*yt*60,tn*yt*60);let Bt=Math.pow(.94,yt*60);He*=Bt,tn*=Bt,Math.abs(tn)<1e-5&&(tn=0),Math.abs(He)<1e-5&&(He=0);let jt=g.MathUtils.clamp((tt-Bn-600)/1e3,0,1);re(d.idleY*jt*yt*60,d.idleX*jt*yt*60)}}try{gh(),Ds||(Ds=!0,r.dataset.state="ready",r.dispatchEvent(new CustomEvent("largo:ready",{bubbles:!0})))}catch(Bt){console.warn("LARGO: rendering stopped; SVG fallback is active.",Bt),Ds=!1,r.dataset.state="fallback";return}cn?(Mi=0,r.dataset.renderState="idle"):vi=requestAnimationFrame(Tc)}function en(){J||j||!cs||document.hidden||vi||(Mi=0,vi=requestAnimationFrame(Tc),r.dataset.renderState="running")}function ls(){cancelAnimationFrame(vi),vi=0,Mi=0,r.dataset.renderState="paused"}let Ec=new ResizeObserver(function(){zt(),en()});Ec.observe(r);function Cc(){let tt=wc&&Ac;tt!==cs&&(cs=tt,cs?en():ls())}let jr=new IntersectionObserver(function(tt){wc=tt[tt.length-1].isIntersecting,Cc()},{threshold:.001});jr.observe(r),we(window,"message",function(tt){tt.source!==window.parent||tt.data?.type!=="ea-code-viewport"||typeof tt.data.visible!="boolean"||(Ac=tt.data.visible,Cc())}),we(window,"resize",function(){zt(),en()},{passive:!0}),we(document,"visibilitychange",function(){document.hidden?ls():en()}),we(c,"webglcontextlost",function(tt){tt.preventDefault(),j=!0,r.dataset.state="fallback",ls()}),we(c,"webglcontextrestored",function(){j=!1,Ds=!1;let tt=N;N=vc(u),_.environment=N.texture,R.children[0].material.envMap=N.texture,R.children[0].material.needsUpdate=!0,tt.dispose(),zt(),en()});function Rc(){J||(J=!0,ls(),window.clearTimeout(rt),Mc.abort(),Ec.disconnect(),jr&&jr.disconnect(),B&&B.geometry.dispose(),R.userData.dispose(),Dt.dispose(),kt.dispose(),C.dispose(),L.dispose(),pt.dispose(),dt.dispose(),ct.dispose(),Y.dispose(),N.dispose(),u.dispose())}we(r,"largo:destroy",Rc),we(window,"pagehide",function(tt){tt.persisted?ls():Rc()}),we(window,"pageshow",en),zt(),en()}function m(g,p,u){let S=p.getAttribute("position"),_=p.getAttribute("normal"),M=S.count,N=_.array.slice(),R=new Float64Array(M),P=new Uint8Array(M),F=Math.cos(g.MathUtils.degToRad(42)),K=1e-5,x=1/K,w=u.bevelEnabled,k=u.depth,$=1/0,Y=-1/0;for(let U=0;U<M;U++)$=Math.min($,S.getZ(U)),Y=Math.max(Y,S.getZ(U));for(let U of p.groups)U.materialIndex===1&&P.fill(1,U.start,U.start+U.count);let ct=new Map;function q(U){return Math.round(S.getX(U)*x)+","+Math.round(S.getY(U)*x)+","+Math.round(S.getZ(U)*x)}for(let U=0;U<M;U+=3)if(P[U])for(let pt=0;pt<3;pt++){let dt=U+pt,_t=U+(pt+1)%3,Pt=U+(pt+2)%3,Ot=S.getX(_t)-S.getX(dt),D=S.getY(_t)-S.getY(dt),L=S.getZ(_t)-S.getZ(dt),C=S.getX(Pt)-S.getX(dt),b=S.getY(Pt)-S.getY(dt),Q=S.getZ(Pt)-S.getZ(dt),st=Math.hypot(D*Q-L*b,L*C-Ot*Q,Ot*b-D*C);R[dt]=st>1e-18?Math.atan2(st,Ot*C+D*b+L*Q):0;let Z=q(dt),lt=ct.get(Z);lt?lt.push(dt):ct.set(Z,[dt])}let it=0;for(let U=0;U<M;U++){let pt=S.getZ(U);if(!P[U]){_.setXYZ(U,0,0,pt<($+Y)*.5?-1:1);continue}if(w&&(Math.abs(pt-$)<K||Math.abs(pt-Y)<K)){_.setXYZ(U,0,0,Math.abs(pt-$)<K?-1:1),it++;continue}let dt=!w||Math.abs(pt)<K||Math.abs(pt-k)<K,_t=N[U*3],Pt=N[U*3+1],Ot=N[U*3+2],D=Math.hypot(_t,Pt,Ot),L=0,C=0,b=0,Q=ct.get(q(U));for(let Z=0;Z<Q.length;Z++){let lt=Q[Z];if(R[lt]===0)continue;let W=N[lt*3],T=N[lt*3+1],B=N[lt*3+2];dt&&Math.abs(B)>1e-6||D>1e-8&&W*_t+T*Pt+B*Ot<F||(L+=W*R[lt],C+=T*R[lt],b+=B*R[lt])}let st=Math.hypot(L,C,b);(st<1e-12||!Number.isFinite(st))&&(L=_t,C=Pt,b=dt?0:Ot,st=Math.hypot(L,C,b)),st<1e-12||!Number.isFinite(st)?_.setXYZ(U,1,0,0):_.setXYZ(U,L/st,C/st,b/st),it++}return _.needsUpdate=!0,p.userData.smoothChrome={smoothedVertices:it,creaseDegrees:42,capNormalsPlanar:!0,geometryPositionsUnchanged:!0},p}function y(g,p,u,S=null,_={}){let M={width:7,depth:.18,bevel:.014,bevelSegments:6,curveSegments:20,color:15265266,roughness:.14,envMapIntensity:1.45,..._};if(!Number.isFinite(M.width)||M.width<=0||!Number.isFinite(M.depth)||M.depth<=0)throw new Error("Chrome logo: width and depth must be positive finite numbers.");let N=new p().parse(u);if(N.xml.localName==="parsererror"||N.xml.querySelector("parsererror"))throw new Error("Chrome logo: the supplied SVG could not be parsed.");let R=[];for(let Pt of N.paths){let Ot=Pt.userData?.style||{};Ot.fill==="none"||Ot.fillOpacity===0||Ot.opacity===0||Ot.visibility==="hidden"||Ot.display==="none"||R.push(...p.createShapes(Pt))}if(!R.length)throw new Error("Chrome logo: no filled SVG shapes found.");let P=(N.xml.getAttribute("viewBox")||"").trim().split(/[\s,]+/).map(Number),F,K,x,w;if(P.length===4&&P.every(Number.isFinite)&&P[2]>0&&P[3]>0)[F,K,x,w]=P;else{let Pt=new g.Box2;for(let Ot of R)for(let D of Ot.getPoints(M.curveSegments))Pt.expandByPoint(D);F=Pt.min.x,K=Pt.min.y,x=Pt.max.x-Pt.min.x,w=Pt.max.y-Pt.min.y}if(!(x>0&&w>0))throw new Error("Chrome logo: invalid SVG bounds.");let k=M.width/x,$=Math.max(0,Math.min(M.bevel,M.depth*.24)),Y=$/k,ct=(M.depth-2*$)/k,q=new g.ExtrudeGeometry(R,{depth:ct,steps:1,curveSegments:M.curveSegments,bevelEnabled:Y>0,bevelSegments:M.bevelSegments,bevelThickness:Y,bevelSize:Y,bevelOffset:-Y});m(g,q,{bevelEnabled:Y>0,depth:ct}),q.rotateX(Math.PI),q.translate(-(F+x/2),K+w/2,ct/2),q.scale(k,k,k),q.computeBoundingBox(),q.computeBoundingSphere();let it=S?.isTexture?S:S?.texture||null,U=new g.MeshPhysicalMaterial({name:"LARGO polished chrome",flatShading:!1,color:M.color,metalness:1,roughness:M.roughness,envMap:it,envMapIntensity:M.envMapIntensity,clearcoat:.32,clearcoatRoughness:.055,transmission:0,transparent:!1,opacity:1,side:g.FrontSide,depthWrite:!0,depthTest:!0}),pt=new g.Mesh(q,U);pt.name="LARGO full SVG extrusion";let dt=new g.Group;dt.name="LARGO chrome wordmark",dt.add(pt);let _t=q.boundingBox.getSize(new g.Vector3);return dt.userData.logo={sourceViewBox:[F,K,x,w],shapeCount:R.length,holeCount:R.reduce((Pt,Ot)=>Pt+Ot.holes.length,0),width:_t.x,height:_t.y,depth:_t.z,svgUnitInWorld:k},dt.userData.dispose=()=>{q.dispose(),U.dispose()},dt}}})();})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
