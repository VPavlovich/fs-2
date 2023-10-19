// Получаем элементы формы входа
const loginForm = document.getElementById("login-form");
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const loginButton = document.getElementById("login-button");

// Добавляем обработчик события при отправке формы
loginForm.addEventListener("submit", function(event) {
    
   // Отменяем действие по умолчанию (перезагрузку страницы)
   event.preventDefault();

   // Получаем значения из полей ввода
   const username = usernameInput.value.trim();
   const password = passwordInput.value.trim();

   // Проверяем, что поля не пустые
   if (username && password) {

       // Создаем объект XMLHttpRequest для отправки запроса на сервер
       const xhr = new XMLHttpRequest();

       // Открываем соединение с сервером по методу POST и указываем адрес
       xhr.open("POST", "/login");

       // Устанавливаем заголовок Content-Type для передачи данных в формате JSON
       xhr.setRequestHeader("Content-Type", "application/json");

       // Добавляем обработчик события при получении ответа от сервера
       xhr.addEventListener("load", function() {

           // Проверяем, что статус ответа равен 200 (успешно)
           if (xhr.status === 200) {

               // Парсим ответ от сервера в формате JSON
               const response = JSON.parse(xhr.responseText);

               // Проверяем, что свойство success равно true
               if (response.success) {

                   // Выводим сообщение об успешном входе
                   alert("Вы успешно вошли в систему!");

                   // Перенаправляем пользователя на страницу счетов
                   window.location.href = "/accounts";

               } else {

                   // Выводим сообщение об ошибке
                   alert(response.message);

               }

           } else {

               // Выводим сообщение об ошибке
               alert("Произошла ошибка при обработке запроса");

           }

       });

       // Добавляем обработчик события при возникновении ошибки при отправке запроса
       xhr.addEventListener("error", function() {

           // Выводим сообщение об ошибке
           alert("Произошла ошибка при отправке запроса");

       });

       // Отправляем запрос на сервер с данными в формате JSON
       xhr.send(JSON.stringify({username: username, password: password}));

   } else {

       // Выводим сообщение о невалидных данных
       alert("Пожалуйста, заполните все поля");

   }

});

