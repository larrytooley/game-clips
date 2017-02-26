$("document").ready(function () {
    function random() {
        function getRandomArbitrary() {
            return Math.random() * (500 - 100) + 100;
        }
    }
    $('.graphics').on('click', function (e) {
        console.log(e.target);
        $(e.target).addClass('btn-success');
        $('.graphics').off();
    });
    $('.glitches').on('click', function (e) {
        console.log(e.target);
        $(e.target).addClass('btn-success');
        $('.glitches').off()
    });
    $('.retro').on('click', function (e) {
        console.log(e.target);
        $(e.target).addClass('btn-success');
        $('.retro').off();
    });
    
});