const launches = new Map();

let latestFlightNumber = 100;

const launch = {
    flightNumber: 100,
    mission: 'kepler Exploration X',
    launchDate: new Date('December 20,2023'),
    rocket: 'Explorer ISCHECK',
    target: 'kepler-224 b',
    upcoming: true,
    success: true,
    customer: ['Nasa', 'Ztm']
}

launches.set(launch.flightNumber, launch);

function existsLaunchWithId(launchId) {
    return launches.has(launchId);
}

function getAllLaunches() {
    return Array.from(launches.values());
}

function abortLaunchById(launchId) {
    const aborted=launches.get(launchId);
    aborted.upcoming=false;
    aborted.success=false;
    return aborted;
}

function addNewLaunches(launch) {
    latestFlightNumber++;
    launches.set(latestFlightNumber,
        Object.assign(launch, {
            flightNumber: latestFlightNumber,
            upcoming: true,
            success: true,
            customer: ['Nasa', 'Ztm']
        }
        )
    );

}

module.exports = {
    abortLaunchById,
    existsLaunchWithId,
    getAllLaunches,
    addNewLaunches,
}

