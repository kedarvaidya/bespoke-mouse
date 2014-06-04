(function() {
  'use strict';

  describe("bespoke-mouse", function() {

    var deck,

      createDeck = function(optionValue) {
        var parent = document.createElement('article');
        parent.innerHTML = '<section></section><section></section><section></section>';

        deck = bespoke.from(parent, {
          mouse: optionValue
        });
      },

      simulateLeftClick = function(params) {
        simulant.fire(document, 'click', params);
      },

      simulateRightClick = function(params) {
        simulant.fire(document, 'contextmenu', params);
      },

      simulateMouseWheelEvent = function(delta) {
        //simulant.fire(document, 'mousewheel', { wheelDelta: delta });
        var evt = document.createEvent("MouseEvents");
        evt.initMouseEvent('mousewheel', true, true);
        evt.wheelDelta = delta;
        document.dispatchEvent(evt);
      },

      simulateDOMMouseScrollEvent = function(detail) {
        //simulant.fire(document, 'mousewheel', { wheelDelta: detail });
        var evt = document.createEvent("MouseEvents");
        evt.initMouseEvent(
          'DOMMouseScroll',
           true,
           true,
           window,
           detail
        );
        document.dispatchEvent(evt);
      };

    describe("click deck", function() {

      [true, 'click'].forEach(function (optionValue) {

        describe("with an option value of '" + optionValue + "'", function() {

          beforeEach(createDeck.bind(null, optionValue));

          describe("next slide", function() {
            beforeEach(function() {
              deck.slide(0);
            });

            it("should go to the next slide when left mouse button is clicked", function() {
              simulateLeftClick({ button: 0, which: 1 });
              expect(deck.slides[1].classList.contains('bespoke-active')).toBe(true);
            });

            it("should go to the next slide when left mouse button is clicked in old IE (<=8)", function() {
              simulateLeftClick({ button: 0 });
              expect(deck.slides[1].classList.contains('bespoke-active')).toBe(true);
            });

          });

          describe("previous slide", function() {

            beforeEach(function() {
              deck.slide(2);
            });

            it("should go to the previous slide when right mouse button is clicked", function() {
              simulateRightClick({ button: 2, which: 3 });
              expect(deck.slides[1].classList.contains('bespoke-active')).toBe(true);
            });

            it("should go to the previous slide when right mouse button is clicked old IE (<=8)", function() {
              simulateRightClick({ button: 2 });
              expect(deck.slides[1].classList.contains('bespoke-active')).toBe(true);
            });

          });

        });

      });

    });

    describe("wheel deck", function() {

      [true, 'wheel'].forEach(function (optionValue) {

        describe("with an option value of '" + optionValue + "'", function() {

          beforeEach(createDeck.bind(null, optionValue));

          describe("next slide", function() {
            beforeEach(function() {
              deck.slide(0);
            });

            it("should go to the next slide when mouse wheel is moved down", function() {
              simulateMouseWheelEvent(-100);
              expect(deck.slides[1].classList.contains('bespoke-active')).toBe(true);
            });

            it("should go to the next slide when mouse wheel is moved down in firefox", function() {
              simulateDOMMouseScrollEvent(100);
              expect(deck.slides[1].classList.contains('bespoke-active')).toBe(true);
            });

          });

          describe("previous slide", function() {

            beforeEach(function() {
              deck.slide(2);
            });

            it("should go to the next slide when mouse wheel is moved up", function() {
              simulateMouseWheelEvent(100);
              expect(deck.slides[1].classList.contains('bespoke-active')).toBe(true);
            });

            it("should go to the next slide when mouse wheel is moved up in firefox", function() {
              simulateDOMMouseScrollEvent(-100);
              expect(deck.slides[1].classList.contains('bespoke-active')).toBe(true);
            });

          });

        });

      });

    });

  });

}());