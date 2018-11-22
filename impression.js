/**
 *
 * @authors Ted Shiu (tedshd@gmail.com)
 * @date    2018-11-21 12:40:49
 */

(function () {
    function impression() {

        var impressionCount = 0,
            impressionObj = {};

        function getPosition(dom) {
            return dom.getBoundingClientRect();
        }

        function getCount() {
            return impressionCount;
        }

        function addImpression(dom) {
            if (!dom) {
                console.error('addImpression: set dom error');
                return;
            }
            if (dom.length) {
                for (var i = 0; i < dom.length; i++) {
                    impressionObj['impression_' + impressionCount] = dom[i];
                    impressionCount++;
                }
            } else {
                impressionObj['impression_' + impressionCount] = dom;
                impressionCount++;
            }
        }

        function removeImpression(key) {
            if (!key || typeof(key) !== 'string') {
                console.error('removeImpression: key type error');
                return;
            }
            if (impressionObj[key] === undefined) {
                console.error('removeImpression: key undefined');
                return;
            }
            delete impressionObj[key];
        }

        function calcImpression(doSomething) {
            if (Object.keys && !Object.keys(impressionObj).length) {
                console.info('impression: not impression dom');
                return;
            }
            for(var n in impressionObj) {
                var pos = getPosition(impressionObj[n]);
                if (pos['top'] >= 0 && window.document.documentElement.clientHeight >= pos['top'] &&
                    pos['left'] >= 0 && window.document.documentElement.clientWidth >= pos['left']) {
                    if (doSomething) {
                        doSomething(impressionObj[n]);
                    }
                    delete impressionObj[n];
                }
            }
        }
        this.getCount = getCount;
        this.addImpression = addImpression;
        this.removeImpression = removeImpression;
        this.calcImpression = calcImpression;
        this.impressionObj = impressionObj;
    }
    window.impression = impression;
})();
