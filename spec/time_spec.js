Screw.Unit(function() {

  describe("Time", function() {

    describe(".current_date", function() {
    
      it("should return a Date object", function() {
          expect(Time.current_date()).to(be_an_instance_of, Date);
      });

    });

    describe(".now", function() {

      it("should return the current time in milliseconds", function() {
        var date = new Date();
        mock(date).should_receive('getTime').and_return(123);
        mock(Time).should_receive('current_date').and_return(date);
        expect(Time.now()).to(equal, 123);
      });

    });

  });

});