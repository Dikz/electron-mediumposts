const moment = require('moment');

moment.locale('pt-BR');

exports.cardOne = data =>
  data.response.map(
    post =>
      `
        <div class="post col-sm-10 col-md-10 offset-sm-1 offset-sm-1 mb-2 p-2 bg-light">
            <div class="row">
                <div class="col-sm-6 col-md-6">
                    <img class="card-img post-img" src="https://cdn-images-1.medium.com/max/800/${
                      post.virtuals.previewImage.imageId
                        ? post.virtuals.previewImage.imageId
                        : '1*JF156_wKDpEAJ4j8bH-M1w.png'
                    }">
                    <div class="card-img-overlay">
                        <p class="btn btn-dark text-light" style="position:absolute;left:6%;bottom:12%;">👏 ${
                          post.virtuals.totalClapCount
                        } Claps</p>
                        <p class="badge badge-dark" style="position:absolute;left:6%;bottom:2%;"> ${moment(
                          post.firstPublishedAt
                        ).format('L')}</p>
                        <p class="badge badge-light" style="position:absolute;right:10%;bottom:22%;">${
                          post.virtuals.wordCount
                        } palavras</p>
                        <p class="badge badge-light" style="position:absolute;right:10%;bottom:12%;">${moment
                          .duration({ minutes: post.virtuals.readingTime })
                          .humanize()} de leitura</p>
                    </div>
                </div>
                <div class="col-sm-6 col-md-6">
                    <h4>${post.title}</h4>
                    <hr>
                    <p>${post.virtuals.subtitle}</p>
                </div>
            </div>
        </div>
    `
  );
