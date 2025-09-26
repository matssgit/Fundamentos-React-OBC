import propTypes from "prop-types";

Input.propTypes = {
	passwordSize: propTypes.number.isRequired,
	setPasswordSize: propTypes.func.isRequired,
};

export default function Input(props) {
	return (
		<input
			type="number"
			id="passwordSize"
			min={1}
			value={props.passwordSize}
			onChange={(ev) => props.setPasswordSize(+ev.target.value)}
		/>
	);
}
