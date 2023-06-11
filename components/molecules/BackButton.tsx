import Image from 'next/image';
import backButtonPng from "public/images/back-button.png";

const BackButton = () => <Image src={backButtonPng} width={30} height={30} alt="back"/>;


export default BackButton;
