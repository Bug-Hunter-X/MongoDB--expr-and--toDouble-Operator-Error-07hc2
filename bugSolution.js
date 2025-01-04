```javascript
const query = {
  $expr: {
    $gt: [{ $toDecimal: '$field' }, 10]
  }
};

db.collection.find(query);
```