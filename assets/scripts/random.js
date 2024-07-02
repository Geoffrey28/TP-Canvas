export function getRandomNumber() {
    return Math.floor(Math.random() * 200);
}

export function getRandomColor() {
    return '#' + (Math.random()*0xFFFFFF<<0).toString(16);
}