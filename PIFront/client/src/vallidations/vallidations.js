import { validCountries } from "./contries";

// Valida que el campo "tour" no esté vacío
export const validateTour = (tour) => {
  return tour.trim() !== "";
};

// Valida que el campo "duration" sea un número entero positivo
export const validateDuration = (duration) => {
  return /^[1-9][0-9]*$/.test(duration);
};

// Valida que cada campo de país no esté vacío y sea un país válido
export const validateCountries = (countries) => {
  return countries.every((country) => {
    const trimmedCountry = country.trim();
    return trimmedCountry !== "" && validCountries.includes(trimmedCountry);
  });
};