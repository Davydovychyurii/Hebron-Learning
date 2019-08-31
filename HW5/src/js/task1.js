let userName = prompt("Введіть логін");
switch (true) {
    case (!userName):
        alert("Canceled");
        break;
    case (userName.length < 4):
        alert("I don't know any users having name length less than 4 symbols");
        break;
    case (userName.toLowerCase() !== "user"):
        alert("I don’t know you");
        break;
    case (userName.toLowerCase() == "user"):
        let paswword = prompt("Введіть пароль");
        switch (true) {
            case (!paswword):
                alert("Canceled");
                break;
            case (paswword.toLowerCase() !== "superuser"):
                alert("Wrong password");
                break;
            case (paswword.toLowerCase() == "superuser"):
                let data = new Date().getHours()
                switch (true) {
                    case (data < 20):
                        alert("Good day!");
                        break;
                    case (data > 20):
                        alert("Good evening!");
                        break;
                };
                break;

        };
        break;
};