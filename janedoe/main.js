$("#my-form").submit(function(e) {
    e.preventDefault();

    var $form = $(this);
    $.post($form.attr("action"), $form.serialize()).then(function() {
        alert("Thank you!");
    });

    window.location.reload();
});