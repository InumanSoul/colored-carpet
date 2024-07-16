import foots from '../../../assets/foots.svg'
import hands from '../../../assets/hands.svg'
import rightFoot from '../../../assets/right-foot.svg'
import leftFoot from '../../../assets/left-foot.svg'
import rightHand from '../../../assets/right-hand.svg'
import leftHand from '../../../assets/left-hand.svg'

interface GameBlockProps {
  item: string
  color?: string
  classes?: string
}

const GameBlock = ({ item, color, classes }: GameBlockProps) => {
  const availableItems = {
    'foots': foots,
    'hands': hands,
    'right-foot': rightFoot,
    'left-foot': leftFoot,
    'right-hand': rightHand,
    'left-hand': leftHand,
  }

  return (
    <div className={
      `rounded-lg w-full h-full flex items-center justify-center text-center text-3xl ${color} ${classes}`
    }>
      <img src={availableItems[item as keyof typeof availableItems]} alt={item} className='size-28 object-contain' />
    </div>
  )
}

export default GameBlock