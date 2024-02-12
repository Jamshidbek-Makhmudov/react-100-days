import { Image, ImageProps } from '@chakra-ui/react';
import bullsEye from '../../assets/bulls-eye.webp';
import thumbsUp from '../../assets/thumbs-up.webp';
import meh from '../../assets/meh.webp';
import { EmojiProps } from '../../interfaces';

const Emoji = ({ rating}:EmojiProps) => {
	  if (rating < 3) return null;
  /** this type [key: number]: ImageProps index signature and it says to typescript it can receive any number of key and the keys are numbers this type issue is finding by google by most developrs */
  //this style of coding is better than ugly if statements
  const emojiMap: { [key: number]: ImageProps } = {
    3: { src: meh, alt: 'meh', boxSize: '25px' },
    4: { src: thumbsUp, alt: 'recommended', boxSize: '25px' },
    5: { src: bullsEye, alt: 'exceptional', boxSize: '35px' },
  }
	return (
		<Image {...emojiMap[rating]} />
	)
}
/**
 {...emojiMap[rating]} bu object spread qilib beradi va aynan dynamic kiritlagan key togri kelganini ya'ni rating 3ga teng bolsa objectni key===3 ni spread qilib beradi
 */
export default Emoji