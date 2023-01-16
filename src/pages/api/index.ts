import { Action } from "interface/action"
import type { NextApiRequest, NextApiResponse } from "next"

const hoursAgo = (h: number): Date => {
	const date = new Date()
	date.setHours(date.getHours() - h)
	return date
}

export default function handler(
	req: NextApiRequest,
	res: NextApiResponse<Action[]>
) {
	res.status(200).json(
		[
			{
				image: "ali.svg",
				date: hoursAgo(72),
				actorName: "Ali",
				verb: "created",
				object: "issue",
			},
			{
				image: "medium.svg",
				date: hoursAgo(48),
				actorName: "Ali",
				verb: "set",
				object: "priority",
				final: "Medium",
			},
			{
				image: "pen.svg",
				date: hoursAgo(48),
				actorName: "Ali",
				verb: "updated",
				object: "description of the issue",
			},
			{
				image: "pen.svg",
				date: hoursAgo(48),
				actorName: "Ali",
				verb: "updated",
				object: "name of the issue",
				initial: "Release Instatus",
				final: "Launch Instatus",
			},
			{
				image: "baraa.svg",
				date: hoursAgo(24),
				actorName: "Ali",
				verb: "assigned",
				object: "the issue",
				final: "hey.baraa",
			},
			{
				image: "progress.svg",
				date: hoursAgo(24),
				actorName: "Baraa",
				verb: "changed",
				object: "the status",
				initial: "Todo",
				final: "In Progress",
			},
			{
				image: "review.svg",
				date: hoursAgo(1),
				actorName: "Github",
				verb: "changed",
				object: "the status",
				initial: "In Progress",
				final: "In Review",
			},
		].reverse()
	)
}
