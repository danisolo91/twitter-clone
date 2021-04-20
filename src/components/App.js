import { useEffect, useState } from 'react';
import { database } from '../firebase';

const App = () => {

    const [person, setPerson] = useState(null);

    useEffect(() => {
        database.example.get().then(results => {
            setPerson(database.formatDoc(results.docs[0]));
        })
    }, []);

    return (
        <>
            Hello {person ? person.name : <>...</>}!
        </>
    );
};

export default App;