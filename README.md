# Acupay

===== Scripts =====
- dev - runs server using nodemon
- start - runs server using node
- test - runs unit test



===== Swagger Documentation =====

*method url*: `/api/docs`


===== POST request for Multiplication =====
### **Multiply two Numbers**
*method url*: `/api/multiply`

*http method*: **[POST]**

#### Body

| name    | type    | required |
| --------| ------  | -------- |
| `num1`  | Integer | Yes      |
| `num2`  | Integer | Yes      |

#### Example

```
{
    num1: 5,
    num2: 10
}
```
##### Response
##### 200 (OK)
##### JSON Response:
```
{
    user_entry_one: 5,
    user_entry_two: 10,
    total: 50
}
```

##### 400 (Number of keys in the object is less than, or more than 2)
##### 415 (description: No Content-Type on Header, or media provided is not JSON)        
##### 422 (description: Keys ["num1" and/or "num2"] are missing, or thir values are not integers)         
##### 429: (description: Rate limit of 1 request per second has been reached)
