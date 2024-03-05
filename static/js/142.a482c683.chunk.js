"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[142],{1142:function(n,e,t){t.r(e),t.d(e,{default:function(){return kn}});var r,i,o,s,a,l,c,d,p,u,x,h,g,f,b,m,j=t(9439),k=t(2791),y=t(5218),v=t(4420),Z=function(n){return n.cars.cars},w=function(n){return n.favorites.favorites},C=function(n){return n.cars.filter},F=function(n){return n.cars.isLoading},P=function(n){return n.cars.filteredCars},z=t(168),B=t(5216),S=B.ZP.ul(r||(r=(0,z.Z)(["\n  display: flex;\n  gap: 50px 30px;\n  flex-wrap: wrap;\n  justify-content: center;\n  margin-bottom: 100px;\n"]))),L=B.ZP.button(i||(i=(0,z.Z)(["\ncolor: #3470FF;\n              font-size: 16px;\n              font-weight: 500;\n              line-height: 1.5;\n              text-decoration-line: underline;\n              border: none;\n              background: transparent;\n              margin: 0 auto 150px;\n              cursor: pointer;\n              display: block;\n              &:is(:hover, :focus) {\n                color: #0B44CD;\n              };\n              transition: color 200ms linear;\n"]))),M=t(7948),I=t.n(M),R=t(2013),W=B.ZP.li(o||(o=(0,z.Z)(["\n  display: flex;\n  flex-direction: column;\n  width: 274px;\n  height: 426px;\n  position: relative;\n"]))),D=B.ZP.div(s||(s=(0,z.Z)(["\n  height: 268px;\n  border-radius: 14px;\n  margin-bottom: 14px;\n"]))),H=B.ZP.h3(a||(a=(0,z.Z)(["\n  font-size: 16px;\n  font-weight: 500;\n  line-height: 1.5;\n"]))),A=B.ZP.div(l||(l=(0,z.Z)(["\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 8px;\n"]))),_=B.ZP.div(c||(c=(0,z.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  gap: 4px 12px;\n  margin-bottom: 28px;\n"]))),E=B.ZP.button(d||(d=(0,z.Z)(["\n  position: absolute;\n  top: 14px;\n  right: 14px;\n  border: none;\n  background: transparent;\n  cursor: pointer;\n  &:hover{\n    transform: scale(1.15);\n  };\n  transition: transform 200ms linear;\n"]))),N=B.ZP.p(p||(p=(0,z.Z)(["\n  position: relative;\n  font-size: 12px;\n  font-weight: 400;\n  line-height: 1.5;\n  color: ",';\n  &:not(:last-child)::after {\n    content: "";\n    position: absolute;\n    top: 0;\n    right: -6px;\n    width: 1px;\n    height: 16px;\n    background-color: rgba(18, 20, 23, 0.1);\n  }\n'])),R.r.colors.secondaryText),O=B.ZP.button(u||(u=(0,z.Z)(["\n  display: flex;\n  width: 100%;\n  height: 44px;\n  padding: 12px 0;\n  justify-content: center;\n  align-items: center;\n  flex-shrink: 0;\n  color: ",";\n  border-radius: 12px;\n  border: none;\n  background: ",";\n  position: absolute;\n  bottom: 0;\n  cursor: pointer;\n  &:is(:hover, :focus){\n    background: #0B44CD;\n  };\n  transition: background 200ms linear;\n"])),R.r.colors.white,R.r.colors.blue),q=t(9823),T=B.ZP.button(x||(x=(0,z.Z)(["\n  width: 24px;\n  height: 24px;\n  background: transparent;\n  border: none;\n  position: absolute;\n  top: 16px;\n  right: 16px;\n  cursor: pointer;\n  &:is(:hover, :focus){\n    color: #0B44CD;\n  };\n  transition: color 200ms linear;\n"]))),U=B.ZP.p(h||(h=(0,z.Z)(["\n  color: #121417;\n  font-size: 14px;\n  font-weight: 500;\n  line-height: 1.43; \n  margin-bottom: 8px;\n"]))),G=B.ZP.p(g||(g=(0,z.Z)(["\ncolor: #121417;\nfont-size: 14px;\nfont-weight: 400;\nline-height: 1.43;\nmargin-bottom: 24px;\n"]))),Y=B.ZP.a(f||(f=(0,z.Z)(["\n  display: inline-flex;\n  padding: 12px 50px;\n  justify-content: center;\n  align-items: center;\n  border-radius: 12px;\n  background: #3470ff;\n  color: white;\n  font-size: 14px;\n  font-weight: 600;\n  line-height: 1.43;\n  &:is(:hover, :focus){\n    background: #0B44CD;\n  };\n  transition: 200ms linear;\n"]))),K=B.ZP.div(b||(b=(0,z.Z)(["\n  display:flex;\n  gap: 8px;\n  flex-wrap: wrap;\n  margin-bottom: 24px;\n"]))),V=B.ZP.p(m||(m=(0,z.Z)(["\n  display: flex;\n  padding: 7px 14px;\n  justify-content: center;\n  align-items: center;\n  gap: 8px;\n  border-radius: 35px;\n  background: #f9f9f9;\n  font-size: 12px;\n  line-height: 1.5;\n  letter-spacing: -0.24px;\n"]))),J=t(184),Q={overlay:{backgroundColor:"rgba(18, 20, 23, 0.50)",zIndex:"2",overflow:"none"},content:{maxWidth:"542px",maxHeight:"90vh",top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",borderRadius:"24px",transform:"translate(-50%, -50%)",padding:"40px",overflowY:"auto"}};I().setAppElement("#root");var X,$,nn=function(n){var e=n.car,t=n.isOpen,r=n.handleClose;return(0,J.jsx)("div",{children:(0,J.jsxs)(I(),{disableScroll:!0,isOpen:t,onRequestClose:function(){r()},style:Q,contentLabel:"Car Details Modal",children:[(0,J.jsx)(T,{onClick:r,children:(0,J.jsx)(q.Z,{style:{width:"24px",height:"24px"}})}),(0,J.jsx)("div",{style:{maxWidth:"462px",height:"248px",marginBottom:"14px",borderRadius:"14px",background:"linear-gradient(180deg, rgba(18, 20, 23, 0.5) 2.5%, rgba(18, 20, 23, 0) 41.07%), url(".concat(e.img,")"),backgroundPosition:"50%",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundHeight:"100%"}}),(0,J.jsx)(A,{children:(0,J.jsxs)(H,{children:[e.make,(0,J.jsxs)("span",{style:{color:"#3470FF"},children:[" ",e.model]}),", ",e.year]})}),(0,J.jsxs)(_,{style:{marginBottom:"14px"},children:[(0,J.jsx)(N,{children:e.address.split(", ")[1]}),(0,J.jsx)(N,{children:e.address.split(", ")[2]}),(0,J.jsx)(N,{children:e.rentalCompany}),(0,J.jsx)(N,{children:e.id}),(0,J.jsxs)(N,{children:["Fuel consumption: ",e.fuelConsumption]}),(0,J.jsxs)(N,{children:["Engine size: ",e.engineSize]})]}),(0,J.jsx)(G,{children:e.description}),(0,J.jsx)(U,{children:"Accessories and functionalities:"}),(0,J.jsx)(_,{style:{marginBottom:"24px"},children:e.accessories.concat(e.functionalities).map((function(n,e){return(0,J.jsx)(N,{children:n},e)}))}),(0,J.jsx)(U,{children:"Rental Conditions"}),(0,J.jsxs)(K,{children:[(0,J.jsxs)(V,{children:[e.rentalConditions.split("\n")[0].split(": ")[0],":"," ",(0,J.jsx)("span",{style:{color:"#3470FF",fontWeight:"600"},children:e.rentalConditions.split("\n")[0].split(": ")[1]})]}),(0,J.jsx)(V,{children:e.rentalConditions.split("\n")[1]}),(0,J.jsx)(V,{children:e.rentalConditions.split("\n")[2]}),(0,J.jsxs)(V,{children:["Mileage:"," ",(0,J.jsx)("span",{style:{color:"#3470FF",fontWeight:"600"},children:e.mileage.toLocaleString("en-US")})]}),(0,J.jsxs)(V,{children:["Price:"," ",(0,J.jsx)("span",{style:{color:"#3470FF",fontWeight:"600"},children:e.rentalPrice})]})]}),(0,J.jsx)(Y,{href:"tel:+380730000000",children:"Rental car"})]})})},en=t(7488),tn=t(7237),rn=t(838),on={width:"18px",height:"18px",fill:"white",strokeOpacity:"0.8",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"},sn={width:"18px",height:"18px",fill:"#3470FF",stroke:"#3470FF",strokeLinecap:"round",strokeLinejoin:"round"},an=function(n){var e=n.cars,t=(0,k.useState)(!1),r=(0,j.Z)(t,2),i=r[0],o=r[1],s=(0,v.v9)(w),a=(0,k.useState)(null),l=(0,j.Z)(a,2),c=l[0],d=l[1],p=(0,v.I0)(),u=function(n){return s&&s.find((function(e){return e.id===n.id}))};return(0,J.jsxs)(J.Fragment,{children:[e&&e.map((function(n){return(0,J.jsxs)(W,{children:[u(n)?(0,J.jsx)(E,{onClick:function(){!function(n){p((0,rn.zm)(n))}(n)},children:(0,J.jsx)(tn.Z,{style:sn})}):(0,J.jsx)(E,{onClick:function(){!function(n){p((0,rn._p)(n))}(n)},children:(0,J.jsx)(en.Z,{style:on})}),(0,J.jsx)(D,{style:{background:"linear-gradient(180deg, rgba(18, 20, 23, 0.5) 2.5%, rgba(18, 20, 23, 0) 41.07%), url(".concat(n.img,")"),backgroundPosition:"50%",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundHeight:"100%"}}),(0,J.jsxs)(A,{children:[(0,J.jsxs)(H,{children:[n.make,(0,J.jsxs)("span",{style:{color:"#3470FF"},children:[" ",n.model]}),","," ",n.year]}),(0,J.jsx)(H,{children:n.rentalPrice})]}),(0,J.jsxs)(_,{children:[(0,J.jsx)(N,{children:n.address.split(", ")[1]}),(0,J.jsx)(N,{children:n.address.split(", ")[2]}),(0,J.jsx)(N,{children:n.rentalCompany}),(0,J.jsx)(N,{children:n.id})]}),(0,J.jsx)(O,{onClick:function(){return function(n){d(n),document.body.style.overflow="hidden",o(!0)}(n)},children:"See more"})]},n.id)})),i&&(0,J.jsx)(nn,{isOpen:i,handleClose:function(){d(null),document.body.style.overflow="auto",o(!1)},car:c})]})},ln=t(1087),cn=t(1314),dn=function(n){var e=n.isFavorite,t=n.currentPage,r=n.setCurrentPage,i=(0,v.v9)(Z),o=(0,v.v9)(w),s=(0,v.v9)(P),a=(0,v.v9)(F);return(0,J.jsxs)(J.Fragment,{children:[e&&!o.length?(0,J.jsxs)("div",{style:{padding:"10px"},children:[(0,J.jsx)("h2",{style:{maxWidth:"320px",margin:"50px auto 50px",textAlign:"center"},children:"Your favorites list is empty"}),(0,J.jsx)(ln.rU,{to:"/catalog",children:(0,J.jsx)("button",{style:{margin:"0 auto",display:"flex",height:"48px",padding:"14px 44px",justifyContent:"center",border:"none",alignItems:"center",borderRadius:"12px",background:"#3470FF",color:"white"},children:"Go to catalog"})})]}):(0,J.jsx)(S,{children:(0,J.jsx)(an,{cars:e?o:s.length?s:i})}),a?(0,J.jsx)(cn.a,{}):12*t<=(s.length?s.length:i.length)&&!e&&(0,J.jsx)(L,{onClick:function(){r(t+1)},children:"Load more"})]})},pn=t(1413),un=t(7815),xn=t(9332),hn=t(7234),gn=t(2437),fn=B.ZP.button(X||(X=(0,z.Z)(["\ncolor: #3470FF;\n              font-size: 16px;\n              font-weight: 500;\n              line-height: 1.5;\n              text-decoration-line: underline;\n              border: none;\n              background: transparent;\n              cursor: pointer;\n              display: block;\n              &:is(:hover, :focus) {\n                color: #0B44CD;\n              };\n              transition: color 200ms linear;\n"]))),bn=B.ZP.button($||($=(0,z.Z)(["\ndisplay: flex;\n          max-width: 136px;\n          height: 48px;\n          padding: 14px 44px;\n          justify-content: center;\n          border: none;\n          align-items: center;\n          border-radius: 12px;\n          background: #3470FF;\n          color: white;\n          cursor: pointer;\n          &:is(:hover, :focus) {\n            background: #0B44CD;\n          };\n          transition: background 200ms linear;"]))),mn=["Buick","Volvo","HUMMER","Subaru","Mitsubishi","Nissan","Lincoln","GMC","Hyundai","MINI","Bentley","Mercedes-Benz","Aston Martin","Pontiac","Lamborghini","Audi","BMW","Chevrolet","Chrysler","Kia","Land","Toyota","Tesla","Ford","Honda"],jn=function(){var n=(0,k.useState)(""),e=(0,j.Z)(n,2),t=e[0],r=e[1],i=(0,v.I0)(),o=(0,k.useState)(!1),s=(0,j.Z)(o,2),a=s[0],l=s[1],c=(0,v.v9)(C);return(0,J.jsxs)("div",{style:{display:"flex",justifyContent:"center",gap:"18px",marginBottom:"50px",flexWrap:"wrap"},children:[(0,J.jsx)(xn.Z,{disablePortal:!0,id:"combo-box-demo",options:mn,value:t||null,onChange:function(n,e){r(e)},sx:{"& .MuiInputBase-root":{width:"224px",height:"48px",backgroundColor:"#F7F7FB",borderRadius:"12px",position:"relative"}," & .MuiInputLabel-root":{color:"#121417",fontFamily:"Manrope",fontSize:"18px",fontWeight:"500",lineHeight:"20px",top:"-3px"}},renderInput:function(n){return(0,J.jsx)(un.Z,(0,pn.Z)((0,pn.Z)({sx:{color:"#121417"}},n),{},{label:"Choose car brand",value:t}))}}),(a||c)&&(0,J.jsx)(fn,{onClick:function(){l(!1),r(""),i((0,gn.ko)("")),i((0,gn.IN)()),i((0,gn.qb)()),i((0,hn.c)())},children:"Reset filters"}),(0,J.jsx)(bn,{onClick:function(){if(""===t)return i((0,gn.IN)()),l(!1),void i((0,hn.c)());i((0,gn.ko)(t)),i((0,gn.qb)()),i((0,hn.n)(t)),l(!0)},children:"Search"})]})},kn=function(n){var e=n.isFavorite,t=(0,v.v9)((function(n){return n.cars.isLoading})),r=(0,v.v9)((function(n){return n.cars.error})),i=(0,v.I0)(),o=(0,k.useState)(1),s=(0,j.Z)(o,2),a=s[0],l=s[1];return(0,k.useEffect)((function(){var n=i((0,hn.c)(a));return function(){return n.abort()}}),[a,i]),(0,J.jsxs)(J.Fragment,{children:[!e&&(0,J.jsx)(jn,{}),t&&(0,J.jsx)(cn.a,{}),r&&y.ZP.error("Something was wrong :("),(0,J.jsx)(dn,{isFavorite:e,currentPage:a,setCurrentPage:l})]})}}}]);
//# sourceMappingURL=142.a482c683.chunk.js.map