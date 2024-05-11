
import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const timePicker = document.querySelector('#datatime-picker');
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
      flatpickr('#datatime-picker', options);

        





