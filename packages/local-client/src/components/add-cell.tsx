import "./add-cell.css";
import { useActions } from "../hooks/use-actions";

interface AddCellProps {
	previoustCellId: string | null;
	forceVisible?: boolean;
}

const AddCell: React.FC<AddCellProps> = ({ forceVisible, previoustCellId }) => {
	const { insertCellAfter } = useActions();

	return (
		<div className={`add-cell ${forceVisible && "force-visible"}`}>
			<div className="add-buttons">
				<button
					className="button is-rounded is-primary is-small"
					onClick={() => insertCellAfter(previoustCellId, "code")}
				>
					<span className="icon is-small">
						<i className="fas fa-plus" />
					</span>
					<span>Code</span>
				</button>
				<button
					className="button is-rounded is-primary is-small"
					onClick={() => insertCellAfter(previoustCellId, "text")}
				>
					<span className="icon is-small">
						<i className="fas fa-plus" />
					</span>
					<span>Text</span>
				</button>
			</div>
			<div className="divider"></div>
		</div>
	);
};

export default AddCell;
