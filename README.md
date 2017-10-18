## URLi (URL Interface)
A constructor for manipulating and querying URLs

#### Usage
```js
import URL from "urli";
const location = new URL(Schema, LocationObject|String);
```

```javascript
location.setSchema(String)
-> URL
```

#### Params

Any path which is prefixed with `:` will be converted to a key value pair which is accessible at `location.params`

```javascript
const location = new URL(
  "/user/:userID",
  "/user/SeanJM"
);
location.params.userID -> "SeanJM"
```

```javascript
const location = new URL("/user/:userID", {
  pathname: "/user/SeanJM",
  search  : ""
});
location.params.userID -> "SeanJM"
```

Arrays
```javascript
const location = new URL("/user/:userID?depth[]=:number+:id", {
  pathname: "/user/SeanJM",
  search  : "?depth[]=0+o8jk&depth[]=1+99qE&depth[]=2+eBPs"
});

location.search.depth -> [{
  number: 0,
  id    : "o8jk"
}, {
  number: 1,
  id    : "99qE"
}, {
  number: 2,
  id    : "eBPs"
}]
```

Objects & Constants
```javascript
const location = new URL("/post/:postID?origin=board+:category+:page", {
  pathname: "/post/ezAYhlkuGEz",
  search  : "?origin=board+food+1"
});
location.search.origin -> {
  category: "food",
  page: 1
}

location.search.origin.category = "fitness";
location.toString() -> "/post/ezAYhlkuGEz?origin=board+fitness+1"
```

#### Changing values of params
```javascript
location.params.userID = "HungryHippo";
location.toString();
-> "/user/HungryHippo"
```

Using `set` method
```javascript
location.params
  .set({ userID: "HungryHippo" });
  .toString();
-> "/user/HungryHippo"
```

#### Changing values of search
```javascript
location.search.comments = "100";
location.toString();
-> "/user/HungryHippo?comments=100"
```

#### Methods
```method.js
set(props: Object)
```

```method.js
copy()
```

```method.js
params.toString()
```

```method.js
search.toString()
```

```method.js
search.fromString(String)
```

#### `copy()`

The `copy` method will create a whole new object instance

```javascript
location.copy();
```
