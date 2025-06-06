$(function(){
    /*=================================================
    ハンバーガーメニュー
    解説は、「中級編：ストアサイト（インテリア）」参照
    ===================================================*/
    $('.hamburger').on('click', function() {
      if ($('#header').hasClass('open')) {
        $('#header').removeClass('open');
      } else {
        $('#header').addClass('open');
      }
    });
  
    // #maskのエリアをクリックした時にメニューを閉じる
    $('#mask').on('click', function() {
      $('#header').removeClass('open');
    });
  
    // リンクをクリックした時にメニューを閉じる
    $('#navi a').on('click', function() {
      $('#header').removeClass('open');
    });
  
    /*=================================================
    トップに戻る
    ===================================================*/
    let pagetop = $('#to-top');
    // 最初に画面が表示された時は、トップに戻るボタンを非表示に設定
    pagetop.hide();
  
    // スクロールイベント（スクロールされた際に実行）
    $(window).scroll(function() {
      // スクロール位置が700pxを超えた場合
      if ($(this).scrollTop() > 700) {
        // トップに戻るボタンを表示する
        pagetop.fadeIn();
  
      // スクロール位置が700px未満の場合
      } else {
        // トップに戻るボタンを非表示にする
        pagetop.fadeOut();
      }
    });
  
    // クリックイベント（ボタンがクリックされた際に実行）
    pagetop.click(function() {
      // 0.5秒かけてページトップへ移動
      $('body,html').animate({scrollTop: 0}, 500);
  
      // イベントが親要素へ伝播しないための記述
      // ※詳しく知りたい方は「イベント　バブリング」または「jQuery バブリング」で調べてみてください
      return false;
    });
  });
  document.addEventListener('DOMContentLoaded', function () {
    const modal = document.getElementById("myModal");
    const modalImg = document.getElementById("img01");
    const captionText = document.getElementById("caption");
    const closeBtn = document.querySelector(".close");
  
    // ギャラリーの画像を取得
    document.querySelectorAll(".gallery img").forEach(function (img) {
      img.addEventListener("click", function () {
        modal.style.display = "flex";
        modalImg.src = this.src;
        captionText.textContent = this.alt;
      });
    });
  
    // 閉じるボタン
    closeBtn.addEventListener("click", function () {
      modal.style.display = "none";
    });
  
    // モーダルの外側クリックで閉じる
    modal.addEventListener("click", function (e) {
      if (e.target === modal) {
        modal.style.display = "none";
      }
    });
  });
  