(this.webpackJsonpshoppify=this.webpackJsonpshoppify||[]).push([[0],[,function(t,e,a){t.exports={img_off:"RowComponent_img_off__1NEmC",item_detail:"RowComponent_item_detail__1Vbrq",item_detail_main:"RowComponent_item_detail_main__GuA52",item_detail_sub:"RowComponent_item_detail_sub__3RHev",line:"RowComponent_line__1iksb",offer_price:"RowComponent_offer_price__2fvVk",add_to_cart:"RowComponent_add_to_cart__1Q9Aa",cart:"RowComponent_cart__GJ3Ey",plus:"RowComponent_plus__1xhjV",minus:"RowComponent_minus__O0TTj"}},function(t,e,a){t.exports={modal:"ModalData_modal__AIDFu",modalhead:"ModalData_modalhead__2bgA4",modalfoot:"ModalData_modalfoot__23f3O",btn1:"ModalData_btn1__3lIET",btn2:"ModalData_btn2__GARTN",btn:"ModalData_btn__1e60K"}},function(t,e,a){t.exports={checkout_content:"Checkout_checkout_content__3ogCi",checkout_qty:"Checkout_checkout_qty__2HaWC",checkout_btn:"Checkout_checkout_btn__BKGRG",btn:"Checkout_btn__FP7Hi"}},,,,,,function(t,e,a){t.exports={layout:"ShoppingList_layout__1vIl-",shopping_list:"ShoppingList_shopping_list__298ID",list_item:"ShoppingList_list_item__Cu_WY"}},,,,function(t,e,a){t.exports={main_header:"Header_main_header__2jDrl"}},function(t,e,a){t.exports=a.p+"static/media/logo.06cf14e1.png"},function(t,e,a){t.exports={Modal:"Model_Modal__2qQuK"}},function(t,e,a){t.exports={Backdrop:"Backdrop_Backdrop__WNgHk"}},function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABmJLR0QA/wD/AP+gvaeTAAAAzUlEQVRIie3WMQrCQBCF4V/BW1gINhZ6A8FKUGwEL+Q9xQhGkFjbr0W22ASTzC4zATEP0mQXvrxkAgtD/jEH4AE4pSsDthI4V0QdUABLCayJvoCVBNWEw6a9NQ6bLoBnH/A31FnDTagp3IaawV2oCSxBk+ETcATetfv1X6ZoecAkeO7XNgEegybDN2Dm19fAFdnrVfnGF2Dq90wimqoMV9hc2lRtqjPgTDnNMdNfyagBtkjFGhshnRlgKM9b2sklm/bonrvuwE6xxJAfyQcBBEWbckhYRwAAAABJRU5ErkJggg=="},function(t,e,a){t.exports=a(24)},,,,,function(t,e,a){},function(t,e,a){"use strict";a.r(e);var n=a(0),c=a.n(n),o=a(12),l=a.n(o),r=(a(23),a(5)),i=a(6),s=a(8),u=a(7),m=a(10),d=a(4),_=a(9),p=a.n(_),f=a(1),h=a.n(f),E=function(t){var e="";return""!==t.product.offerytext&&(e=t.product.offerytext+"OFF"),c.a.createElement("li",null,c.a.createElement("div",{className:h.a.img_off},c.a.createElement("img",{src:t.product.imageURL,width:"100",height:"100",alt:"product image"}),c.a.createElement("p",null,e)),c.a.createElement("div",{className:h.a.item_detail},c.a.createElement("h4",null,t.product.brandname),c.a.createElement("div",{className:h.a.item_detail_main},c.a.createElement("p",null,t.product.productname)),c.a.createElement("div",{className:h.a.item_detail_sub},c.a.createElement("p",null,t.product.quantity),c.a.createElement("p",{className:h.a.line},"MRP ",t.product.MRF)),c.a.createElement("p",{className:h.a.offer_price},"Rs ",t.product.price)),c.a.createElement("div",{className:h.a.add_to_cart},c.a.createElement("div",{className:h.a.cart,onClick:function(e){return function(e){t.cart(e)}(t.product.id)}},"ADD CART"),c.a.createElement("div",{className:h.a.plus,onClick:function(e){return function(e){t.click(e)}(t.product.id)}},"+"),c.a.createElement("p",null,t.product.qty),c.a.createElement("div",{className:h.a.minus,onClick:function(e){return function(e){t.dec(e)}(t.product.id)},disabled:!0},"-")))},k=a(3),A=a.n(k),v=function(t){return c.a.createElement("div",{className:A.a.checkout_content},c.a.createElement("div",{className:A.a.checkout_qty},c.a.createElement("p",null," \u20b9 ",t.total),c.a.createElement("p",null,c.a.createElement("small",null,t.qty," Item"))),c.a.createElement("div",{className:A.a.checkout_btn},c.a.createElement("div",{className:A.a.btn,onClick:t.click},"CHECKOUT")))},C=a(13),b=a.n(C),g=a(14),y=a.n(g),N=function(){return c.a.createElement("div",{className:b.a.main_header},c.a.createElement("img",{src:y.a,alt:"logo"}),c.a.createElement("h1",null,"Shoppify"))},w=a(15),O=a.n(w),R=function(t){return c.a.createElement("div",{className:O.a.Modal},t.children)},j=a(16),q=a.n(j),B=function(t){return t.show?c.a.createElement("div",{className:q.a.Backdrop,onClick:t.click}):null},D=a(2),x=a.n(D),M=a(17),S=a.n(M),T=function(t){return c.a.createElement("div",{className:x.a.modal},c.a.createElement("div",{className:x.a.modalhead},c.a.createElement("img",{src:S.a,alt:"tick"}),c.a.createElement("h3",null,"Order Placed")),c.a.createElement("h2",null,"Total Price: ",t.total),c.a.createElement("div",{className:x.a.modalfoot},c.a.createElement("div",{className:x.a.btn+" "+x.a.btn1},c.a.createElement("a",{href:"/"},"Go Home")),c.a.createElement("div",{className:x.a.btn+" "+x.a.btn2,onClick:t.cancel},"Cancel")))},F=function(t){Object(s.a)(a,t);var e=Object(u.a)(a);function a(){var t;Object(r.a)(this,a);for(var n=arguments.length,c=new Array(n),o=0;o<n;o++)c[o]=arguments[o];return(t=e.call.apply(e,[this].concat(c))).state={modal:!1,show:!1,quantity:0,totalPrice:0,products:[]},t.onClickAdd=function(e){var a=Object(d.a)(t.state.products);a.map((function(t){e===t.id&&(t.qty+=1)})),t.setState((function(t){return Object(m.a)({},t,{products:a})}))},t.onClickReduce=function(e){var a=Object(d.a)(t.state.products);a.map((function(t){e===t.id&&0!==t.qty&&(t.qty-=1)})),t.setState((function(t){return Object(m.a)({},t,{products:a})}))},t.OnDelCart=function(e){t.onClickReduce(e);var a=Object(d.a)(t.state.products),n=0,c=0;a.map((function(t){n+=t.price*t.qty,c+=t.qty})),console.log(n),t.setState({quantity:c,totalPrice:n})},t.OnAddCart=function(e){t.onClickAdd(e);var a=Object(d.a)(t.state.products),n=0,c=0;a.map((function(t){n+=t.price*t.qty,c+=t.qty})),console.log(n),t.setState({quantity:c,totalPrice:n})},t.OnCheckout=function(){t.state.quantity>0&&t.setState({modal:!0,show:!0})},t.OncloseBackdrop=function(){t.setState({modal:!1,show:!1})},t}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var t=this;fetch("./products.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}}).then((function(t){return t.json()})).then((function(e){e.map((function(t){return t.qty=0})),console.log(e),t.setState({products:e})}))}},{key:"render",value:function(){var t=this,e="";0!==this.state.products.length&&(e=this.state.products.map((function(e){return c.a.createElement(E,{key:e.id,product:e,click:function(e){return t.OnAddCart(e)},dec:function(e){return t.OnDelCart(e)},cart:function(e){return t.OnAddCart(e)}})})));var a="";return this.state.modal&&(a=c.a.createElement("div",null,c.a.createElement(R,null,c.a.createElement(T,{total:this.state.totalPrice,cancel:this.OncloseBackdrop})),c.a.createElement(B,{show:this.state.show,click:this.OncloseBackdrop}))),c.a.createElement("div",{className:p.a.layout},c.a.createElement(N,null),c.a.createElement("section",{className:p.a.shopping_list},c.a.createElement("ul",{className:p.a.list_item},e)),c.a.createElement(v,{qty:this.state.quantity,total:this.state.totalPrice,click:function(){return t.OnCheckout()}}),a)}}]),a}(n.Component),P=function(t){Object(s.a)(a,t);var e=Object(u.a)(a);function a(){return Object(r.a)(this,a),e.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement(F,null))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(c.a.createElement(P,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))}],[[18,1,2]]]);
//# sourceMappingURL=main.fa59adec.chunk.js.map