import { Action } from "interface/action"
import Image from "next/image"
import React from "react"

export default function Row(props: { action: Action }) {
	const {
		action: { actorName, final, image, initial, object, verb },
	} = props
	return (
		<article className="flex gap-5 items-center">
			<figure>
				<Image src={`${image}`} width={24} height={24} alt={"Action Image"} />
			</figure>
			<p>
				<span className="font-bold">{actorName} </span>
				<span>{verb} </span>
				<span>the {object} </span>
				{initial && (
					<span>
						from <span className="font-bold">{initial} </span>
					</span>
				)}
				{final && (
					<span>
						to <span className="font-bold">{final} </span>
					</span>
				)}
			</p>
		</article>
	)
}
