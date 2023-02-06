import Animaiton from './animation'
import Link from 'next/link'


export default function Hero() {
	return (

	<>
		<div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
		  <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
			안녕하세요 민싱봇 입니다!
			<br className="hidden lg:inline-block"/>
			미쳤습니까 휴먼?
		  </h1>
		  <p className="mb-8 leading-relaxed">Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.</p>
		  <div className="flex justify-center">
			<Link href="/projects" className="btn-project">
				프로젝트 보러가기

			</Link>
		</div>
		</div>
		<div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
			<Animaiton/>
		</div>
	</>
	)
}