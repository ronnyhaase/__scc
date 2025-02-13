import "./App.css";

function App() {
	return (
		<>
			<h1>Stock Terminal</h1>
			<table width="100%">
				<tbody>
					<tr>
						<td colSpan={2}>
							Symbol <input />
							<button>Search</button>
						</td>
					</tr>
					<tr>
						<td width="50%" style={{ border: "1px solid black" }}>
							"Chart"
						</td>
						<td width="50%">
							<h2>Company Data</h2>
							<table border={1} width="100%">
								<tbody>
									<tr>
										<td>Name</td>
										<td>The Symbol, Co.</td>
									</tr>
									<tr>
										<td>Description</td>
										<td>
											The Symbol, Co. is the ultimate
											symbol for nothing!
										</td>
									</tr>
									<tr>
										<td>Symbol</td>
										<td>SMBL</td>
									</tr>
									<tr>
										<td>Marlet Cap</td>
										<td>0</td>
									</tr>
									<tr>
										<td
											colSpan={2}
											style={{ textAlign: "center" }}
										>
											...
										</td>
									</tr>
								</tbody>
							</table>
						</td>
					</tr>
				</tbody>
			</table>
		</>
	);
}

export default App;
