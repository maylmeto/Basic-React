import React from "react";
import "./App.css";
const App = () => <PersonList />;

const PersonList = () => {
  const people = [
    {
      img: 76,
      name: "john",
      job: "developer"
    },
    {
      img: 77,
      name: "josh",
      job: "driver"
    },
    {
      img: 78,
      name: "jake",
      job: "designer"
    }
  ];

  return (
    <section>
      <Person person={people[0]} />;
      <Person person={people[1]}>
        Josh is an experienced driver, has been driving past 10 yrs.
      </Person>
      ;
      <Person person={people[2]} />;
    </section>
  );
};

const Person = props => {
  const { img, name, job } = props.person;
  const { children } = props;
  const url = `https://randomuser.me/api/portraits/thumb/men/${img}.jpg`;
  return (
    <div className="person">
      <img src={url} alt="" />

      <div>
        <h3>{name}</h3>
        <h3>{job}</h3>
        {children}
      </div>
    </div>
  );
};

export default App;
