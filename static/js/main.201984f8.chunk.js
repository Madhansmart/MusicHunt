(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{39:function(e,a,t){e.exports=t.p+"static/media/logo.806430aa.png"},40:function(e,a,t){e.exports=t(77)},45:function(e,a,t){},46:function(e,a,t){},47:function(e,a,t){},67:function(e,a,t){},68:function(e,a,t){e.exports=t.p+"static/media/song1.2b07eae0.mp3"},70:function(e,a,t){e.exports=t.p+"static/media/ko.ed130e8f.jpg"},77:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(16),s=t.n(r),c=(t(45),t(4)),i=t(5),m=t(7),o=t(6),u=t(8),d=t(3),b=(t(46),t(19)),p=(t(47),t(48),t(17)),E=t.n(p),v="http://localhost:5000",f=function(e){return E.a.post(v+"/users/login",{userName:e.userName,password:e.password}).then(function(e){return console.log(e),void 0!==e.data&&void 0===e.data.error&&localStorage.setItem("musicHunt",e.data),e.data}).catch(function(e){return e})},h=function(e){return E.a.get(v+"/getAllTracks",{params:{albumId:e}}).then(function(e){return void 0===e.data.body||null===e.data.body?"Server Down":e.data.body})},N=function(e){return E.a.post(v+"/users/register",{firstName:e.firstName,lastName:e.lastName,userName:e.userName,email:e.email,password:e.password}).then(function(e){return e})},g=(t(67),t(22)),y=t.n(g),O=(t(68),t(69),t(23)),w=t.n(O),k=t(13),j=t(15),S=(t(70),function(e){function a(){return Object(c.a)(this,a),Object(m.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"home"},l.a.createElement(C,null),l.a.createElement(I,null),l.a.createElement(P,null))}}]),a}(n.Component)),C=function(e){function a(e){var t;return Object(c.a)(this,a),(t=Object(m.a)(this,Object(o.a)(a).call(this,e))).createAlbumActive=function(){t.setState({isAlbumCreate:!0})},t.createAlbum=function(e){for(var a=t.state.albumData.slice(),n=0,l=0;l<a.length;l++)a[l].title===e.albumName&&n++;if(n)var r={albumImg:"",description:e.albumDesc,songs:[],title:e.albumName};a.push(r),t.setState({albumData:a,isAlbumCreate:!1})},t.setAlbumTitle=function(e){t.setState({albumTitle:t.state.albumData[e].album_title})},t.state={currentCard:0,position:0,cardStyle:{transform:"translateX(0px)"},width:0,albumData:[],isAlbumCreate:!1,isDataAlive:!1,albumTitle:"Albums"},t}return Object(u.a)(a,e),Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;E.a.get(v+"/allAlbums").then(function(e){return void 0===e.data.body||null===e.data.body?"Server Down":e.data.body}).then(function(a){if(console.log(a),void 0===a.dataset)d.b.error("Server Unavailable",{position:d.b.POSITION.TOP_RIGHT});else if(e.setState({albumData:a.dataset,isDataAlive:!0}),null!==document.getElementById("card"))document.getElementById("card").clientWidth})}},{key:"handleClick",value:function(e){var a=window.getComputedStyle(document.getElementById("card")).marginRight;a=JSON.parse(a.replace(/px/i,""));var t=this.state.width,n=a,l=this.state.albumData.length,r=this.state.currentCard,s=this.state.position;console.log(n,l),"next"===e&&r<l-1?(r++,s-=t+n):"prev"===e&&r>0&&(r--,s+=t+n),this.setCard(r,s)}},{key:"setCard",value:function(e,a){this.setState({currentCard:e,position:a,cardStyle:{transform:"translateX(".concat(a,"px)")}})}},{key:"render",value:function(){var e=this,a={display:"Albums"===this.props.albumTitle?"block":"none"},t={display:this.state.isDataAlive?"block":"none"};return this.state.isAlbumCreate?l.a.createElement(A,{createAlbum:this.createAlbum}):l.a.createElement("div",{className:"album container-fluid",style:t},l.a.createElement("div",{className:"cards-slider row"},l.a.createElement("div",{className:"col-md-9"},l.a.createElement("h3",null,l.a.createElement(k.b,{to:"/"},"Albums"),"Albums"!==this.state.albumTitle?l.a.createElement("span",null,"\xa0>\xa0",this.state.albumTitle):"")),l.a.createElement("div",{className:"btn btn-success create-albm-btn",style:a,onClick:this.createAlbumActive},"Create Album"),l.a.createElement("div",{className:"ml-auto"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"arrow-btn"},l.a.createElement("div",{className:"btn btn-sm btn-outline-secondary btn-arrow-left",onClick:function(){return e.handleClick("prev")}},l.a.createElement("span",null,"<"))),l.a.createElement("div",{className:"col-md-1 arrow-btn"},l.a.createElement("div",{className:"btn btn-sm btn-outline-secondary btn-arrow-right",onClick:function(){return e.handleClick("next")}},l.a.createElement("span",null,">")))))),l.a.createElement("hr",{className:"album-hr"}),l.a.createElement("div",{className:"album-content"},l.a.createElement(D,{cardStyle:this.state.cardStyle,albumData:this.state.albumData,albumTitle:this.setAlbumTitle})))}}]),a}(n.Component),A=function(e){function a(e){var t;return Object(c.a)(this,a),(t=Object(m.a)(this,Object(o.a)(a).call(this,e))).updateAlbumDetails=function(e){t.setState(Object(b.a)({},e.target.name,e.target.value))},t.state={albumName:"",albumDesc:"",albumImg:"",songs:[]},t}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"create-album-main container"},l.a.createElement("h2",null,"Create Your Album "),l.a.createElement("hr",null),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col"},l.a.createElement("form",null,l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col"},l.a.createElement("label",{htmlFor:"abmName"},"Name"),l.a.createElement("input",{type:"text",className:"form-control ml-auto",id:"abmName",placeholder:"Enter Album Name",onChange:this.updateAlbumDetails,name:"albumName",autoComplete:"current-username",required:!0})),l.a.createElement("div",{className:"col ml-auto"},l.a.createElement("label",{htmlFor:"abmDesc"},"Description"),l.a.createElement("input",{type:"text",className:"form-control ml-auto",id:"abmName",placeholder:"Enter Album Name",onChange:this.updateAlbumDetails,name:"albumDesc",autoComplete:"current-username",required:!0}))),l.a.createElement("div",{className:"form-group text-center create-abm-upload"},l.a.createElement(w.a,{className:"files-dropzone album-img-upload btn btn-primary btn-sm",accepts:["image/*"],multiple:!0,maxFiles:10,maxFileSize:1e7,minFileSize:0,clickable:!0},"Upload Album Cover")),l.a.createElement("div",{className:"form-group text-center create-abm-upload"},l.a.createElement(w.a,{className:"files-dropzone album-songs-upload btn btn-primary btn-sm",accepts:["audio/*"],multiple:!0,maxFiles:10,maxFileSize:1e7,minFileSize:0,clickable:!0},"Upload Songs")),l.a.createElement("div",{className:"btn btn-sm btn-outline-success",onClick:this.props.createAlbum.bind(this,this.state)},"Create"))),l.a.createElement("div",{className:"col"},"uploaded image and songs will display here")))}}]),a}(n.Component),D=function(e){function a(e){var t;return Object(c.a)(this,a),(t=Object(m.a)(this,Object(o.a)(a).call(this,e))).componentDidMount=function(){y()(".add-favourite").click(function(e){e.target.className.includes("fa-heart-o")?e.target.className="fa fa-heart add-favourite":e.target.className="fa fa-heart-o add-favourite"})},t.getTracks=function(e){h(t.props.albumData[e].album_id).then(function(a){void 0===a.dataset?d.b.error("Server Unavailable",{position:d.b.POSITION.TOP_RIGHT}):(t.props.albumTitle(e),t.setState({tracksData:a.dataset,isSongsShown:!0}))})},t.state={tracksData:[],isSongsShown:!1},t}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){var e=this,a={flexWrap:window.location.href.includes("album")?"none":"nowrap"},t=this.props.albumData;return this.state.isSongsShown?l.a.createElement(x,{tracksData:this.state.tracksData}):l.a.createElement("div",{className:"album-card text-center row",style:a},t.map(function(a,t){return l.a.createElement("div",{className:"card col-md-3",id:"card",style:e.props.cardStyle,key:t,onClick:e.getTracks.bind(e,t)},l.a.createElement("img",{src:a.album_image_file,className:"card-img-top mx-auto img-thumbnail",alt:"..."}),l.a.createElement("div",{className:"card-body"},l.a.createElement("h5",{className:"card-title"},a.album_title),l.a.createElement("p",{className:"card-text"}),l.a.createElement("span",null,a.album_tracks," songs"),l.a.createElement("i",{className:"fa fa-heart-o add-favourite",title:"Add to favourite"})))}))}}]),a}(n.Component),x=function(e){function a(e){var t;return Object(c.a)(this,a),(t=Object(m.a)(this,Object(o.a)(a).call(this))).componentDidMount=function(){void 0===t.props.tracksData||t.setState({songsData:t.props.tracksData})},t.state={songsData:[]},t}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"song-content"},l.a.createElement("div",{className:"container-fluid"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col"},l.a.createElement("h4",null,"SONGS")),l.a.createElement("div",{className:"col-md-2 mr-auto"},l.a.createElement("h5",null,this.state.songsData.length," Songs"))),l.a.createElement("hr",null),l.a.createElement("div",{className:"row text-center song-header"},l.a.createElement("div",{className:"col"}),l.a.createElement("div",{className:"col"},"Song"),l.a.createElement("div",{className:"col"},"Album"),l.a.createElement("div",{className:"col"}),l.a.createElement("div",{className:"col"}),l.a.createElement("div",{className:"col"}),l.a.createElement("div",{className:"col"})),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-3 ml-auto"}),l.a.createElement("div",{className:"col-md-9"},this.state.songsData.map(function(e,a){return l.a.createElement(F,{songData:e,index:a,key:a})})))))}}]),a}(n.Component),T=function(e){function a(){return Object(c.a)(this,a),Object(m.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"allCards"})}}]),a}(n.Component),P=function(e){function a(){return Object(c.a)(this,a),Object(m.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"favourites"},"Favourite")}}]),a}(n.Component),I=function(e){function a(){return Object(c.a)(this,a),Object(m.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"recent"},l.a.createElement(C,null))}}]),a}(n.Component),F=function(e){function a(e){var t;return Object(c.a)(this,a),(t=Object(m.a)(this,Object(o.a)(a).call(this,e))).componentDidMount=function(){console.log(t.props.songData)},t.songControls=function(e){console.log("playing");var a=t.state.songSrc;switch(e){case"play":a.play(),a.volume=t.state.volume,t.setState({isPlaying:!1});break;case"pause":a.pause(),t.setState({isPlaying:!0})}},t.setVolume=function(e){t.state.songSrc.volume=e,t.setState({volume:e})},t.setFav=function(e){"fav"===e?t.setState({isFavourite:!0}):t.setState({isFavourite:!1})},t.timeUpdate=function(){setInterval(function(){t.currentTime<t.totalTime&&t.setState({currentTime:t.state.currentTime+1})},1e3)},t.state={isPlaying:!0,currentTime:"00:00",totalTime:"00:00",isMuted:!1,isFavourite:!1,volume:"1",songSrc:new Audio(t.props.songData.track_url+"/download")},t}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"row music-player"},l.a.createElement("div",{className:"col"},this.props.songData.track_title),l.a.createElement("div",{className:"col"},this.props.songData.album_title),this.state.isPlaying?l.a.createElement("div",{className:"col",onClick:this.songControls.bind(this,"play")},l.a.createElement("i",{className:"fa fa-play","aria-hidden":"true"})):l.a.createElement("div",{className:"col",onClick:this.songControls.bind(this,"pause")},l.a.createElement("i",{className:"fa fa-pause","aria-hidden":"true"})),l.a.createElement("div",{className:"col"},this.state.currentTime,"/",this.props.songData.track_duration),"0"===this.state.volume?l.a.createElement("div",{className:"col",onClick:this.setVolume.bind(this,"0.2")},l.a.createElement("span",null,l.a.createElement("i",{className:"fa fa-volume-off"}),l.a.createElement("i",{className:"fa fa-ban"}))):"0.2"===this.state.volume?l.a.createElement("div",{className:"col",onClick:this.setVolume.bind(this,"0.6")},l.a.createElement("i",{className:"fa fa-volume-off","aria-hidden":"true"})):"0.6"===this.state.volume?l.a.createElement("div",{className:"col",onClick:this.setVolume.bind(this,"1")},l.a.createElement("i",{className:"fa fa-volume-down","aria-hidden":"true"})):l.a.createElement("div",{className:"col",onClick:this.setVolume.bind(this,"0")},l.a.createElement("i",{className:"fa fa-volume-up","aria-hidden":"true"})),this.state.isFavourite?l.a.createElement("div",{className:"col",onClick:this.setFav.bind(this,"unfav")},l.a.createElement("i",{className:"fa fa-heart","aria-hidden":"true"})):l.a.createElement("div",{className:"col",onClick:this.setFav.bind(this,"fav")},l.a.createElement("i",{className:"fa fa-heart-o","aria-hidden":"true"})))}}]),a}(n.Component),H=function(e){function a(){return Object(c.a)(this,a),Object(m.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"profile"},"Profile")}}]),a}(n.Component),M=function(e){function a(e){var t;return Object(c.a)(this,a),(t=Object(m.a)(this,Object(o.a)(a).call(this,e))).componentDidMount=function(){null!==localStorage.getItem("musicHunt")&&t.setState({isUserActive:!0})},t.logout=function(){localStorage.clear(),t.setState({isUserActive:!1})},t.state={isUserActive:!1},t}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"section container-fluid"},l.a.createElement(k.a,null,l.a.createElement("div",{className:"section-aside"},l.a.createElement("ul",null,l.a.createElement(k.b,{to:"/MusicHuntPro"},l.a.createElement("li",{className:"active"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"mr-auto"},"Home"),l.a.createElement("div",{className:"ml-auto"},l.a.createElement("i",{className:"fa fa-home","aria-hidden":"true"}))))),l.a.createElement(k.b,{to:"/MusicHuntPro/album"},l.a.createElement("li",null,l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"mr-auto"},"Albums"),l.a.createElement("div",{className:"ml-auto"},l.a.createElement("i",{className:"fa fa-folder-open-o","aria-hidden":"true"}))))),l.a.createElement(k.b,{to:"/MusicHuntPro/song"},l.a.createElement("li",null,l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"mr-auto"},"Songs"),l.a.createElement("div",{className:"ml-auto"},l.a.createElement("i",{className:"fa fa-folder-open-o","aria-hidden":"true"}))))),l.a.createElement(k.b,{to:"/MusicHuntPro/recent"},l.a.createElement("li",null,l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"mr-auto"},"Recent"),l.a.createElement("div",{className:"ml-auto"},l.a.createElement("i",{className:"fa fa-history","aria-hidden":"true"}))))),l.a.createElement(k.b,{to:"/MusicHuntPro/favourites"},l.a.createElement("li",null,l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"mr-auto"},"Favourites"),l.a.createElement("div",{className:"ml-auto"},l.a.createElement("i",{className:"fa fa-heart","aria-hidden":"true"}))))),l.a.createElement(k.b,{to:"/MusicHuntPro/profile"},l.a.createElement("li",null,l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"mr-auto"},"Profile"),l.a.createElement("div",{className:"ml-auto"},l.a.createElement("i",{className:"fa fa-user-o","aria-hidden":"true"}))))),l.a.createElement("li",null,l.a.createElement("div",{className:"row",onClick:this.logout},l.a.createElement("div",{className:"mr-auto"},this.state.isUserActive?"Logout":"Login"),l.a.createElement("div",{className:"ml-auto"},l.a.createElement("i",{className:"fa fa-sign-out","aria-hidden":"true"})))))),l.a.createElement("div",{className:"section-content"},l.a.createElement("div",{className:"section-content-album"},l.a.createElement(j.d,null,l.a.createElement(j.a,{exact:!0,from:"/",to:"/MusicHuntPro"}),l.a.createElement(j.b,{exact:!0,path:"/MusicHuntPro",render:function(){return l.a.createElement(S,null)}}),l.a.createElement(j.b,{exact:!0,path:"/MusicHuntPro/album",render:function(){return l.a.createElement(C,{title:"Albums"})}}),l.a.createElement(j.b,{exact:!0,path:"/MusicHuntPro/song",render:function(){return l.a.createElement(x,null)}}),l.a.createElement(j.b,{path:"/MusicHuntPro/allcards",render:function(){return l.a.createElement(T,null)}}),l.a.createElement(j.b,{exact:!0,path:"/MusicHuntPro/recent",render:function(){return l.a.createElement(I,null)}}),l.a.createElement(j.b,{exact:!0,path:"/MusicHuntPro/favourites",render:function(){return l.a.createElement(P,null)}}),l.a.createElement(j.b,{exact:!0,path:"/MusicHuntPro/profile",render:function(){return l.a.createElement(H,null)}}))))))}}]),a}(n.Component),L=function(e){function a(e){var t;return Object(c.a)(this,a),(t=Object(m.a)(this,Object(o.a)(a).call(this,e))).toggleActive=function(e){"login"===e?t.setState({isLogin:!0}):t.setState({isLogin:!1})},t.userRegister=function(e){e.preventDefault();var a={firstName:t.state.firstName,lastName:t.state.lastName,userName:t.state.userName,email:t.state.email,password:t.state.password};N(a).then(function(e){void 0!==e.data.error&&d.b.error("Username Already Exists",{position:d.b.POSITION.TOP_RIGHT}),void 0!==e.data.status&&(d.b.success("Registered Successfully Login To Continue",{position:d.b.POSITION.TOP_RIGHT}),t.setState({isLogin:!0}))})},t.updateValue=function(e){t.setState(Object(b.a)({},e.target.name,e.target.value))},t.userLogin=function(e){e.preventDefault();var a={userName:t.state.userName,password:t.state.password};f(a).then(function(e){void 0===e?t.notifyError():void 0!==e.error?d.b.error(e.error,{position:d.b.POSITION.TOP_RIGHT}):t.setState({isUserActive:!0,demovar:!0})})},t.notifyError=function(){d.b.error("Invalid Login",{position:d.b.POSITION.TOP_RIGHT})},t.state={isUserActive:!1,isLogin:!0,firstName:"",lastName:"",userName:"",password:"",email:"",demovar:!1},t}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){var e=this,a={background:this.state.isLogin?"#777":"",color:this.state.isLogin?"white":"black"},t={background:this.state.isLogin?"":"#777",color:this.state.isLogin?"black":"white"},n={display:this.state.demovar?"none":""};return l.a.createElement("div",{className:"app-main"},l.a.createElement("div",{className:"modal",id:"myModal",style:n},l.a.createElement("div",{className:"modal-dialog modal-dialog-centered"},l.a.createElement("div",{className:"modal-content"},l.a.createElement("div",{className:"modal-body"},l.a.createElement("div",{className:"container-fluid"},l.a.createElement("div",{className:"mx-auto"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-12"},l.a.createElement("div",{className:"row text-center log-reg-btn"},l.a.createElement("div",{className:"col",onClick:function(){e.toggleActive("login")},style:a},"Login"),l.a.createElement("div",{className:"col",onClick:function(){e.toggleActive("register")},style:t},"SignUp")),l.a.createElement("hr",null)),this.state.isLogin?l.a.createElement("div",{className:"login-main mx-auto"},l.a.createElement("form",{onSubmit:this.userLogin},l.a.createElement("div",{className:"form-group form-inline"},l.a.createElement("label",{htmlFor:"uname"},"Username"),l.a.createElement("input",{type:"text",className:"form-control",id:"uname",placeholder:"Enter username",onChange:this.updateValue,name:"userName",autoComplete:"current-username",required:!0})),l.a.createElement("div",{className:"form-group form-inline"},l.a.createElement("label",{htmlFor:"pwd"},"Password"),l.a.createElement("input",{type:"password",className:"form-control",id:"pwd",placeholder:"Enter password",onChange:this.updateValue,name:"password",autoComplete:"new-password",required:!0})),l.a.createElement("div",{className:"form-group form-check form-inline"},l.a.createElement("label",{className:"form-check-label"},l.a.createElement("input",{className:"form-check-input",type:"checkbox",name:"remember"})," Lazy to remember password")),l.a.createElement("div",{className:"form-group text-center"},l.a.createElement("button",{type:"submit",className:"btn btn-primary"},"LOGIN")))):l.a.createElement("div",{className:"signup-main mx-auto"},l.a.createElement("form",{onSubmit:this.userRegister},l.a.createElement("div",{className:"form-group form-inline"},l.a.createElement("label",{htmlFor:"fname"},"First Name"),l.a.createElement("input",{type:"text",className:"form-control ml-auto",id:"fname",placeholder:"Enter FirstName",onChange:this.updateValue,name:"firstName",required:!0})),l.a.createElement("div",{className:"form-group form-inline"},l.a.createElement("label",{htmlFor:"lname"},"LastName"),l.a.createElement("input",{type:"text",className:"form-control ml-auto",id:"lname",placeholder:"Enter LastName",onChange:this.updateValue,name:"lastName",required:!0})),l.a.createElement("div",{className:"form-group form-inline"},l.a.createElement("label",{htmlFor:"uname"},"Username"),l.a.createElement("input",{type:"text",className:"form-control ml-auto",id:"uname",placeholder:"Enter username",onChange:this.updateValue,name:"userName",required:!0})),l.a.createElement("div",{className:"form-group form-inline"},l.a.createElement("label",{htmlFor:"email"},"Email"),l.a.createElement("input",{type:"email",className:"form-control ml-auto",id:"email",placeholder:"Enter Email",onChange:this.updateValue,name:"email",required:!0})),l.a.createElement("div",{className:"form-group form-inline"},l.a.createElement("label",{htmlFor:"pwd"},"Password"),l.a.createElement("input",{type:"password",className:"form-control ml-auto",id:"pwd",placeholder:"Enter password",onChange:this.updateValue,name:"password",required:!0})),l.a.createElement("div",{className:"form-group form-inline"},l.a.createElement("label",{htmlFor:"rpwd"},"Confirm Password"),l.a.createElement("input",{type:"password",className:"form-control ml-auto",id:"rpwd",placeholder:"Re enter password",name:"pswd",required:!0})),l.a.createElement("div",{className:"form-group form-check form-inline"},l.a.createElement("label",{className:"form-check-label"},l.a.createElement("input",{className:"form-check-input",type:"checkbox",name:"remember"})," Lazy to remember password")),l.a.createElement("div",{className:"form-group text-center"},l.a.createElement("button",{type:"submit",className:"btn btn-primary"},"Submit"))))))))))))}}]),a}(n.Component),U=t(39),_=t.n(U),V=function(e){function a(e){var t;return Object(c.a)(this,a),(t=Object(m.a)(this,Object(o.a)(a).call(this,e))).componentDidMount=function(){void 0!==localStorage.getItem("musicHunt")&&t.setState({isUserActive:!0,userName:localStorage.getItem("musicHunt")}),d.b.configure({autoClose:1e3})},t.state={isUserActive:!1,userName:""},t}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"App"},l.a.createElement(d.a,{autoClose:1500}),l.a.createElement("nav",{className:"navbar navbar-expand-md bg-dark navbar-dark fixed-top"},l.a.createElement("img",{src:_.a,alt:"Music Hunt",className:"nav-img"}),l.a.createElement("a",{className:"navbar-brand",href:"/"},l.a.createElement("h3",null,"Music Hunt")),l.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#collapsibleNavbar"},l.a.createElement("span",{className:"navbar-toggler-icon"})),l.a.createElement("div",{className:"collapse navbar-collapse",id:"collapsibleNavbar"},l.a.createElement("ul",{className:"navbar-nav ml-auto"},l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{className:"nav-link",href:"/","data-toggle":"modal","data-target":"#myModal"},l.a.createElement("i",{className:"fa fa-user-circle-o"})))))),l.a.createElement("div",{className:"section-content-main"},l.a.createElement(M,null),l.a.createElement(k.a,null,l.a.createElement(L,null))))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(l.a.createElement(V,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[40,1,2]]]);
//# sourceMappingURL=main.201984f8.chunk.js.map