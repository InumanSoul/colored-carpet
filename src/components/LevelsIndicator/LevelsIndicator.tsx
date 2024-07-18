import { FaStar } from "react-icons/fa"

const LevelsIndicator = ({ level } : { level: string }) => {
  const levelColors = {
    easy: {
      color: 'text-white',
      qty: 1
    },
    normal: {
      color: 'text-yellow-400',
      qty: 2
    },
    medium: {
      color: 'text-amber-400',
      qty: 3
    },
    hard: {
      color: 'text-red-500',
      qty: 4
    }
  }

  const levels = Array.from({ length: levelColors[level as keyof typeof levelColors].qty })

  return (
    <div className="flex items-center">
      {
        levels.map((_, index) => (
          <FaStar key={index} className={`size-5 ${levelColors[level as keyof typeof levelColors].color}`} />
        ))
      }
      {
        levels.length < 4 &&  
          Array.from({ length: 4 - levels.length }).map((_, index) => (
            <FaStar key={index} className={`size-5 text-slate-500`} />
          ))
      }
    </div>
  )
}

export default LevelsIndicator