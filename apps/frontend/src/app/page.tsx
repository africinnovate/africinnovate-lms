'use client'
import { useAppSelector } from '@/lib/hooks'

export default function Home() {
	const theme = useAppSelector(
		(state: { theme: { themeState: any } }) => state.theme.themeState
	)
	console.log(!theme)
	return (
		<div
			className={` ${
				!theme ? 'white' : 'text-red-500'
			} text-center md:text-2xl mb-8 text-lg`}
		>
			<p>Hello</p>
		</div>
	)
}
