import React from 'react';

const Dashboard = () => {
	return (

	
			
				<div className="container-fluid" style={{ minHeight: 723 }}>
					<div className="row">
						<div className="col-md-12">
							<div className="row main-card">
								<div className="swiper swiper-initialized swiper-horizontal mySwiper-counter position-relative overflow-hidden swiper-backface-hidden">
									<div className="swiper-wrapper">
										<div
											className="swiper-slide swiper-slide-active"
											style={{ width: "240.75px", marginRight: 30 }}
										>
											<div className="card card-box bg-secondary bg-secondary">
												<div className="card-header border-0 pb-0">
													<div className="chart-num">
														<p>
															<i className="fa-solid fa-sort-down me-2" />
															4%(30 days)
														</p>
														<h2 className="font-w600 mb-0">$65,123</h2>
													</div>
													<div className="dlab-swiper-circle">

													</div>
												</div>
												<div className="card-body p-0">
													<div id="widgetChart1" className="chart-primary">
														<div
															options="[object Object]"
															series="[object Object]"
															type="line"
															height={70}
															width={500}
															style={{ minHeight: 70 }}
														>
															<div
																id="apexchartsxj0bfwy9"
																className="apexcharts-canvas apexchartsxj0bfwy9 apexcharts-theme-light"
																style={{ width: 500, height: 70 }}
															>
																{/* <svg
																	id="SvgjsSvg1903"
																	width={500}
																	height={70}
																	xmlns="http://www.w3.org/2000/svg"
																	version="1.1"
																	xmlnsXlink="http://www.w3.org/1999/xlink"
																	xmlns:svgjs="http://svgjs.dev"
																	
																
																	transform="translate(0, 0)"
																	style={{ background: "transparent" }}
																>
																	<foreignObject x={0} y={0} width={500} height={70}>
																		<div
																				className="apexcharts-legend"
																			xmlns="http://www.w3.org/1999/xhtml"
																			style={{ maxHeight: 35 }}
																		/>
																	</foreignObject>
																	<g
																		id="SvgjsG1936"
																		className="apexcharts-yaxis"
																		rel={0}
																		transform="translate(-18, 0)"
																	/>
																	<g
																		id="SvgjsG1905"
																		className="apexcharts-inner apexcharts-graphical"
																		transform="translate(-1, 3)"
																	>
																		<defs id="SvgjsDefs1904">
																			<clipPath id="gridRectMaskxj0bfwy9">
																				<rect
																					id="SvgjsRect1907"
																					width={511}
																					height={74}
																					x={-5}
																					y={-5}
																					rx={0}
																					ry={0}
																					opacity={1}
																					strokeWidth={0}
																					stroke="none"
																					strokeDasharray={0}
																					fill="#fff"
																				/>
																			</clipPath>
																			<clipPath id="forecastMaskxj0bfwy9" />
																			<clipPath id="nonForecastMaskxj0bfwy9" />
																			<clipPath id="gridRectMarkerMaskxj0bfwy9">
																				<rect
																					id="SvgjsRect1908"
																					width={505}
																					height={68}
																					x={-2}
																					y={-2}
																					rx={0}
																					ry={0}
																					opacity={1}
																					strokeWidth={0}
																					stroke="none"
																					strokeDasharray={0}
																					fill="#fff"
																				/>
																			</clipPath>
																		</defs>
																		<g id="SvgjsG1914" className="apexcharts-grid">
																			<g
																				id="SvgjsG1915"
																				className="apexcharts-gridlines-horizontal"
																				style={{ display: "none" }}
																			>
																				<line
																					id="SvgjsLine1918"
																					x1={0}
																					y1={0}
																					x2={501}
																					y2={0}
																					stroke="#eeeeee"
																					strokeDasharray={0}
																					strokeLinecap="butt"
																					className="apexcharts-gridline"
																				/>
																				<line
																					id="SvgjsLine1919"
																					x1={0}
																					y1={64}
																					x2={501}
																					y2={64}
																					stroke="#eeeeee"
																					strokeDasharray={0}
																					strokeLinecap="butt"
																					className="apexcharts-gridline"
																				/>
																			</g>
																			<g
																				id="SvgjsG1916"
																				className="apexcharts-gridlines-vertical"
																				style={{ display: "none" }}
																			/>
																			<line
																				id="SvgjsLine1921"
																				x1={0}
																				y1={64}
																				x2={501}
																				y2={64}
																				stroke="transparent"
																				strokeDasharray={0}
																				strokeLinecap="butt"
																			/>
																			<line
																				id="SvgjsLine1920"
																				x1={0}
																				y1={1}
																				x2={0}
																				y2={64}
																				stroke="transparent"
																				strokeDasharray={0}
																				strokeLinecap="butt"
																			/>
																		</g>
																		<g
																			id="SvgjsG1917"
																			className="apexcharts-grid-borders"
																			style={{ display: "none" }}
																		/>
																		<g
																			id="SvgjsG1909"
																			className="apexcharts-line-series apexcharts-plot-series"
																		>
																			<g
																				id="SvgjsG1910"
																				className="apexcharts-series"
																		
																				
																			
																				rel={1}
																				data:realindex={0}
																			>
																				<path
																					id="SvgjsPath1913"
																					d="M 0 36.57142857142857C 19.483333333333334 36.57142857142857 36.18333333333334 16.457142857142856 55.66666666666667 16.457142857142856C 75.15 16.457142857142856 91.85000000000001 64 111.33333333333334 64C 130.81666666666666 64 147.51666666666668 27.428571428571423 167 27.428571428571423C 186.48333333333335 27.428571428571423 203.18333333333334 64 222.66666666666669 64C 242.15000000000003 64 258.85 18.285714285714285 278.33333333333337 18.285714285714285C 297.8166666666667 18.285714285714285 314.51666666666665 54.857142857142854 334 54.857142857142854C 353.48333333333335 54.857142857142854 370.18333333333334 36.57142857142857 389.6666666666667 36.57142857142857C 409.15000000000003 36.57142857142857 425.85 54.857142857142854 445.33333333333337 54.857142857142854C 464.8166666666667 54.857142857142854 481.51666666666665 0 501 0M 501 0"
																					fill="none"
																					fillOpacity={1}
																					stroke="rgba(163, 199, 241, 1) "
																					strokeOpacity={1}
																					strokeLinecap="butt"
																					strokeWidth={6}
																					strokeDasharray={0}
																					className="apexcharts-line"
																					index={0}
																					clipPath="url(#gridRectMaskxj0bfwy9)"
																					pathto="M 0 36.57142857142857C 19.483333333333334 36.57142857142857 36.18333333333334 16.457142857142856 55.66666666666667 16.457142857142856C 75.15 16.457142857142856 91.85000000000001 64 111.33333333333334 64C 130.81666666666666 64 147.51666666666668 27.428571428571423 167 27.428571428571423C 186.48333333333335 27.428571428571423 203.18333333333334 64 222.66666666666669 64C 242.15000000000003 64 258.85 18.285714285714285 278.33333333333337 18.285714285714285C 297.8166666666667 18.285714285714285 314.51666666666665 54.857142857142854 334 54.857142857142854C 353.48333333333335 54.857142857142854 370.18333333333334 36.57142857142857 389.6666666666667 36.57142857142857C 409.15000000000003 36.57142857142857 425.85 54.857142857142854 445.33333333333337 54.857142857142854C 464.8166666666667 54.857142857142854 481.51666666666665 0 501 0M 501 0"
																					pathfrom="M -1 73.14285714285714 L -1 73.14285714285714 L 55.66666666666667 73.14285714285714 L 111.33333333333334 73.14285714285714 L 167 73.14285714285714 L 222.66666666666669 73.14285714285714 L 278.33333333333337 73.14285714285714 L 334 73.14285714285714 L 389.6666666666667 73.14285714285714 L 445.33333333333337 73.14285714285714 L 501 73.14285714285714"
																					fillRule="evenodd"
																				/>
																				<g
																					id="SvgjsG1911"
																					className="apexcharts-series-markers-wrap apexcharts-hidden-element-shown"
																					data:realindex={0}
																				/>
																			</g>
																			<g
																				id="SvgjsG1912"
																				className="apexcharts-datalabels"
																				data:realindex={0}
																			/>
																		</g>
																		<line
																			id="SvgjsLine1922"
																			x1={0}
																			y1={0}
																			x2={501}
																			y2={0}
																			stroke="#b6b6b6"
																			strokeDasharray={0}
																			strokeWidth={1}
																			strokeLinecap="butt"
																			className="apexcharts-ycrosshairs"
																		/>
																		<line
																			id="SvgjsLine1923"
																			x1={0}
																			y1={0}
																			x2={501}
																			y2={0}
																			strokeDasharray={0}
																			strokeWidth={0}
																			strokeLinecap="butt"
																			className="apexcharts-ycrosshairs-hidden"
																		/>
																		<g
																			id="SvgjsG1924"
																			className="apexcharts-xaxis"
																			transform="translate(0, 0)"
																		>
																			<g
																				id="SvgjsG1925"
																				className="apexcharts-xaxis-texts-g"
																				transform="translate(0, -4)"
																			/>
																		</g>
																		<g
																			id="SvgjsG1937"
																			className="apexcharts-yaxis-annotations"
																		/>
																		<g
																			id="SvgjsG1938"
																			className="apexcharts-xaxis-annotations"
																		/>
																		<g
																			id="SvgjsG1939"
																			className="apexcharts-point-annotations"
																		/>
																	</g>
																</svg> */}
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
										<div
											className="swiper-slide swiper-slide-next"
											style={{ width: "240.75px", marginRight: 30 }}
										>
											<div className="card card-box bg-secondary bg-pink">
												<div className="card-header border-0 pb-0">
													<div className="chart-num">
														<p>
															<i className="fa-solid fa-sort-down me-2" />
															4%(30 days)
														</p>
														<h2 className="font-w600 mb-0">$68,123</h2>
													</div>
													<div className="dlab-swiper-circle">

													</div>
												</div>
												<div className="card-body p-0">
													<div id="widgetChart1" className="chart-primary">
														<div
															options="[object Object]"
															series="[object Object]"
															type="line"
															height={70}
															width={500}
															style={{ minHeight: 70 }}
														>
															<div
																id="apexcharts30m8sxph"
																className="apexcharts-canvas apexcharts30m8sxph apexcharts-theme-light"
																style={{ width: 500, height: 70 }}
															>

															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
										<div
											className="swiper-slide"
											style={{ width: "240.75px", marginRight: 30 }}
										>
											<div className="card card-box bg-secondary bg-dark">
												<div className="card-header border-0 pb-0">
													<div className="chart-num">
														<p>
															<i className="fa-solid fa-sort-down me-2" />
															4%(30 days)
														</p>
														<h2 className="font-w600 mb-0">$66,123</h2>
													</div>
													<div className="dlab-swiper-circle">

													</div>
												</div>
												<div className="card-body p-0">
													<div id="widgetChart1" className="chart-primary">
														<div
															options="[object Object]"
															series="[object Object]"
															type="line"
															height={70}
															width={500}
															style={{ minHeight: 70 }}
														>
															<div
																id="apexchartsa8p9rnb1"
																className="apexcharts-canvas apexchartsa8p9rnb1 apexcharts-theme-light"
																style={{ width: 500, height: 70 }}
															>

															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
										<div
											className="swiper-slide"
											style={{ width: "240.75px", marginRight: 30 }}
										>
											<div className="card card-box bg-secondary bg-warning">
												<div className="card-header border-0 pb-0">
													<div className="chart-num">
														<p>
															<i className="fa-solid fa-sort-down me-2" />
															4%(30 days)
														</p>
														<h2 className="font-w600 mb-0">$67,123</h2>
													</div>
													<div className="dlab-swiper-circle">

													</div>
												</div>
												<div className="card-body p-0">
													<div id="widgetChart1" className="chart-primary">
														<div
															options="[object Object]"
															series="[object Object]"
															type="line"
															height={70}
															width={500}
															style={{ minHeight: 70 }}
														>
															<div
																id="apexchartsei8n3kpv"
																className="apexcharts-canvas apexchartsei8n3kpv apexcharts-theme-light"
																style={{ width: 500, height: 70 }}
															>

															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
										<div
											className="swiper-slide"
											style={{ width: "240.75px", marginRight: 30 }}
										>
											<div className="card card-box bg-secondary bg-pink">
												<div className="card-header border-0 pb-0">
													<div className="chart-num">
														<p>
															<i className="fa-solid fa-sort-down me-2" />
															4%(30 days)
														</p>
														<h2 className="font-w600 mb-0">$68,123</h2>
													</div>
													<div className="dlab-swiper-circle">

													</div>
												</div>
												<div className="card-body p-0">
													<div id="widgetChart1" className="chart-primary">
														<div
															options="[object Object]"
															series="[object Object]"
															type="line"
															height={70}
															width={500}
															style={{ minHeight: 70 }}
														>
															<div
																id="apexcharts73sn7z2v"
																className="apexcharts-canvas apexcharts73sn7z2v apexcharts-theme-light"
																style={{ width: 500, height: 70 }}
															>

															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
										<div
											className="swiper-slide"
											style={{ width: "240.75px", marginRight: 30 }}
										>
											<div className="card card-box bg-secondary bg-warning">
												<div className="card-header border-0 pb-0">
													<div className="chart-num">
														<p>
															<i className="fa-solid fa-sort-down me-2" />
															4%(30 days)
														</p>
														<h2 className="font-w600 mb-0">$67,123</h2>
													</div>
													<div className="dlab-swiper-circle">

													</div>
												</div>
												<div className="card-body p-0">
													<div id="widgetChart1" className="chart-primary">
														<div
															options="[object Object]"
															series="[object Object]"
															type="line"
															height={70}
															width={500}
															style={{ minHeight: 70 }}
														>
															<div
																id="apexcharts9jbdml7d"
																className="apexcharts-canvas apexcharts9jbdml7d apexcharts-theme-light"
																style={{ width: 500, height: 70 }}
															>

															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="row">
								<div className="col-xl-6">
									<div className="card crypto-chart">
										<div className="card-header pb-0 border-0 flex-wrap">
											<div className="mb-0">
												<h4 className="card-title">Crypto Statistics</h4>
												<p>Lorem ipsum dolor sit amet, consectetur</p>
											</div>
											<div className="d-flex mb-2">
												<div className="form-check form-switch toggle-switch me-3">
													<label
														className="form-check-label"
														htmlFor="flexSwitchCheckChecked1"
													>
														Date
													</label>
													<input
														className="form-check-input custome"
														type="checkbox"
														id="flexSwitchCheckChecked1"
														defaultChecked=""
													/>
												</div>
												<div className="form-check form-switch toggle-switch">
													<label
														className="form-check-label"
														htmlFor="flexSwitchCheckChecked2"
													>
														Value
													</label>
													<input
														className="form-check-input custome"
														type="checkbox"
														id="flexSwitchCheckChecked2"
														defaultChecked=""
													/>
												</div>
											</div>
										</div>
										<div className="card-body pt-2">
											<ul className="nav nav-pills nav" role="tablist">
												<li className="nav-item nav-item">
													<a
														role="tab"
														data-rr-ui-event-key="Ripple"
														id="react-aria9411038436-:r9:-tab-Ripple"
														aria-controls="react-aria9411038436-:r9:-tabpane-Ripple"
														aria-selected="true"
														className="nav-link active"
														tabIndex={0}
														href="#"
													>
														Ripple
													</a>
												</li>
												<li className="nav-item nav-item">
													<a
														role="tab"
														data-rr-ui-event-key="Bitcoin"
														id="react-aria9411038436-:r9:-tab-Bitcoin"
														aria-controls="react-aria9411038436-:r9:-tabpane-Bitcoin"
														aria-selected="false"
														tabIndex={-1}
														className="nav-link"
														href="#"
													>
														Bitcoin
													</a>
												</li>
												<li className="nav-item nav-item">
													<a
														role="tab"
														data-rr-ui-event-key="Ethereum"
														id="react-aria9411038436-:r9:-tab-Ethereum"
														aria-controls="react-aria9411038436-:r9:-tabpane-Ethereum"
														aria-selected="false"
														tabIndex={-1}
														className="nav-link"
														href="#"
													>
														Ethereum
													</a>
												</li>
												<li className="nav-item nav-item">
													<a
														role="tab"
														data-rr-ui-event-key="Zcash"
														id="react-aria9411038436-:r9:-tab-Zcash"
														aria-controls="react-aria9411038436-:r9:-tabpane-Zcash"
														aria-selected="false"
														tabIndex={-1}
														className="nav-link"
														href="#"
													>
														Zcash
													</a>
												</li>
												<li className="nav-item nav-item">
													<a
														role="tab"
														data-rr-ui-event-key="LiteCoin"
														id="react-aria9411038436-:r9:-tab-LiteCoin"
														aria-controls="react-aria9411038436-:r9:-tabpane-LiteCoin"
														aria-selected="false"
														tabIndex={-1}
														className="nav-link"
														href="#"
													>
														LiteCoin
													</a>
												</li>
											</ul>
											<div id="marketChart">
												<div
													options="[object Object]"
													series="[object Object],[object Object]"
													type="line"
													height={300}
													width="100%"
													style={{ minHeight: 315 }}
												>
													<div
														id="apexcharts6pm8jonsg"
														className="apexcharts-canvas apexcharts6pm8jonsg apexcharts-theme-light"
														style={{ width: 459, height: 300 }}
													>

														<div className="apexcharts-tooltip apexcharts-theme-light">
															<div
																className="apexcharts-tooltip-title"
																style={{
																	fontFamily: "Helvetica, Arial, sans-serif",
																	fontSize: 12
																}}
															/>
															<div
																className="apexcharts-tooltip-series-group"
																style={{ order: 1 }}
															>
																<span
																	className="apexcharts-tooltip-marker"
																	style={{ backgroundColor: "var(--primary)" }}
																/>
																<div
																	className="apexcharts-tooltip-text"
																	style={{
																		fontFamily: "Helvetica, Arial, sans-serif",
																		fontSize: 12
																	}}
																>
																	<div className="apexcharts-tooltip-y-group">
																		<span className="apexcharts-tooltip-text-y-label" />
																		<span className="apexcharts-tooltip-text-y-value" />
																	</div>
																	<div className="apexcharts-tooltip-goals-group">
																		<span className="apexcharts-tooltip-text-goals-label" />
																		<span className="apexcharts-tooltip-text-goals-value" />
																	</div>
																	<div className="apexcharts-tooltip-z-group">
																		<span className="apexcharts-tooltip-text-z-label" />
																		<span className="apexcharts-tooltip-text-z-value" />
																	</div>
																</div>
															</div>
															<div
																className="apexcharts-tooltip-series-group"
																style={{ order: 2 }}
															>
																<span
																	className="apexcharts-tooltip-marker"
																	style={{ backgroundColor: "var(--secondary)" }}
																/>
																<div
																	className="apexcharts-tooltip-text"
																	style={{
																		fontFamily: "Helvetica, Arial, sans-serif",
																		fontSize: 12
																	}}
																>
																	<div className="apexcharts-tooltip-y-group">
																		<span className="apexcharts-tooltip-text-y-label" />
																		<span className="apexcharts-tooltip-text-y-value" />
																	</div>
																	<div className="apexcharts-tooltip-goals-group">
																		<span className="apexcharts-tooltip-text-goals-label" />
																		<span className="apexcharts-tooltip-text-goals-value" />
																	</div>
																	<div className="apexcharts-tooltip-z-group">
																		<span className="apexcharts-tooltip-text-z-label" />
																		<span className="apexcharts-tooltip-text-z-value" />
																	</div>
																</div>
															</div>
														</div>
														<div className="apexcharts-yaxistooltip apexcharts-yaxistooltip-0 apexcharts-yaxistooltip-left apexcharts-theme-light">
															<div className="apexcharts-yaxistooltip-text" />
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="col-xl-6">
									<div className="card market-chart">
										<div className="card-header border-0 pb-0 flex-wrap">
											<div className="mb-0">
												<h4 className="card-title">Market Overview</h4>
												<p>Lorem ipsum dolor sit amet, consectetur</p>
											</div>
											<a
												className="btn-link text-primary get-report mb-2"
												href="/vite/demo/dashboard"
											>

												Get Report
											</a>
										</div>
										<div className="card-body pt-2">
											<div className="d-flex justify-content-between flex-wrap">
												<div className="d-flex align-items-center mb-2">
													<h5 className="me-2 font-w600 m-0">
														<span className="text-success me-2">BUY</span> $5,673
													</h5>
													<h5 className="ms-2 font-w600 m-0">
														<span className="text-danger me-2">SELL</span> $5,982
													</h5>
												</div>
												<ul
													className="nav nav-pills justify-content-between mb-2 nav"
													role="tablist"
												>
													<li className="nav-item nav-item">
														<a
															role="tab"
															data-rr-ui-event-key="Week"
															id="react-aria9411038436-:ra:-tab-Week"
															aria-controls="react-aria9411038436-:ra:-tabpane-Week"
															aria-selected="true"
															className="nav-link active"
															tabIndex={0}
															href="#"
														>
															Week
														</a>
													</li>
													<li className="nav-item nav-item">
														<a
															role="tab"
															data-rr-ui-event-key="Month"
															id="react-aria9411038436-:ra:-tab-Month"
															aria-controls="react-aria9411038436-:ra:-tabpane-Month"
															aria-selected="false"
															tabIndex={-1}
															className="nav-link"
															href="#"
														>
															Month
														</a>
													</li>
													<li className="nav-item nav-item">
														<a
															role="tab"
															data-rr-ui-event-key="Year"
															id="react-aria9411038436-:ra:-tab-Year"
															aria-controls="react-aria9411038436-:ra:-tabpane-Year"
															aria-selected="false"
															tabIndex={-1}
															className="nav-link"
															href="#"
														>
															Year
														</a>
													</li>
												</ul>
											</div>
											<div id="marketChart2" className="market-line">
												<div
													options="[object Object]"
													series="[object Object]"
													type="candlestick"
													height={280}
													width="100%"
													style={{ minHeight: 295 }}
												>
													<div
														id="apexchartsv4w56c37"
														className="apexcharts-canvas apexchartsv4w56c37 apexcharts-theme-light"
														style={{ width: 465, height: 280 }}
													>

														<div className="apexcharts-tooltip apexcharts-theme-light">
															<div
																className="apexcharts-tooltip-title"
																style={{
																	fontFamily: "Helvetica, Arial, sans-serif",
																	fontSize: 12
																}}
															/>
															<div
																className="apexcharts-tooltip-series-group"
																style={{ order: 1 }}
															>
																<span
																	className="apexcharts-tooltip-marker"
																	style={{ backgroundColor: "rgb(0, 143, 251)" }}
																/>
																<div
																	className="apexcharts-tooltip-text"
																	style={{
																		fontFamily: "Helvetica, Arial, sans-serif",
																		fontSize: 12
																	}}
																>
																	<div className="apexcharts-tooltip-y-group">
																		<span className="apexcharts-tooltip-text-y-label" />
																		<span className="apexcharts-tooltip-text-y-value" />
																	</div>
																	<div className="apexcharts-tooltip-goals-group">
																		<span className="apexcharts-tooltip-text-goals-label" />
																		<span className="apexcharts-tooltip-text-goals-value" />
																	</div>
																	<div className="apexcharts-tooltip-z-group">
																		<span className="apexcharts-tooltip-text-z-label" />
																		<span className="apexcharts-tooltip-text-z-value" />
																	</div>
																</div>
															</div>
														</div>
														<div className="apexcharts-xaxistooltip apexcharts-xaxistooltip-bottom apexcharts-theme-light">
															<div
																className="apexcharts-xaxistooltip-text"
																style={{
																	fontFamily: "Helvetica, Arial, sans-serif",
																	fontSize: 12
																}}
															/>
														</div>
														<div className="apexcharts-yaxistooltip apexcharts-yaxistooltip-0 apexcharts-yaxistooltip-right apexcharts-theme-light">
															<div className="apexcharts-yaxistooltip-text" />
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="col-lg-12">
								<div className="card transaction-table">
									<div className="card-header border-0 flex-wrap pb-0">
										<div className="mb-2">
											<h4 className="card-title">Recent Transactions</h4>
											<p className="mb-sm-3 mb-0">
												Lorem ipsum dolor sit amet, consectetur
											</p>
										</div>
										<ul className="float-end nav nav-pills mb-2">
											<li className="nav-item">
												<button className="nav-link active">Week</button>
											</li>
											<li className="nav-item">
												<button className="nav-link ">Month</button>
											</li>
											<li className="nav-item">
												<button className="nav-link ">Year</button>
											</li>
										</ul>
									</div>
									<div className="card-body p-0">
										<div className="tab-content" id="myTabContent1">
											<div
												className="tab-pane fade show active"
												id="Week"
												role="tabpanel"
												aria-labelledby="Week-tab"
											>
												<div className="table-responsive">
													<table className="table table-responsive-md">
														<thead>
															<tr>
																<th>#</th>
																<th>Transaction ID</th>
																<th>Date</th>
																<th>From</th>
																<th>To</th>
																<th>Coin</th>
																<th>Amount</th>
																<th className="text-end">Status</th>
															</tr>
														</thead>
														<tbody>
															<tr>
																<td>

																</td>
																<td>#12415346563475</td>
																<td>01 August 2020</td>
																<td>Donalt</td>
																<td>
																	<div className="d-flex align-items-center">
																		<img
																			src="/vite/demo/assets/1-DFfjU_dL.jpg"
																			className=" me-2"
																			width={30}
																			alt=""
																		/>{" "}
																		<span className="w-space-no">Dr. Jackson</span>
																	</div>
																</td>
																<td>
																	<div className="d-flex align-items-center">
																		<img
																			src="data:image/svg+xml,%3csvg%20width='137'%20height='137'%20viewBox='0%200%20137%20137'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M92.9644%2053.8221C92.9599%2048.4197%2088.5804%2044.0417%2083.1795%2044.0357H53.822V63.6069H83.1795C88.5804%2063.6024%2092.9599%2059.2229%2092.9644%2053.8221Z'%20fill='%23FFAB2D'/%3e%3cpath%20d='M53.822%2092.9645H83.1795C88.5834%2092.9645%2092.9644%2088.5835%2092.9644%2083.1796C92.9644%2077.7743%2088.5834%2073.3933%2083.1795%2073.3933H53.822V92.9645Z'%20fill='%23FFAB2D'/%3e%3cpath%20d='M68.5001%209.15527e-05C30.6687%209.15527e-05%200.00012207%2030.6687%200.00012207%2068.5001C0.00012207%20106.332%2030.6687%20137%2068.5001%20137C106.332%20137%20137%20106.332%20137%2068.5001C136.957%2030.6866%20106.314%200.0433939%2068.5001%209.15527e-05V9.15527e-05ZM102.751%2083.1781C102.737%2093.9828%2093.9829%20102.737%2083.1797%20102.749V107.643C83.1797%20110.345%2080.9877%20112.536%2078.2865%20112.536C75.5838%20112.536%2073.3933%20110.345%2073.3933%20107.643V102.749H63.6084V107.643C63.6084%20110.345%2061.4164%20112.536%2058.7153%20112.536C56.0126%20112.536%2053.8221%20110.345%2053.8221%20107.643V102.749H39.144C36.4414%20102.749%2034.2509%20100.559%2034.2509%2097.8577C34.2509%2095.155%2036.4414%2092.9645%2039.144%2092.9645H44.0357V44.0357H39.144C36.4414%2044.0357%2034.2509%2041.8452%2034.2509%2039.1425C34.2509%2036.4399%2036.4414%2034.2493%2039.144%2034.2493H53.8221V29.3577C53.8221%2026.655%2056.0126%2024.4645%2058.7153%2024.4645C61.4179%2024.4645%2063.6084%2026.655%2063.6084%2029.3577V34.2493H73.3933V29.3577C73.3933%2026.655%2075.5838%2024.4645%2078.2865%2024.4645C80.9891%2024.4645%2083.1797%2026.655%2083.1797%2029.3577V34.2493C93.9426%2034.2045%20102.705%2042.8919%20102.751%2053.6548C102.775%2059.3543%20100.304%2064.7791%2095.9867%2068.5001C100.263%2072.1793%20102.731%2077.5354%20102.751%2083.1781V83.1781Z'%20fill='%23FFAB2D'/%3e%3c/svg%3e"
																			alt=""
																			className="me-2 img-btc"
																		/>
																		Bitcoin
																	</div>
																</td>
																<td className="text-success font-w600">+$5,553</td>
																<td className="text-end">
																	<div className="badge badge-sm badge-success">
																		COMPLETED
																	</div>
																</td>
															</tr>
															<tr>
																<td>

																</td>
																<td>#12415346563475</td>
																<td>01 August 2020</td>
																<td>Thomas</td>
																<td>
																	<div className="d-flex align-items-center">
																		<img
																			src="/vite/demo/assets/2-CP3UVaRM.jpg"
																			className=" me-2"
																			width={30}
																			alt=""
																		/>{" "}
																		<span className="w-space-no">Kritiyan</span>
																	</div>
																</td>
																<td>
																	<div className="d-flex align-items-center">
																		<img
																			src="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%3e%3cdefs%3e%3cstyle%3e%20.cls-1%20{%20fill:%20%23413fbb;%20fill-rule:%20evenodd;%20}%20%3c/style%3e%3c/defs%3e%3cpath%20id='Vector'%20class='cls-1'%20d='M1583,256a12,12,0,1,0,12,12,12,12,0,0,0-12-12h0Zm5.76,9.923-1.03,5.158a2.567,2.567,0,0,1-2.51,2.062h-7.18a0.858,0.858,0,0,1,0-1.715h7.18a0.852,0.852,0,0,0,.83-0.683l1.03-5.158a0.852,0.852,0,0,0-.67-1,0.791,0.791,0,0,0-.16-0.017h-6.49a0.857,0.857,0,1,1,0-1.714h6.49a2.566,2.566,0,0,1,2.56,2.565,2.808,2.808,0,0,1-.05.5h0Zm-10.72,1.22h3.43a0.857,0.857,0,1,1,0,1.714h-3.43A0.857,0.857,0,0,1,1578.04,267.143Z'%20transform='translate(-1571%20-256)'/%3e%3c/svg%3e"
																			alt=""
																			className="me-2 img-btc"
																		/>
																		Bitcoin
																	</div>
																</td>
																<td className="text-success font-w600">+$5,553</td>
																<td className="text-end">
																	<div className="badge badge-sm badge-warning">
																		PENDING
																	</div>
																</td>
															</tr>
															<tr>
																<td>

																</td>
																<td>#12415346563475</td>
																<td>01 August 2020</td>
																<td>Hitesh</td>
																<td>
																	<div className="d-flex align-items-center">
																		<img
																			src="/vite/demo/assets/3-MOWAZPsp.jpg"
																			className=" me-2"
																			width={30}
																			alt=""
																		/>{" "}
																		<span className="w-space-no">Prof. Kalyan</span>
																	</div>
																</td>
																<td>
																	<div className="d-flex align-items-center">
																		<img
																			src="data:image/svg+xml,%3csvg%20width='137'%20height='137'%20viewBox='0%200%20137%20137'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M70.3615%2078.5206C69.1671%2078.9977%2067.8366%2078.9977%2066.6421%2078.5206L53.8232%2073.3927L68.5018%20102.75L83.1804%2073.3927L70.3615%2078.5206Z'%20fill='%23DC3CCC'/%3e%3cpath%20d='M68.4982%2068.5L88.0696%2061.6503L68.4982%2034.25L48.9268%2061.6503L68.4982%2068.5Z'%20fill='%23DC3CCC'/%3e%3cpath%20d='M68.5%200C30.6686%200%200%2030.6686%200%2068.5C0%20106.331%2030.6686%20137%2068.5%20137C106.331%20137%20137%20106.331%20137%2068.5C136.958%2030.6865%20106.313%200.0418093%2068.5%200V0ZM97.3409%2065.7958L72.8765%20114.725C71.6685%20117.142%2068.7285%20118.122%2066.3125%20116.914C65.3643%20116.44%2064.5968%20115.673%2064.1235%20114.725L39.6591%2065.7958C38.899%2064.2698%2038.9856%2062.4586%2039.8875%2061.0117L64.3519%2021.8692C65.978%2019.5787%2069.151%2019.0381%2071.4416%2020.6642C71.9089%2020.9957%2072.3166%2021.4019%2072.6481%2021.8692L97.111%2061.0117C98.0144%2062.4586%2098.101%2064.2698%2097.3409%2065.7958V65.7958Z'%20fill='%23DC3CCC'/%3e%3c/svg%3e"
																			alt=""
																			className="me-2 img-btc"
																		/>
																		Bitcoin
																	</div>
																</td>
																<td className="text-success font-w600">+$5,553</td>
																<td className="text-end">
																	<div className="badge badge-sm badge-danger">
																		CANCEL
																	</div>
																</td>
															</tr>
														</tbody>
													</table>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			


	);
}

export default Dashboard;

