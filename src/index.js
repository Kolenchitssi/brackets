module.exports = function check(str, bracketsConfig) {

    let lenStr = str.length;
    let lenKey = bracketsConfig.length;
    let cheked = [];

    //console.log(str); 
    // выводы в консоль для проверки эт задача у меня не получалась дольше всех не стал удалять

    for (let i = 0; i < lenStr; i++) {

        for (let j = 0; j < lenKey; j++) {
            if (str[i] == bracketsConfig[j][0]) {

                //блок для одинаковых закрывающих и открывающих скобок
                if (bracketsConfig[j][0] == bracketsConfig[j][1]) {
                    if (cheked[cheked.length - 1] != str[i]) {
                        cheked.push(str[i]);
                        // console.log("push1", str[i], [...cheked]);
                    }
                    else if (cheked[cheked.length - 1] == str[i]) {
                        let d = cheked.pop();
                        // console.log("pop 1", d, [...cheked]); 
                    }
                }
                else {
                    cheked.push(str[i]);
                    // console.log("push2", str[i - 1], str[i]);
                }

            } else if (str[i] == bracketsConfig[j][1]) {

                if (cheked[cheked.length - 1] == bracketsConfig[j][0]) {
                    let d = cheked.pop();
                    // console.log("pop 2", d, cheked);
                }
                else return false;
            }
        }
    }


    if (cheked.length === 0) { return true; }

    else {
        //console.log("******", [...cheked]);
        return false;
    }
}
