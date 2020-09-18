import React, { useContext, useState } from 'react';
import { Button, Card, Container } from 'react-bootstrap';
import fbIcon from '../../Icon/fb.png';
import googleIcon from '../../Icon/google.png';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from '../../firebase.config';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';


firebase.initializeApp(firebaseConfig);
const LogIn = () => {
    const[newUser,setNewUser]=useState(false);
    const [user,setUser] = useState({
        isSignedIn: false,
        name: '',
        email: '',
        password: '',
        error: '',
        success: false
    })
    const [loggedInUser,setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };


    const fbProvider = new firebase.auth.FacebookAuthProvider();
    const googleProvider =  new firebase.auth.GoogleAuthProvider();
    const handleBlur = (e) => {
        let isFormValid = true;
        if(e.target.name==='email') {
            isFormValid = /\S+@\S+\.\S+/.test(e.target.value);
        }
        if(e.target.name==='password') {
            const isPasswordValid = e.target.value.length>6;
            const passwordHasNumber = /\d{1}/.test(e.target.value);
            isFormValid =isPasswordValid && passwordHasNumber;
            var passwordValue = e.target.value;
        }
        if(e.target.name === 'confirm-password') {
            let confirmPasswordValue = e.target.value;
            isFormValid =(confirmPasswordValue === passwordValue)
        }
        if(isFormValid) {
            const newUserInfo = {...user};
            newUserInfo[e.target.name]=e.target.value;
            setUser(newUserInfo);
        }
    }
    const handleSubmit = (e) => {
        console.log(user.email,user.password);
        if(newUser && user.email && user.password) {
            firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
                .then(res => {
                    const newUserInfo = {...user};
                    newUserInfo.error = '';
                    newUserInfo.successs = true;
                    setUser(newUserInfo);
                    console.log(res)
                })
                .catch( error => {
                    const newUserInfo={...user}
                    newUserInfo.error=error.message;
                    newUserInfo.successs=false;
                    setUser(newUserInfo);
                });
        }
        if(!newUser && user.email && user.password) {
            firebase.auth().signInWithEmailAndPassword(user.email, user.password)
                .then(res => {
                    const newUserInfo = {...user};
                    newUserInfo.error = '';
                    newUserInfo.successs = true;
                    setUser(newUserInfo);
                    setLoggedInUser(newUserInfo);
                    history.replace(from);
                })
                .catch( error => {
                    const newUserInfo={...user}
                    newUserInfo.error=error.message;
                    newUserInfo.successs=false;
                    setUser(newUserInfo);
                });
        }
        e.preventDefault();
    }
    const handleFbSignIn = () => {
        firebase.auth().signInWithPopup(fbProvider)
        .then(res => {
            const newUserInfo = {...user};
            newUserInfo.error = '';
            newUserInfo.successs = true;
            newUserInfo.name=res.user.displayName;
            setUser(newUserInfo);
            setLoggedInUser(newUserInfo);
            history.replace(from);
        })
        .catch( error => {
            const newUserInfo={...user}
            newUserInfo.error=error.message;
            newUserInfo.successs=false;
            setUser(newUserInfo);
        });
    }
    const handleGoogleSignIn = () => {
        firebase.auth().signInWithPopup(googleProvider)
        .then(res => {
            const newUserInfo = {...user};
            newUserInfo.error = '';
            newUserInfo.successs = true;
            newUserInfo.name=res.user.displayName;
            setUser(newUserInfo);
            setLoggedInUser(newUserInfo);
            history.replace(from);
            
        })
        .catch( error => {
            const newUserInfo={...user}
            newUserInfo.error=error.message;
            newUserInfo.successs=false;
            setUser(newUserInfo);
        });
    }


    return (
        <div className="sign-up-form">
            <Container>
                <Card style={{width:'400px'}} className="m-auto">
                    <h3 style={{color: "black",textAlign:"center"}}>{newUser ? "Create an account" : "Log In"}</h3>
                    <form onSubmit={handleSubmit}>
                        {newUser && <input required type="text" name="first-name" onBlur={handleBlur} placeholder="First Name"/> }
                        {newUser && <input required type="text" name="last-name" onBlur={handleBlur} placeholder="Last Name"/>}
                        <input required type="email" name="email" onBlur={handleBlur} placeholder="Email"/>
                        <input required type="password" name="password" onBlur={handleBlur} placeholder="Password"/>
                        {newUser && <input required type="password" name="confirm-password" onBlur={handleBlur} placeholder="Confirm Password"/>}
                        <input style={{backgroundColor:"green",color:"white"}} type="submit" value={newUser ? "Create an account" : "Log In"}/>
                        <p style={{color:"black",textAlign:"center"}}>{newUser?"Already have an account?":"Don't Have an account?"}<span style={{textDecoration:"underline",cursor:"pointer",color:"blue"}} onClick={()=>{setNewUser(!newUser)}}>{newUser?"login":"Create an account"}</span></p>
                    </form>
                </Card>
                <Card style={{width:'400px'}} className="m-auto">
                    <h2 style={{textAlign:"center"}}>Or</h2>
                    <br/>
                    <Button onClick={handleFbSignIn} style={{}}><img style={{width:"20px",height:"20px",border:"none"}} src={fbIcon} alt=""/> Continue with Facebook</Button>
                    <br/>
                    <Button  onClick={handleGoogleSignIn}><img style={{width:"20px",height:"20px",border:"none"}} src={googleIcon} alt=""/> Continue with Google</Button>
                    <p style={{color:"red"}}>{user.error}</p>
                    {
                        user.successs && <p style={{color:"green"}}>User{newUser ?'Created':'Logged In'} Successfully</p>
                    }
                </Card>
            </Container>
            
        </div>
    );
};

export default LogIn;