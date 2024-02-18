import logo from './logo.svg';
import './App.css';
import carCard from './components/carCard';

function App() {
  

  
const cars = [  {
id: 1,
name: 'Ford',
img: 'https://image.cnbcfm.com/api/v1/image/104623144-New-Ford-Mustang.jpg?v=1529475844&w=1600&h=900',

infoColor: {
  borderColor: 'blue',
  borderWidth: '5px',
  borderStyle: 'solid'
}},
{
id: 2,
name: 'BMW',
img: 'https://cache.bmwusa.com/cosy.arox?pov=walkaround&brand=WBBM&vehicle=248J&client=byo&paint=P0300&fabric=FVASW&sa=S01E4,S02VW,S0302,S0319,S0322,S03AG,S03DZ,S0402,S0415,S0416,S0453,S04FM,S04HB,S04L8,S04NB,S05AC,S05AZ,S06AC,S06AK,S06C4,S06NW,S06U3,S06WD,S0710,S0715,S0760,S0775&quality=70&bkgnd=transparent&resp=png&angle=60',
infoColor: {
  borderColor: 'Orange',
  borderWidth: '5px',
  borderStyle: 'solid'
}
},  {
id: 3,
name: 'Audi',
img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQJvMG6ejHNpxwhWlljjU4CkYZau03XzpQ8Q&usqp=CAU',
infoColor: {
  borderColor: 'red',
  borderWidth: '5px',
  borderStyle: 'solid'
}
}
];

return  (<div className="App">
<div className='carCardContainer'>
<Car list={cars} />
</div>
</div>)
}
const Car = props =>
  props.list.map(item => (
    <div key={item.id} className='carCard' style={item.infoColor}>
      <span className='carName'>
        {item.name}
      </span>

<span className='carImg'>
  <img src={item.img } alt="car" />
</span>
    </div>
  ));
export default App;


/*
const people = [{
  id: 0,
  name: 'Creola Katherine Johnson',
  profession: 'mathematician',
}, {
  id: 1,
  name: 'Mario José Molina-Pasquel Henríquez',
  profession: 'chemist',
}, {
  id: 2,
  name: 'Mohammad Abdus Salam',
  profession: 'physicist',
}, {
  name: 'Percy Lavon Julian',
  profession: 'chemist',  
}, {
  name: 'Subrahmanyan Chandrasekhar',
  profession: 'astrophysicist',
}];

const stories = [
  {
    title: 'React',
    url: 'https://reactjs.org/',
    author: 'Jordan Walke',
    num_comments: 3,
    points: 4,
    objectID: 0,
  },
  {
    title: 'Redux',
    url: 'https://redux.js.org/',
    author: 'Dan Abramov, Andrew Clark',
    num_comments: 2,
    points: 5,
    objectID: 1,
  },
];*/