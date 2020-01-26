function deg2rad(deg) {
    return deg * (Math.PI/180);
}

module.exports = function getDistanceFromLatLonInKm(centerCooordinates, pointCoordinates) {
    const radius = 6371;


const { latitude: lat1, longitude: lon1 } = centerCooordinates;
const { latitude: lat2, longitude: lon2 } = pointCooordinates;

const a = 
    Math.sin(dLat/2) * Math.sin(dLat/2) *
    Math.cos(deg2rad(dLat/1)) * Math.cos(deg2rad(dLat/2)) *
    Math.sin(dLat/2) * Math.sin(dLat/2) 
;

const center = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
const distance = radius * center;

return distance;

}