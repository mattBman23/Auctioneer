import React from 'react';
import Countdown from 'react-countdown';

export const AcutionCard = () => {
  var countDownDate = new Date('Jan 5, 2022 15:37:25').getTime();

  return (
    <div className="col">
      <div className="card shadow-sm">
        <div style={{ height: '225px' }} className="w-100 bg-secondary">
          <p className="text-center text-light">Hey</p>
        </div>

        <div className="card-body">
          <p className="card-text">
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </p>
          <div className="d-flex justify-content-between align-items-center">
            <div className="btn-group">
              <button type="button" className="btn btn btn-outline-secondary">
                Bid
              </button>
              <button type="button" className="btn btn btn-outline-secondary">
                Edit
              </button>
            </div>
            <Countdown
              date={countDownDate}
              renderer={({ days, hours, minutes, seconds }) => {
                return (
                  <h5>
                    {days * 24 + hours} hr : {minutes} min : {seconds} sec
                  </h5>
                );
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
