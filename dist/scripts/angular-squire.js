/**
* @preserve angular-squire - angularjs directive for squire rich text editor
* @version v1.0.0
* @link https://github.com/HourlyNerd/angular-squire
* @license MIT
*
* angular-squire includes squire-rte which is Copyright © by Neil Jenkins. MIT Licensed.
**/
(function(){var e,n;n="undefined"!=typeof module&&null!==module&&module.exports,n?(e=require("squire-rte"),module.exports="angular-squire"):e=window.Squire,(n?require("angular"):window.angular).module("angular-squire",[]).directive("squire",["squireService",function(n){return{restrict:"E",require:"ngModel",scope:{height:"@",width:"@",body:"=",placeholder:"@",editorClass:"@",buttons:"@"},replace:!0,transclude:!0,templateUrl:"/modules/angular-squire/editor.html",controller:["$scope",function(e){var t,i;t={},e.buttons&&(t=e.$eval(e.buttons)),e.buttonVis=_.defaults(t||{},n.getButtonDefaults()),i=!0,e.isEditorVisible=function(){return i},e.editorVisibility=this.editorVisibility=function(n){var t;return 1!==arguments.length?i:(i=n,n&&null!=(t=e.editor)?t.focus():void 0)}}],link:function(t,i,r,s){var a,o,l,u,d,c,v,g,f,h,p;return l="http://",o="angular-squire-iframe",a="h4",u=t.editor=null,t.data={link:l},h=function(e){return e=n.sanitize.input(e,u),t.$evalAsync(function(){return s.$setViewValue(e),s.$isEmpty(e)?i.removeClass("squire-has-value"):i.addClass("squire-has-value")})},s.$render=function(){return null!=u?u.setHTML(s.$viewValue||""):void 0},s.$isEmpty=function(e){return angular.isString(e)?0===angular.element("<div>"+e+"</div>").text().trim().length:!e},d=function(){return u?angular.element(u.getSelection().commonAncestorContainer).closest("a").attr("href"):l},t.canRemoveLink=function(){var e;return e=d(),e&&e!==l},t.canAddLink=function(){return t.data.link&&t.data.link!==l},t.$on("$destroy",function(){return null!=u?u.destroy():void 0}),t.showPlaceholder=function(){return s.$isEmpty(s.$viewValue)},t.popoverHide=function(e,n){var i;return i=function(){return angular.element(e.target).closest(".popover-visible").removeClass("popover-visible"),t.action(n)},e.keyCode?13===e.keyCode?i():void 0:i()},t.popoverShow=function(e){var n,r;n=angular.element(e.currentTarget),angular.element(e.target).closest(".squire-popover").length||n.hasClass("popover-visible")||(n.addClass("popover-visible"),/>A\b/.test(u.getPath())||u.hasFormat("A")?t.data.link=d():t.data.link=l,r=i.find(".squire-popover").find("input").focus().end(),r.css({left:-1*(r.width()/2)+n.width()/2+2}))},p=function(e){var n;return n=e.head,_.each(angular.element('link[rel="stylesheet"]'),function(t){var i;return i=e.createElement("link"),i.setAttribute("href",t.href),i.setAttribute("type","text/css"),i.setAttribute("rel","stylesheet"),n.appendChild(i)}),e.childNodes[0].className=o+" ",t.editorClass?e.childNodes[0].className+=t.editorClass:void 0},v=angular.element('<iframe frameborder="0" border="0" marginwidth="0" marginheight="0" src="about:blank"></iframe>'),f=i.find(".menu"),c=!1,g=function(){var r,o;return r=v[0].contentWindow.document,p(r),s.$setPristine(),u=t.editor=new e(r),u.defaultBlockTag="P",o=t.body||s.$viewValue,o&&(u.setHTML(o),h(o),c=!0),u.addEventListener("willPaste",function(e){return n.sanitize.paste(e,u)}),u.addEventListener("input",function(){var e;return c?(e=u.getHTML(),h(e)):void 0}),u.addEventListener("focus",function(){return i.addClass("focus").triggerHandler("focus"),t.editorVisibility(!0),c=!0}),u.addEventListener("blur",function(){return i.removeClass("focus").triggerHandler("blur"),s.$pristine&&!s.$isEmpty(s.$viewValue)?s.$setTouched():s.$setPristine(),c=!0}),u.addEventListener("pathChange",function(){var e,n;return e=u.getPath(),/>A\b/.test(e)||u.hasFormat("A")?i.find(".add-link").addClass("active"):i.find(".add-link").removeClass("active"),f.attr("class","menu "+(null!=(n=e.split("BODY")[1])?n.replace(/>|\.|html|body|div/gi," ").replace(RegExp(a,"g"),"size").toLowerCase():void 0))}),u.alignRight=function(){return u.setTextAlignment("right")},u.alignCenter=function(){return u.setTextAlignment("center")},u.alignLeft=function(){return u.setTextAlignment("left")},u.alignJustify=function(){return u.setTextAlignment("justify")},u.makeHeading=function(){var e;return e=!f.hasClass("size"),u.forEachBlock(function(n){return e?angular.element(n).addClass(a):angular.element(n).removeClass(a)},!0),u.focus()}},v.on("load",g),i.find(".angular-squire-wrapper").append(v),e.prototype.testPresenceinSelection=function(e,n,t,i){var r,s;return r=this.getPath(),s=i.test(r)|this.hasFormat(t),e===n&&s},t.action=function(e){var n,i,r,s,a;if(u)if(a={value:e,testBold:u.testPresenceinSelection("bold",e,"B",/>B\b/),testItalic:u.testPresenceinSelection("italic",e,"I",/>I\b/),testUnderline:u.testPresenceinSelection("underline",e,"U",/>U\b/),testOrderedList:u.testPresenceinSelection("makeOrderedList",e,"OL",/>OL\b/),testUnorderedList:u.testPresenceinSelection("makeUnorderedList",e,"UL",/>UL\b/),testLink:u.testPresenceinSelection("removeLink",e,"A",/>A\b/),testQuote:u.testPresenceinSelection("increaseQuoteLevel",e,"blockquote",/>blockquote\b/),isNotValue:function(n){return n===e&&""!==this.value}},a.testBold||a.testItalic||a.testUnderline||a.testOrderedList||a.testUnorderedList||a.testQuote||a.testLink){if(a.testBold&&u.removeBold(),a.testItalic&&u.removeItalic(),a.testUnderline&&u.removeUnderline(),a.testOrderedList&&u.removeList(),a.testUnorderedList&&u.removeList(),a.testQuote&&u.decreaseQuoteLevel(),a.testLink)return u.removeLink(),u.focus()}else if(!a.isNotValue("removeLink")){if("makeLink"===e){if(!t.canAddLink())return;return i=angular.element(u.getSelection().commonAncestorContainer).closest("a")[0],i&&(r=v[0].contentWindow.document.createRange(),r.selectNodeContents(i),s=v[0].contentWindow.getSelection(),s.removeAllRanges(),s.addRange(r)),n=t.data.link.match(/^\s*?javascript:/i)?l:t.data.link,u.makeLink(n,{target:"_blank",title:n,rel:"nofollow"}),t.data.link=l,u.focus()}return u[e](),u.focus()}}}}}]).directive("squireCover",function(){return{restrict:"E",replace:!0,transclude:!0,require:"^squire",template:'<ng-transclude ng-show="isCoverVisible()"\n    ng-click=\'hideCover()\'\n    class="angular-squire-cover">\n</ng-transclude>',link:function(e,n,t,i){var r;return r=!0,e.isCoverVisible=function(){return r},e.hideCover=function(){return r=!1,i.editorVisibility(!0)},i.editorVisibility(!r),e.$watch(function(){return i.editorVisibility()},function(e){return r=!e})}}}).directive("squireControls",function(){return{restrict:"E",scope:!1,replace:!0,transclude:!0,require:"^squire",template:'<ng-transclude ng-show="isControlsVisible()"\n    class="angular-squire-controls">\n</ng-transclude>',link:function(e,n,t,i){return e.isControlsVisible=function(){return i.editorVisibility()}}}}).provider("squireService",[function(){var e,n,t,i,r,s,a;return r=!angular.isUndefined(window.Sanitize),e={bold:!0,italic:!0,underline:!0,link:!0,ol:!0,ul:!0,quote:!0,header:!0,alignRight:!0,alignLeft:!0,alignCenter:!0,undo:!0,redo:!0},r&&(n=new Sanitize({elements:["div","span","b","i","ul","ol","li","blockquote","a","p","br","u"],attributes:{__ALL__:["class"],a:["href","title","target","rel"]},protocols:{a:{href:["ftp","http","https","mailto","gopher"]}}}),a={paste:n,input:n}),t=r,s={onPaste:function(e,n){},onChange:function(e,n){return e},sanitize:{paste:function(e,n){return t&&(e.fragment=a.paste.clean_node(e.fragment)),s.onPaste(e,n)},input:function(e,n){var i,r,o,l,u;if(t){for(o=document.createDocumentFragment(),u=document.createElement("body"),u.innerHTML=e;i=u.firstChild;)o.appendChild(i);for(o=a.input.clean_node(o);i=o.firstChild;)u.appendChild(i);l=u.innerHTML,e!==l&&(n.setHTML(l),e=l)}return r={html:e},s.onChange(r,n),r.html}},setButtonDefaults:function(n){return e=n},getButtonDefaults:function(){return e}},this.onPaste=function(e){return e?s.onPaste=e:void 0},this.onChange=function(e){return e?s.onChange=e:void 0},i=function(e){var n;return r?e:(n="Angular-Squire: you must include https://github.com/gbirke/Sanitize.js to  use sanitize options",function(){throw new Error(n)})},this.sanitizeOptions={paste:i(function(e){return e?a.paste=new Sanitize(e):void 0}),input:i(function(e){return e?a.input=new Sanitize(e):void 0})},this.strictPaste=i(function(e){return e?a.paste=new Sanitize({elements:["div","span","b","i","u","br","p"]}):a.paste=n}),this.enableSanitizer=i(function(e){return null==e&&(e=!0),t=e}),this.$get=function(){return s},this}])}).call(this),angular.module("angular-squire").run(["$templateCache",function(e){e.put("/modules/angular-squire/editor.html",'<div class=\'angular-squire\'>\n    <div ng-class="{\'editor-hide\': !isEditorVisible()}" class=\'editor-container\'>\n        <div class="menu">\n            <div class="group" ng-show="buttonVis.bold || buttonVis.italic || buttonVis.underline">\n                <div title=\'Bold\'\n                     ng-click="action(\'bold\')"\n                     ng-show="buttonVis.bold"\n                     class="item bold">\n                    <i class="fa fa-bold"></i>\n                </div>\n                <div title=\'Italic\'\n                     ng-click="action(\'italic\')"\n                     ng-show="buttonVis.italic"\n                     class="item italic">\n                    <i class="fa fa-italic"></i>\n                </div>\n                <div title=\'Underline\'\n                     ng-click="action(\'underline\')"\n                     ng-show="buttonVis.underline"\n                     class="item underline">\n                    <i class="fa fa-underline"></i>\n                </div>\n            </div>\n            <div class="group"  ng-show="buttonVis.link || buttonVis.ol || buttonVis.ul || buttonVis.quote">\n                <div title=\'Insert Link\'\n                     class="item add-link"\n                     ng-show="buttonVis.link"\n                     ng-click="popoverShow($event)">\n                    <i class="fa fa-link"></i>\n                    <div class="squire-popover">\n                        <div class="arrow"></div>\n                        <div class="content">\n                            <div class="title">Insert Link</div>\n                            <input type="text"\n                                id="edit-link"\n                                placeholder="Link URL"\n                                ng-model="data.link"\n                                ng-keydown="popoverHide($event, \'makeLink\')" />\n                            <button class="double r" ng-show="canRemoveLink()"\n                                ng-click="popoverHide($event, \'removeLink\')">\n                                <span class="fa fa-remove"></span> Remove Link\n                            </button>\n                            <button class="double l" ng-show="canRemoveLink()"\n                                ng-class="{disabled: !canAddLink()}"\n                                ng-click="popoverHide($event, \'makeLink\')">\n                                <span class="fa fa-edit"></span> Update Link\n                            </button>\n                            <button ng-hide="canRemoveLink()"\n                                ng-class="{disabled: !canAddLink()}"\n                                ng-click="popoverHide($event, \'makeLink\')">\n                                <span class="fa fa-plus"></span> Insert Link\n                            </button>\n                        </div>\n                        <div class="squire-popover-overlay" ng-click="popoverHide($event, \'makeLink\')"></div>\n                    </div>\n                </div>\n                <div title=\'Insert Numbered List\'\n                     ng-click="action(\'makeOrderedList\')"\n                     ng-show="buttonVis.ol"\n                     class="item olist">\n                    <i class="fa fa-list-ol"></i>\n                </div>\n                <div title=\'Insert List\'\n                     ng-click="action(\'makeUnorderedList\')"\n                     ng-show="buttonVis.ul"\n                     class="item ulist">\n                    <i class="fa fa-list-ul"></i>\n                </div>\n                <div title=\'Quote\'\n                     ng-click="action(\'increaseQuoteLevel\')"\n                     ng-show="buttonVis.quote"\n                     class="item quote">\n                    <i class="fa fa-quote-right"></i>\n                </div>\n            </div>\n\n            <div class="group" ng-show="buttonVis.header || buttonVis.alignLeft || buttonVis.alignRight || buttonVis.alignCenter">\n                <div title=\'Header\'\n                     ng-click="action(\'makeHeading\')"\n                     ng-show="buttonVis.header"\n                     class="item header">\n                    <i class="fa fa-header"></i>\n                </div>\n                <div title=\'Align Left\'\n                     ng-click="action(\'alignLeft\')"\n                     ng-show="buttonVis.alignLeft"\n                     class="item aleft">\n                    <i class="fa fa-align-left"></i>\n                </div>\n                <div title=\'Align Center\'\n                     ng-click="action(\'alignCenter\')"\n                     ng-show="buttonVis.alignCenter"\n                     class="item acenter">\n                    <i class="fa fa-align-center"></i>\n                </div>\n                <div title=\'Align Right\'\n                     ng-click="action(\'alignRight\')"\n                     ng-show="buttonVis.alignRight"\n                     class="item aright">\n                    <i class="fa fa-align-right"></i>\n                </div>\n            </div>\n\n            <div class="group" ng-show="buttonVis.undo || buttonVis.redo">\n                <div title=\'Undo\'\n                     ng-click="action(\'undo\')"\n                     ng-show="buttonVis.undo"\n                     class="item">\n                    <i class="fa fa-undo"></i>\n                </div>\n                <div title=\'Redo\'\n                     ng-click="action(\'redo\')"\n                     ng-show="buttonVis.redo"\n                     class="item">\n                    <i class="fa fa-repeat"></i>\n                </div>\n            </div>\n        </div>\n\n        <div class=\'angular-squire-wrapper\' ng-style=\'{width: width, height: height}\'>\n            <div class=\'placeholder\'>\n                <div ng-show=\'showPlaceholder()\'>{{ placeholder }}</div>\n            </div>\n        </div>\n    </div>\n    <ng-transclude></ng-transclude>\n</div>\n')}]);