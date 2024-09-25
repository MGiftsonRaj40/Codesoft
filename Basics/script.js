const element = document.getElementsByClassName('element')[0]
const playButton =document.getElementById("start")
const pauseButton = document.getElementById("stop")

playButton.addEventListener('click', () => element.style.animationPlayState = "running")
pauseButton.addEventListener('click', () => element.style.animationPlayState = "paused" )

const myTags = [
    'JavaScript', 'CSS', 'HTML',
    'C', 'C++', 'React',
    'Python', 'Java', 'git',
    'django', 'Node.js', 'OpenCV',
    'GCP', 'MySQL', 'jQuery',
];



var tagCloud = TagCloud('.content', myTags,{

    // radius in px
    radius: 180,
  
    // animation speed
    // slow, normal, fast
    maxSpeed: 'fast',
    initSpeed: 'normal',
  
    // 0 = top
    // 90 = left
    // 135 = right-bottom
    direction: 135,
  
    // interact with cursor move on mouse out
  
})

function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function deleteLast() {
    let display = document.getElementById('display').value;
    document.getElementById('display').value = display.slice(0, -1);
}

function calculate() {
    let display = document.getElementById('display').value;
    try {
        document.getElementById('display').value = eval(display);
    } catch (e) {
        document.getElementById('display').value = 'Error';
    }
}; 

