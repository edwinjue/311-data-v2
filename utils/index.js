import _debounce from 'lodash.debounce';
import settings from '@settings';
import requestTypes from '@data/requestTypes'

export default {};

function removeSpaces(str) {
  if(!!str === false || 
      typeof typeName !== 'string'
    ){
      return null
  }

  let newStr = str.replace(/\s/g, '')
}

export function getTypeIdFromTypeName(typeName = "") {
  // early return null if we have invalid criteria 
  if(!!typeName === false || 
      typeof typeName !== 'string' || 
      !!requestTypes || 
      requestTypes.length === 0
    ){
      return null
  }

  // requestTypes is an array of objects imported from @data/requestTypes
  // see if any of our known types are a substring of the input string
  // (because Socrata API can return something this: "Illegal Dumping Pickup"
  // which should match "Illegal Dumping")
  // we remove all spaces from the string to prevent any blanks from throwing
  // off a match 
  let lookupStr, searchStr;
  const requestObject = requestTypes.find( request => {
      searchStr = removeSpaces(request.typeName.toLowerCase().trim())
      lookupStr = removeSpaces(typeName.toLowerCase().trim())
      return lookupStr.indexof(searchStr) >= 0
    }
  )

  // return the typeId of the request with matching typeName or undefined if not found
  return requestObject?.typeId

}


/*
  Given an object of counts, e.g. --
  {
    "Bulky Items": 50,
    "Graffiti Removal": 126,
    "Dead Animal Removal" 1
  }
  -- groups all keys with less than a given percentage in an "Other"
  category. Used in pie charts to prevent labels from overlapping.
*/
export function transformCounts(counts = {}) {
  // add to "Other" if a count has less than this percentage of total
  const MIN_PERCENTAGE = 1.0;

  const altCounts = {
    Other: 0,
  };

  const total = Object.values(counts).reduce((p, c) => p + c, 0);

  Object.keys(counts).forEach(key => {
    if (counts[key] / total >= MIN_PERCENTAGE / 100) {
      altCounts[key] = counts[key];
    } else {
      altCounts.Other += counts[key];
    }
  });

  if (altCounts.Other === 0) delete altCounts.Other;

  return altCounts;
}

// lodash debounce wrapper called with our settings values
export const debounce = func => _debounce(
  func,
  settings.map.debounce.duration,
  settings.map.debounce.options,
);

// utility to dispatch click event to toggle Bondaries SelectorBox
export const toggleBoundaries = () => {
  if (!!document === false) {
    return;
  }

  const button = document.getElementById('boundaries');
  const event = new Event('click', { bubbles: true });
  button.dispatchEvent(event);
};
