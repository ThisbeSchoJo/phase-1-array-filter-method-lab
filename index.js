// Code your solution here
function findMatching(driverNames, name) {
    return driverNames.filter((driver) => { //outer return shows test that you're returning value
        return name.toLowerCase() === driver.toLowerCase() //inner return controls what result will be
    })
}

function fuzzyMatch(driversNames, letters) {
    return driversNames.filter((name) => { //use return statement so the test can check what we're returning
        return name.slice(0,letters.length) === (letters)
    })
}

function matchName(driverObjects, name){
    return driverObjects.filter((driver) =>{
        return driver["name"] === name
    })
}