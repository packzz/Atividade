$(document).ready(function () {
  // Handle form submission
  $("form").submit(function (event) {
    event.preventDefault(); // Prevent the form from submitting

    // Perform form validation here if needed

    // Display the modal
    $("#modalExemplo").modal("show");
  });

  // Handle the modal "Fechar" (Close) button click
  $(".modal .btn-secondary").click(function () {
    $("#modalExemplo").modal("hide");
  });
});

$(document).ready(function () {
  const options = [
    "Aracaju, SE",
    "Maceió, AL",
    "Natal, RN",
    "João Pessoa, PB",
    "Recife, PE",
    "Salvador, BA",
  ];
  function updateSearchResults(searchValue) {
    const searchResults = $("#search-results");
    searchResults.empty();
    const filteredOptions = options.filter((option) =>
      option.toLowerCase().includes(searchValue.toLowerCase())
    );
    filteredOptions.forEach((option) => {
      const listItem = $('<li class="dropdown-item"></li>').text(option);
      listItem.on("click", function () {
        $("#search-input").val(option);
        searchResults.hide();
      });
      searchResults.append(listItem);
    });
    if (filteredOptions.length > 0) {
      searchResults.show();
    } else {
      searchResults.hide();
    }
  }
  $("#search-input").on("input", function () {
    const searchValue = $(this).val();
    updateSearchResults(searchValue);
  });
  $(document).on("click", function (e) {
    if (!$(e.target).closest(".input-group").length) {
      $("#search-results").hide();
    }
  });
});

$(function () {

  window.verifyRecaptchaCallback = function (response) {
      $('input[data-recaptcha]').val(response).trigger('change')
  }

  window.expiredRecaptchaCallback = function () {
      $('input[data-recaptcha]').val("").trigger('change')
  }

  $('#contact-form').validator();

  $('#contact-form').on('submit', function (e) {
      if (!e.isDefaultPrevented()) {
          var url = "contact.php";

          $.ajax({
              type: "POST",
              url: url,
              data: $(this).serialize(),
              success: function (data) {
                  var messageAlert = 'alert-' + data.type;
                  var messageText = data.message;

                  var alertBox = '<div class="alert ' + messageAlert + ' alert-dismissable"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>' + messageText + '</div>';
                  if (messageAlert && messageText) {
                      $('#contact-form').find('.messages').html(alertBox);
                      $('#contact-form')[0].reset();
                      grecaptcha.reset();
                  }
              }
          });
          return false;
      }
  })
});
