## Краткие сведения о events javascript

Событие – это сигнал от браузера о том, что что-то произошло. Все DOM-узлы подают такие сигналы (хотя события бывают и
не только в DOM).

Более подробную информацию про события можно почитать
на (__[Ресурсе](https://learn.javascript.ru/introduction-browser-events)__)  
Информацию про доступ к элементам дома через JS можно почитать
на (__[Ресурсе](https://learn.javascript.ru/introduction-browser-events)__)

### Список часто используемых событий

#### События мыши

- **click** – происходит, когда кликнули на элемент левой кнопкой мыши (на устройствах с сенсорными экранами оно
  происходит
  при касании).
- **contextmenu** – происходит, когда кликнули на элемент правой кнопкой мыши.
- **mouseover** / **mouseout** – когда мышь наводится на / покидает элемент.
- **mousedown** / **mouseup** – когда нажали / отжали кнопку мыши на элементе.
- **mousemove** – при движении мыши

#### События на элементах управления

- **submit** – пользователь отправил форму `<form>`.
- **focus** – пользователь фокусируется на элементе, например нажимает на `<input>`

#### Клавиатурные события:

- **keydown** и **keyup** – когда пользователь нажимает / отпускает клавишу.

#### События документа:

- **DOMContentLoaded** – когда HTML загружен и обработан, DOM документа полностью построен и доступен

#### Использование атрибута HTML

Обработчик может быть назначен прямо в разметке, в атрибуте, который называется **on<событие>**.  
Например, чтобы назначить обработчик события click на элементе input, можно использовать атрибут onclick, вот так:

```html
<input value="Нажми меня" onclick="alert('Клик!')" type="button">
```

При клике мышкой на кнопке выполнится код, указанный в атрибуте **onclick**.  
Обратите внимание, для содержимого атрибута onclick используются одинарные кавычки, так как сам атрибут находится в
двойных. Если мы забудем об этом и поставим двойные кавычки внутри атрибута, вот так: `onclick="alert("Click!")"`, код
не
будет работать.  
Атрибут HTML-тега – не самое удобное место для написания большого количества кода, поэтому лучше создать отдельную
JavaScript-функцию и вызвать её там.
Следующий пример по клику запускает функцию `countRabbits()`:

```html

<script>
    function countRabbits() {
        for (let i = 1; i <= 3; i++) {
            alert("Кролик номер " + i);
        }
    }
</script>

<input type="button" onclick="countRabbits()" value="Считать кроликов!">
```

#### Использование свойства DOM-объекта

Можно назначать обработчик, используя свойство DOM-элемента on<событие>.  
К примеру, elem.onclick:

```html
<input id="elem" type="button" value="Нажми меня!">
<script>
    elem.onclick = function () {
        alert('Спасибо');
    };
</script>
```

#### Метод addEventListener

Мы хотим назначить два обработчика для одного элемента. Но новое DOM-свойство перезапишет предыдущее:

```js
input.onclick = () => {
    alert(1);
}

input.onclick = () => {
    alert(2);
} // заменит предыдущий обработчик
```

Синтаксис добавления обработчика:

- **event** - Имя события, например **click**.
- **handler** - Ссылка на функцию-обработчик.
- **options** - Дополнительный объект со свойствами:

```js
element.addEventListener(event, handler, [options]);
```