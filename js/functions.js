const normString = function(stringt, num){
  if (stringt.length <= num){
    return true;

  }else{
    return false;
  }

};

normString('fffаа', 5);


function Palindrome(str) {
  const cleanStr = str.toLowerCase();
  for (let i = 0; i < cleanStr.length / 2; i++) {
    if (cleanStr[i] !== cleanStr[cleanStr.length - 1 - i]) {
      return false;
    }
  }
  return true;
}
Palindrome('Топот');

/**
 * Проверяет, укладывается ли встреча в рабочий день.
 *
 * @param {string} startWork - Начало рабочего дня (например, '8:00' или '08:00')
 * @param {string} endWork - Конец рабочего дня
 * @param {string} startMeeting - Начало встречи
 * @param {number} duration - Продолжительность встречи в минутах
 * @returns {boolean} - true, если встреча помещается, иначе false
 */
const isMeetingWithinWorkday = (startWork, endWork, startMeeting, duration) => {
  // Вспомогательная функция для перевода строки "Ч:ММ" в количество минут от начала суток
  const timeToMinutes = (timeString) => {
    const [hours, minutes] = timeString.split(':');
    return Number(hours) * 60 + Number(minutes);
  };

  const workStart = timeToMinutes(startWork);
  const workEnd = timeToMinutes(endWork);
  const meetingStart = timeToMinutes(startMeeting);

  // Вычисляем время окончания встречи
  const meetingEnd = meetingStart + duration;

  // Встреча должна начаться не раньше начала рабочего дня
  // и закончиться не позже его окончания
  return meetingStart >= workStart && meetingEnd <= workEnd;
};

// Экспортируем функцию в глобальную область видимости (для подключения без модулей)
window.isMeetingWithinWorkday = isMeetingWithinWorkday;
