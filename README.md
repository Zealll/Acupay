# Acupay

===== Scripts =====
- dev - runs server using nodemon
- start - runs server using node



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
#### Response
##### 200 (OK)
##### JSON Response:
```
{
    user_entry_one: 5,
    user_entry_two: 10,
    total: 50
}
```
