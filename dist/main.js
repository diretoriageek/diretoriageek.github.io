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
