/*! Built with http://stenciljs.com */
const{h:t}=window.components;import{a as e,b as i}from"./chunk-435e0462.js";class o{constructor(){this.isModified=!1,this.baseUnit=16,this.externalScriptIdentifier="ktc-form-modal-dialog-script",this.modalDialogContentElementClass="ktc-form-modal-content",this.modalDialogFooterClass="ktc-form-modal-footer",this.onDialogClosed=(t=>{t.stopPropagation(),this.isModified&&!confirm(this.getString(this.localizationService,"modalDialog.close.confirmation"))||this.closeModalDialog.emit()}),this.addModifyFormListeners=(()=>{const t=this.formWrapper.querySelectorAll("input,textarea,select");Array.prototype.map.call(t,t=>{t.addEventListener("change",()=>{this.isModified=!0})})}),this.addSubmitFormHandler=(()=>{this.formWrapper.getElementsByTagName("form")[0].addEventListener("submit",t=>{t.preventDefault(),this.validateProperties(t)})}),this.scopeFocus=(()=>{const t=this.dialogElement.querySelectorAll('button, [href]:not(link), input, select, textarea, [tabindex]:not([tabindex="-1"])');if(t){const e=t[0];e.focus(),this.submitButton.addEventListener("focusout",()=>{e.focus()})}}),this.disableFullPageScrolling=(t=>{const e=[];let i=t.target;for(;i;)e.push(i),i=i.parentElement;const o=e.some(t=>t instanceof HTMLElement&&t.classList.contains(this.modalDialogContentElementClass)),s=this.formWrapper.scrollHeight-this.formWrapper.clientHeight,a=t.deltaY<0;(!o||a&&0===this.formWrapper.scrollTop||!a&&this.formWrapper.scrollTop===s)&&t.preventDefault()}),this.renderNewMarkup=(()=>{this.formMarkup&&(this.formWrapper.classList.contains("ktc-is-loading")&&this.formWrapper.classList.remove("ktc-is-loading"),i(this.formMarkup,this.formWrapper,this.externalScriptIdentifier),this.setDialogPosition(),this.setDialogContentHeight(),this.addModifyFormListeners(),this.addSubmitFormHandler(),this.scopeFocus())}),this.validateProperties=(t=>{t.stopPropagation();const e=this.formWrapper.getElementsByTagName("form")[0],i=new FormData(e);this.submitPropertiesForm.emit({configurationForm:e,formData:i})}),this.getTopPosition=((t,e)=>(e.documentElement.clientHeight-t.clientHeight)/2),this.setDialogPosition=(()=>{const t=this.getTopPosition(this.dialogElement,document);this.dialogElement.style.top=`${t<this.baseUnit?this.baseUnit:t}px`}),this.setDialogContentHeight=(()=>{const t=2*this.baseUnit;if(this.dialogElement.clientHeight+t>document.documentElement.clientHeight){const e=this.dialogHeader.offsetHeight,i=this.dialogElement.querySelector(`.${this.modalDialogFooterClass}`).offsetHeight,o=this.dialogElement.querySelector(`.${this.modalDialogContentElementClass}`),s=window.getComputedStyle(o,null),a=parseFloat(s.getPropertyValue("padding-top"))+parseFloat(s.getPropertyValue("padding-bottom")),l=document.documentElement.clientHeight-t-a-e-i;o.style.height=`${l}px`}}),this.render=(()=>t("div",{class:"ktc-form-wrapper",onWheel:this.disableFullPageScrolling},t("div",{class:"ktc-form-modal-overlay"}),t("div",{class:"ktc-form-modal-dialog",ref:t=>this.dialogElement=t},t("kentico-dialog-header",{ref:t=>this.dialogHeader=t,headerTitle:this.title,primary:!0,closeTooltip:this.closeTooltip,onClose:this.onDialogClosed}),t("div",{ref:t=>this.formWrapper=t,class:`ktc-form ${this.modalDialogContentElementClass} ktc-is-loading`}),t("div",{class:`${this.modalDialogFooterClass}`},this.isValid||t("div",{class:"ktc-validation-summary"},this.getString(this.localizationService,"widgetproperties.validationsummary")),t("div",{class:"ktc-modal-dialog-buttons"},t("button",{type:"button",class:"ktc-btn ktc-btn-default",onClick:this.onDialogClosed},this.getString(this.localizationService,"widgetproperties.cancel")),t("div",{class:"ktc-modal-dialog-button-spacer"}),t("button",{type:"button",class:"ktc-btn ktc-btn-primary",ref:t=>this.submitButton=t,title:this.getString(this.localizationService,"widgetproperties.applytooltip"),onClick:this.validateProperties}," ",this.getString(this.localizationService,"widgetproperties.apply")," "))))))}formMarkupChanged(){e(this.externalScriptIdentifier),this.renderNewMarkup()}get title(){return this.getString(this.localizationService,"widgetproperties.header",this.componentName)}get closeTooltip(){return this.getString(this.localizationService,"typelist.closeTooltip")}componentDidLoad(){this.setDialogPosition(),this.renderNewMarkup()}componentDidUnload(){e(this.externalScriptIdentifier)}static get is(){return"kentico-form-modal-dialog"}static get properties(){return{componentName:{type:String,attr:"component-name"},ensureStyles:{context:"ensureStyles"},formMarkup:{type:String,attr:"form-markup",watchCallbacks:["formMarkupChanged"]},getString:{context:"getString"},isValid:{type:Boolean,attr:"is-valid"},localizationService:{type:"Any",attr:"localization-service"}}}static get events(){return[{name:"closeModalDialog",method:"closeModalDialog",bubbles:!0,cancelable:!0,composed:!0},{name:"submitPropertiesForm",method:"submitPropertiesForm",bubbles:!0,cancelable:!0,composed:!0}]}static get style(){return"[class*=\" icon-\"],[class^=icon-]{font-family:Core-icons;display:inline-block;speak:none;font-style:normal;font-weight:400;font-variant:normal;text-transform:none;line-height:1;font-size:16px;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;background-image:none}[class^=icon-]:before{content:\"\\e619\"}.ktc-icon-only:before{content:none}kentico-form-modal-dialog .ktc-form-modal-overlay{position:fixed;left:0;top:0;width:100%;height:100%;background-color:#696663;opacity:.5;z-index:1}kentico-form-modal-dialog .ktc-form-modal-dialog{z-index:1;position:fixed;width:600px;max-height:600px;min-height:250px;-webkit-box-sizing:content-box;box-sizing:content-box;-webkit-box-shadow:0 2px 5px 0 rgba(0,0,0,.5);box-shadow:0 2px 5px 0 rgba(0,0,0,.5);background-color:#fff;border-bottom:1px solid #d6d9d6;margin:0 auto;right:0;left:0}kentico-form-modal-dialog .ktc-form-modal-dialog .ktc-form-modal-content{padding:16px;overflow-y:auto;overflow-x:hidden;position:relative;-webkit-box-sizing:content-box;box-sizing:content-box;min-height:116px;max-height:466px}kentico-form-modal-dialog .ktc-form-modal-dialog .ktc-form-modal-content .ktc-checkbox input:disabled+input[type=hidden]+label:before{content:\"\\e6f0\"}kentico-form-modal-dialog .ktc-form-modal-dialog .ktc-form-modal-content .ktc-checkbox input:checked+input[type=hidden]+label::after{content:\"\\e6b0\"}kentico-form-modal-dialog .ktc-form-modal-dialog .ktc-form-modal-footer{padding:0 16px;position:relative;width:600px;height:64px;bottom:0;-webkit-box-sizing:border-box;box-sizing:border-box}kentico-form-modal-dialog .ktc-form-modal-dialog .ktc-form-modal-footer .ktc-btn{display:inline-block;padding:0 16px;margin:0;font-size:14px;font-family:\"Segoe UI Semibold\",Helvetica,Verdana,Arial,sans-serif;font-weight:600;line-height:32px;width:auto;height:32px;text-align:center;vertical-align:middle;text-decoration:none;cursor:pointer;border:none;border-radius:3px;white-space:nowrap;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;text-shadow:none}kentico-form-modal-dialog .ktc-form-modal-dialog .ktc-form-modal-footer .ktc-btn:focus{outline-color:transparent}kentico-form-modal-dialog .ktc-form-modal-dialog .ktc-form-modal-footer .ktc-btn:hover{color:#262524;text-decoration:none}kentico-form-modal-dialog .ktc-form-modal-dialog .ktc-form-modal-footer .ktc-btn.ktc-active,kentico-form-modal-dialog .ktc-form-modal-dialog .ktc-form-modal-footer .ktc-btn:active{outline:0;background-image:none}kentico-form-modal-dialog .ktc-form-modal-dialog .ktc-form-modal-footer .ktc-btn.ktc-btn-disabled:not(.ktc-btn-icon),kentico-form-modal-dialog .ktc-form-modal-dialog .ktc-form-modal-footer .ktc-btn:disabled:not(.ktc-btn-icon),kentico-form-modal-dialog .ktc-form-modal-dialog .ktc-form-modal-footer .ktc-btn[disabled]:not(.ktc-btn-icon){cursor:not-allowed;color:#696663;background-color:#a3a2a2;background-image:repeating-linear-gradient(-45deg,transparent 0,#bdbbbb 1px,#bdbbbb 2px,transparent 3px,transparent 4px);text-shadow:none;-webkit-box-shadow:none;box-shadow:none}kentico-form-modal-dialog .ktc-form-modal-dialog .ktc-form-modal-footer .ktc-btn.ktc-btn-icon.ktc-btn-disabled,kentico-form-modal-dialog .ktc-form-modal-dialog .ktc-form-modal-footer .ktc-btn.ktc-btn-icon[disabled]{opacity:.5}kentico-form-modal-dialog .ktc-form-modal-dialog .ktc-form-modal-footer .ktc-btn i{padding-right:8px;font-size:16px;position:relative}kentico-form-modal-dialog .ktc-form-modal-dialog .ktc-form-modal-footer .ktc-btn.ktc-icon-only{padding:0 8px;font-family:Core-icons}kentico-form-modal-dialog .ktc-form-modal-dialog .ktc-form-modal-footer .ktc-btn.ktc-icon-only.ktc-js-_move{cursor:move}kentico-form-modal-dialog .ktc-form-modal-dialog .ktc-form-modal-footer .ktc-btn.ktc-icon-only i{padding-right:0}kentico-form-modal-dialog .ktc-form-modal-dialog .ktc-form-modal-footer .ktc-btn+.ktc-btn{margin-left:8px}kentico-form-modal-dialog .ktc-form-modal-dialog .ktc-form-modal-footer .ktc-btn .ktc-cms-icon-30{font-size:8px;height:8px;width:8px;padding:0 4px}kentico-form-modal-dialog .ktc-form-modal-dialog .ktc-form-modal-footer .ktc-btn-default{color:#262524;background-color:#bdbbbb;margin:0;-webkit-box-shadow:#a3a2a2 0 -3px 0 inset;box-shadow:#a3a2a2 0 -3px 0 inset}.ktc-open .ktc-dropdown-togglekentico-form-modal-dialog .ktc-form-modal-dialog .ktc-form-modal-footer .ktc-btn-default,kentico-form-modal-dialog .ktc-form-modal-dialog .ktc-form-modal-footer .ktc-btn-default.ktc-active,kentico-form-modal-dialog .ktc-form-modal-dialog .ktc-form-modal-footer .ktc-btn-default:active,kentico-form-modal-dialog .ktc-form-modal-dialog .ktc-form-modal-footer .ktc-btn-default:hover{color:#262524;background-color:#a3a2a2}.ktc-open .ktc-dropdown-togglekentico-form-modal-dialog .ktc-form-modal-dialog .ktc-form-modal-footer .ktc-btn-default,kentico-form-modal-dialog .ktc-form-modal-dialog .ktc-form-modal-footer .ktc-btn-default.ktc-active,kentico-form-modal-dialog .ktc-form-modal-dialog .ktc-form-modal-footer .ktc-btn-default:active{background-image:none}kentico-form-modal-dialog .ktc-form-modal-dialog .ktc-form-modal-footer .ktc-btn-default i{color:#403e3d}kentico-form-modal-dialog .ktc-form-modal-dialog .ktc-form-modal-footer .ktc-btn-primary{color:#fff;background-color:#497d04;margin:0;-webkit-box-shadow:#355e00 0 -3px 0 inset;box-shadow:#355e00 0 -3px 0 inset}.ktc-open .ktc-dropdown-togglekentico-form-modal-dialog .ktc-form-modal-dialog .ktc-form-modal-footer .ktc-btn-primary,kentico-form-modal-dialog .ktc-form-modal-dialog .ktc-form-modal-footer .ktc-btn-primary.ktc-active,kentico-form-modal-dialog .ktc-form-modal-dialog .ktc-form-modal-footer .ktc-btn-primary:active,kentico-form-modal-dialog .ktc-form-modal-dialog .ktc-form-modal-footer .ktc-btn-primary:hover{color:#fff;background-color:#355e00}.ktc-open .ktc-dropdown-togglekentico-form-modal-dialog .ktc-form-modal-dialog .ktc-form-modal-footer .ktc-btn-primary,kentico-form-modal-dialog .ktc-form-modal-dialog .ktc-form-modal-footer .ktc-btn-primary.ktc-active,kentico-form-modal-dialog .ktc-form-modal-dialog .ktc-form-modal-footer .ktc-btn-primary:active{background-image:none}kentico-form-modal-dialog .ktc-form-modal-dialog .ktc-form-modal-footer .ktc-btn-primary .ktc-badge{color:#fff}kentico-form-modal-dialog .ktc-form-modal-dialog .ktc-form-modal-footer .ktc-btn-secondary{color:#fff;background-color:#1175ae;margin:0;-webkit-box-shadow:#0f6194 0 -3px 0 inset;box-shadow:#0f6194 0 -3px 0 inset}.ktc-open .ktc-dropdown-togglekentico-form-modal-dialog .ktc-form-modal-dialog .ktc-form-modal-footer .ktc-btn-secondary,kentico-form-modal-dialog .ktc-form-modal-dialog .ktc-form-modal-footer .ktc-btn-secondary.ktc-active,kentico-form-modal-dialog .ktc-form-modal-dialog .ktc-form-modal-footer .ktc-btn-secondary:active,kentico-form-modal-dialog .ktc-form-modal-dialog .ktc-form-modal-footer .ktc-btn-secondary:hover{color:#fff;background-color:#0f6194}.ktc-open .ktc-dropdown-togglekentico-form-modal-dialog .ktc-form-modal-dialog .ktc-form-modal-footer .ktc-btn-secondary,kentico-form-modal-dialog .ktc-form-modal-dialog .ktc-form-modal-footer .ktc-btn-secondary.ktc-active,kentico-form-modal-dialog .ktc-form-modal-dialog .ktc-form-modal-footer .ktc-btn-secondary:active{background-image:none}kentico-form-modal-dialog .ktc-form-modal-dialog .ktc-form-modal-footer .ktc-btn-secondary .ktc-badge{color:#fff}kentico-form-modal-dialog .ktc-form-modal-dialog .ktc-form-modal-footer .ktc-btn-default:active,kentico-form-modal-dialog .ktc-form-modal-dialog .ktc-form-modal-footer .ktc-btn-default:hover{color:#262524;background-color:#a3a2a2;border-color:#a3a2a2;-webkit-box-shadow:#a3a2a2 0 -3px 0 inset;box-shadow:#a3a2a2 0 -3px 0 inset}kentico-form-modal-dialog .ktc-form-modal-dialog .ktc-form-modal-footer .ktc-btn-default:active .ktc-badge,kentico-form-modal-dialog .ktc-form-modal-dialog .ktc-form-modal-footer .ktc-btn-default:hover .ktc-badge{color:#262524}kentico-form-modal-dialog .ktc-form-modal-dialog .ktc-form-modal-footer .ktc-btn-default.ktc-active{background:#1175ae;color:#fff;-webkit-box-shadow:#0f6194 0 -3px 0 inset;box-shadow:#0f6194 0 -3px 0 inset}kentico-form-modal-dialog .ktc-form-modal-dialog .ktc-form-modal-footer .ktc-btn-default.ktc-active .ktc-badge{color:#fff}kentico-form-modal-dialog .ktc-form-modal-dialog .ktc-form-modal-footer .ktc-btn-icon{background:0 0;color:#403e3d;-webkit-box-shadow:none;box-shadow:none}kentico-form-modal-dialog .ktc-form-modal-dialog .ktc-form-modal-footer .ktc-btn-icon.ktc-btn{margin:0;font-family:Core-icons}kentico-form-modal-dialog .ktc-form-modal-dialog .ktc-form-modal-footer .ktc-btn-icon:hover[disabled]{color:#403e3d}kentico-form-modal-dialog .ktc-form-modal-dialog .ktc-form-modal-footer .ktc-btn-icon:focus,kentico-form-modal-dialog .ktc-form-modal-dialog .ktc-form-modal-footer .ktc-btn-icon:hover:not([disabled]){text-decoration:none;background:0 0;-webkit-box-shadow:none;box-shadow:none}kentico-form-modal-dialog .ktc-form-modal-dialog .ktc-form-modal-footer .ktc-btn-icon:focus i,kentico-form-modal-dialog .ktc-form-modal-dialog .ktc-form-modal-footer .ktc-btn-icon:hover:not([disabled]) i{color:#0f6194}kentico-form-modal-dialog .ktc-form-modal-dialog .ktc-form-modal-footer .ktc-btn-icon .ktc-icon-disabled{pointer-events:none;cursor:not-allowed}kentico-form-modal-dialog .ktc-form-modal-dialog .ktc-form-modal-footer .ktc-btn-icon .ktc-icon-disabled:hover{color:inherit}kentico-form-modal-dialog .ktc-form-modal-dialog .ktc-form-modal-footer .ktc-btn-link{color:#0f6194;font-weight:400;cursor:pointer;border-radius:0;text-decoration:underline}kentico-form-modal-dialog .ktc-form-modal-dialog .ktc-form-modal-footer .ktc-btn-link,kentico-form-modal-dialog .ktc-form-modal-dialog .ktc-form-modal-footer .ktc-btn-link:active,kentico-form-modal-dialog .ktc-form-modal-dialog .ktc-form-modal-footer .ktc-btn-link[disabled]{background-color:transparent;-webkit-box-shadow:none;box-shadow:none}kentico-form-modal-dialog .ktc-form-modal-dialog .ktc-form-modal-footer .ktc-btn-link,kentico-form-modal-dialog .ktc-form-modal-dialog .ktc-form-modal-footer .ktc-btn-link:active,kentico-form-modal-dialog .ktc-form-modal-dialog .ktc-form-modal-footer .ktc-btn-link:hover{border-color:transparent}kentico-form-modal-dialog .ktc-form-modal-dialog .ktc-form-modal-footer .ktc-btn-link:hover{color:#0f6194;text-decoration:underline;background-color:transparent}kentico-form-modal-dialog .ktc-form-modal-dialog .ktc-form-modal-footer .ktc-btn-link[disabled]:hover{color:#bdbbbb;text-decoration:none}kentico-form-modal-dialog .ktc-form-modal-dialog .ktc-form-modal-footer .ktc-btn-dropdown{position:relative;display:inline-block;vertical-align:middle}kentico-form-modal-dialog .ktc-form-modal-dialog .ktc-form-modal-footer .ktc-btn-dropdown>.ktc-btn{position:relative;float:left}kentico-form-modal-dialog .ktc-form-modal-dialog .ktc-form-modal-footer .ktc-btn-dropdown>.ktc-btn.ktc-active,kentico-form-modal-dialog .ktc-form-modal-dialog .ktc-form-modal-footer .ktc-btn-dropdown>.ktc-btn:active,kentico-form-modal-dialog .ktc-form-modal-dialog .ktc-form-modal-footer .ktc-btn-dropdown>.ktc-btn:hover{z-index:2}kentico-form-modal-dialog .ktc-form-modal-dialog .ktc-form-modal-footer .ktc-btn-dropdown>.ktc-btn>.ktc-caret{color:#403e3d;font-size:8px;height:8px;width:8px;padding:0 8px 0 4px;position:relative;right:-16px;bottom:2px;border:none;vertical-align:baseline}kentico-form-modal-dialog .ktc-form-modal-dialog .ktc-form-modal-footer .ktc-btn-dropdown>.ktc-btn:focus{outline:0}kentico-form-modal-dialog .ktc-form-modal-dialog .ktc-form-modal-footer:before{content:'';border-bottom:1px solid #d6d9d6;width:100%;display:block}kentico-form-modal-dialog .ktc-form-modal-dialog .ktc-form-modal-footer .ktc-modal-dialog-buttons{text-align:right}kentico-form-modal-dialog .ktc-form-modal-dialog .ktc-form-modal-footer .ktc-validation-summary{float:left;margin:20px 0 0 16px}kentico-form-modal-dialog .ktc-form-modal-dialog .ktc-form-modal-footer .ktc-validation-summary,kentico-form-modal-dialog .ktc-form-modal-dialog .ktc-form-modal-footer .ktc-validation-summary *{color:#d12127}kentico-form-modal-dialog .ktc-modal-dialog-buttons{padding:16px 0}kentico-form-modal-dialog .ktc-modal-dialog-buttons .ktc-modal-dialog-button-spacer{width:8px;display:inline-block}\@-webkit-keyframes loading{0%{background-image:linear-gradient(#e5e5e5 16.5px,transparent 0),linear-gradient(#e5e5e5 33px,transparent 0),linear-gradient(#e5e5e5 16.5px,transparent 0),linear-gradient(#e5e5e5 33px,transparent 0),linear-gradient(#e5e5e5 16.5px,transparent 0),linear-gradient(#e5e5e5 33px,transparent 0),linear-gradient(#e5e5e5 16.5px,transparent 0),linear-gradient(#e5e5e5 33px,transparent 0),linear-gradient(#e5e5e5 16.5px,transparent 0),linear-gradient(#e5e5e5 33px,transparent 0)}13%{background-image:linear-gradient(#d6d9d6 16.5px,transparent 0),linear-gradient(#d6d9d6 33px,transparent 0),linear-gradient(#e5e5e5 16.5px,transparent 0),linear-gradient(#e5e5e5 33px,transparent 0),linear-gradient(#e5e5e5 16.5px,transparent 0),linear-gradient(#e5e5e5 33px,transparent 0),linear-gradient(#e5e5e5 16.5px,transparent 0),linear-gradient(#e5e5e5 33px,transparent 0),linear-gradient(#e5e5e5 16.5px,transparent 0),linear-gradient(#e5e5e5 33px,transparent 0)}34%{background-image:linear-gradient(#bdbbbb 16.5px,transparent 0),linear-gradient(#bdbbbb 33px,transparent 0),linear-gradient(#d6d9d6 16.5px,transparent 0),linear-gradient(#d6d9d6 33px,transparent 0),linear-gradient(#e5e5e5 16.5px,transparent 0),linear-gradient(#e5e5e5 33px,transparent 0),linear-gradient(#e5e5e5 16.5px,transparent 0),linear-gradient(#e5e5e5 33px,transparent 0),linear-gradient(#e5e5e5 16.5px,transparent 0),linear-gradient(#e5e5e5 33px,transparent 0)}45%{background-image:linear-gradient(#bdbbbb 16.5px,transparent 0),linear-gradient(#bdbbbb 33px,transparent 0),linear-gradient(#bdbbbb 16.5px,transparent 0),linear-gradient(#bdbbbb 33px,transparent 0),linear-gradient(#d6d9d6 16.5px,transparent 0),linear-gradient(#d6d9d6 33px,transparent 0),linear-gradient(#e5e5e5 16.5px,transparent 0),linear-gradient(#e5e5e5 33px,transparent 0),linear-gradient(#e5e5e5 16.5px,transparent 0),linear-gradient(#e5e5e5 33px,transparent 0)}56%{background-image:linear-gradient(#d6d9d6 16.5px,transparent 0),linear-gradient(#d6d9d6 33px,transparent 0),linear-gradient(#bdbbbb 16.5px,transparent 0),linear-gradient(#bdbbbb 33px,transparent 0),linear-gradient(#bdbbbb 16.5px,transparent 0),linear-gradient(#bdbbbb 33px,transparent 0),linear-gradient(#d6d9d6 16.5px,transparent 0),linear-gradient(#d6d9d6 33px,transparent 0),linear-gradient(#e5e5e5 16.5px,transparent 0),linear-gradient(#e5e5e5 33px,transparent 0)}67%{background-image:linear-gradient(#e5e5e5 16.5px,transparent 0),linear-gradient(#e5e5e5 33px,transparent 0),linear-gradient(#d6d9d6 16.5px,transparent 0),linear-gradient(#d6d9d6 33px,transparent 0),linear-gradient(#bdbbbb 16.5px,transparent 0),linear-gradient(#bdbbbb 33px,transparent 0),linear-gradient(#bdbbbb 16.5px,transparent 0),linear-gradient(#bdbbbb 33px,transparent 0),linear-gradient(#d6d9d6 16.5px,transparent 0),linear-gradient(#d6d9d6 33px,transparent 0)}78%{background-image:linear-gradient(#e5e5e5 16.5px,transparent 0),linear-gradient(#e5e5e5 33px,transparent 0),linear-gradient(#e5e5e5 16.5px,transparent 0),linear-gradient(#e5e5e5 33px,transparent 0),linear-gradient(#d6d9d6 16.5px,transparent 0),linear-gradient(#d6d9d6 33px,transparent 0),linear-gradient(#bdbbbb 16.5px,transparent 0),linear-gradient(#bdbbbb 33px,transparent 0),linear-gradient(#bdbbbb 16.5px,transparent 0),linear-gradient(#bdbbbb 33px,transparent 0)}89%{background-image:linear-gradient(#e5e5e5 16.5px,transparent 0),linear-gradient(#e5e5e5 33px,transparent 0),linear-gradient(#e5e5e5 16.5px,transparent 0),linear-gradient(#e5e5e5 33px,transparent 0),linear-gradient(#e5e5e5 16.5px,transparent 0),linear-gradient(#e5e5e5 33px,transparent 0),linear-gradient(#d6d9d6 16.5px,transparent 0),linear-gradient(#d6d9d6 33px,transparent 0),linear-gradient(#bdbbbb 16.5px,transparent 0),linear-gradient(#bdbbbb 33px,transparent 0)}100%{background-image:linear-gradient(#e5e5e5 16.5px,transparent 0),linear-gradient(#e5e5e5 33px,transparent 0),linear-gradient(#e5e5e5 16.5px,transparent 0),linear-gradient(#e5e5e5 33px,transparent 0),linear-gradient(#e5e5e5 16.5px,transparent 0),linear-gradient(#e5e5e5 33px,transparent 0),linear-gradient(#e5e5e5 16.5px,transparent 0),linear-gradient(#e5e5e5 33px,transparent 0),linear-gradient(#d6d9d6 16.5px,transparent 0),linear-gradient(#d6d9d6 33px,transparent 0)}}\@keyframes loading{0%{background-image:linear-gradient(#e5e5e5 16.5px,transparent 0),linear-gradient(#e5e5e5 33px,transparent 0),linear-gradient(#e5e5e5 16.5px,transparent 0),linear-gradient(#e5e5e5 33px,transparent 0),linear-gradient(#e5e5e5 16.5px,transparent 0),linear-gradient(#e5e5e5 33px,transparent 0),linear-gradient(#e5e5e5 16.5px,transparent 0),linear-gradient(#e5e5e5 33px,transparent 0),linear-gradient(#e5e5e5 16.5px,transparent 0),linear-gradient(#e5e5e5 33px,transparent 0)}13%{background-image:linear-gradient(#d6d9d6 16.5px,transparent 0),linear-gradient(#d6d9d6 33px,transparent 0),linear-gradient(#e5e5e5 16.5px,transparent 0),linear-gradient(#e5e5e5 33px,transparent 0),linear-gradient(#e5e5e5 16.5px,transparent 0),linear-gradient(#e5e5e5 33px,transparent 0),linear-gradient(#e5e5e5 16.5px,transparent 0),linear-gradient(#e5e5e5 33px,transparent 0),linear-gradient(#e5e5e5 16.5px,transparent 0),linear-gradient(#e5e5e5 33px,transparent 0)}34%{background-image:linear-gradient(#bdbbbb 16.5px,transparent 0),linear-gradient(#bdbbbb 33px,transparent 0),linear-gradient(#d6d9d6 16.5px,transparent 0),linear-gradient(#d6d9d6 33px,transparent 0),linear-gradient(#e5e5e5 16.5px,transparent 0),linear-gradient(#e5e5e5 33px,transparent 0),linear-gradient(#e5e5e5 16.5px,transparent 0),linear-gradient(#e5e5e5 33px,transparent 0),linear-gradient(#e5e5e5 16.5px,transparent 0),linear-gradient(#e5e5e5 33px,transparent 0)}45%{background-image:linear-gradient(#bdbbbb 16.5px,transparent 0),linear-gradient(#bdbbbb 33px,transparent 0),linear-gradient(#bdbbbb 16.5px,transparent 0),linear-gradient(#bdbbbb 33px,transparent 0),linear-gradient(#d6d9d6 16.5px,transparent 0),linear-gradient(#d6d9d6 33px,transparent 0),linear-gradient(#e5e5e5 16.5px,transparent 0),linear-gradient(#e5e5e5 33px,transparent 0),linear-gradient(#e5e5e5 16.5px,transparent 0),linear-gradient(#e5e5e5 33px,transparent 0)}56%{background-image:linear-gradient(#d6d9d6 16.5px,transparent 0),linear-gradient(#d6d9d6 33px,transparent 0),linear-gradient(#bdbbbb 16.5px,transparent 0),linear-gradient(#bdbbbb 33px,transparent 0),linear-gradient(#bdbbbb 16.5px,transparent 0),linear-gradient(#bdbbbb 33px,transparent 0),linear-gradient(#d6d9d6 16.5px,transparent 0),linear-gradient(#d6d9d6 33px,transparent 0),linear-gradient(#e5e5e5 16.5px,transparent 0),linear-gradient(#e5e5e5 33px,transparent 0)}67%{background-image:linear-gradient(#e5e5e5 16.5px,transparent 0),linear-gradient(#e5e5e5 33px,transparent 0),linear-gradient(#d6d9d6 16.5px,transparent 0),linear-gradient(#d6d9d6 33px,transparent 0),linear-gradient(#bdbbbb 16.5px,transparent 0),linear-gradient(#bdbbbb 33px,transparent 0),linear-gradient(#bdbbbb 16.5px,transparent 0),linear-gradient(#bdbbbb 33px,transparent 0),linear-gradient(#d6d9d6 16.5px,transparent 0),linear-gradient(#d6d9d6 33px,transparent 0)}78%{background-image:linear-gradient(#e5e5e5 16.5px,transparent 0),linear-gradient(#e5e5e5 33px,transparent 0),linear-gradient(#e5e5e5 16.5px,transparent 0),linear-gradient(#e5e5e5 33px,transparent 0),linear-gradient(#d6d9d6 16.5px,transparent 0),linear-gradient(#d6d9d6 33px,transparent 0),linear-gradient(#bdbbbb 16.5px,transparent 0),linear-gradient(#bdbbbb 33px,transparent 0),linear-gradient(#bdbbbb 16.5px,transparent 0),linear-gradient(#bdbbbb 33px,transparent 0)}89%{background-image:linear-gradient(#e5e5e5 16.5px,transparent 0),linear-gradient(#e5e5e5 33px,transparent 0),linear-gradient(#e5e5e5 16.5px,transparent 0),linear-gradient(#e5e5e5 33px,transparent 0),linear-gradient(#e5e5e5 16.5px,transparent 0),linear-gradient(#e5e5e5 33px,transparent 0),linear-gradient(#d6d9d6 16.5px,transparent 0),linear-gradient(#d6d9d6 33px,transparent 0),linear-gradient(#bdbbbb 16.5px,transparent 0),linear-gradient(#bdbbbb 33px,transparent 0)}100%{background-image:linear-gradient(#e5e5e5 16.5px,transparent 0),linear-gradient(#e5e5e5 33px,transparent 0),linear-gradient(#e5e5e5 16.5px,transparent 0),linear-gradient(#e5e5e5 33px,transparent 0),linear-gradient(#e5e5e5 16.5px,transparent 0),linear-gradient(#e5e5e5 33px,transparent 0),linear-gradient(#e5e5e5 16.5px,transparent 0),linear-gradient(#e5e5e5 33px,transparent 0),linear-gradient(#d6d9d6 16.5px,transparent 0),linear-gradient(#d6d9d6 33px,transparent 0)}}kentico-form-modal-dialog .ktc-form-modal-content.ktc-is-loading{height:233px;background-repeat:no-repeat;-webkit-animation:.7s .2s infinite loading;animation:.7s .2s infinite loading;background-image:linear-gradient(transparent 16.5px,transparent 0),linear-gradient(transparent 33px,transparent 0),linear-gradient(transparent 16.5px,transparent 0),linear-gradient(transparent 33px,transparent 0),linear-gradient(transparent 16.5px,transparent 0),linear-gradient(transparent 33px,transparent 0),linear-gradient(transparent 16.5px,transparent 0),linear-gradient(transparent 33px,transparent 0),linear-gradient(transparent 16.5px,transparent 0),linear-gradient(transparent 33px,transparent 0);background-size:160px 16.5px,387px 33px,160px 16.5px,387px 33px,160px 16.5px,387px 33px,160px 16.5px,387px 33px,160px 16.5px,387px 33px;background-position:16px 21.25px,198px 13px,16px 65.25px,198px 57px,16px 109.25px,198px 101px,16px 153.25px,198px 145px,16px 197.25px,198px 189px}"}}export{o as KenticoFormModalDialog};