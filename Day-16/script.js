document.addEventListener("DOMContentLoaded", function () {
  var countdownElement = document.getElementById("countdown");
  var messageElement = document.getElementById("message");

  function showCountdown(number, callback) {
    countdownElement.innerHTML = number;
    countdownElement.classList.add("visible");
    countdownElement.classList.remove("hidden");

    setTimeout(function () {
      countdownElement.classList.add("hidden");
      countdownElement.classList.remove("visible");

      if (callback) {
        setTimeout(callback, 1000);
      }
    }, 1000);
  }

  showCountdown(10, function () {
    showCountdown(9, function () {
      showCountdown(8, function () {
        showCountdown(7, function () {
          showCountdown(6, function () {
            showCountdown(5, function () {
              showCountdown(4, function () {
                showCountdown(3, function () {
                  showCountdown(2, function () {
                    showCountdown(1, function () {
                      countdownElement.classList.add("hidden");
                      countdownElement.classList.remove("visible");
                      setTimeout(function () {
                        messageElement.classList.add("visible");
                        messageElement.classList.remove("hidden");
                      }, 1000);
                    });
                  });
                });
              });
            });
          });
        });
      });
    });
  });
});
