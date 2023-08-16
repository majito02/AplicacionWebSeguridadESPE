"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[202],{202:function(n,e,t){t.r(e),t.d(e,{AttributionControl:function(){return x},Circle:function(){return S},CircleMarker:function(){return M},FeatureGroup:function(){return _},GeoJSON:function(){return z},ImageOverlay:function(){return H},LayerGroup:function(){return N},LayersControl:function(){return j},MapContainer:function(){return Z},Marker:function(){return U},Pane:function(){return W},Polygon:function(){return q},Polyline:function(){return D},Popup:function(){return Y},Rectangle:function(){return K},SVGOverlay:function(){return nn},ScaleControl:function(){return Q},TileLayer:function(){return nt},Tooltip:function(){return nr},VideoOverlay:function(){return nu},WMSTileLayer:function(){return no},ZoomControl:function(){return nl},useMap:function(){return i},useMapEvent:function(){return c},useMapEvents:function(){return f}});var r=t(7294);function u(n,e){return Object.freeze({...n,...e})}let o=(0,r.createContext)(null),l=o.Provider;function a(){let n=(0,r.useContext)(o);if(null==n)throw Error("No context provided: useLeafletContext() can only be used in a descendant of <MapContainer>");return n}function i(){return a().map}function c(n,e){let t=i();return(0,r.useEffect)(function(){return t.on(n,e),function(){t.off(n,e)}},[t,n,e]),t}function f(n){let e=i();return(0,r.useEffect)(function(){return e.on(n),function(){e.off(n)}},[e,n]),e}var s=t(3935);function p(n){return(0,r.forwardRef)(function(e,t){let{instance:u,context:o}=n(e).current;return(0,r.useImperativeHandle)(t,()=>u),null==e.children?null:r.createElement(l,{value:o},e.children)})}function d(n){return(0,r.forwardRef)(function(e,t){let{instance:u}=n(e).current;return(0,r.useImperativeHandle)(t,()=>u),null})}function y(n){return function(e){let t=a(),u=n(e,t),{instance:o}=u.current,l=(0,r.useRef)(e.position),{position:i}=e;return(0,r.useEffect)(function(){return o.addTo(t.map),function(){o.remove()}},[t.map,o]),(0,r.useEffect)(function(){null!=i&&i!==l.current&&(o.setPosition(i),l.current=i)},[o,i]),u}}function v(n,e,t){return Object.freeze({instance:n,context:e,container:t})}function m(n,e){return null==e?function(e,t){let u=(0,r.useRef)();return u.current||(u.current=n(e,t)),u}:function(t,u){let o=(0,r.useRef)();o.current||(o.current=n(t,u));let l=(0,r.useRef)(t),{instance:a}=o.current;return(0,r.useEffect)(function(){l.current!==t&&(e(a,t,l.current),l.current=t)},[a,t,u]),o}}function C(n,e){let t=(0,r.useRef)(e);(0,r.useEffect)(function(){e!==t.current&&null!=n.attributionControl&&(null!=t.current&&n.attributionControl.removeAttribution(t.current),null!=e&&n.attributionControl.addAttribution(e)),t.current=e},[n,e])}function w(n,e){let t=(0,r.useRef)();(0,r.useEffect)(function(){return null!=e&&n.instance.on(e),t.current=e,function(){null!=t.current&&n.instance.off(t.current),t.current=null}},[n,e])}function b(n,e){let t=n.pane??e.pane;return t?{...n,pane:t}:n}function g(n,e){(0,r.useEffect)(function(){let t=e.layerContainer??e.map;return t.addLayer(n.instance),function(){e.layerContainer?.removeLayer(n.instance),e.map.removeLayer(n.instance)}},[e,n])}function h(n){return function(e){let t=a(),r=n(b(e,t),t);return C(t.map,e.attribution),w(r.current,e.eventHandlers),g(r.current,t),r}}function L(n){let e=m(function(e,t){return v(n(e),t)}),t=y(e);return d(t)}function E(n,e){let t=m(n,e),r=h(t);return p(r)}function O(n,e){var t;let u=m(n);return t=function(n,t){let r=a(),o=u(b(n,r),r);return C(r.map,n.attribution),w(o.current,n.eventHandlers),e(o.current,r,n,t),o},(0,r.forwardRef)(function(n,e){let[u,o]=(0,r.useState)(!1),{instance:l}=t(n,o).current;(0,r.useImperativeHandle)(e,()=>l),(0,r.useEffect)(function(){u&&l.update()},[l,u,n.children]);let a=l._contentNode;return a?(0,s.createPortal)(n.children,a):null})}function P(n,e){let t=m(n,e);return p(function(n){let e=a(),u=t(b(n,e),e);return w(u.current,n.eventHandlers),g(u.current,e),function(n,e){let t=(0,r.useRef)();(0,r.useEffect)(function(){if(e.pathOptions!==t.current){let r=e.pathOptions??{};n.instance.setStyle(r),t.current=r}},[n,e])}(u.current,n),u})}function k(n,e){let t=m(n,e),r=h(t);return d(r)}var I=t(5243);let x=L(function(n){return new I.Control.Attribution(n)});function R(n,e,t){e.center!==t.center&&n.setLatLng(e.center),null!=e.radius&&e.radius!==t.radius&&n.setRadius(e.radius)}let S=P(function(n,e){let{center:t,children:r,...o}=n,l=new I.Circle(t,o);return v(l,u(e,{overlayContainer:l}))},R),M=P(function(n,e){let{center:t,children:r,...o}=n,l=new I.CircleMarker(t,o);return v(l,u(e,{overlayContainer:l}))},R),_=P(function(n,e){let{children:t,...r}=n,o=new I.FeatureGroup([],r);return v(o,u(e,{layerContainer:o,overlayContainer:o}))}),z=P(function(n,e){let{data:t,...r}=n,o=new I.GeoJSON(t,r);return v(o,u(e,{overlayContainer:o}))},function(n,e,t){e.style!==t.style&&(null==e.style?n.resetStyle():n.setStyle(e.style))});function B(n,e,t){e.bounds instanceof I.LatLngBounds&&e.bounds!==t.bounds&&n.setBounds(e.bounds),null!=e.opacity&&e.opacity!==t.opacity&&n.setOpacity(e.opacity),null!=e.zIndex&&e.zIndex!==t.zIndex&&n.setZIndex(e.zIndex)}let H=E(function(n,e){let{bounds:t,url:r,...o}=n,l=new I.ImageOverlay(r,t,o);return v(l,u(e,{overlayContainer:l}))},function(n,e,t){if(B(n,e,t),e.bounds!==t.bounds){let t=e.bounds instanceof I.LatLngBounds?e.bounds:new I.LatLngBounds(e.bounds);n.setBounds(t)}e.url!==t.url&&n.setUrl(e.url)}),N=E(function(n,e){let{children:t,...r}=n,o=new I.LayerGroup([],r);return v(o,u(e,{layerContainer:o}))}),T=m(function(n,e){let{children:t,...r}=n,o=new I.Control.Layers(void 0,void 0,r);return v(o,u(e,{layersControl:o}))},function(n,e,t){e.collapsed!==t.collapsed&&(!0===e.collapsed?n.collapse():n.expand())}),G=y(T),j=p(G);function A(n){return function(e){let t=a(),o=(0,r.useRef)(e),[i,c]=(0,r.useState)(null),{layersControl:f,map:s}=t,p=(0,r.useCallback)(e=>{null!=f&&(o.current.checked&&s.addLayer(e),n(f,e,o.current.name),c(e))},[f,s]),d=(0,r.useCallback)(n=>{null==f||f.removeLayer(n),c(null)},[f]),y=(0,r.useMemo)(()=>u(t,{layerContainer:{addLayer:p,removeLayer:d}}),[t,p,d]);return(0,r.useEffect)(()=>{null!==i&&o.current!==e&&(!0===e.checked&&(null==o.current.checked||!1===o.current.checked)?s.addLayer(i):!0===o.current.checked&&(null==e.checked||!1===e.checked)&&s.removeLayer(i),o.current=e)}),e.children?r.createElement(l,{value:y},e.children):null}}function V(){return(V=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n}).apply(this,arguments)}j.BaseLayer=A(function(n,e,t){n.addBaseLayer(e,t)}),j.Overlay=A(function(n,e,t){n.addOverlay(e,t)});let Z=(0,r.forwardRef)(function(n,e){var t;let{bounds:u,boundsOptions:o,center:a,children:i,className:c,id:f,placeholder:s,style:p,whenReady:d,zoom:y,...v}=n,[m]=(0,r.useState)({className:c,id:f,style:p}),[C,w]=(0,r.useState)(null);(0,r.useImperativeHandle)(e,()=>null!==(t=null==C?void 0:C.map)&&void 0!==t?t:null,[C]);let b=(0,r.useCallback)(n=>{if(null!==n&&null===C){let e=new I.Map(n,v);null!=a&&null!=y?e.setView(a,y):null!=u&&e.fitBounds(u,o),null!=d&&e.whenReady(d),w(Object.freeze({__version:1,map:e}))}},[]);(0,r.useEffect)(()=>()=>{null==C||C.map.remove()},[C]);let g=C?r.createElement(l,{value:C},i):null!=s?s:null;return r.createElement("div",V({},m,{ref:b}),g)}),U=E(function(n,e){let{position:t,...r}=n,o=new I.Marker(t,r);return v(o,u(e,{overlayContainer:o}))},function(n,e,t){e.position!==t.position&&n.setLatLng(e.position),null!=e.icon&&e.icon!==t.icon&&n.setIcon(e.icon),null!=e.zIndexOffset&&e.zIndexOffset!==t.zIndexOffset&&n.setZIndexOffset(e.zIndexOffset),null!=e.opacity&&e.opacity!==t.opacity&&n.setOpacity(e.opacity),null!=n.dragging&&e.draggable!==t.draggable&&(!0===e.draggable?n.dragging.enable():n.dragging.disable())}),F=["mapPane","markerPane","overlayPane","popupPane","shadowPane","tilePane","tooltipPane"];function J(n,e){let{[e]:t,...r}=n;return r}let W=(0,r.forwardRef)(function(n,e){let[t]=(0,r.useState)(n.name),[u,o]=(0,r.useState)(null);(0,r.useImperativeHandle)(e,()=>u,[u]);let i=a(),c=(0,r.useMemo)(()=>({...i,pane:t}),[i]);return(0,r.useEffect)(()=>(o(function(n,e,t){var r;if(-1!==F.indexOf(n))throw Error("You must use a unique name for a pane that is not a default Leaflet pane: ".concat(n));if(null!=t.map.getPane(n))throw Error("A pane with this name already exists: ".concat(n));let u=null!==(r=e.pane)&&void 0!==r?r:t.pane,o=u?t.map.getPane(u):void 0,l=t.map.createPane(n,o);return null!=e.className&&function(n,e){e.split(" ").filter(Boolean).forEach(e=>{I.DomUtil.addClass(n,e)})}(l,e.className),null!=e.style&&Object.keys(e.style).forEach(n=>{l.style[n]=e.style[n]}),l}(t,n,i)),function(){var n;let e=i.map.getPane(t);null==e||null===(n=e.remove)||void 0===n||n.call(e),null!=i.map._panes&&(i.map._panes=J(i.map._panes,t),i.map._paneRenderers=J(i.map._paneRenderers,t))}),[]),null!=n.children&&null!=u?(0,s.createPortal)(r.createElement(l,{value:c},n.children),u):null}),q=P(function(n,e){let{positions:t,...r}=n,o=new I.Polygon(t,r);return v(o,u(e,{overlayContainer:o}))},function(n,e,t){e.positions!==t.positions&&n.setLatLngs(e.positions)}),D=P(function(n,e){let{positions:t,...r}=n,o=new I.Polyline(t,r);return v(o,u(e,{overlayContainer:o}))},function(n,e,t){e.positions!==t.positions&&n.setLatLngs(e.positions)}),Y=O(function(n,e){let t=new I.Popup(n,e.overlayContainer);return v(t,e)},function(n,e,t,u){let{position:o}=t;(0,r.useEffect)(function(){let{instance:t}=n;function r(n){n.popup===t&&(t.update(),u(!0))}function l(n){n.popup===t&&u(!1)}return e.map.on({popupopen:r,popupclose:l}),null==e.overlayContainer?(null!=o&&t.setLatLng(o),t.openOn(e.map)):e.overlayContainer.bindPopup(t),function(){var n;e.map.off({popupopen:r,popupclose:l}),null===(n=e.overlayContainer)||void 0===n||n.unbindPopup(),e.map.removeLayer(t)}},[n,e,u,o])}),K=P(function(n,e){let{bounds:t,...r}=n,o=new I.Rectangle(t,r);return v(o,u(e,{overlayContainer:o}))},function(n,e,t){e.bounds!==t.bounds&&n.setBounds(e.bounds)}),Q=L(function(n){return new I.Control.Scale(n)}),X=m(function(n,e){let{attributes:t,bounds:r,...u}=n,o=document.createElementNS("http://www.w3.org/2000/svg","svg");o.setAttribute("xmlns","http://www.w3.org/2000/svg"),null!=t&&Object.keys(t).forEach(n=>{o.setAttribute(n,t[n])});let l=new I.SVGOverlay(o,r,u);return v(l,e,o)},B),$=h(X),nn=(0,r.forwardRef)(function(n,e){let{children:t,...u}=n,{instance:o,container:l}=$(u).current;return(0,r.useImperativeHandle)(e,()=>o),null==l||null==t?null:(0,s.createPortal)(t,l)});function ne(n,e,t){let{opacity:r,zIndex:u}=e;null!=r&&r!==t.opacity&&n.setOpacity(r),null!=u&&u!==t.zIndex&&n.setZIndex(u)}let nt=k(function(n,e){let{url:t,...r}=n,u=new I.TileLayer(t,b(r,e));return v(u,e)},function(n,e,t){ne(n,e,t);let{url:r}=e;null!=r&&r!==t.url&&n.setUrl(r)}),nr=O(function(n,e){let t=new I.Tooltip(n,e.overlayContainer);return v(t,e)},function(n,e,t,u){let{position:o}=t;(0,r.useEffect)(function(){let t=e.overlayContainer;if(null==t)return;let{instance:r}=n,l=n=>{n.tooltip===r&&(null!=o&&r.setLatLng(o),r.update(),u(!0))},a=n=>{n.tooltip===r&&u(!1)};return t.on({tooltipopen:l,tooltipclose:a}),t.bindTooltip(r),function(){t.off({tooltipopen:l,tooltipclose:a}),null!=t._map&&t.unbindTooltip()}},[n,e,u,o])}),nu=E(function(n,e){let{bounds:t,url:r,...o}=n,l=new I.VideoOverlay(r,t,o);if(!0===o.play){var a;null===(a=l.getElement())||void 0===a||a.play()}return v(l,u(e,{overlayContainer:l}))},function(n,e,t){B(n,e,t),"string"==typeof e.url&&e.url!==t.url&&n.setUrl(e.url);let r=n.getElement();null==r||(!0!==e.play||t.play?e.play||!0!==t.play||r.pause():r.play())}),no=k(function(n,e){let{eventHandlers:t,params:r={},url:u,...o}=n,l=new I.TileLayer.WMS(u,{...r,...b(o,e)});return v(l,e)},function(n,e,t){ne(n,e,t),null!=e.params&&e.params!==t.params&&n.setParams(e.params)}),nl=L(function(n){return new I.Control.Zoom(n)})}}]);