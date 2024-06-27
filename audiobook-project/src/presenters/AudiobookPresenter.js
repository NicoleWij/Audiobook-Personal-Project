import { AudiobookModel } from '../models/AudiobookModel';

export class AudiobookPresenter {
  constructor(view) {
    this.view = view;
    this.model = new AudiobookModel();
  }

  validateInputs(totalHours, totalMinutes, hoursListened, minutesListened) {
    const totalTotalMinutes = Number(totalHours) * 60 + Number(totalMinutes);
    const listenedTotalMinutes = Number(hoursListened) * 60 + Number(minutesListened);

    console.log("Total total minutes:", totalTotalMinutes);
    console.log("Listened total minutes:", listenedTotalMinutes);

    if (totalTotalMinutes === 0) {
      return 'Total time must be greater than zero.';
    }

    if (listenedTotalMinutes > totalTotalMinutes) {
      return 'Listened time cannot exceed total time.';
    }

    return null;
  }

  handleTotalHoursChange(value) {
    this.view.setTotalHours(value);
    this.storeData('totalHours', value);
  }

  handleTotalMinutesChange(value) {
    this.view.setTotalMinutes(value);
    this.storeData('totalMinutes', value);
  }

  handleHoursListenedChange(value) {
    this.view.setHoursListened(value);
    this.storeData('hoursListened', value);
  }

  handleMinutesListenedChange(value) {
    this.view.setMinutesListened(value);
    this.storeData('minutesListened', value);
  }

  handleListeningSpeedChange(value) {
    this.view.setListeningSpeed(value);
    this.storeData('listeningSpeed', value);
  }

  storeData(key, value) {
    localStorage.setItem(key, value);
    sessionStorage.setItem(key, value);
  }

  retrieveData() {
    this.view.setTotalHours(localStorage.getItem('totalHours') || '');
    this.view.setTotalMinutes(localStorage.getItem('totalMinutes') || '');
    this.view.setHoursListened(localStorage.getItem('hoursListened') || '');
    this.view.setMinutesListened(localStorage.getItem('minutesListened') || '');
    this.view.setListeningSpeed(localStorage.getItem('listeningSpeed') || 1);
  }

  calculatePercentage(totalHours, totalMinutes, hoursListened, minutesListened, listeningSpeed) {
    const error = this.validateInputs(totalHours, totalMinutes, hoursListened, minutesListened);
    if (error) {
      this.view.displayError(error);
      return;
    }

    const result = this.model.calculatePercentage(totalHours, totalMinutes, hoursListened, minutesListened, listeningSpeed);
    this.view.displayResult(result);
  }
}
