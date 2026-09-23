import{A as X$,D as g,F as w,G as b,H as Q$,L as G$,M as Y$,N as Z$,U as K$,W as W$,a as N$,aa as V$,ca as H$,f as C$,h as H0,j as l0,l as a0,w as $$,x as J$,y as e0,z as g0}from"./index-pnj6xxp0.js";var n=N$(C$(),1);var B0=($,X)=>[$[1]*X[2]-$[2]*X[1],$[2]*X[0]-$[0]*X[2],$[0]*X[1]-$[1]*X[0]],L0=($)=>{let X=Math.hypot(...$)||1;return[$[0]/X,$[1]/X,$[2]/X]},l=[[1,0,0],[-1,0,0],[0,1,0],[0,-1,0],[0,0,1],[0,0,-1]];function $0($){if(Math.abs($[1])<0.5)return[0,1,0];return $[1]>0?[0,0,-1]:[0,0,1]}function N0($=0.18,X=8){let J={positions:[],normals:[],uvs:[],faces:[],indices:[]},Q=1-$;return l.forEach((G,Y)=>{let Z=$0(G),K=B0(Z,G),H=J.positions.length/3;for(let V=0;V<=X;V++)for(let W=0;W<=X;W++){let D=W/X,U=V/X,C=[G[0]+K[0]*(2*D-1)+Z[0]*(2*U-1),G[1]+K[1]*(2*D-1)+Z[1]*(2*U-1),G[2]+K[2]*(2*D-1)+Z[2]*(2*U-1)],F=[Math.max(-Q,Math.min(Q,C[0])),Math.max(-Q,Math.min(Q,C[1])),Math.max(-Q,Math.min(Q,C[2]))],L=[C[0]-F[0],C[1]-F[1],C[2]-F[2]],B=Math.hypot(...L)>0.000001?L0(L):G;J.positions.push(F[0]+B[0]*$,F[1]+B[1]*$,F[2]+B[2]*$),J.normals.push(...B),J.uvs.push(D,U),J.faces.push(Y)}for(let V=0;V<X;V++)for(let W=0;W<X;W++){let D=H+V*(X+1)+W;J.indices.push(D,D+1,D+X+2,D,D+X+2,D+X+1)}}),J}function J0($=!1){let X={positions:[],normals:[],uvs:[],indices:[]},J=$?0.5:0;return l.forEach((Q)=>{let G=$0(Q),Y=B0(G,Q),Z=X.positions.length/3;for(let[K,H]of[[-1,-1],[1,-1],[1,1],[-1,1]])X.positions.push((Q[0]+Y[0]*K+G[0]*H)*0.5,(Q[1]+Y[1]*K+G[1]*H)*0.5+J,(Q[2]+Y[2]*K+G[2]*H)*0.5),X.normals.push(...Q),X.uvs.push((K+1)/2,(H+1)/2);X.indices.push(Z,Z+1,Z+2,Z,Z+2,Z+3)}),X}function C0($=16,X=24){let J={positions:[],normals:[],uvs:[],indices:[]};for(let Q=0;Q<=$;Q++){let G=Q/$*Math.PI;for(let Y=0;Y<=X;Y++){let Z=Y/X*Math.PI*2,K=Math.sin(G)*Math.cos(Z),H=Math.cos(G),V=Math.sin(G)*Math.sin(Z);J.positions.push(K*0.5,H*0.5,V*0.5),J.normals.push(K,H,V),J.uvs.push(Y/X,Q/$)}}for(let Q=0;Q<$;Q++)for(let G=0;G<X;G++){let Y=Q*(X+1)+G,Z=Y+X+1;J.indices.push(Y,Y+1,Z,Z,Y+1,Z+1)}return J}function r($=0.5,X=0.5,J=20,Q=!0){let G={positions:[],normals:[],uvs:[],indices:[]},Y=($-X)/1;for(let Z=0;Z<=J;Z++){let K=Z/J*Math.PI*2,H=Math.cos(K),V=Math.sin(K),W=L0([H,Y,V]);G.positions.push(H*$,0,V*$,H*X,1,V*X),G.normals.push(...W,...W),G.uvs.push(Z/J,0,Z/J,1)}for(let Z=0;Z<J;Z++){let K=Z*2;G.indices.push(K,K+1,K+3,K,K+3,K+2)}if(Q)for(let[Z,K,H]of[[0,$,-1],[1,X,1]]){if(K<=0)continue;let V=G.positions.length/3;G.positions.push(0,Z,0),G.normals.push(0,H,0),G.uvs.push(0.5,0.5);for(let W=0;W<=J;W++){let D=W/J*Math.PI*2;G.positions.push(Math.cos(D)*K,Z,Math.sin(D)*K),G.normals.push(0,H,0),G.uvs.push(0.5+Math.cos(D)/2,0.5+Math.sin(D)/2)}for(let W=0;W<J;W++)if(H>0)G.indices.push(V,V+W+2,V+W+1);else G.indices.push(V,V+W+1,V+W+2)}return G}function X0($=1,X=1){let J={positions:[],normals:[],uvs:[],indices:[]};for(let Q=0;Q<=X;Q++)for(let G=0;G<=X;G++)J.positions.push((G/X-0.5)*$,0,(Q/X-0.5)*$),J.normals.push(0,1,0),J.uvs.push(G/X,Q/X);for(let Q=0;Q<X;Q++)for(let G=0;G<X;G++){let Y=Q*(X+1)+G;J.indices.push(Y,Y+X+1,Y+1,Y+1,Y+X+1,Y+X+2)}return J}class d{gl;program;uniforms=new Map;attribs={};constructor($,X,J){this.gl=$;let Q=(Z,K)=>{let H=$.createShader(Z);if($.shaderSource(H,K),$.compileShader(H),!$.getShaderParameter(H,$.COMPILE_STATUS)){let V=$.getShaderInfoLog(H),W=K.split(`
`).map((D,U)=>`${U+1}: ${D}`).join(`
`);throw Error(`Shader compile error: ${V}
${W}`)}return H},G=$.createProgram();if($.attachShader(G,Q($.VERTEX_SHADER,X)),$.attachShader(G,Q($.FRAGMENT_SHADER,J)),$.linkProgram(G),!$.getProgramParameter(G,$.LINK_STATUS))throw Error(`Program link error: ${$.getProgramInfoLog(G)}`);this.program=G;let Y=$.getProgramParameter(G,$.ACTIVE_ATTRIBUTES);for(let Z=0;Z<Y;Z++){let K=$.getActiveAttrib(G,Z);this.attribs[K.name]=$.getAttribLocation(G,K.name)}}use(){return this.gl.useProgram(this.program),this}loc($){if(!this.uniforms.has($))this.uniforms.set($,this.gl.getUniformLocation(this.program,$));return this.uniforms.get($)}mat4($,X){this.gl.uniformMatrix4fv(this.loc($),!1,X)}vec3($,X){this.gl.uniform3f(this.loc($),X[0],X[1],X[2])}vec4($,X){this.gl.uniform4f(this.loc($),X[0],X[1],X[2],X[3])}vec2($,X,J){this.gl.uniform2f(this.loc($),X,J)}float($,X){this.gl.uniform1f(this.loc($),X)}int($,X){this.gl.uniform1i(this.loc($),X)}}class u{gl;vao;count;instanceBuffer=null;instanceCount=0;instanceStride=0;constructor($,X,J,Q){this.gl=$;this.vao=$.createVertexArray(),$.bindVertexArray(this.vao);let G=(K,H,V)=>{let W=X.attribs[K];if(W===void 0||W<0||!H)return;let D=$.createBuffer();$.bindBuffer($.ARRAY_BUFFER,D),$.bufferData($.ARRAY_BUFFER,new Float32Array(H),$.STATIC_DRAW),$.enableVertexAttribArray(W),$.vertexAttribPointer(W,V,$.FLOAT,!1,0,0)};if(G("aPos",J.positions,3),G("aNormal",J.normals,3),G("aUv",J.uvs,2),G("aFace",J.faces,1),Q){this.instanceBuffer=$.createBuffer(),$.bindBuffer($.ARRAY_BUFFER,this.instanceBuffer),this.instanceStride=Q.reduce((H,V)=>H+V.size,0);let K=0;for(let H of Q){let V=X.attribs[H.name];if(V!==void 0&&V>=0)$.enableVertexAttribArray(V),$.vertexAttribPointer(V,H.size,$.FLOAT,!1,this.instanceStride*4,K*4),$.vertexAttribDivisor(V,1);K+=H.size}}let Y=$.createBuffer();$.bindBuffer($.ELEMENT_ARRAY_BUFFER,Y);let Z=J.positions.length/3>65535;$.bufferData($.ELEMENT_ARRAY_BUFFER,Z?new Uint32Array(J.indices):new Uint16Array(J.indices),$.STATIC_DRAW),this.indexType=Z?$.UNSIGNED_INT:$.UNSIGNED_SHORT,this.count=J.indices.length,$.bindVertexArray(null)}indexType;setInstances($){let X=this.gl;X.bindBuffer(X.ARRAY_BUFFER,this.instanceBuffer),X.bufferData(X.ARRAY_BUFFER,$,X.DYNAMIC_DRAW),this.instanceCount=$.length/this.instanceStride}draw(){let $=this.gl;if($.bindVertexArray(this.vao),this.instanceBuffer)$.drawElementsInstanced($.TRIANGLES,this.count,this.indexType,0,this.instanceCount);else $.drawElements($.TRIANGLES,this.count,this.indexType,0)}}function O0($){if($.getExtension("EXT_color_buffer_float"))return{internal:$.RGBA16F,format:$.RGBA,type:$.HALF_FLOAT,hdr:!0};return{internal:$.RGBA8,format:$.RGBA,type:$.UNSIGNED_BYTE,hdr:!1}}class p{gl;w;h;fb;tex;depth=null;ok;constructor($,X,J,Q,G){this.gl=$;this.w=X;this.h=J;if(this.tex=$.createTexture(),$.bindTexture($.TEXTURE_2D,this.tex),$.texImage2D($.TEXTURE_2D,0,Q.internal,X,J,0,Q.format,Q.type,null),$.texParameteri($.TEXTURE_2D,$.TEXTURE_MIN_FILTER,$.LINEAR),$.texParameteri($.TEXTURE_2D,$.TEXTURE_MAG_FILTER,$.LINEAR),$.texParameteri($.TEXTURE_2D,$.TEXTURE_WRAP_S,$.CLAMP_TO_EDGE),$.texParameteri($.TEXTURE_2D,$.TEXTURE_WRAP_T,$.CLAMP_TO_EDGE),this.fb=$.createFramebuffer(),$.bindFramebuffer($.FRAMEBUFFER,this.fb),$.framebufferTexture2D($.FRAMEBUFFER,$.COLOR_ATTACHMENT0,$.TEXTURE_2D,this.tex,0),G)this.depth=$.createRenderbuffer(),$.bindRenderbuffer($.RENDERBUFFER,this.depth),$.renderbufferStorage($.RENDERBUFFER,$.DEPTH_COMPONENT24,X,J),$.framebufferRenderbuffer($.FRAMEBUFFER,$.DEPTH_ATTACHMENT,$.RENDERBUFFER,this.depth);this.ok=$.checkFramebufferStatus($.FRAMEBUFFER)===$.FRAMEBUFFER_COMPLETE,$.bindFramebuffer($.FRAMEBUFFER,null),$.bindRenderbuffer($.RENDERBUFFER,null)}dispose(){let $=this.gl;if($.deleteFramebuffer(this.fb),$.deleteTexture(this.tex),this.depth)$.deleteRenderbuffer(this.depth)}}class Y0{gl;w;h;samples;fb;color;depth;ok;constructor($,X,J,Q,G){this.gl=$;this.w=X;this.h=J;this.samples=G;this.fb=$.createFramebuffer(),$.bindFramebuffer($.FRAMEBUFFER,this.fb),this.color=$.createRenderbuffer(),$.bindRenderbuffer($.RENDERBUFFER,this.color),$.renderbufferStorageMultisample($.RENDERBUFFER,G,Q.internal,X,J),$.framebufferRenderbuffer($.FRAMEBUFFER,$.COLOR_ATTACHMENT0,$.RENDERBUFFER,this.color),this.depth=$.createRenderbuffer(),$.bindRenderbuffer($.RENDERBUFFER,this.depth),$.renderbufferStorageMultisample($.RENDERBUFFER,G,$.DEPTH_COMPONENT24,X,J),$.framebufferRenderbuffer($.FRAMEBUFFER,$.DEPTH_ATTACHMENT,$.RENDERBUFFER,this.depth),this.ok=$.checkFramebufferStatus($.FRAMEBUFFER)===$.FRAMEBUFFER_COMPLETE,$.bindFramebuffer($.FRAMEBUFFER,null),$.bindRenderbuffer($.RENDERBUFFER,null)}resolveInto($){let X=this.gl;X.bindFramebuffer(X.READ_FRAMEBUFFER,this.fb),X.bindFramebuffer(X.DRAW_FRAMEBUFFER,$.fb),X.blitFramebuffer(0,0,this.w,this.h,0,0,$.w,$.h,X.COLOR_BUFFER_BIT,X.NEAREST),X.bindFramebuffer(X.READ_FRAMEBUFFER,null),X.bindFramebuffer(X.DRAW_FRAMEBUFFER,null)}dispose(){let $=this.gl;$.deleteFramebuffer(this.fb),$.deleteRenderbuffer(this.color),$.deleteRenderbuffer(this.depth)}}class Q0{gl;size;fb;tex;ok;constructor($,X){this.gl=$;this.size=X;this.tex=$.createTexture(),$.bindTexture($.TEXTURE_2D,this.tex),$.texImage2D($.TEXTURE_2D,0,$.DEPTH_COMPONENT24,X,X,0,$.DEPTH_COMPONENT,$.UNSIGNED_INT,null),$.texParameteri($.TEXTURE_2D,$.TEXTURE_MIN_FILTER,$.LINEAR),$.texParameteri($.TEXTURE_2D,$.TEXTURE_MAG_FILTER,$.LINEAR),$.texParameteri($.TEXTURE_2D,$.TEXTURE_WRAP_S,$.CLAMP_TO_EDGE),$.texParameteri($.TEXTURE_2D,$.TEXTURE_WRAP_T,$.CLAMP_TO_EDGE),$.texParameteri($.TEXTURE_2D,$.TEXTURE_COMPARE_MODE,$.COMPARE_REF_TO_TEXTURE),$.texParameteri($.TEXTURE_2D,$.TEXTURE_COMPARE_FUNC,$.LEQUAL),this.fb=$.createFramebuffer(),$.bindFramebuffer($.FRAMEBUFFER,this.fb),$.framebufferTexture2D($.FRAMEBUFFER,$.DEPTH_ATTACHMENT,$.TEXTURE_2D,this.tex,0),$.drawBuffers([$.NONE]),$.readBuffer($.NONE),this.ok=$.checkFramebufferStatus($.FRAMEBUFFER)===$.FRAMEBUFFER_COMPLETE,$.bindFramebuffer($.FRAMEBUFFER,null)}dispose(){this.gl.deleteFramebuffer(this.fb),this.gl.deleteTexture(this.tex)}}var U$=new Float32Array(16),M={create(){let $=new Float32Array(16);return $[0]=$[5]=$[10]=$[15]=1,$},perspective($,X,J,Q,G){let Y=1/Math.tan(X/2);return $.fill(0),$[0]=Y/J,$[5]=Y,$[10]=(G+Q)/(Q-G),$[11]=-1,$[14]=2*G*Q/(Q-G),$},lookAt($,X,J,Q=[0,1,0]){let G=X[0]-J[0],Y=X[1]-J[1],Z=X[2]-J[2],K=Math.hypot(G,Y,Z)||1;G/=K,Y/=K,Z/=K;let H=Q[1]*Z-Q[2]*Y,V=Q[2]*G-Q[0]*Z,W=Q[0]*Y-Q[1]*G;K=Math.hypot(H,V,W)||1,H/=K,V/=K,W/=K;let D=Y*W-Z*V,U=Z*H-G*W,C=G*V-Y*H;return $[0]=H,$[1]=D,$[2]=G,$[3]=0,$[4]=V,$[5]=U,$[6]=Y,$[7]=0,$[8]=W,$[9]=C,$[10]=Z,$[11]=0,$[12]=-(H*X[0]+V*X[1]+W*X[2]),$[13]=-(D*X[0]+U*X[1]+C*X[2]),$[14]=-(G*X[0]+Y*X[1]+Z*X[2]),$[15]=1,$},multiply($,X,J){let Q=U$;for(let G=0;G<4;G++)for(let Y=0;Y<4;Y++)Q[G*4+Y]=X[Y]*J[G*4]+X[4+Y]*J[G*4+1]+X[8+Y]*J[G*4+2]+X[12+Y]*J[G*4+3];return $.set(Q),$},ortho($,X,J,Q,G,Y,Z){return $.fill(0),$[0]=2/(J-X),$[5]=2/(G-Q),$[10]=-2/(Z-Y),$[12]=-(J+X)/(J-X),$[13]=-(G+Q)/(G-Q),$[14]=-(Z+Y)/(Z-Y),$[15]=1,$},fromTRS($,X,J,Q){let[G,Y,Z,K]=J,H=G+G,V=Y+Y,W=Z+Z,D=G*H,U=G*V,C=G*W,F=Y*V,L=Y*W,B=Z*W,S=K*H,T=K*V,A=K*W;return $[0]=(1-(F+B))*Q[0],$[1]=(U+A)*Q[0],$[2]=(C-T)*Q[0],$[3]=0,$[4]=(U-A)*Q[1],$[5]=(1-(D+B))*Q[1],$[6]=(L+S)*Q[1],$[7]=0,$[8]=(C+T)*Q[2],$[9]=(L-S)*Q[2],$[10]=(1-(D+F))*Q[2],$[11]=0,$[12]=X[0],$[13]=X[1],$[14]=X[2],$[15]=1,$},invert($,X){let[J,Q,G,Y,Z,K,H,V,W,D,U,C,F,L,B,S]=X,T=J*K-Q*Z,A=J*H-G*Z,k=J*V-Y*Z,I=Q*H-G*K,j=Q*V-Y*K,N=G*V-Y*H,_=W*L-D*F,q=W*B-U*F,v=W*S-C*F,R=D*B-U*L,y=D*S-C*L,O=U*S-C*B,E=T*O-A*y+k*R+I*v-j*q+N*_;if(!E)return null;return E=1/E,$[0]=(K*O-H*y+V*R)*E,$[1]=(G*y-Q*O-Y*R)*E,$[2]=(L*N-B*j+S*I)*E,$[3]=(U*j-D*N-C*I)*E,$[4]=(H*v-Z*O-V*q)*E,$[5]=(J*O-G*v+Y*q)*E,$[6]=(B*k-F*N-S*A)*E,$[7]=(W*N-U*k+C*A)*E,$[8]=(Z*y-K*v+V*_)*E,$[9]=(Q*v-J*y-Y*_)*E,$[10]=(F*j-L*k+S*T)*E,$[11]=(D*k-W*j-C*T)*E,$[12]=(K*q-Z*R-H*_)*E,$[13]=(J*R-Q*q+G*_)*E,$[14]=(L*A-F*I-B*T)*E,$[15]=(W*I-D*A+U*T)*E,$},transformPoint($,X){let[J,Q,G]=X;return[$[0]*J+$[4]*Q+$[8]*G+$[12],$[1]*J+$[5]*Q+$[9]*G+$[13],$[2]*J+$[6]*Q+$[10]*G+$[14],$[3]*J+$[7]*Q+$[11]*G+$[15]]}},P={identity(){return[0,0,0,1]},axisAngle($,X){let J=Math.hypot(...$)||1,Q=Math.sin(X/2)/J;return[$[0]*Q,$[1]*Q,$[2]*Q,Math.cos(X/2)]},multiply($,X){let[J,Q,G,Y]=$,[Z,K,H,V]=X;return[J*V+Y*Z+Q*H-G*K,Q*V+Y*K+G*Z-J*H,G*V+Y*H+J*K-Q*Z,Y*V-J*Z-Q*K-G*H]},rotate($,X){let[J,Q,G,Y]=$,[Z,K,H]=X,V=Y*Z+Q*H-G*K,W=Y*K+G*Z-J*H,D=Y*H+J*K-Q*Z,U=-J*Z-Q*K-G*H;return[V*Y+U*-J+W*-G-D*-Q,W*Y+U*-Q+D*-J-V*-G,D*Y+U*-G+V*-Q-W*-J]},euler($,X,J){return P.multiply(P.multiply(P.axisAngle([0,1,0],X),P.axisAngle([1,0,0],$)),P.axisAngle([0,0,1],J))},slerp($,X,J){let[Q,G,Y,Z]=X,K=$[0]*Q+$[1]*G+$[2]*Y+$[3]*Z;if(K<0)K=-K,Q=-Q,G=-G,Y=-Y,Z=-Z;let H=1-J,V=J;if(K<0.9995){let U=Math.acos(K),C=Math.sin(U);H=Math.sin((1-J)*U)/C,V=Math.sin(J*U)/C}let W=[$[0]*H+Q*V,$[1]*H+G*V,$[2]*H+Y*V,$[3]*H+Z*V],D=Math.hypot(...W);return[W[0]/D,W[1]/D,W[2]/D,W[3]/D]}},z=($,X,J)=>$+(X-$)*J,f=($,X,J)=>Math.max(X,Math.min(J,$)),i=($)=>1-(1-$)**3,Z0=($)=>$<0.5?2*$*$:1-(-2*$+2)**2/2;function s($){let X=parseInt($.slice(1),16);return[(X>>16&255)/255,(X>>8&255)/255,(X&255)/255]}function x($){let X=Math.sin($*127.1+311.7)*43758.5453;return X-Math.floor(X)}function P0($,X){let J=$[0]*X[0]+$[1]*X[1]+$[2]*X[2];if(J<-0.9999)return[1,0,0,0];let Q=[$[1]*X[2]-$[2]*X[1],$[2]*X[0]-$[0]*X[2],$[0]*X[1]-$[1]*X[0]],G=1+J,Y=Math.hypot(Q[0],Q[1],Q[2],G);return[Q[0]/Y,Q[1]/Y,Q[2]/Y,G/Y]}var G0=Math.PI;function o($,X,J=0.2,Q=0.2,G="head"){return[{mesh:"sphere",color:"#ffffff",pos:[-J,$,X],scale:[Q,Q,Q*0.8],anim:G},{mesh:"sphere",color:"#ffffff",pos:[J,$,X],scale:[Q,Q,Q*0.8],anim:G},{mesh:"sphere",color:"#16111f",pos:[-J,$,X+Q*0.35],scale:[Q*0.5,Q*0.55,Q*0.3],anim:G},{mesh:"sphere",color:"#16111f",pos:[J,$,X+Q*0.35],scale:[Q*0.5,Q*0.55,Q*0.3],anim:G}]}var M0={toad:[{mesh:"sphere",color:"main",pos:[-0.55,0.22,0.25],scale:[0.55,0.35,0.75]},{mesh:"sphere",color:"main",pos:[0.55,0.22,0.25],scale:[0.55,0.35,0.75]},{mesh:"sphere",color:"main",pos:[0,0.85,0],scale:[1.75,1.2,1.5]},{mesh:"sphere",color:"#c9f7a8",pos:[0,0.62,0.38],scale:[1.3,0.7,0.9]},{mesh:"sphere",color:"main",pos:[-0.46,1.42,0.3],scale:[0.55,0.55,0.55],anim:"head"},{mesh:"sphere",color:"main",pos:[0.46,1.42,0.3],scale:[0.55,0.55,0.55],anim:"head"},...o(1.5,0.45,0.46,0.34),{mesh:"box",color:"#16111f",pos:[0,0.98,0.72],rot:[0.15,0,0],scale:[1.05,0.06,0.12],anim:"head"},{mesh:"sphere",color:"accent",pos:[-0.72,1.05,0.2],scale:[0.18,0.18,0.18],glow:!0},{mesh:"sphere",color:"accent",pos:[0.78,0.9,0.3],scale:[0.14,0.14,0.14],glow:!0},{mesh:"sphere",color:"accent",pos:[0.2,1.3,-0.4],scale:[0.16,0.16,0.16],glow:!0},{mesh:"sphere",color:"accent",pos:[-0.35,0.7,-0.62],scale:[0.2,0.2,0.2],glow:!0},{mesh:"sphere",color:"accent",pos:[0.42,0.78,0.66],scale:[0.09,0.2,0.09],anim:"head",glow:!0},{mesh:"sphere",color:"main",pos:[-0.9,0.55,0.45],rot:[0,0,0.6],scale:[0.22,0.5,0.22],anim:"armL"},{mesh:"sphere",color:"main",pos:[0.9,0.55,0.45],rot:[0,0,-0.6],scale:[0.22,0.5,0.22],anim:"armR"}],shroom:[{mesh:"cyl",color:"accent",pos:[0,0.75,0],scale:[0.95,1.5,0.95]},{mesh:"sphere",color:"accent",pos:[0,0.12,0],scale:[1.05,0.3,1.05]},...o(1.05,0.45,0.2,0.19),{mesh:"box",color:"#16111f",pos:[-0.2,1.3,0.45],rot:[0,0,-0.35],scale:[0.26,0.05,0.05],anim:"head"},{mesh:"box",color:"#16111f",pos:[0.2,1.3,0.45],rot:[0,0,0.35],scale:[0.26,0.05,0.05],anim:"head"},{mesh:"sphere",color:"#ff9aa8",pos:[-0.33,0.85,0.42],scale:[0.12,0.08,0.05]},{mesh:"sphere",color:"#ff9aa8",pos:[0.33,0.85,0.42],scale:[0.12,0.08,0.05]},{mesh:"sphere",color:"main",pos:[0,1.75,0],scale:[2.1,1.05,2.1],anim:"head"},{mesh:"cyl",color:"#e9d8c8",pos:[0,1.46,0],scale:[1.95,0.08,1.95],anim:"head"},{mesh:"sphere",color:"accent",pos:[0,2.26,0.1],scale:[0.36,0.14,0.36],anim:"head"},{mesh:"sphere",color:"accent",pos:[-0.62,2,0.42],scale:[0.3,0.14,0.3],anim:"head"},{mesh:"sphere",color:"accent",pos:[0.66,2.02,0.3],scale:[0.26,0.13,0.26],anim:"head"},{mesh:"sphere",color:"accent",pos:[0.2,1.95,-0.72],scale:[0.3,0.14,0.3],anim:"head"},{mesh:"sphere",color:"accent",pos:[-0.72,1.9,-0.35],scale:[0.22,0.12,0.22],anim:"head"},{mesh:"sphere",color:"accent",pos:[0.88,1.78,-0.2],scale:[0.18,0.1,0.18],anim:"head"},{mesh:"cyl",color:"accent",pos:[-0.6,0.85,0.1],rot:[G0,0,0.5],scale:[0.16,0.55,0.16],anim:"armL"},{mesh:"cyl",color:"accent",pos:[0.6,0.85,0.1],rot:[G0,0,-0.5],scale:[0.16,0.55,0.16],anim:"armR"}],crab:[{mesh:"cyl",color:"main",pos:[-0.7,0.25,0.2],rot:[0,0,0.9],scale:[0.1,0.7,0.1]},{mesh:"cyl",color:"main",pos:[-0.75,0.25,-0.25],rot:[0,0,0.9],scale:[0.1,0.7,0.1]},{mesh:"cyl",color:"main",pos:[0.7,0.25,0.2],rot:[0,0,-0.9],scale:[0.1,0.7,0.1]},{mesh:"cyl",color:"main",pos:[0.75,0.25,-0.25],rot:[0,0,-0.9],scale:[0.1,0.7,0.1]},{mesh:"sphere",color:"main",pos:[0,0.75,0],scale:[1.9,0.95,1.4]},{mesh:"sphere",color:"#9ef2f0",pos:[0,0.62,0.42],scale:[1.2,0.5,0.6]},{mesh:"box",color:"#16111f",pos:[0,0.72,0.7],scale:[0.5,0.05,0.06]},{mesh:"cyl",color:"main",pos:[-0.3,1.35,0.25],scale:[0.1,0.6,0.1],anim:"head"},{mesh:"cyl",color:"main",pos:[0.3,1.35,0.25],scale:[0.1,0.6,0.1],anim:"head"},...o(1.72,0.3,0.3,0.22),{mesh:"cyl",color:"accent",pos:[-1.05,1.05,0.25],rot:[0,0,0.6],scale:[0.16,0.7,0.16],anim:"armL"},{mesh:"cyl",color:"accent",pos:[1.05,1.05,0.25],rot:[0,0,-0.6],scale:[0.16,0.7,0.16],anim:"armR"},{mesh:"sphere",color:"accent",pos:[-1.35,1.65,0.35],scale:[0.5,0.42,0.42],anim:"armL"},{mesh:"sphere",color:"accent",pos:[1.35,1.65,0.35],scale:[0.5,0.42,0.42],anim:"armR"},{mesh:"cone",color:"accent",pos:[-1.45,2.05,0.35],rot:[0,0,0.25],scale:[0.26,0.55,0.26],anim:"armL"},{mesh:"cone",color:"accent",pos:[-1.12,2,0.35],rot:[0,0,-0.35],scale:[0.2,0.45,0.2],anim:"armL"},{mesh:"cone",color:"accent",pos:[1.45,2.05,0.35],rot:[0,0,-0.25],scale:[0.26,0.55,0.26],anim:"armR"},{mesh:"cone",color:"accent",pos:[1.12,2,0.35],rot:[0,0,0.35],scale:[0.2,0.45,0.2],anim:"armR"}],golem:[{mesh:"box",color:"main",pos:[-0.42,0.3,0.05],scale:[0.55,0.6,0.65]},{mesh:"box",color:"main",pos:[0.42,0.3,0.05],scale:[0.55,0.6,0.65]},{mesh:"box",color:"main",pos:[0,1.05,0],scale:[1.6,1,1.15]},{mesh:"box",color:"accent",pos:[0,0.95,0.58],scale:[1.1,0.08,0.04],glow:!0},{mesh:"box",color:"main",pos:[0,1.95,0.05],scale:[1.2,0.9,1],anim:"head"},{mesh:"box",color:"accent",pos:[-0.28,2.05,0.56],scale:[0.3,0.14,0.04],anim:"head",glow:!0},{mesh:"box",color:"accent",pos:[0.28,2.05,0.56],scale:[0.3,0.14,0.04],anim:"head",glow:!0},{mesh:"box",color:"accent",pos:[0,1.72,0.56],scale:[0.62,0.06,0.04],anim:"head",glow:!0},{mesh:"box",color:"main",pos:[0,2.6,0.05],scale:[0.6,0.45,0.55],anim:"head"},{mesh:"box",color:"accent",pos:[0,2.62,0.33],scale:[0.36,0.1,0.03],anim:"head",glow:!0},{mesh:"cyl",color:"#c0c7d0",pos:[0,3.05,0.05],scale:[0.05,0.5,0.05],anim:"head"},{mesh:"sphere",color:"accent",pos:[0,3.32,0.05],scale:[0.14,0.14,0.14],anim:"head",glow:!0},{mesh:"box",color:"main",pos:[-1.05,1.25,0.1],rot:[0,0,0.12],scale:[0.45,1.1,0.5],anim:"armL"},{mesh:"box",color:"main",pos:[1.05,1.25,0.1],rot:[0,0,-0.12],scale:[0.45,1.1,0.5],anim:"armR"},{mesh:"box",color:"accent",pos:[-1.05,1.4,0.36],scale:[0.2,0.12,0.02],anim:"armL",glow:!0},{mesh:"box",color:"accent",pos:[1.05,1.1,0.36],scale:[0.2,0.12,0.02],anim:"armR",glow:!0}],jelly:[{mesh:"cyl",color:"accent",pos:[-0.55,0.85,0.2],scale:[0.09,1.3,0.09],anim:"tail"},{mesh:"cyl",color:"accent",pos:[-0.2,0.75,0.45],scale:[0.09,1.4,0.09],anim:"tail"},{mesh:"cyl",color:"accent",pos:[0.2,0.75,0.45],scale:[0.09,1.4,0.09],anim:"tail"},{mesh:"cyl",color:"accent",pos:[0.55,0.85,0.2],scale:[0.09,1.3,0.09],anim:"tail"},{mesh:"cyl",color:"accent",pos:[-0.35,0.8,-0.35],scale:[0.09,1.3,0.09],anim:"tail"},{mesh:"cyl",color:"accent",pos:[0.35,0.8,-0.35],scale:[0.09,1.3,0.09],anim:"tail"},{mesh:"sphere",color:"main",pos:[0,2.05,0],scale:[1.9,1.5,1.9],anim:"head"},{mesh:"cyl",color:"main",pos:[0,1.4,0],scale:[1.85,0.2,1.85],anim:"head"},{mesh:"sphere",color:"#ffd6f4",pos:[0,2.25,0.2],scale:[1.2,0.8,1.2],anim:"head",glow:!0},...o(1.95,0.8,0.32,0.22),{mesh:"box",color:"#16111f",pos:[0,1.66,0.9],scale:[0.2,0.05,0.05],anim:"head"}],yeti:[{mesh:"cyl",color:"main",pos:[-0.4,0.3,0.05],scale:[0.45,0.6,0.45]},{mesh:"cyl",color:"main",pos:[0.4,0.3,0.05],scale:[0.45,0.6,0.45]},{mesh:"sphere",color:"main",pos:[0,1.25,0],scale:[1.7,1.8,1.4]},{mesh:"sphere",color:"main",pos:[-0.62,1.8,0.1],scale:[0.55,0.55,0.55],anim:"head"},{mesh:"sphere",color:"main",pos:[0.62,1.8,0.1],scale:[0.55,0.55,0.55],anim:"head"},{mesh:"sphere",color:"main",pos:[0,2.15,0],scale:[0.8,0.6,0.8],anim:"head"},{mesh:"sphere",color:"accent",pos:[0,1.55,0.5],scale:[0.95,0.85,0.5],anim:"head"},...o(1.7,0.72,0.2,0.17),{mesh:"box",color:"#16111f",pos:[0,1.32,0.74],scale:[0.4,0.14,0.06],anim:"head"},{mesh:"cone",color:"#ffffff",pos:[-0.1,1.24,0.78],rot:[G0,0,0],scale:[0.07,0.12,0.05],anim:"head"},{mesh:"cone",color:"#ffffff",pos:[0.1,1.24,0.78],rot:[G0,0,0],scale:[0.07,0.12,0.05],anim:"head"},{mesh:"cyl",color:"#fff7ee",pos:[0,2.48,0],scale:[0.62,0.22,0.62],anim:"head"},{mesh:"cyl",color:"#fff7ee",pos:[0,2.65,0],scale:[0.42,0.2,0.42],anim:"head"},{mesh:"cone",color:"#fff7ee",pos:[0,2.9,0],scale:[0.3,0.35,0.3],anim:"head"},{mesh:"sphere",color:"main",pos:[-1,1.35,0.2],rot:[0,0,0.35],scale:[0.42,0.95,0.42],anim:"armL"},{mesh:"sphere",color:"main",pos:[1,1.35,0.2],rot:[0,0,-0.35],scale:[0.42,0.95,0.42],anim:"armR"},{mesh:"sphere",color:"accent",pos:[-1.15,0.72,0.35],scale:[0.28,0.22,0.28],anim:"armL"},{mesh:"sphere",color:"accent",pos:[1.15,0.72,0.35],scale:[0.28,0.22,0.28],anim:"armR"}]};var I0=`#version 300 es
precision highp float;
precision highp int;

layout(location = 0) in vec3 aPos;
layout(location = 1) in vec3 aNormal;
layout(location = 2) in vec2 aUv;

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
    float h = sin(w.x * 0.5 + t * 1.1) * 0.12 + sin(w.z * 0.7 - t * 1.4) * 0.09 + sin((w.x + w.z) * 1.3 + t * 2.1) * 0.03;
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
`,A0=`#version 300 es
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
uniform highp sampler2DShadow uShadowMap;
uniform mat4 uShadowVP;
uniform float uShadowOn;
uniform float uShadowTexel;

float shadowAt(vec3 wp, vec3 n) {
  if (uShadowOn < 0.5) return 1.0;
  vec4 sc = uShadowVP * vec4(wp + n * 0.07, 1.0);
  vec3 p = sc.xyz / sc.w * 0.5 + 0.5;
  if (p.x <= 0.0 || p.x >= 1.0 || p.y <= 0.0 || p.y >= 1.0 || p.z >= 1.0) return 1.0;
  float z = p.z - 0.0009;
  float t = uShadowTexel * 1.25;
  // Hardware 2x2 PCF per tap, five taps: soft edges for little cost.
  float s = texture(uShadowMap, vec3(p.xy, z)) * 0.32;
  s += texture(uShadowMap, vec3(p.xy + vec2(t, t), z)) * 0.17;
  s += texture(uShadowMap, vec3(p.xy + vec2(-t, t), z)) * 0.17;
  s += texture(uShadowMap, vec3(p.xy + vec2(t, -t), z)) * 0.17;
  s += texture(uShadowMap, vec3(p.xy + vec2(-t, -t), z)) * 0.17;
  return s;
}

vec3 shade(vec3 base, vec3 n, vec3 wp, float rimAmount) {
  vec3 v = normalize(uCamPos - wp);
  float sh = shadowAt(wp, n);
  float ndl = dot(n, uSunDir);
  float diff = max(ndl, 0.0) * sh;
  // A touch of wrap lighting keeps the unlit side of monsters from going flat.
  float wrap = max((ndl + 0.35) / 1.35, 0.0) * 0.18;
  float hemi = n.y * 0.5 + 0.5;
  vec3 amb = mix(uGroundColor, uSkyColor, hemi);
  vec3 h = normalize(uSunDir + v);
  float spec = pow(max(dot(n, h), 0.0), 40.0) * 0.35 * sh;
  float rim = pow(1.0 - max(dot(n, v), 0.0), 3.0) * rimAmount;
  return base * (amb + uSunColor * (diff + wrap)) + uSunColor * spec + rim * vec3(1.0, 0.55, 0.8);
}

vec3 applyFog(vec3 c, vec3 wp) {
  float d = length(wp - uCamPos);
  float f = 1.0 - exp(-pow(d * uFogDensity, 2.0));
  // Low-lying haze thickens toward the ground.
  f = clamp(f + (1.0 - smoothstep(0.0, 6.0, wp.y)) * f * 0.22, 0.0, 1.0);
  return mix(c, uFogColor, f);
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
  float rimAmount = uRim;
  if (uMode == 1) {
    // Asphalt blocks separated by roads with dashed centre lines and pools of street light.
    vec2 g = vWorld.xz / 3.0;
    vec2 f = abs(fract(g) - 0.5);
    float road = step(0.40, max(f.x, f.y));
    float side = step(0.36, max(f.x, f.y)) - road;
    vec3 block = vec3(0.17, 0.14, 0.25) + hash21(floor(g)) * 0.05;
    vec3 asphalt = vec3(0.085, 0.08, 0.125);
    base = mix(block, asphalt, road);
    base = mix(base, vec3(0.22, 0.2, 0.3), side);
    vec2 lane = fract(vWorld.xz * 0.8);
    float dashX = step(0.49, f.y) * step(0.5, lane.x) * step(max(f.x, f.y), 0.5);
    float dashZ = step(0.49, f.x) * step(0.5, lane.y);
    emissive += vec3(1.0, 0.8, 0.3) * 0.45 * max(dashX, dashZ) * road;
    // Street lamps at every crossing.
    vec2 cross = abs(fract(g + 0.5) - 0.5) * 3.0;
    float lamp = exp(-dot(cross, cross) * 2.2);
    float on = step(0.25, hash21(floor(g + 0.5) + 7.0));
    emissive += vec3(1.0, 0.72, 0.4) * lamp * 0.55 * on;
    float r = length(vWorld.xz);
    emissive += vec3(0.9, 0.3, 0.6) * 0.05 * smoothstep(40.0, 5.0, r);
    rimAmount = 0.0;
  } else if (uMode == 2) {
    vec3 v = normalize(uCamPos - vWorld);
    float fres = pow(1.0 - max(dot(n, v), 0.0), 3.0);
    base = mix(vec3(0.05, 0.12, 0.3), vec3(0.35, 0.3, 0.6), fres);
    float sparkle = pow(max(dot(reflect(-uSunDir, n), v), 0.0), 60.0);
    float glitter = step(0.93, hash21(floor(vWorld.xz * 6.0) + floor(uTime * 3.0))) * sparkle * 4.0;
    emissive += vec3(1.0, 0.7, 0.5) * (sparkle * 1.4 + glitter) + vec3(0.25, 0.15, 0.35) * fres;
    // City lights reflected as soft vertical streaks near the shore.
    float streak = pow(max(0.0, sin(vWorld.x * 2.3 + sin(vWorld.z * 3.0 + uTime))), 12.0) * smoothstep(-26.0, -12.5, vWorld.z);
    emissive += vec3(1.0, 0.75, 0.45) * streak * 0.35;
    rimAmount = 0.0;
  } else if (uMode == 3) {
    // Reactor platform: thin rings pulsing outward, a hot centre and a bright rim.
    float r = length(vUv - 0.5) * 2.0;
    float inside = step(r, 1.0);
    float rings = 1.0 - smoothstep(0.0, 0.07, abs(fract(r * 3.0 - uTime * 0.5) - 0.5));
    float centre = smoothstep(0.42, 0.0, r);
    float rim = smoothstep(0.86, 0.97, r) * (1.0 - smoothstep(0.97, 1.0, r));
    base = mix(base, base * 0.55, inside);
    emissive += uGlow * (rings * 0.85 + centre * 1.1 + rim * 0.9) * inside;
  }
  vec3 c = shade(base, n, vWorld, rimAmount) + emissive;
  c = mix(c, vec3(1.6, 0.25, 0.25), uFlash);
  outColor = vec4(applyFog(c, vWorld), alpha);
}
`,E0=`#version 300 es
precision highp float;
precision highp int;

layout(location = 0) in vec3 aPos;
layout(location = 1) in vec3 aNormal;
layout(location = 2) in vec2 aUv;

layout(location = 4) in vec4 iOffset;   // xyz position, w yaw
layout(location = 5) in vec4 iScale;    // xyz scale, w seed
layout(location = 6) in vec4 iColor;    // rgb colour, w shake
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
`,j0=`#version 300 es
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
uniform highp sampler2DShadow uShadowMap;
uniform mat4 uShadowVP;
uniform float uShadowOn;
uniform float uShadowTexel;

float shadowAt(vec3 wp, vec3 n) {
  if (uShadowOn < 0.5) return 1.0;
  vec4 sc = uShadowVP * vec4(wp + n * 0.07, 1.0);
  vec3 p = sc.xyz / sc.w * 0.5 + 0.5;
  if (p.x <= 0.0 || p.x >= 1.0 || p.y <= 0.0 || p.y >= 1.0 || p.z >= 1.0) return 1.0;
  float z = p.z - 0.0009;
  float t = uShadowTexel * 1.25;
  // Hardware 2x2 PCF per tap, five taps: soft edges for little cost.
  float s = texture(uShadowMap, vec3(p.xy, z)) * 0.32;
  s += texture(uShadowMap, vec3(p.xy + vec2(t, t), z)) * 0.17;
  s += texture(uShadowMap, vec3(p.xy + vec2(-t, t), z)) * 0.17;
  s += texture(uShadowMap, vec3(p.xy + vec2(t, -t), z)) * 0.17;
  s += texture(uShadowMap, vec3(p.xy + vec2(-t, -t), z)) * 0.17;
  return s;
}

vec3 shade(vec3 base, vec3 n, vec3 wp, float rimAmount) {
  vec3 v = normalize(uCamPos - wp);
  float sh = shadowAt(wp, n);
  float ndl = dot(n, uSunDir);
  float diff = max(ndl, 0.0) * sh;
  // A touch of wrap lighting keeps the unlit side of monsters from going flat.
  float wrap = max((ndl + 0.35) / 1.35, 0.0) * 0.18;
  float hemi = n.y * 0.5 + 0.5;
  vec3 amb = mix(uGroundColor, uSkyColor, hemi);
  vec3 h = normalize(uSunDir + v);
  float spec = pow(max(dot(n, h), 0.0), 40.0) * 0.35 * sh;
  float rim = pow(1.0 - max(dot(n, v), 0.0), 3.0) * rimAmount;
  return base * (amb + uSunColor * (diff + wrap)) + uSunColor * spec + rim * vec3(1.0, 0.55, 0.8);
}

vec3 applyFog(vec3 c, vec3 wp) {
  float d = length(wp - uCamPos);
  float f = 1.0 - exp(-pow(d * uFogDensity, 2.0));
  // Low-lying haze thickens toward the ground.
  f = clamp(f + (1.0 - smoothstep(0.0, 6.0, wp.y)) * f * 0.22, 0.0, 1.0);
  return mix(c, uFogColor, f);
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
  float yWorld = vLocal.y * vSize.y;
  if (abs(n.y) < 0.5) {
    // Side face: window grid in world-ish units.
    float horiz = abs(vLocalN.x) > 0.5 ? vLocal.z * vSize.z : vLocal.x * vSize.x;
    vec2 cell = vec2(horiz / 0.38, yWorld / 0.45);
    vec2 id = floor(cell);
    vec2 f = fract(cell);
    float win = step(0.22, f.x) * step(f.x, 0.78) * step(0.25, f.y) * step(f.y, 0.75);
    float lit = step(0.45, hash21(id + vSeed * 17.0));
    // Procedural anti-aliasing: once a window is smaller than a couple of pixels,
    // fade the grid to its average instead of letting it shimmer.
    float fw = max(fwidth(cell.x), fwidth(cell.y));
    float far = clamp(fw * 1.6 - 0.6, 0.0, 1.0);
    win = mix(win, 0.31, far);
    lit = mix(lit, 0.55, far);
    float flicker = 0.85 + 0.15 * sin(uTime * 2.0 + hash21(id) * 40.0);
    vec3 warm = mix(vec3(1.0, 0.78, 0.42), vec3(0.55, 0.85, 1.0), step(0.8, hash21(id + 3.1)));
    float edge = step(yWorld, vSize.y - 0.25);
    emissive += win * lit * warm * 1.25 * flicker * edge;
    base = mix(base, base * 0.55, win);
    // Neon band under the roof of some taller buildings.
    float neon = step(0.62, vSeed) * step(2.2, vSize.y);
    float band = step(vSize.y - 0.42, yWorld) * step(yWorld, vSize.y - 0.3);
    vec3 neonCol = mix(vec3(1.0, 0.2, 0.6), vec3(0.2, 0.9, 1.0), step(0.81, vSeed));
    float blink = 0.8 + 0.2 * step(0.2, fract(uTime * 0.7 + vSeed * 5.0));
    emissive += neonCol * band * neon * 2.4 * blink;
  } else if (n.y > 0.5) {
    base *= 0.8;
    float beacon = step(0.93, fract(uTime * 0.5 + vSeed)) * step(3.5, vSize.y);
    emissive += vec3(1.0, 0.1, 0.2) * beacon * step(length(vLocal.xz), 0.12) * 4.0;
  }
  vec3 c = shade(base, n, vWorld, 0.15) + emissive;
  outColor = vec4(applyFog(c, vWorld), 1.0);
}
`,T0=`#version 300 es
precision highp float;
precision highp int;

layout(location = 0) in vec3 aPos;
layout(location = 1) in vec3 aNormal;
layout(location = 2) in vec2 aUv;

layout(location = 4) in vec4 iOffset;   // xyz position, w yaw
layout(location = 6) in vec4 iColor;    // rgb body, w visible
uniform mat4 uViewProj;
out vec3 vWorld;
out vec3 vNormal;
out vec3 vLocal;
out vec3 vColor;
void main() {
  float c = cos(iOffset.w), s = sin(iOffset.w);
  mat3 rot = mat3(c, 0.0, -s, 0.0, 1.0, 0.0, s, 0.0, c);
  vec3 p = aPos * vec3(0.26, 0.16, 0.52) * iColor.w;
  vec3 w = rot * p + iOffset.xyz;
  vWorld = w;
  vNormal = rot * aNormal;
  vLocal = aPos;
  vColor = iColor.rgb;
  gl_Position = uViewProj * vec4(w, 1.0);
}
`,_0=`#version 300 es
precision highp float;
precision highp int;
in vec3 vWorld;
in vec3 vNormal;
in vec3 vLocal;
in vec3 vColor;
out vec4 outColor;

uniform vec3 uSunDir;
uniform vec3 uSunColor;
uniform vec3 uSkyColor;
uniform vec3 uGroundColor;
uniform vec3 uFogColor;
uniform float uFogDensity;
uniform vec3 uCamPos;
uniform highp sampler2DShadow uShadowMap;
uniform mat4 uShadowVP;
uniform float uShadowOn;
uniform float uShadowTexel;

float shadowAt(vec3 wp, vec3 n) {
  if (uShadowOn < 0.5) return 1.0;
  vec4 sc = uShadowVP * vec4(wp + n * 0.07, 1.0);
  vec3 p = sc.xyz / sc.w * 0.5 + 0.5;
  if (p.x <= 0.0 || p.x >= 1.0 || p.y <= 0.0 || p.y >= 1.0 || p.z >= 1.0) return 1.0;
  float z = p.z - 0.0009;
  float t = uShadowTexel * 1.25;
  // Hardware 2x2 PCF per tap, five taps: soft edges for little cost.
  float s = texture(uShadowMap, vec3(p.xy, z)) * 0.32;
  s += texture(uShadowMap, vec3(p.xy + vec2(t, t), z)) * 0.17;
  s += texture(uShadowMap, vec3(p.xy + vec2(-t, t), z)) * 0.17;
  s += texture(uShadowMap, vec3(p.xy + vec2(t, -t), z)) * 0.17;
  s += texture(uShadowMap, vec3(p.xy + vec2(-t, -t), z)) * 0.17;
  return s;
}

vec3 shade(vec3 base, vec3 n, vec3 wp, float rimAmount) {
  vec3 v = normalize(uCamPos - wp);
  float sh = shadowAt(wp, n);
  float ndl = dot(n, uSunDir);
  float diff = max(ndl, 0.0) * sh;
  // A touch of wrap lighting keeps the unlit side of monsters from going flat.
  float wrap = max((ndl + 0.35) / 1.35, 0.0) * 0.18;
  float hemi = n.y * 0.5 + 0.5;
  vec3 amb = mix(uGroundColor, uSkyColor, hemi);
  vec3 h = normalize(uSunDir + v);
  float spec = pow(max(dot(n, h), 0.0), 40.0) * 0.35 * sh;
  float rim = pow(1.0 - max(dot(n, v), 0.0), 3.0) * rimAmount;
  return base * (amb + uSunColor * (diff + wrap)) + uSunColor * spec + rim * vec3(1.0, 0.55, 0.8);
}

vec3 applyFog(vec3 c, vec3 wp) {
  float d = length(wp - uCamPos);
  float f = 1.0 - exp(-pow(d * uFogDensity, 2.0));
  // Low-lying haze thickens toward the ground.
  f = clamp(f + (1.0 - smoothstep(0.0, 6.0, wp.y)) * f * 0.22, 0.0, 1.0);
  return mix(c, uFogColor, f);
}

float hash21(vec2 p) {
  p = fract(p * vec2(123.34, 456.21));
  p += dot(p, p + 45.32);
  return fract(p.x * p.y);
}

void main() {
  vec3 n = normalize(vNormal);
  vec3 base = vColor;
  vec3 em = vec3(0.0);
  if (vLocal.y > 0.62) base *= 0.5;
  float lampY = step(0.28, vLocal.y) * step(vLocal.y, 0.58);
  float lampX = step(0.16, abs(vLocal.x)) * step(abs(vLocal.x), 0.44);
  if (vLocal.z > 0.49) em += vec3(1.0, 0.93, 0.75) * 3.2 * lampX * lampY;
  if (vLocal.z < -0.49) em += vec3(1.0, 0.08, 0.06) * 2.4 * lampX * lampY;
  vec3 c = shade(base, n, vWorld, 0.1) + em;
  outColor = vec4(applyFog(c, vWorld), 1.0);
}
`,R0=`#version 300 es
precision highp float;
precision highp int;

layout(location = 0) in vec3 aPos;
layout(location = 1) in vec3 aNormal;
layout(location = 2) in vec2 aUv;

layout(location = 3) in float aFace;
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
`,S0=`#version 300 es
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
uniform float uLocked;
uniform float uTime;
out vec4 outColor;

uniform vec3 uSunDir;
uniform vec3 uSunColor;
uniform vec3 uSkyColor;
uniform vec3 uGroundColor;
uniform vec3 uFogColor;
uniform float uFogDensity;
uniform vec3 uCamPos;
uniform highp sampler2DShadow uShadowMap;
uniform mat4 uShadowVP;
uniform float uShadowOn;
uniform float uShadowTexel;

float shadowAt(vec3 wp, vec3 n) {
  if (uShadowOn < 0.5) return 1.0;
  vec4 sc = uShadowVP * vec4(wp + n * 0.07, 1.0);
  vec3 p = sc.xyz / sc.w * 0.5 + 0.5;
  if (p.x <= 0.0 || p.x >= 1.0 || p.y <= 0.0 || p.y >= 1.0 || p.z >= 1.0) return 1.0;
  float z = p.z - 0.0009;
  float t = uShadowTexel * 1.25;
  // Hardware 2x2 PCF per tap, five taps: soft edges for little cost.
  float s = texture(uShadowMap, vec3(p.xy, z)) * 0.32;
  s += texture(uShadowMap, vec3(p.xy + vec2(t, t), z)) * 0.17;
  s += texture(uShadowMap, vec3(p.xy + vec2(-t, t), z)) * 0.17;
  s += texture(uShadowMap, vec3(p.xy + vec2(t, -t), z)) * 0.17;
  s += texture(uShadowMap, vec3(p.xy + vec2(-t, -t), z)) * 0.17;
  return s;
}

vec3 shade(vec3 base, vec3 n, vec3 wp, float rimAmount) {
  vec3 v = normalize(uCamPos - wp);
  float sh = shadowAt(wp, n);
  float ndl = dot(n, uSunDir);
  float diff = max(ndl, 0.0) * sh;
  // A touch of wrap lighting keeps the unlit side of monsters from going flat.
  float wrap = max((ndl + 0.35) / 1.35, 0.0) * 0.18;
  float hemi = n.y * 0.5 + 0.5;
  vec3 amb = mix(uGroundColor, uSkyColor, hemi);
  vec3 h = normalize(uSunDir + v);
  float spec = pow(max(dot(n, h), 0.0), 40.0) * 0.35 * sh;
  float rim = pow(1.0 - max(dot(n, v), 0.0), 3.0) * rimAmount;
  return base * (amb + uSunColor * (diff + wrap)) + uSunColor * spec + rim * vec3(1.0, 0.55, 0.8);
}

vec3 applyFog(vec3 c, vec3 wp) {
  float d = length(wp - uCamPos);
  float f = 1.0 - exp(-pow(d * uFogDensity, 2.0));
  // Low-lying haze thickens toward the ground.
  f = clamp(f + (1.0 - smoothstep(0.0, 6.0, wp.y)) * f * 0.22, 0.0, 1.0);
  return mix(c, uFogColor, f);
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

float sdRBox(vec2 p, vec2 b, float r) {
  vec2 q = abs(p) - b + r;
  return length(max(q, 0.0)) + min(max(q.x, q.y), 0.0) - r;
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

// Five-pointed star (Inigo Quilez).
float sdStar5(vec2 p, float r, float rf) {
  const vec2 k1 = vec2(0.809016994375, -0.587785252292);
  const vec2 k2 = vec2(-k1.x, k1.y);
  p.x = abs(p.x);
  p -= 2.0 * max(dot(k1, p), 0.0) * k1;
  p -= 2.0 * max(dot(k2, p), 0.0) * k2;
  p.x = abs(p.x);
  p.y -= r;
  vec2 ba = rf * vec2(-k1.y, k1.x) - vec2(0.0, 1.0);
  float h = clamp(dot(p, ba) / dot(ba, ba), 0.0, r);
  return length(p - ba * h) * sign(p.y * ba.x - p.x * ba.y);
}

float sdCross(vec2 p, vec2 b, float r) {
  p = abs(p);
  p = (p.y > p.x) ? p.yx : p.xy;
  vec2 q = p - b;
  float k = max(q.y, q.x);
  vec2 w = (k > 0.0) ? q : vec2(b.y - p.x, -k);
  return sign(k) * length(max(w, 0.0)) + r;
}

// A clenched fist seen from the front: knuckle block, thumb across, wrist below.
float sdFist(vec2 p) {
  float d = sdRBox(p - vec2(0.53, 0.6), vec2(0.27, 0.19), 0.11);
  d = min(d, sdRBox(p - vec2(0.44, 0.38), vec2(0.22, 0.085), 0.08));
  d = min(d, sdRBox(p - vec2(0.56, 0.22), vec2(0.15, 0.1), 0.04));
  return d;
}

float fistLines(vec2 p) {
  float d = 1e3;
  for (int i = 0; i < 3; i++) {
    float x = 0.415 + float(i) * 0.13;
    d = min(d, sdSeg(p, vec2(x, 0.52), vec2(x, 0.76)));
  }
  d = min(d, sdSeg(p, vec2(0.26, 0.38), vec2(0.6, 0.38)));
  return d - 0.012;
}

// Teardrop: round at the bottom, pointed at the top (Inigo Quilez's uneven capsule).
float sdDrop(vec2 p, float r1, float r2, float h) {
  p.x = abs(p.x);
  float b = (r1 - r2) / h;
  float a = sqrt(1.0 - b * b);
  float k = dot(p, vec2(-b, a));
  if (k < 0.0) return length(p) - r1;
  if (k > a * h) return length(p - vec2(0.0, h)) - r2;
  return dot(p, vec2(a, b)) - r1;
}

void main() {
  vec3 n = normalize(vNormal);
  vec2 p = vUv;
  float d;
  float d2 = 1.0;
  bool two = false;
  vec3 ink;
  vec3 ink2 = vec3(0.0);
  if (vFace <= 1) {
    d = sdFist(p);
    ink = vec3(0.98, 0.32, 0.35);
    d2 = fistLines(p);
    ink2 = vec3(0.42, 0.07, 0.1);
    two = true;
  } else if (vFace == 2) {
    d = sdBolt(p);
    ink = vec3(0.3, 0.85, 1.0);
  } else if (vFace == 3) {
    d = sdCross(p - vec2(0.5), vec2(0.34, 0.115), 0.02);
    ink = vec3(0.16, 0.88, 0.58);
  } else if (vFace == 4) {
    d = sdStar5(p - vec2(0.5, 0.47), 0.38, 0.45);
    ink = vec3(1.0, 0.8, 0.22);
  } else {
    // A flickering flame: outer orange drop and a yellow core.
    vec2 q = p;
    q.x += sin(q.y * 14.0 + uTime * 9.0) * 0.012 * q.y;
    d = sdDrop(q - vec2(0.5, 0.33), 0.23, 0.025, 0.52);
    ink = vec3(1.0, 0.42, 0.08);
    d2 = sdDrop(q - vec2(0.5, 0.29), 0.11, 0.012, 0.27);
    ink2 = vec3(1.0, 0.86, 0.3);
    two = true;
  }
  float aa = max(fwidth(d) * 1.2, 1e-4);
  float m = 1.0 - smoothstep(-aa, aa, d);
  float m2 = 0.0;
  if (two) {
    float aa2 = max(fwidth(d2) * 1.2, 1e-4);
    m2 = (1.0 - smoothstep(-aa2, aa2, d2)) * m;
  }
  if (uBlank > 0.5) {
    m = 0.0;
    m2 = 0.0;
  }
  vec3 body = mix(uBody, vec3(0.42, 0.07, 0.02), uLocked);
  vec3 sym = mix(ink, ink2, m2);
  vec3 base = mix(body, sym, m);
  vec3 c = shade(base, n, vWorld, 0.25);
  c += sym * m * 0.22;
  c += vec3(1.0, 0.82, 0.25) * uKept * 0.18;
  c += vec3(1.0, 0.3, 0.6) * uHover * 0.2;
  c += vec3(1.0, 0.32, 0.08) * uLocked * (0.22 + 0.12 * sin(uTime * 6.0)) * (1.0 - m * 0.5);
  outColor = vec4(c, 1.0);
}
`,t=`#version 300 es
precision highp float;
precision highp int;
out vec2 vNdc;
out vec2 vUv;
void main() {
  vec2 p = vec2(float((gl_VertexID << 1) & 2), float(gl_VertexID & 2)) * 2.0 - 1.0;
  vNdc = p;
  vUv = p * 0.5 + 0.5;
  gl_Position = vec4(p, 0.9999, 1.0);
}
`;var q0=`#version 300 es
precision highp float;
precision highp int;
in vec2 vNdc;
uniform mat4 uInvViewProj;
uniform vec3 uSunDir;
uniform float uTime;
out vec4 outColor;
float hash(vec3 p) { p = fract(p * 0.3183099 + 0.1); p *= 17.0; return fract(p.x * p.y * p.z * (p.x + p.y + p.z)); }
float h2(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
float noise(vec2 p) {
  vec2 i = floor(p), f = fract(p);
  vec2 u = f * f * (3.0 - 2.0 * f);
  return mix(mix(h2(i), h2(i + vec2(1, 0)), u.x), mix(h2(i + vec2(0, 1)), h2(i + vec2(1, 1)), u.x), u.y);
}
float fbm(vec2 p) {
  float s = 0.0, a = 0.5;
  for (int i = 0; i < 5; i++) { s += a * noise(p); p = p * 2.03 + 11.7; a *= 0.5; }
  return s;
}
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
  float sun = max(dot(dir, uSunDir), 0.0);
  c += vec3(1.0, 0.45, 0.3) * pow(sun, 8.0) * 0.35;
  // Stars.
  vec3 sp = floor(dir * 180.0);
  float star = step(0.997, hash(sp)) * smoothstep(0.15, 0.5, h);
  c += vec3(star) * (0.6 + 0.4 * sin(uTime * 3.0 + hash(sp + 1.0) * 30.0));
  // Drifting clouds, lit from below by the sunset and the city.
  if (h > 0.0) {
    vec2 cp = dir.xz / (h + 0.12) * 1.6 + vec2(uTime * 0.02, uTime * 0.008);
    float cl = smoothstep(0.52, 0.85, fbm(cp));
    vec3 cloudCol = mix(vec3(0.95, 0.45, 0.45), vec3(0.3, 0.18, 0.4), smoothstep(0.05, 0.5, h));
    c = mix(c, cloudCol + vec3(1.0, 0.6, 0.4) * pow(sun, 6.0) * 0.6, cl * 0.55 * smoothstep(0.0, 0.08, h));
  }
  // A jagged mountain ridge far behind the harbour, with snow only on the highest crests.
  float az = atan(dir.x, -dir.z);
  float ridge = 0.018 + 0.016 * sin(az * 5.0 + 1.3) + 0.011 * sin(az * 11.0 + 0.4) + 0.006 * sin(az * 27.0);
  ridge += 0.02 * max(0.0, 1.0 - abs(az - 0.9) * 2.5) + 0.016 * max(0.0, 1.0 - abs(az + 0.35) * 3.0);
  ridge *= smoothstep(1.9, 1.2, abs(az));
  if (h < ridge && h > -0.02) {
    float snow = smoothstep(ridge - 0.012, ridge - 0.004, h) * smoothstep(0.03, 0.045, ridge);
    vec3 m = mix(vec3(0.2, 0.11, 0.28), vec3(0.9, 0.78, 0.9), snow);
    m += vec3(1.0, 0.5, 0.35) * pow(sun, 3.0) * 0.25;
    c = mix(c, m, 0.85);
  }
  c = mix(c, vec3(0.12, 0.07, 0.2), smoothstep(0.0, -0.3, h));
  // The sun disc itself is bright enough to bloom.
  c += vec3(1.0, 0.7, 0.4) * pow(sun, 380.0) * 6.0;
  outColor = vec4(c, 1.0);
}
`,k0=`#version 300 es
precision highp float;
precision highp int;
layout(location = 0) in vec3 aPos;
layout(location = 1) in vec4 aColor;
layout(location = 2) in float aSize;
uniform mat4 uViewProj;
uniform float uScale;
out vec4 vColor;
void main() {
  vec4 p = uViewProj * vec4(aPos, 1.0);
  gl_Position = p;
  gl_PointSize = aSize * uScale / max(p.w, 0.1);
  vColor = aColor;
}
`,v0=`#version 300 es
precision highp float;
precision highp int;
in vec4 vColor;
uniform float uGain;
out vec4 outColor;
void main() {
  vec2 d = gl_PointCoord - 0.5;
  float r = length(d);
  float a = smoothstep(0.5, 0.0, r);
  float core = smoothstep(0.18, 0.0, r);
  outColor = vec4(vColor.rgb * (a + core * 0.8) * vColor.a * uGain, a * vColor.a);
}
`,f0=`#version 300 es
precision highp float;
precision highp int;

layout(location = 0) in vec3 aPos;
layout(location = 1) in vec3 aNormal;
layout(location = 2) in vec2 aUv;

uniform mat4 uModel;
uniform mat4 uViewProj;
out vec2 vUv;
void main() {
  vUv = aUv;
  gl_Position = uViewProj * uModel * vec4(aPos, 1.0);
}
`,w0=`#version 300 es
precision highp float;
precision highp int;
in vec2 vUv;
uniform int uMode;
uniform vec4 uColor;
uniform float uTime;
uniform float uProgress;
out vec4 outColor;
void main() {
  float r = length(vUv - 0.5) * 2.0;
  if (uMode == 0) {
    float a = smoothstep(1.0, 0.0, r) * uColor.a;
    outColor = vec4(0.0, 0.0, 0.0, a);
  } else if (uMode == 1) {
    float ring = smoothstep(0.08, 0.0, abs(r - 0.82 - 0.05 * sin(uTime * 4.0)));
    float inner = smoothstep(0.9, 0.0, r) * 0.25;
    float a = (ring + inner) * uColor.a;
    outColor = vec4(uColor.rgb * a, a);
  } else {
    float k = uProgress;
    float ring = smoothstep(0.12 * (1.0 - k) + 0.02, 0.0, abs(r - k));
    float fill = smoothstep(k, 0.0, r) * 0.25;
    float a = (ring + fill) * (1.0 - k) * (1.0 - k) * uColor.a;
    outColor = vec4(uColor.rgb * a, a);
  }
}
`,z0=`#version 300 es
precision highp float;
precision highp int;

layout(location = 0) in vec3 aPos;
layout(location = 1) in vec3 aNormal;
layout(location = 2) in vec2 aUv;

uniform mat4 uModel;
uniform mat4 uViewProj;
out vec3 vWorld;
out vec3 vNormal;
out float vT;
void main() {
  vec4 w = uModel * vec4(aPos, 1.0);
  vWorld = w.xyz;
  vNormal = normalize(mat3(uModel) * aNormal);
  vT = aPos.y;
  gl_Position = uViewProj * w;
}
`,y0=`#version 300 es
precision highp float;
precision highp int;
in vec3 vWorld;
in vec3 vNormal;
in float vT;
uniform vec3 uCamPos;
uniform vec3 uColor;
uniform float uIntensity;
out vec4 outColor;
void main() {
  vec3 v = normalize(uCamPos - vWorld);
  float facing = abs(dot(normalize(vNormal), v));
  float a = pow(facing, 2.5) * pow(1.0 - vT, 2.2) * smoothstep(0.0, 0.03, vT) * uIntensity;
  outColor = vec4(uColor * a, a);
}
`,h0=`#version 300 es
precision highp float;
precision highp int;
layout(location = 0) in vec3 aPos;
layout(location = 1) in vec3 aInfo; // across (-1..1), along (0..1), alpha
uniform mat4 uViewProj;
out vec3 vInfo;
void main() {
  vInfo = aInfo;
  gl_Position = uViewProj * vec4(aPos, 1.0);
}
`,x0=`#version 300 es
precision highp float;
precision highp int;
in vec3 vInfo;
uniform vec3 uColor;
out vec4 outColor;
void main() {
  float x = vInfo.x;
  float glow = exp(-x * x * 5.0);
  float core = exp(-x * x * 60.0);
  vec3 c = (uColor * glow * 1.4 + vec3(1.0) * core * 2.2) * vInfo.z;
  outColor = vec4(c, glow * vInfo.z);
}
`,d0=`#version 300 es
precision highp float;
layout(location = 0) in vec3 aPos;
uniform mat4 uModel;
uniform mat4 uLightVP;
void main() {
  gl_Position = uLightVP * uModel * vec4(aPos, 1.0);
}
`,u0=`#version 300 es
precision highp float;
layout(location = 0) in vec3 aPos;
layout(location = 4) in vec4 iOffset;
layout(location = 5) in vec4 iScale;
layout(location = 6) in vec4 iColor;
uniform mat4 uLightVP;
uniform float uTime;
void main() {
  float c = cos(iOffset.w), s = sin(iOffset.w);
  mat3 rot = mat3(c, 0.0, -s, 0.0, 1.0, 0.0, s, 0.0, c);
  vec3 p = aPos * iScale.xyz;
  p.x += sin(uTime * 60.0 + iScale.w * 10.0) * 0.08 * iColor.w * aPos.y;
  gl_Position = uLightVP * vec4(rot * p + iOffset.xyz, 1.0);
}
`,K0=`#version 300 es
precision highp float;
void main() {}
`,b0=`#version 300 es
precision highp float;
in vec2 vUv;
uniform sampler2D uTex;
uniform vec2 uTexel;
uniform float uThreshold;
out vec4 outColor;
void main() {
  vec3 c = texture(uTex, vUv + uTexel * vec2(-0.5, -0.5)).rgb;
  c += texture(uTex, vUv + uTexel * vec2(0.5, -0.5)).rgb;
  c += texture(uTex, vUv + uTexel * vec2(-0.5, 0.5)).rgb;
  c += texture(uTex, vUv + uTexel * vec2(0.5, 0.5)).rgb;
  c *= 0.25;
  if (uThreshold >= 0.0) {
    float l = max(c.r, max(c.g, c.b));
    c *= smoothstep(uThreshold, uThreshold + 0.6, l);
  }
  outColor = vec4(min(c, vec3(24.0)), 1.0);
}
`,c0=`#version 300 es
precision highp float;
in vec2 vUv;
uniform sampler2D uTex;
uniform vec2 uDir;
out vec4 outColor;
void main() {
  vec3 c = texture(uTex, vUv).rgb * 0.2270270270;
  c += texture(uTex, vUv + uDir * 1.3846153846).rgb * 0.3162162162;
  c += texture(uTex, vUv - uDir * 1.3846153846).rgb * 0.3162162162;
  c += texture(uTex, vUv + uDir * 3.2307692308).rgb * 0.0702702703;
  c += texture(uTex, vUv - uDir * 3.2307692308).rgb * 0.0702702703;
  outColor = vec4(c, 1.0);
}
`,n0=`#version 300 es
precision highp float;
in vec2 vUv;
uniform sampler2D uScene;
uniform sampler2D uBloom1;
uniform sampler2D uBloom2;
uniform vec2 uTexel;
uniform vec2 uRes;
uniform float uBloom;
uniform float uHit;
uniform float uTime;
out vec4 outColor;

/** Linear below the knee, smooth shoulder above: keeps the authored look, tames HDR highlights. */
vec3 rolloff(vec3 c) {
  vec3 k = vec3(0.78);
  vec3 over = max(c - k, 0.0);
  return min(c, k) + (1.0 - k) * (1.0 - exp(-over / (1.0 - k)));
}

float grain(vec2 p) { return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453); }

void main() {
  vec2 uv = vUv;
  vec2 d = uv - 0.5;
  vec3 c = texture(uScene, uv).rgb;
  if (uHit > 0.01) {
    float ca = uHit * 0.007;
    c.r = texture(uScene, uv + d * ca).r;
    c.b = texture(uScene, uv - d * ca).b;
  }
  if (uBloom > 0.0) c += (texture(uBloom1, uv).rgb * 0.55 + texture(uBloom2, uv).rgb * 0.75) * uBloom;
  c = rolloff(c);
  // Gentle S-curve and violet-lifted shadows.
  c = mix(c, c * c * (3.0 - 2.0 * c), 0.12);
  c += vec3(0.018, 0.0, 0.03) * (1.0 - c);
  float vig = smoothstep(1.1, 0.3, length(d * vec2(1.0, 0.92)));
  c *= mix(0.72, 1.0, vig);
  c = mix(c, vec3(1.0, 0.12, 0.16), uHit * 0.28 * (1.0 - vig));
  c += (grain(uv * uRes + fract(uTime) * 91.7) - 0.5) * 0.018;
  outColor = vec4(clamp(c, 0.0, 1.0), 1.0);
}
`;var F$={fist:0,bolt:2,cross:3,star:4,heat:5},a=(()=>{let $=[-0.45,0.55,-0.7],X=Math.hypot(...$);return[$[0]/X,$[1]/X,$[2]/X]})(),p0=[0,0.35,0],c=[6.5,10,-8.2],m0=4,r0=10,e=-11.5,i0=2048,s0=2,D$=3072,B$=[{p:[-17,3.2,6],a0:0.3,speed:0.23,color:[1,0.82,0.72]},{p:[18,4,-3],a0:2.1,speed:-0.19,color:[0.72,0.84,1]},{p:[-6,3.5,19],a0:4,speed:0.16,color:[1,0.66,0.9]},{p:[10,5,-9.5],a0:5.2,speed:-0.27,color:[0.9,0.9,1]}];class V0{canvas;gl;progs;meshes;buildingMesh;carMesh;particleVao;particleBuf;particleData=new Float32Array(7200);boltVao;boltBuf;boltData=new Float32Array(D$*6);emptyVao;buildingData=new Float32Array(0);carData=new Float32Array(0);monsters=new Map;dice=[];buildings=[];particles=[];cars=[];bolts=[];waves=[];timers=[];seatCount=0;viewerSeat=0;viewerId=null;heat=0;heatTarget=0;coreHeld=!1;eruptT=-10;diceActive=!0;fmt;quality="high";pipe=null;direct=!1;shadow=null;dummyShadow;lightVP=M.create();renderScale=1;frameEma=0.016666666666666666;lastScaleCheck=0;hit=0;lessMotion=!1;yaw=0;pitch=0.62;dist=27;camShake=0;camPos=[0,0,0];focus=null;lastInput=-100;drift=[0,0];view=M.create();proj=M.create();viewProj=M.create();invViewProj=M.create();diceViewProj=M.create();diceInv=M.create();diceCam=[0,0,0];width=1;height=1;dpr=1;diceRect={x:0,y:0,w:1,h:1};hoverDie=-1;time=0;last=0;raf=0;tmp=M.create();tmp2=M.create();tmp3=M.create();onLabels=null;constructor($,X="high"){this.canvas=$;let J=$.getContext("webgl2",{antialias:!1,alpha:!1,depth:!0,stencil:!1,powerPreference:"high-performance"});if(!J)throw Error("WebGL2 недоступен");this.gl=J,this.fmt=O0(J),this.progs={obj:new d(J,I0,A0),bld:new d(J,E0,j0),dice:new d(J,R0,S0),sky:new d(J,t,q0),part:new d(J,k0,v0),decal:new d(J,f0,w0),car:new d(J,T0,_0),beam:new d(J,z0,y0),bolt:new d(J,h0,x0),depth:new d(J,d0,K0),depthInst:new d(J,u0,K0),bright:new d(J,t,b0),blur:new d(J,t,c0),composite:new d(J,t,n0)};for(let Y of[this.progs.obj,this.progs.bld,this.progs.dice,this.progs.car])Y.use().int("uShadowMap",1);let Q=this.progs.composite.use();Q.int("uScene",0),Q.int("uBloom1",2),Q.int("uBloom2",3);let G=this.progs.obj;this.meshes={sphere:new u(J,G,C0(14,20)),box:new u(J,G,J0()),cyl:new u(J,G,r(0.5,0.5,18)),cone:new u(J,G,r(0.5,0,18)),ground:new u(J,G,X0(140,1)),water:new u(J,G,X0(1,60)),plaza:new u(J,G,r(1,1,40)),dice:new u(J,this.progs.dice,N0(0.22,7)),quad:new u(J,this.progs.decal,X0(1,1)),beam:new u(J,this.progs.beam,r(0.1,1.9,24,!1))},this.buildingMesh=new u(J,this.progs.bld,J0(!0),[{name:"iOffset",size:4},{name:"iScale",size:4},{name:"iColor",size:4}]),this.carMesh=new u(J,this.progs.car,J0(!0),[{name:"iOffset",size:4},{name:"iColor",size:4}]),this.emptyVao=J.createVertexArray(),this.particleVao=J.createVertexArray(),this.particleBuf=J.createBuffer(),J.bindVertexArray(this.particleVao),J.bindBuffer(J.ARRAY_BUFFER,this.particleBuf),J.bufferData(J.ARRAY_BUFFER,this.particleData.byteLength,J.DYNAMIC_DRAW),J.enableVertexAttribArray(0),J.vertexAttribPointer(0,3,J.FLOAT,!1,32,0),J.enableVertexAttribArray(1),J.vertexAttribPointer(1,4,J.FLOAT,!1,32,12),J.enableVertexAttribArray(2),J.vertexAttribPointer(2,1,J.FLOAT,!1,32,28),this.boltVao=J.createVertexArray(),this.boltBuf=J.createBuffer(),J.bindVertexArray(this.boltVao),J.bindBuffer(J.ARRAY_BUFFER,this.boltBuf),J.bufferData(J.ARRAY_BUFFER,this.boltData.byteLength,J.DYNAMIC_DRAW),J.enableVertexAttribArray(0),J.vertexAttribPointer(0,3,J.FLOAT,!1,24,0),J.enableVertexAttribArray(1),J.vertexAttribPointer(1,3,J.FLOAT,!1,24,12),J.bindVertexArray(null),this.dummyShadow=new Q0(J,1),J.bindFramebuffer(J.FRAMEBUFFER,this.dummyShadow.fb),J.clearDepth(1),J.clear(J.DEPTH_BUFFER_BIT),J.bindFramebuffer(J.FRAMEBUFFER,null),this.quality=X,this.renderScale=X==="high"?1:0.8,this.setupShadow(),this.buildCars(),this.start()}setQuality($){if($===this.quality)return;this.quality=$,this.renderScale=$==="high"?1:0.8,this.setupShadow(),this.rebuildTargets(),this.buildCars()}setupShadow(){if(this.quality==="high"&&!this.shadow){let $=new Q0(this.gl,i0);if($.ok)this.shadow=$;else $.dispose()}else if(this.quality==="low"&&this.shadow)this.shadow.dispose(),this.shadow=null}maxSamples(){let $=this.gl;try{let X=$.getInternalformatParameter($.RENDERBUFFER,this.fmt.internal,$.SAMPLES);return X&&X.length?Math.max(...Array.from(X)):0}catch{return 0}}rebuildTargets(){let $=this.pipe;if($)$.scene.dispose(),$.ms?.dispose(),$.bloomA.dispose(),$.bloomB.dispose(),$.bloomC.dispose(),$.bloomD.dispose(),this.pipe=null;if(this.direct)return;let X=this.gl,J=Math.max(1,Math.round(this.canvas.width*this.renderScale)),Q=Math.max(1,Math.round(this.canvas.height*this.renderScale)),G=(Z)=>{let K=null;{let B=Math.min(this.quality==="high"?4:2,this.maxSamples());if(B>1){if(K=new Y0(X,J,Q,Z,B),!K.ok)K.dispose(),K=null}}let H=new p(X,J,Q,Z,!K),V=(B)=>Math.max(1,B>>1),W=(B)=>Math.max(1,B>>2),D=new p(X,V(J),V(Q),Z,!1),U=new p(X,V(J),V(Q),Z,!1),C=new p(X,W(J),W(Q),Z,!1),F=new p(X,W(J),W(Q),Z,!1),L=[H,D,U,C,F];if(L.every((B)=>B.ok))return{scene:H,ms:K,bloomA:D,bloomB:U,bloomC:C,bloomD:F};return L.forEach((B)=>B.dispose()),K?.dispose(),null},Y=G(this.fmt);if(!Y&&this.fmt.hdr)this.fmt={internal:X.RGBA8,format:X.RGBA,type:X.UNSIGNED_BYTE,hdr:!1},Y=G(this.fmt);if(!Y){this.direct=!0;return}this.pipe=Y}sync($,X,J){let Q=$.players.length,G=Math.max(0,$.players.findIndex((W)=>W.id===X));if(this.viewerId=X,Q!==this.seatCount||G!==this.viewerSeat)this.seatCount=Q,this.viewerSeat=G,this.buildCity();this.diceActive=J;let Y=$.players[$.current],Z=e0($);this.coreHeld=!!Z,this.heatTarget=Z?$.core.heat/g0(Z):0,$.players.forEach((W,D)=>{let U=this.monsters.get(W.id),C=this.seatPos(D),F=$.core.holder===W.id,L=F?[...p0]:C;if(!U){let B=a0[W.monster];U={id:W.id,monster:W.monster,parts:M0[W.monster],main:s(B.color),accent:s(B.accent),pos:[...L],from:[...L],to:[...L],moveT0:-10,moveDur:1,yaw:0,yawTarget:0,koT:-10,flashT:-10,lungeT:-10,lungeDir:[0,0,1],current:!1,seed:D*1.37+0.3,inCore:F,landed:!0},this.monsters.set(W.id,U)}if(U.to[0]!==L[0]||U.to[1]!==L[1]||U.to[2]!==L[2])U.from=[...U.pos],U.to=L,U.moveT0=this.time,U.moveDur=1,U.landed=!1;U.inCore=F,U.current=W.id===Y.id&&$.phase!=="gameOver",U.yawTarget=F?this.yawToward(L,this.cameraGround()):this.yawToward(L,[0,0,0])});let K=$.phase==="roll"&&!$.flags.rolled;while(this.dice.length<$.dice.length)this.dice.push({face:"fist",kept:!1,bonus:!1,locked:!1,blank:!0,q:P.identity(),pos:[0,0,0],target:[0,0,0],rollT0:-10,spinAxis:[1,0,0],spinTurns:0,yawJitter:0});this.dice.length=$.dice.length;let H=$.dice.length,V=1.3;$.dice.forEach((W,D)=>{let U=this.dice[D];if(U.face=W.face,U.locked=W.locked&&$.phase==="roll"&&!K,U.kept=W.kept&&$.phase==="roll",U.bonus=W.bonus,U.blank&&!K)U.yawJitter=(x(D+$.turn)-0.5)*0.5;if(U.blank=K,U.target=[(D-(H-1)/2)*V,0,U.kept?-1:0.35],this.dice.length&&U.pos[0]===0&&U.pos[2]===0)U.pos=[...U.target]})}cameraGround(){return[Math.sin(this.yaw)*30,0,Math.cos(this.yaw)*30]}yawToward($,X){return Math.atan2(X[0]-$[0],X[2]-$[2])}seatPos($){let X=Math.max(1,this.seatCount),J=Math.PI/2+($-this.viewerSeat)/X*Math.PI*2,Q=Math.cos(J)*r0,G=Math.sin(J)*r0;if(G<e+2)G=e+2;return[Q,0,G]}buildCity(){let $=Array.from({length:this.seatCount},(Q,G)=>this.seatPos(G)),X=[],J=0;for(let Q=-10;Q<10;Q++)for(let G=-4;G<11;G++){let Y=Q*3+1.5,Z=G*3+1.5,K=Math.hypot(Y,Z);if(K<4.6||K>30)continue;if(Z<e+1)continue;if($.some((W)=>Math.hypot(W[0]-Y,W[2]-Z)<3.4))continue;let V=x(Q*31+G*17+5)>0.55?2:1;for(let W=0;W<V;W++){let D=x(J*7.3+W),U=V===1?1.6+D*0.5:0.95,C=V===1?1.6+x(J*3.1)*0.5:1.8,F=V===1?0:(W-0.5)*1.05,L=x(J*5.7+W),B=K<14?0.8+L*1.4:K<18?1.5+L*2.5:2.5+L*L*7+2*x(J*9.1),S=x(J*2.3+W),T=S<0.33?[0.28,0.24,0.42]:S<0.66?[0.36,0.3,0.38]:[0.22,0.28,0.4];X.push({x:Y+F,z:Z,w:U,d:C,h0:B,h:B,yaw:0,color:T,seed:x(J*13.7+W),crumbleT:-100,regrowAt:0,shakeT:-10})}J++}X.push({x:c[0],z:c[2],w:0.55,d:0.55,h0:c[1],h:c[1],yaw:0.785,color:[0.42,0.4,0.52],seed:0.5,crumbleT:-100,regrowAt:0,shakeT:-10}),this.buildings=X,this.buildingData=new Float32Array(X.length*12)}buildCars(){let $=this.quality==="high"?72:32,X=[[0.85,0.85,0.9],[0.12,0.12,0.15],[0.8,0.15,0.2],[0.95,0.75,0.15],[0.2,0.45,0.85],[0.9,0.9,0.3]],J=[];for(let Q=0;Q<$;Q++){let G=x(Q*3.7)>0.5?1:0,Y=x(Q*5.3)>0.5?1:-1;J.push({axis:G,line:(Math.floor(x(Q*7.1)*19)-9)*3,lane:Y*0.13,dir:Y,speed:1.3+x(Q*9.7)*1.4,phase:x(Q*11.3)*60,color:X[Math.floor(x(Q*13.1)*X.length)]})}this.cars=J,this.carData=new Float32Array($*8)}event($){let X=this.time;switch($.type){case"roll":for(let J of $.indices){let Q=this.dice[J];if(!Q)continue;Q.rollT0=X+Math.random()*0.08;let G=[Math.random()-0.5,Math.random()-0.5,Math.random()-0.5];Q.spinAxis=G,Q.spinTurns=2+Math.random()*2,Q.yawJitter=(Math.random()-0.5)*0.5}break;case"attack":{let J=this.monsters.get($.playerId);if(!J)break;let Q=$.targets.map((V)=>this.monsters.get(V)).filter(Boolean);if(!Q.length)break;let G=Q.reduce((V,W)=>[V[0]+W.pos[0]/Q.length,0,V[2]+W.pos[2]/Q.length],[0,0,0]),Y=G[0]-J.pos[0],Z=G[2]-J.pos[2],K=Math.hypot(Y,Z)||1;J.lungeDir=[Y/K,0,Z/K],J.lungeT=X;let H=J.inCore?2:1.6;for(let[V,W]of Q.entries())this.bolts.push({a:[J.pos[0]+J.lungeDir[0]*0.8,J.pos[1]+1.5*H,J.pos[2]+J.lungeDir[2]*0.8],b:[W.pos[0],W.pos[1]+(W.inCore?3.2:2.6),W.pos[2]],t0:X+0.12+V*0.05,color:[J.accent[0]*0.5+0.5,J.accent[1]*0.5+0.3,J.accent[2]*0.5+0.4],seed:Math.random()*100});if(!this.lessMotion)this.focus={p:[(J.pos[0]+G[0])/2,1.2,(J.pos[2]+G[2])/2],t0:X};break}case"damage":{let J=this.monsters.get($.playerId);if(!J)break;let Q=$.amount,G=$.playerId===this.viewerId;this.later(0.2,()=>{if(J.flashT=this.time,this.camShake=Math.min(0.6,this.camShake+(this.lessMotion?0.05:0.15+Q*0.05)),this.burst([J.pos[0],J.pos[1]+1.4,J.pos[2]],14+Q*8,[1,0.35,0.2],5,0.9,0.5,-6),this.burst([J.pos[0],J.pos[1]+1.4,J.pos[2]],8,[1,0.9,0.5],3,0.6,0.35,-4),this.shakeNear(J.pos,5),this.waves.push({p:[J.pos[0],(J.inCore?J.to[1]:0)+0.05,J.pos[2]],t0:this.time,dur:0.55,size:5+Q,color:[1,0.35,0.2,0.9]}),!this.lessMotion&&(G||Q>=3))this.hit=Math.max(this.hit,G?1:0.45)});break}case"heal":{let J=this.monsters.get($.playerId);if(J)this.burst([J.pos[0],J.pos[1]+0.5,J.pos[2]],10+$.amount*5,[0.3,1,0.5],1.2,1.4,0.45,2.2);break}case"energy":{let J=this.monsters.get($.playerId);if(J)this.burst([J.pos[0],J.pos[1]+2.2,J.pos[2]],6+$.amount*3,[1,0.85,0.2],2.2,1,0.35,1);break}case"vp":{let J=this.monsters.get($.playerId);if(!J||$.amount<=0)break;this.burst([J.pos[0],J.pos[1]+2.6,J.pos[2]],6+$.amount*4,[1,0.8,0.3],2.5,1.2,0.5,0.5);for(let Q=0;Q<Math.min(3,$.amount);Q++)this.crumbleNear(J.pos,Q*0.25);break}case"enter":{let J=this.monsters.get($.playerId);if(J&&!this.lessMotion)this.focus={p:[J.to[0],1.2,J.to[2]],t0:X+0.3};break}case"leave":break;case"ko":{let J=this.monsters.get($.playerId);if(J)J.koT=X+0.2,this.later(0.25,()=>{this.burst([J.pos[0],1.2,J.pos[2]],60,[0.6,0.5,0.75],4,1.6,0.8,1),this.burst([J.pos[0],3.2,J.pos[2]],18,[1,0.9,0.4],2,1.4,0.45,-1),this.waves.push({p:[J.pos[0],0.06,J.pos[2]],t0:this.time,dur:1.2,size:12,color:[0.8,0.6,1,0.8]}),this.camShake=Math.min(0.9,this.camShake+(this.lessMotion?0.2:0.7)),this.shakeNear(J.pos,7)});break}case"ultimate":{let J=this.monsters.get($.playerId);if(!J)break;if(!this.lessMotion)this.focus={p:[J.pos[0],1.8,J.pos[2]],t0:X};for(let Q=0;Q<5;Q++){let G=Q/5*Math.PI*2;this.bolts.push({a:[J.pos[0]+Math.cos(G)*5,16+Q,J.pos[2]+Math.sin(G)*5],b:[J.pos[0],J.pos[1]+3,J.pos[2]],t0:X+Q*0.07,color:[J.accent[0]*0.6+0.4,J.accent[1]*0.6+0.4,J.accent[2]*0.6+0.4],seed:Math.random()*100})}this.later(0.3,()=>{this.burst([J.pos[0],J.pos[1]+2,J.pos[2]],80,J.main,6,1.4,0.7,-1),this.burst([J.pos[0],J.pos[1]+2,J.pos[2]],40,J.accent,4,1.2,0.5,1.5),this.waves.push({p:[J.pos[0],J.pos[1]+0.06,J.pos[2]],t0:this.time,dur:1.1,size:16,color:[J.accent[0],J.accent[1],J.accent[2],1]}),this.camShake=Math.min(0.8,this.camShake+(this.lessMotion?0.1:0.45)),this.shakeNear(J.pos,8)});break}case"eruption":{this.eruptT=X;let J=p0;this.burst([J[0],1.5,J[2]],160,[1,0.55,0.15],11,1.6,1,-3),this.burst([J[0],2.5,J[2]],70,[1,0.95,0.7],7,1.1,0.7,-2);for(let Q=0;Q<3;Q++)this.later(Q*0.15,()=>this.waves.push({p:[J[0],0.08,J[2]],t0:this.time,dur:1.3,size:20+Q*8,color:[1,0.5,0.15,1]}));for(let Q=0;Q<6;Q++)this.crumbleNear([Math.cos(Q)*9,0,Math.sin(Q)*9],Q*0.08);if(this.camShake=this.lessMotion?0.3:1,!this.lessMotion)this.hit=Math.max(this.hit,0.6);this.shakeNear(J,14);break}case"combo":{let J=this.monsters.get($.playerId);if(!J)break;let Q=$.kind==="stars"?[1,0.82,0.25]:$.kind==="fists"?[1,0.35,0.35]:[1,0.45,0.1];this.burst([J.pos[0],J.pos[1]+3.5,J.pos[2]],30+$.count*10,Q,4,1.3,0.6,-1);break}case"rage":{let J=this.monsters.get($.playerId);if(J)this.burst([J.pos[0],J.pos[1]+1.5,J.pos[2]],6+$.amount*4,[1,0.45,0.1],1.5,1.2,0.35,2.5);break}case"buy":{let J=this.monsters.get($.playerId);if(J)this.burst([J.pos[0],J.pos[1]+3,J.pos[2]],16,[0.5,0.8,1],2.5,1,0.3,-1);break}case"win":for(let J of $.playerIds){let Q=this.monsters.get(J);if(!Q)continue;if(!this.lessMotion)this.focus={p:[Q.pos[0],1.5,Q.pos[2]],t0:X};for(let G=0;G<6;G++)this.later(G*0.3,()=>{let Y=s(["#ff3d7f","#ffd23f","#2ee59d","#74f0ff","#a855f7","#ff8a3d"][G]);this.burst([Q.pos[0]+(Math.random()-0.5)*6,6+Math.random()*3,Q.pos[2]+(Math.random()-0.5)*6],70,Y,7,1.6,0.6,-3)})}break;case"turn":break}}later($,X){this.timers.push({at:this.time+$,fn:X})}burst($,X,J,Q,G,Y,Z){let K=this.quality==="high"?900:450;for(let H=0;H<X;H++){if(this.particles.length>=K)this.particles.shift();let V=Math.random()*Math.PI*2,W=Math.acos(Math.random()*2-1),D=Q*(0.4+Math.random()*0.6);this.particles.push({p:[$[0],$[1],$[2]],v:[Math.sin(W)*Math.cos(V)*D,Math.abs(Math.cos(W))*D*0.8+(Z>0?D*0.3:0),Math.sin(W)*Math.sin(V)*D],c:[J[0]*(0.8+Math.random()*0.2),J[1]*(0.8+Math.random()*0.2),J[2]*(0.8+Math.random()*0.2)],life:G*(0.6+Math.random()*0.4),max:G,size:Y*(0.6+Math.random()*0.8),grav:Z})}}shakeNear($,X){for(let J of this.buildings)if(Math.hypot(J.x-$[0],J.z-$[2])<X)J.shakeT=this.time}crumbleNear($,X){let Q=this.buildings.filter((G)=>G.h>G.h0*0.5&&G.h0<8).map((G)=>({b:G,d:Math.hypot(G.x-$[0],G.z-$[2])+Math.random()*4})).sort((G,Y)=>G.d-Y.d)[0]?.b;if(!Q)return;Q.crumbleT=this.time+X,Q.regrowAt=this.time+30+Math.random()*30,this.later(X,()=>{this.burst([Q.x,Q.h0*0.5,Q.z],30,[0.55,0.5,0.6],2.5,1.5,0.9,-3),this.burst([Q.x,Q.h0*0.8,Q.z],12,[1,0.5,0.2],3,0.8,0.5,-5),this.waves.push({p:[Q.x,0.05,Q.z],t0:this.time,dur:0.8,size:4,color:[0.8,0.7,0.9,0.5]})})}resize($,X,J){this.width=$,this.height=X,this.dpr=J;let Q=Math.max(1,Math.floor($*J)),G=Math.max(1,Math.floor(X*J));if(this.canvas.width===Q&&this.canvas.height===G&&(this.pipe||this.direct))return;this.canvas.width=Q,this.canvas.height=G,this.rebuildTargets()}touch(){this.yaw+=this.drift[0],this.pitch=f(this.pitch+this.drift[1],0.18,1.35),this.drift=[0,0],this.lastInput=this.time}orbit($,X){this.touch(),this.yaw-=$*0.008,this.pitch=f(this.pitch+X*0.006,0.18,1.35)}zoom($){this.touch(),this.dist=f(this.dist*$,12,48)}pickDie($,X){let J=this.diceRect;if($<J.x||$>J.x+J.w||X<J.y||X>J.y+J.h)return-1;let Q=($-J.x)/J.w*2-1,G=1-(X-J.y)/J.h*2,Y=this.ray(this.diceInv,Q,G),Z=-1,K=1/0;return this.dice.forEach((H,V)=>{let W=t0(Y.o,Y.d,H.pos,0.72);if(W!==null&&W<K)K=W,Z=V}),Z}pickMonster($,X){let J=$/this.width*2-1,Q=1-X/this.height*2,G=this.ray(this.invViewProj,J,Q),Y=null,Z=1/0;for(let K of this.monsters.values()){let H=t0(G.o,G.d,[K.pos[0],K.pos[1]+2,K.pos[2]],2.2);if(H!==null&&H<Z)Z=H,Y=K.id}return Y}ray($,X,J){let Q=M.transformPoint($,[X,J,-1]),G=M.transformPoint($,[X,J,1]),Y=[Q[0]/Q[3],Q[1]/Q[3],Q[2]/Q[3]],Z=[G[0]/G[3],G[1]/G[3],G[2]/G[3]],K=[Z[0]-Y[0],Z[1]-Y[1],Z[2]-Y[2]],H=Math.hypot(...K);return{o:Y,d:[K[0]/H,K[1]/H,K[2]/H]}}start(){let $=(X)=>{this.raf=requestAnimationFrame($);let J=X/1000,Q=this.last?J-this.last:0.016666666666666666,G=Math.min(0.05,Q);this.last=J,this.time+=G,this.adaptResolution(Q),this.update(G),this.render()};this.raf=requestAnimationFrame($)}adaptResolution($){if($>0.5)return;if(this.frameEma=this.frameEma*0.92+$*0.08,this.direct||this.time-this.lastScaleCheck<1.5)return;this.lastScaleCheck=this.time;let X=0.5,J=this.quality==="high"?1:Math.min(1,1.3/Math.max(1,this.dpr)),Q=this.renderScale;if(this.frameEma>0.02631578947368421)Q=Math.max(X,this.renderScale*0.85);else if(this.frameEma<0.01818181818181818)Q=Math.min(J,this.renderScale*1.12);if(Math.abs(Q-this.renderScale)>0.01)this.renderScale=Q,this.rebuildTargets()}update($){let X=this.time;for(let J=this.timers.length-1;J>=0;J--)if(this.timers[J].at<=X){let{fn:Q}=this.timers[J];this.timers.splice(J,1),Q()}for(let J of this.monsters.values()){let Q=f((X-J.moveT0)/J.moveDur,0,1),G=Z0(Q),Y=Math.sin(Q*Math.PI)*Math.min(5,1.5+Math.hypot(J.to[0]-J.from[0],J.to[2]-J.from[2])*0.3);if(J.pos=[z(J.from[0],J.to[0],G),z(J.from[1],J.to[1],G)+(Q<1?Y:0),z(J.from[2],J.to[2],G)],Q>=1&&!J.landed)J.landed=!0,this.burst([J.to[0],J.to[1]+0.1,J.to[2]],30,[0.6,0.55,0.7],3.5,0.9,0.7,-2),this.camShake=Math.min(0.7,this.camShake+(this.lessMotion?0.08:0.25)),this.shakeNear(J.to,6),this.waves.push({p:[J.to[0],J.to[1]+0.06,J.to[2]],t0:X,dur:0.9,size:J.inCore?11:8,color:[J.accent[0],J.accent[1],J.accent[2],0.9]});let H=(Q<1?this.yawToward(J.from,J.to):J.yawTarget)-J.yaw;while(H>Math.PI)H-=Math.PI*2;while(H<-Math.PI)H+=Math.PI*2;J.yaw+=H*Math.min(1,$*6)}for(let J of this.dice)J.pos[0]=z(J.pos[0],J.target[0],Math.min(1,$*10)),J.pos[2]=z(J.pos[2],J.target[2],Math.min(1,$*10));for(let J of this.buildings)if(J.crumbleT>0&&X>=J.crumbleT){let Q=f((X-J.crumbleT)/0.7,0,1);if(J.h=z(J.h0,J.h0*0.18,i(Q)),X>J.regrowAt)J.crumbleT=-100}else if(J.h<J.h0)J.h=Math.min(J.h0,J.h+$*1.2);for(let J=this.particles.length-1;J>=0;J--){let Q=this.particles[J];if(Q.life-=$,Q.life<=0){this.particles.splice(J,1);continue}Q.v[1]+=Q.grav*$,Q.v[0]*=1-$*1.5,Q.v[2]*=1-$*1.5,Q.p[0]+=Q.v[0]*$,Q.p[1]=Math.max(0.05,Q.p[1]+Q.v[1]*$),Q.p[2]+=Q.v[2]*$}if(this.bolts=this.bolts.filter((J)=>X-J.t0<0.55),this.waves=this.waves.filter((J)=>X-J.t0<J.dur),this.camShake=Math.max(0,this.camShake-$*1.8),this.heat+=(this.heatTarget-this.heat)*Math.min(1,$*3),this.hit=Math.max(0,this.hit-$*2.2),this.focus&&X-this.focus.t0>2.2)this.focus=null}setCommon($,X=!0){$.vec3("uSunDir",a),$.vec3("uSunColor",[1.15,0.82,0.7]),$.vec3("uSkyColor",[0.42,0.32,0.62]),$.vec3("uGroundColor",[0.16,0.1,0.2]),$.vec3("uFogColor",[0.62,0.3,0.45]),$.float("uFogDensity",0.018),$.float("uTime",this.time),$.mat4("uShadowVP",this.lightVP),$.float("uShadowOn",X&&this.shadowActive?1:0),$.float("uShadowTexel",1/i0)}get shadowActive(){return this.quality==="high"&&!!this.shadow&&!this.direct}computeCamera(){let $=this.width/Math.max(1,this.height),X=this.dist*Math.max(1,0.95/$)**0.8,J=this.camShake*this.camShake,Q=this.time-this.lastInput;if(!this.lessMotion){let K=f((Q-4)/4,0,1);this.drift=[Math.sin(this.time*0.11)*0.09*K,Math.sin(this.time*0.083+1)*0.03*K]}else this.drift=[0,0];let G=this.yaw+this.drift[0],Y=f(this.pitch+this.drift[1],0.18,1.35),Z=[Math.sin(this.time*47)*J*0.3,1.2+Math.sin(this.time*53)*J*0.3,-1.5];if(this.focus){let K=f((this.time-this.focus.t0)/2.2,0,1),H=K>0?Math.sin(K*Math.PI)**2*0.32:0;Z=[z(Z[0],this.focus.p[0],H),z(Z[1],this.focus.p[1],H),z(Z[2],this.focus.p[2],H)],X*=1-H*0.35}this.camPos=[Z[0]+Math.sin(G)*Math.cos(Y)*X,Z[1]+Math.sin(Y)*X,Z[2]+Math.cos(G)*Math.cos(Y)*X],M.perspective(this.proj,46*Math.PI/180,$,0.5,220),M.lookAt(this.view,this.camPos,Z),M.multiply(this.viewProj,this.proj,this.view),M.invert(this.invViewProj,this.viewProj)}uploadInstances(){let $=this.time,X=this.buildingData;this.buildings.forEach((Q,G)=>{let Y=f(1-($-Q.shakeT)/0.5,0,1)+(Q.crumbleT>0&&$>=Q.crumbleT&&$-Q.crumbleT<0.7?1:0),Z=G*12;X[Z]=Q.x,X[Z+1]=0,X[Z+2]=Q.z,X[Z+3]=Q.yaw,X[Z+4]=Q.w,X[Z+5]=Q.h,X[Z+6]=Q.d,X[Z+7]=Q.seed;let K=Q.h<Q.h0*0.9?0.55:1;X[Z+8]=Q.color[0]*K,X[Z+9]=Q.color[1]*K,X[Z+10]=Q.color[2]*K,X[Z+11]=Y}),this.buildingMesh.setInstances(X);let J=this.carData;this.cars.forEach((Q,G)=>{let Z=((Q.phase+$*Q.speed*Q.dir)%64+64)%64-32,K=Q.axis===0?Z:Q.line+Q.lane,H=Q.axis===0?Q.line+Q.lane:Z,V=Math.hypot(K,H),W=V>5.4&&V<31&&H>e+0.6?1:0,D=Q.axis===0?Q.dir>0?Math.PI/2:-Math.PI/2:Q.dir>0?0:Math.PI,U=G*8;J[U]=K,J[U+1]=0.01,J[U+2]=H,J[U+3]=D,J[U+4]=Q.color[0],J[U+5]=Q.color[1],J[U+6]=Q.color[2],J[U+7]=W}),this.carMesh.setInstances(J)}renderShadowMap(){let $=this.gl,X=this.shadow,J=[0,0,-2],Q=[J[0]+a[0]*70,J[1]+a[1]*70,J[2]+a[2]*70];M.lookAt(this.tmp,Q,J),M.ortho(this.tmp2,-34,34,-34,34,1,150),M.multiply(this.lightVP,this.tmp2,this.tmp),$.activeTexture($.TEXTURE1),$.bindTexture($.TEXTURE_2D,this.dummyShadow.tex),$.activeTexture($.TEXTURE0),$.bindFramebuffer($.FRAMEBUFFER,X.fb),$.viewport(0,0,X.size,X.size),$.disable($.SCISSOR_TEST),$.enable($.DEPTH_TEST),$.depthMask(!0),$.disable($.BLEND),$.clear($.DEPTH_BUFFER_BIT),$.enable($.CULL_FACE),$.cullFace($.FRONT),$.enable($.POLYGON_OFFSET_FILL),$.polygonOffset(1.5,3);let G=this.progs.depthInst.use();G.mat4("uLightVP",this.lightVP),G.float("uTime",this.time),this.buildingMesh.draw();let Y=this.progs.depth.use();Y.mat4("uLightVP",this.lightVP);for(let Z of this.monsters.values())this.drawMonster(Y,Z,!0);$.disable($.POLYGON_OFFSET_FILL),$.cullFace($.BACK)}render(){let $=this.gl;if(this.computeCamera(),this.uploadInstances(),this.shadowActive)this.renderShadowMap();$.activeTexture($.TEXTURE1),$.bindTexture($.TEXTURE_2D,this.shadowActive?this.shadow.tex:this.dummyShadow.tex),$.activeTexture($.TEXTURE0);let X=this.direct?null:this.pipe,J=this.canvas.width,Q=this.canvas.height;if(X)$.bindFramebuffer($.FRAMEBUFFER,X.ms?X.ms.fb:X.scene.fb),J=X.scene.w,Q=X.scene.h;else $.bindFramebuffer($.FRAMEBUFFER,null);$.viewport(0,0,J,Q),$.disable($.SCISSOR_TEST),$.clearColor(0.07,0.05,0.14,1),$.clear($.COLOR_BUFFER_BIT|$.DEPTH_BUFFER_BIT),$.enable($.DEPTH_TEST),$.enable($.CULL_FACE),$.cullFace($.BACK),$.disable($.BLEND),$.depthMask(!1);let G=this.progs.sky.use();G.mat4("uInvViewProj",this.invViewProj),G.vec3("uSunDir",a),G.float("uTime",this.time),$.bindVertexArray(this.emptyVao),$.drawArrays($.TRIANGLES,0,3),$.depthMask(!0);let Y=this.progs.obj.use();this.setCommon(Y),Y.mat4("uViewProj",this.viewProj),Y.vec3("uCamPos",this.camPos),Y.float("uAlpha",1),Y.float("uFlash",0),Y.float("uRim",0),Y.vec3("uEmissive",[0,0,0]),Y.int("uMode",1),Y.vec3("uColor",[0.2,0.2,0.3]),Y.mat4("uModel",M.fromTRS(this.tmp,[0,0,0],P.identity(),[1,1,1])),this.meshes.ground.draw(),Y.int("uMode",2),Y.mat4("uModel",M.fromTRS(this.tmp,[0,0.3,e-35],P.identity(),[140,1,70])),this.meshes.water.draw();let Z=this.coreGlow(),K=f(1-(this.time-this.eruptT)/1.2,0,1);Y.int("uMode",3),Y.vec3("uGlow",[Z[0]*(1+K*3),Z[1]*(1+K*3),Z[2]*(1+K*3)]),Y.vec3("uColor",[0.3,0.26,0.42]),Y.mat4("uModel",M.fromTRS(this.tmp,[0,0,0],P.identity(),[3.2,0.35,3.2])),this.meshes.plaza.draw(),this.drawCoreProps(Y,Z,K);let H=this.progs.bld.use();this.setCommon(H),H.mat4("uViewProj",this.viewProj),H.vec3("uCamPos",this.camPos),this.buildingMesh.draw();let V=this.progs.car.use();this.setCommon(V),V.mat4("uViewProj",this.viewProj),V.vec3("uCamPos",this.camPos),this.carMesh.draw(),Y.use(),Y.int("uMode",0);for(let U of this.monsters.values())this.drawMonster(Y,U,!1);$.enable($.BLEND),$.blendFunc($.ONE,$.ONE_MINUS_SRC_ALPHA),$.depthMask(!1);let W=this.progs.decal.use();W.mat4("uViewProj",this.viewProj),W.float("uTime",this.time);let D=this.shadowActive?0.35:0.55;for(let U of this.monsters.values()){let C=U.inCore?U.to[1]+0.01:0.02,F=Math.max(0,U.pos[1]-C);W.int("uMode",0),W.vec4("uColor",[0,0,0,f(D-F*0.08,0.1,D)]);let L=(U.inCore?4.2:3.6)-Math.min(1.5,F*0.25);if(W.mat4("uModel",M.fromTRS(this.tmp,[U.pos[0],C+0.01,U.pos[2]],P.identity(),[L,1,L])),this.meshes.quad.draw(),U.current)W.int("uMode",1),W.vec4("uColor",[U.main[0]*1.6,U.main[1]*1.6,U.main[2]*1.6,1]),W.mat4("uModel",M.fromTRS(this.tmp,[U.pos[0],C+0.03,U.pos[2]],P.identity(),[U.inCore?5.4:4.6,1,U.inCore?5.4:4.6])),this.meshes.quad.draw()}W.int("uMode",2);for(let U of this.waves){let C=f((this.time-U.t0)/U.dur,0,1);W.float("uProgress",i(C)),W.vec4("uColor",[U.color[0]*1.5,U.color[1]*1.5,U.color[2]*1.5,U.color[3]]),W.mat4("uModel",M.fromTRS(this.tmp,U.p,P.identity(),[U.size,1,U.size])),this.meshes.quad.draw()}if($.blendFunc($.ONE,$.ONE),$.disable($.CULL_FACE),this.drawSearchlights(),this.drawBolts(),this.drawParticles(this.viewProj,Q),$.enable($.CULL_FACE),$.depthMask(!0),$.disable($.BLEND),this.emitLabels(),this.drawDice(J/Math.max(1,this.width)),X){if(X.ms)X.ms.resolveInto(X.scene);let U=this.quality==="high";if(U)this.bloom(X);this.composite(X,U)}}fullscreen($){let X=this.gl;if($)X.bindFramebuffer(X.FRAMEBUFFER,$.fb),X.viewport(0,0,$.w,$.h);else X.bindFramebuffer(X.FRAMEBUFFER,null),X.viewport(0,0,this.canvas.width,this.canvas.height);X.drawArrays(X.TRIANGLES,0,3)}bloom($){let X=this.gl;X.disable(X.DEPTH_TEST),X.disable(X.BLEND),X.disable(X.CULL_FACE),X.disable(X.SCISSOR_TEST),X.bindVertexArray(this.emptyVao),X.activeTexture(X.TEXTURE0);let J=this.progs.bright.use();J.int("uTex",0),X.bindTexture(X.TEXTURE_2D,$.scene.tex),J.vec2("uTexel",1/$.scene.w,1/$.scene.h),J.float("uThreshold",this.fmt.hdr?0.92:0.72),this.fullscreen($.bloomA);let Q=this.progs.blur.use();Q.int("uTex",0);for(let G=0;G<s0;G++)X.bindTexture(X.TEXTURE_2D,$.bloomA.tex),Q.vec2("uDir",1/$.bloomA.w,0),this.fullscreen($.bloomB),X.bindTexture(X.TEXTURE_2D,$.bloomB.tex),Q.vec2("uDir",0,1/$.bloomA.h),this.fullscreen($.bloomA);J.use(),X.bindTexture(X.TEXTURE_2D,$.bloomA.tex),J.vec2("uTexel",1/$.bloomA.w,1/$.bloomA.h),J.float("uThreshold",-1),this.fullscreen($.bloomC),Q.use();for(let G=0;G<s0;G++)X.bindTexture(X.TEXTURE_2D,$.bloomC.tex),Q.vec2("uDir",1/$.bloomC.w,0),this.fullscreen($.bloomD),X.bindTexture(X.TEXTURE_2D,$.bloomD.tex),Q.vec2("uDir",0,1/$.bloomC.h),this.fullscreen($.bloomC)}composite($,X){let J=this.gl;J.disable(J.DEPTH_TEST),J.disable(J.BLEND),J.disable(J.CULL_FACE),J.disable(J.SCISSOR_TEST),J.bindVertexArray(this.emptyVao);let Q=this.progs.composite.use();J.activeTexture(J.TEXTURE0),J.bindTexture(J.TEXTURE_2D,$.scene.tex),J.activeTexture(J.TEXTURE2),J.bindTexture(J.TEXTURE_2D,$.bloomA.tex),J.activeTexture(J.TEXTURE3),J.bindTexture(J.TEXTURE_2D,$.bloomC.tex),J.activeTexture(J.TEXTURE0),Q.vec2("uTexel",1/$.scene.w,1/$.scene.h),Q.vec2("uRes",this.canvas.width,this.canvas.height),Q.float("uBloom",X?1:0),Q.float("uHit",this.hit),Q.float("uTime",this.time),this.fullscreen(null),J.enable(J.DEPTH_TEST)}drawMonster($,X,J){let Q=this.time,G=Q-X.koT,Y=G<0||G>1.9?0:G<0.35?i(G/0.35):G<1.2?1:1-Z0((G-1.2)/0.7),Z=Y<0.5,K=Z?Math.sin(Q*2.4+X.seed)*0.03:0,H=Z&&X.current?Math.abs(Math.sin(Q*5+X.seed))*0.12:0,V=f((Q-X.lungeT)/0.6,0,1),W=V<1?Math.sin(V*Math.PI)*1.4:0,D=f(1-(Q-X.flashT)/0.45,0,1)*(Q>=X.flashT?1:0),U=D*Math.sin(Q*70)*0.12,C=X.inCore?2:1.6,F=[X.pos[0]+X.lungeDir[0]*W+U,X.pos[1]+H,X.pos[2]+X.lungeDir[2]*W],L=P.axisAngle([0,1,0],X.yaw);if(Y>0)L=P.multiply(L,P.axisAngle([1,0,0],-Y*1.45));let B=1+K,S=M.fromTRS(this.tmp2,F,L,[C/Math.sqrt(B),C*B,C/Math.sqrt(B)]),T=Y*0.6;if(!J)$.float("uRim",Z?0.55:0.1),$.float("uFlash",D*0.7);for(let A of X.parts){let k=A.rot??[0,0,0],I=P.euler(k[0],k[1],k[2]),j=A.pos,N=Z?A.anim:void 0,_=Math.sin(Q*3+X.seed)*0.25+(V<1?Math.sin(V*Math.PI)*1.2:0);if(N==="armL")I=P.multiply(P.axisAngle([1,0,0],-_),I);else if(N==="armR")I=P.multiply(P.axisAngle([1,0,0],_),I);else if(N==="tail")I=P.multiply(P.axisAngle([0,1,0],Math.sin(Q*2.2+X.seed)*0.35),I);else if(N==="wingL")I=P.multiply(P.axisAngle([0,1,0],Math.sin(Q*4+X.seed)*0.25),I);else if(N==="wingR")I=P.multiply(P.axisAngle([0,1,0],-Math.sin(Q*4+X.seed)*0.25),I);else if(N==="head"){let R=Math.sin(Q*1.7+X.seed)*0.04;j=[j[0],j[1]+R,j[2]]}let q=M.fromTRS(this.tmp3,j,I,A.scale),v=M.multiply(this.tmp,S,q);if($.mat4("uModel",v),!J){let R=A.color==="main"?X.main:A.color==="accent"?X.accent:s(A.color);if(T){let y=(R[0]+R[1]+R[2])/3;R=[z(R[0],y*0.6,T),z(R[1],y*0.6,T),z(R[2],y*0.6,T)]}$.vec3("uColor",R),$.vec3("uEmissive",A.glow&&Z?[R[0]*1.6,R[1]*1.6,R[2]*1.6]:[0,0,0])}this.meshes[A.mesh==="sphere"?"sphere":A.mesh==="box"?"box":A.mesh==="cone"?"cone":"cyl"].draw()}if(!J)$.float("uFlash",0),$.vec3("uEmissive",[0,0,0])}coreGlow(){let $=f(this.heat,0,1),X=this.coreHeld?1+Math.sin(this.time*(2+$*8))*0.15*(0.4+$):0.8,J=[0.3,0.9,1],Q=[1,0.72,0.2],G=[1,0.25,0.1],Y=$<0.5?[z(J[0],Q[0],$*2),z(J[1],Q[1],$*2),z(J[2],Q[2],$*2)]:[z(Q[0],G[0],$*2-1),z(Q[1],G[1],$*2-1),z(Q[2],G[2],$*2-1)];return[Y[0]*X,Y[1]*X,Y[2]*X]}drawCoreProps($,X,J){let Q=this.time;$.int("uMode",0),$.float("uRim",0.3);for(let Z=0;Z<m0;Z++){let K=Z/m0*Math.PI*2+Math.PI/4,H=Math.cos(K)*3.75,V=Math.sin(K)*3.75;$.vec3("uColor",[0.26,0.24,0.36]),$.vec3("uEmissive",[0,0,0]),$.mat4("uModel",M.fromTRS(this.tmp,[H,0,V],P.identity(),[0.45,1.6,0.45])),this.meshes.cyl.draw();let W=1.85+Math.sin(Q*2+Z)*0.08;$.vec3("uColor",X),$.vec3("uEmissive",[X[0]*(2+J*4),X[1]*(2+J*4),X[2]*(2+J*4)]),$.mat4("uModel",M.fromTRS(this.tmp,[H,W,V],P.identity(),[0.36,0.36,0.36])),this.meshes.sphere.draw()}if(!this.coreHeld){let Z=0.9+Math.sin(Q*2.5)*0.08;$.vec3("uColor",X),$.vec3("uEmissive",[X[0]*2.4,X[1]*2.4,X[2]*2.4]),$.mat4("uModel",M.fromTRS(this.tmp,[0,2.1+Math.sin(Q*1.6)*0.2,0],P.axisAngle([0,1,0],Q),[Z,Z,Z])),this.meshes.sphere.draw()}let G=c[1];$.vec3("uColor",[0.75,0.75,0.82]),$.vec3("uEmissive",[0,0,0]),$.mat4("uModel",M.fromTRS(this.tmp,[c[0],G,c[2]],P.identity(),[0.12,2.8,0.12])),this.meshes.cyl.draw(),$.mat4("uModel",M.fromTRS(this.tmp,[c[0]-0.55,G-1.2,c[2]+0.2],P.euler(0,0.6,1.2),[1.1,0.35,1.1])),this.meshes.sphere.draw();let Y=Math.sin(Q*3.4)>0?1:0.15;$.vec3("uColor",[1,0.2,0.2]),$.vec3("uEmissive",[3*Y,0.4*Y,0.4*Y]),$.mat4("uModel",M.fromTRS(this.tmp,[c[0],G+2.9,c[2]],P.identity(),[0.28,0.28,0.28])),this.meshes.sphere.draw(),$.vec3("uEmissive",[0,0,0]),$.float("uRim",0)}drawSearchlights(){let $=this.progs.beam.use();$.mat4("uViewProj",this.viewProj),$.vec3("uCamPos",this.camPos);let X=this.time;B$.forEach((J,Q)=>{let G=J.a0+X*J.speed+Math.sin(X*0.3+Q)*0.6,Y=1.05+0.22*Math.sin(X*0.4+Q*1.7),Z=[Math.cos(Y)*Math.cos(G),Math.sin(Y),Math.cos(Y)*Math.sin(G)],K=P0([0,1,0],Z);$.mat4("uModel",M.fromTRS(this.tmp,J.p,K,[1,38,1])),$.vec3("uColor",J.color),$.float("uIntensity",this.quality==="high"?0.3:0.22),this.meshes.beam.draw()})}drawBolts(){let $=this.gl;if(!this.bolts.length)return;let X=this.boltData,J=14,Q=this.time,G=Math.floor(Q*18),Y=this.progs.bolt.use();Y.mat4("uViewProj",this.viewProj),$.bindVertexArray(this.boltVao),$.bindBuffer($.ARRAY_BUFFER,this.boltBuf);for(let Z of this.bolts){let K=Q-Z.t0;if(K<0)continue;let H=f(K/0.1,0,1),V=K<0.1?1:f(1-(K-0.1)/0.45,0,1),W=Z.b[0]-Z.a[0],D=Z.b[1]-Z.a[1],U=Z.b[2]-Z.a[2],C=Math.hypot(W,D,U)||1,F=[W/C,D/C,U/C],L=Math.abs(F[1])>0.9?[1,0,0]:[0,1,0],B=o0(W0(F,L)),S=W0(B,F),T=[];for(let N=0;N<=J;N++){let _=N/J*H,q=Math.sin(Math.PI*(N/J)),v=(x(Z.seed+N*7.1+G*3.3)-0.5)*1.1*q,R=(x(Z.seed+N*3.7+G*5.9)-0.5)*1.1*q,y=Math.sin(Math.PI*_)*C*0.12;T.push([Z.a[0]+W*_+B[0]*v+S[0]*R,Z.a[1]+D*_+B[1]*v+S[1]*R+y,Z.a[2]+U*_+B[2]*v+S[2]*R])}let A=0,k=0.28,I=(N)=>{let _=T[N],q=T[Math.max(0,N-1)],v=T[Math.min(J,N+1)],R=[v[0]-q[0],v[1]-q[1],v[2]-q[2]],y=[this.camPos[0]-_[0],this.camPos[1]-_[1],this.camPos[2]-_[2]],O=o0(W0(R,y));return[O[0]*k,O[1]*k,O[2]*k]},j=(N,_,q,v)=>{X[A++]=N[0]+_[0]*q,X[A++]=N[1]+_[1]*q,X[A++]=N[2]+_[2]*q,X[A++]=q,X[A++]=v,X[A++]=V};for(let N=0;N<J;N++){let _=I(N),q=I(N+1);j(T[N],_,-1,N/J),j(T[N],_,1,N/J),j(T[N+1],q,1,(N+1)/J),j(T[N],_,-1,N/J),j(T[N+1],q,1,(N+1)/J),j(T[N+1],q,-1,(N+1)/J)}$.bufferSubData($.ARRAY_BUFFER,0,X,0,A),Y.vec3("uColor",Z.color),$.drawArrays($.TRIANGLES,0,A/6)}$.bindVertexArray(null)}drawParticles($,X){let J=this.gl,Q=Math.min(this.particles.length,900);if(!Q)return;let G=this.particleData;for(let Z=0;Z<Q;Z++){let K=this.particles[Z],H=K.life/K.max,V=Z*8;G[V]=K.p[0],G[V+1]=K.p[1],G[V+2]=K.p[2],G[V+3]=K.c[0],G[V+4]=K.c[1],G[V+5]=K.c[2],G[V+6]=Math.min(1,H*1.6),G[V+7]=K.size*(0.5+H*0.5)}let Y=this.progs.part.use();Y.mat4("uViewProj",$),Y.float("uScale",X*0.9),Y.float("uGain",this.pipe&&this.fmt.hdr?1.6:1),J.bindVertexArray(this.particleVao),J.bindBuffer(J.ARRAY_BUFFER,this.particleBuf),J.bufferSubData(J.ARRAY_BUFFER,0,G,0,Q*8),J.drawArrays(J.POINTS,0,Q),J.bindVertexArray(null)}emitLabels(){if(!this.onLabels)return;let $=[];for(let X of this.monsters.values()){let J=X.inCore?5.6:4.6,Q=M.transformPoint(this.viewProj,[X.pos[0],X.pos[1]+J,X.pos[2]]),G=Q[3]>0;$.push({id:X.id,x:(Q[0]/Q[3]*0.5+0.5)*this.width,y:(1-(Q[1]/Q[3]*0.5+0.5))*this.height,visible:G})}this.onLabels($)}drawDice($){let X=this.gl,J=this.diceRect;if(!this.dice.length||J.w<10||J.h<10)return;let Q=Math.floor(J.x*$),G=Math.floor((this.height-J.y-J.h)*$),Y=Math.floor(J.w*$),Z=Math.floor(J.h*$);X.viewport(Q,G,Y,Z),X.enable(X.SCISSOR_TEST),X.scissor(Q,G,Y,Z),X.clear(X.DEPTH_BUFFER_BIT);let K=J.w/J.h,H=30*Math.PI/180,W=this.dice.length*1.3/2+0.3,D=1.35,U=Math.tan(H/2),C=Math.max(W/(U*K),D/U)+1.2,F=[0,0.96,0.28],L=Math.hypot(...F),B=[0,0,-0.3];this.diceCam=[B[0]+F[0]/L*C,B[1]+F[1]/L*C,B[2]+F[2]/L*C];let S=M.lookAt(M.create(),this.diceCam,B),T=M.perspective(M.create(),H,K,0.5,60);M.multiply(this.diceViewProj,T,S),M.invert(this.diceInv,this.diceViewProj),X.enable(X.BLEND),X.blendFunc(X.ONE,X.ONE_MINUS_SRC_ALPHA),X.depthMask(!1);let A=this.progs.decal.use();A.mat4("uViewProj",this.diceViewProj),A.int("uMode",0),A.vec4("uColor",[0,0,0,0.75]),A.mat4("uModel",M.fromTRS(this.tmp,[0,-0.5,-0.3],P.identity(),[W*2.4+1.5,1,5.2])),this.meshes.quad.draw();for(let I of this.dice){let j=this.dieLift(I);if(A.vec4("uColor",[0,0,0,f(0.6-j*0.2,0.15,0.6)]),A.mat4("uModel",M.fromTRS(this.tmp,[I.pos[0],-0.49,I.pos[2]+0.1],P.identity(),[1.5,1,1.5])),this.meshes.quad.draw(),I.kept)A.int("uMode",1),A.vec4("uColor",I.locked?[1.5,0.45,0.12,0.9]:[1.3,1,0.3,0.9]),A.float("uTime",this.time),A.mat4("uModel",M.fromTRS(this.tmp,[I.pos[0],-0.48,I.pos[2]],P.identity(),[1.7,1,1.7])),this.meshes.quad.draw(),A.int("uMode",0)}X.depthMask(!0),X.disable(X.BLEND);let k=this.progs.dice.use();this.setCommon(k,!1),k.float("uFogDensity",0),k.mat4("uViewProj",this.diceViewProj),k.vec3("uCamPos",this.diceCam),this.dice.forEach((I,j)=>{let N=this.time,_=f((N-I.rollT0)/0.85,0,1),q=L$[F$[I.face]],v=P.multiply(P.axisAngle([0,1,0],I.yawJitter),q);if(I.blank)v=P.multiply(P.axisAngle([0,1,0],Math.sin(N*0.8+j)*0.3),P.euler(0.5+j*0.3,j,0.3));if(_<1){let E=(1-i(_))*I.spinTurns*Math.PI*2;v=P.multiply(P.axisAngle(I.spinAxis,E),v)}let R=this.dieLift(I),y=[I.pos[0],R,I.pos[2]],O=0.5*(I.kept?0.95:1)*(this.hoverDie===j?1.06:1);k.mat4("uModel",M.fromTRS(this.tmp,y,v,[O,O,O])),k.vec3("uBody",I.bonus?[0.2,0.1,0.42]:[0.1,0.1,0.13]),k.float("uKept",I.kept&&!I.locked?1:0),k.float("uLocked",I.locked?1:0),k.float("uHover",this.hoverDie===j&&this.diceActive?1:0),k.float("uBlank",I.blank?1:0),this.meshes.dice.draw()}),X.disable(X.SCISSOR_TEST)}dieLift($){let X=f((this.time-$.rollT0)/0.85,0,1);return(X<1?Math.abs(Math.sin(X*Math.PI*2.5))*(1-X)*2.2:0)+($.kept?0.12:0)}dispose(){cancelAnimationFrame(this.raf),this.gl.getExtension("WEBGL_lose_context")?.loseContext()}}function W0($,X){return[$[1]*X[2]-$[2]*X[1],$[2]*X[0]-$[0]*X[2],$[0]*X[1]-$[1]*X[0]]}function o0($){let X=Math.hypot($[0],$[1],$[2])||1;return[$[0]/X,$[1]/X,$[2]/X]}var L$=l.map(($)=>{let X,J=$[1];if(J>0.99)X=P.identity();else if(J<-0.99)X=P.axisAngle([1,0,0],Math.PI);else{let Y=[$[1]*0-$[2]*1,$[2]*0-$[0]*0,$[0]*1-$[1]*0],Z=1+J,K=Math.hypot(Y[0],Y[1],Y[2],Z);X=[Y[0]/K,Y[1]/K,Y[2]/K,Z/K]}let Q=P.rotate(X,$0($)),G=Math.PI-Math.atan2(Q[0],Q[2]);return P.multiply(P.axisAngle([0,1,0],G),X)});function t0($,X,J,Q){let G=[$[0]-J[0],$[1]-J[1],$[2]-J[2]],Y=G[0]*X[0]+G[1]*X[1]+G[2]*X[2],Z=G[0]*G[0]+G[1]*G[1]+G[2]*G[2]-Q*Q,K=Y*Y-Z;if(K<0)return null;let H=-Y-Math.sqrt(K);return H>0?H:null}var x$=l0(function({ui:X}){let J=n.useRef(null),Q=n.useRef(null),G=n.useRef(null),Y=n.useRef(new Map),Z=n.useRef(null),[K,H]=n.useState(null);n.useEffect(()=>{let F=Q.current,L=J.current,B;try{B=new V0(F,g.settings.quality)}catch(O){console.error(O),H(O instanceof Error?O.message:String(O));return}Z.current=B;let S=()=>{let O=L.getBoundingClientRect(),E=Math.min(window.devicePixelRatio||1,O.width<700?1.75:2);B.resize(O.width,O.height,E);let h=G.current?.getBoundingClientRect();if(h)B.diceRect={x:h.left-O.left,y:h.top-O.top,w:h.width,h:h.height}};S();let T=new ResizeObserver(S);if(T.observe(L),G.current)T.observe(G.current);B.onLabels=(O)=>{for(let E of O){let h=Y.current.get(E.id);if(!h)continue;h.style.transform=`translate(-50%, -100%) translate(${E.x.toFixed(1)}px, ${E.y.toFixed(1)}px)`,h.style.opacity=E.visible?"1":"0"}};let A=H0(()=>{let O=X.state;if(O)B.sync(O,X.viewId,X.myTurn);requestAnimationFrame(S)}),k=X.onEvent((O)=>B.event(O)),I=H0(()=>{B.setQuality(g.settings.quality),B.lessMotion=g.settings.lessMotion}),j=new Map,N=0,_=0,q=(O)=>{if(F.setPointerCapture(O.pointerId),j.set(O.pointerId,{x:O.clientX,y:O.clientY}),N=0,j.size===2){let[E,h]=[...j.values()];_=Math.hypot(E.x-h.x,E.y-h.y)}},v=(O)=>{let E=j.get(O.pointerId);if(!E)return;let h=O.clientX-E.x,m=O.clientY-E.y;if(E.x=O.clientX,E.y=O.clientY,N+=Math.abs(h)+Math.abs(m),j.size===1)B.orbit(h,m);else if(j.size===2){let[U0,F0]=[...j.values()],D0=Math.hypot(U0.x-F0.x,U0.y-F0.y);if(_>0)B.zoom(_/D0);_=D0}},R=(O)=>{let E=j.size===1&&N<8;if(j.delete(O.pointerId),j.size<2)_=0;if(E){let h=F.getBoundingClientRect(),m=B.pickMonster(O.clientX-h.left,O.clientY-h.top);if(m)X.open({kind:"player",playerId:m})}},y=(O)=>{O.preventDefault(),B.zoom(Math.exp(O.deltaY*0.001))};return F.addEventListener("pointerdown",q),F.addEventListener("pointermove",v),F.addEventListener("pointerup",R),F.addEventListener("pointercancel",R),F.addEventListener("wheel",y,{passive:!1}),()=>{T.disconnect(),A(),I(),k(),F.removeEventListener("pointerdown",q),F.removeEventListener("pointermove",v),F.removeEventListener("pointerup",R),F.removeEventListener("pointercancel",R),F.removeEventListener("wheel",y),B.dispose(),Z.current=null}},[X]);let V=X.state,W=$$(V),D=X.viewer,U=D?V.market.filter((F)=>F&&X$(V,F.id)<=D.energy).length:0,C={onPointerDown:(F)=>{let L=Z.current,B=J.current;if(!L||!B)return;let S=B.getBoundingClientRect(),T=L.pickDie(F.clientX-S.left,F.clientY-S.top);if(T>=0)X.clickDie(T)},onPointerMove:(F)=>{let L=Z.current,B=J.current;if(!L||!B||F.pointerType!=="mouse")return;let S=B.getBoundingClientRect();L.hoverDie=X.myTurn?L.pickDie(F.clientX-S.left,F.clientY-S.top):-1},onPointerLeave:()=>{if(Z.current)Z.current.hoverDie=-1}};if(K)return w("div",{className:"stage3d error3d",children:b("div",{className:"panel",children:[w("h3",{children:"3D-режим недоступен"}),b("p",{className:"muted",children:["Ваш браузер не поддерживает WebGL2 (",K,")."]}),w("button",{className:"btn go",onClick:()=>g.settings.set("mode","cards"),children:"Перейти в карточный режим"})]})});return b("div",{className:"stage3d",ref:J,children:[w("canvas",{ref:Q,className:"gl-canvas"}),w("div",{className:"labels","aria-hidden":!0,children:V.players.map((F)=>b("div",{className:`label3d${F.id===W.id?" current":""}`,style:Q$(F.monster),ref:(L)=>{if(L)Y.current.set(F.id,L);else Y.current.delete(F.id)},children:[b("b",{children:[J$(V,F.id)&&"☢ ",F.name]}),b("span",{children:["❤",F.hp,b("small",{children:["/",F.maxHp]})," ★",F.vp," ⚡",F.energy]}),w(G$,{player:F}),w(Z$,{ui:X,playerId:F.id})]},F.id))}),b("div",{className:"hud-top",children:[w("div",{className:"hud-news",children:w(V$,{ui:X})}),w("div",{className:"players-strip",children:V.players.map((F)=>w(Y$,{ui:X,player:F,compact:!0},F.id))})]}),b("div",{className:"hud-bottom",children:[w("div",{className:`dice-zone${X.myTurn&&V.phase==="roll"&&V.flags.rolled?" active":""}`,ref:G,...C,children:w("span",{className:"dice-zone-hint",children:V.phase==="roll"?X.myTurn?V.flags.rolled?`Нажмите на кубики, чтобы отложить · \uD83D\uDD25 залипают · бросков: ${V.rollsLeft}`:"Ваш выход — бросайте!":`${W.name} бросает… (${V.rollsLeft})`:V.phase==="buy"?X.myTurn?"Покупка карт":`${W.name} выбирает карты`:""})}),b("div",{className:"hud-actions",children:[b("button",{className:"btn cards-btn",onClick:()=>X.open({kind:"market"}),children:["\uD83E\uDDEC ",w("span",{className:"cards-btn-label",children:"Карты"}),X.myTurn&&V.phase==="buy"&&U>0&&w("span",{className:"badge",children:U})]}),w("div",{className:"grow",children:w(K$,{ui:X})})]})]}),b("aside",{className:"hud-side",children:[w(W$,{ui:X}),w("section",{className:"log-box",children:w(H$,{ui:X,limit:30})})]})]})});export{x$ as default};
