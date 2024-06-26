import { AudiobookModel } from '../models/AudiobookModel';

export class AudiobookPresenter {
  constructor(view) {
    this.view = view;
    this.model = new AudiobookModel();
  }

  calculatePercentage(totalHours, totalMinutes, hoursListened, minutesListened, listeningSpeed) {
    const result = this.model.calculatePercentage(totalHours, totalMinutes, hoursListened, minutesListened, listeningSpeed);
    this.view.displayResult(result);
  }
}
