# Acupay

===== Scripts =====
- dev - runs server using nodemon
- start - runs server using node


===== POST request for Mulriplication =====
### **Multiply two Numbers**
*method url*: `/api/multiply`

*http method*: **[POST]**

#### Body

| name    | type   | required |
| --------| ------ | -------- |
| `num1`  | String | Yes      |
| `num2`  | String | Yes      |

#### Example

```
{
    num1: 5,
    num2: 10
}
```
#### Response
##### 200 (OK)
##### JSON:
```
{
    user_entry_one: 5,
    user_entry_two: 10,
    total: 50
}
```
