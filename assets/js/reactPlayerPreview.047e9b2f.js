(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[36353],{89024:(e,t,r)=>{var a,n=Object.create,i=Object.defineProperty,l=Object.getOwnPropertyDescriptor,o=Object.getOwnPropertyNames,s=Object.getPrototypeOf,c=Object.prototype.hasOwnProperty,p=(e,t,r,a)=>{if(t&&"object"==typeof t||"function"==typeof t)for(let n of o(t))c.call(e,n)||n===r||i(e,n,{get:()=>t[n],enumerable:!(a=l(t,n))||a.enumerable});return e},u=(e,t,r)=>(((e,t,r)=>{t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r})(e,"symbol"!=typeof t?t+"":t,r),r),d={};((e,t)=>{for(var r in t)i(e,r,{get:t[r],enumerable:!0})})(d,{default:()=>g}),e.exports=(a=d,p(i({},"__esModule",{value:!0}),a));var h=((e,t,r)=>(r=null!=e?n(s(e)):{},p(!t&&e&&e.__esModule?r:i(r,"default",{value:e,enumerable:!0}),e)))(r(37953));const m="64px",b={};class g extends h.Component{constructor(){super(...arguments),u(this,"mounted",!1),u(this,"state",{image:null}),u(this,"handleKeyPress",(e=>{"Enter"!==e.key&&" "!==e.key||this.props.onClick()}))}componentDidMount(){this.mounted=!0,this.fetchImage(this.props)}componentDidUpdate(e){const{url:t,light:r}=this.props;e.url===t&&e.light===r||this.fetchImage(this.props)}componentWillUnmount(){this.mounted=!1}fetchImage({url:e,light:t,oEmbedUrl:r}){if(!h.default.isValidElement(t))if("string"!=typeof t){if(!b[e])return this.setState({image:null}),window.fetch(r.replace("{url}",e)).then((e=>e.json())).then((t=>{if(t.thumbnail_url&&this.mounted){const r=t.thumbnail_url.replace("height=100","height=480").replace("-d_295x166","-d_640");this.setState({image:r}),b[e]=r}}));this.setState({image:b[e]})}else this.setState({image:t})}render(){const{light:e,onClick:t,playIcon:r,previewTabIndex:a,previewAriaLabel:n}=this.props,{image:i}=this.state,l=h.default.isValidElement(e),o={display:"flex",alignItems:"center",justifyContent:"center"},s={preview:{width:"100%",height:"100%",backgroundImage:i&&!l?`url(${i})`:void 0,backgroundSize:"cover",backgroundPosition:"center",cursor:"pointer",...o},shadow:{background:"radial-gradient(rgb(0, 0, 0, 0.3), rgba(0, 0, 0, 0) 60%)",borderRadius:m,width:m,height:m,position:l?"absolute":void 0,...o},playIcon:{borderStyle:"solid",borderWidth:"16px 0 16px 26px",borderColor:"transparent transparent transparent white",marginLeft:"7px"}},c=h.default.createElement("div",{style:s.shadow,className:"react-player__shadow"},h.default.createElement("div",{style:s.playIcon,className:"react-player__play-icon"}));return h.default.createElement("div",{style:s.preview,className:"react-player__preview",onClick:t,tabIndex:a,onKeyPress:this.handleKeyPress,...n?{"aria-label":n}:{}},l?e:null,r||c)}}}}]);