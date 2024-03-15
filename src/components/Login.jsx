import React, { useEffect, useState } from "react";
import Image from "../assets/image.png";
import Logo from "../assets/logo.png";
import {
  LoginSocialGoogle,
  LoginSocialFacebook,
  LoginSocialLinkedin,
} from 'reactjs-social-login';

import {
  FacebookLoginButton,
  GoogleLoginButton,
  LinkedInLoginButton,
} from 'react-social-login-buttons';

import { useNavigate } from "react-router-dom";

import axios from "axios";

const Login = () => {
  const [provider, setProvider] = useState('');
  const navigate = useNavigate()



  return (
    <div className="login-main">
      <div className="login-left">
        <img src={Image} alt="" />
      </div>
      <div className="login-right">
        <div className="login-right-container">
          <div className="login-logo">
            <img src={Logo} alt="" />
          </div>
          <div className="login-center">
            <h2>Welcome back!</h2>


            <LoginSocialFacebook
              appId={'7472866436069747' || ''}
              onResolve={({ provider, data }) => {
                setProvider(provider);
                localStorage.setItem('user', JSON.stringify(data));
                navigate('home')
              }}
              onReject={(err) => {
                console.log(err);
              }}
            >
          <FacebookLoginButton />
        </LoginSocialFacebook>

        <LoginSocialGoogle
        client_id="237632193869-u21ji3c174d0t73kbnvasc17qjt66gni.apps.googleusercontent.com"
        onResolve={({provider, data})=>{
          setProvider(provider);
          localStorage.setItem('user', JSON.stringify(data));
          navigate('home')
        }}
        onReject={(err)=>{
          console.logI(err);
        }}
        >
          <GoogleLoginButton/>
        </LoginSocialGoogle>

        <LoginSocialLinkedin
        client_id="862sd6edqggp5y"
        client_secret="XrJ2CNGlwSBCh5Rw"
        redirect_uri="http://localhost:3000/home"
        onResolve={({provider, data})=>{
          setProvider(provider);
          console.log(data, "Success linkedin")
        }}
        onReject={(err)=>{
          console.logI(err);
        }}
        >
          <LinkedInLoginButton/>
        </LoginSocialLinkedin>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
