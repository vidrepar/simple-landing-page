var app = {

    init: function () {

        console.log('App initialized');

        app.firstTask();
        app.secondTask();
        app.thirdTask();
        app.fourthTask();
        app.fifthTask();
        app.sixthTask();

    },
    firstTask: function () {

        for (var i = 1; i <= 100; i++) {

            if(i % 3 === 0){
                obj = 'Trojka';
            } else if (i % 5 === 0) {
                obj = 'Petka';
            } else {
                obj = i;
            }

            console.log(obj);

        }

    },
    secondTask: function () {

        (function () {

            var index;
            var length = 20;
            for(index = 0; index < length; index++){

                doSetTimeout(index);

            }

            function doSetTimeout(index) {
                setTimeout(function () {
                    console.log(index);
                }, index*200);
            }

        })();

    },
    thirdTask: function () {

		var browserName;
		var browserVersion;
		var platformName;

		navigator.browserInfo = (function () {
			var ua = navigator.userAgent, tem,
				M = ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
			if (/trident/i.test(M[1])) {
				tem = /\brv[ :]+(\d+)/g.exec(ua) || [];
				return 'IE ' + (tem[1] || '');
			}
			if (M[1] === 'Chrome') {
				tem = ua.match(/\b(OPR|Edge)\/(\d+)/);
				if (tem != null) return tem.slice(1).join(' ').replace('OPR', 'Opera');
			}
			M = M[2] ? [M[1], M[2]] : [navigator.appName, navigator.appVersion, '-?'];
			if ((tem = ua.match(/version\/(\d+)/i)) != null) M.splice(1, 1, tem[1]);
			return {'browser': M[0], 'version': M[1]};
		})();

		browserName = navigator.browserInfo.browser;
		browserVersion = navigator.browserInfo.version;
		platformName = navigator.platform;

		if(browserName === 'IE' && browserVersion === 7){
			(function () {
				alert("Hello World");
			})();
		} else {
			alert("No Hello World");
		}

		$('body').prepend($('<div>', {
			class: 'browser-info',
			text:'You are using ' + browserName + ' ' + browserVersion + ' on ' + platformName
		}));


    },
    fourthTask: function () {

        var object = function () {

            this.alert = function (txt) {
                alert(txt);
                return this;
            };

            this.confirm = function (txt) {
                confirm(txt);
                return this;
            }

        };

        var instance = new object();
        instance.alert('Alert').confirm('Confirm');

    },
    fifthTask: function () {

        for (var i = 1; i < 4; i++) {

            $('#element' + i ).on('mousemove', function (event) {

                var offset = $(this).offset();
                mouseX = event.pageX - offset.left;
                mouseY = event.pageY - offset.top;

                console.log('element: ', $(this)[0].id, 'x: ', mouseX, 'y: ', mouseY );

            });

        }

    },
    sixthTask: function () {

		// Products AJAX call
		$.get('../products.json', function (data, status) {

			if (status) {
				resData = data;

				console.log(resData);

				//$('#plugin').matchCarouselSport(resData);
			}

		});

		// Owl Carousel init
		$(".owl-carousel").owlCarousel();

    }

};

app.init();