function logDriverNames(drivers) {
    const loggedDrivers = function (drivers) {
        console.log(drivers.name)
    }

    return drivers.forEach(loggedDrivers);
}

function logDriversByHometown(drivers, location){
    const matcher = function (drivers) {
       if (drivers.hometown === location) {
           console.log(drivers.name)
       }
    }

    return drivers.forEach(matcher);
}

function driversByRevenue(drivers) {
    //Lowest to highest revenue, new array
    const newDrivers = [...drivers]

    return newDrivers.sort(function (a,b) {
        return a.revenue - b.revenue
    })

    return newDrivers
}

function driversByName(drivers) {
   const newDrivers = [...drivers]
   //'check'.localeCompare('against');
    return newDrivers.sort( function(a,b)  {
        return a.name.localeCompare(b.name)
    })

    return newDrivers
}

function totalRevenue(drivers) {
    const total = drivers.reduce( function (sum, name) {
        return sum += name.revenue
    }, 0)
    return total
}

function averageRevenue(drivers) {
    const total = totalRevenue(drivers)
    return total / drivers.length
}