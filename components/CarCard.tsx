import { TCar } from '@/types';

const CarCard = ({ car }: { car: TCar }) => {
  console.log(car);
  return <div>CarCard</div>;
};

export default CarCard;
