## Functions

<dl>
<dt><a href="#isEqual">isEqual(v, vv)</a> ⇒ <code>boolean</code></dt>
<dd><p>This function evaluates whether equal first argument and second argument</p>
</dd>
<dt><a href="#isEqualAtStringFunction">isEqualAtStringFunction(v, vv)</a> ⇒ <code>boolean</code></dt>
<dd><p>This function evaluates whether equal first function and second function casted as string</p>
</dd>
<dt><a href="#isEqualAtStringSymbol">isEqualAtStringSymbol(v, vv)</a> ⇒ <code>boolean</code></dt>
<dd><p>This function evaluates whether equal first symbol and second symbol casted as string</p>
</dd>
</dl>

<a name="isEqual"></a>

## isEqual(v, vv) ⇒ <code>boolean</code>
This function evaluates whether equal first argument and second argument

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| v | <code>\*</code> | An any value which will be compared |
| vv | <code>\*</code> | An any value which will be compared |

**Example**  
```js
isEqual(1, 1); // true
```
<a name="isEqualAtStringFunction"></a>

## isEqualAtStringFunction(v, vv) ⇒ <code>boolean</code>
This function evaluates whether equal first function and second function casted as string

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| v | <code>function</code> | A function which will be compared |
| vv | <code>function</code> | A function which will be compared |

**Example**  
```js
isEqualAtStringFunction(function() {}, function() {}); // true
```
<a name="isEqualAtStringSymbol"></a>

## isEqualAtStringSymbol(v, vv) ⇒ <code>boolean</code>
This function evaluates whether equal first symbol and second symbol casted as string

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| v | <code>Symbol</code> | A symbol which will be compared |
| vv | <code>Symbol</code> | A symbol which will be compared |

**Example**  
```js
isEqualAtStringSymbol(Symbol(1), Symbol(1)); // true
```
