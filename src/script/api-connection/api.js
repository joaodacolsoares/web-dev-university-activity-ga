async function get({ endpoint }) {
  let data = await fetch(`http://localhost:3000/${endpoint}`);
  data = await data.json();

  return data;
}

async function post({ endpoint, body }) {
  console.log(body)
  await fetch(`http://localhost:3000/${endpoint}`, {
    method: 'POST',
    body: JSON.stringify(body),
    headers: {"Content-type": "application/json; charset=UTF-8"}
  });

  return 'OK';
}

async function getAllMovies() {
  return await get({ endpoint: 'movies' })
}

async function getMovie({ id }) {
  return await get({ endpoint: `movies/${id}` })
}

async function postMovieReview({ id, comment, review }) {
  return await post({
    endpoint: 'reviews',
    body: {
      review: {
        movie_id: id,
        comment: comment,
        review: review
      }
    }
  })
}

async function postMovie({ name, type, category, producer, director, cast, year }) {
  return await post({
    endpoint: 'movies',
    body: {
      movie: {
        name,
        type,
        category,
        producer,
        director,
        cast,
        year
      }
    }
  })
}