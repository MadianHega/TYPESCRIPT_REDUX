import {
	SHOW_ALL, 
	SHOW_COMPLETED,
	SHOW_ACTIVE,
} from '../../constants/filtersActionTypes'

import { FilterActionTypes } from '../../types'

interface FiltersState  {
	filter: string
}

const inititalState: FiltersState = { filter: SHOW_ALL }

export default function filterReducer(
	state = inititalState,
	action: FilterActionTypes): FiltersState {
		switch(action.type) {
			case SHOW_ALL:
				return { filter: SHOW_ALL }
			case SHOW_COMPLETED:
				return { filter: SHOW_COMPLETED }
			case SHOW_ACTIVE:
				return { filter: SHOW_ACTIVE }
			default:
				return state
		}
}