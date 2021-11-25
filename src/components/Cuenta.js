import React, { Component } from 'react';
import withFirebaseAuth from 'react-with-firebase-auth'
import firebaseConfig from '../firebaseConfig';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import google from '../assets/img/google.png'


const firebaseApp = firebase.initializeApp(firebaseConfig);

class Cuenta extends Component {

 
    render() {

        const {
            user,
            signOut,
            signInWithGoogle,
          } = this.props;
        
        return (
            <div>
                <div className="cabeza"><p>Cuenta</p></div>
                <div className="contenedor">
                    <div className="perfil">
                {
              user
                ?<div>
                <img src={user.photoURL} alt="" /> 
                <h2>{user.displayName}</h2>
                <p>{user.email}</p>
                </div> 
                
                :<div className="otracosa">
                    <img src={google} alt="" /> 
                    <p>Inicia Sesion</p>
                </div> 
                
            }
  
            {
              user
                ? <button onClick={signOut}>Cerrar Sesion</button>
                : <button onClick={signInWithGoogle}>Inicia Sesion</button>
            }
                    </div>
                </div>
            </div>

        );
    }


}
const firebaseAppAuth = firebaseApp.auth();

const providers = {
  googleProvider: new firebase.auth.GoogleAuthProvider(),
};

export default withFirebaseAuth({
  providers,
  firebaseAppAuth,
})(Cuenta);