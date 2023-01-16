import { Action } from "interface/action"
import type { NextApiRequest, NextApiResponse } from "next"

export default function handler(
	req: NextApiRequest,
	res: NextApiResponse<Action[]>
) {
	res.status(200).json(
		[
			{ image: "ali.svg", actorName: "Ali", verb: "created", object: "issue" },
			{
				image: "medium.svg",
				actorName: "Ali",
				verb: "set",
				object: "priority",
				final: "Medium",
			},
			{
				image: "pen.svg",
				actorName: "Ali",
				verb: "updated",
				object: "description of the issue",
			},
			{
				image: "pen.svg",
				actorName: "Ali",
				verb: "updated",
				object: "name of the issue",
				initial: "Release Instatus",
				final: "Launch Instatus",
			},
			{
				image: "baraa.svg",
				actorName: "Ali",
				verb: "assigned",
				object: "the issue",
				final: "hey.baraa",
			},
			{
				image: "progress.svg",
				actorName: "Baraa",
				verb: "changed",
				object: "the status",
				initial: "Todo",
				final: "In Progress",
			},
			{
				image: "review.svg",
				actorName: "Github",
				verb: "changed",
				object: "the status",
				initial: "In Progress",
				final: "In Review",
			},
		].reverse()
	)
}
