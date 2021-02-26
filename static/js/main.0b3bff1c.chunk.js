(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{18:function(t,e,n){"use strict";n.r(e);var a=n(1),r=n.n(a),c=n(10),i=n.n(c),o=n(12),s=n(2),l=n(3),u=n(5),h=n(4),b=n(11),d=n(6),m=n(8),j=n.n(m),f=n(20),p=n(0),O=function(t){Object(u.a)(n,t);var e=Object(h.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).state={name:"",number:""},t.handleChangeFormFields=function(e){var n=e.currentTarget,a=n.name,r=n.value;t.setState(Object(d.a)({},a,r))},t.handleSubmit=function(e){e.preventDefault();var n=t.state,a=n.name,r=n.number;a.length>0&&r.length>0?(t.props.onSubmit(Object(b.a)({id:Object(f.a)()},t.state)),t.reset()):alert("Write all fields")},t.reset=function(){t.setState({name:"",number:""})},t}return Object(l.a)(n,[{key:"render",value:function(){return Object(p.jsxs)("div",{className:j.a.phonebook__form,children:[Object(p.jsx)("h2",{className:j.a.form__title,children:"Phonebook"}),Object(p.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(p.jsxs)("label",{children:["Name:",Object(p.jsx)("input",{type:"text",name:"name",value:this.state.name,onChange:this.handleChangeFormFields})]}),Object(p.jsxs)("label",{children:["Contact:",Object(p.jsx)("br",{}),Object(p.jsx)("input",{type:"text",name:"number",value:this.state.number,onChange:this.handleChangeFormFields})]}),Object(p.jsx)("button",{type:"submit",children:"Add contact"})]})]})}}]),n}(a.Component),C=n(9),x=n.n(C),v=function(t){Object(u.a)(n,t);var e=Object(h.a)(n);function n(){return Object(s.a)(this,n),e.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var t=this;return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("h2",{children:"Contacts"}),Object(p.jsx)("h3",{children:"Find contacts by name"}),Object(p.jsx)("input",{value:this.props.filterField,onChange:this.props.handleChangeFilterField}),Object(p.jsx)("ul",{className:x.a.SaveContactList,children:this.props.contacts.map((function(e){return Object(p.jsxs)("li",{className:x.a.SaveContactItem,children:[Object(p.jsx)("span",{children:e.name}),": ",Object(p.jsx)("span",{children:e.number}),Object(p.jsx)("button",{onClick:function(){return t.props.handleDeleteContacts(e.id)},children:"delete"})]},e.id)}))})]})}}]),n}(a.Component),_=function(t){Object(u.a)(n,t);var e=Object(h.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},t.formSubmitHandler=function(e){t.state.contacts.find((function(t){return t.number===e.number}))?alert("Such a number exists in contacts."):t.setState((function(t){return{contacts:[].concat(Object(o.a)(t.contacts),[e])}}))},t.handleChangeFilterField=function(e){t.setState({filter:e.target.value})},t.handleFilterContacts=function(){return t.state.contacts.filter((function(e){return e.name.toLowerCase().includes(t.state.filter.toLowerCase())}))},t.handleDeleteContacts=function(e){t.setState({contacts:t.state.contacts.filter((function(t){return t.id!==e}))})},t}return Object(l.a)(n,[{key:"render",value:function(){var t=this.handleFilterContacts();return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(O,{onSubmit:this.formSubmitHandler}),Object(p.jsx)(v,{contacts:t,filterField:this.state.filter,handleChangeFilterField:this.handleChangeFilterField,handleDeleteContacts:this.handleDeleteContacts})]})}}]),n}(a.Component);i.a.render(Object(p.jsx)(r.a.StrictMode,{children:Object(p.jsx)(_,{})}),document.getElementById("root"))},8:function(t,e,n){t.exports={phonebook__form:"Form_phonebook__form__37x1c",form__title:"Form_form__title__3xzmy"}},9:function(t,e,n){t.exports={SaveContactList:"Contacts_SaveContactList__dVnhC",SaveContactItem:"Contacts_SaveContactItem__3AagR"}}},[[18,1,2]]]);
//# sourceMappingURL=main.0b3bff1c.chunk.js.map