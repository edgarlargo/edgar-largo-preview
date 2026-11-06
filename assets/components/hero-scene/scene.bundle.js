"use strict";(()=>{var Eh=0,Fl=1,Ch=2;var Xc=1,Rh=2,En=3,mn=0,Se=1,Rn=2,dn=0,Zn=1,Ol=2,Bl=3,zl=4,Ph=5,hi=100,Ih=101,Lh=102,Dh=103,Uh=104,Nh=200,Fh=201,Oh=202,Bh=203,Fa=204,Oa=205,zh=206,kh=207,Vh=208,Gh=209,Hh=210,Wh=211,Xh=212,qh=213,Yh=214,Ba=0,za=1,ka=2,qi=3,Va=4,Ga=5,Ha=6,Wa=7,qc=0,Zh=1,Jh=2,pn=0,$h=1,Kh=2,Qh=3,jh=4,tu=5,eu=6,nu=7;var Yc=300,Yi=301,Zi=302,Xa=303,qa=304,Jr=306,Ya=1e3,fi=1001,Za=1002,$e=1003,iu=1004;var zs=1005;var Xe=1006,ia=1007;var di=1008;var Dn=1009,Zc=1010,Jc=1011,Ss=1012,ul=1013,pi=1014,In=1015,xi=1016,fl=1017,dl=1018,Ji=1020,$c=35902,Kc=1021,Qc=1022,qe=1023,jc=1024,th=1025,Hi=1026,$i=1027,eh=1028,pl=1029,nh=1030,ml=1031;var gl=1033,fr=33776,dr=33777,pr=33778,mr=33779,Ja=35840,$a=35841,Ka=35842,Qa=35843,ja=36196,to=37492,eo=37496,no=37808,io=37809,so=37810,ro=37811,ao=37812,oo=37813,lo=37814,co=37815,ho=37816,uo=37817,fo=37818,po=37819,mo=37820,go=37821,gr=36492,_o=36494,xo=36495,ih=36283,yo=36284,vo=36285,Mo=36286;var xr=2300,So=2301,sa=2302,kl=2400,Vl=2401,Gl=2402;var su=3200,ru=3201;var sh=0,au=1,qn="",ke="srgb",xn="srgb-linear",_l="display-p3",$r="display-p3-linear",yr="linear",ae="srgb",vr="rec709",Mr="p3";var Ti=7680;var Hl=519,ou=512,lu=513,cu=514,rh=515,hu=516,uu=517,fu=518,du=519,Wl=35044,ah=35048;var Xl="300 es",Ln=2e3,Sr=2001,Kn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let s=this._listeners[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},Pe=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ql=1234567,_s=Math.PI/180,bs=180/Math.PI;function yi(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Pe[i&255]+Pe[i>>8&255]+Pe[i>>16&255]+Pe[i>>24&255]+"-"+Pe[t&255]+Pe[t>>8&255]+"-"+Pe[t>>16&15|64]+Pe[t>>24&255]+"-"+Pe[e&63|128]+Pe[e>>8&255]+"-"+Pe[e>>16&255]+Pe[e>>24&255]+Pe[n&255]+Pe[n>>8&255]+Pe[n>>16&255]+Pe[n>>24&255]).toLowerCase()}function Me(i,t,e){return Math.max(t,Math.min(e,i))}function xl(i,t){return(i%t+t)%t}function pu(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function mu(i,t,e){return i!==t?(e-i)/(t-i):0}function xs(i,t,e){return(1-e)*i+e*t}function gu(i,t,e,n){return xs(i,t,1-Math.exp(-e*n))}function _u(i,t=1){return t-Math.abs(xl(i,t*2)-t)}function xu(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function yu(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function vu(i,t){return i+Math.floor(Math.random()*(t-i+1))}function Mu(i,t){return i+Math.random()*(t-i)}function Su(i){return i*(.5-Math.random())}function bu(i){i!==void 0&&(ql=i);let t=ql+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function wu(i){return i*_s}function Au(i){return i*bs}function Tu(i){return(i&i-1)===0&&i!==0}function Eu(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Cu(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Ru(i,t,e,n,s){let r=Math.cos,a=Math.sin,o=r(e/2),l=a(e/2),c=r((t+n)/2),h=a((t+n)/2),f=r((t-n)/2),d=a((t-n)/2),m=r((n-t)/2),x=a((n-t)/2);switch(s){case"XYX":i.set(o*h,l*f,l*d,o*c);break;case"YZY":i.set(l*d,o*h,l*f,o*c);break;case"ZXZ":i.set(l*f,l*d,o*h,o*c);break;case"XZX":i.set(o*h,l*x,l*m,o*c);break;case"YXY":i.set(l*m,o*h,l*x,o*c);break;case"ZYZ":i.set(l*x,l*m,o*h,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function ki(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Fe(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var ti={DEG2RAD:_s,RAD2DEG:bs,generateUUID:yi,clamp:Me,euclideanModulo:xl,mapLinear:pu,inverseLerp:mu,lerp:xs,damp:gu,pingpong:_u,smoothstep:xu,smootherstep:yu,randInt:vu,randFloat:Mu,randFloatSpread:Su,seededRandom:bu,degToRad:wu,radToDeg:Au,isPowerOfTwo:Tu,ceilPowerOfTwo:Eu,floorPowerOfTwo:Cu,setQuaternionFromProperEuler:Ru,normalize:Fe,denormalize:ki},pt=class i{constructor(t=0,e=0){i.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Me(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Gt=class i{constructor(t,e,n,s,r,a,o,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c)}set(t,e,n,s,r,a,o,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],f=n[7],d=n[2],m=n[5],x=n[8],g=s[0],p=s[3],u=s[6],S=s[1],_=s[4],v=s[7],U=s[2],R=s[5],P=s[8];return r[0]=a*g+o*S+l*U,r[3]=a*p+o*_+l*R,r[6]=a*u+o*v+l*P,r[1]=c*g+h*S+f*U,r[4]=c*p+h*_+f*R,r[7]=c*u+h*v+f*P,r[2]=d*g+m*S+x*U,r[5]=d*p+m*_+x*R,r[8]=d*u+m*v+x*P,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],f=h*a-o*c,d=o*l-h*r,m=c*r-a*l,x=e*f+n*d+s*m;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);let g=1/x;return t[0]=f*g,t[1]=(s*c-h*n)*g,t[2]=(o*n-s*a)*g,t[3]=d*g,t[4]=(h*e-s*l)*g,t[5]=(s*r-o*e)*g,t[6]=m*g,t[7]=(n*l-c*e)*g,t[8]=(a*e-n*r)*g,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(ra.makeScale(t,e)),this}rotate(t){return this.premultiply(ra.makeRotation(-t)),this}translate(t,e){return this.premultiply(ra.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},ra=new Gt;function oh(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function br(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Pu(){let i=br("canvas");return i.style.display="block",i}var Yl={};function _r(i){i in Yl||(Yl[i]=!0,console.warn(i))}function Iu(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function Lu(i){let t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Du(i){let t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var Zl=new Gt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Jl=new Gt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),us={[xn]:{transfer:yr,primaries:vr,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i,fromReference:i=>i},[ke]:{transfer:ae,primaries:vr,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[$r]:{transfer:yr,primaries:Mr,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.applyMatrix3(Jl),fromReference:i=>i.applyMatrix3(Zl)},[_l]:{transfer:ae,primaries:Mr,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.convertSRGBToLinear().applyMatrix3(Jl),fromReference:i=>i.applyMatrix3(Zl).convertLinearToSRGB()}},Uu=new Set([xn,$r]),te={enabled:!0,_workingColorSpace:xn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!Uu.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,t,e){if(this.enabled===!1||t===e||!t||!e)return i;let n=us[t].toReference,s=us[e].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,t){return this.convert(i,this._workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this._workingColorSpace)},getPrimaries:function(i){return us[i].primaries},getTransfer:function(i){return i===qn?yr:us[i].transfer},getLuminanceCoefficients:function(i,t=this._workingColorSpace){return i.fromArray(us[t].luminanceCoefficients)}};function Wi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function aa(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Ei,bo=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Ei===void 0&&(Ei=br("canvas")),Ei.width=t.width,Ei.height=t.height;let n=Ei.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Ei}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=br("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Wi(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Wi(e[n]/255)*255):e[n]=Wi(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Nu=0,wr=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Nu++}),this.uuid=yi(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(oa(s[a].image)):r.push(oa(s[a]))}else r=oa(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function oa(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?bo.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Fu=0,Ke=class i extends Kn{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=fi,s=fi,r=Xe,a=di,o=qe,l=Dn,c=i.DEFAULT_ANISOTROPY,h=qn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Fu++}),this.uuid=yi(),this.name="",this.source=new wr(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new pt(0,0),this.repeat=new pt(1,1),this.center=new pt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Gt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Yc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ya:t.x=t.x-Math.floor(t.x);break;case fi:t.x=t.x<0?0:1;break;case Za:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ya:t.y=t.y-Math.floor(t.y);break;case fi:t.y=t.y<0?0:1;break;case Za:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Ke.DEFAULT_IMAGE=null;Ke.DEFAULT_MAPPING=Yc;Ke.DEFAULT_ANISOTROPY=1;var de=class i{constructor(t=0,e=0,n=0,s=1){i.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,c=l[0],h=l[4],f=l[8],d=l[1],m=l[5],x=l[9],g=l[2],p=l[6],u=l[10];if(Math.abs(h-d)<.01&&Math.abs(f-g)<.01&&Math.abs(x-p)<.01){if(Math.abs(h+d)<.1&&Math.abs(f+g)<.1&&Math.abs(x+p)<.1&&Math.abs(c+m+u-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let _=(c+1)/2,v=(m+1)/2,U=(u+1)/2,R=(h+d)/4,P=(f+g)/4,F=(x+p)/4;return _>v&&_>U?_<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(_),s=R/n,r=P/n):v>U?v<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),n=R/s,r=F/s):U<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(U),n=P/r,s=F/r),this.set(n,s,r,e),this}let S=Math.sqrt((p-x)*(p-x)+(f-g)*(f-g)+(d-h)*(d-h));return Math.abs(S)<.001&&(S=1),this.x=(p-x)/S,this.y=(f-g)/S,this.z=(d-h)/S,this.w=Math.acos((c+m+u-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},wo=class extends Kn{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new de(0,0,t,e),this.scissorTest=!1,this.viewport=new de(0,0,t,e);let s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Xe,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new Ke(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new wr(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},an=class extends wo{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Ar=class extends Ke{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=$e,this.minFilter=$e,this.wrapR=fi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Ao=class extends Ke{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=$e,this.minFilter=$e,this.wrapR=fi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var gn=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],f=n[s+3],d=r[a+0],m=r[a+1],x=r[a+2],g=r[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=f;return}if(o===1){t[e+0]=d,t[e+1]=m,t[e+2]=x,t[e+3]=g;return}if(f!==g||l!==d||c!==m||h!==x){let p=1-o,u=l*d+c*m+h*x+f*g,S=u>=0?1:-1,_=1-u*u;if(_>Number.EPSILON){let U=Math.sqrt(_),R=Math.atan2(U,u*S);p=Math.sin(p*R)/U,o=Math.sin(o*R)/U}let v=o*S;if(l=l*p+d*v,c=c*p+m*v,h=h*p+x*v,f=f*p+g*v,p===1-o){let U=1/Math.sqrt(l*l+c*c+h*h+f*f);l*=U,c*=U,h*=U,f*=U}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=f}static multiplyQuaternionsFlat(t,e,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],f=r[a],d=r[a+1],m=r[a+2],x=r[a+3];return t[e]=o*x+h*f+l*m-c*d,t[e+1]=l*x+h*d+c*f-o*m,t[e+2]=c*x+h*m+o*d-l*f,t[e+3]=h*x-o*f-l*d-c*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),f=o(r/2),d=l(n/2),m=l(s/2),x=l(r/2);switch(a){case"XYZ":this._x=d*h*f+c*m*x,this._y=c*m*f-d*h*x,this._z=c*h*x+d*m*f,this._w=c*h*f-d*m*x;break;case"YXZ":this._x=d*h*f+c*m*x,this._y=c*m*f-d*h*x,this._z=c*h*x-d*m*f,this._w=c*h*f+d*m*x;break;case"ZXY":this._x=d*h*f-c*m*x,this._y=c*m*f+d*h*x,this._z=c*h*x+d*m*f,this._w=c*h*f-d*m*x;break;case"ZYX":this._x=d*h*f-c*m*x,this._y=c*m*f+d*h*x,this._z=c*h*x-d*m*f,this._w=c*h*f+d*m*x;break;case"YZX":this._x=d*h*f+c*m*x,this._y=c*m*f+d*h*x,this._z=c*h*x-d*m*f,this._w=c*h*f-d*m*x;break;case"XZY":this._x=d*h*f-c*m*x,this._y=c*m*f-d*h*x,this._z=c*h*x+d*m*f,this._w=c*h*f+d*m*x;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],f=e[10],d=n+o+f;if(d>0){let m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(h-l)*m,this._y=(r-c)*m,this._z=(a-s)*m}else if(n>o&&n>f){let m=2*Math.sqrt(1+n-o-f);this._w=(h-l)/m,this._x=.25*m,this._y=(s+a)/m,this._z=(r+c)/m}else if(o>f){let m=2*Math.sqrt(1+o-n-f);this._w=(r-c)/m,this._x=(s+a)/m,this._y=.25*m,this._z=(l+h)/m}else{let m=2*Math.sqrt(1+f-n-o);this._w=(a-s)/m,this._x=(r+c)/m,this._y=(l+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Me(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,s=this._y,r=this._z,a=this._w,o=a*t._w+n*t._x+s*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;let l=1-o*o;if(l<=Number.EPSILON){let m=1-e;return this._w=m*a+e*this._w,this._x=m*n+e*this._x,this._y=m*s+e*this._y,this._z=m*r+e*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,o),f=Math.sin((1-e)*h)/c,d=Math.sin(e*h)/c;return this._w=a*f+this._w*d,this._x=n*f+this._x*d,this._y=s*f+this._y*d,this._z=r*f+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},B=class i{constructor(t=0,e=0,n=0){i.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion($l.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion($l.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*n),h=2*(o*e-r*s),f=2*(r*n-a*e);return this.x=e+l*c+a*f-o*h,this.y=n+l*h+o*c-r*f,this.z=s+l*f+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return la.copy(this).projectOnVector(t),this.sub(la)}reflect(t){return this.sub(la.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Me(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},la=new B,$l=new gn,Un=class{constructor(t=new B(1/0,1/0,1/0),e=new B(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(nn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(nn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=nn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,nn):nn.fromBufferAttribute(r,a),nn.applyMatrix4(t.matrixWorld),this.expandByPoint(nn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ks.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ks.copy(n.boundingBox)),ks.applyMatrix4(t.matrixWorld),this.union(ks)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,nn),nn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(fs),Vs.subVectors(this.max,fs),Ci.subVectors(t.a,fs),Ri.subVectors(t.b,fs),Pi.subVectors(t.c,fs),kn.subVectors(Ri,Ci),Vn.subVectors(Pi,Ri),ii.subVectors(Ci,Pi);let e=[0,-kn.z,kn.y,0,-Vn.z,Vn.y,0,-ii.z,ii.y,kn.z,0,-kn.x,Vn.z,0,-Vn.x,ii.z,0,-ii.x,-kn.y,kn.x,0,-Vn.y,Vn.x,0,-ii.y,ii.x,0];return!ca(e,Ci,Ri,Pi,Vs)||(e=[1,0,0,0,1,0,0,0,1],!ca(e,Ci,Ri,Pi,Vs))?!1:(Gs.crossVectors(kn,Vn),e=[Gs.x,Gs.y,Gs.z],ca(e,Ci,Ri,Pi,Vs))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,nn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(nn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Mn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Mn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Mn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Mn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Mn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Mn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Mn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Mn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Mn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},Mn=[new B,new B,new B,new B,new B,new B,new B,new B],nn=new B,ks=new Un,Ci=new B,Ri=new B,Pi=new B,kn=new B,Vn=new B,ii=new B,fs=new B,Vs=new B,Gs=new B,si=new B;function ca(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){si.fromArray(i,r);let o=s.x*Math.abs(si.x)+s.y*Math.abs(si.y)+s.z*Math.abs(si.z),l=t.dot(si),c=e.dot(si),h=n.dot(si);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var Ou=new Un,ds=new B,ha=new B,Qn=class{constructor(t=new B,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Ou.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ds.subVectors(t,this.center);let e=ds.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(ds,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ha.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ds.copy(t.center).add(ha)),this.expandByPoint(ds.copy(t.center).sub(ha))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},Sn=new B,ua=new B,Hs=new B,Gn=new B,fa=new B,Ws=new B,da=new B,ws=class{constructor(t=new B,e=new B(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Sn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Sn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Sn.copy(this.origin).addScaledVector(this.direction,e),Sn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){ua.copy(t).add(e).multiplyScalar(.5),Hs.copy(e).sub(t).normalize(),Gn.copy(this.origin).sub(ua);let r=t.distanceTo(e)*.5,a=-this.direction.dot(Hs),o=Gn.dot(this.direction),l=-Gn.dot(Hs),c=Gn.lengthSq(),h=Math.abs(1-a*a),f,d,m,x;if(h>0)if(f=a*l-o,d=a*o-l,x=r*h,f>=0)if(d>=-x)if(d<=x){let g=1/h;f*=g,d*=g,m=f*(f+a*d+2*o)+d*(a*f+d+2*l)+c}else d=r,f=Math.max(0,-(a*d+o)),m=-f*f+d*(d+2*l)+c;else d=-r,f=Math.max(0,-(a*d+o)),m=-f*f+d*(d+2*l)+c;else d<=-x?(f=Math.max(0,-(-a*r+o)),d=f>0?-r:Math.min(Math.max(-r,-l),r),m=-f*f+d*(d+2*l)+c):d<=x?(f=0,d=Math.min(Math.max(-r,-l),r),m=d*(d+2*l)+c):(f=Math.max(0,-(a*r+o)),d=f>0?r:Math.min(Math.max(-r,-l),r),m=-f*f+d*(d+2*l)+c);else d=a>0?-r:r,f=Math.max(0,-(a*d+o)),m=-f*f+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(ua).addScaledVector(Hs,d),m}intersectSphere(t,e){Sn.subVectors(t.center,this.origin);let n=Sn.dot(this.direction),s=Sn.dot(Sn)-n*n,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,s=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,s=(t.min.x-d.x)*c),h>=0?(r=(t.min.y-d.y)*h,a=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,a=(t.min.y-d.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),f>=0?(o=(t.min.z-d.z)*f,l=(t.max.z-d.z)*f):(o=(t.max.z-d.z)*f,l=(t.min.z-d.z)*f),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Sn)!==null}intersectTriangle(t,e,n,s,r){fa.subVectors(e,t),Ws.subVectors(n,t),da.crossVectors(fa,Ws);let a=this.direction.dot(da),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Gn.subVectors(this.origin,t);let l=o*this.direction.dot(Ws.crossVectors(Gn,Ws));if(l<0)return null;let c=o*this.direction.dot(fa.cross(Gn));if(c<0||l+c>a)return null;let h=-o*Gn.dot(da);return h<0?null:this.at(h/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},re=class i{constructor(t,e,n,s,r,a,o,l,c,h,f,d,m,x,g,p){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c,h,f,d,m,x,g,p)}set(t,e,n,s,r,a,o,l,c,h,f,d,m,x,g,p){let u=this.elements;return u[0]=t,u[4]=e,u[8]=n,u[12]=s,u[1]=r,u[5]=a,u[9]=o,u[13]=l,u[2]=c,u[6]=h,u[10]=f,u[14]=d,u[3]=m,u[7]=x,u[11]=g,u[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,s=1/Ii.setFromMatrixColumn(t,0).length(),r=1/Ii.setFromMatrixColumn(t,1).length(),a=1/Ii.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),f=Math.sin(r);if(t.order==="XYZ"){let d=a*h,m=a*f,x=o*h,g=o*f;e[0]=l*h,e[4]=-l*f,e[8]=c,e[1]=m+x*c,e[5]=d-g*c,e[9]=-o*l,e[2]=g-d*c,e[6]=x+m*c,e[10]=a*l}else if(t.order==="YXZ"){let d=l*h,m=l*f,x=c*h,g=c*f;e[0]=d+g*o,e[4]=x*o-m,e[8]=a*c,e[1]=a*f,e[5]=a*h,e[9]=-o,e[2]=m*o-x,e[6]=g+d*o,e[10]=a*l}else if(t.order==="ZXY"){let d=l*h,m=l*f,x=c*h,g=c*f;e[0]=d-g*o,e[4]=-a*f,e[8]=x+m*o,e[1]=m+x*o,e[5]=a*h,e[9]=g-d*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){let d=a*h,m=a*f,x=o*h,g=o*f;e[0]=l*h,e[4]=x*c-m,e[8]=d*c+g,e[1]=l*f,e[5]=g*c+d,e[9]=m*c-x,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){let d=a*l,m=a*c,x=o*l,g=o*c;e[0]=l*h,e[4]=g-d*f,e[8]=x*f+m,e[1]=f,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=m*f+x,e[10]=d-g*f}else if(t.order==="XZY"){let d=a*l,m=a*c,x=o*l,g=o*c;e[0]=l*h,e[4]=-f,e[8]=c*h,e[1]=d*f+g,e[5]=a*h,e[9]=m*f-x,e[2]=x*f-m,e[6]=o*h,e[10]=g*f+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Bu,t,zu)}lookAt(t,e,n){let s=this.elements;return He.subVectors(t,e),He.lengthSq()===0&&(He.z=1),He.normalize(),Hn.crossVectors(n,He),Hn.lengthSq()===0&&(Math.abs(n.z)===1?He.x+=1e-4:He.z+=1e-4,He.normalize(),Hn.crossVectors(n,He)),Hn.normalize(),Xs.crossVectors(He,Hn),s[0]=Hn.x,s[4]=Xs.x,s[8]=He.x,s[1]=Hn.y,s[5]=Xs.y,s[9]=He.y,s[2]=Hn.z,s[6]=Xs.z,s[10]=He.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],f=n[5],d=n[9],m=n[13],x=n[2],g=n[6],p=n[10],u=n[14],S=n[3],_=n[7],v=n[11],U=n[15],R=s[0],P=s[4],F=s[8],$=s[12],y=s[1],w=s[5],k=s[9],K=s[13],J=s[2],ot=s[6],H=s[10],it=s[14],N=s[3],mt=s[7],ft=s[11],_t=s[15];return r[0]=a*R+o*y+l*J+c*N,r[4]=a*P+o*w+l*ot+c*mt,r[8]=a*F+o*k+l*H+c*ft,r[12]=a*$+o*K+l*it+c*_t,r[1]=h*R+f*y+d*J+m*N,r[5]=h*P+f*w+d*ot+m*mt,r[9]=h*F+f*k+d*H+m*ft,r[13]=h*$+f*K+d*it+m*_t,r[2]=x*R+g*y+p*J+u*N,r[6]=x*P+g*w+p*ot+u*mt,r[10]=x*F+g*k+p*H+u*ft,r[14]=x*$+g*K+p*it+u*_t,r[3]=S*R+_*y+v*J+U*N,r[7]=S*P+_*w+v*ot+U*mt,r[11]=S*F+_*k+v*H+U*ft,r[15]=S*$+_*K+v*it+U*_t,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],f=t[6],d=t[10],m=t[14],x=t[3],g=t[7],p=t[11],u=t[15];return x*(+r*l*f-s*c*f-r*o*d+n*c*d+s*o*m-n*l*m)+g*(+e*l*m-e*c*d+r*a*d-s*a*m+s*c*h-r*l*h)+p*(+e*c*f-e*o*m-r*a*f+n*a*m+r*o*h-n*c*h)+u*(-s*o*h-e*l*f+e*o*d+s*a*f-n*a*d+n*l*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],f=t[9],d=t[10],m=t[11],x=t[12],g=t[13],p=t[14],u=t[15],S=f*p*c-g*d*c+g*l*m-o*p*m-f*l*u+o*d*u,_=x*d*c-h*p*c-x*l*m+a*p*m+h*l*u-a*d*u,v=h*g*c-x*f*c+x*o*m-a*g*m-h*o*u+a*f*u,U=x*f*l-h*g*l-x*o*d+a*g*d+h*o*p-a*f*p,R=e*S+n*_+s*v+r*U;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let P=1/R;return t[0]=S*P,t[1]=(g*d*r-f*p*r-g*s*m+n*p*m+f*s*u-n*d*u)*P,t[2]=(o*p*r-g*l*r+g*s*c-n*p*c-o*s*u+n*l*u)*P,t[3]=(f*l*r-o*d*r-f*s*c+n*d*c+o*s*m-n*l*m)*P,t[4]=_*P,t[5]=(h*p*r-x*d*r+x*s*m-e*p*m-h*s*u+e*d*u)*P,t[6]=(x*l*r-a*p*r-x*s*c+e*p*c+a*s*u-e*l*u)*P,t[7]=(a*d*r-h*l*r+h*s*c-e*d*c-a*s*m+e*l*m)*P,t[8]=v*P,t[9]=(x*f*r-h*g*r-x*n*m+e*g*m+h*n*u-e*f*u)*P,t[10]=(a*g*r-x*o*r+x*n*c-e*g*c-a*n*u+e*o*u)*P,t[11]=(h*o*r-a*f*r-h*n*c+e*f*c+a*n*m-e*o*m)*P,t[12]=U*P,t[13]=(h*g*s-x*f*s+x*n*d-e*g*d-h*n*p+e*f*p)*P,t[14]=(x*o*s-a*g*s-x*n*l+e*g*l+a*n*p-e*o*p)*P,t[15]=(a*f*s-h*o*s+h*n*l-e*f*l-a*n*d+e*o*d)*P,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,f=o+o,d=r*c,m=r*h,x=r*f,g=a*h,p=a*f,u=o*f,S=l*c,_=l*h,v=l*f,U=n.x,R=n.y,P=n.z;return s[0]=(1-(g+u))*U,s[1]=(m+v)*U,s[2]=(x-_)*U,s[3]=0,s[4]=(m-v)*R,s[5]=(1-(d+u))*R,s[6]=(p+S)*R,s[7]=0,s[8]=(x+_)*P,s[9]=(p-S)*P,s[10]=(1-(d+g))*P,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements,r=Ii.set(s[0],s[1],s[2]).length(),a=Ii.set(s[4],s[5],s[6]).length(),o=Ii.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],sn.copy(this);let c=1/r,h=1/a,f=1/o;return sn.elements[0]*=c,sn.elements[1]*=c,sn.elements[2]*=c,sn.elements[4]*=h,sn.elements[5]*=h,sn.elements[6]*=h,sn.elements[8]*=f,sn.elements[9]*=f,sn.elements[10]*=f,e.setFromRotationMatrix(sn),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,s,r,a,o=Ln){let l=this.elements,c=2*r/(e-t),h=2*r/(n-s),f=(e+t)/(e-t),d=(n+s)/(n-s),m,x;if(o===Ln)m=-(a+r)/(a-r),x=-2*a*r/(a-r);else if(o===Sr)m=-a/(a-r),x=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=Ln){let l=this.elements,c=1/(e-t),h=1/(n-s),f=1/(a-r),d=(e+t)*c,m=(n+s)*h,x,g;if(o===Ln)x=(a+r)*f,g=-2*f;else if(o===Sr)x=r*f,g=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=g,l[14]=-x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},Ii=new B,sn=new re,Bu=new B(0,0,0),zu=new B(1,1,1),Hn=new B,Xs=new B,He=new B,Kl=new re,Ql=new gn,Qe=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],f=s[2],d=s[6],m=s[10];switch(e){case"XYZ":this._y=Math.asin(Me(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Me(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(Me(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,m),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Me(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,m),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Me(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-Me(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Kl.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Kl,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Ql.setFromEuler(this),this.setFromQuaternion(Ql,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Qe.DEFAULT_ORDER="XYZ";var As=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},ku=0,jl=new B,Li=new gn,bn=new re,qs=new B,ps=new B,Vu=new B,Gu=new gn,tc=new B(1,0,0),ec=new B(0,1,0),nc=new B(0,0,1),ic={type:"added"},Hu={type:"removed"},Di={type:"childadded",child:null},pa={type:"childremoved",child:null},De=class i extends Kn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ku++}),this.uuid=yi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new B,e=new Qe,n=new gn,s=new B(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new re},normalMatrix:{value:new Gt}}),this.matrix=new re,this.matrixWorld=new re,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new As,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Li.setFromAxisAngle(t,e),this.quaternion.multiply(Li),this}rotateOnWorldAxis(t,e){return Li.setFromAxisAngle(t,e),this.quaternion.premultiply(Li),this}rotateX(t){return this.rotateOnAxis(tc,t)}rotateY(t){return this.rotateOnAxis(ec,t)}rotateZ(t){return this.rotateOnAxis(nc,t)}translateOnAxis(t,e){return jl.copy(t).applyQuaternion(this.quaternion),this.position.add(jl.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(tc,t)}translateY(t){return this.translateOnAxis(ec,t)}translateZ(t){return this.translateOnAxis(nc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(bn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?qs.copy(t):qs.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),ps.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?bn.lookAt(ps,qs,this.up):bn.lookAt(qs,ps,this.up),this.quaternion.setFromRotationMatrix(bn),s&&(bn.extractRotation(s.matrixWorld),Li.setFromRotationMatrix(bn),this.quaternion.premultiply(Li.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(ic),Di.child=t,this.dispatchEvent(Di),Di.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Hu),pa.child=t,this.dispatchEvent(pa),pa.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),bn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),bn.multiply(t.parent.matrixWorld)),t.applyMatrix4(bn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(ic),Di.child=t,this.dispatchEvent(Di),Di.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ps,t,Vu),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ps,Gu,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let f=l[c];r(t.shapes,f)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){let o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),f=a(t.shapes),d=a(t.skeletons),m=a(t.animations),x=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),f.length>0&&(n.shapes=f),d.length>0&&(n.skeletons=d),m.length>0&&(n.animations=m),x.length>0&&(n.nodes=x)}return n.object=s,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}};De.DEFAULT_UP=new B(0,1,0);De.DEFAULT_MATRIX_AUTO_UPDATE=!0;De.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var rn=new B,wn=new B,ma=new B,An=new B,Ui=new B,Ni=new B,sc=new B,ga=new B,_a=new B,xa=new B,ya=new de,va=new de,Ma=new de,Pn=class i{constructor(t=new B,e=new B,n=new B){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),rn.subVectors(t,e),s.cross(rn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){rn.subVectors(s,e),wn.subVectors(n,e),ma.subVectors(t,e);let a=rn.dot(rn),o=rn.dot(wn),l=rn.dot(ma),c=wn.dot(wn),h=wn.dot(ma),f=a*c-o*o;if(f===0)return r.set(0,0,0),null;let d=1/f,m=(c*l-o*h)*d,x=(a*h-o*l)*d;return r.set(1-m-x,x,m)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,An)===null?!1:An.x>=0&&An.y>=0&&An.x+An.y<=1}static getInterpolation(t,e,n,s,r,a,o,l){return this.getBarycoord(t,e,n,s,An)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,An.x),l.addScaledVector(a,An.y),l.addScaledVector(o,An.z),l)}static getInterpolatedAttribute(t,e,n,s,r,a){return ya.setScalar(0),va.setScalar(0),Ma.setScalar(0),ya.fromBufferAttribute(t,e),va.fromBufferAttribute(t,n),Ma.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(ya,r.x),a.addScaledVector(va,r.y),a.addScaledVector(Ma,r.z),a}static isFrontFacing(t,e,n,s){return rn.subVectors(n,e),wn.subVectors(t,e),rn.cross(wn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return rn.subVectors(this.c,this.b),wn.subVectors(this.a,this.b),rn.cross(wn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,a,o;Ui.subVectors(s,n),Ni.subVectors(r,n),ga.subVectors(t,n);let l=Ui.dot(ga),c=Ni.dot(ga);if(l<=0&&c<=0)return e.copy(n);_a.subVectors(t,s);let h=Ui.dot(_a),f=Ni.dot(_a);if(h>=0&&f<=h)return e.copy(s);let d=l*f-h*c;if(d<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(n).addScaledVector(Ui,a);xa.subVectors(t,r);let m=Ui.dot(xa),x=Ni.dot(xa);if(x>=0&&m<=x)return e.copy(r);let g=m*c-l*x;if(g<=0&&c>=0&&x<=0)return o=c/(c-x),e.copy(n).addScaledVector(Ni,o);let p=h*x-m*f;if(p<=0&&f-h>=0&&m-x>=0)return sc.subVectors(r,s),o=(f-h)/(f-h+(m-x)),e.copy(s).addScaledVector(sc,o);let u=1/(p+g+d);return a=g*u,o=d*u,e.copy(n).addScaledVector(Ui,a).addScaledVector(Ni,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},lh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Wn={h:0,s:0,l:0},Ys={h:0,s:0,l:0};function Sa(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var qt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=ke){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,te.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=te.workingColorSpace){return this.r=t,this.g=e,this.b=n,te.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=te.workingColorSpace){if(t=xl(t,1),e=Me(e,0,1),n=Me(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=Sa(a,r,t+1/3),this.g=Sa(a,r,t),this.b=Sa(a,r,t-1/3)}return te.toWorkingColorSpace(this,s),this}setStyle(t,e=ke){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=ke){let n=lh[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Wi(t.r),this.g=Wi(t.g),this.b=Wi(t.b),this}copyLinearToSRGB(t){return this.r=aa(t.r),this.g=aa(t.g),this.b=aa(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ke){return te.fromWorkingColorSpace(Ie.copy(this),t),Math.round(Me(Ie.r*255,0,255))*65536+Math.round(Me(Ie.g*255,0,255))*256+Math.round(Me(Ie.b*255,0,255))}getHexString(t=ke){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=te.workingColorSpace){te.fromWorkingColorSpace(Ie.copy(this),e);let n=Ie.r,s=Ie.g,r=Ie.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let f=a-o;switch(c=h<=.5?f/(a+o):f/(2-a-o),a){case n:l=(s-r)/f+(s<r?6:0);break;case s:l=(r-n)/f+2;break;case r:l=(n-s)/f+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=te.workingColorSpace){return te.fromWorkingColorSpace(Ie.copy(this),e),t.r=Ie.r,t.g=Ie.g,t.b=Ie.b,t}getStyle(t=ke){te.fromWorkingColorSpace(Ie.copy(this),t);let e=Ie.r,n=Ie.g,s=Ie.b;return t!==ke?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Wn),this.setHSL(Wn.h+t,Wn.s+e,Wn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Wn),t.getHSL(Ys);let n=xs(Wn.h,Ys.h,e),s=xs(Wn.s,Ys.s,e),r=xs(Wn.l,Ys.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Ie=new qt;qt.NAMES=lh;var Wu=0,jn=class extends Kn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Wu++}),this.uuid=yi(),this.name="",this.type="Material",this.blending=Zn,this.side=mn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Fa,this.blendDst=Oa,this.blendEquation=hi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new qt(0,0,0),this.blendAlpha=0,this.depthFunc=qi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Hl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ti,this.stencilZFail=Ti,this.stencilZPass=Ti,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Zn&&(n.blending=this.blending),this.side!==mn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Fa&&(n.blendSrc=this.blendSrc),this.blendDst!==Oa&&(n.blendDst=this.blendDst),this.blendEquation!==hi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==qi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Hl&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ti&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ti&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ti&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},Tr=class extends jn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new qt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Qe,this.combine=qc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var _e=new B,Zs=new pt,Le=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Wl,this.updateRanges=[],this.gpuType=In,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Zs.fromBufferAttribute(this,e),Zs.applyMatrix3(t),this.setXY(e,Zs.x,Zs.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)_e.fromBufferAttribute(this,e),_e.applyMatrix3(t),this.setXYZ(e,_e.x,_e.y,_e.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)_e.fromBufferAttribute(this,e),_e.applyMatrix4(t),this.setXYZ(e,_e.x,_e.y,_e.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)_e.fromBufferAttribute(this,e),_e.applyNormalMatrix(t),this.setXYZ(e,_e.x,_e.y,_e.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)_e.fromBufferAttribute(this,e),_e.transformDirection(t),this.setXYZ(e,_e.x,_e.y,_e.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=ki(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Fe(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=ki(e,this.array)),e}setX(t,e){return this.normalized&&(e=Fe(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=ki(e,this.array)),e}setY(t,e){return this.normalized&&(e=Fe(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=ki(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Fe(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=ki(e,this.array)),e}setW(t,e){return this.normalized&&(e=Fe(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Fe(e,this.array),n=Fe(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Fe(e,this.array),n=Fe(n,this.array),s=Fe(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=Fe(e,this.array),n=Fe(n,this.array),s=Fe(s,this.array),r=Fe(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Wl&&(t.usage=this.usage),t}};var Er=class extends Le{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Cr=class extends Le{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var fe=class extends Le{constructor(t,e,n){super(new Float32Array(t),e,n)}},Xu=0,Je=new re,ba=new De,Fi=new B,We=new Un,ms=new Un,ve=new B,Te=class i extends Kn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Xu++}),this.uuid=yi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(oh(t)?Cr:Er)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Gt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Je.makeRotationFromQuaternion(t),this.applyMatrix4(Je),this}rotateX(t){return Je.makeRotationX(t),this.applyMatrix4(Je),this}rotateY(t){return Je.makeRotationY(t),this.applyMatrix4(Je),this}rotateZ(t){return Je.makeRotationZ(t),this.applyMatrix4(Je),this}translate(t,e,n){return Je.makeTranslation(t,e,n),this.applyMatrix4(Je),this}scale(t,e,n){return Je.makeScale(t,e,n),this.applyMatrix4(Je),this}lookAt(t){return ba.lookAt(t),ba.updateMatrix(),this.applyMatrix4(ba.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Fi).negate(),this.translate(Fi.x,Fi.y,Fi.z),this}setFromPoints(t){let e=[];for(let n=0,s=t.length;n<s;n++){let r=t[n];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new fe(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Un);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new B(-1/0,-1/0,-1/0),new B(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];We.setFromBufferAttribute(r),this.morphTargetsRelative?(ve.addVectors(this.boundingBox.min,We.min),this.boundingBox.expandByPoint(ve),ve.addVectors(this.boundingBox.max,We.max),this.boundingBox.expandByPoint(ve)):(this.boundingBox.expandByPoint(We.min),this.boundingBox.expandByPoint(We.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Qn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new B,1/0);return}if(t){let n=this.boundingSphere.center;if(We.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];ms.setFromBufferAttribute(o),this.morphTargetsRelative?(ve.addVectors(We.min,ms.min),We.expandByPoint(ve),ve.addVectors(We.max,ms.max),We.expandByPoint(ve)):(We.expandByPoint(ms.min),We.expandByPoint(ms.max))}We.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)ve.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(ve));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)ve.fromBufferAttribute(o,c),l&&(Fi.fromBufferAttribute(t,c),ve.add(Fi)),s=Math.max(s,n.distanceToSquared(ve))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Le(new Float32Array(4*n.count),4));let a=this.getAttribute("tangent"),o=[],l=[];for(let F=0;F<n.count;F++)o[F]=new B,l[F]=new B;let c=new B,h=new B,f=new B,d=new pt,m=new pt,x=new pt,g=new B,p=new B;function u(F,$,y){c.fromBufferAttribute(n,F),h.fromBufferAttribute(n,$),f.fromBufferAttribute(n,y),d.fromBufferAttribute(r,F),m.fromBufferAttribute(r,$),x.fromBufferAttribute(r,y),h.sub(c),f.sub(c),m.sub(d),x.sub(d);let w=1/(m.x*x.y-x.x*m.y);isFinite(w)&&(g.copy(h).multiplyScalar(x.y).addScaledVector(f,-m.y).multiplyScalar(w),p.copy(f).multiplyScalar(m.x).addScaledVector(h,-x.x).multiplyScalar(w),o[F].add(g),o[$].add(g),o[y].add(g),l[F].add(p),l[$].add(p),l[y].add(p))}let S=this.groups;S.length===0&&(S=[{start:0,count:t.count}]);for(let F=0,$=S.length;F<$;++F){let y=S[F],w=y.start,k=y.count;for(let K=w,J=w+k;K<J;K+=3)u(t.getX(K+0),t.getX(K+1),t.getX(K+2))}let _=new B,v=new B,U=new B,R=new B;function P(F){U.fromBufferAttribute(s,F),R.copy(U);let $=o[F];_.copy($),_.sub(U.multiplyScalar(U.dot($))).normalize(),v.crossVectors(R,$);let w=v.dot(l[F])<0?-1:1;a.setXYZW(F,_.x,_.y,_.z,w)}for(let F=0,$=S.length;F<$;++F){let y=S[F],w=y.start,k=y.count;for(let K=w,J=w+k;K<J;K+=3)P(t.getX(K+0)),P(t.getX(K+1)),P(t.getX(K+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Le(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,m=n.count;d<m;d++)n.setXYZ(d,0,0,0);let s=new B,r=new B,a=new B,o=new B,l=new B,c=new B,h=new B,f=new B;if(t)for(let d=0,m=t.count;d<m;d+=3){let x=t.getX(d+0),g=t.getX(d+1),p=t.getX(d+2);s.fromBufferAttribute(e,x),r.fromBufferAttribute(e,g),a.fromBufferAttribute(e,p),h.subVectors(a,r),f.subVectors(s,r),h.cross(f),o.fromBufferAttribute(n,x),l.fromBufferAttribute(n,g),c.fromBufferAttribute(n,p),o.add(h),l.add(h),c.add(h),n.setXYZ(x,o.x,o.y,o.z),n.setXYZ(g,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let d=0,m=e.count;d<m;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),h.subVectors(a,r),f.subVectors(s,r),h.cross(f),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)ve.fromBufferAttribute(t,e),ve.normalize(),t.setXYZ(e,ve.x,ve.y,ve.z)}toNonIndexed(){function t(o,l){let c=o.array,h=o.itemSize,f=o.normalized,d=new c.constructor(l.length*h),m=0,x=0;for(let g=0,p=l.length;g<p;g++){o.isInterleavedBufferAttribute?m=l[g]*o.data.stride+o.offset:m=l[g]*h;for(let u=0;u<h;u++)d[x++]=c[m++]}return new Le(d,h,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=t(l,n);e.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,f=c.length;h<f;h++){let d=c[h],m=t(d,n);l.push(m)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let f=0,d=c.length;f<d;f++){let m=c[f];h.push(m.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],f=r[c];for(let d=0,m=f.length;d<m;d++)h.push(f[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let c=0,h=a.length;c<h;c++){let f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},rc=new re,ri=new ws,Js=new Qn,ac=new B,$s=new B,Ks=new B,Qs=new B,wa=new B,js=new B,oc=new B,tr=new B,Ae=class extends De{constructor(t=new Te,e=new Tr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(r&&o){js.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],f=r[l];h!==0&&(wa.fromBufferAttribute(f,t),a?js.addScaledVector(wa,h):js.addScaledVector(wa.sub(e),h))}e.add(js)}return e}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Js.copy(n.boundingSphere),Js.applyMatrix4(r),ri.copy(t.ray).recast(t.near),!(Js.containsPoint(ri.origin)===!1&&(ri.intersectSphere(Js,ac)===null||ri.origin.distanceToSquared(ac)>(t.far-t.near)**2))&&(rc.copy(r).invert(),ri.copy(t.ray).applyMatrix4(rc),!(n.boundingBox!==null&&ri.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,ri)))}_computeIntersections(t,e,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,f=r.attributes.normal,d=r.groups,m=r.drawRange;if(o!==null)if(Array.isArray(a))for(let x=0,g=d.length;x<g;x++){let p=d[x],u=a[p.materialIndex],S=Math.max(p.start,m.start),_=Math.min(o.count,Math.min(p.start+p.count,m.start+m.count));for(let v=S,U=_;v<U;v+=3){let R=o.getX(v),P=o.getX(v+1),F=o.getX(v+2);s=er(this,u,t,n,c,h,f,R,P,F),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{let x=Math.max(0,m.start),g=Math.min(o.count,m.start+m.count);for(let p=x,u=g;p<u;p+=3){let S=o.getX(p),_=o.getX(p+1),v=o.getX(p+2);s=er(this,a,t,n,c,h,f,S,_,v),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let x=0,g=d.length;x<g;x++){let p=d[x],u=a[p.materialIndex],S=Math.max(p.start,m.start),_=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let v=S,U=_;v<U;v+=3){let R=v,P=v+1,F=v+2;s=er(this,u,t,n,c,h,f,R,P,F),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{let x=Math.max(0,m.start),g=Math.min(l.count,m.start+m.count);for(let p=x,u=g;p<u;p+=3){let S=p,_=p+1,v=p+2;s=er(this,a,t,n,c,h,f,S,_,v),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}}};function qu(i,t,e,n,s,r,a,o){let l;if(t.side===Se?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,t.side===mn,o),l===null)return null;tr.copy(o),tr.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(tr);return c<e.near||c>e.far?null:{distance:c,point:tr.clone(),object:i}}function er(i,t,e,n,s,r,a,o,l,c){i.getVertexPosition(o,$s),i.getVertexPosition(l,Ks),i.getVertexPosition(c,Qs);let h=qu(i,t,e,n,$s,Ks,Qs,oc);if(h){let f=new B;Pn.getBarycoord(oc,$s,Ks,Qs,f),s&&(h.uv=Pn.getInterpolatedAttribute(s,o,l,c,f,new pt)),r&&(h.uv1=Pn.getInterpolatedAttribute(r,o,l,c,f,new pt)),a&&(h.normal=Pn.getInterpolatedAttribute(a,o,l,c,f,new B),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a:o,b:l,c,normal:new B,materialIndex:0};Pn.getNormal($s,Ks,Qs,d.normal),h.face=d,h.barycoord=f}return h}var Ts=class i extends Te{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],f=[],d=0,m=0;x("z","y","x",-1,-1,n,e,t,a,r,0),x("z","y","x",1,-1,n,e,-t,a,r,1),x("x","z","y",1,1,t,n,e,s,a,2),x("x","z","y",1,-1,t,n,-e,s,a,3),x("x","y","z",1,-1,t,e,n,s,r,4),x("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new fe(c,3)),this.setAttribute("normal",new fe(h,3)),this.setAttribute("uv",new fe(f,2));function x(g,p,u,S,_,v,U,R,P,F,$){let y=v/P,w=U/F,k=v/2,K=U/2,J=R/2,ot=P+1,H=F+1,it=0,N=0,mt=new B;for(let ft=0;ft<H;ft++){let _t=ft*w-K;for(let Pt=0;Pt<ot;Pt++){let Ot=Pt*y-k;mt[g]=Ot*S,mt[p]=_t*_,mt[u]=J,c.push(mt.x,mt.y,mt.z),mt[g]=0,mt[p]=0,mt[u]=R>0?1:-1,h.push(mt.x,mt.y,mt.z),f.push(Pt/P),f.push(1-ft/F),it+=1}}for(let ft=0;ft<F;ft++)for(let _t=0;_t<P;_t++){let Pt=d+_t+ot*ft,Ot=d+_t+ot*(ft+1),D=d+(_t+1)+ot*(ft+1),L=d+(_t+1)+ot*ft;l.push(Pt,Ot,L),l.push(Ot,D,L),N+=6}o.addGroup(m,N,$),m+=N,d+=it}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function Ki(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Oe(i){let t={};for(let e=0;e<i.length;e++){let n=Ki(i[e]);for(let s in n)t[s]=n[s]}return t}function Yu(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function ch(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:te.workingColorSpace}var Zu={clone:Ki,merge:Oe},Ju=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,$u=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Ve=class extends jn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ju,this.fragmentShader=$u,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ki(t.uniforms),this.uniformsGroups=Yu(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},Qi=class extends De{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new re,this.projectionMatrix=new re,this.projectionMatrixInverse=new re,this.coordinateSystem=Ln}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Xn=new B,lc=new pt,cc=new pt,Be=class extends Qi{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=bs*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(_s*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return bs*2*Math.atan(Math.tan(_s*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Xn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Xn.x,Xn.y).multiplyScalar(-t/Xn.z),Xn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Xn.x,Xn.y).multiplyScalar(-t/Xn.z)}getViewSize(t,e){return this.getViewBounds(t,lc,cc),e.subVectors(cc,lc)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(_s*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},Oi=-90,Bi=1,To=class extends De{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Be(Oi,Bi,t,e);s.layers=this.layers,this.add(s);let r=new Be(Oi,Bi,t,e);r.layers=this.layers,this.add(r);let a=new Be(Oi,Bi,t,e);a.layers=this.layers,this.add(a);let o=new Be(Oi,Bi,t,e);o.layers=this.layers,this.add(o);let l=new Be(Oi,Bi,t,e);l.layers=this.layers,this.add(l);let c=new Be(Oi,Bi,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,l]=e;for(let c of e)this.remove(c);if(t===Ln)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Sr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,f=t.getRenderTarget(),d=t.getActiveCubeFace(),m=t.getActiveMipmapLevel(),x=t.xr.enabled;t.xr.enabled=!1;let g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,a),t.setRenderTarget(n,2,s),t.render(e,o),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=g,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(f,d,m),t.xr.enabled=x,n.texture.needsPMREMUpdate=!0}},Rr=class extends Ke{constructor(t,e,n,s,r,a,o,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:Yi,super(t,e,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Eo=class extends an{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Rr(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Xe}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Ts(5,5,5),r=new Ve({name:"CubemapFromEquirect",uniforms:Ki(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Se,blending:dn});r.uniforms.tEquirect.value=e;let a=new Ae(s,r),o=e.minFilter;return e.minFilter===di&&(e.minFilter=Xe),new To(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,s){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}},Aa=new B,Ku=new B,Qu=new Gt,Cn=class{constructor(t=new B(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=Aa.subVectors(n,e).cross(Ku.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(Aa),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Qu.getNormalMatrix(t),s=this.coplanarPoint(Aa).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},ai=new Qn,nr=new B,Es=class{constructor(t=new Cn,e=new Cn,n=new Cn,s=new Cn,r=new Cn,a=new Cn){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Ln){let n=this.planes,s=t.elements,r=s[0],a=s[1],o=s[2],l=s[3],c=s[4],h=s[5],f=s[6],d=s[7],m=s[8],x=s[9],g=s[10],p=s[11],u=s[12],S=s[13],_=s[14],v=s[15];if(n[0].setComponents(l-r,d-c,p-m,v-u).normalize(),n[1].setComponents(l+r,d+c,p+m,v+u).normalize(),n[2].setComponents(l+a,d+h,p+x,v+S).normalize(),n[3].setComponents(l-a,d-h,p-x,v-S).normalize(),n[4].setComponents(l-o,d-f,p-g,v-_).normalize(),e===Ln)n[5].setComponents(l+o,d+f,p+g,v+_).normalize();else if(e===Sr)n[5].setComponents(o,f,g,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ai.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ai.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ai)}intersectsSprite(t){return ai.center.set(0,0,0),ai.radius=.7071067811865476,ai.applyMatrix4(t.matrixWorld),this.intersectsSphere(ai)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(nr.x=s.normal.x>0?t.max.x:t.min.x,nr.y=s.normal.y>0?t.max.y:t.min.y,nr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(nr)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function hh(){let i=null,t=!1,e=null,n=null;function s(r,a){e(r,a),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function ju(i){let t=new WeakMap;function e(o,l){let c=o.array,h=o.usage,f=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,h),o.onUploadCallback();let m;if(c instanceof Float32Array)m=i.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?m=i.HALF_FLOAT:m=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=i.SHORT;else if(c instanceof Uint32Array)m=i.UNSIGNED_INT;else if(c instanceof Int32Array)m=i.INT;else if(c instanceof Int8Array)m=i.BYTE;else if(c instanceof Uint8Array)m=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:f}}function n(o,l,c){let h=l.array,f=l.updateRanges;if(i.bindBuffer(c,o),f.length===0)i.bufferSubData(c,0,h);else{f.sort((m,x)=>m.start-x.start);let d=0;for(let m=1;m<f.length;m++){let x=f[d],g=f[m];g.start<=x.start+x.count+1?x.count=Math.max(x.count,g.start+g.count-x.start):(++d,f[d]=g)}f.length=d+1;for(let m=0,x=f.length;m<x;m++){let g=f[m];i.bufferSubData(c,g.start*h.BYTES_PER_ELEMENT,h,g.start,g.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(i.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var Pr=class i extends Te{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,f=t/o,d=e/l,m=[],x=[],g=[],p=[];for(let u=0;u<h;u++){let S=u*d-a;for(let _=0;_<c;_++){let v=_*f-r;x.push(v,-S,0),g.push(0,0,1),p.push(_/o),p.push(1-u/l)}}for(let u=0;u<l;u++)for(let S=0;S<o;S++){let _=S+c*u,v=S+c*(u+1),U=S+1+c*(u+1),R=S+1+c*u;m.push(_,v,R),m.push(v,U,R)}this.setIndex(m),this.setAttribute("position",new fe(x,3)),this.setAttribute("normal",new fe(g,3)),this.setAttribute("uv",new fe(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},tf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ef=`#ifdef USE_ALPHAHASH
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
#endif`,nf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,sf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,rf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,af=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,of=`#ifdef USE_AOMAP
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
#endif`,lf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,cf=`#ifdef USE_BATCHING
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
#endif`,hf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,uf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ff=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,df=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,pf=`#ifdef USE_IRIDESCENCE
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
#endif`,mf=`#ifdef USE_BUMPMAP
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
#endif`,gf=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,_f=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,xf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,yf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,vf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Mf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Sf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,bf=`#if defined( USE_COLOR_ALPHA )
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
#endif`,wf=`#define PI 3.141592653589793
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
} // validated`,Af=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Tf=`vec3 transformedNormal = objectNormal;
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
#endif`,Ef=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Cf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Rf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Pf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,If="gl_FragColor = linearToOutputTexel( gl_FragColor );",Lf=`
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
}`,Df=`#ifdef USE_ENVMAP
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
#endif`,Uf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Nf=`#ifdef USE_ENVMAP
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
#endif`,Ff=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Of=`#ifdef USE_ENVMAP
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
#endif`,Bf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,zf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,kf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Vf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Gf=`#ifdef USE_GRADIENTMAP
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
}`,Hf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Wf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Xf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,qf=`uniform bool receiveShadow;
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
#endif`,Yf=`#ifdef USE_ENVMAP
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
#endif`,Zf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Jf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,$f=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Kf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Qf=`PhysicalMaterial material;
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
#endif`,jf=`struct PhysicalMaterial {
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
}`,td=`
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
#endif`,ed=`#if defined( RE_IndirectDiffuse )
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
#endif`,nd=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,id=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,sd=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,rd=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ad=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,od=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ld=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,cd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,hd=`#if defined( USE_POINTS_UV )
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
#endif`,ud=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,fd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,dd=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,pd=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,md=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,gd=`#ifdef USE_MORPHTARGETS
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
#endif`,_d=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,xd=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,yd=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,vd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Md=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Sd=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,bd=`#ifdef USE_NORMALMAP
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
#endif`,wd=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Ad=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Td=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Ed=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Cd=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Rd=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Pd=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Id=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Ld=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Dd=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ud=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Nd=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Fd=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Od=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Bd=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,zd=`float getShadowMask() {
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
}`,kd=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Vd=`#ifdef USE_SKINNING
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
#endif`,Gd=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Hd=`#ifdef USE_SKINNING
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
#endif`,Wd=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Xd=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,qd=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Yd=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Zd=`#ifdef USE_TRANSMISSION
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
#endif`,Jd=`#ifdef USE_TRANSMISSION
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
#endif`,$d=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Kd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Qd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,jd=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,tp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ep=`uniform sampler2D t2D;
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
}`,np=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ip=`#ifdef ENVMAP_TYPE_CUBE
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
}`,sp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,rp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ap=`#include <common>
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
}`,op=`#if DEPTH_PACKING == 3200
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
}`,lp=`#define DISTANCE
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
}`,cp=`#define DISTANCE
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
}`,hp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,up=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,fp=`uniform float scale;
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
}`,dp=`uniform vec3 diffuse;
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
}`,pp=`#include <common>
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
}`,mp=`uniform vec3 diffuse;
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
}`,gp=`#define LAMBERT
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
}`,_p=`#define LAMBERT
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
}`,xp=`#define MATCAP
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
}`,yp=`#define MATCAP
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
}`,vp=`#define NORMAL
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
}`,Mp=`#define NORMAL
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
}`,Sp=`#define PHONG
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
}`,bp=`#define PHONG
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
}`,wp=`#define STANDARD
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
}`,Ap=`#define STANDARD
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
}`,Tp=`#define TOON
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
}`,Ep=`#define TOON
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
}`,Cp=`uniform float size;
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
}`,Rp=`uniform vec3 diffuse;
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
}`,Pp=`#include <common>
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
}`,Ip=`uniform vec3 color;
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
}`,Lp=`uniform float rotation;
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
}`,Dp=`uniform vec3 diffuse;
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
}`,Yt={alphahash_fragment:tf,alphahash_pars_fragment:ef,alphamap_fragment:nf,alphamap_pars_fragment:sf,alphatest_fragment:rf,alphatest_pars_fragment:af,aomap_fragment:of,aomap_pars_fragment:lf,batching_pars_vertex:cf,batching_vertex:hf,begin_vertex:uf,beginnormal_vertex:ff,bsdfs:df,iridescence_fragment:pf,bumpmap_pars_fragment:mf,clipping_planes_fragment:gf,clipping_planes_pars_fragment:_f,clipping_planes_pars_vertex:xf,clipping_planes_vertex:yf,color_fragment:vf,color_pars_fragment:Mf,color_pars_vertex:Sf,color_vertex:bf,common:wf,cube_uv_reflection_fragment:Af,defaultnormal_vertex:Tf,displacementmap_pars_vertex:Ef,displacementmap_vertex:Cf,emissivemap_fragment:Rf,emissivemap_pars_fragment:Pf,colorspace_fragment:If,colorspace_pars_fragment:Lf,envmap_fragment:Df,envmap_common_pars_fragment:Uf,envmap_pars_fragment:Nf,envmap_pars_vertex:Ff,envmap_physical_pars_fragment:Yf,envmap_vertex:Of,fog_vertex:Bf,fog_pars_vertex:zf,fog_fragment:kf,fog_pars_fragment:Vf,gradientmap_pars_fragment:Gf,lightmap_pars_fragment:Hf,lights_lambert_fragment:Wf,lights_lambert_pars_fragment:Xf,lights_pars_begin:qf,lights_toon_fragment:Zf,lights_toon_pars_fragment:Jf,lights_phong_fragment:$f,lights_phong_pars_fragment:Kf,lights_physical_fragment:Qf,lights_physical_pars_fragment:jf,lights_fragment_begin:td,lights_fragment_maps:ed,lights_fragment_end:nd,logdepthbuf_fragment:id,logdepthbuf_pars_fragment:sd,logdepthbuf_pars_vertex:rd,logdepthbuf_vertex:ad,map_fragment:od,map_pars_fragment:ld,map_particle_fragment:cd,map_particle_pars_fragment:hd,metalnessmap_fragment:ud,metalnessmap_pars_fragment:fd,morphinstance_vertex:dd,morphcolor_vertex:pd,morphnormal_vertex:md,morphtarget_pars_vertex:gd,morphtarget_vertex:_d,normal_fragment_begin:xd,normal_fragment_maps:yd,normal_pars_fragment:vd,normal_pars_vertex:Md,normal_vertex:Sd,normalmap_pars_fragment:bd,clearcoat_normal_fragment_begin:wd,clearcoat_normal_fragment_maps:Ad,clearcoat_pars_fragment:Td,iridescence_pars_fragment:Ed,opaque_fragment:Cd,packing:Rd,premultiplied_alpha_fragment:Pd,project_vertex:Id,dithering_fragment:Ld,dithering_pars_fragment:Dd,roughnessmap_fragment:Ud,roughnessmap_pars_fragment:Nd,shadowmap_pars_fragment:Fd,shadowmap_pars_vertex:Od,shadowmap_vertex:Bd,shadowmask_pars_fragment:zd,skinbase_vertex:kd,skinning_pars_vertex:Vd,skinning_vertex:Gd,skinnormal_vertex:Hd,specularmap_fragment:Wd,specularmap_pars_fragment:Xd,tonemapping_fragment:qd,tonemapping_pars_fragment:Yd,transmission_fragment:Zd,transmission_pars_fragment:Jd,uv_pars_fragment:$d,uv_pars_vertex:Kd,uv_vertex:Qd,worldpos_vertex:jd,background_vert:tp,background_frag:ep,backgroundCube_vert:np,backgroundCube_frag:ip,cube_vert:sp,cube_frag:rp,depth_vert:ap,depth_frag:op,distanceRGBA_vert:lp,distanceRGBA_frag:cp,equirect_vert:hp,equirect_frag:up,linedashed_vert:fp,linedashed_frag:dp,meshbasic_vert:pp,meshbasic_frag:mp,meshlambert_vert:gp,meshlambert_frag:_p,meshmatcap_vert:xp,meshmatcap_frag:yp,meshnormal_vert:vp,meshnormal_frag:Mp,meshphong_vert:Sp,meshphong_frag:bp,meshphysical_vert:wp,meshphysical_frag:Ap,meshtoon_vert:Tp,meshtoon_frag:Ep,points_vert:Cp,points_frag:Rp,shadow_vert:Pp,shadow_frag:Ip,sprite_vert:Lp,sprite_frag:Dp},wt={common:{diffuse:{value:new qt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Gt},alphaMap:{value:null},alphaMapTransform:{value:new Gt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Gt}},envmap:{envMap:{value:null},envMapRotation:{value:new Gt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Gt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Gt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Gt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Gt},normalScale:{value:new pt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Gt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Gt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Gt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Gt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new qt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new qt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Gt},alphaTest:{value:0},uvTransform:{value:new Gt}},sprite:{diffuse:{value:new qt(16777215)},opacity:{value:1},center:{value:new pt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Gt},alphaMap:{value:null},alphaMapTransform:{value:new Gt},alphaTest:{value:0}}},fn={basic:{uniforms:Oe([wt.common,wt.specularmap,wt.envmap,wt.aomap,wt.lightmap,wt.fog]),vertexShader:Yt.meshbasic_vert,fragmentShader:Yt.meshbasic_frag},lambert:{uniforms:Oe([wt.common,wt.specularmap,wt.envmap,wt.aomap,wt.lightmap,wt.emissivemap,wt.bumpmap,wt.normalmap,wt.displacementmap,wt.fog,wt.lights,{emissive:{value:new qt(0)}}]),vertexShader:Yt.meshlambert_vert,fragmentShader:Yt.meshlambert_frag},phong:{uniforms:Oe([wt.common,wt.specularmap,wt.envmap,wt.aomap,wt.lightmap,wt.emissivemap,wt.bumpmap,wt.normalmap,wt.displacementmap,wt.fog,wt.lights,{emissive:{value:new qt(0)},specular:{value:new qt(1118481)},shininess:{value:30}}]),vertexShader:Yt.meshphong_vert,fragmentShader:Yt.meshphong_frag},standard:{uniforms:Oe([wt.common,wt.envmap,wt.aomap,wt.lightmap,wt.emissivemap,wt.bumpmap,wt.normalmap,wt.displacementmap,wt.roughnessmap,wt.metalnessmap,wt.fog,wt.lights,{emissive:{value:new qt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Yt.meshphysical_vert,fragmentShader:Yt.meshphysical_frag},toon:{uniforms:Oe([wt.common,wt.aomap,wt.lightmap,wt.emissivemap,wt.bumpmap,wt.normalmap,wt.displacementmap,wt.gradientmap,wt.fog,wt.lights,{emissive:{value:new qt(0)}}]),vertexShader:Yt.meshtoon_vert,fragmentShader:Yt.meshtoon_frag},matcap:{uniforms:Oe([wt.common,wt.bumpmap,wt.normalmap,wt.displacementmap,wt.fog,{matcap:{value:null}}]),vertexShader:Yt.meshmatcap_vert,fragmentShader:Yt.meshmatcap_frag},points:{uniforms:Oe([wt.points,wt.fog]),vertexShader:Yt.points_vert,fragmentShader:Yt.points_frag},dashed:{uniforms:Oe([wt.common,wt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Yt.linedashed_vert,fragmentShader:Yt.linedashed_frag},depth:{uniforms:Oe([wt.common,wt.displacementmap]),vertexShader:Yt.depth_vert,fragmentShader:Yt.depth_frag},normal:{uniforms:Oe([wt.common,wt.bumpmap,wt.normalmap,wt.displacementmap,{opacity:{value:1}}]),vertexShader:Yt.meshnormal_vert,fragmentShader:Yt.meshnormal_frag},sprite:{uniforms:Oe([wt.sprite,wt.fog]),vertexShader:Yt.sprite_vert,fragmentShader:Yt.sprite_frag},background:{uniforms:{uvTransform:{value:new Gt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Yt.background_vert,fragmentShader:Yt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Gt}},vertexShader:Yt.backgroundCube_vert,fragmentShader:Yt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Yt.cube_vert,fragmentShader:Yt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Yt.equirect_vert,fragmentShader:Yt.equirect_frag},distanceRGBA:{uniforms:Oe([wt.common,wt.displacementmap,{referencePosition:{value:new B},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Yt.distanceRGBA_vert,fragmentShader:Yt.distanceRGBA_frag},shadow:{uniforms:Oe([wt.lights,wt.fog,{color:{value:new qt(0)},opacity:{value:1}}]),vertexShader:Yt.shadow_vert,fragmentShader:Yt.shadow_frag}};fn.physical={uniforms:Oe([fn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Gt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Gt},clearcoatNormalScale:{value:new pt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Gt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Gt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Gt},sheen:{value:0},sheenColor:{value:new qt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Gt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Gt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Gt},transmissionSamplerSize:{value:new pt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Gt},attenuationDistance:{value:0},attenuationColor:{value:new qt(0)},specularColor:{value:new qt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Gt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Gt},anisotropyVector:{value:new pt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Gt}}]),vertexShader:Yt.meshphysical_vert,fragmentShader:Yt.meshphysical_frag};var ir={r:0,b:0,g:0},oi=new Qe,Up=new re;function Np(i,t,e,n,s,r,a){let o=new qt(0),l=r===!0?0:1,c,h,f=null,d=0,m=null;function x(S){let _=S.isScene===!0?S.background:null;return _&&_.isTexture&&(_=(S.backgroundBlurriness>0?e:t).get(_)),_}function g(S){let _=!1,v=x(S);v===null?u(o,l):v&&v.isColor&&(u(v,1),_=!0);let U=i.xr.getEnvironmentBlendMode();U==="additive"?n.buffers.color.setClear(0,0,0,1,a):U==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||_)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function p(S,_){let v=x(_);v&&(v.isCubeTexture||v.mapping===Jr)?(h===void 0&&(h=new Ae(new Ts(1,1,1),new Ve({name:"BackgroundCubeMaterial",uniforms:Ki(fn.backgroundCube.uniforms),vertexShader:fn.backgroundCube.vertexShader,fragmentShader:fn.backgroundCube.fragmentShader,side:Se,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(U,R,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),oi.copy(_.backgroundRotation),oi.x*=-1,oi.y*=-1,oi.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(oi.y*=-1,oi.z*=-1),h.material.uniforms.envMap.value=v,h.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Up.makeRotationFromEuler(oi)),h.material.toneMapped=te.getTransfer(v.colorSpace)!==ae,(f!==v||d!==v.version||m!==i.toneMapping)&&(h.material.needsUpdate=!0,f=v,d=v.version,m=i.toneMapping),h.layers.enableAll(),S.unshift(h,h.geometry,h.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new Ae(new Pr(2,2),new Ve({name:"BackgroundMaterial",uniforms:Ki(fn.background.uniforms),vertexShader:fn.background.vertexShader,fragmentShader:fn.background.fragmentShader,side:mn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,c.material.toneMapped=te.getTransfer(v.colorSpace)!==ae,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(f!==v||d!==v.version||m!==i.toneMapping)&&(c.material.needsUpdate=!0,f=v,d=v.version,m=i.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null))}function u(S,_){S.getRGB(ir,ch(i)),n.buffers.color.setClear(ir.r,ir.g,ir.b,_,a)}return{getClearColor:function(){return o},setClearColor:function(S,_=1){o.set(S),l=_,u(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(S){l=S,u(o,l)},render:g,addToRenderList:p}}function Fp(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null),r=s,a=!1;function o(y,w,k,K,J){let ot=!1,H=f(K,k,w);r!==H&&(r=H,c(r.object)),ot=m(y,K,k,J),ot&&x(y,K,k,J),J!==null&&t.update(J,i.ELEMENT_ARRAY_BUFFER),(ot||a)&&(a=!1,v(y,w,k,K),J!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(J).buffer))}function l(){return i.createVertexArray()}function c(y){return i.bindVertexArray(y)}function h(y){return i.deleteVertexArray(y)}function f(y,w,k){let K=k.wireframe===!0,J=n[y.id];J===void 0&&(J={},n[y.id]=J);let ot=J[w.id];ot===void 0&&(ot={},J[w.id]=ot);let H=ot[K];return H===void 0&&(H=d(l()),ot[K]=H),H}function d(y){let w=[],k=[],K=[];for(let J=0;J<e;J++)w[J]=0,k[J]=0,K[J]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:w,enabledAttributes:k,attributeDivisors:K,object:y,attributes:{},index:null}}function m(y,w,k,K){let J=r.attributes,ot=w.attributes,H=0,it=k.getAttributes();for(let N in it)if(it[N].location>=0){let ft=J[N],_t=ot[N];if(_t===void 0&&(N==="instanceMatrix"&&y.instanceMatrix&&(_t=y.instanceMatrix),N==="instanceColor"&&y.instanceColor&&(_t=y.instanceColor)),ft===void 0||ft.attribute!==_t||_t&&ft.data!==_t.data)return!0;H++}return r.attributesNum!==H||r.index!==K}function x(y,w,k,K){let J={},ot=w.attributes,H=0,it=k.getAttributes();for(let N in it)if(it[N].location>=0){let ft=ot[N];ft===void 0&&(N==="instanceMatrix"&&y.instanceMatrix&&(ft=y.instanceMatrix),N==="instanceColor"&&y.instanceColor&&(ft=y.instanceColor));let _t={};_t.attribute=ft,ft&&ft.data&&(_t.data=ft.data),J[N]=_t,H++}r.attributes=J,r.attributesNum=H,r.index=K}function g(){let y=r.newAttributes;for(let w=0,k=y.length;w<k;w++)y[w]=0}function p(y){u(y,0)}function u(y,w){let k=r.newAttributes,K=r.enabledAttributes,J=r.attributeDivisors;k[y]=1,K[y]===0&&(i.enableVertexAttribArray(y),K[y]=1),J[y]!==w&&(i.vertexAttribDivisor(y,w),J[y]=w)}function S(){let y=r.newAttributes,w=r.enabledAttributes;for(let k=0,K=w.length;k<K;k++)w[k]!==y[k]&&(i.disableVertexAttribArray(k),w[k]=0)}function _(y,w,k,K,J,ot,H){H===!0?i.vertexAttribIPointer(y,w,k,J,ot):i.vertexAttribPointer(y,w,k,K,J,ot)}function v(y,w,k,K){g();let J=K.attributes,ot=k.getAttributes(),H=w.defaultAttributeValues;for(let it in ot){let N=ot[it];if(N.location>=0){let mt=J[it];if(mt===void 0&&(it==="instanceMatrix"&&y.instanceMatrix&&(mt=y.instanceMatrix),it==="instanceColor"&&y.instanceColor&&(mt=y.instanceColor)),mt!==void 0){let ft=mt.normalized,_t=mt.itemSize,Pt=t.get(mt);if(Pt===void 0)continue;let Ot=Pt.buffer,D=Pt.type,L=Pt.bytesPerElement,C=D===i.INT||D===i.UNSIGNED_INT||mt.gpuType===ul;if(mt.isInterleavedBufferAttribute){let b=mt.data,Q=b.stride,st=mt.offset;if(b.isInstancedInterleavedBuffer){for(let Z=0;Z<N.locationSize;Z++)u(N.location+Z,b.meshPerAttribute);y.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=b.meshPerAttribute*b.count)}else for(let Z=0;Z<N.locationSize;Z++)p(N.location+Z);i.bindBuffer(i.ARRAY_BUFFER,Ot);for(let Z=0;Z<N.locationSize;Z++)_(N.location+Z,_t/N.locationSize,D,ft,Q*L,(st+_t/N.locationSize*Z)*L,C)}else{if(mt.isInstancedBufferAttribute){for(let b=0;b<N.locationSize;b++)u(N.location+b,mt.meshPerAttribute);y.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=mt.meshPerAttribute*mt.count)}else for(let b=0;b<N.locationSize;b++)p(N.location+b);i.bindBuffer(i.ARRAY_BUFFER,Ot);for(let b=0;b<N.locationSize;b++)_(N.location+b,_t/N.locationSize,D,ft,_t*L,_t/N.locationSize*b*L,C)}}else if(H!==void 0){let ft=H[it];if(ft!==void 0)switch(ft.length){case 2:i.vertexAttrib2fv(N.location,ft);break;case 3:i.vertexAttrib3fv(N.location,ft);break;case 4:i.vertexAttrib4fv(N.location,ft);break;default:i.vertexAttrib1fv(N.location,ft)}}}}S()}function U(){F();for(let y in n){let w=n[y];for(let k in w){let K=w[k];for(let J in K)h(K[J].object),delete K[J];delete w[k]}delete n[y]}}function R(y){if(n[y.id]===void 0)return;let w=n[y.id];for(let k in w){let K=w[k];for(let J in K)h(K[J].object),delete K[J];delete w[k]}delete n[y.id]}function P(y){for(let w in n){let k=n[w];if(k[y.id]===void 0)continue;let K=k[y.id];for(let J in K)h(K[J].object),delete K[J];delete k[y.id]}}function F(){$(),a=!0,r!==s&&(r=s,c(r.object))}function $(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:F,resetDefaultState:$,dispose:U,releaseStatesOfGeometry:R,releaseStatesOfProgram:P,initAttributes:g,enableAttribute:p,disableUnusedAttributes:S}}function Op(i,t,e){let n;function s(c){n=c}function r(c,h){i.drawArrays(n,c,h),e.update(h,n,1)}function a(c,h,f){f!==0&&(i.drawArraysInstanced(n,c,h,f),e.update(h,n,f))}function o(c,h,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,f);let m=0;for(let x=0;x<f;x++)m+=h[x];e.update(m,n,1)}function l(c,h,f,d){if(f===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let x=0;x<c.length;x++)a(c[x],h[x],d[x]);else{m.multiDrawArraysInstancedWEBGL(n,c,0,h,0,d,0,f);let x=0;for(let g=0;g<f;g++)x+=h[g];for(let g=0;g<d.length;g++)e.update(x,n,d[g])}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function Bp(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let P=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(P){return!(P!==qe&&n.convert(P)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(P){let F=P===xi&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(P!==Dn&&n.convert(P)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==In&&!F)}function l(P){if(P==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let f=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control");if(d===!0){let P=t.get("EXT_clip_control");P.clipControlEXT(P.LOWER_LEFT_EXT,P.ZERO_TO_ONE_EXT)}let m=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),u=i.getParameter(i.MAX_VERTEX_ATTRIBS),S=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),_=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),U=x>0,R=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:f,reverseDepthBuffer:d,maxTextures:m,maxVertexTextures:x,maxTextureSize:g,maxCubemapSize:p,maxAttributes:u,maxVertexUniforms:S,maxVaryings:_,maxFragmentUniforms:v,vertexTextures:U,maxSamples:R}}function zp(i){let t=this,e=null,n=0,s=!1,r=!1,a=new Cn,o=new Gt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){let m=f.length!==0||d||n!==0||s;return s=d,n=f.length,m},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,d){e=h(f,d,0)},this.setState=function(f,d,m){let x=f.clippingPlanes,g=f.clipIntersection,p=f.clipShadows,u=i.get(f);if(!s||x===null||x.length===0||r&&!p)r?h(null):c();else{let S=r?0:n,_=S*4,v=u.clippingState||null;l.value=v,v=h(x,d,_,m);for(let U=0;U!==_;++U)v[U]=e[U];u.clippingState=v,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(f,d,m,x){let g=f!==null?f.length:0,p=null;if(g!==0){if(p=l.value,x!==!0||p===null){let u=m+g*4,S=d.matrixWorldInverse;o.getNormalMatrix(S),(p===null||p.length<u)&&(p=new Float32Array(u));for(let _=0,v=m;_!==g;++_,v+=4)a.copy(f[_]).applyMatrix4(S,o),a.normal.toArray(p,v),p[v+3]=a.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=g,t.numIntersection=0,p}}function kp(i){let t=new WeakMap;function e(a,o){return o===Xa?a.mapping=Yi:o===qa&&(a.mapping=Zi),a}function n(a){if(a&&a.isTexture){let o=a.mapping;if(o===Xa||o===qa)if(t.has(a)){let l=t.get(a).texture;return e(l,a.mapping)}else{let l=a.image;if(l&&l.height>0){let c=new Eo(l.height);return c.fromEquirectangularTexture(i,a),t.set(a,c),a.addEventListener("dispose",s),e(c.texture,a.mapping)}else return null}}return a}function s(a){let o=a.target;o.removeEventListener("dispose",s);let l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var Ir=class extends Qi{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,a=n+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Vi=4,hc=[.125,.215,.35,.446,.526,.582],ui=20,Ta=new Ir,uc=new qt,Ea=null,Ca=0,Ra=0,Pa=!1,ci=(1+Math.sqrt(5))/2,zi=1/ci,fc=[new B(-ci,zi,0),new B(ci,zi,0),new B(-zi,0,ci),new B(zi,0,ci),new B(0,ci,-zi),new B(0,ci,zi),new B(-1,1,-1),new B(1,1,-1),new B(-1,1,1),new B(1,1,1)],ji=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){Ea=this._renderer.getRenderTarget(),Ca=this._renderer.getActiveCubeFace(),Ra=this._renderer.getActiveMipmapLevel(),Pa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=mc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=pc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Ea,Ca,Ra),this._renderer.xr.enabled=Pa,t.scissorTest=!1,sr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Yi||t.mapping===Zi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Ea=this._renderer.getRenderTarget(),Ca=this._renderer.getActiveCubeFace(),Ra=this._renderer.getActiveMipmapLevel(),Pa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Xe,minFilter:Xe,generateMipmaps:!1,type:xi,format:qe,colorSpace:xn,depthBuffer:!1},s=dc(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=dc(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Vp(r)),this._blurMaterial=Gp(r,t,e)}return s}_compileMaterial(t){let e=new Ae(this._lodPlanes[0],t);this._renderer.compile(e,Ta)}_sceneToCubeUV(t,e,n,s){let o=new Be(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,d=h.toneMapping;h.getClearColor(uc),h.toneMapping=pn,h.autoClear=!1;let m=new Tr({name:"PMREM.Background",side:Se,depthWrite:!1,depthTest:!1}),x=new Ae(new Ts,m),g=!1,p=t.background;p?p.isColor&&(m.color.copy(p),t.background=null,g=!0):(m.color.copy(uc),g=!0);for(let u=0;u<6;u++){let S=u%3;S===0?(o.up.set(0,l[u],0),o.lookAt(c[u],0,0)):S===1?(o.up.set(0,0,l[u]),o.lookAt(0,c[u],0)):(o.up.set(0,l[u],0),o.lookAt(0,0,c[u]));let _=this._cubeSize;sr(s,S*_,u>2?_:0,_,_),h.setRenderTarget(s),g&&h.render(x,o),h.render(t,o)}x.geometry.dispose(),x.material.dispose(),h.toneMapping=d,h.autoClear=f,t.background=p}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===Yi||t.mapping===Zi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=mc()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=pc());let r=s?this._cubemapMaterial:this._equirectMaterial,a=new Ae(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;let l=this._cubeSize;sr(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,Ta)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=fc[(s-r-1)%fc.length];this._blur(t,r-1,r,a,o)}e.autoClear=n}_blur(t,e,n,s,r){let a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,s,"latitudinal",r),this._halfBlur(a,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,a,o){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,f=new Ae(this._lodPlanes[s],c),d=c.uniforms,m=this._sizeLods[n]-1,x=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*ui-1),g=r/x,p=isFinite(r)?1+Math.floor(h*g):ui;p>ui&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${ui}`);let u=[],S=0;for(let P=0;P<ui;++P){let F=P/g,$=Math.exp(-F*F/2);u.push($),P===0?S+=$:P<p&&(S+=2*$)}for(let P=0;P<u.length;P++)u[P]=u[P]/S;d.envMap.value=t.texture,d.samples.value=p,d.weights.value=u,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);let{_lodMax:_}=this;d.dTheta.value=x,d.mipInt.value=_-n;let v=this._sizeLods[s],U=3*v*(s>_-Vi?s-_+Vi:0),R=4*(this._cubeSize-v);sr(e,U,R,3*v,2*v),l.setRenderTarget(e),l.render(f,Ta)}};function Vp(i){let t=[],e=[],n=[],s=i,r=i-Vi+1+hc.length;for(let a=0;a<r;a++){let o=Math.pow(2,s);e.push(o);let l=1/o;a>i-Vi?l=hc[a-i+Vi-1]:a===0&&(l=0),n.push(l);let c=1/(o-2),h=-c,f=1+c,d=[h,h,f,h,f,f,h,h,f,f,h,f],m=6,x=6,g=3,p=2,u=1,S=new Float32Array(g*x*m),_=new Float32Array(p*x*m),v=new Float32Array(u*x*m);for(let R=0;R<m;R++){let P=R%3*2/3-1,F=R>2?0:-1,$=[P,F,0,P+2/3,F,0,P+2/3,F+1,0,P,F,0,P+2/3,F+1,0,P,F+1,0];S.set($,g*x*R),_.set(d,p*x*R);let y=[R,R,R,R,R,R];v.set(y,u*x*R)}let U=new Te;U.setAttribute("position",new Le(S,g)),U.setAttribute("uv",new Le(_,p)),U.setAttribute("faceIndex",new Le(v,u)),t.push(U),s>Vi&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function dc(i,t,e){let n=new an(i,t,e);return n.texture.mapping=Jr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function sr(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Gp(i,t,e){let n=new Float32Array(ui),s=new B(0,1,0);return new Ve({name:"SphericalGaussianBlur",defines:{n:ui,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:yl(),fragmentShader:`

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
		`,blending:dn,depthTest:!1,depthWrite:!1})}function pc(){return new Ve({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:yl(),fragmentShader:`

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
		`,blending:dn,depthTest:!1,depthWrite:!1})}function mc(){return new Ve({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:yl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:dn,depthTest:!1,depthWrite:!1})}function yl(){return`

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
	`}function Hp(i){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){let l=o.mapping,c=l===Xa||l===qa,h=l===Yi||l===Zi;if(c||h){let f=t.get(o),d=f!==void 0?f.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return e===null&&(e=new ji(i)),f=c?e.fromEquirectangular(o,f):e.fromCubemap(o,f),f.texture.pmremVersion=o.pmremVersion,t.set(o,f),f.texture;if(f!==void 0)return f.texture;{let m=o.image;return c&&m&&m.height>0||h&&m&&s(m)?(e===null&&(e=new ji(i)),f=c?e.fromEquirectangular(o):e.fromCubemap(o),f.texture.pmremVersion=o.pmremVersion,t.set(o,f),o.addEventListener("dispose",r),f.texture):null}}}return o}function s(o){let l=0,c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){let l=o.target;l.removeEventListener("dispose",r);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function Wp(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&_r("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Xp(i,t,e,n){let s={},r=new WeakMap;function a(f){let d=f.target;d.index!==null&&t.remove(d.index);for(let x in d.attributes)t.remove(d.attributes[x]);for(let x in d.morphAttributes){let g=d.morphAttributes[x];for(let p=0,u=g.length;p<u;p++)t.remove(g[p])}d.removeEventListener("dispose",a),delete s[d.id];let m=r.get(d);m&&(t.remove(m),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function o(f,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,e.memory.geometries++),d}function l(f){let d=f.attributes;for(let x in d)t.update(d[x],i.ARRAY_BUFFER);let m=f.morphAttributes;for(let x in m){let g=m[x];for(let p=0,u=g.length;p<u;p++)t.update(g[p],i.ARRAY_BUFFER)}}function c(f){let d=[],m=f.index,x=f.attributes.position,g=0;if(m!==null){let S=m.array;g=m.version;for(let _=0,v=S.length;_<v;_+=3){let U=S[_+0],R=S[_+1],P=S[_+2];d.push(U,R,R,P,P,U)}}else if(x!==void 0){let S=x.array;g=x.version;for(let _=0,v=S.length/3-1;_<v;_+=3){let U=_+0,R=_+1,P=_+2;d.push(U,R,R,P,P,U)}}else return;let p=new(oh(d)?Cr:Er)(d,1);p.version=g;let u=r.get(f);u&&t.remove(u),r.set(f,p)}function h(f){let d=r.get(f);if(d){let m=f.index;m!==null&&d.version<m.version&&c(f)}else c(f);return r.get(f)}return{get:o,update:l,getWireframeAttribute:h}}function qp(i,t,e){let n;function s(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,m){i.drawElements(n,m,r,d*a),e.update(m,n,1)}function c(d,m,x){x!==0&&(i.drawElementsInstanced(n,m,r,d*a,x),e.update(m,n,x))}function h(d,m,x){if(x===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,m,0,r,d,0,x);let p=0;for(let u=0;u<x;u++)p+=m[u];e.update(p,n,1)}function f(d,m,x,g){if(x===0)return;let p=t.get("WEBGL_multi_draw");if(p===null)for(let u=0;u<d.length;u++)c(d[u]/a,m[u],g[u]);else{p.multiDrawElementsInstancedWEBGL(n,m,0,r,d,0,g,0,x);let u=0;for(let S=0;S<x;S++)u+=m[S];for(let S=0;S<g.length;S++)e.update(u,n,g[S])}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=f}function Yp(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Zp(i,t,e){let n=new WeakMap,s=new de;function r(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=h!==void 0?h.length:0,d=n.get(o);if(d===void 0||d.count!==f){let $=function(){P.dispose(),n.delete(o),o.removeEventListener("dispose",$)};d!==void 0&&d.texture.dispose();let m=o.morphAttributes.position!==void 0,x=o.morphAttributes.normal!==void 0,g=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],u=o.morphAttributes.normal||[],S=o.morphAttributes.color||[],_=0;m===!0&&(_=1),x===!0&&(_=2),g===!0&&(_=3);let v=o.attributes.position.count*_,U=1;v>t.maxTextureSize&&(U=Math.ceil(v/t.maxTextureSize),v=t.maxTextureSize);let R=new Float32Array(v*U*4*f),P=new Ar(R,v,U,f);P.type=In,P.needsUpdate=!0;let F=_*4;for(let y=0;y<f;y++){let w=p[y],k=u[y],K=S[y],J=v*U*4*y;for(let ot=0;ot<w.count;ot++){let H=ot*F;m===!0&&(s.fromBufferAttribute(w,ot),R[J+H+0]=s.x,R[J+H+1]=s.y,R[J+H+2]=s.z,R[J+H+3]=0),x===!0&&(s.fromBufferAttribute(k,ot),R[J+H+4]=s.x,R[J+H+5]=s.y,R[J+H+6]=s.z,R[J+H+7]=0),g===!0&&(s.fromBufferAttribute(K,ot),R[J+H+8]=s.x,R[J+H+9]=s.y,R[J+H+10]=s.z,R[J+H+11]=K.itemSize===4?s.w:1)}}d={count:f,texture:P,size:new pt(v,U)},n.set(o,d),o.addEventListener("dispose",$)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let m=0;for(let g=0;g<c.length;g++)m+=c[g];let x=o.morphTargetsRelative?1:1-m;l.getUniforms().setValue(i,"morphTargetBaseInfluence",x),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function Jp(i,t,e,n){let s=new WeakMap;function r(l){let c=n.render.frame,h=l.geometry,f=t.get(l,h);if(s.get(f)!==c&&(t.update(f),s.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return f}function a(){s=new WeakMap}function o(l){let c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:a}}var Lr=class extends Ke{constructor(t,e,n,s,r,a,o,l,c,h=Hi){if(h!==Hi&&h!==$i)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Hi&&(n=pi),n===void 0&&h===$i&&(n=Ji),super(null,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:$e,this.minFilter=l!==void 0?l:$e,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},uh=new Ke,gc=new Lr(1,1),fh=new Ar,dh=new Ao,ph=new Rr,_c=[],xc=[],yc=new Float32Array(16),vc=new Float32Array(9),Mc=new Float32Array(4);function ss(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=_c[s];if(r===void 0&&(r=new Float32Array(s),_c[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function xe(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function ye(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Kr(i,t){let e=xc[t];e===void 0&&(e=new Int32Array(t),xc[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function $p(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Kp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(xe(e,t))return;i.uniform2fv(this.addr,t),ye(e,t)}}function Qp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(xe(e,t))return;i.uniform3fv(this.addr,t),ye(e,t)}}function jp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(xe(e,t))return;i.uniform4fv(this.addr,t),ye(e,t)}}function tm(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(xe(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),ye(e,t)}else{if(xe(e,n))return;Mc.set(n),i.uniformMatrix2fv(this.addr,!1,Mc),ye(e,n)}}function em(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(xe(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),ye(e,t)}else{if(xe(e,n))return;vc.set(n),i.uniformMatrix3fv(this.addr,!1,vc),ye(e,n)}}function nm(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(xe(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),ye(e,t)}else{if(xe(e,n))return;yc.set(n),i.uniformMatrix4fv(this.addr,!1,yc),ye(e,n)}}function im(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function sm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(xe(e,t))return;i.uniform2iv(this.addr,t),ye(e,t)}}function rm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(xe(e,t))return;i.uniform3iv(this.addr,t),ye(e,t)}}function am(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(xe(e,t))return;i.uniform4iv(this.addr,t),ye(e,t)}}function om(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function lm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(xe(e,t))return;i.uniform2uiv(this.addr,t),ye(e,t)}}function cm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(xe(e,t))return;i.uniform3uiv(this.addr,t),ye(e,t)}}function hm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(xe(e,t))return;i.uniform4uiv(this.addr,t),ye(e,t)}}function um(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(gc.compareFunction=rh,r=gc):r=uh,e.setTexture2D(t||r,s)}function fm(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||dh,s)}function dm(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||ph,s)}function pm(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||fh,s)}function mm(i){switch(i){case 5126:return $p;case 35664:return Kp;case 35665:return Qp;case 35666:return jp;case 35674:return tm;case 35675:return em;case 35676:return nm;case 5124:case 35670:return im;case 35667:case 35671:return sm;case 35668:case 35672:return rm;case 35669:case 35673:return am;case 5125:return om;case 36294:return lm;case 36295:return cm;case 36296:return hm;case 35678:case 36198:case 36298:case 36306:case 35682:return um;case 35679:case 36299:case 36307:return fm;case 35680:case 36300:case 36308:case 36293:return dm;case 36289:case 36303:case 36311:case 36292:return pm}}function gm(i,t){i.uniform1fv(this.addr,t)}function _m(i,t){let e=ss(t,this.size,2);i.uniform2fv(this.addr,e)}function xm(i,t){let e=ss(t,this.size,3);i.uniform3fv(this.addr,e)}function ym(i,t){let e=ss(t,this.size,4);i.uniform4fv(this.addr,e)}function vm(i,t){let e=ss(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Mm(i,t){let e=ss(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Sm(i,t){let e=ss(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function bm(i,t){i.uniform1iv(this.addr,t)}function wm(i,t){i.uniform2iv(this.addr,t)}function Am(i,t){i.uniform3iv(this.addr,t)}function Tm(i,t){i.uniform4iv(this.addr,t)}function Em(i,t){i.uniform1uiv(this.addr,t)}function Cm(i,t){i.uniform2uiv(this.addr,t)}function Rm(i,t){i.uniform3uiv(this.addr,t)}function Pm(i,t){i.uniform4uiv(this.addr,t)}function Im(i,t,e){let n=this.cache,s=t.length,r=Kr(e,s);xe(n,r)||(i.uniform1iv(this.addr,r),ye(n,r));for(let a=0;a!==s;++a)e.setTexture2D(t[a]||uh,r[a])}function Lm(i,t,e){let n=this.cache,s=t.length,r=Kr(e,s);xe(n,r)||(i.uniform1iv(this.addr,r),ye(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||dh,r[a])}function Dm(i,t,e){let n=this.cache,s=t.length,r=Kr(e,s);xe(n,r)||(i.uniform1iv(this.addr,r),ye(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||ph,r[a])}function Um(i,t,e){let n=this.cache,s=t.length,r=Kr(e,s);xe(n,r)||(i.uniform1iv(this.addr,r),ye(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||fh,r[a])}function Nm(i){switch(i){case 5126:return gm;case 35664:return _m;case 35665:return xm;case 35666:return ym;case 35674:return vm;case 35675:return Mm;case 35676:return Sm;case 5124:case 35670:return bm;case 35667:case 35671:return wm;case 35668:case 35672:return Am;case 35669:case 35673:return Tm;case 5125:return Em;case 36294:return Cm;case 36295:return Rm;case 36296:return Pm;case 35678:case 36198:case 36298:case 36306:case 35682:return Im;case 35679:case 36299:case 36307:return Lm;case 35680:case 36300:case 36308:case 36293:return Dm;case 36289:case 36303:case 36311:case 36292:return Um}}var Co=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=mm(e.type)}},Ro=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Nm(e.type)}},Po=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(t,e[o.id],n)}}},Ia=/(\w+)(\])?(\[|\.)?/g;function Sc(i,t){i.seq.push(t),i.map[t.id]=t}function Fm(i,t,e){let n=i.name,s=n.length;for(Ia.lastIndex=0;;){let r=Ia.exec(n),a=Ia.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Sc(e,c===void 0?new Co(o,i,t):new Ro(o,i,t));break}else{let f=e.map[o];f===void 0&&(f=new Po(o),Sc(e,f)),e=f}}}var Xi=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=t.getActiveUniform(e,s),a=t.getUniformLocation(e,r.name);Fm(r,a,this)}}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){let o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&n.push(a)}return n}};function bc(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var Om=37297,Bm=0;function zm(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}function km(i){let t=te.getPrimaries(te.workingColorSpace),e=te.getPrimaries(i),n;switch(t===e?n="":t===Mr&&e===vr?n="LinearDisplayP3ToLinearSRGB":t===vr&&e===Mr&&(n="LinearSRGBToLinearDisplayP3"),i){case xn:case $r:return[n,"LinearTransferOETF"];case ke:case _l:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function wc(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let a=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+zm(i.getShaderSource(t),a)}else return s}function Vm(i,t){let e=km(t);return`vec4 ${i}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function Gm(i,t){let e;switch(t){case $h:e="Linear";break;case Kh:e="Reinhard";break;case Qh:e="Cineon";break;case jh:e="ACESFilmic";break;case eu:e="AgX";break;case nu:e="Neutral";break;case tu:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var rr=new B;function Hm(){te.getLuminanceCoefficients(rr);let i=rr.x.toFixed(4),t=rr.y.toFixed(4),e=rr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Wm(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(gs).join(`
`)}function Xm(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function qm(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function gs(i){return i!==""}function Ac(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Tc(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Ym=/^[ \t]*#include +<([\w\d./]+)>/gm;function Io(i){return i.replace(Ym,Jm)}var Zm=new Map;function Jm(i,t){let e=Yt[t];if(e===void 0){let n=Zm.get(t);if(n!==void 0)e=Yt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Io(e)}var $m=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ec(i){return i.replace($m,Km)}function Km(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Cc(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function Qm(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Xc?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Rh?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===En&&(t="SHADOWMAP_TYPE_VSM"),t}function jm(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Yi:case Zi:t="ENVMAP_TYPE_CUBE";break;case Jr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function tg(i){let t="ENVMAP_MODE_REFLECTION";return i.envMap&&i.envMapMode===Zi&&(t="ENVMAP_MODE_REFRACTION"),t}function eg(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case qc:t="ENVMAP_BLENDING_MULTIPLY";break;case Zh:t="ENVMAP_BLENDING_MIX";break;case Jh:t="ENVMAP_BLENDING_ADD";break}return t}function ng(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function ig(i,t,e,n){let s=i.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,l=Qm(e),c=jm(e),h=tg(e),f=eg(e),d=ng(e),m=Wm(e),x=Xm(r),g=s.createProgram(),p,u,S=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x].filter(gs).join(`
`),p.length>0&&(p+=`
`),u=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x].filter(gs).join(`
`),u.length>0&&(u+=`
`)):(p=[Cc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(gs).join(`
`),u=[Cc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==pn?"#define TONE_MAPPING":"",e.toneMapping!==pn?Yt.tonemapping_pars_fragment:"",e.toneMapping!==pn?Gm("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Yt.colorspace_pars_fragment,Vm("linearToOutputTexel",e.outputColorSpace),Hm(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(gs).join(`
`)),a=Io(a),a=Ac(a,e),a=Tc(a,e),o=Io(o),o=Ac(o,e),o=Tc(o,e),a=Ec(a),o=Ec(o),e.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,p=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,u=["#define varying in",e.glslVersion===Xl?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Xl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);let _=S+p+a,v=S+u+o,U=bc(s,s.VERTEX_SHADER,_),R=bc(s,s.FRAGMENT_SHADER,v);s.attachShader(g,U),s.attachShader(g,R),e.index0AttributeName!==void 0?s.bindAttribLocation(g,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(g,0,"position"),s.linkProgram(g);function P(w){if(i.debug.checkShaderErrors){let k=s.getProgramInfoLog(g).trim(),K=s.getShaderInfoLog(U).trim(),J=s.getShaderInfoLog(R).trim(),ot=!0,H=!0;if(s.getProgramParameter(g,s.LINK_STATUS)===!1)if(ot=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,g,U,R);else{let it=wc(s,U,"vertex"),N=wc(s,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(g,s.VALIDATE_STATUS)+`

Material Name: `+w.name+`
Material Type: `+w.type+`

Program Info Log: `+k+`
`+it+`
`+N)}else k!==""?console.warn("THREE.WebGLProgram: Program Info Log:",k):(K===""||J==="")&&(H=!1);H&&(w.diagnostics={runnable:ot,programLog:k,vertexShader:{log:K,prefix:p},fragmentShader:{log:J,prefix:u}})}s.deleteShader(U),s.deleteShader(R),F=new Xi(s,g),$=qm(s,g)}let F;this.getUniforms=function(){return F===void 0&&P(this),F};let $;this.getAttributes=function(){return $===void 0&&P(this),$};let y=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=s.getProgramParameter(g,Om)),y},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(g),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Bm++,this.cacheKey=t,this.usedTimes=1,this.program=g,this.vertexShader=U,this.fragmentShader=R,this}var sg=0,Lo=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Do(t),e.set(t,n)),n}},Do=class{constructor(t){this.id=sg++,this.code=t,this.usedTimes=0}};function rg(i,t,e,n,s,r,a){let o=new As,l=new Lo,c=new Set,h=[],f=s.logarithmicDepthBuffer,d=s.reverseDepthBuffer,m=s.vertexTextures,x=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(y){return c.add(y),y===0?"uv":`uv${y}`}function u(y,w,k,K,J){let ot=K.fog,H=J.geometry,it=y.isMeshStandardMaterial?K.environment:null,N=(y.isMeshStandardMaterial?e:t).get(y.envMap||it),mt=N&&N.mapping===Jr?N.image.height:null,ft=g[y.type];y.precision!==null&&(x=s.getMaxPrecision(y.precision),x!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",x,"instead."));let _t=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,Pt=_t!==void 0?_t.length:0,Ot=0;H.morphAttributes.position!==void 0&&(Ot=1),H.morphAttributes.normal!==void 0&&(Ot=2),H.morphAttributes.color!==void 0&&(Ot=3);let D,L,C,b;if(ft){let Ee=fn[ft];D=Ee.vertexShader,L=Ee.fragmentShader}else D=y.vertexShader,L=y.fragmentShader,l.update(y),C=l.getVertexShaderID(y),b=l.getFragmentShaderID(y);let Q=i.getRenderTarget(),st=J.isInstancedMesh===!0,Z=J.isBatchedMesh===!0,ut=!!y.map,q=!!y.matcap,T=!!N,V=!!y.aoMap,Y=!!y.lightMap,tt=!!y.bumpMap,rt=!!y.normalMap,O=!!y.displacementMap,I=!!y.emissiveMap,A=!!y.metalnessMap,M=!!y.roughnessMap,W=y.anisotropy>0,at=y.clearcoat>0,lt=y.dispersion>0,ht=y.iridescence>0,It=y.sheen>0,vt=y.transmission>0,At=W&&!!y.anisotropyMap,Wt=at&&!!y.clearcoatMap,gt=at&&!!y.clearcoatNormalMap,bt=at&&!!y.clearcoatRoughnessMap,zt=ht&&!!y.iridescenceMap,Nt=ht&&!!y.iridescenceThicknessMap,Et=It&&!!y.sheenColorMap,Xt=It&&!!y.sheenRoughnessMap,Ht=!!y.specularMap,ee=!!y.specularColorMap,z=!!y.specularIntensityMap,Mt=vt&&!!y.transmissionMap,ct=vt&&!!y.thicknessMap,dt=!!y.gradientMap,Tt=!!y.alphaMap,Ct=y.alphaTest>0,Zt=!!y.alphaHash,oe=!!y.extensions,le=pn;y.toneMapped&&(Q===null||Q.isXRRenderTarget===!0)&&(le=i.toneMapping);let Jt={shaderID:ft,shaderType:y.type,shaderName:y.name,vertexShader:D,fragmentShader:L,defines:y.defines,customVertexShaderID:C,customFragmentShaderID:b,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:x,batching:Z,batchingColor:Z&&J._colorsTexture!==null,instancing:st,instancingColor:st&&J.instanceColor!==null,instancingMorph:st&&J.morphTexture!==null,supportsVertexTextures:m,outputColorSpace:Q===null?i.outputColorSpace:Q.isXRRenderTarget===!0?Q.texture.colorSpace:xn,alphaToCoverage:!!y.alphaToCoverage,map:ut,matcap:q,envMap:T,envMapMode:T&&N.mapping,envMapCubeUVHeight:mt,aoMap:V,lightMap:Y,bumpMap:tt,normalMap:rt,displacementMap:m&&O,emissiveMap:I,normalMapObjectSpace:rt&&y.normalMapType===au,normalMapTangentSpace:rt&&y.normalMapType===sh,metalnessMap:A,roughnessMap:M,anisotropy:W,anisotropyMap:At,clearcoat:at,clearcoatMap:Wt,clearcoatNormalMap:gt,clearcoatRoughnessMap:bt,dispersion:lt,iridescence:ht,iridescenceMap:zt,iridescenceThicknessMap:Nt,sheen:It,sheenColorMap:Et,sheenRoughnessMap:Xt,specularMap:Ht,specularColorMap:ee,specularIntensityMap:z,transmission:vt,transmissionMap:Mt,thicknessMap:ct,gradientMap:dt,opaque:y.transparent===!1&&y.blending===Zn&&y.alphaToCoverage===!1,alphaMap:Tt,alphaTest:Ct,alphaHash:Zt,combine:y.combine,mapUv:ut&&p(y.map.channel),aoMapUv:V&&p(y.aoMap.channel),lightMapUv:Y&&p(y.lightMap.channel),bumpMapUv:tt&&p(y.bumpMap.channel),normalMapUv:rt&&p(y.normalMap.channel),displacementMapUv:O&&p(y.displacementMap.channel),emissiveMapUv:I&&p(y.emissiveMap.channel),metalnessMapUv:A&&p(y.metalnessMap.channel),roughnessMapUv:M&&p(y.roughnessMap.channel),anisotropyMapUv:At&&p(y.anisotropyMap.channel),clearcoatMapUv:Wt&&p(y.clearcoatMap.channel),clearcoatNormalMapUv:gt&&p(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:bt&&p(y.clearcoatRoughnessMap.channel),iridescenceMapUv:zt&&p(y.iridescenceMap.channel),iridescenceThicknessMapUv:Nt&&p(y.iridescenceThicknessMap.channel),sheenColorMapUv:Et&&p(y.sheenColorMap.channel),sheenRoughnessMapUv:Xt&&p(y.sheenRoughnessMap.channel),specularMapUv:Ht&&p(y.specularMap.channel),specularColorMapUv:ee&&p(y.specularColorMap.channel),specularIntensityMapUv:z&&p(y.specularIntensityMap.channel),transmissionMapUv:Mt&&p(y.transmissionMap.channel),thicknessMapUv:ct&&p(y.thicknessMap.channel),alphaMapUv:Tt&&p(y.alphaMap.channel),vertexTangents:!!H.attributes.tangent&&(rt||W),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,pointsUvs:J.isPoints===!0&&!!H.attributes.uv&&(ut||Tt),fog:!!ot,useFog:y.fog===!0,fogExp2:!!ot&&ot.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:d,skinning:J.isSkinnedMesh===!0,morphTargets:H.morphAttributes.position!==void 0,morphNormals:H.morphAttributes.normal!==void 0,morphColors:H.morphAttributes.color!==void 0,morphTargetsCount:Pt,morphTextureStride:Ot,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:y.dithering,shadowMapEnabled:i.shadowMap.enabled&&k.length>0,shadowMapType:i.shadowMap.type,toneMapping:le,decodeVideoTexture:ut&&y.map.isVideoTexture===!0&&te.getTransfer(y.map.colorSpace)===ae,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Rn,flipSided:y.side===Se,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:oe&&y.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(oe&&y.extensions.multiDraw===!0||Z)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return Jt.vertexUv1s=c.has(1),Jt.vertexUv2s=c.has(2),Jt.vertexUv3s=c.has(3),c.clear(),Jt}function S(y){let w=[];if(y.shaderID?w.push(y.shaderID):(w.push(y.customVertexShaderID),w.push(y.customFragmentShaderID)),y.defines!==void 0)for(let k in y.defines)w.push(k),w.push(y.defines[k]);return y.isRawShaderMaterial===!1&&(_(w,y),v(w,y),w.push(i.outputColorSpace)),w.push(y.customProgramCacheKey),w.join()}function _(y,w){y.push(w.precision),y.push(w.outputColorSpace),y.push(w.envMapMode),y.push(w.envMapCubeUVHeight),y.push(w.mapUv),y.push(w.alphaMapUv),y.push(w.lightMapUv),y.push(w.aoMapUv),y.push(w.bumpMapUv),y.push(w.normalMapUv),y.push(w.displacementMapUv),y.push(w.emissiveMapUv),y.push(w.metalnessMapUv),y.push(w.roughnessMapUv),y.push(w.anisotropyMapUv),y.push(w.clearcoatMapUv),y.push(w.clearcoatNormalMapUv),y.push(w.clearcoatRoughnessMapUv),y.push(w.iridescenceMapUv),y.push(w.iridescenceThicknessMapUv),y.push(w.sheenColorMapUv),y.push(w.sheenRoughnessMapUv),y.push(w.specularMapUv),y.push(w.specularColorMapUv),y.push(w.specularIntensityMapUv),y.push(w.transmissionMapUv),y.push(w.thicknessMapUv),y.push(w.combine),y.push(w.fogExp2),y.push(w.sizeAttenuation),y.push(w.morphTargetsCount),y.push(w.morphAttributeCount),y.push(w.numDirLights),y.push(w.numPointLights),y.push(w.numSpotLights),y.push(w.numSpotLightMaps),y.push(w.numHemiLights),y.push(w.numRectAreaLights),y.push(w.numDirLightShadows),y.push(w.numPointLightShadows),y.push(w.numSpotLightShadows),y.push(w.numSpotLightShadowsWithMaps),y.push(w.numLightProbes),y.push(w.shadowMapType),y.push(w.toneMapping),y.push(w.numClippingPlanes),y.push(w.numClipIntersection),y.push(w.depthPacking)}function v(y,w){o.disableAll(),w.supportsVertexTextures&&o.enable(0),w.instancing&&o.enable(1),w.instancingColor&&o.enable(2),w.instancingMorph&&o.enable(3),w.matcap&&o.enable(4),w.envMap&&o.enable(5),w.normalMapObjectSpace&&o.enable(6),w.normalMapTangentSpace&&o.enable(7),w.clearcoat&&o.enable(8),w.iridescence&&o.enable(9),w.alphaTest&&o.enable(10),w.vertexColors&&o.enable(11),w.vertexAlphas&&o.enable(12),w.vertexUv1s&&o.enable(13),w.vertexUv2s&&o.enable(14),w.vertexUv3s&&o.enable(15),w.vertexTangents&&o.enable(16),w.anisotropy&&o.enable(17),w.alphaHash&&o.enable(18),w.batching&&o.enable(19),w.dispersion&&o.enable(20),w.batchingColor&&o.enable(21),y.push(o.mask),o.disableAll(),w.fog&&o.enable(0),w.useFog&&o.enable(1),w.flatShading&&o.enable(2),w.logarithmicDepthBuffer&&o.enable(3),w.reverseDepthBuffer&&o.enable(4),w.skinning&&o.enable(5),w.morphTargets&&o.enable(6),w.morphNormals&&o.enable(7),w.morphColors&&o.enable(8),w.premultipliedAlpha&&o.enable(9),w.shadowMapEnabled&&o.enable(10),w.doubleSided&&o.enable(11),w.flipSided&&o.enable(12),w.useDepthPacking&&o.enable(13),w.dithering&&o.enable(14),w.transmission&&o.enable(15),w.sheen&&o.enable(16),w.opaque&&o.enable(17),w.pointsUvs&&o.enable(18),w.decodeVideoTexture&&o.enable(19),w.alphaToCoverage&&o.enable(20),y.push(o.mask)}function U(y){let w=g[y.type],k;if(w){let K=fn[w];k=Zu.clone(K.uniforms)}else k=y.uniforms;return k}function R(y,w){let k;for(let K=0,J=h.length;K<J;K++){let ot=h[K];if(ot.cacheKey===w){k=ot,++k.usedTimes;break}}return k===void 0&&(k=new ig(i,w,y,r),h.push(k)),k}function P(y){if(--y.usedTimes===0){let w=h.indexOf(y);h[w]=h[h.length-1],h.pop(),y.destroy()}}function F(y){l.remove(y)}function $(){l.dispose()}return{getParameters:u,getProgramCacheKey:S,getUniforms:U,acquireProgram:R,releaseProgram:P,releaseShaderCache:F,programs:h,dispose:$}}function ag(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function og(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Rc(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Pc(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(f,d,m,x,g,p){let u=i[t];return u===void 0?(u={id:f.id,object:f,geometry:d,material:m,groupOrder:x,renderOrder:f.renderOrder,z:g,group:p},i[t]=u):(u.id=f.id,u.object=f,u.geometry=d,u.material=m,u.groupOrder=x,u.renderOrder=f.renderOrder,u.z=g,u.group=p),t++,u}function o(f,d,m,x,g,p){let u=a(f,d,m,x,g,p);m.transmission>0?n.push(u):m.transparent===!0?s.push(u):e.push(u)}function l(f,d,m,x,g,p){let u=a(f,d,m,x,g,p);m.transmission>0?n.unshift(u):m.transparent===!0?s.unshift(u):e.unshift(u)}function c(f,d){e.length>1&&e.sort(f||og),n.length>1&&n.sort(d||Rc),s.length>1&&s.sort(d||Rc)}function h(){for(let f=t,d=i.length;f<d;f++){let m=i[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:o,unshift:l,finish:h,sort:c}}function lg(){let i=new WeakMap;function t(n,s){let r=i.get(n),a;return r===void 0?(a=new Pc,i.set(n,[a])):s>=r.length?(a=new Pc,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function cg(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new B,color:new qt};break;case"SpotLight":e={position:new B,direction:new B,color:new qt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new B,color:new qt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new B,skyColor:new qt,groundColor:new qt};break;case"RectAreaLight":e={color:new qt,position:new B,halfWidth:new B,halfHeight:new B};break}return i[t.id]=e,e}}}function hg(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var ug=0;function fg(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function dg(i){let t=new cg,e=hg(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new B);let s=new B,r=new re,a=new re;function o(c){let h=0,f=0,d=0;for(let $=0;$<9;$++)n.probe[$].set(0,0,0);let m=0,x=0,g=0,p=0,u=0,S=0,_=0,v=0,U=0,R=0,P=0;c.sort(fg);for(let $=0,y=c.length;$<y;$++){let w=c[$],k=w.color,K=w.intensity,J=w.distance,ot=w.shadow&&w.shadow.map?w.shadow.map.texture:null;if(w.isAmbientLight)h+=k.r*K,f+=k.g*K,d+=k.b*K;else if(w.isLightProbe){for(let H=0;H<9;H++)n.probe[H].addScaledVector(w.sh.coefficients[H],K);P++}else if(w.isDirectionalLight){let H=t.get(w);if(H.color.copy(w.color).multiplyScalar(w.intensity),w.castShadow){let it=w.shadow,N=e.get(w);N.shadowIntensity=it.intensity,N.shadowBias=it.bias,N.shadowNormalBias=it.normalBias,N.shadowRadius=it.radius,N.shadowMapSize=it.mapSize,n.directionalShadow[m]=N,n.directionalShadowMap[m]=ot,n.directionalShadowMatrix[m]=w.shadow.matrix,S++}n.directional[m]=H,m++}else if(w.isSpotLight){let H=t.get(w);H.position.setFromMatrixPosition(w.matrixWorld),H.color.copy(k).multiplyScalar(K),H.distance=J,H.coneCos=Math.cos(w.angle),H.penumbraCos=Math.cos(w.angle*(1-w.penumbra)),H.decay=w.decay,n.spot[g]=H;let it=w.shadow;if(w.map&&(n.spotLightMap[U]=w.map,U++,it.updateMatrices(w),w.castShadow&&R++),n.spotLightMatrix[g]=it.matrix,w.castShadow){let N=e.get(w);N.shadowIntensity=it.intensity,N.shadowBias=it.bias,N.shadowNormalBias=it.normalBias,N.shadowRadius=it.radius,N.shadowMapSize=it.mapSize,n.spotShadow[g]=N,n.spotShadowMap[g]=ot,v++}g++}else if(w.isRectAreaLight){let H=t.get(w);H.color.copy(k).multiplyScalar(K),H.halfWidth.set(w.width*.5,0,0),H.halfHeight.set(0,w.height*.5,0),n.rectArea[p]=H,p++}else if(w.isPointLight){let H=t.get(w);if(H.color.copy(w.color).multiplyScalar(w.intensity),H.distance=w.distance,H.decay=w.decay,w.castShadow){let it=w.shadow,N=e.get(w);N.shadowIntensity=it.intensity,N.shadowBias=it.bias,N.shadowNormalBias=it.normalBias,N.shadowRadius=it.radius,N.shadowMapSize=it.mapSize,N.shadowCameraNear=it.camera.near,N.shadowCameraFar=it.camera.far,n.pointShadow[x]=N,n.pointShadowMap[x]=ot,n.pointShadowMatrix[x]=w.shadow.matrix,_++}n.point[x]=H,x++}else if(w.isHemisphereLight){let H=t.get(w);H.skyColor.copy(w.color).multiplyScalar(K),H.groundColor.copy(w.groundColor).multiplyScalar(K),n.hemi[u]=H,u++}}p>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=wt.LTC_FLOAT_1,n.rectAreaLTC2=wt.LTC_FLOAT_2):(n.rectAreaLTC1=wt.LTC_HALF_1,n.rectAreaLTC2=wt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=f,n.ambient[2]=d;let F=n.hash;(F.directionalLength!==m||F.pointLength!==x||F.spotLength!==g||F.rectAreaLength!==p||F.hemiLength!==u||F.numDirectionalShadows!==S||F.numPointShadows!==_||F.numSpotShadows!==v||F.numSpotMaps!==U||F.numLightProbes!==P)&&(n.directional.length=m,n.spot.length=g,n.rectArea.length=p,n.point.length=x,n.hemi.length=u,n.directionalShadow.length=S,n.directionalShadowMap.length=S,n.pointShadow.length=_,n.pointShadowMap.length=_,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=S,n.pointShadowMatrix.length=_,n.spotLightMatrix.length=v+U-R,n.spotLightMap.length=U,n.numSpotLightShadowsWithMaps=R,n.numLightProbes=P,F.directionalLength=m,F.pointLength=x,F.spotLength=g,F.rectAreaLength=p,F.hemiLength=u,F.numDirectionalShadows=S,F.numPointShadows=_,F.numSpotShadows=v,F.numSpotMaps=U,F.numLightProbes=P,n.version=ug++)}function l(c,h){let f=0,d=0,m=0,x=0,g=0,p=h.matrixWorldInverse;for(let u=0,S=c.length;u<S;u++){let _=c[u];if(_.isDirectionalLight){let v=n.directional[f];v.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(p),f++}else if(_.isSpotLight){let v=n.spot[m];v.position.setFromMatrixPosition(_.matrixWorld),v.position.applyMatrix4(p),v.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(p),m++}else if(_.isRectAreaLight){let v=n.rectArea[x];v.position.setFromMatrixPosition(_.matrixWorld),v.position.applyMatrix4(p),a.identity(),r.copy(_.matrixWorld),r.premultiply(p),a.extractRotation(r),v.halfWidth.set(_.width*.5,0,0),v.halfHeight.set(0,_.height*.5,0),v.halfWidth.applyMatrix4(a),v.halfHeight.applyMatrix4(a),x++}else if(_.isPointLight){let v=n.point[d];v.position.setFromMatrixPosition(_.matrixWorld),v.position.applyMatrix4(p),d++}else if(_.isHemisphereLight){let v=n.hemi[g];v.direction.setFromMatrixPosition(_.matrixWorld),v.direction.transformDirection(p),g++}}}return{setup:o,setupView:l,state:n}}function Ic(i){let t=new dg(i),e=[],n=[];function s(h){c.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function a(h){n.push(h)}function o(){t.setup(e)}function l(h){t.setupView(e,h)}let c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function pg(i){let t=new WeakMap;function e(s,r=0){let a=t.get(s),o;return a===void 0?(o=new Ic(i),t.set(s,[o])):r>=a.length?(o=new Ic(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}var Uo=class extends jn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=su,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},No=class extends jn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},mg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,gg=`uniform sampler2D shadow_pass;
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
}`;function _g(i,t,e){let n=new Es,s=new pt,r=new pt,a=new de,o=new Uo({depthPacking:ru}),l=new No,c={},h=e.maxTextureSize,f={[mn]:Se,[Se]:mn,[Rn]:Rn},d=new Ve({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new pt},radius:{value:4}},vertexShader:mg,fragmentShader:gg}),m=d.clone();m.defines.HORIZONTAL_PASS=1;let x=new Te;x.setAttribute("position",new Le(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let g=new Ae(x,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Xc;let u=this.type;this.render=function(R,P,F){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||R.length===0)return;let $=i.getRenderTarget(),y=i.getActiveCubeFace(),w=i.getActiveMipmapLevel(),k=i.state;k.setBlending(dn),k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);let K=u!==En&&this.type===En,J=u===En&&this.type!==En;for(let ot=0,H=R.length;ot<H;ot++){let it=R[ot],N=it.shadow;if(N===void 0){console.warn("THREE.WebGLShadowMap:",it,"has no shadow.");continue}if(N.autoUpdate===!1&&N.needsUpdate===!1)continue;s.copy(N.mapSize);let mt=N.getFrameExtents();if(s.multiply(mt),r.copy(N.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/mt.x),s.x=r.x*mt.x,N.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/mt.y),s.y=r.y*mt.y,N.mapSize.y=r.y)),N.map===null||K===!0||J===!0){let _t=this.type!==En?{minFilter:$e,magFilter:$e}:{};N.map!==null&&N.map.dispose(),N.map=new an(s.x,s.y,_t),N.map.texture.name=it.name+".shadowMap",N.camera.updateProjectionMatrix()}i.setRenderTarget(N.map),i.clear();let ft=N.getViewportCount();for(let _t=0;_t<ft;_t++){let Pt=N.getViewport(_t);a.set(r.x*Pt.x,r.y*Pt.y,r.x*Pt.z,r.y*Pt.w),k.viewport(a),N.updateMatrices(it,_t),n=N.getFrustum(),v(P,F,N.camera,it,this.type)}N.isPointLightShadow!==!0&&this.type===En&&S(N,F),N.needsUpdate=!1}u=this.type,p.needsUpdate=!1,i.setRenderTarget($,y,w)};function S(R,P){let F=t.update(g);d.defines.VSM_SAMPLES!==R.blurSamples&&(d.defines.VSM_SAMPLES=R.blurSamples,m.defines.VSM_SAMPLES=R.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new an(s.x,s.y)),d.uniforms.shadow_pass.value=R.map.texture,d.uniforms.resolution.value=R.mapSize,d.uniforms.radius.value=R.radius,i.setRenderTarget(R.mapPass),i.clear(),i.renderBufferDirect(P,null,F,d,g,null),m.uniforms.shadow_pass.value=R.mapPass.texture,m.uniforms.resolution.value=R.mapSize,m.uniforms.radius.value=R.radius,i.setRenderTarget(R.map),i.clear(),i.renderBufferDirect(P,null,F,m,g,null)}function _(R,P,F,$){let y=null,w=F.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(w!==void 0)y=w;else if(y=F.isPointLight===!0?l:o,i.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0){let k=y.uuid,K=P.uuid,J=c[k];J===void 0&&(J={},c[k]=J);let ot=J[K];ot===void 0&&(ot=y.clone(),J[K]=ot,P.addEventListener("dispose",U)),y=ot}if(y.visible=P.visible,y.wireframe=P.wireframe,$===En?y.side=P.shadowSide!==null?P.shadowSide:P.side:y.side=P.shadowSide!==null?P.shadowSide:f[P.side],y.alphaMap=P.alphaMap,y.alphaTest=P.alphaTest,y.map=P.map,y.clipShadows=P.clipShadows,y.clippingPlanes=P.clippingPlanes,y.clipIntersection=P.clipIntersection,y.displacementMap=P.displacementMap,y.displacementScale=P.displacementScale,y.displacementBias=P.displacementBias,y.wireframeLinewidth=P.wireframeLinewidth,y.linewidth=P.linewidth,F.isPointLight===!0&&y.isMeshDistanceMaterial===!0){let k=i.properties.get(y);k.light=F}return y}function v(R,P,F,$,y){if(R.visible===!1)return;if(R.layers.test(P.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&y===En)&&(!R.frustumCulled||n.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,R.matrixWorld);let K=t.update(R),J=R.material;if(Array.isArray(J)){let ot=K.groups;for(let H=0,it=ot.length;H<it;H++){let N=ot[H],mt=J[N.materialIndex];if(mt&&mt.visible){let ft=_(R,mt,$,y);R.onBeforeShadow(i,R,P,F,K,ft,N),i.renderBufferDirect(F,null,K,ft,R,N),R.onAfterShadow(i,R,P,F,K,ft,N)}}}else if(J.visible){let ot=_(R,J,$,y);R.onBeforeShadow(i,R,P,F,K,ot,null),i.renderBufferDirect(F,null,K,ot,R,null),R.onAfterShadow(i,R,P,F,K,ot,null)}}let k=R.children;for(let K=0,J=k.length;K<J;K++)v(k[K],P,F,$,y)}function U(R){R.target.removeEventListener("dispose",U);for(let F in c){let $=c[F],y=R.target.uuid;y in $&&($[y].dispose(),delete $[y])}}}var xg={[Ba]:za,[ka]:Ha,[Va]:Wa,[qi]:Ga,[za]:Ba,[Ha]:ka,[Wa]:Va,[Ga]:qi};function yg(i){function t(){let z=!1,Mt=new de,ct=null,dt=new de(0,0,0,0);return{setMask:function(Tt){ct!==Tt&&!z&&(i.colorMask(Tt,Tt,Tt,Tt),ct=Tt)},setLocked:function(Tt){z=Tt},setClear:function(Tt,Ct,Zt,oe,le){le===!0&&(Tt*=oe,Ct*=oe,Zt*=oe),Mt.set(Tt,Ct,Zt,oe),dt.equals(Mt)===!1&&(i.clearColor(Tt,Ct,Zt,oe),dt.copy(Mt))},reset:function(){z=!1,ct=null,dt.set(-1,0,0,0)}}}function e(){let z=!1,Mt=!1,ct=null,dt=null,Tt=null;return{setReversed:function(Ct){Mt=Ct},setTest:function(Ct){Ct?C(i.DEPTH_TEST):b(i.DEPTH_TEST)},setMask:function(Ct){ct!==Ct&&!z&&(i.depthMask(Ct),ct=Ct)},setFunc:function(Ct){if(Mt&&(Ct=xg[Ct]),dt!==Ct){switch(Ct){case Ba:i.depthFunc(i.NEVER);break;case za:i.depthFunc(i.ALWAYS);break;case ka:i.depthFunc(i.LESS);break;case qi:i.depthFunc(i.LEQUAL);break;case Va:i.depthFunc(i.EQUAL);break;case Ga:i.depthFunc(i.GEQUAL);break;case Ha:i.depthFunc(i.GREATER);break;case Wa:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}dt=Ct}},setLocked:function(Ct){z=Ct},setClear:function(Ct){Tt!==Ct&&(i.clearDepth(Ct),Tt=Ct)},reset:function(){z=!1,ct=null,dt=null,Tt=null}}}function n(){let z=!1,Mt=null,ct=null,dt=null,Tt=null,Ct=null,Zt=null,oe=null,le=null;return{setTest:function(Jt){z||(Jt?C(i.STENCIL_TEST):b(i.STENCIL_TEST))},setMask:function(Jt){Mt!==Jt&&!z&&(i.stencilMask(Jt),Mt=Jt)},setFunc:function(Jt,Ee,Ge){(ct!==Jt||dt!==Ee||Tt!==Ge)&&(i.stencilFunc(Jt,Ee,Ge),ct=Jt,dt=Ee,Tt=Ge)},setOp:function(Jt,Ee,Ge){(Ct!==Jt||Zt!==Ee||oe!==Ge)&&(i.stencilOp(Jt,Ee,Ge),Ct=Jt,Zt=Ee,oe=Ge)},setLocked:function(Jt){z=Jt},setClear:function(Jt){le!==Jt&&(i.clearStencil(Jt),le=Jt)},reset:function(){z=!1,Mt=null,ct=null,dt=null,Tt=null,Ct=null,Zt=null,oe=null,le=null}}}let s=new t,r=new e,a=new n,o=new WeakMap,l=new WeakMap,c={},h={},f=new WeakMap,d=[],m=null,x=!1,g=null,p=null,u=null,S=null,_=null,v=null,U=null,R=new qt(0,0,0),P=0,F=!1,$=null,y=null,w=null,k=null,K=null,J=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),ot=!1,H=0,it=i.getParameter(i.VERSION);it.indexOf("WebGL")!==-1?(H=parseFloat(/^WebGL (\d)/.exec(it)[1]),ot=H>=1):it.indexOf("OpenGL ES")!==-1&&(H=parseFloat(/^OpenGL ES (\d)/.exec(it)[1]),ot=H>=2);let N=null,mt={},ft=i.getParameter(i.SCISSOR_BOX),_t=i.getParameter(i.VIEWPORT),Pt=new de().fromArray(ft),Ot=new de().fromArray(_t);function D(z,Mt,ct,dt){let Tt=new Uint8Array(4),Ct=i.createTexture();i.bindTexture(z,Ct),i.texParameteri(z,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(z,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Zt=0;Zt<ct;Zt++)z===i.TEXTURE_3D||z===i.TEXTURE_2D_ARRAY?i.texImage3D(Mt,0,i.RGBA,1,1,dt,0,i.RGBA,i.UNSIGNED_BYTE,Tt):i.texImage2D(Mt+Zt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Tt);return Ct}let L={};L[i.TEXTURE_2D]=D(i.TEXTURE_2D,i.TEXTURE_2D,1),L[i.TEXTURE_CUBE_MAP]=D(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),L[i.TEXTURE_2D_ARRAY]=D(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),L[i.TEXTURE_3D]=D(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),r.setClear(1),a.setClear(0),C(i.DEPTH_TEST),r.setFunc(qi),Y(!1),tt(Fl),C(i.CULL_FACE),T(dn);function C(z){c[z]!==!0&&(i.enable(z),c[z]=!0)}function b(z){c[z]!==!1&&(i.disable(z),c[z]=!1)}function Q(z,Mt){return h[z]!==Mt?(i.bindFramebuffer(z,Mt),h[z]=Mt,z===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=Mt),z===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=Mt),!0):!1}function st(z,Mt){let ct=d,dt=!1;if(z){ct=f.get(Mt),ct===void 0&&(ct=[],f.set(Mt,ct));let Tt=z.textures;if(ct.length!==Tt.length||ct[0]!==i.COLOR_ATTACHMENT0){for(let Ct=0,Zt=Tt.length;Ct<Zt;Ct++)ct[Ct]=i.COLOR_ATTACHMENT0+Ct;ct.length=Tt.length,dt=!0}}else ct[0]!==i.BACK&&(ct[0]=i.BACK,dt=!0);dt&&i.drawBuffers(ct)}function Z(z){return m!==z?(i.useProgram(z),m=z,!0):!1}let ut={[hi]:i.FUNC_ADD,[Ih]:i.FUNC_SUBTRACT,[Lh]:i.FUNC_REVERSE_SUBTRACT};ut[Dh]=i.MIN,ut[Uh]=i.MAX;let q={[Nh]:i.ZERO,[Fh]:i.ONE,[Oh]:i.SRC_COLOR,[Fa]:i.SRC_ALPHA,[Hh]:i.SRC_ALPHA_SATURATE,[Vh]:i.DST_COLOR,[zh]:i.DST_ALPHA,[Bh]:i.ONE_MINUS_SRC_COLOR,[Oa]:i.ONE_MINUS_SRC_ALPHA,[Gh]:i.ONE_MINUS_DST_COLOR,[kh]:i.ONE_MINUS_DST_ALPHA,[Wh]:i.CONSTANT_COLOR,[Xh]:i.ONE_MINUS_CONSTANT_COLOR,[qh]:i.CONSTANT_ALPHA,[Yh]:i.ONE_MINUS_CONSTANT_ALPHA};function T(z,Mt,ct,dt,Tt,Ct,Zt,oe,le,Jt){if(z===dn){x===!0&&(b(i.BLEND),x=!1);return}if(x===!1&&(C(i.BLEND),x=!0),z!==Ph){if(z!==g||Jt!==F){if((p!==hi||_!==hi)&&(i.blendEquation(i.FUNC_ADD),p=hi,_=hi),Jt)switch(z){case Zn:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ol:i.blendFunc(i.ONE,i.ONE);break;case Bl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case zl:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}else switch(z){case Zn:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ol:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Bl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case zl:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}u=null,S=null,v=null,U=null,R.set(0,0,0),P=0,g=z,F=Jt}return}Tt=Tt||Mt,Ct=Ct||ct,Zt=Zt||dt,(Mt!==p||Tt!==_)&&(i.blendEquationSeparate(ut[Mt],ut[Tt]),p=Mt,_=Tt),(ct!==u||dt!==S||Ct!==v||Zt!==U)&&(i.blendFuncSeparate(q[ct],q[dt],q[Ct],q[Zt]),u=ct,S=dt,v=Ct,U=Zt),(oe.equals(R)===!1||le!==P)&&(i.blendColor(oe.r,oe.g,oe.b,le),R.copy(oe),P=le),g=z,F=!1}function V(z,Mt){z.side===Rn?b(i.CULL_FACE):C(i.CULL_FACE);let ct=z.side===Se;Mt&&(ct=!ct),Y(ct),z.blending===Zn&&z.transparent===!1?T(dn):T(z.blending,z.blendEquation,z.blendSrc,z.blendDst,z.blendEquationAlpha,z.blendSrcAlpha,z.blendDstAlpha,z.blendColor,z.blendAlpha,z.premultipliedAlpha),r.setFunc(z.depthFunc),r.setTest(z.depthTest),r.setMask(z.depthWrite),s.setMask(z.colorWrite);let dt=z.stencilWrite;a.setTest(dt),dt&&(a.setMask(z.stencilWriteMask),a.setFunc(z.stencilFunc,z.stencilRef,z.stencilFuncMask),a.setOp(z.stencilFail,z.stencilZFail,z.stencilZPass)),O(z.polygonOffset,z.polygonOffsetFactor,z.polygonOffsetUnits),z.alphaToCoverage===!0?C(i.SAMPLE_ALPHA_TO_COVERAGE):b(i.SAMPLE_ALPHA_TO_COVERAGE)}function Y(z){$!==z&&(z?i.frontFace(i.CW):i.frontFace(i.CCW),$=z)}function tt(z){z!==Eh?(C(i.CULL_FACE),z!==y&&(z===Fl?i.cullFace(i.BACK):z===Ch?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):b(i.CULL_FACE),y=z}function rt(z){z!==w&&(ot&&i.lineWidth(z),w=z)}function O(z,Mt,ct){z?(C(i.POLYGON_OFFSET_FILL),(k!==Mt||K!==ct)&&(i.polygonOffset(Mt,ct),k=Mt,K=ct)):b(i.POLYGON_OFFSET_FILL)}function I(z){z?C(i.SCISSOR_TEST):b(i.SCISSOR_TEST)}function A(z){z===void 0&&(z=i.TEXTURE0+J-1),N!==z&&(i.activeTexture(z),N=z)}function M(z,Mt,ct){ct===void 0&&(N===null?ct=i.TEXTURE0+J-1:ct=N);let dt=mt[ct];dt===void 0&&(dt={type:void 0,texture:void 0},mt[ct]=dt),(dt.type!==z||dt.texture!==Mt)&&(N!==ct&&(i.activeTexture(ct),N=ct),i.bindTexture(z,Mt||L[z]),dt.type=z,dt.texture=Mt)}function W(){let z=mt[N];z!==void 0&&z.type!==void 0&&(i.bindTexture(z.type,null),z.type=void 0,z.texture=void 0)}function at(){try{i.compressedTexImage2D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function lt(){try{i.compressedTexImage3D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function ht(){try{i.texSubImage2D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function It(){try{i.texSubImage3D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function vt(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function At(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Wt(){try{i.texStorage2D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function gt(){try{i.texStorage3D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function bt(){try{i.texImage2D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function zt(){try{i.texImage3D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Nt(z){Pt.equals(z)===!1&&(i.scissor(z.x,z.y,z.z,z.w),Pt.copy(z))}function Et(z){Ot.equals(z)===!1&&(i.viewport(z.x,z.y,z.z,z.w),Ot.copy(z))}function Xt(z,Mt){let ct=l.get(Mt);ct===void 0&&(ct=new WeakMap,l.set(Mt,ct));let dt=ct.get(z);dt===void 0&&(dt=i.getUniformBlockIndex(Mt,z.name),ct.set(z,dt))}function Ht(z,Mt){let dt=l.get(Mt).get(z);o.get(Mt)!==dt&&(i.uniformBlockBinding(Mt,dt,z.__bindingPointIndex),o.set(Mt,dt))}function ee(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),c={},N=null,mt={},h={},f=new WeakMap,d=[],m=null,x=!1,g=null,p=null,u=null,S=null,_=null,v=null,U=null,R=new qt(0,0,0),P=0,F=!1,$=null,y=null,w=null,k=null,K=null,Pt.set(0,0,i.canvas.width,i.canvas.height),Ot.set(0,0,i.canvas.width,i.canvas.height),s.reset(),r.reset(),a.reset()}return{buffers:{color:s,depth:r,stencil:a},enable:C,disable:b,bindFramebuffer:Q,drawBuffers:st,useProgram:Z,setBlending:T,setMaterial:V,setFlipSided:Y,setCullFace:tt,setLineWidth:rt,setPolygonOffset:O,setScissorTest:I,activeTexture:A,bindTexture:M,unbindTexture:W,compressedTexImage2D:at,compressedTexImage3D:lt,texImage2D:bt,texImage3D:zt,updateUBOMapping:Xt,uniformBlockBinding:Ht,texStorage2D:Wt,texStorage3D:gt,texSubImage2D:ht,texSubImage3D:It,compressedTexSubImage2D:vt,compressedTexSubImage3D:At,scissor:Nt,viewport:Et,reset:ee}}function Lc(i,t,e,n){let s=vg(n);switch(e){case Kc:return i*t;case jc:return i*t;case th:return i*t*2;case eh:return i*t/s.components*s.byteLength;case pl:return i*t/s.components*s.byteLength;case nh:return i*t*2/s.components*s.byteLength;case ml:return i*t*2/s.components*s.byteLength;case Qc:return i*t*3/s.components*s.byteLength;case qe:return i*t*4/s.components*s.byteLength;case gl:return i*t*4/s.components*s.byteLength;case fr:case dr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case pr:case mr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case $a:case Qa:return Math.max(i,16)*Math.max(t,8)/4;case Ja:case Ka:return Math.max(i,8)*Math.max(t,8)/2;case ja:case to:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case eo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case no:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case io:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case so:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case ro:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case ao:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case oo:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case lo:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case co:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case ho:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case uo:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case fo:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case po:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case mo:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case go:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case gr:case _o:case xo:return Math.ceil(i/4)*Math.ceil(t/4)*16;case ih:case yo:return Math.ceil(i/4)*Math.ceil(t/4)*8;case vo:case Mo:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function vg(i){switch(i){case Dn:case Zc:return{byteLength:1,components:1};case Ss:case Jc:case xi:return{byteLength:2,components:1};case fl:case dl:return{byteLength:2,components:4};case pi:case ul:case In:return{byteLength:4,components:1};case $c:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function Mg(i,t,e,n,s,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new pt,h=new WeakMap,f,d=new WeakMap,m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(A,M){return m?new OffscreenCanvas(A,M):br("canvas")}function g(A,M,W){let at=1,lt=I(A);if((lt.width>W||lt.height>W)&&(at=W/Math.max(lt.width,lt.height)),at<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){let ht=Math.floor(at*lt.width),It=Math.floor(at*lt.height);f===void 0&&(f=x(ht,It));let vt=M?x(ht,It):f;return vt.width=ht,vt.height=It,vt.getContext("2d").drawImage(A,0,0,ht,It),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+lt.width+"x"+lt.height+") to ("+ht+"x"+It+")."),vt}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+lt.width+"x"+lt.height+")."),A;return A}function p(A){return A.generateMipmaps&&A.minFilter!==$e&&A.minFilter!==Xe}function u(A){i.generateMipmap(A)}function S(A,M,W,at,lt=!1){if(A!==null){if(i[A]!==void 0)return i[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let ht=M;if(M===i.RED&&(W===i.FLOAT&&(ht=i.R32F),W===i.HALF_FLOAT&&(ht=i.R16F),W===i.UNSIGNED_BYTE&&(ht=i.R8)),M===i.RED_INTEGER&&(W===i.UNSIGNED_BYTE&&(ht=i.R8UI),W===i.UNSIGNED_SHORT&&(ht=i.R16UI),W===i.UNSIGNED_INT&&(ht=i.R32UI),W===i.BYTE&&(ht=i.R8I),W===i.SHORT&&(ht=i.R16I),W===i.INT&&(ht=i.R32I)),M===i.RG&&(W===i.FLOAT&&(ht=i.RG32F),W===i.HALF_FLOAT&&(ht=i.RG16F),W===i.UNSIGNED_BYTE&&(ht=i.RG8)),M===i.RG_INTEGER&&(W===i.UNSIGNED_BYTE&&(ht=i.RG8UI),W===i.UNSIGNED_SHORT&&(ht=i.RG16UI),W===i.UNSIGNED_INT&&(ht=i.RG32UI),W===i.BYTE&&(ht=i.RG8I),W===i.SHORT&&(ht=i.RG16I),W===i.INT&&(ht=i.RG32I)),M===i.RGB_INTEGER&&(W===i.UNSIGNED_BYTE&&(ht=i.RGB8UI),W===i.UNSIGNED_SHORT&&(ht=i.RGB16UI),W===i.UNSIGNED_INT&&(ht=i.RGB32UI),W===i.BYTE&&(ht=i.RGB8I),W===i.SHORT&&(ht=i.RGB16I),W===i.INT&&(ht=i.RGB32I)),M===i.RGBA_INTEGER&&(W===i.UNSIGNED_BYTE&&(ht=i.RGBA8UI),W===i.UNSIGNED_SHORT&&(ht=i.RGBA16UI),W===i.UNSIGNED_INT&&(ht=i.RGBA32UI),W===i.BYTE&&(ht=i.RGBA8I),W===i.SHORT&&(ht=i.RGBA16I),W===i.INT&&(ht=i.RGBA32I)),M===i.RGB&&W===i.UNSIGNED_INT_5_9_9_9_REV&&(ht=i.RGB9_E5),M===i.RGBA){let It=lt?yr:te.getTransfer(at);W===i.FLOAT&&(ht=i.RGBA32F),W===i.HALF_FLOAT&&(ht=i.RGBA16F),W===i.UNSIGNED_BYTE&&(ht=It===ae?i.SRGB8_ALPHA8:i.RGBA8),W===i.UNSIGNED_SHORT_4_4_4_4&&(ht=i.RGBA4),W===i.UNSIGNED_SHORT_5_5_5_1&&(ht=i.RGB5_A1)}return(ht===i.R16F||ht===i.R32F||ht===i.RG16F||ht===i.RG32F||ht===i.RGBA16F||ht===i.RGBA32F)&&t.get("EXT_color_buffer_float"),ht}function _(A,M){let W;return A?M===null||M===pi||M===Ji?W=i.DEPTH24_STENCIL8:M===In?W=i.DEPTH32F_STENCIL8:M===Ss&&(W=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===pi||M===Ji?W=i.DEPTH_COMPONENT24:M===In?W=i.DEPTH_COMPONENT32F:M===Ss&&(W=i.DEPTH_COMPONENT16),W}function v(A,M){return p(A)===!0||A.isFramebufferTexture&&A.minFilter!==$e&&A.minFilter!==Xe?Math.log2(Math.max(M.width,M.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?M.mipmaps.length:1}function U(A){let M=A.target;M.removeEventListener("dispose",U),P(M),M.isVideoTexture&&h.delete(M)}function R(A){let M=A.target;M.removeEventListener("dispose",R),$(M)}function P(A){let M=n.get(A);if(M.__webglInit===void 0)return;let W=A.source,at=d.get(W);if(at){let lt=at[M.__cacheKey];lt.usedTimes--,lt.usedTimes===0&&F(A),Object.keys(at).length===0&&d.delete(W)}n.remove(A)}function F(A){let M=n.get(A);i.deleteTexture(M.__webglTexture);let W=A.source,at=d.get(W);delete at[M.__cacheKey],a.memory.textures--}function $(A){let M=n.get(A);if(A.depthTexture&&A.depthTexture.dispose(),A.isWebGLCubeRenderTarget)for(let at=0;at<6;at++){if(Array.isArray(M.__webglFramebuffer[at]))for(let lt=0;lt<M.__webglFramebuffer[at].length;lt++)i.deleteFramebuffer(M.__webglFramebuffer[at][lt]);else i.deleteFramebuffer(M.__webglFramebuffer[at]);M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer[at])}else{if(Array.isArray(M.__webglFramebuffer))for(let at=0;at<M.__webglFramebuffer.length;at++)i.deleteFramebuffer(M.__webglFramebuffer[at]);else i.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&i.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let at=0;at<M.__webglColorRenderbuffer.length;at++)M.__webglColorRenderbuffer[at]&&i.deleteRenderbuffer(M.__webglColorRenderbuffer[at]);M.__webglDepthRenderbuffer&&i.deleteRenderbuffer(M.__webglDepthRenderbuffer)}let W=A.textures;for(let at=0,lt=W.length;at<lt;at++){let ht=n.get(W[at]);ht.__webglTexture&&(i.deleteTexture(ht.__webglTexture),a.memory.textures--),n.remove(W[at])}n.remove(A)}let y=0;function w(){y=0}function k(){let A=y;return A>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+s.maxTextures),y+=1,A}function K(A){let M=[];return M.push(A.wrapS),M.push(A.wrapT),M.push(A.wrapR||0),M.push(A.magFilter),M.push(A.minFilter),M.push(A.anisotropy),M.push(A.internalFormat),M.push(A.format),M.push(A.type),M.push(A.generateMipmaps),M.push(A.premultiplyAlpha),M.push(A.flipY),M.push(A.unpackAlignment),M.push(A.colorSpace),M.join()}function J(A,M){let W=n.get(A);if(A.isVideoTexture&&rt(A),A.isRenderTargetTexture===!1&&A.version>0&&W.__version!==A.version){let at=A.image;if(at===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(at.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Ot(W,A,M);return}}e.bindTexture(i.TEXTURE_2D,W.__webglTexture,i.TEXTURE0+M)}function ot(A,M){let W=n.get(A);if(A.version>0&&W.__version!==A.version){Ot(W,A,M);return}e.bindTexture(i.TEXTURE_2D_ARRAY,W.__webglTexture,i.TEXTURE0+M)}function H(A,M){let W=n.get(A);if(A.version>0&&W.__version!==A.version){Ot(W,A,M);return}e.bindTexture(i.TEXTURE_3D,W.__webglTexture,i.TEXTURE0+M)}function it(A,M){let W=n.get(A);if(A.version>0&&W.__version!==A.version){D(W,A,M);return}e.bindTexture(i.TEXTURE_CUBE_MAP,W.__webglTexture,i.TEXTURE0+M)}let N={[Ya]:i.REPEAT,[fi]:i.CLAMP_TO_EDGE,[Za]:i.MIRRORED_REPEAT},mt={[$e]:i.NEAREST,[iu]:i.NEAREST_MIPMAP_NEAREST,[zs]:i.NEAREST_MIPMAP_LINEAR,[Xe]:i.LINEAR,[ia]:i.LINEAR_MIPMAP_NEAREST,[di]:i.LINEAR_MIPMAP_LINEAR},ft={[ou]:i.NEVER,[du]:i.ALWAYS,[lu]:i.LESS,[rh]:i.LEQUAL,[cu]:i.EQUAL,[fu]:i.GEQUAL,[hu]:i.GREATER,[uu]:i.NOTEQUAL};function _t(A,M){if(M.type===In&&t.has("OES_texture_float_linear")===!1&&(M.magFilter===Xe||M.magFilter===ia||M.magFilter===zs||M.magFilter===di||M.minFilter===Xe||M.minFilter===ia||M.minFilter===zs||M.minFilter===di)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(A,i.TEXTURE_WRAP_S,N[M.wrapS]),i.texParameteri(A,i.TEXTURE_WRAP_T,N[M.wrapT]),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,N[M.wrapR]),i.texParameteri(A,i.TEXTURE_MAG_FILTER,mt[M.magFilter]),i.texParameteri(A,i.TEXTURE_MIN_FILTER,mt[M.minFilter]),M.compareFunction&&(i.texParameteri(A,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(A,i.TEXTURE_COMPARE_FUNC,ft[M.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===$e||M.minFilter!==zs&&M.minFilter!==di||M.type===In&&t.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||n.get(M).__currentAnisotropy){let W=t.get("EXT_texture_filter_anisotropic");i.texParameterf(A,W.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,s.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy}}}function Pt(A,M){let W=!1;A.__webglInit===void 0&&(A.__webglInit=!0,M.addEventListener("dispose",U));let at=M.source,lt=d.get(at);lt===void 0&&(lt={},d.set(at,lt));let ht=K(M);if(ht!==A.__cacheKey){lt[ht]===void 0&&(lt[ht]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,W=!0),lt[ht].usedTimes++;let It=lt[A.__cacheKey];It!==void 0&&(lt[A.__cacheKey].usedTimes--,It.usedTimes===0&&F(M)),A.__cacheKey=ht,A.__webglTexture=lt[ht].texture}return W}function Ot(A,M,W){let at=i.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(at=i.TEXTURE_2D_ARRAY),M.isData3DTexture&&(at=i.TEXTURE_3D);let lt=Pt(A,M),ht=M.source;e.bindTexture(at,A.__webglTexture,i.TEXTURE0+W);let It=n.get(ht);if(ht.version!==It.__version||lt===!0){e.activeTexture(i.TEXTURE0+W);let vt=te.getPrimaries(te.workingColorSpace),At=M.colorSpace===qn?null:te.getPrimaries(M.colorSpace),Wt=M.colorSpace===qn||vt===At?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Wt);let gt=g(M.image,!1,s.maxTextureSize);gt=O(M,gt);let bt=r.convert(M.format,M.colorSpace),zt=r.convert(M.type),Nt=S(M.internalFormat,bt,zt,M.colorSpace,M.isVideoTexture);_t(at,M);let Et,Xt=M.mipmaps,Ht=M.isVideoTexture!==!0,ee=It.__version===void 0||lt===!0,z=ht.dataReady,Mt=v(M,gt);if(M.isDepthTexture)Nt=_(M.format===$i,M.type),ee&&(Ht?e.texStorage2D(i.TEXTURE_2D,1,Nt,gt.width,gt.height):e.texImage2D(i.TEXTURE_2D,0,Nt,gt.width,gt.height,0,bt,zt,null));else if(M.isDataTexture)if(Xt.length>0){Ht&&ee&&e.texStorage2D(i.TEXTURE_2D,Mt,Nt,Xt[0].width,Xt[0].height);for(let ct=0,dt=Xt.length;ct<dt;ct++)Et=Xt[ct],Ht?z&&e.texSubImage2D(i.TEXTURE_2D,ct,0,0,Et.width,Et.height,bt,zt,Et.data):e.texImage2D(i.TEXTURE_2D,ct,Nt,Et.width,Et.height,0,bt,zt,Et.data);M.generateMipmaps=!1}else Ht?(ee&&e.texStorage2D(i.TEXTURE_2D,Mt,Nt,gt.width,gt.height),z&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,gt.width,gt.height,bt,zt,gt.data)):e.texImage2D(i.TEXTURE_2D,0,Nt,gt.width,gt.height,0,bt,zt,gt.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Ht&&ee&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Mt,Nt,Xt[0].width,Xt[0].height,gt.depth);for(let ct=0,dt=Xt.length;ct<dt;ct++)if(Et=Xt[ct],M.format!==qe)if(bt!==null)if(Ht){if(z)if(M.layerUpdates.size>0){let Tt=Lc(Et.width,Et.height,M.format,M.type);for(let Ct of M.layerUpdates){let Zt=Et.data.subarray(Ct*Tt/Et.data.BYTES_PER_ELEMENT,(Ct+1)*Tt/Et.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ct,0,0,Ct,Et.width,Et.height,1,bt,Zt,0,0)}M.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ct,0,0,0,Et.width,Et.height,gt.depth,bt,Et.data,0,0)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ct,Nt,Et.width,Et.height,gt.depth,0,Et.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ht?z&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,ct,0,0,0,Et.width,Et.height,gt.depth,bt,zt,Et.data):e.texImage3D(i.TEXTURE_2D_ARRAY,ct,Nt,Et.width,Et.height,gt.depth,0,bt,zt,Et.data)}else{Ht&&ee&&e.texStorage2D(i.TEXTURE_2D,Mt,Nt,Xt[0].width,Xt[0].height);for(let ct=0,dt=Xt.length;ct<dt;ct++)Et=Xt[ct],M.format!==qe?bt!==null?Ht?z&&e.compressedTexSubImage2D(i.TEXTURE_2D,ct,0,0,Et.width,Et.height,bt,Et.data):e.compressedTexImage2D(i.TEXTURE_2D,ct,Nt,Et.width,Et.height,0,Et.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ht?z&&e.texSubImage2D(i.TEXTURE_2D,ct,0,0,Et.width,Et.height,bt,zt,Et.data):e.texImage2D(i.TEXTURE_2D,ct,Nt,Et.width,Et.height,0,bt,zt,Et.data)}else if(M.isDataArrayTexture)if(Ht){if(ee&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Mt,Nt,gt.width,gt.height,gt.depth),z)if(M.layerUpdates.size>0){let ct=Lc(gt.width,gt.height,M.format,M.type);for(let dt of M.layerUpdates){let Tt=gt.data.subarray(dt*ct/gt.data.BYTES_PER_ELEMENT,(dt+1)*ct/gt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,dt,gt.width,gt.height,1,bt,zt,Tt)}M.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,gt.width,gt.height,gt.depth,bt,zt,gt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Nt,gt.width,gt.height,gt.depth,0,bt,zt,gt.data);else if(M.isData3DTexture)Ht?(ee&&e.texStorage3D(i.TEXTURE_3D,Mt,Nt,gt.width,gt.height,gt.depth),z&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,gt.width,gt.height,gt.depth,bt,zt,gt.data)):e.texImage3D(i.TEXTURE_3D,0,Nt,gt.width,gt.height,gt.depth,0,bt,zt,gt.data);else if(M.isFramebufferTexture){if(ee)if(Ht)e.texStorage2D(i.TEXTURE_2D,Mt,Nt,gt.width,gt.height);else{let ct=gt.width,dt=gt.height;for(let Tt=0;Tt<Mt;Tt++)e.texImage2D(i.TEXTURE_2D,Tt,Nt,ct,dt,0,bt,zt,null),ct>>=1,dt>>=1}}else if(Xt.length>0){if(Ht&&ee){let ct=I(Xt[0]);e.texStorage2D(i.TEXTURE_2D,Mt,Nt,ct.width,ct.height)}for(let ct=0,dt=Xt.length;ct<dt;ct++)Et=Xt[ct],Ht?z&&e.texSubImage2D(i.TEXTURE_2D,ct,0,0,bt,zt,Et):e.texImage2D(i.TEXTURE_2D,ct,Nt,bt,zt,Et);M.generateMipmaps=!1}else if(Ht){if(ee){let ct=I(gt);e.texStorage2D(i.TEXTURE_2D,Mt,Nt,ct.width,ct.height)}z&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,bt,zt,gt)}else e.texImage2D(i.TEXTURE_2D,0,Nt,bt,zt,gt);p(M)&&u(at),It.__version=ht.version,M.onUpdate&&M.onUpdate(M)}A.__version=M.version}function D(A,M,W){if(M.image.length!==6)return;let at=Pt(A,M),lt=M.source;e.bindTexture(i.TEXTURE_CUBE_MAP,A.__webglTexture,i.TEXTURE0+W);let ht=n.get(lt);if(lt.version!==ht.__version||at===!0){e.activeTexture(i.TEXTURE0+W);let It=te.getPrimaries(te.workingColorSpace),vt=M.colorSpace===qn?null:te.getPrimaries(M.colorSpace),At=M.colorSpace===qn||It===vt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,At);let Wt=M.isCompressedTexture||M.image[0].isCompressedTexture,gt=M.image[0]&&M.image[0].isDataTexture,bt=[];for(let dt=0;dt<6;dt++)!Wt&&!gt?bt[dt]=g(M.image[dt],!0,s.maxCubemapSize):bt[dt]=gt?M.image[dt].image:M.image[dt],bt[dt]=O(M,bt[dt]);let zt=bt[0],Nt=r.convert(M.format,M.colorSpace),Et=r.convert(M.type),Xt=S(M.internalFormat,Nt,Et,M.colorSpace),Ht=M.isVideoTexture!==!0,ee=ht.__version===void 0||at===!0,z=lt.dataReady,Mt=v(M,zt);_t(i.TEXTURE_CUBE_MAP,M);let ct;if(Wt){Ht&&ee&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Mt,Xt,zt.width,zt.height);for(let dt=0;dt<6;dt++){ct=bt[dt].mipmaps;for(let Tt=0;Tt<ct.length;Tt++){let Ct=ct[Tt];M.format!==qe?Nt!==null?Ht?z&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,Tt,0,0,Ct.width,Ct.height,Nt,Ct.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,Tt,Xt,Ct.width,Ct.height,0,Ct.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ht?z&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,Tt,0,0,Ct.width,Ct.height,Nt,Et,Ct.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,Tt,Xt,Ct.width,Ct.height,0,Nt,Et,Ct.data)}}}else{if(ct=M.mipmaps,Ht&&ee){ct.length>0&&Mt++;let dt=I(bt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,Mt,Xt,dt.width,dt.height)}for(let dt=0;dt<6;dt++)if(gt){Ht?z&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0,0,0,bt[dt].width,bt[dt].height,Nt,Et,bt[dt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0,Xt,bt[dt].width,bt[dt].height,0,Nt,Et,bt[dt].data);for(let Tt=0;Tt<ct.length;Tt++){let Zt=ct[Tt].image[dt].image;Ht?z&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,Tt+1,0,0,Zt.width,Zt.height,Nt,Et,Zt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,Tt+1,Xt,Zt.width,Zt.height,0,Nt,Et,Zt.data)}}else{Ht?z&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0,0,0,Nt,Et,bt[dt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0,Xt,Nt,Et,bt[dt]);for(let Tt=0;Tt<ct.length;Tt++){let Ct=ct[Tt];Ht?z&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,Tt+1,0,0,Nt,Et,Ct.image[dt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,Tt+1,Xt,Nt,Et,Ct.image[dt])}}}p(M)&&u(i.TEXTURE_CUBE_MAP),ht.__version=lt.version,M.onUpdate&&M.onUpdate(M)}A.__version=M.version}function L(A,M,W,at,lt,ht){let It=r.convert(W.format,W.colorSpace),vt=r.convert(W.type),At=S(W.internalFormat,It,vt,W.colorSpace);if(!n.get(M).__hasExternalTextures){let gt=Math.max(1,M.width>>ht),bt=Math.max(1,M.height>>ht);lt===i.TEXTURE_3D||lt===i.TEXTURE_2D_ARRAY?e.texImage3D(lt,ht,At,gt,bt,M.depth,0,It,vt,null):e.texImage2D(lt,ht,At,gt,bt,0,It,vt,null)}e.bindFramebuffer(i.FRAMEBUFFER,A),tt(M)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,at,lt,n.get(W).__webglTexture,0,Y(M)):(lt===i.TEXTURE_2D||lt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&lt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,at,lt,n.get(W).__webglTexture,ht),e.bindFramebuffer(i.FRAMEBUFFER,null)}function C(A,M,W){if(i.bindRenderbuffer(i.RENDERBUFFER,A),M.depthBuffer){let at=M.depthTexture,lt=at&&at.isDepthTexture?at.type:null,ht=_(M.stencilBuffer,lt),It=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,vt=Y(M);tt(M)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,vt,ht,M.width,M.height):W?i.renderbufferStorageMultisample(i.RENDERBUFFER,vt,ht,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,ht,M.width,M.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,It,i.RENDERBUFFER,A)}else{let at=M.textures;for(let lt=0;lt<at.length;lt++){let ht=at[lt],It=r.convert(ht.format,ht.colorSpace),vt=r.convert(ht.type),At=S(ht.internalFormat,It,vt,ht.colorSpace),Wt=Y(M);W&&tt(M)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Wt,At,M.width,M.height):tt(M)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Wt,At,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,At,M.width,M.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function b(A,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,A),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),J(M.depthTexture,0);let at=n.get(M.depthTexture).__webglTexture,lt=Y(M);if(M.depthTexture.format===Hi)tt(M)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,at,0,lt):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,at,0);else if(M.depthTexture.format===$i)tt(M)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,at,0,lt):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,at,0);else throw new Error("Unknown depthTexture format")}function Q(A){let M=n.get(A),W=A.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==A.depthTexture){let at=A.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),at){let lt=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,at.removeEventListener("dispose",lt)};at.addEventListener("dispose",lt),M.__depthDisposeCallback=lt}M.__boundDepthTexture=at}if(A.depthTexture&&!M.__autoAllocateDepthBuffer){if(W)throw new Error("target.depthTexture not supported in Cube render targets");b(M.__webglFramebuffer,A)}else if(W){M.__webglDepthbuffer=[];for(let at=0;at<6;at++)if(e.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer[at]),M.__webglDepthbuffer[at]===void 0)M.__webglDepthbuffer[at]=i.createRenderbuffer(),C(M.__webglDepthbuffer[at],A,!1);else{let lt=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ht=M.__webglDepthbuffer[at];i.bindRenderbuffer(i.RENDERBUFFER,ht),i.framebufferRenderbuffer(i.FRAMEBUFFER,lt,i.RENDERBUFFER,ht)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=i.createRenderbuffer(),C(M.__webglDepthbuffer,A,!1);else{let at=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,lt=M.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,lt),i.framebufferRenderbuffer(i.FRAMEBUFFER,at,i.RENDERBUFFER,lt)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function st(A,M,W){let at=n.get(A);M!==void 0&&L(at.__webglFramebuffer,A,A.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),W!==void 0&&Q(A)}function Z(A){let M=A.texture,W=n.get(A),at=n.get(M);A.addEventListener("dispose",R);let lt=A.textures,ht=A.isWebGLCubeRenderTarget===!0,It=lt.length>1;if(It||(at.__webglTexture===void 0&&(at.__webglTexture=i.createTexture()),at.__version=M.version,a.memory.textures++),ht){W.__webglFramebuffer=[];for(let vt=0;vt<6;vt++)if(M.mipmaps&&M.mipmaps.length>0){W.__webglFramebuffer[vt]=[];for(let At=0;At<M.mipmaps.length;At++)W.__webglFramebuffer[vt][At]=i.createFramebuffer()}else W.__webglFramebuffer[vt]=i.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){W.__webglFramebuffer=[];for(let vt=0;vt<M.mipmaps.length;vt++)W.__webglFramebuffer[vt]=i.createFramebuffer()}else W.__webglFramebuffer=i.createFramebuffer();if(It)for(let vt=0,At=lt.length;vt<At;vt++){let Wt=n.get(lt[vt]);Wt.__webglTexture===void 0&&(Wt.__webglTexture=i.createTexture(),a.memory.textures++)}if(A.samples>0&&tt(A)===!1){W.__webglMultisampledFramebuffer=i.createFramebuffer(),W.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,W.__webglMultisampledFramebuffer);for(let vt=0;vt<lt.length;vt++){let At=lt[vt];W.__webglColorRenderbuffer[vt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,W.__webglColorRenderbuffer[vt]);let Wt=r.convert(At.format,At.colorSpace),gt=r.convert(At.type),bt=S(At.internalFormat,Wt,gt,At.colorSpace,A.isXRRenderTarget===!0),zt=Y(A);i.renderbufferStorageMultisample(i.RENDERBUFFER,zt,bt,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+vt,i.RENDERBUFFER,W.__webglColorRenderbuffer[vt])}i.bindRenderbuffer(i.RENDERBUFFER,null),A.depthBuffer&&(W.__webglDepthRenderbuffer=i.createRenderbuffer(),C(W.__webglDepthRenderbuffer,A,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ht){e.bindTexture(i.TEXTURE_CUBE_MAP,at.__webglTexture),_t(i.TEXTURE_CUBE_MAP,M);for(let vt=0;vt<6;vt++)if(M.mipmaps&&M.mipmaps.length>0)for(let At=0;At<M.mipmaps.length;At++)L(W.__webglFramebuffer[vt][At],A,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,At);else L(W.__webglFramebuffer[vt],A,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0);p(M)&&u(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(It){for(let vt=0,At=lt.length;vt<At;vt++){let Wt=lt[vt],gt=n.get(Wt);e.bindTexture(i.TEXTURE_2D,gt.__webglTexture),_t(i.TEXTURE_2D,Wt),L(W.__webglFramebuffer,A,Wt,i.COLOR_ATTACHMENT0+vt,i.TEXTURE_2D,0),p(Wt)&&u(i.TEXTURE_2D)}e.unbindTexture()}else{let vt=i.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(vt=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(vt,at.__webglTexture),_t(vt,M),M.mipmaps&&M.mipmaps.length>0)for(let At=0;At<M.mipmaps.length;At++)L(W.__webglFramebuffer[At],A,M,i.COLOR_ATTACHMENT0,vt,At);else L(W.__webglFramebuffer,A,M,i.COLOR_ATTACHMENT0,vt,0);p(M)&&u(vt),e.unbindTexture()}A.depthBuffer&&Q(A)}function ut(A){let M=A.textures;for(let W=0,at=M.length;W<at;W++){let lt=M[W];if(p(lt)){let ht=A.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,It=n.get(lt).__webglTexture;e.bindTexture(ht,It),u(ht),e.unbindTexture()}}}let q=[],T=[];function V(A){if(A.samples>0){if(tt(A)===!1){let M=A.textures,W=A.width,at=A.height,lt=i.COLOR_BUFFER_BIT,ht=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,It=n.get(A),vt=M.length>1;if(vt)for(let At=0;At<M.length;At++)e.bindFramebuffer(i.FRAMEBUFFER,It.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+At,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,It.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+At,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,It.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,It.__webglFramebuffer);for(let At=0;At<M.length;At++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(lt|=i.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(lt|=i.STENCIL_BUFFER_BIT)),vt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,It.__webglColorRenderbuffer[At]);let Wt=n.get(M[At]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Wt,0)}i.blitFramebuffer(0,0,W,at,0,0,W,at,lt,i.NEAREST),l===!0&&(q.length=0,T.length=0,q.push(i.COLOR_ATTACHMENT0+At),A.depthBuffer&&A.resolveDepthBuffer===!1&&(q.push(ht),T.push(ht),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,T)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,q))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),vt)for(let At=0;At<M.length;At++){e.bindFramebuffer(i.FRAMEBUFFER,It.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+At,i.RENDERBUFFER,It.__webglColorRenderbuffer[At]);let Wt=n.get(M[At]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,It.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+At,i.TEXTURE_2D,Wt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,It.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&l){let M=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[M])}}}function Y(A){return Math.min(s.maxSamples,A.samples)}function tt(A){let M=n.get(A);return A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function rt(A){let M=a.render.frame;h.get(A)!==M&&(h.set(A,M),A.update())}function O(A,M){let W=A.colorSpace,at=A.format,lt=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||W!==xn&&W!==qn&&(te.getTransfer(W)===ae?(at!==qe||lt!==Dn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",W)),M}function I(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=k,this.resetTextureUnits=w,this.setTexture2D=J,this.setTexture2DArray=ot,this.setTexture3D=H,this.setTextureCube=it,this.rebindTextures=st,this.setupRenderTarget=Z,this.updateRenderTargetMipmap=ut,this.updateMultisampleRenderTarget=V,this.setupDepthRenderbuffer=Q,this.setupFrameBufferTexture=L,this.useMultisampledRTT=tt}function Sg(i,t){function e(n,s=qn){let r,a=te.getTransfer(s);if(n===Dn)return i.UNSIGNED_BYTE;if(n===fl)return i.UNSIGNED_SHORT_4_4_4_4;if(n===dl)return i.UNSIGNED_SHORT_5_5_5_1;if(n===$c)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Zc)return i.BYTE;if(n===Jc)return i.SHORT;if(n===Ss)return i.UNSIGNED_SHORT;if(n===ul)return i.INT;if(n===pi)return i.UNSIGNED_INT;if(n===In)return i.FLOAT;if(n===xi)return i.HALF_FLOAT;if(n===Kc)return i.ALPHA;if(n===Qc)return i.RGB;if(n===qe)return i.RGBA;if(n===jc)return i.LUMINANCE;if(n===th)return i.LUMINANCE_ALPHA;if(n===Hi)return i.DEPTH_COMPONENT;if(n===$i)return i.DEPTH_STENCIL;if(n===eh)return i.RED;if(n===pl)return i.RED_INTEGER;if(n===nh)return i.RG;if(n===ml)return i.RG_INTEGER;if(n===gl)return i.RGBA_INTEGER;if(n===fr||n===dr||n===pr||n===mr)if(a===ae)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===fr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===dr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===pr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===mr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===fr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===dr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===pr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===mr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ja||n===$a||n===Ka||n===Qa)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Ja)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===$a)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ka)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Qa)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ja||n===to||n===eo)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===ja||n===to)return a===ae?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===eo)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===no||n===io||n===so||n===ro||n===ao||n===oo||n===lo||n===co||n===ho||n===uo||n===fo||n===po||n===mo||n===go)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===no)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===io)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===so)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===ro)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ao)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===oo)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===lo)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===co)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ho)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===uo)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===fo)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===po)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===mo)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===go)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===gr||n===_o||n===xo)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===gr)return a===ae?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===_o)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===xo)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===ih||n===yo||n===vo||n===Mo)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===gr)return r.COMPRESSED_RED_RGTC1_EXT;if(n===yo)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===vo)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Mo)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ji?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var Fo=class extends Be{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},Yn=class extends De{constructor(){super(),this.isGroup=!0,this.type="Group"}},bg={type:"move"},ys=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Yn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Yn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new B,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new B),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Yn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new B,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new B),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(let g of t.hand.values()){let p=e.getJointPose(g,n),u=this._getHandJoint(c,g);p!==null&&(u.matrix.fromArray(p.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=p.radius),u.visible=p!==null}let h=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],d=h.position.distanceTo(f.position),m=.02,x=.005;c.inputState.pinching&&d>m+x?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=m-x&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(bg)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Yn;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},wg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Ag=`
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

}`,Oo=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){let s=new Ke,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new Ve({vertexShader:wg,fragmentShader:Ag,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Ae(new Pr(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Bo=class extends Kn{constructor(t,e){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,f=null,d=null,m=null,x=null,g=new Oo,p=e.getContextAttributes(),u=null,S=null,_=[],v=[],U=new pt,R=null,P=new Be;P.layers.enable(1),P.viewport=new de;let F=new Be;F.layers.enable(2),F.viewport=new de;let $=[P,F],y=new Fo;y.layers.enable(1),y.layers.enable(2);let w=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(D){let L=_[D];return L===void 0&&(L=new ys,_[D]=L),L.getTargetRaySpace()},this.getControllerGrip=function(D){let L=_[D];return L===void 0&&(L=new ys,_[D]=L),L.getGripSpace()},this.getHand=function(D){let L=_[D];return L===void 0&&(L=new ys,_[D]=L),L.getHandSpace()};function K(D){let L=v.indexOf(D.inputSource);if(L===-1)return;let C=_[L];C!==void 0&&(C.update(D.inputSource,D.frame,c||a),C.dispatchEvent({type:D.type,data:D.inputSource}))}function J(){s.removeEventListener("select",K),s.removeEventListener("selectstart",K),s.removeEventListener("selectend",K),s.removeEventListener("squeeze",K),s.removeEventListener("squeezestart",K),s.removeEventListener("squeezeend",K),s.removeEventListener("end",J),s.removeEventListener("inputsourceschange",ot);for(let D=0;D<_.length;D++){let L=v[D];L!==null&&(v[D]=null,_[D].disconnect(L))}w=null,k=null,g.reset(),t.setRenderTarget(u),m=null,d=null,f=null,s=null,S=null,Ot.stop(),n.isPresenting=!1,t.setPixelRatio(R),t.setSize(U.width,U.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(D){r=D,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(D){o=D,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(D){c=D},this.getBaseLayer=function(){return d!==null?d:m},this.getBinding=function(){return f},this.getFrame=function(){return x},this.getSession=function(){return s},this.setSession=async function(D){if(s=D,s!==null){if(u=t.getRenderTarget(),s.addEventListener("select",K),s.addEventListener("selectstart",K),s.addEventListener("selectend",K),s.addEventListener("squeeze",K),s.addEventListener("squeezestart",K),s.addEventListener("squeezeend",K),s.addEventListener("end",J),s.addEventListener("inputsourceschange",ot),p.xrCompatible!==!0&&await e.makeXRCompatible(),R=t.getPixelRatio(),t.getSize(U),s.renderState.layers===void 0){let L={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(s,e,L),s.updateRenderState({baseLayer:m}),t.setPixelRatio(1),t.setSize(m.framebufferWidth,m.framebufferHeight,!1),S=new an(m.framebufferWidth,m.framebufferHeight,{format:qe,type:Dn,colorSpace:t.outputColorSpace,stencilBuffer:p.stencil})}else{let L=null,C=null,b=null;p.depth&&(b=p.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,L=p.stencil?$i:Hi,C=p.stencil?Ji:pi);let Q={colorFormat:e.RGBA8,depthFormat:b,scaleFactor:r};f=new XRWebGLBinding(s,e),d=f.createProjectionLayer(Q),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),S=new an(d.textureWidth,d.textureHeight,{format:qe,type:Dn,depthTexture:new Lr(d.textureWidth,d.textureHeight,C,void 0,void 0,void 0,void 0,void 0,void 0,L),stencilBuffer:p.stencil,colorSpace:t.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),Ot.setContext(s),Ot.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function ot(D){for(let L=0;L<D.removed.length;L++){let C=D.removed[L],b=v.indexOf(C);b>=0&&(v[b]=null,_[b].disconnect(C))}for(let L=0;L<D.added.length;L++){let C=D.added[L],b=v.indexOf(C);if(b===-1){for(let st=0;st<_.length;st++)if(st>=v.length){v.push(C),b=st;break}else if(v[st]===null){v[st]=C,b=st;break}if(b===-1)break}let Q=_[b];Q&&Q.connect(C)}}let H=new B,it=new B;function N(D,L,C){H.setFromMatrixPosition(L.matrixWorld),it.setFromMatrixPosition(C.matrixWorld);let b=H.distanceTo(it),Q=L.projectionMatrix.elements,st=C.projectionMatrix.elements,Z=Q[14]/(Q[10]-1),ut=Q[14]/(Q[10]+1),q=(Q[9]+1)/Q[5],T=(Q[9]-1)/Q[5],V=(Q[8]-1)/Q[0],Y=(st[8]+1)/st[0],tt=Z*V,rt=Z*Y,O=b/(-V+Y),I=O*-V;if(L.matrixWorld.decompose(D.position,D.quaternion,D.scale),D.translateX(I),D.translateZ(O),D.matrixWorld.compose(D.position,D.quaternion,D.scale),D.matrixWorldInverse.copy(D.matrixWorld).invert(),Q[10]===-1)D.projectionMatrix.copy(L.projectionMatrix),D.projectionMatrixInverse.copy(L.projectionMatrixInverse);else{let A=Z+O,M=ut+O,W=tt-I,at=rt+(b-I),lt=q*ut/M*A,ht=T*ut/M*A;D.projectionMatrix.makePerspective(W,at,lt,ht,A,M),D.projectionMatrixInverse.copy(D.projectionMatrix).invert()}}function mt(D,L){L===null?D.matrixWorld.copy(D.matrix):D.matrixWorld.multiplyMatrices(L.matrixWorld,D.matrix),D.matrixWorldInverse.copy(D.matrixWorld).invert()}this.updateCamera=function(D){if(s===null)return;let L=D.near,C=D.far;g.texture!==null&&(g.depthNear>0&&(L=g.depthNear),g.depthFar>0&&(C=g.depthFar)),y.near=F.near=P.near=L,y.far=F.far=P.far=C,(w!==y.near||k!==y.far)&&(s.updateRenderState({depthNear:y.near,depthFar:y.far}),w=y.near,k=y.far);let b=D.parent,Q=y.cameras;mt(y,b);for(let st=0;st<Q.length;st++)mt(Q[st],b);Q.length===2?N(y,P,F):y.projectionMatrix.copy(P.projectionMatrix),ft(D,y,b)};function ft(D,L,C){C===null?D.matrix.copy(L.matrixWorld):(D.matrix.copy(C.matrixWorld),D.matrix.invert(),D.matrix.multiply(L.matrixWorld)),D.matrix.decompose(D.position,D.quaternion,D.scale),D.updateMatrixWorld(!0),D.projectionMatrix.copy(L.projectionMatrix),D.projectionMatrixInverse.copy(L.projectionMatrixInverse),D.isPerspectiveCamera&&(D.fov=bs*2*Math.atan(1/D.projectionMatrix.elements[5]),D.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(d===null&&m===null))return l},this.setFoveation=function(D){l=D,d!==null&&(d.fixedFoveation=D),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=D)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(y)};let _t=null;function Pt(D,L){if(h=L.getViewerPose(c||a),x=L,h!==null){let C=h.views;m!==null&&(t.setRenderTargetFramebuffer(S,m.framebuffer),t.setRenderTarget(S));let b=!1;C.length!==y.cameras.length&&(y.cameras.length=0,b=!0);for(let st=0;st<C.length;st++){let Z=C[st],ut=null;if(m!==null)ut=m.getViewport(Z);else{let T=f.getViewSubImage(d,Z);ut=T.viewport,st===0&&(t.setRenderTargetTextures(S,T.colorTexture,d.ignoreDepthValues?void 0:T.depthStencilTexture),t.setRenderTarget(S))}let q=$[st];q===void 0&&(q=new Be,q.layers.enable(st),q.viewport=new de,$[st]=q),q.matrix.fromArray(Z.transform.matrix),q.matrix.decompose(q.position,q.quaternion,q.scale),q.projectionMatrix.fromArray(Z.projectionMatrix),q.projectionMatrixInverse.copy(q.projectionMatrix).invert(),q.viewport.set(ut.x,ut.y,ut.width,ut.height),st===0&&(y.matrix.copy(q.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),b===!0&&y.cameras.push(q)}let Q=s.enabledFeatures;if(Q&&Q.includes("depth-sensing")){let st=f.getDepthInformation(C[0]);st&&st.isValid&&st.texture&&g.init(t,st,s.renderState)}}for(let C=0;C<_.length;C++){let b=v[C],Q=_[C];b!==null&&Q!==void 0&&Q.update(b,L,c||a)}_t&&_t(D,L),L.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:L}),x=null}let Ot=new hh;Ot.setAnimationLoop(Pt),this.setAnimationLoop=function(D){_t=D},this.dispose=function(){}}},li=new Qe,Tg=new re;function Eg(i,t){function e(p,u){p.matrixAutoUpdate===!0&&p.updateMatrix(),u.value.copy(p.matrix)}function n(p,u){u.color.getRGB(p.fogColor.value,ch(i)),u.isFog?(p.fogNear.value=u.near,p.fogFar.value=u.far):u.isFogExp2&&(p.fogDensity.value=u.density)}function s(p,u,S,_,v){u.isMeshBasicMaterial||u.isMeshLambertMaterial?r(p,u):u.isMeshToonMaterial?(r(p,u),f(p,u)):u.isMeshPhongMaterial?(r(p,u),h(p,u)):u.isMeshStandardMaterial?(r(p,u),d(p,u),u.isMeshPhysicalMaterial&&m(p,u,v)):u.isMeshMatcapMaterial?(r(p,u),x(p,u)):u.isMeshDepthMaterial?r(p,u):u.isMeshDistanceMaterial?(r(p,u),g(p,u)):u.isMeshNormalMaterial?r(p,u):u.isLineBasicMaterial?(a(p,u),u.isLineDashedMaterial&&o(p,u)):u.isPointsMaterial?l(p,u,S,_):u.isSpriteMaterial?c(p,u):u.isShadowMaterial?(p.color.value.copy(u.color),p.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function r(p,u){p.opacity.value=u.opacity,u.color&&p.diffuse.value.copy(u.color),u.emissive&&p.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(p.map.value=u.map,e(u.map,p.mapTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,e(u.alphaMap,p.alphaMapTransform)),u.bumpMap&&(p.bumpMap.value=u.bumpMap,e(u.bumpMap,p.bumpMapTransform),p.bumpScale.value=u.bumpScale,u.side===Se&&(p.bumpScale.value*=-1)),u.normalMap&&(p.normalMap.value=u.normalMap,e(u.normalMap,p.normalMapTransform),p.normalScale.value.copy(u.normalScale),u.side===Se&&p.normalScale.value.negate()),u.displacementMap&&(p.displacementMap.value=u.displacementMap,e(u.displacementMap,p.displacementMapTransform),p.displacementScale.value=u.displacementScale,p.displacementBias.value=u.displacementBias),u.emissiveMap&&(p.emissiveMap.value=u.emissiveMap,e(u.emissiveMap,p.emissiveMapTransform)),u.specularMap&&(p.specularMap.value=u.specularMap,e(u.specularMap,p.specularMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest);let S=t.get(u),_=S.envMap,v=S.envMapRotation;_&&(p.envMap.value=_,li.copy(v),li.x*=-1,li.y*=-1,li.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(li.y*=-1,li.z*=-1),p.envMapRotation.value.setFromMatrix4(Tg.makeRotationFromEuler(li)),p.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=u.reflectivity,p.ior.value=u.ior,p.refractionRatio.value=u.refractionRatio),u.lightMap&&(p.lightMap.value=u.lightMap,p.lightMapIntensity.value=u.lightMapIntensity,e(u.lightMap,p.lightMapTransform)),u.aoMap&&(p.aoMap.value=u.aoMap,p.aoMapIntensity.value=u.aoMapIntensity,e(u.aoMap,p.aoMapTransform))}function a(p,u){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,u.map&&(p.map.value=u.map,e(u.map,p.mapTransform))}function o(p,u){p.dashSize.value=u.dashSize,p.totalSize.value=u.dashSize+u.gapSize,p.scale.value=u.scale}function l(p,u,S,_){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,p.size.value=u.size*S,p.scale.value=_*.5,u.map&&(p.map.value=u.map,e(u.map,p.uvTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,e(u.alphaMap,p.alphaMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest)}function c(p,u){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,p.rotation.value=u.rotation,u.map&&(p.map.value=u.map,e(u.map,p.mapTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,e(u.alphaMap,p.alphaMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest)}function h(p,u){p.specular.value.copy(u.specular),p.shininess.value=Math.max(u.shininess,1e-4)}function f(p,u){u.gradientMap&&(p.gradientMap.value=u.gradientMap)}function d(p,u){p.metalness.value=u.metalness,u.metalnessMap&&(p.metalnessMap.value=u.metalnessMap,e(u.metalnessMap,p.metalnessMapTransform)),p.roughness.value=u.roughness,u.roughnessMap&&(p.roughnessMap.value=u.roughnessMap,e(u.roughnessMap,p.roughnessMapTransform)),u.envMap&&(p.envMapIntensity.value=u.envMapIntensity)}function m(p,u,S){p.ior.value=u.ior,u.sheen>0&&(p.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),p.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(p.sheenColorMap.value=u.sheenColorMap,e(u.sheenColorMap,p.sheenColorMapTransform)),u.sheenRoughnessMap&&(p.sheenRoughnessMap.value=u.sheenRoughnessMap,e(u.sheenRoughnessMap,p.sheenRoughnessMapTransform))),u.clearcoat>0&&(p.clearcoat.value=u.clearcoat,p.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(p.clearcoatMap.value=u.clearcoatMap,e(u.clearcoatMap,p.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,e(u.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(p.clearcoatNormalMap.value=u.clearcoatNormalMap,e(u.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===Se&&p.clearcoatNormalScale.value.negate())),u.dispersion>0&&(p.dispersion.value=u.dispersion),u.iridescence>0&&(p.iridescence.value=u.iridescence,p.iridescenceIOR.value=u.iridescenceIOR,p.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(p.iridescenceMap.value=u.iridescenceMap,e(u.iridescenceMap,p.iridescenceMapTransform)),u.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=u.iridescenceThicknessMap,e(u.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),u.transmission>0&&(p.transmission.value=u.transmission,p.transmissionSamplerMap.value=S.texture,p.transmissionSamplerSize.value.set(S.width,S.height),u.transmissionMap&&(p.transmissionMap.value=u.transmissionMap,e(u.transmissionMap,p.transmissionMapTransform)),p.thickness.value=u.thickness,u.thicknessMap&&(p.thicknessMap.value=u.thicknessMap,e(u.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=u.attenuationDistance,p.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(p.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(p.anisotropyMap.value=u.anisotropyMap,e(u.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=u.specularIntensity,p.specularColor.value.copy(u.specularColor),u.specularColorMap&&(p.specularColorMap.value=u.specularColorMap,e(u.specularColorMap,p.specularColorMapTransform)),u.specularIntensityMap&&(p.specularIntensityMap.value=u.specularIntensityMap,e(u.specularIntensityMap,p.specularIntensityMapTransform))}function x(p,u){u.matcap&&(p.matcap.value=u.matcap)}function g(p,u){let S=t.get(u).light;p.referencePosition.value.setFromMatrixPosition(S.matrixWorld),p.nearDistance.value=S.shadow.camera.near,p.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Cg(i,t,e,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(S,_){let v=_.program;n.uniformBlockBinding(S,v)}function c(S,_){let v=s[S.id];v===void 0&&(x(S),v=h(S),s[S.id]=v,S.addEventListener("dispose",p));let U=_.program;n.updateUBOMapping(S,U);let R=t.render.frame;r[S.id]!==R&&(d(S),r[S.id]=R)}function h(S){let _=f();S.__bindingPointIndex=_;let v=i.createBuffer(),U=S.__size,R=S.usage;return i.bindBuffer(i.UNIFORM_BUFFER,v),i.bufferData(i.UNIFORM_BUFFER,U,R),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,_,v),v}function f(){for(let S=0;S<o;S++)if(a.indexOf(S)===-1)return a.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(S){let _=s[S.id],v=S.uniforms,U=S.__cache;i.bindBuffer(i.UNIFORM_BUFFER,_);for(let R=0,P=v.length;R<P;R++){let F=Array.isArray(v[R])?v[R]:[v[R]];for(let $=0,y=F.length;$<y;$++){let w=F[$];if(m(w,R,$,U)===!0){let k=w.__offset,K=Array.isArray(w.value)?w.value:[w.value],J=0;for(let ot=0;ot<K.length;ot++){let H=K[ot],it=g(H);typeof H=="number"||typeof H=="boolean"?(w.__data[0]=H,i.bufferSubData(i.UNIFORM_BUFFER,k+J,w.__data)):H.isMatrix3?(w.__data[0]=H.elements[0],w.__data[1]=H.elements[1],w.__data[2]=H.elements[2],w.__data[3]=0,w.__data[4]=H.elements[3],w.__data[5]=H.elements[4],w.__data[6]=H.elements[5],w.__data[7]=0,w.__data[8]=H.elements[6],w.__data[9]=H.elements[7],w.__data[10]=H.elements[8],w.__data[11]=0):(H.toArray(w.__data,J),J+=it.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,k,w.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(S,_,v,U){let R=S.value,P=_+"_"+v;if(U[P]===void 0)return typeof R=="number"||typeof R=="boolean"?U[P]=R:U[P]=R.clone(),!0;{let F=U[P];if(typeof R=="number"||typeof R=="boolean"){if(F!==R)return U[P]=R,!0}else if(F.equals(R)===!1)return F.copy(R),!0}return!1}function x(S){let _=S.uniforms,v=0,U=16;for(let P=0,F=_.length;P<F;P++){let $=Array.isArray(_[P])?_[P]:[_[P]];for(let y=0,w=$.length;y<w;y++){let k=$[y],K=Array.isArray(k.value)?k.value:[k.value];for(let J=0,ot=K.length;J<ot;J++){let H=K[J],it=g(H),N=v%U,mt=N%it.boundary,ft=N+mt;v+=mt,ft!==0&&U-ft<it.storage&&(v+=U-ft),k.__data=new Float32Array(it.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=v,v+=it.storage}}}let R=v%U;return R>0&&(v+=U-R),S.__size=v,S.__cache={},this}function g(S){let _={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(_.boundary=4,_.storage=4):S.isVector2?(_.boundary=8,_.storage=8):S.isVector3||S.isColor?(_.boundary=16,_.storage=12):S.isVector4?(_.boundary=16,_.storage=16):S.isMatrix3?(_.boundary=48,_.storage=48):S.isMatrix4?(_.boundary=64,_.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),_}function p(S){let _=S.target;_.removeEventListener("dispose",p);let v=a.indexOf(_.__bindingPointIndex);a.splice(v,1),i.deleteBuffer(s[_.id]),delete s[_.id],delete r[_.id]}function u(){for(let S in s)i.deleteBuffer(s[S]);a=[],s={},r={}}return{bind:l,update:c,dispose:u}}var Dr=class{constructor(t={}){let{canvas:e=Pu(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1}=t;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=a;let m=new Uint32Array(4),x=new Int32Array(4),g=null,p=null,u=[],S=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ke,this.toneMapping=pn,this.toneMappingExposure=1;let _=this,v=!1,U=0,R=0,P=null,F=-1,$=null,y=new de,w=new de,k=null,K=new qt(0),J=0,ot=e.width,H=e.height,it=1,N=null,mt=null,ft=new de(0,0,ot,H),_t=new de(0,0,ot,H),Pt=!1,Ot=new Es,D=!1,L=!1,C=new re,b=new re,Q=new B,st=new de,Z={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},ut=!1;function q(){return P===null?it:1}let T=n;function V(E,G){return e.getContext(E,G)}try{let E={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine","three.js r169"),e.addEventListener("webglcontextlost",dt,!1),e.addEventListener("webglcontextrestored",Tt,!1),e.addEventListener("webglcontextcreationerror",Ct,!1),T===null){let G="webgl2";if(T=V(G,E),T===null)throw V(G)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let Y,tt,rt,O,I,A,M,W,at,lt,ht,It,vt,At,Wt,gt,bt,zt,Nt,Et,Xt,Ht,ee,z;function Mt(){Y=new Wp(T),Y.init(),Ht=new Sg(T,Y),tt=new Bp(T,Y,t,Ht),rt=new yg(T),tt.reverseDepthBuffer&&rt.buffers.depth.setReversed(!0),O=new Yp(T),I=new ag,A=new Mg(T,Y,rt,I,tt,Ht,O),M=new kp(_),W=new Hp(_),at=new ju(T),ee=new Fp(T,at),lt=new Xp(T,at,O,ee),ht=new Jp(T,lt,at,O),Nt=new Zp(T,tt,A),gt=new zp(I),It=new rg(_,M,W,Y,tt,ee,gt),vt=new Eg(_,I),At=new lg,Wt=new pg(Y),zt=new Np(_,M,W,rt,ht,d,l),bt=new _g(_,ht,tt),z=new Cg(T,O,tt,rt),Et=new Op(T,Y,O),Xt=new qp(T,Y,O),O.programs=It.programs,_.capabilities=tt,_.extensions=Y,_.properties=I,_.renderLists=At,_.shadowMap=bt,_.state=rt,_.info=O}Mt();let ct=new Bo(_,T);this.xr=ct,this.getContext=function(){return T},this.getContextAttributes=function(){return T.getContextAttributes()},this.forceContextLoss=function(){let E=Y.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){let E=Y.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return it},this.setPixelRatio=function(E){E!==void 0&&(it=E,this.setSize(ot,H,!1))},this.getSize=function(E){return E.set(ot,H)},this.setSize=function(E,G,et=!0){if(ct.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}ot=E,H=G,e.width=Math.floor(E*it),e.height=Math.floor(G*it),et===!0&&(e.style.width=E+"px",e.style.height=G+"px"),this.setViewport(0,0,E,G)},this.getDrawingBufferSize=function(E){return E.set(ot*it,H*it).floor()},this.setDrawingBufferSize=function(E,G,et){ot=E,H=G,it=et,e.width=Math.floor(E*et),e.height=Math.floor(G*et),this.setViewport(0,0,E,G)},this.getCurrentViewport=function(E){return E.copy(y)},this.getViewport=function(E){return E.copy(ft)},this.setViewport=function(E,G,et,nt){E.isVector4?ft.set(E.x,E.y,E.z,E.w):ft.set(E,G,et,nt),rt.viewport(y.copy(ft).multiplyScalar(it).round())},this.getScissor=function(E){return E.copy(_t)},this.setScissor=function(E,G,et,nt){E.isVector4?_t.set(E.x,E.y,E.z,E.w):_t.set(E,G,et,nt),rt.scissor(w.copy(_t).multiplyScalar(it).round())},this.getScissorTest=function(){return Pt},this.setScissorTest=function(E){rt.setScissorTest(Pt=E)},this.setOpaqueSort=function(E){N=E},this.setTransparentSort=function(E){mt=E},this.getClearColor=function(E){return E.copy(zt.getClearColor())},this.setClearColor=function(){zt.setClearColor.apply(zt,arguments)},this.getClearAlpha=function(){return zt.getClearAlpha()},this.setClearAlpha=function(){zt.setClearAlpha.apply(zt,arguments)},this.clear=function(E=!0,G=!0,et=!0){let nt=0;if(E){let X=!1;if(P!==null){let xt=P.texture.format;X=xt===gl||xt===ml||xt===pl}if(X){let xt=P.texture.type,St=xt===Dn||xt===pi||xt===Ss||xt===Ji||xt===fl||xt===dl,Lt=zt.getClearColor(),Dt=zt.getClearAlpha(),kt=Lt.r,Vt=Lt.g,Ut=Lt.b;St?(m[0]=kt,m[1]=Vt,m[2]=Ut,m[3]=Dt,T.clearBufferuiv(T.COLOR,0,m)):(x[0]=kt,x[1]=Vt,x[2]=Ut,x[3]=Dt,T.clearBufferiv(T.COLOR,0,x))}else nt|=T.COLOR_BUFFER_BIT}G&&(nt|=T.DEPTH_BUFFER_BIT,T.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),et&&(nt|=T.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),T.clear(nt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",dt,!1),e.removeEventListener("webglcontextrestored",Tt,!1),e.removeEventListener("webglcontextcreationerror",Ct,!1),At.dispose(),Wt.dispose(),I.dispose(),M.dispose(),W.dispose(),ht.dispose(),ee.dispose(),z.dispose(),It.dispose(),ct.dispose(),ct.removeEventListener("sessionstart",vi),ct.removeEventListener("sessionend",Mi),ln.stop()};function dt(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),v=!0}function Tt(){console.log("THREE.WebGLRenderer: Context Restored."),v=!1;let E=O.autoReset,G=bt.enabled,et=bt.autoUpdate,nt=bt.needsUpdate,X=bt.type;Mt(),O.autoReset=E,bt.enabled=G,bt.autoUpdate=et,bt.needsUpdate=nt,bt.type=X}function Ct(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Zt(E){let G=E.target;G.removeEventListener("dispose",Zt),oe(G)}function oe(E){le(E),I.remove(E)}function le(E){let G=I.get(E).programs;G!==void 0&&(G.forEach(function(et){It.releaseProgram(et)}),E.isShaderMaterial&&It.releaseShaderCache(E))}this.renderBufferDirect=function(E,G,et,nt,X,xt){G===null&&(G=Z);let St=X.isMesh&&X.matrixWorld.determinant()<0,Lt=Us(E,G,et,nt,X);rt.setMaterial(nt,St);let Dt=et.index,kt=1;if(nt.wireframe===!0){if(Dt=lt.getWireframeAttribute(et),Dt===void 0)return;kt=2}let Vt=et.drawRange,Ut=et.attributes.position,jt=Vt.start*kt,ne=(Vt.start+Vt.count)*kt;xt!==null&&(jt=Math.max(jt,xt.start*kt),ne=Math.min(ne,(xt.start+xt.count)*kt)),Dt!==null?(jt=Math.max(jt,0),ne=Math.min(ne,Dt.count)):Ut!=null&&(jt=Math.max(jt,0),ne=Math.min(ne,Ut.count));let ie=ne-jt;if(ie<0||ie===1/0)return;ee.setup(X,nt,Lt,et,Dt);let me,$t=Et;if(Dt!==null&&(me=at.get(Dt),$t=Xt,$t.setIndex(me)),X.isMesh)nt.wireframe===!0?(rt.setLineWidth(nt.wireframeLinewidth*q()),$t.setMode(T.LINES)):$t.setMode(T.TRIANGLES);else if(X.isLine){let Ft=nt.linewidth;Ft===void 0&&(Ft=1),rt.setLineWidth(Ft*q()),X.isLineSegments?$t.setMode(T.LINES):X.isLineLoop?$t.setMode(T.LINE_LOOP):$t.setMode(T.LINE_STRIP)}else X.isPoints?$t.setMode(T.POINTS):X.isSprite&&$t.setMode(T.TRIANGLES);if(X.isBatchedMesh)if(X._multiDrawInstances!==null)$t.renderMultiDrawInstances(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount,X._multiDrawInstances);else if(Y.get("WEBGL_multi_draw"))$t.renderMultiDraw(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount);else{let Ft=X._multiDrawStarts,ge=X._multiDrawCounts,Kt=X._multiDrawCount,Ue=Dt?at.get(Dt).bytesPerElement:1,cn=I.get(nt).currentProgram.getUniforms();for(let Ce=0;Ce<Kt;Ce++)cn.setValue(T,"_gl_DrawID",Ce),$t.render(Ft[Ce]/Ue,ge[Ce])}else if(X.isInstancedMesh)$t.renderInstances(jt,ie,X.count);else if(et.isInstancedBufferGeometry){let Ft=et._maxInstanceCount!==void 0?et._maxInstanceCount:1/0,ge=Math.min(et.instanceCount,Ft);$t.renderInstances(jt,ie,ge)}else $t.render(jt,ie)};function Jt(E,G,et){E.transparent===!0&&E.side===Rn&&E.forceSinglePass===!1?(E.side=Se,E.needsUpdate=!0,ei(E,G,et),E.side=mn,E.needsUpdate=!0,ei(E,G,et),E.side=Rn):ei(E,G,et)}this.compile=function(E,G,et=null){et===null&&(et=E),p=Wt.get(et),p.init(G),S.push(p),et.traverseVisible(function(X){X.isLight&&X.layers.test(G.layers)&&(p.pushLight(X),X.castShadow&&p.pushShadow(X))}),E!==et&&E.traverseVisible(function(X){X.isLight&&X.layers.test(G.layers)&&(p.pushLight(X),X.castShadow&&p.pushShadow(X))}),p.setupLights();let nt=new Set;return E.traverse(function(X){if(!(X.isMesh||X.isPoints||X.isLine||X.isSprite))return;let xt=X.material;if(xt)if(Array.isArray(xt))for(let St=0;St<xt.length;St++){let Lt=xt[St];Jt(Lt,et,X),nt.add(Lt)}else Jt(xt,et,X),nt.add(xt)}),S.pop(),p=null,nt},this.compileAsync=function(E,G,et=null){let nt=this.compile(E,G,et);return new Promise(X=>{function xt(){if(nt.forEach(function(St){I.get(St).currentProgram.isReady()&&nt.delete(St)}),nt.size===0){X(E);return}setTimeout(xt,10)}Y.get("KHR_parallel_shader_compile")!==null?xt():setTimeout(xt,10)})};let Ee=null;function Ge(E){Ee&&Ee(E)}function vi(){ln.stop()}function Mi(){ln.start()}let ln=new hh;ln.setAnimationLoop(Ge),typeof self<"u"&&ln.setContext(self),this.setAnimationLoop=function(E){Ee=E,ct.setAnimationLoop(E),E===null?ln.stop():ln.start()},ct.addEventListener("sessionstart",vi),ct.addEventListener("sessionend",Mi),this.render=function(E,G){if(G!==void 0&&G.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(v===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),G.parent===null&&G.matrixWorldAutoUpdate===!0&&G.updateMatrixWorld(),ct.enabled===!0&&ct.isPresenting===!0&&(ct.cameraAutoUpdate===!0&&ct.updateCamera(G),G=ct.getCamera()),E.isScene===!0&&E.onBeforeRender(_,E,G,P),p=Wt.get(E,S.length),p.init(G),S.push(p),b.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),Ot.setFromProjectionMatrix(b),L=this.localClippingEnabled,D=gt.init(this.clippingPlanes,L),g=At.get(E,u.length),g.init(),u.push(g),ct.enabled===!0&&ct.isPresenting===!0){let xt=_.xr.getDepthSensingMesh();xt!==null&&yn(xt,G,-1/0,_.sortObjects)}yn(E,G,0,_.sortObjects),g.finish(),_.sortObjects===!0&&g.sort(N,mt),ut=ct.enabled===!1||ct.isPresenting===!1||ct.hasDepthSensing()===!1,ut&&zt.addToRenderList(g,E),this.info.render.frame++,D===!0&&gt.beginShadows();let et=p.state.shadowsArray;bt.render(et,E,G),D===!0&&gt.endShadows(),this.info.autoReset===!0&&this.info.reset();let nt=g.opaque,X=g.transmissive;if(p.setupLights(),G.isArrayCamera){let xt=G.cameras;if(X.length>0)for(let St=0,Lt=xt.length;St<Lt;St++){let Dt=xt[St];Ds(nt,X,E,Dt)}ut&&zt.render(E);for(let St=0,Lt=xt.length;St<Lt;St++){let Dt=xt[St];Ls(g,E,Dt,Dt.viewport)}}else X.length>0&&Ds(nt,X,E,G),ut&&zt.render(E),Ls(g,E,G);P!==null&&(A.updateMultisampleRenderTarget(P),A.updateRenderTargetMipmap(P)),E.isScene===!0&&E.onAfterRender(_,E,G),ee.resetDefaultState(),F=-1,$=null,S.pop(),S.length>0?(p=S[S.length-1],D===!0&&gt.setGlobalState(_.clippingPlanes,p.state.camera)):p=null,u.pop(),u.length>0?g=u[u.length-1]:g=null};function yn(E,G,et,nt){if(E.visible===!1)return;if(E.layers.test(G.layers)){if(E.isGroup)et=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(G);else if(E.isLight)p.pushLight(E),E.castShadow&&p.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||Ot.intersectsSprite(E)){nt&&st.setFromMatrixPosition(E.matrixWorld).applyMatrix4(b);let St=ht.update(E),Lt=E.material;Lt.visible&&g.push(E,St,Lt,et,st.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||Ot.intersectsObject(E))){let St=ht.update(E),Lt=E.material;if(nt&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),st.copy(E.boundingSphere.center)):(St.boundingSphere===null&&St.computeBoundingSphere(),st.copy(St.boundingSphere.center)),st.applyMatrix4(E.matrixWorld).applyMatrix4(b)),Array.isArray(Lt)){let Dt=St.groups;for(let kt=0,Vt=Dt.length;kt<Vt;kt++){let Ut=Dt[kt],jt=Lt[Ut.materialIndex];jt&&jt.visible&&g.push(E,St,jt,et,st.z,Ut)}}else Lt.visible&&g.push(E,St,Lt,et,st.z,null)}}let xt=E.children;for(let St=0,Lt=xt.length;St<Lt;St++)yn(xt[St],G,et,nt)}function Ls(E,G,et,nt){let X=E.opaque,xt=E.transmissive,St=E.transparent;p.setupLightsView(et),D===!0&&gt.setGlobalState(_.clippingPlanes,et),nt&&rt.viewport(y.copy(nt)),X.length>0&&Fn(X,G,et),xt.length>0&&Fn(xt,G,et),St.length>0&&Fn(St,G,et),rt.buffers.depth.setTest(!0),rt.buffers.depth.setMask(!0),rt.buffers.color.setMask(!0),rt.setPolygonOffset(!1)}function Ds(E,G,et,nt){if((et.isScene===!0?et.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[nt.id]===void 0&&(p.state.transmissionRenderTarget[nt.id]=new an(1,1,{generateMipmaps:!0,type:Y.has("EXT_color_buffer_half_float")||Y.has("EXT_color_buffer_float")?xi:Dn,minFilter:di,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:te.workingColorSpace}));let xt=p.state.transmissionRenderTarget[nt.id],St=nt.viewport||y;xt.setSize(St.z,St.w);let Lt=_.getRenderTarget();_.setRenderTarget(xt),_.getClearColor(K),J=_.getClearAlpha(),J<1&&_.setClearColor(16777215,.5),_.clear(),ut&&zt.render(et);let Dt=_.toneMapping;_.toneMapping=pn;let kt=nt.viewport;if(nt.viewport!==void 0&&(nt.viewport=void 0),p.setupLightsView(nt),D===!0&&gt.setGlobalState(_.clippingPlanes,nt),Fn(E,et,nt),A.updateMultisampleRenderTarget(xt),A.updateRenderTargetMipmap(xt),Y.has("WEBGL_multisampled_render_to_texture")===!1){let Vt=!1;for(let Ut=0,jt=G.length;Ut<jt;Ut++){let ne=G[Ut],ie=ne.object,me=ne.geometry,$t=ne.material,Ft=ne.group;if($t.side===Rn&&ie.layers.test(nt.layers)){let ge=$t.side;$t.side=Se,$t.needsUpdate=!0,rs(ie,et,nt,me,$t,Ft),$t.side=ge,$t.needsUpdate=!0,Vt=!0}}Vt===!0&&(A.updateMultisampleRenderTarget(xt),A.updateRenderTargetMipmap(xt))}_.setRenderTarget(Lt),_.setClearColor(K,J),kt!==void 0&&(nt.viewport=kt),_.toneMapping=Dt}function Fn(E,G,et){let nt=G.isScene===!0?G.overrideMaterial:null;for(let X=0,xt=E.length;X<xt;X++){let St=E[X],Lt=St.object,Dt=St.geometry,kt=nt===null?St.material:nt,Vt=St.group;Lt.layers.test(et.layers)&&rs(Lt,G,et,Dt,kt,Vt)}}function rs(E,G,et,nt,X,xt){E.onBeforeRender(_,G,et,nt,X,xt),E.modelViewMatrix.multiplyMatrices(et.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),X.onBeforeRender(_,G,et,nt,E,xt),X.transparent===!0&&X.side===Rn&&X.forceSinglePass===!1?(X.side=Se,X.needsUpdate=!0,_.renderBufferDirect(et,G,nt,X,E,xt),X.side=mn,X.needsUpdate=!0,_.renderBufferDirect(et,G,nt,X,E,xt),X.side=Rn):_.renderBufferDirect(et,G,nt,X,E,xt),E.onAfterRender(_,G,et,nt,X,xt)}function ei(E,G,et){G.isScene!==!0&&(G=Z);let nt=I.get(E),X=p.state.lights,xt=p.state.shadowsArray,St=X.state.version,Lt=It.getParameters(E,X.state,xt,G,et),Dt=It.getProgramCacheKey(Lt),kt=nt.programs;nt.environment=E.isMeshStandardMaterial?G.environment:null,nt.fog=G.fog,nt.envMap=(E.isMeshStandardMaterial?W:M).get(E.envMap||nt.environment),nt.envMapRotation=nt.environment!==null&&E.envMap===null?G.environmentRotation:E.envMapRotation,kt===void 0&&(E.addEventListener("dispose",Zt),kt=new Map,nt.programs=kt);let Vt=kt.get(Dt);if(Vt!==void 0){if(nt.currentProgram===Vt&&nt.lightsStateVersion===St)return as(E,Lt),Vt}else Lt.uniforms=It.getUniforms(E),E.onBeforeCompile(Lt,_),Vt=It.acquireProgram(Lt,Dt),kt.set(Dt,Vt),nt.uniforms=Lt.uniforms;let Ut=nt.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Ut.clippingPlanes=gt.uniform),as(E,Lt),nt.needsLights=On(E),nt.lightsStateVersion=St,nt.needsLights&&(Ut.ambientLightColor.value=X.state.ambient,Ut.lightProbe.value=X.state.probe,Ut.directionalLights.value=X.state.directional,Ut.directionalLightShadows.value=X.state.directionalShadow,Ut.spotLights.value=X.state.spot,Ut.spotLightShadows.value=X.state.spotShadow,Ut.rectAreaLights.value=X.state.rectArea,Ut.ltc_1.value=X.state.rectAreaLTC1,Ut.ltc_2.value=X.state.rectAreaLTC2,Ut.pointLights.value=X.state.point,Ut.pointLightShadows.value=X.state.pointShadow,Ut.hemisphereLights.value=X.state.hemi,Ut.directionalShadowMap.value=X.state.directionalShadowMap,Ut.directionalShadowMatrix.value=X.state.directionalShadowMatrix,Ut.spotShadowMap.value=X.state.spotShadowMap,Ut.spotLightMatrix.value=X.state.spotLightMatrix,Ut.spotLightMap.value=X.state.spotLightMap,Ut.pointShadowMap.value=X.state.pointShadowMap,Ut.pointShadowMatrix.value=X.state.pointShadowMatrix),nt.currentProgram=Vt,nt.uniformsList=null,Vt}function Si(E){if(E.uniformsList===null){let G=E.currentProgram.getUniforms();E.uniformsList=Xi.seqWithValue(G.seq,E.uniforms)}return E.uniformsList}function as(E,G){let et=I.get(E);et.outputColorSpace=G.outputColorSpace,et.batching=G.batching,et.batchingColor=G.batchingColor,et.instancing=G.instancing,et.instancingColor=G.instancingColor,et.instancingMorph=G.instancingMorph,et.skinning=G.skinning,et.morphTargets=G.morphTargets,et.morphNormals=G.morphNormals,et.morphColors=G.morphColors,et.morphTargetsCount=G.morphTargetsCount,et.numClippingPlanes=G.numClippingPlanes,et.numIntersection=G.numClipIntersection,et.vertexAlphas=G.vertexAlphas,et.vertexTangents=G.vertexTangents,et.toneMapping=G.toneMapping}function Us(E,G,et,nt,X){G.isScene!==!0&&(G=Z),A.resetTextureUnits();let xt=G.fog,St=nt.isMeshStandardMaterial?G.environment:null,Lt=P===null?_.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:xn,Dt=(nt.isMeshStandardMaterial?W:M).get(nt.envMap||St),kt=nt.vertexColors===!0&&!!et.attributes.color&&et.attributes.color.itemSize===4,Vt=!!et.attributes.tangent&&(!!nt.normalMap||nt.anisotropy>0),Ut=!!et.morphAttributes.position,jt=!!et.morphAttributes.normal,ne=!!et.morphAttributes.color,ie=pn;nt.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(ie=_.toneMapping);let me=et.morphAttributes.position||et.morphAttributes.normal||et.morphAttributes.color,$t=me!==void 0?me.length:0,Ft=I.get(nt),ge=p.state.lights;if(D===!0&&(L===!0||E!==$)){let Re=E===$&&nt.id===F;gt.setState(nt,E,Re)}let Kt=!1;nt.version===Ft.__version?(Ft.needsLights&&Ft.lightsStateVersion!==ge.state.version||Ft.outputColorSpace!==Lt||X.isBatchedMesh&&Ft.batching===!1||!X.isBatchedMesh&&Ft.batching===!0||X.isBatchedMesh&&Ft.batchingColor===!0&&X.colorTexture===null||X.isBatchedMesh&&Ft.batchingColor===!1&&X.colorTexture!==null||X.isInstancedMesh&&Ft.instancing===!1||!X.isInstancedMesh&&Ft.instancing===!0||X.isSkinnedMesh&&Ft.skinning===!1||!X.isSkinnedMesh&&Ft.skinning===!0||X.isInstancedMesh&&Ft.instancingColor===!0&&X.instanceColor===null||X.isInstancedMesh&&Ft.instancingColor===!1&&X.instanceColor!==null||X.isInstancedMesh&&Ft.instancingMorph===!0&&X.morphTexture===null||X.isInstancedMesh&&Ft.instancingMorph===!1&&X.morphTexture!==null||Ft.envMap!==Dt||nt.fog===!0&&Ft.fog!==xt||Ft.numClippingPlanes!==void 0&&(Ft.numClippingPlanes!==gt.numPlanes||Ft.numIntersection!==gt.numIntersection)||Ft.vertexAlphas!==kt||Ft.vertexTangents!==Vt||Ft.morphTargets!==Ut||Ft.morphNormals!==jt||Ft.morphColors!==ne||Ft.toneMapping!==ie||Ft.morphTargetsCount!==$t)&&(Kt=!0):(Kt=!0,Ft.__version=nt.version);let Ue=Ft.currentProgram;Kt===!0&&(Ue=ei(nt,G,X));let cn=!1,Ce=!1,bi=!1,se=Ue.getUniforms(),be=Ft.uniforms;if(rt.useProgram(Ue.program)&&(cn=!0,Ce=!0,bi=!0),nt.id!==F&&(F=nt.id,Ce=!0),cn||$!==E){tt.reverseDepthBuffer?(C.copy(E.projectionMatrix),Lu(C),Du(C),se.setValue(T,"projectionMatrix",C)):se.setValue(T,"projectionMatrix",E.projectionMatrix),se.setValue(T,"viewMatrix",E.matrixWorldInverse);let Re=se.map.cameraPosition;Re!==void 0&&Re.setValue(T,Q.setFromMatrixPosition(E.matrixWorld)),tt.logarithmicDepthBuffer&&se.setValue(T,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(nt.isMeshPhongMaterial||nt.isMeshToonMaterial||nt.isMeshLambertMaterial||nt.isMeshBasicMaterial||nt.isMeshStandardMaterial||nt.isShaderMaterial)&&se.setValue(T,"isOrthographic",E.isOrthographicCamera===!0),$!==E&&($=E,Ce=!0,bi=!0)}if(X.isSkinnedMesh){se.setOptional(T,X,"bindMatrix"),se.setOptional(T,X,"bindMatrixInverse");let Re=X.skeleton;Re&&(Re.boneTexture===null&&Re.computeBoneTexture(),se.setValue(T,"boneTexture",Re.boneTexture,A))}X.isBatchedMesh&&(se.setOptional(T,X,"batchingTexture"),se.setValue(T,"batchingTexture",X._matricesTexture,A),se.setOptional(T,X,"batchingIdTexture"),se.setValue(T,"batchingIdTexture",X._indirectTexture,A),se.setOptional(T,X,"batchingColorTexture"),X._colorsTexture!==null&&se.setValue(T,"batchingColorTexture",X._colorsTexture,A));let ni=et.morphAttributes;if((ni.position!==void 0||ni.normal!==void 0||ni.color!==void 0)&&Nt.update(X,et,Ue),(Ce||Ft.receiveShadow!==X.receiveShadow)&&(Ft.receiveShadow=X.receiveShadow,se.setValue(T,"receiveShadow",X.receiveShadow)),nt.isMeshGouraudMaterial&&nt.envMap!==null&&(be.envMap.value=Dt,be.flipEnvMap.value=Dt.isCubeTexture&&Dt.isRenderTargetTexture===!1?-1:1),nt.isMeshStandardMaterial&&nt.envMap===null&&G.environment!==null&&(be.envMapIntensity.value=G.environmentIntensity),Ce&&(se.setValue(T,"toneMappingExposure",_.toneMappingExposure),Ft.needsLights&&pe(be,bi),xt&&nt.fog===!0&&vt.refreshFogUniforms(be,xt),vt.refreshMaterialUniforms(be,nt,it,H,p.state.transmissionRenderTarget[E.id]),Xi.upload(T,Si(Ft),be,A)),nt.isShaderMaterial&&nt.uniformsNeedUpdate===!0&&(Xi.upload(T,Si(Ft),be,A),nt.uniformsNeedUpdate=!1),nt.isSpriteMaterial&&se.setValue(T,"center",X.center),se.setValue(T,"modelViewMatrix",X.modelViewMatrix),se.setValue(T,"normalMatrix",X.normalMatrix),se.setValue(T,"modelMatrix",X.matrixWorld),nt.isShaderMaterial||nt.isRawShaderMaterial){let Re=nt.uniformsGroups;for(let Bn=0,tn=Re.length;Bn<tn;Bn++){let Ye=Re[Bn];z.update(Ye,Ue),z.bind(Ye,Ue)}}return Ue}function pe(E,G){E.ambientLightColor.needsUpdate=G,E.lightProbe.needsUpdate=G,E.directionalLights.needsUpdate=G,E.directionalLightShadows.needsUpdate=G,E.pointLights.needsUpdate=G,E.pointLightShadows.needsUpdate=G,E.spotLights.needsUpdate=G,E.spotLightShadows.needsUpdate=G,E.rectAreaLights.needsUpdate=G,E.hemisphereLights.needsUpdate=G}function On(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return U},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(E,G,et){I.get(E.texture).__webglTexture=G,I.get(E.depthTexture).__webglTexture=et;let nt=I.get(E);nt.__hasExternalTextures=!0,nt.__autoAllocateDepthBuffer=et===void 0,nt.__autoAllocateDepthBuffer||Y.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),nt.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(E,G){let et=I.get(E);et.__webglFramebuffer=G,et.__useDefaultFramebuffer=G===void 0},this.setRenderTarget=function(E,G=0,et=0){P=E,U=G,R=et;let nt=!0,X=null,xt=!1,St=!1;if(E){let Dt=I.get(E);if(Dt.__useDefaultFramebuffer!==void 0)rt.bindFramebuffer(T.FRAMEBUFFER,null),nt=!1;else if(Dt.__webglFramebuffer===void 0)A.setupRenderTarget(E);else if(Dt.__hasExternalTextures)A.rebindTextures(E,I.get(E.texture).__webglTexture,I.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){let Ut=E.depthTexture;if(Dt.__boundDepthTexture!==Ut){if(Ut!==null&&I.has(Ut)&&(E.width!==Ut.image.width||E.height!==Ut.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");A.setupDepthRenderbuffer(E)}}let kt=E.texture;(kt.isData3DTexture||kt.isDataArrayTexture||kt.isCompressedArrayTexture)&&(St=!0);let Vt=I.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Vt[G])?X=Vt[G][et]:X=Vt[G],xt=!0):E.samples>0&&A.useMultisampledRTT(E)===!1?X=I.get(E).__webglMultisampledFramebuffer:Array.isArray(Vt)?X=Vt[et]:X=Vt,y.copy(E.viewport),w.copy(E.scissor),k=E.scissorTest}else y.copy(ft).multiplyScalar(it).floor(),w.copy(_t).multiplyScalar(it).floor(),k=Pt;if(rt.bindFramebuffer(T.FRAMEBUFFER,X)&&nt&&rt.drawBuffers(E,X),rt.viewport(y),rt.scissor(w),rt.setScissorTest(k),xt){let Dt=I.get(E.texture);T.framebufferTexture2D(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_CUBE_MAP_POSITIVE_X+G,Dt.__webglTexture,et)}else if(St){let Dt=I.get(E.texture),kt=G||0;T.framebufferTextureLayer(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0,Dt.__webglTexture,et||0,kt)}F=-1},this.readRenderTargetPixels=function(E,G,et,nt,X,xt,St){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Lt=I.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&St!==void 0&&(Lt=Lt[St]),Lt){rt.bindFramebuffer(T.FRAMEBUFFER,Lt);try{let Dt=E.texture,kt=Dt.format,Vt=Dt.type;if(!tt.textureFormatReadable(kt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!tt.textureTypeReadable(Vt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}G>=0&&G<=E.width-nt&&et>=0&&et<=E.height-X&&T.readPixels(G,et,nt,X,Ht.convert(kt),Ht.convert(Vt),xt)}finally{let Dt=P!==null?I.get(P).__webglFramebuffer:null;rt.bindFramebuffer(T.FRAMEBUFFER,Dt)}}},this.readRenderTargetPixelsAsync=async function(E,G,et,nt,X,xt,St){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Lt=I.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&St!==void 0&&(Lt=Lt[St]),Lt){let Dt=E.texture,kt=Dt.format,Vt=Dt.type;if(!tt.textureFormatReadable(kt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!tt.textureTypeReadable(Vt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(G>=0&&G<=E.width-nt&&et>=0&&et<=E.height-X){rt.bindFramebuffer(T.FRAMEBUFFER,Lt);let Ut=T.createBuffer();T.bindBuffer(T.PIXEL_PACK_BUFFER,Ut),T.bufferData(T.PIXEL_PACK_BUFFER,xt.byteLength,T.STREAM_READ),T.readPixels(G,et,nt,X,Ht.convert(kt),Ht.convert(Vt),0);let jt=P!==null?I.get(P).__webglFramebuffer:null;rt.bindFramebuffer(T.FRAMEBUFFER,jt);let ne=T.fenceSync(T.SYNC_GPU_COMMANDS_COMPLETE,0);return T.flush(),await Iu(T,ne,4),T.bindBuffer(T.PIXEL_PACK_BUFFER,Ut),T.getBufferSubData(T.PIXEL_PACK_BUFFER,0,xt),T.deleteBuffer(Ut),T.deleteSync(ne),xt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(E,G=null,et=0){E.isTexture!==!0&&(_r("WebGLRenderer: copyFramebufferToTexture function signature has changed."),G=arguments[0]||null,E=arguments[1]);let nt=Math.pow(2,-et),X=Math.floor(E.image.width*nt),xt=Math.floor(E.image.height*nt),St=G!==null?G.x:0,Lt=G!==null?G.y:0;A.setTexture2D(E,0),T.copyTexSubImage2D(T.TEXTURE_2D,et,0,0,St,Lt,X,xt),rt.unbindTexture()},this.copyTextureToTexture=function(E,G,et=null,nt=null,X=0){E.isTexture!==!0&&(_r("WebGLRenderer: copyTextureToTexture function signature has changed."),nt=arguments[0]||null,E=arguments[1],G=arguments[2],X=arguments[3]||0,et=null);let xt,St,Lt,Dt,kt,Vt;et!==null?(xt=et.max.x-et.min.x,St=et.max.y-et.min.y,Lt=et.min.x,Dt=et.min.y):(xt=E.image.width,St=E.image.height,Lt=0,Dt=0),nt!==null?(kt=nt.x,Vt=nt.y):(kt=0,Vt=0);let Ut=Ht.convert(G.format),jt=Ht.convert(G.type);A.setTexture2D(G,0),T.pixelStorei(T.UNPACK_FLIP_Y_WEBGL,G.flipY),T.pixelStorei(T.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),T.pixelStorei(T.UNPACK_ALIGNMENT,G.unpackAlignment);let ne=T.getParameter(T.UNPACK_ROW_LENGTH),ie=T.getParameter(T.UNPACK_IMAGE_HEIGHT),me=T.getParameter(T.UNPACK_SKIP_PIXELS),$t=T.getParameter(T.UNPACK_SKIP_ROWS),Ft=T.getParameter(T.UNPACK_SKIP_IMAGES),ge=E.isCompressedTexture?E.mipmaps[X]:E.image;T.pixelStorei(T.UNPACK_ROW_LENGTH,ge.width),T.pixelStorei(T.UNPACK_IMAGE_HEIGHT,ge.height),T.pixelStorei(T.UNPACK_SKIP_PIXELS,Lt),T.pixelStorei(T.UNPACK_SKIP_ROWS,Dt),E.isDataTexture?T.texSubImage2D(T.TEXTURE_2D,X,kt,Vt,xt,St,Ut,jt,ge.data):E.isCompressedTexture?T.compressedTexSubImage2D(T.TEXTURE_2D,X,kt,Vt,ge.width,ge.height,Ut,ge.data):T.texSubImage2D(T.TEXTURE_2D,X,kt,Vt,xt,St,Ut,jt,ge),T.pixelStorei(T.UNPACK_ROW_LENGTH,ne),T.pixelStorei(T.UNPACK_IMAGE_HEIGHT,ie),T.pixelStorei(T.UNPACK_SKIP_PIXELS,me),T.pixelStorei(T.UNPACK_SKIP_ROWS,$t),T.pixelStorei(T.UNPACK_SKIP_IMAGES,Ft),X===0&&G.generateMipmaps&&T.generateMipmap(T.TEXTURE_2D),rt.unbindTexture()},this.copyTextureToTexture3D=function(E,G,et=null,nt=null,X=0){E.isTexture!==!0&&(_r("WebGLRenderer: copyTextureToTexture3D function signature has changed."),et=arguments[0]||null,nt=arguments[1]||null,E=arguments[2],G=arguments[3],X=arguments[4]||0);let xt,St,Lt,Dt,kt,Vt,Ut,jt,ne,ie=E.isCompressedTexture?E.mipmaps[X]:E.image;et!==null?(xt=et.max.x-et.min.x,St=et.max.y-et.min.y,Lt=et.max.z-et.min.z,Dt=et.min.x,kt=et.min.y,Vt=et.min.z):(xt=ie.width,St=ie.height,Lt=ie.depth,Dt=0,kt=0,Vt=0),nt!==null?(Ut=nt.x,jt=nt.y,ne=nt.z):(Ut=0,jt=0,ne=0);let me=Ht.convert(G.format),$t=Ht.convert(G.type),Ft;if(G.isData3DTexture)A.setTexture3D(G,0),Ft=T.TEXTURE_3D;else if(G.isDataArrayTexture||G.isCompressedArrayTexture)A.setTexture2DArray(G,0),Ft=T.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}T.pixelStorei(T.UNPACK_FLIP_Y_WEBGL,G.flipY),T.pixelStorei(T.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),T.pixelStorei(T.UNPACK_ALIGNMENT,G.unpackAlignment);let ge=T.getParameter(T.UNPACK_ROW_LENGTH),Kt=T.getParameter(T.UNPACK_IMAGE_HEIGHT),Ue=T.getParameter(T.UNPACK_SKIP_PIXELS),cn=T.getParameter(T.UNPACK_SKIP_ROWS),Ce=T.getParameter(T.UNPACK_SKIP_IMAGES);T.pixelStorei(T.UNPACK_ROW_LENGTH,ie.width),T.pixelStorei(T.UNPACK_IMAGE_HEIGHT,ie.height),T.pixelStorei(T.UNPACK_SKIP_PIXELS,Dt),T.pixelStorei(T.UNPACK_SKIP_ROWS,kt),T.pixelStorei(T.UNPACK_SKIP_IMAGES,Vt),E.isDataTexture||E.isData3DTexture?T.texSubImage3D(Ft,X,Ut,jt,ne,xt,St,Lt,me,$t,ie.data):G.isCompressedArrayTexture?T.compressedTexSubImage3D(Ft,X,Ut,jt,ne,xt,St,Lt,me,ie.data):T.texSubImage3D(Ft,X,Ut,jt,ne,xt,St,Lt,me,$t,ie),T.pixelStorei(T.UNPACK_ROW_LENGTH,ge),T.pixelStorei(T.UNPACK_IMAGE_HEIGHT,Kt),T.pixelStorei(T.UNPACK_SKIP_PIXELS,Ue),T.pixelStorei(T.UNPACK_SKIP_ROWS,cn),T.pixelStorei(T.UNPACK_SKIP_IMAGES,Ce),X===0&&G.generateMipmaps&&T.generateMipmap(Ft),rt.unbindTexture()},this.initRenderTarget=function(E){I.get(E).__webglFramebuffer===void 0&&A.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?A.setTextureCube(E,0):E.isData3DTexture?A.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?A.setTexture2DArray(E,0):A.setTexture2D(E,0),rt.unbindTexture()},this.resetState=function(){U=0,R=0,P=null,rt.reset(),ee.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ln}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=t===_l?"display-p3":"srgb",e.unpackColorSpace=te.workingColorSpace===$r?"display-p3":"srgb"}};var ts=class extends De{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Qe,this.environmentIntensity=1,this.environmentRotation=new Qe,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}};var zo=class extends jn{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new qt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Dc=new re,ko=new ws,ar=new Qn,or=new B,Ur=class extends De{constructor(t=new Te,e=new zo){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ar.copy(n.boundingSphere),ar.applyMatrix4(s),ar.radius+=r,t.ray.intersectsSphere(ar)===!1)return;Dc.copy(s).invert(),ko.copy(t.ray).applyMatrix4(Dc);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,f=n.attributes.position;if(c!==null){let d=Math.max(0,a.start),m=Math.min(c.count,a.start+a.count);for(let x=d,g=m;x<g;x++){let p=c.getX(x);or.fromBufferAttribute(f,p),Uc(or,p,l,s,t,e,this)}}else{let d=Math.max(0,a.start),m=Math.min(f.count,a.start+a.count);for(let x=d,g=m;x<g;x++)or.fromBufferAttribute(f,x),Uc(or,x,l,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Uc(i,t,e,n,s,r,a){let o=ko.distanceSqToPoint(i);if(o<e){let l=new B;ko.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}var je=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){let n=this.getLengths(),s=0,r=n.length,a;e?a=e:a=t*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);let h=n[s],d=n[s+1]-h,m=(a-h)/d;return(s+m)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),l=e||(a.isVector2?new pt:new B);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){let n=new B,s=[],r=[],a=[],o=new B,l=new re;for(let m=0;m<=t;m++){let x=m/t;s[m]=this.getTangentAt(x,new B)}r[0]=new B,a[0]=new B;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),f=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),f<=c&&(c=f,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let m=1;m<=t;m++){if(r[m]=r[m-1].clone(),a[m]=a[m-1].clone(),o.crossVectors(s[m-1],s[m]),o.length()>Number.EPSILON){o.normalize();let x=Math.acos(Me(s[m-1].dot(s[m]),-1,1));r[m].applyMatrix4(l.makeRotationAxis(o,x))}a[m].crossVectors(s[m],r[m])}if(e===!0){let m=Math.acos(Me(r[0].dot(r[t]),-1,1));m/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(m=-m);for(let x=1;x<=t;x++)r[x].applyMatrix4(l.makeRotationAxis(s[x],m*x)),a[x].crossVectors(s[x],r[x])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},Cs=class extends je{constructor(t=0,e=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e=new pt){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),f=Math.sin(this.aRotation),d=l-this.aX,m=c-this.aY;l=d*h-m*f+this.aX,c=d*f+m*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},Vo=class extends Cs{constructor(t,e,n,s,r,a){super(t,e,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function vl(){let i=0,t=0,e=0,n=0;function s(r,a,o,l){i=r,t=o,e=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,f){let d=(a-r)/c-(o-r)/(c+h)+(o-a)/h,m=(o-a)/h-(l-a)/(h+f)+(l-o)/f;d*=h,m*=h,s(a,o,d,m)},calc:function(r){let a=r*r,o=a*r;return i+t*r+e*a+n*o}}}var lr=new B,La=new vl,Da=new vl,Ua=new vl,Go=class extends je{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new B){let n=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=s[(o-1)%r]:(lr.subVectors(s[0],s[1]).add(s[0]),c=lr);let f=s[o%r],d=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(lr.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=lr),this.curveType==="centripetal"||this.curveType==="chordal"){let m=this.curveType==="chordal"?.5:.25,x=Math.pow(c.distanceToSquared(f),m),g=Math.pow(f.distanceToSquared(d),m),p=Math.pow(d.distanceToSquared(h),m);g<1e-4&&(g=1),x<1e-4&&(x=g),p<1e-4&&(p=g),La.initNonuniformCatmullRom(c.x,f.x,d.x,h.x,x,g,p),Da.initNonuniformCatmullRom(c.y,f.y,d.y,h.y,x,g,p),Ua.initNonuniformCatmullRom(c.z,f.z,d.z,h.z,x,g,p)}else this.curveType==="catmullrom"&&(La.initCatmullRom(c.x,f.x,d.x,h.x,this.tension),Da.initCatmullRom(c.y,f.y,d.y,h.y,this.tension),Ua.initCatmullRom(c.z,f.z,d.z,h.z,this.tension));return n.set(La.calc(l),Da.calc(l),Ua.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new B().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function Nc(i,t,e,n,s){let r=(n-t)*.5,a=(s-e)*.5,o=i*i,l=i*o;return(2*e-2*n+r+a)*l+(-3*e+3*n-2*r-a)*o+r*i+e}function Rg(i,t){let e=1-i;return e*e*t}function Pg(i,t){return 2*(1-i)*i*t}function Ig(i,t){return i*i*t}function vs(i,t,e,n){return Rg(i,t)+Pg(i,e)+Ig(i,n)}function Lg(i,t){let e=1-i;return e*e*e*t}function Dg(i,t){let e=1-i;return 3*e*e*i*t}function Ug(i,t){return 3*(1-i)*i*i*t}function Ng(i,t){return i*i*i*t}function Ms(i,t,e,n,s){return Lg(i,t)+Dg(i,e)+Ug(i,n)+Ng(i,s)}var Nr=class extends je{constructor(t=new pt,e=new pt,n=new pt,s=new pt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new pt){let n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Ms(t,s.x,r.x,a.x,o.x),Ms(t,s.y,r.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Ho=class extends je{constructor(t=new B,e=new B,n=new B,s=new B){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new B){let n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Ms(t,s.x,r.x,a.x,o.x),Ms(t,s.y,r.y,a.y,o.y),Ms(t,s.z,r.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Fr=class extends je{constructor(t=new pt,e=new pt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new pt){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new pt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Wo=class extends je{constructor(t=new B,e=new B){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new B){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new B){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Or=class extends je{constructor(t=new pt,e=new pt,n=new pt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new pt){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(vs(t,s.x,r.x,a.x),vs(t,s.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Xo=class extends je{constructor(t=new B,e=new B,n=new B){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new B){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(vs(t,s.x,r.x,a.x),vs(t,s.y,r.y,a.y),vs(t,s.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Br=class extends je{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new pt){let n=e,s=this.points,r=(s.length-1)*t,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],h=s[a>s.length-2?s.length-1:a+1],f=s[a>s.length-3?s.length-1:a+2];return n.set(Nc(o,l.x,c.x,h.x,f.x),Nc(o,l.y,c.y,h.y,f.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new pt().fromArray(s))}return this}},qo=Object.freeze({__proto__:null,ArcCurve:Vo,CatmullRomCurve3:Go,CubicBezierCurve:Nr,CubicBezierCurve3:Ho,EllipseCurve:Cs,LineCurve:Fr,LineCurve3:Wo,QuadraticBezierCurve:Or,QuadraticBezierCurve3:Xo,SplineCurve:Br}),Yo=class extends je{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new qo[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let a=s[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,l=a.getPoints(o);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(new qo[s.type]().fromJSON(s))}return this}},Nn=class extends Yo{constructor(t){super(),this.type="Path",this.currentPoint=new pt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new Fr(this.currentPoint.clone(),new pt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){let r=new Or(this.currentPoint.clone(),new pt(t,e),new pt(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,a){let o=new Nr(this.currentPoint.clone(),new pt(t,e),new pt(n,s),new pt(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new Br(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+o,e+l,n,s,r,a),this}absarc(t,e,n,s,r,a){return this.absellipse(t,e,n,n,s,r,a),this}ellipse(t,e,n,s,r,a,o,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,s,r,a,o,l),this}absellipse(t,e,n,s,r,a,o,l){let c=new Cs(t,e,n,s,r,a,o,l);if(this.curves.length>0){let f=c.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}};var Zo=class i extends Te{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};let r=[],a=[];o(s),c(n),h(),this.setAttribute("position",new fe(r,3)),this.setAttribute("normal",new fe(r.slice(),3)),this.setAttribute("uv",new fe(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(S){let _=new B,v=new B,U=new B;for(let R=0;R<e.length;R+=3)m(e[R+0],_),m(e[R+1],v),m(e[R+2],U),l(_,v,U,S)}function l(S,_,v,U){let R=U+1,P=[];for(let F=0;F<=R;F++){P[F]=[];let $=S.clone().lerp(v,F/R),y=_.clone().lerp(v,F/R),w=R-F;for(let k=0;k<=w;k++)k===0&&F===R?P[F][k]=$:P[F][k]=$.clone().lerp(y,k/w)}for(let F=0;F<R;F++)for(let $=0;$<2*(R-F)-1;$++){let y=Math.floor($/2);$%2===0?(d(P[F][y+1]),d(P[F+1][y]),d(P[F][y])):(d(P[F][y+1]),d(P[F+1][y+1]),d(P[F+1][y]))}}function c(S){let _=new B;for(let v=0;v<r.length;v+=3)_.x=r[v+0],_.y=r[v+1],_.z=r[v+2],_.normalize().multiplyScalar(S),r[v+0]=_.x,r[v+1]=_.y,r[v+2]=_.z}function h(){let S=new B;for(let _=0;_<r.length;_+=3){S.x=r[_+0],S.y=r[_+1],S.z=r[_+2];let v=p(S)/2/Math.PI+.5,U=u(S)/Math.PI+.5;a.push(v,1-U)}x(),f()}function f(){for(let S=0;S<a.length;S+=6){let _=a[S+0],v=a[S+2],U=a[S+4],R=Math.max(_,v,U),P=Math.min(_,v,U);R>.9&&P<.1&&(_<.2&&(a[S+0]+=1),v<.2&&(a[S+2]+=1),U<.2&&(a[S+4]+=1))}}function d(S){r.push(S.x,S.y,S.z)}function m(S,_){let v=S*3;_.x=t[v+0],_.y=t[v+1],_.z=t[v+2]}function x(){let S=new B,_=new B,v=new B,U=new B,R=new pt,P=new pt,F=new pt;for(let $=0,y=0;$<r.length;$+=9,y+=6){S.set(r[$+0],r[$+1],r[$+2]),_.set(r[$+3],r[$+4],r[$+5]),v.set(r[$+6],r[$+7],r[$+8]),R.set(a[y+0],a[y+1]),P.set(a[y+2],a[y+3]),F.set(a[y+4],a[y+5]),U.copy(S).add(_).add(v).divideScalar(3);let w=p(U);g(R,y+0,S,w),g(P,y+2,_,w),g(F,y+4,v,w)}}function g(S,_,v,U){U<0&&S.x===1&&(a[_]=S.x-1),v.x===0&&v.z===0&&(a[_]=U/2/Math.PI+.5)}function p(S){return Math.atan2(S.z,-S.x)}function u(S){return Math.atan2(-S.y,Math.sqrt(S.x*S.x+S.z*S.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.vertices,t.indices,t.radius,t.details)}};var Jn=class extends Nn{constructor(t){super(t),this.uuid=yi(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(new Nn().fromJSON(s))}return this}},Fg={triangulate:function(i,t,e=2){let n=t&&t.length,s=n?t[0]*e:i.length,r=mh(i,0,s,e,!0),a=[];if(!r||r.next===r.prev)return a;let o,l,c,h,f,d,m;if(n&&(r=Vg(i,t,r,e)),i.length>80*e){o=c=i[0],l=h=i[1];for(let x=e;x<s;x+=e)f=i[x],d=i[x+1],f<o&&(o=f),d<l&&(l=d),f>c&&(c=f),d>h&&(h=d);m=Math.max(c-o,h-l),m=m!==0?32767/m:0}return Rs(r,a,e,o,l,m,0),a}};function mh(i,t,e,n,s){let r,a;if(s===Qg(i,t,e,n)>0)for(r=t;r<e;r+=n)a=Fc(r,i[r],i[r+1],a);else for(r=e-n;r>=t;r-=n)a=Fc(r,i[r],i[r+1],a);return a&&Qr(a,a.next)&&(Is(a),a=a.next),a}function mi(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(Qr(e,e.next)||ue(e.prev,e,e.next)===0)){if(Is(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Rs(i,t,e,n,s,r,a){if(!i)return;!a&&r&&qg(i,n,s,r);let o=i,l,c;for(;i.prev!==i.next;){if(l=i.prev,c=i.next,r?Bg(i,n,s,r):Og(i)){t.push(l.i/e|0),t.push(i.i/e|0),t.push(c.i/e|0),Is(i),i=c.next,o=c.next;continue}if(i=c,i===o){a?a===1?(i=zg(mi(i),t,e),Rs(i,t,e,n,s,r,2)):a===2&&kg(i,t,e,n,s,r):Rs(mi(i),t,e,n,s,r,1);break}}}function Og(i){let t=i.prev,e=i,n=i.next;if(ue(t,e,n)>=0)return!1;let s=t.x,r=e.x,a=n.x,o=t.y,l=e.y,c=n.y,h=s<r?s<a?s:a:r<a?r:a,f=o<l?o<c?o:c:l<c?l:c,d=s>r?s>a?s:a:r>a?r:a,m=o>l?o>c?o:c:l>c?l:c,x=n.next;for(;x!==t;){if(x.x>=h&&x.x<=d&&x.y>=f&&x.y<=m&&Gi(s,o,r,l,a,c,x.x,x.y)&&ue(x.prev,x,x.next)>=0)return!1;x=x.next}return!0}function Bg(i,t,e,n){let s=i.prev,r=i,a=i.next;if(ue(s,r,a)>=0)return!1;let o=s.x,l=r.x,c=a.x,h=s.y,f=r.y,d=a.y,m=o<l?o<c?o:c:l<c?l:c,x=h<f?h<d?h:d:f<d?f:d,g=o>l?o>c?o:c:l>c?l:c,p=h>f?h>d?h:d:f>d?f:d,u=Jo(m,x,t,e,n),S=Jo(g,p,t,e,n),_=i.prevZ,v=i.nextZ;for(;_&&_.z>=u&&v&&v.z<=S;){if(_.x>=m&&_.x<=g&&_.y>=x&&_.y<=p&&_!==s&&_!==a&&Gi(o,h,l,f,c,d,_.x,_.y)&&ue(_.prev,_,_.next)>=0||(_=_.prevZ,v.x>=m&&v.x<=g&&v.y>=x&&v.y<=p&&v!==s&&v!==a&&Gi(o,h,l,f,c,d,v.x,v.y)&&ue(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;_&&_.z>=u;){if(_.x>=m&&_.x<=g&&_.y>=x&&_.y<=p&&_!==s&&_!==a&&Gi(o,h,l,f,c,d,_.x,_.y)&&ue(_.prev,_,_.next)>=0)return!1;_=_.prevZ}for(;v&&v.z<=S;){if(v.x>=m&&v.x<=g&&v.y>=x&&v.y<=p&&v!==s&&v!==a&&Gi(o,h,l,f,c,d,v.x,v.y)&&ue(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function zg(i,t,e){let n=i;do{let s=n.prev,r=n.next.next;!Qr(s,r)&&gh(s,n,n.next,r)&&Ps(s,r)&&Ps(r,s)&&(t.push(s.i/e|0),t.push(n.i/e|0),t.push(r.i/e|0),Is(n),Is(n.next),n=i=r),n=n.next}while(n!==i);return mi(n)}function kg(i,t,e,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Jg(a,o)){let l=_h(a,o);a=mi(a,a.next),l=mi(l,l.next),Rs(a,t,e,n,s,r,0),Rs(l,t,e,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function Vg(i,t,e,n){let s=[],r,a,o,l,c;for(r=0,a=t.length;r<a;r++)o=t[r]*n,l=r<a-1?t[r+1]*n:i.length,c=mh(i,o,l,n,!1),c===c.next&&(c.steiner=!0),s.push(Zg(c));for(s.sort(Gg),r=0;r<s.length;r++)e=Hg(s[r],e);return e}function Gg(i,t){return i.x-t.x}function Hg(i,t){let e=Wg(i,t);if(!e)return t;let n=_h(e,i);return mi(n,n.next),mi(e,e.next)}function Wg(i,t){let e=t,n=-1/0,s,r=i.x,a=i.y;do{if(a<=e.y&&a>=e.next.y&&e.next.y!==e.y){let d=e.x+(a-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=r&&d>n&&(n=d,s=e.x<e.next.x?e:e.next,d===r))return s}e=e.next}while(e!==t);if(!s)return null;let o=s,l=s.x,c=s.y,h=1/0,f;e=s;do r>=e.x&&e.x>=l&&r!==e.x&&Gi(a<c?r:n,a,l,c,a<c?n:r,a,e.x,e.y)&&(f=Math.abs(a-e.y)/(r-e.x),Ps(e,i)&&(f<h||f===h&&(e.x>s.x||e.x===s.x&&Xg(s,e)))&&(s=e,h=f)),e=e.next;while(e!==o);return s}function Xg(i,t){return ue(i.prev,i,t.prev)<0&&ue(t.next,i,i.next)<0}function qg(i,t,e,n){let s=i;do s.z===0&&(s.z=Jo(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Yg(s)}function Yg(i){let t,e,n,s,r,a,o,l,c=1;do{for(e=i,i=null,r=null,a=0;e;){for(a++,n=e,o=0,t=0;t<c&&(o++,n=n.nextZ,!!n);t++);for(l=c;o>0||l>0&&n;)o!==0&&(l===0||!n||e.z<=n.z)?(s=e,e=e.nextZ,o--):(s=n,n=n.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;e=n}r.nextZ=null,c*=2}while(a>1);return i}function Jo(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function Zg(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function Gi(i,t,e,n,s,r,a,o){return(s-a)*(t-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(e-a)*(t-o)&&(e-a)*(r-o)>=(s-a)*(n-o)}function Jg(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!$g(i,t)&&(Ps(i,t)&&Ps(t,i)&&Kg(i,t)&&(ue(i.prev,i,t.prev)||ue(i,t.prev,t))||Qr(i,t)&&ue(i.prev,i,i.next)>0&&ue(t.prev,t,t.next)>0)}function ue(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function Qr(i,t){return i.x===t.x&&i.y===t.y}function gh(i,t,e,n){let s=hr(ue(i,t,e)),r=hr(ue(i,t,n)),a=hr(ue(e,n,i)),o=hr(ue(e,n,t));return!!(s!==r&&a!==o||s===0&&cr(i,e,t)||r===0&&cr(i,n,t)||a===0&&cr(e,i,n)||o===0&&cr(e,t,n))}function cr(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function hr(i){return i>0?1:i<0?-1:0}function $g(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&gh(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function Ps(i,t){return ue(i.prev,i,i.next)<0?ue(i,t,i.next)>=0&&ue(i,i.prev,t)>=0:ue(i,t,i.prev)<0||ue(i,i.next,t)<0}function Kg(i,t){let e=i,n=!1,s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function _h(i,t){let e=new $o(i.i,i.x,i.y),n=new $o(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function Fc(i,t,e,n){let s=new $o(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Is(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function $o(i,t,e){this.i=i,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Qg(i,t,e,n){let s=0;for(let r=t,a=e-n;r<e;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}var $n=class i{static area(t){let e=t.length,n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],s=[],r=[];Oc(t),Bc(n,t);let a=t.length;e.forEach(Oc);for(let l=0;l<e.length;l++)s.push(a),a+=e[l].length,Bc(n,e[l]);let o=Fg.triangulate(n,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}};function Oc(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function Bc(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var zr=class i extends Te{constructor(t=new Jn([new pt(.5,.5),new pt(-.5,.5),new pt(-.5,-.5),new pt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,s=[],r=[];for(let o=0,l=t.length;o<l;o++){let c=t[o];a(c)}this.setAttribute("position",new fe(s,3)),this.setAttribute("uv",new fe(r,2)),this.computeVertexNormals();function a(o){let l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,f=e.depth!==void 0?e.depth:1,d=e.bevelEnabled!==void 0?e.bevelEnabled:!0,m=e.bevelThickness!==void 0?e.bevelThickness:.2,x=e.bevelSize!==void 0?e.bevelSize:m-.1,g=e.bevelOffset!==void 0?e.bevelOffset:0,p=e.bevelSegments!==void 0?e.bevelSegments:3,u=e.extrudePath,S=e.UVGenerator!==void 0?e.UVGenerator:jg,_,v=!1,U,R,P,F;u&&(_=u.getSpacedPoints(h),v=!0,d=!1,U=u.computeFrenetFrames(h,!1),R=new B,P=new B,F=new B),d||(p=0,m=0,x=0,g=0);let $=o.extractPoints(c),y=$.shape,w=$.holes;if(!$n.isClockWise(y)){y=y.reverse();for(let q=0,T=w.length;q<T;q++){let V=w[q];$n.isClockWise(V)&&(w[q]=V.reverse())}}let K=$n.triangulateShape(y,w),J=y;for(let q=0,T=w.length;q<T;q++){let V=w[q];y=y.concat(V)}function ot(q,T,V){return T||console.error("THREE.ExtrudeGeometry: vec does not exist"),q.clone().addScaledVector(T,V)}let H=y.length,it=K.length;function N(q,T,V){let Y,tt,rt,O=q.x-T.x,I=q.y-T.y,A=V.x-q.x,M=V.y-q.y,W=O*O+I*I,at=O*M-I*A;if(Math.abs(at)>Number.EPSILON){let lt=Math.sqrt(W),ht=Math.sqrt(A*A+M*M),It=T.x-I/lt,vt=T.y+O/lt,At=V.x-M/ht,Wt=V.y+A/ht,gt=((At-It)*M-(Wt-vt)*A)/(O*M-I*A);Y=It+O*gt-q.x,tt=vt+I*gt-q.y;let bt=Y*Y+tt*tt;if(bt<=2)return new pt(Y,tt);rt=Math.sqrt(bt/2)}else{let lt=!1;O>Number.EPSILON?A>Number.EPSILON&&(lt=!0):O<-Number.EPSILON?A<-Number.EPSILON&&(lt=!0):Math.sign(I)===Math.sign(M)&&(lt=!0),lt?(Y=-I,tt=O,rt=Math.sqrt(W)):(Y=O,tt=I,rt=Math.sqrt(W/2))}return new pt(Y/rt,tt/rt)}let mt=[];for(let q=0,T=J.length,V=T-1,Y=q+1;q<T;q++,V++,Y++)V===T&&(V=0),Y===T&&(Y=0),mt[q]=N(J[q],J[V],J[Y]);let ft=[],_t,Pt=mt.concat();for(let q=0,T=w.length;q<T;q++){let V=w[q];_t=[];for(let Y=0,tt=V.length,rt=tt-1,O=Y+1;Y<tt;Y++,rt++,O++)rt===tt&&(rt=0),O===tt&&(O=0),_t[Y]=N(V[Y],V[rt],V[O]);ft.push(_t),Pt=Pt.concat(_t)}for(let q=0;q<p;q++){let T=q/p,V=m*Math.cos(T*Math.PI/2),Y=x*Math.sin(T*Math.PI/2)+g;for(let tt=0,rt=J.length;tt<rt;tt++){let O=ot(J[tt],mt[tt],Y);b(O.x,O.y,-V)}for(let tt=0,rt=w.length;tt<rt;tt++){let O=w[tt];_t=ft[tt];for(let I=0,A=O.length;I<A;I++){let M=ot(O[I],_t[I],Y);b(M.x,M.y,-V)}}}let Ot=x+g;for(let q=0;q<H;q++){let T=d?ot(y[q],Pt[q],Ot):y[q];v?(P.copy(U.normals[0]).multiplyScalar(T.x),R.copy(U.binormals[0]).multiplyScalar(T.y),F.copy(_[0]).add(P).add(R),b(F.x,F.y,F.z)):b(T.x,T.y,0)}for(let q=1;q<=h;q++)for(let T=0;T<H;T++){let V=d?ot(y[T],Pt[T],Ot):y[T];v?(P.copy(U.normals[q]).multiplyScalar(V.x),R.copy(U.binormals[q]).multiplyScalar(V.y),F.copy(_[q]).add(P).add(R),b(F.x,F.y,F.z)):b(V.x,V.y,f/h*q)}for(let q=p-1;q>=0;q--){let T=q/p,V=m*Math.cos(T*Math.PI/2),Y=x*Math.sin(T*Math.PI/2)+g;for(let tt=0,rt=J.length;tt<rt;tt++){let O=ot(J[tt],mt[tt],Y);b(O.x,O.y,f+V)}for(let tt=0,rt=w.length;tt<rt;tt++){let O=w[tt];_t=ft[tt];for(let I=0,A=O.length;I<A;I++){let M=ot(O[I],_t[I],Y);v?b(M.x,M.y+_[h-1].y,_[h-1].x+V):b(M.x,M.y,f+V)}}}D(),L();function D(){let q=s.length/3;if(d){let T=0,V=H*T;for(let Y=0;Y<it;Y++){let tt=K[Y];Q(tt[2]+V,tt[1]+V,tt[0]+V)}T=h+p*2,V=H*T;for(let Y=0;Y<it;Y++){let tt=K[Y];Q(tt[0]+V,tt[1]+V,tt[2]+V)}}else{for(let T=0;T<it;T++){let V=K[T];Q(V[2],V[1],V[0])}for(let T=0;T<it;T++){let V=K[T];Q(V[0]+H*h,V[1]+H*h,V[2]+H*h)}}n.addGroup(q,s.length/3-q,0)}function L(){let q=s.length/3,T=0;C(J,T),T+=J.length;for(let V=0,Y=w.length;V<Y;V++){let tt=w[V];C(tt,T),T+=tt.length}n.addGroup(q,s.length/3-q,1)}function C(q,T){let V=q.length;for(;--V>=0;){let Y=V,tt=V-1;tt<0&&(tt=q.length-1);for(let rt=0,O=h+p*2;rt<O;rt++){let I=H*rt,A=H*(rt+1),M=T+Y+I,W=T+tt+I,at=T+tt+A,lt=T+Y+A;st(M,W,at,lt)}}}function b(q,T,V){l.push(q),l.push(T),l.push(V)}function Q(q,T,V){Z(q),Z(T),Z(V);let Y=s.length/3,tt=S.generateTopUV(n,s,Y-3,Y-2,Y-1);ut(tt[0]),ut(tt[1]),ut(tt[2])}function st(q,T,V,Y){Z(q),Z(T),Z(Y),Z(T),Z(V),Z(Y);let tt=s.length/3,rt=S.generateSideWallUV(n,s,tt-6,tt-3,tt-2,tt-1);ut(rt[0]),ut(rt[1]),ut(rt[3]),ut(rt[1]),ut(rt[2]),ut(rt[3])}function Z(q){s.push(l[q*3+0]),s.push(l[q*3+1]),s.push(l[q*3+2])}function ut(q){r.push(q.x),r.push(q.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return t0(e,n,t)}static fromJSON(t,e){let n=[];for(let r=0,a=t.shapes.length;r<a;r++){let o=e[t.shapes[r]];n.push(o)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new qo[s.type]().fromJSON(s)),new i(n,t.options)}},jg={generateTopUV:function(i,t,e,n,s){let r=t[e*3],a=t[e*3+1],o=t[n*3],l=t[n*3+1],c=t[s*3],h=t[s*3+1];return[new pt(r,a),new pt(o,l),new pt(c,h)]},generateSideWallUV:function(i,t,e,n,s,r){let a=t[e*3],o=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],f=t[n*3+2],d=t[s*3],m=t[s*3+1],x=t[s*3+2],g=t[r*3],p=t[r*3+1],u=t[r*3+2];return Math.abs(o-h)<Math.abs(a-c)?[new pt(a,1-l),new pt(c,1-f),new pt(d,1-x),new pt(g,1-u)]:[new pt(o,1-l),new pt(h,1-f),new pt(m,1-x),new pt(p,1-u)]}};function t0(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var kr=class i extends Zo{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}};var Vr=class i extends Te{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,h=[],f=new B,d=new B,m=[],x=[],g=[],p=[];for(let u=0;u<=n;u++){let S=[],_=u/n,v=0;u===0&&a===0?v=.5/e:u===n&&l===Math.PI&&(v=-.5/e);for(let U=0;U<=e;U++){let R=U/e;f.x=-t*Math.cos(s+R*r)*Math.sin(a+_*o),f.y=t*Math.cos(a+_*o),f.z=t*Math.sin(s+R*r)*Math.sin(a+_*o),x.push(f.x,f.y,f.z),d.copy(f).normalize(),g.push(d.x,d.y,d.z),p.push(R+v,1-_),S.push(c++)}h.push(S)}for(let u=0;u<n;u++)for(let S=0;S<e;S++){let _=h[u][S+1],v=h[u][S],U=h[u+1][S],R=h[u+1][S+1];(u!==0||a>0)&&m.push(_,v,R),(u!==n-1||l<Math.PI)&&m.push(v,U,R)}this.setIndex(m),this.setAttribute("position",new fe(x,3)),this.setAttribute("normal",new fe(g,3)),this.setAttribute("uv",new fe(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var Ko=class extends jn{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new qt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new qt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=sh,this.normalScale=new pt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Qe,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},Gr=class extends Ko{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new pt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Me(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new qt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new qt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new qt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}};function ur(i,t,e){return!i||!e&&i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function e0(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var es=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let a;e:{i:if(!(t<s)){for(let o=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=e[++n],t<s)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}a=n,n=0;break e}break n}for(;n<a;){let o=n+a>>>1;t<e[o]?a=o:n=o+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Qo=class extends es{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:kl,endingEnd:kl}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,a=t+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Vl:r=t,o=2*e-n;break;case Gl:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Vl:a=t,l=2*n-e;break;case Gl:a=1,l=n+s[1]-s[0];break;default:a=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this._offsetPrev,f=this._offsetNext,d=this._weightPrev,m=this._weightNext,x=(n-e)/(s-e),g=x*x,p=g*x,u=-d*p+2*d*g-d*x,S=(1+d)*p+(-1.5-2*d)*g+(-.5+d)*x+1,_=(-1-m)*p+(1.5+m)*g+.5*x,v=m*p-m*g;for(let U=0;U!==o;++U)r[U]=u*a[h+U]+S*a[c+U]+_*a[l+U]+v*a[f+U];return r}},jo=class extends es{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=(n-e)/(s-e),f=1-h;for(let d=0;d!==o;++d)r[d]=a[c+d]*f+a[l+d]*h;return r}},tl=class extends es{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},on=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=ur(e,this.TimeBufferType),this.values=ur(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:ur(t.times,Array),values:ur(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new tl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new jo(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Qo(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case xr:e=this.InterpolantFactoryMethodDiscrete;break;case So:e=this.InterpolantFactoryMethodLinear;break;case sa:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return xr;case this.InterpolantFactoryMethodLinear:return So;case this.InterpolantFactoryMethodSmooth:return sa}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t}return this}trim(t,e){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(s!==void 0&&e0(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===sa,r=t.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=t[o],h=t[o+1];if(c!==h&&(o!==1||c!==t[0]))if(s)l=!0;else{let f=o*n,d=f-n,m=f+n;for(let x=0;x!==n;++x){let g=e[f+x];if(g!==e[d+x]||g!==e[m+x]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];let f=o*n,d=a*n;for(let m=0;m!==n;++m)e[d+m]=e[f+m]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)e[l+c]=e[o+c];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};on.prototype.TimeBufferType=Float32Array;on.prototype.ValueBufferType=Float32Array;on.prototype.DefaultInterpolation=So;var gi=class extends on{constructor(t,e,n){super(t,e,n)}};gi.prototype.ValueTypeName="bool";gi.prototype.ValueBufferType=Array;gi.prototype.DefaultInterpolation=xr;gi.prototype.InterpolantFactoryMethodLinear=void 0;gi.prototype.InterpolantFactoryMethodSmooth=void 0;var el=class extends on{};el.prototype.ValueTypeName="color";var nl=class extends on{};nl.prototype.ValueTypeName="number";var il=class extends es{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-e)/(s-e),c=t*o;for(let h=c+o;c!==h;c+=4)gn.slerpFlat(r,0,a,c-o,a,c,l);return r}},Hr=class extends on{InterpolantFactoryMethodLinear(t){return new il(this.times,this.values,this.getValueSize(),t)}};Hr.prototype.ValueTypeName="quaternion";Hr.prototype.InterpolantFactoryMethodSmooth=void 0;var _i=class extends on{constructor(t,e,n){super(t,e,n)}};_i.prototype.ValueTypeName="string";_i.prototype.ValueBufferType=Array;_i.prototype.DefaultInterpolation=xr;_i.prototype.InterpolantFactoryMethodLinear=void 0;_i.prototype.InterpolantFactoryMethodSmooth=void 0;var sl=class extends on{};sl.prototype.ValueTypeName="vector";var zc={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(this.files[i]=t)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}},rl=class{constructor(t,e,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,f){return c.push(h,f),this},this.removeHandler=function(h){let f=c.indexOf(h);return f!==-1&&c.splice(f,2),this},this.getHandler=function(h){for(let f=0,d=c.length;f<d;f+=2){let m=c[f],x=c[f+1];if(m.global&&(m.lastIndex=0),m.test(h))return x}return null}}},n0=new rl,ns=class{constructor(t){this.manager=t!==void 0?t:n0,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};ns.DEFAULT_MATERIAL_NAME="__DEFAULT";var Tn={},al=class extends Error{constructor(t,e){super(t),this.response=e}},Wr=class extends ns{constructor(t){super(t)}load(t,e,n,s){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let r=zc.get(t);if(r!==void 0)return this.manager.itemStart(t),setTimeout(()=>{e&&e(r),this.manager.itemEnd(t)},0),r;if(Tn[t]!==void 0){Tn[t].push({onLoad:e,onProgress:n,onError:s});return}Tn[t]=[],Tn[t].push({onLoad:e,onProgress:n,onError:s});let a=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;let h=Tn[t],f=c.body.getReader(),d=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),m=d?parseInt(d):0,x=m!==0,g=0,p=new ReadableStream({start(u){S();function S(){f.read().then(({done:_,value:v})=>{if(_)u.close();else{g+=v.byteLength;let U=new ProgressEvent("progress",{lengthComputable:x,loaded:g,total:m});for(let R=0,P=h.length;R<P;R++){let F=h[R];F.onProgress&&F.onProgress(U)}u.enqueue(v),S()}},_=>{u.error(_)})}}});return new Response(p)}else throw new al(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return c.json();default:if(o===void 0)return c.text();{let f=/charset="?([^;"\s]*)"?/i.exec(o),d=f&&f[1]?f[1].toLowerCase():void 0,m=new TextDecoder(d);return c.arrayBuffer().then(x=>m.decode(x))}}}).then(c=>{zc.add(t,c);let h=Tn[t];delete Tn[t];for(let f=0,d=h.length;f<d;f++){let m=h[f];m.onLoad&&m.onLoad(c)}}).catch(c=>{let h=Tn[t];if(h===void 0)throw this.manager.itemError(t),c;delete Tn[t];for(let f=0,d=h.length;f<d;f++){let m=h[f];m.onError&&m.onError(c)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}};var Xr=class extends De{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new qt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},qr=class extends Xr{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(De.DEFAULT_UP),this.updateMatrix(),this.groundColor=new qt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},Na=new re,kc=new B,Vc=new B,ol=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new pt(512,512),this.map=null,this.mapPass=null,this.matrix=new re,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Es,this._frameExtents=new pt(1,1),this._viewportCount=1,this._viewports=[new de(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;kc.setFromMatrixPosition(t.matrixWorld),e.position.copy(kc),Vc.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Vc),e.updateMatrixWorld(),Na.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Na),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Na)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var ll=class extends ol{constructor(){super(new Ir(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Yr=class extends Xr{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(De.DEFAULT_UP),this.updateMatrix(),this.target=new De,this.shadow=new ll}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var Ml="\\[\\]\\.:\\/",i0=new RegExp("["+Ml+"]","g"),Sl="[^"+Ml+"]",s0="[^"+Ml.replace("\\.","")+"]",r0=/((?:WC+[\/:])*)/.source.replace("WC",Sl),a0=/(WCOD+)?/.source.replace("WCOD",s0),o0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Sl),l0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Sl),c0=new RegExp("^"+r0+a0+o0+l0+"$"),h0=["material","materials","bones","map"],cl=class{constructor(t,e,n){let s=n||ce.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},ce=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(i0,"")}static parseTrackName(t){let e=c0.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);h0.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let l=n(o.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let a=t[s];if(a===void 0){let c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ce.Composite=cl;ce.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ce.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ce.prototype.GetterByBindingType=[ce.prototype._getValue_direct,ce.prototype._getValue_array,ce.prototype._getValue_arrayElement,ce.prototype._getValue_toArray];ce.prototype.SetterByBindingTypeAndVersioning=[[ce.prototype._setValue_direct,ce.prototype._setValue_direct_setNeedsUpdate,ce.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ce.prototype._setValue_array,ce.prototype._setValue_array_setNeedsUpdate,ce.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ce.prototype._setValue_arrayElement,ce.prototype._setValue_arrayElement_setNeedsUpdate,ce.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ce.prototype._setValue_fromArray,ce.prototype._setValue_fromArray_setNeedsUpdate,ce.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var g0=new Float32Array(1);var Gc=new re,Zr=class{constructor(t,e,n=0,s=1/0){this.ray=new ws(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new As,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Gc.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Gc),this}intersectObject(t,e=!0,n=[]){return hl(t,this,n,e),n.sort(Hc),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)hl(t[s],this,n,e);return n.sort(Hc),n}};function Hc(i,t){return i.distance-t.distance}function hl(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let a=0,o=r.length;a<o;a++)hl(r[a],t,e,!0)}}var Wc=new pt,is=class{constructor(t=new pt(1/0,1/0),e=new pt(-1/0,-1/0)){this.isBox2=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Wc.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(t){return this.isEmpty()?t.set(0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Wc).distanceTo(t)}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}};var _n=class{constructor(){this.type="ShapePath",this.color=new qt,this.subPaths=[],this.currentPath=null}moveTo(t,e){return this.currentPath=new Nn,this.subPaths.push(this.currentPath),this.currentPath.moveTo(t,e),this}lineTo(t,e){return this.currentPath.lineTo(t,e),this}quadraticCurveTo(t,e,n,s){return this.currentPath.quadraticCurveTo(t,e,n,s),this}bezierCurveTo(t,e,n,s,r,a){return this.currentPath.bezierCurveTo(t,e,n,s,r,a),this}splineThru(t){return this.currentPath.splineThru(t),this}toShapes(t){function e(u){let S=[];for(let _=0,v=u.length;_<v;_++){let U=u[_],R=new Jn;R.curves=U.curves,S.push(R)}return S}function n(u,S){let _=S.length,v=!1;for(let U=_-1,R=0;R<_;U=R++){let P=S[U],F=S[R],$=F.x-P.x,y=F.y-P.y;if(Math.abs(y)>Number.EPSILON){if(y<0&&(P=S[R],$=-$,F=S[U],y=-y),u.y<P.y||u.y>F.y)continue;if(u.y===P.y){if(u.x===P.x)return!0}else{let w=y*(u.x-P.x)-$*(u.y-P.y);if(w===0)return!0;if(w<0)continue;v=!v}}else{if(u.y!==P.y)continue;if(F.x<=u.x&&u.x<=P.x||P.x<=u.x&&u.x<=F.x)return!0}}return v}let s=$n.isClockWise,r=this.subPaths;if(r.length===0)return[];let a,o,l,c=[];if(r.length===1)return o=r[0],l=new Jn,l.curves=o.curves,c.push(l),c;let h=!s(r[0].getPoints());h=t?!h:h;let f=[],d=[],m=[],x=0,g;d[x]=void 0,m[x]=[];for(let u=0,S=r.length;u<S;u++)o=r[u],g=o.getPoints(),a=s(g),a=t?!a:a,a?(!h&&d[x]&&x++,d[x]={s:new Jn,p:g},d[x].s.curves=o.curves,h&&x++,m[x]=[]):m[x].push({h:o,p:g[0]});if(!d[0])return e(r);if(d.length>1){let u=!1,S=0;for(let _=0,v=d.length;_<v;_++)f[_]=[];for(let _=0,v=d.length;_<v;_++){let U=m[_];for(let R=0;R<U.length;R++){let P=U[R],F=!0;for(let $=0;$<d.length;$++)n(P.p,d[$].p)&&(_!==$&&S++,F?(F=!1,f[$].push(P)):u=!0);F&&f[_].push(P)}}S>0&&u===!1&&(m=f)}let p;for(let u=0,S=d.length;u<S;u++){l=d[u].s,c.push(l),p=m[u];for(let _=0,v=p.length;_<v;_++)l.holes.push(p[_].h)}return c}};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"169"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="169");var u0=ke,jr=class i extends ns{constructor(t){super(t),this.defaultDPI=90,this.defaultUnit="px"}load(t,e,n,s){let r=this,a=new Wr(r.manager);a.setPath(r.path),a.setRequestHeader(r.requestHeader),a.setWithCredentials(r.withCredentials),a.load(t,function(o){try{e(r.parse(o))}catch(l){s?s(l):console.error(l),r.manager.itemError(t)}},n,s)}parse(t){let e=this;function n(D,L){if(D.nodeType!==1)return;let C=v(D),b=!1,Q=null;switch(D.nodeName){case"svg":L=x(D,L);break;case"style":r(D);break;case"g":L=x(D,L);break;case"path":L=x(D,L),D.hasAttribute("d")&&(Q=s(D));break;case"rect":L=x(D,L),Q=l(D);break;case"polygon":L=x(D,L),Q=c(D);break;case"polyline":L=x(D,L),Q=h(D);break;case"circle":L=x(D,L),Q=f(D);break;case"ellipse":L=x(D,L),Q=d(D);break;case"line":L=x(D,L),Q=m(D);break;case"defs":b=!0;break;case"use":L=x(D,L);let ut=(D.getAttributeNS("http://www.w3.org/1999/xlink","href")||"").substring(1),q=D.viewportElement.getElementById(ut);q?n(q,L):console.warn("SVGLoader: 'use node' references non-existent node id: "+ut);break;default:}Q&&(L.fill!==void 0&&L.fill!=="none"&&Q.color.setStyle(L.fill,u0),R(Q,_t),k.push(Q),Q.userData={node:D,style:L});let st=D.childNodes;for(let Z=0;Z<st.length;Z++){let ut=st[Z];b&&ut.nodeName!=="style"&&ut.nodeName!=="defs"||n(ut,L)}C&&(J.pop(),J.length>0?_t.copy(J[J.length-1]):_t.identity())}function s(D){let L=new _n,C=new pt,b=new pt,Q=new pt,st=!0,Z=!1,ut=D.getAttribute("d");if(ut===""||ut==="none")return null;let q=ut.match(/[a-df-z][^a-df-z]*/ig);for(let T=0,V=q.length;T<V;T++){let Y=q[T],tt=Y.charAt(0),rt=Y.slice(1).trim();st===!0&&(Z=!0,st=!1);let O;switch(tt){case"M":O=p(rt);for(let I=0,A=O.length;I<A;I+=2)C.x=O[I+0],C.y=O[I+1],b.x=C.x,b.y=C.y,I===0?L.moveTo(C.x,C.y):L.lineTo(C.x,C.y),I===0&&Q.copy(C);break;case"H":O=p(rt);for(let I=0,A=O.length;I<A;I++)C.x=O[I],b.x=C.x,b.y=C.y,L.lineTo(C.x,C.y),I===0&&Z===!0&&Q.copy(C);break;case"V":O=p(rt);for(let I=0,A=O.length;I<A;I++)C.y=O[I],b.x=C.x,b.y=C.y,L.lineTo(C.x,C.y),I===0&&Z===!0&&Q.copy(C);break;case"L":O=p(rt);for(let I=0,A=O.length;I<A;I+=2)C.x=O[I+0],C.y=O[I+1],b.x=C.x,b.y=C.y,L.lineTo(C.x,C.y),I===0&&Z===!0&&Q.copy(C);break;case"C":O=p(rt);for(let I=0,A=O.length;I<A;I+=6)L.bezierCurveTo(O[I+0],O[I+1],O[I+2],O[I+3],O[I+4],O[I+5]),b.x=O[I+2],b.y=O[I+3],C.x=O[I+4],C.y=O[I+5],I===0&&Z===!0&&Q.copy(C);break;case"S":O=p(rt);for(let I=0,A=O.length;I<A;I+=4)L.bezierCurveTo(g(C.x,b.x),g(C.y,b.y),O[I+0],O[I+1],O[I+2],O[I+3]),b.x=O[I+0],b.y=O[I+1],C.x=O[I+2],C.y=O[I+3],I===0&&Z===!0&&Q.copy(C);break;case"Q":O=p(rt);for(let I=0,A=O.length;I<A;I+=4)L.quadraticCurveTo(O[I+0],O[I+1],O[I+2],O[I+3]),b.x=O[I+0],b.y=O[I+1],C.x=O[I+2],C.y=O[I+3],I===0&&Z===!0&&Q.copy(C);break;case"T":O=p(rt);for(let I=0,A=O.length;I<A;I+=2){let M=g(C.x,b.x),W=g(C.y,b.y);L.quadraticCurveTo(M,W,O[I+0],O[I+1]),b.x=M,b.y=W,C.x=O[I+0],C.y=O[I+1],I===0&&Z===!0&&Q.copy(C)}break;case"A":O=p(rt,[3,4],7);for(let I=0,A=O.length;I<A;I+=7){if(O[I+5]==C.x&&O[I+6]==C.y)continue;let M=C.clone();C.x=O[I+5],C.y=O[I+6],b.x=C.x,b.y=C.y,a(L,O[I],O[I+1],O[I+2],O[I+3],O[I+4],M,C),I===0&&Z===!0&&Q.copy(C)}break;case"m":O=p(rt);for(let I=0,A=O.length;I<A;I+=2)C.x+=O[I+0],C.y+=O[I+1],b.x=C.x,b.y=C.y,I===0?L.moveTo(C.x,C.y):L.lineTo(C.x,C.y),I===0&&Q.copy(C);break;case"h":O=p(rt);for(let I=0,A=O.length;I<A;I++)C.x+=O[I],b.x=C.x,b.y=C.y,L.lineTo(C.x,C.y),I===0&&Z===!0&&Q.copy(C);break;case"v":O=p(rt);for(let I=0,A=O.length;I<A;I++)C.y+=O[I],b.x=C.x,b.y=C.y,L.lineTo(C.x,C.y),I===0&&Z===!0&&Q.copy(C);break;case"l":O=p(rt);for(let I=0,A=O.length;I<A;I+=2)C.x+=O[I+0],C.y+=O[I+1],b.x=C.x,b.y=C.y,L.lineTo(C.x,C.y),I===0&&Z===!0&&Q.copy(C);break;case"c":O=p(rt);for(let I=0,A=O.length;I<A;I+=6)L.bezierCurveTo(C.x+O[I+0],C.y+O[I+1],C.x+O[I+2],C.y+O[I+3],C.x+O[I+4],C.y+O[I+5]),b.x=C.x+O[I+2],b.y=C.y+O[I+3],C.x+=O[I+4],C.y+=O[I+5],I===0&&Z===!0&&Q.copy(C);break;case"s":O=p(rt);for(let I=0,A=O.length;I<A;I+=4)L.bezierCurveTo(g(C.x,b.x),g(C.y,b.y),C.x+O[I+0],C.y+O[I+1],C.x+O[I+2],C.y+O[I+3]),b.x=C.x+O[I+0],b.y=C.y+O[I+1],C.x+=O[I+2],C.y+=O[I+3],I===0&&Z===!0&&Q.copy(C);break;case"q":O=p(rt);for(let I=0,A=O.length;I<A;I+=4)L.quadraticCurveTo(C.x+O[I+0],C.y+O[I+1],C.x+O[I+2],C.y+O[I+3]),b.x=C.x+O[I+0],b.y=C.y+O[I+1],C.x+=O[I+2],C.y+=O[I+3],I===0&&Z===!0&&Q.copy(C);break;case"t":O=p(rt);for(let I=0,A=O.length;I<A;I+=2){let M=g(C.x,b.x),W=g(C.y,b.y);L.quadraticCurveTo(M,W,C.x+O[I+0],C.y+O[I+1]),b.x=M,b.y=W,C.x=C.x+O[I+0],C.y=C.y+O[I+1],I===0&&Z===!0&&Q.copy(C)}break;case"a":O=p(rt,[3,4],7);for(let I=0,A=O.length;I<A;I+=7){if(O[I+5]==0&&O[I+6]==0)continue;let M=C.clone();C.x+=O[I+5],C.y+=O[I+6],b.x=C.x,b.y=C.y,a(L,O[I],O[I+1],O[I+2],O[I+3],O[I+4],M,C),I===0&&Z===!0&&Q.copy(C)}break;case"Z":case"z":L.currentPath.autoClose=!0,L.currentPath.curves.length>0&&(C.copy(Q),L.currentPath.currentPoint.copy(C),st=!0);break;default:console.warn(Y)}Z=!1}return L}function r(D){if(!(!D.sheet||!D.sheet.cssRules||!D.sheet.cssRules.length))for(let L=0;L<D.sheet.cssRules.length;L++){let C=D.sheet.cssRules[L];if(C.type!==1)continue;let b=C.selectorText.split(/,/gm).filter(Boolean).map(Q=>Q.trim());for(let Q=0;Q<b.length;Q++){let st=Object.fromEntries(Object.entries(C.style).filter(([,Z])=>Z!==""));K[b[Q]]=Object.assign(K[b[Q]]||{},st)}}}function a(D,L,C,b,Q,st,Z,ut){if(L==0||C==0){D.lineTo(ut.x,ut.y);return}b=b*Math.PI/180,L=Math.abs(L),C=Math.abs(C);let q=(Z.x-ut.x)/2,T=(Z.y-ut.y)/2,V=Math.cos(b)*q+Math.sin(b)*T,Y=-Math.sin(b)*q+Math.cos(b)*T,tt=L*L,rt=C*C,O=V*V,I=Y*Y,A=O/tt+I/rt;if(A>1){let gt=Math.sqrt(A);L=gt*L,C=gt*C,tt=L*L,rt=C*C}let M=tt*I+rt*O,W=(tt*rt-M)/M,at=Math.sqrt(Math.max(0,W));Q===st&&(at=-at);let lt=at*L*Y/C,ht=-at*C*V/L,It=Math.cos(b)*lt-Math.sin(b)*ht+(Z.x+ut.x)/2,vt=Math.sin(b)*lt+Math.cos(b)*ht+(Z.y+ut.y)/2,At=o(1,0,(V-lt)/L,(Y-ht)/C),Wt=o((V-lt)/L,(Y-ht)/C,(-V-lt)/L,(-Y-ht)/C)%(Math.PI*2);D.currentPath.absellipse(It,vt,L,C,At,At+Wt,st===0,b)}function o(D,L,C,b){let Q=D*C+L*b,st=Math.sqrt(D*D+L*L)*Math.sqrt(C*C+b*b),Z=Math.acos(Math.max(-1,Math.min(1,Q/st)));return D*b-L*C<0&&(Z=-Z),Z}function l(D){let L=_(D.getAttribute("x")||0),C=_(D.getAttribute("y")||0),b=_(D.getAttribute("rx")||D.getAttribute("ry")||0),Q=_(D.getAttribute("ry")||D.getAttribute("rx")||0),st=_(D.getAttribute("width")),Z=_(D.getAttribute("height")),ut=1-.551915024494,q=new _n;return q.moveTo(L+b,C),q.lineTo(L+st-b,C),(b!==0||Q!==0)&&q.bezierCurveTo(L+st-b*ut,C,L+st,C+Q*ut,L+st,C+Q),q.lineTo(L+st,C+Z-Q),(b!==0||Q!==0)&&q.bezierCurveTo(L+st,C+Z-Q*ut,L+st-b*ut,C+Z,L+st-b,C+Z),q.lineTo(L+b,C+Z),(b!==0||Q!==0)&&q.bezierCurveTo(L+b*ut,C+Z,L,C+Z-Q*ut,L,C+Z-Q),q.lineTo(L,C+Q),(b!==0||Q!==0)&&q.bezierCurveTo(L,C+Q*ut,L+b*ut,C,L+b,C),q}function c(D){function L(st,Z,ut){let q=_(Z),T=_(ut);Q===0?b.moveTo(q,T):b.lineTo(q,T),Q++}let C=/([+-]?\d*\.?\d+(?:e[+-]?\d+)?)(?:,|\s)([+-]?\d*\.?\d+(?:e[+-]?\d+)?)/g,b=new _n,Q=0;return D.getAttribute("points").replace(C,L),b.currentPath.autoClose=!0,b}function h(D){function L(st,Z,ut){let q=_(Z),T=_(ut);Q===0?b.moveTo(q,T):b.lineTo(q,T),Q++}let C=/([+-]?\d*\.?\d+(?:e[+-]?\d+)?)(?:,|\s)([+-]?\d*\.?\d+(?:e[+-]?\d+)?)/g,b=new _n,Q=0;return D.getAttribute("points").replace(C,L),b.currentPath.autoClose=!1,b}function f(D){let L=_(D.getAttribute("cx")||0),C=_(D.getAttribute("cy")||0),b=_(D.getAttribute("r")||0),Q=new Nn;Q.absarc(L,C,b,0,Math.PI*2);let st=new _n;return st.subPaths.push(Q),st}function d(D){let L=_(D.getAttribute("cx")||0),C=_(D.getAttribute("cy")||0),b=_(D.getAttribute("rx")||0),Q=_(D.getAttribute("ry")||0),st=new Nn;st.absellipse(L,C,b,Q,0,Math.PI*2);let Z=new _n;return Z.subPaths.push(st),Z}function m(D){let L=_(D.getAttribute("x1")||0),C=_(D.getAttribute("y1")||0),b=_(D.getAttribute("x2")||0),Q=_(D.getAttribute("y2")||0),st=new _n;return st.moveTo(L,C),st.lineTo(b,Q),st.currentPath.autoClose=!1,st}function x(D,L){L=Object.assign({},L);let C={};if(D.hasAttribute("class")){let Z=D.getAttribute("class").split(/\s/).filter(Boolean).map(ut=>ut.trim());for(let ut=0;ut<Z.length;ut++)C=Object.assign(C,K["."+Z[ut]])}D.hasAttribute("id")&&(C=Object.assign(C,K["#"+D.getAttribute("id")]));function b(Z,ut,q){q===void 0&&(q=function(V){return V.startsWith("url")&&console.warn("SVGLoader: url access in attributes is not implemented."),V}),D.hasAttribute(Z)&&(L[ut]=q(D.getAttribute(Z))),C[Z]&&(L[ut]=q(C[Z])),D.style&&D.style[Z]!==""&&(L[ut]=q(D.style[Z]))}function Q(Z){return Math.max(0,Math.min(1,_(Z)))}function st(Z){return Math.max(0,_(Z))}return b("fill","fill"),b("fill-opacity","fillOpacity",Q),b("fill-rule","fillRule"),b("opacity","opacity",Q),b("stroke","stroke"),b("stroke-opacity","strokeOpacity",Q),b("stroke-width","strokeWidth",st),b("stroke-linejoin","strokeLineJoin"),b("stroke-linecap","strokeLineCap"),b("stroke-miterlimit","strokeMiterLimit",st),b("visibility","visibility"),L}function g(D,L){return D-(L-D)}function p(D,L,C){if(typeof D!="string")throw new TypeError("Invalid input: "+typeof D);let b={SEPARATOR:/[ \t\r\n\,.\-+]/,WHITESPACE:/[ \t\r\n]/,DIGIT:/[\d]/,SIGN:/[-+]/,POINT:/\./,COMMA:/,/,EXP:/e/i,FLAGS:/[01]/},Q=0,st=1,Z=2,ut=3,q=Q,T=!0,V="",Y="",tt=[];function rt(M,W,at){let lt=new SyntaxError('Unexpected character "'+M+'" at index '+W+".");throw lt.partial=at,lt}function O(){V!==""&&(Y===""?tt.push(Number(V)):tt.push(Number(V)*Math.pow(10,Number(Y)))),V="",Y=""}let I,A=D.length;for(let M=0;M<A;M++){if(I=D[M],Array.isArray(L)&&L.includes(tt.length%C)&&b.FLAGS.test(I)){q=st,V=I,O();continue}if(q===Q){if(b.WHITESPACE.test(I))continue;if(b.DIGIT.test(I)||b.SIGN.test(I)){q=st,V=I;continue}if(b.POINT.test(I)){q=Z,V=I;continue}b.COMMA.test(I)&&(T&&rt(I,M,tt),T=!0)}if(q===st){if(b.DIGIT.test(I)){V+=I;continue}if(b.POINT.test(I)){V+=I,q=Z;continue}if(b.EXP.test(I)){q=ut;continue}b.SIGN.test(I)&&V.length===1&&b.SIGN.test(V[0])&&rt(I,M,tt)}if(q===Z){if(b.DIGIT.test(I)){V+=I;continue}if(b.EXP.test(I)){q=ut;continue}b.POINT.test(I)&&V[V.length-1]==="."&&rt(I,M,tt)}if(q===ut){if(b.DIGIT.test(I)){Y+=I;continue}if(b.SIGN.test(I)){if(Y===""){Y+=I;continue}Y.length===1&&b.SIGN.test(Y)&&rt(I,M,tt)}}b.WHITESPACE.test(I)?(O(),q=Q,T=!1):b.COMMA.test(I)?(O(),q=Q,T=!0):b.SIGN.test(I)?(O(),q=st,V=I):b.POINT.test(I)?(O(),q=Z,V=I):rt(I,M,tt)}return O(),tt}let u=["mm","cm","in","pt","pc","px"],S={mm:{mm:1,cm:.1,in:1/25.4,pt:72/25.4,pc:6/25.4,px:-1},cm:{mm:10,cm:1,in:1/2.54,pt:72/2.54,pc:6/2.54,px:-1},in:{mm:25.4,cm:2.54,in:1,pt:72,pc:6,px:-1},pt:{mm:25.4/72,cm:2.54/72,in:1/72,pt:1,pc:6/72,px:-1},pc:{mm:25.4/6,cm:2.54/6,in:1/6,pt:72/6,pc:1,px:-1},px:{px:1}};function _(D){let L="px";if(typeof D=="string"||D instanceof String)for(let b=0,Q=u.length;b<Q;b++){let st=u[b];if(D.endsWith(st)){L=st,D=D.substring(0,D.length-st.length);break}}let C;return L==="px"&&e.defaultUnit!=="px"?C=S.in[e.defaultUnit]/e.defaultDPI:(C=S[L][e.defaultUnit],C<0&&(C=S[L].in*e.defaultDPI)),C*parseFloat(D)}function v(D){if(!(D.hasAttribute("transform")||D.nodeName==="use"&&(D.hasAttribute("x")||D.hasAttribute("y"))))return null;let L=U(D);return J.length>0&&L.premultiply(J[J.length-1]),_t.copy(L),J.push(L),L}function U(D){let L=new Gt,C=ot;if(D.nodeName==="use"&&(D.hasAttribute("x")||D.hasAttribute("y"))){let b=_(D.getAttribute("x")),Q=_(D.getAttribute("y"));L.translate(b,Q)}if(D.hasAttribute("transform")){let b=D.getAttribute("transform").split(")");for(let Q=b.length-1;Q>=0;Q--){let st=b[Q].trim();if(st==="")continue;let Z=st.indexOf("("),ut=st.length;if(Z>0&&Z<ut){let q=st.slice(0,Z),T=p(st.slice(Z+1));switch(C.identity(),q){case"translate":if(T.length>=1){let V=T[0],Y=0;T.length>=2&&(Y=T[1]),C.translate(V,Y)}break;case"rotate":if(T.length>=1){let V=0,Y=0,tt=0;V=T[0]*Math.PI/180,T.length>=3&&(Y=T[1],tt=T[2]),H.makeTranslation(-Y,-tt),it.makeRotation(V),N.multiplyMatrices(it,H),H.makeTranslation(Y,tt),C.multiplyMatrices(H,N)}break;case"scale":if(T.length>=1){let V=T[0],Y=V;T.length>=2&&(Y=T[1]),C.scale(V,Y)}break;case"skewX":T.length===1&&C.set(1,Math.tan(T[0]*Math.PI/180),0,0,1,0,0,0,1);break;case"skewY":T.length===1&&C.set(1,0,0,Math.tan(T[0]*Math.PI/180),1,0,0,0,1);break;case"matrix":T.length===6&&C.set(T[0],T[2],T[4],T[1],T[3],T[5],0,0,1);break}}L.premultiply(C)}}return L}function R(D,L){function C(Z){ft.set(Z.x,Z.y,1).applyMatrix3(L),Z.set(ft.x,ft.y)}function b(Z){let ut=Z.xRadius,q=Z.yRadius,T=Math.cos(Z.aRotation),V=Math.sin(Z.aRotation),Y=new B(ut*T,ut*V,0),tt=new B(-q*V,q*T,0),rt=Y.applyMatrix3(L),O=tt.applyMatrix3(L),I=ot.set(rt.x,O.x,0,rt.y,O.y,0,0,0,1),A=H.copy(I).invert(),at=it.copy(A).transpose().multiply(A).elements,lt=w(at[0],at[1],at[4]),ht=Math.sqrt(lt.rt1),It=Math.sqrt(lt.rt2);if(Z.xRadius=1/ht,Z.yRadius=1/It,Z.aRotation=Math.atan2(lt.sn,lt.cs),!((Z.aEndAngle-Z.aStartAngle)%(2*Math.PI)<Number.EPSILON)){let At=H.set(ht,0,0,0,It,0,0,0,1),Wt=it.set(lt.cs,lt.sn,0,-lt.sn,lt.cs,0,0,0,1),gt=At.multiply(Wt).multiply(I),bt=zt=>{let{x:Nt,y:Et}=new B(Math.cos(zt),Math.sin(zt),0).applyMatrix3(gt);return Math.atan2(Et,Nt)};Z.aStartAngle=bt(Z.aStartAngle),Z.aEndAngle=bt(Z.aEndAngle),P(L)&&(Z.aClockwise=!Z.aClockwise)}}function Q(Z){let ut=$(L),q=y(L);Z.xRadius*=ut,Z.yRadius*=q;let T=ut>Number.EPSILON?Math.atan2(L.elements[1],L.elements[0]):Math.atan2(-L.elements[3],L.elements[4]);Z.aRotation+=T,P(L)&&(Z.aStartAngle*=-1,Z.aEndAngle*=-1,Z.aClockwise=!Z.aClockwise)}let st=D.subPaths;for(let Z=0,ut=st.length;Z<ut;Z++){let T=st[Z].curves;for(let V=0;V<T.length;V++){let Y=T[V];Y.isLineCurve?(C(Y.v1),C(Y.v2)):Y.isCubicBezierCurve?(C(Y.v0),C(Y.v1),C(Y.v2),C(Y.v3)):Y.isQuadraticBezierCurve?(C(Y.v0),C(Y.v1),C(Y.v2)):Y.isEllipseCurve&&(mt.set(Y.aX,Y.aY),C(mt),Y.aX=mt.x,Y.aY=mt.y,F(L)?b(Y):Q(Y))}}}function P(D){let L=D.elements;return L[0]*L[4]-L[1]*L[3]<0}function F(D){let L=D.elements,C=L[0]*L[3]+L[1]*L[4];if(C===0)return!1;let b=$(D),Q=y(D);return Math.abs(C/(b*Q))>Number.EPSILON}function $(D){let L=D.elements;return Math.sqrt(L[0]*L[0]+L[1]*L[1])}function y(D){let L=D.elements;return Math.sqrt(L[3]*L[3]+L[4]*L[4])}function w(D,L,C){let b,Q,st,Z,ut,q=D+C,T=D-C,V=Math.sqrt(T*T+4*L*L);return q>0?(b=.5*(q+V),ut=1/b,Q=D*ut*C-L*ut*L):q<0?Q=.5*(q-V):(b=.5*V,Q=-.5*V),T>0?st=T+V:st=T-V,Math.abs(st)>2*Math.abs(L)?(ut=-2*L/st,Z=1/Math.sqrt(1+ut*ut),st=ut*Z):Math.abs(L)===0?(st=1,Z=0):(ut=-.5*st/L,st=1/Math.sqrt(1+ut*ut),Z=ut*st),T>0&&(ut=st,st=-Z,Z=ut),{rt1:b,rt2:Q,cs:st,sn:Z}}let k=[],K={},J=[],ot=new Gt,H=new Gt,it=new Gt,N=new Gt,mt=new pt,ft=new B,_t=new Gt,Pt=new DOMParser().parseFromString(t,"image/svg+xml");return n(Pt.documentElement,{fill:"#000",fillOpacity:1,strokeOpacity:1,strokeWidth:1,strokeLineJoin:"miter",strokeLineCap:"butt",strokeMiterLimit:4}),{paths:k,xml:Pt.documentElement}}static createShapes(t){let n={ORIGIN:0,DESTINATION:1,BETWEEN:2,LEFT:3,RIGHT:4,BEHIND:5,BEYOND:6},s={loc:n.ORIGIN,t:0};function r(g,p,u,S){let _=g.x,v=p.x,U=u.x,R=S.x,P=g.y,F=p.y,$=u.y,y=S.y,w=(R-U)*(P-$)-(y-$)*(_-U),k=(v-_)*(P-$)-(F-P)*(_-U),K=(y-$)*(v-_)-(R-U)*(F-P),J=w/K,ot=k/K;if(K===0&&w!==0||J<=0||J>=1||ot<0||ot>1)return null;if(w===0&&K===0){for(let H=0;H<2;H++)if(a(H===0?u:S,g,p),s.loc==n.ORIGIN){let it=H===0?u:S;return{x:it.x,y:it.y,t:s.t}}else if(s.loc==n.BETWEEN){let it=+(_+s.t*(v-_)).toPrecision(10),N=+(P+s.t*(F-P)).toPrecision(10);return{x:it,y:N,t:s.t}}return null}else{for(let N=0;N<2;N++)if(a(N===0?u:S,g,p),s.loc==n.ORIGIN){let mt=N===0?u:S;return{x:mt.x,y:mt.y,t:s.t}}let H=+(_+J*(v-_)).toPrecision(10),it=+(P+J*(F-P)).toPrecision(10);return{x:H,y:it,t:J}}}function a(g,p,u){let S=u.x-p.x,_=u.y-p.y,v=g.x-p.x,U=g.y-p.y,R=S*U-v*_;if(g.x===p.x&&g.y===p.y){s.loc=n.ORIGIN,s.t=0;return}if(g.x===u.x&&g.y===u.y){s.loc=n.DESTINATION,s.t=1;return}if(R<-Number.EPSILON){s.loc=n.LEFT;return}if(R>Number.EPSILON){s.loc=n.RIGHT;return}if(S*v<0||_*U<0){s.loc=n.BEHIND;return}if(Math.sqrt(S*S+_*_)<Math.sqrt(v*v+U*U)){s.loc=n.BEYOND;return}let P;S!==0?P=v/S:P=U/_,s.loc=n.BETWEEN,s.t=P}function o(g,p){let u=[],S=[];for(let _=1;_<g.length;_++){let v=g[_-1],U=g[_];for(let R=1;R<p.length;R++){let P=p[R-1],F=p[R],$=r(v,U,P,F);$!==null&&u.find(y=>y.t<=$.t+Number.EPSILON&&y.t>=$.t-Number.EPSILON)===void 0&&(u.push($),S.push(new pt($.x,$.y)))}}return S}function l(g,p,u){let S=new pt;p.getCenter(S);let _=[];return u.forEach(v=>{v.boundingBox.containsPoint(S)&&o(g,v.points).forEach(R=>{_.push({identifier:v.identifier,isCW:v.isCW,point:R})})}),_.sort((v,U)=>v.point.x-U.point.x),_}function c(g,p,u,S,_){(_==null||_==="")&&(_="nonzero");let v=new pt;g.boundingBox.getCenter(v);let U=[new pt(u,v.y),new pt(S,v.y)],R=l(U,g.boundingBox,p);R.sort((k,K)=>k.point.x-K.point.x);let P=[],F=[];R.forEach(k=>{k.identifier===g.identifier?P.push(k):F.push(k)});let $=P[0].point.x,y=[],w=0;for(;w<F.length&&F[w].point.x<$;)y.length>0&&y[y.length-1]===F[w].identifier?y.pop():y.push(F[w].identifier),w++;if(y.push(g.identifier),_==="evenodd"){let k=y.length%2===0,K=y[y.length-2];return{identifier:g.identifier,isHole:k,for:K}}else if(_==="nonzero"){let k=!0,K=null,J=null;for(let ot=0;ot<y.length;ot++){let H=y[ot];k?(J=p[H].isCW,k=!1,K=H):J!==p[H].isCW&&(J=p[H].isCW,k=!0)}return{identifier:g.identifier,isHole:k,for:K}}else console.warn('fill-rule: "'+_+'" is currently not implemented.')}let h=999999999,f=-999999999,d=t.subPaths.map(g=>{let p=g.getPoints(),u=-999999999,S=999999999,_=-999999999,v=999999999;for(let U=0;U<p.length;U++){let R=p[U];R.y>u&&(u=R.y),R.y<S&&(S=R.y),R.x>_&&(_=R.x),R.x<v&&(v=R.x)}return f<=_&&(f=_+1),h>=v&&(h=v-1),{curves:g.curves,points:p,isCW:$n.isClockWise(p),identifier:-1,boundingBox:new is(new pt(v,S),new pt(_,u))}});d=d.filter(g=>g.points.length>1);for(let g=0;g<d.length;g++)d[g].identifier=g;let m=d.map(g=>c(g,d,h,f,t.userData?t.userData.style.fillRule:void 0)),x=[];return d.forEach(g=>{if(!m[g.identifier].isHole){let u=new Jn;u.curves=g.curves,m.filter(_=>_.isHole&&_.for===g.identifier).forEach(_=>{let v=d[_.identifier],U=new Nn;U.curves=v.curves,u.holes.push(U)}),x.push(u)}}),x}static getStrokeStyle(t,e,n,s,r){return t=t!==void 0?t:1,e=e!==void 0?e:"#000",n=n!==void 0?n:"miter",s=s!==void 0?s:"butt",r=r!==void 0?r:4,{strokeColor:e,strokeWidth:t,strokeLineJoin:n,strokeLineCap:s,strokeMiterLimit:r}}static pointsToStroke(t,e,n,s){let r=[],a=[],o=[];if(i.pointsToStrokeWithBuffers(t,e,n,s,r,a,o)===0)return null;let l=new Te;return l.setAttribute("position",new fe(r,3)),l.setAttribute("normal",new fe(a,3)),l.setAttribute("uv",new fe(o,2)),l}static pointsToStrokeWithBuffers(t,e,n,s,r,a,o,l){let c=new pt,h=new pt,f=new pt,d=new pt,m=new pt,x=new pt,g=new pt,p=new pt,u=new pt,S=new pt,_=new pt,v=new pt,U=new pt,R=new pt,P=new pt,F=new pt,$=new pt;n=n!==void 0?n:12,s=s!==void 0?s:.001,l=l!==void 0?l:0,t=T(t);let y=t.length;if(y<2)return 0;let w=t[0].equals(t[y-1]),k,K=t[0],J,ot=e.strokeWidth/2,H=1/(y-1),it=0,N,mt,ft,_t,Pt=!1,Ot=0,D=l*3,L=l*2;C(t[0],t[1],c).multiplyScalar(ot),p.copy(t[0]).sub(c),u.copy(t[0]).add(c),S.copy(p),_.copy(u);for(let V=1;V<y;V++){k=t[V],V===y-1?w?J=t[1]:J=void 0:J=t[V+1];let Y=c;if(C(K,k,Y),f.copy(Y).multiplyScalar(ot),v.copy(k).sub(f),U.copy(k).add(f),N=it+H,mt=!1,J!==void 0){C(k,J,h),f.copy(h).multiplyScalar(ot),R.copy(k).sub(f),P.copy(k).add(f),ft=!0,f.subVectors(J,K),Y.dot(f)<0&&(ft=!1),V===1&&(Pt=ft),f.subVectors(J,k),f.normalize();let tt=Math.abs(Y.dot(f));if(tt>Number.EPSILON){let rt=ot/tt;f.multiplyScalar(-rt),d.subVectors(k,K),m.copy(d).setLength(rt).add(f),F.copy(m).negate();let O=m.length(),I=d.length();d.divideScalar(I),x.subVectors(J,k);let A=x.length();switch(x.divideScalar(A),d.dot(F)<I&&x.dot(F)<A&&(mt=!0),$.copy(m).add(k),F.add(k),_t=!1,mt?ft?(P.copy(F),U.copy(F)):(R.copy(F),v.copy(F)):st(),e.strokeLineJoin){case"bevel":Z(ft,mt,N);break;case"round":ut(ft,mt),ft?Q(k,v,R,N,0):Q(k,P,U,N,1);break;default:let M=ot*e.strokeMiterLimit/O;if(M<1)if(e.strokeLineJoin!=="miter-clip"){Z(ft,mt,N);break}else ut(ft,mt),ft?(x.subVectors($,v).multiplyScalar(M).add(v),g.subVectors($,R).multiplyScalar(M).add(R),b(v,N,0),b(x,N,0),b(k,N,.5),b(k,N,.5),b(x,N,0),b(g,N,0),b(k,N,.5),b(g,N,0),b(R,N,0)):(x.subVectors($,U).multiplyScalar(M).add(U),g.subVectors($,P).multiplyScalar(M).add(P),b(U,N,1),b(x,N,1),b(k,N,.5),b(k,N,.5),b(x,N,1),b(g,N,1),b(k,N,.5),b(g,N,1),b(P,N,1));else mt?(ft?(b(u,it,1),b(p,it,0),b($,N,0),b(u,it,1),b($,N,0),b(F,N,1)):(b(u,it,1),b(p,it,0),b($,N,1),b(p,it,0),b(F,N,0),b($,N,1)),ft?R.copy($):P.copy($)):ft?(b(v,N,0),b($,N,0),b(k,N,.5),b(k,N,.5),b($,N,0),b(R,N,0)):(b(U,N,1),b($,N,1),b(k,N,.5),b(k,N,.5),b($,N,1),b(P,N,1)),_t=!0;break}}else st()}else st();!w&&V===y-1&&q(t[0],S,_,ft,!0,it),it=N,K=k,p.copy(R),u.copy(P)}if(!w)q(k,v,U,ft,!1,N);else if(mt&&r){let V=$,Y=F;Pt!==ft&&(V=F,Y=$),ft?(_t||Pt)&&(Y.toArray(r,0),Y.toArray(r,9),_t&&V.toArray(r,3)):(_t||!Pt)&&(Y.toArray(r,3),Y.toArray(r,9),_t&&V.toArray(r,0))}return Ot;function C(V,Y,tt){return tt.subVectors(Y,V),tt.set(-tt.y,tt.x).normalize()}function b(V,Y,tt){r&&(r[D]=V.x,r[D+1]=V.y,r[D+2]=0,a&&(a[D]=0,a[D+1]=0,a[D+2]=1),D+=3,o&&(o[L]=Y,o[L+1]=tt,L+=2)),Ot+=3}function Q(V,Y,tt,rt,O){c.copy(Y).sub(V).normalize(),h.copy(tt).sub(V).normalize();let I=Math.PI,A=c.dot(h);Math.abs(A)<1&&(I=Math.abs(Math.acos(A))),I/=n,f.copy(Y);for(let M=0,W=n-1;M<W;M++)d.copy(f).rotateAround(V,I),b(f,rt,O),b(d,rt,O),b(V,rt,.5),f.copy(d);b(d,rt,O),b(tt,rt,O),b(V,rt,.5)}function st(){b(u,it,1),b(p,it,0),b(v,N,0),b(u,it,1),b(v,N,0),b(U,N,1)}function Z(V,Y,tt){Y?V?(b(u,it,1),b(p,it,0),b(v,N,0),b(u,it,1),b(v,N,0),b(F,N,1),b(v,tt,0),b(R,tt,0),b(F,tt,.5)):(b(u,it,1),b(p,it,0),b(U,N,1),b(p,it,0),b(F,N,0),b(U,N,1),b(U,tt,1),b(F,tt,0),b(P,tt,1)):V?(b(v,tt,0),b(R,tt,0),b(k,tt,.5)):(b(U,tt,1),b(P,tt,0),b(k,tt,.5))}function ut(V,Y){Y&&(V?(b(u,it,1),b(p,it,0),b(v,N,0),b(u,it,1),b(v,N,0),b(F,N,1),b(v,it,0),b(k,N,.5),b(F,N,1),b(k,N,.5),b(R,it,0),b(F,N,1)):(b(u,it,1),b(p,it,0),b(U,N,1),b(p,it,0),b(F,N,0),b(U,N,1),b(U,it,1),b(F,N,0),b(k,N,.5),b(k,N,.5),b(F,N,0),b(P,it,1)))}function q(V,Y,tt,rt,O,I){switch(e.strokeLineCap){case"round":O?Q(V,tt,Y,I,.5):Q(V,Y,tt,I,.5);break;case"square":if(O)c.subVectors(Y,V),h.set(c.y,-c.x),f.addVectors(c,h).add(V),d.subVectors(h,c).add(V),rt?(f.toArray(r,3),d.toArray(r,0),d.toArray(r,9)):(f.toArray(r,3),o[7]===1?d.toArray(r,9):f.toArray(r,9),d.toArray(r,0));else{c.subVectors(tt,V),h.set(c.y,-c.x),f.addVectors(c,h).add(V),d.subVectors(h,c).add(V);let A=r.length;rt?(f.toArray(r,A-3),d.toArray(r,A-6),d.toArray(r,A-12)):(d.toArray(r,A-6),f.toArray(r,A-3),d.toArray(r,A-12))}break;default:break}}function T(V){let Y=!1;for(let rt=1,O=V.length-1;rt<O;rt++)if(V[rt].distanceTo(V[rt+1])<s){Y=!0;break}if(!Y)return V;let tt=[];tt.push(V[0]);for(let rt=1,O=V.length-1;rt<O;rt++)V[rt].distanceTo(V[rt+1])>=s&&tt.push(V[rt]);return tt.push(V[V.length-1]),tt}}};function bl(i){let t=new ts,e=new Vr(10,24,16),n=new Ve({side:Se,toneMapped:!1,vertexShader:`
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
    `});t.add(new Ae(e,n));let s=new ji(i);try{return s.fromScene(t,.012)}finally{s.dispose(),n.dispose(),e.dispose()}}var xh=1.44,f0=.35,yh=[{x:-1.12,y:.48,tilt:-.36,delay:0},{x:-.67,y:-1.08,tilt:.28,delay:.15},{x:.06,y:1.08,tilt:-.27,delay:.34},{x:.94,y:.9,tilt:.31,delay:.22},{x:1.12,y:-.49,tilt:.38,delay:.07}],d0=xh+Math.max(...yh.map(({delay:i})=>i));function p0(i){let t=i.geometry,{groups:e}=t;if(t.index||e.length!==14)return[];let n=[],s=t.getAttribute("position");for(let d=0;d<e.length;d+=2){let m=e[d],x=e[d+1],g=m.start,p=x.start+x.count,u=1/0,S=-1/0;for(let _=g;_<p;_+=1){let v=s.getX(_);u=Math.min(u,v),S=Math.max(S,v)}n.push({start:g,end:p,centerX:(u+S)/2})}let[r,a,o,l,c,h,f]=n.sort((d,m)=>d.centerX-m.centerX);return[[r],[a],[o,l,c],[h],[f]].map(d=>{let m=new Te,x=d.reduce((p,{start:u,end:S})=>p+S-u,0);for(let[p,u]of Object.entries(t.attributes)){let{array:S,itemSize:_,normalized:v}=u,U=new S.constructor(x*_),R=0;for(let{start:P,end:F}of d){let $=S.subarray(P*_,F*_);U.set($,R),R+=$.length}m.setAttribute(p,new Le(U,_,v))}m.computeBoundingBox();let g=m.boundingBox.getCenter(new B);return m.translate(-g.x,-g.y,-g.z),{mesh:new Ae(m,i.material),rest:g,worldRest:new B,screenRest:new B}})}function vh(i,t){let e=i.children[0],n=new B,s=new re,r=new B,a=[],o=0,l=!1;function c(){a.forEach(({mesh:m,rest:x,worldRest:g,screenRest:p},u)=>{let S=yh[u],_=ti.clamp((o-S.delay)/xh,0,1);if(_===1){m.position.copy(x),m.rotation.set(0,0,0);return}let v=ti.smoothstep(_,0,1),U=ti.lerp(f0,1,1-(1-_)**2),R=1-v;r.copy(n).lerp(g,U).project(t),r.x=ti.lerp(S.x,p.x,v),r.y=ti.lerp(S.y,p.y,v)+S.tilt*.19*Math.sin(Math.PI*v),m.position.copy(r.unproject(t).applyMatrix4(s)),m.rotation.set(-S.y*.24*R,S.x*.42*R,S.tilt*R)})}function h(){if(a.length){t.getWorldPosition(n),i.updateWorldMatrix(!0,!1),s.copy(i.matrixWorld).invert();for(let m of a)m.worldRest.copy(m.rest).applyMatrix4(i.matrixWorld),m.screenRest.copy(m.worldRest).project(t);c()}}function f(){if(l||(l=!0,!a.length))return!1;e.visible=!0;for(let{mesh:m}of a)i.remove(m),m.geometry.dispose();return a=[],!0}function d(m){return l?!1:a.length?(o+=m,o>=d0?f():(c(),!0)):(a=p0(e),a.length?(i.add(...a.map(({mesh:x})=>x)),e.visible=!1,h(),!0):f())}return{layout:h,advance:d,finish:f,get active(){return a.length>0},get finished(){return l}}}var m0={BackSide:Se,Box2:is,Box3:Un,BufferAttribute:Le,BufferGeometry:Te,Camera:Qi,Color:qt,DirectionalLight:Yr,DynamicDrawUsage:ah,Euler:Qe,ExtrudeGeometry:zr,Float32BufferAttribute:fe,FrontSide:mn,Group:Yn,HalfFloatType:xi,HemisphereLight:qr,IcosahedronGeometry:kr,LinearFilter:Xe,LinearSRGBColorSpace:xn,MathUtils:ti,Mesh:Ae,MeshPhysicalMaterial:Gr,NoBlending:dn,NoToneMapping:pn,NormalBlending:Zn,PerspectiveCamera:Be,Points:Ur,Quaternion:gn,RGBAFormat:qe,Raycaster:Zr,SRGBColorSpace:ke,Scene:ts,ShaderMaterial:Ve,Sphere:Qn,Triangle:Pn,Vector2:pt,Vector3:B,WebGLRenderTarget:an,WebGLRenderer:Dr};(()=>{"use strict";if(window.__largoWordPressV5)return;window.__largoWordPressV5=!0;let i=new Set,t=0;function e(){for(let r of i)r.isConnected||(r.dispatchEvent(new Event("largo:destroy")),i.delete(r));document.querySelectorAll(".largo-glass3d").forEach(r=>{let a=r.closest(".hero-slide")?.querySelector(".hero-actions a"),o=(document.documentElement.lang||"en").toLowerCase().split("-")[0];a&&["en","lv","ru"].includes(o)&&(a.setAttribute("href","/"+o+"/projects/"),a.setAttribute("data-wtw-full-navigation",""),a.setAttribute("data-wtw-no-transition","")),!i.has(r)&&(i.add(r),s(r,++t).catch(l=>{r.dataset.state="fallback",console.warn("LARGO: initialization failed.",l)}))})}function n(){e(),new MutationObserver(e).observe(document.body,{childList:!0,subtree:!0})}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",n,{once:!0}):n();async function s(r,a){r.dataset.state="loading",r.dataset.layout="container",r.innerHTML='<div class="largo-fallback" aria-hidden="true"></div><canvas class="largo-scene" tabindex="0" aria-label="LARGO. Drag horizontally to rotate. Arrow keys rotate, Home resets."></canvas>';let o=r.getBoundingClientRect();r.dataset.mobile=String(o.width<768||o.width/Math.max(o.height,1)<1);let l=r.querySelector(".largo-scene"),c=r.querySelector(".largo-fallback"),h=`<svg width="235" height="41" viewBox="0 0 235 41" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_144_309)">
<path fill-rule="evenodd" clip-rule="evenodd" d="M222.994 2.02701C225.395 3.14659 227.636 4.58605 229.397 6.34538C231.318 8.10472 232.759 10.3439 233.559 12.583C234.52 14.9821 235 17.5412 235 20.4201C235 23.1391 234.36 25.6981 233.399 28.0972C232.279 30.4963 230.838 32.7354 229.077 34.4948C227.156 36.2541 225.075 37.6936 222.514 38.8132C219.952 39.9327 217.231 40.4126 214.189 40.4126C211.308 40.4126 208.587 39.9327 206.025 38.8132C203.624 37.6936 201.383 36.2541 199.622 34.4948C197.861 32.7354 196.42 30.6562 195.46 28.2571C194.499 25.858 194.019 23.299 194.019 20.4201C194.019 17.7011 194.659 15.1421 195.62 12.743C196.74 10.3439 198.181 8.10472 199.942 6.34538C201.863 4.58605 203.944 3.14659 206.505 2.02701C209.067 0.907432 211.788 0.427612 214.83 0.427612C217.711 0.427612 220.433 0.907432 222.994 2.02701ZM226.356 25.5382C226.996 24.0987 227.316 22.3394 227.316 20.58C227.316 18.8207 226.8365 16.98135 226.196 15.302C225.5555 13.62265 224.755 12.2632 223.634 11.1436C222.514 9.86406 221.233 8.90442 219.632 8.26466C216.591 6.8252 212.589 6.98514 209.547 8.26466C207.946 9.06436 206.666 10.024 205.545 11.1436C204.424 12.4231 203.624 13.7026 202.984 15.302C202.343 16.9014 202.023 18.5008 202.023 20.4201C202.023 22.1794 202.343 23.7788 202.984 25.3782C203.464 26.9776 204.424 28.4171 205.545 29.5367C206.666 30.8162 208.106 31.7758 209.547 32.4156C211.148 33.2153 212.749 33.5351 214.67 33.5351C216.591 33.5351 218.191 33.2153 219.792 32.5755C221.393 31.7758 222.674 30.8162 223.794 29.6966C224.915 28.4171 225.715 26.9776 226.356 25.5382ZM35.218 40.0926L52.3467 1.22726H61.1512L78.2799 40.0926H69.9557L65.9536 30.8161H47.5442L43.5422 40.0926H35.218ZM56.829 10.0239L50.4257 24.4185H63.2323L56.829 10.0239ZM71.2365 1.22726L88.3653 40.0926H96.6895L79.5608 1.22726H71.2365ZM89.1654 1.22726L106.294 40.0926H114.618L97.4896 1.22726H89.1654ZM7.68392 32.8953L7.844 1.3872H0V39.9327H27.6941L27.534 32.8953H7.68392ZM166.965 17.5411V23.9387H178.811L178.651 24.7384C178.571 24.8983 178.531 25.0582 178.491 25.218L178.491 25.2182L178.491 25.2184C178.451 25.3783 178.411 25.5382 178.331 25.698C177.691 27.2974 176.89 28.5769 175.77 29.8565C174.649 30.976 173.368 31.9357 171.768 32.7354C168.726 34.1748 164.564 34.0149 161.682 32.7354C160.242 32.0956 158.801 31.136 157.68 29.8565C156.56 28.7369 155.599 27.2974 155.119 25.698C154.479 24.0986 154.159 22.4992 154.159 20.7399C154.159 18.8206 154.479 17.2212 155.119 15.6218C155.759 14.0224 156.56 12.7429 157.68 11.4634C158.801 10.3438 160.082 9.38418 161.682 8.58448C164.724 7.30496 168.726 7.14502 171.768 8.58448C173.368 9.22424 174.649 10.1839 175.77 11.4634L176.57 12.2631L183.293 8.42454C182.813 7.78478 182.173 7.14502 181.533 6.50526C179.772 4.74592 177.53 3.30647 175.129 2.18689C172.568 1.06731 169.847 0.587489 166.965 0.587489C163.924 0.587489 161.202 1.06731 158.641 2.18689C156.08 3.30647 153.998 4.74592 152.077 6.50526C150.317 8.2646 148.876 10.5038 147.755 12.9029C146.795 15.3019 146.154 17.861 146.154 20.58C146.154 23.4589 146.635 26.0179 147.595 28.417C148.556 30.8161 149.996 32.8953 151.757 34.6547C153.518 36.414 155.759 37.8535 158.161 38.973C160.722 40.0926 163.443 40.5724 166.325 40.5724C169.366 40.5724 172.088 40.0926 174.649 38.973C177.21 37.8535 179.291 36.414 181.212 34.6547C182.973 32.8953 184.414 30.6562 185.535 28.2571C185.855 27.6173 186.015 26.9776 186.175 26.3378C186.815 24.4185 186.975 22.4992 186.975 20.58C186.975 19.6203 186.975 18.6607 186.815 17.5411H166.965ZM131.107 2.1869C132.868 2.82666 134.309 3.7863 135.589 4.90587C136.87 6.02545 137.83 7.46491 138.471 8.90437C139.111 10.5038 139.431 12.2631 139.431 14.3423C139.431 16.4215 139.111 18.5008 138.311 20.1002C137.51 21.6995 136.55 23.139 135.109 24.2586C133.668 25.3782 132.067 26.1779 130.146 26.8176C129.506 26.9776 128.866 27.1375 127.905 27.2974L127.105 27.4574L132.548 39.9327H124.223L115.899 21.2197H124.223H124.544C126.785 21.0598 128.385 20.42 129.666 19.3005C131.107 18.0209 131.747 16.4215 131.747 14.5023C131.747 12.423 131.107 10.6637 129.666 9.54413C128.225 8.58449 126.465 7.94473 124.063 7.94473H109.976L107.095 1.22726H124.864C127.265 1.22726 129.346 1.54714 131.107 2.1869Z" fill="white"/>
</g>
<defs>
<clipPath id="clip0_144_309">
<rect width="235" height="41" fill="white"/>
</clipPath>
</defs>
</svg>`,f=Object.freeze({logoWidthDesktop:.86,logoWidthMobile:.94,cubeWidthDesktop:.29,cubeWidthMobile:.45,cubeHeight:.44,logoDepth:.21,logoBevel:.017,chromeRoughness:.075,chromatic:.5,maxPixelRatio:2,idleY:.0035,idleX:.0012});{let g=new DOMParser().parseFromString(h,"image/svg+xml").documentElement,p="http://www.w3.org/2000/svg",u=g.querySelector("defs");u||(u=document.createElementNS(p,"defs"),g.prepend(u));let S=document.createElementNS(p,"linearGradient");S.id="largo-fallback-chrome-"+a,S.setAttribute("x1","0"),S.setAttribute("y1","0"),S.setAttribute("x2","0"),S.setAttribute("y2","1"),[["0%","#d8dee5"],["18%","#fafcff"],["45%","#68717c"],["49%","#2b3037"],["55%","#eef3f8"],["100%","#818b97"]].forEach(function(_){let v=document.createElementNS(p,"stop");v.setAttribute("offset",_[0]),v.setAttribute("stop-color",_[1]),S.append(v)}),u.append(S),g.querySelectorAll("path").forEach(function(_){_.setAttribute("fill","url(#"+S.id+")")}),g.querySelectorAll("[clip-path]").forEach(_=>_.removeAttribute("clip-path")),g.querySelectorAll("clipPath").forEach(_=>_.remove()),g.setAttribute("aria-hidden","true"),c.replaceChildren(document.importNode(g,!0))}try{if(!r.isConnected)return;d(m0,jr)}catch(g){r.dataset.state="fallback",console.warn("LARGO: 3D unavailable; the embedded SVG is displayed.",g)}function d(g,p){let u=new g.WebGLRenderer({canvas:l,antialias:!0,alpha:!0,premultipliedAlpha:!0,powerPreference:"high-performance"});u.setClearColor(0,0),u.outputColorSpace=g.SRGBColorSpace,u.toneMapping=g.NoToneMapping,u.autoClear=!1,u.setPixelRatio(Math.min(window.devicePixelRatio||1,f.maxPixelRatio)),u.debug.onShaderError=function(j,yt,Rt,Bt){throw new Error("LARGO shader: "+j.getProgramInfoLog(yt)+`
`+j.getShaderInfoLog(Rt)+`
`+j.getShaderInfoLog(Bt))};let S=new g.PerspectiveCamera(30,1,.1,100);S.position.set(0,0,10),S.lookAt(0,0,0),S.updateMatrixWorld(!0);let _=new g.Scene,v=new g.Scene;_.background=null,v.background=null;let U=bl(u);_.environment=U.texture;let R=x(g,p,h,U.texture,{width:7,depth:f.logoDepth,bevel:f.logoBevel,roughness:f.chromeRoughness,envMapIntensity:1,color:15791355});R.rotation.set(-.055,-.1,0),_.add(R);let P=vh(R,S),F=R.children[0].geometry.boundingBox,$=F.getSize(new g.Vector3),y=[];for(let j of[F.min.x,F.max.x])for(let yt of[F.min.y,F.max.y])for(let Rt of[F.min.z,F.max.z])y.push(new g.Vector3(j,yt,Rt));let w=new g.Vector3;_.add(new g.HemisphereLight(16777215,6451333,.3));let k=new g.DirectionalLight(16777215,2.4);k.position.set(-4,5,7),_.add(k);let K=new g.DirectionalLight(13294079,1.1);K.position.set(5,-1,3),_.add(K);let J={type:g.HalfFloatType,format:g.RGBAFormat,minFilter:g.LinearFilter,magFilter:g.LinearFilter,depthBuffer:!0,stencilBuffer:!1,generateMipmaps:!1},ot=new g.WebGLRenderTarget(1,1,J),H=new g.WebGLRenderTarget(1,1,J);ot.texture.name="LARGO linear background RGBA",H.texture.name="LARGO linear background plus rear glass",ot.texture.colorSpace=g.LinearSRGBColorSpace,H.texture.colorSpace=g.LinearSRGBColorSpace,ot.texture.generateMipmaps=!1,H.texture.generateMipmaps=!1;let it=!0,N=new g.Scene,mt=new g.Camera,ft=new g.BufferGeometry;ft.setAttribute("position",new g.Float32BufferAttribute([-1,-1,0,3,-1,0,-1,3,0],3));let _t=new g.ShaderMaterial({depthTest:!1,depthWrite:!1,blending:g.NoBlending,toneMapped:!1,uniforms:{uSource:{value:ot.texture}},vertexShader:"varying vec2 vUv;void main(){vUv=position.xy*.5+.5;gl_Position=vec4(position,1.0);}",fragmentShader:`uniform sampler2D uSource;varying vec2 vUv;void main(){gl_FragColor=texture2D(uSource,vUv);
#include <colorspace_fragment>
}`}),Pt=new g.Mesh(ft,_t);Pt.frustumCulled=!1,N.add(Pt);let Ot=`varying vec3 vNormal;
    varying vec3 vEye;
    void main() {
      vec4 worldPos = modelMatrix * vec4(position, 1.0);
      vec4 mvPos = viewMatrix * worldPos;
      gl_Position = projectionMatrix * mvPos;
      vNormal = normalize(normalMatrix * normal);
      vEye = mvPos.xyz;
    }`,D=`uniform sampler2D uTexture;
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
    }`;function L(j,yt){return new g.ShaderMaterial({name:j?"LARGO glass back faces":"LARGO glass front faces",vertexShader:Ot,fragmentShader:D,side:j?g.BackSide:g.FrontSide,transparent:!1,blending:g.NoBlending,depthTest:!0,depthWrite:!0,toneMapped:!1,uniforms:{uTexture:{value:yt},uResolution:{value:new g.Vector2(1,1)},uIorR:{value:1.15},uIorY:{value:1.16},uIorG:{value:1.18},uIorC:{value:1.22},uIorB:{value:1.22},uIorP:{value:1.22},uRefractPower:{value:j?.22:.3},uChromatic:{value:f.chromatic},uSaturation:{value:1.08},uShininess:{value:90},uDiffuseness:{value:.02},uFresnelPower:{value:5},uLight:{value:new g.Vector3(-1,1,1)},uTint:{value:new g.Color(16777215)},uBackside:{value:j?1:0}}})}let C=L(!0,ot.texture),b=L(!1,H.texture),Q=[{name:"clear",hex:16777215},{name:"ice-blue",hex:8571135},{name:"amethyst",hex:12228863},{name:"teal",hex:7987407},{name:"rose",hex:16753610},{name:"amber",hex:16763523}],st=0,Z=new g.Color(16777215);r.dataset.glassTint="clear";function ut(){kt(),st=(st+1)%Q.length,Z.setHex(Q[st].hex),r.dataset.glassTint=Q[st].name,Ht=1,r.dataset.stars="visible",en()}let q=new g.Group,T=new g.Group;v.add(q),q.add(T);let V=new g.Quaternion().setFromEuler(new g.Euler(-.42,.62,.18));T.quaternion.copy(V);let Y=null,tt=!1,rt=!1,O=0,I=1,A=1,M=!1,W=new g.Vector2,at=360,lt=new Float32Array(at*3),ht=new Float32Array(at),It=new Float32Array(at),vt=new Float32Array(at),At=new Float32Array(at),Wt=7351;function gt(){return Wt=Math.imul(Wt,1664525)+1013904223>>>0,Wt/4294967296}let bt=new g.Vector3,zt=.43;for(let j=0;j<at;j++){let yt=j%5===0,Rt=(j*113+37)%216;bt.set(((Rt%6+gt())/6*2-1)*zt,((Math.floor(Rt/6)%6+gt())/6*2-1)*zt,((Math.floor(Rt/36)+gt())/6*2-1)*zt),lt.set([bt.x,bt.y,bt.z],j*3),ht[j]=yt?22+gt()*28:4.5+Math.pow(gt(),2.5)*10.5,It[j]=gt()*Math.PI*2,vt[j]=yt?1:0,At[j]=1-Math.min(1,bt.length()/(Math.sqrt(3)*zt))}let Nt=new g.BufferGeometry;Nt.setAttribute("position",new g.BufferAttribute(lt,3)),Nt.setAttribute("aSize",new g.BufferAttribute(ht,1)),Nt.setAttribute("aPhase",new g.BufferAttribute(It,1)),Nt.setAttribute("aKind",new g.BufferAttribute(vt,1)),Nt.setAttribute("aCore",new g.BufferAttribute(At,1)),Nt.computeBoundingSphere();let Et=new g.ShaderMaterial({name:"LARGO inner Milky Way",transparent:!0,premultipliedAlpha:!0,blending:g.NormalBlending,depthTest:!0,depthWrite:!1,toneMapped:!1,uniforms:{uTime:{value:0},uReveal:{value:0},uMotion:{value:1},uPixelRatio:{value:1},uTint:{value:new g.Color(16777215)}},vertexShader:`
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
        `}),Xt=new g.Points(Nt,Et);Xt.name="LARGO Milky Way inside glass",Xt.layers.set(1),Xt.visible=!1,T.add(Xt);let Ht=0;r.dataset.stars="hidden";function ee(j,yt){let Rt=Et.uniforms;Rt.uReveal.value+=(Ht-Rt.uReveal.value)*(Ze?1:1-Math.exp(-3.5*j)),Rt.uTime.value=yt/1e3,Rt.uMotion.value=Ze?0:1,Rt.uPixelRatio.value=u.getPixelRatio(),Rt.uTint.value.copy(b.uniforms.uTint.value),Nt.setDrawRange(0,M?216:at),Xt.visible=Rt.uReveal.value>.002}let z=["cube","sphere","pyramid"],Mt=0;r.dataset.shape=z[0];let ct=lt.slice(),dt=new Float64Array([1,0,0]),Tt=new Float64Array([1,0,0]),Ct=900,Zt=0,oe=!1,le=.72,Jt=.075,Ee=[new g.Vector3(0,le,0),new g.Vector3(-Math.sqrt(2/3)*le,-le/3,Math.sqrt(2)/3*le),new g.Vector3(Math.sqrt(2/3)*le,-le/3,Math.sqrt(2)/3*le),new g.Vector3(0,-le/3,-2*Math.sqrt(2)/3*le)],Ge=[[0,1,2],[0,2,3],[0,3,1],[1,3,2]].map(j=>{let yt=new g.Triangle(...j.map(Bt=>Ee[Bt])),Rt=yt.getNormal(new g.Vector3);return Rt.dot(yt.a)<0&&Rt.negate(),{triangle:yt,normal:Rt,offset:Rt.dot(yt.a)}}),vi=new g.Vector3,Mi=new g.Vector3,ln=new g.Vector3,yn=new g.Vector3;function Ls(j,yt){let Rt=-1/0,Bt=Ge[0];for(let he of Ge){let Ne=he.normal.dot(j)-he.offset;Ne>Rt&&(Rt=Ne,Bt=he)}if(Rt<=0)return yt&&yt.copy(Bt.normal),Rt-Jt;let Qt=1/0;for(let he of Ge){he.triangle.closestPointToPoint(j,Mi);let Ne=Mi.distanceToSquared(j);Ne<Qt&&(Qt=Ne,ln.copy(Mi))}return yt&&yt.subVectors(j,ln).normalize(),Math.sqrt(Qt)-Jt}function Ds(j,yt){let Rt=Math.abs(j.x)-.38,Bt=Math.abs(j.y)-.38,Qt=Math.abs(j.z)-.38,he=Math.max(Rt,0),Ne=Math.max(Bt,0),hn=Math.max(Qt,0);return yt&&yt.set(Math.sign(j.x)*he,Math.sign(j.y)*Ne,Math.sign(j.z)*hn).normalize(),Math.hypot(he,Ne,hn)+Math.min(Math.max(Rt,Bt,Qt),0)-.12}function Fn(j,yt,Rt){if(j===1)return Rt&&Rt.copy(yt),.62;let Bt=j===0?Ds:Ls,Qt=0,he=1;for(let hn=0;hn<23;hn++){let ze=(Qt+he)/2;vi.copy(yt).multiplyScalar(ze),Bt(vi)>0?he=ze:Qt=ze}let Ne=(Qt+he)/2;return Rt&&Bt(vi.copy(yt).multiplyScalar(Ne),Rt),Ne}let rs=new g.IcosahedronGeometry(1,17),ei=rs.getAttribute("position"),Si=[],as=[],Us=new Map,pe=new g.Vector3;for(let j=0;j<ei.count;j++){pe.fromBufferAttribute(ei,j).normalize();let yt=[pe.x,pe.y,pe.z].map(Bt=>Math.round(Bt*1e6)).join(","),Rt=Us.get(yt);Rt===void 0&&(Rt=Si.length/3,Us.set(yt,Rt),Si.push(pe.x,pe.y,pe.z)),as.push(Rt)}rs.dispose();let On=new Float64Array(Si),E=On.length/3,G=Array.from({length:3},()=>new Float64Array(E)),et=Array.from({length:3},()=>new Float64Array(On.length)),nt=new Float32Array(On.length),X=new Float32Array(On.length);for(let j=0;j<3;j++)for(let yt=0;yt<E;yt++){let Rt=yt*3;pe.fromArray(On,Rt);let Bt=Fn(j,pe,yn);G[j][yt]=Bt;let Qt=Bt/Math.max(1e-6,yn.dot(pe));et[j][Rt]=yn.x*Qt,et[j][Rt+1]=yn.y*Qt,et[j][Rt+2]=yn.z*Qt}let xt=new g.BufferGeometry;xt.setIndex(as),xt.setAttribute("position",new g.BufferAttribute(nt,3).setUsage(g.DynamicDrawUsage)),xt.setAttribute("normal",new g.BufferAttribute(X,3).setUsage(g.DynamicDrawUsage)),xt.boundingSphere=new g.Sphere(new g.Vector3,.9),xt.boundingBox=new g.Box3(new g.Vector3(-.9,-.9,-.9),new g.Vector3(.9,.9,.9));let St=[ct,new Float32Array(lt.length),new Float32Array(lt.length)];for(let j=0;j<at;j++){let yt=j*3;pe.fromArray(ct,yt);let Rt=pe.length();if(Rt<1e-10)continue;pe.multiplyScalar(1/Rt);let Bt=Rt/Fn(0,pe);for(let Qt=1;Qt<3;Qt++){let he=Bt*Fn(Qt,pe);St[Qt][yt]=pe.x*he,St[Qt][yt+1]=pe.y*he,St[Qt][yt+2]=pe.z*he}}Nt.getAttribute("position").setUsage(g.DynamicDrawUsage),Nt.boundingSphere=new g.Sphere(new g.Vector3,.9);function Lt(){let j=dt[0],yt=dt[1],Rt=dt[2];for(let Bt=0;Bt<E;Bt++){let Qt=Bt*3,he=j*G[0][Bt]+yt*G[1][Bt]+Rt*G[2][Bt],Ne=0;for(let ze=0;ze<3;ze++){let un=Qt+ze;nt[un]=On[un]*he;let Ai=j*et[0][un]+yt*et[1][un]+Rt*et[2][un];X[un]=Ai,Ne+=Ai*Ai}let hn=1/Math.sqrt(Ne);for(let ze=0;ze<3;ze++)X[Qt+ze]*=hn}for(let Bt=0;Bt<lt.length;Bt++)lt[Bt]=j*St[0][Bt]+yt*St[1][Bt]+Rt*St[2][Bt];xt.getAttribute("position").needsUpdate=!0,xt.getAttribute("normal").needsUpdate=!0,Nt.getAttribute("position").needsUpdate=!0}Lt();function Dt(j){if(!oe)return;let yt=Ze?1:g.MathUtils.clamp((j-Zt)/Ct,0,1),Rt=yt*yt*yt*(yt*(yt*6-15)+10);for(let Bt=0;Bt<3;Bt++)dt[Bt]=Tt[Bt]*(1-Rt)+(Bt===Mt?Rt:0);Lt(),yt===1&&(oe=!1,r.dataset.shape=z[Mt],r.dataset.shapeTransition="idle",r.dataset.model=Mt===0?"planar-rounded-box":Mt===1?"sphere":"rounded-pyramid",Y.name="LARGO refractive "+z[Mt])}function kt(){if(tt)return;let j=performance.now();Dt(j),Tt.set(dt),Mt=(Mt+1)%z.length,Zt=j,oe=!0,r.dataset.shapeTarget=z[Mt],r.dataset.shapeTransition="morphing",Ze&&Dt(j)}function Vt(j,yt){if(tt){j.dispose();return}Y?(Y.geometry.dispose(),Y.geometry=j):(Y=new g.Mesh(j,b),Y.name="LARGO rounded refractive cuboid",T.add(Y)),r.dataset.model=yt,Ut()}Vt(xt,"planar-rounded-box");function Ut(){if(tt||rt)return;let j=r.getBoundingClientRect();I=Math.max(1,Math.round(j.width)),A=Math.max(1,Math.round(j.height)),M=I<768||I/A<1,r.dataset.mobile=String(M);let yt=Math.min(window.devicePixelRatio||1,f.maxPixelRatio);u.setPixelRatio(yt),u.setSize(I,A,!1),S.aspect=I/A,S.updateProjectionMatrix(),u.getDrawingBufferSize(W),it=!0,ot.setSize(W.x,W.y),H.setSize(W.x,W.y),C.uniforms.uResolution.value.copy(W),b.uniforms.uResolution.value.copy(W);let Rt=2*Math.tan(g.MathUtils.degToRad(S.fov/2))*10,Bt=Rt*S.aspect,Qt=M?.5:.517,he=M?.45:.488;q.position.set((Qt-.5)*Bt,(.5-he)*Rt,0);let hn=Math.min(A*f.cubeHeight,I*(M?f.cubeWidthMobile:f.cubeWidthDesktop))/A*Rt;q.scale.setScalar(hn);let ze=Math.max(1.8,hn*.9+.36),un=(10+ze)/10,Ai=M?f.logoWidthMobile:f.logoWidthDesktop,Ul=M?.45:.5,wh=1-2*Ul;R.position.set(0,(.5-Ul)*Rt*un,-ze);let Ah=Bt*un*Ai/$.x,Th=Rt*un*.5/$.y,Fs=Math.min(Ah,Th),Os=0;function Nl(Bs){R.scale.setScalar(Bs),R.updateMatrixWorld(!0);for(let hs of y)if(w.copy(hs).applyMatrix4(R.children[0].matrixWorld).project(S),!Number.isFinite(w.x)||!Number.isFinite(w.y)||Math.abs(w.x)>Ai||Math.abs(w.y-wh)>.5||w.z<-1||w.z>1)return!1;return!0}if(Nl(Fs))Os=Fs;else for(let Bs=0;Bs<16;Bs++){let hs=(Os+Fs)/2;Nl(hs)?Os=hs:Fs=hs}R.scale.setScalar(Os),R.updateMatrixWorld(!0),P.layout()}let jt=new g.Vector3(1,0,0),ne=new g.Vector3(0,1,0),ie=new g.Quaternion;function me(j,yt){j&&(ie.setFromAxisAngle(ne,j),T.quaternion.premultiply(ie)),yt&&(ie.setFromAxisAngle(jt,yt),T.quaternion.premultiply(ie)),T.quaternion.normalize()}let $t=new g.Raycaster,Ft=new g.Vector2;function ge(j){if(!Y)return!1;let yt=l.getBoundingClientRect();return!yt.width||!yt.height?!1:(Ft.set((j.clientX-yt.left)/yt.width*2-1,-(j.clientY-yt.top)/yt.height*2+1),v.updateMatrixWorld(!0),S.updateMatrixWorld(!0),$t.setFromCamera(Ft,S),$t.intersectObject(Y,!1).length>0)}function Kt(j,yt){return j.type==="pointerup"&&bi&&yt-Ce<=500&&se<=64&&(j.clientX-Ue)**2+(j.clientY-cn)**2<=64&&ge(j)}let Ue=0,cn=0,Ce=0,bi=!1,se=0,be=null,ni=0,Re=0,Bn=0,tn=0,Ye=0,os=performance.now()-1600,vn=0,wl=new AbortController,we=function(j,yt,Rt,Bt){j.addEventListener(yt,Rt,Object.assign({},Bt,{signal:wl.signal}))};we(l,"touchstart",function(j){j.stopPropagation()},{passive:!0}),we(l,"touchmove",function(j){j.stopPropagation()},{passive:!0});let Al=window.matchMedia("(prefers-reduced-motion: reduce)"),Ze=Al.matches;we(Al,"change",function(j){Ze=j.matches,Ye=tn=0,en()}),we(l,"pointerdown",function(j){be!==null||j.pointerType==="mouse"&&j.button!==0||(be=j.pointerId,Ue=j.clientX,cn=j.clientY,Ce=performance.now(),bi=ge(j),se=0,ni=j.clientX,Re=j.clientY,Bn=performance.now(),Ye=tn=0,vn=0,l.classList.add("dragging"),l.setPointerCapture(be),j.pointerType==="mouse"&&j.preventDefault())}),we(l,"pointermove",function(j){if(j.pointerId!==be)return;let yt=performance.now();se=Math.max(se,(j.clientX-Ue)**2+(j.clientY-cn)**2);let Rt=Math.max(4,Math.min(80,yt-Bn)),Bt=(j.clientX-ni)*.008,Qt=(j.clientY-Re)*.008;me(Bt,Qt),en();let he=16.6667/Rt;tn=g.MathUtils.clamp(Bt*he,-.32,.32),Ye=g.MathUtils.clamp(Qt*he,-.32,.32),ni=j.clientX,Re=j.clientY,Bn=yt,j.preventDefault()});function ta(j){if(j.pointerId!==be)return;let yt=Kt(j,performance.now()),Rt=be;be=null,l.classList.remove("dragging"),l.hasPointerCapture(Rt)&&l.releasePointerCapture(Rt),os=performance.now(),yt&&ut(),(os-Bn>90||j.type==="pointercancel"||Ze)&&(Ye=tn=0)}we(l,"pointerup",ta),we(l,"pointercancel",ta),we(l,"lostpointercapture",ta),we(l,"keydown",function(j){if(["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Home","Enter"," "].includes(j.key)){if(j.preventDefault(),j.key==="Enter"||j.key===" "){j.repeat||ut();return}Ye=tn=0,os=performance.now(),j.key==="ArrowLeft"&&(vn-=Math.PI/2),j.key==="ArrowRight"&&(vn+=Math.PI/2),j.key==="ArrowUp"&&me(0,-.24),j.key==="ArrowDown"&&me(0,.24),j.key==="Home"&&(vn=0,T.quaternion.copy(V)),en()}});let Tl={en:"LARGO 3D. Drag to rotate. Tap the shape or press Enter: cube, sphere, triangular pyramid. Each tap changes the glass tint and reveals stars.",lv:"LARGO 3D. Velciet, lai pagrieztu. Pieskarieties fig\u016Brai vai nospiediet Enter: kubs, lode, tr\u012Bsst\u016Bra piram\u012Bda. Piesk\u0101riens maina stikla toni un atkl\u0101j zvaigznes.",ru:"LARGO 3D. \u041F\u0435\u0440\u0435\u0442\u0430\u0441\u043A\u0438\u0432\u0430\u0439\u0442\u0435 \u0434\u043B\u044F \u0432\u0440\u0430\u0449\u0435\u043D\u0438\u044F. \u041D\u0430\u0436\u043C\u0438\u0442\u0435 \u043D\u0430 \u0444\u0438\u0433\u0443\u0440\u0443 \u0438\u043B\u0438 Enter: \u043A\u0443\u0431, \u0448\u0430\u0440, \u0442\u0440\u0435\u0443\u0433\u043E\u043B\u044C\u043D\u0430\u044F \u043F\u0438\u0440\u0430\u043C\u0438\u0434\u0430. \u041A\u0430\u0436\u0434\u043E\u0435 \u043D\u0430\u0436\u0430\u0442\u0438\u0435 \u043C\u0435\u043D\u044F\u0435\u0442 \u043E\u0442\u0442\u0435\u043D\u043E\u043A \u0441\u0442\u0435\u043A\u043B\u0430 \u0438 \u043F\u0440\u043E\u044F\u0432\u043B\u044F\u0435\u0442 \u0437\u0432\u0451\u0437\u0434\u044B."},Mh=(document.documentElement.lang||"en").toLowerCase().split("-")[0];l.setAttribute("aria-label",Tl[Mh]||Tl.en);let ea=window.parent===window?!0:void 0,El=0;R.visible=Ze,r.dataset.logoArrival="waiting";function Sh(j){if(!P.finished){if(Ze){P.finish(),R.visible=!0,it=!0,r.dataset.logoArrival="complete";return}if(!P.active&&ea!==!0){ea===void 0&&!R.visible&&(El+=j,El>=4&&(R.visible=!0,it=!0));return}P.active||(R.visible=!0,it=!0,r.dataset.logoArrival="flying"),P.advance(j)&&(it=!0),P.finished&&(r.dataset.logoArrival="complete")}}let wi=0,zn=0,ls=!0,Cl=!0,Rl=!0,Ns=!1;function bh(){if(it&&(u.setRenderTarget(ot),u.clear(!0,!0,!0),u.render(_,S),it=!1),u.setRenderTarget(H),u.clear(!0,!0,!0),u.render(N,mt),u.clearDepth(),Y.material=C,u.render(v,S),Xt.visible){let j=S.layers.mask;S.layers.set(1);try{u.render(v,S)}finally{S.layers.mask=j}}u.setRenderTarget(null),u.clear(!0,!0,!0),u.render(_,S),u.clearDepth(),Y.material=b,u.render(v,S)}function Pl(j){if(wi=0,tt||rt||!ls||document.hidden)return;let yt=zn?Math.min((j-zn)/1e3,.05):1/60,Rt=Ze?1:1-Math.exp(-9*yt);if(b.uniforms.uTint.value.lerp(Z,Rt),C.uniforms.uTint.value.copy(b.uniforms.uTint.value),Sh(zn?Math.min((j-zn)/1e3,.15):0),zn=j,Dt(j),ee(yt,j),be===null){if(Math.abs(vn)>5e-4){let Bt=Ze?vn:vn*Math.min(1,.09*yt*60);me(Bt,0),vn-=Bt,os=j}else if(vn=0,!Ze){me(tn*yt*60,Ye*yt*60);let Bt=Math.pow(.94,yt*60);tn*=Bt,Ye*=Bt,Math.abs(Ye)<1e-5&&(Ye=0),Math.abs(tn)<1e-5&&(tn=0);let Qt=g.MathUtils.clamp((j-os-600)/1e3,0,1);me(f.idleY*Qt*yt*60,f.idleX*Qt*yt*60)}}try{bh(),Ns||(Ns=!0,r.dataset.state="ready",r.dispatchEvent(new CustomEvent("largo:ready",{bubbles:!0})))}catch(Bt){console.warn("LARGO: rendering stopped; SVG fallback is active.",Bt),Ns=!1,r.dataset.state="fallback";return}Ze?(zn=0,r.dataset.renderState="idle"):wi=requestAnimationFrame(Pl)}function en(){tt||rt||!ls||document.hidden||wi||(zn=0,wi=requestAnimationFrame(Pl),r.dataset.renderState="running")}function cs(){cancelAnimationFrame(wi),wi=0,zn=0,r.dataset.renderState="paused"}let Il=new ResizeObserver(function(){Ut(),en()});Il.observe(r);function Ll(){let j=Cl&&Rl;j!==ls&&(ls=j,ls?en():cs())}let na=new IntersectionObserver(function(j){Cl=j[j.length-1].isIntersecting,Ll()},{threshold:.001});na.observe(r),we(window,"message",function(j){j.source!==window.parent||j.data?.type!=="ea-code-viewport"||typeof j.data.visible!="boolean"||(Rl=j.data.visible,typeof j.data.revealed=="boolean"&&(ea=j.data.revealed),Ll())}),we(window,"resize",function(){Ut(),en()},{passive:!0}),we(document,"visibilitychange",function(){document.hidden?cs():en()}),we(l,"webglcontextlost",function(j){j.preventDefault(),rt=!0,r.dataset.state="fallback",cs()}),we(l,"webglcontextrestored",function(){rt=!1,Ns=!1;let j=U;U=bl(u),_.environment=U.texture,R.children[0].material.envMap=U.texture,R.children[0].material.needsUpdate=!0,j.dispose(),Ut(),en()});function Dl(){tt||(tt=!0,cs(),window.clearTimeout(O),wl.abort(),Il.disconnect(),na&&na.disconnect(),Y&&Y.geometry.dispose(),P.finish(),R.userData.dispose(),Nt.dispose(),Et.dispose(),b.dispose(),C.dispose(),ft.dispose(),_t.dispose(),H.dispose(),ot.dispose(),U.dispose(),u.dispose())}we(r,"largo:destroy",Dl),we(window,"pagehide",function(j){j.persisted?cs():Dl()}),we(window,"pageshow",en),Ut(),en()}function m(g,p,u){let S=p.getAttribute("position"),_=p.getAttribute("normal"),v=S.count,U=_.array.slice(),R=new Float64Array(v),P=new Uint8Array(v),F=Math.cos(g.MathUtils.degToRad(42)),$=1e-5,y=1/$,w=u.bevelEnabled,k=u.depth,K=1/0,J=-1/0;for(let N=0;N<v;N++)K=Math.min(K,S.getZ(N)),J=Math.max(J,S.getZ(N));for(let N of p.groups)N.materialIndex===1&&P.fill(1,N.start,N.start+N.count);let ot=new Map;function H(N){return Math.round(S.getX(N)*y)+","+Math.round(S.getY(N)*y)+","+Math.round(S.getZ(N)*y)}for(let N=0;N<v;N+=3)if(P[N])for(let mt=0;mt<3;mt++){let ft=N+mt,_t=N+(mt+1)%3,Pt=N+(mt+2)%3,Ot=S.getX(_t)-S.getX(ft),D=S.getY(_t)-S.getY(ft),L=S.getZ(_t)-S.getZ(ft),C=S.getX(Pt)-S.getX(ft),b=S.getY(Pt)-S.getY(ft),Q=S.getZ(Pt)-S.getZ(ft),st=Math.hypot(D*Q-L*b,L*C-Ot*Q,Ot*b-D*C);R[ft]=st>1e-18?Math.atan2(st,Ot*C+D*b+L*Q):0;let Z=H(ft),ut=ot.get(Z);ut?ut.push(ft):ot.set(Z,[ft])}let it=0;for(let N=0;N<v;N++){let mt=S.getZ(N);if(!P[N]){_.setXYZ(N,0,0,mt<(K+J)*.5?-1:1);continue}if(w&&(Math.abs(mt-K)<$||Math.abs(mt-J)<$)){_.setXYZ(N,0,0,Math.abs(mt-K)<$?-1:1),it++;continue}let ft=!w||Math.abs(mt)<$||Math.abs(mt-k)<$,_t=U[N*3],Pt=U[N*3+1],Ot=U[N*3+2],D=Math.hypot(_t,Pt,Ot),L=0,C=0,b=0,Q=ot.get(H(N));for(let Z=0;Z<Q.length;Z++){let ut=Q[Z];if(R[ut]===0)continue;let q=U[ut*3],T=U[ut*3+1],V=U[ut*3+2];ft&&Math.abs(V)>1e-6||D>1e-8&&q*_t+T*Pt+V*Ot<F||(L+=q*R[ut],C+=T*R[ut],b+=V*R[ut])}let st=Math.hypot(L,C,b);(st<1e-12||!Number.isFinite(st))&&(L=_t,C=Pt,b=ft?0:Ot,st=Math.hypot(L,C,b)),st<1e-12||!Number.isFinite(st)?_.setXYZ(N,1,0,0):_.setXYZ(N,L/st,C/st,b/st),it++}return _.needsUpdate=!0,p.userData.smoothChrome={smoothedVertices:it,creaseDegrees:42,capNormalsPlanar:!0,geometryPositionsUnchanged:!0},p}function x(g,p,u,S=null,_={}){let v={width:7,depth:.18,bevel:.014,bevelSegments:6,curveSegments:20,color:15265266,roughness:.14,envMapIntensity:1.45,..._};if(!Number.isFinite(v.width)||v.width<=0||!Number.isFinite(v.depth)||v.depth<=0)throw new Error("Chrome logo: width and depth must be positive finite numbers.");let U=new p().parse(u);if(U.xml.localName==="parsererror"||U.xml.querySelector("parsererror"))throw new Error("Chrome logo: the supplied SVG could not be parsed.");let R=[];for(let Pt of U.paths){let Ot=Pt.userData?.style||{};Ot.fill==="none"||Ot.fillOpacity===0||Ot.opacity===0||Ot.visibility==="hidden"||Ot.display==="none"||R.push(...p.createShapes(Pt))}if(!R.length)throw new Error("Chrome logo: no filled SVG shapes found.");let P=(U.xml.getAttribute("viewBox")||"").trim().split(/[\s,]+/).map(Number),F,$,y,w;if(P.length===4&&P.every(Number.isFinite)&&P[2]>0&&P[3]>0)[F,$,y,w]=P;else{let Pt=new g.Box2;for(let Ot of R)for(let D of Ot.getPoints(v.curveSegments))Pt.expandByPoint(D);F=Pt.min.x,$=Pt.min.y,y=Pt.max.x-Pt.min.x,w=Pt.max.y-Pt.min.y}if(!(y>0&&w>0))throw new Error("Chrome logo: invalid SVG bounds.");let k=v.width/y,K=Math.max(0,Math.min(v.bevel,v.depth*.24)),J=K/k,ot=(v.depth-2*K)/k,H=new g.ExtrudeGeometry(R,{depth:ot,steps:1,curveSegments:v.curveSegments,bevelEnabled:J>0,bevelSegments:v.bevelSegments,bevelThickness:J,bevelSize:J,bevelOffset:-J});m(g,H,{bevelEnabled:J>0,depth:ot}),H.rotateX(Math.PI),H.translate(-(F+y/2),$+w/2,ot/2),H.scale(k,k,k),H.computeBoundingBox(),H.computeBoundingSphere();let it=S?.isTexture?S:S?.texture||null,N=new g.MeshPhysicalMaterial({name:"LARGO polished chrome",flatShading:!1,color:v.color,metalness:1,roughness:v.roughness,envMap:it,envMapIntensity:v.envMapIntensity,clearcoat:.32,clearcoatRoughness:.055,transmission:0,transparent:!1,opacity:1,side:g.FrontSide,depthWrite:!0,depthTest:!0}),mt=new g.Mesh(H,N);mt.name="LARGO full SVG extrusion";let ft=new g.Group;ft.name="LARGO chrome wordmark",ft.add(mt);let _t=H.boundingBox.getSize(new g.Vector3);return ft.userData.logo={sourceViewBox:[F,$,y,w],shapeCount:R.length,holeCount:R.reduce((Pt,Ot)=>Pt+Ot.holes.length,0),width:_t.x,height:_t.y,depth:_t.z,svgUnitInWorld:k},ft.userData.dispose=()=>{H.dispose(),N.dispose()},ft}}})();})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
