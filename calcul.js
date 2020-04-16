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
  // $(function(){
  //   let cdbForThcRanges = {
  //     '0': [3, 4],
  //     '1': [2, 3],
  //     '2': [1, 2],
  //     '3': [0, 1],
  //     '4': [0, 0]
  //   };
  //   let thcSlider = new rSlider({
  //         target: '#thcSlider',
  //         values: {min: 0, max: 4},
  //         step: 1,
  //         range: true,
  //         set: [0, 1],
  //         scale: true,
  //         tooltip: true,
  //         labels: false,
  //         onChange: function (vals) {
  //           let thcVal = vals.split(',');
  //           let cbd = cbdSlider.getValue().split(',');
  //           let minValcbd = Math.min(cdbForThcRanges[thcVal[0]][0], cdbForThcRanges[thcVal[1]][0]);
  //           let maxValcbd = Math.max(cdbForThcRanges[thcVal[0]][1], cdbForThcRanges[thcVal[1]][1]);
  //           minValcbd = minValcbd < cbd[0] && cbd[0]< maxValcbd ? cbd[0] : minValcbd;
  //           maxValcbd = minValcbd < cbd[1] && cbd[1]< maxValcbd ? cbd[1] : maxValcbd;
  //           cbdSlider.setValues(minValcbd,maxValcbd);
  //         }
  //     });
  //     let cbdSlider = new rSlider({
  //           target: '#cbdSlider',
  //           values: {min: 0, max: 4},
  //           step: 1,
  //           range: true,
  //           set: [0, 1],
  //           scale: true,
  //           tooltip: true,
  //           labels: false
  //       });
  //
  //   });
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
