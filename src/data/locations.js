// Country -> region list used by the Get a Free Quote form.
// Edit labels here if you want to rename fields per country.

export const countries = ['United States', 'Canada', 'Australia']

export const countryFieldLabels = {
  'United States': { region: 'State', postal: 'ZIP Code' },
  'Canada': { region: 'Province/Territory', postal: 'Postal Code' },
  'Australia': { region: 'State/Territory', postal: 'Postcode' },
}

export const usStates = [
  'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut',
  'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa',
  'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan',
  'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada',
  'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina',
  'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island',
  'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont',
  'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming',
]

export const caProvinces = [
  'Alberta', 'British Columbia', 'Manitoba', 'New Brunswick',
  'Newfoundland and Labrador', 'Northwest Territories', 'Nova Scotia', 'Nunavut',
  'Ontario', 'Prince Edward Island', 'Quebec', 'Saskatchewan', 'Yukon',
]

export const auStates = [
  'Australian Capital Territory', 'New South Wales', 'Northern Territory',
  'Queensland', 'South Australia', 'Tasmania', 'Victoria', 'Western Australia',
]

export function getRegionsForCountry(country) {
  if (country === 'United States') return usStates
  if (country === 'Canada') return caProvinces
  if (country === 'Australia') return auStates
  return []
}


export function getPostalRule(country) {
  if (country === 'United States') return { pattern: /^\d{5}(-\d{4})?$/, hint: 'Use a 5-digit ZIP Code or ZIP+4 (e.g. 78701 or 78701-1234).' }
  if (country === 'Canada') return { pattern: /^[A-Za-z]\d[A-Za-z][ -]?\d[A-Za-z]\d$/, hint: 'Use a Canadian postal code (e.g. M5V 3A8).' }
  if (country === 'Australia') return { pattern: /^\d{4}$/, hint: 'Use a 4-digit postcode (e.g. 4000).' }
  return { pattern: /.+/, hint: 'Enter a valid postal code.' }
}

export function validatePostalCode(country, postal) {
  const { pattern, hint } = getPostalRule(country)
  return pattern.test(postal.trim()) ? '' : hint
}
