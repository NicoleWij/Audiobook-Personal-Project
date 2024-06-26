import { AudiobookModel } from '../models/AudiobookModel';

export class AudiobookPresenter {
  constructor(view) {
    this.view = view;
    this.model = new AudiobookModel();
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
    const result = this.model.calculatePercentage(totalHours, totalMinutes, hoursListened, minutesListened, listeningSpeed);
    this.view.displayResult(result);
  }
}
