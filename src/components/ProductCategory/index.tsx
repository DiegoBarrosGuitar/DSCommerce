import React, { JSX } from 'react';
import "./style.css";

type Props = {
  name: string;
}

export default function ProductCategory({name}: Props) {
  return (
    <div className="dsc-category">
      Eletrônicos
    </div>
  );
}