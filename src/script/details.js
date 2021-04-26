const queryString = window.location.search; 
const urlParams = new URLSearchParams(queryString); 

const fields = ['reviewAverage', 'type', 'category', 'year', 'producer', 'director', 'cast'];
const movieId = urlParams.get('movie');


getMovie({ id: movieId }).then(({ movie }) => {
  fields.forEach((field) => {
    document.getElementById(`${field}-text-container`).innerHTML = movie[field];    
  })
})

function reviewMovie(event) {
  const reviewInput = document.getElementById('review-input');
  const reviewValue = Number(reviewInput.value)

  if(!reviewValue) {
    const errorMessage = 'Avaliação não é um número válido';
    alert(errorMessage)
    throw new Error(errorMessage)
  }

  if(reviewValue < 0 || reviewValue > 5) {
    const errorMessage = 'Avaliação não está em um intervalo de 0-5';
    alert(errorMessage)
    throw new Error(errorMessage)
  }

  try {
    postMovieReview({
      id: movieId,
      comment: 'Filme muito bom',
      review: reviewValue
    })

    event.target.disabled = true;
    reviewInput.disabled = true;
    reviewInput.readOnly = true;
    reviewInput.classList.add('disable')
  } catch {
    throw new Error('Avaliação não foi bem sucedida')
  }

    
}

