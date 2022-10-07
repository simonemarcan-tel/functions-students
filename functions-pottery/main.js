const buyClay = () => {
    clayObj = {}

    return clayObj
}
const shape = buyClay()

const makePottery = (shape) => {
    clayObj.shape = "Bowl"

    return shape

}
const readyForGlazing = makePottery(shape)

const bisqueFire = (readyForGlazing) => {
    clayObj.readyForGlazing = true

    return readyForGlazing
}
const glazing = bisqueFire(readyForGlazing)

const glazePottery = (glazing) => {
    if (clayObj.readyForGlazing = true) {
        clayObj.glazing = "Midnight Blue"
    } else {
        console.log("Make sure you bisque fire the pottery before you glaze it.")
    }
    return glazing
}

const cracked = glazePottery(glazing)

const finalFiring = (cracked, kilnTemp) => {
    if (kilnTemp > 1200) {
        clayObj.cracked = true
    } else {
        clayObj.cracked = false
    }
    return cracked
}
const finalPottery = finalFiring(cracked)
console.log(finalPottery)