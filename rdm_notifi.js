
const data = document.getElementById('weather')

data = (e) => {
    const notifis = ['1', '2', '3', '4', '5', '6']
    const rando = () => notifis[Math.floor(Math.random() * notifis.length)]
    document.documentElement.style.cssText = `
        --rdm-notifi: ${rando()};
`
}


// const svg = document.getElementById('triangles')

// svg.onclick = (e) => {
//     const colors = ['red', 'blue', 'green', 'orange', 'pink', 'purple']
//     const rando = () => colors[Math.floor(Math.random() * colors.length)]
//         document.documentElement.style.cssText = `
//             --dark-color: ${rando()};
//             --light-color: ${rando()};

//         `
// }