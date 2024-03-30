import React from "react";

type Props = {
  Attack: Attacks;
};

type Attack = {
  name: string;
  type: string;
  damage: number;
};

export type Attacks = {
  fast: Attack[];
  special: Attack[];
};

const BackCard = ({ Attack }: Props) => {
  return (
    <div className="justify-center">
      <div>Fast</div>
      {Attack.fast.map((value: Attack, index: number) => (
        <div key={index} className="flex flex-row gap-2 justify-between">
          <div>{value.name}</div>
          <div>{value.damage}</div>
          <div>{value.type}</div>
        </div>
      ))}
      <div>Special</div>
      {Attack.special.map((value: Attack, index: number) => (
        <div key={index} className="flex flex-row gap-2 justify-between">
          <div>{value.name} </div>
          <div>{value.damage}</div>
          <div>{value.type}</div>
        </div>
      ))}
    </div>
  );
};

export default BackCard;
