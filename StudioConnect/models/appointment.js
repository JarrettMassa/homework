module.exports = function(connection, DataTypes) {
    var Appointment = connection.define("Appointment", {
    	studio_id: DataTypes.INTEGER,
        last_name: DataTypes.STRING,
        email: DataTypes.STRING,
        appt_date: DataTypes.DATEONLY,
        appt_time: DataTypes.TIME
    });
    return Appointment;
};