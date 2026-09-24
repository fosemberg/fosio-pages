import{$ as g,A as r0,B as S0,Fa as Q6,Ha as H6,M as J6,O as g0,R as Z6,S as K6,T as G6,U as s0,Y as K0,_ as f,a as b6,aa as G0,f as u6,h as k0,j as W0,k as aJ,la as I0,m as $6,r as E0,ta as W6,u as m0,va as V6,wa as X6}from"./index-h4szecvm.js";var F$=b6(u6(),1);var T0=($,Z)=>[$[1]*Z[2]-$[2]*Z[1],$[2]*Z[0]-$[0]*Z[2],$[0]*Z[1]-$[1]*Z[0]],_0=($)=>{let Z=Math.hypot(...$)||1;return[$[0]/Z,$[1]/Z,$[2]/Z]},F0=[[1,0,0],[-1,0,0],[0,1,0],[0,-1,0],[0,0,1],[0,0,-1]];function M0($){if(Math.abs($[1])<0.5)return[0,1,0];return $[1]>0?[0,0,-1]:[0,0,1]}function XJ($=0.18,Z=8){let J={positions:[],normals:[],uvs:[],faces:[],indices:[]},K=1-$;return F0.forEach((G,W)=>{let V=M0(G),H=T0(V,G),X=J.positions.length/3;for(let Q=0;Q<=Z;Q++)for(let B=0;B<=Z;B++){let F=B/Z,M=Q/Z,P=[G[0]+H[0]*(2*F-1)+V[0]*(2*M-1),G[1]+H[1]*(2*F-1)+V[1]*(2*M-1),G[2]+H[2]*(2*F-1)+V[2]*(2*M-1)],U=[Math.max(-K,Math.min(K,P[0])),Math.max(-K,Math.min(K,P[1])),Math.max(-K,Math.min(K,P[2]))],q=[P[0]-U[0],P[1]-U[1],P[2]-U[2]],D=Math.hypot(...q)>0.000001?_0(q):G;J.positions.push(U[0]+D[0]*$,U[1]+D[1]*$,U[2]+D[2]*$),J.normals.push(...D),J.uvs.push(F,M),J.faces.push(W)}for(let Q=0;Q<Z;Q++)for(let B=0;B<Z;B++){let F=X+Q*(Z+1)+B;J.indices.push(F,F+1,F+Z+2,F,F+Z+2,F+Z+1)}}),J}function s$($=!1){let Z={positions:[],normals:[],uvs:[],indices:[]},J=$?0.5:0;return F0.forEach((K)=>{let G=M0(K),W=T0(G,K),V=Z.positions.length/3;for(let[H,X]of[[-1,-1],[1,-1],[1,1],[-1,1]])Z.positions.push((K[0]+W[0]*H+G[0]*X)*0.5,(K[1]+W[1]*H+G[1]*X)*0.5+J,(K[2]+W[2]*H+G[2]*X)*0.5),Z.normals.push(...K),Z.uvs.push((H+1)/2,(X+1)/2);Z.indices.push(V,V+1,V+2,V,V+2,V+3)}),Z}function v0($=16,Z=24){let J={positions:[],normals:[],uvs:[],indices:[]};for(let K=0;K<=$;K++){let G=K/$*Math.PI;for(let W=0;W<=Z;W++){let V=W/Z*Math.PI*2,H=Math.sin(G)*Math.cos(V),X=Math.cos(G),Q=Math.sin(G)*Math.sin(V);J.positions.push(H*0.5,X*0.5,Q*0.5),J.normals.push(H,X,Q),J.uvs.push(W/Z,K/$)}}for(let K=0;K<$;K++)for(let G=0;G<Z;G++){let W=K*(Z+1)+G,V=W+Z+1;J.indices.push(W,W+1,V,V,W+1,V+1)}return J}function f$($=0.5,Z=0.5,J=20,K=!0){let G={positions:[],normals:[],uvs:[],indices:[]},W=($-Z)/1;for(let V=0;V<=J;V++){let H=V/J*Math.PI*2,X=Math.cos(H),Q=Math.sin(H),B=_0([X,W,Q]);G.positions.push(X*$,0,Q*$,X*Z,1,Q*Z),G.normals.push(...B,...B),G.uvs.push(V/J,0,V/J,1)}for(let V=0;V<J;V++){let H=V*2;G.indices.push(H,H+1,H+3,H,H+3,H+2)}if(K)for(let[V,H,X]of[[0,$,-1],[1,Z,1]]){if(H<=0)continue;let Q=G.positions.length/3;G.positions.push(0,V,0),G.normals.push(0,X,0),G.uvs.push(0.5,0.5);for(let B=0;B<=J;B++){let F=B/J*Math.PI*2;G.positions.push(Math.cos(F)*H,V,Math.sin(F)*H),G.normals.push(0,X,0),G.uvs.push(0.5+Math.cos(F)/2,0.5+Math.sin(F)/2)}for(let B=0;B<J;B++)if(X>0)G.indices.push(Q,Q+B+2,Q+B+1);else G.indices.push(Q,Q+B+1,Q+B+2)}return G}function P0($=1,Z=1){let J={positions:[],normals:[],uvs:[],indices:[]};for(let K=0;K<=Z;K++)for(let G=0;G<=Z;G++)J.positions.push((G/Z-0.5)*$,0,(K/Z-0.5)*$),J.normals.push(0,1,0),J.uvs.push(G/Z,K/Z);for(let K=0;K<Z;K++)for(let G=0;G<Z;G++){let W=K*(Z+1)+G;J.indices.push(W,W+Z+1,W+1,W+1,W+Z+1,W+Z+2)}return J}function B$($,Z,J,K,G){let[W,V,H]=Z,X=T0([V[0]-W[0],V[1]-W[1],V[2]-W[2]],[H[0]-W[0],H[1]-W[1],H[2]-W[2]]),Q=X[0]*J[0]+X[1]*J[1]+X[2]*J[2]<0,B=$.positions.length/3,F=_0(J);Z.forEach((P,U)=>{$.positions.push(P[0],P[1],P[2]),$.normals.push(F[0],F[1],F[2]),$.uvs.push(G[U][0],G[U][1]),$.faces.push(K)});let M=Z.length===3?[[0,1,2]]:[[0,1,2],[0,2,3]];for(let[P,U,q]of M)if(Q)$.indices.push(B+P,B+q,B+U);else $.indices.push(B+P,B+U,B+q)}var L$=[[0,0],[1,0],[1,1],[0,1]];function QJ($=0.62,Z=0.1){let J={positions:[],normals:[],uvs:[],faces:[],indices:[]},K=0.5;B$(J,[[-0.5,0,0.5],[0.5,0,0.5],[0.5,1,0.5],[-0.5,1,0.5]],[0,0,1],0,L$),B$(J,[[0.5,0,-0.5],[-0.5,0,-0.5],[-0.5,1,-0.5],[0.5,1,-0.5]],[0,0,-1],0,L$),B$(J,[[0.5,0,0.5],[0.5,0,-0.5],[0.5,1,-0.5],[0.5,1,0.5]],[1,0,0],0,L$),B$(J,[[-0.5,0,-0.5],[-0.5,0,0.5],[-0.5,1,0.5],[-0.5,1,-0.5]],[-1,0,0],0,L$);let G=1+$;B$(J,[[0.5,1,0.5],[0.5,1,-0.5],[0.5,G,0]],[1,0,0],0,[[0,0],[1,0],[0.5,1]]),B$(J,[[-0.5,1,-0.5],[-0.5,1,0.5],[-0.5,G,0]],[-1,0,0],0,[[0,0],[1,0],[0.5,1]]);let W=0.5+Z,V=1-Z*($/0.5),H=0.5+Z*0.6;B$(J,[[-H,V,W],[H,V,W],[H,G,0],[-H,G,0]],[0,0.5,$],1,L$),B$(J,[[H,V,-W],[-H,V,-W],[-H,G,0],[H,G,0]],[0,0.5,-$],1,L$);let X=0.24,Q=-0.2,B=0.075,F=1+$*0.35,M=G+0.14;for(let[P,U]of[[1,0],[-1,0],[0,1],[0,-1]]){let q=U!==0?1:0,D=P!==0?1:0,Y=X+P*B,N=Q+U*B;B$(J,[[Y-q*B,F,N-D*B],[Y+q*B,F,N+D*B],[Y+q*B,M,N+D*B],[Y-q*B,M,N-D*B]],[P,0,U],2,L$)}return B$(J,[[X-B,M,Q-B],[X+B,M,Q-B],[X+B,M,Q+B],[X-B,M,Q+B]],[0,1,0],2,L$),J}function HJ($=14,Z=6){let J={positions:[],normals:[],uvs:[],indices:[]};for(let K=0;K<=Z;K++)for(let G=0;G<=$;G++)J.positions.push(G/$,K/Z-0.5,0),J.normals.push(0,0,1),J.uvs.push(G/$,K/Z);for(let K=0;K<Z;K++)for(let G=0;G<$;G++){let W=K*($+1)+G;J.indices.push(W,W+1,W+$+2,W,W+$+2,W+$+1)}return J}function BJ(){let $={positions:[],normals:[],uvs:[],faces:[],indices:[]},Z=0.5;return B$($,[[-0.5,0,0.5],[0.5,0,0.5],[0.5,1,0],[-0.5,1,0]],[0,0.5,1],0,L$),B$($,[[0.5,0,-0.5],[-0.5,0,-0.5],[-0.5,1,0],[0.5,1,0]],[0,0.5,-1],0,L$),B$($,[[0.5,0,0.5],[0.5,0,-0.5],[0.5,1,0]],[1,0,0],0,[[0,0],[1,0],[0.5,1]]),B$($,[[-0.5,0,-0.5],[-0.5,0,0.5],[-0.5,1,0]],[-1,0,0],0,[[0,0],[1,0],[0.5,1]]),$}class e{gl;program;uniforms=new Map;attribs={};constructor($,Z,J){this.gl=$;let K=(V,H)=>{let X=$.createShader(V);if($.shaderSource(X,H),$.compileShader(X),!$.getShaderParameter(X,$.COMPILE_STATUS)){let Q=$.getShaderInfoLog(X),B=H.split(`
`).map((F,M)=>`${M+1}: ${F}`).join(`
`);throw Error(`Shader compile error: ${Q}
${B}`)}return X},G=$.createProgram();if($.attachShader(G,K($.VERTEX_SHADER,Z)),$.attachShader(G,K($.FRAGMENT_SHADER,J)),$.linkProgram(G),!$.getProgramParameter(G,$.LINK_STATUS))throw Error(`Program link error: ${$.getProgramInfoLog(G)}`);this.program=G;let W=$.getProgramParameter(G,$.ACTIVE_ATTRIBUTES);for(let V=0;V<W;V++){let H=$.getActiveAttrib(G,V);this.attribs[H.name]=$.getAttribLocation(G,H.name)}}use(){return this.gl.useProgram(this.program),this}loc($){if(!this.uniforms.has($))this.uniforms.set($,this.gl.getUniformLocation(this.program,$));return this.uniforms.get($)}mat4($,Z){this.gl.uniformMatrix4fv(this.loc($),!1,Z)}vec3($,Z){this.gl.uniform3f(this.loc($),Z[0],Z[1],Z[2])}vec4($,Z){this.gl.uniform4f(this.loc($),Z[0],Z[1],Z[2],Z[3])}vec2($,Z,J){this.gl.uniform2f(this.loc($),Z,J)}float($,Z){this.gl.uniform1f(this.loc($),Z)}int($,Z){this.gl.uniform1i(this.loc($),Z)}ints($,Z){this.gl.uniform1iv(this.loc($),Z)}vec3s($,Z){this.gl.uniform3fv(this.loc($),Z)}vec4s($,Z){this.gl.uniform4fv(this.loc($),Z)}}class s{gl;vao;count;instanceBuffer=null;instanceCount=0;instanceStride=0;constructor($,Z,J,K){this.gl=$;this.vao=$.createVertexArray(),$.bindVertexArray(this.vao);let G=(H,X,Q)=>{let B=Z.attribs[H];if(B===void 0||B<0||!X)return;let F=$.createBuffer();$.bindBuffer($.ARRAY_BUFFER,F),$.bufferData($.ARRAY_BUFFER,new Float32Array(X),$.STATIC_DRAW),$.enableVertexAttribArray(B),$.vertexAttribPointer(B,Q,$.FLOAT,!1,0,0)};if(G("aPos",J.positions,3),G("aNormal",J.normals,3),G("aUv",J.uvs,2),G("aFace",J.faces,1),K){this.instanceBuffer=$.createBuffer(),$.bindBuffer($.ARRAY_BUFFER,this.instanceBuffer),this.instanceStride=K.reduce((X,Q)=>X+Q.size,0);let H=0;for(let X of K){let Q=Z.attribs[X.name];if(Q!==void 0&&Q>=0)$.enableVertexAttribArray(Q),$.vertexAttribPointer(Q,X.size,$.FLOAT,!1,this.instanceStride*4,H*4),$.vertexAttribDivisor(Q,1);H+=X.size}}let W=$.createBuffer();$.bindBuffer($.ELEMENT_ARRAY_BUFFER,W);let V=J.positions.length/3>65535;$.bufferData($.ELEMENT_ARRAY_BUFFER,V?new Uint32Array(J.indices):new Uint16Array(J.indices),$.STATIC_DRAW),this.indexType=V?$.UNSIGNED_INT:$.UNSIGNED_SHORT,this.count=J.indices.length,$.bindVertexArray(null)}indexType;setInstances($){let Z=this.gl;Z.bindBuffer(Z.ARRAY_BUFFER,this.instanceBuffer),Z.bufferData(Z.ARRAY_BUFFER,$,Z.DYNAMIC_DRAW),this.instanceCount=$.length/this.instanceStride}draw(){let $=this.gl;if($.bindVertexArray(this.vao),this.instanceBuffer)$.drawElementsInstanced($.TRIANGLES,this.count,this.indexType,0,this.instanceCount);else $.drawElements($.TRIANGLES,this.count,this.indexType,0)}}function FJ($){if($.getExtension("EXT_color_buffer_float"))return{internal:$.RGBA16F,format:$.RGBA,type:$.HALF_FLOAT,hdr:!0};return{internal:$.RGBA8,format:$.RGBA,type:$.UNSIGNED_BYTE,hdr:!1}}class z${gl;w;h;fb;tex;depth=null;ok;constructor($,Z,J,K,G){this.gl=$;this.w=Z;this.h=J;if(this.tex=$.createTexture(),$.bindTexture($.TEXTURE_2D,this.tex),$.texImage2D($.TEXTURE_2D,0,K.internal,Z,J,0,K.format,K.type,null),$.texParameteri($.TEXTURE_2D,$.TEXTURE_MIN_FILTER,$.LINEAR),$.texParameteri($.TEXTURE_2D,$.TEXTURE_MAG_FILTER,$.LINEAR),$.texParameteri($.TEXTURE_2D,$.TEXTURE_WRAP_S,$.CLAMP_TO_EDGE),$.texParameteri($.TEXTURE_2D,$.TEXTURE_WRAP_T,$.CLAMP_TO_EDGE),this.fb=$.createFramebuffer(),$.bindFramebuffer($.FRAMEBUFFER,this.fb),$.framebufferTexture2D($.FRAMEBUFFER,$.COLOR_ATTACHMENT0,$.TEXTURE_2D,this.tex,0),G)this.depth=$.createRenderbuffer(),$.bindRenderbuffer($.RENDERBUFFER,this.depth),$.renderbufferStorage($.RENDERBUFFER,$.DEPTH_COMPONENT24,Z,J),$.framebufferRenderbuffer($.FRAMEBUFFER,$.DEPTH_ATTACHMENT,$.RENDERBUFFER,this.depth);this.ok=$.checkFramebufferStatus($.FRAMEBUFFER)===$.FRAMEBUFFER_COMPLETE,$.bindFramebuffer($.FRAMEBUFFER,null),$.bindRenderbuffer($.RENDERBUFFER,null)}dispose(){let $=this.gl;if($.deleteFramebuffer(this.fb),$.deleteTexture(this.tex),this.depth)$.deleteRenderbuffer(this.depth)}}class f0{gl;w;h;samples;fb;color;depth;ok;constructor($,Z,J,K,G){this.gl=$;this.w=Z;this.h=J;this.samples=G;this.fb=$.createFramebuffer(),$.bindFramebuffer($.FRAMEBUFFER,this.fb),this.color=$.createRenderbuffer(),$.bindRenderbuffer($.RENDERBUFFER,this.color),$.renderbufferStorageMultisample($.RENDERBUFFER,G,K.internal,Z,J),$.framebufferRenderbuffer($.FRAMEBUFFER,$.COLOR_ATTACHMENT0,$.RENDERBUFFER,this.color),this.depth=$.createRenderbuffer(),$.bindRenderbuffer($.RENDERBUFFER,this.depth),$.renderbufferStorageMultisample($.RENDERBUFFER,G,$.DEPTH_COMPONENT24,Z,J),$.framebufferRenderbuffer($.FRAMEBUFFER,$.DEPTH_ATTACHMENT,$.RENDERBUFFER,this.depth),this.ok=$.checkFramebufferStatus($.FRAMEBUFFER)===$.FRAMEBUFFER_COMPLETE,$.bindFramebuffer($.FRAMEBUFFER,null),$.bindRenderbuffer($.RENDERBUFFER,null)}resolveInto($){let Z=this.gl;Z.bindFramebuffer(Z.READ_FRAMEBUFFER,this.fb),Z.bindFramebuffer(Z.DRAW_FRAMEBUFFER,$.fb),Z.blitFramebuffer(0,0,this.w,this.h,0,0,$.w,$.h,Z.COLOR_BUFFER_BIT,Z.NEAREST),Z.bindFramebuffer(Z.READ_FRAMEBUFFER,null),Z.bindFramebuffer(Z.DRAW_FRAMEBUFFER,null)}dispose(){let $=this.gl;$.deleteFramebuffer(this.fb),$.deleteRenderbuffer(this.color),$.deleteRenderbuffer(this.depth)}}class Y0{gl;size;fb;tex;ok;constructor($,Z){this.gl=$;this.size=Z;this.tex=$.createTexture(),$.bindTexture($.TEXTURE_2D,this.tex),$.texImage2D($.TEXTURE_2D,0,$.DEPTH_COMPONENT24,Z,Z,0,$.DEPTH_COMPONENT,$.UNSIGNED_INT,null),$.texParameteri($.TEXTURE_2D,$.TEXTURE_MIN_FILTER,$.LINEAR),$.texParameteri($.TEXTURE_2D,$.TEXTURE_MAG_FILTER,$.LINEAR),$.texParameteri($.TEXTURE_2D,$.TEXTURE_WRAP_S,$.CLAMP_TO_EDGE),$.texParameteri($.TEXTURE_2D,$.TEXTURE_WRAP_T,$.CLAMP_TO_EDGE),$.texParameteri($.TEXTURE_2D,$.TEXTURE_COMPARE_MODE,$.COMPARE_REF_TO_TEXTURE),$.texParameteri($.TEXTURE_2D,$.TEXTURE_COMPARE_FUNC,$.LEQUAL),this.fb=$.createFramebuffer(),$.bindFramebuffer($.FRAMEBUFFER,this.fb),$.framebufferTexture2D($.FRAMEBUFFER,$.DEPTH_ATTACHMENT,$.TEXTURE_2D,this.tex,0),$.drawBuffers([$.NONE]),$.readBuffer($.NONE),this.ok=$.checkFramebufferStatus($.FRAMEBUFFER)===$.FRAMEBUFFER_COMPLETE,$.bindFramebuffer($.FRAMEBUFFER,null)}dispose(){this.gl.deleteFramebuffer(this.fb),this.gl.deleteTexture(this.tex)}}var Y6=new Float32Array(16),y={create(){let $=new Float32Array(16);return $[0]=$[5]=$[10]=$[15]=1,$},perspective($,Z,J,K,G){let W=1/Math.tan(Z/2);return $.fill(0),$[0]=W/J,$[5]=W,$[10]=(G+K)/(K-G),$[11]=-1,$[14]=2*G*K/(K-G),$},lookAt($,Z,J,K=[0,1,0]){let G=Z[0]-J[0],W=Z[1]-J[1],V=Z[2]-J[2],H=Math.hypot(G,W,V)||1;G/=H,W/=H,V/=H;let X=K[1]*V-K[2]*W,Q=K[2]*G-K[0]*V,B=K[0]*W-K[1]*G;H=Math.hypot(X,Q,B)||1,X/=H,Q/=H,B/=H;let F=W*B-V*Q,M=V*X-G*B,P=G*Q-W*X;return $[0]=X,$[1]=F,$[2]=G,$[3]=0,$[4]=Q,$[5]=M,$[6]=W,$[7]=0,$[8]=B,$[9]=P,$[10]=V,$[11]=0,$[12]=-(X*Z[0]+Q*Z[1]+B*Z[2]),$[13]=-(F*Z[0]+M*Z[1]+P*Z[2]),$[14]=-(G*Z[0]+W*Z[1]+V*Z[2]),$[15]=1,$},multiply($,Z,J){let K=Y6;for(let G=0;G<4;G++)for(let W=0;W<4;W++)K[G*4+W]=Z[W]*J[G*4]+Z[4+W]*J[G*4+1]+Z[8+W]*J[G*4+2]+Z[12+W]*J[G*4+3];return $.set(K),$},ortho($,Z,J,K,G,W,V){return $.fill(0),$[0]=2/(J-Z),$[5]=2/(G-K),$[10]=-2/(V-W),$[12]=-(J+Z)/(J-Z),$[13]=-(G+K)/(G-K),$[14]=-(V+W)/(V-W),$[15]=1,$},fromTRS($,Z,J,K){let[G,W,V,H]=J,X=G+G,Q=W+W,B=V+V,F=G*X,M=G*Q,P=G*B,U=W*Q,q=W*B,D=V*B,Y=H*X,N=H*Q,L=H*B;return $[0]=(1-(U+D))*K[0],$[1]=(M+L)*K[0],$[2]=(P-N)*K[0],$[3]=0,$[4]=(M-L)*K[1],$[5]=(1-(F+D))*K[1],$[6]=(q+Y)*K[1],$[7]=0,$[8]=(P+N)*K[2],$[9]=(q-Y)*K[2],$[10]=(1-(F+U))*K[2],$[11]=0,$[12]=Z[0],$[13]=Z[1],$[14]=Z[2],$[15]=1,$},invert($,Z){let[J,K,G,W,V,H,X,Q,B,F,M,P,U,q,D,Y]=Z,N=J*H-K*V,L=J*X-G*V,C=J*Q-W*V,A=K*X-G*H,R=K*Q-W*H,j=G*Q-W*X,E=B*q-F*U,k=B*D-M*U,z=B*Y-P*U,r=F*D-M*q,n=F*Y-P*q,_=M*Y-P*D,I=N*_-L*n+C*r+A*z-R*k+j*E;if(!I)return null;return I=1/I,$[0]=(H*_-X*n+Q*r)*I,$[1]=(G*n-K*_-W*r)*I,$[2]=(q*j-D*R+Y*A)*I,$[3]=(M*R-F*j-P*A)*I,$[4]=(X*z-V*_-Q*k)*I,$[5]=(J*_-G*z+W*k)*I,$[6]=(D*C-U*j-Y*L)*I,$[7]=(B*j-M*C+P*L)*I,$[8]=(V*n-H*z+Q*E)*I,$[9]=(K*z-J*n-W*E)*I,$[10]=(U*R-q*C+Y*N)*I,$[11]=(F*C-B*R-P*N)*I,$[12]=(H*k-V*r-X*E)*I,$[13]=(J*r-K*k+G*E)*I,$[14]=(q*L-U*A-D*N)*I,$[15]=(B*A-F*L+M*N)*I,$},transformPoint($,Z){let[J,K,G]=Z;return[$[0]*J+$[4]*K+$[8]*G+$[12],$[1]*J+$[5]*K+$[9]*G+$[13],$[2]*J+$[6]*K+$[10]*G+$[14],$[3]*J+$[7]*K+$[11]*G+$[15]]}},v={identity(){return[0,0,0,1]},axisAngle($,Z){let J=Math.hypot(...$)||1,K=Math.sin(Z/2)/J;return[$[0]*K,$[1]*K,$[2]*K,Math.cos(Z/2)]},multiply($,Z){let[J,K,G,W]=$,[V,H,X,Q]=Z;return[J*Q+W*V+K*X-G*H,K*Q+W*H+G*V-J*X,G*Q+W*X+J*H-K*V,W*Q-J*V-K*H-G*X]},rotate($,Z){let[J,K,G,W]=$,[V,H,X]=Z,Q=W*V+K*X-G*H,B=W*H+G*V-J*X,F=W*X+J*H-K*V,M=-J*V-K*H-G*X;return[Q*W+M*-J+B*-G-F*-K,B*W+M*-K+F*-J-Q*-G,F*W+M*-G+Q*-K-B*-J]},euler($,Z,J){return v.multiply(v.multiply(v.axisAngle([0,1,0],Z),v.axisAngle([1,0,0],$)),v.axisAngle([0,0,1],J))},setAxisAngle($,Z,J,K,G){let W=Math.sin(G/2);return $[0]=Z*W,$[1]=J*W,$[2]=K*W,$[3]=Math.cos(G/2),$},mulInto($,Z,J){let K=Z[0],G=Z[1],W=Z[2],V=Z[3],H=J[0],X=J[1],Q=J[2],B=J[3];return $[0]=K*B+V*H+G*Q-W*X,$[1]=G*B+V*X+W*H-K*Q,$[2]=W*B+V*Q+K*X-G*H,$[3]=V*B-K*H-G*X-W*Q,$},rotateInto($,Z,J){let[K,G,W,V]=Z,H=J[0],X=J[1],Q=J[2],B=V*H+G*Q-W*X,F=V*X+W*H-K*Q,M=V*Q+K*X-G*H,P=-K*H-G*X-W*Q;return $[0]=B*V+P*-K+F*-W-M*-G,$[1]=F*V+P*-G+M*-K-B*-W,$[2]=M*V+P*-W+B*-G-F*-K,$},slerp($,Z,J){let[K,G,W,V]=Z,H=$[0]*K+$[1]*G+$[2]*W+$[3]*V;if(H<0)H=-H,K=-K,G=-G,W=-W,V=-V;let X=1-J,Q=J;if(H<0.9995){let M=Math.acos(H),P=Math.sin(M);X=Math.sin((1-J)*M)/P,Q=Math.sin(J*M)/P}let B=[$[0]*X+K*Q,$[1]*X+G*Q,$[2]*X+W*Q,$[3]*X+V*Q],F=Math.hypot(...B);return[B[0]/F,B[1]/F,B[2]/F,B[3]/F]}},S={set($,Z,J,K){return $[0]=Z,$[1]=J,$[2]=K,$},copy($,Z){return $[0]=Z[0],$[1]=Z[1],$[2]=Z[2],$}},Z$=($,Z,J)=>$+(Z-$)*J,p=($,Z,J)=>Math.max(Z,Math.min(J,$)),N0=($)=>1-(1-$)**3,c$=($)=>$<0.5?2*$*$:1-(-2*$+2)**2/2;function w$($){let Z=parseInt($.slice(1),16);return[(Z>>16&255)/255,(Z>>8&255)/255,(Z&255)/255]}function c($){let Z=Math.sin($*127.1+311.7)*43758.5453;return Z-Math.floor(Z)}function MJ($,Z,J){let K=Z[0]*J[0]+Z[1]*J[1]+Z[2]*J[2];if(K<-0.9999)return $[0]=1,$[1]=$[2]=$[3]=0,$;let G=Z[1]*J[2]-Z[2]*J[1],W=Z[2]*J[0]-Z[0]*J[2],V=Z[0]*J[1]-Z[1]*J[0],H=1+K,X=Math.hypot(G,W,V,H);return $[0]=G/X,$[1]=W/X,$[2]=V/X,$[3]=H/X,$}function PJ($,Z){let J=$[0]*Z[0]+$[1]*Z[1]+$[2]*Z[2];if(J<-0.9999)return[1,0,0,0];let K=[$[1]*Z[2]-$[2]*Z[1],$[2]*Z[0]-$[0]*Z[2],$[0]*Z[1]-$[1]*Z[0]],G=1+J,W=Math.hypot(K[0],K[1],K[2],G);return[K[0]/W,K[1]/W,K[2]/W,G/W]}var U0=Math.PI;function a$($,Z,J=0.2,K=0.2,G="head"){return[{mesh:"sphere",color:"#ffffff",pos:[-J,$,Z],scale:[K,K,K*0.8],anim:G},{mesh:"sphere",color:"#ffffff",pos:[J,$,Z],scale:[K,K,K*0.8],anim:G},{mesh:"sphere",color:"#16111f",pos:[-J,$,Z+K*0.35],scale:[K*0.5,K*0.55,K*0.3],anim:G},{mesh:"sphere",color:"#16111f",pos:[J,$,Z+K*0.35],scale:[K*0.5,K*0.55,K*0.3],anim:G}]}var YJ={toad:[{mesh:"sphere",color:"main",pos:[-0.55,0.22,0.25],scale:[0.55,0.35,0.75]},{mesh:"sphere",color:"main",pos:[0.55,0.22,0.25],scale:[0.55,0.35,0.75]},{mesh:"sphere",color:"main",pos:[0,0.85,0],scale:[1.75,1.2,1.5]},{mesh:"sphere",color:"#c9f7a8",pos:[0,0.62,0.38],scale:[1.3,0.7,0.9]},{mesh:"sphere",color:"main",pos:[-0.46,1.42,0.3],scale:[0.55,0.55,0.55],anim:"head"},{mesh:"sphere",color:"main",pos:[0.46,1.42,0.3],scale:[0.55,0.55,0.55],anim:"head"},...a$(1.5,0.45,0.46,0.34),{mesh:"box",color:"#16111f",pos:[0,0.98,0.72],rot:[0.15,0,0],scale:[1.05,0.06,0.12],anim:"head"},{mesh:"sphere",color:"accent",pos:[-0.72,1.05,0.2],scale:[0.18,0.18,0.18],glow:!0},{mesh:"sphere",color:"accent",pos:[0.78,0.9,0.3],scale:[0.14,0.14,0.14],glow:!0},{mesh:"sphere",color:"accent",pos:[0.2,1.3,-0.4],scale:[0.16,0.16,0.16],glow:!0},{mesh:"sphere",color:"accent",pos:[-0.35,0.7,-0.62],scale:[0.2,0.2,0.2],glow:!0},{mesh:"sphere",color:"accent",pos:[0.42,0.78,0.66],scale:[0.09,0.2,0.09],anim:"head",glow:!0},{mesh:"sphere",color:"main",pos:[-0.9,0.55,0.45],rot:[0,0,0.6],scale:[0.22,0.5,0.22],anim:"armL"},{mesh:"sphere",color:"main",pos:[0.9,0.55,0.45],rot:[0,0,-0.6],scale:[0.22,0.5,0.22],anim:"armR"}],shroom:[{mesh:"cyl",color:"accent",pos:[0,0.75,0],scale:[0.95,1.5,0.95]},{mesh:"sphere",color:"accent",pos:[0,0.12,0],scale:[1.05,0.3,1.05]},...a$(1.05,0.45,0.2,0.19),{mesh:"box",color:"#16111f",pos:[-0.2,1.3,0.45],rot:[0,0,-0.35],scale:[0.26,0.05,0.05],anim:"head"},{mesh:"box",color:"#16111f",pos:[0.2,1.3,0.45],rot:[0,0,0.35],scale:[0.26,0.05,0.05],anim:"head"},{mesh:"sphere",color:"#ff9aa8",pos:[-0.33,0.85,0.42],scale:[0.12,0.08,0.05]},{mesh:"sphere",color:"#ff9aa8",pos:[0.33,0.85,0.42],scale:[0.12,0.08,0.05]},{mesh:"sphere",color:"main",pos:[0,1.75,0],scale:[2.1,1.05,2.1],anim:"head"},{mesh:"cyl",color:"#e9d8c8",pos:[0,1.46,0],scale:[1.95,0.08,1.95],anim:"head"},{mesh:"sphere",color:"accent",pos:[0,2.26,0.1],scale:[0.36,0.14,0.36],anim:"head"},{mesh:"sphere",color:"accent",pos:[-0.62,2,0.42],scale:[0.3,0.14,0.3],anim:"head"},{mesh:"sphere",color:"accent",pos:[0.66,2.02,0.3],scale:[0.26,0.13,0.26],anim:"head"},{mesh:"sphere",color:"accent",pos:[0.2,1.95,-0.72],scale:[0.3,0.14,0.3],anim:"head"},{mesh:"sphere",color:"accent",pos:[-0.72,1.9,-0.35],scale:[0.22,0.12,0.22],anim:"head"},{mesh:"sphere",color:"accent",pos:[0.88,1.78,-0.2],scale:[0.18,0.1,0.18],anim:"head"},{mesh:"cyl",color:"accent",pos:[-0.6,0.85,0.1],rot:[U0,0,0.5],scale:[0.16,0.55,0.16],anim:"armL"},{mesh:"cyl",color:"accent",pos:[0.6,0.85,0.1],rot:[U0,0,-0.5],scale:[0.16,0.55,0.16],anim:"armR"}],crab:[{mesh:"cyl",color:"main",pos:[-0.7,0.25,0.2],rot:[0,0,0.9],scale:[0.1,0.7,0.1]},{mesh:"cyl",color:"main",pos:[-0.75,0.25,-0.25],rot:[0,0,0.9],scale:[0.1,0.7,0.1]},{mesh:"cyl",color:"main",pos:[0.7,0.25,0.2],rot:[0,0,-0.9],scale:[0.1,0.7,0.1]},{mesh:"cyl",color:"main",pos:[0.75,0.25,-0.25],rot:[0,0,-0.9],scale:[0.1,0.7,0.1]},{mesh:"sphere",color:"main",pos:[0,0.75,0],scale:[1.9,0.95,1.4]},{mesh:"sphere",color:"#9ef2f0",pos:[0,0.62,0.42],scale:[1.2,0.5,0.6]},{mesh:"box",color:"#16111f",pos:[0,0.72,0.7],scale:[0.5,0.05,0.06]},{mesh:"cyl",color:"main",pos:[-0.3,1.35,0.25],scale:[0.1,0.6,0.1],anim:"head"},{mesh:"cyl",color:"main",pos:[0.3,1.35,0.25],scale:[0.1,0.6,0.1],anim:"head"},...a$(1.72,0.3,0.3,0.22),{mesh:"cyl",color:"accent",pos:[-1.05,1.05,0.25],rot:[0,0,0.6],scale:[0.16,0.7,0.16],anim:"armL"},{mesh:"cyl",color:"accent",pos:[1.05,1.05,0.25],rot:[0,0,-0.6],scale:[0.16,0.7,0.16],anim:"armR"},{mesh:"sphere",color:"accent",pos:[-1.35,1.65,0.35],scale:[0.5,0.42,0.42],anim:"armL"},{mesh:"sphere",color:"accent",pos:[1.35,1.65,0.35],scale:[0.5,0.42,0.42],anim:"armR"},{mesh:"cone",color:"accent",pos:[-1.45,2.05,0.35],rot:[0,0,0.25],scale:[0.26,0.55,0.26],anim:"armL"},{mesh:"cone",color:"accent",pos:[-1.12,2,0.35],rot:[0,0,-0.35],scale:[0.2,0.45,0.2],anim:"armL"},{mesh:"cone",color:"accent",pos:[1.45,2.05,0.35],rot:[0,0,-0.25],scale:[0.26,0.55,0.26],anim:"armR"},{mesh:"cone",color:"accent",pos:[1.12,2,0.35],rot:[0,0,0.35],scale:[0.2,0.45,0.2],anim:"armR"}],golem:[{mesh:"box",color:"main",pos:[-0.42,0.3,0.05],scale:[0.55,0.6,0.65]},{mesh:"box",color:"main",pos:[0.42,0.3,0.05],scale:[0.55,0.6,0.65]},{mesh:"box",color:"main",pos:[0,1.05,0],scale:[1.6,1,1.15]},{mesh:"box",color:"accent",pos:[0,0.95,0.58],scale:[1.1,0.08,0.04],glow:!0},{mesh:"box",color:"main",pos:[0,1.95,0.05],scale:[1.2,0.9,1],anim:"head"},{mesh:"box",color:"accent",pos:[-0.28,2.05,0.56],scale:[0.3,0.14,0.04],anim:"head",glow:!0},{mesh:"box",color:"accent",pos:[0.28,2.05,0.56],scale:[0.3,0.14,0.04],anim:"head",glow:!0},{mesh:"box",color:"accent",pos:[0,1.72,0.56],scale:[0.62,0.06,0.04],anim:"head",glow:!0},{mesh:"box",color:"main",pos:[0,2.6,0.05],scale:[0.6,0.45,0.55],anim:"head"},{mesh:"box",color:"accent",pos:[0,2.62,0.33],scale:[0.36,0.1,0.03],anim:"head",glow:!0},{mesh:"cyl",color:"#c0c7d0",pos:[0,3.05,0.05],scale:[0.05,0.5,0.05],anim:"head"},{mesh:"sphere",color:"accent",pos:[0,3.32,0.05],scale:[0.14,0.14,0.14],anim:"head",glow:!0},{mesh:"box",color:"main",pos:[-1.05,1.25,0.1],rot:[0,0,0.12],scale:[0.45,1.1,0.5],anim:"armL"},{mesh:"box",color:"main",pos:[1.05,1.25,0.1],rot:[0,0,-0.12],scale:[0.45,1.1,0.5],anim:"armR"},{mesh:"box",color:"accent",pos:[-1.05,1.4,0.36],scale:[0.2,0.12,0.02],anim:"armL",glow:!0},{mesh:"box",color:"accent",pos:[1.05,1.1,0.36],scale:[0.2,0.12,0.02],anim:"armR",glow:!0}],jelly:[{mesh:"cyl",color:"accent",pos:[-0.55,0.85,0.2],scale:[0.09,1.3,0.09],anim:"tail"},{mesh:"cyl",color:"accent",pos:[-0.2,0.75,0.45],scale:[0.09,1.4,0.09],anim:"tail"},{mesh:"cyl",color:"accent",pos:[0.2,0.75,0.45],scale:[0.09,1.4,0.09],anim:"tail"},{mesh:"cyl",color:"accent",pos:[0.55,0.85,0.2],scale:[0.09,1.3,0.09],anim:"tail"},{mesh:"cyl",color:"accent",pos:[-0.35,0.8,-0.35],scale:[0.09,1.3,0.09],anim:"tail"},{mesh:"cyl",color:"accent",pos:[0.35,0.8,-0.35],scale:[0.09,1.3,0.09],anim:"tail"},{mesh:"sphere",color:"main",pos:[0,2.05,0],scale:[1.9,1.5,1.9],anim:"head"},{mesh:"cyl",color:"main",pos:[0,1.4,0],scale:[1.85,0.2,1.85],anim:"head"},{mesh:"sphere",color:"#ffd6f4",pos:[0,2.25,0.2],scale:[1.2,0.8,1.2],anim:"head",glow:!0},...a$(1.95,0.8,0.32,0.22),{mesh:"box",color:"#16111f",pos:[0,1.66,0.9],scale:[0.2,0.05,0.05],anim:"head"}],yeti:[{mesh:"cyl",color:"main",pos:[-0.4,0.3,0.05],scale:[0.45,0.6,0.45]},{mesh:"cyl",color:"main",pos:[0.4,0.3,0.05],scale:[0.45,0.6,0.45]},{mesh:"sphere",color:"main",pos:[0,1.25,0],scale:[1.7,1.8,1.4]},{mesh:"sphere",color:"main",pos:[-0.62,1.8,0.1],scale:[0.55,0.55,0.55],anim:"head"},{mesh:"sphere",color:"main",pos:[0.62,1.8,0.1],scale:[0.55,0.55,0.55],anim:"head"},{mesh:"sphere",color:"main",pos:[0,2.15,0],scale:[0.8,0.6,0.8],anim:"head"},{mesh:"sphere",color:"accent",pos:[0,1.55,0.5],scale:[0.95,0.85,0.5],anim:"head"},...a$(1.7,0.72,0.2,0.17),{mesh:"box",color:"#16111f",pos:[0,1.32,0.74],scale:[0.4,0.14,0.06],anim:"head"},{mesh:"cone",color:"#ffffff",pos:[-0.1,1.24,0.78],rot:[U0,0,0],scale:[0.07,0.12,0.05],anim:"head"},{mesh:"cone",color:"#ffffff",pos:[0.1,1.24,0.78],rot:[U0,0,0],scale:[0.07,0.12,0.05],anim:"head"},{mesh:"cyl",color:"#fff7ee",pos:[0,2.48,0],scale:[0.62,0.22,0.62],anim:"head"},{mesh:"cyl",color:"#fff7ee",pos:[0,2.65,0],scale:[0.42,0.2,0.42],anim:"head"},{mesh:"cone",color:"#fff7ee",pos:[0,2.9,0],scale:[0.3,0.35,0.3],anim:"head"},{mesh:"sphere",color:"main",pos:[-1,1.35,0.2],rot:[0,0,0.35],scale:[0.42,0.95,0.42],anim:"armL"},{mesh:"sphere",color:"main",pos:[1,1.35,0.2],rot:[0,0,-0.35],scale:[0.42,0.95,0.42],anim:"armR"},{mesh:"sphere",color:"accent",pos:[-1.15,0.72,0.35],scale:[0.28,0.22,0.28],anim:"armL"},{mesh:"sphere",color:"accent",pos:[1.15,0.72,0.35],scale:[0.28,0.22,0.28],anim:"armR"}]};var w={plazaR:4,ringIn:5,ringOut:12.6,cityR:14.4,street:0.45,lampIn:4.5,lampOut:13.2,gateZ:-16.8,gateHalfW:7,gateFarZ:-19.6,waterZ:-31,maxDistricts:7},U$=($)=>$.toFixed(3),NJ=`#version 300 es
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
    float fade = exp(-abs(w.z - ${U$(w.waterZ-0.5)}) * 0.12);
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
`,UJ=`#version 300 es
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
uniform int uCount;
uniform vec3 uDCol[${w.maxDistricts}];
// Per district: x steppable, y selected, z hovered, w flash after a banner change.
uniform vec4 uDState[${w.maxDistricts}];
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
const float PLAZA_R = ${U$(w.plazaR)};
const float RING_IN = ${U$(w.ringIn)};
const float RING_OUT = ${U$(w.ringOut)};
const float CITY_R = ${U$(w.cityR)};
const float STREET = ${U$(w.street)};

/** Mortar lines of a stone grid: 1 on the joints, faded out where stones get smaller than a few pixels. */
float joints(vec2 q, float width) {
  vec2 f = abs(fract(q) - 0.5);
  float d = 0.5 - max(f.x, f.y);
  float fw = max(fwidth(q.x), fwidth(q.y));
  float line = 1.0 - smoothstep(width, width + fw * 1.5, d);
  return line * (1.0 - clamp(fw * 3.0 - 0.6, 0.0, 1.0));
}

vec3 cityFloor(vec2 xz, float r, inout vec3 em) {
  float th = atan(xz.x, -xz.y);
  if (th < 0.0) th += TAU;
  float n = float(uCount);
  float span = TAU / n;
  // Warm pools of light under the lanterns at the district borders.
  float ab = floor(th / span + 0.5) * span;
  vec2 lb = vec2(sin(ab), -cos(ab));
  float dIn = length(xz - lb * ${U$(w.lampIn)});
  float dOut = length(xz - lb * ${U$(w.lampOut)});
  em += vec3(1.0, 0.68, 0.36) * (exp(-dIn * dIn * 0.8) + exp(-dOut * dOut * 0.8)) * 0.3;
  vec3 base;
  if (xz.y < -CITY_R + 1.0 && r >= CITY_R) {
    // The square in front of the city gates.
    vec2 q = xz / 0.55;
    base = vec3(0.2, 0.17, 0.24) * (0.8 + 0.3 * hash21(floor(q)));
    base = mix(base, vec3(0.08, 0.07, 0.11), joints(q, 0.06));
    float road = 1.0 - smoothstep(1.3, 1.45, abs(xz.x));
    base = mix(base, vec3(0.12, 0.1, 0.15), road * 0.6);
  } else if (r < PLAZA_R) {
    // The fair plaza: concentric cobbles, a gold inlay ring and the glow of the garlands.
    float ringW = 0.42;
    float ri = floor(r / ringW);
    float cnt = max(6.0, floor(TAU * (ri + 0.5) * ringW / 0.5));
    float a = th / TAU * cnt + hash21(vec2(ri, 3.0));
    vec2 q = vec2(r / ringW, a);
    base = vec3(0.36, 0.29, 0.31) * (0.78 + 0.36 * hash21(floor(q)));
    base = mix(base, vec3(0.11, 0.09, 0.13), joints(q, 0.07));
    float inlay = 1.0 - smoothstep(0.03, 0.08, abs(r - 2.62));
    em += vec3(1.0, 0.72, 0.28) * inlay * 0.7;
    em += vec3(1.0, 0.55, 0.35) * 0.09 * smoothstep(PLAZA_R, 0.5, r);
  } else if (r < RING_IN) {
    // Inner ring road with a bright curb toward the plaza.
    vec2 q = vec2(r / 0.33, th * r / 0.36);
    base = vec3(0.13, 0.11, 0.17) * (0.85 + 0.25 * hash21(floor(q)));
    base = mix(base, vec3(0.07, 0.06, 0.1), joints(q, 0.06));
    float curb = 1.0 - smoothstep(0.0, 0.07, abs(r - PLAZA_R - 0.04));
    base = mix(base, vec3(0.5, 0.45, 0.5), curb);
  } else if (r < RING_OUT) {
    float k = min(floor(th / span), n - 1.0);
    float phi = th - (k + 0.5) * span;
    float dB = r * sin(span * 0.5 - abs(phi));
    if (dB < STREET) {
      // Radial street between two districts, with a dashed centre line.
      base = vec3(0.09, 0.08, 0.13);
      float line = 1.0 - smoothstep(0.03, 0.06, dB);
      float dash = step(0.5, fract(r * 0.7));
      em += vec3(1.0, 0.8, 0.4) * line * dash * 0.25;
    } else {
      int ki = int(k);
      vec3 dc = uDCol[ki];
      vec4 st = uDState[ki];
      // Paving in the district colour, laid along the ring.
      vec2 q = vec2(r / 0.62, r * phi / 0.62);
      base = mix(vec3(0.15, 0.13, 0.2), dc, 0.36) * (0.8 + 0.3 * hash21(floor(q) + k * 7.0));
      base = mix(base, base * 0.45, joints(q, 0.05));
      float edge = min(dB - STREET, min(r - RING_IN, RING_OUT - r));
      float curb = 1.0 - smoothstep(0.0, 0.14, edge);
      em += dc * curb * 0.6;
      // Where the viewer may step: a pulsing gold rim; the picked district glows.
      float band = 1.0 - smoothstep(0.0, 0.55, edge);
      float pulse = 0.55 + 0.45 * sin(uTime * 3.6);
      vec3 gold = vec3(1.0, 0.78, 0.3);
      em += gold * band * st.x * pulse * 0.9 + dc * 0.07 * st.x;
      em += (mix(dc, vec3(1.0), 0.5) * 0.12 + gold * band * 0.6) * st.z;
      em += (mix(dc, gold, 0.45) * 0.3 + vec3(1.0, 0.92, 0.65) * band * 1.5) * st.y;
      em += (dc * 0.7 + vec3(0.35)) * st.w;
    }
  } else {
    // Outer boulevard.
    vec2 q = vec2(r / 0.45, th * r / 0.5);
    base = vec3(0.12, 0.1, 0.16) * (0.85 + 0.2 * hash21(floor(q)));
    base = mix(base, vec3(0.07, 0.06, 0.1), joints(q, 0.05));
    float curb = 1.0 - smoothstep(0.0, 0.07, abs(r - RING_OUT - 0.04));
    base = mix(base, vec3(0.45, 0.4, 0.48), curb);
  }
  return base;
}

void main() {
  vec3 n = normalize(vNormal);
  vec3 base = uColor;
  vec3 emissive = uEmissive;
  float alpha = uAlpha;
  float rimAmount = uRim;
  if (uMode == 1) {
    float r = length(vWorld.xz);
    bool gateSquare = abs(vWorld.x) < ${U$(w.gateHalfW)} && vWorld.z < 0.0 && vWorld.z > ${U$(w.gateFarZ)};
    if (r < CITY_R || gateSquare) {
      base = cityFloor(vWorld.xz, r, emissive);
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
    float streak = pow(max(0.0, sin(vWorld.x * 2.3 + sin(vWorld.z * 3.0 + uTime))), 12.0) * smoothstep(${U$(w.waterZ-14)}, ${U$(w.waterZ-1)}, vWorld.z);
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
  }
  vec3 c = shade(base, n, vWorld, rimAmount) + emissive;
  c = mix(c, vec3(1.6, 0.25, 0.25), uFlash);
  outColor = vec4(applyFog(c, vWorld), alpha);
}
`,qJ=`#version 300 es
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
`,CJ=`#version 300 es
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
`,OJ=`#version 300 es
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
`,LJ=`#version 300 es
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
`,DJ=`#version 300 es
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
`,jJ=`#version 300 es
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
`,RJ=`#version 300 es
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
`,AJ=`#version 300 es
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
`,SJ=`#version 300 es
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
`,EJ=`#version 300 es
precision highp float;
precision highp int;
in vec3 vWorld;
in vec3 vNormal;
in vec2 vUv;
flat in int vFace;
uniform vec3 uBody;
/** Gold shimmer of a bonus die (the district's bonus or an ability's handful). */
uniform float uBonus;
uniform int uSym[6];
uniform int uOnly;
uniform float uAlpha;
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
  int sym = uOnly >= 0 ? uOnly : uSym[clamp(vFace, 0, 5)];
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
  vec3 col = mix(ink, ink2, m2);
  vec3 base = mix(uBody, col, m);
  vec3 c = shade(base, n, vWorld, 0.25);
  c += col * m * 0.22;
  c += vec3(1.0, 0.82, 0.25) * uBonus * 0.18;
  outColor = vec4(c, uAlpha);
}
`,t$=`#version 300 es
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
`;var kJ=`#version 300 es
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
`,IJ=`#version 300 es
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
`,wJ=`#version 300 es
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
`,TJ=`#version 300 es
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
`,_J=`#version 300 es
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
`,vJ=`#version 300 es
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
`,fJ=`#version 300 es
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
`,zJ=`#version 300 es
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
`,hJ=`#version 300 es
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
`,yJ=`#version 300 es
precision highp float;
layout(location = 0) in vec3 aPos;
uniform mat4 uModel;
uniform mat4 uLightVP;
void main() {
  gl_Position = uLightVP * uModel * vec4(aPos, 1.0);
}
`,xJ=`#version 300 es
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
`,bJ=`#version 300 es
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
`,q0=`#version 300 es
precision highp float;
void main() {}
`,uJ=`#version 300 es
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
`,cJ=`#version 300 es
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
`,nJ=`#version 300 es
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
`;var G$=Math.PI*2,tJ={sword:0,coin:1,heal:2,mana:3},N6=Int32Array.from({length:6},($,Z)=>tJ[S0[Z%S0.length]]),z0=Object.fromEntries(aJ.map(($)=>[$,Math.max(0,S0.indexOf($))])),U6={sword:[0.85,0.9,1],coin:[1,0.8,0.22],heal:[0.2,0.95,0.6],mana:[0.3,0.6,1]},q6={ram:[1,0.45,0.2],roar:[1,0.78,0.3],warcry:[1,0.3,0.25],handful:[0.75,0.6,1],treasure:[1,0.82,0.2],dig:[0.55,0.78,1],bite:[0.9,0.12,0.3],rob:[0.45,0.95,0.45],lasso:[1,0.62,0.3],show:[1,0.45,0.85],kick:[0.4,0.9,1],facets:[0.62,0.45,1]},l$=(()=>{let $=[-0.45,0.55,-0.7],Z=Math.hypot(...$);return[$[0]/Z,$[1]/Z,$[2]/Z]})(),C6=[1.15,0.82,0.7],O6=[0.42,0.32,0.62],L6=[0.16,0.1,0.2],D6=[0.62,0.3,0.45],j6=[0,0,0],h0=[0,1,0],R6=[1,38,1],dJ=2048,C0=22,mJ=2,A6=3072,O0=900,y0=200,rJ=240,S6=6.35,pJ=8.45,E6=10.2,k6=10.05,I6=10.6,h$=11.75,e$=0.475,w6=1.15,L0=5.2,D0=0.3,iJ=2.9,n$=5.4,$$=[0,0,2.6],T6=4,x0=w.gateZ+1.9,A0=[0.78,0.77,0.84],p0=[0.6,0.58,0.68],_6=[A0,p0],v6=[0.74,0.73,0.8],oJ=[[],[[0,0]],[[-1.45,0],[1.45,0]],[[-2.35,0.3],[0,-0.35],[2.35,0.3]],[[-1.3,-0.8],[1.3,-0.8],[-1.3,0.95],[1.3,0.95]],[[-2.3,-0.75],[0,-0.75],[2.3,-0.75],[-1.2,1],[1.2,1]],[[-2.3,-0.75],[0,-0.75],[2.3,-0.75],[-2.3,1],[0,1],[2.3,1]]],f6=[0,1.25,1.18,1.04,0.94,0.88,0.84],b0=["box","cyl","cone","sphere","prism","pyr"],gJ=[{p:[-22,3.2,8],a0:0.3,speed:0.23,color:[1,0.82,0.72]},{p:[23,4,-5],a0:2.1,speed:-0.19,color:[0.72,0.84,1]},{p:[-9,3.5,-24],a0:4,speed:0.16,color:[1,0.66,0.9]},{p:[13,5,-23],a0:5.2,speed:-0.27,color:[0.9,0.9,1]}];class lJ{data={box:[],cyl:[],cone:[],sphere:[],prism:[],pyr:[]};add($,Z,J,K,G,W=0,V=0){this.data[$].push(Z[0],Z[1],Z[2],W,J[0],J[1],J[2],J[3],K[0],K[1],K[2],V,G[0],G[1],G[2],1)}}var T=[0,0,0,1],z6=y.create(),h6=[0.2,0.2,0.3],y6=y.fromTRS(y.create(),[0,0.3,w.waterZ-40],T,[170,1,80]),$0=[0.4,0.36,0.44],u0=[0.36,0.25,0.2],J0=[0.18,0.17,0.22],c0=[1,0.78,0.3],j0=[1,0.78,0.45],sJ=[[0.66,0.58,0.5],[0.6,0.52,0.62],[0.52,0.58,0.66],[0.68,0.62,0.46],[0.58,0.64,0.56]],Z0=[[1,0.85,0.6],[1,0.4,0.7],[1,0.8,0.25],[0.45,0.9,1],[0.75,0.5,1]];class i0{canvas;gl;progs;meshes;buildingMesh;houseMesh;carMesh;propMeshes;particleVao;particleBuf;particleData=new Float32Array((O0+y0+w.maxDistricts+rJ)*8);boltVao;boltBuf;boltData=new Float32Array(A6*6);emptyVao;buildingData=new Float32Array(0);houseData=new Float32Array(0);carData=new Float32Array(0);lightData=new Float32Array(0);lightCount=0;fitPoints=new Float32Array(0);fitProj=new Float32Array(0);monsters=new Map;districts=[];ghosts=[];flyers=[];buildings=[];cottages=[];buildingsDirty=!0;housesDirty=!0;particles=[];cars=[];bolts=[];waves=[];timers=[];labels=[];labelIndex=new Map;layoutKey="";viewerId=null;colors=new Map;canStep=!1;selected=-1;hover=-1;dCol=new Float32Array(w.maxDistricts*3);dState=new Float32Array(w.maxDistricts*4);fmt;quality="high";pipe=null;direct=!1;shadow=null;dummyShadow;lightVP=y.create();renderScale=1;frameEma=0.016666666666666666;lastScaleCheck=0;hit=0;lessMotion=!1;yaw=0;pitch=0.95;pitchAuto=!0;zoomK=1;camShake=0;camPos=[0,0,0];camTarget=[0,0,0];focus=null;lastInput=-100;drift=[0,0];view=y.create();proj=y.create();viewProj=y.create();invViewProj=y.create();insets={top:0,right:0,bottom:0,left:0};insetsTo={top:0,right:0,bottom:0,left:0};width=1;height=1;dpr=1;time=0;last=0;raf=0;tmp=y.create();tmp2=y.create();tmp3=y.create();v0=[0,0,0];v1=[0,0,0];v2=[0,0,0];v3=[0,0,0];q0=[0,0,0,1];q1=[0,0,0,1];q2=[0,0,0,1];c4=new Float32Array(4);onLabels=null;constructor($,Z="high"){this.canvas=$;let J=$.getContext("webgl2",{antialias:!1,alpha:!1,depth:!0,stencil:!1,powerPreference:"high-performance"});if(!J)throw Error("WebGL2 недоступен");this.gl=J,this.fmt=FJ(J),this.progs={obj:new e(J,NJ,UJ),bld:new e(J,DJ,jJ),house:new e(J,qJ,CJ),prop:new e(J,OJ,LJ),dice:new e(J,SJ,EJ),sky:new e(J,t$,kJ),part:new e(J,IJ,wJ),decal:new e(J,TJ,_J),car:new e(J,RJ,AJ),beam:new e(J,vJ,fJ),bolt:new e(J,zJ,hJ),depth:new e(J,yJ,q0),depthInst:new e(J,xJ,q0),depthProp:new e(J,bJ,q0),bright:new e(J,t$,uJ),blur:new e(J,t$,cJ),composite:new e(J,t$,nJ)};for(let H of[this.progs.obj,this.progs.bld,this.progs.house,this.progs.prop,this.progs.dice,this.progs.car])H.use().int("uShadowMap",1);this.progs.dice.use().ints("uSym",N6);let K=this.progs.composite.use();K.int("uScene",0),K.int("uBloom1",2),K.int("uBloom2",3);let G=this.progs.obj;this.meshes={sphere:new s(J,G,v0(14,20)),box:new s(J,G,s$()),cyl:new s(J,G,f$(0.5,0.5,18)),cone:new s(J,G,f$(0.5,0,18)),ground:new s(J,G,P0(160,1)),water:new s(J,G,P0(1,60)),dice:new s(J,this.progs.dice,XJ(0.22,7)),quad:new s(J,this.progs.decal,P0(1,1)),beam:new s(J,this.progs.beam,f$(0.1,1.9,24,!1)),cloth:new s(J,G,HJ(14,6))},this.buildingMesh=new s(J,this.progs.bld,s$(!0),[{name:"iOffset",size:4},{name:"iScale",size:4},{name:"iColor",size:4}]),this.houseMesh=new s(J,this.progs.house,QJ(),[{name:"iOffset",size:4},{name:"iScale",size:4},{name:"iColor",size:4},{name:"iRoof",size:4}]),this.carMesh=new s(J,this.progs.car,s$(!0),[{name:"iOffset",size:4},{name:"iColor",size:4}]);let W=[{name:"iPos",size:4},{name:"iQuat",size:4},{name:"iScale",size:4},{name:"iColor",size:4}],V=this.progs.prop;this.propMeshes={box:new s(J,V,s$(),W),cyl:new s(J,V,f$(0.5,0.5,14),W),cone:new s(J,V,f$(0.5,0,14),W),sphere:new s(J,V,v0(8,12),W),prism:new s(J,V,BJ(),W),pyr:new s(J,V,f$(0.5,0,4),W)},this.emptyVao=J.createVertexArray(),this.particleVao=J.createVertexArray(),this.particleBuf=J.createBuffer(),J.bindVertexArray(this.particleVao),J.bindBuffer(J.ARRAY_BUFFER,this.particleBuf),J.bufferData(J.ARRAY_BUFFER,this.particleData.byteLength,J.DYNAMIC_DRAW),J.enableVertexAttribArray(0),J.vertexAttribPointer(0,3,J.FLOAT,!1,32,0),J.enableVertexAttribArray(1),J.vertexAttribPointer(1,4,J.FLOAT,!1,32,12),J.enableVertexAttribArray(2),J.vertexAttribPointer(2,1,J.FLOAT,!1,32,28),this.boltVao=J.createVertexArray(),this.boltBuf=J.createBuffer(),J.bindVertexArray(this.boltVao),J.bindBuffer(J.ARRAY_BUFFER,this.boltBuf),J.bufferData(J.ARRAY_BUFFER,this.boltData.byteLength,J.DYNAMIC_DRAW),J.enableVertexAttribArray(0),J.vertexAttribPointer(0,3,J.FLOAT,!1,24,0),J.enableVertexAttribArray(1),J.vertexAttribPointer(1,3,J.FLOAT,!1,24,12),J.bindVertexArray(null),this.dummyShadow=new Y0(J,1),J.bindFramebuffer(J.FRAMEBUFFER,this.dummyShadow.fb),J.clearDepth(1),J.clear(J.DEPTH_BUFFER_BIT),J.bindFramebuffer(J.FRAMEBUFFER,null),this.quality=Z,this.renderScale=Z==="high"?1:0.8,this.setupShadow(),this.buildCity(),this.buildCars(),this.start()}setQuality($){if($===this.quality)return;this.quality=$,this.renderScale=$==="high"?1:0.8,this.setupShadow(),this.rebuildTargets(),this.buildCars()}setupShadow(){if(this.quality==="high"&&!this.shadow){let $=new Y0(this.gl,dJ);if($.ok)this.shadow=$;else $.dispose()}else if(this.quality==="low"&&this.shadow)this.shadow.dispose(),this.shadow=null}maxSamples(){let $=this.gl;try{let Z=$.getInternalformatParameter($.RENDERBUFFER,this.fmt.internal,$.SAMPLES);return Z&&Z.length?Math.max(...Array.from(Z)):0}catch{return 0}}rebuildTargets(){let $=this.pipe;if($)$.scene.dispose(),$.ms?.dispose(),$.bloomA.dispose(),$.bloomB.dispose(),$.bloomC.dispose(),$.bloomD.dispose(),this.pipe=null;if(this.direct)return;let Z=this.gl,J=Math.max(1,Math.round(this.canvas.width*this.renderScale)),K=Math.max(1,Math.round(this.canvas.height*this.renderScale)),G=(V)=>{let H=null;{let D=Math.min(this.quality==="high"?4:2,this.maxSamples());if(D>1){if(H=new f0(Z,J,K,V,D),!H.ok)H.dispose(),H=null}}let X=new z$(Z,J,K,V,!H),Q=(D)=>Math.max(1,D>>1),B=(D)=>Math.max(1,D>>2),F=new z$(Z,Q(J),Q(K),V,!1),M=new z$(Z,Q(J),Q(K),V,!1),P=new z$(Z,B(J),B(K),V,!1),U=new z$(Z,B(J),B(K),V,!1),q=[X,F,M,P,U];if(q.every((D)=>D.ok))return{scene:X,ms:H,bloomA:F,bloomB:M,bloomC:P,bloomD:U};return q.forEach((D)=>D.dispose()),H?.dispose(),null},W=G(this.fmt);if(!W&&this.fmt.hdr)this.fmt={internal:Z.RGBA8,format:Z.RGBA,type:Z.UNSIGNED_BYTE,hdr:!1},W=G(this.fmt);if(!W){this.direct=!0;return}this.pipe=W}at($,Z,J,K=0,G=[0,0,0]){let W=this.districts[$];return G[0]=W.er[0]*Z+W.et[0]*J,G[1]=K,G[2]=W.er[2]*Z+W.et[2]*J,G}buildLayout($){let Z=$.districts.length,J=G$/Z;this.districts=$.districts.map((Y,N)=>{let L=(N+0.5)*J,C=[Math.sin(L),0,-Math.cos(L)],A=[Math.cos(L),0,Math.sin(L)],R=(k,z,r=0)=>[C[0]*k+A[0]*z,r,C[2]*k+A[2]*z],j=[];for(let k=0;k<r0;k++){let z=(c(N*17+k*5+1)-0.5)*0.5;j.push({face:Y.dice[k]??"coin",present:k<Y.dice.length,rest:R(S6+(c(N*3+k)-0.5)*0.25,(k-(r0-1)/2)*w6,e$),q:v.multiply(v.axisAngle([0,1,0],z),d0[z0[Y.dice[k]??"coin"]]),t0:-10,fromH:0,axis:[1,0,0],turns:0})}let E=A[0]>=-0.01?1:-1;return{angle:L,er:C,et:A,color:w$(E0[Y.id]?.color??"#888888"),owner:Y.owner,fortified:Y.fortified,dice:j,poleTop:R(E6,E*iJ,D0+L0),stall:R(k6,-E*iJ),lamp:R(I6,0),centre:R(pJ,0),flagT0:-10,flagFrom:[A0,p0],flagTo:[A0,p0],flagFall:!1,flash:0,lastCollect:-10,hl:[0,0,0]}});let K=new lJ,G=[];this.cottages=[];let W=[],V=(Y,N,L,C=0)=>{W.push(Y[0],Y[1],Y[2],N[0],N[1],N[2],C,L)},H=(Y)=>v.axisAngle([0,1,0],Y),X=(Y,N,L,C,A)=>{let R=v.rotate(N,[L,C,A]);return[Y[0]+R[0],Y[1]+R[1],Y[2]+R[2]]};this.districts.forEach((Y,N)=>{let L=Math.atan2(-Y.er[0],-Y.er[2]),C=H(L),A=(_,I,o=0)=>this.at(N,_,I,o),R=Y.poleTop;K.add("box",[R[0],0.15,R[2]],C,[0.62,0.3,0.62],$0),K.add("cyl",[R[0],D0,R[2]],T,[0.13,L0,0.13],u0),K.add("sphere",[R[0],D0+L0+0.12,R[2]],T,[0.3,0.3,0.3],c0,0,0.8);let j=Y.stall;K.add("box",X(j,C,0,0.36,0),C,[1.5,0.72,0.62],u0);for(let[_,I,o]of[[-0.68,0.27,1.22],[0.68,0.27,1.22],[-0.68,-0.27,1.62],[0.68,-0.27,1.62]])K.add("cyl",X(j,C,_,0,I),T,[0.07,o,0.07],u0);let E=v.multiply(C,v.axisAngle([1,0,0],0.42));K.add("box",X(j,C,0,1.44,0.02),E,[1.78,0.05,0.86],Y.color,1),[[1,0.35,0.3],[1,0.8,0.25],[0.35,0.8,1]].forEach((_,I)=>K.add("sphere",X(j,C,(I-1)*0.42,0.82,0.08),T,[0.22,0.2,0.22],_));let z=Y.lamp;K.add("cyl",z,T,[0.08,1.95,0.08],J0),K.add("sphere",[z[0],2.05,z[2]],T,[0.28,0.28,0.28],j0,0,2.2),V([z[0],2.05,z[2]],j0,0.85,N*0.7);let r=Z>=6?3:Z===5?4:Z===4?5:7,n=J/2-1.2/h$;for(let _=0;_<r;_++){let I=-n+2*n*_/(r-1),o=c(N*31+_*7+3),W$=Math.abs(I)<0.05,M$=h$+(c(N*13+_)-0.5)*0.45+(W$?0.4:0),K$=Y.angle+I,a=Math.sin(K$)*M$,D$=-Math.cos(K$)*M$,P$=1.5+c(o*9.1)*0.55,j$=1.25+c(o*5.3)*0.35,d$=1.05+c(o*7.7)*0.6,R$=sJ[Math.floor(c(o*3.3)*sJ.length)],C$=0.82+c(o*2.1)*0.3;G.push(a,0,D$,Math.atan2(-a,-D$),P$,d$,j$,o,R$[0],R$[1],R$[2],0,Y.color[0]*C$,Y.color[1]*C$,Y.color[2]*C$,0.72),this.cottages.push({x:a,z:D$,shakeT:-10})}if(Z<=5)for(let _ of[-1,1])for(let I of[7.1,9.4]){let o=_*(J/2-1.35/I),W$=Y.angle+o,M$=Math.sin(W$)*I,K$=-Math.cos(W$)*I,a=1.3+c(N*5+I+_)*0.6;K.add("cyl",[M$,0,K$],T,[0.2,0.55,0.2],[0.3,0.2,0.15]),K.add("cone",[M$,0.45,K$],T,[1.25,a,1.25],[0.14,0.36,0.26]),K.add("cone",[M$,0.45+a*0.45,K$],T,[0.9,a*0.75,0.9],[0.18,0.44,0.3])}});for(let Y=0;Y<Z;Y++){let N=Y*J;for(let L of[w.lampIn,w.lampOut]){let C=Math.sin(N)*L,A=-Math.cos(N)*L;if(L===w.lampOut&&Y===0)continue;K.add("cyl",[C,0,A],T,[0.08,1.8,0.08],J0),K.add("sphere",[C,1.9,A],T,[0.26,0.26,0.26],j0,0,2.2),V([C,1.9,A],j0,0.8,Y*1.3+L)}}K.add("cyl",[0,0,0],T,[1.5,0.32,1.5],$0),K.add("cyl",[0,0.3,0],T,[0.22,n$,0.22],[0.9,0.2,0.35],2),K.add("sphere",[0,n$+0.35,0],T,[0.6,0.6,0.6],c0,0,0.9),K.add("cone",[0,n$+0.55,0],T,[0.22,0.7,0.22],c0,0,0.6);let Q=[0,n$+0.05,0];for(let Y=0;Y<10;Y++){let N=Y/10*G$+0.3,L=[Math.sin(N)*1.85,0.05,-Math.cos(N)*1.85],C=[L[0]-Q[0],L[1]-Q[1],L[2]-Q[2]],A=Math.hypot(...C);K.add("cyl",Q,PJ([0,1,0],[C[0]/A,C[1]/A,C[2]/A]),[0.07,A,0.07],Z0[Y%Z0.length],0,0.35)}[0,0.95,-0.95,1.95,-1.95].forEach((Y,N)=>{let L=[Math.sin(Y)*3.7,0,-Math.cos(Y)*3.7];K.add("cyl",L,T,[0.08,2.45,0.08],J0);let C=[0,n$-0.35,0],A=[L[0],2.45,L[2]];for(let R=1;R<=11;R++){let j=R/12,E=[Z$(C[0],A[0],j),Z$(C[1],A[1],j)-Math.sin(j*Math.PI)*0.6,Z$(C[2],A[2],j)];V(E,Z0[(R+N)%Z0.length],0.6,R*0.45+N)}});let F=[0.85,0.16,0.22];K.add("box",[$$[0],0.5,$$[2]],T,[2.3,1,1.3],F,1),K.add("prism",[$$[0],1,$$[2]],T,[2.55,0.9,1.62],F,1),K.add("box",[$$[0],1.08,$$[2]+0.66],T,[0.8,0.9,0.04],[0.12,0.06,0.08]),K.add("cyl",[$$[0],1.85,$$[2]],T,[0.05,0.4,0.05],J0),K.add("box",[$$[0],2.52,$$[2]],T,[0.74,0.74,0.08],[0.95,0.95,0.97],0,0.25),K.add("box",[$$[0],2.52,$$[2]+0.05],T,[0.5,0.15,0.06],[1,0.12,0.15],0,1.2),K.add("box",[$$[0],2.52,$$[2]+0.05],T,[0.15,0.5,0.06],[1,0.12,0.15],0,1.2),V([$$[0],2.52,$$[2]+0.1],[1,0.3,0.3],1.6,0);let M=w.gateZ,P=v.axisAngle([0,1,0],Math.PI/4);for(let Y of[-1,1])K.add("box",[Y*2.45,2.1,M],T,[1.5,4.2,1.5],$0),K.add("pyr",[Y*2.45,4.2,M],P,[2.5,1.5,2.5],[0.55,0.2,0.32]),K.add("cyl",[Y*2.45,5.6,M],T,[0.05,1.1,0.05],J0),K.add("box",[Y*2.45+0.34,6.45,M],T,[0.62,0.34,0.03],Y<0?[0.95,0.35,0.5]:[0.4,0.8,1],0,0.3),K.add("sphere",[Y*1.55,2.7,M+0.85],T,[0.3,0.3,0.3],[1,0.6,0.25],0,2.6),V([Y*1.55,2.7,M+0.85],[1,0.55,0.2],1.6,Y);K.add("box",[0,2,M],T,[3.4,4,1],$0);for(let Y of[-1.15,0,1.15])K.add("box",[Y,4.2,M],T,[0.5,0.4,1],$0);let U=[0.1,0.06,0.12],q=v.axisAngle([1,0,0],Math.PI/2);K.add("box",[0,1.05,M+0.46],T,[1.9,2.1,0.12],U),K.add("cyl",[0,2.1,M+0.4],q,[1.9,0.14,1.9],U),K.add("box",[0,0.75,M+0.53],T,[1.5,1.5,0.02],[1,0.62,0.3],0,0.55),K.add("cyl",[0,2.1,M+0.47],q,[2.3,0.1,2.3],[0.52,0.47,0.56]);for(let Y of b0)this.propMeshes[Y].setInstances(new Float32Array(K.data[Y]));this.houseData=new Float32Array(G),this.housesDirty=!0,this.lightData=new Float32Array(W),this.lightCount=Math.min(y0,W.length/8);let D=[];for(let Y=0;Y<24;Y++){let N=Y/24*G$;D.push(Math.sin(N)*(w.cityR-0.5),0,-Math.cos(N)*(w.cityR-0.5)),D.push(Math.sin(N)*h$,2.7,-Math.cos(N)*h$)}for(let Y of this.districts)D.push(Y.poleTop[0],Y.poleTop[1]+0.4,Y.poleTop[2]);for(let Y of[-1,1])D.push(Y*3.3,3.6,M,Y*7.2,0,x0,Y*7.2,2.6,x0);this.fitPoints=new Float32Array(D),this.fitProj=new Float32Array(D.length)}buildCity(){let $=[],Z=0;for(let J=-12;J<12;J++)for(let K=-11;K<12;K++){let G=J*3+1.5,W=K*3+1.5,V=Math.hypot(G,W);if(V<17.6||V>36)continue;if(W<w.waterZ+1)continue;if(Math.abs(G)<w.gateHalfW+1.5&&W<-12&&W>w.gateFarZ-2.5)continue;let X=c(J*31+K*17+5)>0.55?2:1;for(let Q=0;Q<X;Q++){let B=c(Z*7.3+Q),F=X===1?1.6+B*0.5:0.95,M=X===1?1.6+c(Z*3.1)*0.5:1.8,P=X===1?0:(Q-0.5)*1.05,U=c(Z*5.7+Q),q=V<21?0.8+U*1.4:V<26?1.5+U*3:2.5+U*U*7+2*c(Z*9.1);if(W>12)q=Math.min(q,1.6+(W-12)*0.12);let D=c(Z*2.3+Q),Y=D<0.33?[0.28,0.24,0.42]:D<0.66?[0.36,0.3,0.38]:[0.22,0.28,0.4];$.push({x:G+P,z:W,w:F,d:M,h:q,color:Y,seed:c(Z*13.7+Q),shakeT:-10})}Z++}this.buildings=$,this.buildingData=new Float32Array($.length*12),this.buildingsDirty=!0}buildCars(){let $=this.quality==="high"?64:28,Z=[[0.85,0.85,0.9],[0.12,0.12,0.15],[0.8,0.15,0.2],[0.95,0.75,0.15],[0.2,0.45,0.85],[0.9,0.9,0.3]],J=[];for(let K=0;K<$;K++){let G=c(K*3.7)>0.5?1:0,W=c(K*5.3)>0.5?1:-1;J.push({axis:G,line:(Math.floor(c(K*7.1)*23)-11)*3,lane:W*0.13,dir:W,speed:1.3+c(K*9.7)*1.4,phase:c(K*11.3)*80,color:Z[Math.floor(c(K*13.1)*Z.length)]})}this.cars=J,this.carData=new Float32Array($*8)}sync($,Z){this.viewerId=Z;let J=$.districts.map((W)=>W.id).join(",");if(J!==this.layoutKey)this.layoutKey=J,this.buildLayout($);for(let W of $.players){let V=m0[W.monster];if(!this.colors.has(W.id))this.colors.set(W.id,[w$(V.color),w$(V.accent)])}$.districts.forEach((W,V)=>{let H=this.districts[V];H.owner=W.owner,H.fortified=W.fortified,H.dice.forEach((X,Q)=>{let B=W.dice[Q];if(X.present=B!==void 0,B&&B!==X.face){X.face=B;let F=(c(V*17+Q*5+$.turn)-0.5)*0.5;v.setAxisAngle(this.q0,0,1,0,F),v.mulInto(X.q,this.q0,d0[z0[B]])}})});let K=new Map;for(let W of $.players){let V=W.down?-2:W.at,H=K.get(V);if(H)H.push(W.id);else K.set(V,[W.id])}let G=$.players[$.current];$.players.forEach((W,V)=>{let H=this.monsters.get(W.id),X=W.down?-2:W.at,Q=K.get(X),B=Q.indexOf(W.id),F=[0,0,0],M=0.9;if(X>=0&&this.districts[X]){let P=Math.min(Q.length,oJ.length-1),U=oJ[P][Math.min(B,P-1)];this.at(X,pJ+U[1],U[0],0,F),M=f6[P]}else if(X===-1)F[0]=(B-(Q.length-1)/2)*2.6,F[2]=x0,M=1;else F[0]=(B-(Q.length-1)/2)*1.7,F[1]=0.86,F[2]=T6+0.7,M=0.72;if(!H)H=this.makeMonster(W.id,W.monster,V,F),H.scale=M,H.lie=W.down?1:0,this.monsters.set(W.id,H);if(H.to[0]!==F[0]||H.to[1]!==F[1]||H.to[2]!==F[2])this.startMove(H,F);H.scaleTo=M,H.where=X,H.lieTo=W.down?1:0,H.current=W.id===G.id&&$.phase!=="gameOver"});for(let W of[...this.monsters.keys()])if(!$.players.some((V)=>V.id===W))this.monsters.delete(W)}highlight($,Z){this.canStep=$,this.selected=Z??-1}hoverDistrict($){this.hover=$}setInsets($,Z,J,K){let G=this.insetsTo.top===0&&this.insetsTo.bottom===0;if(this.insetsTo={top:$,right:Z,bottom:J,left:K},G)this.insets={top:$,right:Z,bottom:J,left:K}}makeMonster($,Z,J,K){let G=m0[Z],W=w$(G.color),V=w$(G.accent),H=YJ[Z],X=0;for(let Q of H)X=Math.max(X,Q.pos[1]+(Q.mesh==="cyl"||Q.mesh==="cone"?Q.scale[1]:Q.scale[1]/2));return{id:$,monster:Z,parts:H,partQ:H.map((Q)=>Q.rot?v.euler(Q.rot[0],Q.rot[1],Q.rot[2]):v.identity()),partMesh:H.map((Q)=>Q.mesh),partColor:H.map((Q)=>Q.color==="main"?W:Q.color==="accent"?V:w$(Q.color)),main:W,accent:V,height:X,pos:[...K],from:[...K],to:[...K],moveT0:-10,moveDur:1,arc:0,flips:0,style:null,styleT:-10,yaw:0,scale:0.9,scaleTo:0.9,lie:0,lieTo:0,flashT:-10,lungeT:-10,lungeDir:[0,0,1],current:!1,seed:J*1.37+0.3,landed:!0,where:-1,pullT:-10,pullTo:-1}}startMove($,Z){S.copy($.from,$.pos),S.copy($.to,Z),$.moveT0=this.time,$.landed=!1;let J=Math.hypot(Z[0]-$.from[0],Z[2]-$.from[2]);if(J<3.4)$.moveDur=0.5,$.arc=0.35,$.flips=0;else $.moveDur=p(0.6+J*0.03,0.7,1.25),$.arc=Math.min(6,1.6+J*0.22),$.flips=0;if($.style&&this.time-$.styleT<0.001)this.applyStyle($)}applyStyle($){let Z=Math.hypot($.to[0]-$.from[0],$.to[2]-$.from[2]);if($.style==="kick")$.moveDur=1.35,$.arc=6+Z*0.2,$.flips=this.lessMotion?0:2;else if($.style==="ko")$.moveDur=1.15,$.arc=2.6+Z*0.15,$.flips=this.lessMotion?0:1;else if($.style==="hop")$.moveDur=p(0.65+Z*0.035,0.75,1.3),$.arc=Math.min(6.5,1.8+Z*0.25);$.style=null}event($){let Z=this.time;switch($.type){case"move":{let J=this.monsters.get($.playerId);if(!J)break;let K=$.to>=0?"hop":J.lieTo>0.5||this.pendingKo.has($.playerId)?"ko":"kick";if(this.pendingKo.delete($.playerId),$.to>=0)J.pullT=Z,J.pullTo=$.to;if(J.style=K,J.styleT=Z,Math.abs(J.moveT0-Z)<0.001)this.applyStyle(J);if(!this.lessMotion&&K!=="hop"&&$.to<0)this.focusOn(J.pos,1.2,0.1);break}case"collect":this.collect($.playerId,$.district,$.faces);break;case"roll":{let J=this.districts[$.district];if(!J)break;let K=Math.abs(J.lastCollect-Z)<0.001;for(let G of $.indices){let W=J.dice[G];if(!W)continue;W.t0=Z+(K?0.55+G*0.09:G*0.06),W.fromH=K?6.5:1.3;let V=[Math.random()-0.5,Math.random()-0.5,Math.random()-0.5],H=Math.hypot(V[0],V[1],V[2])||1;S.set(W.axis,V[0]/H,V[1]/H,V[2]/H),W.turns=K?1.5+Math.random()*1.5:1+Math.random()}break}case"banner":{let J=this.districts[$.district];if(!J)break;J.flagT0=Z,J.flagFrom=this.colorsOf($.fromId),J.flagTo=this.colorsOf($.playerId),J.flagFall=!$.playerId;let K=J.poleTop;if(J.flagFall)this.burst([K[0],K[1]-0.5,K[2]],26,[0.75,0.72,0.8],2.2,1.3,0.7,-1.5);if(this.later(0.95,()=>{J.flash=1;let G=J.flagTo[0];if(J.flagFall)this.burst([K[0],K[1]-0.4,K[2]],20,[0.85,0.85,0.9],1.6,1.2,0.6,-1);else this.burst([K[0],K[1]-0.4,K[2]],46,G,4,1.3,0.55,-2.5),this.burst([K[0],K[1]-0.4,K[2]],18,[1,0.9,0.55],2.5,0.9,0.4,-1),this.waves.push({p:[K[0],0.06,K[2]],t0:this.time,dur:0.9,size:7,color:[G[0],G[1],G[2],1]})}),!this.lessMotion&&!J.flagFall)this.focusOn(J.centre,1.6,0.2);break}case"tribute":{let J=this.monsters.get($.playerId);if(!J)break;if($.districts.forEach((K,G)=>{let W=this.districts[K];if(!W)return;for(let V=0;V<3;V++)this.flyers.push({p0:[W.poleTop[0],W.poleTop[1]-0.5,W.poleTop[2]],target:$.playerId,t0:Z+G*0.22+V*0.08,dur:1.1,color:[1,0.82,0.3],size:0.9-V*0.15,lift:3.5});this.later(G*0.22,()=>this.burst([W.poleTop[0],W.poleTop[1]-0.3,W.poleTop[2]],14,[1,0.85,0.35],1.8,0.9,0.45,-0.5))}),$.post!==null)this.later(0.3,()=>{this.waves.push({p:[J.pos[0],0.07,J.pos[2]],t0:this.time,dur:1,size:6,color:[1,0.82,0.3,1]})});break}case"attack":{let J=this.monsters.get($.playerId);if(!J)break;let K=$.targets.map((Q)=>this.monsters.get(Q)).filter(Boolean);if(!K.length)break;let G=0,W=0;for(let Q of K)G+=Q.pos[0]/K.length,W+=Q.pos[2]/K.length;let V=G-J.pos[0],H=W-J.pos[2],X=Math.hypot(V,H)||1;S.set(J.lungeDir,V/X,0,H/X),J.lungeT=Z;for(let[Q,B]of K.entries())this.bolts.push({a:[J.pos[0]+J.lungeDir[0]*0.6,J.pos[1]+J.height*J.scale*0.6,J.pos[2]+J.lungeDir[2]*0.6],b:[B.pos[0],B.pos[1]+B.height*B.scale*0.55,B.pos[2]],t0:Z+0.12+Q*0.05,color:[J.accent[0]*0.5+0.5,J.accent[1]*0.5+0.3,J.accent[2]*0.5+0.4],seed:Math.random()*100});if(!this.lessMotion)this.focusOn([(J.pos[0]+G)/2,1.2,(J.pos[2]+W)/2],1.2,0);break}case"damage":{let J=this.monsters.get($.playerId);if(!J)break;let K=$.amount,G=$.playerId===this.viewerId,W=[J.pos[0],J.pos[1],J.pos[2]],V=Math.abs(J.pullT-Z)<0.001&&J.pullTo>=0,H=()=>{if(V){let Q=this.districts[J.pullTo];if(J.where===J.pullTo)S.copy(W,J.pos);else if(Q)S.set(W,Q.centre[0],0,Q.centre[2])}let X=W[1]+J.height*J.scale*0.55;if(J.flashT=this.time,this.camShake=Math.min(0.6,this.camShake+(this.lessMotion?0.05:0.12+K*0.04)),this.burst([W[0],X,W[2]],12+K*7,[1,0.35,0.2],4,0.9,0.45,-6),this.burst([W[0],X,W[2]],7,[1,0.9,0.5],2.5,0.6,0.3,-4),this.shakeNear(W,4),this.waves.push({p:[W[0],W[1]+0.05,W[2]],t0:this.time,dur:0.55,size:3.5+K*0.6,color:[1,0.35,0.2,0.9]}),!this.lessMotion&&(G||K>=3))this.hit=Math.max(this.hit,G?1:0.45)};this.later(0.2,()=>{let X=V&&J.where===J.pullTo?J.moveT0+J.moveDur-this.time:0;if(X>0.02)this.later(X,H);else H()});break}case"heal":{let J=this.monsters.get($.playerId);if(J)this.burst([J.pos[0],J.pos[1]+0.4,J.pos[2]],8+$.amount*4,[0.3,1,0.5],1,1.3,0.4,2);break}case"coins":{let J=this.monsters.get($.playerId);if(J&&$.amount>0)this.burst([J.pos[0],J.pos[1]+J.height*J.scale,J.pos[2]],5+$.amount*3,[1,0.8,0.2],1.8,1,0.3,1);break}case"mana":{let J=this.monsters.get($.playerId);if(J&&$.amount>0)this.burst([J.pos[0],J.pos[1]+0.6,J.pos[2]],7+$.amount*4,[0.25,0.55,1],1.1,1.3,0.35,2.4);break}case"vp":{let J=this.monsters.get($.playerId);if(!J||$.amount<=0)break;this.burst([J.pos[0],J.pos[1]+J.height*J.scale+0.3,J.pos[2]],6+$.amount*4,[1,0.8,0.3],2,1.2,0.45,0.5);break}case"ko":{let J=this.monsters.get($.playerId);if(!J)break;this.pendingKo.add($.playerId);let K=[J.pos[0],J.pos[1],J.pos[2]],G=Math.abs(J.pullT-Z)<0.001?this.districts[J.pullTo]:void 0;if(G)S.set(K,G.centre[0],0,G.centre[2]);this.later(0.2,()=>{this.burst([K[0],1,K[2]],50,[0.6,0.5,0.75],3.5,1.5,0.7,1),this.burst([K[0],2.4,K[2]],16,[1,0.9,0.4],2,1.3,0.4,-1),this.waves.push({p:[K[0],0.06,K[2]],t0:this.time,dur:1.1,size:9,color:[0.8,0.6,1,0.8]}),this.camShake=Math.min(0.9,this.camShake+(this.lessMotion?0.2:0.6)),this.shakeNear(K,6)});break}case"ability":{let J=this.monsters.get($.playerId);if(!J)break;let K=q6[$.abilityId]??J.accent;if(!this.lessMotion)this.focusOn(J.pos,1.8,0);let G=J.height*J.scale;for(let W=0;W<5;W++){let V=W/5*G$;this.bolts.push({a:[J.pos[0]+Math.cos(V)*4,13+W,J.pos[2]+Math.sin(V)*4],b:[J.pos[0],J.pos[1]+G,J.pos[2]],t0:Z+W*0.07,color:[K[0]*0.6+0.4,K[1]*0.6+0.4,K[2]*0.6+0.4],seed:Math.random()*100})}this.later(0.3,()=>{this.burst([J.pos[0],J.pos[1]+G*0.7,J.pos[2]],70,K,5,1.3,0.6,-1),this.burst([J.pos[0],J.pos[1]+G*0.7,J.pos[2]],30,J.accent,3.5,1.1,0.45,1.5),this.waves.push({p:[J.pos[0],J.pos[1]+0.06,J.pos[2]],t0:this.time,dur:1.1,size:11,color:[K[0],K[1],K[2],1]}),this.camShake=Math.min(0.8,this.camShake+(this.lessMotion?0.1:0.4)),this.shakeNear(J.pos,6)});break}case"combo":{let J=this.monsters.get($.playerId);if(!J)break;let K=J.pos[1]+J.height*J.scale+0.6;this.burst([J.pos[0],K,J.pos[2]],26+$.count*8,[1,0.35,0.35],3.5,1.2,0.5,-1),this.burst([J.pos[0],K,J.pos[2]],10+$.count*4,[0.85,0.9,1],2.5,0.9,0.35,-1);break}case"buy":{let J=this.districts[$.district],K=this.monsters.get($.playerId);if(J){let G=J.stall;if(this.burst([G[0],1.6,G[2]],18,[0.5,0.85,1],2,0.9,0.35,-1),K)for(let W=0;W<4;W++)this.flyers.push({p0:[G[0],1.4,G[2]],target:$.playerId,t0:Z+W*0.07,dur:0.75,color:[0.55,0.85,1],size:0.75,lift:1.8})}break}case"news":{for(let J=0;J<5;J++)this.later(J*0.12,()=>this.burst([0,n$+0.6,0],26,Z0[J],4.5,1.6,0.45,-3));break}case"win":for(let J of $.playerIds){let K=this.monsters.get(J);if(!K)continue;if(!this.lessMotion)this.focusOn(K.pos,1.5,0);for(let G=0;G<6;G++)this.later(G*0.3,()=>{let W=w$(["#ff3d7f","#ffd23f","#2ee59d","#74f0ff","#a855f7","#ff8a3d"][G]);this.burst([K.pos[0]+(Math.random()-0.5)*6,6+Math.random()*3,K.pos[2]+(Math.random()-0.5)*6],70,W,7,1.6,0.6,-3)})}break}}pendingKo=new Set;focusOn($,Z,J){this.focus={p:[$[0],Z,$[2]],t0:this.time+J}}colorsOf($){return $&&this.colors.get($)||_6}collect($,Z,J){let K=this.time,G=this.monsters.get($);if(!G)return;if(Z<0){J.forEach((V,H)=>{let X=H/Math.max(1,J.length)*G$;this.ghosts.push({face:V,bonus:!0,p0:[G.pos[0]+Math.cos(X)*1.1,G.pos[1]+G.height*G.scale+1.1,G.pos[2]+Math.sin(X)*1.1],q0:v.euler(Math.random()*3,Math.random()*3,0),t0:K+H*0.08,hover:0.45,dur:0.5,target:$,axis:[0,1,0],turns:1.5,pop:!0})});return}let W=this.districts[Z];if(!W)return;W.lastCollect=K;for(let V=0;V<J.length;V++){let H=V<W.dice.length&&V<J.length-1,X=W.dice[Math.min(V,W.dice.length-1)];if(this.ghosts.push({face:J[V],bonus:!H,p0:H?[...X.rest]:[W.centre[0]-W.er[0]*1.2,0.6,W.centre[2]-W.er[2]*1.2],q0:[...d0[z0[J[V]]]],t0:K+(H?V*0.08:0.3),hover:H?0:0.2,dur:0.62,target:$,axis:R0([Math.random()-0.5,0.4,Math.random()-0.5]),turns:1+Math.random(),pop:!H}),H)X.t0=K+0.9,X.fromH=6.5,X.turns=2}}later($,Z){this.timers.push({at:this.time+$,fn:Z})}burst($,Z,J,K,G,W,V){let H=this.quality==="high"?O0:O0/2;for(let X=0;X<Z;X++){let Q=Math.random()*Math.PI*2,B=Math.acos(Math.random()*2-1),F=K*(0.4+Math.random()*0.6),M={p:[$[0],$[1],$[2]],v:[Math.sin(B)*Math.cos(Q)*F,Math.abs(Math.cos(B))*F*0.8+(V>0?F*0.3:0),Math.sin(B)*Math.sin(Q)*F],c:[J[0]*(0.8+Math.random()*0.2),J[1]*(0.8+Math.random()*0.2),J[2]*(0.8+Math.random()*0.2)],life:G*(0.6+Math.random()*0.4),max:G,size:W*(0.6+Math.random()*0.8),grav:V};if(this.particles.length>=H)this.particles[Math.floor(Math.random()*this.particles.length)]=M;else this.particles.push(M)}}shakeNear($,Z){for(let J of this.buildings)if(Math.hypot(J.x-$[0],J.z-$[2])<Z)J.shakeT=this.time,this.buildingsDirty=!0;for(let J of this.cottages)if(Math.hypot(J.x-$[0],J.z-$[2])<Z)J.shakeT=this.time,this.housesDirty=!0}resize($,Z,J){this.width=$,this.height=Z,this.dpr=J;let K=Math.max(1,Math.floor($*J)),G=Math.max(1,Math.floor(Z*J));if(this.canvas.width===K&&this.canvas.height===G&&(this.pipe||this.direct))return;this.canvas.width=K,this.canvas.height=G,this.rebuildTargets()}touch(){this.yaw+=this.drift[0],this.pitch=p(this.pitch+this.drift[1],0.35,1.35),this.drift=[0,0],this.lastInput=this.time,this.pitchAuto=!1}orbit($,Z){this.touch(),this.yaw-=$*0.008,this.pitch=p(this.pitch+Z*0.006,0.35,1.35)}zoom($){this.touch(),this.zoomK=p(this.zoomK*$,0.45,1.5)}rayAt($,Z){let J=$/this.width*2-1,K=1-Z/this.height*2,G=y.transformPoint(this.invViewProj,[J,K,-1]),W=y.transformPoint(this.invViewProj,[J,K,1]),V=[G[0]/G[3],G[1]/G[3],G[2]/G[3]],H=[W[0]/W[3],W[1]/W[3],W[2]/W[3]];return{o:V,d:R0([H[0]-V[0],H[1]-V[1],H[2]-V[2]])}}pickDistrict($,Z){let J=this.districts.length;if(!J)return-1;let{o:K,d:G}=this.rayAt($,Z);if(Math.abs(G[1])<0.0001)return-1;for(let W of[2,1,0]){let V=(W-K[1])/G[1];if(V<=0)continue;let H=K[0]+G[0]*V,X=K[2]+G[2]*V,Q=Math.hypot(H,X),B=W>0?h$-1.3:w.ringIn-0.3,F=w.ringOut+(W>0?0.2:0.6);if(Q<B||Q>F)continue;let M=Math.atan2(H,-X);if(M<0)M+=G$;return Math.min(J-1,Math.floor(M/(G$/J)))}return-1}pickMonster($,Z){let{o:J,d:K}=this.rayAt($,Z),G=null,W=1/0;for(let V of this.monsters.values()){let H=V.height*V.scale,X=x6(J,K,[V.pos[0],V.pos[1]+H*0.5,V.pos[2]],Math.max(0.8,H*0.55));if(X!==null&&X<W)W=X,G=V.id}return G}start(){let $=(Z)=>{this.raf=requestAnimationFrame($);let J=Z/1000,K=this.last?J-this.last:0.016666666666666666,G=Math.min(0.05,K);this.last=J,this.time+=G,this.adaptResolution(K),this.update(G),this.render()};this.raf=requestAnimationFrame($)}adaptResolution($){if($>0.5)return;if(this.frameEma=this.frameEma*0.92+$*0.08,this.direct||this.time-this.lastScaleCheck<1.5)return;this.lastScaleCheck=this.time;let Z=0.5,J=this.quality==="high"?1:Math.min(1,1.3/Math.max(1,this.dpr)),K=this.renderScale;if(this.frameEma>0.02631578947368421)K=Math.max(Z,this.renderScale*0.85);else if(this.frameEma<0.01818181818181818)K=Math.min(J,this.renderScale*1.12);if(Math.abs(K-this.renderScale)>0.01)this.renderScale=K,this.rebuildTargets()}update($){let Z=this.time;for(let X=this.timers.length-1;X>=0;X--)if(this.timers[X].at<=Z){let{fn:Q}=this.timers[X];this.timers[X]=this.timers[this.timers.length-1],this.timers.pop(),Q()}let J=this.yaw+this.drift[0];for(let X of this.monsters.values()){let Q=p((Z-X.moveT0)/X.moveDur,0,1),B=c$(Q),F=Q<1?Math.sin(Q*Math.PI)*X.arc:0;if(X.pos[0]=Z$(X.from[0],X.to[0],B),X.pos[1]=Z$(X.from[1],X.to[1],B)+F,X.pos[2]=Z$(X.from[2],X.to[2],B),Q>=1&&!X.landed){if(X.landed=!0,X.arc>1)this.burst([X.to[0],X.to[1]+0.1,X.to[2]],22,[0.6,0.55,0.7],2.8,0.8,0.55,-2),this.camShake=Math.min(0.7,this.camShake+(this.lessMotion?0.05:0.12+X.flips*0.1)),this.shakeNear(X.to,4),this.waves.push({p:[X.to[0],X.to[1]+0.06,X.to[2]],t0:Z,dur:0.8,size:5.5,color:[X.accent[0],X.accent[1],X.accent[2],0.9]})}X.scale+=(X.scaleTo-X.scale)*Math.min(1,$*5),X.lie+=(X.lieTo-X.lie)*Math.min(1,$*(X.lieTo>X.lie?6:3));let P=Math.atan2(-X.pos[0],-X.pos[2])-J;while(P>Math.PI)P-=G$;while(P<-Math.PI)P+=G$;let U=J+p(P,-0.5,0.5)*0.5;if(Q<1&&Math.hypot(X.to[0]-X.from[0],X.to[2]-X.from[2])>0.5)U=Math.atan2(X.to[0]-X.from[0],X.to[2]-X.from[2]);if(Z-X.lungeT<0.7)U=Math.atan2(X.lungeDir[0],X.lungeDir[2]);let q=U-X.yaw;while(q>Math.PI)q-=G$;while(q<-Math.PI)q+=G$;X.yaw+=q*Math.min(1,$*6)}let K=Math.min(1,$*8);for(let X=0;X<this.districts.length;X++){let Q=this.districts[X];Q.flash=Math.max(0,Q.flash-$*1.2),Q.hl[0]+=((this.canStep?1:0)-Q.hl[0])*K,Q.hl[1]+=((this.canStep&&this.selected===X?1:0)-Q.hl[1])*K,Q.hl[2]+=((this.canStep&&this.hover===X?1:0)-Q.hl[2])*K}for(let X=this.ghosts.length-1;X>=0;X--){let Q=this.ghosts[X];if(Z-Q.t0-Q.hover<Q.dur)continue;let B=this.monsters.get(Q.target);if(B)this.burst([B.pos[0],B.pos[1]+B.height*B.scale*0.5,B.pos[2]],10,U6[Q.face],2,0.6,0.35,-2);this.ghosts[X]=this.ghosts[this.ghosts.length-1],this.ghosts.pop()}for(let X=this.flyers.length-1;X>=0;X--){let Q=this.flyers[X];if(Z-Q.t0<Q.dur)continue;let B=this.monsters.get(Q.target);if(B)this.burst([B.pos[0],B.pos[1]+B.height*B.scale*0.8,B.pos[2]],6,Q.color,1.6,0.6,0.35,-1);this.flyers[X]=this.flyers[this.flyers.length-1],this.flyers.pop()}for(let X=this.particles.length-1;X>=0;X--){let Q=this.particles[X];if(Q.life-=$,Q.life<=0){this.particles[X]=this.particles[this.particles.length-1],this.particles.pop();continue}Q.v[1]+=Q.grav*$,Q.v[0]*=1-$*1.5,Q.v[2]*=1-$*1.5,Q.p[0]+=Q.v[0]*$,Q.p[1]=Math.max(0.05,Q.p[1]+Q.v[1]*$),Q.p[2]+=Q.v[2]*$}let G=0;for(let X=0;X<this.bolts.length;X++)if(Z-this.bolts[X].t0<0.55)this.bolts[G++]=this.bolts[X];this.bolts.length=G,G=0;for(let X=0;X<this.waves.length;X++)if(Z-this.waves[X].t0<this.waves[X].dur)this.waves[G++]=this.waves[X];if(this.waves.length=G,this.camShake=Math.max(0,this.camShake-$*1.8),this.hit=Math.max(0,this.hit-$*2.2),this.focus&&Z-this.focus.t0>2.2)this.focus=null;let W=this.insets,V=this.insetsTo,H=Math.min(1,$*4);W.top+=(V.top-W.top)*H,W.right+=(V.right-W.right)*H,W.bottom+=(V.bottom-W.bottom)*H,W.left+=(V.left-W.left)*H}setCommon($,Z=!0){$.vec3("uSunDir",l$),$.vec3("uSunColor",C6),$.vec3("uSkyColor",O6),$.vec3("uGroundColor",L6),$.vec3("uFogColor",D6),$.float("uFogDensity",0.011),$.float("uTime",this.time),$.mat4("uShadowVP",this.lightVP),$.float("uShadowOn",Z&&this.shadowActive?1:0),$.float("uShadowTexel",1/dJ)}get shadowActive(){return this.quality==="high"&&!!this.shadow&&!this.direct}computeCamera(){let $=Math.max(1,this.width),Z=Math.max(1,this.height),J=$/Z;if(this.pitchAuto)this.pitch=J<0.8?1.05:0.7;let K=p(2*Math.atan(Math.tan(21*Math.PI/180)/J),46*Math.PI/180,72*Math.PI/180),G=1/Math.tan(K/2),W=G/J,V=G,H=this.camShake*this.camShake,X=this.time-this.lastInput;if(!this.lessMotion){let t=p((X-4)/4,0,1);this.drift=[Math.sin(this.time*0.11)*0.09*t,Math.sin(this.time*0.083+1)*0.03*t]}else this.drift=[0,0];let Q=this.yaw+this.drift[0],B=p(this.pitch+this.drift[1],0.35,1.35),F=this.insets,M=F.left+6,P=$-F.right-6,U=F.top+22,q=Z-F.bottom-18;if(P-M<$*0.3)M=0,P=$;if(q-U<Z*0.3)U=0,q=Z;let D=M/$*2-1,Y=P/$*2-1,N=1-q/Z*2,L=1-U/Z*2,C=(Y-D)/2,A=(L-N)/2,R=Math.cos(B),j=-Math.sin(Q)*R,E=-Math.sin(B),k=-Math.cos(Q)*R,z=Math.cos(Q),r=-Math.sin(Q),n=-r*E,_=r*j-z*k,I=z*E,o=this.camTarget;S.set(o,0,0.8,-1.3);let W$=this.fitPoints,M$=this.fitProj,K$=W$.length/3;for(let t=0;t<K$;t++){let V$=W$[t*3]-o[0],X0=W$[t*3+1]-o[1],X$=W$[t*3+2]-o[2];M$[t*3]=V$*z+X$*r,M$[t*3+1]=V$*n+X0*_+X$*I,M$[t*3+2]=V$*j+X0*E+X$*k}let a=this.fitExt,D$=6,P$=260;if(K$){for(let t=0;t<18;t++){let V$=(D$+P$)/2;if(this.fitExtent(V$,K$,W,V,C,A))P$=V$;else D$=V$}this.fitExtent(P$,K$,W,V,C,A)}else a[0]=a[2]=-1,a[1]=a[3]=1;let j$=P$,d$=(D+Y)/2-(a[0]+a[1])/2,R$=(N+L)/2-(a[2]+a[3])/2,C$=j$*this.zoomK,m$=Math.sin(this.time*47)*H*0.3,E$=Math.sin(this.time*53)*H*0.3,A$=o[0]+m$,S$=o[1]+E$,k$=o[2];if(this.focus){let t=p((this.time-this.focus.t0)/2.2,0,1),V$=t>0?Math.sin(t*Math.PI)**2*0.28:0;A$=Z$(A$,this.focus.p[0],V$),S$=Z$(S$,this.focus.p[1],V$),k$=Z$(k$,this.focus.p[2],V$),C$*=1-V$*0.3}let T$=this.camPos;T$[0]=A$-j*C$,T$[1]=S$-E*C$,T$[2]=k$-k*C$;let V0=this.v3;S.set(V0,A$,S$,k$),y.perspective(this.proj,K,J,0.5,260),this.proj[8]=-d$,this.proj[9]=-R$,y.lookAt(this.view,T$,V0,h0),y.multiply(this.viewProj,this.proj,this.view),y.invert(this.invViewProj,this.viewProj)}fitExt=[0,0,0,0];rgba($,Z,J,K){let G=this.c4;return G[0]=$,G[1]=Z,G[2]=J,G[3]=K,G}fitExtent($,Z,J,K,G,W){let V=this.fitProj,H=this.fitExt,X=1/0,Q=-1/0,B=1/0,F=-1/0;for(let M=0;M<Z;M++){let P=V[M*3+2]+$;if(P<1)return!1;let U=J*V[M*3]/P,q=K*V[M*3+1]/P;if(U<X)X=U;if(U>Q)Q=U;if(q<B)B=q;if(q>F)F=q}return H[0]=X,H[1]=Q,H[2]=B,H[3]=F,Q-X<=2*G&&F-B<=2*W}uploadInstances(){let $=this.time;if(this.buildingsDirty){let J=!1,K=this.buildingData;this.buildings.forEach((G,W)=>{let V=p(1-($-G.shakeT)/0.5,0,1);if(V>0)J=!0;let H=W*12;K[H]=G.x,K[H+1]=0,K[H+2]=G.z,K[H+3]=0,K[H+4]=G.w,K[H+5]=G.h,K[H+6]=G.d,K[H+7]=G.seed,K[H+8]=G.color[0],K[H+9]=G.color[1],K[H+10]=G.color[2],K[H+11]=V}),this.buildingMesh.setInstances(K),this.buildingsDirty=J}if(this.housesDirty){let J=!1,K=this.houseData;this.cottages.forEach((G,W)=>{let V=p(1-($-G.shakeT)/0.5,0,1);if(V>0)J=!0;K[W*16+11]=V}),this.houseMesh.setInstances(K),this.housesDirty=J}let Z=this.carData;for(let J=0;J<this.cars.length;J++){let K=this.cars[J],G=80,W=((K.phase+$*K.speed*K.dir)%80+80)%80-40,V=K.axis===0?W:K.line+K.lane,H=K.axis===0?K.line+K.lane:W,X=Math.hypot(V,H),Q=Math.abs(V)<w.gateHalfW+1.5&&H<-12&&H>w.gateFarZ-2.5,B=X>17.4&&X<40&&H>w.waterZ+0.6&&!Q?1:0,F=K.axis===0?K.dir>0?Math.PI/2:-Math.PI/2:K.dir>0?0:Math.PI,M=J*8;Z[M]=V,Z[M+1]=0.01,Z[M+2]=H,Z[M+3]=F,Z[M+4]=K.color[0],Z[M+5]=K.color[1],Z[M+6]=K.color[2],Z[M+7]=B}this.carMesh.setInstances(Z)}renderShadowMap(){let $=this.gl,Z=this.shadow,J=this.v0;S.set(J,0,0,-2);let K=this.v1;S.set(K,J[0]+l$[0]*70,J[1]+l$[1]*70,J[2]+l$[2]*70),y.lookAt(this.tmp,K,J,h0),y.ortho(this.tmp2,-C0,C0,-C0,C0,1,150),y.multiply(this.lightVP,this.tmp2,this.tmp),$.activeTexture($.TEXTURE1),$.bindTexture($.TEXTURE_2D,this.dummyShadow.tex),$.activeTexture($.TEXTURE0),$.bindFramebuffer($.FRAMEBUFFER,Z.fb),$.viewport(0,0,Z.size,Z.size),$.disable($.SCISSOR_TEST),$.enable($.DEPTH_TEST),$.depthMask(!0),$.disable($.BLEND),$.clear($.DEPTH_BUFFER_BIT),$.enable($.CULL_FACE),$.cullFace($.FRONT),$.enable($.POLYGON_OFFSET_FILL),$.polygonOffset(1.5,3);let G=this.progs.depthInst.use();G.mat4("uLightVP",this.lightVP),G.float("uTime",this.time),G.float("uShake",0.08),this.buildingMesh.draw(),G.float("uShake",0.06),this.houseMesh.draw(),$.disable($.CULL_FACE),this.progs.depthProp.use().mat4("uLightVP",this.lightVP);for(let H of b0)this.propMeshes[H].draw();$.enable($.CULL_FACE);let V=this.progs.depth.use();V.mat4("uLightVP",this.lightVP);for(let H of this.monsters.values())this.drawMonster(V,H,!0);this.drawDice(V,!0),$.disable($.POLYGON_OFFSET_FILL),$.cullFace($.BACK)}render(){let $=this.gl;if(this.computeCamera(),this.uploadInstances(),this.shadowActive)this.renderShadowMap();$.activeTexture($.TEXTURE1),$.bindTexture($.TEXTURE_2D,this.shadowActive?this.shadow.tex:this.dummyShadow.tex),$.activeTexture($.TEXTURE0);let Z=this.direct?null:this.pipe,J=this.canvas.height;if(Z)$.bindFramebuffer($.FRAMEBUFFER,Z.ms?Z.ms.fb:Z.scene.fb),$.viewport(0,0,Z.scene.w,Z.scene.h),J=Z.scene.h;else $.bindFramebuffer($.FRAMEBUFFER,null),$.viewport(0,0,this.canvas.width,this.canvas.height);$.disable($.SCISSOR_TEST),$.clearColor(0.07,0.05,0.14,1),$.clear($.COLOR_BUFFER_BIT|$.DEPTH_BUFFER_BIT),$.enable($.DEPTH_TEST),$.enable($.CULL_FACE),$.cullFace($.BACK),$.disable($.BLEND),$.depthMask(!1);let K=this.progs.sky.use();K.mat4("uInvViewProj",this.invViewProj),K.vec3("uSunDir",l$),K.float("uTime",this.time),$.bindVertexArray(this.emptyVao),$.drawArrays($.TRIANGLES,0,3),$.depthMask(!0);let G=this.progs.obj.use();this.setCommon(G),G.mat4("uViewProj",this.viewProj),G.vec3("uCamPos",this.camPos),G.float("uAlpha",1),G.float("uFlash",0),G.float("uRim",0),G.vec3("uEmissive",j6);let W=this.districts.length;this.dCol.fill(0),this.dState.fill(0);for(let P=0;P<W;P++){let U=this.districts[P];this.dCol.set(U.color,P*3),this.dState[P*4]=U.hl[0],this.dState[P*4+1]=U.hl[1],this.dState[P*4+2]=U.hl[2],this.dState[P*4+3]=U.flash}G.int("uMode",1),G.int("uCount",Math.max(1,W)),G.vec3s("uDCol",this.dCol),G.vec4s("uDState",this.dState),G.vec3("uColor",h6),G.mat4("uModel",z6),this.meshes.ground.draw(),G.int("uMode",2),G.mat4("uModel",y6),this.meshes.water.draw();let V=this.progs.bld.use();this.setCommon(V),V.mat4("uViewProj",this.viewProj),V.vec3("uCamPos",this.camPos),this.buildingMesh.draw();let H=this.progs.house.use();this.setCommon(H),H.mat4("uViewProj",this.viewProj),H.vec3("uCamPos",this.camPos),this.houseMesh.draw();let X=this.progs.prop.use();this.setCommon(X),X.mat4("uViewProj",this.viewProj),X.vec3("uCamPos",this.camPos);for(let P of b0)this.propMeshes[P].draw();let Q=this.progs.car.use();this.setCommon(Q),Q.mat4("uViewProj",this.viewProj),Q.vec3("uCamPos",this.camPos),this.carMesh.draw();let B=this.progs.dice.use();this.setCommon(B),B.mat4("uViewProj",this.viewProj),B.vec3("uCamPos",this.camPos),B.float("uAlpha",1),this.drawDice(B,!1),G.use(),this.drawBanners(G),G.int("uMode",0);for(let P of this.monsters.values())this.drawMonster(G,P,!1);this.drawCots(G),$.enable($.BLEND),$.blendFunc($.SRC_ALPHA,$.ONE_MINUS_SRC_ALPHA),$.depthMask(!1),$.depthFunc($.GREATER),B.use(),B.float("uAlpha",0.55),this.drawDice(B,!1,!0),B.float("uAlpha",1),$.depthFunc($.LESS),$.depthMask(!0),$.disable($.BLEND),$.enable($.BLEND),$.blendFunc($.ONE,$.ONE_MINUS_SRC_ALPHA),$.depthMask(!1);let F=this.progs.decal.use();F.mat4("uViewProj",this.viewProj),F.float("uTime",this.time);let M=this.shadowActive?0.3:0.5;for(let P of this.monsters.values()){let U=0.02+P.lie*0.31,q=Math.max(0,P.pos[1]-P.to[1]),D=P.height*P.scale;F.int("uMode",0),F.vec4("uColor",this.rgba(0,0,0,p(M-q*0.08,0.1,M)));let Y=Math.max(0.8,(1.7+D*0.4)*P.scale-Math.min(1,q*0.2));if(F.mat4("uModel",y.fromTRS(this.tmp,S.set(this.v0,P.pos[0],U+0.01,P.pos[2]),T,S.set(this.v1,Y,1,Y))),this.meshes.quad.draw(),P.current){F.int("uMode",1),F.vec4("uColor",this.rgba(P.main[0]*1.6,P.main[1]*1.6,P.main[2]*1.6,1));let N=3.1*P.scale;F.mat4("uModel",y.fromTRS(this.tmp,S.set(this.v0,P.pos[0],U+0.03,P.pos[2]),T,S.set(this.v1,N,1,N))),this.meshes.quad.draw()}}F.int("uMode",1);for(let P of this.districts){if(!P.fortified)continue;F.vec4("uColor",this.rgba(0.5,0.8,1.6,0.9)),F.mat4("uModel",y.fromTRS(this.tmp,S.set(this.v0,P.poleTop[0],0.05,P.poleTop[2]),T,S.set(this.v1,2.4,1,2.4))),this.meshes.quad.draw()}F.int("uMode",2);for(let P of this.waves){let U=p((this.time-P.t0)/P.dur,0,1);F.float("uProgress",N0(U)),F.vec4("uColor",this.rgba(P.color[0]*1.5,P.color[1]*1.5,P.color[2]*1.5,P.color[3])),F.mat4("uModel",y.fromTRS(this.tmp,P.p,T,S.set(this.v1,P.size,1,P.size))),this.meshes.quad.draw()}if($.blendFunc($.ONE,$.ONE),$.disable($.CULL_FACE),this.drawBeams(),this.drawBolts(),this.drawParticles(this.viewProj,J),$.enable($.CULL_FACE),$.depthMask(!0),$.disable($.BLEND),this.emitLabels(),Z){if(Z.ms)Z.ms.resolveInto(Z.scene);let P=this.quality==="high";if(P)this.bloom(Z);this.composite(Z,P)}}fullscreen($){let Z=this.gl;if($)Z.bindFramebuffer(Z.FRAMEBUFFER,$.fb),Z.viewport(0,0,$.w,$.h);else Z.bindFramebuffer(Z.FRAMEBUFFER,null),Z.viewport(0,0,this.canvas.width,this.canvas.height);Z.drawArrays(Z.TRIANGLES,0,3)}bloom($){let Z=this.gl;Z.disable(Z.DEPTH_TEST),Z.disable(Z.BLEND),Z.disable(Z.CULL_FACE),Z.disable(Z.SCISSOR_TEST),Z.bindVertexArray(this.emptyVao),Z.activeTexture(Z.TEXTURE0);let J=this.progs.bright.use();J.int("uTex",0),Z.bindTexture(Z.TEXTURE_2D,$.scene.tex),J.vec2("uTexel",1/$.scene.w,1/$.scene.h),J.float("uThreshold",this.fmt.hdr?0.92:0.72),this.fullscreen($.bloomA);let K=this.progs.blur.use();K.int("uTex",0);for(let G=0;G<mJ;G++)Z.bindTexture(Z.TEXTURE_2D,$.bloomA.tex),K.vec2("uDir",1/$.bloomA.w,0),this.fullscreen($.bloomB),Z.bindTexture(Z.TEXTURE_2D,$.bloomB.tex),K.vec2("uDir",0,1/$.bloomA.h),this.fullscreen($.bloomA);J.use(),Z.bindTexture(Z.TEXTURE_2D,$.bloomA.tex),J.vec2("uTexel",1/$.bloomA.w,1/$.bloomA.h),J.float("uThreshold",-1),this.fullscreen($.bloomC),K.use();for(let G=0;G<mJ;G++)Z.bindTexture(Z.TEXTURE_2D,$.bloomC.tex),K.vec2("uDir",1/$.bloomC.w,0),this.fullscreen($.bloomD),Z.bindTexture(Z.TEXTURE_2D,$.bloomD.tex),K.vec2("uDir",0,1/$.bloomC.h),this.fullscreen($.bloomC)}composite($,Z){let J=this.gl;J.disable(J.DEPTH_TEST),J.disable(J.BLEND),J.disable(J.CULL_FACE),J.disable(J.SCISSOR_TEST),J.bindVertexArray(this.emptyVao);let K=this.progs.composite.use();J.activeTexture(J.TEXTURE0),J.bindTexture(J.TEXTURE_2D,$.scene.tex),J.activeTexture(J.TEXTURE2),J.bindTexture(J.TEXTURE_2D,$.bloomA.tex),J.activeTexture(J.TEXTURE3),J.bindTexture(J.TEXTURE_2D,$.bloomC.tex),J.activeTexture(J.TEXTURE0),K.vec2("uTexel",1/$.scene.w,1/$.scene.h),K.vec2("uRes",this.canvas.width,this.canvas.height),K.float("uBloom",Z?1:0),K.float("uHit",this.hit),K.float("uTime",this.time),this.fullscreen(null),J.enable(J.DEPTH_TEST)}drawMonster($,Z,J){let K=this.time,G=Z.lie<0.5,W=p((K-Z.moveT0)/Z.moveDur,0,1),V=W<1&&Z.flips>0,H=G?Math.sin(K*2.4+Z.seed)*0.03:0,X=G&&Z.current&&W>=1?Math.abs(Math.sin(K*5+Z.seed))*0.1:0,Q=p((K-Z.lungeT)/0.6,0,1),B=Q<1?Math.sin(Q*Math.PI)*0.9:0,F=p(1-(K-Z.flashT)/0.45,0,1)*(K>=Z.flashT?1:0),M=F*Math.sin(K*70)*0.1,P=Z.scale,U=S.set(this.v0,Z.pos[0]+Z.lungeDir[0]*B+M,Z.pos[1]+X,Z.pos[2]+Z.lungeDir[2]*B);v.setAxisAngle(this.q0,0,1,0,Z.yaw);let q=-Z.lie*1.45-(V?c$(W)*Z.flips*G$:0);v.setAxisAngle(this.q1,1,0,0,q),v.mulInto(this.q0,this.q0,this.q1);let D=1+H,Y=y.fromTRS(this.tmp2,U,this.q0,S.set(this.v1,P/Math.sqrt(D),P*D,P/Math.sqrt(D))),N=Z.lie*0.6;if(!J)$.float("uRim",G?0.55:0.1),$.float("uFlash",F*0.7);let L=Math.sin(K*3+Z.seed)*0.25+(Q<1?Math.sin(Q*Math.PI)*1.2:0),C=Math.sin(K*1.7+Z.seed)*0.04;for(let A=0;A<Z.parts.length;A++){let R=Z.parts[A],j=G?R.anim:void 0,E=Z.partQ[A],k=R.pos;if(j==="armL"||j==="armR")v.setAxisAngle(this.q2,1,0,0,j==="armL"?-L:L),E=v.mulInto(this.q1,this.q2,E);else if(j==="tail")v.setAxisAngle(this.q2,0,1,0,Math.sin(K*2.2+Z.seed)*0.35),E=v.mulInto(this.q1,this.q2,E);else if(j==="wingL"||j==="wingR")v.setAxisAngle(this.q2,0,1,0,(j==="wingL"?1:-1)*Math.sin(K*4+Z.seed)*0.25),E=v.mulInto(this.q1,this.q2,E);else if(j==="head")k=S.set(this.v2,R.pos[0],R.pos[1]+C,R.pos[2]);let z=y.fromTRS(this.tmp3,k,E,R.scale),r=y.multiply(this.tmp,Y,z);if($.mat4("uModel",r),!J){let n=Z.partColor[A],_=this.v3;if(N){let I=(n[0]+n[1]+n[2])/3;S.set(_,Z$(n[0],I*0.6,N),Z$(n[1],I*0.6,N),Z$(n[2],I*0.6,N))}else S.copy(_,n);if($.vec3("uColor",_),R.glow&&G)$.vec3("uEmissive",S.set(this.v2,_[0]*1.6,_[1]*1.6,_[2]*1.6));else $.vec3("uEmissive",S.set(this.v2,0,0,0))}this.meshes[Z.partMesh[A]].draw()}if(!J)$.float("uFlash",0),$.vec3("uEmissive",S.set(this.v2,0,0,0))}drawCots($){$.float("uRim",0),$.vec3("uEmissive",S.set(this.v2,0,0,0));for(let Z of this.monsters.values()){if(Z.lie<0.05||Z.to[1]<0.5)continue;let J=Z.height*Z.scale*0.95+0.35;$.mat4("uModel",y.fromTRS(this.tmp,S.set(this.v0,Z.to[0],0.16,Z.to[2]-J/2+0.25),T,S.set(this.v1,1.25,0.3,J))),$.vec3("uColor",S.set(this.v3,0.84,0.86,0.92)),this.meshes.box.draw(),$.mat4("uModel",y.fromTRS(this.tmp,S.set(this.v0,Z.to[0],0.34,Z.to[2]-J+0.55),T,S.set(this.v1,0.9,0.12,0.45))),$.vec3("uColor",S.set(this.v3,1,1,1)),this.meshes.box.draw()}}drawDice($,Z,J=!1){let K=this.time;for(let G of this.districts)for(let W of G.dice){if(!W.present||K<W.t0)continue;let V=p((K-W.t0)/0.85,0,1);if(J&&V<1)continue;let H=S.copy(this.v0,W.rest),X=W.q;if(V<1){let Q=V<0.45?1-(V/0.45)**2:0,B=V>=0.45?Math.abs(Math.sin((V-0.45)/0.55*Math.PI*2))*(1-V)*0.9:0;H[1]+=W.fromH*Q+B,v.setAxisAngle(this.q1,W.axis[0],W.axis[1],W.axis[2],(1-N0(V))*W.turns*G$),X=v.mulInto(this.q2,this.q1,W.q)}if($.mat4("uModel",y.fromTRS(this.tmp,H,X,S.set(this.v1,e$,e$,e$))),!Z)$.vec3("uBody",S.set(this.v2,0.1,0.1,0.13)),$.float("uBonus",0),$.int("uOnly",V>=0.5?tJ[W.face]:-1);this.meshes.dice.draw()}if(J)return;for(let G of this.ghosts){if(K<G.t0)continue;let W=this.monsters.get(G.target);if(!W)continue;let V=K-G.t0,H=G.pop?p(V/0.16,0,1):1,X=p((V-G.hover)/G.dur,0,1),Q=W.pos[0],B=W.pos[1]+W.height*W.scale*0.5,F=W.pos[2],M=(G.p0[0]+Q)/2,P=Math.max(G.p0[1],B)+2.2,U=(G.p0[2]+F)/2,q=c$(X),D=(1-q)*(1-q),Y=2*(1-q)*q,N=q*q,L=V<G.hover?Math.sin(V*12)*0.08:0;S.set(this.v0,D*G.p0[0]+Y*M+N*Q,D*G.p0[1]+Y*P+N*B+L,D*G.p0[2]+Y*U+N*F),v.setAxisAngle(this.q1,G.axis[0],G.axis[1],G.axis[2],(V*1.5+q*G.turns)*G$*0.5),v.mulInto(this.q2,this.q1,G.q0);let C=e$*H*(X>0.7?Z$(1,0.3,(X-0.7)/0.3):1)*(G.pop?0.85:1);if($.mat4("uModel",y.fromTRS(this.tmp,this.v0,this.q2,S.set(this.v1,C,C,C))),!Z)$.vec3("uBody",G.bonus?S.set(this.v2,0.24,0.12,0.46):S.set(this.v2,0.1,0.1,0.13)),$.float("uBonus",G.bonus?0.6:0),$.int("uOnly",-1);this.meshes.dice.draw()}}drawBanners($){let Z=this.gl,J=this.time;Z.disable(Z.CULL_FACE),$.int("uMode",4),$.float("uRim",0.15);let K=this.yaw+this.drift[0];for(let G=0;G<this.districts.length;G++){let W=this.districts[G],V=1,H=this.colorsOf(W.owner),X=J-W.flagT0;if(X<1.3){if(X<0.45)V=1-c$(X/0.45)*0.82;else if(X<0.65)V=0.18;else V=0.18+N0((X-0.65)/0.65)*0.82;H=X<0.55?W.flagFrom:W.flagTo}let Q=W.poleTop,B=D0+0.95+(L0-1.75)*V;v.setAxisAngle(this.q0,0,1,0,K+Math.sin(J*0.6+G*1.7)*0.2),$.mat4("uModel",y.fromTRS(this.tmp,S.set(this.v0,Q[0],B,Q[2]),this.q0,S.set(this.v1,2.6,1.55,1)));let F=H[0]===A0;$.vec3("uColor",H[0]),$.vec3("uGlow",F?v6:H[1]),$.float("uSeed",G*2.3),$.float("uWave",F?0.35:1);let M=0.12+W.flash*0.8;$.vec3("uEmissive",S.set(this.v2,H[0][0]*M,H[0][1]*M,H[0][2]*M)),this.meshes.cloth.draw()}$.vec3("uEmissive",S.set(this.v2,0,0,0)),$.float("uRim",0),Z.enable(Z.CULL_FACE)}drawBeams(){let $=this.progs.beam.use();$.mat4("uViewProj",this.viewProj),$.vec3("uCamPos",this.camPos);let Z=this.time;for(let J=0;J<gJ.length;J++){let K=gJ[J],G=K.a0+Z*K.speed+Math.sin(Z*0.3+J)*0.6,W=1.05+0.22*Math.sin(Z*0.4+J*1.7),V=S.set(this.v0,Math.cos(W)*Math.cos(G),Math.sin(W),Math.cos(W)*Math.sin(G)),H=MJ(this.q0,h0,V);$.mat4("uModel",y.fromTRS(this.tmp,K.p,H,R6)),$.vec3("uColor",K.color),$.float("uIntensity",this.quality==="high"?0.26:0.2),this.meshes.beam.draw()}for(let J of this.districts){if(J.hl[1]<0.02)continue;let K=0.85+0.15*Math.sin(Z*4);$.mat4("uModel",y.fromTRS(this.tmp,S.set(this.v0,J.centre[0],0.05,J.centre[2]),T,S.set(this.v1,1.5,9,1.5))),$.vec3("uColor",S.set(this.v2,1,0.85,0.5)),$.float("uIntensity",0.7*J.hl[1]*K),this.meshes.beam.draw()}}drawBolts(){let $=this.gl;if(!this.bolts.length)return;let Z=this.boltData,J=14,K=this.time,G=Math.floor(K*18),W=this.progs.bolt.use();W.mat4("uViewProj",this.viewProj),$.bindVertexArray(this.boltVao),$.bindBuffer($.ARRAY_BUFFER,this.boltBuf);for(let V of this.bolts){let H=K-V.t0;if(H<0)continue;let X=p(H/0.1,0,1),Q=H<0.1?1:p(1-(H-0.1)/0.45,0,1),B=V.b[0]-V.a[0],F=V.b[1]-V.a[1],M=V.b[2]-V.a[2],P=Math.hypot(B,F,M)||1,U=[B/P,F/P,M/P],q=Math.abs(U[1])>0.9?[1,0,0]:[0,1,0],D=R0(n0(U,q)),Y=n0(D,U),N=[];for(let j=0;j<=J;j++){let E=j/J*X,k=Math.sin(Math.PI*(j/J)),z=(c(V.seed+j*7.1+G*3.3)-0.5)*0.8*k,r=(c(V.seed+j*3.7+G*5.9)-0.5)*0.8*k,n=Math.sin(Math.PI*E)*P*0.12;N.push([V.a[0]+B*E+D[0]*z+Y[0]*r,V.a[1]+F*E+D[1]*z+Y[1]*r+n,V.a[2]+M*E+D[2]*z+Y[2]*r])}let L=0,C=0.24,A=(j)=>{let E=N[j],k=N[Math.max(0,j-1)],z=N[Math.min(J,j+1)],r=[z[0]-k[0],z[1]-k[1],z[2]-k[2]],n=[this.camPos[0]-E[0],this.camPos[1]-E[1],this.camPos[2]-E[2]],_=R0(n0(r,n));return[_[0]*C,_[1]*C,_[2]*C]},R=(j,E,k,z)=>{Z[L++]=j[0]+E[0]*k,Z[L++]=j[1]+E[1]*k,Z[L++]=j[2]+E[2]*k,Z[L++]=k,Z[L++]=z,Z[L++]=Q};for(let j=0;j<J;j++){let E=A(j),k=A(j+1);R(N[j],E,-1,j/J),R(N[j],E,1,j/J),R(N[j+1],k,1,(j+1)/J),R(N[j],E,-1,j/J),R(N[j+1],k,1,(j+1)/J),R(N[j+1],k,-1,(j+1)/J)}$.bufferSubData($.ARRAY_BUFFER,0,Z,0,L),W.vec3("uColor",V.color),$.drawArrays($.TRIANGLES,0,L/6)}$.bindVertexArray(null)}drawParticles($,Z){let J=this.gl,K=this.particleData,G=this.time,W=0,V=this.lightData;for(let Q=0;Q<this.lightCount;Q++){let B=Q*8,F=W++*8;K[F]=V[B],K[F+1]=V[B+1],K[F+2]=V[B+2],K[F+3]=V[B+3],K[F+4]=V[B+4],K[F+5]=V[B+5],K[F+6]=0.55+0.35*Math.sin(G*2.2+V[B+6]*1.7),K[F+7]=V[B+7]}for(let Q of this.districts){if(!Q.owner&&Q.flash<=0)continue;let B=this.colorsOf(Q.owner)[0],F=W++*8;K[F]=Q.poleTop[0],K[F+1]=Q.poleTop[1]+0.12,K[F+2]=Q.poleTop[2],K[F+3]=B[0],K[F+4]=B[1],K[F+5]=B[2],K[F+6]=0.7+Q.flash*0.3,K[F+7]=1.1+Q.flash*2}for(let Q of this.flyers){let B=G-Q.t0;if(B<0)continue;let F=this.monsters.get(Q.target);if(!F)continue;let M=F.pos[0],P=F.pos[1]+F.height*F.scale*0.8,U=F.pos[2];for(let q=0;q<4&&W<y0+w.maxDistricts+rJ;q++){let D=p((B-q*0.035)/Q.dur,0,1),Y=c$(D),N=Math.sin(D*Math.PI)*Q.lift,L=W++*8;K[L]=Z$(Q.p0[0],M,Y),K[L+1]=Z$(Q.p0[1],P,Y)+N,K[L+2]=Z$(Q.p0[2],U,Y),K[L+3]=Q.color[0],K[L+4]=Q.color[1],K[L+5]=Q.color[2],K[L+6]=1-q*0.22,K[L+7]=Q.size*(1-q*0.2)}}let H=Math.min(this.particles.length,O0);for(let Q=0;Q<H;Q++){let B=this.particles[Q],F=B.life/B.max,M=W++*8;K[M]=B.p[0],K[M+1]=B.p[1],K[M+2]=B.p[2],K[M+3]=B.c[0],K[M+4]=B.c[1],K[M+5]=B.c[2],K[M+6]=Math.min(1,F*1.6),K[M+7]=B.size*(0.5+F*0.5)}if(!W)return;let X=this.progs.part.use();X.mat4("uViewProj",$),X.float("uScale",Z*0.9),X.float("uGain",this.pipe&&this.fmt.hdr?1.6:1),J.bindVertexArray(this.particleVao),J.bindBuffer(J.ARRAY_BUFFER,this.particleBuf),J.bufferSubData(J.ARRAY_BUFFER,0,K,0,W*8),J.drawArrays(J.POINTS,0,W),J.bindVertexArray(null)}gateLabel=null;tentLabel=null;scratchLabel={id:"",kind:"x",x:0,y:0,dx:0,dy:0,bx:0,by:0,bw:0,bh:0,alt:new Float32Array(8),visible:!1};label($,Z){let J=this.labelIndex.get($);if(!J)J={id:$,kind:Z,x:0,y:0,dx:0,dy:-1,bx:0,by:0,bw:0,bh:0,alt:new Float32Array(8),visible:!1},this.labelIndex.set($,J),this.labels.push(J);return J}project($,Z,J,K){let G=this.viewProj,W=G[3]*$+G[7]*Z+G[11]*J+G[15];if(W<=0.1)return K.visible=!1,!1;return K.x=((G[0]*$+G[4]*Z+G[8]*J+G[12])/W*0.5+0.5)*this.width,K.y=(1-((G[1]*$+G[5]*Z+G[9]*J+G[13])/W*0.5+0.5))*this.height,K.visible=!0,!0}emitLabels(){if(!this.onLabels)return;let $=this.scratchLabel;this.project(0,0,0,$);let{x:Z,y:J}=$;for(let V of this.monsters.values()){let H=V.label??=this.label(`m:${V.id}`,"m");if(!this.project(V.pos[0],V.pos[1],V.pos[2],H)){H.visible=!1,H.body=!1;continue}let{x:X,y:Q}=H;this.project(V.pos[0],V.pos[1]+V.height*V.scale+0.25,V.pos[2],$);let B=Math.max(4,Q-$.y);if(H.bw=B*0.85,H.bh=B,H.bx=X-H.bw/2,H.by=$.y,H.body=!0,V.where<0){H.visible=!1;continue}let F=X-Z,M=Q-J,P=Math.hypot(F,M)||1;if(H.dx=F/P,H.dy=M/P>0.45&&Math.hypot(V.pos[0],V.pos[2])>w.plazaR?1:-1,H.dy<0)H.x=$.x,H.y=$.y}let K=G$/Math.max(1,this.districts.length);for(let V=0;V<this.districts.length;V++){let H=this.districts[V],X=H.label??=this.label(`d:${V}`,"d");if(!this.project(H.centre[0],0,H.centre[2],$)){X.visible=!1;continue}let{x:Q,y:B}=$;for(let F=0;F<3;F++){let M=H.angle+(F-1)*K*0.3,P=Math.sin(M),U=-Math.cos(M);this.project(P*(w.ringOut+0.35),0,U*(w.ringOut+0.35),$);let{x:q,y:D}=$;this.project(P*(h$+0.3),3.1,U*(h$+0.3),$);let Y=q-Q,N=D-B,L=Math.hypot(Y,N)||1;Y/=L,N/=L;let C=(q-Q)*Y+(D-B)*N>($.x-Q)*Y+($.y-B)*N,A=C?q:$.x,R=C?D:$.y;if(F===1)X.x=A,X.y=R,X.dx=Y,X.dy=N;else{let j=F===0?0:4;X.alt[j]=A,X.alt[j+1]=R,X.alt[j+2]=Y,X.alt[j+3]=N}}X.visible=!0}let G=this.gateLabel??=this.label("gate","x");this.project(0,6.9,w.gateZ,G);let W=this.tentLabel??=this.label("tent","x");this.project($$[0],3.35,$$[2],W),this.onLabels(this.labels)}dispose(){cancelAnimationFrame(this.raf),this.gl.getExtension("WEBGL_lose_context")?.loseContext()}}function n0($,Z){return[$[1]*Z[2]-$[2]*Z[1],$[2]*Z[0]-$[0]*Z[2],$[0]*Z[1]-$[1]*Z[0]]}function R0($){let Z=Math.hypot($[0],$[1],$[2])||1;return[$[0]/Z,$[1]/Z,$[2]/Z]}var d0=F0.map(($)=>{let Z,J=$[1];if(J>0.99)Z=v.identity();else if(J<-0.99)Z=v.axisAngle([1,0,0],Math.PI);else{let W=[$[1]*0-$[2]*1,$[2]*0-$[0]*0,$[0]*1-$[1]*0],V=1+J,H=Math.hypot(W[0],W[1],W[2],V);Z=[W[0]/H,W[1]/H,W[2]/H,V/H]}let K=v.rotate(Z,M0($)),G=Math.PI-Math.atan2(K[0],K[2]);return v.multiply(v.axisAngle([0,1,0],G),Z)});function x6($,Z,J,K){let G=[$[0]-J[0],$[1]-J[1],$[2]-J[2]],W=G[0]*Z[0]+G[1]*Z[1]+G[2]*Z[2],V=G[0]*G[0]+G[1]*G[1]+G[2]*G[2]-K*K,H=W*W-V;if(H<0)return null;let X=-W-Math.sqrt(H);return X>0?X:null}var o0={w:90,h:30},X7=W0(function({ui:Z}){let J=F$.useRef(null),K=F$.useRef(null),G=F$.useRef(null),W=F$.useRef(null),V=F$.useRef(null),[H,X]=F$.useState(null),Q=F$.useRef(new Map),B=F$.useRef(new Map),F=F$.useRef(new Map),M=F$.useRef(null),P=(N)=>{let L=F.current.get(N);if(!L)L=(C)=>{let A=Q.current,R=A.get(N);if(R&&R!==C)M.current?.unobserve(R);if(C)C.dataset.lid=N,A.set(N,C),M.current?.observe(C);else A.delete(N)},F.current.set(N,L);return L};if(F$.useEffect(()=>{let N=K.current,L=J.current,C;try{C=new i0(N,K0.settings.quality)}catch(O){console.error(O),X(O instanceof Error?O.message:String(O));return}let A=new ResizeObserver((O)=>{for(let h of O){let b=h.target,i=b.dataset.lid;if(i)B.current.set(i,{w:b.offsetWidth,h:b.offsetHeight})}});M.current=A;for(let O of Q.current.values())A.observe(O);let R=1,j=1,E=0,k=0,z=0,r=()=>{let O=L.getBoundingClientRect();R=O.width,j=O.height;let h=Math.min(window.devicePixelRatio||1,O.width<700?1.75:2);C.resize(O.width,O.height,h);let b=G.current?.getBoundingClientRect(),i=W.current?.getBoundingClientRect(),d=V.current?.getBoundingClientRect();E=b?Math.max(0,b.bottom-O.top):0,k=i?Math.max(0,O.bottom-i.top):0;let J$=d&&d.width>0&&d.height>0?Math.max(0,O.right-d.left):0;z=J$,C.setInsets(E,J$,k,0)};r();let n=new ResizeObserver(r);n.observe(L);for(let O of[G.current,W.current,V.current])if(O)n.observe(O);let _=Array.from({length:48},()=>({x:0,y:0,w:0,h:0})),I=Array.from({length:8},()=>({x:0,y:0,w:0,h:0})),o=Array.from({length:8},()=>({x:0,y:0,w:0,h:0})),W$=Array.from({length:8},()=>({x:0,y:0,w:0,h:0})),M$=[],K$=new Map,a=new Map,D$=new WeakMap,P$=[],j$=[],d$=(O,h)=>h.y-O.y,R$=(O,h,b)=>{let i=Math.round(h*4)*65536+Math.round(b*4);if(a.get(O)!==i)a.set(O,i),O.style.transform=`translate3d(${h.toFixed(1)}px, ${b.toFixed(1)}px, 0)`;if(K$.get(O)!==!0)O.style.opacity="1",O.style.visibility="visible",K$.set(O,!0)},C$=(O)=>{if(K$.get(O)!==!1)O.style.opacity="0",O.style.visibility="hidden",K$.set(O,!1)},m$=(O,h,b,i,d,J$)=>{let Y$=0;for(let p$=0;p$<J$;p$++){let I$=d[p$],y$=Math.min(O+b,I$.x+I$.w)-Math.max(O,I$.x),H0=Math.min(h+i,I$.y+I$.h)-Math.max(h,I$.y);if(y$>0&&H0>0)Y$+=y$*H0}return Y$},E$=0,A$=0,S$=0,k$=(O,h,b,i)=>{if(E$>=_.length)return;let d=_[E$++];d.x=O,d.y=h,d.w=b,d.h=i},T$=(O,h,b)=>{if(b>=h.length)return b;let i=h[b];return i.x=O.bx,i.y=O.by,i.w=O.bw,i.h=O.bh,b+1};C.onLabels=(O)=>{let h=Q.current,b=B.current,d=R-z,J$=E+2,Y$=j-k-2;E$=0,A$=0,S$=0,P$.length=0,j$.length=0;for(let x of O){let l=h.get(x.id);if(!l)continue;if(!x.visible){if(C$(l),x.kind==="m"&&x.body)S$=T$(x,o,S$);continue}if(x.kind==="m")P$.push(x),A$=T$(x,I,A$);else if(x.kind==="d")j$.push(x);else{let u=b.get(x.id)??o0,N$=Math.max(4,Math.min(d-u.w-4,x.x-u.w/2)),m=Math.max(J$,Math.min(Y$-u.h,x.y-u.h));R$(l,N$,m),k$(N$,m,u.w,u.h)}}P$.sort(d$);let p$=E$;for(let x=0;x<2;x++){let l=x===1;for(let u=l?P$.length-1:0;l?u>=0:u<P$.length;u+=l?-1:1){let N$=P$[u];if(N$.dy>0!==l)continue;let m=h.get(N$.id),Q$=b.get(N$.id)??o0,x$=Math.max(4,Math.min(d-Q$.w-4,N$.x-Q$.w/2)),O$=l?N$.y+2:N$.y-Q$.h;for(let i$=0;i$<6;i$++){let o$=!1;for(let b$=p$;b$<E$;b$++){let H$=_[b$];if(x$<H$.x+H$.w+2&&x$+Q$.w+2>H$.x&&O$<H$.y+H$.h+1&&O$+Q$.h+1>H$.y)O$=l?H$.y+H$.h+1:H$.y-Q$.h-1,o$=!0}if(!o$)break}O$=Math.max(J$,Math.min(Y$-Q$.h,O$)),R$(m,x$,O$),k$(x$,O$,Q$.w,Q$.h)}}let I$=E$,y$=Math.min(j$.length,W$.length),H0=(x,l)=>{let u=j$[x],N$=h.get(u.id),m=b.get(u.id)??o0,Q$=D$.get(N$),x$=Q$!==void 0&&N$.classList.contains("selected"),O$=0,i$=0,o$=0,b$=1/0;for(let q$=0;q$<3;q$++){if(x$&&q$!==Q$)continue;let B0=q$===1?0:4,B6=q$===0?u.x:u.alt[B0],F6=q$===0?u.y:u.alt[B0+1],M6=q$===0?u.dx:u.alt[B0+2],P6=q$===0?u.dy:u.alt[B0+3],JJ=B6-m.w/2+M6*m.w*0.5,ZJ=F6-m.h/2+P6*m.h*0.5,_$=Math.max(4,Math.min(d-m.w-4,JJ)),v$=Math.max(J$,Math.min(Y$-m.h,ZJ)),KJ=0;for(let g$=0;g$<y$;g$++){if(g$===x||l===0&&g$>x)continue;let u$=W$[g$],WJ=Math.min(_$+m.w,u$.x+u$.w)-Math.max(_$,u$.x),VJ=Math.min(v$+m.h,u$.y+u$.h)-Math.max(v$,u$.y);if(WJ>0&&VJ>0)KJ+=WJ*VJ}let GJ=m$(_$,v$,m.w,m.h,_,I$)+KJ*3+m$(_$,v$,m.w,m.h,I,A$)*0.6+m$(_$,v$,m.w,m.h,o,S$)*5+(q$===0?0:m.w*m.h*0.12)+(Q$===void 0||q$===Q$?0:m.w*m.h*0.3)+(Math.abs(_$-JJ)+Math.abs(v$-ZJ))*m.h*0.3;if(GJ<b$)b$=GJ,O$=_$,i$=v$,o$=q$}let H$=W$[x];H$.x=O$,H$.y=i$,H$.w=m.w,H$.h=m.h,M$[x]=o$};for(let x=0;x<2;x++)for(let l=0;l<y$;l++)H0(l,x);for(let x=0;x<y$;x++){let l=h.get(j$[x].id),u=W$[x];D$.set(l,M$[x]),R$(l,u.x,u.y),k$(u.x,u.y,u.w,u.h)}};let V0=k0(()=>{let O=Z.state;if(O)C.sync(O,Z.viewId)}),t=k0(()=>C.highlight(Z.canStep,Z.selected)),V$=Z.onEvent((O)=>C.event(O)),X0=k0(()=>{C.setQuality(K0.settings.quality),C.lessMotion=K0.settings.lessMotion}),X$=new Map,w0=0,r$=0,a0=(O)=>{let h=N.getBoundingClientRect();return[O.clientX-h.left,O.clientY-h.top]},t0=(O)=>{if(N.setPointerCapture(O.pointerId),X$.set(O.pointerId,{x:O.clientX,y:O.clientY}),w0=0,X$.size===2){let[h,b]=[...X$.values()];r$=Math.hypot(h.x-b.x,h.y-b.y)}},l0=(O)=>{let h=X$.get(O.pointerId);if(!h){if(O.pointerType==="mouse"){let[d,J$]=a0(O),Y$=C.pickDistrict(d,J$);C.hoverDistrict(Z.canStep?Y$:-1),N.style.cursor=Y$>=0||C.pickMonster(d,J$)?"pointer":""}return}let b=O.clientX-h.x,i=O.clientY-h.y;if(h.x=O.clientX,h.y=O.clientY,w0+=Math.abs(b)+Math.abs(i),X$.size===1)C.orbit(b,i);else if(X$.size===2){let[d,J$]=[...X$.values()],Y$=Math.hypot(d.x-J$.x,d.y-J$.y);if(r$>0)C.zoom(r$/Y$);r$=Y$}},Q0=(O)=>{let h=X$.size===1&&w0<8;if(X$.delete(O.pointerId),X$.size<2)r$=0;if(!h)return;let[b,i]=a0(O),d=C.pickDistrict(b,i);if(Z.canStep&&d>=0)return Z.clickDistrict(d);let J$=C.pickMonster(b,i);if(J$)return Z.open({kind:"player",playerId:J$});if(d>=0)Z.clickDistrict(d)},e0=()=>C.hoverDistrict(-1),$J=(O)=>{O.preventDefault(),C.zoom(Math.exp(O.deltaY*0.001))};return N.addEventListener("pointerdown",t0),N.addEventListener("pointermove",l0),N.addEventListener("pointerup",Q0),N.addEventListener("pointercancel",Q0),N.addEventListener("pointerleave",e0),N.addEventListener("wheel",$J,{passive:!1}),()=>{n.disconnect(),V0(),t(),X0(),V$(),N.removeEventListener("pointerdown",t0),N.removeEventListener("pointermove",l0),N.removeEventListener("pointerup",Q0),N.removeEventListener("pointercancel",Q0),N.removeEventListener("pointerleave",e0),N.removeEventListener("wheel",$J),C.dispose(),A.disconnect(),M.current=null}},[Z]),H)return f("div",{className:"stage3d error3d",children:g("div",{className:"panel",children:[f("h3",{children:"3D-режим недоступен"}),g("p",{className:"muted",children:["Ваш браузер не поддерживает WebGL2 (",H,")."]}),f("button",{className:"btn go",onClick:()=>K0.settings.set("mode","cards"),children:"Перейти в карточный режим"})]})});let{state:U,viewer:q}=Z,D=q&&q.at>=0?s0(U,q.at):null,Y=Z.myTurn&&U.phase==="shop"&&D!==null&&!!q&&q.coins>=D;return g("div",{className:"stage3d",ref:J,children:[f("canvas",{ref:K,className:"gl-canvas"}),g("div",{className:"labels",children:[U.districts.map((N,L)=>f(c6,{ui:Z,index:L,bind:P},L)),U.players.map((N)=>f(n6,{ui:Z,player:N,bind:P},N.id)),f(eJ,{ui:Z,id:"gate",bind:P}),f(eJ,{ui:Z,id:"tent",bind:P})]}),g("div",{className:"hud-top",ref:G,children:[f("div",{className:"hud-news",children:f(Q6,{ui:Z})}),f("div",{className:"hud-order",children:f(V6,{ui:Z,compact:!0})})]}),g("div",{className:"hud-bottom",ref:W,children:[g("div",{className:"hud-haul-row",children:[f("div",{className:"hud-haul",children:f(X6,{ui:Z,compact:!0})}),g("button",{className:"btn gear-btn",onClick:()=>Z.open({kind:"gear"}),title:"Способность, шмотки и прилавок",children:["\uD83C\uDF92 ",f("span",{className:"gear-btn-label",children:"Шмотки"}),Y&&f("span",{className:"badge",children:"\uD83E\uDE99"})]})]}),f("div",{className:"hud-actions",children:f(W6,{ui:Z})})]}),f("aside",{className:"hud-side",ref:V,children:g("section",{className:"log-box",children:[f("div",{className:"section-head",children:f("h4",{children:"Журнал"})}),f(H6,{ui:Z,limit:30})]})})]})}),c6=W0(function({ui:Z,index:J,bind:K}){let G=Z.state,W=G.districts[J];if(!W)return null;let V=E0[W.id],H=W.owner?G.players.find((Y)=>Y.id===W.owner)??null:null,X=W.shop?$6(W.shop.id):null,Q=s0(G,J),B=Z.viewer,F=!!B&&!B.down&&B.at===J,M=Z.canStep,P=M&&Z.selected===J,U=K6(G,J),q=M&&B&&W.owner!==B.id&&G.phase!=="shop"?G6(G,B,J):null,D={"--dc":V.color,...H?G0(H.monster):{}};return g("button",{type:"button",tabIndex:-1,"aria-hidden":!0,className:`dtag3d${M?" can-step":""}${P?" selected":""}${F?" here":""}`,style:D,ref:K(`d:${J}`),onClick:()=>Z.clickDistrict(J),children:[g("span",{className:"dt-name",children:[V.icon," ",V.name," ",g("b",{className:"dt-bonus",children:["+",J6[V.bonus]]})]}),g("span",{className:"dt-row",children:[f("i",{className:`dt-flag${H?"":" neutral"}`,title:H?H.name:"ничьё знамя"}),f("span",{className:"dt-owner",children:H?H.name:"ничьё"}),W.fortified&&f("span",{title:"Знамя не взять до хода хозяина",children:"\uD83D\uDEE1️"}),q!==null?g("span",{className:"dt-cost",title:`Штурм знамени: ${q}⚔️`,children:["\uD83D\uDEA9",q,"⚔️"]}):U&&!M&&f("span",{className:"dt-guard",children:"охрана"}),X&&Q!==null&&g("span",{className:`dt-stall${M&&G.phase==="shop"&&B?B.coins>=Q?" can-buy":" too-dear":""}`,title:`Прилавок: ${X.name}`,"data-stall":J,children:[f("i",{"aria-hidden":!0,children:"\uD83D\uDED2"}),X.icon,Q,"\uD83E\uDE99"]})]}),P&&!(F&&G.phase!=="move")&&g("span",{className:"dt-go",children:["\uD83D\uDC63 ещё раз — ",F?"остаться":"идти"]}),F&&f("span",{className:"dt-here",children:"ты здесь"})]})}),n6=W0(function({ui:Z,player:J,bind:K}){let G=Z.state,W=g0(G),V=Z6(G,J.id).length,H=J.id===W.id&&G.phase!=="gameOver";return g("div",{className:`label3d${H?" current":""}${J.down?" down":""}${J.id===Z.viewId?" me":""}`,style:G0(J.monster),ref:K(`m:${J.id}`),"aria-hidden":!0,children:[f("b",{children:J.name}),g("span",{className:"lt-stats",children:["❤",J.hp," ★",J.vp," \uD83E\uDE99",J.coins," \uD83D\uDCA7",J.mana,V>0&&` \uD83D\uDEA9${V}`]}),f(I0,{ui:Z,playerId:J.id})]})}),eJ=W0(function({ui:Z,id:J,bind:K}){let G=Z.state,W=g0(G),V=G.players.filter((Q)=>Q.at<0&&(J==="tent"?Q.down:!Q.down)),H=V.length>2,X=(Q)=>Q.id===W.id&&G.phase!=="gameOver";return g("div",{className:`place3d${V.length?"":" empty"}`,ref:K(J),"aria-hidden":!0,children:[g("span",{className:"pt-head",children:[J==="gate"?"\uD83D\uDEAA Ворота":"\uD83C\uDFE5 Лазарет",H&&f("span",{className:"pt-crowd",children:V.map((Q)=>f("i",{className:`dt-flag${X(Q)?" current":""}`,style:G0(Q.monster),title:Q.name,children:f(I0,{ui:Z,playerId:Q.id})},Q.id))})]}),!H&&V.map((Q)=>g("span",{className:`pt-who${X(Q)?" current":""}`,style:G0(Q.monster),children:[f("i",{className:"dt-flag"}),Q.name,g("small",{children:[J==="gate"&&`❤${Q.hp} `,"★",Q.vp]}),f(I0,{ui:Z,playerId:Q.id})]},Q.id))]})});export{X7 as default};
