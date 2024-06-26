export class AudiobookModel {
  calculatePercentage(totalHours, totalMinutes, hoursListened, minutesListened, listeningSpeed) {
    const totalTime = parseInt(totalHours) * 60 + parseInt(totalMinutes);
    const listenedTime = (parseInt(hoursListened) * 60 + parseInt(minutesListened));
    const percentage = (listenedTime / totalTime) * 100;
    const timeLeft = (totalTime - listenedTime) / listeningSpeed;
    return {
      percentage: percentage.toFixed(2),
      timeLeft: timeLeft.toFixed(2),
    };
  }
}
