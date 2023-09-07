import {typeGameBoard, typeGameFieldValue} from "../../../shared/types/types.ts";

export type typeGameBoardProps = {
    board: typeGameBoard
    onAddStep: (index: number) => void
}

export type typeGameFieldProps = {
    index: number
    fieldValue: typeGameFieldValue
    onAddStep?: () => void
}
