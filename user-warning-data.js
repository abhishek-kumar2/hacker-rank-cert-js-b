/**
 * Implement the classes and methods to maintain user data using inheritance ...
 * 
 * class User single parameter accept username set the name, getUserName method return the name of the user and setUsername(username) update the value of the username
 * 
 * class ChatUser that inherits User class and has methods connect(username), giveWarning() increse the warning count by 1 and getWarningCount() that retun the warning count.
 */

class User {
    constructor(username) {
        this.name = username;
    }

    getUsername() {
         return this.name;
    }

    setUsername(username) {
        this.name = username;
    }
}


class ChatUser extends User {
    constructor(username) {
        super(username);
        this.count = 0;
    }

    giveWarning() { this.count++; }

    getWarningCount() { return this.count; }
}