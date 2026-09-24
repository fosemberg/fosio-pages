import{Ca as U6,Ea as F6,I as b0,J as W6,K as G6,L as Q6,M as K6,N as u0,O as V6,P as X6,T as e$,V as h,W as n,X as B6,a as p6,ba as d0,ca as Y6,f as i6,ga as N6,h as h0,j as p$,k as T0,o as Z6,p as k$,q as H$,r as R$,sa as M6,t as y0,ta as C6,z as q0}from"./index-xerfspdb.js";var W$=p6(i6(),1);var P0=($,Z)=>[$[1]*Z[2]-$[2]*Z[1],$[2]*Z[0]-$[0]*Z[2],$[0]*Z[1]-$[1]*Z[0]],S0=($)=>{let Z=Math.hypot(...$)||1;return[$[0]/Z,$[1]/Z,$[2]/Z]},Q0=[[1,0,0],[-1,0,0],[0,1,0],[0,-1,0],[0,0,1],[0,0,-1]];function K0($){if(Math.abs($[1])<0.5)return[0,1,0];return $[1]>0?[0,0,-1]:[0,0,1]}function e0($=0.18,Z=8){let J={positions:[],normals:[],uvs:[],faces:[],indices:[]},W=1-$;return Q0.forEach((G,Q)=>{let K=K0(G),V=P0(K,G),B=J.positions.length/3;for(let M=0;M<=Z;M++)for(let N=0;N<=Z;N++){let Y=N/Z,X=M/Z,C=[G[0]+V[0]*(2*Y-1)+K[0]*(2*X-1),G[1]+V[1]*(2*Y-1)+K[1]*(2*X-1),G[2]+V[2]*(2*Y-1)+K[2]*(2*X-1)],U=[Math.max(-W,Math.min(W,C[0])),Math.max(-W,Math.min(W,C[1])),Math.max(-W,Math.min(W,C[2]))],F=[C[0]-U[0],C[1]-U[1],C[2]-U[2]],q=Math.hypot(...F)>0.000001?S0(F):G;J.positions.push(U[0]+q[0]*$,U[1]+q[1]*$,U[2]+q[2]*$),J.normals.push(...q),J.uvs.push(Y,X),J.faces.push(Q)}for(let M=0;M<Z;M++)for(let N=0;N<Z;N++){let Y=B+M*(Z+1)+N;J.indices.push(Y,Y+1,Y+Z+2,Y,Y+Z+2,Y+Z+1)}}),J}function o$($=!1){let Z={positions:[],normals:[],uvs:[],indices:[]},J=$?0.5:0;return Q0.forEach((W)=>{let G=K0(W),Q=P0(G,W),K=Z.positions.length/3;for(let[V,B]of[[-1,-1],[1,-1],[1,1],[-1,1]])Z.positions.push((W[0]+Q[0]*V+G[0]*B)*0.5,(W[1]+Q[1]*V+G[1]*B)*0.5+J,(W[2]+Q[2]*V+G[2]*B)*0.5),Z.normals.push(...W),Z.uvs.push((V+1)/2,(B+1)/2);Z.indices.push(K,K+1,K+2,K,K+2,K+3)}),Z}function O0($=16,Z=24){let J={positions:[],normals:[],uvs:[],indices:[]};for(let W=0;W<=$;W++){let G=W/$*Math.PI;for(let Q=0;Q<=Z;Q++){let K=Q/Z*Math.PI*2,V=Math.sin(G)*Math.cos(K),B=Math.cos(G),M=Math.sin(G)*Math.sin(K);J.positions.push(V*0.5,B*0.5,M*0.5),J.normals.push(V,B,M),J.uvs.push(Q/Z,W/$)}}for(let W=0;W<$;W++)for(let G=0;G<Z;G++){let Q=W*(Z+1)+G,K=Q+Z+1;J.indices.push(Q,Q+1,K,K,Q+1,K+1)}return J}function _$($=0.5,Z=0.5,J=20,W=!0){let G={positions:[],normals:[],uvs:[],indices:[]},Q=($-Z)/1;for(let K=0;K<=J;K++){let V=K/J*Math.PI*2,B=Math.cos(V),M=Math.sin(V),N=S0([B,Q,M]);G.positions.push(B*$,0,M*$,B*Z,1,M*Z),G.normals.push(...N,...N),G.uvs.push(K/J,0,K/J,1)}for(let K=0;K<J;K++){let V=K*2;G.indices.push(V,V+1,V+3,V,V+3,V+2)}if(W)for(let[K,V,B]of[[0,$,-1],[1,Z,1]]){if(V<=0)continue;let M=G.positions.length/3;G.positions.push(0,K,0),G.normals.push(0,B,0),G.uvs.push(0.5,0.5);for(let N=0;N<=J;N++){let Y=N/J*Math.PI*2;G.positions.push(Math.cos(Y)*V,K,Math.sin(Y)*V),G.normals.push(0,B,0),G.uvs.push(0.5+Math.cos(Y)/2,0.5+Math.sin(Y)/2)}for(let N=0;N<J;N++)if(B>0)G.indices.push(M,M+N+2,M+N+1);else G.indices.push(M,M+N+1,M+N+2)}return G}function V0($=1,Z=1){let J={positions:[],normals:[],uvs:[],indices:[]};for(let W=0;W<=Z;W++)for(let G=0;G<=Z;G++)J.positions.push((G/Z-0.5)*$,0,(W/Z-0.5)*$),J.normals.push(0,1,0),J.uvs.push(G/Z,W/Z);for(let W=0;W<Z;W++)for(let G=0;G<Z;G++){let Q=W*(Z+1)+G;J.indices.push(Q,Q+Z+1,Q+1,Q+1,Q+Z+1,Q+Z+2)}return J}function K$($,Z,J,W,G){let[Q,K,V]=Z,B=P0([K[0]-Q[0],K[1]-Q[1],K[2]-Q[2]],[V[0]-Q[0],V[1]-Q[1],V[2]-Q[2]]),M=B[0]*J[0]+B[1]*J[1]+B[2]*J[2]<0,N=$.positions.length/3,Y=S0(J);Z.forEach((C,U)=>{$.positions.push(C[0],C[1],C[2]),$.normals.push(Y[0],Y[1],Y[2]),$.uvs.push(G[U][0],G[U][1]),$.faces.push(W)});let X=Z.length===3?[[0,1,2]]:[[0,1,2],[0,2,3]];for(let[C,U,F]of X)if(M)$.indices.push(N+C,N+F,N+U);else $.indices.push(N+C,N+U,N+F)}var M$=[[0,0],[1,0],[1,1],[0,1]];function $J($=0.62,Z=0.1){let J={positions:[],normals:[],uvs:[],faces:[],indices:[]},W=0.5;K$(J,[[-0.5,0,0.5],[0.5,0,0.5],[0.5,1,0.5],[-0.5,1,0.5]],[0,0,1],0,M$),K$(J,[[0.5,0,-0.5],[-0.5,0,-0.5],[-0.5,1,-0.5],[0.5,1,-0.5]],[0,0,-1],0,M$),K$(J,[[0.5,0,0.5],[0.5,0,-0.5],[0.5,1,-0.5],[0.5,1,0.5]],[1,0,0],0,M$),K$(J,[[-0.5,0,-0.5],[-0.5,0,0.5],[-0.5,1,0.5],[-0.5,1,-0.5]],[-1,0,0],0,M$);let G=1+$;K$(J,[[0.5,1,0.5],[0.5,1,-0.5],[0.5,G,0]],[1,0,0],0,[[0,0],[1,0],[0.5,1]]),K$(J,[[-0.5,1,-0.5],[-0.5,1,0.5],[-0.5,G,0]],[-1,0,0],0,[[0,0],[1,0],[0.5,1]]);let Q=0.5+Z,K=1-Z*($/0.5),V=0.5+Z*0.6;K$(J,[[-V,K,Q],[V,K,Q],[V,G,0],[-V,G,0]],[0,0.5,$],1,M$),K$(J,[[V,K,-Q],[-V,K,-Q],[-V,G,0],[V,G,0]],[0,0.5,-$],1,M$);let B=0.24,M=-0.2,N=0.075,Y=1+$*0.35,X=G+0.14;for(let[C,U]of[[1,0],[-1,0],[0,1],[0,-1]]){let F=U!==0?1:0,q=C!==0?1:0,H=B+C*N,R=M+U*N;K$(J,[[H-F*N,Y,R-q*N],[H+F*N,Y,R+q*N],[H+F*N,X,R+q*N],[H-F*N,X,R-q*N]],[C,0,U],2,M$)}return K$(J,[[B-N,X,M-N],[B+N,X,M-N],[B+N,X,M+N],[B-N,X,M+N]],[0,1,0],2,M$),J}function JJ($=14,Z=6){let J={positions:[],normals:[],uvs:[],indices:[]};for(let W=0;W<=Z;W++)for(let G=0;G<=$;G++)J.positions.push(G/$,W/Z-0.5,0),J.normals.push(0,0,1),J.uvs.push(G/$,W/Z);for(let W=0;W<Z;W++)for(let G=0;G<$;G++){let Q=W*($+1)+G;J.indices.push(Q,Q+1,Q+$+2,Q,Q+$+2,Q+$+1)}return J}function ZJ(){let $={positions:[],normals:[],uvs:[],faces:[],indices:[]},Z=0.5;return K$($,[[-0.5,0,0.5],[0.5,0,0.5],[0.5,1,0],[-0.5,1,0]],[0,0.5,1],0,M$),K$($,[[0.5,0,-0.5],[-0.5,0,-0.5],[-0.5,1,0],[0.5,1,0]],[0,0.5,-1],0,M$),K$($,[[0.5,0,0.5],[0.5,0,-0.5],[0.5,1,0]],[1,0,0],0,[[0,0],[1,0],[0.5,1]]),K$($,[[-0.5,0,-0.5],[-0.5,0,0.5],[-0.5,1,0]],[-1,0,0],0,[[0,0],[1,0],[0.5,1]]),$}function t0($){let Z=0.5+0.5*Math.cos(Math.PI*$),J=(1-$)**1.6;return Z*0.55+J*0.45}function WJ($){return 1+0.035*Math.sin(3*$+0.7)+0.022*Math.sin(7*$+2.1)+0.012*Math.sin(13*$+0.4)}function A0($,Z,J=0){let W=WJ(J),G=$.peakR,Q=$.ledgeIn*W,K=$.ledgeOut*W,V=$.baseR*W;if(Z<=G)return $.peakY;if(Z<Q)return $.ledgeY+($.peakY-$.ledgeY)*t0((Z-G)/(Q-G));if(Z<=K)return $.ledgeY;if(Z<V)return $.ledgeY*(t0((Z-K)/(V-K))*0.9+(1-(Z-K)/(V-K))*0.1);return-0.25*Math.min(1,(Z-V)/0.6)}function GJ($,Z=120){let J={positions:[],normals:[],indices:[]},W=[],G=(B,M,N,Y,X=0)=>{for(let C=X;C<N;C++){let U=C/N,F=Y===1||Y===3?0.5-0.5*Math.cos(Math.PI*U):U;W.push({r:B+(M-B)*F,band:Y,t:F})}};G(0,$.peakR,6,0),G($.peakR,$.ledgeIn,12,1),G($.ledgeIn,$.ledgeOut,7,2),G($.ledgeOut,$.baseR,14,3),W.push({r:$.baseR,band:4,t:0},{r:$.baseR+0.3,band:4,t:0.5},{r:$.baseR+0.7,band:4,t:1});let Q=Z+1;for(let B of W)for(let M=0;M<=Z;M++){let N=M/Z*Math.PI*2,Y=B.band===0?1:WJ(N),X=B.r*(B.band===0?1:Y),C=B.band===4?-0.25*B.t*1.2:A0($,X,N);if(B.band===1||B.band===3){let U=Math.sin(Math.PI*B.t)**0.8,F=Math.sin(N*9+B.r*1.7)*0.5+Math.sin(N*17-B.r*2.3+1.3)*0.3+(l0(B.r*31.7+M*7.13)-0.5)*0.6,q=Math.sin(N*11+B.r*3.1+0.5)*0.5+(l0(B.r*13.1+M*3.77)-0.5)*0.6;X+=F*0.28*U,C+=q*0.16*U}if(B.band===4)X=B.r*Y;J.positions.push(Math.sin(N)*X,C,Math.cos(N)*X)}for(let B=0;B<W.length-1;B++)for(let M=0;M<Z;M++){let N=B*Q+M,Y=N+Q;J.indices.push(N,Y,N+1,N+1,Y,Y+1)}let K=new Float32Array(J.positions.length),V=J.positions;for(let B=0;B<J.indices.length;B+=3){let M=J.indices[B]*3,N=J.indices[B+1]*3,Y=J.indices[B+2]*3,X=V[N]-V[M],C=V[N+1]-V[M+1],U=V[N+2]-V[M+2],F=V[Y]-V[M],q=V[Y+1]-V[M+1],H=V[Y+2]-V[M+2],R=C*H-U*q,I=U*F-X*H,_=X*q-C*F;for(let w of[M,N,Y])K[w]+=R,K[w+1]+=I,K[w+2]+=_}for(let B=0;B<W.length;B++){let M=B*Q*3,N=(B*Q+Z)*3;for(let Y=0;Y<3;Y++){let X=K[M+Y]+K[N+Y];K[M+Y]=X,K[N+Y]=X}}for(let B=0;B<K.length;B+=3){let M=Math.hypot(K[B],K[B+1],K[B+2])||1;J.normals.push(K[B]/M,K[B+1]/M,K[B+2]/M)}return J}function l0($){let Z=Math.sin($*127.1+311.7)*43758.5453;return Z-Math.floor(Z)}class $${gl;program;uniforms=new Map;attribs={};constructor($,Z,J){this.gl=$;let W=(K,V)=>{let B=$.createShader(K);if($.shaderSource(B,V),$.compileShader(B),!$.getShaderParameter(B,$.COMPILE_STATUS)){let M=$.getShaderInfoLog(B),N=V.split(`
`).map((Y,X)=>`${X+1}: ${Y}`).join(`
`);throw Error(`Shader compile error: ${M}
${N}`)}return B},G=$.createProgram();if($.attachShader(G,W($.VERTEX_SHADER,Z)),$.attachShader(G,W($.FRAGMENT_SHADER,J)),$.linkProgram(G),!$.getProgramParameter(G,$.LINK_STATUS))throw Error(`Program link error: ${$.getProgramInfoLog(G)}`);this.program=G;let Q=$.getProgramParameter(G,$.ACTIVE_ATTRIBUTES);for(let K=0;K<Q;K++){let V=$.getActiveAttrib(G,K);this.attribs[V.name]=$.getAttribLocation(G,V.name)}}use(){return this.gl.useProgram(this.program),this}loc($){if(!this.uniforms.has($))this.uniforms.set($,this.gl.getUniformLocation(this.program,$));return this.uniforms.get($)}mat4($,Z){this.gl.uniformMatrix4fv(this.loc($),!1,Z)}vec3($,Z){this.gl.uniform3f(this.loc($),Z[0],Z[1],Z[2])}vec4($,Z){this.gl.uniform4f(this.loc($),Z[0],Z[1],Z[2],Z[3])}vec2($,Z,J){this.gl.uniform2f(this.loc($),Z,J)}float($,Z){this.gl.uniform1f(this.loc($),Z)}int($,Z){this.gl.uniform1i(this.loc($),Z)}ints($,Z){this.gl.uniform1iv(this.loc($),Z)}vec3s($,Z){this.gl.uniform3fv(this.loc($),Z)}vec4s($,Z){this.gl.uniform4fv(this.loc($),Z)}}class g{gl;vao;count;instanceBuffer=null;instanceCount=0;instanceStride=0;constructor($,Z,J,W){this.gl=$;this.vao=$.createVertexArray(),$.bindVertexArray(this.vao);let G=(V,B,M)=>{let N=Z.attribs[V];if(N===void 0||N<0||!B)return;let Y=$.createBuffer();$.bindBuffer($.ARRAY_BUFFER,Y),$.bufferData($.ARRAY_BUFFER,new Float32Array(B),$.STATIC_DRAW),$.enableVertexAttribArray(N),$.vertexAttribPointer(N,M,$.FLOAT,!1,0,0)};if(G("aPos",J.positions,3),G("aNormal",J.normals,3),G("aUv",J.uvs,2),G("aFace",J.faces,1),W){this.instanceBuffer=$.createBuffer(),$.bindBuffer($.ARRAY_BUFFER,this.instanceBuffer),this.instanceStride=W.reduce((B,M)=>B+M.size,0);let V=0;for(let B of W){let M=Z.attribs[B.name];if(M!==void 0&&M>=0)$.enableVertexAttribArray(M),$.vertexAttribPointer(M,B.size,$.FLOAT,!1,this.instanceStride*4,V*4),$.vertexAttribDivisor(M,1);V+=B.size}}let Q=$.createBuffer();$.bindBuffer($.ELEMENT_ARRAY_BUFFER,Q);let K=J.positions.length/3>65535;$.bufferData($.ELEMENT_ARRAY_BUFFER,K?new Uint32Array(J.indices):new Uint16Array(J.indices),$.STATIC_DRAW),this.indexType=K?$.UNSIGNED_INT:$.UNSIGNED_SHORT,this.count=J.indices.length,$.bindVertexArray(null)}indexType;setInstances($){let Z=this.gl;Z.bindBuffer(Z.ARRAY_BUFFER,this.instanceBuffer),Z.bufferData(Z.ARRAY_BUFFER,$,Z.DYNAMIC_DRAW),this.instanceCount=$.length/this.instanceStride}draw(){let $=this.gl;if($.bindVertexArray(this.vao),this.instanceBuffer)$.drawElementsInstanced($.TRIANGLES,this.count,this.indexType,0,this.instanceCount);else $.drawElements($.TRIANGLES,this.count,this.indexType,0)}}function QJ($){if($.getExtension("EXT_color_buffer_float"))return{internal:$.RGBA16F,format:$.RGBA,type:$.HALF_FLOAT,hdr:!0};return{internal:$.RGBA8,format:$.RGBA,type:$.UNSIGNED_BYTE,hdr:!1}}class E${gl;w;h;fb;tex;depth=null;ok;constructor($,Z,J,W,G){this.gl=$;this.w=Z;this.h=J;if(this.tex=$.createTexture(),$.bindTexture($.TEXTURE_2D,this.tex),$.texImage2D($.TEXTURE_2D,0,W.internal,Z,J,0,W.format,W.type,null),$.texParameteri($.TEXTURE_2D,$.TEXTURE_MIN_FILTER,$.LINEAR),$.texParameteri($.TEXTURE_2D,$.TEXTURE_MAG_FILTER,$.LINEAR),$.texParameteri($.TEXTURE_2D,$.TEXTURE_WRAP_S,$.CLAMP_TO_EDGE),$.texParameteri($.TEXTURE_2D,$.TEXTURE_WRAP_T,$.CLAMP_TO_EDGE),this.fb=$.createFramebuffer(),$.bindFramebuffer($.FRAMEBUFFER,this.fb),$.framebufferTexture2D($.FRAMEBUFFER,$.COLOR_ATTACHMENT0,$.TEXTURE_2D,this.tex,0),G)this.depth=$.createRenderbuffer(),$.bindRenderbuffer($.RENDERBUFFER,this.depth),$.renderbufferStorage($.RENDERBUFFER,$.DEPTH_COMPONENT24,Z,J),$.framebufferRenderbuffer($.FRAMEBUFFER,$.DEPTH_ATTACHMENT,$.RENDERBUFFER,this.depth);this.ok=$.checkFramebufferStatus($.FRAMEBUFFER)===$.FRAMEBUFFER_COMPLETE,$.bindFramebuffer($.FRAMEBUFFER,null),$.bindRenderbuffer($.RENDERBUFFER,null)}dispose(){let $=this.gl;if($.deleteFramebuffer(this.fb),$.deleteTexture(this.tex),this.depth)$.deleteRenderbuffer(this.depth)}}class w0{gl;w;h;samples;fb;color;depth;ok;constructor($,Z,J,W,G){this.gl=$;this.w=Z;this.h=J;this.samples=G;this.fb=$.createFramebuffer(),$.bindFramebuffer($.FRAMEBUFFER,this.fb),this.color=$.createRenderbuffer(),$.bindRenderbuffer($.RENDERBUFFER,this.color),$.renderbufferStorageMultisample($.RENDERBUFFER,G,W.internal,Z,J),$.framebufferRenderbuffer($.FRAMEBUFFER,$.COLOR_ATTACHMENT0,$.RENDERBUFFER,this.color),this.depth=$.createRenderbuffer(),$.bindRenderbuffer($.RENDERBUFFER,this.depth),$.renderbufferStorageMultisample($.RENDERBUFFER,G,$.DEPTH_COMPONENT24,Z,J),$.framebufferRenderbuffer($.FRAMEBUFFER,$.DEPTH_ATTACHMENT,$.RENDERBUFFER,this.depth),this.ok=$.checkFramebufferStatus($.FRAMEBUFFER)===$.FRAMEBUFFER_COMPLETE,$.bindFramebuffer($.FRAMEBUFFER,null),$.bindRenderbuffer($.RENDERBUFFER,null)}resolveInto($){let Z=this.gl;Z.bindFramebuffer(Z.READ_FRAMEBUFFER,this.fb),Z.bindFramebuffer(Z.DRAW_FRAMEBUFFER,$.fb),Z.blitFramebuffer(0,0,this.w,this.h,0,0,$.w,$.h,Z.COLOR_BUFFER_BIT,Z.NEAREST),Z.bindFramebuffer(Z.READ_FRAMEBUFFER,null),Z.bindFramebuffer(Z.DRAW_FRAMEBUFFER,null)}dispose(){let $=this.gl;$.deleteFramebuffer(this.fb),$.deleteRenderbuffer(this.color),$.deleteRenderbuffer(this.depth)}}class X0{gl;size;fb;tex;ok;constructor($,Z){this.gl=$;this.size=Z;this.tex=$.createTexture(),$.bindTexture($.TEXTURE_2D,this.tex),$.texImage2D($.TEXTURE_2D,0,$.DEPTH_COMPONENT24,Z,Z,0,$.DEPTH_COMPONENT,$.UNSIGNED_INT,null),$.texParameteri($.TEXTURE_2D,$.TEXTURE_MIN_FILTER,$.LINEAR),$.texParameteri($.TEXTURE_2D,$.TEXTURE_MAG_FILTER,$.LINEAR),$.texParameteri($.TEXTURE_2D,$.TEXTURE_WRAP_S,$.CLAMP_TO_EDGE),$.texParameteri($.TEXTURE_2D,$.TEXTURE_WRAP_T,$.CLAMP_TO_EDGE),$.texParameteri($.TEXTURE_2D,$.TEXTURE_COMPARE_MODE,$.COMPARE_REF_TO_TEXTURE),$.texParameteri($.TEXTURE_2D,$.TEXTURE_COMPARE_FUNC,$.LEQUAL),this.fb=$.createFramebuffer(),$.bindFramebuffer($.FRAMEBUFFER,this.fb),$.framebufferTexture2D($.FRAMEBUFFER,$.DEPTH_ATTACHMENT,$.TEXTURE_2D,this.tex,0),$.drawBuffers([$.NONE]),$.readBuffer($.NONE),this.ok=$.checkFramebufferStatus($.FRAMEBUFFER)===$.FRAMEBUFFER_COMPLETE,$.bindFramebuffer($.FRAMEBUFFER,null)}dispose(){this.gl.deleteFramebuffer(this.fb),this.gl.deleteTexture(this.tex)}}var q6=new Float32Array(16),k={create(){let $=new Float32Array(16);return $[0]=$[5]=$[10]=$[15]=1,$},perspective($,Z,J,W,G){let Q=1/Math.tan(Z/2);return $.fill(0),$[0]=Q/J,$[5]=Q,$[10]=(G+W)/(W-G),$[11]=-1,$[14]=2*G*W/(W-G),$},lookAt($,Z,J,W=[0,1,0]){let G=Z[0]-J[0],Q=Z[1]-J[1],K=Z[2]-J[2],V=Math.hypot(G,Q,K)||1;G/=V,Q/=V,K/=V;let B=W[1]*K-W[2]*Q,M=W[2]*G-W[0]*K,N=W[0]*Q-W[1]*G;V=Math.hypot(B,M,N)||1,B/=V,M/=V,N/=V;let Y=Q*N-K*M,X=K*B-G*N,C=G*M-Q*B;return $[0]=B,$[1]=Y,$[2]=G,$[3]=0,$[4]=M,$[5]=X,$[6]=Q,$[7]=0,$[8]=N,$[9]=C,$[10]=K,$[11]=0,$[12]=-(B*Z[0]+M*Z[1]+N*Z[2]),$[13]=-(Y*Z[0]+X*Z[1]+C*Z[2]),$[14]=-(G*Z[0]+Q*Z[1]+K*Z[2]),$[15]=1,$},multiply($,Z,J){let W=q6;for(let G=0;G<4;G++)for(let Q=0;Q<4;Q++)W[G*4+Q]=Z[Q]*J[G*4]+Z[4+Q]*J[G*4+1]+Z[8+Q]*J[G*4+2]+Z[12+Q]*J[G*4+3];return $.set(W),$},ortho($,Z,J,W,G,Q,K){return $.fill(0),$[0]=2/(J-Z),$[5]=2/(G-W),$[10]=-2/(K-Q),$[12]=-(J+Z)/(J-Z),$[13]=-(G+W)/(G-W),$[14]=-(K+Q)/(K-Q),$[15]=1,$},fromTRS($,Z,J,W){let[G,Q,K,V]=J,B=G+G,M=Q+Q,N=K+K,Y=G*B,X=G*M,C=G*N,U=Q*M,F=Q*N,q=K*N,H=V*B,R=V*M,I=V*N;return $[0]=(1-(U+q))*W[0],$[1]=(X+I)*W[0],$[2]=(C-R)*W[0],$[3]=0,$[4]=(X-I)*W[1],$[5]=(1-(Y+q))*W[1],$[6]=(F+H)*W[1],$[7]=0,$[8]=(C+R)*W[2],$[9]=(F-H)*W[2],$[10]=(1-(Y+U))*W[2],$[11]=0,$[12]=Z[0],$[13]=Z[1],$[14]=Z[2],$[15]=1,$},invert($,Z){let[J,W,G,Q,K,V,B,M,N,Y,X,C,U,F,q,H]=Z,R=J*V-W*K,I=J*B-G*K,_=J*M-Q*K,w=W*B-G*V,j=W*M-Q*V,A=G*M-Q*B,P=N*F-Y*U,z=N*q-X*U,L=N*H-C*U,E=Y*q-X*F,v=Y*H-C*F,i=X*H-C*q,y=R*i-I*v+_*E+w*L-j*z+A*P;if(!y)return null;return y=1/y,$[0]=(V*i-B*v+M*E)*y,$[1]=(G*v-W*i-Q*E)*y,$[2]=(F*A-q*j+H*w)*y,$[3]=(X*j-Y*A-C*w)*y,$[4]=(B*L-K*i-M*z)*y,$[5]=(J*i-G*L+Q*z)*y,$[6]=(q*_-U*A-H*I)*y,$[7]=(N*A-X*_+C*I)*y,$[8]=(K*v-V*L+M*P)*y,$[9]=(W*L-J*v-Q*P)*y,$[10]=(U*j-F*_+H*R)*y,$[11]=(Y*_-N*j-C*R)*y,$[12]=(V*z-K*E-B*P)*y,$[13]=(J*E-W*z+G*P)*y,$[14]=(F*I-U*w-q*R)*y,$[15]=(N*w-Y*I+X*R)*y,$},transformPoint($,Z){let[J,W,G]=Z;return[$[0]*J+$[4]*W+$[8]*G+$[12],$[1]*J+$[5]*W+$[9]*G+$[13],$[2]*J+$[6]*W+$[10]*G+$[14],$[3]*J+$[7]*W+$[11]*G+$[15]]}},f={identity(){return[0,0,0,1]},axisAngle($,Z){let J=Math.hypot(...$)||1,W=Math.sin(Z/2)/J;return[$[0]*W,$[1]*W,$[2]*W,Math.cos(Z/2)]},multiply($,Z){let[J,W,G,Q]=$,[K,V,B,M]=Z;return[J*M+Q*K+W*B-G*V,W*M+Q*V+G*K-J*B,G*M+Q*B+J*V-W*K,Q*M-J*K-W*V-G*B]},rotate($,Z){let[J,W,G,Q]=$,[K,V,B]=Z,M=Q*K+W*B-G*V,N=Q*V+G*K-J*B,Y=Q*B+J*V-W*K,X=-J*K-W*V-G*B;return[M*Q+X*-J+N*-G-Y*-W,N*Q+X*-W+Y*-J-M*-G,Y*Q+X*-G+M*-W-N*-J]},euler($,Z,J){return f.multiply(f.multiply(f.axisAngle([0,1,0],Z),f.axisAngle([1,0,0],$)),f.axisAngle([0,0,1],J))},setAxisAngle($,Z,J,W,G){let Q=Math.sin(G/2);return $[0]=Z*Q,$[1]=J*Q,$[2]=W*Q,$[3]=Math.cos(G/2),$},mulInto($,Z,J){let W=Z[0],G=Z[1],Q=Z[2],K=Z[3],V=J[0],B=J[1],M=J[2],N=J[3];return $[0]=W*N+K*V+G*M-Q*B,$[1]=G*N+K*B+Q*V-W*M,$[2]=Q*N+K*M+W*B-G*V,$[3]=K*N-W*V-G*B-Q*M,$},rotateInto($,Z,J){let[W,G,Q,K]=Z,V=J[0],B=J[1],M=J[2],N=K*V+G*M-Q*B,Y=K*B+Q*V-W*M,X=K*M+W*B-G*V,C=-W*V-G*B-Q*M;return $[0]=N*K+C*-W+Y*-Q-X*-G,$[1]=Y*K+C*-G+X*-W-N*-Q,$[2]=X*K+C*-Q+N*-G-Y*-W,$},slerp($,Z,J){let[W,G,Q,K]=Z,V=$[0]*W+$[1]*G+$[2]*Q+$[3]*K;if(V<0)V=-V,W=-W,G=-G,Q=-Q,K=-K;let B=1-J,M=J;if(V<0.9995){let X=Math.acos(V),C=Math.sin(X);B=Math.sin((1-J)*X)/C,M=Math.sin(J*X)/C}let N=[$[0]*B+W*M,$[1]*B+G*M,$[2]*B+Q*M,$[3]*B+K*M],Y=Math.hypot(...N);return[N[0]/Y,N[1]/Y,N[2]/Y,N[3]/Y]}},O={set($,Z,J,W){return $[0]=Z,$[1]=J,$[2]=W,$},copy($,Z){return $[0]=Z[0],$[1]=Z[1],$[2]=Z[2],$}},s=($,Z,J)=>$+(Z-$)*J,b=($,Z,J)=>Math.max(Z,Math.min(J,$)),g$=($)=>1-(1-$)**3,c$=($)=>$<0.5?2*$*$:1-(-2*$+2)**2/2;function n$($){let Z=parseInt($.slice(1),16);return[(Z>>16&255)/255,(Z>>8&255)/255,(Z&255)/255]}function S($){let Z=Math.sin($*127.1+311.7)*43758.5453;return Z-Math.floor(Z)}function KJ($,Z,J){let W=Z[0]*J[0]+Z[1]*J[1]+Z[2]*J[2];if(W<-0.9999)return $[0]=1,$[1]=$[2]=$[3]=0,$;let G=Z[1]*J[2]-Z[2]*J[1],Q=Z[2]*J[0]-Z[0]*J[2],K=Z[0]*J[1]-Z[1]*J[0],V=1+W,B=Math.hypot(G,Q,K,V);return $[0]=G/B,$[1]=Q/B,$[2]=K/B,$[3]=V/B,$}function VJ($,Z){let J=$[0]*Z[0]+$[1]*Z[1]+$[2]*Z[2];if(J<-0.9999)return[1,0,0,0];let W=[$[1]*Z[2]-$[2]*Z[1],$[2]*Z[0]-$[0]*Z[2],$[0]*Z[1]-$[1]*Z[0]],G=1+J,Q=Math.hypot(W[0],W[1],W[2],G);return[W[0]/Q,W[1]/Q,W[2]/Q,G/Q]}var B0=Math.PI;function s$($,Z,J=0.2,W=0.2,G="head"){return[{mesh:"sphere",color:"#ffffff",pos:[-J,$,Z],scale:[W,W,W*0.8],anim:G},{mesh:"sphere",color:"#ffffff",pos:[J,$,Z],scale:[W,W,W*0.8],anim:G},{mesh:"sphere",color:"#16111f",pos:[-J,$,Z+W*0.35],scale:[W*0.5,W*0.55,W*0.3],anim:G},{mesh:"sphere",color:"#16111f",pos:[J,$,Z+W*0.35],scale:[W*0.5,W*0.55,W*0.3],anim:G}]}var XJ={toad:[{mesh:"sphere",color:"main",pos:[-0.55,0.22,0.25],scale:[0.55,0.35,0.75]},{mesh:"sphere",color:"main",pos:[0.55,0.22,0.25],scale:[0.55,0.35,0.75]},{mesh:"sphere",color:"main",pos:[0,0.85,0],scale:[1.75,1.2,1.5]},{mesh:"sphere",color:"#c9f7a8",pos:[0,0.62,0.38],scale:[1.3,0.7,0.9]},{mesh:"sphere",color:"main",pos:[-0.46,1.42,0.3],scale:[0.55,0.55,0.55],anim:"head"},{mesh:"sphere",color:"main",pos:[0.46,1.42,0.3],scale:[0.55,0.55,0.55],anim:"head"},...s$(1.5,0.45,0.46,0.34),{mesh:"box",color:"#16111f",pos:[0,0.98,0.72],rot:[0.15,0,0],scale:[1.05,0.06,0.12],anim:"head"},{mesh:"sphere",color:"accent",pos:[-0.72,1.05,0.2],scale:[0.18,0.18,0.18],glow:!0},{mesh:"sphere",color:"accent",pos:[0.78,0.9,0.3],scale:[0.14,0.14,0.14],glow:!0},{mesh:"sphere",color:"accent",pos:[0.2,1.3,-0.4],scale:[0.16,0.16,0.16],glow:!0},{mesh:"sphere",color:"accent",pos:[-0.35,0.7,-0.62],scale:[0.2,0.2,0.2],glow:!0},{mesh:"sphere",color:"accent",pos:[0.42,0.78,0.66],scale:[0.09,0.2,0.09],anim:"head",glow:!0},{mesh:"sphere",color:"main",pos:[-0.9,0.55,0.45],rot:[0,0,0.6],scale:[0.22,0.5,0.22],anim:"armL"},{mesh:"sphere",color:"main",pos:[0.9,0.55,0.45],rot:[0,0,-0.6],scale:[0.22,0.5,0.22],anim:"armR"}],shroom:[{mesh:"cyl",color:"accent",pos:[0,0.75,0],scale:[0.95,1.5,0.95]},{mesh:"sphere",color:"accent",pos:[0,0.12,0],scale:[1.05,0.3,1.05]},...s$(1.05,0.45,0.2,0.19),{mesh:"box",color:"#16111f",pos:[-0.2,1.3,0.45],rot:[0,0,-0.35],scale:[0.26,0.05,0.05],anim:"head"},{mesh:"box",color:"#16111f",pos:[0.2,1.3,0.45],rot:[0,0,0.35],scale:[0.26,0.05,0.05],anim:"head"},{mesh:"sphere",color:"#ff9aa8",pos:[-0.33,0.85,0.42],scale:[0.12,0.08,0.05]},{mesh:"sphere",color:"#ff9aa8",pos:[0.33,0.85,0.42],scale:[0.12,0.08,0.05]},{mesh:"sphere",color:"main",pos:[0,1.75,0],scale:[2.1,1.05,2.1],anim:"head"},{mesh:"cyl",color:"#e9d8c8",pos:[0,1.46,0],scale:[1.95,0.08,1.95],anim:"head"},{mesh:"sphere",color:"accent",pos:[0,2.26,0.1],scale:[0.36,0.14,0.36],anim:"head"},{mesh:"sphere",color:"accent",pos:[-0.62,2,0.42],scale:[0.3,0.14,0.3],anim:"head"},{mesh:"sphere",color:"accent",pos:[0.66,2.02,0.3],scale:[0.26,0.13,0.26],anim:"head"},{mesh:"sphere",color:"accent",pos:[0.2,1.95,-0.72],scale:[0.3,0.14,0.3],anim:"head"},{mesh:"sphere",color:"accent",pos:[-0.72,1.9,-0.35],scale:[0.22,0.12,0.22],anim:"head"},{mesh:"sphere",color:"accent",pos:[0.88,1.78,-0.2],scale:[0.18,0.1,0.18],anim:"head"},{mesh:"cyl",color:"accent",pos:[-0.6,0.85,0.1],rot:[B0,0,0.5],scale:[0.16,0.55,0.16],anim:"armL"},{mesh:"cyl",color:"accent",pos:[0.6,0.85,0.1],rot:[B0,0,-0.5],scale:[0.16,0.55,0.16],anim:"armR"}],crab:[{mesh:"cyl",color:"main",pos:[-0.7,0.25,0.2],rot:[0,0,0.9],scale:[0.1,0.7,0.1]},{mesh:"cyl",color:"main",pos:[-0.75,0.25,-0.25],rot:[0,0,0.9],scale:[0.1,0.7,0.1]},{mesh:"cyl",color:"main",pos:[0.7,0.25,0.2],rot:[0,0,-0.9],scale:[0.1,0.7,0.1]},{mesh:"cyl",color:"main",pos:[0.75,0.25,-0.25],rot:[0,0,-0.9],scale:[0.1,0.7,0.1]},{mesh:"sphere",color:"main",pos:[0,0.75,0],scale:[1.9,0.95,1.4]},{mesh:"sphere",color:"#9ef2f0",pos:[0,0.62,0.42],scale:[1.2,0.5,0.6]},{mesh:"box",color:"#16111f",pos:[0,0.72,0.7],scale:[0.5,0.05,0.06]},{mesh:"cyl",color:"main",pos:[-0.3,1.35,0.25],scale:[0.1,0.6,0.1],anim:"head"},{mesh:"cyl",color:"main",pos:[0.3,1.35,0.25],scale:[0.1,0.6,0.1],anim:"head"},...s$(1.72,0.3,0.3,0.22),{mesh:"cyl",color:"accent",pos:[-1.05,1.05,0.25],rot:[0,0,0.6],scale:[0.16,0.7,0.16],anim:"armL"},{mesh:"cyl",color:"accent",pos:[1.05,1.05,0.25],rot:[0,0,-0.6],scale:[0.16,0.7,0.16],anim:"armR"},{mesh:"sphere",color:"accent",pos:[-1.35,1.65,0.35],scale:[0.5,0.42,0.42],anim:"armL"},{mesh:"sphere",color:"accent",pos:[1.35,1.65,0.35],scale:[0.5,0.42,0.42],anim:"armR"},{mesh:"cone",color:"accent",pos:[-1.45,2.05,0.35],rot:[0,0,0.25],scale:[0.26,0.55,0.26],anim:"armL"},{mesh:"cone",color:"accent",pos:[-1.12,2,0.35],rot:[0,0,-0.35],scale:[0.2,0.45,0.2],anim:"armL"},{mesh:"cone",color:"accent",pos:[1.45,2.05,0.35],rot:[0,0,-0.25],scale:[0.26,0.55,0.26],anim:"armR"},{mesh:"cone",color:"accent",pos:[1.12,2,0.35],rot:[0,0,0.35],scale:[0.2,0.45,0.2],anim:"armR"}],golem:[{mesh:"box",color:"main",pos:[-0.42,0.3,0.05],scale:[0.55,0.6,0.65]},{mesh:"box",color:"main",pos:[0.42,0.3,0.05],scale:[0.55,0.6,0.65]},{mesh:"box",color:"main",pos:[0,1.05,0],scale:[1.6,1,1.15]},{mesh:"box",color:"accent",pos:[0,0.95,0.58],scale:[1.1,0.08,0.04],glow:!0},{mesh:"box",color:"main",pos:[0,1.95,0.05],scale:[1.2,0.9,1],anim:"head"},{mesh:"box",color:"accent",pos:[-0.28,2.05,0.56],scale:[0.3,0.14,0.04],anim:"head",glow:!0},{mesh:"box",color:"accent",pos:[0.28,2.05,0.56],scale:[0.3,0.14,0.04],anim:"head",glow:!0},{mesh:"box",color:"accent",pos:[0,1.72,0.56],scale:[0.62,0.06,0.04],anim:"head",glow:!0},{mesh:"box",color:"main",pos:[0,2.6,0.05],scale:[0.6,0.45,0.55],anim:"head"},{mesh:"box",color:"accent",pos:[0,2.62,0.33],scale:[0.36,0.1,0.03],anim:"head",glow:!0},{mesh:"cyl",color:"#c0c7d0",pos:[0,3.05,0.05],scale:[0.05,0.5,0.05],anim:"head"},{mesh:"sphere",color:"accent",pos:[0,3.32,0.05],scale:[0.14,0.14,0.14],anim:"head",glow:!0},{mesh:"box",color:"main",pos:[-1.05,1.25,0.1],rot:[0,0,0.12],scale:[0.45,1.1,0.5],anim:"armL"},{mesh:"box",color:"main",pos:[1.05,1.25,0.1],rot:[0,0,-0.12],scale:[0.45,1.1,0.5],anim:"armR"},{mesh:"box",color:"accent",pos:[-1.05,1.4,0.36],scale:[0.2,0.12,0.02],anim:"armL",glow:!0},{mesh:"box",color:"accent",pos:[1.05,1.1,0.36],scale:[0.2,0.12,0.02],anim:"armR",glow:!0}],jelly:[{mesh:"cyl",color:"accent",pos:[-0.55,0.85,0.2],scale:[0.09,1.3,0.09],anim:"tail"},{mesh:"cyl",color:"accent",pos:[-0.2,0.75,0.45],scale:[0.09,1.4,0.09],anim:"tail"},{mesh:"cyl",color:"accent",pos:[0.2,0.75,0.45],scale:[0.09,1.4,0.09],anim:"tail"},{mesh:"cyl",color:"accent",pos:[0.55,0.85,0.2],scale:[0.09,1.3,0.09],anim:"tail"},{mesh:"cyl",color:"accent",pos:[-0.35,0.8,-0.35],scale:[0.09,1.3,0.09],anim:"tail"},{mesh:"cyl",color:"accent",pos:[0.35,0.8,-0.35],scale:[0.09,1.3,0.09],anim:"tail"},{mesh:"sphere",color:"main",pos:[0,2.05,0],scale:[1.9,1.5,1.9],anim:"head"},{mesh:"cyl",color:"main",pos:[0,1.4,0],scale:[1.85,0.2,1.85],anim:"head"},{mesh:"sphere",color:"#ffd6f4",pos:[0,2.25,0.2],scale:[1.2,0.8,1.2],anim:"head",glow:!0},...s$(1.95,0.8,0.32,0.22),{mesh:"box",color:"#16111f",pos:[0,1.66,0.9],scale:[0.2,0.05,0.05],anim:"head"}],yeti:[{mesh:"cyl",color:"main",pos:[-0.4,0.3,0.05],scale:[0.45,0.6,0.45]},{mesh:"cyl",color:"main",pos:[0.4,0.3,0.05],scale:[0.45,0.6,0.45]},{mesh:"sphere",color:"main",pos:[0,1.25,0],scale:[1.7,1.8,1.4]},{mesh:"sphere",color:"main",pos:[-0.62,1.8,0.1],scale:[0.55,0.55,0.55],anim:"head"},{mesh:"sphere",color:"main",pos:[0.62,1.8,0.1],scale:[0.55,0.55,0.55],anim:"head"},{mesh:"sphere",color:"main",pos:[0,2.15,0],scale:[0.8,0.6,0.8],anim:"head"},{mesh:"sphere",color:"accent",pos:[0,1.55,0.5],scale:[0.95,0.85,0.5],anim:"head"},...s$(1.7,0.72,0.2,0.17),{mesh:"box",color:"#16111f",pos:[0,1.32,0.74],scale:[0.4,0.14,0.06],anim:"head"},{mesh:"cone",color:"#ffffff",pos:[-0.1,1.24,0.78],rot:[B0,0,0],scale:[0.07,0.12,0.05],anim:"head"},{mesh:"cone",color:"#ffffff",pos:[0.1,1.24,0.78],rot:[B0,0,0],scale:[0.07,0.12,0.05],anim:"head"},{mesh:"cyl",color:"#fff7ee",pos:[0,2.48,0],scale:[0.62,0.22,0.62],anim:"head"},{mesh:"cyl",color:"#fff7ee",pos:[0,2.65,0],scale:[0.42,0.2,0.42],anim:"head"},{mesh:"cone",color:"#fff7ee",pos:[0,2.9,0],scale:[0.3,0.35,0.3],anim:"head"},{mesh:"sphere",color:"main",pos:[-1,1.35,0.2],rot:[0,0,0.35],scale:[0.42,0.95,0.42],anim:"armL"},{mesh:"sphere",color:"main",pos:[1,1.35,0.2],rot:[0,0,-0.35],scale:[0.42,0.95,0.42],anim:"armR"},{mesh:"sphere",color:"accent",pos:[-1.15,0.72,0.35],scale:[0.28,0.22,0.28],anim:"armL"},{mesh:"sphere",color:"accent",pos:[1.15,0.72,0.35],scale:[0.28,0.22,0.28],anim:"armR"}]};var D={peakR:2.2,peakY:7.1,ledgeIn:3.95,ledgeOut:6.3,ledgeY:3.7,baseR:8.4,footR:10.3,plazaR:13.8,stairW:0.62,waterZ:-31},F$=($)=>$.toFixed(3),BJ=`#version 300 es
precision highp float;
precision highp int;

layout(location = 0) in vec3 aPos;
layout(location = 1) in vec3 aNormal;
layout(location = 2) in vec2 aUv;

uniform mat4 uModel;
uniform mat4 uViewProj;
uniform int uMode;
uniform float uTime;
uniform float uSeed;
uniform float uWave;
out vec3 vWorld;
out vec3 vNormal;
out vec2 vUv;
void main() {
  vec3 p = aPos;
  vec3 n = aNormal;
  if (uMode == 4) {
    // Banner cloth waving in the wind: travelling waves that grow toward the free edge.
    float x = aPos.x;
    float ph = x * 5.2 - uTime * 5.5 + uSeed;
    float ph2 = x * 9.0 - uTime * 8.3 + uSeed * 1.7;
    float amp = 0.17 * x * uWave;
    float amp2 = 0.05 * uWave;
    p.z += sin(ph) * amp + sin(ph2) * amp2 * x;
    // A banner without an owner hangs limp.
    p.y -= x * x * (0.08 + (1.0 - uWave) * 0.35) + sin(ph * 0.5) * 0.03 * x * uWave;
    float dz = cos(ph) * 5.2 * amp + sin(ph) * 0.17 * uWave + cos(ph2) * 9.0 * amp2 * x + sin(ph2) * amp2;
    n = normalize(vec3(-dz, 0.0, 1.0));
  }
  vec4 w = uModel * vec4(p, 1.0);
  if (uMode == 2) {
    float t = uTime;
    float h = sin(w.x * 0.5 + t * 1.1) * 0.12 + sin(w.z * 0.7 - t * 1.4) * 0.09 + sin((w.x + w.z) * 1.3 + t * 2.1) * 0.03;
    w.y += h;
    float fade = exp(-abs(w.z - ${F$(D.waterZ-0.5)}) * 0.12);
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
`,YJ=`#version 300 es
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


const float TAU = 6.2831853;
const float PEAK_Y = ${F$(D.peakY)};
const float LEDGE_Y = ${F$(D.ledgeY)};
const float BASE_R = ${F$(D.baseR)};
const float FOOT_R = ${F$(D.footR)};
const float PLAZA_R = ${F$(D.plazaR)};
const float STAIR_W = ${F$(D.stairW)};

/** Mortar lines of a stone grid: 1 on the joints, faded out where stones get smaller than a few pixels. */
float joints(vec2 q, float width) {
  vec2 f = abs(fract(q) - 0.5);
  float d = 0.5 - max(f.x, f.y);
  float fw = max(fwidth(q.x), fwidth(q.y));
  float line = 1.0 - smoothstep(width, width + fw * 1.5, d);
  return line * (1.0 - clamp(fw * 3.0 - 0.6, 0.0, 1.0));
}

float hash31(vec3 p) {
  p = fract(p * 0.3183099 + vec3(0.71, 0.113, 0.419));
  p *= 17.0;
  return fract(p.x * p.y * p.z * (p.x + p.y + p.z));
}

/** Value noise in world space: no seams wherever the camera orbits. */
float vnoise3(vec3 p) {
  vec3 i = floor(p);
  vec3 f = fract(p);
  vec3 u = f * f * (3.0 - 2.0 * f);
  float a = mix(hash31(i), hash31(i + vec3(1.0, 0.0, 0.0)), u.x);
  float b = mix(hash31(i + vec3(0.0, 1.0, 0.0)), hash31(i + vec3(1.0, 1.0, 0.0)), u.x);
  float c = mix(hash31(i + vec3(0.0, 0.0, 1.0)), hash31(i + vec3(1.0, 0.0, 1.0)), u.x);
  float d = mix(hash31(i + vec3(0.0, 1.0, 1.0)), hash31(i + vec3(1.0, 1.0, 1.0)), u.x);
  return mix(mix(a, b, u.y), mix(c, d, u.y), u.z);
}

/** The foot plateau: concentric cobbles, a lighter ring where the monsters stand, the stair path, the curb. */
vec3 footFloor(vec2 xz, float r, inout vec3 em) {
  float th = atan(xz.x, xz.y);
  float ringW = 0.46;
  float ri = floor(r / ringW);
  float cnt = max(6.0, floor(TAU * (ri + 0.5) * ringW / 0.55));
  float a = th / TAU * cnt + hash21(vec2(ri, 3.0));
  vec2 q = vec2(r / ringW, a);
  vec3 base = vec3(0.27, 0.22, 0.29) * (0.78 + 0.36 * hash21(floor(q)));
  float ring = 1.0 - smoothstep(1.05, 1.35, abs(r - FOOT_R));
  base = mix(base, base * 1.35 + vec3(0.03, 0.02, 0.0), ring);
  base = mix(base, vec3(0.09, 0.07, 0.11), joints(q, 0.07));
  // Gold inlays along the ring where the monsters stand.
  float inlay = 1.0 - smoothstep(0.025, 0.07, abs(abs(r - FOOT_R) - 1.4));
  em += vec3(1.0, 0.72, 0.28) * inlay * 0.45;
  // The processional path from the town to the stairs, lit by lanterns.
  if (xz.y > 0.0) {
    float path = 1.0 - smoothstep(STAIR_W, STAIR_W + 0.08, abs(xz.x));
    vec2 pq = vec2(xz.x / 0.4, xz.y / 0.32);
    vec3 slab = vec3(0.5, 0.41, 0.4) * (0.85 + 0.2 * hash21(floor(pq)));
    slab = mix(slab, slab * 0.5, joints(pq, 0.06));
    base = mix(base, slab, path);
  }
  // Warm pools of light under the lanterns on the rim.
  float step30 = TAU / 12.0;
  float al = floor(th / step30 + 0.5) * step30;
  vec2 lp = vec2(sin(al), cos(al)) * (PLAZA_R - 0.45);
  float dl = length(xz - lp);
  em += vec3(1.0, 0.68, 0.36) * exp(-dl * dl * 0.7) * 0.32;
  // Dark rock shadow creeping out from the mountain's toe.
  base *= mix(0.55, 1.0, smoothstep(BASE_R - 0.2, BASE_R + 1.2, r));
  float curb = 1.0 - smoothstep(0.0, 0.08, abs(r - PLAZA_R));
  base = mix(base, vec3(0.55, 0.48, 0.54), curb);
  em += vec3(1.0, 0.75, 0.45) * curb * 0.12;
  return base;
}

/** The hill: violet rock with strata and cracks, night grass on the flats, snow on the summit, stairs in front. */
vec3 hillColor(vec3 wp, vec3 n, inout vec3 em) {
  float up = n.y;
  float flatK = smoothstep(0.8, 0.94, up);
  float nz = vnoise3(wp * vec3(1.15, 2.3, 1.15)) * 0.62 + vnoise3(wp * 2.7 + 7.1) * 0.38;
  vec3 rock = mix(vec3(0.21, 0.17, 0.27), vec3(0.48, 0.41, 0.51), nz);
  float strata = 0.5 + 0.5 * sin(wp.y * 5.5 + nz * 4.0);
  rock *= 0.8 + 0.25 * strata;
  float crack = 1.0 - smoothstep(0.0, 0.06, abs(vnoise3(wp * vec3(1.6, 0.7, 1.6) + 3.0) - 0.5));
  rock *= 1.0 - 0.4 * crack * (1.0 - flatK);
  float g = vnoise3(wp * 1.7);
  vec3 grass = mix(vec3(0.09, 0.22, 0.17), vec3(0.2, 0.37, 0.24), g);
  vec3 c = mix(rock, grass, flatK);
  // Snow on the summit and the top of the upper cliff.
  float line = PEAK_Y - 1.35 + nz * 0.7;
  float snow = smoothstep(line, line + 0.4, wp.y) * mix(0.5, 1.0, smoothstep(0.2, 0.7, up));
  c = mix(c, vec3(0.84, 0.85, 0.97) * (0.9 + 0.1 * g), snow);
  // Stone stairs carved up the front cliffs: treads and risers in warm sandstone.
  float sx = abs(wp.x);
  if (wp.z > 0.0 && sx < STAIR_W + 0.1) {
    float mask = (1.0 - smoothstep(STAIR_W - 0.06, STAIR_W + 0.04, sx)) * (1.0 - smoothstep(0.72, 0.9, up));
    float row = floor(wp.y / 0.3);
    float s = fract(wp.y / 0.3);
    vec3 stone = vec3(0.6, 0.48, 0.44) * (0.88 + 0.2 * hash21(vec2(row, 1.0)));
    vec3 stair = mix(stone * 0.5, stone, step(0.42, s));
    c = mix(c, stair, mask);
    float side = (1.0 - smoothstep(0.0, 0.07, abs(sx - STAIR_W))) * (1.0 - smoothstep(0.72, 0.9, up));
    c = mix(c, vec3(0.12, 0.09, 0.13), side * 0.8);
    em += vec3(1.0, 0.66, 0.34) * mask * 0.05;
  }
  return c;
}

void main() {
  vec3 n = normalize(vNormal);
  vec3 base = uColor;
  vec3 emissive = uEmissive;
  float alpha = uAlpha;
  float rimAmount = uRim;
  if (uMode == 1) {
    float r = length(vWorld.xz);
    if (r < PLAZA_R + 0.05) {
      base = footFloor(vWorld.xz, r, emissive);
    } else if (r < PLAZA_R + 1.7) {
      // Ring road around the plateau with a dashed centre line.
      float th = atan(vWorld.x, vWorld.z);
      vec2 q = vec2(r / 0.35, th * r / 0.4);
      base = vec3(0.1, 0.085, 0.14) * (0.85 + 0.2 * hash21(floor(q)));
      float mid = 1.0 - smoothstep(0.03, 0.06, abs(r - PLAZA_R - 0.85));
      float dash = step(0.5, fract(th * r * 0.6));
      emissive += vec3(1.0, 0.8, 0.4) * mid * dash * 0.3;
    } else {
      // The town around: blocks separated by roads with dashed centre lines and pools of street light.
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
      vec2 cross = abs(fract(g + 0.5) - 0.5) * 3.0;
      float lamp = exp(-dot(cross, cross) * 2.2);
      float on = step(0.25, hash21(floor(g + 0.5) + 7.0));
      emissive += vec3(1.0, 0.72, 0.4) * lamp * 0.55 * on;
      emissive += vec3(0.9, 0.3, 0.6) * 0.05 * smoothstep(40.0, 15.0, r);
    }
    rimAmount = 0.0;
  } else if (uMode == 2) {
    vec3 v = normalize(uCamPos - vWorld);
    float fres = pow(1.0 - max(dot(n, v), 0.0), 3.0);
    base = mix(vec3(0.05, 0.12, 0.3), vec3(0.35, 0.3, 0.6), fres);
    float sparkle = pow(max(dot(reflect(-uSunDir, n), v), 0.0), 60.0);
    float glitter = step(0.93, hash21(floor(vWorld.xz * 6.0) + floor(uTime * 3.0))) * sparkle * 4.0;
    emissive += vec3(1.0, 0.7, 0.5) * (sparkle * 1.4 + glitter) + vec3(0.25, 0.15, 0.35) * fres;
    // Town lights reflected as soft vertical streaks near the shore.
    float streak = pow(max(0.0, sin(vWorld.x * 2.3 + sin(vWorld.z * 3.0 + uTime))), 12.0) * smoothstep(${F$(D.waterZ-14)}, ${F$(D.waterZ-1)}, vWorld.z);
    emissive += vec3(1.0, 0.75, 0.45) * streak * 0.35;
    rimAmount = 0.0;
  } else if (uMode == 4) {
    // Banner cloth: seen from both sides; a disc emblem in the second colour and a darker hem.
    if (!gl_FrontFacing) n = -n;
    float d = length((vUv - vec2(0.44, 0.5)) * vec2(1.65, 1.0));
    float emblem = 1.0 - smoothstep(0.27, 0.31, d);
    float hem = clamp(step(vUv.y, 0.09) + step(0.91, vUv.y) + step(0.94, vUv.x), 0.0, 1.0);
    base = mix(uColor, uGlow, emblem);
    base = mix(base, uColor * 0.55, hem);
    emissive += base * 0.2;
  } else if (uMode == 5) {
    base = hillColor(vWorld, n, emissive);
    rimAmount = 0.04;
  }
  vec3 c = shade(base, n, vWorld, rimAmount) + emissive;
  c = mix(c, vec3(1.6, 0.25, 0.25), uFlash);
  outColor = vec4(applyFog(c, vWorld), alpha);
}
`,NJ=`#version 300 es
precision highp float;
precision highp int;

layout(location = 0) in vec3 aPos;
layout(location = 1) in vec3 aNormal;
layout(location = 2) in vec2 aUv;

layout(location = 3) in float aFace;
layout(location = 4) in vec4 iOffset;   // xyz position, w yaw
layout(location = 5) in vec4 iScale;    // xyz size, w seed
layout(location = 6) in vec4 iColor;    // rgb walls, w shake
layout(location = 7) in vec4 iRoof;     // rgb roof, w share of lit windows
uniform mat4 uViewProj;
uniform float uTime;
out vec3 vWorld;
out vec3 vNormal;
out vec3 vLocal;
out vec3 vLocalN;
flat out vec3 vSize;
flat out vec3 vWall;
flat out vec4 vRoof;
flat out float vSeed;
flat out int vPart;
void main() {
  float c = cos(iOffset.w), s = sin(iOffset.w);
  mat3 rot = mat3(c, 0.0, -s, 0.0, 1.0, 0.0, s, 0.0, c);
  vec3 p = aPos * iScale.xyz;
  p.x += sin(uTime * 60.0 + iScale.w * 10.0) * 0.06 * iColor.w * aPos.y;
  vec3 w = rot * p + iOffset.xyz;
  vWorld = w;
  vNormal = rot * normalize(aNormal / iScale.xyz);
  vLocal = aPos;
  vLocalN = aNormal;
  vSize = iScale.xyz;
  vWall = iColor.rgb;
  vRoof = iRoof;
  vSeed = iScale.w;
  vPart = int(aFace + 0.5);
  gl_Position = uViewProj * vec4(w, 1.0);
}
`,MJ=`#version 300 es
precision highp float;
precision highp int;
in vec3 vWorld;
in vec3 vNormal;
in vec3 vLocal;
in vec3 vLocalN;
flat in vec3 vSize;
flat in vec3 vWall;
flat in vec4 vRoof;
flat in float vSeed;
flat in int vPart;
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


float box2(vec2 p, vec2 lo, vec2 hi, float aa) {
  vec2 a = smoothstep(lo - aa, lo + aa, p) * (1.0 - smoothstep(hi - aa, hi + aa, p));
  return a.x * a.y;
}

void main() {
  vec3 n = normalize(vNormal);
  vec3 base;
  vec3 em = vec3(0.0);
  if (vPart == 1) {
    // Roof tiles: courses down the slope, staggered joints.
    float along = vLocal.x * vSize.x;
    float down = (1.62 - vLocal.y) * vSize.y;
    float row = floor(down / 0.17);
    float f = fract(down / 0.17);
    float colId = floor(along / 0.24 + row * 0.5);
    base = vRoof.rgb * (0.8 + 0.3 * hash21(vec2(row, colId) + vSeed * 13.0));
    float fw = fwidth(down / 0.17);
    base *= 1.0 - 0.4 * (1.0 - smoothstep(0.0, 0.2 + fw, f)) * (1.0 - clamp(fw * 2.0 - 0.5, 0.0, 1.0));
  } else if (vPart == 2) {
    base = vec3(0.45, 0.22, 0.2);
  } else {
    base = vWall;
    bool sideX = abs(vLocalN.x) > 0.5;
    if (vLocal.y <= 1.001) {
      float W = sideX ? vSize.z : vSize.x;
      float hz = (sideX ? vLocal.z : vLocal.x) * W;
      float H = vSize.y;
      float y = vLocal.y * H;
      float aa = max(fwidth(hz), fwidth(y)) * 0.8;
      bool front = vLocalN.z > 0.5;
      float cols = max(1.0, floor(W / 0.6));
      float u = (hz + W * 0.5) / (W / cols);
      float rows = H > 1.3 ? 2.0 : 1.0;
      float v = y / (H / rows);
      vec2 cell = vec2(floor(u), floor(v));
      vec2 f = vec2(fract(u), fract(v));
      float win = box2(f, vec2(0.3, 0.34), vec2(0.7, 0.74), aa * cols / W + 0.01);
      float door = 0.0;
      if (front) {
        door = box2(vec2(hz, y), vec2(-0.16, 0.0), vec2(0.16, 0.6), aa);
        // No window over the door.
        if (abs(hz) < 0.36 && cell.y < 0.5) win = 0.0;
      }
      float lit = step(1.0 - vRoof.w, hash21(cell + vec2(vSeed * 31.0, sideX ? 5.0 : 0.0) + vLocalN.xz * 3.0));
      float flicker = 0.88 + 0.12 * sin(uTime * 2.3 + hash21(cell + vSeed) * 30.0);
      vec3 warm = mix(vec3(1.0, 0.74, 0.38), vec3(1.0, 0.86, 0.6), hash21(cell + 9.0));
      base = mix(base, mix(vec3(0.08, 0.1, 0.18), warm * 0.3, lit), win);
      em += warm * win * lit * 1.1 * flicker;
      base = mix(base, vec3(0.3, 0.17, 0.12), door);
      em += vec3(1.0, 0.7, 0.35) * door * step(0.45, y) * 0.25;
    } else if (sideX) {
      // Round attic window in the gable.
      float d = length(vec2(vLocal.z * vSize.z, (vLocal.y - 1.24) * vSize.y));
      float w2 = 1.0 - smoothstep(0.075, 0.095, d);
      float lit = step(0.35, hash21(vec2(vSeed * 7.0, vLocalN.x)));
      base = mix(base, vec3(0.1, 0.1, 0.18), w2);
      em += vec3(1.0, 0.78, 0.45) * w2 * lit;
    }
  }
  vec3 c = shade(base, n, vWorld, 0.08) + em;
  outColor = vec4(applyFog(c, vWorld), 1.0);
}
`,CJ=`#version 300 es
precision highp float;
precision highp int;

layout(location = 0) in vec3 aPos;
layout(location = 1) in vec3 aNormal;
layout(location = 2) in vec2 aUv;

layout(location = 4) in vec4 iPos;     // xyz position, w pattern
layout(location = 5) in vec4 iQuat;    // rotation
layout(location = 6) in vec4 iScale;   // xyz size, w emissive
layout(location = 7) in vec4 iColor;   // rgb colour
uniform mat4 uViewProj;
out vec3 vWorld;
out vec3 vNormal;
out vec3 vLocal;
flat out vec3 vColor;
flat out vec2 vInfo;
vec3 qrot(vec4 q, vec3 v) { return v + 2.0 * cross(q.xyz, cross(q.xyz, v) + q.w * v); }
void main() {
  vec3 w = qrot(iQuat, aPos * iScale.xyz) + iPos.xyz;
  vWorld = w;
  vNormal = qrot(iQuat, aNormal / iScale.xyz);
  vLocal = aPos;
  vColor = iColor.rgb;
  vInfo = vec2(iPos.w, iScale.w);
  gl_Position = uViewProj * vec4(w, 1.0);
}
`,UJ=`#version 300 es
precision highp float;
precision highp int;
in vec3 vWorld;
in vec3 vNormal;
in vec3 vLocal;
flat in vec3 vColor;
flat in vec2 vInfo;
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
  if (vInfo.x > 0.5 && vInfo.x < 1.5) {
    float s = smoothstep(0.45, 0.55, abs(fract(vLocal.x * 3.5 + 0.25) - 0.5) * 2.0);
    base = mix(base, vec3(0.95, 0.92, 0.86), s);
  } else if (vInfo.x > 1.5) {
    float a = atan(vLocal.z, vLocal.x) / 6.2831853;
    float s = step(0.5, fract(vLocal.y * 6.0 + a));
    base = mix(base, vec3(0.97, 0.95, 0.9), s);
  }
  vec3 em = base * vInfo.y;
  vec3 c = vInfo.y > 1.5 ? em : shade(base, n, vWorld, 0.12) + em;
  outColor = vec4(applyFog(c, vWorld), 1.0);
}
`,FJ=`#version 300 es
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
`,qJ=`#version 300 es
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
`,jJ=`#version 300 es
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
`,DJ=`#version 300 es
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
`,TJ=`#version 300 es
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
`,HJ=`#version 300 es
precision highp float;
precision highp int;
in vec3 vWorld;
in vec3 vNormal;
in vec2 vUv;
flat in int vFace;
uniform vec3 uBody;
/** Violet shimmer of a bonus die. */
uniform float uBonus;
uniform float uKept;
uniform float uHover;
uniform float uBlank;
uniform float uDim;
uniform float uSettle;
uniform int uSym[6];
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

float sdCross(vec2 p, vec2 b, float r) {
  p = abs(p);
  p = (p.y > p.x) ? p.yx : p.xy;
  vec2 q = p - b;
  float k = max(q.y, q.x);
  vec2 w = (k > 0.0) ? q : vec2(b.y - p.x, -k);
  return sign(k) * length(max(w, 0.0)) + r;
}

// A sword on the diagonal: blade from the guard up to the tip, then guard, grip and pommel.
float sdSwordBlade(vec2 p) {
  float d = sdSeg(p, vec2(0.37, 0.37), vec2(0.79, 0.79)) - 0.055;
  // Sharpen the tip.
  vec2 q = p - vec2(0.79, 0.79);
  d = max(d, dot(q, normalize(vec2(1.0, 1.0))) - 0.04);
  d = min(d, sdSeg(p, vec2(0.18, 0.18), vec2(0.32, 0.32)) - 0.035);
  return d;
}

float sdSwordGuard(vec2 p) {
  float d = sdSeg(p, vec2(0.22, 0.44), vec2(0.44, 0.22)) - 0.045;
  d = min(d, length(p - vec2(0.16, 0.16)) - 0.06);
  return d;
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
  int sym = uSym[clamp(vFace, 0, 5)];
  if (sym == 0) {
    // Sword: silver blade, red guard and pommel.
    float guard = sdSwordGuard(p);
    d = min(sdSwordBlade(p), guard);
    ink = vec3(0.86, 0.9, 0.98);
    d2 = guard;
    ink2 = vec3(0.95, 0.24, 0.28);
    two = true;
  } else if (sym == 1) {
    // Coin: a gold disc with a darker embossed ring.
    float r = length(p - vec2(0.5));
    d = r - 0.36;
    ink = vec3(1.0, 0.8, 0.22);
    d2 = abs(r - 0.265) - 0.03;
    ink2 = vec3(0.66, 0.42, 0.06);
    two = true;
  } else if (sym == 2) {
    d = sdCross(p - vec2(0.5), vec2(0.34, 0.115), 0.02);
    ink = vec3(0.16, 0.88, 0.58);
  } else {
    // Mana: a blue water drop pointing up, with a small light highlight.
    d = sdDrop(p - vec2(0.5, 0.36), 0.25, 0.02, 0.44);
    ink = vec3(0.22, 0.56, 1.0);
    d2 = sdDrop(p - vec2(0.405, 0.33), 0.055, 0.012, 0.1);
    ink2 = vec3(0.78, 0.93, 1.0);
    two = true;
  }
  float aa = max(fwidth(d) * 1.2, 1e-4);
  float m = 1.0 - smoothstep(-aa, aa, d);
  float m2 = 0.0;
  if (two) {
    float aa2 = max(fwidth(d2) * 1.2, 1e-4);
    m2 = (1.0 - smoothstep(-aa2, aa2, d2)) * m;
  }
  float side = mix(1.0, 0.3, uSettle * (1.0 - smoothstep(0.55, 0.85, n.y)));
  m *= uBlank > 0.5 ? 0.0 : side;
  m2 *= uBlank > 0.5 ? 0.0 : side;
  vec3 col = mix(ink, ink2, m2);
  vec3 base = mix(uBody, col, m);
  vec3 c = shade(base, n, vWorld, 0.25);
  c += col * m * 0.22;
  c += vec3(0.6, 0.35, 1.0) * uBonus * 0.18;
  // Kept: the top turns gold, the sides only warm up a little.
  c += vec3(1.0, 0.8, 0.3) * uKept * mix(0.05, 0.24, smoothstep(0.5, 0.9, n.y));
  c += vec3(1.0, 0.45, 0.75) * uHover * 0.22;
  c = mix(c, vec3(dot(c, vec3(0.3, 0.5, 0.2))) * 0.7, uDim);
  outColor = vec4(c, 1.0);
}
`,a$=`#version 300 es
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
`;var RJ=`#version 300 es
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
`,PJ=`#version 300 es
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
`,SJ=`#version 300 es
precision highp float;
precision highp int;
in vec4 vColor;
uniform float uGain;
out vec4 outColor;
void main() {
  vec2 d = gl_PointCoord - 0.5;
  float r = length(d);
  float a = smoothstep(0.5, 0.0, r);
  float inner = smoothstep(0.18, 0.0, r);
  outColor = vec4(vColor.rgb * (a + inner * 0.8) * vColor.a * uGain, a * vColor.a);
}
`,OJ=`#version 300 es
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
`,AJ=`#version 300 es
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
  } else if (uMode == 2) {
    float k = uProgress;
    float ring = smoothstep(0.12 * (1.0 - k) + 0.02, 0.0, abs(r - k));
    float fill = smoothstep(k, 0.0, r) * 0.25;
    float a = (ring + fill) * (1.0 - k) * (1.0 - k) * uColor.a;
    outColor = vec4(uColor.rgb * a, a);
  } else if (uMode == 3) {
    float ang = atan(vUv.y - 0.5, vUv.x - 0.5);
    float dash = smoothstep(0.35, 0.5, abs(fract(ang * 14.0 / 6.2831853 + uTime * 0.15) - 0.5) * 2.0);
    float ring = smoothstep(0.07, 0.0, abs(r - 0.8)) * dash;
    float a = (ring + smoothstep(0.85, 0.0, r) * 0.08) * uColor.a;
    outColor = vec4(uColor.rgb * a, a);
  } else {
    vec2 p = (vUv - 0.5) * vec2(uProgress, 1.0);
    vec2 h = vec2(uProgress * 0.5 - 0.03, 0.47);
    float rr = 0.22;
    vec2 q = abs(p) - h + rr;
    float sd = length(max(q, 0.0)) + min(max(q.x, q.y), 0.0) - rr;
    float aa = fwidth(sd) * 1.5;
    float fill = 1.0 - smoothstep(-aa, aa, sd);
    float rim = (1.0 - smoothstep(0.0, aa * 2.0 + 0.012, abs(sd + 0.012))) * (0.55 + 0.45 * (0.5 - p.y));
    float a = fill * uColor.a * (0.86 + 0.14 * (0.5 - vUv.y));
    vec3 c = uColor.rgb * a + vec3(0.75, 0.55, 1.0) * rim * 0.32;
    outColor = vec4(c, max(a, rim * 0.32));
  }
}
`,wJ=`#version 300 es
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
`,IJ=`#version 300 es
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
`,_J=`#version 300 es
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
`,EJ=`#version 300 es
precision highp float;
precision highp int;
in vec3 vInfo;
uniform vec3 uColor;
out vec4 outColor;
void main() {
  float x = vInfo.x;
  float glow = exp(-x * x * 5.0);
  float inner = exp(-x * x * 60.0);
  vec3 c = (uColor * glow * 1.4 + vec3(1.0) * inner * 2.2) * vInfo.z;
  outColor = vec4(c, glow * vInfo.z);
}
`,kJ=`#version 300 es
precision highp float;
layout(location = 0) in vec3 aPos;
uniform mat4 uModel;
uniform mat4 uLightVP;
void main() {
  gl_Position = uLightVP * uModel * vec4(aPos, 1.0);
}
`,zJ=`#version 300 es
precision highp float;
layout(location = 0) in vec3 aPos;
layout(location = 4) in vec4 iOffset;
layout(location = 5) in vec4 iScale;
layout(location = 6) in vec4 iColor;
uniform mat4 uLightVP;
uniform float uTime;
uniform float uShake;
void main() {
  float c = cos(iOffset.w), s = sin(iOffset.w);
  mat3 rot = mat3(c, 0.0, -s, 0.0, 1.0, 0.0, s, 0.0, c);
  vec3 p = aPos * iScale.xyz;
  p.x += sin(uTime * 60.0 + iScale.w * 10.0) * uShake * iColor.w * aPos.y;
  gl_Position = uLightVP * vec4(rot * p + iOffset.xyz, 1.0);
}
`,vJ=`#version 300 es
precision highp float;
layout(location = 0) in vec3 aPos;
layout(location = 4) in vec4 iPos;
layout(location = 5) in vec4 iQuat;
layout(location = 6) in vec4 iScale;
uniform mat4 uLightVP;
vec3 qrot(vec4 q, vec3 v) { return v + 2.0 * cross(q.xyz, cross(q.xyz, v) + q.w * v); }
void main() {
  gl_Position = uLightVP * vec4(qrot(iQuat, aPos * iScale.xyz) + iPos.xyz, 1.0);
}
`,Y0=`#version 300 es
precision highp float;
void main() {}
`,fJ=`#version 300 es
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
`,LJ=`#version 300 es
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
`,yJ=`#version 300 es
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
`;var j6=($,Z,J)=>{let W=b((J-$)/(Z-$),0,1);return W*W*(3-2*W)},V$=Math.PI*2,tJ={sword:0,coin:1,heal:2,mana:3},D6=Int32Array.from({length:6},($,Z)=>tJ[q0[Z%q0.length]]),T6=Object.fromEntries(T0.map(($)=>[$,Math.max(0,q0.indexOf($))])),H6={ram:[1,0.45,0.2],roar:[1,0.78,0.3],warcry:[1,0.3,0.25],luck:[0.5,1,0.4],treasure:[1,0.82,0.2],stone:[0.72,0.7,0.82],bite:[0.9,0.12,0.3],rob:[0.35,0.95,0.8],lasso:[1,0.62,0.3],show:[1,0.45,0.85],kick:[0.4,0.9,1],spring:[0.3,0.7,1]},t$=(()=>{let $=[-0.62,0.55,-0.42],Z=Math.hypot(...$);return[$[0]/Z,$[1]/Z,$[2]/Z]})(),R6=[1.15,0.82,0.7],P6=[0.42,0.32,0.62],S6=[0.16,0.1,0.2],O6=[0.62,0.3,0.45],A6=[0,0,0],N0=[0,1,0],w6=[1,38,1],xJ=2048,M0=21,hJ=2,I6=3072,I0=14,C0=900,_0=220,bJ=240,E0=40,j0=(D.ledgeIn+D.ledgeOut)/2,lJ=0.74,z$=0.12,D$=[0,1.3,1.55],_6=[0,D.ledgeY,D.peakY],q$=[0,D.peakY+z$,0.45],c=[0,D.peakY,-1.3],T$=3.4,D0=[0,0,0.3,0.52,0.7,0.86,0.98],uJ=[1.18,1.14,1.3],E6=16.4,dJ=1.24,cJ=10*Math.PI/180,k0=(()=>{let $=[0,0.96,0.27],Z=Math.hypot(...$);return[$[0]/Z,$[1]/Z,$[2]/Z]})(),nJ=0.95,k6=-0.42,z6=0.2,eJ=[0.78,0.77,0.84],v6=[0.6,0.58,0.68],z0=[eJ,v6],f6=[0.74,0.73,0.8],v0=["box","cyl","cone","sphere","prism","pyr"],rJ=[{p:[-22,3.2,8],a0:0.3,speed:0.23,color:[1,0.82,0.72]},{p:[23,4,-5],a0:2.1,speed:-0.19,color:[0.72,0.84,1]},{p:[-9,3.5,-24],a0:4,speed:0.16,color:[1,0.66,0.9]},{p:[13,5,-23],a0:5.2,speed:-0.27,color:[0.9,0.9,1]}];class $6{data={box:[],cyl:[],cone:[],sphere:[],prism:[],pyr:[]};add($,Z,J,W,G,Q=0,K=0){this.data[$].push(Z[0],Z[1],Z[2],Q,J[0],J[1],J[2],J[3],W[0],W[1],W[2],K,G[0],G[1],G[2],1)}}var t=[0,0,0,1],U0=k.create(),L6=[0.2,0.2,0.3],y6=k.fromTRS(k.create(),[0,0.3,D.waterZ-40],t,[170,1,80]),x6=(()=>{let $=new Float32Array(16);return $[0]=2,$[9]=-2,$[15]=1,$})(),h6=[0.44,0.39,0.46],pJ=[0.58,0.5,0.52],iJ=[0.36,0.25,0.2],mJ=[0.18,0.17,0.22],b6=[1,0.78,0.3],oJ=[1,0.78,0.45],gJ=[1,0.55,0.2],u6=[0.12,0.3,0.24],d6=[0.17,0.4,0.3],f0=[0.34,0.29,0.38],r$=[[0.35,0.95,1],[1,0.4,0.85],[0.7,0.5,1]],sJ=[[0.66,0.58,0.5],[0.6,0.52,0.62],[0.52,0.58,0.66],[0.68,0.62,0.46],[0.58,0.64,0.56]],aJ=[[0.78,0.26,0.3],[0.25,0.55,0.62],[0.55,0.32,0.7],[0.85,0.5,0.22],[0.3,0.5,0.35]],L0=[[1,0.85,0.6],[1,0.4,0.7],[1,0.8,0.25],[0.45,0.9,1],[0.75,0.5,1]];function F0($,Z,J,W){if($===R$)return O.copy(W,q$);if($===H$){let K=(Z===0?-1:1)*lJ;return O.set(W,Math.sin(K)*j0,D.ledgeY+z$,Math.cos(K)*j0)}let G=D0[Math.min(J,D0.length-1)],Q=J>1?s(-G,G,Z/(J-1)):0;return O.set(W,Math.sin(Q)*D.footR,0,Math.cos(Q)*D.footR)}function l$($,Z){return Math.max(0,A0(D,Math.hypot($,Z),Math.atan2($,Z)))}class x0{canvas;gl;progs;meshes;buildingMesh;houseMesh;carMesh;propMeshes;particleVao;particleBuf;particleData=new Float32Array((C0+_0+E0+bJ)*8);boltVao;boltBuf;boltData=new Float32Array(I6*6);boltPts=new Float32Array((I0+1)*3);emptyVao;buildingData=new Float32Array(0);houseData=new Float32Array(0);carData=new Float32Array(0);lightData=new Float32Array(0);lightCount=0;fitPoints=new Float32Array(0);fitProj=new Float32Array(0);monsters=new Map;ledgeSlot=new Map;footOrder=[];seats=0;peakHolder=null;synced=!1;flagT0=-10;flagFrom=z0;flagTo=z0;flagFlash=0;beacon=0;flyers=[];buildings=[];cottages=[];buildingsDirty=!0;housesDirty=!0;particles=[];cars=[];bolts=[];waves=[];timers=[];labels=[];labelIndex=new Map;levelLabels=[];signAnchors=Float32Array.from([0,0,0,D.ledgeOut+0.15,D.ledgeY+0.15,0.9,D.peakR+0.35,D.peakY+0.35,0.2]);viewerId=null;colors=new Map;attackT=new Map;dice=[];diceActive=!1;diceResolved=!1;resolvedT=-10;diceViewProj=k.create();diceCam=[0,0,0];diceCenter=[0,0,-0.12];diceOk=!1;dieStepPx=40;diceRect={x:0,y:0,w:0,h:0};hoverDie=-1;fmt;quality="high";pipe=null;direct=!1;shadow=null;dummyShadow;lightVP=k.create();renderScale=1;frameEma=0.016666666666666666;lastScaleCheck=0;hit=0;lessMotion=!1;yaw=0;pitch=0.62;pitchAuto=!0;zoomK=1;camShake=0;camPos=[0,0,0];camTarget=[0,0,0];focus=null;lastInput=-100;drift=[0,0];view=k.create();proj=k.create();viewProj=k.create();invViewProj=k.create();insets={top:0,right:0,bottom:0,left:0};insetsTo={top:0,right:0,bottom:0,left:0};width=1;height=1;dpr=1;time=0;last=0;raf=0;tmp=k.create();tmp2=k.create();tmp3=k.create();v0=[0,0,0];v1=[0,0,0];v2=[0,0,0];v3=[0,0,0];q0=[0,0,0,1];q1=[0,0,0,1];q2=[0,0,0,1];c4=new Float32Array(4);fitExt=[0,0,0,0];scratchLabel={id:"",kind:"m",x:0,y:0,ax:0,ay:0,bx:0,by:0,bw:0,bh:0,level:0,visible:!1};onLabels=null;constructor($,Z="high"){this.canvas=$;let J=$.getContext("webgl2",{antialias:!1,alpha:!1,depth:!0,stencil:!1,powerPreference:"high-performance"});if(!J)throw Error("WebGL2 недоступен");this.gl=J,this.fmt=QJ(J),this.progs={obj:new $$(J,BJ,YJ),bld:new $$(J,FJ,qJ),house:new $$(J,NJ,MJ),prop:new $$(J,CJ,UJ),dice:new $$(J,TJ,HJ),sky:new $$(J,a$,RJ),part:new $$(J,PJ,SJ),decal:new $$(J,OJ,AJ),car:new $$(J,jJ,DJ),beam:new $$(J,wJ,IJ),bolt:new $$(J,_J,EJ),depth:new $$(J,kJ,Y0),depthInst:new $$(J,zJ,Y0),depthProp:new $$(J,vJ,Y0),bright:new $$(J,a$,fJ),blur:new $$(J,a$,LJ),composite:new $$(J,a$,yJ)};for(let V of[this.progs.obj,this.progs.bld,this.progs.house,this.progs.prop,this.progs.dice,this.progs.car])V.use().int("uShadowMap",1);this.progs.dice.use().ints("uSym",D6);let W=this.progs.composite.use();W.int("uScene",0),W.int("uBloom1",2),W.int("uBloom2",3);let G=this.progs.obj;this.meshes={sphere:new g(J,G,O0(14,20)),box:new g(J,G,o$()),cyl:new g(J,G,_$(0.5,0.5,18)),cone:new g(J,G,_$(0.5,0,18)),ground:new g(J,G,V0(160,1)),water:new g(J,G,V0(1,60)),dice:new g(J,this.progs.dice,e0(0.22,7)),quad:new g(J,this.progs.decal,V0(1,1)),beam:new g(J,this.progs.beam,_$(0.1,1.9,24,!1)),cloth:new g(J,G,JJ(14,6)),hill:new g(J,G,GJ(D))},this.buildingMesh=new g(J,this.progs.bld,o$(!0),[{name:"iOffset",size:4},{name:"iScale",size:4},{name:"iColor",size:4}]),this.houseMesh=new g(J,this.progs.house,$J(),[{name:"iOffset",size:4},{name:"iScale",size:4},{name:"iColor",size:4},{name:"iRoof",size:4}]),this.carMesh=new g(J,this.progs.car,o$(!0),[{name:"iOffset",size:4},{name:"iColor",size:4}]);let Q=[{name:"iPos",size:4},{name:"iQuat",size:4},{name:"iScale",size:4},{name:"iColor",size:4}],K=this.progs.prop;this.propMeshes={box:new g(J,K,o$(),Q),cyl:new g(J,K,_$(0.5,0.5,14),Q),cone:new g(J,K,_$(0.5,0,14),Q),sphere:new g(J,K,O0(8,12),Q),prism:new g(J,K,ZJ(),Q),pyr:new g(J,K,_$(0.5,0,4),Q)},this.emptyVao=J.createVertexArray(),this.particleVao=J.createVertexArray(),this.particleBuf=J.createBuffer(),J.bindVertexArray(this.particleVao),J.bindBuffer(J.ARRAY_BUFFER,this.particleBuf),J.bufferData(J.ARRAY_BUFFER,this.particleData.byteLength,J.DYNAMIC_DRAW),J.enableVertexAttribArray(0),J.vertexAttribPointer(0,3,J.FLOAT,!1,32,0),J.enableVertexAttribArray(1),J.vertexAttribPointer(1,4,J.FLOAT,!1,32,12),J.enableVertexAttribArray(2),J.vertexAttribPointer(2,1,J.FLOAT,!1,32,28),this.boltVao=J.createVertexArray(),this.boltBuf=J.createBuffer(),J.bindVertexArray(this.boltVao),J.bindBuffer(J.ARRAY_BUFFER,this.boltBuf),J.bufferData(J.ARRAY_BUFFER,this.boltData.byteLength,J.DYNAMIC_DRAW),J.enableVertexAttribArray(0),J.vertexAttribPointer(0,3,J.FLOAT,!1,24,0),J.enableVertexAttribArray(1),J.vertexAttribPointer(1,3,J.FLOAT,!1,24,12),J.bindVertexArray(null),this.dummyShadow=new X0(J,1),J.bindFramebuffer(J.FRAMEBUFFER,this.dummyShadow.fb),J.clearDepth(1),J.clear(J.DEPTH_BUFFER_BIT),J.bindFramebuffer(J.FRAMEBUFFER,null),this.quality=Z,this.renderScale=Z==="high"?1:0.8,this.setupShadow(),this.buildHill(),this.buildCity(),this.buildCars(),this.buildFit(4),this.levelLabels=[0,1,2].map((V)=>{let B=this.label(`l:${V}`,"l");return B.level=V,B}),this.start()}setQuality($){if($===this.quality)return;this.quality=$,this.renderScale=$==="high"?1:0.8,this.setupShadow(),this.rebuildTargets(),this.buildCars()}setupShadow(){if(this.quality==="high"&&!this.shadow){let $=new X0(this.gl,xJ);if($.ok)this.shadow=$;else $.dispose()}else if(this.quality==="low"&&this.shadow)this.shadow.dispose(),this.shadow=null}maxSamples(){let $=this.gl;try{let Z=$.getInternalformatParameter($.RENDERBUFFER,this.fmt.internal,$.SAMPLES);return Z&&Z.length?Math.max(...Array.from(Z)):0}catch{return 0}}rebuildTargets(){let $=this.pipe;if($)$.scene.dispose(),$.ms?.dispose(),$.bloomA.dispose(),$.bloomB.dispose(),$.bloomC.dispose(),$.bloomD.dispose(),this.pipe=null;if(this.direct)return;let Z=this.gl,J=Math.max(1,Math.round(this.canvas.width*this.renderScale)),W=Math.max(1,Math.round(this.canvas.height*this.renderScale)),G=(K)=>{let V=null;{let q=Math.min(this.quality==="high"?4:2,this.maxSamples());if(q>1){if(V=new w0(Z,J,W,K,q),!V.ok)V.dispose(),V=null}}let B=new E$(Z,J,W,K,!V),M=(q)=>Math.max(1,q>>1),N=(q)=>Math.max(1,q>>2),Y=new E$(Z,M(J),M(W),K,!1),X=new E$(Z,M(J),M(W),K,!1),C=new E$(Z,N(J),N(W),K,!1),U=new E$(Z,N(J),N(W),K,!1),F=[B,Y,X,C,U];if(F.every((q)=>q.ok))return{scene:B,ms:V,bloomA:Y,bloomB:X,bloomC:C,bloomD:U};return F.forEach((q)=>q.dispose()),V?.dispose(),null},Q=G(this.fmt);if(!Q&&this.fmt.hdr)this.fmt={internal:Z.RGBA8,format:Z.RGBA,type:Z.UNSIGNED_BYTE,hdr:!1},Q=G(this.fmt);if(!Q){this.direct=!0;return}this.pipe=Q}buildHill(){let $=new $6,Z=[],J=(X,C,U,F=0)=>{Z.push(X[0],X[1],X[2],C[0],C[1],C[2],F,U)},W=(X,C,U=0)=>[Math.sin(C)*X,U,Math.cos(C)*X],G=(X,C,U)=>{$.add("cyl",X,t,[0.09,C,0.09],iJ),$.add("cone",[X[0],X[1]+C-0.02,X[2]],f.axisAngle([1,0,0],Math.PI),[0.24,0.2,0.24],mJ),$.add("sphere",[X[0],X[1]+C+0.08,X[2]],t,[0.2,0.28,0.2],gJ,0,2.6),J([X[0],X[1]+C+0.12,X[2]],gJ,1.25,U)},Q=(X,C,U)=>{$.add("cyl",X,t,[0.08,C,0.08],mJ),$.add("sphere",[X[0],X[1]+C+0.1,X[2]],t,[0.26,0.26,0.26],oJ,0,2.2),J([X[0],X[1]+C+0.1,X[2]],oJ,0.85,U)},K=(X,C)=>{$.add("cyl",X,t,[0.2*C,0.5*C,0.2*C],[0.3,0.2,0.15]),$.add("cone",[X[0],X[1]+0.4*C,X[2]],t,[1.2*C,1.5*C,1.2*C],u6),$.add("cone",[X[0],X[1]+1*C,X[2]],t,[0.85*C,1.15*C,0.85*C],d6)},V=(X,C,U)=>{let F=f.euler(U*3.1,U*5.7,U*1.3);$.add("sphere",[X[0],X[1]+C*0.25,X[2]],F,[C*1.3,C*0.8,C],f0)};$.add("cyl",[q$[0],D.peakY-0.2,q$[2]],t,[D$[2]*2,0.2+z$,D$[2]*2],pJ),$.add("cyl",[c[0],c[1]-0.1,c[2]],t,[0.5,0.35,0.5],h6),$.add("cyl",c,t,[0.12,T$,0.12],iJ),$.add("sphere",[c[0],c[1]+T$+0.1,c[2]],t,[0.3,0.3,0.3],b6,0,0.9);for(let X of[-1,1])G([X*1.65,D.peakY,-0.55],0.95,X*1.7);for(let X of[0,1]){let C=(X===0?-1:1)*lJ,U=W(j0,C,D.ledgeY-0.2);$.add("cyl",U,t,[D$[1]*2,0.2+z$,D$[1]*2],pJ),G(W(j0+0.2,C+(X===0?-1:1)*0.36,D.ledgeY),1,X*2.3)}for(let X of[-1,1]){let C=X*(D.stairW+0.35);Q([C,0,D.baseR+0.35],1.5,X),Q([C,D.ledgeY,D.ledgeOut-0.25],1.1,X+2),Q([C,D.ledgeY,D.ledgeIn+0.25],1.1,X+4),Q([C,D.peakY,D.peakR-0.25],0.9,X+6)}for(let X of[11.6,13.3])for(let C of[-1,1])Q([C*(D.stairW+0.45),0,X],1.4,X+C);for(let X=0;X<14;X++){let C=Math.PI*0.62+X/13*Math.PI*0.76+(S(X*3.3)-0.5)*0.12,U=X%2===0?C:-C,F=s(D.ledgeIn+0.8,D.ledgeOut-0.5,S(X*7.7));K(W(F,U,D.ledgeY),0.75+S(X*1.9)*0.4)}for(let X=0;X<26;X++){let C=X/26*V$+S(X*2.1)*0.2;if(Math.abs(Math.atan2(Math.sin(C),Math.cos(C)))<1.25)continue;let U=D.baseR+1.2+S(X*5.3)*2.2;K(W(U,C),0.9+S(X*4.4)*0.5)}for(let X=0;X<22;X++){let C=X/22*V$+S(X*9.1)*0.25,U=Math.abs(Math.atan2(Math.sin(C),Math.cos(C)));if(U<0.22)continue;if(V(W(D.baseR+0.15,C),0.55+S(X*3.7)*0.5,S(X)),X%2===0&&U>1.2)V(W(D.ledgeIn+0.2,C+0.1,D.ledgeY),0.4+S(X*6.1)*0.3,S(X+9))}let B=(X,C,U,F,q)=>{let H=W(X,C,U),R=VJ([0,1,0],[Math.sin(C)*0.6,0.8,Math.cos(C)*0.6]);$.add("pyr",H,R,[0.35*F,1.1*F,0.35*F],q,0,2.2),$.add("pyr",[H[0]+0.2,H[1],H[2]+0.1],f.multiply(R,f.axisAngle([0,0,1],0.5)),[0.22*F,0.7*F,0.22*F],q,0,2.2),J([H[0],H[1]+0.4*F,H[2]],q,1.3,C*3)},M=(X,C)=>(X+C)/2;B(M(D.ledgeOut,D.baseR)+0.25,1.35,D.ledgeY*0.45,1,r$[0]),B(M(D.ledgeOut,D.baseR)+0.25,-1.45,D.ledgeY*0.4,0.9,r$[1]),B(M(D.ledgeOut,D.baseR)+0.3,2.4,D.ledgeY*0.5,1.1,r$[2]),B(M(D.ledgeOut,D.baseR)+0.3,-2.5,D.ledgeY*0.45,1,r$[0]),B(M(D.peakR,D.ledgeIn)+0.3,1.6,M(D.ledgeY,D.peakY)-0.2,0.8,r$[1]),B(M(D.peakR,D.ledgeIn)+0.3,-1.9,M(D.ledgeY,D.peakY)-0.3,0.8,r$[2]);for(let X=1;X<12;X++){let C=X/12*V$;Q(W(D.plazaR-0.45,C),1.8,X*1.3)}let N=[];this.cottages=[];let Y=34;for(let X=0;X<Y;X++){let C=(X+0.5)/Y*V$;if(Math.abs(Math.atan2(Math.sin(C),Math.cos(C)))<0.14)continue;let U=S(X*31+3),F=E6+(S(X*13)-0.5)*0.7,q=Math.sin(C)*F,H=Math.cos(C)*F,R=1.5+S(U*9.1)*0.55,I=1.25+S(U*5.3)*0.35,_=1+S(U*7.7)*0.55,w=sJ[Math.floor(S(U*3.3)*sJ.length)],j=aJ[Math.floor(S(U*4.9)*aJ.length)],A=0.82+S(U*2.1)*0.3;if(N.push(q,0,H,Math.atan2(-q,-H),R,_,I,U,w[0],w[1],w[2],0,j[0]*A,j[1]*A,j[2]*A,0.72),this.cottages.push({x:q,z:H,shakeT:-10}),X%3===1)K(W(F+1.6,C+0.06),0.8+S(X*2.9)*0.4)}for(let X of v0)this.propMeshes[X].setInstances(new Float32Array($.data[X]));this.houseData=new Float32Array(N),this.housesDirty=!0,this.lightData=new Float32Array(Z),this.lightCount=Math.min(_0,Z.length/8)}buildCity(){let $=[],Z=0;for(let J=-13;J<13;J++)for(let W=-12;W<13;W++){let G=J*3+1.5,Q=W*3+1.5,K=Math.hypot(G,Q);if(K<19.6||K>38)continue;if(Q<D.waterZ+1)continue;let B=S(J*31+W*17+5)>0.55?2:1;for(let M=0;M<B;M++){let N=S(Z*7.3+M),Y=B===1?1.6+N*0.5:0.95,X=B===1?1.6+S(Z*3.1)*0.5:1.8,C=B===1?0:(M-0.5)*1.05,U=S(Z*5.7+M),F=K<23?0.9+U*1.4:K<28?1.5+U*3:2.5+U*U*7+2*S(Z*9.1);if(Q>14)F=Math.min(F,1.5+(Q-14)*0.12);let q=S(Z*2.3+M),H=q<0.33?[0.28,0.24,0.42]:q<0.66?[0.36,0.3,0.38]:[0.22,0.28,0.4];$.push({x:G+C,z:Q,w:Y,d:X,h:F,color:H,seed:S(Z*13.7+M),shakeT:-10})}Z++}this.buildings=$,this.buildingData=new Float32Array($.length*12),this.buildingsDirty=!0}buildCars(){let $=this.quality==="high"?64:28,Z=[[0.85,0.85,0.9],[0.12,0.12,0.15],[0.8,0.15,0.2],[0.95,0.75,0.15],[0.2,0.45,0.85],[0.9,0.9,0.3]],J=[];for(let W=0;W<$;W++){let G=S(W*3.7)>0.5?1:0,Q=S(W*5.3)>0.5?1:-1;J.push({axis:G,line:(Math.floor(S(W*7.1)*25)-12)*3,lane:Q*0.13,dir:Q,speed:1.3+S(W*9.7)*1.4,phase:S(W*11.3)*80,color:Z[Math.floor(S(W*13.1)*Z.length)]})}this.cars=J,this.carData=new Float32Array($*8)}buildFit($){let Z=[],J=this.v0,W=D.footR;for(let G=0;G<Math.max(1,$);G++){F0(k$,G,$,J);let Q=Math.atan2(J[0],J[2]);for(let K of[-0.19,0.19]){let V=Math.sin(Q+K)*W,B=Math.cos(Q+K)*W;Z.push(V,0,B,V,3.1,B)}Z.push(J[0],0.8,J[2]+1.3)}for(let G of[0,1])F0(H$,G,$,J),Z.push(J[0],J[1]+3.3,J[2],J[0]*1.15,J[1],J[2]);Z.push(q$[0],q$[1]+3.4,q$[2],c[0],c[1]+T$+0.5,c[2]),Z.push(-D.ledgeOut,D.ledgeY,0,D.ledgeOut,D.ledgeY,0,-D.baseR*0.9,0,0,D.baseR*0.9,0,0),this.fitPoints=new Float32Array(Z),this.fitProj=new Float32Array(Z.length)}sync($,Z,J){this.viewerId=Z,this.diceActive=J;let W=$.players.length;if(W!==this.seats)this.seats=W,this.buildFit(W);for(let Y of $.players){let X=y0[Y.monster];if(!this.colors.has(Y.id))this.colors.set(Y.id,[n$(X.color),n$(X.accent)])}for(let Y of[...this.ledgeSlot.keys()])if(!$.players.some((X)=>X.id===Y&&X.level===H$))this.ledgeSlot.delete(Y);for(let Y of $.players){if(Y.level!==H$||this.ledgeSlot.has(Y.id))continue;let X=new Set(this.ledgeSlot.values()),C=[0,1].filter((F)=>!X.has(F));if(!C.length)continue;let U=this.monsters.get(Y.id);this.ledgeSlot.set(Y.id,C.length===2&&U&&U.pos[0]>0.5?1:C[0])}let G=this.footOrder;G.length=0;for(let Y=0;Y<W;Y++){let X=$.players[($.startPlayer+Y)%W];if(X.level===k$)G.push(X.id)}let Q=$.players[$.current],K=this.v1;$.players.forEach((Y,X)=>{let C=Y.level===H$?this.ledgeSlot.get(Y.id)??0:Y.level===k$?G.indexOf(Y.id):0;F0(Y.level,C,G.length,K);let U=this.monsters.get(Y.id);if(!U)U=this.makeMonster(Y.id,Y.monster,X,K),U.level=Y.level,U.scale=U.scaleTo=uJ[Y.level],this.monsters.set(Y.id,U);if(U.to[0]!==K[0]||U.to[1]!==K[1]||U.to[2]!==K[2])this.startMove(U,K);U.level=Y.level,U.scaleTo=uJ[Y.level],U.current=Y.id===Q.id&&$.phase!=="gameOver"});for(let Y of[...this.monsters.keys()])if(!$.players.some((X)=>X.id===Y))this.monsters.delete(Y);let V=$.players.find((Y)=>Y.level===R$)?.id??null;if(V!==this.peakHolder){if(this.synced){this.flagT0=this.time+0.5,this.flagFrom=this.colorsOf(this.peakHolder),this.flagTo=this.colorsOf(V);let Y=[c[0],c[1]+T$,c[2]];this.later(0.5,()=>this.burst(Y,18,this.flagFrom[0],2.2,1.1,0.5,-1.5)),this.later(1.45,()=>{this.flagFlash=1;let X=this.flagTo[0];if(V)this.burst(Y,50,X,4.5,1.4,0.55,-2.5),this.burst(Y,20,[1,0.9,0.55],2.5,1,0.4,-1),this.waves.push({p:[0,D.peakY+z$+0.03,0],t0:this.time,dur:1,size:8,color:[X[0],X[1],X[2],1]})})}else this.flagFrom=this.flagTo=this.colorsOf(V);this.peakHolder=V}this.synced=!0;let B=$.phase==="roll"&&!$.flags.rolled;while(this.dice.length<$.dice.length)this.dice.push({face:"sword",kept:!1,bonus:!1,blank:!0,q:f.identity(),pos:[0,0,0],target:[0,0,0],rollT0:-10,throwFrom:[0,0,0],axis:[1,0,0],turns:0,sx:0,sy:0});this.dice.length=$.dice.length;let M=$.dice.length,N=$.flags.resolved&&$.phase!=="gameOver";if(N&&!this.diceResolved)this.resolvedT=this.time;this.diceResolved=N,$.dice.forEach((Y,X)=>{let C=this.dice[X];if(C.face!==Y.face||C.blank!==B)f.setAxisAngle(this.q0,0,1,0,(S(X*7.7+$.turn*3.1+tJ[Y.face])-0.5)*0.45),f.mulInto(C.q,this.q0,n6[T6[Y.face]]);if(C.face=Y.face,C.bonus=Y.bonus,C.blank=B,C.kept=Y.kept&&$.phase==="roll"&&$.flags.rolled,O.set(C.target,(X-(M-1)/2)*dJ,0,C.kept?k6:z6),C.pos[0]===0&&C.pos[2]===0)O.copy(C.pos,C.target)})}setInsets($,Z,J,W){let G=this.insetsTo.top===0&&this.insetsTo.bottom===0;if(this.insetsTo={top:$,right:Z,bottom:J,left:W},G)this.insets={top:$,right:Z,bottom:J,left:W}}makeMonster($,Z,J,W){let G=y0[Z],Q=n$(G.color),K=n$(G.accent),V=XJ[Z],B=0;for(let M of V)B=Math.max(B,M.pos[1]+(M.mesh==="cyl"||M.mesh==="cone"?M.scale[1]:M.scale[1]/2));return{id:$,monster:Z,parts:V,partQ:V.map((M)=>M.rot?f.euler(M.rot[0],M.rot[1],M.rot[2]):f.identity()),partMesh:V.map((M)=>M.mesh),partColor:V.map((M)=>M.color==="main"?Q:M.color==="accent"?K:n$(M.color)),main:Q,accent:K,height:B,pos:[...W],from:[...W],to:[...W],mid:[...W],startedAt:-10,moveT0:-10,moveDur:1,arc:0,flips:0,how:"walk",pending:null,moveEventT:-10,koT:-10,dizzyT:-10,level:k$,yaw:0,scale:1,scaleTo:1,flashT:-10,lungeT:-10,lungeDir:[0,0,1],landT:-10,current:!1,seed:J*1.37+0.3,landed:!0}}startMove($,Z){if(O.copy($.from,$.pos),O.copy($.to,Z),$.startedAt=this.time,$.landed=!1,$.pending&&Math.abs(this.time-$.pending.t)<0.001)this.applyPending($);else this.setStyle($,"walk",0)}applyPending($){let Z=$.pending;$.pending=null,this.setStyle($,Z.how,Z.delay)}setStyle($,Z,J){$.how=Z,$.moveT0=$.startedAt+J;let W=Math.hypot($.to[0]-$.from[0],$.to[2]-$.from[2]),G=this.lessMotion;switch(Z){case"walk":$.moveDur=b(0.5+W*0.05,0.5,1),$.arc=Math.min(2.2,0.4+W*0.12+Math.abs($.to[1]-$.from[1])*0.3),$.flips=0;break;case"climb":$.moveDur=1.05,$.arc=1.1,$.flips=0,$.mid[0]=s($.from[0],$.to[0],0.52),$.mid[2]=s($.from[2],$.to[2],0.52),$.mid[1]=Math.max(l$($.mid[0],$.mid[2])+0.35,s($.from[1],$.to[1],0.55));break;case"jump":$.moveDur=0.85,$.arc=1.9,$.flips=0;break;case"push":$.moveDur=1.05,$.arc=2.3,$.flips=G?0:1;break;case"fall":$.moveDur=1.4,$.arc=3.2,$.flips=G?0:2;break;case"slide":$.moveDur=1.35,$.arc=0.3,$.flips=0;break}}event($){let Z=this.time;switch($.type){case"roll":for(let J of $.indices){let W=this.dice[J];if(!W)continue;W.rollT0=Z+S(J*3.3+Z)*0.12;let G=(S(J*5.1+Z*7)-0.5)*2.4;O.set(W.throwFrom,G,2.4+S(J*9.7+Z)*1.2,1.5+S(J*2.3+Z)*0.9);let Q=Math.hypot(W.throwFrom[0],W.throwFrom[2])||1;O.set(W.axis,-W.throwFrom[2]/Q,0,W.throwFrom[0]/Q),W.turns=1.3+S(J*4.1+Z*3)*1.1}break;case"move":{let J=this.monsters.get($.playerId);if(!J)break;J.moveEventT=Z;let W,G=0;switch($.how){case"climb":W="climb",G=this.attackT.get($.playerId)===Z?0.6:0.2;break;case"jump":W="jump",G=0.15;break;case"fall":W="fall",G=0.32;break;case"push":W="push",G=0.3;break;default:W="slide",G=0.45+S(J.seed)*0.3}if(J.pending={how:W,delay:G,t:Z},Math.abs(J.startedAt-Z)<0.001)this.applyPending(J);if(W==="slide")this.later(G,()=>this.burst([J.pos[0],J.pos[1]+0.3,J.pos[2]],26,f0,2.4,1.4,0.5,-5));if(!this.lessMotion&&(W==="climb"||W==="fall")&&$.to===R$)this.focusOn(q$,q$[1],G+0.3);break}case"attack":{let J=this.monsters.get($.playerId);if(!J)break;this.attackT.set($.playerId,Z);let W=0,G=0,Q=0,K=0;for(let Y of $.targets){let X=this.monsters.get(Y);if(!X)continue;W+=X.pos[0],G+=X.pos[1],Q+=X.pos[2],K++}if(!K)break;W/=K,G/=K,Q/=K;let V=W-J.pos[0],B=Q-J.pos[2],M=Math.hypot(V,B)||1;O.set(J.lungeDir,V/M,0,B/M),J.lungeT=Z;let N=0;for(let Y of $.targets){let X=this.monsters.get(Y);if(!X)continue;this.bolts.push({a:[J.pos[0]+J.lungeDir[0]*0.6,J.pos[1]+J.height*J.scale*0.6,J.pos[2]+J.lungeDir[2]*0.6],b:[X.pos[0],X.pos[1]+X.height*X.scale*0.55,X.pos[2]],t0:Z+0.12+N*0.05,color:[J.accent[0]*0.5+0.5,J.accent[1]*0.5+0.3,J.accent[2]*0.5+0.4],seed:S(Z*13+N)*100}),N++}if(!this.lessMotion)this.focusOn([(J.pos[0]+W)/2,0,(J.pos[2]+Q)/2],(J.pos[1]+G)/2+1.2,0);break}case"damage":{let J=this.monsters.get($.playerId);if(!J)break;let W=$.amount,G=$.playerId===this.viewerId,Q=$.sourceId===$.playerId,K=J.moveEventT===Z,V=()=>{let B=J.pos[1]+J.height*J.scale*0.55;if(J.flashT=this.time,this.camShake=Math.min(0.6,this.camShake+(this.lessMotion||Q?0.04:0.12+W*0.04)),this.burst([J.pos[0],B,J.pos[2]],12+W*7,[1,0.35,0.2],4,0.9,0.45,-6),this.burst([J.pos[0],B,J.pos[2]],7,[1,0.9,0.5],2.5,0.6,0.3,-4),this.shakeNear(J.pos,5),this.waves.push({p:[J.pos[0],l$(J.pos[0],J.pos[2])+0.06,J.pos[2]],t0:this.time,dur:0.55,size:3.5+W*0.6,color:[1,0.35,0.2,0.9]}),!this.lessMotion&&!Q&&(G||W>=3))this.hit=Math.max(this.hit,G?1:0.45)};this.later(0.2,()=>{let B=K?J.moveT0+J.moveDur-this.time:0;if(B>0.02)this.later(B,V);else V()});break}case"heal":{let J=this.monsters.get($.playerId);if(J)this.burst([J.pos[0],J.pos[1]+0.4,J.pos[2]],8+$.amount*4,[0.3,1,0.5],1,1.3,0.4,2);break}case"coins":{let J=this.monsters.get($.playerId);if(J&&$.amount>0)this.burst([J.pos[0],J.pos[1]+J.height*J.scale,J.pos[2]],5+$.amount*3,[1,0.8,0.2],1.8,1,0.3,1);break}case"mana":{let J=this.monsters.get($.playerId);if(J&&$.amount>0)this.burst([J.pos[0],J.pos[1]+0.6,J.pos[2]],7+$.amount*4,[0.25,0.55,1],1.1,1.3,0.35,2.4);break}case"vp":{let J=this.monsters.get($.playerId);if(!J||$.amount<=0)break;this.burst([J.pos[0],J.pos[1]+J.height*J.scale+0.3,J.pos[2]],6+$.amount*4,[1,0.8,0.3],2,1.2,0.45,0.5);break}case"height":{let J=this.monsters.get($.playerId);if(!J)break;let W=_6[$.level]+z$+0.1,G=Math.min(14,3+$.amount*3);for(let Q=0;Q<G;Q++){let K=Q/G*V$+S(Z+Q)*0.4,V=D$[$.level]||1.3;this.flyers.push({p0:[J.to[0]+Math.sin(K)*V,W,J.to[2]+Math.cos(K)*V],target:$.playerId,t0:Z+0.1+Q*0.07,dur:0.95,color:[1,0.82,0.3],size:0.85,lift:1.6})}this.waves.push({p:[J.to[0],W-0.05,J.to[2]],t0:Z,dur:1.2,size:5+$.amount,color:[1,0.8,0.3,1]}),this.later(0.2,()=>this.burst([J.to[0],W,J.to[2]],16+$.amount*6,[1,0.85,0.35],1.6,1.2,0.4,1.5));break}case"yield":{let J=this.monsters.get($.playerId);if(!J||$.jump)break;J.landT=Z,this.waves.push({p:[J.pos[0],J.pos[1]+0.05,J.pos[2]],t0:Z,dur:0.7,size:5,color:[J.main[0],J.main[1],J.main[2],1]}),this.burst([J.pos[0],J.pos[1]+0.2,J.pos[2]],18,f0,2.4,0.8,0.45,-3),this.camShake=Math.min(0.5,this.camShake+(this.lessMotion?0.04:0.2));break}case"ko":{let J=this.monsters.get($.playerId);if(!J)break;J.koT=Z,this.later(0.2,()=>{let W=J.pos;this.burst([W[0],W[1]+1,W[2]],50,[0.6,0.5,0.75],3.5,1.5,0.7,1),this.burst([W[0],W[1]+2.4,W[2]],16,[1,0.9,0.4],2,1.3,0.4,-1),this.waves.push({p:[W[0],l$(W[0],W[2])+0.06,W[2]],t0:this.time,dur:1.1,size:7,color:[0.8,0.6,1,0.8]}),this.camShake=Math.min(0.9,this.camShake+(this.lessMotion?0.2:0.6)),this.shakeNear(W,7)}),this.later(0.3,()=>{if(J.moveEventT>=J.koT||this.time-J.startedAt<0.4)return;O.copy(J.from,J.to),J.startedAt=this.time,J.landed=!1,this.setStyle(J,"fall",0),J.moveDur=1,J.arc=1.6,J.flips=this.lessMotion?0:1});break}case"ability":{let J=this.monsters.get($.playerId);if(!J)break;let W=H6[$.abilityId]??J.accent;if(!this.lessMotion)this.focusOn(J.pos,J.pos[1]+1.8,0);let G=J.height*J.scale;for(let K=0;K<5;K++){let V=K/5*V$;this.bolts.push({a:[J.pos[0]+Math.cos(V)*4,J.pos[1]+13+K,J.pos[2]+Math.sin(V)*4],b:[J.pos[0],J.pos[1]+G,J.pos[2]],t0:Z+K*0.07,color:[W[0]*0.6+0.4,W[1]*0.6+0.4,W[2]*0.6+0.4],seed:S(Z*7+K)*100})}let Q=$.targetId?this.monsters.get($.targetId):void 0;if(Q)this.bolts.push({a:[J.pos[0],J.pos[1]+G*0.7,J.pos[2]],b:[Q.pos[0],Q.pos[1]+Q.height*Q.scale*0.6,Q.pos[2]],t0:Z+0.3,color:[W[0]*0.7+0.3,W[1]*0.7+0.3,W[2]*0.7+0.3],seed:S(Z*11)*100});this.later(0.3,()=>{if(this.burst([J.pos[0],J.pos[1]+G*0.7,J.pos[2]],70,W,5,1.3,0.6,-1),this.burst([J.pos[0],J.pos[1]+G*0.7,J.pos[2]],30,J.accent,3.5,1.1,0.45,1.5),this.waves.push({p:[J.pos[0],J.pos[1]+0.06,J.pos[2]],t0:this.time,dur:1.1,size:11,color:[W[0],W[1],W[2],1]}),$.abilityId==="roar")for(let K=1;K<3;K++)this.later(K*0.18,()=>this.waves.push({p:[J.pos[0],J.pos[1]+0.06,J.pos[2]],t0:this.time,dur:1.2,size:13+K*4,color:[W[0],W[1],W[2],0.8]}));if($.abilityId==="spring")this.burst([J.pos[0],J.pos[1]+0.2,J.pos[2]],40,[0.4,0.8,1],2.2,1.6,0.4,-3);this.camShake=Math.min(0.8,this.camShake+(this.lessMotion?0.1:0.4)),this.shakeNear(J.pos,6)});break}case"combo":{let J=this.monsters.get($.playerId);if(!J)break;let W=J.pos[1]+J.height*J.scale+0.6;this.burst([J.pos[0],W,J.pos[2]],26+$.count*8,[1,0.35,0.35],3.5,1.2,0.5,-1),this.burst([J.pos[0],W,J.pos[2]],10+$.count*4,[0.85,0.9,1],2.5,0.9,0.35,-1);break}case"buy":{let J=this.monsters.get($.playerId);if(!J)break;for(let W=0;W<5;W++){let G=W/5*V$;this.flyers.push({p0:[J.pos[0]+Math.sin(G)*2.2,J.pos[1]+6+W*0.3,J.pos[2]+Math.cos(G)*2.2],target:$.playerId,t0:Z+W*0.06,dur:0.7,color:[0.55,0.85,1],size:0.8,lift:0.5})}this.later(0.7,()=>this.burst([J.pos[0],J.pos[1]+J.height*J.scale*0.8,J.pos[2]],22,[0.5,0.85,1],2.2,0.9,0.35,-1));break}case"news":{let J=[c[0],c[1]+T$+0.4,c[2]];for(let W=0;W<5;W++)this.later(W*0.12,()=>this.burst(J,26,L0[W],4.5,1.6,0.45,-3));break}case"win":for(let J of $.playerIds){let W=this.monsters.get(J);if(!W)continue;if(!this.lessMotion)this.focusOn(W.pos,W.pos[1]+1.5,0);for(let G=0;G<6;G++)this.later(G*0.3,()=>{let Q=L0[G%L0.length];this.burst([W.pos[0]+(S(this.time+G)-0.5)*6,W.pos[1]+6+S(G*3.3)*3,W.pos[2]+(S(this.time*3+G)-0.5)*6],70,Q,7,1.6,0.6,-3)})}break}}focusOn($,Z,J){this.focus={p:[$[0],Z,$[2]],t0:this.time+J}}colorsOf($){return $&&this.colors.get($)||z0}flagColors(){return this.time-this.flagT0<0.55?this.flagFrom:this.flagTo}later($,Z){this.timers.push({at:this.time+$,fn:Z})}burst($,Z,J,W,G,Q,K){let V=this.quality==="high"?C0:C0/2;for(let B=0;B<Z;B++){let M=Math.random()*Math.PI*2,N=Math.acos(Math.random()*2-1),Y=W*(0.4+Math.random()*0.6),X={p:[$[0],$[1],$[2]],v:[Math.sin(N)*Math.cos(M)*Y,Math.abs(Math.cos(N))*Y*0.8+(K>0?Y*0.3:0),Math.sin(N)*Math.sin(M)*Y],c:[J[0]*(0.8+Math.random()*0.2),J[1]*(0.8+Math.random()*0.2),J[2]*(0.8+Math.random()*0.2)],life:G*(0.6+Math.random()*0.4),max:G,size:Q*(0.6+Math.random()*0.8),grav:K};if(this.particles.length>=V)this.particles[Math.floor(Math.random()*this.particles.length)]=X;else this.particles.push(X)}}shakeNear($,Z){for(let J of this.buildings)if(Math.hypot(J.x-$[0],J.z-$[2])<Z)J.shakeT=this.time,this.buildingsDirty=!0;for(let J of this.cottages)if(Math.hypot(J.x-$[0],J.z-$[2])<Z)J.shakeT=this.time,this.housesDirty=!0}resize($,Z,J){this.width=$,this.height=Z,this.dpr=J;let W=Math.max(1,Math.floor($*J)),G=Math.max(1,Math.floor(Z*J));if(this.canvas.width===W&&this.canvas.height===G&&(this.pipe||this.direct))return;this.canvas.width=W,this.canvas.height=G,this.rebuildTargets()}touch(){this.yaw+=this.drift[0],this.pitch=b(this.pitch+this.drift[1],0.2,1.3),this.drift=[0,0],this.lastInput=this.time,this.pitchAuto=!1}orbit($,Z){this.touch(),this.yaw-=$*0.008,this.pitch=b(this.pitch+Z*0.006,0.2,1.3)}zoom($){this.touch(),this.zoomK=b(this.zoomK*$,0.45,1.5)}rayAt($,Z){let J=$/this.width*2-1,W=1-Z/this.height*2,G=k.transformPoint(this.invViewProj,[J,W,-1]),Q=k.transformPoint(this.invViewProj,[J,W,1]),K=[G[0]/G[3],G[1]/G[3],G[2]/G[3]],V=[Q[0]/Q[3],Q[1]/Q[3],Q[2]/Q[3]];return{o:K,d:c6([V[0]-K[0],V[1]-K[1],V[2]-K[2]])}}pickMonster($,Z){let{o:J,d:W}=this.rayAt($,Z),G=null,Q=1/0;for(let K of this.monsters.values()){let V=K.height*K.scale,B=r6(J,W,[K.pos[0],K.pos[1]+V*0.5,K.pos[2]],Math.max(0.8,V*0.55));if(B!==null&&B<Q)Q=B,G=K.id}return G}pickDie($,Z){let J=this.diceRect;if(!this.diceOk||$<J.x||$>J.x+J.w||Z<J.y||Z>J.y+J.h)return-1;let W=-1,G=1/0;for(let Q=0;Q<this.dice.length;Q++){let K=this.dice[Q],V=Math.hypot(K.sx-$,(K.sy-Z)*0.5);if(V<G)G=V,W=Q}return G<this.dieStepPx*0.8?W:-1}start(){let $=(Z)=>{this.raf=requestAnimationFrame($);let J=Z/1000,W=this.last?J-this.last:0.016666666666666666,G=Math.min(0.05,W);this.last=J,this.time+=G,this.adaptResolution(W),this.update(G),this.render()};this.raf=requestAnimationFrame($)}adaptResolution($){if($>0.5)return;if(this.frameEma=this.frameEma*0.92+$*0.08,this.direct||this.time-this.lastScaleCheck<1.5)return;this.lastScaleCheck=this.time;let Z=0.5,J=this.quality==="high"?1:Math.min(1,1.3/Math.max(1,this.dpr)),W=this.renderScale;if(this.frameEma>0.02631578947368421)W=Math.max(Z,this.renderScale*0.85);else if(this.frameEma<0.01818181818181818)W=Math.min(J,this.renderScale*1.12);if(Math.abs(W-this.renderScale)>0.01)this.renderScale=W,this.rebuildTargets()}update($){let Z=this.time;for(let V=this.timers.length-1;V>=0;V--)if(this.timers[V].at<=Z){let{fn:B}=this.timers[V];this.timers[V]=this.timers[this.timers.length-1],this.timers.pop(),B()}let J=this.yaw+this.drift[0];for(let V of this.monsters.values())this.updateMonster(V,Z,$,J);for(let V of this.dice){let B=Math.min(1,$*12);V.pos[0]+=(V.target[0]-V.pos[0])*B,V.pos[2]+=(V.target[2]-V.pos[2])*B}for(let V=this.flyers.length-1;V>=0;V--){let B=this.flyers[V];if(Z-B.t0<B.dur)continue;let M=this.monsters.get(B.target);if(M)this.burst([M.pos[0],M.pos[1]+M.height*M.scale*0.8,M.pos[2]],6,B.color,1.6,0.6,0.35,-1);this.flyers[V]=this.flyers[this.flyers.length-1],this.flyers.pop()}for(let V=this.particles.length-1;V>=0;V--){let B=this.particles[V];if(B.life-=$,B.life<=0){this.particles[V]=this.particles[this.particles.length-1],this.particles.pop();continue}B.v[1]+=B.grav*$,B.v[0]*=1-$*1.5,B.v[2]*=1-$*1.5,B.p[0]+=B.v[0]*$,B.p[1]=Math.max(0.05,B.p[1]+B.v[1]*$),B.p[2]+=B.v[2]*$}let W=0;for(let V=0;V<this.bolts.length;V++)if(Z-this.bolts[V].t0<0.55)this.bolts[W++]=this.bolts[V];this.bolts.length=W,W=0;for(let V=0;V<this.waves.length;V++)if(Z-this.waves[V].t0<this.waves[V].dur)this.waves[W++]=this.waves[V];if(this.waves.length=W,this.camShake=Math.max(0,this.camShake-$*1.8),this.hit=Math.max(0,this.hit-$*2.2),this.flagFlash=Math.max(0,this.flagFlash-$*1.2),this.beacon+=((this.peakHolder&&Z>this.flagT0+0.9?1:0)-this.beacon)*Math.min(1,$*2.5),this.focus&&Z-this.focus.t0>2.2)this.focus=null;let G=this.insets,Q=this.insetsTo,K=Math.min(1,$*4);G.top+=(Q.top-G.top)*K,G.right+=(Q.right-G.right)*K,G.bottom+=(Q.bottom-G.bottom)*K,G.left+=(Q.left-G.left)*K}updateMonster($,Z,J,W){let G=b((Z-$.moveT0)/$.moveDur,0,1),Q=Z>=$.moveT0&&G<1,K=$.pos;if($.how==="climb"&&G<1){let Y=G<0.5,X=Y?G*2:(G-0.5)*2,C=c$(X),U=Y?$.from:$.mid,F=Y?$.mid:$.to,q=$.arc*(Y?0.8:1.25);K[0]=s(U[0],F[0],C),K[1]=s(U[1],F[1],C)+Math.sin(X*Math.PI)*q,K[2]=s(U[2],F[2],C)}else{let Y=$.how==="slide"?G*G*(3-2*G):c$(G);K[0]=s($.from[0],$.to[0],Y),K[1]=s($.from[1],$.to[1],Y)+(G<1?Math.sin(G*Math.PI)*$.arc:0),K[2]=s($.from[2],$.to[2],Y)}if(Q){let Y=l$(K[0],K[2]);if(K[1]<Y)K[1]=Y}if(G>=1&&!$.landed){$.landed=!0,$.landT=Z;let Y=$.how!=="walk";if($.how==="fall")$.dizzyT=Z;if(Y)this.burst([$.to[0],$.to[1]+0.1,$.to[2]],22,[0.6,0.55,0.7],2.8,0.8,0.55,-2),this.camShake=Math.min(0.7,this.camShake+(this.lessMotion?0.05:0.12+$.flips*0.1)),this.shakeNear($.to,5),this.waves.push({p:[$.to[0],$.to[1]+0.06,$.to[2]],t0:Z,dur:0.8,size:5.5,color:[$.accent[0],$.accent[1],$.accent[2],0.9]})}$.scale+=($.scaleTo-$.scale)*Math.min(1,J*4);let B=Math.atan2(K[0],K[2])-W;while(B>Math.PI)B-=V$;while(B<-Math.PI)B+=V$;let M=W+b(B,-0.6,0.6)*0.4;if(Q&&Math.hypot($.to[0]-$.from[0],$.to[2]-$.from[2])>0.5)M=Math.atan2($.to[0]-$.from[0],$.to[2]-$.from[2]);if(Z-$.lungeT<0.7)M=Math.atan2($.lungeDir[0],$.lungeDir[2]);let N=M-$.yaw;while(N>Math.PI)N-=V$;while(N<-Math.PI)N+=V$;$.yaw+=N*Math.min(1,J*6)}setCommon($,Z=!0){$.vec3("uSunDir",t$),$.vec3("uSunColor",R6),$.vec3("uSkyColor",P6),$.vec3("uGroundColor",S6),$.vec3("uFogColor",O6),$.float("uFogDensity",0.011),$.float("uTime",this.time),$.mat4("uShadowVP",this.lightVP),$.float("uShadowOn",Z&&this.shadowActive?1:0),$.float("uShadowTexel",1/xJ)}get shadowActive(){return this.quality==="high"&&!!this.shadow&&!this.direct}computeCamera(){let $=Math.max(1,this.width),Z=Math.max(1,this.height),J=$/Z;if(this.pitchAuto)this.pitch=J<0.8?0.6:0.5;let W=b(2*Math.atan(Math.tan(21*Math.PI/180)/J),46*Math.PI/180,72*Math.PI/180),G=1/Math.tan(W/2),Q=G/J,K=G,V=this.camShake*this.camShake,B=this.time-this.lastInput;if(!this.lessMotion){let e=b((B-4)/4,0,1);this.drift=[Math.sin(this.time*0.11)*0.09*e,Math.sin(this.time*0.083+1)*0.03*e]}else this.drift=[0,0];let M=this.yaw+this.drift[0],N=b(this.pitch+this.drift[1],0.2,1.3),Y=this.insets,X=Y.left+6,C=$-Y.right-6,U=Y.top+14,F=Z-Y.bottom-10;if(C-X<$*0.3)X=0,C=$;if(F-U<Z*0.25)U=0,F=Z;let q=X/$*2-1,H=C/$*2-1,R=1-F/Z*2,I=1-U/Z*2,_=(H-q)/2,w=(I-R)/2,j=Math.cos(N),A=-Math.sin(M)*j,P=-Math.sin(N),z=-Math.cos(M)*j,L=Math.cos(M),E=-Math.sin(M),v=-E*P,i=E*A-L*z,y=L*P,u=this.camTarget;O.set(u,0,2.6,1.8);let l=this.fitPoints,G$=this.fitProj,j$=l.length/3;for(let e=0;e<j$;e++){let Q$=l[e*3]-u[0],X$=l[e*3+1]-u[1],A$=l[e*3+2]-u[2];G$[e*3]=Q$*L+A$*E,G$[e*3+1]=Q$*v+X$*i+A$*y,G$[e*3+2]=Q$*A+X$*P+A$*z}let B$=this.fitExt,P$=6,S$=260;if(j$){for(let e=0;e<18;e++){let Q$=(P$+S$)/2;if(this.fitExtent(Q$,j$,Q,K,_,w))S$=Q$;else P$=Q$}this.fitExtent(S$,j$,Q,K,_,w)}else B$[0]=B$[2]=-1,B$[1]=B$[3]=1;let $0=S$,v$=(q+H)/2-(B$[0]+B$[1])/2,f$=(R+I)/2-(B$[2]+B$[3])/2,L$=$0*this.zoomK,J0=Math.sin(this.time*47)*V*0.3,H0=Math.sin(this.time*53)*V*0.3,O$=u[0]+J0,N$=u[1]+H0,C$=u[2];if(this.focus){let e=b((this.time-this.focus.t0)/2.2,0,1),Q$=e>0?Math.sin(e*Math.PI)**2*0.28:0;O$=s(O$,this.focus.p[0],Q$),N$=s(N$,this.focus.p[1],Q$),C$=s(C$,this.focus.p[2],Q$),L$*=1-Q$*0.3}let y$=this.camPos;y$[0]=O$-A*L$,y$[1]=N$-P*L$,y$[2]=C$-z*L$;let Z0=this.v3;O.set(Z0,O$,N$,C$),k.perspective(this.proj,W,J,0.5,260),this.proj[8]=-v$,this.proj[9]=-f$,k.lookAt(this.view,y$,Z0,N0),k.multiply(this.viewProj,this.proj,this.view),k.invert(this.invViewProj,this.viewProj)}rgba($,Z,J,W){let G=this.c4;return G[0]=$,G[1]=Z,G[2]=J,G[3]=W,G}fitExtent($,Z,J,W,G,Q){let K=this.fitProj,V=this.fitExt,B=1/0,M=-1/0,N=1/0,Y=-1/0;for(let X=0;X<Z;X++){let C=K[X*3+2]+$;if(C<1)return!1;let U=J*K[X*3]/C,F=W*K[X*3+1]/C;if(U<B)B=U;if(U>M)M=U;if(F<N)N=F;if(F>Y)Y=F}return V[0]=B,V[1]=M,V[2]=N,V[3]=Y,M-B<=2*G&&Y-N<=2*Q}uploadInstances(){let $=this.time;if(this.buildingsDirty){let J=!1,W=this.buildingData;for(let G=0;G<this.buildings.length;G++){let Q=this.buildings[G],K=b(1-($-Q.shakeT)/0.5,0,1);if(K>0)J=!0;let V=G*12;W[V]=Q.x,W[V+1]=0,W[V+2]=Q.z,W[V+3]=0,W[V+4]=Q.w,W[V+5]=Q.h,W[V+6]=Q.d,W[V+7]=Q.seed,W[V+8]=Q.color[0],W[V+9]=Q.color[1],W[V+10]=Q.color[2],W[V+11]=K}this.buildingMesh.setInstances(W),this.buildingsDirty=J}if(this.housesDirty){let J=!1,W=this.houseData;for(let G=0;G<this.cottages.length;G++){let Q=b(1-($-this.cottages[G].shakeT)/0.5,0,1);if(Q>0)J=!0;W[G*16+11]=Q}this.houseMesh.setInstances(W),this.housesDirty=J}let Z=this.carData;for(let J=0;J<this.cars.length;J++){let W=this.cars[J],G=80,Q=((W.phase+$*W.speed*W.dir)%80+80)%80-40,K=W.axis===0?Q:W.line+W.lane,V=W.axis===0?W.line+W.lane:Q,B=Math.hypot(K,V),M=B>19.2&&B<40&&V>D.waterZ+0.6?1:0,N=W.axis===0?W.dir>0?Math.PI/2:-Math.PI/2:W.dir>0?0:Math.PI,Y=J*8;Z[Y]=K,Z[Y+1]=0.01,Z[Y+2]=V,Z[Y+3]=N,Z[Y+4]=W.color[0],Z[Y+5]=W.color[1],Z[Y+6]=W.color[2],Z[Y+7]=M}this.carMesh.setInstances(Z)}renderShadowMap(){let $=this.gl,Z=this.shadow,J=this.v0;O.set(J,0,2,0);let W=this.v1;O.set(W,J[0]+t$[0]*70,J[1]+t$[1]*70,J[2]+t$[2]*70),k.lookAt(this.tmp,W,J,N0),k.ortho(this.tmp2,-M0,M0,-M0,M0,1,150),k.multiply(this.lightVP,this.tmp2,this.tmp),$.activeTexture($.TEXTURE1),$.bindTexture($.TEXTURE_2D,this.dummyShadow.tex),$.activeTexture($.TEXTURE0),$.bindFramebuffer($.FRAMEBUFFER,Z.fb),$.viewport(0,0,Z.size,Z.size),$.disable($.SCISSOR_TEST),$.enable($.DEPTH_TEST),$.depthMask(!0),$.disable($.BLEND),$.clear($.DEPTH_BUFFER_BIT),$.enable($.CULL_FACE),$.cullFace($.FRONT),$.enable($.POLYGON_OFFSET_FILL),$.polygonOffset(1.5,3);let G=this.progs.depthInst.use();G.mat4("uLightVP",this.lightVP),G.float("uTime",this.time),G.float("uShake",0.08),this.buildingMesh.draw(),G.float("uShake",0.06),this.houseMesh.draw(),$.disable($.CULL_FACE),this.progs.depthProp.use().mat4("uLightVP",this.lightVP);for(let V of v0)this.propMeshes[V].draw();let K=this.progs.depth.use();K.mat4("uLightVP",this.lightVP),K.mat4("uModel",U0),this.meshes.hill.draw(),$.enable($.CULL_FACE);for(let V of this.monsters.values())this.drawMonster(K,V,!0);$.disable($.POLYGON_OFFSET_FILL),$.cullFace($.BACK)}render(){let $=this.gl;if(this.computeCamera(),this.uploadInstances(),this.shadowActive)this.renderShadowMap();$.activeTexture($.TEXTURE1),$.bindTexture($.TEXTURE_2D,this.shadowActive?this.shadow.tex:this.dummyShadow.tex),$.activeTexture($.TEXTURE0);let Z=this.direct?null:this.pipe,J=this.canvas.height,W=this.canvas.width;if(Z)$.bindFramebuffer($.FRAMEBUFFER,Z.ms?Z.ms.fb:Z.scene.fb),$.viewport(0,0,Z.scene.w,Z.scene.h),J=Z.scene.h,W=Z.scene.w;else $.bindFramebuffer($.FRAMEBUFFER,null),$.viewport(0,0,this.canvas.width,this.canvas.height);$.disable($.SCISSOR_TEST),$.clearColor(0.07,0.05,0.14,1),$.clear($.COLOR_BUFFER_BIT|$.DEPTH_BUFFER_BIT),$.enable($.DEPTH_TEST),$.enable($.CULL_FACE),$.cullFace($.BACK),$.disable($.BLEND),$.depthMask(!1);let G=this.progs.sky.use();G.mat4("uInvViewProj",this.invViewProj),G.vec3("uSunDir",t$),G.float("uTime",this.time),$.bindVertexArray(this.emptyVao),$.drawArrays($.TRIANGLES,0,3),$.depthMask(!0);let Q=this.progs.obj.use();this.setCommon(Q),Q.mat4("uViewProj",this.viewProj),Q.vec3("uCamPos",this.camPos),Q.float("uAlpha",1),Q.float("uFlash",0),Q.float("uRim",0),Q.vec3("uEmissive",A6),Q.int("uMode",1),Q.vec3("uColor",L6),Q.mat4("uModel",U0),this.meshes.ground.draw(),Q.int("uMode",2),Q.mat4("uModel",y6),this.meshes.water.draw(),Q.int("uMode",5),Q.mat4("uModel",U0),this.meshes.hill.draw();let K=this.progs.bld.use();this.setCommon(K),K.mat4("uViewProj",this.viewProj),K.vec3("uCamPos",this.camPos),this.buildingMesh.draw();let V=this.progs.house.use();this.setCommon(V),V.mat4("uViewProj",this.viewProj),V.vec3("uCamPos",this.camPos),this.houseMesh.draw();let B=this.progs.prop.use();this.setCommon(B),B.mat4("uViewProj",this.viewProj),B.vec3("uCamPos",this.camPos);for(let X of v0)this.propMeshes[X].draw();let M=this.progs.car.use();this.setCommon(M),M.mat4("uViewProj",this.viewProj),M.vec3("uCamPos",this.camPos),this.carMesh.draw(),Q.use(),this.drawFlag(Q),Q.int("uMode",0);for(let X of this.monsters.values())this.drawMonster(Q,X,!1);$.enable($.BLEND),$.blendFunc($.ONE,$.ONE_MINUS_SRC_ALPHA),$.depthMask(!1);let N=this.progs.decal.use();N.mat4("uViewProj",this.viewProj),N.float("uTime",this.time);let Y=this.shadowActive?0.3:0.5;for(let X of this.monsters.values()){let C=l$(X.pos[0],X.pos[2])+(X.level>k$&&X.landed?z$:0),U=Math.max(0,X.pos[1]-C),F=X.height*X.scale;N.int("uMode",0),N.vec4("uColor",this.rgba(0,0,0,b(Y-U*0.08,0.1,Y)));let q=Math.max(0.8,(1.5+F*0.35)*X.scale-Math.min(1,U*0.2));if(N.mat4("uModel",k.fromTRS(this.tmp,O.set(this.v0,X.pos[0],C+0.02,X.pos[2]),t,O.set(this.v1,q,1,q))),this.meshes.quad.draw(),X.current&&X.landed){N.int("uMode",1),N.vec4("uColor",this.rgba(X.main[0]*1.6,X.main[1]*1.6,X.main[2]*1.6,1));let H=X.level===k$?3.3*X.scale:D$[X.level]*2.35;N.mat4("uModel",k.fromTRS(this.tmp,O.set(this.v0,X.to[0],X.to[1]+0.03,X.to[2]),t,O.set(this.v1,H,1,H))),this.meshes.quad.draw()}}this.drawPlaces(N),N.int("uMode",2);for(let X of this.waves){let C=b((this.time-X.t0)/X.dur,0,1);N.float("uProgress",g$(C)),N.vec4("uColor",this.rgba(X.color[0]*1.5,X.color[1]*1.5,X.color[2]*1.5,X.color[3])),N.mat4("uModel",k.fromTRS(this.tmp,X.p,t,O.set(this.v1,X.size,1,X.size))),this.meshes.quad.draw()}if($.blendFunc($.ONE,$.ONE),$.disable($.CULL_FACE),this.drawBeams(),this.drawBolts(),this.drawParticles(this.viewProj,J),$.enable($.CULL_FACE),$.depthMask(!0),$.disable($.BLEND),this.emitLabels(),this.drawDice(W/Math.max(1,this.width),J),Z){if(Z.ms)Z.ms.resolveInto(Z.scene);let X=this.quality==="high";if(X)this.bloom(Z);this.composite(Z,X)}}drawPlaces($){let Z=[!1,!1],J=null;for(let G of this.monsters.values())if(G.level===H$){let Q=this.ledgeSlot.get(G.id);if(Q!==void 0)Z[Q]=!0}else if(G.level===R$)J=G;let W=this.v2;for(let G=0;G<2;G++)F0(H$,G,this.seats,W),this.drawPlace($,W,D$[1],Z[G]?null:[1,0.85,0.5]);this.drawPlace($,q$,D$[2],J?null:[1,0.85,0.5])}drawPlace($,Z,J,W){if(!W)return;$.int("uMode",3),$.vec4("uColor",this.rgba(W[0]*1.3,W[1]*1.3,W[2]*1.3,0.85));let G=J*2.3;$.mat4("uModel",k.fromTRS(this.tmp,O.set(this.v0,Z[0],Z[1]+0.02,Z[2]),t,O.set(this.v1,G,1,G))),this.meshes.quad.draw()}fullscreen($){let Z=this.gl;if($)Z.bindFramebuffer(Z.FRAMEBUFFER,$.fb),Z.viewport(0,0,$.w,$.h);else Z.bindFramebuffer(Z.FRAMEBUFFER,null),Z.viewport(0,0,this.canvas.width,this.canvas.height);Z.drawArrays(Z.TRIANGLES,0,3)}bloom($){let Z=this.gl;Z.disable(Z.DEPTH_TEST),Z.disable(Z.BLEND),Z.disable(Z.CULL_FACE),Z.disable(Z.SCISSOR_TEST),Z.bindVertexArray(this.emptyVao),Z.activeTexture(Z.TEXTURE0);let J=this.progs.bright.use();J.int("uTex",0),Z.bindTexture(Z.TEXTURE_2D,$.scene.tex),J.vec2("uTexel",1/$.scene.w,1/$.scene.h),J.float("uThreshold",this.fmt.hdr?0.92:0.72),this.fullscreen($.bloomA);let W=this.progs.blur.use();W.int("uTex",0);for(let G=0;G<hJ;G++)Z.bindTexture(Z.TEXTURE_2D,$.bloomA.tex),W.vec2("uDir",1/$.bloomA.w,0),this.fullscreen($.bloomB),Z.bindTexture(Z.TEXTURE_2D,$.bloomB.tex),W.vec2("uDir",0,1/$.bloomA.h),this.fullscreen($.bloomA);J.use(),Z.bindTexture(Z.TEXTURE_2D,$.bloomA.tex),J.vec2("uTexel",1/$.bloomA.w,1/$.bloomA.h),J.float("uThreshold",-1),this.fullscreen($.bloomC),W.use();for(let G=0;G<hJ;G++)Z.bindTexture(Z.TEXTURE_2D,$.bloomC.tex),W.vec2("uDir",1/$.bloomC.w,0),this.fullscreen($.bloomD),Z.bindTexture(Z.TEXTURE_2D,$.bloomD.tex),W.vec2("uDir",0,1/$.bloomC.h),this.fullscreen($.bloomC)}composite($,Z){let J=this.gl;J.disable(J.DEPTH_TEST),J.disable(J.BLEND),J.disable(J.CULL_FACE),J.disable(J.SCISSOR_TEST),J.bindVertexArray(this.emptyVao);let W=this.progs.composite.use();J.activeTexture(J.TEXTURE0),J.bindTexture(J.TEXTURE_2D,$.scene.tex),J.activeTexture(J.TEXTURE2),J.bindTexture(J.TEXTURE_2D,$.bloomA.tex),J.activeTexture(J.TEXTURE3),J.bindTexture(J.TEXTURE_2D,$.bloomC.tex),J.activeTexture(J.TEXTURE0),W.vec2("uTexel",1/$.scene.w,1/$.scene.h),W.vec2("uRes",this.canvas.width,this.canvas.height),W.float("uBloom",Z?1:0),W.float("uHit",this.hit),W.float("uTime",this.time),this.fullscreen(null),J.enable(J.DEPTH_TEST)}drawMonster($,Z,J){let W=this.time,G=b((W-Z.moveT0)/Z.moveDur,0,1),Q=W>=Z.moveT0&&G<1,K=Q&&Z.flips>0,V=!Q,B=V?Math.sin(W*2.4+Z.seed)*0.03:0,M=V&&Z.current?Math.abs(Math.sin(W*5+Z.seed))*0.1:0,N=b((W-Z.lungeT)/0.6,0,1),Y=N<1?Math.sin(N*Math.PI)*0.9:0,X=b(1-(W-Z.flashT)/0.45,0,1)*(W>=Z.flashT?1:0),C=X*Math.sin(W*70)*0.1,U=b((W-Z.landT)/0.3,0,1),F=!Q&&W<Z.moveT0&&Z.how==="climb"?b(1-(Z.moveT0-W)/0.35,0,1)*0.12:0,q=1+B-(U<1?Math.sin(U*Math.PI)*0.16:0)-F,H=Z.scale,R=O.set(this.v0,Z.pos[0]+Z.lungeDir[0]*Y+C,Z.pos[1]+M,Z.pos[2]+Z.lungeDir[2]*Y);f.setAxisAngle(this.q0,0,1,0,Z.yaw);let I=K?-c$(G)*Z.flips*V$:0;if(Q&&Z.how==="slide")I=0.55*Math.sin(G*Math.PI);f.setAxisAngle(this.q1,1,0,0,I),f.mulInto(this.q0,this.q0,this.q1);let _=k.fromTRS(this.tmp2,R,this.q0,O.set(this.v1,H/Math.sqrt(q),H*q,H/Math.sqrt(q))),w=Q&&Z.how==="fall"?0.55:0;if(!J)$.float("uRim",0.55),$.float("uFlash",X*0.7);let j=Math.sin(W*3+Z.seed)*0.25+(N<1?Math.sin(N*Math.PI)*1.2:0)+(Q&&Z.how==="climb"?Math.sin(W*18)*0.8:0),A=Math.sin(W*1.7+Z.seed)*0.04;for(let P=0;P<Z.parts.length;P++){let z=Z.parts[P],L=z.anim,E=Z.partQ[P],v=z.pos;if(L==="armL"||L==="armR")f.setAxisAngle(this.q2,1,0,0,L==="armL"?-j:j),E=f.mulInto(this.q1,this.q2,E);else if(L==="tail")f.setAxisAngle(this.q2,0,1,0,Math.sin(W*2.2+Z.seed)*0.35),E=f.mulInto(this.q1,this.q2,E);else if(L==="wingL"||L==="wingR")f.setAxisAngle(this.q2,0,1,0,(L==="wingL"?1:-1)*Math.sin(W*4+Z.seed)*0.25),E=f.mulInto(this.q1,this.q2,E);else if(L==="head")v=O.set(this.v2,z.pos[0],z.pos[1]+A,z.pos[2]);let i=k.fromTRS(this.tmp3,v,E,z.scale),y=k.multiply(this.tmp,_,i);if($.mat4("uModel",y),!J){let u=Z.partColor[P],l=this.v3;if(w){let G$=(u[0]+u[1]+u[2])/3;O.set(l,s(u[0],G$*0.6,w),s(u[1],G$*0.6,w),s(u[2],G$*0.6,w))}else O.copy(l,u);if($.vec3("uColor",l),z.glow&&!w)$.vec3("uEmissive",O.set(this.v2,l[0]*1.6,l[1]*1.6,l[2]*1.6));else $.vec3("uEmissive",O.set(this.v2,0,0,0))}this.meshes[Z.partMesh[P]].draw()}if(!J)$.float("uFlash",0),$.vec3("uEmissive",O.set(this.v2,0,0,0))}drawFlag($){let Z=this.gl,J=this.time;Z.disable(Z.CULL_FACE),$.int("uMode",4),$.float("uRim",0.15);let W=1,G=this.flagColors(),Q=J-this.flagT0;if(Q>=0&&Q<1.3)if(Q<0.45)W=1-c$(Q/0.45)*0.82;else if(Q<0.65)W=0.18;else W=0.18+g$((Q-0.65)/0.65)*0.82;let K=c[1]+0.9+(T$-1.7)*W,V=this.yaw+this.drift[0];f.setAxisAngle(this.q0,0,1,0,V+Math.sin(J*0.6)*0.2),$.mat4("uModel",k.fromTRS(this.tmp,O.set(this.v0,c[0],K,c[2]),this.q0,O.set(this.v1,2.5,1.5,1)));let B=G[0]===eJ;$.vec3("uColor",G[0]),$.vec3("uGlow",B?f6:G[1]),$.float("uSeed",1.3),$.float("uWave",B?0.35:1);let M=0.14+this.flagFlash*0.8;$.vec3("uEmissive",O.set(this.v2,G[0][0]*M,G[0][1]*M,G[0][2]*M)),this.meshes.cloth.draw(),$.vec3("uEmissive",O.set(this.v2,0,0,0)),$.float("uRim",0),Z.enable(Z.CULL_FACE)}drawBeams(){let $=this.progs.beam.use();$.mat4("uViewProj",this.viewProj),$.vec3("uCamPos",this.camPos);let Z=this.time;for(let J=0;J<rJ.length;J++){let W=rJ[J],G=W.a0+Z*W.speed+Math.sin(Z*0.3+J)*0.6,Q=1.05+0.22*Math.sin(Z*0.4+J*1.7),K=O.set(this.v0,Math.cos(Q)*Math.cos(G),Math.sin(Q),Math.cos(Q)*Math.sin(G)),V=KJ(this.q0,N0,K);$.mat4("uModel",k.fromTRS(this.tmp,W.p,V,w6)),$.vec3("uColor",W.color),$.float("uIntensity",this.quality==="high"?0.26:0.2),this.meshes.beam.draw()}if(this.beacon>0.01){let J=this.flagColors()[0],W=0.8+0.2*Math.sin(Z*2.2);$.mat4("uModel",k.fromTRS(this.tmp,O.set(this.v0,c[0],c[1]+T$+0.3,c[2]),t,O.set(this.v1,1,34,1))),$.vec3("uColor",O.set(this.v2,J[0]*0.8+0.2,J[1]*0.8+0.2,J[2]*0.8+0.2)),$.float("uIntensity",1.3*this.beacon*W),this.meshes.beam.draw()}}drawBolts(){let $=this.gl;if(!this.bolts.length)return;let Z=this.boltData,J=this.boltPts,W=I0,G=this.time,Q=Math.floor(G*18),K=this.progs.bolt.use();K.mat4("uViewProj",this.viewProj),$.bindVertexArray(this.boltVao),$.bindBuffer($.ARRAY_BUFFER,this.boltBuf);for(let V of this.bolts){let B=G-V.t0;if(B<0)continue;let M=b(B/0.1,0,1),N=B<0.1?1:b(1-(B-0.1)/0.45,0,1),Y=V.b[0]-V.a[0],X=V.b[1]-V.a[1],C=V.b[2]-V.a[2],U=Math.hypot(Y,X,C)||1,F=Y/U,q=X/U,H=C/U,R=Math.abs(q)>0.9?1:0,I=Math.abs(q)>0.9?0:1,_=q*0-H*I,w=H*R-F*0,j=F*I-q*R,A=Math.hypot(_,w,j)||1;_/=A,w/=A,j/=A;let P=w*H-j*q,z=j*F-_*H,L=_*q-w*F;for(let v=0;v<=W;v++){let i=v/W*M,y=Math.sin(Math.PI*(v/W)),u=(S(V.seed+v*7.1+Q*3.3)-0.5)*0.8*y,l=(S(V.seed+v*3.7+Q*5.9)-0.5)*0.8*y,G$=Math.sin(Math.PI*i)*U*0.12;J[v*3]=V.a[0]+Y*i+_*u+P*l,J[v*3+1]=V.a[1]+X*i+w*u+z*l+G$,J[v*3+2]=V.a[2]+C*i+j*u+L*l}let E=0;for(let v=0;v<W;v++)E=this.boltVertex(E,v,-1,N),E=this.boltVertex(E,v,1,N),E=this.boltVertex(E,v+1,1,N),E=this.boltVertex(E,v,-1,N),E=this.boltVertex(E,v+1,1,N),E=this.boltVertex(E,v+1,-1,N);$.bufferSubData($.ARRAY_BUFFER,0,Z,0,E),K.vec3("uColor",V.color),$.drawArrays($.TRIANGLES,0,E/6)}$.bindVertexArray(null)}boltVertex($,Z,J,W){let G=this.boltPts,Q=this.boltData,K=this.camPos,V=I0,B=Math.max(0,Z-1)*3,M=Math.min(V,Z+1)*3,N=Z*3,Y=G[M]-G[B],X=G[M+1]-G[B+1],C=G[M+2]-G[B+2],U=K[0]-G[N],F=K[1]-G[N+1],q=K[2]-G[N+2],H=X*q-C*F,R=C*U-Y*q,I=Y*F-X*U,_=(Math.hypot(H,R,I)||1)/(0.24*J);return H/=_,R/=_,I/=_,Q[$]=G[N]+H,Q[$+1]=G[N+1]+R,Q[$+2]=G[N+2]+I,Q[$+3]=J,Q[$+4]=Z/V,Q[$+5]=W,$+6}drawParticles($,Z){let J=this.gl,W=this.particleData,G=this.time,Q=0,K=this.lightData;for(let N=0;N<this.lightCount;N++){let Y=N*8,X=Q++*8;W[X]=K[Y],W[X+1]=K[Y+1],W[X+2]=K[Y+2],W[X+3]=K[Y+3],W[X+4]=K[Y+4],W[X+5]=K[Y+5],W[X+6]=0.55+0.35*Math.sin(G*2.2+K[Y+6]*1.7),W[X+7]=K[Y+7]}let V=Q+E0;{let N=this.flagColors()[0],Y=Q++*8;W[Y]=c[0],W[Y+1]=c[1]+T$+0.12,W[Y+2]=c[2],W[Y+3]=N[0],W[Y+4]=N[1],W[Y+5]=N[2],W[Y+6]=0.5+this.beacon*0.3+this.flagFlash*0.3,W[Y+7]=1.2+this.beacon*0.8+this.flagFlash*2}for(let N of this.monsters.values()){let Y=G-N.dizzyT;if(Y>1.8||Q+3>V)continue;let X=N.pos[1]+N.height*N.scale+0.25;for(let C=0;C<3;C++){let U=G*5+C/3*V$,F=Q++*8;W[F]=N.pos[0]+Math.cos(U)*0.7*N.scale,W[F+1]=X+Math.sin(U*2)*0.08,W[F+2]=N.pos[2]+Math.sin(U)*0.7*N.scale,W[F+3]=1,W[F+4]=0.9,W[F+5]=0.4,W[F+6]=1-Y/1.8,W[F+7]=0.55}}for(let N of this.flyers){let Y=G-N.t0;if(Y<0)continue;let X=this.monsters.get(N.target);if(!X)continue;let C=X.pos[0],U=X.pos[1]+X.height*X.scale*0.8,F=X.pos[2];for(let q=0;q<4&&Q<_0+E0+bJ;q++){let H=b((Y-q*0.035)/N.dur,0,1),R=c$(H),I=Math.sin(H*Math.PI)*N.lift,_=Q++*8;W[_]=s(N.p0[0],C,R),W[_+1]=s(N.p0[1],U,R)+I,W[_+2]=s(N.p0[2],F,R),W[_+3]=N.color[0],W[_+4]=N.color[1],W[_+5]=N.color[2],W[_+6]=1-q*0.22,W[_+7]=N.size*(1-q*0.2)}}let B=Math.min(this.particles.length,C0);for(let N=0;N<B;N++){let Y=this.particles[N],X=Y.life/Y.max,C=Q++*8;W[C]=Y.p[0],W[C+1]=Y.p[1],W[C+2]=Y.p[2],W[C+3]=Y.c[0],W[C+4]=Y.c[1],W[C+5]=Y.c[2],W[C+6]=Math.min(1,X*1.6),W[C+7]=Y.size*(0.5+X*0.5)}if(!Q)return;let M=this.progs.part.use();M.mat4("uViewProj",$),M.float("uScale",Z*0.9),M.float("uGain",this.pipe&&this.fmt.hdr?1.6:1),J.bindVertexArray(this.particleVao),J.bindBuffer(J.ARRAY_BUFFER,this.particleBuf),J.bufferSubData(J.ARRAY_BUFFER,0,W,0,Q*8),J.drawArrays(J.POINTS,0,Q),J.bindVertexArray(null)}drawDice($,Z){let J=this.gl,W=this.diceRect;if(this.diceOk=!1,!this.dice.length||W.w<40||W.h<24)return;let G=Math.floor(W.x*$),Q=Math.floor(W.w*$),K=Math.floor(W.h*$),V=Math.floor(Z-(W.y+W.h)*$);J.viewport(G,V,Q,K),J.enable(J.SCISSOR_TEST),J.scissor(G,V,Q,K),J.clear(J.DEPTH_BUFFER_BIT);let B=this.dice.length,M=W.w/W.h,N=Math.tan(cJ/2),Y=(B-1)*dJ/2+0.9,X=1.05,C=Math.max(Y/(N*M),X/N)+0.7,U=this.diceCenter,F=this.diceCam;O.set(F,U[0]+k0[0]*C,U[1]+k0[1]*C,U[2]+k0[2]*C),k.lookAt(this.tmp,F,U,N0),k.perspective(this.tmp2,cJ,M,0.3,60),k.multiply(this.diceViewProj,this.tmp2,this.tmp),J.enable(J.BLEND),J.blendFunc(J.ONE,J.ONE_MINUS_SRC_ALPHA),J.depthMask(!1),J.disable(J.DEPTH_TEST),J.disable(J.CULL_FACE);let q=this.progs.decal.use();q.mat4("uViewProj",U0),q.mat4("uModel",x6),q.int("uMode",4),q.float("uProgress",M),q.vec4("uColor",this.rgba(0.07,0.05,0.13,0.8)),this.meshes.quad.draw(),J.enable(J.DEPTH_TEST),q.mat4("uViewProj",this.diceViewProj),q.float("uTime",this.time);let H=this.time;for(let w=0;w<B;w++){let j=this.dice[w],A=this.dieLift(j,w,H);q.int("uMode",0),q.vec4("uColor",this.rgba(0,0,0,b(0.55-A*0.18,0.12,0.55)));let P=1.55-Math.min(0.6,A*0.25);if(q.mat4("uModel",k.fromTRS(this.tmp,O.set(this.v0,j.pos[0],-0.49,j.pos[2]+0.08),t,O.set(this.v1,P,1,P))),this.meshes.quad.draw(),j.kept)q.int("uMode",1),q.vec4("uColor",this.rgba(1.4,1.05,0.35,0.95)),q.mat4("uModel",k.fromTRS(this.tmp,O.set(this.v0,j.pos[0],-0.48,j.pos[2]),t,O.set(this.v1,1.75,1,1.75))),this.meshes.quad.draw()}J.depthMask(!0),J.disable(J.BLEND),J.enable(J.CULL_FACE);let R=this.progs.dice.use();this.setCommon(R,!1),R.float("uFogDensity",0),R.mat4("uViewProj",this.diceViewProj),R.vec3("uCamPos",F);let I=this.diceViewProj,_=this.diceResolved;for(let w=0;w<B;w++){let j=this.dice[w],A=b((H-j.rollT0)/nJ,0,1),P=j.q,z=this.v0;if(O.set(z,j.pos[0],this.dieLift(j,w,H),j.pos[2]),j.blank)f.setAxisAngle(this.q1,0,1,0,Math.sin(H*0.8+w)*0.35+w*0.7),f.setAxisAngle(this.q2,1,0,0,0.35+Math.sin(H*0.6+w*1.3)*0.15),P=f.mulInto(this.q1,this.q1,this.q2);else if(A<1){let u=g$(Math.min(1,A/0.8));z[0]+=j.throwFrom[0]*(1-u),z[2]+=j.throwFrom[2]*(1-u),f.setAxisAngle(this.q1,j.axis[0],j.axis[1],j.axis[2],(1-g$(A))*j.turns*V$),P=f.mulInto(this.q2,this.q1,j.q)}let L=this.hoverDie===w&&this.diceActive,E=_?b((H-this.resolvedT-w*0.05)/0.35,0,1):1,v=E<1?1+Math.sin(E*Math.PI)*0.16:1,i=0.5*(j.kept?0.96:1)*(L?1.07:1)*v;R.mat4("uModel",k.fromTRS(this.tmp,z,P,O.set(this.v1,i,i,i))),R.vec3("uBody",j.bonus?O.set(this.v2,0.2,0.1,0.42):O.set(this.v2,0.1,0.1,0.13)),R.float("uBonus",j.bonus?1:0),R.float("uKept",j.kept?1:0),R.float("uHover",L?1:0),R.float("uBlank",j.blank?1:0),R.float("uDim",_&&E>=1?0.3:0),R.float("uSettle",j.blank?0:j6(0.7,1,A)),this.meshes.dice.draw();let y=I[3]*j.target[0]+I[7]*0.2+I[11]*j.target[2]+I[15];j.sx=W.x+((I[0]*j.target[0]+I[4]*0.2+I[8]*j.target[2]+I[12])/y*0.5+0.5)*W.w,j.sy=W.y+(1-((I[1]*j.target[0]+I[5]*0.2+I[9]*j.target[2]+I[13])/y*0.5+0.5))*W.h}if(B>1)this.dieStepPx=Math.max(12,Math.abs(this.dice[1].sx-this.dice[0].sx));this.diceOk=!0,J.disable(J.SCISSOR_TEST)}dieLift($,Z,J){if($.blank)return 0.12+Math.sin(J*2+Z*0.9)*0.06;let W=$.kept?0.3:0,G=b((J-$.rollT0)/nJ,0,1);if(G<1)if(G<0.3)W+=$.throwFrom[1]*(1-(G/0.3)**2);else W+=Math.abs(Math.sin((G-0.3)/0.7*Math.PI*2))*0.7*(1-G)**1.2;return W}label($,Z){let J=this.labelIndex.get($);if(!J)J={id:$,kind:Z,x:0,y:0,ax:0,ay:0,bx:0,by:0,bw:0,bh:0,level:0,visible:!1},this.labelIndex.set($,J),this.labels.push(J);return J}project($,Z,J,W){let G=this.viewProj,Q=G[3]*$+G[7]*Z+G[11]*J+G[15];if(Q<=0.1)return W.visible=!1,!1;return W.x=((G[0]*$+G[4]*Z+G[8]*J+G[12])/Q*0.5+0.5)*this.width,W.y=(1-((G[1]*$+G[5]*Z+G[9]*J+G[13])/Q*0.5+0.5))*this.height,W.visible=!0,!0}emitLabels(){if(!this.onLabels)return;let $=this.scratchLabel;for(let G of this.monsters.values()){let Q=G.label??=this.label(`m:${G.id}`,"m");if(!this.project(G.pos[0],G.pos[1],G.pos[2],Q))continue;let{x:K,y:V}=Q;this.project(G.pos[0],G.pos[1]+G.height*G.scale+0.2,G.pos[2],$);let B=Math.max(4,V-$.y);Q.bw=B*0.9,Q.bh=B,Q.bx=K-Q.bw/2,Q.by=$.y,Q.x=$.x,Q.y=$.y,Q.level=G.level,Q.visible=!0}let Z=this.levelLabels,J=D0[Math.min(this.footOrder.length,D0.length-1)]+0.42,W=this.signAnchors;W[0]=Math.sin(J)*(D.footR+0.3),W[1]=0.3,W[2]=Math.cos(J)*(D.footR+0.3);for(let G=0;G<3;G++){let Q=Z[G],K=W[G*3],V=W[G*3+1],B=W[G*3+2];if(!this.project(-K,V,B,$)){Q.visible=!1;continue}if(Q.ax=$.x,Q.ay=$.y,!this.project(K,V,B,Q))continue}this.onLabels(this.labels)}dispose(){cancelAnimationFrame(this.raf),this.gl.getExtension("WEBGL_lose_context")?.loseContext()}}function c6($){let Z=Math.hypot($[0],$[1],$[2])||1;return[$[0]/Z,$[1]/Z,$[2]/Z]}var n6=Q0.map(($)=>{let Z,J=$[1];if(J>0.99)Z=f.identity();else if(J<-0.99)Z=f.axisAngle([1,0,0],Math.PI);else{let Q=[$[1]*0-$[2]*1,$[2]*0-$[0]*0,$[0]*1-$[1]*0],K=1+J,V=Math.hypot(Q[0],Q[1],Q[2],K);Z=[Q[0]/V,Q[1]/V,Q[2]/V,K/V]}let W=f.rotate(Z,K0($)),G=Math.PI-Math.atan2(W[0],W[2]);return f.multiply(f.axisAngle([0,1,0],G),Z)});function r6($,Z,J,W){let G=[$[0]-J[0],$[1]-J[1],$[2]-J[2]],Q=G[0]*Z[0]+G[1]*Z[1]+G[2]*Z[2],K=G[0]*G[0]+G[1]*G[1]+G[2]*G[2]-W*W,V=Q*Q-K;if(V<0)return null;let B=-Q-Math.sqrt(V);return B>0?B:null}var J6={w:90,h:30},m6=[2,1,0],D7=p$(function({ui:Z}){let J=W$.useRef(null),W=W$.useRef(null),G=W$.useRef(null),Q=W$.useRef(null),K=W$.useRef(null),V=W$.useRef(null),B=W$.useRef(null),[M,N]=W$.useState(null),Y=W$.useRef(new Map),X=W$.useRef(new Map),C=W$.useRef(new Map),U=W$.useRef(null),F=(j)=>{let A=C.current.get(j);if(!A)A=(P)=>{let z=Y.current,L=z.get(j);if(L&&L!==P)U.current?.unobserve(L);if(P)P.dataset.lid=j,z.set(j,P),U.current?.observe(P);else z.delete(j)},C.current.set(j,A);return A};if(W$.useEffect(()=>{let j=W.current,A=J.current,P;try{P=new x0(j,e$.settings.quality)}catch(T){console.error(T),N(T instanceof Error?T.message:String(T));return}B.current=P;let z=new ResizeObserver((T)=>{for(let x of T){let r=x.target,a=r.dataset.lid;if(a)X.current.set(a,{w:r.offsetWidth,h:r.offsetHeight})}});U.current=z;for(let T of Y.current.values())z.observe(T);let L=1,E=1,v=0,i=0,y=0,u=()=>{let T=A.getBoundingClientRect();L=T.width,E=T.height;let x=Math.min(window.devicePixelRatio||1,T.width<700?1.75:2);P.resize(T.width,T.height,x);let r=G.current?.getBoundingClientRect(),a=Q.current?.getBoundingClientRect(),m=K.current?.getBoundingClientRect(),Z$=V.current?.getBoundingClientRect();v=r?Math.max(0,r.bottom-T.top):0,i=a?Math.max(0,T.bottom-a.top):0,y=m&&m.width>0&&m.height>0?Math.max(0,T.right-m.left):0,P.setInsets(v,y,i,0),P.diceRect=Z$&&Z$.width>0?{x:Z$.left-T.left,y:Z$.top-T.top,w:Z$.width,h:Z$.height}:{x:0,y:0,w:0,h:0}};u();let l=new ResizeObserver(u);l.observe(A);for(let T of[G.current,Q.current,K.current,V.current])if(T)l.observe(T);let G$=Array.from({length:16},()=>({x:0,y:0,w:0,h:0})),j$=Array.from({length:8},()=>({x:0,y:0,w:0,h:0})),B$=Array.from({length:3},()=>({x:0,y:0,w:0,h:0})),P$=new Map,S$=new Map,$0=new WeakMap,v$=[],f$=[],L$=(T,x)=>x.y-T.y,J0=(T,x,r)=>{let a=Math.round(x*4)*65536+Math.round(r*4);if(S$.get(T)!==a)S$.set(T,a),T.style.transform=`translate3d(${x.toFixed(1)}px, ${r.toFixed(1)}px, 0)`;if(P$.get(T)!==!0)T.style.opacity="1",T.style.visibility="visible",P$.set(T,!0)},H0=(T)=>{if(P$.get(T)!==!1)T.style.opacity="0",T.style.visibility="hidden",P$.set(T,!1)},O$=(T,x,r,a,m,Z$)=>{let w$=0;for(let d=0;d<Z$;d++){let J$=m[d],o=Math.min(T+r,J$.x+J$.w)-Math.max(T,J$.x),p=Math.min(x+a,J$.y+J$.h)-Math.max(x,J$.y);if(o>0&&p>0)w$+=o*p}return w$},N$=0,C$=0,y$=(T,x,r,a)=>{if(N$>=G$.length)return;let m=G$[N$++];m.x=T,m.y=x,m.w=r,m.h=a};P.onLabels=(T)=>{let x=Y.current,r=X.current,a=L-y,m=v+2,Z$=E-i-2;N$=0,C$=0,v$.length=0,f$.length=0;for(let d of T){let J$=x.get(d.id);if(!J$)continue;if(!d.visible){H0(J$);continue}if(d.kind==="m"){if(v$.push(d),C$<j$.length){let o=j$[C$++];o.x=d.bx,o.y=d.by,o.w=d.bw,o.h=d.bh}}else f$.push(d)}v$.sort(L$);for(let d of v$){let J$=x.get(d.id),o=r.get(d.id)??J6,p=Math.max(4,Math.min(a-o.w-4,d.x-o.w/2)),U$=d.y-o.h-1;for(let m$=0;m$<6;m$++){let x$=!1;for(let I$=0;I$<N$;I$++){let Y$=G$[I$];if(p<Y$.x+Y$.w+2&&p+o.w+2>Y$.x&&U$<Y$.y+Y$.h+1&&U$+o.h+1>Y$.y)U$=Y$.y-o.h-1,x$=!0}if(!x$)break}U$=Math.max(m,Math.min(Z$-o.h,U$)),J0(J$,p,U$),y$(p,U$,o.w,o.h)}let w$=N$;for(let d=0;d<f$.length&&d<B$.length;d++){let J$=f$[d],o=x.get(J$.id),p=r.get(J$.id)??J6,U$=$0.get(o)??0,m$=1/0,x$=0,I$=0,Y$=0;for(let h$=0;h$<2;h$++){let i0=h$===0?J$.x+6:J$.ax-p.w-6,m0=(h$===0?J$.y:J$.ay)-p.h/2,b$=Math.max(4,Math.min(a-p.w-4,i0)),u$=Math.max(m,Math.min(Z$-p.h,m0)),o0=0;for(let R0=0;R0<d;R0++){let d$=B$[R0],s0=Math.min(b$+p.w,d$.x+d$.w)-Math.max(b$,d$.x),a0=Math.min(u$+p.h,d$.y+d$.h)-Math.max(u$,d$.y);if(s0>0&&a0>0)o0+=s0*a0}let g0=O$(b$,u$,p.w,p.h,G$,w$)+O$(b$,u$,p.w,p.h,j$,C$)*0.7+o0*3+(Math.abs(b$-i0)+Math.abs(u$-m0))*p.h*0.35+(h$===U$?0:p.w*p.h*0.2);if(g0<m$)m$=g0,x$=b$,I$=u$,Y$=h$}$0.set(o,Y$),o.classList.toggle("left",Y$===1);let G0=B$[d];G0.x=x$,G0.y=I$,G0.w=p.w,G0.h=p.h,J0(o,x$,I$)}};let Z0=h0(()=>{let T=Z.state;if(!T)return;let x=Z.myTurn&&T.phase==="roll"&&T.flags.rolled&&T.rollsLeft>0;P.sync(T,Z.viewId,x)}),e=Z.onEvent((T)=>P.event(T)),Q$=h0(()=>{P.setQuality(e$.settings.quality),P.lessMotion=e$.settings.lessMotion}),X$=new Map,A$=0,i$=0,c0=(T)=>{let x=j.getBoundingClientRect();return[T.clientX-x.left,T.clientY-x.top]},n0=(T)=>{if(j.setPointerCapture(T.pointerId),X$.set(T.pointerId,{x:T.clientX,y:T.clientY}),A$=0,X$.size===2){let[x,r]=[...X$.values()];i$=Math.hypot(x.x-r.x,x.y-r.y)}},r0=(T)=>{let x=X$.get(T.pointerId);if(!x){if(T.pointerType==="mouse"){let[m,Z$]=c0(T);j.style.cursor=P.pickMonster(m,Z$)?"pointer":""}return}let r=T.clientX-x.x,a=T.clientY-x.y;if(x.x=T.clientX,x.y=T.clientY,A$+=Math.abs(r)+Math.abs(a),X$.size===1)P.orbit(r,a);else if(X$.size===2){let[m,Z$]=[...X$.values()],w$=Math.hypot(m.x-Z$.x,m.y-Z$.y);if(i$>0)P.zoom(i$/w$);i$=w$}},W0=(T)=>{let x=X$.size===1&&A$<8;if(X$.delete(T.pointerId),X$.size<2)i$=0;if(!x)return;let[r,a]=c0(T),m=P.pickMonster(r,a);if(m)Z.open({kind:"player",playerId:m})},p0=(T)=>{T.preventDefault(),P.zoom(Math.exp(T.deltaY*0.001))};return j.addEventListener("pointerdown",n0),j.addEventListener("pointermove",r0),j.addEventListener("pointerup",W0),j.addEventListener("pointercancel",W0),j.addEventListener("wheel",p0,{passive:!1}),()=>{l.disconnect(),Z0(),Q$(),e(),j.removeEventListener("pointerdown",n0),j.removeEventListener("pointermove",r0),j.removeEventListener("pointerup",W0),j.removeEventListener("pointercancel",W0),j.removeEventListener("wheel",p0),P.dispose(),B.current=null,z.disconnect(),U.current=null}},[Z]),M)return h("div",{className:"stage3d error3d",children:n("div",{className:"panel",children:[h("h3",{children:"3D-режим недоступен"}),n("p",{className:"muted",children:["Ваш браузер не поддерживает WebGL2 (",M,")."]}),h("button",{className:"btn go",onClick:()=>e$.settings.set("mode","cards"),children:"Перейти в карточный режим"})]})});let{state:q,viewer:H}=Z,R=Z.myTurn&&q.phase==="buy"&&!q.flags.bought&&H?q.market.filter((j,A)=>j&&(X6(q,A)??1/0)<=H.coins).length:0,I=Z.myTurn&&q.phase==="roll"&&q.flags.rolled&&q.rollsLeft>0,_=(j)=>{let A=J.current.getBoundingClientRect();return[j.clientX-A.left,j.clientY-A.top]},w={onPointerDown:(j)=>{let A=B.current;if(!A||!J.current)return;let[P,z]=_(j),L=A.pickDie(P,z);if(L>=0)Z.clickDie(L)},onPointerMove:(j)=>{let A=B.current;if(!A||!J.current||j.pointerType!=="mouse")return;let[P,z]=_(j);A.hoverDie=I?A.pickDie(P,z):-1},onPointerLeave:()=>{if(B.current)B.current.hoverDie=-1}};return n("div",{className:"stage3d",ref:J,children:[h("canvas",{ref:W,className:"gl-canvas"}),n("div",{className:"labels",children:[m6.map((j)=>h(g6,{ui:Z,level:j,bind:F},j)),q.players.map((j)=>h(s6,{ui:Z,player:j,bind:F},j.id))]}),n("div",{className:"hud-top",ref:G,children:[h("div",{className:"hud-news",children:h(U6,{ui:Z})}),h("div",{className:"hud-order",children:h(C6,{ui:Z,compact:!0})})]}),n("div",{className:"hud-bottom",ref:Q,children:[n("div",{className:"hud-dice",children:[n("div",{className:"dice-head",children:[h(t6,{ui:Z}),n("button",{className:`btn shop3d${R>0?" can-buy":""}`,onClick:()=>Z.open({kind:"shop"}),title:"Лавка, способность и шмотки",children:["\uD83E\uDDF0 ",h("span",{className:"shop3d-label",children:"Лавка"}),R>0&&h("span",{className:"badge",children:R})]})]}),h("div",{className:`dice-zone${I?" active":""}`,ref:V,"data-fx":"dice",...w,children:h(l6,{ui:Z})})]}),h("div",{className:"hud-actions",children:h(M6,{ui:Z})})]}),h("aside",{className:"hud-side",ref:K,children:n("section",{className:"log-box",children:[h("div",{className:"section-head",children:h("h4",{children:"Журнал"})}),h(F6,{ui:Z,limit:30})]})})]})});function o6($,Z){return u0($.state,{level:Z})}var g6=p$(function({ui:Z,level:J,bind:W}){let G=Z.state,Q=Z6[J],K=V6(G,J),V=o6(Z,J),B=Number.isFinite(Q.cap)?Q.cap-G6(G,J).length:0,M=Z.viewer?.level===J;return n("div",{className:`lvl3d lvl-${J}${M?" here":""}`,ref:W(`l:${J}`),"aria-hidden":!0,children:[n("b",{className:"lv-name",children:[Q.icon," ",Q.name]}),n("span",{className:"lv-perks",children:[K>0&&n("i",{className:"lv-vp",children:["+",K,"★"]}),n("i",{className:"lv-heal",children:[V,"✚=1❤"]})]}),B>0&&h("span",{className:"lv-free",children:J===2?"свободна":B===1?"1 место":"2 места"})]})}),s6=p$(function({ui:Z,player:J,bind:W}){let G=Z.state,Q=b0(G),K=J.id===Q.id&&G.phase!=="gameOver",V=J.hp<=Math.ceil(J.maxHp/4);return n("div",{className:`label3d${K?" current":""}${J.id===Z.viewId?" me":""}`,style:B6(J.monster),ref:W(`m:${J.id}`),"data-player":J.id,"aria-hidden":!0,children:[n("b",{children:[J.level===R$&&h("i",{className:"lt-king",children:"\uD83D\uDC51"}),J.name]}),n("span",{className:"lt-stats",children:[n("span",{className:V?"lt-low":void 0,children:["❤",J.hp]})," ★",J.vp]}),h(N6,{ui:Z,playerId:J.id})]})}),a6=["подножие","уступ","вершину"],t6=p$(function({ui:Z}){let J=Z.state,W=b0(J);if(J.phase==="gameOver")return h("span",{className:"dice-sum"});if(!J.flags.rolled)return h("span",{className:"dice-sum idle",children:Z.myTurn?"\uD83C\uDFB2 8 кубиков: бросок и один переброс":`\uD83C\uDFB2 ${W.name} готовит бросок…`});let G=W6(J.dice),Q=u0(J,W),K=G.sword+(J.phase==="roll"?J.flags.bonusSwords:0),V=K>0?K6(J,W):[],B=K>0&&W.level<R$&&Q6(J,W.level+1);return n("span",{className:"dice-sum",children:[J.phase==="buy"&&h("span",{className:"ds-done",children:"разыграно:"}),T0.map((M)=>G[M]||M==="sword"&&K?n("span",{className:`ds-face ds-${M}`,title:d0[M],children:[h(Y6,{face:M,size:14}),M==="sword"?K:G[M],M==="sword"&&J.phase==="roll"&&V.length>0&&n("small",{children:[" → ",a6[V[0].level]]}),M==="sword"&&J.phase==="roll"&&B&&h("small",{className:"ds-up",children:" ⬆"}),M==="heal"&&Q>1&&n("small",{children:["=",Math.floor(G[M]/Q),"❤"]})]},M):null),J.phase==="roll"&&h("span",{className:"ds-rolls",children:J.rollsLeft>0?`переброс: ${J.rollsLeft}`:"без перебросов"})]})}),l6=p$(function({ui:Z}){let J=Z.state;if(!Z.myTurn||J.phase!=="roll"||!J.flags.rolled)return null;return h("div",{className:"dice-keys",children:J.dice.map((W,G)=>n("button",{type:"button","aria-pressed":W.kept,onClick:()=>Z.clickDie(G),children:["Кубик ",G+1,": ",d0[W.face],W.kept?", оставлен":""]},G))})});export{D7 as default};
