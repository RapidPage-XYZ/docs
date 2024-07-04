import rapidpage from '../images/rapidpage.png'
import Image from 'next/image'

// @ts-ignore
export function Logo(props) {
  return (
    <Image src={rapidpage} alt="RapidPage Logo" {...props} />
  )
}
