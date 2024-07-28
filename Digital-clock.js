

const updateClock = () => {
    return new Promise( (res, rej) => {
        setTimeout( () => {
               res(new Date().toLocaleTimeString())
        },1000 )
    } )
}

const ClockRunFun = async () => {
    try {
        while (true) {
            const time = await updateClock();
            console.clear();
            console.log(time);
        }
    } catch (error) {
        console.log(error);
        
    }
}

const  digitalClock = () => {
    ClockRunFun()
}
digitalClock()