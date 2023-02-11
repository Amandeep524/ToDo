module.exports.getDate = getDate;
function getDate () {

    const todDate = new Date();

    const options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    };
    const day = todDate.toLocaleDateString("en-US", options);
    return day;

}
module.exports.getDay = getDay;

function getDay () {

    const todDate = new Date();

    const options = {
        weekday: "long"
    };
    const day = todDate.toLocaleDateString("en-US", options);
    return day;

}