var elCalculateForm = document.querySelector('.calculate-form');


elCalculateForm.addEventListener('submit', function (evt) {
  evt.preventDefault();

  var elMessage = document.querySelector('.message');
  elMessage.classList.remove('d-none');

  var money = parseFloat(elCalculateForm.querySelector('.money-input').value.trim(), 10);

  var currency = parseFloat(elCalculateForm.querySelector('.currency-input').value.trim(), 10);

  var valueUzs = money * currency;

  elMessage.textContent = `${valueUzs} UZS`;
});

