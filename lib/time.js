var Time = {
  current_date: function() {
    return (new Date());
  },

  now: function() {
    return this.current_date().getTime();
  }
};