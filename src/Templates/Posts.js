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
                    }">
                    <div class="card-img-overlay">
                        <p class="badge badge-light" style="bottom:8px;position:absolute;left:30px;">${
                          post.virtuals.wordCount
                        } palavras</p>
                        <p class="badge badge-light" style="bottom:8px;position:absolute;right:30px;">${moment
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
