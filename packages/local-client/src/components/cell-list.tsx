import { Fragment, useEffect } from "react";
import { useTypedSelector } from "../hooks/use-typed-selector";
import CellListItem from "./cell-list-item";
import AddCell from "./add-cell";
import { useActions } from "../hooks/use-actions";
import "./cell-list.css";

const CellList: React.FC = () => {
	const cells = useTypedSelector(({ cells: { order, data } }) =>
		order.map((id) => data[id]),
	);
	const { FetchCells, saveCells } = useActions();
	useEffect(() => {
		FetchCells();
	}, []);
	useEffect(() => {
		saveCells();
	}, []);

	const renderedCells = cells.map((cell) => (
		<Fragment key={cell.id}>
			<CellListItem cell={cell} />
			<AddCell previoustCellId={cell.id} />
		</Fragment>
	));

	return (
		<div className="cell-list">
			<AddCell forceVisible={cells.length === 0} previoustCellId={null} />
			{renderedCells}
		</div>
	);
};

export default CellList;
