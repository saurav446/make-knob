
 $(document).ready(function() {
      $(".dial").knob();
      $('.dial')
      .trigger('configure',{
      "min":0,
     "max":100,
     parse: function (v) {return parseInt(v);},       
     format: function (v) {return v + "%";},
     
});

});

      $(document).ready(function() {
        /* create jQuery knob with .dial class */
        $('#saurav1').attr('readonly', true);
        $('#saurav2').attr('readonly', true);
        $('#saurav3').attr('readonly', true);
        $('#saurav4').attr('readonly', true);

        animateChart('saurav1', 0, 90);
        animateChart('saurav2', 0, 20);
        animateChart('saurav3', 0, 20);
        animateChart('saurav4', 0, 80);

        /* Update circle value when input.animate changes */

        /* Animate chart from start_val to end_val */
        function animateChart (chart_id, start_val, end_val) {
            $({chart_value: start_val}).animate({chart_value: end_val}, {
                duration: 2500, // 1 second animation
                easing: 'swing',
                step: function () {
                    $('#' + chart_id).val(Math.ceil(this.chart_value)).trigger('change');
                },
                complete: function () {
                    /* complete */
                    console.log('complete');
                }
            });
        };
    });





