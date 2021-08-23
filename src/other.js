const Other = (props) => {
	return (
		<div className="other">
			<fieldset>
				<legend>Other</legend>
				<p>License</p>
				<label for="a">A</label>
				<input type="checkbox" id="a" name="A" checked={props.checkbox.a} onChange={e => props.handleChecked(e.target.checked)}/>
				<label for="a1">A1</label>
				<input type="checkbox" id="a1" name="A1" checked={props.checkbox.a1} onChange={e => props.handleChecked(e.target.checked)}/>
				<label for="a2">A2</label>
				<input type="checkbox" id="a2" name="A2" checked={props.checkbox.a2} onChange={e => props.handleChecked(e.target.checked)}/>
				<label for="b">B</label>
				<input type="checkbox" id="b" name="B" checked={props.checkbox.b} onChange={e => props.handleChecked(e.target.checked)}/>
				<label for="c">C</label>
				<input type="checkbox" id="c" name="C" checked={props.checkbox.c} onChange={e => props.handleChecked(e.target.checked)}/>
				<label for="d">D</label>
				<input type="checkbox" id="d" name="D" checked={props.checkbox.d} onChange={e => props.handleChecked(e.target.checked)}/>
				<label for="e">E</label>
				<input type="checkbox" id="e" name="E" checked={props.checkbox.e} onChange={e => props.handleChecked(e.target.checked)}/>
				<p>Publications</p>
				<textarea name="publications" value={props.input.publications} onChange={e => props.handleChange(e)} placeholder="Author, Title, Editor" cols="50"/>
			</fieldset>
		</div>
	);
}

export default Other;