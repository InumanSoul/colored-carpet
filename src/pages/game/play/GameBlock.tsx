import foots from '../../../assets/foots.svg'
import hands from '../../../assets/hands.svg'
import rightFoot from '../../../assets/right-foot.svg'
import leftFoot from '../../../assets/left-foot.svg'
import rightHand from '../../../assets/right-hand.svg'
import leftHand from '../../../assets/left-hand.svg'
import { motion } from 'framer-motion'

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
    <motion.div 
      key={item}
      initial={{ scale: 0.7, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0.7, opacity: 0 }}
      className={
        `rounded-lg w-full h-full flex items-center justify-center text-center text-3xl ${color} ${classes}`
      }
    >
      <img src={availableItems[item as keyof typeof availableItems]} alt={item} className='size-28 object-contain' />
    </motion.div>
  )
}

export default GameBlock