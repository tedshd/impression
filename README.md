# impression

Check DOM component in view

Also can use it handle something like transition effect in view

You can use it log some dom component impression

## Method

* **getCount()**

Get current impression dom object quantity

* **addImpression([dom object])**

Add dom object or nodelist which want to check impression

||type|required|description|example|
|-|-|-|-|-|
| dom object | DOM Object or Node List | required | dom object which want to check impression | `document.querySelector('#traget')`, `document.querySelectorAll('.traget li')` |

* **removeImpression([key])**

Remove impression dom object, but you must know which dom object match impression key

||type|required|description|example|
|-|-|-|-|-|
| key | String | required | impression obj key and it is `impression_` + number | `impression_0`, `impression_3` |

* **calcImpression([doSomething])**

Dom object in view callback

You can use it do something like ga or log or transition

||type|required|description|example|
|-|-|-|-|-|
| doSomething | function([dom]) {} | option | callback function | `function(dom) {console.log(dom);}` |

||type|required|description|
|-|-|-|-|
| dom | DOM Object | option | impression dom object |

* **impressionObj**

Show object which added to impression dom object

## Usage

```JavaScript
var IMP = new impression();

IMP.addImpression(document.querySelectorAll('li')[100]);

window.addEventListener('scroll', debounce(function() {
    IMP.calcImpression(function (dom) {
        console.log(dom);
    });
}, 300));
```
