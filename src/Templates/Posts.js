const moment = require('moment');

moment.locale('pt-BR');

exports.cardOne = data =>
  data.response.map(
    post =>
      `
        <div class="col-sm-12 col-md-12 mb-2 p-2 bg-light">
            <div class="row">
                <div class="col-6">
                    <img class="card-img" src="https://cdn-images-1.medium.com/max/800/${
                      post.virtuals.previewImage.imageId
                    }" style="max-height: 240px;opacity: 0.4;">
                    <div class="card-img-overlay">
                        <p class="badge badge-light" style="bottom:8px;position:absolute;left:30px;">${
                          post.virtuals.wordCount
                        } palavras</p>
                        <p class="badge badge-light" style="bottom:8px;position:absolute;right:30px;">${moment
                          .duration({ minutes: post.virtuals.readingTime })
                          .humanize()} de leitura</p>
                    </div>
                </div>
                <div class="col-6">
                    <h4>${post.title}</h4>
                    <hr>
                    <p>${post.virtuals.subtitle}</p>
                </div>
            </div>
        </div>
    `
  );
