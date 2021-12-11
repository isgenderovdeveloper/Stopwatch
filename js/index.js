let startButton = document.querySelector("#startButton")
let stopButton = document.querySelector("#stopButton")
let lapButton = document.querySelector("#lapButton")

class DomElements {
    timeBoard = document.querySelector("#timeBoard")
    lapContent = document.querySelector("#lapContent")
}

class TimeWatch extends DomElements {
    second = 0;
    timerArray = [];
    lapArray = [];
    a;
    constructor() {
        super()
    }

    timerFunction(timer) {
        let seconds = timer;
        let minute = Math.floor(seconds / 60);
        let rightSecond = seconds - minute * 60;



        let result = `${minute<10?'0'+minute:minute}:${rightSecond<10?'0'+rightSecond:rightSecond}`
        return result;
    }
    startTime() {
        clearInterval(this.b);
        this.b = setInterval(() => {
            this.second++;
            this.timerFunction(this.second);
            this.timerArray.push(this.timerFunction(this.second));
            this.timeBoard.innerHTML = this.timerFunction(this.second);

        }, 1000)
    }
    stopTime() {
        clearInterval(this.b);
    }
    lapTime() {
        let laptime = this.timerArray[this.timerArray.length - 1]
        this.lapArray.push(laptime);
        this.lapContent.innerHTML = this.lapArray.map((q, i) => {
            return `<li class="bg-white rounded-pill h3 p-3 my-2 font-italic font-weight-bold" style = "list-style:none;margin-bottom:8px;color:#E15245"> ${i+1}.  ${q} </li>`;
        }).join('')
    }
}


let stopWatch = new TimeWatch();

startButton.onclick = () => stopWatch.startTime();
stopButton.onclick = () => stopWatch.stopTime();
lapButton.onclick = () => stopWatch.lapTime();