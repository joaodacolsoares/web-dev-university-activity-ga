function addMovie() {
  const fields = ['name', 'type', 'category', 'producer', 'director', 'cast', 'year'];
  
  if(_checkInputError(fields)) 
    throw new Error('Alguns valores não foram preenchidos ou são inválidos')

  postMovie(_mapValuesToRequest(fields));
}

function onInputChange(event) {
  const input = event.target

  if(input.value) {
    input.classList.remove('error')
  }
}

const _checkInputError = (fields) => {
  let hasErrors = false;

  fields.forEach(field => {
    const input = document.getElementById(`input-movie-${field}`);

    if(!input.value) {
      input.classList.add('error')
      hasErrors = true;
    }
  });

  return hasErrors;
}

const _mapValuesToRequest = (fields) => {
  return fields.reduce((previousValue, currentValue) => {
    const input = document.getElementById(`input-movie-${currentValue}`);
    previousValue[currentValue] = input.value
    return previousValue
  }, {})
}