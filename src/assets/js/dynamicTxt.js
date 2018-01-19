/* eslint-disable */
const dynamicTxtFn = function(text,interval) {
    return new Promise((resolve, reject) => {
        let timeout = interval
        let element = document.getElementById('dynamicTxt');
        let fullString = text
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