class Thermostat {

  constructor() {
    this.temperature = 20;
    this.maxTemperature = 25;
    this.minimumTemperature = 10;
  }

  getTemperature() {
    return this.temperature;
  }

  up () {
    if (this.temperature < this.maxTemperature) {
      this.temperature++;
    }
  }

  down () {
    if (this.temperature > this.minimumTemperature) {
      this.temperature--;
    }
  }

  setPowerSavingMode(onOrOff) {
    if (onOrOff) {
      this.maxTemperature = 25;
    } else if (onOrOff === false) {
      this.maxTemperature = 32;
    }
  }

  reset() {
    this.temperature = 20;
  }

  checkEnergyUsage() {
    if (this.temperature <= 18) {
      return "Low";
    } else if (this.temperature <=25) {
      return "Medium";
    } else {
      return "High";
    }
  }

}

module.exports = Thermostat