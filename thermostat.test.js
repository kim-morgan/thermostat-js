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
})