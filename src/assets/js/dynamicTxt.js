const dynamicTxtFn = function() {
    return new Promise((resolve, reject) => {
        let timeout = 40
        let element = document.getElementById('dynamicTxt').getElementsByClassName('txt')[0];
        let fullString = `新年快乐！  
        <br/>
        `
        let showString = '';
        let showTxtFn = () => {
            if (showString.length < fullString.length) {
                showString = fullString.substring(0, showString.length + 1)
                element.innerHTML = showString
                setTimeout(showTxtFn, timeout);
            } else {
                resolve()
            }
        }
        showTxtFn()
    })
}

export default dynamicTxtFn