import{c,s,r,C,a,E,o,u,f,i,p,m,l,D,v,A,b,g,d,y,n,e,t,x,B,h,w,k,_,S,F}from"./index-0ea613e7.js";var Ht=(M,R)=>[M[1]*R[2]-M[2]*R[1],M[2]*R[0]-M[0]*R[2],M[0]*R[1]-M[1]*R[0]],qt=(M)=>{let R=Math.hypot(...M)||1;return[M[0]/R,M[1]/R,M[2]/R]},Ft=[[1,0,0],[-1,0,0],[0,1,0],[0,-1,0],[0,0,1],[0,0,-1]];function Lt(M){if(Math.abs(M[1])<0.5)return[0,1,0];return M[1]>0?[0,0,-1]:[0,0,1]}function bo(M=0.18,R=8){let T={positions:[],normals:[],uvs:[],faces:[],indices:[]},P=1-M;return Ft.forEach((L,V)=>{let I=Lt(L),z=Ht(I,L),U=T.positions.length/3;for(let W=0;W<=R;W++)for(let G=0;G<=R;G++){let O=G/R,N=W/R,H=[L[0]+z[0]*(2*O-1)+I[0]*(2*N-1),L[1]+z[1]*(2*O-1)+I[1]*(2*N-1),L[2]+z[2]*(2*O-1)+I[2]*(2*N-1)],q=[Math.max(-P,Math.min(P,H[0])),Math.max(-P,Math.min(P,H[1])),Math.max(-P,Math.min(P,H[2]))],j=[H[0]-q[0],H[1]-q[1],H[2]-q[2]],Y=Math.hypot(...j)>0.000001?qt(j):L;T.positions.push(q[0]+Y[0]*M,q[1]+Y[1]*M,q[2]+Y[2]*M),T.normals.push(...Y),T.uvs.push(O,N),T.faces.push(V)}for(let W=0;W<R;W++)for(let G=0;G<R;G++){let O=U+W*(R+1)+G;T.indices.push(O,O+1,O+R+2,O,O+R+2,O+R+1)}}),T}function yt(M=!1){let R={positions:[],normals:[],uvs:[],indices:[]},T=M?0.5:0;return Ft.forEach((P)=>{let L=Lt(P),V=Ht(L,P),I=R.positions.length/3;for(let[z,U]of[[-1,-1],[1,-1],[1,1],[-1,1]])R.positions.push((P[0]+V[0]*z+L[0]*U)*0.5,(P[1]+V[1]*z+L[1]*U)*0.5+T,(P[2]+V[2]*z+L[2]*U)*0.5),R.normals.push(...P),R.uvs.push((z+1)/2,(U+1)/2);R.indices.push(I,I+1,I+2,I,I+2,I+3)}),R}function jt(M=16,R=24){let T={positions:[],normals:[],uvs:[],indices:[]};for(let P=0;P<=M;P++){let L=P/M*Math.PI;for(let V=0;V<=R;V++){let I=V/R*Math.PI*2,z=Math.sin(L)*Math.cos(I),U=Math.cos(L),W=Math.sin(L)*Math.sin(I);T.positions.push(z*0.5,U*0.5,W*0.5),T.normals.push(z,U,W),T.uvs.push(V/R,P/M)}}for(let P=0;P<M;P++)for(let L=0;L<R;L++){let V=P*(R+1)+L,I=V+R+1;T.indices.push(V,V+1,I,I,V+1,I+1)}return T}function tt(M=0.5,R=0.5,T=20,P=!0){let L={positions:[],normals:[],uvs:[],indices:[]},V=(M-R)/1;for(let I=0;I<=T;I++){let z=I/T*Math.PI*2,U=Math.cos(z),W=Math.sin(z),G=qt([U,V,W]);L.positions.push(U*M,0,W*M,U*R,1,W*R),L.normals.push(...G,...G),L.uvs.push(I/T,0,I/T,1)}for(let I=0;I<T;I++){let z=I*2;L.indices.push(z,z+1,z+3,z,z+3,z+2)}if(P)for(let[I,z,U]of[[0,M,-1],[1,R,1]]){if(z<=0)continue;let W=L.positions.length/3;L.positions.push(0,I,0),L.normals.push(0,U,0),L.uvs.push(0.5,0.5);for(let G=0;G<=T;G++){let O=G/T*Math.PI*2;L.positions.push(Math.cos(O)*z,I,Math.sin(O)*z),L.normals.push(0,U,0),L.uvs.push(0.5+Math.cos(O)/2,0.5+Math.sin(O)/2)}for(let G=0;G<T;G++)if(U>0)L.indices.push(W,W+G+2,W+G+1);else L.indices.push(W,W+G+1,W+G+2)}return L}function kt(M=1,R=1){let T={positions:[],normals:[],uvs:[],indices:[]};for(let P=0;P<=R;P++)for(let L=0;L<=R;L++)T.positions.push((L/R-0.5)*M,0,(P/R-0.5)*M),T.normals.push(0,1,0),T.uvs.push(L/R,P/R);for(let P=0;P<R;P++)for(let L=0;L<R;L++){let V=P*(R+1)+L;T.indices.push(V,V+R+1,V+1,V+1,V+R+1,V+R+2)}return T}function Ie(M,R,T,P,L){let[V,I,z]=R,U=Ht([I[0]-V[0],I[1]-V[1],I[2]-V[2]],[z[0]-V[0],z[1]-V[1],z[2]-V[2]]),W=U[0]*T[0]+U[1]*T[1]+U[2]*T[2]<0,G=M.positions.length/3,O=qt(T);R.forEach((H,q)=>{M.positions.push(H[0],H[1],H[2]),M.normals.push(O[0],O[1],O[2]),M.uvs.push(L[q][0],L[q][1]),M.faces.push(P)});let N=R.length===3?[[0,1,2]]:[[0,1,2],[0,2,3]];for(let[H,q,j]of N)if(W)M.indices.push(G+H,G+j,G+q);else M.indices.push(G+H,G+q,G+j)}var Be=[[0,0],[1,0],[1,1],[0,1]];function yo(M=0.62,R=0.1){let T={positions:[],normals:[],uvs:[],faces:[],indices:[]},P=0.5;Ie(T,[[-0.5,0,0.5],[0.5,0,0.5],[0.5,1,0.5],[-0.5,1,0.5]],[0,0,1],0,Be),Ie(T,[[0.5,0,-0.5],[-0.5,0,-0.5],[-0.5,1,-0.5],[0.5,1,-0.5]],[0,0,-1],0,Be),Ie(T,[[0.5,0,0.5],[0.5,0,-0.5],[0.5,1,-0.5],[0.5,1,0.5]],[1,0,0],0,Be),Ie(T,[[-0.5,0,-0.5],[-0.5,0,0.5],[-0.5,1,0.5],[-0.5,1,-0.5]],[-1,0,0],0,Be);let L=1+M;Ie(T,[[0.5,1,0.5],[0.5,1,-0.5],[0.5,L,0]],[1,0,0],0,[[0,0],[1,0],[0.5,1]]),Ie(T,[[-0.5,1,-0.5],[-0.5,1,0.5],[-0.5,L,0]],[-1,0,0],0,[[0,0],[1,0],[0.5,1]]);let V=0.5+R,I=1-R*(M/0.5),z=0.5+R*0.6;Ie(T,[[-z,I,V],[z,I,V],[z,L,0],[-z,L,0]],[0,0.5,M],1,Be),Ie(T,[[z,I,-V],[-z,I,-V],[-z,L,0],[z,L,0]],[0,0.5,-M],1,Be);let U=0.24,W=-0.2,G=0.075,O=1+M*0.35,N=L+0.14;for(let[H,q]of[[1,0],[-1,0],[0,1],[0,-1]]){let j=q!==0?1:0,Y=H!==0?1:0,Z=U+H*G,J=W+q*G;Ie(T,[[Z-j*G,O,J-Y*G],[Z+j*G,O,J+Y*G],[Z+j*G,N,J+Y*G],[Z-j*G,N,J-Y*G]],[H,0,q],2,Be)}return Ie(T,[[U-G,N,W-G],[U+G,N,W-G],[U+G,N,W+G],[U-G,N,W+G]],[0,1,0],2,Be),T}function xo(M=14,R=6){let T={positions:[],normals:[],uvs:[],indices:[]};for(let P=0;P<=R;P++)for(let L=0;L<=M;L++)T.positions.push(L/M,P/R-0.5,0),T.normals.push(0,0,1),T.uvs.push(L/M,P/R);for(let P=0;P<R;P++)for(let L=0;L<M;L++){let V=P*(M+1)+L;T.indices.push(V,V+1,V+M+2,V,V+M+2,V+M+1)}return T}function wo(){let M={positions:[],normals:[],uvs:[],faces:[],indices:[]},R=0.5;return Ie(M,[[-0.5,0,0.5],[0.5,0,0.5],[0.5,1,0],[-0.5,1,0]],[0,0.5,1],0,Be),Ie(M,[[0.5,0,-0.5],[-0.5,0,-0.5],[-0.5,1,0],[0.5,1,0]],[0,0.5,-1],0,Be),Ie(M,[[0.5,0,0.5],[0.5,0,-0.5],[0.5,1,0]],[1,0,0],0,[[0,0],[1,0],[0.5,1]]),Ie(M,[[-0.5,0,-0.5],[-0.5,0,0.5],[-0.5,1,0]],[-1,0,0],0,[[0,0],[1,0],[0.5,1]]),M}function fo(M){let R=0.5+0.5*Math.cos(Math.PI*M),T=(1-M)**1.6;return R*0.55+T*0.45}function go(M){return 1+0.035*Math.sin(3*M+0.7)+0.022*Math.sin(7*M+2.1)+0.012*Math.sin(13*M+0.4)}function Yt(M,R,T=0){let P=go(T),L=M.peakR,V=M.ledgeIn*P,I=M.ledgeOut*P,z=M.baseR*P;if(R<=L)return M.peakY;if(R<V)return M.ledgeY+(M.peakY-M.ledgeY)*fo((R-L)/(V-L));if(R<=I)return M.ledgeY;if(R<z)return M.ledgeY*(fo((R-I)/(z-I))*0.9+(1-(R-I)/(z-I))*0.1);return-0.25*Math.min(1,(R-z)/0.6)}function Mo(M,R=120){let T={positions:[],normals:[],indices:[]},P=[],L=(U,W,G,O,N=0)=>{for(let H=N;H<G;H++){let q=H/G,j=O===1||O===3?0.5-0.5*Math.cos(Math.PI*q):q;P.push({r:U+(W-U)*j,band:O,t:j})}};L(0,M.peakR,6,0),L(M.peakR,M.ledgeIn,12,1),L(M.ledgeIn,M.ledgeOut,7,2),L(M.ledgeOut,M.baseR,14,3),P.push({r:M.baseR,band:4,t:0},{r:M.baseR+0.3,band:4,t:0.5},{r:M.baseR+0.7,band:4,t:1});let V=R+1;for(let U of P)for(let W=0;W<=R;W++){let G=W/R*Math.PI*2,O=U.band===0?1:go(G),N=U.r*(U.band===0?1:O),H=U.band===4?-0.25*U.t*1.2:Yt(M,N,G);if(U.band===1||U.band===3){let q=Math.sin(Math.PI*U.t)**0.8,j=Math.sin(G*9+U.r*1.7)*0.5+Math.sin(G*17-U.r*2.3+1.3)*0.3+(vo(U.r*31.7+W*7.13)-0.5)*0.6,Y=Math.sin(G*11+U.r*3.1+0.5)*0.5+(vo(U.r*13.1+W*3.77)-0.5)*0.6;N+=j*0.28*q,H+=Y*0.16*q}if(U.band===4)N=U.r*O;T.positions.push(Math.sin(G)*N,H,Math.cos(G)*N)}for(let U=0;U<P.length-1;U++)for(let W=0;W<R;W++){let G=U*V+W,O=G+V;T.indices.push(G,O,G+1,G+1,O,O+1)}let I=new Float32Array(T.positions.length),z=T.positions;for(let U=0;U<T.indices.length;U+=3){let W=T.indices[U]*3,G=T.indices[U+1]*3,O=T.indices[U+2]*3,N=z[G]-z[W],H=z[G+1]-z[W+1],q=z[G+2]-z[W+2],j=z[O]-z[W],Y=z[O+1]-z[W+1],Z=z[O+2]-z[W+2],J=H*Z-q*Y,ae=q*j-N*Z,re=N*Y-H*j;for(let ie of[W,G,O])I[ie]+=J,I[ie+1]+=ae,I[ie+2]+=re}for(let U=0;U<P.length;U++){let W=U*V*3,G=(U*V+R)*3;for(let O=0;O<3;O++){let N=I[W+O]+I[G+O];I[W+O]=N,I[G+O]=N}}for(let U=0;U<I.length;U+=3){let W=Math.hypot(I[U],I[U+1],I[U+2])||1;T.normals.push(I[U]/W,I[U+1]/W,I[U+2]/W)}return T}function vo(M){let R=Math.sin(M*127.1+311.7)*43758.5453;return R-Math.floor(R)}class Le{gl;program;uniforms=new Map;attribs={};constructor(M,R,T){this.gl=M;let P=(I,z)=>{let U=M.createShader(I);if(M.shaderSource(U,z),M.compileShader(U),!M.getShaderParameter(U,M.COMPILE_STATUS)){let W=M.getShaderInfoLog(U),G=z.split(`
`).map((O,N)=>`${N+1}: ${O}`).join(`
`);throw Error(`Shader compile error: ${W}
${G}`)}return U},L=M.createProgram();if(M.attachShader(L,P(M.VERTEX_SHADER,R)),M.attachShader(L,P(M.FRAGMENT_SHADER,T)),M.linkProgram(L),!M.getProgramParameter(L,M.LINK_STATUS))throw Error(`Program link error: ${M.getProgramInfoLog(L)}`);this.program=L;let V=M.getProgramParameter(L,M.ACTIVE_ATTRIBUTES);for(let I=0;I<V;I++){let z=M.getActiveAttrib(L,I);this.attribs[z.name]=M.getAttribLocation(L,z.name)}}use(){return this.gl.useProgram(this.program),this}loc(M){if(!this.uniforms.has(M))this.uniforms.set(M,this.gl.getUniformLocation(this.program,M));return this.uniforms.get(M)}mat4(M,R){this.gl.uniformMatrix4fv(this.loc(M),!1,R)}vec3(M,R){this.gl.uniform3f(this.loc(M),R[0],R[1],R[2])}vec4(M,R){this.gl.uniform4f(this.loc(M),R[0],R[1],R[2],R[3])}vec2(M,R,T){this.gl.uniform2f(this.loc(M),R,T)}float(M,R){this.gl.uniform1f(this.loc(M),R)}int(M,R){this.gl.uniform1i(this.loc(M),R)}ints(M,R){this.gl.uniform1iv(this.loc(M),R)}vec3s(M,R){this.gl.uniform3fv(this.loc(M),R)}vec4s(M,R){this.gl.uniform4fv(this.loc(M),R)}}class Ee{gl;vao;count;instanceBuffer=null;instanceCount=0;instanceStride=0;constructor(M,R,T,P){this.gl=M;this.vao=M.createVertexArray(),M.bindVertexArray(this.vao);let L=(z,U,W)=>{let G=R.attribs[z];if(G===void 0||G<0||!U)return;let O=M.createBuffer();M.bindBuffer(M.ARRAY_BUFFER,O),M.bufferData(M.ARRAY_BUFFER,new Float32Array(U),M.STATIC_DRAW),M.enableVertexAttribArray(G),M.vertexAttribPointer(G,W,M.FLOAT,!1,0,0)};if(L("aPos",T.positions,3),L("aNormal",T.normals,3),L("aUv",T.uvs,2),L("aFace",T.faces,1),P){this.instanceBuffer=M.createBuffer(),M.bindBuffer(M.ARRAY_BUFFER,this.instanceBuffer),this.instanceStride=P.reduce((U,W)=>U+W.size,0);let z=0;for(let U of P){let W=R.attribs[U.name];if(W!==void 0&&W>=0)M.enableVertexAttribArray(W),M.vertexAttribPointer(W,U.size,M.FLOAT,!1,this.instanceStride*4,z*4),M.vertexAttribDivisor(W,1);z+=U.size}}let V=M.createBuffer();M.bindBuffer(M.ELEMENT_ARRAY_BUFFER,V);let I=T.positions.length/3>65535;M.bufferData(M.ELEMENT_ARRAY_BUFFER,I?new Uint32Array(T.indices):new Uint16Array(T.indices),M.STATIC_DRAW),this.indexType=I?M.UNSIGNED_INT:M.UNSIGNED_SHORT,this.count=T.indices.length,M.bindVertexArray(null)}indexType;setInstances(M){let R=this.gl;R.bindBuffer(R.ARRAY_BUFFER,this.instanceBuffer),R.bufferData(R.ARRAY_BUFFER,M,R.DYNAMIC_DRAW),this.instanceCount=M.length/this.instanceStride}draw(){let M=this.gl;if(M.bindVertexArray(this.vao),this.instanceBuffer)M.drawElementsInstanced(M.TRIANGLES,this.count,this.indexType,0,this.instanceCount);else M.drawElements(M.TRIANGLES,this.count,this.indexType,0)}}function To(M){if(M.getExtension("EXT_color_buffer_float"))return{internal:M.RGBA16F,format:M.RGBA,type:M.HALF_FLOAT,hdr:!0};return{internal:M.RGBA8,format:M.RGBA,type:M.UNSIGNED_BYTE,hdr:!1}}class ot{gl;w;h;fb;tex;depth=null;ok;constructor(M,R,T,P,L){this.gl=M;this.w=R;this.h=T;if(this.tex=M.createTexture(),M.bindTexture(M.TEXTURE_2D,this.tex),M.texImage2D(M.TEXTURE_2D,0,P.internal,R,T,0,P.format,P.type,null),M.texParameteri(M.TEXTURE_2D,M.TEXTURE_MIN_FILTER,M.LINEAR),M.texParameteri(M.TEXTURE_2D,M.TEXTURE_MAG_FILTER,M.LINEAR),M.texParameteri(M.TEXTURE_2D,M.TEXTURE_WRAP_S,M.CLAMP_TO_EDGE),M.texParameteri(M.TEXTURE_2D,M.TEXTURE_WRAP_T,M.CLAMP_TO_EDGE),this.fb=M.createFramebuffer(),M.bindFramebuffer(M.FRAMEBUFFER,this.fb),M.framebufferTexture2D(M.FRAMEBUFFER,M.COLOR_ATTACHMENT0,M.TEXTURE_2D,this.tex,0),L)this.depth=M.createRenderbuffer(),M.bindRenderbuffer(M.RENDERBUFFER,this.depth),M.renderbufferStorage(M.RENDERBUFFER,M.DEPTH_COMPONENT24,R,T),M.framebufferRenderbuffer(M.FRAMEBUFFER,M.DEPTH_ATTACHMENT,M.RENDERBUFFER,this.depth);this.ok=M.checkFramebufferStatus(M.FRAMEBUFFER)===M.FRAMEBUFFER_COMPLETE,M.bindFramebuffer(M.FRAMEBUFFER,null),M.bindRenderbuffer(M.RENDERBUFFER,null)}dispose(){let M=this.gl;if(M.deleteFramebuffer(this.fb),M.deleteTexture(this.tex),this.depth)M.deleteRenderbuffer(this.depth)}}class Xt{gl;w;h;samples;fb;color;depth;ok;constructor(M,R,T,P,L){this.gl=M;this.w=R;this.h=T;this.samples=L;this.fb=M.createFramebuffer(),M.bindFramebuffer(M.FRAMEBUFFER,this.fb),this.color=M.createRenderbuffer(),M.bindRenderbuffer(M.RENDERBUFFER,this.color),M.renderbufferStorageMultisample(M.RENDERBUFFER,L,P.internal,R,T),M.framebufferRenderbuffer(M.FRAMEBUFFER,M.COLOR_ATTACHMENT0,M.RENDERBUFFER,this.color),this.depth=M.createRenderbuffer(),M.bindRenderbuffer(M.RENDERBUFFER,this.depth),M.renderbufferStorageMultisample(M.RENDERBUFFER,L,M.DEPTH_COMPONENT24,R,T),M.framebufferRenderbuffer(M.FRAMEBUFFER,M.DEPTH_ATTACHMENT,M.RENDERBUFFER,this.depth),this.ok=M.checkFramebufferStatus(M.FRAMEBUFFER)===M.FRAMEBUFFER_COMPLETE,M.bindFramebuffer(M.FRAMEBUFFER,null),M.bindRenderbuffer(M.RENDERBUFFER,null)}resolveInto(M){let R=this.gl;R.bindFramebuffer(R.READ_FRAMEBUFFER,this.fb),R.bindFramebuffer(R.DRAW_FRAMEBUFFER,M.fb),R.blitFramebuffer(0,0,this.w,this.h,0,0,M.w,M.h,R.COLOR_BUFFER_BIT,R.NEAREST),R.bindFramebuffer(R.READ_FRAMEBUFFER,null),R.bindFramebuffer(R.DRAW_FRAMEBUFFER,null)}dispose(){let M=this.gl;M.deleteFramebuffer(this.fb),M.deleteRenderbuffer(this.color),M.deleteRenderbuffer(this.depth)}}class Ct{gl;size;fb;tex;ok;constructor(M,R){this.gl=M;this.size=R;this.tex=M.createTexture(),M.bindTexture(M.TEXTURE_2D,this.tex),M.texImage2D(M.TEXTURE_2D,0,M.DEPTH_COMPONENT24,R,R,0,M.DEPTH_COMPONENT,M.UNSIGNED_INT,null),M.texParameteri(M.TEXTURE_2D,M.TEXTURE_MIN_FILTER,M.LINEAR),M.texParameteri(M.TEXTURE_2D,M.TEXTURE_MAG_FILTER,M.LINEAR),M.texParameteri(M.TEXTURE_2D,M.TEXTURE_WRAP_S,M.CLAMP_TO_EDGE),M.texParameteri(M.TEXTURE_2D,M.TEXTURE_WRAP_T,M.CLAMP_TO_EDGE),M.texParameteri(M.TEXTURE_2D,M.TEXTURE_COMPARE_MODE,M.COMPARE_REF_TO_TEXTURE),M.texParameteri(M.TEXTURE_2D,M.TEXTURE_COMPARE_FUNC,M.LEQUAL),this.fb=M.createFramebuffer(),M.bindFramebuffer(M.FRAMEBUFFER,this.fb),M.framebufferTexture2D(M.FRAMEBUFFER,M.DEPTH_ATTACHMENT,M.TEXTURE_2D,this.tex,0),M.drawBuffers([M.NONE]),M.readBuffer(M.NONE),this.ok=M.checkFramebufferStatus(M.FRAMEBUFFER)===M.FRAMEBUFFER_COMPLETE,M.bindFramebuffer(M.FRAMEBUFFER,null)}dispose(){this.gl.deleteFramebuffer(this.fb),this.gl.deleteTexture(this.tex)}}var ws=new Float32Array(16),ce={create(){let M=new Float32Array(16);return M[0]=M[5]=M[10]=M[15]=1,M},perspective(M,R,T,P,L){let V=1/Math.tan(R/2);return M.fill(0),M[0]=V/T,M[5]=V,M[10]=(L+P)/(P-L),M[11]=-1,M[14]=2*L*P/(P-L),M},lookAt(M,R,T,P=[0,1,0]){let L=R[0]-T[0],V=R[1]-T[1],I=R[2]-T[2],z=Math.hypot(L,V,I)||1;L/=z,V/=z,I/=z;let U=P[1]*I-P[2]*V,W=P[2]*L-P[0]*I,G=P[0]*V-P[1]*L;z=Math.hypot(U,W,G)||1,U/=z,W/=z,G/=z;let O=V*G-I*W,N=I*U-L*G,H=L*W-V*U;return M[0]=U,M[1]=O,M[2]=L,M[3]=0,M[4]=W,M[5]=N,M[6]=V,M[7]=0,M[8]=G,M[9]=H,M[10]=I,M[11]=0,M[12]=-(U*R[0]+W*R[1]+G*R[2]),M[13]=-(O*R[0]+N*R[1]+H*R[2]),M[14]=-(L*R[0]+V*R[1]+I*R[2]),M[15]=1,M},multiply(M,R,T){let P=ws;for(let L=0;L<4;L++)for(let V=0;V<4;V++)P[L*4+V]=R[V]*T[L*4]+R[4+V]*T[L*4+1]+R[8+V]*T[L*4+2]+R[12+V]*T[L*4+3];return M.set(P),M},ortho(M,R,T,P,L,V,I){return M.fill(0),M[0]=2/(T-R),M[5]=2/(L-P),M[10]=-2/(I-V),M[12]=-(T+R)/(T-R),M[13]=-(L+P)/(L-P),M[14]=-(I+V)/(I-V),M[15]=1,M},fromTRS(M,R,T,P){let[L,V,I,z]=T,U=L+L,W=V+V,G=I+I,O=L*U,N=L*W,H=L*G,q=V*W,j=V*G,Y=I*G,Z=z*U,J=z*W,ae=z*G;return M[0]=(1-(q+Y))*P[0],M[1]=(N+ae)*P[0],M[2]=(H-J)*P[0],M[3]=0,M[4]=(N-ae)*P[1],M[5]=(1-(O+Y))*P[1],M[6]=(j+Z)*P[1],M[7]=0,M[8]=(H+J)*P[2],M[9]=(j-Z)*P[2],M[10]=(1-(O+q))*P[2],M[11]=0,M[12]=R[0],M[13]=R[1],M[14]=R[2],M[15]=1,M},invert(M,R){let[T,P,L,V,I,z,U,W,G,O,N,H,q,j,Y,Z]=R,J=T*z-P*I,ae=T*U-L*I,re=T*W-V*I,ie=P*U-L*z,X=P*W-V*z,se=L*W-V*U,ee=G*j-O*q,le=G*Y-N*q,me=G*Z-H*q,ne=O*Y-N*j,he=O*Z-H*j,ge=N*Z-H*Y,pe=J*ge-ae*he+re*ne+ie*me-X*le+se*ee;if(!pe)return null;return pe=1/pe,M[0]=(z*ge-U*he+W*ne)*pe,M[1]=(L*he-P*ge-V*ne)*pe,M[2]=(j*se-Y*X+Z*ie)*pe,M[3]=(N*X-O*se-H*ie)*pe,M[4]=(U*me-I*ge-W*le)*pe,M[5]=(T*ge-L*me+V*le)*pe,M[6]=(Y*re-q*se-Z*ae)*pe,M[7]=(G*se-N*re+H*ae)*pe,M[8]=(I*he-z*me+W*ee)*pe,M[9]=(P*me-T*he-V*ee)*pe,M[10]=(q*X-j*re+Z*J)*pe,M[11]=(O*re-G*X-H*J)*pe,M[12]=(z*le-I*ne-U*ee)*pe,M[13]=(T*ne-P*le+L*ee)*pe,M[14]=(j*ae-q*ie-Y*J)*pe,M[15]=(G*ie-O*ae+N*J)*pe,M},transformPoint(M,R){let[T,P,L]=R;return[M[0]*T+M[4]*P+M[8]*L+M[12],M[1]*T+M[5]*P+M[9]*L+M[13],M[2]*T+M[6]*P+M[10]*L+M[14],M[3]*T+M[7]*P+M[11]*L+M[15]]}},ue={identity(){return[0,0,0,1]},axisAngle(M,R){let T=Math.hypot(...M)||1,P=Math.sin(R/2)/T;return[M[0]*P,M[1]*P,M[2]*P,Math.cos(R/2)]},multiply(M,R){let[T,P,L,V]=M,[I,z,U,W]=R;return[T*W+V*I+P*U-L*z,P*W+V*z+L*I-T*U,L*W+V*U+T*z-P*I,V*W-T*I-P*z-L*U]},rotate(M,R){let[T,P,L,V]=M,[I,z,U]=R,W=V*I+P*U-L*z,G=V*z+L*I-T*U,O=V*U+T*z-P*I,N=-T*I-P*z-L*U;return[W*V+N*-T+G*-L-O*-P,G*V+N*-P+O*-T-W*-L,O*V+N*-L+W*-P-G*-T]},euler(M,R,T){return ue.multiply(ue.multiply(ue.axisAngle([0,1,0],R),ue.axisAngle([1,0,0],M)),ue.axisAngle([0,0,1],T))},setAxisAngle(M,R,T,P,L){let V=Math.sin(L/2);return M[0]=R*V,M[1]=T*V,M[2]=P*V,M[3]=Math.cos(L/2),M},mulInto(M,R,T){let P=R[0],L=R[1],V=R[2],I=R[3],z=T[0],U=T[1],W=T[2],G=T[3];return M[0]=P*G+I*z+L*W-V*U,M[1]=L*G+I*U+V*z-P*W,M[2]=V*G+I*W+P*U-L*z,M[3]=I*G-P*z-L*U-V*W,M},rotateInto(M,R,T){let[P,L,V,I]=R,z=T[0],U=T[1],W=T[2],G=I*z+L*W-V*U,O=I*U+V*z-P*W,N=I*W+P*U-L*z,H=-P*z-L*U-V*W;return M[0]=G*I+H*-P+O*-V-N*-L,M[1]=O*I+H*-L+N*-P-G*-V,M[2]=N*I+H*-V+G*-L-O*-P,M},slerp(M,R,T){let[P,L,V,I]=R,z=M[0]*P+M[1]*L+M[2]*V+M[3]*I;if(z<0)z=-z,P=-P,L=-L,V=-V,I=-I;let U=1-T,W=T;if(z<0.9995){let N=Math.acos(z),H=Math.sin(N);U=Math.sin((1-T)*N)/H,W=Math.sin(T*N)/H}let G=[M[0]*U+P*W,M[1]*U+L*W,M[2]*U+V*W,M[3]*U+I*W],O=Math.hypot(...G);return[G[0]/O,G[1]/O,G[2]/O,G[3]/O]}},oe={set(M,R,T,P){return M[0]=R,M[1]=T,M[2]=P,M},copy(M,R){return M[0]=R[0],M[1]=R[1],M[2]=R[2],M}},Re=(M,R,T)=>M+(R-M)*T,de=(M,R,T)=>Math.max(R,Math.min(T,M)),xt=(M)=>1-(1-M)**3,pt=(M)=>M<0.5?2*M*M:1-(-2*M+2)**2/2;function ft(M){let R=parseInt(M.slice(1),16);return[(R>>16&255)/255,(R>>8&255)/255,(R&255)/255]}function te(M){let R=Math.sin(M*127.1+311.7)*43758.5453;return R-Math.floor(R)}function Eo(M,R,T){let P=R[0]*T[0]+R[1]*T[1]+R[2]*T[2];if(P<-0.9999)return M[0]=1,M[1]=M[2]=M[3]=0,M;let L=R[1]*T[2]-R[2]*T[1],V=R[2]*T[0]-R[0]*T[2],I=R[0]*T[1]-R[1]*T[0],z=1+P,U=Math.hypot(L,V,I,z);return M[0]=L/U,M[1]=V/U,M[2]=I/U,M[3]=z/U,M}function Ro(M,R){let T=M[0]*R[0]+M[1]*R[1]+M[2]*R[2];if(T<-0.9999)return[1,0,0,0];let P=[M[1]*R[2]-M[2]*R[1],M[2]*R[0]-M[0]*R[2],M[0]*R[1]-M[1]*R[0]],L=1+T,V=Math.hypot(P[0],P[1],P[2],L);return[P[0]/V,P[1]/V,P[2]/V,L/V]}var _t=Math.PI;function wt(M,R,T=0.2,P=0.2,L="head"){return[{mesh:"sphere",color:"#ffffff",pos:[-T,M,R],scale:[P,P,P*0.8],anim:L},{mesh:"sphere",color:"#ffffff",pos:[T,M,R],scale:[P,P,P*0.8],anim:L},{mesh:"sphere",color:"#16111f",pos:[-T,M,R+P*0.35],scale:[P*0.5,P*0.55,P*0.3],anim:L},{mesh:"sphere",color:"#16111f",pos:[T,M,R+P*0.35],scale:[P*0.5,P*0.55,P*0.3],anim:L}]}var So={toad:[{mesh:"sphere",color:"main",pos:[-0.55,0.22,0.25],scale:[0.55,0.35,0.75]},{mesh:"sphere",color:"main",pos:[0.55,0.22,0.25],scale:[0.55,0.35,0.75]},{mesh:"sphere",color:"main",pos:[0,0.85,0],scale:[1.75,1.2,1.5]},{mesh:"sphere",color:"#c9f7a8",pos:[0,0.62,0.38],scale:[1.3,0.7,0.9]},{mesh:"sphere",color:"main",pos:[-0.46,1.42,0.3],scale:[0.55,0.55,0.55],anim:"head"},{mesh:"sphere",color:"main",pos:[0.46,1.42,0.3],scale:[0.55,0.55,0.55],anim:"head"},...wt(1.5,0.45,0.46,0.34),{mesh:"box",color:"#16111f",pos:[0,0.98,0.72],rot:[0.15,0,0],scale:[1.05,0.06,0.12],anim:"head"},{mesh:"sphere",color:"accent",pos:[-0.72,1.05,0.2],scale:[0.18,0.18,0.18],glow:!0},{mesh:"sphere",color:"accent",pos:[0.78,0.9,0.3],scale:[0.14,0.14,0.14],glow:!0},{mesh:"sphere",color:"accent",pos:[0.2,1.3,-0.4],scale:[0.16,0.16,0.16],glow:!0},{mesh:"sphere",color:"accent",pos:[-0.35,0.7,-0.62],scale:[0.2,0.2,0.2],glow:!0},{mesh:"sphere",color:"accent",pos:[0.42,0.78,0.66],scale:[0.09,0.2,0.09],anim:"head",glow:!0},{mesh:"sphere",color:"main",pos:[-0.9,0.55,0.45],rot:[0,0,0.6],scale:[0.22,0.5,0.22],anim:"armL"},{mesh:"sphere",color:"main",pos:[0.9,0.55,0.45],rot:[0,0,-0.6],scale:[0.22,0.5,0.22],anim:"armR"}],shroom:[{mesh:"cyl",color:"accent",pos:[0,0.75,0],scale:[0.95,1.5,0.95]},{mesh:"sphere",color:"accent",pos:[0,0.12,0],scale:[1.05,0.3,1.05]},...wt(1.05,0.45,0.2,0.19),{mesh:"box",color:"#16111f",pos:[-0.2,1.3,0.45],rot:[0,0,-0.35],scale:[0.26,0.05,0.05],anim:"head"},{mesh:"box",color:"#16111f",pos:[0.2,1.3,0.45],rot:[0,0,0.35],scale:[0.26,0.05,0.05],anim:"head"},{mesh:"sphere",color:"#ff9aa8",pos:[-0.33,0.85,0.42],scale:[0.12,0.08,0.05]},{mesh:"sphere",color:"#ff9aa8",pos:[0.33,0.85,0.42],scale:[0.12,0.08,0.05]},{mesh:"sphere",color:"main",pos:[0,1.75,0],scale:[2.1,1.05,2.1],anim:"head"},{mesh:"cyl",color:"#e9d8c8",pos:[0,1.46,0],scale:[1.95,0.08,1.95],anim:"head"},{mesh:"sphere",color:"accent",pos:[0,2.26,0.1],scale:[0.36,0.14,0.36],anim:"head"},{mesh:"sphere",color:"accent",pos:[-0.62,2,0.42],scale:[0.3,0.14,0.3],anim:"head"},{mesh:"sphere",color:"accent",pos:[0.66,2.02,0.3],scale:[0.26,0.13,0.26],anim:"head"},{mesh:"sphere",color:"accent",pos:[0.2,1.95,-0.72],scale:[0.3,0.14,0.3],anim:"head"},{mesh:"sphere",color:"accent",pos:[-0.72,1.9,-0.35],scale:[0.22,0.12,0.22],anim:"head"},{mesh:"sphere",color:"accent",pos:[0.88,1.78,-0.2],scale:[0.18,0.1,0.18],anim:"head"},{mesh:"cyl",color:"accent",pos:[-0.6,0.85,0.1],rot:[_t,0,0.5],scale:[0.16,0.55,0.16],anim:"armL"},{mesh:"cyl",color:"accent",pos:[0.6,0.85,0.1],rot:[_t,0,-0.5],scale:[0.16,0.55,0.16],anim:"armR"}],crab:[{mesh:"cyl",color:"main",pos:[-0.7,0.25,0.2],rot:[0,0,0.9],scale:[0.1,0.7,0.1]},{mesh:"cyl",color:"main",pos:[-0.75,0.25,-0.25],rot:[0,0,0.9],scale:[0.1,0.7,0.1]},{mesh:"cyl",color:"main",pos:[0.7,0.25,0.2],rot:[0,0,-0.9],scale:[0.1,0.7,0.1]},{mesh:"cyl",color:"main",pos:[0.75,0.25,-0.25],rot:[0,0,-0.9],scale:[0.1,0.7,0.1]},{mesh:"sphere",color:"main",pos:[0,0.75,0],scale:[1.9,0.95,1.4]},{mesh:"sphere",color:"#9ef2f0",pos:[0,0.62,0.42],scale:[1.2,0.5,0.6]},{mesh:"box",color:"#16111f",pos:[0,0.72,0.7],scale:[0.5,0.05,0.06]},{mesh:"cyl",color:"main",pos:[-0.3,1.35,0.25],scale:[0.1,0.6,0.1],anim:"head"},{mesh:"cyl",color:"main",pos:[0.3,1.35,0.25],scale:[0.1,0.6,0.1],anim:"head"},...wt(1.72,0.3,0.3,0.22),{mesh:"cyl",color:"accent",pos:[-1.05,1.05,0.25],rot:[0,0,0.6],scale:[0.16,0.7,0.16],anim:"armL"},{mesh:"cyl",color:"accent",pos:[1.05,1.05,0.25],rot:[0,0,-0.6],scale:[0.16,0.7,0.16],anim:"armR"},{mesh:"sphere",color:"accent",pos:[-1.35,1.65,0.35],scale:[0.5,0.42,0.42],anim:"armL"},{mesh:"sphere",color:"accent",pos:[1.35,1.65,0.35],scale:[0.5,0.42,0.42],anim:"armR"},{mesh:"cone",color:"accent",pos:[-1.45,2.05,0.35],rot:[0,0,0.25],scale:[0.26,0.55,0.26],anim:"armL"},{mesh:"cone",color:"accent",pos:[-1.12,2,0.35],rot:[0,0,-0.35],scale:[0.2,0.45,0.2],anim:"armL"},{mesh:"cone",color:"accent",pos:[1.45,2.05,0.35],rot:[0,0,-0.25],scale:[0.26,0.55,0.26],anim:"armR"},{mesh:"cone",color:"accent",pos:[1.12,2,0.35],rot:[0,0,0.35],scale:[0.2,0.45,0.2],anim:"armR"}],golem:[{mesh:"box",color:"main",pos:[-0.42,0.3,0.05],scale:[0.55,0.6,0.65]},{mesh:"box",color:"main",pos:[0.42,0.3,0.05],scale:[0.55,0.6,0.65]},{mesh:"box",color:"main",pos:[0,1.05,0],scale:[1.6,1,1.15]},{mesh:"box",color:"accent",pos:[0,0.95,0.58],scale:[1.1,0.08,0.04],glow:!0},{mesh:"box",color:"main",pos:[0,1.95,0.05],scale:[1.2,0.9,1],anim:"head"},{mesh:"box",color:"accent",pos:[-0.28,2.05,0.56],scale:[0.3,0.14,0.04],anim:"head",glow:!0},{mesh:"box",color:"accent",pos:[0.28,2.05,0.56],scale:[0.3,0.14,0.04],anim:"head",glow:!0},{mesh:"box",color:"accent",pos:[0,1.72,0.56],scale:[0.62,0.06,0.04],anim:"head",glow:!0},{mesh:"box",color:"main",pos:[0,2.6,0.05],scale:[0.6,0.45,0.55],anim:"head"},{mesh:"box",color:"accent",pos:[0,2.62,0.33],scale:[0.36,0.1,0.03],anim:"head",glow:!0},{mesh:"cyl",color:"#c0c7d0",pos:[0,3.05,0.05],scale:[0.05,0.5,0.05],anim:"head"},{mesh:"sphere",color:"accent",pos:[0,3.32,0.05],scale:[0.14,0.14,0.14],anim:"head",glow:!0},{mesh:"box",color:"main",pos:[-1.05,1.25,0.1],rot:[0,0,0.12],scale:[0.45,1.1,0.5],anim:"armL"},{mesh:"box",color:"main",pos:[1.05,1.25,0.1],rot:[0,0,-0.12],scale:[0.45,1.1,0.5],anim:"armR"},{mesh:"box",color:"accent",pos:[-1.05,1.4,0.36],scale:[0.2,0.12,0.02],anim:"armL",glow:!0},{mesh:"box",color:"accent",pos:[1.05,1.1,0.36],scale:[0.2,0.12,0.02],anim:"armR",glow:!0}],jelly:[{mesh:"cyl",color:"accent",pos:[-0.55,0.85,0.2],scale:[0.09,1.3,0.09],anim:"tail"},{mesh:"cyl",color:"accent",pos:[-0.2,0.75,0.45],scale:[0.09,1.4,0.09],anim:"tail"},{mesh:"cyl",color:"accent",pos:[0.2,0.75,0.45],scale:[0.09,1.4,0.09],anim:"tail"},{mesh:"cyl",color:"accent",pos:[0.55,0.85,0.2],scale:[0.09,1.3,0.09],anim:"tail"},{mesh:"cyl",color:"accent",pos:[-0.35,0.8,-0.35],scale:[0.09,1.3,0.09],anim:"tail"},{mesh:"cyl",color:"accent",pos:[0.35,0.8,-0.35],scale:[0.09,1.3,0.09],anim:"tail"},{mesh:"sphere",color:"main",pos:[0,2.05,0],scale:[1.9,1.5,1.9],anim:"head"},{mesh:"cyl",color:"main",pos:[0,1.4,0],scale:[1.85,0.2,1.85],anim:"head"},{mesh:"sphere",color:"#ffd6f4",pos:[0,2.25,0.2],scale:[1.2,0.8,1.2],anim:"head",glow:!0},...wt(1.95,0.8,0.32,0.22),{mesh:"box",color:"#16111f",pos:[0,1.66,0.9],scale:[0.2,0.05,0.05],anim:"head"}],yeti:[{mesh:"cyl",color:"main",pos:[-0.4,0.3,0.05],scale:[0.45,0.6,0.45]},{mesh:"cyl",color:"main",pos:[0.4,0.3,0.05],scale:[0.45,0.6,0.45]},{mesh:"sphere",color:"main",pos:[0,1.25,0],scale:[1.7,1.8,1.4]},{mesh:"sphere",color:"main",pos:[-0.62,1.8,0.1],scale:[0.55,0.55,0.55],anim:"head"},{mesh:"sphere",color:"main",pos:[0.62,1.8,0.1],scale:[0.55,0.55,0.55],anim:"head"},{mesh:"sphere",color:"main",pos:[0,2.15,0],scale:[0.8,0.6,0.8],anim:"head"},{mesh:"sphere",color:"accent",pos:[0,1.55,0.5],scale:[0.95,0.85,0.5],anim:"head"},...wt(1.7,0.72,0.2,0.17),{mesh:"box",color:"#16111f",pos:[0,1.32,0.74],scale:[0.4,0.14,0.06],anim:"head"},{mesh:"cone",color:"#ffffff",pos:[-0.1,1.24,0.78],rot:[_t,0,0],scale:[0.07,0.12,0.05],anim:"head"},{mesh:"cone",color:"#ffffff",pos:[0.1,1.24,0.78],rot:[_t,0,0],scale:[0.07,0.12,0.05],anim:"head"},{mesh:"cyl",color:"#fff7ee",pos:[0,2.48,0],scale:[0.62,0.22,0.62],anim:"head"},{mesh:"cyl",color:"#fff7ee",pos:[0,2.65,0],scale:[0.42,0.2,0.42],anim:"head"},{mesh:"cone",color:"#fff7ee",pos:[0,2.9,0],scale:[0.3,0.35,0.3],anim:"head"},{mesh:"sphere",color:"main",pos:[-1,1.35,0.2],rot:[0,0,0.35],scale:[0.42,0.95,0.42],anim:"armL"},{mesh:"sphere",color:"main",pos:[1,1.35,0.2],rot:[0,0,-0.35],scale:[0.42,0.95,0.42],anim:"armR"},{mesh:"sphere",color:"accent",pos:[-1.15,0.72,0.35],scale:[0.28,0.22,0.28],anim:"armL"},{mesh:"sphere",color:"accent",pos:[1.15,0.72,0.35],scale:[0.28,0.22,0.28],anim:"armR"}]};var Q={peakR:2.2,peakY:7.1,ledgeIn:3.95,ledgeOut:6.3,ledgeY:3.7,baseR:8.4,footR:10.3,plazaR:13.8,stairW:0.62,waterZ:-31},He=(M)=>M.toFixed(3),Ao=`#version 300 es
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
    float fade = exp(-abs(w.z - ${He(Q.waterZ-0.5)}) * 0.12);
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
`,Po=`#version 300 es
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
const float PEAK_Y = ${He(Q.peakY)};
const float LEDGE_Y = ${He(Q.ledgeY)};
const float BASE_R = ${He(Q.baseR)};
const float FOOT_R = ${He(Q.footR)};
const float PLAZA_R = ${He(Q.plazaR)};
const float STAIR_W = ${He(Q.stairW)};

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
    float streak = pow(max(0.0, sin(vWorld.x * 2.3 + sin(vWorld.z * 3.0 + uTime))), 12.0) * smoothstep(${He(Q.waterZ-14)}, ${He(Q.waterZ-1)}, vWorld.z);
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
`,Fo=`#version 300 es
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
`,Lo=`#version 300 es
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
`,ko=`#version 300 es
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
`,Co=`#version 300 es
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
`,_o=`#version 300 es
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
`,Vo=`#version 300 es
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
`,Io=`#version 300 es
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
`,Do=`#version 300 es
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
`,zo=`#version 300 es
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
`,No=`#version 300 es
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
`,gt=`#version 300 es
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
`;var Uo=`#version 300 es
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
`,Oo=`#version 300 es
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
`,Bo=`#version 300 es
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
`,Go=`#version 300 es
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
`,Wo=`#version 300 es
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
`,Ho=`#version 300 es
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
`,qo=`#version 300 es
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
`,jo=`#version 300 es
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
`,Yo=`#version 300 es
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
`,Xo=`#version 300 es
precision highp float;
layout(location = 0) in vec3 aPos;
uniform mat4 uModel;
uniform mat4 uLightVP;
void main() {
  gl_Position = uLightVP * uModel * vec4(aPos, 1.0);
}
`,Qo=`#version 300 es
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
`,$o=`#version 300 es
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
`,Vt=`#version 300 es
precision highp float;
void main() {}
`,Ko=`#version 300 es
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
`,Zo=`#version 300 es
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
`,Jo=`#version 300 es
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
`;var gs=(M,R,T)=>{let P=de((T-M)/(R-M),0,1);return P*P*(3-2*P)},De=Math.PI*2,ds={sword:0,coin:1,heal:2,mana:3},Ms=Int32Array.from({length:6},(M,R)=>ds[m[R%m.length]]),Ts=Object.fromEntries(E.map((M)=>[M,Math.max(0,m.indexOf(M))])),Es={ram:[1,0.45,0.2],roar:[1,0.78,0.3],warcry:[1,0.3,0.25],luck:[0.5,1,0.4],treasure:[1,0.82,0.2],stone:[0.72,0.7,0.82],bite:[0.9,0.12,0.3],rob:[0.35,0.95,0.8],lasso:[1,0.62,0.3],show:[1,0.45,0.85],kick:[0.4,0.9,1],spring:[0.3,0.7,1]},Mt=(()=>{let M=[-0.62,0.55,-0.42],R=Math.hypot(...M);return[M[0]/R,M[1]/R,M[2]/R]})(),Rs=[1.15,0.82,0.7],Ss=[0.42,0.32,0.62],As=[0.16,0.1,0.2],Ps=[0.62,0.3,0.45],Fs=[0,0,0],It=[0,1,0],Ls=[1,38,1],es=2048,Dt=21,ts=2,ks=3072,Qt=14,zt=900,$t=220,os=240,Kt=40,Ot=(Q.ledgeIn+Q.ledgeOut)/2,vs=0.74,st=0.12,Ye=[0,1.3,1.55],Cs=[0,Q.ledgeY,Q.peakY],qe=[0,Q.peakY+st,0.45],ye=[0,Q.peakY,-1.3],Xe=3.4,Bt=[0,0,0.3,0.52,0.7,0.86,0.98],ss=[1.18,1.14,1.3],_s=16.4,is=1.24,as=10*Math.PI/180,Zt=(()=>{let M=[0,0.96,0.27],R=Math.hypot(...M);return[M[0]/R,M[1]/R,M[2]/R]})(),rs=0.95,Vs=-0.42,Is=0.2,bs=[0.78,0.77,0.84],Ds=[0.6,0.58,0.68],Jt=[bs,Ds],zs=[0.74,0.73,0.8],eo=["box","cyl","cone","sphere","prism","pyr"],ns=[{p:[-22,3.2,8],a0:0.3,speed:0.23,color:[1,0.82,0.72]},{p:[23,4,-5],a0:2.1,speed:-0.19,color:[0.72,0.84,1]},{p:[-9,3.5,-24],a0:4,speed:0.16,color:[1,0.66,0.9]},{p:[13,5,-23],a0:5.2,speed:-0.27,color:[0.9,0.9,1]}];class ys{data={box:[],cyl:[],cone:[],sphere:[],prism:[],pyr:[]};add(M,R,T,P,L,V=0,I=0){this.data[M].push(R[0],R[1],R[2],V,T[0],T[1],T[2],T[3],P[0],P[1],P[2],I,L[0],L[1],L[2],1)}}var Ae=[0,0,0,1],Nt=ce.create(),Ns=[0.2,0.2,0.3],Us=ce.fromTRS(ce.create(),[0,0.3,Q.waterZ-40],Ae,[170,1,80]),Os=(()=>{let M=new Float32Array(16);return M[0]=2,M[9]=-2,M[15]=1,M})(),Bs=[0.44,0.39,0.46],cs=[0.58,0.5,0.52],ls=[0.36,0.25,0.2],hs=[0.18,0.17,0.22],Gs=[1,0.78,0.3],us=[1,0.78,0.45],ms=[1,0.55,0.2],Ws=[0.12,0.3,0.24],Hs=[0.17,0.4,0.3],to=[0.34,0.29,0.38],dt=[[0.35,0.95,1],[1,0.4,0.85],[0.7,0.5,1]],ps=[[0.66,0.58,0.5],[0.6,0.52,0.62],[0.52,0.58,0.66],[0.68,0.62,0.46],[0.58,0.64,0.56]],fs=[[0.78,0.26,0.3],[0.25,0.55,0.62],[0.55,0.32,0.7],[0.85,0.5,0.22],[0.3,0.5,0.35]],oo=[[1,0.85,0.6],[1,0.4,0.7],[1,0.8,0.25],[0.45,0.9,1],[0.75,0.5,1]];function Ut(M,R,T,P){if(M===i)return oe.copy(P,qe);if(M===f){let I=(R===0?-1:1)*vs;return oe.set(P,Math.sin(I)*Ot,Q.ledgeY+st,Math.cos(I)*Ot)}let L=Bt[Math.min(T,Bt.length-1)],V=T>1?Re(-L,L,R/(T-1)):0;return oe.set(P,Math.sin(V)*Q.footR,0,Math.cos(V)*Q.footR)}function Tt(M,R){return Math.max(0,Yt(Q,Math.hypot(M,R),Math.atan2(M,R)))}class so{canvas;gl;progs;meshes;buildingMesh;houseMesh;carMesh;propMeshes;particleVao;particleBuf;particleData=new Float32Array((zt+$t+Kt+os)*8);boltVao;boltBuf;boltData=new Float32Array(ks*6);boltPts=new Float32Array((Qt+1)*3);emptyVao;buildingData=new Float32Array(0);houseData=new Float32Array(0);carData=new Float32Array(0);lightData=new Float32Array(0);lightCount=0;fitPoints=new Float32Array(0);fitProj=new Float32Array(0);monsters=new Map;ledgeSlot=new Map;footOrder=[];seats=0;peakHolder=null;synced=!1;flagT0=-10;flagFrom=Jt;flagTo=Jt;flagFlash=0;beacon=0;flyers=[];buildings=[];cottages=[];buildingsDirty=!0;housesDirty=!0;particles=[];cars=[];bolts=[];waves=[];timers=[];labels=[];labelIndex=new Map;levelLabels=[];signAnchors=Float32Array.from([0,0,0,Q.ledgeOut+0.15,Q.ledgeY+0.15,0.9,Q.peakR+0.35,Q.peakY+0.35,0.2]);viewerId=null;colors=new Map;attackT=new Map;dice=[];diceActive=!1;diceResolved=!1;resolvedT=-10;diceViewProj=ce.create();diceCam=[0,0,0];diceCenter=[0,0,-0.12];diceOk=!1;dieStepPx=40;diceRect={x:0,y:0,w:0,h:0};hoverDie=-1;fmt;quality="high";pipe=null;direct=!1;shadow=null;dummyShadow;lightVP=ce.create();renderScale=1;frameEma=0.016666666666666666;lastScaleCheck=0;hit=0;lessMotion=!1;yaw=0;pitch=0.62;pitchAuto=!0;zoomK=1;camShake=0;camPos=[0,0,0];camTarget=[0,0,0];focus=null;lastInput=-100;drift=[0,0];view=ce.create();proj=ce.create();viewProj=ce.create();invViewProj=ce.create();insets={top:0,right:0,bottom:0,left:0};insetsTo={top:0,right:0,bottom:0,left:0};width=1;height=1;dpr=1;time=0;last=0;raf=0;tmp=ce.create();tmp2=ce.create();tmp3=ce.create();v0=[0,0,0];v1=[0,0,0];v2=[0,0,0];v3=[0,0,0];q0=[0,0,0,1];q1=[0,0,0,1];q2=[0,0,0,1];c4=new Float32Array(4);fitExt=[0,0,0,0];scratchLabel={id:"",kind:"m",x:0,y:0,ax:0,ay:0,bx:0,by:0,bw:0,bh:0,level:0,visible:!1};onLabels=null;constructor(M,R="high"){this.canvas=M;let T=M.getContext("webgl2",{antialias:!1,alpha:!1,depth:!0,stencil:!1,powerPreference:"high-performance"});if(!T)throw Error("WebGL2 недоступен");this.gl=T,this.fmt=To(T),this.progs={obj:new Le(T,Ao,Po),bld:new Le(T,_o,Vo),house:new Le(T,Fo,Lo),prop:new Le(T,ko,Co),dice:new Le(T,zo,No),sky:new Le(T,gt,Uo),part:new Le(T,Oo,Bo),decal:new Le(T,Go,Wo),car:new Le(T,Io,Do),beam:new Le(T,Ho,qo),bolt:new Le(T,jo,Yo),depth:new Le(T,Xo,Vt),depthInst:new Le(T,Qo,Vt),depthProp:new Le(T,$o,Vt),bright:new Le(T,gt,Ko),blur:new Le(T,gt,Zo),composite:new Le(T,gt,Jo)};for(let z of[this.progs.obj,this.progs.bld,this.progs.house,this.progs.prop,this.progs.dice,this.progs.car])z.use().int("uShadowMap",1);this.progs.dice.use().ints("uSym",Ms);let P=this.progs.composite.use();P.int("uScene",0),P.int("uBloom1",2),P.int("uBloom2",3);let L=this.progs.obj;this.meshes={sphere:new Ee(T,L,jt(14,20)),box:new Ee(T,L,yt()),cyl:new Ee(T,L,tt(0.5,0.5,18)),cone:new Ee(T,L,tt(0.5,0,18)),ground:new Ee(T,L,kt(160,1)),water:new Ee(T,L,kt(1,60)),dice:new Ee(T,this.progs.dice,bo(0.22,7)),quad:new Ee(T,this.progs.decal,kt(1,1)),beam:new Ee(T,this.progs.beam,tt(0.1,1.9,24,!1)),cloth:new Ee(T,L,xo(14,6)),hill:new Ee(T,L,Mo(Q))},this.buildingMesh=new Ee(T,this.progs.bld,yt(!0),[{name:"iOffset",size:4},{name:"iScale",size:4},{name:"iColor",size:4}]),this.houseMesh=new Ee(T,this.progs.house,yo(),[{name:"iOffset",size:4},{name:"iScale",size:4},{name:"iColor",size:4},{name:"iRoof",size:4}]),this.carMesh=new Ee(T,this.progs.car,yt(!0),[{name:"iOffset",size:4},{name:"iColor",size:4}]);let V=[{name:"iPos",size:4},{name:"iQuat",size:4},{name:"iScale",size:4},{name:"iColor",size:4}],I=this.progs.prop;this.propMeshes={box:new Ee(T,I,yt(),V),cyl:new Ee(T,I,tt(0.5,0.5,14),V),cone:new Ee(T,I,tt(0.5,0,14),V),sphere:new Ee(T,I,jt(8,12),V),prism:new Ee(T,I,wo(),V),pyr:new Ee(T,I,tt(0.5,0,4),V)},this.emptyVao=T.createVertexArray(),this.particleVao=T.createVertexArray(),this.particleBuf=T.createBuffer(),T.bindVertexArray(this.particleVao),T.bindBuffer(T.ARRAY_BUFFER,this.particleBuf),T.bufferData(T.ARRAY_BUFFER,this.particleData.byteLength,T.DYNAMIC_DRAW),T.enableVertexAttribArray(0),T.vertexAttribPointer(0,3,T.FLOAT,!1,32,0),T.enableVertexAttribArray(1),T.vertexAttribPointer(1,4,T.FLOAT,!1,32,12),T.enableVertexAttribArray(2),T.vertexAttribPointer(2,1,T.FLOAT,!1,32,28),this.boltVao=T.createVertexArray(),this.boltBuf=T.createBuffer(),T.bindVertexArray(this.boltVao),T.bindBuffer(T.ARRAY_BUFFER,this.boltBuf),T.bufferData(T.ARRAY_BUFFER,this.boltData.byteLength,T.DYNAMIC_DRAW),T.enableVertexAttribArray(0),T.vertexAttribPointer(0,3,T.FLOAT,!1,24,0),T.enableVertexAttribArray(1),T.vertexAttribPointer(1,3,T.FLOAT,!1,24,12),T.bindVertexArray(null),this.dummyShadow=new Ct(T,1),T.bindFramebuffer(T.FRAMEBUFFER,this.dummyShadow.fb),T.clearDepth(1),T.clear(T.DEPTH_BUFFER_BIT),T.bindFramebuffer(T.FRAMEBUFFER,null),this.quality=R,this.renderScale=R==="high"?1:0.8,this.setupShadow(),this.buildHill(),this.buildCity(),this.buildCars(),this.buildFit(4),this.levelLabels=[0,1,2].map((z)=>{let U=this.label(`l:${z}`,"l");return U.level=z,U}),this.start()}setQuality(M){if(M===this.quality)return;this.quality=M,this.renderScale=M==="high"?1:0.8,this.setupShadow(),this.rebuildTargets(),this.buildCars()}setupShadow(){if(this.quality==="high"&&!this.shadow){let M=new Ct(this.gl,es);if(M.ok)this.shadow=M;else M.dispose()}else if(this.quality==="low"&&this.shadow)this.shadow.dispose(),this.shadow=null}maxSamples(){let M=this.gl;try{let R=M.getInternalformatParameter(M.RENDERBUFFER,this.fmt.internal,M.SAMPLES);return R&&R.length?Math.max(...Array.from(R)):0}catch{return 0}}rebuildTargets(){let M=this.pipe;if(M)M.scene.dispose(),M.ms?.dispose(),M.bloomA.dispose(),M.bloomB.dispose(),M.bloomC.dispose(),M.bloomD.dispose(),this.pipe=null;if(this.direct)return;let R=this.gl,T=Math.max(1,Math.round(this.canvas.width*this.renderScale)),P=Math.max(1,Math.round(this.canvas.height*this.renderScale)),L=(I)=>{let z=null;{let Y=Math.min(this.quality==="high"?4:2,this.maxSamples());if(Y>1){if(z=new Xt(R,T,P,I,Y),!z.ok)z.dispose(),z=null}}let U=new ot(R,T,P,I,!z),W=(Y)=>Math.max(1,Y>>1),G=(Y)=>Math.max(1,Y>>2),O=new ot(R,W(T),W(P),I,!1),N=new ot(R,W(T),W(P),I,!1),H=new ot(R,G(T),G(P),I,!1),q=new ot(R,G(T),G(P),I,!1),j=[U,O,N,H,q];if(j.every((Y)=>Y.ok))return{scene:U,ms:z,bloomA:O,bloomB:N,bloomC:H,bloomD:q};return j.forEach((Y)=>Y.dispose()),z?.dispose(),null},V=L(this.fmt);if(!V&&this.fmt.hdr)this.fmt={internal:R.RGBA8,format:R.RGBA,type:R.UNSIGNED_BYTE,hdr:!1},V=L(this.fmt);if(!V){this.direct=!0;return}this.pipe=V}buildHill(){let M=new ys,R=[],T=(N,H,q,j=0)=>{R.push(N[0],N[1],N[2],H[0],H[1],H[2],j,q)},P=(N,H,q=0)=>[Math.sin(H)*N,q,Math.cos(H)*N],L=(N,H,q)=>{M.add("cyl",N,Ae,[0.09,H,0.09],ls),M.add("cone",[N[0],N[1]+H-0.02,N[2]],ue.axisAngle([1,0,0],Math.PI),[0.24,0.2,0.24],hs),M.add("sphere",[N[0],N[1]+H+0.08,N[2]],Ae,[0.2,0.28,0.2],ms,0,2.6),T([N[0],N[1]+H+0.12,N[2]],ms,1.25,q)},V=(N,H,q)=>{M.add("cyl",N,Ae,[0.08,H,0.08],hs),M.add("sphere",[N[0],N[1]+H+0.1,N[2]],Ae,[0.26,0.26,0.26],us,0,2.2),T([N[0],N[1]+H+0.1,N[2]],us,0.85,q)},I=(N,H)=>{M.add("cyl",N,Ae,[0.2*H,0.5*H,0.2*H],[0.3,0.2,0.15]),M.add("cone",[N[0],N[1]+0.4*H,N[2]],Ae,[1.2*H,1.5*H,1.2*H],Ws),M.add("cone",[N[0],N[1]+1*H,N[2]],Ae,[0.85*H,1.15*H,0.85*H],Hs)},z=(N,H,q)=>{let j=ue.euler(q*3.1,q*5.7,q*1.3);M.add("sphere",[N[0],N[1]+H*0.25,N[2]],j,[H*1.3,H*0.8,H],to)};M.add("cyl",[qe[0],Q.peakY-0.2,qe[2]],Ae,[Ye[2]*2,0.2+st,Ye[2]*2],cs),M.add("cyl",[ye[0],ye[1]-0.1,ye[2]],Ae,[0.5,0.35,0.5],Bs),M.add("cyl",ye,Ae,[0.12,Xe,0.12],ls),M.add("sphere",[ye[0],ye[1]+Xe+0.1,ye[2]],Ae,[0.3,0.3,0.3],Gs,0,0.9);for(let N of[-1,1])L([N*1.65,Q.peakY,-0.55],0.95,N*1.7);for(let N of[0,1]){let H=(N===0?-1:1)*vs,q=P(Ot,H,Q.ledgeY-0.2);M.add("cyl",q,Ae,[Ye[1]*2,0.2+st,Ye[1]*2],cs),L(P(Ot+0.2,H+(N===0?-1:1)*0.36,Q.ledgeY),1,N*2.3)}for(let N of[-1,1]){let H=N*(Q.stairW+0.35);V([H,0,Q.baseR+0.35],1.5,N),V([H,Q.ledgeY,Q.ledgeOut-0.25],1.1,N+2),V([H,Q.ledgeY,Q.ledgeIn+0.25],1.1,N+4),V([H,Q.peakY,Q.peakR-0.25],0.9,N+6)}for(let N of[11.6,13.3])for(let H of[-1,1])V([H*(Q.stairW+0.45),0,N],1.4,N+H);for(let N=0;N<14;N++){let H=Math.PI*0.62+N/13*Math.PI*0.76+(te(N*3.3)-0.5)*0.12,q=N%2===0?H:-H,j=Re(Q.ledgeIn+0.8,Q.ledgeOut-0.5,te(N*7.7));I(P(j,q,Q.ledgeY),0.75+te(N*1.9)*0.4)}for(let N=0;N<26;N++){let H=N/26*De+te(N*2.1)*0.2;if(Math.abs(Math.atan2(Math.sin(H),Math.cos(H)))<1.25)continue;let q=Q.baseR+1.2+te(N*5.3)*2.2;I(P(q,H),0.9+te(N*4.4)*0.5)}for(let N=0;N<22;N++){let H=N/22*De+te(N*9.1)*0.25,q=Math.abs(Math.atan2(Math.sin(H),Math.cos(H)));if(q<0.22)continue;if(z(P(Q.baseR+0.15,H),0.55+te(N*3.7)*0.5,te(N)),N%2===0&&q>1.2)z(P(Q.ledgeIn+0.2,H+0.1,Q.ledgeY),0.4+te(N*6.1)*0.3,te(N+9))}let U=(N,H,q,j,Y)=>{let Z=P(N,H,q),J=Ro([0,1,0],[Math.sin(H)*0.6,0.8,Math.cos(H)*0.6]);M.add("pyr",Z,J,[0.35*j,1.1*j,0.35*j],Y,0,2.2),M.add("pyr",[Z[0]+0.2,Z[1],Z[2]+0.1],ue.multiply(J,ue.axisAngle([0,0,1],0.5)),[0.22*j,0.7*j,0.22*j],Y,0,2.2),T([Z[0],Z[1]+0.4*j,Z[2]],Y,1.3,H*3)},W=(N,H)=>(N+H)/2;U(W(Q.ledgeOut,Q.baseR)+0.25,1.35,Q.ledgeY*0.45,1,dt[0]),U(W(Q.ledgeOut,Q.baseR)+0.25,-1.45,Q.ledgeY*0.4,0.9,dt[1]),U(W(Q.ledgeOut,Q.baseR)+0.3,2.4,Q.ledgeY*0.5,1.1,dt[2]),U(W(Q.ledgeOut,Q.baseR)+0.3,-2.5,Q.ledgeY*0.45,1,dt[0]),U(W(Q.peakR,Q.ledgeIn)+0.3,1.6,W(Q.ledgeY,Q.peakY)-0.2,0.8,dt[1]),U(W(Q.peakR,Q.ledgeIn)+0.3,-1.9,W(Q.ledgeY,Q.peakY)-0.3,0.8,dt[2]);for(let N=1;N<12;N++){let H=N/12*De;V(P(Q.plazaR-0.45,H),1.8,N*1.3)}let G=[];this.cottages=[];let O=34;for(let N=0;N<O;N++){let H=(N+0.5)/O*De;if(Math.abs(Math.atan2(Math.sin(H),Math.cos(H)))<0.14)continue;let q=te(N*31+3),j=_s+(te(N*13)-0.5)*0.7,Y=Math.sin(H)*j,Z=Math.cos(H)*j,J=1.5+te(q*9.1)*0.55,ae=1.25+te(q*5.3)*0.35,re=1+te(q*7.7)*0.55,ie=ps[Math.floor(te(q*3.3)*ps.length)],X=fs[Math.floor(te(q*4.9)*fs.length)],se=0.82+te(q*2.1)*0.3;if(G.push(Y,0,Z,Math.atan2(-Y,-Z),J,re,ae,q,ie[0],ie[1],ie[2],0,X[0]*se,X[1]*se,X[2]*se,0.72),this.cottages.push({x:Y,z:Z,shakeT:-10}),N%3===1)I(P(j+1.6,H+0.06),0.8+te(N*2.9)*0.4)}for(let N of eo)this.propMeshes[N].setInstances(new Float32Array(M.data[N]));this.houseData=new Float32Array(G),this.housesDirty=!0,this.lightData=new Float32Array(R),this.lightCount=Math.min($t,R.length/8)}buildCity(){let M=[],R=0;for(let T=-13;T<13;T++)for(let P=-12;P<13;P++){let L=T*3+1.5,V=P*3+1.5,I=Math.hypot(L,V);if(I<19.6||I>38)continue;if(V<Q.waterZ+1)continue;let U=te(T*31+P*17+5)>0.55?2:1;for(let W=0;W<U;W++){let G=te(R*7.3+W),O=U===1?1.6+G*0.5:0.95,N=U===1?1.6+te(R*3.1)*0.5:1.8,H=U===1?0:(W-0.5)*1.05,q=te(R*5.7+W),j=I<23?0.9+q*1.4:I<28?1.5+q*3:2.5+q*q*7+2*te(R*9.1);if(V>14)j=Math.min(j,1.5+(V-14)*0.12);let Y=te(R*2.3+W),Z=Y<0.33?[0.28,0.24,0.42]:Y<0.66?[0.36,0.3,0.38]:[0.22,0.28,0.4];M.push({x:L+H,z:V,w:O,d:N,h:j,color:Z,seed:te(R*13.7+W),shakeT:-10})}R++}this.buildings=M,this.buildingData=new Float32Array(M.length*12),this.buildingsDirty=!0}buildCars(){let M=this.quality==="high"?64:28,R=[[0.85,0.85,0.9],[0.12,0.12,0.15],[0.8,0.15,0.2],[0.95,0.75,0.15],[0.2,0.45,0.85],[0.9,0.9,0.3]],T=[];for(let P=0;P<M;P++){let L=te(P*3.7)>0.5?1:0,V=te(P*5.3)>0.5?1:-1;T.push({axis:L,line:(Math.floor(te(P*7.1)*25)-12)*3,lane:V*0.13,dir:V,speed:1.3+te(P*9.7)*1.4,phase:te(P*11.3)*80,color:R[Math.floor(te(P*13.1)*R.length)]})}this.cars=T,this.carData=new Float32Array(M*8)}buildFit(M){let R=[],T=this.v0,P=Q.footR;for(let L=0;L<Math.max(1,M);L++){Ut(u,L,M,T);let V=Math.atan2(T[0],T[2]);for(let I of[-0.19,0.19]){let z=Math.sin(V+I)*P,U=Math.cos(V+I)*P;R.push(z,0,U,z,3.1,U)}R.push(T[0],0.8,T[2]+1.3)}for(let L of[0,1])Ut(f,L,M,T),R.push(T[0],T[1]+3.3,T[2],T[0]*1.15,T[1],T[2]);R.push(qe[0],qe[1]+3.4,qe[2],ye[0],ye[1]+Xe+0.5,ye[2]),R.push(-Q.ledgeOut,Q.ledgeY,0,Q.ledgeOut,Q.ledgeY,0,-Q.baseR*0.9,0,0,Q.baseR*0.9,0,0),this.fitPoints=new Float32Array(R),this.fitProj=new Float32Array(R.length)}sync(M,R,T){this.viewerId=R,this.diceActive=T;let P=M.players.length;if(P!==this.seats)this.seats=P,this.buildFit(P);for(let O of M.players){let N=p[O.monster];if(!this.colors.has(O.id))this.colors.set(O.id,[ft(N.color),ft(N.accent)])}for(let O of[...this.ledgeSlot.keys()])if(!M.players.some((N)=>N.id===O&&N.level===f))this.ledgeSlot.delete(O);for(let O of M.players){if(O.level!==f||this.ledgeSlot.has(O.id))continue;let N=new Set(this.ledgeSlot.values()),H=[0,1].filter((j)=>!N.has(j));if(!H.length)continue;let q=this.monsters.get(O.id);this.ledgeSlot.set(O.id,H.length===2&&q&&q.pos[0]>0.5?1:H[0])}let L=this.footOrder;L.length=0;for(let O=0;O<P;O++){let N=M.players[(M.startPlayer+O)%P];if(N.level===u)L.push(N.id)}let V=M.players[M.current],I=this.v1;M.players.forEach((O,N)=>{let H=O.level===f?this.ledgeSlot.get(O.id)??0:O.level===u?L.indexOf(O.id):0;Ut(O.level,H,L.length,I);let q=this.monsters.get(O.id);if(!q)q=this.makeMonster(O.id,O.monster,N,I),q.level=O.level,q.scale=q.scaleTo=ss[O.level],this.monsters.set(O.id,q);if(q.to[0]!==I[0]||q.to[1]!==I[1]||q.to[2]!==I[2])this.startMove(q,I);q.level=O.level,q.scaleTo=ss[O.level],q.current=O.id===V.id&&M.phase!=="gameOver"});for(let O of[...this.monsters.keys()])if(!M.players.some((N)=>N.id===O))this.monsters.delete(O);let z=M.players.find((O)=>O.level===i)?.id??null;if(z!==this.peakHolder){if(this.synced){this.flagT0=this.time+0.5,this.flagFrom=this.colorsOf(this.peakHolder),this.flagTo=this.colorsOf(z);let O=[ye[0],ye[1]+Xe,ye[2]];this.later(0.5,()=>this.burst(O,18,this.flagFrom[0],2.2,1.1,0.5,-1.5)),this.later(1.45,()=>{this.flagFlash=1;let N=this.flagTo[0];if(z)this.burst(O,50,N,4.5,1.4,0.55,-2.5),this.burst(O,20,[1,0.9,0.55],2.5,1,0.4,-1),this.waves.push({p:[0,Q.peakY+st+0.03,0],t0:this.time,dur:1,size:8,color:[N[0],N[1],N[2],1]})})}else this.flagFrom=this.flagTo=this.colorsOf(z);this.peakHolder=z}this.synced=!0;let U=M.phase==="roll"&&!M.flags.rolled;while(this.dice.length<M.dice.length)this.dice.push({face:"sword",kept:!1,bonus:!1,blank:!0,q:ue.identity(),pos:[0,0,0],target:[0,0,0],rollT0:-10,throwFrom:[0,0,0],axis:[1,0,0],turns:0,sx:0,sy:0});this.dice.length=M.dice.length;let W=M.dice.length,G=M.flags.resolved&&M.phase!=="gameOver";if(G&&!this.diceResolved)this.resolvedT=this.time;this.diceResolved=G,M.dice.forEach((O,N)=>{let H=this.dice[N];if(H.face!==O.face||H.blank!==U)ue.setAxisAngle(this.q0,0,1,0,(te(N*7.7+M.turn*3.1+ds[O.face])-0.5)*0.45),ue.mulInto(H.q,this.q0,js[Ts[O.face]]);if(H.face=O.face,H.bonus=O.bonus,H.blank=U,H.kept=O.kept&&M.phase==="roll"&&M.flags.rolled,oe.set(H.target,(N-(W-1)/2)*is,0,H.kept?Vs:Is),H.pos[0]===0&&H.pos[2]===0)oe.copy(H.pos,H.target)})}setInsets(M,R,T,P){let L=this.insetsTo.top===0&&this.insetsTo.bottom===0;if(this.insetsTo={top:M,right:R,bottom:T,left:P},L)this.insets={top:M,right:R,bottom:T,left:P}}makeMonster(M,R,T,P){let L=p[R],V=ft(L.color),I=ft(L.accent),z=So[R],U=0;for(let W of z)U=Math.max(U,W.pos[1]+(W.mesh==="cyl"||W.mesh==="cone"?W.scale[1]:W.scale[1]/2));return{id:M,monster:R,parts:z,partQ:z.map((W)=>W.rot?ue.euler(W.rot[0],W.rot[1],W.rot[2]):ue.identity()),partMesh:z.map((W)=>W.mesh),partColor:z.map((W)=>W.color==="main"?V:W.color==="accent"?I:ft(W.color)),main:V,accent:I,height:U,pos:[...P],from:[...P],to:[...P],mid:[...P],startedAt:-10,moveT0:-10,moveDur:1,arc:0,flips:0,how:"walk",pending:null,moveEventT:-10,koT:-10,dizzyT:-10,level:u,yaw:0,scale:1,scaleTo:1,flashT:-10,lungeT:-10,lungeDir:[0,0,1],landT:-10,current:!1,seed:T*1.37+0.3,landed:!0}}startMove(M,R){if(oe.copy(M.from,M.pos),oe.copy(M.to,R),M.startedAt=this.time,M.landed=!1,M.pending&&Math.abs(this.time-M.pending.t)<0.001)this.applyPending(M);else this.setStyle(M,"walk",0)}applyPending(M){let R=M.pending;M.pending=null,this.setStyle(M,R.how,R.delay)}setStyle(M,R,T){M.how=R,M.moveT0=M.startedAt+T;let P=Math.hypot(M.to[0]-M.from[0],M.to[2]-M.from[2]),L=this.lessMotion;switch(R){case"walk":M.moveDur=de(0.5+P*0.05,0.5,1),M.arc=Math.min(2.2,0.4+P*0.12+Math.abs(M.to[1]-M.from[1])*0.3),M.flips=0;break;case"climb":M.moveDur=1.05,M.arc=1.1,M.flips=0,M.mid[0]=Re(M.from[0],M.to[0],0.52),M.mid[2]=Re(M.from[2],M.to[2],0.52),M.mid[1]=Math.max(Tt(M.mid[0],M.mid[2])+0.35,Re(M.from[1],M.to[1],0.55));break;case"jump":M.moveDur=0.85,M.arc=1.9,M.flips=0;break;case"push":M.moveDur=1.05,M.arc=2.3,M.flips=L?0:1;break;case"fall":M.moveDur=1.4,M.arc=3.2,M.flips=L?0:2;break;case"slide":M.moveDur=1.35,M.arc=0.3,M.flips=0;break}}event(M){let R=this.time;switch(M.type){case"roll":for(let T of M.indices){let P=this.dice[T];if(!P)continue;P.rollT0=R+te(T*3.3+R)*0.12;let L=(te(T*5.1+R*7)-0.5)*2.4;oe.set(P.throwFrom,L,2.4+te(T*9.7+R)*1.2,1.5+te(T*2.3+R)*0.9);let V=Math.hypot(P.throwFrom[0],P.throwFrom[2])||1;oe.set(P.axis,-P.throwFrom[2]/V,0,P.throwFrom[0]/V),P.turns=1.3+te(T*4.1+R*3)*1.1}break;case"move":{let T=this.monsters.get(M.playerId);if(!T)break;T.moveEventT=R;let P,L=0;switch(M.how){case"climb":P="climb",L=this.attackT.get(M.playerId)===R?0.6:0.2;break;case"jump":P="jump",L=0.15;break;case"fall":P="fall",L=0.32;break;case"push":P="push",L=0.3;break;default:P="slide",L=0.45+te(T.seed)*0.3}if(T.pending={how:P,delay:L,t:R},Math.abs(T.startedAt-R)<0.001)this.applyPending(T);if(P==="slide")this.later(L,()=>this.burst([T.pos[0],T.pos[1]+0.3,T.pos[2]],26,to,2.4,1.4,0.5,-5));if(!this.lessMotion&&(P==="climb"||P==="fall")&&M.to===i)this.focusOn(qe,qe[1],L+0.3);break}case"attack":{let T=this.monsters.get(M.playerId);if(!T)break;this.attackT.set(M.playerId,R);let P=0,L=0,V=0,I=0;for(let O of M.targets){let N=this.monsters.get(O);if(!N)continue;P+=N.pos[0],L+=N.pos[1],V+=N.pos[2],I++}if(!I)break;P/=I,L/=I,V/=I;let z=P-T.pos[0],U=V-T.pos[2],W=Math.hypot(z,U)||1;oe.set(T.lungeDir,z/W,0,U/W),T.lungeT=R;let G=0;for(let O of M.targets){let N=this.monsters.get(O);if(!N)continue;this.bolts.push({a:[T.pos[0]+T.lungeDir[0]*0.6,T.pos[1]+T.height*T.scale*0.6,T.pos[2]+T.lungeDir[2]*0.6],b:[N.pos[0],N.pos[1]+N.height*N.scale*0.55,N.pos[2]],t0:R+0.12+G*0.05,color:[T.accent[0]*0.5+0.5,T.accent[1]*0.5+0.3,T.accent[2]*0.5+0.4],seed:te(R*13+G)*100}),G++}if(!this.lessMotion)this.focusOn([(T.pos[0]+P)/2,0,(T.pos[2]+V)/2],(T.pos[1]+L)/2+1.2,0);break}case"damage":{let T=this.monsters.get(M.playerId);if(!T)break;let P=M.amount,L=M.playerId===this.viewerId,V=M.sourceId===M.playerId,I=T.moveEventT===R,z=()=>{let U=T.pos[1]+T.height*T.scale*0.55;if(T.flashT=this.time,this.camShake=Math.min(0.6,this.camShake+(this.lessMotion||V?0.04:0.12+P*0.04)),this.burst([T.pos[0],U,T.pos[2]],12+P*7,[1,0.35,0.2],4,0.9,0.45,-6),this.burst([T.pos[0],U,T.pos[2]],7,[1,0.9,0.5],2.5,0.6,0.3,-4),this.shakeNear(T.pos,5),this.waves.push({p:[T.pos[0],Tt(T.pos[0],T.pos[2])+0.06,T.pos[2]],t0:this.time,dur:0.55,size:3.5+P*0.6,color:[1,0.35,0.2,0.9]}),!this.lessMotion&&!V&&(L||P>=3))this.hit=Math.max(this.hit,L?1:0.45)};this.later(0.2,()=>{let U=I?T.moveT0+T.moveDur-this.time:0;if(U>0.02)this.later(U,z);else z()});break}case"heal":{let T=this.monsters.get(M.playerId);if(T)this.burst([T.pos[0],T.pos[1]+0.4,T.pos[2]],8+M.amount*4,[0.3,1,0.5],1,1.3,0.4,2);break}case"coins":{let T=this.monsters.get(M.playerId);if(T&&M.amount>0)this.burst([T.pos[0],T.pos[1]+T.height*T.scale,T.pos[2]],5+M.amount*3,[1,0.8,0.2],1.8,1,0.3,1);break}case"mana":{let T=this.monsters.get(M.playerId);if(T&&M.amount>0)this.burst([T.pos[0],T.pos[1]+0.6,T.pos[2]],7+M.amount*4,[0.25,0.55,1],1.1,1.3,0.35,2.4);break}case"vp":{let T=this.monsters.get(M.playerId);if(!T||M.amount<=0)break;this.burst([T.pos[0],T.pos[1]+T.height*T.scale+0.3,T.pos[2]],6+M.amount*4,[1,0.8,0.3],2,1.2,0.45,0.5);break}case"height":{let T=this.monsters.get(M.playerId);if(!T)break;let P=Cs[M.level]+st+0.1,L=Math.min(14,3+M.amount*3);for(let V=0;V<L;V++){let I=V/L*De+te(R+V)*0.4,z=Ye[M.level]||1.3;this.flyers.push({p0:[T.to[0]+Math.sin(I)*z,P,T.to[2]+Math.cos(I)*z],target:M.playerId,t0:R+0.1+V*0.07,dur:0.95,color:[1,0.82,0.3],size:0.85,lift:1.6})}this.waves.push({p:[T.to[0],P-0.05,T.to[2]],t0:R,dur:1.2,size:5+M.amount,color:[1,0.8,0.3,1]}),this.later(0.2,()=>this.burst([T.to[0],P,T.to[2]],16+M.amount*6,[1,0.85,0.35],1.6,1.2,0.4,1.5));break}case"yield":{let T=this.monsters.get(M.playerId);if(!T||M.jump)break;T.landT=R,this.waves.push({p:[T.pos[0],T.pos[1]+0.05,T.pos[2]],t0:R,dur:0.7,size:5,color:[T.main[0],T.main[1],T.main[2],1]}),this.burst([T.pos[0],T.pos[1]+0.2,T.pos[2]],18,to,2.4,0.8,0.45,-3),this.camShake=Math.min(0.5,this.camShake+(this.lessMotion?0.04:0.2));break}case"ko":{let T=this.monsters.get(M.playerId);if(!T)break;T.koT=R,this.later(0.2,()=>{let P=T.pos;this.burst([P[0],P[1]+1,P[2]],50,[0.6,0.5,0.75],3.5,1.5,0.7,1),this.burst([P[0],P[1]+2.4,P[2]],16,[1,0.9,0.4],2,1.3,0.4,-1),this.waves.push({p:[P[0],Tt(P[0],P[2])+0.06,P[2]],t0:this.time,dur:1.1,size:7,color:[0.8,0.6,1,0.8]}),this.camShake=Math.min(0.9,this.camShake+(this.lessMotion?0.2:0.6)),this.shakeNear(P,7)}),this.later(0.3,()=>{if(T.moveEventT>=T.koT||this.time-T.startedAt<0.4)return;oe.copy(T.from,T.to),T.startedAt=this.time,T.landed=!1,this.setStyle(T,"fall",0),T.moveDur=1,T.arc=1.6,T.flips=this.lessMotion?0:1});break}case"ability":{let T=this.monsters.get(M.playerId);if(!T)break;let P=Es[M.abilityId]??T.accent;if(!this.lessMotion)this.focusOn(T.pos,T.pos[1]+1.8,0);let L=T.height*T.scale;for(let I=0;I<5;I++){let z=I/5*De;this.bolts.push({a:[T.pos[0]+Math.cos(z)*4,T.pos[1]+13+I,T.pos[2]+Math.sin(z)*4],b:[T.pos[0],T.pos[1]+L,T.pos[2]],t0:R+I*0.07,color:[P[0]*0.6+0.4,P[1]*0.6+0.4,P[2]*0.6+0.4],seed:te(R*7+I)*100})}let V=M.targetId?this.monsters.get(M.targetId):void 0;if(V)this.bolts.push({a:[T.pos[0],T.pos[1]+L*0.7,T.pos[2]],b:[V.pos[0],V.pos[1]+V.height*V.scale*0.6,V.pos[2]],t0:R+0.3,color:[P[0]*0.7+0.3,P[1]*0.7+0.3,P[2]*0.7+0.3],seed:te(R*11)*100});this.later(0.3,()=>{if(this.burst([T.pos[0],T.pos[1]+L*0.7,T.pos[2]],70,P,5,1.3,0.6,-1),this.burst([T.pos[0],T.pos[1]+L*0.7,T.pos[2]],30,T.accent,3.5,1.1,0.45,1.5),this.waves.push({p:[T.pos[0],T.pos[1]+0.06,T.pos[2]],t0:this.time,dur:1.1,size:11,color:[P[0],P[1],P[2],1]}),M.abilityId==="roar")for(let I=1;I<3;I++)this.later(I*0.18,()=>this.waves.push({p:[T.pos[0],T.pos[1]+0.06,T.pos[2]],t0:this.time,dur:1.2,size:13+I*4,color:[P[0],P[1],P[2],0.8]}));if(M.abilityId==="spring")this.burst([T.pos[0],T.pos[1]+0.2,T.pos[2]],40,[0.4,0.8,1],2.2,1.6,0.4,-3);this.camShake=Math.min(0.8,this.camShake+(this.lessMotion?0.1:0.4)),this.shakeNear(T.pos,6)});break}case"combo":{let T=this.monsters.get(M.playerId);if(!T)break;let P=T.pos[1]+T.height*T.scale+0.6;this.burst([T.pos[0],P,T.pos[2]],26+M.count*8,[1,0.35,0.35],3.5,1.2,0.5,-1),this.burst([T.pos[0],P,T.pos[2]],10+M.count*4,[0.85,0.9,1],2.5,0.9,0.35,-1);break}case"buy":{let T=this.monsters.get(M.playerId);if(!T)break;for(let P=0;P<5;P++){let L=P/5*De;this.flyers.push({p0:[T.pos[0]+Math.sin(L)*2.2,T.pos[1]+6+P*0.3,T.pos[2]+Math.cos(L)*2.2],target:M.playerId,t0:R+P*0.06,dur:0.7,color:[0.55,0.85,1],size:0.8,lift:0.5})}this.later(0.7,()=>this.burst([T.pos[0],T.pos[1]+T.height*T.scale*0.8,T.pos[2]],22,[0.5,0.85,1],2.2,0.9,0.35,-1));break}case"news":{let T=[ye[0],ye[1]+Xe+0.4,ye[2]];for(let P=0;P<5;P++)this.later(P*0.12,()=>this.burst(T,26,oo[P],4.5,1.6,0.45,-3));break}case"win":for(let T of M.playerIds){let P=this.monsters.get(T);if(!P)continue;if(!this.lessMotion)this.focusOn(P.pos,P.pos[1]+1.5,0);for(let L=0;L<6;L++)this.later(L*0.3,()=>{let V=oo[L%oo.length];this.burst([P.pos[0]+(te(this.time+L)-0.5)*6,P.pos[1]+6+te(L*3.3)*3,P.pos[2]+(te(this.time*3+L)-0.5)*6],70,V,7,1.6,0.6,-3)})}break}}focusOn(M,R,T){this.focus={p:[M[0],R,M[2]],t0:this.time+T}}colorsOf(M){return M&&this.colors.get(M)||Jt}flagColors(){return this.time-this.flagT0<0.55?this.flagFrom:this.flagTo}later(M,R){this.timers.push({at:this.time+M,fn:R})}burst(M,R,T,P,L,V,I){let z=this.quality==="high"?zt:zt/2;for(let U=0;U<R;U++){let W=Math.random()*Math.PI*2,G=Math.acos(Math.random()*2-1),O=P*(0.4+Math.random()*0.6),N={p:[M[0],M[1],M[2]],v:[Math.sin(G)*Math.cos(W)*O,Math.abs(Math.cos(G))*O*0.8+(I>0?O*0.3:0),Math.sin(G)*Math.sin(W)*O],c:[T[0]*(0.8+Math.random()*0.2),T[1]*(0.8+Math.random()*0.2),T[2]*(0.8+Math.random()*0.2)],life:L*(0.6+Math.random()*0.4),max:L,size:V*(0.6+Math.random()*0.8),grav:I};if(this.particles.length>=z)this.particles[Math.floor(Math.random()*this.particles.length)]=N;else this.particles.push(N)}}shakeNear(M,R){for(let T of this.buildings)if(Math.hypot(T.x-M[0],T.z-M[2])<R)T.shakeT=this.time,this.buildingsDirty=!0;for(let T of this.cottages)if(Math.hypot(T.x-M[0],T.z-M[2])<R)T.shakeT=this.time,this.housesDirty=!0}resize(M,R,T){this.width=M,this.height=R,this.dpr=T;let P=Math.max(1,Math.floor(M*T)),L=Math.max(1,Math.floor(R*T));if(this.canvas.width===P&&this.canvas.height===L&&(this.pipe||this.direct))return;this.canvas.width=P,this.canvas.height=L,this.rebuildTargets()}touch(){this.yaw+=this.drift[0],this.pitch=de(this.pitch+this.drift[1],0.2,1.3),this.drift=[0,0],this.lastInput=this.time,this.pitchAuto=!1}orbit(M,R){this.touch(),this.yaw-=M*0.008,this.pitch=de(this.pitch+R*0.006,0.2,1.3)}zoom(M){this.touch(),this.zoomK=de(this.zoomK*M,0.45,1.5)}rayAt(M,R){let T=M/this.width*2-1,P=1-R/this.height*2,L=ce.transformPoint(this.invViewProj,[T,P,-1]),V=ce.transformPoint(this.invViewProj,[T,P,1]),I=[L[0]/L[3],L[1]/L[3],L[2]/L[3]],z=[V[0]/V[3],V[1]/V[3],V[2]/V[3]];return{o:I,d:qs([z[0]-I[0],z[1]-I[1],z[2]-I[2]])}}pickMonster(M,R){let{o:T,d:P}=this.rayAt(M,R),L=null,V=1/0;for(let I of this.monsters.values()){let z=I.height*I.scale,U=Ys(T,P,[I.pos[0],I.pos[1]+z*0.5,I.pos[2]],Math.max(0.8,z*0.55));if(U!==null&&U<V)V=U,L=I.id}return L}pickDie(M,R){let T=this.diceRect;if(!this.diceOk||M<T.x||M>T.x+T.w||R<T.y||R>T.y+T.h)return-1;let P=-1,L=1/0;for(let V=0;V<this.dice.length;V++){let I=this.dice[V],z=Math.hypot(I.sx-M,(I.sy-R)*0.5);if(z<L)L=z,P=V}return L<this.dieStepPx*0.8?P:-1}start(){let M=(R)=>{this.raf=requestAnimationFrame(M);let T=R/1000,P=this.last?T-this.last:0.016666666666666666,L=Math.min(0.05,P);this.last=T,this.time+=L,this.adaptResolution(P),this.update(L),this.render()};this.raf=requestAnimationFrame(M)}adaptResolution(M){if(M>0.5)return;if(this.frameEma=this.frameEma*0.92+M*0.08,this.direct||this.time-this.lastScaleCheck<1.5)return;this.lastScaleCheck=this.time;let R=0.5,T=this.quality==="high"?1:Math.min(1,1.3/Math.max(1,this.dpr)),P=this.renderScale;if(this.frameEma>0.02631578947368421)P=Math.max(R,this.renderScale*0.85);else if(this.frameEma<0.01818181818181818)P=Math.min(T,this.renderScale*1.12);if(Math.abs(P-this.renderScale)>0.01)this.renderScale=P,this.rebuildTargets()}update(M){let R=this.time;for(let z=this.timers.length-1;z>=0;z--)if(this.timers[z].at<=R){let{fn:U}=this.timers[z];this.timers[z]=this.timers[this.timers.length-1],this.timers.pop(),U()}let T=this.yaw+this.drift[0];for(let z of this.monsters.values())this.updateMonster(z,R,M,T);for(let z of this.dice){let U=Math.min(1,M*12);z.pos[0]+=(z.target[0]-z.pos[0])*U,z.pos[2]+=(z.target[2]-z.pos[2])*U}for(let z=this.flyers.length-1;z>=0;z--){let U=this.flyers[z];if(R-U.t0<U.dur)continue;let W=this.monsters.get(U.target);if(W)this.burst([W.pos[0],W.pos[1]+W.height*W.scale*0.8,W.pos[2]],6,U.color,1.6,0.6,0.35,-1);this.flyers[z]=this.flyers[this.flyers.length-1],this.flyers.pop()}for(let z=this.particles.length-1;z>=0;z--){let U=this.particles[z];if(U.life-=M,U.life<=0){this.particles[z]=this.particles[this.particles.length-1],this.particles.pop();continue}U.v[1]+=U.grav*M,U.v[0]*=1-M*1.5,U.v[2]*=1-M*1.5,U.p[0]+=U.v[0]*M,U.p[1]=Math.max(0.05,U.p[1]+U.v[1]*M),U.p[2]+=U.v[2]*M}let P=0;for(let z=0;z<this.bolts.length;z++)if(R-this.bolts[z].t0<0.55)this.bolts[P++]=this.bolts[z];this.bolts.length=P,P=0;for(let z=0;z<this.waves.length;z++)if(R-this.waves[z].t0<this.waves[z].dur)this.waves[P++]=this.waves[z];if(this.waves.length=P,this.camShake=Math.max(0,this.camShake-M*1.8),this.hit=Math.max(0,this.hit-M*2.2),this.flagFlash=Math.max(0,this.flagFlash-M*1.2),this.beacon+=((this.peakHolder&&R>this.flagT0+0.9?1:0)-this.beacon)*Math.min(1,M*2.5),this.focus&&R-this.focus.t0>2.2)this.focus=null;let L=this.insets,V=this.insetsTo,I=Math.min(1,M*4);L.top+=(V.top-L.top)*I,L.right+=(V.right-L.right)*I,L.bottom+=(V.bottom-L.bottom)*I,L.left+=(V.left-L.left)*I}updateMonster(M,R,T,P){let L=de((R-M.moveT0)/M.moveDur,0,1),V=R>=M.moveT0&&L<1,I=M.pos;if(M.how==="climb"&&L<1){let O=L<0.5,N=O?L*2:(L-0.5)*2,H=pt(N),q=O?M.from:M.mid,j=O?M.mid:M.to,Y=M.arc*(O?0.8:1.25);I[0]=Re(q[0],j[0],H),I[1]=Re(q[1],j[1],H)+Math.sin(N*Math.PI)*Y,I[2]=Re(q[2],j[2],H)}else{let O=M.how==="slide"?L*L*(3-2*L):pt(L);I[0]=Re(M.from[0],M.to[0],O),I[1]=Re(M.from[1],M.to[1],O)+(L<1?Math.sin(L*Math.PI)*M.arc:0),I[2]=Re(M.from[2],M.to[2],O)}if(V){let O=Tt(I[0],I[2]);if(I[1]<O)I[1]=O}if(L>=1&&!M.landed){M.landed=!0,M.landT=R;let O=M.how!=="walk";if(M.how==="fall")M.dizzyT=R;if(O)this.burst([M.to[0],M.to[1]+0.1,M.to[2]],22,[0.6,0.55,0.7],2.8,0.8,0.55,-2),this.camShake=Math.min(0.7,this.camShake+(this.lessMotion?0.05:0.12+M.flips*0.1)),this.shakeNear(M.to,5),this.waves.push({p:[M.to[0],M.to[1]+0.06,M.to[2]],t0:R,dur:0.8,size:5.5,color:[M.accent[0],M.accent[1],M.accent[2],0.9]})}M.scale+=(M.scaleTo-M.scale)*Math.min(1,T*4);let U=Math.atan2(I[0],I[2])-P;while(U>Math.PI)U-=De;while(U<-Math.PI)U+=De;let W=P+de(U,-0.6,0.6)*0.4;if(V&&Math.hypot(M.to[0]-M.from[0],M.to[2]-M.from[2])>0.5)W=Math.atan2(M.to[0]-M.from[0],M.to[2]-M.from[2]);if(R-M.lungeT<0.7)W=Math.atan2(M.lungeDir[0],M.lungeDir[2]);let G=W-M.yaw;while(G>Math.PI)G-=De;while(G<-Math.PI)G+=De;M.yaw+=G*Math.min(1,T*6)}setCommon(M,R=!0){M.vec3("uSunDir",Mt),M.vec3("uSunColor",Rs),M.vec3("uSkyColor",Ss),M.vec3("uGroundColor",As),M.vec3("uFogColor",Ps),M.float("uFogDensity",0.011),M.float("uTime",this.time),M.mat4("uShadowVP",this.lightVP),M.float("uShadowOn",R&&this.shadowActive?1:0),M.float("uShadowTexel",1/es)}get shadowActive(){return this.quality==="high"&&!!this.shadow&&!this.direct}computeCamera(){let M=Math.max(1,this.width),R=Math.max(1,this.height),T=M/R;if(this.pitchAuto)this.pitch=T<0.8?0.6:0.5;let P=de(2*Math.atan(Math.tan(21*Math.PI/180)/T),46*Math.PI/180,72*Math.PI/180),L=1/Math.tan(P/2),V=L/T,I=L,z=this.camShake*this.camShake,U=this.time-this.lastInput;if(!this.lessMotion){let Fe=de((U-4)/4,0,1);this.drift=[Math.sin(this.time*0.11)*0.09*Fe,Math.sin(this.time*0.083+1)*0.03*Fe]}else this.drift=[0,0];let W=this.yaw+this.drift[0],G=de(this.pitch+this.drift[1],0.2,1.3),O=this.insets,N=O.left+6,H=M-O.right-6,q=O.top+14,j=R-O.bottom-10;if(H-N<M*0.3)N=0,H=M;if(j-q<R*0.25)q=0,j=R;let Y=N/M*2-1,Z=H/M*2-1,J=1-j/R*2,ae=1-q/R*2,re=(Z-Y)/2,ie=(ae-J)/2,X=Math.cos(G),se=-Math.sin(W)*X,ee=-Math.sin(G),le=-Math.cos(W)*X,me=Math.cos(W),ne=-Math.sin(W),he=-ne*ee,ge=ne*se-me*le,pe=me*ee,ve=this.camTarget;oe.set(ve,0,2.6,1.8);let Pe=this.fitPoints,_e=this.fitProj,je=Pe.length/3;for(let Fe=0;Fe<je;Fe++){let Ve=Pe[Fe*3]-ve[0],ze=Pe[Fe*3+1]-ve[1],Ze=Pe[Fe*3+2]-ve[2];_e[Fe*3]=Ve*me+Ze*ne,_e[Fe*3+1]=Ve*he+ze*ge+Ze*pe,_e[Fe*3+2]=Ve*se+ze*ee+Ze*le}let Ne=this.fitExt,Qe=6,$e=260;if(je){for(let Fe=0;Fe<18;Fe++){let Ve=(Qe+$e)/2;if(this.fitExtent(Ve,je,V,I,re,ie))$e=Ve;else Qe=Ve}this.fitExtent($e,je,V,I,re,ie)}else Ne[0]=Ne[2]=-1,Ne[1]=Ne[3]=1;let Et=$e,it=(Y+Z)/2-(Ne[0]+Ne[1])/2,at=(J+ae)/2-(Ne[2]+Ne[3])/2,rt=Et*this.zoomK,Rt=Math.sin(this.time*47)*z*0.3,Gt=Math.sin(this.time*53)*z*0.3,Ke=ve[0]+Rt,Oe=ve[1]+Gt,Ge=ve[2];if(this.focus){let Fe=de((this.time-this.focus.t0)/2.2,0,1),Ve=Fe>0?Math.sin(Fe*Math.PI)**2*0.28:0;Ke=Re(Ke,this.focus.p[0],Ve),Oe=Re(Oe,this.focus.p[1],Ve),Ge=Re(Ge,this.focus.p[2],Ve),rt*=1-Ve*0.3}let nt=this.camPos;nt[0]=Ke-se*rt,nt[1]=Oe-ee*rt,nt[2]=Ge-le*rt;let St=this.v3;oe.set(St,Ke,Oe,Ge),ce.perspective(this.proj,P,T,0.5,260),this.proj[8]=-it,this.proj[9]=-at,ce.lookAt(this.view,nt,St,It),ce.multiply(this.viewProj,this.proj,this.view),ce.invert(this.invViewProj,this.viewProj)}rgba(M,R,T,P){let L=this.c4;return L[0]=M,L[1]=R,L[2]=T,L[3]=P,L}fitExtent(M,R,T,P,L,V){let I=this.fitProj,z=this.fitExt,U=1/0,W=-1/0,G=1/0,O=-1/0;for(let N=0;N<R;N++){let H=I[N*3+2]+M;if(H<1)return!1;let q=T*I[N*3]/H,j=P*I[N*3+1]/H;if(q<U)U=q;if(q>W)W=q;if(j<G)G=j;if(j>O)O=j}return z[0]=U,z[1]=W,z[2]=G,z[3]=O,W-U<=2*L&&O-G<=2*V}uploadInstances(){let M=this.time;if(this.buildingsDirty){let T=!1,P=this.buildingData;for(let L=0;L<this.buildings.length;L++){let V=this.buildings[L],I=de(1-(M-V.shakeT)/0.5,0,1);if(I>0)T=!0;let z=L*12;P[z]=V.x,P[z+1]=0,P[z+2]=V.z,P[z+3]=0,P[z+4]=V.w,P[z+5]=V.h,P[z+6]=V.d,P[z+7]=V.seed,P[z+8]=V.color[0],P[z+9]=V.color[1],P[z+10]=V.color[2],P[z+11]=I}this.buildingMesh.setInstances(P),this.buildingsDirty=T}if(this.housesDirty){let T=!1,P=this.houseData;for(let L=0;L<this.cottages.length;L++){let V=de(1-(M-this.cottages[L].shakeT)/0.5,0,1);if(V>0)T=!0;P[L*16+11]=V}this.houseMesh.setInstances(P),this.housesDirty=T}let R=this.carData;for(let T=0;T<this.cars.length;T++){let P=this.cars[T],L=80,V=((P.phase+M*P.speed*P.dir)%80+80)%80-40,I=P.axis===0?V:P.line+P.lane,z=P.axis===0?P.line+P.lane:V,U=Math.hypot(I,z),W=U>19.2&&U<40&&z>Q.waterZ+0.6?1:0,G=P.axis===0?P.dir>0?Math.PI/2:-Math.PI/2:P.dir>0?0:Math.PI,O=T*8;R[O]=I,R[O+1]=0.01,R[O+2]=z,R[O+3]=G,R[O+4]=P.color[0],R[O+5]=P.color[1],R[O+6]=P.color[2],R[O+7]=W}this.carMesh.setInstances(R)}renderShadowMap(){let M=this.gl,R=this.shadow,T=this.v0;oe.set(T,0,2,0);let P=this.v1;oe.set(P,T[0]+Mt[0]*70,T[1]+Mt[1]*70,T[2]+Mt[2]*70),ce.lookAt(this.tmp,P,T,It),ce.ortho(this.tmp2,-Dt,Dt,-Dt,Dt,1,150),ce.multiply(this.lightVP,this.tmp2,this.tmp),M.activeTexture(M.TEXTURE1),M.bindTexture(M.TEXTURE_2D,this.dummyShadow.tex),M.activeTexture(M.TEXTURE0),M.bindFramebuffer(M.FRAMEBUFFER,R.fb),M.viewport(0,0,R.size,R.size),M.disable(M.SCISSOR_TEST),M.enable(M.DEPTH_TEST),M.depthMask(!0),M.disable(M.BLEND),M.clear(M.DEPTH_BUFFER_BIT),M.enable(M.CULL_FACE),M.cullFace(M.FRONT),M.enable(M.POLYGON_OFFSET_FILL),M.polygonOffset(1.5,3);let L=this.progs.depthInst.use();L.mat4("uLightVP",this.lightVP),L.float("uTime",this.time),L.float("uShake",0.08),this.buildingMesh.draw(),L.float("uShake",0.06),this.houseMesh.draw(),M.disable(M.CULL_FACE),this.progs.depthProp.use().mat4("uLightVP",this.lightVP);for(let z of eo)this.propMeshes[z].draw();let I=this.progs.depth.use();I.mat4("uLightVP",this.lightVP),I.mat4("uModel",Nt),this.meshes.hill.draw(),M.enable(M.CULL_FACE);for(let z of this.monsters.values())this.drawMonster(I,z,!0);M.disable(M.POLYGON_OFFSET_FILL),M.cullFace(M.BACK)}render(){let M=this.gl;if(this.computeCamera(),this.uploadInstances(),this.shadowActive)this.renderShadowMap();M.activeTexture(M.TEXTURE1),M.bindTexture(M.TEXTURE_2D,this.shadowActive?this.shadow.tex:this.dummyShadow.tex),M.activeTexture(M.TEXTURE0);let R=this.direct?null:this.pipe,T=this.canvas.height,P=this.canvas.width;if(R)M.bindFramebuffer(M.FRAMEBUFFER,R.ms?R.ms.fb:R.scene.fb),M.viewport(0,0,R.scene.w,R.scene.h),T=R.scene.h,P=R.scene.w;else M.bindFramebuffer(M.FRAMEBUFFER,null),M.viewport(0,0,this.canvas.width,this.canvas.height);M.disable(M.SCISSOR_TEST),M.clearColor(0.07,0.05,0.14,1),M.clear(M.COLOR_BUFFER_BIT|M.DEPTH_BUFFER_BIT),M.enable(M.DEPTH_TEST),M.enable(M.CULL_FACE),M.cullFace(M.BACK),M.disable(M.BLEND),M.depthMask(!1);let L=this.progs.sky.use();L.mat4("uInvViewProj",this.invViewProj),L.vec3("uSunDir",Mt),L.float("uTime",this.time),M.bindVertexArray(this.emptyVao),M.drawArrays(M.TRIANGLES,0,3),M.depthMask(!0);let V=this.progs.obj.use();this.setCommon(V),V.mat4("uViewProj",this.viewProj),V.vec3("uCamPos",this.camPos),V.float("uAlpha",1),V.float("uFlash",0),V.float("uRim",0),V.vec3("uEmissive",Fs),V.int("uMode",1),V.vec3("uColor",Ns),V.mat4("uModel",Nt),this.meshes.ground.draw(),V.int("uMode",2),V.mat4("uModel",Us),this.meshes.water.draw(),V.int("uMode",5),V.mat4("uModel",Nt),this.meshes.hill.draw();let I=this.progs.bld.use();this.setCommon(I),I.mat4("uViewProj",this.viewProj),I.vec3("uCamPos",this.camPos),this.buildingMesh.draw();let z=this.progs.house.use();this.setCommon(z),z.mat4("uViewProj",this.viewProj),z.vec3("uCamPos",this.camPos),this.houseMesh.draw();let U=this.progs.prop.use();this.setCommon(U),U.mat4("uViewProj",this.viewProj),U.vec3("uCamPos",this.camPos);for(let N of eo)this.propMeshes[N].draw();let W=this.progs.car.use();this.setCommon(W),W.mat4("uViewProj",this.viewProj),W.vec3("uCamPos",this.camPos),this.carMesh.draw(),V.use(),this.drawFlag(V),V.int("uMode",0);for(let N of this.monsters.values())this.drawMonster(V,N,!1);M.enable(M.BLEND),M.blendFunc(M.ONE,M.ONE_MINUS_SRC_ALPHA),M.depthMask(!1);let G=this.progs.decal.use();G.mat4("uViewProj",this.viewProj),G.float("uTime",this.time);let O=this.shadowActive?0.3:0.5;for(let N of this.monsters.values()){let H=Tt(N.pos[0],N.pos[2])+(N.level>u&&N.landed?st:0),q=Math.max(0,N.pos[1]-H),j=N.height*N.scale;G.int("uMode",0),G.vec4("uColor",this.rgba(0,0,0,de(O-q*0.08,0.1,O)));let Y=Math.max(0.8,(1.5+j*0.35)*N.scale-Math.min(1,q*0.2));if(G.mat4("uModel",ce.fromTRS(this.tmp,oe.set(this.v0,N.pos[0],H+0.02,N.pos[2]),Ae,oe.set(this.v1,Y,1,Y))),this.meshes.quad.draw(),N.current&&N.landed){G.int("uMode",1),G.vec4("uColor",this.rgba(N.main[0]*1.6,N.main[1]*1.6,N.main[2]*1.6,1));let Z=N.level===u?3.3*N.scale:Ye[N.level]*2.35;G.mat4("uModel",ce.fromTRS(this.tmp,oe.set(this.v0,N.to[0],N.to[1]+0.03,N.to[2]),Ae,oe.set(this.v1,Z,1,Z))),this.meshes.quad.draw()}}this.drawPlaces(G),G.int("uMode",2);for(let N of this.waves){let H=de((this.time-N.t0)/N.dur,0,1);G.float("uProgress",xt(H)),G.vec4("uColor",this.rgba(N.color[0]*1.5,N.color[1]*1.5,N.color[2]*1.5,N.color[3])),G.mat4("uModel",ce.fromTRS(this.tmp,N.p,Ae,oe.set(this.v1,N.size,1,N.size))),this.meshes.quad.draw()}if(M.blendFunc(M.ONE,M.ONE),M.disable(M.CULL_FACE),this.drawBeams(),this.drawBolts(),this.drawParticles(this.viewProj,T),M.enable(M.CULL_FACE),M.depthMask(!0),M.disable(M.BLEND),this.emitLabels(),this.drawDice(P/Math.max(1,this.width),T),R){if(R.ms)R.ms.resolveInto(R.scene);let N=this.quality==="high";if(N)this.bloom(R);this.composite(R,N)}}drawPlaces(M){let R=[!1,!1],T=null;for(let L of this.monsters.values())if(L.level===f){let V=this.ledgeSlot.get(L.id);if(V!==void 0)R[V]=!0}else if(L.level===i)T=L;let P=this.v2;for(let L=0;L<2;L++)Ut(f,L,this.seats,P),this.drawPlace(M,P,Ye[1],R[L]?null:[1,0.85,0.5]);this.drawPlace(M,qe,Ye[2],T?null:[1,0.85,0.5])}drawPlace(M,R,T,P){if(!P)return;M.int("uMode",3),M.vec4("uColor",this.rgba(P[0]*1.3,P[1]*1.3,P[2]*1.3,0.85));let L=T*2.3;M.mat4("uModel",ce.fromTRS(this.tmp,oe.set(this.v0,R[0],R[1]+0.02,R[2]),Ae,oe.set(this.v1,L,1,L))),this.meshes.quad.draw()}fullscreen(M){let R=this.gl;if(M)R.bindFramebuffer(R.FRAMEBUFFER,M.fb),R.viewport(0,0,M.w,M.h);else R.bindFramebuffer(R.FRAMEBUFFER,null),R.viewport(0,0,this.canvas.width,this.canvas.height);R.drawArrays(R.TRIANGLES,0,3)}bloom(M){let R=this.gl;R.disable(R.DEPTH_TEST),R.disable(R.BLEND),R.disable(R.CULL_FACE),R.disable(R.SCISSOR_TEST),R.bindVertexArray(this.emptyVao),R.activeTexture(R.TEXTURE0);let T=this.progs.bright.use();T.int("uTex",0),R.bindTexture(R.TEXTURE_2D,M.scene.tex),T.vec2("uTexel",1/M.scene.w,1/M.scene.h),T.float("uThreshold",this.fmt.hdr?0.92:0.72),this.fullscreen(M.bloomA);let P=this.progs.blur.use();P.int("uTex",0);for(let L=0;L<ts;L++)R.bindTexture(R.TEXTURE_2D,M.bloomA.tex),P.vec2("uDir",1/M.bloomA.w,0),this.fullscreen(M.bloomB),R.bindTexture(R.TEXTURE_2D,M.bloomB.tex),P.vec2("uDir",0,1/M.bloomA.h),this.fullscreen(M.bloomA);T.use(),R.bindTexture(R.TEXTURE_2D,M.bloomA.tex),T.vec2("uTexel",1/M.bloomA.w,1/M.bloomA.h),T.float("uThreshold",-1),this.fullscreen(M.bloomC),P.use();for(let L=0;L<ts;L++)R.bindTexture(R.TEXTURE_2D,M.bloomC.tex),P.vec2("uDir",1/M.bloomC.w,0),this.fullscreen(M.bloomD),R.bindTexture(R.TEXTURE_2D,M.bloomD.tex),P.vec2("uDir",0,1/M.bloomC.h),this.fullscreen(M.bloomC)}composite(M,R){let T=this.gl;T.disable(T.DEPTH_TEST),T.disable(T.BLEND),T.disable(T.CULL_FACE),T.disable(T.SCISSOR_TEST),T.bindVertexArray(this.emptyVao);let P=this.progs.composite.use();T.activeTexture(T.TEXTURE0),T.bindTexture(T.TEXTURE_2D,M.scene.tex),T.activeTexture(T.TEXTURE2),T.bindTexture(T.TEXTURE_2D,M.bloomA.tex),T.activeTexture(T.TEXTURE3),T.bindTexture(T.TEXTURE_2D,M.bloomC.tex),T.activeTexture(T.TEXTURE0),P.vec2("uTexel",1/M.scene.w,1/M.scene.h),P.vec2("uRes",this.canvas.width,this.canvas.height),P.float("uBloom",R?1:0),P.float("uHit",this.hit),P.float("uTime",this.time),this.fullscreen(null),T.enable(T.DEPTH_TEST)}drawMonster(M,R,T){let P=this.time,L=de((P-R.moveT0)/R.moveDur,0,1),V=P>=R.moveT0&&L<1,I=V&&R.flips>0,z=!V,U=z?Math.sin(P*2.4+R.seed)*0.03:0,W=z&&R.current?Math.abs(Math.sin(P*5+R.seed))*0.1:0,G=de((P-R.lungeT)/0.6,0,1),O=G<1?Math.sin(G*Math.PI)*0.9:0,N=de(1-(P-R.flashT)/0.45,0,1)*(P>=R.flashT?1:0),H=N*Math.sin(P*70)*0.1,q=de((P-R.landT)/0.3,0,1),j=!V&&P<R.moveT0&&R.how==="climb"?de(1-(R.moveT0-P)/0.35,0,1)*0.12:0,Y=1+U-(q<1?Math.sin(q*Math.PI)*0.16:0)-j,Z=R.scale,J=oe.set(this.v0,R.pos[0]+R.lungeDir[0]*O+H,R.pos[1]+W,R.pos[2]+R.lungeDir[2]*O);ue.setAxisAngle(this.q0,0,1,0,R.yaw);let ae=I?-pt(L)*R.flips*De:0;if(V&&R.how==="slide")ae=0.55*Math.sin(L*Math.PI);ue.setAxisAngle(this.q1,1,0,0,ae),ue.mulInto(this.q0,this.q0,this.q1);let re=ce.fromTRS(this.tmp2,J,this.q0,oe.set(this.v1,Z/Math.sqrt(Y),Z*Y,Z/Math.sqrt(Y))),ie=V&&R.how==="fall"?0.55:0;if(!T)M.float("uRim",0.55),M.float("uFlash",N*0.7);let X=Math.sin(P*3+R.seed)*0.25+(G<1?Math.sin(G*Math.PI)*1.2:0)+(V&&R.how==="climb"?Math.sin(P*18)*0.8:0),se=Math.sin(P*1.7+R.seed)*0.04;for(let ee=0;ee<R.parts.length;ee++){let le=R.parts[ee],me=le.anim,ne=R.partQ[ee],he=le.pos;if(me==="armL"||me==="armR")ue.setAxisAngle(this.q2,1,0,0,me==="armL"?-X:X),ne=ue.mulInto(this.q1,this.q2,ne);else if(me==="tail")ue.setAxisAngle(this.q2,0,1,0,Math.sin(P*2.2+R.seed)*0.35),ne=ue.mulInto(this.q1,this.q2,ne);else if(me==="wingL"||me==="wingR")ue.setAxisAngle(this.q2,0,1,0,(me==="wingL"?1:-1)*Math.sin(P*4+R.seed)*0.25),ne=ue.mulInto(this.q1,this.q2,ne);else if(me==="head")he=oe.set(this.v2,le.pos[0],le.pos[1]+se,le.pos[2]);let ge=ce.fromTRS(this.tmp3,he,ne,le.scale),pe=ce.multiply(this.tmp,re,ge);if(M.mat4("uModel",pe),!T){let ve=R.partColor[ee],Pe=this.v3;if(ie){let _e=(ve[0]+ve[1]+ve[2])/3;oe.set(Pe,Re(ve[0],_e*0.6,ie),Re(ve[1],_e*0.6,ie),Re(ve[2],_e*0.6,ie))}else oe.copy(Pe,ve);if(M.vec3("uColor",Pe),le.glow&&!ie)M.vec3("uEmissive",oe.set(this.v2,Pe[0]*1.6,Pe[1]*1.6,Pe[2]*1.6));else M.vec3("uEmissive",oe.set(this.v2,0,0,0))}this.meshes[R.partMesh[ee]].draw()}if(!T)M.float("uFlash",0),M.vec3("uEmissive",oe.set(this.v2,0,0,0))}drawFlag(M){let R=this.gl,T=this.time;R.disable(R.CULL_FACE),M.int("uMode",4),M.float("uRim",0.15);let P=1,L=this.flagColors(),V=T-this.flagT0;if(V>=0&&V<1.3)if(V<0.45)P=1-pt(V/0.45)*0.82;else if(V<0.65)P=0.18;else P=0.18+xt((V-0.65)/0.65)*0.82;let I=ye[1]+0.9+(Xe-1.7)*P,z=this.yaw+this.drift[0];ue.setAxisAngle(this.q0,0,1,0,z+Math.sin(T*0.6)*0.2),M.mat4("uModel",ce.fromTRS(this.tmp,oe.set(this.v0,ye[0],I,ye[2]),this.q0,oe.set(this.v1,2.5,1.5,1)));let U=L[0]===bs;M.vec3("uColor",L[0]),M.vec3("uGlow",U?zs:L[1]),M.float("uSeed",1.3),M.float("uWave",U?0.35:1);let W=0.14+this.flagFlash*0.8;M.vec3("uEmissive",oe.set(this.v2,L[0][0]*W,L[0][1]*W,L[0][2]*W)),this.meshes.cloth.draw(),M.vec3("uEmissive",oe.set(this.v2,0,0,0)),M.float("uRim",0),R.enable(R.CULL_FACE)}drawBeams(){let M=this.progs.beam.use();M.mat4("uViewProj",this.viewProj),M.vec3("uCamPos",this.camPos);let R=this.time;for(let T=0;T<ns.length;T++){let P=ns[T],L=P.a0+R*P.speed+Math.sin(R*0.3+T)*0.6,V=1.05+0.22*Math.sin(R*0.4+T*1.7),I=oe.set(this.v0,Math.cos(V)*Math.cos(L),Math.sin(V),Math.cos(V)*Math.sin(L)),z=Eo(this.q0,It,I);M.mat4("uModel",ce.fromTRS(this.tmp,P.p,z,Ls)),M.vec3("uColor",P.color),M.float("uIntensity",this.quality==="high"?0.26:0.2),this.meshes.beam.draw()}if(this.beacon>0.01){let T=this.flagColors()[0],P=0.8+0.2*Math.sin(R*2.2);M.mat4("uModel",ce.fromTRS(this.tmp,oe.set(this.v0,ye[0],ye[1]+Xe+0.3,ye[2]),Ae,oe.set(this.v1,1,34,1))),M.vec3("uColor",oe.set(this.v2,T[0]*0.8+0.2,T[1]*0.8+0.2,T[2]*0.8+0.2)),M.float("uIntensity",1.3*this.beacon*P),this.meshes.beam.draw()}}drawBolts(){let M=this.gl;if(!this.bolts.length)return;let R=this.boltData,T=this.boltPts,P=Qt,L=this.time,V=Math.floor(L*18),I=this.progs.bolt.use();I.mat4("uViewProj",this.viewProj),M.bindVertexArray(this.boltVao),M.bindBuffer(M.ARRAY_BUFFER,this.boltBuf);for(let z of this.bolts){let U=L-z.t0;if(U<0)continue;let W=de(U/0.1,0,1),G=U<0.1?1:de(1-(U-0.1)/0.45,0,1),O=z.b[0]-z.a[0],N=z.b[1]-z.a[1],H=z.b[2]-z.a[2],q=Math.hypot(O,N,H)||1,j=O/q,Y=N/q,Z=H/q,J=Math.abs(Y)>0.9?1:0,ae=Math.abs(Y)>0.9?0:1,re=Y*0-Z*ae,ie=Z*J-j*0,X=j*ae-Y*J,se=Math.hypot(re,ie,X)||1;re/=se,ie/=se,X/=se;let ee=ie*Z-X*Y,le=X*j-re*Z,me=re*Y-ie*j;for(let he=0;he<=P;he++){let ge=he/P*W,pe=Math.sin(Math.PI*(he/P)),ve=(te(z.seed+he*7.1+V*3.3)-0.5)*0.8*pe,Pe=(te(z.seed+he*3.7+V*5.9)-0.5)*0.8*pe,_e=Math.sin(Math.PI*ge)*q*0.12;T[he*3]=z.a[0]+O*ge+re*ve+ee*Pe,T[he*3+1]=z.a[1]+N*ge+ie*ve+le*Pe+_e,T[he*3+2]=z.a[2]+H*ge+X*ve+me*Pe}let ne=0;for(let he=0;he<P;he++)ne=this.boltVertex(ne,he,-1,G),ne=this.boltVertex(ne,he,1,G),ne=this.boltVertex(ne,he+1,1,G),ne=this.boltVertex(ne,he,-1,G),ne=this.boltVertex(ne,he+1,1,G),ne=this.boltVertex(ne,he+1,-1,G);M.bufferSubData(M.ARRAY_BUFFER,0,R,0,ne),I.vec3("uColor",z.color),M.drawArrays(M.TRIANGLES,0,ne/6)}M.bindVertexArray(null)}boltVertex(M,R,T,P){let L=this.boltPts,V=this.boltData,I=this.camPos,z=Qt,U=Math.max(0,R-1)*3,W=Math.min(z,R+1)*3,G=R*3,O=L[W]-L[U],N=L[W+1]-L[U+1],H=L[W+2]-L[U+2],q=I[0]-L[G],j=I[1]-L[G+1],Y=I[2]-L[G+2],Z=N*Y-H*j,J=H*q-O*Y,ae=O*j-N*q,re=(Math.hypot(Z,J,ae)||1)/(0.24*T);return Z/=re,J/=re,ae/=re,V[M]=L[G]+Z,V[M+1]=L[G+1]+J,V[M+2]=L[G+2]+ae,V[M+3]=T,V[M+4]=R/z,V[M+5]=P,M+6}drawParticles(M,R){let T=this.gl,P=this.particleData,L=this.time,V=0,I=this.lightData;for(let G=0;G<this.lightCount;G++){let O=G*8,N=V++*8;P[N]=I[O],P[N+1]=I[O+1],P[N+2]=I[O+2],P[N+3]=I[O+3],P[N+4]=I[O+4],P[N+5]=I[O+5],P[N+6]=0.55+0.35*Math.sin(L*2.2+I[O+6]*1.7),P[N+7]=I[O+7]}let z=V+Kt;{let G=this.flagColors()[0],O=V++*8;P[O]=ye[0],P[O+1]=ye[1]+Xe+0.12,P[O+2]=ye[2],P[O+3]=G[0],P[O+4]=G[1],P[O+5]=G[2],P[O+6]=0.5+this.beacon*0.3+this.flagFlash*0.3,P[O+7]=1.2+this.beacon*0.8+this.flagFlash*2}for(let G of this.monsters.values()){let O=L-G.dizzyT;if(O>1.8||V+3>z)continue;let N=G.pos[1]+G.height*G.scale+0.25;for(let H=0;H<3;H++){let q=L*5+H/3*De,j=V++*8;P[j]=G.pos[0]+Math.cos(q)*0.7*G.scale,P[j+1]=N+Math.sin(q*2)*0.08,P[j+2]=G.pos[2]+Math.sin(q)*0.7*G.scale,P[j+3]=1,P[j+4]=0.9,P[j+5]=0.4,P[j+6]=1-O/1.8,P[j+7]=0.55}}for(let G of this.flyers){let O=L-G.t0;if(O<0)continue;let N=this.monsters.get(G.target);if(!N)continue;let H=N.pos[0],q=N.pos[1]+N.height*N.scale*0.8,j=N.pos[2];for(let Y=0;Y<4&&V<$t+Kt+os;Y++){let Z=de((O-Y*0.035)/G.dur,0,1),J=pt(Z),ae=Math.sin(Z*Math.PI)*G.lift,re=V++*8;P[re]=Re(G.p0[0],H,J),P[re+1]=Re(G.p0[1],q,J)+ae,P[re+2]=Re(G.p0[2],j,J),P[re+3]=G.color[0],P[re+4]=G.color[1],P[re+5]=G.color[2],P[re+6]=1-Y*0.22,P[re+7]=G.size*(1-Y*0.2)}}let U=Math.min(this.particles.length,zt);for(let G=0;G<U;G++){let O=this.particles[G],N=O.life/O.max,H=V++*8;P[H]=O.p[0],P[H+1]=O.p[1],P[H+2]=O.p[2],P[H+3]=O.c[0],P[H+4]=O.c[1],P[H+5]=O.c[2],P[H+6]=Math.min(1,N*1.6),P[H+7]=O.size*(0.5+N*0.5)}if(!V)return;let W=this.progs.part.use();W.mat4("uViewProj",M),W.float("uScale",R*0.9),W.float("uGain",this.pipe&&this.fmt.hdr?1.6:1),T.bindVertexArray(this.particleVao),T.bindBuffer(T.ARRAY_BUFFER,this.particleBuf),T.bufferSubData(T.ARRAY_BUFFER,0,P,0,V*8),T.drawArrays(T.POINTS,0,V),T.bindVertexArray(null)}drawDice(M,R){let T=this.gl,P=this.diceRect;if(this.diceOk=!1,!this.dice.length||P.w<40||P.h<24)return;let L=Math.floor(P.x*M),V=Math.floor(P.w*M),I=Math.floor(P.h*M),z=Math.floor(R-(P.y+P.h)*M);T.viewport(L,z,V,I),T.enable(T.SCISSOR_TEST),T.scissor(L,z,V,I),T.clear(T.DEPTH_BUFFER_BIT);let U=this.dice.length,W=P.w/P.h,G=Math.tan(as/2),O=(U-1)*is/2+0.9,N=1.05,H=Math.max(O/(G*W),N/G)+0.7,q=this.diceCenter,j=this.diceCam;oe.set(j,q[0]+Zt[0]*H,q[1]+Zt[1]*H,q[2]+Zt[2]*H),ce.lookAt(this.tmp,j,q,It),ce.perspective(this.tmp2,as,W,0.3,60),ce.multiply(this.diceViewProj,this.tmp2,this.tmp),T.enable(T.BLEND),T.blendFunc(T.ONE,T.ONE_MINUS_SRC_ALPHA),T.depthMask(!1),T.disable(T.DEPTH_TEST),T.disable(T.CULL_FACE);let Y=this.progs.decal.use();Y.mat4("uViewProj",Nt),Y.mat4("uModel",Os),Y.int("uMode",4),Y.float("uProgress",W),Y.vec4("uColor",this.rgba(0.07,0.05,0.13,0.8)),this.meshes.quad.draw(),T.enable(T.DEPTH_TEST),Y.mat4("uViewProj",this.diceViewProj),Y.float("uTime",this.time);let Z=this.time;for(let ie=0;ie<U;ie++){let X=this.dice[ie],se=this.dieLift(X,ie,Z);Y.int("uMode",0),Y.vec4("uColor",this.rgba(0,0,0,de(0.55-se*0.18,0.12,0.55)));let ee=1.55-Math.min(0.6,se*0.25);if(Y.mat4("uModel",ce.fromTRS(this.tmp,oe.set(this.v0,X.pos[0],-0.49,X.pos[2]+0.08),Ae,oe.set(this.v1,ee,1,ee))),this.meshes.quad.draw(),X.kept)Y.int("uMode",1),Y.vec4("uColor",this.rgba(1.4,1.05,0.35,0.95)),Y.mat4("uModel",ce.fromTRS(this.tmp,oe.set(this.v0,X.pos[0],-0.48,X.pos[2]),Ae,oe.set(this.v1,1.75,1,1.75))),this.meshes.quad.draw()}T.depthMask(!0),T.disable(T.BLEND),T.enable(T.CULL_FACE);let J=this.progs.dice.use();this.setCommon(J,!1),J.float("uFogDensity",0),J.mat4("uViewProj",this.diceViewProj),J.vec3("uCamPos",j);let ae=this.diceViewProj,re=this.diceResolved;for(let ie=0;ie<U;ie++){let X=this.dice[ie],se=de((Z-X.rollT0)/rs,0,1),ee=X.q,le=this.v0;if(oe.set(le,X.pos[0],this.dieLift(X,ie,Z),X.pos[2]),X.blank)ue.setAxisAngle(this.q1,0,1,0,Math.sin(Z*0.8+ie)*0.35+ie*0.7),ue.setAxisAngle(this.q2,1,0,0,0.35+Math.sin(Z*0.6+ie*1.3)*0.15),ee=ue.mulInto(this.q1,this.q1,this.q2);else if(se<1){let ve=xt(Math.min(1,se/0.8));le[0]+=X.throwFrom[0]*(1-ve),le[2]+=X.throwFrom[2]*(1-ve),ue.setAxisAngle(this.q1,X.axis[0],X.axis[1],X.axis[2],(1-xt(se))*X.turns*De),ee=ue.mulInto(this.q2,this.q1,X.q)}let me=this.hoverDie===ie&&this.diceActive,ne=re?de((Z-this.resolvedT-ie*0.05)/0.35,0,1):1,he=ne<1?1+Math.sin(ne*Math.PI)*0.16:1,ge=0.5*(X.kept?0.96:1)*(me?1.07:1)*he;J.mat4("uModel",ce.fromTRS(this.tmp,le,ee,oe.set(this.v1,ge,ge,ge))),J.vec3("uBody",X.bonus?oe.set(this.v2,0.2,0.1,0.42):oe.set(this.v2,0.1,0.1,0.13)),J.float("uBonus",X.bonus?1:0),J.float("uKept",X.kept?1:0),J.float("uHover",me?1:0),J.float("uBlank",X.blank?1:0),J.float("uDim",re&&ne>=1?0.3:0),J.float("uSettle",X.blank?0:gs(0.7,1,se)),this.meshes.dice.draw();let pe=ae[3]*X.target[0]+ae[7]*0.2+ae[11]*X.target[2]+ae[15];X.sx=P.x+((ae[0]*X.target[0]+ae[4]*0.2+ae[8]*X.target[2]+ae[12])/pe*0.5+0.5)*P.w,X.sy=P.y+(1-((ae[1]*X.target[0]+ae[5]*0.2+ae[9]*X.target[2]+ae[13])/pe*0.5+0.5))*P.h}if(U>1)this.dieStepPx=Math.max(12,Math.abs(this.dice[1].sx-this.dice[0].sx));this.diceOk=!0,T.disable(T.SCISSOR_TEST)}dieLift(M,R,T){if(M.blank)return 0.12+Math.sin(T*2+R*0.9)*0.06;let P=M.kept?0.3:0,L=de((T-M.rollT0)/rs,0,1);if(L<1)if(L<0.3)P+=M.throwFrom[1]*(1-(L/0.3)**2);else P+=Math.abs(Math.sin((L-0.3)/0.7*Math.PI*2))*0.7*(1-L)**1.2;return P}label(M,R){let T=this.labelIndex.get(M);if(!T)T={id:M,kind:R,x:0,y:0,ax:0,ay:0,bx:0,by:0,bw:0,bh:0,level:0,visible:!1},this.labelIndex.set(M,T),this.labels.push(T);return T}project(M,R,T,P){let L=this.viewProj,V=L[3]*M+L[7]*R+L[11]*T+L[15];if(V<=0.1)return P.visible=!1,!1;return P.x=((L[0]*M+L[4]*R+L[8]*T+L[12])/V*0.5+0.5)*this.width,P.y=(1-((L[1]*M+L[5]*R+L[9]*T+L[13])/V*0.5+0.5))*this.height,P.visible=!0,!0}emitLabels(){if(!this.onLabels)return;let M=this.scratchLabel;for(let L of this.monsters.values()){let V=L.label??=this.label(`m:${L.id}`,"m");if(!this.project(L.pos[0],L.pos[1],L.pos[2],V))continue;let{x:I,y:z}=V;this.project(L.pos[0],L.pos[1]+L.height*L.scale+0.2,L.pos[2],M);let U=Math.max(4,z-M.y);V.bw=U*0.9,V.bh=U,V.bx=I-V.bw/2,V.by=M.y,V.x=M.x,V.y=M.y,V.level=L.level,V.visible=!0}let R=this.levelLabels,T=Bt[Math.min(this.footOrder.length,Bt.length-1)]+0.42,P=this.signAnchors;P[0]=Math.sin(T)*(Q.footR+0.3),P[1]=0.3,P[2]=Math.cos(T)*(Q.footR+0.3);for(let L=0;L<3;L++){let V=R[L],I=P[L*3],z=P[L*3+1],U=P[L*3+2];if(!this.project(-I,z,U,M)){V.visible=!1;continue}if(V.ax=M.x,V.ay=M.y,!this.project(I,z,U,V))continue}this.onLabels(this.labels)}dispose(){cancelAnimationFrame(this.raf),this.gl.getExtension("WEBGL_lose_context")?.loseContext()}}function qs(M){let R=Math.hypot(M[0],M[1],M[2])||1;return[M[0]/R,M[1]/R,M[2]/R]}var js=Ft.map((M)=>{let R,T=M[1];if(T>0.99)R=ue.identity();else if(T<-0.99)R=ue.axisAngle([1,0,0],Math.PI);else{let V=[M[1]*0-M[2]*1,M[2]*0-M[0]*0,M[0]*1-M[1]*0],I=1+T,z=Math.hypot(V[0],V[1],V[2],I);R=[V[0]/z,V[1]/z,V[2]/z,I/z]}let P=ue.rotate(R,Lt(M)),L=Math.PI-Math.atan2(P[0],P[2]);return ue.multiply(ue.axisAngle([0,1,0],L),R)});function Ys(M,R,T,P){let L=[M[0]-T[0],M[1]-T[1],M[2]-T[2]],V=L[0]*R[0]+L[1]*R[1]+L[2]*R[2],I=L[0]*L[0]+L[1]*L[1]+L[2]*L[2]-P*P,z=V*V-I;if(z<0)return null;let U=-V-Math.sqrt(z);return U>0?U:null}var xs={w:90,h:30},Xs=[2,1,0],gi=a(function({ui:R}){let T=s(null),P=s(null),L=s(null),V=s(null),I=s(null),z=s(null),U=s(null),[W,G]=r(null),O=s(new Map),N=s(new Map),H=s(new Map),q=s(null),j=(X)=>{let se=H.current.get(X);if(!se)se=(ee)=>{let le=O.current,me=le.get(X);if(me&&me!==ee)q.current?.unobserve(me);if(ee)ee.dataset.lid=X,le.set(X,ee),q.current?.observe(ee);else le.delete(X)},H.current.set(X,se);return se};if(c(()=>{let X=P.current,se=T.current,ee;try{ee=new so(X,n.settings.quality)}catch(K){console.error(K),G(K instanceof Error?K.message:String(K));return}U.current=ee;let le=new ResizeObserver((K)=>{for(let fe of K){let xe=fe.target,Se=xe.dataset.lid;if(Se)N.current.set(Se,{w:xe.offsetWidth,h:xe.offsetHeight})}});q.current=le;for(let K of O.current.values())le.observe(K);let me=1,ne=1,he=0,ge=0,pe=0,ve=()=>{let K=se.getBoundingClientRect();me=K.width,ne=K.height;let fe=Math.min(window.devicePixelRatio||1,K.width<700?1.75:2);ee.resize(K.width,K.height,fe);let xe=L.current?.getBoundingClientRect(),Se=V.current?.getBoundingClientRect(),Me=I.current?.getBoundingClientRect(),Ce=z.current?.getBoundingClientRect();he=xe?Math.max(0,xe.bottom-K.top):0,ge=Se?Math.max(0,K.bottom-Se.top):0,pe=Me&&Me.width>0&&Me.height>0?Math.max(0,K.right-Me.left):0,ee.setInsets(he,pe,ge,0),ee.diceRect=Ce&&Ce.width>0?{x:Ce.left-K.left,y:Ce.top-K.top,w:Ce.width,h:Ce.height}:{x:0,y:0,w:0,h:0}};ve();let Pe=new ResizeObserver(ve);Pe.observe(se);for(let K of[L.current,V.current,I.current,z.current])if(K)Pe.observe(K);let _e=Array.from({length:16},()=>({x:0,y:0,w:0,h:0})),je=Array.from({length:8},()=>({x:0,y:0,w:0,h:0})),Ne=Array.from({length:3},()=>({x:0,y:0,w:0,h:0})),Qe=new Map,$e=new Map,Et=new WeakMap,it=[],at=[],rt=(K,fe)=>fe.y-K.y,Rt=(K,fe,xe)=>{let Se=Math.round(fe*4)*65536+Math.round(xe*4);if($e.get(K)!==Se)$e.set(K,Se),K.style.transform=`translate3d(${fe.toFixed(1)}px, ${xe.toFixed(1)}px, 0)`;if(Qe.get(K)!==!0)K.style.opacity="1",K.style.visibility="visible",Qe.set(K,!0)},Gt=(K)=>{if(Qe.get(K)!==!1)K.style.opacity="0",K.style.visibility="hidden",Qe.set(K,!1)},Ke=(K,fe,xe,Se,Me,Ce)=>{let Je=0;for(let be=0;be<Ce;be++){let ke=Me[be],Te=Math.min(K+xe,ke.x+ke.w)-Math.max(K,ke.x),we=Math.min(fe+Se,ke.y+ke.h)-Math.max(fe,ke.y);if(Te>0&&we>0)Je+=Te*we}return Je},Oe=0,Ge=0,nt=(K,fe,xe,Se)=>{if(Oe>=_e.length)return;let Me=_e[Oe++];Me.x=K,Me.y=fe,Me.w=xe,Me.h=Se};ee.onLabels=(K)=>{let fe=O.current,xe=N.current,Se=me-pe,Me=he+2,Ce=ne-ge-2;Oe=0,Ge=0,it.length=0,at.length=0;for(let be of K){let ke=fe.get(be.id);if(!ke)continue;if(!be.visible){Gt(ke);continue}if(be.kind==="m"){if(it.push(be),Ge<je.length){let Te=je[Ge++];Te.x=be.bx,Te.y=be.by,Te.w=be.bw,Te.h=be.bh}}else at.push(be)}it.sort(rt);for(let be of it){let ke=fe.get(be.id),Te=xe.get(be.id)??xs,we=Math.max(4,Math.min(Se-Te.w-4,be.x-Te.w/2)),We=be.y-Te.h-1;for(let bt=0;bt<6;bt++){let ct=!1;for(let et=0;et<Oe;et++){let Ue=_e[et];if(we<Ue.x+Ue.w+2&&we+Te.w+2>Ue.x&&We<Ue.y+Ue.h+1&&We+Te.h+1>Ue.y)We=Ue.y-Te.h-1,ct=!0}if(!ct)break}We=Math.max(Me,Math.min(Ce-Te.h,We)),Rt(ke,we,We),nt(we,We,Te.w,Te.h)}let Je=Oe;for(let be=0;be<at.length&&be<Ne.length;be++){let ke=at[be],Te=fe.get(ke.id),we=xe.get(ke.id)??xs,We=Et.get(Te)??0,bt=1/0,ct=0,et=0,Ue=0;for(let lt=0;lt<2;lt++){let co=lt===0?ke.x+6:ke.ax-we.w-6,lo=(lt===0?ke.y:ke.ay)-we.h/2,ht=Math.max(4,Math.min(Se-we.w-4,co)),ut=Math.max(Me,Math.min(Ce-we.h,lo)),ho=0;for(let Wt=0;Wt<be;Wt++){let mt=Ne[Wt],mo=Math.min(ht+we.w,mt.x+mt.w)-Math.max(ht,mt.x),po=Math.min(ut+we.h,mt.y+mt.h)-Math.max(ut,mt.y);if(mo>0&&po>0)ho+=mo*po}let uo=Ke(ht,ut,we.w,we.h,_e,Je)+Ke(ht,ut,we.w,we.h,je,Ge)*0.7+ho*3+(Math.abs(ht-co)+Math.abs(ut-lo))*we.h*0.35+(lt===We?0:we.w*we.h*0.2);if(uo<bt)bt=uo,ct=ht,et=ut,Ue=lt}Et.set(Te,Ue),Te.classList.toggle("left",Ue===1);let Pt=Ne[be];Pt.x=ct,Pt.y=et,Pt.w=we.w,Pt.h=we.h,Rt(Te,ct,et)}};let St=C(()=>{let K=R.state;if(!K)return;let fe=R.myTurn&&K.phase==="roll"&&K.flags.rolled&&K.rollsLeft>0;ee.sync(K,R.viewId,fe)}),Fe=R.onEvent((K)=>ee.event(K)),Ve=C(()=>{ee.setQuality(n.settings.quality),ee.lessMotion=n.settings.lessMotion}),ze=new Map,Ze=0,vt=0,io=(K)=>{let fe=X.getBoundingClientRect();return[K.clientX-fe.left,K.clientY-fe.top]},ao=(K)=>{if(X.setPointerCapture(K.pointerId),ze.set(K.pointerId,{x:K.clientX,y:K.clientY}),Ze=0,ze.size===2){let[fe,xe]=[...ze.values()];vt=Math.hypot(fe.x-xe.x,fe.y-xe.y)}},ro=(K)=>{let fe=ze.get(K.pointerId);if(!fe){if(K.pointerType==="mouse"){let[Me,Ce]=io(K);X.style.cursor=ee.pickMonster(Me,Ce)?"pointer":""}return}let xe=K.clientX-fe.x,Se=K.clientY-fe.y;if(fe.x=K.clientX,fe.y=K.clientY,Ze+=Math.abs(xe)+Math.abs(Se),ze.size===1)ee.orbit(xe,Se);else if(ze.size===2){let[Me,Ce]=[...ze.values()],Je=Math.hypot(Me.x-Ce.x,Me.y-Ce.y);if(vt>0)ee.zoom(vt/Je);vt=Je}},At=(K)=>{let fe=ze.size===1&&Ze<8;if(ze.delete(K.pointerId),ze.size<2)vt=0;if(!fe)return;let[xe,Se]=io(K),Me=ee.pickMonster(xe,Se);if(Me)R.open({kind:"player",playerId:Me})},no=(K)=>{K.preventDefault(),ee.zoom(Math.exp(K.deltaY*0.001))};return X.addEventListener("pointerdown",ao),X.addEventListener("pointermove",ro),X.addEventListener("pointerup",At),X.addEventListener("pointercancel",At),X.addEventListener("wheel",no,{passive:!1}),()=>{Pe.disconnect(),St(),Ve(),Fe(),X.removeEventListener("pointerdown",ao),X.removeEventListener("pointermove",ro),X.removeEventListener("pointerup",At),X.removeEventListener("pointercancel",At),X.removeEventListener("wheel",no),ee.dispose(),U.current=null,le.disconnect(),q.current=null}},[R]),W)return e("div",{className:"stage3d error3d",children:t("div",{className:"panel",children:[e("h3",{children:"3D-режим недоступен"}),t("p",{className:"muted",children:["Ваш браузер не поддерживает WebGL2 (",W,")."]}),e("button",{className:"btn go",onClick:()=>n.settings.set("mode","cards"),children:"Перейти в карточный режим"})]})});let{state:Y,viewer:Z}=R,J=R.myTurn&&Y.phase==="buy"&&!Y.flags.bought&&Z?Y.market.filter((X,se)=>X&&(y(Y,se)??1/0)<=Z.coins).length:0,ae=R.myTurn&&Y.phase==="roll"&&Y.flags.rolled&&Y.rollsLeft>0,re=(X)=>{let se=T.current.getBoundingClientRect();return[X.clientX-se.left,X.clientY-se.top]},ie={onPointerDown:(X)=>{let se=U.current;if(!se||!T.current)return;let[ee,le]=re(X),me=se.pickDie(ee,le);if(me>=0)R.clickDie(me)},onPointerMove:(X)=>{let se=U.current;if(!se||!T.current||X.pointerType!=="mouse")return;let[ee,le]=re(X);se.hoverDie=ae?se.pickDie(ee,le):-1},onPointerLeave:()=>{if(U.current)U.current.hoverDie=-1}};return t("div",{className:"stage3d",ref:T,children:[e("canvas",{ref:P,className:"gl-canvas"}),t("div",{className:"labels",children:[Xs.map((X)=>e($s,{ui:R,level:X,bind:j},X)),Y.players.map((X)=>e(Ks,{ui:R,player:X,bind:j},X.id))]}),t("div",{className:"hud-top",ref:L,children:[e("div",{className:"hud-news",children:e(S,{ui:R})}),e("div",{className:"hud-order",children:e(_,{ui:R,compact:!0})})]}),t("div",{className:"hud-bottom",ref:V,children:[t("div",{className:"hud-dice",children:[t("div",{className:"dice-head",children:[e(Js,{ui:R}),t("button",{className:`btn shop3d${J>0?" can-buy":""}`,onClick:()=>R.open({kind:"shop"}),title:"Лавка, способность и шмотки",children:["\uD83E\uDDF0 ",e("span",{className:"shop3d-label",children:"Лавка"}),J>0&&e("span",{className:"badge",children:J})]})]}),e("div",{className:`dice-zone${ae?" active":""}`,ref:z,"data-fx":"dice",...ie,children:e(ei,{ui:R})})]}),e("div",{className:"hud-actions",children:e(k,{ui:R})})]}),e("aside",{className:"hud-side",ref:I,children:t("section",{className:"log-box",children:[e("div",{className:"section-head",children:e("h4",{children:"Журнал"})}),e(F,{ui:R,limit:30})]})})]})});function Qs(M,R){return g(M.state,{level:R})}var $s=a(function({ui:R,level:T,bind:P}){let L=R.state,V=o[T],I=d(L,T),z=Qs(R,T),U=Number.isFinite(V.cap)?V.cap-v(L,T).length:0,W=R.viewer?.level===T;return t("div",{className:`lvl3d lvl-${T}${W?" here":""}`,ref:P(`l:${T}`),"aria-hidden":!0,children:[t("b",{className:"lv-name",children:[V.icon," ",V.name]}),t("span",{className:"lv-perks",children:[I>0&&t("i",{className:"lv-vp",children:["+",I,"★"]}),t("i",{className:"lv-heal",children:[z,"✚=1❤"]})]}),U>0&&e("span",{className:"lv-free",children:T===2?"свободна":U===1?"1 место":"2 места"})]})}),Ks=a(function({ui:R,player:T,bind:P}){let L=R.state,V=l(L),I=T.id===V.id&&L.phase!=="gameOver",z=T.hp<=Math.ceil(T.maxHp/4);return t("div",{className:`label3d${I?" current":""}${T.id===R.viewId?" me":""}`,style:x(T.monster),ref:P(`m:${T.id}`),"data-player":T.id,"aria-hidden":!0,children:[t("b",{children:[T.level===i&&e("i",{className:"lt-king",children:"\uD83D\uDC51"}),T.name]}),t("span",{className:"lt-stats",children:[t("span",{className:z?"lt-low":void 0,children:["❤",T.hp]})," ★",T.vp]}),e(w,{ui:R,playerId:T.id})]})}),Zs=["подножие","уступ","вершину"],Js=a(function({ui:R}){let T=R.state,P=l(T);if(T.phase==="gameOver")return e("span",{className:"dice-sum"});if(!T.flags.rolled)return e("span",{className:"dice-sum idle",children:R.myTurn?"\uD83C\uDFB2 8 кубиков: бросок и один переброс":`\uD83C\uDFB2 ${P.name} готовит бросок…`});let L=D(T.dice),V=g(T,P),I=L.sword+(T.phase==="roll"?T.flags.bonusSwords:0),z=I>0?b(T,P):[],U=I>0&&P.level<i&&A(T,P.level+1);return t("span",{className:"dice-sum",children:[T.phase==="buy"&&e("span",{className:"ds-done",children:"разыграно:"}),E.map((W)=>L[W]||W==="sword"&&I?t("span",{className:`ds-face ds-${W}`,title:B[W],children:[e(h,{face:W,size:14}),W==="sword"?I:L[W],W==="sword"&&T.phase==="roll"&&z.length>0&&t("small",{children:[" → ",Zs[z[0].level]]}),W==="sword"&&T.phase==="roll"&&U&&e("small",{className:"ds-up",children:" ⬆"}),W==="heal"&&V>1&&t("small",{children:["=",Math.floor(L[W]/V),"❤"]})]},W):null),T.phase==="roll"&&e("span",{className:"ds-rolls",children:T.rollsLeft>0?`переброс: ${T.rollsLeft}`:"без перебросов"})]})}),ei=a(function({ui:R}){let T=R.state;if(!R.myTurn||T.phase!=="roll"||!T.flags.rolled)return null;return e("div",{className:"dice-keys",children:T.dice.map((P,L)=>t("button",{type:"button","aria-pressed":P.kept,onClick:()=>R.clickDie(L),children:["Кубик ",L+1,": ",B[P.face],P.kept?", оставлен":""]},L))})});export{gi as default};
