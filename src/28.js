function calculateBMI(heightIn meters, weightIn kilograms) {
  const bmi = weightIn kilograms / (heightIn meters * heightIn meters);
  if (bmi > 0) {
    return `Your BMI is ${bmi.toFixed(2)}. This is considered to be within the healthy range.`;
  } else {
    return "Invalid input values.";
  }
}

function calculateHeartRate(bpm) {
  const targetHR = bpm * 56 / 180;
  if (targetHR > 70) {
    return `Your heart rate should not exceed ${targetHR} bpm. This is considered to be healthy.`);
  } else {
    return "Target HR: ${targetHR} bpm.";
  }
}
