import { useState } from "react";
import TemperatureInput from "./TemperatureInput";

function toCelsius(fahrenheit) {
  return ((fahrenheit - 32) * 5) / 9;
}

function toFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}

export default function Calculator() {
  const [temperature, setTemperature] = useState(" ");
  const [scale, setScale] = useState(" ");

  const handleChange = (e, currentScale) => {
    const inputValue = e.target.value;
    setTemperature(inputValue);
    setScale(currentScale);
  };

  const celsius = scale === "Fahrenheit" ? toCelsius(temperature) : temperature;
  const fahrenheit =
    scale === "Celsius" ? toFahrenheit(temperature) : temperature;

  return (
    <div>
      <TemperatureInput
        temperature={celsius}
        onTemperatureChange={handleChange}
        scale="Celsius"
      />
      <TemperatureInput
        temperature={fahrenheit}
        onTemperatureChange={handleChange}
        scale="Fahrenheit"
      />
    </div>
  );
}
