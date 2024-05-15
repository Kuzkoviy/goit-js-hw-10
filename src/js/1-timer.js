// Описаний в документації
import flatpickr from "flatpickr";
// Додатковий імпорт стилів
import "flatpickr/dist/flatpickr.min.css";
// Описаний у документації
import iziToast from "izitoast";
// Додатковий імпорт стилів
import "izitoast/dist/css/iziToast.min.css";



const refs = {
        calendar: document.querySelector('#datetime-picker'),
        start: document.querySelector('button[data-start]'),
        days: document.querySelector('span[data-days]'),
        hours: document.querySelector('span[data-hours]'),
        minutes: document.querySelector('span[data-minutes]'),
        seconds: document.querySelector('span[data-seconds]'),
};

const options = {
        enableTime: true,
        time_24hr: true,
        defaultDate: new Date(),
        minuteIncrement: 1,
        onClose(selectedDates) {
          console.log(selectedDates[0]);
          if(selectedDates[0].getTime() < Date.now() || selectedDates[0].getTime() === Date.now()) {
                iziToast.warning({
                        message: 'Please choose date in the future',
                        position: "topRight",
                        closeOnClick: 'true',
                        closeOnEscape: 'true',
                        backgroundColor: 'red',
                        titleSize: '20',
                        messageSize: '14'});
                refs.start.setAttribute('disabled', 1);
                return;
          } else {
                refs.start.setAttribute('disabled', 1);
                refs.calendar.setAttribute('disabled', 1);
          }
                refs.start.removeAttribute('disabled');
        },
      };

let timer = null;

flatpickr(refs.calendar, options);
refs.start.setAttribute('disabled', 1);

function addLeadingZero(value){
         return String(value).padStart(2, '0');
};

function convertMs(ms) {
        // Number of milliseconds per unit of time
        const second = 1000;
        const minute = second * 60;
        const hour = minute * 60;
        const day = hour * 24;
      
        // Remaining days
        const days = addLeadingZero(Math.floor(ms / day));
        // Remaining hours
        const hours = addLeadingZero(Math.floor((ms % day) / hour));
        // Remaining minutes
        const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
        // Remaining seconds
        const seconds = addLeadingZero(Math.floor((((ms % day) % hour) % minute) / second));
      
        return { days, hours, minutes, seconds };
      }


function onButtonClick() {
        timer = setInterval(() => {
                const difference = new Date(refs.calendar.value) - Date.now();
                if(difference < 1000) {
                        clearInterval(timer);
                        refs.start.setAttribute('disabled', 1);
                } 

                const data = convertMs(difference);
                updateTimer(data);
        }, 1000);
};

function updateTimer({ days, hours, minutes, seconds }) {
        refs.days.textContent = days;
        refs.hours.textContent = hours;
        refs.minutes.textContent = minutes;
        refs.seconds.textContent = seconds;
};


refs.start.addEventListener('click', onButtonClick);