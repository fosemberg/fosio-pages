import{C as x$,D as b$,E as d$,J as c$,a as n$,f as r$,h as R$,j as j$,l as I$,n as q$,o as w$,p as k$,r as f$,s as h$,t as j,u as y,v as v$,x as z$,y as y$}from"./index-yfb9v7cs.js";var d=n$(r$(),1);var Z$=($,J)=>[$[1]*J[2]-$[2]*J[1],$[2]*J[0]-$[0]*J[2],$[0]*J[1]-$[1]*J[0]],H$=($)=>{let J=Math.hypot(...$)||1;return[$[0]/J,$[1]/J,$[2]/J]},n=[[1,0,0],[-1,0,0],[0,1,0],[0,-1,0],[0,0,1],[0,0,-1]];function r($){if(Math.abs($[1])<0.5)return[0,1,0];return $[1]>0?[0,0,-1]:[0,0,1]}function V$($=0.18,J=8){let G={positions:[],normals:[],uvs:[],faces:[],indices:[]},Q=1-$;return n.forEach((X,V)=>{let K=r(X),Z=Z$(K,X),H=G.positions.length/3;for(let W=0;W<=J;W++)for(let Y=0;Y<=J;Y++){let F=Y/J,U=W/J,D=[X[0]+Z[0]*(2*F-1)+K[0]*(2*U-1),X[1]+Z[1]*(2*F-1)+K[1]*(2*U-1),X[2]+Z[2]*(2*F-1)+K[2]*(2*U-1)],N=[Math.max(-Q,Math.min(Q,D[0])),Math.max(-Q,Math.min(Q,D[1])),Math.max(-Q,Math.min(Q,D[2]))],M=[D[0]-N[0],D[1]-N[1],D[2]-N[2]],L=Math.hypot(...M)>0.000001?H$(M):X;G.positions.push(N[0]+L[0]*$,N[1]+L[1]*$,N[2]+L[2]*$),G.normals.push(...L),G.uvs.push(F,U),G.faces.push(V)}for(let W=0;W<J;W++)for(let Y=0;Y<J;Y++){let F=H+W*(J+1)+Y;G.indices.push(F,F+1,F+J+2,F,F+J+2,F+J+1)}}),G}function o($=!1){let J={positions:[],normals:[],uvs:[],indices:[]},G=$?0.5:0;return n.forEach((Q)=>{let X=r(Q),V=Z$(X,Q),K=J.positions.length/3;for(let[Z,H]of[[-1,-1],[1,-1],[1,1],[-1,1]])J.positions.push((Q[0]+V[0]*Z+X[0]*H)*0.5,(Q[1]+V[1]*Z+X[1]*H)*0.5+G,(Q[2]+V[2]*Z+X[2]*H)*0.5),J.normals.push(...Q),J.uvs.push((Z+1)/2,(H+1)/2);J.indices.push(K,K+1,K+2,K,K+2,K+3)}),J}function K$($=16,J=24){let G={positions:[],normals:[],uvs:[],indices:[]};for(let Q=0;Q<=$;Q++){let X=Q/$*Math.PI;for(let V=0;V<=J;V++){let K=V/J*Math.PI*2,Z=Math.sin(X)*Math.cos(K),H=Math.cos(X),W=Math.sin(X)*Math.sin(K);G.positions.push(Z*0.5,H*0.5,W*0.5),G.normals.push(Z,H,W),G.uvs.push(V/J,Q/$)}}for(let Q=0;Q<$;Q++)for(let X=0;X<J;X++){let V=Q*(J+1)+X,K=V+J+1;G.indices.push(V,V+1,K,K,V+1,K+1)}return G}function i($=0.5,J=0.5,G=20,Q=!0){let X={positions:[],normals:[],uvs:[],indices:[]},V=($-J)/1;for(let K=0;K<=G;K++){let Z=K/G*Math.PI*2,H=Math.cos(Z),W=Math.sin(Z),Y=H$([H,V,W]);X.positions.push(H*$,0,W*$,H*J,1,W*J),X.normals.push(...Y,...Y),X.uvs.push(K/G,0,K/G,1)}for(let K=0;K<G;K++){let Z=K*2;X.indices.push(Z,Z+1,Z+3,Z,Z+3,Z+2)}if(Q)for(let[K,Z,H]of[[0,$,-1],[1,J,1]]){if(Z<=0)continue;let W=X.positions.length/3;X.positions.push(0,K,0),X.normals.push(0,H,0),X.uvs.push(0.5,0.5);for(let Y=0;Y<=G;Y++){let F=Y/G*Math.PI*2;X.positions.push(Math.cos(F)*Z,K,Math.sin(F)*Z),X.normals.push(0,H,0),X.uvs.push(0.5+Math.cos(F)/2,0.5+Math.sin(F)/2)}for(let Y=0;Y<G;Y++)if(H>0)X.indices.push(W,W+Y+2,W+Y+1);else X.indices.push(W,W+Y+1,W+Y+2)}return X}function g($=1,J=1){let G={positions:[],normals:[],uvs:[],indices:[]};for(let Q=0;Q<=J;Q++)for(let X=0;X<=J;X++)G.positions.push((X/J-0.5)*$,0,(Q/J-0.5)*$),G.normals.push(0,1,0),G.uvs.push(X/J,Q/J);for(let Q=0;Q<J;Q++)for(let X=0;X<J;X++){let V=Q*(J+1)+X;G.indices.push(V,V+J+1,V+1,V+1,V+J+1,V+J+2)}return G}class u{gl;program;uniforms=new Map;attribs={};constructor($,J,G){this.gl=$;let Q=(K,Z)=>{let H=$.createShader(K);if($.shaderSource(H,Z),$.compileShader(H),!$.getShaderParameter(H,$.COMPILE_STATUS)){let W=$.getShaderInfoLog(H),Y=Z.split(`
`).map((F,U)=>`${U+1}: ${F}`).join(`
`);throw Error(`Shader compile error: ${W}
${Y}`)}return H},X=$.createProgram();if($.attachShader(X,Q($.VERTEX_SHADER,J)),$.attachShader(X,Q($.FRAGMENT_SHADER,G)),$.linkProgram(X),!$.getProgramParameter(X,$.LINK_STATUS))throw Error(`Program link error: ${$.getProgramInfoLog(X)}`);this.program=X;let V=$.getProgramParameter(X,$.ACTIVE_ATTRIBUTES);for(let K=0;K<V;K++){let Z=$.getActiveAttrib(X,K);this.attribs[Z.name]=$.getAttribLocation(X,Z.name)}}use(){return this.gl.useProgram(this.program),this}loc($){if(!this.uniforms.has($))this.uniforms.set($,this.gl.getUniformLocation(this.program,$));return this.uniforms.get($)}mat4($,J){this.gl.uniformMatrix4fv(this.loc($),!1,J)}vec3($,J){this.gl.uniform3f(this.loc($),J[0],J[1],J[2])}vec4($,J){this.gl.uniform4f(this.loc($),J[0],J[1],J[2],J[3])}vec2($,J,G){this.gl.uniform2f(this.loc($),J,G)}float($,J){this.gl.uniform1f(this.loc($),J)}int($,J){this.gl.uniform1i(this.loc($),J)}}class z{gl;vao;count;instanceBuffer=null;instanceCount=0;instanceStride=0;constructor($,J,G,Q){this.gl=$;this.vao=$.createVertexArray(),$.bindVertexArray(this.vao);let X=(Z,H,W)=>{let Y=J.attribs[Z];if(Y===void 0||Y<0||!H)return;let F=$.createBuffer();$.bindBuffer($.ARRAY_BUFFER,F),$.bufferData($.ARRAY_BUFFER,new Float32Array(H),$.STATIC_DRAW),$.enableVertexAttribArray(Y),$.vertexAttribPointer(Y,W,$.FLOAT,!1,0,0)};if(X("aPos",G.positions,3),X("aNormal",G.normals,3),X("aUv",G.uvs,2),X("aFace",G.faces,1),Q){this.instanceBuffer=$.createBuffer(),$.bindBuffer($.ARRAY_BUFFER,this.instanceBuffer),this.instanceStride=Q.reduce((H,W)=>H+W.size,0);let Z=0;for(let H of Q){let W=J.attribs[H.name];if(W!==void 0&&W>=0)$.enableVertexAttribArray(W),$.vertexAttribPointer(W,H.size,$.FLOAT,!1,this.instanceStride*4,Z*4),$.vertexAttribDivisor(W,1);Z+=H.size}}let V=$.createBuffer();$.bindBuffer($.ELEMENT_ARRAY_BUFFER,V);let K=G.positions.length/3>65535;$.bufferData($.ELEMENT_ARRAY_BUFFER,K?new Uint32Array(G.indices):new Uint16Array(G.indices),$.STATIC_DRAW),this.indexType=K?$.UNSIGNED_INT:$.UNSIGNED_SHORT,this.count=G.indices.length,$.bindVertexArray(null)}indexType;setInstances($){let J=this.gl;J.bindBuffer(J.ARRAY_BUFFER,this.instanceBuffer),J.bufferData(J.ARRAY_BUFFER,$,J.DYNAMIC_DRAW),this.instanceCount=$.length/this.instanceStride}draw(){let $=this.gl;if($.bindVertexArray(this.vao),this.instanceBuffer)$.drawElementsInstanced($.TRIANGLES,this.count,this.indexType,0,this.instanceCount);else $.drawElements($.TRIANGLES,this.count,this.indexType,0)}}var T={create(){let $=new Float32Array(16);return $[0]=$[5]=$[10]=$[15]=1,$},perspective($,J,G,Q,X){let V=1/Math.tan(J/2);return $.fill(0),$[0]=V/G,$[5]=V,$[10]=(X+Q)/(Q-X),$[11]=-1,$[14]=2*X*Q/(Q-X),$},lookAt($,J,G,Q=[0,1,0]){let X=J[0]-G[0],V=J[1]-G[1],K=J[2]-G[2],Z=Math.hypot(X,V,K)||1;X/=Z,V/=Z,K/=Z;let H=Q[1]*K-Q[2]*V,W=Q[2]*X-Q[0]*K,Y=Q[0]*V-Q[1]*X;Z=Math.hypot(H,W,Y)||1,H/=Z,W/=Z,Y/=Z;let F=V*Y-K*W,U=K*H-X*Y,D=X*W-V*H;return $[0]=H,$[1]=F,$[2]=X,$[3]=0,$[4]=W,$[5]=U,$[6]=V,$[7]=0,$[8]=Y,$[9]=D,$[10]=K,$[11]=0,$[12]=-(H*J[0]+W*J[1]+Y*J[2]),$[13]=-(F*J[0]+U*J[1]+D*J[2]),$[14]=-(X*J[0]+V*J[1]+K*J[2]),$[15]=1,$},multiply($,J,G){let Q=new Float32Array(16);for(let X=0;X<4;X++)for(let V=0;V<4;V++)Q[X*4+V]=J[V]*G[X*4]+J[4+V]*G[X*4+1]+J[8+V]*G[X*4+2]+J[12+V]*G[X*4+3];return $.set(Q),$},fromTRS($,J,G,Q){let[X,V,K,Z]=G,H=X+X,W=V+V,Y=K+K,F=X*H,U=X*W,D=X*Y,N=V*W,M=V*Y,L=K*Y,A=Z*H,P=Z*W,I=Z*Y;return $[0]=(1-(N+L))*Q[0],$[1]=(U+I)*Q[0],$[2]=(D-P)*Q[0],$[3]=0,$[4]=(U-I)*Q[1],$[5]=(1-(F+L))*Q[1],$[6]=(M+A)*Q[1],$[7]=0,$[8]=(D+P)*Q[2],$[9]=(M-A)*Q[2],$[10]=(1-(F+N))*Q[2],$[11]=0,$[12]=J[0],$[13]=J[1],$[14]=J[2],$[15]=1,$},invert($,J){let[G,Q,X,V,K,Z,H,W,Y,F,U,D,N,M,L,A]=J,P=G*Z-Q*K,I=G*H-X*K,S=G*W-V*K,O=Q*H-X*Z,R=Q*W-V*Z,w=X*W-V*H,k=Y*M-F*N,v=Y*L-U*N,q=Y*A-D*N,x=F*L-U*M,B=F*A-D*M,_=U*A-D*L,E=P*_-I*B+S*x+O*q-R*v+w*k;if(!E)return null;return E=1/E,$[0]=(Z*_-H*B+W*x)*E,$[1]=(X*B-Q*_-V*x)*E,$[2]=(M*w-L*R+A*O)*E,$[3]=(U*R-F*w-D*O)*E,$[4]=(H*q-K*_-W*v)*E,$[5]=(G*_-X*q+V*v)*E,$[6]=(L*S-N*w-A*I)*E,$[7]=(Y*w-U*S+D*I)*E,$[8]=(K*B-Z*q+W*k)*E,$[9]=(Q*q-G*B-V*k)*E,$[10]=(N*R-M*S+A*P)*E,$[11]=(F*S-Y*R-D*P)*E,$[12]=(Z*v-K*x-H*k)*E,$[13]=(G*x-Q*v+X*k)*E,$[14]=(M*I-N*O-L*P)*E,$[15]=(Y*O-F*I+U*P)*E,$},transformPoint($,J){let[G,Q,X]=J;return[$[0]*G+$[4]*Q+$[8]*X+$[12],$[1]*G+$[5]*Q+$[9]*X+$[13],$[2]*G+$[6]*Q+$[10]*X+$[14],$[3]*G+$[7]*Q+$[11]*X+$[15]]}},C={identity(){return[0,0,0,1]},axisAngle($,J){let G=Math.hypot(...$)||1,Q=Math.sin(J/2)/G;return[$[0]*Q,$[1]*Q,$[2]*Q,Math.cos(J/2)]},multiply($,J){let[G,Q,X,V]=$,[K,Z,H,W]=J;return[G*W+V*K+Q*H-X*Z,Q*W+V*Z+X*K-G*H,X*W+V*H+G*Z-Q*K,V*W-G*K-Q*Z-X*H]},rotate($,J){let[G,Q,X,V]=$,[K,Z,H]=J,W=V*K+Q*H-X*Z,Y=V*Z+X*K-G*H,F=V*H+G*Z-Q*K,U=-G*K-Q*Z-X*H;return[W*V+U*-G+Y*-X-F*-Q,Y*V+U*-Q+F*-G-W*-X,F*V+U*-X+W*-Q-Y*-G]},euler($,J,G){return C.multiply(C.multiply(C.axisAngle([0,1,0],J),C.axisAngle([1,0,0],$)),C.axisAngle([0,0,1],G))},slerp($,J,G){let[Q,X,V,K]=J,Z=$[0]*Q+$[1]*X+$[2]*V+$[3]*K;if(Z<0)Z=-Z,Q=-Q,X=-X,V=-V,K=-K;let H=1-G,W=G;if(Z<0.9995){let U=Math.acos(Z),D=Math.sin(U);H=Math.sin((1-G)*U)/D,W=Math.sin(G*U)/D}let Y=[$[0]*H+Q*W,$[1]*H+X*W,$[2]*H+V*W,$[3]*H+K*W],F=Math.hypot(...Y);return[Y[0]/F,Y[1]/F,Y[2]/F,Y[3]/F]}},b=($,J,G)=>$+(J-$)*G,f=($,J,G)=>Math.max(J,Math.min(G,$)),s=($)=>1-(1-$)**3,W$=($)=>$<0.5?2*$*$:1-(-2*$+2)**2/2;function p($){let J=parseInt($.slice(1),16);return[(J>>16&255)/255,(J>>8&255)/255,(J&255)/255]}function c($){let J=Math.sin($*127.1+311.7)*43758.5453;return J-Math.floor(J)}var h=Math.PI;function t($,J,G=0.2,Q=0.2,X="#111118"){return[{mesh:"sphere",color:"#ffffff",pos:[-G,$,J],scale:[Q,Q,Q*0.8],anim:"head"},{mesh:"sphere",color:"#ffffff",pos:[G,$,J],scale:[Q,Q,Q*0.8],anim:"head"},{mesh:"sphere",color:X,pos:[-G,$,J+Q*0.35],scale:[Q*0.5,Q*0.55,Q*0.3],anim:"head"},{mesh:"sphere",color:X,pos:[G,$,J+Q*0.35],scale:[Q*0.5,Q*0.55,Q*0.3],anim:"head"}]}function a($,J="main",G=0.32,Q=0.5){return[{mesh:"cyl",color:J,pos:[-$,0,0.05],scale:[G,Q,G]},{mesh:"cyl",color:J,pos:[$,0,0.05],scale:[G,Q,G]}]}var Y$={kitty:[...a(0.35),{mesh:"sphere",color:"main",pos:[0,0.95,0],scale:[1.2,1.3,1]},{mesh:"sphere",color:"#ffd1e6",pos:[0,0.9,0.3],scale:[0.75,0.9,0.5]},{mesh:"box",color:"accent",pos:[0,1.05,0.52],scale:[0.35,0.25,0.08],glow:!0},{mesh:"sphere",color:"main",pos:[0,1.9,0.08],scale:[1.05,0.88,0.92],anim:"head"},{mesh:"cone",color:"main",pos:[-0.32,2.2,0.02],rot:[0,0,0.35],scale:[0.26,0.5,0.22],anim:"head"},{mesh:"cone",color:"main",pos:[0.32,2.2,0.02],rot:[0,0,-0.35],scale:[0.26,0.5,0.22],anim:"head"},{mesh:"box",color:"accent",pos:[0,1.95,0.48],scale:[0.72,0.2,0.12],anim:"head",glow:!0},{mesh:"sphere",color:"#ff9ac7",pos:[0,1.75,0.52],scale:[0.14,0.1,0.1],anim:"head"},{mesh:"cyl",color:"main",pos:[-0.62,1.4,0.1],rot:[h,0,0.35],scale:[0.2,0.7,0.2],anim:"armL"},{mesh:"cyl",color:"main",pos:[0.62,1.4,0.1],rot:[h,0,-0.35],scale:[0.2,0.7,0.2],anim:"armR"},{mesh:"cyl",color:"accent",pos:[0,0.6,-0.45],rot:[-2.3,0,0],scale:[0.12,1.1,0.12],anim:"tail",glow:!0}],gigazaur:[...a(0.4,"main",0.38,0.55),{mesh:"sphere",color:"main",pos:[0,1.05,0],scale:[1.15,1.6,1.1]},{mesh:"sphere",color:"accent",pos:[0,1,0.35],scale:[0.75,1.15,0.5]},{mesh:"sphere",color:"main",pos:[0,2.05,0.3],scale:[0.85,0.72,1.15],anim:"head"},{mesh:"sphere",color:"accent",pos:[0,1.85,0.62],scale:[0.62,0.3,0.72],anim:"head"},...t(2.22,0.66,0.24,0.2),{mesh:"cone",color:"accent",pos:[0,2.3,-0.2],rot:[-0.4,0,0],scale:[0.22,0.45,0.22],anim:"head"},{mesh:"cone",color:"accent",pos:[0,1.75,-0.5],rot:[-0.7,0,0],scale:[0.24,0.5,0.24]},{mesh:"cone",color:"accent",pos:[0,1.3,-0.6],rot:[-0.9,0,0],scale:[0.24,0.5,0.24]},{mesh:"cone",color:"accent",pos:[0,0.85,-0.58],rot:[-1.1,0,0],scale:[0.22,0.45,0.22]},{mesh:"cone",color:"main",pos:[0,0.55,-0.35],rot:[-1.95,0,0],scale:[0.45,1.7,0.45],anim:"tail"},{mesh:"cyl",color:"main",pos:[-0.55,1.45,0.3],rot:[2.3,0,0.3],scale:[0.16,0.45,0.16],anim:"armL"},{mesh:"cyl",color:"main",pos:[0.55,1.45,0.3],rot:[2.3,0,-0.3],scale:[0.16,0.45,0.16],anim:"armR"}],king:[...a(0.45,"main",0.36,0.5),{mesh:"sphere",color:"main",pos:[0,1.25,0],scale:[1.65,1.45,1.1]},{mesh:"sphere",color:"#c8956a",pos:[0,1.15,0.36],scale:[1,0.95,0.5]},{mesh:"sphere",color:"main",pos:[0,2.1,0.25],scale:[0.8,0.75,0.75],anim:"head"},{mesh:"sphere",color:"#c8956a",pos:[0,2.02,0.52],scale:[0.55,0.48,0.32],anim:"head"},...t(2.18,0.6,0.16,0.15),{mesh:"cyl",color:"#ffd23f",pos:[0,2.4,0.2],scale:[0.32,0.22,0.32],anim:"head",glow:!0},{mesh:"cyl",color:"main",pos:[-0.95,1.75,0.1],rot:[h,0,0.22],scale:[0.36,1.45,0.36],anim:"armL"},{mesh:"cyl",color:"main",pos:[0.95,1.75,0.1],rot:[h,0,-0.22],scale:[0.36,1.45,0.36],anim:"armR"},{mesh:"sphere",color:"#5a3a1c",pos:[-1.28,0.3,0.1],scale:[0.5,0.45,0.5],anim:"armL"},{mesh:"sphere",color:"#5a3a1c",pos:[1.28,0.3,0.1],scale:[0.5,0.45,0.5],anim:"armR"}],meka:[{mesh:"box",color:"accent",pos:[-0.35,0.25,0.05],scale:[0.35,0.5,0.45]},{mesh:"box",color:"accent",pos:[0.35,0.25,0.05],scale:[0.35,0.5,0.45]},{mesh:"box",color:"main",pos:[0,1.1,0],scale:[1.2,1.3,1]},{mesh:"box",color:"accent",pos:[0,1.1,0.51],scale:[0.8,0.8,0.06]},{mesh:"sphere",color:"#ffd23f",pos:[0,1.15,0.55],scale:[0.3,0.3,0.1],glow:!0},{mesh:"box",color:"main",pos:[0,2.05,0.3],scale:[0.72,0.55,0.95],anim:"head"},{mesh:"box",color:"accent",pos:[0,1.78,0.4],scale:[0.6,0.18,0.85],anim:"head"},{mesh:"box",color:"#ffe066",pos:[-0.2,2.15,0.78],scale:[0.18,0.1,0.04],anim:"head",glow:!0},{mesh:"box",color:"#ffe066",pos:[0.2,2.15,0.78],scale:[0.18,0.1,0.04],anim:"head",glow:!0},{mesh:"cone",color:"accent",pos:[-0.25,2.3,0.05],rot:[-0.6,0,0.2],scale:[0.12,0.5,0.12],anim:"head"},{mesh:"cone",color:"accent",pos:[0.25,2.3,0.05],rot:[-0.6,0,-0.2],scale:[0.12,0.5,0.12],anim:"head"},{mesh:"box",color:"main",pos:[-0.95,1.7,-0.45],rot:[0,0.5,0.35],scale:[1.3,0.9,0.06],anim:"wingL"},{mesh:"box",color:"main",pos:[0.95,1.7,-0.45],rot:[0,-0.5,-0.35],scale:[1.3,0.9,0.06],anim:"wingR"},{mesh:"cone",color:"main",pos:[0,0.5,-0.4],rot:[-1.9,0,0],scale:[0.4,1.5,0.4],anim:"tail"},{mesh:"cyl",color:"accent",pos:[-0.72,1.55,0.1],rot:[h,0,0.3],scale:[0.2,0.75,0.2],anim:"armL"},{mesh:"cyl",color:"accent",pos:[0.72,1.55,0.1],rot:[h,0,-0.3],scale:[0.2,0.75,0.2],anim:"armR"}],penguin:[{mesh:"sphere",color:"#ff9f1c",pos:[-0.3,0.06,0.35],scale:[0.4,0.14,0.6]},{mesh:"sphere",color:"#ff9f1c",pos:[0.3,0.06,0.35],scale:[0.4,0.14,0.6]},{mesh:"sphere",color:"main",pos:[0,1.1,0],scale:[1.35,2.1,1.2]},{mesh:"sphere",color:"accent",pos:[0,0.98,0.28],scale:[0.98,1.65,0.8]},...t(1.75,0.5,0.2,0.2),{mesh:"cone",color:"#ff9f1c",pos:[0,1.55,0.55],rot:[h/2,0,0],scale:[0.16,0.35,0.12]},{mesh:"sphere",color:"main",pos:[-0.72,1.2,0],rot:[0,0,0.45],scale:[0.22,0.95,0.5],anim:"armL"},{mesh:"sphere",color:"main",pos:[0.72,1.2,0],rot:[0,0,-0.45],scale:[0.22,0.95,0.5],anim:"armR"},{mesh:"cyl",color:"#c0c7d0",pos:[0,2.1,0],scale:[0.05,0.45,0.05],anim:"head"},{mesh:"sphere",color:"#74f0ff",pos:[0,2.58,0],scale:[0.2,0.2,0.2],anim:"head",glow:!0}],alienoid:[{mesh:"cone",color:"main",pos:[-0.35,0.55,0.2],rot:[h-0.3,0,0.3],scale:[0.18,0.6,0.18],anim:"tail"},{mesh:"cone",color:"main",pos:[0.35,0.55,0.2],rot:[h-0.3,0,-0.3],scale:[0.18,0.6,0.18],anim:"tail"},{mesh:"cone",color:"main",pos:[-0.3,0.55,-0.25],rot:[h+0.3,0,0.3],scale:[0.18,0.6,0.18],anim:"tail"},{mesh:"cone",color:"main",pos:[0.3,0.55,-0.25],rot:[h+0.3,0,-0.3],scale:[0.18,0.6,0.18],anim:"tail"},{mesh:"cyl",color:"main",pos:[0,0.45,0],scale:[1.1,1,1.1]},{mesh:"sphere",color:"main",pos:[0,2,0],scale:[1.35,1.15,1.25],anim:"head"},{mesh:"sphere",color:"accent",pos:[-0.32,2.05,0.55],scale:[0.26,0.3,0.16],anim:"head",glow:!0},{mesh:"sphere",color:"accent",pos:[0.32,2.05,0.55],scale:[0.26,0.3,0.16],anim:"head",glow:!0},{mesh:"sphere",color:"accent",pos:[0,2.38,0.5],scale:[0.2,0.22,0.14],anim:"head",glow:!0},{mesh:"sphere",color:"#1a0b2e",pos:[0,1.72,0.58],scale:[0.35,0.12,0.1],anim:"head"},{mesh:"cyl",color:"main",pos:[-0.3,2.45,0],rot:[0,0,0.4],scale:[0.05,0.55,0.05],anim:"head"},{mesh:"cyl",color:"main",pos:[0.3,2.45,0],rot:[0,0,-0.4],scale:[0.05,0.55,0.05],anim:"head"},{mesh:"sphere",color:"accent",pos:[-0.52,2.95,0],scale:[0.16,0.16,0.16],anim:"head",glow:!0},{mesh:"sphere",color:"accent",pos:[0.52,2.95,0],scale:[0.16,0.16,0.16],anim:"head",glow:!0},{mesh:"cyl",color:"main",pos:[-0.6,1.25,0.1],rot:[h,0,0.5],scale:[0.14,0.8,0.14],anim:"armL"},{mesh:"cyl",color:"main",pos:[0.6,1.25,0.1],rot:[h,0,-0.5],scale:[0.14,0.8,0.14],anim:"armR"}]};var F$=`#version 300 es
precision highp float;
precision highp int;
in vec3 aPos;
in vec3 aNormal;
in vec2 aUv;
uniform mat4 uModel;
uniform mat4 uViewProj;
uniform int uMode;
uniform float uTime;
out vec3 vWorld;
out vec3 vNormal;
out vec2 vUv;
void main() {
  vec3 p = aPos;
  vec3 n = aNormal;
  vec4 w = uModel * vec4(p, 1.0);
  if (uMode == 2) {
    float t = uTime;
    float h = sin(w.x * 0.5 + t * 1.1) * 0.12 + sin(w.z * 0.7 - t * 1.4) * 0.09;
    w.y += h;
    float fade = exp(-abs(w.z + 12.0) * 0.12);
    float dx = cos(w.x * 0.5 + t * 1.1) * 0.06 * fade;
    float dz = -cos(w.z * 0.7 - t * 1.4) * 0.063 * fade;
    n = normalize(vec3(-dx, 1.0, -dz));
    vNormal = n;
  } else {
    vNormal = normalize(mat3(uModel) * n);
  }
  vWorld = w.xyz;
  vUv = aUv;
  gl_Position = uViewProj * w;
}
`,N$=`#version 300 es
precision highp float;
precision highp int;
in vec3 vWorld;
in vec3 vNormal;
in vec2 vUv;
uniform vec3 uColor;
uniform vec3 uEmissive;
uniform float uFlash;
uniform float uRim;
uniform float uAlpha;
uniform int uMode;
uniform float uTime;
uniform vec3 uGlow;
out vec4 outColor;

uniform vec3 uSunDir;
uniform vec3 uSunColor;
uniform vec3 uSkyColor;
uniform vec3 uGroundColor;
uniform vec3 uFogColor;
uniform float uFogDensity;
uniform vec3 uCamPos;

vec3 shade(vec3 base, vec3 n, vec3 wp, float rimAmount) {
  vec3 v = normalize(uCamPos - wp);
  float diff = max(dot(n, uSunDir), 0.0);
  float hemi = n.y * 0.5 + 0.5;
  vec3 amb = mix(uGroundColor, uSkyColor, hemi);
  vec3 h = normalize(uSunDir + v);
  float spec = pow(max(dot(n, h), 0.0), 40.0) * 0.35;
  float rim = pow(1.0 - max(dot(n, v), 0.0), 3.0) * rimAmount;
  return base * (amb + uSunColor * diff) + uSunColor * spec + rim * vec3(1.0, 0.55, 0.8);
}

vec3 applyFog(vec3 c, vec3 wp) {
  float d = length(wp - uCamPos);
  float f = 1.0 - exp(-pow(d * uFogDensity, 2.0));
  return mix(c, uFogColor, clamp(f, 0.0, 1.0));
}

float hash21(vec2 p) {
  p = fract(p * vec2(123.34, 456.21));
  p += dot(p, p + 45.32);
  return fract(p.x * p.y);
}

void main() {
  vec3 n = normalize(vNormal);
  vec3 base = uColor;
  vec3 emissive = uEmissive;
  float alpha = uAlpha;
  if (uMode == 1) {
    // Asphalt blocks separated by roads with dashed centre lines.
    vec2 g = vWorld.xz / 3.0;
    vec2 f = abs(fract(g) - 0.5);
    float road = step(0.40, max(f.x, f.y));
    float side = step(0.36, max(f.x, f.y)) - road;
    vec3 block = vec3(0.13, 0.11, 0.2) + hash21(floor(g)) * 0.04;
    vec3 asphalt = vec3(0.07, 0.065, 0.1);
    base = mix(block, asphalt, road);
    base = mix(base, vec3(0.22, 0.2, 0.3), side);
    vec2 lane = fract(vWorld.xz * 0.8);
    float dashX = step(0.49, f.y) * step(0.5, lane.x) * step(max(f.x, f.y), 0.5);
    float dashZ = step(0.49, f.x) * step(0.5, lane.y);
    emissive += vec3(1.0, 0.8, 0.3) * 0.35 * max(dashX, dashZ) * road;
    float r = length(vWorld.xz);
    emissive += vec3(0.9, 0.3, 0.6) * 0.05 * smoothstep(40.0, 5.0, r);
  } else if (uMode == 2) {
    vec3 v = normalize(uCamPos - vWorld);
    float fres = pow(1.0 - max(dot(n, v), 0.0), 3.0);
    base = mix(vec3(0.06, 0.14, 0.32), vec3(0.35, 0.3, 0.6), fres);
    float sparkle = pow(max(dot(reflect(-uSunDir, n), v), 0.0), 40.0);
    emissive += vec3(1.0, 0.7, 0.5) * sparkle * 0.8 + vec3(0.25, 0.15, 0.35) * fres;
  } else if (uMode == 3) {
    float r = length(vUv - 0.5) * 2.0;
    float rings = smoothstep(0.03, 0.0, abs(fract(r * 3.0 - uTime * 0.4) - 0.5) - 0.44);
    emissive += uGlow * rings * 0.6 * step(r, 1.0);
  }
  vec3 c = shade(base, n, vWorld, uRim) + emissive;
  c = mix(c, vec3(1.0, 0.15, 0.15), uFlash);
  outColor = vec4(applyFog(c, vWorld), alpha);
}
`,D$=`#version 300 es
precision highp float;
precision highp int;
in vec3 aPos;
in vec3 aNormal;
in vec4 iOffset;   // xyz position, w yaw
in vec4 iScale;    // xyz scale, w seed
in vec4 iColor;    // rgb colour, w shake
uniform mat4 uViewProj;
uniform float uTime;
out vec3 vWorld;
out vec3 vNormal;
out vec3 vLocal;
out vec3 vSize;
out vec3 vColor;
out vec3 vLocalN;
flat out float vSeed;
void main() {
  vLocalN = aNormal;
  float c = cos(iOffset.w), s = sin(iOffset.w);
  mat3 rot = mat3(c, 0.0, -s, 0.0, 1.0, 0.0, s, 0.0, c);
  vec3 p = aPos * iScale.xyz;
  float shake = iColor.w;
  p.x += sin(uTime * 60.0 + iScale.w * 10.0) * 0.08 * shake * aPos.y;
  vec3 w = rot * p + iOffset.xyz;
  vWorld = w;
  vNormal = rot * aNormal;
  vLocal = aPos;
  vSize = iScale.xyz;
  vColor = iColor.rgb;
  vSeed = iScale.w;
  gl_Position = uViewProj * vec4(w, 1.0);
}
`,L$=`#version 300 es
precision highp float;
precision highp int;
in vec3 vWorld;
in vec3 vNormal;
in vec3 vLocal;
in vec3 vSize;
in vec3 vColor;
in vec3 vLocalN;
flat in float vSeed;
uniform float uTime;
out vec4 outColor;

uniform vec3 uSunDir;
uniform vec3 uSunColor;
uniform vec3 uSkyColor;
uniform vec3 uGroundColor;
uniform vec3 uFogColor;
uniform float uFogDensity;
uniform vec3 uCamPos;

vec3 shade(vec3 base, vec3 n, vec3 wp, float rimAmount) {
  vec3 v = normalize(uCamPos - wp);
  float diff = max(dot(n, uSunDir), 0.0);
  float hemi = n.y * 0.5 + 0.5;
  vec3 amb = mix(uGroundColor, uSkyColor, hemi);
  vec3 h = normalize(uSunDir + v);
  float spec = pow(max(dot(n, h), 0.0), 40.0) * 0.35;
  float rim = pow(1.0 - max(dot(n, v), 0.0), 3.0) * rimAmount;
  return base * (amb + uSunColor * diff) + uSunColor * spec + rim * vec3(1.0, 0.55, 0.8);
}

vec3 applyFog(vec3 c, vec3 wp) {
  float d = length(wp - uCamPos);
  float f = 1.0 - exp(-pow(d * uFogDensity, 2.0));
  return mix(c, uFogColor, clamp(f, 0.0, 1.0));
}

float hash21(vec2 p) {
  p = fract(p * vec2(123.34, 456.21));
  p += dot(p, p + 45.32);
  return fract(p.x * p.y);
}

void main() {
  vec3 n = normalize(vNormal);
  vec3 base = vColor;
  vec3 emissive = vec3(0.0);
  if (abs(n.y) < 0.5) {
    // Side face: window grid in world-ish units.
    float horiz = abs(vLocalN.x) > 0.5 ? vLocal.z * vSize.z : vLocal.x * vSize.x;
    vec2 cell = vec2(horiz / 0.38, vLocal.y * vSize.y / 0.45);
    vec2 id = floor(cell);
    vec2 f = fract(cell);
    float win = step(0.22, f.x) * step(f.x, 0.78) * step(0.25, f.y) * step(f.y, 0.75);
    float lit = step(0.45, hash21(id + vSeed * 17.0));
    float flicker = 0.85 + 0.15 * sin(uTime * 2.0 + hash21(id) * 40.0);
    vec3 warm = mix(vec3(1.0, 0.78, 0.42), vec3(0.55, 0.85, 1.0), step(0.8, hash21(id + 3.1)));
    float edge = step(vLocal.y * vSize.y, vSize.y - 0.25);
    emissive += win * lit * warm * 0.9 * flicker * edge;
    base = mix(base, base * 0.55, win);
  } else if (n.y > 0.5) {
    base *= 0.8;
    float beacon = step(0.93, fract(uTime * 0.5 + vSeed)) * step(3.5, vSize.y);
    emissive += vec3(1.0, 0.1, 0.2) * beacon * step(length(vLocal.xz), 0.12);
  }
  vec3 c = shade(base, n, vWorld, 0.15) + emissive;
  outColor = vec4(applyFog(c, vWorld), 1.0);
}
`,U$=`#version 300 es
precision highp float;
precision highp int;
in vec3 aPos;
in vec3 aNormal;
in vec2 aUv;
in float aFace;
uniform mat4 uModel;
uniform mat4 uViewProj;
out vec3 vWorld;
out vec3 vNormal;
out vec2 vUv;
flat out int vFace;
void main() {
  vec4 w = uModel * vec4(aPos, 1.0);
  vWorld = w.xyz;
  vNormal = normalize(mat3(uModel) * aNormal);
  vUv = aUv;
  vFace = int(aFace + 0.5);
  gl_Position = uViewProj * w;
}
`,O$=`#version 300 es
precision highp float;
precision highp int;
in vec3 vWorld;
in vec3 vNormal;
in vec2 vUv;
flat in int vFace;
uniform vec3 uBody;
uniform float uKept;
uniform float uHover;
uniform float uBlank;
out vec4 outColor;

uniform vec3 uSunDir;
uniform vec3 uSunColor;
uniform vec3 uSkyColor;
uniform vec3 uGroundColor;
uniform vec3 uFogColor;
uniform float uFogDensity;
uniform vec3 uCamPos;

vec3 shade(vec3 base, vec3 n, vec3 wp, float rimAmount) {
  vec3 v = normalize(uCamPos - wp);
  float diff = max(dot(n, uSunDir), 0.0);
  float hemi = n.y * 0.5 + 0.5;
  vec3 amb = mix(uGroundColor, uSkyColor, hemi);
  vec3 h = normalize(uSunDir + v);
  float spec = pow(max(dot(n, h), 0.0), 40.0) * 0.35;
  float rim = pow(1.0 - max(dot(n, v), 0.0), 3.0) * rimAmount;
  return base * (amb + uSunColor * diff) + uSunColor * spec + rim * vec3(1.0, 0.55, 0.8);
}

vec3 applyFog(vec3 c, vec3 wp) {
  float d = length(wp - uCamPos);
  float f = 1.0 - exp(-pow(d * uFogDensity, 2.0));
  return mix(c, uFogColor, clamp(f, 0.0, 1.0));
}

float hash21(vec2 p) {
  p = fract(p * vec2(123.34, 456.21));
  p += dot(p, p + 45.32);
  return fract(p.x * p.y);
}


float sdSeg(vec2 p, vec2 a, vec2 b) {
  vec2 pa = p - a, ba = b - a;
  float h = clamp(dot(pa, ba) / dot(ba, ba), 0.0, 1.0);
  return length(pa - ba * h);
}

float sdHeart(vec2 p) {
  p.x = abs(p.x);
  if (p.y + p.x > 1.0) return sqrt(dot(p - vec2(0.25, 0.75), p - vec2(0.25, 0.75))) - sqrt(2.0) / 4.0;
  vec2 a = p - vec2(0.0, 1.0);
  vec2 b = p - 0.5 * max(p.x + p.y, 0.0);
  return sqrt(min(dot(a, a), dot(b, b))) * sign(p.x - p.y);
}

float sdBolt(vec2 p) {
  vec2 v[7] = vec2[7](vec2(0.58, 0.9), vec2(0.28, 0.46), vec2(0.47, 0.46), vec2(0.38, 0.1), vec2(0.74, 0.56), vec2(0.54, 0.56), vec2(0.66, 0.9));
  float d = dot(p - v[0], p - v[0]);
  float s = 1.0;
  for (int i = 0, j = 6; i < 7; j = i, i++) {
    vec2 e = v[j] - v[i];
    vec2 w = p - v[i];
    vec2 b = w - e * clamp(dot(w, e) / dot(e, e), 0.0, 1.0);
    d = min(d, dot(b, b));
    bvec3 c = bvec3(p.y >= v[i].y, p.y < v[j].y, e.x * w.y > e.y * w.x);
    if (all(c) || all(not(c))) s *= -1.0;
  }
  return s * sqrt(d);
}

float digit(vec2 p, int n) {
  float d = 1e3;
  if (n == 1) {
    d = min(d, sdSeg(p, vec2(0.52, 0.22), vec2(0.52, 0.80)));
    d = min(d, sdSeg(p, vec2(0.38, 0.66), vec2(0.52, 0.80)));
    d = min(d, sdSeg(p, vec2(0.38, 0.22), vec2(0.64, 0.22)));
  } else if (n == 2) {
    d = min(d, sdSeg(p, vec2(0.35, 0.68), vec2(0.43, 0.78)));
    d = min(d, sdSeg(p, vec2(0.43, 0.78), vec2(0.58, 0.79)));
    d = min(d, sdSeg(p, vec2(0.58, 0.79), vec2(0.65, 0.70)));
    d = min(d, sdSeg(p, vec2(0.65, 0.70), vec2(0.64, 0.60)));
    d = min(d, sdSeg(p, vec2(0.64, 0.60), vec2(0.35, 0.22)));
    d = min(d, sdSeg(p, vec2(0.35, 0.22), vec2(0.67, 0.22)));
  } else {
    d = min(d, sdSeg(p, vec2(0.35, 0.78), vec2(0.64, 0.78)));
    d = min(d, sdSeg(p, vec2(0.64, 0.78), vec2(0.49, 0.56)));
    d = min(d, sdSeg(p, vec2(0.49, 0.56), vec2(0.60, 0.54)));
    d = min(d, sdSeg(p, vec2(0.60, 0.54), vec2(0.66, 0.44)));
    d = min(d, sdSeg(p, vec2(0.66, 0.44), vec2(0.65, 0.31)));
    d = min(d, sdSeg(p, vec2(0.65, 0.31), vec2(0.57, 0.23)));
    d = min(d, sdSeg(p, vec2(0.57, 0.23), vec2(0.42, 0.23)));
    d = min(d, sdSeg(p, vec2(0.42, 0.23), vec2(0.34, 0.30)));
  }
  return d - 0.055;
}

float claw(vec2 p) {
  float d = 1e3;
  for (int i = 0; i < 3; i++) {
    float x = 0.3 + float(i) * 0.2;
    d = min(d, sdSeg(p, vec2(x - 0.02, 0.84), vec2(x + 0.04, 0.55)));
    d = min(d, sdSeg(p, vec2(x + 0.04, 0.55), vec2(x - 0.06, 0.16)));
  }
  return d - 0.045;
}

void main() {
  vec3 n = normalize(vNormal);
  vec2 p = vUv;
  float d;
  vec3 ink;
  if (vFace <= 2) { d = digit(p, vFace + 1); ink = vec3(0.97, 0.95, 1.0); }
  else if (vFace == 3) { d = claw(p); ink = vec3(1.0, 0.55, 0.2); }
  else if (vFace == 4) { d = sdBolt(p); ink = vec3(1.0, 0.85, 0.2); }
  else { d = sdHeart((p - vec2(0.5, 0.2)) * 1.8) / 1.8; ink = vec3(1.0, 0.3, 0.42); }
  if (uBlank > 0.5) d = 1.0;
  float aa = fwidth(d) * 1.2;
  float m = 1.0 - smoothstep(-aa, aa, d);
  vec3 base = mix(uBody, ink, m);
  vec3 c = shade(base, n, vWorld, 0.25);
  c += ink * m * 0.35;
  c += vec3(1.0, 0.82, 0.25) * uKept * 0.18;
  c += vec3(1.0, 0.3, 0.6) * uHover * 0.2;
  outColor = vec4(c, 1.0);
}
`,B$=`#version 300 es
precision highp float;
precision highp int;
out vec2 vNdc;
void main() {
  vec2 p = vec2(float((gl_VertexID << 1) & 2), float(gl_VertexID & 2)) * 2.0 - 1.0;
  vNdc = p;
  gl_Position = vec4(p, 0.9999, 1.0);
}
`,M$=`#version 300 es
precision highp float;
precision highp int;
in vec2 vNdc;
uniform mat4 uInvViewProj;
uniform vec3 uSunDir;
uniform float uTime;
out vec4 outColor;
float hash(vec3 p) { p = fract(p * 0.3183099 + 0.1); p *= 17.0; return fract(p.x * p.y * p.z * (p.x + p.y + p.z)); }
void main() {
  vec4 a = uInvViewProj * vec4(vNdc, -1.0, 1.0);
  vec4 b = uInvViewProj * vec4(vNdc, 1.0, 1.0);
  vec3 dir = normalize(b.xyz / b.w - a.xyz / a.w);
  float h = dir.y;
  vec3 horizon = vec3(1.0, 0.45, 0.35);
  vec3 mid = vec3(0.55, 0.18, 0.45);
  vec3 zenith = vec3(0.07, 0.04, 0.18);
  vec3 c = mix(horizon, mid, smoothstep(-0.02, 0.18, h));
  c = mix(c, zenith, smoothstep(0.15, 0.7, h));
  c = mix(c, vec3(0.12, 0.07, 0.2), smoothstep(0.0, -0.3, h));
  float sun = max(dot(dir, uSunDir), 0.0);
  c += vec3(1.0, 0.7, 0.4) * pow(sun, 400.0) * 3.0 + vec3(1.0, 0.45, 0.3) * pow(sun, 8.0) * 0.35;
  vec3 sp = floor(dir * 180.0);
  float star = step(0.997, hash(sp)) * smoothstep(0.15, 0.5, h);
  c += vec3(star) * (0.6 + 0.4 * sin(uTime * 3.0 + hash(sp + 1.0) * 30.0));
  outColor = vec4(c, 1.0);
}
`,C$=`#version 300 es
precision highp float;
precision highp int;
in vec3 aPos;
in vec4 aColor;
in float aSize;
uniform mat4 uViewProj;
uniform float uScale;
out vec4 vColor;
void main() {
  vec4 p = uViewProj * vec4(aPos, 1.0);
  gl_Position = p;
  gl_PointSize = aSize * uScale / max(p.w, 0.1);
  vColor = aColor;
}
`,E$=`#version 300 es
precision highp float;
precision highp int;
in vec4 vColor;
out vec4 outColor;
void main() {
  vec2 d = gl_PointCoord - 0.5;
  float r = length(d);
  float a = smoothstep(0.5, 0.0, r);
  outColor = vec4(vColor.rgb * a * vColor.a, a * vColor.a);
}
`,A$=`#version 300 es
precision highp float;
precision highp int;
in vec3 aPos;
in vec2 aUv;
uniform mat4 uModel;
uniform mat4 uViewProj;
out vec2 vUv;
void main() {
  vUv = aUv;
  gl_Position = uViewProj * uModel * vec4(aPos, 1.0);
}
`,T$=`#version 300 es
precision highp float;
precision highp int;
in vec2 vUv;
uniform int uMode;
uniform vec4 uColor;
uniform float uTime;
out vec4 outColor;
void main() {
  float r = length(vUv - 0.5) * 2.0;
  if (uMode == 0) {
    float a = smoothstep(1.0, 0.0, r) * uColor.a;
    outColor = vec4(0.0, 0.0, 0.0, a);
  } else {
    float ring = smoothstep(0.08, 0.0, abs(r - 0.82 - 0.05 * sin(uTime * 4.0)));
    float inner = smoothstep(0.9, 0.0, r) * 0.25;
    float a = (ring + inner) * uColor.a;
    outColor = vec4(uColor.rgb * a, a);
  }
}
`;var u$={"1":0,"2":1,"3":2,claw:3,energy:4,heart:5},P$=(()=>{let $=[-0.45,0.55,-0.7],J=Math.hypot(...$);return[$[0]/J,$[1]/J,$[2]/J]})(),m$=[0,0.35,0],e=[0,0.75,-15.5],S$=10,l=-11.5,$$=900;class J${canvas;gl;progs;meshes;buildingMesh;particleVao;particleBuf;particleData=new Float32Array($$*8);emptyVao;monsters=new Map;dice=[];buildings=[];particles=[];seatCount=0;viewerSeat=0;bayOpen=!1;cityGlow=[1,1,1];bayGlow=[1,1,1];diceActive=!0;yaw=0;pitch=0.62;dist=27;camShake=0;camPos=[0,0,0];view=T.create();proj=T.create();viewProj=T.create();invViewProj=T.create();diceViewProj=T.create();diceInv=T.create();diceCam=[0,0,0];width=1;height=1;dpr=1;diceRect={x:0,y:0,w:1,h:1};hoverDie=-1;time=0;last=0;raf=0;tmp=T.create();tmp2=T.create();onLabels=null;constructor($){this.canvas=$;let J=$.getContext("webgl2",{antialias:!0,alpha:!1,powerPreference:"high-performance"});if(!J)throw Error("WebGL2 недоступен");this.gl=J,this.progs={obj:new u(J,F$,N$),bld:new u(J,D$,L$),dice:new u(J,U$,O$),sky:new u(J,B$,M$),part:new u(J,C$,E$),decal:new u(J,A$,T$)};let G=this.progs.obj;this.meshes={sphere:new z(J,G,K$(14,20)),box:new z(J,G,o()),cyl:new z(J,G,i(0.5,0.5,18)),cone:new z(J,G,i(0.5,0,18)),ground:new z(J,G,g(140,1)),water:new z(J,G,g(1,60)),plaza:new z(J,G,i(1,1,40)),dice:new z(J,this.progs.dice,V$(0.22,7)),quad:new z(J,this.progs.decal,g(1,1))},this.buildingMesh=new z(J,this.progs.bld,o(!0),[{name:"iOffset",size:4},{name:"iScale",size:4},{name:"iColor",size:4}]),this.emptyVao=J.createVertexArray(),this.particleVao=J.createVertexArray(),this.particleBuf=J.createBuffer(),J.bindVertexArray(this.particleVao),J.bindBuffer(J.ARRAY_BUFFER,this.particleBuf),J.bufferData(J.ARRAY_BUFFER,this.particleData.byteLength,J.DYNAMIC_DRAW);let Q=this.progs.part.attribs;J.enableVertexAttribArray(Q.aPos),J.vertexAttribPointer(Q.aPos,3,J.FLOAT,!1,32,0),J.enableVertexAttribArray(Q.aColor),J.vertexAttribPointer(Q.aColor,4,J.FLOAT,!1,32,12),J.enableVertexAttribArray(Q.aSize),J.vertexAttribPointer(Q.aSize,1,J.FLOAT,!1,32,28),J.bindVertexArray(null),this.start()}sync($,J,G){let Q=$.players.length,X=Math.max(0,$.players.findIndex((F)=>F.id===J));if(Q!==this.seatCount||X!==this.viewerSeat)this.seatCount=Q,this.viewerSeat=X,this.buildCity();this.bayOpen=$.bayOpen,this.diceActive=G;let V=$.players[$.current];$.players.forEach((F,U)=>{let D=this.monsters.get(F.id),N=this.seatPos(U),M=$.tokyo.city===F.id?"city":$.tokyo.bay===F.id?"bay":null,L=M==="city"?[...m$]:M==="bay"?[...e]:N;if(!D){let A=I$[F.monster];D={id:F.id,monster:F.monster,parts:Y$[F.monster],main:p(A.color),accent:p(A.accent),pos:[...L],from:[...L],to:[...L],moveT0:-10,moveDur:1,yaw:0,yawTarget:0,alive:F.alive,deathT:F.alive?-10:-100,flashT:-10,lungeT:-10,lungeDir:[0,0,1],current:!1,seed:U*1.37+0.3,inTokyo:!!M,landed:!0},this.monsters.set(F.id,D)}if(D.to[0]!==L[0]||D.to[1]!==L[1]||D.to[2]!==L[2])D.from=[...D.pos],D.to=L,D.moveT0=this.time,D.moveDur=1,D.landed=!1;if(D.inTokyo=!!M,D.alive&&!F.alive)D.deathT=this.time;D.alive=F.alive,D.current=F.id===V.id&&$.phase!=="gameOver",D.yawTarget=M?this.yawToward(L,this.cameraGround()):this.yawToward(L,[0,0,0])});let K=$.tokyo.city?this.monsters.get($.tokyo.city):null;this.cityGlow=K?K.main:[0.9,0.9,1];let Z=$.tokyo.bay?this.monsters.get($.tokyo.bay):null;this.bayGlow=Z?Z.main:[0.5,0.8,1];let H=$.phase==="roll"&&!$.flags.rolled;while(this.dice.length<$.dice.length)this.dice.push({face:"1",kept:!1,green:!1,blank:!0,q:C.identity(),pos:[0,0,0],target:[0,0,0],rollT0:-10,spinAxis:[1,0,0],spinTurns:0,yawJitter:0});this.dice.length=$.dice.length;let W=$.dice.length,Y=1.3;$.dice.forEach((F,U)=>{let D=this.dice[U];if(D.face=F.face,D.kept=F.kept&&$.phase==="roll",D.green=F.green,D.blank&&!H)D.yawJitter=(c(U+$.turn)-0.5)*0.5;if(D.blank=H,D.target=[(U-(W-1)/2)*Y,0,D.kept?-1:0.35],this.dice.length&&D.pos[0]===0&&D.pos[2]===0)D.pos=[...D.target]})}cameraGround(){return[Math.sin(this.yaw)*30,0,Math.cos(this.yaw)*30]}yawToward($,J){return Math.atan2(J[0]-$[0],J[2]-$[2])}seatPos($){let J=Math.max(1,this.seatCount),G=Math.PI/2+($-this.viewerSeat)/J*Math.PI*2,Q=Math.cos(G)*S$,X=Math.sin(G)*S$;if(X<l+2)X=l+2;return[Q,0,X]}buildCity(){let $=Array.from({length:this.seatCount},(Q,X)=>this.seatPos(X)),J=[],G=0;for(let Q=-10;Q<10;Q++)for(let X=-4;X<11;X++){let V=Q*3+1.5,K=X*3+1.5,Z=Math.hypot(V,K);if(Z<4.6||Z>30)continue;if(K<l+1)continue;if($.some((Y)=>Math.hypot(Y[0]-V,Y[2]-K)<3.4))continue;let W=c(Q*31+X*17+5)>0.55?2:1;for(let Y=0;Y<W;Y++){let F=c(G*7.3+Y),U=W===1?1.6+F*0.5:0.95,D=W===1?1.6+c(G*3.1)*0.5:1.8,N=W===1?0:(Y-0.5)*1.05,M=c(G*5.7+Y),L=Z<14?0.8+M*1.4:Z<18?1.5+M*2.5:2.5+M*M*7+2*c(G*9.1),A=c(G*2.3+Y),P=A<0.33?[0.28,0.24,0.42]:A<0.66?[0.36,0.3,0.38]:[0.22,0.28,0.4];J.push({x:V+N,z:K,w:U,d:D,h0:L,h:L,yaw:0,color:P,seed:c(G*13.7+Y),crumbleT:-100,regrowAt:0,shakeT:-10})}G++}J.push({x:6.5,z:-8.2,w:0.8,d:0.8,h0:10,h:10,yaw:0.785,color:[0.9,0.3,0.25],seed:0.99,crumbleT:-100,regrowAt:0,shakeT:-10}),this.buildings=J}event($){let J=this.time;switch($.type){case"roll":for(let G of $.indices){let Q=this.dice[G];if(!Q)continue;Q.rollT0=J+Math.random()*0.08;let X=[Math.random()-0.5,Math.random()-0.5,Math.random()-0.5];Q.spinAxis=X,Q.spinTurns=2+Math.random()*2,Q.yawJitter=(Math.random()-0.5)*0.5}break;case"attack":{let G=this.monsters.get($.playerId);if(!G)break;let Q=$.targets.map((H)=>this.monsters.get(H)).filter(Boolean);if(!Q.length)break;let X=Q.reduce((H,W)=>[H[0]+W.pos[0]/Q.length,0,H[2]+W.pos[2]/Q.length],[0,0,0]),V=X[0]-G.pos[0],K=X[2]-G.pos[2],Z=Math.hypot(V,K)||1;G.lungeDir=[V/Z,0,K/Z],G.lungeT=J;break}case"damage":{let G=this.monsters.get($.playerId);if(!G)break;G.flashT=J+0.15,this.camShake=Math.min(0.6,this.camShake+0.15+$.amount*0.05),this.burst([G.pos[0],G.pos[1]+1.4,G.pos[2]],14+$.amount*8,[1,0.35,0.2],5,0.9,0.5,-6),this.burst([G.pos[0],G.pos[1]+1.4,G.pos[2]],8,[1,0.9,0.5],3,0.6,0.35,-4),this.shakeNear(G.pos,5);break}case"heal":{let G=this.monsters.get($.playerId);if(G)this.burst([G.pos[0],G.pos[1]+0.5,G.pos[2]],10+$.amount*5,[0.3,1,0.5],1.2,1.4,0.45,2.2);break}case"energy":{let G=this.monsters.get($.playerId);if(G)this.burst([G.pos[0],G.pos[1]+2.2,G.pos[2]],6+$.amount*3,[1,0.85,0.2],2.2,1,0.35,1);break}case"vp":{let G=this.monsters.get($.playerId);if(!G||$.amount<=0)break;this.burst([G.pos[0],G.pos[1]+2.6,G.pos[2]],6+$.amount*4,[1,0.8,0.3],2.5,1.2,0.5,0.5);for(let Q=0;Q<Math.min(3,$.amount);Q++)this.crumbleNear(G.pos,Q*0.25);break}case"enter":case"leave":break;case"die":{let G=this.monsters.get($.playerId);if(G)G.deathT=J,this.burst([G.pos[0],1,G.pos[2]],60,[0.5,0.45,0.55],4,2,0.8,1),this.camShake=0.8;break}case"buy":{let G=this.monsters.get($.playerId);if(G)this.burst([G.pos[0],G.pos[1]+3,G.pos[2]],16,[0.5,0.8,1],2.5,1,0.3,-1);break}case"win":for(let G of $.playerIds){let Q=this.monsters.get(G);if(!Q)continue;for(let X=0;X<6;X++)setTimeout(()=>{let V=p(["#ff3d7f","#ffd23f","#2ee59d","#74f0ff","#a855f7","#ff8a3d"][X]);this.burst([Q.pos[0]+(Math.random()-0.5)*6,6+Math.random()*3,Q.pos[2]+(Math.random()-0.5)*6],70,V,7,1.6,0.6,-3)},X*300)}break;case"turn":break}}burst($,J,G,Q,X,V,K){for(let Z=0;Z<J;Z++){if(this.particles.length>=$$)this.particles.shift();let H=Math.random()*Math.PI*2,W=Math.acos(Math.random()*2-1),Y=Q*(0.4+Math.random()*0.6);this.particles.push({p:[$[0],$[1],$[2]],v:[Math.sin(W)*Math.cos(H)*Y,Math.abs(Math.cos(W))*Y*0.8+(K>0?Y*0.3:0),Math.sin(W)*Math.sin(H)*Y],c:[G[0]*(0.8+Math.random()*0.2),G[1]*(0.8+Math.random()*0.2),G[2]*(0.8+Math.random()*0.2)],life:X*(0.6+Math.random()*0.4),max:X,size:V*(0.6+Math.random()*0.8),grav:K})}}shakeNear($,J){for(let G of this.buildings)if(Math.hypot(G.x-$[0],G.z-$[2])<J)G.shakeT=this.time}crumbleNear($,J){let Q=this.buildings.filter((X)=>X.h>X.h0*0.5&&X.h0<8).map((X)=>({b:X,d:Math.hypot(X.x-$[0],X.z-$[2])+Math.random()*4})).sort((X,V)=>X.d-V.d)[0]?.b;if(!Q)return;Q.crumbleT=this.time+J,Q.regrowAt=this.time+30+Math.random()*30,setTimeout(()=>{this.burst([Q.x,Q.h0*0.5,Q.z],30,[0.55,0.5,0.6],2.5,1.5,0.9,-3),this.burst([Q.x,Q.h0*0.8,Q.z],12,[1,0.5,0.2],3,0.8,0.5,-5)},J*1000)}resize($,J,G){this.width=$,this.height=J,this.dpr=G,this.canvas.width=Math.max(1,Math.floor($*G)),this.canvas.height=Math.max(1,Math.floor(J*G))}orbit($,J){this.yaw-=$*0.008,this.pitch=f(this.pitch+J*0.006,0.18,1.35)}zoom($){this.dist=f(this.dist*$,12,48)}pickDie($,J){let G=this.diceRect;if($<G.x||$>G.x+G.w||J<G.y||J>G.y+G.h)return-1;let Q=($-G.x)/G.w*2-1,X=1-(J-G.y)/G.h*2,V=this.ray(this.diceInv,Q,X),K=-1,Z=1/0;return this.dice.forEach((H,W)=>{let Y=_$(V.o,V.d,H.pos,0.72);if(Y!==null&&Y<Z)Z=Y,K=W}),K}pickMonster($,J){let G=$/this.width*2-1,Q=1-J/this.height*2,X=this.ray(this.invViewProj,G,Q),V=null,K=1/0;for(let Z of this.monsters.values()){let H=_$(X.o,X.d,[Z.pos[0],Z.pos[1]+2,Z.pos[2]],2.2);if(H!==null&&H<K)K=H,V=Z.id}return V}ray($,J,G){let Q=T.transformPoint($,[J,G,-1]),X=T.transformPoint($,[J,G,1]),V=[Q[0]/Q[3],Q[1]/Q[3],Q[2]/Q[3]],K=[X[0]/X[3],X[1]/X[3],X[2]/X[3]],Z=[K[0]-V[0],K[1]-V[1],K[2]-V[2]],H=Math.hypot(...Z);return{o:V,d:[Z[0]/H,Z[1]/H,Z[2]/H]}}start(){let $=(J)=>{this.raf=requestAnimationFrame($);let G=J/1000,Q=this.last?Math.min(0.05,G-this.last):0.016;this.last=G,this.time+=Q,this.update(Q),this.render()};this.raf=requestAnimationFrame($)}update($){let J=this.time;for(let G of this.monsters.values()){let Q=f((J-G.moveT0)/G.moveDur,0,1),X=W$(Q),V=Math.sin(Q*Math.PI)*Math.min(5,1.5+Math.hypot(G.to[0]-G.from[0],G.to[2]-G.from[2])*0.3);if(G.pos=[b(G.from[0],G.to[0],X),b(G.from[1],G.to[1],X)+(Q<1?V:0),b(G.from[2],G.to[2],X)],Q>=1&&!G.landed)G.landed=!0,this.burst([G.to[0],G.to[1]+0.1,G.to[2]],30,[0.6,0.55,0.7],3.5,0.9,0.7,-2),this.camShake=Math.min(0.7,this.camShake+0.25),this.shakeNear(G.to,6);let H=(Q<1?this.yawToward(G.from,G.to):G.yawTarget)-G.yaw;while(H>Math.PI)H-=Math.PI*2;while(H<-Math.PI)H+=Math.PI*2;G.yaw+=H*Math.min(1,$*6)}for(let G of this.dice)G.pos[0]=b(G.pos[0],G.target[0],Math.min(1,$*10)),G.pos[2]=b(G.pos[2],G.target[2],Math.min(1,$*10));for(let G of this.buildings)if(G.crumbleT>0&&J>=G.crumbleT){let Q=f((J-G.crumbleT)/0.7,0,1);if(G.h=b(G.h0,G.h0*0.18,s(Q)),J>G.regrowAt)G.crumbleT=-100}else if(G.h<G.h0)G.h=Math.min(G.h0,G.h+$*1.2);for(let G=this.particles.length-1;G>=0;G--){let Q=this.particles[G];if(Q.life-=$,Q.life<=0){this.particles.splice(G,1);continue}Q.v[1]+=Q.grav*$,Q.v[0]*=1-$*1.5,Q.v[2]*=1-$*1.5,Q.p[0]+=Q.v[0]*$,Q.p[1]=Math.max(0.05,Q.p[1]+Q.v[1]*$),Q.p[2]+=Q.v[2]*$}this.camShake=Math.max(0,this.camShake-$*1.8)}setCommon($){$.vec3("uSunDir",P$),$.vec3("uSunColor",[1.15,0.82,0.7]),$.vec3("uSkyColor",[0.42,0.32,0.62]),$.vec3("uGroundColor",[0.16,0.1,0.2]),$.vec3("uFogColor",[0.62,0.3,0.45]),$.float("uFogDensity",0.018),$.float("uTime",this.time)}render(){let $=this.gl,J=this.canvas.width,G=this.canvas.height;$.viewport(0,0,J,G),$.disable($.SCISSOR_TEST),$.clearColor(0.07,0.05,0.14,1),$.clear($.COLOR_BUFFER_BIT|$.DEPTH_BUFFER_BIT);let Q=this.width/Math.max(1,this.height),X=this.dist*Math.max(1,0.95/Q)**0.8,V=this.camShake*this.camShake,K=[Math.sin(this.time*47)*V*0.3,1.2+Math.sin(this.time*53)*V*0.3,-1.5];this.camPos=[K[0]+Math.sin(this.yaw)*Math.cos(this.pitch)*X,K[1]+Math.sin(this.pitch)*X,K[2]+Math.cos(this.yaw)*Math.cos(this.pitch)*X],T.perspective(this.proj,46*Math.PI/180,Q,0.5,220),T.lookAt(this.view,this.camPos,K),T.multiply(this.viewProj,this.proj,this.view),T.invert(this.invViewProj,this.viewProj),$.enable($.DEPTH_TEST),$.enable($.CULL_FACE),$.disable($.BLEND),$.depthMask(!1);let Z=this.progs.sky.use();Z.mat4("uInvViewProj",this.invViewProj),Z.vec3("uSunDir",P$),Z.float("uTime",this.time),$.bindVertexArray(this.emptyVao),$.drawArrays($.TRIANGLES,0,3),$.depthMask(!0);let H=this.progs.obj.use();if(this.setCommon(H),H.mat4("uViewProj",this.viewProj),H.vec3("uCamPos",this.camPos),H.float("uAlpha",1),H.float("uFlash",0),H.float("uRim",0),H.vec3("uEmissive",[0,0,0]),H.int("uMode",1),H.vec3("uColor",[0.2,0.2,0.3]),H.mat4("uModel",T.fromTRS(this.tmp,[0,0,0],C.identity(),[1,1,1])),this.meshes.ground.draw(),H.int("uMode",2),H.mat4("uModel",T.fromTRS(this.tmp,[0,0.3,l-35],C.identity(),[140,1,70])),this.meshes.water.draw(),H.int("uMode",3),H.vec3("uGlow",this.cityGlow),H.vec3("uColor",[0.3,0.26,0.42]),H.mat4("uModel",T.fromTRS(this.tmp,[0,0,0],C.identity(),[3.2,0.35,3.2])),this.meshes.plaza.draw(),this.bayOpen)H.vec3("uGlow",this.bayGlow),H.vec3("uColor",[0.25,0.3,0.45]),H.mat4("uModel",T.fromTRS(this.tmp,[e[0],0,e[2]],C.identity(),[2.6,0.75,2.6])),this.meshes.plaza.draw();this.drawBuildings(),H.use(),H.int("uMode",0);for(let Y of this.monsters.values())this.drawMonster(H,Y);$.enable($.BLEND),$.blendFunc($.ONE,$.ONE_MINUS_SRC_ALPHA),$.depthMask(!1);let W=this.progs.decal.use();W.mat4("uViewProj",this.viewProj),W.float("uTime",this.time);for(let Y of this.monsters.values()){let F=Y.inTokyo?Y.to[1]+0.01:0.02,U=Math.max(0,Y.pos[1]-F);W.int("uMode",0),W.vec4("uColor",[0,0,0,f(0.55-U*0.08,0.1,0.55)]);let D=(Y.inTokyo?4.2:3.6)-Math.min(1.5,U*0.25);if(W.mat4("uModel",T.fromTRS(this.tmp,[Y.pos[0],F+0.01,Y.pos[2]],C.identity(),[D,1,D])),this.meshes.quad.draw(),Y.current)W.int("uMode",1),W.vec4("uColor",[Y.main[0]*1.4,Y.main[1]*1.4,Y.main[2]*1.4,1]),W.mat4("uModel",T.fromTRS(this.tmp,[Y.pos[0],F+0.03,Y.pos[2]],C.identity(),[Y.inTokyo?5.4:4.6,1,Y.inTokyo?5.4:4.6])),this.meshes.quad.draw()}this.drawParticles(this.viewProj,G),$.depthMask(!0),$.disable($.BLEND),this.emitLabels(),this.drawDice()}drawBuildings(){let $=this.gl,J=new Float32Array(this.buildings.length*12),G=this.time;this.buildings.forEach((X,V)=>{let K=f(1-(G-X.shakeT)/0.5,0,1)+(X.crumbleT>0&&G>=X.crumbleT&&G-X.crumbleT<0.7?1:0),Z=V*12;J[Z]=X.x,J[Z+1]=0,J[Z+2]=X.z,J[Z+3]=X.yaw,J[Z+4]=X.w,J[Z+5]=X.h,J[Z+6]=X.d,J[Z+7]=X.seed;let H=X.h<X.h0*0.9?0.55:1;J[Z+8]=X.color[0]*H,J[Z+9]=X.color[1]*H,J[Z+10]=X.color[2]*H,J[Z+11]=K}),this.buildingMesh.setInstances(J);let Q=this.progs.bld.use();this.setCommon(Q),Q.mat4("uViewProj",this.viewProj),Q.vec3("uCamPos",this.camPos),this.buildingMesh.draw()}drawMonster($,J){let G=this.time,Q=J.alive,X=Q?0:f((G-J.deathT)/0.9,0,1),V=Q?Math.sin(G*2.4+J.seed)*0.03:0,K=Q&&J.current?Math.abs(Math.sin(G*5+J.seed))*0.12:0,Z=f((G-J.lungeT)/0.6,0,1),H=Z<1?Math.sin(Z*Math.PI)*1.4:0,W=f(1-(G-J.flashT)/0.45,0,1)*(G>=J.flashT?1:0),Y=W*Math.sin(G*70)*0.12,F=J.inTokyo?2:1.6,U=[J.pos[0]+J.lungeDir[0]*H+Y,J.pos[1]+K,J.pos[2]+J.lungeDir[2]*H],D=C.axisAngle([0,1,0],J.yaw);if(X>0)D=C.multiply(D,C.axisAngle([1,0,0],-X*1.45));let N=1+V,M=T.fromTRS(this.tmp2,U,D,[F/Math.sqrt(N),F*N,F/Math.sqrt(N)]),L=Q?0:0.75;$.float("uRim",Q?0.55:0.1),$.float("uFlash",W*0.7);for(let A of J.parts){let P=A.color==="main"?J.main:A.color==="accent"?J.accent:p(A.color);if(L){let q=(P[0]+P[1]+P[2])/3;P=[b(P[0],q*0.6,L),b(P[1],q*0.6,L),b(P[2],q*0.6,L)]}let I=A.rot??[0,0,0],S=C.euler(I[0],I[1],I[2]),O=A.pos,R=Q?A.anim:void 0,w=Math.sin(G*3+J.seed)*0.25+(Z<1?Math.sin(Z*Math.PI)*1.2:0);if(R==="armL")S=C.multiply(C.axisAngle([1,0,0],-w),S);else if(R==="armR")S=C.multiply(C.axisAngle([1,0,0],w),S);else if(R==="tail")S=C.multiply(C.axisAngle([0,1,0],Math.sin(G*2.2+J.seed)*0.35),S);else if(R==="wingL")S=C.multiply(C.axisAngle([0,1,0],Math.sin(G*4+J.seed)*0.25),S);else if(R==="wingR")S=C.multiply(C.axisAngle([0,1,0],-Math.sin(G*4+J.seed)*0.25),S);else if(R==="head"){let q=Math.sin(G*1.7+J.seed)*0.04;O=[O[0],O[1]+q,O[2]]}let k=T.fromTRS(this.tmp,O,S,A.scale),v=T.multiply(this.tmp,M,k);$.mat4("uModel",v),$.vec3("uColor",P),$.vec3("uEmissive",A.glow&&Q?[P[0]*0.9,P[1]*0.9,P[2]*0.9]:[0,0,0]),this.meshes[A.mesh==="sphere"?"sphere":A.mesh==="box"?"box":A.mesh==="cone"?"cone":"cyl"].draw()}$.float("uFlash",0),$.vec3("uEmissive",[0,0,0])}drawParticles($,J){let G=this.gl,Q=Math.min(this.particles.length,$$);if(!Q)return;let X=this.particleData;for(let K=0;K<Q;K++){let Z=this.particles[K],H=Z.life/Z.max,W=K*8;X[W]=Z.p[0],X[W+1]=Z.p[1],X[W+2]=Z.p[2],X[W+3]=Z.c[0],X[W+4]=Z.c[1],X[W+5]=Z.c[2],X[W+6]=Math.min(1,H*1.6),X[W+7]=Z.size*(0.5+H*0.5)}G.blendFunc(G.ONE,G.ONE);let V=this.progs.part.use();V.mat4("uViewProj",$),V.float("uScale",J*0.9),G.bindVertexArray(this.particleVao),G.bindBuffer(G.ARRAY_BUFFER,this.particleBuf),G.bufferSubData(G.ARRAY_BUFFER,0,X,0,Q*8),G.drawArrays(G.POINTS,0,Q),G.blendFunc(G.ONE,G.ONE_MINUS_SRC_ALPHA)}emitLabels(){if(!this.onLabels)return;let $=[];for(let J of this.monsters.values()){let G=J.inTokyo?5.6:4.6,Q=T.transformPoint(this.viewProj,[J.pos[0],J.pos[1]+G,J.pos[2]]),X=Q[3]>0;$.push({id:J.id,x:(Q[0]/Q[3]*0.5+0.5)*this.width,y:(1-(Q[1]/Q[3]*0.5+0.5))*this.height,visible:X})}this.onLabels($)}drawDice(){let $=this.gl,J=this.diceRect;if(!this.dice.length||J.w<10||J.h<10)return;let G=this.dpr,Q=Math.floor(J.x*G),X=Math.floor((this.height-J.y-J.h)*G),V=Math.floor(J.w*G),K=Math.floor(J.h*G);$.viewport(Q,X,V,K),$.enable($.SCISSOR_TEST),$.scissor(Q,X,V,K),$.clear($.DEPTH_BUFFER_BIT);let Z=J.w/J.h,H=30*Math.PI/180,Y=this.dice.length*1.3/2+0.3,F=1.35,U=Math.tan(H/2),D=Math.max(Y/(U*Z),F/U)+1.2,N=[0,0.96,0.28],M=Math.hypot(...N),L=[0,0,-0.3];this.diceCam=[L[0]+N[0]/M*D,L[1]+N[1]/M*D,L[2]+N[2]/M*D];let A=T.lookAt(T.create(),this.diceCam,L),P=T.perspective(T.create(),H,Z,0.5,60);T.multiply(this.diceViewProj,P,A),T.invert(this.diceInv,this.diceViewProj),$.enable($.BLEND),$.blendFunc($.ONE,$.ONE_MINUS_SRC_ALPHA),$.depthMask(!1);let I=this.progs.decal.use();I.mat4("uViewProj",this.diceViewProj),I.int("uMode",0),I.vec4("uColor",[0,0,0,0.75]),I.mat4("uModel",T.fromTRS(this.tmp,[0,-0.5,-0.3],C.identity(),[Y*2.4+1.5,1,5.2])),this.meshes.quad.draw();for(let O of this.dice){let R=this.dieLift(O);if(I.vec4("uColor",[0,0,0,f(0.6-R*0.2,0.15,0.6)]),I.mat4("uModel",T.fromTRS(this.tmp,[O.pos[0],-0.49,O.pos[2]+0.1],C.identity(),[1.5,1,1.5])),this.meshes.quad.draw(),O.kept)I.int("uMode",1),I.vec4("uColor",[1,0.8,0.25,0.9]),I.float("uTime",this.time),I.mat4("uModel",T.fromTRS(this.tmp,[O.pos[0],-0.48,O.pos[2]],C.identity(),[1.7,1,1.7])),this.meshes.quad.draw(),I.int("uMode",0)}$.depthMask(!0),$.disable($.BLEND);let S=this.progs.dice.use();this.setCommon(S),S.float("uFogDensity",0),S.mat4("uViewProj",this.diceViewProj),S.vec3("uCamPos",this.diceCam),this.dice.forEach((O,R)=>{let w=this.time,k=f((w-O.rollT0)/0.85,0,1),v=p$[u$[O.face]],q=C.multiply(C.axisAngle([0,1,0],O.yawJitter),v);if(O.blank)q=C.multiply(C.axisAngle([0,1,0],Math.sin(w*0.8+R)*0.3),C.euler(0.5+R*0.3,R,0.3));if(k<1){let E=(1-s(k))*O.spinTurns*Math.PI*2;q=C.multiply(C.axisAngle(O.spinAxis,E),q)}let x=this.dieLift(O),B=[O.pos[0],x,O.pos[2]],_=0.5*(O.kept?0.95:1)*(this.hoverDie===R?1.06:1);S.mat4("uModel",T.fromTRS(this.tmp,B,q,[_,_,_])),S.vec3("uBody",O.green?[0.05,0.42,0.22]:[0.1,0.1,0.13]),S.float("uKept",O.kept?1:0),S.float("uHover",this.hoverDie===R&&this.diceActive?1:0),S.float("uBlank",O.blank?1:0),this.meshes.dice.draw()}),$.disable($.SCISSOR_TEST)}dieLift($){let J=f((this.time-$.rollT0)/0.85,0,1);return(J<1?Math.abs(Math.sin(J*Math.PI*2.5))*(1-J)*2.2:0)+($.kept?0.12:0)}dispose(){cancelAnimationFrame(this.raf),this.gl.getExtension("WEBGL_lose_context")?.loseContext()}}var p$=n.map(($)=>{let J,G=$[1];if(G>0.99)J=C.identity();else if(G<-0.99)J=C.axisAngle([1,0,0],Math.PI);else{let V=[$[1]*0-$[2]*1,$[2]*0-$[0]*0,$[0]*1-$[1]*0],K=1+G,Z=Math.hypot(V[0],V[1],V[2],K);J=[V[0]/Z,V[1]/Z,V[2]/Z,K/Z]}let Q=C.rotate(J,r($)),X=Math.PI-Math.atan2(Q[0],Q[2]);return C.multiply(C.axisAngle([0,1,0],X),J)});function _$($,J,G,Q){let X=[$[0]-G[0],$[1]-G[1],$[2]-G[2]],V=X[0]*J[0]+X[1]*J[1]+X[2]*J[2],K=X[0]*X[0]+X[1]*X[1]+X[2]*X[2]-Q*Q,Z=V*V-K;if(Z<0)return null;let H=-V-Math.sqrt(Z);return H>0?H:null}var FJ=j$(function({ui:J}){let G=d.useRef(null),Q=d.useRef(null),X=d.useRef(null),V=d.useRef(new Map),K=d.useRef(null),[Z,H]=d.useState(null);d.useEffect(()=>{let N=Q.current,M=G.current,L;try{L=new J$(N)}catch(B){console.error(B),H(B instanceof Error?B.message:String(B));return}K.current=L;let A=()=>{let B=M.getBoundingClientRect(),_=Math.min(window.devicePixelRatio||1,B.width<700?1.75:2);L.resize(B.width,B.height,_);let E=X.current?.getBoundingClientRect();if(E)L.diceRect={x:E.left-B.left,y:E.top-B.top,w:E.width,h:E.height}};A();let P=new ResizeObserver(A);if(P.observe(M),X.current)P.observe(X.current);L.onLabels=(B)=>{for(let _ of B){let E=V.current.get(_.id);if(!E)continue;E.style.transform=`translate(-50%, -100%) translate(${_.x.toFixed(1)}px, ${_.y.toFixed(1)}px)`,E.style.opacity=_.visible?"1":"0"}};let I=R$(()=>{let B=J.state;if(B)L.sync(B,J.viewId,J.myTurn);requestAnimationFrame(A)}),S=J.onEvent((B)=>L.event(B)),O=new Map,R=0,w=0,k=(B)=>{if(N.setPointerCapture(B.pointerId),O.set(B.pointerId,{x:B.clientX,y:B.clientY}),R=0,O.size===2){let[_,E]=[...O.values()];w=Math.hypot(_.x-E.x,_.y-E.y)}},v=(B)=>{let _=O.get(B.pointerId);if(!_)return;let E=B.clientX-_.x,m=B.clientY-_.y;if(_.x=B.clientX,_.y=B.clientY,R+=Math.abs(E)+Math.abs(m),O.size===1)L.orbit(E,m);else if(O.size===2){let[G$,Q$]=[...O.values()],X$=Math.hypot(G$.x-Q$.x,G$.y-Q$.y);if(w>0)L.zoom(w/X$);w=X$}},q=(B)=>{let _=O.size===1&&R<8;if(O.delete(B.pointerId),O.size<2)w=0;if(_){let E=N.getBoundingClientRect(),m=L.pickMonster(B.clientX-E.left,B.clientY-E.top);if(m)J.open({kind:"player",playerId:m})}},x=(B)=>{B.preventDefault(),L.zoom(Math.exp(B.deltaY*0.001))};return N.addEventListener("pointerdown",k),N.addEventListener("pointermove",v),N.addEventListener("pointerup",q),N.addEventListener("pointercancel",q),N.addEventListener("wheel",x,{passive:!1}),()=>{P.disconnect(),I(),S(),N.removeEventListener("pointerdown",k),N.removeEventListener("pointermove",v),N.removeEventListener("pointerup",q),N.removeEventListener("pointercancel",q),N.removeEventListener("wheel",x),L.dispose(),K.current=null}},[J]);let W=J.state,Y=q$(W),F=J.viewer,U=F?W.market.filter((N)=>N&&k$(F,N.id)<=F.energy).length:0,D={onPointerDown:(N)=>{let M=K.current,L=G.current;if(!M||!L)return;let A=L.getBoundingClientRect(),P=M.pickDie(N.clientX-A.left,N.clientY-A.top);if(P>=0)J.clickDie(P)},onPointerMove:(N)=>{let M=K.current,L=G.current;if(!M||!L||N.pointerType!=="mouse")return;let A=L.getBoundingClientRect();M.hoverDie=J.myTurn?M.pickDie(N.clientX-A.left,N.clientY-A.top):-1},onPointerLeave:()=>{if(K.current)K.current.hoverDie=-1}};if(Z)return j("div",{className:"stage3d error3d",children:y("div",{className:"panel",children:[j("h3",{children:"3D-режим недоступен"}),y("p",{className:"muted",children:["Ваш браузер не поддерживает WebGL2 (",Z,")."]}),j("button",{className:"btn go",onClick:()=>f$.settings.set("mode","cards"),children:"Перейти в карточный режим"})]})});return y("div",{className:"stage3d",ref:G,children:[j("canvas",{ref:Q,className:"gl-canvas"}),j("div",{className:"labels","aria-hidden":!0,children:W.players.map((N)=>y("div",{className:`label3d${N.alive?"":" out"}${N.id===Y.id?" current":""}`,style:v$(N.monster),ref:(M)=>{if(M)V.current.set(N.id,M);else V.current.delete(N.id)},children:[j("b",{children:N.name}),j("span",{children:N.alive?y(h$,{children:["❤",N.hp,y("small",{children:["/",w$(N)]})," ★",N.vp," ⚡",N.energy]}):"\uD83D\uDC80"}),j(y$,{ui:J,playerId:N.id})]},N.id))}),j("div",{className:"hud-top",children:j("div",{className:"players-strip",children:W.players.map((N)=>j(z$,{ui:J,player:N,compact:!0},N.id))})}),y("div",{className:"hud-bottom",children:[j("div",{className:`dice-zone${J.myTurn&&W.phase==="roll"&&W.flags.rolled?" active":""}`,ref:X,...D,children:j("span",{className:"dice-zone-hint",children:J.dieTool?"Выберите кубик":W.phase==="roll"?J.myTurn?W.flags.rolled?`Нажмите на кубики, чтобы отложить · бросков: ${W.rollsLeft}`:"Ваш ход — бросайте!":`${Y.name} бросает… (${W.rollsLeft})`:W.phase==="buy"?J.myTurn?"Покупка карт":`${Y.name} выбирает карты`:""})}),j(b$,{ui:J}),y("div",{className:"hud-actions",children:[y("button",{className:"btn cards-btn",onClick:()=>J.open({kind:"market"}),children:["\uD83C\uDCCF ",j("span",{className:"cards-btn-label",children:"Карты"}),J.myTurn&&W.phase==="buy"&&U>0&&j("span",{className:"badge",children:U})]}),j("div",{className:"grow",children:j(x$,{ui:J})})]})]}),y("aside",{className:"hud-side",children:[j(d$,{ui:J}),j("section",{className:"log-box",children:j(c$,{ui:J,limit:30})})]})]})});export{FJ as default};
