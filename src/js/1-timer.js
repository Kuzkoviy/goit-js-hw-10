
import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const timePicker = document.querySelector('#datetime-picker');
const startBtn = document.querySelector('[data-start]');
const daysCounter = document.querySelector('.value[data-days]');
const hoursCounter = document.querySelector('.value[data-hours]');
const minutesCounter = document.querySelector('.value[data-minutes]');
const secondsCounter = document.querySelector('.value[data-seconds]');

let selectedTime;

const options = {
        enableTime: true,
        time_24hr: true,
        defaultDate: new Date(),
        minuteIncrement: 1,
        onClose(selectedDates) {
          console.log(selectedDates[0]);
          
          const dateNow = selectedDates[0].defaultDate.getTime();
          const futureDate = selectedDates[0].getTime();

          if(futureDate < dateNow) {
                iziToast.warning({
                        title: 'Error',
                        message: 'Please choose a date in the future',
                });
                startBtn.disabled = true;
          }     else {
                startBtn.disabled = false;
                selectedTime.selectedDates[0].getTime();
          }
        },
      };

flatpickr('#datetime-picker', options);



function addLeadingZero(value) {
        return String(value).padStart(2, '0');
}


function convertMs(ms) {
        // Number of milliseconds per unit of time
        const second = 1000;
        const minute = second * 60;
        const hour = minute * 60;
        const day = hour * 24;
      
        // Remaining days
        const days = Math.floor(ms / day);
        // Remaining hours
        const hours = Math.floor((ms % day) / hour);
        // Remaining minutes
        const minutes = Math.floor(((ms % day) % hour) / minute);
        // Remaining seconds
        const seconds = Math.floor((((ms % day) % hour) % minute) / second);
      
        return { days, hours, minutes, seconds };
      }
      

      

function startTimer(difference) {
        timePicker.disabled = true;
        startBtn.disabled = true;
        const interval = setInterval(() => {
                const { days, hours, minutes, seconds } = convertMs(difference);
                daysCounter.textContent = addLeadingZero(days);
                hoursCounter.textContent = addLeadingZero(hours);
                minutesCounter.textContent = addLeadingZero(minutes);
                secondsCounter.textContent = addLeadingZero(seconds);

                difference -= 1000;
                if(difference <= 0) {
                        clearInterval(interval);
                        timePicker.disabled = false;
                        startBtn.disabled = false;
                }
        }, 1000)
}


startBtn.addEventListener('click', () => {
        const currentdate = new Date();

        const difference = selectedTime - currentdate;
        startTimer(difference);
});



        





