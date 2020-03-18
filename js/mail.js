let send;

$(document).ready(function () {

  // E-mail Ajax Send
  // http://api.jquery.com/jquery.ajax/
  $(".form-feedback").submit(function () { // Изменить класс
    // https://jquery-docs.ru/submit/ — Устанавливает обработчик отправки формы на сервер, либо запускает это событие
    send = true;

    // Проверяем текстовые поля
    $('input.field-required[type=text], input.field-required[type=tel], input.field-required[type=email]').each(function () {
      // https://jquery-docs.ru/each/ — Выполняет функцию для каждого элемента
      setError($(this), $(this).val());
    });

    // Проверяем чтобы селект был выбран
    $('select.field-required').each(function () {
      setError($(this), $(this).find('option:selected').val()); // https://jquery-docs.ru/find/
    })

    // Проверяем радиокнопки
    if (!$('input.field-radio-required').is(':checked')) {
      // если ничего не выбрано, ищем внутри `.help-text` и подсвечиваем красным
      $('.listoptcolor').find('.help-text').addClass('active');
      send = false;
    }
    else {
      $('.listoptcolor').find('.help-text').removeClass('active');
    }

    // Проверяем чекбоксы
    if ($('input.field-required[type=checkbox]').prop('checked')) { // https://jquery-docs.ru/prop/
      setError($('input.field-required[type=checkbox]'), '1');
    }
    else {
      setError($('input.field-required[type=checkbox]'), '');
    }

    if (send) {
      let th = $(this);
      $.ajax({
        type: "POST",
        url: "./email/mail.php", // Изменить путь до php обработчика
        data: th.serialize()
        // https://jquery-docs.ru/serialize/ — Возвращает строку, с именами и значениями выбранных элементов формы. Эта строка будет иметь формат параметров url-запроса.
      }).done(function () {
        alert('Thank you!');
        // console.log('Thank you!');
        // $('#modal-contact').addClass('modal-show');

        setTimeout(function () {
          // Done Functions
          th.trigger("reset");
        }, 1000);
      });
    }
    return false;
  });

});

// Функция добавления класса при валидации
function setError(el, val) {
  if (val == '') {
    send = false;
    el.parents('.inp_wrap').addClass('field-error');
     // https://jquery-docs.ru/parents/ — Осуществляет поиск всех предков выбранных элементов, то есть, не только прямых родителей, но и прародителей, прапрародителей и так далее, до начало дерева DOM.
    el.next('.help-text').addClass('active');
    // https://jquery-docs.ru/next/ — Осуществляет поиск элементов, лежащих непосредственно после заданных элементов (по одному для каждого из заданных).
  }
  else {
    el.parents('.inp_wrap').removeClass('field-error');
    el.next('.help-text').removeClass('active');
  }
}

/*
* Одни из способов валидации
* https://html.form.guide/jquery/validation-using-jquery-examples.html
*
* Валидация через плагин
* https://code.tutsplus.com/tutorials/easy-form-validation-with-jquery--cms-33096
* http://www.formvalidator.net/
*/
