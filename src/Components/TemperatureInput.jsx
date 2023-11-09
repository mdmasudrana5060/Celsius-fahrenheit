/* eslint-disable react/prop-types */
export default function TemperatureInput({
  temperature,
  onTemperatureChange,
  scale,
}) {
  return (
    <div>
      <fieldset>
        {/* <legend>Enter temperature in {scaleNames[scale]}:</legend> */}
        <legend>Enter temperature in {scale} :</legend>
        <input
          type="text"
          value={temperature}
          onChange={(e) => onTemperatureChange(e, scale)}
        />
      </fieldset>
    </div>
  );
}
