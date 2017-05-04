/**
 * Created by edward on 5/3/2017.
 */
(function(global, $) {
    var Greetr = function(firstName, lastName, language) {
        return new Greetr.initialize(firstName, lastName, language);
    }

    Greetr.initialize = function(firstName, lastName, language) {
        this.firstName = firstName || '';
        this.lastName = lastName   || '';
        this.language = language   || 'en';
    }

    var supportedLangs = ['en', 'es'];

    var greetings = {
        en: 'Hello',
        es: 'Hola'
    };

    var logMessage = {
        en: 'Logged In',
        es: 'Inicio sesion'
    };

    Greetr.prototype = {
        fullName: function() { return this.firstName + " " + this.lastName },
        validate: function() {
            if (supportedLangs.indexOf(this.language) === -1 ) {
                throw 'Language not supported';
            }
            return this;
        },
        greeting: function() {
            return greetings[this.language] + " " + this.firstName + "!";
        },
        greet: function() {
            var msg = this.greeting();

            if (console) {
                console.log(msg);
            }

            return this;
        },
        log: function () {
            if (console) {
                console.log(logMessage[this.language] + ": " + this.fullName());
            }
            return this;
        },

        setLang: function(lang) {
            this.language = lang;
            this.validate();
            return this;
        }
    };

    Greetr.initialize.prototype = Greetr.prototype;

    global.Greetr = global.G$ = Greetr;

})(window, jQuery);