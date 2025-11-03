import type { AnyAction } from "@reduxjs/toolkit"
import { SET_HEADER_TITLE } from "./actions"

type GeneralState = {
	headerTitle: string
}

const GeneralInitialState: GeneralState = {
	headerTitle: "Sai Rohan Jayaprakash",
}

const generalReducer = (
	state = GeneralInitialState,
	action: AnyAction
): typeof GeneralInitialState => {
	switch (action.type) {
		case SET_HEADER_TITLE:
			return {
				...state,
				headerTitle: action.payload.title,
			}
		default:
			return state
	}
}

export default generalReducer
