const Thermostat = require('./thermostat')

const thermostat = new Thermostat();

describe("thermostat", () => {
  it("should be initialized with a temperature of 20", () => {
    expect(thermostat.getTemperature()).toBe(20);
  })
  it("should be able to increase the temperature", () => {
    thermostat.up();
    thermostat.up();
    expect(thermostat.getTemperature()).toBe(22);
  })
  it("should be able to decrease the temperature", () => {
    thermostat.down();
    expect(thermostat.getTemperature()).toBe(21);
  })
  it("should have a default max temperature of 25", () => {
    for (let i = 0 ; i < 10 ; i++) {
      thermostat.up();
    }
    expect(thermostat.getTemperature()).toBe(25);
  })
  it("can go up to 32 if power saving mode is off", () => {
    thermostat.setPowerSavingMode(false);
    for (let i = 0 ; i < 20 ; i++) {
      thermostat.up();
    }
    expect(thermostat.getTemperature()).toBe(32);
  })
  it("can reset the temperature to 20", () => {
    thermostat.reset();
    expect(thermostat.getTemperature()).toBe(20);
  })
  it("can check the current usage (medium)", () => {
    expect(thermostat.checkEnergyUsage()).toBe("Medium");
  })
  it("can check the current usage (high)", () => {
    for (let i = 0 ; i < 20 ; i++) {
      thermostat.up();
    }
    expect(thermostat.checkEnergyUsage()).toBe("High");
  })
  it("can check the current usage (low)", () => {
    thermostat.reset();
    thermostat.down();
    thermostat.down();
    expect(thermostat.checkEnergyUsage()).toBe("Low");
  })

  it('should have a minimum temp of 10', () => {
    for (let i = 0 ; i < 20 ; i++) {
      thermostat.down();
    }
    expect(thermostat.getTemperature()).toBe(10);
  })
})