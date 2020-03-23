class AnalogClock {
  constructor(date) {
    this.setAnalogTime(date);
  }

  refresh() {
    this.setAnalogTime(new Date);
  }

  setAnalogTime(date) {
    this.hour = date.getHours() % 12;
    this.minute = date.getMinutes();
    this.second = date.getSeconds();
  }

  degHour(){
    return parseFloat((this.hour / 12) * 360);
  }
  degMinute(){
    return parseFloat((this.minute / 60) * 360);
  }
  degSecond(){
    return parseFloat((this.second / 60) * 360);
  }
}

class Adjustor {
  static OFFSET_DEG() {return  90.0;}
  static adjust(clock, hourHand, minHand, secondHand) {
    hourHand.style.transform = `rotate(${clock.degHour() + this.OFFSET_DEG()}deg)`;
    minHand.style.transform = `rotate(${clock.degMinute() + this.OFFSET_DEG()}deg)`;
    secondHand.style.transform = `rotate(${clock.degSecond() + this.OFFSET_DEG()}deg)`;
  }
}

window.onload = () => {
  const hourHand = document.querySelector('.hour-hand');
  const minHand = document.querySelector('.min-hand');
  const secondHand = document.querySelector('.second-hand');

  const clock = new AnalogClock(new Date);
  Adjustor.adjust(clock, hourHand, minHand, secondHand);

  setInterval(() => {
    clock.refresh();
    Adjustor.adjust(clock, hourHand, minHand, secondHand);
  }, 1000);
};