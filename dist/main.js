(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('riot')) :
  typeof define === 'function' && define.amd ? define(['riot'], factory) :
  (global = global || self, factory(global.riot));
}(this, (function (riot) { 'use strict';

  var App = {
    'css': null,
    'exports': null,

    'template': function(template, expressionTypes, bindingTypes, getComponent) {
      return template(
        '<div class="uk-flex uk-flex-center uk-flex-middle uk-flex-column" uk-height-viewport uk-grid><script src="uikit/dist/js/uikit-icons.min.js"></script><div class="uk-width-1-2 uk-text-center"><div class="logotipo"><img src="/arquivos/imagens/logotipo.png"/></div><div style="clear:both"><p>Venda de artigos da cultura Geek, Gamer e POP!<p><p>Site em construção, atendimento via mídias sociais!</p><a href="https://www.instagram.com/diretoriageek/" class="uk-icon-button" uk-icon="instagram"></a><a href="https://www.facebook.com/diretoriageek" class="uk-icon-button" uk-icon="facebook"></a><a href="https://twitter.com/diretoriageek" class="uk-icon-button" uk-icon="twitter"></a></p><p>@diretoriageek</p></p></div></div></div>',
        []
      );
    },

    'name': 'app'
  };

  riot.component(App)(document.getElementById('root'));

})));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXMiOlsiLi4vc3JjL21haW4uanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtjb21wb25lbnR9IGZyb20gJ3Jpb3QnXG5pbXBvcnQgQXBwIGZyb20gJy4vYXBwLnJpb3QnXG5cbmNvbXBvbmVudChBcHApKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyb290JykpIl0sIm5hbWVzIjpbImNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHQUEsZ0JBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQzs7OzsifQ==
OlxuICB0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQgPyBkZWZpbmUoWydyaW90J10sIGZhY3RvcnkpIDpcbiAgKGdsb2JhbCA9IGdsb2JhbCB8fCBzZWxmLCBmYWN0b3J5KGdsb2JhbC5yaW90KSk7XG59KHRoaXMsIChmdW5jdGlvbiAocmlvdCkgeyAndXNlIHN0cmljdCc7XG5cbiAgdmFyIEFwcCA9IHtcclxuICAgICdjc3MnOiBudWxsLFxyXG4gICAgJ2V4cG9ydHMnOiBudWxsLFxyXG5cclxuICAgICd0ZW1wbGF0ZSc6IGZ1bmN0aW9uKHRlbXBsYXRlLCBleHByZXNzaW9uVHlwZXMsIGJpbmRpbmdUeXBlcywgZ2V0Q29tcG9uZW50KSB7XHJcbiAgICAgIHJldHVybiB0ZW1wbGF0ZShcclxuICAgICAgICAnPGRpdiBjbGFzcz1cInVrLWZsZXggdWstZmxleC1jZW50ZXIgdWstZmxleC1taWRkbGUgdWstZmxleC1jb2x1bW5cIiB1ay1oZWlnaHQtdmlld3BvcnQgdWstZ3JpZD48c2NyaXB0IHNyYz1cInVpa2l0L2Rpc3QvanMvdWlraXQtaWNvbnMubWluLmpzXCI+PC9zY3JpcHQ+PGRpdiBjbGFzcz1cInVrLXdpZHRoLTEtMiB1ay10ZXh0LWNlbnRlclwiPjxkaXYgY2xhc3M9XCJsb2dvdGlwb1wiPjxpbWcgc3JjPVwiL2FycXVpdm9zL2ltYWdlbnMvbG9nb3RpcG8ucG5nXCIvPjwvZGl2PjxkaXYgc3R5bGU9XCJjbGVhcjpib3RoXCI+PHA+VmVuZGEgZGUgYXJ0aWdvcyBkYSBjdWx0dXJhIEdlZWssIEdhbWVyIGUgUE9QITxwPjxwPlNpdGUgZW0gY29uc3RydcOnw6NvLCBhdGVuZGltZW50byB2aWEgbcOtZGlhcyBzb2NpYWlzITwvcD48YSBocmVmPVwiaHR0cHM6Ly93d3cuaW5zdGFncmFtLmNvbS9kaXJldG9yaWFnZWVrL1wiIGNsYXNzPVwidWstaWNvbi1idXR0b25cIiB1ay1pY29uPVwiaW5zdGFncmFtXCI+PC9hPjxhIGhyZWY9XCJodHRwczovL3d3dy5mYWNlYm9vay5jb20vZGlyZXRvcmlhZ2Vla1wiIGNsYXNzPVwidWstaWNvbi1idXR0b25cIiB1ay1pY29uPVwiZmFjZWJvb2tcIj48L2E+PGEgaHJlZj1cImh0dHBzOi8vdHdpdHRlci5jb20vZGlyZXRvcmlhZ2Vla1wiIGNsYXNzPVwidWstaWNvbi1idXR0b25cIiB1ay1pY29uPVwidHdpdHRlclwiPjwvYT48L3A+PHA+QGRpcmV0b3JpYWdlZWs8L3A+PC9wPjwvZGl2PjwvZGl2PjwvZGl2PicsXHJcbiAgICAgICAgW11cclxuICAgICAgKTtcclxuICAgIH0sXHJcblxyXG4gICAgJ25hbWUnOiAnYXBwJ1xyXG4gIH07XG5cbiAgcmlvdC5jb21wb25lbnQoQXBwKShkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm9vdCcpKTtcblxufSkpKTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pYldGcGJpNXFjeUlzSW5OdmRYSmpaWE1pT2xzaUxpNHZjM0pqTDIxaGFXNHVhbk1pWFN3aWMyOTFjbU5sYzBOdmJuUmxiblFpT2xzaWFXMXdiM0owSUh0amIyMXdiMjVsYm5SOUlHWnliMjBnSjNKcGIzUW5YRzVwYlhCdmNuUWdRWEJ3SUdaeWIyMGdKeTR2WVhCd0xuSnBiM1FuWEc1Y2JtTnZiWEJ2Ym1WdWRDaEJjSEFwS0dSdlkzVnRaVzUwTG1kbGRFVnNaVzFsYm5SQ2VVbGtLQ2R5YjI5MEp5a3BJbDBzSW01aGJXVnpJanBiSW1OdmJYQnZibVZ1ZENKZExDSnRZWEJ3YVc1bmN5STZJanM3T3pzN096czdPenM3T3pzN096czdPenM3UVVGSFFVRXNaMEpCUVZNc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eFJRVUZSTEVOQlFVTXNZMEZCWXl4RFFVRkRMRTFCUVUwc1EwRkJRenM3T3pzaWZRPT1cbiJdLCJuYW1lcyI6WyJ0aGlzIl0sIm1hcHBpbmdzIjoiOzs7OztFQUFBLENBQUMsVUFBVSxNQUFNLEVBQUUsT0FBTyxFQUFFO0VBQzVCLEVBQUUsT0FBTyxPQUFPLEtBQUssUUFBUSxJQUFJLE9BQU8sTUFBTSxLQUFLLFdBQVcsR0FBRyxPQUFPLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0VBQ3pGLEVBQUUsT0FBTyxNQUFNLEtBQUssVUFBVSxJQUFJLE1BQU0sQ0FBQyxHQUFHLEdBQUcsTUFBTSxDQUFDLENBQUMsTUFBTSxDQUFDLEVBQUUsT0FBTyxDQUFDO0VBQ3hFLEdBQUcsTUFBTSxHQUFHLE1BQU0sSUFBSSxJQUFJLEVBQUUsT0FBTyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0VBQ2xELENBQUMsQ0FBQ0EsU0FBSSxHQUFHLFVBQVUsSUFBSSxFQUFFLENBQ3pCO0VBQ0EsRUFBRSxJQUFJLEdBQUcsR0FBRztFQUNaLElBQUksS0FBSyxFQUFFLElBQUk7RUFDZixJQUFJLFNBQVMsRUFBRSxJQUFJO0FBQ25CO0VBQ0EsSUFBSSxVQUFVLEVBQUUsU0FBUyxRQUFRLEVBQUUsZUFBZSxFQUFFLFlBQVksRUFBRSxZQUFZLEVBQUU7RUFDaEYsTUFBTSxPQUFPLFFBQVE7RUFDckIsUUFBUSxzdEJBQXN0QjtFQUM5dEIsUUFBUSxFQUFFO0VBQ1YsT0FBTyxDQUFDO0VBQ1IsS0FBSztBQUNMO0VBQ0EsSUFBSSxNQUFNLEVBQUUsS0FBSztFQUNqQixHQUFHLENBQUM7QUFDSjtFQUNBLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7QUFDdkQ7RUFDQSxDQUFDLEVBQUU7Ozs7In0=
