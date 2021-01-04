import * as React from 'react';
import Calendar from 'react-calendar';

const Sample: React.FC = () => {
  const [value, onChange] = React.useState(new Date());

  return (
    <div className="Sample">
      <header>
        <h1>react-calendar sample</h1>
      </header>
      <div className="Sample__container">
        <main className="Sample__container__content">
          <Calendar onChange={onChange} showWeekNumbers value={value} />
        </main>
      </div>
    </div>
  );
};

export default Sample;
