# Room Booking Rest API
A simple Rest API for room booking
https://senihtosun-rest-api.herokuapp.com/booking

# Testing with cURL
Alternatively you can use an application like [Postman](https://postman.com) to interact with this rest API.


Creating a new booking
```
curl -i -X POST -d '{"name": "John Smith", "bookingDate": "2020-06-25", "roomNumber": 313}' -H "Content-Type: application/json" https://senihtosun-rest-api.herokuapp.com/booking

```

**Make sure to specify the id for getting, updating and deleting**

Getting information about an existing one
```
curl -H "Content-Type: application/json" https://senihtosun-rest-api.herokuapp.com/booking/id
```

Deleting an existing one

```
curl -i -X DELETE https://senihtosun-rest-api.herokuapp.com/booking/id

```


