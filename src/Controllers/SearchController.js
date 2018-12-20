const mfeed = require('medium-json-feed');

const { cardOne } = require('../Templates/Posts');

exports.formHandleSearch = (formid, resultid) => {
  $(`#${formid}`).submit(function handle(e) {
    e.preventDefault();

    const user = this.user.value;
    $(`#${resultid}`).empty();
    mfeed(user)
      .then(data => {
        $(`#${resultid}`).append(cardOne(data));
      })
      .catch(data => {
        let msgError;
        if (data.status === 404) {
          msgError = 'Não foi encontrado nada.';
        } else if (data.status === 500) {
          msgError = 'Não foi encontrado nenhum post.';
        } else {
          msgError = 'Algo errado na busca';
        }
        $(`#${resultid}`).append(`
          <div class="alert alert-danger">${msgError}</div>
        `);
      });
  });
};