const throttle = (fn, delay) => {
    let shouldWait = false;
    return (...args) => {
        if (shouldWait) {
            return;
        }
        fn(...args)
        shouldWait = true
        setTimeout(() => {
            shouldWait = false
        }, delay)
    }
}

const debounce = (fn,delay) => {
    let timerId;
    return (...args) => {
        clearTimeout(timerId);
        timerId = setTimeout(()=>{
            fn(...args)
        },delay)
    }
}
export { throttle, debounce }
