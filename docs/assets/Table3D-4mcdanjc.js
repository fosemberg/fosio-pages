import{A as Q$,I as G$,J as K$,K as Z$,P as Y$,a as L$,f as M$,h as H0,j as e0,l as t0,n as a0,o as g0,p as l0,s as e,t as $$,u as f,v as n,w as J$,z as X$}from"./index-6361g5yv.js";var c=L$(M$(),1);var L0=($,X)=>[$[1]*X[2]-$[2]*X[1],$[2]*X[0]-$[0]*X[2],$[0]*X[1]-$[1]*X[0]],M0=($)=>{let X=Math.hypot(...$)||1;return[$[0]/X,$[1]/X,$[2]/X]},a=[[1,0,0],[-1,0,0],[0,1,0],[0,-1,0],[0,0,1],[0,0,-1]];function g($){if(Math.abs($[1])<0.5)return[0,1,0];return $[1]>0?[0,0,-1]:[0,0,1]}function B0($=0.18,X=8){let J={positions:[],normals:[],uvs:[],faces:[],indices:[]},Q=1-$;return a.forEach((G,K)=>{let Z=g(G),Y=L0(Z,G),V=J.positions.length/3;for(let H=0;H<=X;H++)for(let W=0;W<=X;W++){let U=W/X,M=H/X,D=[G[0]+Y[0]*(2*U-1)+Z[0]*(2*M-1),G[1]+Y[1]*(2*U-1)+Z[1]*(2*M-1),G[2]+Y[2]*(2*U-1)+Z[2]*(2*M-1)],F=[Math.max(-Q,Math.min(Q,D[0])),Math.max(-Q,Math.min(Q,D[1])),Math.max(-Q,Math.min(Q,D[2]))],B=[D[0]-F[0],D[1]-F[1],D[2]-F[2]],L=Math.hypot(...B)>0.000001?M0(B):G;J.positions.push(F[0]+L[0]*$,F[1]+L[1]*$,F[2]+L[2]*$),J.normals.push(...L),J.uvs.push(U,M),J.faces.push(K)}for(let H=0;H<X;H++)for(let W=0;W<X;W++){let U=V+H*(X+1)+W;J.indices.push(U,U+1,U+X+2,U,U+X+2,U+X+1)}}),J}function l($=!1){let X={positions:[],normals:[],uvs:[],indices:[]},J=$?0.5:0;return a.forEach((Q)=>{let G=g(Q),K=L0(G,Q),Z=X.positions.length/3;for(let[Y,V]of[[-1,-1],[1,-1],[1,1],[-1,1]])X.positions.push((Q[0]+K[0]*Y+G[0]*V)*0.5,(Q[1]+K[1]*Y+G[1]*V)*0.5+J,(Q[2]+K[2]*Y+G[2]*V)*0.5),X.normals.push(...Q),X.uvs.push((Y+1)/2,(V+1)/2);X.indices.push(Z,Z+1,Z+2,Z,Z+2,Z+3)}),X}function N0($=16,X=24){let J={positions:[],normals:[],uvs:[],indices:[]};for(let Q=0;Q<=$;Q++){let G=Q/$*Math.PI;for(let K=0;K<=X;K++){let Z=K/X*Math.PI*2,Y=Math.sin(G)*Math.cos(Z),V=Math.cos(G),H=Math.sin(G)*Math.sin(Z);J.positions.push(Y*0.5,V*0.5,H*0.5),J.normals.push(Y,V,H),J.uvs.push(K/X,Q/$)}}for(let Q=0;Q<$;Q++)for(let G=0;G<X;G++){let K=Q*(X+1)+G,Z=K+X+1;J.indices.push(K,K+1,Z,Z,K+1,Z+1)}return J}function p($=0.5,X=0.5,J=20,Q=!0){let G={positions:[],normals:[],uvs:[],indices:[]},K=($-X)/1;for(let Z=0;Z<=J;Z++){let Y=Z/J*Math.PI*2,V=Math.cos(Y),H=Math.sin(Y),W=M0([V,K,H]);G.positions.push(V*$,0,H*$,V*X,1,H*X),G.normals.push(...W,...W),G.uvs.push(Z/J,0,Z/J,1)}for(let Z=0;Z<J;Z++){let Y=Z*2;G.indices.push(Y,Y+1,Y+3,Y,Y+3,Y+2)}if(Q)for(let[Z,Y,V]of[[0,$,-1],[1,X,1]]){if(Y<=0)continue;let H=G.positions.length/3;G.positions.push(0,Z,0),G.normals.push(0,V,0),G.uvs.push(0.5,0.5);for(let W=0;W<=J;W++){let U=W/J*Math.PI*2;G.positions.push(Math.cos(U)*Y,Z,Math.sin(U)*Y),G.normals.push(0,V,0),G.uvs.push(0.5+Math.cos(U)/2,0.5+Math.sin(U)/2)}for(let W=0;W<J;W++)if(V>0)G.indices.push(H,H+W+2,H+W+1);else G.indices.push(H,H+W+1,H+W+2)}return G}function $0($=1,X=1){let J={positions:[],normals:[],uvs:[],indices:[]};for(let Q=0;Q<=X;Q++)for(let G=0;G<=X;G++)J.positions.push((G/X-0.5)*$,0,(Q/X-0.5)*$),J.normals.push(0,1,0),J.uvs.push(G/X,Q/X);for(let Q=0;Q<X;Q++)for(let G=0;G<X;G++){let K=Q*(X+1)+G;J.indices.push(K,K+X+1,K+1,K+1,K+X+1,K+X+2)}return J}class y{gl;program;uniforms=new Map;attribs={};constructor($,X,J){this.gl=$;let Q=(Z,Y)=>{let V=$.createShader(Z);if($.shaderSource(V,Y),$.compileShader(V),!$.getShaderParameter(V,$.COMPILE_STATUS)){let H=$.getShaderInfoLog(V),W=Y.split(`
`).map((U,M)=>`${M+1}: ${U}`).join(`
`);throw Error(`Shader compile error: ${H}
${W}`)}return V},G=$.createProgram();if($.attachShader(G,Q($.VERTEX_SHADER,X)),$.attachShader(G,Q($.FRAGMENT_SHADER,J)),$.linkProgram(G),!$.getProgramParameter(G,$.LINK_STATUS))throw Error(`Program link error: ${$.getProgramInfoLog(G)}`);this.program=G;let K=$.getProgramParameter(G,$.ACTIVE_ATTRIBUTES);for(let Z=0;Z<K;Z++){let Y=$.getActiveAttrib(G,Z);this.attribs[Y.name]=$.getAttribLocation(G,Y.name)}}use(){return this.gl.useProgram(this.program),this}loc($){if(!this.uniforms.has($))this.uniforms.set($,this.gl.getUniformLocation(this.program,$));return this.uniforms.get($)}mat4($,X){this.gl.uniformMatrix4fv(this.loc($),!1,X)}vec3($,X){this.gl.uniform3f(this.loc($),X[0],X[1],X[2])}vec4($,X){this.gl.uniform4f(this.loc($),X[0],X[1],X[2],X[3])}vec2($,X,J){this.gl.uniform2f(this.loc($),X,J)}float($,X){this.gl.uniform1f(this.loc($),X)}int($,X){this.gl.uniform1i(this.loc($),X)}}class d{gl;vao;count;instanceBuffer=null;instanceCount=0;instanceStride=0;constructor($,X,J,Q){this.gl=$;this.vao=$.createVertexArray(),$.bindVertexArray(this.vao);let G=(Y,V,H)=>{let W=X.attribs[Y];if(W===void 0||W<0||!V)return;let U=$.createBuffer();$.bindBuffer($.ARRAY_BUFFER,U),$.bufferData($.ARRAY_BUFFER,new Float32Array(V),$.STATIC_DRAW),$.enableVertexAttribArray(W),$.vertexAttribPointer(W,H,$.FLOAT,!1,0,0)};if(G("aPos",J.positions,3),G("aNormal",J.normals,3),G("aUv",J.uvs,2),G("aFace",J.faces,1),Q){this.instanceBuffer=$.createBuffer(),$.bindBuffer($.ARRAY_BUFFER,this.instanceBuffer),this.instanceStride=Q.reduce((V,H)=>V+H.size,0);let Y=0;for(let V of Q){let H=X.attribs[V.name];if(H!==void 0&&H>=0)$.enableVertexAttribArray(H),$.vertexAttribPointer(H,V.size,$.FLOAT,!1,this.instanceStride*4,Y*4),$.vertexAttribDivisor(H,1);Y+=V.size}}let K=$.createBuffer();$.bindBuffer($.ELEMENT_ARRAY_BUFFER,K);let Z=J.positions.length/3>65535;$.bufferData($.ELEMENT_ARRAY_BUFFER,Z?new Uint32Array(J.indices):new Uint16Array(J.indices),$.STATIC_DRAW),this.indexType=Z?$.UNSIGNED_INT:$.UNSIGNED_SHORT,this.count=J.indices.length,$.bindVertexArray(null)}indexType;setInstances($){let X=this.gl;X.bindBuffer(X.ARRAY_BUFFER,this.instanceBuffer),X.bufferData(X.ARRAY_BUFFER,$,X.DYNAMIC_DRAW),this.instanceCount=$.length/this.instanceStride}draw(){let $=this.gl;if($.bindVertexArray(this.vao),this.instanceBuffer)$.drawElementsInstanced($.TRIANGLES,this.count,this.indexType,0,this.instanceCount);else $.drawElements($.TRIANGLES,this.count,this.indexType,0)}}function C0($){if($.getExtension("EXT_color_buffer_float"))return{internal:$.RGBA16F,format:$.RGBA,type:$.HALF_FLOAT,hdr:!0};return{internal:$.RGBA8,format:$.RGBA,type:$.UNSIGNED_BYTE,hdr:!1}}class m{gl;w;h;fb;tex;depth=null;ok;constructor($,X,J,Q,G){this.gl=$;this.w=X;this.h=J;if(this.tex=$.createTexture(),$.bindTexture($.TEXTURE_2D,this.tex),$.texImage2D($.TEXTURE_2D,0,Q.internal,X,J,0,Q.format,Q.type,null),$.texParameteri($.TEXTURE_2D,$.TEXTURE_MIN_FILTER,$.LINEAR),$.texParameteri($.TEXTURE_2D,$.TEXTURE_MAG_FILTER,$.LINEAR),$.texParameteri($.TEXTURE_2D,$.TEXTURE_WRAP_S,$.CLAMP_TO_EDGE),$.texParameteri($.TEXTURE_2D,$.TEXTURE_WRAP_T,$.CLAMP_TO_EDGE),this.fb=$.createFramebuffer(),$.bindFramebuffer($.FRAMEBUFFER,this.fb),$.framebufferTexture2D($.FRAMEBUFFER,$.COLOR_ATTACHMENT0,$.TEXTURE_2D,this.tex,0),G)this.depth=$.createRenderbuffer(),$.bindRenderbuffer($.RENDERBUFFER,this.depth),$.renderbufferStorage($.RENDERBUFFER,$.DEPTH_COMPONENT24,X,J),$.framebufferRenderbuffer($.FRAMEBUFFER,$.DEPTH_ATTACHMENT,$.RENDERBUFFER,this.depth);this.ok=$.checkFramebufferStatus($.FRAMEBUFFER)===$.FRAMEBUFFER_COMPLETE,$.bindFramebuffer($.FRAMEBUFFER,null),$.bindRenderbuffer($.RENDERBUFFER,null)}dispose(){let $=this.gl;if($.deleteFramebuffer(this.fb),$.deleteTexture(this.tex),this.depth)$.deleteRenderbuffer(this.depth)}}class Q0{gl;w;h;samples;fb;color;depth;ok;constructor($,X,J,Q,G){this.gl=$;this.w=X;this.h=J;this.samples=G;this.fb=$.createFramebuffer(),$.bindFramebuffer($.FRAMEBUFFER,this.fb),this.color=$.createRenderbuffer(),$.bindRenderbuffer($.RENDERBUFFER,this.color),$.renderbufferStorageMultisample($.RENDERBUFFER,G,Q.internal,X,J),$.framebufferRenderbuffer($.FRAMEBUFFER,$.COLOR_ATTACHMENT0,$.RENDERBUFFER,this.color),this.depth=$.createRenderbuffer(),$.bindRenderbuffer($.RENDERBUFFER,this.depth),$.renderbufferStorageMultisample($.RENDERBUFFER,G,$.DEPTH_COMPONENT24,X,J),$.framebufferRenderbuffer($.FRAMEBUFFER,$.DEPTH_ATTACHMENT,$.RENDERBUFFER,this.depth),this.ok=$.checkFramebufferStatus($.FRAMEBUFFER)===$.FRAMEBUFFER_COMPLETE,$.bindFramebuffer($.FRAMEBUFFER,null),$.bindRenderbuffer($.RENDERBUFFER,null)}resolveInto($){let X=this.gl;X.bindFramebuffer(X.READ_FRAMEBUFFER,this.fb),X.bindFramebuffer(X.DRAW_FRAMEBUFFER,$.fb),X.blitFramebuffer(0,0,this.w,this.h,0,0,$.w,$.h,X.COLOR_BUFFER_BIT,X.NEAREST),X.bindFramebuffer(X.READ_FRAMEBUFFER,null),X.bindFramebuffer(X.DRAW_FRAMEBUFFER,null)}dispose(){let $=this.gl;$.deleteFramebuffer(this.fb),$.deleteRenderbuffer(this.color),$.deleteRenderbuffer(this.depth)}}class J0{gl;size;fb;tex;ok;constructor($,X){this.gl=$;this.size=X;this.tex=$.createTexture(),$.bindTexture($.TEXTURE_2D,this.tex),$.texImage2D($.TEXTURE_2D,0,$.DEPTH_COMPONENT24,X,X,0,$.DEPTH_COMPONENT,$.UNSIGNED_INT,null),$.texParameteri($.TEXTURE_2D,$.TEXTURE_MIN_FILTER,$.LINEAR),$.texParameteri($.TEXTURE_2D,$.TEXTURE_MAG_FILTER,$.LINEAR),$.texParameteri($.TEXTURE_2D,$.TEXTURE_WRAP_S,$.CLAMP_TO_EDGE),$.texParameteri($.TEXTURE_2D,$.TEXTURE_WRAP_T,$.CLAMP_TO_EDGE),$.texParameteri($.TEXTURE_2D,$.TEXTURE_COMPARE_MODE,$.COMPARE_REF_TO_TEXTURE),$.texParameteri($.TEXTURE_2D,$.TEXTURE_COMPARE_FUNC,$.LEQUAL),this.fb=$.createFramebuffer(),$.bindFramebuffer($.FRAMEBUFFER,this.fb),$.framebufferTexture2D($.FRAMEBUFFER,$.DEPTH_ATTACHMENT,$.TEXTURE_2D,this.tex,0),$.drawBuffers([$.NONE]),$.readBuffer($.NONE),this.ok=$.checkFramebufferStatus($.FRAMEBUFFER)===$.FRAMEBUFFER_COMPLETE,$.bindFramebuffer($.FRAMEBUFFER,null)}dispose(){this.gl.deleteFramebuffer(this.fb),this.gl.deleteTexture(this.tex)}}var W$=new Float32Array(16),E={create(){let $=new Float32Array(16);return $[0]=$[5]=$[10]=$[15]=1,$},perspective($,X,J,Q,G){let K=1/Math.tan(X/2);return $.fill(0),$[0]=K/J,$[5]=K,$[10]=(G+Q)/(Q-G),$[11]=-1,$[14]=2*G*Q/(Q-G),$},lookAt($,X,J,Q=[0,1,0]){let G=X[0]-J[0],K=X[1]-J[1],Z=X[2]-J[2],Y=Math.hypot(G,K,Z)||1;G/=Y,K/=Y,Z/=Y;let V=Q[1]*Z-Q[2]*K,H=Q[2]*G-Q[0]*Z,W=Q[0]*K-Q[1]*G;Y=Math.hypot(V,H,W)||1,V/=Y,H/=Y,W/=Y;let U=K*W-Z*H,M=Z*V-G*W,D=G*H-K*V;return $[0]=V,$[1]=U,$[2]=G,$[3]=0,$[4]=H,$[5]=M,$[6]=K,$[7]=0,$[8]=W,$[9]=D,$[10]=Z,$[11]=0,$[12]=-(V*X[0]+H*X[1]+W*X[2]),$[13]=-(U*X[0]+M*X[1]+D*X[2]),$[14]=-(G*X[0]+K*X[1]+Z*X[2]),$[15]=1,$},multiply($,X,J){let Q=W$;for(let G=0;G<4;G++)for(let K=0;K<4;K++)Q[G*4+K]=X[K]*J[G*4]+X[4+K]*J[G*4+1]+X[8+K]*J[G*4+2]+X[12+K]*J[G*4+3];return $.set(Q),$},ortho($,X,J,Q,G,K,Z){return $.fill(0),$[0]=2/(J-X),$[5]=2/(G-Q),$[10]=-2/(Z-K),$[12]=-(J+X)/(J-X),$[13]=-(G+Q)/(G-Q),$[14]=-(Z+K)/(Z-K),$[15]=1,$},fromTRS($,X,J,Q){let[G,K,Z,Y]=J,V=G+G,H=K+K,W=Z+Z,U=G*V,M=G*H,D=G*W,F=K*H,B=K*W,L=Z*W,R=Y*V,A=Y*H,_=Y*W;return $[0]=(1-(F+L))*Q[0],$[1]=(M+_)*Q[0],$[2]=(D-A)*Q[0],$[3]=0,$[4]=(M-_)*Q[1],$[5]=(1-(U+L))*Q[1],$[6]=(B+R)*Q[1],$[7]=0,$[8]=(D+A)*Q[2],$[9]=(B-R)*Q[2],$[10]=(1-(U+F))*Q[2],$[11]=0,$[12]=X[0],$[13]=X[1],$[14]=X[2],$[15]=1,$},invert($,X){let[J,Q,G,K,Z,Y,V,H,W,U,M,D,F,B,L,R]=X,A=J*Y-Q*Z,_=J*V-G*Z,S=J*H-K*Z,I=Q*V-G*Y,T=Q*H-K*Y,C=G*H-K*V,q=W*B-U*F,k=W*L-M*F,j=W*R-D*F,w=U*L-M*B,x=U*R-D*B,N=M*R-D*L,P=A*N-_*x+S*w+I*j-T*k+C*q;if(!P)return null;return P=1/P,$[0]=(Y*N-V*x+H*w)*P,$[1]=(G*x-Q*N-K*w)*P,$[2]=(B*C-L*T+R*I)*P,$[3]=(M*T-U*C-D*I)*P,$[4]=(V*j-Z*N-H*k)*P,$[5]=(J*N-G*j+K*k)*P,$[6]=(L*S-F*C-R*_)*P,$[7]=(W*C-M*S+D*_)*P,$[8]=(Z*x-Y*j+H*q)*P,$[9]=(Q*j-J*x-K*q)*P,$[10]=(F*T-B*S+R*A)*P,$[11]=(U*S-W*T-D*A)*P,$[12]=(Y*k-Z*w-V*q)*P,$[13]=(J*w-Q*k+G*q)*P,$[14]=(B*_-F*I-L*A)*P,$[15]=(W*I-U*_+M*A)*P,$},transformPoint($,X){let[J,Q,G]=X;return[$[0]*J+$[4]*Q+$[8]*G+$[12],$[1]*J+$[5]*Q+$[9]*G+$[13],$[2]*J+$[6]*Q+$[10]*G+$[14],$[3]*J+$[7]*Q+$[11]*G+$[15]]}},O={identity(){return[0,0,0,1]},axisAngle($,X){let J=Math.hypot(...$)||1,Q=Math.sin(X/2)/J;return[$[0]*Q,$[1]*Q,$[2]*Q,Math.cos(X/2)]},multiply($,X){let[J,Q,G,K]=$,[Z,Y,V,H]=X;return[J*H+K*Z+Q*V-G*Y,Q*H+K*Y+G*Z-J*V,G*H+K*V+J*Y-Q*Z,K*H-J*Z-Q*Y-G*V]},rotate($,X){let[J,Q,G,K]=$,[Z,Y,V]=X,H=K*Z+Q*V-G*Y,W=K*Y+G*Z-J*V,U=K*V+J*Y-Q*Z,M=-J*Z-Q*Y-G*V;return[H*K+M*-J+W*-G-U*-Q,W*K+M*-Q+U*-J-H*-G,U*K+M*-G+H*-Q-W*-J]},euler($,X,J){return O.multiply(O.multiply(O.axisAngle([0,1,0],X),O.axisAngle([1,0,0],$)),O.axisAngle([0,0,1],J))},slerp($,X,J){let[Q,G,K,Z]=X,Y=$[0]*Q+$[1]*G+$[2]*K+$[3]*Z;if(Y<0)Y=-Y,Q=-Q,G=-G,K=-K,Z=-Z;let V=1-J,H=J;if(Y<0.9995){let M=Math.acos(Y),D=Math.sin(M);V=Math.sin((1-J)*M)/D,H=Math.sin(J*M)/D}let W=[$[0]*V+Q*H,$[1]*V+G*H,$[2]*V+K*H,$[3]*V+Z*H],U=Math.hypot(...W);return[W[0]/U,W[1]/U,W[2]/U,W[3]/U]}},u=($,X,J)=>$+(X-$)*J,v=($,X,J)=>Math.max(X,Math.min(J,$)),X0=($)=>1-(1-$)**3,O0=($)=>$<0.5?2*$*$:1-(-2*$+2)**2/2;function i($){let X=parseInt($.slice(1),16);return[(X>>16&255)/255,(X>>8&255)/255,(X&255)/255]}function h($){let X=Math.sin($*127.1+311.7)*43758.5453;return X-Math.floor(X)}function A0($,X){let J=$[0]*X[0]+$[1]*X[1]+$[2]*X[2];if(J<-0.9999)return[1,0,0,0];let Q=[$[1]*X[2]-$[2]*X[1],$[2]*X[0]-$[0]*X[2],$[0]*X[1]-$[1]*X[0]],G=1+J,K=Math.hypot(Q[0],Q[1],Q[2],G);return[Q[0]/K,Q[1]/K,Q[2]/K,G/K]}var b=Math.PI;function G0($,X,J=0.2,Q=0.2,G="#111118"){return[{mesh:"sphere",color:"#ffffff",pos:[-J,$,X],scale:[Q,Q,Q*0.8],anim:"head"},{mesh:"sphere",color:"#ffffff",pos:[J,$,X],scale:[Q,Q,Q*0.8],anim:"head"},{mesh:"sphere",color:G,pos:[-J,$,X+Q*0.35],scale:[Q*0.5,Q*0.55,Q*0.3],anim:"head"},{mesh:"sphere",color:G,pos:[J,$,X+Q*0.35],scale:[Q*0.5,Q*0.55,Q*0.3],anim:"head"}]}function K0($,X="main",J=0.32,Q=0.5){return[{mesh:"cyl",color:X,pos:[-$,0,0.05],scale:[J,Q,J]},{mesh:"cyl",color:X,pos:[$,0,0.05],scale:[J,Q,J]}]}var E0={kitty:[...K0(0.35),{mesh:"sphere",color:"main",pos:[0,0.95,0],scale:[1.2,1.3,1]},{mesh:"sphere",color:"#ffd1e6",pos:[0,0.9,0.3],scale:[0.75,0.9,0.5]},{mesh:"box",color:"accent",pos:[0,1.05,0.52],scale:[0.35,0.25,0.08],glow:!0},{mesh:"sphere",color:"main",pos:[0,1.9,0.08],scale:[1.05,0.88,0.92],anim:"head"},{mesh:"cone",color:"main",pos:[-0.32,2.2,0.02],rot:[0,0,0.35],scale:[0.26,0.5,0.22],anim:"head"},{mesh:"cone",color:"main",pos:[0.32,2.2,0.02],rot:[0,0,-0.35],scale:[0.26,0.5,0.22],anim:"head"},{mesh:"box",color:"accent",pos:[0,1.95,0.48],scale:[0.72,0.2,0.12],anim:"head",glow:!0},{mesh:"sphere",color:"#ff9ac7",pos:[0,1.75,0.52],scale:[0.14,0.1,0.1],anim:"head"},{mesh:"cyl",color:"main",pos:[-0.62,1.4,0.1],rot:[b,0,0.35],scale:[0.2,0.7,0.2],anim:"armL"},{mesh:"cyl",color:"main",pos:[0.62,1.4,0.1],rot:[b,0,-0.35],scale:[0.2,0.7,0.2],anim:"armR"},{mesh:"cyl",color:"accent",pos:[0,0.6,-0.45],rot:[-2.3,0,0],scale:[0.12,1.1,0.12],anim:"tail",glow:!0}],gigazaur:[...K0(0.4,"main",0.38,0.55),{mesh:"sphere",color:"main",pos:[0,1.05,0],scale:[1.15,1.6,1.1]},{mesh:"sphere",color:"accent",pos:[0,1,0.35],scale:[0.75,1.15,0.5]},{mesh:"sphere",color:"main",pos:[0,2.05,0.3],scale:[0.85,0.72,1.15],anim:"head"},{mesh:"sphere",color:"accent",pos:[0,1.85,0.62],scale:[0.62,0.3,0.72],anim:"head"},...G0(2.22,0.66,0.24,0.2),{mesh:"cone",color:"accent",pos:[0,2.3,-0.2],rot:[-0.4,0,0],scale:[0.22,0.45,0.22],anim:"head"},{mesh:"cone",color:"accent",pos:[0,1.75,-0.5],rot:[-0.7,0,0],scale:[0.24,0.5,0.24]},{mesh:"cone",color:"accent",pos:[0,1.3,-0.6],rot:[-0.9,0,0],scale:[0.24,0.5,0.24]},{mesh:"cone",color:"accent",pos:[0,0.85,-0.58],rot:[-1.1,0,0],scale:[0.22,0.45,0.22]},{mesh:"cone",color:"main",pos:[0,0.55,-0.35],rot:[-1.95,0,0],scale:[0.45,1.7,0.45],anim:"tail"},{mesh:"cyl",color:"main",pos:[-0.55,1.45,0.3],rot:[2.3,0,0.3],scale:[0.16,0.45,0.16],anim:"armL"},{mesh:"cyl",color:"main",pos:[0.55,1.45,0.3],rot:[2.3,0,-0.3],scale:[0.16,0.45,0.16],anim:"armR"}],king:[...K0(0.45,"main",0.36,0.5),{mesh:"sphere",color:"main",pos:[0,1.25,0],scale:[1.65,1.45,1.1]},{mesh:"sphere",color:"#c8956a",pos:[0,1.15,0.36],scale:[1,0.95,0.5]},{mesh:"sphere",color:"main",pos:[0,2.1,0.25],scale:[0.8,0.75,0.75],anim:"head"},{mesh:"sphere",color:"#c8956a",pos:[0,2.02,0.52],scale:[0.55,0.48,0.32],anim:"head"},...G0(2.18,0.6,0.16,0.15),{mesh:"cyl",color:"#ffd23f",pos:[0,2.4,0.2],scale:[0.32,0.22,0.32],anim:"head",glow:!0},{mesh:"cyl",color:"main",pos:[-0.95,1.75,0.1],rot:[b,0,0.22],scale:[0.36,1.45,0.36],anim:"armL"},{mesh:"cyl",color:"main",pos:[0.95,1.75,0.1],rot:[b,0,-0.22],scale:[0.36,1.45,0.36],anim:"armR"},{mesh:"sphere",color:"#5a3a1c",pos:[-1.28,0.3,0.1],scale:[0.5,0.45,0.5],anim:"armL"},{mesh:"sphere",color:"#5a3a1c",pos:[1.28,0.3,0.1],scale:[0.5,0.45,0.5],anim:"armR"}],meka:[{mesh:"box",color:"accent",pos:[-0.35,0.25,0.05],scale:[0.35,0.5,0.45]},{mesh:"box",color:"accent",pos:[0.35,0.25,0.05],scale:[0.35,0.5,0.45]},{mesh:"box",color:"main",pos:[0,1.1,0],scale:[1.2,1.3,1]},{mesh:"box",color:"accent",pos:[0,1.1,0.51],scale:[0.8,0.8,0.06]},{mesh:"sphere",color:"#ffd23f",pos:[0,1.15,0.55],scale:[0.3,0.3,0.1],glow:!0},{mesh:"box",color:"main",pos:[0,2.05,0.3],scale:[0.72,0.55,0.95],anim:"head"},{mesh:"box",color:"accent",pos:[0,1.78,0.4],scale:[0.6,0.18,0.85],anim:"head"},{mesh:"box",color:"#ffe066",pos:[-0.2,2.15,0.78],scale:[0.18,0.1,0.04],anim:"head",glow:!0},{mesh:"box",color:"#ffe066",pos:[0.2,2.15,0.78],scale:[0.18,0.1,0.04],anim:"head",glow:!0},{mesh:"cone",color:"accent",pos:[-0.25,2.3,0.05],rot:[-0.6,0,0.2],scale:[0.12,0.5,0.12],anim:"head"},{mesh:"cone",color:"accent",pos:[0.25,2.3,0.05],rot:[-0.6,0,-0.2],scale:[0.12,0.5,0.12],anim:"head"},{mesh:"box",color:"main",pos:[-0.95,1.7,-0.45],rot:[0,0.5,0.35],scale:[1.3,0.9,0.06],anim:"wingL"},{mesh:"box",color:"main",pos:[0.95,1.7,-0.45],rot:[0,-0.5,-0.35],scale:[1.3,0.9,0.06],anim:"wingR"},{mesh:"cone",color:"main",pos:[0,0.5,-0.4],rot:[-1.9,0,0],scale:[0.4,1.5,0.4],anim:"tail"},{mesh:"cyl",color:"accent",pos:[-0.72,1.55,0.1],rot:[b,0,0.3],scale:[0.2,0.75,0.2],anim:"armL"},{mesh:"cyl",color:"accent",pos:[0.72,1.55,0.1],rot:[b,0,-0.3],scale:[0.2,0.75,0.2],anim:"armR"}],penguin:[{mesh:"sphere",color:"#ff9f1c",pos:[-0.3,0.06,0.35],scale:[0.4,0.14,0.6]},{mesh:"sphere",color:"#ff9f1c",pos:[0.3,0.06,0.35],scale:[0.4,0.14,0.6]},{mesh:"sphere",color:"main",pos:[0,1.1,0],scale:[1.35,2.1,1.2]},{mesh:"sphere",color:"accent",pos:[0,0.98,0.28],scale:[0.98,1.65,0.8]},...G0(1.75,0.5,0.2,0.2),{mesh:"cone",color:"#ff9f1c",pos:[0,1.55,0.55],rot:[b/2,0,0],scale:[0.16,0.35,0.12]},{mesh:"sphere",color:"main",pos:[-0.72,1.2,0],rot:[0,0,0.45],scale:[0.22,0.95,0.5],anim:"armL"},{mesh:"sphere",color:"main",pos:[0.72,1.2,0],rot:[0,0,-0.45],scale:[0.22,0.95,0.5],anim:"armR"},{mesh:"cyl",color:"#c0c7d0",pos:[0,2.1,0],scale:[0.05,0.45,0.05],anim:"head"},{mesh:"sphere",color:"#74f0ff",pos:[0,2.58,0],scale:[0.2,0.2,0.2],anim:"head",glow:!0}],alienoid:[{mesh:"cone",color:"main",pos:[-0.35,0.55,0.2],rot:[b-0.3,0,0.3],scale:[0.18,0.6,0.18],anim:"tail"},{mesh:"cone",color:"main",pos:[0.35,0.55,0.2],rot:[b-0.3,0,-0.3],scale:[0.18,0.6,0.18],anim:"tail"},{mesh:"cone",color:"main",pos:[-0.3,0.55,-0.25],rot:[b+0.3,0,0.3],scale:[0.18,0.6,0.18],anim:"tail"},{mesh:"cone",color:"main",pos:[0.3,0.55,-0.25],rot:[b+0.3,0,-0.3],scale:[0.18,0.6,0.18],anim:"tail"},{mesh:"cyl",color:"main",pos:[0,0.45,0],scale:[1.1,1,1.1]},{mesh:"sphere",color:"main",pos:[0,2,0],scale:[1.35,1.15,1.25],anim:"head"},{mesh:"sphere",color:"accent",pos:[-0.32,2.05,0.55],scale:[0.26,0.3,0.16],anim:"head",glow:!0},{mesh:"sphere",color:"accent",pos:[0.32,2.05,0.55],scale:[0.26,0.3,0.16],anim:"head",glow:!0},{mesh:"sphere",color:"accent",pos:[0,2.38,0.5],scale:[0.2,0.22,0.14],anim:"head",glow:!0},{mesh:"sphere",color:"#1a0b2e",pos:[0,1.72,0.58],scale:[0.35,0.12,0.1],anim:"head"},{mesh:"cyl",color:"main",pos:[-0.3,2.45,0],rot:[0,0,0.4],scale:[0.05,0.55,0.05],anim:"head"},{mesh:"cyl",color:"main",pos:[0.3,2.45,0],rot:[0,0,-0.4],scale:[0.05,0.55,0.05],anim:"head"},{mesh:"sphere",color:"accent",pos:[-0.52,2.95,0],scale:[0.16,0.16,0.16],anim:"head",glow:!0},{mesh:"sphere",color:"accent",pos:[0.52,2.95,0],scale:[0.16,0.16,0.16],anim:"head",glow:!0},{mesh:"cyl",color:"main",pos:[-0.6,1.25,0.1],rot:[b,0,0.5],scale:[0.14,0.8,0.14],anim:"armL"},{mesh:"cyl",color:"main",pos:[0.6,1.25,0.1],rot:[b,0,-0.5],scale:[0.14,0.8,0.14],anim:"armR"}]};var P0=`#version 300 es
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
`,T0=`#version 300 es
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
    float r = length(vUv - 0.5) * 2.0;
    float rings = smoothstep(0.03, 0.0, abs(fract(r * 3.0 - uTime * 0.4) - 0.5) - 0.44);
    emissive += uGlow * rings * 1.1 * step(r, 1.0);
  }
  vec3 c = shade(base, n, vWorld, rimAmount) + emissive;
  c = mix(c, vec3(1.6, 0.25, 0.25), uFlash);
  outColor = vec4(applyFog(c, vWorld), alpha);
}
`,I0=`#version 300 es
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
`,R0=`#version 300 es
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
`,S0=`#version 300 es
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
`,q0=`#version 300 es
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
`,o=`#version 300 es
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
`;var k0=`#version 300 es
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
  // Mount Fuji on the far horizon, beyond the bay.
  float az = atan(dir.x, -dir.z);
  float peak = 0.075 - abs(az - 0.42) * 0.22 - pow(abs(az - 0.42), 2.0) * 0.6;
  peak = max(peak, 0.012 + 0.01 * sin(az * 9.0) + 0.006 * sin(az * 23.0));
  if (h < peak && h > -0.02) {
    float snow = smoothstep(peak - 0.02, peak - 0.012, h) * step(0.045, peak);
    vec3 m = mix(vec3(0.22, 0.12, 0.3), vec3(0.95, 0.8, 0.9), snow);
    m += vec3(1.0, 0.5, 0.35) * pow(sun, 3.0) * 0.25;
    c = mix(c, m, 0.85);
  }
  c = mix(c, vec3(0.12, 0.07, 0.2), smoothstep(0.0, -0.3, h));
  // The sun disc itself is bright enough to bloom.
  c += vec3(1.0, 0.7, 0.4) * pow(sun, 380.0) * 6.0;
  outColor = vec4(c, 1.0);
}
`,w0=`#version 300 es
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
`,f0=`#version 300 es
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
`,v0=`#version 300 es
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
`,z0=`#version 300 es
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
`,h0=`#version 300 es
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
`,x0=`#version 300 es
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
`,d0=`#version 300 es
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
`,u0=`#version 300 es
precision highp float;
layout(location = 0) in vec3 aPos;
uniform mat4 uModel;
uniform mat4 uLightVP;
void main() {
  gl_Position = uLightVP * uModel * vec4(aPos, 1.0);
}
`,b0=`#version 300 es
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
`,Z0=`#version 300 es
precision highp float;
void main() {}
`,n0=`#version 300 es
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
`,m0=`#version 300 es
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
`;var V$={"1":0,"2":1,"3":2,claw:3,energy:4,heart:5},s=(()=>{let $=[-0.45,0.55,-0.7],X=Math.hypot(...$);return[$[0]/X,$[1]/X,$[2]/X]})(),H$=[0,0.35,0],Y0=[0,0.75,-15.5],r0=10,t=-11.5,p0=2048,i0=2,U$=3072,F$=[{p:[-17,3.2,6],a0:0.3,speed:0.23,color:[1,0.82,0.72]},{p:[18,4,-3],a0:2.1,speed:-0.19,color:[0.72,0.84,1]},{p:[-6,3.5,19],a0:4,speed:0.16,color:[1,0.66,0.9]},{p:[10,5,-9.5],a0:5.2,speed:-0.27,color:[0.9,0.9,1]}];class V0{canvas;gl;progs;meshes;buildingMesh;carMesh;particleVao;particleBuf;particleData=new Float32Array(7200);boltVao;boltBuf;boltData=new Float32Array(U$*6);emptyVao;buildingData=new Float32Array(0);carData=new Float32Array(0);monsters=new Map;dice=[];buildings=[];particles=[];cars=[];bolts=[];waves=[];timers=[];seatCount=0;viewerSeat=0;viewerId=null;bayOpen=!1;cityGlow=[1,1,1];bayGlow=[1,1,1];diceActive=!0;fmt;quality="high";pipe=null;direct=!1;shadow=null;dummyShadow;lightVP=E.create();renderScale=1;frameEma=0.016666666666666666;lastScaleCheck=0;hit=0;lessMotion=!1;yaw=0;pitch=0.62;dist=27;camShake=0;camPos=[0,0,0];focus=null;lastInput=-100;drift=[0,0];view=E.create();proj=E.create();viewProj=E.create();invViewProj=E.create();diceViewProj=E.create();diceInv=E.create();diceCam=[0,0,0];width=1;height=1;dpr=1;diceRect={x:0,y:0,w:1,h:1};hoverDie=-1;time=0;last=0;raf=0;tmp=E.create();tmp2=E.create();tmp3=E.create();onLabels=null;constructor($,X="high"){this.canvas=$;let J=$.getContext("webgl2",{antialias:!1,alpha:!1,depth:!0,stencil:!1,powerPreference:"high-performance"});if(!J)throw Error("WebGL2 недоступен");this.gl=J,this.fmt=C0(J),this.progs={obj:new y(J,P0,T0),bld:new y(J,I0,j0),dice:new y(J,S0,q0),sky:new y(J,o,k0),part:new y(J,w0,f0),decal:new y(J,v0,z0),car:new y(J,R0,_0),beam:new y(J,h0,y0),bolt:new y(J,x0,d0),depth:new y(J,u0,Z0),depthInst:new y(J,b0,Z0),bright:new y(J,o,n0),blur:new y(J,o,c0),composite:new y(J,o,m0)};for(let K of[this.progs.obj,this.progs.bld,this.progs.dice,this.progs.car])K.use().int("uShadowMap",1);let Q=this.progs.composite.use();Q.int("uScene",0),Q.int("uBloom1",2),Q.int("uBloom2",3);let G=this.progs.obj;this.meshes={sphere:new d(J,G,N0(14,20)),box:new d(J,G,l()),cyl:new d(J,G,p(0.5,0.5,18)),cone:new d(J,G,p(0.5,0,18)),ground:new d(J,G,$0(140,1)),water:new d(J,G,$0(1,60)),plaza:new d(J,G,p(1,1,40)),dice:new d(J,this.progs.dice,B0(0.22,7)),quad:new d(J,this.progs.decal,$0(1,1)),beam:new d(J,this.progs.beam,p(0.1,1.9,24,!1))},this.buildingMesh=new d(J,this.progs.bld,l(!0),[{name:"iOffset",size:4},{name:"iScale",size:4},{name:"iColor",size:4}]),this.carMesh=new d(J,this.progs.car,l(!0),[{name:"iOffset",size:4},{name:"iColor",size:4}]),this.emptyVao=J.createVertexArray(),this.particleVao=J.createVertexArray(),this.particleBuf=J.createBuffer(),J.bindVertexArray(this.particleVao),J.bindBuffer(J.ARRAY_BUFFER,this.particleBuf),J.bufferData(J.ARRAY_BUFFER,this.particleData.byteLength,J.DYNAMIC_DRAW),J.enableVertexAttribArray(0),J.vertexAttribPointer(0,3,J.FLOAT,!1,32,0),J.enableVertexAttribArray(1),J.vertexAttribPointer(1,4,J.FLOAT,!1,32,12),J.enableVertexAttribArray(2),J.vertexAttribPointer(2,1,J.FLOAT,!1,32,28),this.boltVao=J.createVertexArray(),this.boltBuf=J.createBuffer(),J.bindVertexArray(this.boltVao),J.bindBuffer(J.ARRAY_BUFFER,this.boltBuf),J.bufferData(J.ARRAY_BUFFER,this.boltData.byteLength,J.DYNAMIC_DRAW),J.enableVertexAttribArray(0),J.vertexAttribPointer(0,3,J.FLOAT,!1,24,0),J.enableVertexAttribArray(1),J.vertexAttribPointer(1,3,J.FLOAT,!1,24,12),J.bindVertexArray(null),this.dummyShadow=new J0(J,1),J.bindFramebuffer(J.FRAMEBUFFER,this.dummyShadow.fb),J.clearDepth(1),J.clear(J.DEPTH_BUFFER_BIT),J.bindFramebuffer(J.FRAMEBUFFER,null),this.quality=X,this.renderScale=X==="high"?1:0.8,this.setupShadow(),this.buildCars(),this.start()}setQuality($){if($===this.quality)return;this.quality=$,this.renderScale=$==="high"?1:0.8,this.setupShadow(),this.rebuildTargets(),this.buildCars()}setupShadow(){if(this.quality==="high"&&!this.shadow){let $=new J0(this.gl,p0);if($.ok)this.shadow=$;else $.dispose()}else if(this.quality==="low"&&this.shadow)this.shadow.dispose(),this.shadow=null}maxSamples(){let $=this.gl;try{let X=$.getInternalformatParameter($.RENDERBUFFER,this.fmt.internal,$.SAMPLES);return X&&X.length?Math.max(...Array.from(X)):0}catch{return 0}}rebuildTargets(){let $=this.pipe;if($)$.scene.dispose(),$.ms?.dispose(),$.bloomA.dispose(),$.bloomB.dispose(),$.bloomC.dispose(),$.bloomD.dispose(),this.pipe=null;if(this.direct)return;let X=this.gl,J=Math.max(1,Math.round(this.canvas.width*this.renderScale)),Q=Math.max(1,Math.round(this.canvas.height*this.renderScale)),G=(Z)=>{let Y=null;{let L=Math.min(this.quality==="high"?4:2,this.maxSamples());if(L>1){if(Y=new Q0(X,J,Q,Z,L),!Y.ok)Y.dispose(),Y=null}}let V=new m(X,J,Q,Z,!Y),H=(L)=>Math.max(1,L>>1),W=(L)=>Math.max(1,L>>2),U=new m(X,H(J),H(Q),Z,!1),M=new m(X,H(J),H(Q),Z,!1),D=new m(X,W(J),W(Q),Z,!1),F=new m(X,W(J),W(Q),Z,!1),B=[V,U,M,D,F];if(B.every((L)=>L.ok))return{scene:V,ms:Y,bloomA:U,bloomB:M,bloomC:D,bloomD:F};return B.forEach((L)=>L.dispose()),Y?.dispose(),null},K=G(this.fmt);if(!K&&this.fmt.hdr)this.fmt={internal:X.RGBA8,format:X.RGBA,type:X.UNSIGNED_BYTE,hdr:!1},K=G(this.fmt);if(!K){this.direct=!0;return}this.pipe=K}sync($,X,J){let Q=$.players.length,G=Math.max(0,$.players.findIndex((U)=>U.id===X));if(this.viewerId=X,Q!==this.seatCount||G!==this.viewerSeat)this.seatCount=Q,this.viewerSeat=G,this.buildCity();this.bayOpen=$.bayOpen,this.diceActive=J;let K=$.players[$.current];$.players.forEach((U,M)=>{let D=this.monsters.get(U.id),F=this.seatPos(M),B=$.tokyo.city===U.id?"city":$.tokyo.bay===U.id?"bay":null,L=B==="city"?[...H$]:B==="bay"?[...Y0]:F;if(!D){let R=t0[U.monster];D={id:U.id,monster:U.monster,parts:E0[U.monster],main:i(R.color),accent:i(R.accent),pos:[...L],from:[...L],to:[...L],moveT0:-10,moveDur:1,yaw:0,yawTarget:0,alive:U.alive,deathT:U.alive?-10:-100,flashT:-10,lungeT:-10,lungeDir:[0,0,1],current:!1,seed:M*1.37+0.3,inTokyo:!!B,landed:!0},this.monsters.set(U.id,D)}if(D.to[0]!==L[0]||D.to[1]!==L[1]||D.to[2]!==L[2])D.from=[...D.pos],D.to=L,D.moveT0=this.time,D.moveDur=1,D.landed=!1;if(D.inTokyo=!!B,D.alive&&!U.alive)D.deathT=this.time;D.alive=U.alive,D.current=U.id===K.id&&$.phase!=="gameOver",D.yawTarget=B?this.yawToward(L,this.cameraGround()):this.yawToward(L,[0,0,0])});let Z=$.tokyo.city?this.monsters.get($.tokyo.city):null;this.cityGlow=Z?Z.main:[0.9,0.9,1];let Y=$.tokyo.bay?this.monsters.get($.tokyo.bay):null;this.bayGlow=Y?Y.main:[0.5,0.8,1];let V=$.phase==="roll"&&!$.flags.rolled;while(this.dice.length<$.dice.length)this.dice.push({face:"1",kept:!1,green:!1,blank:!0,q:O.identity(),pos:[0,0,0],target:[0,0,0],rollT0:-10,spinAxis:[1,0,0],spinTurns:0,yawJitter:0});this.dice.length=$.dice.length;let H=$.dice.length,W=1.3;$.dice.forEach((U,M)=>{let D=this.dice[M];if(D.face=U.face,D.kept=U.kept&&$.phase==="roll",D.green=U.green,D.blank&&!V)D.yawJitter=(h(M+$.turn)-0.5)*0.5;if(D.blank=V,D.target=[(M-(H-1)/2)*W,0,D.kept?-1:0.35],this.dice.length&&D.pos[0]===0&&D.pos[2]===0)D.pos=[...D.target]})}cameraGround(){return[Math.sin(this.yaw)*30,0,Math.cos(this.yaw)*30]}yawToward($,X){return Math.atan2(X[0]-$[0],X[2]-$[2])}seatPos($){let X=Math.max(1,this.seatCount),J=Math.PI/2+($-this.viewerSeat)/X*Math.PI*2,Q=Math.cos(J)*r0,G=Math.sin(J)*r0;if(G<t+2)G=t+2;return[Q,0,G]}buildCity(){let $=Array.from({length:this.seatCount},(Q,G)=>this.seatPos(G)),X=[],J=0;for(let Q=-10;Q<10;Q++)for(let G=-4;G<11;G++){let K=Q*3+1.5,Z=G*3+1.5,Y=Math.hypot(K,Z);if(Y<4.6||Y>30)continue;if(Z<t+1)continue;if($.some((W)=>Math.hypot(W[0]-K,W[2]-Z)<3.4))continue;let H=h(Q*31+G*17+5)>0.55?2:1;for(let W=0;W<H;W++){let U=h(J*7.3+W),M=H===1?1.6+U*0.5:0.95,D=H===1?1.6+h(J*3.1)*0.5:1.8,F=H===1?0:(W-0.5)*1.05,B=h(J*5.7+W),L=Y<14?0.8+B*1.4:Y<18?1.5+B*2.5:2.5+B*B*7+2*h(J*9.1),R=h(J*2.3+W),A=R<0.33?[0.28,0.24,0.42]:R<0.66?[0.36,0.3,0.38]:[0.22,0.28,0.4];X.push({x:K+F,z:Z,w:M,d:D,h0:L,h:L,yaw:0,color:A,seed:h(J*13.7+W),crumbleT:-100,regrowAt:0,shakeT:-10})}J++}X.push({x:6.5,z:-8.2,w:0.8,d:0.8,h0:10,h:10,yaw:0.785,color:[0.9,0.3,0.25],seed:0.5,crumbleT:-100,regrowAt:0,shakeT:-10}),this.buildings=X,this.buildingData=new Float32Array(X.length*12)}buildCars(){let $=this.quality==="high"?72:32,X=[[0.85,0.85,0.9],[0.12,0.12,0.15],[0.8,0.15,0.2],[0.95,0.75,0.15],[0.2,0.45,0.85],[0.9,0.9,0.3]],J=[];for(let Q=0;Q<$;Q++){let G=h(Q*3.7)>0.5?1:0,K=h(Q*5.3)>0.5?1:-1;J.push({axis:G,line:(Math.floor(h(Q*7.1)*19)-9)*3,lane:K*0.13,dir:K,speed:1.3+h(Q*9.7)*1.4,phase:h(Q*11.3)*60,color:X[Math.floor(h(Q*13.1)*X.length)]})}this.cars=J,this.carData=new Float32Array($*8)}event($){let X=this.time;switch($.type){case"roll":for(let J of $.indices){let Q=this.dice[J];if(!Q)continue;Q.rollT0=X+Math.random()*0.08;let G=[Math.random()-0.5,Math.random()-0.5,Math.random()-0.5];Q.spinAxis=G,Q.spinTurns=2+Math.random()*2,Q.yawJitter=(Math.random()-0.5)*0.5}break;case"attack":{let J=this.monsters.get($.playerId);if(!J)break;let Q=$.targets.map((H)=>this.monsters.get(H)).filter(Boolean);if(!Q.length)break;let G=Q.reduce((H,W)=>[H[0]+W.pos[0]/Q.length,0,H[2]+W.pos[2]/Q.length],[0,0,0]),K=G[0]-J.pos[0],Z=G[2]-J.pos[2],Y=Math.hypot(K,Z)||1;J.lungeDir=[K/Y,0,Z/Y],J.lungeT=X;let V=J.inTokyo?2:1.6;for(let[H,W]of Q.entries())this.bolts.push({a:[J.pos[0]+J.lungeDir[0]*0.8,J.pos[1]+1.5*V,J.pos[2]+J.lungeDir[2]*0.8],b:[W.pos[0],W.pos[1]+(W.inTokyo?3.2:2.6),W.pos[2]],t0:X+0.12+H*0.05,color:[J.accent[0]*0.5+0.5,J.accent[1]*0.5+0.3,J.accent[2]*0.5+0.4],seed:Math.random()*100});if(!this.lessMotion)this.focus={p:[(J.pos[0]+G[0])/2,1.2,(J.pos[2]+G[2])/2],t0:X};break}case"damage":{let J=this.monsters.get($.playerId);if(!J)break;let Q=$.amount,G=$.playerId===this.viewerId;this.later(0.2,()=>{if(J.flashT=this.time,this.camShake=Math.min(0.6,this.camShake+(this.lessMotion?0.05:0.15+Q*0.05)),this.burst([J.pos[0],J.pos[1]+1.4,J.pos[2]],14+Q*8,[1,0.35,0.2],5,0.9,0.5,-6),this.burst([J.pos[0],J.pos[1]+1.4,J.pos[2]],8,[1,0.9,0.5],3,0.6,0.35,-4),this.shakeNear(J.pos,5),this.waves.push({p:[J.pos[0],(J.inTokyo?J.to[1]:0)+0.05,J.pos[2]],t0:this.time,dur:0.55,size:5+Q,color:[1,0.35,0.2,0.9]}),!this.lessMotion&&(G||Q>=3))this.hit=Math.max(this.hit,G?1:0.45)});break}case"heal":{let J=this.monsters.get($.playerId);if(J)this.burst([J.pos[0],J.pos[1]+0.5,J.pos[2]],10+$.amount*5,[0.3,1,0.5],1.2,1.4,0.45,2.2);break}case"energy":{let J=this.monsters.get($.playerId);if(J)this.burst([J.pos[0],J.pos[1]+2.2,J.pos[2]],6+$.amount*3,[1,0.85,0.2],2.2,1,0.35,1);break}case"vp":{let J=this.monsters.get($.playerId);if(!J||$.amount<=0)break;this.burst([J.pos[0],J.pos[1]+2.6,J.pos[2]],6+$.amount*4,[1,0.8,0.3],2.5,1.2,0.5,0.5);for(let Q=0;Q<Math.min(3,$.amount);Q++)this.crumbleNear(J.pos,Q*0.25);break}case"enter":{let J=this.monsters.get($.playerId);if(J&&!this.lessMotion)this.focus={p:[J.to[0],1.2,J.to[2]],t0:X+0.3};break}case"leave":break;case"die":{let J=this.monsters.get($.playerId);if(J)J.deathT=X,this.burst([J.pos[0],1,J.pos[2]],60,[0.5,0.45,0.55],4,2,0.8,1),this.waves.push({p:[J.pos[0],0.06,J.pos[2]],t0:X,dur:1.2,size:12,color:[0.7,0.65,0.8,0.8]}),this.camShake=this.lessMotion?0.2:0.8;break}case"buy":{let J=this.monsters.get($.playerId);if(J)this.burst([J.pos[0],J.pos[1]+3,J.pos[2]],16,[0.5,0.8,1],2.5,1,0.3,-1);break}case"win":for(let J of $.playerIds){let Q=this.monsters.get(J);if(!Q)continue;if(!this.lessMotion)this.focus={p:[Q.pos[0],1.5,Q.pos[2]],t0:X};for(let G=0;G<6;G++)this.later(G*0.3,()=>{let K=i(["#ff3d7f","#ffd23f","#2ee59d","#74f0ff","#a855f7","#ff8a3d"][G]);this.burst([Q.pos[0]+(Math.random()-0.5)*6,6+Math.random()*3,Q.pos[2]+(Math.random()-0.5)*6],70,K,7,1.6,0.6,-3)})}break;case"turn":break}}later($,X){this.timers.push({at:this.time+$,fn:X})}burst($,X,J,Q,G,K,Z){let Y=this.quality==="high"?900:450;for(let V=0;V<X;V++){if(this.particles.length>=Y)this.particles.shift();let H=Math.random()*Math.PI*2,W=Math.acos(Math.random()*2-1),U=Q*(0.4+Math.random()*0.6);this.particles.push({p:[$[0],$[1],$[2]],v:[Math.sin(W)*Math.cos(H)*U,Math.abs(Math.cos(W))*U*0.8+(Z>0?U*0.3:0),Math.sin(W)*Math.sin(H)*U],c:[J[0]*(0.8+Math.random()*0.2),J[1]*(0.8+Math.random()*0.2),J[2]*(0.8+Math.random()*0.2)],life:G*(0.6+Math.random()*0.4),max:G,size:K*(0.6+Math.random()*0.8),grav:Z})}}shakeNear($,X){for(let J of this.buildings)if(Math.hypot(J.x-$[0],J.z-$[2])<X)J.shakeT=this.time}crumbleNear($,X){let Q=this.buildings.filter((G)=>G.h>G.h0*0.5&&G.h0<8).map((G)=>({b:G,d:Math.hypot(G.x-$[0],G.z-$[2])+Math.random()*4})).sort((G,K)=>G.d-K.d)[0]?.b;if(!Q)return;Q.crumbleT=this.time+X,Q.regrowAt=this.time+30+Math.random()*30,this.later(X,()=>{this.burst([Q.x,Q.h0*0.5,Q.z],30,[0.55,0.5,0.6],2.5,1.5,0.9,-3),this.burst([Q.x,Q.h0*0.8,Q.z],12,[1,0.5,0.2],3,0.8,0.5,-5),this.waves.push({p:[Q.x,0.05,Q.z],t0:this.time,dur:0.8,size:4,color:[0.8,0.7,0.9,0.5]})})}resize($,X,J){this.width=$,this.height=X,this.dpr=J;let Q=Math.max(1,Math.floor($*J)),G=Math.max(1,Math.floor(X*J));if(this.canvas.width===Q&&this.canvas.height===G&&(this.pipe||this.direct))return;this.canvas.width=Q,this.canvas.height=G,this.rebuildTargets()}touch(){this.yaw+=this.drift[0],this.pitch=v(this.pitch+this.drift[1],0.18,1.35),this.drift=[0,0],this.lastInput=this.time}orbit($,X){this.touch(),this.yaw-=$*0.008,this.pitch=v(this.pitch+X*0.006,0.18,1.35)}zoom($){this.touch(),this.dist=v(this.dist*$,12,48)}pickDie($,X){let J=this.diceRect;if($<J.x||$>J.x+J.w||X<J.y||X>J.y+J.h)return-1;let Q=($-J.x)/J.w*2-1,G=1-(X-J.y)/J.h*2,K=this.ray(this.diceInv,Q,G),Z=-1,Y=1/0;return this.dice.forEach((V,H)=>{let W=s0(K.o,K.d,V.pos,0.72);if(W!==null&&W<Y)Y=W,Z=H}),Z}pickMonster($,X){let J=$/this.width*2-1,Q=1-X/this.height*2,G=this.ray(this.invViewProj,J,Q),K=null,Z=1/0;for(let Y of this.monsters.values()){let V=s0(G.o,G.d,[Y.pos[0],Y.pos[1]+2,Y.pos[2]],2.2);if(V!==null&&V<Z)Z=V,K=Y.id}return K}ray($,X,J){let Q=E.transformPoint($,[X,J,-1]),G=E.transformPoint($,[X,J,1]),K=[Q[0]/Q[3],Q[1]/Q[3],Q[2]/Q[3]],Z=[G[0]/G[3],G[1]/G[3],G[2]/G[3]],Y=[Z[0]-K[0],Z[1]-K[1],Z[2]-K[2]],V=Math.hypot(...Y);return{o:K,d:[Y[0]/V,Y[1]/V,Y[2]/V]}}start(){let $=(X)=>{this.raf=requestAnimationFrame($);let J=X/1000,Q=this.last?J-this.last:0.016666666666666666,G=Math.min(0.05,Q);this.last=J,this.time+=G,this.adaptResolution(Q),this.update(G),this.render()};this.raf=requestAnimationFrame($)}adaptResolution($){if($>0.5)return;if(this.frameEma=this.frameEma*0.92+$*0.08,this.direct||this.time-this.lastScaleCheck<1.5)return;this.lastScaleCheck=this.time;let X=0.5,J=this.quality==="high"?1:Math.min(1,1.3/Math.max(1,this.dpr)),Q=this.renderScale;if(this.frameEma>0.02631578947368421)Q=Math.max(X,this.renderScale*0.85);else if(this.frameEma<0.01818181818181818)Q=Math.min(J,this.renderScale*1.12);if(Math.abs(Q-this.renderScale)>0.01)this.renderScale=Q,this.rebuildTargets()}update($){let X=this.time;for(let J=this.timers.length-1;J>=0;J--)if(this.timers[J].at<=X){let{fn:Q}=this.timers[J];this.timers.splice(J,1),Q()}for(let J of this.monsters.values()){let Q=v((X-J.moveT0)/J.moveDur,0,1),G=O0(Q),K=Math.sin(Q*Math.PI)*Math.min(5,1.5+Math.hypot(J.to[0]-J.from[0],J.to[2]-J.from[2])*0.3);if(J.pos=[u(J.from[0],J.to[0],G),u(J.from[1],J.to[1],G)+(Q<1?K:0),u(J.from[2],J.to[2],G)],Q>=1&&!J.landed)J.landed=!0,this.burst([J.to[0],J.to[1]+0.1,J.to[2]],30,[0.6,0.55,0.7],3.5,0.9,0.7,-2),this.camShake=Math.min(0.7,this.camShake+(this.lessMotion?0.08:0.25)),this.shakeNear(J.to,6),this.waves.push({p:[J.to[0],J.to[1]+0.06,J.to[2]],t0:X,dur:0.9,size:J.inTokyo?11:8,color:[J.accent[0],J.accent[1],J.accent[2],0.9]});let V=(Q<1?this.yawToward(J.from,J.to):J.yawTarget)-J.yaw;while(V>Math.PI)V-=Math.PI*2;while(V<-Math.PI)V+=Math.PI*2;J.yaw+=V*Math.min(1,$*6)}for(let J of this.dice)J.pos[0]=u(J.pos[0],J.target[0],Math.min(1,$*10)),J.pos[2]=u(J.pos[2],J.target[2],Math.min(1,$*10));for(let J of this.buildings)if(J.crumbleT>0&&X>=J.crumbleT){let Q=v((X-J.crumbleT)/0.7,0,1);if(J.h=u(J.h0,J.h0*0.18,X0(Q)),X>J.regrowAt)J.crumbleT=-100}else if(J.h<J.h0)J.h=Math.min(J.h0,J.h+$*1.2);for(let J=this.particles.length-1;J>=0;J--){let Q=this.particles[J];if(Q.life-=$,Q.life<=0){this.particles.splice(J,1);continue}Q.v[1]+=Q.grav*$,Q.v[0]*=1-$*1.5,Q.v[2]*=1-$*1.5,Q.p[0]+=Q.v[0]*$,Q.p[1]=Math.max(0.05,Q.p[1]+Q.v[1]*$),Q.p[2]+=Q.v[2]*$}if(this.bolts=this.bolts.filter((J)=>X-J.t0<0.55),this.waves=this.waves.filter((J)=>X-J.t0<J.dur),this.camShake=Math.max(0,this.camShake-$*1.8),this.hit=Math.max(0,this.hit-$*2.2),this.focus&&X-this.focus.t0>2.2)this.focus=null}setCommon($,X=!0){$.vec3("uSunDir",s),$.vec3("uSunColor",[1.15,0.82,0.7]),$.vec3("uSkyColor",[0.42,0.32,0.62]),$.vec3("uGroundColor",[0.16,0.1,0.2]),$.vec3("uFogColor",[0.62,0.3,0.45]),$.float("uFogDensity",0.018),$.float("uTime",this.time),$.mat4("uShadowVP",this.lightVP),$.float("uShadowOn",X&&this.shadowActive?1:0),$.float("uShadowTexel",1/p0)}get shadowActive(){return this.quality==="high"&&!!this.shadow&&!this.direct}computeCamera(){let $=this.width/Math.max(1,this.height),X=this.dist*Math.max(1,0.95/$)**0.8,J=this.camShake*this.camShake,Q=this.time-this.lastInput;if(!this.lessMotion){let Y=v((Q-4)/4,0,1);this.drift=[Math.sin(this.time*0.11)*0.09*Y,Math.sin(this.time*0.083+1)*0.03*Y]}else this.drift=[0,0];let G=this.yaw+this.drift[0],K=v(this.pitch+this.drift[1],0.18,1.35),Z=[Math.sin(this.time*47)*J*0.3,1.2+Math.sin(this.time*53)*J*0.3,-1.5];if(this.focus){let Y=v((this.time-this.focus.t0)/2.2,0,1),V=Y>0?Math.sin(Y*Math.PI)**2*0.32:0;Z=[u(Z[0],this.focus.p[0],V),u(Z[1],this.focus.p[1],V),u(Z[2],this.focus.p[2],V)],X*=1-V*0.35}this.camPos=[Z[0]+Math.sin(G)*Math.cos(K)*X,Z[1]+Math.sin(K)*X,Z[2]+Math.cos(G)*Math.cos(K)*X],E.perspective(this.proj,46*Math.PI/180,$,0.5,220),E.lookAt(this.view,this.camPos,Z),E.multiply(this.viewProj,this.proj,this.view),E.invert(this.invViewProj,this.viewProj)}uploadInstances(){let $=this.time,X=this.buildingData;this.buildings.forEach((Q,G)=>{let K=v(1-($-Q.shakeT)/0.5,0,1)+(Q.crumbleT>0&&$>=Q.crumbleT&&$-Q.crumbleT<0.7?1:0),Z=G*12;X[Z]=Q.x,X[Z+1]=0,X[Z+2]=Q.z,X[Z+3]=Q.yaw,X[Z+4]=Q.w,X[Z+5]=Q.h,X[Z+6]=Q.d,X[Z+7]=Q.seed;let Y=Q.h<Q.h0*0.9?0.55:1;X[Z+8]=Q.color[0]*Y,X[Z+9]=Q.color[1]*Y,X[Z+10]=Q.color[2]*Y,X[Z+11]=K}),this.buildingMesh.setInstances(X);let J=this.carData;this.cars.forEach((Q,G)=>{let Z=((Q.phase+$*Q.speed*Q.dir)%64+64)%64-32,Y=Q.axis===0?Z:Q.line+Q.lane,V=Q.axis===0?Q.line+Q.lane:Z,H=Math.hypot(Y,V),W=H>5.4&&H<31&&V>t+0.6?1:0,U=Q.axis===0?Q.dir>0?Math.PI/2:-Math.PI/2:Q.dir>0?0:Math.PI,M=G*8;J[M]=Y,J[M+1]=0.01,J[M+2]=V,J[M+3]=U,J[M+4]=Q.color[0],J[M+5]=Q.color[1],J[M+6]=Q.color[2],J[M+7]=W}),this.carMesh.setInstances(J)}renderShadowMap(){let $=this.gl,X=this.shadow,J=[0,0,-2],Q=[J[0]+s[0]*70,J[1]+s[1]*70,J[2]+s[2]*70];E.lookAt(this.tmp,Q,J),E.ortho(this.tmp2,-34,34,-34,34,1,150),E.multiply(this.lightVP,this.tmp2,this.tmp),$.activeTexture($.TEXTURE1),$.bindTexture($.TEXTURE_2D,this.dummyShadow.tex),$.activeTexture($.TEXTURE0),$.bindFramebuffer($.FRAMEBUFFER,X.fb),$.viewport(0,0,X.size,X.size),$.disable($.SCISSOR_TEST),$.enable($.DEPTH_TEST),$.depthMask(!0),$.disable($.BLEND),$.clear($.DEPTH_BUFFER_BIT),$.enable($.CULL_FACE),$.cullFace($.FRONT),$.enable($.POLYGON_OFFSET_FILL),$.polygonOffset(1.5,3);let G=this.progs.depthInst.use();G.mat4("uLightVP",this.lightVP),G.float("uTime",this.time),this.buildingMesh.draw();let K=this.progs.depth.use();K.mat4("uLightVP",this.lightVP);for(let Z of this.monsters.values())this.drawMonster(K,Z,!0);$.disable($.POLYGON_OFFSET_FILL),$.cullFace($.BACK)}render(){let $=this.gl;if(this.computeCamera(),this.uploadInstances(),this.shadowActive)this.renderShadowMap();$.activeTexture($.TEXTURE1),$.bindTexture($.TEXTURE_2D,this.shadowActive?this.shadow.tex:this.dummyShadow.tex),$.activeTexture($.TEXTURE0);let X=this.direct?null:this.pipe,J=this.canvas.width,Q=this.canvas.height;if(X)$.bindFramebuffer($.FRAMEBUFFER,X.ms?X.ms.fb:X.scene.fb),J=X.scene.w,Q=X.scene.h;else $.bindFramebuffer($.FRAMEBUFFER,null);$.viewport(0,0,J,Q),$.disable($.SCISSOR_TEST),$.clearColor(0.07,0.05,0.14,1),$.clear($.COLOR_BUFFER_BIT|$.DEPTH_BUFFER_BIT),$.enable($.DEPTH_TEST),$.enable($.CULL_FACE),$.cullFace($.BACK),$.disable($.BLEND),$.depthMask(!1);let G=this.progs.sky.use();G.mat4("uInvViewProj",this.invViewProj),G.vec3("uSunDir",s),G.float("uTime",this.time),$.bindVertexArray(this.emptyVao),$.drawArrays($.TRIANGLES,0,3),$.depthMask(!0);let K=this.progs.obj.use();if(this.setCommon(K),K.mat4("uViewProj",this.viewProj),K.vec3("uCamPos",this.camPos),K.float("uAlpha",1),K.float("uFlash",0),K.float("uRim",0),K.vec3("uEmissive",[0,0,0]),K.int("uMode",1),K.vec3("uColor",[0.2,0.2,0.3]),K.mat4("uModel",E.fromTRS(this.tmp,[0,0,0],O.identity(),[1,1,1])),this.meshes.ground.draw(),K.int("uMode",2),K.mat4("uModel",E.fromTRS(this.tmp,[0,0.3,t-35],O.identity(),[140,1,70])),this.meshes.water.draw(),K.int("uMode",3),K.vec3("uGlow",this.cityGlow),K.vec3("uColor",[0.3,0.26,0.42]),K.mat4("uModel",E.fromTRS(this.tmp,[0,0,0],O.identity(),[3.2,0.35,3.2])),this.meshes.plaza.draw(),this.bayOpen)K.vec3("uGlow",this.bayGlow),K.vec3("uColor",[0.25,0.3,0.45]),K.mat4("uModel",E.fromTRS(this.tmp,[Y0[0],0,Y0[2]],O.identity(),[2.6,0.75,2.6])),this.meshes.plaza.draw();let Z=this.progs.bld.use();this.setCommon(Z),Z.mat4("uViewProj",this.viewProj),Z.vec3("uCamPos",this.camPos),this.buildingMesh.draw();let Y=this.progs.car.use();this.setCommon(Y),Y.mat4("uViewProj",this.viewProj),Y.vec3("uCamPos",this.camPos),this.carMesh.draw(),K.use(),K.int("uMode",0);for(let W of this.monsters.values())this.drawMonster(K,W,!1);$.enable($.BLEND),$.blendFunc($.ONE,$.ONE_MINUS_SRC_ALPHA),$.depthMask(!1);let V=this.progs.decal.use();V.mat4("uViewProj",this.viewProj),V.float("uTime",this.time);let H=this.shadowActive?0.35:0.55;for(let W of this.monsters.values()){let U=W.inTokyo?W.to[1]+0.01:0.02,M=Math.max(0,W.pos[1]-U);V.int("uMode",0),V.vec4("uColor",[0,0,0,v(H-M*0.08,0.1,H)]);let D=(W.inTokyo?4.2:3.6)-Math.min(1.5,M*0.25);if(V.mat4("uModel",E.fromTRS(this.tmp,[W.pos[0],U+0.01,W.pos[2]],O.identity(),[D,1,D])),this.meshes.quad.draw(),W.current)V.int("uMode",1),V.vec4("uColor",[W.main[0]*1.6,W.main[1]*1.6,W.main[2]*1.6,1]),V.mat4("uModel",E.fromTRS(this.tmp,[W.pos[0],U+0.03,W.pos[2]],O.identity(),[W.inTokyo?5.4:4.6,1,W.inTokyo?5.4:4.6])),this.meshes.quad.draw()}V.int("uMode",2);for(let W of this.waves){let U=v((this.time-W.t0)/W.dur,0,1);V.float("uProgress",X0(U)),V.vec4("uColor",[W.color[0]*1.5,W.color[1]*1.5,W.color[2]*1.5,W.color[3]]),V.mat4("uModel",E.fromTRS(this.tmp,W.p,O.identity(),[W.size,1,W.size])),this.meshes.quad.draw()}if($.blendFunc($.ONE,$.ONE),$.disable($.CULL_FACE),this.drawSearchlights(),this.drawBolts(),this.drawParticles(this.viewProj,Q),$.enable($.CULL_FACE),$.depthMask(!0),$.disable($.BLEND),this.emitLabels(),this.drawDice(J/Math.max(1,this.width)),X){if(X.ms)X.ms.resolveInto(X.scene);let W=this.quality==="high";if(W)this.bloom(X);this.composite(X,W)}}fullscreen($){let X=this.gl;if($)X.bindFramebuffer(X.FRAMEBUFFER,$.fb),X.viewport(0,0,$.w,$.h);else X.bindFramebuffer(X.FRAMEBUFFER,null),X.viewport(0,0,this.canvas.width,this.canvas.height);X.drawArrays(X.TRIANGLES,0,3)}bloom($){let X=this.gl;X.disable(X.DEPTH_TEST),X.disable(X.BLEND),X.disable(X.CULL_FACE),X.disable(X.SCISSOR_TEST),X.bindVertexArray(this.emptyVao),X.activeTexture(X.TEXTURE0);let J=this.progs.bright.use();J.int("uTex",0),X.bindTexture(X.TEXTURE_2D,$.scene.tex),J.vec2("uTexel",1/$.scene.w,1/$.scene.h),J.float("uThreshold",this.fmt.hdr?0.92:0.72),this.fullscreen($.bloomA);let Q=this.progs.blur.use();Q.int("uTex",0);for(let G=0;G<i0;G++)X.bindTexture(X.TEXTURE_2D,$.bloomA.tex),Q.vec2("uDir",1/$.bloomA.w,0),this.fullscreen($.bloomB),X.bindTexture(X.TEXTURE_2D,$.bloomB.tex),Q.vec2("uDir",0,1/$.bloomA.h),this.fullscreen($.bloomA);J.use(),X.bindTexture(X.TEXTURE_2D,$.bloomA.tex),J.vec2("uTexel",1/$.bloomA.w,1/$.bloomA.h),J.float("uThreshold",-1),this.fullscreen($.bloomC),Q.use();for(let G=0;G<i0;G++)X.bindTexture(X.TEXTURE_2D,$.bloomC.tex),Q.vec2("uDir",1/$.bloomC.w,0),this.fullscreen($.bloomD),X.bindTexture(X.TEXTURE_2D,$.bloomD.tex),Q.vec2("uDir",0,1/$.bloomC.h),this.fullscreen($.bloomC)}composite($,X){let J=this.gl;J.disable(J.DEPTH_TEST),J.disable(J.BLEND),J.disable(J.CULL_FACE),J.disable(J.SCISSOR_TEST),J.bindVertexArray(this.emptyVao);let Q=this.progs.composite.use();J.activeTexture(J.TEXTURE0),J.bindTexture(J.TEXTURE_2D,$.scene.tex),J.activeTexture(J.TEXTURE2),J.bindTexture(J.TEXTURE_2D,$.bloomA.tex),J.activeTexture(J.TEXTURE3),J.bindTexture(J.TEXTURE_2D,$.bloomC.tex),J.activeTexture(J.TEXTURE0),Q.vec2("uTexel",1/$.scene.w,1/$.scene.h),Q.vec2("uRes",this.canvas.width,this.canvas.height),Q.float("uBloom",X?1:0),Q.float("uHit",this.hit),Q.float("uTime",this.time),this.fullscreen(null),J.enable(J.DEPTH_TEST)}drawMonster($,X,J){let Q=this.time,G=X.alive,K=G?0:v((Q-X.deathT)/0.9,0,1),Z=G?Math.sin(Q*2.4+X.seed)*0.03:0,Y=G&&X.current?Math.abs(Math.sin(Q*5+X.seed))*0.12:0,V=v((Q-X.lungeT)/0.6,0,1),H=V<1?Math.sin(V*Math.PI)*1.4:0,W=v(1-(Q-X.flashT)/0.45,0,1)*(Q>=X.flashT?1:0),U=W*Math.sin(Q*70)*0.12,M=X.inTokyo?2:1.6,D=[X.pos[0]+X.lungeDir[0]*H+U,X.pos[1]+Y,X.pos[2]+X.lungeDir[2]*H],F=O.axisAngle([0,1,0],X.yaw);if(K>0)F=O.multiply(F,O.axisAngle([1,0,0],-K*1.45));let B=1+Z,L=E.fromTRS(this.tmp2,D,F,[M/Math.sqrt(B),M*B,M/Math.sqrt(B)]),R=G?0:0.75;if(!J)$.float("uRim",G?0.55:0.1),$.float("uFlash",W*0.7);for(let A of X.parts){let _=A.rot??[0,0,0],S=O.euler(_[0],_[1],_[2]),I=A.pos,T=G?A.anim:void 0,C=Math.sin(Q*3+X.seed)*0.25+(V<1?Math.sin(V*Math.PI)*1.2:0);if(T==="armL")S=O.multiply(O.axisAngle([1,0,0],-C),S);else if(T==="armR")S=O.multiply(O.axisAngle([1,0,0],C),S);else if(T==="tail")S=O.multiply(O.axisAngle([0,1,0],Math.sin(Q*2.2+X.seed)*0.35),S);else if(T==="wingL")S=O.multiply(O.axisAngle([0,1,0],Math.sin(Q*4+X.seed)*0.25),S);else if(T==="wingR")S=O.multiply(O.axisAngle([0,1,0],-Math.sin(Q*4+X.seed)*0.25),S);else if(T==="head"){let j=Math.sin(Q*1.7+X.seed)*0.04;I=[I[0],I[1]+j,I[2]]}let q=E.fromTRS(this.tmp3,I,S,A.scale),k=E.multiply(this.tmp,L,q);if($.mat4("uModel",k),!J){let j=A.color==="main"?X.main:A.color==="accent"?X.accent:i(A.color);if(R){let w=(j[0]+j[1]+j[2])/3;j=[u(j[0],w*0.6,R),u(j[1],w*0.6,R),u(j[2],w*0.6,R)]}$.vec3("uColor",j),$.vec3("uEmissive",A.glow&&G?[j[0]*1.6,j[1]*1.6,j[2]*1.6]:[0,0,0])}this.meshes[A.mesh==="sphere"?"sphere":A.mesh==="box"?"box":A.mesh==="cone"?"cone":"cyl"].draw()}if(!J)$.float("uFlash",0),$.vec3("uEmissive",[0,0,0])}drawSearchlights(){let $=this.progs.beam.use();$.mat4("uViewProj",this.viewProj),$.vec3("uCamPos",this.camPos);let X=this.time;F$.forEach((J,Q)=>{let G=J.a0+X*J.speed+Math.sin(X*0.3+Q)*0.6,K=1.05+0.22*Math.sin(X*0.4+Q*1.7),Z=[Math.cos(K)*Math.cos(G),Math.sin(K),Math.cos(K)*Math.sin(G)],Y=A0([0,1,0],Z);$.mat4("uModel",E.fromTRS(this.tmp,J.p,Y,[1,38,1])),$.vec3("uColor",J.color),$.float("uIntensity",this.quality==="high"?0.3:0.22),this.meshes.beam.draw()})}drawBolts(){let $=this.gl;if(!this.bolts.length)return;let X=this.boltData,J=14,Q=this.time,G=Math.floor(Q*18),K=this.progs.bolt.use();K.mat4("uViewProj",this.viewProj),$.bindVertexArray(this.boltVao),$.bindBuffer($.ARRAY_BUFFER,this.boltBuf);for(let Z of this.bolts){let Y=Q-Z.t0;if(Y<0)continue;let V=v(Y/0.1,0,1),H=Y<0.1?1:v(1-(Y-0.1)/0.45,0,1),W=Z.b[0]-Z.a[0],U=Z.b[1]-Z.a[1],M=Z.b[2]-Z.a[2],D=Math.hypot(W,U,M)||1,F=[W/D,U/D,M/D],B=Math.abs(F[1])>0.9?[1,0,0]:[0,1,0],L=o0(W0(F,B)),R=W0(L,F),A=[];for(let C=0;C<=J;C++){let q=C/J*V,k=Math.sin(Math.PI*(C/J)),j=(h(Z.seed+C*7.1+G*3.3)-0.5)*1.1*k,w=(h(Z.seed+C*3.7+G*5.9)-0.5)*1.1*k,x=Math.sin(Math.PI*q)*D*0.12;A.push([Z.a[0]+W*q+L[0]*j+R[0]*w,Z.a[1]+U*q+L[1]*j+R[1]*w+x,Z.a[2]+M*q+L[2]*j+R[2]*w])}let _=0,S=0.28,I=(C)=>{let q=A[C],k=A[Math.max(0,C-1)],j=A[Math.min(J,C+1)],w=[j[0]-k[0],j[1]-k[1],j[2]-k[2]],x=[this.camPos[0]-q[0],this.camPos[1]-q[1],this.camPos[2]-q[2]],N=o0(W0(w,x));return[N[0]*S,N[1]*S,N[2]*S]},T=(C,q,k,j)=>{X[_++]=C[0]+q[0]*k,X[_++]=C[1]+q[1]*k,X[_++]=C[2]+q[2]*k,X[_++]=k,X[_++]=j,X[_++]=H};for(let C=0;C<J;C++){let q=I(C),k=I(C+1);T(A[C],q,-1,C/J),T(A[C],q,1,C/J),T(A[C+1],k,1,(C+1)/J),T(A[C],q,-1,C/J),T(A[C+1],k,1,(C+1)/J),T(A[C+1],k,-1,(C+1)/J)}$.bufferSubData($.ARRAY_BUFFER,0,X,0,_),K.vec3("uColor",Z.color),$.drawArrays($.TRIANGLES,0,_/6)}$.bindVertexArray(null)}drawParticles($,X){let J=this.gl,Q=Math.min(this.particles.length,900);if(!Q)return;let G=this.particleData;for(let Z=0;Z<Q;Z++){let Y=this.particles[Z],V=Y.life/Y.max,H=Z*8;G[H]=Y.p[0],G[H+1]=Y.p[1],G[H+2]=Y.p[2],G[H+3]=Y.c[0],G[H+4]=Y.c[1],G[H+5]=Y.c[2],G[H+6]=Math.min(1,V*1.6),G[H+7]=Y.size*(0.5+V*0.5)}let K=this.progs.part.use();K.mat4("uViewProj",$),K.float("uScale",X*0.9),K.float("uGain",this.pipe&&this.fmt.hdr?1.6:1),J.bindVertexArray(this.particleVao),J.bindBuffer(J.ARRAY_BUFFER,this.particleBuf),J.bufferSubData(J.ARRAY_BUFFER,0,G,0,Q*8),J.drawArrays(J.POINTS,0,Q),J.bindVertexArray(null)}emitLabels(){if(!this.onLabels)return;let $=[];for(let X of this.monsters.values()){let J=X.inTokyo?5.6:4.6,Q=E.transformPoint(this.viewProj,[X.pos[0],X.pos[1]+J,X.pos[2]]),G=Q[3]>0;$.push({id:X.id,x:(Q[0]/Q[3]*0.5+0.5)*this.width,y:(1-(Q[1]/Q[3]*0.5+0.5))*this.height,visible:G})}this.onLabels($)}drawDice($){let X=this.gl,J=this.diceRect;if(!this.dice.length||J.w<10||J.h<10)return;let Q=Math.floor(J.x*$),G=Math.floor((this.height-J.y-J.h)*$),K=Math.floor(J.w*$),Z=Math.floor(J.h*$);X.viewport(Q,G,K,Z),X.enable(X.SCISSOR_TEST),X.scissor(Q,G,K,Z),X.clear(X.DEPTH_BUFFER_BIT);let Y=J.w/J.h,V=30*Math.PI/180,W=this.dice.length*1.3/2+0.3,U=1.35,M=Math.tan(V/2),D=Math.max(W/(M*Y),U/M)+1.2,F=[0,0.96,0.28],B=Math.hypot(...F),L=[0,0,-0.3];this.diceCam=[L[0]+F[0]/B*D,L[1]+F[1]/B*D,L[2]+F[2]/B*D];let R=E.lookAt(E.create(),this.diceCam,L),A=E.perspective(E.create(),V,Y,0.5,60);E.multiply(this.diceViewProj,A,R),E.invert(this.diceInv,this.diceViewProj),X.enable(X.BLEND),X.blendFunc(X.ONE,X.ONE_MINUS_SRC_ALPHA),X.depthMask(!1);let _=this.progs.decal.use();_.mat4("uViewProj",this.diceViewProj),_.int("uMode",0),_.vec4("uColor",[0,0,0,0.75]),_.mat4("uModel",E.fromTRS(this.tmp,[0,-0.5,-0.3],O.identity(),[W*2.4+1.5,1,5.2])),this.meshes.quad.draw();for(let I of this.dice){let T=this.dieLift(I);if(_.vec4("uColor",[0,0,0,v(0.6-T*0.2,0.15,0.6)]),_.mat4("uModel",E.fromTRS(this.tmp,[I.pos[0],-0.49,I.pos[2]+0.1],O.identity(),[1.5,1,1.5])),this.meshes.quad.draw(),I.kept)_.int("uMode",1),_.vec4("uColor",[1.3,1,0.3,0.9]),_.float("uTime",this.time),_.mat4("uModel",E.fromTRS(this.tmp,[I.pos[0],-0.48,I.pos[2]],O.identity(),[1.7,1,1.7])),this.meshes.quad.draw(),_.int("uMode",0)}X.depthMask(!0),X.disable(X.BLEND);let S=this.progs.dice.use();this.setCommon(S,!1),S.float("uFogDensity",0),S.mat4("uViewProj",this.diceViewProj),S.vec3("uCamPos",this.diceCam),this.dice.forEach((I,T)=>{let C=this.time,q=v((C-I.rollT0)/0.85,0,1),k=D$[V$[I.face]],j=O.multiply(O.axisAngle([0,1,0],I.yawJitter),k);if(I.blank)j=O.multiply(O.axisAngle([0,1,0],Math.sin(C*0.8+T)*0.3),O.euler(0.5+T*0.3,T,0.3));if(q<1){let P=(1-X0(q))*I.spinTurns*Math.PI*2;j=O.multiply(O.axisAngle(I.spinAxis,P),j)}let w=this.dieLift(I),x=[I.pos[0],w,I.pos[2]],N=0.5*(I.kept?0.95:1)*(this.hoverDie===T?1.06:1);S.mat4("uModel",E.fromTRS(this.tmp,x,j,[N,N,N])),S.vec3("uBody",I.green?[0.05,0.42,0.22]:[0.1,0.1,0.13]),S.float("uKept",I.kept?1:0),S.float("uHover",this.hoverDie===T&&this.diceActive?1:0),S.float("uBlank",I.blank?1:0),this.meshes.dice.draw()}),X.disable(X.SCISSOR_TEST)}dieLift($){let X=v((this.time-$.rollT0)/0.85,0,1);return(X<1?Math.abs(Math.sin(X*Math.PI*2.5))*(1-X)*2.2:0)+($.kept?0.12:0)}dispose(){cancelAnimationFrame(this.raf),this.gl.getExtension("WEBGL_lose_context")?.loseContext()}}function W0($,X){return[$[1]*X[2]-$[2]*X[1],$[2]*X[0]-$[0]*X[2],$[0]*X[1]-$[1]*X[0]]}function o0($){let X=Math.hypot($[0],$[1],$[2])||1;return[$[0]/X,$[1]/X,$[2]/X]}var D$=a.map(($)=>{let X,J=$[1];if(J>0.99)X=O.identity();else if(J<-0.99)X=O.axisAngle([1,0,0],Math.PI);else{let K=[$[1]*0-$[2]*1,$[2]*0-$[0]*0,$[0]*1-$[1]*0],Z=1+J,Y=Math.hypot(K[0],K[1],K[2],Z);X=[K[0]/Y,K[1]/Y,K[2]/Y,Z/Y]}let Q=O.rotate(X,g($)),G=Math.PI-Math.atan2(Q[0],Q[2]);return O.multiply(O.axisAngle([0,1,0],G),X)});function s0($,X,J,Q){let G=[$[0]-J[0],$[1]-J[1],$[2]-J[2]],K=G[0]*X[0]+G[1]*X[1]+G[2]*X[2],Z=G[0]*G[0]+G[1]*G[1]+G[2]*G[2]-Q*Q,Y=K*K-Z;if(Y<0)return null;let V=-K-Math.sqrt(Y);return V>0?V:null}var h$=e0(function({ui:X}){let J=c.useRef(null),Q=c.useRef(null),G=c.useRef(null),K=c.useRef(new Map),Z=c.useRef(null),[Y,V]=c.useState(null);c.useEffect(()=>{let F=Q.current,B=J.current,L;try{L=new V0(F,e.settings.quality)}catch(N){console.error(N),V(N instanceof Error?N.message:String(N));return}Z.current=L;let R=()=>{let N=B.getBoundingClientRect(),P=Math.min(window.devicePixelRatio||1,N.width<700?1.75:2);L.resize(N.width,N.height,P);let z=G.current?.getBoundingClientRect();if(z)L.diceRect={x:z.left-N.left,y:z.top-N.top,w:z.width,h:z.height}};R();let A=new ResizeObserver(R);if(A.observe(B),G.current)A.observe(G.current);L.onLabels=(N)=>{for(let P of N){let z=K.current.get(P.id);if(!z)continue;z.style.transform=`translate(-50%, -100%) translate(${P.x.toFixed(1)}px, ${P.y.toFixed(1)}px)`,z.style.opacity=P.visible?"1":"0"}};let _=H0(()=>{let N=X.state;if(N)L.sync(N,X.viewId,X.myTurn);requestAnimationFrame(R)}),S=X.onEvent((N)=>L.event(N)),I=H0(()=>{L.setQuality(e.settings.quality),L.lessMotion=e.settings.lessMotion}),T=new Map,C=0,q=0,k=(N)=>{if(F.setPointerCapture(N.pointerId),T.set(N.pointerId,{x:N.clientX,y:N.clientY}),C=0,T.size===2){let[P,z]=[...T.values()];q=Math.hypot(P.x-z.x,P.y-z.y)}},j=(N)=>{let P=T.get(N.pointerId);if(!P)return;let z=N.clientX-P.x,r=N.clientY-P.y;if(P.x=N.clientX,P.y=N.clientY,C+=Math.abs(z)+Math.abs(r),T.size===1)L.orbit(z,r);else if(T.size===2){let[U0,F0]=[...T.values()],D0=Math.hypot(U0.x-F0.x,U0.y-F0.y);if(q>0)L.zoom(q/D0);q=D0}},w=(N)=>{let P=T.size===1&&C<8;if(T.delete(N.pointerId),T.size<2)q=0;if(P){let z=F.getBoundingClientRect(),r=L.pickMonster(N.clientX-z.left,N.clientY-z.top);if(r)X.open({kind:"player",playerId:r})}},x=(N)=>{N.preventDefault(),L.zoom(Math.exp(N.deltaY*0.001))};return F.addEventListener("pointerdown",k),F.addEventListener("pointermove",j),F.addEventListener("pointerup",w),F.addEventListener("pointercancel",w),F.addEventListener("wheel",x,{passive:!1}),()=>{A.disconnect(),_(),I(),S(),F.removeEventListener("pointerdown",k),F.removeEventListener("pointermove",j),F.removeEventListener("pointerup",w),F.removeEventListener("pointercancel",w),F.removeEventListener("wheel",x),L.dispose(),Z.current=null}},[X]);let H=X.state,W=a0(H),U=X.viewer,M=U?H.market.filter((F)=>F&&l0(U,F.id)<=U.energy).length:0,D={onPointerDown:(F)=>{let B=Z.current,L=J.current;if(!B||!L)return;let R=L.getBoundingClientRect(),A=B.pickDie(F.clientX-R.left,F.clientY-R.top);if(A>=0)X.clickDie(A)},onPointerMove:(F)=>{let B=Z.current,L=J.current;if(!B||!L||F.pointerType!=="mouse")return;let R=L.getBoundingClientRect();B.hoverDie=X.myTurn?B.pickDie(F.clientX-R.left,F.clientY-R.top):-1},onPointerLeave:()=>{if(Z.current)Z.current.hoverDie=-1}};if(Y)return f("div",{className:"stage3d error3d",children:n("div",{className:"panel",children:[f("h3",{children:"3D-режим недоступен"}),n("p",{className:"muted",children:["Ваш браузер не поддерживает WebGL2 (",Y,")."]}),f("button",{className:"btn go",onClick:()=>e.settings.set("mode","cards"),children:"Перейти в карточный режим"})]})});return n("div",{className:"stage3d",ref:J,children:[f("canvas",{ref:Q,className:"gl-canvas"}),f("div",{className:"labels","aria-hidden":!0,children:H.players.map((F)=>n("div",{className:`label3d${F.alive?"":" out"}${F.id===W.id?" current":""}`,style:J$(F.monster),ref:(B)=>{if(B)K.current.set(F.id,B);else K.current.delete(F.id)},children:[f("b",{children:F.name}),f("span",{children:F.alive?n($$,{children:["❤",F.hp,n("small",{children:["/",g0(F)]})," ★",F.vp," ⚡",F.energy]}):"\uD83D\uDC80"}),f(Q$,{ui:X,playerId:F.id})]},F.id))}),f("div",{className:"hud-top",children:f("div",{className:"players-strip",children:H.players.map((F)=>f(X$,{ui:X,player:F,compact:!0},F.id))})}),n("div",{className:"hud-bottom",children:[f("div",{className:`dice-zone${X.myTurn&&H.phase==="roll"&&H.flags.rolled?" active":""}`,ref:G,...D,children:f("span",{className:"dice-zone-hint",children:X.dieTool?"Выберите кубик":H.phase==="roll"?X.myTurn?H.flags.rolled?`Нажмите на кубики, чтобы отложить · бросков: ${H.rollsLeft}`:"Ваш ход — бросайте!":`${W.name} бросает… (${H.rollsLeft})`:H.phase==="buy"?X.myTurn?"Покупка карт":`${W.name} выбирает карты`:""})}),f(K$,{ui:X}),n("div",{className:"hud-actions",children:[n("button",{className:"btn cards-btn",onClick:()=>X.open({kind:"market"}),children:["\uD83C\uDCCF ",f("span",{className:"cards-btn-label",children:"Карты"}),X.myTurn&&H.phase==="buy"&&M>0&&f("span",{className:"badge",children:M})]}),f("div",{className:"grow",children:f(G$,{ui:X})})]})]}),n("aside",{className:"hud-side",children:[f(Z$,{ui:X}),f("section",{className:"log-box",children:f(Y$,{ui:X,limit:30})})]})]})});export{h$ as default};
