function slidersDesc() {
    var swiper = new Swiper('.desc .swiper-container', {
        speed: 800,
        slidesPerView: 3,
        spaceBetween: 10,
        // autoplay: true,
        loop: true,
        navigation: {
            nextEl: '.desc .swiper-button-next',
            prevEl: '.desc .swiper-button-prev',
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 120
            },
            768: {
                slidesPerView: 2,
                // spaceBetween: 0
            },
            992: {
                slidesPerView: 3,

            },
        }
    })
}

function slidersWhy() {
    var swiper = new Swiper('.why .swiper-container', {
        speed: 800,
        slidesPerView: 4,
        spaceBetween: 10,
        // autoplay: true,
        loop: true,
        navigation: {
            nextEl: '.why .swiper-button-next',
            prevEl: '.why .swiper-button-prev',
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 120
            },
            768: {
                slidesPerView: 2,
                // spaceBetween: 0
            },
            992: {
                slidesPerView: 4,
                // spaceBetween: 0
            },
            // 1150: {
            //     slidesPerView: 4,
            //     // spaceBetween: 0
            // },
        }
    })
}


function openForm() {
    $(".modal-bg").show();
    $(".modal-form").slideDown(200);
}

function closeForm() {
    $(".modal-bg").hide();
    $(".modal-form").slideUp(200);
}


$(document).ready(function() {
    slidersDesc();
    slidersWhy();
    let xRadio = $("input[name='x']:checked").val();
    let yRadio = $("input[name='y']:checked").val();
    let zRadio = $("input[name='z']:checked").val();
    let result = (xRadio * 3000) + (yRadio * 4500) + (zRadio * 35000) - 250000;
    $("#result").html(result);

    $(".radio-style").click(function() {
        let xRadio = $("input[name='x']:checked").val();
        let yRadio = $("input[name='y']:checked").val();
        let zRadio = $("input[name='z']:checked").val();
        let result = (xRadio * 3000) + (yRadio * 4500) + (zRadio * 35000) - 250000;
        $("#result").html(result);
    })
    $(".why input[type='radio']").click(function() {
        let xRadio = $("input[name='x']:checked").val();
        let yRadio = $("input[name='y']:checked").val();
        let zRadio = $("input[name='z']:checked").val();
        let result = (xRadio * 3000) + (yRadio * 4500) + (zRadio * 35000) - 250000;
        $("#result").html(result);
    })

    $(".model__card-btn").click(function() {
        openForm();
    })
    $(".calc__btn").click(function() {
        openForm();
    })
    $(".cities__btn").click(function() {
        openForm();
    })
    $(".modal-form__img").click(function() {
        closeForm();
    })
});