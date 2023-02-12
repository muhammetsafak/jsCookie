# jsCookie

I have prepared a simple class that makes cookie management easier with JavaScript.

## Installation

Get the `jsCookie.min.js` file from this repo and include it in your HTML file. That is all.

```html
<script src="./jsCookie.min.js"></script>
```

### Has 

```js
jsCookie.has(name);
```

__Parameters :__
- `name` : Cookie Name

__Returned :__ `boolean`


### Get 

```js
jsCookie.get(name, defaultValue = null);
```

__Parameters :__
- `name` : Cookie Name
- `defaultValue` : Value to return if no cookie

__Returned :__ It returns the cookie value or the specified default value.

### Set

```js
jsCookie.set(name, value, ttl = 8600, path = '/');
```

__Parameters :__
- `name` : Cookie Name
- `value` : Cookie Value
- `ttl` : Life Time in Seconds
- `path` : Cookie Path

__Returned :__ `boolean`


### All

```js
jsCookie.all();
```

__Returned :__ `Array`
