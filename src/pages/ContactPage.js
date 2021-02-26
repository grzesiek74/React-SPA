import React from 'react';
import '../styles/ContactPage.css';
import { Prompt } from 'react-router-dom';
// komponent Prompt - wymaga dwóch atrybutów: 1. kiedy ma się coś wydarzyć; 2. jaka ma być informacja; Prompt następuje kiedy występuje zmiana ścieżki 

class ContactPage extends React.Component {
    state = { 
        value: '',
        isEmpty: true,  // opcjonalnie, właściwość odnosząca się do wypełnienia formularza, na początku true (pusty formularz)
     }

     handleChange = e => {
         if(e.target.value.length > 0) {
            this.setState({
                value: e.target.value,
                isEmpty: false
            })
         } else
        this.setState({
            isEmpty: true
        })
     }

     handleSubmit = e => {
         e.preventDefault();
        //  czyszczenie pola tekstowego po wciśnięciu przycisku, i właściwosci isEmpty na true
         this.setState({
             value: '',
             isEmpty: true,
         })
     }

    render() { 
        return ( 
            <div className="contact">
                <form onSubmit={this.handleSubmit}>
                    <h3>Skontaktuj się z nami</h3>
                    <textarea value={this.state.value} onChange={this.handleChange} placeholder="Twoja wiadomość..."></textarea>
                    <button>Wyślij</button>
                </form>
                <Prompt
                // kiedy (when) value jest true (czyli coś jest zapisane) wtedy wykona się Prompt i pojawi się wiadomość
                    // when={this.state.value}
                    when={!this.state.isEmpty}
                    message='Masz niewypełniony formularz. Czy na pewno chcesz opuścić tę stronę?'
                 />
            </div>
         );
    }
}
 
export default ContactPage;