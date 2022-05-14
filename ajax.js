class Ajax {
  constructor(token) {
    this.token = token;
  }

  getAjax(apivegpont, callback) {
    $.ajax({
      url: apivegpont,
      type: "GET",
      success: function (result) {
        callback(result);
      },
    });
  }

  postAjax(apivegpont, ujAdat) {
    $.ajax({
      headers: { "X-CSRF-TOKEN": this.token },
      url: apivegpont,
      type: "POST",
      data: ujAdat,
    });
  }

  deleteAjax(apivegpont, id) {
    $.ajax({
      headers: { "X-CSRF-TOKEN": this.token },
      url: apivegpont + "/" + id,
      data: this.token,
      type: "DELETE",
      success: function (result) {
        console.log(result);
      },
    });
  }

  putAjax(apivegpont, id, ujAdat) {
    ujAdat._token = this.token;
    $.ajax({
      headers: { "X-CSRF-TOKEN": this.token },
      url: apivegpont + "/" + id,
      type: "PUT",
      data: ujAdat,
      success: function (result) {
        console.log(result);
      },
    });
  }
}
