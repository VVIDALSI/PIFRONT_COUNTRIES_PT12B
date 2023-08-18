import { validCountries } from "./contries";

// Valida que el campo "tour" no esté vacío
export const validateTour = (tour) => {
  tour = tour.trim();

  if (tour.length === 0) {
    return "Tour Name is required.";
  } else if (tour.length > 14) {
    return "Tour Name must be at most 14 characters long.";
  }

  if (/^\d+$/.test(tour)) {
    return "Tour Name cannot consist of only numbers.";
  }

  return true;
};

// Valida que el campo "duration" sea un número entero positivo
export const validateDuration = (duration, numberOfCountries) => {
  duration = duration.trim();

  if (!/^[1-9][0-9]*$/.test(duration)) {
    return "Duration must be a positive integer.";
  }

  const durationHours = parseInt(duration, 10);
  const maxDuration = numberOfCountries * 730;

  if (durationHours < 168) {
    return "Duration must be at least 168 hours (1 week).";
  } else if (durationHours > maxDuration) {
    return `Duration cannot exceed ${maxDuration} hours (${numberOfCountries} month).`;
  }
  return true;
};

// Valida que cada campo de país no esté vacío y sea un país válido
export const validateCountries = (countries) => {
  return countries.every((country) => {
    const trimmedCountry = country.trim();
    return trimmedCountry !== "" && validCountries.includes(trimmedCountry);
  });
};