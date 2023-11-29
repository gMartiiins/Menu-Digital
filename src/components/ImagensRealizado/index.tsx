import {  BurgerImg } from './styles';
import  bugerOne from '../../../assets/burgerOne.png';
import  bugerTwo from '.../../../assets/burgerTwo.png';
import  bugerThree from '../../../assets/burgerThree.png';
import  bugerFour from '../../../assets/burgerFour.png';
import  bugerFive from '../../../assets/burgerFive.png';
import  bugerSix from '.../../../assets/burgerSix.png';


export function ImageOne(){
  return ( 
    <BurgerImg source = { bugerOne } />
 );
};
export function ImageTwo(){
    return (          
      <BurgerImg source = { bugerTwo } /> 
  );
};
export function ImageThree(){
    return (  
      <BurgerImg source = { bugerThree } /> 
  );
};
export function ImageFour(){
    return (   
      <BurgerImg source = { bugerFour } /> 
  );
};
export function ImageFive(){
  return (   
    <BurgerImg source = { bugerFive } /> 
  );
};
export function ImageSix(){
  return (      
    <BurgerImg source = { bugerSix } /> 
  );
};