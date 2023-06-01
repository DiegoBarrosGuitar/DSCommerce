import React, { JSX } from 'react';
import "./style.css";

type Props = {
  text: string;
}

export default function ButtonPrimary({text} : Props){

    return (
        <div className="dsc-btn dsc-btn-blue">
        {text}
      </div>
    );
}