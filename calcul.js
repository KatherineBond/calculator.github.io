$(document).ready(function() {

  // модальные окна
  $('.btn_modal').click(function() {
    let id = $(this).attr('data-target');
    $('.modalblock[data-id="' + id + '"]').addClass('show');
    $('body').css('position', 'fixed');
  });
  $('.close').click(function() {
    $(this).parents('.modalblock').removeClass('show');
    $('body').css('position', 'static');
  });

  // скрол к товарам после обработки запроса и анимация блоков товаров
  // варианты анимации .bounceIn .bounceInDown .zoomIn
  function prodAnimate(){
    let item = $('.products_block .item');
    $("html, body").animate({scrollTop: $(".products").height()},"slow");
    item.each(function(){
      let delay = $(this).attr('data-delay');
      $(this).css('animation-delay', delay).addClass('bounceIn');
    });
    return false;
  };

  // раскрытие сеотекста на моб.версии
  $('.show_all').on("click", function(e) {
    e.preventDefault();
    $(this).siblings('.toggle_xs').toggleClass('show');
  });

  // кнопка доп информации
  $('.btn_info').popover({
    trigger: 'focus'
  });

  var thcSlider = new rSlider({
        target: '#thcSlider',
        values: {min: 0, max: 20},
        step: 1,
        range: true,
        set: [5, 10],
        scale: true,
        tooltip: true,
        labels: false,
    });
    var cbdSlider = new rSlider({
          target: '#cbdSlider',
          values: {min: 0, max: 10},
          step: 1,
          range: true,
          set: [5, 10],
          scale: true,
          tooltip: true,
          labels: false,
      });
  //кастомный select
  document.querySelector('.custom-sel-wrapper').addEventListener('click', function() {
    this.querySelector('.custom-sel').classList.toggle('open');
  });
  for (const option of document.querySelectorAll(".custom-option")) {
    option.addEventListener('click', function() {
      if (!this.classList.contains('selected')) {
        this.classList.add('selected');
        this.closest('.custom-sel').querySelector('.custom-sel__trigger span').textContent = this.textContent;
        location = this.dataset.value
      }
    })
  };
  window.addEventListener('click', function(e) {
    const select = document.querySelector('.custom-sel')
    if (!select.contains(e.target)) {
      select.classList.remove('open');
    }
  });
});
