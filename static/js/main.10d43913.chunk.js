(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{15:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),c=n(8),o=n.n(c),s=n(2),i=n(3),b=n(5),u=n(4),l=n(9),h=n(7),m=n.n(h),j=n(0),f=function(e){Object(b.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={contacts:[],name:"",number:""},e.handleChange=function(t){var n=t.currentTarget,a=n.name,r=n.value;e.setState(Object(l.a)({},a,r))},e.handleSubmit=function(t){t.preventDefault(),e.props.onSubmit(e.state),e.reset()},e.reset=function(){e.setState({name:"",number:""})},e}return Object(i.a)(n,[{key:"render",value:function(){return Object(j.jsxs)("div",{className:m.a.phonebook__form,children:[Object(j.jsx)("h2",{className:m.a.form__title,children:"Phonebook"}),Object(j.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(j.jsxs)("label",{children:["Name:",Object(j.jsx)("input",{type:"text",name:"name",value:this.state.name,onChange:this.handleChange})]}),Object(j.jsxs)("label",{children:["Contact:",Object(j.jsx)("br",{}),Object(j.jsx)("input",{type:"text",name:"number",value:this.state.number,onChange:this.handleChange})]}),Object(j.jsx)("button",{type:"submit",children:"Add contact"})]})]})}}]),n}(a.Component),p=function(e){Object(b.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={contacts:[],name:"",number:""},e}return Object(i.a)(n,[{key:"render",value:function(){return Object(j.jsx)(j.Fragment,{})}}]),n}(a.Component),O=function(e){Object(b.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={contacts:[],name:"",number:""},e.formSubmitHandler=function(e){console.log(e)},e}return Object(i.a)(n,[{key:"render",value:function(){return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(f,{onSubmit:this.formSubmitHandler}),Object(j.jsx)(p,{})]})}}]),n}(a.Component);o.a.render(Object(j.jsx)(r.a.StrictMode,{children:Object(j.jsx)(O,{})}),document.getElementById("root"))},7:function(e,t,n){e.exports={phonebook__form:"Form_phonebook__form__1es10",form__title:"Form_form__title__wGJNw"}}},[[15,1,2]]]);
//# sourceMappingURL=main.10d43913.chunk.js.map