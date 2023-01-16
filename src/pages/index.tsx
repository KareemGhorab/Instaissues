import axios from "axios"
import Row from "components/row"
import React, { useEffect, useState } from "react"

export default function Home() {
	const [actions, setActions] = useState([])
	const [isLoading, setIsLoading] = useState(false)

	useEffect(() => {
		setIsLoading(true)
		axios
			.get("/api")
			.then(({ data }) => setActions(data))
			.finally(() => setIsLoading(false))
	}, [])

	return (
		<div className="h-screen flex justify-center items-center">
			<main>
				<h2 className="font-bold text-xl mb-3">Activity</h2>
				<section className="grid grid-cols-1 gap-6">
					{isLoading ? (
						<p>Loading...</p>
					) : (
						actions.map((action, idx) => <Row key={idx} action={action} />)
					)}
				</section>
			</main>
		</div>
	)
}
