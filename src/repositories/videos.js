import config from '../config';

const URL_VIDEOS = `${config.URL_BACKEND}/videos`;

function create(valuesOfVideos) {
  return fetch(`${URL_VIDEOS}?_embed=videos`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(valuesOfVideos),
  })
    .then(async (respostaDoServer) => {
      if (respostaDoServer.ok) {
        const resposta = await respostaDoServer.json();
        return resposta;
      }
      throw new Error('Não foi possivel pegar os dados');
    });
}
export default {
  create,
};
