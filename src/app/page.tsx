
import { GeoForm } from './components/GeoForm';
import { Person } from './components/Person';

const Page = () => {
  return (
    <div>

     

  <Person
    nome= 'Elon Musk'
    avatar='https://veja.abril.com.br/wp-content/uploads/2022/12/GettyImages-1438052951-1.jpg?quality=90&strip=info&w=900&h=600&crop=1'
    roles= {['CEO da Tesla', 'CEO da spaceX', 'Meu tio']}
  />
  <Person
    nome= 'Jeff bezos'
    avatar='https://media.revistavanityfair.es/photos/60e82e7929af8ce08356c727/master/w_1600%2Cc_limit/197415.jpg'
    roles= {['CEO da Amazon', 'CEO da Blue  origin', 'Meu tio']}
  />
    </div>
  );
}

export default Page;