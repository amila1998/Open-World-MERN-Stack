import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';

export default function GuideRoute({ component: Component, ...rest }) {
  const guideSignin = useSelector((state) => state.guideSignin);
  const { guideInfo }=guideSignin;
  return (
    <Route
      {...rest}
      render={(props) =>
        guideInfo ? (
          <Component {...props}></Component>
        ) : (
          <Redirect to="/signin" />
        )
      }
    ></Route>
  );
    }
