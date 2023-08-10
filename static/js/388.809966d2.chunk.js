"use strict";(self.webpackChunkmoon_elevation_demo=self.webpackChunkmoon_elevation_demo||[]).push([[388],{479:function(r,e,n){n.d(e,{Z:function(){return u}});var a=n(165),t=n(861),o=n(671),i=n(144);function s(r,e){var n=r.length-e,a=0;do{for(var t=e;t>0;t--)r[a+e]+=r[a],a++;n-=e}while(n>0)}function f(r,e,n){for(var a=0,t=r.length,o=t/n;t>e;){for(var i=e;i>0;--i)r[a+e]+=r[a],++a;t-=e}for(var s=r.slice(),f=0;f<o;++f)for(var c=0;c<n;++c)r[n*f+c]=s[(n-c-1)*o+f]}function c(r,e,n,a,t,o){if(!e||1===e)return r;for(var i=0;i<t.length;++i){if(t[i]%8!==0)throw new Error("When decoding with predictor, only multiple of 8 bits are supported.");if(t[i]!==t[0])throw new Error("When decoding with predictor, all samples must have the same size.")}for(var c=t[0]/8,u=2===o?1:t.length,l=0;l<a&&!(l*u*n*c>=r.byteLength);++l){var h=void 0;if(2===e){switch(t[0]){case 8:h=new Uint8Array(r,l*u*n*c,u*n*c);break;case 16:h=new Uint16Array(r,l*u*n*c,u*n*c/2);break;case 32:h=new Uint32Array(r,l*u*n*c,u*n*c/4);break;default:throw new Error("Predictor 2 not allowed with ".concat(t[0]," bits per sample."))}s(h,u)}else 3===e&&f(h=new Uint8Array(r,l*u*n*c,u*n*c),u,c)}return r}var u=function(){function r(){(0,o.Z)(this,r)}return(0,i.Z)(r,[{key:"decode",value:function(){var r=(0,t.Z)((0,a.Z)().mark((function r(e,n){var t,o,i,s,f;return(0,a.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,this.decodeBlock(n);case 2:if(t=r.sent,1===(o=e.Predictor||1)){r.next=9;break}return i=!e.StripOffsets,s=i?e.TileWidth:e.ImageWidth,f=i?e.TileLength:e.RowsPerStrip||e.ImageLength,r.abrupt("return",c(t,o,s,f,e.BitsPerSample,e.PlanarConfiguration));case 9:return r.abrupt("return",t);case 10:case"end":return r.stop()}}),r,this)})));return function(e,n){return r.apply(this,arguments)}}()}]),r}()},388:function(r,e,n){n.r(e),n.d(e,{default:function(){return g}});var a=n(136),t=n(277),o=n(671),i=n(144),s=n(479),f=new Int32Array([0,1,8,16,9,2,3,10,17,24,32,25,18,11,4,5,12,19,26,33,40,48,41,34,27,20,13,6,7,14,21,28,35,42,49,56,57,50,43,36,29,22,15,23,30,37,44,51,58,59,52,45,38,31,39,46,53,60,61,54,47,55,62,63]),c=4017,u=799,l=3406,h=2276,v=1567,m=3784,d=5793,p=2896;function b(r,e){for(var n=0,a=[],t=16;t>0&&!r[t-1];)--t;a.push({children:[],index:0});for(var o,i=a[0],s=0;s<t;s++){for(var f=0;f<r[s];f++){for((i=a.pop()).children[i.index]=e[n];i.index>0;)i=a.pop();for(i.index++,a.push(i);a.length<=s;)a.push(o={children:[],index:0}),i.children[i.index]=o.children,i=o;n++}s+1<t&&(a.push(o={children:[],index:0}),i.children[i.index]=o.children,i=o)}return a[0].children}function w(r,e,n,a,t,o,i,s,c){var u=n.mcusPerLine,l=n.progressive,h=e,v=e,m=0,d=0;function p(){if(d>0)return d--,m>>d&1;if(255===(m=r[v++])){var e=r[v++];if(e)throw new Error("unexpected marker: ".concat((m<<8|e).toString(16)))}return d=7,m>>>7}function b(r){for(var e,n=r;null!==(e=p());){if("number"===typeof(n=n[e]))return n;if("object"!==typeof n)throw new Error("invalid huffman sequence")}return null}function w(r){for(var e=r,n=0;e>0;){var a=p();if(null===a)return;n=n<<1|a,--e}return n}function k(r){var e=w(r);return e>=1<<r-1?e:e+(-1<<r)+1}var y=0;var g,P=0;function C(r,e,n,a,t){var o=n%u,i=(n/u|0)*r.v+a,s=o*r.h+t;e(r,r.blocks[i][s])}function T(r,e,n){var a=n/r.blocksPerLine|0,t=n%r.blocksPerLine;e(r,r.blocks[a][t])}var A,x,L,E,Z,I,U=a.length;I=l?0===o?0===s?function(r,e){var n=b(r.huffmanTableDC),a=0===n?0:k(n)<<c;r.pred+=a,e[0]=r.pred}:function(r,e){e[0]|=p()<<c}:0===s?function(r,e){if(y>0)y--;else for(var n=o,a=i;n<=a;){var t=b(r.huffmanTableAC),s=15&t,u=t>>4;if(0===s){if(u<15){y=w(u)+(1<<u)-1;break}n+=16}else e[f[n+=u]]=k(s)*(1<<c),n++}}:function(r,e){for(var n=o,a=i,t=0;n<=a;){var s=f[n],u=e[s]<0?-1:1;switch(P){case 0:var l=b(r.huffmanTableAC),h=15&l;if(t=l>>4,0===h)t<15?(y=w(t)+(1<<t),P=4):(t=16,P=1);else{if(1!==h)throw new Error("invalid ACn encoding");g=k(h),P=t?2:3}continue;case 1:case 2:e[s]?e[s]+=(p()<<c)*u:0===--t&&(P=2===P?3:0);break;case 3:e[s]?e[s]+=(p()<<c)*u:(e[s]=g<<c,P=0);break;case 4:e[s]&&(e[s]+=(p()<<c)*u)}n++}4===P&&0===--y&&(P=0)}:function(r,e){var n=b(r.huffmanTableDC),a=0===n?0:k(n);r.pred+=a,e[0]=r.pred;for(var t=1;t<64;){var o=b(r.huffmanTableAC),i=15&o,s=o>>4;if(0===i){if(s<15)break;t+=16}else e[f[t+=s]]=k(i),t++}};var D,q,z=0;q=1===U?a[0].blocksPerLine*a[0].blocksPerColumn:u*n.mcusPerColumn;for(var O=t||q;z<q;){for(x=0;x<U;x++)a[x].pred=0;if(y=0,1===U)for(A=a[0],Z=0;Z<O;Z++)T(A,I,z),z++;else for(Z=0;Z<O;Z++){for(x=0;x<U;x++){var M=A=a[x],S=M.h,j=M.v;for(L=0;L<j;L++)for(E=0;E<S;E++)C(A,I,z,L,E)}if(++z===q)break}if(d=0,(D=r[v]<<8|r[v+1])<65280)throw new Error("marker was not found");if(!(D>=65488&&D<=65495))break;v+=2}return v-h}function k(r,e){var n=[],a=e.blocksPerLine,t=e.blocksPerColumn,o=a<<3,i=new Int32Array(64),s=new Uint8Array(64);function f(r,n,a){var t,o,i,s,f,b,w,k,y,g,P=e.quantizationTable,C=a;for(g=0;g<64;g++)C[g]=r[g]*P[g];for(g=0;g<8;++g){var T=8*g;0!==C[1+T]||0!==C[2+T]||0!==C[3+T]||0!==C[4+T]||0!==C[5+T]||0!==C[6+T]||0!==C[7+T]?(t=d*C[0+T]+128>>8,o=d*C[4+T]+128>>8,i=C[2+T],s=C[6+T],f=p*(C[1+T]-C[7+T])+128>>8,k=p*(C[1+T]+C[7+T])+128>>8,b=C[3+T]<<4,w=C[5+T]<<4,y=t-o+1>>1,t=t+o+1>>1,o=y,y=i*m+s*v+128>>8,i=i*v-s*m+128>>8,s=y,y=f-w+1>>1,f=f+w+1>>1,w=y,y=k+b+1>>1,b=k-b+1>>1,k=y,y=t-s+1>>1,t=t+s+1>>1,s=y,y=o-i+1>>1,o=o+i+1>>1,i=y,y=f*h+k*l+2048>>12,f=f*l-k*h+2048>>12,k=y,y=b*u+w*c+2048>>12,b=b*c-w*u+2048>>12,w=y,C[0+T]=t+k,C[7+T]=t-k,C[1+T]=o+w,C[6+T]=o-w,C[2+T]=i+b,C[5+T]=i-b,C[3+T]=s+f,C[4+T]=s-f):(y=d*C[0+T]+512>>10,C[0+T]=y,C[1+T]=y,C[2+T]=y,C[3+T]=y,C[4+T]=y,C[5+T]=y,C[6+T]=y,C[7+T]=y)}for(g=0;g<8;++g){var A=g;0!==C[8+A]||0!==C[16+A]||0!==C[24+A]||0!==C[32+A]||0!==C[40+A]||0!==C[48+A]||0!==C[56+A]?(t=d*C[0+A]+2048>>12,o=d*C[32+A]+2048>>12,i=C[16+A],s=C[48+A],f=p*(C[8+A]-C[56+A])+2048>>12,k=p*(C[8+A]+C[56+A])+2048>>12,b=C[24+A],w=C[40+A],y=t-o+1>>1,t=t+o+1>>1,o=y,y=i*m+s*v+2048>>12,i=i*v-s*m+2048>>12,s=y,y=f-w+1>>1,f=f+w+1>>1,w=y,y=k+b+1>>1,b=k-b+1>>1,k=y,y=t-s+1>>1,t=t+s+1>>1,s=y,y=o-i+1>>1,o=o+i+1>>1,i=y,y=f*h+k*l+2048>>12,f=f*l-k*h+2048>>12,k=y,y=b*u+w*c+2048>>12,b=b*c-w*u+2048>>12,w=y,C[0+A]=t+k,C[56+A]=t-k,C[8+A]=o+w,C[48+A]=o-w,C[16+A]=i+b,C[40+A]=i-b,C[24+A]=s+f,C[32+A]=s-f):(y=d*a[g+0]+8192>>14,C[0+A]=y,C[8+A]=y,C[16+A]=y,C[24+A]=y,C[32+A]=y,C[40+A]=y,C[48+A]=y,C[56+A]=y)}for(g=0;g<64;++g){var x=128+(C[g]+8>>4);n[g]=x<0?0:x>255?255:x}}for(var b=0;b<t;b++){for(var w=b<<3,k=0;k<8;k++)n.push(new Uint8Array(o));for(var y=0;y<a;y++){f(e.blocks[b][y],s,i);for(var g=0,P=y<<3,C=0;C<8;C++)for(var T=n[w+C],A=0;A<8;A++)T[P+A]=s[g++]}}return n}var y=function(){function r(){(0,o.Z)(this,r),this.jfif=null,this.adobe=null,this.quantizationTables=[],this.huffmanTablesAC=[],this.huffmanTablesDC=[],this.resetFrames()}return(0,i.Z)(r,[{key:"resetFrames",value:function(){this.frames=[]}},{key:"parse",value:function(r){var e=0;function n(){var n=r[e]<<8|r[e+1];return e+=2,n}function a(){var a=n(),t=r.subarray(e,e+a-2);return e+=t.length,t}function t(r){var e,n,a=0,t=0;for(n in r.components)r.components.hasOwnProperty(n)&&(a<(e=r.components[n]).h&&(a=e.h),t<e.v&&(t=e.v));var o=Math.ceil(r.samplesPerLine/8/a),i=Math.ceil(r.scanLines/8/t);for(n in r.components)if(r.components.hasOwnProperty(n)){e=r.components[n];for(var s=Math.ceil(Math.ceil(r.samplesPerLine/8)*e.h/a),f=Math.ceil(Math.ceil(r.scanLines/8)*e.v/t),c=o*e.h,u=i*e.v,l=[],h=0;h<u;h++){for(var v=[],m=0;m<c;m++)v.push(new Int32Array(64));l.push(v)}e.blocksPerLine=s,e.blocksPerColumn=f,e.blocks=l}r.maxH=a,r.maxV=t,r.mcusPerLine=o,r.mcusPerColumn=i}var o=n();if(65496!==o)throw new Error("SOI not found");for(o=n();65497!==o;){switch(o){case 65280:break;case 65504:case 65505:case 65506:case 65507:case 65508:case 65509:case 65510:case 65511:case 65512:case 65513:case 65514:case 65515:case 65516:case 65517:case 65518:case 65519:case 65534:var i=a();65504===o&&74===i[0]&&70===i[1]&&73===i[2]&&70===i[3]&&0===i[4]&&(this.jfif={version:{major:i[5],minor:i[6]},densityUnits:i[7],xDensity:i[8]<<8|i[9],yDensity:i[10]<<8|i[11],thumbWidth:i[12],thumbHeight:i[13],thumbData:i.subarray(14,14+3*i[12]*i[13])}),65518===o&&65===i[0]&&100===i[1]&&111===i[2]&&98===i[3]&&101===i[4]&&0===i[5]&&(this.adobe={version:i[6],flags0:i[7]<<8|i[8],flags1:i[9]<<8|i[10],transformCode:i[11]});break;case 65499:for(var s=n()+e-2;e<s;){var c=r[e++],u=new Int32Array(64);if(c>>4===0)for(var l=0;l<64;l++){u[f[l]]=r[e++]}else{if(c>>4!==1)throw new Error("DQT: invalid table spec");for(var h=0;h<64;h++){u[f[h]]=n()}}this.quantizationTables[15&c]=u}break;case 65472:case 65473:case 65474:n();for(var v={extended:65473===o,progressive:65474===o,precision:r[e++],scanLines:n(),samplesPerLine:n(),components:{},componentsOrder:[]},m=r[e++],d=void 0,p=0;p<m;p++){d=r[e];var k=r[e+1]>>4,y=15&r[e+1],g=r[e+2];v.componentsOrder.push(d),v.components[d]={h:k,v:y,quantizationIdx:g},e+=3}t(v),this.frames.push(v);break;case 65476:for(var P=n(),C=2;C<P;){for(var T=r[e++],A=new Uint8Array(16),x=0,L=0;L<16;L++,e++)A[L]=r[e],x+=A[L];for(var E=new Uint8Array(x),Z=0;Z<x;Z++,e++)E[Z]=r[e];C+=17+x,T>>4===0?this.huffmanTablesDC[15&T]=b(A,E):this.huffmanTablesAC[15&T]=b(A,E)}break;case 65501:n(),this.resetInterval=n();break;case 65498:n();for(var I=r[e++],U=[],D=this.frames[0],q=0;q<I;q++){var z=D.components[r[e++]],O=r[e++];z.huffmanTableDC=this.huffmanTablesDC[O>>4],z.huffmanTableAC=this.huffmanTablesAC[15&O],U.push(z)}var M=r[e++],S=r[e++],j=r[e++],W=w(r,e,D,U,this.resetInterval,M,S,j>>4,15&j);e+=W;break;case 65535:255!==r[e]&&e--;break;default:if(255===r[e-3]&&r[e-2]>=192&&r[e-2]<=254){e-=3;break}throw new Error("unknown JPEG marker ".concat(o.toString(16)))}o=n()}}},{key:"getResult",value:function(){var r=this.frames;if(0===this.frames.length)throw new Error("no frames were decoded");this.frames.length>1&&console.warn("more than one frame is not supported");for(var e=0;e<this.frames.length;e++)for(var n=this.frames[e].components,a=0,t=Object.keys(n);a<t.length;a++){var o=t[a];n[o].quantizationTable=this.quantizationTables[n[o].quantizationIdx],delete n[o].quantizationIdx}for(var i=r[0],s=i.components,f=i.componentsOrder,c=[],u=i.samplesPerLine,l=i.scanLines,h=0;h<f.length;h++){var v=s[f[h]];c.push({lines:k(0,v),scaleX:v.h/i.maxH,scaleY:v.v/i.maxV})}for(var m=new Uint8Array(u*l*c.length),d=0,p=0;p<l;++p)for(var b=0;b<u;++b)for(var w=0;w<c.length;++w){var y=c[w];m[d]=y.lines[0|p*y.scaleY][0|b*y.scaleX],++d}return m}}]),r}(),g=function(r){(0,a.Z)(n,r);var e=(0,t.Z)(n);function n(r){var a;return(0,o.Z)(this,n),(a=e.call(this)).reader=new y,r.JPEGTables&&a.reader.parse(r.JPEGTables),a}return(0,i.Z)(n,[{key:"decodeBlock",value:function(r){return this.reader.resetFrames(),this.reader.parse(new Uint8Array(r)),this.reader.getResult().buffer}}]),n}(s.Z)}}]);
//# sourceMappingURL=388.809966d2.chunk.js.map