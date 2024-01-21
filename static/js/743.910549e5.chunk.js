"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[743],{3743:function(n,e,t){t.r(e),t.d(e,{default:function(){return hn}});var r,i,o,s,a,l,c,d,p,x,u,h,g,f,b,j=t(9439),m=t(2791),y=t(5218),k=t(4420),v=function(n){return n.cars.cars},Z=function(n){return n.favorites.favorites},F=function(n){return n.cars.filter},w=function(n){return n.cars.isLoading},C=function(n){return n.cars.filteredCars},P=t(168),S=t(5216),z=S.ZP.div(r||(r=(0,P.Z)(["\n  display: flex;\n  gap: 50px 30px;\n  flex-wrap: wrap;\n  justify-content: center;\n  margin-bottom: 100px;\n"]))),L=t(7948),I=t.n(L),M=t(2013),R=S.ZP.div(i||(i=(0,P.Z)(["\n  display: flex;\n  flex-direction: column;\n  width: 274px;\n  height: 426px;\n  position: relative;\n"]))),W=S.ZP.div(o||(o=(0,P.Z)(["\n  height: 268px;\n  border-radius: 14px;\n  margin-bottom: 14px;\n"]))),B=S.ZP.h3(s||(s=(0,P.Z)(["\n  font-size: 16px;\n  font-weight: 500;\n  line-height: 1.5;\n"]))),H=S.ZP.div(a||(a=(0,P.Z)(["\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 8px;\n"]))),_=S.ZP.div(l||(l=(0,P.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  gap: 4px 12px;\n  margin-bottom: 28px;\n"]))),A=S.ZP.button(c||(c=(0,P.Z)(["\n  position: absolute;\n  top: 14px;\n  right: 14px;\n  border: none;\n  background: transparent;\n  cursor: pointer;\n"]))),E=S.ZP.p(d||(d=(0,P.Z)(["\n  position: relative;\n  font-size: 12px;\n  font-weight: 400;\n  line-height: 1.5;\n  color: ",';\n  &:not(:last-child)::after {\n    content: "";\n    position: absolute;\n    top: 0;\n    right: -6px;\n    width: 1px;\n    height: 16px;\n    background-color: rgba(18, 20, 23, 0.1);\n  }\n'])),M.r.colors.secondaryText),N=S.ZP.button(p||(p=(0,P.Z)(["\n  display: flex;\n  width: 100%;\n  height: 44px;\n  padding: 12px 0;\n  justify-content: center;\n  align-items: center;\n  flex-shrink: 0;\n  color: ",";\n  border-radius: 12px;\n  border: none;\n  background: ",";\n  position: absolute;\n  bottom: 0;\n  cursor: pointer;\n"])),M.r.colors.white,M.r.colors.blue),O=t(9823),q=S.ZP.button(x||(x=(0,P.Z)(["\n  width: 24px;\n  height: 24px;\n  background: transparent;\n  border: none;\n  position: absolute;\n  top: 16px;\n  right: 16px;\n  cursor: pointer;\n"]))),D=S.ZP.p(u||(u=(0,P.Z)(["\n  color: #121417;\n  font-size: 14px;\n  font-weight: 500;\n  line-height: 1.43; \n  margin-bottom: 8px;\n"]))),T=S.ZP.p(h||(h=(0,P.Z)(["\ncolor: #121417;\nfont-size: 14px;\nfont-weight: 400;\nline-height: 1.43;\nmargin-bottom: 24px;\n"]))),U=S.ZP.a(g||(g=(0,P.Z)(["\n  display: inline-flex;\n  padding: 12px 50px;\n  justify-content: center;\n  align-items: center;\n  border-radius: 12px;\n  background: #3470ff;\n  color: white;\n  font-size: 14px;\n  font-weight: 600;\n  line-height: 1.43;\n"]))),G=S.ZP.div(f||(f=(0,P.Z)(["\n  display:flex;\n  gap: 8px;\n  flex-wrap: wrap;\n  margin-bottom: 24px;\n"]))),Y=S.ZP.p(b||(b=(0,P.Z)(["\n  display: flex;\n  padding: 7px 14px;\n  justify-content: center;\n  align-items: center;\n  gap: 8px;\n  border-radius: 35px;\n  background: #f9f9f9;\n  font-size: 12px;\n  line-height: 1.5;\n  letter-spacing: -0.24px;\n"]))),K=t(184),V={overlay:{backgroundColor:"rgba(18, 20, 23, 0.50)",zIndex:"2",overflow:"none"},content:{maxWidth:"542px",maxHeight:"80vh",top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",borderRadius:"24px",transform:"translate(-50%, -50%)",padding:"40px",overflowY:"auto"}};I().setAppElement("#root");var J=function(n){var e=n.car,t=n.isOpen,r=n.handleClose;return(0,K.jsx)("div",{children:(0,K.jsxs)(I(),{isOpen:t,onRequestClose:function(){r()},style:V,contentLabel:"Car Details Modal",children:[(0,K.jsx)(q,{onClick:r,children:(0,K.jsx)(O.Z,{style:{width:"24px",height:"24px"}})}),(0,K.jsx)("div",{style:{maxWidth:"462px",height:"248px",marginBottom:"14px",borderRadius:"14px",background:"linear-gradient(180deg, rgba(18, 20, 23, 0.5) 2.5%, rgba(18, 20, 23, 0) 41.07%), url(".concat(e.img,")"),backgroundPosition:"50%",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundHeight:"100%"}}),(0,K.jsx)(H,{children:(0,K.jsxs)(B,{children:[e.make,(0,K.jsxs)("span",{style:{color:"#3470FF"},children:[" ",e.model]}),", ",e.year]})}),(0,K.jsxs)(_,{style:{marginBottom:"14px"},children:[(0,K.jsx)(E,{children:e.address.split(", ")[1]}),(0,K.jsx)(E,{children:e.address.split(", ")[2]}),(0,K.jsx)(E,{children:e.rentalCompany}),(0,K.jsx)(E,{children:e.id}),(0,K.jsxs)(E,{children:["Fuel consumption: ",e.fuelConsumption]}),(0,K.jsxs)(E,{children:["Engine size: ",e.engineSize]})]}),(0,K.jsx)(T,{children:e.description}),(0,K.jsx)(D,{children:"Accessories and functionalities:"}),(0,K.jsx)(_,{style:{marginBottom:"24px"},children:e.accessories.concat(e.functionalities).map((function(n,e){return(0,K.jsx)(E,{children:n},e)}))}),(0,K.jsx)(D,{children:"Rental Conditions"}),(0,K.jsxs)(G,{children:[(0,K.jsxs)(Y,{children:[e.rentalConditions.split("\n")[0].split(": ")[0],":"," ",(0,K.jsx)("span",{style:{color:"#3470FF",fontWeight:"600"},children:e.rentalConditions.split("\n")[0].split(": ")[1]})]}),(0,K.jsx)(Y,{children:e.rentalConditions.split("\n")[1]}),(0,K.jsx)(Y,{children:e.rentalConditions.split("\n")[2]}),(0,K.jsxs)(Y,{children:["Mileage:"," ",(0,K.jsx)("span",{style:{color:"#3470FF",fontWeight:"600"},children:e.mileage.toLocaleString("en-US")})]}),(0,K.jsxs)(Y,{children:["Price:"," ",(0,K.jsx)("span",{style:{color:"#3470FF",fontWeight:"600"},children:e.rentalPrice})]})]}),(0,K.jsx)(U,{href:"tel:+380730000000",children:"Rental car"})]})})},Q=t(7488),X=t(7237),$=t(838),nn={width:"18px",height:"18px",fill:"white",strokeOpacity:"0.8",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"},en={width:"18px",height:"18px",fill:"#3470FF",stroke:"#3470FF",strokeLinecap:"round",strokeLinejoin:"round"},tn=function(n){var e=n.cars,t=(0,m.useState)(!1),r=(0,j.Z)(t,2),i=r[0],o=r[1],s=(0,k.v9)(Z),a=(0,m.useState)(null),l=(0,j.Z)(a,2),c=l[0],d=l[1],p=(0,k.I0)(),x=function(n){return s&&s.find((function(e){return e.id===n.id}))};return(0,K.jsxs)(K.Fragment,{children:[e&&e.map((function(n){return(0,K.jsxs)(R,{children:[x(n)?(0,K.jsx)(A,{onClick:function(){!function(n){p((0,$.zm)(n))}(n)},children:(0,K.jsx)(X.Z,{style:en})}):(0,K.jsx)(A,{onClick:function(){!function(n){p((0,$._p)(n))}(n)},children:(0,K.jsx)(Q.Z,{style:nn})}),(0,K.jsx)(W,{style:{background:"linear-gradient(180deg, rgba(18, 20, 23, 0.5) 2.5%, rgba(18, 20, 23, 0) 41.07%), url(".concat(n.img,")"),backgroundPosition:"50%",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundHeight:"100%"}}),(0,K.jsxs)(H,{children:[(0,K.jsxs)(B,{children:[n.make,(0,K.jsxs)("span",{style:{color:"#3470FF"},children:[" ",n.model]}),","," ",n.year]}),(0,K.jsx)(B,{children:n.rentalPrice})]}),(0,K.jsxs)(_,{children:[(0,K.jsx)(E,{children:n.address.split(", ")[1]}),(0,K.jsx)(E,{children:n.address.split(", ")[2]}),(0,K.jsx)(E,{children:n.rentalCompany}),(0,K.jsx)(E,{children:n.id})]}),(0,K.jsx)(N,{onClick:function(){return function(n){d(n),o(!0)}(n)},children:"See more"})]},n.id)})),i&&(0,K.jsx)(J,{isOpen:i,handleClose:function(){d(null),o(!1)},car:c})]})},rn=t(1087),on=t(1314),sn=function(n){var e=n.isFavorite,t=n.currentPage,r=n.setCurrentPage,i=(0,k.v9)(v),o=(0,k.v9)(Z),s=(0,k.v9)(C),a=(0,k.v9)(w);return(0,K.jsxs)(K.Fragment,{children:[e&&!o.length?(0,K.jsxs)(K.Fragment,{children:[(0,K.jsx)("h2",{style:{maxWidth:"320px",margin:"50px auto 50px"},children:"Your favorites list is empty"}),(0,K.jsx)(rn.rU,{to:"/catalog",children:(0,K.jsx)("button",{style:{margin:"0 auto",display:"flex",height:"48px",padding:"14px 44px",justifyContent:"center",border:"none",alignItems:"center",borderRadius:"12px",background:"#3470FF",color:"white"},children:"Go to catalog"})})]}):(0,K.jsx)(z,{children:(0,K.jsx)(tn,{cars:e?o:s.length?s:i})}),a?(0,K.jsx)(on.a,{}):12*t<=(s.length?s.length:i.length)&&!e&&(0,K.jsx)("button",{style:{color:"#3470FF",fontSize:"16px",fontWeight:"500",lineHeight:"1.5",textDecorationLine:"underline",border:"none",background:"transparent",margin:"0 auto 150px",cursor:"pointer",display:"block"},onClick:function(){r(t+1)},children:"Load more"})]})},an=t(1413),ln=t(7815),cn=t(9332),dn=t(7234),pn=t(2437),xn=["Buick","Volvo","HUMMER","Subaru","Mitsubishi","Nissan","Lincoln","GMC","Hyundai","MINI","Bentley","Mercedes-Benz","Aston Martin","Pontiac","Lamborghini","Audi","BMW","Chevrolet","Chrysler","Kia","Land","Toyota","Tesla","Ford","Honda"],un=function(){var n=(0,m.useState)(""),e=(0,j.Z)(n,2),t=e[0],r=e[1],i=(0,k.I0)(),o=(0,m.useState)(!1),s=(0,j.Z)(o,2),a=s[0],l=s[1],c=(0,k.v9)(F);return(0,K.jsxs)("div",{style:{display:"flex",justifyContent:"center",gap:"18px",marginBottom:"50px",flexWrap:"wrap"},children:[(0,K.jsx)(cn.Z,{disablePortal:!0,id:"combo-box-demo",options:xn,value:t||null,onChange:function(n,e){r(e)},sx:{"& .MuiInputBase-root":{width:"224px",height:"48px",backgroundColor:"#F7F7FB",borderRadius:"12px",position:"relative"}," & .MuiInputLabel-root":{color:"#121417",fontFamily:"Manrope",fontSize:"18px",fontWeight:"500",lineHeight:"20px",top:"-3px"}},renderInput:function(n){return(0,K.jsx)(ln.Z,(0,an.Z)((0,an.Z)({sx:{color:"#121417"}},n),{},{label:"Choose car brand",value:t}))}}),(a||c)&&(0,K.jsx)("button",{style:{color:"#3470FF",fontSize:"16px",fontWeight:"500",lineHeight:"1.5",textDecorationLine:"underline",border:"none",background:"transparent",cursor:"pointer",display:"block"},onClick:function(){l(!1),r(""),i((0,pn.ko)("")),i((0,pn.IN)()),i((0,pn.qb)()),i((0,dn.c)())},children:"Reset filters"}),(0,K.jsx)("button",{onClick:function(){if(""===t)return i((0,pn.IN)()),l(!1),void i((0,dn.c)());i((0,pn.ko)(t)),i((0,pn.qb)()),i((0,dn.n)(t)),l(!0)},style:{display:"flex",maxWidth:"136px",height:"48px",padding:"14px 44px",justifyContent:"center",border:"none",alignItems:"center",borderRadius:"12px",background:"#3470FF",color:"white",cursor:"pointer"},children:"Search"})]})},hn=function(n){var e=n.isFavorite,t=(0,k.v9)((function(n){return n.cars.isLoading})),r=(0,k.v9)((function(n){return n.cars.error})),i=(0,k.I0)(),o=(0,m.useState)(1),s=(0,j.Z)(o,2),a=s[0],l=s[1];return(0,m.useEffect)((function(){var n=i((0,dn.c)(a));return function(){return n.abort()}}),[a,i]),(0,K.jsxs)(K.Fragment,{children:[!e&&(0,K.jsx)(un,{}),t&&(0,K.jsx)(on.a,{}),r&&y.ZP.error("Something was wrong :("),(0,K.jsx)(sn,{isFavorite:e,currentPage:a,setCurrentPage:l})]})}}}]);
//# sourceMappingURL=743.910549e5.chunk.js.map