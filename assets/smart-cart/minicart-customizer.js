(function () {
  var cart = window.miniCart || window.minicart || window.MobiCart || {};
  cart.customize = cart.customize || function () {};
  cart.update = cart.update || function () {};
  window.miniCart = cart;
  window.minicart = cart;
  window.MobiCart = cart;
})();
