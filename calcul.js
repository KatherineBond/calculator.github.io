$(document).ready(function() {

  // модальные окна
  $('.btn_modal').click(function() {
    let id = $(this).attr('data-target');
    $('.modalblock[data-id="' + id + '"]').addClass('show');
  });
  $('.close').click(function() {
    $(this).parents('.modalblock').removeClass('show')
  });
  // скрол к товарам после обработки запроса и анимация блоков товаров
    // $("html, body").animate({scrollTop: $(".products").height()},"slow");
    // $('.products_block .item').addClass('bounceInDown');
    // return false;

  // раскрытие сеотекста на моб.версии
  $('.show_all').on("click", function(e) {
    e.preventDefault();
    $(this).siblings('.toggle_xs').toggleClass('show');
  });

  // кнопка доп информации
  $('.btn_info').popover({
    trigger: 'focus'
  });

  // слайдеры тгк и кбд
  $('input[type=range]').wrap("<div class='range'></div>");
  let i = 1;
  $('.range').each(function() {
    let n = this.getElementsByTagName('input')[0].value;
    let x = (n / 100) * (this.getElementsByTagName('input')[0].offsetWidth);
    this.id = 'range' + i;
    if (this.getElementsByTagName('input')[0].value == 0) {
      this.className = "range"
    } else {
      this.className = "range rangeM"
    }
    this.innerHTML += "<style>#" + this.id + " input[type=range]::-webkit-slider-runnable-track {background:linear-gradient(to right, #65bd00 0%, #65bd00 " + n + "%, #202429 " + n + "%)}</style>";
    i++;
  });
  $('input[type=range]').on("input", function() {
    let a = this.value;
    let c = (100 / this.max) * a;
    let p = (a / 100) * (this.offsetWidth);
    if (a == 0) {
      this.parentNode.className = "range"
    } else {
      this.parentNode.className = "range rangeM"
    }
    this.parentNode.getElementsByTagName('style')[0].innerHTML += "#" + this.parentNode.id + " input[type=range]::-webkit-slider-runnable-track {background:linear-gradient(to right, #65bd00 0%, #65bd00 " + c + "%, #202429 " + c + "%)}";
  });
  $('.range').each(function(){
    let end = this.getElementsByTagName('input')[0].max,
    sib = $(this).siblings('.points');
    sib.append('<span>0%</span>');
    sib.append('<span>' + end / 2 + '%</span>');
    sib.append('<span>' + end + '%</span>');
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
