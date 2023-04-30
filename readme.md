# Persian dad jokes API
## An API for Persian dad joks

Pass a number 1-10 or an ID as url parameters to fetch jokes from the Database.

## Example call:
```
https://showhar-ame.cyclic.app/1
or
https://showhar-ame.cyclic.app/644ead287803a3117a0a6ca7
```

## Result:
```
[{
  "_id": {
    "$oid": "644ead287803a3117a0a6ca7"
  },
  "value": "بزغاله‌ها که ناراحت میشن صداشون بُزغالود میشه",
  "__v": 0,
  "createdAt": {
    "$date": {
      "$numberLong": "1682877736688"
    }
  },
  "updatedAt": {
    "$date": {
      "$numberLong": "1682877736688"
    }
  }
}]
```

## Check out a similar NPM package with the same Database:
[Showhar-ame-NPM](https://github.com/rumiani/showhar-ame-jokes)