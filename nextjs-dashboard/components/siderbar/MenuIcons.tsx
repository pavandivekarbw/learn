import Image from "next/image";
import React from "react";

type PropType = {
    src: string;
    alt: string;
};
const MenuIcons: React.FC<PropType> = (props: PropType) => {
    return <Image src={props.src} alt={props.alt} width={24} height={24} />;
};

export default MenuIcons;
