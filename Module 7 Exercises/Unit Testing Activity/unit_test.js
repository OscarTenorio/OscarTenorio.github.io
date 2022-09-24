function greet(name) {
    if (name === null) {
        console.log('Hello there!');
    } else if (typeof name === "string") {
        if (name === name.toUpperCase()) {
            let greetingString = `HELLO ${name}!`
            console.log(greetingString);
        } else {
            let greetingString = `Hello ${name}.`
            console.log(greetingString);
        };
    } else if (typeof name === "object") {
        var names = ''
        for (let i = 0; i < name.length; i++) {
            if (i < name.length - 1) {
                names += name[i] + ', ';
            } else {
                names += name[i];
            };
        };
        let greetingString = `Hello ${names}.`
        console.log(greetingString);
    };
};