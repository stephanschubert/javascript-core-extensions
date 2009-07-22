Date.distance_of_time_in_words = function(from_time, to_time, include_seconds, options) {

  // Default values

  to_time = to_time || 0;
  options = options || {};
  include_seconds = include_seconds || false;

  //

  var distance_in_minutes = Math.round(Math.abs(to_time - from_time) / 60);
  var distance_in_seconds = Math.round(Math.abs(to_time - from_time));

  if(distance_in_minutes >= 45 && distance_in_minutes <= 89) {
    return "about 1 hour";
  }
};