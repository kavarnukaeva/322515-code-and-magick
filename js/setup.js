'use strict';

var WIZARDS_QUANTITY = 4;

var userSetup = document.querySelector('.setup');
userSetup.classList.remove('hidden');

document.querySelector('.setup-similar').classList.remove('hidden');

var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

var names = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var surnames = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var coats = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var eyes = ['black', 'red', 'blue', 'yellow', 'green'];

var wizards = [];

for (var i = 0; i < WIZARDS_QUANTITY; i++) {
  var randomName = Math.floor(Math.random() * names.length);
  var randomSurname = Math.floor(Math.random() * surnames.length);

  wizards[i] = {
    name: names[randomName] + ' ' + surnames[randomSurname],
    coatColor: coats[Math.floor(Math.random() * coats.length)],
    eyesColor: eyes[Math.floor(Math.random() * eyes.length)]
  };
}

var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
};

var fragment = document.createDocumentFragment();
for (var j = 0; j < WIZARDS_QUANTITY; j++) {
  fragment.appendChild(renderWizard(wizards[j]));
}
similarListElement.appendChild(fragment);

userSetup.querySelector('.setup-similar').classList.remove('hidden');
