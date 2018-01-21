var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']

function addElementToBeginningOfArray(array,element) {
  return rray = [element, ...array]
}

function destructivelyAddElementToBeginningOfArray(array,element) {
  array.unshift(element)
}

function addElementToEndOfArray (array, element) {
  array = [...array, element]
}