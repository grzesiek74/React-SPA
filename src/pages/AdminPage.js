import React from 'react';
import { Route, Redirect } from 'react-router-dom';


// zmienna symulująca uprawnienia do paelu admina
const permission = false;

 
const AdminPage = () => {
    return ( 
        // sprawdzamy czy użytkownik ma uprawnienia do panelu damina (czy permission jest true), jeśli ma to wyświetli się tekst a jeśli nie to przekieruje użytkownika do ścieżki login (komponent Redirect)
        <Route render={() => (
            permission ? (<h3>Panel admina - dzień dobry!</h3>) : (
                <Redirect to="/login" />
            ) 
        )}/>
     );
}
 
export default AdminPage;