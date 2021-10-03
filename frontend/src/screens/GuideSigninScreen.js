import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { guidesignin } from '../actions/guideAction';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';

export default function GuideSigninScreen(props) {
  const [email, setGEmail] = useState('');
  const [password, setGPassword] = useState('');
  const redirect = props.location.search
    ? props.location.search.split('=')[1]
    : '/';

  const guideSignin = useSelector((state) => state.guideSignin);
  const { guideInfo, loading, error } = guideSignin;

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(guidesignin(email, password));//TODO: signIn action
  };
  useEffect(() => {
    if (guideInfo) {
      props.history.push(redirect);
    }
  }, [props.history, redirect, guideInfo]);
  return (
    <div>
      <form className="form" onSubmit={submitHandler}>
        <div>
          <h1>Guide Sign In</h1>
        </div>
        {loading && <LoadingBox></LoadingBox>}
        {error && <MessageBox variant="danger">{error}</MessageBox>}
        <div>
          <label htmlFor="email">Guide Email address</label>
          <input
            type="email"
            id="email"
            placeholder="Enter email"
            required
            onChange={(e) => setGEmail(e.target.value)}
          ></input>
        </div>
        <div>
          <label htmlFor="password">Guide Password</label>
          <input
            type="password"
            id="password"
            placeholder="Enter password"
            required
            onChange={(e) => setGPassword(e.target.value)}
          ></input>
        </div>
        <div>
          <label />
          <button className="primary" type="submit">
            Guide Sign In
          </button>
        </div>
        <div>
          <label />
          <div>
            New Guide?{' '}
            <Link to={`/guideregister?redirect=${redirect}`}>
              Register As a Guide
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
}