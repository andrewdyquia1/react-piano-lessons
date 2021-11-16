(this["webpackJsonpreact-piano-lessons"]=this["webpackJsonpreact-piano-lessons"]||[]).push([[0],{23:function(n,e,t){},24:function(n,e,t){"use strict";t.r(e);var i,a,o=t(3),r=t.n(o),s=t(10),c=t.n(s),d=t(2),l=t(1),h=Object(l.a)(i||(i=Object(d.a)(["\n    *{\n        margin: 0;\n        padding: 0;\n        box-sizing: border-box;\n    }\n\n    html{\n        --dark-blue: #475B5A;\n        --dark-blue-op: rgba(71, 91, 90, 0.7);\n        --dark-gray: #8D8E8E;\n        --gray: #A3A9AA;\n        --light-gray: #BBBBBF;\n        --aqua-blue: #52D1DC;\n\n        --profile-pic-length: 250px;\n        --profile-pic-length-med: 400px;\n        --paragraph-width: 800px;\n        --paragraph-height: 400px;\n    }\n\n    .anchor{\n        text-decoration: none;\n        color: #000;\n        transition: color 200ms;\n    \n        &:hover{\n            color: var(--dark-blue);\n        }\n    }\n\n    .header-one{\n        font-size: 1rem;\n\n        @media(min-width: 500px){\n            font-size: 1.5rem;\n        }\n    }\n\n    .header-two{\n        font-size: 2rem; \n    }\n\n    .header-three{\n        font-size: 1.5rem;\n    }\n\n    .paragraph{\n        font-size: 1rem;\n\n        @media(min-width: 600px){\n            font-size: 1.25rem;\n        }\n        \n    }\n"]))),b=t(5),m=t(0);function p(n){var e=n.href,t=n.name;return Object(m.jsx)("div",{children:Object(m.jsxs)("a",{className:"anchor",href:e,children:[" ",t]})})}var u,g=l.b.div(a||(a=Object(d.a)(["\n    ",'\n\n        @media(min-width:760px){\n            display: flex;\n            align-items: center;\n            height: 100%;\n            font-family: "Roboto";\n            \n            & > div{\n            margin-left: 30px;\n            }\n        }\n            \n'])),(function(n){return n.toggle?"\n            display: block;\n            font-family: 'Roboto';\n            position: absolute;\n            z-index: 100;\n            top: 70px;\n            width: 100%;\n            background-color: var(--gray);\n            text-align: center;\n            font-size: 2rem;\n            line-height: 4rem;\n            padding-bottom: 50px;\n\n            @media(min-width: 760px){\n                all:unset;\n            }    \n        ":"\n            display: none;\n            "}));function f(n){var e=n.boolean;return Object(m.jsxs)(g,{toggle:e,className:"nav-active",children:[Object(m.jsx)(p,{href:"#services",name:"Services"}),Object(m.jsx)(p,{href:"#about",name:"About"}),Object(m.jsx)(p,{href:"#faq",name:"FAQ"}),Object(m.jsx)(p,{href:"#contact",name:"Contact"})]})}var j=l.b.div(u||(u=Object(d.a)(["\n    font-family: 'Ephesis';\n\n    //layout specific style\n    grid-area: logo;\n"])));function x(){return Object(m.jsx)(j,{children:Object(m.jsx)("h1",{className:"header-one",children:Object(m.jsx)("a",{className:"anchor",href:"/",children:"Dyquiangco Piano Studio"})})})}var y,v,O,w=t(4),k=l.b.nav(y||(y=Object(d.a)(["\n    padding: 30px 0;\n    background-color: var(--gray);\n    max-width: 100vw;\n"]))),I=l.b.div(v||(v=Object(d.a)(["\n    display: grid;\n    grid-template-columns: repeat(16, 1fr);\n    grid-template-areas: '. bars . . logo logo logo logo logo logo logo logo . . . .';\n    height: 100%;\n    justify-items: center;\n    align-items: center;\n\n    @media(min-width: 760px){\n        display: flex;\n        justify-content: space-between;\n        align-items: center;\n        margin: 0 20px;\n    }\n"]))),q=Object(l.b)(w.a)(O||(O=Object(d.a)(["\n    font-size: 35px;\n    cursor: pointer;\n\n    //layout specific style\n    grid-area: bars;\n\n    @media(min-width: 760px){\n        display: none;\n    }\n"])));function z(){var n=Object(o.useState)(!1),e=Object(b.a)(n,2),t=e[0],i=e[1];return Object(m.jsx)(k,{children:Object(m.jsxs)(I,{children:[Object(m.jsx)(q,{onClick:function(){i(!t)}}),Object(m.jsx)(x,{}),Object(m.jsx)(f,{boolean:!!t})]})})}var C,A,D,N,S=t.p+"static/media/piano-picture.2e51edd0.jpg",B=l.b.section(C||(C=Object(d.a)(["\n    max-width: 100vw;\n    min-height: 650px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    position: relative;\n\n    &::before{\n        content: ' ';\n        background-image: url(",");\n        background-size: cover;\n        opacity: 0.8;\n        position: absolute;\n        top: 0;\n        right: 0;\n        left: 0;\n        bottom: 0;\n    }\n"])),S),M=l.b.div(A||(A=Object(d.a)(["\n    position: relative;\n    font-family: 'Roboto';\n    display: flex;\n    flex-direction: column;\n    justify-content: space-evenly;\n    width: 70%;\n    max-width: 375px;\n    background-color: var(--dark-blue-op);\n    padding: 50px;\n"]))),R=l.b.h2(D||(D=Object(d.a)(["\n    font-size: 2rem;\n\n    @media(min-width: 530px){\n        font-size: 2.75rem;\n    }\n"])));function T(){return Object(m.jsx)(B,{children:Object(m.jsxs)(M,{children:[Object(m.jsx)(R,{children:"Andrew Dyquiangco Piano Studio"}),Object(m.jsx)("p",{className:"paragraph",children:"Piano lessons for all ages. Offering in person lessons in Orange County, California and online lessons."})]})})}var P,F,W,$,E,G,L,V,H,J,U,Q,K,X=l.b.section(N||(N=Object(d.a)(["\n    padding: 50px 20px;\n    font-family: 'roboto';\n    background-color: var(--gray);\n"]))),Y=[{id:1,lessonType:"Online Lessons"},{id:2,lessonType:"Lessons at Student's Residence"}],Z=[[{id:1,length:"30 minute lesson",price:"$30"},{id:2,length:"45 minute lesson",price:"$45"},{id:3,length:"60 minute lesson",price:"$60"}],[{id:1,length:"30 minute lesson",price:"$32"},{id:2,length:"45 minute lesson",price:"$47"},{id:3,length:"60 minute lesson",price:"$62"}]],_=[[[{id:1,text:"Recommended for beginners"}],[{id:1,text:"Recommended for intermediate students"}],[{id:1,text:"Recommended for advanced students"}]],[[{id:1,text:"Recommended for beginners"},{id:2,text:"Gas fee included"},{id:3,text:"Only available in Orange County, California and surrounding areas"}],[{id:1,text:"Recommended for intermediate students"},{id:2,text:"Gas fee included"},{id:3,text:"Only available in Orange County, California and surrounding areas"}],[{id:1,text:"Recommended for advanced students"},{id:2,text:"Gas fee included"},{id:3,text:"Only available in Orange County, California and surrounding areas"}]]],nn=[{id:1,question:"When are you available to teach?",answer:"I am available to teach weekdays from 1-8 PM and can do make up lessons Saturday from 10 AM-2 PM."},{id:2,question:"What is your policy regarding COVID-19? Are you vaccinated?",answer:"I ask that students wear masks regardless of vaccination status for in person lessons. I will wear a mask too and generally keep my distance unless if I have to demonstrate on the piano. I sanitize my hands before each student. I ask if you have any symptoms of COVID-19 (or other similar infectious diseases), please let me know as soon as you can and we will schedule a make up lesson. If you do not comply with wearing a mask, the lesson will end immediately, it can't be made up, and will still be charged as a lesson at the end of the month. I am fully vaccinated against COVID-19."},{id:3,question:"Why are prices more expensive to have lessons at my residence than online?",answer:"The prices factor in travel expenses."},{id:4,question:"How far can you drive for teaching?",answer:"I am based in the city of Orange. I can come drive as far as a ~20 mile radius from Orange. Other factors include time to travel and time of day of the lesson. If the lesson time asked is during peak rush hour and is about 20 miles, I probably can't accomodate that."},{id:5,question:"When are you available for contact?",answer:"Generally I answer from 9 AM-9PM every day. I prefer text or email during working hours as I may be teaching."},{id:6,question:"How do you charge payments for lessons?",answer:"At the beginning of the month, the student and I will determine how many lessons we will do for the month; this will typically be one lesson a week. I will charge for those lessons at the end of that month. Any lessons missed for that month will still be charged at the end of the month."},{id:7,question:"What is your cancellation policy?",answer:"If a lesson time can't be honored by the student, the student can skip the lesson and receive a make up lesson if a) I'm given at least 24 hours before the time of the lesson, or b) the student is sick, has a mandatory event to attend, has a family emergency, or any other emergency if contact is made less than 24 hours of the lesson. If a cancellation is made without at least one of these requirements, the lesson can't be made up and will still be charged at the end of the month."},{id:8,question:"What is a make up lesson and how does it work?",answer:"A make up lesson is given if a normal lesson can't be attended by either the student, given proper notification, or by me. We will pick a day and time to do the make up lesson. A make up lesson has no fee. I will rarely have to cancel a lesson and if I do, it will usually be at least two weeks in advanced; the exception is if I'm sick or have some other emergency."}],en=l.b.div(P||(P=Object(d.a)(["\n    font-family: 'roboto';\n    padding: 30px;\n    margin: 0 auto;\n    margin-bottom: 30px;\n    max-width: 1200px;\n"]))),tn=l.b.div(F||(F=Object(d.a)(["\n     padding: 25px;\n     display: flex;\n     align-items: center;\n     justify-content: center;\n     flex-direction: column;\n\n    & > *:not(:last-child){\n        margin-bottom: 30px;\n    }\n\n     @media(min-width: 850px){\n         flex-direction: row;\n         justify-content: space-around; \n         align-items: stretch;\n\n         & > *:not(:last-child){\n            margin-bottom: 0;\n            margin-right: 10px;\n        }\n     }\n\n\n"]))),an=l.b.div(W||(W=Object(d.a)(["\n    width: 65vw;\n    padding: 10px;\n    background: var(--light-gray);\n    text-align: center;\n    box-shadow: 8px 0px 20px var(--dark-blue);\n    \n    \n    @media(min-width: 1200px){\n        width: 350px; \n    }\n"]))),on=l.b.div($||($=Object(d.a)(["\n"]))),rn=l.b.h2(E||(E=Object(d.a)(["\n    width: 150px;\n    margin: 0 auto;\n    font-size: 5rem;\n    position: relative;\n    color: #000;\n    @media(min-width: 850px){\n        font-size: 5rem;\n    }\n"]))),sn=l.b.div(G||(G=Object(d.a)(["\n    font-size: 0.7rem;\n    color: #000;\n    position: absolute; \n    bottom: 16px; \n    right:-27px;\n    font-weight:400;\n\n    @media(min-width: 768px){\n        font-size: 0.8rem;\n        right:-40px;\n    }\n"]))),cn=l.b.ul(L||(L=Object(d.a)(["\n    text-align: start;\n    width: 60%;\n    margin: 0 auto;\n\n    & > *:not(:last-child){\n        margin-bottom: 5px;\n    }   \n"])));function dn(n){var e=n.length,t=n.price,i=n.num,a=n.secondNum;return Object(m.jsxs)(an,{children:[Object(m.jsxs)(on,{children:[Object(m.jsx)("h3",{className:"header-three",children:e}),Object(m.jsxs)(rn,{children:[t," ",Object(m.jsx)(sn,{children:"/ week *"})]})]}),Object(m.jsx)(cn,{children:_[i][a].map((function(n){var e=n.text;return Object(m.jsx)("li",{children:e})}))})]})}function ln(n){var e=n.lessonType,t=n.num;return Object(m.jsxs)(en,{children:[Object(m.jsx)("h3",{className:"header-three",children:e}),Object(m.jsx)(tn,{children:Z[t].map((function(n){var e=n.id,i=n.length,a=n.price;return Object(m.jsx)(dn,{length:i,price:a,num:t,secondNum:e-1},e)}))})]})}function hn(){return Object(m.jsxs)(X,{id:"services",children:[Y.map((function(n){var e=n.id,t=n.lessonType;return Object(m.jsx)(ln,{lessonType:t,num:e-1},e)})),Object(m.jsx)("p",{children:"* USD"})]})}var bn,mn,pn,un,gn,fn,jn,xn=l.b.section(V||(V=Object(d.a)(["\n    background: var(--dark-blue);\n    padding: 100px 60px;\n    font-family: 'roboto';\n"]))),yn=l.b.div(H||(H=Object(d.a)(["\n    display: flex;\n    flex-direction: column; \n    align-items: center;\n    position: relative;\n    max-width: 1200px;\n    margin: 0 auto;\n\n    @media(min-width: 1200px){\n        flex-direction: row;\n        justify-content: space-around;\n    }\n"]))),vn=l.b.div(J||(J=Object(d.a)(["\n    position: relative;\n    z-index: 12;\n    margin-bottom: 125px;\n    width: var(--profile-pic-length);\n    height: var(--profile-pic-length);\n\n    &::before {\n            content: ' ';\n            position: absolute;\n            top: 10%;\n            right: 3%;\n            border: 5px solid var(--aqua-blue);\n            height: 100%;\n            width: 100%;\n            z-index: 11;\n        }\n\n    @media(min-width: 600px){\n        width: var(--profile-pic-length-med);\n        height: var(--profile-pic-length-med);\n    }   \n     \n    @media(min-width: 1200px){\n        margin: 0;\n    }\n"]))),On=l.b.img(U||(U=Object(d.a)(["\n    width: var(--profile-pic-length);\n    height: var(--profile-pic-length);\n    object-fit: cover;\n    object-position: top;\n\n    @media(min-width: 600px){\n        width: var(--profile-pic-length-med);\n        height: var(--profile-pic-length-med);\n    }\n    //background styling styles\n    position: relative;\n    z-index: 12;\n"]))),wn=l.b.div(Q||(Q=Object(d.a)(["\n    position: relative;\n    width: 75vw;\n    z-index: 10;\n    &::before {\n            content: ' ';\n            position: absolute;\n            top: 10%;\n            right: 3%;\n            border: 5px solid var(--aqua-blue);\n            height: 100%;\n            width: 100%;\n            z-index: 1;\n        }\n\n    @media(min-width: 800px){\n        max-width: 600px;\n    }\n"]))),kn=l.b.p(K||(K=Object(d.a)(["\n    padding: 10px;\n    background-color: var(--light-gray);\n    line-height: 1.5;\n\n    //background styling styles\n    position: relative;\n    z-index: 10;\n"]))),In=t.p+"static/media/andrew-dyquiangco.c708ef89.jpg";function qn(){return Object(m.jsx)(xn,{id:"about",children:Object(m.jsxs)(yn,{children:[Object(m.jsx)(vn,{children:Object(m.jsx)(On,{src:In,alt:"Teacher Andrew Dyquiangco"})}),Object(m.jsx)(wn,{children:Object(m.jsx)(kn,{className:"paragraph",children:"I am Andrew Dyquiangco. I am a piano teacher who has been teaching for the past six years. I studied at California State University Long Beach and received a Bachelor degree in Music Performance. I have taught students for the Certificate of Merit and National Guild of Musicians programs. My goal for my students is for them to discover the joys of learning and producing music in a pain free way. I hope for them to develop their own music tastes, find motivation to learn to play the music they love, and to just enjoy the world of music making."})})]})})}var zn,Cn=l.b.div(bn||(bn=Object(d.a)(["\n    background-color: var(--dark-gray);\n    min-width: 85vw;\n    margin: 0 auto 5px;\n    text-align: start;\n    line-height: 1.5;\n    font-size: 1.2rem;\n\n"]))),An=l.b.div(mn||(mn=Object(d.a)(["\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding: 20px 30px;\n    cursor: pointer;\n    \n"]))),Dn=l.b.div(pn||(pn=Object(d.a)(["\n    padding-right: 15vw;\n"]))),Nn=l.b.div(un||(un=Object(d.a)(["\n    cursor: pointer;\n"]))),Sn=Object(l.b)(w.b)(gn||(gn=Object(d.a)(["\n    width: 30px;\n    ","\n"])),(function(n){return n.toggle?"\n                    display: none;\n                ":"\n                    display: block;\n                "})),Bn=Object(l.b)(w.c)(fn||(fn=Object(d.a)(["\n    width: 30px;\n\n    ","\n"])),(function(n){return n.toggle?"\n                    display: block;\n                ":"\n                    display: none;\n                "})),Mn=l.b.div(jn||(jn=Object(d.a)(["\n\n    ","\n"])),(function(n){return n.toggle?"\n                    display: block;\n                    padding: 50px 15vw 50px 30px;\n                    background-color: var(--light-gray);\n                ":"\n                    display: none;\n                "}));function Rn(n){var e=n.question,t=n.answer,i=Object(o.useState)(!1),a=Object(b.a)(i,2),r=a[0],s=a[1];return Object(m.jsxs)(Cn,{children:[Object(m.jsxs)(An,{onClick:function(){s(!r)},children:[Object(m.jsx)(Dn,{children:e}),Object(m.jsxs)(Nn,{children:[Object(m.jsx)(Sn,{toggle:r}),Object(m.jsx)(Bn,{toggle:r})]})]}),Object(m.jsx)(Mn,{toggle:r,children:t})]})}var Tn,Pn,Fn,Wn,$n,En=l.b.section(zn||(zn=Object(d.a)(["\n    padding: 50px 20px;\n    font-family: 'roboto';\n    background: var(--gray);\n    text-align: center;\n"])));function Gn(){return Object(m.jsx)(En,{id:"faq",children:nn.map((function(n){var e=n.id,t=n.question,i=n.answer;return Object(m.jsx)(Rn,{question:t,answer:i},e)}))})}var Ln=l.b.section(Tn||(Tn=Object(d.a)(["\n    background-color: var(--dark-gray);\n    padding: 50px 20px;\n    font-family: 'roboto';\n"]))),Vn=l.b.div(Pn||(Pn=Object(d.a)(["\n    display: flex;\n    justify-content: space-around;\n    align-items: center;\n\n    @media(min-width: 1000px){\n        justify-content: space-between;\n    }\n"]))),Hn=l.b.div(Fn||(Fn=Object(d.a)(["\n    & > *:not(:last-child){\n        margin-right: 10px;\n    }\n"]))),Jn=l.b.span(Wn||(Wn=Object(d.a)(["\n    display: inline-block;\n"]))),Un=l.b.p($n||($n=Object(d.a)(["\n    margin-left:10px;\n"])));function Qn(){return Object(m.jsx)(Ln,{id:"contact",children:Object(m.jsxs)(Vn,{children:[Object(m.jsxs)(Hn,{children:[Object(m.jsxs)(Jn,{children:["Call or Text: ",Object(m.jsx)("a",{href:"tel:7143102211",children:"(714)310-2211"})]}),Object(m.jsxs)(Jn,{children:["Email: ",Object(m.jsx)("a",{href:"mailto:andrewdyquia.93@gmail.com",children:"andrewdyquia.93@gmail.com"})]})]}),Object(m.jsx)(Un,{children:"\xa9 2021 Andrew Dyquiangco"})]})})}t(23);var Kn=function(){return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(h,{}),Object(m.jsx)(z,{}),Object(m.jsx)(T,{}),Object(m.jsx)(hn,{}),Object(m.jsx)(qn,{}),Object(m.jsx)(Gn,{}),Object(m.jsx)(Qn,{})]})},Xn=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,25)).then((function(e){var t=e.getCLS,i=e.getFID,a=e.getFCP,o=e.getLCP,r=e.getTTFB;t(n),i(n),a(n),o(n),r(n)}))};c.a.render(Object(m.jsx)(r.a.StrictMode,{children:Object(m.jsx)(Kn,{})}),document.getElementById("root")),Xn()}},[[24,1,2]]]);
//# sourceMappingURL=main.0f6672a4.chunk.js.map