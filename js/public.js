
$(function () {

  $('.c_m').each(function() { //each的function = 這個樣式下面的每一個東西，都執行下列語法

    var L = $(this).find ('>.a1').length; //抓取這個樣式，第一層 叫 .a1 元素的長度(有幾個)
    var c = 'na' + L; //na是對應scss中，我給他的變數名稱，這個名稱＋元素有幾個（上面var的內容）

    $(this).addClass(c); // .c_m 樣式，就加上var c 計算出來的總數

    $(this).prev().click(function() { // .c_m 樣式的父親層（ prev() ）被點擊的時候，執行下面動作。
      // $('.c_m').removeClass ('open');
      $(this).next().toggleClass ('open'); // 這段用意是指定點擊該選項，才會觸發該選項下方的盒子。
    });
  });


});
