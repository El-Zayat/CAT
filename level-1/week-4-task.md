# Week 4 Coding Task ✨
### 🎯 Statement
Ahmed landed his first job as a software engineer. The first task given to Ahmed was to implement a chat system.

Ahmed has trouble keeping track of the status of his users. He needs to do the following operations:

- login user with a specific `id`
- logout user with a specific `id`
- check if user with a specific `id` is currently online
- count the number of online users
- count how many times the user `id` logged in to the system

Can you help Ahmed to implement his first task succefully?

### 🎯 Requirement & Constraints
- you need to implement the `Chat` closure that returns an object consisting of the following functions:
  - `login(id):` login user `id` **only if he's not currently online**
  - `logout(id):` logout user `id` **only if he's currently online**
  - `isOnline(id):` returns boolean whether user `id` is currently online or not
  - `countOnline():` returns the number of currently online users
  - `countLogins(id):` returns the number of times user `id` has logged in to the system _(this applies only when user state changes from offline to online)_
- you cannot use Arrays, Loops or Objects

### 🎯 Starter Code
```js
function Chat() {
  // do your magic

  return {
    login,
    logout,
    isOnline,
    countOnline,
    countLogins
  }
}

const myChat = Chat();
myChat.login(3);
myChat.login(2);
myChat.logout(3);
console.log(myChat.countOnline()); // 1
````
