!(function() {
    let galleryArr = [
        {
        "name": "Гравитационый дозатор",
        "id": "D_aEzh3V7oA"
        },
        {
        "name": "Фасовщик картофеля видео после доработки.",
        "id": "yPfRbBBeJRs"
        },
        {
        "name": "Ленточный дозатор для фасовки угля",
        "id": "dVFdyVpbheE"
        },
        {
        "name": "Весовой полуавтоматический фасовщик с шлюзовым дозатором.",
        "id": "b_-03QnSDsM"
        },
        {
        "name": "Производственные испытания нового весового дозатора, гравитационного",
        "id": "eMkuxW3Vhlc"
        },
        {
        "name": "Фасовка угля на производстве.",
        "id": "_YzKyLrXNYs"
        },
        {
        "name": "Лаки Мастерс НН фасовка ячменя ВД 50С 15кг 9 сек погрешность 10г",
        "id": "hrUSkIF_w2M"
        },
        {
        "name": "Лаки Мастерс НН фасовка по 5 кг дозатор ВД 50С",
        "id": "GzBRLMNiN_o"
        },
        {
        "name": "Лаки Мастерс НН дозатор ВД 50СШ 2 фасовка пшеницы в мешок 40 кг",
        "id": "3aPKll5qvbo"
        },
        {
        "name": "Испытания весового дозатора ВД 50С фасовка древесных пелет 4мм, мешок 30 кг",
        "id": "5nX3pGGppTk"
        },
        {
        "name": "Дозатор из нержавеющей стали, шнековый.",
        "id": "ZxDT_eAtnjk"
        },
        {
        "name": "Весовой дозатор, ВД-50СШ-1, из кучи, мобильный. Реальная работа.",
        "id": "vYW4ob8Uc-o"
        },
        {
        "name": "Дозатор весовой.",
        "id": "gB6u15AAA6o"
        },
        {
        "name": "Фасовка картофеля после сортировки.",
        "id": "ecycKPZtiyg"
        },
        {
        "name": "Видео фасовки сырого песка.",
        "id": "24_ndSecfn4"
        },
        {
        "name": "Фасовка песка",
        "id": "WCbf8kupHW0"
        },
        {
        "name": "Фасовка торфа",
        "id": "HSTZU3rcNyo"
        },
        {
        "name": "Испытание на прочность дозатора желобчатого.",
        "id": "sMoYqrTbeRo"
        },
        {
        "name": "Новый механический зажим.",
        "id": "BG_BrGmj0Uc"
        },
        {
        "name": "Видео работы полуавтоматического фасовщика.",
        "id": "BJKvrXJEKZ0"
        },
        {
        "name": "новый мобильный",
        "id": "apjMjVhqEts"
        }
    ];

    if (document.querySelector('.js-gallery')) {
        let container = document.querySelector('.js-gallery');
        let maxVideo = 9;

        if (window.innerWidth < 1280) {
            maxVideo = 6;
        };

        if (window.innerWidth < 768) {
            maxVideo = 3;
        };

        let amountVideo = galleryArr.length;
        let amountPages = Math.ceil(amountVideo/maxVideo);
        
        for (var i = 1; i <= amountPages; i++) {
            if (i === 1) {
                document.querySelector('.gallery__pages-numbers').insertAdjacentHTML('beforeend', `
                    <a href="#" class="gallery__pages-number js__gallery-number js__gallery-number-active" data-number="${i}" data-id="gallery__page-${i}">${i}</a>
                `); 
            } else {
                document.querySelector('.gallery__pages-numbers').insertAdjacentHTML('beforeend', `
                    <a href="#" class="gallery__pages-number js__gallery-number" data-number="${i}" data-id="gallery__page-${i}">${i}</a>
                `); 
            }
            
        };
        
        galleryPage(0, 1);

        
        document.querySelector('.gallery__pages-numbers').addEventListener('click', (e) => {
            if (e.target.classList.contains('js__gallery-number')) {
                document.querySelector('.js__gallery-number-active').classList.remove('js__gallery-number-active');
                e.target.classList.add('js__gallery-number-active');
                galleryPage((maxVideo * (e.target.dataset.number-1)),e.target.dataset.number);
            }
        });


        function galleryPage(number, numberPage) {
            let minNumber = number;
            let maxNumber = maxVideo*numberPage;
            if (maxNumber > amountVideo) maxNumber = amountVideo
            document.querySelector('.gallery__page').innerHTML = '';
            for (var i = minNumber; i < maxNumber; i++) {
                document.querySelector('.gallery__page').insertAdjacentHTML('beforeend', `
                    <div class="gallery__video-block">
                        <iframe class="gallery__video" height="200" src="https://www.youtube-nocookie.com/embed/${galleryArr[i].id}?modestbranding=1iv_load_policy=3showinfo=0controls=0" frameborder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        <p class="text gallery__video-text">${galleryArr[i].name}</p>
                    </div>
                `);
            };
        }

    };
})();