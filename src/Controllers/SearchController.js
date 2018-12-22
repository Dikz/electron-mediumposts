const mfeed = require('medium-json-feed');

const { cardOne } = require('../Templates/Posts');

exports.formHandleSearch = (formid, resultid) => {
  $(`#${formid}`).submit(function handle(e) {
    e.preventDefault();
    $(`#${resultid}`).empty();
    $(`#${resultid}`).prepend('<div class="loader offset-md-5"></div>');
    const user = this.user.value;
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
          <div class="alert alert-danger offset-md-2 offset-sm-2">${msgError}</div>
        `);
      })
      .then(() => {
        $('.loader').remove();
      });
  });
};
