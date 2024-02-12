import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
} from "react-icons/fa";
import { MdPhoneIphone } from 'react-icons/md';
import { SiNintendo } from 'react-icons/si';
import { BsGlobe } from 'react-icons/bs';
import { HStack, Icon } from "@chakra-ui/react";
import { IconType } from "react-icons";
import { PlatformIconListProps } from "../../interfaces";

const PlatformIconList = ({ platforms = [] }: PlatformIconListProps) => {
    /** this type [key: number]: ImageProps index signature and it says to typescript it can receive any number of key and the keys are numbers this type issue is finding by google by most developrs */
  //this style of coding is better than ugly if statements
	  const iconMap: { [key: string]: IconType } = { 
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    nintendo: SiNintendo,
    mac: FaApple,
    linux: FaLinux, 
    android: FaAndroid,
    ios: MdPhoneIphone,
    web: BsGlobe
  }
	return (
		   <HStack marginY={1}> 
      {platforms.map((platform) => (
        <Icon key={platform.id} as={iconMap[platform.slug]} color='gray.500'/>
      ))}
    </HStack>
	)
}

export default PlatformIconList;




/**marginY={1}
 * chakra ui dan default margin 4pxga teng biz 1 bersak demak 4px joy tashab beradi agar 2 bersak 8 va hokazo
 */


/**manashu typescript error eng weird errorlardan biri buni kopchilik dasturchilar google qilib topadi yechimi :{ [key: string]: IconType }
 * 
 * Element implicitly has an 'any' type because expression of type 'string' can't be used to index type '{ pc: IconType; playstation: IconType; xbox: IconType; nintendo: IconType; mac: IconType; linux: IconType; android: IconType; ios: IconType; web: IconType; }'.
  No index signature with a parameter of type 'string' was found on type '{ pc: IconType; playstation: IconType; xbox: IconType; nintendo: IconType; mac: IconType; linux: IconType; android: IconType; ios: IconType; web: IconType; }' */