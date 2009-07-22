Number.prototype.second = function() {
  return this;
};

Number.prototype.seconds = function() {
  return this.second();
};

Number.prototype.minute = function() {
  return this.seconds() * 60;
};

Number.prototype.minutes = function() {
  return this.minute();
};

Number.prototype.hour = function() {
  return this.minutes() * 60;
};

Number.prototype.hours = function() {
  return this.hour();
};

Number.prototype.day = function() {
  return this.hours() * 24;
};

Number.prototype.days = function() {
  return this.day();
};

Number.prototype.week = function() {
  return this.days() * 7;
};

Number.prototype.weeks = function() {
  return this.week();
};

Number.prototype.month = function() {
  return this.days() * 30;
};

Number.prototype.months = function() {
  return this.month();
};

Number.prototype.year = function() {
  return this.days() * 365;
};

Number.prototype.years = function() {
  return this.year();
};